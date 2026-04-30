export const module15Quiz = [
    {
      question:
        "A learner says: “If a variant is rare, technically strong, and in a relevant gene, it should stay high on the shortlist regardless of mechanism.” Which response is best?",
      options: [
        "Correct, because mechanism only matters during final classification",
        "Incomplete, because a candidate can still be biologically weak if its variant type does not fit the known disease mechanism of the gene",
        "Correct, unless the variant is missense",
        "Incomplete only because population frequency matters more than mechanism"
      ],
      answerIndex: 1,
      explanation:
        "Module 15 is built around the idea that shortlist quality improves when the candidate’s variant class matches the curated gene–disease mechanism. Technical strength and rarity do not fully rescue a mechanism-mismatched event. ClinGen explicitly curates dosage sensitivity and gene–disease evidence to support this kind of reasoning."
    },
    {
      question:
        "Why does a predicted loss-of-function variant often rise strongly in a gene with good haploinsufficiency evidence?",
      options: [
        "Because all pLoF variants are automatically pathogenic",
        "Because the variant type and the gene-level disease mechanism are aligned",
        "Because haploinsufficiency replaces phenotype review",
        "Because dosage sensitivity only matters for CNVs"
      ],
      answerIndex: 1,
      explanation:
        "ClinGen defines haploinsufficiency as when loss of one copy results in a consistent phenotype. That makes a rare, technically strong pLoF variant more compelling because the event type and the known mechanism point in the same direction."
    },
    {
      question:
        "A single heterozygous pLoF variant is found in a gene mainly associated with autosomal recessive disease. What is the safest interpretation?",
      options: [
        "It should automatically rank first because it is truncating",
        "It may still be worth noting, but it is usually a weaker fit than a pLoF in a well-supported haploinsufficient dominant gene",
        "It proves haploinsufficiency",
        "Recessive genes cannot contain pLoF variants"
      ],
      answerIndex: 1,
      explanation:
        "A heterozygous pLoF in a recessive gene does not usually behave like a dominant haploinsufficient signal. ClinGen dosage resources distinguish haploinsufficiency from categories such as autosomal recessive context, which is exactly why inheritance and mechanism must be read together."
    },
    {
      question: "What is the safest beginner description of gain of function?",
      options: [
        "Any variant that removes one copy of a gene",
        "A variant effect that gives the gene product an abnormal or increased action rather than simply removing normal function",
        "A synonym for haploinsufficiency",
        "A type of sequencing artefact"
      ],
      answerIndex: 1,
      explanation:
        "ClinGen curation materials include gain of function as a mechanism-of-pathogenicity label distinct from loss of function. That distinction is central to mechanism-aware prioritisation."
    },
    {
      question:
        "Why can a missense variant outrank a stop-gained variant in the same gene?",
      options: [
        "Because missense always outranks truncating variants",
        "Because the gene may mainly cause disease through gain-of-function or dominant-negative mechanisms, making the missense change a better fit",
        "Because stop-gained variants are usually technical artefacts",
        "Because consequence labels are not useful at all"
      ],
      answerIndex: 1,
      explanation:
        "Module 15 teaches that “more severe-looking” is not the same as “better mechanism fit.” In GoF or dominant-negative genes, a missense or in-frame candidate can be more biologically plausible than a truncating-looking one. ClinGen validity curations explicitly record mechanisms such as gain of function and dominant negative."
    },
    {
      question:
        "What is the safest beginner description of dominant negative?",
      options: [
        "A situation where an abnormal protein interferes with the normal protein’s function",
        "A synonym for recessive inheritance",
        "A population-frequency pattern",
        "A type of transcript annotation only"
      ],
      answerIndex: 0,
      explanation:
        "Dominant negative describes harmful interference by the altered product, not simple loss of one copy. ClinGen mechanism curation uses this as a distinct pathogenic mechanism."
    },
    {
      question:
        "Why are haploinsufficiency and triplosensitivity scored separately by ClinGen?",
      options: [
        "Because they are unrelated to dosage",
        "Because too little dosage and too much dosage can have different clinical relevance",
        "Because one is for SNVs and one is for CNVs only",
        "Because triplosensitivity always matters more"
      ],
      answerIndex: 1,
      explanation:
        "ClinGen’s dosage framework assigns separate HI and TS scores because loss and gain of dosage are different evidence questions. The SOP states that each gene or region receives a separate haploinsufficiency score and triplosensitivity score."
    },
    {
      question:
        "A duplication candidate is found in a phenotype-relevant gene, but there is little or no evidence for triplosensitivity. What is the safest interpretation?",
      options: [
        "The duplication is automatically diagnostic because it changes dosage",
        "The duplication may still be worth review, but weaker triplosensitivity support makes it less compelling than a dosage-consistent candidate",
        "Triplosensitivity only matters for research",
        "Dosage mechanisms never affect prioritisation"
      ],
      answerIndex: 1,
      explanation:
        "Dosage sensitivity helps decide whether gain or loss of copy number is a plausible disease mechanism. Weak TS evidence lowers the strength of a duplication candidate even when the gene seems relevant."
    },
    {
      question:
        "What is the safest meaning of mechanism mismatch in shortlist review?",
      options: [
        "A sequencing error in the reads",
        "A situation where the candidate’s variant type does not fit the known or most likely disease mechanism of the gene",
        "A low allele frequency in gnomAD",
        "A disagreement between two transcripts only"
      ],
      answerIndex: 1,
      explanation:
        "Mechanism mismatch is about biological fit, not technical calling quality. It is one of the most important reasons a technically strong candidate can still lose shortlist priority. ClinGen’s mechanism-of-pathogenicity curation exists to support exactly this distinction."
    },
    {
      question: "What is the best overall summary of Module 15?",
      options: [
        "The most severe-looking consequence usually wins",
        "Mechanism-aware prioritisation helps determine whether a candidate is the right kind of event for the gene–disease relationship, which improves shortlist ranking and handoff without replacing final clinical classification",
        "Haploinsufficiency explains all dominant disease",
        "Once a gene is phenotype-relevant, mechanism no longer matters"
      ],
      answerIndex: 1,
      explanation:
        "That is the integrated lesson of the module: mechanism fit changes rank, wording, and escalation, but it still supports downstream interpretation rather than replacing it. ClinGen’s resources explicitly support curated mechanism-aware reasoning while warning against direct diagnostic use without professional review."
    }
  ];