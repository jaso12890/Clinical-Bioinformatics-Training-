export const module15 = {
    slug: "module-15",
    title: "Module 15: Gene–disease mechanism for prioritisation",
    description:
      "Gene–disease mechanism, haploinsufficiency, gain of function, dominant negative effects, dosage sensitivity, and how mechanism-aware reasoning improves shortlist quality.",
    lessons: [
      {
        slug: "lesson-1",
        title: "Lesson 1: What is gene–disease mechanism and why does it matter?",
        goal:
          "By the end of this lesson, the learner should be able to answer: “What does gene–disease mechanism mean, and why can a technically strong variant still be a weak candidate if the mechanism is wrong?”",
        screens: [
          {
            title: "Lesson goal",
            body: `By the end of this lesson, the learner should be able to answer:
  
  “What does gene–disease mechanism mean, and why can a technically strong variant still be a weak candidate if the mechanism is wrong?”
  
  This lesson starts Module 15 because the learner already knows how to ask:
  
  • is the call technically convincing?
  • is it rare enough?
  • does it fit inheritance and phenotype well enough to stay on the shortlist?
  
  The next step is a different question:
  
  “Does this type of variant actually fit the known way this gene causes disease?”
  
  That question matters because genes do not all cause disease in the same way. ClinGen’s Dosage Sensitivity effort curates evidence for haploinsufficiency and triplosensitivity of genes and regions, while ClinGen’s Gene–Disease Validity framework standardizes how strongly a gene–disease pair is supported by public evidence.`
          },
          {
            title: "The central idea",
            body: `A good beginner summary is:
  
  Gene–disease mechanism means the way changes in a gene are understood to cause disease.
  
  That means the same gene may make one class of variant more plausible than another. For example, one gene may fit disease through loss of function, while another may fit better through gain of function or a more specific missense mechanism. ClinGen’s dosage framework exists because dosage mechanisms such as haploinsufficiency and triplosensitivity are clinically important enough to curate directly.
  
  So the key beginner message is:
  
  a variant can look technically strong and still be a weak candidate if its variant type does not match the known disease mechanism of the gene.`
          },
          {
            title: "Why mechanism matters after filtering",
            body: `By the time a variant reaches this stage, it may already be:
  
  • technically credible
  • rare enough
  • and in a phenotype-relevant gene.
  
  But that still does not mean it is a strong candidate. A shortlist can contain variants that survive earlier filters but are still biologically mismatched. This is exactly why gene-level disease knowledge matters after filtering: shortlist rank should depend not only on rarity and consequence, but on whether the variant type fits the gene–disease story supported by current evidence. ClinGen’s validity framework is built to assess the evidence strength for a gene–disease relationship, which is part of what makes mechanism-aware reasoning possible.
  
  So the learner should understand:
  
  mechanism is one of the main things that turns a general shortlist into a more defensible shortlist.`
          },
          {
            title: "What “mechanism” means at beginner level",
            body: `At beginner level, a safe practical meaning of mechanism is:
  
  what kind of change in this gene seems to cause disease, according to curated evidence and the wider literature.
  
  For this module, the learner mainly needs these broad categories:
  
  • loss of function
  • gain of function
  • dominant negative
  • dosage sensitivity
  
  ClinGen’s dosage curation explicitly evaluates whether losing one copy causes a consistent phenotype (haploinsufficiency) or whether having an extra copy causes a consistent phenotype (triplosensitivity).
  
  So the learner should understand:
  
  mechanism is not just “what consequence label the variant has.” It is “what type of biological disruption is known to matter for this gene.”`
          },
          {
            title: "Why a strong-looking consequence can still be a bad fit",
            body: `A common beginner mistake is:
  
  “This is a truncating-looking variant, so it must be the strongest candidate.”
  
  That is too simple.
  
  A truncating or pLoF-looking variant often attracts attention, but it is most compelling when the gene is actually associated with a loss-of-function mechanism. ClinGen’s dosage system shows why: some genes have evidence supporting haploinsufficiency, and some do not. A pLoF variant in a gene without convincing LoF-related disease mechanism may be less compelling than it first appears.
  
  So the learner should understand:
  
  “more severe-looking” is not the same as “better mechanism fit.”
  
  That is one of the most important ideas in the whole module.`
          },
          {
            title: "Why curated resources matter here",
            body: `This lesson is a good point to introduce why curated mechanism resources are valuable.
  
  ClinGen’s Gene–Disease Validity framework standardizes how a gene–disease relationship is evaluated, and its dosage framework separately curates evidence for haploinsufficiency and triplosensitivity. Those are exactly the kinds of resources that help analysts avoid guessing mechanism from consequence labels alone. ClinGen also notes that its gene-validity information is not intended for direct diagnostic use or medical decision-making without review by a genetics professional, which fits the boundary-aware goal of this module.
  
  So the learner should understand:
  
  curated mechanism resources help support prioritisation, but they do not replace professional downstream interpretation.`
          },
          {
            title: "Why mechanism-aware thinking changes shortlist rank",
            body: `A learner may compare two candidates like this:
  
  • Variant A looks more disruptive on paper
  • Variant B looks less disruptive on paper
  
  But if Variant B fits the known disease mechanism of the gene much better, it may deserve higher priority. Mechanism-aware review therefore changes rank in a way that raw consequence severity alone cannot. This is one of the practical reasons ClinGen separates dosage curation from gene-validity curation: different kinds of evidence answer different mechanism-related questions.
  
  So the learner should understand:
  
  shortlist ranking should reward mechanism fit, not just dramatic annotation labels.`
          },
          {
            title: "Why this still is not final classification",
            body: `This lesson needs a clear boundary.
  
  Mechanism-aware prioritisation does not mean the learner is doing the final formal variant classification. It means they are learning to recognize when a candidate:
  
  • fits the gene–disease mechanism better
  • fits it worse
  • or looks biologically mismatched despite technical strength.
  
  ClinGen’s gene-validity framework is about the evidence strength for a monogenic gene–disease relationship, not a shortcut to variant-level sign-out, and ClinGen’s website explicitly warns that its information is not for direct diagnostic use without genetics-professional review.
  
  So the learner should understand:
  
  mechanism-aware bioinformatics helps produce a better handoff and a better shortlist, but it still does not turn prioritisation into final classification.`
          },
          {
            title: "Why this module sits after population databases and constraint",
            body: `Module 14 taught the learner:
  
  • how rare the variant is
  • how tolerant the gene appears to be to certain classes of variation.
  
  Module 15 now adds the next layer:
  
  even if a variant is rare and in a constrained gene, does its variant class actually fit how disease is thought to happen in that gene?
  
  That is the natural next question, and it is why this module sits here in the curriculum.
  
  So the learner should understand:
  
  mechanism-aware prioritisation is the bridge between shortlist generation and deeper interpretation-aware reasoning.`
          },
          {
            title: "The one-sentence takeaway",
            body: `If the learner remembers one sentence from this lesson, it should be:
  
  Gene–disease mechanism matters because a candidate variant becomes more or less plausible depending on whether its variant type fits the known way the gene causes disease, so a technically strong variant can still be a weak shortlist candidate if the mechanism is wrong.
  
  That is the core lesson.`
          },
          {
            title: "Worked example",
            body: `Scenario
  
  A learner sees a rare, technically strong truncating-looking variant in a phenotype-relevant gene and says, “This must be the strongest candidate because truncating variants are the most severe.”
  
  Beginner question
  
  Why is that too quick?
  
  Good beginner answer
  
  Because consequence severity alone is not enough. The learner still needs to ask whether disease in that gene is actually known to arise through a loss-of-function mechanism. ClinGen’s dosage resources exist specifically to curate evidence for mechanisms such as haploinsufficiency and triplosensitivity, which shows that mechanism matters separately from raw consequence labels. So a truncating-looking variant may rise strongly in the right gene, but in the wrong mechanism context it may be much less compelling than it first appears.`
          },
          {
            title: "Lesson summary",
            body: `The learner has understood this lesson if they can say something like:
  
  “Gene–disease mechanism tells me what kind of change in a gene is actually relevant to disease. That means a rare, technically strong variant only becomes a strong candidate if its variant type fits the gene’s known mechanism, and that helps me prioritise better without pretending I am doing final classification.”`
          }
        ],
        sections: [
          {
            heading: "The central idea",
            body:
              "Gene–disease mechanism means the way changes in a gene are understood to cause disease."
          }
        ],
        quiz: [
          {
            question:
              "What is the safest beginner description of gene–disease mechanism?",
            options: [
              "The final pathogenicity class of a variant",
              "The way changes in a gene are understood to cause disease",
              "The sequencing technology used to detect the variant",
              "The gene’s population frequency"
            ],
            answerIndex: 1,
            explanation:
              "This lesson defines mechanism as the way a gene’s changes are thought to produce disease, not as a final variant-level label. ClinGen’s dosage and gene-validity frameworks both support this gene-level reasoning."
          },
          {
            question:
              "Why can a technically strong variant still be a weak candidate?",
            options: [
              "Because technical evidence is never useful",
              "Because the variant type may not fit the known disease mechanism of the gene",
              "Because all rare variants are equivalent",
              "Because consequence labels are meaningless"
            ],
            answerIndex: 1,
            explanation:
              "This is the main lesson: technical strength does not rescue a biologically mismatched mechanism."
          },
          {
            question:
              "Why are curated resources like ClinGen useful here?",
            options: [
              "Because they replace all clinical judgment",
              "Because they help standardize evidence about dosage sensitivity and gene–disease validity, which supports mechanism-aware prioritisation",
              "Because they classify every variant automatically",
              "Because they only matter for research studies"
            ],
            answerIndex: 1,
            explanation:
              "ClinGen has separate frameworks for dosage sensitivity and gene–disease validity, both of which support structured mechanism-aware review."
          },
          {
            question:
              "Which statement is most accurate?",
            options: [
              "A more severe-looking consequence automatically means a stronger candidate",
              "Mechanism-aware prioritisation helps improve shortlist quality, but it still does not equal final classification",
              "If a gene is phenotype-relevant, mechanism no longer matters",
              "Haploinsufficiency and triplosensitivity are the same thing"
            ],
            answerIndex: 1,
            explanation:
              "The lesson teaches that mechanism helps rank candidates more safely, while still preserving the boundary between prioritisation and final formal interpretation."
          }
        ]
      },
      {
        slug: "lesson-2",
        title: "Lesson 2: Loss of function and haploinsufficiency",
        goal:
          "By the end of this lesson, the learner should be able to answer: “What do loss of function and haploinsufficiency mean, and why do predicted loss-of-function variants become much more compelling in some genes than in others?”",
        screens: [
          {
            title: "Lesson goal",
            body: `By the end of this lesson, the learner should be able to answer:
  
  “What do loss of function and haploinsufficiency mean, and why do predicted loss-of-function variants become much more compelling in some genes than in others?”
  
  This lesson follows the introduction to gene–disease mechanism because one of the most common and important mechanism questions in rare-disease review is:
  
  “Does this gene cause disease through loss of function?”
  
  That matters because many candidate variants that rise early in prioritisation are:
  
  • stop-gained
  • frameshift
  • essential splice-site
  • or other predicted loss-of-function (pLoF) variants.
  
  But a pLoF variant is only especially compelling when loss of function is actually a plausible disease mechanism for that gene. ClinGen’s Dosage Sensitivity curation exists specifically to collect evidence supporting or refuting haploinsufficiency and triplosensitivity of genes and genomic regions.`
          },
          {
            title: "The central idea",
            body: `A good beginner summary is:
  
  Loss of function means the gene product is reduced or disrupted, and haploinsufficiency means that losing the function of one copy is enough to cause a consistent phenotype.
  
  That is why pLoF variants are often high-priority candidates in some genes but much less compelling in others. ClinGen’s dosage resources define haploinsufficiency as when one copy of a gene or genomic region is lost and results in a consistent phenotype.
  
  So the key beginner message is:
  
  a predicted loss-of-function variant becomes much more compelling when the gene has evidence supporting haploinsufficiency.`
          },
          {
            title: "What loss of function means at beginner level",
            body: `At beginner level, loss of function means that a variant is expected to reduce or abolish normal gene function.
  
  In practical shortlist review, the main pLoF-like categories usually include:
  
  • stop-gained
  • frameshift
  • essential splice donor/acceptor variants
  
  These are the kinds of variants that often attract attention because they may truncate the protein, disrupt the reading frame, or impair proper splicing. But this lesson’s key point is that the label “pLoF” is not enough by itself. The more important question is whether loss of function is the right disease mechanism for the gene being reviewed. ClinGen’s dosage framework is designed exactly to support that distinction.
  
  So the learner should understand:
  
  pLoF tells you what kind of variant this appears to be; haploinsufficiency tells you whether that kind of disruption is a plausible disease mechanism in the gene.`
          },
          {
            title: "What haploinsufficiency means in plain language",
            body: `A safe beginner explanation of haploinsufficiency is:
  
  one healthy copy is not enough.
  
  If a person loses the function of one copy of the gene and that alone is enough to produce disease, the gene is behaving in a haploinsufficient way. ClinGen’s dosage curation materials explicitly describe haploinsufficiency as when one copy of a gene or genomic region is lost and results in a consistent phenotype.
  
  So the learner should understand:
  
  haploinsufficiency is not just “the variant looks damaging.” It is “losing one working copy is known to matter clinically.”
  
  That is why dosage sensitivity curation is so useful for prioritisation.`
          },
          {
            title: "Why pLoF variants rise strongly in haploinsufficient genes",
            body: `If a gene has evidence for haploinsufficiency, then a rare, technically credible pLoF variant in that gene often becomes much more interesting.
  
  That is because:
  
  • the variant type suggests reduced function
  • the gene-level mechanism says reduced function is a plausible route to disease.
  
  This is one of the clearest examples in the curriculum of how consequence and mechanism reinforce each other. ClinGen’s dosage sensitivity map is specifically designed to document evidence supporting haploinsufficiency for genes and regions, which is why it is so useful in this setting.
  
  So the learner should understand:
  
  in a haploinsufficient gene, a pLoF candidate often rises because the variant type and the known mechanism are pointing in the same direction.`
          },
          {
            title: "Why pLoF variants are less compelling when haploinsufficiency is not supported",
            body: `The opposite is just as important.
  
  A pLoF-looking variant can still be a weak candidate if the gene does not have convincing evidence that losing one copy causes disease. ClinGen’s dosage resources include genes with no evidence for haploinsufficiency, and their downloadable files also include categories such as dosage sensitivity unlikely and gene associated with autosomal recessive phenotype, which shows that not every gene should be interpreted through a haploinsufficiency lens.
  
  So the learner should understand:
  
  a truncating-looking variant does not become a strong candidate just because it is severe-looking; it also needs the gene to support a loss-of-function mechanism.
  
  That is one of the biggest protections against over-prioritising the wrong candidate.`
          },
          {
            title: "Why autosomal recessive genes can complicate this picture",
            body: `This lesson also needs an important boundary.
  
  Some genes may be associated mainly with autosomal recessive disease. In those cases, one lost copy may not be enough to cause the phenotype, even though two disrupted copies could matter. ClinGen’s downloadable dosage files explicitly include a category for gene associated with autosomal recessive phenotype, which helps show that not every pLoF variant in such a gene should be treated as a dominant haploinsufficiency-style signal.
  
  So the learner should understand:
  
  a pLoF variant in a recessive gene may still matter, but one heterozygous pLoF variant is usually a different kind of candidate from a pLoF variant in a well-supported haploinsufficient dominant gene.
  
  This is why inheritance and mechanism need to be read together.`
          },
          {
            title: "Why haploinsufficiency is not the same as “all LoF variants are pathogenic”",
            body: `A beginner may think:
  
  “If the gene is haploinsufficient, every pLoF variant in it must be the answer.”
  
  That is too simple.
  
  Even in a gene with strong haploinsufficiency evidence, a pLoF candidate still needs:
  
  • good technical evidence
  • appropriate inheritance context
  • phenotype fit
  • and sensible transcript/context interpretation.
  
  ClinGen’s dosage resources are evidence summaries about gene and region dosage sensitivity, not automatic variant-level verdict systems.
  
  So the learner should understand:
  
  haploinsufficiency strengthens the plausibility of a pLoF variant, but it does not replace the rest of the review workflow.
  
  That is a key role-boundary lesson.`
          },
          {
            title: "Why ClinGen dosage scores matter in practical review",
            body: `ClinGen’s dosage curation framework gives separate haploinsufficiency (HI) and triplosensitivity (TS) scores for genes and regions. Their evaluation documents state that the highest score in each category is 3, which signifies sufficient evidence, and lower scores reflect weaker evidence.
  
  At beginner level, the learner does not need to memorize every score category yet. The important practical idea is:
  
  higher-confidence haploinsufficiency evidence makes pLoF-style candidates more biologically plausible than they would be in genes with weak or absent HI evidence.
  
  So the learner should understand:
  
  ClinGen dosage scores help move mechanism reasoning from guessing to curated evidence.`
          },
          {
            title: "Why this matters for shortlist rank",
            body: `This lesson changes how candidates should rank.
  
  For example:
  
  • a rare, technically strong pLoF in a gene with good haploinsufficiency evidence may rise strongly
  • a similar pLoF in a gene with weak HI support, or one mainly associated with recessive disease, may stay lower.
  
  So the learner should understand:
  
  haploinsufficiency is one of the clearest reasons a pLoF candidate can move up the shortlist for mechanism-aware reasons, not just because the variant looks dramatic.
  
  That is the main practical use of this lesson.`
          },
          {
            title: "The one-sentence takeaway",
            body: `If the learner remembers one sentence from this lesson, it should be:
  
  Predicted loss-of-function variants become much more compelling when the gene has evidence for haploinsufficiency, because the variant type and the known disease mechanism are aligned, but even then the candidate still needs technical, inheritance, phenotype, and transcript-context support.
  
  That is the core lesson.`
          },
          {
            title: "Worked example",
            body: `Scenario
  
  A learner compares two rare, technically strong pLoF variants.
  
  • Variant A is in a gene with ClinGen-supported haploinsufficiency
  • Variant B is in a gene with no convincing haploinsufficiency evidence
  
  The learner says, “They are both truncating, so they should rank similarly.”
  
  Beginner question
  
  Why is that too simple?
  
  Good beginner answer
  
  Because the two genes do not support the same mechanism equally well. Variant A is more compelling because its pLoF consequence fits a gene with curated evidence that losing one copy can produce a consistent phenotype. Variant B may still matter, but without strong haploinsufficiency support the same pLoF label is less persuasive. ClinGen’s dosage sensitivity resources exist specifically to document these differences between genes.`
          },
          {
            title: "Lesson summary",
            body: `The learner has understood this lesson if they can say something like:
  
  “A pLoF variant becomes much more compelling when the gene has evidence for haploinsufficiency, because that means losing one copy is a plausible disease mechanism. But I still need to think about inheritance, phenotype, technical evidence, and transcript context before treating it as a strong candidate.”`
          }
        ],
        sections: [
          {
            heading: "The central idea",
            body:
              "Loss of function means the gene product is reduced or disrupted, and haploinsufficiency means that losing the function of one copy is enough to cause a consistent phenotype."
          }
        ],
        quiz: [
          {
            question:
              "What is the safest beginner definition of haploinsufficiency?",
            options: [
              "Any truncating variant in a gene",
              "A situation where loss of one copy of a gene or genomic region results in a consistent phenotype",
              "A synonym for recessive inheritance",
              "A measure of sequencing depth"
            ],
            answerIndex: 1,
            explanation:
              "ClinGen defines haploinsufficiency as when one copy of a gene or genomic region is lost and results in a consistent phenotype."
          },
          {
            question:
              "Why can a pLoF variant rise strongly in a haploinsufficient gene?",
            options: [
              "Because all pLoF variants are automatically pathogenic",
              "Because the variant type and the known disease mechanism point in the same direction",
              "Because haploinsufficiency replaces phenotype review",
              "Because dosage sensitivity only matters for CNVs"
            ],
            answerIndex: 1,
            explanation:
              "A pLoF candidate becomes more compelling when the gene is known to be sensitive to losing one copy. ClinGen’s dosage framework is designed to capture exactly this."
          },
          {
            question:
              "Why is a heterozygous pLoF variant in a recessive gene different from a pLoF variant in a haploinsufficient dominant gene?",
            options: [
              "Because recessive genes never contain pLoF variants",
              "Because one lost copy may not be enough to cause disease in a recessive context",
              "Because ClinGen does not score recessive genes",
              "Because inheritance no longer matters once consequence is known"
            ],
            answerIndex: 1,
            explanation:
              "ClinGen’s dosage resources distinguish dosage sensitivity from genes associated with autosomal recessive phenotype, reinforcing that one disrupted copy is not interpreted the same way in all genes."
          },
          {
            question:
              "Which statement is most accurate?",
            options: [
              "Haploinsufficiency means every pLoF variant in the gene is automatically diagnostic",
              "Haploinsufficiency is a useful mechanism clue that can strongly raise a pLoF candidate, but it still does not replace technical review, phenotype fit, or inheritance context",
              "Haploinsufficiency only matters for genome build selection",
              "pLoF severity alone is always enough for prioritisation"
            ],
            answerIndex: 1,
            explanation:
              "This is the key safety boundary of the lesson: mechanism support can raise plausibility without becoming a standalone answer."
          }
        ]
      },
      {
        slug: "lesson-3",
        title:
          "Lesson 3: Gain of function, dominant negative, and why “more severe consequence” is not always better",
        goal:
          "By the end of this lesson, the learner should be able to answer: “Why can a truncating-looking variant be a weaker candidate than a missense variant, and how do gain-of-function and dominant-negative mechanisms change prioritisation?”",
        screens: [
          {
            title: "Lesson goal",
            body: `By the end of this lesson, the learner should be able to answer:
  
  “Why can a truncating-looking variant be a weaker candidate than a missense variant, and how do gain-of-function and dominant-negative mechanisms change prioritisation?”
  
  This lesson follows loss of function and haploinsufficiency because the learner now knows one important mechanism pattern:
  
  • some genes fit disease through loss of function
  
  But that is not the only pattern.
  
  Some genes are associated mainly with:
  
  • gain of function
  • dominant negative
  • or more specific variant classes such as recurrent missense changes.
  
  ClinGen’s validity curation materials explicitly include a field for the mechanism of pathogenicity and list examples such as loss of function, gain of function, dominant negative, unknown, or unclear.`
          },
          {
            title: "The central idea",
            body: `A good beginner summary is:
  
  Some genes do not mainly cause disease by losing function, so a truncating-looking variant is not automatically the best candidate.
  
  This is one of the most important corrections in bioinformatic prioritisation. A variant can look:
  
  • technically strong
  • rare enough
  • and severe on annotation
  
  and still be a poor shortlist candidate if its variant type does not fit the known mechanism of disease in the gene. ClinGen gene-validity curation explicitly records mechanism of pathogenicity as part of the curated gene–disease relationship.
  
  So the key beginner message is:
  
  mechanism fit matters more than raw consequence severity alone.`
          },
          {
            title: "What gain of function means at beginner level",
            body: `At beginner level, gain of function (GoF) means a variant changes the gene product in a way that gives it an abnormal or increased effect, rather than simply removing normal function.
  
  The important practical point is:
  
  • a gene with a gain-of-function disease mechanism may not be best explained by a typical truncating or pLoF variant
  • instead, disease may be associated more with specific missense or in-frame changes.
  
  ClinGen gene-validity curations explicitly use “gain of function” as a mechanism label in some gene–disease relationships.
  
  So the learner should understand:
  
  in a gain-of-function gene, a missense or other specific non-truncating variant can be a better shortlist candidate than a pLoF variant.`
          },
          {
            title: "What dominant negative means at beginner level",
            body: `A safe beginner explanation of dominant negative is:
  
  the altered protein interferes with the normal function of the healthy protein, so the problem is not just loss of one copy, but harmful interference from the abnormal one.
  
  This matters because dominant-negative disease mechanisms often make specific variant classes more relevant than simple gene loss. ClinGen curations explicitly include “dominant negative” as a mechanism label, and dosage pages for genes such as ANKH and TTN mention dominant-negative mechanisms in their evidence comments.
  
  So the learner should understand:
  
  dominant negative means the wrong protein is actively causing trouble, not just that one good copy is missing.
  
  That changes which variants deserve more attention.`
          },
          {
            title: "Why “more severe-looking” can be misleading",
            body: `A beginner may think:
  
  “A stop-gained or frameshift variant must be stronger than a missense variant because it looks more severe.”
  
  That is too simple.
  
  If the gene is mainly associated with gain of function or dominant negative effects, then a truncating-looking variant may actually be a worse mechanism fit than a specific missense change. ClinGen curations directly record examples where the reported mechanism is gain of function or dominant negative, which shows that “severe-looking” annotation is not enough by itself.
  
  So the learner should understand:
  
  a more dramatic consequence label does not automatically make a better candidate if it points toward the wrong mechanism.
  
  That is one of the most important shortlist-ranking lessons in the curriculum.`
          },
          {
            title: "CHAMP1 as a useful teaching example",
            body: `A very helpful example here is CHAMP1.
  
  ClinGen’s dosage page for CHAMP1 states that there is no convincing functional evidence supporting haploinsufficiency for the reported nonsense and frameshift variants because they are expected to escape nonsense-mediated decay, and it says that dominant negative and gain-of-function effects have been proposed as the likely mechanism for the disease.
  
  So the learner should understand:
  
  CHAMP1 is a good example of why a truncating-looking variant should not automatically be treated as a straightforward haploinsufficiency candidate.
  
  This is exactly the kind of gene where “pLoF-looking” does not equal “best mechanism fit.”`
          },
          {
            title: "Why some genes favour specific missense patterns",
            body: `Not all missense variants are equal either.
  
  In some genes, disease may be associated mainly with:
  
  • recurrent missense variants
  • clustered missense changes
  • or non-truncating variants that alter function in a very specific way.
  
  ClinGen gene-validity examples include relationships where most reported pathogenic variants are missense or in-frame changes and the proposed mechanism is gain of function or dominant negative. One ClinGen validity entry notes that most variants were missense or in-frame and that the mechanism was suggested to be dominant negative or gain of function.
  
  So the learner should understand:
  
  a missense variant can be much more compelling than a truncating variant when the disease mechanism points toward altered or interfering protein function.
  
  That is why consequence labels must always be read through a mechanism lens.`
          },
          {
            title: "Why dosage sensitivity does not settle this question by itself",
            body: `This lesson also needs a boundary with the previous one.
  
  A learner may think:
  
  “If I know the gene is not clearly haploinsufficient, then I know everything I need.”
  
  Not quite.
  
  Lack of strong haploinsufficiency evidence may weaken a pLoF candidate, but the fuller mechanism picture may involve:
  
  • gain of function
  • dominant negative
  • mixed mechanisms
  • or disease-specific nuance.
  
  ClinGen’s dosage framework is useful, but ClinGen’s gene-validity framework and evidence summaries are also important because they explicitly describe the proposed mechanism of pathogenicity for the gene–disease relationship.
  
  So the learner should understand:
  
  mechanism-aware prioritisation often needs more than just asking whether the gene is haploinsufficient.
  
  That is why this lesson comes after the haploinsufficiency lesson.`
          },
          {
            title: "Why mechanism mismatch should push candidates down the shortlist",
            body: `This is the most practical lesson in the module so far.
  
  If a candidate variant is:
  
  • technically strong
  • rare enough
  • phenotype-relevant
  
  but still looks like a poor mechanism fit, then it should usually drop in priority compared with a better-fit candidate.
  
  For example:
  
  • a truncating variant in a gene mainly associated with GoF/DN disease may drop
  • a mechanism-consistent missense variant in the same gene may rise.
  
  ClinGen’s mechanism-of-pathogenicity field exists precisely because this distinction matters to gene–disease reasoning.
  
  So the learner should understand:
  
  mechanism mismatch is a valid reason to lower shortlist rank, even when the technical evidence is strong.
  
  That is a major bioinformatic prioritisation skill.`
          },
          {
            title: "Why this still is not final classification",
            body: `This lesson must keep the same role boundary as the rest of Module 15.
  
  Recognising that:
  
  • a pLoF candidate is a poor mechanism fit
  • or a missense candidate is a better mechanism fit
  
  does not mean the learner is doing final variant classification. It means they are learning to:
  
  • rank candidates more safely
  • pass on more useful evidence
  • and avoid over-promoting biologically mismatched variants.
  
  ClinGen explicitly notes that gene-validity information is not intended for direct diagnostic use or medical decision-making without review by a genetics professional.
  
  So the learner should understand:
  
  mechanism-aware prioritisation improves the shortlist and the handoff, but it still does not replace downstream professional interpretation.`
          },
          {
            title: "The one-sentence takeaway",
            body: `If the learner remembers one sentence from this lesson, it should be:
  
  In genes where disease is mainly caused by gain of function or dominant negative effects, a truncating-looking variant may be a weaker shortlist candidate than a mechanism-consistent missense or in-frame variant, so “more severe consequence” is not automatically better.
  
  That is the core lesson.`
          },
          {
            title: "Worked example",
            body: `Scenario
  
  A learner compares two rare, technically strong variants in the same phenotype-relevant gene:
  
  • Variant A is stop-gained
  • Variant B is missense
  
  The learner says, “Variant A should clearly rank higher because stop-gained is more severe.”
  
  Later, they find curated evidence that the gene–disease relationship is mainly associated with gain of function or dominant negative effects.
  
  Beginner question
  
  Why should that change the ranking?
  
  Good beginner answer
  
  Because the mechanism suggests that disease is not mainly caused by simple loss of function. That means the stop-gained variant may be a poorer fit than the missense variant, even though its consequence label looks more severe. ClinGen’s mechanism-of-pathogenicity framework and gene-validity examples show that gain-of-function and dominant-negative genes often make non-truncating variants more compelling than pLoF-looking ones. So mechanism-aware review should push the missense candidate up and the truncating candidate down unless other evidence strongly supports a different conclusion.`
          },
          {
            title: "Lesson summary",
            body: `The learner has understood this lesson if they can say something like:
  
  “A truncating-looking variant is not automatically the strongest candidate. If the gene mainly causes disease through gain of function or dominant negative effects, then a missense or other mechanism-consistent variant may actually deserve higher priority.”`
          }
        ],
        sections: [
          {
            heading: "The central idea",
            body:
              "Some genes do not mainly cause disease by losing function, so a truncating-looking variant is not automatically the best candidate."
          }
        ],
        quiz: [
          {
            question:
              "What is the safest beginner description of gain of function?",
            options: [
              "Any variant that deletes one copy of a gene",
              "A variant effect that gives the gene product an abnormal or increased action rather than simply removing normal function",
              "A synonym for haploinsufficiency",
              "A measure of population rarity"
            ],
            answerIndex: 1,
            explanation:
              "ClinGen’s mechanism-of-pathogenicity descriptions explicitly include gain of function as a mechanism distinct from loss of function."
          },
          {
            question:
              "What is the safest beginner description of dominant negative?",
            options: [
              "A situation where one abnormal protein interferes with the normal protein’s function",
              "A synonym for recessive inheritance",
              "A sequencing artefact pattern",
              "A population frequency category"
            ],
            answerIndex: 0,
            explanation:
              "ClinGen curations and dosage comments use dominant negative to describe disease mechanisms where the altered product interferes with normal function."
          },
          {
            question:
              "Why can a truncating-looking variant be a weaker candidate than a missense variant?",
            options: [
              "Because missense always outranks truncating variants",
              "Because the gene may be mainly associated with gain of function or dominant negative disease, making the missense variant a better mechanism fit",
              "Because stop-gained variants are technically unreliable",
              "Because consequence labels do not matter at all"
            ],
            answerIndex: 1,
            explanation:
              "This is the main lesson: mechanism fit matters more than raw severity labels."
          },
          {
            question:
              "Which statement is most accurate?",
            options: [
              "A more severe-looking consequence automatically makes the strongest candidate",
              "Mechanism mismatch is a valid reason to lower a technically strong candidate on the shortlist",
              "Gain-of-function genes can be handled the same way as haploinsufficient genes",
              "Once a gene is phenotype-relevant, mechanism no longer matters"
            ],
            answerIndex: 1,
            explanation:
              "Mechanism-aware prioritisation is specifically about recognizing when a technically strong variant type is still biologically mismatched."
          }
        ]
      },
      {
        slug: "lesson-4",
        title:
          "Lesson 4: Dosage sensitivity, triplosensitivity, and copy-number thinking",
        goal:
          "By the end of this lesson, the learner should be able to answer: “What does dosage sensitivity mean, what is triplosensitivity, and why can both loss and gain of genomic material matter in different ways during prioritisation?”",
        screens: [
          {
            title: "Lesson goal",
            body: `By the end of this lesson, the learner should be able to answer:
  
  “What does dosage sensitivity mean, what is triplosensitivity, and why can both loss and gain of genomic material matter in different ways during prioritisation?”
  
  This lesson follows the loss-of-function and gain-of-function lessons because the learner has now seen two key ideas:
  
  • some genes cause disease when one working copy is effectively lost
  • some genes cause disease when function is altered in a more specific way.
  
  Now we add another related concept:
  
  dosage sensitivity.
  
  ClinGen’s Dosage Sensitivity curation is built specifically to evaluate whether genes and genomic regions show evidence for:
  
  • haploinsufficiency
  • triplosensitivity.`
          },
          {
            title: "The central idea",
            body: `A good beginner summary is:
  
  Dosage sensitivity means that having too little or too much of a gene product can cause disease.
  
  This matters because not all pathogenic mechanisms are about a changed protein sequence. Sometimes the problem is that gene dosage itself is altered:
  
  • one copy is missing or not functioning well enough
  • or an extra copy creates too much product.
  
  ClinGen’s dosage sensitivity framework exists precisely because gene and region dosage can be clinically important enough to curate directly.
  
  So the key beginner message is:
  
  some disorders are driven by the amount of gene product, not just the presence of a specific variant class.`
          },
          {
            title: "What dosage sensitivity means at beginner level",
            body: `At beginner level, dosage sensitivity means:
  
  the phenotype depends on gene copy number or effective gene output being in the right range.
  
  That means disease can happen because:
  
  • there is too little functional gene product
  • or there is too much.
  
  ClinGen’s dosage materials explicitly divide this into two main curated categories:
  
  • haploinsufficiency
  • triplosensitivity.
  
  So the learner should understand:
  
  dosage sensitivity is the bigger umbrella idea, and haploinsufficiency and triplosensitivity are two important specific forms of it.`
          },
          {
            title: "Revisiting haploinsufficiency as one kind of dosage sensitivity",
            body: `From the last lesson, the learner already knows:
  
  • haploinsufficiency means loss of one copy causes a consistent phenotype.
  
  This is dosage-sensitive disease through too little functional output. ClinGen defines haploinsufficiency that way in its curation materials.
  
  So the learner should understand:
  
  haploinsufficiency is dosage sensitivity on the “too little” side.
  
  That makes it easier to understand the next concept.`
          },
          {
            title: "What triplosensitivity means in plain language",
            body: `A safe beginner explanation of triplosensitivity is:
  
  having an extra copy is enough to cause a consistent phenotype.
  
  ClinGen’s dosage curation materials define triplosensitivity as when one extra copy of a gene or genomic region causes a consistent phenotype.
  
  So the learner should understand:
  
  triplosensitivity is dosage sensitivity on the “too much” side.
  
  That is the key mirror-image idea.`
          },
          {
            title: "Why copy-number changes matter here",
            body: `This lesson is also where copy-number thinking becomes more clinically useful.
  
  A gene or region can be affected by:
  
  • deletion or loss of one copy
  • duplication or gain of an extra copy
  
  and the clinical importance of those events depends partly on whether the gene/region has:
  
  • haploinsufficiency evidence
  • triplosensitivity evidence
  • both
  • or neither.
  
  ClinGen explicitly curates dosage evidence for both genes and genomic regions because copy-number changes can produce disease through dosage mechanisms.
  
  So the learner should understand:
  
  copy-number thinking is not separate from mechanism thinking; dosage sensitivity is one of the main reasons CNVs can matter clinically.`
          },
          {
            title: "Why haploinsufficiency and triplosensitivity are not interchangeable",
            body: `A learner may think:
  
  “If a gene is dosage sensitive, then losing or gaining copies must both matter.”
  
  That is too simple.
  
  Some genes have stronger evidence for:
  
  • haploinsufficiency only
  • triplosensitivity only
  • both
  • or neither.
  
  ClinGen gives separate scores for HI and TS, which shows clearly that these are related but distinct evidence questions.
  
  So the learner should understand:
  
  a gene can be sensitive to too little without being sensitive to too much, or vice versa.
  
  That is why the two categories are curated separately.`
          },
          {
            title: "Why this matters for prioritisation",
            body: `This lesson changes how different candidate types should rank.
  
  For example:
  
  • a deletion or pLoF-like candidate may rise more strongly if HI evidence is good
  • a duplication candidate may rise more strongly if TS evidence is good
  • a CNV in a region with little evidence for dosage sensitivity may feel less compelling than one in a well-supported dosage-sensitive region.
  
  ClinGen’s dosage sensitivity map exists specifically to support this kind of review.
  
  So the learner should understand:
  
  dosage sensitivity helps decide whether a gain or loss event is biologically plausible enough to deserve stronger shortlist attention.
  
  That is the practical use of the concept.`
          },
          {
            title: "Why dosage sensitivity is useful beyond CNVs alone",
            body: `It is tempting to think dosage sensitivity only matters for deletions and duplications.
  
  But it also helps interpret:
  
  • pLoF small variants in haploinsufficient genes
  • broader copy-number events
  • gene- or region-level mechanism plausibility.
  
  ClinGen’s dosage framework is used for both genes and regions, which shows that it is a mechanism-support tool more broadly, not just a CNV label.
  
  So the learner should understand:
  
  dosage sensitivity helps connect SNV/indel thinking and CNV thinking under one mechanism umbrella.
  
  That makes it especially useful in a clinical bioinformatics curriculum.`
          },
          {
            title: "Why dosage evidence still does not settle the case",
            body: `This lesson must keep the same boundary as the rest of the module.
  
  Even if a gene or region has strong dosage sensitivity evidence, that does not automatically prove:
  
  • that this specific variant or CNV is the diagnosis
  • that the phenotype fit is good enough
  • that the inheritance context is right
  • or that the technical evidence is strong enough.
  
  ClinGen dosage scores are curated gene/region-level evidence summaries. They support prioritisation, but they do not replace full downstream interpretation.
  
  So the learner should understand:
  
  dosage sensitivity can strengthen a candidate substantially, but it still needs to be integrated with the rest of the workflow.`
          },
          {
            title: "Why ClinGen dosage scores matter here",
            body: `ClinGen’s dosage curation framework gives separate scores for:
  
  • haploinsufficiency
  • triplosensitivity
  
  Their scoring SOP states that the highest score is 3, representing sufficient evidence, with lower scores reflecting weaker evidence.
  
  At this stage, the learner does not need full memorisation of the score system. The main practical point is:
  
  separate HI and TS scores help reviewers avoid assuming that all gains and losses behave the same way.
  
  That is one of the biggest advantages of curated dosage resources.`
          },
          {
            title: "The one-sentence takeaway",
            body: `If the learner remembers one sentence from this lesson, it should be:
  
  Dosage sensitivity means that too little or too much gene product can cause disease, so haploinsufficiency and triplosensitivity help prioritise deletions, duplications, and loss-of-function candidates by showing whether gain or loss of dosage is a plausible mechanism for that gene or region.
  
  That is the core lesson.`
          },
          {
            title: "Worked example",
            body: `Scenario
  
  A learner is comparing two CNV-style candidates in phenotype-relevant regions:
  
  • Candidate A is a deletion involving a gene with strong ClinGen haploinsufficiency evidence
  • Candidate B is a duplication involving a gene with little or no triplosensitivity evidence
  
  The learner says, “Both involve dosage change, so they should feel equally strong.”
  
  Beginner question
  
  Why is that too simple?
  
  Good beginner answer
  
  Because dosage sensitivity is not one single yes/no property. The deletion is more compelling because the gene has curated evidence that losing one copy can cause a consistent phenotype, which supports haploinsufficiency. The duplication is less compelling if there is little evidence that an extra copy causes disease through triplosensitivity. ClinGen scores these mechanisms separately for exactly this reason.`
          },
          {
            title: "Lesson summary",
            body: `The learner has understood this lesson if they can say something like:
  
  “Dosage sensitivity means the phenotype can depend on gene copy number or effective gene output. Haploinsufficiency tells me when too little dosage is a plausible mechanism, triplosensitivity tells me when too much is plausible, and that helps me rank deletions, duplications, and loss-of-function candidates more safely.”`
          }
        ],
        sections: [
          {
            heading: "The central idea",
            body:
              "Dosage sensitivity means that having too little or too much of a gene product can cause disease."
          }
        ],
        quiz: [
          {
            question:
              "What is the best beginner description of dosage sensitivity?",
            options: [
              "A variant-level pathogenicity class",
              "The idea that too little or too much gene product can cause disease",
              "A synonym for missense constraint",
              "A sequencing QC metric"
            ],
            answerIndex: 1,
            explanation:
              "Dosage sensitivity is the broader mechanism idea that gene copy number or effective output can matter clinically. ClinGen curates this directly through HI and TS evidence."
          },
          {
            question: "What is triplosensitivity?",
            options: [
              "When one extra copy of a gene or genomic region causes a consistent phenotype",
              "When one copy is lost and causes disease",
              "A synonym for dominant negative",
              "A measure of gene constraint"
            ],
            answerIndex: 0,
            explanation:
              "ClinGen defines triplosensitivity as a consistent phenotype caused by one extra copy."
          },
          {
            question:
              "Why are haploinsufficiency and triplosensitivity scored separately?",
            options: [
              "Because too little and too much dosage can have different clinical relevance",
              "Because they mean the same thing",
              "Because one is for SNVs and one is for CNVs only",
              "Because triplosensitivity always matters more"
            ],
            answerIndex: 0,
            explanation:
              "ClinGen’s separate HI and TS scores show that loss and gain of dosage are related but distinct evidence questions."
          },
          {
            question:
              "Which statement is most accurate?",
            options: [
              "Any deletion or duplication in a phenotype-relevant gene is automatically diagnostic",
              "Dosage sensitivity can strongly raise or lower a candidate’s plausibility, but it still needs technical, phenotype, inheritance, and broader context support",
              "Dosage sensitivity only matters for genome builds",
              "Haploinsufficiency and triplosensitivity are interchangeable"
            ],
            answerIndex: 1,
            explanation:
              "This is the key boundary of the lesson: dosage sensitivity is a mechanism-support clue, not a standalone proof tool."
          }
        ]
      },
      {
        slug: "lesson-5",
        title: "Lesson 5: Mechanism mismatch in shortlist review",
        goal:
          "By the end of this lesson, the learner should be able to answer: “How should I handle a candidate variant that is technically strong and rare, but does not fit the known disease mechanism of the gene very well?”",
        screens: [
          {
            title: "Lesson goal",
            body: `By the end of this lesson, the learner should be able to answer:
  
  “How should I handle a candidate variant that is technically strong and rare, but does not fit the known disease mechanism of the gene very well?”
  
  This lesson is the most applied lesson in Module 15 so far.
  
  The learner has already seen that:
  
  • some genes fit disease through loss of function
  • some fit through gain of function
  • some fit through dominant negative effects
  • some involve dosage sensitivity.
  
  Now the learner needs the practical shortlist skill:
  
  what do I do when the variant and the mechanism do not line up well?
  
  ClinGen’s gene-validity framework includes a dedicated field for mechanism of pathogenicity, with examples such as loss of function, gain of function, dominant negative, unknown, and unclear. That is exactly the kind of curated information that helps identify a mechanism mismatch during prioritisation.`
          },
          {
            title: "The central idea",
            body: `A good beginner summary is:
  
  Mechanism mismatch means the variant type does not fit the known or most likely way the gene causes disease, so the candidate should usually lose priority even if it looks strong in other ways.
  
  That does not always mean the candidate is impossible. It means the candidate is less convincing than it first appears. ClinGen curations explicitly record mechanisms such as haploinsufficiency, gain of function, and dominant negative because this distinction changes how evidence should be interpreted.
  
  So the key beginner message is:
  
  technical strength and rarity do not rescue a candidate that is a poor mechanism fit.`
          },
          {
            title: "What mechanism mismatch looks like in practice",
            body: `At beginner level, mechanism mismatch often looks like one of these patterns:
  
  • a pLoF variant in a gene mainly associated with gain of function
  • a truncating-looking variant in a gene mainly associated with dominant negative effects
  • a duplication candidate in a gene or region without convincing triplosensitivity evidence
  • a single heterozygous pLoF in a gene mainly associated with biallelic recessive disease.
  
  These are all examples of the same deeper problem:
  
  the candidate variant type and the gene-level disease model are pulling in different directions.
  
  ClinGen dosage and gene-validity resources support exactly this kind of mechanism-aware review by separating haploinsufficiency, triplosensitivity, and curated mechanism-of-pathogenicity evidence.`
          },
          {
            title: "Why mismatch should lower rank even when the call is technically strong",
            body: `A learner may think:
  
  “The variant is technically convincing, rare, and in the right gene, so it still deserves top priority.”
  
  That is often too generous.
  
  A technically strong call tells you the evidence is probably real as a sequence event. It does not tell you the event is the right kind of event for that gene–disease relationship. ClinGen gene-validity examples show that gene–disease curations can identify specific mechanisms such as haploinsufficiency, dominant negative, or gain of function, which means mechanism fit is a separate shortlist question from technical confidence.
  
  So the learner should understand:
  
  technical confidence answers “is the call believable?” while mechanism-aware prioritisation asks “is this the right kind of believable event?”
  
  That is why the candidate usually drops in rank when the fit is poor.`
          },
          {
            title: "Why mismatch does not always mean automatic rejection",
            body: `This lesson needs a careful boundary.
  
  Mechanism mismatch usually lowers confidence, but it does not always force immediate rejection. Sometimes:
  
  • the curated mechanism may still be incomplete
  • the disease biology may be more complex than it first appears
  • the evidence may suggest mixed or uncertain mechanisms
  • or the candidate may still be worth discussion because other clues are strong.
  
  ClinGen validity curations sometimes explicitly state that more than one mechanism may be possible. For example, one curation notes that haploinsufficiency has been suggested, but a dominant-negative mechanism could not be ruled out, and another notes that the mechanism is either haploinsufficiency or dominant negative.
  
  So the learner should understand:
  
  mechanism mismatch often means “lower priority and more caution,” not always “discard immediately.”
  
  That is a safer and more realistic professional mindset.`
          },
          {
            title: "CHAMP1 as a strong teaching example of mismatch",
            body: `CHAMP1 is a very useful example here.
  
  ClinGen’s dosage page for CHAMP1 says there is no convincing functional evidence that the reported nonsense and frameshift variants act through straightforward haploinsufficiency, because they are expected to escape nonsense-mediated decay. The same curation says that dominant negative and gain-of-function effects have been proposed as the likely mechanism.
  
  So the learner should understand:
  
  a truncating-looking CHAMP1 variant should not automatically be treated as a simple haploinsufficiency-style candidate.
  
  That is exactly the kind of situation where raw consequence severity can mislead shortlist review.`
          },
          {
            title: "Why a “less severe” variant can outrank a “more severe” one",
            body: `This is one of the most important practical conclusions in the module.
  
  Suppose two variants are in the same or similarly relevant genes:
  
  • Variant A looks more dramatic on paper, such as stop-gained
  • Variant B looks less dramatic, such as missense or in-frame.
  
  If the disease mechanism is mainly gain of function or dominant negative, Variant B may actually be the stronger candidate because it matches the mechanism better. ClinGen validity entries include examples where the mechanism is reported to be gain of function or dominant negative, and in some entries the reported pathogenic variants are predominantly missense or in-frame rather than simple LoF-style changes.
  
  So the learner should understand:
  
  mechanism-consistent can outrank consequence-severe.
  
  That is a core shortlist-ranking skill.`
          },
          {
            title: "Why inheritance can make mismatch even clearer",
            body: `Mechanism mismatch often becomes even clearer when inheritance is added.
  
  Examples:
  
  • a single heterozygous pLoF in a gene mainly associated with autosomal recessive disease is a weaker fit
  • a de novo missense variant in a gene known for dominant GoF/DN disease may be a stronger fit
  • a duplication in a region without good triplosensitivity evidence may remain weaker even if rare.
  
  ClinGen dosage downloads explicitly include categories such as gene associated with autosomal recessive phenotype, and dosage scoring separates haploinsufficiency from triplosensitivity, which helps clarify these mismatches.
  
  So the learner should understand:
  
  mechanism mismatch is often easiest to see when consequence, mechanism, and inheritance are considered together.`
          },
          {
            title: "How mismatch should change communication",
            body: `Mechanism-aware review should also change how the candidate is described.
  
  A strong mechanism fit might justify wording like:
  
  • mechanism-consistent candidate
  • biologically plausible given known disease mechanism
  • stronger shortlist candidate.
  
  A weaker mechanism fit might need wording like:
  
  • technically strong but mechanism-mismatched
  • lower biological plausibility
  • requires caution in downstream review
  • not the best fit for the known gene–disease mechanism.
  
  ClinGen’s mechanism-of-pathogenicity field exists precisely because mechanism affects how evidence should be framed.
  
  So the learner should understand:
  
  mechanism mismatch should lower not only shortlist rank, but also the confidence of the wording used in handoff.`
          },
          {
            title: "Why this supports, but does not replace, downstream interpretation",
            body: `This lesson must keep the same role boundary as the whole module.
  
  Recognising that a candidate is:
  
  • mechanism-consistent
  • or mechanism-mismatched
  
  does not mean the learner is doing full formal classification. It means they are making the shortlist and handoff more intelligent and safer. ClinGen explicitly states that its gene-validity information is not intended for direct diagnostic use or medical decision-making without review by a genetics professional.
  
  So the learner should understand:
  
  mechanism-aware review improves bioinformatic prioritisation, but still stops short of final clinical sign-out.`
          },
          {
            title: "The one-sentence takeaway",
            body: `If the learner remembers one sentence from this lesson, it should be:
  
  Mechanism mismatch means a candidate variant’s type does not fit the known way the gene causes disease, so even a technically strong and rare variant should usually drop in shortlist priority when its mechanism fit is poor, while a less dramatic but mechanism-consistent variant may rise above it.
  
  That is the core lesson.`
          },
          {
            title: "Worked example",
            body: `Scenario
  
  A learner is reviewing two technically strong, rare candidates in phenotype-relevant genes.
  
  • Variant A is a frameshift variant in a gene where curated evidence suggests disease is mainly caused by gain of function or dominant negative effects
  • Variant B is a missense variant in the same gene and better matches the reported mechanism.
  
  The learner says, “Variant A still has to rank higher because a frameshift is more severe.”
  
  Beginner question
  
  Why should that ranking change?
  
  Good beginner answer
  
  Because the problem is not just how severe the annotation looks, but whether the variant type fits the gene’s disease mechanism. If the gene is mainly associated with gain-of-function or dominant-negative disease, then a missense variant may be much more plausible than a frameshift, even though the frameshift looks more dramatic on paper. ClinGen curations explicitly record these mechanisms, and CHAMP1 is a good example where truncating-looking variants should not automatically be treated as simple loss-of-function candidates. So Variant B may deserve higher priority because it is a better mechanism fit.`
          },
          {
            title: "Lesson summary",
            body: `The learner has understood this lesson if they can say something like:
  
  “A technically strong candidate can still be biologically weak if its variant type does not match how the gene is known to cause disease. In that situation, I should usually push it down the shortlist and give more attention to a candidate with better mechanism fit, even if the second variant looks less severe on paper.”`
          }
        ],
        sections: [
          {
            heading: "The central idea",
            body:
              "Mechanism mismatch means the variant type does not fit the known or most likely way the gene causes disease, so the candidate should usually lose priority even if it looks strong in other ways."
          }
        ],
        quiz: [
          {
            question: "What is the safest description of mechanism mismatch?",
            options: [
              "A sequencing artefact",
              "A situation where the candidate variant type does not fit the known disease mechanism of the gene",
              "A synonym for low quality",
              "A type of population frequency error"
            ],
            answerIndex: 1,
            explanation:
              "Mechanism mismatch is about the relationship between the variant type and the curated gene–disease mechanism, not about technical calling quality."
          },
          {
            question:
              "Why should a mechanism-mismatched candidate usually lose priority?",
            options: [
              "Because technical evidence becomes irrelevant",
              "Because shortlist ranking should reflect not only that a variant is real, but that it is the right kind of event for the gene–disease relationship",
              "Because all truncating variants are benign in GoF genes",
              "Because phenotype fit no longer matters"
            ],
            answerIndex: 1,
            explanation:
              "A candidate can be technically strong and still biologically weak if its event type does not fit the mechanism."
          },
          {
            question: "Why is CHAMP1 a helpful teaching example?",
            options: [
              "Because it proves all frameshift variants are irrelevant",
              "Because its dosage curation notes that dominant negative and gain-of-function effects have been proposed, so truncating-looking variants should not be assumed to reflect simple haploinsufficiency",
              "Because it is only relevant for CNVs",
              "Because it has no phenotype association"
            ],
            answerIndex: 1,
            explanation:
              "ClinGen’s CHAMP1 dosage page explicitly says there is no convincing evidence for straightforward haploinsufficiency and that dominant negative and gain-of-function effects have been proposed."
          },
          {
            question: "Which statement is most accurate?",
            options: [
              "Mechanism mismatch always means automatic rejection",
              "A less severe-looking but mechanism-consistent candidate may outrank a more severe-looking mechanism-mismatched one",
              "Consequence severity always outranks mechanism fit",
              "Mechanism-aware review is the same thing as final classification"
            ],
            answerIndex: 1,
            explanation:
              "That is the main applied lesson of this module: mechanism fit can outweigh raw annotation severity in shortlist ranking."
          }
        ]
      },
      {
        slug: "lesson-6",
        title:
          "Lesson 6: How mechanism-aware prioritisation fits into clinical bioinformatics",
        goal:
          "By the end of this lesson, the learner should be able to answer: “What is mechanism-aware prioritisation actually used for in real clinical bioinformatics work, and how should it affect shortlist ranking, communication, and escalation?”",
        screens: [
          {
            title: "Lesson goal",
            body: `By the end of this lesson, the learner should be able to answer:
  
  “What is mechanism-aware prioritisation actually used for in real clinical bioinformatics work, and how should it affect shortlist ranking, communication, and escalation?”
  
  This lesson finishes Module 15 by tying mechanism back to real workflow behaviour. The learner has now seen that:
  
  • genes do not all cause disease in the same way
  • haploinsufficiency can make pLoF variants more compelling
  • gain of function and dominant negative mechanisms can make truncating-looking variants less compelling
  • dosage sensitivity changes how deletions and duplications should be prioritised
  • a technically strong variant can still be a poor candidate if the mechanism fit is weak.
  
  ClinGen’s dosage-sensitivity curation explicitly collects evidence supporting or refuting haploinsufficiency and triplosensitivity, and ClinGen’s gene-disease validity resources state that their information is not intended for direct diagnostic use or medical decision-making without review by a genetics professional.`
          },
          {
            title: "The central idea",
            body: `A good beginner summary is:
  
  Mechanism-aware prioritisation is used to decide whether a candidate variant is the right kind of event for the gene–disease relationship, not just whether it is technically strong or rare.
  
  That means mechanism changes real workflow decisions:
  
  • which candidates rise or fall in rank
  • which candidates are described as stronger or weaker biological fits
  • which ones need caution in handoff
  • and which ones should be escalated because the biology is uncertain or mismatched. ClinGen’s curation frameworks separate dosage evidence from gene–disease validity evidence precisely because different layers of biology matter in review.
  
  So the key beginner message is:
  
  mechanism-aware prioritisation helps answer “does this candidate make biological sense for this gene?” rather than only “does this candidate exist?”`
          },
          {
            title: "Why mechanism comes after technical review, not instead of it",
            body: `Mechanism-aware review only makes sense once the candidate is already technically believable enough to discuss.
  
  That means the workflow usually goes like this:
  
  1. is the call technically credible?
  2. is it rare enough and still on the shortlist?
  3. does the phenotype and inheritance context keep it relevant?
  4. does the variant type fit the known mechanism of disease in the gene?
  
  So the learner should understand:
  
  mechanism is not a replacement for earlier modules; it is a later filter on top of them.
  
  A technically weak or artefactual candidate does not become strong just because the mechanism looks attractive, and a technically strong candidate can still drop if the mechanism fit is poor. ClinGen’s resources support this layered use because they are evidence frameworks for curation and review, not shortcuts that replace the rest of the workflow.`
          },
          {
            title: "Why mechanism changes shortlist rank",
            body: `This is the most practical use of the whole module.
  
  A candidate should usually rise when:
  
  • its variant class matches the known mechanism
  • its inheritance is compatible
  • and the relevant gene or region evidence supports that mechanism.
  
  A candidate should usually fall when:
  
  • it looks severe but points toward the wrong mechanism
  • it is a duplication with weak triplosensitivity support
  • it is a heterozygous pLoF in a recessive-only context
  • or it is a truncating-looking variant in a gene mainly associated with GoF or dominant-negative effects.
  
  ClinGen’s dosage curation gives separate haploinsufficiency and triplosensitivity scores, while gene–disease validity curation explicitly captures whether a gene–disease relationship is sufficiently supported for monogenic disease.
  
  So the learner should understand:
  
  mechanism-aware prioritisation is one of the main reasons two technically similar candidates can deserve very different shortlist positions.`
          },
          {
            title: "Why mechanism changes how strongly a candidate should be described",
            body: `Mechanism-aware review should also change the wording used in handoff.
  
  A mechanism-consistent candidate may reasonably be described as:
  
  • biologically plausible for the curated mechanism
  • mechanism-consistent
  • stronger for downstream review.
  
  A mechanism-mismatched candidate may need wording like:
  
  • technically strong but poor mechanism fit
  • less compelling biological candidate
  • weaker support for the known disease mechanism
  • needs caution in interpretation.
  
  ClinGen’s gene-disease validity materials explicitly caution that their information is not intended for direct diagnostic use without genetics-professional review, which reinforces that the analyst should describe plausibility carefully rather than overstate certainty.
  
  So the learner should understand:
  
  mechanism fit affects not only rank, but also the confidence and caution of the language used in communication.`
          },
          {
            title: "Why mechanism can support escalation",
            body: `Some candidates are exactly the kind that should trigger more careful escalation:
  
  • technically strong but biologically mismatched
  • phenotype-relevant but mechanism-uncertain
  • duplication or deletion candidates in a dosage context with incomplete evidence
  • variants in genes where more than one mechanism has been suggested.
  
  ClinGen’s dosage framework and validity framework both exist because evidence for mechanism is something that can be stronger or weaker, not always fully settled.
  
  So the learner should understand:
  
  mechanism-aware prioritisation helps identify when the right next step is not overconfidence, but clearer escalation and caveated handoff.
  
  That is especially important for safe NHS-style working.`
          },
          {
            title: "Why mechanism-aware prioritisation improves shortlist quality",
            body: `A shortlist becomes stronger when it is not just:
  
  • technically clean
  • rare enough
  • phenotype-relevant
  
  but also:
  
  • mechanism-consistent.
  
  Without mechanism-aware review, the shortlist can become distorted by apparently dramatic but biologically weak candidates. That is why this module matters so much: it helps stop the learner from over-promoting the wrong variant just because the annotation looks severe. ClinGen’s dosage and validity resources support exactly this kind of distinction by curating evidence for dosage sensitivity and monogenic gene–disease relationships.
  
  So the learner should understand:
  
  mechanism-aware review is one of the main ways shortlist quality improves before final downstream interpretation.`
          },
          {
            title: "Why this still is not final classification",
            body: `This is the most important professional boundary in the module.
  
  Mechanism-aware prioritisation does not mean:
  
  • the learner is signing out the case
  • assigning final pathogenicity classes
  • or making the final diagnostic judgment.
  
  It means the learner is making the shortlist and handoff more biologically intelligent. ClinGen’s gene-disease validity pages explicitly state that the information is not intended for direct diagnostic use or medical decision-making without review by a genetics professional.
  
  So the learner should understand:
  
  mechanism-aware bioinformatics sits between candidate generation and downstream professional interpretation; it sharpens the handoff, but it does not replace final classification.`
          },
          {
            title: "Why this matters for safe autonomous practice later",
            body: `This module is also preparation for later autonomy modules.
  
  A stronger trainee is not someone who says:
  
  • “this is stop-gained, so it wins”
  • or “this is in the right gene, so it must be the answer.”
  
  A stronger trainee says:
  
  • “this candidate is technically strong, but the mechanism fit is weak”
  • “this one is less severe-looking but a better biological fit”
  • “this mechanism is not fully settled, so it should be communicated cautiously”
  • “this should be passed on as a higher- or lower-priority candidate with mechanism-aware reasoning.”
  
  That is exactly the kind of safer, more mature shortlist reasoning this module is supposed to develop.`
          },
          {
            title: "The one-sentence takeaway",
            body: `If the learner remembers one sentence from this lesson, it should be:
  
  In clinical bioinformatics, mechanism-aware prioritisation is used to decide whether a candidate variant is the right kind of event for the gene–disease relationship, which helps refine shortlist rank, wording, and escalation without turning prioritisation into final diagnostic classification.
  
  That is the core lesson.`
          },
          {
            title: "Worked example",
            body: `Scenario
  
  Two technically strong, rare candidates remain after earlier filtering.
  
  Variant A
  
  • stop-gained
  • phenotype-relevant gene
  • but curated evidence suggests the gene–disease relationship is mainly associated with gain of function or dominant negative effects
  
  Variant B
  
  • missense
  • same phenotype-relevant gene
  • better matches the curated mechanism
  
  A beginner says, “Variant A still deserves to be presented as the stronger candidate because the consequence is more severe.”
  
  Beginner question
  
  Why is that incomplete?
  
  Good beginner answer
  
  Because the stronger-looking consequence does not automatically make the stronger biological candidate. If the gene is mainly associated with gain-of-function or dominant-negative disease, then the missense variant may be the better mechanism fit and therefore the stronger shortlist candidate. The stop-gained variant may still deserve mention, but it should usually be described more cautiously because it is a poorer fit for the curated mechanism. ClinGen’s dosage and gene-disease validity resources exist precisely to support this kind of mechanism-aware review rather than consequence-only ranking.`
          },
          {
            title: "Lesson summary",
            body: `The learner has understood this lesson if they can say something like:
  
  “Mechanism-aware prioritisation helps me decide whether a candidate variant is biologically the right kind of event for the gene–disease relationship. That changes how high it should sit on the shortlist, how strongly I should describe it, and whether I should flag more caution or escalation, even though I am still not doing final classification.”`
          }
        ],
        sections: [
          {
            heading: "The central idea",
            body:
              "Mechanism-aware prioritisation is used to decide whether a candidate variant is the right kind of event for the gene–disease relationship, not just whether it is technically strong or rare."
          }
        ],
        quiz: [
          {
            question:
              "What is the main practical role of mechanism-aware prioritisation?",
            options: [
              "To replace technical review",
              "To decide whether a candidate variant is the right kind of event for the gene–disease relationship",
              "To assign final pathogenicity classes",
              "To replace phenotype information"
            ],
            answerIndex: 1,
            explanation:
              "Mechanism-aware prioritisation is about biological fit of the variant type to the curated gene–disease mechanism, not about replacing earlier filters or final classification."
          },
          {
            question:
              "Why can mechanism-aware review change shortlist rank?",
            options: [
              "Because it helps distinguish a technically strong but biologically mismatched candidate from a better biological fit",
              "Because all mechanism-consistent variants are automatically diagnostic",
              "Because severity labels stop mattering completely",
              "Because mechanism replaces inheritance"
            ],
            answerIndex: 0,
            explanation:
              "This is the heart of Module 15: shortlist rank should reflect not only whether the variant is real, but whether it is the right kind of event for the gene."
          },
          {
            question:
              "Why should mechanism-aware review affect communication?",
            options: [
              "Because the candidate can be described more or less confidently depending on biological fit",
              "Because ClinGen provides final report wording",
              "Because communication is unrelated to prioritisation",
              "Because all mechanism-mismatched variants must be rejected silently"
            ],
            answerIndex: 0,
            explanation:
              "Mechanism fit changes how strongly a candidate should be presented and whether caution should be emphasized in handoff."
          },
          {
            question:
              "What is the safest overall message of Module 15?",
            options: [
              "The most severe-looking variant usually wins",
              "Mechanism-aware prioritisation helps make shortlist reasoning biologically smarter, but it still supports downstream interpretation rather than replacing final professional classification",
              "Haploinsufficiency explains all dominant disease",
              "Mechanism is only relevant after sign-out"
            ],
            answerIndex: 1,
            explanation:
              "That is the integrated lesson of the module: mechanism improves prioritisation and handoff, while preserving the boundary that final clinical interpretation belongs downstream."
          }
        ]
      }
    ]
  };