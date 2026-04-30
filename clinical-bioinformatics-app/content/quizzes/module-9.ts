export const module9Quiz = [
    {
      question:
        "A learner says: “If two reports give different genomic coordinates for what seems to be the same variant, one of them must be wrong.” Which response is best?",
      options: [
        "Correct, because true variants always have one universal coordinate",
        "Incomplete, because the reports may be using different genome builds, so the same biological variant can be described at different genomic positions",
        "Correct, unless one report uses HGVS",
        "Incomplete only because one report may have a different gene symbol"
      ],
      answerIndex: 1,
      explanation:
        "One of the main lessons of Module 9 is that coordinates only make sense relative to a specific build. A difference between GRCh37 and GRCh38 can change the genomic position without changing the underlying biology."
    },
    {
      question:
        "Which option best explains why a cDNA description depends on transcript choice?",
      options: [
        "Because cDNA numbering is random and chosen by each laboratory",
        "Because cDNA descriptions are written relative to a chosen transcript reference sequence, and different transcripts can have different exon structures and numbering systems",
        "Because genomic coordinates automatically determine one fixed cDNA number for every transcript",
        "Because cDNA descriptions are only used for non-coding genes"
      ],
      answerIndex: 1,
      explanation:
        "A cDNA description is transcript-based. If the transcript changes, the numbering system and sometimes the functional context can change too."
    },
    {
      question:
        "A genomic variant falls inside an exon in one transcript, but outside the coding region in another transcript from the same gene. What is the best conclusion?",
      options: [
        "One of the transcripts must be invalid",
        "The same genomic variant can have different transcript-level consequences depending on which transcript is used",
        "This can only happen if the genome build is wrong",
        "Transcript choice is not clinically relevant in this situation"
      ],
      answerIndex: 1,
      explanation:
        "This is a core Module 9 lesson. Multiple transcripts can legitimately place the same genomic change into different functional contexts."
    },
    {
      question:
        "Which statement best distinguishes HGVS from variant annotation?",
      options: [
        "HGVS predicts pathogenicity, while annotation gives the raw sequence reads",
        "HGVS is the system for writing a sequence variant precisely relative to a reference, while annotation adds biological context such as transcript consequence or gene overlap",
        "HGVS and annotation are two names for the same process",
        "HGVS is only used in research, while annotation is only used clinically"
      ],
      answerIndex: 1,
      explanation:
        "HGVS is about correct description. Annotation is about adding context and predicted effects. They are linked, but they are not the same thing."
    },
    {
      question:
        "A learner says: “If a gene has multiple transcripts, that probably means the annotation is unreliable.” What is the best correction?",
      options: [
        "Correct, because a well-annotated gene should have only one transcript",
        "Incomplete, because multiple transcripts are a normal feature of gene annotation and can reflect different splice forms, exon usage, or coding status",
        "Correct, unless the gene is protein-coding",
        "Incomplete only because transcript names differ between RefSeq and Ensembl"
      ],
      answerIndex: 1,
      explanation:
        "Multiple transcripts are normal. The practical question is not whether multiple transcripts should exist, but which transcript is being used for the current description or analysis."
    },
    {
      question: "Why is MANE important in clinical genomics?",
      options: [
        "Because it removes the need to mention transcript identifiers at all",
        "Because it provides matched representative RefSeq and Ensembl/GENCODE transcripts to improve consistency in reporting and annotation",
        "Because it replaces the need for genome builds",
        "Because it ensures every variant has one and only one possible biological consequence"
      ],
      answerIndex: 1,
      explanation:
        "Module 9 teaches that MANE helps standardise transcript choice across major resources, which reduces confusion and improves consistency."
    },
    {
      question:
        "A variant has a valid genomic HGVS description. Which statement is most accurate?",
      options: [
        "That is enough to know the full biological meaning of the variant",
        "That means the variant is already fully clinically interpreted",
        "The variant is precisely named, but annotation is still needed to determine gene, transcript, region, and predicted consequence context",
        "It no longer matters which genome build or transcript was used"
      ],
      answerIndex: 2,
      explanation:
        "A correct HGVS description is essential, but it is not the same as a full annotation or interpretation."
    },
    {
      question:
        "Why can one annotation tool or report show a missense consequence while another shows a non-coding consequence for what seems to be the same variant?",
      options: [
        "Because annotation tools always disagree randomly",
        "Because different transcript selections or transcript sets can place the same genomic variant into different functional contexts",
        "Because consequence terms have no stable meaning",
        "Because only pathogenic variants can have transcript-specific consequences"
      ],
      answerIndex: 1,
      explanation:
        "Transcript choice is one of the main reasons annotation outputs can differ. The same variant may overlap multiple transcripts differently."
    },
    {
      question:
        "What is the safest professional habit when comparing two different-looking variant descriptions in the same gene?",
      options: [
        "Assume one report is wrong",
        "Ignore the transcript and focus only on the protein description",
        "First check the genome build, reference sequence, transcript context, and annotation source before deciding there is a true disagreement",
        "Assume both reports are referring to different patients"
      ],
      answerIndex: 2,
      explanation:
        "This is one of the strongest practical habits Module 9 is meant to build: check context first before concluding there is conflict."
    },
    {
      question: "What is the best overall summary of Module 9?",
      options: [
        "A variant can usually be understood well enough from the gene name alone",
        "Reference build, transcript choice, and annotation context can all change how the same biological variant is described, so that context must be explicit in clinical genomics",
        "HGVS solves all annotation problems by itself",
        "Once a genomic coordinate is known, transcript context no longer matters"
      ],
      answerIndex: 1,
      explanation:
        "That is the integrated lesson of the module: context changes description and sometimes consequence, so precise context is essential."
    }
  ];