export const case70 = {
    id: "case-70",
    slug: "advanced-mixed-mechanism-capstone-case",
    title: "Case 70: Advanced mixed-mechanism capstone",
    level: "Advanced",
    summary:
      "A capstone case combining SNV, CNV, non-coding, inheritance, phenotype fit, technical confidence, and analysis limitations into one service-style prioritisation task.",
  
    visualisationExampleId: null,
  
    assessmentFocus: [
      "Mixed-mechanism case reasoning",
      "SNV, CNV, and non-coding evidence",
      "Inheritance and phenotype integration",
      "Technical limitation awareness",
      "Candidate prioritisation",
      "Safe service-style handover",
    ],
  
    guidedTutorMode: {
      type: "static-rule-based",
      description:
        "Uses built-in hints, checkpoint feedback, model answers, and self-check criteria to support safe case reasoning.",
    },
  
    phase5Assessment: {
      candidateRanking: {
        prompt:
          "Rank the findings from strongest to weakest based on phenotype fit, inheritance, gene mechanism, variant consequence, CNV evidence, non-coding uncertainty, technical confidence, and the overall service-style conclusion.",
        correctOrder: [
          "candidate-4",
          "candidate-6",
          "candidate-5",
          "candidate-2",
          "candidate-3",
          "candidate-1",
        ],
        explanation:
          "Candidate 4 is strongest because it has the best convergence across phenotype fit, established gene-disease association, de novo inheritance, canonical splice consequence, loss-of-function mechanism, rarity, and technical confidence. Candidate 6 is not a separate disease candidate, but it is central because it forces integrated mixed-mechanism reasoning across the whole case. Candidate 5 is an important limitation because a phenotype-compatible recessive gene is not fully excluded due to a poorly assessed second-allele region. Candidate 2 is a plausible but uncertain non-coding/regulatory finding that should not outrank the stronger coding candidate. Candidate 3 is a likely real CNV but weak because dosage, inheritance, and phenotype evidence are limited. Candidate 1 is broad, inherited, relatively frequent, and poorly specific.",
      },
  
      escalationDecision: {
        prompt:
          "Choose the safest final action for this advanced mixed-mechanism case.",
        options: [
          {
            id: "report-everything-equally",
            label: "A",
            decision:
              "Present all findings as equally likely because mixed-mechanism cases are too complex to prioritise safely.",
            isBest: false,
            feedback:
              "Review this choice. Complex cases still require proportionate prioritisation; avoiding ranking makes the handover less useful.",
          },
          {
            id: "report-noncoding-as-main",
            label: "B",
            decision:
              "Prioritise the non-coding candidate because regulatory variants are easy to miss and should be weighted above coding variants.",
            isBest: false,
            feedback:
              "Review this choice. Non-coding candidates can matter, but this one lacks the evidence needed to outrank the stronger coding finding.",
          },
          {
            id: "prioritise-coding-and-document-others",
            label: "C",
            decision:
              "Prioritise Candidate 4 for formal review, document the recessive limitation and non-coding uncertainty, and explain why weaker findings were deprioritised.",
            isBest: true,
            feedback:
              "Best decision. This gives a clear leading candidate while preserving uncertainty, limitations, and traceable review of alternatives.",
          },
        ],
      },
  
      writtenSummary: {
        prompt:
          "Write a short trainee-level handover summary that integrates the coding candidate, non-coding candidate, CNV finding, recessive limitation, and final prioritisation.",
        checklist: [
          "Names Candidate 4 as the strongest current finding.",
          "Explains why Candidate 4 has the best evidence convergence.",
          "Describes Candidate 5 as a limitation, not a positive diagnosis.",
          "Keeps Candidate 2 as an uncertain non-coding/regulatory candidate rather than overcalling it.",
          "Explains why Candidate 3 and Candidate 1 are weaker.",
          "Provides a clear, safe, reviewable final handover with formal review/sign-off boundaries.",
        ],
        modelAnswer:
          "Candidate 4 is the strongest current finding for formal clinical laboratory review. It is an apparent de novo canonical splice donor variant in CAPSTONE4, an established autosomal dominant syndromic neurodevelopmental gene with a loss-of-function mechanism. The patient’s developmental delay, severe speech delay, epilepsy, hypotonia, feeding difficulties, dysmorphic features, and regression history fit the reported disease spectrum, and the variant is rare, technically convincing, affects the clinically preferred transcript, and has good parental coverage. Candidate 5 is not a diagnosis, but it is an important limitation because a phenotype-compatible recessive gene has a poorly assessed region where a second allele could theoretically be missed. Candidate 2 is a plausible non-coding/regulatory finding, but the evidence is not strong enough to outrank Candidate 4 because the regulatory mechanism, functional effect, and clinical interpretation remain uncertain. Candidate 3 is likely a real CNV but is inherited and has weak dosage evidence, while Candidate 1 is broad, inherited, relatively frequent, and poorly specific. The safest next step is to prioritise Candidate 4, document Candidate 5 and Candidate 2 proportionately, explain why the weaker findings were deprioritised, and escalate through formal clinical laboratory review and sign-off.",
      },
    },
  
    reasoningScorecard: [
      {
        category: "Mixed-mechanism integration",
        maxScore: 2,
        expectation:
          "Integrates SNV, CNV, non-coding, inheritance, phenotype, and technical limitation evidence rather than judging each feature in isolation.",
      },
      {
        category: "Candidate prioritisation",
        maxScore: 2,
        expectation:
          "Identifies the strongest candidate while keeping uncertain and weaker findings proportionate.",
      },
      {
        category: "Non-coding caution",
        maxScore: 2,
        expectation:
          "Recognises that non-coding/regulatory candidates can be relevant but usually need strong functional, segregation, and phenotype support.",
      },
      {
        category: "Limitation handling",
        maxScore: 2,
        expectation:
          "Documents coverage or second-allele limitations without converting them into positive findings.",
      },
      {
        category: "Safe communication",
        maxScore: 2,
        expectation:
          "Produces a clear service-style handover that prioritises, explains uncertainty, and preserves formal review boundaries.",
      },
    ],
  
    patient: {
      age: 9,
      sex: "Male",
    },
  
    referralReason:
      "A 9-year-old boy has been referred for rare disease genome analysis because of global developmental delay, severe speech delay, epilepsy, hypotonia, feeding difficulties, mild dysmorphic features, and episodes of regression during intercurrent illness. The case includes multiple possible mechanisms: a coding SNV, an uncertain non-coding regulatory finding, a CNV, a recessive-gene limitation, and several weaker inherited findings. The clinical team has requested a clear service-style prioritisation summary.",
  
    testType:
      "Rare disease trio genome sequencing with SNV/indel, CNV, non-coding/regulatory, inheritance, phenotype, limitation, and technical-confidence review",
  
    familyStructure:
      "The proband and both biological parents have been tested. Both parents are reportedly unaffected. No known consanguinity is reported. The strongest coding candidate appears absent from both parents with good coverage. Other findings show inherited, uncertain, or technically limited patterns.",
  
    history: [
      "Global developmental delay noted in infancy",
      "Severe expressive speech delay",
      "Epilepsy beginning at age 3",
      "Generalised hypotonia",
      "Feeding difficulties in early childhood",
      "Mild dysmorphic features noted by clinical genetics",
      "Episodes of regression during significant intercurrent illness",
      "No known previous molecular diagnosis",
      "Both parents are reportedly unaffected",
      "Genome review identified coding, non-coding, CNV, and limitation findings",
      "Clinical team requested a clear integrated final prioritisation summary",
    ],
  
    phenotype: [
      "Global developmental delay",
      "Severe speech delay",
      "Epilepsy",
      "Hypotonia",
      "Feeding difficulties",
      "Mild dysmorphic features",
      "Illness-associated regression",
      "Mixed-mechanism analysis context",
    ],
  
    familyHistory:
      "Both parents are reportedly unaffected. No known family history of developmental delay, epilepsy, hypotonia, severe speech delay, feeding difficulties, regression, dysmorphic features, or a similar neurodevelopmental presentation is reported. No known consanguinity is reported.",
  
    serviceContext: [
      "This is an advanced mixed-mechanism capstone case.",
      "The key issue is not simply finding the most dramatic-looking variant.",
      "The learner must integrate coding consequence, non-coding uncertainty, CNV dosage, recessive limitations, inheritance, phenotype fit, technical confidence, and service-style communication.",
      "The strongest conclusion should identify one leading candidate while documenting uncertain findings and limitations proportionately.",
      "The learner should not overcall the non-coding finding simply because it is interesting.",
      "The learner should not treat a poorly covered region as a diagnosis.",
      "The final handover should be clear, traceable, and appropriate for formal clinical laboratory review.",
    ],
  
    candidateFindings: [
      {
        id: "candidate-1",
        label: "Candidate 1",
        gene: "BROADCAP1",
        variant: "chr2:77190442 C>T",
        zygosity: "Heterozygous",
        consequence: "missense_variant",
        inheritanceSignal: "Inherited from unaffected father",
        clinicalFit:
          "BROADCAP1 has a broad neurodevelopmental association in limited reports, but the variant is inherited from the unaffected father, relatively frequent, and does not explain the full syndromic presentation well.",
        rawEvidence: `GENE: BROADCAP1
  Known disease association: broad neurodevelopmental association in limited reports
  Reported inheritance: autosomal dominant proposed
  Known mechanism: uncertain
  Gene-disease validity in local summary: limited
  
  Variant:
  chr2:77190442 C>T
  Transcript: NM_700001.2
  HGVS: c.899C>T p.(Pro300Leu)
  Consequence: missense_variant
  Protein domain: outside proposed recurrent functional region
  
  VCF-style fields:
  QUAL=684
  FILTER=PASS
  INFO: DP=46;MQ=60;QD=14.9;SOR=0.84
  FORMAT: GT:AD:DP:GQ
  
  Proband blood: 0/1:23,23:46:99
  Mother blood: 0/0:44,0:44:99
  Father blood: 0/1:22,22:44:99
  
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
  Illness-associated regression: not a core feature
  Dysmorphic features: variable
  
  Review question:
  Assess whether this inherited, relatively frequent, broad-match finding should drive the final mixed-mechanism conclusion.`,
        concern:
          "This is technically real but weak. It should be reviewed and deprioritised rather than treated as the main explanation.",
      },
      {
        id: "candidate-2",
        label: "Candidate 2",
        gene: "REGCAP2 regulatory region",
        variant: "chr5:88441022 A>G",
        zygosity: "Heterozygous",
        consequence: "non_coding_regulatory_variant",
        inheritanceSignal: "Apparent de novo with good parental coverage",
        clinicalFit:
          "The variant lies in a predicted enhancer near REGCAP2, a neurodevelopmental gene with partial phenotype overlap. It is rare and apparently de novo, but there is no direct functional evidence, no confirmed enhancer-gene link in the current summary, and no established diagnostic framework for this exact non-coding change.",
        rawEvidence: `REGULATORY REGION: predicted enhancer near REGCAP2
  Nearby gene:
  REGCAP2
  Known disease association: autosomal dominant neurodevelopmental disorder in local summary
  Known coding mechanism: damaging coding variants and loss-of-function variants reported
  Non-coding mechanism: not established for this exact enhancer in local summary
  
  Variant:
  chr5:88441022 A>G
  Annotation: non_coding_regulatory_variant
  Predicted element: developmental brain enhancer in local teaching summary
  Distance to REGCAP2 transcription start site: approximately 42 kb
  No coding consequence
  No canonical splice consequence
  
  VCF-style fields:
  QUAL=890
  FILTER=PASS
  INFO: DP=50;MQ=60;QD=17.8;SOR=0.70
  FORMAT: GT:AD:DP:GQ
  
  Proband blood: 0/1:25,25:50:99
  Mother blood: 0/0:44,0:44:99
  Father blood: 0/0:43,0:43:99
  
  Read-level notes:
  ALT reads seen on both forward and reverse strands
  ALT reads distributed across read positions
  High mapping quality
  No local low-complexity warning
  Second caller: detected
  
  Population:
  gnomAD AF = not observed in local summary
  gnomAD allele count = 0
  
  Functional / regulatory evidence:
  No patient RNA evidence available
  No reporter assay available
  No chromatin capture evidence in current summary proving direct REGCAP2 regulation
  Predicted enhancer overlaps open chromatin in developing brain dataset in local teaching summary
  No known recurrent pathogenic variant at this exact base
  No established regulatory hotspot in local summary
  
  Phenotype fit:
  Developmental delay: compatible
  Severe speech delay: compatible
  Epilepsy: compatible
  Hypotonia: variable
  Feeding difficulties: weak overlap
  Illness-associated regression: not a core feature
  
  Interpretation limitation:
  The finding is interesting and technically real.
  However, the regulatory mechanism is uncertain and should not outrank a strong coding candidate without stronger functional or segregation evidence.
  
  Review question:
  Assess whether this non-coding candidate should be documented as uncertain rather than treated as the main diagnosis.`,
        concern:
          "This is a plausible but uncertain non-coding candidate. It should be documented proportionately, not overcalled.",
      },
      {
        id: "candidate-3",
        label: "Candidate 3",
        gene: "CNVCAP3 region",
        variant: "chr16:29120000-29205000 duplication",
        zygosity: "Heterozygous duplication",
        consequence: "copy_number_gain",
        inheritanceSignal: "Inherited from unaffected mother",
        clinicalFit:
          "The duplication is likely real, but it is inherited from the unaffected mother, overlaps population CNVs, and has no established triplosensitivity mechanism for the patient’s phenotype.",
        rawEvidence: `CNV REGION: chr16:29120000-29205000
  CNV type: duplication
  Estimated size: 85 kb
  Copy-number state: heterozygous duplication
  
  Gene:
  CNVCAP3
  Known disease association: possible developmental association in limited reports
  Known mechanism: uncertain
  Triplosensitivity evidence: not established
  
  Inheritance:
  Proband: duplication present
  Mother: duplication present
  Father: duplication not detected
  
  CNV caller summary:
  Caller 1: duplication PASS
  Caller 2: duplication supported
  Quality score: 104
  Number of affected targets/windows: 25
  
  Read-depth evidence:
  Expected normalised depth in diploid regions: ~1.00
  Proband normalised depth across interval: ~1.47
  Mother normalised depth across interval: ~1.48
  Father normalised depth across interval: ~1.00
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
  Illness-associated regression: not a core feature
  Dysmorphic features: variable
  
  Review question:
  Assess whether this inherited copy-number gain has enough dosage, phenotype, and population support to be prioritised.`,
        concern:
          "This is likely technically real but weak because the dosage mechanism is uncertain, population overlap is present, and it is inherited from an unaffected mother.",
      },
      {
        id: "candidate-4",
        label: "Candidate 4",
        gene: "CAPSTONE4",
        variant: "chr12:66190442 G>A",
        zygosity: "Heterozygous",
        consequence: "splice_donor_variant",
        inheritanceSignal: "Apparent de novo with good parental coverage",
        clinicalFit:
          "CAPSTONE4 is associated with an autosomal dominant syndromic neurodevelopmental disorder. The variant is rare, technically strong, affects a canonical splice donor on the clinically preferred transcript, fits the loss-of-function mechanism, and matches the patient’s phenotype.",
        rawEvidence: `GENE: CAPSTONE4
  Known disease association: autosomal dominant syndromic neurodevelopmental disorder
  Reported inheritance: usually de novo
  Known mechanism: haploinsufficiency / loss-of-function
  Gene-disease validity in local summary: established
  
  Variant:
  chr12:66190442 G>A
  Transcript: NM_700004.5
  HGVS: c.744+1G>A
  Consequence: splice_donor_variant
  Splice position: canonical +1 donor site
  Transcript note: affects clinically preferred transcript in local summary
  
  VCF-style fields:
  QUAL=966
  FILTER=PASS
  INFO: DP=58;MQ=60;QD=16.7;SOR=0.72
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
  LOEUF = 0.14
  pLI = 0.99
  
  ClinVar-style summary:
  No exact matching variant record found in local summary
  Other truncating and canonical splice variants in CAPSTONE4 have been submitted as pathogenic/likely pathogenic in affected individuals
  
  Phenotype fit:
  Global developmental delay: strong match
  Severe speech delay: strong match
  Epilepsy: strong match
  Hypotonia: strong match
  Feeding difficulties: compatible
  Mild dysmorphic features: compatible
  Illness-associated regression: reported in some individuals but should not be over-relied upon
  
  Review question:
  Assess whether this coding candidate has the strongest overall evidence convergence in the mixed-mechanism case.`,
        concern:
          "This is the strongest current candidate. It should be prioritised for formal clinical laboratory review.",
      },
      {
        id: "candidate-5",
        label: "Candidate 5",
        gene: "RECLIMIT5",
        variant: "One heterozygous splice variant plus poorly assessed second-allele region",
        zygosity: "Heterozygous single allele with second-allele limitation",
        consequence: "splice_acceptor_variant plus coverage_limitation",
        inheritanceSignal:
          "Single allele inherited from mother; second allele cannot be fully assessed in one poorly covered region",
        clinicalFit:
          "RECLIMIT5 is associated with an autosomal recessive neurodevelopmental-metabolic disorder. One real splice allele is present, but the recessive model is incomplete. A poorly covered region means a second allele cannot be fully excluded, but no second variant is currently identified.",
        rawEvidence: `GENE: RECLIMIT5
  Known disease association: autosomal recessive neurodevelopmental-metabolic disorder
  Reported inheritance: autosomal recessive
  Known mechanism: biallelic loss-of-function or damaging missense variants
  Gene-disease validity in local summary: established / moderate
  
  Identified sequence variant:
  chr9:118809331 C>T
  Transcript: NM_700005.4
  HGVS: c.744-2C>T
  Consequence: splice_acceptor_variant
  Splice position: canonical -2 acceptor site
  
  VCF-style fields:
  QUAL=824
  FILTER=PASS
  INFO: DP=50;MQ=60;QD=16.5;SOR=0.74
  FORMAT: GT:AD:DP:GQ
  
  Proband blood: 0/1:25,25:50:99
  Mother blood: 0/1:22,23:45:99
  Father blood: 0/0:44,0:44:99
  
  Read-level notes:
  ALT reads seen on both forward and reverse strands
  ALT reads distributed across read positions
  High mapping quality
  Second caller: detected
  
  Second-allele review:
  No second coding SNV/indel identified in current callset
  No confident exon-level deletion/duplication detected by CNV caller
  No strong deep intronic splice candidate identified in current summary
  No ROH or UPD clue involving RECLIMIT5
  
  Coverage limitation:
  Transcript: NM_700005.4
  Clinically relevant exon: exon 11 of 16
  Mean depth across most coding exons: 36–58x
  Mean depth across exon 11: 7x
  Percentage of exon 11 bases below 10x: 61%
  Percentage of exon 11 bases below 20x: 89%
  Local GC-rich segment reduces sensitivity
  
  Population:
  Splice variant gnomAD AF = 0.000004
  No homozygotes observed in local summary
  
  Phenotype fit:
  Developmental delay: compatible
  Epilepsy: compatible
  Hypotonia: compatible
  Feeding difficulties: compatible
  Illness-associated regression: compatible
  Raised metabolic concern: not clearly documented in this patient
  
  Interpretation limitation:
  The identified splice variant is real.
  The recessive model is incomplete without a second allele.
  Poor coverage means the gene is not fully excluded, but this is not a positive diagnosis.
  
  Review question:
  Assess how to document a real single allele plus second-allele limitation without overcalling a recessive diagnosis.`,
        concern:
          "This is an important limitation and incomplete recessive finding. It should not be treated as diagnostic without a second relevant allele.",
      },
      {
        id: "candidate-6",
        label: "Candidate 6",
        gene: "Mixed-mechanism integration review",
        variant: "SNV, CNV, non-coding, inheritance, and limitation evidence must be integrated",
        zygosity: "Case-level capstone reasoning issue",
        consequence: "mixed_mechanism_review",
        inheritanceSignal: "Affects final prioritisation and handover",
        clinicalFit:
          "This is not a separate disease candidate. It is the central capstone reasoning issue: the case contains several biologically interesting findings, but only one currently has enough evidence to lead the diagnostic conclusion.",
        rawEvidence: `CASE CONTEXT REVIEW: advanced mixed-mechanism capstone
  Reason for review:
  The case includes multiple evidence types:
  A strong coding splice candidate
  A plausible but uncertain non-coding regulatory candidate
  A likely real inherited CNV
  A real single allele in a recessive gene plus second-allele coverage limitation
  A broad inherited missense finding
  A need for service-style prioritisation
  
  Candidate 4 pattern:
  Established disease gene
  Strong phenotype fit
  Apparent de novo with good parental coverage
  Canonical splice donor variant
  Loss-of-function mechanism
  Absent from population data
  Strong technical evidence
  Best current diagnostic lead
  
  Candidate 2 pattern:
  Interesting non-coding regulatory position
  Apparently de novo
  Absent from population summary
  No direct functional evidence
  No confirmed enhancer-gene link
  Regulatory mechanism uncertain
  Should be documented as uncertain, not used as the main diagnosis
  
  Candidate 5 pattern:
  Real single allele in a recessive gene
  Phenotype-compatible gene
  Poorly covered second-allele region
  No second allele identified
  Important limitation, not a diagnosis
  
  Candidate 3 pattern:
  Likely real duplication
  Inherited from unaffected mother
  Uncertain triplosensitivity
  Population overlap
  Weak phenotype specificity
  
  Candidate 1 pattern:
  Technically real but broad, inherited, relatively frequent, and poorly specific
  
  Interpretation principle:
  The strongest finding is the one with the best convergence across independent evidence types.
  Uncertain findings and limitations should be documented proportionately.
  The final handover should not be a flat list of every possible observation.
  It should explain what leads, what is uncertain, what is limited, and what is deprioritised.
  
  Review question:
  Assess how to produce a safe, clear, integrated final conclusion for a complex mixed-mechanism case.`,
        concern:
          "This is the central capstone reasoning issue. The final handover should prioritise Candidate 4 while documenting Candidate 2 and Candidate 5 proportionately.",
      },
    ],
  
    decisionCheckpoints: [
      {
        id: "checkpoint-1",
        title: "Checkpoint 1 — Identify the leading diagnostic candidate",
        context:
          "The case includes coding, non-coding, CNV, and limitation findings. Candidate 4 has the best convergence across phenotype, inheritance, mechanism, rarity, and technical confidence.",
        question:
          "Which finding should lead the formal review?",
        options: [
          {
            label: "A",
            text: "Candidate 2, because non-coding regulatory variants are harder to detect and should therefore be prioritised when present.",
            isCorrect: false,
            feedback:
              "Not quite. Non-coding findings can matter, but Candidate 2 lacks functional and mechanism evidence needed to outrank Candidate 4.",
          },
          {
            label: "B",
            text: "Candidate 4, because the phenotype, de novo inheritance, canonical splice consequence, mechanism, rarity, and technical confidence align best.",
            isCorrect: true,
            feedback:
              "Correct. Candidate 4 has the strongest overall evidence convergence.",
          },
          {
            label: "C",
            text: "Candidate 5, because a poorly covered region in a recessive gene means the missing second allele is likely present.",
            isCorrect: false,
            feedback:
              "Not quite. Candidate 5 is an important limitation, but no second allele has been identified.",
          },
        ],
        teachingPoint:
          "The leading candidate should be chosen by convergence across evidence types, not by novelty or complexity.",
      },
      {
        id: "checkpoint-2",
        title: "Checkpoint 2 — Handle the non-coding finding",
        context:
          "Candidate 2 is rare and apparently de novo, but there is no direct functional evidence and no confirmed enhancer-gene link.",
        question:
          "What is the safest interpretation of Candidate 2?",
        options: [
          {
            label: "A",
            text: "Report it as diagnostic because non-coding variants are often missed by standard coding-focused analysis.",
            isCorrect: false,
            feedback:
              "Not quite. Being easy to miss does not automatically make a non-coding variant diagnostic.",
          },
          {
            label: "B",
            text: "Ignore it completely because non-coding variants can never be relevant in rare disease analysis.",
            isCorrect: false,
            feedback:
              "Not quite. Non-coding variants can matter, but the evidence here remains uncertain.",
          },
          {
            label: "C",
            text: "Document it as a plausible but uncertain regulatory candidate that does not currently outrank the coding lead.",
            isCorrect: true,
            feedback:
              "Correct. This keeps the finding visible without overcalling it.",
          },
        ],
        teachingPoint:
          "Non-coding findings need careful evidence support before they can drive a diagnostic conclusion.",
      },
      {
        id: "checkpoint-3",
        title: "Checkpoint 3 — Interpret the recessive limitation",
        context:
          "Candidate 5 includes one real splice allele in a recessive gene and a poorly covered region where a second allele could theoretically be missed.",
        question:
          "How should Candidate 5 be described?",
        options: [
          {
            label: "A",
            text: "As an incomplete recessive finding and limitation: one allele is real, but no second allele is currently identified.",
            isCorrect: true,
            feedback:
              "Correct. This describes the evidence without converting the limitation into a diagnosis.",
          },
          {
            label: "B",
            text: "As confirmed recessive disease because poor coverage can hide the missing second allele.",
            isCorrect: false,
            feedback:
              "Not quite. Possible missed evidence is not the same as an identified second allele.",
          },
          {
            label: "C",
            text: "As irrelevant because single alleles in recessive genes should never be mentioned.",
            isCorrect: false,
            feedback:
              "Not quite. It is relevant as a limitation and reviewed finding, but not as a diagnosis.",
          },
        ],
        teachingPoint:
          "A limitation can affect confidence in exclusion without becoming a positive result.",
      },
      {
        id: "checkpoint-4",
        title: "Checkpoint 4 — Deprioritise weaker findings",
        context:
          "Candidate 3 is likely a real CNV but inherited from an unaffected mother, overlaps population CNVs, and has no established gain mechanism. Candidate 1 is broad, inherited, and relatively frequent.",
        question:
          "How should these weaker findings be handled?",
        options: [
          {
            label: "A",
            text: "Promote them because mixed-mechanism cases should keep all findings at equal priority.",
            isCorrect: false,
            feedback:
              "Not quite. Equal weighting makes the handover less accurate and less useful.",
          },
          {
            label: "B",
            text: "Document them as reviewed and deprioritised, explaining the inheritance, dosage, frequency, and phenotype limitations.",
            isCorrect: true,
            feedback:
              "Correct. This keeps the review traceable without overstating weak findings.",
          },
          {
            label: "C",
            text: "Delete them from the reasoning because only the strongest candidate should be visible.",
            isCorrect: false,
            feedback:
              "Not quite. A service-style handover may need to show why alternatives were deprioritised.",
          },
        ],
        teachingPoint:
          "Strong handover explains both the leading candidate and why alternatives are weaker.",
      },
      {
        id: "checkpoint-5",
        title: "Checkpoint 5 — Final mixed-mechanism capstone conclusion",
        context:
          "You need to prepare a final trainee-level handover for formal clinical laboratory review.",
        question:
          "Which conclusion is safest?",
        options: [
          {
            label: "A",
            text: "Report Candidate 2 and Candidate 4 as equal because both are rare and apparently de novo.",
            isCorrect: false,
            feedback:
              "Not quite. Candidate 4 has stronger consequence, mechanism, phenotype, and clinical interpretation support.",
          },
          {
            label: "B",
            text: "Avoid prioritising anything because the case contains too many mechanisms to choose a lead.",
            isCorrect: false,
            feedback:
              "Not quite. Complex evidence requires structured prioritisation, not avoidance.",
          },
          {
            label: "C",
            text: "Prioritise Candidate 4, document Candidate 5 as a limitation and Candidate 2 as uncertain, and deprioritise weaker findings clearly.",
            isCorrect: true,
            feedback:
              "Correct. This is the safest integrated service-style conclusion.",
          },
        ],
        teachingPoint:
          "Advanced case handling means producing a clear conclusion while preserving uncertainty, limitations, and review boundaries.",
      },
    ],
  
    finalReflection:
      "A safe trainee-level conclusion would be that Candidate 4 is the strongest current finding for formal clinical laboratory review. It is an apparent de novo canonical splice donor variant in CAPSTONE4, affecting the clinically preferred transcript, in a gene associated with an autosomal dominant syndromic neurodevelopmental disorder. The patient’s developmental delay, severe speech delay, epilepsy, hypotonia, feeding difficulties, dysmorphic features, and illness-associated regression are compatible with the reported disease spectrum. The variant is absent from population data, technically convincing, has good parental coverage, and fits the known loss-of-function mechanism. Candidate 6 is not a disease candidate but is the central capstone reasoning issue because the case requires integrated mixed-mechanism prioritisation. Candidate 5 is important as an incomplete recessive finding and limitation: one splice allele is real, but no second allele has been identified, and poor coverage only reduces confidence in exclusion rather than proving a diagnosis. Candidate 2 is a plausible but uncertain non-coding regulatory candidate; it is rare and apparently de novo, but lacks direct functional evidence, a confirmed enhancer-gene link, or a validated regulatory mechanism. Candidate 3 is likely a real inherited duplication but has weak dosage, population, and phenotype support. Candidate 1 is inherited, relatively frequent, broad, and poorly specific. The safest next step is to prioritise Candidate 4 for formal review, document Candidate 5 and Candidate 2 proportionately, explain why Candidates 1 and 3 were deprioritised, and preserve formal clinical laboratory classification and sign-off boundaries.",
  };