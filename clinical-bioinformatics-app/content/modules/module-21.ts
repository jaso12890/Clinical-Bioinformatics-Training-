export const module21 = {
    slug: "module-21",
    title: "Module 21: Validation, version control, and change control",
    description:
      "Learn what validation means for a pipeline, why Git matters for workflow history, how change control protects trusted behaviour, how to think about testing after changes, and why documentation, review, and sign-off matter in clinical-style bioinformatics.",
    lessons: [
      {
        slug: "lesson-1",
        title: "Lesson 1: What does validation mean for a pipeline?",
        goal:
          "By the end of this lesson, the learner should be able to answer: “What does it mean to validate a pipeline, and why is ‘it ran once’ not enough?”",
        screens: [
          {
            title: "Lesson goal",
            body: `By the end of this lesson, the learner should be able to answer:
  
  “What does it mean to validate a pipeline, and why is ‘it ran once’ not enough?”
  
  This lesson starts Module 21 because the learner now understands workflows, dependencies, reproducibility, provenance, and restart thinking. The next step is learning how to decide whether a workflow is actually behaving correctly for its intended purpose.
  
  FDA’s software validation guidance defines software validation as confirmation by examination and provision of objective evidence that software specifications conform to user needs and intended uses, and that implemented requirements can be consistently fulfilled. FDA’s newer Computer Software Assurance guidance says it supplements that software-validation guidance and uses a risk-based approach for establishing confidence in software used for production or quality-management purposes.`
          },
          {
            title: "The central idea",
            body: `A good beginner summary is:
  
  Validation means showing, with evidence, that a pipeline behaves as intended for its intended use.
  
  That is stronger than saying:
  • the code ran
  • the workflow finished
  • or one output file appeared.
  
  FDA’s guidance is explicit that validation is about objective evidence and intended use, not just successful execution.
  
  So the key beginner message is:
  a pipeline is not validated just because it completed once; it is validated when there is evidence that it does the right thing in the right way for the purpose it is meant to serve.`
          },
          {
            title: "What “intended use” means here",
            body: `At beginner level, intended use means:
  what the pipeline is actually supposed to do.
  
  For example, a pipeline might be intended to:
  • read a defined input format
  • apply a defined filtering logic
  • produce a defined output
  • and do so reproducibly.
  
  FDA’s software validation guidance ties validation directly to user needs and intended uses, which means validation always has to be judged against a specific purpose rather than in the abstract.
  
  So the learner should understand:
  you cannot validate a pipeline in general; you validate it against what it is supposed to be used for.
  
  That is one of the most important ideas in the whole module.`
          },
          {
            title: "Why “it ran once” is not enough",
            body: `A learner may think:
  
  “If the workflow finished and produced the final file, surely that means it works.”
  
  Not necessarily.
  
  A workflow can:
  • run to completion
  • produce a file
  • and still be wrong for its intended use.
  
  For example, it might:
  • use the wrong threshold
  • mishandle a field
  • process an unexpected input incorrectly
  • or silently change behaviour after an update.
  
  FDA’s guidance emphasizes objective evidence that requirements are fulfilled consistently, which is much stronger than a one-time successful run. The CSA guidance also frames confidence-building in software as risk-based rather than assuming that one execution is enough.
  
  So the learner should understand:
  successful execution is necessary, but it is not sufficient for validation.`
          },
          {
            title: "What kind of evidence validation needs",
            body: `At beginner level, validation evidence means things like:
  • clear expectations for what the workflow should do
  • test cases or checks
  • evidence that outputs match those expectations
  • and records showing the workflow behaved consistently.
  
  FDA’s guidance repeatedly centers validation on examination plus objective evidence, and its CSA guidance describes establishing confidence using appropriate testing activities and methods based on risk.
  
  So the learner should understand:
  validation is evidence-based, not opinion-based.
  
  It is not enough to say “the pipeline seems fine.”`
          },
          {
            title: "Why consistency matters",
            body: `A pipeline should not only behave correctly once. It should behave correctly in a repeatable way when given the same relevant conditions.
  
  That links this module back to the previous one on reproducibility. FDA’s software validation definition includes the idea that requirements can be consistently fulfilled, which means stable, repeatable behaviour matters.
  
  So the learner should understand:
  validation includes the idea of dependable repeat behaviour, not just isolated success.
  
  That is one reason workflow structure, versioning, and change control matter so much later.`
          },
          {
            title: "Validation is about the pipeline, not just the code file",
            body: `A learner might imagine validation as checking one script file. But in workflow thinking, the thing being validated is broader:
  • the workflow logic
  • the inputs it expects
  • the outputs it is supposed to generate
  • the way steps connect
  • and the conditions under which it is meant to run.
  
  FDA’s guidance applies software validation principles not only to medical-device software itself but also to software used to design, develop, or manufacture devices, which reinforces that validation concerns intended function in context, not just isolated code text.
  
  So the learner should understand:
  validation is about whether the workflow behaves correctly as a working system for its intended purpose.`
          },
          {
            title: "Why risk matters",
            body: `Not every software feature or workflow change carries the same level of risk.
  
  FDA’s 2026 CSA guidance explicitly describes a risk-based approach to establishing confidence in software and deciding where additional rigor is appropriate.
  
  So the learner should understand:
  validation is not always “test everything equally in the same way.” The level of checking should reflect how much the software matters for the intended use and how risky the consequences of error would be.
  
  That idea will become even more important in later lessons on change control and retesting.`
          },
          {
            title: "A toy example",
            body: `Imagine a tiny workflow:
  1. read variants.csv
  2. filter rows with quality >= 80
  3. write filtered_variants.csv
  
  If the intended use is:
  • keep only rows with quality 80 or higher
  
  then validation would not mean merely:
  • the script produced filtered_variants.csv
  
  It would mean having evidence that:
  • rows above the threshold are kept
  • rows below the threshold are excluded
  • the expected output matches the intended rule
  • and the behaviour is consistent when rerun under the same conditions.
  
  That matches FDA’s emphasis on intended use, objective evidence, and consistent fulfilment of requirements.
  
  So the learner should understand:
  validation asks whether the workflow did the correct thing, not just whether it did something.`
          },
          {
            title: "Why validation matters before changes happen",
            body: `This first lesson is about baseline validation: showing that the workflow behaves correctly before worrying about later edits.
  
  That sets up the rest of the module:
  • version control will track changes
  • change control will govern changes
  • testing after changes will check that trusted behaviour was not broken.
  
  Git’s official docs describe Git as a distributed revision control system for tracking changes, which is useful only because there is something meaningful and trusted to track in the first place.
  
  So the learner should understand:
  validation gives you confidence in the current behaviour of a workflow before you start talking about how to manage future changes to it.`
          },
          {
            title: "The one-sentence takeaway",
            body: `If the learner remembers one sentence from this lesson, it should be:
  
  Validation means having objective evidence that a pipeline behaves correctly and consistently for its intended use, which is why “it ran once” is only a starting point, not proof that the workflow is trustworthy.
  
  That is the core lesson.`
          },
          {
            title: "Worked example",
            body: `Scenario
  
  A learner says:
  
  “The workflow finished and made the final output file, so I think it is validated.”
  
  Beginner question
  
  Why is that too quick?
  
  Good beginner answer
  
  Because successful execution alone does not prove the workflow met its intended use. The output might still be wrong, incomplete, or inconsistent with the expected behaviour. FDA’s software validation guidance defines validation in terms of objective evidence that software conforms to user needs and intended uses and can consistently fulfil requirements. So the learner would need evidence that the workflow produced the right result for the right input conditions, not just evidence that it finished running.`
          },
          {
            title: "Lesson summary",
            body: `The learner has understood this lesson if they can say something like:
  
  “Validation means more than finishing a run. It means having evidence that the workflow does the right thing for its intended use and can keep doing that consistently under the expected conditions.”`
          }
        ],
        sections: [
          {
            heading: "The central idea",
            body:
              "Validation means showing, with evidence, that a pipeline behaves as intended for its intended use."
          }
        ],
        quiz: [
          {
            question:
              "What is the safest beginner definition of validation for a pipeline?",
            options: [
              "The workflow ran once without crashing",
              "There is objective evidence that the workflow behaves as intended for its intended use",
              "The workflow has a Git repository",
              "The workflow has more than one step"
            ],
            answerIndex: 1,
            explanation:
              "FDA’s guidance defines software validation in terms of examination, objective evidence, intended use, and consistent fulfilment of requirements."
          },
          {
            question: "Why is “it ran once” not enough?",
            options: [
              "Because workflows should never be run only once",
              "Because a successful run does not by itself prove the output is correct for the intended purpose",
              "Because validation only applies to hardware",
              "Because only Git history matters"
            ],
            answerIndex: 1,
            explanation:
              "Validation is about correct, intended behaviour backed by evidence, not just one successful execution. FDA’s CSA guidance also frames confidence-building as risk-based and evidence-driven."
          },
          {
            question: "What does intended use mean here?",
            options: [
              "The name of the workflow file",
              "What the workflow is actually supposed to do",
              "The operating system it runs on",
              "The folder where logs are stored"
            ],
            answerIndex: 1,
            explanation:
              "FDA ties validation directly to user needs and intended uses, so the workflow must be judged against its purpose."
          },
          {
            question: "What is the safest overall message of this lesson?",
            options: [
              "Validation is basically the same as a successful run",
              "Validation means showing with evidence that the pipeline performs correctly and consistently for the purpose it is meant to serve",
              "Validation only matters after version control is added",
              "Validation means every tiny detail is tested equally"
            ],
            answerIndex: 1,
            explanation:
              "That is the integrated lesson: validation is purpose-based, evidence-based, and concerned with consistent correct behaviour. FDA’s current guidance and CSA guidance both support that framing."
          }
        ]
      },
      {
        slug: "lesson-2",
        title: "Lesson 2: What is version control and why use Git?",
        goal:
          "By the end of this lesson, the learner should be able to answer: “What is version control, and why is Git useful for tracking changes to a pipeline over time?”",
        screens: [
          {
            title: "Lesson goal",
            body: `By the end of this lesson, the learner should be able to answer:
  
  “What is version control, and why is Git useful for tracking changes to a pipeline over time?”
  
  This lesson follows validation because once the learner understands that a workflow needs trustworthy behaviour for its intended use, the next question is:
  how do you keep track of changes to that workflow as it evolves?
  
  Git’s official documentation describes Git as a fast, scalable, distributed revision control system, and the official Git book defines version control as a system that records changes to files over time so you can recall specific versions later. The Git website also describes Git as free and open source.`
          },
          {
            title: "The central idea",
            body: `A good beginner summary is:
  
  Version control is a way to record the history of changes to files, and Git is a widely used version control system for doing that.
  
  So the key beginner message is:
  if a pipeline changes, version control lets you know what changed, when it changed, and which earlier version existed before that change.
  
  That is why version control matters so much for workflows.`
          },
          {
            title: "What version control is",
            body: `The official Git book says:
  version control is a system that records changes to a file or set of files over time so that you can recall specific versions later.
  
  At beginner level, that means version control helps you answer questions like:
  • what did this file look like before?
  • when did this change happen?
  • who made the change?
  • can I get back to an earlier version?
  • which version of the pipeline produced this result?
  
  So the learner should understand:
  version control is about preserving change history in a structured way, not just saving many copies of files manually.`
          },
          {
            title: "Why manual file copying is not enough",
            body: `A learner may think:
  
  “Why not just save copies like pipeline_final.py, pipeline_final2.py, and pipeline_final_really_final.py?”
  
  That can seem fine at first, but it quickly becomes messy because:
  • filenames become confusing
  • it is hard to know exactly what changed
  • it is hard to see the history clearly
  • and it is hard to connect a result back to a specific version.
  
  Version control solves that by keeping a recorded history instead of relying on filename guessing. The Git book’s explanation of version control is exactly about being able to recall specific earlier versions rather than manually duplicating files.
  
  So the learner should understand:
  manual file copying preserves copies, but version control preserves history.
  
  That is a very important distinction.`
          },
          {
            title: "What Git is",
            body: `Git’s official documentation describes Git as a distributed revision control system, and the Git site describes it as a free and open source distributed version control system designed to handle projects from small to very large.
  
  A safe beginner explanation is:
  Git is one specific version control system that tracks how files in a project change over time.
  
  So the learner should understand:
  version control is the general idea; Git is a specific tool used to do it.
  
  That is the right beginner distinction.`
          },
          {
            title: "What a repository is",
            body: `A beginner-friendly concept in Git is the repository.
  
  At beginner level, a repository is best thought of as:
  the project and its tracked history together.
  
  The official Git basics materials explain that you start by getting or creating a Git repository, and then begin tracking files and recording changes.
  
  So the learner should understand:
  a repository is not just the current files — it is the files plus the version history Git is keeping for them.
  
  That is why a repository is more useful than just a folder of scripts.`
          },
          {
            title: "What a commit is",
            body: `A very important beginner idea is the commit.
  
  At beginner level, a commit is:
  a recorded snapshot of the project at a particular point in time, along with a message describing the change.
  
  Git’s documentation groups commit with the basic snapshotting commands, and the Git book explains that Git records changes in the repository over time.
  
  So the learner should understand:
  a commit is how Git records a meaningful version of the project history.
  
  That is one of the central ideas of Git.`
          },
          {
            title: "Why commit history matters for pipelines",
            body: `A pipeline is a living artifact:
  • thresholds change
  • file handling improves
  • tools are updated
  • bugs are fixed
  • outputs may change.
  
  Git’s user manual explains that Git lets you fetch and study a project, build and test a particular version, and search for regressions.
  
  So the learner should understand:
  commit history matters because it lets you connect workflow behaviour to a specific version of the code.
  
  That is especially important once the pipeline is being validated and changed over time.`
          },
          {
            title: "Why version control helps with trust and review",
            body: `If a workflow changes but there is no clear history, then it becomes much harder to answer:
  • what changed?
  • was this change intentional?
  • which version was validated?
  • which version produced this output?
  • did a later edit introduce a new bug?
  
  Git is designed around maintaining that project history, and the official docs point users to tools for viewing commit history and comparing versions.
  
  So the learner should understand:
  version control helps make pipeline evolution traceable rather than hidden.
  
  That is a major part of why it fits so naturally with validation and change control.`
          },
          {
            title: "What “distributed” means at beginner level",
            body: `Git’s docs repeatedly describe Git as distributed.
  
  A safe beginner explanation is:
  Git keeps project history locally as well as supporting sharing, rather than making you depend on one central machine for basic history operations.
  
  The Pro Git material notes that nearly every operation is local, because the full history is available on your local disk.
  
  So the learner should understand:
  distributed means Git is built so that history and many operations are available locally, not only through a remote server.
  
  That is helpful background, even though this lesson stays conceptual.`
          },
          {
            title: "What this lesson is not trying to do",
            body: `This lesson is not trying to teach every Git command.
  
  It is only teaching the beginner meaning of:
  • version control
  • repository
  • commit
  • change history
  • why Git is relevant for pipelines.
  
  The official Git docs point new users to the tutorial, everyday commands, and the Pro Git book for deeper practical use.
  
  So the learner should understand:
  the goal here is to understand why Git matters before worrying about command syntax.
  
  That keeps the lesson aligned to the curriculum.`
          },
          {
            title: "A toy example",
            body: `Imagine a small workflow:
  • Version 1 filters records with quality >= 80
  • Version 2 changes the threshold to quality >= 90
  
  Without version control, it may be unclear:
  • which version was used for a particular run
  • when the threshold changed
  • why the output counts changed.
  
  With version control, that change can be recorded as part of the project history, so the change is traceable rather than hidden. The Git book’s definition of version control and Git’s support for viewing history are exactly what make this possible.
  
  So the learner should understand:
  version control is what lets pipeline history stay understandable when the workflow evolves.`
          },
          {
            title: "The one-sentence takeaway",
            body: `If the learner remembers one sentence from this lesson, it should be:
  
  Version control records how a project changes over time, and Git is a widely used system for doing that, which makes evolving pipelines easier to trace, review, and relate to specific historical versions.
  
  That is the core lesson.`
          },
          {
            title: "Worked example",
            body: `Scenario
  
  A learner says:
  
  “I already save copies of my script with new filenames, so I do not really need version control.”
  
  Beginner question
  
  Why is that incomplete?
  
  Good beginner answer
  
  Because saving copies gives you multiple files, but it does not give you a clear structured history of what changed between them. Version control is specifically about recording changes to files over time so that you can recall specific versions later. Git’s documentation describes it as a revision control system, and the Git book explains that version control lets you recover earlier versions and understand project history more clearly than manual copying does. So manual copies may preserve snapshots, but Git preserves a usable change history.`
          },
          {
            title: "Lesson summary",
            body: `The learner has understood this lesson if they can say something like:
  
  “Version control is a structured way to record how files change over time, and Git is a tool for doing that. For a pipeline, that matters because I need to know which version existed when, what changed, and which version produced a particular behaviour or result.”`
          }
        ],
        sections: [
          {
            heading: "The central idea",
            body:
              "Version control is a way to record the history of changes to files, and Git is a widely used version control system for doing that."
          }
        ],
        quiz: [
          {
            question: "What is version control?",
            options: [
              "A way to compress files",
              "A system that records changes to files over time so earlier versions can be recalled",
              "A file path library",
              "A workflow scheduler"
            ],
            answerIndex: 1,
            explanation:
              "The official Git book defines version control this way directly."
          },
          {
            question: "What is Git?",
            options: [
              "A database only",
              "A distributed revision control system",
              "A container runtime",
              "A programming language"
            ],
            answerIndex: 1,
            explanation:
              "Git’s official documentation describes Git as a fast, scalable, distributed revision control system."
          },
          {
            question: "What is a repository in beginner Git terms?",
            options: [
              "Only the current script file",
              "The project together with its tracked version history",
              "A file format for results",
              "A command that writes logs"
            ],
            answerIndex: 1,
            explanation:
              "Git basics materials explain that a repository is the tracked project, not just a single current file."
          },
          {
            question: "Why is version control especially useful for pipelines?",
            options: [
              "Because pipelines never change",
              "Because it helps track workflow changes and relate behaviour or outputs to a specific version",
              "Because it replaces validation",
              "Because it removes the need for testing"
            ],
            answerIndex: 1,
            explanation:
              "Git’s history features let you study particular versions and investigate regressions, which is exactly why version control matters for evolving pipelines."
          }
        ]
      },
      {
        slug: "lesson-3",
        title: "Lesson 3: What is change control?",
        goal:
          "By the end of this lesson, the learner should be able to answer: “What is change control, and why should pipeline changes be made through a deliberate, reviewable process rather than casual editing?”",
        screens: [
          {
            title: "Lesson goal",
            body: `By the end of this lesson, the learner should be able to answer:
  
  “What is change control, and why should pipeline changes be made through a deliberate, reviewable process rather than casual editing?”
  
  This lesson follows validation and version control because once the learner understands that a workflow needs trusted behaviour, and that Git can track how files change over time, the next question is:
  how should those changes be managed?
  
  FDA’s software validation guidance frames software inside quality-system thinking rather than casual editing, and FDA’s current Computer Software Assurance guidance describes a risk-based approach to establishing confidence in software used for production or quality-management purposes. Git, meanwhile, records project history through commits, which makes changes traceable over time.`
          },
          {
            title: "The central idea",
            body: `A good beginner summary is:
  
  Change control means making workflow changes in a planned, documented, and reviewable way so trusted behaviour is not accidentally broken.
  
  That is stronger than:
  • editing a script quickly
  • changing a threshold on the fly
  • or updating a tool version without recording why.
  
  FDA’s software-validation guidance emphasizes objective evidence and intended use, while the CSA guidance emphasizes a risk-based way to establish confidence in software and decide where additional rigor is appropriate.
  
  So the key beginner message is:
  change control is about protecting trusted workflow behaviour when something changes.`
          },
          {
            title: "What a “change” means here",
            body: `At beginner level, a change can mean many things, such as:
  • editing workflow logic
  • changing a filtering threshold
  • changing an input or output path
  • updating a software or container version
  • replacing one tool with another
  • modifying how results are reported.
  
  Git’s documentation explains that a repository records snapshots over time through commits, which is useful precisely because projects change. FDA’s validation guidance also makes clear that software should be considered against intended use, which means changes matter when they could alter behaviour relevant to that use.
  
  So the learner should understand:
  a change is anything that could alter how the workflow behaves, what it produces, or how confidently it can be trusted.`
          },
          {
            title: "Why casual editing is risky",
            body: `A learner may think:
  
  “It is only one small edit, so I can just change it quickly.”
  
  But even a small-looking edit can have bigger consequences than expected. A threshold change, a renamed file, or a new software version may alter outputs, break dependencies, or change behaviour in ways that are not obvious from one quick run. FDA’s software-validation guidance ties confidence in software to objective evidence and intended use, and the CSA guidance explicitly uses a risk-based approach rather than assuming every change is harmless.
  
  So the learner should understand:
  change control exists because pipeline behaviour can shift quietly when code, tools, or settings are edited casually.`
          },
          {
            title: "What change control is trying to protect",
            body: `At beginner level, change control is trying to protect things like:
  • validated behaviour
  • reproducibility
  • clarity about which version is in use
  • confidence that outputs still mean what they are supposed to mean
  • and the ability to explain why a workflow changed.
  
  Git’s official docs and book explain that commits record project history over time, and git log shows commit logs. FDA’s guidance emphasizes documented evidence and intended-use thinking. Put together, these support the idea that workflow changes should stay traceable and justifiable.
  
  So the learner should understand:
  change control protects not only the code file, but the trustworthiness of the workflow as a working system.`
          },
          {
            title: "Why not every change is equally risky",
            body: `An important beginner point is that not all changes carry the same level of risk.
  
  For example:
  • changing a comment is usually lower risk
  • changing a filtering threshold is more important
  • changing a core tool version may be even more important
  • changing logic that affects final outputs may be highly important.
  
  FDA’s current CSA guidance explicitly describes a risk-based approach to establishing confidence in software and identifying where additional rigor may be appropriate.
  
  So the learner should understand:
  change control is not “treat every edit identically.” It is about matching the amount of checking and documentation to the likely impact of the change.`
          },
          {
            title: "What a controlled change usually involves",
            body: `A safe beginner picture of a controlled change is:
  1. identify what is changing
  2. record why it is changing
  3. decide what risk or impact the change could have
  4. make the change in a traceable way
  5. test or review the changed workflow appropriately
  6. record the outcome and approval.
  
  FDA’s software-validation guidance emphasizes documented evidence, and Git supports this process by preserving snapshots and history through commits. Git’s reviewing guidance also emphasizes reviewing both the code change and the clarity of the commit message.
  
  So the learner should understand:
  change control is a process for managing a change from idea to reviewed, recorded update.`
          },
          {
            title: "How version control supports change control",
            body: `Version control and change control are related, but they are not the same.
  • Version control tracks what changed over time
  • Change control governs how and when those changes should be introduced.
  
  Git’s docs show that commit history can be viewed and studied, while Git’s user manual notes that every change in project history is represented by a commit. That makes Git extremely useful for traceability, but the decision about whether a change was appropriate still belongs to the wider controlled process.
  
  So the learner should understand:
  Git helps record and inspect changes, but change control is the broader discipline of deciding how those changes should be handled safely.`
          },
          {
            title: "Why “I can see the diff” is not enough",
            body: `A learner might think:
  
  “If Git shows me the difference, then that is all I need.”
  
  Seeing the difference is helpful, but it is not enough. A diff shows what changed, but change control also asks:
  • why was it changed?
  • what could this affect?
  • what should be retested?
  • who reviewed it?
  • is this safe to use now?
  
  FDA’s guidance focuses on objective evidence and intended use, while Git’s reviewing guidance says reviewers should check both the code change and the accuracy and clarity of the commit message.
  
  So the learner should understand:
  a visible code difference is useful, but controlled change needs context, impact thinking, and review as well.`
          },
          {
            title: "A toy example",
            body: `Imagine a tiny workflow that filters records with:
  quality >= 80
  
  A learner changes it to:
  quality >= 90
  
  That may look like one small edit, but it could:
  • reduce the number of records passing
  • change summary counts
  • affect downstream interpretation
  • and alter previously expected outputs.
  
  That is exactly why the change should not be treated as “just a quick edit.” FDA’s guidance says confidence should be tied to intended use and objective evidence, and the CSA guidance says rigor should reflect risk. Git then helps preserve the history of the threshold change as a specific versioned update.
  
  So the learner should understand:
  even small code edits can be meaningful workflow changes if they alter outputs or trusted behaviour.`
          },
          {
            title: "Why this lesson comes before retesting",
            body: `This lesson is about the governance mindset of change:
  • changes are deliberate
  • changes are traceable
  • changes are risk-aware.
  
  The next lesson will ask:
  • what should be tested after the change?
  
  That order matters, because before deciding how to test a change, the learner first needs to recognize that the change is a controlled event, not just a casual edit. FDA’s CSA guidance explicitly supports risk-based confidence-building, which naturally leads into retesting decisions.
  
  So the learner should understand:
  change control is the discipline that turns “I edited the workflow” into “I made a managed change that now needs appropriate checking.”`
          },
          {
            title: "The one-sentence takeaway",
            body: `If the learner remembers one sentence from this lesson, it should be:
  
  Change control means managing workflow changes in a documented, reviewable, risk-aware way so that trusted behaviour is not quietly altered without appropriate checking and traceability.
  
  That is the core lesson.`
          },
          {
            title: "Worked example",
            body: `Scenario
  
  A learner says:
  
  “I only changed one filtering threshold, so I do not think this really counts as a controlled change.”
  
  Beginner question
  
  Why is that too simplistic?
  
  Good beginner answer
  
  Because even one threshold change can alter workflow outputs, downstream summaries, and the overall behaviour that users were previously relying on. FDA’s guidance says software confidence should be judged against intended use and supported by objective evidence, and the CSA guidance adds that the level of rigor should reflect risk. So the size of the code edit is not the only issue — the real question is whether the change could affect trusted behaviour. Git can record the threshold change in the repository history, but change control is what makes sure that change is treated deliberately rather than casually.`
          },
          {
            title: "Lesson summary",
            body: `The learner has understood this lesson if they can say something like:
  
  “A change to a pipeline should not just be something I edit and forget. It should be tracked, described, considered for impact, and handled in a deliberate way so that trusted behaviour is not broken without anyone noticing.”`
          }
        ],
        sections: [
          {
            heading: "The central idea",
            body:
              "Change control means making workflow changes in a planned, documented, and reviewable way so trusted behaviour is not accidentally broken."
          }
        ],
        quiz: [
          {
            question:
              "What is the safest beginner definition of change control?",
            options: [
              "A way to hide workflow edits",
              "A deliberate, documented, reviewable way to manage workflow changes",
              "A Git command only",
              "A method for deleting old versions"
            ],
            answerIndex: 1,
            explanation:
              "This lesson defines change control as managing changes so trusted behaviour is not altered casually or invisibly. FDA’s guidance supports documented, evidence-based software management."
          },
          {
            question: "Why is casual editing risky in a pipeline?",
            options: [
              "Because all edits are equally dangerous",
              "Because even small edits can change workflow behaviour or outputs without obvious warning",
              "Because Git cannot track small edits",
              "Because pipelines should never change"
            ],
            answerIndex: 1,
            explanation:
              "A small-looking change can still affect intended behaviour. FDA’s CSA guidance explicitly encourages risk-based thinking rather than assuming every edit is harmless."
          },
          {
            question:
              "How are version control and change control related?",
            options: [
              "They are exactly the same thing",
              "Version control records changes, while change control governs how those changes should be introduced and reviewed",
              "Change control replaces Git",
              "Version control only matters after validation is finished forever"
            ],
            answerIndex: 1,
            explanation:
              "Git provides the change history, but change control is the broader controlled process around making and approving changes safely."
          },
          {
            question: "What is the safest overall message of this lesson?",
            options: [
              "Every edit should be treated casually unless the script crashes",
              "Workflow changes should be managed in a traceable, risk-aware process rather than as undocumented quick edits",
              "Only large code rewrites count as real changes",
              "Seeing the code diff is always enough on its own"
            ],
            answerIndex: 1,
            explanation:
              "That is the integrated lesson: change control protects trusted behaviour by making changes documented, reviewable, and proportionate to their likely impact."
          }
        ]
      },
      {
        slug: "lesson-4",
        title: "Lesson 4: Testing after changes",
        goal:
          "By the end of this lesson, the learner should be able to answer: “After changing a pipeline, what should be tested, and why is one quick rerun usually not enough?”",
        screens: [
          {
            title: "Lesson goal",
            body: `By the end of this lesson, the learner should be able to answer:
  
  “After changing a pipeline, what should be tested, and why is one quick rerun usually not enough?”
  
  This lesson follows change control because once the learner understands that workflow edits should be deliberate and reviewable, the next practical question is:
  how do you check that the changed workflow still behaves correctly?
  
  FDA’s software validation guidance centers software confidence on objective evidence that requirements are met for intended use, and FDA’s current Computer Software Assurance guidance recommends a risk-based approach using appropriate testing activities to establish confidence in software used for production or quality-management purposes. Git’s user manual also highlights using project history to study specific versions and search regressions.`
          },
          {
            title: "The central idea",
            body: `A good beginner summary is:
  
  After a workflow changes, you should test enough to show that the change works as intended and that trusted previous behaviour has not been quietly broken.
  
  So the key beginner message is:
  testing after changes is not only “did the new thing work?” It is also “did the old trusted behaviour still survive?”
  
  That is the core mindset of this lesson.`
          },
          {
            title: "Why one rerun is not enough",
            body: `A learner may think:
  
  “I changed the pipeline, ran it once, and it finished. That should be enough.”
  
  Not necessarily.
  
  A single rerun may show that:
  • the pipeline still executes
  • and the change did not cause an immediate crash.
  
  But it may not show that:
  • the changed logic is correct
  • outputs still match expectations
  • edge cases still behave properly
  • or old behaviour was not accidentally altered.
  
  FDA’s validation guidance defines confidence in terms of objective evidence and consistent fulfilment of requirements, and the CSA guidance explicitly frames software assurance as a risk-based exercise rather than a one-run check.
  
  So the learner should understand:
  successful execution after a change is useful evidence, but it is not complete testing by itself.`
          },
          {
            title: "What testing after a change is trying to answer",
            body: `At beginner level, post-change testing is trying to answer three simple questions:
  1. Did the intended change work?
  2. Did anything trusted break elsewhere?
  3. Is there enough evidence that the changed workflow is still suitable for its intended use?
  
  FDA’s validation guidance is built around intended use and objective evidence, and the CSA guidance emphasises choosing appropriate testing activities based on risk.
  
  So the learner should understand:
  testing after changes is about confidence, not just execution.`
          },
          {
            title: "What a smoke test is",
            body: `A useful beginner concept is the smoke test.
  
  A safe beginner explanation is:
  a smoke test is a quick check that the workflow can still run through its main path without immediately failing.
  
  For example, after a change, a smoke test might check that:
  • the workflow starts
  • key steps still run
  • expected output files are still produced
  • obvious crashes or path errors are absent.
  
  So the learner should understand:
  a smoke test is a fast first check, not the whole testing story.
  
  It helps answer:
  • does the changed workflow still basically run?
  
  But not necessarily:
  • is every important behaviour still correct?`
          },
          {
            title: "Why smoke tests are useful but limited",
            body: `Smoke tests are useful because they are fast and can catch:
  • broken file paths
  • missing arguments
  • syntax mistakes
  • major workflow breakage.
  
  But smoke tests are limited because they may not catch:
  • subtle logic errors
  • changed thresholds affecting outputs
  • incorrect handling of unusual inputs
  • or silent changes in downstream behaviour.
  
  That is exactly why FDA’s CSA guidance uses a risk-based model of confidence building rather than assuming one standard check is always enough.
  
  So the learner should understand:
  a smoke test tells you the workflow still runs; it does not necessarily tell you the workflow still behaves correctly in all the ways that matter.`
          },
          {
            title: "What regression-style thinking means",
            body: `A very important beginner idea is regression.
  
  A safe explanation is:
  a regression is when a change breaks something that used to work correctly before.
  
  Git’s user manual explicitly mentions using project history to search for regressions, which makes it a very good anchor for this idea.
  
  So the learner should understand:
  post-change testing should not only check the new feature or fix — it should also check that old trusted behaviour did not regress.
  
  That is one of the most important lessons in this module.`
          },
          {
            title: "Why risk affects how much testing is needed",
            body: `Not every workflow change needs exactly the same depth of retesting.
  
  For example:
  • changing a comment is low risk
  • changing a log message is usually low risk
  • changing a filtering threshold is more important
  • changing a core tool version may be more important still
  • changing how a final reported result is produced may be especially important.
  
  FDA’s CSA guidance explicitly recommends a risk-based approach to determining where additional rigor is appropriate.
  
  So the learner should understand:
  the amount of testing after a change should reflect how likely the change is to affect trusted behaviour and how serious the consequences of error would be.
  
  That is the practical meaning of risk-based retesting.`
          },
          {
            title: "What kinds of things might need checking after a change",
            body: `A safe beginner list of post-change checks includes:
  • does the workflow still run?
  • do the expected outputs still appear?
  • do changed outputs now match the intended new behaviour?
  • do unchanged parts of the workflow still behave as before?
  • do logs and provenance still look sensible?
  • are filenames, paths, and downstream dependencies still correct?
  
  FDA’s validation guidance emphasizes objective evidence that software requirements are fulfilled, and Git’s user manual’s focus on version history and regression analysis fits naturally with this retesting mindset.
  
  So the learner should understand:
  testing after a change often means checking both the changed area and the neighbouring trusted behaviours that could have been affected.`
          },
          {
            title: "A toy example",
            body: `Imagine a tiny workflow that used to keep rows with:
  quality >= 80
  
  and is changed to:
  quality >= 90
  
  A weak post-change check would be:
  • run once
  • see that an output file appeared
  • stop there.
  
  A stronger post-change check would ask:
  • did rows with quality 95 still pass?
  • did rows with quality 85 now fail as intended?
  • did summary counts change in the expected direction?
  • did downstream outputs still generate correctly?
  
  That is much closer to the kind of objective evidence FDA guidance is talking about.
  
  So the learner should understand:
  good retesting compares observed behaviour to expected behaviour after the change.`
          },
          {
            title: "Why comparing versions matters",
            body: `Version control helps here because post-change testing is easier to reason about when you know:
  • what the old version did
  • what the new version changed
  • and what behaviour should now differ or stay the same.
  
  Git’s user manual says Git can be used to study particular versions and search regressions.
  
  So the learner should understand:
  version history helps make retesting more precise, because you can compare the changed workflow to a known earlier state rather than testing in the dark.
  
  That is one of the reasons version control fits so naturally with validation and change control.`
          },
          {
            title: "Why documentation of testing matters",
            body: `Testing only helps if there is a usable record of what was checked and what was observed.
  
  FDA’s software validation guidance centers confidence on documented, objective evidence, not just informal confidence.
  
  So the learner should understand:
  post-change testing should not only be done — it should also be recorded clearly enough that someone else can understand what confidence was actually established.
  
  That connects directly to the next lesson on documentation, review, and sign-off.`
          },
          {
            title: "The one-sentence takeaway",
            body: `If the learner remembers one sentence from this lesson, it should be:
  
  After a workflow change, testing should show both that the intended new behaviour works and that previously trusted behaviour has not regressed, with the depth of testing guided by the likely impact and risk of the change.
  
  That is the core lesson.`
          },
          {
            title: "Worked example",
            body: `Scenario
  
  A learner says:
  
  “I changed the threshold from 80 to 90, reran the workflow once, and it made the final file, so I think the testing is done.”
  
  Beginner question
  
  Why is that too quick?
  
  Good beginner answer
  
  Because that run mainly shows the workflow still executes. It does not yet show whether the threshold change behaved correctly for all relevant cases or whether any previously trusted behaviour was broken. Stronger post-change testing would check that values above 90 still pass, values between 80 and 89 now fail as intended, and downstream outputs changed in the expected way rather than unexpectedly. FDA’s guidance frames software confidence around objective evidence and intended use, and the CSA guidance says the rigor of testing should reflect risk. So one rerun is useful, but it is only the start of post-change testing, not the whole job.`
          },
          {
            title: "Lesson summary",
            body: `The learner has understood this lesson if they can say something like:
  
  “After a workflow change, I should not only check that the pipeline still runs. I should also check that the changed part behaves as intended and that trusted older behaviour has not regressed, with the amount of retesting depending on how important and risky the change is.”`
          }
        ],
        sections: [
          {
            heading: "The central idea",
            body:
              "After a workflow changes, you should test enough to show that the change works as intended and that trusted previous behaviour has not been quietly broken."
          }
        ],
        quiz: [
          {
            question:
              "What is the safest beginner description of testing after a workflow change?",
            options: [
              "Run it once and stop if it finishes",
              "Check that the intended change works and that previously trusted behaviour was not quietly broken",
              "Avoid rerunning because changes are tracked in Git",
              "Only test if the workflow crashes"
            ],
            answerIndex: 1,
            explanation:
              "This is the central lesson: post-change testing checks both the intended change and the absence of harmful regressions. FDA’s validation and CSA guidance support this evidence-based, risk-based view."
          },
          {
            question: "What is a smoke test?",
            options: [
              "A complete proof that every behaviour is correct",
              "A quick check that the workflow still runs through its main path without obvious failure",
              "A version control commit message",
              "A type of container image"
            ],
            answerIndex: 1,
            explanation:
              "A smoke test is a quick first check for major breakage, but it is not the same as complete retesting."
          },
          {
            question: "What is a regression?",
            options: [
              "A new feature added after testing",
              "Something that used to work correctly but is broken by a later change",
              "A file path problem only",
              "A type of log file"
            ],
            answerIndex: 1,
            explanation:
              "Git’s user manual explicitly mentions using history to search for regressions, which is why regression-style thinking fits naturally with versioned workflows."
          },
          {
            question: "What is the safest overall message of this lesson?",
            options: [
              "Every change needs exactly the same testing",
              "Testing after changes should be risk-aware and should check both the changed behaviour and the trusted behaviour around it",
              "Smoke tests replace all other checks",
              "Git history makes testing unnecessary"
            ],
            answerIndex: 1,
            explanation:
              "That is the integrated lesson: post-change testing is risk-based and should confirm both intended changes and absence of harmful regressions."
          }
        ]
      },
      {
        slug: "lesson-5",
        title: "Lesson 5: Documentation, review, and sign-off",
        goal:
          "By the end of this lesson, the learner should be able to answer: “Why should workflow changes be documented, reviewed, and approved rather than just edited and used immediately?”",
        screens: [
          {
            title: "Lesson goal",
            body: `By the end of this lesson, the learner should be able to answer:
  
  “Why should workflow changes be documented, reviewed, and approved rather than just edited and used immediately?”
  
  This lesson follows testing after changes because once the learner understands that a changed pipeline should be retested, the next question is:
  how do you make that testing and that change visible to other people in a usable way?
  
  FDA’s software-validation guidance centers confidence on documented, objective evidence tied to intended use, and FDA’s 2026 Computer Software Assurance guidance describes a risk-based approach for establishing confidence in software used for production or quality-management purposes. Git’s official materials also emphasize commit history and commit logs as the project’s recorded change history.`
          },
          {
            title: "The central idea",
            body: `A good beginner summary is:
  
  Documentation, review, and sign-off make workflow changes understandable, checkable, and accountable.
  
  So the key beginner message is:
  it is not enough that a change was made and tested; other people should be able to understand what changed, why it changed, what was checked, and whether it was accepted for use.
  
  That is the main point of this lesson.`
          },
          {
            title: "Why documentation matters",
            body: `A learner may think:
  
  “I know what I changed, so that should be enough.”
  
  But workflow changes often need to be understood later by:
  • your future self
  • a teammate
  • a reviewer
  • or someone investigating an unexpected result.
  
  FDA’s guidance repeatedly emphasizes documented evidence, not just personal confidence, and Git’s commit history is useful precisely because it preserves a readable record of project changes over time.
  
  So the learner should understand:
  documentation matters because trusted workflow behaviour should not depend on one person’s memory.`
          },
          {
            title: "What should be documented about a change",
            body: `At beginner level, a useful change record should make clear:
  • what changed
  • why it changed
  • what risk or impact was expected
  • what testing was done
  • what the outcome of testing was
  • and which version of the workflow now contains that change.
  
  FDA’s software-validation guidance ties confidence to intended use and objective evidence, while Git’s user manual and git log documentation show that Git records project history as commits and exposes that history through commit logs.
  
  So the learner should understand:
  good documentation is not just a technical diff; it includes the reason, the checking, and the result.`
          },
          {
            title: "Why commit history helps but is not the whole story",
            body: `Git is very useful here, because commits provide traceable project history.
  
  Git’s user manual says Git stores the history as interrelated snapshots of the project’s contents, and each such version is called a commit. The git log docs say commit logs show the commits in the repository.
  
  But a commit alone is not always enough if the message is vague or if no one recorded:
  • why the change was needed
  • what tests were run
  • or whether the change was reviewed and accepted.
  
  So the learner should understand:
  Git gives you traceable history, but useful workflow documentation still needs clear explanations around that history.`
          },
          {
            title: "Why review matters",
            body: `A very important beginner point is that review is not just a formality.
  
  A review helps answer questions like:
  • does the change make sense?
  • is the code diff actually doing what the author thinks it is doing?
  • were the right tests run?
  • does the documented reason match the actual edit?
  
  Git’s reviewing guidance explicitly says reviewers should check the code itself, the clarity of the commit message, and whether the change makes sense.
  
  So the learner should understand:
  review matters because the person making the change is not always the best person to detect its problems.
  
  That is one of the main reasons review strengthens trust.`
          },
          {
            title: "Why sign-off matters",
            body: `A beginner-safe explanation of sign-off is:
  a clear indication that the change and its supporting evidence were accepted for use by the appropriate person or process.
  
  This matters because without sign-off, a workflow change can drift into use without a clear moment of approval. FDA’s guidance is built around documented evidence and quality-system thinking rather than informal “looks fine to me” behaviour. The CSA guidance also frames confidence-building as a controlled, risk-based activity rather than casual editing.
  
  So the learner should understand:
  sign-off matters because it turns a tested, reviewed change into an accepted change.
  
  That is the final step in controlled introduction of a workflow update.`
          },
          {
            title: "Why documentation should include testing evidence",
            body: `A learner might think:
  
  “I ran some tests, so I’m done.”
  
  But if there is no usable record of:
  • what tests were run
  • what inputs were used
  • what was expected
  • and what was observed
  
  then the testing is much harder for anyone else to inspect.
  
  FDA’s software-validation guidance centers confidence on objective evidence, and the CSA guidance reinforces a risk-based approach to the testing activities used to establish software confidence.
  
  So the learner should understand:
  testing evidence should be documented well enough that another person can see what confidence was actually established.
  
  That is the connection between this lesson and the previous lesson.`
          },
          {
            title: "What weak documentation looks like",
            body: `Weak change documentation often sounds like:
  • “minor update”
  • “fixed stuff”
  • “cleaned pipeline”
  • “new version”
  • “tested OK”
  
  These are weak because they do not answer:
  • what changed?
  • why?
  • what was tested?
  • what risk did it affect?
  
  Git’s change history is most useful when commit logs are meaningful, and review guidance also emphasizes clarity of the commit message.
  
  So the learner should understand:
  a vague history is only slightly better than no history.
  
  That is why clear documentation style matters.`
          },
          {
            title: "What stronger documentation looks like",
            body: `A stronger record would sound more like:
  • changed filtering threshold from 80 to 90
  • reason: align workflow with updated intended filtering rule
  • expected effect: fewer rows pass threshold
  • testing: smoke test plus comparison on known sample table
  • observed result: rows 90 and above retained, 80–89 excluded as intended
  • review: checked by colleague
  • sign-off: approved for use in next controlled run.
  
  That style fits FDA’s emphasis on documented, objective evidence and Git’s role as a structured history of changes.
  
  So the learner should understand:
  strong documentation explains the change, the reason, the evidence, and the approval status.`
          },
          {
            title: "Why this matters for evolving pipelines",
            body: `Pipelines are living artifacts:
  • thresholds change
  • tools are updated
  • bugs are fixed
  • file paths are cleaned up
  • outputs may be reformatted.
  
  Git’s documentation and tutorial are built around the idea that projects evolve through recorded changes, and FDA’s guidance says confidence must be tied to intended use and documented evidence.
  
  So the learner should understand:
  documentation, review, and sign-off are what stop an evolving pipeline from becoming an undocumented chain of guesses.
  
  That is why this lesson matters before the module’s final clinical-practice bridge.`
          },
          {
            title: "A toy example",
            body: `Imagine a workflow change:
  • threshold changes from 80 to 90
  
  A weak record would be:
  • “updated filter”
  
  A stronger record would be:
  • “changed quality threshold from 80 to 90 to match updated intended filtering rule; reran smoke test and sample comparison; outputs changed as expected; reviewed and approved.”
  
  The second version is much more useful later because it explains:
  • what changed
  • why it changed
  • what was checked
  • and whether it was accepted.
  
  So the learner should understand:
  good documentation turns a change from an event into a traceable decision.`
          },
          {
            title: "The one-sentence takeaway",
            body: `If the learner remembers one sentence from this lesson, it should be:
  
  Documentation, review, and sign-off matter because workflow changes should leave a clear record of what changed, why it changed, what evidence supports it, and whether it was accepted for use.
  
  That is the core lesson.`
          },
          {
            title: "Worked example",
            body: `Scenario
  
  A learner says:
  
  “I changed the workflow, ran a couple of checks, and committed it, so I do not think I need to write anything else down.”
  
  Beginner question
  
  Why is that incomplete?
  
  Good beginner answer
  
  Because the commit history records that a change happened, but it may not clearly explain the reason for the change, what risk it could affect, what was actually tested, or whether someone reviewed and accepted it for use. Git stores project history as commits and exposes that history through commit logs, but FDA’s validation guidance emphasizes documented objective evidence tied to intended use, not just silent history. A better controlled record would explain what changed, why, what testing was done, what happened in those tests, and whether the updated workflow was reviewed and signed off. That is what turns a commit into a usable piece of workflow evidence rather than just a timestamped edit.`
          },
          {
            title: "Lesson summary",
            body: `The learner has understood this lesson if they can say something like:
  
  “A workflow change should leave more than just an edited file. It should leave a clear record of what changed, why it changed, what was tested, and whether someone reviewed and accepted it for use.”`
          }
        ],
        sections: [
          {
            heading: "The central idea",
            body:
              "Documentation, review, and sign-off make workflow changes understandable, checkable, and accountable."
          }
        ],
        quiz: [
          {
            question:
              "What is the safest beginner reason to document a workflow change?",
            options: [
              "To make the repository larger",
              "To preserve a clear record of what changed, why, and what evidence supports it",
              "To avoid using Git",
              "To prevent all future changes forever"
            ],
            answerIndex: 1,
            explanation:
              "FDA’s guidance emphasizes documented objective evidence, and Git history is most useful when the recorded change is understandable."
          },
          {
            question: "Why is review useful after a workflow change?",
            options: [
              "Because the author always overlooks everything",
              "Because another person can check whether the change, its explanation, and its testing make sense",
              "Because review replaces testing",
              "Because Git cannot store commits without a reviewer"
            ],
            answerIndex: 1,
            explanation:
              "Git’s review guidance emphasizes checking both the code change and the clarity of its explanation."
          },
          {
            question: "What is the safest beginner meaning of sign-off?",
            options: [
              "Deleting the previous version",
              "A clear indication that the change and its supporting evidence were accepted for use",
              "A type of Git branch",
              "A way to bypass review"
            ],
            answerIndex: 1,
            explanation:
              "Sign-off is the step that turns a reviewed, tested change into an accepted change in a controlled process, which aligns with FDA’s documented-evidence and quality-system framing."
          },
          {
            question: "What is the safest overall message of this lesson?",
            options: [
              "A commit alone is always enough documentation",
              "Workflow changes should be documented clearly, reviewed appropriately, and accepted explicitly rather than just edited and used",
              "Documentation matters only if the workflow fails",
              "Sign-off is mainly about formatting commit messages"
            ],
            answerIndex: 1,
            explanation:
              "That is the integrated lesson: useful workflow evidence includes the change, the reason, the testing, the review, and the approval status."
          }
        ]
      },
      {
        slug: "lesson-6",
        title: "Lesson 6: How validation, version control, and change control fit into clinical bioinformatics",
        goal:
          "By the end of this lesson, the learner should be able to answer: “Why do validation, version control, and change control matter in clinical bioinformatics, and how do they help keep evolving pipelines safe and trustworthy?”",
        screens: [
          {
            title: "Lesson goal",
            body: `By the end of this lesson, the learner should be able to answer:
  
  “Why do validation, version control, and change control matter in clinical bioinformatics, and how do they help keep evolving pipelines safe and trustworthy?”
  
  This lesson finishes Module 21 by tying the whole module back to real clinical-style workflow practice.
  
  The learner has now seen that:
  • a pipeline should be validated for its intended use
  • Git can track how the workflow changes over time
  • changes should be handled through change control
  • changed workflows need appropriate retesting
  • and useful evidence should be documented, reviewed, and signed off.
  
  These ideas matter because clinical-style genomics work sits inside a structured service environment, not a casual “edit and rerun” environment. NHS England describes the NHS Genomic Medicine Service as a national genomics infrastructure with a single mandated National Genomic Test Directory, and FDA guidance defines software validation in terms of objective evidence tied to user needs and intended uses. Git’s official documentation describes Git as a distributed revision control system for tracking project history.`
          },
          {
            title: "The central idea",
            body: `A good beginner summary is:
  
  Validation, version control, and change control work together to keep a pipeline trustworthy as it evolves.
  
  So the key beginner message is:
  a clinically useful pipeline is not just one that works today — it is one whose current behaviour is understood, whose history is traceable, and whose future changes are managed safely.
  
  That is the main lesson of this module.`
          },
          {
            title: "Why validation matters in clinical-style workflow use",
            body: `Module 21 began with validation because a workflow first needs confidence in its current behaviour.
  
  FDA’s software validation guidance says validation is confirmation by examination and objective evidence that software specifications conform to user needs and intended uses, and that the implemented requirements can be consistently fulfilled. That means the question is not only:
  • did it run?
  
  It is also:
  • did it do the right thing for the purpose it is meant to serve?
  
  So the learner should understand:
  validation matters because a pipeline should not be trusted only because it produced a file; it should be trusted because there is evidence it behaves correctly for its intended use.`
          },
          {
            title: "Why version control matters in clinical-style workflow use",
            body: `A validated workflow does not stay frozen forever. It changes.
  
  Git’s official documentation describes Git as a fast, scalable, distributed revision control system, and the official Git book defines version control as recording changes to files over time so that specific earlier versions can be recalled later. The Git user manual also says Git can be used to study a particular version and search regressions.
  
  So the learner should understand:
  version control matters because once a pipeline evolves, you need to know which version existed when, what changed, and which version produced a particular behaviour or output.
  
  That is what makes pipeline history usable rather than vague.`
          },
          {
            title: "Why change control matters in clinical-style workflow use",
            body: `If workflows change casually, then previously trusted behaviour can be altered quietly.
  
  FDA’s current Computer Software Assurance guidance says it applies a risk-based approach to software validation for production or quality-management system software, and specifically discusses risk considerations, testing methods, and efficient evidence generation. That supports the idea that not every change is equal, but changes that can affect trusted behaviour need managed handling rather than casual editing.
  
  So the learner should understand:
  change control matters because workflow edits can alter outputs, dependencies, or interpretation-relevant behaviour, and those effects should be managed deliberately rather than left invisible.
  
  That is why change control belongs next to validation rather than somewhere separate.`
          },
          {
            title: "Why these three ideas belong together",
            body: `These are not three isolated concepts.
  
  A safe way to connect them is:
  • validation asks whether the current workflow behaviour is fit for its intended use
  • version control records how that workflow changes over time
  • change control governs how those changes are introduced, checked, and accepted.
  
  Git gives the history, FDA guidance gives the intended-use and evidence mindset, and the NHS genomics service context gives the structured service setting in which this matters.
  
  So the learner should understand:
  these three ideas belong together because pipelines are living but controlled artefacts.
  
  That is one of the most important conceptual bridges in the whole curriculum.`
          },
          {
            title: "Why “the pipeline runs” is not enough in practice",
            body: `A learner may think:
  
  “As long as the current version runs, the rest seems like extra process.”
  
  But that is too narrow.
  
  A pipeline could:
  • run successfully
  • still be wrong for intended use
  • have changed since its last trusted version
  • or have been edited without a clear record of what changed and why.
  
  FDA’s guidance centers trust on documented objective evidence and intended use, not only execution success. Git’s history tools exist because project evolution matters.
  
  So the learner should understand:
  for clinical-style workflow use, trustworthy behaviour depends on evidence, history, and controlled change — not just current execution success.`
          },
          {
            title: "Why documentation, review, and sign-off matter here",
            body: `Module 21 also taught that changes should leave usable evidence:
  • what changed
  • why it changed
  • what was tested
  • and whether it was accepted.
  
  FDA’s software validation guidance emphasizes documented evidence, and Git’s change history is most useful when paired with clear recorded meaning.
  
  So the learner should understand:
  documentation, review, and sign-off are what turn code changes into accountable workflow changes.
  
  That is especially important once a workflow is used by more than one person or across more than one run.`
          },
          {
            title: "Why this matters in the NHS genomics context",
            body: `NHS England describes the NHS Genomic Medicine Service as a national infrastructure and highlights the single mandated National Genomic Test Directory. It also describes genomic laboratory hubs as part of the national testing service.
  
  That kind of structured service context fits much better with:
  • defined workflow behaviour
  • traceable workflow versions
  • controlled workflow changes
  • and evidence-backed updates
  
  than with informal, undocumented editing.
  
  So the learner should understand:
  in a structured genomics service, workflow trust needs to survive beyond one person’s memory or one successful run.
  
  That is exactly what validation, version control, and change control help support.`
          },
          {
            title: "Why this module prepares the learner for safer autonomy",
            body: `This module is a bridge toward later safe-autonomous-working ideas.
  
  A learner who understands Module 21 is much better prepared to think:
  • not just “can I edit the workflow?”
  • but “what will this change affect?”
  • “how will I prove it still behaves correctly?”
  • “how will others know what changed?”
  • and “what evidence supports using this updated version?”
  
  FDA’s current guidance supports objective evidence and risk-based software confidence, while Git supports traceable project history.
  
  So the learner should understand:
  this module is really about moving from ad hoc pipeline editing toward controlled, reviewable stewardship of a workflow.
  
  That is a major maturity step.`
          },
          {
            title: "A useful beginner contrast",
            body: `A weak workflow mindset is:
  • “I changed the script and it still runs.”
  
  A stronger clinical-bioinformatics mindset is:
  • “This workflow version has a traceable history, the change was documented, the relevant behaviour was retested for intended use, and the updated version was reviewed before use.”
  
  That second mindset is much more consistent with FDA’s evidence-based software assurance framing and with the structured NHS genomics service context.
  
  So the learner should understand:
  Module 21 is teaching stewardship of workflows, not just editing of workflows.`
          },
          {
            title: "The one-sentence takeaway",
            body: `If the learner remembers one sentence from this lesson, it should be:
  
  In clinical bioinformatics, validation, version control, and change control fit together because pipelines must not only work, but also remain evidence-backed, historically traceable, and safely updated over time.
  
  That is the core lesson.`
          },
          {
            title: "Worked example",
            body: `Scenario
  
  A learner says:
  
  “We validated the pipeline once last year, so I do not think the recent threshold and tool-version updates really need all this version control and change documentation.”
  
  Beginner question
  
  Why is that incomplete?
  
  Good beginner answer
  
  Because validation of one earlier version does not automatically transfer unchanged to every later version. If thresholds or tool versions changed, then the workflow behaviour may also have changed, and that means the updated version needs traceable history, appropriate retesting, and controlled evidence for its current intended use. FDA’s software validation guidance defines confidence in terms of objective evidence and intended use, while the CSA guidance adds risk-based thinking for software changes. Git’s official documentation describes Git as a revision control system precisely because projects evolve over time and that evolution needs to be tracked. So a previously validated workflow is valuable, but later changes still need controlled handling if the pipeline is to remain trustworthy.`
          },
          {
            title: "Lesson summary",
            body: `The learner has understood this lesson if they can say something like:
  
  “A pipeline used in clinical-style work should not just be edited whenever needed. Its current behaviour should be evidence-backed for intended use, its history should be traceable in version control, and its changes should be documented, tested, reviewed, and accepted in a controlled way.”`
          }
        ],
        sections: [
          {
            heading: "The central idea",
            body:
              "Validation, version control, and change control work together to keep a pipeline trustworthy as it evolves."
          }
        ],
        quiz: [
          {
            question:
              "Why do validation, version control, and change control belong together?",
            options: [
              "Because they are three names for the same thing",
              "Because validation establishes trusted behaviour, version control records how that behaviour changes over time, and change control governs how changes are introduced safely",
              "Because Git replaces validation",
              "Because change control only matters after sign-off"
            ],
            answerIndex: 1,
            explanation:
              "That is the integrated logic of the module: confidence in current behaviour, traceable history, and controlled change all support trustworthy workflow use."
          },
          {
            question:
              "Why is “the current pipeline runs” not enough on its own?",
            options: [
              "Because pipelines should never run",
              "Because a successful run does not by itself prove intended-use correctness, traceable history, or safe handling of recent changes",
              "Because Git history automatically checks correctness",
              "Because NHS workflows do not use software"
            ],
            answerIndex: 1,
            explanation:
              "FDA guidance ties trust to objective evidence and intended use, not only execution success, and Git is for history rather than proof of correctness."
          },
          {
            question:
              "Why is version control particularly useful after a pipeline changes?",
            options: [
              "Because it prevents all bugs",
              "Because it makes it possible to see what changed, when it changed, and which version existed before",
              "Because it replaces review",
              "Because it automatically validates the workflow"
            ],
            answerIndex: 1,
            explanation:
              "The Git book defines version control as recording changes over time so specific versions can be recalled later, and the user manual highlights studying particular versions and regressions."
          },
          {
            question: "What is the safest overall message of Module 21?",
            options: [
              "Once a workflow has been validated once, later edits are mostly administrative",
              "Evolving clinical-style pipelines should be validated for intended use, tracked through version history, and updated through documented, risk-aware change processes",
              "Git alone is enough to keep a pipeline safe",
              "Documentation only matters after failures"
            ],
            answerIndex: 1,
            explanation:
              "That is the integrated lesson: safe workflow evolution depends on evidence, traceability, and controlled updates rather than casual editing."
          }
        ]
      }
    ]
  };