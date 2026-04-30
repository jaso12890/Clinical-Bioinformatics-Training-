export const module12Quiz = [
    {
      question:
        "A learner says: “The VCF already gives depth, allele depth, genotype quality, and filter status, so visual review is mostly redundant.” Which response is best?",
      options: [
        "Correct, because BAM/CRAM review only repeats what the VCF already says",
        "Incomplete, because VCF fields are summaries, while visual review can reveal strand imbalance, clipping, awkward mapping, and unstable local alignment that the summary may compress or hide",
        "Correct, unless the site is an indel",
        "Incomplete only because pileup also shows transcript context"
      ],
      answerIndex: 1,
      explanation:
        "This is one of the core lessons of Module 12: the VCF tells you what the caller concluded, while BAM/CRAM review helps you inspect whether the aligned-read evidence actually looks consistent with that conclusion. IGV guidance emphasizes that manual review can reduce false positives after automated calling."
    },
    {
      question:
        "Which pattern is most consistent with a technically reassuring call?",
      options: [
        "Alternate support mostly on one strand, clustered at read ends",
        "Multiple alternate-supporting reads on both strands, with plausible allele balance and stable local alignment",
        "High depth but widespread soft clipping and noisy neighbouring sequence",
        "PASS in the VCF, but visually awkward read support"
      ],
      answerIndex: 1,
      explanation:
        "A reassuring read pattern usually has enough support, support on both strands, a plausible allele split, comfortable mapping, and a tidy local alignment pattern."
    },
    {
      question:
        "What is the best reason that strong strand imbalance makes a call less comfortable?",
      options: [
        "Because it proves the variant is false",
        "Because support heavily confined to one strand is often less reassuring than support seen on both strands and can reflect technical artefact",
        "Because strand only matters for RNA sequencing",
        "Because every true variant must have exactly equal forward and reverse support"
      ],
      answerIndex: 1,
      explanation:
        "Module 12 teaches that support mainly or only on one strand is a classic warning sign. It lowers comfort even though it does not automatically prove the call is false."
    },
    {
      question: "Why can end-of-read clustering be suspicious?",
      options: [
        "Because all real variants occur only in the middle of reads",
        "Because support concentrated mainly near read starts or ends is often less reassuring than support distributed across multiple well-placed reads",
        "Because read position is not visible in pileup-style evidence",
        "Because end-of-read clustering proves contamination"
      ],
      answerIndex: 1,
      explanation:
        "Pileup-style evidence explicitly records read starts and ends, and read-review guidance treats strong support clustering at read boundaries as a suspicious pattern rather than a comfortable one."
    },
    {
      question:
        "A call has reassuring DP, AD, GQ, and PASS status, but BAM/CRAM review shows most alternate support comes from low-mapping-quality, soft-clipped reads. What is the safest conclusion?",
      options: [
        "The VCF wins, so the call should still be treated as technically settled",
        "The read-level warning signs still matter, so confidence should drop despite the reassuring summary fields",
        "Low mapping quality only matters if depth is low",
        "Soft clipping is irrelevant if genotype quality is high"
      ],
      answerIndex: 1,
      explanation:
        "This is exactly the kind of disagreement between summary fields and read-level evidence that makes visual review valuable. Metrics and reads should ideally tell the same story; if they do not, caution should increase."
    },
    {
      question:
        "What is the best beginner description of pileup-style evidence?",
      options: [
        "A full graphical replacement for BAM review",
        "A compact, single-position summary of aligned-read support at a locus",
        "A transcript-level annotation report",
        "A pathogenicity-scoring format"
      ],
      answerIndex: 1,
      explanation:
        "The samtools mpileup documentation describes pileup as textual output from alignments, with each line representing reads piled up at a single genomic position."
    },
    {
      question: "Which clue can a pileup-style view help reveal?",
      options: [
        "The patient’s phenotype severity",
        "Whether support appears on forward and reverse strands and whether reads start or end at the site",
        "Final clinical classification",
        "Which transcript is MANE Select"
      ],
      answerIndex: 1,
      explanation:
        "Pileup encodes strand, read starts and ends, indels, and base support at the locus, which makes it useful for focused evidence checking."
    },
    {
      question:
        "A learner says: “If the read pattern looks suspicious, the call must always be false.” What is the best correction?",
      options: [
        "Correct, because visual review provides absolute truth",
        "Incomplete, because suspicious read patterns should reduce comfort and trigger caution or deeper review, but they do not always prove the call is false",
        "Correct, unless the site passed filters",
        "Incomplete only because GQ matters more than the reads"
      ],
      answerIndex: 1,
      explanation:
        "Module 12 keeps the same safety boundary as Modules 10 and 11: suspicious evidence should trigger caution, not automatic certainty. Visual review is powerful, but it is still part of a broader workflow."
    },
    {
      question: "Why is visual review useful for prioritisation?",
      options: [
        "Because it replaces phenotype-based reasoning",
        "Because a call that looks cleaner in the reads is usually safer to trust as evidence than a call that looks artefactual or unstable",
        "Because the visually neatest call is always clinically causal",
        "Because visual review only matters after final reporting"
      ],
      answerIndex: 1,
      explanation:
        "Visual review helps decide how much trust a call deserves as evidence, which directly affects how strongly it should be carried forward into downstream analysis."
    },
    {
      question: "What is the best overall summary of Module 12?",
      options: [
        "Visual review mainly matters when a call has already failed filters",
        "A call should be trusted mainly from VCF metrics, with BAM review used only rarely",
        "Visual review checks whether the aligned-read evidence actually looks consistent with the VCF summary, and that judgment should influence trust, caution, and workflow decisions",
        "Pileup replaces both VCF and BAM/CRAM review"
      ],
      answerIndex: 2,
      explanation:
        "That is the integrated lesson of the module: visual review is an evidence-checking step that works alongside VCF metrics and broader technical context to shape safe clinical bioinformatics decisions."
    }
  ];