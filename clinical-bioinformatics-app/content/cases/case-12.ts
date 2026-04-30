export const case12 = {
  id: "case-12",
  slug: "service-limitation-escalation-case",
  title: "Case 12: Service limitation and escalation case",
  level: "Beginner",
  summary:
    "A service-style case focused on recognising when there is no clean answer, documenting limitations, avoiding over-interpretation, and escalating uncertainty safely.",

  visualisationExampleId: null,

  assessmentFocus: [
    "No-clean-candidate reasoning",
    "Service limitation recognition",
    "Incomplete recessive evidence",
    "Repeat expansion test limitation",
    "Low-confidence CNV interpretation",
    "Safe escalation and uncertainty handover",
  ],

  guidedTutorMode: {
    type: "static-rule-based",
    description:
      "Uses built-in hints, checkpoint feedback, model answers, and self-check criteria to support safe case reasoning.",
  },

  phase5Assessment: {
    candidateRanking: {
      prompt:
        "Rank the findings or issues from most important to least important for the current case conclusion, based on whether they explain the phenotype, whether the evidence is complete, whether the test has assessed the relevant mechanism, and whether each finding should drive escalation.",
      correctOrder: [
        "candidate-3",
        "candidate-2",
        "candidate-1",
        "candidate-4",
      ],
      explanation:
        "Candidate 3 is the most important current issue because it highlights a genuine service limitation: a repeat expansion disorder remains in the clinical differential, but the current evidence packet does not assess repeat size. Candidate 2 is next because it is technically convincing and relevant to an ataxia gene, but it is incomplete as a single heterozygous allele in a recessive condition. Candidate 1 is technically real but weaker because it is inherited from an unaffected parent, outside the key domain, and poorly matched to the patient’s age and phenotype. Candidate 4 is weakest because it is a small, low-confidence CNV with poor technical support, noisy parental data, population overlap, and limited gene-disease evidence.",
    },

    escalationDecision: {
      prompt:
        "Choose the safest next action for this case when no single candidate is currently convincing enough to explain the presentation.",
      options: [
        {
          id: "force-candidate-2",
          label: "A",
          decision:
            "Escalate Candidate 2 as the diagnostic answer because a stop-gained variant in a recessive ataxia gene is the strongest sequence finding.",
          isBest: false,
          feedback:
            "Review this choice. Candidate 2 is worth documenting, but one heterozygous variant in a recessive gene is incomplete evidence and should not be forced into a diagnostic conclusion.",
        },
        {
          id: "document-limitations",
          label: "B",
          decision:
            "Document that no clean candidate is identified, note the incomplete ATXG2 finding, flag the repeat-expansion limitation, and escalate for clinical/laboratory review.",
          isBest: true,
          feedback:
            "Best decision. This is the safest service-style response because it communicates the current evidence, the unresolved limitation, and the need for appropriate review without over-interpreting weak findings.",
        },
        {
          id: "report-negative-only",
          label: "C",
          decision:
            "Close the case as negative because none of the SNV, indel, or CNV findings currently meets a clear reportable threshold.",
          isBest: false,
          feedback:
            "Review this choice. The current candidates are not convincing, but the repeat-expansion limitation and incomplete recessive evidence should still be made visible rather than hidden in a simple negative conclusion.",
        },
      ],
    },

    writtenSummary: {
      prompt:
        "Write a short trainee-level handover summary explaining why there is no clean current candidate, which findings or limitations still matter, and what should be escalated or reviewed next.",
      checklist: [
        "States that no clean single diagnostic candidate is identified from the current evidence.",
        "Explains that Candidate 3 is a test limitation/differential point, not a called variant.",
        "Mentions that repeat expansion sizing is not assessed in the current evidence packet.",
        "Explains why Candidate 2 is incomplete as a single inherited heterozygous variant in a recessive gene.",
        "Explains why Candidate 1 is weak despite being technically real.",
        "Explains why Candidate 4 is weak because of low-confidence CNV evidence.",
        "Avoids forcing a diagnosis from the least weak finding.",
        "Recommends appropriate clinical/laboratory review or pathway discussion for the limitation.",
        "Keeps uncertainty visible and reviewable.",
      ],
      modelAnswer:
        "There is no clean single diagnostic candidate from the current evidence. Candidate 3 is the most important issue to communicate because it is not a called variant but a limitation: the clinical team has raised a possible repeat expansion disorder, and the current SNV/indel evidence packet does not assess repeat size, repeat interruption, methylation, or segregation. Candidate 2 is technically convincing and may be worth documenting, but it is only one paternally inherited heterozygous stop-gained variant in ATXG2, a recessive ataxia gene, with no second coding variant or confident CNV identified in the current evidence. Candidate 1 appears technically real, but it is inherited from an unaffected mother, outside the reported recurrent domain, and not a strong fit for the age of onset or phenotype. Candidate 4 is a low-confidence small CNV with few affected windows, no second-caller support, noisy parental coverage, and limited gene-disease evidence. The safest next step is to document that no current candidate is sufficient, make the repeat-expansion limitation visible, and escalate for appropriate clinical and laboratory review rather than forcing a diagnosis.",
    },
  },

  reasoningScorecard: [
    {
      category: "No-clean-candidate reasoning",
      maxScore: 2,
      expectation:
        "Recognises when the available evidence does not support a single convincing diagnostic candidate.",
    },
    {
      category: "Test limitation awareness",
      maxScore: 2,
      expectation:
        "Identifies that repeat expansion disease is not excluded when repeat sizing is not assessed by the current evidence packet.",
    },
    {
      category: "Incomplete recessive evidence",
      maxScore: 2,
      expectation:
        "Recognises that one heterozygous loss-of-function variant is incomplete evidence for a recessive biallelic condition.",
    },
    {
      category: "Technical and clinical prioritisation",
      maxScore: 2,
      expectation:
        "Uses inheritance, technical confidence, CNV quality, gene-disease evidence, phenotype fit, and mechanism to avoid over-prioritising weak findings.",
    },
    {
      category: "Safe escalation",
      maxScore: 2,
      expectation:
        "Communicates uncertainty clearly, documents limitations, and escalates for appropriate review without forcing a diagnostic conclusion.",
    },
  ],

  patient: {
    age: 14,
    sex: "Female",
  },

  referralReason:
    "A 14-year-old girl has been referred for rare disease genome analysis because of progressive gait disturbance, tremor, mild learning difficulties, and a possible movement disorder.",

  testType: "Rare disease genome sequencing with SNV/indel and CNV analysis",

  familyStructure:
    "The proband and both biological parents have been tested. Both parents are reportedly unaffected. No similarly affected siblings are reported.",

  history: [
    "Progressive gait disturbance beginning around age 10",
    "Tremor and coordination difficulties",
    "Mild learning difficulties",
    "No confirmed seizures",
    "No known previous molecular diagnosis",
    "Clinical team notes that a repeat expansion disorder remains in the differential diagnosis",
  ],

  phenotype: [
    "Progressive gait disturbance",
    "Tremor",
    "Coordination difficulties",
    "Mild learning difficulties",
    "Possible movement disorder",
  ],

  familyHistory:
    "Both parents are reportedly unaffected. No clear family history of a similar movement disorder is documented, but the referral information is incomplete.",

  serviceContext: [
    "The analysis is being performed in a rare disease service context.",
    "The key task is not always to find a reportable candidate. Sometimes the safest conclusion is that no current candidate is convincing enough.",
    "The case includes possible limitations of the test and analysis approach, including repeat expansion assessment and incomplete evidence for candidate findings.",
    "Your role is to document why candidates are not currently strong enough, identify limitations, and escalate uncertainty appropriately.",
  ],

  candidateFindings: [
    {
      id: "candidate-1",
      label: "Candidate 1",
      gene: "MOVD3",
      variant: "chr6:120442991 G>A",
      zygosity: "Heterozygous",
      consequence: "missense_variant",
      inheritanceSignal: "Inherited from unaffected mother",
      clinicalFit:
        "MOVD3 has a broad movement-disorder association, but the reported disease is usually adult-onset and the variant is inherited from an unaffected parent.",
      rawEvidence: `GENE: MOVD3
Known disease association: adult-onset movement disorder
Reported inheritance: autosomal dominant with reduced penetrance reported in some families
Known mechanism: recurrent missense variants in a specific functional domain

Variant:
chr6:120442991 G>A
Transcript: NM_910001.2
HGVS: c.884G>A p.(Arg295Gln)
Consequence: missense_variant
Protein domain: outside reported recurrent functional domain

VCF-style fields:
QUAL=642
FILTER=PASS
INFO: DP=48;MQ=60;QD=13.4;SOR=0.82
FORMAT: GT:AD:DP:GQ

Proband: 0/1:24,24:48:99
Mother: 0/1:23,21:44:99
Father: 0/0:39,0:39:99

Read-level notes:
ALT reads seen on both forward and reverse strands
ALT reads distributed across read positions
No obvious local mapping warning
No soft-clipping concern

Population:
gnomAD AF = 0.00008
gnomAD allele count = 21
No homozygotes observed in local summary

Constraint:
LOEUF = 0.71
pLI = 0.18

ClinVar-style summary:
No exact matching pathogenic record found in local summary
Known pathogenic variants in MOVD3 are mainly recurrent missense variants in a different functional domain`,
      concern:
        "This appears technically real, but it is not a strong candidate because the inheritance, age of onset, variant location, and mechanism evidence are not convincing enough.",
    },
    {
      id: "candidate-2",
      label: "Candidate 2",
      gene: "ATXG2",
      variant: "chr9:88421120 C>T",
      zygosity: "Heterozygous",
      consequence: "stop_gained",
      inheritanceSignal: "Inherited from unaffected father",
      clinicalFit:
        "ATXG2 is associated with an autosomal recessive childhood-onset ataxia syndrome. The phenotype overlap is plausible, but only one inherited heterozygous loss-of-function variant is shown.",
      rawEvidence: `GENE: ATXG2
Known disease association: autosomal recessive childhood-onset ataxia syndrome
Reported inheritance: autosomal recessive
Known mechanism: biallelic loss-of-function

Variant:
chr9:88421120 C>T
Transcript: NM_910002.4
HGVS: c.1120C>T p.(Arg374*)
Consequence: stop_gained
Predicted effect: premature termination codon

VCF-style fields:
QUAL=788
FILTER=PASS
INFO: DP=45;MQ=60;QD=17.5;SOR=0.76
FORMAT: GT:AD:DP:GQ

Proband: 0/1:23,22:45:99
Mother: 0/0:38,0:38:99
Father: 0/1:20,21:41:99

Read-level notes:
ALT reads seen on both forward and reverse strands
ALT reads distributed across read positions
No local mapping warning
No soft-clipping concern

Second-allele review:
No second coding SNV/indel identified in ATXG2 in current candidate list
No confident exon-level deletion/duplication detected across ATXG2
Deep intronic / regulatory variants not fully assessed in this summary
Phasing: single paternal allele shown only

Population:
gnomAD AF = 0.000006
gnomAD allele count = 2
No homozygotes observed in local summary

Constraint:
LOEUF = 0.38
pLI = 0.66

ClinVar-style summary:
No exact matching variant record found in local summary
Other biallelic loss-of-function variants in ATXG2 have been submitted in affected individuals`,
      concern:
        "This is technically convincing and could be relevant carrier-level evidence, but it does not currently explain a recessive condition alone without a second pathogenic allele or another mechanism.",
    },
    {
      id: "candidate-3",
      label: "Candidate 3",
      gene: "REPEATX locus",
      variant: "Possible repeat-expansion differential",
      zygosity: "Not assessed by current SNV/indel call",
      consequence: "repeat_expansion_not_assessed",
      inheritanceSignal: "Inheritance cannot be assessed from current evidence",
      clinicalFit:
        "The phenotype includes progressive gait disturbance, tremor, and movement-disorder features. The clinical team has noted a repeat expansion disorder in the differential diagnosis, but the current evidence packet does not provide repeat sizing.",
      rawEvidence: `LOCUS: REPEATX
Clinical differential: repeat expansion disorder remains possible
Current pipeline evidence: no confident SNV/indel candidate explaining phenotype

Test / analysis limitation:
Standard SNV/indel calling summary does not size this repeat expansion
Repeat length: not reported
Expansion status: not assessed in current evidence packet
Allele repeat count: not available
Methylation / repeat interruption status: not available

Short-read evidence:
Local region has repetitive sequence
Alignment around repeat is not reliable for repeat sizing
No confident sequence variant reported at the locus

Family evidence:
No repeat-size segregation data available
Parents not assessed for repeat expansion status in this evidence packet

Population / mechanism:
Repeat expansion disease mechanism is not evaluated by ordinary SNV/indel consequence annotation
Absence of a small SNV/indel at this locus does not exclude repeat expansion disease

Service note:
If the phenotype remains suspicious, consider whether the correct test or pathway includes repeat expansion testing, specialist assay, or appropriate clinical discussion`,
      concern:
        "This is not a candidate variant to report from the current data. It is a limitation/differential point: the current analysis may not exclude a repeat expansion disorder if that remains clinically suspected.",
    },
    {
      id: "candidate-4",
      label: "Candidate 4",
      gene: "CNVREG4",
      variant: "chr15:44190120-44218090 deletion",
      zygosity: "Possible heterozygous deletion",
      consequence: "copy_number_loss",
      inheritanceSignal: "Unclear; not confidently called in parents",
      clinicalFit:
        "The region contains one gene with limited neurological evidence, but the CNV is small and technically low-confidence.",
      rawEvidence: `CNV REGION: chr15:44190120-44218090
CNV type: possible deletion
Estimated size: 28 kb
Copy-number state: possible one-copy loss

Key genes in interval:
CNVREG4 — limited neurological evidence
Partial exon overlap only

Known disease association:
No established syndrome in local summary
Gene-disease evidence limited

Inheritance:
Proband: possible deletion called
Mother: no confident call
Father: no confident call
Inheritance signal: unclear because parental data around this region has low target coverage

CNV caller summary:
Caller 1: deletion LOW_CONFIDENCE
Caller 2: not called
Quality score: 22
Number of targets/windows affected: 3

Read-depth evidence:
Expected normalised depth in diploid regions: ~1.00
Proband normalised depth across interval: ~0.76
Mother normalised depth across interval: noisy, range ~0.82–1.08
Father normalised depth across interval: noisy, range ~0.79–1.10

Breakpoint evidence:
Split reads: none
Paired-end evidence: not convincing
Breakpoint not resolved

Population:
Overlapping small deletions observed in population CNV summary
Benign/likely benign partial overlaps reported in local summary

Technical notes:
Low number of affected windows
No second-caller support
No clear B-allele pattern
Local coverage variability warning
Manual CNV plot review recommended if clinically pursued`,
      concern:
        "This is not a strong candidate. It is low-confidence, small, poorly supported, and has limited gene-disease evidence.",
    },
  ],

  decisionCheckpoints: [
    {
      id: "checkpoint-1",
      title: "Checkpoint 1 — Recognise when a candidate is real but insufficient",
      context:
        "Candidate 2 is a technically convincing heterozygous stop-gained variant in ATXG2, a recessive ataxia gene. However, only one inherited paternal allele is shown and no second allele is identified in the current evidence.",
      question:
        "What is the safest interpretation of Candidate 2?",
      options: [
        {
          label: "A",
          text: "Treat it as diagnostic because a stop-gained variant in a recessive ataxia gene is high-impact.",
          isCorrect: false,
          feedback:
            "Not quite. For a recessive biallelic condition, one heterozygous loss-of-function variant is not enough by itself.",
        },
        {
          label: "B",
          text: "Treat it as technically convincing but incomplete for a recessive diagnosis without a second allele or other supporting mechanism.",
          isCorrect: true,
          feedback:
            "Correct. Candidate 2 may be worth documenting, but it does not currently provide a complete recessive explanation.",
        },
        {
          label: "C",
          text: "Dismiss it entirely because inherited variants from unaffected parents cannot contribute to rare disease.",
          isCorrect: false,
          feedback:
            "Not quite. Inherited variants can matter, especially in recessive disease. The issue is that only one allele is shown.",
        },
      ],
      teachingPoint:
        "A technically convincing variant can still be incomplete evidence for the disease model.",
    },
    {
      id: "checkpoint-2",
      title: "Checkpoint 2 — Understand a test limitation",
      context:
        "Candidate 3 is not a sequence variant. It represents a clinical differential: a repeat expansion disorder remains possible, but repeat sizing is not reported in the current evidence packet.",
      question:
        "What is the safest conclusion about Candidate 3?",
      options: [
        {
          label: "A",
          text: "Conclude that the current SNV/indel analysis excludes repeat expansion disease at this locus.",
          isCorrect: false,
          feedback:
            "Not quite. Standard SNV/indel analysis may not assess repeat expansion size. Absence of a small variant does not exclude a repeat expansion disorder.",
        },
        {
          label: "B",
          text: "Conclude that the repeat expansion diagnosis is confirmed because the phenotype remains suspicious.",
          isCorrect: false,
          feedback:
            "Not quite. Phenotype suspicion alone does not confirm a repeat expansion. The correct assay or evidence is needed.",
        },
        {
          label: "C",
          text: "Document that repeat expansion status is not assessed here and may require the correct test or pathway if clinically suspected.",
          isCorrect: true,
          feedback:
            "Correct. This is a limitation statement, not a variant interpretation.",
        },
      ],
      teachingPoint:
        "Safe practice includes recognising what the current test does not assess.",
    },
    {
      id: "checkpoint-3",
      title: "Checkpoint 3 — Avoid over-prioritising weak CNV evidence",
      context:
        "Candidate 4 is a possible 28 kb deletion supported by only 3 windows, marked LOW_CONFIDENCE by one caller, not called by a second caller, with noisy parental coverage and limited gene-disease evidence.",
      question:
        "How should Candidate 4 be handled?",
      options: [
        {
          label: "A",
          text: "Treat it as a low-confidence finding and avoid prioritising it without stronger CNV plot, dosage, or clinical evidence.",
          isCorrect: true,
          feedback:
            "Correct. Candidate 4 has multiple technical and clinical limitations.",
        },
        {
          label: "B",
          text: "Report it as explanatory because even a small deletion can sometimes affect neurological disease genes.",
          isCorrect: false,
          feedback:
            "Not quite. CNV interpretation requires technical confidence, gene content, dosage evidence, inheritance, population comparison, and phenotype fit.",
        },
        {
          label: "C",
          text: "Assume it is de novo because the parental calls are not confident enough to prove inheritance.",
          isCorrect: false,
          feedback:
            "Not quite. No confident parental call is not the same as confirmed absence. The parental data are noisy in this region.",
        },
      ],
      teachingPoint:
        "Low-confidence CNVs should not be promoted into strong candidates without adequate technical and clinical support.",
    },
    {
      id: "checkpoint-4",
      title: "Checkpoint 4 — Decide whether there is a clean candidate",
      context:
        "Candidate 1 is technically real but inherited with weak disease fit. Candidate 2 is a single allele in a recessive gene. Candidate 3 is a test limitation/differential point, not a called variant. Candidate 4 is low-confidence.",
      question:
        "What is the best overall conclusion from the current evidence?",
      options: [
        {
          label: "A",
          text: "There is no clean single reportable candidate from the current evidence, so the output should document uncertainty, limitations, and escalation needs.",
          isCorrect: true,
          feedback:
            "Correct. This is the main learning point of the case. Not every analysis produces a clean answer.",
        },
        {
          label: "B",
          text: "Candidate 1 should lead the case because a technically real inherited movement-disorder variant is still plausible.",
          isCorrect: false,
          feedback:
            "Not quite. Technical reality is not enough. Candidate 1 has weak phenotype, inheritance, and mechanism support.",
        },
        {
          label: "C",
          text: "Candidate 4 should lead the case because CNVs should be prioritised when sequence variants are inconclusive.",
          isCorrect: false,
          feedback:
            "Not quite. CNV importance depends on evidence quality and clinical relevance. Candidate 4 is weak.",
        },
      ],
      teachingPoint:
        "A safe clinical bioinformatics conclusion may be that no candidate is currently strong enough, with limitations documented clearly.",
    },
    {
      id: "checkpoint-5",
      title: "Checkpoint 5 — Safe service-style next step",
      context:
        "The current evidence does not produce a clean diagnostic candidate, but there are important points to communicate: a single ATXG2 allele, a repeat-expansion limitation, and a weak CNV call.",
      question:
        "What is the safest next step?",
      options: [
        {
          label: "A",
          text: "Force-rank the candidates and report the least weak finding so the case has a clear molecular conclusion.",
          isCorrect: false,
          feedback:
            "Not quite. Forcing a diagnosis from weak evidence is unsafe.",
        },
        {
          label: "B",
          text: "Document no convincing candidate, note incomplete ATXG2 evidence, flag the repeat-expansion limitation, and escalate for review.",
          isCorrect: true,
          feedback:
            "Correct. This is safe, honest, and reviewable. It communicates what was found, what was not resolved, and what limitations matter.",
        },
        {
          label: "C",
          text: "Remove all uncertain findings from the summary and describe the genome result as completely normal.",
          isCorrect: false,
          feedback:
            "Not quite. Uncertain or incomplete findings may still need documentation or discussion, and test limitations should be visible.",
        },
      ],
      teachingPoint:
        "Safe escalation includes documenting uncertainty, not hiding it or converting it into a false conclusion.",
    },
  ],

  finalReflection:
    "A safe trainee-level conclusion would be that there is no clean single diagnostic candidate from the current evidence. Candidate 1 appears technically real but is weak because it is inherited, outside the key domain, and not a strong fit for the patient’s presentation. Candidate 2 is technically convincing and may be worth documenting, but it is only one inherited heterozygous loss-of-function variant in a recessive gene, with no second allele identified in the current evidence. Candidate 3 is not a called variant; it highlights an important limitation because the current SNV/indel evidence does not assess repeat expansion size, despite the clinical differential. Candidate 4 is a low-confidence CNV with poor support and limited gene-disease evidence. The safest next step is to document that no current candidate is sufficient, make the key limitations visible, and escalate for appropriate clinical/laboratory review rather than forcing an interpretation.",
};