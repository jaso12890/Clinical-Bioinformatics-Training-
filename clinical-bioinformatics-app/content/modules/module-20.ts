export const module20 = {
    slug: "module-20",
    title: "Module 20: Pipelines and workflow thinking",
    description:
      "Learn what bioinformatics pipelines are, how workflow steps connect through inputs and outputs, why reproducibility and portability matter, how logging and provenance support trust, and how robust workflows recover from failure more sensibly.",
    lessons: [
      {
        slug: "lesson-1",
        title: "Lesson 1: What is a pipeline?",
        goal:
          "By the end of this lesson, the learner should be able to answer: “What is a bioinformatics pipeline, and how is it different from just running one long script?”",
        screens: [
          {
            title: "Lesson goal",
            body: `By the end of this lesson, the learner should be able to answer:
  
  “What is a bioinformatics pipeline, and how is it different from just running one long script?”
  
  This lesson starts Module 20 because the learner now understands small scripts and simple data-handling code. The next step is learning how real analyses are organised into workflows.
  
  Official workflow documentation describes this clearly. Nextflow defines itself as a workflow system for creating scalable, portable, and reproducible workflows. CWL defines a workflow as a sequence or graph of operations that transform input to output. GATK Best Practices describes step-by-step workflows tailored to different variant-discovery use cases.`
          },
          {
            title: "The central idea",
            body: `A good beginner summary is:
  
  A pipeline is an organised sequence of analysis steps where the output of one step becomes the input of the next.
  
  That is the key difference from one long unstructured script. A pipeline is meant to have:
  • defined steps
  • defined inputs
  • defined outputs
  • and a clear order.
  
  CWL explicitly describes workflows as operations arranged to transform inputs into outputs, and Nextflow describes workflows as reproducible and portable rather than ad hoc.
  
  So the key beginner message is:
  a pipeline is a workflow, not just a pile of commands.`
          },
          {
            title: "What a pipeline is at beginner level",
            body: `At beginner level, a pipeline is best thought of as:
  a chain of analysis steps with a clear flow of data.
  
  For example, a very simplified genomics-style pipeline might look like:
  1. start with sequencing data
  2. align reads
  3. process alignments
  4. call variants
  5. annotate results
  6. produce an output file or report
  
  GATK Best Practices explicitly describes step-by-step variant-discovery workflows tailored to different use cases, which is exactly the idea of a pipeline as an ordered set of steps.
  
  So the learner should understand:
  a pipeline exists because analyses usually happen in stages, not all at once.`
          },
          {
            title: "Why not just write one long script?",
            body: `A learner may think:
  
  “Why not put every command into one large script and run that?”
  
  Sometimes that can work for a very small task. But pipelines become important when analyses need to be:
  • repeatable
  • understandable
  • easier to debug
  • easier to rerun
  • and easier to share.
  
  Nextflow’s documentation emphasises scalable, portable, reproducible workflows, and CWL defines workflows as structured transformations from inputs to outputs rather than as one monolithic script.
  
  So the learner should understand:
  a long script may run, but a pipeline is easier to reason about as a workflow.
  
  That is the first major mindset shift in this module.`
          },
          {
            title: "Pipelines are built from steps",
            body: `The easiest way to understand a pipeline is to think in steps.
  
  Each step usually has:
  • some input
  • some work being done
  • some output.
  
  For example:
  • Step 1 input: raw reads
  • Step 1 output: aligned reads
  • Step 2 input: aligned reads
  • Step 2 output: processed alignment
  • Step 3 input: processed alignment
  • Step 3 output: variants
  
  CWL’s workflow spec defines workflows as steps that transform input to output, and its user guide says a workflow must have inputs, outputs, and steps.
  
  So the learner should understand:
  a pipeline is easier to understand when you ask, step by step: what goes in, what happens, and what comes out?`
          },
          {
            title: "Outputs become inputs",
            body: `One of the most important workflow ideas is:
  the output of one step often becomes the input of the next.
  
  That is what links steps together into a pipeline.
  
  For example:
  • a BAM-like file might come from an alignment step
  • that BAM-like file might then be used by a variant-calling step
  • the resulting VCF-like file might then be used by an annotation step.
  
  CWL’s definition of workflows as operations that transform inputs into outputs captures exactly this chaining idea.
  
  So the learner should understand:
  pipeline steps are connected by data flow.
  
  That is why workflows are often drawn as boxes with arrows between them.`
          },
          {
            title: "Pipelines are not only about convenience",
            body: `A beginner might think pipelines are mainly about saving time.
  
  They do help with convenience, but they are also about:
  • organisation
  • reproducibility
  • consistency
  • and traceability.
  
  Nextflow’s docs explicitly emphasise reproducible and portable workflows, and GATK Best Practices shows that real genomic analysis is organised into formal workflows tailored to different analysis goals.
  
  So the learner should understand:
  pipelines matter because they make analysis more structured and reliable, not just faster.`
          },
          {
            title: "Pipelines can be simple or complex",
            body: `A pipeline does not need to be huge to count as a pipeline.
  
  A small workflow with just three steps is still a pipeline if it has:
  • a clear start
  • linked steps
  • and a clear final output.
  
  At the same time, real bioinformatics workflows can become much larger and run on local machines, HPC systems, or cloud platforms. Nextflow documentation says workflows can run on local systems, HPC schedulers, and cloud platforms.
  
  So the learner should understand:
  a pipeline is defined more by its workflow structure than by its size.
  
  That is a helpful beginner rule.`
          },
          {
            title: "A simple toy pipeline example",
            body: `A toy pipeline might look like this:
  
  Input
  variants.csv
  
  Step 1
  Read the file
  
  Step 2
  Filter for records with quality above a threshold
  
  Step 3
  Count passing rows
  
  Output
  summary.txt
  
  That is already pipeline thinking because:
  • there is a clear input
  • the work is split into steps
  • and there is a clear output.
  
  So the learner should understand:
  you have already been doing pipeline-like thinking in small form — this module now makes that workflow structure explicit.
  
  That often helps pipelines feel less intimidating.`
          },
          {
            title: "Why workflow systems exist",
            body: `Workflow systems exist because real analyses often need more than just “run this script.”
  
  Nextflow presents itself as a workflow system designed for scalable, portable, reproducible workflows. CWL is a vendor-neutral standard for describing workflows as graphs of operations. GATK also publishes formal best-practice workflows for specific analysis types.
  
  So the learner should understand:
  workflow systems exist because real analysis pipelines need structure, not just code.
  
  This module is about learning that structure before learning specific workflow tools in depth.`
          },
          {
            title: "What this module is preparing the learner for",
            body: `This lesson is only the start.
  
  The rest of Module 20 will build on this by teaching:
  • inputs and outputs
  • dependencies
  • reproducibility
  • portability
  • logging
  • provenance
  • and failure points.
  
  So the learner should understand:
  today’s lesson is the workflow definition lesson; later lessons explain what makes a workflow trustworthy and robust.
  
  That is why this lesson stays conceptual.`
          },
          {
            title: "The one-sentence takeaway",
            body: `If the learner remembers one sentence from this lesson, it should be:
  
  A bioinformatics pipeline is an organised workflow made of linked analysis steps, where defined inputs are transformed into outputs in a clear, repeatable order.
  
  That is the core lesson.`
          },
          {
            title: "Worked example",
            body: `Scenario
  
  A learner says:
  
  “I have one script that reads a file, filters the rows, writes an output, and then makes a summary. That is just one script, so it is not really a pipeline.”
  
  Beginner question
  
  Why is that incomplete?
  
  Good beginner answer
  
  Because pipeline thinking is about workflow structure, not only about how many files of code exist. If the script has defined steps, uses outputs from one stage as inputs to the next, and produces a clear final output from a clear starting input, then it is already pipeline-like. Workflow definitions such as CWL focus on transformations from input to output through steps, and systems such as Nextflow are built around that same idea of structured workflows rather than random commands.`
          },
          {
            title: "Lesson summary",
            body: `The learner has understood this lesson if they can say something like:
  
  “A pipeline is a workflow made of linked analysis steps. Each step has inputs and outputs, and the output of one step often feeds the next. That structure makes the analysis easier to organise and rerun than treating it as one unstructured block of commands.”`
          }
        ],
        sections: [
          {
            heading: "The central idea",
            body:
              "A pipeline is an organised sequence of analysis steps where the output of one step becomes the input of the next."
          }
        ],
        quiz: [
          {
            question: "What is the safest beginner description of a pipeline?",
            options: [
              "One very long command only",
              "An organised sequence of linked analysis steps",
              "A file path manager",
              "A table format"
            ],
            answerIndex: 1,
            explanation:
              "A pipeline is best understood as a workflow made of connected steps with inputs and outputs."
          },
          {
            question: "Why is a pipeline different from one unstructured script?",
            options: [
              "Because scripts cannot read files",
              "Because pipelines emphasise linked steps, inputs, outputs, and repeatable workflow structure",
              "Because scripts are always wrong",
              "Because pipelines never use code"
            ],
            answerIndex: 1,
            explanation:
              "The difference is not just size. It is that pipelines are structured as workflows, which systems like Nextflow and CWL explicitly emphasise."
          },
          {
            question: "What is one of the most important ideas in a pipeline?",
            options: [
              "The first step should be hidden",
              "Outputs from one step often become inputs to the next",
              "Every step must be manual",
              "Pipelines only matter in the cloud"
            ],
            answerIndex: 1,
            explanation:
              "This chaining of outputs to inputs is one of the core workflow ideas behind formal workflow systems."
          },
          {
            question: "What is the safest overall message of this lesson?",
            options: [
              "Pipelines mainly exist to save typing",
              "Pipelines are structured workflows that make analyses more organised and repeatable",
              "Pipelines only apply to very advanced programmers",
              "A script can never count as a workflow"
            ],
            answerIndex: 1,
            explanation:
              "That is the integrated lesson: pipelines are about workflow structure, repeatability, and organisation, not just convenience."
          }
        ]
      },
      {
        slug: "lesson-2",
        title: "Lesson 2: Inputs, outputs, and dependencies",
        goal:
          "By the end of this lesson, the learner should be able to answer: “What are inputs, outputs, and dependencies in a pipeline, and why do they control the order of a workflow?”",
        screens: [
          {
            title: "Lesson goal",
            body: `By the end of this lesson, the learner should be able to answer:
  
  “What are inputs, outputs, and dependencies in a pipeline, and why do they control the order of a workflow?”
  
  This lesson follows the introduction to pipelines because once the learner understands that a pipeline is a workflow made of steps, the next question is:
  what connects those steps together?
  
  The answer is:
  • inputs
  • outputs
  • and dependencies.
  
  CWL’s user guide says a workflow must have inputs, outputs, and steps, and its basic concepts guide explains that workflow inputs can be passed to steps while outputs produced by steps can be used in the workflow’s final output. Nextflow’s overview says each process specifies its inputs and outputs, and Nextflow coordinates task execution from that. Snakemake similarly defines workflows in terms of rules with input files and output files.`
          },
          {
            title: "The central idea",
            body: `A good beginner summary is:
  
  Inputs are what a step needs to start, outputs are what a step produces, and dependencies describe which steps must happen before other steps can run.
  
  So the key beginner message is:
  pipeline order is not arbitrary; it is controlled by which outputs are needed as later inputs.
  
  That is the core workflow idea of this lesson.`
          },
          {
            title: "What an input is",
            body: `At beginner level, an input is anything a step needs before it can do its work.
  
  That could be:
  • a file
  • a parameter
  • a reference resource
  • or the output from an earlier step.
  
  CWL says workflows and steps have inputs, and Snakemake rules most commonly specify input files and output files. Nextflow processes also define inputs explicitly.
  
  So the learner should understand:
  an input is the starting material for a step.
  
  Without the input, the step cannot run properly.`
          },
          {
            title: "What an output is",
            body: `An output is what a step produces after it runs.
  
  That output might be:
  • a new file
  • a result table
  • a report
  • or a transformed version of the input.
  
  Nextflow’s process documentation shows processes declaring output files, and Snakemake rules are described as generating outputs from inputs. CWL likewise defines workflows as operations that transform input to output.
  
  So the learner should understand:
  an output is the product of a workflow step.
  
  That product often becomes important immediately in the next step.`
          },
          {
            title: "Outputs often become later inputs",
            body: `This is the idea that really turns separate steps into a workflow.
  
  For example:
  • Step 1 produces a file
  • Step 2 needs that file as its input
  • therefore Step 2 depends on Step 1.
  
  CWL’s workflow specification says dependencies between parameters are expressed through sources linking one step’s outputs to downstream inputs, and that when all inbound data links to a step are fulfilled, the step is ready to execute. The user guide also says outputs produced by steps can be used in the final workflow output.
  
  So the learner should understand:
  steps are connected by data flow: one step’s output can feed the next step’s input.
  
  That is the real meaning of “linked workflow steps.”`
          },
          {
            title: "What a dependency is",
            body: `A dependency is the relationship that says one step cannot happen until another step has produced what it needs.
  
  This does not just mean “earlier in the script.”
  It means “required by the data flow.”
  
  Snakemake’s tutorial says it automatically determines dependencies between rules by matching file names, and CWL says when the data links inbound to a step are fulfilled, the step is ready to execute.
  
  So the learner should understand:
  a dependency is what forces the correct order of the workflow.
  
  That is why workflow order should be driven by inputs and outputs, not just by guesswork.`
          },
          {
            title: "Why step order matters",
            body: `A learner may think:
  
  “Why not just run the steps in any order as long as all the code exists?”
  
  Because if Step B needs the output from Step A, then Step B is not ready until Step A has finished successfully.
  
  That is why workflow systems care so much about defined inputs and outputs. Nextflow says that by specifying process inputs and outputs, it coordinates task execution, and Snakemake defines rules in terms of creating outputs from inputs.
  
  So the learner should understand:
  step order matters because not every step is ready at the same time.
  
  Some steps must wait for their dependencies.`
          },
          {
            title: "Inputs, outputs, and intermediate files",
            body: `Not every output is the final result.
  
  Many outputs are intermediate files:
  • they are produced by one step
  • consumed by another step
  • and may never be the final thing the user sees.
  
  This is normal in workflows. Snakemake rules and Nextflow processes both naturally work in terms of intermediate and final files, because outputs are often the things downstream rules or processes use next.
  
  So the learner should understand:
  some outputs are final outputs, but many are only temporary workflow products passed to later steps.
  
  That is why pipelines often create several files along the way.`
          },
          {
            title: "A toy workflow example",
            body: `A very small workflow might look like this:
  
  Step 1
  Input: variants.csv
  Output: filtered records
  
  Step 2
  Input: filtered records
  Output: summary counts
  
  Step 3
  Input: summary counts
  Output: summary.txt
  
  In this toy example:
  • Step 2 depends on Step 1
  • Step 3 depends on Step 2.
  
  So the learner should understand:
  if you can name the input and output of each step, you can usually see the workflow structure much more clearly.
  
  That is a very good beginner habit.`
          },
          {
            title: "Why explicit inputs and outputs make workflows easier to understand",
            body: `A workflow becomes much easier to reason about when each step clearly says:
  • what it needs
  • what it produces
  • and what later step will use it.
  
  That is why workflow systems make these ideas explicit. CWL requires workflows to define inputs, outputs, and steps. Nextflow processes specify inputs and outputs. Snakemake rules specify inputs and outputs.
  
  So the learner should understand:
  explicit inputs and outputs make the workflow easier to read, rerun, and debug.
  
  That is one of the biggest benefits of workflow thinking.`
          },
          {
            title: "What happens when a dependency is missing",
            body: `A common workflow problem is that a step expects an input that has not been created, has the wrong name, or comes from the wrong earlier step.
  
  Then the workflow may:
  • fail completely
  • run the wrong thing
  • or produce incomplete results.
  
  CWL’s dependency model makes clear that a step is ready only when its incoming data links are fulfilled, and Snakemake’s rule system depends on matching outputs to downstream inputs.
  
  So the learner should understand:
  a missing dependency is really a missing connection between outputs and later inputs.
  
  That is why dependency thinking is not a detail; it is central to pipelines.`
          },
          {
            title: "A useful beginner contrast",
            body: `A safe contrast is:
  
  Script-only thinking
  • “Run step 1, then run step 2, then run step 3.”
  
  Workflow thinking
  • “Step 2 needs this input from step 1, and step 3 needs this output from step 2.”
  
  So the learner should understand:
  workflow thinking focuses on data relationships, not just command order.
  
  That is one of the biggest conceptual upgrades from writing small scripts.`
          },
          {
            title: "The one-sentence takeaway",
            body: `If the learner remembers one sentence from this lesson, it should be:
  
  Inputs are what workflow steps need, outputs are what they produce, and dependencies are the data relationships that determine which steps must happen before others can run.
  
  That is the core lesson.`
          },
          {
            title: "Worked example",
            body: `Scenario
  
  A learner says:
  
  “Step 3 should run before Step 2 because I listed it earlier in my notes.”
  
  But in the workflow:
  • Step 2 produces filtered_variants.csv
  • Step 3 needs filtered_variants.csv as its input.
  
  Beginner question
  
  Why is the learner’s idea wrong?
  
  Good beginner answer
  
  Because workflow order is controlled by dependencies, not by where a step happens to be written in someone’s notes. If Step 3 needs filtered_variants.csv and Step 2 is the step that produces it, then Step 3 depends on Step 2 and cannot run first. Workflow systems like CWL and Snakemake express this by linking outputs to later inputs, and Nextflow similarly coordinates execution from declared inputs and outputs.`
          },
          {
            title: "Lesson summary",
            body: `The learner has understood this lesson if they can say something like:
  
  “Each workflow step has inputs and outputs, and dependencies appear when one step needs another step’s output before it can run. That means the workflow order should be driven by data flow, not just by the order the steps happen to be written down.”`
          }
        ],
        sections: [
          {
            heading: "The central idea",
            body:
              "Inputs are what a step needs to start, outputs are what a step produces, and dependencies describe which steps must happen before other steps can run."
          }
        ],
        quiz: [
          {
            question: "What is an input in a workflow?",
            options: [
              "Something a step produces after running",
              "Something a step needs before it can run",
              "A log file only",
              "A type of summary statistic"
            ],
            answerIndex: 1,
            explanation:
              "Inputs are the data, files, or parameters a step needs before it can do its work. CWL, Nextflow, and Snakemake all define workflows around explicit inputs and outputs."
          },
          {
            question: "What is an output in a workflow?",
            options: [
              "The starting material for a step",
              "What a step produces",
              "A pipeline failure only",
              "The workflow name"
            ],
            answerIndex: 1,
            explanation:
              "Outputs are the products generated by a step, and they often become inputs to later steps."
          },
          {
            question: "What is a dependency?",
            options: [
              "A step that can run at any time",
              "A relationship showing that one step must wait for another step’s output",
              "A comment in the code",
              "A type of CSV file"
            ],
            answerIndex: 1,
            explanation:
              "Dependencies are what make workflow order meaningful, because later steps often require earlier outputs."
          },
          {
            question: "What is the safest overall message of this lesson?",
            options: [
              "Workflow order is mostly arbitrary",
              "Inputs, outputs, and dependencies determine how workflow steps connect and in what order they can run",
              "Only final outputs matter in a pipeline",
              "Intermediate files are mistakes"
            ],
            answerIndex: 1,
            explanation:
              "That is the integrated lesson: workflow structure comes from what each step needs and produces, not just from the order someone typed the steps in."
          }
        ]
      },
      {
        slug: "lesson-3",
        title: "Lesson 3: Reproducibility, portability, and environments",
        goal:
          "By the end of this lesson, the learner should be able to answer: “Why should a pipeline give the same result when rerun, why should it be able to move between different computing setups, and what do software environments have to do with that?”",
        screens: [
          {
            title: "Lesson goal",
            body: `By the end of this lesson, the learner should be able to answer:
  
  “Why should a pipeline give the same result when rerun, why should it be able to move between different computing setups, and what do software environments have to do with that?”
  
  This lesson follows inputs, outputs, and dependencies because once the learner understands how workflow steps connect, the next question is:
  how do you make that workflow dependable when you run it again or run it somewhere else?
  
  That is where reproducibility, portability, and environments matter.
  
  Nextflow defines itself as a workflow system for scalable, portable, and reproducible workflows. CWL defines workflows as a vendor-neutral standard intended to be portable across a variety of computing platforms. Docker’s documentation says containers are reproducible, isolated environments that yield predictable results.`
          },
          {
            title: "The central idea",
            body: `A good beginner summary is:
  
  A useful pipeline should run in a consistent way when repeated, and it should not depend so heavily on one machine’s setup that it breaks everywhere else.
  
  That is why workflow systems care so much about reproducibility and portability. Nextflow highlights reproducible and portable workflows as a core feature, and CWL is explicitly designed as a portable workflow standard.
  
  So the key beginner message is:
  a pipeline is not really trustworthy if it only works once, on one machine, in one exact environment.`
          },
          {
            title: "What reproducibility means",
            body: `At beginner level, reproducibility means:
  if you rerun the same workflow with the same inputs, settings, and software environment, you should be able to get the same result again.
  
  Nextflow’s documentation explicitly describes workflows as reproducible, and its sharing guidance says results produced by a pipeline can be reproduced even across different environments when dependencies are handled properly. Docker also describes containers as reproducible, isolated environments that yield predictable results.
  
  So the learner should understand:
  reproducibility is about getting consistent, explainable reruns, not about luck.`
          },
          {
            title: "What portability means",
            body: `Portability means the workflow can move between computing environments without needing to be completely rewritten.
  
  For example, a workflow might need to run on:
  • a laptop
  • an HPC system
  • or the cloud.
  
  Nextflow says workflows can run on local systems, HPC schedulers, and cloud platforms, and CWL describes itself as a portable standard across a variety of computing platforms.
  
  So the learner should understand:
  portability means the workflow is not trapped inside one specific machine setup.
  
  That matters a lot in real bioinformatics work.`
          },
          {
            title: "Why environments matter",
            body: `A workflow does not just depend on code and data. It also depends on the environment it runs in.
  
  That environment includes things like:
  • operating system details
  • installed software
  • software versions
  • supporting tools and binaries
  • runtime settings.
  
  Nextflow’s sharing documentation says one way to think about reproducible dependencies is in three categories: code, data, and environment. Docker’s docs explain that with a Dockerfile you define the exact build environment, including runtimes, operating system components, and binaries.
  
  So the learner should understand:
  two workflows can have the same code and the same input files but still behave differently if their environments differ.
  
  That is why environments are not a side issue.`
          },
          {
            title: "Why version differences can break reproducibility",
            body: `A learner may think:
  
  “If I have the same script, why would the result change?”
  
  One common reason is that the software version changed.
  
  For example:
  • a tool may update its defaults
  • a library may change behaviour
  • a dependency may disappear or be replaced.
  
  Docker’s docs emphasise defining the exact requirements for the build environment, and Nextflow’s sharing guidance emphasizes environment as a reproducibility dependency category alongside code and data.
  
  So the learner should understand:
  reproducibility is not only about keeping the script the same; it is also about keeping the environment under control.`
          },
          {
            title: "What a container is at beginner level",
            body: `A safe beginner explanation is:
  a container is a packaged environment that includes the software a workflow needs so it can run more consistently in different places.
  
  Docker describes containers as reproducible, isolated environments that yield predictable results. Nextflow’s container documentation says containerization allows you to write self-contained and truly reproducible computational pipelines by packaging dependencies into a standard and portable format that can run anywhere a supported container runtime exists. Docker also explains that container processes run in isolated environments.
  
  So the learner should understand:
  a container helps make “it worked on my machine” less of a problem by packaging the environment more explicitly.
  
  That is the main conceptual reason containers matter.`
          },
          {
            title: "Why portability and reproducibility are related but not identical",
            body: `These two ideas are connected, but they are not exactly the same.
  • Reproducibility asks: can I get the same result again?
  • Portability asks: can I run this workflow somewhere else without breaking it?
  
  Workflow systems like Nextflow emphasize both together, and CWL explicitly focuses on portability across platforms while also supporting reproducible workflow descriptions.
  
  So the learner should understand:
  a portable workflow can move, and a reproducible workflow can be rerun consistently; good workflows aim for both.`
          },
          {
            title: "A toy example of why environments matter",
            body: `Imagine a tiny workflow:
  1. read a file
  2. run a tool to process it
  3. write a result
  
  If that tool is:
  • version 1 on one machine
  • version 2 on another machine
  
  then the same workflow script may not behave identically.
  
  That is exactly why Docker emphasizes defining the exact environment, and why Nextflow highlights reproducible, portable workflows and container support.
  
  So the learner should understand:
  the workflow logic may be unchanged, but the runtime environment can still change the outcome.`
          },
          {
            title: "Why workflow tools emphasise these ideas",
            body: `Workflow tools are not just about running steps in order. They also help organise:
  • dependency handling
  • environment handling
  • reproducibility
  • portability.
  
  Nextflow explicitly says it is designed to simplify writing scalable and reproducible pipelines, and CWL’s feature overview says workflows help make computation methods portable, maintainable, reproducible, and shareable.
  
  So the learner should understand:
  workflow systems care about reproducibility and portability because those are central workflow problems, not optional extras.`
          },
          {
            title: "What this does not mean",
            body: `This lesson is not saying:
  • every beginner must immediately master Docker
  • every workflow must be cloud-ready on day one
  • every environment problem disappears automatically.
  
  Instead, the lesson is teaching the mindset:
  a trustworthy workflow should make its environment easier to understand and control.
  
  That is the key beginner takeaway.`
          },
          {
            title: "The one-sentence takeaway",
            body: `If the learner remembers one sentence from this lesson, it should be:
  
  Reproducibility means a workflow can be rerun consistently, portability means it can run across different computing setups, and environments matter because software versions and dependencies strongly affect whether both of those goals are actually achieved.
  
  That is the core lesson.`
          },
          {
            title: "Worked example",
            body: `Scenario
  
  A learner says:
  
  “I used the same workflow file, so I do not see why it behaved differently on another machine.”
  
  Beginner question
  
  Why is that incomplete?
  
  Good beginner answer
  
  Because the workflow file is only one part of what controls behaviour. The other machine may have a different software version, different installed tools, or a different runtime environment. Nextflow’s documentation explicitly treats reproducibility and portability as workflow goals, and its sharing guidance separates workflow dependencies into code, data, and environment. Docker likewise describes containers as reproducible, isolated environments designed to give predictable results. So keeping the workflow text the same is helpful, but it is not enough by itself if the environment changes underneath it.`
          },
          {
            title: "Lesson summary",
            body: `The learner has understood this lesson if they can say something like:
  
  “A good pipeline should be reproducible when rerun and portable across different computing setups. That depends not only on the workflow code, but also on the environment, including software versions and dependencies. Containers help by packaging that environment more explicitly.”`
          }
        ],
        sections: [
          {
            heading: "The central idea",
            body:
              "A useful pipeline should run in a consistent way when repeated, and it should not depend so heavily on one machine’s setup that it breaks everywhere else."
          }
        ],
        quiz: [
          {
            question: "What is reproducibility in workflow thinking?",
            options: [
              "The workflow only runs once",
              "The workflow can be rerun with the same setup and give consistent results",
              "The workflow uses only local files",
              "The workflow must be written in one tool only"
            ],
            answerIndex: 1,
            explanation:
              "Workflow systems like Nextflow explicitly emphasize reproducible workflows, and Docker emphasizes reproducible environments."
          },
          {
            question: "What is portability?",
            options: [
              "The workflow can run only on the machine where it was written",
              "The workflow can move across different computing environments more easily",
              "The workflow automatically rewrites itself",
              "The workflow has no dependencies"
            ],
            answerIndex: 1,
            explanation:
              "CWL is explicitly designed as a portable workflow standard across different computing platforms, and Nextflow highlights portability too."
          },
          {
            question: "Why do environments matter?",
            options: [
              "Because code never matters",
              "Because software versions and dependencies can change workflow behaviour even when the script text is unchanged",
              "Because environments are only important in web apps",
              "Because workflows do not use tools"
            ],
            answerIndex: 1,
            explanation:
              "Nextflow’s sharing docs describe environment as one of the key dependency categories, and Docker shows how explicit environments help avoid unexpected behaviour."
          },
          {
            question: "What is a beginner-safe description of a container?",
            options: [
              "A type of spreadsheet",
              "A packaged, isolated environment that helps software run more consistently",
              "A summary statistic",
              "A workflow dependency graph"
            ],
            answerIndex: 1,
            explanation:
              "Docker describes containers as reproducible, isolated environments, and Nextflow says containerization supports self-contained, reproducible pipelines."
          }
        ]
      },
      {
        slug: "lesson-4",
        title: "Lesson 4: Logging, provenance, and audit trails",
        goal:
          "By the end of this lesson, the learner should be able to answer: “Why should a workflow leave a clear record of what happened, what was used, and what was produced?”",
        screens: [
          {
            title: "Lesson goal",
            body: `By the end of this lesson, the learner should be able to answer:
  
  “Why should a workflow leave a clear record of what happened, what was used, and what was produced?”
  
  This lesson follows reproducibility and environments because once the learner understands that a workflow should rerun consistently, the next question is:
  how do you prove what actually happened in a specific run?
  
  That is where logging, provenance, and audit trails matter.
  
  Nextflow now includes built-in data lineage tracking that records workflow runs, task executions, output files, and the links between them, and it describes this as helping verify integrity and reproducibility. Snakemake also supports dedicated log and benchmark files for rules.`
          },
          {
            title: "The central idea",
            body: `A good beginner summary is:
  
  A good workflow should leave behind a traceable record of what ran, which inputs were used, what parameters and tools were involved, and what outputs were produced.
  
  That is what makes a workflow easier to:
  • review
  • rerun
  • debug
  • and trust.
  
  Nextflow’s lineage documentation says data lineage tracks workflow runs, task executions, and output files, while its migration guide says built-in provenance tracking records workflow runs, task executions, output files, and the links between them.
  
  So the key beginner message is:
  a workflow should not only produce results — it should also produce a usable record of how those results were created.`
          },
          {
            title: "What logging means",
            body: `At beginner level, logging means keeping a record of what the workflow or its steps did while running.
  
  That can include things like:
  • which step ran
  • when it ran
  • whether it succeeded or failed
  • and where its detailed tool output was written.
  
  Snakemake’s documentation shows that rules can declare log files, and that those log files can capture tool logging information and are not deleted on error, which is useful for troubleshooting. Nextflow’s training materials also describe command-line provenance information available after runs.
  
  So the learner should understand:
  logging is the workflow’s memory of what happened during execution.`
          },
          {
            title: "What provenance means",
            body: `A safe beginner explanation of provenance is:
  the history of where a result came from and how it was produced.
  
  That means provenance is not just “a step ran.” It is more like:
  • which workflow run produced this file?
  • which task created it?
  • which inputs fed that task?
  • what settings were used?
  
  Nextflow’s lineage docs say lineage tracks workflow runs, task executions, output files, and file provenance, and assign unique lineage IDs to records. Its training materials also describe execution provenance via the nextflow log command.
  
  So the learner should understand:
  provenance is the chain of evidence connecting outputs back to their origin.`
          },
          {
            title: "What an audit trail is",
            body: `An audit trail is the broader idea that the workflow leaves enough traceable information for someone to reconstruct what was done.
  
  A safe beginner way to think about it is:
  an audit trail is what lets another person ask, “What happened in this run?” and actually find the answer.
  
  That answer may involve:
  • logs
  • run metadata
  • inputs and outputs
  • provenance records
  • and stored reports or benchmarks.
  
  Nextflow’s lineage system and Snakemake’s logging and benchmarking features are both examples of workflow traces that support this kind of auditability.
  
  So the learner should understand:
  an audit trail is not one file — it is the set of records that make the workflow reviewable afterwards.`
          },
          {
            title: "Why logging and provenance matter for reproducibility",
            body: `A workflow might be rerunnable in theory, but if it leaves no useful trace of:
  • what inputs were used
  • what settings were chosen
  • what version of the workflow ran
  • or which output came from which task
  
  then reproducibility becomes much harder to prove.
  
  Nextflow’s lineage docs explicitly say data lineage helps verify integrity and reproducibility by maintaining a complete history of computations and intermediate data. Its migration guide says lineage records workflow runs, task executions, output files, and the links between them.
  
  So the learner should understand:
  logging and provenance help turn reproducibility from a claim into something you can actually inspect.`
          },
          {
            title: "Why logs matter when something fails",
            body: `A common beginner thought is:
  
  “Logs are mostly for finished successful runs.”
  
  But logs are often most valuable when something goes wrong.
  
  Snakemake’s docs explicitly note that log files are not deleted upon error, because they are needed to discover causes of errors. Snakemake also supports benchmark files that store runtime and resource metrics for jobs.
  
  So the learner should understand:
  logs matter because failures are often much easier to debug when the workflow kept detailed records instead of only saying “it failed.”`
          },
          {
            title: "What kinds of things should be traceable",
            body: `A workflow becomes much more reviewable if it keeps track of things like:
  • workflow run identity
  • task identity
  • input files
  • output files
  • log files
  • parameter values
  • and resource or benchmark information.
  
  Nextflow’s lineage docs mention workflow runs, task executions, output files, and provenance. Snakemake supports explicit input, output, log, and benchmark paths in rules.
  
  So the learner should understand:
  good workflow traceability means more than saving the final output file.
  
  A final file without context is much harder to trust.`
          },
          {
            title: "Why provenance is about links, not only files",
            body: `A learner might think provenance just means “save lots of files.”
  
  That is not enough.
  
  The important thing is the links:
  • which workflow run produced this output?
  • which task created it?
  • which input files fed that task?
  
  Nextflow’s lineage feature explicitly records not just outputs, but also the links between workflow runs, task executions, and files. CWL also defines workflows around explicit links from outputs to later inputs.
  
  So the learner should understand:
  provenance matters because it preserves relationships, not just artifacts.
  
  That is what makes a record genuinely useful.`
          },
          {
            title: "A toy example",
            body: `Imagine a tiny workflow:
  
  Step 1
  Input: variants.csv
  Output: filtered_variants.csv
  
  Step 2
  Input: filtered_variants.csv
  Output: summary.txt
  
  A useful audit trail would let you answer:
  • which variants.csv was used?
  • did Step 1 finish successfully?
  • which exact filtered_variants.csv did Step 2 consume?
  • when was summary.txt produced?
  • which run produced it?
  
  That is exactly the kind of information provenance and logging are meant to preserve.
  
  So the learner should understand:
  the point of workflow records is to make these questions answerable later.
  
  That is why this topic matters so much.`
          },
          {
            title: "Why this matters in genomics work",
            body: `Genomics workflows often involve:
  • multiple steps
  • multiple files
  • intermediate outputs
  • reruns
  • and review by other people.
  
  Without traceable records, it becomes much harder to:
  • explain where a result came from
  • debug failures
  • compare runs
  • or justify that a workflow behaved as expected.
  
  Nextflow explicitly positions lineage tracking as helping verify integrity and reproducibility, while Snakemake supports logs and benchmarks that help with review and troubleshooting.
  
  So the learner should understand:
  logging and provenance are not paperwork extras — they are part of making workflows trustworthy.`
          },
          {
            title: "The one-sentence takeaway",
            body: `If the learner remembers one sentence from this lesson, it should be:
  
  Logging records what happened during a workflow run, provenance records how outputs were produced from inputs, and together they create the audit trail that makes workflows easier to review, debug, and trust.
  
  That is the core lesson.`
          },
          {
            title: "Worked example",
            body: `Scenario
  
  A learner says:
  
  “I have the final output file, so I do not really need logs or provenance information.”
  
  Beginner question
  
  Why is that incomplete?
  
  Good beginner answer
  
  Because the final output file does not tell you enough by itself. It does not necessarily tell you which exact input files were used, which task created it, what parameters were applied, or what happened if one of the earlier steps behaved unexpectedly. Nextflow’s lineage tracking is designed specifically to record workflow runs, task executions, outputs, and their links, while Snakemake keeps log files and benchmarks that help diagnose failures and understand what happened. So the final result matters, but the workflow record around it is what makes that result reviewable and trustworthy.`
          },
          {
            title: "Lesson summary",
            body: `The learner has understood this lesson if they can say something like:
  
  “A good workflow should leave behind more than just final files. It should record what ran, what inputs were used, what outputs were produced, and how those outputs were connected to earlier steps. That makes the workflow easier to debug, review, and trust.”`
          }
        ],
        sections: [
          {
            heading: "The central idea",
            body:
              "A good workflow should leave behind a traceable record of what ran, which inputs were used, what parameters and tools were involved, and what outputs were produced."
          }
        ],
        quiz: [
          {
            question: "What is logging in workflow thinking?",
            options: [
              "A way to remove outputs",
              "A record of what happened during workflow execution",
              "A file format for genomes",
              "A replacement for reproducibility"
            ],
            answerIndex: 1,
            explanation:
              "Logs capture what steps did, and they are especially useful when errors occur. Snakemake explicitly supports log files for rules."
          },
          {
            question: "What is provenance?",
            options: [
              "The history of how an output was produced from its inputs",
              "A type of container",
              "A workflow scheduler only",
              "A way to sort rows alphabetically"
            ],
            answerIndex: 0,
            explanation:
              "Nextflow’s lineage documentation describes provenance as tracking workflow runs, tasks, outputs, and file history."
          },
          {
            question: "Why are logs especially useful when something fails?",
            options: [
              "Because logs are only created for failed steps",
              "Because they help show what happened and can preserve tool output needed for debugging",
              "Because they replace input files",
              "Because they automatically repair the workflow"
            ],
            answerIndex: 1,
            explanation:
              "Snakemake notes that log files are not deleted on error so the cause of the problem can be discovered."
          },
          {
            question: "What is the safest overall message of this lesson?",
            options: [
              "Final outputs are enough on their own",
              "A workflow should leave a traceable record of runs, tasks, inputs, outputs, and logs so it can be reviewed and trusted later",
              "Provenance only matters in cloud computing",
              "Audit trails are only for very advanced users"
            ],
            answerIndex: 1,
            explanation:
              "That is the integrated lesson: workflow records make results easier to inspect, debug, and trust."
          }
        ]
      },
      {
        slug: "lesson-5",
        title: "Lesson 5: Failure points, restart thinking, and workflow robustness",
        goal:
          "By the end of this lesson, the learner should be able to answer: “Where do pipelines commonly fail, and how should I think about restarting and designing workflows so they are more robust?”",
        screens: [
          {
            title: "Lesson goal",
            body: `By the end of this lesson, the learner should be able to answer:
  
  “Where do pipelines commonly fail, and how should I think about restarting and designing workflows so they are more robust?”
  
  This lesson follows logging and provenance because once the learner understands that a workflow should leave a clear record of what happened, the next step is learning how to think when things go wrong.
  
  That matters because real workflows do not always run cleanly from start to finish. Workflow systems explicitly include restart and failure-aware features. Nextflow supports resuming previous runs with -resume, and its process documentation explains task retry directives such as maxRetries. Snakemake’s command-line interface supports rerun-related options and retry configuration such as --retries.`
          },
          {
            title: "The central idea",
            body: `A good beginner summary is:
  
  A robust workflow is designed with the expectation that some steps may fail, and it should make those failures easier to detect, understand, and recover from.
  
  So the key beginner message is:
  good workflow thinking is not “nothing will fail.” It is “when something fails, the workflow should fail clearly and recover sensibly.”`
          },
          {
            title: "What a failure point is",
            body: `A failure point is any place in a workflow where something can go wrong badly enough that the step does not complete correctly.
  
  That might be:
  • a missing input file
  • a broken file path
  • wrong parameter values
  • software version mismatch
  • malformed data
  • resource problems such as memory or disk limits
  • or a bug in the step itself.
  
  Snakemake’s CLI documentation includes retry and rerun options because failures are expected workflow realities, not rare exceptions. CWL’s troubleshooting guide is built around the fact that workflow execution problems need systematic diagnosis.
  
  So the learner should understand:
  a failure point is not only “the workflow crashed”; it is any weak spot where correct execution can break down.`
          },
          {
            title: "Common workflow failure points",
            body: `A safe beginner list of common failure points is:
  • missing inputs
  the expected file is not there
  • wrong paths
  the file exists, but the workflow is looking in the wrong place
  • bad or unexpected data
  the file is present, but its contents do not match what the step expects
  • software or environment mismatch
  the required tool or version is unavailable
  • resource limits
  a step runs out of memory, time, or disk
  • partial outputs
  a step starts but does not finish cleanly, leaving incomplete results behind
  
  Nextflow’s process directives include retry-related settings and error strategies, which shows that task failure and recovery are expected parts of workflow design. Snakemake likewise includes retries and rerun controls in execution.
  
  So the learner should understand:
  most workflow failures come from a few recurring categories, and good workflow design tries to make those categories visible and manageable.`
          },
          {
            title: "Why restart thinking matters",
            body: `A learner may think:
  
  “If a workflow fails, I should just rerun everything from the beginning.”
  
  Sometimes that works, but it can be wasteful and confusing, especially if many earlier steps already finished correctly.
  
  That is why restart thinking matters. Nextflow’s caching and resume documentation says that when run with -resume, completed tasks can be reused from the task cache instead of being recomputed, provided the task matches the cached state. Snakemake also provides rerun controls and options to target incomplete jobs.
  
  So the learner should understand:
  restart thinking means asking what already succeeded, what actually failed, and what really needs to be rerun.
  
  That is much better than blindly starting over every time.`
          },
          {
            title: "What “resume” means at beginner level",
            body: `A safe beginner explanation is:
  resume means continuing workflow execution in a way that reuses already completed valid work instead of repeating everything unnecessarily.
  
  Nextflow documents -resume as enabling recovery of previously computed results by using the task cache. That means reruns can skip tasks whose inputs, command, and relevant environment details still match the cached execution.
  
  So the learner should understand:
  resume is useful because workflow steps often have different statuses: some finished, some failed, and only some need to be redone.`
          },
          {
            title: "Why partial outputs can be dangerous",
            body: `A workflow step that fails halfway through may still leave files behind.
  
  That creates a danger:
  • the file exists
  • but it may not be complete or trustworthy.
  
  This is one reason robust workflows and workflow engines matter: they need to distinguish genuinely finished outputs from incomplete or failed work. Snakemake explicitly provides options around rerunning incomplete files, and Nextflow’s resume system is tied to task execution state rather than simply trusting that any file present is valid.
  
  So the learner should understand:
  “a file exists” is not always the same as “the step succeeded correctly.”`
          },
          {
            title: "Why logs matter during recovery",
            body: `When a workflow fails, logs become much more important.
  
  They help answer:
  • which step failed?
  • did it fail immediately or late?
  • was the problem a missing file, bad data, or environment issue?
  • should the step be retried, fixed, or rerun from scratch?
  
  Snakemake’s rule logging docs emphasize that log files are especially valuable because they are kept even when a job errors. Nextflow also records run and task metadata that helps interpret what happened in a run.
  
  So the learner should understand:
  restart thinking depends on good logs, because you cannot recover sensibly if you do not know what failed and why.`
          },
          {
            title: "Why retries can help, but are not magic",
            body: `Some workflow systems support retries.
  
  For example:
  • Nextflow processes can be configured with retry-related directives such as maxRetries
  • Snakemake supports retry configuration with --retries
  
  That is useful for failures that are temporary or unstable, such as transient infrastructure or resource issues. But retries do not solve every problem. If the input is wrong or the step logic is broken, retrying the same bad step may just fail again.
  
  So the learner should understand:
  retries are useful for some failures, but not all failures are “try again” problems.
  
  That is a very important robustness lesson.`
          },
          {
            title: "What robustness means in workflow thinking",
            body: `At beginner level, robustness means the workflow is structured so that:
  • failures are easier to detect
  • failures are easier to localise to a specific step
  • successful earlier work is not needlessly repeated
  • and recovery is more manageable.
  
  That usually comes from:
  • clear steps
  • clear inputs and outputs
  • logs
  • defined dependencies
  • and sensible restart behaviour.
  
  Nextflow’s cached execution and task-level design reflect exactly this kind of robustness thinking, and Snakemake’s rule-based dependency system plus rerun controls serve a similar purpose.
  
  So the learner should understand:
  robustness is about making workflows survive problems more gracefully, not pretending problems will never happen.`
          },
          {
            title: "A toy workflow example",
            body: `Imagine a tiny workflow:
  
  Step 1
  Read variants.csv and filter it
  Output: filtered_variants.csv
  
  Step 2
  Read filtered_variants.csv and create a summary
  Output: summary.txt
  
  If Step 2 fails because of a path mistake, then:
  • Step 1 may already be valid
  • Step 2 is the real problem
  • rerunning Step 1 from scratch may not be necessary.
  
  That is restart thinking:
  • identify the failed step
  • keep successful earlier work if valid
  • fix the real failure point
  • rerun only what depends on it.
  
  So the learner should understand:
  restart thinking means following the workflow structure when recovering, not reacting randomly.`
          },
          {
            title: "What this prepares the learner for next",
            body: `This lesson is closely connected to the next module on validation, version control, and change control.
  
  Before a learner can think about validating a workflow, they need to understand:
  • where workflows fail
  • how reruns happen
  • and why robustness matters.
  
  So the learner should understand:
  failure-aware workflow thinking is one of the foundations of later safe clinical pipeline practice.
  
  That is why this lesson matters.`
          },
          {
            title: "The one-sentence takeaway",
            body: `If the learner remembers one sentence from this lesson, it should be:
  
  Robust workflow thinking means expecting some steps to fail, designing pipelines so failures are easier to detect and diagnose, and recovering by rerunning only what truly needs to be rerun rather than blindly starting everything again.
  
  That is the core lesson.`
          },
          {
            title: "Worked example",
            body: `Scenario
  
  A learner says:
  
  “The workflow failed in step 5, so I should delete everything and rerun all steps from the beginning.”
  
  Beginner question
  
  Why is that not always the best approach?
  
  Good beginner answer
  
  Because if steps 1 to 4 completed correctly, deleting everything may waste time and remove valid intermediate results. A better workflow mindset is to use logs to find out why step 5 failed, fix that specific problem, and then resume or rerun only the necessary parts of the workflow. Nextflow’s -resume feature is designed to reuse previously computed valid results from the task cache, and Snakemake includes rerun and retry-related controls for incomplete or failed jobs. So robust workflow thinking focuses on targeted recovery rather than automatic full restart.`
          },
          {
            title: "Lesson summary",
            body: `The learner has understood this lesson if they can say something like:
  
  “A workflow can fail at many points, such as missing inputs, wrong paths, environment problems, or incomplete outputs. Good workflow design makes those failures easier to see and recover from, and restart thinking means rerunning only what really needs to be rerun rather than throwing away all previous work.”`
          }
        ],
        sections: [
          {
            heading: "The central idea",
            body:
              "A robust workflow is designed with the expectation that some steps may fail, and it should make those failures easier to detect, understand, and recover from."
          }
        ],
        quiz: [
          {
            question: "What is a failure point in workflow thinking?",
            options: [
              "Only the final output file",
              "Any place where correct execution can break down",
              "A step that always succeeds",
              "A special kind of container"
            ],
            answerIndex: 1,
            explanation:
              "Failure points include missing inputs, wrong paths, environment problems, resource limits, and partial outputs. Workflow systems expose retry and rerun controls because these are normal workflow realities."
          },
          {
            question: "What is restart thinking?",
            options: [
              "Always rerun every step from scratch",
              "Ask what failed, what already succeeded, and what actually needs to be rerun",
              "Ignore logs and rerun blindly",
              "Only rerun the first step"
            ],
            answerIndex: 1,
            explanation:
              "Restart thinking is about targeted recovery, not full automatic restart. Nextflow’s resume feature and Snakemake’s rerun controls are built around that idea."
          },
          {
            question: "Why can partial outputs be dangerous?",
            options: [
              "Because files should never exist after a failure",
              "Because a file may exist even though the step did not finish correctly",
              "Because outputs cannot be reused in workflows",
              "Because workflow systems ignore files"
            ],
            answerIndex: 1,
            explanation:
              "A present file is not automatically proof of a successful, complete step. Snakemake includes incomplete-job handling for exactly this reason."
          },
          {
            question: "What is the safest overall message of this lesson?",
            options: [
              "Good workflows never fail",
              "Robust workflows expect failure, make it easier to diagnose, and support sensible recovery",
              "Retries solve every workflow problem",
              "Logs matter only when the workflow succeeds"
            ],
            answerIndex: 1,
            explanation:
              "That is the integrated lesson: robustness is about graceful handling of problems, not denial that problems happen."
          }
        ]
      },
      {
        slug: "lesson-6",
        title: "Lesson 6: How workflow thinking fits into clinical bioinformatics",
        goal:
          "By the end of this lesson, the learner should be able to answer: “Why does workflow thinking matter in clinical bioinformatics, and how does it make analysis safer, more reproducible, and easier to review?”",
        screens: [
          {
            title: "Lesson goal",
            body: `By the end of this lesson, the learner should be able to answer:
  
  “Why does workflow thinking matter in clinical bioinformatics, and how does it make analysis safer, more reproducible, and easier to review?”
  
  This lesson finishes Module 20 by tying pipeline ideas back to real clinical bioinformatics practice.
  
  The learner has now seen that a good workflow has:
  • linked steps
  • defined inputs and outputs
  • dependencies
  • reproducibility and portability goals
  • logging and provenance
  • and failure-aware restart thinking.
  
  These are not just technical preferences. They directly affect whether analyses are understandable, repeatable, and reviewable in real genomic services. Nextflow describes workflows as scalable, portable, and reproducible, CWL defines workflows around explicit inputs, outputs, and steps, and NHS England describes the National Genomic Test Directory and broader Genomic Medicine Service as part of a structured national genomics system rather than ad hoc testing.`
          },
          {
            title: "The central idea",
            body: `A good beginner summary is:
  
  Workflow thinking matters in clinical bioinformatics because clinical analysis needs to be structured, repeatable, traceable, and easier for other people to review.
  
  So the key beginner message is:
  a clinically useful pipeline is not just one that runs — it is one that can be understood, rerun, checked, and trusted.`
          },
          {
            title: "Why this matters beyond convenience",
            body: `A learner may think:
  
  “Workflow structure mainly saves time.”
  
  It can save time, but that is not the main reason it matters in clinical-style work.
  
  Workflow structure also supports:
  • consistency
  • clearer review
  • easier debugging
  • more controlled reruns
  • better traceability of what produced a result.
  
  Nextflow’s overview emphasises reproducible workflows built around explicit process inputs and outputs, and CWL requires workflows to define inputs, outputs, and steps. That is exactly the kind of structure that helps move analysis away from fragile, ad hoc command chains.
  
  So the learner should understand:
  workflow thinking is about reliability and reviewability, not just speed or convenience.`
          },
          {
            title: "Why clinical bioinformatics needs defined workflows",
            body: `Real genomic analysis is usually not one isolated command. It is a series of linked stages.
  
  GATK Best Practices describes step-by-step recommendations for high-throughput sequencing variant discovery and explains that there are several workflows tailored to different applications. NHS England describes a single mandated National Genomic Test Directory and end-to-end genomic pathways within the Genomic Medicine Service.
  
  So the learner should understand:
  clinical bioinformatics depends on defined workflows because the work is staged, interconnected, and part of a larger clinical system.
  
  That is why pipeline thinking belongs in this curriculum before validation and change control.`
          },
          {
            title: "Why reproducibility matters in clinical-style work",
            body: `If the same workflow gives different answers when rerun without a clear reason, that is a major problem.
  
  Nextflow explicitly presents reproducibility as a core workflow goal, and container-oriented documentation from Nextflow and Docker frames environments as part of making workflows predictable and portable.
  
  So the learner should understand:
  in clinical bioinformatics, reproducibility matters because a result should not depend on hidden setup differences or accidental one-off conditions.
  
  That does not mean every rerun will always be identical under every circumstance, but it does mean the workflow should be designed to behave consistently when the relevant conditions are the same.`
          },
          {
            title: "Why explicit inputs and outputs help review",
            body: `A workflow becomes easier to review when each step clearly states:
  • what it needs
  • what it produces
  • and which downstream step uses that output next.
  
  CWL’s workflow model requires explicit inputs, outputs, and steps, and describes downstream connections between step outputs and later inputs. Nextflow similarly coordinates execution from declared process inputs and outputs.
  
  So the learner should understand:
  explicit workflow structure makes analysis logic easier for another person to inspect.
  
  That is especially important when work may need to be reviewed by colleagues or revisited later.`
          },
          {
            title: "Why logging and provenance matter clinically",
            body: `A final result file by itself is often not enough.
  
  To review and trust a workflow run properly, it helps to know:
  • which run produced it
  • which task created it
  • which inputs were used
  • and what happened during execution.
  
  Nextflow’s data-lineage documentation says lineage tracks workflow runs, task executions, output files, and the links between them, and describes this as supporting integrity and reproducibility.
  
  So the learner should understand:
  logging and provenance matter because they make workflow results easier to explain and verify later.
  
  That links directly back to the earlier module on professional practice, governance, and audit-minded thinking.`
          },
          {
            title: "Why robustness matters in service workflows",
            body: `A clinical-style workflow should not be designed on the assumption that nothing will go wrong.
  
  Real runs can fail because of:
  • missing inputs
  • path problems
  • resource limits
  • bad assumptions
  • software mismatches
  • or incomplete outputs.
  
  Nextflow documents resume and task-retry behaviour, and Snakemake documents rerun and retry controls. These features exist because workflow failure is expected and needs structured recovery.
  
  So the learner should understand:
  workflow robustness matters because clinical bioinformatics needs failure-aware recovery, not random reruns and guesswork.
  
  A better workflow is one that makes it easier to detect the problem, localise it, and rerun only what truly needs rerunning.`
          },
          {
            title: "Why portability matters in modern genomics",
            body: `Workflows may need to run:
  • locally during development
  • on shared compute systems
  • or in cloud environments.
  
  Nextflow explicitly says it can deploy workflows on local machines, HPC schedulers, and cloud platforms, and CWL describes itself as portable across a variety of computing platforms.
  
  So the learner should understand:
  portability matters because clinical and research genomics workflows do not always stay in one computing environment.
  
  That is another reason environment control and workflow structure matter so much.`
          },
          {
            title: "Why this module leads naturally into validation and change control",
            body: `This module has taught the learner how to think about:
  • structured steps
  • dependencies
  • reproducibility
  • provenance
  • and robustness.
  
  The next logical question is:
  • how do you control and validate changes to that workflow safely?
  
  That is exactly the territory of the next module. GATK Best Practices’ workflow-driven approach and Nextflow’s emphasis on reproducible, portable workflows both reinforce that workflows are structured artefacts that need careful management, not casual one-off scripts.
  
  So the learner should understand:
  workflow thinking is the foundation that makes later validation and change control concepts make sense.`
          },
          {
            title: "A toy clinical-style contrast",
            body: `A weak workflow mindset is:
  • “I ran some commands and got a file.”
  
  A stronger clinical-bioinformatics workflow mindset is:
  • “This result came from a defined workflow with known inputs, known steps, known outputs, reproducible execution conditions, and traceable run records.”
  
  Nextflow’s workflow model and lineage features, along with the structured NHS genomics service context, support this second mindset much more strongly than ad hoc execution does.
  
  So the learner should understand:
  workflow thinking turns analysis from an event into a traceable process.
  
  That is one of the biggest maturity shifts in the curriculum so far.`
          },
          {
            title: "The one-sentence takeaway",
            body: `If the learner remembers one sentence from this lesson, it should be:
  
  In clinical bioinformatics, workflow thinking matters because it makes analyses more structured, reproducible, traceable, and reviewable, which supports safer reruns, clearer audit trails, and more dependable downstream use of results.
  
  That is the core lesson.`
          },
          {
            title: "Worked example",
            body: `Scenario
  
  A learner says:
  
  “As long as the pipeline produced the final file once, I do not see why the workflow structure matters much.”
  
  Beginner question
  
  Why is that incomplete?
  
  Good beginner answer
  
  Because a final file alone does not show whether the analysis was reproducible, whether the right inputs were used, whether the steps ran in the right order, or whether the result could be reviewed and rerun later. Workflow systems such as Nextflow and CWL are built around explicit steps, inputs, outputs, and reproducibility-friendly execution models precisely because those things matter. In a structured genomics service environment such as the NHS Genomic Medicine Service and Test Directory context, defined workflows fit much better than ad hoc command chains. So workflow structure matters because it helps make the result explainable and dependable, not just because it helps produce a file once.`
          },
          {
            title: "Lesson summary",
            body: `The learner has understood this lesson if they can say something like:
  
  “Workflow thinking matters because a clinical bioinformatics analysis should be more than a one-off run. It should have clear steps, clear dependencies, reproducible behaviour, useful logs and provenance, and sensible recovery when something fails. That makes the analysis easier to review, rerun, and trust.”`
          }
        ],
        sections: [
          {
            heading: "The central idea",
            body:
              "Workflow thinking matters in clinical bioinformatics because clinical analysis needs to be structured, repeatable, traceable, and easier for other people to review."
          }
        ],
        quiz: [
          {
            question: "Why does workflow thinking matter in clinical bioinformatics?",
            options: [
              "Mainly because it saves typing",
              "Because it makes analyses more structured, repeatable, and easier to review",
              "Only because cloud computing exists",
              "Only because pipelines must be large"
            ],
            answerIndex: 1,
            explanation:
              "This lesson teaches that workflow thinking supports reliability, traceability, and reviewability, not just convenience. Nextflow and CWL both emphasise structured, reproducible workflows."
          },
          {
            question: "Why are explicit inputs and outputs helpful?",
            options: [
              "Because they make steps harder to read",
              "Because they make the workflow logic clearer and show how data moves between steps",
              "Because they remove the need for provenance",
              "Because they only matter in research"
            ],
            answerIndex: 1,
            explanation:
              "CWL requires workflows to define inputs, outputs, and steps, and downstream connections between step outputs and later inputs are core to workflow structure."
          },
          {
            question: "Why do logging and provenance matter?",
            options: [
              "Because final output files are usually self-explanatory",
              "Because they help show what ran, with what inputs, and where outputs came from",
              "Because they replace the workflow itself",
              "Because they are only useful after failures"
            ],
            answerIndex: 1,
            explanation:
              "Nextflow lineage tracks workflow runs, task executions, outputs, and links between them, which makes results easier to inspect and verify."
          },
          {
            question: "What is the safest overall message of Module 20?",
            options: [
              "Pipelines are mostly long scripts with better branding",
              "Workflow thinking means structuring analyses around steps, dependencies, reproducibility, provenance, and robustness so they are easier to trust and rerun",
              "Only tool syntax matters",
              "Workflow failures should usually be handled by deleting everything and starting over"
            ],
            answerIndex: 1,
            explanation:
              "That is the integrated lesson of the module: workflows are structured, reproducible, traceable processes rather than ad hoc chains of commands."
          }
        ]
      }
    ]
  };