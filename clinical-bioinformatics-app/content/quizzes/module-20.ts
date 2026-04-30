export const module20Quiz = [
    {
      question: `A learner says:
  “A pipeline is basically just one long script with a nicer name.”
  Which response is best?`,
      options: [
        "Correct, because pipeline size is the only thing that matters",
        "Incomplete, because a pipeline is an organised workflow with defined steps, inputs, outputs, and data flow between steps",
        "Correct, unless the workflow uses CSV files",
        "Incomplete only because long scripts run more slowly"
      ],
      answerIndex: 1,
      explanation:
        "CWL defines workflows in terms of steps with inputs and outputs, and Nextflow describes workflows as structured, reproducible systems rather than ad hoc command piles."
    },
    {
      question:
        "What is the most accurate description of a dependency in workflow thinking?",
      options: [
        "A file that is never used",
        "A relationship showing that one step needs another step’s output before it can run",
        "A comment explaining the workflow",
        "A type of container only"
      ],
      answerIndex: 1,
      explanation:
        "Workflow order is controlled by data relationships. In CWL, steps become ready when inbound links are satisfied, and in Snakemake, rules are tied together through inputs and outputs."
    },
    {
      question: "Why can step order in a workflow not be treated as arbitrary?",
      options: [
        "Because steps should always be alphabetical",
        "Because later steps may require earlier outputs as their inputs",
        "Because workflow tools forbid reordering even when there are no dependencies",
        "Because final outputs must always be produced first"
      ],
      answerIndex: 1,
      explanation:
        "This is one of the core workflow ideas: outputs often become later inputs, so the data flow determines the valid order of execution."
    },
    {
      question: "What is reproducibility at beginner level?",
      options: [
        "A workflow only runs on one specific machine",
        "A workflow can be rerun with the same setup and give consistent results",
        "A workflow automatically rewrites itself",
        "A workflow never produces logs"
      ],
      answerIndex: 1,
      explanation:
        "Nextflow explicitly emphasises reproducible workflows, and Docker explains that containers provide reproducible, isolated environments that yield predictable results."
    },
    {
      question: "What is portability?",
      options: [
        "The workflow can move across different computing environments more easily",
        "The workflow produces only small files",
        "The workflow does not need inputs",
        "The workflow only runs in the cloud"
      ],
      answerIndex: 0,
      explanation:
        "Nextflow states workflows can run on local systems, HPC, and cloud, and CWL is designed as a portable workflow standard across platforms."
    },
    {
      question:
        "Why do software environments matter even if the workflow file stays the same?",
      options: [
        "Because the file changes automatically",
        "Because different software versions or dependencies can change workflow behaviour",
        "Because environments only affect web applications",
        "Because environments do not matter if the inputs are correct"
      ],
      answerIndex: 1,
      explanation:
        "Nextflow’s sharing guidance separates workflow dependencies into code, data, and environment, and Docker emphasises defining exact build requirements to avoid unexpected behaviour."
    },
    {
      question: "What is a good beginner description of a container?",
      options: [
        "A kind of spreadsheet",
        "A packaged, isolated environment that helps software run more consistently",
        "A workflow dependency graph",
        "A summary statistic"
      ],
      answerIndex: 1,
      explanation:
        "Docker says containers are reproducible, isolated environments, and Nextflow says containerization supports self-contained, reproducible computational pipelines."
    },
    {
      question: "What does logging contribute to a workflow?",
      options: [
        "It deletes failed steps automatically",
        "It records what happened during execution so runs are easier to inspect and debug",
        "It replaces provenance entirely",
        "It makes inputs unnecessary"
      ],
      answerIndex: 1,
      explanation:
        "Snakemake supports explicit log files for rules, and workflow records are especially useful for understanding successes and failures later."
    },
    {
      question: "What is provenance in workflow thinking?",
      options: [
        "The history of how outputs were produced from inputs",
        "A type of path object",
        "A rule that prevents reruns",
        "A synonym for portability"
      ],
      answerIndex: 0,
      explanation:
        "Nextflow’s lineage documentation tracks workflow runs, task executions, output files, and their links, which is exactly the kind of provenance record workflows need."
    },
    {
      question: "Why can partial outputs be dangerous?",
      options: [
        "Because files should never exist after a run",
        "Because a file may exist even though the step did not finish correctly",
        "Because outputs cannot be reused in workflows",
        "Because all partial outputs are automatically valid"
      ],
      answerIndex: 1,
      explanation:
        "A present file is not always proof of a correct, completed step. This is one of the reasons workflows need robust recovery logic and careful rerun handling. Snakemake’s execution controls and Nextflow’s resume model both reflect this reality."
    },
    {
      question: "What is the best beginner meaning of restart thinking?",
      options: [
        "Always rerun every step from scratch",
        "Work out what failed, what already succeeded, and what actually needs rerunning",
        "Delete all intermediate files immediately",
        "Ignore logs and retry until something works"
      ],
      answerIndex: 1,
      explanation:
        "Nextflow supports resuming previous runs, and workflow recovery is strongest when it targets only the necessary reruns instead of blindly repeating everything."
    },
    {
      question: "Why are retries useful but limited?",
      options: [
        "Because retries solve every type of failure",
        "Because retries can help with some unstable failures, but they do not fix wrong inputs or broken logic",
        "Because retries only matter in spreadsheets",
        "Because retries remove the need for logs"
      ],
      answerIndex: 1,
      explanation:
        "Workflow systems include retry controls because some failures are transient, but a bad dependency, wrong path, or broken command usually needs diagnosis rather than repetition. Snakemake and Nextflow both expose retry-related controls."
    },
    {
      question:
        "Which situation best shows why explicit inputs and outputs improve workflow review?",
      options: [
        "A step runs, but nobody knows what file it used or what file it created",
        "A step clearly declares what it consumes and what it produces",
        "A workflow hides all intermediate files",
        "A workflow has no logs and no step names"
      ],
      answerIndex: 1,
      explanation:
        "CWL, Snakemake, and Nextflow all make inputs and outputs explicit because that structure makes the workflow logic easier to inspect and reason about."
    },
    {
      question:
        "Why does workflow thinking matter in clinical bioinformatics rather than only in research computing?",
      options: [
        "Because clinical-style analysis also needs structure, rerunnability, traceability, and reviewability",
        "Because clinical workflows do not use files",
        "Because reproducibility only matters outside the clinic",
        "Because pipelines are only for very large clusters"
      ],
      answerIndex: 0,
      explanation:
        "Structured genomic services and best-practice workflows depend on defined steps, reproducibility, and auditability, not ad hoc one-off execution. Nextflow and GATK best-practice workflow thinking both support this."
    },
    {
      question: "What is the best overall summary of Module 20?",
      options: [
        "Pipelines are mostly about saving typing",
        "Workflow thinking means structuring analyses around linked steps, dependencies, reproducibility, provenance, and robust recovery so they are easier to trust and rerun",
        "A successful final file is all that matters",
        "Failures should usually be handled by deleting everything and starting again"
      ],
      answerIndex: 1,
      explanation:
        "That is the integrated lesson of the module: a good workflow is a structured, reproducible, traceable process rather than a one-off chain of commands."
    }
  ];