export const module4MiniCase = {
  title: "Module 4 Mini Case: From DNA change to possible biological effect",
  description:
    "Use the biology from Module 4 to reason through why a variant cannot be understood as only a DNA letter change.",
  introSections: [
    {
      title: "Mini case overview",
      body:
        "This mini case is designed to feel more like a real beginner clinical genomics reasoning task than a simple recall exercise.\n\nThe learner is not being asked to classify a variant or make a diagnosis. Instead, they are being asked to use the Module 4 biology foundation to reason through a realistic question:\n\nWhy is it not enough to describe a variant only as a DNA letter change?\n\nThis mini case is testing whether the learner can connect:\n\n• DNA\n• gene\n• transcript\n• protein\n• exons and introns\n• splicing\n• biological context"
    }
  ],
  caseScenario: {
    title: "Case scenario",
    body:
      "A trainee is looking at a teaching case in a genomics learning session.\n\nThey are shown two simplified statements about two different DNA variants:\n\n• Variant A: a single-base change in an exon of a gene\n• Variant B: a single-base change near an exon–intron boundary in the same gene\n\nAnother beginner in the session says:\n\n“Variant A sounds more important, because it is in an exon.\n\nVariant B is probably less important because it is not really in the coding bit.\n\nIn both cases, the main thing that matters is just the DNA letter that changed.”\n\nThe trainee is not being asked to decide whether either variant is disease-causing.\n\nInstead, they need to explain why that statement is too simplistic using only the biology from Module 4."
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
        "What is the main weakness in the beginner’s reasoning?",
      options: [
        "It assumes that the raw DNA change alone is enough, without considering transcript, splicing, or protein context",
        "It incorrectly assumes that all intronic changes are always more important than exonic changes",
        "It shows that genes and transcripts are the same thing",
        "It proves that proteins are irrelevant in clinical genomics"
      ],
      answerIndex: 0,
      explanation:
        "The main problem is that the learner is treating the variant as only a DNA letter change. Module 4 teaches that biological meaning often depends on which gene is involved, which transcript matters, whether splicing could be affected, and what the downstream protein consequence might be."
    },
    {
      title: "Question 2",
      content: [],
      question:
        "Why might Variant B still matter biologically even if it is not described as a simple coding-base substitution?",
      options: [
        "Because any non-exonic variant is automatically pathogenic",
        "Because a change near an exon–intron boundary could affect splicing and therefore alter the mature transcript",
        "Because introns are translated directly into protein",
        "Because only variants outside exons affect RNA processing"
      ],
      answerIndex: 1,
      explanation:
        "Module 4 teaches that splicing removes introns and joins exons to make mature mRNA. A change near an exon–intron boundary may matter because it affects how the transcript is assembled, not just because of direct amino-acid substitution."
    },
    {
      title: "Question 3",
      content: [],
      question:
        "Why is it incomplete to say that Variant A must be the more important one just because it is in an exon?",
      options: [
        "Because exonic variants are never clinically relevant",
        "Because exon location alone does not tell you which transcript is relevant or what effect the change has on the protein",
        "Because only intronic variants affect proteins",
        "Because variants in exons are ignored during analysis"
      ],
      answerIndex: 1,
      explanation:
        "Even if a variant is in an exon, that alone does not tell you whether it changes an amino acid, creates a stop codon, affects a relevant transcript, or has little biological effect. Module 4 is meant to move the learner away from location-only thinking."
    },
    {
      title: "Question 4",
      content: [],
      question:
        "Which concept best explains why the same gene can still produce different biological outcomes depending on context?",
      options: [
        "One gene always gives one fixed transcript and one fixed protein",
        "The genome replaces the need to think about transcripts",
        "One gene can have multiple transcripts, and transcript structure can affect downstream protein consequences",
        "Genes are not made of DNA"
      ],
      answerIndex: 2,
      explanation:
        "Module 4 teaches that one gene can have more than one transcript, especially because of transcript processing and splicing. That means the same gene does not always map to one simple outcome."
    },
    {
      title: "Question 5",
      content: [],
      question:
        "What is the best beginner explanation of why protein thinking still matters in this case?",
      options: [
        "Because every DNA variant definitely changes a protein",
        "Because many clinically relevant DNA changes are important partly because of their downstream effect on protein production or protein sequence",
        "Because proteins come before transcripts in the biological pathway",
        "Because once protein is mentioned, splicing stops mattering"
      ],
      answerIndex: 1,
      explanation:
        "Module 4 teaches that many variants matter because they alter amino-acid sequence, create premature stop signals, or otherwise affect how proteins are made. It also teaches that not every variant works in exactly this way, which is why the wording must stay careful."
    }
  ],
  shortWrittenResponseTask: {
    title: "Short written response task",
    body:
      "Ask the learner to answer this in 5–7 sentences:\n\nWhy is it too simplistic to decide which of these two variants matters more using only the statement “one is exonic and one is near a splice boundary”?"
  },
  strongAnswer: {
    title: "What a strong answer should include",
    body:
      "A strong learner answer would say something like:\n\nIt is too simplistic because the DNA letter change alone does not tell the full biological story. A variant in an exon may or may not change the protein in an important way, depending on the codon, transcript, and downstream consequence. A variant near an exon–intron boundary may matter because it could disrupt splicing and change how the mature transcript is assembled. The same gene can have more than one transcript, so transcript context matters as well as location. Clinical genomics therefore needs more than “where is the variant?” reasoning. It needs biological context linking DNA change to transcript and possible protein effect."
  },
  whatThisMiniCaseIsTesting: {
    title: "What this mini case is testing",
    body:
      "This case is testing whether the learner can integrate the main Module 4 ideas:\n\n• DNA stores the original information\n• genes are functional regions within DNA\n• transcripts are RNA copies of genes\n• proteins are downstream functional products\n• splicing affects how mature transcripts are assembled\n• a DNA change cannot be understood fully from raw sequence alone"
  },
  goodPerformanceLooksLike: {
    title: "What “good performance” looks like",
    body:
      "The learner has done well if they can recognise that:\n\n• exonic does not automatically mean “more important”\n• non-exonic does not automatically mean “irrelevant”\n• splice-related changes may matter through transcript processing\n• transcript context can change how a variant is understood\n• the biology between DNA and protein is exactly why genomic variants need interpretation context"
  }
};