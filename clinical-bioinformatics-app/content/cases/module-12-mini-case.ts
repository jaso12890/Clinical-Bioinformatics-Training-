export const module12MiniCase = {
    title: "Module 12 Mini Case: The metrics look fine, but the reads do not",
    description:
      "Apply Module 12 reasoning to a realistic read-review problem where two variants look similar in the VCF but differ in how reassuring the aligned-read evidence actually is.",
    introSections: [
      {
        title: "Mini case overview",
        body:
          "This mini case is designed to feel more like a real read-review problem than a recall exercise.\n\nThe learner is not being asked to make a final diagnosis or formal variant classification.\n\nInstead, they are being asked to apply the main ideas from Module 12:\n\n• VCF metrics are summaries\n• BAM/CRAM review shows the read-level evidence\n• reassuring calls should usually look reassuring in the reads\n• suspicious patterns such as strand-only support, end-of-read clustering, clipping, and unstable local alignment should reduce comfort\n• visual review should affect trust, prioritisation, communication, and escalation"
      }
    ],
    caseScenario: {
      title: "Case scenario",
      body:
        "A trainee is reviewing two candidate heterozygous variants from the same rare disease case.\n\nVariant A\nThe VCF looks reassuring:\n• good depth\n• plausible allele balance\n• strong genotype confidence\n• PASS flag\n\nWhen the trainee looks at the aligned reads, the support also looks reassuring:\n• multiple alternate-supporting reads\n• support on both strands\n• reads look comfortably mapped\n• no obvious clipping\n• local alignment looks stable.\n\nVariant B\nThe VCF also looks fairly reassuring:\n• similar depth\n• plausible-looking allele support\n• decent genotype confidence\n• PASS flag\n\nBut when the trainee checks the aligned reads, the pattern is less comfortable:\n• most alternate support is on one strand\n• several alternate-supporting reads are near read ends\n• some supporting reads look soft-clipped near the site\n• the local evidence pattern feels less stable.\n\nThe trainee says:\n\n“Both variants passed filters and both have decent metrics, so they should probably be treated as equally strong.”\n\nA senior colleague replies:\n\n“Not necessarily. The reads for Variant B are telling a less reassuring story.”\n\nThe learner’s task is to explain why the colleague is right."
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
          "Assuming that similar-looking VCF metrics always mean equally trustworthy read-level evidence",
          "Assuming that soft clipping proves pathogenicity",
          "Assuming that BAM files are less reliable than VCF files",
          "Assuming that strand bias only matters in RNA data"
        ],
        answerIndex: 0,
        explanation:
          "Module 12 teaches that the VCF is a summary layer, while BAM/CRAM review shows the evidence pattern behind the summary. Two calls can look similar in the VCF but feel very different once the reads are inspected directly."
      },
      {
        title: "Question 2",
        content: [],
        question: "Which feature in Variant B is most clearly a read-level warning sign?",
        options: [
          "It appears in the VCF",
          "It has some alternate-supporting reads",
          "Most alternate support is on one strand and several supporting reads are near read ends or soft-clipped",
          "It has a genotype call"
        ],
        answerIndex: 2,
        explanation:
          "Strong strand imbalance, end-of-read clustering, and soft clipping are all classic suspicious read patterns that reduce technical comfort even when some alternate support exists."
      },
      {
        title: "Question 3",
        content: [],
        question: "Why is Variant A more technically reassuring than Variant B?",
        options: [
          "Because Variant A must therefore be clinically causal",
          "Because the VCF and the read-level evidence are telling the same clean, coherent story for Variant A",
          "Because Variant A has no alternate reads",
          "Because Variant A does not need any further clinical thinking"
        ],
        answerIndex: 1,
        explanation:
          "A strong Module 12 pattern is when the metrics and the reads reinforce each other. Variant A looks reassuring in both layers, while Variant B shows a mismatch between summary comfort and read-level discomfort."
      },
      {
        title: "Question 4",
        content: [],
        question: "What is the safest way to think about Variant B?",
        options: [
          "It must be false and should always be discarded immediately",
          "It is equally strong because the VCF passed it",
          "It may still matter, but the suspicious read pattern should reduce comfort and make the reviewer more cautious about trust and prioritisation",
          "It is automatically more important than Variant A because it has alternate support"
        ],
        answerIndex: 2,
        explanation:
          "Module 12 does not teach “suspicious pattern = automatic rejection.” It teaches that suspicious read-level evidence should lower confidence and change how cautiously the call is handled."
      },
      {
        title: "Question 5",
        content: [],
        question: "What is the safest overall conclusion from this case?",
        options: [
          "PASS and decent summary metrics are enough to treat two calls as equally strong",
          "Visual review can reveal important differences in technical trustworthiness even when VCF summaries look similar",
          "Any call with clipping is false",
          "Read review matters only after final clinical interpretation"
        ],
        answerIndex: 1,
        explanation:
          "This is the integrated lesson of Module 12: visual review exists because summary fields can hide important differences in how comfortable the read-level evidence actually is."
      }
    ],
    shortWrittenResponseTask: {
      title: "Short written response task",
      body:
        "Ask the learner to answer this in 5–7 sentences:\n\nWhy is it too simplistic to say, “Both variants passed filters and have decent metrics, so they should be treated as equally strong”?"
    },
    strongAnswer: {
      title: "What a strong answer should include",
      body:
        "A strong learner answer would say something like:\n\nIt is too simplistic because VCF metrics are summaries, not the full evidence. Two calls can look similar in the VCF but still look very different when the aligned reads are reviewed directly. Variant A is more reassuring because the read-level evidence is coherent: support is present on both strands, the reads look comfortably mapped, and the local alignment looks stable. Variant B is less comfortable because the alternate support is mostly one-sided, clustered near read ends, and affected by soft clipping, which are all warning signs. That does not automatically prove Variant B is false, but it should reduce confidence in the call as technical evidence. Visual review therefore changes how strongly each call should be trusted and carried forward."
    },
    whatThisMiniCaseIsTesting: {
      title: "What this mini case is testing",
      body:
        "This case is testing whether the learner can integrate the main Module 12 ideas:\n\n• VCF and BAM/CRAM are complementary\n• reassuring metrics do not automatically guarantee reassuring reads\n• suspicious read patterns can weaken confidence even when a call passed filters\n• visual review affects trust and prioritisation\n• suspicious evidence should usually trigger caution, not blind acceptance or blind rejection"
    },
    goodPerformanceLooksLike: {
      title: "What “good performance” looks like",
      body:
        "The learner has done well if they can recognise that:\n\n• the trainee is over-trusting the summary layer\n• Variant A is technically stronger because the reads and metrics agree\n• Variant B deserves more caution because the read pattern is less comfortable\n• visual review is useful precisely when the VCF looks tidy but the evidence may not be\n• safe clinical bioinformatics means asking not only “what does the VCF say?” but also “what do the reads actually look like?”"
    },
    conclusion: [
      "This mini case brings together the key ideas from Module 12: VCF metrics are useful summaries, but aligned-read review can reveal important technical warning signs that the summary layer does not fully show.",
      "The main lesson is that visual review should change how strongly a call is trusted as evidence, which then affects prioritisation, wording, and whether further review or escalation is needed."
    ]
  };