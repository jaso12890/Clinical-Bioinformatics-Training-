export const module22Quiz = [
    {
      question: `A trio is analysed for a child with developmental delay, seizures, and hypotonia. A learner says:
  “I’ll ignore the phenotype for now and just start with whichever variant looks most severe on annotation.”
  Which response is best?`,
      options: [
        "Reasonable, because consequence severity is the safest first filter in every case",
        "Incomplete, because the phenotype and family context should help shape which candidate patterns deserve attention before final ranking",
        "Correct, because phenotype is mainly for the report discussion later",
        "Correct, unless technical quality is low"
      ],
      answerIndex: 1,
      explanation:
        "Module 22 teaches that realistic case analysis starts from patient and family context, not from isolated annotation drama. Phenotype and inheritance help shape the search before detailed candidate comparison begins."
    },
    {
      question: `In a singleton case, a learner says:
  “This candidate looks de novo, so it should go to the top.”
  What is the main problem with that statement?`,
      options: [
        "De novo variants are never relevant in rare disease",
        "A singleton case cannot directly establish a de novo pattern in the same way a trio can",
        "Technical QC does not matter for de novo candidates",
        "Phenotype becomes irrelevant once de novo is suspected"
      ],
      answerIndex: 1,
      explanation:
        "Family structure changes what can be said confidently. In a singleton case, a candidate may look compatible with a dominant mechanism, but the learner should not speak as though trio-style de novo support is already available."
    },
    {
      question: `A trio case has two candidates:
  • Candidate A: excellent phenotype fit, apparent de novo pattern, but low allele balance and suspicious read-position support
  • Candidate B: slightly broader phenotype fit, strong technical support, plausible inheritance fit
  
  Which is the best overall response?`,
      options: [
        "Candidate A must stay top because phenotype fit always outweighs QC",
        "Candidate B must stay top because technical quality always outweighs biology",
        "Candidate A should be removed immediately because one technical caveat makes it irrelevant",
        "The ranking should stay comparative, because Candidate A’s biology is attractive but its technical weakness may lower it relative to Candidate B"
      ],
      answerIndex: 3,
      explanation:
        "This is the central Module 22 balance: strong biology does not automatically rescue weak technical evidence, but one caveat does not always eliminate a candidate either. Realistic case ranking weighs both together."
    },
    {
      question: `A learner compares three candidates and says:
  “Candidate C should lead because it is a frameshift, so it is obviously the most important.”
  What is the safest criticism?`,
      options: [
        "Frameshifts never matter in rare disease",
        "Consequence type alone is not enough; the candidate still has to be judged against phenotype, inheritance, technical confidence, and mechanism fit in this case",
        "Mechanism fit only matters during final sign-out",
        "Candidate ranking should ignore consequence annotation completely"
      ],
      answerIndex: 1,
      explanation:
        "Module 22 teaches that no single dramatic clue should dominate too quickly. A striking annotation may raise interest, but it does not replace balanced case comparison."
    },
    {
      question: `A case has these shortlisted candidates:
  • Candidate A: best phenotype fit, but segregation information is incomplete
  • Candidate B: technically very clean, but weaker phenotype and mechanism fit
  • Candidate C: broad phenotype relevance, but awkward inheritance pattern in the family
  
  Which is the safest beginner approach?`,
      options: [
        "Choose Candidate B because technical cleanliness is the least subjective feature",
        "Choose Candidate C because broad phenotype relevance is safer than specific phenotype fit",
        "Compare all three across the same domains and decide which has the strongest overall balance in this specific case",
        "Avoid ranking until the final clinical interpretation stage"
      ],
      answerIndex: 2,
      explanation:
        "This is the core comparative method of the module. Candidates should be judged across the same main domains rather than by whichever single feature feels safest or strongest."
    },
    {
      question: `A learner writes:
  “Candidate A is clearly the diagnosis.”
  Why is that too strong for this stage?`,
      options: [
        "Because no candidate should ever be described positively",
        "Because case-based bioinformatic reasoning should identify the strongest current candidate, not collapse the full downstream interpretation process into a final diagnosis statement",
        "Because only phenotype can be described in summaries",
        "Because technical QC cannot be mentioned in handoff language"
      ],
      answerIndex: 1,
      explanation:
        "Module 22 keeps the role boundary visible. The learner should be able to explain why a candidate currently leads without drifting into final sign-out language."
    },
    {
      question: "Which summary wording is strongest for a realistic case handoff?",
      options: [
        "Candidate B wins.",
        "Candidate B is currently the strongest candidate because it has the best combined phenotype, inheritance, and technical profile in this case, although some uncertainty remains.",
        "Candidate B is definitely causal.",
        "Candidate B seems nice."
      ],
      answerIndex: 1,
      explanation:
        "That wording is clear, comparative, and caveat-aware without becoming vague or overconfident. It reflects the leading-candidate and remaining-uncertainty teaching from Lesson 5."
    },
    {
      question: `A learner says:
  “There is no point mentioning uncertainty if I already know which candidate I prefer.”
  Which response is best?`,
      options: [
        "Correct, because uncertainty makes summaries less useful",
        "Correct, unless the case is a singleton",
        "Incomplete, because remaining uncertainty is part of honest and useful case handoff, especially when confidence is limited by technical, phenotypic, or inheritance caveats",
        "Incorrect only if there are more than three candidates"
      ],
      answerIndex: 2,
      explanation:
        "In realistic rare-disease analysis, uncertainty is often part of the case. Hiding it makes the handoff less honest and less useful."
    },
    {
      question: `A duo case suggests a recessive condition. Two candidate genes remain:
  • Candidate A: one strong candidate variant in a highly relevant gene
  • Candidate B: two plausible variants in a less convincing gene, but the technical evidence is clean
  
  Which response is safest?`,
      options: [
        "Candidate A must lead because gene relevance always outranks inheritance structure",
        "Candidate B must lead because two hits always beat one hit",
        "The learner should compare phenotype fit, inheritance plausibility, technical confidence, and mechanism together before deciding which candidate currently leads",
        "Recessive cases should not be prioritised until every family member is sequenced"
      ],
      answerIndex: 2,
      explanation:
        "This question is designed to force the learner to choose between partly correct ideas. Neither “highly relevant gene” nor “two hits” automatically decides the case on its own."
    },
    {
      question: `A learner performs the workflow in this order:
  1. pick the most interesting variant
  2. check whether the phenotype can be made to fit
  3. look at QC at the end
  4. write the handoff
  
  What is the main concern?`,
      options: [
        "It is too slow",
        "It risks forcing the case around a favoured variant rather than building the ranking from case context, phenotype, inheritance, and QC in a structured way",
        "It uses too many steps",
        "It is acceptable as long as the final wording sounds cautious"
      ],
      answerIndex: 1,
      explanation:
        "Module 22 teaches that context comes before ranking. Starting with a favoured variant and then fitting the rest of the case around it is weaker and less safe reasoning."
    },
    {
      question: `A case has one candidate with very strong phenotype fit but uncertain read support, and another with slightly weaker phenotype fit but strong technical evidence. The learner says:
  “I do not need to compare them properly because both are plausible.”
  Why is that weak?`,
      options: [
        "Because plausible candidates should always be reported in alphabetical order",
        "Because realistic case reasoning requires comparison between plausible candidates to decide which currently leads and why",
        "Because technical evidence should always remove one of them immediately",
        "Because phenotype fit should always break the tie automatically"
      ],
      answerIndex: 1,
      explanation:
        "Plausibility alone is not the endpoint. The learner should be able to explain why one candidate currently sits above the other, even if uncertainty remains."
    },
    {
      question: "Which statement best reflects how QC affects a live case?",
      options: [
        "QC is mainly administrative and should not alter candidate rank",
        "QC only matters if the phenotype is weak",
        "QC can move candidates up or down because technical confidence changes how much trust the candidate deserves in the case",
        "QC matters only after the final candidate has been chosen"
      ],
      answerIndex: 2,
      explanation:
        "This is one of the most important integrated lessons in Module 22. QC is part of case reasoning, not a separate tidy-up exercise."
    },
    {
      question: `A learner says:
  “Because this candidate is technically clean and in a known disease gene, I do not need to discuss the alternatives.”
  What is the safest response?`,
      options: [
        "Correct, because once a candidate is technically clean, comparison is unnecessary",
        "Correct, because disease-gene membership is enough to establish the lead candidate",
        "Incomplete, because realistic case prioritisation is comparative and should explain why this candidate sits above the alternatives in this specific patient or family",
        "Incorrect only if the case is a trio"
      ],
      answerIndex: 2,
      explanation:
        "A realistic leading-candidate summary is stronger when it explains not only why the candidate is interesting, but why it leads over the alternatives."
    },
    {
      question:
        "Which situation most strongly suggests that explicit escalation or cautious downstream handoff language is needed?",
      options: [
        "The leading candidate is perfect in every domain",
        "The phenotype is specific, the technical evidence is clean, and the alternatives are clearly weaker",
        "The leading candidate remains plausible, but technical discomfort and incomplete family information still limit confidence",
        "There is only one candidate left after filtering"
      ],
      answerIndex: 2,
      explanation:
        "Module 22 teaches that some cases remain uncertain enough that the handoff should make that visible. That is good case reasoning, not failure."
    },
    {
      question: "What is the best overall summary of Module 22?",
      options: [
        "Rare-disease case analysis is mainly about spotting the most dramatic variant",
        "Once a shortlist exists, context and QC matter much less",
        "Rare-disease case analysis is a structured workflow that uses phenotype, inheritance, QC, and candidate comparison to identify the strongest current candidate and communicate it with appropriate uncertainty for downstream review",
        "The main goal is to make the handoff sound as decisive as possible"
      ],
      answerIndex: 2,
      explanation:
        "That is the integrated lesson of the module. Realistic case reasoning is context-driven, comparative, uncertainty-aware, and designed to support downstream review without overclaiming."
    }
  ];