export const module18MiniCase = {
    title: "Module 18 Mini Case: A beginner script almost works, but what is it actually doing?",
    description:
      "Apply the core beginner Python ideas from Module 18 to a small script involving a list, a loop, a function, and the difference between print() and return.",
    introSections: [
      {
        title: "Mini case overview",
        body:
          "This mini case is designed to feel like a real beginner Python reasoning exercise rather than a memory test.\n\nThe learner is not being asked to write a large program from scratch.\n\nInstead, they are being asked to apply the main ideas from Module 18:\n• variables store values\n• types matter\n• lists store ordered collections\n• loops repeat code\n• functions can return values\n• print() and return are different\n• files store data outside the program."
      }
    ],
    caseScenario: {
      title: "Case scenario",
      body:
        'A learner writes this script:\n\ngenes = ["BRCA1", "TP53", "CFTR"]\ndef label_gene(gene):\n    return "Gene: " + gene\nfor gene in genes:\n    print(label_gene(gene))\n\nThey run it and see:\nGene: BRCA1\nGene: TP53\nGene: CFTR\n\nThen they change the function to this:\n\ndef label_gene(gene):\n    print("Gene: " + gene)\n\nand keep the rest the same:\n\nfor gene in genes:\n    print(label_gene(gene))\n\nNow they see:\nGene: BRCA1\nNone\nGene: TP53\nNone\nGene: CFTR\nNone\n\nThe learner says:\n\n“I don’t understand. I’m still printing the same text, so why did None appear?”\n\nThe learner’s task is to explain what changed.'
    },
    learnerTask: {
      title: "Learner task",
      body: "Read the case and answer the questions below."
    },
    steps: [
      {
        title: "Question 1",
        content: [],
        question: "Why did the first version work cleanly?",
        options: [
          "Because lists automatically remove None",
          "Because the function used return, so print(label_gene(gene)) printed the returned string",
          "Because Python ignored the function",
          "Because for loops only work with strings"
        ],
        answerIndex: 1,
        explanation:
          'In the first version, label_gene(gene) returns a string like "Gene: BRCA1". The outer print(...) then prints that returned value.'
      },
      {
        title: "Question 2",
        content: [],
        question: "Why does None appear in the second version?",
        options: [
          "Because print() always returns None, so the outer print(label_gene(gene)) prints the function’s return value, which is now None",
          "Because the list is broken",
          "Because gene changed type",
          "Because for loops add None automatically"
        ],
        answerIndex: 0,
        explanation:
          "In the second version, the function prints the text itself, but it does not return anything. A function with no explicit return returns None, so the outer print(...) prints that None."
      },
      {
        title: "Question 3",
        content: [],
        question: "What is the main lesson of this case?",
        options: [
          "print() and return do the same thing",
          "A function that prints a value is always better than a function that returns one",
          "print() displays output, while return sends a value back for later use",
          "Functions should never use strings"
        ],
        answerIndex: 2,
        explanation:
          "This is one of the most important beginner Python distinctions. Printing shows something on the screen. Returning gives a result back to the caller."
      },
      {
        title: "Question 4",
        content: [],
        question:
          "Which version is better if you want the function’s result to be reusable elsewhere in the program?",
        options: [
          "The second version with only print()",
          "The first version with return",
          "Both are equally reusable",
          "Neither version can be reused"
        ],
        answerIndex: 1,
        explanation:
          "A returned value can be stored, combined with other values, or used in more code. A printed value is just displayed."
      },
      {
        title: "Question 5",
        content: [],
        question:
          "If the learner wants to keep the second version of the function, what is the simplest fix for the loop?",
        options: [
          "Change the loop to label_gene(gene)",
          "Change the loop to return label_gene(gene)",
          "Change the loop to print(print(label_gene(gene)))",
          "Remove the list"
        ],
        answerIndex: 0,
        explanation:
          "If the function already prints the output itself, then the loop should just call it: for gene in genes: label_gene(gene). That avoids printing None."
      }
    ],
    shortWrittenResponseTask: {
      title: "Short written response task",
      body:
        "Ask the learner to answer this in 4–6 sentences:\n\nWhy did the second version print None, and what does that teach you about the difference between print() and return?"
    },
    strongAnswer: {
      title: "What a strong answer should include",
      body:
        'A strong learner answer would say something like:\n\nIn the first version, the function returned a string, and the outer print() displayed that returned value. In the second version, the function printed the text itself, but it did not return anything. When a function does not explicitly return a value, Python returns None. That means the outer print(label_gene(gene)) printed the function’s return value, which was None. This teaches that print() shows output on screen, while return sends a value back so the rest of the program can use it.'
    },
    whatThisMiniCaseIsTesting: {
      title: "What this mini case is testing",
      body:
        "This case is testing whether the learner can understand:\n• how a list is used in a loop\n• how a function is called for each item\n• the difference between printing and returning\n• why a function without return gives back None\n• and how small code changes can affect program output."
    },
    goodPerformanceLooksLike: {
      title: "What “good performance” looks like",
      body:
        "The learner has done well if they can recognise that:\n• the loop itself is fine\n• the important change happened inside the function\n• return and print() are not the same\n• None appears because the function stopped returning a usable value\n• the first version is better when the result needs to be reused later."
    },
    conclusion: [
      "This mini case brings together several core Module 18 ideas in one small script: lists, loops, functions, and the difference between printing and returning.",
      "The key lesson is that print() shows output on screen, while return gives a value back to the caller for later use."
    ]
  };