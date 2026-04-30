export const module3MiniCase = {
    title: "Module 3 Mini Case: Service navigation in the NHS Genomic Medicine Service",
    description:
      "Work through a short NHS service-pathway scenario step by step and apply the key ideas from Module 3.",
    steps: [
      {
        title: "A case enters the pathway",
        content: [
          "A paediatric clinician is looking after a child with a suspected rare inherited disorder.",
          "The child has developmental difficulties, some dysmorphic features, and a family history that makes a monogenic condition seem possible.",
          "The clinician says to the team:",
          "“This looks genetically interesting. Let’s just send the sample for the broadest genomic test we can get and let the analysis team work out the rest.”",
          "A trainee in Clinical Bioinformatics hears this and starts thinking about the pathway.",
          "The trainee understands that genomic testing may well be appropriate, but also realises that the case cannot safely be reduced to “interesting case → broadest possible test → analysis.”"
        ],
        question:
          "What is the main problem with the clinician’s statement?",
        options: [
          "It assumes that scientific interest alone is enough to determine the right NHS genomic test",
          "It incorrectly assumes that Clinical Bioinformatics should decide the initial clinical indication",
          "It shows that rare disease cases should never go through GLHs",
          "It proves that multidisciplinary input is unnecessary when the phenotype seems strong"
        ],
        answerIndex: 0,
        explanation:
          "The central problem is the assumption that because a case is “genetically interesting,” the team should simply choose the broadest possible test. NHS England says the Test Directory sets out which genomic tests are commissioned and which patients are eligible, and that tests should be requested where a result is highly likely to change management for the patient or family. So the first issue is service appropriateness, not technical breadth."
      },
      {
        title: "The first service-entry question",
        content: [
          "The trainee knows that NHS genomic testing sits inside the Genomic Medicine Service.",
          "The trainee also knows that the National Genomic Test Directory defines commissioned tests and patient eligibility, and that the request will need to enter the right service pathway."
        ],
        question:
          "Before any data analysis happens, which question is most important at the service-entry stage?",
        options: [
          "Which pipeline version would be best if whole genome sequencing is used",
          "Whether the case fits the appropriate commissioned Test Directory pathway and eligibility criteria",
          "Whether the bioinformatics team prefers panel, exome, or genome data",
          "Whether the child’s phenotype would make the case interesting for future research"
        ],
        answerIndex: 1,
        explanation:
          "At the start of the pathway, the service question is whether the request fits the commissioned test framework and eligibility criteria. That is what the Test Directory is for. The other options jump too quickly into downstream technical or research thinking."
      },
      {
        title: "Where GLHs fit",
        content: [
          "The trainee also knows that the request cannot simply jump from clinical interest to analysis.",
          "The case will need to move through the appropriate service pathway, and the national genomic testing service is delivered through seven Genomic Laboratory Hubs."
        ],
        question:
          "Where do Genomic Laboratory Hubs fit most accurately in this case?",
        options: [
          "They mainly become relevant only after all final clinical decisions are complete",
          "They are part of the national genomic testing infrastructure through which the service is delivered",
          "They replace the need for any local request pathway or multidisciplinary input",
          "They exist mainly to support academic discovery projects linked to genomics"
        ],
        answerIndex: 1,
        explanation:
          "NHS England states that the national genomic testing service is delivered through a network of seven GLHs, each responsible for coordinating services for part of the country. So GLHs are core service infrastructure, not just sample destinations or research units."
      },
      {
        title: "Why the pathway may still need shared expertise",
        content: [
          "The trainee recognises that this case may involve broader clinical and multidisciplinary input, not just technical analysis.",
          "Even if genomic testing seems likely to be appropriate, the wider service model still matters."
        ],
        question:
          "Why might this case still require multidisciplinary input even if a genomic test seems likely to be appropriate?",
        options: [
          "Because GLHs are not allowed to process rare disease referrals without an MDT for every case",
          "Because NHS genomics uses shared expertise across service structures, and complex cases may need clinical genomic input alongside testing processes",
          "Because multidisciplinary working only exists to approve software settings",
          "Because Clinical Bioinformatics should avoid understanding the clinical context at all"
        ],
        answerIndex: 1,
        explanation:
          "Service specification documents describe Clinical Genomic Services working with GLHs and providing specialist input into clinical genomic MDTs and Genomic Test Advisory Boards. The point is not that every case follows an identical meeting route, but that the service model is multidisciplinary and complex cases may need more than one type of expertise."
      },
      {
        title: "Where Clinical Bioinformatics fits",
        content: [
          "The trainee understands that Clinical Bioinformatics is important in this case, but not in a way that replaces the whole service structure.",
          "The role sits within the pathway rather than above it."
        ],
        question:
          "What is the most accurate description of where Clinical Bioinformatics fits in this case?",
        options: [
          "It should independently decide which commissioned test the NHS should offer nationally",
          "It mainly contributes once the pathway reaches structured genomic data analysis, technical evidence handling, and workflow support",
          "It replaces the role of clinicians once sequencing has been requested",
          "It should stay completely separate from service-pathway thinking and focus only on files"
        ],
        answerIndex: 1,
        explanation:
          "Clinical Bioinformatics mainly contributes around data handling, analysis logic, workflow support, technical review, and useful structured outputs. But it still sits within a wider commissioned and multidisciplinary service pathway rather than outside it. That is the safest and most accurate role framing for this module."
      }
    ],
    conclusion: [
      "This mini case brings together the key ideas from Module 3: the NHS Genomic Medicine Service as a national clinical service, the National Genomic Test Directory, Genomic Laboratory Hubs, multidisciplinary working, and where Clinical Bioinformatics fits in the pathway.",
      "The main lesson is that it would be unsafe or inaccurate to treat this case as simply “interesting phenotype → broadest test possible → analysis team decides the rest”.",
      "The case needs to fit the National Genomic Test Directory framework, which defines which tests are commissioned and which patients are eligible.",
      "The request also has to move through the right service pathway rather than jumping straight to analysis.",
      "GLHs are part of the national testing infrastructure, and the wider service may involve multidisciplinary clinical genomic input as well as laboratory and bioinformatics contributions.",
      "Clinical Bioinformatics is important in the downstream analysis part of the pathway, but it does not replace commissioning, service routing, or broader clinical review."
    ]
  };