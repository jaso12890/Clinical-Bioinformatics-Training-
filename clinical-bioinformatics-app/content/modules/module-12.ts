export const module12 = {
    slug: "module-12",
    title: "Module 12: Visual review and evidence checking",
    description:
      "Visual review, reassuring and suspicious read patterns, pileup-style evidence, and how direct evidence checking supports safe clinical bioinformatics.",
    lessons: [
      {
        slug: "lesson-1",
        title: "Lesson 1: What is visual review and why does it matter?",
        goal:
          "By the end of this lesson, the learner should be able to answer: “What is visual review, and why is it worth checking aligned-read evidence instead of relying only on VCF summary fields?”",
        screens: [
          {
            title: "Lesson goal",
            body: `By the end of this lesson, the learner should be able to answer:
  
  “What is visual review, and why is it worth checking aligned-read evidence instead of relying only on VCF summary fields?”
  
  This lesson starts Module 12 because the learner now understands file flow, technical-confidence metrics, and common artefact families. The next step is to look at the evidence more directly: not just what the pipeline reported, but what the aligned reads actually look like at the locus. Visual review guidance describes manual review of aligned reads as an important step in many variant-calling pipelines because it can increase confidence, reduce false positives, and help interpret complex events.`
          },
          {
            title: "The central idea",
            body: `A good beginner summary is:
  
  **Visual review means inspecting the aligned-read evidence directly, usually from BAM/CRAM data, to check whether a variant call looks technically believable.**
  
  A VCF tells you what the pipeline concluded. Visual review helps you ask whether the underlying evidence actually supports that conclusion. Multiple sources note that false positives and false negatives can still occur after automated calling, which is exactly why visual inspection remains part of real clinical and research workflows.`
          },
          {
            title: "Why summary fields are useful but incomplete",
            body: `VCF fields such as depth, allele depth, genotype quality, and filter status are very useful, but they are still summaries. They compress a complex read pattern into a smaller set of numbers and labels. Visual review exists because some problems are easier to spot in the reads than in the summary alone, especially suspicious strand patterns, local alignment problems, read-end clustering, or messy support near indels. IGV review guidance explicitly says visual inspection helps characterize complex events and reduce false positives, while pileup documentation shows that read-level information contains strand, mapping quality, indels, and read starts/ends.`
          },
          {
            title: "What visual review is usually looking at",
            body: `At beginner level, visual review usually means looking at a genomic region in aligned-read form and asking questions like:
  
  • how many reads cover the site?
  • how many support the alternate allele?
  • do the supporting reads appear on both strands?
  • do the reads map cleanly?
  • is the support spread across reads or clustered suspiciously?
  • does the local pattern look stable or messy?
  
  This is the kind of evidence IGV is commonly used to inspect. The samtools mpileup manual also shows that a single-position view can encode read bases, strand, mapping quality, indels, and read starts/ends, which are exactly the kinds of clues visual review uses.`
          },
          {
            title: "Why visual review matters even after automated pipelines",
            body: `A beginner might think:
  
  “If the caller already produced the variant and the filters look fine, why look again?”
  
  Because pipelines are strong at scale but still imperfect. The IGV review paper says manual review of aligned reads is an important step in many variant-calling pipelines, and another paper states directly that pipeline output sometimes includes false-positive variants, so laboratories manually check and correct them by visual review.
  
  So the learner should understand:
  
  visual review is not there because pipelines are useless; it is there because pipelines are not infallible.`
          },
          {
            title: "What visual review can help you do",
            body: `Visual review can help in several different ways. It can strengthen confidence in a clean-looking call, weaken confidence in a suspicious-looking call, clarify whether a site is affected by strand bias or messy local alignment, and sometimes explain why a VCF metric looked odd in the first place. IGV review guidance says visual inspection can increase confidence in calls, reduce false positives, and help interpret complex events.
  
  So the learner should understand:
  
  visual review is for evidence checking, not just error hunting.
  
  Sometimes it confirms a call; sometimes it warns you to be cautious.`
          },
          {
            title: "What visual review does not do",
            body: `This lesson should be careful about boundaries.
  
  Visual review does not by itself tell you:
  
  • whether a variant is pathogenic
  • whether the phenotype fits
  • whether the gene is clinically relevant
  • whether the assay was appropriate overall
  
  It is mainly about whether the read-level evidence looks comfortable or suspicious. IGV review papers frame it as inspection and interpretation of sequencing evidence, not as a complete substitute for broader clinical reasoning.
  
  So the learner should understand:
  
  visual review helps answer “does the evidence look believable?” not “does this variant explain the patient?”`
          },
          {
            title: "Why BAM/CRAM matters here",
            body: `Module 8 taught that BAM/CRAM stores aligned reads. Module 12 now uses that fact directly: BAM/CRAM is the file layer that lets you inspect the actual evidence at the locus. Samtools documentation describes BAM/CRAM as alignment formats that can be indexed and queried by genomic region, which is what makes regional visual review practical.
  
  So the learner should understand:
  
  VCF is the call summary, but BAM/CRAM is the evidence layer that visual review depends on.`
          },
          {
            title: "Why this matters in clinical bioinformatics",
            body: `In real clinical bioinformatics, visual review matters because some calls are too important or too suspicious to accept from summary fields alone. Papers describing clinical and research pipelines note that visual inspection is used to confirm or clarify potentially important variants, especially when confidence matters.
  
  So the learner should understand:
  
  visual review is part of safe technical judgement. It helps decide whether a call should be trusted, treated cautiously, reviewed more deeply, or escalated rather than accepted at face value.`
          },
          {
            title: "The one-sentence takeaway",
            body: `If the learner remembers one sentence from this lesson, it should be:
  
  **Visual review means checking aligned-read evidence directly to see whether a variant call looks technically convincing in the reads, not just in the VCF summary, which is why it remains an important part of many variant-review workflows.**
  
  That is the core lesson.`
          },
          {
            title: "Worked example",
            body: `**Scenario**
  
  A learner says, “The VCF already gives depth, genotype quality, and filter status, so there is no real need to inspect the BAM.”
  
  **Beginner question**
  
  Why is that incomplete?
  
  **Good beginner answer**
  
  Because VCF fields are summaries, not the full evidence. Visual review can reveal patterns that those summaries compress or hide, such as strand imbalance, messy local alignment, low-confidence mapping, or suspicious clustering of support near read ends. IGV guidance says manual review of aligned reads is an important step in many pipelines for confirmation and interpretation, precisely because summary output alone does not remove all false positives and false negatives.`
          },
          {
            title: "Lesson summary",
            body: `The learner has understood this lesson if they can say something like:
  
  “Visual review means checking BAM/CRAM-level aligned-read evidence to see whether a call actually looks convincing in the reads. VCF metrics are useful summaries, but they do not replace direct evidence checking when confidence matters.”`
          }
        ],
        sections: [
          {
            heading: "The central idea",
            body:
              "Visual review means inspecting the aligned-read evidence directly, usually from BAM/CRAM data, to check whether a variant call looks technically believable."
          }
        ],
        quiz: [
          {
            question: "What is the main purpose of visual review?",
            options: [
              "To replace all variant calling software",
              "To inspect aligned-read evidence directly and judge whether the call looks technically believable",
              "To determine pathogenicity from BAM files alone",
              "To avoid using VCF files entirely"
            ],
            answerIndex: 1,
            explanation:
              "Visual review is about checking the read-level evidence behind a call. IGV guidance describes it as an important step for confirmation and interpretation of variant calls."
          },
          {
            question:
              "Why is visual review still useful after automated calling and filtering?",
            options: [
              "Because callers do not produce VCF files",
              "Because false positives and false negatives can still remain after pipeline processing",
              "Because BAM files contain phenotype information",
              "Because filters are only used in research pipelines"
            ],
            answerIndex: 1,
            explanation:
              "Multiple sources note that automated pipelines still produce false positives and false negatives, which is why manual review remains useful."
          },
          {
            question:
              "Which file type is most directly used for visual review of read-level evidence?",
            options: [
              "FASTQ only",
              "BAM/CRAM",
              "VCF only",
              "PDF report"
            ],
            answerIndex: 1,
            explanation:
              "Visual review depends on aligned-read evidence, which is stored in BAM/CRAM. Samtools documentation describes these as indexed alignment formats that can be queried by region."
          },
          {
            question: "What is the safest way to think about visual review?",
            options: [
              "It proves pathogenicity by itself",
              "It replaces all broader clinical context",
              "It helps check whether the read-level evidence supports the call comfortably or suspiciously",
              "It is only useful when a call has already failed filters"
            ],
            answerIndex: 2,
            explanation:
              "Visual review is an evidence-checking step. It helps assess technical comfort in the reads, not full clinical meaning."
          }
        ]
      },
      {
        slug: "lesson-2",
        title: "Lesson 2: What does a technically reassuring read pattern look like?",
        goal:
          "By the end of this lesson, the learner should be able to answer: “When I look at aligned reads, what kinds of patterns usually make a variant call feel technically reassuring rather than suspicious?”",
        screens: [
          {
            title: "Lesson goal",
            body: `By the end of this lesson, the learner should be able to answer:
  
  “When I look at aligned reads, what kinds of patterns usually make a variant call feel technically reassuring rather than suspicious?”
  
  This lesson follows the introduction to visual review because once the learner understands why BAM/CRAM review matters, the next step is to build a clear mental picture of what a comfortable read-level pattern looks like. Visual-review guidance for IGV emphasizes inspection of strand representation, local alignment, and supporting read distribution, and clinical sequencing guidance notes that visual inspection is used to confirm the presence of a variant on both forward and reverse strands at appropriate depth and allele fraction.`
          },
          {
            title: "The central idea",
            body: `A good beginner summary is:
  
  **A technically reassuring read pattern is one where the variant support looks clean, well-distributed, and consistent with the called genotype.**
  
  That usually means the evidence is not resting on one fragile clue. Instead, several read-level features point in the same reassuring direction. IGV review guidance describes visual review as a way to judge whether the read evidence supports the call comfortably, and pileup-style documentation shows that the aligned reads encode strand, mapping quality, starts and ends of reads, and indels, all of which help build that picture.
  
  So the key beginner message is:
  
  a strong-looking call should usually look reassuring in more than one way at once.`
          },
          {
            title: "Enough reads cover the site",
            body: `One of the first things that makes a call feel more comfortable is that the site is covered by a reasonable number of reads. Clinical sequencing guidance explicitly links confidence in detection and reporting to sequencing depth, and IGV review guidance assumes that coverage is one of the first features a reviewer looks at.
  
  So the learner should understand:
  
  a reassuring call usually has enough read support that it does not feel like a fragile one-read or two-read event.
  
  This does not mean “more is always better,” but very sparse support is generally less comfortable than support seen across a reasonable number of reads.`
          },
          {
            title: "The alternate allele is supported by multiple reads",
            body: `A comfortable call is not just covered by reads overall; it also has multiple reads supporting the alternate allele itself. This is closely related to the depth and allele-support ideas from Module 10, but visual review makes it more concrete because the learner can actually imagine the alternate-supporting reads in the pileup. IGV guidance is specifically about reviewing whether the aligned reads genuinely support the candidate call.
  
  So the learner should understand:
  
  a reassuring call usually does not depend on one isolated alternate read.
  
  That is one of the easiest first checks to make mentally.`
          },
          {
            title: "Support appears on both strands",
            body: `This is one of the most important signs of a comfortable call.
  
  Clinical sequencing guidance specifically mentions visual inspection to confirm the presence of the variant on both forward and reverse strands, and IGV review guidance treats strand representation as one of the key things to examine during review.
  
  So the learner should understand:
  
  a reassuring call usually has alternate support on both strands, not only one.
  
  That does not mean the strands must be perfectly equal, but strong one-sidedness tends to feel less comfortable than balanced support.`
          },
          {
            title: "The allele split looks plausible for the genotype",
            body: `A reassuring read pattern usually fits the expected genotype reasonably well. For a heterozygous call, that often means the alternate-supporting reads are present at a plausible proportion rather than being extremely skewed. Clinical sequencing guidance explicitly refers to visual confirmation at an optimal allelic frequency together with sufficient depth, which supports exactly this idea.
  
  So the learner should understand:
  
  the read-level support should feel compatible with the genotype the VCF is claiming.
  
  At beginner level:
  
  • a heterozygous call often feels more comfortable when the alternate support is meaningfully present rather than extremely imbalanced
  • a homozygous alternate call should not look like a tiny minority signal
  
  This is not about perfection. It is about plausibility.`
          },
          {
            title: "Reads appear to map comfortably",
            body: `A technically reassuring pattern usually includes reads that look confidently placed at the locus. Samtools mpileup documentation makes clear that read-level evidence carries mapping-quality information, and practical IGV teaching material highlights mapping quality as one of the useful clues during review.
  
  So the learner should understand:
  
  a comfortable call usually does not rely mainly on reads that look uncertain about where they belong.
  
  If the supporting reads seem well anchored to the region, that increases comfort. If they appear ambiguously placed or low-quality, comfort drops.`
          },
          {
            title: "Support is distributed across reads, not clustered at the ends",
            body: `Another reassuring feature is that alternate support is seen in a stable way across the supporting reads rather than only at one read position pattern. Samtools mpileup documentation explicitly encodes starts and ends of reads, which is one reason pileup-style or IGV-style review can reveal whether the support is overly clustered near read boundaries. IGV review guidance also emphasizes that local read pattern matters, not just raw counts.
  
  So the learner should understand:
  
  a comfortable call usually does not depend only on bases appearing right at the starts or ends of reads.
  
  Support that appears across multiple reads in a more distributed way tends to feel more reassuring.`
          },
          {
            title: "The local alignment looks tidy rather than messy",
            body: `A technically reassuring pattern usually sits in a local alignment context that looks stable and understandable. IGV review guidance specifically highlights manual inspection as a way to interpret complex events and identify problematic local evidence patterns, which implies that a cleaner local pattern is more reassuring than a visibly chaotic one.
  
  So the learner should understand:
  
  a comfortable call usually does not sit in obviously messy local evidence.
  
  At beginner level, “tidy” means:
  
  • the supporting reads seem to agree reasonably well
  • the surrounding region does not look obviously unstable
  • the evidence does not feel dominated by clipping, local confusion, or conflicting patterns`
          },
          {
            title: "Reassuring patterns are about coherence, not perfection",
            body: `This is important.
  
  A beginner might think that a reassuring call means:
  
  • exactly perfect strand balance
  • exactly 50:50 heterozygous support
  • every read looking identical
  
  That is not realistic.
  
  Real data are noisy. The point is not perfection; the point is that the different clues agree well enough to make the call feel technically comfortable. IGV review guidance is about judging practical confidence from real sequencing data, not expecting textbook-perfect visuals.
  
  So the learner should understand:
  
  a reassuring pattern is one that feels coherent overall, even if it is not mathematically perfect.
  
  That is a much more useful clinical-bioinformatics mindset.`
          },
          {
            title: "Why this matters before learning suspicious patterns",
            body: `This lesson matters because the learner needs a stable mental picture of “comfortable” evidence before they can recognise what looks uncomfortable.
  
  If they do not know what reassuring support looks like, they will struggle to spot:
  
  • strand-only support
  • read-end clustering
  • low-mapping-quality dependence
  • messy local alignment
  • suspicious nearby context
  
  So the learner should understand:
  
  the purpose of this lesson is to give them a baseline for comparison. The next lesson will teach the main warning signs by contrasting them with this more comfortable pattern.`
          },
          {
            title: "The one-sentence takeaway",
            body: `If the learner remembers one sentence from this lesson, it should be:
  
  **A technically reassuring read pattern usually has enough supporting reads, plausible allele balance, support on both strands, comfortable mapping, and a stable local alignment pattern, so the call looks coherent in the reads rather than being carried by one suspicious clue.**
  
  That is the core lesson.`
          },
          {
            title: "Worked example",
            body: `**Scenario**
  
  A heterozygous variant is being reviewed. The site has good coverage, multiple alternate-supporting reads, support on both strands, a plausible alternate fraction, and the reads look cleanly aligned across the locus.
  
  **Beginner question**
  
  Why does this feel technically reassuring?
  
  **Good beginner answer**
  
  Because several read-level clues are pointing in the same reassuring direction. There is enough overall coverage, the alternate allele is supported by more than a tiny number of reads, support is present on both forward and reverse strands, and the local alignment does not look obviously messy. Clinical sequencing guidance specifically uses visual inspection to confirm appropriate allelic fraction and support on both strands, and IGV review guidance emphasizes that these kinds of patterns help increase confidence in a call.`
          },
          {
            title: "Lesson summary",
            body: `The learner has understood this lesson if they can say something like:
  
  “A reassuring read pattern is one where the alternate support looks comfortably real in the reads: there are enough supporting reads, support is present on both strands, the allele split fits the genotype reasonably well, mapping looks good, and the local alignment pattern feels stable rather than messy.”`
          }
        ],
        sections: [
          {
            heading: "The central idea",
            body:
              "A technically reassuring read pattern is one where the variant support looks clean, well-distributed, and consistent with the called genotype."
          }
        ],
        quiz: [
          {
            question:
              "Which feature is most consistent with a technically reassuring read pattern?",
            options: [
              "Alternate support only on one strand",
              "Multiple alternate-supporting reads seen across both strands",
              "A call based on one alternate read at the end of a read",
              "Support mainly from uncertainly mapped reads"
            ],
            answerIndex: 1,
            explanation:
              "Clinical sequencing guidance and IGV review guidance both treat bidirectional support as a reassuring feature during review."
          },
          {
            question: "Why is a plausible allele split reassuring?",
            options: [
              "Because every heterozygous call must be exactly 50:50",
              "Because the read support looks reasonably compatible with the genotype being claimed",
              "Because allele balance proves pathogenicity",
              "Because it removes the need to think about mapping quality"
            ],
            answerIndex: 1,
            explanation:
              "A plausible allele fraction helps the read-level evidence fit the genotype call, which is one reason clinical visual review checks allelic fraction along with depth and strand support."
          },
          {
            question:
              "Why does comfortable mapping matter for a reassuring read pattern?",
            options: [
              "Because mapping quality is the same thing as genotype quality",
              "Because well-mapped reads are stronger evidence that the signal belongs at the locus being reviewed",
              "Because mapping quality only matters in long-read data",
              "Because poor mapping can be ignored if the site passed filters"
            ],
            answerIndex: 1,
            explanation:
              "Mapping quality reflects how confidently a read was placed, so reads that look comfortably mapped provide more trustworthy locus-specific evidence."
          },
          {
            question: "What is the safest overall message of this lesson?",
            options: [
              "A reassuring read pattern means perfect, noise-free data",
              "A reassuring read pattern is one where several read-level clues fit together coherently and support the genotype comfortably",
              "Depth alone is usually enough to make a call reassuring",
              "Visual review mainly matters only when filters fail"
            ],
            answerIndex: 1,
            explanation:
              "The core lesson is about coherence across multiple read-level clues rather than perfection or reliance on one metric alone."
          }
        ]
      },
      {
        slug: "lesson-3",
        title: "Lesson 3: What suspicious read patterns should make you cautious?",
        goal:
          "By the end of this lesson, the learner should be able to answer: “When I inspect aligned reads, what kinds of patterns should make me less comfortable trusting a variant call?”",
        screens: [
          {
            title: "Lesson goal",
            body: `By the end of this lesson, the learner should be able to answer:
  
  “When I inspect aligned reads, what kinds of patterns should make me less comfortable trusting a variant call?”
  
  This lesson follows the “reassuring read pattern” lesson because the learner now has a baseline for what comfortable evidence looks like. The next step is to understand the main read-level warning signs that often make a call feel technically weaker or more artefact-prone.
  
  IGV review guidance says visual inspection helps identify sequencing and analysis artefacts behind erroneous calls, and samtools pileup documentation shows that read-level evidence contains exactly the kinds of clues reviewers use: strand, mismatches, indels, mapping quality, and read starts/ends.`
          },
          {
            title: "The central idea",
            body: `A good beginner summary is:
  
  **A suspicious read pattern is one where the alternate support looks fragile, biased, poorly placed, or locally unstable rather than clean and coherent.**
  
  This matters because a call can have some alternate-supporting reads and still be misleading if those reads show a pattern often associated with technical artefact. IGV review guidance explicitly describes visual review as a way to catch false positives by spotting problematic support patterns in the aligned reads.
  
  So the key beginner message is:
  
  the question is not just “is there support?” but “what kind of support is it?”`
          },
          {
            title: "Strong strand imbalance",
            body: `One of the most important warning signs is when most or all alternate support appears on only one strand.
  
  Clinical review literature describes strand bias as a meaningful technical concern, and IGV review guidance treats strand distribution as a core feature to inspect manually. If the alternate allele appears mostly on the forward reads or mostly on the reverse reads, confidence usually drops compared with a similar call supported on both strands.
  
  So the learner should understand:
  
  support that is heavily one-sided by strand is usually less comfortable than support seen on both strands.
  
  That does not prove the call is false, but it is a reason for caution.`
          },
          {
            title: "End-of-read clustering",
            body: `Another common warning sign is when most alternate-supporting bases appear near the starts or ends of reads rather than being distributed more evenly through the read bodies.
  
  Samtools mpileup explicitly encodes read starts and ends in pileup output, which reflects how important read position can be for evidence review. IGV-based review also focuses on local read pattern, not just raw read counts.
  
  So the learner should understand:
  
  a call feels less comfortable when the alternate support seems to come mainly from read edges rather than from well-distributed positions across multiple reads.
  
  This is one of the classic “looks supported, but not in a reassuring way” patterns.`
          },
          {
            title: "Low mapping quality support",
            body: `A call should also feel more suspicious when much of the alternate support comes from reads that may not be confidently placed at the locus.
  
  Samtools documentation explains that pileup output captures mapping quality information, and the manual notes that read alignment uncertainty affects how evidence should be interpreted. IGV review guidance similarly uses mapping quality as part of read-level confidence assessment.
  
  So the learner should understand:
  
  if the alternate-supporting reads look poorly mapped or uncertainly placed, the call becomes less trustworthy as locus-specific evidence.
  
  This matters especially in homologous or difficult regions, but it can matter anywhere.`
          },
          {
            title: "Soft clipping and messy local alignment",
            body: `A very important suspicious pattern is when many supporting reads are soft-clipped or the local alignment around the site looks messy and unstable.
  
  A clinical visual-review case report showed that visual inspection of numerous atypically aligned soft-clipped reads was crucial for understanding the true event at a PKD1 locus, and the authors explicitly outline review steps to distinguish real signal from poor mapping, sequencing error, or contamination. IGV review guidance also describes visual inspection as a way to interpret complex local events.
  
  So the learner should understand:
  
  a cluster of soft-clipped reads or visibly awkward local alignment should make a call feel less settled, especially if the variant depends on that unstable-looking evidence.
  
  This is particularly important near indels, repeats, or structurally awkward sequence.`
          },
          {
            title: "Excessive mismatches or noisy neighbouring sequence",
            body: `Another warning sign is when the reads around the locus look noisier than expected, with many mismatches or inconsistent local patterns.
  
  The bcftools manual notes that mapping quality can be overestimated in reads containing excessive mismatches and even suggests special handling in such circumstances. That means a support pattern that sits inside generally messy or mismatch-heavy reads deserves more suspicion than a support pattern inside otherwise clean reads.
  
  So the learner should understand:
  
  if the variant sits inside generally messy-looking read evidence, confidence should be lower than if the surrounding reads look clean and stable.
  
  This is another example of why context around the base matters.`
          },
          {
            title: "Uncomfortably high local depth",
            body: `Beginners often assume that more coverage always helps, but unusually high local depth can itself be a warning sign.
  
  The bcftools manual specifically notes that read depth greatly above expectation often indicates problematic regions enriched for artefacts. That does not mean every high-depth locus is bad, but it does mean “very high depth” is not automatically reassuring.
  
  So the learner should understand:
  
  a site with unexpectedly excessive coverage can be suspicious, especially if other clues also look uncomfortable.
  
  This fits with the broader theme that one apparently good metric can still hide a problem.`
          },
          {
            title: "Patterns that do not fit each other",
            body: `A read pattern should also feel suspicious when the clues do not agree well with one another.
  
  Examples might include:
  
  • a heterozygous call with only a tiny number of alternate-supporting reads
  • a visually noisy local pattern despite reassuring summary metrics
  • a PASS call whose read-level support still looks one-stranded or clipped
  • a strong-looking VCF row whose supporting reads look unstable
  
  IGV review guidance exists precisely because summary output and read-level evidence do not always agree perfectly, and the point of visual review is often to resolve that mismatch.
  
  So the learner should understand:
  
  inconsistency between clues is itself a warning sign.
  
  A comfortable call usually feels coherent; a suspicious call often feels internally conflicted.`
          },
          {
            title: "Suspicious does not always mean false",
            body: `This lesson should keep an important balance.
  
  A suspicious read pattern does not automatically prove the call is wrong. It means:
  
  • confidence should drop
  • the call may need deeper review
  • the region may be technically difficult
  • the call should be communicated more cautiously
  
  IGV review guidance frames manual inspection as a way to improve confidence and reduce false positives, not as a way to apply simplistic yes/no rules to every pattern.
  
  So the learner should understand:
  
  warning signs should trigger caution and further thought, not always instant rejection.
  
  That is a much safer professional mindset.`
          },
          {
            title: "The one-sentence takeaway",
            body: `If the learner remembers one sentence from this lesson, it should be:
  
  **Suspicious read patterns include one-strand support, end-of-read clustering, low-mapping-quality dependence, soft clipping, noisy local alignment, and other internally inconsistent evidence patterns, all of which should reduce comfort in a call even if some alternate support is present.**
  
  That is the core lesson.`
          },
          {
            title: "Worked example",
            body: `**Scenario**
  
  A heterozygous call is being reviewed. It has some alternate-supporting reads, but almost all of them are on one strand, many sit near read ends, and several supporting reads look soft-clipped near the locus.
  
  **Beginner question**
  
  Why should this pattern make the learner less comfortable trusting the call?
  
  **Good beginner answer**
  
  Because the support is present, but it is not reassuringly distributed. Strand imbalance, end-of-read clustering, and local soft clipping are all warning signs that the evidence may be artefactual or less stable than a clean call. IGV review guidance highlights these kinds of patterns as exactly the sort of clues that manual inspection can catch, and pileup-style evidence includes read starts, ends, and strand so that these warning signs can be assessed directly.`
          },
          {
            title: "Lesson summary",
            body: `The learner has understood this lesson if they can say something like:
  
  “A call can have alternate-supporting reads and still feel suspicious if the support is heavily one-sided by strand, clustered at read ends, dependent on low-quality mapping, affected by soft clipping, or sitting inside messy local alignment. What matters is not just the presence of support, but whether the pattern of support looks stable and believable.”`
          }
        ],
        sections: [
          {
            heading: "The central idea",
            body:
              "A suspicious read pattern is one where the alternate support looks fragile, biased, poorly placed, or locally unstable rather than clean and coherent."
          }
        ],
        quiz: [
          {
            question: "Which pattern is most suspicious rather than reassuring?",
            options: [
              "Alternate support seen across both strands with stable local alignment",
              "Alternate support distributed across many reads with comfortable mapping",
              "Alternate support mostly confined to one strand",
              "Read evidence that fits the genotype plausibly"
            ],
            answerIndex: 2,
            explanation:
              "Strong strand imbalance is a classic warning sign in visual review and is less comfortable than support seen on both strands."
          },
          {
            question: "Why is end-of-read clustering uncomfortable?",
            options: [
              "Because it proves the variant is pathogenic",
              "Because support concentrated mainly at read starts or ends is often less reassuring than support distributed across read bodies",
              "Because read position never matters in pileup evidence",
              "Because all real variants occur near read ends"
            ],
            answerIndex: 1,
            explanation:
              "Pileup output explicitly records read starts and ends, and review uses that information because support near read boundaries can be technically less comfortable."
          },
          {
            question: "Why can soft clipping make a locus look suspicious?",
            options: [
              "Because soft clipping always means contamination",
              "Because clusters of soft-clipped reads can indicate unstable local alignment or a more complex event than the simple call summary suggests",
              "Because soft clipping is equivalent to high genotype quality",
              "Because all indels are represented as soft clipping only"
            ],
            answerIndex: 1,
            explanation:
              "Visual review papers and case reports show that atypical soft-clipped patterns can reflect poor mapping, complex local structure, or an event not captured cleanly by the caller."
          },
          {
            question: "What is the safest overall message of this lesson?",
            options: [
              "Any suspicious visual clue proves the call is false",
              "Suspicious read patterns should reduce comfort in the call and prompt more cautious review, even if some alternate support exists",
              "VCF metrics replace the need to think about read patterns",
              "Only strand bias matters in visual review"
            ],
            answerIndex: 1,
            explanation:
              "The key lesson is that suspicious read-level patterns weaken confidence and should change how cautiously the call is handled, without forcing automatic rejection."
          }
        ]
      },
      {
        slug: "lesson-4",
        title: "Lesson 4: How do BAM/CRAM review and VCF metrics work together?",
        goal:
          "By the end of this lesson, the learner should be able to answer: “How should I use VCF summary metrics and BAM/CRAM read review together, rather than treating them as separate or competing sources of evidence?”",
        screens: [
          {
            title: "Lesson goal",
            body: `By the end of this lesson, the learner should be able to answer:
  
  “How should I use VCF summary metrics and BAM/CRAM read review together, rather than treating them as separate or competing sources of evidence?”
  
  This lesson follows the reassuring and suspicious read-pattern lessons because the learner now has two different views of a variant call:
  
  • the summary view from the VCF
  • the evidence view from the aligned reads
  
  These are not rivals. They are two layers of the same review process. GATK’s VCF documentation explains that fields such as DP, AD, GQ, and QUAL are summary annotations in the callset, while IGV review guidance says manual review of aligned reads is often performed to reduce false positives and incorrect results.`
          },
          {
            title: "The central idea",
            body: `A good beginner summary is:
  
  **VCF metrics tell you what the pipeline concluded and how it summarized the evidence, while BAM/CRAM review lets you inspect the pattern of evidence behind those summaries.** GATK presents VCF as the structured representation of variant calls and their annotations, and IGV review guidance describes manual read review as an important confirmation and interpretation step after automated calling.
  
  So the key beginner message is:
  
  VCF tells you “what the caller thinks,” while BAM/CRAM helps you ask “does the read evidence actually look like that?”`
          },
          {
            title: "What the VCF is good at",
            body: `The VCF is excellent for structured review across many variants. It gives you concise fields such as:
  
  • DP for depth
  • AD for allele depth
  • GQ for genotype confidence
  • QUAL for site-level confidence
  • filter and annotation fields that help prioritise and triage calls
  
  The VCF specification itself shows common genotype fields such as GT:GQ:DP:AD, and GATK’s VCF guide explains how these annotations summarize evidence in a way that is practical for downstream filtering and review.
  
  So the learner should understand:
  
  VCF is very good at helping you notice which calls deserve attention and which metrics look comfortable or uncomfortable at first pass.`
          },
          {
            title: "What BAM/CRAM is good at",
            body: `BAM/CRAM is strong where the VCF is compressed and abstract. It lets you inspect the aligned reads at the locus and see:
  
  • how the alternate support is distributed
  • whether support appears on both strands
  • whether reads map comfortably
  • whether support clusters at read starts or ends
  • whether the local alignment looks tidy or messy
  
  IGV review guidance describes this as a key reason manual review remains useful, and samtools mpileup documentation says the read-base column encodes mismatches, indels, strand, mapping quality, and starts and ends of reads.
  
  So the learner should understand:
  
  BAM/CRAM is the evidence layer that explains the VCF summary.`
          },
          {
            title: "Why VCF metrics often tell you where to look",
            body: `In practice, VCF metrics often act as review prompts.
  
  For example:
  
  • low GQ may tell you the genotype is uncertain
  • odd AD may suggest uncomfortable allele balance
  • weak QD or other site-level fields may suggest the locus deserves caution
  • an unexpectedly high DP may hint at a problematic region enriched for artefacts
  
  GATK explains that QD is QUAL normalized by allele depth, and the bcftools manual notes that read depth far above expectation often indicates problematic regions enriched for artefacts.
  
  So the learner should understand:
  
  VCF metrics often tell you where BAM/CRAM review is especially worth doing.`
          },
          {
            title: "Why BAM/CRAM tells you what the metrics cannot fully show",
            body: `A metric may warn you that something is wrong, but it may not tell you what kind of wrong it is.
  
  For example:
  
  • a low-confidence genotype metric does not itself show whether the issue is strand bias, weak support, or messy local alignment
  • a PASS label does not show whether the alternate support is mostly one-sided
  • a reasonable depth does not show whether the reads are all soft-clipped or clustered at read ends
  
  IGV review guidance exists precisely because visual inspection can reduce false positives by revealing the underlying patterns that summary annotations compress.
  
  So the learner should understand:
  
  VCF can tell you that a call looks uncomfortable, but BAM/CRAM often tells you why it looks uncomfortable.`
          },
          {
            title: "Why reassuring metrics should still match reassuring reads",
            body: `A strong call usually feels best when the two evidence layers agree.
  
  For example:
  
  • DP is solid and the pileup really does show enough reads
  • AD and allele balance look plausible and the reads visually support that split
  • GQ is high and the read pattern looks stable rather than conflicted
  • mapping-related metrics look comfortable and the supporting reads also look well placed
  
  This is the whole logic of combined review: summary fields and read-level evidence should reinforce each other rather than pull in different directions. GATK’s VCF guide defines the summary fields, while IGV guidance emphasizes direct read inspection for confirmation and interpretation.
  
  So the learner should understand:
  
  the most comfortable calls are usually the ones where the numbers and the reads tell the same story.`
          },
          {
            title: "Why disagreement between the two layers is important",
            body: `Sometimes the VCF and BAM/CRAM do not feel fully aligned.
  
  Examples:
  
  • the summary metrics look neat, but the reads look strand-biased or clipped
  • the depth looks strong, but most support comes from awkwardly mapped reads
  • the variant passes filters, but the local evidence still feels messy
  • the VCF looks uncertain, yet the read pattern looks cleaner than expected
  
  When that happens, the disagreement itself is informative. IGV review literature is built around this exact problem: manual inspection helps resolve cases where automated summaries may give false reassurance or hide the nature of the uncertainty.
  
  So the learner should understand:
  
  mismatch between summary metrics and read-level appearance is itself a reason to slow down and think more carefully.`
          },
          {
            title: "A useful mental model",
            body: `A simple beginner-friendly model is:
  
  • VCF = the caller’s summary of the evidence
  • BAM/CRAM = the evidence pattern itself
  
  That means the workflow often goes like this:
  
  1. notice something in the VCF
  2. inspect the BAM/CRAM at the locus
  3. ask whether the read pattern supports the summary comfortably
  
  This is also why pileup-style evidence is useful: samtools mpileup shows that a single-position view can encode depth, strand, mapping quality, mismatches, indels, and read starts/ends in one compact locus summary.
  
  So the learner should understand:
  
  VCF is often the pointer; BAM/CRAM is the explanation.`
          },
          {
            title: "Why this matters in clinical bioinformatics",
            body: `In clinical bioinformatics, this combined approach matters because important calls are often too consequential to accept from one evidence layer alone. Manual review papers note that aligned-read review is commonly used to reduce false positives and incorrect results, especially when confirmation or interpretation matters.
  
  So the learner should understand:
  
  safe review often means using VCF metrics to guide attention and BAM/CRAM review to judge whether the evidence really deserves trust.`
          },
          {
            title: "The one-sentence takeaway",
            body: `If the learner remembers one sentence from this lesson, it should be:
  
  **VCF metrics and BAM/CRAM review work best together: the VCF summarizes what the caller concluded about the site, while BAM/CRAM shows whether the aligned-read evidence actually looks consistent with that summary.**
  
  That is the core lesson.`
          },
          {
            title: "Worked example",
            body: `**Scenario**
  
  A candidate variant has:
  
  • reassuring depth
  • plausible allele depth
  • high genotype quality
  • and a PASS flag in the VCF
  
  But when the locus is inspected in the aligned reads, most alternate support is on one strand and several supporting reads are soft-clipped near the site.
  
  **Beginner question**
  
  Why is it unsafe to rely on the VCF alone here?
  
  **Good beginner answer**
  
  Because the VCF fields are summaries, not the full evidence pattern. The metrics may look reassuring overall, but the BAM/CRAM review is showing specific warning signs — strong strand imbalance and local soft clipping — that can weaken confidence in the call. IGV review guidance emphasizes that manual inspection is often needed to reduce false positives and interpret suspicious evidence patterns that summary annotations can hide.`
          },
          {
            title: "Lesson summary",
            body: `The learner has understood this lesson if they can say something like:
  
  “VCF fields tell me how the caller summarized the locus, but BAM/CRAM review lets me inspect the actual support pattern. The safest calls are the ones where the summary metrics and the read-level evidence tell the same reassuring story.”`
          }
        ],
        sections: [
          {
            heading: "The central idea",
            body:
              "VCF metrics tell you what the pipeline concluded and how it summarized the evidence, while BAM/CRAM review lets you inspect the pattern of evidence behind those summaries."
          }
        ],
        quiz: [
          {
            question:
              "What is the safest beginner way to describe the relationship between VCF and BAM/CRAM?",
            options: [
              "They are two unrelated files used for different specialties",
              "VCF summarizes the call, while BAM/CRAM lets you inspect the aligned evidence behind that summary",
              "BAM/CRAM replaces the need for VCF entirely",
              "VCF is for raw reads and BAM/CRAM is for final reports"
            ],
            answerIndex: 1,
            explanation:
              "VCF is the structured summary of variant calls and annotations, while BAM/CRAM is the aligned-read layer used for direct evidence inspection."
          },
          {
            question: "Why are VCF metrics useful before BAM/CRAM review?",
            options: [
              "Because they can help identify which loci deserve closer inspection",
              "Because they prove pathogenicity",
              "Because they eliminate the need for read review",
              "Because they contain the full read-level pattern already"
            ],
            answerIndex: 0,
            explanation:
              "VCF annotations such as DP, AD, GQ, QUAL, and QD help triage which calls look comfortable or uncomfortable and therefore where deeper review may be useful."
          },
          {
            question:
              "What is the most important thing BAM/CRAM review can add beyond VCF?",
            options: [
              "The patient phenotype",
              "Direct visibility of strand distribution, mapping comfort, clipping, and local alignment pattern",
              "Genome build conversion",
              "Protein consequence prediction"
            ],
            answerIndex: 1,
            explanation:
              "Read-level review exposes support patterns and local evidence structure that summary fields compress."
          },
          {
            question:
              "What should it mean if the VCF looks reassuring but the read pattern still looks suspicious?",
            options: [
              "The VCF must always be ignored",
              "The BAM/CRAM must be corrupted",
              "The disagreement itself is a reason for more cautious review rather than instant trust",
              "The variant is automatically false"
            ],
            answerIndex: 2,
            explanation:
              "Mismatch between summary metrics and read-level appearance is exactly the kind of situation where manual review is most useful."
          }
        ]
      },
      {
        slug: "lesson-5",
        title: "Lesson 5: What can pileup-style evidence tell you?",
        goal:
          "By the end of this lesson, the learner should be able to answer: “What can a pileup-style view tell me about a locus, and how does it help me inspect read-level evidence without replacing full BAM/CRAM review?”",
        screens: [
          {
            title: "Lesson goal",
            body: `By the end of this lesson, the learner should be able to answer:
  
  “What can a pileup-style view tell me about a locus, and how does it help me inspect read-level evidence without replacing full BAM/CRAM review?”
  
  This lesson follows the BAM/CRAM-versus-VCF lesson because the learner has now seen two important ideas:
  
  • VCF gives a summary of the call
  • BAM/CRAM gives the aligned-read evidence
  
  A pileup-style view sits between those two. It is still read-level evidence, but it compresses the aligned reads at a single genomic position into a compact textual summary. The samtools mpileup manual describes pileup as textual output from an alignment, with each line representing reads piled up at one genomic position, and it explicitly says the read-bases column encodes matches, mismatches, indels, strand, mapping quality, and starts and ends of reads.`
          },
          {
            title: "The central idea",
            body: `A good beginner summary is:
  
  **Pileup-style evidence is a compact single-position view of aligned-read support at a locus.**
  
  It does not replace full BAM/CRAM review, but it is useful because it shows many of the most important clues in one place:
  
  • how many reads cover the site
  • what bases those reads show
  • whether support is on forward or reverse strands
  • whether there are nearby insertions or deletions
  • whether reads start or end at the site
  • and, if requested, mapping-quality and read-position information
  
  The samtools mpileup manual lays out these fields directly.
  
  So the key beginner message is:
  
  pileup is a compact way of asking, “what do the reads actually look like at this exact position?”`
          },
          {
            title: "What a pileup line basically represents",
            body: `The mpileup manual says each line represents the pileup of reads at a single genomic position. It begins with:
  
  • chromosome name
  • 1-based position
  • reference base
  
  and then, for each BAM input, the remaining columns include:
  
  • number of reads covering the position
  • read bases
  • base qualities
  • and optionally other columns such as mapping qualities or read positions
  
  So the learner should understand:
  
  a pileup line is a locus-focused evidence summary, not a whole-region alignment view.
  
  That makes it very useful for focused checks at one site, especially when you want to understand what is happening at exactly the candidate base.`
          },
          {
            title: "What coverage in a pileup tells you",
            body: `The mpileup manual says one of the core columns is the number of reads covering this position.
  
  So the learner should understand:
  
  pileup coverage gives you an immediate single-position depth view.
  
  This helps you ask:
  
  • is the site well covered?
  • is the evidence based on many reads or only a few?
  • does the pileup depth match what I expected from the VCF summary?
  
  That links pileup directly back to the DP idea from Module 10.`
          },
          {
            title: "What the read-bases column tells you",
            body: `The read-bases column is one of the most information-rich parts of pileup. The manual says it encodes:
  
  • matches to the reference
  • mismatches
  • strand
  • indels
  • mapping quality information at read starts
  • and starts and ends of reads
  
  The manual specifically explains that:
  
  • . and , represent bases matching the reference on forward and reverse strands
  • uppercase and lowercase letters represent mismatches on forward and reverse strands
  • + and - followed by a number and sequence show insertions and deletions
  • ^ marks the first position covered by a read and is followed by encoded mapping quality
  • $ marks the last position covered by a read
  
  So the learner should understand:
  
  pileup is not just “how many reads”; it also shows what those reads are doing at the site.
  
  That is why pileup is so useful for evidence checking.`
          },
          {
            title: "How pileup shows strand information",
            body: `The mpileup manual explains that the read-base symbols encode both the base and the strand:
  
  • . and uppercase mismatch letters are on the forward strand
  • , and lowercase mismatch letters are on the reverse strand
  
  So the learner should understand:
  
  pileup can show whether alternate support is distributed across both strands or mostly confined to one.
  
  That links directly back to the visual-review lesson on strand imbalance:
  
  • support on both strands often feels more comfortable
  • support mostly on one strand can be a warning sign
  
  Pileup gives a compact way to notice that.`
          },
          {
            title: "How pileup shows read starts and ends",
            body: `The manual says:
  
  • ^ marks the start of a read at that position and is followed by the encoded mapping quality
  • $ marks the end of a read
  
  So the learner should understand:
  
  pileup can help you notice whether support is clustering near read starts or ends.
  
  That matters because end-of-read clustering was one of the suspicious visual patterns from the last lesson. Pileup does not show the full read like a graphical viewer does, but it can still reveal whether many supporting observations sit right at read boundaries.`
          },
          {
            title: "How pileup shows indels and nearby local complexity",
            body: `The mpileup manual explains that:
  
  • insertions are shown with +<length><sequence>
  • deletions are shown with -<length><sequence>
  • deleted bases can also appear as * in subsequent lines
  
  So the learner should understand:
  
  pileup can make nearby insertions and deletions visible, which helps explain why a locus may look messy or unstable.
  
  This is especially useful because some suspicious SNV-looking signals actually sit next to awkward local indel patterns. Pileup can flag that kind of local complexity quickly.`
          },
          {
            title: "How pileup can include mapping quality and read-position detail",
            body: `The mpileup manual says you can optionally output:
  
  • mapping qualities with -s/--output-MQ
  • read positions with -O/--output-BP
  • and even read names or extra fields
  
  So the learner should understand:
  
  pileup can be more than just base calls; it can also provide extra clues about mapping confidence and where in the read a base occurs.
  
  That makes it useful for:
  
  • checking whether support comes from well-mapped reads
  • checking whether support clusters at awkward read positions
  • and getting a more structured locus-level evidence summary.`
          },
          {
            title: "What pileup is good for",
            body: `At beginner level, pileup is especially good for:
  
  • quick single-site evidence checks
  • confirming that alternate support is genuinely present
  • noticing strand imbalance
  • spotting nearby indels or local complexity
  • seeing whether the locus has enough coverage
  • checking whether suspicious start/end patterns are present
  
  All of these follow directly from the mpileup field definitions.
  
  So the learner should understand:
  
  pileup is a compact evidence-checking tool for one locus at a time.
  
  It is very useful when you want a concise read-level summary rather than a whole graphical alignment display.`
          },
          {
            title: "What pileup does not replace",
            body: `This lesson should be careful about boundaries.
  
  Pileup is useful, but it does not replace:
  
  • full BAM/CRAM review across a wider region
  • graphical inspection of local alignment structure
  • VCF summaries across many sites
  • broader context such as assay limitations or phenotype fit
  
  The mpileup manual itself presents it as textual output from alignments, not as a complete interpretation framework.
  
  So the learner should understand:
  
  pileup is one powerful view of the evidence, but not the whole story.
  
  That is why it belongs alongside, not instead of, VCF and BAM/CRAM review.`
          },
          {
            title: "A useful beginner mental model",
            body: `A safe mental model is:
  
  • VCF = what the caller concluded
  • Pileup = compact single-position evidence summary
  • Full BAM/CRAM visual review = wider read-pattern context around the site
  
  This fits the tool documentation:
  
  • samtools works on BAM/CRAM alignments
  • mpileup produces textual locus summaries from those alignments
  
  So the learner should understand:
  
  pileup is a bridge between raw alignment evidence and the compressed VCF call summary.
  
  That makes it a very useful concept in clinical bioinformatics training.`
          },
          {
            title: "The one-sentence takeaway",
            body: `If the learner remembers one sentence from this lesson, it should be:
  
  **Pileup-style evidence gives a compact, single-position summary of aligned-read support — including coverage, bases, strand, indels, read starts/ends, and optional mapping-quality clues — so it helps you inspect what the reads are actually doing at the locus without replacing full BAM/CRAM review.**
  
  That is the core lesson.`
          },
          {
            title: "Worked example",
            body: `**Scenario**
  
  A learner sees a candidate SNV in the VCF and wants to know whether the alternate support is really present on both strands and whether there are nearby indel-like events making the site messy.
  
  **Beginner question**
  
  Why can a pileup-style view help here?
  
  **Good beginner answer**
  
  Because pileup gives a compact single-position summary of the aligned reads. It shows how many reads cover the site, what bases they carry, whether those bases appear on forward and reverse strands, whether reads start or end at the site, and whether nearby insertions or deletions are present. The samtools mpileup manual explicitly says the read-bases column encodes matches, mismatches, indels, strand, mapping quality, and read starts/ends, which makes pileup very useful for focused evidence checking at one locus.`
          },
          {
            title: "Lesson summary",
            body: `The learner has understood this lesson if they can say something like:
  
  “Pileup gives me a compact, position-by-position view of aligned-read evidence. It helps me see how many reads cover the site, what bases they show, whether support is on both strands, whether reads start or end there, and whether indels or local complexity might be affecting the call.”`
          }
        ],
        sections: [
          {
            heading: "The central idea",
            body:
              "Pileup-style evidence is a compact single-position view of aligned-read support at a locus."
          }
        ],
        quiz: [
          {
            question: "What does a pileup line mainly represent?",
            options: [
              "A whole-sample variant report",
              "The pileup of reads at a single genomic position",
              "A transcript annotation table",
              "A filtered list of candidate variants"
            ],
            answerIndex: 1,
            explanation:
              "The mpileup manual states that each line represents the pileup of reads at a single genomic position."
          },
          {
            question: "Why is the read-bases column so useful?",
            options: [
              "Because it only shows depth",
              "Because it encodes matches, mismatches, indels, strand, mapping-quality-related start markers, and read starts/ends",
              "Because it gives pathogenicity classifications",
              "Because it replaces VCF genotype fields completely"
            ],
            answerIndex: 1,
            explanation:
              "The mpileup manual explicitly says the read-bases column encodes matches, mismatches, indels, strand, mapping quality, and starts and ends of reads."
          },
          {
            question: "What can pileup help you notice about strand support?",
            options: [
              "Whether the patient is male or female",
              "Whether alternate support appears on both forward and reverse strands or mostly one side",
              "Whether the transcript is canonical",
              "Whether the genome build is correct"
            ],
            answerIndex: 1,
            explanation:
              "Pileup uses different symbols for forward- and reverse-strand bases, so it can show whether support is bidirectional or strongly one-sided."
          },
          {
            question: "What is the safest way to think about pileup-style evidence?",
            options: [
              "It replaces both VCF and BAM/CRAM review",
              "It is a compact locus-level evidence summary that helps inspect what the reads are doing at one position",
              "It only matters for indels",
              "It is mainly a pathogenicity scoring system"
            ],
            answerIndex: 1,
            explanation:
              "Pileup is a compact single-position summary derived from aligned reads, useful for focused evidence inspection but not a replacement for broader review."
          }
        ]
      },
      {
        slug: "lesson-6",
        title: "Lesson 6: How visual review fits into safe clinical bioinformatics",
        goal:
          "By the end of this lesson, the learner should be able to answer: “What is visual review actually used for in real clinical bioinformatics work, and how should it affect trust, prioritisation, communication, and escalation?”",
        screens: [
          {
            title: "Lesson goal",
            body: `By the end of this lesson, the learner should be able to answer:
  
  “What is visual review actually used for in real clinical bioinformatics work, and how should it affect trust, prioritisation, communication, and escalation?”
  
  This lesson finishes Module 12 by tying read-level evidence checking back to real workflow behaviour. The learner has now seen that:
  
  • VCF metrics summarize the call
  • BAM/CRAM shows the aligned evidence
  • pileup-style views give a compact locus summary
  • reassuring and suspicious read patterns can change how comfortable a call feels
  
  IGV review guidance describes manual inspection as an important step for confirmation and interpretation of sequencing datasets because it can increase confidence and reduce false positives.`
          },
          {
            title: "The central idea",
            body: `A good beginner summary is:
  
  **Visual review is used to decide how much trust a call deserves as read-level evidence, especially when the call is important, suspicious, or potentially misleading.**
  
  That means visual review is not just a technical extra. It affects what you do next:
  
  • whether a call feels comfortable
  • whether it needs more caution
  • whether it should be prioritized
  • whether it should be described as uncertain
  • whether it should be escalated instead of being treated as technically settled
  
  So the key beginner message is:
  
  visual review helps turn “the pipeline called this” into “how strongly should I trust this as evidence?”`
          },
          {
            title: "Why visual review comes after metrics, not instead of them",
            body: `Visual review does not replace earlier modules. It sits on top of them.
  
  The usual flow is:
  
  1. notice something in the VCF or filtering output
  2. identify that the call is important, suspicious, or technically uncomfortable
  3. inspect the read-level evidence
  4. decide whether the reads support or weaken the summary impression
  
  That is consistent with IGV guidance, which presents visual inspection as part of variant-call confirmation and interpretation after automated calling, not as a replacement for calling itself.
  
  So the learner should understand:
  
  metrics often tell you where to look; visual review helps tell you what the evidence actually looks like there.`
          },
          {
            title: "What visual review helps you do with technically strong calls",
            body: `If a call already looks good in the VCF and also looks clean in the reads, visual review can strengthen confidence that it is technically credible.
  
  For example, it can confirm that:
  
  • the alternate support is genuinely present
  • support appears on both strands
  • the allele pattern fits the genotype
  • the mapping and local alignment look comfortable
  • there is no obvious artefact-like pattern hiding behind the summary fields
  
  IGV review guidance explicitly says visual inspection can increase confidence in candidate variants.
  
  So the learner should understand:
  
  visual review can confirm comfort, not just detect problems.
  
  That is important because evidence checking is not only about saying no. Sometimes it is about becoming more comfortable saying yes.`
          },
          {
            title: "What visual review helps you do with suspicious calls",
            body: `Visual review becomes especially valuable when a call is:
  
  • in a difficult region
  • supported in an uncomfortable way
  • biologically attractive but technically messy
  • filtered, borderline, or internally inconsistent
  
  In these cases, visual inspection can reveal whether the call is weakened by:
  
  • strand-only support
  • end-of-read clustering
  • soft clipping
  • low-mapping-quality dependence
  • messy local alignment
  • nearby indels or unstable context
  
  That is exactly the kind of use case described in IGV review papers and practical visual-review workflows.
  
  So the learner should understand:
  
  visual review helps explain why a suspicious call feels suspicious.
  
  That is often more useful than a warning metric alone.`
          },
          {
            title: "Why visual review changes prioritisation",
            body: `In real clinical bioinformatics, not every plausible variant gets equal weight.
  
  If two variants are both biologically interesting, but one looks clean in the reads and the other looks artefactual or uncomfortable, that should usually affect prioritisation. The technically cleaner call is safer to carry forward as evidence, while the uncomfortable call may need more caution or deeper review first. This follows directly from the role of manual review in reducing false positives and improving trust in candidate calls.
  
  So the learner should understand:
  
  visual review helps rank candidates by evidence quality, not just by gene appeal or summary metrics.
  
  That is one of its biggest workflow uses.`
          },
          {
            title: "Why visual review changes communication",
            body: `Visual review should also change how strongly a call is described.
  
  A call that looks clean in the reads may reasonably be described as:
  
  • technically well supported
  • visually reassuring
  • suitable for serious downstream consideration
  
  A call that looks messy may need language like:
  
  • limited technical support
  • suspicious strand pattern
  • uncomfortable local alignment
  • possible artefact
  • requires caution or further review
  
  IGV review guidance supports this because the whole point of manual inspection is to better judge how much confidence a call deserves.
  
  So the learner should understand:
  
  visual review affects not just what you think, but how confidently you should say it.
  
  That is part of safe professional communication.`
          },
          {
            title: "Why visual review supports escalation",
            body: `Some calls are exactly the sort that should not be handled casually:
  
  • technically weak but biologically tempting
  • suspicious in a difficult region
  • internally inconsistent between metrics and reads
  • important enough that uncertainty matters
  
  In those situations, visual review helps the bioinformatician recognize that the right action may be:
  
  • document the concern clearly
  • avoid overstating confidence
  • escalate rather than presenting the call as technically settled
  
  That is a practical application of the review role described in IGV guidance: not just looking at reads, but using that inspection to support safer downstream handling.
  
  So the learner should understand:
  
  visual review is part of safe escalation, not just technical curiosity.`
          },
          {
            title: "Why visual review does not settle everything",
            body: `This lesson should keep an important boundary.
  
  Even a visually reassuring call is not automatically:
  
  • pathogenic
  • relevant to the phenotype
  • the final answer
  • beyond the need for broader clinical review
  
  And even a suspicious-looking call is not always automatically false.
  
  IGV review helps judge whether the read-level evidence looks comfortable or uncomfortable, but it does not replace:
  
  • assay limitations
  • reference/transcript context
  • phenotype reasoning
  • inheritance logic
  • role boundaries
  
  So the learner should understand:
  
  visual review is a powerful evidence-checking tool, but still only one part of safe clinical bioinformatics reasoning.`
          },
          {
            title: "Why this matters for autonomous working",
            body: `This lesson also links directly to later modules on safe autonomous practice.
  
  A strong bioinformatician is not someone who just reads off VCF values or assumes every call is fine because it passed filters. A stronger model is someone who can:
  
  • notice when a call deserves read-level review
  • inspect the evidence thoughtfully
  • explain why the call feels technically clean or uncomfortable
  • know when that discomfort should change prioritisation, communication, or escalation
  
  That is exactly the kind of disciplined, evidence-aware behaviour that later safe-working modules will build on.
  
  So the learner should understand:
  
  visual review supports better judgment, not just better screenshots.`
          },
          {
            title: "The one-sentence takeaway",
            body: `If the learner remembers one sentence from this lesson, it should be:
  
  **In clinical bioinformatics, visual review is used to decide how much trust a call deserves as read-level evidence, which helps shape prioritisation, caution in communication, and whether an important but uncomfortable signal should be reviewed further or escalated rather than accepted at face value.**
  
  That is the core lesson.`
          },
          {
            title: "Worked example",
            body: `**Scenario**
  
  Two candidate variants are being reviewed.
  
  Variant A
  
  • reassuring VCF metrics
  • clean support on both strands
  • comfortable mapping
  • stable local alignment
  
  Variant B
  
  • also looks plausible in the VCF
  • but the reads show strong strand imbalance
  • soft clipping near the site
  • and unstable-looking local support
  
  A beginner says, “Both are in relevant genes and both are in the VCF, so they should be treated similarly.”
  
  **Beginner question**
  
  Why is that incomplete?
  
  **Good beginner answer**
  
  Because visual review adds a second layer of technical judgment beyond the VCF summary. Variant A looks reassuring both in the metrics and in the reads, which makes it more comfortable to trust as evidence. Variant B may still matter biologically, but the read pattern weakens technical confidence and should make the reviewer more cautious about prioritisation, wording, and whether further review or escalation is needed. IGV review guidance supports exactly this use of manual inspection to reduce false positives and improve evidence-based confidence.`
          },
          {
            title: "Lesson summary",
            body: `The learner has understood this lesson if they can say something like:
  
  “Visual review helps me decide how much trust a call deserves as read-level evidence. Clean-looking reads can strengthen confidence, suspicious-looking reads should reduce comfort, and that should affect how I prioritise, describe, and sometimes escalate the call.”`
          }
        ],
        sections: [
          {
            heading: "The central idea",
            body:
              "Visual review is used to decide how much trust a call deserves as read-level evidence, especially when the call is important, suspicious, or potentially misleading."
          }
        ],
        quiz: [
          {
            question:
              "What is the main practical role of visual review in clinical bioinformatics?",
            options: [
              "To replace variant calling software",
              "To decide how much trust a call deserves as read-level evidence",
              "To determine pathogenicity from BAM alone",
              "To avoid using VCF files"
            ],
            answerIndex: 1,
            explanation:
              "Visual review is an evidence-checking step used to judge whether the aligned-read support looks comfortable or suspicious."
          },
          {
            question: "Why can visual review affect prioritisation?",
            options: [
              "Because a biologically attractive variant is always technically stronger after review",
              "Because calls that look cleaner in the reads are usually safer to trust as evidence than calls that look artefactual or unstable",
              "Because read review replaces phenotype analysis",
              "Because only visually perfect calls matter clinically"
            ],
            answerIndex: 1,
            explanation:
              "Visual review helps distinguish technically comfortable calls from uncomfortable ones, which affects how strongly a candidate should be carried forward."
          },
          {
            question:
              "Why can visual review affect communication and escalation?",
            options: [
              "Because all suspicious calls must be rejected immediately",
              "Because the read pattern changes how confidently a call should be described and whether uncertainty should be flagged more clearly",
              "Because BAM files contain final clinical reports",
              "Because escalation is only used for failed sequencing runs"
            ],
            answerIndex: 1,
            explanation:
              "Visual review changes how much trust a call deserves, and that should affect how strongly it is communicated and whether extra caution or escalation is needed."
          },
          {
            question: "What is the safest overall message of Module 12?",
            options: [
              "VCF metrics usually make visual review unnecessary",
              "Visual review helps check whether the aligned-read evidence really supports the call comfortably, but it still works alongside broader technical and clinical context",
              "Any suspicious visual clue proves the call is false",
              "Pileup replaces BAM/CRAM review completely"
            ],
            answerIndex: 1,
            explanation:
              "This is the integrated lesson of the module: direct read review strengthens technical judgment, but it does not replace the rest of the workflow."
          }
        ]
      }
    ]
  };