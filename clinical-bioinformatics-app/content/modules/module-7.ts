export const module7 = {
  slug: "module-7",
  title: "Module 7: Sequencing technologies and test types",
  description:
    "Learn how panel, exome, and genome testing differ in scope, strengths, limitations, and downstream interpretation in clinical genomics.",
  lessons: [
    {
      slug: "lesson-1",
      title: "Lesson 1: What are sequencing technologies and test types?",
      goal:
        "By the end of this lesson, the learner should be able to answer: “What do we mean by sequencing technologies and test types, and why is the choice of test important in clinical genomics?”",
      screens: [
        {
          title: "Lesson goal",
          body: `By the end of this lesson, the learner should be able to answer:

“What do we mean by sequencing technologies and test types, and why is the choice of test important in clinical genomics?”

This lesson starts Module 7 because before a learner can understand FASTQ, BAM, VCF, QC, or filtering, they need a practical answer to a basic service question:

• what test was actually done?
• what kind of genomic data can that test produce?

In current NHS practice, the National Genomic Test Directory specifies not only which tests are commissioned, but also the technology by which they are available. NHS England says the Directory sets out the genomic tests commissioned in England, the technology by which they are available, and the patients eligible to access them.`
        },
        {
          title: "The central idea",
          body: `A good beginner summary is:

**A sequencing technology is the method used to read DNA, and a test type is the clinical way that method is applied to answer a particular question.**

That distinction matters because in clinical genomics, the goal is not just “do sequencing.” The goal is closer to:

• choose the right test
• using the right technology
• for the right clinical question

So the key beginner message is:

Different tests look at different parts of the genome and are better at finding different kinds of variants.

That is one of the most important foundations for the whole module.`
        },
        {
          title: "What sequencing technology means",
          body: `At beginner level, sequencing technology means the laboratory method used to determine the order of DNA bases. MedlinePlus describes DNA sequencing as determining the order of nucleotides in a person’s genetic code, and NHS genomics education resources describe next-generation sequencing, or NGS, as a group of technologies that transformed the speed and cost of DNA sequencing.

So the learner should understand:

• sequencing technology = how DNA is read
• test type = how that reading is used clinically

This lesson does not need the learner to memorise platform brands or chemistry details. The important point is that technology affects what data can be generated and what kinds of genomic differences can realistically be detected.`
        },
        {
          title: "Why next-generation sequencing matters",
          body: `Most modern clinical genomic sequencing is based on next-generation sequencing, or NGS. NHS genomics education materials say NGS technologies are used clinically for whole genome sequencing, whole exome sequencing, gene panel sequencing, and increasingly single-gene sequencing. They also describe NGS as having transformed the speed and cost of DNA sequencing.

So the learner should form a simple mental model:

NGS is the broad technology family that makes modern panel, exome, and genome sequencing possible.

That does not mean every test is identical. It means many important clinical test types are built on the same broad sequencing approach.`
        },
        {
          title: "What a test type means",
          body: `A test type is the clinical form sequencing takes for a particular purpose.

In this module, the main beginner test types are:

• single-gene sequencing
• gene panel sequencing
• whole exome sequencing, or WES
• whole genome sequencing, or WGS

The learner does not need to master all details yet. They only need to understand that these tests differ in scope:

• some look at one gene
• some look at a selected set of genes
• some look at all coding regions
• some look at the entire genome

So the key idea is:

test type is about how much of the genome is being examined and for what clinical purpose.`
        },
        {
          title: "Why the choice of test matters",
          body: `This is one of the most important ideas in Module 7.

A beginner may imagine that the best test is always the broadest one. That is too simple.

The right test depends on:

• the clinical question
• what kind of disorder is suspected
• which genes or regions matter
• what variant types need to be detected
• what the NHS has commissioned through the Test Directory

So the learner should understand:

test choice matters because different tests have different strengths, limitations, and clinical roles.

That is why the NHS does not treat every patient as an automatic whole-genome case.`
        },
        {
          title: "A simple overview of the main test types",
          body: `At beginner level, the easiest comparison is this:

**Single-gene testing**
Looks mainly at one gene when there is a strong reason to focus there. NHS genomics education notes that NGS is increasingly used for single-gene sequencing in clinical care.

**Gene panel sequencing**
Looks at a selected group of genes linked to a particular phenotype or disease area. NHS genomics education says gene panel sequencing is usually done using massively parallel sequencing and that there are different types of panels.

**Whole exome sequencing**
Looks at the protein-coding regions of all genes. NHS genomics education says the exome is about 1–2% of the genome and that WES does not test most non-coding regions. It also notes that the range of detectable variant types is slightly smaller than for WGS.

**Whole genome sequencing**
Looks at the entire genome, including coding and non-coding regions. NHS genomics education describes WGS this way directly.

So the learner should build a simple scope ladder:

single gene → panel → exome → genome`
        },
        {
          title: "Why broader is not always better",
          body: `A broader test can look attractive because it covers more DNA, but more scope is not always automatically better for every case.

Broader tests can:

• generate more data
• raise more interpretation challenges
• include more findings of uncertain significance
• still have limitations for particular variant types

So the safer beginner understanding is:

the best test is not always the biggest test — it is the most appropriate test for the question.

That idea connects directly back to Module 3 and the National Genomic Test Directory.`
        },
        {
          title: "Why this matters later",
          body: `This lesson matters because later modules will ask the learner to look at files, QC metrics, and variant lists.

But before any of that, they need to ask:

• what test generated this data?
• what regions was it designed to assess?
• what kinds of variants was it good at detecting?
• what might it miss?

So the learner should understand:

you cannot interpret sequencing output safely without knowing what test produced it.

That is one of the most important habits in clinical bioinformatics.`
        },
        {
          title: "Why this matters in the NHS specifically",
          body: `In the NHS, sequencing technologies and test types are not chosen in a vacuum. NHS England’s National Genomic Test Directory specifies which tests are commissioned, the technology by which they are available, and which patients are eligible.

So the learner should connect this lesson back to earlier modules:

• the test is part of a service pathway
• the technology is part of a commissioned framework
• the clinical question should shape the test choice

That means test type is not just a laboratory detail. It is also a clinical-service decision.`
        },
        {
          title: "The one-sentence takeaway",
          body: `If the learner remembers one sentence from this lesson, it should be:

**Sequencing technologies are the methods used to read DNA, and test types are the clinical ways those methods are applied; choosing the right test matters because different tests cover different parts of the genome and are suited to different clinical questions.**

That is the core lesson.`
        },
        {
          title: "Worked example",
          body: `**Scenario**

A beginner says, “If whole genome sequencing looks at more DNA, then it must always be the best option and there is no real reason to use smaller tests.”

**Beginner question**

Why is that incomplete?

**Good beginner answer**

Because the best test is not simply the broadest one. Different test types are used for different clinical purposes, and the NHS commissions specific tests through the National Genomic Test Directory depending on the indication and the technology available. A panel, exome, or genome test may each be appropriate in different situations, and they differ in scope and limitations. So test choice should follow the clinical question, not just the idea that more data is always better.`
        },
        {
          title: "Lesson summary",
          body: `The learner has understood this lesson if they can say:

“Sequencing technologies are the methods used to read DNA, and test types are the clinical forms those methods take, such as single-gene, panel, exome, or genome sequencing. Different tests answer different clinical questions and have different strengths and limitations.”

That is enough for this stage.`
        }
      ],
      sections: [
        {
          heading: "The central idea",
          body:
            "A sequencing technology is the method used to read DNA, and a test type is the clinical way that method is applied to answer a particular question."
        }
      ],
      quiz: [
        {
          question:
            "What is the best beginner distinction between a sequencing technology and a test type?",
          options: [
            "A sequencing technology is the clinical indication, while a test type is the laboratory machine",
            "A sequencing technology is how DNA is read, while a test type is how that method is used clinically",
            "They mean exactly the same thing",
            "A sequencing technology is only used in research, while a test type is only used in the NHS"
          ],
          answerIndex: 1,
          explanation:
            "This is the clearest practical distinction for the learner: technology is the reading method, while test type is the clinical application of that method."
        },
        {
          question:
            "Which set best represents the main sequencing-based test types introduced in this lesson?",
          options: [
            "Blood count, MRI, panel, biopsy",
            "Single-gene, gene panel, whole exome, whole genome",
            "Chromosome stain, ECG, WES, PET scan",
            "Gene panel, protein assay, ultrasound, WGS"
          ],
          answerIndex: 1,
          explanation:
            "These are the main sequencing-based test types introduced here."
        },
        {
          question:
            "Why is it unsafe to assume the broadest test is always the best test?",
          options: [
            "Because broader tests are not genomic tests",
            "Because the most appropriate test depends on the clinical question, service framework, and the strengths and limitations of the test",
            "Because whole genome sequencing cannot detect variants",
            "Because panel tests always outperform genome tests in every setting"
          ],
          answerIndex: 1,
          explanation:
            "Test choice depends on appropriateness, not just size. The NHS commissions tests according to indication and technology."
        },
        {
          question:
            "Why does this lesson matter before learning FASTQ, BAM, and VCF?",
          options: [
            "Because file formats are unrelated to the underlying test",
            "Because sequencing output cannot be interpreted safely unless you know what test produced it and what it was designed to detect",
            "Because file formats are only used in research",
            "Because gene panels do not produce sequencing data"
          ],
          answerIndex: 1,
          explanation:
            "Interpreting downstream data safely depends on understanding the test that generated it."
        }
      ]
    },
    {
      slug: "lesson-2",
      title:
        "Lesson 2: Gene panels, exomes, and genomes — what each one actually covers",
      goal:
        "By the end of this lesson, the learner should be able to answer: “What do gene panels, whole exome sequencing, and whole genome sequencing actually cover, and why is that difference so important?”",
      screens: [
        {
          title: "Lesson goal",
          body: `By the end of this lesson, the learner should be able to answer:

“What do gene panels, whole exome sequencing, and whole genome sequencing actually cover, and why is that difference so important?”

This lesson follows Lesson 1 because once the learner understands that sequencing technologies and test types are not the same thing, the next question is practical:

how much of the genome is each test really looking at?

That matters because different tests do not simply differ in size. They differ in scope, in what regions they are designed to assess, and in what kinds of questions they are best suited to answer. NHS genomics education resources describe gene panels as looking at curated sets of genes, whole exome sequencing as testing the protein-coding regions of all genes, and whole genome sequencing as sequencing the entire genome, including coding and non-coding regions.`
        },
        {
          title: "The central idea",
          body: `A good beginner summary is:

**Gene panels, exomes, and genomes differ mainly in how much of the genome they examine.**

At the simplest level:

• a gene panel looks at a selected set of genes
• an exome looks at the coding regions of all genes
• a genome looks across the entire genome, including coding and non-coding DNA

So the key beginner message is:

these tests are not interchangeable. They answer related but different questions because they look at different parts of the genome.`
        },
        {
          title: "What a gene panel actually covers",
          body: `A gene panel does not look at the whole genome or even all genes. It looks at a selected set of genes chosen because they are known to be associated with a particular condition or group of symptoms. NHS Genomics Education says gene panel sequencing looks at a curated set of genes with variants known to be associated with the development of a condition or collection of clinical symptoms under investigation.

So the learner should understand:

a panel is targeted.

That means:

• the test is narrower in scope
• the genes included are chosen for a reason
• genes outside the panel are generally not the main focus of the test

A useful beginner way to think about it is:

panel = selected relevant genes, not everything.

This is often helpful when the phenotype already points toward a recognisable disease area or gene group.`
        },
        {
          title: "What whole exome sequencing actually covers",
          body: `Whole exome sequencing, or WES, looks at the protein-coding regions of all genes. NHS Genomics Education says WES is an NGS-based test in which the protein-coding regions of all of a patient’s genes are tested simultaneously, and that the exome makes up around 1% of the genome. It also says non-coding regions are not tested.

So the learner should understand:

the exome is broad across genes, but narrow within the genome.

That sounds contradictory at first, but it is the right way to think about it:

• broad because it includes coding regions across all genes
• narrow because it excludes most non-coding DNA

A simple beginner phrase is:

WES = all coding genes, but not the whole genome.

That is one of the most important distinctions in the module.`
        },
        {
          title: "What whole genome sequencing actually covers",
          body: `Whole genome sequencing, or WGS, looks across the entire genome. NHS Genomics Education describes WGS as sequencing an individual’s entire genome, including both protein-coding and non-protein-coding, including regulatory, regions.

So the learner should understand:

WGS is the broadest sequencing-based test in routine clinical use.

That means it includes:

• coding regions
• intronic regions
• intergenic regions
• regulatory and other non-coding regions

A simple beginner phrase is:

WGS = the whole genome, not just the exome.

That is the cleanest distinction from WES.`
        },
        {
          title: "Why coding versus non-coding coverage matters",
          body: `This is one of the most important beginner ideas in Module 7.

If a test looks mainly at coding regions, it may miss relevant changes outside those regions. NHS Genomics Education states directly that WES does not test non-coding regions, whereas WGS includes them. MedlinePlus’ genetics primer also explains that many non-coding regions have regulatory functions and that changes in non-coding DNA can matter biologically, even if much remains to be understood.

So the learner should understand:

what a test covers determines what kinds of genomic explanations it can realistically find.

This means:

• panel tests focus on selected genes
• WES focuses on coding regions
• WGS can also assess non-coding regions

That difference matters because not all clinically relevant variants sit neatly inside coding exons.`
        },
        {
          title: "Why a panel is not just a smaller exome",
          body: `A beginner might imagine that a gene panel is simply a less powerful version of WES.

That is too simple.

A panel is usually designed around a specific clinical problem, with a curated gene list linked to a phenotype or disease area. NHS Genomics Education explicitly describes panels this way. So the purpose of a panel is not just “look at less DNA.” It is more like:

look closely at the set of genes most relevant to this question.

So the learner should understand:

a panel is a focused clinical test, not just a reduced exome.

That distinction matters because panel choice reflects phenotype-driven test design rather than simple test size.`
        },
        {
          title: "Why an exome is not just a smaller genome",
          body: `Similarly, a beginner might think WES is simply a smaller version of WGS.

Again, that is too simple.

WES is built around the idea that protein-coding regions are a very important part of the genome for many Mendelian disorders. NHS Genomics Education notes that the exome makes up around 1% of the genome, while older genomics education material commonly states that many disease-causing variants for monogenic disorders lie in coding regions.

So the learner should understand:

WES is not just “less genome”; it is a test specifically focused on coding DNA.

That makes it broad across genes but still selective in what parts of those genes are primarily assessed.`
        },
        {
          title: "Why broader coverage changes the analysis challenge",
          body: `As scope increases from panel to exome to genome, the amount of DNA assessed also increases. That means broader tests can generate more candidate findings and potentially more interpretation complexity. This is a reasonable inference from the simple fact that WGS includes all genomic regions, WES includes all coding regions, and panels focus on selected genes only.

So the learner should understand:

broader coverage may give more opportunity to find relevant variants, but it also creates more data to interpret.

This is one reason why broader is not automatically better for every case, and why service frameworks do not treat all indications the same way. NHS England’s Test Directory exists precisely because different clinical indications are linked to different commissioned tests and technologies.`
        },
        {
          title: "Why this matters in the NHS pathway",
          body: `In the NHS, panel, exome, and genome tests are not chosen casually. The National Genomic Test Directory sets out which tests are commissioned, the technology by which they are available, and which patients are eligible. It is also designed around the most appropriate testing for a clinical condition rather than just the idea of using the biggest possible test.

So the learner should connect this back to earlier modules:

• test coverage is part of the service pathway
• test choice should follow the clinical indication
• what is covered affects what can be found
• what is not covered may still remain unseen

That is why “what does this test actually cover?” is such an important question in clinical genomics.`
        },
        {
          title: "The one-sentence takeaway",
          body: `If the learner remembers one sentence from this lesson, it should be:

**Gene panels cover selected genes, whole exome sequencing covers the coding regions of all genes, and whole genome sequencing covers the entire genome, so the scope of the test directly affects what kinds of findings it can and cannot reveal.**

That is the core lesson.`
        },
        {
          title: "Worked example",
          body: `**Scenario**

A beginner says, “A whole exome test and a whole genome test are basically the same, because both look at all genes.”

**Beginner question**

Why is that incomplete?

**Good beginner answer**

Because whole exome sequencing and whole genome sequencing differ in what parts of the genome they actually assess. WES looks mainly at the protein-coding regions of all genes, while WGS includes coding and non-coding regions across the entire genome. So although both are broad tests, they do not cover the same genomic territory, and that difference can matter for what kinds of variants they may detect.`
        },
        {
          title: "Lesson summary",
          body: `The learner has understood this lesson if they can say:

“A gene panel looks at a selected group of relevant genes, an exome looks at the coding regions of all genes, and a genome looks across the whole genome. These differences matter because test scope affects what can be detected and what may be missed.”`
        }
      ],
      sections: [
        {
          heading: "The central idea",
          body:
            "Gene panels, exomes, and genomes differ mainly in how much of the genome they examine."
        }
      ],
      quiz: [
        {
          question: "Which statement best describes a gene panel?",
          options: [
            "A test that sequences the entire genome, including non-coding DNA",
            "A test that looks at a curated set of genes relevant to a condition or phenotype",
            "A test that only detects structural variants",
            "A test that covers all coding regions of all genes"
          ],
          answerIndex: 1,
          explanation:
            "NHS Genomics Education describes gene panel sequencing as testing a curated set of genes linked to the condition or symptom group under investigation."
        },
        {
          question: "What does whole exome sequencing mainly cover?",
          options: [
            "Only mitochondrial DNA",
            "Only one selected gene",
            "The protein-coding regions of all genes",
            "The whole genome, including non-coding regions"
          ],
          answerIndex: 2,
          explanation:
            "NHS Genomics Education states that WES tests the protein-coding regions of all genes and does not test non-coding regions."
        },
        {
          question:
            "What is the best beginner description of whole genome sequencing?",
          options: [
            "A test that sequences selected exons from a panel of genes",
            "A test that looks only at known disease genes",
            "A test that sequences the entire genome, including coding and non-coding regions",
            "A test that is identical in scope to WES"
          ],
          answerIndex: 2,
          explanation:
            "NHS Genomics Education describes WGS as sequencing the entire genome, including both coding and non-coding regions."
        },
        {
          question:
            "Why does the difference between panel, exome, and genome coverage matter clinically?",
          options: [
            "Because broader tests are always superior",
            "Because the genomic regions a test covers determine what kinds of findings it can realistically reveal or miss",
            "Because coverage only affects laboratory cost, not interpretation",
            "Because all important variants are in coding exons only"
          ],
          answerIndex: 1,
          explanation:
            "The scope of the test determines what parts of the genome are being assessed, which directly affects what kinds of variants can be found and what may be missed."
        }
      ]
    },
    {
      slug: "lesson-3",
      title: "Lesson 3: What different tests are good at detecting",
      goal:
        "By the end of this lesson, the learner should be able to answer: “What kinds of variants are different genomic tests good at detecting, and why does that matter when interpreting results?”",
      screens: [
        {
          title: "Lesson goal",
          body: `By the end of this lesson, the learner should be able to answer:

“What kinds of variants are different genomic tests good at detecting, and why does that matter when interpreting results?”

This lesson follows the coverage lesson because once the learner understands that panel, exome, and genome tests look at different parts of the genome, the next question is practical:

what kinds of genomic changes is each test actually good at finding?

This matters because not all tests perform equally well for all variant classes. NHS genomics education resources note that targeted gene panels, exomes, and genomes differ in the variant types they can detect well, and whole genome sequencing is currently the most comprehensive form of genomic testing in clinical use.`
        },
        {
          title: "The central idea",
          body: `A good beginner summary is:

**Different genomic tests are good at detecting different kinds of variants, so the test type changes what you can expect to find.**

That is one of the most important habits in clinical genomics.

A test result does not simply reflect:

• what is present in the patient’s DNA

It also reflects:

• what the chosen test was designed to assess well
• what it may assess only partly
• what it may miss altogether

So the key beginner message is:

test performance depends on variant type, not just on how much DNA is covered.`
        },
        {
          title: "Small variants: SNVs and small indels",
          body: `The variant types that sequencing-based tests are generally strongest at detecting are small variants, especially:

• single nucleotide variants, or SNVs
• small insertions and deletions, or indels

NHS genomics education materials describe panel, exome, and genome sequencing as being built on NGS and primarily used to detect sequence variation across targeted regions or broader genomic scope. Whole genome sequencing guidance from NHS-aligned services also describes WGS pipelines as analysing small variants such as SNVs and indels as a core component.

So the learner should understand:

panel, exome, and genome sequencing are all generally good at detecting small sequence changes in the regions they assess.

That means if the clinical question is strongly about a likely SNV or small indel in covered sequence, sequencing-based testing can be very effective.`
        },
        {
          title: "Targeted panels are often strong for covered genes",
          body: `A targeted gene panel usually focuses sequencing effort on a defined set of genes. NHS genomics education says targeted panel sequencing generates data only for the genes on the panel, and a comparison page notes that targeted panels offer the lowest cost and the deepest coverage.

For a beginner, the important practical idea is:

when a panel is focused on the right genes, it can be very strong for small variants in those covered genes.

That does not mean panels are best for everything. It means they are often particularly effective when:

• the phenotype already points to a known disease area
• the likely genes are reasonably well defined
• the main concern is small variants in those genes

So the learner should not think of panels as merely “weaker.” A panel can actually be a very strong choice when the clinical question is focused.`
        },
        {
          title: "Exomes are broad across coding genes",
          body: `Whole exome sequencing is strong for detecting small variants in the protein-coding regions of genes across the exome. NHS genomics education states that WES tests the protein-coding regions of all genes simultaneously, but does not test non-coding regions, and that its range of detectable variant types is slightly smaller than WGS.

So the learner should understand:

WES is good for small variants in coding regions across many genes, especially when the likely gene is not yet obvious.

This makes WES useful when:

• the phenotype suggests a monogenic condition
• many possible genes could be involved
• coding-region variation is the main suspicion

But the learner should also remember:

• WES is not looking broadly across non-coding regions
• so it is not equally good for every possible disease mechanism.`
        },
        {
          title: "Whole genome sequencing is the broadest general test",
          body: `Whole genome sequencing is the broadest sequencing-based test in current routine clinical genomics. NHS genomics education describes WGS as the most comprehensive form of genomic testing currently in clinical use and says it enables simultaneous testing of a wide range of variant types in a large number of genes.

So the learner should understand:

WGS is generally the strongest broad sequencing test when the question may involve multiple variant types or regions beyond coding exons.

Compared with panels and WES, WGS is better placed to support detection across:

• coding and non-coding regions
• a wider range of small variants
• some copy-number and structural events, depending on the pipeline and analysis design

That is why WGS is often described as more comprehensive.`
        },
        {
          title: "Copy number variants and larger structural changes",
          body: `This is where the differences between tests start to matter more.

NHS genomics education explicitly says that targeted panel sequencing cannot detect CNVs or structural rearrangements on the comparison page for different sequencing approaches. The same page says WES has limited ability to detect CNVs and structural rearrangements compared with WGS, and NHS whole-genome resources describe WGS as supporting a wider range of variant types.

So the learner should understand this beginner rule:

• panels are usually strongest for small covered variants and weaker for CNVs and structural variants
• WES can do more, but still has limited ability for CNVs and structural variants compared with WGS
• WGS is generally the strongest of the three for broad simultaneous analysis of small variants plus many CNV and structural categories

That does not mean WGS solves everything perfectly. It means it is the broadest routine option for these categories.`
        },
        {
          title: "Repeat expansions are a special case",
          body: `Some variant classes do not fit neatly into the standard “small variant sequencing” model. One important example is repeat expansions.

NHS-aligned whole-genome testing documentation shows that WGS analysis pathways can include short tandem repeats, or STRs, alongside SNVs, indels, and CNVs in some workflows. That said, repeat-expansion detection often still depends heavily on the exact analysis pathway and indication rather than simply the fact that sequencing was done.

So the learner should understand:

repeat expansions are a distinct variant class, and whether they are detected well depends on the exact test and analysis pathway, not just the broad label of panel, exome, or genome.

That is a useful early warning against overgeneralising.`
        },
        {
          title: "Why good at detecting is not the same as guaranteed to detect",
          body: `This is one of the most important safety points in the module.

A test being good at detecting a variant class does not mean:

• every example will definitely be found
• every region will be equally well assessed
• every pipeline will perform identically

NHS genomics education repeatedly presents test capabilities together with limitations. WES is described as having a slightly smaller detectable variant range than WGS, and the comparison page clearly shows that not all approaches detect CNVs and structural rearrangements equally.

So the learner should understand:

test strength is about likelihood and suitability, not absolute certainty.

That is a very important mindset for later QC and result interpretation.`
        },
        {
          title: "Why this matters before QC and file interpretation",
          body: `This lesson is a bridge into the next modules.

Later, when the learner sees:

• FASTQ
• BAM/CRAM
• VCF
• QC metrics
• variant lists

they need to remember that those outputs came from a test with particular strengths and limitations.

So one of the first questions later should be:

what kinds of variants was this assay and analysis pathway actually good at detecting?

That question helps prevent unsafe interpretation, such as assuming a negative result rules out all possible genomic explanations.`
        },
        {
          title: "The one-sentence takeaway",
          body: `If the learner remembers one sentence from this lesson, it should be:

**Sequencing-based tests are generally strong for small variants in the regions they assess, but panels, exomes, and genomes differ in how well they support detection of larger copy-number, structural, and repeat-based changes, so test type matters for what can realistically be found.**

That is the core lesson.`
        },
        {
          title: "Worked example",
          body: `**Scenario**

A beginner says, “If a panel, exome, and genome test all involve sequencing, they should all be equally good at finding any kind of genomic variant.”

**Beginner question**

Why is that incomplete?

**Good beginner answer**

Because sequencing-based tests do not all perform equally for every variant class. Panels, exomes, and genomes are all generally good for small variants in the regions they assess, but NHS genomics education resources note that targeted panels cannot detect CNVs or structural rearrangements on the same comparison basis, WES has limited ability for those compared with WGS, and WGS is the broadest current clinical option for a wider range of variant types. So “sequencing was done” does not by itself tell you what kinds of findings the test was well suited to detect.`
        },
        {
          title: "Lesson summary",
          body: `The learner has understood this lesson if they can say:

“Panels, exomes, and genomes are all useful for small variants in the regions they assess, but they differ in how well they support detection of larger copy-number, structural, and repeat-based changes. So I need to know the test type before deciding what a result can and cannot tell me.”`
        }
      ],
      sections: [
        {
          heading: "The central idea",
          body:
            "Different genomic tests are good at detecting different kinds of variants, so the test type changes what you can expect to find."
        }
      ],
      quiz: [
        {
          question:
            "Which variant types are sequencing-based tests generally strongest at detecting in the regions they assess?",
          options: [
            "Only whole-chromosome abnormalities",
            "Small variants such as SNVs and small indels",
            "Only repeat expansions",
            "Only balanced translocations"
          ],
          answerIndex: 1,
          explanation:
            "Panel, exome, and genome sequencing are all generally used most strongly for small sequence variants in the regions they cover."
        },
        {
          question:
            "Which statement best reflects NHS genomics education guidance about CNV and structural-variant detection?",
          options: [
            "Targeted panels, exomes, and genomes detect CNVs and structural rearrangements equally well",
            "Targeted panels cannot detect CNVs or structural rearrangements, WES has limited ability compared with WGS, and WGS is the broadest current option",
            "Only WES can detect CNVs",
            "CNVs are not relevant to genomic testing"
          ],
          answerIndex: 1,
          explanation:
            "This is the comparison directly reflected in NHS genomics education resources on different sequencing approaches."
        },
        {
          question:
            "Why is whole genome sequencing often described as more comprehensive than whole exome sequencing?",
          options: [
            "Because WGS only focuses on the most clinically important genes",
            "Because WGS covers coding and non-coding regions and supports a wider range of variant types than WES",
            "Because WGS produces less data and less interpretation challenge",
            "Because WGS is only used for repeat expansions"
          ],
          answerIndex: 1,
          explanation:
            "NHS genomics education describes WGS as sequencing the entire genome and enabling testing of a wider range of variant types than WES."
        },
        {
          question:
            "Why is it unsafe to assume that “good at detecting” means “guaranteed to detect”?",
          options: [
            "Because test performance depends on assay design, region coverage, variant class, and analysis pathway",
            "Because genomic testing never finds true positives",
            "Because only clinicians, not scientists, decide what was detected",
            "Because all negative results are meaningless"
          ],
          answerIndex: 0,
          explanation:
            "Test strengths reflect suitability, not certainty. Different approaches have documented differences in detectable variant classes and limitations."
        }
      ]
    },
    {
      slug: "lesson-4",
      title: "Lesson 4: What different tests can miss",
      goal:
        "By the end of this lesson, the learner should be able to answer: “Why can a genomic test miss relevant findings, and why does a negative result not automatically rule out a genetic explanation?”",
      screens: [
        {
          title: "Lesson goal",
          body: `By the end of this lesson, the learner should be able to answer:

“Why can a genomic test miss relevant findings, and why does a negative result not automatically rule out a genetic explanation?”

This lesson follows naturally from Lesson 3. Once the learner understands what different tests are good at detecting, they also need the other half of the picture:

what can these tests still miss?

This is one of the most important safety lessons in clinical genomics. A test can be appropriate, high quality, and still fail to detect a relevant cause if that cause lies outside the test’s scope or outside what its analysis pathway can reliably find. NHS genomics education resources explicitly describe limitations for panels, exomes, and genomes, and MedlinePlus explains that a negative result does not always mean a person does not have a genetic disorder.`
        },
        {
          title: "The central idea",
          body: `A good beginner summary is:

**A genomic test can miss relevant findings because every test has limits in what it covers, what variant types it detects well, and what is actually analysed.**

That means a result is never interpreted in a vacuum. A “negative” test is not simply the same as “no genetic cause exists.” MedlinePlus says a negative result means the laboratory did not find a change known to affect health or development in what was examined, but it does not always rule out a disorder, especially if the cause is unknown, outside the tested region, or not detectable by the method used.

So the key beginner message is:

a negative result may mean “nothing was found by this test,” not “nothing genetic is there.”`
        },
        {
          title: "A test can miss variants outside what it covers",
          body: `The simplest way a test can miss something is that it was never designed to look there.

A gene panel focuses on a selected set of genes. If the causal variant is in a gene that is not included on the panel, the test may miss it. WES focuses on coding regions and generally does not test most non-coding regions. NHS genomics education states that WES does not test non-coding regions, and its glossary notes that if only the exome is sequenced, a causal variant in the other 98% of the genome may be missed.

So the learner should understand:

• panel may miss genes outside the panel
• WES may miss relevant non-coding variants
• WGS covers the whole genome, but even then interpretation and analysis limits still matter

This is one of the most fundamental reasons why different test types are not interchangeable.`
        },
        {
          title: "A test can miss variant types it is not strong at detecting",
          body: `A test may also miss findings because the relevant variant class is not one it detects well.

The NHS genomics education comparison page says targeted panels cannot detect CNVs or structural rearrangements in that comparison framework, WES has limited ability to detect CNVs and structural rearrangements compared with WGS, and WGS is the broadest current option among these for wider variant detection.

So the learner should keep this simple rule:

even if a test covers the right region, it may still be weak for the wrong variant class.

For example:

• a panel may be good for small covered SNVs and indels, but poor for larger rearrangements
• WES may detect many coding variants but still be limited for some CNV and structural-variant questions
• WGS is broader, but even it is not perfect for every possible event

That is why “sequencing was done” is not enough information on its own.`
        },
        {
          title: "Whole exome sequencing has important blind spots",
          body: `WES is a very important test, but it has clear limitations.

NHS genomics education says:

• WES tests the coding regions of all genes
• it does not test non-coding regions
• its detectable variant range is slightly smaller than WGS
• interpretation of the large number of variants can be challenging
• in rare disease diagnostics, a virtual panel is often used, meaning that although all exome data are generated, only genes known to be associated with the patient’s features may actually be analysed

So the learner should understand that WES can miss a relevant cause because:

• the variant lies outside coding regions
• the variant class is not one WES handles well
• the relevant gene may not be included in the current analysis focus if a virtual panel is used

This is a very important practical lesson.`
        },
        {
          title: "Whole genome sequencing is broader, but not limitless",
          body: `A beginner may think WGS solves all of these problems.

That is too simple.

NHS genomics education says WGS is the most comprehensive current clinical test and can detect variants in coding and non-coding regions, but it also notes an important limitation: in practice, non-coding regions may not always be analysed, because interpretation of non-coding variants is difficult. It also notes that virtual panels may sometimes be applied even when whole-genome data are generated, and that WGS produces many more variants of uncertain significance than more targeted testing.

So the learner should understand:

WGS gives the broadest opportunity to find things, but that is not the same as guaranteeing that every possible relevant variant will be found or confidently interpreted.

That distinction is essential for safe reasoning later.`
        },
        {
          title: "Some results are limited by analysis, not only by sequencing",
          body: `A very important beginner point is that a test can be limited not only by what was sequenced, but also by what was analysed.

This is especially clear in current NHS-style workflows where:

• WES may generate sequence data across all coding genes, but a virtual panel may restrict the genes initially analysed
• WGS may generate whole-genome data, but non-coding regions or other complex findings may not always be analysed routinely

So the learner should ask not only:

“What test was done?”

but also:

“What parts of the data were actually analysed in this pathway?”

That is a very important clinical bioinformatics habit.`
        },
        {
          title: "Negative does not always mean ruled out",
          body: `This is the single most important sentence in the lesson.

MedlinePlus explains that a negative result means no relevant change was found in what was tested, but it can still occur:

• if the disorder is caused by a variant that current methods cannot detect
• if the relevant gene or region was not examined
• if the disorder’s genetic basis is not yet known

So the learner should understand:

a negative result can reduce the likelihood of some explanations without eliminating all genetic explanations.

This is why the wording of results matters so much:

“not detected”
is not always the same as
“definitely absent.”`
        },
        {
          title: "Why this matters in clinical genomics",
          body: `This lesson matters because poor understanding of test limitations can lead to unsafe conclusions.

A beginner might wrongly conclude:

• negative panel = no genetic cause
• negative exome = no relevant variant exists
• WGS = complete certainty

All of those are too strong.

Safer thinking is:

• what was covered?
• what variant types was the test good at?
• what was actually analysed?
• what remained outside scope or outside confident interpretation?

This is one of the foundations of later filtering, QC, and case review.`
        },
        {
          title: "Why this matters for future modules",
          body: `Later modules will ask the learner to judge technical confidence, filtering, and prioritisation.

But before any of that, they need to remember:

some causes may be absent from the results not because they are biologically absent, but because they were outside what the test could reveal well.

That is a huge difference.

This lesson helps prepare the learner for later questions like:

• is this region covered well?
• was this class of variant in scope?
• could a negative result still leave important possibilities open?

Those are core clinical bioinformatics questions.`
        },
        {
          title: "The one-sentence takeaway",
          body: `If the learner remembers one sentence from this lesson, it should be:

**Genomic tests can miss relevant findings because of limits in coverage, variant-class detection, and analysis scope, so a negative result does not automatically rule out a genetic explanation.**

That is the core lesson.`
        },
        {
          title: "Worked example",
          body: `**Scenario**

A beginner says, “The exome result was negative, so the patient probably does not have a genetic disorder.”

**Beginner question**

Why is that incomplete?

**Good beginner answer**

Because a negative exome result only means that no relevant finding was detected within what the test and analysis were able to assess. NHS genomics education says WES does not test non-coding regions and may use virtual panels in analysis, and MedlinePlus explains that negative genetic results do not always rule out a disorder. A relevant variant could still lie outside coding regions, outside the analysed gene set, or in a class the test was less able to detect. So “negative” does not always mean “no genetic cause.”`
        },
        {
          title: "Lesson summary",
          body: `The learner has understood this lesson if they can say:

“A genomic test can miss relevant findings because it may not cover the right regions, may not detect every variant class equally well, or may not analyse all generated data in the same way. So a negative result does not always mean there is no genetic cause.”`
        }
      ],
      sections: [
        {
          heading: "The central idea",
          body:
            "A genomic test can miss relevant findings because every test has limits in what it covers, what variant types it detects well, and what is actually analysed."
        }
      ],
      quiz: [
        {
          question:
            "Why can a panel test miss a relevant diagnosis even if sequencing quality is good?",
          options: [
            "Because panel tests never detect real variants",
            "Because the causal gene may lie outside the curated panel",
            "Because panel tests only assess mitochondrial DNA",
            "Because panel tests are not sequencing-based"
          ],
          answerIndex: 1,
          explanation:
            "A panel is targeted to selected genes, so relevant genes outside that panel may not be assessed."
        },
        {
          question: "Which statement best describes a key limitation of WES?",
          options: [
            "It only sequences one gene at a time",
            "It does not test most non-coding regions and may miss relevant variants outside coding DNA",
            "It covers more genomic territory than WGS",
            "It cannot detect small variants in coding regions"
          ],
          answerIndex: 1,
          explanation:
            "NHS genomics education states that WES tests coding regions but not non-coding regions."
        },
        {
          question:
            "Why is it unsafe to assume WGS guarantees all relevant answers?",
          options: [
            "Because WGS does not sequence coding regions",
            "Because even though WGS is broad, some regions may not be analysed routinely and interpretation of non-coding variants can still be difficult",
            "Because WGS is only used for research",
            "Because WGS produces fewer variants than panel tests"
          ],
          answerIndex: 1,
          explanation:
            "NHS genomics education notes that non-coding regions may not always be analysed in practice and that interpretation remains challenging."
        },
        {
          question:
            "What is the safest interpretation of a negative genetic test result?",
          options: [
            "The patient definitely does not have a genetic disorder",
            "No relevant finding was detected within what the test and analysis could assess, but some genetic explanations may still remain",
            "The result is meaningless and should be ignored",
            "The test must have failed technically"
          ],
          answerIndex: 1,
          explanation:
            "MedlinePlus explains that negative results do not always rule out a disorder, especially if the cause lies outside what was examined or detectable."
        }
      ]
    },
    {
      slug: "lesson-5",
      title:
        "Lesson 5: Why the best test depends on the clinical question",
      goal:
        "By the end of this lesson, the learner should be able to answer: “Why is the best genomic test not always the biggest test, and how does the clinical question shape which test should be used?”",
      screens: [
        {
          title: "Lesson goal",
          body: `By the end of this lesson, the learner should be able to answer:

“Why is the best genomic test not always the biggest test, and how does the clinical question shape which test should be used?”

This lesson follows naturally from the earlier lessons on coverage, strengths, and limitations. The learner has already seen that different tests cover different parts of the genome and detect different variant classes better or worse. The next step is the key practical principle:

the best test is the most appropriate test for the question being asked.

In the NHS, this is built directly into service design. The National Genomic Test Directory specifies which genomic tests are commissioned, the technology by which they are available, and which patients are eligible, and it says tests should only be requested where there is clear evidence that a result is highly likely to change clinical management for the patient or their family.`
        },
        {
          title: "The central idea",
          body: `A good beginner summary is:

**The best genomic test depends on the clinical question, because different questions need different genomic scope, different variant detection strengths, and different service pathways.**

That means the choice of test should not begin with:

• “Which test gives the most data?”

It should begin with:

• “What are we trying to find?”
• “What kind of disorder is suspected?”
• “What kind of variants are likely?”
• “What test is commissioned and appropriate for this indication?”

So the key beginner message is:

more DNA is not automatically better; the right fit is better.`
        },
        {
          title: "The clinical question comes first",
          body: `In real clinical genomics, testing starts with the patient’s presentation, not with a preference for a particular assay size. NHS genomics education material for clinicians says phenotype information is the basis for deciding which genes and areas of the genome to look at following sequencing, and it can feed into the analysis in multiple ways.

So the learner should understand that the clinical question may include things like:

• is there a strong suspicion of one gene?
• is there a recognisable disease area with a known group of genes?
• is the phenotype broad and genetically heterogeneous?
• is a wider search needed because the likely gene is unclear?

This means test choice should follow the problem definition, not just the wish for maximum scope.`
        },
        {
          title: "When a focused test can be the better test",
          body: `A targeted panel or even single-gene test can be the better choice when the phenotype already points strongly to a well-defined gene or disease area. NHS Genomics Education describes gene panel sequencing as looking at a curated set of genes associated with the condition or symptom group under investigation, and its comparison resource notes advantages such as focused analysis and deep coverage.

So the learner should understand:

a smaller test can be the better test when the clinical suspicion is focused.

That can be true when:

• there is a strong phenotype-driven shortlist
• the likely genes are already well known
• the main concern is small variants in those genes

This is why targeted testing is not “inferior” by default. It is often a clinically efficient way to answer a focused question.`
        },
        {
          title: "When a broader test may be needed",
          body: `Broader tests become more useful when the likely explanation is less clear or when the gene list is very large. NHS Genomics Education says WES tests the coding regions of all genes simultaneously, and WGS sequences the whole genome and is the most comprehensive form of genomic testing currently in clinical use.

So the learner should understand:

broader tests become more useful when the phenotype is less gene-specific, when many genes may be involved, or when broader genomic scope is needed.

But broader still does not automatically mean “best.” It means the scope may better match a broader or less certain clinical question.`
        },
        {
          title: "The likely variant type also matters",
          body: `The clinical question is not just “which disease?” It is also often “what kind of variant do we think might be involved?” NHS genomics education’s comparison resource makes clear that different sequencing approaches differ in their ability to detect small variants versus CNVs and structural rearrangements.

So a good beginner mental model is:

• if the main suspicion is small coding variants in a known set of genes, a panel may make sense
• if the likely gene is unclear but coding variation is still the main target, WES may make sense
• if broader genomic territory or a wider range of variant types may matter, WGS may make more sense

That means the test choice is partly shaped by the biology of what you think you are looking for.`
        },
        {
          title: "NHS commissioning matters too",
          body: `In the NHS, genomic testing is not chosen as if it were a free-form academic exercise. The National Genomic Test Directory defines which tests are commissioned, the technology by which they are available, and the patients eligible to access them. It is a central feature of the Genomic Medicine Service.

So the learner should connect this lesson back to Module 3:

• the clinical question matters
• the service pathway matters
• commissioning matters
• not every technically possible test is automatically what should be used

That is one reason why “best test” in the NHS means best commissioned and appropriate test, not just “largest possible assay.”`
        },
        {
          title: "Why broader tests can create new challenges",
          body: `A broader test can identify more candidate variants, but that also means more data and often more interpretation complexity. NHS Genomics Education notes that WES can identify a large number of variants, making interpretation challenging, and WGS stores all data even when analysis may initially be restricted to a virtual panel relevant to the patient’s features.

So the learner should understand:

a broader test can give more opportunity, but also more interpretation burden.

That can mean:

• more candidates to review
• more uncertain findings
• more need for good phenotyping
• more careful downstream filtering

This is another reason the broadest test is not always automatically the best first move.`
        },
        {
          title: "A negative result has to be read in light of the test choice",
          body: `The reason test choice matters so much is that later interpretation depends on what was actually asked of the assay. A negative panel, exome, or genome result means different things depending on the scope and capabilities of that test. MedlinePlus says a negative genetic test result does not always rule out a disorder, and NHS genomics education explains that different sequencing approaches cover and analyse different parts of the genome.

So the learner should understand:

you cannot interpret a negative result safely unless you also know whether the chosen test was the right fit for the suspected problem.

That is one of the strongest reasons why test choice is a clinical reasoning issue, not just a laboratory detail.`
        },
        {
          title: "Why this matters for future clinical bioinformatics work",
          body: `Later modules will teach files, QC, filtering, prioritisation, and technical confidence. But all of that depends on understanding the upstream clinical question and the assay chosen to answer it. NHS genomics education materials for clinicians explicitly say phenotype information is used to decide which genes and genomic areas to examine following sequencing.

So the learner should start forming this habit:

Before interpreting data, ask:

• what was the clinical question?
• what test was chosen?
• why was that test chosen?
• what was it trying to find well?
• what could it still miss?

That is a core clinical bioinformatics mindset.`
        },
        {
          title: "The one-sentence takeaway",
          body: `If the learner remembers one sentence from this lesson, it should be:

**The best genomic test depends on the clinical question because different tests have different scopes, strengths, limitations, and commissioned roles, so the right test is the one that best fits the suspected condition and the kind of genomic change being sought.**

That is the core lesson.`
        },
        {
          title: "Worked example",
          body: `**Scenario**

A beginner says, “If whole genome sequencing is the most comprehensive test, then it should always be the best first choice no matter what the clinical presentation is.”

**Beginner question**

Why is that incomplete?

**Good beginner answer**

Because the best test is not simply the broadest test. NHS England’s Test Directory commissions different tests for different indications, and NHS genomics education shows that panels, exomes, and genomes have different strengths, limitations, and uses. If the phenotype strongly points to a known disease area, a focused panel may be the most appropriate test. If the likely gene is unclear or broader genomic scope is needed, WES or WGS may make more sense. So test choice should follow the clinical question, not just the desire for maximum data.`
        },
        {
          title: "Lesson summary",
          body: `The learner has understood this lesson if they can say:

“The best genomic test is not always the broadest one. The right choice depends on the patient’s phenotype, the suspected condition, the likely variant type, and the commissioned NHS pathway. Different tests answer different clinical questions.”`
        }
      ],
      sections: [
        {
          heading: "The central idea",
          body:
            "The best genomic test depends on the clinical question, because different questions need different genomic scope, different variant detection strengths, and different service pathways."
        }
      ],
      quiz: [
        {
          question:
            "What is the safest general rule for choosing a genomic test?",
          options: [
            "Always choose the broadest possible test first",
            "Choose the test that best fits the clinical question, likely variant type, and service pathway",
            "Choose the test with the smallest data output",
            "Choose whichever test is most familiar to the laboratory"
          ],
          answerIndex: 1,
          explanation:
            "The NHS commissions tests through the Test Directory, and the most appropriate test depends on the indication, suspected condition, and intended genomic scope."
        },
        {
          question: "When can a targeted panel be the better test?",
          options: [
            "When the phenotype strongly points toward a known group of relevant genes",
            "Only when whole genome sequencing is unavailable",
            "Only for non-genetic disease",
            "Never, because exome and genome tests are always superior"
          ],
          answerIndex: 0,
          explanation:
            "Gene panel sequencing is designed around curated genes relevant to a condition or symptom group, so it can be the most appropriate test when the clinical question is focused."
        },
        {
          question:
            "Why might a broader test create more interpretation challenge?",
          options: [
            "Because broader tests generate less data",
            "Because broader tests may reveal more candidate variants and more uncertain findings that need review",
            "Because broader tests only detect benign variants",
            "Because broader tests remove the need for phenotype information"
          ],
          answerIndex: 1,
          explanation:
            "NHS genomics education notes that WES and WGS can generate large amounts of data and interpretation can be challenging, especially when many variants are identified."
        },
        {
          question:
            "Why does test choice matter when interpreting a negative result?",
          options: [
            "Because negative results mean exactly the same thing regardless of the test used",
            "Because whether a negative result is reassuring depends partly on whether the chosen test was the right fit for the suspected question and variant type",
            "Because negative results only occur when sequencing fails",
            "Because test choice matters only before analysis, not after it"
          ],
          answerIndex: 1,
          explanation:
            "A negative result can only be interpreted properly if you know what the assay covered well, what it was designed to detect, and what remained outside scope."
        }
      ]
    },
    {
      slug: "lesson-6",
      title: "Lesson 6: Why test choice matters for downstream analysis",
      goal:
        "By the end of this lesson, the learner should be able to answer: “Why does the choice of genomic test matter for the files, QC, and downstream interpretation that come later?”",
      screens: [
        {
          title: "Lesson goal",
          body: `By the end of this lesson, the learner should be able to answer:

“Why does the choice of genomic test matter for the files, QC, and downstream interpretation that come later?”

This lesson finishes Module 7 by connecting testing decisions to the practical work of clinical bioinformatics. The learner has already seen that different tests:

• cover different parts of the genome
• are good at detecting different classes of variation
• can still miss relevant findings
• should be chosen according to the clinical question

Now the learner needs the key bridge into the next modules:

the data you receive, the QC you perform, and the confidence you place in results all depend partly on what test produced them.

NHS Genomics Education says phenotype information is used to decide which genes and genomic regions to examine following sequencing, and resources on WES and WGS explain that even when broad data are generated, analysis may still be restricted to virtual panels or other defined scopes.`
        },
        {
          title: "The central idea",
          body: `A good beginner summary is:

**Downstream analysis only makes sense when you know what test produced the data and what that test was designed to find.**

A FASTQ, BAM/CRAM, or VCF file is not just “genomic data.” It is genomic data created by a particular assay, with particular coverage, strengths, weaknesses, and analysis boundaries. NHS genomics education resources make this very clear by describing how different test types vary in scope and by noting that whole-exome and whole-genome data are not always analysed in the same way across all regions.

So the key beginner message is:

you cannot interpret data safely without assay context.`
        },
        {
          title: "The same file type does not mean the same clinical meaning",
          body: `A beginner may assume that if two cases both produce a VCF, then the interpretation challenge is basically the same.

That is too simple.

A VCF from a focused panel, a VCF from WES, and a VCF from WGS may all look similar in file format terms, but they come from different upstream tests with different scopes. NHS Genomics Education explains that panel, exome, and genome approaches differ in the genes or regions covered, the variant classes they support, and what may not be analysed routinely.

So the learner should understand:

same file format does not mean same biological or clinical meaning.

That is why test choice matters before file interpretation even begins.`
        },
        {
          title: "QC only makes sense in context of the assay",
          body: `This is one of the most important ideas for a future clinical bioinformatician.

Quality control is not just asking:

• is there enough data?
• are the files complete?

It is also asking:

• is the right region covered for this assay?
• is the depth adequate for the test type?
• is the result consistent with what this assay should detect well?
• are there blind spots that matter for this clinical question?

NHS Genomics Education’s comparison resources show that panels, exomes, and genomes differ in coverage and variant-detection strengths, which means QC cannot be judged in the same way for every test.

So the learner should understand:

QC is assay-aware, not assay-blind.

That idea becomes essential in Modules 8–12.`
        },
        {
          title: "A negative result cannot be judged without knowing the test scope",
          body: `MedlinePlus states that a negative result means no relevant change was found in what was examined, but it does not always rule out a genetic disorder. NHS Genomics Education explains that WES does not test non-coding regions, that virtual panels may be applied to exome or genome data, and that WGS non-coding regions may not always be analysed routinely because interpretation can be difficult.

So the learner should understand:

a negative result only has meaning in relation to the test’s scope and analysis boundaries.

That means downstream interpretation should not jump straight from:

• “nothing reported”

to

• “nothing is there.”

Instead, the learner should think:

• what was covered?
• what was analysed?
• what remained outside scope?

This is one of the strongest bridges between test choice and later interpretation.`
        },
        {
          title: "Variant filtering depends partly on what the assay was built to detect",
          body: `Filtering is not only about population frequency, phenotype fit, or inheritance. It is also about whether the assay was appropriate for the kind of variant under consideration.

For example:

• if the test was strong for small coding SNVs and indels, those findings may carry a different initial expectation than larger structural or repeat-based events
• if the test had limited ability for a certain class of variant, absence of that class from the result list should be interpreted cautiously

NHS Genomics Education’s comparison page directly supports this by showing different detection capabilities for small variants versus CNVs and structural rearrangements across panel, WES, and WGS approaches.

So the learner should understand:

filtering happens inside the limits of the assay, not outside them.

That is why assay context matters before any downstream prioritisation.`
        },
        {
          title: "Whole data generated is not the same as whole data analysed",
          body: `This is one of the most useful practical lessons in the entire module.

NHS Genomics Education says that:

• WES often uses virtual panels, meaning all exome data may be generated but only selected genes are initially analysed
• WGS may include non-coding regions in the raw data, but in practice such regions may not always be analysed because interpretation is difficult

So the learner should understand:

what is in the raw data and what is in the active analysis pathway are not always the same thing.

This matters because later, when looking at files or outputs, the learner must ask:

• what data were generated?
• what subset was analysed?
• what was intentionally left outside routine review?

That is a very important clinical bioinformatics mindset.`
        },
        {
          title: "The clinical question shapes downstream interpretation",
          body: `The clinical question that drove the assay choice does not disappear once the files arrive.

NHS Genomics Education’s clinician-facing material says phenotype information is the basis for deciding which genes and genomic areas to look at following sequencing. That means the downstream analysis is already shaped by the original clinical framing of the case.

So the learner should understand:

the bioinformatics stage is not separate from the clinical question — it is downstream of it.

This means interpretation should still ask:

• what was the phenotype?
• what was the suspected disorder area?
• why was this test chosen?
• what kinds of findings were expected to be most informative?

That is what makes downstream analysis clinically grounded rather than purely technical.`
        },
        {
          title: "Why this matters for safe communication",
          body: `Test choice matters not only for analysis, but also for how results are explained.

If a report says no relevant variant was found, the person communicating that result needs to understand whether this means:

• no variant was found in the covered genes
• no coding variant was found
• no variant was found in the analysed data
• or no definitive explanation was found, while important possibilities remain outside scope

MedlinePlus explicitly says negative results do not always rule out a disorder, and NHS genomics education explains why some regions or data may not have been assessed or analysed routinely.

So the learner should understand:

safe communication depends on knowing the limitations of the test behind the result.`
        },
        {
          title: "Why this is the bridge into Modules 8–12",
          body: `Module 7 should finish by preparing the learner for what comes next:

• Module 8 will map sample to FASTQ, BAM/CRAM, and VCF
• Modules 10–12 will cover QC, technical confidence, and evidence checking

Those later modules only make full sense if the learner already understands:

• what assay created the data
• what regions were in scope
• what variant classes were realistic targets
• what limitations were built in from the start

So the learner should now start thinking like this:

before trusting the data, I need to know the test.

That is one of the most important habits in clinical bioinformatics.`
        },
        {
          title: "The one-sentence takeaway",
          body: `If the learner remembers one sentence from this lesson, it should be:

**Test choice matters for downstream analysis because the files, QC expectations, detectable variant classes, and interpretation limits all depend on what assay generated the data and what parts of that data were actually analysed.**

That is the core lesson.`
        },
        {
          title: "Worked example",
          body: `**Scenario**

A beginner reviews a VCF from a negative exome test and says, “There are no relevant variants here, so this patient’s disorder is probably not genetic.”

**Beginner question**

Why is that incomplete?

**Good beginner answer**

Because the VCF reflects what the exome assay and analysis pathway were able to examine, not every possible genetic explanation. NHS Genomics Education says WES does not test most non-coding regions and that virtual panels may restrict which genes are analysed, while MedlinePlus explains that a negative result does not always rule out a disorder. So before concluding too much from a negative exome-derived VCF, you need to know what the assay covered, what was analysed, and what remained outside scope.`
        },
        {
          title: "Lesson summary",
          body: `The learner has understood this lesson if they can say:

“I cannot interpret downstream genomic data safely unless I know what test produced it, what regions and variant classes it was designed to assess, and what part of the generated data was actually analysed. Test choice shapes the meaning of the files and the meaning of the result.”`
        }
      ],
      sections: [
        {
          heading: "The central idea",
          body:
            "Downstream analysis only makes sense when you know what test produced the data and what that test was designed to find."
        }
      ],
      quiz: [
        {
          question:
            "Why is it unsafe to interpret a VCF without knowing what test produced it?",
          options: [
            "Because VCFs are only used in research",
            "Because the same file format can come from assays with different scopes, strengths, and analysis limits",
            "Because VCF files always contain every variant in the genome",
            "Because VCFs are not related to clinical genomics"
          ],
          answerIndex: 1,
          explanation:
            "A panel-, exome-, or genome-derived VCF may use the same file format, but the underlying assay context can be very different."
        },
        {
          question: "Why does QC need to be interpreted in relation to the assay?",
          options: [
            "Because QC only matters for whole genomes",
            "Because coverage expectations and reliable variant detection depend on what test was used and what it was designed to assess",
            "Because QC is just a file-size check",
            "Because all genomic assays have the same strengths and blind spots"
          ],
          answerIndex: 1,
          explanation:
            "Different tests have different coverage patterns and variant-detection strengths, so QC cannot be judged safely without assay context."
        },
        {
          question:
            "What is the best interpretation of all data generated versus all data analysed?",
          options: [
            "They always mean exactly the same thing",
            "Raw sequencing data may be broader than the subset routinely analysed, for example when virtual panels are applied",
            "Generated data is always smaller than analysed data",
            "Only research workflows distinguish between them"
          ],
          answerIndex: 1,
          explanation:
            "NHS Genomics Education notes that virtual panels may be applied to WES data, and that some WGS regions may not always be analysed routinely."
        },
        {
          question:
            "Why does test choice matter for communicating results safely?",
          options: [
            "Because negative results always rule out the disorder being considered",
            "Because understanding what the test covered and analysed is necessary to explain what a result does and does not mean",
            "Because communication only matters after QC is complete",
            "Because file formats determine phenotype"
          ],
          answerIndex: 1,
          explanation:
            "MedlinePlus says negative results do not always rule out a disorder, so safe communication depends on knowing the assay’s scope and limitations."
        }
      ]
    }
  ]
};