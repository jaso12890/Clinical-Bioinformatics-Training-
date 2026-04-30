export const case4 = {
  id: "case-4",
  slug: "homozygous-recessive-case",
  title: "Case 4: Homozygous recessive case",
  level: "Beginner",
  summary:
    "A recessive rare disease case focused on recognising a homozygous candidate, checking parental carrier status, population frequency, mechanism fit, and safe prioritisation.",

  visualisationExampleId: null,

  assessmentFocus: [
    "Homozygous recessive reasoning",
    "Parental carrier interpretation",
    "Population frequency assessment",
    "Variant consequence and mechanism fit",
    "Technical confidence",
    "Safe escalation and trainee-level handover",
  ],

  guidedTutorMode: {
    type: "static-rule-based",
    description:
      "Uses built-in hints, checkpoint feedback, model answers, and self-check criteria to support safe case reasoning.",
  },

  phase5Assessment: {
    candidateRanking: {
      prompt:
        "Rank the findings from strongest to weakest based on recessive inheritance fit, parental carrier status, phenotype overlap, gene mechanism, variant consequence, population frequency, technical confidence, and whether each finding should drive the case conclusion.",
      correctOrder: ["candidate-1", "candidate-3", "candidate-2"],
      explanation:
        "Candidate 1 is strongest because the proband is homozygous for a rare stop-gained variant, both parents are heterozygous carriers, the phenotype fits the reported metabolic-neurodevelopmental disorder, the known mechanism is biallelic loss-of-function, and the technical evidence is strong. Candidate 3 is weaker because although the inheritance pattern, rarity, and technical evidence are plausible, the variant is synonymous and there is no strong splice-altering evidence shown. Candidate 2 is weakest because it is too frequent for a severe early-onset rare recessive disorder, with observed homozygotes in the population summary and limited gene-disease support.",
    },

    escalationDecision: {
      prompt:
        "Choose the safest next action for the strongest finding in this case.",
      options: [
        {
          id: "escalate-candidate-1",
          label: "A",
          decision:
            "Escalate Candidate 1 for formal review, documenting the homozygous proband genotype, parental carrier status, phenotype fit, rarity, and loss-of-function mechanism.",
          isBest: true,
          feedback:
            "Best decision. Candidate 1 has the strongest convergence across inheritance, mechanism, phenotype, consequence, population evidence, and technical confidence, but it still needs formal review and sign-off.",
        },
        {
          id: "report-candidate-1-now",
          label: "B",
          decision:
            "Treat Candidate 1 as diagnostic immediately because the child is homozygous and both parents are confirmed heterozygous carriers.",
          isBest: false,
          feedback:
            "Review this choice. The inheritance pattern is strong, but a homozygous genotype alone is not enough for final diagnostic wording. The finding still needs formal interpretation and sign-off.",
        },
        {
          id: "escalate-candidate-2",
          label: "C",
          decision:
            "Escalate Candidate 2 as the lead finding because it has a clean homozygous call and both parents show the expected carrier pattern.",
          isBest: false,
          feedback:
            "Review this choice. Candidate 2 has a plausible technical and inheritance pattern, but the population frequency and observed homozygotes make it much less convincing for a severe early-onset rare disorder.",
        },
      ],
    },

    writtenSummary: {
      prompt:
        "Write a short trainee-level handover summary explaining the strongest homozygous recessive candidate, the supporting evidence, why the other findings are weaker, and the safest next step.",
      checklist: [
        "Names Candidate 1 as the strongest current finding.",
        "Explains that the proband is homozygous and both parents are heterozygous carriers.",
        "Links the METAB1 gene and biallelic loss-of-function mechanism to the case.",
        "Mentions the stop-gained consequence and rarity of the variant.",
        "Uses phenotype overlap with developmental delay, hypotonia, feeding difficulties, and possible metabolic decompensation.",
        "Explains why Candidate 2 is weaker because it is too common and has observed homozygotes.",
        "Explains why Candidate 3 is weaker because the synonymous consequence does not currently fit the expected mechanism.",
        "Avoids calling Candidate 1 a final diagnosis without formal review and sign-off.",
      ],
      modelAnswer:
        "Candidate 1 is the strongest current finding for formal review. The proband is homozygous for a rare stop-gained variant in METAB1, and both unaffected parents are heterozygous carriers, which supports an autosomal recessive homozygous model. METAB1 is associated with a recessive metabolic-neurodevelopmental disorder where biallelic loss-of-function is the reported mechanism, and the child’s developmental delay, hypotonia, feeding difficulties, and possible illness-triggered metabolic decompensation provide plausible phenotype overlap. The technical evidence is also reassuring, with good depth, strong genotype quality, balanced parental carrier calls, and no major read-level warnings. Candidate 2 is technically real and has the expected carrier pattern, but the variant is too common and has observed homozygotes in population data, making it weak for a severe early-onset rare disorder. Candidate 3 is rare and technically plausible, but it is synonymous with no strong splice-altering evidence shown, so it does not currently fit the expected loss-of-function or splice-disrupting mechanism. The safest next step is to document the rationale and escalate Candidate 1 through the appropriate clinical laboratory review pathway rather than treating it as a final diagnosis.",
    },
  },

  reasoningScorecard: [
    {
      category: "Recessive inheritance reasoning",
      maxScore: 2,
      expectation:
        "Recognises the classic homozygous recessive trio pattern: affected proband homozygous with both unaffected parents heterozygous carriers.",
    },
    {
      category: "Population evidence",
      maxScore: 2,
      expectation:
        "Uses allele frequency, allele count, and observed homozygotes to judge whether a variant is plausible for a severe early-onset rare disorder.",
    },
    {
      category: "Mechanism and consequence",
      maxScore: 2,
      expectation:
        "Distinguishes a mechanism-compatible stop-gained variant from synonymous or missense findings that do not clearly fit the known disease mechanism.",
    },
    {
      category: "Candidate prioritisation",
      maxScore: 2,
      expectation:
        "Prioritises the candidate with the best convergence across inheritance, phenotype, mechanism, consequence, rarity, and technical confidence.",
    },
    {
      category: "Safe escalation",
      maxScore: 2,
      expectation:
        "Escalates the strongest homozygous recessive candidate for formal review while avoiding automatic diagnostic wording.",
    },
  ],

  patient: {
    age: 4,
    sex: "Male",
  },

  referralReason:
    "A 4-year-old boy has been referred for rare disease genome analysis because of early-onset developmental delay, hypotonia, feeding difficulties, and suspected metabolic features.",

  testType: "Rare disease trio genome sequencing",

  familyStructure:
    "The proband and both biological parents have been tested. Both parents are reportedly unaffected. The family history notes that the parents are distantly related.",

  history: [
    "Global developmental delay noted in infancy",
    "Hypotonia from early childhood",
    "Feeding difficulties requiring dietetic input",
    "Intermittent episodes of lethargy during illness",
    "No known previous molecular diagnosis",
  ],

  phenotype: [
    "Global developmental delay",
    "Hypotonia",
    "Feeding difficulties",
    "Possible metabolic decompensation during illness",
  ],

  familyHistory:
    "Parents are unaffected. They are reported to be distantly related. No similarly affected siblings are reported.",

  serviceContext: [
    "The analysis is being performed in a rare disease service context.",
    "The phenotype and family structure make an autosomal recessive model plausible.",
    "Your task is to decide which homozygous or recessive candidate is most convincing using inheritance, mechanism, population evidence, and technical confidence.",
    "A homozygous genotype alone is not enough; the variant must fit the disease, mechanism, and population evidence.",
  ],

  candidateFindings: [
    {
      id: "candidate-1",
      label: "Candidate 1",
      gene: "METAB1",
      variant: "chr8:102881774 G>A",
      zygosity: "Homozygous",
      consequence: "stop_gained",
      inheritanceSignal: "Both parents heterozygous carriers",
      clinicalFit:
        "METAB1 is associated with an autosomal recessive metabolic-neurodevelopmental disorder including developmental delay, hypotonia, feeding problems, and illness-triggered decompensation.",
      rawEvidence: `GENE: METAB1
Known disease association: autosomal recessive metabolic-neurodevelopmental disorder
Reported inheritance: autosomal recessive
Known mechanism: biallelic loss-of-function

Variant:
chr8:102881774 G>A
Transcript: NM_300001.2
HGVS: c.865G>A p.(Trp289*)
Consequence: stop_gained
Predicted effect: premature termination codon

VCF-style fields:
QUAL=1180
FILTER=PASS
INFO: DP=58;MQ=60;QD=20.3;SOR=0.68
FORMAT: GT:AD:DP:GQ

Proband: 1/1:0,58:58:99
Mother: 0/1:21,22:43:99
Father: 0/1:24,23:47:99

Read-level notes:
ALT reads in proband seen on both forward and reverse strands
Parental heterozygous calls have balanced allele support
ALT reads distributed across read positions
No obvious low-complexity sequence flag
No pseudogene or segmental duplication warning
No concerning soft-clipping around the variant

Population:
gnomAD AF = 0.000003
gnomAD allele count = 1
No homozygotes observed in local summary

Constraint:
LOEUF = 0.39
pLI = 0.51

ClinVar-style summary:
No exact matching variant record found in local summary
Other biallelic loss-of-function variants in METAB1 have been submitted as pathogenic/likely pathogenic in affected individuals`,
      concern:
        "This is the strongest current candidate because the proband is homozygous, both parents are heterozygous carriers, the variant is rare, the consequence fits the known biallelic loss-of-function mechanism, and the phenotype is plausible.",
    },
    {
      id: "candidate-2",
      label: "Candidate 2",
      gene: "DEVL4",
      variant: "chr6:44120987 C>T",
      zygosity: "Homozygous",
      consequence: "missense_variant",
      inheritanceSignal: "Both parents heterozygous carriers",
      clinicalFit:
        "DEVL4 has a broad developmental delay association, but the disease mechanism is uncertain and the variant appears more frequent in population data than expected for a severe early-onset recessive disorder.",
      rawEvidence: `GENE: DEVL4
Known disease association: broad neurodevelopmental phenotype reported in limited evidence
Reported inheritance: autosomal recessive proposed in some reports
Known mechanism: uncertain

Variant:
chr6:44120987 C>T
Transcript: NM_300002.1
HGVS: c.1223C>T p.(Pro408Leu)
Consequence: missense_variant

VCF-style fields:
QUAL=970
FILTER=PASS
INFO: DP=51;MQ=60;QD=19.0;SOR=0.74
FORMAT: GT:AD:DP:GQ

Proband: 1/1:0,51:51:99
Mother: 0/1:25,23:48:99
Father: 0/1:24,21:45:99

Read-level notes:
ALT reads in proband seen on both forward and reverse strands
Parental heterozygous calls have balanced allele support
No obvious local mapping warning
No soft-clipping concern

Population:
gnomAD AF = 0.006
gnomAD allele count = 1680
Homozygotes observed in population summary: 4

Constraint:
LOEUF = 0.88
pLI = 0.03

ClinVar-style summary:
No exact matching pathogenic record found in local summary
Gene-disease relationship remains limited in available summary`,
      concern:
        "This is technically convincing as a homozygous variant call, but the population frequency and observed homozygotes make it much less plausible for a severe early-onset recessive disorder.",
    },
    {
      id: "candidate-3",
      label: "Candidate 3",
      gene: "MITON6",
      variant: "chr15:71900331 T>C",
      zygosity: "Homozygous",
      consequence: "synonymous_variant",
      inheritanceSignal: "Both parents heterozygous carriers",
      clinicalFit:
        "MITON6 has some metabolic relevance, but this specific variant is synonymous and there is no obvious splice warning in the evidence shown.",
      rawEvidence: `GENE: MITON6
Known disease association: mitochondrial metabolic disorder
Reported inheritance: autosomal recessive
Known mechanism: biallelic loss-of-function or damaging splice variants

Variant:
chr15:71900331 T>C
Transcript: NM_300003.4
HGVS: c.612T>C p.(Gly204=)
Consequence: synonymous_variant
Splice prediction summary: no strong splice-altering signal in local summary

VCF-style fields:
QUAL=642
FILTER=PASS
INFO: DP=46;MQ=60;QD=14.0;SOR=0.81
FORMAT: GT:AD:DP:GQ

Proband: 1/1:0,46:46:99
Mother: 0/1:22,20:42:99
Father: 0/1:19,22:41:99

Read-level notes:
ALT reads in proband seen on both forward and reverse strands
Parental heterozygous calls have balanced allele support
No obvious local mapping warning

Population:
gnomAD AF = 0.00004
gnomAD allele count = 12
No homozygotes observed in local summary

Constraint:
LOEUF = 0.31
pLI = 0.86

ClinVar-style summary:
No exact matching variant record found in local summary
Pathogenic variants in this gene are usually loss-of-function or splice-disrupting variants`,
      concern:
        "This is technically plausible and rare, but the synonymous consequence does not currently fit the known damaging loss-of-function or splice mechanism unless additional splice evidence is found.",
    },
  ],

  decisionCheckpoints: [
    {
      id: "checkpoint-1",
      title: "Checkpoint 1 — Recognise the homozygous recessive pattern",
      context:
        "Candidate 1 shows the proband as 1/1 and both unaffected parents as 0/1 carriers. The family history notes distant parental relatedness.",
      question:
        "What does this inheritance pattern support?",
      options: [
        {
          label: "A",
          text: "A possible autosomal recessive homozygous candidate, because the child is homozygous and both parents are carriers.",
          isCorrect: true,
          feedback:
            "Correct. This is the classic pattern expected for a homozygous recessive candidate in a trio: affected child homozygous, both parents heterozygous carriers.",
        },
        {
          label: "B",
          text: "A possible de novo dominant candidate, because the parents are unaffected and the child has early-onset disease.",
          isCorrect: false,
          feedback:
            "Not quite. The variant is present in both parents as heterozygous carriers, so this is not a de novo dominant pattern.",
        },
        {
          label: "C",
          text: "A mitochondrial inheritance pattern, because metabolic features can sometimes suggest mitochondrial disease.",
          isCorrect: false,
          feedback:
            "Not quite. The evidence shown is nuclear trio genotype data and supports a recessive model, not mitochondrial inheritance.",
        },
      ],
      teachingPoint:
        "For a homozygous recessive candidate, the key inheritance pattern is proband homozygous with both parents heterozygous carriers.",
    },
    {
      id: "checkpoint-2",
      title: "Checkpoint 2 — Interpret Candidate 1",
      context:
        "Candidate 1 is a rare homozygous stop-gained variant in METAB1. Both parents are carriers. The gene is linked to a recessive metabolic-neurodevelopmental disorder and biallelic loss-of-function is the known mechanism.",
      question:
        "Why is Candidate 1 the strongest current candidate?",
      options: [
        {
          label: "A",
          text: "Because the inheritance, phenotype, consequence, mechanism, population evidence, and technical data all broadly align.",
          isCorrect: true,
          feedback:
            "Correct. Candidate 1 has several lines of evidence pointing in the same direction, which makes it the strongest current candidate for review.",
        },
        {
          label: "B",
          text: "Because a homozygous genotype is enough to make a rare disease variant clinically diagnostic.",
          isCorrect: false,
          feedback:
            "Not quite. Homozygosity is not enough. The variant must also fit the phenotype, gene, mechanism, population evidence, and technical confidence.",
        },
        {
          label: "C",
          text: "Because the gene-level constraint values alone prove that this specific variant is pathogenic.",
          isCorrect: false,
          feedback:
            "Not quite. Constraint supports gene-level reasoning, but it does not classify a specific variant by itself.",
        },
      ],
      teachingPoint:
        "A strong recessive candidate is supported by convergence: genotype, parental carrier status, disease mechanism, phenotype, population rarity, and technical confidence.",
    },
    {
      id: "checkpoint-3",
      title: "Checkpoint 3 — Population frequency problem",
      context:
        "Candidate 2 is technically convincing and homozygous in the proband, with both parents as carriers. However, gnomAD AF is 0.006, allele count is 1680, and homozygotes are observed in the population summary.",
      question:
        "Why is Candidate 2 weaker for a severe early-onset recessive disorder?",
      options: [
        {
          label: "A",
          text: "Because the variant appears too common and has observed homozygotes, which weakens its plausibility for a severe rare condition.",
          isCorrect: true,
          feedback:
            "Correct. Population frequency can strongly weaken a candidate, especially for severe early-onset Mendelian disease.",
        },
        {
          label: "B",
          text: "Because technically clean calls become unreliable when they are seen more than once in population databases.",
          isCorrect: false,
          feedback:
            "Not quite. The call may be technically real. The issue is that it may be too common to explain this rare severe phenotype.",
        },
        {
          label: "C",
          text: "Because homozygous variants are less compatible with recessive disease than inherited heterozygous variants.",
          isCorrect: false,
          feedback:
            "Not quite. Homozygous variants can cause recessive disease, but the population evidence must still be plausible.",
        },
      ],
      teachingPoint:
        "A variant can be technically real and inherited in the right pattern but still be clinically weak because it is too common for the disease.",
    },
    {
      id: "checkpoint-4",
      title: "Checkpoint 4 — Mechanism mismatch",
      context:
        "Candidate 3 is rare, homozygous, technically plausible, and both parents are carriers. However, it is a synonymous variant with no strong splice-altering signal in the local summary.",
      question:
        "What is the main limitation of Candidate 3?",
      options: [
        {
          label: "A",
          text: "The variant consequence does not currently fit the known loss-of-function or splice-disrupting disease mechanism.",
          isCorrect: true,
          feedback:
            "Correct. Even with a plausible recessive inheritance pattern, the variant effect needs to fit the known disease mechanism.",
        },
        {
          label: "B",
          text: "The variant should be dismissed because synonymous variants can never have functional consequences.",
          isCorrect: false,
          feedback:
            "Not quite. Synonymous variants can sometimes affect splicing or regulation, but the evidence shown here does not currently support that.",
        },
        {
          label: "C",
          text: "The variant should outrank Candidate 1 because rare synonymous variants are often overlooked in filtering workflows.",
          isCorrect: false,
          feedback:
            "Not quite. Rarity is supportive but not enough. Candidate 1 has a stronger consequence-mechanism fit.",
        },
      ],
      teachingPoint:
        "Mechanism matters. A variant can have the right inheritance pattern but still be weak if its consequence does not plausibly affect the disease mechanism.",
    },
    {
      id: "checkpoint-5",
      title: "Checkpoint 5 — Safe service-style next step",
      context:
        "Candidate 1 is the strongest current homozygous recessive candidate. Candidate 2 is too common for the likely disease model. Candidate 3 has a mechanism limitation.",
      question:
        "What is the safest next step?",
      options: [
        {
          label: "A",
          text: "Prioritise Candidate 1 for review, document the carrier pattern in the parents, and explain why Candidates 2 and 3 are weaker.",
          isCorrect: true,
          feedback:
            "Correct. This is safe and reviewable. It prioritises the strongest candidate while documenting why other candidates are deprioritised.",
        },
        {
          label: "B",
          text: "Report Candidate 1 as diagnostic immediately because the homozygous genotype and carrier parents fit recessive inheritance.",
          isCorrect: false,
          feedback:
            "Not quite. A strong candidate still needs appropriate review, interpretation, and sign-off before reporting.",
        },
        {
          label: "C",
          text: "Prioritise Candidate 2 because a clean common variant is easier to confirm than a rare stop-gained variant.",
          isCorrect: false,
          feedback:
            "Not quite. Technical cleanliness does not overcome a major population-frequency concern.",
        },
      ],
      teachingPoint:
        "Safe clinical bioinformatics practice means prioritising the best-supported candidate and documenting why alternatives are less convincing.",
    },
  ],

  finalReflection:
    "A safe trainee-level conclusion would be that Candidate 1 is the strongest current candidate for review because the proband is homozygous for a rare stop-gained variant, both parents are heterozygous carriers, the phenotype is compatible with the reported recessive metabolic-neurodevelopmental disorder, and biallelic loss-of-function is the known mechanism. Candidate 2 is technically real and has a compatible carrier pattern, but the population frequency and observed homozygotes make it much less plausible for a severe early-onset rare disease. Candidate 3 is rare and technically plausible, but the synonymous consequence does not currently fit the expected loss-of-function or splice-disrupting mechanism. The safest next step is to document this reasoning and escalate Candidate 1 through the appropriate review pathway.",
};