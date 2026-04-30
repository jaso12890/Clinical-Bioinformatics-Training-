export const module19MiniCase = {
    title: "Module 19 Mini Case: A tiny genomic-style table, a simple filter, and what the script really keeps",
    description:
      "Apply the core Module 19 ideas to a small genomic-style table: rows, records, list-of-dictionaries thinking, filtering with if, numeric thresholds, and describing precisely what a filter actually does.",
    introSections: [
      {
        title: "Mini case overview",
        body:
          "This mini case is designed to feel like a real beginner genomic-data reasoning exercise rather than a memory test.\n\nThe learner is not being asked to write a full analysis pipeline.\n\nInstead, they are being asked to apply the main ideas from Module 19:\n• rows, columns, and records\n• list-of-dictionaries thinking\n• filtering with if\n• numeric thresholds\n• simple summaries\n• and careful thinking about what the code is actually doing."
      }
    ],
    caseScenario: {
      title: "Case scenario",
      body:
        'A learner has this small CSV-style table:\n\ngene,quality,consequence\nBRCA1,95,missense\nTP53,88,frameshift\nCFTR,70,synonymous\nBRCA1,60,frameshift\n\nThey represent it in Python like this:\n\nrecords = [\n    {"gene": "BRCA1", "quality": 95, "consequence": "missense"},\n    {"gene": "TP53", "quality": 88, "consequence": "frameshift"},\n    {"gene": "CFTR", "quality": 70, "consequence": "synonymous"},\n    {"gene": "BRCA1", "quality": 60, "consequence": "frameshift"}\n]\n\nThen they write this filter:\n\npassed = []\nfor record in records:\n    if record["gene"] == "BRCA1" and record["quality"] >= 80:\n        passed.append(record)\nprint(passed)\n\nThe learner says:\n“I think this keeps every BRCA1 record.”\n\nBut that is not correct.\n\nThe learner’s task is to explain what the script really keeps and why.'
    },
    learnerTask: {
      title: "Learner task",
      body: "Read the case and answer the questions below."
    },
    steps: [
      {
        title: "Question 1",
        content: [],
        question: "What is the script actually filtering for?",
        options: [
          "All records with quality >= 80",
          'All records with gene == "BRCA1"',
          'Only records where gene == "BRCA1" and quality >= 80',
          "All frameshift records"
        ],
        answerIndex: 2,
        explanation:
          "The condition uses and, so both parts must be true at the same time."
      },
      {
        title: "Question 2",
        content: [],
        question: "Which records will end up in passed?",
        options: [
          "Both BRCA1 records",
          'Only {"gene": "BRCA1", "quality": 95, "consequence": "missense"}',
          "Only the TP53 record",
          "The BRCA1 95 record and the TP53 88 record"
        ],
        answerIndex: 1,
        explanation:
          "There are two BRCA1 records, but only one of them has quality >= 80. The BRCA1 record with quality 60 fails the threshold."
      },
      {
        title: "Question 3",
        content: [],
        question: "Why is the BRCA1 record with quality 60 rejected?",
        options: [
          "Because it is a BRCA1 record",
          "Because its consequence is frameshift",
          "Because it fails the second part of the and condition",
          "Because Python does not allow repeated genes"
        ],
        answerIndex: 2,
        explanation:
          "It matches the gene condition, but it does not pass the quality threshold, so the whole condition is false."
      },
      {
        title: "Question 4",
        content: [],
        question: `What would the script keep if the condition were changed to this?
  if record["gene"] == "BRCA1" or record["quality"] >= 80:`,
        options: [
          "Only BRCA1 records with quality >= 80",
          'Records that match either being BRCA1 or having quality >= 80',
          "Only records with quality < 80",
          "Only TP53"
        ],
        answerIndex: 1,
        explanation:
          "or is broader than and. A record can pass by matching either side."
      },
      {
        title: "Question 5",
        content: [],
        question: "Which summary would correctly describe the original filter result?",
        options: [
          "“Two records passed: both BRCA1 rows.”",
          "“One record passed: the BRCA1 row with quality 95.”",
          "“Three records passed because three qualities are above 60.”",
          "“No records passed.”"
        ],
        answerIndex: 1,
        explanation:
          "Only one row satisfies both conditions together."
      }
    ],
    shortWrittenResponseTask: {
      title: "Short written response task",
      body:
        "Ask the learner to answer this in 4–6 sentences:\n\nWhy is it wrong to say the script keeps every BRCA1 record, and what does the and condition really mean here?"
    },
    strongAnswer: {
      title: "What a strong answer should include",
      body:
        'A strong learner answer would say something like:\n\nIt is wrong because the script does not keep rows based only on the gene name. It keeps rows only when both parts of the condition are true at the same time. That means the record must be a BRCA1 record and must also have quality at least 80. The BRCA1 row with quality 60 fails the second condition, so it is rejected. Only the BRCA1 row with quality 95 is added to passed.'
    },
    whatThisMiniCaseIsTesting: {
      title: "What this mini case is testing",
      body:
        "This case is testing whether the learner can understand:\n• one row as one record\n• how records are stored in a list of dictionaries\n• how a loop checks each record one by one\n• how and makes a filter more specific\n• and how to describe clearly what a filter is really doing."
    },
    goodPerformanceLooksLike: {
      title: "What “good performance” looks like",
      body:
        "The learner has done well if they can recognise that:\n• the code is filtering records, not whole genes\n• the condition has two parts\n• and means both parts must be true\n• only one BRCA1 row passes\n• and a good summary should describe the filter result precisely, not loosely."
    },
    conclusion: [
      "This mini case brings together row/record thinking, loops, and filtering logic in one small example.",
      "The key lesson is that a filter must be described precisely: here, the code keeps only records that satisfy both conditions at the same time."
    ]
  };