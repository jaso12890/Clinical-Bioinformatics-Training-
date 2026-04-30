export const module7MiniCase = {
    title:
      "Module 7 Mini Case: Choosing the right test, and understanding what a negative result really means",
    description:
      "Apply Module 7 reasoning to a realistic NHS-style test-selection case where broader is not automatically better and a negative result does not automatically rule out a genetic cause.",
    introSections: [
      {
        title: "Mini case overview",
        body:
          "This mini case is designed to feel more like a real NHS genomic test-selection problem than a variant-interpretation case.\n\nThe learner is not being asked to classify a variant formally or make a final diagnosis.\n\nInstead, they are being asked to apply the main ideas from Module 7:\n\n• different tests cover different genomic territory\n• different tests are stronger for different variant classes\n• broader is not always better\n• the best test depends on the clinical question\n• a negative result only makes sense in light of what the test could actually assess\n• downstream interpretation depends on knowing what assay was used"
      }
    ],
    caseScenario: {
      title: "Case scenario",
      body:
        "A child is referred with a suspected genetic neurodevelopmental disorder. The phenotype is significant, but not highly specific. Several different genes could plausibly be involved, and the team is discussing which genomic test would be most appropriate.\n\nA beginner on the team says:\n\n“We should just do the broadest possible test every time.\nIf the result is negative, then at least we can rule out a genetic cause.”\n\nAnother team member replies that the situation is more complicated:\n\n• sometimes a focused test is more appropriate\n• broader tests still have limits\n• negative results do not always mean “not genetic”\n• what is generated and what is analysed may not be exactly the same, especially in exome or genome pathways where virtual panels may be applied\n\nThe learner’s task is to explain why the beginner’s statement is too simplistic."
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
          "What is the main problem with the statement “just do the broadest possible test every time”?",
        options: [
          "It ignores the fact that test choice should follow the clinical question rather than the idea that more data is always better",
          "It proves that broad tests are never useful",
          "It shows that only panels should be used in NHS genomics",
          "It means whole genome sequencing cannot detect small variants"
        ],
        answerIndex: 0,
        explanation:
          "The central mistake is treating “biggest” as automatically “best.” Module 7 teaches that the right test is the one that best fits the indication, suspected biology, and service pathway."
      },
      {
        title: "Question 2",
        content: [],
        question:
          "Why might a focused panel still be the better test in some cases?",
        options: [
          "Because panels are broader than whole genomes",
          "Because panels can be well suited to a phenotype that strongly points toward a known group of relevant genes",
          "Because panels are the only tests that produce VCF files",
          "Because panels always detect all structural variants better than genome tests"
        ],
        answerIndex: 1,
        explanation:
          "If the phenotype already points strongly toward a known disease area or curated gene group, a focused panel may be the most appropriate and efficient first test."
      },
      {
        title: "Question 3",
        content: [],
        question:
          "Why is the statement “if the result is negative, we can rule out a genetic cause” unsafe?",
        options: [
          "Because negative results are always laboratory failures",
          "Because a negative result only means no relevant finding was detected within what that test and analysis pathway could assess",
          "Because genomic testing never gives useful negative results",
          "Because all genetic conditions are detectable by any sequencing test"
        ],
        answerIndex: 1,
        explanation:
          "A negative result does not always rule out a genetic explanation. It has to be interpreted in relation to what the test covered, what it was built to detect, and what was actually analysed."
      },
      {
        title: "Question 4",
        content: [],
        question:
          "Which concept best explains why a whole exome or whole genome test may still not have analysed all the data it generated?",
        options: [
          "Structural variation",
          "Virtual panel analysis",
          "Penetrance",
          "Mosaicism"
        ],
        answerIndex: 1,
        explanation:
          "Generated data and analysed data are not always the same. Virtual panel analysis is one important reason why."
      },
      {
        title: "Question 5",
        content: [],
        question:
          "What is the safest overall conclusion from this case?",
        options: [
          "The broadest test is always the best, but negative results must be reported more carefully",
          "Focused tests are always better than broader tests",
          "The right test depends on the clinical question, and negative results only make sense in light of the test’s scope, strengths, and analysis boundaries",
          "A negative exome or genome result usually proves there is no genetic explanation"
        ],
        answerIndex: 2,
        explanation:
          "This is the integrated lesson of Module 7. Test choice depends on the indication, suspected biology, and service pathway, and interpretation of a negative result depends on what the assay actually covered and what was analysed."
      }
    ],
    shortWrittenResponseTask: {
      title: "Short written response task",
      body:
        "Ask the learner to answer this in 5–7 sentences:\n\nWhy is it too simplistic to say, “We should always do the broadest test, and if it is negative we can rule out a genetic cause”?"
    },
    strongAnswer: {
      title: "What a strong answer should include",
      body:
        "A strong learner answer would say something like:\n\nIt is too simplistic because the best genomic test depends on the clinical question, not just on how much DNA is covered. A focused panel may be the most appropriate test when the phenotype already points strongly toward a known set of genes, while broader tests are more useful when the likely explanation is less clear or wider genomic scope is needed. Broader tests still have limitations, including interpretation challenges and limits in what is routinely analysed. Virtual panels may be applied even to exome or genome data, so not all generated data are always reviewed. A negative result therefore only means that no relevant finding was detected within what that test and analysis pathway assessed. It does not automatically rule out every possible genetic explanation."
    },
    whatThisMiniCaseIsTesting: {
      title: "What this mini case is testing",
      body:
        "This case is testing whether the learner can integrate the main Module 7 ideas:\n\n• scope matters\n• variant-detection strengths matter\n• broader is not always better\n• negative results depend on assay context\n• generated data and analysed data are not always the same\n• test choice is a clinical-service decision, not just a laboratory preference"
    },
    goodPerformanceLooksLike: {
      title: "What “good performance” looks like",
      body:
        "The learner has done well if they can recognise that:\n\n• the beginner’s statement is overconfident\n• test selection should follow the clinical indication\n• broader tests can be appropriate without being automatically best\n• a negative result must be interpreted in relation to what was covered and analysed\n• safe downstream reasoning always starts with knowing what assay produced the data"
    },
    conclusion: [
      "This mini case brings together the key ideas from Module 7: different tests cover different genomic territory, different tests are stronger for different variant classes, broader is not always better, the best test depends on the clinical question, and negative results only make sense in relation to what the test actually covered and analysed.",
      "The main lesson is that the right assay should be chosen for the clinical question, and a negative result should be treated as “nothing relevant was found within this test and this analysis pathway,” not as an automatic rule-out of all genetic explanations."
    ]
  };