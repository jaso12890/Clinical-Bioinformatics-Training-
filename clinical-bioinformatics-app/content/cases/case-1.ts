export const case1 = {
  id: "case-1",
  slug: "rare-disease-trio-introduction",
  title: "Case 1: Rare disease trio analysis",
  level: "Beginner",
  summary:
    "A rare disease trio case focused on phenotype-led reasoning, inheritance, raw variant evidence, technical confidence, and safe escalation.",

  visualisationExampleId: null,

  assessmentFocus: [
    "Rare disease trio reasoning",
    "Phenotype-led candidate prioritisation",
    "Inheritance pattern interpretation",
    "Variant consequence and gene mechanism",
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
        "Rank the findings from strongest to weakest based on phenotype fit, inheritance pattern, gene mechanism, variant consequence, technical confidence, and whether each finding should drive the case conclusion.",
      correctOrder: ["candidate-2", "candidate-1", "candidate-3"],
      explanation:
        "Candidate 2 is strongest because the phenotype, apparent de novo inheritance, stop-gained consequence, loss-of-function disease mechanism, population absence, and technical quality all align. Candidate 1 is weaker because it is a single maternally inherited heterozygous missense variant in a gene where the described mechanism is biallelic loss-of-function. Candidate 3 is weakest because although it appears absent from parental calls, the gene-disease evidence is limited and the read-level evidence is technically fragile.",
    },

    escalationDecision: {
      prompt:
        "Choose the safest next action for the strongest finding in this case.",
      options: [
        {
          id: "report-candidate-2-now",
          label: "A",
          decision:
            "Treat Candidate 2 as a confirmed diagnosis because it is de novo, rare, truncating, and fits the broad neurodevelopmental phenotype.",
          isBest: false,
          feedback:
            "Review this choice. Candidate 2 is the strongest finding, but a trainee-level conclusion should still preserve the need for transcript review, gene-disease review, clinical scientist interpretation, and formal sign-off.",
        },
        {
          id: "escalate-candidate-2",
          label: "B",
          decision:
            "Escalate Candidate 2 for formal review, documenting the supporting evidence and the reasons the other candidates are weaker.",
          isBest: true,
          feedback:
            "Best decision. This keeps the reasoning clear and proportionate: Candidate 2 is prioritised, Candidates 1 and 3 are not ignored, and final interpretation is left to the formal review pathway.",
        },
        {
          id: "hold-all-candidates",
          label: "C",
          decision:
            "Hold all candidates from escalation because the case is beginner-level and none of the findings has an existing exact ClinVar match.",
          isBest: false,
          feedback:
            "Review this choice. An exact ClinVar match is not required before a plausible candidate is escalated. Candidate 2 has enough converging evidence to justify formal review.",
        },
      ],
    },

    writtenSummary: {
      prompt:
        "Write a short trainee-level handover summary explaining the strongest candidate, the evidence supporting prioritisation, the key reasons the other findings are weaker, and the safest next step.",
      checklist: [
        "Names Candidate 2 as the strongest current finding.",
        "Mentions the apparent de novo inheritance pattern in the trio.",
        "Uses the stop-gained consequence and loss-of-function mechanism as supporting evidence.",
        "Links the gene-disease association to the neurodevelopmental phenotype.",
        "Explains why Candidate 1 is weaker because the inheritance and mechanism do not currently fit.",
        "Explains why Candidate 3 is weaker because of technical uncertainty and limited gene-disease evidence.",
        "Avoids calling Candidate 2 a final diagnosis without formal review and sign-off.",
      ],
      modelAnswer:
        "Candidate 2 is the strongest current finding for formal review. It is an apparent de novo heterozygous stop-gained variant in NDDX1, a gene associated with an autosomal dominant neurodevelopmental disorder where loss-of-function is a compatible mechanism. The proband’s developmental delay, speech delay, learning difficulties, and dysmorphic features are broadly consistent with this type of disorder, and the raw evidence shows good depth, allele balance, mapping quality, and absence from population data. Candidate 1 is weaker because it is a maternally inherited heterozygous missense variant in a gene where the described mechanism is biallelic loss-of-function. Candidate 3 is also weaker because the apparent de novo signal is technically uncertain, with low alternate read support, strand/read-position concerns, and limited gene-disease confidence. The safest next step is to document the prioritisation rationale and escalate Candidate 2 through the appropriate clinical laboratory review process rather than treating it as a final diagnosis.",
    },
  },

  reasoningScorecard: [
    {
      category: "Phenotype-led reasoning",
      maxScore: 2,
      expectation:
        "Uses the referral reason and phenotype to guide candidate assessment instead of starting from variant rarity alone.",
    },
    {
      category: "Inheritance interpretation",
      maxScore: 2,
      expectation:
        "Distinguishes an apparent de novo dominant candidate from an inherited heterozygous finding that does not match a recessive mechanism.",
    },
    {
      category: "Mechanism and consequence",
      maxScore: 2,
      expectation:
        "Recognises why a stop-gained variant in a loss-of-function disease gene is stronger than a mechanism-mismatched missense finding.",
    },
    {
      category: "Technical confidence",
      maxScore: 2,
      expectation:
        "Uses depth, allele balance, mapping quality, strand pattern, and read-level concerns to judge how much confidence to place in each finding.",
    },
    {
      category: "Safe escalation",
      maxScore: 2,
      expectation:
        "Prioritises the strongest candidate for formal review while avoiding final diagnostic language or unsupported overclaiming.",
    },
  ],

  patient: {
    age: 8,
    sex: "Male",
  },

  referralReason:
    "An 8-year-old boy has been referred for genomic testing because of global developmental delay, speech delay, learning difficulties, and mild dysmorphic features.",

  testType: "Rare disease trio genome sequencing",

  familyStructure:
    "The proband and both biological parents have been tested. Both parents are reportedly unaffected.",

  history: [
    "Developmental delay noted from early childhood",
    "Speech delay with ongoing learning support at school",
    "No major perinatal complications reported",
    "No known previous molecular diagnosis",
    "No reported seizures or major congenital malformation",
  ],

  phenotype: [
    "Global developmental delay",
    "Speech delay",
    "Learning difficulties",
    "Mild dysmorphic features",
  ],

  familyHistory:
    "Parents are unaffected. No known family history of a similar neurodevelopmental condition. Trio testing has been requested.",

  serviceContext: [
    "The analysis is being performed in a rare disease service context.",
    "The aim is to prioritise plausible candidate findings for review, not to make a final diagnostic sign-out decision alone.",
    "Candidate findings need to be considered using phenotype fit, inheritance, gene-disease mechanism, population evidence, and technical confidence.",
    "Any candidate taken forward would require appropriate review, documentation, and escalation through the clinical laboratory process.",
  ],

  candidateFindings: [
    {
      id: "candidate-1",
      label: "Candidate 1",
      gene: "SLCY2",
      variant: "chr12:99117722 A>G",
      zygosity: "Heterozygous",
      consequence: "missense_variant",
      inheritanceSignal: "Inherited from mother",
      clinicalFit:
        "The gene has a reported childhood neurological disease association, but the known mechanism is biallelic loss-of-function.",
      technicalClues: [
        "Review the raw evidence packet. The proband and mother are both heterozygous.",
        "The reported inheritance is autosomal recessive, but only one heterozygous variant is shown here.",
        "The variant is missense, while the known mechanism is biallelic loss-of-function.",
      ],
      rawEvidence: `GENE: SLCY2
Known disease association: childhood neurological disorder
Reported inheritance: autosomal recessive
Known mechanism: biallelic loss-of-function

Variant:
chr12:99117722 A>G
Transcript: NM_000002.3
HGVS: c.742A>G p.(Lys248Glu)
Consequence: missense_variant

VCF-style fields:
QUAL=89
FILTER=PASS
INFO: DP=38;MQ=60;QD=2.3;SOR=0.92
FORMAT: GT:AD:DP:GQ

Proband: 0/1:19,19:38:78
Mother: 0/1:21,18:39:76
Father: 0/0:27,0:27:99

Read-level notes:
ALT reads seen on both forward and reverse strands
ALT reads not concentrated at read ends
No obvious local mapping warning

Population:
gnomAD AF = 0.00001
gnomAD allele count = 3

Constraint:
LOEUF = 0.24
pLI = 0.91

ClinVar-style summary:
No exact matching variant record found in local summary
Gene has submitted disease-associated loss-of-function variants in biallelic cases`,
      concern:
        "This is rare and technically plausible, but it does not currently fit the reported autosomal recessive biallelic loss-of-function mechanism unless another relevant variant or mechanism is identified.",
    },
    {
      id: "candidate-2",
      label: "Candidate 2",
      gene: "NDDX1",
      variant: "chr3:44781291 C>T",
      zygosity: "Heterozygous",
      consequence: "stop_gained",
      inheritanceSignal: "Apparent de novo",
      clinicalFit:
        "The gene is associated with an autosomal dominant neurodevelopmental disorder including developmental delay, speech delay, and learning difficulties.",
      technicalClues: [
        "Review the raw evidence packet. The proband is heterozygous and both parents are reference at this site.",
        "Depth and allele balance are consistent with a heterozygous call in the proband.",
        "The gene mechanism is compatible with a loss-of-function candidate.",
      ],
      rawEvidence: `GENE: NDDX1
Known disease association: autosomal dominant neurodevelopmental disorder
Reported inheritance: autosomal dominant
Known mechanism: haploinsufficiency / loss-of-function

Variant:
chr3:44781291 C>T
Transcript: NM_000001.4
HGVS: c.1246C>T p.(Arg416*)
Consequence: stop_gained
Predicted effect: premature termination codon

VCF-style fields:
QUAL=742
FILTER=PASS
INFO: DP=44;MQ=60;QD=16.8;SOR=0.71
FORMAT: GT:AD:DP:GQ

Proband: 0/1:23,21:44:99
Mother: 0/0:37,0:37:99
Father: 0/0:41,0:41:99

Read-level notes:
ALT reads seen on both forward and reverse strands
ALT reads distributed across read positions
No obvious low-complexity flag in local sequence
No obvious segmental duplication / pseudogene warning

Population:
gnomAD AF = not observed
gnomAD allele count = 0

Constraint:
LOEUF = 0.18
pLI = 0.99

ClinVar-style summary:
No exact matching variant record found in local summary
Nearby truncating variants in this gene have been submitted as pathogenic/likely pathogenic in affected individuals`,
      concern:
        "This is the strongest current candidate, but it still needs formal review of transcript, gene-disease validity, variant consequence, phenotype fit, and service-level escalation.",
    },
    {
      id: "candidate-3",
      label: "Candidate 3",
      gene: "NEUROD9",
      variant: "chr7:55290118 G>A",
      zygosity: "Heterozygous",
      consequence: "missense_variant",
      inheritanceSignal: "Possible de novo, but technically uncertain",
      clinicalFit:
        "The gene has a possible neurodevelopmental association, but the evidence is limited and the variant is missense.",
      technicalClues: [
        "Review the raw evidence packet. The proband has low alternate allele support.",
        "Allele balance is lower than expected for a confident heterozygous call.",
        "Several ALT reads are close to read ends and mapping quality is lower.",
      ],
      rawEvidence: `GENE: NEUROD9
Known disease association: possible neurodevelopmental disorder
Reported inheritance: autosomal dominant proposed in limited reports
Known mechanism: uncertain; missense mechanism not well established

Variant:
chr7:55290118 G>A
Transcript: NM_000003.2
HGVS: c.521G>A p.(Arg174His)
Consequence: missense_variant

VCF-style fields:
QUAL=37
FILTER=PASS
INFO: DP=21;MQ=39;QD=1.8;SOR=4.9
FORMAT: GT:AD:DP:GQ

Proband: 0/1:17,4:21:43
Mother: 0/0:28,0:28:99
Father: 0/0:25,0:25:99

Read-level notes:
ALT reads mostly on one strand
3 of 4 ALT reads occur near read ends
Local region has repetitive sequence flag
Soft-clipping present in several supporting reads
Manual read review recommended before prioritisation

Population:
gnomAD AF = not observed
gnomAD allele count = 0

Constraint:
LOEUF = 0.72
pLI = 0.12

ClinVar-style summary:
No exact matching variant record found in local summary
Gene-disease relationship remains limited/uncertain in available summary`,
      concern:
        "This should not be prioritised purely because it appears absent from parental calls. The technical evidence and gene-disease confidence are both weaker.",
    },
  ],

  decisionCheckpoints: [
    {
      id: "checkpoint-1",
      title: "Checkpoint 1 — Start with the case context",
      context:
        "You have the referral reason, phenotype, unaffected parents, and trio genome test type. You have not yet interpreted the candidate evidence.",
      question: "What is the safest first analysis mindset for this case?",
      options: [
        {
          label: "A",
          text: "Start with rare and predicted damaging variants, then check whether any of them can be made to fit the patient.",
          isCorrect: false,
          feedback:
            "Not quite. This risks variant-first reasoning. In rare disease work, phenotype, inheritance, and test context should guide the analysis from the start.",
        },
        {
          label: "B",
          text: "Use the phenotype, family structure, and test type to judge which candidate findings would be plausible.",
          isCorrect: true,
          feedback:
            "Correct. A safe workflow starts with the clinical and family context, then uses that context to interpret candidate findings proportionately.",
        },
        {
          label: "C",
          text: "Treat the trio result as the main answer and use family history only after a candidate has already been selected.",
          isCorrect: false,
          feedback:
            "Not quite. Trio data is powerful, but it does not remove the need for careful inheritance reasoning, QC review, and clinical fit assessment.",
        },
      ],
      teachingPoint:
        "The safest starting point is phenotype-led and inheritance-aware reasoning, not searching for an isolated interesting variant.",
    },
    {
      id: "checkpoint-2",
      title: "Checkpoint 2 — Interpret Candidate 1",
      context:
        "Candidate 1 is in SLCY2. The disease association is reported as autosomal recessive with biallelic loss-of-function. The proband and mother are heterozygous for a missense variant.",
      question:
        "What is the best interpretation of Candidate 1 at this stage?",
      options: [
        {
          label: "A",
          text: "It remains a weaker candidate because the finding shown does not currently match the expected inheritance or mechanism.",
          isCorrect: true,
          feedback:
            "Correct. Based on the evidence shown, this does not yet fit the expected disease mechanism. It might only become more relevant if a second pathogenic allele or another mechanism were found.",
        },
        {
          label: "B",
          text: "It should be prioritised because the variant is rare, technically plausible, and located in a neurological disease gene.",
          isCorrect: false,
          feedback:
            "Not quite. Rarity and broad neurological relevance are not enough. The inheritance and mechanism need to fit the case.",
        },
        {
          label: "C",
          text: "It should be treated as equivalent to Candidate 2 because both variants pass basic technical filtering.",
          isCorrect: false,
          feedback:
            "Not quite. Basic technical plausibility is only one part of interpretation. The mechanism and inheritance pattern make Candidate 1 less convincing here.",
        },
      ],
      teachingPoint:
        "A rare variant in a relevant gene is not automatically a strong candidate. Inheritance and mechanism can make a variant much less convincing.",
    },
    {
      id: "checkpoint-3",
      title: "Checkpoint 3 — Compare Candidate 2 and Candidate 3",
      context:
        "Candidate 2 is a de novo stop-gained variant in a gene where loss-of-function is a known mechanism. Candidate 3 is a possible de novo missense variant, but has low alternate allele support, strand/read-position concerns, and weaker gene-disease evidence.",
      question:
        "Which candidate should be prioritised first for further review?",
      options: [
        {
          label: "A",
          text: "Candidate 2, because the inheritance, consequence, gene mechanism, phenotype fit, rarity, and technical evidence align best.",
          isCorrect: true,
          feedback:
            "Correct. Candidate 2 has the strongest convergence of phenotype relevance, inheritance, variant consequence, gene mechanism, population absence, and technical confidence.",
        },
        {
          label: "B",
          text: "Candidate 3, because apparent de novo status is enough to outweigh weak read support and uncertain gene validity.",
          isCorrect: false,
          feedback:
            "Not quite. Apparent de novo status is important, but it should not override weak technical evidence or uncertain gene-disease validity.",
        },
        {
          label: "C",
          text: "Candidate 1, because inherited variants can still be relevant even when a de novo candidate is present.",
          isCorrect: false,
          feedback:
            "Not quite. Inherited variants can be relevant, but Candidate 1 does not currently fit the reported recessive biallelic loss-of-function mechanism.",
        },
      ],
      teachingPoint:
        "Strong prioritisation comes from convergence across multiple evidence types, not from any single field in isolation.",
    },
    {
      id: "checkpoint-4",
      title: "Checkpoint 4 — Handle technical uncertainty",
      context:
        "Candidate 3 has DP=21 with AD 17,4, GQ=43, MQ=39, strand imbalance, read-end concentration, repetitive sequence context, and soft-clipping.",
      question:
        "What should you do with Candidate 3?",
      options: [
        {
          label: "A",
          text: "Escalate it as the main finding because absence from both parental calls makes the inheritance pattern highly informative.",
          isCorrect: false,
          feedback:
            "Not quite. The apparent inheritance signal is weakened by the technical evidence. Manual review or further technical assessment would be needed before treating it as a serious candidate.",
        },
        {
          label: "B",
          text: "Treat it cautiously, document the technical concerns, and avoid over-prioritising it without read-level review.",
          isCorrect: true,
          feedback:
            "Correct. The evidence does not support confident prioritisation without further review. The important point is to make the technical uncertainty visible.",
        },
        {
          label: "C",
          text: "Remove it from the reasoning entirely because technically weak candidates should not be mentioned in review notes.",
          isCorrect: false,
          feedback:
            "Not quite. A weak candidate can be deprioritised, but the reasoning should be documented. The key is not to over-interpret it.",
        },
      ],
      teachingPoint:
        "Clinical bioinformatics reasoning includes recognising when an apparently interesting finding is technically fragile.",
    },
    {
      id: "checkpoint-5",
      title: "Checkpoint 5 — Safe service-style next step",
      context:
        "Candidate 2 is the strongest current candidate, but it is not a final diagnosis yet. Candidate 1 has a mechanism mismatch. Candidate 3 has technical caveats.",
      question: "What is the safest service-style next step?",
      options: [
        {
          label: "A",
          text: "Report Candidate 2 as diagnostic immediately because it is the highest-priority candidate in the current analysis.",
          isCorrect: false,
          feedback:
            "Not quite. A strongest candidate is not the same as a final signed-out interpretation. It still needs review through the appropriate clinical laboratory process.",
        },
        {
          label: "B",
          text: "Escalate Candidate 3 first because technical uncertainty should always be resolved before reviewing stronger findings.",
          isCorrect: false,
          feedback:
            "Not quite. Candidate 3 can be documented as technically uncertain, but the strongest current candidate is Candidate 2 and should be taken forward first.",
        },
        {
          label: "C",
          text: "Document why Candidate 2 is prioritised, explain why Candidates 1 and 3 are weaker, and escalate Candidate 2 for review.",
          isCorrect: true,
          feedback:
            "Correct. This is a safe trainee-level workflow: prioritise, justify, caveat, and escalate rather than over-claim.",
        },
      ],
      teachingPoint:
        "Safe practice means producing reviewable reasoning, not just selecting a favourite candidate.",
    },
  ],

  finalReflection:
    "A safe trainee-level conclusion would be that Candidate 2 is the strongest current candidate for further review because the phenotype context, apparent de novo inheritance, loss-of-function consequence, gene mechanism, population absence, and technical evidence are all broadly aligned. Candidate 1 is weaker because the evidence shown is a single maternally inherited heterozygous missense variant in a gene where the reported disease mechanism is biallelic loss-of-function. Candidate 3 should be treated cautiously because the apparent de novo signal is weakened by low alternate allele support, mapping/read-position concerns, and limited gene-disease confidence. The next step is to document this reasoning and escalate Candidate 2 through the appropriate review pathway rather than treating it as a final interpretation.",
};