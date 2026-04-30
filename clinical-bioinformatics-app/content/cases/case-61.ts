export const case61 = {
    id: "case-61",
    slug: "known-familial-variant-follow-up-case",
    title: "Case 61: Known familial variant follow-up",
    level: "Advanced",
    summary:
      "A guided case focused on known familial variant follow-up, where the analysis is targeted around a specific previously identified family variant rather than open-ended discovery.",
  
    visualisationExampleId: null,
  
    assessmentFocus: [
      "Known familial variant follow-up",
      "Targeted variant confirmation",
      "Scope of analysis",
      "Nomenclature and transcript matching",
      "Incidental-looking findings",
      "Safe communication and handover",
    ],
  
    guidedTutorMode: {
      type: "static-rule-based",
      description:
        "Uses built-in hints, checkpoint feedback, model answers, and self-check criteria to support safe case reasoning.",
    },
  
    phase5Assessment: {
      candidateRanking: {
        prompt:
          "Rank the findings from strongest to weakest based on the referral question, exact familial variant match, technical confidence, phenotype fit, and whether each finding should drive the final handover.",
        correctOrder: [
          "candidate-2",
          "candidate-5",
          "candidate-3",
          "candidate-4",
          "candidate-1",
        ],
        explanation:
          "Candidate 2 is strongest because it is the exact known familial variant requested in the referral, has strong technical support, matches the reported family variant, and fits the family history and phenotype. Candidate 5 is not a disease candidate, but it is central because it explains the targeted follow-up context and why the case should not be treated like open-ended discovery. Candidate 3 is a plausible but unrelated uncertain finding that should not outweigh the known familial variant. Candidate 4 is likely technically real but has weak dosage and phenotype support. Candidate 1 is broad, relatively frequent, and poorly specific.",
      },
  
      escalationDecision: {
        prompt:
          "Choose the safest next action for the known familial variant follow-up result.",
        options: [
          {
            id: "confirm-familial-variant",
            label: "A",
            decision:
              "Escalate Candidate 2 for formal targeted familial variant confirmation and report wording, while keeping unrelated findings proportionate to the referral scope.",
            isBest: true,
            feedback:
              "Best decision. The main task is to confirm and communicate the known familial variant safely, while avoiding scope drift into unrelated findings.",
          },
          {
            id: "open-ended-analysis",
            label: "B",
            decision:
              "Treat all findings as equal discovery candidates because genome sequencing was performed and multiple variants are available.",
            isBest: false,
            feedback:
              "Review this choice. The referral is focused on a known familial variant, so unrelated findings should not automatically become equal-priority discovery candidates.",
          },
          {
            id: "ignore-familial-context",
            label: "C",
            decision:
              "Ignore the previous family result and prioritise only the rarest variant found in the current proband analysis.",
            isBest: false,
            feedback:
              "Review this choice. A known familial variant changes the interpretation context and should not be ignored.",
          },
        ],
      },
  
      writtenSummary: {
        prompt:
          "Write a short trainee-level handover summary explaining the known familial variant result, why exact matching matters, and how unrelated findings should be handled.",
        checklist: [
          "Names Candidate 2 as the key finding.",
          "States that Candidate 2 matches the known familial variant requested in the referral.",
          "Mentions exact gene, variant identity, transcript/build/HGVS consistency, and technical support.",
          "Explains that the case is targeted follow-up rather than open-ended discovery.",
          "Avoids over-prioritising unrelated uncertain findings.",
          "Recommends formal confirmation, reporting, and clinical laboratory sign-off.",
        ],
        modelAnswer:
          "Candidate 2 is the key finding for formal review because it matches the known familial variant requested in the referral. The proband is heterozygous for the same FAMFOLLOW2 variant previously identified in the affected family member, with strong read-level support, appropriate genotype quality, good mapping quality, and consistent nomenclature review across the current transcript and the familial report. The phenotype and family history are compatible with the known familial disorder. Candidate 5 is the central context point because this is a targeted familial variant follow-up, not an open-ended discovery analysis. Candidate 3 is a plausible but unrelated uncertain finding and should not outweigh the known familial variant. Candidate 4 is likely a real CNV but has weak dosage and phenotype support, and Candidate 1 is broad, relatively frequent, and poorly specific. The safest next step is formal targeted confirmation and reporting of Candidate 2 through the appropriate clinical laboratory pathway, with unrelated findings handled according to service scope and governance.",
      },
    },
  
    reasoningScorecard: [
      {
        category: "Familial variant focus",
        maxScore: 2,
        expectation:
          "Recognises that the referral is asking about a specific known family variant rather than an unrestricted discovery analysis.",
      },
      {
        category: "Exact variant matching",
        maxScore: 2,
        expectation:
          "Checks that the gene, genomic coordinate, transcript, HGVS description, build, and variant identity match the known familial result.",
      },
      {
        category: "Candidate prioritisation",
        maxScore: 2,
        expectation:
          "Prioritises the exact known familial variant over unrelated weaker findings.",
      },
      {
        category: "Scope awareness",
        maxScore: 2,
        expectation:
          "Avoids allowing unrelated incidental-looking or uncertain findings to dominate a targeted follow-up case.",
      },
      {
        category: "Safe communication",
        maxScore: 2,
        expectation:
          "Communicates the result as a targeted familial variant follow-up requiring formal confirmation, review, and sign-off.",
      },
    ],
  
    patient: {
      age: 4,
      sex: "Male",
    },
  
    referralReason:
      "A 4-year-old boy has been referred for known familial variant follow-up because his older sister has a confirmed diagnosis of a FAMFOLLOW2-related autosomal dominant neurodevelopmental disorder. The referral asks whether the proband carries the same familial variant. The proband has developmental delay, severe speech delay, focal seizures, hypotonia, and feeding difficulties. Genome sequencing also identified several additional findings, but the main referral question is targeted around the known family variant.",
  
    testType:
      "Known familial variant follow-up using genome sequencing data with targeted variant confirmation, transcript/HGVS matching, and scope-aware review",
  
    familyStructure:
      "The proband and both biological parents have been tested. The older sister is reported to carry the known familial FAMFOLLOW2 variant. The father is reported to have a mild learning difficulty history and carries the familial variant. The mother is reportedly unaffected and does not carry the familial variant.",
  
    history: [
      "Developmental delay noted in infancy",
      "Severe expressive speech delay",
      "Focal seizures beginning at age 2",
      "Generalised hypotonia",
      "Feeding difficulties in early childhood",
      "No previous molecular diagnosis in the proband",
      "Older sister has a confirmed FAMFOLLOW2-related diagnosis",
      "Father reportedly has mild learning difficulties and carries the familial variant",
      "Referral specifically asks whether the proband carries the known familial variant",
      "Genome data include other findings, but the clinical question is targeted follow-up",
    ],
  
    phenotype: [
      "Developmental delay",
      "Severe speech delay",
      "Focal seizures",
      "Hypotonia",
      "Feeding difficulties",
      "Known familial variant follow-up",
    ],
  
    familyHistory:
      "The older sister has a confirmed FAMFOLLOW2-related neurodevelopmental disorder. The father is reported to carry the same familial variant and has a mild learning difficulty history. The mother is reportedly unaffected and does not carry the familial variant. No separate family history suggesting a different disorder is provided.",
  
    serviceContext: [
      "This guided case focuses on known familial variant follow-up.",
      "The key issue is that the analysis question is targeted around a specific previously identified family variant.",
      "The learner should not treat every additional finding as equal to the known familial variant.",
      "The learner should also not assume the familial variant is confirmed without checking exact variant identity, nomenclature, transcript/build consistency, and technical support.",
      "The safest conclusion should answer the referral question clearly while documenting any scope limitations.",
      "The final handover should separate targeted familial variant confirmation from unrelated or incidental-looking findings.",
    ],
  
    candidateFindings: [
      {
        id: "candidate-1",
        label: "Candidate 1",
        gene: "BROADFAM1",
        variant: "chr2:77190442 C>T",
        zygosity: "Heterozygous",
        consequence: "missense_variant",
        inheritanceSignal: "Inherited from unaffected mother",
        clinicalFit:
          "BROADFAM1 has a broad neurodevelopmental association in limited reports, but the variant is inherited from the unaffected mother, relatively frequent, and does not match the known familial diagnosis.",
        rawEvidence: `GENE: BROADFAM1
  Known disease association: broad neurodevelopmental association in limited reports
  Reported inheritance: autosomal dominant proposed
  Known mechanism: uncertain
  Gene-disease validity in local summary: limited
  
  Variant:
  chr2:77190442 C>T
  Transcript: NM_610001.2
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
  Severe speech delay: broad possible overlap
  Focal seizures: limited overlap
  Hypotonia: weak overlap
  Feeding difficulties: not a core feature
  Known familial diagnosis: does not match the requested familial variant
  
  Review question:
  Assess whether this broad inherited finding should distract from the specific known familial variant follow-up question.`,
        concern:
          "This is technically real but weak. It should not drive the case because the referral question is focused on a known familial variant.",
      },
      {
        id: "candidate-2",
        label: "Candidate 2",
        gene: "FAMFOLLOW2",
        variant: "chr6:123456789 C>T",
        zygosity: "Heterozygous",
        consequence: "stop_gained",
        inheritanceSignal: "Matches known familial variant; inherited from affected father",
        clinicalFit:
          "FAMFOLLOW2 is associated with an autosomal dominant neurodevelopmental epilepsy disorder. The proband carries the exact familial variant reported in the affected sister and father, with strong technical support and compatible phenotype.",
        rawEvidence: `GENE: FAMFOLLOW2
  Known disease association: autosomal dominant neurodevelopmental epilepsy disorder
  Reported inheritance: autosomal dominant with variable expressivity
  Known mechanism: haploinsufficiency / loss-of-function
  Gene-disease validity in local summary: established
  
  Known familial variant from referral:
  Gene: FAMFOLLOW2
  Reported genomic coordinate: chr6:123456789 C>T
  Reported transcript: NM_610002.5
  Reported HGVS: c.1201C>T p.(Arg401Ter)
  Reported consequence: stop_gained
  Reported family member: affected older sister
  Reported carrier parent: father
  
  Current proband result:
  chr6:123456789 C>T
  Transcript: NM_610002.5
  HGVS: c.1201C>T p.(Arg401Ter)
  Consequence: stop_gained
  Transcript note: matches the familial report transcript in local review
  Reference build note: coordinate/build check is consistent in local summary
  
  VCF-style fields:
  QUAL=982
  FILTER=PASS
  INFO: DP=60;MQ=60;QD=16.4;SOR=0.68
  FORMAT: GT:AD:DP:GQ
  
  Proband blood: 0/1:30,30:60:99
  Mother blood: 0/0:48,0:48:99
  Father blood: 0/1:27,28:55:99
  
  Read-level notes:
  ALT reads seen on both forward and reverse strands
  ALT reads distributed across read positions
  High base quality at variant position
  High mapping quality for ALT-supporting reads
  No local low-complexity warning
  No pseudogene or segmental duplication warning
  No concerning soft-clipping
  Second caller: detected
  
  Familial variant matching review:
  Gene matches referral
  Genomic coordinate matches referral
  Transcript and HGVS match referral
  Protein consequence matches referral
  Inheritance matches known carrier parent
  Proband phenotype is compatible with the family diagnosis
  
  Population:
  gnomAD AF = not observed
  gnomAD allele count = 0
  
  ClinVar-style summary:
  Same variant recorded in local familial summary as previously confirmed in the family
  Other loss-of-function variants in FAMFOLLOW2 reported in affected individuals
  
  Phenotype fit:
  Developmental delay: strong match
  Severe speech delay: strong match
  Focal seizures: strong match
  Hypotonia: compatible
  Feeding difficulties: compatible
  
  Review question:
  Assess whether this result answers the known familial variant follow-up question and what checks are needed before reporting.`,
        concern:
          "This is the key finding. It matches the known familial variant and should be prioritised for formal targeted confirmation and reporting.",
      },
      {
        id: "candidate-3",
        label: "Candidate 3",
        gene: "UNRELATED3",
        variant: "chr10:55218401 G>A",
        zygosity: "Heterozygous",
        consequence: "missense_variant",
        inheritanceSignal: "Absent from both parents on standard genotype calls",
        clinicalFit:
          "UNRELATED3 has a possible developmental epilepsy association. The variant is rare and technically plausible, but it is unrelated to the known familial variant referral and has less established gene and variant evidence.",
        rawEvidence: `GENE: UNRELATED3
  Known disease association: possible autosomal dominant developmental epilepsy disorder
  Reported inheritance: usually de novo in limited reports
  Known mechanism: damaging missense variants in a functional domain
  Gene-disease validity in local summary: moderate / emerging
  
  Variant:
  chr10:55218401 G>A
  Transcript: NM_610003.4
  HGVS: c.1286G>A p.(Arg429His)
  Consequence: missense_variant
  Protein domain: possible epilepsy-associated functional domain
  
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
  Severe speech delay: compatible
  Focal seizures: compatible
  Hypotonia: partial overlap
  Feeding difficulties: weak overlap
  
  Referral scope:
  This finding is not the known familial variant requested in the referral.
  Further review would depend on local scope, consent, reporting policy, and clinical relevance.
  
  Review question:
  Assess whether this unrelated rare finding should outrank the exact familial variant result.`,
        concern:
          "This is plausible but unrelated to the main referral question. It should not outweigh the known familial variant follow-up result.",
      },
      {
        id: "candidate-4",
        label: "Candidate 4",
        gene: "CNVFAM4 region",
        variant: "chr16:29120000-29205000 duplication",
        zygosity: "Heterozygous duplication",
        consequence: "copy_number_gain",
        inheritanceSignal: "Inherited from unaffected mother",
        clinicalFit:
          "The duplication is likely real but inherited from the unaffected mother, overlaps population CNVs, and has no established triplosensitivity mechanism for the family’s known neurodevelopmental disorder.",
        rawEvidence: `CNV REGION: chr16:29120000-29205000
  CNV type: duplication
  Estimated size: 85 kb
  Copy-number state: heterozygous duplication
  
  Gene:
  CNVFAM4
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
  Focal seizures: weak overlap
  Hypotonia: weak overlap
  Feeding difficulties: not a core feature
  Known familial diagnosis: does not match the requested familial variant
  
  Review question:
  Assess whether this inherited copy-number gain has enough dosage, phenotype, and referral-scope support to be prioritised.`,
        concern:
          "This is likely technically real but weak because the gain mechanism is uncertain, population overlap is present, and it is not the known familial variant.",
      },
      {
        id: "candidate-5",
        label: "Candidate 5",
        gene: "Known familial variant review",
        variant: "Targeted follow-up around FAMFOLLOW2 c.1201C>T",
        zygosity: "Case-level interpretation context",
        consequence: "familial_variant_follow_up",
        inheritanceSignal: "Defines the primary analysis question",
        clinicalFit:
          "This is not a separate disease candidate. It is the central case context: the analysis should answer whether the proband carries the exact known familial variant.",
        rawEvidence: `CASE CONTEXT REVIEW: known familial variant follow-up
  Referral question:
  Does the proband carry the known familial FAMFOLLOW2 variant?
  
  Known familial variant details:
  Gene: FAMFOLLOW2
  Variant: chr6:123456789 C>T
  Transcript: NM_610002.5
  HGVS: c.1201C>T p.(Arg401Ter)
  Consequence: stop_gained
  Known affected family member: older sister
  Known carrier parent: father
  
  Why exact matching matters:
  Gene must match
  Genomic coordinate must match
  Reference build must be consistent
  Transcript and HGVS description should be reconciled
  Protein consequence should match
  Zygosity should be reviewed
  Read-level support should be technically convincing
  Inheritance should be checked against the known family result
  
  Scope issue:
  This is targeted familial variant follow-up.
  Additional variants may appear in genome data.
  Unrelated findings should not automatically become equal-priority findings.
  Review and reporting of unrelated findings depends on local scope, consent, referral indication, and governance.
  
  Review question:
  Assess how the known familial variant context should shape candidate ranking and final handover.`,
        concern:
          "This is the central context. The handover should answer the familial variant question directly and avoid unnecessary scope drift.",
      },
    ],
  
    decisionCheckpoints: [
      {
        id: "checkpoint-1",
        title: "Checkpoint 1 — Identify the main referral question",
        context:
          "The referral asks whether the proband carries the known familial FAMFOLLOW2 variant previously identified in the affected sister and father.",
        question:
          "Which finding should drive the main handover?",
        options: [
          {
            label: "A",
            text: "Candidate 3, because it is a rare parent-negative variant in a possible epilepsy gene.",
            isCorrect: false,
            feedback:
              "Not quite. Candidate 3 is unrelated to the known familial variant and has weaker evidence.",
          },
          {
            label: "B",
            text: "Candidate 4, because CNVs should be reviewed before targeted familial sequence variants.",
            isCorrect: false,
            feedback:
              "Not quite. Candidate 4 is not the known familial variant and has weak dosage and phenotype support.",
          },
          {
            label: "C",
            text: "Candidate 2, because it matches the exact known familial variant requested in the referral.",
            isCorrect: true,
            feedback:
              "Correct. This case is primarily about targeted follow-up of the known familial variant.",
          },
        ],
        teachingPoint:
          "Known familial variant cases should answer the specific family-variant question before expanding into unrelated discovery-style interpretation.",
      },
      {
        id: "checkpoint-2",
        title: "Checkpoint 2 — Check exact familial variant matching",
        context:
          "Candidate 2 appears to match the familial FAMFOLLOW2 variant, but the match must be checked carefully.",
        question:
          "Which check is most important before reporting the result?",
        options: [
          {
            label: "A",
            text: "Confirm that the exact gene, coordinate/build, transcript, HGVS, zygosity, and read support match the familial variant.",
            isCorrect: true,
            feedback:
              "Correct. Exact matching is essential in known familial variant follow-up.",
          },
          {
            label: "B",
            text: "Confirm only that the same gene is involved, because HGVS and transcript details are less important in family follow-up.",
            isCorrect: false,
            feedback:
              "Not quite. Same gene is not enough; the specific variant identity must be reconciled.",
          },
          {
            label: "C",
            text: "Confirm only that the proband phenotype is similar to the sister’s phenotype before checking technical details.",
            isCorrect: false,
            feedback:
              "Not quite. Phenotype matters, but the result must first match the exact familial variant.",
          },
        ],
        teachingPoint:
          "A known familial variant result depends on exact variant identity, not just broad gene or phenotype similarity.",
      },
      {
        id: "checkpoint-3",
        title: "Checkpoint 3 — Handle unrelated rare findings",
        context:
          "Candidate 3 is a rare parent-negative missense variant in a possible epilepsy gene, but it is not the known familial variant requested.",
        question:
          "How should Candidate 3 be handled?",
        options: [
          {
            label: "A",
            text: "Document it proportionately as an unrelated uncertain finding, subject to local scope and governance, but do not let it outrank Candidate 2.",
            isCorrect: true,
            feedback:
              "Correct. Candidate 3 may be noted or reviewed depending on scope, but it should not dominate the targeted familial variant follow-up.",
          },
          {
            label: "B",
            text: "Prioritise it above Candidate 2 because parent-negative rare variants are more useful than inherited familial variants.",
            isCorrect: false,
            feedback:
              "Not quite. The known familial variant is the primary referral question and has stronger established relevance.",
          },
          {
            label: "C",
            text: "Ignore it in all circumstances because findings outside the referral question can never be clinically relevant.",
            isCorrect: false,
            feedback:
              "Not quite. Scope matters, but unrelated findings may still need governance-aware handling.",
          },
        ],
        teachingPoint:
          "Scope-aware interpretation prevents unrelated findings from distracting from the known familial variant question.",
      },
      {
        id: "checkpoint-4",
        title: "Checkpoint 4 — Avoid open-ended discovery drift",
        context:
          "The genome contains several findings, but the clinical request is targeted familial variant follow-up.",
        question:
          "Why does the familial variant context matter?",
        options: [
          {
            label: "A",
            text: "It means all other findings are automatically benign and should be deleted from the case record.",
            isCorrect: false,
            feedback:
              "Not quite. Other findings may need proportionate handling, but they should not distract from the referral question.",
          },
          {
            label: "B",
            text: "It means the strongest-looking unrelated discovery variant should be reported before the familial variant.",
            isCorrect: false,
            feedback:
              "Not quite. The known familial variant is the reason for referral and should be addressed directly.",
          },
          {
            label: "C",
            text: "It changes the case from open discovery to targeted confirmation of a specific family variant.",
            isCorrect: true,
            feedback:
              "Correct. The context changes how findings should be prioritised and communicated.",
          },
        ],
        teachingPoint:
          "Clinical context and referral indication shape the interpretation workflow.",
      },
      {
        id: "checkpoint-5",
        title: "Checkpoint 5 — Final known familial variant conclusion",
        context:
          "You need to prepare a safe trainee-level conclusion for formal clinical laboratory review.",
        question:
          "Which conclusion is safest?",
        options: [
          {
            label: "A",
            text: "Report Candidate 3 first because unrelated parent-negative findings may explain additional features.",
            isCorrect: false,
            feedback:
              "Not quite. Candidate 3 is unrelated and uncertain; it should not outrank the known familial variant.",
          },
          {
            label: "B",
            text: "Confirm Candidate 2 as the key familial variant result for review, with exact matching and scope limitations documented.",
            isCorrect: true,
            feedback:
              "Correct. This directly answers the referral while preserving safe review and governance boundaries.",
          },
          {
            label: "C",
            text: "Avoid reporting Candidate 2 because inherited familial variants are less important than new variants found in the proband.",
            isCorrect: false,
            feedback:
              "Not quite. A known familial pathogenic or likely pathogenic variant can be the central result in a follow-up case.",
          },
        ],
        teachingPoint:
          "A safe familial follow-up handover answers the targeted question clearly and keeps unrelated findings proportionate.",
      },
    ],
  
    finalReflection:
      "A safe trainee-level conclusion would be that Candidate 2 is the key finding for formal clinical laboratory review because it matches the known familial FAMFOLLOW2 variant requested in the referral. The proband is heterozygous for chr6:123456789 C>T, matching the reported familial transcript and HGVS description c.1201C>T p.(Arg401Ter), with strong technical support, consistent read-level evidence, and inheritance from the known carrier father. The phenotype is compatible with the family’s known neurodevelopmental epilepsy disorder. Candidate 5 is not a disease candidate but is the central case context because the analysis is targeted familial variant follow-up rather than open-ended discovery. Candidate 3 is a plausible unrelated rare finding, but it should not outrank the known familial variant and should only be handled within local scope, consent, and governance. Candidate 4 is likely a real inherited duplication but has weak dosage and phenotype support. Candidate 1 is broad, relatively frequent, maternally inherited, and poorly specific. The safest next step is formal confirmation and reporting of the known familial variant result, with exact nomenclature and transcript/build matching documented and unrelated findings handled proportionately.",
  };