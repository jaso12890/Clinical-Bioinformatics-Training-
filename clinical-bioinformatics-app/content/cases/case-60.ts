export const case60 = {
  id: "case-60",
  slug: "uncertain-transcript-mane-conflict-case",
  title: "Case 60: Uncertain transcript / MANE conflict",
  level: "Advanced",
  summary:
    "A guided case focused on transcript choice, MANE review, legacy transcript mismatch, and how different transcript conventions can change the apparent variant consequence.",

  visualisationExampleId: "ttn-transcript-caution",

  assessmentFocus: [
    "Transcript choice",
    "MANE Select review",
    "Legacy transcript conflict",
    "HGVS consequence mismatch",
    "Mechanism interpretation",
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
        "Rank the findings from strongest to weakest based on phenotype fit, technical confidence, transcript reliability, consequence clarity, and whether each finding should drive the final handover.",
      correctOrder: [
        "candidate-3",
        "candidate-5",
        "candidate-2",
        "candidate-4",
        "candidate-1",
      ],
      explanation:
        "Candidate 3 is the main review-worthy finding because the gene and phenotype fit are strong, the variant is rare and technically convincing, and a prior/legacy description makes it look highly relevant. However, Candidate 5 is essential because the transcript conflict controls how Candidate 3 should be described. Candidate 2 is plausible but weaker because the gene and variant evidence are less complete. Candidate 4 is likely a real CNV but has weak dosage and phenotype support. Candidate 1 is broad, relatively frequent, and poorly specific.",
    },

    escalationDecision: {
      prompt:
        "Choose the safest next action for the candidate affected by transcript disagreement.",
      options: [
        {
          id: "accept-legacy",
          label: "A",
          decision:
            "Use the legacy transcript consequence because it gives the clearest loss-of-function explanation for the phenotype.",
          isBest: false,
          feedback:
            "Review this choice. A clear-looking legacy consequence should not be accepted without checking the current clinically preferred transcript and HGVS representation.",
        },
        {
          id: "escalate-transcript-review",
          label: "B",
          decision:
            "Escalate Candidate 3 for formal transcript/HGVS review before using the consequence in diagnostic wording.",
          isBest: true,
          feedback:
            "Best decision. Candidate 3 is important, but the transcript conflict must be resolved before the consequence and mechanism are communicated confidently.",
        },
        {
          id: "discard-candidate",
          label: "C",
          decision:
            "Discard Candidate 3 because any transcript disagreement makes the variant unsuitable for clinical review.",
          isBest: false,
          feedback:
            "Review this choice. Transcript disagreement is a limitation to resolve, not a reason to ignore an otherwise relevant candidate.",
        },
      ],
    },

    writtenSummary: {
      prompt:
        "Write a short trainee-level handover summary explaining the leading candidate, the transcript conflict, and why the consequence must not be overcalled.",
      checklist: [
        "Names Candidate 3 as the main review-worthy finding.",
        "Explains that the legacy transcript and MANE/preferred transcript give different apparent consequences.",
        "Avoids using the more severe consequence without transcript review.",
        "Mentions that mechanism interpretation depends on the correct transcript and affected isoform.",
        "States that formal HGVS/transcript review is required.",
        "Briefly explains why the other candidates are weaker.",
      ],
      modelAnswer:
        "Candidate 3 is the main review-worthy finding because the gene and phenotype fit are strong, the variant is rare, technically well supported, and a previous or legacy transcript description suggests a potentially important consequence. However, the key issue is that the legacy transcript and the current clinically preferred transcript do not describe the variant in the same way. The legacy transcript makes the variant appear like a high-impact splice or loss-of-function event, while the MANE/preferred transcript review suggests a different apparent consequence. The finding should therefore not be communicated using the more severe consequence until transcript choice, HGVS nomenclature, affected isoform, and disease mechanism have been formally reviewed. Candidate 5 is the central transcript limitation. Candidate 2 is plausible but less strong, Candidate 4 is a likely real CNV with weak dosage support, and Candidate 1 is broad and poorly specific. The safest next step is to escalate Candidate 3 for formal transcript and variant nomenclature review before diagnostic wording.",
    },
  },

  reasoningScorecard: [
    {
      category: "Transcript awareness",
      maxScore: 2,
      expectation:
        "Recognises that transcript choice can change the apparent HGVS description and predicted consequence.",
    },
    {
      category: "MANE / preferred transcript reasoning",
      maxScore: 2,
      expectation:
        "Uses the current clinically preferred transcript review without blindly discarding useful legacy information.",
    },
    {
      category: "Consequence interpretation",
      maxScore: 2,
      expectation:
        "Avoids overcalling loss-of-function or splice impact when the consequence depends on transcript convention.",
    },
    {
      category: "Candidate prioritisation",
      maxScore: 2,
      expectation:
        "Prioritises the candidate with strong gene and phenotype evidence while preserving the transcript limitation.",
    },
    {
      category: "Safe communication",
      maxScore: 2,
      expectation:
        "Communicates the finding as requiring formal transcript/HGVS review before diagnostic wording.",
    },
  ],

  patient: {
    age: 11,
    sex: "Male",
  },

  referralReason:
    "An 11-year-old boy has been referred for rare disease genome analysis because of progressive proximal muscle weakness, delayed motor milestones, raised creatine kinase, mild cardiomyopathy, exercise intolerance, and fatigue. A legacy report from another service listed a variant using an older transcript and described it as a high-impact consequence. Current analysis using the clinically preferred transcript gives a different apparent consequence, creating uncertainty about how the variant should be interpreted and communicated.",

  testType:
    "Rare disease genome sequencing with SNV/indel, CNV, transcript, HGVS, MANE/preferred transcript, and technical-confidence review",

  familyStructure:
    "The proband and both biological parents have been tested. Both parents are reportedly unaffected. The main transcript-conflict variant appears absent from both parents with good coverage, but transcript choice affects how the consequence should be described.",

  history: [
    "Delayed motor milestones in early childhood",
    "Progressive proximal muscle weakness",
    "Exercise intolerance and fatigue",
    "Raised creatine kinase on repeated testing",
    "Mild cardiomyopathy on cardiac review",
    "No severe learning disability reported",
    "No known previous confirmed molecular diagnosis",
    "A legacy external report described one variant using an older transcript",
    "Current pipeline annotation uses a different clinically preferred transcript",
    "Clinical team requested clarification of the transcript discrepancy",
  ],

  phenotype: [
    "Progressive proximal muscle weakness",
    "Delayed motor milestones",
    "Raised creatine kinase",
    "Mild cardiomyopathy",
    "Exercise intolerance",
    "Fatigue",
    "Transcript interpretation issue",
  ],

  familyHistory:
    "Both parents are reportedly unaffected. There is no known family history of childhood-onset muscle weakness, cardiomyopathy, raised creatine kinase, exercise intolerance, fatigue, or a similar neuromuscular presentation. No previous confirmed familial variant is known.",

  serviceContext: [
    "This guided case focuses on transcript choice and consequence interpretation.",
    "The key issue is that a variant can look different depending on which transcript is used.",
    "The learner should not blindly accept a legacy transcript description just because it gives a more severe consequence.",
    "The learner should also not ignore legacy information if it points to a clinically relevant region that needs careful review.",
    "The safest conclusion should prioritise the candidate for formal review while stating that transcript and HGVS consequence need resolution.",
    "The final handover should separate variant-level technical confidence from transcript-level consequence confidence.",
  ],

  candidateFindings: [
    {
      id: "candidate-1",
      label: "Candidate 1",
      gene: "BROADMUSC1",
      variant: "chr4:77190442 C>T",
      zygosity: "Heterozygous",
      consequence: "missense_variant",
      inheritanceSignal: "Inherited from unaffected mother",
      clinicalFit:
        "BROADMUSC1 has a broad neuromuscular association in limited reports, but the variant is inherited from the unaffected mother, relatively frequent, and does not explain the cardiomyopathy and progressive muscle phenotype well.",
      rawEvidence: `GENE: BROADMUSC1
Known disease association: broad neuromuscular association in limited reports
Reported inheritance: autosomal dominant proposed
Known mechanism: uncertain
Gene-disease validity in local summary: limited

Variant:
chr4:77190442 C>T
Transcript: NM_600001.2
HGVS: c.899C>T p.(Pro300Leu)
Consequence: missense_variant
Protein domain: outside proposed recurrent functional region

VCF-style fields:
QUAL=684
FILTER=PASS
INFO: DP=46;MQ=60;QD=14.9;SOR=0.84
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
Muscle weakness: broad possible overlap
Raised creatine kinase: limited overlap
Cardiomyopathy: not a core feature
Exercise intolerance: weak overlap
Delayed motor milestones: broad possible overlap

Review question:
Assess whether an inherited, relatively frequent, broad-match variant should drive the case conclusion.`,
      concern:
        "This is technically real but weak. It should be reviewed and deprioritised rather than treated as the main explanation.",
    },
    {
      id: "candidate-2",
      label: "Candidate 2",
      gene: "MYOMISS2",
      variant: "chr10:55218401 G>A",
      zygosity: "Heterozygous",
      consequence: "missense_variant",
      inheritanceSignal: "Absent from both parents on standard genotype calls",
      clinicalFit:
        "MYOMISS2 has a possible dominant myopathy association. The variant is rare and technically plausible, but gene-disease evidence is less established and the exact variant has limited support.",
      rawEvidence: `GENE: MYOMISS2
Known disease association: possible autosomal dominant myopathy
Reported inheritance: usually de novo or dominant in limited reports
Known mechanism: damaging missense variants in a functional domain
Gene-disease validity in local summary: moderate / emerging

Variant:
chr10:55218401 G>A
Transcript: NM_600002.4
HGVS: c.1286G>A p.(Arg429His)
Consequence: missense_variant
Protein domain: possible myopathy-associated functional domain

VCF-style fields:
QUAL=810
FILTER=PASS
INFO: DP=52;MQ=60;QD=15.6;SOR=0.78
FORMAT: GT:AD:DP:GQ

Proband blood: 0/1:26,26:52:99
Mother blood: 0/0:44,0:44:99
Father blood: 0/0:45,0:45:99

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
Progressive muscle weakness: compatible
Raised creatine kinase: compatible
Cardiomyopathy: variable / limited overlap
Exercise intolerance: compatible
Delayed motor milestones: compatible

Review question:
Assess whether this rare missense candidate should be prioritised above a candidate with stronger phenotype fit but unresolved transcript consequence.`,
      concern:
        "This is plausible but less strong than Candidate 3 because the gene and variant evidence are less complete.",
    },
    {
      id: "candidate-3",
      label: "Candidate 3",
      gene: "TRANSCRIPT3",
      variant: "chr2:179456789 C>T",
      zygosity: "Heterozygous",
      consequence: "Transcript-dependent consequence",
      inheritanceSignal: "Apparent de novo with good parental coverage",
      clinicalFit:
        "TRANSCRIPT3 is associated with a dominant neuromuscular-cardiac disorder. The variant is rare, technically strong, absent from parents, and fits the phenotype, but the apparent consequence differs between the legacy transcript and the current clinically preferred transcript.",
      rawEvidence: `GENE: TRANSCRIPT3
Known disease association: autosomal dominant neuromuscular-cardiac disorder
Reported inheritance: usually de novo or dominant
Known mechanism: depends on affected isoform and variant class
Gene-disease validity in local summary: established / moderate

Variant:
chr2:179456789 C>T

Legacy transcript annotation:
Transcript: NM_legacy_600003.1
Legacy HGVS: c.1201-1G>A
Legacy consequence: splice_acceptor_variant
Legacy note: external report described this as predicted loss of normal splicing

Current clinically preferred transcript annotation:
Transcript: NM_600003.6
Transcript status: clinically preferred / MANE-style review in local summary
Current HGVS: c.1187C>T p.(Pro396Leu)
Current consequence: missense_variant
Current note: variant falls within a coding exon on the preferred transcript

Alternative transcript review:
A shorter historical transcript places the variant near a splice boundary
The preferred transcript places the same genomic change within coding sequence
The affected isoform and transcript convention change the apparent consequence
No RNA evidence is available in the current summary

VCF-style fields:
QUAL=950
FILTER=PASS
INFO: DP=56;MQ=60;QD=17.0;SOR=0.72
FORMAT: GT:AD:DP:GQ

Proband blood: 0/1:28,28:56:99
Mother blood: 0/0:46,0:46:99
Father blood: 0/0:45,0:45:99

Read-level notes:
ALT reads seen on both forward and reverse strands
ALT reads distributed across read positions
High base quality at variant position
High mapping quality for ALT-supporting reads
No local low-complexity warning
No pseudogene or segmental duplication warning
Second caller: detected

Population:
gnomAD AF = not observed
gnomAD allele count = 0

Phenotype fit:
Progressive proximal muscle weakness: strong match
Raised creatine kinase: strong match
Mild cardiomyopathy: compatible
Exercise intolerance: compatible
Delayed motor milestones: compatible
Fatigue: compatible

Transcript interpretation limitation:
The genomic variant is technically convincing.
The disease relevance may be strong.
However, the consequence should not be communicated until transcript choice and HGVS nomenclature are formally resolved.

Review question:
Assess whether this candidate should be prioritised while keeping transcript consequence uncertainty visible.`,
      concern:
        "This is the strongest current candidate, but the consequence must not be overcalled until transcript choice and HGVS representation are formally reviewed.",
    },
    {
      id: "candidate-4",
      label: "Candidate 4",
      gene: "CNVTRANS4 region",
      variant: "chr16:29120000-29205000 duplication",
      zygosity: "Heterozygous duplication",
      consequence: "copy_number_gain",
      inheritanceSignal: "Inherited from unaffected father",
      clinicalFit:
        "The duplication is likely real but inherited from the unaffected father, overlaps population CNVs, and has no established triplosensitivity mechanism for the neuromuscular-cardiac presentation.",
      rawEvidence: `CNV REGION: chr16:29120000-29205000
CNV type: duplication
Estimated size: 85 kb
Copy-number state: heterozygous duplication

Gene:
CNVTRANS4
Known disease association: possible developmental or muscle association in limited reports
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
Muscle weakness: broad possible overlap
Raised creatine kinase: weak overlap
Cardiomyopathy: not a core feature
Exercise intolerance: weak overlap

Review question:
Assess whether this inherited copy-number gain has enough dosage, phenotype, and population support to be prioritised.`,
      concern:
        "This is likely technically real but weak because the gain mechanism is uncertain, population overlap is present, and it is inherited from an unaffected father.",
    },
    {
      id: "candidate-5",
      label: "Candidate 5",
      gene: "Transcript review",
      variant: "Legacy transcript consequence conflicts with current preferred transcript",
      zygosity: "Case-level transcript interpretation issue",
      consequence: "transcript_hgvs_review",
      inheritanceSignal: "Not a separate disease candidate",
      clinicalFit:
        "This is not a disease candidate. It is the central interpretation issue because the apparent severity of Candidate 3 depends on which transcript and HGVS description are used.",
      rawEvidence: `CASE CONTEXT REVIEW: transcript and HGVS discrepancy
Reason for review:
Candidate 3 has strong technical evidence and phenotype relevance.
However, a legacy report and the current annotation describe the same genomic variant differently.

Legacy report:
Older transcript used
Variant described near a splice boundary
Consequence described as splice_acceptor_variant
Report language suggests predicted loss of normal splicing

Current pipeline:
Clinically preferred transcript used
Variant described as coding missense
Consequence described as missense_variant
No RNA evidence available to prove a splice effect

Why this matters:
Variant consequence affects mechanism reasoning.
A splice/loss-of-function interpretation is not the same as a missense interpretation.
Classification and clinical wording may change depending on transcript and isoform relevance.
Legacy transcript information may still be useful, but it must be reconciled with current transcript standards.

Useful review steps:
Confirm reference genome and transcript versions
Confirm HGVS nomenclature on the preferred transcript
Check MANE/preferred transcript status in the local workflow
Review disease-relevant isoforms
Assess whether the legacy transcript is clinically relevant
Consider RNA or functional evidence if clinically appropriate
Document transcript choice clearly in the handover

Review question:
Assess how this transcript conflict should shape candidate ranking, escalation, and final wording.`,
      concern:
        "This is the central limitation. Candidate 3 should be reviewed, but its consequence should not be communicated using whichever transcript gives the most severe wording.",
    },
  ],

  decisionCheckpoints: [
    {
      id: "checkpoint-1",
      title: "Checkpoint 1 — Identify the leading finding",
      context:
        "Candidate 3 has strong phenotype, rarity, technical, and inheritance evidence, but the transcript used changes the apparent consequence.",
      question:
        "Which finding should be prioritised for formal review?",
      options: [
        {
          label: "A",
          text: "Candidate 3, because it is the strongest candidate, while the transcript consequence must remain an explicit limitation.",
          isCorrect: true,
          feedback:
            "Correct. Candidate 3 is review-worthy, but the transcript issue must be resolved before confident consequence wording.",
        },
        {
          label: "B",
          text: "Candidate 2, because a missense variant without transcript disagreement is easier to communicate safely.",
          isCorrect: false,
          feedback:
            "Not quite. Candidate 2 is cleaner to describe, but it has weaker gene and variant evidence than Candidate 3.",
        },
        {
          label: "C",
          text: "Candidate 4, because a CNV avoids transcript ambiguity and therefore gives a more stable result.",
          isCorrect: false,
          feedback:
            "Not quite. Candidate 4 is likely real, but its dosage, inheritance, and phenotype evidence are weak.",
        },
      ],
      teachingPoint:
        "A transcript limitation can affect wording without removing a strong candidate from review.",
    },
    {
      id: "checkpoint-2",
      title: "Checkpoint 2 — Avoid choosing the most severe transcript",
      context:
        "The legacy transcript makes Candidate 3 look like a splice acceptor variant, while the preferred transcript describes it as missense.",
      question:
        "How should the consequence be handled?",
      options: [
        {
          label: "A",
          text: "Use the splice consequence because clinical interpretation should choose the transcript with the most severe effect.",
          isCorrect: false,
          feedback:
            "Not quite. Transcript choice should be justified by clinical relevance and standards, not by choosing the most severe annotation.",
        },
        {
          label: "B",
          text: "Escalate transcript and HGVS review before using either consequence as the basis for diagnostic wording.",
          isCorrect: true,
          feedback:
            "Correct. The consequence affects mechanism and classification, so it needs formal resolution.",
        },
        {
          label: "C",
          text: "Use only the missense consequence because current pipeline annotation always overrides all legacy information.",
          isCorrect: false,
          feedback:
            "Not quite. Current annotation is important, but legacy information may still flag an issue that needs review.",
        },
      ],
      teachingPoint:
        "Transcript review is not about picking the harshest or newest label automatically; it is about justified clinical representation.",
    },
    {
      id: "checkpoint-3",
      title: "Checkpoint 3 — Separate technical confidence from consequence confidence",
      context:
        "The variant call itself is technically strong, but its predicted consequence differs by transcript.",
      question:
        "Which statement best separates these two issues?",
      options: [
        {
          label: "A",
          text: "The variant should be rejected because transcript disagreement means the sequencing call is unreliable.",
          isCorrect: false,
          feedback:
            "Not quite. Transcript disagreement affects annotation and consequence, not necessarily the existence of the variant call.",
        },
        {
          label: "B",
          text: "The variant should be reported as loss-of-function because the technical call is high quality.",
          isCorrect: false,
          feedback:
            "Not quite. Technical confidence does not decide whether the correct consequence is splice or missense.",
        },
        {
          label: "C",
          text: "The call can be technically reliable while the clinical consequence still requires transcript/HGVS review.",
          isCorrect: true,
          feedback:
            "Correct. Variant calling confidence and transcript consequence confidence are related but separate.",
        },
      ],
      teachingPoint:
        "A variant can be real while its clinical annotation remains unresolved.",
    },
    {
      id: "checkpoint-4",
      title: "Checkpoint 4 — Decide what review is needed",
      context:
        "The current evidence does not include RNA data, and the transcript discrepancy may affect mechanism interpretation.",
      question:
        "Which next review step is most appropriate?",
      options: [
        {
          label: "A",
          text: "Confirm transcript versions, preferred transcript status, HGVS representation, isoform relevance, and whether additional evidence is needed.",
          isCorrect: true,
          feedback:
            "Correct. These steps directly address the transcript and consequence uncertainty.",
        },
        {
          label: "B",
          text: "Request only a higher read depth at the variant site, because annotation uncertainty usually reflects weak sequencing data.",
          isCorrect: false,
          feedback:
            "Not quite. The call is technically strong; the main issue is transcript and consequence representation.",
        },
        {
          label: "C",
          text: "Ignore the legacy report and proceed only with the current pipeline consequence to avoid conflicting information.",
          isCorrect: false,
          feedback:
            "Not quite. The conflict itself is clinically relevant and should be reconciled rather than ignored.",
        },
      ],
      teachingPoint:
        "The follow-up should match the limitation: here the limitation is transcript representation, not read depth.",
    },
    {
      id: "checkpoint-5",
      title: "Checkpoint 5 — Final transcript-aware conclusion",
      context:
        "You need to prepare a safe trainee-level conclusion for formal clinical laboratory review.",
      question:
        "Which conclusion is safest?",
      options: [
        {
          label: "A",
          text: "Report Candidate 3 as a splice-loss finding because the legacy transcript gives the most clinically serious consequence.",
          isCorrect: false,
          feedback:
            "Not quite. The most serious transcript consequence should not be used without formal transcript justification.",
        },
        {
          label: "B",
          text: "Prioritise Candidate 3 for review, but state that transcript/HGVS consequence must be resolved before diagnostic wording.",
          isCorrect: true,
          feedback:
            "Correct. This preserves the candidate while communicating the key limitation safely.",
        },
        {
          label: "C",
          text: "Avoid prioritising Candidate 3 because transcript disagreement makes it impossible to use in any clinical review.",
          isCorrect: false,
          feedback:
            "Not quite. Transcript disagreement limits wording, but it does not make the candidate irrelevant.",
        },
      ],
      teachingPoint:
        "Safe transcript-aware handover prioritises the candidate and clearly explains what still needs formal resolution.",
    },
  ],

  finalReflection:
    "A safe trainee-level conclusion would be that Candidate 3 is the main review-worthy finding, but the transcript and HGVS consequence must be resolved before diagnostic wording. The variant is rare, technically well supported, apparently absent from both parents with good coverage, and fits the neuromuscular-cardiac phenotype. However, the legacy transcript describes the same genomic change as a splice acceptor or high-impact consequence, while the current clinically preferred transcript describes it as a missense variant. That difference affects mechanism interpretation and could materially change how the variant is communicated. Candidate 5 is not a disease candidate but is the central limitation because it explains the transcript conflict. Candidate 2 is plausible but less strong because the gene and variant evidence are less complete. Candidate 4 is likely a real inherited duplication but has weak dosage and phenotype support. Candidate 1 is broad, inherited, relatively frequent, and poorly specific. The safest next step is to prioritise Candidate 3 for formal transcript, HGVS, isoform, and mechanism review, avoid choosing the most severe consequence by default, and communicate the finding only after the transcript representation has been clarified through the appropriate clinical laboratory review pathway.",
};