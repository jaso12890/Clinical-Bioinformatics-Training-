export const case47 = {
  id: "case-47",
  slug: "pipeline-version-change-control-case",
  title: "Case 47: Pipeline version and change-control issue",
  level: "Advanced",
  summary:
    "A service-governance case focused on recognising when candidate interpretation should pause because a pipeline/version discrepancy must be resolved first.",

  visualisationExampleId: null,

  assessmentFocus: [
    "Pipeline version discrepancy",
    "Change-control reasoning",
    "Validated versus unvalidated workflow",
    "Data provenance and checksum review",
    "Reproducibility before interpretation",
    "CNV caller normalisation/batch effects",
    "Separating candidate interest from reportability",
    "Safe governance-focused escalation",
  ],

  guidedTutorMode: {
    type: "static-rule-based",
    description:
      "Uses built-in hints, checkpoint feedback, model answers, and self-check criteria to support safe reasoning around pipeline governance, validation status, and when interpretation should pause.",
  },

  phase5Assessment: {
    candidateRanking: {
      prompt:
        "Rank the findings by how they should be handled in a safe clinical bioinformatics workflow, recognising that governance and reliability come before candidate interpretation.",
      correctOrder: [
        "pause-interpretation-until-change-control-resolved",
        "candidate-2-if-confirmed-strong-but-currently-discrepant",
        "candidate-3-unresolved-low-confidence-cnv-discrepancy",
        "candidate-1-stable-across-versions-but-clinically-weak",
      ],
      explanation:
        "The safest first action is not to report or prioritise a candidate, but to pause interpretation until the pipeline/version, data provenance, validation status, and reproducibility issues are resolved. Candidate 2 would be biologically strong if confirmed, but it appears only in an unvalidated updated rerun and conflicts with the validated pipeline output. Candidate 3 is also pipeline-discrepant and low-confidence, with possible batch or normalisation effects. Candidate 1 is stable across versions, but it remains clinically weak and does not explain the discrepancy.",
    },

    governanceDecision: {
      prompt:
        "Choose the safest service action when a compelling candidate appears only in an unvalidated updated pipeline rerun.",
      options: [
        {
          id: "pause-and-escalate-change-control",
          label: "A",
          decision:
            "Pause clinical interpretation of the discrepant calls and escalate for pipeline validation, data provenance, reproducibility, and change-control review.",
          isBest: true,
          feedback:
            "Best decision. A clinically tempting call should not be interpreted until the analytical output is trusted and the workflow discrepancy is resolved.",
        },
        {
          id: "report-strong-looking-candidate",
          label: "B",
          decision:
            "Report the strongest-looking updated candidate because its gene, consequence, and phenotype fit are compelling.",
          isBest: false,
          feedback:
            "Review this choice. Biological plausibility does not override unresolved workflow reliability, validation, and provenance concerns.",
        },
        {
          id: "ignore-updated-output-forever",
          label: "C",
          decision:
            "Ignore the updated output permanently because it was not produced by the original validated workflow.",
          isBest: false,
          feedback:
            "Review this choice. A new pipeline call may be real, but it must be investigated through controlled validation and reconciliation rather than ignored or reported prematurely.",
        },
      ],
    },

    writtenSummary: {
      prompt:
        "Write a safe service-governance summary explaining why candidate interpretation should pause before clinical prioritisation.",
      checklist: [
        "States that discrepant updated calls should not be clinically interpreted yet.",
        "Explains that Candidate 2 would be strong if confirmed but is currently unresolved because it appears only in an unvalidated rerun.",
        "Mentions the key discrepancy evidence: checksum differences, read group differences, reference/resource changes, alignment/caller changes, or absence from the validated output.",
        "Explains that Candidate 3 is a low-confidence CNV call from an updated CNV model and may reflect batch or normalisation effects.",
        "Explains that Candidate 1 is stable across versions but remains clinically weak.",
        "Uses change-control language rather than variant-classification language as the main conclusion.",
        "Avoids reporting Candidate 2 or Candidate 3 as clinical findings from the current evidence.",
        "States that validation, provenance, reproducibility, and approved confirmation/review pathway are required before interpretation.",
        "Keeps patient safety and analytical reliability central.",
        "Uses proportionate wording and avoids final sign-out language.",
      ],
      modelAnswer:
        "No clinical interpretation should be made from the discrepant updated pipeline calls until the pipeline and data provenance issue is resolved. Candidate 2 would be a strong phenotype-compatible splice donor candidate if confirmed, but it appears only in an unvalidated updated rerun and is absent from the original validated pipeline output. The discrepancy includes differences in file checksum, read group identifiers, reference resources, and alignment/calling workflow, so this is an analytical reliability issue before it is a variant interpretation issue. Candidate 3 is a low-confidence CNV call generated only by an updated CNV model and may reflect batch or normalisation effects. Candidate 1 is stable across versions but remains weak because of inheritance, population frequency, and limited gene-disease evidence. The safest next step is to pause interpretation of the discrepant calls, escalate through the appropriate validation/change-control pathway, confirm data provenance and reproducibility, and return to candidate prioritisation only once the output is trusted.",
    },
  },

  reasoningScorecard: [
    {
      category: "Pipeline governance",
      maxScore: 2,
      expectation:
        "Recognises that unresolved pipeline/version discrepancies must be addressed before clinical interpretation.",
    },
    {
      category: "Validation status",
      maxScore: 2,
      expectation:
        "Distinguishes validated clinical pipeline output from unvalidated beta rerun output.",
    },
    {
      category: "Data provenance",
      maxScore: 2,
      expectation:
        "Identifies checksum, read group, BAM, reference resource, and workflow differences as reliability concerns.",
    },
    {
      category: "Candidate handling",
      maxScore: 2,
      expectation:
        "Separates biological plausibility from current reportability for Candidate 2 and Candidate 3.",
    },
    {
      category: "Service-ready conclusion",
      maxScore: 2,
      expectation:
        "Provides a safe change-control conclusion that pauses interpretation and escalates through the correct pathway.",
    },
  ],

  patient: {
    age: 6,
    sex: "Female",
  },

  referralReason:
    "A 6-year-old girl has been referred for rare disease genome analysis because of developmental delay, severe speech delay, epilepsy, hypotonia, and mild dysmorphic features. A new pipeline rerun has produced candidate findings that were not present in the validated original analysis.",

  testType:
    "Rare disease trio genome sequencing with SNV/indel and CNV analysis; discrepancy noted between validated pipeline output and unvalidated updated pipeline rerun",

  familyStructure:
    "The proband and both biological parents have been tested. Both parents are reportedly unaffected.",

  history: [
    "Global developmental delay noted in infancy",
    "Severe expressive speech delay",
    "Epilepsy beginning at age 3",
    "Hypotonia from early childhood",
    "Mild dysmorphic features noted by clinical genetics",
    "Original validated pipeline analysis did not identify a diagnostic result",
    "Updated rerun produced new candidate calls not present in the original validated output",
    "Pipeline version discrepancy has been flagged by the service team",
  ],

  phenotype: [
    "Global developmental delay",
    "Severe speech delay",
    "Epilepsy",
    "Hypotonia",
    "Mild dysmorphic features",
  ],

  familyHistory:
    "Both parents are reportedly unaffected. No known family history of developmental delay, epilepsy, hypotonia, dysmorphic features, or a similar neurodevelopmental presentation.",

  serviceContext: [
    "This is a pipeline governance and change-control case.",
    "The key issue is not simply which candidate looks strongest.",
    "The key issue is whether the data and pipeline output are reliable enough to interpret.",
    "A new pipeline version may improve detection, but it must be validated, documented, and reconciled with previous results before being used for clinical interpretation.",
    "Your task is to recognise when interpretation should pause until the pipeline discrepancy is resolved.",
    "Do not prioritise or report a candidate from an unresolved or unvalidated pipeline output as though it were a stable clinical result.",
  ],

  candidateFindings: [
    {
      id: "candidate-1",
      label: "Candidate 1",
      gene: "PIPEOLD1",
      variant: "chr2:77219011 G>A",
      zygosity: "Heterozygous",
      consequence: "missense_variant",
      inheritanceSignal: "Inherited from unaffected father",
      clinicalFit:
        "PIPEOLD1 has a broad neurodevelopmental association in limited reports. This candidate is present in both pipeline versions, but it remains weak because of inheritance, population frequency, and limited gene-disease evidence.",
      rawEvidence: `GENE: PIPEOLD1
  Known disease association: broad neurodevelopmental association in limited reports
  Reported inheritance: autosomal dominant proposed
  Known mechanism: uncertain
  Gene-disease validity in local summary: limited
  
  Variant:
  chr2:77219011 G>A
  Transcript: NM_470001.2
  HGVS: c.1042G>A p.(Gly348Ser)
  Consequence: missense_variant
  Protein domain: outside known recurrent functional region in local summary
  
  Original validated pipeline:
  Pipeline version: RD-GS-v3.4
  Validation status: validated for clinical SNV/indel analysis
  Variant present: yes
  Genotype: heterozygous
  Classification in original review: low-priority candidate / not explanatory
  
  Updated rerun:
  Pipeline version: RD-GS-v4.1-beta
  Validation status: not yet approved for clinical sign-out in this service context
  Variant present: yes
  Genotype: heterozygous
  No meaningful change in evidence
  
  VCF-style fields from validated pipeline:
  QUAL=650
  FILTER=PASS
  INFO: DP=46;MQ=60;QD=14.1;SOR=0.82
  FORMAT: GT:AD:DP:GQ
  
  Proband: 0/1:23,23:46:99
  Mother: 0/0:40,0:40:99
  Father: 0/1:21,22:43:99
  
  Read-level notes:
  ALT reads seen on both forward and reverse strands
  ALT reads distributed across read positions
  No local mapping warning
  No concerning soft-clipping
  
  Population:
  gnomAD AF = 0.0013
  gnomAD allele count = 340
  Homozygotes observed in population summary = 1
  
  Constraint:
  LOEUF = 0.82
  pLI = 0.08
  
  ClinVar-style summary:
  No exact matching pathogenic record found in local summary
  Gene-disease relationship remains limited and broad
  
  Pipeline relevance:
  This finding is stable across versions but remains weak.
  It does not explain the pipeline discrepancy.`,
      concern:
        "This is technically real and stable across pipeline versions, but it is weak as a diagnostic candidate. It does not resolve the governance issue.",
    },
    {
      id: "candidate-2",
      label: "Candidate 2",
      gene: "SYNPIPE2",
      variant: "chr7:118902440 G>A",
      zygosity: "Heterozygous in updated rerun only",
      consequence: "splice_donor_variant",
      inheritanceSignal:
        "Appears de novo in updated rerun, but absent from original validated pipeline output",
      clinicalFit:
        "SYNPIPE2 is associated with an autosomal dominant neurodevelopmental disorder including developmental delay, severe speech delay, epilepsy, hypotonia, and dysmorphic features. If real, the candidate would be highly relevant, but the call appears only in an unvalidated updated pipeline rerun.",
      rawEvidence: `GENE: SYNPIPE2
  Known disease association: autosomal dominant syndromic neurodevelopmental disorder
  Reported inheritance: autosomal dominant
  Known mechanism: haploinsufficiency / loss-of-function
  Gene-disease validity in local summary: established/moderate
  
  Variant:
  chr7:118902440 G>A
  Transcript: NM_470002.5
  HGVS: c.744+1G>A
  Consequence: splice_donor_variant
  Splice position: canonical +1 donor site
  Predicted effect: likely donor splice-site disruption
  
  Original validated pipeline:
  Pipeline version: RD-GS-v3.4
  Validation status: validated for clinical SNV/indel analysis
  Variant present in final VCF: no
  Manual review in original analysis: no confident variant at this site
  Coverage in proband at site: 51x
  Mother coverage at site: 44x
  Father coverage at site: 43x
  No reportable call emitted
  
  Updated rerun:
  Pipeline version: RD-GS-v4.1-beta
  Validation status: not yet approved for clinical sign-out in this service context
  Variant present in rerun VCF: yes
  Genotype in proband: 0/1
  Inheritance label in rerun: apparent de novo
  
  Updated rerun VCF-style fields:
  QUAL=920
  FILTER=PASS
  INFO: DP=52;MQ=60;QD=17.7;SOR=0.72
  FORMAT: GT:AD:DP:GQ
  
  Proband in updated rerun: 0/1:26,26:52:99
  Mother in updated rerun: 0/0:44,0:44:99
  Father in updated rerun: 0/0:43,0:43:99
  
  Discrepancy review:
  The same BAM file name is listed in both analyses, but file checksum differs between the original and rerun workspace
  Sample-level metadata in rerun points to a regenerated alignment file
  Read group identifiers differ from original validated analysis
  Reference resource bundle changed between v3.4 and v4.1-beta
  Indel realignment / local assembly component changed
  Splice-region annotation source changed
  Variant appears only after realignment and caller update
  
  Read-level notes in updated rerun:
  ALT reads seen on both forward and reverse strands
  ALT reads distributed across read positions
  High mapping quality in rerun BAM
  No obvious soft-clipping issue in rerun BAM
  
  Read-level notes in original validated BAM:
  Site coverage present
  No clear ALT support visible at comparable level
  Original BAM does not show the same 26 ALT reads
  This raises a data provenance / alignment discrepancy rather than a simple variant interpretation question
  
  Population:
  gnomAD AF = not observed
  gnomAD allele count = 0
  
  Constraint:
  LOEUF = 0.15
  pLI = 0.99
  
  ClinVar-style summary:
  Other canonical splice-site and truncating variants in SYNPIPE2 have been submitted as pathogenic/likely pathogenic in affected individuals
  Reported phenotypes overlap with developmental delay, severe speech delay, epilepsy, hypotonia, and dysmorphic features
  
  Governance note:
  If real, this would be a strong candidate.
  However, the discrepancy between the validated pipeline output and the unvalidated rerun must be resolved before interpretation.
  Required next steps may include checking sample identity, file provenance, checksums, reference version, pipeline validation status, rerun reproducibility, and approved confirmation pathway.`,
      concern:
        "This is the tempting candidate, but it should not be interpreted clinically until the pipeline/data provenance discrepancy is resolved. The issue is governance and reliability before variant prioritisation.",
    },
    {
      id: "candidate-3",
      label: "Candidate 3",
      gene: "CNVPIPE3 region",
      variant: "chr16:29120000-29205000 deletion",
      zygosity: "Possible heterozygous deletion in updated CNV rerun only",
      consequence: "copy_number_loss",
      inheritanceSignal:
        "Possible de novo in updated CNV caller, but absent from validated CNV workflow",
      clinicalFit:
        "The region contains a possible neurodevelopmental candidate gene, but the CNV appears only in an updated CNV caller using an unvalidated normalisation model.",
      rawEvidence: `CNV REGION: chr16:29120000-29205000
  CNV type: possible deletion
  Estimated size: 85 kb
  Copy-number state: possible one-copy loss
  
  Gene:
  CNVPIPE3
  Known disease association: possible neurodevelopmental association in limited reports
  Known mechanism: uncertain
  Dosage sensitivity: not established
  
  Original validated CNV workflow:
  Pipeline version: CNV-RD-v2.8
  Validation status: validated for clinical exon/region-level CNV screening
  CNV call at this region: not called
  Normalised depth in proband across interval: ~0.96–1.04
  Mother normalised depth: ~0.98–1.03
  Father normalised depth: ~0.97–1.05
  No B-allele pattern suggesting deletion
  
  Updated CNV rerun:
  Pipeline version: CNV-RD-v3.2-beta
  Validation status: not yet approved for clinical sign-out in this service context
  CNV call: deletion LOW_CONFIDENCE
  Quality score: 36
  Number of affected targets/windows: 7
  
  Updated rerun read-depth:
  Expected normalised depth in diploid regions: ~1.00
  Proband normalised depth across interval: ~0.72
  Mother normalised depth across interval: ~0.99
  Father normalised depth across interval: ~1.01
  
  Discrepancy review:
  Updated CNV caller used a new GC-correction model
  Updated CNV caller used a different batch reference set
  Batch contains several samples with reduced depth in the same interval
  Region overlaps a known coverage-variable segment
  No split-read support
  No paired-end breakpoint support
  No second approved CNV caller support
  B-allele pattern inconclusive because of low SNP density
  
  Population:
  Overlapping small CNVs observed in local population summary
  No established pathogenic recurrent deletion in local summary
  
  Governance note:
  This may represent a caller/model artefact caused by batch normalisation or coverage correction.
  The original validated workflow did not support the deletion.
  It should not be interpreted until the CNV pipeline discrepancy is reviewed and resolved.`,
      concern:
        "This is not a reliable diagnostic candidate from the current evidence. It is a pipeline-discrepant low-confidence CNV call and should not be used clinically until the workflow issue is resolved.",
    },
  ],

  decisionCheckpoints: [
    {
      id: "checkpoint-1",
      title: "Checkpoint 1 — Reliability comes before interpretation",
      context:
        "Candidate 2 looks highly relevant if real, but it appears only in an unvalidated updated pipeline rerun and is absent from the original validated pipeline output.",
      question: "What is the safest first response?",
      options: [
        {
          label: "A",
          text: "Interpret Candidate 2 immediately because the gene and consequence look strong.",
          isCorrect: false,
          feedback:
            "Not quite. A strong-looking candidate should not be interpreted until the pipeline and data provenance discrepancy is resolved.",
        },
        {
          label: "B",
          text: "Pause clinical interpretation and investigate the pipeline/version, file provenance, validation status, and reproducibility issue.",
          isCorrect: true,
          feedback:
            "Correct. Reliability of the result comes before clinical interpretation.",
        },
        {
          label: "C",
          text: "Delete the candidate permanently because it was not in the original output.",
          isCorrect: false,
          feedback:
            "Not quite. The new call may be real, but it requires governed review before interpretation.",
        },
      ],
      teachingPoint:
        "A candidate cannot be interpreted safely until the analysis output itself is trusted.",
    },
    {
      id: "checkpoint-2",
      title: "Checkpoint 2 — Validated versus unvalidated workflow",
      context:
        "The original pipeline is validated for clinical use. The updated rerun is marked beta/not approved for sign-out in this service context.",
      question: "Why does this matter?",
      options: [
        {
          label: "A",
          text: "Because unvalidated or changed workflows can produce different calls that require validation, documentation, and controlled review before clinical use.",
          isCorrect: true,
          feedback:
            "Correct. Change control is part of patient safety.",
        },
        {
          label: "B",
          text: "Because newer pipelines are always automatically better and need no review.",
          isCorrect: false,
          feedback:
            "Not quite. Newer does not automatically mean clinically validated.",
        },
        {
          label: "C",
          text: "Because older pipelines must always be treated as correct even if a real variant was missed.",
          isCorrect: false,
          feedback:
            "Not quite. Older pipelines can miss findings, but new outputs still need governed validation and reconciliation.",
        },
      ],
      teachingPoint:
        "Pipeline changes can improve analysis, but clinical use requires validation and change control.",
    },
    {
      id: "checkpoint-3",
      title: "Checkpoint 3 — Do not over-prioritise a discrepant CNV",
      context:
        "Candidate 3 is a deletion call produced only by an updated CNV caller using a new normalisation model. The original validated CNV workflow did not support it.",
      question: "What is the safest interpretation of Candidate 3?",
      options: [
        {
          label: "A",
          text: "Treat it as diagnostic because CNV callers never produce batch or normalisation artefacts.",
          isCorrect: false,
          feedback:
            "Not quite. CNV workflows can be sensitive to batch effects, GC correction, normalisation models, and coverage-variable regions.",
        },
        {
          label: "B",
          text: "Treat it as unresolved until the CNV workflow discrepancy is investigated and the call is reviewed through an approved pathway.",
          isCorrect: true,
          feedback:
            "Correct. Candidate 3 is a workflow-discrepant CNV and should not be used clinically yet.",
        },
        {
          label: "C",
          text: "Report it because it is de novo in the updated caller.",
          isCorrect: false,
          feedback:
            "Not quite. The apparent de novo label depends on a call whose reliability is not yet established.",
        },
      ],
      teachingPoint:
        "CNV interpretation depends on trustworthy calling and validation, not just the presence of a call in one output.",
    },
    {
      id: "checkpoint-4",
      title: "Checkpoint 4 — Separate candidate interest from reportability",
      context:
        "Candidate 2 would be a strong phenotype-compatible variant if confirmed, but the current discrepancy means the result is not yet reliable enough for interpretation.",
      question: "Which wording is safest?",
      options: [
        {
          label: "A",
          text: "Candidate 2 is the confirmed diagnosis.",
          isCorrect: false,
          feedback:
            "Not quite. That overstates a pipeline-discrepant result.",
        },
        {
          label: "B",
          text: "Candidate 2 is an interesting pipeline-discrepant finding that requires resolution of validation/provenance issues before clinical interpretation.",
          isCorrect: true,
          feedback:
            "Correct. This wording separates biological plausibility from current reportability.",
        },
        {
          label: "C",
          text: "Candidate 2 should be ignored forever because the pipeline changed.",
          isCorrect: false,
          feedback:
            "Not quite. It should be investigated, not ignored or reported prematurely.",
        },
      ],
      teachingPoint:
        "A finding can be interesting but not yet clinically interpretable.",
    },
    {
      id: "checkpoint-5",
      title: "Checkpoint 5 — Safe service-style next step",
      context:
        "There are candidate calls affected by pipeline/version discrepancies. The updated workflow is not yet approved for clinical sign-out.",
      question: "What is the safest final conclusion?",
      options: [
        {
          label: "A",
          text: "No clinical interpretation should be made from the discrepant updated calls until pipeline validation, data provenance, reproducibility, and change-control review are complete.",
          isCorrect: true,
          feedback:
            "Correct. This is the safest governance-focused conclusion.",
        },
        {
          label: "B",
          text: "Report Candidate 2 immediately because it looks clinically compelling.",
          isCorrect: false,
          feedback:
            "Not quite. Clinical plausibility does not override unresolved workflow reliability.",
        },
        {
          label: "C",
          text: "Ignore all pipeline documentation and choose the output with the most candidates.",
          isCorrect: false,
          feedback:
            "Not quite. More calls do not mean safer or better clinical interpretation.",
        },
      ],
      teachingPoint:
        "Patient safety includes knowing when not to interpret until the analytical process is under control.",
    },
  ],

  finalReflection:
    "A safe trainee-level conclusion would be that no clinical interpretation should be made from the discrepant updated pipeline calls until the pipeline and data provenance issue is resolved. Candidate 2 would be a strong phenotype-compatible splice donor candidate if confirmed, but it appears only in an unvalidated updated rerun and is absent from the original validated pipeline output, with differences in file checksum, read group identifiers, reference resources, and alignment/calling workflow. Candidate 3 is a low-confidence CNV call produced only by an updated CNV model and may reflect batch or normalisation effects. Candidate 1 is stable across versions but remains weak because of inheritance, frequency, and limited gene-disease evidence. The safest next step is to pause interpretation of the discrepant calls, escalate the issue through the appropriate validation/change-control pathway, confirm data provenance and reproducibility, and only return to candidate prioritisation once the analytical output is trusted.",
};