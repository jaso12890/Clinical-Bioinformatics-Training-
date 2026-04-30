export const case52 = {
  id: "case-52",
  slug: "parental-mosaicism-case",
  title: "Case 52: Parental mosaicism",
  level: "Advanced",
  summary:
    "A guided case focused on recognising low-level parental mosaicism and communicating how it changes inheritance confidence and recurrence-risk discussion.",

  visualisationExampleId: null,

  assessmentFocus: [
    "Parental mosaicism",
    "Low allele fraction interpretation",
    "Inheritance reasoning",
    "Recurrence-risk communication",
    "Technical confidence",
    "Safe escalation and handover",
  ],

  guidedTutorMode: {
    type: "static-rule-based",
    description:
      "Uses built-in hints, checkpoint feedback, model answers, and self-check criteria to support safe case reasoning.",
  },

  phase5Assessment: {
    candidateRanking: {
      prompt:
        "Rank the findings from strongest to weakest based on phenotype fit, inheritance evidence, technical confidence, and whether each finding should drive the final case handover.",
      correctOrder: [
        "candidate-3",
        "candidate-5",
        "candidate-2",
        "candidate-4",
        "candidate-1",
      ],
      explanation:
        "Candidate 3 is strongest because the proband has a convincing heterozygous variant in a phenotype-compatible gene, while the father has a low-level signal that is technically supported and consistent with parental mosaicism. Candidate 5 is not a disease variant, but it is highly important because it explains how the parental mosaic signal affects inheritance wording and recurrence-risk discussion. Candidate 2 is plausible but less strong because it is uncertain and less well matched. Candidate 4 is a likely real CNV but has weak dosage and inheritance support. Candidate 1 is technically real but weak because of frequency, inheritance, and poor phenotype specificity.",
    },

    escalationDecision: {
      prompt:
        "Choose the safest next action for the main inheritance issue in this case.",
      options: [
        {
          id: "ignore-parental-signal",
          label: "A",
          decision:
            "Treat the variant as fully de novo because the father's low-level signal is below normal heterozygous balance.",
          isBest: false,
          feedback:
            "Review this choice. A low-level parental signal should not be ignored if read-level support, repeat evidence, and tissue/sample context make mosaicism plausible.",
        },
        {
          id: "escalate-parental-mosaicism",
          label: "B",
          decision:
            "Escalate Candidate 3 for formal review and document that paternal mosaicism affects inheritance and recurrence-risk wording.",
          isBest: true,
          feedback:
            "Best decision. The proband finding remains highly relevant, but the father's low-level signal means it should not be communicated as a straightforward de novo result.",
        },
        {
          id: "reject-main-candidate",
          label: "C",
          decision:
            "Reject the candidate because any parental signal means the variant cannot explain the child’s rare disease presentation.",
          isBest: false,
          feedback:
            "Review this choice. Parental mosaicism can still be compatible with an affected child and may be highly relevant to recurrence-risk discussion.",
        },
      ],
    },

    writtenSummary: {
      prompt:
        "Write a short trainee-level handover summary explaining the main candidate, the parental mosaicism evidence, and how this changes inheritance wording.",
      checklist: [
        "Names Candidate 3 as the strongest current finding.",
        "Explains that the proband has a convincing heterozygous variant.",
        "Mentions the low-level paternal signal and why it suggests possible parental mosaicism.",
        "Avoids calling the finding simply de novo.",
        "Explains that recurrence-risk discussion may be affected.",
        "States that formal confirmation and clinical laboratory review are required.",
      ],
      modelAnswer:
        "Candidate 3 is the strongest current finding for formal review. The proband has a convincing heterozygous variant in a phenotype-compatible neurodevelopmental epilepsy gene, with strong technical support and population absence. The key inheritance issue is that the father has a reproducible low-level alternate signal rather than a clean reference result. This means the finding should not be described as a straightforward confirmed de novo variant from the available evidence. The safer wording is that the proband carries the variant and the paternal result raises concern for low-level parental mosaicism. This matters because parental mosaicism can affect recurrence-risk discussion and family counselling. Candidate 2 is less strong because the evidence is uncertain and the phenotype fit is weaker. Candidate 4 is a lower-priority CNV with limited dosage support, and Candidate 1 is weak because of inheritance, frequency, and broad phenotype fit. The safest next step is formal review of Candidate 3, confirmation of the paternal low-level signal if appropriate, and careful handover of the inheritance limitation.",
    },
  },

  reasoningScorecard: [
    {
      category: "Parental mosaicism awareness",
      maxScore: 2,
      expectation:
        "Recognises that a low-level parental signal can alter interpretation even when the proband has a convincing heterozygous variant.",
    },
    {
      category: "Inheritance reasoning",
      maxScore: 2,
      expectation:
        "Avoids describing the finding as straightforward de novo when a parent has reproducible low-level alternate support.",
    },
    {
      category: "Technical confidence",
      maxScore: 2,
      expectation:
        "Uses allele fraction, read quality, repeat support, parent depth, contamination review, and sample identity before trusting the parental signal.",
    },
    {
      category: "Candidate prioritisation",
      maxScore: 2,
      expectation:
        "Prioritises the candidate with the best convergence across phenotype, gene mechanism, rarity, proband quality, and inheritance context.",
    },
    {
      category: "Safe communication",
      maxScore: 2,
      expectation:
        "Explains that parental mosaicism may affect recurrence-risk discussion and should be escalated for formal review.",
    },
  ],

  patient: {
    age: 4,
    sex: "Male",
  },

  referralReason:
    "A 4-year-old boy has been referred for rare disease trio genome sequencing because of global developmental delay, severe speech delay, early-onset epilepsy, hypotonia, feeding difficulties, and mild dysmorphic features. Automated inheritance filtering initially highlighted a strong parent-negative candidate. However, detailed read review shows a low-level alternate signal in the father, raising concern for parental mosaicism.",

  testType:
    "Rare disease trio genome sequencing with low-level parental allele review and inheritance interpretation",

  familyStructure:
    "The proband and both biological parents have been tested using blood-derived DNA. Both parents are reportedly unaffected. The father has a low-level alternate signal for the main candidate variant on repeat review, while the mother is reference with good coverage.",

  history: [
    "Global developmental delay noted in infancy",
    "Severe expressive speech delay",
    "Epilepsy beginning at age 18 months",
    "Generalised hypotonia",
    "Feeding difficulties in early childhood",
    "Mild dysmorphic facial features",
    "No known previous molecular diagnosis",
    "Both parents are reportedly unaffected",
    "Initial automated filtering suggested a possible de novo candidate",
    "Manual review identified a low-level paternal signal at the same site",
  ],

  phenotype: [
    "Global developmental delay",
    "Severe speech delay",
    "Early-onset epilepsy",
    "Hypotonia",
    "Feeding difficulties",
    "Mild dysmorphic features",
  ],

  familyHistory:
    "Both parents are reportedly unaffected. There is no known family history of developmental delay, epilepsy, severe speech delay, hypotonia, feeding difficulties, dysmorphic features, or a similar neurodevelopmental presentation. The father has no known seizures or developmental history, but low-level mosaicism remains possible from the sequencing data.",

  serviceContext: [
    "This guided case focuses on parental mosaicism.",
    "The key issue is that a variant can look de novo on standard genotype calls but show low-level parental alternate reads on deeper review.",
    "The learner should not ignore a reproducible low-level parental signal just because it is below typical heterozygous balance.",
    "The learner should also not assume every low-level parental read is real; technical quality, repeat evidence, contamination, and sample identity matter.",
    "The safest conclusion should prioritise the child’s strong candidate while documenting that the inheritance pattern is not a simple confirmed de novo result.",
    "The final handover should explain why the parental mosaicism question matters for recurrence-risk discussion and family counselling.",
  ],

  candidateFindings: [
    {
      id: "candidate-1",
      label: "Candidate 1",
      gene: "BROADNDD1",
      variant: "chr2:77190442 C>T",
      zygosity: "Heterozygous",
      consequence: "missense_variant",
      inheritanceSignal: "Inherited from unaffected mother",
      clinicalFit:
        "BROADNDD1 has a broad neurodevelopmental association, but the variant is inherited from the unaffected mother, present in population data, and only weakly matches the epilepsy-led presentation.",
      rawEvidence: `GENE: BROADNDD1
Known disease association: broad neurodevelopmental association in limited reports
Reported inheritance: autosomal dominant proposed
Known mechanism: uncertain
Gene-disease validity in local summary: limited

Variant:
chr2:77190442 C>T
Transcript: NM_520001.2
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
Father blood: 0/0:41,0:41:99

Read-level notes:
ALT reads seen on both forward and reverse strands
ALT reads distributed across read positions
No local mapping warning
No concerning soft-clipping
Second caller: detected

Population:
gnomAD AF = 0.0011
gnomAD allele count = 310
One homozygote observed in local population summary

Phenotype fit:
Developmental delay: broad possible overlap
Severe speech delay: broad possible overlap
Epilepsy: limited overlap
Hypotonia: weak overlap
Feeding difficulties: not a core feature
Dysmorphic features: not a core feature

Review question:
Assess whether an inherited, relatively frequent variant in a limited-evidence broad neurodevelopmental gene should drive the case conclusion.`,
      concern:
        "This is technically real but weak. It should be reviewed and deprioritised rather than treated as the main explanation.",
    },
    {
      id: "candidate-2",
      label: "Candidate 2",
      gene: "EPILEPMISS2",
      variant: "chr10:55218401 G>A",
      zygosity: "Heterozygous",
      consequence: "missense_variant",
      inheritanceSignal: "Absent from both parents on standard genotype calls",
      clinicalFit:
        "EPILEPMISS2 has a possible developmental epilepsy association. The variant is rare and technically plausible, but the gene evidence is moderate, the exact variant is unreported, and the phenotype match is incomplete.",
      rawEvidence: `GENE: EPILEPMISS2
Known disease association: possible autosomal dominant developmental epilepsy disorder
Reported inheritance: usually de novo in limited reports
Known mechanism: damaging missense variants in a functional domain
Gene-disease validity in local summary: moderate / emerging

Variant:
chr10:55218401 G>A
Transcript: NM_520002.4
HGVS: c.1286G>A p.(Arg429His)
Consequence: missense_variant
Protein domain: possible epilepsy-associated functional domain

VCF-style fields:
QUAL=812
FILTER=PASS
INFO: DP=52;MQ=60;QD=15.6;SOR=0.78
FORMAT: GT:AD:DP:GQ

Proband blood: 0/1:26,26:52:99
Mother blood: 0/0:44,0:44:99
Father blood: 0/0:46,0:46:99

Read-level notes:
ALT reads seen on both forward and reverse strands
ALT reads distributed across read positions
High mapping quality
No local low-complexity warning
Second caller: detected

Population:
gnomAD AF = not observed
gnomAD allele count = 0

ClinVar-style summary:
No exact matching pathogenic record found in local summary
Nearby variants include VUS and likely pathogenic submissions in limited numbers

Phenotype fit:
Developmental delay: compatible
Severe speech delay: compatible
Epilepsy: compatible
Hypotonia: partial overlap
Feeding difficulties: not a core feature
Dysmorphic features: not a core feature

Review question:
Assess whether this rare missense finding should be prioritised above a separate candidate with stronger gene, mechanism, phenotype, and parental mosaicism evidence.`,
      concern:
        "This is plausible but less strong than the main parental-mosaicism candidate. It may be review-worthy but should not dominate the handover.",
    },
    {
      id: "candidate-3",
      label: "Candidate 3",
      gene: "PARENTMOSAIC3",
      variant: "chr7:118902440 G>A",
      zygosity: "Heterozygous in proband; low-level signal in father",
      consequence: "splice_donor_variant",
      inheritanceSignal:
        "Proband heterozygous; father has reproducible low-level alternate support",
      clinicalFit:
        "PARENTMOSAIC3 is associated with an autosomal dominant neurodevelopmental epilepsy disorder. The proband has a rare canonical splice donor variant with strong technical support and close phenotype fit. The father has a low-level signal, raising concern for paternal mosaicism rather than a simple de novo result.",
      rawEvidence: `GENE: PARENTMOSAIC3
Known disease association: autosomal dominant neurodevelopmental epilepsy syndrome
Reported inheritance: often de novo; parental mosaicism has been reported in local teaching summary
Known mechanism: haploinsufficiency / loss-of-function
Gene-disease validity in local summary: established

Variant:
chr7:118902440 G>A
Transcript: NM_520003.5
HGVS: c.744+1G>A
Consequence: splice_donor_variant
Splice position: canonical +1 donor site
Transcript note: affects clinically preferred transcript in local summary

VCF-style fields:
QUAL=964
FILTER=PASS
INFO: DP=58;MQ=60;QD=16.6;SOR=0.72
FORMAT: GT:AD:DP:GQ

Proband blood: 0/1:29,29:58:99
Mother blood: 0/0:48,0:48:99
Father blood standard genotype: 0/0:83,5:88:99
Estimated father blood VAF: 5.7%

Father repeat blood review:
0/0 low-level ALT signal:91,6:97:99
Estimated repeat VAF: 6.2%

Read-level notes in proband:
ALT reads seen on both forward and reverse strands
ALT reads distributed across read positions
High base quality at variant position
High mapping quality for ALT-supporting reads
No local low-complexity warning
No pseudogene or segmental duplication warning
Second caller: detected

Read-level notes in father:
Low-level ALT reads seen on both forward and reverse strands
ALT reads not limited to read ends
No local mapping warning
Low-level signal reproduced in repeat blood sample
Second low-level review flag: supported
Paternal signal remains below normal heterozygous balance

Sample identity / contamination review:
Trio relatedness checks are consistent
No sample swap warning
No broad paternal contamination pattern in proband
No broad mixed-profile warning in father
Low-level paternal signal appears focused at the candidate site

Population:
gnomAD AF = not observed
gnomAD allele count = 0

ClinVar-style summary:
No exact matching variant record found in local summary
Other canonical splice and truncating variants in PARENTMOSAIC3 have been submitted as pathogenic/likely pathogenic in affected individuals

Phenotype fit:
Developmental delay: strong match
Severe speech delay: strong match
Early-onset epilepsy: strong match
Hypotonia: compatible
Feeding difficulties: compatible
Mild dysmorphic features: compatible

Review question:
Assess whether this finding should be handled as a strong proband candidate with an important paternal mosaicism caveat, rather than a straightforward de novo result.`,
      concern:
        "This is the strongest current candidate. It should be prioritised for formal review, but the father’s low-level signal must be documented because it changes inheritance wording.",
    },
    {
      id: "candidate-4",
      label: "Candidate 4",
      gene: "CNVPARENT4 region",
      variant: "chr16:29120000-29205000 duplication",
      zygosity: "Heterozygous duplication",
      consequence: "copy_number_gain",
      inheritanceSignal: "Inherited from unaffected father",
      clinicalFit:
        "The duplication is likely real but is inherited from the father, overlaps population CNVs, and has no established triplosensitivity mechanism for the child’s phenotype.",
      rawEvidence: `CNV REGION: chr16:29120000-29205000
CNV type: duplication
Estimated size: 85 kb
Copy-number state: heterozygous duplication

Gene:
CNVPARENT4
Known disease association: possible developmental association in limited reports
Known mechanism: uncertain
Triplosensitivity evidence: not established

Inheritance:
Proband: duplication present
Mother: duplication not detected
Father: duplication present

CNV caller summary:
Caller 1: duplication PASS
Caller 2: duplication supported
Quality score: 104
Number of affected targets/windows: 25

Read-depth evidence:
Expected normalised depth in diploid regions: ~1.00
Proband normalised depth across interval: ~1.47
Father normalised depth across interval: ~1.48
Mother normalised depth across interval: ~1.00
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
Feeding difficulties: not a core feature
Dysmorphic features: not a core feature

Review question:
Assess whether this inherited copy-number gain has enough dosage, phenotype, and population support to be prioritised.`,
      concern:
        "This is likely technically real but weak because the dosage mechanism is uncertain, it overlaps population CNVs, and it is inherited from an unaffected father.",
    },
    {
      id: "candidate-5",
      label: "Candidate 5",
      gene: "Parental mosaicism review",
      variant: "Low-level paternal alternate signal at Candidate 3 site",
      zygosity: "Technical inheritance review",
      consequence: "parental_mosaicism_review_flag",
      inheritanceSignal: "Paternal mosaicism cannot be excluded",
      clinicalFit:
        "This is not a separate disease candidate. It is the key inheritance-context finding that affects how Candidate 3 should be communicated and escalated.",
      rawEvidence: `TECHNICAL REVIEW: low-level paternal signal at Candidate 3 site
Reason for review:
The proband has a strong heterozygous splice donor variant in PARENTMOSAIC3.
The father is called reference by standard genotype output but has low-level alternate reads.

Father original blood:
Reference reads: 83
Alternate reads: 5
Total depth: 88
Estimated alternate fraction: 5.7%

Father repeat blood:
Reference reads: 91
Alternate reads: 6
Total depth: 97
Estimated alternate fraction: 6.2%

Evidence supporting review:
Low-level ALT reads are present in two paternal blood reviews
ALT reads are seen on both strands
ALT reads are not restricted to read ends
Local mapping quality is good
No sample swap warning
No broad mixed-sample warning
Proband has a full heterozygous signal at the same site

Evidence that remains limited:
Paternal mosaic fraction estimate is approximate
Only blood-derived paternal DNA has been reviewed so far
No paternal sperm or second tissue result is available
Clinical recurrence-risk interpretation requires formal review

Impact on interpretation:
Candidate 3 should not be communicated as a simple confirmed de novo result from the available data.
The paternal low-level signal should be escalated as a possible parental mosaicism finding.

Review question:
Assess how this low-level parental signal changes inheritance wording, escalation, and recurrence-risk communication.`,
      concern:
        "This is the central inheritance issue. It should be documented clearly because it affects whether Candidate 3 can be described as de novo and may influence recurrence-risk discussion.",
    },
  ],

  decisionCheckpoints: [
    {
      id: "checkpoint-1",
      title: "Checkpoint 1 — Identify the main candidate",
      context:
        "Candidate 3 has strong proband evidence and close phenotype fit, but the father has a reproducible low-level alternate signal at the same site.",
      question:
        "Which finding should drive the main case handover?",
      options: [
        {
          label: "A",
          text: "Candidate 2, because a clean parent-negative rare missense variant is easier to explain than a candidate with parental mosaicism.",
          isCorrect: false,
          feedback:
            "Not quite. Candidate 2 is plausible, but Candidate 3 has stronger gene, consequence, phenotype, and mechanism support.",
        },
        {
          label: "B",
          text: "Candidate 4, because an inherited CNV can explain recurrence risk more directly than a low-level parental signal.",
          isCorrect: false,
          feedback:
            "Not quite. Candidate 4 has weaker dosage, phenotype, and population support than the main SNV finding.",
        },
        {
          label: "C",
          text: "Candidate 3, because the proband variant is strong and the paternal low-level signal is central to inheritance interpretation.",
          isCorrect: true,
          feedback:
            "Correct. Candidate 3 is the main finding, but it must be communicated with the parental mosaicism caveat.",
        },
      ],
      teachingPoint:
        "A low-level parental signal can change inheritance wording without removing the proband variant from review.",
    },
    {
      id: "checkpoint-2",
      title: "Checkpoint 2 — Avoid overcalling de novo status",
      context:
        "The father is called reference by standard genotype output but has repeated low-level alternate reads at the Candidate 3 site.",
      question:
        "How should the inheritance be worded?",
      options: [
        {
          label: "A",
          text: "Describe Candidate 3 as present in the proband with possible low-level paternal mosaicism, rather than as straightforward de novo.",
          isCorrect: true,
          feedback:
            "Correct. The low-level paternal signal means the case needs careful inheritance wording.",
        },
        {
          label: "B",
          text: "Describe Candidate 3 as confirmed de novo, because the father is not a normal heterozygous carrier.",
          isCorrect: false,
          feedback:
            "Not quite. A parent does not need to be a full heterozygous carrier for parental mosaicism to matter.",
        },
        {
          label: "C",
          text: "Describe Candidate 3 as benign inheritance, because any paternal signal means the variant cannot be clinically relevant.",
          isCorrect: false,
          feedback:
            "Not quite. Parental mosaicism can be compatible with an affected child and a clinically relevant variant.",
        },
      ],
      teachingPoint:
        "Parental mosaicism sits between clean de novo inheritance and ordinary inherited heterozygosity.",
    },
    {
      id: "checkpoint-3",
      title: "Checkpoint 3 — Judge the paternal low-level signal",
      context:
        "The paternal signal is low level but reproducible, appears on both strands, is not read-end clustered, and is not explained by a broad contamination warning.",
      question:
        "What does this technical pattern support?",
      options: [
        {
          label: "A",
          text: "It proves the father is a full heterozygous carrier, because any alternate reads in a parent should override the genotype call.",
          isCorrect: false,
          feedback:
            "Not quite. The signal is far below typical heterozygous balance, so full heterozygosity is not the right interpretation.",
        },
        {
          label: "B",
          text: "It supports possible paternal mosaicism, while still requiring formal confirmation and clinical laboratory review.",
          isCorrect: true,
          feedback:
            "Correct. The signal is not enough for casual interpretation, but it is strong enough to affect the handover.",
        },
        {
          label: "C",
          text: "It proves contamination, because low-level parental signals are usually artefacts unless seen at normal balance.",
          isCorrect: false,
          feedback:
            "Not quite. Contamination is considered, but the repeated focused signal and clean identity checks make mosaicism a concern.",
        },
      ],
      teachingPoint:
        "Low-level parental mosaicism needs technical review, not automatic dismissal or automatic overcalling.",
    },
    {
      id: "checkpoint-4",
      title: "Checkpoint 4 — Understand recurrence-risk relevance",
      context:
        "If a parent is mosaic for a child’s variant, recurrence-risk discussion may differ from a simple de novo interpretation.",
      question:
        "Why does the paternal mosaicism question matter?",
      options: [
        {
          label: "A",
          text: "It means the child’s phenotype must be unrelated to the variant, because the father is reportedly unaffected.",
          isCorrect: false,
          feedback:
            "Not quite. A mosaic parent can be unaffected or mildly affected depending on tissue distribution and mosaic fraction.",
        },
        {
          label: "B",
          text: "It means no recurrence-risk discussion is needed, because mosaic findings are too uncertain to mention.",
          isCorrect: false,
          feedback:
            "Not quite. Uncertainty should be communicated, but the finding may be important for family counselling.",
        },
        {
          label: "C",
          text: "It may change recurrence-risk counselling because the variant may not be a one-off event confined to the proband.",
          isCorrect: true,
          feedback:
            "Correct. Parental mosaicism can affect recurrence-risk discussion and should be escalated appropriately.",
        },
      ],
      teachingPoint:
        "Inheritance interpretation is not only about explaining the proband; it also affects family communication and follow-up.",
    },
    {
      id: "checkpoint-5",
      title: "Checkpoint 5 — Final parental mosaicism conclusion",
      context:
        "The case needs a safe trainee-level handover for formal review.",
      question:
        "Which conclusion is safest?",
      options: [
        {
          label: "A",
          text: "Prioritise Candidate 3 for formal review, document possible paternal mosaicism, and avoid simple de novo wording.",
          isCorrect: true,
          feedback:
            "Correct. This conclusion identifies the key finding while preserving the inheritance limitation.",
        },
        {
          label: "B",
          text: "Prioritise Candidate 3 as confirmed de novo, because the father’s signal is below standard heterozygous balance.",
          isCorrect: false,
          feedback:
            "Not quite. Low-level parental support means simple de novo wording would be unsafe.",
        },
        {
          label: "C",
          text: "Reject Candidate 3, because a low-level paternal signal means the variant cannot be relevant to the child.",
          isCorrect: false,
          feedback:
            "Not quite. Parental mosaicism can still be compatible with a strong proband finding.",
        },
      ],
      teachingPoint:
        "Safe handover can prioritise the proband finding while clearly explaining the parental mosaicism caveat.",
    },
  ],

  finalReflection:
    "A safe trainee-level conclusion would be that Candidate 3 is the strongest current finding for formal clinical laboratory review. The proband has a convincing heterozygous canonical splice donor variant in PARENTMOSAIC3, an established neurodevelopmental epilepsy gene, with strong phenotype fit, population absence, appropriate mechanism, and good technical support. However, the finding should not be described as a straightforward confirmed de novo variant because the father has a reproducible low-level alternate signal at the same site. The paternal signal is below normal heterozygous balance but is seen across repeat review, has supportive read-level features, and is not explained by a broad sample identity or contamination warning. This raises concern for possible paternal mosaicism and should be documented because it may affect inheritance wording and recurrence-risk discussion. Candidate 5 is not a separate disease candidate, but it is the key technical inheritance review. Candidate 2 is plausible but less strong than Candidate 3 because its gene and phenotype evidence are weaker. Candidate 4 is likely a real CNV but has weak dosage and phenotype support. Candidate 1 is inherited, relatively frequent, and poorly specific. The safest next step is to prioritise Candidate 3 for formal review, escalate the paternal mosaicism question, and avoid overconfident de novo or recurrence-risk statements until reviewed through the appropriate clinical laboratory pathway.",
};