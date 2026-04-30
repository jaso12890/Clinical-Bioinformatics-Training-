export const module13Quiz = [
    {
      question:
        "A learner says: “Filtering is basically the same as deciding which variant is pathogenic.” Which response is best?",
      options: [
        "Correct, because once poor candidates are removed the remaining variant is the diagnosis",
        "Incomplete, because filtering narrows the search space while final interpretation/classification is a later step",
        "Correct, unless trio data are available",
        "Incomplete only because consequence is more important than filtering"
      ],
      answerIndex: 1,
      explanation:
        "Module 13 begins with the key distinction that filtering removes or pushes down unlikely candidates, while interpretation and classification are later tasks. Shortlisting is not the same as final diagnosis."
    },
    {
      question:
        "Why is population frequency often used early in rare-disease filtering?",
      options: [
        "Because any variant seen in gnomAD must be benign",
        "Because variants that are clearly too common are usually poor candidates for rare severe Mendelian disorders",
        "Because frequency is more important than technical confidence",
        "Because ancestry-specific data are never relevant"
      ],
      answerIndex: 1,
      explanation:
        "Population databases such as gnomAD are valuable because obvious commonness can remove many implausible candidates early. The important question is not whether a variant is seen at all, but whether it is too common for the disease model."
    },
    {
      question:
        "A rare, technically strong variant is annotated as stop_gained, while another rare, technically strong variant is synonymous. What is the safest interpretation?",
      options: [
        "The stop_gained variant is automatically the diagnosis",
        "The stop_gained variant often deserves earlier attention in prioritisation, but it still needs to fit mechanism, inheritance, phenotype, and context",
        "The synonymous variant should always rank higher",
        "Consequence labels are not useful in prioritisation"
      ],
      answerIndex: 1,
      explanation:
        "Consequence is a useful ranking clue. More disruptive-looking consequences often rise earlier, but they still do not settle the case on their own."
    },
    {
      question:
        "Why is trio data especially powerful in rare-disease filtering?",
      options: [
        "Because it removes the need for phenotype information",
        "Because it lets the workflow identify de novo and segregation-compatible candidates much more directly",
        "Because it makes every rare variant automatically important",
        "Because it replaces population filtering"
      ],
      answerIndex: 1,
      explanation:
        "Trio analysis adds immediate family context, making it much easier to recognise de novo candidates and inheritance-compatible patterns such as recessive or compound-heterozygous models."
    },
    {
      question:
        "A learner says: “If a variant is de novo, it must be the top candidate.” What is the best correction?",
      options: [
        "Correct, because de novo status proves pathogenicity",
        "Incomplete, because de novo status can strongly raise priority in the right disease model, but technical quality, phenotype fit, and gene context still matter",
        "Correct, unless the variant is missense",
        "Incomplete only because population frequency matters more than inheritance"
      ],
      answerIndex: 1,
      explanation:
        "De novo status can be very powerful in the right dominant disease context, but it is still a prioritisation clue rather than direct proof. Earlier technical and clinical-context modules still matter."
    },
    {
      question:
        "What is the best reason phenotype matters after earlier filtering steps?",
      options: [
        "Because phenotype replaces technical review",
        "Because phenotype helps decide which rare, technically credible, inheritance-compatible candidates are most relevant to the actual patient",
        "Because phenotype always points to one gene only",
        "Because phenotype tools provide final diagnosis automatically"
      ],
      answerIndex: 1,
      explanation:
        "Phenotype-driven prioritisation exists to rank which surviving candidates best fit the patient’s presentation. Exomiser is a clear example of this kind of workflow support."
    },
    {
      question:
        "Why are curated gene panels useful in prioritisation?",
      options: [
        "Because they prove every in-panel gene is causal in the case",
        "Because they help focus attention on genes already curated as relevant to the clinical indication",
        "Because they replace inheritance reasoning",
        "Because they make out-of-panel genes automatically irrelevant"
      ],
      answerIndex: 1,
      explanation:
        "PanelApp is used to create and query disorder-related virtual gene panels. This helps focus review on genes most relevant to the indication, but panel context is still a prioritisation aid rather than absolute proof."
    },
    {
      question:
        "A technically strong, rare variant has a dramatic-looking consequence but is in a gene with weak phenotype relevance and outside the main panel context. Which interpretation best matches Module 13?",
      options: [
        "It should automatically rank first because the consequence is dramatic",
        "It may still deserve review, but phenotype and panel mismatch should reduce its priority relative to better-matched candidates",
        "It must be discarded immediately",
        "Technical strength alone settles the shortlist"
      ],
      answerIndex: 1,
      explanation:
        "Module 13 teaches layered prioritisation. A severe-looking consequence can attract attention, but phenotype and panel relevance can still move the variant down the shortlist."
    },
    {
      question:
        "What is the safest overall use of filtering and prioritisation in clinical bioinformatics?",
      options: [
        "To identify the final diagnosis as early as possible and stop further review",
        "To reduce and rank candidates so downstream review can focus on the most plausible variants first",
        "To remove all uncertainty from variant interpretation",
        "To replace communication and escalation decisions"
      ],
      answerIndex: 1,
      explanation:
        "Filtering and prioritisation are workflow tools that help focus attention and structure review. They do not eliminate uncertainty or replace later interpretation steps."
    },
    {
      question:
        "What is the best overall summary of Module 13?",
      options: [
        "One strong factor such as rarity or consequence usually decides everything",
        "Filtering and prioritisation combine technical credibility, rarity, consequence, inheritance, phenotype, and panel context to build a more defensible shortlist, but shortlist rank is not the same as final diagnosis",
        "A top-ranked variant is usually the diagnosis unless proven otherwise",
        "Technical review becomes irrelevant once prioritisation starts"
      ],
      answerIndex: 1,
      explanation:
        "That is the integrated lesson of Module 13: strong shortlisting comes from layering multiple clues together while preserving the boundary that candidates are not conclusions."
    }
  ];