export const module20MiniCase = {
    title: "Module 20 Mini Case: A workflow failed, but what actually needs to happen next?",
    description:
      "Apply the core Module 20 ideas to a small workflow failure scenario: linked steps, dependencies, outputs becoming later inputs, logs, and targeted recovery instead of blind reruns.",
    introSections: [
      {
        title: "Mini case overview",
        body:
          "This mini case is designed to feel like a real workflow-reasoning exercise rather than a memory test.\n\nThe learner is not being asked to write a full Nextflow or Snakemake pipeline.\n\nInstead, they are being asked to apply the main ideas from Module 20:\n• pipelines are made of linked steps\n• outputs from one step become inputs to later steps\n• dependencies control workflow order\n• reproducibility depends on code, inputs, and environment\n• logs and provenance help explain what happened\n• robust workflows should support sensible recovery rather than blind reruns."
      }
    ],
    caseScenario: {
      title: "Case scenario",
      body:
        "A learner describes a small toy pipeline like this:\n\nStep 1\nInput: variants.csv\nOutput: filtered_variants.csv\n\nStep 2\nInput: filtered_variants.csv\nOutput: summary.txt\n\nStep 3\nInput: summary.txt\nOutput: final report\n\nThe workflow is run once.\n• Step 1 finishes successfully\n• Step 2 fails because the workflow is looking for filtered_variant.csv instead of filtered_variants.csv\n• Step 3 never runs\n\nThe learner says:\n“The whole workflow failed, so I should probably delete everything and rerun every step from the beginning.”\n\nA senior colleague replies:\n“Not necessarily. Think about dependencies, logs, and what has already succeeded.”\n\nThe learner’s task is to explain why the colleague is right."
    },
    learnerTask: {
      title: "Learner task",
      body: "Read the case and answer the questions below."
    },
    steps: [
      {
        title: "Question 1",
        content: [],
        question: "What is the main workflow problem here?",
        options: [
          "Step 1 failed to create any output",
          "Step 2 depends on the output of Step 1, but the expected input filename is wrong",
          "Step 3 should have run before Step 2",
          "The pipeline has too few steps"
        ],
        answerIndex: 1,
        explanation:
          "Step 1 succeeded and produced filtered_variants.csv, but Step 2 is looking for the wrong filename. That is a dependency/input problem, not a failure of the whole workflow structure."
      },
      {
        title: "Question 2",
        content: [],
        question:
          "Why is it not always best to rerun every step from the beginning?",
        options: [
          "Because workflows should never be rerun",
          "Because Step 1 already succeeded, so blindly rerunning everything may waste time and discard valid completed work",
          "Because Step 2 does not matter",
          "Because final reports can be created without summaries"
        ],
        answerIndex: 1,
        explanation:
          "This is the core restart-thinking lesson: ask what already succeeded, what failed, and what truly needs rerunning."
      },
      {
        title: "Question 3",
        content: [],
        question: "Why does Step 3 not run?",
        options: [
          "Because Step 3 is optional",
          "Because its required input, summary.txt, was never produced since Step 2 failed",
          "Because Step 3 only works in cloud environments",
          "Because the final report was already created"
        ],
        answerIndex: 1,
        explanation:
          "Step 3 depends on Step 2’s output. Since Step 2 failed, Step 3 is not ready to run."
      },
      {
        title: "Question 4",
        content: [],
        question: "What is the best role of logs in this situation?",
        options: [
          "To replace the workflow outputs",
          "To help identify which step failed and why",
          "To automatically fix the bad filename",
          "To skip all failed steps forever"
        ],
        answerIndex: 1,
        explanation:
          "Logs help show that the problem happened in Step 2 and that the issue was the wrong expected input path or filename."
      },
      {
        title: "Question 5",
        content: [],
        question:
          "What is the safest next step after identifying the problem?",
        options: [
          "Delete all outputs and start again with no investigation",
          "Fix the incorrect filename dependency, then rerun or resume the workflow from the point that needs recovery",
          "Ignore the failure and create the final report manually",
          "Remove Step 2 from the workflow entirely"
        ],
        answerIndex: 1,
        explanation:
          "This is the best example of robust workflow thinking: fix the real failure point, preserve valid earlier work if appropriate, and rerun only what depends on the failed step."
      }
    ],
    shortWrittenResponseTask: {
      title: "Short written response task",
      body:
        "Ask the learner to answer this in 5–7 sentences:\n\nWhy is the colleague right to say that the learner should think about dependencies, logs, and what already succeeded before rerunning the whole workflow?"
    },
    strongAnswer: {
      title: "What a strong answer should include",
      body:
        "A strong learner answer would say something like:\n\nThe colleague is right because the workflow did not fail everywhere equally. Step 1 completed successfully and produced a valid output, while Step 2 failed because it was looking for the wrong input filename. That means the key issue is a dependency or path problem between Step 1 and Step 2, not a total collapse of the entire workflow. Logs are useful because they help show exactly which step failed and why. Since Step 3 depends on Step 2’s output, it could not run, but that does not mean Step 1 has to be discarded automatically. A better recovery plan is to fix the filename problem and rerun or resume only the necessary parts of the workflow."
    },
    whatThisMiniCaseIsTesting: {
      title: "What this mini case is testing",
      body:
        "This case is testing whether the learner can recognise that:\n• workflow order is driven by dependencies\n• one step can fail while earlier steps remain valid\n• later steps may be blocked because required outputs were never produced\n• logs help localise the real failure point\n• robust recovery means fixing the true problem and rerunning only what needs rerunning."
    },
    goodPerformanceLooksLike: {
      title: "What “good performance” looks like",
      body:
        "The learner has done well if they can recognise that:\n• Step 1 succeeded\n• Step 2 failed because of an input/dependency mismatch\n• Step 3 is blocked because its input was never created\n• the workflow should be debugged using the recorded evidence\n• and restart thinking should be targeted, not automatic."
    },
    conclusion: [
      "This mini case brings together workflow steps, dependencies, logs, and restart thinking in one small example.",
      "The key lesson is that robust recovery means fixing the real failure point and rerunning only what truly depends on it."
    ]
  };