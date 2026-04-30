export const case55 = {
  id: "case-55",
  slug: "phasing-uncertainty-case",
  title: "Case 55: Phasing uncertainty",
  level: "Advanced",
  summary:
    "A guided case focused on two variants in a recessive gene where the learner must recognise that phase cannot be confirmed from the available evidence.",

  visualisationExampleId: null,

  assessmentFocus: [
    "Phasing uncertainty",
    "Autosomal recessive interpretation",
    "Compound heterozygosity reasoning",
    "Inheritance evidence",
    "Candidate prioritisation",
    "Safe communication of limitations",
  ],

  guidedTutorMode: {
    type: "static-rule-based",
    description:
      "Uses built-in hints, checkpoint feedback, model answers, and self-check criteria to support safe case reasoning.",
  },

  phase5Assessment: {
    candidateRanking: {
      prompt:
        "Rank the findings from strongest to weakest based on phenotype fit, recessive mechanism, technical confidence, and whether the current evidence confirms or limits phase.",
      correctOrder: [
        "candidate-2",
        "candidate-5",
        "candidate-3",
        "candidate-4",
        "candidate-1",
      ],
      explanation:
        "Candidate 2 is strongest because two rare variants are present in a phenotype-compatible recessive gene with a plausible disease mechanism, but phase is unresolved. Candidate 5 is not a disease candidate, but it is central because it explains why the two variants cannot yet be assumed to be in trans. Candidate 3 is plausible but weaker because it is a missense finding in a less specific dominant gene. Candidate 4 is likely a real inherited CNV with weak dosage support. Candidate 1 is technically real but weak because of frequency, broad gene evidence, and poor phenotype specificity.",
    },

    escalationDecision: {
      prompt:
        "Choose the safest next action for the recessive candidate pair in this case.",
      options: [
        {
          id: "escalate-phasing-review",
          label: "A",
          decision:
            "Escalate Candidate 2 for formal review and request phasing or segregation evidence before treating the pair as diagnostic.",
          isBest: true,
          feedback:
            "Best decision. The pair is review-worthy, but the current evidence cannot confirm that the variants are in trans.",
        },
        {
          id: "report-compound-het",
          label: "B",
          decision:
            "Report Candidate 2 as diagnostic compound heterozygosity because two rare variants are present in the same recessive gene.",
          isBest: false,
          feedback:
            "Review this choice. Two variants in one recessive gene are not enough by themselves; phase must be confirmed or clearly limited.",
        },
        {
          id: "reject-pair",
          label: "C",
          decision:
            "Reject Candidate 2 because unresolved phase means the variants cannot be relevant to the case.",
          isBest: false,
          feedback:
            "Review this choice. Unresolved phase limits interpretation, but the pair can still be important enough to escalate.",
        },
      ],
    },

    writtenSummary: {
      prompt:
        "Write a short trainee-level handover summary explaining the recessive candidate pair, why it is review-worthy, and why phase uncertainty limits interpretation.",
      checklist: [
        "Names Candidate 2 as the strongest current finding.",
        "Explains that two rare variants are present in a phenotype-compatible recessive gene.",
        "Mentions that the gene mechanism is biallelic loss of function or damaging variation.",
        "States clearly that phase cannot be confirmed from the available evidence.",
        "Avoids calling the pair diagnostic compound heterozygosity without phasing support.",
        "Recommends segregation, parental testing, or another appropriate phasing approach if available.",
      ],
      modelAnswer:
        "Candidate 2 is the strongest current finding for formal review because the proband has two rare variants in PHASECAP2, a phenotype-compatible autosomal recessive neurodevelopmental-metabolic gene. One variant is a canonical splice donor and the other is a rare damaging missense candidate in a relevant domain, so the pair is biologically plausible if the variants are in trans. However, the current evidence does not confirm phase. The available family data cannot show whether the variants are on opposite alleles or on the same allele, so the pair should not be described as confirmed compound heterozygosity or diagnostic from the current evidence alone. Candidate 5 is the key limitation because it explains the unresolved phasing issue. Candidate 3 is less strong because it is a single dominant missense candidate with weaker evidence. Candidate 4 is a likely real CNV but has weak dosage and phenotype support, and Candidate 1 is broad, relatively frequent, and weakly matched. The safest next step is to escalate Candidate 2 for formal review and request segregation or phasing evidence if available.",
    },
  },

  reasoningScorecard: [
    {
      category: "Phasing awareness",
      maxScore: 2,
      expectation:
        "Recognises that two variants in a recessive gene cannot automatically be assumed to be in trans.",
    },
    {
      category: "Recessive model reasoning",
      maxScore: 2,
      expectation:
        "Assesses whether the gene, phenotype, mechanism, and variant consequences make a biallelic model plausible.",
    },
    {
      category: "Candidate prioritisation",
      maxScore: 2,
      expectation:
        "Prioritises the recessive candidate pair as review-worthy while preserving the phase limitation.",
    },
    {
      category: "Evidence interpretation",
      maxScore: 2,
      expectation:
        "Uses population evidence, consequence, gene validity, technical quality, and inheritance data without overclaiming.",
    },
    {
      category: "Safe communication",
      maxScore: 2,
      expectation:
        "Communicates the finding as a candidate pair requiring phasing or segregation review rather than confirmed diagnosis.",
    },
  ],

  patient: {
    age: 9,
    sex: "Female",
  },

  referralReason:
    "A 9-year-old girl has been referred for rare disease genome analysis because of developmental delay, epilepsy, hypotonia, episodic vomiting during illness, mild regression after metabolic stress, feeding difficulties, and mild dysmorphic features. Two rare variants have been identified in the same autosomal recessive gene, but the available data do not confirm whether they are on opposite alleles or the same allele.",

  testType:
    "Rare disease genome sequencing with SNV/indel, recessive candidate, phasing, segregation, and technical-confidence review",

  familyStructure:
    "The proband and mother have been tested. The father is unavailable for testing. The mother carries one of the PHASECAP2 variants, but the second variant cannot be phased because paternal data are unavailable and there is no read-backed phase across the two sites.",

  history: [
    "Developmental delay noted in early childhood",
    "Epilepsy beginning at age 4",
    "Generalised hypotonia",
    "Feeding difficulties in early childhood",
    "Episodic vomiting during intercurrent illness",
    "Mild regression after metabolic stress",
    "Mild dysmorphic features noted by clinical genetics",
    "No known previous molecular diagnosis",
    "Mother is reportedly unaffected",
    "Father is unavailable for testing",
    "Clinical team requested review of two variants in the same recessive gene",
  ],

  phenotype: [
    "Developmental delay",
    "Epilepsy",
    "Hypotonia",
    "Feeding difficulties",
    "Episodic vomiting during illness",
    "Regression after metabolic stress",
    "Mild dysmorphic features",
  ],

  familyHistory:
    "The mother is reportedly unaffected and carries one of the PHASECAP2 variants. The father is unavailable for testing. There is no documented family history of developmental delay, epilepsy, metabolic decompensation, hypotonia, feeding difficulties, or a similar neurodevelopmental-metabolic presentation.",

  serviceContext: [
    "This guided case focuses on phasing uncertainty.",
    "The key issue is that two variants in the same recessive gene are not automatically a confirmed biallelic explanation.",
    "The learner should not assume compound heterozygosity unless the variants are shown to be in trans or there is strong supporting evidence.",
    "The learner should also not dismiss the pair entirely, because the gene, phenotype, rarity, and consequences make it review-worthy.",
    "The safest conclusion should prioritise the pair for formal review while clearly stating that phase remains unresolved.",
    "The final handover should explain what additional segregation or phasing evidence would be useful.",
  ],

  candidateFindings: [
    {
      id: "candidate-1",
      label: "Candidate 1",
      gene: "BROADPHASE1",
      variant: "chr4:77190442 C>T",
      zygosity: "Heterozygous",
      consequence: "missense_variant",
      inheritanceSignal: "Inherited from unaffected mother",
      clinicalFit:
        "BROADPHASE1 has a broad neurodevelopmental association in limited reports, but the variant is inherited from the unaffected mother, present in population data, and does not explain the metabolic-stress features well.",
      rawEvidence: `GENE: BROADPHASE1
Known disease association: broad neurodevelopmental association in limited reports
Reported inheritance: autosomal dominant proposed
Known mechanism: uncertain
Gene-disease validity in local summary: limited

Variant:
chr4:77190442 C>T
Transcript: NM_550001.2
HGVS: c.899C>T p.(Pro300Leu)
Consequence: missense_variant
Protein domain: outside proposed recurrent functional region

VCF-style fields:
QUAL=688
FILTER=PASS
INFO: DP=46;MQ=60;QD=15.0;SOR=0.86
FORMAT: GT:AD:DP:GQ

Proband blood: 0/1:23,23:46:99
Mother blood: 0/1:22,21:43:99
Father: not available

Read-level notes:
ALT reads seen on both forward and reverse strands
ALT reads distributed across read positions
No local mapping warning
No concerning soft-clipping
Second caller: detected

Population:
gnomAD AF = 0.0013
gnomAD allele count = 360
One homozygote observed in local population summary

Phenotype fit:
Developmental delay: broad possible overlap
Epilepsy: limited overlap
Hypotonia: weak overlap
Episodic vomiting: not a core feature
Regression after metabolic stress: not a core feature
Feeding difficulties: not a core feature

Review question:
Assess whether this inherited, relatively frequent, broad-match variant should drive the case conclusion.`,
      concern:
        "This is technically real but weak. It should be reviewed and deprioritised rather than treated as the main explanation.",
    },
    {
      id: "candidate-2",
      label: "Candidate 2",
      gene: "PHASECAP2",
      variant: "c.744+1G>A and c.1286G>A p.(Arg429His)",
      zygosity: "Two heterozygous variants",
      consequence: "splice_donor_variant plus missense_variant",
      inheritanceSignal:
        "One variant inherited from mother; phase of the second variant cannot be confirmed",
      clinicalFit:
        "PHASECAP2 is associated with an autosomal recessive neurodevelopmental-metabolic disorder. The two variants are rare and biologically plausible as a pair, but the current data do not confirm whether they are in trans.",
      rawEvidence: `GENE: PHASECAP2
Known disease association: autosomal recessive neurodevelopmental-metabolic disorder
Reported inheritance: autosomal recessive
Known mechanism: biallelic loss-of-function or damaging variants in a functional domain
Gene-disease validity in local summary: moderate / established

Variant A:
chr8:44198221 G>A
Transcript: NM_550002.5
HGVS: c.744+1G>A
Consequence: splice_donor_variant
Splice position: canonical +1 donor site

Variant B:
chr8:44211890 G>A
Transcript: NM_550002.5
HGVS: c.1286G>A p.(Arg429His)
Consequence: missense_variant
Protein domain: conserved functional domain
Domain note: other disease-associated missense variants cluster in this region in local summary

VCF-style fields for Variant A:
QUAL=934
FILTER=PASS
INFO: DP=54;MQ=60;QD=17.3;SOR=0.74
FORMAT: GT:AD:DP:GQ

Proband blood Variant A: 0/1:27,27:54:99
Mother blood Variant A: 0/1:24,23:47:99
Father Variant A: not available

VCF-style fields for Variant B:
QUAL=882
FILTER=PASS
INFO: DP=52;MQ=60;QD=16.9;SOR=0.78
FORMAT: GT:AD:DP:GQ

Proband blood Variant B: 0/1:26,26:52:99
Mother blood Variant B: 0/0:45,0:45:99
Father Variant B: not available

Read-level notes:
Both variants have ALT reads on both forward and reverse strands
ALT reads are distributed across read positions
High base quality at both variant positions
High mapping quality for supporting reads
No local low-complexity warning
No pseudogene or segmental duplication warning
Second caller: detected for both variants

Phasing review:
Variant A is present in the mother
Variant B is absent from the mother
Father is unavailable
The two variants are too far apart for direct read-backed phasing in current short-read data
No linked-read or long-read phasing result available
No affected sibling or additional family segregation data available
Current evidence cannot prove whether the two variants are in trans or in cis

Population:
Variant A gnomAD AF = not observed
Variant A gnomAD allele count = 0
Variant B gnomAD AF = 0.000006
Variant B gnomAD allele count = 2
No homozygotes observed for either variant in local summary

Phenotype fit:
Developmental delay: compatible
Epilepsy: compatible
Hypotonia: compatible
Feeding difficulties: compatible
Episodic vomiting during illness: compatible
Regression after metabolic stress: compatible
Mild dysmorphic features: variable

Review question:
Assess whether this pair should be prioritised as a recessive candidate while clearly stating that phase is unresolved.`,
      concern:
        "This is the strongest current candidate pair, but it should not be called confirmed compound heterozygosity until phase is clarified.",
    },
    {
      id: "candidate-3",
      label: "Candidate 3",
      gene: "DOMPHASE3",
      variant: "chr10:55218401 G>A",
      zygosity: "Heterozygous",
      consequence: "missense_variant",
      inheritanceSignal: "Absent from tested mother; father unavailable",
      clinicalFit:
        "DOMPHASE3 has a possible autosomal dominant developmental epilepsy association. The variant is rare and technically plausible, but the gene evidence is less specific and the metabolic-stress features are not well explained.",
      rawEvidence: `GENE: DOMPHASE3
Known disease association: possible autosomal dominant developmental epilepsy disorder
Reported inheritance: usually de novo in limited reports
Known mechanism: damaging missense variants in a functional domain
Gene-disease validity in local summary: moderate / emerging

Variant:
chr10:55218401 G>A
Transcript: NM_550003.4
HGVS: c.1286G>A p.(Arg429His)
Consequence: missense_variant
Protein domain: possible epilepsy-associated functional domain

VCF-style fields:
QUAL=808
FILTER=PASS
INFO: DP=52;MQ=60;QD=15.5;SOR=0.80
FORMAT: GT:AD:DP:GQ

Proband blood: 0/1:26,26:52:99
Mother blood: 0/0:44,0:44:99
Father: not available

Read-level notes:
ALT reads seen on both forward and reverse strands
ALT reads distributed across read positions
High mapping quality
No local low-complexity warning
Second caller: detected

Population:
gnomAD AF = not observed
gnomAD allele count = 0

Phenotype fit:
Developmental delay: compatible
Epilepsy: compatible
Hypotonia: partial overlap
Feeding difficulties: weak overlap
Episodic vomiting: not a core feature
Metabolic stress regression: not a core feature

Review question:
Assess whether this rare missense finding should be prioritised above the recessive candidate pair with unresolved phase.`,
      concern:
        "This is plausible but less strong than Candidate 2 because the phenotype and mechanism fit are less complete.",
    },
    {
      id: "candidate-4",
      label: "Candidate 4",
      gene: "CNVPHASE4 region",
      variant: "chr16:29120000-29205000 duplication",
      zygosity: "Heterozygous duplication",
      consequence: "copy_number_gain",
      inheritanceSignal: "Inherited from unaffected mother",
      clinicalFit:
        "The duplication is likely real but inherited from the unaffected mother, overlaps population CNVs, and has no established triplosensitivity mechanism for this phenotype.",
      rawEvidence: `CNV REGION: chr16:29120000-29205000
CNV type: duplication
Estimated size: 85 kb
Copy-number state: heterozygous duplication

Gene:
CNVPHASE4
Known disease association: possible developmental association in limited reports
Known mechanism: uncertain
Triplosensitivity evidence: not established

Inheritance:
Proband: duplication present
Mother: duplication present
Father: not available

CNV caller summary:
Caller 1: duplication PASS
Caller 2: duplication supported
Quality score: 106
Number of affected targets/windows: 25

Read-depth evidence:
Expected normalised depth in diploid regions: ~1.00
Proband normalised depth across interval: ~1.47
Mother normalised depth across interval: ~1.48
Flanking regions: mostly normal

Breakpoint evidence:
Split reads: absent
Paired-end support: imprecise
Breakpoint not resolved

Population:
Overlapping duplications observed in local population CNV summary
Partial benign overlap reported

Phenotype fit:
Developmental delay: broad possible overlap
Epilepsy: weak overlap
Hypotonia: weak overlap
Metabolic stress regression: not a core feature
Episodic vomiting: not a core feature

Review question:
Assess whether this inherited copy-number gain has enough dosage, phenotype, and population support to be prioritised.`,
      concern:
        "This is likely technically real but weak because the dosage mechanism is uncertain, population overlap is present, and it is inherited from the unaffected mother.",
    },
    {
      id: "candidate-5",
      label: "Candidate 5",
      gene: "Phasing limitation review",
      variant: "Phase of the PHASECAP2 variants cannot be confirmed",
      zygosity: "Case-level limitation",
      consequence: "phasing_uncertainty",
      inheritanceSignal:
        "Cannot prove whether the two PHASECAP2 variants are in trans",
      clinicalFit:
        "This is not a separate disease candidate. It is the central case limitation affecting whether Candidate 2 can be treated as a confirmed biallelic explanation.",
      rawEvidence: `CASE CONTEXT LIMITATION: phasing uncertainty
Reason for review:
The proband has two rare heterozygous variants in PHASECAP2, an autosomal recessive gene.

Available inheritance information:
Variant A is present in the mother
Variant B is absent from the mother
Father is unavailable
No affected sibling data available
No additional family segregation data available

Direct phasing information:
The two variants are too far apart for short-read-backed phasing
No long-read phasing result available
No linked-read phasing result available
No RNA or allele-specific expression result available

Possible interpretations:
The variants could be in trans, which would support a biallelic recessive model.
The variants could be in cis, which would leave only one affected allele.
The current data cannot distinguish these possibilities.

Impact on wording:
Do not call the finding confirmed compound heterozygosity.
Do not call it diagnostic from phase-limited evidence alone.
Do describe it as a strong recessive candidate pair requiring phasing or segregation review.

Review question:
Assess how unresolved phase should shape candidate ranking, escalation, and handover wording.`,
      concern:
        "This is the central limitation. It should be explicitly documented so the final conclusion does not overstate the recessive model.",
    },
  ],

  decisionCheckpoints: [
    {
      id: "checkpoint-1",
      title: "Checkpoint 1 — Identify the strongest candidate pair",
      context:
        "Candidate 2 includes two rare variants in a phenotype-compatible autosomal recessive gene, but phase cannot be confirmed from the current data.",
      question:
        "Which finding should be prioritised for formal review?",
      options: [
        {
          label: "A",
          text: "Candidate 3, because a rare dominant missense variant avoids the uncertainty caused by unresolved phase.",
          isCorrect: false,
          feedback:
            "Not quite. Candidate 3 is plausible, but Candidate 2 has stronger phenotype and recessive mechanism support.",
        },
        {
          label: "B",
          text: "Candidate 4, because a real CNV is easier to interpret than two variants with uncertain phase.",
          isCorrect: false,
          feedback:
            "Not quite. Candidate 4 has weak dosage, inheritance, population, and phenotype support.",
        },
        {
          label: "C",
          text: "Candidate 2, because the two-variant recessive model is plausible, but phase must remain a clear limitation.",
          isCorrect: true,
          feedback:
            "Correct. Candidate 2 is strongest, but it should not be overcalled as confirmed compound heterozygosity.",
        },
      ],
      teachingPoint:
        "A recessive candidate pair can be the leading finding while still being limited by unresolved phase.",
    },
    {
      id: "checkpoint-2",
      title: "Checkpoint 2 — Avoid assuming compound heterozygosity",
      context:
        "Variant A is inherited from the mother. Variant B is absent from the mother, but the father is unavailable and there is no direct read-backed phase.",
      question:
        "What is the safest interpretation of the phase?",
      options: [
        {
          label: "A",
          text: "The variants are confirmed in trans because one is maternal and the other is not found in the mother.",
          isCorrect: false,
          feedback:
            "Not quite. The father is unavailable, and the current data do not directly prove the variants are on opposite alleles.",
        },
        {
          label: "B",
          text: "Phase is unresolved, so the pair is review-worthy but not confirmed compound heterozygosity.",
          isCorrect: true,
          feedback:
            "Correct. This preserves the candidate while avoiding overstatement.",
        },
        {
          label: "C",
          text: "The variants are confirmed in cis because the father was not tested and no direct phasing reads are available.",
          isCorrect: false,
          feedback:
            "Not quite. Lack of phasing does not prove cis; it means the phase is unresolved.",
        },
      ],
      teachingPoint:
        "Two variants in one recessive gene require phase evidence before being called confirmed compound heterozygosity.",
    },
    {
      id: "checkpoint-3",
      title: "Checkpoint 3 — Decide what evidence would help",
      context:
        "The current short-read data cannot phase the PHASECAP2 variants, and the father is unavailable.",
      question:
        "Which follow-up would most directly help clarify the recessive model?",
      options: [
        {
          label: "A",
          text: "Segregation or phasing evidence, such as paternal testing if available, long-read phasing, or another validated phasing approach.",
          isCorrect: true,
          feedback:
            "Correct. The main unresolved question is whether the variants are in trans.",
        },
        {
          label: "B",
          text: "A population frequency check only, because rarity is enough to determine whether two variants are in trans.",
          isCorrect: false,
          feedback:
            "Not quite. Population evidence supports plausibility, but it does not determine phase.",
        },
        {
          label: "C",
          text: "A repeat phenotype review only, because clinical similarity can confirm that two variants are on opposite alleles.",
          isCorrect: false,
          feedback:
            "Not quite. Phenotype fit matters, but it cannot prove phase.",
        },
      ],
      teachingPoint:
        "The right follow-up depends on the limitation: here, the missing piece is phasing or segregation evidence.",
    },
    {
      id: "checkpoint-4",
      title: "Checkpoint 4 — Communicate the limitation proportionately",
      context:
        "The final handover needs to explain why Candidate 2 is important without overstating what the evidence proves.",
      question:
        "Which wording is safest?",
      options: [
        {
          label: "A",
          text: "Candidate 2 is diagnostic because the phenotype and recessive gene match are strong enough to overcome phase uncertainty.",
          isCorrect: false,
          feedback:
            "Not quite. Phenotype fit does not remove the need to resolve or acknowledge phase.",
        },
        {
          label: "B",
          text: "Candidate 2 should be ignored because unresolved phase means no useful conclusion can be drawn.",
          isCorrect: false,
          feedback:
            "Not quite. The pair is still important enough to review and potentially follow up.",
        },
        {
          label: "C",
          text: "Candidate 2 is a strong recessive candidate pair, but phase is unresolved and needs formal review before diagnostic wording.",
          isCorrect: true,
          feedback:
            "Correct. This wording is clear, balanced, and safe.",
        },
      ],
      teachingPoint:
        "Good handover separates candidate plausibility from what has been formally demonstrated.",
    },
    {
      id: "checkpoint-5",
      title: "Checkpoint 5 — Final phasing conclusion",
      context:
        "You need to prepare a safe trainee-level conclusion for formal clinical laboratory review.",
      question:
        "Which conclusion is safest?",
      options: [
        {
          label: "A",
          text: "Report Candidate 2 as confirmed compound heterozygosity because two rare variants are present in a compatible recessive gene.",
          isCorrect: false,
          feedback:
            "Not quite. Two variants in one recessive gene are not enough without phase or equivalent evidence.",
        },
        {
          label: "B",
          text: "Prioritise Candidate 2 for review, state that phase is unresolved, and recommend segregation or phasing evidence if available.",
          isCorrect: true,
          feedback:
            "Correct. This conclusion prioritises the best finding while preserving the main limitation.",
        },
        {
          label: "C",
          text: "Avoid prioritising Candidate 2 because unresolved phase always makes recessive findings unsuitable for review.",
          isCorrect: false,
          feedback:
            "Not quite. Unresolved phase limits interpretation, but it does not make the candidate irrelevant.",
        },
      ],
      teachingPoint:
        "Safe recessive interpretation requires both candidate recognition and phase-aware caution.",
    },
  ],

  finalReflection:
    "A safe trainee-level conclusion would be that Candidate 2 is the strongest current finding for formal clinical laboratory review, but it should not be called confirmed compound heterozygosity from the current evidence alone. The proband has two rare heterozygous variants in PHASECAP2, a phenotype-compatible autosomal recessive neurodevelopmental-metabolic gene. One variant is a canonical splice donor inherited from the mother, and the second is a rare missense variant absent from the mother and located in a relevant functional domain. The phenotype, gene mechanism, rarity, and technical quality make the pair review-worthy. However, the father is unavailable, the two variants are too far apart for direct short-read phasing, and no long-read, linked-read, RNA, or additional segregation evidence is available. Therefore, the current data cannot prove whether the variants are in trans or in cis. Candidate 5 is not a disease candidate but is the central limitation. Candidate 3 is plausible but weaker because it is a single dominant missense finding with less complete phenotype fit. Candidate 4 is likely a real CNV but has weak dosage and phenotype support, and Candidate 1 is broad, inherited, relatively frequent, and poorly specific. The safest next step is to prioritise Candidate 2 for formal review and request segregation or phasing evidence if available, while avoiding diagnostic wording until the phase question is resolved.",
};