export const module5MiniCase = {
  title: "Module 5 Mini Case: A rare variant, a family clue, and an uncertain answer",
  description:
    "Apply Module 5 reasoning to a realistic beginner case where a promising variant still does not automatically solve the case.",
  introSections: [
    {
      title: "Mini case overview",
      body:
        "This mini case is designed to feel more like a real beginner clinical genomics reasoning task than a simple recall exercise.\n\nThe learner is not being asked to classify a variant formally or make a diagnosis.\n\nInstead, they are being asked to apply the main ideas from Module 5:\n\n• variation is common\n• rarity is not enough\n• inheritance patterns help\n• family history can help but can also mislead\n• penetrance and expressivity can complicate the picture\n• phenotype fit still matters\n• uncertainty is normal"
    }
  ],
  caseScenario: {
    title: "Case scenario",
    body:
      "A child is being investigated for a suspected single-gene condition.\n\nGenomic testing identifies a rare variant in a gene that is known to be associated with developmental disease. The variant is predicted to affect the gene in a potentially important way.\n\nFurther family testing shows that the child’s mother also carries the same variant.\n\nThe mother is not known to have the same diagnosis as the child, but she says she had some mild learning difficulties at school and has always felt that she was “a bit affected, but nothing major.”\n\nA beginner reviewing the case says:\n\n“The variant is rare, it’s in a disease gene, and the mother has it too.\n\nThat proves the variant explains the child’s condition.”\n\nThe learner’s task is to explain why that conclusion is too confident."
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
        "What is the main problem with the beginner’s conclusion?",
      options: [
        "It assumes that rarity, gene association, and one family clue are enough to prove causation",
        "It incorrectly assumes that inherited variants can never matter",
        "It proves that the mother must be unaffected",
        "It shows that family testing is not useful in genomics"
      ],
      answerIndex: 0,
      explanation:
        "The main problem is overconfidence. Module 5 teaches that even a rare variant in a relevant gene does not automatically explain disease. The learner still needs to think about phenotype fit, inheritance pattern, expressivity, penetrance, and whether the overall evidence is actually strong enough."
    },
    {
      title: "Question 2",
      content: [],
      question:
        "Why does the mother carrying the same variant not automatically settle the case?",
      options: [
        "Because inherited variants are usually benign",
        "Because the same variant can show variable expressivity, and the mother’s presentation may be milder, different, or possibly not fully explanatory",
        "Because dominant inheritance is impossible if a parent is only mildly affected",
        "Because family segregation data is irrelevant once a rare variant is found"
      ],
      answerIndex: 1,
      explanation:
        "Module 5 teaches that the same variant can look different in different people. A shared variant may support relevance, but it does not automatically prove that the variant fully explains the child’s presentation."
    },
    {
      title: "Question 3",
      content: [],
      question:
        "Which concept is most relevant to the difference between the child’s more severe presentation and the mother’s milder history?",
      options: [
        "Copy number variation",
        "Variable expressivity",
        "Repeat expansion",
        "Structural rearrangement"
      ],
      answerIndex: 1,
      explanation:
        "Variable expressivity means people with the same relevant genetic change or condition may show different signs, symptoms, or severity."
    },
    {
      title: "Question 4",
      content: [],
      question:
        "Why is it still important to ask whether the child’s presentation fits what is known about the gene?",
      options: [
        "Because phenotype fit can still support or weaken the case, even if the variant looks interesting",
        "Because phenotype only matters when no variant is found",
        "Because gene–disease associations replace the need for clinical context",
        "Because phenotype is less important than rarity"
      ],
      answerIndex: 0,
      explanation:
        "Module 5 teaches that phenotype fit remains essential. A variant may look plausible by rarity and inheritance, but still fail to explain the case if the phenotype does not match well."
    },
    {
      title: "Question 5",
      content: [],
      question:
        "What is the safest beginner conclusion from this case?",
      options: [
        "The variant definitely explains the child’s condition",
        "The variant is definitely irrelevant because the mother is only mildly affected",
        "The variant is interesting and may be relevant, but the case still needs careful evidence-based assessment rather than immediate certainty",
        "The case must be recessive because the mother is not clearly severely affected"
      ],
      answerIndex: 2,
      explanation:
        "This is the safest and most realistic conclusion. The variant may be important, but the evidence still needs to be weighed properly. Module 5 is specifically designed to stop the learner from jumping too quickly from “interesting” to “proven.”"
    }
  ],
  shortWrittenResponseTask: {
    title: "Short written response task",
    body:
      "Ask the learner to answer this in 5–7 sentences:\n\nWhy is the statement “the variant is rare, in a disease gene, and present in the mother, so it must explain the child’s condition” too simplistic?"
  },
  strongAnswer: {
    title: "What a strong answer should include",
    body:
      "A strong learner answer would say something like:\n\nIt is too simplistic because rarity and gene association do not prove that a variant explains disease. The mother carrying the same variant may support relevance, but it does not automatically settle the case because penetrance and variable expressivity can complicate the family picture. The mother may be mildly affected, differently affected, or the shared variant may still not fully explain the child’s presentation. It is also important to check whether the child’s phenotype fits what is known about the gene. Clinical genomics needs evidence-based judgement, not just one promising clue. So this variant may be a strong candidate, but it should not be treated as proven without further careful assessment."
  },
  whatThisMiniCaseIsTesting: {
    title: "What this mini case is testing",
    body:
      "This case is testing whether the learner can integrate the main Module 5 ideas:\n\n• a variant is not automatically explanatory\n• rarity is not enough\n• inheritance clues are useful but not definitive\n• family data can support or complicate interpretation\n• variable expressivity matters\n• phenotype fit still matters\n• uncertainty is a normal part of clinical genomics"
  },
  goodPerformanceLooksLike: {
    title: "What “good performance” looks like",
    body:
      "The learner has done well if they can recognise that:\n\n• the beginner’s conclusion is too definite\n• shared family variants can be informative without being conclusive\n• milder parental features do not automatically rule the variant in or out\n• phenotype still matters even when inheritance looks supportive\n• the right professional mindset is cautious, evidence-based reasoning rather than premature certainty"
  },
  conclusion: [
    "This mini case brings together the key ideas from Module 5: variation is common, rarity is not enough, inheritance helps but does not prove causation, family information can support or complicate interpretation, and phenotype fit still matters.",
    "The main lesson is that a promising variant should be treated as a candidate that needs careful evidence-based assessment, not as an automatic answer."
  ]
};