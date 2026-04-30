export const case57 = {
  id: "case-57",
  slug: "low-level-contamination-case",
  title: "Case 57: Low-level contamination case",
  level: "Advanced",
  summary:
    "A guided case focused on recognising when a low-level apparent de novo or mosaic signal may be explained by sample contamination rather than true disease biology.",

  visualisationExampleId: null,

  assessmentFocus: [
    "Contamination awareness",
    "Low allele fraction interpretation",
    "False de novo reasoning",
    "Mosaicism caution",
    "Technical quality review",
    "Safe escalation and communication",
  ],

  guidedTutorMode: {
    type: "static-rule-based",
    description:
      "Uses built-in hints, checkpoint feedback, model answers, and self-check criteria to support safe case reasoning.",
  },

  phase5Assessment: {
    candidateRanking: {
      prompt:
        "Rank the findings from strongest to weakest based on technical confidence, contamination evidence, phenotype fit, and whether each finding should drive the final case conclusion.",
      correctOrder: [
        "candidate-5",
        "candidate-2",
        "candidate-3",
        "candidate-4",
        "candidate-1",
      ],
      explanation:
        "Candidate 5 is most important because the contamination review changes whether any low-level finding can be trusted. Candidate 2 is the main affected finding because it appears interesting but is likely explained by contamination rather than true de novo or mosaic disease. Candidate 3 is plausible but weak because the evidence is uncertain and does not solve the case. Candidate 4 is a likely real inherited CNV with weak dosage support. Candidate 1 is technically real but low priority because of frequency, inheritance, and poor phenotype specificity.",
    },

    escalationDecision: {
      prompt:
        "Choose the safest next action for this case given the low-level contamination evidence.",
      options: [
        {
          id: "report-low-level-candidate",
          label: "A",
          decision:
            "Report Candidate 2 as a mosaic diagnostic finding because low allele fraction disease variants can be clinically important.",
          isBest: false,
          feedback:
            "Review this choice. Low allele fraction variants can matter, but this case has broader contamination evidence that weakens trust in Candidate 2.",
        },
        {
          id: "escalate-contamination-review",
          label: "B",
          decision:
            "Escalate the sample-quality concern, hold diagnostic wording, and request appropriate confirmation or repeat testing.",
          isBest: true,
          feedback:
            "Best decision. The contamination pattern affects interpretation, so the safest action is to resolve sample quality before reporting a low-level candidate.",
        },
        {
          id: "ignore-contamination",
          label: "C",
          decision:
            "Ignore the low-level background signals because the main candidate has a phenotype-compatible gene and passed initial filters.",
          isBest: false,
          feedback:
            "Review this choice. A phenotype-compatible gene does not override sample-level concerns that could create a false low-level signal.",
        },
      ],
    },

    writtenSummary: {
      prompt:
        "Write a short trainee-level handover summary explaining the main technical concern, how it affects the low-level candidate, and what should happen next.",
      checklist: [
        "Identifies Candidate 5 as the key technical issue.",
        "Explains that Candidate 2 may be a false low-level signal rather than true mosaicism.",
        "Mentions the broader pattern of low-level unexpected alleles.",
        "Uses sample identity, contamination, and read-level evidence appropriately.",
        "Avoids reporting Candidate 2 as diagnostic from the current data.",
        "Recommends confirmation, repeat sampling, or formal laboratory review before interpretation.",
      ],
      modelAnswer:
        "The key issue in this case is Candidate 5, the contamination review. Candidate 2 is a low allele fraction signal in a phenotype-compatible gene, but it should not be treated as a diagnostic mosaic or de novo finding from the current evidence because there is a broader pattern of low-level unexpected alternate alleles, including alleles compatible with another sample source. The finding is also not convincingly enriched in an affected tissue sample and sits within a sample-quality context that could generate a false low-level call. Candidate 3 is plausible but weaker because the evidence is uncertain and less well matched. Candidate 4 is likely a real inherited duplication but has weak dosage and phenotype support, and Candidate 1 is a broad, relatively frequent inherited finding. The safest next step is to escalate the contamination/sample-quality issue, hold diagnostic wording, and request appropriate confirmation, repeat testing, or formal laboratory review before using Candidate 2 in the clinical interpretation.",
    },
  },

  reasoningScorecard: [
    {
      category: "Contamination awareness",
      maxScore: 2,
      expectation:
        "Recognises that low-level unexpected alleles across the sample can make an apparent de novo or mosaic candidate unreliable.",
    },
    {
      category: "Low allele fraction reasoning",
      maxScore: 2,
      expectation:
        "Distinguishes true mosaicism from a low-level signal that may be caused by contamination or sample mixture.",
    },
    {
      category: "Technical confidence",
      maxScore: 2,
      expectation:
        "Uses allele fraction, read-level evidence, sample identity checks, background signals, and repeat evidence before trusting the candidate.",
    },
    {
      category: "Candidate prioritisation",
      maxScore: 2,
      expectation:
        "Prioritises the sample-quality issue over a tempting low-level candidate when technical evidence is compromised.",
    },
    {
      category: "Safe communication",
      maxScore: 2,
      expectation:
        "Communicates the result as a technical concern requiring confirmation rather than as a final diagnostic finding.",
    },
  ],

  patient: {
    age: 5,
    sex: "Male",
  },

  referralReason:
    "A 5-year-old boy has been referred for rare disease genome analysis because of global developmental delay, epilepsy, hypotonia, severe speech delay, feeding difficulties, and mild dysmorphic features. Automated review highlighted a low allele fraction variant in a neurodevelopmental gene as possible mosaicism. However, the sample also shows low-level unexpected allele sharing at unrelated sites, raising concern that contamination or sample mixture could explain the apparent candidate.",

  testType:
    "Rare disease trio genome sequencing with low allele fraction, contamination, mosaicism, inheritance, and technical-confidence review",

  familyStructure:
    "The proband and both biological parents have been tested using blood-derived DNA. Both parents are reportedly unaffected. The main low-level candidate is not called as a standard heterozygous variant in either parent, but sample-level contamination metrics raise concern about the proband sample.",

  history: [
    "Global developmental delay noted in infancy",
    "Severe expressive speech delay",
    "Epilepsy beginning at age 2",
    "Generalised hypotonia",
    "Feeding difficulties in early childhood",
    "Mild dysmorphic features noted by clinical genetics",
    "No known previous molecular diagnosis",
    "Both parents are reportedly unaffected",
    "Automated review highlighted a possible low-level mosaic variant",
    "Sample-level review identified unexpected low-level allele sharing across unrelated sites",
  ],

  phenotype: [
    "Global developmental delay",
    "Severe speech delay",
    "Epilepsy",
    "Hypotonia",
    "Feeding difficulties",
    "Mild dysmorphic features",
    "Possible low-level mosaic candidate",
  ],

  familyHistory:
    "Both parents are reportedly unaffected. There is no known family history of developmental delay, epilepsy, hypotonia, severe speech delay, feeding difficulties, dysmorphic features, or a similar childhood presentation. No affected tissue sample is available for mosaic enrichment review.",

  serviceContext: [
    "This guided case focuses on low-level contamination and false mosaic/de novo reasoning.",
    "The key issue is that a low allele fraction finding can look clinically interesting but may be caused by sample contamination or mixture.",
    "The learner should not dismiss every low-level variant automatically.",
    "The learner should also not interpret a low-level candidate in isolation when sample-level quality checks are concerning.",
    "The safest conclusion should prioritise the contamination review before any diagnostic claim is made.",
    "The final handover should explain that the low-level candidate requires confirmation or repeat testing before it can be used clinically.",
  ],

  candidateFindings: [
    {
      id: "candidate-1",
      label: "Candidate 1",
      gene: "BROADCONT1",
      variant: "chr2:77190442 C>T",
      zygosity: "Heterozygous",
      consequence: "missense_variant",
      inheritanceSignal: "Inherited from unaffected mother",
      clinicalFit:
        "BROADCONT1 has a broad neurodevelopmental association in limited reports, but the variant is inherited from the unaffected mother, relatively frequent, and only weakly matches the epilepsy-led phenotype.",
      rawEvidence: `GENE: BROADCONT1
Known disease association: broad neurodevelopmental association in limited reports
Reported inheritance: autosomal dominant proposed
Known mechanism: uncertain
Gene-disease validity in local summary: limited

Variant:
chr2:77190442 C>T
Transcript: NM_570001.2
HGVS: c.899C>T p.(Pro300Leu)
Consequence: missense_variant
Protein domain: outside proposed recurrent functional region

VCF-style fields:
QUAL=682
FILTER=PASS
INFO: DP=46;MQ=60;QD=14.8;SOR=0.84
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
Dysmorphic features: not a core feature

Review question:
Assess whether this inherited, relatively frequent, broad-match variant should drive the case conclusion.`,
      concern:
        "This is technically real but weak. It should be reviewed and deprioritised rather than treated as the main explanation.",
    },
    {
      id: "candidate-2",
      label: "Candidate 2",
      gene: "LOWVAF2",
      variant: "chr7:118902440 G>A",
      zygosity: "Low allele fraction in proband blood",
      consequence: "missense_variant",
      inheritanceSignal:
        "Low-level proband signal; not a clean de novo or standard heterozygous call",
      clinicalFit:
        "LOWVAF2 is associated with a neurodevelopmental epilepsy phenotype, and the variant initially appears interesting because it is rare and low level in the proband. However, sample-level contamination evidence makes the signal unreliable without confirmation.",
      rawEvidence: `GENE: LOWVAF2
Known disease association: autosomal dominant neurodevelopmental epilepsy disorder
Reported inheritance: usually de novo; mosaic cases reported in local teaching summary
Known mechanism: damaging missense variants in a recurrent functional domain
Gene-disease validity in local summary: established / moderate

Variant:
chr7:118902440 G>A
Transcript: NM_570002.5
HGVS: c.1286G>A p.(Arg429His)
Consequence: missense_variant
Protein domain: recurrent disease-associated functional domain

VCF-style fields:
QUAL=212
FILTER=LowVAFReview
INFO: DP=122;MQ=60;QD=3.1;SOR=1.20
FORMAT: GT:AD:DP:GQ

Proband blood: low-level ALT signal:107,15:122:54
Estimated proband VAF: 12.3%

Mother blood: 0/0:88,0:88:99
Father blood: 0/0:91,0:91:99

Read-level notes:
ALT reads seen on both forward and reverse strands
ALT reads distributed across read positions
Mapping quality is high
No strong local low-complexity warning
Second caller: low-level flag only
No affected tissue sample available for enrichment review

Population:
gnomAD AF = not observed
gnomAD allele count = 0

Phenotype fit:
Developmental delay: compatible
Severe speech delay: compatible
Epilepsy: compatible
Hypotonia: compatible
Feeding difficulties: compatible
Dysmorphic features: variable

Contamination context:
Proband sample shows low-level unexpected allele sharing across multiple unrelated sites
Several low-level alternate alleles match alleles present in another sample processed in the same batch
Genome-wide estimate suggests low-level mixture in the proband sample
No independent sample confirms Candidate 2

Review question:
Assess whether this low-level phenotype-compatible signal can be trusted before the contamination concern is resolved.`,
      concern:
        "This is the main trap finding. It is clinically tempting, but the sample-level contamination pattern means it should not be used as a diagnostic candidate without confirmation.",
    },
    {
      id: "candidate-3",
      label: "Candidate 3",
      gene: "EPILEPCONT3",
      variant: "chr10:55218401 G>A",
      zygosity: "Heterozygous",
      consequence: "missense_variant",
      inheritanceSignal: "Absent from both parents on standard genotype calls",
      clinicalFit:
        "EPILEPCONT3 has a possible developmental epilepsy association. The variant is rare and technically plausible, but the gene evidence is less established and the exact variant has limited supporting evidence.",
      rawEvidence: `GENE: EPILEPCONT3
Known disease association: possible autosomal dominant developmental epilepsy disorder
Reported inheritance: usually de novo in limited reports
Known mechanism: damaging missense variants in a functional domain
Gene-disease validity in local summary: moderate / emerging

Variant:
chr10:55218401 G>A
Transcript: NM_570003.4
HGVS: c.1286G>A p.(Arg429His)
Consequence: missense_variant
Protein domain: possible epilepsy-associated functional domain

VCF-style fields:
QUAL=806
FILTER=PASS
INFO: DP=52;MQ=60;QD=15.5;SOR=0.80
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
Dysmorphic features: variable in local summary

Sample-level context:
This standard heterozygous call is technically cleaner than the low-VAF signal.
However, gene-disease evidence and variant-level evidence remain limited.

Review question:
Assess whether this cleaner rare missense finding is strong enough to explain the case despite limited gene and variant evidence.`,
      concern:
        "This is plausible but still uncertain. It is less affected by the low-VAF contamination issue, but the gene and variant evidence remain limited.",
    },
    {
      id: "candidate-4",
      label: "Candidate 4",
      gene: "CNVCONT4 region",
      variant: "chr16:29120000-29205000 duplication",
      zygosity: "Heterozygous duplication",
      consequence: "copy_number_gain",
      inheritanceSignal: "Inherited from unaffected father",
      clinicalFit:
        "The duplication is likely real but inherited from the unaffected father, overlaps population CNVs, and has no established triplosensitivity mechanism for this phenotype.",
      rawEvidence: `CNV REGION: chr16:29120000-29205000
CNV type: duplication
Estimated size: 85 kb
Copy-number state: heterozygous duplication

Gene:
CNVCONT4
Known disease association: possible developmental association in limited reports
Known mechanism: uncertain
Triplosensitivity evidence: not established

Inheritance:
Proband: duplication present
Mother: duplication not detected
Father: duplication present

CNV caller summary:
Caller 1: duplication PASS
Caller 2: duplication supported
Quality score: 104
Number of affected targets/windows: 25

Read-depth evidence:
Expected normalised depth in diploid regions: ~1.00
Proband normalised depth across interval: ~1.47
Father normalised depth across interval: ~1.48
Mother normalised depth across interval: ~1.00
Flanking regions: mostly normal

Breakpoint evidence:
Split reads: absent
Paired-end support: imprecise
Breakpoint not resolved

Population:
Overlapping duplications observed in local population CNV summary
Partial benign overlap reported

Phenotype fit:
Developmental delay: broad possible overlap
Epilepsy: weak overlap
Hypotonia: weak overlap
Feeding difficulties: not a core feature
Dysmorphic features: not a core feature

Review question:
Assess whether this inherited copy-number gain has enough dosage, phenotype, and population support to be prioritised.`,
      concern:
        "This is likely technically real but weak because the gain mechanism is uncertain, population overlap is present, and it is inherited from an unaffected father.",
    },
    {
      id: "candidate-5",
      label: "Candidate 5",
      gene: "Contamination review",
      variant: "Low-level unexpected allele sharing across the proband sample",
      zygosity: "Case-level technical quality concern",
      consequence: "sample_contamination_review",
      inheritanceSignal: "Affects interpretation of low-level findings",
      clinicalFit:
        "This is not a disease candidate. It is the central technical issue because it affects whether Candidate 2 can be trusted as a real low-level mosaic or de novo signal.",
      rawEvidence: `TECHNICAL REVIEW: low-level contamination assessment
Reason for review:
The proband has a low allele fraction candidate in LOWVAF2.
Several unrelated low-level alternate alleles are also present in the proband sample.

Sample identity:
Trio relatedness is broadly consistent
No complete sample swap detected
Sex-chromosome profile is consistent with reported sex
However, low-level mixture metrics are above local review threshold

Genome-wide low-level signal summary:
Multiple unexpected ALT alleles detected at low fraction
Most are between 2 percent and 8 percent VAF
Several match alleles present in another sample processed in the same batch
Pattern is not limited to one genomic region
Pattern is not specific to the LOWVAF2 locus

Candidate 2 comparison:
Candidate 2 VAF: 12.3 percent
Candidate 2 has reasonable local read metrics
No affected tissue enrichment is available
No independent sample confirms the candidate
Candidate 2 sits within a sample that has broader low-level mixture evidence

Contamination interpretation:
The data do not support a complete sample swap
The data do raise concern for low-level contamination or sample mixture
This could create or inflate low-level candidate signals
Low-VAF findings should be held for confirmation before clinical interpretation

Review question:
Assess whether the sample-level contamination evidence should change how Candidate 2 is prioritised and communicated.`,
      concern:
        "This is the central issue. The sample-quality concern should be escalated before any low-level candidate is interpreted diagnostically.",
    },
  ],

  decisionCheckpoints: [
    {
      id: "checkpoint-1",
      title: "Checkpoint 1 — Identify the main case issue",
      context:
        "Candidate 2 is a tempting low-VAF finding in a phenotype-compatible gene, but the proband sample shows low-level unexpected allele sharing across unrelated sites.",
      question:
        "What should drive the first interpretation decision?",
      options: [
        {
          label: "A",
          text: "The contamination review, because sample-level mixture could explain or distort the low-level Candidate 2 signal.",
          isCorrect: true,
          feedback:
            "Correct. The sample-quality issue must be resolved before using the low-level finding diagnostically.",
        },
        {
          label: "B",
          text: "Candidate 2, because phenotype-compatible low-VAF variants should be prioritised whenever local read metrics look reasonable.",
          isCorrect: false,
          feedback:
            "Not quite. Local read metrics help, but sample-level contamination can still make a low-level signal unreliable.",
        },
        {
          label: "C",
          text: "Candidate 4, because CNVs are less affected by low-level SNV contamination than mosaic sequence calls.",
          isCorrect: false,
          feedback:
            "Not quite. Candidate 4 is likely real but weak, and it does not address the main low-VAF interpretation issue.",
        },
      ],
      teachingPoint:
        "Before interpreting a low-level candidate, check whether the sample-level context supports or undermines the signal.",
    },
    {
      id: "checkpoint-2",
      title: "Checkpoint 2 — Distinguish mosaicism from contamination",
      context:
        "Candidate 2 is low level in blood, but there is no affected tissue sample and multiple unrelated low-level alleles suggest sample mixture.",
      question:
        "What is the safest interpretation of Candidate 2?",
      options: [
        {
          label: "A",
          text: "It is confirmed mosaicism because the VAF is below normal heterozygous balance and the gene fits the phenotype.",
          isCorrect: false,
          feedback:
            "Not quite. Low VAF and phenotype fit are not enough when sample-level contamination is concerning.",
        },
        {
          label: "B",
          text: "It is confirmed contamination because every low-level candidate in blood must be caused by sample mixture.",
          isCorrect: false,
          feedback:
            "Not quite. Low-level calls are not automatically contamination, but this case has specific contamination evidence.",
        },
        {
          label: "C",
          text: "It is an uncertain low-level signal that should be held for confirmation because contamination could explain it.",
          isCorrect: true,
          feedback:
            "Correct. The finding may be real, but the current sample context makes diagnostic use unsafe.",
        },
      ],
      teachingPoint:
        "Mosaicism and contamination can both produce low-level signals; the wider sample pattern helps distinguish them.",
    },
    {
      id: "checkpoint-3",
      title: "Checkpoint 3 — Use sample-level evidence",
      context:
        "The proband sample has no full swap, but low-level mixture metrics are above review threshold and several unexpected alleles match another batch sample.",
      question:
        "How should this sample-level evidence be handled?",
      options: [
        {
          label: "A",
          text: "Ignore it because trio relatedness is broadly consistent and there is no full sample swap.",
          isCorrect: false,
          feedback:
            "Not quite. Low-level contamination can exist even when there is no complete sample swap.",
        },
        {
          label: "B",
          text: "Escalate it as a quality concern because it can affect interpretation of low allele fraction findings.",
          isCorrect: true,
          feedback:
            "Correct. Low-level mixture can specifically compromise low-VAF candidate interpretation.",
        },
        {
          label: "C",
          text: "Use it to reject all variants in the case, including standard heterozygous calls with clean read evidence.",
          isCorrect: false,
          feedback:
            "Not quite. The concern is especially important for low-level signals; it does not automatically invalidate every finding.",
        },
      ],
      teachingPoint:
        "Sample-level quality concerns should be applied proportionately to the types of findings they most affect.",
    },
    {
      id: "checkpoint-4",
      title: "Checkpoint 4 — Decide what follow-up is needed",
      context:
        "Candidate 2 could be clinically relevant if real, but the current sample has contamination concerns.",
      question:
        "Which follow-up is most appropriate before diagnostic interpretation?",
      options: [
        {
          label: "A",
          text: "Request appropriate confirmation or repeat testing from an independent sample before using Candidate 2 clinically.",
          isCorrect: true,
          feedback:
            "Correct. Confirmation from a clean or independent sample is the safest next step.",
        },
        {
          label: "B",
          text: "Proceed with interpretation because repeat testing is unnecessary when a second caller flags the variant.",
          isCorrect: false,
          feedback:
            "Not quite. A second low-level flag does not resolve a sample-level contamination concern.",
        },
        {
          label: "C",
          text: "Use the inherited CNV instead because it is technically cleaner and avoids low-VAF uncertainty.",
          isCorrect: false,
          feedback:
            "Not quite. Technical cleanliness does not make Candidate 4 clinically stronger.",
        },
      ],
      teachingPoint:
        "When the limitation is sample quality, the useful follow-up is confirmation or repeat testing rather than over-interpretation.",
    },
    {
      id: "checkpoint-5",
      title: "Checkpoint 5 — Final contamination-aware conclusion",
      context:
        "You need to prepare a safe trainee-level conclusion for formal clinical laboratory review.",
      question:
        "Which conclusion is safest?",
      options: [
        {
          label: "A",
          text: "Report Candidate 2 as diagnostic because it fits the phenotype and has local read support despite low-level sample mixture.",
          isCorrect: false,
          feedback:
            "Not quite. The contamination concern makes diagnostic wording unsafe without confirmation.",
        },
        {
          label: "B",
          text: "Reject Candidate 2 forever because any low-level contamination concern means the variant can never be real.",
          isCorrect: false,
          feedback:
            "Not quite. The finding may still be real, but it cannot be used confidently from this sample alone.",
        },
        {
          label: "C",
          text: "Hold Candidate 2 pending confirmation, escalate the contamination issue, and avoid diagnostic wording from current data.",
          isCorrect: true,
          feedback:
            "Correct. This conclusion is cautious, proportionate, and technically safe.",
        },
      ],
      teachingPoint:
        "Safe handover recognises potentially important low-level findings while preventing contaminated data from driving diagnosis.",
    },
  ],

  finalReflection:
    "A safe trainee-level conclusion would be that Candidate 5, the contamination review, is the key issue controlling interpretation of this case. Candidate 2 is clinically tempting because it is a low allele fraction variant in a phenotype-compatible neurodevelopmental epilepsy gene, with reasonable local read metrics and population absence. However, the proband sample shows a broader pattern of low-level unexpected allele sharing across unrelated sites, including alleles compatible with another batch sample. That pattern raises concern for low-level contamination or sample mixture, which could create or inflate low-VAF candidate signals. There is no affected tissue enrichment or independent sample confirmation for Candidate 2, so it should not be used diagnostically from the current data. Candidate 3 is a cleaner standard heterozygous rare missense finding, but the gene and variant evidence are less established. Candidate 4 is likely a real inherited duplication but has weak dosage and phenotype support. Candidate 1 is inherited, relatively frequent, and poorly specific. The safest next step is to escalate the sample-quality concern, hold diagnostic wording for Candidate 2, and request confirmation or repeat testing from an appropriate independent sample before clinical interpretation.",
};