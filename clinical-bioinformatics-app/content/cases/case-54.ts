export const case54 = {
  id: "case-54",
  slug: "singleton-analysis-limitation-case",
  title: "Case 54: Singleton analysis limitation",
  level: "Advanced",
  summary:
    "A guided case focused on singleton analysis where no parental samples are available, so prioritisation relies more heavily on phenotype, frequency, consequence, mechanism, and technical confidence.",

  visualisationExampleId: null,

  assessmentFocus: [
    "Singleton analysis limitation",
    "Inheritance uncertainty",
    "Phenotype-led prioritisation",
    "Population frequency review",
    "Mechanism and consequence fit",
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
        "Rank the findings from strongest to weakest based on phenotype fit, rarity, consequence, mechanism, technical confidence, and the limitations of singleton analysis.",
      correctOrder: [
        "candidate-2",
        "candidate-5",
        "candidate-3",
        "candidate-4",
        "candidate-1",
      ],
      explanation:
        "Candidate 2 is strongest because it has the best convergence across phenotype, gene mechanism, consequence, population absence, and technical confidence. Candidate 5 is not a disease candidate, but it is highly important because it explains the singleton limitation. Candidate 3 is plausible but weaker because the evidence is missense-based and less definitive. Candidate 4 is a real single allele in a recessive gene but does not complete a recessive model. Candidate 1 is weak because the gene evidence, frequency, and phenotype specificity are limited.",
    },

    escalationDecision: {
      prompt:
        "Choose the safest next action for the leading finding in this singleton case.",
      options: [
        {
          id: "reject-singleton",
          label: "A",
          decision:
            "Reject the leading candidate because singleton analysis cannot assess de novo status or parental inheritance.",
          isBest: false,
          feedback:
            "Review this choice. Singleton analysis is limited, but strong phenotype, mechanism, rarity, and technical evidence can still support prioritisation.",
        },
        {
          id: "report-diagnostic",
          label: "B",
          decision:
            "Report the leading candidate as diagnostic because it is rare, technically strong, and fits the phenotype.",
          isBest: false,
          feedback:
            "Review this choice. The finding is review-worthy, but singleton analysis limits inheritance confidence and still requires formal interpretation.",
        },
        {
          id: "escalate-with-limitation",
          label: "C",
          decision:
            "Escalate the leading candidate for formal review while documenting that inheritance and segregation cannot be assessed.",
          isBest: true,
          feedback:
            "Best decision. This preserves the strength of the candidate while making the singleton limitation clear.",
        },
      ],
    },

    writtenSummary: {
      prompt:
        "Write a short trainee-level handover summary explaining the strongest finding, why it is review-worthy, and what singleton analysis prevents you from concluding.",
      checklist: [
        "Names Candidate 2 as the strongest current finding.",
        "Explains phenotype fit, rarity, consequence, mechanism, and technical confidence.",
        "States that parental inheritance and de novo status cannot be assessed.",
        "Avoids presenting the finding as diagnostic from singleton data alone.",
        "Mentions that segregation or parental testing would improve interpretation if available.",
        "Briefly explains why the other findings are weaker.",
      ],
      modelAnswer:
        "Candidate 2 is the strongest current finding for formal review. It is a rare canonical splice donor variant in a phenotype-compatible neurodevelopmental epilepsy gene, with strong technical support, appropriate loss-of-function mechanism, population absence, and good overlap with the patient’s developmental delay, severe speech delay, epilepsy, hypotonia, and feeding difficulties. However, this is a singleton analysis, so parental inheritance, confirmed de novo status, and segregation cannot be assessed. Candidate 3 is plausible but less strong because it is a missense variant with incomplete evidence. Candidate 4 is a real single allele in a recessive gene but does not complete a recessive explanation. Candidate 1 is weak because of frequency, broad gene evidence, and poor phenotype specificity. Candidate 5 is the central limitation. The safest next step is to escalate Candidate 2 for formal clinical laboratory review while documenting the singleton-analysis limitation and recommending parental or segregation testing if available.",
    },
  },

  reasoningScorecard: [
    {
      category: "Singleton limitation awareness",
      maxScore: 2,
      expectation:
        "Recognises that without parental samples, de novo status, inheritance, segregation, and recurrence-risk interpretation are limited.",
    },
    {
      category: "Phenotype-led prioritisation",
      maxScore: 2,
      expectation:
        "Uses the patient’s phenotype more heavily while avoiding superficial broad gene matches.",
    },
    {
      category: "Evidence interpretation",
      maxScore: 2,
      expectation:
        "Balances consequence, mechanism, rarity, gene validity, and technical confidence without overclaiming inheritance.",
    },
    {
      category: "Candidate prioritisation",
      maxScore: 2,
      expectation:
        "Ranks the strongest candidate based on overall convergence rather than relying on de novo filtering.",
    },
    {
      category: "Safe communication",
      maxScore: 2,
      expectation:
        "Communicates a leading candidate while clearly stating what cannot be concluded from singleton data.",
    },
  ],

  patient: {
    age: 6,
    sex: "Male",
  },

  referralReason:
    "A 6-year-old boy has been referred for rare disease genome analysis because of global developmental delay, severe speech delay, epilepsy, hypotonia, feeding difficulties, autistic features, and mild dysmorphic features. No parental samples are available, so the analysis must be interpreted as a singleton case. Several candidate findings have been highlighted, but inheritance and de novo status cannot be assessed from the available data.",

  testType:
    "Rare disease singleton genome sequencing with SNV/indel, CNV, phenotype, population, mechanism, and technical-confidence review",

  familyStructure:
    "Only the proband has been tested. No parental samples are available. The referral states that both parents are reportedly unaffected, but this cannot be confirmed from genomic data and no segregation information is available.",

  history: [
    "Global developmental delay noted in infancy",
    "Severe expressive speech delay",
    "Epilepsy beginning at age 3",
    "Generalised hypotonia",
    "Feeding difficulties in early childhood",
    "Autistic features reported by the clinical team",
    "Mild dysmorphic features noted by clinical genetics",
    "No known previous molecular diagnosis",
    "No parental samples available",
    "Clinical team requested candidate prioritisation from singleton data",
  ],

  phenotype: [
    "Global developmental delay",
    "Severe speech delay",
    "Epilepsy",
    "Hypotonia",
    "Feeding difficulties",
    "Autistic features",
    "Mild dysmorphic features",
  ],

  familyHistory:
    "Both parents are reportedly unaffected, but no parental genomic data are available. There is no documented family history of developmental delay, epilepsy, hypotonia, feeding difficulties, autistic features, dysmorphism, or a similar neurodevelopmental presentation. No segregation information is available.",

  serviceContext: [
    "This guided case focuses on singleton analysis limitation.",
    "The key issue is that no parental samples are available, so inheritance, de novo status, and segregation cannot be assessed.",
    "The learner should not reject all candidates simply because trio data are unavailable.",
    "The learner should also not describe a variant as de novo or inherited without evidence.",
    "The safest conclusion should prioritise the strongest candidate using phenotype, rarity, consequence, mechanism, and technical confidence while clearly documenting the inheritance limitation.",
    "The final handover should explain what additional family testing could add if available.",
  ],

  candidateFindings: [
    {
      id: "candidate-1",
      label: "Candidate 1",
      gene: "BROADSNGL1",
      variant: "chr2:77190442 C>T",
      zygosity: "Heterozygous",
      consequence: "missense_variant",
      inheritanceSignal: "Unknown; no parental samples available",
      clinicalFit:
        "BROADSNGL1 has a broad neurodevelopmental association in limited reports, but the variant is relatively frequent, outside a known functional region, and only weakly matches the epilepsy-led presentation.",
      rawEvidence: `GENE: BROADSNGL1
Known disease association: broad neurodevelopmental association in limited reports
Reported inheritance: autosomal dominant proposed
Known mechanism: uncertain
Gene-disease validity in local summary: limited

Variant:
chr2:77190442 C>T
Transcript: NM_540001.2
HGVS: c.899C>T p.(Pro300Leu)
Consequence: missense_variant
Protein domain: outside proposed recurrent functional region

VCF-style fields:
QUAL=690
FILTER=PASS
INFO: DP=46;MQ=60;QD=15.0;SOR=0.86
FORMAT: GT:AD:DP:GQ

Proband blood: 0/1:23,23:46:99
Mother: not available
Father: not available

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
Severe speech delay: broad possible overlap
Epilepsy: limited overlap
Hypotonia: weak overlap
Feeding difficulties: not a core feature
Autistic features: broad possible overlap
Dysmorphic features: not a core feature

Review question:
Assess whether a relatively frequent missense variant in a limited-evidence broad neurodevelopmental gene should drive a singleton case conclusion.`,
      concern:
        "This is technically real but weak. It should be reviewed and deprioritised rather than treated as the main explanation.",
    },
    {
      id: "candidate-2",
      label: "Candidate 2",
      gene: "SINGLECAP2",
      variant: "chr7:118902440 G>A",
      zygosity: "Heterozygous",
      consequence: "splice_donor_variant",
      inheritanceSignal:
        "Unknown; no parental samples available, so de novo status cannot be assessed",
      clinicalFit:
        "SINGLECAP2 is associated with an autosomal dominant neurodevelopmental epilepsy syndrome. The variant is a rare canonical splice donor with strong technical support, appropriate loss-of-function mechanism, and good phenotype fit.",
      rawEvidence: `GENE: SINGLECAP2
Known disease association: autosomal dominant neurodevelopmental epilepsy syndrome
Reported inheritance: usually de novo, inherited cases also reported
Known mechanism: haploinsufficiency / loss-of-function
Gene-disease validity in local summary: established

Variant:
chr7:118902440 G>A
Transcript: NM_540002.5
HGVS: c.744+1G>A
Consequence: splice_donor_variant
Splice position: canonical +1 donor site
Transcript note: affects clinically preferred transcript in local summary

VCF-style fields:
QUAL=962
FILTER=PASS
INFO: DP=56;MQ=60;QD=17.2;SOR=0.70
FORMAT: GT:AD:DP:GQ

Proband blood: 0/1:28,28:56:99
Mother: not available
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

Inheritance limitation:
No parental samples available
Maternal inheritance cannot be assessed
Paternal inheritance cannot be assessed
Confirmed de novo status cannot be assigned
Segregation information is unavailable

Population:
gnomAD AF = not observed
gnomAD allele count = 0

Constraint:
LOEUF = 0.16
pLI = 0.98

ClinVar-style summary:
No exact matching variant record found in local summary
Other truncating and canonical splice variants in SINGLECAP2 have been submitted as pathogenic/likely pathogenic in affected individuals

Phenotype fit:
Global developmental delay: strong match
Severe speech delay: strong match
Epilepsy: strong match
Hypotonia: compatible
Feeding difficulties: compatible
Autistic features: compatible
Mild dysmorphic features: compatible

Review question:
Assess whether this finding should be prioritised from singleton data while avoiding unsupported inheritance claims.`,
      concern:
        "This is the strongest current candidate, but it must be communicated with the singleton inheritance limitation clearly stated.",
    },
    {
      id: "candidate-3",
      label: "Candidate 3",
      gene: "MISSENSESNGL3",
      variant: "chr10:55218401 G>A",
      zygosity: "Heterozygous",
      consequence: "missense_variant",
      inheritanceSignal: "Unknown; no parental samples available",
      clinicalFit:
        "MISSENSESNGL3 has a possible developmental epilepsy association. The variant is rare and technically plausible, but the exact variant is unreported and the gene/mechanism evidence is less definitive than Candidate 2.",
      rawEvidence: `GENE: MISSENSESNGL3
Known disease association: possible autosomal dominant developmental epilepsy disorder
Reported inheritance: usually de novo in limited reports
Known mechanism: damaging missense variants in a functional domain
Gene-disease validity in local summary: moderate / emerging

Variant:
chr10:55218401 G>A
Transcript: NM_540003.4
HGVS: c.1286G>A p.(Arg429His)
Consequence: missense_variant
Protein domain: possible epilepsy-associated functional domain

VCF-style fields:
QUAL=810
FILTER=PASS
INFO: DP=52;MQ=60;QD=15.6;SOR=0.78
FORMAT: GT:AD:DP:GQ

Proband blood: 0/1:26,26:52:99
Mother: not available
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

ClinVar-style summary:
No exact matching pathogenic record found in local summary
Nearby variants include VUS and likely pathogenic submissions in limited numbers

Phenotype fit:
Developmental delay: compatible
Severe speech delay: compatible
Epilepsy: compatible
Hypotonia: partial overlap
Feeding difficulties: not a core feature
Dysmorphic features: variable in local summary

Review question:
Assess whether this rare missense finding should be prioritised above a canonical splice candidate in a stronger established gene.`,
      concern:
        "This is plausible but less strong than Candidate 2. It may be review-worthy but should not dominate the handover.",
    },
    {
      id: "candidate-4",
      label: "Candidate 4",
      gene: "RECESSSNGL4",
      variant: "chr9:118809331 C>T",
      zygosity: "Heterozygous",
      consequence: "splice_acceptor_variant",
      inheritanceSignal: "Unknown; no parental samples available",
      clinicalFit:
        "RECESSSNGL4 is associated with an autosomal recessive neurodevelopmental-metabolic disorder. The variant is a real splice acceptor allele, but no second relevant allele has been identified.",
      rawEvidence: `GENE: RECESSSNGL4
Known disease association: autosomal recessive neurodevelopmental-metabolic disorder
Reported inheritance: autosomal recessive
Known mechanism: biallelic loss-of-function
Gene-disease validity in local summary: moderate

Variant:
chr9:118809331 C>T
Transcript: NM_540004.4
HGVS: c.744-2C>T
Consequence: splice_acceptor_variant
Splice position: canonical -2 acceptor site

VCF-style fields:
QUAL=824
FILTER=PASS
INFO: DP=50;MQ=60;QD=16.5;SOR=0.74
FORMAT: GT:AD:DP:GQ

Proband blood: 0/1:25,25:50:99
Mother: not available
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
No ROH or UPD clue involving RECESSSNGL4

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
Assess whether one convincing allele in a recessive gene is enough to explain the case when no second allele is identified.`,
      concern:
        "This is a real single allele but incomplete as a recessive explanation.",
    },
    {
      id: "candidate-5",
      label: "Candidate 5",
      gene: "Singleton analysis limitation",
      variant: "No parental samples available",
      zygosity: "Case-level limitation",
      consequence: "inheritance_limitation",
      inheritanceSignal:
        "Inheritance, de novo status, and segregation cannot be assessed",
      clinicalFit:
        "This is not a disease candidate. It is the central case limitation that affects how all candidate findings should be communicated.",
      rawEvidence: `CASE CONTEXT LIMITATION: singleton analysis
Available samples:
Proband: tested
Mother: not available
Father: not available

Impact on Candidate 2:
Candidate 2 has strong variant-level and phenotype-level support.
However, inheritance cannot be assessed.
Confirmed de novo status cannot be assigned.
Parental mosaicism cannot be assessed.
Segregation information is unavailable.

Impact on Candidate 3:
Candidate 3 is rare and technically plausible.
However, inheritance and segregation cannot be assessed.

Impact on Candidate 4:
A single allele is identified in a recessive gene.
Parental carrier status cannot be assessed.
No second relevant allele is identified in the proband.

Service interpretation:
Singleton analysis can support candidate prioritisation.
However, it provides less inheritance confidence than duo or trio analysis.

Review question:
Assess how the lack of parental samples should shape wording, escalation, and confidence in the final handover.`,
      concern:
        "This is the central limitation. It should be explicitly documented so the final conclusion does not overstate inheritance certainty.",
    },
  ],

  decisionCheckpoints: [
    {
      id: "checkpoint-1",
      title: "Checkpoint 1 — Identify the leading singleton candidate",
      context:
        "Candidate 2 has strong phenotype, mechanism, consequence, rarity, and technical support, but no parental samples are available.",
      question:
        "Which finding should be prioritised for formal review?",
      options: [
        {
          label: "A",
          text: "Candidate 2, because it has the best evidence convergence while still needing cautious inheritance wording.",
          isCorrect: true,
          feedback:
            "Correct. Candidate 2 is strongest, but the singleton limitation must remain visible.",
        },
        {
          label: "B",
          text: "Candidate 4, because a canonical splice variant in a recessive gene should be prioritised even with only one allele found.",
          isCorrect: false,
          feedback:
            "Not quite. Candidate 4 is technically real, but a second relevant allele has not been identified.",
        },
        {
          label: "C",
          text: "Candidate 1, because broad neurodevelopmental genes are useful when no parental inheritance data are available.",
          isCorrect: false,
          feedback:
            "Not quite. Candidate 1 has weak gene evidence, frequency concerns, and poor specificity.",
        },
      ],
      teachingPoint:
        "Singleton analysis can still support prioritisation, but it limits inheritance certainty.",
    },
    {
      id: "checkpoint-2",
      title: "Checkpoint 2 — Avoid unsupported inheritance claims",
      context:
        "Candidate 2 is present in the proband, but neither parent has been tested.",
      question:
        "How should the inheritance of Candidate 2 be described?",
      options: [
        {
          label: "A",
          text: "Confirmed de novo, because a rare splice donor variant in a matching gene is unlikely to be inherited.",
          isCorrect: false,
          feedback:
            "Not quite. De novo status cannot be confirmed without parental testing or equivalent evidence.",
        },
        {
          label: "B",
          text: "Inherited, because singleton analysis should assume one parent carries the variant unless proven otherwise.",
          isCorrect: false,
          feedback:
            "Not quite. Singleton analysis cannot prove inherited or de novo status from the available data.",
        },
        {
          label: "C",
          text: "Inheritance unknown, because parental origin, de novo status, and segregation cannot be assessed.",
          isCorrect: true,
          feedback:
            "Correct. This wording accurately reflects the singleton data.",
        },
      ],
      teachingPoint:
        "Singleton analysis does not provide direct evidence for de novo or inherited status.",
    },
    {
      id: "checkpoint-3",
      title: "Checkpoint 3 — Interpret the recessive single-allele finding",
      context:
        "Candidate 4 is a convincing splice acceptor variant in a recessive gene, but no second allele is identified.",
      question:
        "What is the safest interpretation of Candidate 4?",
      options: [
        {
          label: "A",
          text: "Prioritise it as diagnostic, because the missing second allele may be inherited from an untested parent.",
          isCorrect: false,
          feedback:
            "Not quite. Untested parents do not create evidence for a second allele in the proband.",
        },
        {
          label: "B",
          text: "Document it as a real single allele in a recessive gene, but not a complete explanation without a second relevant allele.",
          isCorrect: true,
          feedback:
            "Correct. It is real and reviewable, but the recessive model is incomplete.",
        },
        {
          label: "C",
          text: "Ignore it entirely, because single alleles in recessive genes cannot be mentioned in singleton analysis.",
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
      title: "Checkpoint 4 — Use singleton evidence proportionately",
      context:
        "The final handover needs to explain what evidence supports Candidate 2 and what remains limited.",
      question:
        "Which statement best balances strength and limitation?",
      options: [
        {
          label: "A",
          text: "Candidate 2 is review-worthy because phenotype, mechanism, rarity, consequence, and technical quality align, but inheritance is unknown.",
          isCorrect: true,
          feedback:
            "Correct. This separates candidate strength from inheritance certainty.",
        },
        {
          label: "B",
          text: "Candidate 2 should be rejected because any variant without parental inheritance data is too uncertain to prioritise.",
          isCorrect: false,
          feedback:
            "Not quite. Strong singleton evidence can still support formal review.",
        },
        {
          label: "C",
          text: "Candidate 2 should be reported as diagnostic because singleton analysis relies mainly on gene and phenotype fit.",
          isCorrect: false,
          feedback:
            "Not quite. Gene and phenotype fit matter, but formal interpretation and inheritance caveats remain important.",
        },
      ],
      teachingPoint:
        "Singleton prioritisation depends on evidence convergence, but communication must preserve uncertainty.",
    },
    {
      id: "checkpoint-5",
      title: "Checkpoint 5 — Final singleton-analysis conclusion",
      context:
        "You need to prepare a safe trainee-level conclusion for formal clinical laboratory review.",
      question:
        "Which conclusion is safest?",
      options: [
        {
          label: "A",
          text: "Avoid prioritising any finding because singleton data cannot support clinically useful candidate ranking.",
          isCorrect: false,
          feedback:
            "Not quite. Singleton data are limited, but strong candidate-level evidence can still be prioritised.",
        },
        {
          label: "B",
          text: "Report Candidate 2 as confirmed de novo because it is rare, technically strong, and fits the phenotype.",
          isCorrect: false,
          feedback:
            "Not quite. No parental samples are available, so confirmed de novo wording would overstate the data.",
        },
        {
          label: "C",
          text: "Prioritise Candidate 2 for review while stating that inheritance, de novo status, and segregation remain unresolved.",
          isCorrect: true,
          feedback:
            "Correct. This conclusion is clear about both candidate strength and singleton limitation.",
        },
      ],
      teachingPoint:
        "Safe singleton handover separates candidate strength from inheritance certainty.",
    },
  ],

  finalReflection:
    "A safe trainee-level conclusion would be that Candidate 2 is the strongest current finding for formal clinical laboratory review. It is a rare canonical splice donor variant in SINGLECAP2, an established autosomal dominant neurodevelopmental epilepsy gene, and the phenotype, loss-of-function mechanism, clinically relevant transcript, population absence, and technical evidence all align. However, this is a singleton analysis because only the proband has been tested. Parental inheritance cannot be assessed, confirmed de novo status cannot be assigned, parental mosaicism cannot be reviewed, and segregation information is unavailable. Candidate 5 is not a disease candidate but is the central inheritance limitation that must be documented. Candidate 3 is a rare and technically plausible missense finding but is less strong because the gene and mechanism evidence are less definitive. Candidate 4 is a technically convincing single splice allele in a recessive gene, but no second relevant allele has been identified. Candidate 1 is technically real but weak because it is relatively frequent, broadly matched, and in a limited-evidence gene. The safest next step is to prioritise Candidate 2 for formal review while clearly stating the singleton-analysis limitation and recommending parental or segregation testing if available.",
};