export const module18 = {
    slug: "module-18",
    title: "Module 18: Python for complete beginners",
    description:
      "Learn the core Python foundations needed before working with genomic data: running code, variables and types, collections, control flow, functions, and simple file handling.",
    lessons: [
      {
        slug: "lesson-1",
        title: "Lesson 1: What is Python and how do you run code?",
        goal:
          "By the end of this lesson, the learner should be able to answer: “What is Python, and what does it actually mean to run code?”",
        screens: [
          {
            title: "Lesson goal",
            body: `By the end of this lesson, the learner should be able to answer:
  
  “What is Python, and what does it actually mean to run code?”
  
  This lesson starts Module 18 because the learner now understands the clinical-bioinformatics workflow well enough to know why programming matters. The next step is learning the most basic programming idea of all:
  what code is, and how Python executes it.
  
  The official Python tutorial describes itself as an informal introduction to the basic concepts and features of the Python language and system.`
          },
          {
            title: "The central idea",
            body: `A good beginner summary is:
  
  Python is a programming language, and running Python code means giving instructions to the Python interpreter so it can execute them and produce a result.
  
  The official docs describe the Python interpreter as the program that reads and executes commands, either interactively or from a script file.
  
  So the key beginner message is:
  you do not “run Python” by magic — you write instructions, and the Python interpreter reads and executes them.`
          },
          {
            title: "What Python is",
            body: `At beginner level, Python is best thought of as:
  a language for writing clear instructions that a computer can follow.
  
  That means Python is not just:
  • random text on a screen
  • or a special app by itself.
  
  It is a language, and the interpreter is the thing that understands that language.
  
  So the learner should understand:
  Python is the language; the interpreter is the thing that runs code written in that language.`
          },
          {
            title: "What the interpreter does",
            body: `When Python is started in interactive mode, it reads and executes commands one by one, and when it is given a script file, it reads and executes the whole file.
  
  A safe beginner explanation is:
  the interpreter is like the thing listening for your instructions.
  
  If you type:
  print("Hello")
  
  the interpreter reads that instruction and produces output.
  
  So the learner should understand:
  the interpreter is the program that turns your Python code into actual behaviour on the screen.`
          },
          {
            title: "Two main ways to run Python code",
            body: `There are two main beginner ways to run Python:
  
  1. Interactive mode
  This is when Python shows a prompt like:
  >>>
  and you type code directly into it.
  
  2. Script mode
  This is when you write code in a .py file and run the whole file.
  
  So the learner should understand:
  interactive mode is good for trying things quickly; script mode is good for saving a program and running it again later.`
          },
          {
            title: "Interactive mode",
            body: `Interactive mode is often the easiest beginner starting point.
  
  You type something like:
  2 + 2
  
  and Python immediately gives you:
  4
  
  So the learner should understand:
  interactive mode is useful when you want instant feedback.
  
  It is good for:
  • quick calculations
  • testing one line
  • checking what a function does
  • learning basic syntax.`
          },
          {
            title: "Script mode",
            body: `A script is just a file of Python code, usually ending in .py.
  
  For example, a file called:
  hello.py
  
  might contain:
  print("Hello")
  print("Welcome to Python")
  
  When you run the file, Python executes the instructions in order.
  
  So the learner should understand:
  a script is how you save code so it can be run again instead of typed line by line every time.`
          },
          {
            title: "Code versus output",
            body: `This is one of the most important beginner ideas.
  
  Code is what you write.
  Output is what Python produces.
  
  Example:
  print("Hello")
  
  • print("Hello") is the code
  • Hello is the output
  
  So the learner should understand:
  code is the instruction; output is the result of the instruction.
  
  This sounds simple, but many beginners mix them up at first.`
          },
          {
            title: "Expressions versus instructions",
            body: `Another very useful beginner distinction is:
  • some code is an expression
  • some code is an instruction
  
  For example:
  2 + 2
  
  is an expression. Python evaluates it and gives a result.
  
  But:
  print(2 + 2)
  
  is an instruction telling Python to display that result.
  
  So the learner should understand:
  an expression produces a value; an instruction tells Python to do something.`
          },
          {
            title: "What happens when code is wrong",
            body: `A very important beginner point:
  Python does not silently “guess” what you meant.
  
  If the code is invalid, the interpreter shows an error message.
  
  So the learner should understand:
  errors are part of normal coding, not proof that you cannot code.
  
  A beginner should expect errors. The real skill is learning to read them calmly.`
          },
          {
            title: "A very small working example",
            body: `Here is a minimal example:
  
  print("Hello")
  print(2 + 3)
  
  Output:
  Hello
  5
  
  What happened?
  • Python read the first instruction and printed text
  • Python read the second instruction and printed the result of the calculation
  
  That is all “running code” means at beginner level:
  • write instructions
  • interpreter reads them
  • result appears.`
          },
          {
            title: "A tiny beginner workflow",
            body: `A simple beginner workflow is:
  1. open Python in interactive mode
  2. type a simple expression
  3. type a print() statement
  4. save a two-line script
  5. run the script
  6. compare the code with the output.
  
  This is enough to understand the core concept before moving into variables and data types.`
          },
          {
            title: "The one-sentence takeaway",
            body: `If the learner remembers one sentence from this lesson, it should be:
  
  Python is a programming language, and running Python code means giving instructions to the Python interpreter, which reads and executes those instructions either interactively or from a script file.
  
  That is the core lesson.`
          },
          {
            title: "Worked example",
            body: `Scenario
  
  A learner opens Python, sees:
  >>>
  
  and types:
  print("Hello")
  
  They see:
  Hello
  
  Beginner question
  
  What just happened?
  
  Good beginner answer
  
  The learner was using Python in interactive mode. The >>> prompt showed that the Python interpreter was waiting for a command. When the learner typed print("Hello"), the interpreter read that instruction and executed it, so the output Hello appeared on the screen. That is an example of Python running code interactively rather than from a saved script file.`
          },
          {
            title: "Lesson summary",
            body: `The learner has understood this lesson if they can say something like:
  
  “Python is the language, and the interpreter is the thing that runs the code. I can run code either interactively at the >>> prompt or from a saved .py script, and I understand the difference between the code I write and the output Python gives back.”`
          }
        ],
        sections: [
          {
            heading: "The central idea",
            body:
              "Python is a programming language, and running Python code means giving instructions to the Python interpreter so it can execute them and produce a result."
          }
        ],
        quiz: [
          {
            question: "What is Python?",
            options: [
              "Only a text editor",
              "A programming language",
              "Only a command prompt",
              "A kind of spreadsheet"
            ],
            answerIndex: 1,
            explanation:
              "The official Python tutorial describes Python as a language and system for learning and writing programs."
          },
          {
            question: "What does the Python interpreter do?",
            options: [
              "It stores images",
              "It reads and executes Python code",
              "It only writes files",
              "It only checks spelling"
            ],
            answerIndex: 1,
            explanation:
              "The official docs explain that the interpreter reads and executes commands interactively or from a script."
          },
          {
            question:
              "What is the main difference between interactive mode and script mode?",
            options: [
              "Interactive mode is only for experts",
              "Interactive mode runs code line by line at a prompt, while script mode runs code saved in a file",
              "Script mode cannot print output",
              "There is no real difference"
            ],
            answerIndex: 1,
            explanation:
              "The interpreter can run commands directly at a prompt or execute a script file."
          },
          {
            question: `In this code:
  print("Hello")
  what is Hello?`,
            options: [
              "The code",
              "The output",
              "The interpreter",
              "A file name"
            ],
            answerIndex: 1,
            explanation:
              'print("Hello") is the code, and Hello is the output produced by that code. The print() function is a built-in function used to display output.'
          }
        ]
      },
      {
        slug: "lesson-2",
        title: "Lesson 2: Variables, numbers, strings, and basic types",
        goal:
          "By the end of this lesson, the learner should be able to answer: “What is a variable, what are basic Python data types, and why does type matter when I write code?”",
        screens: [
          {
            title: "Lesson goal",
            body: `By the end of this lesson, the learner should be able to answer:
  
  “What is a variable, what are basic Python data types, and why does type matter when I write code?”
  
  This lesson follows the introduction to running Python code because once the learner understands that Python executes instructions, the next step is learning how Python stores values.`
          },
          {
            title: "The central idea",
            body: `A good beginner summary is:
  
  A variable is a name that refers to a value, and values in Python have types such as numbers, strings, and booleans.
  
  Type matters because Python handles different kinds of values differently.
  
  So the key beginner message is:
  variables let you store values, and types tell Python what kind of value it is working with.`
          },
          {
            title: "What a variable is",
            body: `At beginner level, a variable is best thought of as:
  a label you give to a value so you can use it again later.
  
  For example:
  age = 25
  name = "Jas"
  
  Here:
  • age is a variable name
  • 25 is the value
  • name is another variable name
  • "Jas" is a string value
  
  So the learner should understand:
  a variable is not the value itself; it is the name that points to the value.`
          },
          {
            title: "What basic types are",
            body: `A type is the kind of value something is.
  
  At beginner level, the most important basic Python types are:
  • int for whole numbers
  • float for decimal numbers
  • str for text
  • bool for True and False
  
  Examples:
  count = 10        # int
  price = 2.99      # float
  message = "Hi"    # str
  valid = True      # bool
  
  So the learner should understand:
  type answers the question: what kind of value is this?`
          },
          {
            title: "Numbers: integers and floats",
            body: `The two most useful beginner number types are:
  
  Integers (int)
  Whole numbers such as:
  5
  -2
  100
  
  Floats (float)
  Numbers with a decimal point such as:
  3.14
  0.5
  -7.2
  
  So the learner should understand:
  both int and float are numbers, but they are not exactly the same kind of number.`
          },
          {
            title: "Strings: text values",
            body: `A string is text.
  
  Examples:
  "hello"
  'Python'
  "Clinical Bioinformatics"
  
  Strings are for:
  • words
  • names
  • sentences
  • codes stored as text
  
  So the learner should understand:
  if you want Python to treat something as text, it needs to be a string.
  
  That is why quotes matter.
  
  For example:
  5
  is a number, but:
  "5"
  is text.`
          },
          {
            title: "Booleans: true and false values",
            body: `A boolean is a truth value:
  • True
  • False
  
  Examples:
  finished = True
  passed = False
  
  Booleans become very important later for:
  • conditions
  • decision-making
  • checking whether something is true
  
  So the learner should understand:
  booleans are the simplest way for Python to represent yes/no or true/false ideas.`
          },
          {
            title: "Why type matters",
            body: `A learner may think:
  “If a value is stored, why does it matter what type it is?”
  
  Because different types behave differently.
  
  For example:
  2 + 3
  gives:
  5
  
  But:
  "2" + "3"
  gives:
  "23"
  
  Why?
  Because the first example adds numbers, while the second joins strings together.
  
  So the learner should understand:
  type matters because Python does not treat all values the same way.`
          },
          {
            title: "Using variables with numbers and strings",
            body: `Variables become useful because they let you reuse values.
  
  Example:
  a = 10
  b = 5
  print(a + b)
  
  Output:
  15
  
  Or with strings:
  first_name = "Jas"
  last_name = "C"
  print(first_name + " " + last_name)
  
  Output:
  Jas C
  
  So the learner should understand:
  variables make code easier to read and reuse because you do not have to keep writing the raw value over and over.`
          },
          {
            title: "Python is dynamically typed",
            body: `At a beginner level, one useful fact is that in Python you do not usually need to declare the type first.
  
  You can simply write:
  score = 85
  name = "Jas"
  passed = True
  
  and Python works out the type from the value.
  
  So the learner should understand:
  in normal beginner Python, you usually assign the value and Python infers the type.`
          },
          {
            title: "A very common beginner mistake",
            body: `One of the most common beginner mistakes is mixing up numbers and strings.
  
  Example:
  age = "25"
  print(age + 1)
  
  This causes an error because "25" is text, not a number.
  
  So the learner should understand:
  something that looks like a number to a human may still be text to Python if it is inside quotes.`
          },
          {
            title: "A tiny beginner workflow",
            body: `A simple beginner workflow for this lesson is:
  1. create one variable holding an integer
  2. create one variable holding a float
  3. create one variable holding a string
  4. create one variable holding a boolean
  5. print each one
  6. try a number operation and a string join
  7. notice how the outputs differ.`
          },
          {
            title: "The one-sentence takeaway",
            body: `If the learner remembers one sentence from this lesson, it should be:
  
  Variables store values under names, and those values have types such as int, float, str, and bool, which matter because Python handles different kinds of values in different ways.
  
  That is the core lesson.`
          },
          {
            title: "Worked example",
            body: `Scenario
  
  A learner writes:
  age = "25"
  print(age)
  
  and sees:
  25
  
  Then they write:
  print(age + 1)
  
  and get an error.
  
  Beginner question
  
  Why did that happen?
  
  Good beginner answer
  
  Because age was stored as a string, not as a number. The quotes around "25" made it a text value of type str, so Python treated it as text rather than as an integer. Printing it worked because Python can display strings, but adding 1 failed because Python does not treat a string and an integer as the same kind of value in arithmetic.`
          },
          {
            title: "Lesson summary",
            body: `The learner has understood this lesson if they can say something like:
  
  “A variable is a name for a value, and values have types like integer, float, string, or boolean. Type matters because Python uses different rules for different kinds of values, so something stored as text will not behave the same way as something stored as a number.”`
          }
        ],
        sections: [
          {
            heading: "The central idea",
            body:
              "A variable is a name that refers to a value, and values in Python have types such as numbers, strings, and booleans."
          }
        ],
        quiz: [
          {
            question: "What is a variable?",
            options: [
              "A type of error",
              "A name that refers to a value",
              "A built-in function only",
              "A file type"
            ],
            answerIndex: 1,
            explanation:
              "A variable is a label you use to store and reuse a value in code."
          },
          {
            question: "Which of these is a string?",
            options: ["5", "3.14", `"hello"`, "True"],
            answerIndex: 2,
            explanation:
              "Strings are text values and are written inside quotes."
          },
          {
            question: "Which type is used for True and False?",
            options: ["str", "float", "bool", "int"],
            answerIndex: 2,
            explanation:
              "The Python data model says the only Boolean objects are False and True."
          },
          {
            question: "Why does type matter?",
            options: [
              "Because Python ignores values without types",
              "Because Python handles different kinds of values differently",
              "Because type only matters in very advanced code",
              "Because strings and numbers always behave the same way"
            ],
            answerIndex: 1,
            explanation:
              "Numbers and strings behave differently in Python, which is why type affects what code does."
          }
        ]
      },
      {
        slug: "lesson-3",
        title: "Lesson 3: Lists, dictionaries, and storing collections of data",
        goal:
          "By the end of this lesson, the learner should be able to answer: “How do I store multiple pieces of data in Python, and when should I use a list instead of a dictionary?”",
        screens: [
          {
            title: "Lesson goal",
            body: `By the end of this lesson, the learner should be able to answer:
  
  “How do I store multiple pieces of data in Python, and when should I use a list instead of a dictionary?”
  
  This lesson follows variables and basic types because once the learner can store one value, the next step is learning how to store many values.`
          },
          {
            title: "The central idea",
            body: `A good beginner summary is:
  
  Lists and dictionaries let you store collections of data, but they organise that data in different ways.
  
  A safe beginner contrast is:
  • a list stores items in an ordered collection
  • a dictionary stores values using keys
  
  So the key beginner message is:
  use a list when order matters, and use a dictionary when you want to look things up by name or label.`
          },
          {
            title: "What a list is",
            body: `A list is an ordered collection of values.
  
  Example:
  fruits = ["apple", "banana", "orange"]
  
  This list has three items, in a specific order.
  
  So the learner should understand:
  a list is useful when you want to keep several items together in a sequence.`
          },
          {
            title: "Accessing list items with indexes",
            body: `Because lists are ordered, you can access items by position.
  
  Example:
  fruits = ["apple", "banana", "orange"]
  print(fruits[0])
  print(fruits[1])
  
  Output:
  apple
  banana
  
  Python uses zero-based indexing, so the first item is index 0.
  
  So the learner should understand:
  list indexes count from 0, not from 1.`
          },
          {
            title: "Changing and adding list items",
            body: `Lists are mutable, which means you can change them.
  
  Example:
  fruits = ["apple", "banana", "orange"]
  fruits[1] = "grape"
  print(fruits)
  
  Output:
  ['apple', 'grape', 'orange']
  
  You can also add items:
  fruits.append("kiwi")
  print(fruits)
  
  So the learner should understand:
  lists can grow and change after you create them.`
          },
          {
            title: "What a dictionary is",
            body: `A dictionary stores values using keys.
  
  Example:
  person = {
      "name": "Jas",
      "age": 25,
      "city": "Manchester"
  }
  
  Here:
  • "name" is a key
  • "Jas" is the value for that key
  
  So the learner should understand:
  a dictionary is useful when each piece of data has a label.`
          },
          {
            title: "Accessing dictionary values",
            body: `You access dictionary values using their keys.
  
  Example:
  person = {
      "name": "Jas",
      "age": 25
  }
  print(person["name"])
  print(person["age"])
  
  Output:
  Jas
  25
  
  So the learner should understand:
  with a dictionary, you do not use positions like 0 or 1; you use keys such as "name" or "age".`
          },
          {
            title: "Lists versus dictionaries",
            body: `A safe beginner way to compare them is:
  
  Use a list when:
  • order matters
  • you have a sequence of items
  • you want the first, second, third item
  
  Example:
  genes = ["BRCA1", "TP53", "CFTR"]
  
  Use a dictionary when:
  • each value has a label
  • you want to look something up by name
  • the data is more like a record
  
  Example:
  variant = {
      "gene": "BRCA1",
      "consequence": "missense",
      "quality": "high"
  }
  
  So the learner should understand:
  lists organise by position; dictionaries organise by key.`
          },
          {
            title: "Why collections matter in real code",
            body: `Without lists and dictionaries, code would quickly become awkward.
  
  Instead of writing:
  gene1 = "BRCA1"
  gene2 = "TP53"
  gene3 = "CFTR"
  
  you can write:
  genes = ["BRCA1", "TP53", "CFTR"]
  
  And instead of writing many separate variables for one record, you can write:
  candidate = {
      "gene": "BRCA1",
      "inheritance": "dominant",
      "priority": 1
  }
  
  So the learner should understand:
  collections make code more organised because related values stay together.`
          },
          {
            title: "A very common beginner mistake",
            body: `A common beginner mistake is confusing list positions with dictionary keys.
  
  For example:
  genes = ["BRCA1", "TP53"]
  print(genes["gene"])
  
  This is wrong, because a list expects an index, not a key.
  
  And this is also wrong:
  candidate = {"gene": "BRCA1"}
  print(candidate[0])
  
  because a dictionary expects a key, not a numeric position.
  
  So the learner should understand:
  lists and dictionaries are both collections, but they are accessed in different ways.`
          },
          {
            title: "A tiny beginner workflow",
            body: `A simple beginner workflow for this lesson is:
  1. make a list with three items
  2. print the first item
  3. add a new item with append()
  4. make a dictionary with three key-value pairs
  5. print one value using its key
  6. change one value in the dictionary
  7. compare how the list and dictionary feel different.`
          },
          {
            title: "The one-sentence takeaway",
            body: `If the learner remembers one sentence from this lesson, it should be:
  
  A list stores an ordered collection of items, while a dictionary stores values under keys, so lists are best when position matters and dictionaries are best when lookup by label matters.
  
  That is the core lesson.`
          },
          {
            title: "Worked example",
            body: `Scenario
  
  A learner writes:
  candidate = {
      "gene": "BRCA1",
      "quality": "high"
  }
  print(candidate["gene"])
  
  and gets:
  BRCA1
  
  Beginner question
  
  Why did that work?
  
  Good beginner answer
  
  It worked because candidate is a dictionary, and dictionaries store values under keys. The key "gene" points to the value "BRCA1", so candidate["gene"] retrieves that value. A list would use a numeric position instead, but a dictionary uses labels for lookup.`
          },
          {
            title: "Lesson summary",
            body: `The learner has understood this lesson if they can say something like:
  
  “A list is good for storing items in order, and I access them by index. A dictionary is good for storing labeled values, and I access them by key. Both help me keep related pieces of data together instead of creating lots of separate variables.”`
          }
        ],
        sections: [
          {
            heading: "The central idea",
            body:
              "Lists and dictionaries let you store collections of data, but they organise that data in different ways."
          }
        ],
        quiz: [
          {
            question: "What is a list?",
            options: [
              "A collection of key-value pairs",
              "An ordered collection of items",
              "A boolean value",
              "A file type"
            ],
            answerIndex: 1,
            explanation:
              "Python’s data structures tutorial presents lists as a core sequence type with ordered elements and methods like append() and pop()."
          },
          {
            question: "What is a dictionary?",
            options: [
              "An ordered collection accessed only by position",
              "A value used for printing",
              "A collection of key-value pairs",
              "A floating-point number"
            ],
            answerIndex: 2,
            explanation:
              "Python’s data structures tutorial includes dictionaries as a separate structure used for key-based lookup."
          },
          {
            question: "How do you usually access a list item?",
            options: [
              "By key",
              "By position or index",
              "By file name",
              "By boolean value"
            ],
            answerIndex: 1,
            explanation:
              "Lists are ordered, so you usually access them by index such as 0, 1, or 2."
          },
          {
            question: "When is a dictionary especially useful?",
            options: [
              "When you want to look up values by label",
              "When you only need one value",
              "When you want every item to be a number",
              "When order is the only thing that matters"
            ],
            answerIndex: 0,
            explanation:
              "Dictionaries are useful for labeled data because values are stored under keys rather than positions."
          }
        ]
      },
      {
        slug: "lesson-4",
        title: "Lesson 4: Conditions and loops",
        goal:
          "By the end of this lesson, the learner should be able to answer: “How do I make a Python program choose between options or repeat actions?”",
        screens: [
          {
            title: "Lesson goal",
            body: `By the end of this lesson, the learner should be able to answer:
  
  “How do I make a Python program choose between options or repeat actions?”
  
  This lesson follows lists and dictionaries because once the learner can store data, the next step is learning how to do something with it repeatedly or conditionally.
  
  That means two very important ideas:
  • conditions let a program make decisions
  • loops let a program repeat actions.`
          },
          {
            title: "The central idea",
            body: `A good beginner summary is:
  
  Conditions let Python decide what to do based on whether something is true, and loops let Python repeat code without you writing the same instruction again and again.
  
  So the key beginner message is:
  conditions are for decisions; loops are for repetition.
  
  That is the foundation of real programming.`
          },
          {
            title: "What a condition is",
            body: `A condition is something Python can check as true or false.
  
  For example:
  age = 20
  print(age > 18)
  
  Output:
  True
  
  Here, age > 18 is a condition.
  
  So the learner should understand:
  a condition is usually a question Python can answer with True or False.`
          },
          {
            title: "Using if",
            body: `The simplest decision statement is if.
  
  Example:
  age = 20
  if age >= 18:
      print("Adult")
  
  If the condition is true, Python runs the indented code underneath it.
  
  So the learner should understand:
  if means “only run this code if the condition is true.”`
          },
          {
            title: "Using if and else",
            body: `Often you want Python to choose between two paths.
  
  Example:
  age = 16
  if age >= 18:
      print("Adult")
  else:
      print("Not an adult")
  
  Output:
  Not an adult
  
  Here:
  • if handles the true case
  • else handles everything else.
  
  So the learner should understand:
  else gives Python a second path when the if condition is false.`
          },
          {
            title: "Using elif",
            body: `Sometimes there are more than two possibilities.
  
  Example:
  score = 75
  if score >= 90:
      print("Excellent")
  elif score >= 60:
      print("Pass")
  else:
      print("Fail")
  
  Output:
  Pass
  
  elif means “else if”.
  
  So the learner should understand:
  elif lets Python check another condition if the first one was false.`
          },
          {
            title: "Why indentation matters",
            body: `This is one of the most important beginner ideas in Python.
  
  Python uses indentation to show which lines belong together.
  
  Example:
  age = 20
  if age >= 18:
      print("Adult")
      print("Can vote")
  
  Both indented lines run if the condition is true.
  
  So the learner should understand:
  indentation in Python is not just for neatness; it changes what the code means.`
          },
          {
            title: "What a loop is",
            body: `A loop repeats code.
  
  Instead of writing:
  print("Hello")
  print("Hello")
  print("Hello")
  
  you can write a loop.
  
  The most common beginner loop is for.
  
  Example:
  for i in [1, 2, 3]:
      print("Hello")
  
  Output:
  Hello
  Hello
  Hello
  
  So the learner should understand:
  a loop repeats code, usually once for each item in a collection or range.`
          },
          {
            title: "Using for with a list",
            body: `A very useful beginner pattern is looping through a list.
  
  Example:
  genes = ["BRCA1", "TP53", "CFTR"]
  for gene in genes:
      print(gene)
  
  Output:
  BRCA1
  TP53
  CFTR
  
  So the learner should understand:
  for loops are very useful for processing each item in a list one by one.`
          },
          {
            title: "Using range()",
            body: `Sometimes you want to repeat code a certain number of times.
  
  Example:
  for i in range(3):
      print(i)
  
  Output:
  0
  1
  2
  
  So the learner should understand:
  range(3) gives values starting at 0 and stopping before 3.`
          },
          {
            title: "What while does",
            body: `Another loop is while.
  
  A while loop keeps running as long as a condition is true.
  
  Example:
  count = 0
  while count < 3:
      print(count)
      count = count + 1
  
  Output:
  0
  1
  2
  
  So the learner should understand:
  while repeats code while a condition stays true.`
          },
          {
            title: "Why while can be risky for beginners",
            body: `A very common beginner mistake is forgetting to update the variable in a while loop.
  
  Example:
  count = 0
  while count < 3:
      print(count)
  
  This never changes count, so the condition stays true forever.
  
  That is called an infinite loop.
  
  So the learner should understand:
  a while loop usually needs something inside it that changes the condition.`
          },
          {
            title: "Combining conditions and loops",
            body: `Programs often use both together.
  
  Example:
  scores = [45, 72, 90]
  for score in scores:
      if score >= 60:
          print("Pass")
      else:
          print("Fail")
  
  Output:
  Fail
  Pass
  Pass
  
  So the learner should understand:
  conditions and loops often work together: loop through data, then make a decision about each piece.`
          },
          {
            title: "A common beginner mistake",
            body: `A very common mistake is expecting a loop variable to mean something it does not.
  
  Example:
  genes = ["BRCA1", "TP53", "CFTR"]
  for gene in genes:
      print(genes)
  
  This prints the whole list each time, not each gene.
  
  The correct version is:
  for gene in genes:
      print(gene)
  
  So the learner should understand:
  inside a loop, it matters whether you use the whole collection or the current item.`
          },
          {
            title: "A tiny beginner workflow",
            body: `A simple beginner workflow for this lesson is:
  1. write one if statement
  2. add an else
  3. try an elif example
  4. loop through a short list with for
  5. use range() to repeat something three times
  6. write one simple while loop
  7. combine a loop and an if.`
          },
          {
            title: "The one-sentence takeaway",
            body: `If the learner remembers one sentence from this lesson, it should be:
  
  Conditions let Python choose what to do based on True/False checks, and loops let Python repeat code, which means programs can make decisions and work through multiple items automatically.
  
  That is the core lesson.`
          },
          {
            title: "Worked example",
            body: `Scenario
  
  A learner writes:
  genes = ["BRCA1", "TP53", "CFTR"]
  for gene in genes:
      print(gene)
  
  Beginner question
  
  What is Python doing here?
  
  Good beginner answer
  
  Python is running a for loop. It takes each item from the genes list one at a time and stores it in the variable gene. Then it runs the indented line print(gene), so each gene name is printed separately. This is a basic example of iterating through a list.`
          },
          {
            title: "Lesson summary",
            body: `The learner has understood this lesson if they can say something like:
  
  “I can use if, elif, and else to make Python choose between options, and I can use for and while loops to repeat code. I also understand that indentation matters and that loops often work together with conditions.”`
          }
        ],
        sections: [
          {
            heading: "The central idea",
            body:
              "Conditions let Python decide what to do based on whether something is true, and loops let Python repeat code without you writing the same instruction again and again."
          }
        ],
        quiz: [
          {
            question: "What does an if statement do?",
            options: [
              "Repeats code forever",
              "Stores multiple values",
              "Runs code only if a condition is true",
              "Creates a file"
            ],
            answerIndex: 2,
            explanation:
              "if is used for conditional execution."
          },
          {
            question: "What is the main purpose of a loop?",
            options: [
              "To make values into strings",
              "To repeat code",
              "To define a variable type",
              "To print only once"
            ],
            answerIndex: 1,
            explanation:
              "Loops are used to repeat code, often for each item in a sequence or while a condition remains true."
          },
          {
            question: `What does this code print?
  for i in range(3):
      print(i)`,
            options: ["1, 2, 3", "0, 1, 2", "0, 1, 2, 3", "3 only"],
            answerIndex: 1,
            explanation:
              "range(3) starts at 0 and stops before 3."
          },
          {
            question: "Why can a while loop become an infinite loop?",
            options: [
              "Because Python dislikes while",
              "Because the condition may never become false",
              "Because while always runs once only",
              "Because while cannot print output"
            ],
            answerIndex: 1,
            explanation:
              "If nothing changes the condition, the loop may run forever. This is a common beginner mistake."
          }
        ]
      },
      {
        slug: "lesson-5",
        title: "Lesson 5: Functions and reusable code",
        goal:
          "By the end of this lesson, the learner should be able to answer: “What is a function, and how does it help me write code that is easier to reuse, read, and manage?”",
        screens: [
          {
            title: "Lesson goal",
            body: `By the end of this lesson, the learner should be able to answer:
  
  “What is a function, and how does it help me write code that is easier to reuse, read, and manage?”
  
  This lesson follows conditions and loops because once the learner can make Python:
  • store values
  • handle collections
  • make decisions
  • and repeat actions
  
  the next step is learning how to group useful steps into reusable pieces of code.`
          },
          {
            title: "The central idea",
            body: `A good beginner summary is:
  
  A function is a named block of code that performs a task, and you can call it whenever you need that task again.
  
  So the key beginner message is:
  functions help you avoid repeating the same code and make larger programs easier to understand.
  
  That is why functions are one of the most important ideas in programming.`
          },
          {
            title: "What a function is",
            body: `At beginner level, a function is best thought of as:
  a small reusable tool inside your program.
  
  Example:
  def say_hello():
      print("Hello")
  
  This creates a function named say_hello.
  
  So the learner should understand:
  defining a function creates it, but the code inside it does not run until you call the function.`
          },
          {
            title: "Defining versus calling a function",
            body: `A common beginner confusion is mixing up:
  • defining a function
  • calling a function
  
  Example:
  def say_hello():
      print("Hello")
  
  This only defines the function.
  
  To run it, you must call it:
  say_hello()
  
  Output:
  Hello
  
  So the learner should understand:
  writing the function is not the same as using the function.`
          },
          {
            title: "Why functions are useful",
            body: `Functions are useful for several beginner reasons:
  • they reduce repeated code
  • they make programs easier to read
  • they break larger problems into smaller parts
  • they let you reuse the same logic in different places
  
  So the learner should understand:
  functions make code less repetitive and more organised.`
          },
          {
            title: "Parameters: giving information to a function",
            body: `Many functions need input.
  
  A parameter is a variable in the function definition that receives a value when the function is called.
  
  Example:
  def greet(name):
      print("Hello", name)
  
  Here, name is a parameter.
  
  Calling it:
  greet("Jas")
  
  Output:
  Hello Jas
  
  So the learner should understand:
  parameters let one function work with different values instead of doing only one fixed thing.`
          },
          {
            title: "Arguments: the values you pass in",
            body: `A beginner also needs to distinguish:
  • parameter = the name inside the function definition
  • argument = the actual value passed in when calling the function
  
  Example:
  def greet(name):
      print("Hello", name)
  greet("Jas")
  
  • name is the parameter
  • "Jas" is the argument
  
  So the learner should understand:
  parameters are placeholders; arguments are the actual values you give the function.`
          },
          {
            title: "Returning values",
            body: `Some functions do not just print something. They return a value.
  
  Example:
  def add_numbers(a, b):
      return a + b
  
  Now:
  result = add_numbers(2, 3)
  print(result)
  
  Output:
  5
  
  So the learner should understand:
  return sends a result back from the function so the rest of the program can use it.`
          },
          {
            title: "Printing versus returning",
            body: `This is one of the most important beginner distinctions in Python.
  
  Printing
  Shows something on the screen.
  
  Example:
  def add_and_print(a, b):
      print(a + b)
  
  Returning
  Gives the result back to the caller.
  
  Example:
  def add_and_return(a, b):
      return a + b
  
  The returned version is much more useful, because you can store the result and use it later.
  
  So the learner should understand:
  print() displays a value, but return gives a value back for further use.`
          },
          {
            title: "Functions without a return value",
            body: `If a function does not return anything explicitly, Python returns None.
  
  Example:
  def say_hi():
      print("Hi")
  
  If you do:
  result = say_hi()
  print(result)
  
  Output:
  Hi
  None
  
  So the learner should understand:
  a function that only prints something is not the same as a function that returns a usable result.`
          },
          {
            title: "Why functions help with problem-solving",
            body: `Functions are also useful because they help break one big task into smaller tasks.
  
  For example, instead of trying to write one huge piece of code, you might split a program into:
  • one function to calculate something
  • one function to format output
  • one function to check a condition
  
  So the learner should understand:
  functions help you think in smaller steps instead of trying to solve everything in one block of code.`
          },
          {
            title: "A simple defensive beginner habit",
            body: `A useful beginner habit is to choose function names that describe what the function does.
  
  Good examples:
  • calculate_total()
  • print_summary()
  • check_quality()
  
  Less helpful examples:
  • do_thing()
  • stuff()
  • x()
  
  So the learner should understand:
  clear function names make code easier to understand later.`
          },
          {
            title: "A common beginner mistake",
            body: `A very common beginner mistake is forgetting parentheses when calling a function.
  
  Example:
  def say_hello():
      print("Hello")
  say_hello
  
  This does not call the function.
  
  The correct version is:
  say_hello()
  
  So the learner should understand:
  the function name by itself is not the same as calling the function — you usually need parentheses.`
          },
          {
            title: "A tiny beginner workflow",
            body: `A simple beginner workflow for this lesson is:
  1. define a function with no parameters
  2. call it twice
  3. define a function with one parameter
  4. call it with different arguments
  5. define a function that returns a value
  6. store the returned value in a variable
  7. use that value in another calculation.`
          },
          {
            title: "The one-sentence takeaway",
            body: `If the learner remembers one sentence from this lesson, it should be:
  
  A function is a reusable block of code defined with def, and it can take inputs through parameters and send a result back with return, which helps make programs clearer, less repetitive, and easier to reuse.
  
  That is the core lesson.`
          },
          {
            title: "Worked example",
            body: `Scenario
  
  A learner writes:
  def add_numbers(a, b):
      return a + b
  result = add_numbers(4, 5)
  print(result)
  
  Beginner question
  
  What is happening here?
  
  Good beginner answer
  
  The learner defined a function called add_numbers with two parameters, a and b. When the function is called with the arguments 4 and 5, Python runs the code inside the function and uses return to send back the result of a + b. That returned value is stored in the variable result, and then print(result) displays it.`
          },
          {
            title: "Lesson summary",
            body: `The learner has understood this lesson if they can say something like:
  
  “A function is a named block of reusable code. I can define it with def, call it with parentheses, pass values in through parameters, and get a result back with return. I also understand that printing a value is different from returning a value.”`
          }
        ],
        sections: [
          {
            heading: "The central idea",
            body:
              "A function is a named block of code that performs a task, and you can call it whenever you need that task again."
          }
        ],
        quiz: [
          {
            question: "What is a function?",
            options: [
              "A file extension",
              "A reusable block of code",
              "A kind of number",
              "A list item only"
            ],
            answerIndex: 1,
            explanation:
              "Functions are named blocks of code that can be defined once and called many times."
          },
          {
            question:
              "What is the difference between defining and calling a function?",
            options: [
              "There is no difference",
              "Defining creates the function, while calling runs it",
              "Calling creates the function, while defining prints it",
              "Defining only works in files"
            ],
            answerIndex: 1,
            explanation:
              "A function definition creates the reusable block, but the code inside runs when the function is called."
          },
          {
            question: "What does return do?",
            options: [
              "Prints a value only",
              "Sends a value back from a function",
              "Repeats a loop",
              "Creates a list"
            ],
            answerIndex: 1,
            explanation:
              "The official Python tutorial states that the return statement returns with a value from a function."
          },
          {
            question: "Why is print() different from return?",
            options: [
              "They are exactly the same",
              "print() displays a value, while return gives a value back for later use",
              "return only works with strings",
              "print() only works inside loops"
            ],
            answerIndex: 1,
            explanation:
              "Printing shows output on the screen, but returning provides a result that the rest of the program can use."
          }
        ]
      },
      {
        slug: "lesson-6",
        title: "Lesson 6: Reading, writing, and printing simple files",
        goal:
          "By the end of this lesson, the learner should be able to answer: “How do I make a Python program show output on screen and read from or write to a simple file?”",
        screens: [
          {
            title: "Lesson goal",
            body: `By the end of this lesson, the learner should be able to answer:
  
  “How do I make a Python program show output on screen and read from or write to a simple file?”
  
  This lesson finishes Module 18 because once the learner can use:
  • variables
  • collections
  • conditions
  • loops
  • and functions
  
  the next step is making programs interact with data outside the code itself.`
          },
          {
            title: "The central idea",
            body: `A good beginner summary is:
  
  print() shows information on the screen, while file handling lets Python save information to a file or load information from a file.
  
  So the key beginner message is:
  screen output is for immediate display; files are for storing information so it can be used later.
  
  That is one of the first steps toward working with real data.`
          },
          {
            title: "What print() does",
            body: `Example:
  name = "Jas"
  print(name)
  print("Hello")
  print(2 + 3)
  
  Output:
  Jas
  Hello
  5
  
  So the learner should understand:
  print() is mainly for showing information to a human reading the screen.`
          },
          {
            title: "Why printing is useful",
            body: `Printing is useful because it helps you:
  • show results
  • check what your code is doing
  • and give simple feedback to the user.
  
  So the learner should understand:
  printing is often the easiest way to see whether your program is behaving as expected.`
          },
          {
            title: "What a file is in this context",
            body: `At beginner level, a file is best thought of as:
  a place on the computer where text or other data can be saved and read later.
  
  So the learner should understand:
  a file lets your program work with information that is not hard-coded into the script.
  
  That is a major step forward from the earlier lessons.`
          },
          {
            title: "Opening a file",
            body: `The main beginner tool for file handling is open().
  
  A simple beginner example looks like this:
  with open("notes.txt", "w") as file:
      file.write("Hello\\n")
  
  This means:
  • open notes.txt
  • use mode "w" for writing
  • call the file object file
  • write text into it
  
  So the learner should understand:
  open() gives you access to a file, and with is the safest beginner way to work with it.`
          },
          {
            title: "Writing to a file",
            body: `Example:
  with open("notes.txt", "w") as file:
      file.write("First line\\n")
      file.write("Second line\\n")
  
  This creates or overwrites the file and writes two lines into it.
  
  So the learner should understand:
  when you write to a file, you are saving text for later rather than just displaying it on the screen.`
          },
          {
            title: "Reading from a file",
            body: `A simple example:
  with open("notes.txt", "r") as file:
      content = file.read()
  print(content)
  
  This means:
  • open the file in read mode
  • read all its text
  • store it in content
  • print it
  
  So the learner should understand:
  reading a file means taking saved data from the file and bringing it into your Python program.`
          },
          {
            title: "Common file modes at beginner level",
            body: `The most useful beginner modes are:
  • "r" for reading
  • "w" for writing
  
  A safe beginner summary is:
  • use "r" when the file already exists and you want to read it
  • use "w" when you want to write new content
  
  So the learner should understand:
  file mode tells Python what kind of access you want.`
          },
          {
            title: "Why with is a good beginner habit",
            body: `with is a good habit because it helps Python clean up the file properly when you are done.
  
  That is why it should be the default beginner pattern.
  
  So the learner should understand:
  with is a good habit because it helps ensure the file is properly closed after use.`
          },
          {
            title: "Printing versus writing",
            body: `This is one of the most important distinctions in the lesson.
  
  Printing
  Shows something on the screen:
  print("Hello")
  
  Writing
  Saves something into a file:
  with open("notes.txt", "w") as file:
      file.write("Hello")
  
  So the learner should understand:
  printing is temporary display; writing is saved output.`
          },
          {
            title: "A very common beginner mistake",
            body: `A common mistake is assuming write() behaves exactly like print().
  
  Example:
  with open("notes.txt", "w") as file:
      file.write("Line 1")
      file.write("Line 2")
  
  This may produce:
  Line 1Line 2
  
  inside the file, because no newline was added.
  
  The corrected version is:
  with open("notes.txt", "w") as file:
      file.write("Line 1\\n")
      file.write("Line 2\\n")
  
  So the learner should understand:
  when writing text files, you often need to add \\n yourself if you want new lines.`
          },
          {
            title: "Why files matter before bioinformatics data files",
            body: `This lesson is still beginner-level, so it is not about VCF or CSV parsing yet.
  
  But it matters because later modules will work with:
  • tables
  • genomic text files
  • summaries
  • and saved outputs.
  
  So the learner should understand:
  simple file handling is the bridge between toy code and code that works with real data.`
          },
          {
            title: "A tiny beginner workflow",
            body: `A simple beginner workflow for this lesson is:
  1. use print() to display a message
  2. write a short message into a text file
  3. open the file again in read mode
  4. read the content back into a variable
  5. print the content to the screen
  6. compare screen output with file output.`
          },
          {
            title: "The one-sentence takeaway",
            body: `If the learner remembers one sentence from this lesson, it should be:
  
  print() displays output on the screen, while file handling with open() lets Python read saved data from files and write new data to files for future use.
  
  That is the core lesson.`
          },
          {
            title: "Worked example",
            body: `Scenario
  
  A learner writes:
  with open("notes.txt", "w") as file:
      file.write("Hello\\n")
  with open("notes.txt", "r") as file:
      content = file.read()
  print(content)
  
  Beginner question
  
  What is Python doing here?
  
  Good beginner answer
  
  First, Python opens notes.txt in write mode and writes the text Hello followed by a newline into the file. Then it opens the same file in read mode, reads the saved content into the variable content, and finally prints that content to the screen. This shows the difference between writing saved output to a file and printing output for immediate display.`
          },
          {
            title: "Lesson summary",
            body: `The learner has understood this lesson if they can say something like:
  
  “I know that print() is for showing output on the screen, while open() lets me work with files. I can use with open(..., "w") to write text to a file and with open(..., "r") to read text from a file, and I understand that saved file output is different from temporary screen output.”`
          }
        ],
        sections: [
          {
            heading: "The central idea",
            body:
              "print() shows information on the screen, while file handling lets Python save information to a file or load information from a file."
          }
        ],
        quiz: [
          {
            question: "What is print() mainly used for?",
            options: [
              "Saving data to a file",
              "Displaying output on the screen",
              "Creating a list",
              "Defining a function"
            ],
            answerIndex: 1,
            explanation:
              "The Python tutorial lists print() as one of the basic ways of writing values and showing output."
          },
          {
            question: "What does open() do?",
            options: [
              "It repeats a loop",
              "It gives access to a file so Python can read or write it",
              "It only creates strings",
              "It only prints text"
            ],
            answerIndex: 1,
            explanation:
              "The reading-and-writing-files section explains that open() returns a file object used for file operations."
          },
          {
            question:
              'What is the difference between "r" and "w" when opening a file?',
            options: [
              '"r" is for reading and "w" is for writing',
              '"r" is for loops and "w" is for functions',
              '"r" is for numbers and "w" is for strings',
              "There is no difference"
            ],
            answerIndex: 0,
            explanation:
              "These are the common beginner file modes for reading and writing files."
          },
          {
            question:
              'Why is with open(...) as file: a good beginner habit?',
            options: [
              "Because it makes Python faster",
              "Because it helps ensure the file is properly closed after use",
              "Because it avoids all errors",
              "Because it replaces print()"
            ],
            answerIndex: 1,
            explanation:
              "The Python tutorial recommends with because it handles file cleanup properly, even if an error occurs."
          }
        ]
      }
    ]
  };