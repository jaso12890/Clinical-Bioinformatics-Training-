export const case17 = {
  id: "case-17",
  slug: "segmental-duplication-paralogue-confusion-case",
  title: "Case 17: Segmental duplication and paralogue confusion",
  level: "Intermediate",
  summary:
    "A technical confidence case focused on avoiding false-positive prioritisation when variants fall in duplicated or paralogous genomic regions.",

  visualisationExampleId: null,

  assessmentFocus: [
    "Segmental duplication and paralogue awareness",
    "Mapping-quality interpretation",
    "Read-origin confidence",
    "High-impact annotation versus technical reliability",
    "Technical confidence versus clinical relevance",
    "Safe escalation and trainee-level handover",
  ],

  guidedTutorMode: {
    type: "static-rule-based",
    description:
      "Uses built-in hints, checkpoint feedback, model answers, and self-check criteria to support safe case reasoning.",
  },

  phase5Assessment: {
    candidateRanking: {
      prompt:
        "Rank the findings from strongest to weakest based on phenotype fit, inheritance, consequence, mapping confidence, paralogue risk, gene mechanism, population evidence, and whether each finding should drive the case conclusion.",
      correctOrder: [
        "candidate-2",
        "candidate-1",
        "candidate-4",
        "candidate-3",
      ],
      explanation:
        "Candidate 2 is strongest because phenotype fit, apparent de novo inheritance, canonical splice consequence, loss-of-function mechanism, population absence, high-quality mapping, and second-caller support all align. Candidate 1 is clinically tempting because it is a possible de novo stop-gained variant in a plausible loss-of-function neurodevelopmental gene, but it is technically fragile due to paralogue similarity, low mapping quality, weak allele balance, read-end clustering, soft-clipping, secondary alignments, and lack of second-caller support. Candidate 4 is also weakened by paralogue confusion, but it has a less compelling gene-disease relationship and missense mechanism, so it is weaker than Candidate 1. Candidate 3 is technically real, but it is lowest priority because it is inherited from an unaffected parent, relatively frequent, and has broad/limited gene-disease evidence with weak phenotype specificity.",
    },

    escalationDecision: {
      prompt:
        "Choose the safest next action for this candidate set.",
      options: [
        {
          id: "prioritise-candidate-1",
          label: "A",
          decision:
            "Prioritise Candidate 1 because a stop-gained variant in a plausible haploinsufficiency gene should outweigh paralogue-related uncertainty.",
          isBest: false,
          feedback:
            "Review this choice. Candidate 1 is clinically tempting, but the paralogue and mapping evidence make it technically fragile. A high-impact consequence should not override poor read-origin confidence.",
        },
        {
          id: "prioritise-candidate-2",
          label: "B",
          decision:
            "Prioritise Candidate 2 for formal review, while documenting the paralogue and mapping limitations affecting Candidates 1 and 4.",
          isBest: true,
          feedback:
            "Best decision. Candidate 2 has the strongest overall convergence and does not carry the same paralogue/read-origin uncertainty. The weaker paralogue-region findings should be documented rather than ignored or overcalled.",
        },
        {
          id: "prioritise-candidate-4",
          label: "C",
          decision:
            "Prioritise Candidate 4 because variants in duplicated regions are more likely to be missed by standard analysis and should be given extra weight.",
          isBest: false,
          feedback:
            "Review this choice. Duplicated or paralogous regions require more caution, not less. The key question is whether the reads can be confidently assigned to the intended gene.",
        },
      ],
    },

    writtenSummary: {
      prompt:
        "Write a short trainee-level handover summary explaining the strongest candidate, why paralogue confusion matters for the other findings, and the safest next step.",
      checklist: [
        "Names Candidate 2 as the strongest current finding.",
        "Explains that Candidate 2 is an apparent de novo canonical splice acceptor variant.",
        "Links SYNDEV4 loss-of-function mechanism to the neurodevelopmental phenotype.",
        "Mentions strong technical support for Candidate 2, including good mapping and no segmental-duplication warning.",
        "Explains why Candidate 1 is tempting but technically fragile because of paralogue similarity.",
        "Mentions mapping/read-origin concerns for Candidate 1 such as low MQ, secondary alignments, paralogue-like mismatches, read-end clustering, or lack of second-caller support.",
        "Explains why Candidate 4 is weak because read origin cannot be confidently assigned to the target gene.",
        "Explains why Candidate 3 is technically real but clinically lower priority.",
        "Avoids calling Candidate 2 a final diagnosis without formal review and sign-off.",
      ],
      modelAnswer:
        "Candidate 2 is the strongest current finding for formal review. It is an apparent de novo canonical splice acceptor variant in SYNDEV4, a gene associated with autosomal dominant neurodevelopmental disorder where loss-of-function is a reported mechanism. The child’s developmental delay, autistic features, seizures, hypotonia, and learning difficulties fit the reported phenotype, and the raw evidence is technically strong, with balanced allele support, high mapping quality, good parental coverage, no segmental-duplication warning, and second-caller support. Candidate 1 is clinically tempting because it is a possible de novo stop-gained variant in a plausible haploinsufficiency gene, but it lies in an exon with high paralogue similarity and has low mapping quality, weak allele balance, secondary alignments, paralogue-like mismatches, read-end clustering, soft-clipping, and no second-caller support. Candidate 4 is also weak because the ALT-supporting reads cannot be confidently assigned to PARALOG2 rather than the paralogous region. Candidate 3 is technically real, but it is inherited from an unaffected father, relatively frequent, and has limited broad gene-disease evidence. The safest next step is to prioritise Candidate 2 for formal review and document the paralogue/mapping limitations for the other findings rather than allowing a dramatic annotation to drive the conclusion.",
    },
  },

  reasoningScorecard: [
    {
      category: "Paralogue and duplicated-region awareness",
      maxScore: 2,
      expectation:
        "Recognises that variants in segmental duplications or paralogous regions can be unreliable if reads do not map uniquely to the interpreted gene.",
    },
    {
      category: "Read-origin confidence",
      maxScore: 2,
      expectation:
        "Uses mapping quality, secondary/supplementary alignments, paralogue-specific bases, read-end clustering, soft-clipping, and second-caller support to judge whether the call is trustworthy.",
    },
    {
      category: "Consequence versus technical reliability",
      maxScore: 2,
      expectation:
        "Avoids prioritising a high-impact stop-gained annotation when mapping and paralogue evidence make the call technically fragile.",
    },
    {
      category: "Candidate prioritisation",
      maxScore: 2,
      expectation:
        "Prioritises the candidate with the best convergence across phenotype, inheritance, consequence, mechanism, population evidence, and mapping confidence.",
    },
    {
      category: "Safe escalation",
      maxScore: 2,
      expectation:
        "Escalates the strongest candidate for formal review while documenting paralogue and mapping uncertainty in weaker findings.",
    },
  ],

  patient: {
    age: 9,
    sex: "Male",
  },

  referralReason:
    "A 9-year-old boy has been referred for rare disease genome analysis because of developmental delay, autistic features, mild seizures, hypotonia, and learning difficulties.",

  testType: "Rare disease trio genome sequencing",

  familyStructure:
    "The proband and both biological parents have been tested. Both parents are reportedly unaffected.",

  history: [
    "Global developmental delay noted in early childhood",
    "Autistic features reported by the clinical team",
    "Mild seizures beginning at age 6",
    "Hypotonia in early childhood",
    "Learning difficulties requiring school support",
    "No known previous molecular diagnosis",
  ],

  phenotype: [
    "Global developmental delay",
    "Autistic features",
    "Mild seizures",
    "Hypotonia",
    "Learning difficulties",
  ],

  familyHistory:
    "Both parents are unaffected. No known family history of seizures, developmental delay, autism, hypotonia, or a similar neurodevelopmental presentation.",

  serviceContext: [
    "The analysis is being performed in a rare disease service context.",
    "The key technical issue in this case is paralogue and segmental-duplication confusion.",
    "A variant in a clinically relevant gene can still be unreliable if reads do not map uniquely to that gene.",
    "Your task is to decide which candidate is trustworthy after considering mapping quality, paralogue context, inheritance, mechanism, and phenotype fit.",
  ],

  candidateFindings: [
    {
      id: "candidate-1",
      label: "Candidate 1",
      gene: "NEUROPAR1",
      variant: "chr5:101220441 C>T",
      zygosity: "Heterozygous",
      consequence: "stop_gained",
      inheritanceSignal: "Apparent de novo, but paralogue region warning",
      clinicalFit:
        "NEUROPAR1 is associated with an autosomal dominant neurodevelopmental disorder and loss-of-function is a reported mechanism. However, the variant lies in an exon with high similarity to a paralogous gene.",
      rawEvidence: `GENE: NEUROPAR1
Known disease association: autosomal dominant neurodevelopmental disorder
Reported inheritance: autosomal dominant
Known mechanism: haploinsufficiency / loss-of-function

Variant:
chr5:101220441 C>T
Transcript: NM_170001.3
HGVS: c.1129C>T p.(Arg377*)
Consequence: stop_gained
Genomic context: exon shares high sequence similarity with paralogue NEUROPAR1L

VCF-style fields:
QUAL=58
FILTER=PASS
INFO: DP=34;MQ=31;QD=1.7;SOR=4.6
FORMAT: GT:AD:DP:GQ

Proband: 0/1:27,7:34:48
Mother: 0/0:35,1:36:71
Father: 0/0:38,0:38:99

Read-level notes:
ALT-supporting reads have lower mapping quality than REF-supporting reads
Several ALT reads contain mismatches matching the paralogous NEUROPAR1L sequence
5 of 7 ALT reads occur near read ends
Soft-clipping present in multiple ALT-supporting reads
Some reads have secondary alignments to the paralogue region
Local segmental duplication warning present
Second caller: not detected

Population:
gnomAD AF = not observed
gnomAD allele count = 0

Constraint:
LOEUF = 0.23
pLI = 0.97

ClinVar-style summary:
No exact matching variant record found in local summary
Truncating variants in NEUROPAR1 have been submitted in affected individuals, but this exon is technically difficult because of paralogue similarity`,
      concern:
        "This is clinically tempting because it is a possible de novo stop-gained variant in a plausible gene, but the mapping and paralogue evidence make the call technically fragile.",
    },
    {
      id: "candidate-2",
      label: "Candidate 2",
      gene: "SYNDEV4",
      variant: "chr12:66190442 G>A",
      zygosity: "Heterozygous",
      consequence: "splice_acceptor_variant",
      inheritanceSignal: "Apparent de novo with good parental coverage",
      clinicalFit:
        "SYNDEV4 is associated with an autosomal dominant neurodevelopmental disorder including developmental delay, autistic features, seizures, hypotonia, and learning difficulties. Loss-of-function is a reported mechanism.",
      rawEvidence: `GENE: SYNDEV4
Known disease association: autosomal dominant neurodevelopmental disorder
Reported inheritance: autosomal dominant
Known mechanism: haploinsufficiency / loss-of-function

Variant:
chr12:66190442 G>A
Transcript: NM_170002.4
HGVS: c.744-2G>A
Consequence: splice_acceptor_variant
Splice position: canonical -2 acceptor site
Predicted effect: likely acceptor splice-site disruption

VCF-style fields:
QUAL=902
FILTER=PASS
INFO: DP=50;MQ=60;QD=18.0;SOR=0.73
FORMAT: GT:AD:DP:GQ

Proband: 0/1:25,25:50:99
Mother: 0/0:42,0:42:99
Father: 0/0:40,0:40:99

Read-level notes:
ALT reads seen on both forward and reverse strands
ALT reads distributed across read positions
High mapping quality for ALT-supporting reads
No local low-complexity warning
No pseudogene or segmental duplication warning
No concerning soft-clipping around the variant
Second caller: detected

Population:
gnomAD AF = not observed
gnomAD allele count = 0

Constraint:
LOEUF = 0.19
pLI = 0.99

ClinVar-style summary:
No exact matching variant record found in local summary
Other canonical splice-site and truncating variants in SYNDEV4 have been submitted as pathogenic/likely pathogenic in affected individuals`,
      concern:
        "This is the strongest current candidate because phenotype fit, apparent de novo inheritance, canonical splice consequence, loss-of-function mechanism, population absence, and technical evidence all align.",
    },
    {
      id: "candidate-3",
      label: "Candidate 3",
      gene: "BROADPAR7",
      variant: "chr3:88211901 A>G",
      zygosity: "Heterozygous",
      consequence: "missense_variant",
      inheritanceSignal: "Inherited from unaffected father",
      clinicalFit:
        "BROADPAR7 has a broad neurodevelopmental association in limited reports. The variant is technically clean, but it is inherited from an unaffected parent and relatively frequent for a severe rare neurodevelopmental disorder.",
      rawEvidence: `GENE: BROADPAR7
Known disease association: broad neurodevelopmental association in limited reports
Reported inheritance: autosomal dominant proposed
Known mechanism: uncertain

Variant:
chr3:88211901 A>G
Transcript: NM_170003.1
HGVS: c.875A>G p.(Tyr292Cys)
Consequence: missense_variant
Protein domain: outside known recurrent functional region in local summary

VCF-style fields:
QUAL=640
FILTER=PASS
INFO: DP=46;MQ=60;QD=13.9;SOR=0.82
FORMAT: GT:AD:DP:GQ

Proband: 0/1:23,23:46:99
Mother: 0/0:39,0:39:99
Father: 0/1:21,20:41:99

Read-level notes:
ALT reads seen on both forward and reverse strands
ALT reads distributed across read positions
No local mapping warning
No soft-clipping concern

Population:
gnomAD AF = 0.0011
gnomAD allele count = 290
Homozygotes observed in population summary = 1

Constraint:
LOEUF = 0.82
pLI = 0.07

ClinVar-style summary:
No exact matching pathogenic record found in local summary
Gene-disease relationship remains limited and broad in available summary`,
      concern:
        "This is technically convincing as a real inherited variant, but it is clinically weak because inheritance, frequency, gene-disease strength, and mechanism do not fit well.",
    },
    {
      id: "candidate-4",
      label: "Candidate 4",
      gene: "PARALOG2",
      variant: "chr16:33219044 T>C",
      zygosity: "Heterozygous",
      consequence: "missense_variant",
      inheritanceSignal: "Possible de novo, but read origin is ambiguous",
      clinicalFit:
        "PARALOG2 has a possible epilepsy association, but the variant falls in a region where PARALOG2 and a nearby paralogue share near-identical sequence.",
      rawEvidence: `GENE: PARALOG2
Known disease association: possible autosomal dominant epilepsy-neurodevelopmental disorder
Reported inheritance: autosomal dominant proposed in limited reports
Known mechanism: missense variants in specific functional regions, evidence limited

Variant:
chr16:33219044 T>C
Transcript: NM_170004.2
HGVS: c.601T>C p.(Phe201Leu)
Consequence: missense_variant
Genomic context: high identity with paralogue PARALOG2B across this exon

VCF-style fields:
QUAL=72
FILTER=PASS
INFO: DP=41;MQ=35;QD=1.8;SOR=3.9
FORMAT: GT:AD:DP:GQ

Proband: 0/1:32,9:41:53
Mother: 0/0:36,1:37:73
Father: 0/0:35,0:35:99

Read-level notes:
ALT reads have mixed mapping quality
Several reads supporting ALT also carry paralogue-specific bases
Multiple reads have secondary or supplementary alignments
ALT reads cluster in a short segment of the read
Local segmental duplication warning present
Manual read review cannot confidently assign all ALT reads to PARALOG2 rather than PARALOG2B

Population:
gnomAD AF = not observed
gnomAD allele count = 0

Constraint:
LOEUF = 0.53
pLI = 0.45

ClinVar-style summary:
No exact matching variant record found in local summary
Gene-disease relationship remains limited in available summary`,
      concern:
        "This is not strong enough to prioritise because read origin is ambiguous. The ALT signal may reflect misalignment from a paralogous region rather than a true variant in PARALOG2.",
    },
  ],

  decisionCheckpoints: [
    {
      id: "checkpoint-1",
      title: "Checkpoint 1 — A high-impact annotation can still be technically fragile",
      context:
        "Candidate 1 is a stop-gained variant in a plausible loss-of-function gene, but it lies in an exon with high similarity to a paralogue. The evidence includes MQ=31, AD 27,7, GQ=48, QD=1.7, SOR=4.6, secondary alignments, and paralogue-matching mismatches.",
      question:
        "What is the safest interpretation of Candidate 1?",
      options: [
        {
          label: "A",
          text: "Prioritise it immediately because a stop-gained consequence in a relevant gene should outweigh mapping concerns.",
          isCorrect: false,
          feedback:
            "Not quite. A high-impact consequence does not override weak mapping confidence or paralogue confusion.",
        },
        {
          label: "B",
          text: "Treat it as clinically tempting but technically fragile, requiring read-level or orthogonal review before prioritisation.",
          isCorrect: true,
          feedback:
            "Correct. The gene and consequence are tempting, but the paralogue evidence makes the call unsafe to prioritise confidently.",
        },
        {
          label: "C",
          text: "Dismiss it as benign because any gene with a paralogue is impossible to analyse accurately.",
          isCorrect: false,
          feedback:
            "Not quite. Variants in duplicated regions can sometimes be resolved, but this evidence is not strong enough.",
        },
      ],
      teachingPoint:
        "Paralogue and segmental-duplication context can make a serious-looking variant technically unreliable.",
    },
    {
      id: "checkpoint-2",
      title: "Checkpoint 2 — Identify the strongest candidate",
      context:
        "Candidate 2 is an apparent de novo canonical splice acceptor variant in SYNDEV4. The proband and both parents have good coverage, reads map uniquely, and there is no segmental-duplication warning.",
      question:
        "Which candidate should be prioritised first?",
      options: [
        {
          label: "A",
          text: "Candidate 2, because phenotype, inheritance, canonical splice consequence, loss-of-function mechanism, population absence, and technical evidence align best.",
          isCorrect: true,
          feedback:
            "Correct. Candidate 2 has the strongest overall evidence pattern in this case.",
        },
        {
          label: "B",
          text: "Candidate 1, because stop-gained variants should usually be prioritised above canonical splice variants.",
          isCorrect: false,
          feedback:
            "Not quite. Candidate 1 has major technical uncertainty from paralogue mapping.",
        },
        {
          label: "C",
          text: "Candidate 4, because variants in duplicated regions should receive extra attention as possible missed diagnoses.",
          isCorrect: false,
          feedback:
            "Not quite. Duplicated regions require more caution, not less.",
        },
      ],
      teachingPoint:
        "The strongest candidate is the one with the best total evidence pattern, not the most dramatic consequence label.",
    },
    {
      id: "checkpoint-3",
      title: "Checkpoint 3 — Read origin matters",
      context:
        "Candidate 4 has ALT-supporting reads that also carry paralogue-specific bases, mixed mapping quality, and secondary alignments. Manual review cannot confidently assign all ALT reads to PARALOG2.",
      question:
        "What is the main technical concern with Candidate 4?",
      options: [
        {
          label: "A",
          text: "The ALT signal may come from misaligned reads from a paralogous region rather than a true variant in the target gene.",
          isCorrect: true,
          feedback:
            "Correct. When read origin is ambiguous, the variant cannot be confidently assigned to the clinically relevant gene.",
        },
        {
          label: "B",
          text: "The variant is definitely de novo because both parents are labelled reference at this position.",
          isCorrect: false,
          feedback:
            "Not quite. The inheritance label is not enough when mapping and read-origin confidence are weak.",
        },
        {
          label: "C",
          text: "The variant should be prioritised because absence from population data overcomes mapping ambiguity.",
          isCorrect: false,
          feedback:
            "Not quite. Population absence does not rescue a technically ambiguous call.",
        },
      ],
      teachingPoint:
        "For paralogous genes, you need confidence that the reads truly come from the gene being interpreted.",
    },
    {
      id: "checkpoint-4",
      title: "Checkpoint 4 — Technical reality versus clinical relevance",
      context:
        "Candidate 3 is technically clean, with balanced allele support and high GQ/MQ. However, it is inherited from an unaffected father, relatively frequent, and in a gene with limited broad evidence.",
      question:
        "What does Candidate 3 illustrate?",
      options: [
        {
          label: "A",
          text: "A technically real variant can still be clinically weak if inheritance, population frequency, gene-disease evidence, and phenotype specificity do not fit well.",
          isCorrect: true,
          feedback:
            "Correct. Candidate 3 is likely a real variant, but not a strong explanation for this case.",
        },
        {
          label: "B",
          text: "A technically clean variant should be prioritised above all variants from difficult mapping regions.",
          isCorrect: false,
          feedback:
            "Not quite. Technical confidence is important, but clinical plausibility still matters.",
        },
        {
          label: "C",
          text: "An inherited variant from an unaffected parent should be treated as a mapping artefact.",
          isCorrect: false,
          feedback:
            "Not quite. Inherited variants can be real. The issue is whether they fit the disease model.",
        },
      ],
      teachingPoint:
        "Technical confidence answers whether the call is likely real. Clinical prioritisation also needs inheritance, frequency, mechanism, and phenotype fit.",
    },
    {
      id: "checkpoint-5",
      title: "Checkpoint 5 — Safe service-style next step",
      context:
        "Candidate 2 is the strongest current finding. Candidate 1 and Candidate 4 are clinically tempting but affected by paralogue/mapping uncertainty. Candidate 3 is technically real but clinically weak.",
      question:
        "What is the safest next step?",
      options: [
        {
          label: "A",
          text: "Prioritise Candidate 1 because a stop-gained consequence should remain the highest-priority annotation.",
          isCorrect: false,
          feedback:
            "Not quite. Candidate 1 has paralogue-related technical uncertainty that must not be ignored.",
        },
        {
          label: "B",
          text: "Prioritise Candidate 2 for review, document paralogue/mapping concerns for Candidates 1 and 4, and explain why Candidate 3 is lower priority.",
          isCorrect: true,
          feedback:
            "Correct. This is safe and reviewable because it prioritises the strongest candidate while making technical caveats visible.",
        },
        {
          label: "C",
          text: "Ignore all paralogue-region variants without documenting them because duplicated regions cannot be interpreted.",
          isCorrect: false,
          feedback:
            "Not quite. They may be deprioritised, but the reasoning and technical limitations should be documented.",
        },
      ],
      teachingPoint:
        "Safe practice means making mapping uncertainty visible rather than allowing a dramatic annotation to drive the conclusion.",
    },
  ],

  finalReflection:
    "A safe trainee-level conclusion would be that Candidate 2 is the strongest current candidate for further review because phenotype fit, apparent de novo inheritance, canonical splice consequence, loss-of-function mechanism, population absence, and technical evidence all align. Candidate 1 is clinically tempting because it is a possible stop-gained variant in a plausible gene, but it lies in a paralogous exon and has low mapping quality, weak allele balance, secondary alignments, paralogue-like mismatches, read-end clustering, and no second-caller support. Candidate 4 is also weakened by ambiguous read origin between a gene and its paralogue. Candidate 3 appears technically real but is lower priority because it is inherited, relatively frequent, and has limited gene-disease support. The safest next step is to prioritise Candidate 2 and document the paralogue/mapping limitations for the other candidates.",
};