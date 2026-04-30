export const case51 = {
  id: "case-51",
  slug: "proband-mosaicism-case",
  title: "Case 51: Proband mosaicism",
  level: "Advanced",
  summary:
    "A guided case focused on recognising true proband mosaicism, using allele fraction, tissue context, technical confidence, and safe escalation.",

  visualisationExampleId: null,

  assessmentFocus: [
    "Mosaicism reasoning",
    "Allele fraction interpretation",
    "Tissue-specific evidence",
    "Technical confidence",
    "Contamination and artefact awareness",
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
        "Rank the findings from strongest to weakest based on mosaicism evidence, phenotype fit, technical confidence, and whether each finding should drive the case conclusion.",
      correctOrder: [
        "candidate-4",
        "candidate-5",
        "candidate-2",
        "candidate-3",
        "candidate-1",
      ],
      explanation:
        "Candidate 4 is strongest because it has the best convergence across phenotype, tissue enrichment, allele fraction pattern, gene mechanism, rarity, and technical confidence. Candidate 5 is not a disease candidate, but it is highly important as technical context because contamination review affects trust in low-level findings. Candidate 2 is a weak low-level blood finding because affected skin does not support enrichment and read-level concerns are present. Candidate 3 is a low-confidence CNV observation with inconsistent support. Candidate 1 is technically real but weak because inheritance, frequency, and phenotype mismatch reduce priority.",
    },

    escalationDecision: {
      prompt:
        "Choose the safest next action for the strongest finding in this case.",
      options: [
        {
          id: "hold-all-low-vaf",
          label: "A",
          decision:
            "Hold all low allele fraction findings because mosaic calls are too uncertain for rare disease case reasoning.",
          isBest: false,
          feedback:
            "Review this choice. Low allele fraction findings require caution, but they can be meaningful when tissue distribution, phenotype, and technical evidence support mosaicism.",
        },
        {
          id: "escalate-candidate-4",
          label: "B",
          decision:
            "Escalate Candidate 4 for formal mosaic variant review, highlighting affected-tissue enrichment and the need for confirmation.",
          isBest: true,
          feedback:
            "Best decision. Candidate 4 is strong enough to escalate because the tissue pattern, phenotype, gene mechanism, rarity, and read-level evidence align, but it still needs formal confirmation and sign-off.",
        },
        {
          id: "report-candidate-4",
          label: "C",
          decision:
            "Treat Candidate 4 as a final diagnosis because affected-tissue enrichment is strong evidence of mosaic disease.",
          isBest: false,
          feedback:
            "Review this choice. Affected-tissue enrichment is important, but the finding still needs clinical laboratory confirmation, interpretation, and sign-off before diagnostic wording.",
        },
      ],
    },

    writtenSummary: {
      prompt:
        "Write a short trainee-level handover summary explaining the strongest finding, the key evidence supporting mosaicism, and the main caution or limitation.",
      checklist: [
        "Names Candidate 4 as the strongest current finding.",
        "Explains that affected skin shows enrichment compared with blood and unaffected tissue.",
        "Mentions that the result is absent from parental blood.",
        "Uses technical evidence such as read quality, second-caller support, and contamination review.",
        "Avoids calling the result a final diagnosis without confirmation and sign-off.",
        "Briefly explains why the other findings are weaker.",
      ],
      modelAnswer:
        "Candidate 4 is the strongest current finding for formal mosaic variant review. The key support is that the variant is low level in blood, enriched in affected skin, absent or very low in unaffected tissue, absent from parental blood, technically supported by good read-level evidence and second-caller detection, and fits the segmental neurocutaneous-overgrowth phenotype. Candidate 2 is weaker because it is not enriched in affected tissue and has read-level concerns. Candidate 3 remains a low-confidence CNV observation, and Candidate 1 is a technically real but weak inherited/frequency-limited finding. Candidate 5 supports that contamination has been considered and does not currently explain the Candidate 4 tissue-enriched pattern. The safest next step is escalation for formal confirmation, interpretation, and clinical laboratory sign-off rather than treating the finding as an automatic final diagnosis.",
    },
  },

  reasoningScorecard: [
    {
      category: "Mosaicism reasoning",
      maxScore: 2,
      expectation:
        "Recognises that a low allele fraction in the proband can represent true mosaicism when supported by tissue-specific evidence.",
    },
    {
      category: "Technical confidence",
      maxScore: 2,
      expectation:
        "Uses read-level quality, strand balance, caller support, tissue comparison, and contamination review before trusting a low-level signal.",
    },
    {
      category: "Candidate prioritisation",
      maxScore: 2,
      expectation:
        "Prioritises the finding with the best convergence across phenotype, gene mechanism, allele fraction pattern, tissue support, and technical quality.",
    },
    {
      category: "Evidence interpretation",
      maxScore: 2,
      expectation:
        "Distinguishes true mosaic evidence from weak database, inherited, noisy, or artefactual signals.",
    },
    {
      category: "Safe escalation",
      maxScore: 2,
      expectation:
        "Communicates the finding as a mosaic candidate requiring appropriate confirmatory review rather than overcalling it as final diagnosis.",
    },
  ],

  patient: {
    age: 6,
    sex: "Female",
  },

  referralReason:
    "A 6-year-old girl has been referred for rare disease genome analysis because of developmental delay, focal epilepsy, asymmetric left-sided limb overgrowth, patchy hyperpigmented skin changes following a segmental pattern, and mild facial asymmetry. Blood trio genome sequencing identified several possible findings, including one low allele fraction variant in the proband. Additional testing on affected skin tissue has also been provided for review.",

  testType:
    "Rare disease trio genome sequencing with additional affected-tissue variant review for suspected mosaicism",

  familyStructure:
    "The proband and both biological parents have been tested using blood-derived DNA. Both parents are reportedly unaffected. Additional DNA from affected skin tissue from the proband has been tested for the main low-level candidate.",

  history: [
    "Developmental delay noted from infancy",
    "Focal seizures beginning at age 2",
    "Left-sided limb overgrowth compared with the right side",
    "Patchy hyperpigmented skin changes in a segmental distribution",
    "Mild facial asymmetry",
    "No known previous molecular diagnosis",
    "No known similar features in either parent",
    "Clinical team specifically queried possible mosaic disease mechanism",
    "Affected skin tissue was submitted because the blood result showed a low allele fraction candidate",
  ],

  phenotype: [
    "Developmental delay",
    "Focal epilepsy",
    "Segmental hyperpigmentation",
    "Asymmetric limb overgrowth",
    "Mild facial asymmetry",
    "Possible mosaic presentation",
  ],

  familyHistory:
    "Both parents are reportedly unaffected. There is no known family history of developmental delay, focal epilepsy, segmental skin changes, asymmetric overgrowth, facial asymmetry, or a similar childhood presentation.",

  serviceContext: [
    "This guided case focuses on mosaicism reasoning.",
    "The key issue is deciding whether a low allele fraction proband signal is real, artefactual, contamination-related, or consistent with true mosaicism.",
    "The presence of affected tissue is important because mosaic variants may be enriched in clinically affected tissue compared with blood.",
    "The learner should not assume that every low allele fraction variant is meaningful.",
    "The learner should also not dismiss a low allele fraction variant automatically if the phenotype and tissue evidence support mosaicism.",
    "The safest conclusion should recognise the strongest candidate, explain why the tissue pattern supports mosaicism, and recommend appropriate confirmatory clinical laboratory review.",
  ],

  candidateFindings: [
    {
      id: "candidate-1",
      label: "Candidate 1",
      gene: "NEUROSEG1",
      variant: "chr3:48219011 G>A",
      zygosity: "Heterozygous",
      consequence: "missense_variant",
      inheritanceSignal: "Inherited from unaffected mother",
      clinicalFit:
        "NEUROSEG1 has a limited neurodevelopmental association, but the variant is inherited from an unaffected mother, present in population data, and does not explain the segmental overgrowth and skin findings well.",
      rawEvidence: `GENE: NEUROSEG1
Known disease association: limited neurodevelopmental association in early reports
Reported inheritance: autosomal dominant proposed
Known mechanism: uncertain
Gene-disease validity in local summary: limited

Variant:
chr3:48219011 G>A
Transcript: NM_510001.2
HGVS: c.742G>A p.(Gly248Ser)
Consequence: missense_variant
Protein domain: outside known recurrent functional region in local summary

VCF-style fields:
QUAL=712
FILTER=PASS
INFO: DP=48;MQ=60;QD=14.8;SOR=0.88
FORMAT: GT:AD:DP:GQ

Proband blood: 0/1:24,24:48:99
Mother blood: 0/1:22,21:43:99
Father blood: 0/0:42,0:42:99

Read-level notes:
ALT reads seen on both forward and reverse strands
ALT reads distributed across read positions
No local mapping warning
No soft-clipping concern
Second caller: detected

Population:
gnomAD AF = 0.0009
gnomAD allele count = 240
No strong depletion pattern in local population summary

Phenotype fit:
Developmental delay: partial overlap
Focal epilepsy: limited overlap
Segmental hyperpigmentation: not a known core feature
Asymmetric overgrowth: not a known core feature
Facial asymmetry: not a known core feature

Review question:
Assess whether this inherited and relatively frequent variant fits the overall mosaic-style presentation strongly enough to drive the case conclusion.`,
      concern:
        "This is technically real but weak. It should be documented as reviewed and deprioritised rather than treated as the mosaic explanation.",
    },
    {
      id: "candidate-2",
      label: "Candidate 2",
      gene: "SKINMAP2",
      variant: "chr8:119440882 C>T",
      zygosity: "Low allele fraction in blood only",
      consequence: "missense_variant",
      inheritanceSignal: "Absent from parents, but not enriched in affected tissue",
      clinicalFit:
        "SKINMAP2 has a possible skin-patterning association, but the low-level blood signal is not reproduced or enriched in affected skin tissue, and read-level evidence is weaker than expected for a true mosaic candidate.",
      rawEvidence: `GENE: SKINMAP2
Known disease association: possible skin-patterning association in limited reports
Reported inheritance: uncertain
Known mechanism: uncertain
Gene-disease validity in local summary: limited

Variant:
chr8:119440882 C>T
Transcript: NM_510002.3
HGVS: c.1106C>T p.(Thr369Met)
Consequence: missense_variant

VCF-style fields:
QUAL=118
FILTER=LowVAFReview
INFO: DP=92;MQ=47;QD=2.1;SOR=4.8
FORMAT: GT:AD:DP:GQ

Proband blood: 0/1 low fraction:84,8:92:38
Mother blood: 0/0:76,0:76:99
Father blood: 0/0:72,0:72:99
Proband affected skin: 0/0:104,1:105:99

Read-level notes:
ALT reads in blood show strand imbalance
ALT reads cluster near read ends
Local mapping quality is reduced
Affected skin does not show enrichment
Second caller: not detected

Population:
gnomAD AF = 0.0003
gnomAD allele count = 80

Phenotype fit:
Segmental skin change: superficially compatible
Developmental delay: unclear fit
Focal epilepsy: unclear fit
Asymmetric overgrowth: not well supported

Review question:
Assess whether a low-level blood-only finding with read-level concerns and no affected-tissue enrichment is enough to support true mosaicism.`,
      concern:
        "This is a useful trap finding. It looks relevant at first, but the tissue and read-level evidence do not support it as the main explanation.",
    },
    {
      id: "candidate-3",
      label: "Candidate 3",
      gene: "CNVSEG3 region",
      variant: "chr11:67240000-67305000 duplication",
      zygosity: "Possible low-level mosaic duplication",
      consequence: "copy_number_gain",
      inheritanceSignal: "Not detected in parents",
      clinicalFit:
        "The region contains a possible neurodevelopmental gene, but the depth shift is subtle, caller support is inconsistent, and there is no clear tissue enrichment pattern.",
      rawEvidence: `CNV REGION: chr11:67240000-67305000
CNV type: possible duplication
Estimated size: 65 kb
Copy-number state: possible low-level mosaic gain

Gene:
CNVSEG3
Known disease association: possible neurodevelopmental association in limited reports
Known mechanism: uncertain
Triplosensitivity evidence: not established

Inheritance:
Proband blood: possible low-level gain
Mother blood: no gain detected
Father blood: no gain detected
Affected skin: borderline depth shift, not clearly higher than blood

CNV caller summary:
Caller 1: low-confidence duplication flag
Caller 2: not detected
Quality score: 31
Number of affected targets/windows: 11

Read-depth evidence:
Expected normalised depth in diploid regions: ~1.00
Proband blood normalised depth across interval: ~1.16
Proband affected skin normalised depth across interval: ~1.14
Mother normalised depth across interval: ~1.01
Father normalised depth across interval: ~1.00
Flanking regions: mildly noisy

Breakpoint evidence:
Split reads: absent
Paired-end support: absent
Breakpoint not resolved

B-allele / SNP pattern:
No convincing B-allele shift
Pattern does not strongly support a mosaic duplication

Population:
Overlapping duplications observed in local population CNV summary
No strong disease mechanism for low-level gain in local summary

Review question:
Assess whether this CNV has enough consistent depth, caller, B-allele, and tissue support to be prioritised.`,
      concern:
        "This is not technically convincing enough to use as the main explanation. It is useful for assessing CNV mosaicism caution.",
    },
    {
      id: "candidate-4",
      label: "Candidate 4",
      gene: "MOSAICAP4",
      variant: "chr14:91827440 G>T",
      zygosity: "Mosaic in proband",
      consequence: "missense_variant",
      inheritanceSignal:
        "Low allele fraction in proband blood, enriched in affected skin tissue, absent from parental blood",
      clinicalFit:
        "MOSAICAP4 is associated with an autosomal dominant mosaic neurocutaneous-overgrowth disorder. The variant is absent from parents, low-level in blood, enriched in affected skin, absent from unaffected tissue, rare, technically supported, and fits the segmental phenotype.",
      rawEvidence: `GENE: MOSAICAP4
Known disease association: autosomal dominant mosaic neurocutaneous-overgrowth disorder
Reported inheritance: usually post-zygotic mosaic
Known mechanism: activating or damaging missense variants in a recurrent signalling domain
Gene-disease validity in local summary: established/moderate

Variant:
chr14:91827440 G>T
Transcript: NM_510004.5
HGVS: c.1547G>T p.(Arg516Leu)
Consequence: missense_variant
Protein domain: recurrent mosaic disease-associated signalling domain
Domain note: other pathogenic mosaic variants cluster in the same functional region

VCF-style fields:
QUAL=426
FILTER=PASS_MOSAIC_REVIEW
INFO: DP=118;MQ=60;QD=8.9;SOR=0.94
FORMAT: GT:AD:DP:GQ

Proband blood: mosaic signal:107,11:118:72
Estimated blood VAF: 9.3%

Proband affected skin: mosaic signal:76,34:110:99
Estimated affected skin VAF: 30.9%

Proband unaffected buccal sample: low/absent signal:95,2:97:99
Estimated buccal VAF: 2.1%

Mother blood: 0/0:96,0:96:99
Father blood: 0/0:92,0:92:99

Read-level notes:
ALT reads seen on both forward and reverse strands
ALT reads distributed across read positions
High base quality at variant position
High mapping quality for ALT-supporting reads
No local low-complexity warning
No pseudogene or segmental duplication warning
No concerning soft-clipping
Second caller: detected in blood and affected skin
Orthogonal mosaic review flag: supported

Tissue comparison:
Affected skin shows clear enrichment compared with blood
Unaffected buccal sample shows absent or very low signal
Pattern is compatible with post-zygotic mosaicism
The clinical features are segmental and match the affected tissue distribution

Contamination review:
Sample identity checks are consistent
No broad low-level mixed profile across genome
No unexpected sex-chromosome or relatedness warning
The same variant enrichment pattern is not seen across unrelated sites

Population:
gnomAD AF = not observed
gnomAD allele count = 0

ClinVar-style summary:
No exact matching variant record found in local summary
Other variants in the same functional domain have been submitted as pathogenic/likely pathogenic in mosaic neurocutaneous-overgrowth presentations

Phenotype fit:
Developmental delay: compatible
Focal epilepsy: compatible
Segmental hyperpigmentation: strong match
Asymmetric limb overgrowth: strong match
Facial asymmetry: compatible
Mosaic presentation: strong match

Review question:
Assess whether the allele fraction pattern, tissue enrichment, phenotype, gene mechanism, and technical evidence support escalation for formal mosaic variant review.`,
      concern:
        "This is the strongest current candidate. It should be prioritised as a mosaic finding for formal review, while keeping confirmation and sign-off boundaries clear.",
    },
    {
      id: "candidate-5",
      label: "Candidate 5",
      gene: "Technical contamination review",
      variant: "Low-level background signals across unrelated sites",
      zygosity: "Not a candidate variant",
      consequence: "technical_quality_observation",
      inheritanceSignal: "Not applicable",
      clinicalFit:
        "A low-level background signal is present at a small number of unrelated sites, but it is not strong enough to explain the affected-tissue enrichment seen for Candidate 4.",
      rawEvidence: `TECHNICAL REVIEW: low-level background signal assessment
Reason for review:
The main candidate is low allele fraction in blood, so contamination and technical artefact must be considered.

Genome-wide low-level signal summary:
Small number of unrelated low-level ALT observations detected
Most are below 2 percent VAF
Most are not reproduced across tissue samples
No broad mixed-sample profile detected

Sample identity:
Proband, mother, and father identity checks are consistent
Trio relatedness checks are consistent
No unexpected sex-chromosome profile
No sample swap warning

Comparison with Candidate 4:
Candidate 4 blood VAF: 9.3 percent
Candidate 4 affected skin VAF: 30.9 percent
Candidate 4 buccal VAF: 2.1 percent
Candidate 4 shows tissue-specific enrichment
Background low-level signals do not show the same pattern

Review question:
Assess whether the background low-level signal pattern explains the main tissue-enriched finding or whether it is better treated as technical context.`,
      concern:
        "This is not a candidate finding. It is a technical context point that supports careful review of low-level mosaic calls.",
    },
  ],

  decisionCheckpoints: [
    {
      id: "checkpoint-1",
      title: "Checkpoint 1 — Identify the strongest mosaic candidate",
      context:
        "Several findings are present, but only one combines low allele fraction in blood, enrichment in affected tissue, phenotype fit, gene mechanism, and supportive read-level evidence.",
      question:
        "Which finding is the strongest current candidate for formal mosaicism review?",
      options: [
        {
          label: "A",
          text: "Candidate 2, because it is a low-level blood finding in a gene with possible skin relevance, even though affected skin does not show enrichment.",
          isCorrect: false,
          feedback:
            "Not quite. Candidate 2 is low-level in blood, but the lack of affected-tissue enrichment and read-level concerns weaken it substantially.",
        },
        {
          label: "B",
          text: "Candidate 4, because the phenotype, tissue enrichment, allele fraction pattern, gene mechanism, rarity, and technical evidence converge.",
          isCorrect: true,
          feedback:
            "Correct. Candidate 4 is strongest because multiple independent evidence types support true proband mosaicism.",
        },
        {
          label: "C",
          text: "Candidate 3, because a possible mosaic CNV can explain segmental presentations, even when the depth evidence is inconsistent.",
          isCorrect: false,
          feedback:
            "Not quite. Candidate 3 remains low confidence because the CNV evidence is subtle, inconsistent, and not clearly enriched in affected tissue.",
        },
      ],
      teachingPoint:
        "True mosaicism should be supported by a coherent pattern across phenotype, tissue distribution, allele fraction, and technical evidence.",
    },
    {
      id: "checkpoint-2",
      title: "Checkpoint 2 — Interpret tissue-specific allele fraction",
      context:
        "Candidate 4 is present at around 9 percent VAF in blood and around 31 percent VAF in affected skin, with absent or very low signal in unaffected buccal tissue.",
      question:
        "What is the safest interpretation of this allele fraction pattern?",
      options: [
        {
          label: "A",
          text: "It proves contamination, because low allele fraction blood findings should be rejected whenever they are below heterozygous balance.",
          isCorrect: false,
          feedback:
            "Not quite. Low VAF requires caution, but affected-tissue enrichment and consistent read evidence argue against automatic rejection.",
        },
        {
          label: "B",
          text: "It proves germline inheritance, because any variant detected in blood should be treated as constitutional unless parents carry it.",
          isCorrect: false,
          feedback:
            "Not quite. Low VAF in blood plus enrichment in affected tissue is more consistent with mosaicism than a standard constitutional heterozygous call.",
        },
        {
          label: "C",
          text: "It supports post-zygotic mosaicism, because the variant is enriched in affected tissue and much lower or absent in other sampled tissues.",
          isCorrect: true,
          feedback:
            "Correct. The tissue distribution fits a mosaic model, especially because affected tissue shows clear enrichment.",
        },
      ],
      teachingPoint:
        "Allele fraction should be interpreted alongside tissue source, clinical distribution, read quality, and contamination review.",
    },
    {
      id: "checkpoint-3",
      title: "Checkpoint 3 — Distinguish mosaicism from artefact",
      context:
        "Candidate 4 has balanced read support, high mapping quality, detection by a second caller, and affected-tissue enrichment. Candidate 2 has strand imbalance, read-end clustering, and no affected-tissue enrichment.",
      question:
        "Which comparison best explains why Candidate 4 is more credible than Candidate 2?",
      options: [
        {
          label: "A",
          text: "Candidate 4 has stronger technical and tissue support, while Candidate 2 has read-level concerns and lacks affected-tissue enrichment.",
          isCorrect: true,
          feedback:
            "Correct. The difference is not just VAF; it is the total pattern of tissue enrichment and technical quality.",
        },
        {
          label: "B",
          text: "Candidate 4 is more credible because all low-VAF variants in established genes should be accepted over low-VAF variants in limited genes.",
          isCorrect: false,
          feedback:
            "Not quite. Gene relevance matters, but low-VAF calls still need read-level and tissue-specific evidence.",
        },
        {
          label: "C",
          text: "Candidate 2 is more credible because a weaker technical signal is expected when a variant is mosaic and difficult to detect.",
          isCorrect: false,
          feedback:
            "Not quite. Mosaic calls can be technically challenging, but poor read pattern and absent tissue support weaken confidence.",
        },
      ],
      teachingPoint:
        "Low-level calls need careful technical review; mosaicism is not an excuse to ignore poor read-level evidence.",
    },
    {
      id: "checkpoint-4",
      title: "Checkpoint 4 — Handle contamination review proportionately",
      context:
        "There are minor low-level background signals at unrelated sites, but they are mostly below 2 percent and do not show the same tissue-enriched pattern as Candidate 4.",
      question:
        "How should the contamination review affect the conclusion?",
      options: [
        {
          label: "A",
          text: "It should override the candidate, because any background low-level signal makes all mosaic calls unreliable.",
          isCorrect: false,
          feedback:
            "Not quite. Background noise should be considered, but it does not automatically invalidate a tissue-enriched candidate.",
        },
        {
          label: "B",
          text: "It should be documented as reviewed, but it does not currently explain the Candidate 4 tissue-enriched pattern.",
          isCorrect: true,
          feedback:
            "Correct. Contamination review matters, but the evidence does not make contamination the best explanation here.",
        },
        {
          label: "C",
          text: "It should be ignored completely, because tissue enrichment means contamination can no longer be relevant.",
          isCorrect: false,
          feedback:
            "Not quite. Tissue enrichment is supportive, but contamination and sample quality still need to be reviewed and documented.",
        },
      ],
      teachingPoint:
        "Safe mosaicism interpretation includes contamination review without letting weak background noise override stronger tissue-specific evidence.",
    },
    {
      id: "checkpoint-5",
      title: "Checkpoint 5 — Communicate the finding safely",
      context:
        "Candidate 4 is the strongest current finding, but formal confirmation and clinical laboratory review are still required.",
      question:
        "Which final trainee-level conclusion is safest?",
      options: [
        {
          label: "A",
          text: "Avoid prioritising any finding, because low allele fraction variants should not be used in rare disease case reasoning.",
          isCorrect: false,
          feedback:
            "Not quite. Low allele fraction findings can be important when the phenotype, tissue pattern, and technical evidence support mosaicism.",
        },
        {
          label: "B",
          text: "Report Candidate 4 as diagnostic immediately, because affected-tissue enrichment is enough to remove the need for further review.",
          isCorrect: false,
          feedback:
            "Not quite. The candidate is strong, but clinical confirmation, interpretation, and sign-off are still needed.",
        },
        {
          label: "C",
          text: "Prioritise Candidate 4 as a mosaic candidate for formal review, explain the tissue support, and note that confirmation and sign-off are still required.",
          isCorrect: true,
          feedback:
            "Correct. This conclusion is clear, proportionate, and respects the need for formal review.",
        },
      ],
      teachingPoint:
        "A safe handover can prioritise a mosaic candidate while preserving confirmation, uncertainty, and clinical review boundaries.",
    },
  ],

  finalReflection:
    "A safe trainee-level conclusion would be that Candidate 4 is the strongest current finding for formal clinical laboratory review as a likely proband mosaic candidate. The key evidence is not simply that the variant has a low allele fraction in blood. The stronger reasoning is that the variant is enriched in affected skin tissue, absent or very low in unaffected tissue, absent from parental blood, technically supported by good read-level evidence and second-caller detection, absent from population data, located in a relevant functional domain, and fits the segmental neurocutaneous-overgrowth phenotype. Candidate 2 is a useful cautionary comparison because it is also low-level in blood, but it lacks affected-tissue enrichment and has read-level concerns. Candidate 3 remains a low-confidence possible CNV and should not be treated as explanatory. Candidate 1 is technically real but weak because it is inherited, relatively frequent, and poorly matched to the segmental phenotype. Candidate 5 is not a candidate variant but an important technical review point; the available contamination summary does not explain the Candidate 4 tissue-enriched pattern. The safest next step is to prioritise Candidate 4 for formal mosaic variant confirmation, interpretation, and clinical laboratory sign-off, while documenting the evidence pattern and the reasons other findings were deprioritised.",
};