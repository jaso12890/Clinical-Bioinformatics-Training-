export const module10 = {
    slug: "module-10",
    title: "Module 10: Quality metrics and technical confidence",
    description:
      "Learn how to judge whether a variant call deserves trust as sequence evidence using depth, allele support, genotype/site quality, mapping quality, strand patterns, and integrated technical review.",
    lessons: [
      {
        slug: "lesson-1",
        title: "Lesson 1: What does technical confidence mean?",
        goal:
          "By the end of this lesson, the learner should be able to answer: “What does technical confidence mean in clinical bioinformatics, and how is it different from biological or clinical relevance?”",
        screens: [
          {
            title: "Lesson goal",
            body: `By the end of this lesson, the learner should be able to answer:
  
  “What does technical confidence mean in clinical bioinformatics, and how is it different from biological or clinical relevance?”
  
  This lesson starts Module 10 because the learner now understands:
  
  • sequencing test types and what they can miss
  • how sequencing data moves from FASTQ → BAM/CRAM → VCF
  • why reference-build, transcript, and annotation context matter
  
  The next step is to understand a core professional distinction:
  
  a variant can look interesting biologically, but still be technically weak.
  
  VCF guidance and variant-review literature separate the idea of a called variant from the question of how convincing the underlying evidence really is. GATK’s VCF documentation distinguishes site-level and genotype-level confidence fields such as QUAL and GQ, while IGV review guidance shows that suspicious read patterns can reveal artefacts even when a site has been called.`
          },
          {
            title: "The central idea",
            body: `A good beginner summary is:
  
  **Technical confidence means confidence that a variant call is well supported by the sequencing data and analysis process.**
  
  That is different from asking:
  
  • does this variant fit the phenotype?
  • is this gene relevant?
  • could this change be pathogenic?
  
  Those are important questions, but they are not the same question.
  
  So the key beginner message is:
  
  technical confidence is about whether the call looks believable as data evidence, not whether it looks clinically important. GATK’s documentation makes this distinction practical by separating call-confidence metrics from downstream interpretation, and IGV guidance shows that review often focuses on whether the underlying read evidence is convincing.`
          },
          {
            title: "Why this distinction matters",
            body: `A learner can easily make two opposite mistakes:
  
  • Mistake 1: “It fits the phenotype, so it must be real.”
  • Mistake 2: “It passed through the pipeline, so it must be trustworthy.”
  
  Both are unsafe.
  
  A biologically plausible variant can still be:
  
  • based on weak read support
  • supported mainly by low-quality reads
  • affected by mapping problems
  • distorted by strand bias
  • uncertain at the genotype level
  
  Variant-review guidance for IGV explicitly shows examples where apparent calls are actually artefacts once the aligned evidence is inspected.
  
  So the learner should understand:
  
  technical confidence must be judged on technical evidence, not on clinical appeal alone.`
          },
          {
            title: "What technical confidence is not",
            body: `This lesson is very important because beginners often mix several kinds of “confidence” together.
  
  Technical confidence is not the same as:
  
  • pathogenicity
  • phenotype fit
  • inheritance fit
  • overall diagnosis
  • final clinical interpretation
  
  A technically strong variant might still be:
  
  • too common for the disorder
  • a poor phenotype match
  • a mechanism mismatch
  • clinically irrelevant
  
  And a technically weak variant might still be:
  
  • biologically tempting
  • worth cautious review
  • but not something that should be trusted easily
  
  So the learner should understand:
  
  technical confidence answers the question “does this call deserve trust as sequence evidence?” not “does this call explain the patient?”
  
  That distinction will become essential in later filtering and prioritisation modules.`
          },
          {
            title: "Where technical confidence comes from",
            body: `Technical confidence usually comes from a pattern of evidence, not from one magical number.
  
  That evidence may include:
  
  • how many reads cover the site
  • how many support the alternate allele
  • whether the genotype call looks confident
  • whether mapping looks reliable
  • whether support appears on both strands
  • whether the call sits in a suspicious region or shows artefact-like behaviour
  
  GATK’s VCF documentation explains several of the key quantitative fields used for this, including AD, DP, GQ, and QUAL, while IGV review literature shows how strand and alignment patterns can strengthen or weaken trust in a call.
  
  So the learner should understand:
  
  technical confidence is built from multiple kinds of evidence that fit together coherently.
  
  That is why Module 10 is about patterns rather than single cutoffs.`
          },
          {
            title: "Why one metric is never the whole story",
            body: `A very common beginner mistake is to over-trust one number.
  
  For example:
  
  • high depth alone does not guarantee a good call
  • high QUAL alone does not guarantee the genotype is right
  • good allele balance alone does not prove clean mapping
  • high GQ alone does not mean the site is biologically important
  
  GATK explicitly distinguishes QUAL from GQ and notes that QUAL is a site-level confidence measure, while GQ is confidence in the sample’s genotype at that site. GATK also recommends using integrated logic when filtering rather than relying blindly on one field.
  
  So the learner should understand:
  
  technical confidence is not “reading off one value.” It is judging whether the metrics and read evidence agree with each other.
  
  That is a core clinical bioinformatics habit.`
          },
          {
            title: "Why variant callers can still produce weak calls",
            body: `A learner may think:
  
  “If the pipeline called it, surely it already passed all the hard technical questions.”
  
  That is too simple.
  
  Variant callers make probabilistic decisions based on data and model assumptions. GATK’s VCF documentation shows that the output includes multiple confidence fields precisely because the call is not just a yes/no truth label. Hard-filtering guidance also shows that additional filtration steps may still be needed after calling.
  
  So the learner should understand:
  
  a called variant is a candidate supported by the pipeline, not a guarantee of technical truth.
  
  That is why later modules include:
  
  • QC
  • artefact recognition
  • visual review
  • evidence checking`
          },
          {
            title: "Why technical confidence matters before interpretation",
            body: `Technical confidence matters because weak calls can mislead downstream clinical reasoning.
  
  If a technically weak call is treated as solid, it can:
  
  • distract attention from stronger candidates
  • create false reassurance
  • create false concern
  • distort filtering and prioritisation
  • confuse later clinical review
  
  IGV review guidance shows that visual inspection can reveal sequencing artefacts such as strong strand bias or suspicious local patterns that weaken confidence in apparently interesting variants.
  
  So the learner should understand:
  
  before asking whether a variant is clinically important, it is often necessary to ask whether it is technically trustworthy enough to consider seriously.
  
  That is one of the most important order-of-operations lessons in clinical bioinformatics.`
          },
          {
            title: "Why technical confidence is still context-dependent",
            body: `This lesson should also avoid another beginner error:
  
  thinking technical confidence means universal hard cutoffs always apply.
  
  In reality, thresholds depend on:
  
  • the assay
  • the caller
  • the pipeline
  • the sequencing depth model
  • the clinical context
  
  GATK’s hard-filtering documentation explicitly says its suggested thresholds are generic starting points and should not be treated as universal rules for every dataset.
  
  So the learner should understand:
  
  technical confidence is evidence-based, but not completely context-free.
  
  That is why the module will teach principles first, rather than rigid threshold memorisation.`
          },
          {
            title: "The main mindset this module should build",
            body: `By the end of this lesson, the learner should start thinking like this:
  
  When I see a variant, I should ask:
  
  • is the read support strong enough?
  • do the metrics look coherent?
  • does the genotype call look confident?
  • are there technical warning signs?
  • does the call deserve trust as evidence?
  
  Only after that should the learner move on to:
  
  • phenotype fit
  • mechanism
  • prioritisation
  • interpretation
  
  That sequence is one of the main safeguards against overcalling weak data.`
          },
          {
            title: "The one-sentence takeaway",
            body: `If the learner remembers one sentence from this lesson, it should be:
  
  **Technical confidence means confidence that a variant call is genuinely supported by the sequencing data and analysis, and it is separate from the question of whether the variant is biologically or clinically important.**
  
  That is the core lesson.`
          },
          {
            title: "Worked example",
            body: `**Scenario**
  
  A learner sees a rare variant in a gene strongly linked to the patient’s phenotype and says, “This is probably the answer, so the technical details matter less.”
  
  **Beginner question**
  
  Why is that incomplete?
  
  **Good beginner answer**
  
  Because phenotype fit and technical confidence are different questions. A variant can look biologically appealing and still be technically weak if the read support, genotype confidence, mapping, or strand pattern is poor. GATK’s VCF documentation and IGV review guidance both show that called variants still need technical scrutiny. So before treating the variant as a serious candidate, the learner should first ask whether the call itself looks technically believable.`
          },
          {
            title: "Lesson summary",
            body: `The learner has understood this lesson if they can say something like:
  
  “Technical confidence is about whether a call deserves trust as sequence evidence. It is separate from pathogenicity or phenotype fit, and it usually depends on multiple pieces of technical evidence rather than one metric alone.”`
          }
        ],
        sections: [
          {
            heading: "The central idea",
            body:
              "Technical confidence means confidence that a variant call is well supported by the sequencing data and analysis process."
          }
        ],
        quiz: [
          {
            question:
              "What is the best beginner definition of technical confidence?",
            options: [
              "Confidence that a variant explains the phenotype",
              "Confidence that a variant call is well supported by the sequencing evidence and analysis",
              "Confidence that a gene is disease-associated",
              "Confidence that the patient has a monogenic disorder"
            ],
            answerIndex: 1,
            explanation:
              "Technical confidence is about the strength and reliability of the call as data evidence, not about final clinical meaning. GATK and IGV resources both support this distinction."
          },
          {
            question:
              "Why is it unsafe to assume that a biologically plausible variant is automatically technically strong?",
            options: [
              "Because biological plausibility and technical confidence are different questions",
              "Because phenotype information makes sequencing quality irrelevant",
              "Because only common variants can be technically reliable",
              "Because technical confidence matters only after final diagnosis"
            ],
            answerIndex: 0,
            explanation:
              "A variant can fit the phenotype and still show weak technical evidence such as low confidence, suspicious mapping, or strand bias."
          },
          {
            question: "Which statement is most accurate?",
            options: [
              "One metric is usually enough to decide whether a call is trustworthy",
              "Technical confidence is usually judged from a pattern of evidence, not a single number",
              "QUAL and GQ mean the same thing",
              "If a caller reports a variant, technical review is unnecessary"
            ],
            answerIndex: 1,
            explanation:
              "GATK distinguishes multiple fields such as QUAL, GQ, AD, and DP, and filtering guidance stresses combined logic rather than blind reliance on one metric."
          },
          {
            question: "Why can a called variant still be technically weak?",
            options: [
              "Because variant callers produce only perfect truth labels",
              "Because calling is a probabilistic process, and weak evidence or artefacts can still generate candidate calls that need review",
              "Because BAM files are always wrong",
              "Because low-quality calls are automatically removed before any VCF is written"
            ],
            answerIndex: 1,
            explanation:
              "Variant calling produces candidate calls with associated confidence fields, and additional filtering or review may still be required."
          }
        ]
      },
      {
        slug: "lesson-2",
        title: "Lesson 2: Read depth, allele depth, and allele balance",
        goal:
          "By the end of this lesson, the learner should be able to answer: “What do read depth, allele depth, and allele balance tell me about a variant call, and why are they useful for judging technical confidence?”",
        screens: [
          {
            title: "Lesson goal",
            body: `By the end of this lesson, the learner should be able to answer:
  
  “What do read depth, allele depth, and allele balance tell me about a variant call, and why are they useful for judging technical confidence?”
  
  This lesson follows the introduction to technical confidence because one of the first things a learner sees in real variant review is a set of depth-related numbers. GATK’s VCF guide explicitly explains DP and AD as complementary ways of thinking about coverage at a site, and the VCF specification shows common genotype fields such as GT:GQ:DP:AD.`
          },
          {
            title: "The central idea",
            body: `A good beginner summary is:
  
  **Read depth tells you how many reads cover the site, allele depth tells you how many reads support each allele, and allele balance tells you how the read support is split between alleles.** GATK’s VCF documentation describes DP as depth of coverage and AD as allele depth, and the VCF specification shows AD as a vector of values per sample.
  
  So the key beginner message is:
  
  these metrics help you judge whether the call has enough support and whether that support looks internally consistent.
  
  They do not prove truth on their own, but they are among the most useful first-pass checks.`
          },
          {
            title: "What read depth means",
            body: `Read depth usually means how many sequencing reads cover a particular genomic position. In many VCFs, this appears as DP. GATK’s VCF guide uses DP as depth of coverage and explains that it is one of the key genotype-level fields. The VCF specification also includes DP among common genotype fields.
  
  So the learner should understand:
  
  DP answers the question: how much read coverage is there at this site?
  
  At beginner level:
  
  • very low depth can weaken confidence because there may be too little evidence
  • higher depth often helps, but it is not automatically reassuring on its own
  
  This is important because a call based on 3 reads is usually a very different technical situation from a call based on 50 reads.`
          },
          {
            title: "Why depth matters, but not in a simplistic way",
            body: `A beginner might think:
  
  “More depth always means a better call.”
  
  That is too simple.
  
  Depth is useful because too little coverage makes genotype calling less reliable, but unusually high depth can also be a warning sign in some settings, for example in repetitive regions or paralogous regions. GATK’s filtering guidance uses depth-related measures as part of integrated filtering rather than as a single universal pass/fail rule, and broader genomics guidance notes that unusually high depth can sometimes indicate problematic regions.
  
  So the learner should understand:
  
  depth helps, but depth has to be interpreted in context.
  
  That is why Module 10 keeps returning to the idea that one metric is never enough.`
          },
          {
            title: "What allele depth means",
            body: `Allele depth usually appears as AD and tells you how many reads support each allele at a site. GATK describes AD as allele depth, and the VCF specification example shows AD as a vector, for example 32,16, corresponding to support for the reported alleles.
  
  So the learner should understand:
  
  AD answers the question: how many reads support the reference allele, and how many support the alternate allele?
  
  In a simple biallelic site, AD often appears as:
  
  • first value = reference support
  • second value = alternate support
  
  That makes AD more informative than total depth alone, because it tells you how the evidence is distributed between alleles.`
          },
          {
            title: "Why AD is more informative than DP by itself",
            body: `Imagine two variant calls, both with DP = 20.
  
  Those calls can still be very different technically:
  
  • one might have AD = 10,10
  • another might have AD = 19,1
  
  Both have the same total depth, but the balance of evidence is completely different.
  
  So the learner should understand:
  
  DP tells you how much data is present, but AD tells you how that data is split between the alleles. GATK explicitly says AD and DP are complementary ways of thinking about depth.
  
  That is why AD becomes so important in judging whether a genotype call looks coherent.`
          },
          {
            title: "What allele balance means",
            body: `Allele balance (AB) is usually not a guaranteed universal VCF field, but rather a useful concept or derived proportion based on the read support for different alleles. In practice, it is often thought of as the fraction of reads supporting the alternate allele among the informative reads at the site. Recent genomics literature describes heterozygous allele balance as being expected to be around 0.5, and one review notes that a heterozygous genotype call should have allele balance around 0.5, with broader acceptable ranges often used in practice.
  
  So the learner should understand:
  
  allele balance answers the question: does the distribution of read support look plausible for the called genotype?
  
  A simple beginner formula is:
  
  AB ≈ alt-support / total relevant support
  
  For example:
  
  • AD = 10,10 gives AB ≈ 0.5
  • AD = 18,2 gives AB ≈ 0.1.`
          },
          {
            title: "What allele balance often looks like in common genotype situations",
            body: `At beginner level, the learner should know the rough pattern rather than treat this as a rigid rulebook.
  
  For a diploid sample:
  
  • a heterozygous call often shows allele balance somewhere around 0.5
  • a homozygous alternate call should show most reads supporting the alternate allele
  • a homozygous reference site should show little or no alternate support
  
  Literature on allele balance and sequencing QC repeatedly uses ~0.5 as the expected centre for well-behaved heterozygous calls, while also making clear that real data can deviate for technical or biological reasons.
  
  So the learner should understand:
  
  allele balance is not about perfection — it is about plausibility.
  
  A heterozygous call with a balance near 0.5 often looks more convincing than one with extreme imbalance, especially if other metrics also look good.`
          },
          {
            title: "Why odd allele balance can be a warning sign",
            body: `A heterozygous call with very unbalanced support may still be real, but it should attract caution.
  
  For example:
  
  • low alternate support at a heterozygous site may reflect sequencing noise, mapping issues, or artefacts
  • strongly imbalanced support may weaken confidence in the called genotype
  
  Recent biostatistical and sequencing-quality literature uses allele balance as one of the signals for genotype plausibility and technical quality, with heterozygous calls expected to centre around ~0.5 rather than extreme skew.
  
  So the learner should understand:
  
  odd allele balance does not automatically make a call false, but it can make the call less comfortable and more worth checking carefully.
  
  That is exactly the kind of reasoning clinical bioinformatics needs.`
          },
          {
            title: "Why depth and balance must be read together",
            body: `This is one of the most important ideas in the lesson.
  
  A call with allele balance near 0.5 but only 2 total reads is not reassuring.
  
  A call with 60 reads but extremely skewed support may also be concerning.
  
  So the learner should understand:
  
  DP, AD, and AB are most useful when interpreted together. GATK’s VCF guide presents DP and AD as complementary metrics, which is exactly the mindset the learner should develop here.
  
  A simple beginner way to think about it is:
  
  • DP asks how much evidence is present
  • AD asks how much of that evidence supports each allele
  • AB asks whether that split looks plausible for the genotype call
  
  That trio forms one of the foundations of technical confidence.`
          },
          {
            title: "What these metrics do not tell you on their own",
            body: `These metrics are very useful, but they do not settle the whole technical picture.
  
  By themselves, they do not fully tell you:
  
  • whether reads map well
  • whether support is biased to one strand
  • whether reads cluster at read ends
  • whether the surrounding region is repetitive or problematic
  • whether the call is clinically relevant
  
  That is why later lessons will add:
  
  • genotype quality
  • site quality
  • mapping quality
  • strand bias
  • suspicious read patterns
  
  So the learner should understand:
  
  depth and allele support are necessary early clues, but they are not the entire story.`
          },
          {
            title: "The one-sentence takeaway",
            body: `If the learner remembers one sentence from this lesson, it should be:
  
  **Read depth tells you how much coverage a site has, allele depth tells you how many reads support each allele, and allele balance tells you whether that split looks plausible for the called genotype, so these metrics together are a key first-pass check on technical confidence.**
  
  That is the core lesson.`
          },
          {
            title: "Worked example",
            body: `**Scenario**
  
  Two heterozygous variant calls are being reviewed.
  
  • Call A: DP = 24, AD = 12,12
  • Call B: DP = 24, AD = 23,1
  
  A beginner says, “They have the same depth, so they should be equally convincing.”
  
  **Beginner question**
  
  Why is that incomplete?
  
  **Good beginner answer**
  
  Because total depth alone does not show how the evidence is distributed between alleles. Both calls have the same DP, but their allele depths are very different. Call A has balanced support that looks more consistent with a heterozygous genotype, while Call B has highly skewed support that may be less comfortable and may need more caution or further review. DP tells you how much data there is, but AD and allele balance tell you whether the split of support looks plausible for the genotype.`
          },
          {
            title: "Lesson summary",
            body: `The learner has understood this lesson if they can say something like:
  
  “DP tells me how much read coverage there is at the site, AD tells me how many reads support each allele, and allele balance helps me judge whether the split of support looks plausible for the genotype. I should read these together, not in isolation.”`
          }
        ],
        sections: [
          {
            heading: "The central idea",
            body:
              "Read depth tells you how many reads cover the site, allele depth tells you how many reads support each allele, and allele balance tells you how the read support is split between alleles."
          }
        ],
        quiz: [
          {
            question:
              "What does DP usually represent in genotype-level variant review?",
            options: [
              "The alternate allele only",
              "The total read depth covering the site",
              "The number of transcripts overlapping the site",
              "The site’s pathogenicity score"
            ],
            answerIndex: 1,
            explanation:
              "GATK and the VCF specification use DP as depth of coverage at the genotype/site level."
          },
          {
            question: "What does AD usually represent?",
            options: [
              "The number of genes associated with the phenotype",
              "The read depth supporting each reported allele",
              "The quality of the reference genome build",
              "The number of alternate transcripts"
            ],
            answerIndex: 1,
            explanation:
              "GATK describes AD as allele depth, and the VCF specification example shows AD as a vector containing per-allele support values."
          },
          {
            question: "Why is allele balance useful?",
            options: [
              "Because it tells you whether the distribution of read support looks plausible for the called genotype",
              "Because it replaces the need for read depth",
              "Because it tells you whether the variant is pathogenic",
              "Because it is always exactly 0.5 in real data"
            ],
            answerIndex: 0,
            explanation:
              "Allele balance helps assess whether the split of reads between alleles looks reasonable, especially for heterozygous calls, where it often centres around ~0.5 rather than extreme skew."
          },
          {
            question: "Why is it unsafe to judge a call from DP alone?",
            options: [
              "Because depth never matters in sequencing",
              "Because total depth does not show how support is distributed between the alleles",
              "Because DP is only used in research",
              "Because DP and AD always mean the same thing"
            ],
            answerIndex: 1,
            explanation:
              "A site can have the same total depth but very different allele support patterns, which is why AD and allele balance are needed alongside DP."
          }
        ]
      },
      {
        slug: "lesson-3",
        title: "Lesson 3: Genotype quality, site quality, and why they are not the same",
        goal:
          "By the end of this lesson, the learner should be able to answer: “What is the difference between genotype quality and site quality, and why is it unsafe to treat them as the same thing?”",
        screens: [
          {
            title: "Lesson goal",
            body: `By the end of this lesson, the learner should be able to answer:
  
  “What is the difference between genotype quality and site quality, and why is it unsafe to treat them as the same thing?”
  
  This lesson follows depth and allele support because once the learner understands DP, AD, and allele balance, the next important step is to separate two kinds of confidence that often get mixed up in VCF review:
  
  • confidence in the site as a variant site
  • confidence in the sample’s genotype at that site
  
  GATK’s VCF documentation and its dedicated explainer on QUAL vs GQ make this distinction very clearly: QUAL is a site-level confidence measure, while GQ is a sample-level genotype confidence measure.`
          },
          {
            title: "The central idea",
            body: `A good beginner summary is:
  
  **Genotype quality and site quality are different because they answer different questions.**
  
  A safe beginner version is:
  
  • QUAL asks: how confident are we that there is some kind of variation at this site?
  • GQ asks: how confident are we that this sample’s genotype call is correct at this site?
  
  GATK states exactly this distinction: QUAL refers to the variant site, whereas GQ refers to a specific sample’s genotype.
  
  So the key beginner message is:
  
  a strong site does not automatically mean every sample genotype at that site is equally strong, and a confident genotype does not mean the whole site-level picture should be interpreted the same way.`
          },
          {
            title: "What site quality means",
            body: `Site quality is usually represented in a VCF by QUAL. GATK explains that QUAL reflects confidence that there is some kind of variation at a given site, potentially in one or more samples. It is therefore a property of the site-level call, not just one sample’s genotype.
  
  So the learner should understand:
  
  QUAL answers the question: does this position look like a real variant site at all?
  
  At beginner level, that means QUAL is about the existence of variation at the locus, rather than the exact genotype assigned to one individual sample.`
          },
          {
            title: "What genotype quality means",
            body: `Genotype quality is usually represented by GQ in the per-sample genotype fields. GATK defines GQ as the Phred-scaled confidence that the genotype assignment is correct, derived from genotype likelihoods, and notes that GQ is recorded in the sample-level columns of the VCF.
  
  So the learner should understand:
  
  GQ answers the question: how confident is the pipeline that this sample’s genotype call is right?
  
  That means GQ belongs to the individual sample at the site, not to the site in the abstract.`
          },
          {
            title: "Why QUAL and GQ are not interchangeable",
            body: `A very common beginner mistake is to think:
  
  “They both sound like quality scores, so they must mean basically the same thing.”
  
  That is wrong.
  
  GATK explicitly warns that GQ should not be confused with QUAL. QUAL is about the site, while GQ is about the genotype in a particular sample. In multisample data, this distinction matters even more because one site can be confidently variant overall while one sample’s genotype at that site is much less certain.
  
  So the learner should understand:
  
  QUAL and GQ are related to confidence, but they operate at different levels of the VCF.
  
  That is one of the most important VCF-reading habits in clinical bioinformatics.`
          },
          {
            title: "A simple example of the difference",
            body: `Imagine a multisample site where several samples clearly show variation, so the site itself is confidently variant overall. In that situation, QUAL may be high because the site-level evidence for variation is strong. But one particular sample could still have a more ambiguous genotype because its own read support is weaker or less balanced, leading to a lower GQ. GATK explains this exact conceptual split: site-level variation confidence versus sample-level genotype confidence.
  
  So the learner should understand:
  
  high QUAL does not guarantee high GQ for every sample.
  
  That is why it is unsafe to read only one of these values.`
          },
          {
            title: "Why GQ is so useful in single-sample review",
            body: `In practical clinical bioinformatics, especially when reviewing one patient’s candidate variants, GQ is often more directly useful than QUAL for asking whether this patient’s genotype call looks comfortable. GATK explains that GQ is derived from genotype likelihoods and reflects confidence in the sample-level genotype assignment. Its trio and filtering documentation also uses GQ thresholds as practical genotype-level quality criteria in some workflows.
  
  So the learner should understand:
  
  when the question is “how much do I trust this patient’s GT at this site?”, GQ is often more directly relevant than QUAL.
  
  That does not make QUAL unimportant; it just means the two metrics answer different questions.`
          },
          {
            title: "Why QUAL is still useful",
            body: `Although GQ is often very useful in sample-level review, QUAL still matters. GATK explains that QUAL, or more commonly its normalized derivative QD, is especially useful in cohort or site-level filtering, where the question is whether the locus itself behaves like a credible variant site. GATK’s hard-filtering documentation and its QD page both use QD as one of the important site-level annotations in generic filtering logic.
  
  So the learner should understand:
  
  QUAL is part of the site-level confidence picture, especially when judging the credibility of the locus overall rather than one genotype alone.
  
  That is why site-level and genotype-level metrics often need to be read together.`
          },
          {
            title: "What QD is and why it exists",
            body: `A related site-level metric the learner may see is QD, or QualByDepth. GATK explains that QD is the QUAL score normalized by allele depth and uses it as one of the site-level annotations in filtering workflows.
  
  So the learner should understand:
  
  QD tries to make site-level confidence more interpretable by relating QUAL to the amount of supporting depth.
  
  At beginner level, the main lesson is not to memorise formulas, but to recognise that:
  
  • QUAL is site-level
  • QD is a depth-normalized site-level refinement
  • GQ is sample-level genotype confidence
  
  That structure helps prevent mixing up the fields.`
          },
          {
            title: "Why one high score is never enough",
            body: `A learner might think:
  
  “If QUAL is high, the call is fine.”
  
  or
  
  “If GQ is high, I do not need to think any further.”
  
  That is too simple.
  
  GATK’s filtering guidance is built around using multiple annotations together, not trusting one metric blindly. A call can still be uncomfortable if, for example:
  
  • GQ is high but allele balance looks odd
  • QUAL is strong but mapping evidence is suspicious
  • depth is high but strand or alignment patterns look artefactual
  
  So the learner should understand:
  
  QUAL and GQ are useful, but neither replaces the need for integrated technical review.
  
  That is one of the strongest Module 10 themes.`
          },
          {
            title: "Why this matters before mapping quality and strand bias",
            body: `This lesson matters because later technical review will add more warning signs:
  
  • mapping quality concerns
  • strand bias
  • suspicious read patterns
  • filter tags and annotation-based red flags
  
  If the learner already confuses site-level and genotype-level confidence, those later concepts become much harder to interpret correctly. GATK’s docs make clear that VCF quality fields live at different levels for a reason, and its filtering workflows combine multiple site-level annotations when building technical-confidence logic.
  
  So the learner should understand:
  
  before adding more quality concepts, it is essential to know whether a given metric is describing the site or the genotype.`
          },
          {
            title: "The one-sentence takeaway",
            body: `If the learner remembers one sentence from this lesson, it should be:
  
  **QUAL describes confidence that a site is variant, while GQ describes confidence that a particular sample’s genotype call is correct at that site, so they are different kinds of quality and should not be treated as interchangeable.**
  
  That is the core lesson.`
          },
          {
            title: "Worked example",
            body: `**Scenario**
  
  A learner sees a variant with strong site-level support and says, “The QUAL is high, so the patient’s genotype must be reliable too.”
  
  **Beginner question**
  
  Why is that incomplete?
  
  **Good beginner answer**
  
  Because QUAL and GQ are different metrics. QUAL reflects confidence that the site itself is variant, while GQ reflects confidence in this sample’s genotype at the site. A site can be strongly variant overall and still have a less comfortable genotype call in one sample if that sample’s own read support or genotype likelihoods are weaker. So when reviewing one patient, it is important to check the genotype-level evidence as well as the site-level evidence.`
          },
          {
            title: "Lesson summary",
            body: `The learner has understood this lesson if they can say something like:
  
  “QUAL tells me whether the site itself looks convincingly variant, while GQ tells me whether this sample’s genotype call at that site looks confident. I should not assume that one automatically guarantees the other.”`
          }
        ],
        sections: [
          {
            heading: "The central idea",
            body:
              "Genotype quality and site quality are different because they answer different questions."
          }
        ],
        quiz: [
          {
            question: "What does QUAL mainly represent?",
            options: [
              "Confidence that a particular sample’s genotype is correct",
              "Confidence that the site itself is variant",
              "The number of transcripts overlapping the site",
              "The patient’s phenotype fit score"
            ],
            answerIndex: 1,
            explanation:
              "GATK states that QUAL refers to the variant site, not the specific sample genotype."
          },
          {
            question: "What does GQ mainly represent?",
            options: [
              "Confidence that a specific sample’s genotype call is correct",
              "Confidence that the genome build is correct",
              "Confidence that the site is pathogenic",
              "Confidence that all samples share the same allele"
            ],
            answerIndex: 0,
            explanation:
              "GATK defines GQ as the Phred-scaled confidence that the assigned genotype is correct for that sample."
          },
          {
            question: "Why is it unsafe to treat QUAL and GQ as equivalent?",
            options: [
              "Because one is a site-level metric and the other is a sample-level genotype metric",
              "Because QUAL is only used in research",
              "Because GQ is only used in RNA-seq",
              "Because both are replaced by DP in modern pipelines"
            ],
            answerIndex: 0,
            explanation:
              "The core distinction in this lesson is that QUAL describes the site, while GQ describes the genotype in a specific sample."
          },
          {
            question: "What is QD most usefully thought of as at beginner level?",
            options: [
              "A genotype-level alternative to GQ",
              "A site-level metric that normalizes QUAL by allele depth",
              "A replacement for allele balance",
              "A transcript-level annotation score"
            ],
            answerIndex: 1,
            explanation:
              "GATK describes QD as the QUAL score normalized by allele depth and uses it as a site-level filtering annotation."
          }
        ]
      },
      {
        slug: "lesson-4",
        title: "Lesson 4: Mapping quality, strand bias, and suspicious read patterns",
        goal:
          "By the end of this lesson, the learner should be able to answer: “Why can a variant call still be technically suspicious even when it has read support, and what do mapping quality, strand bias, and read patterns tell me about that?”",
        screens: [
          {
            title: "Lesson goal",
            body: `By the end of this lesson, the learner should be able to answer:
  
  “Why can a variant call still be technically suspicious even when it has read support, and what do mapping quality, strand bias, and read patterns tell me about that?”
  
  This lesson follows depth, allele balance, and genotype/site quality because those metrics still do not tell the whole technical story. A call can have:
  
  • reasonable depth
  • a plausible-looking genotype
  • and still be untrustworthy if the reads align poorly or show artefact-like patterns.
  
  GATK’s filtering guidance includes strand-bias annotations such as FS and SOR, and IGV review guidance emphasizes that visual inspection of read patterns is an important part of clinical bioinformatics pipelines.`
          },
          {
            title: "The central idea",
            body: `A good beginner summary is:
  
  **Not all read support is equally trustworthy. Some reads support a call cleanly, while other reads support it in a way that suggests mapping problems, strand imbalance, or alignment artefact.** GATK’s hard-filtering documentation explicitly treats strand-bias metrics as warning signals, and samtools pileup documentation shows that read-level data encode strand, mapping quality, mismatches, indels, and read starts/ends, all of which can matter when judging a site.
  
  So the key beginner message is:
  
  technical confidence depends not just on how many reads support a call, but on whether those reads look reliable.`
          },
          {
            title: "What mapping quality means",
            body: `Mapping quality is a measure of how confidently a read has been placed at a particular genomic location. The samtools mpileup documentation explains that mapping quality influences how alignments are treated, and that low mapping quality can reflect uncertainty in placement. GATK tooling and annotations also include mapping-quality-related fields such as RMSMappingQuality because mapping confidence matters to variant assessment.
  
  So the learner should understand:
  
  mapping quality answers the question: how confident are we that this read belongs here?
  
  This is different from base quality:
  
  • base quality asks whether a base was called confidently
  • mapping quality asks whether the read was placed confidently.`
          },
          {
            title: "Why low mapping quality is a warning sign",
            body: `Low mapping quality matters because a read that might belong in several places is weaker evidence for a variant at any one of those places. The samtools mpileup manual notes that increasing mismatches can reduce the mapping-quality cap and eventually lead to discarded alignments, reflecting uncertainty in mapping. GATK community guidance around MQ=0 also reinforces that reads with zero mapping quality arise in ambiguous mapping contexts such as homologous regions.
  
  So the learner should understand:
  
  if much of the support for a variant comes from poorly mapped reads, confidence in the call should drop.
  
  This is especially relevant in:
  
  • repetitive regions
  • homologous regions
  • pseudogene-like contexts
  • regions with difficult local alignment.`
          },
          {
            title: "What strand bias means",
            body: `Strand bias means the alternate allele is seen much more on one sequencing strand than the other. GATK’s hard-filtering guide defines FS (FisherStrand) as the Phred-scaled probability that there is strand bias at the site, and explains that strand bias asks whether the alternate allele was seen more or less often on the forward or reverse strand than the reference allele. GATK’s tool index also lists SOR (StrandOddsRatio) and SB (StrandBiasBySample) as strand-related annotations.
  
  So the learner should understand:
  
  strand bias answers the question: is the alternate support distributed sensibly across forward and reverse reads, or is it suspiciously one-sided?
  
  That makes strand bias one of the most important warning signs in variant review.`
          },
          {
            title: "Why strong strand bias can weaken confidence",
            body: `If a variant is mainly supported on only one strand, that can suggest a sequencing or alignment artefact rather than a robust biological signal. GATK’s filtering documentation treats elevated strand-bias metrics as reasons for caution, and IGV-based visual review guidance highlights strand distribution as one of the visual features scientists use to assess genotype-call quality.
  
  So the learner should understand:
  
  a call supported only or mostly on one strand is often less comfortable than a call supported on both strands in a balanced way.
  
  That does not make every one-sided call false, but it does make it more suspicious.`
          },
          {
            title: "What suspicious read patterns look like in general",
            body: `Not every technical problem is captured by one VCF metric. Some warning signs become clearer when the aligned reads are inspected directly. Samtools pileup documentation shows that read-level representations encode:
  
  • strand
  • mismatches
  • indels
  • read starts
  • read ends
  • mapping-related information
  
  IGV and related read-visualization literature emphasize that visual inspection helps detect sequencing artefacts and judge the quality of evidence supporting a call.
  
  So the learner should understand that suspicious patterns can include things like:
  
  • support clustering at the ends of reads
  • support coming mostly from one strand
  • misaligned-looking local sequence context
  • uneven or inconsistent read placement
  • reads with poor mapping confidence
  
  These are exactly the kinds of clues later modules will develop further.`
          },
          {
            title: "Why read-end clustering is worth noticing",
            body: `A common suspicious pattern is when most alternate-supporting reads show the signal only near the beginnings or ends of reads. IGV review guidance and visual-review literature explain that scientists assess local sequencing patterns because some artefacts show stereotyped support patterns rather than clean, evenly distributed evidence.
  
  So the learner should understand:
  
  support that appears only at read ends is often less reassuring than support appearing consistently across many well-placed reads.
  
  At beginner level, the main lesson is not to memorize every artefact pattern, but to recognize that where support appears in reads can matter.`
          },
          {
            title: "Why mapping quality, strand bias, and read patterns must be integrated",
            body: `A learner might think:
  
  • low MQ alone decides everything
  • or strand bias alone decides everything
  
  That is too simple.
  
  GATK’s hard-filtering guidance is built around combining multiple annotations rather than relying on one field in isolation, and visual-review literature makes the same point from the read-level side: effective quality assessment comes from assessing the pattern of evidence together.
  
  So the learner should understand:
  
  a technically strong call usually has several things going right at once:
  
  • reads map well
  • support is seen on both strands
  • the local alignment looks sensible
  • the broader metrics do not contradict the read-level picture
  
  That is much stronger than any single metric on its own.`
          },
          {
            title: "Why VCF metrics still do not replace BAM/CRAM review",
            body: `VCF annotations such as FS, SOR, or mapping-quality summaries are useful, but they are still summaries. IGV review literature states that visual inspection of sequencing data supporting a given genetic variant is an important part of clinical bioinformatics pipelines because it lets scientists quickly assess factors that impact genotyping accuracy.
  
  So the learner should understand:
  
  VCF warning metrics can tell you that something may be wrong, but BAM/CRAM review often shows what kind of thing may be wrong.
  
  That is why read-level review remains important even when a call has already been summarized in the VCF.`
          },
          {
            title: "The one-sentence takeaway",
            body: `If the learner remembers one sentence from this lesson, it should be:
  
  **A variant call can still be technically suspicious even with read support if the reads map poorly, support is strongly one-sided by strand, or the local read pattern looks artefactual, so mapping quality and read-pattern review are essential parts of technical confidence.**
  
  That is the core lesson.`
          },
          {
            title: "Worked example",
            body: `**Scenario**
  
  Two heterozygous-looking calls both have reasonable depth and alternate support.
  
  But:
  
  • Call A has good mapping quality and support on both strands
  • Call B is mostly supported by low-mapping-quality reads and nearly all alternate support is on one strand.
  
  A beginner says, “They both have alternate-supporting reads, so they look equally convincing.”
  
  **Beginner question**
  
  Why is that incomplete?
  
  **Good beginner answer**
  
  Because not all read support is equally trustworthy. Mapping quality matters because poorly mapped reads are weaker evidence that the variant is truly at that genomic site, and strand bias matters because highly one-sided support can suggest an artefact rather than a robust signal. GATK’s filtering guidance explicitly treats strand-bias annotations as important warning signs, and visual review guidance emphasizes that support patterns across reads matter when judging confidence. So Call B should usually feel less comfortable than Call A, even if both appear to have alternate-supporting reads.`
          },
          {
            title: "Lesson summary",
            body: `The learner has understood this lesson if they can say something like:
  
  “A call can have read support and still be technically weak if the reads map poorly, if alternate support is strongly biased to one strand, or if the local read pattern looks suspicious. I need to think about the quality of the support, not just the presence of support.”`
          }
        ],
        sections: [
          {
            heading: "The central idea",
            body:
              "Not all read support is equally trustworthy. Some reads support a call cleanly, while other reads support it in a way that suggests mapping problems, strand imbalance, or alignment artefact."
          }
        ],
        quiz: [
          {
            question: "What does mapping quality mainly reflect?",
            options: [
              "How strongly the phenotype matches the gene",
              "How confidently a read has been placed at a genomic location",
              "How many alternate alleles are in the VCF",
              "How confident the protein consequence is"
            ],
            answerIndex: 1,
            explanation:
              "Mapping quality is about confidence in alignment placement, not clinical interpretation or genotype meaning."
          },
          {
            question: "What does strand bias mainly ask?",
            options: [
              "Whether the patient is male or female",
              "Whether alternate support is distributed sensibly across forward and reverse reads",
              "Whether the variant is inherited from one parent",
              "Whether the transcript is on the positive or negative strand of the genome"
            ],
            answerIndex: 1,
            explanation:
              "GATK defines strand-bias annotations in terms of whether alternate support is unevenly distributed across forward and reverse strands."
          },
          {
            question: "Why can low mapping quality weaken confidence in a variant call?",
            options: [
              "Because low MQ means the alternate allele is always false",
              "Because reads that may belong in multiple places are weaker evidence for a variant at one specific site",
              "Because MQ only matters for structural variants",
              "Because mapping quality is the same thing as genotype quality"
            ],
            answerIndex: 1,
            explanation:
              "Low mapping quality reflects uncertainty in read placement, which weakens confidence that the observed signal truly belongs at the site being evaluated."
          },
          {
            question:
              "Why is it unsafe to rely on one suspicious-read metric by itself?",
            options: [
              "Because no technical metrics are useful",
              "Because technical confidence is usually judged by integrating mapping, strand, depth, and read-pattern evidence together",
              "Because BAM files do not contain strand information",
              "Because strand bias replaces the need to review BAM/CRAM"
            ],
            answerIndex: 1,
            explanation:
              "GATK filtering guidance and visual-review literature both support integrating multiple kinds of evidence rather than trusting one metric alone."
          }
        ]
      },
      {
        slug: "lesson-5",
        title: "Lesson 5: Why one metric is never enough",
        goal:
          "By the end of this lesson, the learner should be able to answer: “Why is it unsafe to trust or reject a variant call using only one metric?”",
        screens: [
          {
            title: "Lesson goal",
            body: `By the end of this lesson, the learner should be able to answer:
  
  “What is it unsafe to trust or reject a variant call using only one metric?”
  
  This lesson follows the earlier quality lessons because the learner has now seen several important technical clues:
  
  • DP for read depth
  • AD for allele depth
  • AB for allele balance
  • GQ for genotype confidence
  • QUAL/QD for site-level confidence
  • mapping quality, strand bias, and suspicious read patterns
  
  The next step is to understand the key professional rule:
  
  no single metric tells the whole technical story.
  
  GATK’s hard-filtering guidance is built around combining multiple annotations rather than trusting one field alone, and it explicitly recommends using metrics together because different annotations capture different failure modes.`
          },
          {
            title: "The central idea",
            body: `A good beginner summary is:
  
  **A variant call looks technically strong when several different kinds of evidence point in the same reassuring direction.**
  
  That means a strong call often has a pattern like:
  
  • enough depth
  • sensible allele support
  • plausible allele balance
  • confident genotype
  • reasonable site-level quality
  • no major mapping or strand warning signs
  
  So the key beginner message is:
  
  technical confidence comes from a coherent pattern, not from one impressive number. GATK’s filtering documentation makes this point directly by showing that different annotations contribute different information about call quality.`
          },
          {
            title: "Why one reassuring metric can still mislead you",
            body: `A beginner may think:
  
  • “The depth is high, so the call must be good.”
  • “The GQ is high, so the call must be fine.”
  • “The QUAL is high, so I can stop worrying.”
  
  That is too simple.
  
  GATK’s filtering guidance shows why this is unsafe: QD exists partly because raw QUAL can be inflated by deep coverage, and strand-bias and mapping-related annotations can still reveal problems even when other metrics look strong.
  
  So the learner should understand:
  
  one strong metric can coexist with one serious warning sign.
  
  That is why integrated review matters.`
          },
          {
            title: "High depth alone is not enough",
            body: `Depth is helpful, but depth alone is not a guarantee of trustworthiness.
  
  A site can have high depth and still look technically uncomfortable if:
  
  • most reads support only one allele in an implausible way
  • support comes from poorly mapped reads
  • the reads show strong strand bias
  • the region is repetitive or low-mappability
  
  GATK’s filtering guidance explicitly prefers QD to raw QUAL or DP alone because depth can inflate apparent site confidence, and visual-review guidance notes that low-mappability regions, strand bias, and misalignments can still create problems despite coverage.
  
  So the learner should understand:
  
  high depth can help a call, but it cannot rescue clearly suspicious evidence.`
          },
          {
            title: "Good allele balance alone is not enough",
            body: `A heterozygous call with allele balance near 0.5 may feel reassuring, but that alone is not enough.
  
  A site could show a plausible-looking balance and still be suspicious if:
  
  • the total depth is very low
  • the reads map badly
  • most alternate reads come from one strand
  • the local alignment looks messy
  
  This is why depth, allele balance, and mapping-related evidence need to be read together. Visual review literature also emphasizes that apparently balanced support can still hide local artefacts or poor mapping.
  
  So the learner should understand:
  
  good balance is helpful, but balance without broader context can still mislead.`
          },
          {
            title: "High GQ alone is not enough",
            body: `GQ is very useful because it reflects confidence in the sample’s genotype call. But even a high GQ should not be treated as a magical truth label.
  
  GATK explains that GQ is derived from genotype likelihoods, while its filtering guidance shows that other site-level problems such as strand bias still matter. That means a genotype can look statistically confident within the caller’s model while still sitting in technically suspicious evidence.
  
  So the learner should understand:
  
  high GQ is reassuring, but it does not replace checking whether the underlying support looks technically sensible.
  
  That is especially important when other metrics disagree.`
          },
          {
            title: "High QUAL alone is not enough",
            body: `QUAL is often misused by beginners because it sounds like a global “goodness score.”
  
  But GATK explicitly warns that QUAL and GQ are different, and its hard-filtering guide says that for filtering purposes it is often better to use QD than raw QUAL directly. That is because QUAL can be inflated by depth and does not fully capture all the ways a call can be weak.
  
  So the learner should understand:
  
  high QUAL does not automatically mean the patient’s genotype call is comfortable, nor does it guarantee the site is free of artefact-like behaviour.
  
  That is why QUAL must be interpreted alongside other fields.`
          },
          {
            title: "One warning sign does not always settle the case either",
            body: `This lesson is not only about avoiding false reassurance. It is also about avoiding overly simplistic rejection.
  
  A learner might think:
  
  • “The allele balance is odd, so the call must be false.”
  • “There is some strand bias, so I can dismiss it.”
  • “The mapping quality is not perfect, so the variant is not real.”
  
  That is also too simple.
  
  GATK’s filtering guidance presents thresholds as generic starting points rather than universal rules, and visual review literature emphasizes that manual inspection is useful precisely because real evidence can be messy without being automatically false.
  
  So the learner should understand:
  
  one warning sign should trigger caution and further thought, not always instant rejection.
  
  That is why integrated judgment matters on both sides.`
          },
          {
            title: "What integrated review looks like",
            body: `At beginner level, integrated technical review means asking questions like:
  
  • Is there enough depth?
  • Does the alternate allele have meaningful support?
  • Does the allele balance look plausible for the genotype?
  • Does the genotype itself look confident?
  • Does the site-level quality look comfortable?
  • Do the reads map well?
  • Is support seen on both strands?
  • Does the local read pattern look clean?
  
  This is exactly the kind of combined logic reflected in GATK’s hard-filtering framework and in IGV-style review guidance.
  
  So the learner should understand:
  
  the strongest calls usually look reassuring in more than one way at once.
  
  That is the pattern they should start learning to recognise.`
          },
          {
            title: "Why this matters before artefact and visual-review modules",
            body: `This lesson is a bridge into the next modules.
  
  If the learner relies on one metric alone, they will be more likely to:
  
  • over-trust artefacts
  • dismiss real but messy calls too quickly
  • misunderstand what BAM/CRAM review is for
  • think filtering is just applying one cutoff
  
  GATK’s filtering guidance and visual-review literature both support the idea that technical confidence grows from multiple complementary clues rather than one single measurement.
  
  So the habit this lesson should build is:
  
  whenever one metric looks very reassuring or very worrying, ask what the other evidence says.
  
  That is one of the most important professional habits in clinical bioinformatics.`
          },
          {
            title: "The one-sentence takeaway",
            body: `If the learner remembers one sentence from this lesson, it should be:
  
  **No single metric is enough to judge technical confidence, because different metrics capture different aspects of evidence quality, so strong calls are judged from a coherent pattern rather than one number alone.**
  
  That is the core lesson.`
          },
          {
            title: "Worked example",
            body: `**Scenario**
  
  Two candidate heterozygous variants are being reviewed.
  
  Variant A
  
  • DP = 42
  • AD = 21,21
  • GQ = high
  • QUAL/QD look good
  • mapping quality looks comfortable
  • support is seen on both strands
  
  Variant B
  
  • DP = 42
  • AD = 21,21
  • GQ = high
  • QUAL/QD look good
  • but most alternate support comes from one strand and the local alignment looks suspicious
  
  A beginner says, “They have the same depth, allele balance, and confidence scores, so they should be equally convincing.”
  
  **Beginner question**
  
  Why is that incomplete?
  
  **Good beginner answer**
  
  Because technical confidence is not determined by one group of metrics alone. Even though the two variants have the same depth, allele balance, and reassuring-looking genotype/site scores, Variant B still shows warning signs in the read-level evidence. GATK’s filtering guidance treats strand-bias measures as important technical clues, and visual-review guidance shows that suspicious local alignment patterns can weaken confidence even when several VCF fields look strong. So Variant B should usually feel less comfortable than Variant A because the overall evidence pattern is less coherent.`
          },
          {
            title: "Lesson summary",
            body: `The learner has understood this lesson if they can say something like:
  
  “No single metric proves that a call is technically strong or weak. I need to look at depth, allele support, genotype/site quality, mapping, strand pattern, and read-level behaviour together to decide whether the evidence feels coherent.”`
          }
        ],
        sections: [
          {
            heading: "The central idea",
            body:
              "A variant call looks technically strong when several different kinds of evidence point in the same reassuring direction."
          }
        ],
        quiz: [
          {
            question:
              "Why is it unsafe to trust a variant call because one metric looks very good?",
            options: [
              "Because technical metrics are never useful",
              "Because one metric may look reassuring while another part of the evidence still shows a serious warning sign",
              "Because only phenotype fit matters",
              "Because GQ replaces all other metrics"
            ],
            answerIndex: 1,
            explanation:
              "Different metrics capture different aspects of evidence quality, so one reassuring value does not settle the whole technical picture."
          },
          {
            question:
              "Why is high depth alone not enough to make a call technically strong?",
            options: [
              "Because depth never matters in sequencing",
              "Because deep coverage can still coexist with poor mapping, strand bias, or local artefact-like patterns",
              "Because depth is only useful for structural variants",
              "Because depth and allele balance always mean the same thing"
            ],
            answerIndex: 1,
            explanation:
              "GATK prefers QD to QUAL or DP alone partly because deep coverage can inflate apparent confidence, and visual review shows that high coverage does not remove alignment or bias problems."
          },
          {
            question:
              "What is the safest way to think about a single suspicious metric?",
            options: [
              "It automatically proves the call is false",
              "It should be ignored if the variant fits the phenotype",
              "It should trigger caution and be interpreted alongside the rest of the technical evidence",
              "It only matters in research sequencing"
            ],
            answerIndex: 2,
            explanation:
              "Thresholds are not universal truth labels. A suspicious metric should prompt integrated review rather than instant acceptance or instant dismissal."
          },
          {
            question: "What is the best overall message of this lesson?",
            options: [
              "Technical confidence can usually be read from QUAL alone",
              "The most reliable calls are usually supported by several reassuring metrics and read-level features at once",
              "BAM/CRAM review is unnecessary when DP is high",
              "If one metric is odd, the variant should always be rejected immediately"
            ],
            answerIndex: 1,
            explanation:
              "This is the integrated lesson: technical confidence comes from a coherent pattern across multiple evidence types, not one metric by itself."
          }
        ]
      },
      {
        slug: "lesson-6",
        title: "Lesson 6: How technical confidence fits into clinical bioinformatics",
        goal:
          "By the end of this lesson, the learner should be able to answer: “What is technical confidence used for in real clinical bioinformatics work, and how should it influence prioritisation, review, and escalation?”",
        screens: [
          {
            title: "Lesson goal",
            body: `By the end of this lesson, the learner should be able to answer:
  
  “What is technical confidence used for in real clinical bioinformatics work, and how should it influence prioritisation, review, and escalation?”
  
  This lesson finishes Module 10 by tying all the metrics back to actual clinical bioinformatics practice. The learner has now seen that technical confidence depends on a combination of evidence such as:
  
  • depth and allele support
  • genotype-level and site-level confidence
  • mapping quality
  • strand distribution
  • suspicious local read patterns
  
  GATK’s VCF and filtering documentation distinguish these different evidence layers, while IGV review guidance emphasizes that manual review of aligned reads is an important step in many variant-calling pipelines for assessing whether a call deserves trust.`
          },
          {
            title: "The central idea",
            body: `A good beginner summary is:
  
  **Technical confidence is used to decide how much trust a variant call deserves as sequence evidence before that call is used for downstream clinical reasoning.**
  
  That means technical confidence is not an abstract score. It has practical consequences:
  
  • whether a call feels comfortable
  • whether it needs closer review
  • whether it should be deprioritised
  • whether it should be escalated with caution
  • whether it should be treated as technically weak even if biologically tempting
  
  GATK’s documentation shows that variant calls are emitted with multiple technical annotations precisely because confidence is something that needs to be assessed, not assumed.
  
  So the key beginner message is:
  
  technical confidence helps decide how seriously to take a call as evidence, not how biologically important the call is.`
          },
          {
            title: "Why technical confidence comes before biological interpretation",
            body: `One of the most important habits in clinical bioinformatics is the order of questions.
  
  The wrong order is:
  
  1. this gene fits the phenotype
  2. therefore this call is probably good
  
  The safer order is:
  
  1. does the call look technically trustworthy?
  2. if yes, how biologically and clinically relevant is it?
  
  This distinction matters because a technically weak call can still look clinically exciting, but weak evidence can mislead later interpretation. IGV review literature makes this practical by showing how visually suspicious calls can appear interesting until the underlying read evidence is examined.
  
  So the learner should understand:
  
  technical confidence is one of the gates a call should pass through before it is treated as a serious candidate.`
          },
          {
            title: "What a technically strong call allows you to do",
            body: `A technically strong call does not prove pathogenicity or diagnosis, but it does give you permission to move forward with more confidence.
  
  If a call has:
  
  • enough depth
  • coherent allele support
  • comfortable genotype confidence
  • no obvious mapping or strand concerns
  • no suspicious read-level pattern
  
  then it is more reasonable to:
  
  • keep it in the shortlist
  • compare it seriously with phenotype and inheritance
  • communicate it onward as technically credible evidence
  
  GATK’s VCF and filtering docs support this logic by framing these fields as evidence about how comfortable the call is, while IGV review literature supports read-level confirmation as part of that confidence-building step.
  
  So the learner should understand:
  
  technical strength does not finish the case, but it makes the call safer to carry forward into interpretation-aware review.`
          },
          {
            title: "What a technically weak call should make you do",
            body: `A technically weak call should change your behaviour.
  
  It may mean:
  
  • lower priority
  • caution in how strongly you speak about it
  • closer BAM/CRAM review
  • explicit flagging of uncertainty
  • escalation if the call matters clinically but the evidence is not comfortable
  • avoiding overconfident wording
  
  This is exactly why technical review exists. IGV review guidance describes visual review as important for confirmation and interpretation of variant calls, and GATK’s filtration guidance shows that called variants still need downstream scrutiny and filtering.
  
  So the learner should understand:
  
  a technically weak call is not always discarded immediately, but it should be handled differently from a technically strong one.`
          },
          {
            title: "Why technically strong does not mean clinically relevant",
            body: `This is one of the most important boundaries in the whole curriculum.
  
  A variant can be technically excellent and still be:
  
  • too common
  • a poor phenotype match
  • in the wrong inheritance context
  • a poor mechanism fit
  • clinically irrelevant
  
  Technical confidence is only one part of the full reasoning pathway. GATK’s metric documentation addresses whether the call is well supported as data; it does not claim that these metrics determine pathogenicity or clinical meaning.
  
  So the learner should understand:
  
  technical strength is necessary for trust, but not sufficient for clinical importance.
  
  That distinction protects against overcalling technically neat but biologically poor candidates.`
          },
          {
            title: "Why technically weak does not always mean false",
            body: `The opposite mistake is also important.
  
  A call with weak or uncomfortable metrics is not always automatically false. Real data can be messy, and GATK’s hard-filtering documentation explicitly says generic thresholds are starting points rather than universal truth rules. That means some calls will sit in grey zones.
  
  So the learner should understand:
  
  technical weakness should trigger caution, not automatic certainty that the call is wrong.
  
  In practice, that may mean:
  
  • further read review
  • contextual discussion
  • cautious phrasing
  • or deprioritisation rather than immediate rejection
  
  That is a more realistic clinical-bioinformatics mindset than rigid pass/fail thinking.`
          },
          {
            title: "Why technical confidence supports prioritisation",
            body: `In real bioinformatics workflows, technical confidence helps decide which candidates deserve time and attention first.
  
  If two variants both look plausible biologically, but one is technically cleaner, that one is usually the safer first candidate to carry forward. That is a practical inference from the whole structure of variant review and filtration guidance: technical evidence quality influences whether a call should be trusted enough to prioritize.
  
  So the learner should understand:
  
  technical confidence helps rank candidates by trustworthiness as evidence, not just by biological interest.
  
  That is why technical confidence sits upstream of later filtering and prioritisation modules.`
          },
          {
            title: "Why technical confidence supports safer communication",
            body: `Technical confidence also affects how results are described to others.
  
  A technically strong call might be communicated as:
  
  • supported by clean evidence
  • technically reassuring
  • suitable for serious downstream consideration
  
  A technically weak call might need wording like:
  
  • limited technical support
  • requires caution
  • suspicious alignment pattern
  • uncertain genotype-level confidence
  • may need further review
  
  IGV review guidance emphasizes manual review for confirmation and interpretation, which implies that how strongly we talk about a call should depend on how strong the evidence really is.
  
  So the learner should understand:
  
  technical confidence changes not only what you think, but also how confidently you should speak.
  
  That is directly relevant to later modules on communication and safe escalation.`
          },
          {
            title: "Why technical confidence supports escalation and boundaries",
            body: `This lesson also links to scope-of-practice behaviour from earlier modules.
  
  If a call is:
  
  • biologically interesting
  • potentially important
  • but technically messy
  
  then safe practice may involve:
  
  • documenting the uncertainty
  • explaining the technical concern clearly
  • escalating rather than presenting the call as stronger than it is
  
  That is one of the clearest ways technical confidence feeds into professional behaviour. Metrics and BAM/CRAM review do not just inform science; they help decide when caution and escalation are appropriate. This is a logical application of the documented role of variant review in confirmation and interpretation.
  
  So the learner should understand:
  
  technical confidence is part of safe professional judgement, not just a technical side task.`
          },
          {
            title: "Why this is the bridge into Modules 11 and 12",
            body: `This module has taught the learner how to read early quality clues.
  
  The next modules go further by asking:
  
  • what artefacts can create misleading signals?
  • what does suspicious visual evidence actually look like in practice?
  • how should read-level evidence be checked?
  
  That means Module 10 is the “metric and confidence” foundation, while Modules 11 and 12 deepen the learner’s ability to recognise why the evidence may look weak or misleading. GATK’s filtration logic and IGV review guidance together support exactly this kind of progression from summary metrics to direct evidence inspection.
  
  So the learner should leave Module 10 with this habit:
  
  before I get excited about a call, I should ask whether the evidence is technically strong enough to deserve that attention.`
          },
          {
            title: "The one-sentence takeaway",
            body: `If the learner remembers one sentence from this lesson, it should be:
  
  **In clinical bioinformatics, technical confidence is used to decide how much trust a variant call deserves as evidence, which affects whether it should be prioritized, reviewed further, communicated cautiously, or escalated rather than accepted at face value.**
  
  That is the core lesson.`
          },
          {
            title: "Worked example",
            body: `**Scenario**
  
  Two candidate variants both look biologically plausible for the patient.
  
  Variant A
  
  • good depth
  • balanced allele support
  • strong genotype confidence
  • comfortable mapping
  • no obvious strand or read-pattern concerns
  
  Variant B
  
  • plausible gene and phenotype fit
  • but low genotype confidence
  • skewed support
  • suspicious strand pattern
  • uncomfortable mapping evidence
  
  A beginner says, “They are both in relevant genes, so we should treat them as equally strong candidates.”
  
  **Beginner question**
  
  Why is that incomplete?
  
  **Good beginner answer**
  
  Because biological plausibility and technical confidence are different questions. Variant A looks more comfortable as sequence evidence, so it is safer to carry forward as a strong technical candidate. Variant B may still be worth noting, but its weaker technical evidence should reduce confidence, affect prioritisation, and change how cautiously it is communicated or whether it needs escalation and further review. GATK’s guidance and IGV review literature both support using technical evidence to judge how much trust a call deserves before heavier clinical interpretation is built on top of it.`
          },
          {
            title: "Lesson summary",
            body: `The learner has understood this lesson if they can say something like:
  
  “Technical confidence tells me how much trust a variant call deserves as evidence. A technically strong call is safer to carry forward into interpretation, while a technically weak call needs caution, possible further review, and sometimes deprioritisation or escalation.”`
          }
        ],
        sections: [
          {
            heading: "The central idea",
            body:
              "Technical confidence is used to decide how much trust a variant call deserves as sequence evidence before that call is used for downstream clinical reasoning."
          }
        ],
        quiz: [
          {
            question:
              "What is the main practical use of technical confidence in clinical bioinformatics?",
            options: [
              "To decide whether a gene is disease-associated",
              "To decide how much trust a variant call deserves as evidence before downstream interpretation",
              "To replace phenotype review",
              "To decide whether a variant is pathogenic by itself"
            ],
            answerIndex: 1,
            explanation:
              "Technical confidence is about whether the call looks trustworthy as data evidence, not about final pathogenicity or diagnosis."
          },
          {
            question:
              "Why is it unsafe to move straight from phenotype fit to strong candidate status?",
            options: [
              "Because phenotype data is never useful",
              "Because a biologically plausible variant can still be technically weak and therefore untrustworthy as evidence",
              "Because technical review only matters for somatic sequencing",
              "Because VCF files never contain quality information"
            ],
            answerIndex: 1,
            explanation:
              "A variant can fit the phenotype but still have weak technical evidence, which is why technical confidence should be assessed before strong downstream interpretation."
          },
          {
            question: "Which statement is most accurate?",
            options: [
              "Technically strong always means clinically relevant",
              "Technically weak always means false",
              "Technical confidence helps determine prioritisation, caution, review, and escalation, but it is not the same as clinical interpretation",
              "Technical confidence only matters during file generation, not review"
            ],
            answerIndex: 2,
            explanation:
              "This is the integrated lesson of Module 10: technical confidence affects how a call is handled, but it does not by itself answer the biological or clinical questions."
          },
          {
            question: "What is the safest overall message of Module 10?",
            options: [
              "One strong metric is usually enough to trust a call",
              "Variant calls should be judged by whether the technical evidence looks coherent as a whole, and that judgment should guide how strongly the call is trusted",
              "High QUAL and high GQ together prove pathogenicity",
              "BAM/CRAM review is rarely necessary when a VCF has filters and scores"
            ],
            answerIndex: 1,
            explanation:
              "Module 10 teaches that technical confidence is a pattern-based judgment about evidence quality, and that this judgment should shape trust, prioritisation, and caution."
          }
        ]
      }
    ]
  };