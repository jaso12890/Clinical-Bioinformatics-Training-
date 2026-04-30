export const case16 = {
  id: "case-16",
  slug: "strand-bias-read-position-artefact-case",
  title: "Case 16: Strand bias and read-position artefact",
  level: "Intermediate",
  summary:
    "A technical confidence case focused on recognising when strand bias, read-end clustering, low allele support, and artefact-like patterns mean there is no clean candidate to prioritise.",

  visualisationExampleId: null,

  assessmentFocus: [
    "Strand bias interpretation",
    "Read-position artefact recognition",
    "Low allele support review",
    "Non-canonical splice caution",
    "No-clean-candidate reasoning",
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
        "Rank the findings from strongest to weakest based on technical reliability, phenotype fit, inheritance, consequence, gene-disease evidence, artefact risk, and whether each finding should drive the case conclusion.",
      correctOrder: ["candidate-1", "candidate-3", "candidate-2"],
      explanation:
        "Candidate 1 is the most clinically tempting because the gene and phenotype overlap are plausible and the variant appears de novo, but it is not strong enough to prioritise because the technical evidence is fragile. Candidate 3 is technically real and cleaner than the others, but it is clinically weak because it is inherited from an unaffected parent, relatively frequent, and has broad gene-disease support rather than a specific fit. Candidate 2 is weakest because it combines weak technical evidence with a non-canonical splice-region consequence, limited splice prediction support, and limited gene-disease evidence. Overall, the safest case conclusion is that no finding is currently clean enough to drive a diagnostic interpretation.",
    },

    escalationDecision: {
      prompt:
        "Choose the safest next action for this case when the most interesting findings have major technical limitations.",
      options: [
        {
          id: "prioritise-candidate-1",
          label: "A",
          decision:
            "Prioritise Candidate 1 as the lead finding because it is apparently de novo, absent from population data, and in a plausible ataxia-related gene.",
          isBest: false,
          feedback:
            "Review this choice. Candidate 1 is clinically tempting, but the low allele balance, strand bias, read-end clustering, soft-clipping, lower mapping quality, and lack of second-caller support make it unsafe to prioritise without further review.",
        },
        {
          id: "document-no-clean-candidate",
          label: "B",
          decision:
            "Document that no clean candidate is identified, flag the artefact-like evidence in Candidates 1 and 2, and escalate uncertainty for review.",
          isBest: true,
          feedback:
            "Best decision. This case is designed to test whether the learner can avoid forcing a candidate when the available findings are either technically fragile or clinically weak.",
        },
        {
          id: "prioritise-candidate-3",
          label: "C",
          decision:
            "Prioritise Candidate 3 because a technically clean inherited variant is safer to take forward than artefact-like de novo candidates.",
          isBest: false,
          feedback:
            "Review this choice. Candidate 3 is technically real, but its inheritance, population frequency, broad gene-disease evidence, and weak phenotype specificity make it a poor lead explanation.",
        },
      ],
    },

    writtenSummary: {
      prompt:
        "Write a short trainee-level handover summary explaining why there is no clean candidate, which technical artefact concerns matter, why Candidate 3 is still weak, and what the safest next step should be.",
      checklist: [
        "States that no clean candidate is currently strong enough to prioritise.",
        "Explains why Candidate 1 is clinically tempting but technically fragile.",
        "Mentions strand bias, read-end clustering, soft-clipping, low allele balance, lower mapping quality, or lack of second-caller support for Candidate 1.",
        "Explains why Candidate 2 is weak because both splice evidence and technical evidence are limited.",
        "Mentions that Candidate 2 is non-canonical rather than a strong canonical splice-site variant.",
        "Explains why Candidate 3 is technically real but clinically weak.",
        "Mentions Candidate 3 inheritance from an unaffected father and population frequency.",
        "Avoids choosing the least weak candidate as diagnostic.",
        "Recommends documentation of uncertainty and appropriate review/escalation.",
      ],
      modelAnswer:
        "There is no clean candidate to prioritise from the current evidence. Candidate 1 is clinically tempting because it appears de novo and lies in a plausible episodic ataxia-neurodevelopmental gene, but the call is technically fragile: the allele balance is low, the ALT reads are mostly on one strand, most supporting reads occur near read ends, soft-clipping and nearby mismatches are present, mapping quality is reduced, and a second caller does not detect the variant. Candidate 2 is also weak because it is a non-canonical splice-region variant with only weak/moderate predicted splice effect, limited gene-disease evidence, low ALT support, high strand bias, read-end clustering, soft-clipping, and no second-caller support. Candidate 3 appears technically real, but it is inherited from an unaffected father, relatively frequent in population data, and has broad rather than specific phenotype support. The safest next step is to document that no current finding is sufficient, make the technical artefact concerns visible, and escalate for appropriate review rather than forcing a diagnostic interpretation.",
    },
  },

  reasoningScorecard: [
    {
      category: "Artefact recognition",
      maxScore: 2,
      expectation:
        "Recognises that strand bias, read-end clustering, soft-clipping, nearby mismatches, lower mapping quality, and lack of second-caller support can weaken an apparently interesting call.",
    },
    {
      category: "Technical confidence",
      maxScore: 2,
      expectation:
        "Uses allele balance, depth, genotype quality, mapping quality, strand support, read-position distribution, and local sequence context to assess reliability.",
    },
    {
      category: "Splice-region caution",
      maxScore: 2,
      expectation:
        "Distinguishes a weak non-canonical splice-region candidate from a strong canonical splice-site candidate, especially when technical evidence is poor.",
    },
    {
      category: "No-clean-candidate reasoning",
      maxScore: 2,
      expectation:
        "Recognises when none of the current findings is strong enough to drive the case conclusion.",
    },
    {
      category: "Safe escalation",
      maxScore: 2,
      expectation:
        "Documents uncertainty clearly and escalates for appropriate review without forcing the least weak candidate into a diagnostic conclusion.",
    },
  ],

  patient: {
    age: 6,
    sex: "Female",
  },

  referralReason:
    "A 6-year-old girl has been referred for rare disease genome analysis because of developmental delay, episodic ataxia, mild seizures, and learning difficulties.",

  testType: "Rare disease trio genome sequencing",

  familyStructure:
    "The proband and both biological parents have been tested. Both parents are reportedly unaffected.",

  history: [
    "Global developmental delay noted in early childhood",
    "Episodes of unsteady gait and ataxia",
    "Mild seizures beginning at age 5",
    "Learning difficulties requiring school support",
    "No known previous molecular diagnosis",
    "No similarly affected relatives reported",
  ],

  phenotype: [
    "Global developmental delay",
    "Episodic ataxia",
    "Mild seizures",
    "Learning difficulties",
  ],

  familyHistory:
    "Both parents are unaffected. No known family history of ataxia, seizures, developmental delay, or a similar neurological presentation.",

  serviceContext: [
    "The analysis is being performed in a rare disease service context.",
    "The filtering workflow has returned several rare or apparently interesting candidates.",
    "The main issue is that the strongest-looking candidates all have technical warning signs.",
    "Your task is to decide whether any candidate is strong enough to prioritise, or whether the safest output is documented uncertainty and technical caution.",
  ],

  candidateFindings: [
    {
      id: "candidate-1",
      label: "Candidate 1",
      gene: "ATAXD8",
      variant: "chr2:44190217 C>T",
      zygosity: "Heterozygous",
      consequence: "missense_variant",
      inheritanceSignal: "Apparent de novo, but technically weak",
      clinicalFit:
        "ATAXD8 is associated with an autosomal dominant episodic ataxia-neurodevelopmental disorder. The phenotype overlap is plausible, but the variant has multiple read-level warning signs.",
      rawEvidence: `GENE: ATAXD8
Known disease association: autosomal dominant episodic ataxia-neurodevelopmental disorder
Reported inheritance: autosomal dominant
Known mechanism: de novo missense variants in constrained functional domains

Variant:
chr2:44190217 C>T
Transcript: NM_160001.3
HGVS: c.1198C>T p.(Arg400Trp)
Consequence: missense_variant
Protein domain: near functional domain, but not a known recurrent hotspot

VCF-style fields:
QUAL=44
FILTER=PASS
INFO: DP=32;MQ=43;QD=1.4;SOR=6.4
FORMAT: GT:AD:DP:GQ

Proband: 0/1:26,6:32:46
Mother: 0/0:38,0:38:99
Father: 0/0:35,0:35:99

Allele balance:
Proband ALT fraction = 6 / 32 = 18.8%

Read-level notes:
ALT reads mostly on reverse strand
5 of 6 ALT reads occur within the final 12 bases of the read
Several ALT-supporting reads show nearby mismatches
Soft-clipping present in some supporting reads
Local low-complexity warning present
Second caller: not detected

Population:
gnomAD AF = not observed
gnomAD allele count = 0

Constraint:
LOEUF = 0.29
pLI = 0.94

ClinVar-style summary:
No exact matching variant record found in local summary
Gene has disease-associated missense variants, but this exact variant is not previously summarised`,
      concern:
        "This is clinically tempting because it appears de novo and the gene fits the broad phenotype, but the low allele balance, strand bias, read-end clustering, soft-clipping, and lack of second-caller support make it technically fragile.",
    },
    {
      id: "candidate-2",
      label: "Candidate 2",
      gene: "SEIZAT4",
      variant: "chr8:77221104 G>A",
      zygosity: "Heterozygous",
      consequence: "splice_region_variant",
      inheritanceSignal: "Apparent de novo, but low-confidence call",
      clinicalFit:
        "SEIZAT4 has a possible neurodevelopmental epilepsy association, but the splice-region consequence is non-canonical and the technical evidence is weak.",
      rawEvidence: `GENE: SEIZAT4
Known disease association: possible autosomal dominant neurodevelopmental epilepsy
Reported inheritance: autosomal dominant proposed in limited reports
Known mechanism: uncertain; some splice-disrupting variants reported but evidence limited

Variant:
chr8:77221104 G>A
Transcript: NM_160002.2
HGVS: c.604+5G>A
Consequence: splice_region_variant
Splice position: +5 donor region, outside canonical +1/+2 splice donor site
Splice prediction summary: weak/moderate predicted splice effect in local summary

VCF-style fields:
QUAL=36
FILTER=PASS
INFO: DP=29;MQ=40;QD=1.2;SOR=7.1
FORMAT: GT:AD:DP:GQ

Proband: 0/1:24,5:29:39
Mother: 0/0:33,0:33:99
Father: 0/0:31,0:31:99

Allele balance:
Proband ALT fraction = 5 / 29 = 17.2%

Read-level notes:
ALT reads almost entirely on one strand
4 of 5 ALT reads occur close to read ends
Base qualities for ALT reads are mixed
Soft-clipping present near the variant position
Local repetitive sequence flag present
Second caller: not detected
Manual read-level review recommended before prioritisation

Population:
gnomAD AF = not observed
gnomAD allele count = 0

Constraint:
LOEUF = 0.55
pLI = 0.41

ClinVar-style summary:
No exact matching variant record found in local summary
Gene-disease relationship remains limited in available summary`,
      concern:
        "This should not be prioritised as a strong splice candidate. The consequence is non-canonical, the gene evidence is limited, and the technical signal is weak.",
    },
    {
      id: "candidate-3",
      label: "Candidate 3",
      gene: "NEUROREAL3",
      variant: "chr14:88912043 T>C",
      zygosity: "Heterozygous",
      consequence: "missense_variant",
      inheritanceSignal: "Inherited from unaffected father",
      clinicalFit:
        "NEUROREAL3 has a broad neurodevelopmental association. The call is technically clean, but the variant is inherited from an unaffected parent, relatively frequent, and the phenotype match is not specific.",
      rawEvidence: `GENE: NEUROREAL3
Known disease association: broad neurodevelopmental association in limited/moderate reports
Reported inheritance: autosomal dominant proposed with variable evidence
Known mechanism: uncertain

Variant:
chr14:88912043 T>C
Transcript: NM_160003.1
HGVS: c.842T>C p.(Leu281Pro)
Consequence: missense_variant
Protein domain: outside known recurrent functional region in local summary

VCF-style fields:
QUAL=612
FILTER=PASS
INFO: DP=45;MQ=60;QD=13.6;SOR=0.74
FORMAT: GT:AD:DP:GQ

Proband: 0/1:23,22:45:99
Mother: 0/0:39,0:39:99
Father: 0/1:21,20:41:99

Allele balance:
Proband ALT fraction = 22 / 45 = 48.9%
Father ALT fraction = 20 / 41 = 48.8%

Read-level notes:
ALT reads seen on both forward and reverse strands
ALT reads distributed across read positions
No local low-complexity warning
No pseudogene or segmental duplication warning
No concerning soft-clipping around the variant

Population:
gnomAD AF = 0.0015
gnomAD allele count = 410
Homozygotes observed in population summary = 1

Constraint:
LOEUF = 0.76
pLI = 0.12

ClinVar-style summary:
No exact matching pathogenic record found in local summary
Gene-disease relationship remains broad and not strongly phenotype-specific`,
      concern:
        "This is technically convincing as a real inherited variant, but it is not a strong candidate for this severe rare disease presentation because the inheritance, frequency, gene evidence, and phenotype specificity are weak.",
    },
  ],

  decisionCheckpoints: [
    {
      id: "checkpoint-1",
      title: "Checkpoint 1 — Strand bias and read-end clustering",
      context:
        "Candidate 1 appears de novo and is in a plausible ataxia-related gene, but the proband has AD 26,6, GQ 46, MQ 43, QD 1.4, SOR 6.4, and 5 of 6 ALT reads near read ends.",
      question:
        "What is the safest interpretation of Candidate 1?",
      options: [
        {
          label: "A",
          text: "Treat it as clinically tempting but technically fragile, requiring read-level review before any prioritisation.",
          isCorrect: true,
          feedback:
            "Correct. Apparent de novo status and gene fit do not overcome weak allele balance, strand bias, read-end clustering, and soft-clipping concerns.",
        },
        {
          label: "B",
          text: "Treat it as diagnostic because the gene fits the phenotype and the variant is absent from population data.",
          isCorrect: false,
          feedback:
            "Not quite. Population absence and gene fit are not enough when the raw technical evidence is weak.",
        },
        {
          label: "C",
          text: "Treat it as definitely false because all low allele-balance variants are sequencing artefacts.",
          isCorrect: false,
          feedback:
            "Not quite. Low allele balance does not automatically prove artefact, but it should trigger caution and review.",
        },
      ],
      teachingPoint:
        "Strand bias and read-end clustering can make an apparently interesting variant unsafe to prioritise.",
    },
    {
      id: "checkpoint-2",
      title: "Checkpoint 2 — Non-canonical splice plus weak technical evidence",
      context:
        "Candidate 2 is c.604+5G>A, a non-canonical splice-region variant. It has low ALT support, high SOR, read-end clustering, soft-clipping, weak/moderate splice prediction, and no second-caller support.",
      question:
        "What is the best interpretation of Candidate 2?",
      options: [
        {
          label: "A",
          text: "Treat it as high priority because any splice-region annotation can be used as strong splice-disruption evidence.",
          isCorrect: false,
          feedback:
            "Not quite. Non-canonical splice-region variants need supporting evidence. This candidate also has weak technical support.",
        },
        {
          label: "B",
          text: "Treat it as weak because both the non-canonical splice evidence and the technical evidence are limited.",
          isCorrect: true,
          feedback:
            "Correct. Candidate 2 should not be treated like a strong canonical splice-site variant.",
        },
        {
          label: "C",
          text: "Treat it as confirmed benign because variants outside the +1 or +2 positions cannot affect splicing.",
          isCorrect: false,
          feedback:
            "Not quite. Non-canonical splice variants can sometimes matter, but they require stronger supporting evidence than shown here.",
        },
      ],
      teachingPoint:
        "A splice-region annotation is not enough. The exact splice position, prediction strength, read evidence, and gene mechanism all matter.",
    },
    {
      id: "checkpoint-3",
      title: "Checkpoint 3 — Technical reality versus disease relevance",
      context:
        "Candidate 3 is technically clean, with balanced allele support and high GQ/MQ. However, it is inherited from an unaffected father and has gnomAD AF 0.0015.",
      question:
        "What does Candidate 3 illustrate?",
      options: [
        {
          label: "A",
          text: "A technically real variant can still be clinically weak if inheritance, population frequency, and phenotype specificity do not fit well.",
          isCorrect: true,
          feedback:
            "Correct. Candidate 3 is likely a real variant, but not a strong explanation for this case.",
        },
        {
          label: "B",
          text: "A clean technical call should be prioritised above technically weak calls even when the clinical fit is poor.",
          isCorrect: false,
          feedback:
            "Not quite. Technical confidence matters, but the candidate also needs clinical and genetic plausibility.",
        },
        {
          label: "C",
          text: "An inherited variant should be treated as an artefact when the transmitting parent is unaffected.",
          isCorrect: false,
          feedback:
            "Not quite. Inherited variants can be real. The issue is whether they fit the disease model.",
        },
      ],
      teachingPoint:
        "Technical confidence answers whether the call is likely real. It does not automatically answer whether it is relevant.",
    },
    {
      id: "checkpoint-4",
      title: "Checkpoint 4 — Is there a clean candidate?",
      context:
        "Candidate 1 and Candidate 2 are clinically interesting but technically weak. Candidate 3 is technically real but clinically weak.",
      question:
        "What is the best overall conclusion from the current evidence?",
      options: [
        {
          label: "A",
          text: "Candidate 1 should lead the case because it is the most phenotype-compatible finding despite technical concerns.",
          isCorrect: false,
          feedback:
            "Not quite. Choosing the least weak candidate is not safe when the evidence is not strong enough.",
        },
        {
          label: "B",
          text: "There is no clean candidate to prioritise from the current evidence; the technical and clinical limitations should be documented.",
          isCorrect: true,
          feedback:
            "Correct. This case is about recognising when the safest output is uncertainty and escalation, not forced ranking.",
        },
        {
          label: "C",
          text: "Candidate 2 should lead the case because splice-region variants can be prioritised before read-level review.",
          isCorrect: false,
          feedback:
            "Not quite. Candidate 2 has both splice-evidence limitations and technical limitations.",
        },
      ],
      teachingPoint:
        "A safe analysis does not force a candidate when all available findings have major limitations.",
    },
    {
      id: "checkpoint-5",
      title: "Checkpoint 5 — Safe service-style next step",
      context:
        "No candidate is currently strong enough. Candidate 1 and Candidate 2 may need read-level review if clinically pursued. Candidate 3 is technically real but low priority.",
      question:
        "What is the safest next step?",
      options: [
        {
          label: "A",
          text: "Document no convincing candidate from the current evidence, flag the technical artefact concerns, and escalate for review.",
          isCorrect: true,
          feedback:
            "Correct. This is the safest service-style conclusion for a case with no clean candidate.",
        },
        {
          label: "B",
          text: "Ignore all three candidates and state that the genome result is completely normal.",
          isCorrect: false,
          feedback:
            "Not quite. The findings and limitations should be documented. A weak candidate is not the same as no evidence at all.",
        },
        {
          label: "C",
          text: "Report Candidate 1 because apparent de novo status should override read-level concerns.",
          isCorrect: false,
          feedback:
            "Not quite. Apparent de novo status should not override poor technical confidence.",
        },
      ],
      teachingPoint:
        "Safe service work includes documenting uncertainty clearly and avoiding overstatement when technical evidence is weak.",
    },
  ],

  finalReflection:
    "A safe trainee-level conclusion would be that there is no clean candidate to prioritise from the current evidence. Candidate 1 is clinically tempting because it appears de novo in a plausible ataxia-related gene, but the low allele balance, high strand bias, read-end clustering, soft-clipping, lower mapping quality, and lack of second-caller support make it technically fragile. Candidate 2 is also weak because it is a non-canonical splice-region variant with limited splice evidence and similar technical artefact concerns. Candidate 3 appears technically real, but it is inherited from an unaffected father, relatively frequent, and has weak phenotype/gene-disease specificity. The safest next step is to document the technical limitations, avoid forcing a diagnosis, and escalate for appropriate review if the clinical team wants further investigation.",
};