export const module22MiniCase = {
    title:
      "Module 22 Mini Case: A realistic rare-disease case with competing candidates and remaining uncertainty",
    description:
      "Apply the core Module 22 ideas to a realistic rare-disease trio case with competing candidates, technical caveats, and a balanced downstream handoff.",
    introSections: [
      {
        title: "Mini case overview",
        body:
          "This mini case is designed to feel like a realistic rare-disease clinical bioinformatics reasoning exercise rather than a memory test.\n\nThe learner is not being asked to make a final clinical sign-out decision.\n\nInstead, they are being asked to apply the main ideas from Module 22:\n• start with the patient and family context, not an isolated variant\n• use phenotype and inheritance to shape candidate thinking\n• let QC and technical caveats affect confidence inside the case\n• compare candidates against each other rather than in isolation\n• identify the strongest current candidate without overclaiming\n• keep meaningful uncertainty visible\n• hand the case forward in useful, role-appropriate language."
      }
    ],
    caseScenario: {
      title: "Case scenario",
      body:
        "A trio has been referred for rare-disease analysis.\n\nProband:\nA 6-year-old child with developmental delay, early-onset seizures, hypotonia, and delayed speech. There is no clear similar family history. Both parents are reported to be unaffected.\n\nTesting context:\nTrio sequencing has been performed. After filtering, three shortlisted candidate variants remain.\n\nCandidate A\n• Gene is strongly associated with a neurodevelopmental disorder phenotype that overlaps well with the child’s presentation\n• Variant appears absent in both parents, so the pattern is consistent with a possible de novo event\n• Consequence is plausible for the known disease mechanism\n• Read depth is moderate\n• Allele balance is lower than expected\n• Alternate support is clustered toward the ends of reads\n• Overall technical confidence is not fully reassuring\n\nCandidate B\n• Gene has a broader but still plausible relationship to developmental delay and seizures\n• Inheritance pattern is compatible with the family data\n• Technical evidence is strong, with good depth, balanced support, and no obvious read-position concern\n• Consequence is plausible, but the phenotype match is less specific than Candidate A\n• Gene–disease fit is reasonable, but not as immediately compelling as Candidate A\n\nCandidate C\n• Variant has a dramatic-looking annotation\n• Gene has some neurological relevance, but the match to this child’s phenotype is less convincing\n• Inheritance pattern is less helpful\n• Technical quality is acceptable\n• Mechanism fit is uncertain for the known disease context\n\nA learner says:\n“Candidate A should definitely be treated as the answer because it has the best phenotype fit and looks de novo.”\n\nA senior colleague replies:\n“That is too quick. Compare the candidates properly, include the technical caveat, and do not make the wording sound like final sign-out.”\n\nThe learner’s task is to explain why the colleague is right."
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
          "What is the main reason the learner’s first statement is too strong?",
        options: [
          "Because phenotype fit should never influence ranking",
          "Because a candidate can only lead if it has perfect technical evidence",
          "Because Candidate A may still be the strongest current candidate, but the technical caveat and comparative context mean it should not be presented as a final answer",
          "Because de novo-looking candidates should always be ignored"
        ],
        answerIndex: 2,
        explanation:
          "This is the core Module 22 lesson. Candidate A may still lead, but the learner must compare it properly against the alternatives, keep the technical discomfort visible, and avoid final-diagnosis language."
      },
      {
        title: "Question 2",
        content: [],
        question: "Why does Candidate B remain important in the case?",
        options: [
          "Because technically clean candidates automatically outrank phenotype-relevant ones",
          "Because Candidate B has stronger technical evidence and still has a plausible biological story, so it may compete seriously with Candidate A",
          "Because phenotype specificity does not matter when QC is good",
          "Because the broadest phenotype match should always be prioritised"
        ],
        answerIndex: 1,
        explanation:
          "Candidate B should not be dismissed just because Candidate A has the more striking phenotype fit. Strong technical evidence plus plausible biological relevance can keep a candidate highly competitive."
      },
      {
        title: "Question 3",
        content: [],
        question: "What is the safest way to think about Candidate C?",
        options: [
          "It should lead because dramatic-looking annotations are usually the most important clue",
          "It should be removed immediately because it is not technically perfect",
          "It may remain lower on the shortlist, but dramatic annotation alone is not enough if phenotype and mechanism fit are weaker",
          "It should outrank Candidate B because consequence severity matters more than QC"
        ],
        answerIndex: 2,
        explanation:
          "Candidate C is the tempting but unsafe option if the learner over-focuses on annotation drama. Module 22 teaches that consequence type alone should not dominate ranking."
      },
      {
        title: "Question 4",
        content: [],
        question: "Which statement best reflects how QC should affect Candidate A?",
        options: [
          "The technical caveat can be ignored because the phenotype fit is strong",
          "The technical caveat automatically removes Candidate A from consideration",
          "The technical caveat should lower confidence in Candidate A and be considered directly in the comparison with Candidate B",
          "QC only matters after the final candidate has been chosen"
        ],
        answerIndex: 2,
        explanation:
          "This is exactly how Module 22 treats QC inside a live case. The caveat matters during ranking, not after it."
      },
      {
        title: "Question 5",
        content: [],
        question: "Which of the following is the best case-aware summary?",
        options: [
          "Candidate A is clearly causal and the others are not important.",
          "Candidate A is currently the strongest candidate because it has the best overall phenotype and inheritance fit in the case, but its technical caveat reduces confidence and keeps Candidate B relevant as an alternative.",
          "Candidate B should lead because technical quality is always the most objective feature.",
          "Candidate C is most important because it has the most severe-looking annotation."
        ],
        answerIndex: 1,
        explanation:
          "That answer is balanced, comparative, and caveat-aware. It explains why one candidate may still lead without pretending the uncertainty has disappeared."
      }
    ],
    shortWrittenResponseTask: {
      title: "Short written response task",
      body:
        "Ask the learner to answer this in 7–9 sentences:\n\nWhy is the colleague right to say that Candidate A should not simply be described as “the answer”? In your response, explain which candidate currently leads, why it leads, what caveat matters most, and how the case should be handed forward."
    },
    strongAnswer: {
      title: "What a strong answer should include",
      body:
        "A strong learner answer would say something like:\n\nCandidate A may still be the strongest current candidate because it has the best phenotype overlap, a plausible consequence for the known mechanism, and a family pattern consistent with a possible de novo event in the trio. However, it should not simply be called “the answer” because the technical evidence is not fully reassuring. The low allele balance and end-of-read clustering reduce confidence and mean the candidate should be described with caution rather than certainty. Candidate B remains important because it is technically stronger and still has a plausible phenotype and inheritance story, even if its fit is less specific than Candidate A. Candidate C is weaker overall because dramatic annotation alone is not enough to overcome poorer phenotype and mechanism fit. So the case should be presented comparatively rather than as a one-variant verdict. A safe handoff would describe Candidate A as the strongest current candidate, explain why it currently leads, and make the technical caveat explicit. It should also note that Candidate B remains a meaningful alternative for downstream review."
    },
    whatThisMiniCaseIsTesting: {
      title: "What this mini case is testing",
      body:
        "This case is testing whether the learner can recognise that:\n• the strongest phenotype fit does not automatically end the case\n• de novo-style thinking in a trio can be important without removing the need for comparison\n• QC can lower confidence in an otherwise attractive candidate\n• technically stronger alternatives may remain important even if they are biologically less striking\n• dramatic annotation is not enough on its own\n• good case reasoning ends in a balanced leading-candidate handoff, not an overconfident claim."
    },
    goodPerformanceLooksLike: {
      title: "What “good performance” looks like",
      body:
        "The learner has done well if they can recognise that:\n• Candidate A may still lead, but not without caveat\n• Candidate B deserves serious comparison rather than dismissal\n• Candidate C is tempting mainly because of annotation drama, not because it has the best overall case fit\n• the technical weakness in Candidate A should stay visible\n• the safest output is a comparative, uncertainty-aware handoff for downstream review rather than a final-sounding conclusion."
    },
    conclusion: [
      "This mini case brings together case context, trio-style reasoning, QC-aware comparison, and uncertainty-aware handoff.",
      "The key lesson is that the leading candidate can still lead without being presented as a final answer."
    ]
  };