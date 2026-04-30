import type {
  GeneLookupResult,
  GeneTranscriptSummary,
  RegionFeatureSummary,
  RegionLookupResult,
  TranscriptExonSummary,
  TranscriptLookupResult,
  VariantLookupResult,
  VariantTranscriptConsequenceSummary,
} from "../../types/genomics";
import { fetchWithTimeout, getCachedValue } from "./request";

const ENSEMBL_REST_BASE_URL = "https://rest.ensembl.org";
const CACHE_TTL_MS = 1000 * 60 * 30;

type EnsemblTranscript = {
  id?: string;
  display_name?: string;
  biotype?: string;
  start?: number;
  end?: number;
  strand?: number;
  length?: number;
  is_canonical?: number;
};

type EnsemblExon = {
  id?: string;
  start?: number;
  end?: number;
  strand?: number;
  phase?: number;
  end_phase?: number;
};

type EnsemblTranslation = {
  id?: string;
};

type EnsemblGeneLookupResponse = {
  id?: string;
  display_name?: string;
  description?: string;
  species?: string;
  biotype?: string;
  seq_region_name?: string;
  start?: number;
  end?: number;
  strand?: number;
  assembly_name?: string;
  canonical_transcript?: string;
  Transcript?: EnsemblTranscript[];
};

type EnsemblTranscriptLookupResponse = {
  id?: string;
  display_name?: string;
  Parent?: string;
  biotype?: string;
  seq_region_name?: string;
  start?: number;
  end?: number;
  strand?: number;
  length?: number;
  assembly_name?: string;
  Exon?: EnsemblExon[];
  Translation?: EnsemblTranslation;
};

type EnsemblRegionFeature = {
  id?: string;
  external_name?: string;
  feature_type?: string;
  biotype?: string;
  description?: string;
  seq_region_name?: string;
  start?: number;
  end?: number;
  strand?: number;
};

type EnsemblTranscriptConsequence = {
  gene_id?: string;
  gene_symbol?: string;
  transcript_id?: string;
  biotype?: string;
  consequence_terms?: string[];
  impact?: string;
  canonical?: number;
  hgvsc?: string;
  hgvsp?: string;
  cdna_start?: number;
  cdna_end?: number;
  cds_start?: number;
  cds_end?: number;
  protein_start?: number;
  protein_end?: number;
  amino_acids?: string;
  codons?: string;
};

type EnsemblVepResponseItem = {
  input?: string;
  most_severe_consequence?: string;
  assembly_name?: string;
  seq_region_name?: string;
  start?: number;
  end?: number;
  strand?: number;
  allele_string?: string;
  transcript_consequences?: EnsemblTranscriptConsequence[];
};

function normaliseTranscript(
  transcript: EnsemblTranscript
): GeneTranscriptSummary {
  return {
    id: transcript.id ?? "Unknown transcript",
    displayName: transcript.display_name,
    biotype: transcript.biotype,
    start: transcript.start,
    end: transcript.end,
    strand: transcript.strand,
    length: transcript.length,
    isCanonical: transcript.is_canonical === 1,
  };
}

function normaliseExon(exon: EnsemblExon): TranscriptExonSummary {
  return {
    id: exon.id,
    start: exon.start,
    end: exon.end,
    strand: exon.strand,
    phase: exon.phase,
    endPhase: exon.end_phase,
  };
}

function normaliseRegionFeature(
  feature: EnsemblRegionFeature
): RegionFeatureSummary {
  return {
    id: feature.id,
    externalName: feature.external_name,
    featureType: feature.feature_type,
    biotype: feature.biotype,
    description: feature.description,
    chromosome: feature.seq_region_name,
    start: feature.start,
    end: feature.end,
    strand: feature.strand,
  };
}

