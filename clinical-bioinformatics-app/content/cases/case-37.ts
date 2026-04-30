export const case37 = {
  id: "case-37",
  slug: "mitochondrial-heteroplasmy-case",
  title: "Case 37: Mitochondrial heteroplasmy review",
  level: "Advanced",
  summary:
    "A mitochondrial variant case focused on interpreting heteroplasmy, tissue relevance, maternal inheritance, phenotype fit, and avoiding simple autosomal-style assumptions.",

  visualisationExampleId: null,

  assessmentFocus: [
    "Mitochondrial heteroplasmy interpretation",
    "Tissue-specific heteroplasmy limitations",
    "Maternal inheritance reasoning",
    "mtDNA versus nuclear variant distinction",
    "Suspected mitochondrial disease phenotype fit",
    "Low-level heteroplasmy caution",
    "Incomplete recessive nuclear mitochondrial evidence",
    "Safe mitochondrial review escalation",
  ],

  guidedTutorMode: {
    type: "static-rule-based",
    description:
      "Uses built-in hints, checkpoint feedback, model answers, and self-check criteria to support safe case reasoning.",
  },

  phase5Assessment: {
    candidateRanking: {
      prompt:
        "Rank the findings from highest to lowest review priority in this case.",
      correctOrder: ["candidate-3", "candidate-4", "candidate-2", "candidate-1"],
      explanation:
        "Candidate 3 is the strongest finding because it is an MT-ND5 mitochondrial variant detected at high heteroplasmy in the proband’s blood and urine, with strong phenotype fit, technical support, and low-level maternal heteroplasmy that may fit variable expression. Candidate 4 is a technically convincing canonical splice variant in a recessive nuclear mitochondrial gene, but only one allele is identified. Candidate 2 is a low-level mtDNA heteroplasmy finding with weak tissue and pathogenicity support. Candidate 1 is technically real but weak because it is inherited from the father, relatively frequent, and in a weakly supported nuclear mitochondrial candidate gene.",
    },

    escalationDecision: {
      prompt:
        "Choose the safest next action for this case.",
      options: [
        {
          id: "prioritise-mtnd5-review",
          label: "A",
          decision:
            "Prioritise Candidate 3 for mitochondrial variant review, document heteroplasmy and tissue evidence, and explain why the other candidates are weaker.",
          isBest: true,
          feedback:
            "Best decision. Candidate 3 has the strongest mitochondrial evidence pattern and should be escalated through the appropriate mitochondrial review pathway.",
        },
        {
          id: "treat-mtdna-like-autosomal",
          label: "B",
          decision:
            "Interpret Candidate 3 like an ordinary heterozygous autosomal variant and focus mainly on whether it is present in the father.",
          isBest: false,
          feedback:
            "Review this choice. mtDNA variants require heteroplasmy-aware and tissue-aware interpretation. Paternal comparison is not used in the same way as autosomal trio inheritance.",
        },
        {
          id: "prioritise-low-level-mtdna",
          label: "C",
          decision:
            "Prioritise Candidate 2 because low-level heteroplasmy is always more suspicious than high heteroplasmy.",
          isBest: false,
          feedback:
            "Review this choice. Low-level heteroplasmy may be real, background noise, or artefact depending on context. Candidate 2 has weak tissue and pathogenicity support.",
        },
      ],
    },

    writtenSummary: {
      prompt:
        "Write a short trainee-level handover summary explaining why Candidate 3 is strongest, how heteroplasmy and tissue evidence should be handled, and why the other candidates are lower priority.",
      checklist: [
        "Identifies Candidate 3 as the strongest current candidate.",
        "States that Candidate 3 is an mtDNA MT-ND5 variant rather than a nuclear heterozygous variant.",
        "Mentions high heteroplasmy in proband blood and urine.",
        "Mentions the mitochondrial phenotype fit, including regression, seizures, hypotonia, exercise intolerance, and lactic acidosis.",
        "Mentions low-level maternal heteroplasmy and the mother's mild symptoms as supportive but not definitive.",
        "Documents that heteroplasmy can vary between tissues.",
        "Explains that Candidate 2 is low-level and weakly supported.",
        "Explains that Candidate 1 is a weak nuclear candidate because of inheritance, frequency, and limited gene-disease evidence.",
        "Explains that Candidate 4 is incomplete as a recessive nuclear mitochondrial explanation because only one allele is identified.",
        "Avoids interpreting mitochondrial variants like ordinary autosomal heterozygous variants.",
        "Recommends escalation through an appropriate mitochondrial variant review pathway.",
      ],
      modelAnswer:
        "Candidate 3 is the strongest current candidate for mitochondrial review. It is an MT-ND5 mtDNA variant detected at high heteroplasmy in the proband’s blood and urine, and the patient’s developmental regression, seizures, hypotonia, exercise intolerance, and intermittent lactic acidosis fit a mitochondrial respiratory-chain disorder. The mother has lower-level heteroplasmy and mild exercise intolerance/fatigue, which may support maternal transmission or variable expression, but tissue distribution and heteroplasmy thresholds must be interpreted carefully. Candidate 2 is a low-level mtDNA finding with weak tissue and pathogenicity support. Candidate 1 is a technically real nuclear variant but is weak because it is inherited from the father, relatively frequent, and in a gene with limited disease evidence. Candidate 4 is a technically convincing splice variant in a recessive nuclear mitochondrial gene, but only one allele is identified. The safest next step is to prioritise Candidate 3 for formal mitochondrial variant review and document the heteroplasmy and tissue limitations clearly.",
    },
  },

  reasoningScorecard: [
    {
      category: "Heteroplasmy interpretation",
      maxScore: 2,
      expectation:
        "Recognises that mtDNA variants are interpreted by heteroplasmy level and tissue context rather than ordinary heterozygous/autosomal logic.",
    },
    {
      category: "Tissue relevance",
      maxScore: 2,
      expectation:
        "Documents that heteroplasmy can vary between blood, urine, muscle, and other tissues, and that tested tissues may not fully reflect affected tissues.",
    },
    {
      category: "Phenotype fit",
      maxScore: 2,
      expectation:
        "Connects Candidate 3 to the suspected mitochondrial phenotype, including regression, seizures, hypotonia, exercise intolerance, and lactic acidosis.",
    },
    {
      category: "Candidate comparison",
      maxScore: 2,
      expectation:
        "Explains why Candidate 2, Candidate 1, and Candidate 4 are weaker than Candidate 3.",
    },
    {
      category: "Safe escalation",
      maxScore: 2,
      expectation:
        "Recommends formal mitochondrial variant review and clear documentation of heteroplasmy, tissue source, and limitations.",
    },
  ],

  patient: {
    age: 4,
    sex: "Female",
  },

  referralReason:
    "A 4-year-old girl has been referred for genomic investigation because of developmental regression, seizures, hypotonia, exercise intolerance, intermittent lactic acidosis, and suspected mitochondrial disease.",

  testType:
    "Rare disease genome sequencing with mitochondrial variant review and heteroplasmy assessment",

  familyStructure:
    "The proband and both biological parents have been tested. The mother is reportedly mildly symptomatic with exercise intolerance, but no confirmed molecular diagnosis is documented.",

  history: [
    "Developmental delay followed by developmental regression",
    "Seizures beginning before age 3",
    "Hypotonia from infancy",
    "Exercise intolerance and easy fatigability",
    "Intermittent lactic acidosis noted in clinical biochemistry",
    "Clinical team specifically queries a mitochondrial disorder",
    "No known previous molecular diagnosis",
  ],

  phenotype: [
    "Developmental regression",
    "Seizures",
    "Hypotonia",
    "Exercise intolerance",
    "Intermittent lactic acidosis",
    "Suspected mitochondrial disease",
  ],

  familyHistory:
    "The mother is reported to have mild exercise intolerance and fatigue but no confirmed diagnosis. The father is reportedly unaffected. No clearly affected maternal relatives are documented in the information shown.",

  serviceContext: [
    "This is a mitochondrial heteroplasmy case.",
    "The key issue is that mitochondrial variants are not interpreted like ordinary autosomal heterozygous variants.",
    "Heteroplasmy level, tissue tested, phenotype fit, maternal inheritance, assay sensitivity, and known mitochondrial gene mechanism all matter.",
    "A variant may be present at different levels in blood, urine, muscle, or other tissues.",
    "Your task is to identify the strongest mitochondrial candidate while documenting tissue and heteroplasmy limitations clearly.",
  ],

  candidateFindings: [
    {
      id: "candidate-1",
      label: "Candidate 1",
      gene: "NUCMITO4",
      variant: "chr9:118809331 C>T",
      zygosity: "Heterozygous nuclear variant",
      consequence: "missense_variant",
      inheritanceSignal: "Inherited from unaffected father",
      clinicalFit:
        "NUCMITO4 is a nuclear gene with a possible mitochondrial-function association, but the variant is inherited from an unaffected father, has limited gene-disease evidence, and does not explain the maternal/heteroplasmy pattern.",
      rawEvidence: `GENE: NUCMITO4
Genome location: nuclear genome
Known disease association: possible mitochondrial-function disorder in limited reports
Reported inheritance: autosomal dominant proposed in limited evidence
Known mechanism: uncertain
Gene-disease validity in local summary: limited / emerging

Variant:
chr9:118809331 C>T
Transcript: NM_370001.2
HGVS: c.899C>T p.(Pro300Leu)
Consequence: missense_variant
Protein domain: outside known functional region in local summary

VCF-style fields:
QUAL=690
FILTER=PASS
INFO: DP=46;MQ=60;QD=15.0;SOR=0.82
FORMAT: GT:AD:DP:GQ

Proband: 0/1:23,23:46:99
Mother: 0/0:40,0:40:99
Father: 0/1:21,22:43:99

Read-level notes:
ALT reads seen on both forward and reverse strands
ALT reads distributed across read positions
No local mapping warning
No soft-clipping concern

Population:
gnomAD AF = 0.0011
gnomAD allele count = 290
Homozygotes observed in population summary = 1

Constraint:
LOEUF = 0.82
pLI = 0.08

ClinVar-style summary:
No exact matching pathogenic record found in local summary
Gene-disease relationship remains limited
No strong local evidence connecting this specific variant to mitochondrial encephalopathy`,
      concern:
        "This is technically real, but it is weak because inheritance, population frequency, gene-disease validity, and phenotype specificity do not support it as the main explanation.",
    },
    {
      id: "candidate-2",
      label: "Candidate 2",
      gene: "MT-COX2",
      variant: "m.7581A>G",
      zygosity: "Low-level mtDNA heteroplasmy",
      consequence: "missense_variant",
      inheritanceSignal:
        "Detected at very low heteroplasmy in blood; not detected above threshold in urine",
      clinicalFit:
        "MT-COX2 has mitochondrial relevance, but the variant is detected at a very low level in blood only and lacks strong evidence for pathogenicity in the local summary.",
      rawEvidence: `MITOCHONDRIAL VARIANT:
Gene: MT-COX2
Genome: mitochondrial DNA
Variant: m.7581A>G
HGVS protein-style summary: p.(Ile120Val)-like missense change
Consequence: missense_variant
Mitochondrial complex: complex IV-associated gene

Sample / assay context:
Blood-derived DNA tested by genome sequencing
Urine epithelial cell mtDNA follow-up summary available
Mitochondrial heteroplasmy caller used in local pipeline
Assay sensitivity threshold in current summary: approximately 2% heteroplasmy

Blood heteroplasmy:
Total mtDNA depth at site: 4,820
Reference reads: 4,632
Alternate reads: 188
Estimated heteroplasmy: 3.9%
Mean base quality: high
Mean mapping quality: high

Urine heteroplasmy:
Total mtDNA depth at site: 3,940
Reference reads: 3,925
Alternate reads: 15
Estimated heteroplasmy: 0.4%
Below local reporting threshold

Mother:
Blood heteroplasmy: 1.1%
Urine heteroplasmy: below threshold

Father:
Blood heteroplasmy: not detected above threshold
Note: paternal mtDNA comparison is not usually used for mitochondrial inheritance in the same way as autosomal variants

Technical notes:
Variant observed close to lower reporting range
No strong strand bias
No obvious local alignment warning
Low-level signal could represent low-level heteroplasmy, background noise, or sequencing artefact depending on assay context

Population / database-style summary:
Variant observed at low levels in some population mitochondrial summaries
No strong pathogenic classification in local summary
No strong disease-specific evidence for this exact variant

Phenotype fit:
Mitochondrial phenotype possible in broad terms
Specific variant evidence weak
Heteroplasmy level in tested tissues is low`,
      concern:
        "This should be treated cautiously. The heteroplasmy level is very low, tissue evidence is not supportive, and variant-level pathogenic evidence is weak.",
    },
    {
      id: "candidate-3",
      label: "Candidate 3",
      gene: "MT-ND5",
      variant: "m.13513G>A",
      zygosity: "mtDNA heteroplasmic variant",
      consequence: "missense_variant",
      inheritanceSignal:
        "Detected at high heteroplasmy in proband blood and urine; low-level heteroplasmy detected in mother",
      clinicalFit:
        "MT-ND5 is associated with mitochondrial respiratory-chain disease. The patient’s developmental regression, seizures, hypotonia, exercise intolerance, and intermittent lactic acidosis are strongly compatible with a mitochondrial disorder.",
      rawEvidence: `MITOCHONDRIAL VARIANT:
Gene: MT-ND5
Genome: mitochondrial DNA
Variant: m.13513G>A
HGVS protein-style summary: p.(Asp393Asn)-like missense change
Consequence: missense_variant
Mitochondrial complex: complex I-associated gene
Known mechanism: pathogenic mtDNA missense variants affecting respiratory-chain function

Sample / assay context:
Blood-derived DNA tested by genome sequencing
Urine epithelial cell mtDNA follow-up summary available
Mitochondrial heteroplasmy caller used in local pipeline
Assay sensitivity threshold in current summary: approximately 2% heteroplasmy

Blood heteroplasmy in proband:
Total mtDNA depth at site: 5,420
Reference reads: 1,680
Alternate reads: 3,740
Estimated heteroplasmy: 69.0%
Mean base quality: high
Mean mapping quality: high
Strand support: ALT reads on both forward and reverse strands

Urine heteroplasmy in proband:
Total mtDNA depth at site: 4,880
Reference reads: 980
Alternate reads: 3,900
Estimated heteroplasmy: 79.9%
Mean base quality: high
Mean mapping quality: high
Strand support: ALT reads on both forward and reverse strands

Mother:
Blood heteroplasmy: 8.4%
Urine heteroplasmy: 14.6%
Clinical note: mother reports mild exercise intolerance and fatigue
Interpretation note: lower maternal heteroplasmy may fit milder or subclinical features, but tissue distribution matters

Father:
Blood heteroplasmy: not detected above threshold
Note: paternal comparison is not used to infer mtDNA inheritance in the same way as nuclear inheritance

Technical notes:
No local alignment warning
No NUMT warning in local mitochondrial pipeline summary
Variant detected by mitochondrial-aware caller
Variant visible on manual mitochondrial read review
No strong strand bias
No concerning read-end clustering

Population / database-style summary:
Variant is rare in population mitochondrial summaries
Variant has been submitted in association with mitochondrial encephalopathy / Leigh-like or MELAS-like phenotypes in local summary
Multiple reports note variable heteroplasmy and tissue-dependent severity

Phenotype fit:
Developmental regression: strong match
Seizures: strong match
Hypotonia: strong match
Exercise intolerance: compatible
Intermittent lactic acidosis: strong mitochondrial support

Clinical interpretation note:
Heteroplasmy thresholds are not absolute and vary by tissue, gene, variant, and disease context
The high heteroplasmy in proband blood and urine plus phenotype fit makes this the strongest candidate
Formal mitochondrial variant review and reporting pathway required`,
      concern:
        "This is the strongest current candidate because the variant is technically robust, present at high heteroplasmy in relevant tested tissues, fits the mitochondrial phenotype, has supportive maternal low-level heteroplasmy, and has stronger disease evidence than the other findings.",
    },
    {
      id: "candidate-4",
      label: "Candidate 4",
      gene: "RECESSMIT2",
      variant: "chr2:118809331 G>A",
      zygosity: "Heterozygous nuclear variant",
      consequence: "splice_acceptor_variant",
      inheritanceSignal: "Inherited from unaffected mother",
      clinicalFit:
        "RECESSMIT2 is a nuclear mitochondrial gene associated with autosomal recessive mitochondrial disease. The variant is a canonical splice acceptor, but only one inherited heterozygous allele is identified.",
      rawEvidence: `GENE: RECESSMIT2
Genome location: nuclear genome
Known disease association: autosomal recessive mitochondrial disease
Reported inheritance: autosomal recessive
Known mechanism: biallelic loss-of-function

Variant:
chr2:118809331 G>A
Transcript: NM_370004.4
HGVS: c.744-2G>A
Consequence: splice_acceptor_variant
Splice position: canonical -2 acceptor site
Predicted effect: likely acceptor splice-site disruption

VCF-style fields:
QUAL=790
FILTER=PASS
INFO: DP=48;MQ=60;QD=16.5;SOR=0.74
FORMAT: GT:AD:DP:GQ

Proband: 0/1:24,24:48:99
Mother: 0/1:22,21:43:99
Father: 0/0:41,0:41:99

Read-level notes:
ALT reads seen on both forward and reverse strands
ALT reads distributed across read positions
No local mapping warning
No soft-clipping concern
Second caller: detected

Second-allele review:
No second coding SNV/indel identified in current candidate list
No confident exon-level deletion/duplication detected
Deep intronic/regulatory variants not fully assessed in this summary

Population:
gnomAD AF = 0.000003
gnomAD allele count = 1
No homozygotes observed in local summary

Constraint:
LOEUF = 0.30
pLI = 0.83

ClinVar-style summary:
No exact matching variant record found in local summary
Other biallelic splice and truncating variants in RECESSMIT2 have been submitted in affected individuals with mitochondrial disease`,
      concern:
        "This is technically convincing as a single inherited nuclear splice variant, but it is incomplete as a recessive explanation without a second relevant allele.",
    },
  ],

  decisionCheckpoints: [
    {
      id: "checkpoint-1",
      title: "Checkpoint 1 — Heteroplasmy is not ordinary heterozygosity",
      context:
        "Candidate 3 is present at approximately 69% heteroplasmy in blood and 80% heteroplasmy in urine. Candidate 2 is present at approximately 4% in blood and below threshold in urine.",
      question:
        "What is the safest interpretation of these heteroplasmy patterns?",
      options: [
        {
          label: "A",
          text: "Candidate 3 is more convincing because it is present at high heteroplasmy in more than one tested tissue and fits the phenotype.",
          isCorrect: true,
          feedback:
            "Correct. Heteroplasmy level and tissue pattern support Candidate 3 much more strongly than Candidate 2.",
        },
        {
          label: "B",
          text: "Candidate 2 is stronger because lower heteroplasmy always means more severe disease.",
          isCorrect: false,
          feedback:
            "Not quite. Low-level heteroplasmy may be real or artefactual, but it is not automatically stronger.",
        },
        {
          label: "C",
          text: "Both variants should be interpreted like ordinary 0/1 heterozygous nuclear variants.",
          isCorrect: false,
          feedback:
            "Not quite. Mitochondrial heteroplasmy needs different interpretation from nuclear heterozygosity.",
        },
      ],
      teachingPoint:
        "Mitochondrial variants require heteroplasmy-aware interpretation rather than simple heterozygous/reference logic.",
    },
    {
      id: "checkpoint-2",
      title: "Checkpoint 2 — Tissue matters",
      context:
        "Candidate 3 has high heteroplasmy in both blood and urine. Candidate 2 is low in blood and below threshold in urine.",
      question: "Why does tissue evidence matter in mitochondrial disease?",
      options: [
        {
          label: "A",
          text: "Because mtDNA heteroplasmy can vary between tissues, and a tested tissue may not perfectly reflect the affected tissue.",
          isCorrect: true,
          feedback:
            "Correct. Tissue distribution is an important caveat in mitochondrial interpretation.",
        },
        {
          label: "B",
          text: "Because mitochondrial variants are only real if they are present in blood at exactly 50%.",
          isCorrect: false,
          feedback:
            "Not quite. mtDNA variants are not interpreted using ordinary 50% heterozygous expectations.",
        },
        {
          label: "C",
          text: "Because urine results should always override all clinical information.",
          isCorrect: false,
          feedback:
            "Not quite. Urine can be useful, but interpretation still needs phenotype, variant evidence, and formal review.",
        },
      ],
      teachingPoint:
        "A mitochondrial result should be interpreted with tissue source and disease context in mind.",
    },
    {
      id: "checkpoint-3",
      title: "Checkpoint 3 — Identify the strongest mitochondrial candidate",
      context:
        "Candidate 3 is a mitochondrial MT-ND5 variant detected at high heteroplasmy in the proband, with low-level maternal heteroplasmy, supportive disease evidence, and a strong mitochondrial phenotype.",
      question: "Why is Candidate 3 the strongest current candidate?",
      options: [
        {
          label: "A",
          text: "Because heteroplasmy level, tissue evidence, phenotype fit, mitochondrial gene mechanism, technical confidence, and maternal pattern all support it.",
          isCorrect: true,
          feedback:
            "Correct. Candidate 3 has the strongest combined mitochondrial evidence pattern.",
        },
        {
          label: "B",
          text: "Because all MT-ND5 variants are pathogenic.",
          isCorrect: false,
          feedback:
            "Not quite. The specific variant and evidence pattern matter.",
        },
        {
          label: "C",
          text: "Because paternal absence proves de novo mitochondrial inheritance.",
          isCorrect: false,
          feedback:
            "Not quite. Mitochondrial inheritance is not interpreted like autosomal trio inheritance, and paternal absence is not the key evidence.",
        },
      ],
      teachingPoint:
        "Strong mitochondrial candidate reasoning combines heteroplasmy, tissue, phenotype, gene mechanism, and variant evidence.",
    },
    {
      id: "checkpoint-4",
      title: "Checkpoint 4 — Nuclear mitochondrial gene with one allele",
      context:
        "Candidate 4 is a canonical splice variant in a recessive nuclear mitochondrial gene, inherited from the mother. No second allele is identified.",
      question: "What is the safest interpretation of Candidate 4?",
      options: [
        {
          label: "A",
          text: "It may be a real carrier-level finding, but it does not currently explain a recessive mitochondrial disease without a second allele.",
          isCorrect: true,
          feedback:
            "Correct. Candidate 4 is technically convincing but incomplete as a recessive explanation.",
        },
        {
          label: "B",
          text: "It is diagnostic because any mitochondrial-related gene variant explains suspected mitochondrial disease.",
          isCorrect: false,
          feedback:
            "Not quite. Gene relevance does not override the inheritance model.",
        },
        {
          label: "C",
          text: "It should be prioritised over Candidate 3 because nuclear variants are easier to interpret.",
          isCorrect: false,
          feedback:
            "Not quite. Ease of interpretation does not determine candidate strength.",
        },
      ],
      teachingPoint:
        "Mitochondrial disease can involve nuclear or mtDNA variants, but each must fit its own inheritance model.",
    },
    {
      id: "checkpoint-5",
      title: "Checkpoint 5 — Safe service-style next step",
      context:
        "Candidate 3 is the strongest current candidate. Candidate 2 is low-level and weakly supported. Candidate 1 is a weak nuclear candidate. Candidate 4 is incomplete recessive evidence.",
      question: "What is the safest next step?",
      options: [
        {
          label: "A",
          text: "Prioritise Candidate 3 for mitochondrial variant review, document heteroplasmy and tissue evidence, and explain why the other candidates are weaker.",
          isCorrect: true,
          feedback:
            "Correct. This gives a safe and reviewable mitochondrial interpretation summary.",
        },
        {
          label: "B",
          text: "Ignore heteroplasmy because mitochondrial variants should be interpreted like autosomal variants.",
          isCorrect: false,
          feedback:
            "Not quite. Heteroplasmy is central to mitochondrial interpretation.",
        },
        {
          label: "C",
          text: "Report Candidate 2 because low-level heteroplasmy is always more suspicious.",
          isCorrect: false,
          feedback:
            "Not quite. Candidate 2 has weak heteroplasmy and variant evidence.",
        },
      ],
      teachingPoint:
        "Safe mitochondrial review means explicitly documenting heteroplasmy, tissue source, phenotype fit, and remaining limitations.",
    },
  ],

  finalReflection:
    "A safe trainee-level conclusion would be that Candidate 3 is the strongest current candidate for further mitochondrial review because it is an MT-ND5 heteroplasmic variant detected at high levels in the proband’s blood and urine, with supportive phenotype fit, mitochondrial gene mechanism, technical evidence, and low-level maternal heteroplasmy that may fit variable expression. Candidate 2 is a low-level mtDNA variant with weak tissue and pathogenicity support. Candidate 1 is a technically real nuclear variant but weak because of inheritance, frequency, and limited gene-disease evidence. Candidate 4 is a technically convincing single nuclear splice variant in a recessive mitochondrial gene, but it is incomplete without a second allele. The safest next step is to prioritise Candidate 3, document heteroplasmy and tissue limitations clearly, and escalate through the appropriate mitochondrial variant review pathway.",
};