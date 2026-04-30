export const module13MiniCase = {
    title: "Module 13 Mini Case: Several plausible variants remain, but which ones should rise or fall?",
    description:
      "Apply Module 13 reasoning to a realistic shortlist-building problem where several technically reviewable variants remain and multiple prioritisation layers must be weighed together.",
    introSections: [
      {
        title: "Mini case overview",
        body:
          "This mini case is designed to feel more like a real shortlist-building problem than a recall exercise.\n\nThe learner is not being asked to make a final diagnosis or formal variant classification.\n\nInstead, they are being asked to apply the main ideas from Module 13:\n\n• filtering and prioritisation build a shortlist\n• population frequency is a strong early filter\n• consequence helps ranking but does not decide everything\n• inheritance can sharply narrow candidates\n• phenotype and panel context help decide which surviving variants are most relevant\n• technical credibility from earlier modules still matters throughout."
      }
    ],
    caseScenario: {
      title: "Case scenario",
      body:
        "A trainee is reviewing a rare disease case after earlier technical filtering. Four technically reviewable variants remain.\n\nVariant A\n• rare in population databases\n• technically strong\n• annotated as stop_gained\n• but the gene has weak phenotype relevance for this patient\n• and it sits outside the main indication-relevant panel context\n\nVariant B\n• rare in population databases\n• technically strong\n• annotated as missense_variant\n• fits the expected inheritance pattern\n• sits in a gene strongly matched to the patient’s phenotype\n• and is in the relevant panel context\n\nVariant C\n• technically strong\n• consequence looks interesting\n• but the variant is much too common in population databases for the suspected rare severe disease model\n\nVariant D\n• rare and in a relevant-looking gene\n• but the call is technically less comfortable than the others\n• and the family pattern does not fit the expected inheritance model well\n\nThe trainee says:\n\n“Variant A should probably be the top candidate because stop_gained is the most severe-looking consequence.”\n\nA senior colleague replies:\n\n“Not so fast. We need to think in layers, not just chase the most dramatic annotation.”\n\nThe learner’s task is to explain why the colleague is right."
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
          "Assuming that the most severe-looking consequence automatically makes the strongest overall candidate",
          "Assuming that missense variants can matter clinically",
          "Assuming that panel context matters in rare disease",
          "Assuming that population databases are useful"
        ],
        answerIndex: 0,
        explanation:
          "Module 13 teaches that consequence is only one prioritisation layer. A dramatic-looking consequence can attract attention, but rarity, inheritance, phenotype relevance, panel context, and technical comfort still all matter."
      },
      {
        title: "Question 2",
        content: [],
        question:
          "Why should Variant C usually fall quickly in priority?",
        options: [
          "Because technically strong variants are always less relevant",
          "Because it is too common in population databases for the suspected rare severe disease model",
          "Because interesting consequences are never useful",
          "Because phenotype fit always overrides frequency"
        ],
        answerIndex: 1,
        explanation:
          "Population frequency is one of the strongest early filters in rare-disease analysis. A variant that is clearly too common is usually a poor candidate, even if other features initially look interesting."
      },
      {
        title: "Question 3",
        content: [],
        question:
          "Why can Variant B reasonably outrank Variant A even though Variant A has a more dramatic-looking consequence?",
        options: [
          "Because missense always outranks stop_gained",
          "Because phenotype relevance, inheritance fit, and panel context can outweigh raw consequence severity in shortlist ranking",
          "Because panel context replaces consequence entirely",
          "Because consequence does not matter at all"
        ],
        answerIndex: 1,
        explanation:
          "Module 13 teaches layered prioritisation. A variant in a strongly phenotype-matched, indication-relevant gene that fits inheritance can rank above a more dramatic-looking consequence in a weakly matched gene."
      },
      {
        title: "Question 4",
        content: [],
        question:
          "What is the safest way to think about Variant D?",
        options: [
          "It must be the diagnosis because it is rare",
          "It should automatically outrank all others because the gene looks relevant",
          "It may still deserve attention, but weaker technical comfort and poor inheritance fit should reduce its priority",
          "It can be ignored because only population frequency matters"
        ],
        answerIndex: 2,
        explanation:
          "Earlier modules still matter. Technical discomfort and poor inheritance fit are valid reasons to push a candidate down even if the gene initially looks plausible."
      },
      {
        title: "Question 5",
        content: [],
        question:
          "What is the safest overall conclusion from this case?",
        options: [
          "The most severe-looking consequence should always define the top candidate",
          "Variant prioritisation should combine technical credibility, rarity, consequence, inheritance, phenotype, and panel context rather than relying on one dramatic feature",
          "The top-ranked variant is basically the diagnosis",
          "Any rare in-panel variant should automatically outrank all others"
        ],
        answerIndex: 1,
        explanation:
          "This is the integrated lesson of Module 13: good shortlisting comes from layering multiple clues together while remembering that shortlist rank is not final proof."
      }
    ],
    shortWrittenResponseTask: {
      title: "Short written response task",
      body:
        "Ask the learner to answer this in 5–7 sentences:\n\nWhy is it too simplistic to say, “Variant A has the most severe-looking consequence, so it should clearly be the top candidate”?"
    },
    strongAnswer: {
      title: "What a strong answer should include",
      body:
        "A strong learner answer would say something like:\n\nIt is too simplistic because consequence is only one part of prioritisation. A severe-looking consequence such as stop_gained may attract attention early, but it still has to be considered alongside population frequency, inheritance, phenotype relevance, panel context, and technical credibility. In this case, Variant A is weaker than it first appears because the gene has poor phenotype relevance and sits outside the main panel context. Variant B, although only missense, is rare, technically strong, inheritance-compatible, strongly phenotype-matched, and in the relevant panel, so it may be the better shortlist candidate. Variant C drops because it is too common for the disease model, and Variant D is weakened by technical and inheritance concerns. So the right workflow is layered ranking, not chasing the most dramatic annotation in isolation."
    },
    whatThisMiniCaseIsTesting: {
      title: "What this mini case is testing",
      body:
        "This case is testing whether the learner can integrate the main Module 13 ideas:\n\n• filtering and prioritisation are layered\n• population frequency can quickly push candidates down\n• consequence helps ranking but does not settle the case\n• inheritance can sharply change priority\n• phenotype and panel context make the shortlist patient-relevant\n• technical credibility still underpins the whole process\n• shortlist rank is not the same as diagnosis."
    },
    goodPerformanceLooksLike: {
      title: "What “good performance” looks like",
      body:
        "The learner has done well if they can recognise that:\n\n• the trainee is over-weighting consequence alone\n• Variant C should usually fall because of population frequency\n• Variant B may reasonably rise because of phenotype, inheritance, and panel relevance\n• Variant D should be treated more cautiously because of technical and inheritance concerns\n• the best shortlist comes from combining multiple factors rather than trusting one dramatic clue."
    },
    conclusion: [
      "This mini case brings together the key ideas from Module 13: strong shortlist-building depends on layering technical credibility, rarity, consequence, inheritance, phenotype, and panel context rather than over-trusting any one feature in isolation.",
      "The main lesson is that prioritisation helps decide which candidates deserve the most attention first, but even a top-ranked variant is still a candidate rather than a final diagnosis."
    ]
  };