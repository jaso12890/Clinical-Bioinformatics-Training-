import type {
  ClinVarLookupResult,
  ClinVarRecordSummary,
  NcbiLinkedResourceSummary,
  NcbiLinkedResourcesResult,
} from "../../types/genomics";
import { fetchWithTimeout, getCachedValue } from "./request";

const NCBI_EUTILS_BASE_URL = "https://eutils.ncbi.nlm.nih.gov/entrez/eutils";
const CACHE_TTL_MS = 1000 * 60 * 30;

type NcbiClinVarSearchResponse = {
  esearchresult?: {
    count?: string;
    idlist?: string[];
  };
};

type NcbiClinVarSummaryResponse = {
  result?: {
    uids?: string[];
    [uid: string]: unknown;
  };
};

type NcbiClinVarDocumentSummary = {
  uid?: string;
  title?: string;
  accession?: string;
  accession_version?: string;
  variation_id?: string;
  variation_type?: string;
  genes?: Array<{
    symbol?: string;
  }>;
  germline_classification?: {
    description?: string;
    review_status?: string;
    last_evaluated?: string;
  };
  clinical_significance?: {
    description?: string;
    review_status?: string;
  };
  trait_set?: Array<{
    trait_name?: string;
  }>;
  molecular_consequence_list?: Array<{
    so_name?: string;
  }>;
};

type NcbiSearchResponse = {
  esearchresult?: {
    count?: string;
    idlist?: string[];
  };
};

type NcbiDatabaseConfig = {
  database: NcbiLinkedResourceSummary["database"];
  dbName: NcbiLinkedResourceSummary["dbName"];
};

type NcbiSearchResult = {
  totalFound: number;
  topIds: string[];
};

const linkedResourceDatabases: NcbiDatabaseConfig[] = [
  { database: "PubMed", dbName: "pubmed" },
  { database: "Gene", dbName: "gene" },
  { database: "ClinVar", dbName: "clinvar" },
  { database: "Nucleotide", dbName: "nuccore" },
];

function isClinVarDocumentSummary(
  value: unknown
): value is NcbiClinVarDocumentSummary {
  return typeof value === "object" && value !== null;
}

function normaliseClinVarRecord(
  uid: string,
  record: NcbiClinVarDocumentSummary
): ClinVarRecordSummary {
  const germlineClassification = record.germline_classification;
  const clinicalSignificance = record.clinical_significance;

  return {
    uid,
    title: record.title,
    accession: record.accession,
    accessionVersion: record.accession_version,
    variationId: record.variation_id,
    variantType: record.variation_type,
    geneSymbol: record.genes?.[0]?.symbol,
    clinicalSignificance:
      germlineClassification?.description ??
      clinicalSignificance?.description,
    reviewStatus:
      germlineClassification?.review_status ??
      clinicalSignificance?.review_status,
    lastEvaluated: germlineClassification?.last_evaluated,
    conditionNames:
      record.trait_set
        ?.map((trait) => trait.trait_name)
        .filter((traitName): traitName is string => Boolean(traitName)) ?? [],
    molecularConsequences:
      record.molecular_consequence_list
        ?.map((consequence) => consequence.so_name)
        .filter(
          (consequenceName): consequenceName is string =>
            Boolean(consequenceName)
        ) ?? [],
    source: "ClinVar",
  };
}

function createNcbiSearchUrl(dbName: NcbiDatabaseConfig["dbName"], query: string) {
  const databaseUrlMap: Record<NcbiDatabaseConfig["dbName"], string> = {
    pubmed: "https://pubmed.ncbi.nlm.nih.gov/",
    gene: "https://www.ncbi.nlm.nih.gov/gene/",
    clinvar: "https://www.ncbi.nlm.nih.gov/clinvar/",
    nuccore: "https://www.ncbi.nlm.nih.gov/nuccore/",
  };

  const url = new URL(databaseUrlMap[dbName]);
  url.searchParams.set("term", query);

  return url.toString();
}

function createNcbiDirectUrl(
  dbName: NcbiDatabaseConfig["dbName"],
  firstId?: string
) {
  if (!firstId) {
    return undefined;
  }

  if (dbName !== "gene") {
    return undefined;
  }

  return `https://www.ncbi.nlm.nih.gov/gene/${firstId}/`;
}

function createDatabaseSpecificSearchTerms(
  dbName: NcbiDatabaseConfig["dbName"],
  query: string
) {
  const cleanedQuery = query.trim();

  if (dbName === "gene") {
    return [
      `${cleanedQuery}[sym] AND Homo sapiens[orgn]`,
      `${cleanedQuery}[Gene Name] AND Homo sapiens[orgn]`,
      `${cleanedQuery} AND Homo sapiens[orgn]`,
      cleanedQuery,
    ];
  }

  if (dbName === "nuccore") {
    return [
      `${cleanedQuery} AND Homo sapiens[orgn]`,
      `${cleanedQuery} AND human[orgn]`,
      cleanedQuery,
    ];
  }

  return [cleanedQuery];
}

