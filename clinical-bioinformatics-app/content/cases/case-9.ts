export const case9 = {
  id: "case-9",
  slug: "cnv-introductory-case",
  title: "Case 9: CNV introductory case",
  level: "Beginner",
  summary:
    "An introductory CNV case focused on recognising deletion/duplication evidence, gene dosage, inheritance, phenotype fit, and why CNV calls need review.",

  visualisationExampleId: null,

  assessmentFocus: [
    "Introductory CNV interpretation",
    "Read-depth and caller support",
    "Deletion versus duplication reasoning",
    "Gene dosage and dosage sensitivity",
    "Inheritance and phenotype fit",
    "Safe CNV escalation and trainee-level handover",
  ],

  guidedTutorMode: {
    type: "static-rule-based",
    description:
      "Uses built-in hints, checkpoint feedback, model answers, and self-check criteria to support safe case reasoning.",
  },

  phase5Assessment: {
    candidateRanking: {
      prompt:
        "Rank the CNV findings from strongest to weakest based on read-depth evidence, caller support, CNV size, gene dosage, inheritance, population overlap, phenotype fit, and whether each finding should drive the case conclusion.",
      correctOrder: ["candidate-3", "candidate-2", "candidate-1"],
      explanation:
        "Candidate 3 is strongest because it is a sizeable apparent de novo deletion with consistent one-copy-loss read-depth evidence, support from more than one caller, dosage-sensitive gene content, no common benign full-size overlap, and strong phenotype fit. Candidate 2 is weaker because it appears technically plausible as a duplication, but it is inherited from an unaffected mother and triplosensitivity for the duplicated region is not established. Candidate 1 is weakest because it is small, low-confidence, supported by few windows, not supported by a second caller, lies in a difficult pseudogene/segmental duplication region, and has population overlap.",
    },

    escalationDecision: {
      prompt:
        "Choose the safest next action for the strongest CNV finding in this case.",
      options: [
        {
          id: "report-candidate-3-now",
          label: "A",
          decision:
            "Treat Candidate 3 as diagnostic immediately because it is larger than 1 Mb and appears de novo in a phenotype-compatible region.",
          isBest: false,
          feedback:
            "Review this choice. Candidate 3 is the strongest CNV, but CNV calls still require plot/read-depth review, gene-content and dosage review, inheritance confirmation, and appropriate sign-off.",
        },
        {
          id: "escalate-candidate-3",
          label: "B",
          decision:
            "Escalate Candidate 3 for CNV review, documenting the read-depth support, dosage-sensitive gene content, de novo pattern, phenotype fit, and need for local confirmation/sign-off.",
          isBest: true,
          feedback:
            "Best decision. Candidate 3 has the strongest technical and clinical convergence, while still requiring structured CNV review and formal laboratory escalation.",
        },
        {
          id: "escalate-candidate-2",
          label: "C",
          decision:
            "Escalate Candidate 2 as the lead finding because it has two-caller support and a clearer duplication signal than the small deletion.",
          isBest: false,
          feedback:
            "Review this choice. Candidate 2 is technically plausible, but inherited status from an unaffected parent and uncertain triplosensitivity make it weaker than the apparent de novo dosage-sensitive deletion.",
        },
      ],
    },

    writtenSummary: {
      prompt:
        "Write a short trainee-level handover summary explaining the strongest CNV candidate, the evidence supporting it, why the other CNVs are weaker, and the safest next step.",
      checklist: [
        "Names Candidate 3 as the strongest current CNV finding.",
        "Explains that Candidate 3 is an apparent de novo heterozygous deletion.",
        "Mentions the consistent read-depth reduction and support from more than one CNV caller.",
        "Mentions relevant dosage-sensitive genes or dosage-sensitive region content.",
        "Links the deleted region to developmental delay, speech delay, congenital heart defect, feeding difficulties, and dysmorphic features.",
        "Explains why Candidate 1 is weaker because of low confidence, few windows, difficult mapping, and population overlap.",
        "Explains why Candidate 2 is weaker because the duplication is inherited and triplosensitivity is not established.",
        "Mentions that CNV plot/read-depth review and local confirmation/escalation may be required.",
        "Avoids calling Candidate 3 a final diagnosis without formal review and sign-off.",
      ],
      modelAnswer:
        "Candidate 3 is the strongest current CNV finding for formal review. It is a 1.175 Mb apparent de novo heterozygous deletion involving dosage-sensitive genes, with consistent read-depth reduction to around 0.49 in the proband, near-normal parental depth, support from more than one caller, reduced heterozygosity across the interval, and no common full-size benign overlap in the local summary. The deleted region fits the child’s developmental delay, speech delay, congenital heart defect, feeding difficulties, and dysmorphic features. Candidate 1 is weaker because it is a small low-confidence deletion supported by few windows, not detected by a second caller, located in a difficult pseudogene/segmental duplication region, and has population overlap. Candidate 2 appears technically plausible as a duplication, but it is inherited from an unaffected mother and there is no established triplosensitivity for the duplicated region. The safest next step is to prioritise Candidate 3 for CNV plot/read-depth review, gene dosage review, inheritance confirmation, and appropriate clinical laboratory escalation rather than treating it as a final diagnosis.",
    },
  },

  reasoningScorecard: [
    {
      category: "CNV technical confidence",
      maxScore: 2,
      expectation:
        "Uses read-depth pattern, number of affected windows, caller support, breakpoint evidence, B-allele pattern, and mappability to assess CNV reliability.",
    },
    {
      category: "Dosage interpretation",
      maxScore: 2,
      expectation:
        "Distinguishes deletion and duplication interpretation, including the difference between haploinsufficiency and triplosensitivity.",
    },
    {
      category: "Inheritance and population evidence",
      maxScore: 2,
      expectation:
        "Uses de novo status, inherited status, population SV overlap, and benign overlap evidence to judge clinical plausibility.",
    },
    {
      category: "Candidate prioritisation",
      maxScore: 2,
      expectation:
        "Prioritises the CNV with the best convergence across technical evidence, dosage-sensitive gene content, inheritance, phenotype fit, and population evidence.",
    },
    {
      category: "Safe escalation",
      maxScore: 2,
      expectation:
        "Escalates the strongest CNV for formal review while documenting technical limitations and dosage uncertainty in weaker CNVs.",
    },
  ],

  patient: {
    age: 6,
    sex: "Female",
  },

  referralReason:
    "A 6-year-old girl has been referred for rare disease genome analysis because of developmental delay, speech delay, congenital heart defect, feeding difficulties, and mild dysmorphic features.",

  testType: "Rare disease genome sequencing with CNV calling",

  familyStructure:
    "The proband and both biological parents have been tested. Both parents are reportedly unaffected.",

  history: [
    "Global developmental delay noted from early childhood",
    "Significant speech delay",
    "Congenital heart defect repaired in infancy",
    "Feeding difficulties in early childhood",
    "Mild dysmorphic features noted by clinical genetics",
    "No known previous molecular diagnosis",
  ],

  phenotype: [
    "Global developmental delay",
    "Speech delay",
    "Congenital heart defect",
    "Feeding difficulties",
    "Mild dysmorphic features",
  ],

  familyHistory:
    "Both parents are reportedly unaffected. No known family history of congenital heart disease, developmental delay, or a similar syndromic presentation.",

  serviceContext: [
    "The analysis is being performed in a rare disease service context.",
    "The filtering workflow has returned candidate copy-number findings as well as sequence variants.",
    "Your task is to decide whether the CNV evidence is technically convincing and clinically plausible.",
    "CNV calls from sequencing data usually require careful review of read-depth evidence, genomic coordinates, gene content, inheritance, and possible confirmation depending on local practice.",
  ],

  candidateFindings: [
    {
      id: "candidate-1",
      label: "Candidate 1",
      gene: "PSEUDX3 region",
      variant: "chr7:55220010-55262040 deletion",
      zygosity: "Heterozygous deletion",
      consequence: "copy_number_loss",
      inheritanceSignal: "Not detected in parents, but technically uncertain",
      clinicalFit:
        "The interval contains a gene with limited disease evidence and overlaps a region with pseudogene/segmental duplication complexity.",
      rawEvidence: `CNV REGION: chr7:55220010-55262040
CNV type: deletion
Estimated size: 42 kb
Copy-number state: possible one-copy loss

Key genes in interval:
PSEUDX3 — limited/uncertain disease association
Partial overlap with pseudogene-like sequence

Known disease association:
No well-established syndrome in local summary
Gene-disease evidence limited

Inheritance:
Proband: deletion called
Mother: no deletion called
Father: no deletion called
Inheritance signal: possible de novo, but confidence limited

CNV caller summary:
Caller 1: deletion LOW_CONFIDENCE
Caller 2: not called
Quality score: 28
Number of targets/windows affected: 4

Read-depth evidence:
Expected normalised depth in diploid regions: ~1.00
Proband normalised depth across interval: ~0.72
Mother normalised depth across interval: ~0.96
Father normalised depth across interval: ~1.03

Split-read / breakpoint evidence:
Breakpoint support: absent
Split reads: none
Paired-end support: not convincing

B-allele / SNP pattern:
Too few informative SNPs across interval
No clear one-copy-loss SNP pattern

Population:
DGV/gnomAD-SV summary: overlapping deletions seen in population summary
Known benign overlap: partial benign CNV overlap reported

Technical notes:
Low number of affected windows
Segmental duplication / pseudogene warning present
Mappability reduced across part of interval
Manual CNV plot review recommended before any prioritisation`,
      concern:
        "This should be treated cautiously. The call is small, low-confidence, supported by few windows, not supported by a second caller, and lies in a difficult genomic region with population overlap.",
    },
    {
      id: "candidate-2",
      label: "Candidate 2",
      gene: "NEURODUP5 region",
      variant: "chr3:120441000-121050000 duplication",
      zygosity: "Heterozygous duplication",
      consequence: "copy_number_gain",
      inheritanceSignal: "Inherited from unaffected mother",
      clinicalFit:
        "The duplicated region contains a neurodevelopmental candidate gene, but the dosage sensitivity for duplication is uncertain and the CNV is inherited from an unaffected parent.",
      rawEvidence: `CNV REGION: chr3:120441000-121050000
CNV type: duplication
Estimated size: 609 kb
Copy-number state: three-copy gain / heterozygous duplication

Key genes in interval:
NEURODUP5 — possible neurodevelopmental association
Two additional protein-coding genes
No established triplosensitivity in local summary

Known disease association:
Haploinsufficiency evidence limited
Triplosensitivity evidence not established

Inheritance:
Proband: duplication present
Mother: duplication present
Father: duplication not detected
Inheritance signal: maternally inherited

CNV caller summary:
Caller 1: duplication PASS
Caller 2: duplication supported
Quality score: 132
Number of targets/windows affected: 76

Read-depth evidence:
Expected normalised depth in diploid regions: ~1.00
Proband normalised depth across interval: ~1.48
Mother normalised depth across interval: ~1.46
Father normalised depth across interval: ~1.01

Split-read / breakpoint evidence:
Breakpoint support: limited
Paired-end support: present but imprecise

B-allele / SNP pattern:
B-allele pattern compatible with duplication in proband and mother

Population:
DGV/gnomAD-SV summary: overlapping duplications observed at low frequency
Known benign overlap: partial overlap with reported likely benign duplications

Technical notes:
Read-depth evidence is technically plausible
Inheritance from unaffected mother reduces priority for a severe de novo syndrome
Dosage sensitivity for duplication is uncertain`,
      concern:
        "This appears technically plausible as a duplication, but the clinical relevance is uncertain because it is inherited from an unaffected mother and triplosensitivity is not established.",
    },
    {
      id: "candidate-3",
      label: "Candidate 3",
      gene: "Region including CARDX1 and DEVREG2",
      variant: "chr16:29120000-30295000 deletion",
      zygosity: "Heterozygous deletion",
      consequence: "copy_number_loss",
      inheritanceSignal: "Apparent de novo",
      clinicalFit:
        "The deleted interval overlaps a known dosage-sensitive region associated with developmental delay, congenital heart defects, feeding difficulties, speech delay, and dysmorphic features.",
      rawEvidence: `CNV REGION: chr16:29120000-30295000
CNV type: deletion
Estimated size: 1.175 Mb
Copy-number state: one-copy loss / heterozygous deletion

Key genes in interval:
CARDX1 — dosage sensitive; haploinsufficiency reported
DEVREG2 — neurodevelopmental dosage-sensitive gene
Several additional protein-coding genes in interval

Known disease association:
Recurrent microdeletion syndrome involving developmental delay, speech delay, congenital heart defects, feeding difficulties, and dysmorphic features

Inheritance:
Proband: deletion present
Mother: deletion not detected
Father: deletion not detected
Inheritance signal: apparent de novo

CNV caller summary:
Caller 1: deletion PASS
Caller 2: deletion supported
Quality score: 184
Number of targets/windows affected: 143

Read-depth evidence:
Expected normalised depth in diploid regions: ~1.00
Proband normalised depth across interval: ~0.49
Mother normalised depth across interval: ~0.98
Father normalised depth across interval: ~1.02

Split-read / breakpoint evidence:
Breakpoint support: partial
Split reads: limited but consistent with deletion boundary
Paired-end support: present around predicted breakpoints

B-allele / SNP pattern:
Reduced heterozygosity across deleted interval in proband
Parental SNP pattern consistent with one-copy loss

Population:
DGV/gnomAD-SV summary: no common overlapping deletion of similar size in unaffected population summary
Known benign overlap: no full-size benign overlap identified in local summary

Technical notes:
Interval has good mappability overall
Not primarily low-complexity
No major segmental duplication warning across most of interval
Manual CNV plot review recommended
Orthogonal confirmation may be required depending on local pathway`,
      concern:
        "This is the strongest current candidate because the CNV size, read-depth evidence, apparent de novo inheritance, dosage-sensitive gene content, and phenotype fit are all supportive. It still requires CNV plot review and appropriate confirmation/escalation according to local practice.",
    },
  ],

  decisionCheckpoints: [
    {
      id: "checkpoint-1",
      title: "Checkpoint 1 — Low-confidence small deletion",
      context:
        "Candidate 1 is a 42 kb deletion supported by only 4 windows. One caller marks it LOW_CONFIDENCE, the second caller does not call it, normalised depth is around 0.72, breakpoint support is absent, and the region has pseudogene/segmental duplication warnings.",
      question:
        "What is the safest interpretation of Candidate 1?",
      options: [
        {
          label: "A",
          text: "Prioritise it because an apparently de novo CNV can be important even when the interval is small.",
          isCorrect: false,
          feedback:
            "Not quite. Apparent de novo status is not enough when the CNV call itself is technically fragile.",
        },
        {
          label: "B",
          text: "Treat it cautiously because the technical support is weak and the region is difficult to map.",
          isCorrect: true,
          feedback:
            "Correct. Candidate 1 has multiple technical caution flags and should not be over-prioritised without review.",
        },
        {
          label: "C",
          text: "Classify it as benign purely because small CNVs do not usually affect clinically relevant genes.",
          isCorrect: false,
          feedback:
            "Not quite. Small CNVs can matter, but this one is weak because of low confidence, poor support, difficult mapping context, and population overlap.",
        },
      ],
      teachingPoint:
        "Small CNVs in difficult regions need careful review. The number of affected windows, caller support, mappability, and population overlap all matter.",
    },
    {
      id: "checkpoint-2",
      title: "Checkpoint 2 — Duplication and triplosensitivity",
      context:
        "Candidate 2 is a technically plausible duplication inherited from an unaffected mother. The region contains a possible neurodevelopmental gene, but triplosensitivity is not established.",
      question:
        "What is the main limitation of Candidate 2?",
      options: [
        {
          label: "A",
          text: "The duplication may be technically real, but copy-number gain is not an established disease mechanism for this region and it is inherited.",
          isCorrect: true,
          feedback:
            "Correct. A technically real duplication still needs dosage sensitivity, inheritance, population, and phenotype evidence to support clinical relevance.",
        },
        {
          label: "B",
          text: "The duplication is more convincing than a deletion because extra copy number usually has a clearer effect than one-copy loss.",
          isCorrect: false,
          feedback:
            "Not quite. Duplications and deletions both require gene-specific dosage interpretation. Triplosensitivity is not the same as haploinsufficiency.",
        },
        {
          label: "C",
          text: "The duplication is likely an artefact because inherited CNVs from unaffected parents should not be technically trusted.",
          isCorrect: false,
          feedback:
            "Not quite. Inherited CNVs can be real and sometimes clinically relevant, but inheritance from an unaffected parent can reduce priority depending on the disease model.",
        },
      ],
      teachingPoint:
        "For duplications, ask whether extra copy number is a known disease mechanism. Haploinsufficiency evidence does not automatically mean triplosensitivity.",
    },
    {
      id: "checkpoint-3",
      title: "Checkpoint 3 — Recognise strong CNV evidence",
      context:
        "Candidate 3 is a 1.175 Mb heterozygous deletion. The proband has normalised depth around 0.49 across the interval, both parents are close to 1.0, two callers support the deletion, and the region contains dosage-sensitive genes.",
      question:
        "Why is Candidate 3 technically and clinically stronger than the other CNVs?",
      options: [
        {
          label: "A",
          text: "Because any deletion above 1 Mb should be treated as pathogenic before gene content is reviewed.",
          isCorrect: false,
          feedback:
            "Not quite. Size matters, but CNV interpretation also depends on gene content, inheritance, dosage sensitivity, population evidence, phenotype fit, and technical confidence.",
        },
        {
          label: "B",
          text: "Because the deletion has consistent read-depth evidence, two-caller support, apparent de novo inheritance, dosage-sensitive gene content, and phenotype overlap.",
          isCorrect: true,
          feedback:
            "Correct. Candidate 3 has convergence across technical CNV evidence and clinical plausibility.",
        },
        {
          label: "C",
          text: "Because the CNV caller says PASS, so read-depth and gene-content review are no longer needed.",
          isCorrect: false,
          feedback:
            "Not quite. CNV calls need review. A PASS label does not replace read-depth, gene content, inheritance, and review evidence.",
        },
      ],
      teachingPoint:
        "A strong CNV candidate is supported by both technical evidence and biological/clinical plausibility.",
    },
    {
      id: "checkpoint-4",
      title: "Checkpoint 4 — What needs review before escalation?",
      context:
        "Candidate 3 is the strongest CNV candidate, but it is still a CNV call from sequencing data.",
      question:
        "What review steps are most appropriate before treating Candidate 3 as a reportable candidate?",
      options: [
        {
          label: "A",
          text: "Report the finding immediately because size and apparent de novo status are enough for CNV interpretation.",
          isCorrect: false,
          feedback:
            "Not quite. Size alone is not enough. CNV calls require review, documentation, and appropriate sign-off.",
        },
        {
          label: "B",
          text: "Ignore the finding because sequence-level variants are generally more reliable than CNVs from genome data.",
          isCorrect: false,
          feedback:
            "Not quite. CNVs can be clinically important. They just require appropriate technical and clinical review.",
        },
        {
          label: "C",
          text: "Review the CNV plot/read-depth evidence, gene content, dosage sensitivity, inheritance, population overlap, and local confirmation requirements.",
          isCorrect: true,
          feedback:
            "Correct. CNV interpretation requires both technical review and clinical/dosage review before reporting decisions.",
        },
      ],
      teachingPoint:
        "CNV calls should be reviewed as structured evidence: technical confidence, gene dosage, inheritance, population overlap, and phenotype fit.",
    },
    {
      id: "checkpoint-5",
      title: "Checkpoint 5 — Safe service-style next step",
      context:
        "Candidate 3 is a strong apparent de novo deletion in a phenotype-compatible dosage-sensitive region. Candidate 1 is technically fragile. Candidate 2 is technically plausible but inherited and has uncertain triplosensitivity.",
      question:
        "What is the safest next step?",
      options: [
        {
          label: "A",
          text: "Prioritise Candidate 1 because difficult genomic regions are more likely to hide clinically relevant missed diagnoses.",
          isCorrect: false,
          feedback:
            "Not quite. Difficult regions require caution. They do not automatically make a weak CNV more plausible.",
        },
        {
          label: "B",
          text: "Prioritise Candidate 3 for CNV review and escalation, while documenting Candidate 1 technical concerns and Candidate 2 dosage uncertainty.",
          isCorrect: true,
          feedback:
            "Correct. This is a safe trainee-level output because it prioritises the strongest CNV while making the limitations of the other CNVs visible.",
        },
        {
          label: "C",
          text: "Prioritise Candidate 2 because inherited duplications are easier to interpret than apparent de novo deletions.",
          isCorrect: false,
          feedback:
            "Not quite. Inherited duplications are not automatically benign or reportable. They require careful dosage and inheritance interpretation.",
        },
      ],
      teachingPoint:
        "Safe CNV reasoning means prioritising the strongest CNV and documenting why other technically or biologically weaker CNVs were deprioritised.",
    },
  ],

  finalReflection:
    "A safe trainee-level conclusion would be that Candidate 3 is the strongest current CNV candidate because it is a sizeable apparent de novo heterozygous deletion with consistent read-depth evidence, support from more than one caller, relevant dosage-sensitive genes, no common benign overlap, and strong phenotype fit. Candidate 1 should be treated cautiously because it is small, low-confidence, supported by few windows, not supported by a second caller, and lies in a difficult pseudogene/segmental duplication region. Candidate 2 appears technically plausible as a duplication, but its clinical relevance is uncertain because it is inherited from an unaffected mother and triplosensitivity is not established. The safest next step is to prioritise Candidate 3 for CNV plot review, dosage/gene-content review, inheritance confirmation, and appropriate escalation through the local clinical laboratory pathway.",
};