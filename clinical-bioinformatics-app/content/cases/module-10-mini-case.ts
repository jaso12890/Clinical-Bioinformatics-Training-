export const module10MiniCase = {
    title: "Module 10 Mini Case: Two plausible variants, but only one feels technically strong",
    description:
      "Apply Module 10 reasoning to a realistic technical-confidence review problem where biological appeal and technical evidence do not point equally strongly in the same direction.",
    introSections: [
      {
        title: "Mini case overview",
        body:
          "This mini case is designed to feel more like a real technical-confidence review problem than a simple definition test.\n\nThe learner is not being asked to decide final pathogenicity or make a diagnosis.\n\nInstead, they are being asked to apply the main ideas from Module 10:\n\n• technical confidence is about whether a call deserves trust as data evidence\n• DP, AD, and allele balance must be read together\n• QUAL and GQ are not the same\n• mapping quality, strand bias, and suspicious read patterns matter\n• one reassuring metric is not enough\n• technically strong is not the same as clinically relevant, and technically weak is not automatically false\n\nGATK’s VCF and hard-filtering documentation explicitly distinguish genotype-level and site-level metrics and recommend combining multiple annotations rather than relying on one number alone."
      }
    ],
    caseScenario: {
      title: "Case scenario",
      body:
        "A trainee is reviewing two candidate variants from the same rare disease case.\n\nBoth variants are in genes that look potentially relevant to the phenotype.\n\nVariant A\n\n• DP is solid\n• AD shows good support for both alleles for a heterozygous call\n• allele balance looks plausible\n• GQ is high\n• site-level metrics look comfortable\n• reads map well\n• alternate support is seen on both strands\n• the local read pattern looks clean\n\nVariant B\n\n• the gene looks even more biologically attractive\n• total DP is also reasonable\n• but alternate support is more skewed\n• GQ is lower\n• mapping quality is less comfortable\n• most alternate support comes from one strand\n• the local alignment pattern looks suspicious\n\nThe trainee says:\n\n“Variant B is in the better gene, so it should probably be treated as the stronger candidate.”\n\nA senior colleague replies:\n\n“Maybe biologically. But technically, the evidence is less comfortable.”\n\nThe learner’s task is to explain why the colleague is right to separate technical confidence from biological appeal."
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
          "Assuming that biological attractiveness automatically makes a call technically strong",
          "Assuming that high depth alone proves a variant is causal",
          "Assuming that mapping quality only matters for structural variants",
          "Assuming that VCF metrics are never useful"
        ],
        answerIndex: 0,
        explanation:
          "Module 10 teaches that technical confidence and biological relevance are different questions. A variant can be in a very plausible gene and still be technically weak if the supporting evidence is uncomfortable."
      },
      {
        title: "Question 2",
        content: [],
        question: "Why does Variant A feel more technically comfortable than Variant B?",
        options: [
          "Because Variant A is automatically pathogenic if the metrics are good",
          "Because several independent technical clues point in the same reassuring direction for Variant A, while Variant B shows multiple warning signs",
          "Because genotype quality is the only metric that matters",
          "Because any variant with balanced support must be true"
        ],
        answerIndex: 1,
        explanation:
          "Strong technical confidence usually comes from a coherent pattern across several evidence types, not one metric alone. Variant A shows that coherence; Variant B shows conflicting clues such as skewed support, lower confidence, weaker mapping, and strand bias."
      },
      {
        title: "Question 3",
        content: [],
        question: "Which feature in Variant B is most clearly a technical warning sign?",
        options: [
          "It is in a phenotype-relevant gene",
          "Most alternate support comes from one strand and the local read pattern looks suspicious",
          "The site is heterozygous",
          "It appears in the VCF"
        ],
        answerIndex: 1,
        explanation:
          "GATK’s filtering guidance treats strand-bias annotations as important warning signals, and read-level review literature shows that suspicious local patterns can weaken confidence even when a call looks interesting."
      },
      {
        title: "Question 4",
        content: [],
        question: "What is the safest way to think about Variant B?",
        options: [
          "It must be false and should be discarded immediately",
          "It is automatically stronger than Variant A because the gene is a better fit",
          "It may still be worth noting, but it should be handled more cautiously because the technical evidence is weaker",
          "It should be treated as equally strong as Variant A because both have read support"
        ],
        answerIndex: 2,
        explanation:
          "Module 10 teaches that technically weak does not always mean false, but it should change how the call is prioritized, reviewed, and communicated."
      },
      {
        title: "Question 5",
        content: [],
        question: "What is the safest overall conclusion from this case?",
        options: [
          "The biologically best-looking variant should always be prioritized first",
          "Technical confidence should be judged separately from biological plausibility, and weaker technical evidence should reduce how strongly a call is trusted and carried forward",
          "Any call with reasonable depth is technically strong enough",
          "One suspicious metric is enough to reject a call with certainty"
        ],
        answerIndex: 1,
        explanation:
          "This is the integrated lesson of Module 10: technical confidence tells you how much trust a call deserves as evidence, which affects prioritization, caution, and escalation."
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
        "A strong learner answer would say something like:\n\nIt is too simplistic because biological plausibility and technical confidence are different questions. A variant can be in a very relevant gene and still be supported by weak or suspicious sequencing evidence. In this case, Variant B has several technical warning signs, including more skewed allele support, lower genotype confidence, less comfortable mapping, and strand bias. Variant A, by contrast, shows a more coherent technical pattern across several measures. That does not prove Variant A is the diagnosis, but it does make it safer to trust as sequence evidence. Variant B may still be worth further review, but it should be handled more cautiously rather than treated as equally strong just because the gene looks attractive."
    },
    whatThisMiniCaseIsTesting: {
      title: "What this mini case is testing",
      body:
        "This case is testing whether the learner can integrate the main Module 10 ideas:\n\n• technical confidence is separate from biological appeal\n• multiple reassuring metrics together are stronger than one reassuring metric alone\n• strand bias, mapping concerns, and suspicious read patterns can weaken confidence\n• technically weak does not always mean false\n• technically strong does not always mean clinically causative\n• technical confidence affects prioritization, caution, review, and escalation"
    },
    goodPerformanceLooksLike: {
      title: "What “good performance” looks like",
      body:
        "The learner has done well if they can recognise that:\n\n• the trainee is over-weighting biological relevance\n• Variant A is technically stronger because its evidence is more coherent\n• Variant B may still matter, but its weaker technical profile should lower confidence\n• technical confidence should shape how strongly a call is trusted and communicated\n• safe clinical bioinformatics means separating “interesting” from “technically convincing”"
    },
    conclusion: [
      "This mini case brings together the key ideas from Module 10: technical confidence is about trust in the call as sequence evidence, multiple clues need to be read together, and biologically attractive calls can still be technically weak.",
      "The main lesson is that safe clinical bioinformatics separates biological appeal from technical strength, and then uses technical confidence to guide prioritization, caution, further review, and escalation."
    ]
  };