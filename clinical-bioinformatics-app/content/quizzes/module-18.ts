export const module18Quiz = [
    {
      question: `A learner types this into interactive Python:
  2 + 3
  and sees:
  5
  
  What is the best explanation?`,
      options: [
        "Python saved the result to a file",
        "The interpreter evaluated the expression and displayed the result",
        "Python created a function automatically",
        "Python converted the result into a string first"
      ],
      answerIndex: 1,
      explanation:
        "The Python interpreter can run code interactively, evaluating expressions and showing the result immediately."
    },
    {
      question: "Which statement about variables is most accurate?",
      options: [
        "A variable is the same thing as a file",
        "A variable is a name that refers to a value",
        "A variable is always a number",
        "A variable can only store one letter at a time"
      ],
      answerIndex: 1,
      explanation:
        "In beginner Python, assignment gives a name to a value so it can be reused later."
    },
    {
      question: `Why does this code fail?
  age = "25"
  print(age + 1)`,
      options: [
        "Because print() cannot display numbers",
        'Because "25" is a string, so Python does not treat it as an integer in arithmetic',
        "Because variables cannot store text",
        "Because 1 must also be in quotes"
      ],
      answerIndex: 1,
      explanation:
        'A quoted value like "25" is text, not an integer, so adding 1 causes a type mismatch.'
    },
    {
      question: "When is a list more appropriate than a dictionary?",
      options: [
        'When each value needs a label like "gene" or "quality"',
        "When you want an ordered collection of items and access by position",
        "When you only want to store booleans",
        "When you want to return from a function"
      ],
      answerIndex: 1,
      explanation:
        "Lists are ordered sequence types, while dictionaries are mapping types that store values by key."
    },
    {
      question: `What does this code print?
  genes = ["BRCA1", "TP53", "CFTR"]
  print(genes[1])`,
      options: ["BRCA1", "TP53", "CFTR", "An error"],
      answerIndex: 1,
      explanation:
        "Python uses zero-based indexing, so index 1 refers to the second item."
    },
    {
      question: "What is the most accurate description of a dictionary?",
      options: [
        "A sequence accessed only by numeric position",
        "A collection of key-value pairs",
        "A reusable block of code",
        "A loop that repeats forever"
      ],
      answerIndex: 1,
      explanation:
        "Python’s data structures tutorial defines dictionaries as mappings from keys to values."
    },
    {
      question: "What does an if statement do?",
      options: [
        "Repeats code a fixed number of times",
        "Runs code only if a condition is true",
        "Creates a new file",
        "Defines a function"
      ],
      answerIndex: 1,
      explanation:
        "The control flow section of the Python tutorial introduces if for conditional execution."
    },
    {
      question: `What does this code print?
  for i in range(4):
      print(i)`,
      options: ["1 2 3 4", "0 1 2 3", "0 1 2 3 4", "4 only"],
      answerIndex: 1,
      explanation:
        "range(4) starts at 0 and stops before 4, so the values are 0, 1, 2, and 3."
    },
    {
      question: "Why can a while loop become an infinite loop?",
      options: [
        "Because Python dislikes while",
        "Because the condition may never become false",
        "Because while loops cannot print",
        "Because while loops always run exactly once"
      ],
      answerIndex: 1,
      explanation:
        "A while loop keeps running as long as its condition is true, so if nothing changes that condition, it may never stop."
    },
    {
      question: "What is the difference between defining and calling a function?",
      options: [
        "There is no difference",
        "Defining creates the function; calling runs it",
        "Calling creates the function; defining returns it",
        "Defining only works inside loops"
      ],
      answerIndex: 1,
      explanation:
        "The tutorial introduces functions with def and shows that the code inside runs when the function is called."
    },
    {
      question: "What does return do inside a function?",
      options: [
        "Prints a value to the screen only",
        "Sends a value back from the function",
        "Opens a file",
        "Converts a list into a dictionary"
      ],
      answerIndex: 1,
      explanation:
        "The Python tutorial explains that return returns a value from a function."
    },
    {
      question: `Why is this function less useful than it first appears?
  def add_numbers(a, b):
      print(a + b)`,
      options: [
        "Because functions cannot use print()",
        "Because it prints the result but does not return it for later use",
        "Because a + b is invalid Python",
        "Because functions must always have three parameters"
      ],
      answerIndex: 1,
      explanation:
        "print() displays output, but return provides a value the rest of the program can reuse."
    },
    {
      question:
        'What is the safest beginner explanation of with open("notes.txt", "w") as file:?',
      options: [
        "It creates a loop",
        "It opens a file for writing and helps ensure the file is properly closed afterwards",
        "It prints the file to the screen",
        "It turns the file into a function"
      ],
      answerIndex: 1,
      explanation:
        "The input/output tutorial recommends using with when working with files because it handles cleanup properly after use."
    },
    {
      question: `What is the difference between these two ideas?
  • print("Hello")
  • file.write("Hello")`,
      options: [
        "There is no difference",
        "The first displays text on screen; the second writes text into a file",
        "The first creates a variable; the second creates a loop",
        "The first returns text; the second returns a boolean"
      ],
      answerIndex: 1,
      explanation:
        "The Python tutorial distinguishes between writing human-readable output to the screen and writing data to a file for later use."
    },
    {
      question: "What is the best overall summary of Module 18?",
      options: [
        "Python is mainly about memorising syntax",
        "Beginner Python means learning how to run code, store values, work with collections, make decisions, repeat actions, reuse code with functions, and read/write simple files",
        "Python is mostly for advanced mathematics only",
        "Once you know variables, the rest of Python is basically the same"
      ],
      answerIndex: 1,
      explanation:
        "That is the integrated goal of Module 18: genuine beginner confidence with the core building blocks needed before moving into genomic data programming."
    }
  ];