export const module14MiniCase = {
    title:
      "Module 14 Mini Case: Two rare candidates remain, but population evidence does not support them equally",
    description:
      "Apply Module 14 reasoning to a realistic shortlist-refinement problem where rarity, allele-number context, and gene constraint do not support two pLoF candidates equally.",
    introSections: [
      {
        title: "Mini case overview",
        body:
          "This mini case is designed to feel more like a real plausibility-refinement problem than a recall exercise.\n\nThe learner is not being asked to make a final diagnosis or formal variant classification.\n\nInstead, they are being asked to apply the main ideas from Module 14:\n\n• population databases help judge how common a specific variant is\n• proper frequency interpretation uses AC, AN, AF, ancestry-aware data, and sometimes FAF\n• gene constraint is a gene-level clue\n• LOEUF and pLI can strengthen or weaken plausibility, especially for pLoF review\n• rarity and constraint work best as complementary clues\n• absence from gnomAD or strong constraint can raise interest, but neither one is final proof."
      }
    ],
    caseScenario: {
      title: "Case scenario",
      body:
        "A trainee is reviewing a rare disease case after earlier technical filtering and shortlist-building. Two technically strong, phenotype-relevant candidates remain.\n\nVariant A\n• predicted loss-of-function variant\n• not observed in gnomAD\n• site has strong allele-number support, so the absence looks informative\n• the gene has low LOEUF, suggesting stronger loss-of-function constraint\n\nVariant B\n• also predicted loss-of-function\n• very rare overall, but not completely absent\n• the site has weaker representation in population data\n• the gene has much higher LOEUF, suggesting weaker loss-of-function constraint\n\nThe trainee says:\n\n“They are both rare pLoF variants, so they should probably be treated as about equally strong.”\n\nA senior colleague replies:\n\n“Not necessarily. Variant rarity is only one part of the population story, and gene-level tolerance matters too.”\n\nThe learner’s task is to explain why the colleague is right."
    },
    learnerTask: {
      title: "Learner task",
      body: "Read the case and answer the questions below."
    },
    steps: [
      {
        title: "Question 1",
        content: [],
        question:
          "What is the main mistake in the trainee’s reasoning?",
        options: [
          "Assuming that two variants with similar-looking rarity automatically have the same overall plausibility",
          "Assuming that LOEUF is a variant-level frequency score",
          "Assuming that allele number never matters",
          "Assuming that pLoF variants are always irrelevant"
        ],
        answerIndex: 0,
        explanation:
          "Module 14 teaches that rarity is only one clue. Proper population-based review also considers whether the absence is informative and whether the gene itself appears intolerant or tolerant to that class of variation."
      },
      {
        title: "Question 2",
        content: [],
        question:
          "Why does strong allele-number support make Variant A’s absence more informative?",
        options: [
          "Because absence is only meaningful when the dataset had a strong chance to observe the variant if it were present",
          "Because allele number measures phenotype fit",
          "Because allele number replaces allele frequency",
          "Because high AN proves pathogenicity"
        ],
        answerIndex: 0,
        explanation:
          "gnomAD’s recent updates emphasize allele-number information because non-observation is easier to interpret when the site was well represented in the dataset."
      },
      {
        title: "Question 3",
        content: [],
        question:
          "Why does low LOEUF strengthen Variant A more than Variant B?",
        options: [
          "Because low LOEUF means the gene appears more constrained against predicted loss-of-function variation",
          "Because low LOEUF means the variant is absent from every population",
          "Because low LOEUF proves a dominant phenotype",
          "Because LOEUF is the same as allele frequency"
        ],
        answerIndex: 0,
        explanation:
          "LOEUF is a gene-level loss-of-function intolerance metric, and lower values indicate stronger pLoF depletion in population data."
      },
      {
        title: "Question 4",
        content: [],
        question:
          "What is the safest way to think about Variant B?",
        options: [
          "It must be irrelevant because it is not completely absent",
          "It may still deserve review, but weaker site representation and weaker LoF constraint make it less compelling than Variant A on population/constraint grounds",
          "It should outrank Variant A because both are pLoF",
          "It is automatically benign because the gene has higher LOEUF"
        ],
        answerIndex: 1,
        explanation:
          "Module 14 does not teach “higher LOEUF = irrelevant” or “seen in gnomAD = false.” It teaches graded plausibility. Variant B may still matter, but the combined population and constraint signals are weaker."
      },
      {
        title: "Question 5",
        content: [],
        question:
          "What is the safest overall conclusion from this case?",
        options: [
          "Any absent pLoF in a constrained gene is basically diagnostic",
          "Population rarity and gene constraint should be read together, because they refine candidate plausibility more effectively than rarity alone",
          "LOEUF matters more than all other evidence",
          "Variants seen in gnomAD should always be filtered out immediately"
        ],
        answerIndex: 1,
        explanation:
          "This is the integrated lesson of Module 14: variant-level rarity and gene-level intolerance are complementary clues that refine shortlist plausibility when interpreted in context."
      }
    ],
    shortWrittenResponseTask: {
      title: "Short written response task",
      body:
        "Ask the learner to answer this in 5–7 sentences:\n\nWhy is it too simplistic to say, “Both variants are rare pLoF changes, so they should be treated as equally strong”?"
    },
    strongAnswer: {
      title: "What a strong answer should include",
      body:
        "A strong learner answer would say something like:\n\nIt is too simplistic because rarity alone does not capture the whole population-evidence picture. Variant A is more compelling because its absence is more informative when the site has strong allele-number support, and the gene has lower LOEUF, suggesting stronger intolerance to loss-of-function variation. Variant B may still be worth reviewing, but both the non-observation evidence and the gene-level constraint evidence are weaker. That does not prove Variant A is the diagnosis or prove Variant B is irrelevant. It means that population data and constraint refine plausibility in a graded way. The strongest shortlist reasoning comes from combining variant-level rarity with gene-level intolerance rather than treating all rare pLoF variants as equivalent."
    },
    whatThisMiniCaseIsTesting: {
      title: "What this mini case is testing",
      body:
        "This case is testing whether the learner can integrate the main Module 14 ideas:\n\n• rarity is not just present-versus-absent\n• allele number affects how informative absence is\n• gene constraint is a separate, gene-level clue\n• low LOEUF can strengthen a pLoF candidate\n• rarity and constraint work best together\n• population/constraint evidence refines plausibility rather than proving diagnosis."
    },
    goodPerformanceLooksLike: {
      title: "What “good performance” looks like",
      body:
        "The learner has done well if they can recognise that:\n\n• the trainee is over-simplifying rarity\n• Variant A is strengthened by both informative absence and stronger LoF constraint\n• Variant B may still matter, but population and constraint evidence support it less strongly\n• absence from gnomAD and low LOEUF are useful clues, not final proof\n• safe clinical bioinformatics means asking not only “is it rare?” but also “how informative is that rarity, and does the gene tolerate this kind of change?”"
    },
    conclusion: [
      "This mini case brings together the key ideas from Module 14: good population-based review depends on understanding how informative rarity really is and how gene-level intolerance changes the plausibility of a candidate variant class.",
      "The main lesson is that variant-level frequency and gene-level constraint are strongest when used together as graded plausibility clues rather than as simplistic truth labels."
    ]
  };