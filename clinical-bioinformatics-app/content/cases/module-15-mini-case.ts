export const module15MiniCase = {
    title: "Module 15 Mini Case: The variant looks strong, but does it fit the mechanism?",
    description:
      "Apply Module 15 reasoning to a realistic shortlist-ranking problem where raw annotation severity conflicts with curated gene–disease mechanism.",
    introSections: [
      {
        title: "Mini case overview",
        body:
          "This mini case is designed to feel more like a real shortlist-ranking problem than a recall exercise.\n\nThe learner is not being asked to make a final diagnosis or formal variant classification.\n\nInstead, they are being asked to apply the main ideas from Module 15:\n\n• gene–disease mechanism changes which variants should rise or fall in priority\n• pLoF variants are most compelling when they fit a loss-of-function / haploinsufficiency mechanism\n• gain of function and dominant negative mechanisms can make missense or in-frame variants more compelling than truncating-looking variants\n• dosage sensitivity matters for both deletions and duplications\n• mechanism mismatch is a valid reason to lower rank even when the technical evidence is strong\n• mechanism-aware prioritisation improves the shortlist and handoff, but it is still not final clinical classification."
      }
    ],
    caseScenario: {
      title: "Case scenario",
      body:
        "A trainee is reviewing a rare disease case after earlier technical filtering, visual review, and shortlist generation. Two technically strong, phenotype-relevant candidates remain in the same gene.\n\nVariant A\n• rare in population databases\n• technically strong\n• annotated as frameshift_variant\n• inheritance pattern does not exclude it\n• but curated evidence suggests the gene–disease relationship is mainly associated with gain-of-function or dominant-negative effects\n\nVariant B\n• also rare and technically strong\n• annotated as missense_variant\n• in the same phenotype-relevant gene\n• and fits the reported mechanism more comfortably\n\nThe trainee says:\n\n“Variant A should probably rank first because a frameshift is more severe than a missense change.”\n\nA senior colleague replies:\n\n“Not necessarily. Severity on annotation is not the same as mechanism fit.”\n\nThe learner’s task is to explain why the colleague is right."
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
          "What is the main mistake in the trainee’s reasoning?",
        options: [
          "Assuming that the most severe-looking annotation automatically creates the strongest overall candidate",
          "Assuming that missense variants can matter",
          "Assuming that phenotype relevance matters",
          "Assuming that technical strength matters"
        ],
        answerIndex: 0,
        explanation:
          "Module 15 teaches that consequence severity and mechanism fit are not the same thing. A frameshift may look more dramatic, but if the gene mainly causes disease through gain of function or dominant negative effects, that frameshift may actually be a weaker biological fit than a missense change."
      },
      {
        title: "Question 2",
        content: [],
        question:
          "Why can Variant B reasonably outrank Variant A?",
        options: [
          "Because missense always outranks frameshift",
          "Because mechanism-consistent variants can be stronger shortlist candidates than more severe-looking but mechanism-mismatched ones",
          "Because frameshift variants are usually sequencing artefacts",
          "Because consequence labels do not matter at all"
        ],
        answerIndex: 1,
        explanation:
          "This is the core applied lesson of Module 15: shortlist rank should reflect whether the candidate is the right kind of event for the curated gene–disease mechanism, not just whether it looks more severe on paper."
      },
      {
        title: "Question 3",
        content: [],
        question:
          "What does mechanism mismatch mean in this case?",
        options: [
          "The read-level evidence is weak",
          "The candidate’s variant type does not fit the known or most likely way the gene causes disease",
          "The population frequency is too high",
          "The transcript annotation is missing"
        ],
        answerIndex: 1,
        explanation:
          "Mechanism mismatch is about biological fit, not technical quality. Variant A may be a real, rare, technically convincing event, but it is still a weaker candidate if the gene is mainly associated with gain-of-function or dominant-negative disease."
      },
      {
        title: "Question 4",
        content: [],
        question:
          "What is the safest way to think about Variant A?",
        options: [
          "It must be the diagnosis because frameshift is severe",
          "It must be discarded immediately",
          "It may still deserve mention, but mechanism mismatch should lower its priority and make the handoff wording more cautious",
          "It is automatically benign because the gene is not haploinsufficient"
        ],
        answerIndex: 2,
        explanation:
          "Module 15 does not teach automatic rejection. It teaches that poor mechanism fit usually lowers shortlist rank and should change how cautiously the candidate is described."
      },
      {
        title: "Question 5",
        content: [],
        question:
          "What is the safest overall conclusion from this case?",
        options: [
          "The strongest candidate is always the one with the most severe-looking consequence",
          "Shortlist ranking should combine technical strength, rarity, phenotype relevance, and mechanism fit rather than relying on annotation severity alone",
          "Gain-of-function genes should never contain frameshift variants",
          "Missense variants are always harder than truncating variants to prioritise"
        ],
        answerIndex: 1,
        explanation:
          "This is the integrated lesson of Module 15: mechanism-aware prioritisation improves shortlist quality by preventing over-promotion of dramatic but biologically mismatched candidates."
      }
    ],
    shortWrittenResponseTask: {
      title: "Short written response task",
      body:
        "Ask the learner to answer this in 5–7 sentences:\n\nWhy is it too simplistic to say, “Variant A is a frameshift, so it should clearly rank above Variant B”?"
    },
    strongAnswer: {
      title: "What a strong answer should include",
      body:
        "A strong learner answer would say something like:\n\nIt is too simplistic because a more severe-looking consequence does not automatically make a better biological candidate. Variant A is technically strong and rare, but if the gene mainly causes disease through gain-of-function or dominant-negative effects, then a frameshift may be a poorer mechanism fit than a missense variant. Variant B can reasonably outrank it because it matches the curated mechanism more comfortably. That does not prove Variant B is the diagnosis or prove Variant A is irrelevant. It means Variant A should usually move down the shortlist and be described more cautiously in the handoff. Mechanism-aware prioritisation exists to stop shortlist ranking from being driven only by dramatic annotation labels."
    },
    whatThisMiniCaseIsTesting: {
      title: "What this mini case is testing",
      body:
        "This case is testing whether the learner can integrate the main Module 15 ideas:\n\n• a candidate can be technically strong but biologically weak\n• pLoF does not always outrank missense\n• mechanism fit can outweigh raw consequence severity\n• mechanism mismatch should lower rank and change wording\n• shortlist ranking is smarter when it reflects curated gene–disease biology rather than annotation drama alone\n• this still supports downstream interpretation rather than replacing final classification."
    },
    goodPerformanceLooksLike: {
      title: "What “good performance” looks like",
      body:
        "The learner has done well if they can recognise that:\n\n• the trainee is over-weighting annotation severity\n• Variant B may reasonably rise because it better matches the curated mechanism\n• Variant A may still be real and relevant, but mechanism mismatch weakens it\n• mechanism-aware reasoning should change both rank and communication\n• safe clinical bioinformatics means asking not only “how severe does this look?” but also “is this the right kind of variant for this gene–disease mechanism?”"
    },
    conclusion: [
      "This mini case brings together the key ideas from Module 15: a technically strong and rare candidate is not automatically the best candidate if its variant class mismatches the curated mechanism of disease in the gene.",
      "The main lesson is that shortlist ranking improves when it reflects mechanism fit as well as technical strength, rarity, phenotype relevance, and inheritance."
    ]
  };