async function runNcbiSearch(
  dbName: NcbiDatabaseConfig["dbName"],
  searchTerm: string
): Promise<NcbiSearchResult> {
  const searchUrl = new URL(`${NCBI_EUTILS_BASE_URL}/esearch.fcgi`);
  searchUrl.searchParams.set("db", dbName);
  searchUrl.searchParams.set("term", searchTerm);
  searchUrl.searchParams.set("retmode", "json");
  searchUrl.searchParams.set("retmax", "5");

  const response = await fetchWithTimeout(
    searchUrl.toString(),
    {
      headers: {
        Accept: "application/json",
      },
    },
    12000
  );

  if (!response.ok) {
    return {
      totalFound: 0,
      topIds: [],
    };
  }

  const data = (await response.json()) as NcbiSearchResponse;

  return {
    totalFound: Number(data.esearchresult?.count ?? 0),
    topIds: data.esearchresult?.idlist ?? [],
  };
}

async function searchNcbiDatabase(
  dbConfig: NcbiDatabaseConfig,
  query: string
): Promise<NcbiLinkedResourceSummary> {
  if (dbConfig.dbName === "pubmed") {
    return {
      database: dbConfig.database,
      dbName: dbConfig.dbName,
      topIds: [],
      searchUrl: createNcbiSearchUrl(dbConfig.dbName, query),
      opensDirectRecord: false,
    };
  }

  const searchTerms = createDatabaseSpecificSearchTerms(dbConfig.dbName, query);

  let bestResult: NcbiSearchResult = {
    totalFound: 0,
    topIds: [],
  };

  for (const searchTerm of searchTerms) {
    const result = await runNcbiSearch(dbConfig.dbName, searchTerm);

    if (result.totalFound > 0) {
      bestResult = result;
      break;
    }

    bestResult = result;
  }

  const firstId = bestResult.topIds[0];
  const directUrl = createNcbiDirectUrl(dbConfig.dbName, firstId);

  return {
    database: dbConfig.database,
    dbName: dbConfig.dbName,
    totalFound: bestResult.totalFound,
    topIds: bestResult.topIds,
    searchUrl: createNcbiSearchUrl(dbConfig.dbName, query),
    directUrl,
    opensDirectRecord: Boolean(directUrl),
  };
}

export async function lookupClinVar(
  query: string
): Promise<ClinVarLookupResult> {
  const cleanedQuery = query.trim();

  if (!cleanedQuery) {
    throw new Error("Please enter a ClinVar search term.");
  }

  return getCachedValue(
    `ncbi:clinvar:${cleanedQuery.toUpperCase()}`,
    CACHE_TTL_MS,
    async () => {
      const searchUrl = new URL(`${NCBI_EUTILS_BASE_URL}/esearch.fcgi`);
      searchUrl.searchParams.set("db", "clinvar");
      searchUrl.searchParams.set("term", cleanedQuery);
      searchUrl.searchParams.set("retmode", "json");
      searchUrl.searchParams.set("retmax", "5");

      const searchResponse = await fetchWithTimeout(
        searchUrl.toString(),
        {
          headers: {
            Accept: "application/json",
          },
        },
        12000
      );

      if (!searchResponse.ok) {
        throw new Error(
          "Unable to search ClinVar through NCBI E-utilities. The external service may be slow or unavailable."
        );
      }

      const searchData =
        (await searchResponse.json()) as NcbiClinVarSearchResponse;

      const ids = searchData.esearchresult?.idlist ?? [];
      const totalFound = Number(searchData.esearchresult?.count ?? 0);

      if (ids.length === 0) {
        return {
          query: cleanedQuery,
          totalFound,
          records: [],
          source: "ClinVar via NCBI E-utilities",
        };
      }

      const summaryUrl = new URL(`${NCBI_EUTILS_BASE_URL}/esummary.fcgi`);
      summaryUrl.searchParams.set("db", "clinvar");
      summaryUrl.searchParams.set("id", ids.join(","));
      summaryUrl.searchParams.set("retmode", "json");

      const summaryResponse = await fetchWithTimeout(
        summaryUrl.toString(),
        {
          headers: {
            Accept: "application/json",
          },
        },
        12000
      );

      if (!summaryResponse.ok) {
        throw new Error(
          "Unable to retrieve ClinVar summaries from NCBI. The external service may be slow or unavailable."
        );
      }

      const summaryData =
        (await summaryResponse.json()) as NcbiClinVarSummaryResponse;

      const records: ClinVarRecordSummary[] = ids
        .map((uid) => {
          const rawRecord = summaryData.result?.[uid];

          if (!isClinVarDocumentSummary(rawRecord)) {
            return null;
          }

          return normaliseClinVarRecord(uid, rawRecord);
        })
        .filter((record): record is ClinVarRecordSummary => record !== null);

      return {
        query: cleanedQuery,
        totalFound,
        records,
        source: "ClinVar via NCBI E-utilities",
      };
    }
  );
}

export async function lookupNcbiLinkedResources(
  query: string
): Promise<NcbiLinkedResourcesResult> {
  const cleanedQuery = query.trim();

  if (!cleanedQuery) {
    throw new Error("Please enter an NCBI search term.");
  }

  return getCachedValue(
    `ncbi:resources:${cleanedQuery.toUpperCase()}`,
    CACHE_TTL_MS,
    async () => {
      const resources = await Promise.all(
        linkedResourceDatabases.map((dbConfig) =>
          searchNcbiDatabase(dbConfig, cleanedQuery)
        )
      );

      return {
        query: cleanedQuery,
        resources,
        source: "NCBI E-utilities",
      };
    }
  );
}