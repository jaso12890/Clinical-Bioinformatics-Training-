export const module13 = {
    slug: "module-13",
    title: "Module 13: Variant filtering and prioritisation",
    description:
      "Filtering, population frequency, consequence, inheritance, phenotype, panel context, and how shortlists are built safely in clinical bioinformatics.",
    lessons: [
      {
        slug: "lesson-1",
        title: "Lesson 1: What are filtering and prioritisation?",
        goal:
          "By the end of this lesson, the learner should be able to answer: “What do filtering and prioritisation mean in clinical bioinformatics, and how are they different from final interpretation?”",
        screens: [
          {
            title: "Lesson goal",
            body: `By the end of this lesson, the learner should be able to answer:
  
  “What do filtering and prioritisation mean in clinical bioinformatics, and how are they different from final interpretation?”
  
  This lesson starts Module 13 because the learner now understands how variant calls are generated, how technical confidence is judged, and how artefacts can mislead review. The next step is to understand what happens after that:
  how a large set of technically reviewable variants is reduced to a smaller shortlist that is worth serious downstream attention.
  
  Population resources such as gnomAD exist partly to support exactly this kind of narrowing in rare-disease work, and phenotype-driven tools such as Exomiser exist to rank candidate variants and genes for diagnosis.`
          },
          {
            title: "The central idea",
            body: `A good beginner summary is:
  
  Filtering removes or deprioritises variants that are unlikely to matter, while prioritisation ranks the remaining variants so the most plausible candidates rise to the top.
  
  That means both steps are about reducing the search space. They do not tell you with certainty that a remaining variant is the answer. They tell you that it is more worth attention than many others.
  
  So the key beginner message is:
  
  filtering and prioritisation are about building a sensible shortlist, not making the final diagnosis. gnomAD is a population resource used to help assess rarity, Exomiser is designed to prioritize candidates using phenotype and other evidence, and PanelApp provides curated virtual gene panels to help focus analysis in the appropriate clinical context.`
          },
          {
            title: "Why filtering is needed at all",
            body: `A typical call set contains far more variants than can be reviewed one by one as serious diagnostic candidates. Many variants will be:
  
  • too common
  • technically weak
  • outside the relevant test scope
  • in genes unrelated to the phenotype
  • inconsistent with the inheritance model
  • or otherwise poor candidates.
  
  That is why rare-disease workflows use structured filtering and ranking rather than trying to interpret every called variant equally. gnomAD’s population-frequency framework and Exomiser’s phenotype-driven ranking are both built around the reality that the initial search space is too large without systematic narrowing.
  
  So the learner should understand:
  
  filtering is not optional tidying; it is what makes review manageable and clinically realistic.`
          },
          {
            title: "What filtering means in practice",
            body: `At beginner level, filtering means reducing the number of variants under serious consideration by applying rules or criteria such as:
  
  • technical confidence
  • population frequency
  • variant consequence
  • inheritance pattern
  • phenotype relevance
  • test or panel scope.
  
  The point is not that every filtered-out variant is “proven irrelevant” in an absolute sense. The point is that the workflow is trying to remove variants that are unlikely to be useful first, so attention can be focused on the more plausible remainder.
  
  So the learner should understand:
  
  filtering is mainly a narrowing step. It asks,
  
  “Which variants are poor candidates and can safely be pushed down or removed from the immediate shortlist?”
  
  That is a very different question from:
  
  • is this variant pathogenic?
  • is this definitely the diagnosis?`
          },
          {
            title: "What prioritisation means in practice",
            body: `Once filtering has reduced the search space, prioritisation asks:
  
  “Of the variants that remain, which ones deserve the highest attention first?”
  
  This is where ranking becomes important. Two variants may both survive basic filtering, but one may rise higher because:
  
  • it is rarer
  • the consequence is more compelling
  • it fits the inheritance model better
  • it is in a more phenotype-matched gene
  • it is in an appropriate panel or test context.
  
  Exomiser is a clear example of this logic: it is designed to prioritize candidate variants and genes for diagnosis by integrating phenotype and variant information.
  
  So the learner should understand:
  
  prioritisation is a ranking step, not a proof step.`
          },
          {
            title: "Why filtering and prioritisation are not the same",
            body: `These words are closely related, so beginners often blur them together.
  
  A safe distinction is:
  
  • Filtering mainly reduces the pool
  • Prioritisation mainly orders what remains
  
  For example:
  
  • filtering might remove obviously common variants
  • prioritisation might then rank the remaining rare variants by phenotype fit and inheritance relevance.
  
  So the learner should understand:
  
  filtering and prioritisation usually work together, but they are not identical.
  
  This matters because good workflows often use both:
  
  1. cut down the noise
  2. rank the survivors.
  
  That structure is one of the foundations of rare-disease analysis.`
          },
          {
            title: "Why this is not the same as variant classification",
            body: `This is one of the most important boundaries in the whole module.
  
  A learner may think:
  
  “If a variant reaches the shortlist, does that mean it is likely pathogenic?”
  
  Not necessarily.
  
  A prioritised variant is simply a variant that currently looks more worth serious downstream review than many others. It may still turn out to be:
  
  • technically weak on deeper review
  • too common for the final model
  • a poor phenotype fit
  • mechanistically unconvincing
  • or ultimately not the diagnosis.
  
  So the learner should understand:
  
  shortlisting is not classification.
  
  A filtered and prioritised variant is a candidate, not a final answer.
  
  That is essential for staying within the correct role boundary in clinical bioinformatics.`
          },
          {
            title: "Why earlier modules still matter during filtering",
            body: `Module 13 does not replace the earlier modules. It depends on them.
  
  A variant should not rise in priority just because it looks biologically attractive if:
  
  • the technical evidence is weak
  • the region is artefact-prone
  • the read-level evidence is uncomfortable
  • the annotation context is confused.
  
  So the learner should understand:
  
  good filtering starts from technically credible evidence, not just biologically interesting ideas.
  
  That means Modules 10–12 still matter here:
  
  • technical confidence
  • artefact awareness
  • visual review.
  
  Filtering is built on top of those earlier checks, not instead of them.`
          },
          {
            title: "Why different filters are layered together",
            body: `Real filtering does not rely on one single factor.
  
  For example:
  
  • frequency alone is powerful, but not enough
  • consequence alone is useful, but not enough
  • phenotype fit alone is helpful, but not enough
  • inheritance alone can narrow the list strongly, but not enough by itself.
  
  That is why this module is structured the way it is:
  
  • frequency
  • consequence
  • inheritance
  • phenotype
  • panel/test context
  • and earlier technical evidence.
  
  So the learner should understand:
  
  filtering is usually layered, not one-dimensional.
  
  That layered approach is what makes a shortlist more defensible.`
          },
          {
            title: "Why curated panels and phenotype tools matter here",
            body: `This lesson is only introducing the idea, but it is important to mention early.
  
  PanelApp is a publicly available knowledgebase used to create, store, and query disorder-related virtual gene panels, and Genomics England panel pages explicitly state that some panels are used as virtual panels in the NHS Genomic Medicine Service for defined clinical indications.
  
  So the learner should understand:
  
  filtering and prioritisation are not done in a vacuum.
  
  They often happen inside a specific clinical indication, test scope, and gene-panel context.
  
  That is one reason why a technically strong variant can still be a poor candidate if it sits outside the relevant context.`
          },
          {
            title: "The one-sentence takeaway",
            body: `If the learner remembers one sentence from this lesson, it should be:
  
  Filtering and prioritisation are structured ways of reducing a technically credible call set into a smaller, more defensible shortlist by removing unlikely candidates and ranking the remaining ones for review, but a shortlisted variant is still only a candidate, not a final diagnosis.
  
  That is the core lesson.`
          },
          {
            title: "Worked example",
            body: `Scenario
  
  A learner says, “We found 200 rare variants, so now we just need to decide which one is pathogenic.”
  
  Beginner question
  
  Why is that too quick?
  
  Good beginner answer
  
  Because even after basic rarity filtering, the search space is still usually too large. The next steps are to use structured prioritisation factors such as consequence, inheritance, phenotype relevance, panel context, and technical confidence to reduce the list further. Tools like Exomiser are designed to prioritize candidate variants and genes for diagnosis, which shows that ranking still matters after initial filtering. A rare variant is not automatically the answer, and a shortlist is not the same as a final classified result.`
          },
          {
            title: "Lesson summary",
            body: `The learner has understood this lesson if they can say something like:
  
  “Filtering reduces the number of variants I need to think about seriously, and prioritisation ranks the remaining candidates for review. Both are ways of shrinking the search space safely, but neither one is the same as final classification or diagnosis.”`
          }
        ],
        sections: [
          {
            heading: "The central idea",
            body:
              "Filtering removes or deprioritises variants that are unlikely to matter, while prioritisation ranks the remaining variants so the most plausible candidates rise to the top."
          }
        ],
        quiz: [
          {
            question:
              "What is the best beginner description of filtering?",
            options: [
              "Proving which variant is pathogenic",
              "Reducing the number of variants under serious consideration by removing or lowering the priority of unlikely candidates",
              "Assigning ACMG evidence codes",
              "Choosing the final report wording"
            ],
            answerIndex: 1,
            explanation:
              "Filtering is a narrowing step. It reduces the search space so attention can focus on the more plausible variants that remain."
          },
          {
            question:
              "What is the best beginner description of prioritisation?",
            options: [
              "Deleting all variants outside a gene panel",
              "Ranking the remaining candidate variants so the most plausible ones rise to the top for review",
              "Replacing phenotype review with software",
              "Confirming the final diagnosis"
            ],
            answerIndex: 1,
            explanation:
              "Exomiser is an example of phenotype-driven candidate prioritisation, which shows that prioritisation is about ranking candidates for diagnosis rather than proving one immediately."
          },
          {
            question:
              "Why is it unsafe to treat a shortlisted variant as the final answer?",
            options: [
              "Because shortlists are only used in research",
              "Because filtering and prioritisation identify candidates worth attention, not final classified conclusions",
              "Because no rare variants are ever real",
              "Because technical confidence no longer matters after filtering"
            ],
            answerIndex: 1,
            explanation:
              "A shortlisted variant has survived narrowing and ranking steps, but that does not make it automatically pathogenic or diagnostic."
          },
          {
            question: "Which statement is most accurate?",
            options: [
              "Filtering and prioritisation are the same thing",
              "Filtering reduces the pool, while prioritisation ranks what remains",
              "Prioritisation only matters if filtering failed",
              "Frequency alone is usually enough to finish review"
            ],
            answerIndex: 1,
            explanation:
              "This is the core structural distinction of the lesson: filter first to remove unlikely candidates, then prioritise the survivors."
          }
        ]
      },
      {
        slug: "lesson-2",
        title:
          "Lesson 2: Population frequency and why common variants are usually filtered early",
        goal:
          "By the end of this lesson, the learner should be able to answer: “Why is population frequency such a powerful early filter in rare-disease analysis, and why can a variant that is too common usually be pushed down quickly?”",
        screens: [
          {
            title: "Lesson goal",
            body: `By the end of this lesson, the learner should be able to answer:
  
  “Why is population frequency such a powerful early filter in rare-disease analysis, and why can a variant that is too common usually be pushed down quickly?”
  
  This lesson follows the introduction to filtering and prioritisation because one of the earliest and most powerful narrowing steps in rare-disease workflows is asking:
  
  “Is this variant too common to plausibly explain the disorder I am looking for?”
  
  Population resources such as gnomAD exist partly to support this exact question by providing large-scale allele-frequency data across diverse populations. gnomAD also provides measures such as filtering allele frequency (FAF) to help users decide whether a variant is too common for a particular disease model.`
          },
          {
            title: "The central idea",
            body: `A good beginner summary is:
  
  If a variant is too common in the general population, it is usually a poor candidate for a rare severe Mendelian disorder.
  
  That does not mean every rare variant is important. But it does mean that obvious commonness is often one of the fastest ways to reduce the search space safely. gnomAD’s documentation and associated publications are built around population reference data for exactly this kind of interpretation support.
  
  So the key beginner message is:
  
  common variants are often filtered early not because frequency proves benignity in every context, but because frequency can quickly tell you that many variants are implausible candidates for a rare disease model.`
          },
          {
            title: "Why frequency is so useful early in rare-disease filtering",
            body: `A typical rare-disease call set can still contain many technically credible variants. Frequency helps because it can eliminate a large proportion of obviously poor candidates very early.
  
  The logic is simple:
  
  • a severe rare Mendelian disorder is, by definition, uncommon
  • therefore a causative variant for that disorder is often expected to be rare in the general population
  • if a variant is seen too often in population databases, it becomes much harder to argue that it is the explanation for a rare severe disease in that model.
  
  This is exactly why large reference datasets like gnomAD are so widely used in rare-disease workflows.
  
  So the learner should understand:
  
  frequency is powerful because it removes implausible candidates fast, before deeper review is wasted on them.`
          },
          {
            title: "What population frequency actually means",
            body: `At beginner level, population frequency means how often a variant is observed in a reference population dataset.
  
  This can be expressed in several related ways, such as:
  
  • allele count: how many times the variant allele was seen
  • allele number: how many total alleles were assessed at that site
  • allele frequency (AF): the proportion of observed alleles carrying the variant.
  
  gnomAD provides all of these kinds of values and also stratifies frequencies by population groups, which is important for more accurate interpretation.
  
  So the learner should understand:
  
  frequency is not a vague idea like “this looks rare.” It is a measurable property in reference datasets.
  
  That is why it is so useful in structured filtering.`
          },
          {
            title: "Why “too common” depends on disease context",
            body: `This lesson needs an important caution.
  
  A learner might think:
  
  “If a variant is seen at all in gnomAD, then it cannot matter.”
  
  That is wrong.
  
  The real question is not:
  
  • is the variant present in the population at all?
  
  The real question is:
  
  • is it too common for this disease model?
  
  That depends on things like:
  
  • disease prevalence
  • inheritance pattern
  • penetrance
  • allelic heterogeneity
  • how severe and early-onset the disorder is.
  
  This is why gnomAD includes filtering allele frequency (FAF) and why rare-disease interpretation guidance often treats frequency in a disease-specific way rather than using one simplistic rule for everything.
  
  So the learner should understand:
  
  frequency is powerful, but it is still context-aware.
  
  That is one of the most important safety boundaries in this lesson.`
          },
          {
            title: "Why ancestry-specific frequency matters",
            body: `Another important beginner point is that population frequency should not be treated as if all populations were identical.
  
  gnomAD provides frequencies across multiple ancestry groups because a variant that is rare overall may be much more common in one population, and that can change how plausible it is as a disease candidate.
  
  So the learner should understand:
  
  overall frequency can be helpful, but ancestry-specific frequency can be even more informative.
  
  This matters because a variant can look “rare” if you only glance at one summary number, while actually being too common in the population context most relevant to the case.`
          },
          {
            title: "Why common variants are often filtered before consequence or phenotype",
            body: `In many workflows, population frequency is one of the earliest filters because it is often cheap, fast, and powerful.
  
  For example, if a variant is clearly too common for the disease model, it often does not matter that:
  
  • it is technically strong
  • it has an interesting consequence label
  • it is in a gene that seems relevant.
  
  That does not mean consequence and phenotype are unimportant. It means frequency can often rule out obviously implausible candidates before more detailed reasoning is needed.
  
  So the learner should understand:
  
  frequency is often used early because it is a very efficient way to remove noise from the candidate list.
  
  That is why it deserves its own lesson.`
          },
          {
            title: "Why rarity is useful but not enough",
            body: `This is another key boundary.
  
  A learner may think:
  
  “If the variant is rare, that makes it a strong candidate.”
  
  Not necessarily.
  
  Rarity helps a variant survive early filtering, but many rare variants are still:
  
  • biologically irrelevant
  • poor phenotype matches
  • technically weak
  • outside the relevant inheritance model
  • or otherwise poor candidates.
  
  So the learner should understand:
  
  rarity is often necessary for a rare-disease candidate, but it is not sufficient.
  
  That is why the next lessons still need:
  
  • consequence
  • inheritance
  • phenotype
  • panel and test context
  • and earlier technical review.
  
  A rare variant is often just a survivor of an early filter, not an answer.`
          },
          {
            title: "Why common does not always mean irrelevant in every possible situation",
            body: `This lesson should also avoid oversimplification in the other direction.
  
  There are situations where a more common variant may still matter, for example:
  
  • lower-penetrance effects
  • risk alleles
  • pharmacogenomic relevance
  • non-Mendelian contexts
  • or disease models outside the classic rare severe monogenic framework.
  
  But this module is about rare-disease filtering and prioritisation. In that setting, clearly common variants are often poor first-tier candidates.
  
  So the learner should understand:
  
  “common variants are filtered early” is mainly a rare-disease workflow principle, not a universal statement about all genomic medicine.
  
  That keeps the lesson accurate without making it too complicated for this stage.`
          },
          {
            title: "How frequency fits with earlier technical filtering",
            body: `Frequency filtering only makes sense after or alongside earlier technical review.
  
  A technically messy variant should not rise in importance just because it is rare. And a technically clean but obviously common variant may still drop in priority fast.
  
  So the learner should understand:
  
  frequency is one layer in filtering, not a replacement for technical confidence.
  
  This links Module 13 back to Modules 10–12:
  
  • technical credibility first
  • then structured prioritisation layers like frequency.
  
  That order is important for safe workflows.`
          },
          {
            title: "The one-sentence takeaway",
            body: `If the learner remembers one sentence from this lesson, it should be:
  
  In rare-disease analysis, population frequency is a powerful early filter because a variant that is too common in reference populations is usually a poor candidate for a rare severe Mendelian disorder, although the exact meaning of “too common” still depends on disease context.
  
  That is the core lesson.`
          },
          {
            title: "Worked example",
            body: `Scenario
  
  A learner sees a technically strong variant with an interesting consequence in a relevant-looking gene. But the variant is present at a frequency in gnomAD that is much higher than expected for a rare severe dominant disorder.
  
  Beginner question
  
  Why should this strongly reduce its priority?
  
  Good beginner answer
  
  Because even though the variant is technically strong and biologically interesting on first glance, its population frequency makes it a poor fit for a rare severe dominant disease model. In rare-disease filtering, obvious commonness is one of the strongest early reasons to push a candidate down. gnomAD and related interpretation practices are used specifically to help identify variants that are too common for a given disease context. That does not prove the variant is meaningless in every possible setting, but it makes it much less plausible as the explanation for that rare monogenic disorder.`
          },
          {
            title: "Lesson summary",
            body: `The learner has understood this lesson if they can say something like:
  
  “Population frequency is one of the strongest early filters in rare-disease work because clearly common variants are usually poor candidates. But rarity alone does not make a variant the answer, and the meaning of frequency still depends on disease context and population background.”`
          }
        ],
        sections: [
          {
            heading: "The central idea",
            body:
              "If a variant is too common in the general population, it is usually a poor candidate for a rare severe Mendelian disorder."
          }
        ],
        quiz: [
          {
            question:
              "Why is population frequency such a useful early filter in rare-disease analysis?",
            options: [
              "Because any variant seen in gnomAD must be benign",
              "Because variants that are clearly too common are usually poor candidates for rare severe Mendelian disorders",
              "Because frequency replaces the need for phenotype review",
              "Because frequency alone proves pathogenicity"
            ],
            answerIndex: 1,
            explanation:
              "This is the main workflow logic of the lesson: obvious commonness can remove implausible candidates early and efficiently."
          },
          {
            question:
              "What is the safest interpretation of a variant being present in a population database?",
            options: [
              "It is automatically irrelevant",
              "It is automatically the diagnosis",
              "Its frequency needs to be considered in the context of the disease model rather than treated as a simple yes/no rule",
              "It no longer needs technical review"
            ],
            answerIndex: 2,
            explanation:
              "The presence of a variant in a population dataset is not the real question by itself; the important question is whether it is too common for the disease context."
          },
          {
            question: "Why can ancestry-specific frequency be important?",
            options: [
              "Because overall frequency is never useful",
              "Because a variant may appear rare overall but be much more common in a particular population, which changes how plausible it is as a disease candidate",
              "Because ancestry-specific data only matter for research studies",
              "Because population frequencies are identical across all ancestry groups"
            ],
            answerIndex: 1,
            explanation:
              "gnomAD provides ancestry-stratified frequencies because this can materially change interpretation and filtering."
          },
          {
            question: "Which statement is most accurate?",
            options: [
              "Rare automatically means pathogenic",
              "Common automatically means irrelevant in every area of genomics",
              "Rarity helps a variant survive early filtering in rare-disease analysis, but further prioritisation is still needed",
              "Frequency is more important than technical confidence"
            ],
            answerIndex: 2,
            explanation:
              "Rarity is helpful for early filtering, but it is not enough on its own. Technical confidence, consequence, inheritance, phenotype, and test context still matter."
          }
        ]
      },
      {
        slug: "lesson-3",
        title: "Lesson 3: Consequence and variant type in prioritisation",
        goal:
          "By the end of this lesson, the learner should be able to answer: “Why do some variant consequences and variant types rise higher in priority than others, and why is consequence alone still not enough?”",
        screens: [
          {
            title: "Lesson goal",
            body: `By the end of this lesson, the learner should be able to answer:
  
  “Why do some variant consequences and variant types rise higher in priority than others, and why is consequence alone still not enough?”
  
  This lesson follows population frequency because once the learner has removed many obviously common poor candidates, the next question is often:
  
  “Among the rarer variants that remain, which kinds of consequences deserve closer attention first?”
  
  Annotation tools such as Ensembl VEP use Sequence Ontology consequence terms to describe the predicted effect of a variant on a transcript, including terms such as missense_variant, synonymous_variant, stop_gained, and splice_donor_variant.`
          },
          {
            title: "The central idea",
            body: `A good beginner summary is:
  
  Variant consequence matters because some kinds of sequence change are more likely than others to alter gene function in a way that could matter clinically.
  
  That is why filtering and prioritisation often give more attention to consequences such as:
  
  • protein-truncating changes
  • canonical splice-site changes
  • missense changes in the right context
  
  than to consequences such as:
  
  • synonymous changes
  • clearly upstream/downstream changes
  • or many intronic changes without obvious splice relevance.
  
  Ensembl’s consequence framework explicitly distinguishes these consequence types using Sequence Ontology terms.
  
  So the key beginner message is:
  
  consequence helps decide which variants deserve earlier attention, but consequence does not decide the final answer by itself.`
          },
          {
            title: "What “consequence” means in this module",
            body: `At beginner level, consequence means the predicted effect of a variant on a transcript or protein according to annotation rules.
  
  For example, Ensembl VEP can assign transcript-level consequences such as:
  
  • synonymous_variant
  • missense_variant
  • frameshift_variant
  • stop_gained
  • splice_donor_variant
  • splice_acceptor_variant.
  
  So the learner should understand:
  
  consequence is an annotation-level prediction about what kind of change the variant appears to cause in the transcript or protein.
  
  That is very useful in prioritisation, but it is still only one layer of evidence.`
          },
          {
            title: "Why some consequences often rise earlier in the shortlist",
            body: `In many rare-disease workflows, some consequences are often reviewed earlier because they are more likely to represent substantial coding disruption.
  
  Examples that often rise early include:
  
  • stop_gained
  • frameshift_variant
  • splice_donor_variant
  • splice_acceptor_variant
  • and, in the right context, some missense_variant calls.
  
  Ensembl’s consequence framework lists these as distinct predicted classes because they can affect coding sequence or splice structure more directly than many other consequence types.
  
  So the learner should understand:
  
  a consequence that looks more disruptive often rises earlier in prioritisation because it may be more biologically significant than a clearly less disruptive-looking change.
  
  That is why consequence is such a common ranking feature.`
          },
          {
            title: "Why synonymous and clearly non-coding consequences are often deprioritised early",
            body: `At beginner level, many workflows deprioritise variants that are:
  
  • synonymous
  • clearly far from splice boundaries
  • or otherwise predicted to have less obvious coding impact.
  
  Ensembl’s glossary defines synonymous variant as a change with no resulting amino acid change, and its consequence framework separates clearly coding-disruptive classes from many lower-priority classes.
  
  So the learner should understand:
  
  many lower-priority consequence classes are filtered down early not because they are impossible to matter, but because they are usually less efficient starting points in rare-disease shortlisting.
  
  This is about workflow efficiency, not absolute impossibility.`
          },
          {
            title: "Why missense variants sit in the middle",
            body: `Missense variants are one of the most important consequence classes in clinical genomics, but they are also one of the hardest to interpret safely.
  
  A missense_variant changes one amino acid in the encoded protein, which may:
  
  • matter a lot
  • matter a little
  • or not matter in that disease context at all.
  
  Ensembl includes missense as a distinct consequence class because it is meaningfully different from synonymous and truncating categories, but consequence alone cannot tell you whether a specific missense variant is truly important.
  
  So the learner should understand:
  
  missense variants often stay on the shortlist, but they usually need more context than obviously truncating-looking consequences.
  
  That is why consequence is useful but not decisive.`
          },
          {
            title: "Why consequence must be interpreted with disease mechanism",
            body: `This is one of the most important safety boundaries in the lesson.
  
  A learner may think:
  
  “A more severe-looking consequence must always be the stronger candidate.”
  
  That is too simple.
  
  A truncating-looking variant may be compelling in a gene where loss of function is a known disease mechanism, but much less compelling in a gene where disease is mainly caused by specific missense or gain-of-function changes. This is exactly why consequence is helpful for prioritisation but not enough for final interpretation on its own.
  
  So the learner should understand:
  
  consequence matters most when it fits the disease mechanism of the gene and condition being considered.
  
  That connects this lesson back to the earlier interpretation-awareness modules:
  
  • mechanism matters
  • role boundaries still matter
  • prioritisation is not formal classification.`
          },
          {
            title: "Why transcript context still matters here",
            body: `Module 9 remains important.
  
  A single genomic variant can have different consequences depending on:
  
  • which transcript is used
  • whether the transcript is coding or non-coding
  • whether the variant falls in an exon in one transcript but not another.
  
  Ensembl explicitly predicts consequences per allele-transcript combination, which means consequence is not completely transcript-free.
  
  So the learner should understand:
  
  when you use consequence in prioritisation, you are still depending on transcript context.
  
  That is why a consequence label should never be read in isolation from the transcript model behind it.`
          },
          {
            title: "Why consequence alone is never enough",
            body: `This is the core boundary of the lesson.
  
  A variant with a severe-looking consequence may still be:
  
  • too common
  • technically weak
  • in the wrong inheritance pattern
  • a poor phenotype fit
  • outside the relevant panel or test scope
  • in a gene with the wrong mechanism context.
  
  And a lower-priority consequence may still matter in some cases.
  
  So the learner should understand:
  
  consequence is a ranking clue, not a final verdict.
  
  That is why this module still needs:
  
  • inheritance
  • phenotype
  • panel context
  • and earlier technical filtering.
  
  The safest way to think about consequence is:
  
  it helps decide where to look first, not what to conclude last.`
          },
          {
            title: "Why panel and test context still affect consequence prioritisation",
            body: `PanelApp is useful here because prioritisation does not happen in a vacuum. Genomics England describes PanelApp as a publicly available knowledge base for disorder-related gene panels, and its documentation says diagnostic-grade green genes and their inheritance information are used in genome interpretation workflows in the NHS Genomic Medicine Service context.
  
  So the learner should understand:
  
  a severe-looking consequence in an irrelevant gene is usually a poorer candidate than a somewhat less dramatic-looking consequence in a gene that is strongly relevant to the indication and panel context.
  
  That is one of the reasons prioritisation has to stay layered.`
          },
          {
            title: "The one-sentence takeaway",
            body: `If the learner remembers one sentence from this lesson, it should be:
  
  Variant consequence helps prioritisation because some classes of change are more likely than others to alter gene function, but consequence is still only one ranking clue and must be interpreted alongside transcript context, disease mechanism, inheritance, phenotype, and technical credibility.
  
  That is the core lesson.`
          },
          {
            title: "Worked example",
            body: `Scenario
  
  A learner is comparing two rare, technically strong variants in relevant genes.
  
  • Variant A is annotated as stop_gained
  • Variant B is annotated as synonymous_variant
  
  The learner says, “Variant A is obviously the answer.”
  
  Beginner question
  
  Why is that too quick?
  
  Good beginner answer
  
  Because Variant A’s consequence is more likely to attract attention in prioritisation, but consequence alone does not prove it is the answer. It still needs to fit the inheritance model, phenotype, panel context, and disease mechanism of the gene. Ensembl’s consequence system is useful because it distinguishes consequence classes such as stop_gained and synonymous_variant, but those labels are prioritisation clues rather than final conclusions. So Variant A may justifiably rise higher in the shortlist, but it is still only a candidate.`
          },
          {
            title: "Lesson summary",
            body: `The learner has understood this lesson if they can say something like:
  
  “Consequence helps me prioritise which rare, technically credible variants deserve earlier attention. More disruptive-looking consequences often rise higher, but they still need to fit transcript context, disease mechanism, inheritance, phenotype, and the broader clinical workflow.”`
          }
        ],
        sections: [
          {
            heading: "The central idea",
            body:
              "Variant consequence matters because some kinds of sequence change are more likely than others to alter gene function in a way that could matter clinically."
          }
        ],
        quiz: [
          {
            question: "Why is consequence useful in variant prioritisation?",
            options: [
              "Because it proves pathogenicity directly",
              "Because it helps identify which variants may have more biologically significant effects on transcripts or proteins",
              "Because it replaces frequency filtering",
              "Because consequence terms are only used for research"
            ],
            answerIndex: 1,
            explanation:
              "Consequence terms describe the predicted type of effect on a transcript or protein, which makes them useful for ranking candidates earlier or later in review."
          },
          {
            question:
              "Which type of consequence often rises earlier in rare-disease prioritisation?",
            options: [
              "A clearly synonymous variant with no other supporting context",
              "A stop_gained or frameshift-like coding-disruptive variant in the right context",
              "Any intronic variant far from splice context",
              "Every missense variant equally"
            ],
            answerIndex: 1,
            explanation:
              "Coding-disruptive-looking consequences often attract earlier attention because they may represent stronger functional disruption, though context still matters."
          },
          {
            question:
              "Why is it unsafe to let consequence alone decide the shortlist?",
            options: [
              "Because consequence labels are random",
              "Because the importance of a consequence still depends on things like disease mechanism, transcript choice, inheritance, phenotype, and technical confidence",
              "Because consequence is only useful after final diagnosis",
              "Because all missense variants are benign"
            ],
            answerIndex: 1,
            explanation:
              "Consequence is one important ranking clue, but it is not sufficient on its own for safe prioritisation."
          },
          {
            question: "Which statement is most accurate?",
            options: [
              "A severe-looking consequence automatically makes a variant the diagnosis",
              "Consequence and transcript context are unrelated",
              "Consequence helps decide which variants deserve earlier attention, but it is still only part of a layered prioritisation workflow",
              "Synonymous variants are always irrelevant in all areas of genomics"
            ],
            answerIndex: 2,
            explanation:
              "That is the main workflow point of the lesson: consequence is useful for ranking candidates, but it is not a standalone answer."
          }
        ]
      },
      {
        slug: "lesson-4",
        title:
          "Lesson 4: Inheritance, family data, and why trio context changes filtering",
        goal:
          "By the end of this lesson, the learner should be able to answer: “Why does inheritance matter so much in variant filtering, and how can trio or family data dramatically shrink the shortlist?”",
        screens: [
          {
            title: "Lesson goal",
            body: `By the end of this lesson, the learner should be able to answer:
  
  “Why does inheritance matter so much in variant filtering, and how can trio or family data dramatically shrink the shortlist?”
  
  This lesson follows population frequency and consequence because even after frequency and consequence filtering, many rare, technically credible variants can still remain. One of the most powerful next steps is to ask:
  
  “Does this variant fit the inheritance pattern expected for the disorder and family?”
  
  Genomics England’s rare disease analysis guidance includes segregation filters such as de novo filtering, and family-based rare disease workflows commonly use trio and multiplex-family structures to identify de novo and inherited candidate variants.`
          },
          {
            title: "The central idea",
            body: `A good beginner summary is:
  
  Inheritance matters because a variant that fits the expected family pattern usually deserves higher priority than a variant that does not.
  
  That means filtering is not only about:
  
  • how rare the variant is
  • or what consequence label it has.
  
  It is also about whether the variant appears in the family in a way that matches the disease model. Genomics England’s rare disease workflow guidance explicitly includes segregation filters, including de novo filtering, as part of analysis.
  
  So the key beginner message is:
  
  family structure can turn a long variant list into a much shorter and more defensible shortlist.`
          },
          {
            title: "What inheritance-aware filtering means",
            body: `At beginner level, inheritance-aware filtering means using knowledge of who in the family has or does not have the variant to narrow candidates.
  
  For example, the workflow may ask:
  
  • is this variant de novo in the child?
  • is it inherited from one affected parent in a dominant-looking family?
  • are there biallelic variants consistent with a recessive model?
  • are there two variants in the same gene that could fit a compound heterozygous model?
  
  Genomics England’s guidance explicitly refers to segregation filters, and research planning documents for family-based genome analysis describe using trios and families to identify de novo and inherited variation.
  
  So the learner should understand:
  
  inheritance-aware filtering uses family data to remove candidates that do not match the plausible transmission model.`
          },
          {
            title: "Why trio data is especially powerful",
            body: `A trio usually means sequencing the child plus both parents.
  
  This is powerful because it lets the workflow compare the child’s variants directly against parental genotypes. In practice, that can make it much easier to identify:
  
  • likely de novo variants
  • inherited heterozygous variants
  • recessive-looking patterns
  • possible compound heterozygous models.
  
  Genomics England’s rare disease guidance includes a de novo segregation filter, and family-based genome analysis documents explicitly describe trios as a framework for identifying de novo and inherited candidate variants.
  
  So the learner should understand:
  
  trio data is powerful because it adds immediate family context to each candidate variant instead of leaving the child’s variants as isolated findings.
  
  That can shrink the shortlist dramatically.`
          },
          {
            title: "Why de novo variants often rise quickly in the right context",
            body: `In a disorder suspected to be caused by a de novo dominant event, a rare, technically credible variant that is present in the child and absent in both parents often rises quickly in priority.
  
  That is exactly why de novo filtering is a standard part of some family-based rare disease workflows. Genomics England’s rare disease guide explicitly notes a segregation filter for de novo variants.
  
  So the learner should understand:
  
  in the right disease context, de novo-looking variants can become powerful shortlist candidates because trio data removes many inherited alternatives immediately.
  
  But this is still a prioritisation clue, not final proof.`
          },
          {
            title: "Why recessive models can also be narrowed strongly by family data",
            body: `Family data is also very powerful for recessive thinking.
  
  For a recessive model, the reviewer may prioritize:
  
  • homozygous variants in the child with appropriate parental carrier states
  • or two variants in the same gene consistent with a compound heterozygous pattern.
  
  This kind of inheritance-aware narrowing is exactly why trio and family data can reduce the search space so effectively in rare disease analysis. Research and clinical workflows use family structure to identify inherited as well as de novo candidates.
  
  So the learner should understand:
  
  family data does not only help with de novo filtering; it also helps identify recessive-compatible candidates more efficiently.`
          },
          {
            title: "Why compound heterozygous thinking matters",
            body: `A beginner may focus only on:
  
  • single de novo variants
  • or single heterozygous dominant-looking variants.
  
  But many rare disorders follow biallelic models where the child carries two different variants in the same gene, one from each parent. Trio or parental data can make this pattern much easier to recognise because the workflow can see whether the two variants are inherited from different parents.
  
  So the learner should understand:
  
  family data helps move filtering beyond one-variant-at-a-time thinking.
  
  That is especially important in recessive rare disease analysis, where the right candidate may only become obvious when both parental transmissions are considered together.`
          },
          {
            title: "Why inheritance filtering depends on the expected disease model",
            body: `This is one of the most important boundaries in the lesson.
  
  A learner may think:
  
  “If it’s de novo, it must be the best candidate.”
  
  That is too simple.
  
  A de novo variant may be very compelling in a dominant neurodevelopmental disorder context, but much less compelling in a disease model expected to be recessive. Likewise, a recessive-compatible genotype may be much more relevant in a biallelic disease context than a single heterozygous variant.
  
  PanelApp is helpful here because gene entries and panels carry inheritance information, including monoallelic, biallelic, or both, which directly affects how variants should be filtered and prioritised. For example, PanelApp gene pages explicitly display mode-of-inheritance information used in interpretation contexts.
  
  So the learner should understand:
  
  inheritance filtering only makes sense when it is matched to the relevant disease and gene model.
  
  That is why inheritance is powerful, but still context-dependent.`
          },
          {
            title: "Why absence of parental support is not always enough by itself",
            body: `Another important caution:
  
  A variant that appears absent in both parents is not automatically a true de novo event. It may still reflect:
  
  • technical weakness
  • low parental coverage
  • mapping issues
  • or calling differences.
  
  Genomics England’s use of segregation filters shows how important this pattern is, but earlier modules on technical confidence and evidence checking still matter here. A “de novo-looking” call should still be technically believable in both child and parents before it rises strongly in priority.
  
  So the learner should understand:
  
  inheritance-aware filtering builds on technical credibility; it does not replace it.
  
  That is one of the key safety links back to earlier modules.`
          },
          {
            title: "Why trio context can outperform singleton filtering",
            body: `A singleton analysis can still use:
  
  • rarity
  • consequence
  • phenotype
  • panel context.
  
  But without parental data, many variants remain ambiguous:
  
  • was it inherited or de novo?
  • does it fit recessive segregation?
  • are two variants in trans or not obviously so?
  • is the family pattern actually plausible?
  
  That is why trio analysis is often much stronger for narrowing the search space in rare disease workflows. Family-based analysis documents and rare disease guides both reflect this advantage.
  
  So the learner should understand:
  
  singleton filtering can shortlist candidates, but trio filtering can often shortlist candidates much more sharply.`
          },
          {
            title: "Why inheritance-aware filtering is still not final diagnosis",
            body: `This lesson must keep the same boundary as the rest of Module 13.
  
  A de novo-looking variant is still only a candidate.
  A recessive-looking pair is still only a candidate.
  An inherited dominant-looking variant is still only a candidate.
  
  These patterns can strongly change ranking, but they do not replace:
  
  • technical review
  • phenotype fit
  • consequence and mechanism context
  • test scope
  • and later interpretation/classification work.
  
  So the learner should understand:
  
  inheritance-aware filtering is one of the strongest ways to shrink the shortlist, but it still does not turn a candidate directly into a diagnosis.
  
  That boundary is very important for safe role-aware practice.`
          },
          {
            title: "The one-sentence takeaway",
            body: `If the learner remembers one sentence from this lesson, it should be:
  
  Inheritance-aware filtering uses family data to ask whether a variant fits the expected transmission model, and trio context is especially powerful because it can rapidly narrow the shortlist by highlighting de novo, recessive, and other segregation-compatible candidates.
  
  That is the core lesson.`
          },
          {
            title: "Worked example",
            body: `Scenario
  
  A child with a suspected dominant developmental disorder has many rare, technically credible variants. One rare missense variant is present in the child and absent in both parents.
  
  Beginner question
  
  Why might this variant rise quickly in priority?
  
  Good beginner answer
  
  Because trio data shows that the variant is de novo-looking, and in the right dominant disease context that can strongly increase priority. Genomics England’s rare disease analysis guide explicitly includes de novo segregation filtering, which reflects how powerful this pattern can be for narrowing the shortlist. That does not prove the variant is the diagnosis, but it makes it a much stronger candidate than many inherited alternatives that do not fit the expected model. Technical credibility, phenotype fit, and gene context still need to be considered as well.`
          },
          {
            title: "Lesson summary",
            body: `The learner has understood this lesson if they can say something like:
  
  “Inheritance-aware filtering uses family data to ask whether a variant fits the expected disease model. Trio data is especially powerful because it can quickly raise de novo or recessive-compatible candidates and push down many variants that do not fit the family pattern.”`
          }
        ],
        sections: [
          {
            heading: "The central idea",
            body:
              "Inheritance matters because a variant that fits the expected family pattern usually deserves higher priority than a variant that does not."
          }
        ],
        quiz: [
          {
            question: "Why is trio data so useful in variant filtering?",
            options: [
              "Because it replaces phenotype information",
              "Because it provides immediate family context that can reveal de novo and segregation-compatible candidates more clearly",
              "Because it makes all variants easier to classify automatically",
              "Because it removes the need for population frequency filtering"
            ],
            answerIndex: 1,
            explanation:
              "Trio analysis is powerful because it lets the workflow compare the child’s variants directly against both parents, which strongly improves inheritance-aware narrowing."
          },
          {
            question:
              "Which type of candidate often rises quickly in the right dominant disease context?",
            options: [
              "A clearly common inherited variant",
              "A technically credible de novo-looking variant",
              "Any synonymous variant",
              "A low-quality variant absent from the call set"
            ],
            answerIndex: 1,
            explanation:
              "De novo segregation filtering is specifically used in rare disease workflows because de novo-looking variants can become strong candidates in the appropriate context."
          },
          {
            question:
              "Why can family data help with recessive filtering as well as de novo filtering?",
            options: [
              "Because family data only matters for dominant disease",
              "Because it can help reveal homozygous or compound-heterozygous patterns that fit biallelic inheritance",
              "Because all recessive disorders are caused by de novo variants",
              "Because parental data replaces consequence annotation"
            ],
            answerIndex: 1,
            explanation:
              "Family structure helps identify both de novo and inherited segregation-compatible candidates, including biallelic models."
          },
          {
            question: "Which statement is most accurate?",
            options: [
              "A de novo-looking variant is automatically the diagnosis",
              "Inheritance-aware filtering can dramatically shrink the shortlist, but the surviving candidates still need technical, phenotypic, and clinical review",
              "Trio data makes transcript context irrelevant",
              "Family-based filtering is only useful in research"
            ],
            answerIndex: 1,
            explanation:
              "This is the main boundary of the lesson: inheritance is a very strong prioritisation layer, but it is still not the final diagnostic conclusion."
          }
        ]
      },
      {
        slug: "lesson-5",
        title:
          "Lesson 5: Phenotype, gene panels, and phenotype-driven prioritisation",
        goal:
          "By the end of this lesson, the learner should be able to answer: “Why do phenotype and gene-panel context matter so much in prioritisation, and how do they help decide which surviving variants deserve the most attention?”",
        screens: [
          {
            title: "Lesson goal",
            body: `By the end of this lesson, the learner should be able to answer:
  
  “Why do phenotype and gene-panel context matter so much in prioritisation, and how do they help decide which surviving variants deserve the most attention?”
  
  This lesson follows inheritance because after technical filtering, rarity, consequence, and family structure have reduced the search space, there are often still multiple plausible candidates left. At that stage, one of the most important questions becomes:
  
  “Which of these candidates best fits the patient’s actual phenotype and the clinical indication for testing?”
  
  That is why phenotype-driven tools and curated gene panels are used in real rare-disease workflows. Exomiser is designed to prioritise variants and genes using phenotype information, and PanelApp is a public knowledgebase for disorder-related virtual gene panels used in genomic analysis contexts.`
          },
          {
            title: "The central idea",
            body: `A good beginner summary is:
  
  Phenotype and panel context matter because they help decide which technically credible, rare, inheritance-compatible variants are most relevant to this patient’s actual presentation.
  
  A variant can survive many earlier filters and still be a weak candidate if:
  
  • the gene is unrelated to the phenotype
  • the gene is outside the relevant clinical panel context
  • the inheritance or disease area does not fit the indication.
  
  So the key beginner message is:
  
  phenotype-driven prioritisation is what helps turn a generic shortlist into a patient-relevant shortlist. Tools like Exomiser exist specifically to rank candidates using phenotype information, and PanelApp exists to provide curated disorder-related gene panels for clinical and research interpretation contexts.`
          },
          {
            title: "What phenotype means in this module",
            body: `At beginner level, phenotype means the observable clinical features of the patient that help define what kind of disorder is being considered.
  
  In genomics workflows, phenotype information is often structured using terms such as HPO terms. Exomiser’s documentation states that it uses Human Phenotype Ontology terms together with variant and gene information for prioritisation.
  
  So the learner should understand:
  
  phenotype is not just background clinical detail; it is one of the strongest tools for ranking which genes and variants make sense in this case.
  
  That is why phenotype collection quality matters so much in rare-disease genomics.`
          },
          {
            title: "Why phenotype matters after earlier filtering",
            body: `A learner may think:
  
  “If a variant is rare, technically strong, and inheritance-compatible, that should be enough.”
  
  Not necessarily.
  
  Even after all of those filters, many candidate variants can remain. Phenotype helps distinguish:
  
  • technically credible but clinically irrelevant variants
  
  from
  
  • technically credible and clinically plausible variants.
  
  Exomiser is built around this exact problem: it ranks candidate genes and variants by combining phenotype information with variant data.
  
  So the learner should understand:
  
  phenotype is often what decides which surviving candidates rise to the top of the shortlist.
  
  Without it, the shortlist can remain too broad and too generic.`
          },
          {
            title: "What phenotype-driven prioritisation means",
            body: `At beginner level, phenotype-driven prioritisation means using the patient’s clinical features to rank genes and variants according to how well they fit the disease picture.
  
  This can happen through:
  
  • clinician-guided reasoning
  • curated panel selection
  • HPO-based tools such as Exomiser
  • gene-disease resources linked to phenotype terms.
  
  Exomiser’s documentation explicitly describes variant and gene prioritisation using phenotype data, especially HPO terms.
  
  So the learner should understand:
  
  phenotype-driven prioritisation asks not just “is this variant plausible in general?” but “is it plausible for this patient?”
  
  That is a much sharper question.`
          },
          {
            title: "Why curated gene panels matter",
            body: `Phenotype does not only act through ranking tools. It also acts through panel context.
  
  PanelApp is a curated public knowledgebase of disorder-related gene panels. Genomics England describes it as a platform to create, store, and query virtual gene panels, and panel pages are used in diagnostic and interpretation contexts.
  
  So the learner should understand:
  
  gene panels help define which genes are especially relevant to the clinical indication being investigated.
  
  That means a variant in a strongly indication-relevant panel gene may rise in priority over a similar variant in a gene with weaker relevance to the current case.`
          },
          {
            title: "Why panel context is powerful but not absolute",
            body: `This lesson needs an important safety boundary.
  
  A learner might think:
  
  “If it is in-panel, it must be important.”
  
  or
  
  “If it is outside the panel, it can be ignored.”
  
  That is too simple.
  
  Panels are powerful because they focus attention on genes already considered relevant to the phenotype or indication. But they are still curation tools, not perfect truth lists. PanelApp itself is a dynamic curation platform, which already suggests that panels evolve over time.
  
  So the learner should understand:
  
  panel context is a strong prioritisation clue, but it is still part of a broader workflow rather than an absolute rule.
  
  That keeps the lesson practical without making it rigid.`
          },
          {
            title: "Why phenotype can outweigh a more dramatic-looking consequence",
            body: `This is one of the most important practical ideas in the lesson.
  
  A severe-looking consequence in a poorly phenotype-matched gene may be a weaker candidate than a somewhat less dramatic consequence in a strongly phenotype-relevant gene.
  
  That is because prioritisation is not about finding the “most dramatic variant in the genome.” It is about finding the most plausible candidate for this patient.
  
  Exomiser’s whole design supports this principle: phenotype fit can move a candidate higher or lower even when many technically plausible variants remain.
  
  So the learner should understand:
  
  phenotype relevance can change ranking more than raw consequence severity alone.
  
  That is why this lesson comes after the consequence lesson.`
          },
          {
            title: "Why phenotype-driven tools do not replace human judgment",
            body: `A learner may think:
  
  “If we use Exomiser or a panel, the software or panel has basically decided the answer.”
  
  That is wrong.
  
  Phenotype-driven tools and curated panels are powerful aids, but they depend on:
  
  • the quality of the phenotype entered
  • the accuracy of gene-disease knowledge
  • the fit of the test context
  • the technical credibility of the candidate variants already being considered.
  
  So the learner should understand:
  
  phenotype tools and panels help rank candidates, but they do not replace technical review, inheritance reasoning, or later interpretation. Exomiser is a prioritisation tool, not a final diagnostic classifier, and PanelApp is a curation resource, not a standalone proof system.
  
  That boundary is important for safe practice.`
          },
          {
            title: "Why phenotype still depends on earlier modules",
            body: `Phenotype-driven prioritisation only works properly if earlier filtering has already done its job.
  
  For example:
  
  • a technically weak call should not rise just because the gene looks interesting
  • a clearly common variant should not stay high just because it is in a relevant panel gene
  • a transcript or annotation misunderstanding can still mislead consequence-based ranking.
  
  So the learner should understand:
  
  phenotype and panel context sit on top of earlier technical, frequency, and inheritance filtering.
  
  This is another example of layered prioritisation:
  
  1. technical credibility
  2. rarity
  3. consequence
  4. inheritance
  5. phenotype and panel relevance.
  
  That layered structure is what makes the shortlist defensible.`
          },
          {
            title: "The one-sentence takeaway",
            body: `If the learner remembers one sentence from this lesson, it should be:
  
  Phenotype and panel context help prioritise which technically credible, rare, inheritance-compatible variants are most relevant to the patient’s clinical presentation, but they are ranking tools rather than final proof of diagnosis.
  
  That is the core lesson.`
          },
          {
            title: "Worked example",
            body: `Scenario
  
  A learner is comparing two rare, technically strong, inheritance-compatible variants.
  
  • Variant A has a more severe-looking consequence, but the gene has weak relevance to the patient’s phenotype.
  • Variant B has a less dramatic consequence, but the gene is strongly matched to the phenotype and sits in the relevant panel context.
  
  The learner says, “Variant A should clearly rank higher because the consequence is worse.”
  
  Beginner question
  
  Why is that too quick?
  
  Good beginner answer
  
  Because prioritisation is about the most plausible candidate for this patient, not just the most severe-looking sequence change in isolation. If Variant B sits in a strongly phenotype-relevant gene and relevant panel context, that can outweigh the fact that its consequence label looks less dramatic. Exomiser and similar phenotype-driven approaches exist because phenotype fit is a major ranking factor after earlier filtering steps. So Variant A may still be worth review, but consequence alone should not override phenotype and indication relevance.`
          },
          {
            title: "Lesson summary",
            body: `The learner has understood this lesson if they can say something like:
  
  “Phenotype and panel context help me decide which rare, technically credible, inheritance-compatible variants are most relevant to this patient. They are powerful ranking tools, but they still sit within a broader filtering and interpretation workflow.”`
          }
        ],
        sections: [
          {
            heading: "The central idea",
            body:
              "Phenotype and panel context matter because they help decide which technically credible, rare, inheritance-compatible variants are most relevant to this patient’s actual presentation."
          }
        ],
        quiz: [
          {
            question: "Why is phenotype such an important prioritisation factor?",
            options: [
              "Because it replaces the need for technical review",
              "Because it helps decide which surviving candidate variants are most relevant to the patient’s actual clinical presentation",
              "Because every phenotype term points to one gene only",
              "Because phenotype alone proves pathogenicity"
            ],
            answerIndex: 1,
            explanation:
              "Phenotype helps rank which technically plausible candidates make the most sense for the patient being investigated. Exomiser is built specifically for this purpose."
          },
          {
            question:
              "What is the safest beginner description of a curated gene panel?",
            options: [
              "A final list of the only genes that can ever matter",
              "A curated set of genes relevant to a clinical indication that helps focus prioritisation",
              "A pathogenicity scoring system",
              "A replacement for family data"
            ],
            answerIndex: 1,
            explanation:
              "PanelApp is a curated platform for disorder-related virtual gene panels used to focus interpretation and prioritisation."
          },
          {
            question:
              "Why is it unsafe to let phenotype tools or panels decide the answer by themselves?",
            options: [
              "Because they are always wrong",
              "Because they are ranking aids that still depend on phenotype quality, technical credibility, and the broader clinical workflow",
              "Because they only work for somatic genomics",
              "Because they replace inheritance filtering completely"
            ],
            answerIndex: 1,
            explanation:
              "Exomiser and PanelApp are useful prioritisation resources, but they do not replace technical review or final interpretation."
          },
          {
            question: "Which statement is most accurate?",
            options: [
              "The most severe-looking consequence should always outrank phenotype relevance",
              "Panel context only matters after final diagnosis",
              "Phenotype and panel relevance can move a candidate up or down the shortlist even when several variants are technically strong and rare",
              "Any in-panel variant is automatically the diagnosis"
            ],
            answerIndex: 2,
            explanation:
              "This is the main practical lesson: phenotype and panel context help rank which surviving candidates are most relevant to the actual case."
          }
        ]
      },
      {
        slug: "lesson-6",
        title:
          "Lesson 6: How filtering and prioritisation fit into clinical bioinformatics",
        goal:
          "By the end of this lesson, the learner should be able to answer: “What are filtering and prioritisation actually used for in real clinical bioinformatics work, and how should they influence review, communication, and escalation?”",
        screens: [
          {
            title: "Lesson goal",
            body: `By the end of this lesson, the learner should be able to answer:
  
  “What are filtering and prioritisation actually used for in real clinical bioinformatics work, and how should they influence review, communication, and escalation?”
  
  This lesson finishes Module 13 by tying the shortlist-building process back to real workflow behaviour. The learner has now seen that filtering and prioritisation bring together:
  
  • technical credibility
  • population frequency
  • consequence
  • inheritance
  • phenotype
  • panel and test context.
  
  Resources such as gnomAD, Exomiser, and PanelApp support these steps because rare-disease analysis needs structured ways to reduce large call sets into smaller candidate lists that are more defensible and more relevant to the patient.`
          },
          {
            title: "The central idea",
            body: `A good beginner summary is:
  
  Filtering and prioritisation are used to turn a large set of technically reviewable variants into a smaller shortlist that is practical, patient-relevant, and worth serious downstream attention.
  
  That means their role is not to “declare the diagnosis.” Their role is to help decide:
  
  • which variants deserve review first
  • which ones should fall down the list
  • which ones are unlikely enough to remove from immediate focus
  • and which candidates should be carried forward more cautiously or more strongly.
  
  So the key beginner message is:
  
  filtering and prioritisation are workflow tools for safe narrowing, not final proof tools.`
          },
          {
            title: "Why filtering helps make review manageable",
            body: `In real rare-disease analysis, the initial candidate space is too large to treat every variant as equally important. Even after technical filtering, many variants may still be:
  
  • rare
  • technically credible
  • and apparently plausible at first glance.
  
  That is why structured narrowing is essential. Population databases such as gnomAD are used to remove variants that are too common for the disease model, while phenotype-based tools such as Exomiser help rank which of the remaining candidates best fit the case.
  
  So the learner should understand:
  
  filtering and prioritisation are what make systematic review possible instead of chaotic.
  
  They are not optional extras. They are part of how the work becomes feasible.`
          },
          {
            title: "Why prioritisation is about attention, not certainty",
            body: `A high-priority variant is not automatically the answer.
  
  It is simply a variant that, based on the available workflow criteria, deserves more serious attention than many others. Exomiser’s role as a prioritisation tool makes this especially clear: it ranks candidates for diagnosis rather than proving one immediately.
  
  So the learner should understand:
  
  prioritisation is really a way of deciding where attention should go first.
  
  That distinction matters because a top-ranked candidate can still later turn out to be:
  
  • technically weaker than expected
  • a poor mechanism fit
  • a poorer phenotype fit on deeper review
  • or not the final explanation.`
          },
          {
            title: "Why filtering depends on earlier modules",
            body: `Module 13 sits on top of earlier technical work.
  
  A variant should not stay high on the shortlist just because it is:
  
  • rare
  • in-panel
  • or in a phenotype-relevant gene
  
  if the earlier modules already suggest that it is:
  
  • technically weak
  • artefact-prone
  • or visually uncomfortable in the reads.
  
  So the learner should understand:
  
  good filtering and prioritisation only work well when the earlier technical review has already done its job.
  
  This means:
  
  • Module 10 still matters for technical confidence
  • Module 11 still matters for artefact awareness
  • Module 12 still matters for evidence checking.
  
  Shortlisting is built on top of technical trust, not instead of it.`
          },
          {
            title: "Why filtering shapes communication",
            body: `Filtering and prioritisation affect not just what the analyst thinks, but how the analyst speaks.
  
  A variant that rises high because it is:
  
  • technically credible
  • rare enough
  • consequence-relevant
  • inheritance-compatible
  • phenotype-matched
  • and in the right panel context
  
  can be communicated as a strong candidate for downstream review.
  
  A variant that survives only weakly, or sits in a greyer area, may need language like:
  
  • lower priority candidate
  • less compelling fit
  • outside main panel focus
  • technically credible but weak phenotype fit
  • requires caution or broader discussion.
  
  Because shortlist status is not final diagnosis, the wording should reflect rank and confidence rather than overclaim certainty. gnomAD, Exomiser, and PanelApp all support ranking and relevance decisions, not direct final classification.
  
  So the learner should understand:
  
  filtering changes how strongly a variant should be presented, not just whether it is kept.`
          },
          {
            title: "Why filtering shapes escalation",
            body: `Some candidates are exactly the sort that should trigger careful escalation rather than casual acceptance.
  
  For example:
  
  • a biologically attractive candidate that is technically messy
  • a rare variant with the right consequence but weak phenotype fit
  • a strong phenotype match outside the main panel context
  • an inheritance-compatible variant with unresolved evidence questions.
  
  In these situations, filtering and prioritisation help the analyst recognize that the right action may be:
  
  • to document why the candidate is being carried forward
  • to explain why it is high or only moderate priority
  • to highlight uncertainty clearly
  • to escalate rather than overselling the evidence.
  
  This is one of the biggest practical uses of a good shortlist: it supports safer downstream discussion and decision-making.`
          },
          {
            title: "Why a shortlist is valuable even when it is imperfect",
            body: `A learner may think:
  
  “If the shortlist is not the final answer, what is the point?”
  
  The point is that a good shortlist:
  
  • reduces noise
  • structures review
  • focuses attention
  • makes downstream discussion more efficient
  • and lowers the chance that strong candidates are buried among many weak ones.
  
  That is exactly why rare-disease workflows use layered prioritisation rather than jumping straight from raw call set to final diagnosis. gnomAD helps reduce candidates by commonness, Exomiser helps rank by phenotype relevance, and PanelApp helps focus on indication-relevant genes.
  
  So the learner should understand:
  
  a shortlist is useful because it improves the quality and efficiency of downstream review, even though it is not itself the conclusion.`
          },
          {
            title: "Why one strong factor still does not settle the case",
            body: `This lesson also repeats an important pattern from earlier modules.
  
  One strong factor is rarely enough on its own:
  
  • a variant can be very rare but weakly phenotype-matched
  • strongly phenotype-matched but outside the expected inheritance pattern
  • consequence-severe but too common
  • technically strong but outside the panel context
  • or panel-relevant but read-level uncomfortable.
  
  So the learner should understand:
  
  the real power of filtering comes from layering multiple clues together.
  
  That is why the module was structured in the order it was:
  
  1. rarity
  2. consequence
  3. inheritance
  4. phenotype
  5. panel context
  
  with earlier technical evidence sitting underneath all of it.`
          },
          {
            title: "Why this matters for role boundaries",
            body: `This lesson also reinforces a professional boundary.
  
  In clinical bioinformatics, filtering and prioritisation usually help answer:
  
  “Which variants are most worth serious review?”
  
  They do not by themselves answer:
  
  • is this variant pathogenic?
  • is this definitely diagnostic?
  • what should the final clinical report say?
  
  Those later steps depend on broader interpretation frameworks and role-specific responsibilities. This is why it is so important for the learner to understand that a prioritised variant is a candidate, not a conclusion.
  
  So the learner should understand:
  
  good filtering supports safe downstream work precisely because it narrows the field without pretending to be the final interpretive step.`
          },
          {
            title: "The one-sentence takeaway",
            body: `If the learner remembers one sentence from this lesson, it should be:
  
  In clinical bioinformatics, filtering and prioritisation are used to build a smaller, more defensible shortlist of technically credible and clinically relevant candidates, which helps guide review, communication, and escalation without turning shortlist rank into a final diagnosis.
  
  That is the core lesson.`
          },
          {
            title: "Worked example",
            body: `Scenario
  
  A learner says, “We have narrowed the case to three top variants, so now whichever is ranked first is basically the diagnosis.”
  
  Beginner question
  
  Why is that too quick?
  
  Good beginner answer
  
  Because filtering and prioritisation are designed to identify the most plausible candidates for review, not to prove the final answer automatically. A top-ranked variant usually deserves the most attention first, but it can still fail on deeper review, mechanism fit, phenotype nuance, or later interpretation steps. Tools like Exomiser and resources like PanelApp help rank candidate genes and variants, while gnomAD helps remove obviously implausible common candidates, but none of these tools turns shortlist position into direct proof. So a shortlist is extremely useful, but it is still only a structured starting point for stronger downstream review.`
          },
          {
            title: "Lesson summary",
            body: `The learner has understood this lesson if they can say something like:
  
  “Filtering and prioritisation help me reduce a technically credible variant list to a smaller set of patient-relevant candidates. That shortlist guides where review should focus and how strongly a variant should be presented, but it does not by itself equal diagnosis or final classification.”`
          }
        ],
        sections: [
          {
            heading: "The central idea",
            body:
              "Filtering and prioritisation are used to turn a large set of technically reviewable variants into a smaller shortlist that is practical, patient-relevant, and worth serious downstream attention."
          }
        ],
        quiz: [
          {
            question:
              "What is the main practical purpose of filtering and prioritisation?",
            options: [
              "To assign final pathogenicity classes",
              "To reduce a technically credible call set into a smaller shortlist that is practical and relevant for further review",
              "To replace phenotype collection",
              "To avoid using population data"
            ],
            answerIndex: 1,
            explanation:
              "Filtering and prioritisation are shortlist-building steps. They reduce the search space and focus downstream attention."
          },
          {
            question:
              "Why is a top-priority variant not automatically the diagnosis?",
            options: [
              "Because prioritisation ranks candidates for attention, not final proof",
              "Because all top-ranked variants are false",
              "Because panels never matter",
              "Because frequency is always ignored in the end"
            ],
            answerIndex: 0,
            explanation:
              "A prioritised candidate is worth attention first, but it is still only a candidate and still needs broader downstream review."
          },
          {
            question:
              "How do filtering and prioritisation affect communication?",
            options: [
              "They should be hidden from the clinical workflow",
              "They help determine how strongly a candidate should be presented and how clearly uncertainty should be described",
              "They make caution unnecessary",
              "They replace escalation decisions"
            ],
            answerIndex: 1,
            explanation:
              "Shortlist position changes how a candidate should be described, but because it is not final proof, uncertainty still needs to be communicated honestly."
          },
          {
            question: "Which statement is most accurate?",
            options: [
              "Filtering is the same thing as diagnosis",
              "A shortlist is valuable because it structures attention and review, even though it is not the final conclusion",
              "The strongest single filter usually decides everything",
              "Panel context makes technical confidence irrelevant"
            ],
            answerIndex: 1,
            explanation:
              "That is the integrated lesson of Module 13: shortlisting is useful because it makes downstream review more focused and defensible, but it is still not the final answer."
          }
        ]
      }
    ]
  };