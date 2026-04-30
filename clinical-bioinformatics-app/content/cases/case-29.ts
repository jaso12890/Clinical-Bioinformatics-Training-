export const case29 = {
  id: "case-29",
  slug: "phenotype-mismatch-incidental-looking-candidate-case",
  title: "Case 29: Phenotype mismatch and incidental-looking candidate",
  level: "Intermediate",
  summary:
    "An interpretation-aware rare disease case focused on avoiding over-prioritisation when a technically strong candidate does not fit the patient phenotype or referral question.",

  visualisationExampleId: null,

  assessmentFocus: [
    "Phenotype fit and referral-scope reasoning",
    "Incidental-looking or out-of-scope candidate handling",
    "Canonical splice candidate prioritisation",
    "Age-of-onset mismatch",
    "Technical confidence versus clinical relevance",
    "Safe escalation of possible additional findings",
  ],

  guidedTutorMode: {
    type: "static-rule-based",
    description:
      "Uses built-in hints, checkpoint feedback, model answers, and self-check criteria to support safe case reasoning.",
  },

  phase5Assessment: {
    candidateRanking: {
      prompt:
        "Rank the findings from strongest to weakest as explanations for the referred neurodevelopmental presentation, while also identifying whether any finding may require separate review outside the main referral question.",
      correctOrder: [
        "candidate-2",
        "candidate-1",
        "candidate-4",
        "candidate-3",
      ],
      explanation:
        "Candidate 2 is strongest for the referred neurodevelopmental presentation because phenotype, apparent de novo inheritance, canonical splice consequence, loss-of-function mechanism, population absence, and technical evidence all align. Candidate 1 is technically convincing and potentially important, but it is associated with cardiomyopathy rather than the child’s referred developmental seizure phenotype, so it should not be treated as the main diagnosis; it may need separate review or escalation depending on local policy. Candidate 4 is phenotypically possible because of the epilepsy link, but it is technically fragile and less established than Candidate 2. Candidate 3 is technically real but weakest for the referral because of adult-onset phenotype mismatch, inheritance from an unaffected father, population evidence, and poor fit to the child’s presentation.",
    },

    escalationDecision: {
      prompt:
        "Choose the safest next action for this case.",
      options: [
        {
          id: "report-cardiomyopathy-as-main-diagnosis",
          label: "A",
          decision:
            "Report Candidate 1 as the main diagnosis because it is technically strong, de novo, and stop-gained.",
          isBest: false,
          feedback:
            "Review this choice. Candidate 1 is technically convincing, but it does not fit the referred neurodevelopmental phenotype and should not be forced as the main explanation.",
        },
        {
          id: "prioritise-phenotype-matched-candidate",
          label: "B",
          decision:
            "Prioritise Candidate 2 for formal review as the main phenotype-matched candidate, and document Candidate 1 as a possible separate review or escalation issue.",
          isBest: true,
          feedback:
            "Best decision. Candidate 2 best explains the referral question, while Candidate 1 may still require careful handling through the appropriate local pathway.",
        },
        {
          id: "ignore-out-of-scope-finding",
          label: "C",
          decision:
            "Ignore Candidate 1 completely because it does not match the neurodevelopmental phenotype.",
          isBest: false,
          feedback:
            "Review this choice. A technically convincing finding in another disease area may still need documentation or escalation depending on local scope and policy.",
        },
      ],
    },

    writtenSummary: {
      prompt:
        "Write a short trainee-level handover summary explaining which candidate best explains the referred phenotype, why the cardiomyopathy candidate should not be treated as the main diagnosis, and what should happen next.",
      checklist: [
        "Names Candidate 2 as the strongest explanation for the referred neurodevelopmental presentation.",
        "Mentions Candidate 2 evidence: de novo inheritance, canonical splice donor consequence, loss-of-function mechanism, phenotype fit, population absence, and technical support.",
        "Explains that Candidate 1 is technically convincing and potentially important.",
        "Explains that Candidate 1 is phenotype-mismatched because CARDMY1 is associated with cardiomyopathy rather than developmental delay, seizures, hypotonia, or dysmorphic features.",
        "Avoids forcing Candidate 1 as the main diagnosis.",
        "States that Candidate 1 may require separate review or escalation depending on local policy and scope.",
        "Explains why Candidate 3 is weaker because of adult-onset phenotype mismatch, inheritance, and population evidence.",
        "Explains why Candidate 4 is weaker because it is technically fragile despite possible epilepsy relevance.",
        "Recommends formal review/escalation rather than treating any finding as an automatic final diagnosis.",
      ],
      modelAnswer:
        "Candidate 2 is the strongest current finding for the referred neurodevelopmental presentation. It is an apparent de novo canonical splice donor variant in NDDPH2, a gene associated with developmental delay, severe speech delay, seizures, hypotonia and dysmorphic features, and the variant fits a reported loss-of-function mechanism. It is absent from population data and has strong technical support. Candidate 1 is technically convincing and potentially important because it is an apparent de novo stop-gained variant in CARDMY1, but CARDMY1 is associated with cardiomyopathy rather than the child’s referred neurodevelopmental seizure phenotype. It should therefore not be forced as the main explanation, although it may need separate review or escalation depending on local scope and policy. Candidate 3 is technically real but weakened by adult-onset phenotype mismatch, inheritance from an unaffected father and population evidence. Candidate 4 is phenotypically possible but technically fragile. The safest next step is to prioritise Candidate 2 for formal review, document the phenotype-mismatch reasoning for Candidate 1, and escalate any possible out-of-scope finding appropriately.",
    },
  },

  reasoningScorecard: [
    {
      category: "Phenotype-fit reasoning",
      maxScore: 2,
      expectation:
        "Prioritises the candidate that best explains the referred neurodevelopmental presentation rather than the most severe-looking variant overall.",
    },
    {
      category: "Scope and incidental-looking finding handling",
      maxScore: 2,
      expectation:
        "Recognises that a technically convincing cardiomyopathy candidate may require separate review or escalation but should not be treated as the main explanation for the referral phenotype.",
    },
    {
      category: "Technical confidence",
      maxScore: 2,
      expectation:
        "Distinguishes technically robust findings from technically fragile findings and avoids allowing a weak read-level call to outrank a stronger candidate.",
    },
    {
      category: "Age-of-onset and disease-spectrum fit",
      maxScore: 2,
      expectation:
        "Uses age-of-onset and disease-spectrum mismatch to deprioritise the adult-onset neurological candidate.",
    },
    {
      category: "Safe escalation",
      maxScore: 2,
      expectation:
        "Recommends formal review, documentation of phenotype mismatch, and appropriate pathway escalation without overclaiming a final diagnosis.",
    },
  ],

  patient: {
    age: 6,
    sex: "Male",
  },

  referralReason:
    "A 6-year-old boy has been referred for rare disease genome analysis because of developmental delay, severe speech delay, seizures, hypotonia, and mild dysmorphic features.",

  testType: "Rare disease trio genome sequencing",

  familyStructure:
    "The proband and both biological parents have been tested. Both parents are reportedly unaffected.",

  history: [
    "Global developmental delay noted from infancy",
    "Severe expressive speech delay",
    "Seizures beginning at age 3",
    "Hypotonia in early childhood",
    "Mild dysmorphic features noted by clinical genetics",
    "No known previous molecular diagnosis",
  ],

  phenotype: [
    "Global developmental delay",
    "Severe speech delay",
    "Seizures",
    "Hypotonia",
    "Mild dysmorphic features",
  ],

  familyHistory:
    "Both parents are reportedly unaffected. No known family history of developmental delay, seizures, hypotonia, dysmorphic features, cardiomyopathy, cancer predisposition, or adult-onset neurological disease is documented in the information shown.",

  serviceContext: [
    "The analysis is being performed in a rare disease service context.",
    "The key issue is phenotype fit and scope.",
    "A variant can be technically convincing and even high-impact, but still be a poor explanation if the gene-disease association does not match the patient phenotype or referral question.",
    "Your task is to decide which candidate best explains the referred presentation and which findings may need caution, documentation, or separate escalation rather than being treated as the main diagnosis.",
  ],

  candidateFindings: [
    {
      id: "candidate-1",
      label: "Candidate 1",
      gene: "CARDMY1",
      variant: "chr14:22901881 C>T",
      zygosity: "Heterozygous",
      consequence: "stop_gained",
      inheritanceSignal: "Apparent de novo with good parental coverage",
      clinicalFit:
        "CARDMY1 is associated with autosomal dominant cardiomyopathy. The variant is technically convincing and high-impact, but the child’s referral phenotype is neurodevelopmental with seizures, and there is no cardiomyopathy information in the current referral.",
      rawEvidence: `GENE: CARDMY1
Known disease association: autosomal dominant cardiomyopathy
Reported inheritance: autosomal dominant
Known mechanism: loss-of-function / haploinsufficiency in cardiac muscle disease
Main reported phenotype: cardiomyopathy, arrhythmia risk, adult or adolescent cardiac presentation in local summary

Variant:
chr14:22901881 C>T
Transcript: NM_290001.4
HGVS: c.1006C>T p.(Arg336*)
Consequence: stop_gained
Predicted effect: premature termination codon
Predicted NMD: likely

VCF-style fields:
QUAL=902
FILTER=PASS
INFO: DP=52;MQ=60;QD=17.3;SOR=0.74
FORMAT: GT:AD:DP:GQ

Proband: 0/1:26,26:52:99
Mother: 0/0:44,0:44:99
Father: 0/0:42,0:42:99

Read-level notes:
ALT reads seen on both forward and reverse strands
ALT reads distributed across read positions
High mapping quality for ALT-supporting reads
No local low-complexity warning
No pseudogene or segmental duplication warning
No concerning soft-clipping around the variant
Second caller: detected

Population:
gnomAD AF = not observed
gnomAD allele count = 0

Constraint:
LOEUF = 0.20
pLI = 0.98

ClinVar-style summary:
No exact matching variant record found in local summary
Other truncating variants in CARDMY1 have been submitted as pathogenic/likely pathogenic in cardiomyopathy cases
No local summary linking CARDMY1 to developmental delay, seizures, hypotonia, or dysmorphic features

Scope note:
This may require separate consideration depending on local policy and clinical context, but it should not be assumed to explain the neurodevelopmental referral phenotype.`,
      concern:
        "This is technically convincing and potentially important, but it is not the best explanation for the referred neurodevelopmental phenotype. It may need separate review/escalation depending on service policy, rather than being treated as the main diagnosis.",
    },
    {
      id: "candidate-2",
      label: "Candidate 2",
      gene: "NDDPH2",
      variant: "chr7:118902440 G>A",
      zygosity: "Heterozygous",
      consequence: "splice_donor_variant",
      inheritanceSignal: "Apparent de novo with good parental coverage",
      clinicalFit:
        "NDDPH2 is associated with an autosomal dominant neurodevelopmental disorder including developmental delay, severe speech delay, seizures, hypotonia, and dysmorphic features. Loss-of-function is a reported mechanism.",
      rawEvidence: `GENE: NDDPH2
Known disease association: autosomal dominant neurodevelopmental disorder
Reported inheritance: autosomal dominant
Known mechanism: haploinsufficiency / loss-of-function

Variant:
chr7:118902440 G>A
Transcript: NM_290002.5
HGVS: c.744+1G>A
Consequence: splice_donor_variant
Splice position: canonical +1 donor site
Predicted effect: likely donor splice-site disruption

VCF-style fields:
QUAL=940
FILTER=PASS
INFO: DP=54;MQ=60;QD=17.4;SOR=0.70
FORMAT: GT:AD:DP:GQ

Proband: 0/1:27,27:54:99
Mother: 0/0:45,0:45:99
Father: 0/0:43,0:43:99

Read-level notes:
ALT reads seen on both forward and reverse strands
ALT reads distributed across read positions
High mapping quality for ALT-supporting reads
No local low-complexity warning
No pseudogene or segmental duplication warning
No concerning soft-clipping around the variant
Second caller: detected

Population:
gnomAD AF = not observed
gnomAD allele count = 0

Constraint:
LOEUF = 0.16
pLI = 0.99

ClinVar-style summary:
No exact matching variant record found in local summary
Other canonical splice-site and truncating variants in NDDPH2 have been submitted as pathogenic/likely pathogenic in affected individuals
Reported phenotypes overlap with developmental delay, severe speech delay, seizures, hypotonia, and dysmorphic features`,
      concern:
        "This is the strongest current candidate because the phenotype, apparent de novo inheritance, canonical splice consequence, loss-of-function mechanism, population absence, and technical evidence all align with the referral question.",
    },
    {
      id: "candidate-3",
      label: "Candidate 3",
      gene: "ADULTN5",
      variant: "chr3:77219044 A>G",
      zygosity: "Heterozygous",
      consequence: "missense_variant",
      inheritanceSignal: "Inherited from unaffected father",
      clinicalFit:
        "ADULTN5 is associated with an adult-onset neurological condition. The child’s presentation is early-onset neurodevelopmental disease with seizures and dysmorphic features, which does not match the known ADULTN5 phenotype well.",
      rawEvidence: `GENE: ADULTN5
Known disease association: autosomal dominant adult-onset neurological disorder
Reported inheritance: autosomal dominant
Known mechanism: recurrent missense variants in adult-onset disease
Main reported phenotype: adult-onset neuropathy / movement symptoms in local summary

Variant:
chr3:77219044 A>G
Transcript: NM_290003.2
HGVS: c.1280A>G p.(Tyr427Cys)
Consequence: missense_variant
Protein domain: outside recognised recurrent pathogenic region in local summary

VCF-style fields:
QUAL=688
FILTER=PASS
INFO: DP=46;MQ=60;QD=15.0;SOR=0.82
FORMAT: GT:AD:DP:GQ

Proband: 0/1:23,23:46:99
Mother: 0/0:39,0:39:99
Father: 0/1:21,22:43:99

Read-level notes:
ALT reads seen on both forward and reverse strands
ALT reads distributed across read positions
No local mapping warning
No soft-clipping concern

Population:
gnomAD AF = 0.0006
gnomAD allele count = 160
Homozygotes observed in population summary = 0

Constraint:
LOEUF = 0.72
pLI = 0.18

ClinVar-style summary:
No exact matching pathogenic record found in local summary
Known pathogenic variants in ADULTN5 are mainly adult-onset and phenotype-specific
No strong local evidence connecting this gene to early childhood developmental delay with seizures`,
      concern:
        "This is technically real, but it is weak for the referred presentation because of phenotype mismatch, age-of-onset mismatch, inheritance from an unaffected father, and population evidence.",
    },
    {
      id: "candidate-4",
      label: "Candidate 4",
      gene: "SEIZPH7",
      variant: "chr11:44190220 T>C",
      zygosity: "Heterozygous",
      consequence: "missense_variant",
      inheritanceSignal: "Apparent de novo, but technically fragile",
      clinicalFit:
        "SEIZPH7 has a possible developmental epilepsy association, but the raw technical evidence is weak and the gene-disease evidence is less established than Candidate 2.",
      rawEvidence: `GENE: SEIZPH7
Known disease association: possible autosomal dominant developmental epilepsy
Reported inheritance: autosomal dominant proposed in limited reports
Known mechanism: uncertain; missense variants in constrained regions proposed

Variant:
chr11:44190220 T>C
Transcript: NM_290004.1
HGVS: c.944T>C p.(Leu315Pro)
Consequence: missense_variant
Protein domain: near possible functional region, but not a known recurrent hotspot

VCF-style fields:
QUAL=48
FILTER=PASS
INFO: DP=31;MQ=42;QD=1.5;SOR=5.8
FORMAT: GT:AD:DP:GQ

Proband: 0/1:25,6:31:45
Mother: 0/0:37,0:37:99
Father: 0/0:36,0:36:99

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
LOEUF = 0.43
pLI = 0.76

ClinVar-style summary:
No exact matching variant record found in local summary
Nearby missense variants in SEIZPH7 have been submitted in epilepsy phenotypes, but evidence remains limited`,
      concern:
        "This is phenotypically possible but technically fragile. It should not outrank a technically strong, mechanism-compatible canonical splice candidate.",
    },
  ],

  decisionCheckpoints: [
    {
      id: "checkpoint-1",
      title: "Checkpoint 1 — Technically strong does not mean phenotype-relevant",
      context:
        "Candidate 1 is a technically convincing apparent de novo stop-gained variant in CARDMY1, but CARDMY1 is associated with cardiomyopathy rather than the child’s neurodevelopmental seizure phenotype.",
      question:
        "What is the safest interpretation of Candidate 1?",
      options: [
        {
          label: "A",
          text: "It should automatically be treated as the main diagnosis because it is de novo and stop-gained.",
          isCorrect: false,
          feedback:
            "Not quite. Technical strength and consequence severity do not make a candidate explain the referred phenotype if the gene-disease association does not fit.",
        },
        {
          label: "B",
          text: "It is technically convincing and may need separate review, but it should not be assumed to explain the neurodevelopmental referral phenotype.",
          isCorrect: true,
          feedback:
            "Correct. Candidate 1 may be important, but it is phenotype-mismatched for the main referral question.",
        },
        {
          label: "C",
          text: "It must be ignored completely because it is not neurodevelopmental.",
          isCorrect: false,
          feedback:
            "Not quite. A possible unrelated or incidental-looking finding may need appropriate review depending on local scope and policy.",
        },
      ],
      teachingPoint:
        "A high-impact variant in the wrong disease context should not be forced into explaining the patient’s presentation.",
    },
    {
      id: "checkpoint-2",
      title: "Checkpoint 2 — Identify the phenotype-matched candidate",
      context:
        "Candidate 2 is a de novo canonical splice donor variant in NDDPH2, a gene associated with developmental delay, severe speech delay, seizures, hypotonia, and dysmorphic features.",
      question:
        "Why is Candidate 2 the strongest candidate for the referred presentation?",
      options: [
        {
          label: "A",
          text: "Because phenotype, inheritance, canonical splice consequence, loss-of-function mechanism, population absence, and technical evidence align with the referral question.",
          isCorrect: true,
          feedback:
            "Correct. Candidate 2 has the strongest overall fit to the clinical question being asked.",
        },
        {
          label: "B",
          text: "Because every splice variant is automatically diagnostic.",
          isCorrect: false,
          feedback:
            "Not quite. Candidate 2 is strong because the splice consequence fits the gene mechanism and case context, not because all splice variants are diagnostic.",
        },
        {
          label: "C",
          text: "Because it has the shortest gene name.",
          isCorrect: false,
          feedback:
            "Not quite. Candidate strength comes from evidence, not superficial features.",
        },
      ],
      teachingPoint:
        "The strongest candidate is the one that best explains the referred phenotype with supported genetic and technical evidence.",
    },
    {
      id: "checkpoint-3",
      title: "Checkpoint 3 — Age-of-onset and phenotype mismatch",
      context:
        "Candidate 3 is in ADULTN5, a gene mainly associated with adult-onset neurological disease. The proband has an early-childhood neurodevelopmental presentation with seizures and dysmorphic features.",
      question:
        "Why is Candidate 3 weak for this case?",
      options: [
        {
          label: "A",
          text: "Because inherited variants are always artefacts.",
          isCorrect: false,
          feedback:
            "Not quite. Candidate 3 appears technically real. The issue is clinical relevance.",
        },
        {
          label: "B",
          text: "Because the age of onset, phenotype, inheritance, and population evidence do not fit the referred childhood neurodevelopmental presentation well.",
          isCorrect: true,
          feedback:
            "Correct. Candidate 3 is weak because it does not match the case context well.",
        },
        {
          label: "C",
          text: "Because adult-onset genes can never be relevant to children.",
          isCorrect: false,
          feedback:
            "Not quite. There can be exceptions, but this evidence does not support Candidate 3 as the main explanation.",
        },
      ],
      teachingPoint:
        "Phenotype fit includes age of onset, disease spectrum, and whether the gene actually explains the patient’s main features.",
    },
    {
      id: "checkpoint-4",
      title: "Checkpoint 4 — Phenotype possibility does not override weak technical evidence",
      context:
        "Candidate 4 is in a possible developmental epilepsy gene and appears de novo, but it has low ALT support, strand bias, read-end clustering, soft-clipping, and no second-caller support.",
      question:
        "What is the safest interpretation of Candidate 4?",
      options: [
        {
          label: "A",
          text: "It should be prioritised because the gene name sounds relevant to seizures.",
          isCorrect: false,
          feedback:
            "Not quite. Gene relevance does not override weak technical evidence.",
        },
        {
          label: "B",
          text: "It is impossible to consider because technically weak variants are always false.",
          isCorrect: false,
          feedback:
            "Not quite. It may not be false, but it is too fragile for confident prioritisation without review.",
        },
        {
          label: "C",
          text: "It is phenotypically possible but technically fragile, so it should not outrank Candidate 2 without read-level review.",
          isCorrect: true,
          feedback:
            "Correct. Candidate 4 needs technical caution.",
        },
      ],
      teachingPoint:
        "A plausible phenotype match still needs reliable raw evidence.",
    },
    {
      id: "checkpoint-5",
      title: "Checkpoint 5 — Safe service-style next step",
      context:
        "Candidate 2 is the strongest explanation for the referred neurodevelopmental presentation. Candidate 1 is technically strong but phenotype-mismatched and may represent a separate scope/escalation issue.",
      question:
        "What is the safest next step?",
      options: [
        {
          label: "A",
          text: "Prioritise Candidate 2 for review as the main phenotype-matched candidate, document Candidate 1 as a possible separate review/escalation issue, and explain why Candidates 3 and 4 are weaker.",
          isCorrect: true,
          feedback:
            "Correct. This separates the main diagnostic reasoning from possible additional scope considerations.",
        },
        {
          label: "B",
          text: "Report Candidate 1 as the main diagnosis because it is the most severe-looking variant.",
          isCorrect: false,
          feedback:
            "Not quite. Candidate 1 does not fit the referred phenotype.",
        },
        {
          label: "C",
          text: "Ignore Candidate 1 without documenting anything because it is not related to the main phenotype.",
          isCorrect: false,
          feedback:
            "Not quite. Depending on scope and local policy, a technically convincing finding in another disease area may need appropriate documentation or escalation.",
        },
      ],
      teachingPoint:
        "Safe practice means prioritising the phenotype-matched candidate while handling possible incidental or out-of-scope findings through the correct pathway.",
    },
  ],

  finalReflection:
    "A safe trainee-level conclusion would be that Candidate 2 is the strongest current candidate for the referred neurodevelopmental presentation because the phenotype, apparent de novo inheritance, canonical splice consequence, loss-of-function mechanism, population absence, and technical evidence all align. Candidate 1 is technically convincing and potentially important, but it is associated with cardiomyopathy rather than the child’s referred developmental seizure phenotype, so it should not be forced as the main explanation; depending on local scope and policy, it may require separate review or escalation. Candidate 3 is technically real but weakened by adult-onset phenotype mismatch, inheritance, and population evidence. Candidate 4 is phenotypically possible but technically fragile. The safest next step is to prioritise Candidate 2, document the phenotype-mismatch reasoning for Candidate 1, and escalate any possible out-of-scope finding appropriately.",
};