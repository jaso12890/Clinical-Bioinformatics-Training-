export const module8Quiz = [
    {
      question:
        "A learner says: “If I already have a VCF, then I basically have all the sequencing evidence that matters.” Which response is best?",
      options: [
        "Correct, because the VCF contains the raw reads and the final genotype together",
        "Incomplete, because a VCF is a called-variant summary and does not replace the aligned-read evidence in BAM/CRAM or the raw read/quality information in FASTQ",
        "Correct, because BAM/CRAM is only a storage format and adds no useful biological information",
        "Incomplete only because phenotype information is missing"
      ],
      answerIndex: 1,
      explanation:
        "VCF is the downstream called-variant format. It records what the pipeline called, but not the full read-level evidence or raw base-quality evidence behind those calls."
    },
    {
      question:
        "Which option gives the correct pipeline order for the main files in a standard short-read workflow?",
      options: [
        "sample → VCF → FASTQ → BAM/CRAM",
        "sample → BAM/CRAM → FASTQ → VCF",
        "sample → FASTQ → BAM/CRAM → VCF",
        "sample → VCF → BAM/CRAM → FASTQ"
      ],
      answerIndex: 2,
      explanation:
        "Raw sequence data are commonly stored in FASTQ, then aligned to produce BAM/CRAM, and variant calling from aligned reads produces VCF."
    },
    {
      question:
        "A colleague asks: “At this exact genomic locus, do the reads support the alternate allele cleanly on both strands?” Which file is the best starting point?",
      options: ["FASTQ", "BAM/CRAM", "VCF only", "Pedigree file"],
      answerIndex: 1,
      explanation:
        "This is a read-level evidence question tied to a genomic position, so the aligned-read file is the right starting point. BAM/CRAM stores reads after alignment and supports regional review."
    },
    {
      question:
        "Why is FASTQ the best starting point for some questions but not others?",
      options: [
        "Because FASTQ contains every final variant call in the case",
        "Because FASTQ stores raw reads and per-base quality scores, but not genomic alignment positions or final called variants",
        "Because FASTQ is mainly a report format",
        "Because FASTQ only stores phenotype metadata"
      ],
      answerIndex: 1,
      explanation:
        "The FASTQ format was created to store sequencing reads together with a quality score for each nucleotide. It does not itself provide alignment positions or a variant-call summary."
    },
    {
      question:
        "A learner says: “BAM is basically just a bigger VCF with more detail.” What is the best correction?",
      options: [
        "Correct, because BAM and VCF store the same biological layer in different compression styles",
        "Incomplete, because BAM stores aligned reads and VCF stores called variants derived from those reads",
        "Correct, because both are created before alignment",
        "Incomplete only because CRAM is smaller than BAM"
      ],
      answerIndex: 1,
      explanation:
        "BAM is the aligned-read evidence layer, while VCF is the variant-call summary layer that comes later in the pipeline."
    },
    {
      question: "Which statement best describes CRAM?",
      options: [
        "A phenotype file format for rare disease databases",
        "A more highly compressed aligned-read format, often using reference-based compression",
        "A raw-read file format used before FASTQ",
        "A variant-only file format for structural variants"
      ],
      answerIndex: 1,
      explanation:
        "GA4GH and HTS specifications describe CRAM as a compressed aligned-read format, and HTSlib explains that it primarily uses reference-based compression."
    },
    {
      question:
        "A variant is absent from the VCF. Which conclusion is the safest?",
      options: [
        "There cannot be any relevant evidence for that site anywhere in the pipeline",
        "The variant was not called in the final variant-summary output, but earlier evidence layers may still matter for understanding why",
        "The sequencing must have failed completely",
        "The site was definitely homozygous reference in the patient"
      ],
      answerIndex: 1,
      explanation:
        "VCF is a later-stage summary of called variants. What does or does not appear in the VCF depends on earlier read quality, alignment, caller behaviour, and filtering."
    },
    {
      question:
        "Which question is most naturally answered by a VCF rather than FASTQ or BAM/CRAM?",
      options: [
        "What were the per-base quality scores in the raw sequencing read?",
        "Which variants were called, what REF/ALT alleles were reported, and what genotype was assigned?",
        "Do the aligned reads at this site show suspicious clipping?",
        "Which raw read identifier contained this fragment before alignment?"
      ],
      answerIndex: 1,
      explanation:
        "VCF is the standard format for called genetic variation and includes fields such as position, REF, ALT, FILTER/INFO, and sample genotype summaries."
    },
    {
      question:
        "Why can one real technical question sometimes require more than one file?",
      options: [
        "Because genomic file formats are badly designed",
        "Because raw read quality, aligned evidence, and called-variant summaries are different evidence layers that may all contribute to understanding the same issue",
        "Because only research workflows use multiple file types",
        "Because VCF is never useful on its own"
      ],
      answerIndex: 1,
      explanation:
        "A question like “is this variant technically convincing?” may involve VCF for the call, BAM/CRAM for locus-level evidence, and sometimes FASTQ for earlier raw-read quality context."
    },
    {
      question: "What is the best overall summary of Module 8?",
      options: [
        "FASTQ, BAM/CRAM, and VCF are mostly different names for the same underlying data",
        "These files are different evidence layers in the sequencing pipeline, and safe interpretation depends on choosing the right file for the right question",
        "VCF is usually enough for every meaningful genomics question",
        "BAM/CRAM is only a storage convenience and adds little value beyond FASTQ"
      ],
      answerIndex: 1,
      explanation:
        "That is the integrated lesson of Module 8: FASTQ, BAM/CRAM, and VCF represent raw reads, aligned reads, and called variants respectively, so they answer different questions and should not be treated as interchangeable."
    }
  ];