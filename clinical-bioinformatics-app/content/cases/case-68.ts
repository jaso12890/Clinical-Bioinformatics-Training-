export const case68 = {
    id: "case-68",
    slug: "conflicting-lab-database-evidence-case",
    title: "Case 68: Conflicting lab / database evidence",
    level: "Advanced",
    summary:
      "A guided case focused on conflicting external evidence, where one source describes a variant as likely pathogenic while another source describes it as VUS or likely benign.",
  
    visualisationExampleId: null,
  
    assessmentFocus: [
      "Conflicting evidence",
      "Database interpretation caution",
      "Lab evidence quality",
      "Variant classification uncertainty",
      "Candidate prioritisation",
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
          "Rank the findings from strongest to weakest based on phenotype fit, technical confidence, gene mechanism, inheritance, population data, and the quality of conflicting evidence.",
        correctOrder: [
          "candidate-2",
          "candidate-5",
          "candidate-3",
          "candidate-4",
          "candidate-1",
        ],
        explanation:
          "Candidate 2 is strongest because the gene, phenotype, inheritance, rarity, mechanism, and technical evidence all support formal review, but conflicting external interpretations mean it should not be overcalled without evidence reconciliation. Candidate 5 is central because it explains how to handle conflicting lab and database evidence. Candidate 3 is weaker because the apparently strong database label is poorly supported and conflicts with population and mechanism concerns. Candidate 4 is likely a real CNV but has weak dosage and phenotype support. Candidate 1 is broad, inherited, relatively frequent, and poorly specific.",
      },
  
      escalationDecision: {
        prompt:
          "Choose the safest next action for the strongest candidate with conflicting external evidence.",
        options: [
          {
            id: "accept-highest-label",
            label: "A",
            decision:
              "Use the most severe external label available because a likely pathogenic database entry is enough to report the variant diagnostically.",
            isBest: false,
            feedback:
              "Review this choice. External classifications must be weighed by evidence quality, submitter context, phenotype, and current data.",
          },
          {
            id: "escalate-evidence-reconciliation",
            label: "B",
            decision:
              "Escalate Candidate 2 for formal review, explicitly reconciling the conflicting evidence before final wording.",
            isBest: true,
            feedback:
              "Best decision. Candidate 2 is important, but conflicting evidence needs structured review before diagnostic communication.",
          },
          {
            id: "reject-conflicted",
            label: "C",
            decision:
              "Reject Candidate 2 because any conflict between laboratories means the finding cannot be clinically relevant.",
            isBest: false,
            feedback:
              "Review this choice. Conflicting evidence creates uncertainty, not automatic rejection.",
          },
        ],
      },
  
      writtenSummary: {
        prompt:
          "Write a short trainee-level handover summary explaining the strongest candidate, the conflict in external evidence, and how the conflict should be handled safely.",
        checklist: [
          "Names Candidate 2 as the strongest current finding.",
          "Explains the phenotype, inheritance, rarity, mechanism, and technical support.",
          "States clearly that external interpretations conflict.",
          "Weighs the quality of evidence rather than accepting the most severe label automatically.",
          "Avoids reporting Candidate 2 as diagnostic without formal evidence reconciliation.",
          "Briefly explains why Candidate 3 is a database-label trap and why the other findings are weaker.",
        ],
        modelAnswer:
          "Candidate 2 is the strongest current finding for formal review because it has good convergence across phenotype fit, apparent de novo inheritance, rarity, technical confidence, gene mechanism, and affected-domain relevance. However, the external evidence is conflicting: one curated-style source describes the variant or nearby same-residue evidence as likely pathogenic, while another laboratory submission remains VUS and a separate submission raises uncertainty about mechanism or phenotype specificity. The safest approach is not to simply accept the most severe external label, but to reconcile the evidence quality, submitter confidence, phenotype match, variant-level data, and current case evidence through formal review. Candidate 5 is the central conflict-review issue. Candidate 3 is weaker because its apparently strong database label is poorly supported and conflicts with population and mechanism concerns. Candidate 4 is likely a real inherited CNV but has weak dosage support, and Candidate 1 is broad, inherited, relatively frequent, and poorly specific. The safest next step is to escalate Candidate 2 for formal clinical laboratory review with explicit documentation of the conflicting evidence.",
      },
    },
  
    reasoningScorecard: [
      {
        category: "Conflicting evidence awareness",
        maxScore: 2,
        expectation:
          "Recognises that different laboratories or databases may classify the same or similar evidence differently.",
      },
      {
        category: "Evidence quality weighting",
        maxScore: 2,
        expectation:
          "Weighs submitter quality, review status, phenotype match, population data, mechanism, and variant-level evidence rather than copying the most severe label.",
      },
      {
        category: "Candidate prioritisation",
        maxScore: 2,
        expectation:
          "Prioritises the candidate with the strongest total case evidence while preserving classification uncertainty.",
      },
      {
        category: "Database-label trap recognition",
        maxScore: 2,
        expectation:
          "Recognises when an apparently strong database label is weakly supported or contradicted by current case evidence.",
      },
      {
        category: "Safe communication",
        maxScore: 2,
        expectation:
          "Communicates conflicting evidence clearly and recommends formal review rather than overconfident diagnostic wording.",
      },
    ],
  
    patient: {
      age: 9,
      sex: "Male",
    },
  
    referralReason:
      "A 9-year-old boy has been referred for rare disease genome analysis because of global developmental delay, severe speech delay, epilepsy, hypotonia, autistic features, feeding difficulties, and mild dysmorphic features. A strong-looking variant has been identified in a phenotype-compatible gene, but external evidence is conflicting: one source suggests likely pathogenicity while other submissions describe the variant as VUS or raise uncertainty about mechanism and phenotype specificity.",
  
    testType:
      "Rare disease trio genome sequencing with SNV/indel, CNV, conflicting evidence, database review, classification uncertainty, and technical-confidence review",
  
    familyStructure:
      "The proband and both biological parents have been tested. Both parents are reportedly unaffected. No known consanguinity is reported. The leading candidate appears absent from both parents with good coverage, but the interpretation is complicated by conflicting external evidence.",
  
    history: [
      "Global developmental delay noted in infancy",
      "Severe expressive speech delay",
      "Epilepsy beginning at age 4",
      "Generalised hypotonia",
      "Autistic features reported by the clinical team",
      "Feeding difficulties in early childhood",
      "Mild dysmorphic features noted by clinical genetics",
      "No known previous molecular diagnosis",
      "Both parents are reportedly unaffected",
      "Variant database review shows conflicting interpretations",
      "Clinical team requested a careful review of whether the database conflict changes prioritisation",
    ],
  
    phenotype: [
      "Global developmental delay",
      "Severe speech delay",
      "Epilepsy",
      "Hypotonia",
      "Autistic features",
      "Feeding difficulties",
      "Mild dysmorphic features",
      "Conflicting external evidence",
    ],
  
    familyHistory:
      "Both parents are reportedly unaffected. There is no known family history of developmental delay, epilepsy, hypotonia, autistic features, severe speech delay, feeding difficulties, dysmorphic features, or a similar neurodevelopmental presentation.",
  
    serviceContext: [
      "This guided case focuses on conflicting lab and database evidence.",
      "The key issue is that external labels are not all equal and should not be copied into the final conclusion without evidence review.",
      "The learner should not automatically accept the most severe classification label.",
      "The learner should also not reject a candidate simply because different sources disagree.",
      "The safest conclusion should prioritise the strongest candidate while clearly documenting the evidence conflict and need for formal reconciliation.",
      "The final handover should show how evidence quality was weighed, not just which label appeared in a database.",
    ],
  
    candidateFindings: [
      {
        id: "candidate-1",
        label: "Candidate 1",
        gene: "BROADCONF1",
        variant: "chr2:77190442 C>T",
        zygosity: "Heterozygous",
        consequence: "missense_variant",
        inheritanceSignal: "Inherited from unaffected mother",
        clinicalFit:
          "BROADCONF1 has a broad neurodevelopmental association in limited reports, but the variant is inherited from the unaffected mother, relatively frequent, and does not explain the epilepsy-led presentation well.",
        rawEvidence: `GENE: BROADCONF1
  Known disease association: broad neurodevelopmental association in limited reports
  Reported inheritance: autosomal dominant proposed
  Known mechanism: uncertain
  Gene-disease validity in local summary: limited
  
  Variant:
  chr2:77190442 C>T
  Transcript: NM_680001.2
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
  gnomAD AF = 0.0012
  gnomAD allele count = 340
  One homozygote observed in local population summary
  
  External evidence:
  No exact matching pathogenic record found
  Several submitted variants in BROADCONF1 remain VUS or likely benign
  
  Phenotype fit:
  Developmental delay: broad possible overlap
  Severe speech delay: broad possible overlap
  Epilepsy: limited overlap
  Hypotonia: weak overlap
  Autistic features: broad possible overlap
  Feeding difficulties: not a core feature
  
  Review question:
  Assess whether this inherited, relatively frequent, broad-match variant should drive the case conclusion.`,
        concern:
          "This is technically real but weak. It should be reviewed and deprioritised rather than treated as the main explanation.",
      },
      {
        id: "candidate-2",
        label: "Candidate 2",
        gene: "CONFLICT2",
        variant: "chr12:66190442 G>A",
        zygosity: "Heterozygous",
        consequence: "missense_variant",
        inheritanceSignal: "Apparent de novo with good parental coverage",
        clinicalFit:
          "CONFLICT2 is associated with an autosomal dominant neurodevelopmental epilepsy syndrome. The variant is rare, technically strong, apparently de novo, located in a relevant domain, and fits the phenotype. External classifications conflict, so the evidence must be reconciled rather than copied directly.",
        rawEvidence: `GENE: CONFLICT2
  Known disease association: autosomal dominant neurodevelopmental epilepsy syndrome
  Reported inheritance: usually de novo
  Known mechanism: damaging missense variants in a recurrent functional domain
  Gene-disease validity in local summary: moderate / established
  
  Variant:
  chr12:66190442 G>A
  Transcript: NM_680002.5
  HGVS: c.1370G>A p.(Gly457Glu)
  Consequence: missense_variant
  Protein domain: recurrent neurodevelopmental functional domain
  Domain note: disease-associated missense variants cluster in this domain
  
  VCF-style fields:
  QUAL=950
  FILTER=PASS
  INFO: DP=56;MQ=60;QD=17.0;SOR=0.72
  FORMAT: GT:AD:DP:GQ
  
  Proband blood: 0/1:28,28:56:99
  Mother blood: 0/0:46,0:46:99
  Father blood: 0/0:45,0:45:99
  
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
  
  External evidence summary:
  Source A: likely pathogenic classification
  Source A evidence basis: affected individuals with overlapping phenotype, de novo occurrence, same-domain evidence, moderate submitter detail
  Source B: VUS classification
  Source B evidence basis: same variant observed in one affected individual, limited functional evidence, cautious interpretation
  Source C: VUS / uncertain significance
  Source C evidence basis: no exact functional assay and limited same-residue evidence
  Local review: evidence supports formal review but should not simply copy Source A wording
  
  Phenotype fit:
  Global developmental delay: strong match
  Severe speech delay: strong match
  Epilepsy: strong match
  Hypotonia: compatible
  Autistic features: compatible
  Feeding difficulties: compatible
  Mild dysmorphic features: variable
  
  Interpretation limitation:
  The current case evidence is strong.
  External classifications conflict.
  The final wording depends on formal evidence reconciliation, not automatic acceptance of one database label.
  
  Review question:
  Assess whether this candidate should be prioritised while keeping the evidence conflict visible.`,
        concern:
          "This is the strongest current candidate, but the conflicting evidence must be reconciled before confident diagnostic wording.",
      },
      {
        id: "candidate-3",
        label: "Candidate 3",
        gene: "LABELTRAP3",
        variant: "chr8:44198221 G>A",
        zygosity: "Heterozygous",
        consequence: "missense_variant",
        inheritanceSignal: "Inherited from unaffected father",
        clinicalFit:
          "LABELTRAP3 has a possible developmental association. A database entry labels this variant likely pathogenic, but the submission is weakly supported, the variant is inherited from an unaffected father, and updated population and mechanism evidence reduce confidence.",
        rawEvidence: `GENE: LABELTRAP3
  Known disease association: possible neurodevelopmental association
  Reported inheritance: autosomal dominant proposed
  Known mechanism: uncertain
  Gene-disease validity in local summary: limited / emerging
  
  Variant:
  chr8:44198221 G>A
  Transcript: NM_680003.4
  HGVS: c.1286G>A p.(Arg429His)
  Consequence: missense_variant
  Protein domain: not clearly established as disease-critical in current summary
  
  VCF-style fields:
  QUAL=820
  FILTER=PASS
  INFO: DP=52;MQ=60;QD=15.8;SOR=0.80
  FORMAT: GT:AD:DP:GQ
  
  Proband blood: 0/1:26,26:52:99
  Mother blood: 0/0:44,0:44:99
  Father blood: 0/1:24,24:48:99
  
  Read-level notes:
  ALT reads seen on both forward and reverse strands
  ALT reads distributed across read positions
  High mapping quality
  No local low-complexity warning
  Second caller: detected
  
  Population:
  gnomAD AF = 0.0009
  gnomAD allele count = 250
  No homozygotes in local summary
  
  External evidence summary:
  Source A: likely pathogenic classification
  Source A evidence basis: single submitter, limited phenotype detail, no segregation detail in local summary
  Source B: VUS classification
  Source B evidence basis: limited case evidence, mechanism uncertain
  Source C: likely benign leaning comment in local summary because of frequency and inheritance concerns
  Local review: likely pathogenic label is not well supported enough to drive this case
  
  Phenotype fit:
  Developmental delay: broad possible overlap
  Severe speech delay: broad possible overlap
  Epilepsy: limited overlap
  Hypotonia: weak overlap
  Autistic features: broad possible overlap
  Feeding difficulties: not a core feature
  
  Review question:
  Assess whether an apparently strong external label should override weak inheritance, frequency, mechanism, and phenotype evidence.`,
        concern:
          "This is a database-label trap. The external likely pathogenic label is not enough to make it the main candidate.",
      },
      {
        id: "candidate-4",
        label: "Candidate 4",
        gene: "CNVCONF4 region",
        variant: "chr16:29120000-29205000 duplication",
        zygosity: "Heterozygous duplication",
        consequence: "copy_number_gain",
        inheritanceSignal: "Inherited from unaffected mother",
        clinicalFit:
          "The duplication is likely real but inherited from the unaffected mother, overlaps population CNVs, and has no established triplosensitivity mechanism for the neurodevelopmental phenotype.",
        rawEvidence: `CNV REGION: chr16:29120000-29205000
  CNV type: duplication
  Estimated size: 85 kb
  Copy-number state: heterozygous duplication
  
  Gene:
  CNVCONF4
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
  
  External evidence:
  No strong triplosensitivity evidence in local summary
  Overlapping duplications have mixed submissions, mostly benign or uncertain
  
  Phenotype fit:
  Developmental delay: broad possible overlap
  Epilepsy: weak overlap
  Hypotonia: weak overlap
  Feeding difficulties: not a core feature
  Dysmorphic features: variable
  
  Review question:
  Assess whether this inherited copy-number gain has enough dosage, phenotype, and population support to be prioritised.`,
        concern:
          "This is likely technically real but weak because the gain mechanism is uncertain, population overlap is present, and it is inherited from an unaffected mother.",
      },
      {
        id: "candidate-5",
        label: "Candidate 5",
        gene: "Conflicting evidence review",
        variant: "One source likely pathogenic; another VUS or likely benign",
        zygosity: "Case-level interpretation issue",
        consequence: "conflicting_evidence_review",
        inheritanceSignal: "Affects interpretation of Candidate 2 and Candidate 3",
        clinicalFit:
          "This is not a disease candidate. It is the central interpretation issue because external classifications disagree and must be weighed by evidence quality.",
        rawEvidence: `CASE CONTEXT REVIEW: conflicting lab and database evidence
  Reason for review:
  The case includes variants where external evidence is not consistent.
  One source may label a variant likely pathogenic.
  Another source may classify the same or similar evidence as VUS.
  A third source may raise benign or uncertain interpretation concerns.
  
  Important principle:
  A database label is a summary, not the evidence itself.
  Different submitters may use different evidence, dates, thresholds, transcript choices, phenotype information, or classification frameworks.
  The most severe label is not automatically the correct one.
  The least severe label is not automatically the safest one.
  
  Candidate 2 conflict:
  Strong current case evidence
  Good phenotype fit
  Apparently de novo with good parental coverage
  Absent from population data
  Relevant disease mechanism and domain
  External sources conflict between likely pathogenic and VUS
  Needs formal evidence reconciliation
  
  Candidate 3 conflict:
  One likely pathogenic label exists
  But the support is weakly documented
  Variant is inherited from an unaffected father
  Variant is more frequent than expected for the proposed severe dominant disorder
  Gene mechanism remains uncertain
  The external label should not drive the case
  
  Useful review steps:
  Check submitter review status
  Check date of submission
  Check phenotype details behind each classification
  Check whether the exact variant or a nearby/same-domain variant is being cited
  Check population data and ancestry context
  Check gene-disease validity and mechanism
  Check whether evidence was applied under current local classification standards
  Document why a label was accepted, downgraded, or treated cautiously
  
  Review question:
  Assess how conflicting external evidence should shape candidate ranking and final wording.`,
        concern:
          "This is the central issue. The final handover should weigh evidence quality rather than copy a database label.",
      },
    ],
  
    decisionCheckpoints: [
      {
        id: "checkpoint-1",
        title: "Checkpoint 1 — Identify the strongest candidate",
        context:
          "Candidate 2 has strong case-level evidence, but external sources disagree about classification.",
        question:
          "Which finding should be prioritised for formal review?",
        options: [
          {
            label: "A",
            text: "Candidate 3, because it has a likely pathogenic database label even though the inheritance and frequency are concerning.",
            isCorrect: false,
            feedback:
              "Not quite. The label alone should not outweigh weak support from the current case evidence.",
          },
          {
            label: "B",
            text: "Candidate 4, because CNV evidence avoids the problem of conflicting SNV database classifications.",
            isCorrect: false,
            feedback:
              "Not quite. Candidate 4 is likely real, but dosage, inheritance, and phenotype support are weak.",
          },
          {
            label: "C",
            text: "Candidate 2, because the full case evidence is strongest while the evidence conflict remains an explicit limitation.",
            isCorrect: true,
            feedback:
              "Correct. Candidate 2 should be prioritised, but the conflict must be reconciled before final wording.",
          },
        ],
        teachingPoint:
          "Candidate ranking should use total evidence, not just the most severe external label.",
      },
      {
        id: "checkpoint-2",
        title: "Checkpoint 2 — Weigh conflicting classifications",
        context:
          "One source calls Candidate 2 likely pathogenic while another calls it VUS.",
        question:
          "What is the safest way to handle this conflict?",
        options: [
          {
            label: "A",
            text: "Review the evidence behind each classification, including submitter quality, phenotype, mechanism, population data, and date.",
            isCorrect: true,
            feedback:
              "Correct. Conflicting labels should be resolved by reviewing the underlying evidence.",
          },
          {
            label: "B",
            text: "Always use the likely pathogenic label because it is more clinically useful than VUS.",
            isCorrect: false,
            feedback:
              "Not quite. Clinical usefulness does not justify accepting the most severe label without evidence review.",
          },
          {
            label: "C",
            text: "Always use the VUS label because it is safer whenever any source disagrees.",
            isCorrect: false,
            feedback:
              "Not quite. Conservative wording matters, but the evidence still needs to be weighed.",
          },
        ],
        teachingPoint:
          "A classification label should be traceable back to the evidence used to support it.",
      },
      {
        id: "checkpoint-3",
        title: "Checkpoint 3 — Recognise the database-label trap",
        context:
          "Candidate 3 has a likely pathogenic label, but the submission is weakly supported and the variant is inherited from an unaffected father with a higher population frequency.",
        question:
          "How should Candidate 3 be interpreted?",
        options: [
          {
            label: "A",
            text: "Report it as the main candidate because likely pathogenic database labels should be trusted over local evidence.",
            isCorrect: false,
            feedback:
              "Not quite. A weakly supported external label should not override current case evidence.",
          },
          {
            label: "B",
            text: "Ignore it completely because any conflicting database label means the variant is irrelevant.",
            isCorrect: false,
            feedback:
              "Not quite. It can be documented as reviewed and deprioritised.",
          },
          {
            label: "C",
            text: "Deprioritise it because the external label is poorly supported and conflicts with inheritance, frequency, mechanism, and phenotype evidence.",
            isCorrect: true,
            feedback:
              "Correct. This is a database-label trap rather than the strongest candidate.",
          },
        ],
        teachingPoint:
          "External labels are only useful when their underlying evidence fits the current case.",
      },
      {
        id: "checkpoint-4",
        title: "Checkpoint 4 — Communicate Candidate 2 safely",
        context:
          "Candidate 2 is strong enough for review, but formal classification depends on reconciling conflicting evidence.",
        question:
          "Which wording is safest?",
        options: [
          {
            label: "A",
            text: "Candidate 2 is diagnostic because one source classifies it as likely pathogenic.",
            isCorrect: false,
            feedback:
              "Not quite. One external label is not enough for diagnostic wording when evidence conflicts.",
          },
          {
            label: "B",
            text: "Candidate 2 is the strongest review-worthy candidate, with conflicting evidence requiring formal reconciliation.",
            isCorrect: true,
            feedback:
              "Correct. This preserves candidate strength and classification uncertainty.",
          },
          {
            label: "C",
            text: "Candidate 2 should be rejected because any conflict makes classification impossible.",
            isCorrect: false,
            feedback:
              "Not quite. Conflict means careful review is needed, not automatic rejection.",
          },
        ],
        teachingPoint:
          "Safe wording can prioritise a candidate without overstating classification certainty.",
      },
      {
        id: "checkpoint-5",
        title: "Checkpoint 5 — Final conflicting-evidence conclusion",
        context:
          "You need to prepare a safe trainee-level conclusion for formal clinical laboratory review.",
        question:
          "Which conclusion is safest?",
        options: [
          {
            label: "A",
            text: "Prioritise Candidate 2 for formal review, document the conflicting evidence, and avoid copying any single database label uncritically.",
            isCorrect: true,
            feedback:
              "Correct. This conclusion is balanced, traceable, and safe.",
          },
          {
            label: "B",
            text: "Prioritise Candidate 3 because a likely pathogenic label is stronger than a case-level evidence review.",
            isCorrect: false,
            feedback:
              "Not quite. Candidate 3’s label is not well supported by the current evidence.",
          },
          {
            label: "C",
            text: "Avoid prioritising any finding because conflicting classifications make interpretation impossible.",
            isCorrect: false,
            feedback:
              "Not quite. Conflicting evidence makes interpretation more complex, not impossible.",
          },
        ],
        teachingPoint:
          "Good clinical bioinformatics handover explains how conflict was handled, not just which label was selected.",
      },
    ],
  
    finalReflection:
      "A safe trainee-level conclusion would be that Candidate 2 is the strongest current finding for formal clinical laboratory review, but the conflicting external evidence must be reconciled before confident diagnostic wording. Candidate 2 has strong current case evidence: it is rare, technically convincing, apparently de novo with good parental coverage, located in a relevant functional domain, and fits the patient’s developmental delay, severe speech delay, epilepsy, hypotonia, autistic features, feeding difficulties, and dysmorphic features. However, external classifications conflict between likely pathogenic and VUS-level interpretations, and the final wording should be based on the evidence behind those labels rather than copying the most severe source. Candidate 5 is not a disease candidate but is the central interpretation issue because it explains how to weigh conflicting evidence. Candidate 3 is a database-label trap: although one source labels it likely pathogenic, the support is weakly documented and conflicts with inheritance, frequency, mechanism, and phenotype evidence. Candidate 4 is likely a real inherited duplication but has weak dosage and phenotype support. Candidate 1 is inherited, relatively frequent, broad, and poorly specific. The safest next step is to prioritise Candidate 2 for formal review, document the evidence conflict clearly, reconcile the external evidence under local standards, and preserve formal clinical laboratory classification and sign-off boundaries.",
  };