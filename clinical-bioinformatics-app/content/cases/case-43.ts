export const case43 = {
  id: "case-43",
  slug: "mdt-style-handover-case",
  title: "Case 43: MDT-style handover case",
  level: "Advanced",
  summary:
    "A service-readiness case focused on producing a clear, balanced, reviewable rationale for a clinical team rather than simply picking a candidate.",

  visualisationExampleId: null,

  assessmentFocus: [
    "MDT-style handover",
    "Clear candidate summary",
    "Evidence prioritisation",
    "Balanced review language",
    "Avoiding overstatement",
    "Explaining weaker alternatives",
    "Service-ready communication",
    "Formal review and sign-off boundaries",
  ],

  guidedTutorMode: {
    type: "static-rule-based",
    description:
      "Uses built-in hints, checkpoint feedback, model answers, and self-check criteria to support safe case reasoning.",
  },

  phase5Assessment: {
    candidateRanking: {
      prompt:
        "Rank the candidates from highest to lowest priority for MDT-style discussion.",
      correctOrder: [
        "candidate-2",
        "candidate-3",
        "candidate-5",
        "candidate-4",
        "candidate-1",
      ],
      explanation:
        "Candidate 2 is the strongest current candidate because phenotype fit, apparent de novo inheritance, canonical splice donor consequence, loss-of-function mechanism, population absence, and technical evidence all align. Candidate 3 is a technically convincing single allele in a recessive gene, so it is worth mentioning as reviewed but incomplete. Candidate 5 is likely a real duplication, but it is inherited and lacks established copy-number gain mechanism. Candidate 4 is apparent de novo but technically fragile, so it should not be presented as strong without further review. Candidate 1 is technically real but weakest because it is inherited, relatively frequent, and in a limited-evidence gene.",
    },

    escalationDecision: {
      prompt:
        "Choose the safest MDT-style next step for this case.",
      options: [
        {
          id: "handover-candidate-2",
          label: "A",
          decision:
            "Prioritise Candidate 2 for formal review, summarise the supporting evidence clearly, and briefly explain why the other candidates were deprioritised.",
          isBest: true,
          feedback:
            "Best decision. This gives the MDT a clear candidate to discuss while keeping the reasoning, limitations, and alternative findings visible.",
        },
        {
          id: "diagnostic-without-review",
          label: "B",
          decision:
            "State that Candidate 2 is diagnostic and that no further review is needed.",
          isBest: false,
          feedback:
            "Review this choice. Candidate 2 is strong, but the handover should support formal clinical laboratory review rather than replacing it.",
        },
        {
          id: "all-equal",
          label: "C",
          decision:
            "Present all candidates as equally likely so the MDT can decide without a prioritised recommendation.",
          isBest: false,
          feedback:
            "Review this choice. A useful handover should make a proportionate prioritisation while documenting uncertainty and alternatives.",
        },
      ],
    },

    writtenSummary: {
      prompt:
        "Write a concise MDT-style handover summary explaining the strongest candidate, the key supporting evidence, the main caveats, and why the other candidates are weaker.",
      checklist: [
        "States that Candidate 2 is the strongest current candidate for review.",
        "Mentions apparent de novo inheritance with good parental coverage.",
        "Mentions canonical splice donor consequence.",
        "Links the variant to a loss-of-function mechanism.",
        "Mentions phenotype fit with developmental delay, severe speech delay, epilepsy, hypotonia, feeding difficulties, and dysmorphic features.",
        "Mentions population absence and strong technical evidence.",
        "Avoids calling the finding a final diagnosis.",
        "Explains that Candidate 3 is incomplete recessive evidence.",
        "Explains that Candidate 4 is technically fragile.",
        "Explains that Candidate 5 is an inherited duplication with uncertain gain mechanism.",
        "Explains that Candidate 1 is weak because of inheritance, frequency, and limited gene evidence.",
        "Recommends formal review/sign-off through the appropriate pathway.",
      ],
      modelAnswer:
        "Candidate 2 is the strongest current candidate for MDT and clinical laboratory review. It is an apparent de novo canonical splice donor variant in SYNMDT2, a phenotype-compatible gene where loss-of-function is a reported mechanism. The variant is absent from population data, technically well supported, has good parental coverage with no ALT support in either parent, and fits the child’s developmental delay, severe speech delay, epilepsy, hypotonia, feeding difficulties, and dysmorphic features. This should be presented as a strong candidate for review rather than as a final diagnosis. Candidate 1 was deprioritised because it is inherited, relatively frequent, and in a limited-evidence gene. Candidate 3 is a technically convincing single allele in a recessive gene but is incomplete without a second allele. Candidate 4 is apparent de novo but technically fragile. Candidate 5 is likely a real inherited duplication, but copy-number gain is not an established mechanism. The safest next step is to prioritise Candidate 2 for formal review and sign-off while keeping the alternative-candidate reasoning available for MDT discussion.",
    },
  },

  reasoningScorecard: [
    {
      category: "Top candidate identification",
      maxScore: 2,
      expectation:
        "Recognises Candidate 2 as the strongest current candidate because the phenotype, inheritance, consequence, mechanism, population evidence, and technical confidence align.",
    },
    {
      category: "MDT communication",
      maxScore: 2,
      expectation:
        "Produces a concise, balanced, reviewable handover rather than simply naming a gene or overloading the MDT with raw metrics.",
    },
    {
      category: "Alternative candidate reasoning",
      maxScore: 2,
      expectation:
        "Explains why Candidate 1, Candidate 3, Candidate 4, and Candidate 5 are weaker using clear, specific evidence.",
    },
    {
      category: "Avoiding overstatement",
      maxScore: 2,
      expectation:
        "Uses proportionate wording such as strongest current candidate for review rather than final diagnosis.",
    },
    {
      category: "Service-ready next step",
      maxScore: 2,
      expectation:
        "Recommends formal review/sign-off and makes caveats available for MDT discussion.",
    },
  ],

  patient: {
    age: 7,
    sex: "Female",
  },

  referralReason:
    "A 7-year-old girl has been referred for rare disease genome analysis because of developmental delay, severe speech delay, epilepsy, hypotonia, feeding difficulties, and mild dysmorphic features. The clinical team has requested a concise candidate summary for MDT discussion.",

  testType:
    "Rare disease trio genome sequencing with SNV/indel, CNV, inheritance, phenotype, and technical confidence review",

  familyStructure:
    "The proband and both biological parents have been tested. Both parents are reportedly unaffected.",

  history: [
    "Global developmental delay noted in infancy",
    "Severe expressive speech delay",
    "Epilepsy beginning at age 3",
    "Hypotonia from early childhood",
    "Feeding difficulties in early childhood",
    "Mild dysmorphic features noted by clinical genetics",
    "No known previous molecular diagnosis",
    "Case is being prepared for MDT-style review",
  ],

  phenotype: [
    "Global developmental delay",
    "Severe speech delay",
    "Epilepsy",
    "Hypotonia",
    "Feeding difficulties",
    "Mild dysmorphic features",
  ],

  familyHistory:
    "Both parents are reportedly unaffected. No known family history of developmental delay, epilepsy, hypotonia, feeding difficulties, dysmorphic features, or a similar neurodevelopmental presentation.",

  serviceContext: [
    "This is an MDT-style handover case.",
    "The key issue is not only identifying the strongest candidate, but explaining the rationale clearly enough for review by others.",
    "A useful handover should explain why the top candidate is strongest, why alternatives are weaker, what evidence supports the finding, and what uncertainties remain.",
    "Your task is to produce a safe, proportionate, reviewable summary rather than overstate the result.",
    "Do not present the candidate as a final diagnosis; the output should support MDT and clinical laboratory review.",
  ],

  candidateFindings: [
    {
      id: "candidate-1",
      label: "Candidate 1",
      gene: "BROADMDT1",
      variant: "chr4:77190442 C>T",
      zygosity: "Heterozygous",
      consequence: "missense_variant",
      inheritanceSignal: "Inherited from unaffected father",
      clinicalFit:
        "BROADMDT1 has a broad neurodevelopmental association in limited reports, but the variant is inherited from an unaffected parent and is relatively frequent for a severe rare disease explanation.",
      rawEvidence: `GENE: BROADMDT1
  Known disease association: broad neurodevelopmental association in limited reports
  Reported inheritance: autosomal dominant proposed
  Known mechanism: uncertain
  Gene-disease validity in local summary: limited
  
  Variant:
  chr4:77190442 C>T
  Transcript: NM_430001.2
  HGVS: c.899C>T p.(Pro300Leu)
  Consequence: missense_variant
  Protein domain: outside known recurrent functional region in local summary
  
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
  No concerning soft-clipping
  
  Population:
  gnomAD AF = 0.0014
  gnomAD allele count = 360
  Homozygotes observed in population summary = 1
  
  Constraint:
  LOEUF = 0.83
  pLI = 0.07
  
  ClinVar-style summary:
  No exact matching pathogenic record found in local summary
  Gene-disease relationship remains limited and broad
  Several submitted variants in BROADMDT1 remain VUS or likely benign
  
  MDT relevance:
  Can be mentioned as reviewed and deprioritised
  Not suitable as the main candidate because inheritance, frequency, and gene evidence are weak`,
      concern:
        "This is technically real, but it is weak for MDT prioritisation because inheritance, frequency, and gene-disease evidence do not support it strongly.",
    },
    {
      id: "candidate-2",
      label: "Candidate 2",
      gene: "SYNMDT2",
      variant: "chr7:118902440 G>A",
      zygosity: "Heterozygous",
      consequence: "splice_donor_variant",
      inheritanceSignal: "Apparent de novo with good parental coverage",
      clinicalFit:
        "SYNMDT2 is associated with an autosomal dominant syndromic neurodevelopmental disorder including developmental delay, severe speech delay, epilepsy, hypotonia, feeding difficulties, and dysmorphic features. Loss-of-function is a reported mechanism.",
      rawEvidence: `GENE: SYNMDT2
  Known disease association: autosomal dominant syndromic neurodevelopmental disorder
  Reported inheritance: autosomal dominant
  Known mechanism: haploinsufficiency / loss-of-function
  Gene-disease validity in local summary: established/moderate
  
  Variant:
  chr7:118902440 G>A
  Transcript: NM_430002.5
  HGVS: c.744+1G>A
  Consequence: splice_donor_variant
  Splice position: canonical +1 donor site
  Predicted effect: likely donor splice-site disruption
  
  VCF-style fields:
  QUAL=958
  FILTER=PASS
  INFO: DP=56;MQ=60;QD=17.1;SOR=0.70
  FORMAT: GT:AD:DP:GQ
  
  Proband: 0/1:28,28:56:99
  Mother: 0/0:46,0:46:99
  Father: 0/0:44,0:44:99
  
  Read-level notes:
  ALT reads seen on both forward and reverse strands
  ALT reads distributed across read positions
  High mapping quality for ALT-supporting reads
  High base quality at variant position
  No local low-complexity warning
  No pseudogene or segmental duplication warning
  No concerning soft-clipping around the variant
  Second caller: detected
  
  Parental coverage:
  Mother has good coverage at site with no ALT support
  Father has good coverage at site with no ALT support
  Trio data support an apparent de novo signal
  Sample identity checks in local summary are consistent
  
  Population:
  gnomAD AF = not observed
  gnomAD allele count = 0
  
  Constraint:
  LOEUF = 0.15
  pLI = 0.99
  
  ClinVar-style summary:
  No exact matching variant record found in local summary
  Other canonical splice-site and truncating variants in SYNMDT2 have been submitted as pathogenic/likely pathogenic in affected individuals
  Reported phenotypes overlap with developmental delay, severe speech delay, epilepsy, hypotonia, feeding difficulties, and dysmorphic features
  
  MDT relevance:
  Strongest candidate for discussion
  Key supporting evidence: phenotype fit, apparent de novo inheritance, canonical splice donor consequence, loss-of-function mechanism, population absence, strong technical evidence
  Key remaining caveats: requires formal variant interpretation, transcript/gene review, and laboratory sign-off`,
      concern:
        "This is the strongest current candidate. It has the best convergence across phenotype, inheritance, consequence, mechanism, rarity, and technical confidence. It should be handed over clearly as a candidate for review, not as a final diagnosis.",
    },
    {
      id: "candidate-3",
      label: "Candidate 3",
      gene: "RECMDT3",
      variant: "chr9:118809331 C>T",
      zygosity: "Heterozygous",
      consequence: "splice_acceptor_variant",
      inheritanceSignal: "Inherited from unaffected mother",
      clinicalFit:
        "RECMDT3 is associated with an autosomal recessive neurodevelopmental disorder with seizures and hypotonia. The variant is a canonical splice acceptor, but only one inherited heterozygous allele is identified.",
      rawEvidence: `GENE: RECMDT3
  Known disease association: autosomal recessive neurodevelopmental disorder with seizures and hypotonia
  Reported inheritance: autosomal recessive
  Known mechanism: biallelic loss-of-function
  
  Variant:
  chr9:118809331 C>T
  Transcript: NM_430003.4
  HGVS: c.744-2C>T
  Consequence: splice_acceptor_variant
  Splice position: canonical -2 acceptor site
  Predicted effect: likely acceptor splice-site disruption
  
  VCF-style fields:
  QUAL=790
  FILTER=PASS
  INFO: DP=48;MQ=60;QD=16.5;SOR=0.74
  FORMAT: GT:AD:DP:GQ
  
  Proband: 0/1:24,24:48:99
  Mother: 0/1:22,21:43:99
  Father: 0/0:41,0:41:99
  
  Read-level notes:
  ALT reads seen on both forward and reverse strands
  ALT reads distributed across read positions
  No local mapping warning
  No soft-clipping concern
  Second caller: detected
  
  Second-allele review:
  No second coding SNV/indel identified in current candidate list
  No confident exon-level deletion/duplication detected
  No strong deep intronic candidate identified in current summary
  Deep regulatory variants not fully assessed in this evidence packet
  
  Population:
  gnomAD AF = 0.000004
  gnomAD allele count = 1
  No homozygotes observed in local summary
  
  Constraint:
  LOEUF = 0.34
  pLI = 0.76
  
  ClinVar-style summary:
  No exact matching variant record found in local summary
  Other biallelic splice and truncating variants in RECMDT3 have been submitted in affected individuals
  
  MDT relevance:
  Can be handed over as a reviewed single-allele recessive finding
  Important caveat: currently incomplete as a recessive explanation`,
      concern:
        "This is technically convincing as a single splice variant, but it is incomplete as a recessive explanation without a second relevant allele.",
    },
    {
      id: "candidate-4",
      label: "Candidate 4",
      gene: "SEIZMDT4",
      variant: "chr11:44190220 T>C",
      zygosity: "Heterozygous",
      consequence: "missense_variant",
      inheritanceSignal: "Apparent de novo, but technically fragile",
      clinicalFit:
        "SEIZMDT4 has a possible developmental epilepsy association and could partly fit the seizure phenotype, but the raw evidence has multiple artefact warning signs.",
      rawEvidence: `GENE: SEIZMDT4
  Known disease association: possible autosomal dominant developmental epilepsy
  Reported inheritance: autosomal dominant proposed in limited reports
  Known mechanism: uncertain; missense variants proposed in limited evidence
  
  Variant:
  chr11:44190220 T>C
  Transcript: NM_430004.2
  HGVS: c.944T>C p.(Leu315Pro)
  Consequence: missense_variant
  
  VCF-style fields:
  QUAL=48
  FILTER=PASS
  INFO: DP=31;MQ=42;QD=1.5;SOR=5.8
  FORMAT: GT:AD:DP:GQ
  
  Proband: 0/1:25,6:31:45
  Mother: 0/0:37,0:37:99
  Father: 0/0:36,0:36:99
  
  Read-level notes:
  ALT reads mostly on one strand
  5 of 6 ALT reads occur close to read ends
  Soft-clipping present in several supporting reads
  Local repetitive sequence warning present
  Several ALT-supporting reads have nearby mismatches
  Second caller: not detected
  Manual read-level review recommended before prioritisation
  
  Population:
  gnomAD AF = not observed
  gnomAD allele count = 0
  
  Constraint:
  LOEUF = 0.43
  pLI = 0.74
  
  ClinVar-style summary:
  No exact matching variant record found in local summary
  Nearby missense variants in SEIZMDT4 have been submitted in epilepsy phenotypes, but evidence remains limited
  
  MDT relevance:
  Should be described as technically fragile if mentioned
  Not appropriate to present as a strong candidate without further read-level review`,
      concern:
        "This is not a strong MDT candidate because apparent de novo status is weakened by poor allele balance, read-position concerns, strand bias, soft-clipping, and no second-caller support.",
    },
    {
      id: "candidate-5",
      label: "Candidate 5",
      gene: "CNVMDT5 region",
      variant: "chr16:29120000-29205000 duplication",
      zygosity: "Heterozygous duplication",
      consequence: "copy_number_gain",
      inheritanceSignal: "Inherited from unaffected father",
      clinicalFit:
        "The duplicated interval contains a possible neurodevelopmental candidate gene, but the duplication is inherited, overlaps population CNVs, and copy-number gain is not an established disease mechanism.",
      rawEvidence: `CNV REGION: chr16:29120000-29205000
  CNV type: duplication
  Estimated size: 85 kb
  Copy-number state: three-copy gain / heterozygous duplication
  
  Gene:
  CNVMDT5
  Known disease association: possible neurodevelopmental association in limited reports
  Known mechanism: uncertain
  Triplosensitivity evidence: not established
  
  Affected region:
  Partial duplication involving exons 2–4 of 11
  Orientation unknown
  Predicted transcript effect uncertain
  
  Inheritance:
  Proband: duplication present
  Mother: duplication not detected
  Father: duplication present
  Inheritance signal: paternally inherited
  
  CNV caller summary:
  Caller 1: duplication PASS
  Caller 2: duplication supported
  Quality score: 108
  Number of affected targets/windows: 25
  
  Read-depth evidence:
  Expected normalised depth in diploid regions: ~1.00
  Proband normalised depth across interval: ~1.46
  Father normalised depth across interval: ~1.48
  Mother normalised depth across interval: ~1.01
  Flanking regions: mostly normal
  
  Breakpoint evidence:
  Split reads: absent
  Paired-end support: imprecise
  Breakpoint not resolved
  
  B-allele / SNP pattern:
  B-allele pattern compatible with duplication in proband and father
  
  Population:
  Overlapping duplications observed in local population CNV summary
  Partial benign overlap reported
  
  Technical notes:
  Technically plausible duplication
  Clinical relevance uncertain because inherited and no established gain mechanism
  
  MDT relevance:
  Can be mentioned as a reviewed CNV finding
  Main caveats: inherited, population overlap, no established triplosensitivity, uncertain transcript impact`,
      concern:
        "This is likely a real CNV, but it is weak as a disease explanation because copy-number gain is not an established mechanism and it is inherited from an unaffected parent.",
    },
  ],

  decisionCheckpoints: [
    {
      id: "checkpoint-1",
      title: "Checkpoint 1 — Handover is not just naming the top variant",
      context:
        "The clinical team has requested a concise summary for MDT discussion. Candidate 2 is strongest, but several weaker findings have also been reviewed.",
      question: "What should a safe MDT handover include?",
      options: [
        {
          label: "A",
          text: "Only the name of the strongest gene, with no explanation or caveats.",
          isCorrect: false,
          feedback:
            "Not quite. MDT handover needs enough reasoning to be reviewable by others.",
        },
        {
          label: "B",
          text: "The strongest candidate, the main supporting evidence, the limitations, and why other candidates were deprioritised.",
          isCorrect: true,
          feedback:
            "Correct. A useful handover explains the reasoning, not just the answer.",
        },
        {
          label: "C",
          text: "A final diagnosis statement without mentioning uncertainty.",
          isCorrect: false,
          feedback:
            "Not quite. A bioinformatics handover should not overstep into final sign-out.",
        },
      ],
      teachingPoint:
        "A safe MDT handover is concise, balanced, and reviewable.",
    },
    {
      id: "checkpoint-2",
      title: "Checkpoint 2 — Identify the strongest candidate for MDT review",
      context:
        "Candidate 2 is an apparent de novo canonical splice donor variant in SYNMDT2. The phenotype fits, the gene has a loss-of-function mechanism, the variant is absent from population data, and the technical evidence is strong.",
      question: "Why is Candidate 2 the strongest candidate to hand over?",
      options: [
        {
          label: "A",
          text: "Because phenotype fit, inheritance, canonical splice consequence, loss-of-function mechanism, rarity, and technical confidence all align.",
          isCorrect: true,
          feedback:
            "Correct. Candidate 2 has the strongest convergence across evidence types.",
        },
        {
          label: "B",
          text: "Because every splice donor variant is diagnostic.",
          isCorrect: false,
          feedback:
            "Not quite. The splice consequence is strong here because it fits the gene, phenotype, inheritance, and mechanism.",
        },
        {
          label: "C",
          text: "Because it has the highest number of lines in the raw evidence section.",
          isCorrect: false,
          feedback:
            "Not quite. Candidate strength comes from evidence quality, not length.",
        },
      ],
      teachingPoint:
        "The strongest MDT candidate is the one with the clearest evidence convergence.",
    },
    {
      id: "checkpoint-3",
      title: "Checkpoint 3 — Explain weaker candidates without overloading the team",
      context:
        "Candidate 3 is a single allele in a recessive gene. Candidate 4 is technically fragile. Candidate 5 is an inherited duplication with uncertain gain mechanism.",
      question: "How should weaker candidates be handled in the MDT summary?",
      options: [
        {
          label: "A",
          text: "List every raw metric for every weaker candidate in the spoken handover.",
          isCorrect: false,
          feedback:
            "Not quite. The handover should be concise. Details can be available in the full review, but the summary should focus on key reasons.",
        },
        {
          label: "B",
          text: "Briefly state the main reason each was deprioritised, while keeping the full evidence available for review.",
          isCorrect: true,
          feedback:
            "Correct. This keeps the handover useful and reviewable without becoming overwhelming.",
        },
        {
          label: "C",
          text: "Do not mention that alternatives were reviewed.",
          isCorrect: false,
          feedback:
            "Not quite. The team needs to know that alternatives were considered and why they are weaker.",
        },
      ],
      teachingPoint:
        "A good handover is concise but traceable.",
    },
    {
      id: "checkpoint-4",
      title: "Checkpoint 4 — Avoid overstatement",
      context:
        "Candidate 2 is strong, but it still requires formal clinical laboratory review, transcript confirmation, variant classification, and sign-off.",
      question: "Which wording is safest?",
      options: [
        {
          label: "A",
          text: "Candidate 2 is diagnostic and no further review is needed.",
          isCorrect: false,
          feedback:
            "Not quite. That overstates the bioinformatics role and skips formal review.",
        },
        {
          label: "B",
          text: "Candidate 2 is the strongest current candidate for review because multiple evidence types align.",
          isCorrect: true,
          feedback:
            "Correct. This is strong but proportionate wording.",
        },
        {
          label: "C",
          text: "Candidate 2 should be ignored until every possible variant in the genome is manually reviewed.",
          isCorrect: false,
          feedback:
            "Not quite. It is appropriate to prioritise Candidate 2 while documenting caveats and limitations.",
        },
      ],
      teachingPoint:
        "Strong candidate language should still respect review and sign-off boundaries.",
    },
    {
      id: "checkpoint-5",
      title: "Checkpoint 5 — Safe service-style next step",
      context:
        "You need to produce a final reviewable rationale for the clinical team.",
      question: "What is the safest final MDT-style handover?",
      options: [
        {
          label: "A",
          text: "Prioritise Candidate 2 for review, summarise the supporting evidence, state that Candidate 3 is incomplete recessive evidence, Candidate 4 is technically fragile, Candidate 5 is a weak inherited duplication, and Candidate 1 is weak because of inheritance/frequency/gene validity.",
          isCorrect: true,
          feedback:
            "Correct. This gives a clear, balanced, reviewable handover.",
        },
        {
          label: "B",
          text: "Say only that Candidate 2 is the answer and avoid discussing limitations.",
          isCorrect: false,
          feedback:
            "Not quite. That is not a safe or reviewable handover.",
        },
        {
          label: "C",
          text: "Present all five candidates as equally likely to avoid making a judgement.",
          isCorrect: false,
          feedback:
            "Not quite. Safe practice includes proportionate prioritisation, not avoiding prioritisation altogether.",
        },
      ],
      teachingPoint:
        "Service-ready reasoning means giving a clear recommendation while making uncertainty and limitations visible.",
    },
  ],

  finalReflection:
    "A safe MDT-style handover would state that Candidate 2 is the strongest current candidate for clinical laboratory review. It is an apparent de novo canonical splice donor variant in SYNMDT2, a phenotype-compatible gene where loss-of-function is a reported mechanism. The variant is absent from population data, technically well supported, has good parental coverage, and fits the child’s developmental delay, severe speech delay, epilepsy, hypotonia, feeding difficulties, and dysmorphic features. The handover should also briefly explain that Candidate 1 was deprioritised because it is inherited, relatively frequent, and in a limited-evidence gene; Candidate 3 is a technically convincing single allele in a recessive gene but incomplete without a second allele; Candidate 4 is technically fragile despite apparent de novo status; and Candidate 5 is a likely real inherited duplication with uncertain copy-number gain mechanism. The safest next step is to prioritise Candidate 2 for formal review and sign-off while making the alternative-candidate reasoning available for MDT discussion.",
};