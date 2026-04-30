export const module11MiniCase = {
    title: "Module 11 Mini Case: The variant looks interesting, but could the signal be misleading?",
    description:
      "Apply Module 11 reasoning to a realistic artefact-awareness problem where biological appeal and technical trustworthiness do not point equally strongly in the same direction.",
    introSections: [
      {
        title: "Mini case overview",
        body:
          "This mini case is designed to feel more like a real artefact-awareness problem than a simple recall test.\n\nThe learner is not being asked to decide final pathogenicity or make a diagnosis.\n\nInstead, they are being asked to apply the main ideas from Module 11:\n\n• artefacts can look plausible, not obviously fake\n• high-homology regions can create ambiguous mapping\n• repeats and low-complexity sequence can distort local calling\n• contamination can create mixed or low-level signals\n• caller/filter outputs can give false reassurance\n• artefact awareness should change trust, prioritisation, review, and escalation"
      }
    ],
    caseScenario: {
      title: "Case scenario",
      body:
        "A trainee is reviewing two candidate variants from the same rare disease case.\n\nVariant A\n\n• sits in a gene that is relevant, though not the very top biological match\n• comes from a technically clean-looking region\n• has coherent read support\n• no obvious artefact clues\n• no known high-homology warning nearby\n\nVariant B\n\n• sits in a gene that looks more biologically attractive\n• appears in the VCF with some supporting reads\n• but the region is known to have a highly similar pseudogene/paralog\n• mapping looks less comfortable\n• the local sequence context is also somewhat repetitive\n• the evidence pattern feels harder to trust cleanly\n\nThe trainee says:\n\n“Variant B is in the better gene, so it should probably be treated as the stronger candidate.”\n\nA senior colleague replies:\n\n“Maybe biologically. But technically, it may be more vulnerable to artefact.”\n\nThe learner’s task is to explain why the colleague is right to separate biological appeal from technical trustworthiness."
    },
    learnerTask: {
      title: "Learner task",
      body: "Read the case and answer the questions below."
    },
    steps: [
      {
        title: "Question 1",
        content: [],
        question: "What is the main mistake in the trainee’s reasoning?",
        options: [
          "Assuming that the most biologically attractive gene automatically gives the most technically trustworthy call",
          "Assuming that repeats only matter for structural variants",
          "Assuming that VCF files never contain artefacts",
          "Assuming that pseudogenes only affect RNA analysis"
        ],
        answerIndex: 0,
        explanation:
          "Module 11 teaches that biological attractiveness and technical trustworthiness are different questions. A variant can be in a very compelling gene and still be misleading if the evidence comes from a difficult region such as a pseudogene-associated or repetitive context."
      },
      {
        title: "Question 2",
        content: [],
        question: "Why does the high-homology region around Variant B matter?",
        options: [
          "Because any variant in a duplicated region is automatically false",
          "Because reads may map ambiguously, so apparent support may not come uniquely from the intended gene",
          "Because high homology only lowers coverage, not mapping confidence",
          "Because pseudogenes prevent variant calling completely"
        ],
        answerIndex: 1,
        explanation:
          "Recent work on pseudogene-associated errors and highly similar paralogous genes shows that short reads can map ambiguously in these regions, leading to false positives and misleading support."
      },
      {
        title: "Question 3",
        content: [],
        question: "Why does the repetitive local sequence context around Variant B add further concern?",
        options: [
          "Because repetitive sequence can make local alignment and variant representation less stable",
          "Because repetitive sequence proves contamination",
          "Because repetitive regions can only contain benign variants",
          "Because low-complexity sequence affects only long-read platforms"
        ],
        answerIndex: 0,
        explanation:
          "Low-complexity and repetitive sequence are known sources of calling difficulty. They can produce unstable local alignment, misleading indel/SNV representation, and both false positives and false negatives."
      },
      {
        title: "Question 4",
        content: [],
        question: "What is the safest way to think about Variant B?",
        options: [
          "It must be false and should always be discarded immediately",
          "It is automatically stronger than Variant A because the gene is a better fit",
          "It may still matter, but it should be handled more cautiously because the evidence is more vulnerable to artefact",
          "It should be trusted because it appears in the VCF with read support"
        ],
        answerIndex: 2,
        explanation:
          "Module 11 does not teach “difficult region = always false.” It teaches that suspicious context should lower comfort, increase review, and sometimes change prioritisation or escalation."
      },
      {
        title: "Question 5",
        content: [],
        question: "What is the safest overall conclusion from this case?",
        options: [
          "The most biologically attractive variant should always be prioritised first",
          "Technical artefact risk should be considered separately from biological interest, and calls from difficult regions deserve more caution even if they are attractive candidates",
          "PASS-like output is enough to overrule difficult-region concerns",
          "Variant A should be assumed causal because it is technically cleaner"
        ],
        answerIndex: 1,
        explanation:
          "This is the integrated lesson of Module 11: difficult-region artefacts can distort evidence, so trust in the call should be adjusted before strong clinical weight is placed on it."
      }
    ],
    shortWrittenResponseTask: {
      title: "Short written response task",
      body:
        "Ask the learner to answer this in 5–7 sentences:\n\nWhy is it too simplistic to say, “Variant B is in the better gene, so it is the stronger candidate”?"
    },
    strongAnswer: {
      title: "What a strong answer should include",
      body:
        "A strong learner answer would say something like:\n\nIt is too simplistic because biological appeal and technical trustworthiness are different questions. Variant B may be in a more attractive gene, but it sits in a technically difficult context with a highly similar pseudogene/paralog and repetitive local sequence. Those features can make short-read mapping and local variant calling less reliable, so the apparent support may be misleading. Variant A is in a cleaner region and has more comfortable technical evidence, which makes it safer to trust as sequence evidence. That does not prove Variant A is the diagnosis or prove Variant B is false. It means Variant B should be handled more cautiously, reviewed more carefully, and not automatically treated as the stronger candidate just because the gene looks better."
    },
    whatThisMiniCaseIsTesting: {
      title: "What this mini case is testing",
      body:
        "This case is testing whether the learner can integrate the main Module 11 ideas:\n\n• artefacts can be plausible-looking\n• high-homology regions can create ambiguous mapping\n• repetitive sequence can make local evidence less stable\n• technically difficult context should change trust\n• biological attractiveness should not automatically override artefact concerns\n• suspicious calls may need caution, deeper review, or escalation rather than blind acceptance"
    },
    goodPerformanceLooksLike: {
      title: "What “good performance” looks like",
      body:
        "The learner has done well if they can recognise that:\n\n• the trainee is over-weighting biological appeal\n• Variant B may be more artefact-prone because of its context\n• Variant A is technically safer to trust as evidence\n• suspicion should increase caution and review, not always trigger automatic rejection\n• safe clinical bioinformatics means asking not only “is this gene interesting?” but also “what could be fooling me technically?”"
    },
    conclusion: [
      "This mini case brings together the key ideas from Module 11: artefacts are often plausible-looking, difficult genomic contexts can distort evidence, and tidy-looking outputs do not automatically remove the need for sceptical technical review.",
      "The main lesson is that biological attractiveness should not automatically override artefact concerns, and technically difficult calls should be handled with more caution, deeper review, and sometimes escalation."
    ]
  };