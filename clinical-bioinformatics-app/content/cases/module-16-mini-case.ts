export const module16MiniCase = {
    title: "Module 16 Mini Case: A strong candidate remains, but how should it be handed over?",
    description:
      "Apply Module 16 reasoning to a realistic handoff, wording, and scope-of-practice scenario.",
    introSections: [
      {
        title: "Mini case overview",
        body:
          "This mini case is designed to feel more like a real handoff and scope-of-practice problem than a recall exercise.\n\nThe learner is not being asked to make a final diagnosis or assign a formal variant classification.\n\nInstead, they are being asked to apply the main ideas from Module 16:\n\n• interpretation-aware bioinformatics means preparing a shortlist in a way that helps downstream review\n• the most useful handoff includes why a candidate rose or fell\n• prioritisation is not classification\n• supportive evidence and caveats should both be visible\n• uncertainty should be communicated clearly rather than hidden\n• escalation is part of safe practice when stronger conclusions would exceed the evidence or role boundary.\n\nACGS maintains UK best-practice guidance for formal variant classification, ClinGen explicitly says its gene-curation resources are not intended for direct diagnostic use or medical decision-making without review by a genetics professional, and HCPC standards require professionals to work within the limits of their knowledge and skills, manage risk, report concerns about safety, communicate effectively, and keep records of their work."
      }
    ],
    caseScenario: {
      title: "Case scenario",
      body:
        "A trainee has reviewed a rare-disease case and narrowed it to one leading candidate.\n\nCandidate variant\n• technically strong on read review\n• rare enough for the disease model\n• phenotype-relevant gene\n• plausible inheritance fit\n• but the mechanism fit is not fully settled\n• and one part of the supporting evidence remains incomplete\n\nThe trainee prepares the handoff note like this:\n\n“This is the diagnosis. The variant is clearly pathogenic and should be treated as the answer.”\n\nA senior colleague replies:\n\n“The candidate is important, but this wording goes too far.”\n\nThe learner’s task is to explain why the colleague is right and what a safer handoff would look like."
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
          "What is the main mistake in the trainee’s wording?",
        options: [
          "Treating shortlist evidence and candidate strength as if they already equal final diagnosis and formal classification",
          "Mentioning phenotype relevance",
          "Using technical evidence in the summary",
          "Recognising that the candidate is important"
        ],
        answerIndex: 0,
        explanation:
          "Module 16 teaches that even a very strong candidate handoff is still not the same thing as assigning a final interpretive class or diagnosis. ACGS guidance is for formal variant classification, while ClinGen explicitly warns that its curation resources are not for direct diagnostic use without genetics-professional review."
      },
      {
        title: "Question 2",
        content: [],
        question:
          "Which kind of handoff would be more appropriate?",
        options: [
          "This proves the diagnosis.",
          "This is currently the strongest candidate based on the available technical and biological evidence, but unresolved caveats remain and downstream interpretive review is needed.",
          "This is definitely pathogenic.",
          "This can now be signed out directly."
        ],
        answerIndex: 1,
        explanation:
          "That wording keeps the supportive evidence visible while also preserving the caveats and the boundary between prioritisation and final interpretation. That is exactly the kind of proportionate evidence framing Module 16 is teaching."
      },
      {
        title: "Question 3",
        content: [],
        question:
          "Why is it important to mention the unresolved caveat rather than just the strengths?",
        options: [
          "Because caveats weaken the professionalism of the note",
          "Because downstream reviewers need to understand what still limits confidence and what may need further review or escalation",
          "Because only weak candidates need caveats",
          "Because caveats replace formal interpretation"
        ],
        answerIndex: 1,
        explanation:
          "A strong handoff organises uncertainty rather than hiding it. Module 16 teaches that caveat-aware communication improves downstream review and patient safety. HCPC standards also emphasise communication, risk management, and record keeping."
      },
      {
        title: "Question 4",
        content: [],
        question:
          "When would escalation be especially appropriate in this scenario?",
        options: [
          "If the candidate is still relevant but stronger wording would go beyond the evidence or beyond safe scope of practice",
          "Only if the variant disappears from the shortlist entirely",
          "Only if the candidate is technically false",
          "Never, because a top-ranked candidate should not be escalated"
        ],
        answerIndex: 0,
        explanation:
          "HCPC standards require professionals to work within their limits and report or escalate concerns when needed. Module 16 teaches that escalation is appropriate when the candidate matters but the next stronger conclusion would overstep the evidence or role boundary."
      },
      {
        title: "Question 5",
        content: [],
        question:
          "What is the safest overall conclusion from this case?",
        options: [
          "A strong candidate should usually be described as the diagnosis to make the handoff decisive",
          "A useful bioinformatic handoff should explain why the candidate matters, what caveats remain, and where downstream professional review is still needed",
          "Uncertainty should usually be hidden to avoid confusion",
          "If a candidate is ranked first, formal classification is unnecessary"
        ],
        answerIndex: 1,
        explanation:
          "This is the integrated lesson of Module 16: evidence framing, caveat visibility, and role-aware communication make the shortlist more useful without turning it into a final diagnosis."
      }
    ],
    shortWrittenResponseTask: {
      title: "Short written response task",
      body:
        "Ask the learner to answer this in 5–7 sentences:\n\nWhy is it unsafe to write, “This is the diagnosis. The variant is clearly pathogenic and should be treated as the answer,” even when the candidate is very strong?"
    },
    strongAnswer: {
      title: "What a strong answer should include",
      body:
        "A strong learner answer would say something like:\n\nIt is unsafe because a strong shortlisted candidate is still not the same thing as a final formal classification or diagnosis. The handoff should explain why the candidate is strong, but it should also make any remaining caveats visible, such as unresolved mechanism questions or incomplete supporting evidence. Saying “clearly pathogenic” or “the diagnosis” goes beyond what shortlist reasoning alone can safely support. A safer summary would describe the candidate as currently the strongest or most plausible candidate for downstream review, while stating what still needs careful interpretation. That preserves the distinction between prioritisation and classification. It also supports safer downstream review, communication, and escalation within professional boundaries."
    },
    whatThisMiniCaseIsTesting: {
      title: "What this mini case is testing",
      body:
        "This case is testing whether the learner can integrate the main Module 16 ideas:\n\n• a shortlist should include the reasoning behind the candidate, not just the candidate itself\n• prioritisation is not classification\n• uncertainty and caveats should be made visible\n• wording should be clear, proportionate, and non-overclaiming\n• escalation is appropriate when stronger claims would exceed the evidence or scope of practice\n• safe NHS-style bioinformatics supports interpretation without pretending to own the final interpretive decision."
    },
    goodPerformanceLooksLike: {
      title: "What “good performance” looks like",
      body:
        "The learner has done well if they can recognise that:\n\n• the trainee is overclaiming\n• a strong candidate still needs caveat-aware wording\n• the handoff should explain both why the candidate matters and what still limits certainty\n• escalation can be the right next step when the candidate remains important but stronger language would overstep the evidence\n• safe clinical bioinformatics means making downstream review easier and safer, not turning shortlist reasoning into final diagnosis."
    },
    conclusion: [
      "This mini case brings together the central lessons of Module 16: a strong candidate still needs structured evidence framing, visible caveats, proportionate wording, and respect for role boundaries.",
      "The main goal is not to sound maximally certain, but to make downstream review safer, clearer, and better informed."
    ]
  };