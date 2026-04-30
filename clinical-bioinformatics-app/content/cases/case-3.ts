export const case3 = {
  id: "case-3",
  slug: "compound-heterozygous-recessive-case",
  title: "Case 3: Compound heterozygous recessive case",
  level: "Beginner",
  summary:
    "A recessive rare disease case focused on recognising possible compound heterozygosity, checking parental inheritance, and understanding why phase matters.",

  visualisationExampleId: null,

  assessmentFocus: [
    "Compound heterozygous reasoning",
    "Recessive inheritance interpretation",
    "Phase and parental origin",
    "Variant consequence and mechanism",
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
        "Rank the findings from strongest to weakest based on recessive inheritance fit, phase evidence, phenotype overlap, gene mechanism, variant consequence, technical confidence, and whether each finding should drive the case conclusion.",
      correctOrder: ["candidate-1", "candidate-2", "candidate-3"],
      explanation:
        "Candidate 1 is strongest because it contains two rare variants in the same recessive neurological disease gene, with one inherited from each parent, plausible phenotype overlap, and technically convincing calls. Candidate 2 is weaker because although there are two variants in a recessive gene and the calls are technically plausible, both appear maternally inherited, so they may not create a biallelic genotype. Candidate 3 is weakest because it is a single inherited heterozygous variant in a dominantly associated adult-onset ataxia gene, with weaker fit to the child’s presentation and inheritance context.",
    },

    escalationDecision: {
      prompt:
        "Choose the safest next action for the strongest finding in this case.",
      options: [
        {
          id: "report-candidate-1-now",
          label: "A",
          decision:
            "Treat Candidate 1 as diagnostic because two rare variants were found in the same recessive gene and one is stop-gained.",
          isBest: false,
          feedback:
            "Review this choice. Candidate 1 is the strongest finding, but two variants in a recessive gene are not automatically diagnostic. The missense variant, phase, phenotype fit, gene mechanism, and reporting standards still need formal review.",
        },
        {
          id: "escalate-candidate-2",
          label: "B",
          decision:
            "Escalate Candidate 2 first because it has two technically clean variants in the same recessive gene.",
          isBest: false,
          feedback:
            "Review this choice. Candidate 2 has two plausible calls, but both appear to come from the same parent, which weakens the argument for a compound heterozygous recessive explanation.",
        },
        {
          id: "escalate-candidate-1",
          label: "C",
          decision:
            "Escalate Candidate 1 for formal review, documenting the likely in-trans inheritance and the need to assess the missense variant carefully.",
          isBest: true,
          feedback:
            "Best decision. Candidate 1 is the most plausible compound heterozygous candidate, but the conclusion should remain proportionate because the missense variant and full interpretation still need review.",
        },
      ],
    },

    writtenSummary: {
      prompt:
        "Write a short trainee-level handover summary explaining the strongest candidate, the evidence supporting possible compound heterozygosity, why the other findings are weaker, and what still needs review.",
      checklist: [
        "Names Candidate 1 as the strongest current finding.",
        "Explains that the two ATAXN5 variants appear to be inherited from different parents.",
        "Mentions that this supports possible compound heterozygosity in a recessive disease gene.",
        "Uses the phenotype overlap with ataxia, neuropathy, learning difficulties, and developmental delay.",
        "Mentions that Variant A is stop-gained and Variant B is missense.",
        "States that the missense variant still needs careful evidence review.",
        "Explains why Candidate 2 is weaker because both variants appear maternally inherited.",
        "Explains why Candidate 3 is weaker because it is inherited from an unaffected parent and has poorer phenotype/onset fit.",
        "Avoids calling Candidate 1 a final diagnosis without formal review and sign-off.",
      ],
      modelAnswer:
        "Candidate 1 is the strongest current finding for formal review. It contains two rare heterozygous variants in ATAXN5, a gene associated with an autosomal recessive childhood-onset ataxia-neuropathy syndrome. Variant A is a maternally inherited stop-gained variant and Variant B is a paternally inherited missense variant, which supports possible compound heterozygosity with variants likely to be in trans. The proband’s progressive ataxia, peripheral neuropathy, learning difficulties, and developmental delay provide plausible phenotype overlap, and the raw evidence for both calls is technically reassuring. However, this should not be treated as an automatic diagnosis because the missense variant still needs careful assessment of predicted effect, conservation, previous evidence, population data, and fit with the known gene mechanism. Candidate 2 is weaker because both variants appear maternally inherited and may be in cis rather than creating a biallelic genotype. Candidate 3 is technically convincing but lower priority because it is inherited from an unaffected father and the gene is mainly linked to adult-onset dominant ataxia. The safest next step is to document the compound heterozygous rationale and escalate Candidate 1 for appropriate clinical laboratory review.",
    },
  },

  reasoningScorecard: [
    {
      category: "Recessive inheritance reasoning",
      maxScore: 2,
      expectation:
        "Recognises that a recessive explanation usually requires two relevant variants affecting both gene copies.",
    },
    {
      category: "Phase interpretation",
      maxScore: 2,
      expectation:
        "Uses parental inheritance to distinguish variants likely to be in trans from variants that may be inherited together from one parent.",
    },
    {
      category: "Candidate prioritisation",
      maxScore: 2,
      expectation:
        "Prioritises the candidate with the best overall fit across phenotype, inheritance, phase, consequence, mechanism, rarity, and technical confidence.",
    },
    {
      category: "Evidence interpretation",
      maxScore: 2,
      expectation:
        "Recognises that a stop-gained plus missense combination can be plausible, but the missense variant still requires careful evidence review.",
    },
    {
      category: "Safe escalation",
      maxScore: 2,
      expectation:
        "Escalates the strongest compound heterozygous candidate for formal review while avoiding automatic diagnostic wording.",
    },
  ],

  patient: {
    age: 10,
    sex: "Female",
  },

  referralReason:
    "A 10-year-old girl has been referred for rare disease genome analysis because of progressive ataxia, learning difficulties, peripheral neuropathy, and mild developmental delay.",

  testType: "Rare disease trio genome sequencing",

  familyStructure:
    "The proband and both biological parents have been tested. Both parents are reportedly unaffected. There is no known consanguinity.",

  history: [
    "Early motor delay with later progressive gait instability",
    "Learning difficulties requiring school support",
    "Peripheral neuropathy suspected on clinical examination",
    "No known previous molecular diagnosis",
    "No similarly affected relatives reported",
  ],

  phenotype: [
    "Progressive ataxia",
    "Peripheral neuropathy",
    "Learning difficulties",
    "Mild developmental delay",
  ],

  familyHistory:
    "Parents are unaffected. No known family history of a similar neurological condition. No known consanguinity has been reported.",

  serviceContext: [
    "The analysis is being performed in a rare disease service context.",
    "The phenotype suggests a possible inherited neurological disorder.",
    "The filtering workflow has returned candidate variants in genes associated with recessive neurological disease.",
    "Your task is to decide whether the evidence supports a possible compound heterozygous explanation and what still needs review.",
  ],

  candidateFindings: [
    {
      id: "candidate-1",
      label: "Candidate 1",
      gene: "ATAXN5",
      variant: "Two variants in ATAXN5",
      zygosity: "Compound heterozygous candidate",
      consequence: "stop_gained + missense_variant",
      inheritanceSignal: "One variant inherited from each parent",
      clinicalFit:
        "ATAXN5 is associated with an autosomal recessive childhood-onset neurological disorder including ataxia, neuropathy, and developmental delay. The phenotype overlap is plausible.",
      rawEvidence: `GENE: ATAXN5
Known disease association: childhood-onset ataxia-neuropathy syndrome
Reported inheritance: autosomal recessive
Known mechanism: biallelic loss-of-function or damaging compound heterozygous variants

Variant A:
chr5:118220441 C>T
Transcript: NM_200001.2
HGVS: c.742C>T p.(Arg248*)
Consequence: stop_gained
Predicted effect: premature termination codon

VCF-style fields:
QUAL=698
FILTER=PASS
INFO: DP=48;MQ=60;QD=14.5;SOR=0.76
FORMAT: GT:AD:DP:GQ

Proband: 0/1:24,24:48:99
Mother: 0/1:22,20:42:99
Father: 0/0:39,0:39:99

Read-level notes:
ALT reads seen on both forward and reverse strands
ALT reads distributed across read positions
No local low-complexity warning
No obvious pseudogene or segmental duplication warning

Population:
gnomAD AF = 0.000004
gnomAD allele count = 1
No homozygotes observed in local summary

Variant B:
chr5:118245009 G>A
Transcript: NM_200001.2
HGVS: c.1289G>A p.(Gly430Asp)
Consequence: missense_variant
Protein domain: conserved catalytic-like domain

VCF-style fields:
QUAL=412
FILTER=PASS
INFO: DP=43;MQ=60;QD=9.6;SOR=0.88
FORMAT: GT:AD:DP:GQ

Proband: 0/1:20,23:43:99
Mother: 0/0:36,0:36:99
Father: 0/1:19,21:40:99

Read-level notes:
ALT reads seen on both forward and reverse strands
ALT reads distributed across read positions
No obvious local mapping warning

Population:
gnomAD AF = 0.000008
gnomAD allele count = 2
No homozygotes observed in local summary

Constraint:
LOEUF = 0.44
pLI = 0.68

ClinVar-style summary:
Variant A: no exact matching local summary record
Variant B: no exact matching local summary record
Gene has submitted biallelic pathogenic/likely pathogenic variants in affected individuals`,
      concern:
        "This is the strongest current candidate because the two variants are in the same recessive gene, one appears maternally inherited and the other paternally inherited, and the phenotype fits. The missense variant still needs careful review of predicted effect, conservation, previous evidence, and gene mechanism.",
    },
    {
      id: "candidate-2",
      label: "Candidate 2",
      gene: "NEUROX8",
      variant: "Two variants in NEUROX8",
      zygosity: "Two heterozygous variants",
      consequence: "missense_variant + missense_variant",
      inheritanceSignal: "Both variants inherited from mother",
      clinicalFit:
        "NEUROX8 has a reported recessive neurological disease association, but the two variants appear to be inherited from the same parent.",
      rawEvidence: `GENE: NEUROX8
Known disease association: autosomal recessive neurodevelopmental disorder
Reported inheritance: autosomal recessive
Known mechanism: biallelic damaging variants

Variant A:
chr11:60291180 T>C
Transcript: NM_200002.1
HGVS: c.511T>C p.(Leu171Pro)
Consequence: missense_variant

VCF-style fields:
QUAL=301
FILTER=PASS
INFO: DP=39;MQ=60;QD=7.7;SOR=0.91
FORMAT: GT:AD:DP:GQ

Proband: 0/1:18,21:39:94
Mother: 0/1:20,19:39:92
Father: 0/0:35,0:35:99

Variant B:
chr11:60294012 A>G
Transcript: NM_200002.1
HGVS: c.944A>G p.(Tyr315Cys)
Consequence: missense_variant

VCF-style fields:
QUAL=276
FILTER=PASS
INFO: DP=36;MQ=60;QD=7.6;SOR=0.84
FORMAT: GT:AD:DP:GQ

Proband: 0/1:17,19:36:91
Mother: 0/1:16,20:36:90
Father: 0/0:32,0:32:99

Read-level notes:
Both variants have balanced allele support
Both variants have good mapping quality
No obvious local technical warning

Population:
Variant A gnomAD AF = 0.00003; allele count = 8
Variant B gnomAD AF = 0.00002; allele count = 6
No homozygotes observed in local summary

Constraint:
LOEUF = 0.62
pLI = 0.22

ClinVar-style summary:
No exact matching records found in local summary`,
      concern:
        "The variants appear technically plausible, but both are inherited from the same parent. Without evidence they are in trans, this is weaker for a recessive diagnosis.",
    },
    {
      id: "candidate-3",
      label: "Candidate 3",
      gene: "DOMN2",
      variant: "chr1:88014222 C>A",
      zygosity: "Heterozygous",
      consequence: "missense_variant",
      inheritanceSignal: "Inherited from unaffected father",
      clinicalFit:
        "DOMN2 is associated with an autosomal dominant ataxia condition, but the inheritance from an unaffected parent and weak phenotype specificity make this a lower-priority candidate.",
      rawEvidence: `GENE: DOMN2
Known disease association: autosomal dominant adult-onset ataxia
Reported inheritance: autosomal dominant
Known mechanism: missense variants in specific recurrent regions

Variant:
chr1:88014222 C>A
Transcript: NM_200003.4
HGVS: c.1001C>A p.(Ala334Asp)
Consequence: missense_variant

VCF-style fields:
QUAL=502
FILTER=PASS
INFO: DP=45;MQ=60;QD=11.1;SOR=0.69
FORMAT: GT:AD:DP:GQ

Proband: 0/1:23,22:45:99
Mother: 0/0:40,0:40:99
Father: 0/1:21,18:39:99

Read-level notes:
ALT reads seen on both forward and reverse strands
ALT reads distributed across read positions
No obvious local mapping warning

Population:
gnomAD AF = 0.00009
gnomAD allele count = 25

Constraint:
LOEUF = 0.75
pLI = 0.18

ClinVar-style summary:
No exact matching variant record found in local summary
Gene is primarily linked to later-onset ataxia in submitted summaries`,
      concern:
        "This is technically convincing as a variant call, but it is less compelling because it is inherited from an unaffected father, the phenotype is not a strong match, and the gene association is more adult-onset.",
    },
  ],

  decisionCheckpoints: [
    {
      id: "checkpoint-1",
      title: "Checkpoint 1 — Recognise the recessive model",
      context:
        "The phenotype suggests a possible inherited neurological disorder. The parents are unaffected. Candidate 1 contains two heterozygous variants in ATAXN5, a gene associated with autosomal recessive disease.",
      question:
        "What inheritance question should you ask first for Candidate 1?",
      options: [
        {
          label: "A",
          text: "Are the two variants likely to be in trans, with one inherited from each parent?",
          isCorrect: true,
          feedback:
            "Correct. For a recessive compound heterozygous candidate, the key question is whether the two variants affect different copies of the gene.",
        },
        {
          label: "B",
          text: "Is either variant absent from both parents, making the finding a possible de novo dominant result?",
          isCorrect: false,
          feedback:
            "Not quite. De novo status can matter in some contexts, but for a recessive compound heterozygous model, parental inheritance and phase are central.",
        },
        {
          label: "C",
          text: "Does the gene name or broad disease label sound similar enough to the patient’s phenotype?",
          isCorrect: false,
          feedback:
            "Not quite. Gene relevance matters, but the first inheritance question is whether the variants could form a biallelic genotype.",
        },
      ],
      teachingPoint:
        "For compound heterozygous recessive disease, two variants in the same gene are not enough. You need to know whether they are likely in trans.",
    },
    {
      id: "checkpoint-2",
      title: "Checkpoint 2 — Interpret Candidate 1",
      context:
        "Candidate 1 has Variant A inherited from the mother and Variant B inherited from the father. Both calls have good depth, balanced allele support, good genotype quality, and good mapping quality.",
      question:
        "What is the safest interpretation of Candidate 1 at this stage?",
      options: [
        {
          label: "A",
          text: "It is automatically diagnostic because two rare variants were found in the same recessive gene.",
          isCorrect: false,
          feedback:
            "Not quite. Two variants in the same gene are not automatically diagnostic. You still need phase, consequence, mechanism, phenotype fit, population evidence, and review.",
        },
        {
          label: "B",
          text: "It should be dismissed because a missense variant cannot contribute to a recessive neurological disorder.",
          isCorrect: false,
          feedback:
            "Not quite. A missense variant can contribute to recessive disease, but it needs stronger supporting evidence than a clear loss-of-function variant.",
        },
        {
          label: "C",
          text: "It is a plausible compound heterozygous candidate for review, with the missense variant needing careful evidence assessment.",
          isCorrect: true,
          feedback:
            "Correct. The inheritance pattern supports possible variants in trans, the phenotype fits, and the technical evidence is reasonable. The missense variant still needs careful interpretation.",
        },
      ],
      teachingPoint:
        "A plausible compound heterozygous candidate is a strong reason for review, not an automatic final answer.",
    },
    {
      id: "checkpoint-3",
      title: "Checkpoint 3 — Why Candidate 2 is weaker",
      context:
        "Candidate 2 has two heterozygous missense variants in NEUROX8. Both variants appear technically plausible, but both are inherited from the mother.",
      question:
        "Why is Candidate 2 weaker as a recessive explanation?",
      options: [
        {
          label: "A",
          text: "Because both variants appear to be inherited from the same parent, so they may not affect both gene copies.",
          isCorrect: true,
          feedback:
            "Correct. If both variants are on the same parental copy, they may not create a biallelic recessive genotype.",
        },
        {
          label: "B",
          text: "Because technically clean variants are less useful than uncertain variants when assessing recessive disease.",
          isCorrect: false,
          feedback:
            "Not quite. The calls can be technically clean but still fail the inheritance model.",
        },
        {
          label: "C",
          text: "Because recessive disease can only be caused by homozygous variants, not by compound heterozygous variants.",
          isCorrect: false,
          feedback:
            "Not quite. Recessive disease can be caused by compound heterozygous variants if they affect different copies of the gene.",
        },
      ],
      teachingPoint:
        "Phase matters. Two variants in the same gene are much more compelling when one is inherited from each parent.",
    },
    {
      id: "checkpoint-4",
      title: "Checkpoint 4 — Separate technical confidence from clinical priority",
      context:
        "Candidate 3 is technically convincing, but it is inherited from an unaffected father and the gene is mainly linked to adult-onset dominant ataxia.",
      question:
        "What does Candidate 3 illustrate?",
      options: [
        {
          label: "A",
          text: "A technically reliable variant can still be clinically lower priority because inheritance and phenotype fit are weak.",
          isCorrect: true,
          feedback:
            "Correct. Technical reliability is only one part of prioritisation. A clean call still needs clinical and inheritance fit.",
        },
        {
          label: "B",
          text: "A technically reliable variant should usually outrank a compound heterozygous candidate with a missense component.",
          isCorrect: false,
          feedback:
            "Not quite. Technical confidence tells you whether the call is likely real; it does not prove relevance to the case.",
        },
        {
          label: "C",
          text: "An inherited variant from an unaffected parent should always be treated as a sequencing artefact.",
          isCorrect: false,
          feedback:
            "Not quite. Inherited variants can be real and relevant, but they must fit the disease model and family context.",
        },
      ],
      teachingPoint:
        "A technically real variant is not necessarily the most clinically relevant candidate.",
    },
    {
      id: "checkpoint-5",
      title: "Checkpoint 5 — Safe service-style next step",
      context:
        "Candidate 1 is the strongest possible compound heterozygous candidate. Candidate 2 is likely same-parent inherited. Candidate 3 is technically real but clinically weaker.",
      question:
        "What is the safest next step?",
      options: [
        {
          label: "A",
          text: "Report Candidate 1 as diagnostic immediately because the genotype includes one stop-gained variant.",
          isCorrect: false,
          feedback:
            "Not quite. The stop-gained variant is important, but a final interpretation requires full review of both variants, phase, phenotype, gene mechanism, and reporting standards.",
        },
        {
          label: "B",
          text: "Prioritise Candidate 2 because two variants in the same gene should outweigh parental-origin concerns.",
          isCorrect: false,
          feedback:
            "Not quite. Same-parent inheritance weakens a recessive compound heterozygous explanation because the variants may be in cis.",
        },
        {
          label: "C",
          text: "Prioritise Candidate 1 for review, document possible variants in trans, and note that the missense variant needs further interpretation.",
          isCorrect: true,
          feedback:
            "Correct. This is a safe and reviewable conclusion. It prioritises the best candidate while making uncertainty visible.",
        },
      ],
      teachingPoint:
        "The strongest trainee-level output is a clear, reviewable rationale: why Candidate 1 is prioritised, what supports it, and what still needs review.",
    },
  ],

  finalReflection:
    "A safe trainee-level conclusion would be that Candidate 1 is the strongest current candidate because it contains two rare heterozygous variants in a recessive neurological disease gene, with one variant inherited from each parent, plausible phenotype overlap, and reasonable technical support. This supports possible compound heterozygosity, but it does not automatically prove diagnosis. The missense variant requires careful evidence review, and the phase/inheritance should be documented clearly. Candidate 2 is weaker because both variants appear maternally inherited and may be in cis. Candidate 3 is technically convincing but clinically less compelling because it is inherited from an unaffected father and the gene association is less well matched to the child’s presentation. The safest next step is to prioritise Candidate 1 for appropriate review while documenting the remaining uncertainty.",
};