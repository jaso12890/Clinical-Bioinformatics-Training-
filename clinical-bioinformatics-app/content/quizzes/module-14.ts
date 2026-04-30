export const module14Quiz = [
    {
      question:
        "A learner says: “The most important question is just whether the variant is in gnomAD or not.” Which response is best?",
      options: [
        "Correct, because present-versus-absent is usually enough for clinical review",
        "Incomplete, because proper interpretation also depends on AC, AN, AF, ancestry-specific frequency, and disease context",
        "Correct, unless the variant is missense",
        "Incomplete only because pLI matters more than frequency"
      ],
      answerIndex: 1,
      explanation:
        "Module 14 teaches that population-database use is more nuanced than a simple yes/no check. gnomAD explicitly frames frequency as the number of copies of an allele divided by the total number of chromosomes examined, and recent releases emphasize improved allele-number information because site representation matters for interpretation."
    },
    {
      question:
        "Why is allele count (AC) alone not enough to judge rarity safely?",
      options: [
        "Because AC only matters in structural variant analysis",
        "Because the same count can mean different things depending on the allele number (AN)",
        "Because AC is always replaced by pLI",
        "Because AC only matters if the variant is absent"
      ],
      answerIndex: 1,
      explanation:
        "A count of 3 observed alleles means something very different if the site was assessed in very many alleles versus relatively few. gnomAD v4.1 specifically added joint allele-number information to improve interpretation of observed and unobserved variants."
    },
    {
      question:
        "Why can a variant that looks rare overall still be a poor rare-disease candidate?",
      options: [
        "Because global rarity automatically proves irrelevance",
        "Because the variant may still be relatively common in a specific ancestry group relevant to interpretation",
        "Because ancestry-specific frequencies are not clinically useful",
        "Because ancestry always matters more than phenotype"
      ],
      answerIndex: 1,
      explanation:
        "gnomAD explicitly provides ancestry-stratified frequency data because a variant may appear rare overall while being much more common in one population group, which can materially change plausibility in rare-disease review."
    },
    {
      question:
        "What is the safest beginner description of FAF?",
      options: [
        "A final pathogenicity score",
        "A filtering-oriented frequency estimate used to help judge whether a variant is too common for a disease model",
        "A gene-constraint metric",
        "A replacement for ancestry-specific frequency"
      ],
      answerIndex: 1,
      explanation:
        "gnomAD v4.1 and related guidance describe filtering allele frequency as a filtering-focused way of using population data, especially when deciding whether a variant is too common for the disease context."
    },
    {
      question:
        "A learner says: “If a variant is absent from gnomAD, that makes it a very strong candidate by itself.” What is the best correction?",
      options: [
        "Correct, because absence proves rarity and pathogenicity together",
        "Incomplete, because absence can support rarity but is strongest when site representation is good and still needs phenotype, inheritance, and technical context",
        "Correct, unless the gene is unconstrained",
        "Incomplete only because pLI matters more than absence"
      ],
      answerIndex: 1,
      explanation:
        "Module 14 stresses that “not observed” is more informative when AN is strong and less informative when site representation is weaker. Absence can strengthen plausibility, but it is not final proof."
    },
    {
      question:
        "Which statement best describes gene constraint?",
      options: [
        "It measures how rare one specific variant is",
        "It estimates how depleted a gene is for a class of variation, such as pLoF, in population data",
        "It is a direct measure of phenotype fit",
        "It is another name for allele frequency"
      ],
      answerIndex: 1,
      explanation:
        "Gene constraint is gene-level, not variant-level. gnomAD’s constraint resources and the mutational-constraint literature define it through observed-versus-expected depletion of classes of variation."
    },
    {
      question:
        "What does a lower LOEUF generally suggest?",
      options: [
        "The gene appears more tolerant to pLoF variation",
        "The gene appears more constrained against pLoF variation",
        "The phenotype match is stronger",
        "The variant is automatically pathogenic"
      ],
      answerIndex: 1,
      explanation:
        "gnomAD explicitly describes LOEUF as a continuous loss-of-function intolerance metric, with lower values indicating stronger constraint."
    },
    {
      question:
        "Why is LOEUF often more useful than pLI for graded prioritisation?",
      options: [
        "Because pLI is never seen anymore",
        "Because LOEUF is continuous and gives more granularity across the spectrum of LoF intolerance",
        "Because LOEUF replaces technical review",
        "Because LOEUF applies to all variant classes equally well"
      ],
      answerIndex: 1,
      explanation:
        "The gnomAD v4.0 constraint release encourages using LOEUF as a continuous metric, and the 2020 mutational-constraint paper explains why this more quantitative view is useful compared with sharper dichotomized thinking."
    },
    {
      question:
        "A rare, technically strong pLoF variant is found in a gene with high LOEUF. Which interpretation best matches Module 14?",
      options: [
        "It must be the diagnosis because the variant is rare",
        "It may still matter, but the gene-level evidence suggests pLoF variation is more tolerated there, so the candidate may feel less compelling than a similar pLoF in a strongly constrained gene",
        "High LOEUF proves the variant is benign",
        "LOEUF only matters for missense variants"
      ],
      answerIndex: 1,
      explanation:
        "Module 14 teaches that rarity alone is not enough. A rare pLoF in a LoF-tolerant gene may stay on the shortlist, but it is often less compelling than the same class of change in a more constrained gene."
    },
    {
      question:
        "What is the best overall summary of Module 14?",
      options: [
        "Absence from gnomAD plus low LOEUF is usually enough for diagnosis",
        "Population frequency and gene constraint are complementary clues that refine shortlist plausibility and should be interpreted in context rather than used as magic truth labels",
        "pLI and LOEUF replace phenotype and inheritance",
        "Any rare variant in a constrained gene should automatically rank first"
      ],
      answerIndex: 1,
      explanation:
        "That is the integrated lesson of the module: variant-level rarity and gene-level intolerance work best together to refine plausibility, but they still sit inside a wider framework of phenotype, inheritance, mechanism, and technical evidence."
    }
  ];