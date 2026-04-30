export const case58 = {
  id: "case-58",
  slug: "poor-phenotype-data-case",
  title: "Case 58: Poor phenotype data case",
  level: "Advanced",
  summary:
    "A guided case focused on limited referral and HPO information, where the learner must avoid over-prioritising weak gene matches from a vague phenotype.",

  visualisationExampleId: null,

  assessmentFocus: [
    "Poor phenotype data",
    "Phenotype-led prioritisation",
    "Avoiding weak gene-match overcalling",
    "Candidate prioritisation",
    "Evidence limitation",
    "Safe communication and escalation",
  ],

  guidedTutorMode: {
    type: "static-rule-based",
    description:
      "Uses built-in hints, checkpoint feedback, model answers, and self-check criteria to support safe case reasoning.",
  },

  phase5Assessment: {
    candidateRanking: {
      prompt:
        "Rank the findings from strongest to weakest based on variant evidence, gene validity, technical confidence, and the limitation caused by very limited phenotype information.",
      correctOrder: [
        "candidate-2",
        "candidate-5",
        "candidate-3",
        "candidate-4",
        "candidate-1",
      ],
      explanation:
        "Candidate 2 is strongest because it has the best variant-level evidence, gene validity, mechanism, rarity, and technical confidence, but limited phenotype information prevents confident phenotype-specific interpretation. Candidate 5 is not a disease candidate, but it is central because poor phenotype data limits prioritisation across the whole case. Candidate 3 is plausible but weaker because it is a missense candidate in a less established gene. Candidate 4 is likely a real CNV but has weak dosage and phenotype support. Candidate 1 is weak because it is broad, relatively frequent, and poorly specific.",
    },

    escalationDecision: {
      prompt:
        "Choose the safest next action given the strong-looking candidate and the limited phenotype data.",
      options: [
        {
          id: "escalate-with-phenotype-limitation",
          label: "A",
          decision:
            "Escalate Candidate 2 for formal review while requesting clearer phenotype information before making stronger interpretation claims.",
          isBest: true,
          feedback:
            "Best decision. Candidate 2 is review-worthy, but the poor phenotype data should be clearly documented and improved if possible.",
        },
        {
          id: "report-candidate-2-diagnostic",
          label: "B",
          decision:
            "Report Candidate 2 as diagnostic because the variant evidence is strong and developmental delay is listed in the referral.",
          isBest: false,
          feedback:
            "Review this choice. Strong variant evidence matters, but vague phenotype data limits how confidently the clinical fit can be assessed.",
        },
        {
          id: "reject-all-findings",
          label: "C",
          decision:
            "Reject all candidate findings because poor phenotype information makes rare disease interpretation impossible.",
          isBest: false,
          feedback:
            "Review this choice. Poor phenotype data limits interpretation, but it does not prevent cautious candidate prioritisation.",
        },
      ],
    },

    writtenSummary: {
      prompt:
        "Write a short trainee-level handover summary explaining the leading candidate, the phenotype-data limitation, and what information would help the review.",
      checklist: [
        "Names Candidate 2 as the strongest current finding.",
        "Explains that the variant-level evidence is strong.",
        "States that the referral phenotype is too limited for confident phenotype matching.",
        "Avoids treating a broad term like developmental delay as a complete clinical fit.",
        "Requests clearer phenotype details, HPO terms, clinical history, or specialist review if available.",
        "Briefly explains why the other findings are weaker.",
      ],
      modelAnswer:
        "Candidate 2 is the strongest current finding for formal review because it is a rare canonical splice donor variant in an established neurodevelopmental gene with a compatible loss-of-function mechanism and strong technical support. However, the phenotype information is very limited: the referral mainly states developmental delay and possible seizures without detailed HPO terms, onset, severity, dysmorphism, growth pattern, neurological features, regression, metabolic history, or family details. This means the candidate can be prioritised for review, but the phenotype fit should not be overstated. Candidate 5 is the central case limitation because poor phenotype data affects all candidate ranking. Candidate 3 is plausible but weaker because gene and variant evidence are less established. Candidate 4 is likely a real CNV but has weak dosage and phenotype support, and Candidate 1 is broad, relatively frequent, and poorly specific. The safest next step is to escalate Candidate 2 for formal review while requesting clearer clinical phenotype information before making stronger interpretation claims.",
    },
  },

  reasoningScorecard: [
    {
      category: "Phenotype limitation awareness",
      maxScore: 2,
      expectation:
        "Recognises that vague referral information limits phenotype matching and candidate confidence.",
    },
    {
      category: "Phenotype-led prioritisation",
      maxScore: 2,
      expectation:
        "Avoids treating broad terms such as developmental delay as enough to strongly support every neurodevelopmental gene.",
    },
    {
      category: "Candidate prioritisation",
      maxScore: 2,
      expectation:
        "Prioritises the candidate with the strongest variant and gene evidence while preserving the phenotype limitation.",
    },
    {
      category: "Evidence interpretation",
      maxScore: 2,
      expectation:
        "Balances gene validity, consequence, rarity, technical confidence, and limited clinical information without overclaiming.",
    },
    {
      category: "Safe communication",
      maxScore: 2,
      expectation:
        "Requests clearer phenotype information and communicates the candidate as review-worthy rather than diagnostic from limited data alone.",
    },
  ],

  patient: {
    age: 6,
    sex: "Female",
  },

  referralReason:
    "A 6-year-old girl has been referred for rare disease genome analysis with very limited clinical information. The referral states developmental delay and possible seizures, but provides few structured HPO terms, limited onset details, no clear dysmorphology description, no detailed neurological history, and minimal family history. Several candidate findings have been highlighted, but the lack of phenotype detail makes prioritisation more difficult.",

  testType:
    "Rare disease genome sequencing with SNV/indel, CNV, phenotype-limitation, candidate-prioritisation, and technical-confidence review",

  familyStructure:
    "The proband and both biological parents have been tested. Both parents are reportedly unaffected. The family history section in the referral is brief and does not provide detailed information about extended relatives, parental phenotype review, or subtle neurodevelopmental features.",

  history: [
    "Developmental delay listed in the referral",
    "Possible seizures mentioned, but seizure type and onset are not clearly described",
    "No detailed speech, motor, behavioural, or cognitive profile provided",
    "No detailed dysmorphology description provided",
    "No clear growth, feeding, regression, or metabolic history provided",
    "No detailed neurological examination summary provided",
    "No previous molecular diagnosis reported",
    "Both parents reportedly unaffected",
    "Referral contains limited HPO-style phenotype information",
    "Clinical team requested candidate prioritisation despite limited phenotype detail",
  ],

  phenotype: [
    "Developmental delay",
    "Possible seizures",
    "Limited phenotype information",
    "Incomplete HPO data",
    "Family history not well characterised",
  ],

  familyHistory:
    "Both parents are reportedly unaffected. No detailed family history is provided. The referral does not clearly state whether there are relatives with developmental delay, epilepsy, learning difficulties, dysmorphic features, congenital anomalies, neuropsychiatric features, pregnancy losses, consanguinity, or similar childhood presentations.",

  serviceContext: [
    "This guided case focuses on poor phenotype data.",
    "The key issue is that limited clinical information can make weak gene matches look more convincing than they really are.",
    "The learner should not treat broad terms such as developmental delay as a strong match for every neurodevelopmental gene.",
    "The learner should also not reject all candidate findings simply because the phenotype is incomplete.",
    "The safest conclusion should prioritise the strongest candidate using variant and gene evidence while clearly documenting the phenotype limitation.",
    "The final handover should request improved clinical phenotype information where it would materially affect interpretation.",
  ],

  candidateFindings: [
    {
      id: "candidate-1",
      label: "Candidate 1",
      gene: "BROADPHENO1",
      variant: "chr2:77190442 C>T",
      zygosity: "Heterozygous",
      consequence: "missense_variant",
      inheritanceSignal: "Inherited from unaffected mother",
      clinicalFit:
        "BROADPHENO1 has a broad neurodevelopmental association in limited reports, but the variant is inherited from the unaffected mother, relatively frequent, and only superficially matches the limited referral term developmental delay.",
      rawEvidence: `GENE: BROADPHENO1
Known disease association: broad neurodevelopmental association in limited reports
Reported inheritance: autosomal dominant proposed
Known mechanism: uncertain
Gene-disease validity in local summary: limited

Variant:
chr2:77190442 C>T
Transcript: NM_580001.2
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
gnomAD AF = 0.0013
gnomAD allele count = 360
One homozygote observed in local population summary

Phenotype fit:
Developmental delay: broad possible overlap
Possible seizures: limited overlap
Detailed speech profile: not provided
Detailed motor profile: not provided
Dysmorphology: not provided
Regression: not provided
Growth pattern: not provided

Review question:
Assess whether a broad gene match based mainly on a vague developmental delay referral term is enough to prioritise this finding.`,
      concern:
        "This is technically real but weak. It should be deprioritised because the gene evidence, frequency, inheritance, and phenotype specificity are limited.",
    },
    {
      id: "candidate-2",
      label: "Candidate 2",
      gene: "PHENOCAP2",
      variant: "chr7:118902440 G>A",
      zygosity: "Heterozygous",
      consequence: "splice_donor_variant",
      inheritanceSignal: "Apparent de novo with good parental coverage",
      clinicalFit:
        "PHENOCAP2 is associated with an autosomal dominant neurodevelopmental epilepsy disorder. The variant has strong gene, mechanism, rarity, inheritance, and technical support, but the clinical fit cannot be assessed fully because the referral phenotype is sparse.",
      rawEvidence: `GENE: PHENOCAP2
Known disease association: autosomal dominant neurodevelopmental epilepsy disorder
Reported inheritance: usually de novo
Known mechanism: haploinsufficiency / loss-of-function
Gene-disease validity in local summary: established

Variant:
chr7:118902440 G>A
Transcript: NM_580002.5
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
Father blood: 0/0:46,0:46:99

Read-level notes:
ALT reads seen on both forward and reverse strands
ALT reads distributed across read positions
High base quality at variant position
High mapping quality for ALT-supporting reads
No local low-complexity warning
No pseudogene or segmental duplication warning
No concerning soft-clipping
Second caller: detected

Parental coverage:
Mother has good coverage with no ALT support
Father has good coverage with no ALT support
Trio identity checks are consistent

Population:
gnomAD AF = not observed
gnomAD allele count = 0

Constraint:
LOEUF = 0.15
pLI = 0.99

ClinVar-style summary:
No exact matching variant record found in local summary
Other truncating and canonical splice variants in PHENOCAP2 have been submitted as pathogenic/likely pathogenic in affected individuals

Phenotype fit:
Developmental delay: compatible but broad
Possible seizures: compatible but details missing
Speech delay: not clearly described
Hypotonia: not provided
Dysmorphic features: not provided
Regression: not provided
Growth pattern: not provided
Behavioural profile: not provided

Phenotype limitation:
Referral is too sparse to assess the full syndrome match.
Additional HPO terms and clinical details would materially improve interpretation.

Review question:
Assess whether this strong variant-level finding should be prioritised while clearly documenting the limited phenotype data.`,
      concern:
        "This is the strongest current candidate, but the phenotype match should not be overstated because the referral information is limited.",
    },
    {
      id: "candidate-3",
      label: "Candidate 3",
      gene: "MISSENSEPHENO3",
      variant: "chr10:55218401 G>A",
      zygosity: "Heterozygous",
      consequence: "missense_variant",
      inheritanceSignal: "Absent from both parents on standard genotype calls",
      clinicalFit:
        "MISSENSEPHENO3 has a possible developmental epilepsy association. The variant is rare and technically plausible, but the gene evidence is less established and the sparse phenotype makes the fit difficult to judge.",
      rawEvidence: `GENE: MISSENSEPHENO3
Known disease association: possible autosomal dominant developmental epilepsy disorder
Reported inheritance: usually de novo in limited reports
Known mechanism: damaging missense variants in a functional domain
Gene-disease validity in local summary: moderate / emerging

Variant:
chr10:55218401 G>A
Transcript: NM_580003.4
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
Developmental delay: compatible but broad
Possible seizures: compatible but not characterised
Hypotonia: not provided
Feeding difficulties: not provided
Dysmorphic features: not provided
Detailed neurological history: not provided

Review question:
Assess whether this rare missense candidate should be prioritised above a stronger loss-of-function candidate when phenotype data are sparse.`,
      concern:
        "This is plausible but weaker than Candidate 2 because the gene and variant evidence are less established.",
    },
    {
      id: "candidate-4",
      label: "Candidate 4",
      gene: "CNVPHENO4 region",
      variant: "chr16:29120000-29205000 duplication",
      zygosity: "Heterozygous duplication",
      consequence: "copy_number_gain",
      inheritanceSignal: "Inherited from unaffected father",
      clinicalFit:
        "The duplication is likely real but inherited from the unaffected father, overlaps population CNVs, and has no established triplosensitivity mechanism. The limited phenotype data do not provide specific support for this CNV.",
      rawEvidence: `CNV REGION: chr16:29120000-29205000
CNV type: duplication
Estimated size: 85 kb
Copy-number state: heterozygous duplication

Gene:
CNVPHENO4
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
Possible seizures: weak overlap
Dysmorphic features: not provided
Growth pattern: not provided
Congenital anomalies: not provided

Review question:
Assess whether this inherited copy-number gain has enough dosage, phenotype, and population support to be prioritised.`,
      concern:
        "This is likely technically real but weak because the gain mechanism is uncertain, population overlap is present, and it is inherited from an unaffected father.",
    },
    {
      id: "candidate-5",
      label: "Candidate 5",
      gene: "Phenotype data limitation",
      variant: "Limited referral and HPO information",
      zygosity: "Case-level limitation",
      consequence: "phenotype_limitation",
      inheritanceSignal: "Affects interpretation of all candidates",
      clinicalFit:
        "This is not a disease candidate. It is the central case limitation because the referral phenotype is too sparse to confidently assess syndrome-level fit.",
      rawEvidence: `CASE CONTEXT LIMITATION: poor phenotype data
Available phenotype information:
Developmental delay
Possible seizures
Limited additional HPO information
Minimal family history detail
No detailed onset or progression timeline
No detailed neurological examination summary
No detailed dysmorphology summary
No clear growth, feeding, regression, metabolic, behavioural, or congenital anomaly information

Impact on Candidate 2:
Variant-level evidence is strong.
Gene-disease mechanism is plausible.
However, syndrome-level phenotype fit cannot be assessed fully.

Impact on Candidate 3:
Rare missense candidate is plausible.
However, limited phenotype data makes it harder to judge specificity.

Impact on Candidate 1 and Candidate 4:
Broad developmental overlap is not enough to overcome weak frequency, inheritance, dosage, or gene evidence.

Useful additional information:
Structured HPO terms
Seizure type and age at onset
Developmental profile and severity
Speech and motor milestones
Growth pattern
Dysmorphology findings
Regression or episodic decompensation history
Family history and subtle parental features
Previous testing and clinical genetics impression

Review question:
Assess how poor phenotype data should limit candidate confidence and shape requests for further clinical information.`,
      concern:
        "This is the central limitation. The handover should request clearer phenotype information and avoid overclaiming clinical fit.",
    },
  ],

  decisionCheckpoints: [
    {
      id: "checkpoint-1",
      title: "Checkpoint 1 — Identify the leading candidate",
      context:
        "Candidate 2 has strong variant-level evidence, while the clinical referral contains only broad and limited phenotype information.",
      question:
        "Which finding should be prioritised for formal review?",
      options: [
        {
          label: "A",
          text: "Candidate 1, because broad neurodevelopmental genes are most useful when the referral phenotype is vague.",
          isCorrect: false,
          feedback:
            "Not quite. A vague phenotype does not make a broad, relatively frequent, inherited finding stronger.",
        },
        {
          label: "B",
          text: "Candidate 4, because CNVs provide clearer findings than sequence variants when HPO detail is limited.",
          isCorrect: false,
          feedback:
            "Not quite. Candidate 4 has weak dosage, inheritance, population, and phenotype support.",
        },
        {
          label: "C",
          text: "Candidate 2, because the variant and gene evidence are strongest, while the phenotype limitation remains clearly documented.",
          isCorrect: true,
          feedback:
            "Correct. Candidate 2 is strongest, but the limited phenotype data should reduce confidence in clinical fit.",
        },
      ],
      teachingPoint:
        "Poor phenotype data should limit interpretation, not prevent evidence-based candidate prioritisation.",
    },
    {
      id: "checkpoint-2",
      title: "Checkpoint 2 — Avoid overusing broad phenotype terms",
      context:
        "The referral mainly states developmental delay and possible seizures, without detailed HPO terms or clinical context.",
      question:
        "How should the phenotype fit be handled?",
      options: [
        {
          label: "A",
          text: "Treat the phenotype fit as limited, because broad terms alone do not prove a syndrome-level match.",
          isCorrect: true,
          feedback:
            "Correct. Developmental delay and possible seizures are important but too broad to support a detailed match by themselves.",
        },
        {
          label: "B",
          text: "Treat the phenotype fit as strong, because most neurodevelopmental genes can include developmental delay.",
          isCorrect: false,
          feedback:
            "Not quite. Broad overlap can be misleading if the specific syndrome features are not provided.",
        },
        {
          label: "C",
          text: "Ignore phenotype entirely, because limited HPO data means only variant consequence should be used.",
          isCorrect: false,
          feedback:
            "Not quite. Phenotype still matters, but the limitation should be stated clearly.",
        },
      ],
      teachingPoint:
        "A broad phenotype term is not the same as a detailed clinical match.",
    },
    {
      id: "checkpoint-3",
      title: "Checkpoint 3 — Judge the weaker broad-match finding",
      context:
        "Candidate 1 is inherited, relatively frequent, and in a limited-evidence gene, but it has broad developmental overlap.",
      question:
        "What is the safest interpretation of Candidate 1?",
      options: [
        {
          label: "A",
          text: "Prioritise it because limited phenotype data makes broad gene matches more acceptable.",
          isCorrect: false,
          feedback:
            "Not quite. Limited phenotype data should not make weak evidence stronger.",
        },
        {
          label: "B",
          text: "Deprioritise it because the gene evidence, inheritance, frequency, and phenotype specificity are weak.",
          isCorrect: true,
          feedback:
            "Correct. Broad overlap is not enough to overcome multiple weakening features.",
        },
        {
          label: "C",
          text: "Report it as uncertain but equal to Candidate 2 because both genes involve neurodevelopment.",
          isCorrect: false,
          feedback:
            "Not quite. Candidate 2 has much stronger gene, consequence, inheritance, and technical support.",
        },
      ],
      teachingPoint:
        "Poor phenotype data increases caution; it does not flatten all candidates into equal priority.",
    },
    {
      id: "checkpoint-4",
      title: "Checkpoint 4 — Decide what extra information would help",
      context:
        "The case has a review-worthy candidate, but phenotype specificity is limited.",
      question:
        "Which additional information would most improve interpretation?",
      options: [
        {
          label: "A",
          text: "Only a higher read depth at Candidate 2, because technical confidence is the main limitation in this case.",
          isCorrect: false,
          feedback:
            "Not quite. Candidate 2 already has strong technical evidence; the main limitation is phenotype detail.",
        },
        {
          label: "B",
          text: "Only a population frequency update, because phenotype information is less important for rare loss-of-function variants.",
          isCorrect: false,
          feedback:
            "Not quite. Population evidence matters, but phenotype specificity remains important.",
        },
        {
          label: "C",
          text: "Structured HPO terms, seizure details, developmental profile, dysmorphology, family history, and clinical genetics review.",
          isCorrect: true,
          feedback:
            "Correct. These details would help assess whether the candidate truly fits the patient.",
        },
      ],
      teachingPoint:
        "When the limitation is phenotype quality, the most useful follow-up is better clinical information.",
    },
    {
      id: "checkpoint-5",
      title: "Checkpoint 5 — Final poor-phenotype conclusion",
      context:
        "You need to prepare a safe trainee-level conclusion for formal clinical laboratory review.",
      question:
        "Which conclusion is safest?",
      options: [
        {
          label: "A",
          text: "Avoid prioritising any finding because poor phenotype data makes interpretation impossible.",
          isCorrect: false,
          feedback:
            "Not quite. Poor phenotype data limits confidence, but candidate prioritisation can still be useful.",
        },
        {
          label: "B",
          text: "Prioritise Candidate 2 for review, document the phenotype limitation, and request clearer clinical information.",
          isCorrect: true,
          feedback:
            "Correct. This conclusion balances candidate strength with the key limitation.",
        },
        {
          label: "C",
          text: "Report Candidate 2 as diagnostic because variant-level evidence can outweigh missing phenotype detail.",
          isCorrect: false,
          feedback:
            "Not quite. Strong variant evidence supports review, but missing phenotype detail should not be ignored.",
        },
      ],
      teachingPoint:
        "Safe handover can prioritise a strong candidate while clearly asking for the clinical detail needed to improve interpretation.",
    },
  ],

  finalReflection:
    "A safe trainee-level conclusion would be that Candidate 2 is the strongest current finding for formal clinical laboratory review, but the phenotype match should not be overstated. Candidate 2 is a rare apparent de novo canonical splice donor variant in PHENOCAP2, an established autosomal dominant neurodevelopmental epilepsy gene, with strong technical support, population absence, appropriate loss-of-function mechanism, and good parental coverage. However, the referral phenotype is very limited, mainly listing developmental delay and possible seizures without detailed HPO terms, seizure type, developmental profile, dysmorphology, growth history, regression, metabolic features, or family history detail. Candidate 5 is not a disease candidate but is the central limitation because poor phenotype data affects all candidate ranking. Candidate 3 is plausible but weaker because the gene and variant evidence are less established. Candidate 4 is likely a real inherited duplication but has weak dosage, population, and phenotype support. Candidate 1 is inherited, relatively frequent, broad, and poorly specific. The safest next step is to prioritise Candidate 2 for formal review while documenting the phenotype-data limitation and requesting clearer clinical information before stronger interpretation claims are made.",
};