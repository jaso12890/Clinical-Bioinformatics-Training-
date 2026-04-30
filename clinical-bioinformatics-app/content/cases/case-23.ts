export const case23 = {
  id: "case-23",
  slug: "dominant-negative-vs-haploinsufficiency-case",
  title: "Case 23: Dominant-negative versus haploinsufficiency",
  level: "Intermediate",
  summary:
    "An interpretation-aware rare disease case focused on matching the variant consequence to the correct gene-disease mechanism.",

  visualisationExampleId: null,

  assessmentFocus: [
    "Gene-disease mechanism matching",
    "Dominant-negative versus haploinsufficiency reasoning",
    "Missense-domain interpretation",
    "High-impact annotation caution",
    "Technical confidence review",
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
        "Rank the findings from strongest to weakest based on phenotype fit, inheritance, variant consequence, gene-disease mechanism, domain relevance, population evidence, technical confidence, and whether each finding should drive the current case conclusion.",
      correctOrder: [
        "candidate-4",
        "candidate-1",
        "candidate-2",
        "candidate-3",
      ],
      explanation:
        "Candidate 4 is strongest because the phenotype, apparent de novo inheritance, missense consequence, dominant-negative mechanism, interaction-domain location, population absence, and technical evidence all align. Candidate 1 is technically convincing and apparently de novo, but it is mechanistically weaker because the gene’s known disease mechanism is dominant-negative missense variation rather than haploinsufficiency. Candidate 2 has a consequence that fits haploinsufficiency, but it is inherited from an unaffected mother and appears at a frequency that weakens a severe early-onset dominant explanation. Candidate 3 is mechanistically plausible because it is a missense variant in a relevant domain, but the technical evidence is fragile, so it should not be prioritised without read-level review.",
    },

    escalationDecision: {
      prompt:
        "Choose the safest next action for this candidate set.",
      options: [
        {
          id: "prioritise-candidate-1",
          label: "A",
          decision:
            "Prioritise Candidate 1 because a de novo stop-gained variant should outrank missense findings regardless of gene mechanism.",
          isBest: false,
          feedback:
            "Review this choice. Candidate 1 is technically convincing, but the known disease mechanism is dominant-negative missense variation, not established haploinsufficiency.",
        },
        {
          id: "prioritise-candidate-4",
          label: "B",
          decision:
            "Prioritise Candidate 4 for formal review because the variant consequence, domain location, inheritance, phenotype, and dominant-negative mechanism align.",
          isBest: true,
          feedback:
            "Best decision. Candidate 4 is the strongest mechanism match and has the best convergence across clinical, inheritance, population, and technical evidence.",
        },
        {
          id: "prioritise-candidate-3",
          label: "C",
          decision:
            "Prioritise Candidate 3 because a missense variant in a dominant-negative gene should be accepted even when read evidence is weak.",
          isBest: false,
          feedback:
            "Review this choice. Candidate 3 is mechanistically interesting, but poor allele balance, strand/read-position concerns, soft-clipping, and lack of second-caller support make it technically fragile.",
        },
      ],
    },

    writtenSummary: {
      prompt:
        "Write a short trainee-level handover summary explaining the strongest candidate, why mechanism matters, why the other findings are weaker, and the safest next step.",
      checklist: [
        "Names Candidate 4 as the strongest current finding.",
        "Explains that Candidate 4 is an apparent de novo missense variant in a dominant-negative interaction domain.",
        "Links Candidate 4 to the developmental delay, severe speech delay, seizures, hypotonia, and abnormal tone phenotype.",
        "Mentions the strong technical support for Candidate 4.",
        "Explains why Candidate 1 is weaker despite being de novo and stop-gained.",
        "States that Candidate 1 does not match the known dominant-negative missense mechanism well.",
        "Explains why Candidate 2 is weakened by inheritance from an unaffected parent and population frequency.",
        "Explains why Candidate 3 is mechanistically plausible but technically fragile.",
        "Avoids ranking candidates by consequence severity alone.",
        "Avoids calling Candidate 4 a final diagnosis without formal review and sign-off.",
      ],
      modelAnswer:
        "Candidate 4 is the strongest current finding for formal review. It is an apparent de novo missense variant in DNMEC2, located in the recurrent interaction domain where dominant-negative missense variants are the known disease mechanism. The patient’s developmental delay, severe speech delay, seizures, hypotonia, and abnormal muscle tone fit the reported disease context, and the variant is absent from population data with strong technical support, including balanced allele evidence, high mapping quality, and second-caller detection. Candidate 1 is technically convincing and appears de novo, but it is a stop-gained variant in a gene where pathogenic variants are mainly dominant-negative missense changes and loss-of-function is not clearly established. Candidate 2 has a consequence that fits haploinsufficiency, but it is inherited from an unaffected mother and has population frequency concerns for a severe early-onset dominant disorder. Candidate 3 is mechanistically interesting because it is a missense variant in a plausible domain, but the raw evidence is technically fragile. The safest next step is to prioritise Candidate 4 for formal review while documenting the mechanism mismatch, inheritance, population, and technical limitations of the other candidates.",
    },
  },

  reasoningScorecard: [
    {
      category: "Mechanism matching",
      maxScore: 2,
      expectation:
        "Matches variant consequence to the known gene-disease mechanism rather than assuming the most severe-looking annotation is strongest.",
    },
    {
      category: "Dominant-negative reasoning",
      maxScore: 2,
      expectation:
        "Recognises that dominant-negative disorders may be driven by specific missense variants in functional domains rather than loss-of-function.",
    },
    {
      category: "Haploinsufficiency reasoning",
      maxScore: 2,
      expectation:
        "Recognises when frameshift or stop-gained variants fit haploinsufficiency, while still checking inheritance and population plausibility.",
    },
    {
      category: "Technical confidence",
      maxScore: 2,
      expectation:
        "Does not prioritise a mechanistically plausible variant when allele balance, strand/read-position evidence, soft-clipping, and caller support are weak.",
    },
    {
      category: "Safe escalation",
      maxScore: 2,
      expectation:
        "Escalates the strongest mechanism-compatible candidate while documenting why other high-impact or plausible alternatives are weaker.",
    },
  ],

  patient: {
    age: 8,
    sex: "Female",
  },

  referralReason:
    "An 8-year-old girl has been referred for rare disease genome analysis because of developmental delay, severe speech delay, seizures, hypotonia, and abnormal muscle tone.",

  testType: "Rare disease trio genome sequencing",

  familyStructure:
    "The proband and both biological parents have been tested. Both parents are reportedly unaffected.",

  history: [
    "Global developmental delay noted from infancy",
    "Severe speech delay",
    "Seizures beginning at age 4",
    "Hypotonia in early childhood",
    "Abnormal muscle tone noted on neurological review",
    "No known previous molecular diagnosis",
  ],

  phenotype: [
    "Global developmental delay",
    "Severe speech delay",
    "Seizures",
    "Hypotonia",
    "Abnormal muscle tone",
  ],

  familyHistory:
    "Both parents are reportedly unaffected. No known family history of developmental delay, seizures, abnormal tone, or a similar neurodevelopmental presentation.",

  serviceContext: [
    "The analysis is being performed in a rare disease service context.",
    "The key issue is disease mechanism.",
    "Some dominant disorders are caused by haploinsufficiency, where loss-of-function is plausible.",
    "Other dominant disorders are caused by dominant-negative or gain-of-function missense variants, where truncating variants may not fit the known mechanism.",
    "Your task is to decide which candidate best matches phenotype, inheritance, variant consequence, gene mechanism, technical confidence, and population evidence.",
  ],

  candidateFindings: [
    {
      id: "candidate-1",
      label: "Candidate 1",
      gene: "DNMEC1",
      variant: "chr5:44190220 C>T",
      zygosity: "Heterozygous",
      consequence: "stop_gained",
      inheritanceSignal: "Apparent de novo",
      clinicalFit:
        "DNMEC1 is associated with an autosomal dominant neurodevelopmental disorder, but the reported mechanism is dominant-negative missense variation in a specific protein interaction domain. Loss-of-function is not clearly established as disease-causing.",
      rawEvidence: `GENE: DNMEC1
Known disease association: autosomal dominant neurodevelopmental disorder
Reported inheritance: autosomal dominant
Known mechanism: dominant-negative missense variants in a protein interaction domain
Loss-of-function evidence: not established in local summary

Variant:
chr5:44190220 C>T
Transcript: NM_230001.3
HGVS: c.1009C>T p.(Arg337*)
Consequence: stop_gained
Predicted effect: premature termination codon

Transcript / protein context:
Variant is upstream of the reported dominant-negative interaction domain
Predicted NMD: likely
Interpretation note: likely loss-of-function, but disease mechanism is not known to be haploinsufficiency

VCF-style fields:
QUAL=801
FILTER=PASS
INFO: DP=48;MQ=60;QD=16.7;SOR=0.79
FORMAT: GT:AD:DP:GQ

Proband: 0/1:25,23:48:99
Mother: 0/0:41,0:41:99
Father: 0/0:39,0:39:99

Read-level notes:
ALT reads seen on both forward and reverse strands
ALT reads distributed across read positions
No local mapping warning
No soft-clipping concern
Second caller: detected

Population:
gnomAD AF = not observed
gnomAD allele count = 0

Constraint:
LOEUF = 0.83
pLI = 0.08

ClinVar-style summary:
No exact matching variant record found in local summary
Submitted pathogenic variants in DNMEC1 are mainly missense variants clustering in the interaction domain
Truncating variants are not clearly established as pathogenic in the local summary`,
      concern:
        "This is technically convincing and appears de novo, but it is mechanistically weaker because the known disease mechanism is dominant-negative missense variation rather than haploinsufficiency.",
    },
    {
      id: "candidate-2",
      label: "Candidate 2",
      gene: "HAPLO4",
      variant: "chr11:77290144 G>A",
      zygosity: "Heterozygous",
      consequence: "frameshift_variant",
      inheritanceSignal: "Inherited from unaffected mother",
      clinicalFit:
        "HAPLO4 is associated with a dominant neurodevelopmental disorder where haploinsufficiency is reported. However, this variant is inherited from an unaffected mother and appears at a frequency that weakens a severe early-onset dominant explanation.",
      rawEvidence: `GENE: HAPLO4
Known disease association: autosomal dominant neurodevelopmental disorder
Reported inheritance: autosomal dominant
Known mechanism: haploinsufficiency / loss-of-function

Variant:
chr11:77290144 G>A
Transcript: NM_230002.4
HGVS: c.744del p.(Gly249Valfs*10)
Consequence: frameshift_variant
Predicted effect: premature termination codon
Predicted NMD: likely

VCF-style fields:
QUAL=690
FILTER=PASS
INFO: DP=46;MQ=60;QD=15.0;SOR=0.82
FORMAT: GT:AD:DP:GQ

Proband: 0/1:23,23:46:99
Mother: 0/1:22,21:43:99
Father: 0/0:39,0:39:99

Read-level notes:
ALT reads seen on both forward and reverse strands
ALT reads distributed across read positions
Indel represented consistently across local reads
No local low-complexity warning
No soft-clipping concern

Population:
gnomAD AF = 0.0007
gnomAD allele count = 180
Homozygotes observed in population summary = 0

Constraint:
LOEUF = 0.21
pLI = 0.96

ClinVar-style summary:
No exact matching pathogenic record found in local summary
Other de novo truncating variants in HAPLO4 have been submitted in affected individuals`,
      concern:
        "This is technically convincing and the consequence fits haploinsufficiency, but the inheritance from an unaffected parent and population frequency weaken it for this severe childhood-onset presentation.",
    },
    {
      id: "candidate-3",
      label: "Candidate 3",
      gene: "TONEP2",
      variant: "chr3:118442901 A>G",
      zygosity: "Heterozygous",
      consequence: "missense_variant",
      inheritanceSignal: "Apparent de novo, but technically uncertain",
      clinicalFit:
        "TONEP2 is associated with an autosomal dominant tone-abnormality neurodevelopmental disorder. Missense variants in one motor-like domain have been reported, but this call has weaker technical evidence.",
      rawEvidence: `GENE: TONEP2
Known disease association: autosomal dominant neurodevelopmental disorder with abnormal tone
Reported inheritance: autosomal dominant
Known mechanism: dominant-negative missense variants in motor-like domain

Variant:
chr3:118442901 A>G
Transcript: NM_230003.2
HGVS: c.1289A>G p.(Tyr430Cys)
Consequence: missense_variant
Protein domain: motor-like functional domain

VCF-style fields:
QUAL=49
FILTER=PASS
INFO: DP=30;MQ=42;QD=1.6;SOR=5.2
FORMAT: GT:AD:DP:GQ

Proband: 0/1:24,6:30:45
Mother: 0/0:37,0:37:99
Father: 0/0:35,0:35:99

Read-level notes:
ALT reads mostly on one strand
5 of 6 ALT reads occur close to read ends
Soft-clipping present in several supporting reads
Local repetitive sequence warning present
Second caller: not detected
Manual read-level review recommended before prioritisation

Population:
gnomAD AF = not observed
gnomAD allele count = 0

Constraint:
LOEUF = 0.62
pLI = 0.31

ClinVar-style summary:
No exact matching variant record found in local summary
Some nearby missense variants in the domain have been submitted in affected individuals`,
      concern:
        "This is mechanistically plausible, but the technical evidence is too fragile to prioritise confidently without read-level review.",
    },
    {
      id: "candidate-4",
      label: "Candidate 4",
      gene: "DNMEC2",
      variant: "chr7:88219044 T>C",
      zygosity: "Heterozygous",
      consequence: "missense_variant",
      inheritanceSignal: "Apparent de novo with good parental coverage",
      clinicalFit:
        "DNMEC2 is associated with an autosomal dominant neurodevelopmental disorder with severe speech delay, seizures, hypotonia, and abnormal muscle tone. The known mechanism is dominant-negative missense variation in a specific interaction domain.",
      rawEvidence: `GENE: DNMEC2
Known disease association: autosomal dominant neurodevelopmental disorder with abnormal tone and seizures
Reported inheritance: autosomal dominant
Known mechanism: dominant-negative missense variants in a protein interaction domain

Variant:
chr7:88219044 T>C
Transcript: NM_230004.5
HGVS: c.1406T>C p.(Leu469Pro)
Consequence: missense_variant
Protein domain: recurrent dominant-negative interaction domain
Mechanism note: variant lies in the domain where pathogenic dominant-negative missense variants cluster

VCF-style fields:
QUAL=918
FILTER=PASS
INFO: DP=54;MQ=60;QD=17.0;SOR=0.73
FORMAT: GT:AD:DP:GQ

Proband: 0/1:28,26:54:99
Mother: 0/0:45,0:45:99
Father: 0/0:43,0:43:99

Read-level notes:
ALT reads seen on both forward and reverse strands
ALT reads distributed across read positions
High mapping quality for supporting reads
No local low-complexity warning
No pseudogene or segmental duplication warning
No concerning soft-clipping around the variant
Second caller: detected

Population:
gnomAD AF = not observed
gnomAD allele count = 0

Constraint:
LOEUF = 0.78
pLI = 0.11
Missense constraint/domain note: local summary highlights missense constraint in the interaction domain

ClinVar-style summary:
No exact matching variant record found in local summary
Nearby missense variants in the same interaction domain have been submitted as pathogenic/likely pathogenic in affected individuals
Truncating variants are not the main disease mechanism in local summary`,
      concern:
        "This is the strongest current candidate because phenotype, de novo inheritance, missense consequence, dominant-negative mechanism, domain location, population absence, and technical evidence all align.",
    },
  ],

  decisionCheckpoints: [
    {
      id: "checkpoint-1",
      title: "Checkpoint 1 — High-impact consequence does not always match mechanism",
      context:
        "Candidate 1 is an apparent de novo stop-gained variant in DNMEC1. However, pathogenic variants in this gene are mainly dominant-negative missense variants in a specific interaction domain, and loss-of-function is not established.",
      question:
        "What is the safest interpretation of Candidate 1?",
      options: [
        {
          label: "A",
          text: "Prioritise it because stop-gained variants should always rank above missense variants in dominant rare disease.",
          isCorrect: false,
          feedback:
            "Not quite. Stop-gained variants are not automatically stronger if the known disease mechanism is dominant-negative missense variation.",
        },
        {
          label: "B",
          text: "Treat it as technically convincing and interesting, but mechanistically weaker because the consequence does not match the known dominant-negative mechanism.",
          isCorrect: true,
          feedback:
            "Correct. Candidate 1 needs mechanism caution. A de novo truncating variant is not automatically the best candidate in a dominant-negative gene.",
        },
        {
          label: "C",
          text: "Dismiss it as benign because truncating variants cannot contribute to dominant neurodevelopmental disease.",
          isCorrect: false,
          feedback:
            "Not quite. Truncating variants can be pathogenic in the right gene and mechanism, but this gene’s known mechanism is different.",
        },
      ],
      teachingPoint:
        "Variant consequence must be interpreted in the context of the gene-disease mechanism.",
    },
    {
      id: "checkpoint-2",
      title: "Checkpoint 2 — Haploinsufficiency logic",
      context:
        "Candidate 2 is a frameshift in a gene where haploinsufficiency is a reported mechanism. However, it is inherited from an unaffected mother and has gnomAD AF 0.0007.",
      question:
        "Why is Candidate 2 not the strongest current candidate?",
      options: [
        {
          label: "A",
          text: "Because frameshift variants cannot cause dominant disease even when haploinsufficiency is the mechanism.",
          isCorrect: false,
          feedback:
            "Not quite. Frameshift variants can cause dominant disease when haploinsufficiency is the mechanism.",
        },
        {
          label: "B",
          text: "Because the consequence and mechanism fit, but inheritance from an unaffected parent and population frequency weaken the explanation.",
          isCorrect: true,
          feedback:
            "Correct. Candidate 2 is not weak because of consequence. It is weakened by inheritance and population plausibility.",
        },
        {
          label: "C",
          text: "Because inherited variants are usually sequencing artefacts and should not be interpreted.",
          isCorrect: false,
          feedback:
            "Not quite. Inherited variants can be real. The issue is clinical plausibility.",
        },
      ],
      teachingPoint:
        "Even when consequence and mechanism fit, inheritance and population evidence still matter.",
    },
    {
      id: "checkpoint-3",
      title: "Checkpoint 3 — Mechanistically plausible but technically weak",
      context:
        "Candidate 3 is a de novo missense variant in a dominant-negative gene and lies in a plausible functional domain, but the raw data show AD 24,6, GQ 45, MQ 42, SOR 5.2, read-end clustering, soft-clipping, and no second-caller support.",
      question:
        "What is the safest interpretation of Candidate 3?",
      options: [
        {
          label: "A",
          text: "Prioritise it because mechanism fit is enough when the variant is absent from parental calls.",
          isCorrect: false,
          feedback:
            "Not quite. Mechanism fit does not override poor technical confidence.",
        },
        {
          label: "B",
          text: "Treat it as mechanistically interesting but technically fragile, so it should not be prioritised without read-level review.",
          isCorrect: true,
          feedback:
            "Correct. Candidate 3 needs technical caution before it can be treated as a serious candidate.",
        },
        {
          label: "C",
          text: "Dismiss it as definitely false because every low allele-balance call is an artefact.",
          isCorrect: false,
          feedback:
            "Not quite. It may not be false, but the current evidence is not strong enough for confident prioritisation.",
        },
      ],
      teachingPoint:
        "A candidate needs both biological plausibility and technical confidence.",
    },
    {
      id: "checkpoint-4",
      title: "Checkpoint 4 — Identify the strongest mechanism match",
      context:
        "Candidate 4 is an apparent de novo missense variant in a dominant-negative interaction domain of DNMEC2. The phenotype fits, population data support rarity, and technical evidence is strong.",
      question:
        "Why is Candidate 4 the strongest current candidate?",
      options: [
        {
          label: "A",
          text: "Because phenotype, de novo inheritance, missense consequence, dominant-negative mechanism, domain location, rarity, and technical evidence align best.",
          isCorrect: true,
          feedback:
            "Correct. Candidate 4 has the strongest convergence across clinical, mechanism, inheritance, population, and technical evidence.",
        },
        {
          label: "B",
          text: "Because missense variants are always stronger than truncating variants in dominant conditions.",
          isCorrect: false,
          feedback:
            "Not quite. Missense is stronger here because it matches this gene’s mechanism, not because missense is always stronger.",
        },
        {
          label: "C",
          text: "Because pLI is low, which proves this specific missense variant is pathogenic.",
          isCorrect: false,
          feedback:
            "Not quite. Gene-level constraint does not classify a variant by itself, and pLI is mainly a loss-of-function constraint metric.",
        },
      ],
      teachingPoint:
        "The strongest candidate is the one whose variant effect matches the established disease mechanism.",
    },
    {
      id: "checkpoint-5",
      title: "Checkpoint 5 — Safe service-style next step",
      context:
        "Candidate 4 is the strongest current candidate. Candidate 1 is de novo and technically strong but mechanism-mismatched. Candidate 2 has a fitting consequence but weak inheritance/population support. Candidate 3 is technically fragile.",
      question:
        "What is the safest next step?",
      options: [
        {
          label: "A",
          text: "Prioritise Candidate 1 because stop-gained variants should always outrank missense variants.",
          isCorrect: false,
          feedback:
            "Not quite. Candidate 1 is not the best mechanism match.",
        },
        {
          label: "B",
          text: "Prioritise Candidate 4 for review, document the mechanism mismatch for Candidate 1, and explain the inheritance/population and technical limitations for the others.",
          isCorrect: true,
          feedback:
            "Correct. This gives a safe and reviewable rationale without over-simplifying variant consequence.",
        },
        {
          label: "C",
          text: "Ignore disease mechanism and rank candidates only by consequence severity.",
          isCorrect: false,
          feedback:
            "Not quite. Consequence severity is not meaningful without gene-mechanism context.",
        },
      ],
      teachingPoint:
        "Safe interpretation-aware bioinformatics means matching the candidate to the disease mechanism, not just selecting the most severe-looking annotation.",
    },
  ],

  finalReflection:
    "A safe trainee-level conclusion would be that Candidate 4 is the strongest current candidate for further review because it is an apparent de novo missense variant in a phenotype-compatible gene where dominant-negative missense variation in the affected domain is the known disease mechanism. Candidate 1 is technically convincing and appears de novo, but it is a stop-gained variant in a gene where loss-of-function is not clearly established and pathogenic variants are mainly dominant-negative missense changes. Candidate 2 fits a haploinsufficiency mechanism but is weakened by inheritance from an unaffected parent and population frequency. Candidate 3 is mechanistically interesting but technically fragile. The safest next step is to prioritise Candidate 4, document the mechanism-based reasoning, and escalate through the appropriate review pathway.",
};