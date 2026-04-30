export const case56 = {
  id: "case-56",
  slug: "cnv-mosaicism-case",
  title: "Case 56: CNV mosaicism",
  level: "Advanced",
  summary:
    "A guided case focused on recognising a mosaic copy-number change and distinguishing a true reduced-level CNV from noisy read-depth evidence.",

  visualisationExampleId: null,

  assessmentFocus: [
    "Mosaic CNV interpretation",
    "Read-depth evidence",
    "B-allele frequency review",
    "Caller concordance",
    "Technical noise awareness",
    "Safe escalation and communication",
  ],

  guidedTutorMode: {
    type: "static-rule-based",
    description:
      "Uses built-in hints, checkpoint feedback, model answers, and self-check criteria to support safe case reasoning.",
  },

  phase5Assessment: {
    candidateRanking: {
      prompt:
        "Rank the findings from strongest to weakest based on CNV evidence, mosaic pattern, phenotype fit, technical confidence, and whether each finding should drive the case conclusion.",
      correctOrder: [
        "candidate-3",
        "candidate-5",
        "candidate-2",
        "candidate-4",
        "candidate-1",
      ],
      explanation:
        "Candidate 3 is strongest because the reduced-level deletion has consistent depth shift, B-allele frequency support, multiple-caller support, phenotype fit, and a relevant dosage-sensitive gene. Candidate 5 is not a disease candidate, but it is important because it explains the mosaic CNV review logic and technical limitations. Candidate 2 is a weaker possible CNV because the depth shift is subtle, inconsistent, and not supported by B-allele evidence. Candidate 4 is likely technically real but inherited and weakly matched. Candidate 1 is technically real but weak because it is a relatively frequent broad-match SNV with poor phenotype specificity.",
    },

    escalationDecision: {
      prompt:
        "Choose the safest next action for the strongest CNV finding in this case.",
      options: [
        {
          id: "reject-all-mosaic-cnvs",
          label: "A",
          decision:
            "Reject the reduced-level CNV because mosaic copy-number changes are too difficult to interpret from sequencing data.",
          isBest: false,
          feedback:
            "Review this choice. Mosaic CNVs require caution, but consistent depth, B-allele, caller, and phenotype evidence can make a finding review-worthy.",
        },
        {
          id: "report-cnv-diagnostic",
          label: "B",
          decision:
            "Report the reduced-level CNV as diagnostic because multiple technical features support a mosaic deletion.",
          isBest: false,
          feedback:
            "Review this choice. The finding is strong enough to escalate, but diagnostic wording still needs formal confirmation and laboratory review.",
        },
        {
          id: "escalate-cnv-review",
          label: "C",
          decision:
            "Escalate the reduced-level CNV for formal review, documenting mosaic evidence, technical support, and confirmation needs.",
          isBest: true,
          feedback:
            "Best decision. Candidate 3 has enough converging evidence for formal review, while still requiring appropriate confirmation and sign-off.",
        },
      ],
    },

    writtenSummary: {
      prompt:
        "Write a short trainee-level handover summary explaining the strongest CNV finding, why mosaicism is plausible, and what technical caution remains.",
      checklist: [
        "Names Candidate 3 as the strongest current finding.",
        "Explains that the CNV is present at a reduced level rather than a full heterozygous deletion.",
        "Mentions consistent read-depth shift across the interval.",
        "Uses B-allele pattern, caller support, and breakpoint/read-depth evidence appropriately.",
        "Avoids treating every noisy depth shift as a true mosaic CNV.",
        "States that formal confirmation and clinical laboratory review are required.",
      ],
      modelAnswer:
        "Candidate 3 is the strongest current finding for formal mosaic CNV review. The evidence supports a reduced-level deletion rather than a full constitutional heterozygous deletion: the read-depth shift is consistent across the interval, the estimated copy-number state is reduced but not fully one-copy, the B-allele pattern is compatible with mosaic deletion, and more than one CNV caller supports the event. The interval includes a dosage-sensitive neurodevelopmental gene that fits the patient’s developmental delay, epilepsy, hypotonia, feeding difficulties, and dysmorphic features. Candidate 2 is weaker because the depth change is subtle, inconsistent, and lacks B-allele support. Candidate 4 is likely a real inherited duplication but has weak dosage and phenotype support, and Candidate 1 is a broad, relatively frequent SNV. Candidate 5 is the key technical review point. The safest next step is to escalate Candidate 3 for formal CNV confirmation, interpretation, and clinical laboratory sign-off rather than overcalling it from sequencing data alone.",
    },
  },

  reasoningScorecard: [
    {
      category: "Mosaic CNV reasoning",
      maxScore: 2,
      expectation:
        "Recognises that a reduced-level copy-number change can represent mosaicism when supported by consistent depth and allele-pattern evidence.",
    },
    {
      category: "Technical confidence",
      maxScore: 2,
      expectation:
        "Uses read depth, number of affected windows, B-allele pattern, caller concordance, breakpoint support, and noise context before trusting a CNV.",
    },
    {
      category: "Candidate prioritisation",
      maxScore: 2,
      expectation:
        "Prioritises the CNV with the best convergence across phenotype, dosage sensitivity, mosaic pattern, and technical support.",
    },
    {
      category: "Noise awareness",
      maxScore: 2,
      expectation:
        "Distinguishes a true mosaic CNV pattern from shallow, inconsistent, or noisy depth changes.",
    },
    {
      category: "Safe communication",
      maxScore: 2,
      expectation:
        "Communicates the finding as a mosaic CNV candidate requiring formal confirmation rather than as a final diagnosis.",
    },
  ],

  patient: {
    age: 7,
    sex: "Female",
  },

  referralReason:
    "A 7-year-old girl has been referred for rare disease genome analysis because of global developmental delay, epilepsy, hypotonia, feeding difficulties, mild dysmorphic features, and asymmetric growth. CNV analysis identified several copy-number observations, including one reduced-level deletion that may represent mosaic CNV rather than ordinary technical noise.",

  testType:
    "Rare disease genome sequencing with SNV/indel, CNV, mosaic CNV, read-depth, B-allele, and technical-confidence review",

  familyStructure:
    "The proband and both biological parents have been tested. Both parents are reportedly unaffected. The main reduced-level CNV is not detected in either parent by the current CNV review, but confirmation and orthogonal review are still required.",

  history: [
    "Global developmental delay noted in infancy",
    "Epilepsy beginning at age 3",
    "Generalised hypotonia",
    "Feeding difficulties in early childhood",
    "Mild dysmorphic features noted by clinical genetics",
    "Asymmetric growth involving the left leg",
    "No known previous molecular diagnosis",
    "Both parents are reportedly unaffected",
    "CNV caller output includes both confident and borderline copy-number observations",
    "Clinical team requested review of a possible mosaic CNV",
  ],

  phenotype: [
    "Global developmental delay",
    "Epilepsy",
    "Hypotonia",
    "Feeding difficulties",
    "Mild dysmorphic features",
    "Asymmetric growth",
    "Possible mosaic presentation",
  ],

  familyHistory:
    "Both parents are reportedly unaffected. There is no known family history of developmental delay, epilepsy, hypotonia, feeding difficulties, dysmorphic features, asymmetric growth, or a similar childhood presentation.",

  serviceContext: [
    "This guided case focuses on mosaic CNV interpretation.",
    "The key issue is distinguishing a reduced-level CNV from noisy read-depth evidence.",
    "The learner should not accept every subtle depth shift as a real mosaic CNV.",
    "The learner should also not dismiss a reduced-level CNV automatically when depth, B-allele pattern, caller support, and phenotype fit align.",
    "The safest conclusion should prioritise the strongest CNV candidate while clearly stating the need for formal confirmation.",
    "The final handover should explain why one CNV is more credible than the noisier CNV observations.",
  ],

  candidateFindings: [
    {
      id: "candidate-1",
      label: "Candidate 1",
      gene: "BROADCNV1",
      variant: "chr4:77190442 C>T",
      zygosity: "Heterozygous",
      consequence: "missense_variant",
      inheritanceSignal: "Inherited from unaffected mother",
      clinicalFit:
        "BROADCNV1 has a broad neurodevelopmental association in limited reports, but the variant is inherited from the unaffected mother, relatively frequent, and does not explain the asymmetric growth or CNV-led suspicion well.",
      rawEvidence: `GENE: BROADCNV1
Known disease association: broad neurodevelopmental association in limited reports
Reported inheritance: autosomal dominant proposed
Known mechanism: uncertain
Gene-disease validity in local summary: limited

Variant:
chr4:77190442 C>T
Transcript: NM_560001.2
HGVS: c.899C>T p.(Pro300Leu)
Consequence: missense_variant
Protein domain: outside proposed recurrent functional region

VCF-style fields:
QUAL=690
FILTER=PASS
INFO: DP=46;MQ=60;QD=15.0;SOR=0.86
FORMAT: GT:AD:DP:GQ

Proband blood: 0/1:23,23:46:99
Mother blood: 0/1:22,22:44:99
Father blood: 0/0:42,0:42:99

Read-level notes:
ALT reads seen on both forward and reverse strands
ALT reads distributed across read positions
No local mapping warning
No concerning soft-clipping
Second caller: detected

Population:
gnomAD AF = 0.0012
gnomAD allele count = 340
One homozygote observed in local population summary

Phenotype fit:
Developmental delay: broad possible overlap
Epilepsy: limited overlap
Hypotonia: weak overlap
Feeding difficulties: not a core feature
Asymmetric growth: not a core feature
Dysmorphic features: not a core feature

Review question:
Assess whether an inherited, relatively frequent, broad-match SNV should drive a case where the main suspicion is mosaic CNV.`,
      concern:
        "This is technically real but weak. It should be reviewed and deprioritised rather than treated as the main explanation.",
    },
    {
      id: "candidate-2",
      label: "Candidate 2",
      gene: "NOISECNV2 region",
      variant: "chr10:44210000-44285000 possible deletion",
      zygosity: "Possible low-level mosaic deletion",
      consequence: "copy_number_loss",
      inheritanceSignal: "Not detected in parents",
      clinicalFit:
        "The region contains a possible developmental gene, but the depth shift is subtle, inconsistent across windows, and lacks convincing B-allele support.",
      rawEvidence: `CNV REGION: chr10:44210000-44285000
CNV type: possible deletion
Estimated size: 75 kb
Copy-number state: possible low-level mosaic loss

Gene:
NOISECNV2
Known disease association: possible developmental association in limited reports
Known mechanism: uncertain
Haploinsufficiency evidence: not established

Inheritance:
Proband: possible low-level deletion flag
Mother: no deletion detected
Father: no deletion detected

CNV caller summary:
Caller 1: low-confidence deletion flag
Caller 2: not detected
Caller 3: not detected
Quality score: 29
Number of affected targets/windows: 9

Read-depth evidence:
Expected normalised depth in diploid regions: ~1.00
Proband depth across interval: variable, ~0.82 to 1.01
Mean normalised depth across interval: ~0.91
Flanking regions: noisy
Several windows show normal depth
Mother normalised depth: ~1.00
Father normalised depth: ~0.99

B-allele / SNP pattern:
No convincing B-allele shift
SNP density across the interval is low
Pattern does not strongly support mosaic deletion

Breakpoint evidence:
Split reads: absent
Paired-end support: absent
Breakpoint not resolved

Population:
Overlapping small deletions observed in local population CNV summary
No strong dosage mechanism in local teaching summary

Phenotype fit:
Developmental delay: broad possible overlap
Epilepsy: weak overlap
Hypotonia: weak overlap
Asymmetric growth: not a reported feature

Review question:
Assess whether this shallow and inconsistent depth signal is sufficient to prioritise as a mosaic CNV.`,
      concern:
        "This is a weaker possible CNV. It should be treated cautiously because the depth and B-allele evidence are not convincing.",
    },
    {
      id: "candidate-3",
      label: "Candidate 3",
      gene: "MOSCNV3 region",
      variant: "chr12:66120000-66305000 deletion",
      zygosity: "Reduced-level mosaic deletion",
      consequence: "copy_number_loss",
      inheritanceSignal: "Not detected in either parent",
      clinicalFit:
        "The deletion affects a dosage-sensitive neurodevelopmental gene and shows consistent reduced-level copy-number evidence, B-allele pattern support, and multiple-caller support. The phenotype is compatible with the affected interval.",
      rawEvidence: `CNV REGION: chr12:66120000-66305000
CNV type: deletion
Estimated size: 185 kb
Copy-number state: reduced-level loss / possible mosaic deletion

Main gene in interval:
MOSCNV3
Known disease association: autosomal dominant neurodevelopmental disorder
Known mechanism: haploinsufficiency / dosage loss
Haploinsufficiency evidence in local summary: established / moderate
Triplosensitivity evidence: not relevant for this deletion

Affected region:
Deletion includes exons 2–8 of MOSCNV3
Predicted transcript effect: partial gene deletion with loss-of-function concern
Breakpoint resolution: approximate from short-read CNV calling

Inheritance:
Proband: reduced-level deletion detected
Mother: deletion not detected
Father: deletion not detected

CNV caller summary:
Caller 1: mosaic deletion PASS_MOSAIC_REVIEW
Caller 2: deletion supported
Caller 3: reduced-copy flag supported
Quality score: 118
Number of affected targets/windows: 42

Read-depth evidence:
Expected normalised depth in diploid regions: ~1.00
Expected full heterozygous deletion depth: ~0.50
Proband mean normalised depth across interval: ~0.72
Mother normalised depth across interval: ~1.00
Father normalised depth across interval: ~1.01
Flanking regions: mostly stable
Depth shift is consistent across most affected windows

B-allele / SNP pattern:
B-allele pattern shows partial shift compatible with mosaic deletion
SNPs within the interval show reduced heterozygous balance
Pattern is not as strong as a full constitutional deletion
Pattern is stronger than neighbouring noisy regions

Breakpoint evidence:
Split reads: limited
Paired-end support: weak but present near one boundary
Breakpoint not fully resolved
Short-read CNV confirmation remains needed

Population:
No matching recurrent benign deletion in local population CNV summary
No common overlapping deletion across the key MOSCNV3 exons

Phenotype fit:
Global developmental delay: strong match
Epilepsy: compatible
Hypotonia: compatible
Feeding difficulties: compatible
Mild dysmorphic features: compatible
Asymmetric growth: possible mosaic-compatible feature

Review question:
Assess whether the reduced depth, B-allele pattern, dosage-sensitive gene, and phenotype support escalation for formal mosaic CNV review.`,
      concern:
        "This is the strongest current CNV candidate. It should be escalated for formal review and confirmation rather than treated as routine noisy depth.",
    },
    {
      id: "candidate-4",
      label: "Candidate 4",
      gene: "INHERCNV4 region",
      variant: "chr16:29120000-29205000 duplication",
      zygosity: "Heterozygous duplication",
      consequence: "copy_number_gain",
      inheritanceSignal: "Inherited from unaffected father",
      clinicalFit:
        "The duplication is likely real but inherited from the unaffected father, overlaps population CNVs, and has no established triplosensitivity mechanism for this phenotype.",
      rawEvidence: `CNV REGION: chr16:29120000-29205000
CNV type: duplication
Estimated size: 85 kb
Copy-number state: heterozygous duplication

Gene:
INHERCNV4
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
Quality score: 105
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
Asymmetric growth: not a reported feature

Review question:
Assess whether this inherited copy-number gain has enough dosage, phenotype, and population support to be prioritised.`,
      concern:
        "This is likely technically real but weak because the gain mechanism is uncertain, population overlap is present, and it is inherited from an unaffected father.",
    },
    {
      id: "candidate-5",
      label: "Candidate 5",
      gene: "Mosaic CNV review",
      variant: "Reduced-level copy-number signal versus noisy depth",
      zygosity: "Case-level technical review",
      consequence: "mosaic_cnv_review_flag",
      inheritanceSignal: "Not a separate disease candidate",
      clinicalFit:
        "This is not a separate disease candidate. It summarises the key technical issue: deciding whether a reduced-level CNV signal is real mosaic deletion or noise.",
      rawEvidence: `TECHNICAL REVIEW: mosaic CNV assessment
Reason for review:
The case includes one reduced-level deletion with stronger evidence and one weaker possible CNV with noisy depth.

Features supporting a mosaic CNV:
Consistent reduced depth across many consecutive windows
Depth shift between normal diploid and full heterozygous deletion range
B-allele pattern partly shifts in the expected direction
More than one CNV caller supports the event
Affected interval includes a dosage-sensitive gene
Phenotype is compatible with the deleted region
No matching parental CNV is detected

Features suggesting noise:
Few affected windows
Variable depth across the interval
Normal neighbouring windows within the proposed event
No B-allele shift
Only one caller flags the event
Low SNP density or noisy GC-rich interval
Common overlapping benign CNVs

Candidate 3 comparison:
Consistent depth shift
Multiple-caller support
B-allele shift present
Dosage-sensitive gene included
Phenotype compatible

Candidate 2 comparison:
Subtle variable depth
Single-caller flag
No convincing B-allele shift
Limited gene-disease evidence

Review question:
Assess how these technical features should shape CNV prioritisation and escalation.`,
      concern:
        "This is the central technical review point. It helps distinguish a plausible mosaic CNV from a weak noisy depth observation.",
    },
  ],

  decisionCheckpoints: [
    {
      id: "checkpoint-1",
      title: "Checkpoint 1 — Identify the strongest CNV candidate",
      context:
        "Several copy-number observations are present, but only one has consistent reduced-level depth, B-allele support, multiple-caller support, and phenotype fit.",
      question:
        "Which finding is strongest for formal mosaic CNV review?",
      options: [
        {
          label: "A",
          text: "Candidate 2, because any low-level deletion flag in a developmental gene should be treated as the main CNV finding.",
          isCorrect: false,
          feedback:
            "Not quite. Candidate 2 is low confidence because the depth shift is inconsistent and lacks B-allele support.",
        },
        {
          label: "B",
          text: "Candidate 3, because depth, B-allele pattern, caller support, dosage sensitivity, and phenotype fit all converge.",
          isCorrect: true,
          feedback:
            "Correct. Candidate 3 has the strongest overall CNV evidence pattern.",
        },
        {
          label: "C",
          text: "Candidate 4, because inherited duplications are technically easier to confirm than reduced-level mosaic deletions.",
          isCorrect: false,
          feedback:
            "Not quite. Candidate 4 is likely real, but its dosage, inheritance, and phenotype evidence are weak.",
        },
      ],
      teachingPoint:
        "A mosaic CNV should be supported by a coherent technical pattern, not just a single low-confidence depth flag.",
    },
    {
      id: "checkpoint-2",
      title: "Checkpoint 2 — Interpret reduced-level copy number",
      context:
        "Candidate 3 has mean normalised depth around 0.72 across the interval, which is lower than normal diploid depth but not as low as a full heterozygous deletion.",
      question:
        "What does this depth pattern most safely suggest?",
      options: [
        {
          label: "A",
          text: "It supports a possible mosaic deletion when interpreted alongside B-allele shift, caller support, and phenotype fit.",
          isCorrect: true,
          feedback:
            "Correct. Reduced-level depth can support mosaic deletion when the wider technical and clinical pattern aligns.",
        },
        {
          label: "B",
          text: "It proves a full constitutional heterozygous deletion because any depth below 1.0 indicates one-copy loss.",
          isCorrect: false,
          feedback:
            "Not quite. A full heterozygous deletion would usually show a stronger shift than this in many depth-based summaries.",
        },
        {
          label: "C",
          text: "It proves sequencing noise because mosaic CNVs cannot produce intermediate depth values in short-read data.",
          isCorrect: false,
          feedback:
            "Not quite. Intermediate depth can be compatible with mosaic copy-number change, but it needs supporting evidence.",
        },
      ],
      teachingPoint:
        "Intermediate CNV depth should be interpreted with B-allele pattern, caller evidence, interval quality, and phenotype.",
    },
    {
      id: "checkpoint-3",
      title: "Checkpoint 3 — Distinguish noisy depth from mosaic CNV",
      context:
        "Candidate 2 has a subtle variable depth signal and no convincing B-allele shift, while Candidate 3 has a consistent interval-level pattern.",
      question:
        "Which comparison best explains why Candidate 3 is more credible?",
      options: [
        {
          label: "A",
          text: "Candidate 3 is stronger only because the deleted region is larger than Candidate 2.",
          isCorrect: false,
          feedback:
            "Not quite. Size can matter, but the key difference is consistency and supporting evidence.",
        },
        {
          label: "B",
          text: "Candidate 2 is stronger because noisy depth is expected when a CNV is mosaic and difficult to detect.",
          isCorrect: false,
          feedback:
            "Not quite. Mosaic CNVs may be challenging, but inconsistent noise without support should not be over-prioritised.",
        },
        {
          label: "C",
          text: "Candidate 3 has more consistent depth, B-allele support, caller concordance, dosage relevance, and phenotype fit.",
          isCorrect: true,
          feedback:
            "Correct. The distinction depends on the total evidence pattern, not one metric alone.",
        },
      ],
      teachingPoint:
        "Mosaic CNV confidence depends on converging technical evidence rather than a single depth observation.",
    },
    {
      id: "checkpoint-4",
      title: "Checkpoint 4 — Handle the inherited duplication",
      context:
        "Candidate 4 is a real duplication inherited from the unaffected father, with uncertain triplosensitivity and population overlap.",
      question:
        "How should Candidate 4 be handled?",
      options: [
        {
          label: "A",
          text: "Prioritise it above Candidate 3 because inherited CNVs are more stable than mosaic CNV calls.",
          isCorrect: false,
          feedback:
            "Not quite. Technical stability does not make the clinical evidence stronger.",
        },
        {
          label: "B",
          text: "Document it as likely real but lower priority because dosage, inheritance, population, and phenotype support are weak.",
          isCorrect: true,
          feedback:
            "Correct. Candidate 4 can be real without being the best explanation for the case.",
        },
        {
          label: "C",
          text: "Ignore it completely because inherited CNVs never have relevance in rare disease analysis.",
          isCorrect: false,
          feedback:
            "Not quite. Inherited CNVs can be relevant in some contexts, but this one is weak.",
        },
      ],
      teachingPoint:
        "Technical reality and clinical relevance are related but not the same thing.",
    },
    {
      id: "checkpoint-5",
      title: "Checkpoint 5 — Final mosaic CNV conclusion",
      context:
        "You need to prepare a safe trainee-level conclusion for formal clinical laboratory review.",
      question:
        "Which conclusion is safest?",
      options: [
        {
          label: "A",
          text: "Prioritise Candidate 3 for formal mosaic CNV review, explaining the reduced-depth pattern and need for confirmation.",
          isCorrect: true,
          feedback:
            "Correct. This conclusion identifies the strongest CNV while preserving confirmation and review boundaries.",
        },
        {
          label: "B",
          text: "Report Candidate 3 as diagnostic immediately because the CNV affects a dosage-sensitive gene.",
          isCorrect: false,
          feedback:
            "Not quite. Dosage-sensitive gene involvement supports review, but confirmation and formal interpretation are still needed.",
        },
        {
          label: "C",
          text: "Avoid prioritising any CNV because reduced-level copy-number signals are always too unreliable to review.",
          isCorrect: false,
          feedback:
            "Not quite. Reduced-level CNVs need caution, but they can be meaningful when several evidence types align.",
        },
      ],
      teachingPoint:
        "Safe CNV handover can prioritise a strong mosaic candidate while clearly stating technical and confirmation limitations.",
    },
  ],

  finalReflection:
    "A safe trainee-level conclusion would be that Candidate 3 is the strongest current finding for formal mosaic CNV review. The evidence supports a reduced-level deletion affecting MOSCNV3 rather than a routine noisy depth artefact: the mean depth is intermediate between normal diploid and full heterozygous deletion, the shift is consistent across many windows, multiple callers support the event, the B-allele pattern is compatible with mosaic deletion, the interval includes a dosage-sensitive neurodevelopmental gene, and the phenotype is compatible. However, the breakpoint is not fully resolved and formal confirmation is still required. Candidate 5 is not a disease candidate but is the central technical review point because it explains how to distinguish mosaic CNV evidence from noise. Candidate 2 is weaker because the depth shift is subtle, variable, single-caller only, and lacks convincing B-allele support. Candidate 4 is likely a real inherited duplication, but dosage, population, inheritance, and phenotype evidence reduce priority. Candidate 1 is technically real but weak because it is inherited, relatively frequent, and poorly specific. The safest next step is to escalate Candidate 3 for formal CNV confirmation, interpretation, and clinical laboratory sign-off while documenting why the noisier CNV observations were deprioritised.",
};