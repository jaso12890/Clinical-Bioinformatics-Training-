export const module19Quiz = [
    {
      question: `A learner says:
  “A row and a column are basically the same thing in a table.”
  Which response is best?`,
      options: [
        "Correct, because both are just strings in Python",
        "Incorrect, because a column is a repeating field across many records, while a row usually represents one record’s values across those fields",
        "Correct, unless the data is in CSV format",
        "Incorrect only because rows must always be numbers"
      ],
      answerIndex: 1,
      explanation:
        "In tabular data, columns define what kind of information is stored, while each row usually holds one record. That distinction is fundamental to how CSV files and DataFrames are understood."
    },
    {
      question:
        "Why is a dictionary often a good representation for one row of labeled genomic-style data?",
      options: [
        "Because dictionaries automatically sort rows by quality",
        "Because column names can be used as keys, making the row easier to read and access by label",
        "Because dictionaries only store numbers",
        "Because lists cannot represent rows at all"
      ],
      answerIndex: 1,
      explanation:
        'A record such as {"gene": "BRCA1", "quality": 95} is easy to understand because the labels stay attached to the values. Python’s csv.DictReader is built around exactly this pattern.'
    },
    {
      question: "What does csv.reader usually return for each row?",
      options: [
        "A DataFrame",
        "A list of strings",
        "A dictionary with automatic number conversion",
        "A boolean"
      ],
      answerIndex: 1,
      explanation:
        "The official csv docs state that each row read from a CSV file is returned as a list of strings by default."
    },
    {
      question:
        "What is the main advantage of csv.DictReader compared with csv.reader for beginner data work?",
      options: [
        "It automatically turns all values into integers",
        "It uses the header row as keys, so each row can be accessed by column name instead of only by position",
        "It can only read pandas files",
        "It removes the need for loops"
      ],
      answerIndex: 1,
      explanation:
        "The csv docs say DictReader maps each row to a dictionary whose keys come from the field names. That makes row access more descriptive and often easier to reason about."
    },
    {
      question: `A learner reads a CSV row as:
  {"gene": "BRCA1", "quality": "95"}
  Why can this cause problems later?`,
      options: [
        "Because dictionaries cannot store text",
        'Because "95" is still a string, so numeric filtering or arithmetic may require conversion first',
        "Because CSV rows cannot have keys",
        "Because quality must always be lowercase"
      ],
      answerIndex: 1,
      explanation:
        "The csv docs say rows are read as strings by default unless special handling is requested. That means numeric-looking values often need conversion before threshold checks or calculations."
    },
    {
      question: "Which code pattern is the best beginner example of filtering records?",
      options: [
        "Create a counter and never change it",
        "Loop through records, check a condition with if, and append passing rows to a new list",
        "Print the whole file without conditions",
        "Replace every value with True"
      ],
      answerIndex: 1,
      explanation:
        "The standard beginner filtering pattern is “loop, check, keep if it passes.” This combines Python control flow with record-based data thinking."
    },
    {
      question: `What is this code doing?
  passed_count = 0
  for record in records:
      if record["quality"] >= 80:
          passed_count = passed_count + 1`,
      options: [
        "Finding the maximum quality",
        "Counting how many records pass the threshold",
        "Sorting the records",
        "Converting strings into dictionaries"
      ],
      answerIndex: 1,
      explanation:
        "The counter starts at zero and increases only when a record meets the condition, so it produces a passing count rather than a list of kept records or a maximum value."
    },
    {
      question: "Why do you need both a total and a count to calculate an average?",
      options: [
        "Because averages always require a dictionary",
        "Because average means total divided by count",
        "Because count automatically gives the average",
        "Because maximum and minimum are the same thing as average"
      ],
      answerIndex: 1,
      explanation:
        "Averages are built from two pieces: how much you have in total and how many items contributed to that total. That is one of the main beginner summary patterns in data work."
    },
    {
      question: "What is a DataFrame in pandas?",
      options: [
        "A kind of loop in the standard library",
        "pandas’ main table structure for tabular data",
        "A file path object",
        "A dictionary that cannot hold columns"
      ],
      answerIndex: 1,
      explanation:
        "The pandas getting-started docs state directly that in pandas, a data table is called a DataFrame."
    },
    {
      question: `What does this code do?
  import pandas as pd
  df = pd.read_csv("variants.csv")
  high_quality = df[df["quality"] >= 80]`,
      options: [
        "Deletes rows with quality 80 or higher",
        "Creates a filtered table containing only rows whose quality is at least 80",
        "Turns the file into a dictionary automatically",
        "Only prints the header row"
      ],
      answerIndex: 1,
      explanation:
        "The pandas docs describe read_csv for loading tabular data and explain that filtering rows on a condition is a core DataFrame operation."
    },
    {
      question: "Why is pathlib.Path useful in beginner data scripts?",
      options: [
        "It replaces CSV files",
        "It provides a cleaner, more explicit way to build and manage filesystem paths",
        "It automatically reads every file into pandas",
        "It removes the need for folders"
      ],
      answerIndex: 1,
      explanation:
        "The pathlib docs describe it as object-oriented filesystem paths and note that Path is usually the class most people need. It makes path handling clearer than ad hoc string building."
    },
    {
      question: `What is a good reason to write:
  from pathlib import Path
  file_path = Path("data") / "variants.csv"
  instead of using one long copied path string?`,
      options: [
        "Because Path makes files smaller",
        "Because it makes paths clearer, easier to organise, and less messy to maintain",
        "Because Python cannot open string paths",
        "Because it turns the file into a DataFrame automatically"
      ],
      answerIndex: 1,
      explanation:
        "Path helps build child paths clearly, which makes scripts easier to read, reorganise, and trust when project folders change. The pathlib docs explicitly show this style of path construction."
    },
    {
      question: "Which of these is the best beginner-safe data habit?",
      options: [
        "Put every input and output file in random folders and hard-code the full path each time",
        "Keep inputs and outputs organised, use clear path names, and separate reading, processing, and writing steps",
        "Avoid checking whether files exist",
        "Reuse vague file names like final2.txt and latest_new.csv forever"
      ],
      answerIndex: 1,
      explanation:
        "Clear project structure, deliberate file naming, and separating input/output logic make scripts easier to rerun, debug, and understand. The pathlib docs and the Python tutorial’s file-handling guidance support this style of work."
    },
    {
      question: `A learner says:
  “Now that I know pandas, I don’t need to understand rows, columns, or types anymore.”
  What is the best correction?`,
      options: [
        "Correct, because pandas removes the need for data understanding",
        "Incorrect, because pandas makes tabular work easier, but you still need to understand what rows, columns, and data types mean",
        "Correct, unless the file is CSV",
        "Incorrect only because pandas cannot filter tables"
      ],
      answerIndex: 1,
      explanation:
        "Pandas is a table tool, not a substitute for thinking clearly about the data itself. The DataFrame still represents rows and columns, and filtering or summaries still depend on understanding what the fields contain."
    },
    {
      question: "What is the best overall summary of Module 19?",
      options: [
        "Python for genomic data means immediately learning full VCF parsing and production pipelines",
        "It means learning how simple genomic-style tables map to Python structures, how to read and filter rows, build basic summaries, use beginner pandas, and handle file paths more safely",
        "It means replacing all plain Python with pandas as soon as possible",
        "It means memorising CSV syntax only"
      ],
      answerIndex: 1,
      explanation:
        "That is the integrated goal of the module: taking beginner Python and using it on simple genomic-style data in a practical, controlled way before moving to more advanced workflows."
    }
  ];