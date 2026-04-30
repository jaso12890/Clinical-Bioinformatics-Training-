export const case8 = {
  id: "case-8",
  slug: "splice-region-candidate-case",
  title: "Case 8: Splice-region candidate",
  level: "Beginner",
  summary:
    "A splice-focused rare disease case where the learner must decide whether a splice-region or splice-site variant is strong enough to prioritise, and what uncertainty still needs review.",

  visualisationExampleId: null,

  assessmentFocus: [
    "Canonical splice-site interpretation",
    "Splice-region uncertainty",
    "Variant consequence and mechanism fit",
    "Inheritance model reasoning",
    "Technical confidence",
    "Safe escalation and trainee-level handover",
  ],

  guidedTutorMode: {
    type: "static-rule-based",
    description:
      "Uses built-in hints, checkpoint feedback, model answers, and self-check criteria to support safe case reasoning.",
  },

  phase5Assessment: {
    candidateRanking: {
      prompt:
        "Rank the findings from strongest to weakest based on splice evidence strength, phenotype fit, inheritance model, gene mechanism, technical confidence, and whether each finding should drive the case conclusion.",
      correctOrder: [
        "candidate-1",
        "candidate-4",
        "candidate-2",
        "candidate-3",
      ],
      explanation:
        "Candidate 1 is strongest because it is an apparent de novo canonical +1 splice donor variant in a phenotype-compatible autosomal dominant neuromuscular gene where loss-of-function is a known mechanism, with strong technical evidence and population absence. Candidate 4 has a strong canonical splice acceptor consequence and good technical evidence, but it is only a single inherited heterozygous variant in a recessive gene, so it does not currently explain a biallelic condition alone. Candidate 2 is weaker because it is non-canonical, inherited from an unaffected parent, has weaker splice prediction evidence, and has limited gene-disease support. Candidate 3 is weakest because although it is rare and appears de novo, it is synonymous, has no strong splice-disruption evidence, weaker technical support, and poorer phenotype fit.",
    },

    escalationDecision: {
      prompt:
        "Choose the safest next action for the strongest finding in this case.",
      options: [
        {
          id: "escalate-candidate-1",
          label: "A",
          decision:
            "Escalate Candidate 1 for formal review, documenting the canonical splice donor position, de novo pattern, phenotype fit, loss-of-function mechanism, and technical support.",
          isBest: true,
          feedback:
            "Best decision. Candidate 1 has the strongest convergence across splice consequence, inheritance, phenotype, mechanism, rarity, and technical confidence, while still needing formal review and sign-off.",
        },
        {
          id: "report-all-splice",
          label: "B",
          decision:
            "Treat all splice-annotated findings as equivalent because splice donor, splice acceptor, splice-region, and synonymous splice effects all disrupt splicing.",
          isBest: false,
          feedback:
            "Review this choice. Splice annotations do not all carry the same evidence strength. Canonical splice-site variants are usually stronger than non-canonical splice-region or synonymous variants without strong supporting evidence.",
        },
        {
          id: "escalate-candidate-4",
          label: "C",
          decision:
            "Escalate Candidate 4 as the lead finding because a canonical splice acceptor variant should outweigh the absence of a second allele.",
          isBest: false,
          feedback:
            "Review this choice. Candidate 4 has a strong consequence, but the gene is recessive and only one heterozygous inherited variant is shown, so it does not currently provide a complete explanation.",
        },
      ],
    },

    writtenSummary: {
      prompt:
        "Write a short trainee-level handover summary explaining the strongest splice candidate, the splice-evidence hierarchy, why the other findings are weaker, and the safest next step.",
      checklist: [
        "Names Candidate 1 as the strongest current finding.",
        "Explains that Candidate 1 is a canonical +1 splice donor variant.",
        "Mentions the apparent de novo inheritance pattern.",
        "Links MYON1 loss-of-function mechanism to the neuromuscular phenotype.",
        "Mentions the strong technical support and absence from population data.",
        "Explains why Candidate 2 is weaker as a non-canonical splice-region variant with weaker prediction evidence and inheritance from an unaffected parent.",
        "Explains why Candidate 3 is weaker because it is synonymous, technically fragile, and lacks strong splice-disruption evidence.",
        "Explains why Candidate 4 is limited by the recessive model because only one heterozygous variant is shown.",
        "Avoids calling Candidate 1 a final diagnosis without formal review and sign-off.",
      ],
      modelAnswer:
        "Candidate 1 is the strongest current finding for formal review. It is an apparent de novo canonical +1 splice donor variant in MYON1, a gene associated with an autosomal dominant childhood-onset neuromuscular disorder where loss-of-function is a reported mechanism. The proband’s delayed motor milestones, progressive muscle weakness, raised creatine kinase, and mild learning difficulties are compatible with the reported phenotype, and the raw evidence is technically reassuring with balanced allele support, high quality metrics, no major mapping warnings, and absence from population data. Candidate 2 is weaker because it is a non-canonical +6 splice-region variant with only weak/moderate predicted splice impact, inheritance from an unaffected parent, and limited gene-disease evidence. Candidate 3 is weaker because it is synonymous, has no strong splice-altering evidence, has technical caveats, and does not fit the primary neuromuscular phenotype as well. Candidate 4 has a strong canonical splice acceptor consequence, but only one inherited heterozygous variant is shown in a recessive gene, so it does not currently explain the case without a second allele or another mechanism. The safest next step is to document this splice-evidence hierarchy and escalate Candidate 1 through the appropriate clinical laboratory review pathway rather than treating it as a final diagnosis.",
    },
  },

  reasoningScorecard: [
    {
      category: "Splice evidence interpretation",
      maxScore: 2,
      expectation:
        "Distinguishes canonical splice donor or acceptor variants from broader splice-region or synonymous variants with weaker splice evidence.",
    },
    {
      category: "Mechanism and consequence",
      maxScore: 2,
      expectation:
        "Recognises why a canonical splice-site variant is stronger when loss-of-function is a known disease mechanism.",
    },
    {
      category: "Inheritance reasoning",
      maxScore: 2,
      expectation:
        "Uses de novo, inherited, dominant, and recessive inheritance context to decide whether a splice-related variant can explain the case.",
    },
    {
      category: "Candidate prioritisation",
      maxScore: 2,
      expectation:
        "Prioritises the finding with the best convergence across splice consequence, phenotype fit, gene mechanism, inheritance, rarity, and technical confidence.",
    },
    {
      category: "Safe escalation",
      maxScore: 2,
      expectation:
        "Escalates the strongest splice candidate for formal review while documenting the limitations of weaker splice-region, synonymous, or incomplete recessive findings.",
    },
  ],

  patient: {
    age: 9,
    sex: "Male",
  },

  referralReason:
    "A 9-year-old boy has been referred for rare disease genome analysis because of progressive muscle weakness, delayed motor milestones, raised creatine kinase, and mild learning difficulties.",

  testType: "Rare disease trio genome sequencing",

  familyStructure:
    "The proband and both biological parents have been tested. Both parents are reportedly unaffected. There is no known consanguinity.",

  history: [
    "Delayed walking and ongoing motor delay",
    "Progressive proximal muscle weakness",
    "Raised creatine kinase reported by the referring team",
    "Mild learning difficulties",
    "No known previous molecular diagnosis",
  ],

  phenotype: [
    "Progressive muscle weakness",
    "Delayed motor milestones",
    "Raised creatine kinase",
    "Mild learning difficulties",
  ],

  familyHistory:
    "Both parents are unaffected. No known family history of childhood-onset muscle disease or similar neuromuscular symptoms.",

  serviceContext: [
    "The analysis is being performed in a rare disease service context.",
    "The phenotype suggests a possible inherited neuromuscular disorder.",
    "The filtering workflow has returned several candidate variants affecting or near splice regions.",
    "Your task is to distinguish canonical splice-site evidence from weaker splice-region evidence, while avoiding over-interpretation.",
  ],

  candidateFindings: [
    {
      id: "candidate-1",
      label: "Candidate 1",
      gene: "MYON1",
      variant: "chr17:44390112 G>A",
      zygosity: "Heterozygous",
      consequence: "splice_donor_variant",
      inheritanceSignal: "Apparent de novo",
      clinicalFit:
        "MYON1 is associated with an autosomal dominant childhood-onset neuromuscular disorder. Reported features include delayed motor milestones, progressive muscle weakness, raised creatine kinase, and variable learning difficulties. Loss-of-function is a reported mechanism.",
      rawEvidence: `GENE: MYON1
Known disease association: autosomal dominant childhood-onset neuromuscular disorder
Reported inheritance: autosomal dominant
Known mechanism: haploinsufficiency / loss-of-function

Variant:
chr17:44390112 G>A
Transcript: NM_700001.3
HGVS: c.920+1G>A
Consequence: splice_donor_variant
Splice position: canonical +1 donor site
Predicted effect: likely donor splice-site disruption

VCF-style fields:
QUAL=861
FILTER=PASS
INFO: DP=46;MQ=60;QD=18.7;SOR=0.72
FORMAT: GT:AD:DP:GQ

Proband: 0/1:23,23:46:99
Mother: 0/0:39,0:39:99
Father: 0/0:41,0:41:99

Read-level notes:
ALT reads seen on both forward and reverse strands
ALT reads distributed across read positions
No obvious low-complexity sequence flag
No pseudogene or segmental duplication warning
No concerning soft-clipping around the variant

Population:
gnomAD AF = not observed
gnomAD allele count = 0

Constraint:
LOEUF = 0.25
pLI = 0.95

ClinVar-style summary:
No exact matching variant record found in local summary
Other canonical splice-site and truncating variants in MYON1 have been submitted as pathogenic/likely pathogenic in affected individuals`,
      concern:
        "This is the strongest current candidate because it is a technically convincing apparent de novo canonical splice donor variant in a gene where loss-of-function is a known disease mechanism and the phenotype fits.",
    },
    {
      id: "candidate-2",
      label: "Candidate 2",
      gene: "MUSK7",
      variant: "chr3:88211490 T>C",
      zygosity: "Heterozygous",
      consequence: "splice_region_variant",
      inheritanceSignal: "Inherited from unaffected mother",
      clinicalFit:
        "MUSK7 has a possible neuromuscular association, but the variant is outside the canonical splice dinucleotide, inherited from an unaffected parent, and has only weak predicted splice impact.",
      rawEvidence: `GENE: MUSK7
Known disease association: possible autosomal dominant neuromuscular disorder
Reported inheritance: autosomal dominant proposed in limited reports
Known mechanism: uncertain; some reported variants affect splicing, but evidence is limited

Variant:
chr3:88211490 T>C
Transcript: NM_700002.1
HGVS: c.641+6T>C
Consequence: splice_region_variant
Splice position: +6 donor region, outside canonical +1/+2 site
Splice prediction summary: weak/moderate predicted splice impact in local summary

VCF-style fields:
QUAL=496
FILTER=PASS
INFO: DP=42;MQ=60;QD=11.8;SOR=0.91
FORMAT: GT:AD:DP:GQ

Proband: 0/1:22,20:42:99
Mother: 0/1:19,21:40:99
Father: 0/0:37,0:37:99

Read-level notes:
ALT reads seen on both forward and reverse strands
ALT reads distributed across read positions
No obvious local mapping warning
No soft-clipping concern

Population:
gnomAD AF = 0.00008
gnomAD allele count = 22
No homozygotes observed in local summary

Constraint:
LOEUF = 0.63
pLI = 0.31

ClinVar-style summary:
No exact matching pathogenic record found in local summary
Gene-disease evidence remains limited/moderate in available summary`,
      concern:
        "This variant is technically plausible, but it is weaker because it is inherited from an unaffected parent, lies outside the canonical splice site, has only weak/moderate splice prediction, and the gene-disease evidence is limited.",
    },
    {
      id: "candidate-3",
      label: "Candidate 3",
      gene: "NERV8",
      variant: "chr11:129901771 C>T",
      zygosity: "Heterozygous",
      consequence: "synonymous_variant",
      inheritanceSignal: "Apparent de novo",
      clinicalFit:
        "NERV8 is associated with a neurodevelopmental condition rather than a primary neuromuscular disorder. The variant is synonymous with no strong splice prediction in the local summary.",
      rawEvidence: `GENE: NERV8
Known disease association: autosomal dominant neurodevelopmental disorder
Reported inheritance: autosomal dominant
Known mechanism: loss-of-function or damaging missense variants reported; synonymous mechanism not established

Variant:
chr11:129901771 C>T
Transcript: NM_700003.2
HGVS: c.1050C>T p.(Gly350=)
Consequence: synonymous_variant
Splice prediction summary: no strong splice-altering signal in local summary

VCF-style fields:
QUAL=57
FILTER=PASS
INFO: DP=27;MQ=44;QD=2.1;SOR=3.8
FORMAT: GT:AD:DP:GQ

Proband: 0/1:21,6:27:55
Mother: 0/0:32,0:32:99
Father: 0/0:30,0:30:99

Read-level notes:
ALT reads mostly on one strand
4 of 6 ALT reads occur close to read ends
Mild soft-clipping near supporting reads
Local repetitive sequence flag present
Manual read-level review recommended before prioritisation

Population:
gnomAD AF = not observed
gnomAD allele count = 0

Constraint:
LOEUF = 0.33
pLI = 0.88

ClinVar-style summary:
No exact matching variant record found in local summary
No local evidence that this synonymous change disrupts splicing`,
      concern:
        "This looks interesting because it is rare and appears de novo, but the technical evidence is weaker, the phenotype fit is not strong, and there is no strong splice-disruption evidence for the synonymous change.",
    },
    {
      id: "candidate-4",
      label: "Candidate 4",
      gene: "RECESSM2",
      variant: "chr6:33219044 A>G",
      zygosity: "Heterozygous",
      consequence: "splice_acceptor_variant",
      inheritanceSignal: "Inherited from unaffected father",
      clinicalFit:
        "RECESSM2 is associated with an autosomal recessive muscle disorder. A canonical splice acceptor variant could matter, but only one heterozygous inherited variant is shown here.",
      rawEvidence: `GENE: RECESSM2
Known disease association: autosomal recessive congenital myopathy
Reported inheritance: autosomal recessive
Known mechanism: biallelic loss-of-function

Variant:
chr6:33219044 A>G
Transcript: NM_700004.4
HGVS: c.744-2A>G
Consequence: splice_acceptor_variant
Splice position: canonical -2 acceptor site
Predicted effect: likely acceptor splice-site disruption

VCF-style fields:
QUAL=772
FILTER=PASS
INFO: DP=49;MQ=60;QD=15.8;SOR=0.69
FORMAT: GT:AD:DP:GQ

Proband: 0/1:25,24:49:99
Mother: 0/0:40,0:40:99
Father: 0/1:21,22:43:99

Read-level notes:
ALT reads seen on both forward and reverse strands
ALT reads distributed across read positions
No local mapping warning
No soft-clipping concern

Population:
gnomAD AF = 0.000006
gnomAD allele count = 2
No homozygotes observed in local summary

Constraint:
LOEUF = 0.37
pLI = 0.61

ClinVar-style summary:
No exact matching variant record found in local summary
Biallelic splice-site and truncating variants in RECESSM2 have been submitted in affected individuals`,
      concern:
        "This is technically convincing and potentially relevant to a recessive muscle disorder, but a single inherited heterozygous splice variant does not currently explain a recessive condition unless a second relevant allele or mechanism is identified.",
    },
  ],

  decisionCheckpoints: [
    {
      id: "checkpoint-1",
      title: "Checkpoint 1 — Canonical splice-site strength",
      context:
        "Candidate 1 is c.920+1G>A in MYON1. It affects the canonical +1 donor splice site. The gene is associated with autosomal dominant neuromuscular disease and loss-of-function is a known mechanism.",
      question:
        "Why is Candidate 1 a strong candidate for further review?",
      options: [
        {
          label: "A",
          text: "Because a technically clean apparent de novo canonical splice donor variant fits a loss-of-function mechanism in a phenotype-compatible gene.",
          isCorrect: true,
          feedback:
            "Correct. Candidate 1 has strong convergence: canonical splice position, de novo pattern, phenotype fit, loss-of-function mechanism, population absence, and good technical evidence.",
        },
        {
          label: "B",
          text: "Because all splice-region and splice-site annotations should be treated as equivalent high-impact findings.",
          isCorrect: false,
          feedback:
            "Not quite. Canonical splice-site variants are generally stronger than broader splice-region variants, but they still need gene, transcript, phenotype, and service review.",
        },
        {
          label: "C",
          text: "Because FILTER=PASS proves that the variant has disrupted splicing and caused the phenotype.",
          isCorrect: false,
          feedback:
            "Not quite. FILTER=PASS only supports that the variant passed technical filters. It does not prove clinical causality.",
        },
      ],
      teachingPoint:
        "Canonical splice-site variants can be strong candidates when the gene mechanism and phenotype fit, but they still need appropriate review.",
    },
    {
      id: "checkpoint-2",
      title: "Checkpoint 2 — Splice-region is not the same as canonical splice",
      context:
        "Candidate 2 is c.641+6T>C. It is in the donor region but outside the canonical +1/+2 splice donor dinucleotide. The splice prediction is weak/moderate and it is inherited from an unaffected mother.",
      question:
        "What is the safest interpretation of Candidate 2?",
      options: [
        {
          label: "A",
          text: "It is weaker than Candidate 1 because it is outside the canonical splice site, inherited from an unaffected parent, and has less certain splice evidence.",
          isCorrect: true,
          feedback:
            "Correct. A non-canonical splice-region variant may still matter, but it usually needs stronger supporting evidence before being prioritised.",
        },
        {
          label: "B",
          text: "It should be treated as equivalent to Candidate 1 because both are annotated near splice donor regions.",
          isCorrect: false,
          feedback:
            "Not quite. Canonical splice donor/acceptor variants and broader splice-region variants do not carry the same strength of evidence.",
        },
        {
          label: "C",
          text: "It should be dismissed permanently because non-canonical splice variants cannot affect transcript processing.",
          isCorrect: false,
          feedback:
            "Not quite. Non-canonical splice variants can matter, but they require careful supporting evidence such as strong prediction, RNA data, segregation, or previous reports.",
        },
      ],
      teachingPoint:
        "A splice-region annotation is a prompt for careful review, not automatic evidence of splice disruption.",
    },
    {
      id: "checkpoint-3",
      title: "Checkpoint 3 — Synonymous variant with weak splice evidence",
      context:
        "Candidate 3 is a synonymous variant. It is absent from population data and appears de novo, but there is no strong splice-altering signal and the technical evidence is weaker.",
      question:
        "Why should Candidate 3 be treated cautiously?",
      options: [
        {
          label: "A",
          text: "Because rarity and apparent de novo status do not overcome weak technical evidence, weak phenotype fit, and lack of splice-disruption evidence.",
          isCorrect: true,
          feedback:
            "Correct. Candidate 3 should not be over-prioritised just because it is rare and appears de novo.",
        },
        {
          label: "B",
          text: "Because synonymous variants should never be reviewed in a clinical bioinformatics workflow.",
          isCorrect: false,
          feedback:
            "Not quite. Synonymous variants can sometimes affect splicing, but this case does not currently show strong evidence for that.",
        },
        {
          label: "C",
          text: "Because absence from gnomAD proves the variant is benign rather than clinically relevant.",
          isCorrect: false,
          feedback:
            "Not quite. Population absence or rarity does not prove benignity or pathogenicity. It only supports rarity.",
        },
      ],
      teachingPoint:
        "Synonymous and non-canonical splice candidates require evidence that the variant actually affects splicing or fits the mechanism.",
    },
    {
      id: "checkpoint-4",
      title: "Checkpoint 4 — Strong splice consequence but wrong inheritance model",
      context:
        "Candidate 4 is a technically clean canonical splice acceptor variant in RECESSM2, a recessive muscle disease gene. However, the proband has only one heterozygous inherited variant shown.",
      question:
        "What is the main limitation of Candidate 4?",
      options: [
        {
          label: "A",
          text: "The splice consequence is strong, but a single inherited heterozygous variant does not currently explain a recessive biallelic condition.",
          isCorrect: true,
          feedback:
            "Correct. Candidate 4 could become relevant if a second allele or mechanism is found, but the evidence shown is incomplete for recessive disease.",
        },
        {
          label: "B",
          text: "The variant should be dismissed as technically poor because canonical splice acceptor calls are unreliable in recessive genes.",
          isCorrect: false,
          feedback:
            "Not quite. The technical evidence is strong. The limitation is the recessive inheritance model.",
        },
        {
          label: "C",
          text: "The finding is stronger than Candidate 1 because recessive muscle genes should be prioritised above dominant genes.",
          isCorrect: false,
          feedback:
            "Not quite. Candidate strength depends on the whole evidence pattern, not whether the gene is dominant or recessive.",
        },
      ],
      teachingPoint:
        "A strong molecular consequence still needs the correct inheritance pattern for the disease model.",
    },
    {
      id: "checkpoint-5",
      title: "Checkpoint 5 — Safe service-style next step",
      context:
        "Candidate 1 is the strongest current splice-related candidate. Candidate 2 is non-canonical and inherited. Candidate 3 is synonymous with weak splice and technical evidence. Candidate 4 is a single heterozygous variant in a recessive gene.",
      question:
        "What is the safest next step?",
      options: [
        {
          label: "A",
          text: "Prioritise Candidate 1 for review, document the weaker splice evidence for Candidates 2 and 3, and note that Candidate 4 would need a second allele.",
          isCorrect: true,
          feedback:
            "Correct. This is a safe, reviewable trainee-level conclusion that prioritises the strongest candidate while explaining the limitations of the others.",
        },
        {
          label: "B",
          text: "Report all splice-related variants as diagnostic because splice annotations are usually high-impact.",
          isCorrect: false,
          feedback:
            "Not quite. Splice annotations vary in strength. Canonical splice-site, splice-region, synonymous, and predicted splice effects need different levels of evidence.",
        },
        {
          label: "C",
          text: "Hold Candidate 1 until RNA data is available because no splice variant can be reviewed without transcript confirmation.",
          isCorrect: false,
          feedback:
            "Not quite. RNA evidence can be very useful, but a canonical splice-site variant in a mechanism-compatible gene may still be a strong candidate for review before RNA evidence is available.",
        },
      ],
      teachingPoint:
        "Safe splice interpretation means distinguishing strong canonical splice evidence from weaker predicted or non-canonical splice evidence.",
    },
  ],

  finalReflection:
    "A safe trainee-level conclusion would be that Candidate 1 is the strongest current candidate for further review because it is a technically convincing apparent de novo canonical splice donor variant in a phenotype-compatible gene where loss-of-function is a known disease mechanism. Candidate 2 is weaker because it is a non-canonical splice-region variant with weaker prediction evidence and inheritance from an unaffected parent. Candidate 3 should be treated cautiously because it is synonymous, has no strong splice-altering evidence, and has technical caveats despite apparent de novo status. Candidate 4 has a strong canonical splice consequence but currently only one inherited heterozygous variant is shown in a recessive gene, so it does not yet explain the case alone. The safest next step is to document this splice evidence hierarchy and escalate Candidate 1 through the appropriate review pathway.",
};