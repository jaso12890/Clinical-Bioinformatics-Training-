export const module9MiniCase = {
    title: "Module 9 Mini Case: The same variant looks different in two reports",
    description:
      "Apply Module 9 reasoning to a realistic clinical genomics context problem where the same biological variant looks different because the reports use different valid reference frameworks.",
    introSections: [
      {
        title: "Mini case overview",
        body:
          "This mini case is designed to feel more like a real clinical genomics description-context problem than a recall exercise.\n\nThe learner is not being asked to classify a variant or decide whether it is pathogenic.\n\nInstead, they are being asked to apply the main ideas from Module 9:\n\n• genomic coordinates depend on the reference build\n• one gene can have multiple transcripts\n• transcript choice can change cDNA and protein descriptions\n• HGVS and annotation are related but not the same\n• different-looking reports do not automatically mean a true disagreement"
      }
    ],
    caseScenario: {
      title: "Case scenario",
      body:
        "A trainee is reviewing a familial variant that appears in two different documents.\n\nReport A says:\n\n• the variant is on GRCh37\n• it is described at one genomic coordinate\n• it uses one transcript for the gene\n• it gives one c. description and one predicted protein consequence\n\nReport B says:\n\n• the variant is on GRCh38\n• it is described at a different genomic coordinate\n• it uses a different transcript for the same gene\n• it gives a different c. description and a different predicted transcript consequence\n\nThe trainee says:\n\n“These reports do not match.\nOne of them must be wrong.”\n\nA senior colleague says:\n\n“Not necessarily.\nBefore deciding that, you need to check the build, transcript, and annotation context.”\n\nThe learner’s task is to explain why the trainee’s conclusion is too quick."
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
          "What is the main problem with the trainee’s conclusion?",
        options: [
          "It assumes that the same biological variant must always have one identical-looking description in every report",
          "It proves that HGVS should not be used in clinical genomics",
          "It shows that transcript databases are unreliable",
          "It means GRCh37 and GRCh38 are interchangeable"
        ],
        answerIndex: 0,
        explanation:
          "The core mistake is assuming that one biological variant must always look identical in writing. Module 9 teaches that descriptions can change with build and transcript context, even when the underlying biology is the same."
      },
      {
        title: "Question 2",
        content: [],
        question:
          "Why might the genomic coordinates differ between Report A and Report B?",
        options: [
          "Because genomic coordinates are random between laboratories",
          "Because the reports may be using different genome builds, such as GRCh37 and GRCh38",
          "Because transcript choice changes chromosome numbering",
          "Because HGVS removes the need for coordinates"
        ],
        answerIndex: 1,
        explanation:
          "Genome builds are different coordinate systems. The same biological variant can therefore appear at different genomic positions when mapped to different assemblies."
      },
      {
        title: "Question 3",
        content: [],
        question:
          "Why might the c. descriptions differ between the two reports?",
        options: [
          "Because cDNA descriptions are written relative to a chosen transcript, and different transcripts can have different numbering systems",
          "Because cDNA descriptions ignore exon structure",
          "Because every gene has only one valid transcript",
          "Because cDNA descriptions are mainly determined by genome build alone"
        ],
        answerIndex: 0,
        explanation:
          "Module 9 teaches that transcript choice matters. Different transcripts can change exon structure and numbering, so the same genomic variant can have different cDNA descriptions."
      },
      {
        title: "Question 4",
        content: [],
        question:
          "Why might one report give a different predicted transcript or protein consequence from the other?",
        options: [
          "Because consequence terms are mostly arbitrary",
          "Because the same genomic variant can fall into different functional contexts depending on the transcript used",
          "Because only pathogenic variants have transcript-specific consequences",
          "Because annotation tools never use transcript models"
        ],
        answerIndex: 1,
        explanation:
          "A variant can be coding in one transcript and non-coding or differently coding in another. That can change the predicted consequence without changing the underlying DNA event."
      },
      {
        title: "Question 5",
        content: [],
        question:
          "What is the safest overall conclusion from this case?",
        options: [
          "One report must be incorrect because the descriptions differ",
          "The reports may still be describing the same biological variant, and the first step is to compare build, transcript, and annotation context",
          "Different HGVS descriptions always mean different variants",
          "Only the report using the newer build should be trusted"
        ],
        answerIndex: 1,
        explanation:
          "This is the integrated lesson of Module 9. Different-looking descriptions do not automatically mean true disagreement. Context must be checked first."
      }
    ],
    shortWrittenResponseTask: {
      title: "Short written response task",
      body:
        "Ask the learner to answer this in 5–7 sentences:\n\nWhy is it too simplistic to say, “These two reports look different, so one of them must be wrong”?"
    },
    strongAnswer: {
      title: "What a strong answer should include",
      body:
        "A strong learner answer would say something like:\n\nIt is too simplistic because variant descriptions depend on context. If one report uses GRCh37 and the other uses GRCh38, the same biological variant can have different genomic coordinates. If the reports also use different transcripts for the same gene, the cDNA description and predicted consequence can differ as well. That does not automatically mean one report is wrong. It may simply mean the variant has been described relative to different valid reference frameworks. The safest approach is to compare the build, transcript, and annotation context before deciding whether there is a real disagreement."
    },
    whatThisMiniCaseIsTesting: {
      title: "What this mini case is testing",
      body:
        "This case is testing whether the learner can integrate the main Module 9 ideas:\n\n• coordinates depend on the reference build\n• cDNA descriptions depend on the transcript\n• predicted consequences depend on annotation context\n• different-looking reports may still describe the same biological event\n• safe clinical genomics starts by checking context before assuming contradiction"
    },
    goodPerformanceLooksLike: {
      title: "What “good performance” looks like",
      body:
        "The learner has done well if they can recognise that:\n\n• the trainee is over-calling a disagreement\n• build differences can change genomic coordinates\n• transcript differences can change cDNA and consequence descriptions\n• annotation outputs depend on context\n• the right first step is to compare build, transcript, and annotation framework before drawing conclusions"
    },
    conclusion: [
      "This mini case brings together the key ideas from Module 9: genomic coordinates depend on build, one gene can have multiple transcripts, transcript choice can change cDNA and consequence descriptions, and different-looking reports do not automatically represent different biology.",
      "The main lesson is that safe clinical genomics starts by checking reference build, transcript, and annotation context before assuming that two reports truly conflict."
    ]
  };