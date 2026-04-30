export type ExonFeature = {
  id: string;
  start: number;
  end: number;
  label: string;
};

export type CaseReadinessMetadata = {
  scenarioType: string;
  futureCaseUse: string;
  learnerDecisionFocus: string;
  phase5ReuseId: string;
};

export type VisualiseCheckpointOption = {
  id: string;
  text: string;
  feedback: string;
};

export type VisualiseCheckpoint = {
  question: string;
  options: VisualiseCheckpointOption[];
  correctOptionId: string;
};

export type VisualisationExample = {
  id: string;
  title: string;
  caseTheme: string;
  learningFocus: string;
  workflowUse: string;
  caseReadiness: CaseReadinessMetadata;
  checkpoint: VisualiseCheckpoint;
  region: {
    chromosome: string;
    start: number;
    end: number;
    label: string;
    assembly: string;
  };
  gene: {
    symbol: string;
    name: string;
    start: number;
    end: number;
    strand: "forward" | "reverse";
    biotype: string;
  };
  transcript: {
    id: string;
    start: number;
    end: number;
    consequenceContext: string;
    exons: ExonFeature[];
  };
  variant: {
    label: string;
    coordinate: string;
    position: number;
    hgvs: string;
    predictedConsequence: string;
    clinvarSummary: string;
  };
};

