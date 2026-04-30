export const case15 = {
  id: "case-15",
  slug: "homopolymer-indel-review-case",
  title: "Case 15: Homopolymer indel review",
  level: "Intermediate",
  summary:
    "A technical confidence case focused on recognising indel artefacts, homopolymer/repeat-context problems, inconsistent representation, and when an indel is reliable enough to prioritise.",

  visualisationExampleId: null,

  assessmentFocus: [
    "Homopolymer indel artefact recognition",
    "Indel read-level confidence",
    "Indel representation and normalisation",
    "Frameshift consequence versus technical reliability",
    "Population and inheritance interpretation",
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
        "Rank the findings from strongest to weakest based on phenotype fit, inheritance, consequence, indel technical confidence, repeat/homopolymer context, representation issues, population evidence, and whether each finding should drive the case conclusion.",
      correctOrder: [
        "candidate-3",
        "candidate-1",
        "candidate-4",
        "candidate-5",
        "candidate-2",
      ],
      explanation:
        "Candidate 3 is strongest because it has the best convergence across phenotype fit, apparent de novo inheritance, frameshift consequence, loss-of-function mechanism, population absence, and reliable indel evidence with consistent read representation and second-caller support. Candidate 1 is clinically tempting because it is a possible de novo frameshift in a plausible loss-of-function gene, but it is technically fragile due to homopolymer context, weak allele balance, strand/read-position concerns, inconsistent representation, and lack of second-caller support. Candidate 4 is weaker because the two nearby indel records may represent the same paternal haplotype rather than two independent alleles in a recessive gene. Candidate 5 is weaker because it is inherited, common for a severe rare disease model, observed in homozygotes, and lies in a low-complexity tract with uncertain gene mechanism. Candidate 2 is weakest because it is a technically real inherited missense variant with limited gene-disease evidence, uncertain mechanism, and population frequency that is not compelling for this presentation.",
    },

    escalationDecision: {
      prompt:
        "Choose the safest next action for this candidate set.",
      options: [
        {
          id: "prioritise-candidate-1",
          label: "A",
          decision:
            "Prioritise Candidate 1 as the lead finding because a de novo frameshift in a plausible loss-of-function gene should outweigh homopolymer concerns.",
          isBest: false,
          feedback:
            "Review this choice. Candidate 1 is clinically tempting, but the homopolymer context, weak read evidence, inconsistent representation, and lack of second-caller support mean it should not lead the case without further review.",
        },
        {
          id: "prioritise-candidate-3",
          label: "B",
          decision:
            "Prioritise Candidate 3 for formal review, while documenting Candidate 1 as a technically fragile homopolymer indel and Candidate 4 as a representation issue.",
          isBest: true,
          feedback:
            "Best decision. Candidate 3 has the strongest clinical and technical convergence, while the other indel-like findings need careful caveating rather than over-interpretation.",
        },
        {
          id: "prioritise-candidate-4",
          label: "C",
          decision:
            "Prioritise Candidate 4 as compound heterozygous because two nearby frameshift records are present in the same recessive gene.",
          isBest: false,
          feedback:
            "Review this choice. Two nearby indel records are not automatically two independent alleles. The same reads support both records, and local phasing suggests one paternal haplotype.",
        },
      ],
    },

    writtenSummary: {
      prompt:
        "Write a short trainee-level handover summary explaining the strongest indel candidate, why the homopolymer and representation issues matter, why the other findings are weaker, and the safest next step.",
      checklist: [
        "Names Candidate 3 as the strongest current finding.",
        "Explains that Candidate 3 is an apparent de novo frameshift in NDDIND5.",
        "Links NDDIND5 loss-of-function mechanism to developmental delay, speech delay, epilepsy, hypotonia, and learning difficulties.",
        "Mentions that Candidate 3 has reliable indel evidence, including balanced support, consistent representation, and second-caller support.",
        "Explains why Candidate 1 is tempting but technically fragile because of the homopolymer context.",
        "Mentions read-level concerns for Candidate 1 such as weak allele balance, strand bias, read-end clustering, and inconsistent representation.",
        "Explains why Candidate 4 should not be counted as two independent alleles without normalisation/phasing review.",
        "Explains why Candidate 5 is weakened by inheritance, population frequency, homozygotes, and low-complexity context.",
        "Explains why Candidate 2 is technically real but clinically weak.",
        "Avoids calling Candidate 3 a final diagnosis without formal review and sign-off.",
      ],
      modelAnswer:
        "Candidate 3 is the strongest current finding for formal review. It is an apparent de novo frameshift in NDDIND5, a gene associated with autosomal dominant neurodevelopmental disorder with epilepsy where loss-of-function is a reported mechanism. The proband’s developmental delay, speech delay, epilepsy, hypotonia, and learning difficulties fit the disease context, and the indel evidence is technically reassuring: the insertion is not in a homopolymer tract, has balanced allele support, high genotype and mapping quality, consistent local read representation, no major mapping warnings, and second-caller support. Candidate 1 is clinically tempting because it is a possible de novo frameshift in a plausible loss-of-function gene, but it lies in an A-homopolymer tract and has weak allele balance, strand/read-position concerns, slippage-like read patterns, inconsistent local representation, and no second-caller support. Candidate 4 should not be over-interpreted as a recessive diagnosis because the two nearby indel records may represent the same paternal haplotype rather than two independent alleles. Candidate 5 is weak because it is inherited, common in population data, observed in homozygotes, and lies in a low-complexity tract with uncertain mechanism. Candidate 2 is technically real but lower priority because it is inherited, relatively frequent, and has limited gene-disease support. The safest next step is to prioritise Candidate 3 for formal review and document the indel-specific caveats for the other findings rather than overcalling artefact-like or representation-limited indels.",
    },
  },

  reasoningScorecard: [
    {
      category: "Indel technical confidence",
      maxScore: 2,
      expectation:
        "Uses allele balance, genotype quality, mapping quality, strand support, read-position distribution, second-caller support, and manual review clues to judge indel reliability.",
    },
    {
      category: "Homopolymer and repeat-context awareness",
      maxScore: 2,
      expectation:
        "Recognises that homopolymer or low-complexity sequence can increase indel artefact risk and make local representation less reliable.",
    },
    {
      category: "Representation and phasing reasoning",
      maxScore: 2,
      expectation:
        "Avoids counting nearby indel records as independent alleles when they may reflect the same local haplotype or normalisation issue.",
    },
    {
      category: "Candidate prioritisation",
      maxScore: 2,
      expectation:
        "Prioritises the candidate with the best convergence across phenotype, inheritance, mechanism, consequence, population evidence, and reliable indel support.",
    },
    {
      category: "Safe escalation",
      maxScore: 2,
      expectation:
        "Escalates the strongest indel candidate for formal review while documenting homopolymer, low-complexity, population, and representation caveats in weaker findings.",
    },
  ],

  patient: {
    age: 7,
    sex: "Male",
  },

  referralReason:
    "A 7-year-old boy has been referred for rare disease genome analysis because of developmental delay, speech delay, epilepsy, mild hypotonia, and learning difficulties.",

  testType: "Rare disease trio genome sequencing",

  familyStructure:
    "The proband and both biological parents have been tested. Both parents are reportedly unaffected.",

  history: [
    "Global developmental delay noted in early childhood",
    "Speech delay requiring ongoing support",
    "Epilepsy beginning at age 4",
    "Mild hypotonia",
    "Learning difficulties",
    "No known previous molecular diagnosis",
  ],

  phenotype: [
    "Global developmental delay",
    "Speech delay",
    "Epilepsy",
    "Hypotonia",
    "Learning difficulties",
  ],

  familyHistory:
    "Both parents are unaffected. No known family history of developmental delay, epilepsy, hypotonia, or a similar neurodevelopmental presentation.",

  serviceContext: [
    "The analysis is being performed in a rare disease service context.",
    "The key technical issue in this case is indel confidence.",
    "Small insertions and deletions can be difficult to interpret in homopolymer or repetitive sequence contexts.",
    "Your task is to separate a real, mechanism-compatible indel from artefact-like indels and representation problems.",
  ],

  candidateFindings: [
    {
      id: "candidate-1",
      label: "Candidate 1",
      gene: "HOMOP1",
      variant: "chr4:77190221 delA",
      zygosity: "Heterozygous",
      consequence: "frameshift_variant",
      inheritanceSignal: "Apparent de novo, but technically fragile",
      clinicalFit:
        "HOMOP1 is associated with an autosomal dominant neurodevelopmental disorder and loss-of-function is a reported mechanism. However, the variant lies in a long A-homopolymer tract where indel calling is technically difficult.",
      rawEvidence: `GENE: HOMOP1
Known disease association: autosomal dominant neurodevelopmental disorder
Reported inheritance: autosomal dominant
Known mechanism: haploinsufficiency / loss-of-function

Variant:
chr4:77190221 delA
Transcript: NM_150001.3
HGVS: c.908del p.(Asn303Thrfs*8)
Consequence: frameshift_variant
Sequence context: AAAAAAAA homopolymer tract

VCF-style fields:
QUAL=51
FILTER=PASS
INFO: DP=36;MQ=48;QD=1.4;SOR=4.8
FORMAT: GT:AD:DP:GQ

Proband: 0/1:29,7:36:49
Mother: 0/0:34,1:35:68
Father: 0/0:37,0:37:99

Read-level notes:
ALT-supporting reads are mostly on one strand
5 of 7 ALT reads occur near read ends
Local indel realignment is inconsistent across reads
Several reads show slippage-like pattern through the A-homopolymer
Second caller: not detected
Manual IGV/read-level review recommended

Representation notes:
Equivalent left/right-aligned representations possible within the homopolymer
Local annotation warns that the exact indel position may be ambiguous

Population:
gnomAD AF = not observed
gnomAD allele count = 0

Constraint:
LOEUF = 0.24
pLI = 0.96

ClinVar-style summary:
No exact matching variant record found in local summary
Truncating variants in HOMOP1 have been submitted in affected individuals, but this homopolymer region is technically difficult`,
      concern:
        "This is clinically tempting because it is a possible de novo frameshift in a plausible loss-of-function gene, but the homopolymer context and read-level evidence make it technically fragile.",
    },
    {
      id: "candidate-2",
      label: "Candidate 2",
      gene: "BROADN6",
      variant: "chr12:44011891 C>T",
      zygosity: "Heterozygous",
      consequence: "missense_variant",
      inheritanceSignal: "Inherited from unaffected mother",
      clinicalFit:
        "BROADN6 has a broad neurodevelopmental association in limited reports, but the variant is inherited from an unaffected parent and is relatively frequent for a severe rare childhood-onset condition.",
      rawEvidence: `GENE: BROADN6
Known disease association: broad neurodevelopmental association in limited reports
Reported inheritance: autosomal dominant proposed
Known mechanism: uncertain

Variant:
chr12:44011891 C>T
Transcript: NM_150002.1
HGVS: c.689C>T p.(Thr230Met)
Consequence: missense_variant

VCF-style fields:
QUAL=690
FILTER=PASS
INFO: DP=47;MQ=60;QD=14.7;SOR=0.79
FORMAT: GT:AD:DP:GQ

Proband: 0/1:23,24:47:99
Mother: 0/1:22,21:43:99
Father: 0/0:38,0:38:99

Read-level notes:
ALT reads seen on both forward and reverse strands
ALT reads distributed across read positions
No local low-complexity warning
No soft-clipping concern

Population:
gnomAD AF = 0.0012
gnomAD allele count = 320
Homozygotes observed in population summary = 1

Constraint:
LOEUF = 0.79
pLI = 0.10

ClinVar-style summary:
No exact matching pathogenic record found in local summary
Gene-disease relationship remains limited in available summary`,
      concern:
        "This appears technically real, but it is weak as a primary rare disease candidate because of inheritance, population frequency, and limited gene-disease/mechanism evidence.",
    },
    {
      id: "candidate-3",
      label: "Candidate 3",
      gene: "NDDIND5",
      variant: "chr9:118772044 T>TA",
      zygosity: "Heterozygous",
      consequence: "frameshift_variant",
      inheritanceSignal: "Apparent de novo with good parental coverage",
      clinicalFit:
        "NDDIND5 is associated with an autosomal dominant neurodevelopmental disorder including developmental delay, speech delay, seizures, hypotonia, and learning difficulties. Loss-of-function is a reported disease mechanism.",
      rawEvidence: `GENE: NDDIND5
Known disease association: autosomal dominant neurodevelopmental disorder with epilepsy
Reported inheritance: autosomal dominant
Known mechanism: haploinsufficiency / loss-of-function

Variant:
chr9:118772044 T>TA
Transcript: NM_150003.4
HGVS: c.1210dup p.(Ser404Lysfs*12)
Consequence: frameshift_variant
Sequence context: not in a homopolymer tract
Predicted effect: premature termination codon

VCF-style fields:
QUAL=834
FILTER=PASS
INFO: DP=52;MQ=60;QD=16.0;SOR=0.72
FORMAT: GT:AD:DP:GQ

Proband: 0/1:27,25:52:99
Mother: 0/0:44,0:44:99
Father: 0/0:42,0:42:99

Read-level notes:
ALT reads seen on both forward and reverse strands
ALT reads distributed across read positions
Insertion represented consistently across local reads
No local low-complexity sequence flag
No pseudogene or segmental duplication warning
No concerning soft-clipping around the variant
Second caller: detected
Manual review: local read pattern consistent with true heterozygous insertion

Population:
gnomAD AF = not observed
gnomAD allele count = 0

Constraint:
LOEUF = 0.20
pLI = 0.98

ClinVar-style summary:
No exact matching variant record found in local summary
Other truncating/frameshift variants in NDDIND5 have been submitted as pathogenic/likely pathogenic in affected individuals`,
      concern:
        "This is the strongest current candidate because the phenotype, apparent de novo inheritance, frameshift consequence, loss-of-function mechanism, population absence, and indel technical evidence are all supportive.",
    },
    {
      id: "candidate-4",
      label: "Candidate 4",
      gene: "REPIN4",
      variant: "Two nearby indel representations in REPIN4",
      zygosity: "Heterozygous indel representation issue",
      consequence: "possible_frameshift_variant",
      inheritanceSignal: "Inherited from unaffected father",
      clinicalFit:
        "REPIN4 is associated with autosomal recessive neurodevelopmental disease. The evidence shows two nearby indel records in a short repeat, but they may represent the same underlying haplotype/representation issue rather than two independent variants.",
      rawEvidence: `GENE: REPIN4
Known disease association: autosomal recessive neurodevelopmental disorder
Reported inheritance: autosomal recessive
Known mechanism: biallelic loss-of-function

Variant record A:
chr16:22100491 delT
Transcript: NM_150004.2
HGVS: c.501del p.(Phe168Serfs*5)
Consequence: frameshift_variant

Variant record B:
chr16:22100494 dupT
Transcript: NM_150004.2
HGVS: c.504dup p.(Gly169Trpfs*4)
Consequence: frameshift_variant

Sequence context:
Short T-repeat / local repeat sequence
Indel normalisation warning: nearby representations may not be independent

VCF-style fields for record A:
QUAL=302
FILTER=PASS
INFO: DP=41;MQ=60;QD=7.4;SOR=1.1
FORMAT: GT:AD:DP:GQ
Proband: 0/1:20,21:41:88
Mother: 0/0:37,0:37:99
Father: 0/1:18,19:37:90

VCF-style fields for record B:
QUAL=288
FILTER=PASS
INFO: DP=40;MQ=60;QD=7.2;SOR=1.2
FORMAT: GT:AD:DP:GQ
Proband: 0/1:19,21:40:86
Mother: 0/0:36,0:36:99
Father: 0/1:17,20:37:88

Read-level notes:
The same reads support both nearby indel representations
Local phasing suggests both records are on the same paternal haplotype
Indel normalisation required before counting independent alleles
No second maternal allele identified

Population:
Record A gnomAD AF = 0.00004; allele count = 12
Record B gnomAD AF = 0.00003; allele count = 9

Constraint:
LOEUF = 0.42
pLI = 0.59

ClinVar-style summary:
No exact matching pathogenic records found in local summary
Biallelic loss-of-function variants in REPIN4 have been reported, but this evidence currently shows one paternal haplotype only`,
      concern:
        "This is not strong evidence for a recessive diagnosis. The two records may be alternative representations of the same paternal haplotype rather than two independent disease-causing alleles.",
    },
    {
      id: "candidate-5",
      label: "Candidate 5",
      gene: "COMMONIN1",
      variant: "chr1:88120440 dupC",
      zygosity: "Heterozygous",
      consequence: "frameshift_variant",
      inheritanceSignal: "Inherited from unaffected mother",
      clinicalFit:
        "COMMONIN1 has a possible neurological association in limited reports, but the indel is in a common low-complexity region and is observed in population data.",
      rawEvidence: `GENE: COMMONIN1
Known disease association: limited neurological association
Reported inheritance: uncertain
Known mechanism: uncertain

Variant:
chr1:88120440 dupC
Transcript: NM_150005.1
HGVS: c.233dup p.(Ala79Glyfs*3)
Consequence: frameshift_variant
Sequence context: CCCCCCC low-complexity tract

VCF-style fields:
QUAL=112
FILTER=PASS
INFO: DP=39;MQ=57;QD=2.9;SOR=2.6
FORMAT: GT:AD:DP:GQ

Proband: 0/1:20,19:39:74
Mother: 0/1:18,19:37:72
Father: 0/0:35,0:35:99

Read-level notes:
ALT reads seen on both strands
Local repeat-slippage warning present
Indel representation varies between callers
Second caller reports nearby equivalent insertion rather than same position

Population:
gnomAD AF = 0.006
gnomAD allele count = 1550
Homozygotes observed in population summary = 6

Constraint:
LOEUF = 1.12
pLI = 0.01

ClinVar-style summary:
No exact matching pathogenic record found in local summary
Overlapping low-complexity indels in this region are seen in population summary`,
      concern:
        "This is weak as a rare disease candidate because it is inherited, relatively common, in a low-complexity tract, and the gene-disease mechanism is uncertain.",
    },
  ],

  decisionCheckpoints: [
    {
      id: "checkpoint-1",
      title: "Checkpoint 1 — Homopolymer context",
      context:
        "Candidate 1 is a frameshift in a plausible loss-of-function gene, but it lies in an A-homopolymer tract. It has AD 29,7, GQ 49, QD 1.4, SOR 4.8, read-end clustering, and inconsistent local indel representation.",
      question:
        "What is the safest interpretation of Candidate 1?",
      options: [
        {
          label: "A",
          text: "It is clinically tempting but technically fragile, so it should not be prioritised without careful read-level review.",
          isCorrect: true,
          feedback:
            "Correct. The gene and consequence look tempting, but the homopolymer and read-level evidence make the call uncertain.",
        },
        {
          label: "B",
          text: "It should lead the case because a frameshift consequence is more important than repeat-context uncertainty.",
          isCorrect: false,
          feedback:
            "Not quite. A frameshift consequence can be important, but technical confidence and genomic context still matter.",
        },
        {
          label: "C",
          text: "It should be dismissed as benign because all homopolymer indels are false-positive calls.",
          isCorrect: false,
          feedback:
            "Not quite. Real indels can occur in homopolymers, but the evidence must be reviewed carefully.",
        },
      ],
      teachingPoint:
        "Homopolymer context does not automatically make an indel false, but it should increase caution and prompt read-level review.",
    },
    {
      id: "checkpoint-2",
      title: "Checkpoint 2 — Identify the strongest indel candidate",
      context:
        "Candidate 3 is an apparent de novo frameshift in NDDIND5. It is not in a homopolymer tract, has balanced allele support, high genotype quality, good mapping quality, second-caller support, and consistent local read representation.",
      question:
        "Why is Candidate 3 the strongest current candidate?",
      options: [
        {
          label: "A",
          text: "Because it has the best convergence of phenotype fit, inheritance, loss-of-function mechanism, population absence, and reliable indel evidence.",
          isCorrect: true,
          feedback:
            "Correct. Candidate 3 is strong because both clinical and technical evidence align.",
        },
        {
          label: "B",
          text: "Because insertions are always technically more reliable than deletions in genome sequencing.",
          isCorrect: false,
          feedback:
            "Not quite. Insertions and deletions can both be reliable or unreliable depending on context and evidence.",
        },
        {
          label: "C",
          text: "Because FILTER=PASS is enough to confirm any indel as clinically suitable for prioritisation.",
          isCorrect: false,
          feedback:
            "Not quite. FILTER=PASS is useful but not enough. Read evidence, inheritance, mechanism, and phenotype fit are still needed.",
        },
      ],
      teachingPoint:
        "A reliable indel candidate should have consistent read support and fit the clinical/genetic model.",
    },
    {
      id: "checkpoint-3",
      title: "Checkpoint 3 — Representation issue",
      context:
        "Candidate 4 shows two nearby indel records in REPIN4, both inherited from the father. The same reads support both records, and the local annotation warns that the two records may be alternative representations on the same haplotype.",
      question:
        "What is the main risk if Candidate 4 is interpreted incorrectly?",
      options: [
        {
          label: "A",
          text: "Counting two nearby representations as two independent disease-causing alleles when they may be the same paternal haplotype.",
          isCorrect: true,
          feedback:
            "Correct. Indel normalisation and phasing matter. Two records are not always two independent variants.",
        },
        {
          label: "B",
          text: "Ignoring it because recessive genes are not relevant when trio genome data are available.",
          isCorrect: false,
          feedback:
            "Not quite. Recessive genes can be very relevant, but the evidence must support a biallelic model.",
        },
        {
          label: "C",
          text: "Assuming the inherited paternal indel records are actually de novo because they are close together.",
          isCorrect: false,
          feedback:
            "Not quite. The evidence shows paternal inheritance, not de novo inheritance.",
        },
      ],
      teachingPoint:
        "Indel representation can be misleading. Always ask whether multiple nearby records are independent variants or the same local haplotype represented differently.",
    },
    {
      id: "checkpoint-4",
      title: "Checkpoint 4 — Population frequency and low-complexity context",
      context:
        "Candidate 5 is a frameshift-looking indel in a low-complexity C-tract, inherited from the mother, with gnomAD AF 0.006, allele count 1550, and homozygotes observed.",
      question:
        "Why is Candidate 5 weak for this severe rare neurodevelopmental case?",
      options: [
        {
          label: "A",
          text: "Because it is inherited, common for a severe rare disease model, observed in homozygotes, and lies in a low-complexity region with uncertain gene mechanism.",
          isCorrect: true,
          feedback:
            "Correct. Multiple factors weaken Candidate 5 despite its frameshift-style annotation.",
        },
        {
          label: "B",
          text: "Because all variants seen in population databases should be treated as sequencing artefacts.",
          isCorrect: false,
          feedback:
            "Not quite. Population variants can be technically real. The issue is that the frequency is too high for this disease model.",
        },
        {
          label: "C",
          text: "Because inherited variants from unaffected parents can never contribute to a clinical phenotype.",
          isCorrect: false,
          feedback:
            "Not quite. Inherited variants can matter, but this candidate does not fit well.",
        },
      ],
      teachingPoint:
        "A high-impact-looking consequence should not override population frequency, inheritance, low-complexity context, and weak gene-disease evidence.",
    },
    {
      id: "checkpoint-5",
      title: "Checkpoint 5 — Safe service-style next step",
      context:
        "Candidate 3 is the strongest current finding. Candidate 1 is clinically tempting but technically fragile. Candidate 4 has an indel representation problem. Candidate 5 is common and low-complexity. Candidate 2 is technically real but clinically weak.",
      question:
        "What is the safest next step?",
      options: [
        {
          label: "A",
          text: "Prioritise Candidate 3 for review, document why Candidate 1 needs read-level caution, and note the representation and population concerns for Candidates 4 and 5.",
          isCorrect: true,
          feedback:
            "Correct. This is safe and reviewable because it prioritises the strongest candidate while documenting why tempting indel alternatives are weaker.",
        },
        {
          label: "B",
          text: "Prioritise Candidate 1 because a homopolymer frameshift in a plausible gene is usually the most suspicious finding.",
          isCorrect: false,
          feedback:
            "Not quite. Candidate 1 is not safe to prioritise without additional review because the indel evidence is fragile.",
        },
        {
          label: "C",
          text: "Report Candidate 4 as compound heterozygous because two nearby frameshift variant records are present.",
          isCorrect: false,
          feedback:
            "Not quite. The two records may represent the same paternal haplotype rather than two independent alleles.",
        },
      ],
      teachingPoint:
        "Safe indel review means combining consequence, sequence context, read evidence, representation, inheritance, population evidence, and mechanism.",
    },
  ],

  finalReflection:
    "A safe trainee-level conclusion would be that Candidate 3 is the strongest current candidate for further review because it is a technically convincing apparent de novo frameshift in a phenotype-compatible gene where loss-of-function is a known mechanism. Candidate 1 is clinically tempting because it is a frameshift in a plausible gene, but it lies in a homopolymer tract and has weak allele balance, read-position concerns, strand bias, inconsistent representation, and lack of second-caller support. Candidate 4 should not be over-interpreted as two independent alleles because the nearby indel records may represent the same paternal haplotype. Candidate 5 is weakened by inheritance, population frequency, low-complexity context, and uncertain mechanism. Candidate 2 is technically real but clinically weak because it is inherited, relatively frequent, and has limited gene-disease support. The safest next step is to prioritise Candidate 3, document the indel-specific caveats for the other candidates, and escalate through the appropriate review pathway.",
};