function normaliseTranscriptConsequence(
  consequence: EnsemblTranscriptConsequence
): VariantTranscriptConsequenceSummary {
  return {
    geneId: consequence.gene_id,
    geneSymbol: consequence.gene_symbol,
    transcriptId: consequence.transcript_id,
    biotype: consequence.biotype,
    consequenceTerms: consequence.consequence_terms ?? [],
    impact: consequence.impact,
    canonical: consequence.canonical === 1,
    hgvsc: consequence.hgvsc,
    hgvsp: consequence.hgvsp,
    cdnaStart: consequence.cdna_start,
    cdnaEnd: consequence.cdna_end,
    cdsStart: consequence.cds_start,
    cdsEnd: consequence.cds_end,
    proteinStart: consequence.protein_start,
    proteinEnd: consequence.protein_end,
    aminoAcids: consequence.amino_acids,
    codons: consequence.codons,
  };
}

function parseRegion(region: string) {
  const cleanedRegion = region.trim().replace(/^chr/i, "");
  const match = cleanedRegion.match(/^([^:]+):(\d+)-(\d+)$/);

  if (!match) {
    throw new Error("Enter a region in the format 17:43044295-43125483.");
  }

  const chromosome = match[1];
  const start = Number(match[2]);
  const end = Number(match[3]);

  if (!Number.isFinite(start) || !Number.isFinite(end) || start >= end) {
    throw new Error("Enter a valid region where the start is before the end.");
  }

  return {
    chromosome,
    start,
    end,
  };
}

function cleanVcfStyleVariantInput(variant: string) {
  const cleanedVariant = variant.trim().replace(/\s+/g, " ");

  if (!cleanedVariant) {
    throw new Error("Please enter a variant.");
  }

  const columns = cleanedVariant.split(" ");

  if (columns.length < 5) {
    throw new Error(
      "Enter a VCF-style variant line, for example: 21 26960070 rs116645811 G A . . ."
    );
  }

  const chromosome = columns[0].replace(/^chr/i, "");
  const position = Number(columns[1]);
  const id = columns[2] || ".";
  const referenceAllele = columns[3];
  const alternateAllele = columns[4];

  if (!chromosome || !Number.isFinite(position)) {
    throw new Error("The chromosome and position must be valid.");
  }

  if (!referenceAllele || !alternateAllele) {
    throw new Error("The reference and alternate alleles must be provided.");
  }

  return `${chromosome} ${position} ${id} ${referenceAllele.toUpperCase()} ${alternateAllele.toUpperCase()} . . .`;
}

