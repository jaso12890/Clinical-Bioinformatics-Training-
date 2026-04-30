export const case49 = {
  id: "case-49",
  slug: "ambiguous-vus-communication-case",
  title: "Case 49: Ambiguous VUS communication case",
  level: "Advanced",
  summary:
    "A service-readiness case focused on recognising a plausible VUS-level candidate and communicating uncertainty without overstating the result.",

  visualisationExampleId: null,

  assessmentFocus: [
    "VUS-level candidate communication",
    "Uncertainty without overstatement",
    "De novo missense candidate review",
    "Domain-level evidence",
    "Novel variant limitation",
    "Functional evidence limitation",
    "Incomplete recessive evidence",
    "Technical fragility",
    "Population and inheritance filtering",
    "Safe reviewable handover",
  ],

  guidedTutorMode: {
    type: "static-rule-based",
    description:
      "Uses built-in hints, checkpoint feedback, model answers, and self-check criteria to support safe reasoning around plausible but uncertain candidate variants.",
  },

  phase5Assessment: {
    candidateRanking: {
      prompt:
        "Rank the candidates by current review priority, making clear that the strongest candidate is still uncertain rather than diagnostic.",
      correctOrder: [
        "candidate-2-plausible-vus-level-candidate",
        "candidate-3-single-allele-recessive-finding",
        "candidate-1-inherited-frequency-weakened-finding",
        "candidate-4-technically-fragile-finding",
      ],
      explanation:
        "Candidate 2 is the strongest current candidate because the phenotype, apparent de novo inheritance, rarity, technical confidence, and domain-level evidence are supportive. However, it remains VUS-level because the exact variant is novel in the local summary, functional evidence is absent, and same-domain evidence is supportive but not definitive. Candidate 3 is technically convincing but incomplete as a recessive explanation because only one allele is identified. Candidate 1 is technically real but weakened by inheritance from an unaffected father, population frequency, and limited gene-disease support. Candidate 4 is lowest priority because the apparent de novo signal is technically fragile.",
    },

    governanceDecision: {
      prompt:
        "Choose the safest communication approach for a plausible VUS-level candidate.",
      options: [
        {
          id: "communicate-plausible-uncertain",
          label: "A",
          decision:
            "Prioritise Candidate 2 for review as a plausible VUS-level candidate, document the supporting and limiting evidence, and avoid diagnostic wording.",
          isBest: true,
          feedback:
            "Best decision. This keeps the candidate visible for review without overstating the evidence as diagnostic.",
        },
        {
          id: "communicate-diagnostic",
          label: "B",
          decision:
            "Describe Candidate 2 as the confirmed molecular diagnosis because it is de novo and absent from population data.",
          isBest: false,
          feedback:
            "Review this choice. De novo status and population absence are supportive, but they do not prove pathogenicity without enough variant-level, mechanism, and functional evidence.",
        },
        {
          id: "discard-vus",
          label: "C",
          decision:
            "Do not discuss Candidate 2 because VUS-level findings are never useful.",
          isBest: false,
          feedback:
            "Review this choice. A VUS-level candidate can be useful for review, follow-up, segregation, phenotype refinement, and future reanalysis, but it must be communicated cautiously.",
        },
      ],
    },

    writtenSummary: {
      prompt:
        "Write a safe review summary for Candidate 2 that explains why it is plausible but not diagnostic.",
      checklist: [
        "Identifies Candidate 2 as the strongest current candidate.",
        "Uses VUS-level or uncertain-candidate wording.",
        "Mentions apparent de novo inheritance.",
        "Mentions absence from population data.",
        "Mentions strong technical support.",
        "Mentions phenotype compatibility.",
        "Mentions relevant functional domain/domain-level support.",
        "States that the exact variant has not been previously reported in the local summary.",
        "States that functional evidence is absent.",
        "Explains that nearby/domain evidence is supportive but not definitive.",
        "Explains why Candidate 1 is weaker.",
        "Explains why Candidate 3 is incomplete as a recessive explanation.",
        "Explains why Candidate 4 is technically fragile.",
        "Avoids diagnostic or confirmed-causative wording.",
        "Suggests review, possible follow-up, and reanalysis rather than final sign-out.",
      ],
      modelAnswer:
        "Candidate 2 is the strongest current candidate for review, but it should be communicated as a plausible VUS-level finding rather than a confirmed diagnosis. It is an apparent de novo missense variant in NEUROVUS2, a phenotype-compatible autosomal dominant neurodevelopmental-epilepsy gene. The call is technically robust, absent from population data, and located in a recurrent functional domain where disease-associated missense variants have been described. The patient’s developmental delay, speech delay, epilepsy, hypotonia, mild ataxia, and subtle dysmorphic features overlap the reported disease spectrum. However, the exact variant has not been previously reported in the local summary, there is no functional evidence for this specific change, and domain-level evidence is supportive but not definitive. Candidate 1 is weaker because it is inherited, relatively frequent, and in a limited-evidence gene. Candidate 3 is a technically convincing single allele in a recessive gene but incomplete without a second allele. Candidate 4 is technically fragile. The safest conclusion is to prioritise Candidate 2 for review as an uncertain candidate, document the supporting and limiting evidence clearly, and avoid diagnostic wording.",
    },
  },

  reasoningScorecard: [
    {
      category: "Candidate prioritisation",
      maxScore: 2,
      expectation:
        "Correctly identifies Candidate 2 as the strongest current candidate while recognising that it remains uncertain.",
    },
    {
      category: "Uncertainty communication",
      maxScore: 2,
      expectation:
        "Uses proportionate wording such as plausible, review-worthy, or VUS-level rather than diagnostic or causative.",
    },
    {
      category: "Evidence balance",
      maxScore: 2,
      expectation:
        "Explains both the supporting evidence and the limiting evidence for Candidate 2.",
    },
    {
      category: "Alternative candidate reasoning",
      maxScore: 2,
      expectation:
        "Clearly explains why Candidates 1, 3, and 4 are weaker without ignoring them.",
    },
    {
      category: "Service-ready conclusion",
      maxScore: 2,
      expectation:
        "Provides a reviewable conclusion that supports follow-up or reanalysis without overstating the result.",
    },
  ],

  patient: {
    age: 6,
    sex: "Female",
  },

  referralReason:
    "A 6-year-old girl has been referred for rare disease genome analysis because of developmental delay, speech delay, epilepsy, hypotonia, mild ataxia, and subtle dysmorphic features. One candidate is plausible, but the evidence is not strong enough for a confident diagnostic conclusion.",

  testType:
    "Rare disease trio genome sequencing with SNV/indel, CNV, inheritance, phenotype, technical confidence, and uncertainty communication review",

  familyStructure:
    "The proband and both biological parents have been tested. Both parents are reportedly unaffected.",

  history: [
    "Global developmental delay noted in infancy",
    "Speech delay requiring ongoing support",
    "Epilepsy beginning at age 3",
    "Hypotonia from early childhood",
    "Mild ataxia noted by neurology",
    "Subtle dysmorphic features noted by clinical genetics",
    "No known previous molecular diagnosis",
    "One candidate is plausible but remains uncertain",
  ],

  phenotype: [
    "Global developmental delay",
    "Speech delay",
    "Epilepsy",
    "Hypotonia",
    "Mild ataxia",
    "Subtle dysmorphic features",
  ],

  familyHistory:
    "Both parents are reportedly unaffected. No known family history of developmental delay, epilepsy, hypotonia, ataxia, dysmorphic features, or a similar presentation.",

  serviceContext: [
    "This is an ambiguous VUS communication case.",
    "The key issue is not simply identifying the most interesting candidate.",
    "The key issue is communicating that the candidate is plausible but not proven.",
    "A VUS-level candidate may be worth review, follow-up, segregation, phenotype matching, or reanalysis, but it should not be described as diagnostic.",
    "Your task is to decide which finding is the best current uncertain candidate and how to explain its limitations safely.",
    "Do not overstate uncertainty as certainty, and do not dismiss a plausible candidate just because it is not yet definitive.",
  ],

  candidateFindings: [
    {
      id: "candidate-1",
      label: "Candidate 1",
      gene: "BROADVUS1",
      variant: "chr4:77190442 C>T",
      zygosity: "Heterozygous",
      consequence: "missense_variant",
      inheritanceSignal: "Inherited from unaffected father",
      clinicalFit:
        "BROADVUS1 has a broad neurodevelopmental association in limited reports, but the variant is inherited from an unaffected father, relatively frequent, and outside any known functional region.",
      rawEvidence: `GENE: BROADVUS1
  Known disease association: broad neurodevelopmental association in limited reports
  Reported inheritance: autosomal dominant proposed
  Known mechanism: uncertain
  Gene-disease validity in local summary: limited
  
  Variant:
  chr4:77190442 C>T
  Transcript: NM_490001.2
  HGVS: c.899C>T p.(Pro300Leu)
  Consequence: missense_variant
  Protein domain: outside known recurrent functional region in local summary
  
  VCF-style fields:
  QUAL=652
  FILTER=PASS
  INFO: DP=46;MQ=60;QD=14.2;SOR=0.82
  FORMAT: GT:AD:DP:GQ
  
  Proband: 0/1:23,23:46:99
  Mother: 0/0:40,0:40:99
  Father: 0/1:21,22:43:99
  
  Read-level notes:
  ALT reads seen on both forward and reverse strands
  ALT reads distributed across read positions
  No local mapping warning
  No concerning soft-clipping
  
  Population:
  gnomAD AF = 0.0013
  gnomAD allele count = 350
  Homozygotes observed in population summary = 1
  
  Constraint:
  LOEUF = 0.82
  pLI = 0.08
  
  ClinVar-style summary:
  No exact matching pathogenic record found in local summary
  Several submitted variants in BROADVUS1 remain VUS or likely benign
  
  Interpretation limitation:
  This variant is technically real, but inheritance, frequency, weak gene-disease evidence, and broad phenotype fit make it weak.`,
      concern:
        "This is technically real, but it is weaker than the main uncertain candidate because the inheritance, frequency, and gene-disease evidence do not support a severe rare disease explanation.",
    },
    {
      id: "candidate-2",
      label: "Candidate 2",
      gene: "NEUROVUS2",
      variant: "chr12:66190442 G>A",
      zygosity: "Heterozygous",
      consequence: "missense_variant",
      inheritanceSignal: "Apparent de novo with good parental coverage",
      clinicalFit:
        "NEUROVUS2 is associated with an autosomal dominant neurodevelopmental-epilepsy disorder with variable hypotonia, ataxia, speech delay, and dysmorphic features. The variant is de novo, rare, technically strong, and located in a constrained functional domain, but the exact variant has not been previously reported and functional evidence is limited.",
      rawEvidence: `GENE: NEUROVUS2
  Known disease association: autosomal dominant neurodevelopmental-epilepsy disorder
  Reported inheritance: usually de novo, but inherited cases with variable expressivity have been described
  Known mechanism: damaging missense variants in a recurrent functional domain
  Gene-disease validity in local summary: moderate / established
  
  Variant:
  chr12:66190442 G>A
  Transcript: NM_490002.5
  HGVS: c.1286G>A p.(Arg429His)
  Consequence: missense_variant
  Protein domain: recurrent neurodevelopmental functional domain
  Domain note: disease-associated missense variants cluster in this domain, but this exact residue is not a known recurrent hotspot
  
  VCF-style fields:
  QUAL=942
  FILTER=PASS
  INFO: DP=54;MQ=60;QD=17.4;SOR=0.72
  FORMAT: GT:AD:DP:GQ
  
  Proband: 0/1:27,27:54:99
  Mother: 0/0:44,0:44:99
  Father: 0/0:43,0:43:99
  
  Read-level notes:
  ALT reads seen on both forward and reverse strands
  ALT reads distributed across read positions
  High mapping quality for ALT-supporting reads
  High base quality at variant position
  No local low-complexity warning
  No pseudogene or segmental duplication warning
  No concerning soft-clipping around the variant
  Second caller: detected
  
  Parental coverage:
  Mother has good coverage at the site with no ALT support
  Father has good coverage at the site with no ALT support
  Trio data support apparent de novo inheritance
  Sample identity checks in local summary are consistent
  
  Population:
  gnomAD AF = not observed
  gnomAD allele count = 0
  
  Constraint:
  LOEUF = 0.50
  pLI = 0.55
  Missense/domain note: local summary highlights missense constraint in the affected functional domain
  
  In silico / functional summary:
  Several prediction tools support possible damaging effect
  No patient RNA evidence available
  No functional assay available for this exact variant
  No exact same-residue pathogenic variant found in local summary
  
  ClinVar-style summary:
  No exact matching variant record found in local summary
  Other missense variants in the same domain have been submitted as pathogenic/likely pathogenic in affected individuals
  Some nearby missense variants remain VUS
  Reported phenotypes overlap with developmental delay, speech delay, epilepsy, hypotonia, mild ataxia, and dysmorphic features
  
  Interpretation limitation:
  The evidence makes this a plausible candidate for review, but not a definitive answer.
  The exact variant is novel in the local summary.
  Functional evidence is absent.
  Domain evidence is supportive but not specific enough to prove pathogenicity.
  The safest current wording is VUS-level candidate rather than diagnostic finding.`,
      concern:
        "This is the strongest current candidate, but only at VUS level. It is plausible and review-worthy, but the evidence is not strong enough to communicate it as diagnostic.",
    },
    {
      id: "candidate-3",
      label: "Candidate 3",
      gene: "RECVUS3",
      variant: "chr9:118809331 C>T",
      zygosity: "Heterozygous",
      consequence: "splice_acceptor_variant",
      inheritanceSignal: "Inherited from unaffected mother",
      clinicalFit:
        "RECVUS3 is associated with an autosomal recessive neurodevelopmental disorder with epilepsy and hypotonia. The variant is a canonical splice acceptor, but only one inherited heterozygous allele is identified.",
      rawEvidence: `GENE: RECVUS3
  Known disease association: autosomal recessive neurodevelopmental disorder with epilepsy and hypotonia
  Reported inheritance: autosomal recessive
  Known mechanism: biallelic loss-of-function
  
  Variant:
  chr9:118809331 C>T
  Transcript: NM_490003.4
  HGVS: c.744-2C>T
  Consequence: splice_acceptor_variant
  Splice position: canonical -2 acceptor site
  Predicted effect: likely acceptor splice-site disruption
  
  VCF-style fields:
  QUAL=790
  FILTER=PASS
  INFO: DP=48;MQ=60;QD=16.5;SOR=0.74
  FORMAT: GT:AD:DP:GQ
  
  Proband: 0/1:24,24:48:99
  Mother: 0/1:22,21:43:99
  Father: 0/0:41,0:41:99
  
  Read-level notes:
  ALT reads seen on both forward and reverse strands
  ALT reads distributed across read positions
  No local mapping warning
  No soft-clipping concern
  Second caller: detected
  
  Second-allele review:
  No second coding SNV/indel identified in current candidate list
  No confident exon-level deletion/duplication detected
  No strong deep intronic candidate identified in current summary
  No ROH or UPD clue involving RECVUS3
  
  Population:
  gnomAD AF = 0.000004
  gnomAD allele count = 1
  No homozygotes observed in local summary
  
  Constraint:
  LOEUF = 0.34
  pLI = 0.76
  
  ClinVar-style summary:
  No exact matching variant record found in local summary
  Other biallelic splice and truncating variants in RECVUS3 have been submitted in affected individuals
  
  Interpretation limitation:
  This is a technically convincing single allele in a recessive gene, but the current evidence does not complete the recessive model.`,
      concern:
        "This is technically convincing, but it is incomplete as a recessive explanation and should not be promoted above the VUS-level dominant candidate.",
    },
    {
      id: "candidate-4",
      label: "Candidate 4",
      gene: "SEIZVUS4",
      variant: "chr11:44190220 T>C",
      zygosity: "Heterozygous",
      consequence: "missense_variant",
      inheritanceSignal: "Apparent de novo, but technically fragile",
      clinicalFit:
        "SEIZVUS4 has a possible epilepsy association and could partly fit the seizure phenotype, but the raw evidence has multiple artefact warning signs and the gene-disease evidence is limited.",
      rawEvidence: `GENE: SEIZVUS4
  Known disease association: possible autosomal dominant developmental epilepsy
  Reported inheritance: autosomal dominant proposed in limited reports
  Known mechanism: uncertain; missense variants proposed in limited evidence
  Gene-disease validity in local summary: limited/moderate
  
  Variant:
  chr11:44190220 T>C
  Transcript: NM_490004.2
  HGVS: c.944T>C p.(Leu315Pro)
  Consequence: missense_variant
  
  VCF-style fields:
  QUAL=48
  FILTER=PASS
  INFO: DP=31;MQ=42;QD=1.5;SOR=5.8
  FORMAT: GT:AD:DP:GQ
  
  Proband: 0/1:25,6:31:45
  Mother: 0/0:37,0:37:99
  Father: 0/0:36,0:36:99
  
  Read-level notes:
  ALT reads mostly on one strand
  5 of 6 ALT reads occur close to read ends
  Soft-clipping present in several supporting reads
  Local repetitive sequence warning present
  Several ALT-supporting reads have nearby mismatches
  Second caller: not detected
  Manual read-level review recommended before prioritisation
  
  Population:
  gnomAD AF = not observed
  gnomAD allele count = 0
  
  Constraint:
  LOEUF = 0.43
  pLI = 0.74
  
  ClinVar-style summary:
  No exact matching variant record found in local summary
  Nearby missense variants in SEIZVUS4 have been submitted in epilepsy phenotypes, but evidence remains limited
  
  Interpretation limitation:
  The phenotype overlap is partial and the technical evidence is too fragile for confident prioritisation.`,
      concern:
        "This should not be treated as the main uncertain candidate because the technical evidence is weak.",
    },
  ],

  decisionCheckpoints: [
    {
      id: "checkpoint-1",
      title: "Checkpoint 1 — Plausible does not mean diagnostic",
      context:
        "Candidate 2 is technically strong, apparently de novo, absent from population data, in a phenotype-compatible gene, and located in a relevant functional domain. However, the exact variant has not been reported and functional evidence is absent.",
      question: "What is the safest interpretation of Candidate 2?",
      options: [
        {
          label: "A",
          text: "It is a plausible VUS-level candidate for review, but it should not be communicated as diagnostic from the current evidence.",
          isCorrect: true,
          feedback:
            "Correct. Candidate 2 is meaningful and review-worthy, but still uncertain.",
        },
        {
          label: "B",
          text: "It is definitely diagnostic because it is de novo and absent from gnomAD.",
          isCorrect: false,
          feedback:
            "Not quite. De novo status and rarity are strong evidence, but they do not prove pathogenicity without enough gene, variant, mechanism, and phenotype support.",
        },
        {
          label: "C",
          text: "It should be ignored because VUS-level candidates can never matter.",
          isCorrect: false,
          feedback:
            "Not quite. A VUS-level candidate can guide review, follow-up, and reanalysis, but should not be overstated.",
        },
      ],
      teachingPoint:
        "The safest wording can be: plausible candidate, uncertain significance, not diagnostic at present.",
    },
    {
      id: "checkpoint-2",
      title: "Checkpoint 2 — Why Candidate 2 is still the best current candidate",
      context:
        "Candidates 1, 3, and 4 each have major limitations. Candidate 2 has the best overall fit, even though it remains uncertain.",
      question: "Why is Candidate 2 the strongest current candidate?",
      options: [
        {
          label: "A",
          text: "Because phenotype fit, apparent de novo inheritance, rarity, technical quality, and domain-level evidence are supportive, even though variant-level proof is incomplete.",
          isCorrect: true,
          feedback:
            "Correct. Candidate 2 is the best current candidate, but the conclusion must remain proportionate.",
        },
        {
          label: "B",
          text: "Because it has no limitations.",
          isCorrect: false,
          feedback:
            "Not quite. Candidate 2 has important limitations, including no exact variant report and no functional evidence.",
        },
        {
          label: "C",
          text: "Because every variant in a known gene should be treated as pathogenic.",
          isCorrect: false,
          feedback:
            "Not quite. Gene relevance is only one part of interpretation.",
        },
      ],
      teachingPoint:
        "A candidate can be the strongest available option while still not meeting the threshold for a confident diagnostic conclusion.",
    },
    {
      id: "checkpoint-3",
      title: "Checkpoint 3 — Avoid overstatement in communication",
      context:
        "You need to summarise Candidate 2 for review. The clinical team should understand that it is plausible but uncertain.",
      question: "Which wording is safest?",
      options: [
        {
          label: "A",
          text: "Candidate 2 explains the child’s condition and should be treated as confirmed.",
          isCorrect: false,
          feedback:
            "Not quite. That overstates the evidence and could mislead downstream decision-making.",
        },
        {
          label: "B",
          text: "Candidate 2 is a plausible de novo VUS-level candidate in a phenotype-compatible gene; further review is needed before any diagnostic conclusion.",
          isCorrect: true,
          feedback:
            "Correct. This wording communicates both the reason for interest and the uncertainty.",
        },
        {
          label: "C",
          text: "Candidate 2 is meaningless because it is uncertain.",
          isCorrect: false,
          feedback:
            "Not quite. Uncertain does not mean meaningless; it means not yet proven.",
        },
      ],
      teachingPoint:
        "Good uncertainty communication is clear about both supporting evidence and limits.",
    },
    {
      id: "checkpoint-4",
      title: "Checkpoint 4 — Do not promote weaker alternatives",
      context:
        "Candidate 1 is inherited and relatively frequent. Candidate 3 is incomplete recessive evidence. Candidate 4 is technically fragile.",
      question: "Why should these alternatives remain lower priority?",
      options: [
        {
          label: "A",
          text: "Because each has a more serious limitation than Candidate 2 in inheritance, population evidence, technical confidence, or disease model completeness.",
          isCorrect: true,
          feedback:
            "Correct. Candidate 2 is uncertain, but it is still stronger than the alternatives.",
        },
        {
          label: "B",
          text: "Because inherited and recessive variants can never be relevant.",
          isCorrect: false,
          feedback:
            "Not quite. They can be relevant when the evidence fits. These specific findings are weaker.",
        },
        {
          label: "C",
          text: "Because only missense variants can be considered in neurodevelopmental cases.",
          isCorrect: false,
          feedback:
            "Not quite. Different variant types can be relevant; evidence strength matters.",
        },
      ],
      teachingPoint:
        "A VUS-level candidate should be compared against alternatives, not treated in isolation.",
    },
    {
      id: "checkpoint-5",
      title: "Checkpoint 5 — Safe service-style next step",
      context:
        "Candidate 2 is the best current candidate, but it remains VUS-level. The evidence is not enough to call it diagnostic.",
      question: "What is the safest final conclusion?",
      options: [
        {
          label: "A",
          text: "Prioritise Candidate 2 for review as a plausible VUS-level candidate, document the supporting and limiting evidence, and avoid diagnostic wording.",
          isCorrect: true,
          feedback:
            "Correct. This is safe, balanced, and reviewable.",
        },
        {
          label: "B",
          text: "Report Candidate 2 as definitively causative because it is the most interesting finding.",
          isCorrect: false,
          feedback:
            "Not quite. The strongest available candidate is not automatically diagnostic.",
        },
        {
          label: "C",
          text: "Say no candidate should be discussed because none is proven.",
          isCorrect: false,
          feedback:
            "Not quite. Candidate 2 is worth review, but the uncertainty must be explicit.",
        },
      ],
      teachingPoint:
        "Safe VUS communication means neither overclaiming nor hiding relevant uncertainty.",
    },
  ],

  finalReflection:
    "A safe trainee-level conclusion would be that Candidate 2 is the strongest current candidate, but only at VUS level. It is an apparent de novo missense variant in NEUROVUS2, a phenotype-compatible autosomal dominant neurodevelopmental-epilepsy gene. The variant is technically robust, absent from population data, located in a constrained functional domain, and the patient’s developmental delay, speech delay, epilepsy, hypotonia, mild ataxia, and dysmorphic features overlap the reported disease spectrum. However, the exact variant has not been previously reported in the local summary, there is no functional evidence, and nearby/domain evidence is supportive but not definitive. Candidate 1 is weaker because it is inherited, relatively frequent, and in a limited-evidence gene. Candidate 3 is a technically convincing single allele in a recessive gene but incomplete without a second allele. Candidate 4 is technically fragile. The safest next step is to prioritise Candidate 2 for review as a plausible VUS-level candidate, document both supporting and limiting evidence, and avoid communicating it as a confirmed diagnosis.",
};