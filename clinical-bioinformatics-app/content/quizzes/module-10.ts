export const module10Quiz = [
    {
      question:
        "A learner says: “This variant is in a gene that fits the phenotype very well, so the technical metrics matter less.” Which response is best?",
      options: [
        "Correct, because phenotype fit can compensate for weak technical evidence",
        "Incomplete, because biological plausibility and technical confidence are different questions, and weak evidence can still make a call untrustworthy",
        "Correct, because rare disease calls are mainly judged by phenotype first",
        "Incomplete only because transcript choice also matters"
      ],
      answerIndex: 1,
      explanation:
        "Module 10’s first and most important lesson is that technical confidence comes before downstream biological reasoning. A variant can look clinically interesting and still be technically weak if the read support, genotype confidence, mapping, or strand pattern is poor."
    },
    {
      question:
        "Two heterozygous calls both have DP = 24. Call A has AD = 12,12. Call B has AD = 23,1. What is the best interpretation?",
      options: [
        "They are equally convincing because depth is identical",
        "Call B is automatically false because the balance is imperfect",
        "Call A looks more comfortable for a heterozygous genotype because the allele support is more plausible, while Call B deserves more caution",
        "Call A is worse because equal allele support usually indicates contamination"
      ],
      answerIndex: 2,
      explanation:
        "DP tells you how much coverage is present, but AD and allele balance tell you how the evidence is distributed between alleles. Heterozygous calls often centre around more balanced support, while extreme imbalance can weaken confidence and prompt closer review."
    },
    {
      question: "Which statement best distinguishes QUAL from GQ?",
      options: [
        "QUAL is genotype-level and GQ is site-level",
        "QUAL measures site-level confidence that the locus is variant, while GQ measures confidence in a specific sample’s genotype call at that site",
        "They are different names for the same metric in different callers",
        "QUAL is only used for indels, while GQ is only used for SNVs"
      ],
      answerIndex: 1,
      explanation:
        "GATK explicitly states that QUAL refers to the variant site, while GQ refers to the sample genotype at that site."
    },
    {
      question:
        "A call has high depth, high GQ, and a reassuring-looking QD, but most alternate support is on one strand and the aligned reads look suspicious locally. What is the safest conclusion?",
      options: [
        "The call is automatically strong because several summary metrics look good",
        "The strand and read-pattern concerns still matter, so the call may be less comfortable than the summary metrics alone suggest",
        "Strand bias only matters when depth is low",
        "Read-level review is unnecessary when QD is good"
      ],
      answerIndex: 1,
      explanation:
        "This is exactly the kind of integrative reasoning Module 10 is meant to teach. Summary metrics can look strong while read-level warning signs still suggest artefact or technical discomfort. GATK includes strand-bias annotations such as FS and SOR for this reason, and IGV review is used to inspect such patterns directly."
    },
    {
      question: "Why can low mapping quality weaken confidence in a variant call?",
      options: [
        "Because low MQ means the alternate allele is always a sequencing error",
        "Because reads that may map to multiple places are weaker evidence that the signal truly belongs at the site being evaluated",
        "Because mapping quality is just another name for base quality",
        "Because MQ only matters for structural variants"
      ],
      answerIndex: 1,
      explanation:
        "Mapping quality reflects confidence that the read has been placed correctly. If mapping is uncertain, then the variant support is weaker evidence for variation at that specific locus."
    },
    {
      question:
        "Why is QD often preferred to raw QUAL as a filtering clue in some workflows?",
      options: [
        "Because QD is a genotype-level replacement for GQ",
        "Because QUAL can be inflated by deep coverage, while QD normalizes variant confidence by depth",
        "Because QD ignores allele depth entirely",
        "Because QD is only used in RNA-seq data"
      ],
      answerIndex: 1,
      explanation:
        "GATK explains that QD is QUAL normalized by allele depth and recommends it over raw QUAL or DP directly for filtering because deep coverage can inflate apparent site confidence."
    },
    {
      question:
        "A learner says: “If one metric looks bad, the call should always be rejected immediately.” What is the best correction?",
      options: [
        "Correct, because a single bad metric proves the call is false",
        "Incomplete, because one warning sign should trigger caution and integrated review, not always automatic rejection",
        "Correct, unless the phenotype fit is very strong",
        "Incomplete only because GQ is the only metric that really matters"
      ],
      answerIndex: 1,
      explanation:
        "Module 10 teaches both sides of the same principle: one reassuring metric is not enough, and one worrying metric is not always enough either. GATK’s suggested filtering thresholds are generic starting points rather than universal truth rules."
    },
    {
      question:
        "What is the best reason that technical confidence and clinical relevance should be kept separate?",
      options: [
        "Because clinically relevant variants are always technically strong",
        "Because technically strong only tells you the call looks trustworthy as evidence; it does not tell you whether the variant explains the patient",
        "Because technical confidence matters only in laboratory validation",
        "Because phenotype fit makes technical review unnecessary"
      ],
      answerIndex: 1,
      explanation:
        "A technically strong call may still be too common, a poor phenotype fit, or biologically irrelevant. Technical confidence is necessary for trust in the evidence, but it is not the same as pathogenicity or diagnosis."
    },
    {
      question:
        "Two biologically plausible candidate variants are being compared. Variant A is technically strong across depth, balance, GQ, mapping, and strand support. Variant B is technically messy but in a highly attractive gene. Which approach best matches Module 10?",
      options: [
        "Treat them as equally strong because biology matters more than metrics",
        "Prioritize Variant A as stronger evidence, while handling Variant B more cautiously and possibly escalating or reviewing it further before giving it similar weight",
        "Reject Variant B automatically as false",
        "Ignore the technical metrics because the final classifier will handle them later"
      ],
      answerIndex: 1,
      explanation:
        "Technical confidence is used in practice to decide how much trust a call deserves as evidence, which directly affects prioritization, caution, and escalation. Technically weak does not always mean false, but it should change how the call is handled."
    },
    {
      question: "What is the best overall summary of Module 10?",
      options: [
        "Strong calls can usually be identified from one good metric",
        "A call is technically convincing when multiple lines of evidence fit together coherently, and that judgment should guide how strongly the call is trusted and carried forward",
        "Technical metrics mainly matter after clinical interpretation is complete",
        "High QUAL and high GQ together usually prove clinical relevance"
      ],
      answerIndex: 1,
      explanation:
        "That is the integrated lesson of the module: technical confidence is a pattern-based judgment about evidence quality, and this judgment should shape prioritization, caution, review, and escalation."
    }
  ];