export async function lookupGeneBySymbol(
  symbol: string
): Promise<GeneLookupResult> {
  const cleanedSymbol = symbol.trim();

  if (!cleanedSymbol) {
    throw new Error("Please enter a gene symbol.");
  }

  return getCachedValue(
    `ensembl:gene:${cleanedSymbol.toUpperCase()}`,
    CACHE_TTL_MS,
    async () => {
      const response = await fetchWithTimeout(
        `${ENSEMBL_REST_BASE_URL}/lookup/symbol/homo_sapiens/${encodeURIComponent(
          cleanedSymbol
        )}?expand=1`,
        {
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (!response.ok) {
        if (response.status === 404) {
          throw new Error(`No Ensembl gene result found for "${cleanedSymbol}".`);
        }

        throw new Error(
          "Unable to fetch gene information from Ensembl. The external service may be slow or unavailable."
        );
      }

      const data = (await response.json()) as EnsemblGeneLookupResponse;

      return {
        query: cleanedSymbol,
        symbol: data.display_name ?? cleanedSymbol.toUpperCase(),
        geneId: data.id ?? "Unknown Ensembl gene ID",
        displayName: data.display_name,
        description: data.description,
        species: data.species,
        biotype: data.biotype,
        chromosome: data.seq_region_name,
        start: data.start,
        end: data.end,
        strand: data.strand,
        assemblyName: data.assembly_name,
        canonicalTranscript: data.canonical_transcript,
        transcripts: Array.isArray(data.Transcript)
          ? data.Transcript.map(normaliseTranscript)
          : [],
        source: "Ensembl",
      };
    }
  );
}

export async function lookupTranscriptById(
  transcriptId: string
): Promise<TranscriptLookupResult> {
  const cleanedTranscriptId = transcriptId.trim();

  if (!cleanedTranscriptId) {
    throw new Error("Please enter a transcript ID.");
  }

  return getCachedValue(
    `ensembl:transcript:${cleanedTranscriptId.toUpperCase()}`,
    CACHE_TTL_MS,
    async () => {
      const response = await fetchWithTimeout(
        `${ENSEMBL_REST_BASE_URL}/lookup/id/${encodeURIComponent(
          cleanedTranscriptId
        )}?expand=1`,
        {
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (!response.ok) {
        if (response.status === 404) {
          throw new Error(
            `No Ensembl transcript result found for "${cleanedTranscriptId}".`
          );
        }

        throw new Error(
          "Unable to fetch transcript information from Ensembl. The external service may be slow or unavailable."
        );
      }

      const data = (await response.json()) as EnsemblTranscriptLookupResponse;

      return {
        query: cleanedTranscriptId,
        transcriptId: data.id ?? cleanedTranscriptId,
        displayName: data.display_name,
        parentGeneId: data.Parent,
        biotype: data.biotype,
        chromosome: data.seq_region_name,
        start: data.start,
        end: data.end,
        strand: data.strand,
        length: data.length,
        assemblyName: data.assembly_name,
        translationId: data.Translation?.id,
        exons: Array.isArray(data.Exon) ? data.Exon.map(normaliseExon) : [],
        source: "Ensembl",
      };
    }
  );
}

export async function lookupRegion(
  region: string
): Promise<RegionLookupResult> {
  const parsedRegion = parseRegion(region);
  const regionString = `${parsedRegion.chromosome}:${parsedRegion.start}-${parsedRegion.end}`;

  return getCachedValue(
    `ensembl:region:${regionString.toUpperCase()}`,
    CACHE_TTL_MS,
    async () => {
      const response = await fetchWithTimeout(
        `${ENSEMBL_REST_BASE_URL}/overlap/region/human/${encodeURIComponent(
          regionString
        )}?feature=gene`,
        {
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(
          "Unable to fetch region information from Ensembl. The external service may be slow or unavailable."
        );
      }

      const data = (await response.json()) as EnsemblRegionFeature[];

      return {
        query: region.trim(),
        chromosome: parsedRegion.chromosome,
        start: parsedRegion.start,
        end: parsedRegion.end,
        features: Array.isArray(data) ? data.map(normaliseRegionFeature) : [],
        source: "Ensembl",
      };
    }
  );
}

export async function lookupVariant(
  variant: string
): Promise<VariantLookupResult> {
  const cleanedVariant = cleanVcfStyleVariantInput(variant);

  return getCachedValue(
    `ensembl:variant:${cleanedVariant.toUpperCase()}`,
    CACHE_TTL_MS,
    async () => {
      const response = await fetchWithTimeout(
        `${ENSEMBL_REST_BASE_URL}/vep/homo_sapiens/region`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            variants: [cleanedVariant],
          }),
        },
        15000
      );

      if (!response.ok) {
        throw new Error(
          "Unable to fetch variant consequence information from Ensembl VEP. Check that the input uses VCF-style format with chromosome, position, ID, reference allele, and alternate allele."
        );
      }

      const data = (await response.json()) as EnsemblVepResponseItem[];
      const firstResult = data[0];

      if (!firstResult) {
        throw new Error("No variant consequence result was returned.");
      }

      return {
        query: variant.trim(),
        input: firstResult.input ?? cleanedVariant,
        mostSevereConsequence: firstResult.most_severe_consequence,
        assemblyName: firstResult.assembly_name,
        chromosome: firstResult.seq_region_name,
        start: firstResult.start,
        end: firstResult.end,
        strand: firstResult.strand,
        alleleString: firstResult.allele_string,
        transcriptConsequences: Array.isArray(
          firstResult.transcript_consequences
        )
          ? firstResult.transcript_consequences.map(
              normaliseTranscriptConsequence
            )
          : [],
        source: "Ensembl VEP",
      };
    }
  );
}