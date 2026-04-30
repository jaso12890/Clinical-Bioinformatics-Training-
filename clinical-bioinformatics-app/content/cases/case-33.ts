export const case33 = {
  id: "case-33",
  slug: "balanced-structural-variant-suspicion-case",
  title: "Case 33: Balanced structural variant suspicion",
  level: "Advanced",
  summary:
    "A structural-variant case focused on recognising when standard SNV/indel and CNV outputs do not provide a clean answer, but breakpoint-level evidence suggests a possible balanced rearrangement requiring escalation.",

  visualisationExampleId: null,

  assessmentFocus: [
    "Balanced structural-variant suspicion",
    "Breakpoint-level evidence",
    "Discordant read-pair and split-read interpretation",
    "Copy-number neutral gene disruption",
    "Limits of standard SNV/indel and CNV workflows",
    "Structural-variant escalation",
    "Safe uncertainty documentation",
  ],

  guidedTutorMode: {
    type: "static-rule-based",
    description:
      "Uses built-in hints, checkpoint feedback, model answers, and self-check criteria to support safe case reasoning.",
  },

  phase5Assessment: {
    candidateRanking: {
      prompt:
        "Rank the findings from strongest to weakest as explanations for the patient’s referred neurodevelopmental presentation.",
      correctOrder: ["candidate-2", "candidate-3", "candidate-1"],
      explanation:
        "Candidate 2 is the key finding to escalate because it shows breakpoint-level evidence for a possible balanced rearrangement disrupting SYNBRK2, a phenotype-compatible dosage-sensitive gene. Candidate 3 is likely a real duplication, but it is inherited from an unaffected father, overlaps population CNVs, and lacks established triplosensitivity. Candidate 1 is technically real, but it is inherited from an unaffected mother, relatively frequent, and in a weak/broad gene-disease context.",
    },

    escalationDecision: {
      prompt:
        "Choose the safest next action for this structural-variant suspicion case.",
      options: [
        {
          id: "escalate-structural-review",
          label: "A",
          decision:
            "Document no convincing SNV/indel or standard CNV diagnosis, flag the possible SYNBRK2-disrupting balanced structural event, and escalate for specialist SV review and appropriate confirmation.",
          isBest: true,
          feedback:
            "Best decision. The evidence does not support a clean small-variant or standard CNV diagnosis, but Candidate 2 has enough breakpoint-level evidence and phenotype fit to require specialist structural-variant review.",
        },
        {
          id: "report-small-variant",
          label: "B",
          decision:
            "Report Candidate 1 because it is the cleanest conventional SNV in the candidate list.",
          isBest: false,
          feedback:
            "Review this choice. Candidate 1 may be technically real, but it is clinically weak because of inheritance, population frequency, limited gene-disease validity, and poor phenotype specificity.",
        },
        {
          id: "ignore-structural-signal",
          label: "C",
          decision:
            "Ignore Candidate 2 because there is no deletion or duplication across SYNBRK2.",
          isBest: false,
          feedback:
            "Review this choice. Balanced structural events may disrupt genes without producing a copy-number change. Normal CNV depth does not exclude a balanced rearrangement.",
        },
      ],
    },

    writtenSummary: {
      prompt:
        "Write a short trainee-level handover summary explaining why Candidate 2 should be escalated, why the other candidates are weaker, and what should happen next.",
      checklist: [
        "States that there is no clean SNV/indel or standard CNV diagnosis from the current evidence.",
        "Identifies Candidate 2 as the key finding to escalate.",
        "Mentions possible balanced rearrangement involving chr7 and chr14.",
        "Mentions breakpoint A lies within intron 4 of SYNBRK2.",
        "Mentions SYNBRK2 is phenotype-compatible and has a reported haploinsufficiency/gene disruption mechanism.",
        "Mentions normal copy-number depth across SYNBRK2, showing why this is not a standard deletion/duplication call.",
        "Mentions supporting structural evidence such as discordant read pairs, split reads, read orientation pattern, good mapping quality, and absence in parents.",
        "Avoids calling the event confirmed or reportable without specialist review.",
        "Explains why Candidate 1 is weak: inherited, relatively frequent, weak gene-disease validity, poor specificity.",
        "Explains why Candidate 3 is weak: inherited duplication, population overlap, uncertain triplosensitivity.",
        "Recommends specialist SV review and possible orthogonal confirmation according to local practice.",
      ],
      modelAnswer:
        "There is no clean SNV/indel or standard CNV diagnosis from the current evidence, but Candidate 2 should be escalated because the structural read evidence suggests a possible balanced rearrangement involving chr7 and chr14 with a breakpoint in intron 4 of SYNBRK2. SYNBRK2 is a phenotype-compatible dosage-sensitive neurodevelopmental gene where gene disruption or loss-of-function is a reported mechanism. The normal read-depth across SYNBRK2 means this is not a standard copy-number loss or gain, but the discordant read pairs, split reads, orientation pattern, good mapping quality, and lack of parental breakpoint signal make the structural event important to review. Candidate 1 is technically real but weak because it is inherited, relatively frequent, and in a gene with limited broad neurodevelopmental evidence. Candidate 3 is likely a real duplication, but it is inherited from an unaffected father, overlaps population CNVs, and lacks established triplosensitivity. The safest next step is to document that no conventional small-variant or CNV answer is present, flag Candidate 2 for specialist structural-variant review, and pursue appropriate confirmation according to local laboratory practice.",
    },
  },

  reasoningScorecard: [
    {
      category: "Recognition of structural-variant clue",
      maxScore: 2,
      expectation:
        "Recognises that discordant read pairs, split reads, abnormal orientation, and breakpoint clustering can suggest a balanced rearrangement even when CNV depth is normal.",
    },
    {
      category: "Copy-number neutral reasoning",
      maxScore: 2,
      expectation:
        "Explains that a balanced structural event can disrupt a gene or regulatory region without producing a deletion or duplication call.",
    },
    {
      category: "Candidate comparison",
      maxScore: 2,
      expectation:
        "Prioritises Candidate 2 for escalation over a technically real but clinically weak inherited SNV and a technically plausible but inherited duplication with weak gain mechanism.",
    },
    {
      category: "Safe wording and uncertainty",
      maxScore: 2,
      expectation:
        "Avoids over-calling Candidate 2 as a confirmed pathogenic balanced translocation and uses cautious language such as possible, suspected, or requires specialist review.",
    },
    {
      category: "Service-style escalation",
      maxScore: 2,
      expectation:
        "Recommends documentation, specialist structural-variant review, and appropriate orthogonal confirmation or local laboratory escalation.",
    },
  ],

  patient: {
    age: 11,
    sex: "Female",
  },

  referralReason:
    "An 11-year-old girl has been referred for rare disease genome analysis because of developmental delay, severe speech delay, epilepsy, hypotonia, and mild dysmorphic features.",

  testType:
    "Rare disease genome sequencing with SNV/indel, CNV, and limited structural-variant review",

  familyStructure:
    "The proband and both biological parents have been tested. Both parents are reportedly unaffected.",

  history: [
    "Global developmental delay noted in infancy",
    "Severe expressive speech delay",
    "Epilepsy beginning at age 4",
    "Hypotonia from early childhood",
    "Mild dysmorphic features noted by clinical genetics",
    "No known previous molecular diagnosis",
    "No large deletion or duplication has been confidently detected by the initial CNV workflow",
  ],

  phenotype: [
    "Global developmental delay",
    "Severe speech delay",
    "Epilepsy",
    "Hypotonia",
    "Mild dysmorphic features",
  ],

  familyHistory:
    "Both parents are reportedly unaffected. No known family history of developmental delay, epilepsy, hypotonia, dysmorphic features, recurrent pregnancy loss, or a known balanced rearrangement is documented.",

  serviceContext: [
    "This is a structural-variant suspicion case.",
    "The key issue is that a standard SNV/indel or CNV candidate list may not explain the case.",
    "Balanced rearrangements can disrupt genes or regulatory regions without creating a clear copy-number loss or gain.",
    "Short-read genome sequencing may show clues such as split reads, discordant read pairs, abnormal orientation, or breakpoint clustering.",
    "Your task is to recognise when the safest conclusion is not a small-variant diagnosis, but escalation for structural-variant review and possible orthogonal confirmation.",
  ],

  candidateFindings: [
    {
      id: "candidate-1",
      label: "Candidate 1",
      gene: "BROADSV1",
      variant: "chr2:44190220 C>T",
      zygosity: "Heterozygous",
      consequence: "missense_variant",
      inheritanceSignal: "Inherited from unaffected mother",
      clinicalFit:
        "BROADSV1 has a broad neurodevelopmental association in limited reports, but the variant is inherited from an unaffected parent and is relatively frequent for a severe rare neurodevelopmental condition.",
      rawEvidence: `GENE: BROADSV1
Known disease association: broad neurodevelopmental association in limited reports
Reported inheritance: autosomal dominant proposed
Known mechanism: uncertain
Gene-disease validity: limited

Variant:
chr2:44190220 C>T
Transcript: NM_330001.2
HGVS: c.899C>T p.(Pro300Leu)
Consequence: missense_variant
Protein domain: outside known recurrent functional region in local summary

VCF-style fields:
QUAL=660
FILTER=PASS
INFO: DP=45;MQ=60;QD=14.7;SOR=0.80
FORMAT: GT:AD:DP:GQ

Proband: 0/1:23,22:45:99
Mother: 0/1:21,22:43:99
Father: 0/0:40,0:40:99

Read-level notes:
ALT reads seen on both forward and reverse strands
ALT reads distributed across read positions
No local mapping warning
No soft-clipping concern

Population:
gnomAD AF = 0.0016
gnomAD allele count = 420
Homozygotes observed in population summary = 1

Constraint:
LOEUF = 0.80
pLI = 0.09

ClinVar-style summary:
No exact matching pathogenic record found in local summary
Gene-disease relationship remains limited and broad`,
      concern:
        "This is technically real, but it is weak as a rare disease candidate because of inheritance, population frequency, limited gene-disease evidence, and poor phenotype specificity.",
    },
    {
      id: "candidate-2",
      label: "Candidate 2",
      gene: "SYNBRK2",
      variant: "Possible balanced breakpoint disrupting SYNBRK2",
      zygosity: "Structural breakpoint suspicion",
      consequence: "possible_gene_disruption",
      inheritanceSignal:
        "Not present in parents in the current structural signal summary, but breakpoint requires specialist review",
      clinicalFit:
        "SYNBRK2 is associated with an autosomal dominant neurodevelopmental disorder including developmental delay, severe speech delay, seizures, hypotonia, and dysmorphic features. Loss-of-function or gene disruption is a reported mechanism.",
      rawEvidence: `STRUCTURAL VARIANT SIGNAL:
Possible balanced rearrangement involving chr7 and chr14
Candidate breakpoint A: chr7:118902430-118902520
Candidate breakpoint B: chr14:77190410-77190520

Gene affected:
SYNBRK2
Known disease association: autosomal dominant syndromic neurodevelopmental disorder
Reported inheritance: autosomal dominant
Known mechanism: haploinsufficiency / gene disruption / loss-of-function
Dosage sensitivity: haploinsufficiency reported in local summary

Breakpoint context:
Breakpoint A lies within intron 4 of SYNBRK2
SYNBRK2 transcript: NM_330002.5
Clinically preferred transcript: MANE Select
Predicted effect if breakpoint is real: possible disruption of SYNBRK2 transcript
No clear coding SNV/indel candidate identified in SYNBRK2
No exon-level deletion detected across SYNBRK2 by CNV caller

Copy-number review:
CNV caller 1: no deletion/duplication called at SYNBRK2
CNV caller 2: no deletion/duplication called at SYNBRK2
Normalised depth across SYNBRK2 exons: ~0.96–1.05 in proband
Mother normalised depth: ~0.97–1.04
Father normalised depth: ~0.98–1.03
Interpretation: no clear copy-number loss or gain

Structural read evidence in proband:
Discordant read pairs linking chr7 and chr14: 18
Split reads supporting chr7 breakpoint: 7
Split reads supporting chr14 breakpoint: 6
Read orientation pattern: consistent with balanced rearrangement in local SV summary
Mapping quality of breakpoint-supporting reads: mostly MQ 55–60
Breakpoint-supporting reads seen on both strands
No major low-complexity warning at breakpoint A
Breakpoint B has moderate repetitive sequence nearby but supporting reads map uniquely

Parental structural signal:
Mother: no supporting discordant pair cluster detected at same breakpoints
Father: no supporting discordant pair cluster detected at same breakpoints
Parental coverage across breakpoint regions: adequate
Inheritance signal: possible de novo structural event, but requires formal SV review

Population / local database:
No matching recurrent benign balanced breakpoint in local summary
No common CNV overlap because the event is not copy-number changing

Technical limitations:
Breakpoints are approximate from short-read data
Balanced structural events may require specialist SV pipeline review
Orthogonal confirmation may be needed, for example targeted breakpoint assay, karyotype/FISH/array where appropriate, optical mapping, or long-read sequencing depending on local pathway
Do not report as final exact rearrangement without appropriate review`,
      concern:
        "This is the key finding to escalate. It is not a simple SNV or CNV diagnosis, but the structural read evidence suggests a possible balanced rearrangement disrupting a phenotype-compatible dosage-sensitive gene.",
    },
    {
      id: "candidate-3",
      label: "Candidate 3",
      gene: "CNVSV5 region",
      variant: "chr12:55210000-55256000 duplication",
      zygosity: "Possible heterozygous duplication",
      consequence: "copy_number_gain",
      inheritanceSignal: "Inherited from unaffected father",
      clinicalFit:
        "The duplicated interval contains a possible neurodevelopmental candidate gene, but the duplication is inherited, overlaps population CNVs, and copy-number gain is not a known disease mechanism.",
      rawEvidence: `CNV REGION: chr12:55210000-55256000
CNV type: duplication
Estimated size: 46 kb
Copy-number state: possible three-copy gain

Gene:
CNVSV5
Known disease association: possible neurodevelopmental association in limited reports
Known mechanism: uncertain
Triplosensitivity evidence: not established

Affected region:
Partial duplication of exons 2–3 of 9
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
Quality score: 104
Number of affected targets/windows: 24

Read-depth evidence:
Expected normalised depth in diploid regions: ~1.00
Proband normalised depth across interval: ~1.45
Father normalised depth across interval: ~1.47
Mother normalised depth across interval: ~1.02
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
Clinical relevance uncertain because inherited and no established gain mechanism`,
      concern:
        "This is likely a real duplication, but it is weaker because it is inherited from an unaffected father, has population overlap, and lacks a clear triplosensitivity mechanism.",
    },
  ],

  decisionCheckpoints: [
    {
      id: "checkpoint-1",
      title: "Checkpoint 1 — No CNV does not mean no structural problem",
      context:
        "Candidate 2 has no clear copy-number loss or gain across SYNBRK2, but there are discordant read pairs and split reads suggesting a possible balanced rearrangement breakpoint within the gene.",
      question:
        "What is the safest interpretation of this pattern?",
      options: [
        {
          label: "A",
          text: "A balanced structural event may disrupt a gene without producing a clear CNV signal, so the breakpoint evidence needs specialist review.",
          isCorrect: true,
          feedback:
            "Correct. Balanced rearrangements can be copy-number neutral but still clinically relevant if they disrupt a dosage-sensitive gene.",
        },
        {
          label: "B",
          text: "The finding should be ignored because only deletions and duplications can affect genes.",
          isCorrect: false,
          feedback:
            "Not quite. Balanced rearrangements can disrupt genes or regulatory architecture without changing copy number.",
        },
        {
          label: "C",
          text: "The finding is already confirmed and can be reported without further review because split reads are present.",
          isCorrect: false,
          feedback:
            "Not quite. Split reads support the suspicion, but breakpoint-level structural findings require appropriate specialist review and confirmation.",
        },
      ],
      teachingPoint:
        "Balanced structural variants can be clinically important even when CNV callers show normal copy number.",
    },
    {
      id: "checkpoint-2",
      title: "Checkpoint 2 — Identify the key finding to escalate",
      context:
        "Candidate 1 is a technically real inherited missense variant with weak clinical evidence. Candidate 3 is a technically plausible inherited duplication with uncertain gain mechanism. Candidate 2 shows possible gene-disrupting breakpoint evidence in a phenotype-compatible gene.",
      question:
        "Which finding should be escalated first?",
      options: [
        {
          label: "A",
          text: "Candidate 1, because SNVs are easier to interpret than structural signals.",
          isCorrect: false,
          feedback:
            "Not quite. Ease of interpretation does not make Candidate 1 clinically stronger.",
        },
        {
          label: "B",
          text: "Candidate 2, because the structural read evidence may indicate disruption of a phenotype-compatible dosage-sensitive gene.",
          isCorrect: true,
          feedback:
            "Correct. Candidate 2 is the most important finding to escalate, even though it is not a simple SNV/CNV answer.",
        },
        {
          label: "C",
          text: "Candidate 3, because any CNV should outrank structural read evidence.",
          isCorrect: false,
          feedback:
            "Not quite. Candidate 3 is inherited and has weak dosage evidence, while Candidate 2 better fits the case.",
        },
      ],
      teachingPoint:
        "The most important finding is not always the neatest variant in the candidate list.",
    },
    {
      id: "checkpoint-3",
      title: "Checkpoint 3 — Do not overstate the balanced SV",
      context:
        "Candidate 2 has discordant read pairs and split reads suggesting a possible balanced rearrangement, but the exact breakpoints are approximate from short-read data.",
      question:
        "What should you avoid saying at this stage?",
      options: [
        {
          label: "A",
          text: "There is a possible structural event that may disrupt SYNBRK2 and needs specialist review.",
          isCorrect: false,
          feedback:
            "That wording is appropriately cautious. It describes the evidence without over-claiming.",
        },
        {
          label: "B",
          text: "The evidence suggests a possible balanced rearrangement, but confirmation or specialist SV review may be needed.",
          isCorrect: false,
          feedback:
            "That is also appropriate. It keeps the uncertainty visible.",
        },
        {
          label: "C",
          text: "This is a confirmed pathogenic balanced translocation with exact breakpoints and final diagnostic interpretation.",
          isCorrect: true,
          feedback:
            "Correct. That would overstate the evidence. The current data support suspicion and escalation, not final sign-off.",
        },
      ],
      teachingPoint:
        "Structural-variant suspicion should be communicated proportionately: enough to trigger review, not so strongly that it becomes an unsupported final diagnosis.",
    },
    {
      id: "checkpoint-4",
      title: "Checkpoint 4 — Inherited duplication with uncertain gain mechanism",
      context:
        "Candidate 3 is a technically plausible duplication inherited from the father, with population overlap and no established triplosensitivity mechanism.",
      question:
        "Why is Candidate 3 weaker than Candidate 2?",
      options: [
        {
          label: "A",
          text: "Because duplications are always benign.",
          isCorrect: false,
          feedback:
            "Not quite. Duplications can be pathogenic when the dosage mechanism, inheritance, population evidence, and phenotype fit support them.",
        },
        {
          label: "B",
          text: "Because Candidate 3 is inherited, overlaps population CNVs, and lacks a known copy-number gain mechanism, while Candidate 2 may disrupt a stronger phenotype-compatible gene.",
          isCorrect: true,
          feedback:
            "Correct. Candidate 3 is technically plausible but clinically weaker.",
        },
        {
          label: "C",
          text: "Because inherited CNVs are always artefacts.",
          isCorrect: false,
          feedback:
            "Not quite. Candidate 3 may be real. The issue is clinical relevance.",
        },
      ],
      teachingPoint:
        "A real CNV can still be lower priority when inheritance, population overlap, and dosage mechanism are weak.",
    },
    {
      id: "checkpoint-5",
      title: "Checkpoint 5 — Safe service-style next step",
      context:
        "There is no clean SNV/indel or standard CNV diagnosis. Candidate 2 suggests a possible balanced structural event affecting SYNBRK2.",
      question:
        "What is the safest next step?",
      options: [
        {
          label: "A",
          text: "Document no convincing small-variant/CNV diagnosis, flag the possible SYNBRK2-disrupting balanced structural event, and escalate for specialist SV review and appropriate confirmation.",
          isCorrect: true,
          feedback:
            "Correct. This is the safest and most useful service-style conclusion.",
        },
        {
          label: "B",
          text: "Ignore the structural signal because it is harder to interpret than SNVs.",
          isCorrect: false,
          feedback:
            "Not quite. Structural signals can be clinically important and should be escalated when they fit the case.",
        },
        {
          label: "C",
          text: "Report Candidate 1 as the diagnosis because it is the cleanest small variant.",
          isCorrect: false,
          feedback:
            "Not quite. Candidate 1 is clean technically but weak clinically.",
        },
      ],
      teachingPoint:
        "Safe clinical bioinformatics includes recognising when the answer may sit outside the standard SNV/CNV candidate list.",
    },
  ],

  finalReflection:
    "A safe trainee-level conclusion would be that there is no clean SNV/indel or standard CNV diagnosis from the current evidence, but Candidate 2 should be escalated because the structural read evidence suggests a possible balanced rearrangement disrupting SYNBRK2, a phenotype-compatible dosage-sensitive gene. Candidate 1 is technically real but weak because it is inherited, relatively frequent, and has limited gene-disease support. Candidate 3 is likely a real duplication, but it is inherited from an unaffected father, overlaps population CNVs, and lacks established triplosensitivity. The safest next step is to document the absence of a clear small-variant/CNV answer, flag the possible balanced structural event, and escalate for specialist structural-variant review and appropriate confirmation according to local laboratory practice.",
};