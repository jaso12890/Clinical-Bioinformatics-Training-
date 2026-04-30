export const module11Quiz = [
    {
      question:
        "A learner says: “If a variant appears in the VCF and has some read support, it is probably real unless proven otherwise.” Which response is best?",
      options: [
        "Correct, because artefacts usually have no read support at all",
        "Incomplete, because artefacts often look superficially plausible and can still appear as called variants with supporting reads",
        "Correct, unless the site is intronic",
        "Incomplete only because contamination is rare"
      ],
      answerIndex: 1,
      explanation:
        "A central Module 11 lesson is that artefacts are often misleading precisely because they look plausible rather than obviously absurd. Automated pipelines can still emit false positives that need filtering or review."
    },
    {
      question:
        "Why are pseudogenes and paralogous regions especially problematic for short-read analysis?",
      options: [
        "Because sequencing machines cannot generate reads from them",
        "Because highly similar regions can make reads map ambiguously, so apparent support may not come uniquely from the intended gene",
        "Because they only affect mitochondrial DNA",
        "Because they are always removed from clinical panels"
      ],
      answerIndex: 1,
      explanation:
        "Recent studies of high-homology regions and PMS2 specifically show that short reads can map ambiguously between a gene and its pseudogene/paralog, creating misleading evidence."
    },
    {
      question:
        "A candidate indel sits in a repeat-rich, low-complexity region. Which conclusion is safest?",
      options: [
        "High depth makes the call automatically trustworthy",
        "Indels in such regions often deserve extra caution because local alignment and representation can be unstable",
        "Repeat-rich regions only matter for structural variants",
        "Any variant in a repeat must be false"
      ],
      answerIndex: 1,
      explanation:
        "Repeats and low-complexity sequence are well-known difficult contexts for short-read alignment and indel calling, increasing the risk of both false positives and missed or misrepresented real variants."
    },
    {
      question:
        "A variant shows low-level alternate support at an unexpected allele fraction. Which interpretation best matches Module 11?",
      options: [
        "This is strong evidence of interesting biology and should usually be trusted immediately",
        "Low-level support can reflect true biology, but contamination or other artefacts can also create such patterns, so caution is needed",
        "Low-level support always proves mosaicism",
        "Low-level support is irrelevant if the gene is phenotype-matched"
      ],
      answerIndex: 1,
      explanation:
        "Contamination and other technical artefacts often appear at low allele fractions and can outnumber true low-level biological events, so these patterns need cautious interpretation."
    },
    {
      question:
        "Why can contamination contribute to both false positives and false negatives?",
      options: [
        "Because contamination can both introduce misleading alternate support and dilute true signal",
        "Because contamination only affects genotype quality fields",
        "Because contamination deletes reference reads",
        "Because contamination only matters in tumor data"
      ],
      answerIndex: 0,
      explanation:
        "Mixed-source DNA can create spurious variant support and can also weaken or dilute genuine signal from the true sample."
    },
    {
      question:
        "A learner says: “This variant is marked PASS, so it is basically technically settled.” What is the best correction?",
      options: [
        "Correct, because PASS means the variant is confirmed true",
        "Incomplete, because PASS only means the call did not fail the chosen filtering rules; it does not rule out all artefact modes",
        "Correct, unless the gene has multiple transcripts",
        "Incomplete only because GQ could still be low"
      ],
      answerIndex: 1,
      explanation:
        "GATK’s filtering guidance makes clear that filters are heuristic tradeoffs, not omniscient truth labels. A PASS call can still be misleading and still benefit from further review."
    },
    {
      question:
        "Why is it unsafe to treat a filtered variant as automatically false?",
      options: [
        "Because filters are random",
        "Because stricter filtering can remove true positives as well as false positives",
        "Because filtered variants are always clinically important",
        "Because filtered variants bypass the caller"
      ],
      answerIndex: 1,
      explanation:
        "Filtering involves sensitivity-specificity tradeoffs. GATK explicitly notes that more stringent filtering can eliminate true variants as well as artefacts."
    },
    {
      question: "Which scenario best fits false reassurance?",
      options: [
        "A variant is in a technically difficult region, but the reviewer remains cautious",
        "A variant has a PASS flag and neat-looking summary metrics, so the reviewer assumes no further artefact thinking is needed",
        "A suspicious call is escalated with careful wording",
        "A learner checks whether a gene has a nearby pseudogene"
      ],
      answerIndex: 1,
      explanation:
        "False reassurance is not just bad data; it is overconfidence in simplified outputs such as PASS flags or tidy-looking summaries. Module 11 teaches that these outputs do not eliminate the need for sceptical review."
    },
    {
      question:
        "Two biologically plausible variants are being compared. Variant A is in a clean region with coherent evidence. Variant B is in a high-homology region and shows more suspicious technical features. Which approach best matches Module 11?",
      options: [
        "Prioritize Variant B automatically because the gene is more attractive",
        "Treat them as equally strong because both appear in the VCF",
        "Give more technical trust to Variant A, while handling Variant B more cautiously and considering further review or escalation",
        "Reject Variant B automatically without further thought"
      ],
      answerIndex: 2,
      explanation:
        "Artefact awareness helps rank candidates by trustworthiness as evidence, not just biological appeal. Suspicion should increase caution, review depth, and sometimes escalation, rather than triggering blind trust or blind rejection."
    },
    {
      question: "What is the best overall summary of Module 11?",
      options: [
        "Most artefacts can be ignored once a variant has passed filters",
        "Artefacts mainly matter only for software developers",
        "Multiple technical traps can distort variant evidence, so good clinical bioinformatics requires sceptical, context-aware handling of calls rather than blind trust in tidy outputs",
        "Any call from a difficult region should automatically be discarded"
      ],
      answerIndex: 2,
      explanation:
        "That is the integrated lesson of the module: pseudogene interference, difficult sequence context, contamination, and caller/filtering behaviour can all mislead review, so context-aware scepticism is essential."
    }
  ];