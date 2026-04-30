export const case53 = {
  id: "case-53",
  slug: "duo-analysis-limitation-case",
  title: "Case 53: Duo analysis limitation",
  level: "Advanced",
  summary:
    "A guided case focused on duo analysis where one parent is unavailable, limiting inheritance confidence and de novo interpretation.",

  visualisationExampleId: null,

  assessmentFocus: [
    "Duo analysis limitation",
    "Inheritance uncertainty",
    "Maternally absent variant interpretation",
    "Candidate prioritisation",
    "Technical confidence",
    "Safe communication of uncertainty",
  ],

  guidedTutorMode: {
    type: "static-rule-based",
    description:
      "Uses built-in hints, checkpoint feedback, model answers, and self-check criteria to support safe case reasoning.",
  },

  phase5Assessment: {
    candidateRanking: {
      prompt:
        "Rank the findings from strongest to weakest based on phenotype fit, consequence, technical confidence, and the limitations caused by having only one parent available.",
      correctOrder: [
        "candidate-2",
        "candidate-5",
        "candidate-3",
        "candidate-4",
        "candidate-1",
      ],
      explanation:
        "Candidate 2 is strongest because it has the best convergence across phenotype, gene mechanism, consequence, rarity, and technical confidence, but the missing father means it cannot be called confirmed de novo. Candidate 5 is not a disease candidate, but it is highly important because it explains the duo limitation. Candidate 3 is a real single allele in a recessive gene but does not complete the model. Candidate 4 is a likely real CNV with weak inherited/dosage support. Candidate 1 is technically real but weak because of frequency, broad gene evidence, and poor specificity.",
    },

    escalationDecision: {
      prompt:
        "Choose the safest next action for the leading finding in this duo case.",
      options: [
        {
          id: "escalate-with-duo-limitation",
          label: "A",
          decision:
            "Escalate Candidate 2 for formal review while stating that paternal inheritance and confirmed de novo status cannot be assessed.",
          isBest: true,
          feedback:
            "Best decision. Candidate 2 is strong enough to prioritise, but the missing father means inheritance wording must remain cautious.",
        },
        {
          id: "report-as-de-novo",
          label: "B",
          decision:
            "Report Candidate 2 as confirmed de novo because it is absent from the tested mother and fits the child’s phenotype.",
          isBest: false,
          feedback:
            "Review this choice. Maternal absence does not prove de novo status when the father has not been tested.",
        },
        {
          id: "reject-duo-candidate",
          label: "C",
          decision:
            "Reject Candidate 2 because a duo result cannot support any useful inheritance or candidate-level conclusion.",
          isBest: false,
          feedback:
            "Review this choice. Duo analysis is limited, but it can still support prioritisation when other evidence is strong.",
        },
      ],
    },

    writtenSummary: {
      prompt:
        "Write a short trainee-level handover summary explaining the strongest finding, why it is review-worthy, and what the duo limitation prevents you from saying.",
      checklist: [
        "Names Candidate 2 as the strongest current finding.",
        "Explains the phenotype, consequence, mechanism, rarity, and technical evidence.",
        "States that the variant is absent from the tested mother.",
        "Avoids calling the variant confirmed de novo because the father is unavailable.",
        "Mentions that paternal inheritance and segregation remain limited.",
        "Briefly explains why the other findings are weaker.",
      ],
      modelAnswer:
        "Candidate 2 is the strongest current finding for formal review. It is a rare canonical splice donor variant in a phenotype-compatible neurodevelopmental epilepsy gene, with strong technical support, appropriate loss-of-function mechanism, and absence from the tested mother. However, this is a duo case because the father is unavailable, so the variant should not be described as confirmed de novo. Paternal inheritance, full segregation, and recurrence-risk interpretation remain limited. Candidate 3 is a real single allele in a recessive gene but does not complete a recessive explanation. Candidate 4 is likely a real CNV but has weak dosage and inheritance support, and Candidate 1 is weak because of frequency, broad gene evidence, and poor phenotype specificity. The safest next step is to prioritise Candidate 2 for formal review while clearly documenting the missing paternal sample limitation.",
    },
  },

  reasoningScorecard: [
    {
      category: "Duo limitation awareness",
      maxScore: 2,
      expectation:
        "Recognises that testing only one parent limits de novo interpretation, paternal inheritance assessment, and segregation confidence.",
    },
    {
      category: "Inheritance reasoning",
      maxScore: 2,
      expectation:
        "Avoids calling a variant confirmed de novo when it is absent from the mother but the father is unavailable.",
    },
    {
      category: "Candidate prioritisation",
      maxScore: 2,
      expectation:
        "Prioritises the candidate with the best combined phenotype, mechanism, consequence, rarity, and technical evidence despite limited family data.",
    },
    {
      category: "Technical confidence",
      maxScore: 2,
      expectation:
        "Uses depth, allele balance, mapping quality, read-level evidence, and mother coverage before trusting the candidate.",
    },
    {
      category: "Safe communication",
      maxScore: 2,
      expectation:
        "Communicates a leading candidate while clearly stating what cannot be concluded from duo testing.",
    },
  ],

  patient: {
    age: 5,
    sex: "Female",
  },

  referralReason:
    "A 5-year-old girl has been referred for rare disease genome analysis because of global developmental delay, severe speech delay, epilepsy, hypotonia, feeding difficulties, and mild facial dysmorphism. Only the proband and mother are available for testing. The father is unavailable. The clinical team has asked whether a candidate can be prioritised from the duo data and how the inheritance limitation should be communicated.",

  testType:
    "Rare disease duo genome sequencing with SNV/indel, CNV, phenotype, technical-confidence, and inheritance-limitation review",

  familyStructure:
    "The proband and biological mother have been tested. The father is unavailable for testing. The mother is reportedly unaffected. No known consanguinity is reported, but paternal genotype and segregation information are unavailable.",

  history: [
    "Global developmental delay noted in infancy",
    "Severe expressive speech delay",
    "Epilepsy beginning at age 2",
    "Generalised hypotonia",
    "Feeding difficulties in early childhood",
    "Mild facial dysmorphism noted by clinical genetics",
    "No known previous molecular diagnosis",
    "Mother is reportedly unaffected",
    "Father is unavailable for testing",
    "Clinical team requested a cautious duo-analysis interpretation",
  ],

  phenotype: [
    "Global developmental delay",
    "Severe speech delay",
    "Epilepsy",
    "Hypotonia",
    "Feeding difficulties",
    "Mild facial dysmorphism",
  ],

  familyHistory:
    "The mother is reportedly unaffected. The father is unavailable for testing and no detailed paternal phenotype information is available. There is no documented family history of developmental delay, epilepsy, hypotonia, feeding difficulties, dysmorphism, or a similar neurodevelopmental presentation.",

  serviceContext: [
    "This guided case focuses on duo analysis limitation.",
    "The key issue is that absence from one tested parent does not prove de novo inheritance when the other parent is unavailable.",
    "The learner should not reject all candidate findings just because a full trio is unavailable.",
    "The learner should also not overstate inheritance evidence that the duo data cannot support.",
    "The safest conclusion should prioritise the strongest candidate while clearly stating that paternal inheritance and confirmed de novo status cannot be assessed.",
    "The final handover should separate candidate strength from inheritance certainty.",
  ],

  candidateFindings: [
    {
      id: "candidate-1",
      label: "Candidate 1",
      gene: "BROADDUO1",
      variant: "chr3:77190442 C>T",
      zygosity: "Heterozygous",
      consequence: "missense_variant",
      inheritanceSignal: "Inherited from unaffected mother",
      clinicalFit:
        "BROADDUO1 has a broad neurodevelopmental association, but the variant is inherited from the unaffected mother, present in population data, and only weakly matches the epilepsy-led presentation.",
      rawEvidence: `GENE: BROADDUO1
Known disease association: broad neurodevelopmental association in limited reports
Reported inheritance: autosomal dominant proposed
Known mechanism: uncertain
Gene-disease validity in local summary: limited

Variant:
chr3:77190442 C>T
Transcript: NM_530001.2
HGVS: c.899C>T p.(Pro300Leu)
Consequence: missense_variant
Protein domain: outside proposed recurrent functional region

VCF-style fields:
QUAL=682
FILTER=PASS
INFO: DP=46;MQ=60;QD=14.8;SOR=0.84
FORMAT: GT:AD:DP:GQ

Proband blood: 0/1:23,23:46:99
Mother blood: 0/1:22,22:44:99
Father: not available

Read-level notes:
ALT reads seen on both forward and reverse strands
ALT reads distributed across read positions
No local mapping warning
No soft-clipping concern
Second caller: detected

Population:
gnomAD AF = 0.0012
gnomAD allele count = 330
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
      gene: "DUOCAP2",
      variant: "chr7:118902440 G>A",
      zygosity: "Heterozygous",
      consequence: "splice_donor_variant",
      inheritanceSignal:
        "Absent from tested mother; father unavailable so de novo status cannot be confirmed",
      clinicalFit:
        "DUOCAP2 is associated with an autosomal dominant neurodevelopmental epilepsy syndrome. The variant is a rare canonical splice donor with strong technical support and good phenotype fit, but paternal inheritance cannot be assessed.",
      rawEvidence: `GENE: DUOCAP2
Known disease association: autosomal dominant neurodevelopmental epilepsy syndrome
Reported inheritance: usually de novo, inherited cases also reported
Known mechanism: haploinsufficiency / loss-of-function
Gene-disease validity in local summary: established

Variant:
chr7:118902440 G>A
Transcript: NM_530002.5
HGVS: c.744+1G>A
Consequence: splice_donor_variant
Splice position: canonical +1 donor site
Transcript note: affects clinically preferred transcript in local summary

VCF-style fields:
QUAL=958
FILTER=PASS
INFO: DP=56;MQ=60;QD=17.1;SOR=0.70
FORMAT: GT:AD:DP:GQ

Proband blood: 0/1:28,28:56:99
Mother blood: 0/0:46,0:46:99
Father: not available

Read-level notes:
ALT reads seen on both forward and reverse strands
ALT reads distributed across read positions
High base quality at variant position
High mapping quality for ALT-supporting reads
No local low-complexity warning
No pseudogene or segmental duplication warning
No concerning soft-clipping
Second caller: detected

Maternal coverage:
Mother has good coverage at the site with no ALT support
Maternal inheritance is not supported by current data

Paternal limitation:
Father unavailable for testing
Paternal inheritance cannot be assessed
Confirmed de novo status cannot be assigned from duo data
Segregation information is incomplete

Population:
gnomAD AF = not observed
gnomAD allele count = 0

Constraint:
LOEUF = 0.17
pLI = 0.98

ClinVar-style summary:
No exact matching variant record found in local summary
Other truncating and canonical splice variants in DUOCAP2 have been submitted as pathogenic/likely pathogenic in affected individuals

Phenotype fit:
Global developmental delay: strong match
Severe speech delay: strong match
Epilepsy: strong match
Hypotonia: compatible
Feeding difficulties: compatible
Mild facial dysmorphism: compatible

Review question:
Assess whether this finding should be prioritised from the duo data while avoiding overstatement of de novo inheritance.`,
      concern:
        "This is the strongest current candidate, but it must be communicated with the missing-father limitation clearly stated.",
    },
    {
      id: "candidate-3",
      label: "Candidate 3",
      gene: "RECESSDUO3",
      variant: "chr9:118809331 C>T",
      zygosity: "Heterozygous",
      consequence: "splice_acceptor_variant",
      inheritanceSignal:
        "Not present in mother; father unavailable; second allele not identified",
      clinicalFit:
        "RECESSDUO3 is associated with an autosomal recessive neurodevelopmental-metabolic disorder. The variant is a real splice acceptor allele, but no second relevant allele has been identified.",
      rawEvidence: `GENE: RECESSDUO3
Known disease association: autosomal recessive neurodevelopmental-metabolic disorder
Reported inheritance: autosomal recessive
Known mechanism: biallelic loss-of-function
Gene-disease validity in local summary: moderate

Variant:
chr9:118809331 C>T
Transcript: NM_530003.4
HGVS: c.744-2C>T
Consequence: splice_acceptor_variant
Splice position: canonical -2 acceptor site

VCF-style fields:
QUAL=824
FILTER=PASS
INFO: DP=50;MQ=60;QD=16.5;SOR=0.74
FORMAT: GT:AD:DP:GQ

Proband blood: 0/1:25,25:50:99
Mother blood: 0/0:44,0:44:99
Father: not available

Read-level notes:
ALT reads seen on both forward and reverse strands
ALT reads distributed across read positions
High mapping quality
Second caller: detected

Second-allele review:
No second coding SNV/indel identified
No confident exon-level deletion/duplication detected
No strong deep intronic candidate identified in current summary
No ROH or UPD clue involving RECESSDUO3

Population:
gnomAD AF = 0.000004
gnomAD allele count = 1
No homozygotes observed in local summary

Phenotype fit:
Developmental delay: compatible
Epilepsy: possible
Hypotonia: compatible
Feeding difficulties: compatible
Metabolic decompensation: not provided
Regression: not provided

Review question:
Assess whether a single convincing allele in a recessive gene is enough to explain the case when no second allele is identified.`,
      concern:
        "This is a real single allele but incomplete as a recessive explanation.",
    },
    {
      id: "candidate-4",
      label: "Candidate 4",
      gene: "CNVDUO4 region",
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
CNVDUO4
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
Feeding difficulties: not a core feature
Dysmorphic features: not a core feature

Review question:
Assess whether this inherited copy-number gain has enough dosage, phenotype, and population support to be prioritised.`,
      concern:
        "This is likely technically real but weak because the dosage mechanism is uncertain, population overlap is present, and it is inherited from the unaffected mother.",
    },
    {
      id: "candidate-5",
      label: "Candidate 5",
      gene: "Duo analysis limitation",
      variant: "Father unavailable for testing",
      zygosity: "Case-level limitation",
      consequence: "inheritance_limitation",
      inheritanceSignal:
        "Paternal inheritance, de novo status, and full segregation cannot be assessed",
      clinicalFit:
        "This is not a disease candidate. It is the central case limitation that affects how Candidate 2 and other findings should be communicated.",
      rawEvidence: `CASE CONTEXT LIMITATION: duo analysis
Available samples:
Proband: tested
Mother: tested
Father: unavailable

Impact on Candidate 2:
Candidate 2 is absent from the tested mother.
However, paternal inheritance cannot be assessed.
Confirmed de novo status cannot be assigned.
Recurrence-risk interpretation remains limited.

Impact on Candidate 3:
A single allele is identified in a recessive gene.
Paternal carrier status cannot be assessed.
No second relevant allele is identified.

Impact on Candidate 4:
The CNV is inherited from the tested mother.
Paternal data are not needed to recognise this maternal inheritance, but the CNV remains weak for other reasons.

Service interpretation:
Duo analysis can still support candidate prioritisation.
However, it provides less inheritance confidence than trio analysis.

Review question:
Assess how the missing paternal sample should shape wording, escalation, and confidence in the final handover.`,
      concern:
        "This is the central limitation. It should be explicitly documented so the final conclusion does not overstate inheritance certainty.",
    },
  ],

  decisionCheckpoints: [
    {
      id: "checkpoint-1",
      title: "Checkpoint 1 — Identify the leading candidate in duo data",
      context:
        "Candidate 2 has strong phenotype, mechanism, consequence, rarity, and technical support, but the father is unavailable.",
      question:
        "Which finding should be prioritised for formal review?",
      options: [
        {
          label: "A",
          text: "Candidate 3, because a canonical splice variant in a recessive gene should be prioritised even with only one allele found.",
          isCorrect: false,
          feedback:
            "Not quite. Candidate 3 is technically real, but a second relevant allele has not been identified.",
        },
        {
          label: "B",
          text: "Candidate 2, because it has the best evidence convergence while still needing cautious inheritance wording.",
          isCorrect: true,
          feedback:
            "Correct. Candidate 2 is strongest, but the duo limitation must remain visible.",
        },
        {
          label: "C",
          text: "Candidate 4, because inherited CNVs are easier to interpret than sequence variants in an incomplete trio.",
          isCorrect: false,
          feedback:
            "Not quite. Candidate 4 has weak dosage, population, and phenotype support.",
        },
      ],
      teachingPoint:
        "Duo analysis can still support prioritisation, but it limits inheritance certainty.",
    },
    {
      id: "checkpoint-2",
      title: "Checkpoint 2 — Avoid overcalling de novo status",
      context:
        "Candidate 2 is absent from the mother, but the father has not been tested.",
      question:
        "How should the inheritance of Candidate 2 be described?",
      options: [
        {
          label: "A",
          text: "Confirmed de novo, because absence from the tested mother is enough when the phenotype fit is strong.",
          isCorrect: false,
          feedback:
            "Not quite. The father is unavailable, so de novo status cannot be confirmed.",
        },
        {
          label: "B",
          text: "Maternally inherited, because a duo analysis cannot distinguish absence from inheritance uncertainty.",
          isCorrect: false,
          feedback:
            "Not quite. The mother has good coverage with no ALT support, so maternal inheritance is not supported.",
        },
        {
          label: "C",
          text: "Absent from the tested mother, with paternal inheritance and confirmed de novo status unresolved.",
          isCorrect: true,
          feedback:
            "Correct. This wording accurately reflects the available duo data.",
        },
      ],
      teachingPoint:
        "Absence from one parent is not the same as confirmed de novo inheritance.",
    },
    {
      id: "checkpoint-3",
      title: "Checkpoint 3 — Interpret the recessive single-allele finding",
      context:
        "Candidate 3 is a convincing splice acceptor variant in a recessive gene, but no second allele is identified.",
      question:
        "What is the safest interpretation of Candidate 3?",
      options: [
        {
          label: "A",
          text: "Document it as a real single allele in a recessive gene, but not a complete explanation without a second relevant allele.",
          isCorrect: true,
          feedback:
            "Correct. It is real and reviewable, but the recessive model is incomplete.",
        },
        {
          label: "B",
          text: "Prioritise it as diagnostic, because the father could carry a missing second allele that has not been tested.",
          isCorrect: false,
          feedback:
            "Not quite. The father being unavailable does not create evidence for a second allele in the proband.",
        },
        {
          label: "C",
          text: "Ignore it entirely, because single alleles in recessive genes cannot be mentioned in duo analysis.",
          isCorrect: false,
          feedback:
            "Not quite. It can be documented as reviewed, but not treated as explanatory.",
        },
      ],
      teachingPoint:
        "A single allele can be real and still insufficient for a recessive diagnosis.",
    },
    {
      id: "checkpoint-4",
      title: "Checkpoint 4 — Communicate the duo limitation",
      context:
        "The final handover needs to explain what the missing father prevents the analyst from concluding.",
      question:
        "Which limitation should be made explicit?",
      options: [
        {
          label: "A",
          text: "Technical quality cannot be assessed because duo analysis does not include enough family members.",
          isCorrect: false,
          feedback:
            "Not quite. Technical quality can still be assessed in the proband and tested mother.",
        },
        {
          label: "B",
          text: "Paternal inheritance, confirmed de novo status, and full segregation cannot be assessed from the available samples.",
          isCorrect: true,
          feedback:
            "Correct. These are the key limitations created by the missing father.",
        },
        {
          label: "C",
          text: "Phenotype fit cannot be assessed because phenotype matching requires both parents to be sequenced.",
          isCorrect: false,
          feedback:
            "Not quite. Phenotype fit can still be assessed, but inheritance confidence is limited.",
        },
      ],
      teachingPoint:
        "Duo limitations mainly affect inheritance and segregation, not every part of variant review.",
    },
    {
      id: "checkpoint-5",
      title: "Checkpoint 5 — Final duo-analysis conclusion",
      context:
        "You need to prepare a safe trainee-level conclusion for formal clinical laboratory review.",
      question:
        "Which conclusion is safest?",
      options: [
        {
          label: "A",
          text: "Avoid prioritising any finding because a duo result cannot support clinically useful candidate ranking.",
          isCorrect: false,
          feedback:
            "Not quite. Duo data are limited, but strong candidate-level evidence can still be prioritised.",
        },
        {
          label: "B",
          text: "Report Candidate 2 as confirmed de novo because it is absent from the mother and fits the phenotype.",
          isCorrect: false,
          feedback:
            "Not quite. The father is unavailable, so confirmed de novo wording would overstate the data.",
        },
        {
          label: "C",
          text: "Prioritise Candidate 2 for review while stating that paternal inheritance and de novo status remain unresolved.",
          isCorrect: true,
          feedback:
            "Correct. This conclusion is clear about both candidate strength and inheritance limitation.",
        },
      ],
      teachingPoint:
        "Safe duo handover separates candidate strength from inheritance certainty.",
    },
  ],

  finalReflection:
    "A safe trainee-level conclusion would be that Candidate 2 is the strongest current finding for formal clinical laboratory review. It is a rare canonical splice donor variant in DUOCAP2, an established autosomal dominant neurodevelopmental epilepsy gene, and the phenotype, loss-of-function mechanism, clinically relevant transcript, population absence, and technical evidence all align. However, this is a duo analysis because only the proband and mother have been tested. The variant is absent from the tested mother, but paternal inheritance cannot be assessed and confirmed de novo status cannot be assigned. Candidate 5 is not a disease candidate but is the central inheritance limitation that must be documented. Candidate 3 is a technically convincing single splice allele in a recessive gene, but no second relevant allele has been identified. Candidate 4 is likely a real maternally inherited CNV, but population overlap, weak dosage evidence, and poor phenotype specificity reduce priority. Candidate 1 is technically real but weak because it is inherited from the unaffected mother, relatively frequent, and broadly matched. The safest next step is to prioritise Candidate 2 for formal review while clearly stating that the missing paternal sample limits inheritance, segregation, and recurrence-risk interpretation.",
};