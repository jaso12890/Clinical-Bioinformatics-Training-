export const case26 = {
  id: "case-26",
  slug: "weak-gene-disease-validity-case",
  title: "Case 26: Weak gene-disease validity",
  level: "Intermediate",
  summary:
    "An interpretation-aware rare disease case focused on recognising that a relevant-looking gene is not enough when gene-disease validity is weak or uncertain.",

  visualisationExampleId: null,

  assessmentFocus: [
    "Gene-disease validity",
    "Emerging or disputed gene evidence",
    "Case-level evidence integration",
    "Incomplete recessive evidence",
    "Non-canonical splice caution",
    "Safe uncertainty and escalation",
  ],

  guidedTutorMode: {
    type: "static-rule-based",
    description:
      "Uses built-in hints, checkpoint feedback, model answers, and self-check criteria to support safe case reasoning.",
  },

  phase5Assessment: {
    candidateRanking: {
      prompt:
        "Rank the findings from strongest to weakest based on gene-disease validity, phenotype fit, inheritance, mechanism, population evidence, technical confidence, and whether any finding should drive the current case conclusion.",
      correctOrder: [
        "candidate-1",
        "candidate-2",
        "candidate-4",
        "candidate-3",
      ],
      explanation:
        "Candidate 1 is the most notable current finding because it is technically convincing, apparently de novo, absent from population data, and broadly phenotype-compatible, but it remains limited by weak/disputed gene-disease validity and uncertain mechanism. Candidate 2 is in a better-established recessive gene and has a strong splice consequence, but only one inherited heterozygous allele is identified, so it is incomplete as an explanation. Candidate 4 is apparently de novo and rare, but it combines weak gene-disease validity with weak non-canonical splice evidence. Candidate 3 is weakest because it is inherited from an unaffected father, relatively common for a severe rare disease model, and in a gene with limited broad evidence. None of these findings should be treated as a clean diagnostic candidate from the current evidence.",
    },

    escalationDecision: {
      prompt:
        "Choose the safest next action for this candidate set.",
      options: [
        {
          id: "force-candidate-1",
          label: "A",
          decision:
            "Prioritise Candidate 1 as the diagnostic explanation because it is de novo, technically strong, and absent from population data.",
          isBest: false,
          feedback:
            "Review this choice. Candidate 1 is notable, but weak/disputed gene-disease validity means it should not be treated as a confident diagnostic explanation from the current evidence.",
        },
        {
          id: "no-clean-candidate",
          label: "B",
          decision:
            "Document that there is no clean convincing candidate, explain the limitations of each finding, and escalate the uncertainty for appropriate review.",
          isBest: true,
          feedback:
            "Best decision. This case is about recognising when the evidence is not strong enough to force a diagnosis, especially when gene-disease validity is weak or the inheritance model is incomplete.",
        },
        {
          id: "prioritise-candidate-2",
          label: "C",
          decision:
            "Prioritise Candidate 2 as diagnostic because it is a canonical splice variant in a better-established recessive gene.",
          isBest: false,
          feedback:
            "Review this choice. Candidate 2 is credible as a single allele, but one inherited heterozygous variant does not currently explain a recessive biallelic condition without a second relevant allele.",
        },
      ],
    },

    writtenSummary: {
      prompt:
        "Write a short trainee-level handover summary explaining why there is no clean convincing candidate, what the main limitation is for each finding, and what the safest next step should be.",
      checklist: [
        "States that there is no clean convincing candidate from the current evidence.",
        "Mentions that Candidate 1 is technically convincing and apparently de novo.",
        "Explains that Candidate 1 is limited by weak/disputed PROPNDD1 gene-disease validity and uncertain mechanism.",
        "Mentions that Candidate 2 is a canonical splice variant in a better-established recessive gene.",
        "Explains that Candidate 2 is incomplete because only one inherited heterozygous allele is identified.",
        "Explains that Candidate 3 is weakened by limited gene-disease validity, inheritance from an unaffected father, and population frequency.",
        "Explains that Candidate 4 is weakened by both weak gene-disease validity and weak non-canonical splice evidence.",
        "Avoids treating de novo status alone as enough for diagnosis.",
        "Avoids treating a single recessive allele as a complete explanation.",
        "Recommends documentation and escalation for appropriate review rather than forced interpretation.",
      ],
      modelAnswer:
        "There is no clean convincing candidate from the current evidence. Candidate 1 is the most notable finding because it is technically convincing, apparently de novo, absent from population data, and broadly compatible with the phenotype, but PROPNDD1 has weak/disputed gene-disease validity and no clear established mechanism, so it should not be treated as a confident explanation. Candidate 2 is a technically convincing canonical splice variant in a better-established recessive gene, but only one inherited heterozygous allele is identified, so it does not currently provide a full biallelic explanation. Candidate 3 is technically real but weak because the gene-disease relationship is limited, the variant is inherited from an unaffected father, and the population frequency is too high for a severe rare disease model. Candidate 4 is technically plausible and apparently de novo, but it combines weak/emerging gene-disease evidence with weak non-canonical splice evidence. The safest next step is to document these limitations clearly and escalate for appropriate clinical/laboratory review rather than forcing a diagnosis.",
    },
  },

  reasoningScorecard: [
    {
      category: "Gene-disease validity",
      maxScore: 2,
      expectation:
        "Recognises that limited, emerging, or disputed gene-disease evidence reduces confidence even when a variant is rare, de novo, and technically convincing.",
    },
    {
      category: "Inheritance and mechanism reasoning",
      maxScore: 2,
      expectation:
        "Distinguishes a de novo variant in a weakly supported gene from a single-allele recessive finding and avoids treating either as automatically diagnostic.",
    },
    {
      category: "Evidence integration",
      maxScore: 2,
      expectation:
        "Combines gene validity, phenotype fit, mechanism, population frequency, inheritance, and technical confidence rather than relying on one attractive feature.",
    },
    {
      category: "Uncertainty handling",
      maxScore: 2,
      expectation:
        "Recognises that no candidate is currently strong enough and documents why each finding remains limited.",
    },
    {
      category: "Safe escalation",
      maxScore: 2,
      expectation:
        "Escalates the case for appropriate review while avoiding over-interpretation of weak gene, incomplete recessive, or weak splice evidence.",
    },
  ],

  patient: {
    age: 7,
    sex: "Female",
  },

  referralReason:
    "A 7-year-old girl has been referred for rare disease genome analysis because of developmental delay, speech delay, mild seizures, hypotonia, and behavioural difficulties.",

  testType: "Rare disease trio genome sequencing",

  familyStructure:
    "The proband and both biological parents have been tested. Both parents are reportedly unaffected.",

  history: [
    "Global developmental delay noted in early childhood",
    "Speech delay requiring ongoing support",
    "Mild seizures beginning at age 5",
    "Hypotonia in infancy",
    "Behavioural difficulties reported by school",
    "No known previous molecular diagnosis",
  ],

  phenotype: [
    "Global developmental delay",
    "Speech delay",
    "Mild seizures",
    "Hypotonia",
    "Behavioural difficulties",
  ],

  familyHistory:
    "Both parents are reportedly unaffected. No known family history of developmental delay, seizures, hypotonia, or a similar neurodevelopmental presentation.",

  serviceContext: [
    "The analysis is being performed in a rare disease service context.",
    "The key issue is gene-disease validity.",
    "A gene may sound relevant because it has a possible or proposed neurodevelopmental association, but that does not make every rare variant in that gene a strong candidate.",
    "Your task is to decide whether any candidate has enough gene-disease, phenotype, inheritance, mechanism, population, and technical support to prioritise confidently.",
  ],

  candidateFindings: [
    {
      id: "candidate-1",
      label: "Candidate 1",
      gene: "PROPNDD1",
      variant: "chr4:77219044 G>A",
      zygosity: "Heterozygous",
      consequence: "missense_variant",
      inheritanceSignal: "Apparent de novo with good parental coverage",
      clinicalFit:
        "PROPNDD1 has been proposed in limited reports as a possible neurodevelopmental gene. The phenotype overlap is broad, but the gene-disease relationship is weak and not well established.",
      rawEvidence: `GENE: PROPNDD1
Known disease association: possible neurodevelopmental disorder
Reported inheritance: autosomal dominant proposed in limited early reports
Known mechanism: uncertain
Gene-disease validity in local summary: limited / disputed

Variant:
chr4:77219044 G>A
Transcript: NM_260001.2
HGVS: c.1019G>A p.(Arg340His)
Consequence: missense_variant
Protein domain: no established recurrent pathogenic domain in local summary

VCF-style fields:
QUAL=840
FILTER=PASS
INFO: DP=50;MQ=60;QD=16.8;SOR=0.77
FORMAT: GT:AD:DP:GQ

Proband: 0/1:25,25:50:99
Mother: 0/0:42,0:42:99
Father: 0/0:43,0:43:99

Read-level notes:
ALT reads seen on both forward and reverse strands
ALT reads distributed across read positions
High mapping quality for ALT-supporting reads
No local low-complexity warning
No pseudogene or segmental duplication warning
No concerning soft-clipping around the variant
Second caller: detected

Population:
gnomAD AF = not observed
gnomAD allele count = 0

Constraint:
LOEUF = 0.64
pLI = 0.28
Missense/domain note: no strong local missense constraint signal in the affected region

ClinVar-style summary:
No exact matching variant record found in local summary
Only limited case reports link PROPNDD1 to neurodevelopmental phenotypes
No expert-curated definitive gene-disease relationship in local summary
Some submitted variants in PROPNDD1 remain classified as uncertain significance`,
      concern:
        "This is technically convincing and appears de novo, but the gene-disease relationship is weak. It should not be treated as a strong candidate purely because the gene has a proposed neurodevelopmental association.",
    },
    {
      id: "candidate-2",
      label: "Candidate 2",
      gene: "RECESSV6",
      variant: "chr9:118809331 C>T",
      zygosity: "Heterozygous",
      consequence: "splice_acceptor_variant",
      inheritanceSignal: "Inherited from unaffected mother",
      clinicalFit:
        "RECESSV6 is associated with an autosomal recessive neurodevelopmental disorder with seizures and hypotonia. The variant is a canonical splice acceptor, but only one inherited heterozygous allele is identified.",
      rawEvidence: `GENE: RECESSV6
Known disease association: autosomal recessive neurodevelopmental disorder
Reported inheritance: autosomal recessive
Known mechanism: biallelic loss-of-function
Gene-disease validity in local summary: moderate / established for recessive disease

Variant:
chr9:118809331 C>T
Transcript: NM_260002.4
HGVS: c.744-2C>T
Consequence: splice_acceptor_variant
Splice position: canonical -2 acceptor site
Predicted effect: likely acceptor splice-site disruption

VCF-style fields:
QUAL=790
FILTER=PASS
INFO: DP=48;MQ=60;QD=16.5;SOR=0.72
FORMAT: GT:AD:DP:GQ

Proband: 0/1:24,24:48:99
Mother: 0/1:22,21:43:99
Father: 0/0:41,0:41:99

Read-level notes:
ALT reads seen on both forward and reverse strands
ALT reads distributed across read positions
No local mapping warning
No soft-clipping concern
Second caller: detected

Second-allele review:
No second coding SNV/indel identified in current candidate list
No confident exon-level deletion/duplication detected
Deep intronic/regulatory variants not assessed in this summary

Population:
gnomAD AF = 0.000004
gnomAD allele count = 1
No homozygotes observed in local summary

Constraint:
LOEUF = 0.32
pLI = 0.76

ClinVar-style summary:
No exact matching variant record found in local summary
Other biallelic splice and truncating variants in RECESSV6 have been submitted in affected individuals`,
      concern:
        "This is a technically convincing single allele in a better-established recessive gene, but it does not currently explain the case alone without a second relevant allele.",
    },
    {
      id: "candidate-3",
      label: "Candidate 3",
      gene: "BROADBEH2",
      variant: "chr15:44190290 A>G",
      zygosity: "Heterozygous",
      consequence: "missense_variant",
      inheritanceSignal: "Inherited from unaffected father",
      clinicalFit:
        "BROADBEH2 has a broad behavioural/neurodevelopmental association in low-confidence reports. The variant is inherited from an unaffected father and is relatively frequent in population data.",
      rawEvidence: `GENE: BROADBEH2
Known disease association: broad behavioural/neurodevelopmental association in limited reports
Reported inheritance: autosomal dominant proposed
Known mechanism: uncertain
Gene-disease validity in local summary: limited

Variant:
chr15:44190290 A>G
Transcript: NM_260003.1
HGVS: c.611A>G p.(Lys204Arg)
Consequence: missense_variant
Protein domain: outside any known recurrent functional region in local summary

VCF-style fields:
QUAL=612
FILTER=PASS
INFO: DP=45;MQ=60;QD=13.6;SOR=0.84
FORMAT: GT:AD:DP:GQ

Proband: 0/1:22,23:45:99
Mother: 0/0:39,0:39:99
Father: 0/1:20,21:41:99

Read-level notes:
ALT reads seen on both forward and reverse strands
ALT reads distributed across read positions
No local mapping warning
No soft-clipping concern

Population:
gnomAD AF = 0.002
gnomAD allele count = 540
Homozygotes observed in population summary = 2

Constraint:
LOEUF = 0.86
pLI = 0.05

ClinVar-style summary:
No exact matching pathogenic record found in local summary
Gene-disease relationship remains limited and broad
Several submitted variants in this gene are classified as uncertain significance or likely benign`,
      concern:
        "This appears technically real, but it is weak because the gene-disease validity is limited, the variant is inherited from an unaffected parent, and the population frequency is too high for a severe rare disease explanation.",
    },
    {
      id: "candidate-4",
      label: "Candidate 4",
      gene: "UNCERT9",
      variant: "chr6:22901881 T>C",
      zygosity: "Heterozygous",
      consequence: "splice_region_variant",
      inheritanceSignal: "Apparent de novo, but evidence is incomplete",
      clinicalFit:
        "UNCERT9 has a possible neurodevelopmental association, but the gene-disease relationship is uncertain and the variant is a non-canonical splice-region change with only weak predicted splice impact.",
      rawEvidence: `GENE: UNCERT9
Known disease association: possible neurodevelopmental disorder
Reported inheritance: autosomal dominant proposed in limited reports
Known mechanism: uncertain
Gene-disease validity in local summary: limited / emerging

Variant:
chr6:22901881 T>C
Transcript: NM_260004.2
HGVS: c.701+6T>C
Consequence: splice_region_variant
Splice position: +6 donor region, outside canonical +1/+2 splice donor site
Splice prediction summary: weak predicted splice effect in local summary

VCF-style fields:
QUAL=650
FILTER=PASS
INFO: DP=44;MQ=60;QD=14.8;SOR=0.88
FORMAT: GT:AD:DP:GQ

Proband: 0/1:22,22:44:99
Mother: 0/0:40,0:40:99
Father: 0/0:41,0:41:99

Read-level notes:
ALT reads seen on both forward and reverse strands
ALT reads distributed across read positions
No local mapping warning
No soft-clipping concern

Population:
gnomAD AF = not observed
gnomAD allele count = 0

Constraint:
LOEUF = 0.70
pLI = 0.17

ClinVar-style summary:
No exact matching variant record found in local summary
No expert-curated definitive disease relationship in local summary
No local RNA evidence or previous splice-disrupting evidence for this variant`,
      concern:
        "This is technically plausible and appears de novo, but the gene-disease validity is weak and the non-canonical splice evidence is not strong enough to make it a convincing candidate.",
    },
  ],

  decisionCheckpoints: [
    {
      id: "checkpoint-1",
      title: "Checkpoint 1 — A proposed gene is not the same as an established gene",
      context:
        "Candidate 1 is technically strong and appears de novo, but PROPNDD1 has only limited/disputed gene-disease evidence in the local summary.",
      question:
        "What is the safest interpretation of Candidate 1?",
      options: [
        {
          label: "A",
          text: "Treat it as diagnostic because any de novo variant in a proposed neurodevelopmental gene is enough.",
          isCorrect: false,
          feedback:
            "Not quite. De novo status is important, but weak gene-disease validity limits how confidently the candidate can be prioritised.",
        },
        {
          label: "B",
          text: "Treat it as technically convincing and worth noting, but not a strong candidate without further gene-disease evidence.",
          isCorrect: true,
          feedback:
            "Correct. A real de novo variant in a weakly supported gene is not automatically a convincing explanation.",
        },
        {
          label: "C",
          text: "Dismiss it as definitely false because genes with limited evidence can never become disease genes.",
          isCorrect: false,
          feedback:
            "Not quite. Emerging genes can become valid over time, but current evidence should limit interpretation confidence.",
        },
      ],
      teachingPoint:
        "Gene-disease validity is part of candidate strength. A plausible-looking variant is weaker if the gene itself is not well established for the disease.",
    },
    {
      id: "checkpoint-2",
      title: "Checkpoint 2 — Better gene validity, incomplete inheritance model",
      context:
        "Candidate 2 is in a better-established recessive gene and is a canonical splice acceptor variant, but only one inherited heterozygous allele is identified.",
      question:
        "What is the best interpretation of Candidate 2?",
      options: [
        {
          label: "A",
          text: "Treat it as a complete diagnosis because the gene-disease relationship is stronger than the other genes.",
          isCorrect: false,
          feedback:
            "Not quite. Stronger gene validity does not overcome an incomplete recessive inheritance model.",
        },
        {
          label: "B",
          text: "Ignore it because inherited variants are not useful in rare disease interpretation.",
          isCorrect: false,
          feedback:
            "Not quite. Inherited variants can matter, especially in recessive disease.",
        },
        {
          label: "C",
          text: "Treat it as potentially relevant carrier-level evidence, but not a full explanation without a second allele.",
          isCorrect: true,
          feedback:
            "Correct. Candidate 2 is credible as a variant, but incomplete as an explanation.",
        },
      ],
      teachingPoint:
        "Gene validity and variant consequence still need to fit the inheritance model.",
    },
    {
      id: "checkpoint-3",
      title: "Checkpoint 3 — Weak gene plus population frequency",
      context:
        "Candidate 3 is technically clean, but the gene-disease evidence is limited, the variant is inherited from an unaffected father, and gnomAD AF is 0.002.",
      question:
        "Why is Candidate 3 weak?",
      options: [
        {
          label: "A",
          text: "Weak gene-disease validity, inheritance from an unaffected parent, and high population frequency all reduce plausibility.",
          isCorrect: true,
          feedback:
            "Correct. Multiple lines of evidence make Candidate 3 weak for this severe rare disease presentation.",
        },
        {
          label: "B",
          text: "Technically clean variants are usually artefacts in weakly supported genes.",
          isCorrect: false,
          feedback:
            "Not quite. Candidate 3 is likely real; it is just not clinically convincing.",
        },
        {
          label: "C",
          text: "Missense variants can never cause neurodevelopmental disease.",
          isCorrect: false,
          feedback:
            "Not quite. Missense variants can matter, but this one does not have enough supporting evidence.",
        },
      ],
      teachingPoint:
        "A technically real variant can still be weak if the gene, inheritance, and population evidence do not support the disease model.",
    },
    {
      id: "checkpoint-4",
      title: "Checkpoint 4 — Non-canonical splice in an uncertain gene",
      context:
        "Candidate 4 appears de novo and is absent from population data, but it is a +6 splice-region variant with weak predicted splice effect in a gene with limited/emerging disease evidence.",
      question:
        "What is the safest interpretation of Candidate 4?",
      options: [
        {
          label: "A",
          text: "Report it because de novo status plus absence from gnomAD is enough.",
          isCorrect: false,
          feedback:
            "Not quite. Rarity and de novo status are not enough when splice evidence and gene-disease validity are weak.",
        },
        {
          label: "B",
          text: "Dismiss it because non-canonical splice variants can never be clinically relevant.",
          isCorrect: false,
          feedback:
            "Not quite. Non-canonical splice variants can matter, but they need stronger supporting evidence.",
        },
        {
          label: "C",
          text: "Note it as possible but insufficient, because both the splice evidence and gene-disease validity are weak.",
          isCorrect: true,
          feedback:
            "Correct. Candidate 4 is not impossible, but the evidence is too limited for confident prioritisation.",
        },
      ],
      teachingPoint:
        "Emerging-gene and non-canonical splice evidence both require caution. Combining two uncertain evidence types does not make a strong candidate.",
    },
    {
      id: "checkpoint-5",
      title: "Checkpoint 5 — Safe service-style next step",
      context:
        "All candidates have important limitations. Candidate 1 and Candidate 4 are de novo but in weakly supported genes. Candidate 2 is one allele in a recessive gene. Candidate 3 is inherited, common, and in a weak gene.",
      question:
        "What is the safest overall conclusion?",
      options: [
        {
          label: "A",
          text: "Force-rank Candidate 1 as diagnostic because it is the cleanest de novo variant.",
          isCorrect: false,
          feedback:
            "Not quite. A clean de novo call in a weakly supported gene is not enough for a confident diagnosis.",
        },
        {
          label: "B",
          text: "Document that there is no clean convincing candidate, note the limitations, and escalate for review rather than over-interpreting.",
          isCorrect: true,
          feedback:
            "Correct. This is the safest conclusion when gene-disease validity and inheritance evidence are insufficient.",
        },
        {
          label: "C",
          text: "Report Candidate 3 because it is technically clean and inherited variants are easier to explain.",
          isCorrect: false,
          feedback:
            "Not quite. Candidate 3 is weak because of gene validity, inheritance, and frequency.",
        },
      ],
      teachingPoint:
        "Sometimes the safest clinical bioinformatics output is that no candidate is currently convincing enough, with the reasons clearly documented.",
    },
  ],

  finalReflection:
    "A safe trainee-level conclusion would be that there is no clean convincing candidate from the current evidence. Candidate 1 is technically convincing and appears de novo, but PROPNDD1 has weak/disputed gene-disease validity and no clear established mechanism, so it should not be over-prioritised. Candidate 2 is a technically convincing canonical splice variant in a better-established recessive gene, but only one inherited heterozygous allele is identified, so it does not currently provide a full explanation. Candidate 3 is technically real but weak because the gene-disease relationship is limited, the variant is inherited from an unaffected parent, and the population frequency is too high for a severe rare disease model. Candidate 4 is technically plausible and appears de novo, but the gene-disease evidence and non-canonical splice evidence are both weak. The safest next step is to document these limitations and escalate for appropriate review rather than forcing a diagnosis.",
};