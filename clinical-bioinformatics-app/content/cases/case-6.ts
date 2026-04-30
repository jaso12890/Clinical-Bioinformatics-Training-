export const case6 = {
  id: "case-6",
  slug: "mechanism-mismatch-case",
  title: "Case 6: Mechanism mismatch case",
  level: "Beginner",
  summary:
    "A mechanism-focused rare disease case where the gene looks relevant, but the variant consequence does not always fit the known disease mechanism.",

  visualisationExampleId: null,

  assessmentFocus: [
    "Gene-disease mechanism reasoning",
    "Variant consequence interpretation",
    "Phenotype and gene fit",
    "Constraint interpretation",
    "Technical confidence versus clinical relevance",
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
        "Rank the findings from strongest to weakest based on phenotype fit, inheritance, variant consequence, known disease mechanism, functional domain evidence, technical confidence, and whether each finding should drive the case conclusion.",
      correctOrder: ["candidate-2", "candidate-1", "candidate-3"],
      explanation:
        "Candidate 2 is strongest because it is an apparent de novo missense variant in the relevant EPIK1 functional domain, and the reported disease mechanism is gain-of-function missense variation. Candidate 1 is weaker because although it is de novo, technically convincing, rare, and in the same phenotype-relevant gene, the stop-gained consequence does not match the established gain-of-function missense mechanism. Candidate 3 is weakest because it is inherited from an unaffected parent, has broader and less specific phenotype overlap, a more uncertain gene mechanism, and weaker overall case fit.",
    },

    escalationDecision: {
      prompt:
        "Choose the safest next action for the strongest finding in this case.",
      options: [
        {
          id: "report-candidate-1",
          label: "A",
          decision:
            "Treat Candidate 1 as the lead diagnostic finding because it is de novo, truncating, rare, technically clean, and in the epilepsy gene.",
          isBest: false,
          feedback:
            "Review this choice. Candidate 1 looks tempting, but the stop-gained consequence does not match the reported gain-of-function missense mechanism for this gene.",
        },
        {
          id: "hold-all-epik1",
          label: "B",
          decision:
            "Hold both EPIK1 findings because different variant consequences in the same gene make the mechanism too uncertain to review.",
          isBest: false,
          feedback:
            "Review this choice. Mechanism mismatch weakens Candidate 1, but Candidate 2 matches the reported missense gain-of-function mechanism and is strong enough for formal review.",
        },
        {
          id: "escalate-candidate-2",
          label: "C",
          decision:
            "Escalate Candidate 2 for formal review, documenting why Candidate 1 is mechanistically weaker despite looking technically strong.",
          isBest: true,
          feedback:
            "Best decision. Candidate 2 has the best convergence across phenotype, inheritance, consequence, functional domain, mechanism, rarity, and technical evidence.",
        },
      ],
    },

    writtenSummary: {
      prompt:
        "Write a short trainee-level handover summary explaining the strongest candidate, why mechanism matters in this case, why the other findings are weaker, and the safest next step.",
      checklist: [
        "Names Candidate 2 as the strongest current finding.",
        "Explains that Candidate 2 is an apparent de novo missense variant in EPIK1.",
        "Mentions the recurrent channel activation domain or functional domain relevance.",
        "Explains that the reported disease mechanism is gain-of-function missense variation.",
        "Explains why Candidate 1 is weaker despite being de novo, rare, truncating, and technically clean.",
        "Uses constraint information appropriately without overclaiming.",
        "Explains why Candidate 3 is lower priority because of inheritance, broad phenotype fit, and uncertain mechanism.",
        "Avoids treating Candidate 2 as a final diagnosis without formal review and sign-off.",
      ],
      modelAnswer:
        "Candidate 2 is the strongest current finding for formal review. It is an apparent de novo missense variant in EPIK1, a gene associated with autosomal dominant developmental and epileptic encephalopathy, and it lies in the recurrent channel activation domain where gain-of-function missense variants have been described. The child’s early-onset seizures, developmental delay, regression, and hypotonia are compatible with the reported disease association, and the raw evidence is technically reassuring. Candidate 1 is also de novo, rare, technically clean, and in the same relevant gene, but it is a stop-gained variant, while the local disease mechanism is described as gain-of-function missense variation rather than loss-of-function. The weak loss-of-function constraint also reduces support for a haploinsufficiency-style explanation. Candidate 3 is lower priority because it is inherited from an unaffected parent, has broader phenotype fit, and has a less certain mechanism. The safest next step is to document this mechanism-based reasoning and escalate Candidate 2 through the appropriate clinical laboratory review pathway rather than treating it as a final diagnosis.",
    },
  },

  reasoningScorecard: [
    {
      category: "Mechanism reasoning",
      maxScore: 2,
      expectation:
        "Recognises that a variant should be assessed against the known disease mechanism, not just the gene name or phenotype overlap.",
    },
    {
      category: "Consequence interpretation",
      maxScore: 2,
      expectation:
        "Distinguishes a mechanism-compatible missense variant from a technically convincing truncating variant that may not fit the reported mechanism.",
    },
    {
      category: "Constraint interpretation",
      maxScore: 2,
      expectation:
        "Uses LOEUF and pLI in relation to mechanism, recognising that weak loss-of-function constraint can weaken a haploinsufficiency argument.",
    },
    {
      category: "Candidate prioritisation",
      maxScore: 2,
      expectation:
        "Prioritises the candidate with the best convergence across phenotype, inheritance, consequence, domain evidence, mechanism, rarity, and technical confidence.",
    },
    {
      category: "Safe escalation",
      maxScore: 2,
      expectation:
        "Escalates the strongest mechanism-compatible candidate while clearly documenting why other apparently strong findings were deprioritised.",
    },
  ],

  patient: {
    age: 5,
    sex: "Female",
  },

  referralReason:
    "A 5-year-old girl has been referred for rare disease genome analysis because of early-onset seizures, developmental delay, hypotonia, and episodes of developmental regression.",

  testType: "Rare disease trio genome sequencing",

  familyStructure:
    "The proband and both biological parents have been tested. Both parents are reportedly unaffected.",

  history: [
    "Seizures beginning before age 2",
    "Global developmental delay",
    "Episodes of developmental regression after seizure clusters",
    "Hypotonia noted in infancy",
    "No known previous molecular diagnosis",
  ],

  phenotype: [
    "Early-onset seizures",
    "Global developmental delay",
    "Developmental regression",
    "Hypotonia",
  ],

  familyHistory:
    "Both parents are unaffected. No known family history of epilepsy, developmental delay, or regression.",

  serviceContext: [
    "The analysis is being performed in a rare disease service context.",
    "The phenotype suggests a possible neurodevelopmental epilepsy disorder.",
    "Several candidate variants are in genes that sound relevant, but the variant effect must match the known disease mechanism.",
    "Your task is to avoid prioritising a candidate only because the gene name or phenotype overlap looks convincing.",
  ],

  candidateFindings: [
    {
      id: "candidate-1",
      label: "Candidate 1",
      gene: "EPIK1",
      variant: "chr10:66781290 C>T",
      zygosity: "Heterozygous",
      consequence: "stop_gained",
      inheritanceSignal: "Apparent de novo",
      clinicalFit:
        "EPIK1 is associated with an autosomal dominant developmental and epileptic encephalopathy. The phenotype overlap is strong, but the reported disease mechanism is gain-of-function missense variation in a specific channel domain, not loss-of-function.",
      rawEvidence: `GENE: EPIK1
Known disease association: autosomal dominant developmental and epileptic encephalopathy
Reported inheritance: autosomal dominant
Known mechanism: gain-of-function missense variants in a recurrent channel domain
Loss-of-function evidence: not established as disease-causing in local summary

Variant:
chr10:66781290 C>T
Transcript: NM_500001.3
HGVS: c.901C>T p.(Arg301*)
Consequence: stop_gained
Predicted effect: premature termination codon

VCF-style fields:
QUAL=801
FILTER=PASS
INFO: DP=46;MQ=60;QD=17.4;SOR=0.79
FORMAT: GT:AD:DP:GQ

Proband: 0/1:24,22:46:99
Mother: 0/0:39,0:39:99
Father: 0/0:41,0:41:99

Read-level notes:
ALT reads seen on both forward and reverse strands
ALT reads distributed across read positions
No obvious local mapping warning
No soft-clipping concern
No low-complexity sequence flag

Population:
gnomAD AF = not observed
gnomAD allele count = 0

Constraint:
LOEUF = 0.92
pLI = 0.04

ClinVar-style summary:
No exact matching variant record found in local summary
Submitted pathogenic variants in EPIK1 are mainly recurrent missense variants in the channel activation domain
Truncating variants are not clearly established as the disease mechanism in available summary`,
      concern:
        "This variant is technically convincing and the gene fits the phenotype, but the consequence does not match the reported gain-of-function missense mechanism. It should not be treated as the top candidate purely because it is de novo and truncating.",
    },
    {
      id: "candidate-2",
      label: "Candidate 2",
      gene: "EPIK1",
      variant: "chr10:66784512 G>A",
      zygosity: "Heterozygous",
      consequence: "missense_variant",
      inheritanceSignal: "Apparent de novo",
      clinicalFit:
        "EPIK1 is associated with autosomal dominant developmental and epileptic encephalopathy. This missense variant lies in the reported recurrent functional domain where gain-of-function variants have been described.",
      rawEvidence: `GENE: EPIK1
Known disease association: autosomal dominant developmental and epileptic encephalopathy
Reported inheritance: autosomal dominant
Known mechanism: gain-of-function missense variants in a recurrent channel domain

Variant:
chr10:66784512 G>A
Transcript: NM_500001.3
HGVS: c.1259G>A p.(Gly420Asp)
Consequence: missense_variant
Protein domain: recurrent channel activation domain

VCF-style fields:
QUAL=733
FILTER=PASS
INFO: DP=44;MQ=60;QD=16.7;SOR=0.83
FORMAT: GT:AD:DP:GQ

Proband: 0/1:21,23:44:99
Mother: 0/0:37,0:37:99
Father: 0/0:38,0:38:99

Read-level notes:
ALT reads seen on both forward and reverse strands
ALT reads distributed across read positions
No local low-complexity warning
No pseudogene or segmental duplication warning
No concerning soft-clipping around the variant

Population:
gnomAD AF = not observed
gnomAD allele count = 0

Constraint:
LOEUF = 0.92
pLI = 0.04

ClinVar-style summary:
No exact matching variant record found in local summary
Nearby missense variants in the same functional domain have been submitted as pathogenic/likely pathogenic in affected individuals
Disease mechanism in local summary is gain-of-function missense change`,
      concern:
        "This is the strongest current candidate because the phenotype, de novo inheritance, missense consequence, functional domain, reported mechanism, rarity, and technical evidence all align better than Candidate 1.",
    },
    {
      id: "candidate-3",
      label: "Candidate 3",
      gene: "NDEV6",
      variant: "chr16:22801944 A>G",
      zygosity: "Heterozygous",
      consequence: "missense_variant",
      inheritanceSignal: "Inherited from unaffected mother",
      clinicalFit:
        "NDEV6 has a broad neurodevelopmental association, but the phenotype overlap is less specific and the variant is inherited from an unaffected parent.",
      rawEvidence: `GENE: NDEV6
Known disease association: broad neurodevelopmental disorder
Reported inheritance: autosomal dominant with variable expressivity reported
Known mechanism: uncertain; mixed missense and loss-of-function evidence in limited reports

Variant:
chr16:22801944 A>G
Transcript: NM_500002.1
HGVS: c.566A>G p.(Asn189Ser)
Consequence: missense_variant
Protein domain: outside known constrained functional region in local summary

VCF-style fields:
QUAL=488
FILTER=PASS
INFO: DP=42;MQ=60;QD=11.6;SOR=0.90
FORMAT: GT:AD:DP:GQ

Proband: 0/1:20,22:42:99
Mother: 0/1:19,21:40:99
Father: 0/0:36,0:36:99

Read-level notes:
ALT reads seen on both forward and reverse strands
ALT reads distributed across read positions
No obvious local mapping warning

Population:
gnomAD AF = 0.00007
gnomAD allele count = 18

Constraint:
LOEUF = 0.58
pLI = 0.42

ClinVar-style summary:
No exact matching variant record found in local summary
Gene-disease relationship has limited/moderate evidence in available summary`,
      concern:
        "This is technically plausible, but it is less compelling because it is inherited from an unaffected parent, phenotype fit is broad, population evidence is less strong, and the mechanism is uncertain.",
    },
  ],

  decisionCheckpoints: [
    {
      id: "checkpoint-1",
      title: "Checkpoint 1 — Do not stop at the gene name",
      context:
        "Candidate 1 is in EPIK1, which fits the epilepsy and developmental delay phenotype. It is also apparently de novo and technically clean. However, the known disease mechanism is gain-of-function missense variation in a recurrent channel domain.",
      question:
        "What is the main concern with Candidate 1?",
      options: [
        {
          label: "A",
          text: "The call is technically unreliable because a high-quality de novo stop-gained variant is unexpected in an epilepsy gene.",
          isCorrect: false,
          feedback:
            "Not quite. The technical evidence is strong. The concern is mechanism mismatch, not call quality.",
        },
        {
          label: "B",
          text: "The stop-gained consequence may not fit the reported gain-of-function missense disease mechanism.",
          isCorrect: true,
          feedback:
            "Correct. A de novo truncating variant can look tempting, but if the established disease mechanism is gain-of-function missense, loss-of-function may not be the right mechanism.",
        },
        {
          label: "C",
          text: "The gene should be ignored because phenotype overlap is not useful when a variant is absent from population data.",
          isCorrect: false,
          feedback:
            "Not quite. Phenotype overlap and rarity are useful, but they do not overcome a major mismatch between variant consequence and known mechanism.",
        },
      ],
      teachingPoint:
        "A relevant gene is not enough. The variant consequence must fit the gene-disease mechanism.",
    },
    {
      id: "checkpoint-2",
      title: "Checkpoint 2 — Compare consequence and mechanism",
      context:
        "Candidate 2 is also in EPIK1. It is an apparent de novo missense variant in the recurrent channel activation domain. The disease mechanism is reported as gain-of-function missense variation.",
      question:
        "Why is Candidate 2 stronger than Candidate 1?",
      options: [
        {
          label: "A",
          text: "Because missense variants are generally more clinically important than truncating variants in all neurodevelopmental genes.",
          isCorrect: false,
          feedback:
            "Not quite. Variant severity depends on gene mechanism. In some genes, loss-of-function is the relevant mechanism; in others, specific missense effects are more relevant.",
        },
        {
          label: "B",
          text: "Because Candidate 1 has FILTER=PASS, which means it should be treated as a lower-confidence clinical finding.",
          isCorrect: false,
          feedback:
            "Not quite. FILTER=PASS supports that the call passed filters. Candidate 1 is technically plausible, but mechanistically weaker.",
        },
        {
          label: "C",
          text: "Because Candidate 2 better matches the known gain-of-function missense mechanism and functional domain evidence.",
          isCorrect: true,
          feedback:
            "Correct. Candidate 2 aligns better with the reported mechanism: de novo missense variation in a relevant functional domain.",
        },
      ],
      teachingPoint:
        "The same gene can contain both strong-looking and weak-looking candidates depending on whether the variant effect matches the known disease mechanism.",
    },
    {
      id: "checkpoint-3",
      title: "Checkpoint 3 — Interpret constraint correctly",
      context:
        "EPIK1 has LOEUF=0.92 and pLI=0.04, suggesting it is not strongly constrained for loss-of-function. Yet the disease is associated with gain-of-function missense variants.",
      question:
        "How should this constraint information affect your reasoning?",
      options: [
        {
          label: "A",
          text: "It weakens the argument that a loss-of-function variant in this gene is the likely explanation.",
          isCorrect: true,
          feedback:
            "Correct. Weak loss-of-function constraint does not rule anything out alone, but it does weaken a haploinsufficiency-style argument for Candidate 1.",
        },
        {
          label: "B",
          text: "It proves that EPIK1 cannot cause disease through any variant mechanism in this patient.",
          isCorrect: false,
          feedback:
            "Not quite. Weak LoF constraint does not rule out gain-of-function missense disease.",
        },
        {
          label: "C",
          text: "It means Candidate 1 and Candidate 2 should be treated equally because they are in the same gene.",
          isCorrect: false,
          feedback:
            "Not quite. Candidate 2 matches the known missense gain-of-function mechanism better than Candidate 1.",
        },
      ],
      teachingPoint:
        "Constraint must be interpreted in relation to mechanism. Low pLI or high LOEUF can weaken a loss-of-function hypothesis but may not weaken a gain-of-function missense hypothesis.",
    },
    {
      id: "checkpoint-4",
      title: "Checkpoint 4 — Technical reality versus clinical relevance",
      context:
        "Candidate 3 is technically plausible, but it is inherited from an unaffected mother, has broad phenotype fit, and the gene-disease mechanism is uncertain.",
      question:
        "What does Candidate 3 illustrate?",
      options: [
        {
          label: "A",
          text: "Inherited variants should usually be removed from consideration because they are less reliable than de novo calls.",
          isCorrect: false,
          feedback:
            "Not quite. Inherited variants can be real and clinically relevant, but they must fit the disease model and family context.",
        },
        {
          label: "B",
          text: "A technically real variant can still be lower priority if inheritance, phenotype specificity, and mechanism are weak.",
          isCorrect: true,
          feedback:
            "Correct. Technical confidence tells you the call may be real; it does not automatically make it relevant to this case.",
        },
        {
          label: "C",
          text: "Any gene with a neurodevelopmental association should remain equal priority until final sign-off.",
          isCorrect: false,
          feedback:
            "Not quite. Specificity, evidence strength, inheritance, mechanism, and technical confidence all matter.",
        },
      ],
      teachingPoint:
        "Clinical prioritisation requires more than technical reality. A candidate must be plausible for this patient and disease model.",
    },
    {
      id: "checkpoint-5",
      title: "Checkpoint 5 — Safe service-style next step",
      context:
        "Candidate 2 is the best mechanism match. Candidate 1 is technically clean and de novo but has a mechanism mismatch. Candidate 3 is technically plausible but lower priority.",
      question:
        "What is the safest next step?",
      options: [
        {
          label: "A",
          text: "Prioritise Candidate 2 for review, document why Candidate 1 is mechanistically weaker, and explain why Candidate 3 is lower priority.",
          isCorrect: true,
          feedback:
            "Correct. This is a safe and reviewable trainee-level output. It prioritises the candidate with the best convergence and documents the limitations of the others.",
        },
        {
          label: "B",
          text: "Report Candidate 1 immediately because truncating variants should outrank missense variants when both are technically clean.",
          isCorrect: false,
          feedback:
            "Not quite. A stop-gained variant is not automatically the best candidate if the disease mechanism is gain-of-function missense.",
        },
        {
          label: "C",
          text: "Rank candidates mainly by technical quality because mechanism can be reviewed after a lead variant is selected.",
          isCorrect: false,
          feedback:
            "Not quite. Technical quality is essential, but clinical interpretation also requires inheritance, mechanism, phenotype, and population fit.",
        },
      ],
      teachingPoint:
        "Safe service-style reasoning means documenting not only what is prioritised, but why apparently strong alternatives are weaker.",
    },
  ],

  finalReflection:
    "A safe trainee-level conclusion would be that Candidate 2 is the strongest current candidate for further review because it is an apparent de novo missense variant in a functional domain of a gene where gain-of-function missense variation is the reported disease mechanism, and the phenotype and technical evidence are supportive. Candidate 1 is technically convincing and in the same relevant gene, but it is a stop-gained variant in a gene where loss-of-function is not the established mechanism and constraint does not strongly support haploinsufficiency. Candidate 3 appears technically real but is lower priority because it is inherited from an unaffected parent, has broader phenotype fit, and has uncertain mechanism. The safest next step is to document this mechanism-based reasoning and escalate Candidate 2 through the appropriate review pathway.",
};