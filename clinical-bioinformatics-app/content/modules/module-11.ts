export const module11 = {
  slug: "module-11",
  title: "Module 11: Artefacts and analytical pitfalls",
  description:
    "Learn how artefacts and analytical pitfalls can mislead variant review, including high-homology regions, repeats, contamination, and caller/filtering behaviour.",
  lessons: [
    {
      slug: "lesson-1",
      title: "Lesson 1: What is an artefact in genomic analysis?",
      goal:
        "By the end of this lesson, the learner should be able to answer: “What is an artefact in genomic analysis, and why can an artefact make a variant call look real when it is actually misleading?”",
      screens: [
        {
          title: "Lesson goal",
          body: `By the end of this lesson, the learner should be able to answer:

“What is an artefact in genomic analysis, and why can an artefact make a variant call look real when it is actually misleading?”

This lesson starts Module 11 because the learner now understands how to judge whether a call looks technically strong using metrics like depth, allele balance, genotype confidence, mapping quality, and strand distribution.

The next step is to understand a harder truth:

sometimes a call can still look convincing on the surface and yet be misleading because the signal is artefactual.

Variant-calling reviews note that separating real variation from sequencing and analysis errors is a core challenge in genomics, and IGV review guidance emphasizes that visual review is often needed because false-positive and false-negative calls still occur after automated pipelines.`
        },
        {
          title: "The central idea",
          body: `A good beginner summary is:

**An artefact is a signal in the data that looks like real genomic variation, but is actually caused or distorted by technical processes such as sequencing, alignment, sample issues, or analysis workflow behaviour.**

That means the data may contain something that resembles a true variant call without being trustworthy as a real biological event in the patient. Reviews of variant calling and clinical sequencing caveats both describe false positives arising from sequencing errors, PCR errors, and mis-mapped reads, while false negatives can arise when true variants are missed because of coverage or analytical limitations.

So the key beginner message is:

**“called” does not automatically mean “real,” and “not called” does not automatically mean “absent.”**

That is one of the most important technical mindsets in clinical bioinformatics.`
        },
        {
          title: "Why artefacts matter in clinical bioinformatics",
          body: `Artefacts matter because clinical bioinformatics is not just about finding interesting-looking variants. It is about making sure the evidence being carried forward is trustworthy enough to support downstream clinical reasoning.

If artefacts are not recognised, they can:

• distract attention away from stronger candidates
• create false reassurance
• create false concern
• waste time in review
• distort prioritisation and escalation decisions

Best-practice reviews for clinical sequencing explicitly recommend rigorous filtering and careful review to remove false positives, and visual-inspection papers note that manual review is important precisely because automated pipelines still produce misleading calls.

So the learner should understand:

artefact awareness is part of patient-safe practice, not just technical neatness.`
        },
        {
          title: "An artefact is not always a complete fabrication",
          body: `A beginner may imagine an artefact as something totally fake, like a random number with no basis in the data.

Sometimes that is true, but often an artefact is more subtle:

• there may be real reads present
• there may even be alternate-looking support
• but the pattern of evidence is misleading because of how the data were generated, aligned, or interpreted

IGV review guidance shows examples where candidate variants appear plausible until the aligned-read pattern is inspected more carefully. Clinical sequencing reviews likewise explain that false-positive calls can arise from mis-mapped reads on repetitive or homologous regions, not just from total machine failure.

So the learner should understand:

an artefact often looks deceptively plausible rather than obviously absurd.

That is why artefacts can fool beginners so easily.`
        },
        {
          title: "The main sources of artefacts at beginner level",
          body: `At beginner level, the learner does not need every possible error mode, but they do need the main families.

Artefacts can arise from:

• sequencing and library-preparation issues, such as PCR or chemistry-related errors
• alignment or mapping problems, especially in repetitive or homologous regions
• sample problems, such as contamination or mixed signals
• caller and filtering behaviour, where the software outputs a misleading call or misses a true one

Clinical sequencing caveat papers and best-practice reviews describe all of these as real contributors to false-positive and false-negative variant calls.

So the learner should understand:

artefacts are not just “bad reads.” They can emerge at multiple stages of the workflow.

This is why the module will look at several different artefact families rather than just one.`
        },
        {
          title: "Why a neat-looking VCF call can still be misleading",
          body: `This is one of the most important lessons in the module.

A call may look neat in the VCF because:

• it has a plausible allele
• it passed some filters
• it sits in a relevant gene
• it even has some supporting reads

But that does not guarantee the signal is real. Variant-calling best-practice reviews state that rigorous filtering is needed to remove false positives, and IGV review guidance shows that read-level inspection often reveals problems not obvious from summary fields alone.

So the learner should understand:

a clean-looking VCF row is not the same thing as a clean underlying evidence pattern.

That is why BAM/CRAM review and artefact awareness remain important.`
        },
        {
          title: "Why artefacts can also cause false negatives",
          body: `This module is not only about false positives.

Some technical pitfalls make true variants harder to detect or easier to miss. Clinical exome-sequencing caveat reviews explain that nonuniform coverage or lack of coverage can reduce sensitivity, and best-practice variant-calling reviews note that complex genomic regions can make accurate calling difficult.

So the learner should understand:

artefacts and analytical pitfalls can create both false positives and false negatives.

That means “absence from the call set” can sometimes reflect a technical problem rather than true biological absence.`
        },
        {
          title: "Why automation does not eliminate artefacts",
          body: `A beginner may think:

“Surely modern pipelines have already removed these problems automatically.”

That is too simple.

Automated pipelines are essential, but they are not perfect. Best-practice reviews in clinical sequencing recommend rigorous filtering specifically because variant calling is vulnerable to false positives, and visual-inspection papers say directly that false-positive and false-negative variants still occur despite multiple pipeline QC steps.

So the learner should understand:

automation reduces problems, but it does not remove the need for sceptical review.

That is one of the main reasons artefact awareness is part of clinical bioinformatics training.`
        },
        {
          title: "What artefact-aware thinking looks like",
          body: `At beginner level, artefact-aware thinking means asking questions like:

• Does this call look strong for more than one reason?
• Could the support be explained by mapping ambiguity?
• Does the region itself make the call harder to trust?
• Could contamination or mixed-signal behaviour explain the allele pattern?
• Does the caller output look neat, but the read evidence look uncomfortable?
• If the call is absent, could the region still be technically difficult?

This way of thinking is consistent with IGV review guidance, which emphasizes inspection, validation, and interpretation of NGS datasets rather than blind acceptance of automated calls.

So the learner should understand:

artefact awareness is really a form of disciplined scepticism.

It means being cautious without becoming cynical.`
        },
        {
          title: "What this module will add beyond Module 10",
          body: `Module 10 taught the learner how to think:

• does the call look technically strong?
• do the metrics feel coherent?

Module 11 now teaches:

• what kinds of pitfalls commonly make evidence look weaker or more misleading?
• what categories of technical trap should immediately raise suspicion?

So the learner should understand:

Module 10 was about judging confidence; Module 11 is about understanding what can fool that judgement.

That is why the next lessons will cover:

• pseudogenes and paralogs
• repeats and low-complexity regions
• contamination and mixed signals
• caller and filtering pitfalls`
        },
        {
          title: "The one-sentence takeaway",
          body: `If the learner remembers one sentence from this lesson, it should be:

**An artefact in genomic analysis is a misleading signal that imitates or distorts real variation because of sequencing, mapping, sample, or analytical problems, which is why variant calls must be reviewed critically rather than accepted at face value.**

That is the core lesson.`
        },
        {
          title: "Worked example",
          body: `**Scenario**

A learner sees a candidate variant that:

• appears in the VCF
• has some read support
• is in a relevant gene

and says, “This looks real enough to carry forward.”

**Beginner question**

Why is that incomplete?

**Good beginner answer**

Because a call can still be artefactual even if it appears in the VCF and has some supporting reads. False-positive calls can arise from things like sequencing errors, PCR artefacts, or mis-mapped reads, and visual review literature shows that suspicious evidence patterns are often only obvious once the aligned reads are inspected more carefully. So before treating the variant as strong evidence, the learner should ask whether the signal could be explained by a known technical pitfall rather than true variation in the patient.`
        },
        {
          title: "Lesson summary",
          body: `The learner has understood this lesson if they can say something like:

“An artefact is a technically misleading signal that can make a variant call look more real or more convincing than it should. It can come from sequencing, alignment, sample issues, or analysis, so I should not trust a call just because it looks neat in the output.”`
        }
      ],
      sections: [
        {
          heading: "The central idea",
          body:
            "An artefact is a signal in the data that looks like real genomic variation, but is actually caused or distorted by technical processes such as sequencing, alignment, sample issues, or analysis workflow behaviour."
        }
      ],
      quiz: [
        {
          question:
            "What is the best beginner definition of an artefact in genomic analysis?",
          options: [
            "A variant that is definitely pathogenic",
            "A misleading signal that looks like real variation but is caused or distorted by technical or analytical factors",
            "Any variant found in a difficult gene",
            "A variant that fails phenotype matching"
          ],
          answerIndex: 1,
          explanation:
            "Variant-calling reviews and clinical sequencing caveat papers describe artefacts as false-positive or misleading signals arising from technical issues such as sequencing, PCR, mapping, or analysis behaviour."
        },
        {
          question: "Why can an artefact be difficult to recognise?",
          options: [
            "Because artefacts never appear in variant-calling outputs",
            "Because artefacts often look superficially plausible rather than obviously fake",
            "Because artefacts only occur in somatic sequencing",
            "Because artefacts always have zero read support"
          ],
          answerIndex: 1,
          explanation:
            "IGV review guidance shows that misleading calls often look plausible until the aligned evidence is reviewed more closely."
        },
        {
          question: "Which statement is most accurate?",
          options: [
            "Artefacts only create false positives, never false negatives",
            "Artefacts and analytical pitfalls can contribute to both false positives and false negatives",
            "Artefacts are always eliminated automatically by modern pipelines",
            "Artefacts matter only before VCF generation"
          ],
          answerIndex: 1,
          explanation:
            "Clinical sequencing reviews note that sequencing and analysis biases can both create false-positive calls and reduce sensitivity, leading to missed true variants."
        },
        {
          question:
            "Why is artefact awareness important in clinical bioinformatics?",
          options: [
            "Because it replaces the need for biological interpretation",
            "Because it helps decide whether a call should be trusted, reviewed more carefully, deprioritised, or escalated with caution",
            "Because every difficult-looking call must be discarded immediately",
            "Because BAM/CRAM review is no longer needed once artefacts are known in theory"
          ],
          answerIndex: 1,
          explanation:
            "Artefact awareness is part of safe technical review and directly affects trust, prioritisation, and cautious communication of candidate calls."
        }
      ]
    },
    {
      slug: "lesson-2",
      title: "Lesson 2: Pseudogenes, paralogs, and ambiguous mapping",
      goal:
        "By the end of this lesson, the learner should be able to answer: “Why do pseudogenes and paralogous regions cause problems in short-read genomic analysis, and how can they make variant calls look misleading?”",
      screens: [
        {
          title: "Lesson goal",
          body: `By the end of this lesson, the learner should be able to answer:

“Why do pseudogenes and paralogous regions cause problems in short-read genomic analysis, and how can they make variant calls look misleading?”

This lesson follows the general artefact lesson because one of the most important real-world sources of misleading calls is ambiguous mapping in regions that are very similar to each other. Short-read sequencing can struggle in these regions because reads may not contain enough unique sequence to prove exactly which copy they came from. Recent analyses of paralogous regions show that short-read mapping quality is often low in highly similar duplicated genes, and clinical papers on PMS2/PMS2CL explicitly describe high homology as a challenge for molecular diagnosis by NGS.`
        },
        {
          title: "The central idea",
          body: `A good beginner summary is:

**Pseudogenes and paralogs can make reads map to the wrong place, which can create false-positive calls, hide true variants, or make the evidence look weaker than it really is.** Recent work on pseudogene-associated errors reports that pseudogenes can interfere with variant calling and lead to false-positive clinically relevant calls, while broader paralog analyses show that short reads often map ambiguously in highly similar duplicated regions.

So the key beginner message is:

if two genomic regions look too similar, short reads may not tell you confidently which region they came from.

That is one of the most important technical traps in clinical genomics.`
        },
        {
          title: "What pseudogenes and paralogs are at beginner level",
          body: `At beginner level, the learner does not need a full evolutionary genetics lesson. A safe practical summary is:

• a paralog is a related genomic sequence that is similar to another because of duplication
• a pseudogene is a gene-like sequence that resembles a functional gene but is typically not treated as the main functional copy

The practical problem is not the label itself. The practical problem is sequence similarity. If a gene and a nearby pseudogene or paralog are highly similar, short reads may align ambiguously. Clinical and methodological papers repeatedly describe this as a major challenge for short-read sequencing analysis.

So the learner should understand:

the pitfall comes from high homology, not just from the word “pseudogene.”`
        },
        {
          title: "Why short reads struggle in highly similar regions",
          body: `Short-read sequencing works best when a read contains enough unique sequence to anchor it to one place in the genome. In highly similar regions, that uniqueness may be missing. A 2025 genome-wide study of highly similar paralogous genes found that short-read data frequently have low mapping quality in these regions, reflecting the difficulty of assigning reads confidently. A 2023 systematic exome study likewise states that the short lengths of short-read reads challenge analysis of paralogous genomic regions.

So the learner should understand:

ambiguous mapping is often a read-length problem interacting with sequence similarity.

That means the issue is especially relevant in:

• duplicated genes
• pseudogene-associated regions
• high-homology exons`
        },
        {
          title: "What can go wrong when reads map ambiguously",
          body: `When reads map ambiguously, several different problems can happen.

A read from the real gene may be aligned to the pseudogene.
A read from the pseudogene may be aligned to the real gene.
Reads may be assigned low mapping quality because the aligner is uncertain.
True signal may be diluted or distorted because evidence is split across multiple similar regions.

Recent pseudogene-error analyses show that these situations can lead to false-positive variant calls, and broader reviews of paralogous regions emphasize that high homology can also reduce accurate detection of real variants.

So the learner should understand:

ambiguous mapping can create both false positives and false negatives.

That is why these regions are so important in clinical review.`
        },
        {
          title: "Why this can fool a beginner",
          body: `A beginner may see:

• a called variant in a relevant gene
• some alternate read support
• maybe even reasonable depth

and think the call looks convincing.

But if those reads are actually coming from a highly similar pseudogene or paralog, the apparent support may be misleading. Papers on PMS2 specifically note that its pseudogene PMS2CL presents high homology that challenges NGS-based diagnosis, and recent studies document pseudogene interference leading to erroneous variant identification with short-read methods.

So the learner should understand:

a neat-looking call in a known tricky region may still be a mapping artefact rather than true gene-specific evidence.

That is exactly why artefact awareness matters.`
        },
        {
          title: "PMS2 as a classic example",
          body: `One of the most commonly cited clinical examples is PMS2, which has a highly similar pseudogene, PMS2CL. Recent clinical literature states directly that the high homology of PMS2CL challenges molecular diagnosis by NGS, and other recent papers describe bioinformatics workflows specifically designed to deal with the PMS2 high-homology region.

So the learner should understand:

PMS2 is important not because it is the only difficult gene, but because it is a clear example of how pseudogene interference can distort short-read analysis.

That makes it a very useful teaching example for this module.`
        },
        {
          title: "Why low mapping quality is often part of the clue",
          body: `Ambiguous regions often produce low mapping quality because the aligner cannot confidently place the reads. The genome-wide paralog study found that short-read mapping quality is frequently low in highly similar paralog groups, which is exactly what you would expect if reads can fit more than one place.

So the learner should understand:

low mapping quality in a high-homology region is often a clue that the apparent support may not be gene-specific.

This links Module 11 directly back to Module 10:

• suspicious mapping quality can be a warning sign
• and in pseudogene/paralog regions, that warning sign can have a very specific explanation.`
        },
        {
          title: "Why standard pipelines can still struggle here",
          body: `A beginner may think:

“Surely the aligner or variant caller already knows how to solve this automatically.”

Sometimes pipelines do include special handling, but the problem is real enough that dedicated methods continue to be published. Recent papers describe specialized workflows for PMS2 and computational methods for paralog-specific analysis because ordinary short-read analysis in these regions remains difficult.

So the learner should understand:

high-homology regions are difficult precisely because standard short-read workflows do not always resolve them cleanly.

That is why extra caution is needed.`
        },
        {
          title: "What artefact-aware thinking looks like here",
          body: `At beginner level, if a variant sits in a known or suspected high-homology region, the learner should start asking:

• Could these reads be mapping from a pseudogene or paralog?
• Is mapping quality lower than expected?
• Does the region have a known high-homology warning?
• Does the evidence look cleaner than I would expect, or suspiciously messy?
• Should this call be treated more cautiously until reviewed more carefully?

This is exactly the sort of sceptical, context-aware thinking supported by the clinical pseudogene literature and by broader paralog-mapping analyses.

So the learner should understand:

the question is not only “is there support?” but also “is this support coming from the right place?”

That is the key professional habit for this lesson.`
        },
        {
          title: "The one-sentence takeaway",
          body: `If the learner remembers one sentence from this lesson, it should be:

**Pseudogenes and paralogous regions can make short reads map ambiguously, which can create false-positive calls, obscure real variants, or weaken confidence because the apparent evidence may not come uniquely from the gene you think it does.**

That is the core lesson.`
        },
        {
          title: "Worked example",
          body: `**Scenario**

A learner sees a called variant in a clinically relevant gene. The site has some alternate support and sits in a region later flagged as having a highly similar pseudogene nearby.

**Beginner question**

Why should this make the learner more cautious?

**Good beginner answer**

Because in a high-homology region, short reads may not map uniquely to the intended gene. Some of the apparent support could come from a pseudogene or paralog rather than the functional gene itself. Clinical papers on regions such as PMS2/PMS2CL show that this kind of interference can challenge NGS analysis and lead to erroneous variant calls, so the presence of support alone is not enough to feel comfortable.`
        },
        {
          title: "Lesson summary",
          body: `The learner has understood this lesson if they can say something like:

“In high-homology regions, short reads may not map uniquely, so an apparent variant call may reflect pseudogene or paralog interference rather than true gene-specific variation. I need to be more cautious in these regions, especially if mapping looks uncomfortable.”`
        }
      ],
      sections: [
        {
          heading: "The central idea",
          body:
            "Pseudogenes and paralogs can make reads map to the wrong place, which can create false-positive calls, hide true variants, or make the evidence look weaker than it really is."
        }
      ],
      quiz: [
        {
          question:
            "Why do pseudogenes and paralogs create problems for short-read analysis?",
          options: [
            "Because they stop reads from being sequenced at all",
            "Because highly similar regions can make reads map ambiguously, so support may not be uniquely assigned to the correct genomic copy",
            "Because they only affect mitochondrial genes",
            "Because they are always filtered automatically before alignment"
          ],
          answerIndex: 1,
          explanation:
            "Short-read analyses of highly similar paralogous regions frequently show ambiguous mapping and low mapping quality, which makes copy-specific variant calling difficult."
        },
        {
          question: "Which statement is most accurate?",
          options: [
            "Pseudogene-related artefacts only create false positives",
            "Pseudogene-related ambiguity can contribute to both false positives and false negatives",
            "Pseudogene issues disappear completely if depth is high",
            "Pseudogene interference is only a research problem, not a clinical one"
          ],
          answerIndex: 1,
          explanation:
            "Recent pseudogene-error studies and paralog-region analyses show that ambiguous mapping can both create erroneous calls and make true variants harder to detect confidently."
        },
        {
          question:
            "Why is PMS2 often used as a teaching example for this pitfall?",
          options: [
            "Because it is the only gene with more than one transcript",
            "Because its highly similar pseudogene PMS2CL creates well-known NGS mapping challenges in clinical testing",
            "Because it can only be sequenced by long-read technology",
            "Because it has no clinical relevance"
          ],
          answerIndex: 1,
          explanation:
            "Recent clinical literature explicitly identifies PMS2CL homology as a major challenge for NGS-based analysis of PMS2."
        },
        {
          question:
            "What is the safest beginner habit when a call sits in a high-homology region?",
          options: [
            "Assume the variant is real if it appears in the VCF",
            "Ignore mapping quality because support is present",
            "Ask whether the support may be coming from the wrong genomic copy and treat the call more cautiously",
            "Reject every variant in the region automatically"
          ],
          answerIndex: 2,
          explanation:
            "The right response is cautious, context-aware review: ambiguous mapping does not prove the call is false, but it does mean the evidence may not be uniquely attributable to the intended gene."
        }
      ]
    },
    {
      slug: "lesson-3",
      title: "Lesson 3: Repeats, low-complexity regions, and difficult local sequence",
      goal:
        "By the end of this lesson, the learner should be able to answer: “Why do repeats, low-complexity regions, and difficult local sequence make variant calls less trustworthy, even when a call appears to have read support?”",
      screens: [
        {
          title: "Lesson goal",
          body: `By the end of this lesson, the learner should be able to answer:

“Why do repeats, low-complexity regions, and difficult local sequence make variant calls less trustworthy, even when a call appears to have read support?”

This lesson follows pseudogenes and paralogs because it covers another major source of misleading evidence in short-read analysis: regions where the local sequence itself is hard to align or interpret cleanly. Reviews of variant calling and read review both note that repetitive and low-complexity sequence can make alignment and variant calling more error-prone, and recent benchmarking papers continue to identify these regions as common sources of artefact.`
        },
        {
          title: "The central idea",
          body: `A good beginner summary is:

**Repeats and low-complexity sequence can make reads align ambiguously or inconsistently, which can create false positives, hide true variants, or distort how strong the evidence looks.**

This is not just a niche issue. Low-complexity and repetitive regions are widely recognized as difficult for short-read alignment and variant calling, and population-database guidance explicitly notes that low-complexity sequences are enriched for artefacts.

So the key beginner message is:

some genomic regions are hard not because the variant is biologically strange, but because the local sequence makes technical interpretation difficult.`
        },
        {
          title: "What “repeats” and “low complexity” mean at beginner level",
          body: `At beginner level, the learner does not need a full repeat-biology course. A practical summary is:

• repeats are sequences that occur again and again or have highly similar repeated structure
• low-complexity regions are sequences with simple, repetitive composition, such as runs of the same base or short repeated motifs

Recent work on low-complexity DNA describes these regions as compositionally repetitive and notes that they are often associated with spurious homologous matches. Broader alignment reviews also describe repetitive and low-complexity genomic regions as difficult for short-read mapping.

So the learner should understand:

the problem is not just that these regions are repetitive in a biological sense; the problem is that they give the aligner fewer unique clues about where a read belongs and how it should line up.`
        },
        {
          title: "Why short reads struggle in these regions",
          body: `Short reads work best when a read contains enough distinctive sequence to anchor it confidently to one place. In repetitive or low-complexity sequence, that anchoring becomes harder. Alignment reviews state that when a repetitive or low-complexity region is longer than the read itself, the read may map equally well to multiple locations, leading to ambiguous alignment and variant-calling bias. Variant-calling reviews also continue to identify complex genomic regions as a major challenge.

So the learner should understand:

if the read is too short relative to the difficulty of the sequence context, the pipeline may struggle to decide exactly where the read belongs or exactly how it should be aligned.

That is one reason these regions are so often associated with technical discomfort.`
        },
        {
          title: "What can go wrong in difficult local sequence",
          body: `Several different problems can happen in repeats or low-complexity sequence:

• reads may map ambiguously
• local alignment may be shifted or inconsistent
• insertions and deletions may be represented poorly
• artifactual single-base substitutions may appear near real indels
• true variants may be missed because the alignment model struggles

A 2022 study on indel detection describes mapping errors in repetitive and low-complexity regions and reports that such errors can create artifactual single-base substitutions, underestimate indel allele frequencies, or miss longer indels. Earlier work on variant-calling artefacts also identified erroneous realignment in low-complexity regions as a source of false heterozygous calls.

So the learner should understand:

difficult local sequence can distort both what gets called and how it gets represented.

That is why these regions often feel messy in read review.`
        },
        {
          title: "Why indels are often especially tricky here",
          body: `Repeats and low-complexity sequence are particularly uncomfortable for insertions and deletions, because the aligner has to decide exactly where the gap belongs in a sequence context that may contain many similar possibilities. The indel-detection study above shows that mapping errors around repetitive and low-complexity sites can profoundly affect indel calling, including missed detection and misleading nearby substitution calls. GATK’s HaplotypeCaller documentation also highlights local assembly as an important strategy for difficult regions, which reflects how challenging simple alignment-based interpretation can be there.

So the learner should understand:

if a candidate variant is an indel in a repetitive or low-complexity region, extra caution is often needed.

This does not mean the call is false. It means the region is technically harder.`
        },
        {
          title: "Why a neat-looking call can still be misleading in these regions",
          body: `A beginner may see:

• a clean VCF row
• plausible depth
• some alternate support

and feel reassured.

But in difficult local sequence, that can still be misleading. Population-database guidance notes that low-complexity regions are enriched for artefacts, and IGV review guidance emphasizes that visual inspection is important because apparently plausible calls can hide technical problems not obvious from summary output alone.

So the learner should understand:

a tidy VCF output does not guarantee tidy underlying evidence, especially in sequence contexts known to be difficult.

That is exactly why artefact-aware review exists.`
        },
        {
          title: "What suspicious patterns might look like",
          body: `At beginner level, the learner does not need to memorize every visual pattern, but they should know the kinds of things that can feel uncomfortable in these regions:

• inconsistent local alignment around the site
• alternate support clustering near a repeat tract or homopolymer
• mixtures of indel-looking and mismatch-looking support
• low mapping confidence
• unstable-looking representation of nearby bases across reads

IGV review literature emphasizes using read visualization to inspect such local patterns, and the indel-detection paper specifically describes coexistence of real indels with artifactual single-base substitutions in difficult contexts.

So the learner should understand:

in difficult local sequence, the pattern of evidence may matter as much as the existence of support itself.

That is a key bridge into Module 12.`
        },
        {
          title: "Why these regions can also create false negatives",
          body: `This module is not only about false positives.

Difficult sequence can also make real variants harder to detect. Reviews of clinical exome sequencing note that some true variants may be missed because of poor or nonuniform coverage, and variant-calling reviews identify complex sequence context as a persistent challenge for sensitivity. The exome-wide difficult-region benchmark also specifically catalogs regions known to cause analysis artefacts in downstream alignment and variant calling.

So the learner should understand:

absence of a call in a repetitive or low-complexity region is not always as reassuring as absence in a technically clean region.

That is an important safety point.`
        },
        {
          title: "What artefact-aware thinking looks like here",
          body: `If a variant sits in a repeat-rich or low-complexity region, the learner should start asking:

• Is this region known to be technically difficult?
• Could the alignment be unstable here?
• Does the evidence look messier than a comfortable call in a clean region?
• Could an apparent SNV actually reflect a nearby indel/alignment problem?
• Could a true variant be undercalled or misrepresented here?

That kind of questioning is supported by variant-calling best-practice reviews, IGV review guidance, and recent work on difficult-to-sequence regions.

So the learner should understand:

the right question is not only “is there a call?” but also “is this the kind of region where calls are easy to get wrong?”

That is the professional habit this lesson should build.`
        },
        {
          title: "The one-sentence takeaway",
          body: `If the learner remembers one sentence from this lesson, it should be:

**Repeats, homopolymers, and other low-complexity sequence can make short-read alignment and local variant calling unreliable, so calls in these regions deserve extra caution because both false positives and false negatives are more likely.**

That is the core lesson.`
        },
        {
          title: "Worked example",
          body: `**Scenario**

A learner sees a small indel call in a clinically relevant gene. The site has some alternate support, but the local sequence contains a repetitive motif and the surrounding read alignment looks messy.

**Beginner question**

Why should this make the learner more cautious?

**Good beginner answer**

Because repetitive and low-complexity sequence can make local alignment unstable, especially for indels. In these regions, a call can look real while still being distorted by mapping or realignment problems, and some true variants may also be misrepresented or missed. Studies of indel detection in repetitive/low-complexity regions show exactly these kinds of errors, so the presence of support alone is not enough to feel fully comfortable.`
        },
        {
          title: "Lesson summary",
          body: `The learner has understood this lesson if they can say something like:

“Repeat-rich and low-complexity sequence can make short-read alignment and variant representation unstable, especially for indels, so I should be more cautious when a call sits in one of these regions even if the call looks tidy in the output.”`
        }
      ],
      sections: [
        {
          heading: "The central idea",
          body:
            "Repeats and low-complexity sequence can make reads align ambiguously or inconsistently, which can create false positives, hide true variants, or distort how strong the evidence looks."
        }
      ],
      quiz: [
        {
          question:
            "Why do repetitive and low-complexity regions create problems for short-read variant calling?",
          options: [
            "Because they prevent sequencing machines from generating reads",
            "Because short reads may not contain enough unique sequence for confident alignment and local representation",
            "Because they only affect mitochondrial DNA",
            "Because they are always excluded before analysis"
          ],
          answerIndex: 1,
          explanation:
            "Alignment reviews state that reads from repetitive or low-complexity regions may map equally well to multiple places, leading to ambiguous alignment and calling errors."
        },
        {
          question: "Which statement is most accurate?",
          options: [
            "Difficult local sequence only creates false positives",
            "Difficult local sequence can contribute to both false positives and false negatives",
            "Repeats matter only for structural variants",
            "A high-depth call in a repeat is automatically trustworthy"
          ],
          answerIndex: 1,
          explanation:
            "Clinical sequencing and variant-calling reviews describe both missed true variants and misleading false-positive calls in difficult regions."
        },
        {
          question:
            "Why are indels often especially uncomfortable in low-complexity sequence?",
          options: [
            "Because indels can only be called in coding exons",
            "Because local alignment in repeated sequence can make the exact placement and representation of insertions or deletions unstable",
            "Because indels do not appear in VCF files",
            "Because all indels are artefacts in repeat-rich regions"
          ],
          answerIndex: 1,
          explanation:
            "Studies of indel detection show that repetitive and low-complexity sequence can create mapping errors, artifactual nearby substitutions, and missed or misrepresented indels."
        },
        {
          question:
            "What is the safest beginner habit when a call sits in a repeat-rich or low-complexity region?",
          options: [
            "Assume the call is real if it passed filters",
            "Reject every call from that region automatically",
            "Treat the region as technically difficult and review the evidence more cautiously",
            "Ignore the local sequence context and focus only on phenotype fit"
          ],
          answerIndex: 2,
          explanation:
            "These regions are enriched for artefacts, so the safest response is cautious, context-aware review rather than blind acceptance or blind rejection."
        }
      ]
    },
    {
      slug: "lesson-4",
      title: "Lesson 4: Contamination, mixed signals, and unexpected allele patterns",
      goal:
        "By the end of this lesson, the learner should be able to answer: “Why can contamination or mixed-sample effects make allele patterns look strange, and why does unexpected support not always mean a true variant in the patient?”",
      screens: [
        {
          title: "Lesson goal",
          body: `By the end of this lesson, the learner should be able to answer:

“Why can contamination or mixed-sample effects make allele patterns look strange, and why does unexpected support not always mean a true variant in the patient?”

This lesson follows pseudogenes and difficult local sequence because it introduces another major source of misleading evidence: the sample itself may not be a perfectly clean, single-source signal. Clinical exome caveat reviews note that spurious variant calls can arise from sample contamination, and broader sequencing reviews describe contamination as one of the technical factors that can distort variant calling.`
        },
        {
          title: "The central idea",
          body: `A good beginner summary is:

**Not every unexpected allele pattern reflects true biology in the patient. Sometimes it reflects contamination, sample mixture, or another source of mixed signal.** Reviews of sequencing artefacts explicitly include sample contamination among the causes of misleading low-frequency or spurious variant signals.

So the key beginner message is:

unexpected alternate support can come from the wrong source, not just from a real variant in the patient.`
        },
        {
          title: "What contamination means at beginner level",
          body: `At beginner level, contamination means that DNA from another source has been mixed into the sample or is influencing the sequencing data. That source might be another human sample, another tissue source, or even another species in some workflows. Reviews of sequencing artefacts describe sample contamination as a common technical problem, and a clinical validation review notes that orthogonal genotyping can help detect sample mix-up in workflows.

So the learner should understand:

contamination means the reads may not all be representing one clean genomic source.

That is what makes allele patterns harder to interpret.`
        },
        {
          title: "Why contamination can distort allele balance",
          body: `If extra DNA is present, allele ratios can look different from what would be expected in a clean diploid sample. Reviews of sequencing artefacts note that low-level artefactual signals and contamination can affect apparent allele frequencies, and cancer benchmarking papers explicitly discuss contamination from normal cells as a challenge for detecting low-level variants.

So the learner should understand:

contamination can make allele balance look odd even when the patient’s true genotype would normally look cleaner.

For example, a site that should look strongly homozygous or clearly heterozygous may instead look messy, diluted, or unexpectedly low-level.`
        },
        {
          title: "Why low-level alternate support is not always a true variant",
          body: `A beginner may think:

“There are some alternate reads there, so maybe the variant is real at low level.”

That is too simple.

Reviews of low-frequency variant detection explain that many artefacts, including contamination, DNA damage, misalignment, and instrument error, tend to occur at low allele fractions and can outnumber true low-level events. Clinical exome caveat papers also note that contamination can produce many spurious variant calls downstream.

So the learner should understand:

low-level support is one of the places where contamination and other artefacts can be especially misleading.

That does not make every low-level signal false, but it does mean caution is needed.`
        },
        {
          title: "Mixed signals are not always the same as mosaicism or biology",
          body: `This lesson should be careful here.

Unexpected allele patterns can sometimes reflect real biology, such as mosaicism or tumor heterogeneity in the right context. But they can also reflect contamination or technical background noise. Reviews of low-frequency sequencing artefacts stress that technical artefacts vastly outnumber true low-level variants in many settings unless the data are handled very carefully.

So the learner should understand:

an unusual allele fraction is not automatically evidence of an interesting biological process.

The first question is often technical:

• could this be contamination?
• could this be mixed-sample signal?
• could this be background error?`
        },
        {
          title: "What sample mix-up or mixed-source effects can do",
          body: `If samples are mixed up or DNA sources are mixed, the data can show patterns that do not fit the expected genotype cleanly. Clinical validation guidance explicitly mentions orthogonal checks to ensure no sample mix-up has occurred, which shows that this is treated as a real risk in clinical sequencing workflows.

So the learner should understand:

unexpected allele patterns are not always about one bad locus; sometimes they are clues to a broader sample-level problem.

That is why contamination and mix-up concerns are important at the workflow level, not just the single-variant level.`
        },
        {
          title: "Why contamination can create false positives and false negatives",
          body: `Contamination can create false positives by introducing misleading alternate support from outside the true sample. It can also contribute to false negatives by diluting real signal and making a true variant look weaker than expected. Reviews of clinical sequencing and low-frequency mutation detection both support this idea: mixed or contaminated input can distort apparent variant fractions and make reliable calling harder.

So the learner should understand:

contamination does not just add fake signal; it can also weaken real signal.

That is one reason contaminated data can be so hard to reason about.`
        },
        {
          title: "Why this can fool a beginner",
          body: `A beginner may see:

• reasonable depth
• some alternate support
• maybe even a gene that looks relevant

and assume the signal deserves serious weight.

But if the alternate support is coming from contamination or a mixed-source effect, the interpretation can be misleading from the start. Clinical exome caveat papers specifically describe data with many spurious calls due to contamination, and artefact reviews explain that contamination-related low-frequency signals can outnumber true events.

So the learner should understand:

the presence of alternate reads does not automatically mean the patient truly carries the variant in the way the call suggests.

That is why contamination awareness is part of safe review.`
        },
        {
          title: "What artefact-aware thinking looks like here",
          body: `If a call shows an unexpected allele pattern, the learner should start asking:

• Does the allele balance look plausible for the reported genotype?
• Is the signal unexpectedly low-level or diluted?
• Could contamination or sample mixture explain this better than true biology?
• Do many sites in the sample look oddly messy, or is it just one region?
• Should this trigger more caution before the call is trusted?

Clinical QC reviews emphasize evaluating sequencing quality at multiple stages, and clinical validation guidance emphasizes checks against mix-up and broader sample-level problems.

So the learner should understand:

the question is not only “is there alternate support?” but also “is this the kind of support pattern I would expect from a clean sample?”

That is the key habit for this lesson.`
        },
        {
          title: "The one-sentence takeaway",
          body: `If the learner remembers one sentence from this lesson, it should be:

**Contamination or mixed-sample effects can distort allele balance and create misleading low-level signals, so unexpected allele patterns should not automatically be treated as true patient variation without considering sample-level technical problems.**

That is the core lesson.`
        },
        {
          title: "Worked example",
          body: `**Scenario**

A learner sees a variant with modest alternate support at low fraction and says, “This could be a very important low-level variant in the patient.”

**Beginner question**

Why should the learner be more cautious?

**Good beginner answer**

Because low-level alternate support can come from contamination or other technical artefacts, not just true biology in the patient. Reviews of sequencing artefacts note that contamination, DNA damage, misalignment, and other technical errors often appear at low allele fractions, and clinical sequencing caveat papers report that contamination can generate many spurious calls. So before treating the signal as meaningful biology, the learner should ask whether the sample or workflow could be contributing a mixed or misleading signal.`
        },
        {
          title: "Lesson summary",
          body: `The learner has understood this lesson if they can say something like:

“Unexpected allele patterns do not always reflect true biology in the patient. Contamination or mixed-sample effects can create misleading low-level support or distort allele balance, so I should consider sample-level technical problems before trusting the call.”`
        }
      ],
      sections: [
        {
          heading: "The central idea",
          body:
            "Not every unexpected allele pattern reflects true biology in the patient. Sometimes it reflects contamination, sample mixture, or another source of mixed signal."
        }
      ],
      quiz: [
        {
          question: "Why can contamination make a variant call misleading?",
          options: [
            "Because contamination always stops reads from aligning",
            "Because DNA from another source can create or distort allele support, making the call look different from the patient’s true signal",
            "Because contamination only affects reference alleles",
            "Because contamination is only relevant in tumor sequencing"
          ],
          answerIndex: 1,
          explanation:
            "Contamination introduces mixed signal, which can create spurious alternate support or distort expected allele fractions."
        },
        {
          question: "Which statement is most accurate?",
          options: [
            "Unexpected allele balance always means mosaicism",
            "Unexpected allele balance can reflect contamination, mixed signal, or other artefacts, not just true biology",
            "Unexpected allele balance is irrelevant if the gene is important",
            "Contamination only creates false positives, never false negatives"
          ],
          answerIndex: 1,
          explanation:
            "Low-level or unusual allele patterns can arise from technical causes such as contamination as well as from real biology, so they need careful interpretation."
        },
        {
          question:
            "Why can contamination contribute to false negatives as well as false positives?",
          options: [
            "Because contamination can dilute true signal and make a real variant look weaker than expected",
            "Because contamination deletes the VCF file",
            "Because contamination only affects genotype quality fields",
            "Because contamination improves mapping quality too much"
          ],
          answerIndex: 0,
          explanation:
            "Mixed-source DNA can weaken the apparent strength of a real variant, not just introduce spurious alternate support."
        },
        {
          question:
            "What is the safest beginner habit when a sample shows unexpected allele patterns?",
          options: [
            "Assume every low-level signal is a true patient variant",
            "Ignore the issue if depth is reasonable",
            "Consider whether contamination or a broader sample-level problem could explain the pattern before trusting the call",
            "Reject every unusual call automatically"
          ],
          answerIndex: 2,
          explanation:
            "The safest approach is cautious, sample-aware review rather than blind acceptance or blind rejection."
        }
      ]
    },
    {
      slug: "lesson-5",
      title: "Lesson 5: Caller artefacts, filtering pitfalls, and false reassurance",
      goal:
        "By the end of this lesson, the learner should be able to answer: “Why can pipeline outputs still be misleading even when the sample and region look reasonable, and how can callers or filters create false reassurance?”",
      screens: [
        {
          title: "Lesson goal",
          body: `By the end of this lesson, the learner should be able to answer:

“Why can pipeline outputs still be misleading even when the sample and region look reasonable, and how can callers or filters create false reassurance?”

This lesson follows the earlier artefact lessons because not every misleading result comes from the sample or the genomic region itself. Sometimes the problem is in how the workflow turns evidence into a call set. Variant-calling reviews note that distinguishing true variants from sequencing errors and artefacts is a core challenge, and GATK’s workflow documentation explicitly describes calling and filtering as separate steps because additional refinement is often needed after raw calling.`
        },
        {
          title: "The central idea",
          body: `A good beginner summary is:

**Variant callers and filters are useful decision-making tools, but they are not truth machines.**

They take complex evidence and turn it into a simpler output:

• called versus not called
• PASS versus filtered
• candidate versus discarded

That is necessary for real workflows, but it also means the output can look neater and more certain than the underlying evidence really is. Reviews of clinical variant calling describe persistent false positives and false negatives, and IGV review guidance emphasizes that manual inspection remains important precisely because automated outputs can still mislead.

So the key beginner message is:

a clean-looking pipeline output does not automatically mean the underlying evidence is clean.`
        },
        {
          title: "Why variant callers can create misleading outputs",
          body: `A caller has to decide, from imperfect data, whether a site should be emitted as a variant and what genotype to assign. GATK’s HaplotypeCaller documentation says the default call-confidence threshold is intentionally set low to achieve high sensitivity, and that this allows false-positive calls as a side effect. That means some called variants are expected to need downstream filtering or review.

So the learner should understand:

a call appearing in the VCF usually means “candidate supported enough to emit,” not “guaranteed true.”

That is why filtering and review exist after calling.`
        },
        {
          title: "Why filtering can help but still be imperfect",
          body: `Filtering exists because raw call sets often contain artefacts. GATK’s hard-filtering guidance says the aim is to remove many false positives, but it also explicitly notes a tradeoff: if thresholds are tightened too much, true positives may be lost. Their example for strand bias makes this very clear: raising strictness can remove more false positives, but also risks discarding real variants.

So the learner should understand:

filtering is a tradeoff between sensitivity and specificity, not a magic cleanup step.

That is one of the most important practical lessons in this module.`
        },
        {
          title: "Why “PASS” can create false reassurance",
          body: `A beginner may think:

“If the VCF says PASS, then the variant is basically confirmed.”

That is too simple.

A PASS label usually means the call did not trigger the chosen filter rules. It does not mean every possible problem has been ruled out. GATK’s filtering documentation shows that hard filters are based on selected annotations and generic recommendations, not omniscient knowledge of every artefact mode. IGV review papers also state that visual inspection can still reduce false positives after pipeline processing.

So the learner should understand:

PASS means “not filtered by these rules,” not “proven correct.”

That is a crucial mindset for safe review.`
        },
        {
          title: "Why filtered calls are not always false either",
          body: `The opposite mistake is also common:

“If a variant is filtered out, it must be false.”

That is also unsafe.

GATK’s hard-filtering guidance explicitly treats thresholds as recommendations and illustrates the risk of losing true positives when filters are made more aggressive. Broader sequencing reviews likewise note that pipelines can generate both false positives and false negatives.

So the learner should understand:

a filtered call is a call that triggered caution criteria, not automatically a proven artefact.

This is especially important when the biological context is strong or the region is known to be difficult.`
        },
        {
          title: "Why generic thresholds are not universal truth",
          body: `A learner might think there is one correct cutoff for every annotation.

GATK’s guidance says otherwise. Their hard-filtering article presents recommended thresholds as a starting point, and their “unable to use VQSR” page says users need to compose hard filters based on generic recommendations when recalibration cannot be used. That wording itself shows the thresholds are not universal laws.

So the learner should understand:

filter thresholds depend on the assay, data type, caller, and workflow context.

That is why blind threshold memorisation is not enough for safe clinical bioinformatics.`
        },
        {
          title: "Why neat output can hide caller-specific behaviour",
          body: `Different callers and pipelines can disagree with each other. Comparative and best-practice reviews describe false positives and false negatives as pipeline-dependent, and recent benchmarking papers show discordant calls between pipelines even when they are run on the same underlying DNA.

So the learner should understand:

a caller’s output reflects not only the data, but also the caller’s assumptions, model, and thresholds.

That means disagreement between outputs is not always proof that one lab made a simple mistake; it may reflect differences in analytical behaviour.`
        },
        {
          title: "Why visual review still matters after calling and filtering",
          body: `If callers and filters were enough on their own, there would be little reason for manual review. But IGV guidance states that visual inspection can increase confidence, reduce the risk of false positives, and is an important step in many pipelines. Other studies similarly note that multiple QC steps still do not eliminate all false positives and false negatives.

So the learner should understand:

manual review exists because caller output and filtering are helpful summaries, not perfect final truth.

That is one of the strongest bridges into Module 12.`
        },
        {
          title: "What false reassurance looks like in practice",
          body: `False reassurance can look like:

• “It passed filters, so I don’t need to check it.”
• “The caller emitted it, so it must be real.”
• “The metrics are tidy, so the region must be clean.”
• “It was filtered out, so it cannot matter.”

Each of those statements over-trusts one stage of the pipeline. Best-practice reviews and GATK guidance both show that calling and filtering are probabilistic, heuristic steps that still leave room for error and review.

So the learner should understand:

the danger is not only bad data; it is also overconfidence in simplified outputs.

That is the professional caution this lesson is meant to build.`
        },
        {
          title: "The one-sentence takeaway",
          body: `If the learner remembers one sentence from this lesson, it should be:

**Variant callers and filters help organize evidence, but they can still produce false reassurance because called and PASS variants are not automatically true, while filtered variants are not automatically false.**

That is the core lesson.`
        },
        {
          title: "Worked example",
          body: `**Scenario**

A learner sees a candidate variant with a PASS flag and says, “This one is already clean, so we can treat it as technically settled.”

**Beginner question**

Why is that incomplete?

**Good beginner answer**

Because PASS only means the variant did not fail the chosen filtering rules. It does not guarantee that the call is free from artefact, caller bias, difficult-region effects, or suspicious read patterns. GATK’s hard-filtering guidance shows that filters are heuristic tradeoffs rather than universal truth, and IGV review guidance states that manual review can still reduce false positives after automated calling. So a PASS label is reassuring, but it should not replace critical technical review when the call matters.`
        },
        {
          title: "Lesson summary",
          body: `The learner has understood this lesson if they can say something like:

“Caller output and filtering help organize variant evidence, but they are not perfect truth labels. A PASS call can still be misleading, and a filtered call can still deserve thought, so I need to interpret pipeline output critically rather than treating it as final proof.”`
        }
      ],
      sections: [
        {
          heading: "The central idea",
          body:
            "Variant callers and filters are useful decision-making tools, but they are not truth machines."
        }
      ],
      quiz: [
        {
          question: "Why can a called variant still be misleading?",
          options: [
            "Because callers are designed to suppress all true variants",
            "Because callers use imperfect data and decision rules, so emitted calls can still include false positives",
            "Because VCF files do not contain any quality information",
            "Because only filtered variants can be artefactual"
          ],
          answerIndex: 1,
          explanation:
            "GATK states that calling thresholds are intentionally set to favor sensitivity, which allows some false-positive calls to be emitted for later filtering and review."
        },
        {
          question: "What does a PASS label most safely mean?",
          options: [
            "The variant is confirmed true",
            "The variant did not trigger the chosen filtering rules",
            "The variant is clinically relevant",
            "The variant no longer needs review"
          ],
          answerIndex: 1,
          explanation:
            "PASS indicates the variant was not filtered by the applied rules; it does not prove every technical concern has been ruled out."
        },
        {
          question:
            "Why is it unsafe to treat filtered variants as automatically false?",
          options: [
            "Because filters are random",
            "Because filtering uses tradeoffs, and stricter thresholds can remove true positives as well as false positives",
            "Because filtered variants are always more important clinically",
            "Because PASS and FILTER fields are interchangeable"
          ],
          answerIndex: 1,
          explanation:
            "GATK’s hard-filtering guidance explicitly shows that tightening thresholds can reduce false positives but also risks losing true positives."
        },
        {
          question: "What is the safest overall message of this lesson?",
          options: [
            "Caller output is usually enough without further review",
            "Calling and filtering simplify evidence, but they do not eliminate the need for critical interpretation and sometimes manual review",
            "Once VQSR or hard filtering is applied, artefact awareness no longer matters",
            "One good caller always solves false positives and false negatives"
          ],
          answerIndex: 1,
          explanation:
            "Best-practice reviews and IGV guidance both support the need for continued review because automated pipelines still produce both false positives and false negatives."
        }
      ]
    },
    {
      slug: "lesson-6",
      title: "Lesson 6: How artefact awareness fits into clinical bioinformatics",
      goal:
        "By the end of this lesson, the learner should be able to answer: “What is artefact awareness used for in real clinical bioinformatics work, and how should it change the way I review, prioritise, communicate, and escalate variant calls?”",
      screens: [
        {
          title: "Lesson goal",
          body: `By the end of this lesson, the learner should be able to answer:

“What is artefact awareness used for in real clinical bioinformatics work, and how should it change the way I review, prioritise, communicate, and escalate variant calls?”

This lesson finishes Module 11 by tying the artefact families back to actual clinical bioinformatics behaviour. The learner has now seen that misleading evidence can come from:

• pseudogenes and paralogs
• repeats and low-complexity sequence
• contamination and mixed signals
• caller behaviour and filtering logic

Variant-calling reviews describe false positives and false negatives as persistent realities of clinical sequencing workflows, while IGV review guidance emphasizes that manual review remains important precisely because automated pipelines can still produce misleading outputs.`
        },
        {
          title: "The central idea",
          body: `A good beginner summary is:

**Artefact awareness is used to decide how cautious you should be about a call, how much trust it deserves as evidence, and whether it should be prioritised, reviewed further, communicated carefully, or escalated.**

That means artefact awareness is not just about spotting technical weirdness for its own sake. It affects real workflow decisions:

• whether a candidate feels safe to carry forward
• whether it needs extra BAM/CRAM review
• whether it should be deprioritised
• whether it should be described as uncertain rather than strong
• whether it needs escalation because the biological importance is tempting but the technical evidence is uncomfortable

Variant-calling best-practice reviews frame false positives and false negatives as a core challenge in clinical sequencing, which is exactly why artefact awareness is part of good practice rather than an optional extra.

So the key beginner message is:

artefact awareness helps decide how seriously to treat a signal as evidence, not just whether the signal exists.`
        },
        {
          title: "Why artefact awareness comes before confident interpretation",
          body: `One of the most important habits in clinical bioinformatics is the order of reasoning.

The unsafe order is:

1. this variant looks biologically attractive
2. therefore it is probably the right answer

The safer order is:

1. could this signal be artefactual or technically misleading?
2. if it seems technically credible, how biologically and clinically relevant is it?

IGV review guidance describes visual review as a way to improve accuracy by catching false positives and clarifying ambiguous evidence, which supports exactly this kind of staged reasoning.

So the learner should understand:

artefact awareness acts as a safety check before strong downstream interpretation is built on top of the call.`
        },
        {
          title: "What artefact awareness changes in prioritisation",
          body: `In real workflows, not every plausible variant deserves equal attention. A call in a clean region with coherent evidence is usually safer to prioritise than a call in a pseudogene-associated region, repeat-rich context, or suspicious mixed-signal pattern, even if the second call looks biologically tempting.

Best-practice reviews emphasize that rigorous filtering and careful assessment are needed to minimise false positives, and clinical caveat reviews note that problematic regions and data biases can reduce reliability.

So the learner should understand:

artefact awareness helps rank candidates by trustworthiness as evidence, not just by biological appeal.

That is one of its most practical uses.`
        },
        {
          title: "What artefact awareness changes in review behaviour",
          body: `Artefact-aware review changes what you do next.

If a call sits in a known tricky region or shows suspicious evidence, that may mean:

• looking at BAM/CRAM more carefully
• checking whether the region is known to be difficult
• thinking harder about mapping and strand patterns
• checking whether sample-level problems could explain the signal
• being less comfortable with a simple “PASS means fine” mindset

IGV review guidance explicitly supports this approach by describing visual inspection as an important step for confirming and interpreting candidate variants from automated pipelines.

So the learner should understand:

artefact awareness changes the depth and style of review, not just the final opinion.`
        },
        {
          title: "What artefact awareness changes in communication",
          body: `Artefact awareness also affects how strongly you speak about a variant.

A technically clean call in a comfortable region might reasonably be described as:

• technically well supported
• suitable for serious downstream consideration
• not obviously affected by common artefact patterns

A suspicious call might need more careful wording, such as:

• technically uncomfortable
• possible mapping artefact
• low-confidence support
• signal in a difficult region
• requires caution or further review

IGV review guidance and broader variant-calling reviews support this because they both emphasize that uncertainty remains even after automated calling and filtering.

So the learner should understand:

artefact awareness affects not only what you think, but how confidently you should say it.

That is directly relevant to safe professional communication.`
        },
        {
          title: "Why artefact awareness supports escalation",
          body: `Some calls are exactly the sort that should not be handled casually:

• biologically attractive but technically weak
• present in a notoriously difficult region
• suspicious because of mixed signal or mapping ambiguity
• filtered or borderline in a way that could matter clinically

In those situations, artefact awareness helps the bioinformatician recognise that the right action may be:

• to document the concern clearly
• to avoid overstating confidence
• to escalate rather than quietly carrying the call forward as if it were technically settled

This follows directly from the role of manual review and post-calling scrutiny described in IGV guidance and clinical sequencing best-practice reviews.

So the learner should understand:

artefact awareness is part of safe escalation and professional boundaries, not just a technical side interest.`
        },
        {
          title: "Why “technically suspicious” does not always mean “discard immediately”",
          body: `This is another important boundary.

Artefact awareness is not the same as automatic rejection. A suspicious call may still need:

• closer review
• comparison with the biological context
• discussion with colleagues
• confirmation by other methods or workflows

GATK’s hard-filtering guidance shows that filtering involves tradeoffs and that stricter rules can remove true positives as well as false positives. That supports the broader lesson that suspicion should trigger caution and further thought, not always instant dismissal.

So the learner should understand:

artefact awareness should make you more thoughtful, not more rigid.

That is a much safer mindset than simple pass/fail thinking.`
        },
        {
          title: "Why “clean-looking” does not mean “artefact-free”",
          body: `The opposite error matters too.

A call that:

• appears in the VCF
• passes filters
• has some plausible metrics

may still hide artefact problems that only become obvious with more careful review. GATK explains that raw calls require filtering before downstream use, and its filtering docs describe PASS as a filter outcome rather than a guarantee of truth. IGV guidance goes further by showing that visual review can still reduce false positives after automated steps.

So the learner should understand:

artefact awareness protects against false reassurance from tidy outputs.

That is one of its biggest practical benefits.`
        },
        {
          title: "Why this is the bridge into Module 12",
          body: `Module 11 has taught the learner the main families of technical trap:

• ambiguous mapping
• difficult local sequence
• mixed-sample effects
• caller and filtering pitfalls

The next module, Visual review and evidence checking, goes one step further by asking:

what do these problems actually look like in aligned reads and read-level evidence?

IGV review guidance is exactly the bridge here: it shows that recognising artefact families and inspecting read evidence are closely linked parts of safe review.

So the habit this module should leave behind is:

when something looks interesting, also ask what could be fooling me technically before trusting it.`
        },
        {
          title: "The one-sentence takeaway",
          body: `If the learner remembers one sentence from this lesson, it should be:

**In clinical bioinformatics, artefact awareness is used to decide how much trust a call deserves, which affects prioritisation, depth of review, caution in communication, and whether a suspicious but important-looking signal should be escalated rather than accepted at face value.**

That is the core lesson.`
        },
        {
          title: "Worked example",
          body: `**Scenario**

Two candidate variants are being reviewed.

Variant A

• sits in a technically clean-looking region
• has coherent evidence
• no obvious artefact clues

Variant B

• is in a more biologically tempting gene
• but sits in a high-homology region
• shows less comfortable mapping
• and the evidence pattern is harder to trust

A beginner says, “Variant B is in the better gene, so it should probably be the stronger candidate.”

**Beginner question**

Why is that incomplete?

**Good beginner answer**

Because biological appeal and technical trustworthiness are different questions. Variant B may still matter, but artefact awareness says it should be handled more cautiously because the region and evidence pattern create a real risk of misleading support. Variant A is technically safer to carry forward as evidence. Reviews of clinical variant calling and IGV-based review both support using technical scrutiny to decide how strongly a call should be trusted before heavier interpretation is built on top of it.`
        },
        {
          title: "Lesson summary",
          body: `The learner has understood this lesson if they can say something like:

“Artefact awareness helps me decide how much trust a call deserves as evidence. If a signal sits in a tricky context or shows suspicious patterns, I should handle it more cautiously, review it more carefully, and sometimes escalate it rather than treating it as technically settled.”`
        }
      ],
      sections: [
        {
          heading: "The central idea",
          body:
            "Artefact awareness is used to decide how cautious you should be about a call, how much trust it deserves as evidence, and whether it should be prioritised, reviewed further, communicated carefully, or escalated."
        }
      ],
      quiz: [
        {
          question:
            "What is the main practical role of artefact awareness in clinical bioinformatics?",
          options: [
            "To replace biological interpretation entirely",
            "To decide how much trust a call deserves and how cautiously it should be handled",
            "To guarantee that every suspicious call is false",
            "To make BAM/CRAM review unnecessary"
          ],
          answerIndex: 1,
          explanation:
            "Artefact awareness helps determine trust, prioritisation, caution, and escalation, rather than replacing interpretation or acting as a simple truth label."
        },
        {
          question:
            "Why does artefact awareness matter before strong downstream interpretation?",
          options: [
            "Because phenotype information should be ignored until the end",
            "Because technically misleading signals can otherwise be treated as if they were solid evidence",
            "Because artefacts only occur in negative calls",
            "Because filters always remove every false positive automatically"
          ],
          answerIndex: 1,
          explanation:
            "False positives and other misleading signals can survive automated workflows, so artefact awareness acts as a safety check before strong conclusions are built on the call."
        },
        {
          question: "Which statement is most accurate?",
          options: [
            "If a call is artefact-suspicious, it must always be discarded immediately",
            "If a call passes filters, artefact awareness is no longer needed",
            "Artefact awareness should influence prioritisation, review, communication, and sometimes escalation, but suspicion does not always mean automatic rejection",
            "Artefact awareness mainly matters only for software developers"
          ],
          answerIndex: 2,
          explanation:
            "This lesson teaches that artefact awareness guides how a call is handled, not just whether it is kept or discarded. Suspicion should often lead to caution and further thought rather than automatic dismissal."
        },
        {
          question: "What is the safest overall message of Module 11?",
          options: [
            "A call that looks neat in the VCF is usually safe to trust",
            "Artefact families such as ambiguous mapping, difficult sequence, contamination, and caller/filtering behaviour can all mislead review, so good clinical bioinformatics requires sceptical, context-aware handling of variant evidence",
            "Every difficult region should be excluded automatically",
            "Artefact awareness is only relevant after final clinical reporting"
          ],
          answerIndex: 1,
          explanation:
            "That is the integrated lesson of the module: multiple classes of technical trap can distort evidence, so safe practice requires context-aware scepticism rather than blind trust in tidy outputs."
        }
      ]
    }
  ]
};