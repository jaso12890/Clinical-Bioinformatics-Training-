export const module7Quiz = [
    {
      question:
        "A clinician says: “This phenotype is very strongly associated with a well-defined group of genes, but whole genome sequencing must still be the best first test because it covers the most DNA.” Which response is best?",
      options: [
        "Correct, because the broadest test is always the most clinically appropriate",
        "Incomplete, because a focused panel may be the better test when the clinical question is already tightly directed at a known set of genes",
        "Correct, because smaller tests are mainly outdated versions of genome sequencing",
        "Incomplete only because exome sequencing is always better than both panel and genome testing"
      ],
      answerIndex: 1,
      explanation:
        "Module 7 teaches that the best test is the most appropriate one for the clinical question, not automatically the broadest one. A focused panel can be the better first test when the phenotype already points strongly toward a curated set of relevant genes."
    },
    {
      question:
        "Which option best distinguishes whole exome sequencing from whole genome sequencing?",
      options: [
        "WES and WGS both look at all genomic regions equally, but WGS is faster",
        "WES covers the coding regions of all genes, while WGS covers coding and non-coding regions across the genome",
        "WES covers only a selected disease panel, while WGS covers all coding genes",
        "WES and WGS differ only in file format, not biological scope"
      ],
      answerIndex: 1,
      explanation:
        "Whole exome sequencing focuses mainly on coding regions, while whole genome sequencing covers the entire genome, including non-coding DNA."
    },
    {
      question:
        "A negative exome result is reported. Which conclusion is the safest?",
      options: [
        "A genetic cause has now been ruled out",
        "No relevant coding-region finding was detected within what the exome test and its analysis pathway assessed, but some genetic explanations may still remain",
        "The sequencing must have failed technically",
        "Only mitochondrial disease now remains possible"
      ],
      answerIndex: 1,
      explanation:
        "A negative exome result does not rule out all genetic explanations. It means no relevant finding was detected within what the exome test and its analysis pathway were able to assess."
    },
    {
      question:
        "Which statement best reflects what Module 7 teaches about variant detection strength?",
      options: [
        "All sequencing-based tests detect all variant classes equally well once coverage is high",
        "Panels, exomes, and genomes are all generally strong for small variants in assessed regions, but differ more for CNVs, structural variants, and repeat-related questions",
        "Genome sequencing is only useful for non-coding variants",
        "Panel sequencing is always strongest for structural rearrangements"
      ],
      answerIndex: 1,
      explanation:
        "Panels, exomes, and genomes overlap for small variants in the regions they assess, but they differ more clearly for CNVs, structural variants, and repeat-related questions."
    },
    {
      question:
        "A learner says: “If I’m given a VCF, I don’t really need to know whether it came from a panel, exome, or genome — the file tells me what variants are there.” What is the best correction?",
      options: [
        "Correct, because file format matters more than assay origin",
        "Incomplete, because the same file format can come from assays with very different scope, variant-detection strengths, and analysis limits",
        "Incorrect, because VCFs are only produced from whole genome sequencing",
        "Incorrect only because BAM files matter more than VCFs"
      ],
      answerIndex: 1,
      explanation:
        "A VCF may look similar across cases, but the assay behind it determines what was in scope, what was likely to be detected, and what may still have been missed."
    },
    {
      question:
        "Which scenario best fits a reason to consider a broader test rather than a focused panel?",
      options: [
        "The phenotype points very strongly to one well-defined disease group with a short, curated gene list",
        "The suspected condition could involve many possible genes, and a narrow targeted approach may miss relevant coding-region candidates",
        "The only goal is to minimise interpretation burden as much as possible",
        "The service pathway specifically prohibits broader testing for the indication"
      ],
      answerIndex: 1,
      explanation:
        "Broader tests are more useful when the likely explanation is genetically heterogeneous or when the likely gene is unclear."
    },
    {
      question:
        "Which statement is most accurate about generated data versus analysed data?",
      options: [
        "They are always the same thing",
        "Generated data may be broader than the subset routinely analysed, for example when virtual panels are applied to exome or genome data",
        "Only research pipelines distinguish between them",
        "Generated data is always smaller than analysed data"
      ],
      answerIndex: 1,
      explanation:
        "Generated data and analysed data are not always the same. Exome or genome data may be produced broadly while routine analysis focuses on a narrower subset."
    },
    {
      question:
        "A patient’s suspected diagnosis could be caused by a non-coding regulatory variant. Which statement is the best beginner-level implication?",
      options: [
        "A coding-focused test such as WES may be less suitable than a test that includes non-coding regions",
        "A panel is automatically the best choice because it is more targeted",
        "Non-coding variants are irrelevant in clinical genomics",
        "Any sequencing-based test will cover non-coding regions equally well"
      ],
      answerIndex: 0,
      explanation:
        "If non-coding biology matters, the difference between coding-focused testing and genome-wide coverage becomes important."
    },
    {
      question:
        "What is the best reason that QC should be interpreted differently depending on the assay?",
      options: [
        "Because QC is mostly about storage space rather than biology",
        "Because coverage expectations, region scope, and realistic variant detection depend on what test was used",
        "Because only WGS requires QC",
        "Because QC replaces the need to know the clinical question"
      ],
      answerIndex: 1,
      explanation:
        "QC is assay-aware. Different tests have different coverage patterns, target regions, and intended variant-detection strengths."
    },
    {
      question: "What is the best overall summary of Module 7?",
      options: [
        "The broadest test is usually the best test, and negative results are mostly definitive",
        "Test choice matters because different assays cover different genomic territory, support different variant classes, and shape the meaning of downstream files and results",
        "Panels, exomes, and genomes mainly differ in price rather than clinical use",
        "Once sequencing has been performed, the original clinical question becomes much less important"
      ],
      answerIndex: 1,
      explanation:
        "That is the integrated lesson of Module 7: assay choice shapes what is covered, what is detectable, what may be missed, and how later files, QC, filtering, and negative results should be interpreted."
    }
  ];