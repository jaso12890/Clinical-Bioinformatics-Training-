export const case65 = {
    id: "case-65",
    slug: "pseudogene-plus-cnv-interaction-case",
    title: "Case 65: Pseudogene plus CNV interaction",
    level: "Advanced",
    summary:
      "A guided case focused on a gene with a highly similar pseudogene, where apparent sequence and copy-number findings may be affected by gene conversion, mapping ambiguity, and dosage interpretation limits.",
  
    visualisationExampleId: null,
  
    assessmentFocus: [
      "Pseudogene interference",
      "Gene conversion awareness",
      "CNV and SNV interaction",
      "Mapping and dosage confidence",
      "Biallelic interpretation caution",
      "Safe escalation and communication",
    ],
  
    guidedTutorMode: {
      type: "static-rule-based",
      description:
        "Uses built-in hints, checkpoint feedback, model answers, and self-check criteria to support safe case reasoning.",
    },
  
    phase5Assessment: {
      candidateRanking: {
        prompt:
          "Rank the findings from strongest to weakest based on phenotype fit, pseudogene-aware technical confidence, CNV/SNV interaction, mechanism, and whether each finding should drive the final handover.",
        correctOrder: [
          "candidate-4",
          "candidate-5",
          "candidate-2",
          "candidate-3",
          "candidate-1",
        ],
        explanation:
          "Candidate 4 is the main review-worthy finding because the phenotype and gene-disease model are compatible, and there may be a compound CNV/SNV mechanism. However, pseudogene homology and possible gene conversion make the result technically limited. Candidate 5 is central because it explains why the apparent biallelic interpretation cannot be accepted without specialist review. Candidate 2 is plausible but weaker because it has less complete phenotype and mechanism support. Candidate 3 is the trap: it appears severe, but the read evidence is likely affected by pseudogene mapping. Candidate 1 is broad, inherited, relatively frequent, and poorly specific.",
      },
  
      escalationDecision: {
        prompt:
          "Choose the safest next action for the pseudogene/CNV candidate.",
        options: [
          {
            id: "escalate-specialist-review",
            label: "A",
            decision:
              "Escalate Candidate 4 for specialist pseudogene-aware review and confirmation before using it diagnostically.",
            isBest: true,
            feedback:
              "Best decision. The finding is clinically relevant, but the pseudogene and CNV interaction means it needs specialist confirmation before diagnostic wording.",
          },
          {
            id: "report-biallelic",
            label: "B",
            decision:
              "Report Candidate 4 as diagnostic biallelic disease because both a CNV and sequence variant are present in the same gene.",
            isBest: false,
            feedback:
              "Review this choice. A CNV plus sequence variant can be important, but pseudogene interference means the exact events and phase must be confirmed.",
          },
          {
            id: "reject-region",
            label: "C",
            decision:
              "Reject Candidate 4 completely because genes with pseudogenes are too unreliable for rare disease interpretation.",
            isBest: false,
            feedback:
              "Review this choice. Pseudogene regions are difficult, not automatically irrelevant. The right response is careful technical escalation.",
          },
        ],
      },
  
      writtenSummary: {
        prompt:
          "Write a short trainee-level handover summary explaining the leading finding, why it is biologically plausible, and why pseudogene/CNV interaction limits interpretation.",
        checklist: [
          "Names Candidate 4 as the main review-worthy finding.",
          "Explains the possible CNV plus sequence-variant mechanism.",
          "Mentions that the gene has a highly similar pseudogene.",
          "States that mapping, gene conversion, dosage, and breakpoint uncertainty limit confidence.",
          "Avoids calling the finding confirmed biallelic disease without confirmation.",
          "Recommends specialist review, orthogonal confirmation, or pseudogene-aware analysis.",
        ],
        modelAnswer:
          "Candidate 4 is the main review-worthy finding because PSEUDOCAP4 is a phenotype-compatible recessive neurodevelopmental-metabolic gene, and the current data suggest a possible compound mechanism involving an exon-level deletion plus a sequence variant. However, this gene has a highly similar pseudogene, and both the SNV and CNV evidence are affected by mapping ambiguity, possible gene conversion, uncertain breakpoint resolution, and dosage interpretation limits. The finding should therefore not be described as confirmed biallelic disease from the current standard pipeline output alone. Candidate 5 is the central technical limitation because it explains why pseudogene-aware review is required. Candidate 2 is plausible but weaker, Candidate 3 is a pseudogene-mapping trap, and Candidate 1 is broad, inherited, relatively frequent, and poorly specific. The safest next step is to escalate Candidate 4 for specialist review and appropriate confirmation before diagnostic wording.",
      },
    },
  
    reasoningScorecard: [
      {
        category: "Pseudogene awareness",
        maxScore: 2,
        expectation:
          "Recognises that a highly similar pseudogene can distort mapping, variant calling, and apparent consequence.",
      },
      {
        category: "CNV/SNV interaction",
        maxScore: 2,
        expectation:
          "Assesses whether the apparent deletion and sequence variant could form a true biallelic mechanism, while preserving uncertainty.",
      },
      {
        category: "Technical confidence",
        maxScore: 2,
        expectation:
          "Uses mapping quality, read placement, breakpoint evidence, dosage pattern, pseudogene warning, and caller concordance before trusting the finding.",
      },
      {
        category: "Candidate prioritisation",
        maxScore: 2,
        expectation:
          "Prioritises the biologically plausible candidate while clearly stating that standard pipeline evidence is not enough.",
      },
      {
        category: "Safe communication",
        maxScore: 2,
        expectation:
          "Communicates the result as requiring specialist confirmation rather than as confirmed biallelic disease.",
      },
    ],
  
    patient: {
      age: 6,
      sex: "Male",
    },
  
    referralReason:
      "A 6-year-old boy has been referred for rare disease genome analysis because of developmental delay, epilepsy, hypotonia, feeding difficulties, episodic vomiting during illness, mild regression after metabolic stress, and raised lactate during one admission. A possible recessive candidate has been identified in a gene with a highly similar pseudogene. The apparent finding includes both a sequence variant and an exon-level deletion, but the region is technically difficult to interpret.",
  
    testType:
      "Rare disease genome sequencing with SNV/indel, CNV, pseudogene-aware, gene-conversion, dosage, and technical-confidence review",
  
    familyStructure:
      "The proband and both biological parents have been tested. Both parents are reportedly unaffected. One apparent sequence variant is seen in the proband and mother, while the possible exon-level deletion appears inherited from the father, but both findings are affected by pseudogene and mapping limitations.",
  
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
      "Candidate gene has a highly similar pseudogene",
      "Clinical team requested review of possible recessive CNV plus SNV mechanism",
    ],
  
    phenotype: [
      "Developmental delay",
      "Epilepsy",
      "Hypotonia",
      "Feeding difficulties",
      "Episodic vomiting during illness",
      "Regression after metabolic stress",
      "Raised lactate",
      "Possible recessive metabolic presentation",
    ],
  
    familyHistory:
      "Both parents are reportedly unaffected. No known consanguinity is reported. There is no known family history of developmental delay, epilepsy, metabolic decompensation, hypotonia, feeding difficulties, raised lactate, or a similar childhood neurodevelopmental-metabolic presentation.",
  
    serviceContext: [
      "This guided case focuses on pseudogene and CNV interaction.",
      "The key issue is that a biologically plausible recessive candidate may be technically difficult because the gene has a highly similar pseudogene.",
      "The learner should not accept a standard pipeline SNV plus CNV result as confirmed biallelic disease without checking the region.",
      "The learner should also not dismiss the candidate entirely, because the phenotype and apparent mechanism are relevant.",
      "The safest conclusion should prioritise the finding for specialist review while clearly documenting mapping, gene conversion, dosage, and confirmation limitations.",
      "The final handover should separate biological plausibility from technical confidence.",
    ],
  
    candidateFindings: [
      {
        id: "candidate-1",
        label: "Candidate 1",
        gene: "BROADPSEUDO1",
        variant: "chr2:77190442 C>T",
        zygosity: "Heterozygous",
        consequence: "missense_variant",
        inheritanceSignal: "Inherited from unaffected mother",
        clinicalFit:
          "BROADPSEUDO1 has a broad neurodevelopmental association in limited reports, but the variant is inherited from the unaffected mother, relatively frequent, and does not explain the metabolic-stress features well.",
        rawEvidence: `GENE: BROADPSEUDO1
  Known disease association: broad neurodevelopmental association in limited reports
  Reported inheritance: autosomal dominant proposed
  Known mechanism: uncertain
  Gene-disease validity in local summary: limited
  
  Variant:
  chr2:77190442 C>T
  Transcript: NM_650001.2
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
  Assess whether this inherited, relatively frequent, broad-match finding should drive the case conclusion.`,
        concern:
          "This is technically real but weak. It should be reviewed and deprioritised rather than treated as the main explanation.",
      },
      {
        id: "candidate-2",
        label: "Candidate 2",
        gene: "METMISS2",
        variant: "chr10:55218401 G>A",
        zygosity: "Heterozygous",
        consequence: "missense_variant",
        inheritanceSignal: "Absent from both parents on standard genotype calls",
        clinicalFit:
          "METMISS2 has a possible autosomal dominant neurodevelopmental-metabolic association. The variant is rare and technically plausible, but the gene and exact variant evidence are less established than the main recessive candidate.",
        rawEvidence: `GENE: METMISS2
  Known disease association: possible autosomal dominant neurodevelopmental-metabolic disorder
  Reported inheritance: usually de novo or dominant in limited reports
  Known mechanism: damaging missense variants in a functional domain
  Gene-disease validity in local summary: moderate / emerging
  
  Variant:
  chr10:55218401 G>A
  Transcript: NM_650002.4
  HGVS: c.1286G>A p.(Arg429His)
  Consequence: missense_variant
  Protein domain: possible metabolic functional domain
  
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
  Hypotonia: compatible
  Episodic vomiting: variable
  Raised lactate: limited overlap
  Regression after metabolic stress: limited overlap
  
  Review question:
  Assess whether this rare missense candidate should outrank a more mechanism-matched recessive candidate affected by pseudogene limitations.`,
        concern:
          "This is plausible but less strong than Candidate 4 because the gene and variant evidence are less complete.",
      },
      {
        id: "candidate-3",
        label: "Candidate 3",
        gene: "PSEUDOCAP4 pseudogene-like region",
        variant: "chr15:44190221 G>A",
        zygosity: "Apparent homozygous alternate in standard callset",
        consequence: "stop_gained",
        inheritanceSignal: "Inconsistent with parental genotypes and regional read evidence",
        clinicalFit:
          "This appears severe in the standard annotation, but the signal overlaps a pseudogene-like region and shows mapping features suggesting the call may represent misaligned pseudogene sequence rather than a true homozygous gene variant.",
        rawEvidence: `GENE/REGION: PSEUDOCAP4 pseudogene-like paralogous segment
  Known issue: high similarity to functional PSEUDOCAP4 gene
  Region note: paralogous sequence with recurrent misalignment in local teaching summary
  
  Variant:
  chr15:44190221 G>A
  Transcript: NM_pseudo_650003.1
  HGVS: c.301G>A p.(Trp101Ter)
  Consequence: stop_gained in standard annotation
  
  VCF-style fields:
  QUAL=94
  FILTER=PseudoRegionReview
  INFO: DP=86;MQ=28;QD=1.9;SOR=3.7
  FORMAT: GT:AD:DP:GQ
  
  Proband blood: 1/1:12,74:86:42
  Mother blood: 0/1?:39,18:57:31
  Father blood: 0/1?:36,16:52:29
  
  Read-level notes:
  Many ALT-supporting reads have low mapping quality
  Several reads have equally good alignments to the functional gene and pseudogene
  ALT reads cluster in the paralogous segment
  Soft-clipping is present in multiple supporting reads
  Second caller: not detected as confident in functional gene coordinates
  Local pipeline flag: likely pseudogene-mapping artefact or representation issue
  
  Population:
  Standard population frequency summary is unreliable for this paralogous region
  No clean functional-gene variant frequency available in local summary
  
  Phenotype fit:
  A true loss-of-function event in the functional gene could be relevant
  Current evidence does not confidently localise the variant to the functional gene
  
  Review question:
  Assess whether this apparently severe variant should be accepted at face value or treated as a pseudogene-mapping trap.`,
        concern:
          "This is a trap finding. The annotation looks severe, but the technical evidence does not confidently place the variant in the functional gene.",
      },
      {
        id: "candidate-4",
        label: "Candidate 4",
        gene: "PSEUDOCAP4",
        variant: "Possible exon 3–5 deletion plus c.1286G>A p.(Arg429His)",
        zygosity: "Possible compound heterozygous configuration",
        consequence: "copy_number_loss plus missense_variant",
        inheritanceSignal:
          "Possible maternal SNV plus paternal CNV, but pseudogene interference limits confidence",
        clinicalFit:
          "PSEUDOCAP4 is associated with an autosomal recessive neurodevelopmental-metabolic disorder. The phenotype and possible CNV/SNV mechanism are plausible, but pseudogene homology and possible gene conversion complicate both dosage and sequence interpretation.",
        rawEvidence: `GENE: PSEUDOCAP4
  Known disease association: autosomal recessive neurodevelopmental-metabolic disorder
  Reported inheritance: autosomal recessive
  Known mechanism: biallelic loss-of-function or damaging variants
  Gene-disease validity in local summary: moderate / established
  
  Regional note:
  Functional PSEUDOCAP4 has a highly similar pseudogene, PSEUDOCAP4P
  Exons 3–6 share high sequence identity with the pseudogene
  Gene conversion events have been described in local teaching summary
  Short-read mapping can confuse functional gene and pseudogene sequence
  
  Sequence variant:
  chr15:44211890 G>A
  Transcript: NM_650004.5
  HGVS: c.1286G>A p.(Arg429His)
  Consequence: missense_variant
  Protein domain: conserved metabolic functional domain
  
  VCF-style fields for SNV:
  QUAL=620
  FILTER=PseudoAwareReview
  INFO: DP=74;MQ=43;QD=8.4;SOR=1.6
  FORMAT: GT:AD:DP:GQ
  
  Proband blood SNV: 0/1:39,35:74:76
  Mother blood SNV: 0/1:34,31:65:72
  Father blood SNV: 0/0:58,2:60:64
  
  SNV read-level notes:
  ALT reads seen on both forward and reverse strands
  Some reads have reduced mapping quality
  Subset of reads also align to pseudogene sequence
  No severe strand imbalance
  Second caller: detected but flagged for pseudogene-aware review
  
  Copy-number finding:
  Possible deletion involving exons 3–5 of PSEUDOCAP4
  Estimated size: 18 kb
  Copy-number state: possible heterozygous deletion
  
  CNV inheritance:
  Proband: deletion signal present
  Mother: deletion not detected
  Father: deletion signal present
  
  CNV caller summary:
  Caller 1: exon-level deletion flag
  Caller 2: partial support
  Caller 3: not detected
  Quality score: 61
  Number of affected targets/windows: 8
  
  Read-depth evidence:
  Expected normalised depth in diploid exons: ~1.00
  Proband exons 3–5 normalised depth: ~0.58
  Father exons 3–5 normalised depth: ~0.61
  Mother exons 3–5 normalised depth: ~1.02
  Nearby pseudogene-homologous windows show variable depth
  Flanking exons outside homologous region are mostly normal
  
  Breakpoint evidence:
  Split reads: absent
  Paired-end support: weak
  Breakpoint not resolved
  Deletion may overlap homologous/pseudogene-converted sequence
  
  Phase / biallelic review:
  SNV appears maternally inherited
  CNV appears paternally inherited
  This would be consistent with variants in trans if both calls are true and correctly localised
  However, pseudogene interference affects confidence in both calls
  No long-read, MLPA, PCR, or orthogonal confirmation available in current summary
  
  Population:
  SNV gnomAD AF = 0.000006 in standard summary
  CNV population frequency uncertain due to homologous region representation
  No homozygotes for the SNV in local summary
  
  Phenotype fit:
  Developmental delay: compatible
  Epilepsy: compatible
  Hypotonia: compatible
  Feeding difficulties: compatible
  Episodic vomiting during illness: compatible
  Regression after metabolic stress: compatible
  Raised lactate: compatible
  
  Review question:
  Assess whether this should be handled as a strong but technically limited recessive candidate requiring specialist confirmation.`,
        concern:
          "This is the main review-worthy candidate, but pseudogene and CNV limitations mean it should not be called confirmed biallelic disease without specialist review.",
      },
      {
        id: "candidate-5",
        label: "Candidate 5",
        gene: "Pseudogene and CNV review",
        variant: "Functional gene versus pseudogene mapping and dosage limitation",
        zygosity: "Case-level technical limitation",
        consequence: "pseudogene_cnv_interaction",
        inheritanceSignal: "Affects interpretation of Candidate 4",
        clinicalFit:
          "This is not a disease candidate. It is the central technical issue because the main candidate depends on correctly distinguishing functional-gene sequence, pseudogene sequence, dosage change, and phase.",
        rawEvidence: `CASE CONTEXT REVIEW: pseudogene plus CNV interaction
  Reason for review:
  Candidate 4 may represent a compound SNV plus exon-level deletion in a recessive gene.
  However, the gene has a highly similar pseudogene.
  
  Technical concerns:
  Functional gene and pseudogene share high sequence identity across exons 3–6
  Some reads align equally well to both loci
  Mapping quality is reduced in the homologous interval
  CNV depth may be distorted by pseudogene-derived reads
  Gene conversion can make pseudogene sequence appear within the functional gene or vice versa
  Breakpoint evidence for the exon deletion is weak
  One CNV caller does not support the deletion
  The SNV is detected but flagged for pseudogene-aware review
  
  Why the finding remains relevant:
  Phenotype strongly overlaps the recessive gene
  Apparent maternal SNV plus paternal deletion could fit a biallelic model
  The gene mechanism is biologically plausible
  The SNV and CNV are not random findings; they involve the same candidate gene
  
  Why the finding cannot be overcalled:
  Both sequence and CNV calls may be affected by pseudogene mapping
  Phase depends on both events being real and correctly localised
  Standard short-read evidence is not enough to confirm the biallelic model
  Orthogonal or specialist pseudogene-aware analysis is needed
  
  Useful review steps:
  Pseudogene-aware alignment review
  Long-read sequencing if available
  Targeted PCR or MLPA-style confirmation if appropriate
  Breakpoint confirmation
  Parental confirmation of the CNV and SNV
  Review of whether the CNV affects the functional gene, pseudogene, or both
  Formal clinical laboratory sign-off
  
  Review question:
  Assess how pseudogene/CNV interaction should shape candidate prioritisation, escalation, and final wording.`,
        concern:
          "This is the central limitation. The main candidate is biologically plausible but technically unresolved.",
      },
    ],
  
    decisionCheckpoints: [
      {
        id: "checkpoint-1",
        title: "Checkpoint 1 — Identify the main review-worthy finding",
        context:
          "Candidate 4 could represent a biologically plausible recessive CNV plus SNV mechanism, but both calls are affected by pseudogene limitations.",
        question:
          "Which finding should be prioritised for formal review?",
        options: [
          {
            label: "A",
            text: "Candidate 3, because an apparent homozygous stop-gained variant should outrank a technically complicated CNV/SNV pair.",
            isCorrect: false,
            feedback:
              "Not quite. Candidate 3 looks severe, but the evidence suggests pseudogene mapping rather than a clean functional-gene variant.",
          },
          {
            label: "B",
            text: "Candidate 2, because a cleaner rare missense call is safer than a pseudogene-affected recessive candidate.",
            isCorrect: false,
            feedback:
              "Not quite. Candidate 2 is technically cleaner, but it has weaker phenotype and mechanism support.",
          },
          {
            label: "C",
            text: "Candidate 4, because it is the strongest biological fit but needs specialist pseudogene-aware confirmation.",
            isCorrect: true,
            feedback:
              "Correct. Candidate 4 is the main candidate, but it must not be overcalled without confirmation.",
          },
        ],
        teachingPoint:
          "A technically difficult candidate can still be the best biological lead when handled with appropriate caution.",
      },
      {
        id: "checkpoint-2",
        title: "Checkpoint 2 — Avoid overcalling biallelic disease",
        context:
          "Candidate 4 appears to include a maternal SNV and paternal exon-level deletion, which could be in trans if both calls are true.",
        question:
          "What is the safest interpretation of the apparent biallelic pattern?",
        options: [
          {
            label: "A",
            text: "Confirmed biallelic disease, because the SNV and CNV appear to come from different parents.",
            isCorrect: false,
            feedback:
              "Not quite. The apparent inheritance pattern is relevant, but both calls need confirmation in this pseudogene-affected region.",
          },
          {
            label: "B",
            text: "Possible biallelic candidate, but confirmation is needed because pseudogene interference affects both sequence and dosage calls.",
            isCorrect: true,
            feedback:
              "Correct. This preserves the biological model without overstating the evidence.",
          },
          {
            label: "C",
            text: "Impossible biallelic disease, because CNVs and SNVs cannot be interpreted together in recessive genes.",
            isCorrect: false,
            feedback:
              "Not quite. CNV plus SNV can form a valid recessive mechanism, but the evidence must be reliable.",
          },
        ],
        teachingPoint:
          "A CNV plus SNV model can be valid, but only if both events are real, correctly localised, and appropriately phased.",
      },
      {
        id: "checkpoint-3",
        title: "Checkpoint 3 — Recognise the pseudogene trap",
        context:
          "Candidate 3 appears to be a severe homozygous stop-gained variant, but many reads map poorly and align to both the functional gene and pseudogene.",
        question:
          "How should Candidate 3 be handled?",
        options: [
          {
            label: "A",
            text: "Treat it as a pseudogene-mapping trap unless specialist review confirms it lies in the functional gene.",
            isCorrect: true,
            feedback:
              "Correct. Severe-looking annotation does not overcome poor localisation to the functional gene.",
          },
          {
            label: "B",
            text: "Report it as diagnostic because stop-gained consequences should be prioritised over mapping warnings.",
            isCorrect: false,
            feedback:
              "Not quite. Predicted consequence is not meaningful if the variant may not be correctly mapped.",
          },
          {
            label: "C",
            text: "Use it as proof that the region is impossible to interpret and reject Candidate 4 as well.",
            isCorrect: false,
            feedback:
              "Not quite. Candidate 3 may be a trap, but Candidate 4 remains worth specialist review.",
          },
        ],
        teachingPoint:
          "In pseudogene regions, the apparent consequence matters only after the locus and variant representation are trusted.",
      },
      {
        id: "checkpoint-4",
        title: "Checkpoint 4 — Decide what follow-up is needed",
        context:
          "The main candidate depends on distinguishing functional gene sequence from pseudogene sequence and confirming an exon-level deletion.",
        question:
          "Which follow-up best addresses the limitation?",
        options: [
          {
            label: "A",
            text: "Request only a phenotype update, because the technical result is already enough if the clinical fit is strong.",
            isCorrect: false,
            feedback:
              "Not quite. Phenotype helps, but the main unresolved issue is technical confirmation of the SNV and CNV.",
          },
          {
            label: "B",
            text: "Ignore the candidate until another unrelated gene is found because pseudogene regions are not reviewable.",
            isCorrect: false,
            feedback:
              "Not quite. Difficult regions can be reviewed using specialist methods or orthogonal confirmation.",
          },
          {
            label: "C",
            text: "Request pseudogene-aware review, targeted confirmation, CNV breakpoint/dosage confirmation, or long-read analysis if available.",
            isCorrect: true,
            feedback:
              "Correct. The follow-up should directly address the pseudogene and dosage limitations.",
          },
        ],
        teachingPoint:
          "The best follow-up should match the technical limitation that prevents safe interpretation.",
      },
      {
        id: "checkpoint-5",
        title: "Checkpoint 5 — Final pseudogene/CNV conclusion",
        context:
          "You need to prepare a safe trainee-level conclusion for formal clinical laboratory review.",
        question:
          "Which conclusion is safest?",
        options: [
          {
            label: "A",
            text: "Report Candidate 4 as confirmed recessive disease because the apparent SNV and CNV are inherited from different parents.",
            isCorrect: false,
            feedback:
              "Not quite. Apparent trans inheritance is not enough when both calls are affected by pseudogene limitations.",
          },
          {
            label: "B",
            text: "Prioritise Candidate 4 for specialist confirmation and state that pseudogene/CNV interaction prevents diagnostic wording for now.",
            isCorrect: true,
            feedback:
              "Correct. This conclusion is clinically useful and technically safe.",
          },
          {
            label: "C",
            text: "Prioritise Candidate 3 instead because a stop-gained variant is more severe than a missense plus CNV model.",
            isCorrect: false,
            feedback:
              "Not quite. Candidate 3’s severity is not reliable because the call may be mislocalised to a pseudogene region.",
          },
        ],
        teachingPoint:
          "Safe handover can identify a strong candidate while clearly explaining why confirmation is required.",
      },
    ],
  
    finalReflection:
      "A safe trainee-level conclusion would be that Candidate 4 is the main review-worthy finding, but it should not be described as confirmed biallelic disease from the current evidence alone. PSEUDOCAP4 is a phenotype-compatible autosomal recessive neurodevelopmental-metabolic gene, and the apparent maternal SNV plus paternal exon-level deletion could fit the patient’s developmental delay, epilepsy, hypotonia, episodic vomiting, metabolic-stress regression, and raised lactate. However, the gene has a highly similar pseudogene, and both the sequence variant and CNV are affected by mapping ambiguity, possible gene conversion, variable depth in homologous exons, weak breakpoint evidence, and incomplete caller concordance. Candidate 5 is not a disease candidate but is the central technical limitation controlling interpretation. Candidate 3 is a trap finding because it appears severe in standard annotation but is likely affected by pseudogene mapping and poor localisation to the functional gene. Candidate 2 is plausible but less strong, and Candidate 1 is inherited, relatively frequent, and poorly specific. The safest next step is to prioritise Candidate 4 for specialist pseudogene-aware review, orthogonal or targeted confirmation of the SNV and CNV, phase confirmation if possible, and formal clinical laboratory sign-off before diagnostic wording.",
  };