export const case39 = {
  id: "case-39",
  slug: "roh-upd-clue-case",
  title: "Case 39: Runs of homozygosity and UPD clue",
  level: "Advanced",
  summary:
    "A genome-wide context case focused on recognising when runs of homozygosity or possible uniparental disomy change how a candidate variant should be interpreted.",

  visualisationExampleId: null,

  assessmentFocus: [
    "Runs of homozygosity interpretation",
    "Possible uniparental disomy clue",
    "Unexpected homozygous variant in a trio",
    "Recessive candidate interpretation",
    "Genome-wide context review",
    "Distinguishing UPD-like pattern from consanguinity",
    "CNV exclusion of apparent homozygosity",
    "Safe escalation of variant-level and genome-wide findings",
  ],

  guidedTutorMode: {
    type: "static-rule-based",
    description:
      "Uses built-in hints, checkpoint feedback, model answers, and self-check criteria to support safe case reasoning.",
  },

  phase5Assessment: {
    candidateRanking: {
      prompt:
        "Rank the findings from highest to lowest review priority in this case, remembering to include both variant-level evidence and genome-wide context.",
      correctOrder: ["candidate-2", "candidate-3", "candidate-1"],
      explanation:
        "Candidate 2 is the strongest finding because the homozygous canonical splice acceptor variant fits a recessive disorder, the phenotype matches, the variant is rare and technically robust, and the large chromosome 15 ROH/possible maternal UPD explains the inheritance pattern. Candidate 3 is a low-confidence CNV that may need cautious review if pursued, but it has weak technical and gene-disease support and does not explain the chromosome 15 ROH clue. Candidate 1 is technically real but lower priority because it is inherited, relatively frequent, outside the main ROH, and in a weakly supported gene.",
    },

    escalationDecision: {
      prompt: "Choose the safest next action for this case.",
      options: [
        {
          id: "prioritise-rohrec2-and-upd-review",
          label: "A",
          decision:
            "Prioritise Candidate 2 for review, document the chromosome 15 ROH/possible UPD context, and escalate both the variant and genome-wide finding through the appropriate review pathway.",
          isBest: true,
          feedback:
            "Best decision. Candidate 2 has the strongest integrated evidence pattern, and the ROH/possible UPD context is essential for explaining the unexpected homozygous genotype.",
        },
        {
          id: "report-variant-ignore-upd",
          label: "B",
          decision:
            "Report only the ROHREC2 splice variant and leave out the ROH/possible UPD context.",
          isBest: false,
          feedback:
            "Review this choice. The ROH/possible UPD context is not optional here. It helps explain why a maternally carried allele appears homozygous in the child and may have wider clinical implications.",
        },
        {
          id: "dismiss-because-father-reference",
          label: "C",
          decision:
            "Dismiss Candidate 2 because the father is reference and the parents are not known to be consanguineous.",
          isBest: false,
          feedback:
            "Review this choice. A large chromosome 15 ROH provides a plausible explanation, such as maternal uniparental isodisomy or segmental isodisomy.",
        },
      ],
    },

    writtenSummary: {
      prompt:
        "Write a short trainee-level handover summary explaining why Candidate 2 is strongest, how the ROH/possible UPD context affects interpretation, and why the other candidates are weaker.",
      checklist: [
        "States that Candidate 2 is the strongest current candidate.",
        "Mentions that Candidate 2 is a homozygous canonical splice acceptor variant.",
        "Links ROHREC2 to a recessive neurodevelopmental disorder matching the phenotype.",
        "Explains that the variant lies within a large chromosome 15 ROH.",
        "Explains that the mother is heterozygous and father is reference.",
        "Recognises possible maternal UPD/isodisomy or segmental isodisomy as a plausible explanation.",
        "Notes that CNV review does not support deletion-driven apparent homozygosity.",
        "Explains why Candidate 1 is weak.",
        "Explains why Candidate 3 is weak.",
        "Recommends escalation of both the variant and the genome-wide ROH/possible UPD finding.",
      ],
      modelAnswer:
        "Candidate 2 is the strongest current candidate for review. It is a homozygous canonical splice acceptor variant in ROHREC2, a recessive gene with phenotype overlap including developmental delay, hypotonia, feeding difficulties, seizures, and poor growth. The genotype is unusual because the mother is heterozygous and the father is reference, but the variant lies within a large chromosome 15 run of homozygosity. The genome-wide pattern suggests possible maternal uniparental isodisomy or segmental isodisomy, which could explain why a maternally carried rare allele appears homozygous in the proband. CNV review does not support a deletion causing apparent homozygosity. Candidate 1 is technically real but weak because it is inherited, relatively frequent, outside the ROH, and in a limited-evidence gene. Candidate 3 is a low-confidence CNV with limited gene-disease support and does not explain the chromosome 15 ROH clue. The safest next step is to prioritise Candidate 2 and escalate both the variant-level finding and the ROH/possible UPD context through the appropriate laboratory review pathway.",
    },
  },

  reasoningScorecard: [
    {
      category: "ROH / UPD recognition",
      maxScore: 2,
      expectation:
        "Recognises that the large chromosome 15 ROH may explain the unexpected homozygous genotype through possible maternal UPD or segmental isodisomy.",
    },
    {
      category: "Candidate 2 interpretation",
      maxScore: 2,
      expectation:
        "Explains why the homozygous canonical splice acceptor variant in ROHREC2 is the strongest finding when phenotype, mechanism, rarity, and technical confidence are considered.",
    },
    {
      category: "Distinguishing UPD from consanguinity",
      maxScore: 2,
      expectation:
        "Explains that one large chromosome-level ROH suggests a different pattern from multiple genome-wide ROH blocks expected with parental relatedness.",
    },
    {
      category: "Alternative candidate comparison",
      maxScore: 2,
      expectation:
        "Explains why Candidate 1 and Candidate 3 are weaker because they do not fit the phenotype, mechanism, inheritance, technical evidence, population evidence, or genome-wide clue as well.",
    },
    {
      category: "Safe escalation",
      maxScore: 2,
      expectation:
        "Recommends review of both the candidate variant and the broader ROH/possible UPD finding rather than reporting the variant in isolation.",
    },
  ],

  patient: {
    age: 3,
    sex: "Female",
  },

  referralReason:
    "A 3-year-old girl has been referred for rare disease genome analysis because of developmental delay, hypotonia, feeding difficulties, seizures, and poor growth.",

  testType:
    "Rare disease trio genome sequencing with SNV/indel, CNV, and genome-wide homozygosity review",

  familyStructure:
    "The proband and both biological parents have been tested. Parents are reportedly unaffected. No known consanguinity is reported on the referral form.",

  history: [
    "Global developmental delay noted in infancy",
    "Hypotonia from early infancy",
    "Feeding difficulties requiring specialist support",
    "Seizures beginning before age 2",
    "Poor growth",
    "No known previous molecular diagnosis",
    "No known consanguinity reported",
  ],

  phenotype: [
    "Global developmental delay",
    "Hypotonia",
    "Feeding difficulties",
    "Seizures",
    "Poor growth",
  ],

  familyHistory:
    "Both parents are reportedly unaffected. No known consanguinity is reported. No known family history of developmental delay, seizures, hypotonia, feeding difficulties, poor growth, or a similar presentation.",

  serviceContext: [
    "This is a genome-wide context case.",
    "The key issue is that candidate interpretation can change when the genome shows long runs of homozygosity or possible uniparental disomy.",
    "A homozygous variant may look unexpected in a non-consanguineous family unless the surrounding genomic context explains why it is homozygous.",
    "Your task is to decide whether the homozygosity pattern supports a recessive candidate, suggests possible UPD, or represents a broader service issue needing escalation.",
  ],

  candidateFindings: [
    {
      id: "candidate-1",
      label: "Candidate 1",
      gene: "BROADROH1",
      variant: "chr4:77190442 C>T",
      zygosity: "Heterozygous",
      consequence: "missense_variant",
      inheritanceSignal: "Inherited from unaffected father",
      clinicalFit:
        "BROADROH1 has a broad neurodevelopmental association in limited reports, but the variant is inherited, relatively frequent, and does not explain the genome-wide homozygosity finding.",
      rawEvidence: `GENE: BROADROH1
Known disease association: broad neurodevelopmental association in limited reports
Reported inheritance: autosomal dominant proposed
Known mechanism: uncertain
Gene-disease validity in local summary: limited

Variant:
chr4:77190442 C>T
Transcript: NM_390001.2
HGVS: c.899C>T p.(Pro300Leu)
Consequence: missense_variant

VCF-style fields:
QUAL=650
FILTER=PASS
INFO: DP=46;MQ=60;QD=14.1;SOR=0.82
FORMAT: GT:AD:DP:GQ

Proband: 0/1:23,23:46:99
Mother: 0/0:40,0:40:99
Father: 0/1:21,22:43:99

Read-level notes:
ALT reads seen on both forward and reverse strands
ALT reads distributed across read positions
No local mapping warning
No soft-clipping concern

Population:
gnomAD AF = 0.0015
gnomAD allele count = 390
Homozygotes observed in population summary = 1

Constraint:
LOEUF = 0.82
pLI = 0.08

ClinVar-style summary:
No exact matching pathogenic record found in local summary
Gene-disease relationship remains limited and broad

Genome-wide context:
This variant is not located within the major run of homozygosity on chromosome 15
This finding does not explain the ROH/possible UPD clue`,
      concern:
        "This is technically real, but it is weak as a primary candidate because of inheritance, population frequency, limited gene-disease evidence, and poor fit to the genome-wide homozygosity clue.",
    },
    {
      id: "candidate-2",
      label: "Candidate 2",
      gene: "ROHREC2",
      variant: "chr15:55249071 G>A",
      zygosity: "Homozygous",
      consequence: "splice_acceptor_variant",
      inheritanceSignal:
        "Homozygous in proband; mother heterozygous; father reference; variant lies within a large chromosome 15 run of homozygosity suggesting possible maternal uniparental isodisomy or segmental UPD",
      clinicalFit:
        "ROHREC2 is associated with an autosomal recessive neurodevelopmental disorder including developmental delay, hypotonia, feeding difficulties, seizures, and poor growth. Biallelic loss-of-function is a reported mechanism.",
      rawEvidence: `GENE: ROHREC2
Known disease association: autosomal recessive neurodevelopmental disorder
Reported inheritance: autosomal recessive
Known mechanism: biallelic loss-of-function
Gene-disease validity in local summary: established/moderate

Variant:
chr15:55249071 G>A
Transcript: NM_390002.5
HGVS: c.744-2G>A
Consequence: splice_acceptor_variant
Splice position: canonical -2 acceptor site
Predicted effect: likely acceptor splice-site disruption

VCF-style fields:
QUAL=920
FILTER=PASS
INFO: DP=54;MQ=60;QD=17.0;SOR=0.70
FORMAT: GT:AD:DP:GQ

Proband: 1/1:0,54:54:99
Mother: 0/1:24,23:47:99
Father: 0/0:45,0:45:99

Read-level notes:
ALT reads in proband seen on both forward and reverse strands
ALT reads distributed across read positions
High mapping quality for ALT-supporting reads
No local low-complexity warning
No pseudogene or segmental duplication warning
No concerning soft-clipping around the variant
Second caller: detected

Genome-wide homozygosity / UPD review:
Large run of homozygosity detected on chromosome 15
Approximate ROH interval: chr15:21800000-79800000
ROH size: ~58 Mb
Variant lies within this ROH interval
Most informative SNPs across the ROH are homozygous in the proband
Pattern suggests possible maternal uniparental isodisomy or segmental maternal isodisomy for this region
No genome-wide pattern of multiple large ROH blocks suggesting close parental consanguinity
Relationship checks otherwise consistent with reported trio

Parental origin clue:
Within the ROH interval, informative SNPs are predominantly consistent with maternal allele sharing
Father lacks the ROHREC2 variant and does not contribute the variant allele in the current evidence
Interpretation note: this supports possible maternal UPD/isodisomy as the reason a maternally carried allele is homozygous in the child

CNV review:
No deletion or duplication detected across ROHREC2
Normalised depth across ROHREC2 exons: ~0.97–1.04
This argues against a deletion causing apparent homozygosity

Population:
gnomAD AF = 0.000003
gnomAD allele count = 1
No homozygotes observed in local summary

Constraint:
LOEUF = 0.29
pLI = 0.86

ClinVar-style summary:
No exact matching variant record found in local summary
Other biallelic canonical splice and truncating variants in ROHREC2 have been submitted as pathogenic/likely pathogenic in affected individuals

Service note:
Possible UPD/isodisomy may have wider clinical implications and should be escalated through the appropriate review pathway.`,
      concern:
        "This is the strongest current candidate because the homozygous splice variant fits the recessive disorder, the phenotype matches, the call is technically strong, and the large chromosome 15 ROH/possible UPD explains why a maternally carried rare variant appears homozygous in the proband.",
    },
    {
      id: "candidate-3",
      label: "Candidate 3",
      gene: "CNVROH5",
      variant: "chr9:11810000-11870000 deletion",
      zygosity: "Possible heterozygous deletion",
      consequence: "copy_number_loss",
      inheritanceSignal: "Possible de novo, but low-confidence CNV",
      clinicalFit:
        "The interval contains a possible neurodevelopmental candidate gene, but the CNV evidence is borderline and does not explain the chromosome 15 ROH finding.",
      rawEvidence: `CNV REGION: chr9:11810000-11870000
CNV type: possible deletion
Estimated size: 60 kb
Copy-number state: possible one-copy loss

Gene:
CNVROH5
Known disease association: possible neurodevelopmental association in limited reports
Known mechanism: uncertain
Dosage sensitivity: not established

Affected region:
Partial deletion involving exons 2–3 of 10
Breakpoint not resolved

Inheritance:
Proband: possible deletion called
Mother: no deletion detected
Father: no deletion detected
Inheritance signal: possible de novo, but technical confidence limited

CNV caller summary:
Caller 1: deletion LOW_CONFIDENCE
Caller 2: not called
Quality score: 31
Number of affected targets/windows: 5

Read-depth evidence:
Expected normalised depth in diploid regions: ~1.00
Proband normalised depth across interval: ~0.73
Mother normalised depth across interval: ~0.98
Father normalised depth across interval: ~1.00
Flanking region depths: variable

Breakpoint evidence:
Split reads: none
Paired-end support: not convincing
Breakpoint not resolved

B-allele / SNP pattern:
Too few informative SNPs across interval

Population:
Partial overlapping deletions observed in local population CNV summary
No established pathogenic recurrent deletion in local summary

Technical notes:
Coverage variability warning present
Local GC-content warning present
Manual CNV plot review recommended before prioritisation

Genome-wide context:
This CNV is not on chromosome 15 and does not explain the major ROH/possible UPD pattern`,
      concern:
        "This is a weak CNV candidate because the call is low-confidence, the gene-disease evidence is limited, and it does not fit the key genome-wide clue.",
    },
  ],

  decisionCheckpoints: [
    {
      id: "checkpoint-1",
      title: "Checkpoint 1 — Homozygous variant in a non-consanguineous trio",
      context:
        "Candidate 2 is homozygous in the proband, heterozygous in the mother, and reference in the father. The variant lies within a large chromosome 15 run of homozygosity.",
      question: "What is the safest interpretation of this pattern?",
      options: [
        {
          label: "A",
          text: "The variant must be a genotyping error because the father is reference.",
          isCorrect: false,
          feedback:
            "Not quite. A genotyping error is one possibility to review, but the large ROH pattern provides a biological explanation such as possible UPD/isodisomy.",
        },
        {
          label: "B",
          text: "The pattern may be explained by a large region of homozygosity, such as possible maternal uniparental isodisomy or segmental UPD.",
          isCorrect: true,
          feedback:
            "Correct. The ROH context changes how the inheritance pattern should be interpreted.",
        },
        {
          label: "C",
          text: "It proves the parents are closely related.",
          isCorrect: false,
          feedback:
            "Not quite. A single large ROH on one chromosome may suggest UPD/segmental isodisomy rather than genome-wide consanguinity.",
        },
      ],
      teachingPoint:
        "Runs of homozygosity provide context for interpreting unexpected homozygous variants.",
    },
    {
      id: "checkpoint-2",
      title: "Checkpoint 2 — Distinguish UPD-like pattern from consanguinity",
      context:
        "The proband has one major ROH on chromosome 15, but not multiple large ROH blocks across the genome.",
      question: "Why does this matter?",
      options: [
        {
          label: "A",
          text: "A single chromosome-level ROH may suggest UPD or segmental isodisomy, whereas multiple genome-wide ROH blocks may suggest parental relatedness.",
          isCorrect: true,
          feedback:
            "Correct. The distribution of ROH changes the likely explanation.",
        },
        {
          label: "B",
          text: "Any ROH automatically means the variant is benign.",
          isCorrect: false,
          feedback:
            "Not quite. ROH can make a recessive diagnosis more plausible if a relevant variant lies within it.",
        },
        {
          label: "C",
          text: "ROH should be ignored because only SNV quality metrics matter.",
          isCorrect: false,
          feedback:
            "Not quite. Genome-wide context can be crucial for inheritance interpretation.",
        },
      ],
      teachingPoint:
        "ROH interpretation depends on pattern, size, chromosome distribution, and candidate-gene context.",
    },
    {
      id: "checkpoint-3",
      title: "Checkpoint 3 — Identify the strongest candidate",
      context:
        "Candidate 2 is a homozygous canonical splice acceptor variant in a recessive gene that fits the phenotype. It lies inside the large chromosome 15 ROH, and the technical evidence is strong.",
      question: "Why is Candidate 2 the strongest current candidate?",
      options: [
        {
          label: "A",
          text: "Because phenotype fit, recessive mechanism, homozygous splice consequence, rarity, technical confidence, and ROH/possible UPD context all align.",
          isCorrect: true,
          feedback:
            "Correct. Candidate 2 has the strongest integrated evidence pattern.",
        },
        {
          label: "B",
          text: "Because all variants inside ROH are pathogenic.",
          isCorrect: false,
          feedback:
            "Not quite. ROH supports interpretation only when the variant, gene, phenotype, and mechanism also fit.",
        },
        {
          label: "C",
          text: "Because homozygous variants do not need technical review.",
          isCorrect: false,
          feedback:
            "Not quite. The genotype still needs read-level, depth, CNV, and inheritance review.",
        },
      ],
      teachingPoint:
        "ROH is supportive evidence, not a diagnosis by itself.",
    },
    {
      id: "checkpoint-4",
      title: "Checkpoint 4 — Do not be distracted by weak alternatives",
      context:
        "Candidate 1 is a technically real inherited missense variant with limited gene-disease support. Candidate 3 is a low-confidence CNV that does not explain the chromosome 15 ROH clue.",
      question: "Why are Candidates 1 and 3 weaker than Candidate 2?",
      options: [
        {
          label: "A",
          text: "Because they do not fit the phenotype, mechanism, inheritance, population, and genome-wide context as well as Candidate 2.",
          isCorrect: true,
          feedback:
            "Correct. Candidate 2 is stronger because several independent evidence types align.",
        },
        {
          label: "B",
          text: "Because only variants on chromosome 15 can ever be relevant.",
          isCorrect: false,
          feedback:
            "Not quite. Other chromosomes can be relevant, but the chromosome 15 ROH is the key clue in this case.",
        },
        {
          label: "C",
          text: "Because CNVs are always less important than SNVs.",
          isCorrect: false,
          feedback:
            "Not quite. CNVs can be very important, but Candidate 3 is technically and clinically weak.",
        },
      ],
      teachingPoint:
        "Candidate ranking should integrate genome-wide context with the usual variant-level evidence.",
    },
    {
      id: "checkpoint-5",
      title: "Checkpoint 5 — Safe service-style next step",
      context:
        "Candidate 2 is the strongest current candidate, and the genome-wide pattern suggests possible UPD or segmental isodisomy.",
      question: "What is the safest next step?",
      options: [
        {
          label: "A",
          text: "Prioritise Candidate 2 for review, document the ROH/possible UPD context, and escalate both the variant and genome-wide finding appropriately.",
          isCorrect: true,
          feedback:
            "Correct. This captures both the candidate variant and the broader inheritance mechanism.",
        },
        {
          label: "B",
          text: "Report only the splice variant and ignore the ROH/UPD context.",
          isCorrect: false,
          feedback:
            "Not quite. The ROH/UPD context is essential to explaining the inheritance pattern and may have wider implications.",
        },
        {
          label: "C",
          text: "Dismiss Candidate 2 because the father is reference.",
          isCorrect: false,
          feedback:
            "Not quite. The large ROH provides a plausible explanation for the unexpected homozygous pattern.",
        },
      ],
      teachingPoint:
        "Safe reporting preparation means making both the variant-level and genome-wide context visible for review.",
    },
  ],

  finalReflection:
    "A safe trainee-level conclusion would be that Candidate 2 is the strongest current candidate for review because it is a homozygous canonical splice acceptor variant in ROHREC2, a recessive gene that fits the patient’s developmental delay, hypotonia, feeding difficulties, seizures, and poor growth. The variant is rare, technically robust, and lies within a large chromosome 15 run of homozygosity, with a pattern suggesting possible maternal uniparental isodisomy or segmental isodisomy. Candidate 1 is technically real but weak because of inheritance, frequency, and limited gene-disease evidence. Candidate 3 is a low-confidence CNV and does not explain the key genome-wide finding. The safest next step is to prioritise Candidate 2, document the ROH/possible UPD context, and escalate through the appropriate clinical laboratory review pathway.",
};