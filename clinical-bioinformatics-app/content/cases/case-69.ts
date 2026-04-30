export const case69 = {
    id: "case-69",
    slug: "family-segregation-update-case",
    title: "Case 69: Family segregation update",
    level: "Advanced",
    summary:
      "A guided case focused on how additional affected and unaffected relatives can change variant priority during family segregation review.",
  
    visualisationExampleId: null,
  
    assessmentFocus: [
      "Family segregation update",
      "Affected and unaffected relative review",
      "Variant reprioritisation",
      "Reduced penetrance and variable expressivity",
      "Inheritance evidence",
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
          "Rank the findings from strongest to weakest based on the updated segregation evidence, phenotype fit, gene mechanism, population evidence, and technical confidence.",
        correctOrder: [
          "candidate-4",
          "candidate-5",
          "candidate-3",
          "candidate-2",
          "candidate-1",
        ],
        explanation:
          "Candidate 4 is strongest because the updated family segregation data support the variant being present in multiple affected relatives and absent from tested unaffected relatives, while the gene, phenotype, mechanism, rarity, and technical confidence align. Candidate 5 is central because it explains how the segregation update changes the interpretation. Candidate 3 remains plausible but has weaker gene and variant evidence. Candidate 2 has weakened because the variant is present in an unaffected older relative and does not segregate cleanly with the phenotype. Candidate 1 is broad, inherited, relatively frequent, and poorly specific.",
      },
  
      escalationDecision: {
        prompt:
          "Choose the safest next action after the family segregation update.",
        options: [
          {
            id: "escalate-supported-segregation",
            label: "A",
            decision:
              "Escalate Candidate 4 for formal review, documenting the updated segregation evidence and remaining limitations.",
            isBest: true,
            feedback:
              "Best decision. The new family data strengthen Candidate 4, but the interpretation still needs formal review and careful wording.",
          },
          {
            id: "ignore-segregation-update",
            label: "B",
            decision:
              "Ignore the new family segregation information because the original trio analysis is more reliable than later family testing.",
            isBest: false,
            feedback:
              "Review this choice. Additional affected and unaffected relatives can materially change variant prioritisation.",
          },
          {
            id: "report-without-caveat",
            label: "C",
            decision:
              "Report Candidate 4 as diagnostic immediately because segregation evidence always proves causality.",
            isBest: false,
            feedback:
              "Review this choice. Segregation can strongly support interpretation, but it should still be weighed with phenotype, gene mechanism, variant evidence, and formal review.",
          },
        ],
      },
  
      writtenSummary: {
        prompt:
          "Write a short trainee-level handover summary explaining how the family segregation update changes candidate priority.",
        checklist: [
          "Names Candidate 4 as the strongest current finding.",
          "Explains which relatives support the segregation pattern.",
          "Mentions affected relatives carrying the variant and tested unaffected relatives not carrying it.",
          "Uses phenotype fit, gene mechanism, rarity, and technical confidence alongside segregation.",
          "Explains why Candidate 2 has weakened after the family update.",
          "Avoids saying segregation alone proves the diagnosis without formal review.",
        ],
        modelAnswer:
          "Candidate 4 is now the strongest current finding for formal review because the updated segregation data support the variant tracking with the family phenotype. The variant is present in the proband, an affected sibling, and an affected maternal uncle, and it is absent from two tested unaffected relatives. This strengthens the case when combined with the phenotype fit, rarity, technical confidence, and the gene’s autosomal dominant neurodevelopmental-epilepsy mechanism. Candidate 5 is the central segregation-review issue because it explains how the additional relatives changed the ranking. Candidate 3 remains plausible but has less complete gene and variant support. Candidate 2 has weakened because it is present in an unaffected older relative and no longer segregates convincingly with the phenotype. Candidate 1 is broad, inherited, relatively frequent, and poorly specific. The safest next step is to escalate Candidate 4 for formal clinical laboratory review, documenting the segregation evidence and any limitations such as penetrance, variable expressivity, phenotyping quality, and family-relationship confirmation.",
      },
    },
  
    reasoningScorecard: [
      {
        category: "Segregation awareness",
        maxScore: 2,
        expectation:
          "Recognises that additional affected and unaffected relatives can strengthen or weaken candidate interpretation.",
      },
      {
        category: "Family evidence quality",
        maxScore: 2,
        expectation:
          "Considers whether relatives are accurately phenotyped, correctly related, and tested for the same variant.",
      },
      {
        category: "Candidate prioritisation",
        maxScore: 2,
        expectation:
          "Updates candidate ranking based on current segregation evidence rather than relying only on the original trio result.",
      },
      {
        category: "Evidence integration",
        maxScore: 2,
        expectation:
          "Combines segregation with phenotype fit, mechanism, rarity, technical confidence, and gene-disease validity.",
      },
      {
        category: "Safe communication",
        maxScore: 2,
        expectation:
          "Communicates segregation as supportive evidence while avoiding overstatement without formal review and sign-off.",
      },
    ],
  
    patient: {
      age: 10,
      sex: "Female",
    },
  
    referralReason:
      "A 10-year-old girl has been referred for family segregation update review after previous rare disease genome sequencing identified several uncertain candidate findings. The proband has global developmental delay, severe speech delay, epilepsy, hypotonia, autistic features, feeding difficulties, and mild dysmorphic features. Since the original trio analysis, additional affected and unaffected relatives have been tested, changing the strength of the candidate evidence.",
  
    testType:
      "Rare disease genome reanalysis with family segregation update, SNV/indel, CNV, inheritance, phenotype, and technical-confidence review",
  
    familyStructure:
      "The proband and both biological parents were tested in the original trio. Additional targeted testing has now been performed in an affected younger brother, an affected maternal uncle, an unaffected older sister, and an unaffected maternal aunt. The family update changes how the candidate findings should be prioritised.",
  
    history: [
      "Global developmental delay noted in infancy",
      "Severe expressive speech delay",
      "Epilepsy beginning at age 4",
      "Generalised hypotonia",
      "Autistic features reported by the clinical team",
      "Feeding difficulties in early childhood",
      "Mild dysmorphic features noted by clinical genetics",
      "No previous confirmed molecular diagnosis",
      "Original trio analysis found several uncertain findings",
      "Affected younger brother has a similar neurodevelopmental-epilepsy phenotype",
      "Maternal uncle has learning disability and childhood-onset seizures",
      "Unaffected older sister and maternal aunt have now been tested",
    ],
  
    phenotype: [
      "Global developmental delay",
      "Severe speech delay",
      "Epilepsy",
      "Hypotonia",
      "Autistic features",
      "Feeding difficulties",
      "Mild dysmorphic features",
      "Family segregation update",
    ],
  
    familyHistory:
      "The affected younger brother has developmental delay, epilepsy, and speech delay. The maternal uncle has learning disability and a history of childhood-onset seizures. The older sister and maternal aunt are reported unaffected after clinical review. No known consanguinity is reported.",
  
    serviceContext: [
      "This guided case focuses on family segregation update.",
      "The key issue is that additional relatives can change how strong or weak a candidate appears.",
      "The learner should not treat the original trio ranking as fixed if new segregation evidence is available.",
      "The learner should also not treat segregation alone as proof without checking phenotype quality, relationship, variant identity, and gene mechanism.",
      "The safest conclusion should explain why one candidate has strengthened and another has weakened after the family update.",
      "The final handover should document the segregation pattern in a traceable and cautious way.",
    ],
  
    candidateFindings: [
      {
        id: "candidate-1",
        label: "Candidate 1",
        gene: "BROADSEG1",
        variant: "chr2:77190442 C>T",
        zygosity: "Heterozygous",
        consequence: "missense_variant",
        inheritanceSignal: "Inherited from unaffected father",
        clinicalFit:
          "BROADSEG1 has a broad neurodevelopmental association in limited reports, but the variant is inherited from the unaffected father, relatively frequent, and does not track with the wider affected maternal-side relatives.",
        rawEvidence: `GENE: BROADSEG1
  Known disease association: broad neurodevelopmental association in limited reports
  Reported inheritance: autosomal dominant proposed
  Known mechanism: uncertain
  Gene-disease validity in local summary: limited
  
  Variant:
  chr2:77190442 C>T
  Transcript: NM_690001.2
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
  
  Additional family testing:
  Affected younger brother: variant absent
  Affected maternal uncle: variant absent
  Unaffected older sister: variant absent
  Unaffected maternal aunt: variant absent
  
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
  Autistic features: broad possible overlap
  Feeding difficulties: not a core feature
  
  Review question:
  Assess whether this broad inherited finding remains plausible after the wider family segregation update.`,
        concern:
          "This is technically real but weak. It does not track with the affected relatives and should be deprioritised.",
      },
      {
        id: "candidate-2",
        label: "Candidate 2",
        gene: "OLDSEG2",
        variant: "chr8:44198221 G>A",
        zygosity: "Heterozygous",
        consequence: "missense_variant",
        inheritanceSignal:
          "Originally considered parent-negative, but later found in an unaffected older sister",
        clinicalFit:
          "OLDSEG2 was originally considered plausible because it was rare and appeared absent from the parents. Updated family testing shows the variant is also present in an unaffected older sister, reducing confidence for a highly penetrant dominant explanation.",
        rawEvidence: `GENE: OLDSEG2
  Known disease association: possible autosomal dominant neurodevelopmental epilepsy disorder
  Reported inheritance: usually de novo in limited reports
  Known mechanism: damaging missense variants proposed
  Gene-disease validity in local summary: moderate / emerging
  
  Variant:
  chr8:44198221 G>A
  Transcript: NM_690002.4
  HGVS: c.1286G>A p.(Arg429His)
  Consequence: missense_variant
  Protein domain: possible neurodevelopmental functional domain
  
  VCF-style fields:
  QUAL=816
  FILTER=PASS
  INFO: DP=52;MQ=60;QD=15.7;SOR=0.78
  FORMAT: GT:AD:DP:GQ
  
  Original trio data:
  Proband blood: 0/1:26,26:52:99
  Mother blood: 0/0:44,0:44:99
  Father blood: 0/0:45,0:45:99
  
  Additional family testing:
  Affected younger brother: variant absent
  Affected maternal uncle: variant absent
  Unaffected older sister: variant present
  Unaffected maternal aunt: variant absent
  
  Follow-up technical review:
  Targeted testing confirmed the older sister carries the same variant
  Relationship checks for siblings are consistent in local summary
  No clear sample swap flag in the family update
  
  Population:
  gnomAD AF = 0.00005
  gnomAD allele count = 18
  No homozygotes observed in local summary
  
  Phenotype fit:
  Developmental delay: compatible
  Severe speech delay: compatible
  Epilepsy: compatible
  Hypotonia: partial overlap
  Autistic features: variable
  Feeding difficulties: weak overlap
  
  Segregation update:
  Variant does not track with affected younger brother
  Variant is present in unaffected older sister
  This weakens a highly penetrant dominant explanation
  
  Review question:
  Assess how the unaffected older sister and affected sibling results change the priority of this candidate.`,
        concern:
          "This has weakened after segregation update. It should not remain the leading candidate unless reduced penetrance or another explanation is strongly supported.",
      },
      {
        id: "candidate-3",
        label: "Candidate 3",
        gene: "MISSSEG3",
        variant: "chr10:55218401 G>A",
        zygosity: "Heterozygous",
        consequence: "missense_variant",
        inheritanceSignal: "Present in proband and affected brother; maternal uncle not tested for this assay",
        clinicalFit:
          "MISSSEG3 has a possible neurodevelopmental association. The variant is rare and found in the proband and affected brother, but the gene and variant evidence are less established and segregation data are incomplete.",
        rawEvidence: `GENE: MISSSEG3
  Known disease association: possible autosomal dominant neurodevelopmental disorder
  Reported inheritance: dominant in limited reports
  Known mechanism: uncertain / possible damaging missense
  Gene-disease validity in local summary: moderate / emerging
  
  Variant:
  chr10:55218401 G>A
  Transcript: NM_690003.4
  HGVS: c.1286G>A p.(Arg429His)
  Consequence: missense_variant
  Protein domain: possible functional domain
  
  VCF-style fields:
  QUAL=824
  FILTER=PASS
  INFO: DP=54;MQ=60;QD=15.3;SOR=0.82
  FORMAT: GT:AD:DP:GQ
  
  Original trio data:
  Proband blood: 0/1:27,27:54:99
  Mother blood: 0/1:24,24:48:99
  Father blood: 0/0:45,0:45:99
  
  Additional family testing:
  Affected younger brother: variant present
  Affected maternal uncle: not tested for this variant because sample failed targeted assay
  Unaffected older sister: variant absent
  Unaffected maternal aunt: not available for this assay
  
  Read-level notes:
  ALT reads seen on both forward and reverse strands
  ALT reads distributed across read positions
  High mapping quality
  No local low-complexity warning
  Second caller: detected
  
  Population:
  gnomAD AF = 0.000008
  gnomAD allele count = 3
  No homozygotes observed in local summary
  
  Phenotype fit:
  Developmental delay: compatible
  Severe speech delay: compatible
  Epilepsy: compatible
  Hypotonia: partial overlap
  Autistic features: variable
  Feeding difficulties: weak overlap
  
  Segregation update:
  Proband and affected brother both carry the variant
  Unaffected older sister does not carry the variant
  Maternal uncle status remains unknown
  Maternal inheritance could fit variable expressivity or reduced penetrance if mother is subtly affected, but mother is reported unaffected
  
  Review question:
  Assess whether this candidate is supported by some segregation evidence but remains weaker than the best-supported family candidate.`,
        concern:
          "This is plausible and has some supportive segregation, but the gene evidence and family data are less complete than Candidate 4.",
      },
      {
        id: "candidate-4",
        label: "Candidate 4",
        gene: "SEGREGATE4",
        variant: "chr12:66190442 G>A",
        zygosity: "Heterozygous",
        consequence: "splice_donor_variant",
        inheritanceSignal:
          "Present in affected relatives and absent from tested unaffected relatives",
        clinicalFit:
          "SEGREGATE4 is associated with an autosomal dominant neurodevelopmental epilepsy disorder. Updated family testing shows the variant in the proband, affected brother, and affected maternal uncle, and absent from tested unaffected relatives. The gene, mechanism, rarity, phenotype, and technical evidence align.",
        rawEvidence: `GENE: SEGREGATE4
  Known disease association: autosomal dominant neurodevelopmental epilepsy disorder
  Reported inheritance: autosomal dominant with variable expressivity
  Known mechanism: haploinsufficiency / loss-of-function
  Gene-disease validity in local summary: established / moderate
  
  Variant:
  chr12:66190442 G>A
  Transcript: NM_690004.5
  HGVS: c.744+1G>A
  Consequence: splice_donor_variant
  Splice position: canonical +1 donor site
  Transcript note: affects clinically preferred transcript in local summary
  
  VCF-style fields:
  QUAL=966
  FILTER=PASS
  INFO: DP=58;MQ=60;QD=16.7;SOR=0.72
  FORMAT: GT:AD:DP:GQ
  
  Original trio data:
  Proband blood: 0/1:29,29:58:99
  Mother blood: 0/1:25,25:50:99
  Father blood: 0/0:46,0:46:99
  
  Additional family testing:
  Affected younger brother: variant present
  Affected maternal uncle: variant present
  Unaffected older sister: variant absent
  Unaffected maternal aunt: variant absent
  
  Read-level notes:
  ALT reads seen on both forward and reverse strands
  ALT reads distributed across read positions
  High base quality at variant position
  High mapping quality for ALT-supporting reads
  No local low-complexity warning
  No pseudogene or segmental duplication warning
  No concerning soft-clipping
  Second caller: detected
  
  Family phenotype update:
  Proband: developmental delay, severe speech delay, epilepsy, hypotonia, autistic features, feeding difficulties
  Affected younger brother: developmental delay, speech delay, epilepsy
  Affected maternal uncle: learning disability and childhood-onset seizures
  Mother: variant carrier, reported mild school support history after updated clinical review
  Older sister: unaffected and variant absent
  Maternal aunt: unaffected and variant absent
  
  Population:
  gnomAD AF = not observed
  gnomAD allele count = 0
  
  Constraint:
  LOEUF = 0.18
  pLI = 0.98
  
  ClinVar-style summary:
  No exact matching variant record found in local summary
  Other canonical splice and truncating variants in SEGREGATE4 have been submitted as pathogenic/likely pathogenic in affected individuals
  
  Segregation interpretation:
  Variant is present in multiple affected relatives
  Variant is absent from tested unaffected relatives
  Maternal mild learning history may support variable expressivity rather than true unaffected carrier status
  The family update strengthens this candidate, but formal segregation review is still required
  
  Review question:
  Assess whether the updated family data strengthen this candidate enough to prioritise it for formal review.`,
        concern:
          "This is the strongest current candidate after the family update. It should be prioritised for formal review with the segregation evidence documented carefully.",
      },
      {
        id: "candidate-5",
        label: "Candidate 5",
        gene: "Family segregation review",
        variant: "Additional affected and unaffected relatives change candidate priority",
        zygosity: "Case-level interpretation issue",
        consequence: "segregation_update",
        inheritanceSignal: "Affects interpretation of multiple candidates",
        clinicalFit:
          "This is not a disease candidate. It is the central interpretation issue because the additional family data strengthen Candidate 4 and weaken Candidate 2.",
        rawEvidence: `CASE CONTEXT REVIEW: family segregation update
  Reason for review:
  Original trio analysis identified several uncertain findings.
  Additional affected and unaffected relatives have now been tested.
  The new information changes candidate priority.
  
  Relatives tested:
  Affected younger brother
  Affected maternal uncle
  Unaffected older sister
  Unaffected maternal aunt
  
  Candidate 4 update:
  Present in proband
  Present in affected younger brother
  Present in affected maternal uncle
  Absent from unaffected older sister
  Absent from unaffected maternal aunt
  Mother carries variant and now has possible mild learning history on updated review
  Pattern supports autosomal dominant inheritance with variable expressivity
  
  Candidate 2 update:
  Present in proband
  Absent from affected younger brother
  Absent from affected maternal uncle
  Present in unaffected older sister
  Pattern weakens a highly penetrant dominant interpretation
  
  Candidate 3 update:
  Present in proband and affected younger brother
  Absent from unaffected older sister
  Maternal uncle status unknown
  Gene and variant evidence remain less complete
  
  Important principle:
  Segregation evidence is supportive, not magic proof.
  It depends on accurate phenotype assignment, correct family relationships, correct variant testing, penetrance, and disease model.
  Additional relatives can strengthen or weaken a candidate.
  Final interpretation still requires formal review.
  
  Review question:
  Assess how segregation should change candidate ranking and final wording.`,
        concern:
          "This is the central case context. The handover should explain how the family update changes the evidence rather than simply listing the new relatives.",
      },
    ],
  
    decisionCheckpoints: [
      {
        id: "checkpoint-1",
        title: "Checkpoint 1 — Identify the candidate strengthened by segregation",
        context:
          "Candidate 4 is present in the proband, affected brother, and affected maternal uncle, and absent from tested unaffected relatives.",
        question:
          "Which finding should now be prioritised for formal review?",
        options: [
          {
            label: "A",
            text: "Candidate 2, because it was originally considered parent-negative and should remain the main candidate.",
            isCorrect: false,
            feedback:
              "Not quite. Candidate 2 has weakened after updated family testing.",
          },
          {
            label: "B",
            text: "Candidate 3, because it is present in the proband and affected brother, even though the maternal uncle result is unavailable.",
            isCorrect: false,
            feedback:
              "Not quite. Candidate 3 is plausible, but Candidate 4 has stronger and more complete segregation support.",
          },
          {
            label: "C",
            text: "Candidate 4, because the updated affected and unaffected relative testing supports the variant tracking with the phenotype.",
            isCorrect: true,
            feedback:
              "Correct. Candidate 4 is now the strongest candidate after the segregation update.",
          },
        ],
        teachingPoint:
          "Segregation evidence can materially change which candidate should lead the review.",
      },
      {
        id: "checkpoint-2",
        title: "Checkpoint 2 — Interpret the weakened candidate",
        context:
          "Candidate 2 is present in an unaffected older sister and absent from the affected younger brother.",
        question:
          "How should Candidate 2 be handled after the family update?",
        options: [
          {
            label: "A",
            text: "Keep it as the leading candidate because the original trio result is more important than later family testing.",
            isCorrect: false,
            feedback:
              "Not quite. Reliable later family testing can change the interpretation.",
          },
          {
            label: "B",
            text: "Deprioritise it because the segregation pattern no longer supports it as a strong explanation.",
            isCorrect: true,
            feedback:
              "Correct. The new family information weakens Candidate 2.",
          },
          {
            label: "C",
            text: "Report it as diagnostic because unaffected relatives can always be explained by reduced penetrance.",
            isCorrect: false,
            feedback:
              "Not quite. Reduced penetrance can be considered, but it should not be used to ignore poor segregation without evidence.",
          },
        ],
        teachingPoint:
          "Reduced penetrance should be considered carefully, not used automatically to rescue weak segregation.",
      },
      {
        id: "checkpoint-3",
        title: "Checkpoint 3 — Use segregation proportionately",
        context:
          "Candidate 4 now has supportive family data, but segregation evidence still needs careful review.",
        question:
          "Which statement is safest?",
        options: [
          {
            label: "A",
            text: "Segregation supports Candidate 4, but it should be integrated with phenotype, mechanism, rarity, technical quality, and formal review.",
            isCorrect: true,
            feedback:
              "Correct. Segregation is strong supportive evidence, but it is not interpreted in isolation.",
          },
          {
            label: "B",
            text: "Segregation proves Candidate 4 is diagnostic regardless of gene mechanism or variant consequence.",
            isCorrect: false,
            feedback:
              "Not quite. Segregation should be weighed with the rest of the evidence.",
          },
          {
            label: "C",
            text: "Segregation should be ignored because only proband-level variant evidence matters in rare disease analysis.",
            isCorrect: false,
            feedback:
              "Not quite. Family information can be highly informative when collected and interpreted carefully.",
          },
        ],
        teachingPoint:
          "Good segregation reasoning strengthens the full evidence picture rather than replacing it.",
      },
      {
        id: "checkpoint-4",
        title: "Checkpoint 4 — Check family evidence quality",
        context:
          "Additional relatives have been tested, but family evidence must still be assessed for quality.",
        question:
          "Which check is most important before relying heavily on the segregation update?",
        options: [
          {
            label: "A",
            text: "Only whether the relatives share the same surname, because that confirms family relationship.",
            isCorrect: false,
            feedback:
              "Not quite. Relationship and sample identity need more reliable evidence than surname alone.",
          },
          {
            label: "B",
            text: "Only whether the variant is rare, because rarity makes family relationship checks unnecessary.",
            isCorrect: false,
            feedback:
              "Not quite. Rarity does not replace accurate family and sample checks.",
          },
          {
            label: "C",
            text: "Confirm phenotype status, family relationships, sample identity, exact variant identity, and testing quality.",
            isCorrect: true,
            feedback:
              "Correct. Segregation evidence is only as reliable as the family, phenotype, and testing information behind it.",
          },
        ],
        teachingPoint:
          "Segregation evidence depends on accurate clinical and technical context.",
      },
      {
        id: "checkpoint-5",
        title: "Checkpoint 5 — Final segregation update conclusion",
        context:
          "You need to prepare a safe trainee-level conclusion for formal clinical laboratory review.",
        question:
          "Which conclusion is safest?",
        options: [
          {
            label: "A",
            text: "Report Candidate 4 as diagnostic immediately because it is present in affected relatives.",
            isCorrect: false,
            feedback:
              "Not quite. The segregation is supportive, but formal review and cautious wording remain needed.",
          },
          {
            label: "B",
            text: "Prioritise Candidate 4 for formal review, document the supportive segregation, and explain why Candidate 2 has weakened.",
            isCorrect: true,
            feedback:
              "Correct. This conclusion is updated, traceable, and proportionate.",
          },
          {
            label: "C",
            text: "Avoid using segregation because family testing can make cases too complicated.",
            isCorrect: false,
            feedback:
              "Not quite. Segregation can clarify cases when handled carefully.",
          },
        ],
        teachingPoint:
          "Safe family-update handover explains both strengthened and weakened candidates.",
      },
    ],
  
    finalReflection:
      "A safe trainee-level conclusion would be that Candidate 4 is now the strongest current finding for formal clinical laboratory review. The updated family segregation data strengthen the candidate because the SEGREGATE4 splice donor variant is present in the proband, affected younger brother, and affected maternal uncle, and absent from the tested unaffected older sister and maternal aunt. The mother carries the variant and has a possible mild learning history on updated review, which may fit variable expressivity. This segregation pattern is supportive when combined with the gene’s autosomal dominant neurodevelopmental-epilepsy association, the loss-of-function mechanism, population absence, strong technical evidence, and the phenotype fit. Candidate 5 is not a disease candidate but is the central interpretation issue because it explains how the family update changes the ranking. Candidate 3 remains plausible but has less complete segregation and weaker gene evidence. Candidate 2 has weakened because it is present in an unaffected older sister and absent from an affected sibling, making it less convincing as a highly penetrant dominant explanation. Candidate 1 is broad, inherited, relatively frequent, and poorly specific. The safest next step is to prioritise Candidate 4 for formal review, document the segregation evidence carefully, check family relationships and phenotype status, and preserve clinical laboratory classification and sign-off boundaries.",
  };