export const module21Quiz = [
    {
      question: `A learner says:
  “The workflow finished and produced the final output file, so it is validated.”
  Which response is best?`,
      options: [
        "Correct, because validation mainly means successful execution",
        "Incomplete, because validation requires evidence that the workflow behaves correctly for its intended use, not just that it ran once",
        "Correct, unless Git is being used",
        "Incomplete only because the log file was not saved"
      ],
      answerIndex: 1,
      explanation:
        "FDA defines software validation as confirmation by examination and objective evidence that specifications conform to user needs and intended uses and that requirements can be consistently fulfilled. A successful run is useful, but it is not enough by itself."
    },
    {
      question:
        "What is the best beginner meaning of intended use in pipeline validation?",
      options: [
        "The name of the script file",
        "What the workflow is actually supposed to do",
        "The folder where the workflow is stored",
        "The Git branch name"
      ],
      answerIndex: 1,
      explanation:
        "FDA’s validation framing is tied directly to user needs and intended uses, so a workflow must be judged against its actual purpose."
    },
    {
      question:
        "Why is manual copying with filenames like pipeline_final.py and pipeline_final2.py weaker than version control?",
      options: [
        "Because Python cannot open copied files",
        "Because manual copies preserve snapshots but not a clear, structured change history",
        "Because Git only works with images",
        "Because copied files cannot be tested"
      ],
      answerIndex: 1,
      explanation:
        "The Git book defines version control as recording changes over time so specific versions can be recalled later. Manual copies may preserve multiple files, but they do not give the same clear project history."
    },
    {
      question: "What is Git?",
      options: [
        "A Python testing framework",
        "A distributed revision control system",
        "A workflow scheduler",
        "A spreadsheet format"
      ],
      answerIndex: 1,
      explanation:
        "Git’s official documentation describes Git as a fast, scalable, distributed revision control system."
    },
    {
      question:
        "What is the most useful beginner description of a commit?",
      options: [
        "A random temporary file",
        "A recorded snapshot of the project history at a particular point",
        "A type of validation only",
        "A workflow retry setting"
      ],
      answerIndex: 1,
      explanation:
        "Git’s basic documentation explains that you record snapshots of changes into the repository as the project reaches states you want to keep."
    },
    {
      question: "How are version control and change control different?",
      options: [
        "They are the same thing",
        "Version control records what changed; change control governs how changes should be introduced and reviewed",
        "Change control replaces Git entirely",
        "Version control only matters after sign-off"
      ],
      answerIndex: 1,
      explanation:
        "Git gives traceable project history, while change control is the broader process that makes changes deliberate, reviewable, and appropriately tested. FDA’s guidance supports this documented, evidence-based management of software change."
    },
    {
      question:
        "Why can a small-looking workflow edit still count as an important controlled change?",
      options: [
        "Because all edits are equally high risk",
        "Because even a small edit can alter trusted behaviour, outputs, or downstream interpretation",
        "Because Git cannot track small edits",
        "Because only comments should be changed casually"
      ],
      answerIndex: 1,
      explanation:
        "FDA’s CSA guidance explicitly uses a risk-based approach, which means the significance of a change depends on its likely impact, not just how small the code diff looks."
    },
    {
      question:
        "Why is one quick rerun after a change usually not enough?",
      options: [
        "Because workflows should never be rerun",
        "Because a successful rerun may show the workflow still executes, but not whether the changed behaviour is correct or whether old trusted behaviour regressed",
        "Because Git history makes reruns unnecessary",
        "Because only smoke tests are allowed"
      ],
      answerIndex: 1,
      explanation:
        "Post-change testing needs to show both that the intended change works and that previously trusted behaviour was not quietly broken. FDA’s validation and CSA guidance support this evidence-based, risk-based view."
    },
    {
      question: "What is a regression in this context?",
      options: [
        "A planned feature improvement",
        "Something that used to work correctly but is broken by a later change",
        "A Git repository name",
        "A file path mismatch only"
      ],
      answerIndex: 1,
      explanation:
        "Git’s user manual explicitly mentions using version history to study particular versions and search for regressions."
    },
    {
      question:
        "Why should the depth of retesting after a workflow change be risk-aware?",
      options: [
        "Because every change deserves identical checking",
        "Because the likely impact of the change and the consequences of error should influence how much testing is appropriate",
        "Because low-risk changes should never be recorded",
        "Because risk only matters in hardware"
      ],
      answerIndex: 1,
      explanation:
        "FDA’s CSA guidance explicitly recommends a risk-based approach to establishing confidence in software and determining where additional rigor is appropriate."
    },
    {
      question:
        "What is the main reason to document workflow changes clearly?",
      options: [
        "To make the repository larger",
        "To leave a usable record of what changed, why it changed, and what evidence supports it",
        "To avoid using Git",
        "To stop all future updates"
      ],
      answerIndex: 1,
      explanation:
        "FDA’s validation guidance centers documented objective evidence, and Git history is most useful when the recorded changes are understandable and meaningful."
    },
    {
      question: "Why does review matter after a workflow change?",
      options: [
        "Because the author never understands their own code",
        "Because another person can check whether the change, its explanation, and its testing make sense",
        "Because review replaces testing entirely",
        "Because Git cannot store commits without review"
      ],
      answerIndex: 1,
      explanation:
        "Review provides an independent check on the code change and the evidence around it, which makes the controlled change process more trustworthy. Git supports traceable history; review adds scrutiny to that history."
    },
    {
      question:
        "What is the safest beginner meaning of sign-off?",
      options: [
        "Deleting the previous version",
        "A clear indication that the change and its supporting evidence were accepted for use",
        "A kind of Git branch",
        "A way to skip testing"
      ],
      answerIndex: 1,
      explanation:
        "In controlled workflow practice, sign-off is the step that turns a documented, reviewed, tested change into an accepted change. FDA’s guidance emphasizes documented evidence and quality-system thinking rather than informal approval."
    },
    {
      question:
        "Why do validation, version control, and change control belong together in clinical-style pipeline work?",
      options: [
        "Because they are three names for the same thing",
        "Because validation establishes trusted behaviour, version control records how that behaviour changes over time, and change control governs how updates are introduced safely",
        "Because Git replaces validation",
        "Because change control matters only after a failure"
      ],
      answerIndex: 1,
      explanation:
        "These ideas work together: confidence in current behaviour, traceable history, and controlled evolution all support trustworthy workflow use over time. FDA’s guidance provides the evidence-and-intended-use frame; Git provides the project history."
    },
    {
      question: "What is the best overall summary of Module 21?",
      options: [
        "Once a workflow is validated once, later edits are mostly administrative",
        "Evolving clinical-style pipelines should be validated for intended use, tracked through version history, and updated through documented, risk-aware change processes",
        "Git alone is enough to keep a pipeline safe",
        "Documentation only matters after failures"
      ],
      answerIndex: 1,
      explanation:
        "That is the integrated lesson of the module: safe workflow evolution depends on evidence, traceability, and controlled updates rather than casual editing. In structured genomics services, those qualities matter even more."
    }
  ];