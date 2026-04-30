export const case31 = {
  id: "case-31",
  slug: "single-exon-deletion-review-case",
  title: "Case 31: Single-exon deletion review",
  level: "Advanced",
  summary:
    "A CNV-focused case about reviewing single-exon deletions, read-depth evidence, exon-level confidence, dosage mechanism, inheritance, and why small CNVs need careful confirmation.",

  visualisationExampleId: null,

  assessmentFocus: [
    "Single-exon CNV review",
    "Read-depth interpretation",
    "CNV caller confidence",
    "Dosage sensitivity and gene mechanism",
    "Inheritance review for small CNVs",
    "Duplication versus deletion mechanism",
    "Confirmation and escalation of exon-level CNVs",
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
        "candidate-2",
        "candidate-3",
        "candidate-4",
        "candidate-1",
      ],
      explanation:
        "Candidate 2 is strongest because it is a full coding exon deletion in a dosage-sensitive, phenotype-compatible gene, with consistent read-depth reduction, second-caller support, apparent de novo inheritance, population rarity, and strong clinical fit. Candidate 3 is technically plausible as a duplication, but the gain mechanism is uncertain and it is inherited from an unaffected mother. Candidate 4 is phenotypically possible but technically fragile, with low alternate support, strand/read-position concerns, soft-clipping, and no second-caller support. Candidate 1 is weakest because it is a very small partial-exon deletion with weak read-depth evidence, low-confidence caller support, no second-caller support, no breakpoint evidence, limited gene-disease validity, and population/technical warnings.",
    },

    escalationDecision: {
      prompt:
        "Choose the safest next action for this single-exon CNV review case.",
      options: [
        {
          id: "prioritise-candidate-2",
          label: "A",
          decision:
            "Prioritise Candidate 2 for CNV plot review and escalation, document why the other candidates are weaker, and note that confirmation may be required by local practice.",
          isBest: true,
          feedback:
            "Best decision. Candidate 2 has the strongest exon-level CNV evidence, but CNV plot review and local confirmation/escalation requirements still matter.",
        },
        {
          id: "prioritise-candidate-1",
          label: "B",
          decision:
            "Prioritise Candidate 1 because any possible de novo single-exon deletion is automatically important.",
          isBest: false,
          feedback:
            "Review this choice. Candidate 1 is a very small partial-exon call with weak technical support and limited gene-disease evidence.",
        },
        {
          id: "skip-cnv-review",
          label: "C",
          decision:
            "Treat Candidate 2 as final without CNV plot review because two callers support the deletion.",
          isBest: false,
          feedback:
            "Review this choice. Two-caller support strengthens the finding, but exon-level CNVs still need appropriate review and may require confirmation depending on local practice.",
        },
      ],
    },

    writtenSummary: {
      prompt:
        "Write a short trainee-level handover summary explaining which candidate is strongest, why the other candidates are weaker, and what should happen next.",
      checklist: [
        "Names Candidate 2 as the strongest current candidate.",
        "Mentions Candidate 2 evidence: full coding exon deletion, read-depth reduction to around 0.49, normal parental/flanking depth, second-caller support, apparent de novo inheritance, dosage-sensitive gene, population rarity, and phenotype fit.",
        "Explains that Candidate 1 is a weak partial-exon call with poor support.",
        "Explains that Candidate 3 is technically plausible but limited by uncertain triplosensitivity/copy-number gain mechanism and maternal inheritance.",
        "Explains that Candidate 4 is phenotypically possible but technically fragile.",
        "Mentions CNV plot review and possible orthogonal confirmation/local escalation.",
        "Avoids treating every single-exon deletion as automatically reliable.",
        "Avoids reporting the finding as final without appropriate review.",
      ],
      modelAnswer:
        "Candidate 2 is the strongest current candidate for review because it is a full coding exon deletion in SYNEX2, a phenotype-compatible dosage-sensitive gene where haploinsufficiency is a reported mechanism. The read-depth evidence is consistent with a heterozygous deletion, with the proband around 0.49 across exon 5, normal flanking exon depths, normal parental depth, second-caller support, apparent de novo inheritance, and no common full-exon benign overlap. Candidate 1 is much weaker because it is a very small partial-exon call with low-confidence support, only two affected targets, no second-caller support, no breakpoint evidence, and technical/population warnings. Candidate 3 appears technically plausible as a duplication, but the copy-number gain mechanism is uncertain and it is inherited from an unaffected mother. Candidate 4 is phenotypically possible but technically fragile because of low ALT support, strand/read-position concerns, soft-clipping, and no second-caller support. The safest next step is to prioritise Candidate 2 for CNV plot review, dosage and gene-content review, inheritance confirmation, and escalation according to local laboratory practice.",
    },
  },

  reasoningScorecard: [
    {
      category: "Single-exon CNV technical confidence",
      maxScore: 2,
      expectation:
        "Uses read-depth, number of targets/windows, caller support, flanking exon pattern, mappability, and breakpoint evidence to judge exon-level CNV reliability.",
    },
    {
      category: "Dosage mechanism",
      maxScore: 2,
      expectation:
        "Recognises that Candidate 2 fits a haploinsufficiency mechanism, while Candidate 3 has uncertain triplosensitivity/copy-number gain evidence.",
    },
    {
      category: "Small CNV caution",
      maxScore: 2,
      expectation:
        "Recognises that Candidate 1 is weak because it is partial-exon, low-confidence, poorly supported, and affected by technical warnings.",
    },
    {
      category: "Variant-class comparison",
      maxScore: 2,
      expectation:
        "Compares CNV and SNV candidates by evidence quality rather than assuming one variant class always outranks another.",
    },
    {
      category: "Safe service-style conclusion",
      maxScore: 2,
      expectation:
        "Prioritises Candidate 2 for review while documenting limitations of the alternatives and noting confirmation/escalation requirements.",
    },
  ],

  patient: {
    age: 5,
    sex: "Female",
  },

  referralReason:
    "A 5-year-old girl has been referred for rare disease genome analysis because of developmental delay, severe speech delay, seizures, hypotonia, and mild dysmorphic features.",

  testType: "Rare disease genome sequencing with SNV/indel and CNV analysis",

  familyStructure:
    "The proband and both biological parents have been tested. Both parents are reportedly unaffected.",

  history: [
    "Global developmental delay noted in infancy",
    "Severe expressive speech delay",
    "Seizures beginning before age 3",
    "Hypotonia in early childhood",
    "Mild dysmorphic features noted by clinical genetics",
    "No known previous molecular diagnosis",
  ],

  phenotype: [
    "Global developmental delay",
    "Severe speech delay",
    "Seizures",
    "Hypotonia",
    "Mild dysmorphic features",
  ],

  familyHistory:
    "Both parents are reportedly unaffected. No known family history of developmental delay, seizures, hypotonia, dysmorphic features, or a similar neurodevelopmental presentation.",

  serviceContext: [
    "This is a CNV review case.",
    "Single-exon deletions can be clinically important, but they are technically more difficult than larger multi-exon CNVs.",
    "Your task is to decide whether the exon-level CNV evidence is strong enough to prioritise and what limitations still need documenting.",
    "Do not treat every single-exon deletion call as reliable without reviewing read depth, caller support, exon context, inheritance, population overlap, and gene mechanism.",
  ],

  candidateFindings: [
    {
      id: "candidate-1",
      label: "Candidate 1",
      gene: "CNVWEAK1",
      variant: "chr3:44190220-44190490 deletion",
      zygosity: "Possible heterozygous single-exon deletion",
      consequence: "copy_number_loss",
      inheritanceSignal: "Possible de novo, but technically low-confidence",
      clinicalFit:
        "CNVWEAK1 has a possible neurodevelopmental association, but the deletion call affects only part of one exon and has weak read-depth support.",
      rawEvidence: `CNV REGION: chr3:44190220-44190490
CNV type: possible deletion
Estimated size: 270 bp
Copy-number state: possible one-copy loss

Gene:
CNVWEAK1
Known disease association: possible neurodevelopmental disorder
Reported inheritance: autosomal dominant proposed in limited reports
Known mechanism: uncertain
Gene-disease validity: limited

Affected region:
Partial overlap with exon 4 of 12
Deletion does not clearly remove the full exon
Breakpoint not resolved

Inheritance:
Proband: possible deletion called
Mother: no deletion detected
Father: no deletion detected
Inheritance signal: possible de novo, but confidence limited

CNV caller summary:
Caller 1: deletion LOW_CONFIDENCE
Caller 2: not called
Quality score: 24
Number of affected targets/windows: 2

Read-depth evidence:
Expected normalised depth in diploid regions: ~1.00
Proband normalised depth across affected targets: ~0.74
Mother normalised depth across same targets: ~0.97
Father normalised depth across same targets: ~1.01
Flanking exon depths: variable

Breakpoint / split-read evidence:
Split reads: none
Paired-end support: not convincing
Breakpoint not resolved

B-allele / SNP pattern:
No informative SNPs in affected interval

Population / technical notes:
Overlapping small deletions reported in population CNV summary
Low mappability warning across part of exon
GC-content warning present
Manual CNV plot review recommended`,
      concern:
        "This should be treated cautiously. It is a very small partial-exon call with weak read-depth support, no second-caller support, no breakpoint evidence, limited gene-disease validity, and population/technical warnings.",
    },
    {
      id: "candidate-2",
      label: "Candidate 2",
      gene: "SYNEX2",
      variant: "chr7:118902440-118903190 deletion",
      zygosity: "Heterozygous single-exon deletion",
      consequence: "copy_number_loss",
      inheritanceSignal: "Apparent de novo with good parental coverage",
      clinicalFit:
        "SYNEX2 is associated with an autosomal dominant neurodevelopmental disorder including developmental delay, severe speech delay, seizures, hypotonia, and dysmorphic features. Haploinsufficiency is a reported mechanism.",
      rawEvidence: `CNV REGION: chr7:118902440-118903190
CNV type: deletion
Estimated size: 751 bp
Copy-number state: one-copy loss / heterozygous deletion

Gene:
SYNEX2
Known disease association: autosomal dominant syndromic neurodevelopmental disorder
Reported inheritance: autosomal dominant
Known mechanism: haploinsufficiency / loss-of-function
Dosage sensitivity: haploinsufficiency reported in local summary

Affected region:
Full deletion of exon 5 of 14
Exon 5 is coding
Predicted effect: out-of-frame exon loss in MANE Select transcript
Transcript: NM_310002.5
MANE Select / clinically preferred transcript

Inheritance:
Proband: deletion present
Mother: deletion not detected
Father: deletion not detected
Inheritance signal: apparent de novo

CNV caller summary:
Caller 1: deletion PASS
Caller 2: deletion supported
Exon-level CNV model: deletion supported
Quality score: 146
Number of affected targets/windows: 11

Read-depth evidence:
Expected normalised depth in diploid regions: ~1.00
Proband normalised depth across exon 5: ~0.49
Mother normalised depth across exon 5: ~0.98
Father normalised depth across exon 5: ~1.02
Flanking exon depths in proband: ~0.97–1.04

Breakpoint / split-read evidence:
Split reads: limited but consistent with deletion boundary
Paired-end support: present near predicted breakpoints
Breakpoint not fully resolved but evidence is directionally supportive

B-allele / SNP pattern:
Limited informative SNPs because interval is small
No contradictory SNP pattern

Population:
No common overlapping full-exon deletion in local population CNV summary
No full-size benign overlap identified

Technical notes:
Good local mappability
No major segmental duplication warning
No low-complexity warning
Manual CNV plot review still recommended
Orthogonal confirmation may be required according to local laboratory practice

ClinVar-style / dosage summary:
Other deletions and truncating variants affecting SYNEX2 have been submitted as pathogenic/likely pathogenic in affected individuals
Reported phenotypes overlap with developmental delay, severe speech delay, seizures, hypotonia, and dysmorphic features`,
      concern:
        "This is the strongest current candidate because the exon-level deletion has good read-depth support, second-caller support, apparent de novo inheritance, relevant gene dosage mechanism, population rarity, and strong phenotype fit. It still needs CNV plot review and local confirmation/escalation.",
    },
    {
      id: "candidate-3",
      label: "Candidate 3",
      gene: "DUPREG4",
      variant: "chr11:77210000-77245000 duplication",
      zygosity: "Heterozygous duplication",
      consequence: "copy_number_gain",
      inheritanceSignal: "Inherited from unaffected mother",
      clinicalFit:
        "DUPREG4 has a broad neurodevelopmental association, but triplosensitivity is not established and the duplication is inherited from an unaffected mother.",
      rawEvidence: `CNV REGION: chr11:77210000-77245000
CNV type: duplication
Estimated size: 35 kb
Copy-number state: three-copy gain / heterozygous duplication

Gene:
DUPREG4
Known disease association: broad neurodevelopmental association in limited reports
Reported inheritance: uncertain
Known mechanism: haploinsufficiency proposed; triplosensitivity not established

Affected region:
Duplication includes exons 2–3 of 9
Predicted effect uncertain
Tandem orientation not confirmed

Inheritance:
Proband: duplication present
Mother: duplication present
Father: duplication not detected
Inheritance signal: maternally inherited

CNV caller summary:
Caller 1: duplication PASS
Caller 2: duplication supported
Quality score: 118
Number of affected targets/windows: 28

Read-depth evidence:
Expected normalised depth in diploid regions: ~1.00
Proband normalised depth across duplicated interval: ~1.47
Mother normalised depth across duplicated interval: ~1.45
Father normalised depth across duplicated interval: ~1.02

Breakpoint / split-read evidence:
Split reads: not available
Paired-end support: imprecise
Orientation unknown

B-allele / SNP pattern:
B-allele pattern compatible with duplication in proband and mother

Population:
Partial overlapping duplications seen in population CNV summary
No clear established pathogenic recurrent duplication in local summary

Technical notes:
Technically plausible duplication
Clinical relevance uncertain because copy-number gain mechanism is not established`,
      concern:
        "This is technically plausible, but it is not the strongest candidate because it is inherited from an unaffected mother and triplosensitivity/copy-number gain mechanism is uncertain.",
    },
    {
      id: "candidate-4",
      label: "Candidate 4",
      gene: "SEIZSNV7",
      variant: "chr15:44190220 T>C",
      zygosity: "Heterozygous",
      consequence: "missense_variant",
      inheritanceSignal: "Apparent de novo, but technically fragile",
      clinicalFit:
        "SEIZSNV7 has a possible epilepsy-neurodevelopmental association, but the raw SNV evidence is weak and the gene-disease evidence is less established than SYNEX2.",
      rawEvidence: `GENE: SEIZSNV7
Known disease association: possible autosomal dominant developmental epilepsy
Reported inheritance: autosomal dominant proposed in limited reports
Known mechanism: uncertain; missense mechanism not well established

Variant:
chr15:44190220 T>C
Transcript: NM_310004.2
HGVS: c.944T>C p.(Leu315Pro)
Consequence: missense_variant

VCF-style fields:
QUAL=46
FILTER=PASS
INFO: DP=30;MQ=42;QD=1.5;SOR=5.9
FORMAT: GT:AD:DP:GQ

Proband: 0/1:24,6:30:44
Mother: 0/0:36,0:36:99
Father: 0/0:35,0:35:99

Read-level notes:
ALT reads mostly on one strand
5 of 6 ALT reads occur near read ends
Soft-clipping present in several supporting reads
Local repetitive sequence warning present
Second caller: not detected
Manual read-level review recommended before prioritisation

Population:
gnomAD AF = not observed
gnomAD allele count = 0

Constraint:
LOEUF = 0.47
pLI = 0.64

ClinVar-style summary:
No exact matching variant record found in local summary
Gene-disease relationship remains limited/moderate in available summary`,
      concern:
        "This is phenotypically possible but technically fragile. It should not outrank a stronger, dosage-supported exon-level deletion candidate.",
    },
  ],

  decisionCheckpoints: [
    {
      id: "checkpoint-1",
      title: "Checkpoint 1 — Small CNV calls need extra caution",
      context:
        "Candidate 1 is a very small partial-exon deletion supported by only 2 windows, marked LOW_CONFIDENCE by one caller, not detected by a second caller, and affected by mappability/GC warnings.",
      question:
        "What is the safest interpretation of Candidate 1?",
      options: [
        {
          label: "A",
          text: "It should be prioritised because any possible de novo deletion is automatically important.",
          isCorrect: false,
          feedback:
            "Not quite. Apparent de novo status is not enough when the CNV evidence is technically weak.",
        },
        {
          label: "B",
          text: "It should be treated cautiously because the small partial-exon call has weak technical support and limited gene-disease evidence.",
          isCorrect: true,
          feedback:
            "Correct. Candidate 1 is not strong enough to prioritise without much stronger review evidence.",
        },
        {
          label: "C",
          text: "It is definitely benign because small CNVs can never matter.",
          isCorrect: false,
          feedback:
            "Not quite. Small CNVs can matter, especially single-exon deletions, but the evidence here is weak.",
        },
      ],
      teachingPoint:
        "Single-exon or partial-exon CNVs can be real, but they need strong read-depth, caller, exon-context, and review support.",
    },
    {
      id: "checkpoint-2",
      title: "Checkpoint 2 — Recognise a stronger single-exon deletion",
      context:
        "Candidate 2 is a full coding exon 5 deletion in SYNEX2. The proband depth is around 0.49 across the exon, both parents are normal, two callers support the call, and flanking exons have normal depth.",
      question:
        "Why is Candidate 2 stronger than Candidate 1?",
      options: [
        {
          label: "A",
          text: "Because all full-exon deletions are automatically pathogenic.",
          isCorrect: false,
          feedback:
            "Not quite. Full-exon deletion helps, but interpretation still depends on gene, mechanism, inheritance, population, and technical review.",
        },
        {
          label: "B",
          text: "Because CNV calls do not need review if they are de novo.",
          isCorrect: false,
          feedback:
            "Not quite. De novo CNVs still need technical and clinical review.",
        },
        {
          label: "C",
          text: "Because it has stronger exon-level read-depth evidence, second-caller support, apparent de novo inheritance, dosage-sensitive gene context, and phenotype fit.",
          isCorrect: true,
          feedback:
            "Correct. Candidate 2 has a much stronger overall CNV evidence pattern.",
        },
      ],
      teachingPoint:
        "A strong exon-level deletion has consistent depth reduction, appropriate flanking evidence, caller support, gene dosage relevance, and phenotype fit.",
    },
    {
      id: "checkpoint-3",
      title: "Checkpoint 3 — Duplication mechanism matters",
      context:
        "Candidate 3 is a technically plausible duplication inherited from the mother. Haploinsufficiency is proposed for the gene, but triplosensitivity is not established.",
      question:
        "What is the main limitation of Candidate 3?",
      options: [
        {
          label: "A",
          text: "A technically plausible duplication still needs evidence that copy-number gain is a disease mechanism, especially when inherited from an unaffected parent.",
          isCorrect: true,
          feedback:
            "Correct. Duplication evidence is not the same as pathogenic dosage evidence.",
        },
        {
          label: "B",
          text: "Duplications are always more pathogenic than deletions.",
          isCorrect: false,
          feedback:
            "Not quite. Copy-number gain and loss need separate mechanism evidence.",
        },
        {
          label: "C",
          text: "Inherited duplications are always artefacts.",
          isCorrect: false,
          feedback:
            "Not quite. Candidate 3 may be technically real. The issue is clinical relevance.",
        },
      ],
      teachingPoint:
        "For CNVs, the direction of dosage change matters. Haploinsufficiency evidence does not automatically prove triplosensitivity.",
    },
    {
      id: "checkpoint-4",
      title: "Checkpoint 4 — SNV technical weakness versus CNV strength",
      context:
        "Candidate 4 is an apparent de novo missense variant in a possible epilepsy gene, but it has low ALT support, strand/read-position concerns, soft-clipping, and no second-caller support.",
      question:
        "Why should Candidate 4 not outrank Candidate 2?",
      options: [
        {
          label: "A",
          text: "Because a technically fragile SNV should not outrank a stronger CNV with better evidence and phenotype/mechanism fit.",
          isCorrect: true,
          feedback:
            "Correct. Candidate 4 may sound relevant, but the raw evidence is weak.",
        },
        {
          label: "B",
          text: "Because CNVs always outrank SNVs.",
          isCorrect: false,
          feedback:
            "Not quite. Variant class alone does not determine priority. Evidence strength does.",
        },
        {
          label: "C",
          text: "Because missense variants can never cause developmental epilepsy.",
          isCorrect: false,
          feedback:
            "Not quite. Missense variants can be relevant, but this specific call is technically weak.",
        },
      ],
      teachingPoint:
        "Candidate ranking depends on evidence quality, not variant class alone.",
    },
    {
      id: "checkpoint-5",
      title: "Checkpoint 5 — Safe service-style next step",
      context:
        "Candidate 2 is the strongest current candidate. Candidate 1 is a weak partial-exon deletion. Candidate 3 is a technically plausible duplication with uncertain gain mechanism. Candidate 4 is technically fragile.",
      question:
        "What is the safest next step?",
      options: [
        {
          label: "A",
          text: "Prioritise Candidate 2 for CNV plot review and escalation, document why the other candidates are weaker, and note that confirmation may be required by local practice.",
          isCorrect: true,
          feedback:
            "Correct. This is a safe and reviewable CNV-focused conclusion.",
        },
        {
          label: "B",
          text: "Report Candidate 1 because smaller deletions are easier to interpret.",
          isCorrect: false,
          feedback:
            "Not quite. Candidate 1 is small but technically weak.",
        },
        {
          label: "C",
          text: "Ignore confirmation or CNV review because two callers support Candidate 2.",
          isCorrect: false,
          feedback:
            "Not quite. Two-caller support helps, but CNV plot review and local confirmation policy still matter.",
        },
      ],
      teachingPoint:
        "Safe CNV practice means prioritising strong calls while documenting technical limitations and confirmation requirements.",
    },
  ],

  finalReflection:
    "A safe trainee-level conclusion would be that Candidate 2 is the strongest current candidate for review because it is a full coding exon deletion in a dosage-sensitive, phenotype-compatible gene, with consistent read-depth reduction, second-caller support, apparent de novo inheritance, population rarity, and supportive clinical fit. Candidate 1 is a weak partial-exon CNV with low-confidence support and technical warnings. Candidate 3 is a technically plausible duplication but copy-number gain mechanism is uncertain and it is inherited from an unaffected mother. Candidate 4 is a possible SNV candidate but technically fragile. The safest next step is to prioritise Candidate 2 for CNV plot review, dosage/gene-content review, inheritance confirmation, and escalation according to local laboratory practice.",
};