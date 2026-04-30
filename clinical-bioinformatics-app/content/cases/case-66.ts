export const case66 = {
    id: "case-66",
    slug: "low-coverage-false-negative-limitation-case",
    title: "Case 66: Low-coverage false negative limitation",
    level: "Advanced",
    summary:
      "A guided case focused on a negative or uncertain analysis where no confident diagnostic candidate is found, but a phenotype-compatible gene has poor coverage in a clinically important region.",
  
    visualisationExampleId: null,
  
    assessmentFocus: [
      "Low-coverage limitation",
      "False negative awareness",
      "Negative result interpretation",
      "Coverage and sensitivity",
      "Candidate deprioritisation",
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
          "Rank the findings from most important to least important for the final handover, considering that no confident diagnostic candidate has been found but one phenotype-compatible gene has reduced sensitivity.",
        correctOrder: [
          "candidate-5",
          "candidate-3",
          "candidate-2",
          "candidate-4",
          "candidate-1",
        ],
        explanation:
          "Candidate 5 is most important because it defines the main safe conclusion: no confident candidate has been found, but the analysis has a meaningful coverage limitation. Candidate 3 is the key gene-level limitation because a phenotype-compatible gene has poor coverage in a relevant exon, so it cannot be fully excluded. Candidate 2 is a plausible but weak rare missense finding with limited evidence. Candidate 4 is likely a real inherited CNV with weak dosage and phenotype support. Candidate 1 is broad, inherited, relatively frequent, and poorly specific.",
      },
  
      escalationDecision: {
        prompt:
          "Choose the safest next action when no confident candidate is identified but a key phenotype-compatible region has poor coverage.",
        options: [
          {
            id: "report-negative-without-limitation",
            label: "A",
            decision:
              "Report the case as fully negative because no variant passed the standard calling thresholds.",
            isBest: false,
            feedback:
              "Review this choice. A negative result is not complete if a relevant gene or exon has poor coverage that limits sensitivity.",
          },
          {
            id: "document-limitation-and-escalate",
            label: "B",
            decision:
              "Document no confident candidate, highlight the poor-coverage limitation, and escalate targeted review or follow-up if clinically appropriate.",
            isBest: true,
            feedback:
              "Best decision. This preserves the negative finding while clearly communicating the false-negative limitation.",
          },
          {
            id: "treat-limitation-as-diagnosis",
            label: "C",
            decision:
              "Treat the poorly covered gene as the likely diagnosis because the phenotype fits and no other candidate was found.",
            isBest: false,
            feedback:
              "Review this choice. A coverage limitation is not a positive finding and should not be treated as a diagnosis.",
          },
        ],
      },
  
      writtenSummary: {
        prompt:
          "Write a short trainee-level handover summary explaining the negative result, the low-coverage limitation, and why the limitation should not be treated as a diagnosis.",
        checklist: [
          "States that no confident diagnostic candidate was identified.",
          "Names Candidate 3 or the coverage-limited gene as a relevant limitation.",
          "Explains that poor coverage reduces sensitivity in a phenotype-compatible region.",
          "Avoids treating poor coverage as a positive finding.",
          "Mentions targeted review, repeat testing, orthogonal testing, or clinical correlation if appropriate.",
          "Briefly explains why the other findings are weaker.",
        ],
        modelAnswer:
          "No confident diagnostic candidate has been identified in the current analysis. The most important issue is the coverage limitation affecting COVLIMIT3, a phenotype-compatible neurodevelopmental-metabolic gene. Most of the gene is adequately covered, but exon 8 has poor depth and reduced mapping quality, so the current data have reduced sensitivity for small variants in that region. This means COVLIMIT3 cannot be fully excluded by the current negative result, but the poor coverage itself is not a diagnosis and should not be described as a positive finding. Candidate 2 is plausible but weak because the gene and variant evidence are limited. Candidate 4 is likely a real inherited duplication but has weak dosage and phenotype support, and Candidate 1 is broad, inherited, relatively frequent, and poorly specific. The safest next step is to document no confident candidate, highlight the exon-level coverage limitation, and consider targeted review or follow-up testing if the clinical team considers COVLIMIT3 a strong phenotype match.",
      },
    },
  
    reasoningScorecard: [
      {
        category: "False negative awareness",
        maxScore: 2,
        expectation:
          "Recognises that a negative callset does not fully exclude disease when a relevant gene or region has poor coverage.",
      },
      {
        category: "Coverage interpretation",
        maxScore: 2,
        expectation:
          "Uses depth, percentage of bases below threshold, mapping quality, and exon-level sensitivity to judge the limitation.",
      },
      {
        category: "Negative result communication",
        maxScore: 2,
        expectation:
          "Communicates no confident candidate while clearly stating the limitation and what it does and does not mean.",
      },
      {
        category: "Candidate prioritisation",
        maxScore: 2,
        expectation:
          "Avoids over-prioritising weak variants simply because the case is otherwise negative.",
      },
      {
        category: "Safe escalation",
        maxScore: 2,
        expectation:
          "Recommends targeted review, orthogonal testing, repeat testing, or clinical correlation only where proportionate.",
      },
    ],
  
    patient: {
      age: 7,
      sex: "Male",
    },
  
    referralReason:
      "A 7-year-old boy has been referred for rare disease genome analysis because of developmental delay, epilepsy, hypotonia, feeding difficulties, episodic vomiting during illness, mild regression after metabolic stress, and raised lactate during one hospital admission. No confident diagnostic candidate has been identified in the standard analysis. However, a phenotype-compatible neurodevelopmental-metabolic gene has poor coverage across one clinically relevant exon, raising concern for a possible false negative limitation.",
  
    testType:
      "Rare disease genome sequencing with SNV/indel, CNV, negative-result, low-coverage, false-negative, and technical-sensitivity review",
  
    familyStructure:
      "The proband and both biological parents have been tested. Both parents are reportedly unaffected. No known consanguinity is reported. No convincing inheritance-supported candidate has been identified, but one relevant gene is incompletely assessed because of poor coverage.",
  
    history: [
      "Developmental delay noted in infancy",
      "Epilepsy beginning at age 3",
      "Generalised hypotonia",
      "Feeding difficulties in early childhood",
      "Episodic vomiting during intercurrent illness",
      "Mild regression after metabolic stress",
      "Raised lactate during one acute admission",
      "No known previous molecular diagnosis",
      "Both parents are reportedly unaffected",
      "No confident diagnostic candidate identified in standard analysis",
      "Clinical team asked whether the negative result fully excludes a metabolic candidate gene",
    ],
  
    phenotype: [
      "Developmental delay",
      "Epilepsy",
      "Hypotonia",
      "Feeding difficulties",
      "Episodic vomiting during illness",
      "Regression after metabolic stress",
      "Raised lactate",
      "Negative result with coverage limitation",
    ],
  
    familyHistory:
      "Both parents are reportedly unaffected. No known consanguinity is reported. There is no known family history of developmental delay, epilepsy, hypotonia, metabolic decompensation, raised lactate, feeding difficulties, or a similar childhood neurodevelopmental-metabolic presentation.",
  
    serviceContext: [
      "This guided case focuses on low-coverage false negative limitation.",
      "The key issue is that a negative result does not always mean every clinically relevant gene has been fully assessed.",
      "The learner should not invent a diagnosis from poor coverage.",
      "The learner should also not present the analysis as fully excluding a phenotype-compatible gene when a key exon has reduced sensitivity.",
      "The safest conclusion should state that no confident diagnostic candidate was identified while clearly documenting the coverage limitation.",
      "The final handover should explain what further targeted review or testing could add if clinically appropriate.",
    ],
  
    candidateFindings: [
      {
        id: "candidate-1",
        label: "Candidate 1",
        gene: "BROADNEG1",
        variant: "chr2:77190442 C>T",
        zygosity: "Heterozygous",
        consequence: "missense_variant",
        inheritanceSignal: "Inherited from unaffected mother",
        clinicalFit:
          "BROADNEG1 has a broad neurodevelopmental association in limited reports, but the variant is inherited from the unaffected mother, relatively frequent, and does not explain the metabolic-stress features well.",
        rawEvidence: `GENE: BROADNEG1
  Known disease association: broad neurodevelopmental association in limited reports
  Reported inheritance: autosomal dominant proposed
  Known mechanism: uncertain
  Gene-disease validity in local summary: limited
  
  Variant:
  chr2:77190442 C>T
  Transcript: NM_660001.2
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
  
  Phenotype fit:
  Developmental delay: broad possible overlap
  Epilepsy: limited overlap
  Hypotonia: weak overlap
  Episodic vomiting: not a core feature
  Raised lactate: not a core feature
  Regression after metabolic stress: not a core feature
  
  Review question:
  Assess whether this inherited, relatively frequent, broad-match finding should be used to avoid a negative conclusion.`,
        concern:
          "This is technically real but weak. It should not be promoted just because the case lacks a confident diagnostic candidate.",
      },
      {
        id: "candidate-2",
        label: "Candidate 2",
        gene: "WEAKMISS2",
        variant: "chr10:55218401 G>A",
        zygosity: "Heterozygous",
        consequence: "missense_variant",
        inheritanceSignal: "Absent from both parents on standard genotype calls",
        clinicalFit:
          "WEAKMISS2 has a possible neurodevelopmental association. The variant is rare and technically plausible, but the gene evidence is emerging, the exact variant has limited support, and the metabolic-stress features are not well explained.",
        rawEvidence: `GENE: WEAKMISS2
  Known disease association: possible autosomal dominant neurodevelopmental disorder
  Reported inheritance: usually de novo or dominant in limited reports
  Known mechanism: damaging missense variants in a functional domain
  Gene-disease validity in local summary: moderate / emerging
  
  Variant:
  chr10:55218401 G>A
  Transcript: NM_660002.4
  HGVS: c.1286G>A p.(Arg429His)
  Consequence: missense_variant
  Protein domain: possible neurodevelopmental functional domain
  
  VCF-style fields:
  QUAL=812
  FILTER=PASS
  INFO: DP=52;MQ=60;QD=15.6;SOR=0.78
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
  Developmental delay: compatible
  Epilepsy: compatible
  Hypotonia: partial overlap
  Feeding difficulties: weak overlap
  Episodic vomiting: not a core feature
  Raised lactate: not a core feature
  Regression after metabolic stress: not a core feature
  
  Review question:
  Assess whether this rare but weakly supported missense finding should be treated as the main explanation in an otherwise negative case.`,
        concern:
          "This is plausible but weak. It may be reviewed, but it is not strong enough to replace a careful negative-with-limitation conclusion.",
      },
      {
        id: "candidate-3",
        label: "Candidate 3",
        gene: "COVLIMIT3",
        variant: "No confident variant identified; exon 8 has poor coverage",
        zygosity: "Region incompletely assessed",
        consequence: "coverage_limitation",
        inheritanceSignal: "Cannot assess variants in the poorly covered region confidently",
        clinicalFit:
          "COVLIMIT3 is associated with an autosomal recessive neurodevelopmental-metabolic disorder that overlaps the patient’s phenotype. No confident variant is identified, but one clinically relevant exon has poor coverage, so the gene is not fully excluded by the current data.",
        rawEvidence: `GENE: COVLIMIT3
  Known disease association: autosomal recessive neurodevelopmental-metabolic disorder
  Reported inheritance: autosomal recessive
  Known mechanism: biallelic loss-of-function or damaging missense variants
  Gene-disease validity in local summary: established / moderate
  
  Reason for review:
  Phenotype overlap includes developmental delay, epilepsy, hypotonia, feeding difficulties, episodic vomiting during illness, regression after metabolic stress, and raised lactate.
  
  Current variant result:
  No confident SNV/indel identified in COVLIMIT3 in the standard callset
  No confident exon-level deletion/duplication detected by CNV caller
  No strong deep intronic splice candidate identified in current summary
  
  Coverage limitation:
  Transcript: NM_660003.5
  Clinically relevant exon: exon 8 of 14
  Exon 8 coding length: 142 bp
  Mean depth across most COVLIMIT3 coding exons: 38–62x
  Mean depth across exon 8: 6x
  Percentage of exon 8 bases below 10x: 68%
  Percentage of exon 8 bases below 20x: 94%
  
  Read / mapping context:
  Local GC-rich segment across exon 8
  Reduced mapping quality in part of exon 8
  Variant caller sensitivity is reduced in this region
  No confident alternate allele passes local thresholds
  Manual visible-read review does not show a clear candidate, but sensitivity is limited
  
  CNV review:
  No exon-level deletion/duplication detected across COVLIMIT3
  Normalised depth across most exons: ~0.96–1.05
  Exon 8 depth is noisy and not reliable enough to exclude all small events confidently
  No second CNV caller support for a deletion
  
  Population / database context:
  No specific variant identified, so variant population evidence cannot be applied
  Known pathogenic variants in COVLIMIT3 include coding variants across multiple exons, including exon 8 in local summary
  
  Review question:
  Assess whether a phenotype-compatible gene can be considered fully excluded when a clinically relevant exon is poorly covered.`,
        concern:
          "This is not a positive finding. It is an important false-negative limitation that should be documented in the final handover.",
      },
      {
        id: "candidate-4",
        label: "Candidate 4",
        gene: "CNVNEG4 region",
        variant: "chr16:29120000-29205000 duplication",
        zygosity: "Heterozygous duplication",
        consequence: "copy_number_gain",
        inheritanceSignal: "Inherited from unaffected father",
        clinicalFit:
          "The duplication is likely real but inherited from the unaffected father, overlaps population CNVs, and has no established triplosensitivity mechanism for the neurodevelopmental-metabolic phenotype.",
        rawEvidence: `CNV REGION: chr16:29120000-29205000
  CNV type: duplication
  Estimated size: 85 kb
  Copy-number state: heterozygous duplication
  
  Gene:
  CNVNEG4
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
  Metabolic stress regression: not a core feature
  Raised lactate: not a core feature
  
  Review question:
  Assess whether this inherited copy-number gain has enough dosage, phenotype, and population support to be prioritised in a mostly negative case.`,
        concern:
          "This is likely technically real but weak because the gain mechanism is uncertain, population overlap is present, and it is inherited from an unaffected father.",
      },
      {
        id: "candidate-5",
        label: "Candidate 5",
        gene: "Negative result with coverage limitation",
        variant: "No confident candidate identified; reduced sensitivity in COVLIMIT3 exon 8",
        zygosity: "Case-level limitation",
        consequence: "false_negative_risk_review",
        inheritanceSignal: "Affects confidence in the negative result",
        clinicalFit:
          "This is not a disease candidate. It is the central case conclusion: no confident candidate has been identified, but the result has an important coverage limitation affecting a phenotype-compatible gene.",
        rawEvidence: `CASE CONTEXT REVIEW: negative result with low-coverage limitation
  Current analysis summary:
  No confident diagnostic SNV/indel identified
  No confident diagnostic CNV identified
  No inheritance-supported candidate fully explains the phenotype
  Several weak findings were reviewed and deprioritised
  
  Key limitation:
  COVLIMIT3 is phenotype-compatible
  COVLIMIT3 exon 8 is poorly covered
  Most other exons in COVLIMIT3 are adequately covered
  The poorly covered exon reduces sensitivity for small variants in that region
  
  What the limitation means:
  The analysis did not identify a confident COVLIMIT3 variant
  The current data do not fully exclude COVLIMIT3
  A pathogenic variant in the poorly covered region could theoretically be missed
  The limitation is more relevant because the gene fits the phenotype
  
  What the limitation does not mean:
  It does not prove a COVLIMIT3 diagnosis
  It does not create a positive variant
  It does not make weak unrelated findings stronger
  It does not mean every negative result is unreliable
  
  Possible follow-up if clinically appropriate:
  Targeted coverage review
  Sanger or targeted sequencing of the poorly covered exon
  Repeat testing with an assay that covers the region better
  Orthogonal testing if local pathway supports it
  Clinical team review of whether COVLIMIT3 remains a strong candidate gene
  
  Review question:
  Assess how the coverage limitation should shape the final negative-result handover.`,
        concern:
          "This is the central handover issue. The final conclusion should be negative with a clearly stated limitation, not simply negative and not diagnostic.",
      },
    ],
  
    decisionCheckpoints: [
      {
        id: "checkpoint-1",
        title: "Checkpoint 1 — Identify the main case conclusion",
        context:
          "No confident diagnostic candidate has been identified, but COVLIMIT3 has poor coverage in a clinically relevant exon.",
        question:
          "What should drive the final handover?",
        options: [
          {
            label: "A",
            text: "A negative-with-limitation conclusion, because no confident candidate was found but COVLIMIT3 is not fully excluded.",
            isCorrect: true,
            feedback:
              "Correct. This is the safest overall conclusion for the current evidence.",
          },
          {
            label: "B",
            text: "Candidate 2, because a rare parent-negative missense finding should be used to avoid a negative result.",
            isCorrect: false,
            feedback:
              "Not quite. Candidate 2 is not strong enough to replace a careful negative-with-limitation conclusion.",
          },
          {
            label: "C",
            text: "Candidate 3 as a diagnosis, because poor coverage in a phenotype-compatible gene suggests the answer is hidden there.",
            isCorrect: false,
            feedback:
              "Not quite. Poor coverage is a limitation, not a positive finding.",
          },
        ],
        teachingPoint:
          "A limitation can be important without becoming a diagnosis.",
      },
      {
        id: "checkpoint-2",
        title: "Checkpoint 2 — Interpret the coverage limitation",
        context:
          "COVLIMIT3 exon 8 has mean depth around 6x, with most bases below typical review thresholds.",
        question:
          "What does this coverage pattern mean?",
        options: [
          {
            label: "A",
            text: "The gene is fully excluded because no confident variant was called in the standard pipeline.",
            isCorrect: false,
            feedback:
              "Not quite. A standard negative call is less reassuring where coverage is poor.",
          },
          {
            label: "B",
            text: "The gene is confirmed as the diagnosis because poor coverage commonly hides pathogenic variants.",
            isCorrect: false,
            feedback:
              "Not quite. Poor coverage raises false-negative risk but does not prove a hidden variant.",
          },
          {
            label: "C",
            text: "The region has reduced sensitivity, so a variant in that exon could be missed by the current data.",
            isCorrect: true,
            feedback:
              "Correct. This is the correct interpretation of the coverage limitation.",
          },
        ],
        teachingPoint:
          "Low coverage affects sensitivity; it does not create either a positive result or a complete exclusion.",
      },
      {
        id: "checkpoint-3",
        title: "Checkpoint 3 — Avoid promoting weak findings",
        context:
          "Candidate 2 is rare and technically plausible, but the gene and variant evidence are limited and the phenotype fit is incomplete.",
        question:
          "How should Candidate 2 be handled?",
        options: [
          {
            label: "A",
            text: "Report it as the main diagnosis because otherwise the case would be negative.",
            isCorrect: false,
            feedback:
              "Not quite. A weak variant should not be promoted simply to avoid a negative result.",
          },
          {
            label: "B",
            text: "Document it as reviewed and weaker, while keeping the final conclusion focused on no confident candidate plus limitation.",
            isCorrect: true,
            feedback:
              "Correct. This keeps the reasoning proportionate and traceable.",
          },
          {
            label: "C",
            text: "Ignore it completely because uncertain variants should never be mentioned in a negative case review.",
            isCorrect: false,
            feedback:
              "Not quite. It can be documented as reviewed without being over-prioritised.",
          },
        ],
        teachingPoint:
          "Negative cases require discipline: do not upgrade weak evidence just because the case is unresolved.",
      },
      {
        id: "checkpoint-4",
        title: "Checkpoint 4 — Decide what follow-up is proportionate",
        context:
          "The clinical team is particularly interested in whether COVLIMIT3 could still be relevant.",
        question:
          "Which follow-up best addresses the limitation?",
        options: [
          {
            label: "A",
            text: "Targeted review or sequencing of the poorly covered exon if the clinical team considers COVLIMIT3 a strong match.",
            isCorrect: true,
            feedback:
              "Correct. This follow-up directly addresses the region with reduced sensitivity.",
          },
          {
            label: "B",
            text: "Immediate reporting of COVLIMIT3 as diagnostic because targeted follow-up would take extra time.",
            isCorrect: false,
            feedback:
              "Not quite. A limitation should not be converted into diagnostic wording.",
          },
          {
            label: "C",
            text: "No follow-up under any circumstances because genome sequencing was already performed.",
            isCorrect: false,
            feedback:
              "Not quite. Genome sequencing can still have coverage limitations that targeted testing may address.",
          },
        ],
        teachingPoint:
          "Follow-up should match the limitation and remain proportionate to the clinical suspicion.",
      },
      {
        id: "checkpoint-5",
        title: "Checkpoint 5 — Final low-coverage conclusion",
        context:
          "You need to prepare a safe trainee-level conclusion for formal clinical laboratory review.",
        question:
          "Which conclusion is safest?",
        options: [
          {
            label: "A",
            text: "Report the case as completely negative because no candidate variant was identified.",
            isCorrect: false,
            feedback:
              "Not quite. The poor coverage in a relevant gene means the limitation should be documented.",
          },
          {
            label: "B",
            text: "Report COVLIMIT3 as the likely diagnosis because a key exon was not fully assessed.",
            isCorrect: false,
            feedback:
              "Not quite. Incomplete assessment is not equivalent to a positive result.",
          },
          {
            label: "C",
            text: "State that no confident candidate was identified, but COVLIMIT3 exon 8 has reduced sensitivity and may need targeted follow-up.",
            isCorrect: true,
            feedback:
              "Correct. This conclusion is balanced, safe, and technically accurate.",
          },
        ],
        teachingPoint:
          "Safe negative-result handover states both what was not found and what was not fully assessable.",
      },
    ],
  
    finalReflection:
      "A safe trainee-level conclusion would be that no confident diagnostic candidate has been identified in the current analysis, but the result has an important coverage limitation. COVLIMIT3 is a phenotype-compatible autosomal recessive neurodevelopmental-metabolic gene, and most of the gene is adequately covered, but exon 8 has poor depth, reduced mapping quality, and a high proportion of bases below typical sensitivity thresholds. This means the current data have reduced sensitivity for small variants in that exon, so COVLIMIT3 cannot be fully excluded. However, poor coverage is not a positive finding and should not be reported as a diagnosis. Candidate 5 is the central handover issue because it defines the negative-with-limitation conclusion. Candidate 3 is the specific gene-level limitation. Candidate 2 is rare and technically plausible but weak because the gene and variant evidence are limited and the phenotype fit is incomplete. Candidate 4 is likely a real inherited duplication but has weak dosage and phenotype support. Candidate 1 is inherited, relatively frequent, and poorly specific. The safest next step is to document no confident candidate, clearly state the COVLIMIT3 exon 8 coverage limitation, and consider targeted review or follow-up testing if the clinical team considers that gene a strong candidate.",
  };