export const case59 = {
  id: "case-59",
  slug: "over-specific-phenotype-trap-case",
  title: "Case 59: Over-specific phenotype trap",
  level: "Advanced",
  summary:
    "A guided case focused on avoiding over-prioritisation of a candidate that fits one striking phenotype feature but does not explain the whole presentation.",

  visualisationExampleId: null,

  assessmentFocus: [
    "Whole-phenotype matching",
    "Over-specific phenotype trap",
    "Candidate prioritisation",
    "Gene-disease validity",
    "Mechanism and inheritance fit",
    "Safe communication of uncertainty",
  ],

  guidedTutorMode: {
    type: "static-rule-based",
    description:
      "Uses built-in hints, checkpoint feedback, model answers, and self-check criteria to support safe case reasoning.",
  },

  phase5Assessment: {
    candidateRanking: {
      prompt:
        "Rank the findings from strongest to weakest based on whole-phenotype fit, gene validity, variant consequence, inheritance, technical confidence, and whether a single striking feature is being over-weighted.",
      correctOrder: [
        "candidate-4",
        "candidate-5",
        "candidate-3",
        "candidate-2",
        "candidate-1",
      ],
      explanation:
        "Candidate 4 is strongest because it fits the overall neurodevelopmental, epilepsy, hypotonia, feeding, dysmorphic, and structural-anomaly pattern with strong gene, mechanism, rarity, inheritance, and technical support. Candidate 5 is not a disease candidate, but it is central because it explains the whole-phenotype matching problem. Candidate 3 is plausible but weaker because it is missense-based and less complete. Candidate 2 is the trap: it fits one striking eye feature but does not explain the wider presentation and has weaker mechanism and inheritance support. Candidate 1 is broad, relatively frequent, and poorly specific.",
    },

    escalationDecision: {
      prompt:
        "Choose the safest next action when one candidate fits a striking feature but another better explains the full case.",
      options: [
        {
          id: "prioritise-single-feature",
          label: "A",
          decision:
            "Prioritise Candidate 2 because a rare, striking phenotype feature should outweigh the broader case pattern.",
          isBest: false,
          feedback:
            "Review this choice. A striking feature matters, but it should not outweigh poor fit to the rest of the presentation.",
        },
        {
          id: "reject-single-feature-completely",
          label: "B",
          decision:
            "Ignore Candidate 2 completely because a finding that fits only one feature can never be useful.",
          isBest: false,
          feedback:
            "Review this choice. Candidate 2 should be reviewed and documented, but it should not drive the main conclusion.",
        },
        {
          id: "escalate-whole-fit",
          label: "C",
          decision:
            "Escalate Candidate 4 as the leading finding and document Candidate 2 as a weaker single-feature match.",
          isBest: true,
          feedback:
            "Best decision. Candidate 4 better explains the whole case, while Candidate 2 should be handled proportionately as a reviewed but weaker finding.",
        },
      ],
    },

    writtenSummary: {
      prompt:
        "Write a short trainee-level handover summary explaining the strongest candidate, why the single-feature match is weaker, and how the whole phenotype should guide prioritisation.",
      checklist: [
        "Names Candidate 4 as the strongest current finding.",
        "Explains that Candidate 4 fits the overall presentation, not just one feature.",
        "Mentions gene mechanism, consequence, rarity, inheritance, and technical support.",
        "Explains why Candidate 2 is a phenotype trap despite matching one striking feature.",
        "Avoids ignoring Candidate 2 completely.",
        "Uses cautious handover wording and recommends formal review/sign-off.",
      ],
      modelAnswer:
        "Candidate 4 is the strongest current finding for formal review because it provides the best whole-case fit. The variant is a rare apparent de novo canonical splice donor in a gene associated with a syndromic neurodevelopmental disorder that includes developmental delay, epilepsy, hypotonia, feeding difficulties, dysmorphic features, and structural anomalies. Candidate 2 is the main phenotype trap: it appears attractive because it matches the patient’s coloboma, but the gene and variant do not explain the broader neurodevelopmental, epilepsy, hypotonia, feeding, and dysmorphic pattern well, and the inheritance and mechanism evidence are weaker. Candidate 3 is plausible but less complete because it is a missense candidate with more limited evidence. Candidate 1 is broad, relatively frequent, and poorly specific. Candidate 5 is the central reasoning issue because it reminds the analyst to judge the whole phenotype rather than one striking feature. The safest next step is to prioritise Candidate 4 for formal review, document why Candidate 2 was considered but deprioritised, and preserve formal clinical laboratory review and sign-off boundaries.",
    },
  },

  reasoningScorecard: [
    {
      category: "Whole-phenotype matching",
      maxScore: 2,
      expectation:
        "Assesses whether a candidate explains the overall presentation rather than only one memorable feature.",
    },
    {
      category: "Trap recognition",
      maxScore: 2,
      expectation:
        "Recognises when a single striking phenotype feature is being over-weighted compared with the rest of the case.",
    },
    {
      category: "Candidate prioritisation",
      maxScore: 2,
      expectation:
        "Prioritises the finding with the best convergence across phenotype, gene validity, mechanism, inheritance, rarity, and technical support.",
    },
    {
      category: "Evidence interpretation",
      maxScore: 2,
      expectation:
        "Balances specific phenotype overlap against weakening evidence such as poor syndrome fit, weak mechanism, inheritance mismatch, or limited gene evidence.",
    },
    {
      category: "Safe communication",
      maxScore: 2,
      expectation:
        "Documents the single-feature candidate proportionately without letting it dominate the final handover.",
    },
  ],

  patient: {
    age: 5,
    sex: "Female",
  },

  referralReason:
    "A 5-year-old girl has been referred for rare disease genome analysis because of global developmental delay, severe speech delay, epilepsy, hypotonia, feeding difficulties, mild dysmorphic features, congenital heart defect, and unilateral iris coloboma. One candidate appears to match the eye finding very well, but another candidate may better explain the wider syndromic neurodevelopmental presentation.",

  testType:
    "Rare disease trio genome sequencing with SNV/indel, CNV, phenotype-specificity, whole-case matching, and technical-confidence review",

  familyStructure:
    "The proband and both biological parents have been tested. Both parents are reportedly unaffected. No known consanguinity is reported. No family history of coloboma, congenital heart disease, epilepsy, or neurodevelopmental disorder is reported.",

  history: [
    "Global developmental delay noted in infancy",
    "Severe expressive speech delay",
    "Epilepsy beginning at age 2",
    "Generalised hypotonia",
    "Feeding difficulties in early childhood",
    "Mild dysmorphic facial features",
    "Congenital heart defect repaired in infancy",
    "Unilateral iris coloboma noted by ophthalmology",
    "No known previous molecular diagnosis",
    "Both parents are reportedly unaffected",
    "Clinical team highlighted the coloboma as a striking feature",
  ],

  phenotype: [
    "Global developmental delay",
    "Severe speech delay",
    "Epilepsy",
    "Hypotonia",
    "Feeding difficulties",
    "Mild dysmorphic features",
    "Congenital heart defect",
    "Unilateral iris coloboma",
  ],

  familyHistory:
    "Both parents are reportedly unaffected. There is no known family history of developmental delay, epilepsy, hypotonia, feeding difficulties, congenital heart disease, coloboma, dysmorphic features, or a similar syndromic neurodevelopmental presentation.",

  serviceContext: [
    "This guided case focuses on the over-specific phenotype trap.",
    "The key issue is that one candidate fits a memorable feature very well, but does not explain the whole case.",
    "The learner should not ignore specific features such as coloboma.",
    "The learner should also not allow one striking feature to outweigh a stronger whole-phenotype candidate.",
    "The safest conclusion should prioritise the candidate with the best full-case evidence while documenting why the single-feature candidate was reviewed and deprioritised.",
    "The final handover should show that phenotype matching means more than matching one word from the referral.",
  ],

  candidateFindings: [
    {
      id: "candidate-1",
      label: "Candidate 1",
      gene: "BROADTRAP1",
      variant: "chr2:77190442 C>T",
      zygosity: "Heterozygous",
      consequence: "missense_variant",
      inheritanceSignal: "Inherited from unaffected mother",
      clinicalFit:
        "BROADTRAP1 has a broad neurodevelopmental association in limited reports, but the variant is inherited from the unaffected mother, relatively frequent, and does not explain the coloboma or congenital heart defect well.",
      rawEvidence: `GENE: BROADTRAP1
Known disease association: broad neurodevelopmental association in limited reports
Reported inheritance: autosomal dominant proposed
Known mechanism: uncertain
Gene-disease validity in local summary: limited

Variant:
chr2:77190442 C>T
Transcript: NM_590001.2
HGVS: c.899C>T p.(Pro300Leu)
Consequence: missense_variant
Protein domain: outside proposed recurrent functional region

VCF-style fields:
QUAL=684
FILTER=PASS
INFO: DP=46;MQ=60;QD=14.9;SOR=0.84
FORMAT: GT:AD:DP:GQ

Proband blood: 0/1:23,23:46:99
Mother blood: 0/1:22,22:44:99
Father blood: 0/0:42,0:42:99

Read-level notes:
ALT reads seen on both forward and reverse strands
ALT reads distributed across read positions
No local mapping warning
No concerning soft-clipping
Second caller: detected

Population:
gnomAD AF = 0.0012
gnomAD allele count = 340
One homozygote observed in local population summary

Phenotype fit:
Developmental delay: broad possible overlap
Severe speech delay: broad possible overlap
Epilepsy: limited overlap
Hypotonia: weak overlap
Feeding difficulties: not a core feature
Congenital heart defect: not a core feature
Coloboma: not a core feature

Review question:
Assess whether an inherited, relatively frequent, broad-match variant should drive a syndromic case with more specific findings.`,
      concern:
        "This is technically real but weak. It should be reviewed and deprioritised rather than treated as the main explanation.",
    },
    {
      id: "candidate-2",
      label: "Candidate 2",
      gene: "EYEFOCUS2",
      variant: "chr5:44198221 G>A",
      zygosity: "Heterozygous",
      consequence: "missense_variant",
      inheritanceSignal: "Inherited from unaffected father",
      clinicalFit:
        "EYEFOCUS2 has a reported association with isolated or syndromic eye malformation in limited reports, so the coloboma is an eye-catching match. However, the inherited variant, weak gene evidence, missense mechanism, and poor fit to the wider neurodevelopmental-epilepsy presentation reduce priority.",
      rawEvidence: `GENE: EYEFOCUS2
Known disease association: eye malformation / coloboma association in limited reports
Reported inheritance: autosomal dominant proposed with variable expressivity
Known mechanism: uncertain; some reported variants are loss-of-function
Gene-disease validity in local summary: limited / emerging

Variant:
chr5:44198221 G>A
Transcript: NM_590002.3
HGVS: c.1040G>A p.(Gly347Asp)
Consequence: missense_variant
Protein domain: outside the main reported functional region in local summary

VCF-style fields:
QUAL=746
FILTER=PASS
INFO: DP=48;MQ=60;QD=15.5;SOR=0.82
FORMAT: GT:AD:DP:GQ

Proband blood: 0/1:24,24:48:99
Mother blood: 0/0:44,0:44:99
Father blood: 0/1:22,23:45:99

Read-level notes:
ALT reads seen on both forward and reverse strands
ALT reads distributed across read positions
No local mapping warning
No soft-clipping concern
Second caller: detected

Population:
gnomAD AF = 0.0007
gnomAD allele count = 190
No homozygotes in local summary

ClinVar-style summary:
No exact matching pathogenic record found in local summary
Several submitted variants in EYEFOCUS2 are VUS
Reported pathogenic variants in local summary are mostly truncating or clearly disruptive

Phenotype fit:
Coloboma: strong superficial match
Congenital heart defect: variable / limited overlap
Developmental delay: not a consistent core feature in local summary
Severe speech delay: not a core feature
Epilepsy: not a core feature
Hypotonia: not a core feature
Feeding difficulties: not a core feature
Dysmorphic features: variable

Review question:
Assess whether a strong match to one striking feature is enough when the variant and the wider syndrome fit are weaker.`,
      concern:
        "This is the main phenotype trap. It fits coloboma, but it should not outrank a candidate that better explains the whole presentation.",
    },
    {
      id: "candidate-3",
      label: "Candidate 3",
      gene: "NDDMISS3",
      variant: "chr10:55218401 G>A",
      zygosity: "Heterozygous",
      consequence: "missense_variant",
      inheritanceSignal: "Absent from both parents on standard genotype calls",
      clinicalFit:
        "NDDMISS3 has a possible developmental epilepsy association. The variant is rare and technically plausible, but the exact variant has limited evidence and does not explain the congenital heart and coloboma features as well as Candidate 4 explains the overall syndrome.",
      rawEvidence: `GENE: NDDMISS3
Known disease association: possible autosomal dominant developmental epilepsy disorder
Reported inheritance: usually de novo in limited reports
Known mechanism: damaging missense variants in a functional domain
Gene-disease validity in local summary: moderate / emerging

Variant:
chr10:55218401 G>A
Transcript: NM_590003.4
HGVS: c.1286G>A p.(Arg429His)
Consequence: missense_variant
Protein domain: possible epilepsy-associated functional domain

VCF-style fields:
QUAL=812
FILTER=PASS
INFO: DP=52;MQ=60;QD=15.6;SOR=0.78
FORMAT: GT:AD:DP:GQ

Proband blood: 0/1:26,26:52:99
Mother blood: 0/0:44,0:44:99
Father blood: 0/0:45,0:45:99

Read-level notes:
ALT reads seen on both forward and reverse strands
ALT reads distributed across read positions
High mapping quality
No local low-complexity warning
Second caller: detected

Population:
gnomAD AF = not observed
gnomAD allele count = 0

ClinVar-style summary:
No exact matching pathogenic record found in local summary
Nearby variants include VUS and likely pathogenic submissions in limited numbers

Phenotype fit:
Developmental delay: compatible
Severe speech delay: compatible
Epilepsy: compatible
Hypotonia: partial overlap
Feeding difficulties: weak overlap
Congenital heart defect: not a core feature
Coloboma: not a core feature
Dysmorphic features: variable

Review question:
Assess whether this rare missense candidate explains enough of the full presentation to outrank stronger syndromic evidence.`,
      concern:
        "This is plausible but less strong than Candidate 4 because the mechanism and whole-phenotype fit are less complete.",
    },
    {
      id: "candidate-4",
      label: "Candidate 4",
      gene: "WHOLEFIT4",
      variant: "chr12:66190442 G>A",
      zygosity: "Heterozygous",
      consequence: "splice_donor_variant",
      inheritanceSignal: "Apparent de novo with good parental coverage",
      clinicalFit:
        "WHOLEFIT4 is associated with an autosomal dominant syndromic neurodevelopmental disorder including developmental delay, epilepsy, hypotonia, feeding difficulties, dysmorphic features, congenital heart disease, and occasional eye anomalies. The variant, gene mechanism, inheritance, rarity, technical evidence, and overall phenotype fit are supportive.",
      rawEvidence: `GENE: WHOLEFIT4
Known disease association: autosomal dominant syndromic neurodevelopmental disorder
Reported inheritance: usually de novo
Known mechanism: haploinsufficiency / loss-of-function
Gene-disease validity in local summary: established

Variant:
chr12:66190442 G>A
Transcript: NM_590004.5
HGVS: c.744+1G>A
Consequence: splice_donor_variant
Splice position: canonical +1 donor site
Transcript note: affects clinically preferred transcript in local summary

VCF-style fields:
QUAL=964
FILTER=PASS
INFO: DP=58;MQ=60;QD=16.6;SOR=0.72
FORMAT: GT:AD:DP:GQ

Proband blood: 0/1:29,29:58:99
Mother blood: 0/0:48,0:48:99
Father blood: 0/0:46,0:46:99

Read-level notes:
ALT reads seen on both forward and reverse strands
ALT reads distributed across read positions
High base quality at variant position
High mapping quality for ALT-supporting reads
No local low-complexity warning
No pseudogene or segmental duplication warning
No concerning soft-clipping
Second caller: detected

Parental coverage:
Mother has good coverage with no ALT support
Father has good coverage with no ALT support
Trio identity checks are consistent

Population:
gnomAD AF = not observed
gnomAD allele count = 0

Constraint:
LOEUF = 0.14
pLI = 0.99

ClinVar-style summary:
No exact matching variant record found in local summary
Other truncating and canonical splice variants in WHOLEFIT4 have been submitted as pathogenic/likely pathogenic in affected individuals

Phenotype fit:
Developmental delay: strong match
Severe speech delay: strong match
Epilepsy: strong match
Hypotonia: compatible
Feeding difficulties: compatible
Mild dysmorphic features: compatible
Congenital heart defect: compatible
Coloboma / eye anomaly: occasional or variable feature in local summary

Review question:
Assess whether this candidate provides a stronger whole-case explanation than the finding that mainly matches the coloboma.`,
      concern:
        "This is the strongest current candidate because it explains the whole syndromic pattern rather than only one striking feature.",
    },
    {
      id: "candidate-5",
      label: "Candidate 5",
      gene: "Whole-phenotype review",
      variant: "Single-feature match versus whole-case fit",
      zygosity: "Case-level reasoning issue",
      consequence: "phenotype_prioritisation_review",
      inheritanceSignal: "Not a separate disease candidate",
      clinicalFit:
        "This is not a disease candidate. It is the central reasoning issue: the analysis must decide whether one striking feature should outweigh a broader, better-supported syndromic match.",
      rawEvidence: `CASE CONTEXT REVIEW: whole-phenotype matching
Reason for review:
The proband has a striking coloboma, which can draw attention to eye-malformation genes.
However, the broader presentation includes developmental delay, severe speech delay, epilepsy, hypotonia, feeding difficulties, dysmorphic features, and congenital heart disease.

Candidate 2 pattern:
Strong match to coloboma
Weaker match to neurodevelopmental-epilepsy presentation
Inherited from an unaffected father
Gene-disease evidence limited / emerging
Variant mechanism uncertain

Candidate 4 pattern:
Strong match to neurodevelopmental and epilepsy features
Compatible match to feeding, hypotonia, dysmorphic, and heart features
Eye anomaly is possible or variable in local summary
Apparent de novo with good parental coverage
Canonical splice donor in a loss-of-function gene
Population absent and technically strong

Interpretation principle:
A single striking feature can be important.
But a candidate that explains the whole case is usually stronger than one that matches only the memorable feature.
A feature-specific candidate should be documented if reviewed, but not over-prioritised without broader support.

Review question:
Assess how whole-phenotype fit should shape candidate ranking and final handover.`,
      concern:
        "This is the central reasoning issue. It helps prevent over-prioritising Candidate 2 just because it matches the coloboma.",
    },
  ],

  decisionCheckpoints: [
    {
      id: "checkpoint-1",
      title: "Checkpoint 1 — Identify the strongest whole-case candidate",
      context:
        "Candidate 2 fits the coloboma well, but Candidate 4 better explains the wider syndromic neurodevelopmental presentation.",
      question:
        "Which finding should be prioritised for formal review?",
      options: [
        {
          label: "A",
          text: "Candidate 2, because the most specific and memorable feature should drive the main gene match.",
          isCorrect: false,
          feedback:
            "Not quite. Specific features matter, but Candidate 2 does not explain the wider presentation well.",
        },
        {
          label: "B",
          text: "Candidate 4, because it has the best convergence across the full phenotype, mechanism, inheritance, rarity, and technical evidence.",
          isCorrect: true,
          feedback:
            "Correct. Candidate 4 is stronger because it explains the whole case, not just one feature.",
        },
        {
          label: "C",
          text: "Candidate 3, because a rare epilepsy missense variant should outrank candidates involving variable syndromic features.",
          isCorrect: false,
          feedback:
            "Not quite. Candidate 3 is plausible, but Candidate 4 has stronger consequence, gene validity, and whole-case fit.",
        },
      ],
      teachingPoint:
        "Whole-phenotype fit is often stronger than a single highly memorable feature match.",
    },
    {
      id: "checkpoint-2",
      title: "Checkpoint 2 — Recognise the phenotype trap",
      context:
        "Candidate 2 matches coloboma, but is inherited, has limited gene evidence, uncertain mechanism, and poor fit to epilepsy, hypotonia, feeding issues, and global delay.",
      question:
        "What is the safest interpretation of Candidate 2?",
      options: [
        {
          label: "A",
          text: "It should be ignored entirely because single-feature candidates are never relevant to rare disease analysis.",
          isCorrect: false,
          feedback:
            "Not quite. It should be reviewed and documented, but not over-prioritised.",
        },
        {
          label: "B",
          text: "It should be reported as the main finding because coloboma is more specific than developmental delay or epilepsy.",
          isCorrect: false,
          feedback:
            "Not quite. A specific feature does not automatically outweigh poor whole-case and mechanism fit.",
        },
        {
          label: "C",
          text: "It should be documented as a reviewed but weaker finding because the match is narrow and other evidence is limited.",
          isCorrect: true,
          feedback:
            "Correct. Candidate 2 is relevant to consider but too weak to drive the main conclusion.",
        },
      ],
      teachingPoint:
        "A candidate can match one feature and still be weaker overall.",
    },
    {
      id: "checkpoint-3",
      title: "Checkpoint 3 — Compare specific versus syndromic fit",
      context:
        "Candidate 4 does not make coloboma the central feature, but its associated syndrome overlaps multiple parts of the presentation.",
      question:
        "Why can Candidate 4 outrank the coloboma-focused candidate?",
      options: [
        {
          label: "A",
          text: "Because it explains more of the total presentation and has stronger variant, mechanism, inheritance, and gene evidence.",
          isCorrect: true,
          feedback:
            "Correct. A broader but well-supported syndrome match can outrank a narrow single-feature match.",
        },
        {
          label: "B",
          text: "Because coloboma should be ignored whenever developmental delay and epilepsy are also present.",
          isCorrect: false,
          feedback:
            "Not quite. Coloboma should not be ignored, but it should be interpreted in context.",
        },
        {
          label: "C",
          text: "Because any de novo splice variant is automatically more important than any inherited missense variant.",
          isCorrect: false,
          feedback:
            "Not quite. De novo splice evidence is strong only when gene, mechanism, and phenotype also fit.",
        },
      ],
      teachingPoint:
        "Candidate ranking should integrate all evidence types rather than chase the most eye-catching phenotype term.",
    },
    {
      id: "checkpoint-4",
      title: "Checkpoint 4 — Communicate the deprioritised finding",
      context:
        "The final handover should show that Candidate 2 was considered but not allowed to dominate the conclusion.",
      question:
        "How should Candidate 2 be described?",
      options: [
        {
          label: "A",
          text: "As equivalent to Candidate 4 because both have at least one phenotype overlap with the referral.",
          isCorrect: false,
          feedback:
            "Not quite. Candidate 4 has stronger overall evidence and should not be flattened to equal priority.",
        },
        {
          label: "B",
          text: "As a weaker single-feature match that was reviewed and deprioritised due to inheritance, mechanism, and poor whole-case fit.",
          isCorrect: true,
          feedback:
            "Correct. This gives a traceable reason without overstating or ignoring Candidate 2.",
        },
        {
          label: "C",
          text: "As irrelevant and excluded from the record because only the strongest candidate should be mentioned.",
          isCorrect: false,
          feedback:
            "Not quite. A traceable review often explains why tempting alternatives were deprioritised.",
        },
      ],
      teachingPoint:
        "Safe handover explains why attractive alternatives were not prioritised.",
    },
    {
      id: "checkpoint-5",
      title: "Checkpoint 5 — Final whole-phenotype conclusion",
      context:
        "You need to prepare a safe trainee-level conclusion for formal clinical laboratory review.",
      question:
        "Which conclusion is safest?",
      options: [
        {
          label: "A",
          text: "Prioritise Candidate 2 because coloboma is the rarest and most specific feature in the referral.",
          isCorrect: false,
          feedback:
            "Not quite. The rarest or most memorable feature should not automatically drive the conclusion.",
        },
        {
          label: "B",
          text: "Avoid prioritising any finding because one candidate fits the eye feature and another fits the wider presentation.",
          isCorrect: false,
          feedback:
            "Not quite. Competing candidates require structured prioritisation, not avoidance.",
        },
        {
          label: "C",
          text: "Prioritise Candidate 4 for review and document Candidate 2 as a weaker single-feature match.",
          isCorrect: true,
          feedback:
            "Correct. This conclusion is balanced, traceable, and based on the whole case.",
        },
      ],
      teachingPoint:
        "Good phenotype reasoning weighs the whole clinical picture rather than one isolated feature.",
    },
  ],

  finalReflection:
    "A safe trainee-level conclusion would be that Candidate 4 is the strongest current finding for formal clinical laboratory review. It is an apparent de novo canonical splice donor variant in WHOLEFIT4, an established syndromic neurodevelopmental gene with a loss-of-function mechanism. The evidence is strong because the variant is rare, technically convincing, affects the clinically relevant transcript, fits the known mechanism, and explains the overall pattern of developmental delay, severe speech delay, epilepsy, hypotonia, feeding difficulties, dysmorphic features, congenital heart disease, and possible eye anomaly. Candidate 2 is the key phenotype trap. It matches the coloboma well, but it is inherited from an unaffected father, has limited gene-disease evidence, uncertain missense mechanism, and does not explain the broader neurodevelopmental-epilepsy and multisystem presentation well. Candidate 3 is plausible but less complete because it is a missense candidate with weaker syndrome-level fit. Candidate 1 is broad, relatively frequent, inherited, and poorly specific. Candidate 5 is not a disease candidate but is the central reasoning issue: avoiding over-prioritisation of one striking feature. The safest next step is to prioritise Candidate 4 for formal review, document why Candidate 2 was considered and deprioritised, and communicate the conclusion through the appropriate clinical laboratory review and sign-off pathway.",
};