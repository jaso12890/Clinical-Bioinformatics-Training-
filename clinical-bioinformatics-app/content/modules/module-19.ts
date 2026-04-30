export const module19 = {
    slug: "module-19",
    title: "Module 19: Python for genomic data",
    description:
      "Learn how simple genomic-style tabular data maps onto Python structures, how to read and filter records, make simple summaries, use beginner pandas, and handle file paths more safely.",
    lessons: [
      {
        slug: "lesson-1",
        title: "Lesson 1: Rows, columns, and records in Python",
        goal:
          "By the end of this lesson, the learner should be able to answer: “What do rows, columns, and records mean in data work, and how can I represent them in Python?”",
        screens: [
          {
            title: "Lesson goal",
            body: `By the end of this lesson, the learner should be able to answer:
  
  “What do rows, columns, and records mean in data work, and how can I represent them in Python?”
  
  This lesson starts Module 19 because the learner already knows basic Python. The next step is learning how simple genomic-style data maps onto Python structures.
  
  The built-in csv docs describe CSV as tabular data and note that rows can be read as lists of strings or in dictionary form with DictReader.`
          },
          {
            title: "The central idea",
            body: `A good beginner summary is:
  
  Tabular data is usually organised into columns and rows, and one row is often treated as one record. In Python, a single record is often easiest to represent as a dictionary, and many records are often stored in a list.
  
  So the key beginner message is:
  one row = one record, and Python often represents that record as a dictionary.`
          },
          {
            title: "What rows and columns are",
            body: `A column is one field or variable that repeats across many records.
  
  For example, in a simple genomic-style table, columns might be:
  • gene
  • quality
  • consequence
  
  A row is one line of data using those columns.
  
  Example table:
  gene,quality,consequence
  BRCA1,95,missense
  TP53,88,frameshift
  CFTR,70,synonymous
  
  Here:
  • gene, quality, and consequence are columns
  • each data line is a row.
  
  So the learner should understand:
  columns describe what kind of information is stored, and rows store one record’s values across those columns.`
          },
          {
            title: "What a record is",
            body: `A record is one complete unit of data.
  
  In beginner genomic-style work, one record might mean:
  • one variant-like row
  • one sample-like row
  • one gene-like row
  
  Using the small table above:
  • BRCA1,95,missense is one record
  • TP53,88,frameshift is another record.
  
  So the learner should understand:
  a record is usually just one row treated as one meaningful data item.
  
  That is why “row” and “record” are often closely connected.`
          },
          {
            title: "Representing one record as a dictionary",
            body: `A single record is often easiest to represent in Python as a dictionary, because each value has a label.
  
  Example:
  record = {
      "gene": "BRCA1",
      "quality": 95,
      "consequence": "missense"
  }
  
  This works well because:
  • "gene" is the key
  • "BRCA1" is the value
  • and the same pattern applies to the other fields.
  
  The csv docs say DictReader maps each row to a dict whose keys come from the field names.
  
  So the learner should understand:
  a dictionary is a natural way to represent one row when the column names matter.`
          },
          {
            title: "Representing many records as a list of dictionaries",
            body: `Once you have more than one record, a very common beginner Python structure is:
  a list of dictionaries
  
  Example:
  records = [
      {"gene": "BRCA1", "quality": 95, "consequence": "missense"},
      {"gene": "TP53", "quality": 88, "consequence": "frameshift"},
      {"gene": "CFTR", "quality": 70, "consequence": "synonymous"}
  ]
  
  This means:
  • the outer structure is a list
  • each item in that list is one record
  • each record is a dictionary.
  
  So the learner should understand:
  a list of dictionaries is one of the most useful beginner patterns for tabular data in Python.
  
  That pattern will come up repeatedly in this module.`
          },
          {
            title: "Why not just use separate variables?",
            body: `A learner might think:
  
  gene1 = "BRCA1"
  quality1 = 95
  consequence1 = "missense"
  
  This works for one row, but it becomes awkward very quickly.
  
  If you have ten or a hundred records, separate variables become messy and hard to work with.
  
  So the learner should understand:
  rows and records are grouped into collections because separate variables do not scale well.
  
  That is one of the biggest reasons data structures matter.`
          },
          {
            title: "How to access values inside a record",
            body: `If one record is a dictionary, then you use keys to access its values.
  
  Example:
  record = {
      "gene": "BRCA1",
      "quality": 95,
      "consequence": "missense"
  }
  print(record["gene"])
  print(record["quality"])
  
  Output:
  BRCA1
  95
  
  So the learner should understand:
  if a record is stored as a dictionary, the column names become the keys you use to look up values.
  
  That makes the data much easier to read.`
          },
          {
            title: "How to access many records",
            body: `If many records are stored as a list of dictionaries, then you usually loop through them.
  
  Example:
  records = [
      {"gene": "BRCA1", "quality": 95},
      {"gene": "TP53", "quality": 88}
  ]
  for record in records:
      print(record["gene"], record["quality"])
  
  Output:
  BRCA1 95
  TP53 88
  
  So the learner should understand:
  list-of-dictionaries data is usually processed one record at a time in a loop.
  
  That is exactly how simple filtering and summaries will work later.`
          },
          {
            title: "Rows as lists versus rows as dictionaries",
            body: `The csv docs explain that normal reader rows are returned as lists of strings, while DictReader maps rows to dictionaries.
  
  That means there are two beginner ways to think about one row:
  
  Row as a list
  Example:
  row = ["BRCA1", "95", "missense"]
  
  Here you use positions like:
  • row[0]
  • row[1]
  
  Row as a dictionary
  Example:
  row = {"gene": "BRCA1", "quality": "95", "consequence": "missense"}
  
  Here you use keys like:
  • row["gene"]
  • row["quality"]
  
  So the learner should understand:
  rows as lists are possible, but rows as dictionaries are often easier to read because the labels stay attached to the values.`
          },
          {
            title: "Where pandas fits later",
            body: `Pandas is a library built for tabular data, and its getting-started docs present the DataFrame as its main table structure.
  
  At this stage, the learner does not need to use pandas yet. But it helps to know that:
  • list-of-dictionaries thinking is a beginner-friendly bridge
  • pandas DataFrames are a more advanced table tool built for similar ideas.
  
  So the learner should understand:
  today’s row/column/record thinking is the foundation for later pandas work.`
          },
          {
            title: "A common beginner mistake",
            body: `A common beginner mistake is mixing up:
  • the whole table
  • one row
  • and one field.
  
  For example, if records is a list of dictionaries:
  records = [
      {"gene": "BRCA1", "quality": 95},
      {"gene": "TP53", "quality": 88}
  ]
  
  then:
  • records is the whole collection
  • records[0] is one record
  • records[0]["gene"] is one field value.
  
  So the learner should understand:
  data often has layers: whole table → one record → one value.
  
  That is a very important beginner habit.`
          },
          {
            title: "The one-sentence takeaway",
            body: `If the learner remembers one sentence from this lesson, it should be:
  
  In simple Python data work, a table is often thought of as many rows, one row is one record, one record is often represented as a dictionary, and many records are often stored together in a list.
  
  That is the core lesson.`
          },
          {
            title: "Worked example",
            body: `Scenario
  
  A learner has this data:
  records = [
      {"gene": "BRCA1", "quality": 95, "consequence": "missense"},
      {"gene": "TP53", "quality": 88, "consequence": "frameshift"}
  ]
  
  Beginner question
  
  What is records[1]["gene"]?
  
  Good beginner answer
  
  records[1] means the second record in the list, because Python uses zero-based indexing. That second record is the dictionary for TP53. Then ["gene"] looks up the value stored under the key "gene" in that dictionary. So the result is "TP53". This is a good example of table → record → field thinking in Python.`
          },
          {
            title: "Lesson summary",
            body: `The learner has understood this lesson if they can say something like:
  
  “A table has columns and rows, and one row can be treated as one record. In Python, one record is often easiest to store as a dictionary, and many records are often stored as a list of dictionaries so they can be looped through and processed.”`
          }
        ],
        sections: [
          {
            heading: "The central idea",
            body:
              "Tabular data is usually organised into columns and rows, and one row is often treated as one record. In Python, a single record is often easiest to represent as a dictionary, and many records are often stored in a list."
          }
        ],
        quiz: [
          {
            question: "What is a column in tabular data?",
            options: [
              "One complete record",
              "A repeating field across many rows",
              "A loop variable",
              "A file path"
            ],
            answerIndex: 1,
            explanation:
              "Columns describe the kind of information stored, such as gene or quality."
          },
          {
            question: "What is a record?",
            options: [
              "One complete row of data treated as one item",
              "A key only",
              "A Python error",
              "A file mode"
            ],
            answerIndex: 0,
            explanation:
              "A record is usually one row considered as one meaningful unit of data."
          },
          {
            question:
              "Which structure is often most useful for one row of labeled data?",
            options: [
              "A single integer",
              "A dictionary",
              "A boolean",
              "A while loop"
            ],
            answerIndex: 1,
            explanation:
              "A dictionary is useful because the column names can be used as keys. The csv.DictReader docs describe rows being mapped this way."
          },
          {
            question:
              "What is a common beginner structure for many tabular records?",
            options: [
              "A list of dictionaries",
              "A string of numbers",
              "A single boolean",
              "One huge print statement"
            ],
            answerIndex: 0,
            explanation:
              "A list of dictionaries is a very practical beginner way to represent many rows in Python."
          }
        ]
      },
      {
        slug: "lesson-2",
        title: "Lesson 2: Reading simple tabular files",
        goal:
          "By the end of this lesson, the learner should be able to answer: “How do I read a simple table from a file into Python, and why are rows sometimes treated as lists and sometimes as dictionaries?”",
        screens: [
          {
            title: "Lesson goal",
            body: `By the end of this lesson, the learner should be able to answer:
  
  “How do I read a simple table from a file into Python, and why are rows sometimes treated as lists and sometimes as dictionaries?”
  
  This lesson follows rows, columns, and records because once the learner understands what a tabular record is, the next step is learning how to load those records from a real file.
  
  Python’s built-in csv module is designed to read and write tabular data in CSV format, and its docs explain that reader returns rows as sequences while DictReader can read rows in dictionary form.`
          },
          {
            title: "The central idea",
            body: `A good beginner summary is:
  
  A tabular file stores rows of data on disk, and Python can read those rows either as simple ordered values or as labeled records using the column names.
  
  So the key beginner message is:
  the file holds the table, and Python turns each row into something your code can work with.`
          },
          {
            title: "What a tabular file is",
            body: `A tabular file is a file where data is arranged like a table:
  • columns describe the fields
  • each row contains one record.
  
  A very common beginner-friendly tabular format is CSV, which stands for comma-separated values.
  
  Example CSV file:
  gene,quality,consequence
  BRCA1,95,missense
  TP53,88,frameshift
  CFTR,70,synonymous
  
  So the learner should understand:
  a CSV file is just a plain text file where values in each row are separated by commas.`
          },
          {
            title: "Why CSV is useful for beginners",
            body: `CSV is useful because:
  • it is simple to read
  • it is human-readable
  • it maps naturally onto rows and columns
  • and Python already has a standard library module for it.
  
  So the learner should understand:
  CSV is not the only tabular format, but it is one of the easiest places to start.
  
  That is why it is a good teaching format before later genomics files.`
          },
          {
            title: "Reading rows with csv.reader",
            body: `The basic tool is csv.reader.
  
  A beginner example looks like this:
  import csv
  with open("variants.csv", "r") as file:
      reader = csv.reader(file)
      for row in reader:
          print(row)
  
  If the file contained:
  gene,quality,consequence
  BRCA1,95,missense
  TP53,88,frameshift
  
  then the output would look like:
  ['gene', 'quality', 'consequence']
  ['BRCA1', '95', 'missense']
  ['TP53', '88', 'frameshift']
  
  So the learner should understand:
  csv.reader usually gives you each row as a list of text values.`
          },
          {
            title: "Why rows come in as strings",
            body: `A very important beginner point:
  
  When csv.reader reads a file, it usually reads values as strings.
  
  So even if a row contains:
  95
  
  Python may first treat it as:
  "95"
  
  So the learner should understand:
  file reading often gives you text first, even when the value looks numeric to a human.
  
  That matters a lot when filtering later.`
          },
          {
            title: "The header row problem",
            body: `In many CSV files, the first row is a header row containing column names.
  
  Example:
  gene,quality,consequence
  BRCA1,95,missense
  TP53,88,frameshift
  
  With csv.reader, the header row is just another row unless you handle it specially.
  
  A common beginner approach is:
  import csv
  with open("variants.csv", "r") as file:
      reader = csv.reader(file)
      header = next(reader)
      print("Header:", header)
      for row in reader:
          print("Data row:", row)
  
  So the learner should understand:
  with csv.reader, the header row does not become labels automatically — you have to handle it yourself.
  
  That is one reason dictionaries often feel easier.`
          },
          {
            title: "Reading rows with csv.DictReader",
            body: `A beginner example:
  import csv
  with open("variants.csv", "r") as file:
      reader = csv.DictReader(file)
      for row in reader:
          print(row)
  
  Now each row is treated using the header names.
  
  Output might look like:
  {'gene': 'BRCA1', 'quality': '95', 'consequence': 'missense'}
  {'gene': 'TP53', 'quality': '88', 'consequence': 'frameshift'}
  
  So the learner should understand:
  DictReader uses the header row as keys, so each row becomes a dictionary-like record instead of just a list of values.
  
  That is often easier to read and reason about.`
          },
          {
            title: "Reader versus DictReader",
            body: `A safe beginner comparison is:
  
  csv.reader
  • gives rows as lists
  • good when you are happy using positions like row[0]
  • simpler, but less descriptive
  
  csv.DictReader
  • gives rows as dictionaries
  • good when you want labels like row["gene"]
  • often clearer for tabular analysis
  
  So the learner should understand:
  reader is position-based, while DictReader is label-based.`
          },
          {
            title: "Why with open(...) still matters",
            body: `Just like in Module 18, the safest beginner pattern is still:
  with open("variants.csv", "r") as file:
  
  So the learner should understand:
  reading tabular files still uses the same safe file-handling habit: open the file with with, then let Python clean it up afterwards.`
          },
          {
            title: "A very common beginner mistake",
            body: `A common mistake is forgetting that DictReader values still come in as strings.
  
  For example, this row:
  {'gene': 'BRCA1', 'quality': '95', 'consequence': 'missense'}
  
  means "95" is text, not yet an integer.
  
  So if a learner later writes:
  if row["quality"] > 80:
      print("High quality")
  
  that may not behave as expected, because one side is text and the other is a number.
  
  So the learner should understand:
  using DictReader solves the label problem, but not the type-conversion problem.
  
  That will matter a lot in the next lesson.`
          },
          {
            title: "A tiny beginner workflow",
            body: `A simple beginner workflow for this lesson is:
  1. create a tiny CSV file with a header and two rows
  2. read it with csv.reader
  3. look at the rows as lists
  4. read it again with csv.DictReader
  5. look at the rows as dictionaries
  6. compare which style feels easier to understand.
  
  That is enough to build real confidence before filtering logic.`
          },
          {
            title: "The one-sentence takeaway",
            body: `If the learner remembers one sentence from this lesson, it should be:
  
  Python’s built-in csv module can read simple tabular files, with reader giving rows as lists and DictReader giving rows in dictionary form using the column names as keys.
  
  That is the core lesson.`
          },
          {
            title: "Worked example",
            body: `Scenario
  
  A learner has this CSV file:
  gene,quality
  BRCA1,95
  TP53,88
  
  and runs:
  import csv
  with open("variants.csv", "r") as file:
      reader = csv.DictReader(file)
      for row in reader:
          print(row["gene"], row["quality"])
  
  Beginner question
  
  What is Python doing here?
  
  Good beginner answer
  
  Python opens the file and creates a DictReader, which uses the first row of the file as column names. Each later row is then read as a dictionary-like record where values can be looked up by key, such as "gene" and "quality". The loop processes one row at a time and prints the selected fields. The csv docs explain that DictReader reads rows in dictionary form using field names.`
          },
          {
            title: "Lesson summary",
            body: `The learner has understood this lesson if they can say something like:
  
  “A tabular file like CSV stores rows and columns in text form. Python’s csv.reader can read rows as lists, while csv.DictReader can read them as dictionary-like records using the header names as keys, although the values usually still come in as strings.”`
          }
        ],
        sections: [
          {
            heading: "The central idea",
            body:
              "A tabular file stores rows of data on disk, and Python can read those rows either as simple ordered values or as labeled records using the column names."
          }
        ],
        quiz: [
          {
            question: "What is a CSV file?",
            options: [
              "A compiled Python program",
              "A plain text tabular file where values are typically separated by commas",
              "A type of loop",
              "A special kind of dictionary only"
            ],
            answerIndex: 1,
            explanation:
              "The built-in csv module docs describe CSV as tabular data in CSV format."
          },
          {
            question: "What does csv.reader usually return for each row?",
            options: ["A function", "A list of strings", "A boolean", "A DataFrame"],
            answerIndex: 1,
            explanation:
              "The csv docs explain that reader objects read rows as sequences, and rows are returned as lists of strings by default."
          },
          {
            question: "What is the main benefit of csv.DictReader?",
            options: [
              "It automatically turns everything into numbers",
              "It reads rows using column names as keys",
              "It deletes the header row permanently",
              "It only works with pandas"
            ],
            answerIndex: 1,
            explanation:
              "The docs say programmers can read data in dictionary form using DictReader."
          },
          {
            question: "What is still important to remember when using DictReader?",
            options: [
              "Values often still come in as strings",
              "It cannot read headers",
              "It only works in interactive mode",
              "It turns every row into a list"
            ],
            answerIndex: 0,
            explanation:
              "Using DictReader makes labels easier, but it does not automatically solve type conversion; row values are typically still strings."
          }
        ]
      },
      {
        slug: "lesson-3",
        title: "Lesson 3: Filtering records with Python logic",
        goal:
          "By the end of this lesson, the learner should be able to answer: “How do I use Python to keep some records and reject others based on simple rules?”",
        screens: [
          {
            title: "Lesson goal",
            body: `By the end of this lesson, the learner should be able to answer:
  
  “How do I use Python to keep some records and reject others based on simple rules?”
  
  This lesson follows reading tabular files because once the learner can load rows into Python, the next practical step is learning how to filter them.
  
  In simple analysis work, filtering means:
  • look at one record
  • check whether it meets a condition
  • keep it if it passes
  • ignore it if it does not.`
          },
          {
            title: "The central idea",
            body: `A good beginner summary is:
  
  Filtering records in Python means looping through rows and using conditions to decide which ones should be kept.
  
  So the key beginner message is:
  a filter is usually just a loop plus an if statement.
  
  That is one of the most important beginner data-analysis patterns.`
          },
          {
            title: "What filtering means in practice",
            body: `At beginner level, filtering is just selection.
  
  For example, you might want to keep only records where:
  • quality is above a threshold
  • gene matches a target
  • consequence matches a value
  • or several conditions are true together.
  
  So the learner should understand:
  filtering is not magic; it is just deciding which rows match your rule.
  
  That is the same reasoning they already use conceptually in bioinformatics, but now they are expressing it in code.`
          },
          {
            title: "The simplest filtering pattern",
            body: `A safe beginner pattern looks like this:
  records = [
      {"gene": "BRCA1", "quality": 95},
      {"gene": "TP53", "quality": 88},
      {"gene": "CFTR", "quality": 70}
  ]
  passed = []
  for record in records:
      if record["quality"] >= 90:
          passed.append(record)
  print(passed)
  
  This code:
  • starts with a list of records
  • creates an empty list called passed
  • looks at each record one by one
  • keeps only the records where the condition is true.
  
  So the learner should understand:
  many beginner filters follow the pattern: start empty, loop, check, append if it passes.`
          },
          {
            title: "Filtering one field at a time",
            body: `The easiest filters usually check one field first.
  
  Example:
  records = [
      {"gene": "BRCA1", "quality": 95},
      {"gene": "TP53", "quality": 88},
      {"gene": "CFTR", "quality": 70}
  ]
  for record in records:
      if record["gene"] == "BRCA1":
          print(record)
  
  This keeps only records where the gene field matches "BRCA1".
  
  So the learner should understand:
  a single-field filter asks one clear question about each record.
  
  That is the easiest place to start before combining rules.`
          },
          {
            title: "Filtering numeric values",
            body: `A very common beginner filter uses a numeric threshold.
  
  Example:
  records = [
      {"gene": "BRCA1", "quality": 95},
      {"gene": "TP53", "quality": 88},
      {"gene": "CFTR", "quality": 70}
  ]
  for record in records:
      if record["quality"] >= 80:
          print(record)
  
  This keeps records with quality 80 or higher.
  
  So the learner should understand:
  threshold-based filtering is one of the simplest and most useful patterns in data work.
  
  That will matter a lot later for QC-style tasks.`
          },
          {
            title: "Why types matter when filtering",
            body: `A very important beginner warning:
  if values come from a CSV file, they often arrive as strings first.
  
  So this record:
  {"gene": "BRCA1", "quality": "95"}
  
  has "95" as text, not as an integer.
  
  That means a filter like:
  if record["quality"] >= 80:
  
  may fail or behave unexpectedly, because one side is text and the other is a number.
  
  A safer beginner version is:
  if int(record["quality"]) >= 80:
  
  So the learner should understand:
  before numeric filtering, you often need to convert text values into numbers.
  
  That is one of the most common beginner issues in real data work.`
          },
          {
            title: "Combining conditions",
            body: `Many useful filters need more than one rule.
  
  Example:
  records = [
      {"gene": "BRCA1", "quality": 95, "consequence": "missense"},
      {"gene": "TP53", "quality": 88, "consequence": "frameshift"},
      {"gene": "BRCA1", "quality": 70, "consequence": "synonymous"}
  ]
  for record in records:
      if record["gene"] == "BRCA1" and record["quality"] >= 80:
          print(record)
  
  This keeps records only if both conditions are true.
  
  So the learner should understand:
  you can make filters more specific by combining conditions with words like and.
  
  That is how simple rules become more realistic.`
          },
          {
            title: "Keeping versus rejecting",
            body: `A useful beginner mindset is that filtering can be thought of in two ways:
  
  Keep-if logic
  Example:
  if record["quality"] >= 80:
      passed.append(record)
  
  Reject-if logic
  Example:
  if record["quality"] < 80:
      continue
  passed.append(record)
  
  At this stage, keep-if logic is usually easier to read.
  
  So the learner should understand:
  beginner filters are often clearer when written as “keep this row if…” rather than “reject this row unless…”.`
          },
          {
            title: "Filtering with DictReader",
            body: `This pattern works naturally with CSV rows read using csv.DictReader.
  
  Example:
  import csv
  passed = []
  with open("variants.csv", "r") as file:
      reader = csv.DictReader(file)
      for row in reader:
          if int(row["quality"]) >= 80:
              passed.append(row)
  print(passed)
  
  So the learner should understand:
  real beginner filtering often means reading rows with DictReader, then checking each row in a loop.`
          },
          {
            title: "A very common beginner mistake",
            body: `A common mistake is writing a filter but forgetting where the kept records go.
  
  Example:
  records = [
      {"gene": "BRCA1", "quality": 95},
      {"gene": "TP53", "quality": 88}
  ]
  passed = []
  for record in records:
      if record["quality"] >= 90:
          print(record)
  
  This prints the passing records, but it does not save them into passed.
  
  A corrected version would be:
  for record in records:
      if record["quality"] >= 90:
          passed.append(record)
  
  So the learner should understand:
  printing a passing row is not the same as storing a passing row.`
          },
          {
            title: "A second common beginner mistake",
            body: `Another common mistake is accidentally checking the wrong thing.
  
  Example:
  for record in records:
      if records["quality"] >= 90:
          passed.append(record)
  
  This is wrong because records is the whole list, not one record.
  
  The correct version is:
  for record in records:
      if record["quality"] >= 90:
          passed.append(record)
  
  So the learner should understand:
  inside the loop, it is usually the current record that should be checked, not the whole collection.`
          },
          {
            title: "A tiny beginner workflow",
            body: `A simple beginner workflow for this lesson is:
  1. create a list of three small record dictionaries
  2. make an empty list called passed
  3. loop through the records
  4. keep only those with quality >= 80
  5. print the final passed list
  6. then add a second condition, such as gene == "BRCA1".
  
  That is enough to build real confidence before summaries.`
          },
          {
            title: "The one-sentence takeaway",
            body: `If the learner remembers one sentence from this lesson, it should be:
  
  Filtering records in Python usually means looping through rows one at a time, checking each one with an if condition, and keeping only the rows that meet the rule.
  
  That is the core lesson.`
          },
          {
            title: "Worked example",
            body: `Scenario
  
  A learner has this data:
  records = [
      {"gene": "BRCA1", "quality": 95},
      {"gene": "TP53", "quality": 88},
      {"gene": "CFTR", "quality": 70}
  ]
  
  and writes:
  passed = []
  for record in records:
      if record["quality"] >= 80:
          passed.append(record)
  print(passed)
  
  Beginner question
  
  What is Python doing here?
  
  Good beginner answer
  
  Python starts with an empty list called passed. Then it loops through the records one at a time. For each record, it checks whether the quality value is at least 80. If the condition is true, that record is added to passed using append(). At the end, the program prints the records that passed the filter. This uses the standard beginner pattern of combining a loop, an if statement, and list appending.`
          },
          {
            title: "Lesson summary",
            body: `The learner has understood this lesson if they can say something like:
  
  “To filter records in Python, I usually loop through the rows one by one, check each record with an if statement, and save the rows that pass into a new list. I also know that when rows come from a CSV file, numeric-looking values may still need conversion from strings first.”`
          }
        ],
        sections: [
          {
            heading: "The central idea",
            body:
              "Filtering records in Python means looping through rows and using conditions to decide which ones should be kept."
          }
        ],
        quiz: [
          {
            question: "What is the safest beginner description of filtering?",
            options: [
              "Saving every record into a file",
              "Choosing which records to keep based on a rule",
              "Printing all rows",
              "Turning dictionaries into strings"
            ],
            answerIndex: 1,
            explanation:
              "Filtering means deciding which rows match the rule and should be kept."
          },
          {
            question: `What does this pattern do?
  passed = []
  for record in records:
      if record["quality"] >= 80:
          passed.append(record)`,
            options: [
              "Deletes the file",
              "Keeps only records whose quality is 80 or higher",
              "Sorts the records alphabetically",
              "Turns all values into booleans"
            ],
            answerIndex: 1,
            explanation:
              "The loop checks each record and appends only the ones that pass the condition."
          },
          {
            question: "Why can CSV-based filtering cause type problems?",
            options: [
              "Because CSV files can only store booleans",
              "Because row values often come in as strings first",
              "Because DictReader returns functions",
              "Because lists cannot store rows"
            ],
            answerIndex: 1,
            explanation:
              "Rows are usually read as strings unless special handling is used, so numeric-looking values may still need conversion."
          },
          {
            question: "What is a common beginner mistake in filtering?",
            options: [
              "Using if inside a loop",
              "Checking the whole collection instead of the current record",
              "Creating an empty list first",
              "Using dictionaries for rows"
            ],
            answerIndex: 1,
            explanation:
              "Inside a loop, it is usually the current row or record that should be checked, not the whole list."
          }
        ]
      },
      {
        slug: "lesson-4",
        title: "Lesson 4: Summaries and simple QC-style calculations",
        goal:
          "By the end of this lesson, the learner should be able to answer: “How do I use Python to count records, calculate simple summaries, and make basic QC-style checks from tabular data?”",
        screens: [
          {
            title: "Lesson goal",
            body: `By the end of this lesson, the learner should be able to answer:
  
  “How do I use Python to count records, calculate simple summaries, and make basic QC-style checks from tabular data?”
  
  This lesson follows filtering because once the learner can decide which records to keep, the next useful step is learning how to summarise what is in the data.
  
  That means beginner questions like:
  • how many records are there?
  • how many passed the filter?
  • what is the highest value?
  • what is the lowest value?
  • what is the average?`
          },
          {
            title: "The central idea",
            body: `A good beginner summary is:
  
  Summarising data means turning many rows into a smaller set of useful answers, such as counts, totals, minimums, maximums, and averages.
  
  So the key beginner message is:
  filtering tells you which rows matter; summarising tells you what the overall data looks like.
  
  That is an important step in moving from raw rows to useful information.`
          },
          {
            title: "What a summary is",
            body: `At beginner level, a summary is a smaller description of a bigger dataset.
  
  For example, instead of looking at these four records one by one:
  records = [
      {"gene": "BRCA1", "quality": 95},
      {"gene": "TP53", "quality": 88},
      {"gene": "CFTR", "quality": 70},
      {"gene": "BRCA1", "quality": 91}
  ]
  
  you might want to know:
  • there are 4 records total
  • 3 records have quality at least 80
  • the highest quality is 95
  • the lowest quality is 70.
  
  So the learner should understand:
  a summary reduces a lot of row-level detail into a few useful facts.`
          },
          {
            title: "Counting records",
            body: `The simplest summary is often just a count.
  
  If records are stored in a list, the total number of records can be found with len().
  
  Example:
  records = [
      {"gene": "BRCA1", "quality": 95},
      {"gene": "TP53", "quality": 88},
      {"gene": "CFTR", "quality": 70}
  ]
  print(len(records))
  
  Output:
  3
  
  So the learner should understand:
  counting is often the first summary question to ask.
  
  It tells you how much data you are dealing with.`
          },
          {
            title: "Counting how many records pass a condition",
            body: `A very common QC-style task is not just:
  • how many rows are there?
  
  but:
  • how many pass a rule?
  
  Example:
  records = [
      {"gene": "BRCA1", "quality": 95},
      {"gene": "TP53", "quality": 88},
      {"gene": "CFTR", "quality": 70}
  ]
  passed_count = 0
  for record in records:
      if record["quality"] >= 80:
          passed_count = passed_count + 1
  print(passed_count)
  
  Output:
  2
  
  This works because:
  • passed_count starts at 0
  • each passing record adds 1.
  
  So the learner should understand:
  a counter variable is one of the simplest ways to build a useful summary.`
          },
          {
            title: "Keeping track of totals",
            body: `Sometimes you want a running total.
  
  Example:
  records = [
      {"gene": "BRCA1", "quality": 95},
      {"gene": "TP53", "quality": 88},
      {"gene": "CFTR", "quality": 70}
  ]
  total_quality = 0
  for record in records:
      total_quality = total_quality + record["quality"]
  print(total_quality)
  
  Output:
  253
  
  So the learner should understand:
  a running total is built by starting at 0 and adding each row’s value as you loop.
  
  That is the basis for averages and other summaries.`
          },
          {
            title: "Calculating an average",
            body: `Once you have:
  • the total
  • and the count
  
  you can calculate an average.
  
  Example:
  records = [
      {"gene": "BRCA1", "quality": 95},
      {"gene": "TP53", "quality": 88},
      {"gene": "CFTR", "quality": 70}
  ]
  total_quality = 0
  for record in records:
      total_quality = total_quality + record["quality"]
  average_quality = total_quality / len(records)
  print(average_quality)
  
  Output:
  84.33333333333333
  
  So the learner should understand:
  average = total divided by count.
  
  That sounds simple, but it is one of the most useful beginner summaries.`
          },
          {
            title: "Finding the maximum value",
            body: `A very useful QC-style question is:
  • what is the highest quality?
  • what is the lowest depth?
  • what is the best score?
  
  A beginner way to find the maximum is:
  records = [
      {"gene": "BRCA1", "quality": 95},
      {"gene": "TP53", "quality": 88},
      {"gene": "CFTR", "quality": 70}
  ]
  max_quality = records[0]["quality"]
  for record in records:
      if record["quality"] > max_quality:
          max_quality = record["quality"]
  print(max_quality)
  
  Output:
  95
  
  So the learner should understand:
  finding a maximum means keeping track of the biggest value seen so far.`
          },
          {
            title: "Finding the minimum value",
            body: `The same idea works for the minimum.
  
  Example:
  records = [
      {"gene": "BRCA1", "quality": 95},
      {"gene": "TP53", "quality": 88},
      {"gene": "CFTR", "quality": 70}
  ]
  min_quality = records[0]["quality"]
  for record in records:
      if record["quality"] < min_quality:
          min_quality = record["quality"]
  print(min_quality)
  
  Output:
  70
  
  So the learner should understand:
  finding a minimum means keeping track of the smallest value seen so far.
  
  These max/min patterns are basic but very useful.`
          },
          {
            title: "Simple category counts",
            body: `Sometimes you want to count how often something appears.
  
  For example:
  • how many rows are missense?
  • how many are frameshift?
  • how many belong to BRCA1?
  
  A beginner example:
  records = [
      {"gene": "BRCA1"},
      {"gene": "TP53"},
      {"gene": "BRCA1"},
      {"gene": "CFTR"}
  ]
  brca1_count = 0
  for record in records:
      if record["gene"] == "BRCA1":
          brca1_count = brca1_count + 1
  print(brca1_count)
  
  Output:
  2
  
  So the learner should understand:
  summaries do not have to be numeric thresholds only; they can also be counts of categories.`
          },
          {
            title: "Producing a simple text summary",
            body: `A useful beginner habit is not just calculating numbers, but printing a readable summary.
  
  Example:
  records = [
      {"gene": "BRCA1", "quality": 95},
      {"gene": "TP53", "quality": 88},
      {"gene": "CFTR", "quality": 70}
  ]
  passed_count = 0
  for record in records:
      if record["quality"] >= 80:
          passed_count = passed_count + 1
  print("Total records:", len(records))
  print("Records with quality >= 80:", passed_count)
  
  Output:
  Total records: 3
  Records with quality >= 80: 2
  
  So the learner should understand:
  a summary becomes much more useful when it is presented clearly, not just stored in variables.`
          },
          {
            title: "Why type still matters here",
            body: `A very common beginner issue is forgetting that values from CSV files may still be strings.
  
  For example, if a row looks like:
  {"gene": "BRCA1", "quality": "95"}
  
  then this may cause trouble:
  total_quality = total_quality + record["quality"]
  
  because "95" is text, not a number.
  
  A safer version is:
  total_quality = total_quality + int(record["quality"])
  
  So the learner should understand:
  before doing QC-style numeric summaries, you often need to convert text values into integers or floats.`
          },
          {
            title: "A common beginner mistake",
            body: `A common mistake is mixing up:
  • total count
  • passing count
  • and average.
  
  For example, a learner may accidentally divide by the wrong number or count all rows when they meant only passing rows.
  
  So the learner should understand:
  when writing summaries, it is important to be clear about exactly what is being counted or averaged.
  
  That clarity matters just as much as the code itself.`
          },
          {
            title: "A tiny beginner workflow",
            body: `A simple beginner workflow for this lesson is:
  1. count the total number of records
  2. count how many pass a threshold
  3. add up one numeric field
  4. calculate the average
  5. find the minimum and maximum
  6. print a small summary report.
  
  That is enough to build real confidence before pandas.`
          },
          {
            title: "The one-sentence takeaway",
            body: `If the learner remembers one sentence from this lesson, it should be:
  
  Simple QC-style calculations in Python are usually built by looping through records and keeping track of counts, totals, minimums, maximums, or averages so that many rows can be turned into a few useful summary values.
  
  That is the core lesson.`
          },
          {
            title: "Worked example",
            body: `Scenario
  
  A learner has this data:
  records = [
      {"gene": "BRCA1", "quality": 95},
      {"gene": "TP53", "quality": 88},
      {"gene": "CFTR", "quality": 70}
  ]
  
  and writes:
  passed_count = 0
  for record in records:
      if record["quality"] >= 80:
          passed_count = passed_count + 1
  print(passed_count)
  
  Beginner question
  
  What is Python doing here?
  
  Good beginner answer
  
  Python starts with a counter set to 0. Then it loops through the records one at a time and checks whether each record’s quality is at least 80. If the condition is true, it increases the counter by 1. At the end, it prints the total number of records that passed the threshold. This is a basic example of a simple QC-style summary calculation.`
          },
          {
            title: "Lesson summary",
            body: `The learner has understood this lesson if they can say something like:
  
  “I can loop through records and calculate useful summaries such as total count, passing count, total, average, minimum, and maximum. I also understand that if values come from a text file, I may need to convert them to numbers before doing QC-style calculations.”`
          }
        ],
        sections: [
          {
            heading: "The central idea",
            body:
              "Summarising data means turning many rows into a smaller set of useful answers, such as counts, totals, minimums, maximums, and averages."
          }
        ],
        quiz: [
          {
            question: "What is a summary in beginner data work?",
            options: [
              "A single row copied into a new file",
              "A smaller set of useful facts that describes a larger dataset",
              "A kind of loop only",
              "A dictionary key"
            ],
            answerIndex: 1,
            explanation:
              "A summary reduces many rows into a few useful answers such as counts or averages."
          },
          {
            question: `What does this code do?
  count = 0
  for record in records:
      if record["quality"] >= 80:
          count = count + 1`,
            options: [
              "Finds the maximum quality",
              "Counts how many records have quality at least 80",
              "Sorts the records",
              "Changes all quality values"
            ],
            answerIndex: 1,
            explanation:
              "The counter increases only for rows that pass the threshold."
          },
          {
            question: "What do you need in order to calculate an average?",
            options: [
              "Only the maximum",
              "A total and a count",
              "Only the first row",
              "A dictionary and a file path"
            ],
            answerIndex: 1,
            explanation: "Average is total divided by count."
          },
          {
            question: "Why can CSV-based summaries fail if you are not careful?",
            options: [
              "Because CSV files cannot store numbers",
              "Because numeric-looking values may still come in as strings and need conversion",
              "Because lists cannot hold rows",
              "Because loops do not work with files"
            ],
            answerIndex: 1,
            explanation:
              "Values read from text tables often need conversion before numeric calculations."
          }
        ]
      },
      {
        slug: "lesson-5",
        title: "Lesson 5: A gentle introduction to pandas",
        goal:
          "By the end of this lesson, the learner should be able to answer: “What is pandas, what is a DataFrame, and how can I use pandas for very simple tabular data tasks?”",
        screens: [
          {
            title: "Lesson goal",
            body: `By the end of this lesson, the learner should be able to answer:
  
  “What is pandas, what is a DataFrame, and how can I use pandas for very simple tabular data tasks?”
  
  This lesson follows summaries and simple QC-style calculations because the learner has already seen how to work with tabular data using:
  • lists of dictionaries
  • loops
  • conditions
  • and simple counters.
  
  Now the learner is ready for a gentler, more table-focused tool:
  pandas.`
          },
          {
            title: "The central idea",
            body: `A good beginner summary is:
  
  pandas is a Python library for working with tables, and its main table object is called a DataFrame.
  
  So the key beginner message is:
  if plain Python lets you work with rows one at a time, pandas gives you a more direct way to work with the whole table.
  
  That is the main reason pandas is so widely used.`
          },
          {
            title: "What pandas is",
            body: `At beginner level, pandas is best thought of as:
  a tool built to make tabular data easier to read, explore, filter, and summarise.
  
  So the learner should understand:
  pandas does not replace Python — it sits inside Python and gives you better tools for tables.
  
  That is why it appears at this point in the curriculum rather than at the very beginning.`
          },
          {
            title: "What a DataFrame is",
            body: `The main beginner concept in pandas is the DataFrame.
  
  A safe beginner explanation is:
  a DataFrame is a table with rows and columns.
  
  For example, a small genomic-style table might look like this conceptually:
  
  gene    quality    consequence
  BRCA1   95         missense
  TP53    88         frameshift
  CFTR    70         synonymous
  
  So the learner should understand:
  if a list of dictionaries is a beginner-friendly way to think about a table, a DataFrame is pandas’ built-in table structure.`
          },
          {
            title: "Importing pandas",
            body: `To use pandas, you first import it.
  
  A very common convention is:
  import pandas as pd
  
  This means:
  • import the pandas library
  • give it the shorter name pd.
  
  So the learner should understand:
  pd is just a short nickname for pandas.
  
  They will see that pattern constantly in real code.`
          },
          {
            title: "Reading a simple CSV into pandas",
            body: `One of the most useful beginner pandas tasks is reading a CSV file into a DataFrame.
  
  A beginner example:
  import pandas as pd
  df = pd.read_csv("variants.csv")
  print(df)
  
  If variants.csv contained:
  gene,quality,consequence
  BRCA1,95,missense
  TP53,88,frameshift
  CFTR,70,synonymous
  
  then df would be a DataFrame representing that table.
  
  So the learner should understand:
  pd.read_csv() is one of the easiest ways to bring a tabular file into pandas.`
          },
          {
            title: "Why this can feel easier than csv.DictReader",
            body: `Earlier in the module, the learner saw how to use csv.DictReader and loops.
  
  That is still useful. But pandas often feels easier for tables because:
  • the whole table is loaded at once
  • column names stay attached
  • many operations can be written more directly.
  
  So the learner should understand:
  pandas is not “more correct” than plain Python — it is often just more convenient for table-shaped data.
  
  That is why this lesson is a gentle introduction rather than a replacement of earlier lessons.`
          },
          {
            title: "Looking at columns",
            body: `One of the simplest pandas actions is selecting a column.
  
  Example:
  import pandas as pd
  df = pd.read_csv("variants.csv")
  print(df["gene"])
  
  This selects the gene column from the DataFrame.
  
  So the learner should understand:
  with pandas, column names are a very natural way to access parts of the table.
  
  That is one reason DataFrames are often easier to read than raw list-based code.`
          },
          {
            title: "Basic filtering in pandas",
            body: `Pandas also makes simple filtering feel more table-like.
  
  Example:
  import pandas as pd
  df = pd.read_csv("variants.csv")
  high_quality = df[df["quality"] >= 80]
  print(high_quality)
  
  This keeps only the rows where the quality column is at least 80.
  
  So the learner should understand:
  basic pandas filtering often reads like “keep the rows where this condition is true.”`
          },
          {
            title: "Basic summary statistics in pandas",
            body: `Pandas also supports simple summaries directly.
  
  A beginner example:
  import pandas as pd
  df = pd.read_csv("variants.csv")
  print(df["quality"].mean())
  print(df["quality"].max())
  print(df["quality"].min())
  
  So the learner should understand:
  pandas can often calculate common summary values more directly than manual loops.
  
  That is one of its biggest practical advantages.`
          },
          {
            title: "Why this is called a gentle introduction",
            body: `This lesson is intentionally limited.
  
  The learner does not need yet:
  • advanced DataFrame indexing
  • grouping and joining
  • complex cleaning operations
  • or production-style pandas workflows.
  
  So the learner should understand:
  the goal here is just to see pandas as a table tool, not to master the whole library at once.
  
  That keeps the lesson manageable.`
          },
          {
            title: "A common beginner mistake",
            body: `A common beginner mistake is thinking pandas removes the need to understand rows, columns, and types.
  
  It does not.
  
  For example:
  • you still need to know what each column means
  • you still need to know whether a column contains numbers or text
  • you still need to understand what your filter condition is doing.
  
  So the learner should understand:
  pandas makes table work easier, but it does not remove the need for clear thinking about the data.
  
  That is why this module introduced row/record logic first.`
          },
          {
            title: "A tiny beginner workflow",
            body: `A simple beginner workflow for this lesson is:
  1. import pandas as pd
  2. read a tiny CSV into df with pd.read_csv()
  3. print the whole table
  4. print one column such as df["gene"]
  5. filter the rows with a simple condition
  6. calculate one summary such as mean or max.
  
  That is enough to build real confidence before the last lesson on file paths and organisation.`
          },
          {
            title: "The one-sentence takeaway",
            body: `If the learner remembers one sentence from this lesson, it should be:
  
  pandas is a Python library for tabular data, and its main structure, the DataFrame, makes it easier to read CSV files, select columns, filter rows, and calculate simple summaries.
  
  That is the core lesson.`
          },
          {
            title: "Worked example",
            body: `Scenario
  
  A learner writes:
  import pandas as pd
  df = pd.read_csv("variants.csv")
  high_quality = df[df["quality"] >= 80]
  print(high_quality)
  
  Beginner question
  
  What is Python doing here?
  
  Good beginner answer
  
  Python first imports pandas and gives it the nickname pd. Then it reads the CSV file into a pandas DataFrame called df, which is a table structure with rows and columns. After that, it creates a filtered table called high_quality that keeps only the rows where the quality column is at least 80. Finally, it prints the filtered table.`
          },
          {
            title: "Lesson summary",
            body: `The learner has understood this lesson if they can say something like:
  
  “Pandas is a Python library for tables, and a DataFrame is its main table structure. I can read a CSV into a DataFrame, look at columns, filter rows with a condition, and calculate simple summaries more directly than I could with only loops and dictionaries.”`
          }
        ],
        sections: [
          {
            heading: "The central idea",
            body:
              "pandas is a Python library for working with tables, and its main table object is called a DataFrame."
          }
        ],
        quiz: [
          {
            question: "What is pandas mainly for?",
            options: [
              "Only drawing images",
              "Working with tabular data in Python",
              "Only building websites",
              "Replacing Python itself"
            ],
            answerIndex: 1,
            explanation:
              "The pandas docs say that when working with tabular data, pandas is the right tool and helps you explore, clean, and process your data."
          },
          {
            question: "What is a DataFrame?",
            options: [
              "A loop statement",
              "A table structure in pandas",
              "A file mode",
              "A Python error type"
            ],
            answerIndex: 1,
            explanation:
              "The pandas getting-started docs state that in pandas a data table is called a DataFrame."
          },
          {
            question: `What does pd.read_csv("variants.csv") do?`,
            options: [
              "Deletes the file",
              "Reads a CSV file into a pandas table",
              "Converts the file into a function",
              "Only prints the header row"
            ],
            answerIndex: 1,
            explanation:
              "The pandas docs explain that read_* functions, including CSV reading, are used to import tabular data."
          },
          {
            question:
              "What is the safest beginner message about pandas?",
            options: [
              "It removes the need to understand tables",
              "It is a table tool that makes common tabular tasks easier, but you still need to understand rows, columns, and data types",
              "It should replace all plain Python code immediately",
              "It is only useful for experts"
            ],
            answerIndex: 1,
            explanation:
              "Pandas makes table work easier, but the learner still needs to understand what the data means and how the columns behave."
          }
        ]
      },
      {
        slug: "lesson-6",
        title: "Lesson 6: File paths, organisation, and beginner-safe data habits",
        goal:
          "By the end of this lesson, the learner should be able to answer: “How do I handle file paths more safely in Python, and what beginner habits make data scripts easier to rerun, understand, and trust?”",
        screens: [
          {
            title: "Lesson goal",
            body: `By the end of this lesson, the learner should be able to answer:
  
  “How do I handle file paths more safely in Python, and what beginner habits make data scripts easier to rerun, understand, and trust?”
  
  This lesson finishes Module 19 because once the learner can:
  • read simple tables
  • filter records
  • make summaries
  • and use beginner-level pandas
  
  the next step is learning how to keep file handling from becoming messy.`
          },
          {
            title: "The central idea",
            body: `A good beginner summary is:
  
  Good file handling means your script knows where files are, uses clear paths, and reads and writes them in a way that is easy to understand and rerun.
  
  So the key beginner message is:
  path handling and file organisation are not side details — they are part of writing reliable data code.`
          },
          {
            title: "What a file path is",
            body: `A file path is the location of a file on the computer.
  
  Examples:
  • variants.csv
  • data/variants.csv
  • /home/user/project/data/variants.csv
  
  So the learner should understand:
  a path is simply how your program knows where to find or save a file.`
          },
          {
            title: "Why paths matter",
            body: `A script that only works when the file happens to be in one exact place is fragile.
  
  For example, this might work once:
  with open("variants.csv", "r") as file:
      ...
  
  but later fail if:
  • the file is moved
  • the script is run from a different folder
  • the project is reorganised.
  
  So the learner should understand:
  many beginner file errors are really path problems, not data problems.
  
  That is why path handling deserves its own lesson.`
          },
          {
            title: "What pathlib.Path is",
            body: `A beginner example:
  from pathlib import Path
  file_path = Path("data") / "variants.csv"
  print(file_path)
  
  This builds a path in a cleaner way than manually joining strings.
  
  So the learner should understand:
  Path gives you a cleaner, safer way to work with file locations than treating paths as plain strings all the time.`
          },
          {
            title: "Why the / operator is useful with paths",
            body: `One very beginner-friendly feature of pathlib is this pattern:
  from pathlib import Path
  base = Path("data")
  file_path = base / "variants.csv"
  
  So the learner should understand:
  with Path, / means “go inside this folder to this file or subfolder.”
  
  That often feels much clearer than string-based path building.`
          },
          {
            title: "Using Path with file reading",
            body: `You can still use with open(...), but now with a path object.
  
  Example:
  from pathlib import Path
  import csv
  file_path = Path("data") / "variants.csv"
  with file_path.open("r") as file:
      reader = csv.DictReader(file)
      for row in reader:
          print(row)
  
  So the learner should understand:
  Path objects can be used directly for file operations, so path handling and file reading fit together naturally.`
          },
          {
            title: "Keeping input and output organised",
            body: `A very good beginner habit is to keep files organised in a simple structure.
  
  For example:
  project/
      data/
          variants.csv
      results/
          summary.txt
      script.py
  
  Then your code can use paths like:
  from pathlib import Path
  input_file = Path("data") / "variants.csv"
  output_file = Path("results") / "summary.txt"
  
  So the learner should understand:
  clear folder structure makes scripts easier to rerun and easier to understand later.
  
  This matters more and more as projects grow.`
          },
          {
            title: "Why hard-coded messy paths are risky",
            body: `A common beginner habit is to use one long path copied from one moment on one computer.
  
  For example:
  file_path = "C:/Users/Someone/Desktop/final_new_real_variants_latest2.csv"
  
  This may work on one machine, in one folder layout, and then fail later.
  
  So the learner should understand:
  hard-coded messy paths make scripts harder to move, harder to share, and harder to trust.
  
  That does not mean absolute paths are always wrong, but they are often a poor beginner default.`
          },
          {
            title: "A good beginner habit: name paths clearly",
            body: `Good variable names make path handling much easier to follow.
  
  Helpful examples:
  • input_file
  • output_file
  • data_dir
  • results_dir
  
  Less helpful examples:
  • x
  • file1
  • thing
  
  So the learner should understand:
  clear path names make it much easier to tell what the script is reading and what it is writing.`
          },
          {
            title: "A good beginner habit: separate reading, processing, and writing",
            body: `A useful way to structure a small data script is:
  1. define the input path
  2. read the data
  3. process or summarise the data
  4. define the output path
  5. write the result
  
  For example:
  from pathlib import Path
  input_file = Path("data") / "variants.csv"
  output_file = Path("results") / "summary.txt"
  
  Then later:
  • read from input_file
  • write to output_file
  
  So the learner should understand:
  keeping input and output steps separate makes the script easier to follow and debug.`
          },
          {
            title: "Checking whether a path exists",
            body: `A beginner example:
  from pathlib import Path
  file_path = Path("data") / "variants.csv"
  print(file_path.exists())
  
  This helps answer:
  • does the file seem to be there?
  • is the path likely correct?
  
  So the learner should understand:
  before blaming the data, it is often worth checking whether the file path is right and the file actually exists.`
          },
          {
            title: "A common beginner mistake",
            body: `A common mistake is mixing up:
  • the folder path
  • the file path
  • and the current working location of the script.
  
  For example, a learner may think:
  • “the file exists”
  
  but the script still cannot find it, because the relative path is being interpreted from a different folder than expected.
  
  So the learner should understand:
  a path can look correct to a human and still be wrong for the script if it is relative to the wrong place.
  
  That is one reason Path and clearer project structure help so much.`
          },
          {
            title: "A second good beginner habit: write outputs on purpose",
            body: `Another useful habit is to choose clear output filenames such as:
  • filtered_variants.csv
  • summary.txt
  • qc_report.txt
  
  instead of vague names like:
  • new.txt
  • final2.txt
  • output_latest_really_final.txt
  
  So the learner should understand:
  clear filenames are part of good data hygiene.
  
  They make it easier to know what each file is for.`
          },
          {
            title: "Why this matters before larger data work",
            body: `This lesson may seem simple, but it prepares the learner for much more realistic coding later.
  
  If file handling is messy, then later work with:
  • larger tables
  • multiple inputs
  • saved reports
  • and pipelines
  
  becomes harder to trust and harder to debug.
  
  So the learner should understand:
  safe path and file habits are the small foundations that make bigger data workflows manageable.
  
  That is why this lesson closes the module.`
          },
          {
            title: "The one-sentence takeaway",
            body: `If the learner remembers one sentence from this lesson, it should be:
  
  Using clear paths, organised folders, and beginner-safe habits like Path, with open(...), and deliberate input/output naming makes Python data scripts easier to rerun, understand, and trust.
  
  That is the core lesson.`
          },
          {
            title: "Worked example",
            body: `Scenario
  
  A learner writes:
  from pathlib import Path
  input_file = Path("data") / "variants.csv"
  print(input_file.exists())
  
  Beginner question
  
  What is Python doing here?
  
  Good beginner answer
  
  Python creates a path object pointing to data/variants.csv using Path and the / operator. Then it checks whether something exists at that path using exists(). This is a simple but useful way to test whether a file path is likely correct before trying to read the file. The pathlib docs describe Path as the usual concrete path class and show path queries such as exists().`
          },
          {
            title: "Lesson summary",
            body: `The learner has understood this lesson if they can say something like:
  
  “A path tells Python where a file is, and pathlib.Path gives me a cleaner way to build and check paths. I should keep inputs and outputs organised, use clear filenames, and structure small scripts so reading, processing, and writing stay easy to follow.”`
          }
        ],
        sections: [
          {
            heading: "The central idea",
            body:
              "Good file handling means your script knows where files are, uses clear paths, and reads and writes them in a way that is easy to understand and rerun."
          }
        ],
        quiz: [
          {
            question: "What is a file path?",
            options: [
              "A Python function only",
              "A location that tells Python where a file is",
              "A type of loop",
              "A column name"
            ],
            answerIndex: 1,
            explanation:
              "A path represents the file’s location in the filesystem. The pathlib docs describe path objects as representing filesystem paths."
          },
          {
            question: "What is Path from pathlib mainly used for?",
            options: [
              "Sorting numbers",
              "Working with filesystem paths more clearly",
              "Replacing dictionaries",
              "Turning CSV files into booleans"
            ],
            answerIndex: 1,
            explanation:
              "The pathlib docs describe it as object-oriented filesystem paths and recommend Path for most ordinary use."
          },
          {
            question: `Why is this pattern useful?
  base = Path("data")
  file_path = base / "variants.csv"`,
            options: [
              "It creates a function",
              "It builds a child path in a clearer way",
              "It deletes the folder",
              "It automatically reads the CSV"
            ],
            answerIndex: 1,
            explanation:
              "The pathlib docs say the slash operator helps create child paths, similar to path joining."
          },
          {
            question:
              "What is the safest overall beginner message of this lesson?",
            options: [
              "File paths are minor details",
              "Clear path handling and file organisation make data scripts easier to rerun and trust",
              "Absolute paths are always wrong",
              "Folder structure does not matter in Python"
            ],
            answerIndex: 1,
            explanation:
              "This is the integrated lesson: cleaner file organisation and path handling reduce confusion and make scripts more dependable."
          }
        ]
      }
    ]
  };