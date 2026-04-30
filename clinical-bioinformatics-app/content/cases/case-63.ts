export const case63 = {
    id: "case-63",
    slug: "pharmacogenomic-incidental-looking-result-boundary-case",
    title: "Case 63: Pharmacogenomic / incidental-looking result boundary",
    level: "Advanced",
    summary:
      "A guided case focused on recognising useful genomic information that may be relevant to care but sits outside the original diagnostic question.",
  
    visualisationExampleId: null,
  
    assessmentFocus: [
      "Scope boundary",
      "Pharmacogenomic-style finding",
      "Incidental-looking result handling",
      "Diagnostic versus non-diagnostic relevance",
      "Candidate prioritisation",
      "Safe escalation and governance",
    ],
  
    guidedTutorMode: {
      type: "static-rule-based",
      description:
        "Uses built-in hints, checkpoint feedback, model answers, and self-check criteria to support safe case reasoning.",
    },
  
    phase5Assessment: {
      candidateRanking: {
        prompt:
          "Rank the findings from strongest to weakest based on the original rare disease diagnostic question, while recognising which finding may be useful but outside scope.",
        correctOrder: [
          "candidate-2",
          "candidate-5",
          "candidate-3",
          "candidate-4",
          "candidate-1",
        ],
        explanation:
          "Candidate 2 is strongest for the diagnostic question because it best explains the neurodevelopmental phenotype with appropriate gene validity, consequence, rarity, inheritance, and technical support. Candidate 5 is central because it defines the scope boundary: the pharmacogenomic-style finding may be useful but does not answer the diagnostic referral. Candidate 3 is the pharmacogenomic/incidental-looking finding and should be escalated only through the appropriate local pathway rather than treated as the diagnosis. Candidate 4 is a likely real CNV but has weak dosage and phenotype support. Candidate 1 is broad, inherited, relatively frequent, and poorly specific.",
      },
  
      escalationDecision: {
        prompt:
          "Choose the safest next action for the pharmacogenomic/incidental-looking finding.",
        options: [
          {
            id: "use-pgx-as-diagnosis",
            label: "A",
            decision:
              "Use Candidate 3 as the main diagnosis because it may affect medication safety and is therefore clinically important.",
            isBest: false,
            feedback:
              "Review this choice. Clinical usefulness does not mean the finding explains the rare disease referral.",
          },
          {
            id: "escalate-through-scope-pathway",
            label: "B",
            decision:
              "Document Candidate 3 as outside the diagnostic question and escalate it only through the appropriate local governance pathway.",
            isBest: true,
            feedback:
              "Best decision. The finding may matter, but it should not be treated as the rare disease diagnosis or reported outside agreed scope.",
          },
          {
            id: "delete-pgx-finding",
            label: "C",
            decision:
              "Ignore Candidate 3 completely because findings outside the referral question should never be reviewed.",
            isBest: false,
            feedback:
              "Review this choice. Out-of-scope findings may still require governance-aware handling rather than being silently ignored.",
          },
        ],
      },
  
      writtenSummary: {
        prompt:
          "Write a short trainee-level handover summary explaining the leading diagnostic candidate, the pharmacogenomic/incidental-looking boundary, and how Candidate 3 should be handled.",
        checklist: [
          "Names Candidate 2 as the strongest diagnostic candidate.",
          "Explains why Candidate 2 fits the rare disease question.",
          "States that Candidate 3 may be clinically useful but does not explain the phenotype.",
          "Avoids using Candidate 3 as the diagnostic result.",
          "Mentions local policy, consent, reporting scope, or governance pathway.",
          "Briefly explains why the remaining findings are weaker.",
        ],
        modelAnswer:
          "Candidate 2 is the strongest current finding for the rare disease diagnostic question. It is a rare apparent de novo canonical splice donor variant in DIAGCAP2, a phenotype-compatible neurodevelopmental epilepsy gene with a loss-of-function mechanism, strong technical support, and absence from population data. Candidate 3 is different: it is a pharmacogenomic-style finding that may be relevant to medication safety or future prescribing, but it does not explain the child’s developmental delay, epilepsy, hypotonia, feeding difficulties, or dysmorphic features. It should therefore not be presented as the diagnosis or allowed to dominate the diagnostic handover. Candidate 5 is the key scope-boundary issue because handling Candidate 3 depends on local policy, consent, reporting scope, and governance. Candidate 4 is likely a real CNV but has weak dosage support, and Candidate 1 is broad, inherited, relatively frequent, and poorly specific. The safest next step is to prioritise Candidate 2 for formal diagnostic review and escalate Candidate 3 only through the appropriate local pharmacogenomic/incidental finding pathway if applicable.",
      },
    },
  
    reasoningScorecard: [
      {
        category: "Scope boundary awareness",
        maxScore: 2,
        expectation:
          "Recognises that clinically useful information may still sit outside the original diagnostic question.",
      },
      {
        category: "Diagnostic prioritisation",
        maxScore: 2,
        expectation:
          "Prioritises the finding that best explains the patient phenotype rather than the most generally actionable-looking result.",
      },
      {
        category: "Governance reasoning",
        maxScore: 2,
        expectation:
          "Handles the pharmacogenomic/incidental-looking finding through local policy, consent, reporting scope, and escalation pathways.",
      },
      {
        category: "Evidence interpretation",
        maxScore: 2,
        expectation:
          "Separates disease mechanism and phenotype fit from medication-response or secondary-use relevance.",
      },
      {
        category: "Safe communication",
        maxScore: 2,
        expectation:
          "Communicates the diagnostic candidate clearly while avoiding inappropriate reporting or overuse of out-of-scope findings.",
      },
    ],
  
    patient: {
      age: 8,
      sex: "Female",
    },
  
    referralReason:
      "An 8-year-old girl has been referred for rare disease genome analysis because of global developmental delay, severe speech delay, epilepsy, hypotonia, feeding difficulties, and mild dysmorphic features. The clinical question is to identify a possible rare disease diagnosis. Genome review also identified a pharmacogenomic-style variant that may be useful for medication safety but does not appear to explain the child’s neurodevelopmental presentation.",
  
    testType:
      "Rare disease trio genome sequencing with SNV/indel, CNV, diagnostic candidate, pharmacogenomic-style boundary, scope, and governance review",
  
    familyStructure:
      "The proband and both biological parents have been tested. Both parents are reportedly unaffected. No known consanguinity is reported. The pharmacogenomic-style finding is inherited from the mother, who is reportedly unaffected, and is not linked to the rare disease phenotype in the referral.",
  
    history: [
      "Global developmental delay noted in infancy",
      "Severe expressive speech delay",
      "Epilepsy beginning at age 3",
      "Generalised hypotonia",
      "Feeding difficulties in early childhood",
      "Mild dysmorphic facial features",
      "No known previous molecular diagnosis",
      "Both parents are reportedly unaffected",
      "Current referral is for rare disease diagnostic analysis",
      "A pharmacogenomic-style finding was observed during review",
      "Clinical team has not specifically requested pharmacogenomic testing",
    ],
  
    phenotype: [
      "Global developmental delay",
      "Severe speech delay",
      "Epilepsy",
      "Hypotonia",
      "Feeding difficulties",
      "Mild dysmorphic features",
      "Pharmacogenomic-style boundary issue",
    ],
  
    familyHistory:
      "Both parents are reportedly unaffected. There is no known family history of developmental delay, epilepsy, hypotonia, feeding difficulties, dysmorphic features, or a similar neurodevelopmental presentation. The mother carries the pharmacogenomic-style variant but has no reported neurodevelopmental phenotype.",
  
    serviceContext: [
      "This guided case focuses on pharmacogenomic and incidental-looking result boundaries.",
      "The key issue is that a finding can be clinically useful without answering the diagnostic question.",
      "The learner should not ignore governance, consent, scope, or reporting pathways when a potentially useful non-diagnostic finding appears.",
      "The learner should also not treat a pharmacogenomic-style finding as the rare disease diagnosis simply because it may be medically relevant.",
      "The safest conclusion should prioritise the diagnostic candidate while keeping the pharmacogenomic-style finding in the correct governance pathway.",
      "The final handover should separate diagnostic relevance from broader clinical utility.",
    ],
  
    candidateFindings: [
      {
        id: "candidate-1",
        label: "Candidate 1",
        gene: "BROADPGX1",
        variant: "chr2:77190442 C>T",
        zygosity: "Heterozygous",
        consequence: "missense_variant",
        inheritanceSignal: "Inherited from unaffected father",
        clinicalFit:
          "BROADPGX1 has a broad neurodevelopmental association in limited reports, but the variant is inherited from an unaffected father, relatively frequent, and only weakly matches the epilepsy-led phenotype.",
        rawEvidence: `GENE: BROADPGX1
  Known disease association: broad neurodevelopmental association in limited reports
  Reported inheritance: autosomal dominant proposed
  Known mechanism: uncertain
  Gene-disease validity in local summary: limited
  
  Variant:
  chr2:77190442 C>T
  Transcript: NM_630001.2
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
  Dysmorphic features: not a core feature
  
  Review question:
  Assess whether this inherited, relatively frequent, broad-match finding should drive the diagnostic conclusion.`,
        concern:
          "This is technically real but weak. It should be reviewed and deprioritised rather than treated as the main explanation.",
      },
      {
        id: "candidate-2",
        label: "Candidate 2",
        gene: "DIAGCAP2",
        variant: "chr12:66190442 G>A",
        zygosity: "Heterozygous",
        consequence: "splice_donor_variant",
        inheritanceSignal: "Apparent de novo with good parental coverage",
        clinicalFit:
          "DIAGCAP2 is associated with an autosomal dominant neurodevelopmental epilepsy disorder. The variant is rare, technically strong, affects a canonical splice donor, fits the loss-of-function mechanism, and matches the child’s phenotype.",
        rawEvidence: `GENE: DIAGCAP2
  Known disease association: autosomal dominant neurodevelopmental epilepsy disorder
  Reported inheritance: usually de novo
  Known mechanism: haploinsufficiency / loss-of-function
  Gene-disease validity in local summary: established
  
  Variant:
  chr12:66190442 G>A
  Transcript: NM_630002.5
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
  Other truncating and canonical splice variants in DIAGCAP2 have been submitted as pathogenic/likely pathogenic in affected individuals
  
  Phenotype fit:
  Global developmental delay: strong match
  Severe speech delay: strong match
  Epilepsy: strong match
  Hypotonia: compatible
  Feeding difficulties: compatible
  Mild dysmorphic features: compatible
  
  Review question:
  Assess whether this finding best answers the rare disease diagnostic referral question.`,
        concern:
          "This is the strongest diagnostic candidate. It should be prioritised for formal rare disease review.",
      },
      {
        id: "candidate-3",
        label: "Candidate 3",
        gene: "PGXMED3",
        variant: "chr6:32014567 A>G",
        zygosity: "Heterozygous",
        consequence: "pharmacogenomic_marker",
        inheritanceSignal: "Inherited from unaffected mother",
        clinicalFit:
          "PGXMED3 is associated in local teaching data with altered response or toxicity risk for a specific medication class. It may be clinically useful in the right context, but it does not explain the child’s neurodevelopmental phenotype.",
        rawEvidence: `GENE: PGXMED3
  Known association in local teaching summary: pharmacogenomic medication-response marker
  Reported relevance: altered drug metabolism or adverse-effect risk for a specific medication class
  Known disease association for the referral phenotype: none established
  Gene-disease validity for neurodevelopmental disorder: not established
  
  Variant:
  chr6:32014567 A>G
  Transcript: NM_630003.3
  HGVS: c.460A>G p.(Ile154Val)
  Consequence: pharmacogenomic_marker / missense_variant
  
  VCF-style fields:
  QUAL=790
  FILTER=PASS
  INFO: DP=50;MQ=60;QD=15.8;SOR=0.76
  FORMAT: GT:AD:DP:GQ
  
  Proband blood: 0/1:25,25:50:99
  Mother blood: 0/1:24,23:47:99
  Father blood: 0/0:45,0:45:99
  
  Read-level notes:
  ALT reads seen on both forward and reverse strands
  ALT reads distributed across read positions
  High mapping quality
  No local mapping warning
  Second caller: detected
  
  Medication context:
  The referral is for rare disease diagnosis, not pharmacogenomic testing.
  No specific medication query is included in the referral.
  No current adverse drug reaction history is provided.
  No local confirmation of reportability is included in the case summary.
  
  Phenotype fit:
  Developmental delay: no established diagnostic relationship
  Severe speech delay: no established diagnostic relationship
  Epilepsy: may affect treatment considerations only in some contexts, not diagnostic cause
  Hypotonia: no established diagnostic relationship
  Feeding difficulties: no established diagnostic relationship
  Dysmorphic features: no established diagnostic relationship
  
  Governance context:
  Potential clinical usefulness depends on local policy, consent, test scope, and reporting pathway.
  This should not be treated as the main rare disease diagnosis.
  
  Review question:
  Assess whether this finding should be used diagnostically or handled as an out-of-scope pharmacogenomic-style observation.`,
        concern:
          "This may be clinically useful in the correct pathway, but it is not the diagnostic explanation for the rare disease referral.",
      },
      {
        id: "candidate-4",
        label: "Candidate 4",
        gene: "CNVPGX4 region",
        variant: "chr16:29120000-29205000 duplication",
        zygosity: "Heterozygous duplication",
        consequence: "copy_number_gain",
        inheritanceSignal: "Inherited from unaffected father",
        clinicalFit:
          "The duplication is likely real but inherited from the unaffected father, overlaps population CNVs, and has no established triplosensitivity mechanism for the neurodevelopmental phenotype.",
        rawEvidence: `CNV REGION: chr16:29120000-29205000
  CNV type: duplication
  Estimated size: 85 kb
  Copy-number state: heterozygous duplication
  
  Gene:
  CNVPGX4
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
  Epilepsy: weak overlap
  Hypotonia: weak overlap
  Feeding difficulties: not a core feature
  Dysmorphic features: not a core feature
  
  Review question:
  Assess whether this inherited copy-number gain has enough dosage, phenotype, and population support to be prioritised.`,
        concern:
          "This is likely technically real but weak because the gain mechanism is uncertain, population overlap is present, and it is inherited from an unaffected father.",
      },
      {
        id: "candidate-5",
        label: "Candidate 5",
        gene: "Scope and governance review",
        variant: "Pharmacogenomic-style result outside diagnostic question",
        zygosity: "Case-level boundary issue",
        consequence: "scope_boundary_review",
        inheritanceSignal: "Affects interpretation and reporting of Candidate 3",
        clinicalFit:
          "This is not a disease candidate. It is the central boundary issue: Candidate 3 may be clinically useful but does not answer the diagnostic question and must be handled within local scope and governance.",
        rawEvidence: `CASE CONTEXT REVIEW: scope and governance boundary
  Referral question:
  Rare disease diagnosis for developmental delay, epilepsy, hypotonia, feeding difficulties, and dysmorphic features.
  
  Candidate 3 context:
  Pharmacogenomic-style marker
  May affect medication response or adverse-effect risk in a specific prescribing context
  Does not explain the rare disease phenotype
  Inherited from unaffected mother
  No medication-specific query is included in the referral
  
  Why this matters:
  Clinically useful does not always mean diagnostically explanatory.
  A finding outside the original test scope may require a different reporting pathway.
  Consent, local policy, commissioning scope, and governance determine whether and how such information is communicated.
  The diagnostic handover should not be dominated by a non-diagnostic finding.
  
  Appropriate handling:
  Do not use Candidate 3 as the rare disease diagnosis.
  Do not silently treat it as equivalent to the main diagnostic candidate.
  Escalate to the appropriate local pathway if policy indicates review or reporting.
  Keep the diagnostic candidate and the pharmacogenomic-style observation conceptually separate.
  
  Review question:
  Assess how scope and governance should shape final reporting and handover.`,
        concern:
          "This is the central boundary issue. It should prevent Candidate 3 from being used as the diagnosis while still allowing appropriate escalation if local policy supports it.",
      },
    ],
  
    decisionCheckpoints: [
      {
        id: "checkpoint-1",
        title: "Checkpoint 1 — Identify the diagnostic candidate",
        context:
          "Candidate 2 fits the rare disease phenotype and mechanism. Candidate 3 may be clinically useful but does not explain the phenotype.",
        question:
          "Which finding should drive the rare disease diagnostic conclusion?",
        options: [
          {
            label: "A",
            text: "Candidate 2, because it best explains the phenotype and fits the diagnostic referral question.",
            isCorrect: true,
            feedback:
              "Correct. Candidate 2 is the strongest diagnostic candidate.",
          },
          {
            label: "B",
            text: "Candidate 3, because medication-related findings are clinically important and should override diagnostic findings.",
            isCorrect: false,
            feedback:
              "Not quite. Candidate 3 may matter in another pathway, but it does not explain the rare disease phenotype.",
          },
          {
            label: "C",
            text: "Candidate 4, because CNVs are easier to handle within rare disease reporting than pharmacogenomic findings.",
            isCorrect: false,
            feedback:
              "Not quite. Candidate 4 has weak dosage, inheritance, and phenotype support.",
          },
        ],
        teachingPoint:
          "Diagnostic relevance and broader clinical usefulness are not the same thing.",
      },
      {
        id: "checkpoint-2",
        title: "Checkpoint 2 — Handle the pharmacogenomic-style finding",
        context:
          "Candidate 3 may affect medication response in a relevant prescribing context, but no pharmacogenomic test was requested.",
        question:
          "What is the safest way to handle Candidate 3?",
        options: [
          {
            label: "A",
            text: "Report it as the main result because any clinically useful finding should be included in the diagnostic conclusion.",
            isCorrect: false,
            feedback:
              "Not quite. Usefulness does not automatically make a finding in-scope or diagnostic.",
          },
          {
            label: "B",
            text: "Escalate it through local policy and governance pathways without treating it as the rare disease diagnosis.",
            isCorrect: true,
            feedback:
              "Correct. This keeps the finding in the right scope and avoids overclaiming.",
          },
          {
            label: "C",
            text: "Delete it from all reasoning because findings outside the referral question should never be acknowledged.",
            isCorrect: false,
            feedback:
              "Not quite. It may still require appropriate governance-aware handling.",
          },
        ],
        teachingPoint:
          "Out-of-scope does not always mean irrelevant; it means the reporting pathway must be handled carefully.",
      },
      {
        id: "checkpoint-3",
        title: "Checkpoint 3 — Avoid phenotype mismatch",
        context:
          "Candidate 3 is inherited from the unaffected mother and has no established relationship with the neurodevelopmental phenotype.",
        question:
          "Why should Candidate 3 not be used as the diagnostic explanation?",
        options: [
          {
            label: "A",
            text: "Because it is inherited, pharmacogenomic in nature, and does not explain the developmental, epilepsy, hypotonia, or dysmorphic features.",
            isCorrect: true,
            feedback:
              "Correct. The finding may have medication relevance, but it does not fit the diagnostic disease mechanism.",
          },
          {
            label: "B",
            text: "Because inherited variants are never clinically useful when they are found during a rare disease genome test.",
            isCorrect: false,
            feedback:
              "Not quite. Inherited variants can be clinically useful, but this one does not explain the diagnostic referral.",
          },
          {
            label: "C",
            text: "Because pharmacogenomic-style variants are always sequencing artefacts unless confirmed by a separate test.",
            isCorrect: false,
            feedback:
              "Not quite. The issue is not technical reality; it is diagnostic relevance and reporting scope.",
          },
        ],
        teachingPoint:
          "A real variant can be clinically useful in one context and non-diagnostic in another.",
      },
      {
        id: "checkpoint-4",
        title: "Checkpoint 4 — Keep the handover scope-aware",
        context:
          "The final handover needs to answer the rare disease question while not mishandling the out-of-scope observation.",
        question:
          "Which wording is safest?",
        options: [
          {
            label: "A",
            text: "Candidate 3 should be highlighted as the main result because it may change prescribing decisions.",
            isCorrect: false,
            feedback:
              "Not quite. A prescribing-relevant observation should not replace the rare disease diagnostic conclusion.",
          },
          {
            label: "B",
            text: "Candidate 3 should be ignored entirely and never escalated because it is not diagnostic.",
            isCorrect: false,
            feedback:
              "Not quite. Some non-diagnostic findings may still require governance-aware escalation.",
          },
          {
            label: "C",
            text: "Candidate 2 should be prioritised diagnostically, while Candidate 3 is handled separately according to local scope and policy.",
            isCorrect: true,
            feedback:
              "Correct. This keeps diagnostic interpretation and out-of-scope utility separate.",
          },
        ],
        teachingPoint:
          "Good handover answers the referral question and routes boundary findings appropriately.",
      },
      {
        id: "checkpoint-5",
        title: "Checkpoint 5 — Final pharmacogenomic-boundary conclusion",
        context:
          "You need to prepare a safe trainee-level conclusion for formal clinical laboratory review.",
        question:
          "Which conclusion is safest?",
        options: [
          {
            label: "A",
            text: "Avoid prioritising Candidate 2 because the pharmacogenomic-style finding is more immediately actionable.",
            isCorrect: false,
            feedback:
              "Not quite. Actionability in another context does not replace diagnostic relevance.",
          },
          {
            label: "B",
            text: "Prioritise Candidate 2 for diagnostic review and handle Candidate 3 separately through local governance if appropriate.",
            isCorrect: true,
            feedback:
              "Correct. This conclusion separates diagnosis from out-of-scope clinical utility.",
          },
          {
            label: "C",
            text: "Report Candidate 3 as diagnostic because medication-related variants are important for patient safety.",
            isCorrect: false,
            feedback:
              "Not quite. Candidate 3 may matter, but it does not explain the rare disease phenotype.",
          },
        ],
        teachingPoint:
          "Safe clinical bioinformatics reasoning respects both evidence and scope.",
      },
    ],
  
    finalReflection:
      "A safe trainee-level conclusion would be that Candidate 2 is the strongest diagnostic finding for formal rare disease review. It is an apparent de novo canonical splice donor variant in DIAGCAP2, an established neurodevelopmental epilepsy gene, with strong phenotype fit, loss-of-function mechanism, population absence, and convincing technical evidence. Candidate 3 is a different type of finding. It may be clinically useful in a pharmacogenomic or medication-safety context, but it does not explain the child’s developmental delay, epilepsy, hypotonia, feeding difficulties, or dysmorphic features, and it was not the diagnostic question asked in the referral. Candidate 5 is therefore the central boundary issue: Candidate 3 should not be used as the diagnosis or allowed to dominate the diagnostic handover, but it may require escalation through local policy, consent, test-scope, and governance pathways if applicable. Candidate 4 is likely a real inherited CNV but has weak dosage and phenotype support. Candidate 1 is broad, inherited, relatively frequent, and poorly specific. The safest next step is to prioritise Candidate 2 for formal diagnostic review and handle Candidate 3 separately and proportionately through the appropriate local governance process.",
  };