export const module21MiniCase = {
    title: "Module 21 Mini Case: A small pipeline change was made, but is it really “just a quick fix”?",
    description:
      "Apply the core Module 21 ideas to a small workflow-change scenario: intended use, evidence, version history, change control, retesting, documentation, review, and acceptance.",
    introSections: [
      {
        title: "Mini case overview",
        body:
          "This mini case is designed to feel like a real workflow-change reasoning exercise rather than a memory test.\n\nThe learner is not being asked to use Git commands or write a full validation plan.\n\nInstead, they are being asked to apply the main ideas from Module 21:\n• validation is about intended use and evidence\n• version control tracks workflow history\n• change control means edits are handled deliberately\n• changed workflows need appropriate retesting\n• documentation, review, and sign-off make changes usable and trustworthy."
      }
    ],
    caseScenario: {
      title: "Case scenario",
      body:
        "A small workflow currently does this:\n1. reads variants.csv\n2. keeps rows with quality >= 80\n3. writes filtered_variants.csv\n4. creates a summary count.\n\nThe workflow has already been used in this form and people understand what its outputs mean.\n\nA learner changes the threshold to:\nquality >= 90\n\nThey say:\n“It is only one number change, so I just updated the script, ran it once, and committed it. I do not think this needs anything more.”\n\nA senior colleague replies:\n“That is not enough. Think about validation, version history, change control, and what should be retested.”\n\nThe learner’s task is to explain why the colleague is right."
    },
    learnerTask: {
      title: "Learner task",
      body: "Read the case and answer the questions below."
    },
    steps: [
      {
        title: "Question 1",
        content: [],
        question:
          "Why does this count as a real controlled change, even though only one number was edited?",
        options: [
          "Because every edit is automatically a major incident",
          "Because changing the threshold can change which records pass, which outputs are produced, and what the workflow results mean",
          "Because Git cannot store number changes",
          "Because the workflow should never be edited again"
        ],
        answerIndex: 1,
        explanation:
          "The edit is small in code size, but it can have a meaningful effect on workflow behaviour and outputs."
      },
      {
        title: "Question 2",
        content: [],
        question: "Why is one successful rerun not enough evidence on its own?",
        options: [
          "Because workflows should never be rerun after edits",
          "Because a successful run only shows that the workflow still executes, not that the new behaviour is correct or that old trusted behaviour has been checked properly",
          "Because commits replace testing",
          "Because only reviewers are allowed to run workflows"
        ],
        answerIndex: 1,
        explanation:
          "This is the core post-change testing lesson: execution success is useful, but it is not the same as evidence of correct intended behaviour."
      },
      {
        title: "Question 3",
        content: [],
        question: "What is the main value of version control in this case?",
        options: [
          "It proves the new threshold is correct automatically",
          "It records that the workflow changed and preserves a traceable history of what version existed before and after the threshold update",
          "It removes the need for documentation",
          "It makes sign-off unnecessary"
        ],
        answerIndex: 1,
        explanation:
          "Version control does not validate the change by itself, but it makes the change historically traceable."
      },
      {
        title: "Question 4",
        content: [],
        question: "What is the main purpose of change control here?",
        options: [
          "To stop the workflow from ever improving",
          "To make sure the threshold change is introduced in a deliberate, documented, reviewable way rather than as an undocumented quick edit",
          "To replace all testing with a commit message",
          "To hide the earlier version"
        ],
        answerIndex: 1,
        explanation:
          "Change control is about safe workflow stewardship, not about blocking all change."
      },
      {
        title: "Question 5",
        content: [],
        question: "Which of the following is the best next step?",
        options: [
          "Accept the change immediately because the script still runs",
          "Record what changed and why, retest the changed behaviour and relevant old behaviour, review the evidence, and then approve it if acceptable",
          "Delete the old version and keep only the new script",
          "Skip documentation because the code diff is obvious"
        ],
        answerIndex: 1,
        explanation:
          "That answer combines the core Module 21 ideas: traceability, retesting, review, and controlled acceptance."
      }
    ],
    shortWrittenResponseTask: {
      title: "Short written response task",
      body:
        "Ask the learner to answer this in 6–8 sentences:\n\nWhy is the colleague right to say that changing the threshold from 80 to 90 needs more than one rerun and a commit?"
    },
    strongAnswer: {
      title: "What a strong answer should include",
      body:
        "A strong learner answer would say something like:\n\nThe colleague is right because the threshold change can alter which records pass and therefore change the workflow’s outputs and their meaning. That means it is not just a tiny code edit; it is a real behavioural change to the pipeline. One successful rerun only shows that the workflow still executes, not that the new threshold behaves correctly in all the ways that matter. The change should be traceable in version control so it is clear what changed and when. It should also be handled through change control, which means recording why the threshold was changed and what impact was expected. Appropriate retesting should check both the new intended behaviour and whether trusted surrounding behaviour still works properly. The change should then be documented, reviewed, and accepted before being treated as the new trusted version."
    },
    whatThisMiniCaseIsTesting: {
      title: "What this mini case is testing",
      body:
        "This case is testing whether the learner can recognise that:\n• a small code edit can still be a meaningful workflow change\n• validation is about evidence for intended use, not just execution\n• version control tracks history but does not replace testing\n• change control manages how the update is introduced\n• documentation, review, and sign-off turn the edit into a controlled workflow change."
    },
    goodPerformanceLooksLike: {
      title: "What “good performance” looks like",
      body:
        "The learner has done well if they can recognise that:\n• the threshold edit changes workflow behaviour\n• one rerun is not enough evidence\n• the change should be traceable in version history\n• the updated workflow needs appropriate retesting\n• and the change should be documented, reviewed, and accepted rather than used casually."
    },
    conclusion: [
      "This mini case brings together intended use, workflow history, controlled change, retesting, and approval.",
      "The key lesson is that even a small edit can be a real workflow change if it alters trusted behaviour or output meaning."
    ]
  };