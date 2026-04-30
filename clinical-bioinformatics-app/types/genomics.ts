export type GeneTranscriptSummary = {
  id: string;
  displayName?: string;
  biotype?: string;
  start?: number;
  end?: number;
  strand?: number;
  length?: number;
  isCanonical?: boolean;
};

export type GeneLookupResult = {
  query: string;
  symbol: string;
  geneId: string;
  displayName?: string;
  description?: string;
  species?: string;
  biotype?: string;
  chromosome?: string;
  start?: number;
  end?: number;
  strand?: number;
  assemblyName?: string;
  canonicalTranscript?: string;
  transcripts: GeneTranscriptSummary[];
  source: "Ensembl";
};

export type TranscriptExonSummary = {
  id?: string;
  start?: number;
  end?: number;
  strand?: number;
  phase?: number;
  endPhase?: number;
};

export type TranscriptLookupResult = {
  query: string;
  transcriptId: string;
  displayName?: string;
  parentGeneId?: string;
  biotype?: string;
  chromosome?: string;
  start?: number;
  end?: number;
  strand?: number;
  length?: number;
  assemblyName?: string;
  translationId?: string;
  exons: TranscriptExonSummary[];
  source: "Ensembl";
};

export type RegionFeatureSummary = {
  id?: string;
  externalName?: string;
  featureType?: string;
  biotype?: string;
  description?: string;
  chromosome?: string;
  start?: number;
  end?: number;
  strand?: number;
};

export type RegionLookupResult = {
  query: string;
  chromosome: string;
  start: number;
  end: number;
  features: RegionFeatureSummary[];
  source: "Ensembl";
};

export type VariantTranscriptConsequenceSummary = {
  geneId?: string;
  geneSymbol?: string;
  transcriptId?: string;
  biotype?: string;
  consequenceTerms: string[];
  impact?: string;
  canonical?: boolean;
  hgvsc?: string;
  hgvsp?: string;
  cdnaStart?: number;
  cdnaEnd?: number;
  cdsStart?: number;
  cdsEnd?: number;
  proteinStart?: number;
  proteinEnd?: number;
  aminoAcids?: string;
  codons?: string;
};

export type VariantLookupResult = {
  query: string;
  input: string;
  mostSevereConsequence?: string;
  assemblyName?: string;
  chromosome?: string;
  start?: number;
  end?: number;
  strand?: number;
  alleleString?: string;
  transcriptConsequences: VariantTranscriptConsequenceSummary[];
  source: "Ensembl VEP";
};

export type ClinVarRecordSummary = {
  uid: string;
  title?: string;
  accession?: string;
  accessionVersion?: string;
  variationId?: string;
  variantType?: string;
  geneSymbol?: string;
  clinicalSignificance?: string;
  reviewStatus?: string;
  lastEvaluated?: string;
  conditionNames: string[];
  molecularConsequences: string[];
  source: "ClinVar";
};

export type ClinVarLookupResult = {
  query: string;
  totalFound: number;
  records: ClinVarRecordSummary[];
  source: "ClinVar via NCBI E-utilities";
};

export type NcbiLinkedResourceSummary = {
  database: "PubMed" | "Gene" | "ClinVar" | "Nucleotide";
  dbName: "pubmed" | "gene" | "clinvar" | "nuccore";
  totalFound?: number;
  topIds: string[];
  searchUrl: string;
  directUrl?: string;
  opensDirectRecord: boolean;
};

export type NcbiLinkedResourcesResult = {
  query: string;
  resources: NcbiLinkedResourceSummary[];
  source: "NCBI E-utilities";
};