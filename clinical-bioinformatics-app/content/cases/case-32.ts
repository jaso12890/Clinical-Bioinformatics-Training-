export const case32 = {
  id: "case-32",
  slug: "multi-exon-duplication-review-case",
  title: "Case 32: Multi-exon duplication review",
  level: "Advanced",
  summary:
    "A CNV-focused case about interpreting multi-exon duplications, copy-number gain mechanism, inheritance, triplosensitivity, breakpoint uncertainty, and why duplication calls are not automatically equivalent to loss-of-function findings.",

  visualisationExampleId: null,

  assessmentFocus: [
    "Multi-exon duplication interpretation",
    "Copy-number gain versus copy-number loss",
    "Triplosensitivity and dosage mechanism",
    "CNV read-depth review",
    "Inheritance interpretation for duplications",
    "Breakpoint and orientation uncertainty",
    "CNV confirmation and escalation",
  ],

  guidedTutorMode: {
    type: "static-rule-based",
    description:
      "Uses built-in hints, checkpoint feedback, model answers, and self-check criteria to support safe case reasoning.",
  },

  phase5Assessment: {
    candidateRanking: {
      prompt:
        "Rank the candidates from strongest to weakest as explanations for the patient’s referred neurodevelopmental presentation.",
      correctOrder: [
        "candidate-3",
        "candidate-1",
        "candidate-2",
        "candidate-4",
      ],
      explanation:
        "Candidate 3 is strongest because it is an apparent de novo full-gene duplication of TRIPGAIN2, a gene where triplosensitivity/copy-number gain is a reported disease mechanism. It has strong read-depth evidence, support from more than one caller, population rarity, and strong phenotype fit. Candidate 1 is technically plausible and de novo, but the known mechanism for HAPLOONLY1 is haploinsufficiency rather than triplosensitivity, so the relevance of copy-number gain is uncertain. Candidate 2 is likely a real duplication, but it is inherited from an unaffected mother, overlaps population duplications, and lacks established triplosensitivity. Candidate 4 is weakest because it is a technically fragile SNV candidate in a gene with limited disease evidence.",
    },

    escalationDecision: {
      prompt:
        "Choose the safest next action for this multi-exon duplication review case.",
      options: [
        {
          id: "prioritise-candidate-3",
          label: "A",
          decision:
            "Prioritise Candidate 3 for CNV plot review and escalation, document the triplosensitivity reasoning, and explain why the other candidates are weaker.",
          isBest: true,
          feedback:
            "Best decision. Candidate 3 has the strongest duplication evidence and the clearest copy-number gain mechanism, but CNV plot review and local confirmation/escalation requirements still matter.",
        },
        {
          id: "prioritise-candidate-1",
          label: "B",
          decision:
            "Prioritise Candidate 1 because a de novo duplication in a haploinsufficient gene should be treated the same as a deletion.",
          isBest: false,
          feedback:
            "Review this choice. Haploinsufficiency and triplosensitivity are not interchangeable. Candidate 1 is technically plausible, but the copy-number gain mechanism is uncertain.",
        },
        {
          id: "skip-cnv-review",
          label: "C",
          decision:
            "Treat Candidate 3 as final without further CNV review because both callers support the duplication.",
          isBest: false,
          feedback:
            "Review this choice. Two-caller support strengthens the finding, but duplication calls still need CNV plot review, dosage interpretation, and local confirmation/escalation as required.",
        },
      ],
    },

    writtenSummary: {
      prompt:
        "Write a short trainee-level handover summary explaining which candidate is strongest, why the other candidates are weaker, and what should happen next.",
      checklist: [
        "Names Candidate 3 as the strongest current candidate.",
        "Mentions Candidate 3 evidence: full-gene TRIPGAIN2 duplication, apparent de novo inheritance, read-depth around 1.51, two-caller support, triplosensitivity mechanism, population rarity, and phenotype fit.",
        "Explains that Candidate 1 is technically plausible and de novo but has uncertain clinical relevance because HAPLOONLY1 is known for haploinsufficiency rather than triplosensitivity.",
        "Explains that Candidate 2 is technically plausible but inherited from an unaffected mother, overlaps population duplications, and lacks established dosage-gain evidence.",
        "Explains that Candidate 4 is a technically fragile SNV candidate with weaker gene-disease support.",
        "Mentions breakpoint/orientation uncertainty for duplications where relevant.",
        "Mentions CNV plot review and possible orthogonal confirmation/local escalation.",
        "Avoids treating all duplications as equivalent to deletions or truncating variants.",
        "Avoids reporting the duplication as final without appropriate review.",
      ],
      modelAnswer:
        "Candidate 3 is the strongest current candidate for review because it is an apparent de novo full-gene duplication of TRIPGAIN2, a gene where triplosensitivity/copy-number gain is a reported disease mechanism. The CNV is technically well supported, with read-depth around 1.51 across the duplicated interval, support from two callers, flanking regions close to diploid depth, a B-allele pattern compatible with duplication, no common full-gene benign overlap, and phenotype overlap with developmental delay, speech delay, autistic features, hypotonia, and dysmorphic features. Candidate 1 is technically plausible and de novo, but the known disease mechanism for HAPLOONLY1 is haploinsufficiency rather than copy-number gain, so the duplication should not be treated as equivalent to a deletion. Candidate 2 is likely a real duplication, but it is inherited from an unaffected mother, overlaps population duplications, and lacks established triplosensitivity. Candidate 4 is a possible SNV candidate but is technically fragile because of low allele support, strand/read-position concerns, soft-clipping, and no second-caller support. The safest next step is to prioritise Candidate 3 for CNV plot review, dosage review, confirmation or escalation according to local practice, and clear documentation of the duplication mechanism.",
    },
  },

  reasoningScorecard: [
    {
      category: "Duplication technical confidence",
      maxScore: 2,
      expectation:
        "Uses read-depth pattern, caller support, number of affected targets/windows, flanking depth, B-allele pattern, mappability, and breakpoint evidence to judge whether the duplication call is technically credible.",
    },
    {
      category: "Copy-number gain mechanism",
      maxScore: 2,
      expectation:
        "Distinguishes triplosensitivity/copy-number gain from haploinsufficiency/copy-number loss and does not assume that duplication has the same effect as deletion.",
    },
    {
      category: "Inheritance and population evidence",
      maxScore: 2,
      expectation:
        "Uses apparent de novo status, inherited status, unaffected carrier context, population overlap, and benign CNV overlap to adjust candidate priority.",
    },
    {
      category: "Candidate comparison",
      maxScore: 2,
      expectation:
        "Prioritises Candidate 3 over technically plausible but mechanism-limited or inherited duplications, and over a technically fragile SNV.",
    },
    {
      category: "Safe service-style conclusion",
      maxScore: 2,
      expectation:
        "Recommends CNV plot review, dosage review, appropriate confirmation/escalation, and clear documentation of triplosensitivity reasoning.",
    },
  ],

  patient: {
    age: 6,
    sex: "Male",
  },

  referralReason:
    "A 6-year-old boy has been referred for rare disease genome analysis because of developmental delay, speech delay, autistic features, hypotonia, and mild dysmorphic features.",

  testType: "Rare disease genome sequencing with SNV/indel and CNV analysis",

  familyStructure:
    "The proband and both biological parents have been tested. Both parents are reportedly unaffected.",

  history: [
    "Global developmental delay noted in early childhood",
    "Speech delay requiring ongoing support",
    "Autistic features reported by the clinical team",
    "Hypotonia in early childhood",
    "Mild dysmorphic features",
    "No known previous molecular diagnosis",
  ],

  phenotype: [
    "Global developmental delay",
    "Speech delay",
    "Autistic features",
    "Hypotonia",
    "Mild dysmorphic features",
  ],

  familyHistory:
    "Both parents are reportedly unaffected. No known family history of developmental delay, autism, hypotonia, dysmorphic features, or a similar neurodevelopmental presentation.",

  serviceContext: [
    "This is a CNV review case focused on duplication interpretation.",
    "A duplication can be technically real but still clinically uncertain if copy-number gain is not a known disease mechanism.",
    "Multi-exon duplications require review of read-depth pattern, gene content, inheritance, triplosensitivity, breakpoint/orientation uncertainty, and phenotype fit.",
    "Your task is to decide which duplication is most plausible and which technically real gains should be deprioritised because the dosage mechanism is weak.",
  ],

  candidateFindings: [
    {
      id: "candidate-1",
      label: "Candidate 1",
      gene: "HAPLOONLY1",
      variant: "chr4:44190000-44280000 duplication",
      zygosity: "Heterozygous duplication",
      consequence: "copy_number_gain",
      inheritanceSignal: "Apparent de novo",
      clinicalFit:
        "HAPLOONLY1 is associated with a neurodevelopmental disorder through haploinsufficiency, but triplosensitivity is not established. A duplication of this gene may not match the known disease mechanism.",
      rawEvidence: `CNV REGION: chr4:44190000-44280000
CNV type: duplication
Estimated size: 90 kb
Copy-number state: three-copy gain / heterozygous duplication

Gene:
HAPLOONLY1
Known disease association: autosomal dominant neurodevelopmental disorder
Reported mechanism: haploinsufficiency / loss-of-function
Triplosensitivity evidence: not established in local summary

Affected region:
Duplication includes exons 3–8 of 12
Orientation: unknown
Tandem versus inserted duplication: not resolved
Predicted transcript effect: uncertain

Inheritance:
Proband: duplication present
Mother: duplication not detected
Father: duplication not detected
Inheritance signal: apparent de novo

CNV caller summary:
Caller 1: duplication PASS
Caller 2: duplication supported
Quality score: 138
Number of affected targets/windows: 54

Read-depth evidence:
Expected normalised depth in diploid regions: ~1.00
Proband normalised depth across duplicated interval: ~1.49
Mother normalised depth across interval: ~0.99
Father normalised depth across interval: ~1.01
Flanking region depths in proband: ~0.96–1.04

Breakpoint / split-read evidence:
Split reads: limited
Paired-end support: imprecise
Breakpoints not fully resolved
Orientation not determined

B-allele / SNP pattern:
B-allele pattern compatible with duplication in proband
No contradictory SNP pattern

Population:
No common full-overlap duplication in local population CNV summary
Partial duplications observed rarely

Technical notes:
Technically plausible duplication
Good local mappability
No major segmental duplication warning

Dosage interpretation:
Local summary supports haploinsufficiency for deletions/truncating variants
No strong evidence that extra copy number of HAPLOONLY1 causes the same phenotype`,
      concern:
        "This appears technically plausible and de novo, but it is not automatically a strong candidate because the known mechanism is loss-of-function, while this is a copy-number gain with uncertain triplosensitivity.",
    },
    {
      id: "candidate-2",
      label: "Candidate 2",
      gene: "BROADGAIN4",
      variant: "chr8:77120000-77310000 duplication",
      zygosity: "Heterozygous duplication",
      consequence: "copy_number_gain",
      inheritanceSignal: "Inherited from unaffected mother",
      clinicalFit:
        "The region contains a broad neurodevelopmental candidate gene, but the duplication is inherited from an unaffected mother and overlaps population duplications.",
      rawEvidence: `CNV REGION: chr8:77120000-77310000
CNV type: duplication
Estimated size: 190 kb
Copy-number state: three-copy gain / heterozygous duplication

Gene:
BROADGAIN4
Known disease association: broad neurodevelopmental association in limited reports
Known mechanism: uncertain
Triplosensitivity evidence: not established

Affected region:
Duplication includes exons 2–5 of 10
Orientation: unknown
Predicted transcript effect: uncertain

Inheritance:
Proband: duplication present
Mother: duplication present
Father: duplication not detected
Inheritance signal: maternally inherited

CNV caller summary:
Caller 1: duplication PASS
Caller 2: duplication supported
Quality score: 122
Number of affected targets/windows: 61

Read-depth evidence:
Expected normalised depth in diploid regions: ~1.00
Proband normalised depth across interval: ~1.46
Mother normalised depth across interval: ~1.48
Father normalised depth across interval: ~1.00
Flanking region depths in proband: ~0.95–1.06

Breakpoint / split-read evidence:
Split reads: absent
Paired-end support: limited and imprecise
Breakpoints not resolved

B-allele / SNP pattern:
B-allele pattern compatible with duplication in proband and mother

Population:
Overlapping duplications observed in local population CNV summary
Partial benign/likely benign overlaps reported

Technical notes:
Technically plausible duplication
Clinical relevance uncertain
No strong dosage sensitivity evidence`,
      concern:
        "This is likely a real duplication, but it is weaker because it is inherited from an unaffected mother, overlaps population duplications, and lacks established triplosensitivity.",
    },
    {
      id: "candidate-3",
      label: "Candidate 3",
      gene: "TRIPGAIN2",
      variant: "chr12:66190000-66485000 duplication",
      zygosity: "Heterozygous duplication",
      consequence: "copy_number_gain",
      inheritanceSignal: "Apparent de novo",
      clinicalFit:
        "TRIPGAIN2 is associated with a dosage-sensitive neurodevelopmental disorder where copy-number gain is a reported mechanism. Reported features include developmental delay, speech delay, autistic features, hypotonia, and dysmorphic features.",
      rawEvidence: `CNV REGION: chr12:66190000-66485000
CNV type: duplication
Estimated size: 295 kb
Copy-number state: three-copy gain / heterozygous duplication

Gene:
TRIPGAIN2
Known disease association: autosomal dominant dosage-sensitive neurodevelopmental disorder
Reported mechanism: triplosensitivity / copy-number gain
Dosage sensitivity: triplosensitivity reported in local summary

Affected region:
Duplication includes the full coding region of TRIPGAIN2
Also includes a small non-coding neighbouring interval
Predicted effect: complete extra copy of dosage-sensitive gene
Orientation: likely tandem but not fully resolved

Inheritance:
Proband: duplication present
Mother: duplication not detected
Father: duplication not detected
Inheritance signal: apparent de novo

CNV caller summary:
Caller 1: duplication PASS
Caller 2: duplication supported
Exon-level CNV model: duplication supported across all coding exons
Quality score: 196
Number of affected targets/windows: 132

Read-depth evidence:
Expected normalised depth in diploid regions: ~1.00
Proband normalised depth across duplicated interval: ~1.51
Mother normalised depth across interval: ~0.98
Father normalised depth across interval: ~1.01
Flanking region depths in proband: ~0.97–1.05

Breakpoint / split-read evidence:
Split reads: limited but directionally consistent
Paired-end support: present around predicted breakpoints
Breakpoints approximate but supportive of a duplication event
Orientation not fully proven from summary data

B-allele / SNP pattern:
B-allele pattern compatible with duplication in proband
Parental B-allele pattern normal across interval

Population:
No common overlapping full-gene duplication in local population CNV summary
No full-size benign overlap identified
Rare partial overlaps do not include full TRIPGAIN2 coding region

Technical notes:
Good mappability across most of interval
No major segmental duplication warning
No low-complexity warning
Manual CNV plot review recommended
Orthogonal confirmation may be required according to local laboratory practice

ClinVar-style / dosage summary:
Full-gene duplications involving TRIPGAIN2 have been submitted as pathogenic/likely pathogenic in affected individuals
Reported phenotype overlaps with developmental delay, speech delay, autistic features, hypotonia, and dysmorphic features`,
      concern:
        "This is the strongest current candidate because the duplication is technically well supported, apparently de novo, includes the full dosage-sensitive gene, matches a reported triplosensitivity mechanism, is rare, and fits the phenotype.",
    },
    {
      id: "candidate-4",
      label: "Candidate 4",
      gene: "NDDMISS6",
      variant: "chr15:44190220 A>G",
      zygosity: "Heterozygous",
      consequence: "missense_variant",
      inheritanceSignal: "Apparent de novo, but technically weaker",
      clinicalFit:
        "NDDMISS6 has a possible neurodevelopmental association, but the variant has weaker technical evidence and the gene-disease relationship is less established than TRIPGAIN2.",
      rawEvidence: `GENE: NDDMISS6
Known disease association: possible autosomal dominant neurodevelopmental disorder
Reported inheritance: autosomal dominant proposed in limited reports
Known mechanism: uncertain; missense mechanism not well established

Variant:
chr15:44190220 A>G
Transcript: NM_320004.2
HGVS: c.944A>G p.(Tyr315Cys)
Consequence: missense_variant

VCF-style fields:
QUAL=58
FILTER=PASS
INFO: DP=33;MQ=44;QD=1.8;SOR=4.9
FORMAT: GT:AD:DP:GQ

Proband: 0/1:26,7:33:51
Mother: 0/0:37,0:37:99
Father: 0/0:35,0:35:99

Read-level notes:
ALT reads mostly on one strand
5 of 7 ALT reads occur near read ends
Soft-clipping present in several supporting reads
Local repetitive sequence warning present
Second caller: not detected
Manual read-level review recommended before prioritisation

Population:
gnomAD AF = not observed
gnomAD allele count = 0

Constraint:
LOEUF = 0.58
pLI = 0.36

ClinVar-style summary:
No exact matching variant record found in local summary
Gene-disease relationship remains limited in available summary`,
      concern:
        "This is a possible SNV candidate, but the technical evidence and gene-disease support are weaker than the CNV evidence for Candidate 3.",
    },
  ],

  decisionCheckpoints: [
    {
      id: "checkpoint-1",
      title: "Checkpoint 1 — Haploinsufficiency is not triplosensitivity",
      context:
        "Candidate 1 is a de novo multi-exon duplication in HAPLOONLY1. The gene has evidence for haploinsufficiency, but triplosensitivity is not established.",
      question:
        "What is the safest interpretation of Candidate 1?",
      options: [
        {
          label: "A",
          text: "It is automatically pathogenic because the gene is dosage-sensitive for deletions.",
          isCorrect: false,
          feedback:
            "Not quite. Dosage sensitivity for loss does not automatically mean dosage sensitivity for gain.",
        },
        {
          label: "B",
          text: "It is technically plausible and de novo, but clinical relevance is uncertain because copy-number gain is not an established mechanism for this gene.",
          isCorrect: true,
          feedback:
            "Correct. Candidate 1 should not be treated as equivalent to a deletion or truncating variant.",
        },
        {
          label: "C",
          text: "It is definitely false because duplications cannot be detected by genome sequencing.",
          isCorrect: false,
          feedback:
            "Not quite. Duplications can be detected, but interpretation needs careful review.",
        },
      ],
      teachingPoint:
        "Copy-number gain and copy-number loss require separate mechanism evidence.",
    },
    {
      id: "checkpoint-2",
      title: "Checkpoint 2 — Inherited duplication with weak dosage evidence",
      context:
        "Candidate 2 is technically plausible and inherited from the mother. The gene-disease evidence is broad, triplosensitivity is not established, and overlapping duplications are seen in population summaries.",
      question:
        "Why is Candidate 2 weaker?",
      options: [
        {
          label: "A",
          text: "Because inherited duplications are always artefacts.",
          isCorrect: false,
          feedback:
            "Not quite. Candidate 2 may be technically real. The issue is clinical relevance.",
        },
        {
          label: "B",
          text: "Because inheritance from an unaffected parent, population overlap, broad gene evidence, and lack of triplosensitivity all reduce plausibility.",
          isCorrect: true,
          feedback:
            "Correct. Candidate 2 is a real-looking CNV but not a strong disease explanation.",
        },
        {
          label: "C",
          text: "Because all duplications should be ignored in rare disease analysis.",
          isCorrect: false,
          feedback:
            "Not quite. Candidate 3 shows that duplications can be important when the evidence fits.",
        },
      ],
      teachingPoint:
        "A technically real CNV is not automatically clinically relevant.",
    },
    {
      id: "checkpoint-3",
      title: "Checkpoint 3 — Recognise a strong triplosensitivity candidate",
      context:
        "Candidate 3 is an apparent de novo full-gene duplication of TRIPGAIN2. Copy-number gain is a known disease mechanism and the phenotype matches the reported syndrome.",
      question:
        "Why is Candidate 3 the strongest current candidate?",
      options: [
        {
          label: "A",
          text: "Because the duplication has strong technical support, apparent de novo inheritance, full-gene dosage impact, established triplosensitivity, population rarity, and phenotype fit.",
          isCorrect: true,
          feedback:
            "Correct. Candidate 3 has the strongest combined CNV and clinical evidence.",
        },
        {
          label: "B",
          text: "Because every duplication larger than 100 kb is pathogenic.",
          isCorrect: false,
          feedback:
            "Not quite. Size helps context, but gene content, dosage mechanism, inheritance, population evidence, and technical confidence matter more.",
        },
        {
          label: "C",
          text: "Because CNVs always outrank SNVs regardless of evidence.",
          isCorrect: false,
          feedback:
            "Not quite. Variant class alone does not determine priority.",
        },
      ],
      teachingPoint:
        "A strong duplication candidate requires evidence that extra dosage of the affected gene is actually disease-relevant.",
    },
    {
      id: "checkpoint-4",
      title: "Checkpoint 4 — Borderline SNV versus strong duplication",
      context:
        "Candidate 4 is a possible de novo missense variant, but it has weak allele balance, strand/read-position concerns, soft-clipping, no second-caller support, and limited gene-disease evidence.",
      question:
        "Why should Candidate 4 not outrank Candidate 3?",
      options: [
        {
          label: "A",
          text: "Because a technically fragile SNV in a weak gene should not outrank a well-supported mechanism-matched duplication.",
          isCorrect: true,
          feedback:
            "Correct. Candidate 3 is stronger because the evidence is much more coherent.",
        },
        {
          label: "B",
          text: "Because missense variants can never cause neurodevelopmental disorders.",
          isCorrect: false,
          feedback:
            "Not quite. Missense variants can matter, but this one is technically and clinically weaker.",
        },
        {
          label: "C",
          text: "Because absence from population data makes Candidate 4 irrelevant.",
          isCorrect: false,
          feedback:
            "Not quite. Population absence supports rarity, but it does not overcome technical weakness.",
        },
      ],
      teachingPoint:
        "Do not let a possible de novo label override stronger CNV evidence elsewhere.",
    },
    {
      id: "checkpoint-5",
      title: "Checkpoint 5 — Safe service-style next step",
      context:
        "Candidate 3 is the strongest current candidate. Candidate 1 is de novo but has uncertain gain mechanism. Candidate 2 is inherited with weak triplosensitivity evidence. Candidate 4 is technically fragile.",
      question:
        "What is the safest next step?",
      options: [
        {
          label: "A",
          text: "Prioritise Candidate 3 for CNV plot review and escalation, document the triplosensitivity reasoning, and explain why the other candidates are weaker.",
          isCorrect: true,
          feedback:
            "Correct. This is safe and reviewable because it prioritises the mechanism-matched duplication and documents the caveats.",
        },
        {
          label: "B",
          text: "Report Candidate 1 because de novo duplications are always pathogenic.",
          isCorrect: false,
          feedback:
            "Not quite. Candidate 1 lacks established copy-number gain mechanism.",
        },
        {
          label: "C",
          text: "Ignore CNV confirmation or review because Candidate 3 has a PASS call.",
          isCorrect: false,
          feedback:
            "Not quite. PASS is useful, but CNV plot review and local confirmation policy still matter.",
        },
      ],
      teachingPoint:
        "Safe duplication interpretation requires technical review and clear dosage-mechanism reasoning.",
    },
  ],

  finalReflection:
    "A safe trainee-level conclusion would be that Candidate 3 is the strongest current candidate for review because it is an apparent de novo full-gene duplication of TRIPGAIN2, a gene where triplosensitivity/copy-number gain is a reported disease mechanism, and the CNV is technically well supported with strong phenotype fit and no common benign overlap. Candidate 1 is technically plausible and de novo, but the known mechanism for HAPLOONLY1 is haploinsufficiency rather than triplosensitivity, so the clinical relevance of a duplication is uncertain. Candidate 2 is likely a real duplication but is inherited from an unaffected mother, overlaps population CNVs, and lacks established copy-number gain mechanism. Candidate 4 is a possible SNV candidate but technically fragile. The safest next step is to prioritise Candidate 3 for CNV plot review, dosage review, confirmation/escalation according to local practice, and clear documentation of the duplication mechanism.",
};