export const visualisationExamples: VisualisationExample[] = [
  {
    id: "brca1-exonic-frameshift",
    title: "BRCA1 exonic coding example",
    caseTheme: "Coding variant in a cancer predisposition gene",
    learningFocus:
      "Shows a variant marker falling within a coding exon-style region, while reminding the learner that position alone is not interpretation.",
    workflowUse:
      "Useful for later cases where the learner must connect exon position, predicted consequence, transcript choice, family history, and evidence review.",
    caseReadiness: {
      scenarioType: "Coding / exonic candidate",
      futureCaseUse:
        "Can support a later hereditary cancer-style case where the learner reviews whether a coding consequence is plausible in the clinical and family-history context.",
      learnerDecisionFocus:
        "Does the apparent coding impact fit the gene, transcript, phenotype, inheritance pattern, and evidence strength?",
      phase5ReuseId: "phase5-case-ready:brca1-exonic-frameshift",
    },
    checkpoint: {
      question:
        "The marker appears within a coding exon-style region. What is the safest next reasoning step?",
      correctOptionId: "brca1-option-a",
      options: [
        {
          id: "brca1-option-a",
          text: "Prioritise it as a candidate for review, then check transcript choice, consequence, phenotype fit, inheritance context, technical confidence, and evidence strength.",
          feedback:
            "Correct. A coding-looking position can justify prioritisation, but it still needs structured review before any clinical meaning is attached.",
        },
        {
          id: "brca1-option-b",
          text: "Prioritise it for reporting immediately, because an exon position, a frameshift-style label, and a cancer gene together are enough evidence.",
          feedback:
            "Not quite. Those features may raise interest, but they are not enough by themselves for reporting or final interpretation.",
        },
        {
          id: "brca1-option-c",
          text: "Avoid prioritising it until ClinVar confirms it, because visual position and predicted consequence should not influence candidate review.",
          feedback:
            "Not quite. ClinVar can support review, but visual position and consequence can still help prioritise candidates when used carefully.",
        },
      ],
    },
    region: {
      chromosome: "17",
      start: 43044295,
      end: 43125482,
      label: "chr17:43,044,295-43,125,482",
      assembly: "GRCh38-style teaching example",
    },
    gene: {
      symbol: "BRCA1",
      name: "BRCA1 DNA repair associated",
      start: 43044295,
      end: 43125482,
      strand: "reverse",
      biotype: "protein_coding",
    },
    transcript: {
      id: "ENST00000357654",
      start: 43045629,
      end: 43124096,
      consequenceContext:
        "Example transcript used here to show how exon structure and variant position can be reviewed visually.",
      exons: [
        { id: "brca1-exon-1", start: 43045629, end: 43045802, label: "1" },
        { id: "brca1-exon-2", start: 43047643, end: 43047703, label: "2" },
        { id: "brca1-exon-3", start: 43051063, end: 43051117, label: "3" },
        { id: "brca1-exon-4", start: 43063333, end: 43063373, label: "4" },
        { id: "brca1-exon-5", start: 43063873, end: 43063951, label: "5" },
        { id: "brca1-exon-6", start: 43070928, end: 43071034, label: "6" },
        { id: "brca1-exon-7", start: 43074331, end: 43074521, label: "7" },
        { id: "brca1-exon-8", start: 43076487, end: 43076614, label: "8" },
        { id: "brca1-exon-9", start: 43082403, end: 43082575, label: "9" },
        { id: "brca1-exon-10", start: 43090943, end: 43091032, label: "10" },
        { id: "brca1-exon-11", start: 43115725, end: 43124096, label: "11" },
      ],
    },
    variant: {
      label: "Example BRCA1 coding variant",
      coordinate: "chr17:43,091,654",
      position: 43091654,
      hgvs: "Example only: NM_007294.4:c.5266dup",
      predictedConsequence: "Frameshift-style consequence example",
      clinvarSummary:
        "ClinVar-style summaries should be treated as supporting evidence and reviewed with transcript, phenotype, inheritance, and laboratory context.",
    },
  },
  {
    id: "dmd-splice-boundary",
    title: "DMD splice-region caution example",
    caseTheme: "Variant close to an exon boundary",
    learningFocus:
      "Shows why a variant near an exon edge should trigger careful splice-region and transcript-aware review rather than automatic interpretation.",
    workflowUse:
      "Useful for later cases where the learner must decide whether a near-exon variant needs splice prediction, RNA evidence, segregation review, or escalation.",
    caseReadiness: {
      scenarioType: "Splice-region caution",
      futureCaseUse:
        "Can support a later neuromuscular-style case where a near-exon variant raises a possible splice question but requires careful supporting evidence.",
      learnerDecisionFocus:
        "Is the variant close enough to a splice-relevant region to justify further review, and what evidence would be needed before escalation?",
      phase5ReuseId: "phase5-case-ready:dmd-splice-boundary",
    },
    checkpoint: {
      question:
        "The marker sits close to an exon boundary. What should the learner do next?",
      correctOptionId: "dmd-option-a",
      options: [
        {
          id: "dmd-option-a",
          text: "Review splice relevance carefully using transcript context, predicted consequence, phenotype fit, technical confidence, and any supporting segregation or RNA evidence.",
          feedback:
            "Correct. A near-boundary position can matter, but it needs splice-aware evidence review before escalation or interpretation.",
        },
        {
          id: "dmd-option-b",
          text: "Treat it as a likely splice-disrupting candidate, because a near-exon marker in a relevant gene is usually enough to explain the case.",
          feedback:
            "Not quite. Near-exon position can raise suspicion, but it does not prove splice disruption or clinical relevance by itself.",
        },
        {
          id: "dmd-option-c",
          text: "Treat it as unrelated unless it falls inside the exon box, because only clearly exonic markers should be included in review.",
          feedback:
            "Not quite. Splice-relevant variants may sit close to exon boundaries, so excluding them automatically would be unsafe.",
        },
      ],
    },
    region: {
      chromosome: "X",
      start: 32315000,
      end: 32395000,
      label: "chrX:32,315,000-32,395,000",
      assembly: "GRCh38-style teaching example",
    },
    gene: {
      symbol: "DMD",
      name: "dystrophin",
      start: 32315000,
      end: 32395000,
      strand: "reverse",
      biotype: "protein_coding",
    },
    transcript: {
      id: "ENST00000357033",
      start: 32319000,
      end: 32391000,
      consequenceContext:
        "Teaching transcript used to show how a variant close to an exon boundary can require splice-aware reasoning.",
      exons: [
        { id: "dmd-exon-1", start: 32319000, end: 32319320, label: "1" },
        { id: "dmd-exon-2", start: 32328500, end: 32328760, label: "2" },
        { id: "dmd-exon-3", start: 32341000, end: 32341230, label: "3" },
        { id: "dmd-exon-4", start: 32355500, end: 32355750, label: "4" },
        { id: "dmd-exon-5", start: 32370500, end: 32370720, label: "5" },
        { id: "dmd-exon-6", start: 32386500, end: 32386900, label: "6" },
      ],
    },
    variant: {
      label: "Example splice-region candidate",
      coordinate: "chrX:32,355,485",
      position: 32355485,
      hgvs: "Example only: c.IVS-style splice-region candidate",
      predictedConsequence: "Near-exon splice-region consequence example",
      clinvarSummary:
        "A variant near an exon boundary should be reviewed with splice consequence prediction, transcript context, phenotype fit, and technical confidence before escalation.",
    },
  },
  {
    id: "rnf213-intronic-context",
    title: "Intronic / non-coding context example",
    caseTheme: "Variant inside a gene region but outside displayed exons",
    learningFocus:
      "Shows that being inside the gene span is not the same as being clearly protein-altering or clinically explanatory.",
    workflowUse:
      "Useful for later cases where a learner must avoid overcalling an intronic or non-coding candidate without strong supporting evidence.",
    caseReadiness: {
      scenarioType: "Intronic / non-coding caution",
      futureCaseUse:
        "Can support a later rare-disease case where a variant sits within a gene region but lacks obvious coding or splice evidence.",
      learnerDecisionFocus:
        "Should this candidate remain low priority, be escalated for specific reasons, or be treated as insufficient without additional evidence?",
      phase5ReuseId: "phase5-case-ready:rnf213-intronic-context",
    },
    checkpoint: {
      question:
        "The marker sits inside the gene span but away from the displayed exons. What is the best interpretation approach?",
      correctOptionId: "rnf213-option-a",
      options: [
        {
          id: "rnf213-option-a",
          text: "Keep it as a cautious candidate only if there is mechanism, phenotype fit, technical confidence, and evidence supporting non-coding relevance.",
          feedback:
            "Correct. A gene-span position may be relevant, but it needs a clear reason before being treated as explanatory.",
        },
        {
          id: "rnf213-option-b",
          text: "Prioritise it strongly because it falls within the gene boundaries, even though the marker is not close to displayed exons.",
          feedback:
            "Not quite. Being within a gene span is not enough to make a variant a strong explanatory candidate.",
        },
        {
          id: "rnf213-option-c",
          text: "Exclude it completely because it is not inside a displayed exon, regardless of phenotype, mechanism, or additional evidence.",
          feedback:
            "Not quite. Non-coding variants can matter in some settings, so exclusion should be based on evidence, not position alone.",
        },
      ],
    },
    region: {
      chromosome: "17",
      start: 80390000,
      end: 80470000,
      label: "chr17:80,390,000-80,470,000",
      assembly: "GRCh38-style teaching example",
    },
    gene: {
      symbol: "RNF213",
      name: "ring finger protein 213",
      start: 80390000,
      end: 80470000,
      strand: "forward",
      biotype: "protein_coding",
    },
    transcript: {
      id: "ENST00000582970",
      start: 80393000,
      end: 80465000,
      consequenceContext:
        "Teaching transcript used to show how a variant may sit within the gene span but away from displayed exon boxes.",
      exons: [
        { id: "rnf213-exon-1", start: 80393000, end: 80393400, label: "1" },
        { id: "rnf213-exon-2", start: 80401000, end: 80401300, label: "2" },
        { id: "rnf213-exon-3", start: 80411000, end: 80411350, label: "3" },
        { id: "rnf213-exon-4", start: 80425000, end: 80425300, label: "4" },
        { id: "rnf213-exon-5", start: 80439000, end: 80439450, label: "5" },
        { id: "rnf213-exon-6", start: 80461000, end: 80465000, label: "6" },
      ],
    },
    variant: {
      label: "Example intronic candidate",
      coordinate: "chr17:80,421,500",
      position: 80421500,
      hgvs: "Example only: intronic/non-coding candidate",
      predictedConsequence: "Intronic-style consequence example",
      clinvarSummary:
        "An intronic position may still matter in some contexts, but it should not be treated as explanatory without mechanism, evidence, phenotype fit, and review.",
    },
  },
  {
    id: "ttn-transcript-caution",
    title: "TTN transcript caution example",
    caseTheme: "Large gene with transcript interpretation caution",
    learningFocus:
      "Shows why large genes and transcript choice can make visual interpretation more complex than simply spotting a marker.",
    workflowUse:
      "Useful for later cases where the learner must consider transcript relevance, exon usage, disease mechanism, and whether a candidate is genuinely plausible.",
    caseReadiness: {
      scenarioType: "Transcript-selection caution",
      futureCaseUse:
        "Can support a later cardiomyopathy-style case where transcript relevance, exon usage, and gene-specific mechanism affect whether a candidate is meaningful.",
      learnerDecisionFocus:
        "Is the selected transcript appropriate for the disease context, and does the visual marker support or weaken the candidate rationale?",
      phase5ReuseId: "phase5-case-ready:ttn-transcript-caution",
    },
    checkpoint: {
      question:
        "The marker is shown in a large gene where transcript choice may change the reasoning. What should the learner focus on?",
      correctOptionId: "ttn-option-a",
      options: [
        {
          id: "ttn-option-a",
          text: "Check whether the selected transcript, exon context, disease mechanism, phenotype fit, and evidence all support the candidate rationale.",
          feedback:
            "Correct. In large genes, transcript relevance and disease mechanism are essential before treating a marker as meaningful.",
        },
        {
          id: "ttn-option-b",
          text: "Prioritise the candidate mainly because TTN is large and clinically important, making most visible markers worth strong review.",
          feedback:
            "Not quite. Large clinically important genes also create many possible candidates, so context is especially important.",
        },
        {
          id: "ttn-option-c",
          text: "Avoid using transcript information initially, because visual position and gene name are usually enough for early candidate reasoning.",
          feedback:
            "Not quite. Transcript information is central here, because the same marker can be interpreted differently across transcripts.",
        },
      ],
    },
    region: {
      chromosome: "2",
      start: 178520000,
      end: 178620000,
      label: "chr2:178,520,000-178,620,000",
      assembly: "GRCh38-style teaching example",
    },
    gene: {
      symbol: "TTN",
      name: "titin",
      start: 178520000,
      end: 178620000,
      strand: "reverse",
      biotype: "protein_coding",
    },
    transcript: {
      id: "ENST00000589042",
      start: 178528000,
      end: 178612000,
      consequenceContext:
        "Teaching transcript used to show that transcript selection and exon relevance can strongly affect interpretation.",
      exons: [
        { id: "ttn-exon-1", start: 178528000, end: 178528450, label: "1" },
        { id: "ttn-exon-2", start: 178540000, end: 178540300, label: "2" },
        { id: "ttn-exon-3", start: 178552000, end: 178552260, label: "3" },
        { id: "ttn-exon-4", start: 178566000, end: 178566360, label: "4" },
        { id: "ttn-exon-5", start: 178584000, end: 178584280, label: "5" },
        { id: "ttn-exon-6", start: 178604000, end: 178612000, label: "6" },
      ],
    },
    variant: {
      label: "Example transcript-caution candidate",
      coordinate: "chr2:178,583,920",
      position: 178583920,
      hgvs: "Example only: transcript-dependent candidate",
      predictedConsequence: "Transcript-dependent consequence example",
      clinvarSummary:
        "In large genes, visual location should be interpreted with transcript relevance, exon context, phenotype fit, and gene-specific disease mechanism.",
    },
  },
];

export const brca1VisualisationExample = visualisationExamples[0];