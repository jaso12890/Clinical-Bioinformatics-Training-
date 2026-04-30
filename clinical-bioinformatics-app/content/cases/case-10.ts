export const case10 = {
  id: "case-10",
  slug: "pseudogene-mapping-case",
  title: "Case 10: Pseudogene and mapping review",
  level: "Beginner",
  summary:
    "A technical mapping case focused on recognising pseudogene-related false-positive risk, low mapping confidence, read-level warning signs, and avoiding over-prioritisation of a misleading candidate.",

  visualisationExampleId: null,

  assessmentFocus: [
    "Pseudogene and mapping-risk recognition",
    "Read-level technical confidence",
    "Compound heterozygous recessive reasoning",
    "Population and phenotype fit",
    "Technical confidence versus clinical relevance",
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
        "Rank the findings from strongest to weakest based on phenotype fit, inheritance model, variant mechanism, mapping confidence, read-level evidence, population evidence, and whether each finding should drive the case conclusion.",
      correctOrder: [
        "candidate-3",
        "candidate-1",
        "candidate-4",
        "candidate-2",
      ],
      explanation:
        "Candidate 3 is strongest because it has the best convergence across phenotype, recessive mechanism, two rare loss-of-function variants, one variant inherited from each parent, and strong technical evidence without pseudogene warnings. Candidate 1 is clinically tempting because it is a stop-gained variant in a plausible dominant myopathy gene, but it is technically fragile because of pseudogene similarity, low mapping quality, weak allele balance, read-end clustering, soft-clipping, and poor read support. Candidate 4 has a recessive-looking homozygous genotype, but it is weakened by high population frequency, observed homozygotes, and a mild/adult-onset phenotype mismatch. Candidate 2 is technically real but lowest priority because it is inherited from an unaffected parent, has limited gene-disease evidence, weaker mechanism support, and broad phenotype overlap.",
    },

    escalationDecision: {
      prompt:
        "Choose the safest next action for this candidate set.",
      options: [
        {
          id: "escalate-candidate-1",
          label: "A",
          decision:
            "Escalate Candidate 1 as the lead finding because a de novo stop-gained variant in a plausible muscle disease gene is highly suspicious.",
          isBest: false,
          feedback:
            "Review this choice. Candidate 1 is clinically tempting, but the pseudogene and mapping evidence make it too technically fragile to lead the case without further read-level or orthogonal review.",
        },
        {
          id: "escalate-candidate-3",
          label: "B",
          decision:
            "Escalate Candidate 3 for formal review, while documenting Candidate 1 as a technically fragile pseudogene-region finding.",
          isBest: true,
          feedback:
            "Best decision. Candidate 3 has the strongest overall evidence pattern. Candidate 1 should not be ignored, but its mapping concerns must be made visible rather than treated as a reliable lead finding.",
        },
        {
          id: "hold-all-candidates",
          label: "C",
          decision:
            "Hold all findings because the pseudogene warning in one candidate means the full case cannot be interpreted safely.",
          isBest: false,
          feedback:
            "Review this choice. The pseudogene warning affects Candidate 1 specifically. Candidate 3 has strong independent evidence and should still be taken forward through the appropriate review pathway.",
        },
      ],
    },

    writtenSummary: {
      prompt:
        "Write a short trainee-level handover summary explaining the strongest candidate, the pseudogene/mapping concern, why the other findings are weaker, and the safest next step.",
      checklist: [
        "Names Candidate 3 as the strongest current finding.",
        "Explains that Candidate 3 contains two MYOSTR7 variants, one inherited from each parent.",
        "Mentions that both Candidate 3 variants are loss-of-function or likely loss-of-function consequences.",
        "Links MYOSTR7 to a recessive childhood-onset myopathy phenotype.",
        "Mentions that Candidate 3 has strong technical evidence and no pseudogene warning.",
        "Explains why Candidate 1 is tempting but technically fragile because of pseudogene/mapping concerns.",
        "Explains why Candidate 2 is technically real but clinically lower priority.",
        "Explains why Candidate 4 is weakened by population frequency, observed homozygotes, and phenotype mismatch.",
        "Avoids calling Candidate 3 a final diagnosis without formal review and sign-off.",
      ],
      modelAnswer:
        "Candidate 3 is the strongest current finding for formal review. It contains two rare variants in MYOSTR7, a gene associated with autosomal recessive childhood-onset myopathy where biallelic loss-of-function is a known mechanism. One variant is a maternally inherited canonical splice acceptor variant and the other is a paternally inherited frameshift variant, supporting a possible compound heterozygous explanation. The proband’s delayed motor milestones, progressive muscle weakness, raised creatine kinase, and exercise intolerance fit the reported phenotype, and both variants have strong technical evidence without pseudogene or mapping warnings. Candidate 1 is clinically tempting because it is a stop-gained variant in a plausible dominant muscle disease gene, but it is technically fragile because of pseudogene similarity, low mapping quality, weak allele balance, read-end clustering, soft-clipping, and partial alignment of supporting reads to pseudogene-like sequence. Candidate 2 appears technically real but is lower priority because it is inherited from an unaffected father, has limited gene-disease evidence, and has weaker mechanism support. Candidate 4 has a recessive-looking genotype, but the population frequency, observed homozygotes, and mild/adult-onset phenotype mismatch make it much less plausible as the main explanation. The safest next step is to document this reasoning, prioritise Candidate 3 for formal review, and flag Candidate 1 for technical read-level review rather than over-prioritising it.",
    },
  },

  reasoningScorecard: [
    {
      category: "Mapping-risk recognition",
      maxScore: 2,
      expectation:
        "Recognises that pseudogene similarity, segmental duplication context, low mapping quality, soft-clipping, and read-end clustering can weaken an apparently important variant.",
    },
    {
      category: "Technical confidence",
      maxScore: 2,
      expectation:
        "Uses allele balance, genotype quality, mapping quality, strand/read-position pattern, and local genomic context to judge whether a call is reliable.",
    },
    {
      category: "Recessive candidate reasoning",
      maxScore: 2,
      expectation:
        "Recognises why two rare variants in a recessive myopathy gene, inherited one from each parent, can form a strong compound heterozygous candidate.",
    },
    {
      category: "Candidate prioritisation",
      maxScore: 2,
      expectation:
        "Prioritises the candidate with the best convergence across phenotype, inheritance, mechanism, rarity, technical confidence, and mapping reliability.",
    },
    {
      category: "Safe escalation",
      maxScore: 2,
      expectation:
        "Escalates the strongest candidate for formal review while documenting pseudogene-related uncertainty and other reasons for deprioritisation.",
    },
  ],

  patient: {
    age: 11,
    sex: "Male",
  },

  referralReason:
    "An 11-year-old boy has been referred for rare disease genome analysis because of progressive muscle weakness, exercise intolerance, mildly raised creatine kinase, and delayed motor milestones.",

  testType: "Rare disease trio genome sequencing",

  familyStructure:
    "The proband and both biological parents have been tested. Both parents are reportedly unaffected. There is no known consanguinity.",

  history: [
    "Delayed motor milestones in early childhood",
    "Progressive proximal muscle weakness",
    "Exercise intolerance",
    "Mildly raised creatine kinase",
    "No known previous molecular diagnosis",
    "No similar neuromuscular disorder reported in the family",
  ],

  phenotype: [
    "Progressive muscle weakness",
    "Exercise intolerance",
    "Delayed motor milestones",
    "Raised creatine kinase",
  ],

  familyHistory:
    "Both parents are reportedly unaffected. No known family history of childhood-onset muscle weakness, exercise intolerance, or a similar neuromuscular presentation.",

  serviceContext: [
    "The analysis is being performed in a rare disease service context.",
    "The phenotype suggests a possible inherited neuromuscular disorder.",
    "One candidate lies in a gene with a highly similar pseudogene region, so mapping confidence is central to the review.",
    "Your task is to decide which candidate is most reliable after considering raw read evidence, mapping context, inheritance, mechanism, and phenotype fit.",
  ],

  candidateFindings: [
    {
      id: "candidate-1",
      label: "Candidate 1",
      gene: "MUSCLEP1",
      variant: "chr12:88421990 C>T",
      zygosity: "Heterozygous",
      consequence: "stop_gained",
      inheritanceSignal: "Apparent de novo, but mapping uncertain",
      clinicalFit:
        "MUSCLEP1 is associated with an autosomal dominant muscle disorder, and the phenotype overlap looks plausible. However, the variant lies in a region with high similarity to a known pseudogene.",
      rawEvidence: `GENE: MUSCLEP1
Known disease association: autosomal dominant childhood-onset myopathy
Reported inheritance: autosomal dominant
Known mechanism: loss-of-function reported in affected individuals

Variant:
chr12:88421990 C>T
Transcript: NM_800001.2
HGVS: c.1096C>T p.(Arg366*)
Consequence: stop_gained
Genomic context: exon with high sequence similarity to pseudogene MUSCLEP1P

VCF-style fields:
QUAL=46
FILTER=PASS
INFO: DP=31;MQ=28;QD=1.5;SOR=5.8
FORMAT: GT:AD:DP:GQ

Proband: 0/1:25,6:31:44
Mother: 0/0:35,1:36:72
Father: 0/0:32,0:32:99

Read-level notes:
ALT reads mostly have lower mapping quality
ALT reads cluster in reads with multiple mismatches
5 of 6 ALT reads occur near read ends
Soft-clipping present around several supporting reads
Several ALT-supporting reads also partially align to pseudogene-like sequence
Local segmental duplication / pseudogene warning present
Manual read-level review strongly recommended

Population:
gnomAD AF = not observed
gnomAD allele count = 0

Constraint:
LOEUF = 0.29
pLI = 0.94

ClinVar-style summary:
No exact matching variant record found in local summary
Truncating variants in MUSCLEP1 have been submitted in affected individuals, but this exon is flagged as technically difficult because of pseudogene similarity`,
      concern:
        "This looks clinically tempting because it is a stop-gained variant in a plausible gene, but the raw evidence is technically fragile. Pseudogene similarity, low mapping quality, weak allele balance, read-end clustering, and soft-clipping all reduce confidence.",
    },
    {
      id: "candidate-2",
      label: "Candidate 2",
      gene: "MYOFIT4",
      variant: "chr5:19002244 G>A",
      zygosity: "Heterozygous",
      consequence: "missense_variant",
      inheritanceSignal: "Inherited from unaffected father",
      clinicalFit:
        "MYOFIT4 has a possible neuromuscular association, but the gene-disease evidence is limited and the variant is inherited from an unaffected parent.",
      rawEvidence: `GENE: MYOFIT4
Known disease association: possible autosomal dominant muscle disorder
Reported inheritance: autosomal dominant proposed in limited reports
Known mechanism: uncertain; missense mechanism not well established

Variant:
chr5:19002244 G>A
Transcript: NM_800002.1
HGVS: c.742G>A p.(Gly248Ser)
Consequence: missense_variant
Protein domain: outside known functional hotspot in local summary

VCF-style fields:
QUAL=622
FILTER=PASS
INFO: DP=46;MQ=60;QD=13.5;SOR=0.77
FORMAT: GT:AD:DP:GQ

Proband: 0/1:24,22:46:99
Mother: 0/0:39,0:39:99
Father: 0/1:20,21:41:99

Read-level notes:
ALT reads seen on both forward and reverse strands
ALT reads distributed across read positions
No obvious low-complexity sequence flag
No pseudogene warning
No concerning soft-clipping around the variant

Population:
gnomAD AF = 0.0002
gnomAD allele count = 52
No homozygotes observed in local summary

Constraint:
LOEUF = 0.69
pLI = 0.21

ClinVar-style summary:
No exact matching pathogenic record found in local summary
Gene-disease relationship remains limited/moderate in available summary`,
      concern:
        "This is technically convincing as a variant call, but it is clinically weaker because it is inherited from an unaffected parent, has limited gene-disease evidence, and has weaker mechanism support.",
    },
    {
      id: "candidate-3",
      label: "Candidate 3",
      gene: "MYOSTR7",
      variant: "chr2:77190433 A>G",
      zygosity: "Compound heterozygous candidate",
      consequence: "splice_acceptor_variant + frameshift_variant",
      inheritanceSignal: "One variant inherited from each parent",
      clinicalFit:
        "MYOSTR7 is associated with an autosomal recessive childhood-onset myopathy. Reported features include delayed motor milestones, progressive muscle weakness, raised creatine kinase, and exercise intolerance. Biallelic loss-of-function is a known mechanism.",
      rawEvidence: `GENE: MYOSTR7
Known disease association: autosomal recessive childhood-onset myopathy
Reported inheritance: autosomal recessive
Known mechanism: biallelic loss-of-function

Variant A:
chr2:77190433 A>G
Transcript: NM_800003.4
HGVS: c.889-2A>G
Consequence: splice_acceptor_variant
Splice position: canonical -2 acceptor site
Predicted effect: likely acceptor splice-site disruption

VCF-style fields:
QUAL=811
FILTER=PASS
INFO: DP=50;MQ=60;QD=16.2;SOR=0.70
FORMAT: GT:AD:DP:GQ

Proband: 0/1:26,24:50:99
Mother: 0/1:23,22:45:99
Father: 0/0:42,0:42:99

Read-level notes for Variant A:
ALT reads seen on both forward and reverse strands
ALT reads distributed across read positions
No obvious local mapping warning
No pseudogene warning
No concerning soft-clipping around the variant

Population for Variant A:
gnomAD AF = not observed
gnomAD allele count = 0

Variant B:
chr2:77211890 T>TA
Transcript: NM_800003.4
HGVS: c.1420dup p.(Ser474Lysfs*9)
Consequence: frameshift_variant
Predicted effect: premature termination codon

VCF-style fields:
QUAL=690
FILTER=PASS
INFO: DP=44;MQ=60;QD=15.7;SOR=0.82
FORMAT: GT:AD:DP:GQ

Proband: 0/1:21,23:44:99
Mother: 0/0:38,0:38:99
Father: 0/1:19,21:40:99

Read-level notes for Variant B:
ALT reads seen on both forward and reverse strands
ALT reads distributed across read positions
Indel represented consistently across local reads
No low-complexity sequence flag
No pseudogene or segmental duplication warning

Population for Variant B:
gnomAD AF = 0.000004
gnomAD allele count = 1
No homozygotes observed in local summary

Constraint:
LOEUF = 0.34
pLI = 0.72

ClinVar-style summary:
No exact matching variant records found in local summary
Other biallelic loss-of-function variants in MYOSTR7 have been submitted as pathogenic/likely pathogenic in affected individuals`,
      concern:
        "This is the strongest current candidate because the phenotype fits, the gene has a recessive loss-of-function mechanism, the two variants are rare, technically convincing, and appear to be inherited one from each parent.",
    },
    {
      id: "candidate-4",
      label: "Candidate 4",
      gene: "CKHIGH2",
      variant: "chr9:110440911 C>G",
      zygosity: "Homozygous",
      consequence: "missense_variant",
      inheritanceSignal: "Both parents heterozygous carriers",
      clinicalFit:
        "CKHIGH2 is associated with a mild adult-onset muscle enzyme elevation phenotype rather than childhood-onset progressive weakness. The variant is also relatively common in population data.",
      rawEvidence: `GENE: CKHIGH2
Known disease association: mild adult-onset hyperCKaemia
Reported inheritance: autosomal recessive
Known mechanism: uncertain; some missense variants reported

Variant:
chr9:110440911 C>G
Transcript: NM_800004.2
HGVS: c.1004C>G p.(Pro335Arg)
Consequence: missense_variant

VCF-style fields:
QUAL=980
FILTER=PASS
INFO: DP=55;MQ=60;QD=17.8;SOR=0.74
FORMAT: GT:AD:DP:GQ

Proband: 1/1:0,55:55:99
Mother: 0/1:25,24:49:99
Father: 0/1:23,25:48:99

Read-level notes:
ALT reads in proband seen on both forward and reverse strands
Parental heterozygous calls have balanced allele support
No obvious local mapping warning
No soft-clipping concern

Population:
gnomAD AF = 0.009
gnomAD allele count = 2400
Homozygotes observed in population summary = 11

Constraint:
LOEUF = 0.91
pLI = 0.02

ClinVar-style summary:
No exact matching pathogenic record found in local summary
Gene association is primarily mild/adult-onset in available summary`,
      concern:
        "This is technically convincing and has a recessive-looking carrier pattern, but the phenotype fit and population evidence make it much less plausible as the main explanation for this child’s presentation.",
    },
  ],

  decisionCheckpoints: [
    {
      id: "checkpoint-1",
      title: "Checkpoint 1 — Recognise pseudogene mapping risk",
      context:
        "Candidate 1 is a stop-gained variant in a plausible muscle disease gene, but the raw evidence shows MQ=28, AD 25,6, GQ 44, QD 1.5, SOR 5.8, read-end clustering, soft-clipping, and pseudogene similarity.",
      question:
        "What is the safest interpretation of Candidate 1?",
      options: [
        {
          label: "A",
          text: "Treat it as the lead candidate because a stop-gained consequence in a plausible gene should outweigh mapping concerns.",
          isCorrect: false,
          feedback:
            "Not quite. A stop-gained consequence can be important, but it does not override weak mapping evidence and pseudogene-related uncertainty.",
        },
        {
          label: "B",
          text: "Treat it as clinically tempting but technically fragile, requiring careful read-level or orthogonal review before prioritisation.",
          isCorrect: true,
          feedback:
            "Correct. Candidate 1 has multiple mapping and read-level warning signs. The apparent variant could be unreliable.",
        },
        {
          label: "C",
          text: "Treat it as confirmed because FILTER=PASS means the caller has already resolved pseudogene-related ambiguity.",
          isCorrect: false,
          feedback:
            "Not quite. FILTER=PASS does not remove the need for review in difficult mapping or pseudogene regions.",
        },
      ],
      teachingPoint:
        "Pseudogene and segmental duplication regions can create convincing-looking but unreliable calls. Mapping evidence must be reviewed carefully.",
    },
    {
      id: "checkpoint-2",
      title: "Checkpoint 2 — Identify the strongest candidate",
      context:
        "Candidate 3 has two rare variants in MYOSTR7, a recessive myopathy gene. One variant is maternally inherited and one is paternally inherited. Both variants have strong technical evidence and loss-of-function consequences.",
      question:
        "Which candidate should be prioritised first for further review?",
      options: [
        {
          label: "A",
          text: "Candidate 1, because it is a stop-gained variant in a plausible dominant gene despite the difficult mapping context.",
          isCorrect: false,
          feedback:
            "Not quite. Candidate 1 is undermined by pseudogene and mapping concerns.",
        },
        {
          label: "B",
          text: "Candidate 4, because a homozygous genotype should automatically outrank a compound heterozygous candidate.",
          isCorrect: false,
          feedback:
            "Not quite. Candidate 4 has major phenotype and population-frequency concerns.",
        },
        {
          label: "C",
          text: "Candidate 3, because phenotype, recessive mechanism, parental phase, rarity, and technical evidence align best.",
          isCorrect: true,
          feedback:
            "Correct. Candidate 3 has the strongest convergence across clinical, inheritance, mechanism, population, and technical evidence.",
        },
      ],
      teachingPoint:
        "The strongest candidate is the one with the best total evidence pattern, not the one with the most dramatic single annotation.",
    },
    {
      id: "checkpoint-3",
      title: "Checkpoint 3 — Technical reality versus clinical relevance",
      context:
        "Candidate 2 is technically convincing but inherited from an unaffected father, has limited gene-disease evidence, weaker mechanism support, and only broad phenotype overlap.",
      question:
        "What does Candidate 2 illustrate?",
      options: [
        {
          label: "A",
          text: "A technically real variant can still be lower priority if inheritance, mechanism, and phenotype fit are weak.",
          isCorrect: true,
          feedback:
            "Correct. Technical confidence tells you the variant call may be real. It does not prove the variant explains the patient’s condition.",
        },
        {
          label: "B",
          text: "Inherited variants from unaffected parents should usually be treated as false-positive variant calls.",
          isCorrect: false,
          feedback:
            "Not quite. Inherited variants can be real and sometimes relevant. The issue is whether they fit the disease model and clinical context.",
        },
        {
          label: "C",
          text: "A technically clean single variant should outrank a compound heterozygous finding with two variants.",
          isCorrect: false,
          feedback:
            "Not quite. Candidate strength depends on the whole evidence pattern.",
        },
      ],
      teachingPoint:
        "Technical confidence and clinical relevance are separate questions. Both must be considered.",
    },
    {
      id: "checkpoint-4",
      title: "Checkpoint 4 — Population and phenotype mismatch",
      context:
        "Candidate 4 is homozygous with both parents as carriers, but the condition is mainly mild/adult-onset in the local summary, gnomAD AF is 0.009, and 11 homozygotes are observed in population data.",
      question:
        "Why is Candidate 4 weaker for this child’s presentation?",
      options: [
        {
          label: "A",
          text: "Because homozygous genotypes are not relevant to recessive disease unless the variant is de novo.",
          isCorrect: false,
          feedback:
            "Not quite. Homozygous variants can be relevant in recessive disease, but the variant still needs phenotype and population plausibility.",
        },
        {
          label: "B",
          text: "Because the phenotype severity, age of onset, and population evidence do not fit a severe childhood-onset rare myopathy explanation.",
          isCorrect: true,
          feedback:
            "Correct. The carrier pattern looks recessive, but population frequency, observed homozygotes, and phenotype mismatch weaken the candidate.",
        },
        {
          label: "C",
          text: "Because high-quality homozygous calls are less reliable than heterozygous calls in genome sequencing data.",
          isCorrect: false,
          feedback:
            "Not quite. The technical call may be real. The issue is clinical plausibility.",
        },
      ],
      teachingPoint:
        "A recessive-looking genotype can still be weak if the disease association, severity, age of onset, and population frequency do not fit.",
    },
    {
      id: "checkpoint-5",
      title: "Checkpoint 5 — Safe service-style next step",
      context:
        "Candidate 3 is the best-supported finding. Candidate 1 is technically fragile because of pseudogene/mapping concerns. Candidate 2 is technically real but clinically weaker. Candidate 4 is too common and phenotype-mismatched.",
      question:
        "What is the safest next step?",
      options: [
        {
          label: "A",
          text: "Prioritise Candidate 1 because pseudogene regions are more likely to contain variants missed by routine review.",
          isCorrect: false,
          feedback:
            "Not quite. Difficult regions can contain true findings, but they require caution and review. They should not be prioritised just because they are difficult.",
        },
        {
          label: "B",
          text: "Hold Candidate 3 because compound heterozygous findings are less reliable than single dominant variant findings.",
          isCorrect: false,
          feedback:
            "Not quite. Compound heterozygous findings can be strong when inheritance, mechanism, phenotype, rarity, and technical evidence align.",
        },
        {
          label: "C",
          text: "Prioritise Candidate 3 for review, document Candidate 1 mapping concerns, and explain why Candidates 2 and 4 are lower priority.",
          isCorrect: true,
          feedback:
            "Correct. This is safe and reviewable. It prioritises the strongest candidate while documenting the reasons other candidates were deprioritised.",
        },
      ],
      teachingPoint:
        "Safe practice means not only finding the strongest candidate, but documenting why tempting alternatives are weaker.",
    },
  ],

  finalReflection:
    "A safe trainee-level conclusion would be that Candidate 3 is the strongest current candidate for review because the phenotype fits a recessive childhood-onset myopathy, the two rare loss-of-function variants are in the same gene, one appears maternally inherited and one paternally inherited, and the raw technical evidence is strong. Candidate 1 is clinically tempting because it is a stop-gained variant in a plausible gene, but it should be treated cautiously because the call lies in a pseudogene-like region and has weak mapping, allele balance, strand, read-end, and soft-clipping evidence. Candidate 2 appears technically real but is lower priority because inheritance, mechanism, and phenotype fit are weaker. Candidate 4 has a recessive-looking genotype but is weakened by population frequency, observed homozygotes, and phenotype mismatch. The safest next step is to document this reasoning, prioritise Candidate 3 for appropriate review, and flag Candidate 1 for technical read-level review rather than over-prioritising it.",
};