export const case48 = {
  id: "case-48",
  slug: "cancer-plus-possible-germline-follow-up-case",
  title: "Case 48: Cancer plus possible germline follow-up",
  level: "Advanced",
  summary:
    "A service-boundary case focused on separating tumour actionability from possible germline follow-up and avoiding unsafe conclusions from tumour-only evidence.",

  visualisationExampleId: null,

  assessmentFocus: [
    "Somatic tumour actionability",
    "Matched blood comparator interpretation",
    "Possible germline follow-up boundary",
    "Tumour-only versus constitutional evidence",
    "Cancer predisposition escalation",
    "Tumour suppressor and LOH context",
    "Hotspot oncogene actionability",
    "Weak tumour passenger findings",
    "Low-confidence fusion handling",
    "Safe oncology and genetics handover",
  ],

  guidedTutorMode: {
    type: "static-rule-based",
    description:
      "Uses built-in hints, checkpoint feedback, model answers, and self-check criteria to support safe reasoning around somatic tumour findings, possible germline follow-up, and service-boundary handover.",
  },

  phase5Assessment: {
    candidateRanking: {
      prompt:
        "Rank the findings by how they should be handled in a safe cancer genomic handover, separating somatic tumour actionability from possible germline follow-up.",
      correctOrder: [
        "candidate-4-primary-somatic-oncology-finding",
        "candidate-2-separate-possible-germline-follow-up",
        "candidate-3-weaker-tumour-copy-number-finding",
        "candidate-5-low-confidence-fusion-finding",
        "candidate-1-weak-passenger-style-finding",
      ],
      explanation:
        "Candidate 4 is the strongest somatic oncology finding because it is a high-confidence tumour-only activating hotspot with tumour-type relevance and matched blood absence. Candidate 2 is not the main somatic actionability finding, but it is highly important as a separate possible germline cancer predisposition follow-up issue because it is present in matched blood at heterozygous allele fraction. Candidate 3 is a real-looking tumour copy-number gain but has uncertain actionability in this tumour type. Candidate 5 is weaker because the fusion evidence is low-confidence and not reproducibly supported. Candidate 1 is weakest because it lacks clear cancer actionability, mechanism, recurrence, or germline relevance.",
    },

    governanceDecision: {
      prompt:
        "Choose the safest service action when tumour testing identifies both a strong somatic driver and a possible germline cancer predisposition finding.",
      options: [
        {
          id: "separate-somatic-and-germline-pathways",
          label: "A",
          decision:
            "Hand over Candidate 4 as the primary somatic oncology finding and separately flag Candidate 2 for possible germline follow-up through the correct constitutional consent, genetics, and governance pathway.",
          isBest: true,
          feedback:
            "Best decision. This separates tumour actionability from possible germline follow-up and avoids making a constitutional diagnosis from the tumour workflow alone.",
        },
        {
          id: "merge-both-as-tumour-findings",
          label: "B",
          decision:
            "Treat Candidate 2 and Candidate 4 as the same type of tumour result because both appear in the tumour sequencing output.",
          isBest: false,
          feedback:
            "Review this choice. Candidate 4 is tumour-only and somatic; Candidate 2 is present in matched blood and raises a separate possible germline issue.",
        },
        {
          id: "ignore-germline-possibility",
          label: "C",
          decision:
            "Report only the somatic hotspot and ignore Candidate 2 because the test was ordered for cancer.",
          isBest: false,
          feedback:
            "Review this choice. A matched-blood variant in a cancer predisposition gene may need appropriate germline follow-up depending on local policy.",
        },
      ],
    },

    writtenSummary: {
      prompt:
        "Write a safe tumour-genomics handover that separates the primary somatic oncology finding from the possible germline follow-up issue.",
      checklist: [
        "Identifies Candidate 4 as the strongest somatic tumour-actionable finding.",
        "Explains that Candidate 4 is tumour-only and absent from matched blood.",
        "Mentions the key support for Candidate 4: activating hotspot, kinase pathway, tumour-type relevance, strong technical support, and matched blood absence.",
        "Separately flags Candidate 2 as a possible germline cancer predisposition follow-up issue.",
        "Explains that Candidate 2 is present in matched blood at heterozygous allele fraction.",
        "States that Candidate 2 should not be finalised from the tumour workflow alone.",
        "Mentions that constitutional consent, clinical genetics, reporting pathway, and governance review are needed.",
        "Explains why Candidate 1 is weak/passenger-like.",
        "Explains why Candidate 3 has uncertain actionability.",
        "Explains why Candidate 5 is low-confidence.",
        "Avoids calling Candidate 4 germline.",
        "Avoids using Candidate 2 as the primary somatic therapy target unless separately reviewed in the appropriate oncology context.",
        "Keeps the somatic and germline conclusions clearly separate.",
      ],
      modelAnswer:
        "Candidate 4 is the strongest somatic oncology finding for review because it is a high-confidence activating hotspot in KINACT4, detected in tumour and absent from matched blood, with relevant tumour-type actionability in the local cancer knowledgebase. This should be handed over as a tumour somatic finding rather than a constitutional diagnosis. Candidate 2 should be separately flagged as a possible germline cancer predisposition follow-up issue because it is a canonical splice acceptor variant in PREDISP2 and is present in matched blood at a heterozygous allele fraction, with supportive cancer predisposition evidence and potentially relevant family history. However, Candidate 2 should not be finalised from the tumour workflow alone; it requires the appropriate constitutional consent, clinical genetics review, reporting pathway, and governance process. Candidate 1 is weak and passenger-like, Candidate 3 is a low-level amplification with uncertain actionability, and Candidate 5 is a low-confidence possible fusion. The safest handover is to prioritise Candidate 4 for somatic oncology review and Candidate 2 for separate germline escalation, keeping the two conclusions distinct.",
    },
  },

  reasoningScorecard: [
    {
      category: "Somatic actionability",
      maxScore: 2,
      expectation:
        "Correctly identifies Candidate 4 as the strongest tumour-actionable somatic finding.",
    },
    {
      category: "Matched blood interpretation",
      maxScore: 2,
      expectation:
        "Uses matched blood evidence to distinguish tumour-only somatic findings from possible constitutional findings.",
    },
    {
      category: "Germline boundary",
      maxScore: 2,
      expectation:
        "Recognises Candidate 2 as a possible germline follow-up issue without finalising germline status from the tumour workflow alone.",
    },
    {
      category: "Weak tumour findings",
      maxScore: 2,
      expectation:
        "Appropriately deprioritises passenger-style, uncertain amplification, and low-confidence fusion findings.",
    },
    {
      category: "Service-ready handover",
      maxScore: 2,
      expectation:
        "Provides a clear handover separating somatic oncology review from constitutional genetics escalation.",
    },
  ],

  patient: {
    age: 13,
    sex: "Female",
  },

  referralReason:
    "A 13-year-old girl has had tumour genomic testing for a high-grade brain tumour. The oncology team wants to know which tumour findings may be relevant for treatment discussion and whether any finding raises a possible germline follow-up issue.",

  testType:
    "Tumour genome sequencing with matched blood comparator available for selected review; somatic, copy-number, fusion, and possible germline-follow-up assessment",

  familyStructure:
    "The proband’s tumour sample and blood-derived comparator sample have been sequenced. Parents have not been tested in this workflow.",

  history: [
    "High-grade brain tumour diagnosed after headaches, vomiting, and seizures",
    "Tumour tissue sent for genomic profiling",
    "Matched blood comparator sample available for selected review",
    "No previous known cancer predisposition diagnosis",
    "No known rare disease genomic diagnosis",
    "Oncology team requests a concise distinction between tumour-actionable findings and possible germline follow-up issues",
  ],

  phenotype: [
    "High-grade brain tumour",
    "Seizures",
    "Headaches and vomiting at presentation",
    "No documented developmental delay before tumour presentation",
    "No known previous constitutional genomic diagnosis",
  ],

  familyHistory:
    "The referral notes mention a maternal aunt with breast cancer in her 30s and a maternal grandfather with sarcoma, but no confirmed familial cancer predisposition syndrome is documented. Parents have not been tested in this workflow.",

  serviceContext: [
    "This is a cancer plus possible germline follow-up case.",
    "The key issue is separating different kinds of genomic evidence.",
    "A tumour finding can be clinically relevant for oncology treatment without being a germline diagnosis.",
    "A variant seen in tumour data may raise possible germline follow-up, but tumour evidence alone should not be used to make a constitutional diagnosis.",
    "Your task is to identify the tumour-actionable candidate, recognise the possible germline escalation issue, and avoid mixing these two conclusions.",
    "Do not tell the learner to report germline status from tumour-only evidence; germline follow-up needs the correct sample, consent, pathway, and review.",
  ],

  candidateFindings: [
    {
      id: "candidate-1",
      label: "Candidate 1",
      gene: "PASSENGER1",
      variant: "chr4:77190442 C>T",
      zygosity: "Tumour variant",
      consequence: "missense_variant",
      inheritanceSignal: "Detected in tumour; not detected in matched blood",
      clinicalFit:
        "PASSENGER1 has limited cancer relevance in the local summary. The variant is present at low tumour allele fraction, has weak functional evidence, and is not detected in blood.",
      rawEvidence: `GENE: PASSENGER1
  Known cancer association: limited / uncertain
  Known germline association: none established in local summary
  Known mechanism: uncertain
  
  Variant:
  chr4:77190442 C>T
  Transcript: NM_480001.2
  HGVS: c.899C>T p.(Pro300Leu)
  Consequence: missense_variant
  Protein domain: outside known recurrent hotspot region
  
  Tumour VCF-style fields:
  QUAL=210
  FILTER=PASS
  INFO: DP=420;MQ=60;QD=5.0;SOR=1.1
  FORMAT: GT:AD:DP:VAF
  
  Tumour:
  GT: 0/1
  AD: 386,34
  DP: 420
  VAF: 8.1%
  
  Matched blood:
  GT: 0/0
  AD: 210,0
  DP: 210
  VAF: 0%
  
  Read-level notes:
  ALT reads seen on both strands
  ALT reads distributed across read positions
  No major mapping warning
  No soft-clipping concern
  
  Tumour context:
  No recurrent hotspot evidence
  No known diagnostic, prognostic, or therapeutic association in local summary
  No copy-number change involving PASSENGER1
  No fusion involving PASSENGER1
  
  Population / database-style summary:
  Variant has no strong pathogenic or actionable cancer annotation in local summary
  No established germline cancer predisposition association for PASSENGER1
  
  Interpretation limitation:
  Likely a tumour passenger or uncertain somatic finding.
  Not a strong actionability or germline-follow-up candidate.`,
      concern:
        "This is technically detected in the tumour, but it is weak because there is no clear actionability, mechanism, recurrence, or germline relevance.",
    },
    {
      id: "candidate-2",
      label: "Candidate 2",
      gene: "PREDISP2",
      variant: "chr17:7579472 C>T",
      zygosity: "Tumour and matched blood heterozygous",
      consequence: "splice_acceptor_variant",
      inheritanceSignal:
        "Detected in both tumour and matched blood; possible germline cancer predisposition follow-up issue",
      clinicalFit:
        "PREDISP2 is associated with an autosomal dominant cancer predisposition syndrome. The variant is a canonical splice acceptor and is present in matched blood at heterozygous allele fraction, but germline interpretation requires the appropriate constitutional pathway, consent, and review.",
      rawEvidence: `GENE: PREDISP2
  Known cancer association: tumour suppressor gene
  Known germline association: autosomal dominant cancer predisposition syndrome
  Known mechanism: loss-of-function / haploinsufficiency
  Gene-disease validity in local summary: established for cancer predisposition
  
  Variant:
  chr17:7579472 C>T
  Transcript: NM_480002.5
  HGVS: c.672-2C>T
  Consequence: splice_acceptor_variant
  Splice position: canonical -2 acceptor site
  Predicted effect: likely acceptor splice-site disruption
  
  Tumour VCF-style fields:
  QUAL=910
  FILTER=PASS
  INFO: DP=520;MQ=60;QD=17.5;SOR=0.76
  FORMAT: GT:AD:DP:VAF
  
  Tumour:
  GT: 0/1
  AD: 254,266
  DP: 520
  VAF: 51.2%
  
  Matched blood:
  GT: 0/1
  AD: 116,112
  DP: 228
  VAF: 49.1%
  
  Read-level notes:
  ALT reads seen on both forward and reverse strands in tumour and blood
  ALT reads distributed across read positions
  High base quality at variant position
  High mapping quality for ALT-supporting reads
  No pseudogene warning
  No local low-complexity warning
  Second caller: detected
  
  Tumour copy-number / LOH context:
  Copy-number loss across the PREDISP2 locus in tumour
  Tumour B-allele pattern compatible with loss of the other allele
  This may be consistent with tumour suppressor involvement, but requires specialist review
  
  Population:
  gnomAD AF = not observed
  gnomAD allele count = 0
  
  ClinVar-style summary:
  Exact variant present in local summary:
  - Likely pathogenic/pathogenic for PREDISP2-related cancer predisposition
  - Multiple submitters, no conflict in local summary
  Other canonical splice and truncating variants in PREDISP2 reported in cancer predisposition cases
  
  Family history context:
  Maternal aunt with breast cancer in her 30s
  Maternal grandfather with sarcoma
  Family history may be relevant but is not sufficient alone
  
  Service boundary:
  This finding raises a possible germline cancer predisposition follow-up issue.
  It should not be finalised from the tumour workflow alone.
  It requires appropriate consent, constitutional reporting pathway, clinical genetics review, and possibly familial testing according to local policy.`,
      concern:
        "This is the key germline-follow-up escalation candidate. It is not the main tumour actionability finding, but it may be highly important and needs the correct constitutional pathway rather than being handled as a simple somatic result.",
    },
    {
      id: "candidate-3",
      label: "Candidate 3",
      gene: "CNVCANC3 region",
      variant: "chr8:128700000-129100000 amplification",
      zygosity: "Tumour copy-number gain",
      consequence: "copy_number_gain",
      inheritanceSignal: "Detected in tumour; not present in matched blood",
      clinicalFit:
        "The region contains a cancer-associated oncogene, but the amplification is low-level and broad, with uncertain actionability in this tumour type from the local summary.",
      rawEvidence: `CNV REGION: chr8:128700000-129100000
  CNV type: amplification / copy-number gain
  Estimated size: 400 kb
  Tumour copy-number state: low-level gain, estimated 4 copies
  Matched blood copy number: normal diploid
  
  Key gene:
  CNVCANC3
  Known cancer association: oncogene in several tumour types
  Tumour-type relevance in local summary: uncertain for this brain tumour context
  Known germline association: none established
  
  Tumour CNV caller summary:
  Caller 1: amplification PASS
  Caller 2: low-level gain supported
  Quality score: 92
  Number of affected targets/windows: 88
  
  Read-depth evidence:
  Expected normalised depth in diploid regions: ~1.00
  Tumour normalised depth across interval: ~1.85
  Matched blood normalised depth: ~1.01
  Flanking regions: variable because of broad tumour aneuploidy
  
  B-allele / purity context:
  Tumour purity estimate: ~62%
  Broad chromosome 8 copy-number instability noted
  Segment boundaries are approximate
  No focal high-level amplification peak in local summary
  
  Structural / breakpoint evidence:
  No clear focal breakpoint support
  No fusion involving CNVCANC3
  No enhancer-hijack evidence in current summary
  
  Actionability / database summary:
  No therapy-linked amplification threshold met in this tumour-type local summary
  No established diagnostic marker role in this case context
  May be mentioned as part of tumour genomic landscape, but not the strongest actionability finding
  
  Service boundary:
  Somatic tumour finding only.
  No matched blood evidence for germline copy-number change.`,
      concern:
        "This is likely a real tumour copy-number gain, but it is not the strongest finding because actionability and tumour-type relevance are uncertain.",
    },
    {
      id: "candidate-4",
      label: "Candidate 4",
      gene: "KINACT4",
      variant: "chr7:140453136 A>T",
      zygosity: "Tumour somatic variant",
      consequence: "activating_missense_variant",
      inheritanceSignal: "Detected in tumour; absent from matched blood",
      clinicalFit:
        "KINACT4 is a kinase oncogene. The variant is a recurrent activating hotspot in this tumour type and is absent from matched blood, supporting a somatic tumour-actionable finding rather than a germline diagnosis.",
      rawEvidence: `GENE: KINACT4
  Known cancer association: oncogene / kinase pathway activation
  Known germline association: none established in local summary for this variant
  Known somatic mechanism: recurrent activating hotspot missense variant
  Tumour-type relevance: reported diagnostic/therapeutic relevance in this brain tumour subtype in local summary
  
  Variant:
  chr7:140453136 A>T
  Transcript: NM_480004.5
  HGVS: c.1799T>A p.(Val600Glu)
  Consequence: activating_missense_variant
  Protein domain: kinase activation segment
  Mechanism note: recurrent activating hotspot
  
  Tumour VCF-style fields:
  QUAL=988
  FILTER=PASS
  INFO: DP=640;MQ=60;QD=18.2;SOR=0.68
  FORMAT: GT:AD:DP:VAF
  
  Tumour:
  GT: 0/1
  AD: 318,322
  DP: 640
  VAF: 50.3%
  
  Matched blood:
  GT: 0/0
  AD: 236,0
  DP: 236
  VAF: 0%
  
  Read-level notes:
  ALT reads seen on both forward and reverse strands
  ALT reads distributed across read positions
  High base quality at variant position
  High mapping quality for ALT-supporting reads
  No local low-complexity warning
  No pseudogene warning
  No concerning soft-clipping around the variant
  Second somatic caller: detected
  
  Tumour purity / copy-number context:
  Tumour purity estimate: ~62%
  No evidence of matched blood variant
  No local copy-number pattern suggesting constitutional variant
  Tumour VAF is compatible with a clonal somatic driver in this sample context
  
  Population / database-style summary:
  Variant absent from matched blood
  Variant is a known recurrent somatic activating hotspot in local cancer knowledgebase
  Associated with kinase pathway activation
  Therapy or trial relevance noted in local tumour board summary depending on diagnosis, local protocols, and clinical eligibility
  
  Germline interpretation boundary:
  This is not a germline finding from the current evidence.
  The correct interpretation is tumour somatic actionability, not constitutional diagnosis.`,
      concern:
        "This is the strongest tumour-actionable candidate. It should be prioritised for oncology review as a somatic tumour finding, while keeping it separate from the possible germline issue raised by Candidate 2.",
    },
    {
      id: "candidate-5",
      label: "Candidate 5",
      gene: "FUSCANC5",
      variant: "Possible gene fusion",
      zygosity: "Tumour structural event",
      consequence: "fusion_candidate",
      inheritanceSignal: "Tumour-only signal, but technically low-confidence",
      clinicalFit:
        "A possible fusion involving FUSCANC5 is detected by one caller, but supporting reads are limited and a second fusion caller does not support it.",
      rawEvidence: `FUSION / STRUCTURAL SIGNAL:
  Possible fusion involving FUSCANC5 and PARTNER5
  Tumour-only RNA/DNA-integrated summary
  Matched blood: no corresponding structural signal
  
  Fusion caller summary:
  Caller 1: possible FUSCANC5-PARTNER5 fusion, LOW_CONFIDENCE
  Caller 2: not detected
  Caller 3: not detected in local summary
  
  Supporting evidence:
  Discordant read pairs: 5
  Split reads: 1
  RNA junction reads: 2
  Breakpoint confidence: low
  Reading frame: predicted in-frame by one annotation, uncertain because breakpoint is imprecise
  
  Read-level notes:
  Several supporting reads occur in a repetitive intronic region
  Mapping quality mixed
  Some supporting reads have secondary alignments
  Soft-clipping present around predicted breakpoint
  No clear expression outlier for FUSCANC5 in local summary
  
  Known cancer relevance:
  FUSCANC5 fusions have been described in some tumours, but this exact partner and breakpoint are not established in local summary
  No clear therapy-linked fusion evidence from current data
  
  Tumour context:
  High-confidence KINACT4 hotspot already present
  The possible fusion does not add a stronger actionability signal from current evidence
  
  Service boundary:
  This is a possible low-confidence tumour structural finding.
  It should not be prioritised over the high-confidence somatic hotspot without further validation.`,
      concern:
        "This is not the strongest tumour finding because the fusion evidence is technically weak and not reproducibly supported by multiple callers.",
    },
  ],

  decisionCheckpoints: [
    {
      id: "checkpoint-1",
      title: "Checkpoint 1 — Separate somatic actionability from germline diagnosis",
      context:
        "Candidate 4 is detected in the tumour and absent from matched blood. Candidate 2 is detected in both tumour and matched blood.",
      question: "What is the safest interpretation of this difference?",
      options: [
        {
          label: "A",
          text: "Candidate 4 is a strong somatic tumour-actionable finding, while Candidate 2 raises a possible germline follow-up issue that needs the correct constitutional pathway.",
          isCorrect: true,
          feedback:
            "Correct. These are different types of findings and should not be merged into one conclusion.",
        },
        {
          label: "B",
          text: "Both candidates should automatically be reported as germline diagnoses.",
          isCorrect: false,
          feedback:
            "Not quite. Candidate 4 is absent from matched blood and fits a somatic tumour driver pattern.",
        },
        {
          label: "C",
          text: "Both candidates should be ignored because this is a cancer case.",
          isCorrect: false,
          feedback:
            "Not quite. Tumour actionability and germline follow-up can both matter, but through different pathways.",
        },
      ],
      teachingPoint:
        "Cancer genomic review often requires separating somatic tumour findings from possible constitutional findings.",
    },
    {
      id: "checkpoint-2",
      title: "Checkpoint 2 — Identify the tumour-actionable candidate",
      context:
        "Candidate 4 is a recurrent activating kinase hotspot in the tumour, has strong technical support, is absent from matched blood, and has tumour-type relevance in the local cancer knowledgebase.",
      question: "Why is Candidate 4 the strongest tumour-actionable finding?",
      options: [
        {
          label: "A",
          text: "Because it is a high-confidence somatic activating hotspot with tumour-type relevance and matched blood absence.",
          isCorrect: true,
          feedback:
            "Correct. Candidate 4 is the strongest tumour-actionable finding.",
        },
        {
          label: "B",
          text: "Because any tumour variant with 50% VAF must be germline.",
          isCorrect: false,
          feedback:
            "Not quite. Tumour VAF depends on purity, copy number, clonality, and tumour biology. Matched blood is essential.",
        },
        {
          label: "C",
          text: "Because all kinase variants are actionable.",
          isCorrect: false,
          feedback:
            "Not quite. This one is strong because it is a known recurrent activating hotspot with relevant tumour context.",
        },
      ],
      teachingPoint:
        "Tumour actionability depends on mechanism, evidence quality, tumour type, and clinical pathway, not gene name alone.",
    },
    {
      id: "checkpoint-3",
      title:
        "Checkpoint 3 — Possible germline follow-up is not the same as somatic actionability",
      context:
        "Candidate 2 is a canonical splice acceptor variant in a cancer predisposition gene and is present in matched blood at about 49% VAF.",
      question: "What is the safest handling of Candidate 2?",
      options: [
        {
          label: "A",
          text: "Treat it as a possible germline cancer predisposition follow-up issue requiring constitutional review, consent/governance checks, and clinical genetics pathway.",
          isCorrect: true,
          feedback:
            "Correct. Candidate 2 may be important, but it needs the correct germline pathway.",
        },
        {
          label: "B",
          text: "Use it as the main tumour-actionable therapy target.",
          isCorrect: false,
          feedback:
            "Not quite. It may have tumour biology relevance, but the key issue here is possible germline predisposition follow-up.",
        },
        {
          label: "C",
          text: "Ignore it because the tumour already has Candidate 4.",
          isCorrect: false,
          feedback:
            "Not quite. A strong somatic driver does not remove the need to handle a possible germline issue appropriately.",
        },
      ],
      teachingPoint:
        "A possible germline finding should be escalated through the correct pathway rather than folded into the somatic tumour conclusion.",
    },
    {
      id: "checkpoint-4",
      title: "Checkpoint 4 — Do not over-prioritise weaker tumour findings",
      context:
        "Candidate 3 is a low-level amplification with uncertain actionability. Candidate 5 is a low-confidence possible fusion with limited read support.",
      question:
        "Why are Candidates 3 and 5 weaker than Candidate 4 for tumour actionability?",
      options: [
        {
          label: "A",
          text: "Because Candidate 4 has stronger technical support, clearer mechanism, stronger recurrence/hotspot evidence, and better tumour-type relevance.",
          isCorrect: true,
          feedback:
            "Correct. Candidate 4 has much stronger actionability evidence.",
        },
        {
          label: "B",
          text: "Because CNVs and fusions can never be actionable.",
          isCorrect: false,
          feedback:
            "Not quite. CNVs and fusions can be actionable, but these specific findings are weaker.",
        },
        {
          label: "C",
          text: "Because only germline variants matter in cancer genomics.",
          isCorrect: false,
          feedback:
            "Not quite. Somatic findings can be central to tumour management.",
        },
      ],
      teachingPoint:
        "Different tumour variant classes can matter, but the strongest finding is the one with the clearest evidence and clinical relevance.",
    },
    {
      id: "checkpoint-5",
      title: "Checkpoint 5 — Safe service-style next step",
      context:
        "Candidate 4 is the strongest tumour-actionable finding. Candidate 2 raises a possible germline follow-up issue. The other candidates are weaker.",
      question: "What is the safest final handover?",
      options: [
        {
          label: "A",
          text: "Prioritise Candidate 4 for oncology somatic review, separately flag Candidate 2 for possible germline follow-up through the appropriate pathway, and explain why Candidates 1, 3, and 5 are weaker.",
          isCorrect: true,
          feedback:
            "Correct. This separates tumour actionability from germline escalation and keeps the handover reviewable.",
        },
        {
          label: "B",
          text: "Report Candidate 4 as a germline diagnosis because it is the strongest tumour finding.",
          isCorrect: false,
          feedback:
            "Not quite. Candidate 4 is absent from matched blood and should be handled as a somatic tumour finding.",
        },
        {
          label: "C",
          text: "Ignore Candidate 2 because somatic treatment is the only possible question in tumour testing.",
          isCorrect: false,
          feedback:
            "Not quite. Matched blood evidence in a cancer predisposition gene may require appropriate germline follow-up.",
        },
      ],
      teachingPoint:
        "Safe cancer genomic handover separates somatic actionability, germline follow-up, weaker tumour findings, and governance boundaries.",
    },
  ],

  finalReflection:
    "A safe trainee-level conclusion would be that Candidate 4 is the strongest tumour-actionable finding for oncology review because it is a high-confidence somatic activating hotspot in KINACT4, detected in tumour and absent from matched blood, with relevant tumour-type actionability in the local cancer knowledgebase. Candidate 2 should be separately flagged as a possible germline cancer predisposition follow-up issue because it is a canonical splice acceptor variant in PREDISP2 and is present in matched blood at a heterozygous allele fraction, with supportive cancer predisposition evidence and relevant family history. However, Candidate 2 should not be finalised from the tumour workflow alone; it needs the appropriate constitutional consent, reporting, clinical genetics, and governance pathway. Candidate 1 is a weak tumour passenger-style finding. Candidate 3 is a low-level amplification with uncertain actionability. Candidate 5 is a low-confidence possible fusion. The safest next step is to hand over Candidate 4 as the primary somatic oncology candidate and Candidate 2 as a separate germline-escalation issue, clearly separating the two conclusions.",
};