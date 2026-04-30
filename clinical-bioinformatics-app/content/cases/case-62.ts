export const case62 = {
    id: "case-62",
    slug: "prenatal-fetal-anomaly-style-case",
    title: "Case 62: Prenatal / fetal anomaly style case",
    level: "Advanced",
    summary:
      "A guided case focused on prenatal-style genomic interpretation where phenotype information is incomplete, evolving, and based on fetal imaging rather than a full postnatal clinical picture.",
  
    visualisationExampleId: null,
  
    assessmentFocus: [
      "Prenatal phenotype limitation",
      "Fetal anomaly interpretation",
      "Incomplete phenotype evidence",
      "Candidate prioritisation",
      "Mechanism and inheritance fit",
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
          "Rank the findings from strongest to weakest based on fetal phenotype fit, variant evidence, inheritance, technical confidence, and the limitations of prenatal phenotype information.",
        correctOrder: [
          "candidate-4",
          "candidate-5",
          "candidate-2",
          "candidate-3",
          "candidate-1",
        ],
        explanation:
          "Candidate 4 is strongest because it has the best convergence across fetal structural anomalies, gene validity, loss-of-function mechanism, rarity, apparent de novo inheritance, and technical confidence. Candidate 5 is not a disease candidate, but it is central because prenatal phenotype information is incomplete and evolving. Candidate 2 is plausible but weaker because the evidence is mainly postnatal neurodevelopmental and less specific to the fetal imaging findings. Candidate 3 is a real single allele in a recessive gene but does not complete the recessive model. Candidate 1 is broad, inherited, relatively frequent, and poorly specific.",
      },
  
      escalationDecision: {
        prompt:
          "Choose the safest next action for the leading finding in this prenatal-style case.",
        options: [
          {
            id: "report-diagnostic-without-caveat",
            label: "A",
            decision:
              "Report Candidate 4 as diagnostic immediately because fetal structural anomalies and a de novo loss-of-function variant strongly align.",
            isBest: false,
            feedback:
              "Review this choice. Candidate 4 is strong, but prenatal interpretation still needs formal review, careful wording, and acknowledgement of phenotype limits.",
          },
          {
            id: "hold-all-prenatal-findings",
            label: "B",
            decision:
              "Hold all findings because prenatal phenotypes are incomplete and cannot support useful candidate prioritisation.",
            isBest: false,
            feedback:
              "Review this choice. Prenatal phenotype data are limited, but strong candidate-level evidence can still be escalated proportionately.",
          },
          {
            id: "escalate-with-prenatal-limitation",
            label: "C",
            decision:
              "Escalate Candidate 4 for formal review while documenting that fetal phenotype information is incomplete and evolving.",
            isBest: true,
            feedback:
              "Best decision. Candidate 4 is review-worthy, but prenatal limitations and formal sign-off boundaries must remain clear.",
          },
        ],
      },
  
      writtenSummary: {
        prompt:
          "Write a short trainee-level handover summary explaining the leading candidate, why it fits the fetal presentation, and what prenatal phenotype limitations remain.",
        checklist: [
          "Names Candidate 4 as the strongest current finding.",
          "Explains the fetal anomaly pattern supporting the candidate.",
          "Mentions gene mechanism, consequence, rarity, inheritance, and technical confidence.",
          "States that prenatal phenotype information is incomplete and may evolve.",
          "Avoids overclaiming postnatal features that cannot yet be assessed.",
          "Recommends formal clinical laboratory review and appropriate clinical correlation.",
        ],
        modelAnswer:
          "Candidate 4 is the strongest current finding for formal review. It is a rare apparent de novo canonical splice donor variant in FETALCAP4, a gene associated with an autosomal dominant multisystem developmental disorder involving congenital heart defects, brain malformations, renal anomalies, growth restriction, and variable postnatal neurodevelopmental features. The fetal imaging findings of increased nuchal translucency, congenital heart defect, ventriculomegaly, renal pelvic dilatation, and growth restriction are compatible with the gene’s known disease spectrum. The variant has strong technical support, affects the clinically preferred transcript, fits a loss-of-function mechanism, and is absent from both parents with good coverage. However, the phenotype is prenatal and incomplete, so postnatal features such as developmental delay, epilepsy, feeding history, dysmorphology, and progression cannot yet be fully assessed. Candidate 5 is the central limitation because fetal phenotype information is evolving. Candidate 2 is plausible but less specific, Candidate 3 is an incomplete recessive single-allele finding, and Candidate 1 is broad and weak. The safest next step is to escalate Candidate 4 for formal review while clearly documenting the prenatal phenotype limitation.",
      },
    },
  
    reasoningScorecard: [
      {
        category: "Prenatal limitation awareness",
        maxScore: 2,
        expectation:
          "Recognises that fetal imaging provides important but incomplete phenotype information compared with postnatal assessment.",
      },
      {
        category: "Fetal phenotype reasoning",
        maxScore: 2,
        expectation:
          "Uses structural anomalies, imaging pattern, inheritance, and gene mechanism without overclaiming unobserved postnatal features.",
      },
      {
        category: "Candidate prioritisation",
        maxScore: 2,
        expectation:
          "Prioritises the candidate with the best convergence across fetal findings, gene validity, consequence, rarity, inheritance, and technical support.",
      },
      {
        category: "Evidence interpretation",
        maxScore: 2,
        expectation:
          "Balances strong variant evidence against the limitations of incomplete and evolving prenatal phenotype data.",
      },
      {
        category: "Safe communication",
        maxScore: 2,
        expectation:
          "Communicates the finding as requiring formal review and clinical correlation rather than making overconfident prenatal diagnostic statements.",
      },
    ],
  
    patient: {
      age: 0,
      sex: "Female",
    },
  
    referralReason:
      "A fetal sample has been referred for prenatal-style genomic analysis because ultrasound and fetal imaging identified increased nuchal translucency, congenital heart defect, mild ventriculomegaly, renal pelvic dilatation, and fetal growth restriction. The pregnancy is ongoing. The clinical team has requested careful interpretation because the phenotype is based on fetal imaging and may be incomplete compared with postnatal assessment.",
  
    testType:
      "Prenatal-style trio genome sequencing with SNV/indel, CNV, inheritance, fetal phenotype, and technical-confidence review",
  
    familyStructure:
      "The fetal sample and both biological parents have been tested. Both parents are reportedly unaffected. No known consanguinity is reported. There is no previous affected pregnancy reported in the referral.",
  
    history: [
      "Increased nuchal translucency identified in the first trimester",
      "Congenital heart defect identified on fetal cardiac imaging",
      "Mild ventriculomegaly reported on fetal imaging",
      "Renal pelvic dilatation noted on ultrasound",
      "Fetal growth restriction reported on serial scans",
      "No postnatal developmental information is available",
      "No postnatal seizure, feeding, dysmorphology, or growth history can be assessed",
      "Both parents are reportedly unaffected",
      "No previous affected pregnancy reported",
      "Clinical team requested careful interpretation of prenatal phenotype limitations",
    ],
  
    phenotype: [
      "Increased nuchal translucency",
      "Congenital heart defect",
      "Mild ventriculomegaly",
      "Renal pelvic dilatation",
      "Fetal growth restriction",
      "Prenatal phenotype information incomplete",
    ],
  
    familyHistory:
      "Both parents are reportedly unaffected. No family history of congenital heart disease, fetal structural anomalies, neurodevelopmental disorder, renal anomalies, recurrent pregnancy loss, or a similar multisystem presentation is reported.",
  
    serviceContext: [
      "This guided case focuses on prenatal-style interpretation.",
      "The key issue is that fetal imaging can provide important clues, but the phenotype is incomplete and may evolve during pregnancy or after birth.",
      "The learner should not ignore fetal structural anomalies because they can be highly informative.",
      "The learner should also not overclaim postnatal features such as developmental delay, epilepsy, feeding history, or dysmorphology when they cannot yet be assessed.",
      "The safest conclusion should prioritise the strongest candidate while clearly documenting prenatal phenotype limitations.",
      "The final handover should recommend formal review and clinical correlation rather than overconfident standalone genomic wording.",
    ],
  
    candidateFindings: [
      {
        id: "candidate-1",
        label: "Candidate 1",
        gene: "BROADFETAL1",
        variant: "chr2:77190442 C>T",
        zygosity: "Heterozygous",
        consequence: "missense_variant",
        inheritanceSignal: "Inherited from unaffected mother",
        clinicalFit:
          "BROADFETAL1 has a broad developmental association in limited reports, but the variant is inherited from the unaffected mother, relatively frequent, and does not specifically explain the fetal structural anomaly pattern.",
        rawEvidence: `GENE: BROADFETAL1
  Known disease association: broad developmental association in limited reports
  Reported inheritance: autosomal dominant proposed
  Known mechanism: uncertain
  Gene-disease validity in local summary: limited
  
  Variant:
  chr2:77190442 C>T
  Transcript: NM_620001.2
  HGVS: c.899C>T p.(Pro300Leu)
  Consequence: missense_variant
  Protein domain: outside proposed recurrent functional region
  
  VCF-style fields:
  QUAL=684
  FILTER=PASS
  INFO: DP=46;MQ=60;QD=14.9;SOR=0.84
  FORMAT: GT:AD:DP:GQ
  
  Fetal sample: 0/1:23,23:46:99
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
  Increased nuchal translucency: not a core feature
  Congenital heart defect: limited overlap
  Ventriculomegaly: limited overlap
  Renal pelvic dilatation: not a core feature
  Fetal growth restriction: broad possible overlap
  
  Review question:
  Assess whether this inherited, relatively frequent, broad-match finding should drive a prenatal structural anomaly case.`,
        concern:
          "This is technically real but weak. It should be reviewed and deprioritised rather than treated as the fetal anomaly explanation.",
      },
      {
        id: "candidate-2",
        label: "Candidate 2",
        gene: "NEUROFETAL2",
        variant: "chr10:55218401 G>A",
        zygosity: "Heterozygous",
        consequence: "missense_variant",
        inheritanceSignal: "Absent from both parents on standard genotype calls",
        clinicalFit:
          "NEUROFETAL2 has a possible developmental epilepsy association. The variant is rare and technically plausible, but much of the gene’s reported phenotype is postnatal neurodevelopmental, which cannot yet be assessed in this fetal case.",
        rawEvidence: `GENE: NEUROFETAL2
  Known disease association: possible autosomal dominant neurodevelopmental epilepsy disorder
  Reported inheritance: usually de novo in limited reports
  Known mechanism: damaging missense variants in a functional domain
  Gene-disease validity in local summary: moderate / emerging
  
  Variant:
  chr10:55218401 G>A
  Transcript: NM_620002.4
  HGVS: c.1286G>A p.(Arg429His)
  Consequence: missense_variant
  Protein domain: possible neurodevelopmental functional domain
  
  VCF-style fields:
  QUAL=810
  FILTER=PASS
  INFO: DP=52;MQ=60;QD=15.6;SOR=0.78
  FORMAT: GT:AD:DP:GQ
  
  Fetal sample: 0/1:26,26:52:99
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
  Postnatal developmental delay: cannot yet be assessed
  Epilepsy: cannot yet be assessed
  Congenital heart defect: not a core feature
  Ventriculomegaly: possible but limited overlap
  Renal pelvic dilatation: not a core feature
  Fetal growth restriction: not a consistent core feature
  
  Review question:
  Assess whether a rare postnatal neurodevelopmental candidate should outrank a stronger fetal multisystem structural anomaly candidate.`,
        concern:
          "This is plausible but less strong than the leading fetal anomaly candidate because the phenotype support is less specific in the prenatal context.",
      },
      {
        id: "candidate-3",
        label: "Candidate 3",
        gene: "RECESSFETAL3",
        variant: "chr9:118809331 C>T",
        zygosity: "Heterozygous",
        consequence: "splice_acceptor_variant",
        inheritanceSignal: "Inherited from unaffected father; no second allele identified",
        clinicalFit:
          "RECESSFETAL3 is associated with an autosomal recessive congenital anomaly syndrome. The variant is a real splice acceptor allele, but no second relevant allele has been identified.",
        rawEvidence: `GENE: RECESSFETAL3
  Known disease association: autosomal recessive congenital anomaly syndrome
  Reported inheritance: autosomal recessive
  Known mechanism: biallelic loss-of-function
  Gene-disease validity in local summary: moderate
  
  Variant:
  chr9:118809331 C>T
  Transcript: NM_620003.4
  HGVS: c.744-2C>T
  Consequence: splice_acceptor_variant
  Splice position: canonical -2 acceptor site
  
  VCF-style fields:
  QUAL=824
  FILTER=PASS
  INFO: DP=50;MQ=60;QD=16.5;SOR=0.74
  FORMAT: GT:AD:DP:GQ
  
  Fetal sample: 0/1:25,25:50:99
  Mother blood: 0/0:44,0:44:99
  Father blood: 0/1:22,23:45:99
  
  Read-level notes:
  ALT reads seen on both forward and reverse strands
  ALT reads distributed across read positions
  High mapping quality
  Second caller: detected
  
  Second-allele review:
  No second coding SNV/indel identified
  No confident exon-level deletion/duplication detected
  No strong deep intronic candidate identified in current summary
  No ROH or UPD clue involving RECESSFETAL3
  
  Population:
  gnomAD AF = 0.000004
  gnomAD allele count = 1
  No homozygotes observed in local summary
  
  Phenotype fit:
  Congenital anomaly pattern: possible overlap
  Renal finding: compatible in some reports
  Ventriculomegaly: variable
  Heart defect: variable
  Growth restriction: possible
  Recessive model: incomplete without second allele
  
  Review question:
  Assess whether a single convincing allele in a recessive fetal anomaly gene is enough to explain the case.`,
        concern:
          "This is a real single allele but incomplete as a recessive explanation.",
      },
      {
        id: "candidate-4",
        label: "Candidate 4",
        gene: "FETALCAP4",
        variant: "chr12:66190442 G>A",
        zygosity: "Heterozygous",
        consequence: "splice_donor_variant",
        inheritanceSignal: "Apparent de novo with good parental coverage",
        clinicalFit:
          "FETALCAP4 is associated with an autosomal dominant multisystem developmental disorder involving congenital heart disease, brain malformation, renal anomalies, growth restriction, and variable postnatal neurodevelopmental features. The fetal anomaly pattern, mechanism, rarity, and technical evidence are supportive.",
        rawEvidence: `GENE: FETALCAP4
  Known disease association: autosomal dominant multisystem developmental disorder
  Reported inheritance: usually de novo
  Known mechanism: haploinsufficiency / loss-of-function
  Gene-disease validity in local summary: established / moderate
  
  Variant:
  chr12:66190442 G>A
  Transcript: NM_620004.5
  HGVS: c.744+1G>A
  Consequence: splice_donor_variant
  Splice position: canonical +1 donor site
  Transcript note: affects clinically preferred transcript in local summary
  
  VCF-style fields:
  QUAL=964
  FILTER=PASS
  INFO: DP=58;MQ=60;QD=16.6;SOR=0.72
  FORMAT: GT:AD:DP:GQ
  
  Fetal sample: 0/1:29,29:58:99
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
  LOEUF = 0.16
  pLI = 0.98
  
  ClinVar-style summary:
  No exact matching variant record found in local summary
  Other truncating and canonical splice variants in FETALCAP4 have been submitted as pathogenic/likely pathogenic in affected individuals
  
  Phenotype fit:
  Increased nuchal translucency: compatible
  Congenital heart defect: strong match
  Ventriculomegaly / brain anomaly: compatible
  Renal pelvic dilatation / renal anomaly: compatible
  Fetal growth restriction: compatible
  Postnatal developmental delay: commonly reported but cannot yet be assessed
  Epilepsy: reported variably but cannot yet be assessed
  
  Prenatal interpretation limitation:
  The fetal structural anomaly pattern is supportive.
  However, postnatal neurological, developmental, feeding, dysmorphology, and progression features cannot yet be fully assessed.
  
  Review question:
  Assess whether this candidate should be prioritised for formal prenatal-style review while preserving phenotype limitations.`,
        concern:
          "This is the strongest current candidate. It should be prioritised for formal review while clearly documenting the prenatal phenotype limitation.",
      },
      {
        id: "candidate-5",
        label: "Candidate 5",
        gene: "Prenatal phenotype limitation",
        variant: "Fetal imaging phenotype is incomplete and evolving",
        zygosity: "Case-level limitation",
        consequence: "prenatal_phenotype_limitation",
        inheritanceSignal: "Affects interpretation of all candidates",
        clinicalFit:
          "This is not a disease candidate. It is the central case limitation because fetal imaging cannot provide the same phenotype detail as postnatal clinical assessment.",
        rawEvidence: `CASE CONTEXT REVIEW: prenatal phenotype limitation
  Available fetal findings:
  Increased nuchal translucency
  Congenital heart defect
  Mild ventriculomegaly
  Renal pelvic dilatation
  Fetal growth restriction
  
  Information not yet available:
  Postnatal developmental profile
  Speech or motor milestones
  Seizure history
  Feeding history after birth
  Dysmorphology assessment after birth
  Progression or regression pattern
  Detailed neurological examination
  Longitudinal growth pattern after birth
  
  Impact on Candidate 4:
  Fetal structural anomalies are compatible with the reported disease spectrum.
  However, postnatal neurodevelopmental and neurological features cannot yet be confirmed.
  
  Impact on Candidate 2:
  Much of the reported gene phenotype is postnatal neurodevelopmental.
  Those features cannot currently be assessed.
  
  Impact on Candidate 3:
  Recessive model remains incomplete regardless of fetal phenotype overlap.
  
  Interpretation principle:
  Prenatal findings can strongly support a candidate.
  But fetal phenotype information is incomplete and may evolve.
  Final wording should avoid claiming unobserved postnatal features.
  
  Review question:
  Assess how fetal phenotype limitations should shape candidate ranking, escalation, and report wording.`,
        concern:
          "This is the central limitation. It should be documented so the final conclusion does not overclaim phenotype fit from prenatal data alone.",
      },
    ],
  
    decisionCheckpoints: [
      {
        id: "checkpoint-1",
        title: "Checkpoint 1 — Identify the leading prenatal candidate",
        context:
          "Candidate 4 has strong fetal anomaly fit, loss-of-function mechanism, apparent de novo inheritance, rarity, and technical support.",
        question:
          "Which finding should be prioritised for formal review?",
        options: [
          {
            label: "A",
            text: "Candidate 2, because rare neurodevelopmental variants should be prioritised when postnatal features may emerge later.",
            isCorrect: false,
            feedback:
              "Not quite. Candidate 2 is plausible, but Candidate 4 better fits the fetal structural anomaly pattern.",
          },
          {
            label: "B",
            text: "Candidate 4, because the fetal findings, gene mechanism, consequence, rarity, inheritance, and technical evidence align best.",
            isCorrect: true,
            feedback:
              "Correct. Candidate 4 has the strongest current convergence across the available prenatal evidence.",
          },
          {
            label: "C",
            text: "Candidate 3, because fetal anomaly cases are often recessive even when only one allele is initially identified.",
            isCorrect: false,
            feedback:
              "Not quite. Candidate 3 is a real allele, but the recessive model is incomplete without a second relevant allele.",
          },
        ],
        teachingPoint:
          "Prenatal prioritisation should use the fetal anomaly pattern while preserving the limits of incomplete phenotype information.",
      },
      {
        id: "checkpoint-2",
        title: "Checkpoint 2 — Avoid overclaiming postnatal phenotype",
        context:
          "Candidate 4 is associated with postnatal developmental delay and neurological features, but the pregnancy is ongoing.",
        question:
          "How should postnatal features be handled in the interpretation?",
        options: [
          {
            label: "A",
            text: "Assume postnatal developmental delay will occur because the gene is associated with developmental disorder.",
            isCorrect: false,
            feedback:
              "Not quite. The gene association is relevant, but unobserved postnatal features should not be stated as present.",
          },
          {
            label: "B",
            text: "Ignore postnatal disease descriptions because only fetal imaging findings can ever be used in prenatal genomics.",
            isCorrect: false,
            feedback:
              "Not quite. Postnatal gene knowledge is relevant, but it must be applied cautiously.",
          },
          {
            label: "C",
            text: "Use postnatal gene knowledge cautiously while stating that those features cannot yet be assessed in the fetus.",
            isCorrect: true,
            feedback:
              "Correct. This preserves useful gene knowledge without overclaiming unobserved features.",
          },
        ],
        teachingPoint:
          "Prenatal interpretation often requires translating postnatal disease knowledge into a fetal context carefully.",
      },
      {
        id: "checkpoint-3",
        title: "Checkpoint 3 — Interpret the single recessive allele",
        context:
          "Candidate 3 is a real splice acceptor variant in a recessive fetal anomaly gene, but no second allele is identified.",
        question:
          "What is the safest interpretation of Candidate 3?",
        options: [
          {
            label: "A",
            text: "Document it as a real single allele in a recessive gene, but not a complete explanation without a second relevant allele.",
            isCorrect: true,
            feedback:
              "Correct. It is technically real but incomplete as a recessive diagnosis.",
          },
          {
            label: "B",
            text: "Prioritise it as diagnostic because fetal anomaly cases can have missed second alleles.",
            isCorrect: false,
            feedback:
              "Not quite. A possible missed allele is not the same as evidence for a second allele.",
          },
          {
            label: "C",
            text: "Ignore it entirely because single alleles in recessive genes have no relevance in prenatal analysis.",
            isCorrect: false,
            feedback:
              "Not quite. It can be documented as reviewed, but should not be treated as explanatory.",
          },
        ],
        teachingPoint:
          "A single allele in a recessive gene can be real and still insufficient for a diagnosis.",
      },
      {
        id: "checkpoint-4",
        title: "Checkpoint 4 — Communicate prenatal uncertainty",
        context:
          "Candidate 4 is strong, but the fetal phenotype is incomplete and evolving.",
        question:
          "Which wording best balances candidate strength and limitation?",
        options: [
          {
            label: "A",
            text: "Candidate 4 should be reported without caveats because fetal structural anomalies provide enough phenotype evidence.",
            isCorrect: false,
            feedback:
              "Not quite. The fetal findings support review, but phenotype limitations and formal interpretation remain important.",
          },
          {
            label: "B",
            text: "Candidate 4 is a strong review-worthy finding, but interpretation should acknowledge incomplete prenatal phenotype information.",
            isCorrect: true,
            feedback:
              "Correct. This wording is clear, proportionate, and safe.",
          },
          {
            label: "C",
            text: "Candidate 4 should be held indefinitely because prenatal phenotype uncertainty prevents meaningful review.",
            isCorrect: false,
            feedback:
              "Not quite. Prenatal uncertainty limits wording, but it does not prevent formal review of a strong candidate.",
          },
        ],
        teachingPoint:
          "Safe prenatal handover can be both decisive and cautious.",
      },
      {
        id: "checkpoint-5",
        title: "Checkpoint 5 — Final prenatal-style conclusion",
        context:
          "You need to prepare a safe trainee-level conclusion for formal clinical laboratory review.",
        question:
          "Which conclusion is safest?",
        options: [
          {
            label: "A",
            text: "Prioritise Candidate 2 because postnatal neurodevelopmental features may appear after birth.",
            isCorrect: false,
            feedback:
              "Not quite. Candidate 2 is plausible, but it is less specific to the current fetal structural findings.",
          },
          {
            label: "B",
            text: "Reject all candidates because fetal phenotype information is incomplete and cannot support genomic interpretation.",
            isCorrect: false,
            feedback:
              "Not quite. Prenatal phenotype is limited, but it can still support careful candidate prioritisation.",
          },
          {
            label: "C",
            text: "Prioritise Candidate 4 for formal review, state the fetal phenotype support, and document prenatal limitations.",
            isCorrect: true,
            feedback:
              "Correct. This conclusion identifies the best candidate while preserving safe prenatal caveats.",
          },
        ],
        teachingPoint:
          "Prenatal genomic interpretation requires candidate prioritisation plus clear communication of what the fetal phenotype can and cannot show.",
      },
    ],
  
    finalReflection:
      "A safe trainee-level conclusion would be that Candidate 4 is the strongest current finding for formal clinical laboratory review. It is an apparent de novo canonical splice donor variant in FETALCAP4, a gene associated with an autosomal dominant multisystem developmental disorder involving congenital heart defects, brain malformations, renal anomalies, growth restriction, and variable postnatal neurodevelopmental features. The fetal findings of increased nuchal translucency, congenital heart defect, ventriculomegaly, renal pelvic dilatation, and growth restriction are compatible with the reported disease spectrum. The variant is rare, technically convincing, affects the clinically preferred transcript, fits a loss-of-function mechanism, and is absent from both parents with good coverage. However, Candidate 5 is the central limitation: the phenotype is prenatal, incomplete, and evolving. Postnatal features such as developmental delay, seizures, feeding history, dysmorphology, and progression cannot yet be fully assessed. Candidate 2 is plausible but less specific because much of its disease association is postnatal neurodevelopmental. Candidate 3 is a real single allele in a recessive fetal anomaly gene but does not complete a recessive model. Candidate 1 is inherited, relatively frequent, and broadly matched. The safest next step is to prioritise Candidate 4 for formal review while documenting the fetal phenotype limitation and recommending appropriate clinical correlation and laboratory sign-off.",
  };