export const module8MiniCase = {
    title:
      "Module 8 Mini Case: The variant call is there, but which file answers the real question?",
    description:
      "Apply Module 8 reasoning to a realistic clinical bioinformatics workflow problem where the team must decide which file stage actually answers the question being asked.",
    introSections: [
      {
        title: "Mini case overview",
        body:
          "This mini case is designed to feel more like a real clinical bioinformatics workflow problem than a recall exercise.\n\nThe learner is not being asked to classify a variant or make a diagnosis.\n\nInstead, they are being asked to apply the main ideas from Module 8:\n\n• the pipeline flows from sample → FASTQ → BAM/CRAM → VCF\n• each file belongs to a different stage\n• FASTQ, BAM/CRAM, and VCF are not interchangeable\n• technical questions and interpretation questions often belong to different evidence layers\n• safe reasoning starts with asking which file is the right file for this question\n\nFASTQ stores raw reads with per-base quality scores, SAM/BAM/CRAM stores alignments, and VCF stores called variants derived from those earlier stages."
      }
    ],
    caseScenario: {
      title: "Case scenario",
      body:
        "A trainee is reviewing a rare disease case.\n\nThe pipeline has produced a VCF containing a candidate variant in a relevant gene. The variant looks potentially interesting because:\n\n• it is rare\n• it is in a plausible gene\n• it passed the caller’s filters\n\nA beginner on the team says:\n\n“The variant is in the VCF and passed filters, so that should be enough.\nWe don’t really need the earlier files unless something has gone badly wrong.”\n\nA more experienced colleague disagrees and says:\n\n• the VCF is important, but it is still a summary\n• if the team wants to understand whether the call is technically convincing, they may need to inspect the BAM/CRAM\n• if there are deeper concerns about the raw data itself, the FASTQ may also matter\n\nThe learner’s task is to explain why the beginner’s statement is too simplistic."
    },
    learnerTask: {
      title: "Learner task",
      body: "Read the case and answer the questions below."
    },
    steps: [
      {
        title: "Question 1",
        content: [],
        question:
          "What is the main problem with the statement “the variant is in the VCF and passed filters, so that should be enough”?",
        options: [
          "It assumes the VCF fully replaces the underlying evidence",
          "It proves the BAM file must be empty",
          "It shows FASTQ is the main variant interpretation file",
          "It means filtering is useless"
        ],
        answerIndex: 0,
        explanation:
          "The VCF is the called-variant summary layer. It tells you what the pipeline reported, but it does not fully replace the aligned-read evidence in BAM/CRAM or the earlier raw-read stage in FASTQ. A called variant can still need technical review at the evidence level."
      },
      {
        title: "Question 2",
        content: [],
        question:
          "If the team wants to inspect read-level support at the genomic locus, which file is the best starting point?",
        options: ["FASTQ", "BAM/CRAM", "VCF only", "Pedigree file"],
        answerIndex: 1,
        explanation:
          "BAM/CRAM stores reads after alignment to the reference genome, so it is the main evidence-level file for reviewing support at a genomic position."
      },
      {
        title: "Question 3",
        content: [],
        question:
          "If the question is “what exactly did the variant caller report for this site?”, which file is the best starting point?",
        options: ["FASTQ", "BAM/CRAM", "VCF", "Reference FASTA only"],
        answerIndex: 2,
        explanation:
          "The VCF is the call-level summary file. It records the called site, REF/ALT alleles, genotype summary fields, filters, and annotations."
      },
      {
        title: "Question 4",
        content: [],
        question:
          "Why might FASTQ still matter in some situations, even though BAM/CRAM and VCF are later pipeline stages?",
        options: [
          "Because FASTQ is the final diagnosis file",
          "Because FASTQ stores the raw reads and per-base quality scores before alignment, so it can matter when early read-quality concerns are relevant",
          "Because FASTQ contains the final variant classification",
          "Because BAM/CRAM never contains sequence information"
        ],
        answerIndex: 1,
        explanation:
          "FASTQ is the raw-read stage and includes per-base quality scores. If there are concerns about the original sequencing data quality, FASTQ can still be relevant."
      },
      {
        title: "Question 5",
        content: [],
        question: "What is the safest overall conclusion from this case?",
        options: [
          "A VCF that passes filters makes earlier files unnecessary",
          "FASTQ is always the most important file for variant review",
          "Different files answer different questions, so technical confidence may require moving from VCF to BAM/CRAM and sometimes further back to FASTQ",
          "BAM/CRAM and VCF are interchangeable once the pipeline is complete"
        ],
        answerIndex: 2,
        explanation:
          "This is the integrated lesson of Module 8. VCF is crucial, but it is not the whole evidence chain. Good clinical bioinformatics depends on knowing when a question belongs to the raw-read layer, aligned-evidence layer, or called-variant layer."
      }
    ],
    shortWrittenResponseTask: {
      title: "Short written response task",
      body:
        "Ask the learner to answer this in 5–7 sentences:\n\nWhy is the statement “the variant is in the VCF and passed filters, so we do not need the earlier files” too simplistic?"
    },
    strongAnswer: {
      title: "What a strong answer should include",
      body:
        "A strong learner answer would say something like:\n\nThe statement is too simplistic because a VCF is only the called-variant summary stage of the pipeline. It tells us what the caller reported, but not the full raw or aligned evidence behind that call. If we want to know whether the variant is technically convincing at the read level, BAM/CRAM is usually the key file because it shows the aligned reads at the genomic site. If there are concerns about the original sequencing quality, FASTQ may also matter because it contains the raw reads and per-base quality scores. So the right file depends on the question being asked. Safe clinical bioinformatics means knowing which evidence layer you are using before drawing conclusions."
    },
    whatThisMiniCaseIsTesting: {
      title: "What this mini case is testing",
      body:
        "This case is testing whether the learner can integrate the main Module 8 ideas:\n\n• VCF is the called-variant summary\n• BAM/CRAM is the aligned evidence\n• FASTQ is the raw-read stage\n• one file does not replace the whole pipeline\n• different technical questions belong to different file stages\n• safe interpretation begins with choosing the right evidence layer"
    },
    goodPerformanceLooksLike: {
      title: "What “good performance” looks like",
      body:
        "The learner has done well if they can recognise that:\n\n• the beginner is over-trusting the VCF\n• BAM/CRAM is often the key file for locus-level technical review\n• FASTQ can still matter when early read-quality questions are relevant\n• the right file depends on the question, not just on which file is latest in the pipeline\n• good clinical bioinformatics means understanding the evidence chain, not just the final variant list"
    },
    conclusion: [
      "This mini case brings together the key ideas from Module 8: the pipeline flows from sample to FASTQ to BAM/CRAM to VCF, each file belongs to a different evidence layer, and these files are not interchangeable.",
      "The main lesson is that safe clinical bioinformatics starts by asking which file stage actually answers the question being asked, rather than over-trusting the latest summary file."
    ]
  };