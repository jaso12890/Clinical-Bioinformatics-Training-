export const module14 = {
    slug: "module-14",
    title: "Module 14: Population databases and constraint",
    description:
      "Population databases, proper frequency interpretation, gene constraint, LOEUF, pLI, and how variant-level rarity and gene-level intolerance work together in clinical review.",
    lessons: [
      {
        slug: "lesson-1",
        title: "Lesson 1: What are population databases and what are they for?",
        goal:
          "By the end of this lesson, the learner should be able to answer: “What is a population database in genomics, and what is it actually used for during variant review?”",
        screens: [
          {
            title: "Lesson goal",
            body: `By the end of this lesson, the learner should be able to answer:
  
  “What is a population database in genomics, and what is it actually used for during variant review?”
  
  This lesson starts Module 14 because the learner already understands that rarity is a powerful filter in rare-disease work. The next step is to understand the resource behind that logic: the population database.
  
  The best-known example here is gnomAD, which describes itself as a resource developed to aggregate and harmonize human genetic variation data and make those frequencies available for interpretation.`
          },
          {
            title: "The central idea",
            body: `A good beginner summary is:
  
  A population database is a reference resource that shows how often genetic variants are seen in large human datasets.
  
  That means it helps answer questions like:
  
  • is this variant absent?
  • is it very rare?
  • is it too common for the disease model?
  • is it common only in one ancestry group?
  • is this gene full of similar-looking variation in the general population?
  
  gnomAD is specifically built to provide summary allele-frequency statistics across large aggregated sequencing datasets, and it stratifies those data by ancestry and sex to support interpretation.
  
  So the key beginner message is:
  
  population databases are not lists of “bad variants” or “good variants.” They are reference datasets that help you judge plausibility.`
          },
          {
            title: "What gnomAD is doing in a workflow",
            body: `At beginner level, a population database such as gnomAD is mainly used to check whether a variant is:
  
  • not seen at all
  • seen only a few times
  • seen at a frequency that seems plausible for a rare disease
  • or obviously too common for the disease model.
  
  gnomAD’s browser and release notes emphasize that it provides aggregate frequency information and related annotations to support variant interpretation. Recent releases also describe combined filtering allele frequency (FAF) as a way to integrate frequency evidence across exomes and genomes.
  
  So the learner should understand:
  
  in workflow terms, population databases help analysts decide whether a variant deserves more attention or should quickly drop in priority.`
          },
          {
            title: "Why these databases are so useful in rare-disease review",
            body: `Rare-disease analysis usually begins with many technically credible variants. A population database helps because one of the fastest ways to reduce that list is to ask whether a candidate is too common to plausibly explain a rare severe Mendelian disorder.
  
  That is exactly why gnomAD is used so heavily in rare-disease review. Its value is not that it gives a diagnosis. Its value is that it provides a large-scale background map of human variation that helps remove many implausible candidates early.
  
  So the learner should understand:
  
  population databases are powerful because they make “how common is this?” a measurable question instead of a guess.`
          },
          {
            title: "What population databases do not tell you",
            body: `This lesson needs an important safety boundary.
  
  A learner may think:
  
  “If a variant is in gnomAD, then it cannot matter.”
  
  That is wrong.
  
  Population presence does not automatically make a variant irrelevant. The more useful question is whether the variant is too common for the disease context. That is why gnomAD provides things like ancestry-stratified frequencies and FAF rather than only a simple present/absent flag.
  
  So the learner should understand:
  
  population databases help with plausibility, not absolute yes/no truth.
  
  A variant can be present and still matter in some settings. A variant can be absent and still not be important.`
          },
          {
            title: "Why ancestry matters",
            body: `A major strength of population databases is that they do not only give one overall number.
  
  gnomAD explicitly states that it stratifies frequencies by genetic ancestry group, which helps variant interpretation. This matters because a variant that looks “rare overall” can still be relatively common in one ancestry group, and that can change how plausible it is for a particular disease model.
  
  So the learner should understand:
  
  ancestry-specific frequency is often more informative than one single global frequency number.
  
  That is one of the most important habits for using population databases safely.`
          },
          {
            title: "Why absence from a population database is helpful but limited",
            body: `A learner may also think the opposite:
  
  “If a variant is absent from gnomAD, that must make it very suspicious.”
  
  Absence can be useful, because it may support rarity. But absence is not automatic proof of clinical importance. Recent gnomAD releases discuss improvements such as joint allele number across all called sites because interpreting “not observed” depends partly on whether the site was well assessed in the dataset at all.
  
  So the learner should understand:
  
  absence from a population database can strengthen rarity, but it is not enough on its own to make a variant important.
  
  That is a key safety point.`
          },
          {
            title: "Why population databases are not just for filtering out variants",
            body: `Module 13 introduced population frequency mainly as an early filter. Module 14 now adds an extra layer:
  
  Population databases are not only for removing common variants. They also help refine judgment more subtly by showing:
  
  • how rare a variant really is
  • whether it is enriched in one ancestry group
  • whether a variant class appears often in the gene or region
  • and how confident you should be about using “rarity” as a clue.
  
  gnomAD’s releases and browser structure reflect this broader role by providing multiple frequency views and additional interpretation-support annotations.
  
  So the learner should understand:
  
  population databases are tools for refinement as well as rejection.`
          },
          {
            title: "Why these resources still depend on earlier modules",
            body: `Population databases only help if the variant itself is being reviewed sensibly.
  
  A technically weak or artefactual call does not become a good candidate just because it is absent from gnomAD. And a technically strong call that is common may still drop quickly. So the learner should understand:
  
  population databases sit on top of earlier technical review, not instead of it.
  
  That links Module 14 back to Modules 10–13:
  
  • technical confidence still matters
  • artefact awareness still matters
  • filtering logic still matters
  • phenotype and inheritance still matter.
  
  Population data refine plausibility. They do not replace the rest of the workflow.`
          },
          {
            title: "What this module will add after this lesson",
            body: `This lesson is only the starting point.
  
  The next lessons will go further into:
  
  • how to interpret frequency properly
  • what FAF adds
  • what gene constraint means
  • how LOEUF and pLI help
  • and how variant-level population evidence and gene-level intolerance work together in review.
  
  So the learner should understand:
  
  this lesson is about what the database is for; the next lessons are about how to use it well.`
          },
          {
            title: "The one-sentence takeaway",
            body: `If the learner remembers one sentence from this lesson, it should be:
  
  Population databases such as gnomAD are reference resources that show how often variants are seen in large human datasets, helping reviewers judge whether a variant’s frequency is compatible with the disease model, while remembering that presence or absence in the database is only one plausibility clue rather than final proof.
  
  That is the core lesson.`
          },
          {
            title: "Worked example",
            body: `Scenario
  
  A learner sees a rare-looking candidate variant and asks, “Should I just check whether it is in gnomAD?”
  
  Beginner question
  
  Why is that question too simple?
  
  Good beginner answer
  
  Because the important issue is not just whether the variant appears in a population database at all. The more useful question is how often it appears, in which ancestry groups, and whether that frequency is compatible with the disease model being investigated. gnomAD exists to provide exactly this kind of allele-frequency context, including ancestry-stratified frequencies and filtering allele frequency information. So the database is most useful when it is used to judge plausibility, not as a blunt present-versus-absent rule.`
          },
          {
            title: "Lesson summary",
            body: `The learner has understood this lesson if they can say something like:
  
  “A population database such as gnomAD helps me see how often a variant is observed in large reference datasets. That helps me judge whether the variant is absent, rare, or too common for the disease model, but I still need to think about ancestry, callability, technical evidence, and the wider clinical context.”`
          }
        ],
        sections: [
          {
            heading: "The central idea",
            body:
              "A population database is a reference resource that shows how often genetic variants are seen in large human datasets."
          }
        ],
        quiz: [
          {
            question:
              "What is the best beginner description of a population database?",
            options: [
              "A final list of pathogenic variants",
              "A reference resource showing how often variants are seen in large human datasets",
              "A transcript-annotation engine",
              "A read-alignment format"
            ],
            answerIndex: 1,
            explanation:
              "gnomAD describes itself as a large aggregated resource for human genetic variation and summary allele-frequency statistics."
          },
          {
            question:
              "Why are population databases so useful in rare-disease analysis?",
            options: [
              "Because any variant found in them is automatically benign",
              "Because they help determine whether a variant is too common to plausibly explain a rare severe Mendelian disorder",
              "Because they replace phenotype information",
              "Because they classify variants automatically"
            ],
            answerIndex: 1,
            explanation:
              "Their biggest early value is helping remove implausibly common candidates from rare-disease review."
          },
          {
            question:
              "Why can ancestry-specific frequency be important?",
            options: [
              "Because all ancestry groups have identical variant frequencies",
              "Because a variant may look rare overall but be much more common in a specific ancestry group",
              "Because ancestry data only matters in research, not interpretation",
              "Because ancestry replaces filtering allele frequency"
            ],
            answerIndex: 1,
            explanation:
              "gnomAD explicitly stratifies frequency data by ancestry to support more accurate interpretation."
          },
          {
            question:
              "Which statement is most accurate?",
            options: [
              "Absence from gnomAD proves pathogenicity",
              "Presence in gnomAD proves irrelevance",
              "Population databases help judge plausibility, but their evidence still has to be interpreted in disease and workflow context",
              "Population databases make technical review unnecessary"
            ],
            answerIndex: 2,
            explanation:
              "Population databases are powerful reference resources, but they provide plausibility clues rather than final diagnostic truth."
          }
        ]
      },
      {
        slug: "lesson-2",
        title: "Lesson 2: How should frequency be interpreted properly?",
        goal:
          "By the end of this lesson, the learner should be able to answer: “How do I read population frequency properly, and why is frequency more than just checking whether a variant is present or absent in gnomAD?”",
        screens: [
          {
            title: "Lesson goal",
            body: `By the end of this lesson, the learner should be able to answer:
  
  “How do I read population frequency properly, and why is frequency more than just checking whether a variant is present or absent in gnomAD?”
  
  This lesson follows the introduction to population databases because once the learner knows what a population resource is for, the next step is learning how to use the numbers safely.
  
  The most important shift is this:
  
  frequency is not just “seen” versus “not seen.”
  
  Population interpretation depends on understanding measures such as:
  
  • allele count (AC)
  • allele number (AN)
  • allele frequency (AF)
  • ancestry-specific frequency
  • and, in gnomAD, filtering allele frequency (FAF). gnomAD’s ancestry documentation defines frequency as the number of copies of an allele divided by the total number of chromosomes examined, and gnomAD v4.1 describes improved allele-number information across called sites.`
          },
          {
            title: "The central idea",
            body: `A good beginner summary is:
  
  Proper frequency interpretation means asking not just whether a variant is in the database, but how often it appears, in which populations, and whether that frequency is compatible with the disease model.
  
  That is why a simple present/absent rule is too crude. gnomAD provides multiple frequency-related fields and ancestry-stratified frequencies precisely because one number or one yes/no flag is often not enough.
  
  So the key beginner message is:
  
  the right question is usually not “is it in gnomAD?” but “is it too common for this disease context, and how confident am I about that estimate?”`
          },
          {
            title: "What allele count, allele number, and allele frequency mean",
            body: `At beginner level, the three most important frequency concepts are:
  
  • Allele count (AC): how many times the variant allele was observed
  • Allele number (AN): how many total alleles were examined at that site
  • Allele frequency (AF): the proportion of examined alleles carrying the variant.
  
  gnomAD’s ancestry documentation states that a variant’s frequency is defined by the number of copies of an allele divided by the total number of chromosomes examined, which is the same core logic as AC divided by AN.
  
  So the learner should understand:
  
  AF only makes sense properly when you remember that it comes from AC and AN together.
  
  That matters because the same AC can feel very different depending on how large the AN is.`
          },
          {
            title: "Why AC alone is not enough",
            body: `A beginner may see that a variant has been observed only a few times and think:
  
  “That sounds rare, so it must be a strong candidate.”
  
  That is too quick.
  
  A low allele count may still sit on top of:
  
  • a very large allele number, making the variant clearly rare
  • or a much smaller allele number, making the estimate less informative.
  
  This is one reason gnomAD’s newer releases put emphasis on improved allele-number information, including joint allele numbers at sites with variation and downloadable AN information at non-variant loci.
  
  So the learner should understand:
  
  AC without AN is incomplete frequency reasoning.
  
  The important question is not only how many times the variant was seen, but also how many opportunities there were to see it.`
          },
          {
            title: "Why AN matters so much",
            body: `Allele number matters because it tells you how well a site was represented in the dataset.
  
  If AN is low, then:
  
  • absence of a variant may be less reassuring
  • a low allele count may be harder to interpret confidently
  • and “rare” can mean something less stable than it first appears.
  
  gnomAD v4.1 specifically highlights new allele-number features, including joint allele numbers at all sites with gnomAD variation and downloadable AN information at loci with no observed variation, which reflects how important site representation is for safe interpretation.
  
  So the learner should understand:
  
  AN helps answer whether the dataset had a fair chance to observe the variant at that site.
  
  That is one of the most important steps beyond simple present/absent thinking.`
          },
          {
            title: "Why “not seen” is not the same as “proven absent”",
            body: `This is one of the most important beginner corrections.
  
  A learner may think:
  
  “If the variant is absent from gnomAD, that means nobody in gnomAD has it.”
  
  That is too simple.
  
  The safer version is:
  
  • the variant was not observed in the available high-quality data at that site
  • but the confidence of that statement depends partly on AN and site representation.
  
  gnomAD v4.1’s focus on joint allele number across all called sites exists specifically because interpreting non-observation requires knowing how much data actually covered the site.
  
  So the learner should understand:
  
  “not observed” is useful, but it is stronger when the allele number is high and weaker when the site is less well represented.
  
  That is a much safer way to read database absence.`
          },
          {
            title: "Why ancestry-specific frequency can be more informative than global frequency",
            body: `gnomAD explicitly provides frequencies stratified by genetic ancestry, and its ancestry documentation says accurate estimation of variant frequency is a critical part of medical and functional interpretation.
  
  This matters because a variant can be:
  
  • rare in the overall dataset
  • but relatively common in one ancestry group.
  
  So the learner should understand:
  
  the most informative frequency is often not the global AF, but the highest relevant ancestry-specific AF.
  
  That is why ancestry-aware review is so important in rare-disease workflows.`
          },
          {
            title: "What filtering allele frequency (FAF) adds",
            body: `This lesson should now introduce FAF more explicitly.
  
  gnomAD and ClinGen guidance discuss filtering allele frequency as a way of helping decide whether a variant is too common for a disease model, and ClinGen’s March 2024 guidance notes that gnomAD v4.0 includes a combined exome/genome filtering allele frequency labeled Grpmax Filtering AF.
  
  At beginner level, the important idea is:
  
  FAF is designed to support filtering decisions by giving a conservative frequency estimate that is more useful for deciding whether a variant is too common than simply glancing at raw AF alone.
  
  So the learner should understand:
  
  FAF is not a different kind of biology; it is a more interpretation-focused way of using population frequency for filtering.
  
  That is why it is especially relevant in clinical review.`
          },
          {
            title: "Why “present in gnomAD” is usually the wrong question",
            body: `A very common beginner question is:
  
  “Is this variant in gnomAD?”
  
  That question is often too blunt to be very helpful.
  
  A better set of questions is:
  
  • what is the AC?
  • what is the AN?
  • what is the AF?
  • what is the highest relevant ancestry-specific AF?
  • what is the FAF?
  • is that compatible with the disease model?
  
  gnomAD’s browser structure and documentation support exactly this kind of richer interpretation by providing frequency tables across ancestry groups and additional filtering-oriented fields.
  
  So the learner should understand:
  
  proper frequency interpretation means asking a small cluster of questions, not just one simplistic one.`
          },
          {
            title: "Why frequency still depends on disease context",
            body: `This lesson should also reinforce the key boundary from Module 13.
  
  Even correctly interpreted frequency still has to be matched to:
  
  • disease prevalence
  • inheritance model
  • penetrance
  • and the broader clinical scenario.
  
  That is why FAF and ancestry-aware frequencies are useful: they help refine the question “too common for what?” rather than pretending there is one universal rare-enough cutoff for all disease contexts.
  
  So the learner should understand:
  
  frequency interpretation becomes useful when it is disease-aware, not when it is reduced to a universal magic threshold.`
          },
          {
            title: "The one-sentence takeaway",
            body: `If the learner remembers one sentence from this lesson, it should be:
  
  Proper frequency interpretation means using allele count, allele number, allele frequency, ancestry-specific data, and filtering allele frequency together to judge whether a variant is truly rare enough for the disease model, rather than treating database presence or absence as a simple yes/no answer.
  
  That is the core lesson.`
          },
          {
            title: "Worked example",
            body: `Scenario
  
  A learner sees that a candidate variant appears only three times in gnomAD and says, “That is rare, so it looks strong.”
  
  Beginner question
  
  Why is that too quick?
  
  Good beginner answer
  
  Because the raw count alone is not enough. The learner still needs to know the allele number, the resulting allele frequency, whether the variant is more common in any ancestry group, and whether the filtering allele frequency is still compatible with the disease model. gnomAD’s recent releases emphasize improved allele-number information and ancestry-aware interpretation for exactly this reason. So the right conclusion is not simply “three observations equals rare enough,” but “three observations may be informative once the rest of the frequency context is understood.”`
          },
          {
            title: "Lesson summary",
            body: `The learner has understood this lesson if they can say something like:
  
  “To interpret frequency properly, I need more than present-versus-absent. I should think about AC, AN, AF, ancestry-specific frequency, and FAF, and then ask whether that overall frequency picture fits the disease model I am investigating.”`
          }
        ],
        sections: [
          {
            heading: "The central idea",
            body:
              "Proper frequency interpretation means asking not just whether a variant is in the database, but how often it appears, in which populations, and whether that frequency is compatible with the disease model."
          }
        ],
        quiz: [
          {
            question:
              "Why is allele count alone not enough to interpret rarity safely?",
            options: [
              "Because allele count never matters",
              "Because the same count can mean different things depending on how many total alleles were examined",
              "Because allele count only matters for structural variants",
              "Because allele count replaces ancestry-specific data"
            ],
            answerIndex: 1,
            explanation:
              "AC needs AN to become meaningful frequency reasoning. A low count may still be more or less informative depending on site representation."
          },
          {
            question:
              "What does allele number (AN) mainly help you judge?",
            options: [
              "Whether a gene is constrained",
              "Whether the database had a fair chance to observe the variant at that site",
              "Whether the phenotype fits",
              "Whether the transcript is canonical"
            ],
            answerIndex: 1,
            explanation:
              "AN tells you how many alleles were assessed, which is crucial for interpreting both presence and non-observation."
          },
          {
            question:
              "Why can ancestry-specific frequency be more informative than a single global AF?",
            options: [
              "Because global AF is never useful",
              "Because a variant may be rare overall but relatively common in one ancestry group",
              "Because ancestry-specific data only matters in research",
              "Because ancestry replaces disease context"
            ],
            answerIndex: 1,
            explanation:
              "gnomAD explicitly provides ancestry-stratified frequency data because interpretation improves when frequency is examined in population context."
          },
          {
            question:
              "What is the safest beginner description of FAF?",
            options: [
              "A final pathogenicity score",
              "A filtering-oriented frequency estimate used to help judge whether a variant is too common for a disease model",
              "A gene-constraint metric",
              "A replacement for all other frequency data"
            ],
            answerIndex: 1,
            explanation:
              "ClinGen’s guidance on gnomAD v4 describes filtering allele frequency as a frequency-based aid for filtering decisions, especially in clinical interpretation contexts."
          }
        ]
      },
      {
        slug: "lesson-3",
        title: "Lesson 3: What is gene constraint?",
        goal:
          "By the end of this lesson, the learner should be able to answer: “What does gene constraint mean, and how is it different from simply saying that a variant is rare?”",
        screens: [
          {
            title: "Lesson goal",
            body: `By the end of this lesson, the learner should be able to answer:
  
  “What does gene constraint mean, and how is it different from simply saying that a variant is rare?”
  
  This lesson follows proper frequency interpretation because rarity and constraint are related, but they are not the same thing.
  
  A variant being rare tells you something about that specific variant.
  
  A gene being constrained tells you something about how tolerant that gene appears to be to a class of variation in the general population.
  
  gnomAD provides gene-constraint resources specifically to measure how depleted some genes are for certain classes of variants, especially predicted loss-of-function variation.`
          },
          {
            title: "The central idea",
            body: `A good beginner summary is:
  
  Gene constraint means that a gene appears to tolerate some kinds of variation poorly in population data, because those variants are seen less often than expected.
  
  That is why constraint is useful in rare-disease review. If a gene seems strongly depleted for predicted loss-of-function variants in large population datasets, then a new predicted loss-of-function variant in that gene may feel more biologically plausible than the same variant type in a gene that seems very tolerant of such changes. gnomAD’s constraint documentation and the original mutational-constraint paper both describe this logic in terms of comparing observed versus expected variants.
  
  So the key beginner message is:
  
  constraint is about the gene’s tolerance pattern, not the individual variant’s frequency by itself.`
          },
          {
            title: "How constraint differs from rarity",
            body: `This is the most important distinction in the lesson.
  
  A rare variant tells you:
  
  • this particular variant is not commonly seen.
  
  Gene constraint tells you:
  
  • variants of a certain class in this gene are seen less often than expected overall.
  
  So the learner should understand:
  
  rarity is variant-level; constraint is gene-level.
  
  A rare variant in a highly tolerant gene may still be less compelling than a rare variant of the same class in a gene that appears strongly depleted for that class of change. The gnomAD constraint framework is built exactly around this gene-level depletion logic.`
          },
          {
            title: "What “observed versus expected” means at beginner level",
            body: `Constraint metrics are based on a simple core idea:
  
  • how many variants of a given class would we expect to see in this gene, given things like gene size and mutational opportunity?
  • how many variants of that class do we actually observe in the population dataset?
  
  If the observed number is much lower than expected, that suggests the gene is under stronger selection against that kind of variation. The 2020 constraint paper describes this framework in detail, and gnomAD’s help pages describe the constraint metrics as identifying genes under strong selection against certain mutation classes.
  
  So the learner should understand:
  
  constraint is really a depletion signal.
  
  It asks whether a class of variants appears rarer in a gene than you would expect by chance alone.`
          },
          {
            title: "Why predicted loss-of-function variation is so important here",
            body: `The most widely used gene-constraint thinking in rare-disease review often focuses on predicted loss-of-function (pLoF) variants, such as:
  
  • stop-gained
  • frameshift
  • essential splice-site variants.
  
  That is because many dominant disease genes are especially sensitive to loss of function, and the constraint framework is very useful for asking whether a gene seems depleted for pLoF variants in population data. The gnomAD papers and help resources focus heavily on pLoF depletion metrics such as LOEUF.
  
  So the learner should understand:
  
  gene constraint is often most clinically useful when thinking about whether a gene appears intolerant to pLoF variation.
  
  That is one reason this module follows the consequence and prioritisation modules.`
          },
          {
            title: "Why some genes look constrained and others do not",
            body: `Not every gene is equally intolerant.
  
  Some genes appear strongly depleted for pLoF variants in population databases, suggesting that disrupting one copy is often poorly tolerated. Other genes appear much more tolerant, meaning pLoF variation is seen more freely in the general population. Reviews of gene constraint and genotype-phenotype correlation explicitly emphasize that large databases such as gnomAD help distinguish genes and variant classes that are more or less constrained.
  
  So the learner should understand:
  
  constraint is not a universal property of “important genes.” It varies from gene to gene and from variant class to variant class.
  
  That is why constraint helps refine shortlist plausibility rather than acting as a universal rule.`
          },
          {
            title: "Why constraint strengthens plausibility without proving disease",
            body: `A learner may think:
  
  “If a gene is constrained, then any rare variant in it must be suspicious.”
  
  That is too simple.
  
  A constrained gene may make a certain kind of variant more plausible, but it does not prove:
  
  • that the variant is pathogenic
  • that the disease mechanism is loss of function
  • that the phenotype fits
  • or that the inheritance model is right.
  
  Constraint is useful because it adds a gene-level plausibility clue. It does not replace variant-level evidence, phenotype, inheritance, or technical review. gnomAD’s own blog post on v4.0 constraint emphasizes using these metrics carefully, and the original Nature paper also describes LOEUF as a confidence-oriented gene-level measure rather than a diagnostic verdict.
  
  So the learner should understand:
  
  constraint can strengthen suspicion, but it does not make a variant diagnostic on its own.`
          },
          {
            title: "Why constraint is still population-based evidence",
            body: `This is another important conceptual point.
  
  Gene constraint is not magic outside population data. It is still inferred from what large reference datasets do and do not contain. That means it shares some of the same broad limitations as other population-based clues:
  
  • it depends on the dataset
  • it depends on model assumptions
  • and it should be interpreted cautiously rather than treated as absolute truth.
  
  gnomAD’s v4.0 gene-constraint blog explicitly says the v4.0 metrics are still experimental and recommends that users treat them as beta-stage, while established v2.1.1 metrics remain important.
  
  So the learner should understand:
  
  constraint is powerful, but it is still an inference from population data, not a final clinical answer.`
          },
          {
            title: "Why this helps after Module 13",
            body: `Module 13 taught the learner to use rarity early in filtering. Module 14 now deepens that logic.
  
  A useful way to compare them is:
  
  • Rarity asks: is this particular variant uncommon enough to stay on the shortlist?
  • Constraint asks: is this gene the kind of gene where this class of variant tends to be depleted in population data?
  
  So the learner should understand:
  
  constraint refines the shortlist by adding gene-level tolerance information on top of variant-level rarity.
  
  That is why the two ideas belong in separate lessons.`
          },
          {
            title: "Why this lesson comes before LOEUF and pLI",
            body: `This lesson is about the concept first.
  
  The next lesson will deal with named metrics such as:
  
  • LOEUF
  • pLI
  
  But before those numbers make sense, the learner needs to understand the underlying idea:
  
  • genes can be more or less depleted for certain classes of variation
  • and that depletion can support prioritisation.
  
  So the learner should understand:
  
  this lesson is about what constraint means before the next lesson explains how specific constraint metrics represent it.`
          },
          {
            title: "The one-sentence takeaway",
            body: `If the learner remembers one sentence from this lesson, it should be:
  
  Gene constraint is a population-based measure of how depleted a gene is for certain classes of variation, especially predicted loss-of-function changes, so it helps refine plausibility at the gene level rather than simply asking whether one specific variant is rare.
  
  That is the core lesson.`
          },
          {
            title: "Worked example",
            body: `Scenario
  
  A learner compares two rare predicted loss-of-function variants. Both are technically strong and phenotype-relevant, but one is in a gene that appears highly depleted for pLoF variants in population data, while the other is in a gene that appears much more tolerant.
  
  Beginner question
  
  Why might the first variant feel more compelling?
  
  Good beginner answer
  
  Because the first gene appears more constrained for pLoF variation, which suggests that this class of change is not commonly tolerated in the general population. That does not prove the variant is pathogenic, but it makes the variant more plausible than the same class of change in a gene where pLoF variants are seen more freely. gnomAD’s constraint resources and the original mutational-constraint work are designed to capture exactly this kind of gene-level depletion signal.`
          },
          {
            title: "Lesson summary",
            body: `The learner has understood this lesson if they can say something like:
  
  “Gene constraint tells me whether a gene seems to tolerate certain classes of variation poorly in population data. That is different from a single variant being rare, and it can make a candidate feel more or less plausible, especially for predicted loss-of-function variants.”`
          }
        ],
        sections: [
          {
            heading: "The central idea",
            body:
              "Gene constraint means that a gene appears to tolerate some kinds of variation poorly in population data, because those variants are seen less often than expected."
          }
        ],
        quiz: [
          {
            question:
              "What is the best beginner description of gene constraint?",
            options: [
              "A list of all pathogenic variants in a gene",
              "A measure of how depleted a gene is for certain classes of variation in population data",
              "A phenotype-matching score",
              "A direct diagnostic classification"
            ],
            answerIndex: 1,
            explanation:
              "Constraint metrics are built around observed-versus-expected depletion of variation classes in genes."
          },
          {
            question:
              "How is gene constraint different from variant rarity?",
            options: [
              "There is no difference",
              "Rarity is variant-level, while constraint is gene-level",
              "Constraint only applies to common variants",
              "Rarity only applies to genes"
            ],
            answerIndex: 1,
            explanation:
              "This is the main conceptual distinction of the lesson: rarity describes one variant, while constraint describes a gene’s tolerance pattern."
          },
          {
            question:
              "Why is gene constraint especially useful for predicted loss-of-function review?",
            options: [
              "Because every constrained gene automatically causes dominant disease",
              "Because many rare-disease workflows want to know whether a gene appears depleted for pLoF variants in population data",
              "Because pLoF variants do not need phenotype review",
              "Because constraint replaces technical evidence"
            ],
            answerIndex: 1,
            explanation:
              "Much of practical constraint use in rare-disease review centers on whether a gene is depleted for pLoF variation."
          },
          {
            question:
              "Which statement is most accurate?",
            options: [
              "A constrained gene makes every rare variant in it diagnostic",
              "Constraint is a useful gene-level plausibility clue, but it still must be interpreted alongside phenotype, inheritance, mechanism, and technical evidence",
              "Constraint replaces population frequency",
              "Constraint is unrelated to observed-versus-expected variation"
            ],
            answerIndex: 1,
            explanation:
              "Constraint helps refine plausibility, but it is not a standalone proof tool."
          }
        ]
      },
      {
        slug: "lesson-4",
        title: "Lesson 4: LOEUF, pLI, and how constraint helps prioritisation",
        goal:
          "By the end of this lesson, the learner should be able to answer: “What are LOEUF and pLI, and how do they help me use gene constraint in prioritisation without treating it like a magic cutoff?”",
        screens: [
          {
            title: "Lesson goal",
            body: `By the end of this lesson, the learner should be able to answer:
  
  “What are LOEUF and pLI, and how do they help me use gene constraint in prioritisation without treating it like a magic cutoff?”
  
  This lesson follows the gene-constraint lesson because once the learner understands the idea of observed-versus-expected depletion, the next step is learning how that idea gets represented in practical metrics.
  
  The two names the learner will see most often are:
  
  • LOEUF
  • pLI
  
  gnomAD’s help pages and release notes describe LOEUF as a major loss-of-function constraint metric, while the 2020 mutational-constraint paper explains why LOEUF was introduced as a more quantitative alternative to earlier dichotomized thinking based on pLI.`
          },
          {
            title: "The central idea",
            body: `A good beginner summary is:
  
  LOEUF and pLI are gene-level constraint metrics that help estimate how intolerant a gene appears to be to predicted loss-of-function variation, and that can help refine prioritisation.
  
  At beginner level, the main practical message is:
  
  • genes with stronger LoF constraint may make rare predicted loss-of-function variants feel more plausible
  • genes with weaker LoF constraint may make the same class of variant feel less compelling.
  
  But the key safety point is:
  
  these metrics help with plausibility; they do not diagnose disease on their own. gnomAD explicitly recommends using LOEUF as a continuous metric, and the original constraint paper explains that simple dichotomization can hide more subtle levels of intolerance.`
          },
          {
            title: "What LOEUF is in plain language",
            body: `LOEUF stands for loss-of-function observed/expected upper bound fraction. gnomAD describes it as a continuous metric designed to demonstrate a gene’s intolerance to loss-of-function variation. Lower LOEUF values indicate stronger depletion of pLoF variants and therefore stronger LoF constraint.
  
  A safe beginner translation is:
  
  LOEUF asks how low the gene’s pLoF observed/expected ratio could reasonably be, using the upper bound of a confidence interval, and lower values mean the gene looks more constrained.
  
  So the learner should understand:
  
  lower LOEUF = more LoF constrained
  higher LOEUF = more LoF tolerant.
  
  That is the simplest practical reading.`
          },
          {
            title: "Why LOEUF is useful",
            body: `LOEUF is useful because it gives a continuous view of LoF intolerance rather than forcing genes into only “intolerant” versus “not intolerant” groups. The 2020 Nature paper specifically argues that a more accurate quantitative measure of selective pressure is possible with larger sample sizes, and later reviews note that the continuous nature of LOEUF gives more granular detail than pLI across the middle of the spectrum.
  
  So the learner should understand:
  
  LOEUF is helpful because it lets you compare genes along a spectrum of LoF constraint rather than only asking whether a gene crosses a single yes/no threshold.
  
  That is one reason it is so useful in shortlist refinement.`
          },
          {
            title: "What pLI is in plain language",
            body: `pLI stands for probability of being loss-of-function intolerant. Earlier ExAC/gnomAD-era work used pLI to identify genes with a high probability of intolerance to heterozygous pLoF variation. The 2020 mutational-constraint paper says that earlier models used pLI and also points out that its dichotomization, though convenient, disguises variability across the spectrum.
  
  A safe beginner translation is:
  
  pLI is an older, more threshold-like way of asking whether a gene looks strongly intolerant to LoF variation.
  
  So the learner should understand:
  
  pLI is still seen in practice and literature, but LOEUF is often more informative when you want a more graded view of LoF intolerance.`
          },
          {
            title: "Why LOEUF is often preferred over pLI for practical refinement",
            body: `This lesson should make the comparison clear without making it overly technical.
  
  pLI is useful historically and still appears in many papers, but it behaves more like a sharper category signal. Reviews discussing the two metrics note that LOEUF’s continuous form gives more granularity than pLI, especially for genes in the middle of the spectrum rather than only the most extreme genes.
  
  gnomAD’s current guidance also explicitly encourages users to use LOEUF as a continuous metric.
  
  So the learner should understand:
  
  LOEUF is often more useful for prioritisation because it supports graded judgment instead of forcing everything into a simpler binary-style interpretation.
  
  That fits clinical review well, because plausibility is often graded rather than all-or-nothing.`
          },
          {
            title: "Why lower LOEUF can strengthen a pLoF candidate",
            body: `A rare, technically credible pLoF variant in a gene with a low LOEUF often feels more compelling than the same kind of variant in a gene with a high LOEUF.
  
  That is because lower LOEUF means the gene appears more depleted for pLoF variation in population data. gnomAD’s documentation and reviews of human mutational constraint both support this basic interpretation.
  
  So the learner should understand:
  
  LOEUF helps answer whether this gene is the kind of gene where a pLoF variant should attract more suspicion.
  
  That makes it a useful ranking clue after earlier filtering steps.`
          },
          {
            title: "Why high LOEUF can weaken a pLoF candidate",
            body: `The opposite is also important.
  
  If a gene has a relatively high LOEUF, that suggests pLoF variants are seen more freely in population data. That does not automatically make a new pLoF variant irrelevant, but it can weaken the idea that loss of function in that gene is a highly suspicious mechanism. gnomAD’s framing of LOEUF as a continuous constraint metric supports exactly this sort of graded interpretation.
  
  So the learner should understand:
  
  a pLoF variant in a LoF-tolerant gene may deserve less automatic attention than a similar variant in a strongly constrained gene.
  
  That is why LOEUF is useful for shortlist refinement.`
          },
          {
            title: "Why you should not treat LOEUF or pLI as magic thresholds",
            body: `This is one of the most important safety points in the lesson.
  
  A learner may think:
  
  “If LOEUF is below the cutoff, the gene is important; if it is above the cutoff, it is not.”
  
  That is too simple.
  
  gnomAD explicitly recommends using LOEUF as a continuous metric, even though it provides threshold guidance for users who need simpler cutoffs in some applications. In its v4.0 release notes, gnomAD also notes that the recommended LOEUF threshold changed between v2.1.1 and v4.0, which itself shows why hard thresholds should be treated cautiously.
  
  So the learner should understand:
  
  constraint metrics are strongest when used as graded plausibility clues, not as universal pass/fail rules.
  
  That is one of the biggest practical lessons here.`
          },
          {
            title: "Why these metrics still have limitations",
            body: `Constraint metrics are powerful, but they are not perfect representations of disease biology.
  
  Recent papers note important limitations: pLI and LOEUF are useful, but they are only loosely related to the underlying fitness consequences and can depend on sample size and technical factors. gnomAD’s v4.0 constraint release also describes the new metrics as still experimental/beta-stage.
  
  So the learner should understand:
  
  LOEUF and pLI are very useful, but they are still population-based inference tools rather than direct clinical truth labels.
  
  That keeps the learner from over-trusting them.`
          },
          {
            title: "Why LOEUF and pLI still do not replace phenotype, inheritance, or mechanism",
            body: `This lesson should finish by reinforcing the same boundary as earlier modules.
  
  A low LOEUF or high pLI does not prove:
  
  • the gene matches the phenotype
  • the variant fits the inheritance model
  • the disease mechanism is really loss of function
  • the technical evidence is strong
  • or the variant is pathogenic.
  
  So the learner should understand:
  
  constraint metrics can strengthen plausibility, especially for pLoF candidates, but they still need to sit alongside phenotype, inheritance, mechanism, and technical evidence.
  
  That is how they should be used safely in review.`
          },
          {
            title: "The one-sentence takeaway",
            body: `If the learner remembers one sentence from this lesson, it should be:
  
  LOEUF and pLI are gene-level measures of loss-of-function intolerance, and lower LOEUF or higher pLI can make a rare pLoF variant feel more plausible, but these metrics work best as continuous prioritisation clues rather than hard diagnostic cutoffs.
  
  That is the core lesson.`
          },
          {
            title: "Worked example",
            body: `Scenario
  
  A learner compares two rare, technically strong pLoF variants in phenotype-relevant genes.
  
  • Variant A is in a gene with very low LOEUF
  • Variant B is in a gene with much higher LOEUF
  
  The learner says, “Variant A looks more plausible, so that must mean it is the diagnosis.”
  
  Beginner question
  
  Why is that too quick?
  
  Good beginner answer
  
  Because low LOEUF can strengthen the plausibility of a pLoF variant by suggesting that the gene is more intolerant to loss-of-function variation. But that still does not prove the variant is pathogenic or diagnostic. The learner still needs to think about phenotype fit, inheritance, disease mechanism, and technical evidence. gnomAD’s own guidance recommends using LOEUF as a continuous metric for interpretation support rather than treating it as a standalone answer.`
          },
          {
            title: "Lesson summary",
            body: `The learner has understood this lesson if they can say something like:
  
  “LOEUF and pLI help me estimate how intolerant a gene appears to be to loss-of-function variation. Lower LOEUF or higher pLI can make a rare pLoF variant feel more plausible, but these metrics are still population-based clues that need to be combined with phenotype, inheritance, mechanism, and technical evidence.”`
          }
        ],
        sections: [
          {
            heading: "The central idea",
            body:
              "LOEUF and pLI are gene-level constraint metrics that help estimate how intolerant a gene appears to be to predicted loss-of-function variation, and that can help refine prioritisation."
          }
        ],
        quiz: [
          {
            question:
              "What does a lower LOEUF generally suggest?",
            options: [
              "The gene appears more tolerant to pLoF variation",
              "The gene appears more constrained against pLoF variation",
              "The variant is automatically pathogenic",
              "The phenotype match is stronger"
            ],
            answerIndex: 1,
            explanation:
              "gnomAD describes LOEUF as a continuous metric of loss-of-function intolerance, with lower values indicating stronger constraint."
          },
          {
            question:
              "Why is LOEUF often more useful than pLI for graded prioritisation?",
            options: [
              "Because pLI is never used anymore",
              "Because LOEUF is continuous and can provide more granular information across the spectrum of LoF intolerance",
              "Because LOEUF replaces phenotype review",
              "Because LOEUF only applies to missense variants"
            ],
            answerIndex: 1,
            explanation:
              "The mutational-constraint literature and later reviews note that LOEUF’s continuous nature provides more granularity than pLI."
          },
          {
            question:
              "Why is it unsafe to treat LOEUF as a universal cutoff?",
            options: [
              "Because LOEUF never matters",
              "Because gnomAD recommends using it as a continuous metric, and even threshold recommendations can change between releases",
              "Because LOEUF is only for research studies",
              "Because LOEUF measures phenotype severity directly"
            ],
            answerIndex: 1,
            explanation:
              "gnomAD explicitly encourages continuous use of LOEUF and notes that recommended thresholds differ between releases such as v2.1.1 and v4.0."
          },
          {
            question:
              "Which statement is most accurate?",
            options: [
              "A high pLI or low LOEUF proves diagnosis",
              "Constraint metrics are useful gene-level plausibility clues, especially for pLoF review, but they still need to be interpreted with phenotype, inheritance, mechanism, and technical evidence",
              "LOEUF replaces population frequency",
              "pLI and LOEUF are variant-level scores"
            ],
            answerIndex: 1,
            explanation:
              "This is the core boundary of the lesson: these are helpful gene-level prioritisation clues, not standalone proof tools."
          }
        ]
      },
      {
        slug: "lesson-5",
        title: "Lesson 5: How population databases and constraint work together in review",
        goal:
          "By the end of this lesson, the learner should be able to answer: “How do variant frequency and gene constraint work together when I am deciding whether a candidate deserves more or less attention?”",
        screens: [
          {
            title: "Lesson goal",
            body: `By the end of this lesson, the learner should be able to answer:
  
  “How do variant frequency and gene constraint work together when I am deciding whether a candidate deserves more or less attention?”
  
  This lesson follows the frequency and constraint lessons because the learner now knows two different but connected ideas:
  
  • variant-level population evidence tells you how common a specific variant is
  • gene-level constraint evidence tells you how tolerant a gene appears to be to certain classes of variation, especially predicted loss-of-function variation. gnomAD’s help and release pages treat these as distinct but complementary interpretation resources.`
          },
          {
            title: "The central idea",
            body: `A good beginner summary is:
  
  Population frequency and gene constraint work together because one helps you judge the plausibility of the specific variant, while the other helps you judge the plausibility of that class of change in that gene.
  
  A safe beginner contrast is:
  
  • frequency asks: is this specific variant too common, rare enough, or absent?
  • constraint asks: does this gene look depleted for this class of variation in the general population?
  
  So the key beginner message is:
  
  the strongest prioritisation clues often come when variant rarity and gene intolerance point in the same direction.`
          },
          {
            title: "Why rarity alone is not enough",
            body: `A learner may think:
  
  “If the variant is absent or very rare in gnomAD, that already makes it a strong candidate.”
  
  That is too simple.
  
  Many rare variants are still poor candidates because rarity only tells you that the variant is uncommon. It does not tell you whether:
  
  • the gene is relevant
  • the disease mechanism fits
  • the gene is tolerant or intolerant to that class of change
  • or the technical evidence is strong. Reviews on using population databases in variant interpretation make exactly this point: population rarity is important, but it is only one piece of the larger interpretation framework.
  
  So the learner should understand:
  
  rarity is helpful for keeping a variant on the shortlist, but not enough to make it compelling by itself.`
          },
          {
            title: "Why constraint alone is not enough either",
            body: `The opposite mistake is also common:
  
  “If the gene has a low LOEUF or high pLI, then any rare variant in it must be suspicious.”
  
  That is also too simple.
  
  Constraint is a gene-level clue, not a verdict on every variant in that gene. gnomAD’s gene-constraint material explicitly frames LOEUF as a continuous gene-level measure of intolerance, and recent discussions of constraint note that these are useful but imperfect population-based inference tools rather than direct diagnostic labels.
  
  So the learner should understand:
  
  constraint can strengthen plausibility, but it does not override phenotype, mechanism, inheritance, or technical evidence.`
          },
          {
            title: "When rarity and strong constraint point in the same direction",
            body: `This is often the most intuitive and useful pattern.
  
  A rare or absent predicted loss-of-function variant in a gene with strong loss-of-function constraint often feels more compelling than the same type of variant in a more tolerant gene. That is because:
  
  • the variant itself is rare enough to stay plausible
  • and the gene appears depleted for pLoF variation in population data.
  
  gnomAD describes LOEUF as a direct measure of loss-of-function intolerance, and lower LOEUF values indicate stronger constraint.
  
  So the learner should understand:
  
  a rare pLoF in a strongly constrained gene is often a stronger shortlist candidate than a rare pLoF in a LoF-tolerant gene, all else being equal.
  
  That is one of the main practical reasons to combine frequency and constraint.`
          },
          {
            title: "When rarity and weak constraint point in different directions",
            body: `Now consider the opposite situation:
  
  • the variant is very rare
  • but the gene appears relatively tolerant to pLoF variation.
  
  In that case, rarity still matters, but the gene-level evidence weakens the idea that a pLoF change in this gene is automatically a high-priority mechanism. gnomAD’s constraint guidance supports this graded logic because higher LOEUF means the gene appears less depleted for pLoF variants.
  
  So the learner should understand:
  
  a rare variant can stay on the shortlist while still feeling less compelling because the gene-level constraint evidence does not strongly support that mechanism.
  
  That is a more refined judgment than rarity alone.`
          },
          {
            title: "Why “absent from gnomAD” still needs caution",
            body: `A beginner may think:
  
  “If the variant is absent from gnomAD and the gene is constrained, then that is almost enough.”
  
  That is still too quick.
  
  As gnomAD v4.1 explains, interpreting absence properly depends on site representation and allele number, and absence is strongest when the dataset had a strong chance to observe the variant if it were present.
  
  So the learner should understand:
  
  absence plus constraint can be a useful combination, but it still depends on whether absence is informative rather than just unobserved because of weaker site representation.
  
  That protects against over-reading non-observation.`
          },
          {
            title: "Why ancestry-aware frequency still matters even when a gene is constrained",
            body: `A constrained gene does not rescue a variant that is too common for the disease model.
  
  If a variant is:
  
  • rare overall
  • but relatively common in one ancestry group
  
  then that ancestry-specific frequency can still strongly weaken candidacy, even if the gene itself has low LOEUF. gnomAD explicitly emphasizes ancestry-aware frequency interpretation as a critical part of medical variant interpretation.
  
  So the learner should understand:
  
  gene constraint does not overrule ancestry-specific frequency evidence.
  
  The two clues need to be read together, not one used to cancel the other.`
          },
          {
            title: "Why variant class matters in how you use constraint",
            body: `Constraint is not equally informative for every kind of variant.
  
  In practice, loss-of-function constraint metrics such as LOEUF are most directly relevant when reviewing predicted loss-of-function variants. They are less direct for missense or synonymous variants, where other gene- and variant-level tools may be more informative. gnomAD’s gene-constraint framework is centered on pLoF depletion, which is why LOEUF is especially useful in pLoF review.
  
  So the learner should understand:
  
  constraint works best when the metric matches the variant class you are trying to reason about.
  
  That stops the learner from overusing pLoF-oriented metrics in the wrong context.`
          },
          {
            title: "A practical review mindset",
            body: `A safe beginner review pattern is:
  
  1. Is the variant frequency compatible with the disease model?
  2. If this is a pLoF-like variant, does the gene appear LoF constrained?
  3. Do these two clues strengthen each other or point in different directions?
  4. Do phenotype, inheritance, mechanism, and technical evidence still support the candidate?
  
  This kind of layered reasoning is exactly what population-database guidance encourages: use frequency and constraint as plausibility tools within a broader workflow, not as isolated truth labels.
  
  So the learner should understand:
  
  frequency and constraint are most useful when they refine a candidate already being judged in a wider clinical-bioinformatics context.`
          },
          {
            title: "Why this still is not final interpretation",
            body: `This lesson should keep the same boundary as the rest of the module.
  
  Even a variant that is:
  
  • absent or very rare
  • in a strongly constrained gene
  • technically strong
  • and phenotype-relevant
  
  is still not automatically diagnostic.
  
  Population frequency and gene constraint refine plausibility. They do not replace:
  
  • phenotype reasoning
  • inheritance logic
  • disease mechanism
  • technical evidence
  • later classification frameworks. Reviews on population database use and gnomAD’s own resources both support this more careful, layered use.
  
  So the learner should understand:
  
  frequency plus constraint can strengthen a candidate, but they still support prioritisation rather than final proof.`
          },
          {
            title: "The one-sentence takeaway",
            body: `If the learner remembers one sentence from this lesson, it should be:
  
  Population frequency helps judge whether a specific variant is rare enough, while gene constraint helps judge whether that class of variant seems poorly tolerated in the gene, so using both together can refine shortlist plausibility more effectively than using either one alone.
  
  That is the core lesson.`
          },
          {
            title: "Worked example",
            body: `Scenario
  
  A learner compares two technically strong pLoF candidates:
  
  • Variant A is absent from gnomAD and sits in a gene with low LOEUF
  • Variant B is also very rare, but sits in a gene with much higher LOEUF
  
  The learner says, “They are both rare, so they should feel equally strong.”
  
  Beginner question
  
  Why is that too simple?
  
  Good beginner answer
  
  Because rarity is only one part of the picture. Variant A is not only rare, but also sits in a gene that appears more strongly depleted for pLoF variation, which makes loss of function in that gene feel more biologically plausible. Variant B may still matter, but the gene-level constraint evidence is weaker. gnomAD’s constraint framework is designed exactly for this kind of refinement: not to replace rarity, but to add gene-level intolerance information on top of it.`
          },
          {
            title: "Lesson summary",
            body: `The learner has understood this lesson if they can say something like:
  
  “Frequency tells me whether this specific variant is rare enough, while constraint tells me whether this kind of change seems poorly tolerated in the gene. A candidate feels strongest when those two clues support each other, but I still need phenotype, inheritance, mechanism, and technical evidence as well.”`
          }
        ],
        sections: [
          {
            heading: "The central idea",
            body:
              "Population frequency and gene constraint work together because one helps you judge the plausibility of the specific variant, while the other helps you judge the plausibility of that class of change in that gene."
          }
        ],
        quiz: [
          {
            question:
              "Why can a rare pLoF variant in a strongly constrained gene feel more compelling than a rare pLoF variant in a LoF-tolerant gene?",
            options: [
              "Because rarity automatically proves pathogenicity",
              "Because rarity and strong pLoF depletion in the gene are reinforcing clues",
              "Because constrained genes always cause dominant disease",
              "Because LOEUF replaces phenotype review"
            ],
            answerIndex: 1,
            explanation:
              "The variant-level clue and the gene-level clue are pointing in the same direction, which can strengthen plausibility."
          },
          {
            question:
              "Why is rarity alone not enough?",
            options: [
              "Because rare variants are never important",
              "Because rarity does not tell you whether the gene is tolerant or intolerant to that class of change, nor whether phenotype, inheritance, or mechanism fit",
              "Because rarity only matters for common diseases",
              "Because rarity replaces ancestry-specific frequency"
            ],
            answerIndex: 1,
            explanation:
              "Rarity is useful, but it remains only one layer in a broader review framework."
          },
          {
            question:
              "Why is constraint alone not enough?",
            options: [
              "Because constraint is not useful in review",
              "Because gene-level intolerance does not make every rare variant in that gene important or diagnostic",
              "Because LOEUF only applies to population structure",
              "Because constraint makes frequency irrelevant"
            ],
            answerIndex: 1,
            explanation:
              "Constraint is a gene-level plausibility clue, not a verdict on every variant in the gene."
          },
          {
            question:
              "What is the safest overall message of this lesson?",
            options: [
              "Absent plus low LOEUF is basically enough for diagnosis",
              "Frequency and constraint are competing tools, so you usually choose one",
              "Frequency and constraint are complementary clues that refine shortlist plausibility when interpreted together in context",
              "Constraint only matters when a variant is common"
            ],
            answerIndex: 2,
            explanation:
              "This is the integrated lesson: variant-level rarity and gene-level intolerance work best as complementary plausibility tools."
          }
        ]
      },
      {
        slug: "lesson-6",
        title:
          "Lesson 6: How population databases and constraint fit into clinical bioinformatics",
        goal:
          "By the end of this lesson, the learner should be able to answer: “What are population databases and gene-constraint metrics actually used for in real clinical bioinformatics work, and how should they affect review, communication, and escalation?”",
        screens: [
          {
            title: "Lesson goal",
            body: `By the end of this lesson, the learner should be able to answer:
  
  “What are population databases and gene-constraint metrics actually used for in real clinical bioinformatics work, and how should they affect review, communication, and escalation?”
  
  This lesson finishes Module 14 by tying population evidence and constraint back to real workflow behaviour. The learner has now seen that:
  
  • population databases help judge how common a variant is
  • frequency needs to be interpreted properly using AC, AN, AF, ancestry-aware data, and sometimes FAF
  • gene constraint helps judge how tolerant a gene seems to be to certain classes of variation
  • LOEUF and pLI are useful prioritisation clues, especially for predicted loss-of-function review. gnomAD’s official resources frame both frequency and constraint as interpretation-support tools, not standalone proof systems.`
          },
          {
            title: "The central idea",
            body: `A good beginner summary is:
  
  Population databases and constraint metrics are used to refine plausibility.
  
  They help answer questions like:
  
  • is this variant too common for the disease model?
  • is its apparent absence really informative?
  • is this the kind of gene where loss-of-function variation seems poorly tolerated?
  • does this candidate deserve more or less attention than another one?
  
  So the key beginner message is:
  
  these resources help decide how strongly a candidate should be trusted as a plausible shortlist variant, not whether it is already the diagnosis. gnomAD’s v4.1 and gene-constraint materials both present these features as support for variant interpretation and prioritisation.`
          },
          {
            title: "Why population data help after initial filtering",
            body: `After earlier technical filtering and shortlist building, several candidates may still remain. Population data help sort them further.
  
  For example:
  
  • a technically strong variant may still drop quickly if its ancestry-specific frequency is too high for the disease model
  • a very rare candidate may stay higher because it remains plausible on population grounds
  • a variant that is “not observed” may become more interesting if AN is strong enough that the absence is informative.
  
  gnomAD v4.1 specifically highlights improved joint allele number across called sites, which matters for interpreting both observed and non-observed variants.
  
  So the learner should understand:
  
  population databases are not just early filters; they are ongoing plausibility tools throughout review.`
          },
          {
            title: "Why constraint helps after consequence filtering",
            body: `Earlier modules taught that predicted loss-of-function variants often rise early in prioritisation. Constraint helps refine that logic.
  
  A pLoF candidate may feel:
  
  • more compelling if the gene appears strongly depleted for pLoF variation
  • less compelling if the gene appears relatively tolerant of pLoF variation.
  
  gnomAD’s constraint help and v4.0 gene-constraint post explicitly frame LOEUF as a measure of loss-of-function intolerance, with lower values indicating stronger constraint.
  
  So the learner should understand:
  
  constraint helps answer whether a consequence class is biologically plausible in this gene, not just whether the variant annotation looks dramatic.`
          },
          {
            title: "Why these resources shape shortlist rank, not just yes/no filtering",
            body: `A useful candidate list is rarely built by one simple rule. Population frequency and constraint often work as ranking refiners.
  
  Examples:
  
  • two variants may both be rare, but the one in the more constrained gene may rise
  • two pLoF candidates may both be technically strong, but one may fall because the gene is LoF tolerant
  • a variant may look absent overall, but ancestry-aware data or AN may make that absence less impressive than it first appears.
  
  gnomAD explicitly recommends using LOEUF as a continuous metric, which supports graded prioritisation rather than binary thinking.
  
  So the learner should understand:
  
  these resources often change rank and confidence more than they create absolute yes/no decisions.`
          },
          {
            title: "Why these clues change communication",
            body: `Population evidence and constraint also affect how strongly a candidate should be described.
  
  A stronger candidate might be described as:
  
  • very rare or absent with informative site representation
  • population-compatible with the disease model
  • in a gene showing stronger relevant constraint.
  
  A weaker candidate might need wording like:
  
  • too common for the suspected disorder
  • rarity less informative because site representation is limited
  • pLoF in a relatively tolerant gene
  • population/constraint evidence does not strongly support the mechanism.
  
  Because these are plausibility clues rather than final proof, the wording should stay appropriately cautious. gnomAD’s own materials consistently present them as interpretation aids.
  
  So the learner should understand:
  
  population and constraint evidence should change how confidently a candidate is presented, not just whether it is kept.`
          },
          {
            title: "Why these clues can support escalation",
            body: `Sometimes a candidate is attractive but not straightforward:
  
  • very rare, but absence is based on weak site representation
  • pLoF, but in a gene with weaker LoF constraint
  • constrained gene, but weak phenotype fit
  • promising on population grounds, but technically uncomfortable.
  
  In these situations, population and constraint evidence help the reviewer explain why the candidate is:
  
  • worth continued attention
  • only moderately compelling
  • or deserving of cautious escalation rather than overconfident endorsement.
  
  gnomAD’s v4.0 constraint post explicitly warns that the new v4.0 constraint metrics are still experimental/beta-stage, which is exactly the kind of detail that should encourage careful communication rather than overclaiming.
  
  So the learner should understand:
  
  these resources can strengthen or weaken a case, but they can also highlight when uncertainty itself should be escalated clearly.`
          },
          {
            title: "Why none of this replaces phenotype, inheritance, or technical evidence",
            body: `This is the most important boundary in the module.
  
  A variant can be:
  
  • absent from gnomAD
  • in a strongly constrained gene
  • and still not be the answer if:
    ◦ the phenotype fit is poor
    ◦ the inheritance pattern is wrong
    ◦ the disease mechanism does not fit
    ◦ or the technical evidence is weak.
  
  Likewise, a variant can be less compelling on constraint grounds but still worth discussion if other evidence is strong.
  
  So the learner should understand:
  
  population and constraint evidence refine plausibility, but they do not outrank all other evidence automatically. gnomAD and broader population-database interpretation literature both support this layered use.`
          },
          {
            title: "Why this matters for safe autonomous practice",
            body: `This lesson also supports safer independent working.
  
  A stronger analyst is not someone who says:
  
  • “absent from gnomAD, therefore pathogenic”
  • or “low LOEUF, therefore diagnosis.”
  
  A stronger analyst says:
  
  • “this candidate remains population-compatible”
  • “absence looks informative because AN is strong”
  • “the gene appears more LoF constrained, which supports plausibility”
  • “but this still needs to be integrated with phenotype, inheritance, mechanism, and technical evidence.”
  
  That is the kind of measured reasoning these resources are meant to support. gnomAD’s own official guidance encourages exactly this kind of careful use, especially around LOEUF and release-specific threshold changes.`
          },
          {
            title: "The one-sentence takeaway",
            body: `If the learner remembers one sentence from this lesson, it should be:
  
  In clinical bioinformatics, population databases and gene-constraint metrics are used to refine how plausible a candidate looks by combining variant-level rarity with gene-level intolerance, which helps shape shortlist rank, caution in communication, and escalation, but still does not replace phenotype, inheritance, technical evidence, or final interpretation.
  
  That is the core lesson.`
          },
          {
            title: "Worked example",
            body: `Scenario
  
  Two technically strong pLoF candidates remain after earlier filtering.
  
  Variant A
  
  • absent from gnomAD with strong site representation
  • in a gene with low LOEUF
  • phenotype-relevant
  
  Variant B
  
  • also rare
  • but the site has weaker AN support in population data
  • and the gene has much higher LOEUF
  
  A learner says, “They are both rare pLoF variants, so they should be treated about the same.”
  
  Beginner question
  
  Why is that too simple?
  
  Good beginner answer
  
  Because rarity and pLoF consequence are only part of the picture. Variant A looks more compelling because its absence is more informative when site representation is strong, and the gene appears more constrained against loss-of-function variation. Variant B may still deserve review, but both the population evidence and the gene-level constraint evidence are weaker. gnomAD’s v4.1 and gene-constraint resources are designed to support exactly this kind of refinement in shortlist plausibility.`
          },
          {
            title: "Lesson summary",
            body: `The learner has understood this lesson if they can say something like:
  
  “Population databases help me judge whether a specific variant is rare enough, and constraint metrics help me judge whether that class of variant seems poorly tolerated in the gene. Together they refine how plausible a candidate feels, but they still sit inside a broader workflow that includes phenotype, inheritance, mechanism, and technical evidence.”`
          }
        ],
        sections: [
          {
            heading: "The central idea",
            body:
              "Population databases and constraint metrics are used to refine plausibility."
          }
        ],
        quiz: [
          {
            question:
              "What is the main practical role of population databases in clinical review?",
            options: [
              "To prove pathogenicity directly",
              "To judge how common a variant is and whether that frequency is compatible with the disease model",
              "To replace phenotype collection",
              "To decide transcript choice"
            ],
            answerIndex: 1,
            explanation:
              "Population databases such as gnomAD are reference resources for judging observed variant frequency and compatibility with the disease context."
          },
          {
            question:
              "What is the main practical role of LOEUF-like constraint metrics?",
            options: [
              "To prove a gene causes disease",
              "To estimate how intolerant a gene appears to be to pLoF variation and thereby refine plausibility of pLoF candidates",
              "To replace population frequency",
              "To classify missense variants directly"
            ],
            answerIndex: 1,
            explanation:
              "LOEUF is a gene-level pLoF intolerance metric, useful for refining pLoF candidate plausibility."
          },
          {
            question:
              "Why is it unsafe to say “absent from gnomAD plus low LOEUF equals diagnosis”?",
            options: [
              "Because both clues are irrelevant",
              "Because both are plausibility clues that still need phenotype, inheritance, mechanism, and technical evidence",
              "Because LOEUF only applies to common variants",
              "Because gnomAD does not report rare variants"
            ],
            answerIndex: 1,
            explanation:
              "This is the key boundary of the module: population and constraint evidence strengthen or weaken plausibility, but they are not final proof."
          },
          {
            question:
              "What is the safest overall message of Module 14?",
            options: [
              "Population databases and constraint metrics mainly exist to create hard pass/fail rules",
              "Variant rarity and gene constraint are complementary clues that refine shortlist plausibility and should be interpreted in context",
              "Low LOEUF is usually enough for clinical reporting",
              "Presence in gnomAD makes a candidate irrelevant in all situations"
            ],
            answerIndex: 1,
            explanation:
              "That is the integrated lesson of the module: variant-level population evidence and gene-level intolerance work together best as contextual prioritisation tools."
          }
        ]
      }
    ]
  };