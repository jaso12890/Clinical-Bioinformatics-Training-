export const case24 = {
  id: "case-24",
  slug: "gain-of-function-hotspot-case",
  title: "Case 24: Gain-of-function hotspot case",
  level: "Intermediate",
  summary:
    "An interpretation-aware rare disease case focused on recognising when a specific gain-of-function hotspot missense variant may be stronger than a truncating variant.",

  visualisationExampleId: null,

  assessmentFocus: [
    "Gain-of-function hotspot reasoning",
    "Missense mechanism interpretation",
    "Truncating variant mechanism mismatch",
    "Domain and hotspot evidence",
    "Technical confidence review",
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
        "Rank the findings from strongest to weakest based on phenotype fit, inheritance, variant consequence, gain-of-function mechanism, hotspot/domain evidence, population evidence, technical confidence, and whether each finding should drive the current case conclusion.",
      correctOrder: [
        "candidate-2",
        "candidate-1",
        "candidate-5",
        "candidate-3",
        "candidate-4",
      ],
      explanation:
        "Candidate 2 is strongest because it is an apparent de novo activating missense variant at a recurrent hotspot in CHANX1, and the phenotype, gain-of-function mechanism, population absence, and technical evidence all align. Candidate 1 is technically convincing and apparently de novo in the same gene, but it is a stop-gained variant in a gene where the known disease mechanism is gain-of-function missense rather than loss-of-function. Candidate 5 is technically plausible and apparently de novo, but the splice-region evidence is non-canonical, the prediction is weak, and gene-disease validity is limited. Candidate 3 is technically clean but weaker because it is inherited from an unaffected mother, present in population data, and outside the recognised hotspot region. Candidate 4 is lowest priority because it is technically fragile, with low allele support, strand/read-position concerns, soft-clipping, and no second-caller support.",
    },

    escalationDecision: {
      prompt:
        "Choose the safest next action for this candidate set.",
      options: [
        {
          id: "prioritise-candidate-1",
          label: "A",
          decision:
            "Prioritise Candidate 1 because a technically strong de novo stop-gained variant should outrank missense findings.",
          isBest: false,
          feedback:
            "Review this choice. Candidate 1 is technically convincing, but CHANX1 disease is described here as a gain-of-function missense hotspot disorder rather than a loss-of-function disorder.",
        },
        {
          id: "prioritise-candidate-2",
          label: "B",
          decision:
            "Prioritise Candidate 2 for formal review because the hotspot missense change, phenotype, inheritance, mechanism, rarity, and technical evidence align.",
          isBest: true,
          feedback:
            "Best decision. Candidate 2 is the strongest finding because it matches the known gain-of-function hotspot mechanism and has strong clinical and technical support.",
        },
        {
          id: "prioritise-candidate-4",
          label: "C",
          decision:
            "Prioritise Candidate 4 because a possible de novo missense variant in a movement-disorder gene should be accepted despite weak read evidence.",
          isBest: false,
          feedback:
            "Review this choice. Candidate 4 is interesting, but poor allele balance, strand/read-position concerns, soft-clipping, and lack of second-caller support make it technically fragile.",
        },
      ],
    },

    writtenSummary: {
      prompt:
        "Write a short trainee-level handover summary explaining the strongest candidate, why gain-of-function hotspot reasoning matters, why the other findings are weaker, and the safest next step.",
      checklist: [
        "Names Candidate 2 as the strongest current finding.",
        "Explains that Candidate 2 is an apparent de novo activating missense variant at a recurrent CHANX1 hotspot.",
        "Links Candidate 2 to the early-onset seizures, developmental delay, episodic abnormal movements, hypotonia, and feeding difficulty phenotype.",
        "Mentions that CHANX1 disease is described as a gain-of-function missense mechanism.",
        "Uses technical support such as balanced allele evidence, high mapping quality, good parental coverage, and second-caller detection.",
        "Explains why Candidate 1 is weaker despite being de novo and stop-gained.",
        "States that Candidate 1 does not match the known gain-of-function missense mechanism well.",
        "Explains why Candidate 3 is weakened by inheritance, population frequency, and location outside the hotspot.",
        "Explains why Candidate 4 is technically fragile.",
        "Explains why Candidate 5 is weaker because splice-region and gene-disease evidence are limited.",
        "Avoids ranking candidates by consequence severity alone.",
        "Avoids calling Candidate 2 a final diagnosis without formal review and sign-off.",
      ],
      modelAnswer:
        "Candidate 2 is the strongest current finding for formal review. It is an apparent de novo activating missense variant at a recurrent CHANX1 hotspot in the channel activation domain, and CHANX1 disease in this case is described as a gain-of-function missense disorder. The phenotype fits well, including early-onset seizures, developmental delay, episodic abnormal movements, hypotonia, and feeding difficulties. The variant is absent from population data and has strong technical support, including balanced allele evidence, high mapping quality, good parental coverage, and second-caller detection. Candidate 1 is technically convincing and also de novo in CHANX1, but it is a stop-gained variant, and loss-of-function is not the established mechanism in the local summary. Candidate 3 is technically real but weakened by inheritance from an unaffected mother, population frequency, and location outside the main hotspot region. Candidate 4 is mechanistically interesting but technically fragile because of low allele support, strand/read-position concerns, soft-clipping, and no second-caller support. Candidate 5 is technically plausible but has only weak non-canonical splice evidence and limited gene-disease support. The safest next step is to prioritise Candidate 2 for formal review while documenting why the severe-looking truncating variant and other alternatives are weaker.",
    },
  },

  reasoningScorecard: [
    {
      category: "Gain-of-function mechanism reasoning",
      maxScore: 2,
      expectation:
        "Recognises that recurrent activating missense variants can be the key disease mechanism in some genes and may outrank truncating variants.",
    },
    {
      category: "Hotspot and domain interpretation",
      maxScore: 2,
      expectation:
        "Uses hotspot position, domain relevance, same-residue or nearby variant evidence, and phenotype fit to support candidate prioritisation.",
    },
    {
      category: "Mechanism mismatch",
      maxScore: 2,
      expectation:
        "Avoids treating a stop-gained variant as strongest when loss-of-function is not the established disease mechanism.",
    },
    {
      category: "Technical confidence",
      maxScore: 2,
      expectation:
        "Does not over-prioritise a mechanistically interesting candidate when read-level evidence, allele balance, strand support, and caller support are weak.",
    },
    {
      category: "Safe escalation",
      maxScore: 2,
      expectation:
        "Escalates the strongest mechanism-compatible hotspot candidate while documenting why high-impact, inherited, technically fragile, or weak splice alternatives are lower priority.",
    },
  ],

  patient: {
    age: 3,
    sex: "Female",
  },

  referralReason:
    "A 3-year-old girl has been referred for rare disease genome analysis because of early-onset seizures, developmental delay, episodic abnormal movements, hypotonia, and feeding difficulties.",

  testType: "Rare disease trio genome sequencing",

  familyStructure:
    "The proband and both biological parents have been tested. Both parents are reportedly unaffected.",

  history: [
    "Seizures beginning before age 1",
    "Global developmental delay",
    "Episodes of abnormal movements triggered by illness",
    "Hypotonia noted in infancy",
    "Feeding difficulties requiring specialist input",
    "No known previous molecular diagnosis",
  ],

  phenotype: [
    "Early-onset seizures",
    "Global developmental delay",
    "Episodic abnormal movements",
    "Hypotonia",
    "Feeding difficulties",
  ],

  familyHistory:
    "Both parents are reportedly unaffected. No known family history of early-onset epilepsy, abnormal movements, developmental delay, or a similar neurological presentation.",

  serviceContext: [
    "The analysis is being performed in a rare disease service context.",
    "The key issue is gain-of-function hotspot reasoning.",
    "In some genes, recurrent activating missense variants are the main disease mechanism.",
    "A truncating variant in the same gene may look severe, but may not fit the known mechanism.",
    "Your task is to prioritise the candidate where phenotype, inheritance, technical confidence, variant type, domain position, population evidence, and disease mechanism align.",
  ],

  candidateFindings: [
    {
      id: "candidate-1",
      label: "Candidate 1",
      gene: "CHANX1",
      variant: "chr12:44190220 C>T",
      zygosity: "Heterozygous",
      consequence: "stop_gained",
      inheritanceSignal: "Apparent de novo",
      clinicalFit:
        "CHANX1 is associated with an autosomal dominant early-onset epilepsy-movement disorder. However, the known mechanism is recurrent gain-of-function missense variation in a channel activation domain, not simple loss-of-function.",
      rawEvidence: `GENE: CHANX1
Known disease association: autosomal dominant early-onset epilepsy-movement disorder
Reported inheritance: autosomal dominant
Known mechanism: gain-of-function missense variants in channel activation domain
Loss-of-function evidence: not established in local summary

Variant:
chr12:44190220 C>T
Transcript: NM_240001.3
HGVS: c.901C>T p.(Arg301*)
Consequence: stop_gained
Predicted effect: premature termination codon

Transcript / protein context:
Variant is upstream of the recurrent gain-of-function hotspot domain
Predicted NMD: likely
Interpretation note: likely loss-of-function, but local disease mechanism is gain-of-function missense

VCF-style fields:
QUAL=820
FILTER=PASS
INFO: DP=48;MQ=60;QD=17.1;SOR=0.79
FORMAT: GT:AD:DP:GQ

Proband: 0/1:25,23:48:99
Mother: 0/0:41,0:41:99
Father: 0/0:39,0:39:99

Read-level notes:
ALT reads seen on both forward and reverse strands
ALT reads distributed across read positions
No local mapping warning
No low-complexity flag
No concerning soft-clipping around the variant
Second caller: detected

Population:
gnomAD AF = not observed
gnomAD allele count = 0

Constraint:
LOEUF = 0.88
pLI = 0.04
Missense/domain note: local summary highlights recurrent pathogenic missense variants in activation domain

ClinVar-style summary:
No exact matching variant record found in local summary
Submitted pathogenic variants in CHANX1 are mainly recurrent missense variants in the activation domain
Truncating variants are not clearly established as the disease mechanism in local summary`,
      concern:
        "This is technically convincing and appears de novo, but it is mechanistically weaker because the known disease mechanism is gain-of-function missense variation rather than haploinsufficiency.",
    },
    {
      id: "candidate-2",
      label: "Candidate 2",
      gene: "CHANX1",
      variant: "chr12:44194418 G>A",
      zygosity: "Heterozygous",
      consequence: "activating_missense_variant",
      inheritanceSignal: "Apparent de novo with good parental coverage",
      clinicalFit:
        "CHANX1 is associated with early-onset epilepsy, developmental delay, episodic abnormal movements, hypotonia, and feeding difficulties. The variant lies at a recurrent activating hotspot in the channel activation domain.",
      rawEvidence: `GENE: CHANX1
Known disease association: autosomal dominant early-onset epilepsy-movement disorder
Reported inheritance: autosomal dominant
Known mechanism: gain-of-function missense variants in channel activation domain

Variant:
chr12:44194418 G>A
Transcript: NM_240001.3
HGVS: c.1258G>A p.(Gly420Arg)
Consequence: activating_missense_variant
Protein domain: recurrent channel activation hotspot domain
Mechanism note: variant lies at a residue where activating missense changes have been reported in affected individuals

VCF-style fields:
QUAL=958
FILTER=PASS
INFO: DP=56;MQ=60;QD=17.1;SOR=0.72
FORMAT: GT:AD:DP:GQ

Proband: 0/1:28,28:56:99
Mother: 0/0:46,0:46:99
Father: 0/0:44,0:44:99

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
LOEUF = 0.88
pLI = 0.04
Missense/domain note: strong local missense constraint within the activation domain

ClinVar-style summary:
No exact matching variant record found in local summary
Nearby and same-residue activating hotspot variants in CHANX1 have been submitted as pathogenic/likely pathogenic in affected individuals
Disease mechanism in local summary is gain-of-function missense change`,
      concern:
        "This is the strongest current candidate because phenotype, de novo inheritance, hotspot position, gain-of-function mechanism, population absence, and technical evidence all align.",
    },
    {
      id: "candidate-3",
      label: "Candidate 3",
      gene: "EPILEP9",
      variant: "chr5:119004221 T>C",
      zygosity: "Heterozygous",
      consequence: "missense_variant",
      inheritanceSignal: "Inherited from unaffected mother",
      clinicalFit:
        "EPILEP9 has a broad epilepsy association, but the variant is inherited from an unaffected parent, lies outside the known hotspot region, and is present in population data.",
      rawEvidence: `GENE: EPILEP9
Known disease association: autosomal dominant epilepsy spectrum
Reported inheritance: autosomal dominant
Known mechanism: recurrent missense variants in specific functional regions

Variant:
chr5:119004221 T>C
Transcript: NM_240002.2
HGVS: c.1079T>C p.(Leu360Pro)
Consequence: missense_variant
Protein domain: outside recognised recurrent hotspot region in local summary

VCF-style fields:
QUAL=690
FILTER=PASS
INFO: DP=46;MQ=60;QD=15.0;SOR=0.84
FORMAT: GT:AD:DP:GQ

Proband: 0/1:23,23:46:99
Mother: 0/1:21,22:43:99
Father: 0/0:40,0:40:99

Read-level notes:
ALT reads seen on both forward and reverse strands
ALT reads distributed across read positions
No local mapping warning
No soft-clipping concern

Population:
gnomAD AF = 0.0009
gnomAD allele count = 240
Homozygotes observed in population summary = 0

Constraint:
LOEUF = 0.66
pLI = 0.22

ClinVar-style summary:
No exact matching pathogenic record found in local summary
Gene-disease relationship is broad and variant is outside the main recurrent region`,
      concern:
        "This is technically convincing but lower priority because inheritance, population frequency, domain position, and phenotype specificity are weaker.",
    },
    {
      id: "candidate-4",
      label: "Candidate 4",
      gene: "MOVEX3",
      variant: "chr8:77290011 A>G",
      zygosity: "Heterozygous",
      consequence: "missense_variant",
      inheritanceSignal: "Apparent de novo, but technically fragile",
      clinicalFit:
        "MOVEX3 is associated with a movement disorder and could partly fit the abnormal movements. However, the technical evidence is weak and the phenotype does not explain the full presentation as well as Candidate 2.",
      rawEvidence: `GENE: MOVEX3
Known disease association: autosomal dominant movement disorder
Reported inheritance: autosomal dominant
Known mechanism: de novo missense variants in a motor regulatory domain

Variant:
chr8:77290011 A>G
Transcript: NM_240003.1
HGVS: c.944A>G p.(Tyr315Cys)
Consequence: missense_variant
Protein domain: near motor regulatory domain but not known recurrent hotspot

VCF-style fields:
QUAL=52
FILTER=PASS
INFO: DP=31;MQ=43;QD=1.7;SOR=5.6
FORMAT: GT:AD:DP:GQ

Proband: 0/1:25,6:31:47
Mother: 0/0:37,0:37:99
Father: 0/0:35,0:35:99

Read-level notes:
ALT reads mostly on one strand
5 of 6 ALT reads occur close to read ends
Soft-clipping present in several supporting reads
Local repetitive sequence warning present
Second caller: not detected
Manual read-level review recommended before prioritisation

Population:
gnomAD AF = not observed
gnomAD allele count = 0

Constraint:
LOEUF = 0.59
pLI = 0.33

ClinVar-style summary:
No exact matching variant record found in local summary
Some nearby missense variants have been submitted in movement-disorder phenotypes, but evidence is limited`,
      concern:
        "This is interesting but technically fragile. It should not outrank a technically strong, mechanism-matched hotspot candidate.",
    },
    {
      id: "candidate-5",
      label: "Candidate 5",
      gene: "RECEP7",
      variant: "chr15:118809331 C>T",
      zygosity: "Heterozygous",
      consequence: "splice_region_variant",
      inheritanceSignal: "Apparent de novo",
      clinicalFit:
        "RECEP7 has a possible neurodevelopmental association, but the variant is non-canonical splice-region with weak splice prediction and limited gene-disease evidence.",
      rawEvidence: `GENE: RECEP7
Known disease association: possible autosomal dominant neurodevelopmental disorder
Reported inheritance: autosomal dominant proposed in limited reports
Known mechanism: uncertain; splice mechanism not established

Variant:
chr15:118809331 C>T
Transcript: NM_240004.2
HGVS: c.701+6C>T
Consequence: splice_region_variant
Splice position: +6 donor region, outside canonical +1/+2 donor site
Splice prediction summary: weak predicted splice effect in local summary

VCF-style fields:
QUAL=602
FILTER=PASS
INFO: DP=44;MQ=60;QD=13.7;SOR=0.90
FORMAT: GT:AD:DP:GQ

Proband: 0/1:22,22:44:99
Mother: 0/0:39,0:39:99
Father: 0/0:41,0:41:99

Read-level notes:
ALT reads seen on both forward and reverse strands
ALT reads distributed across read positions
No local mapping warning
No soft-clipping concern

Population:
gnomAD AF = 0.00002
gnomAD allele count = 5
No homozygotes observed in local summary

Constraint:
LOEUF = 0.72
pLI = 0.16

ClinVar-style summary:
No exact matching pathogenic record found in local summary
Gene-disease relationship remains limited in available summary`,
      concern:
        "This is technically plausible and appears de novo, but the splice evidence, gene-disease validity, and mechanism support are weaker than Candidate 2.",
    },
  ],

  decisionCheckpoints: [
    {
      id: "checkpoint-1",
      title: "Checkpoint 1 — Hotspot mechanism versus truncating annotation",
      context:
        "Candidate 1 is a de novo stop-gained variant in CHANX1, but CHANX1 disease is mainly associated with gain-of-function missense variants in the channel activation domain.",
      question:
        "What is the safest interpretation of Candidate 1?",
      options: [
        {
          label: "A",
          text: "Prioritise it because stop-gained variants are always the strongest consequence.",
          isCorrect: false,
          feedback:
            "Not quite. A truncating variant is not automatically strongest when the known disease mechanism is gain-of-function missense.",
        },
        {
          label: "B",
          text: "Treat it as technically convincing and interesting, but mechanistically weaker because it does not match the known gain-of-function hotspot mechanism.",
          isCorrect: true,
          feedback:
            "Correct. Candidate 1 should not outrank a mechanism-matched hotspot candidate simply because it looks high-impact.",
        },
        {
          label: "C",
          text: "Dismiss it as definitely false because truncating variants can never cause rare disease.",
          isCorrect: false,
          feedback:
            "Not quite. Truncating variants can cause disease in the right gene and mechanism. The issue is mechanism mismatch here.",
        },
      ],
      teachingPoint:
        "A severe-looking annotation should not override the known disease mechanism.",
    },
    {
      id: "checkpoint-2",
      title: "Checkpoint 2 — Identify the strongest gain-of-function candidate",
      context:
        "Candidate 2 is a de novo missense variant at a recurrent activating hotspot in CHANX1. The phenotype fits the known CHANX1 epilepsy-movement disorder and the raw technical evidence is strong.",
      question:
        "Why is Candidate 2 the strongest candidate?",
      options: [
        {
          label: "A",
          text: "Because missense variants should always be ranked above truncating variants.",
          isCorrect: false,
          feedback:
            "Not quite. Missense is stronger here because it matches the known gain-of-function hotspot mechanism.",
        },
        {
          label: "B",
          text: "Because phenotype, de novo inheritance, hotspot position, gain-of-function mechanism, population absence, and technical confidence align best.",
          isCorrect: true,
          feedback:
            "Correct. Candidate 2 has the strongest convergence across the relevant evidence types.",
        },
        {
          label: "C",
          text: "Because low pLI proves every missense variant in this gene is pathogenic.",
          isCorrect: false,
          feedback:
            "Not quite. pLI is mainly a loss-of-function constraint metric and does not classify a specific missense variant.",
        },
      ],
      teachingPoint:
        "For gain-of-function disorders, a recurrent hotspot missense variant can be stronger than a truncating variant.",
    },
    {
      id: "checkpoint-3",
      title: "Checkpoint 3 — Technically real but clinically weaker",
      context:
        "Candidate 3 is technically clean but inherited from an unaffected mother, present in population data, and outside the recognised hotspot region.",
      question:
        "What does Candidate 3 illustrate?",
      options: [
        {
          label: "A",
          text: "A technically real variant can still be lower priority if inheritance, population frequency, domain location, and phenotype specificity are weak.",
          isCorrect: true,
          feedback:
            "Correct. Candidate 3 is likely real, but not a strong explanation for this case.",
        },
        {
          label: "B",
          text: "Inherited variants should usually be treated as sequencing artefacts.",
          isCorrect: false,
          feedback:
            "Not quite. Inherited variants can be real. The issue is whether they fit the disease model.",
        },
        {
          label: "C",
          text: "Any epilepsy gene variant should be prioritised equally if it passes technical filters.",
          isCorrect: false,
          feedback:
            "Not quite. Gene, variant, mechanism, inheritance, population, and phenotype evidence all matter.",
        },
      ],
      teachingPoint:
        "Technical confidence does not replace clinical and mechanism-based prioritisation.",
    },
    {
      id: "checkpoint-4",
      title: "Checkpoint 4 — Mechanism fit does not override technical weakness",
      context:
        "Candidate 4 is a possible de novo missense variant in a movement-disorder gene, but it has low allele support, strand/read-position concerns, soft-clipping, and no second-caller support.",
      question:
        "What is the safest interpretation of Candidate 4?",
      options: [
        {
          label: "A",
          text: "Prioritise it because any de novo missense variant in a movement-disorder gene is enough.",
          isCorrect: false,
          feedback:
            "Not quite. The raw technical evidence is too weak for confident prioritisation.",
        },
        {
          label: "B",
          text: "Treat it as interesting but technically fragile, so it should not outrank the stronger hotspot candidate without read-level review.",
          isCorrect: true,
          feedback:
            "Correct. Candidate 4 may be worth noting, but it is technically weaker than Candidate 2.",
        },
        {
          label: "C",
          text: "Dismiss it as benign because low allele balance always means artefact.",
          isCorrect: false,
          feedback:
            "Not quite. Low allele balance is a warning sign, not an automatic classification.",
        },
      ],
      teachingPoint:
        "A candidate needs both mechanism fit and technical confidence.",
    },
    {
      id: "checkpoint-5",
      title: "Checkpoint 5 — Safe service-style next step",
      context:
        "Candidate 2 is the strongest current candidate. Candidate 1 is technically strong but mechanism-mismatched. Candidate 3 is inherited/population-weakened. Candidate 4 is technically fragile. Candidate 5 is non-canonical splice with limited evidence.",
      question:
        "What is the safest next step?",
      options: [
        {
          label: "A",
          text: "Prioritise Candidate 1 because truncating variants should always come before missense variants.",
          isCorrect: false,
          feedback:
            "Not quite. Candidate 1 does not match the known gain-of-function mechanism.",
        },
        {
          label: "B",
          text: "Prioritise Candidate 2 for review, document the mechanism mismatch for Candidate 1, and explain the inheritance, technical, and splice-evidence limitations of the other candidates.",
          isCorrect: true,
          feedback:
            "Correct. This gives a safe and reviewable rationale.",
        },
        {
          label: "C",
          text: "Ignore mechanism and rank candidates only by whether they are absent from population data.",
          isCorrect: false,
          feedback:
            "Not quite. Population absence helps, but mechanism and technical evidence are essential.",
        },
      ],
      teachingPoint:
        "Safe gain-of-function reasoning means explaining why the hotspot missense candidate is stronger than apparently high-impact alternatives.",
    },
  ],

  finalReflection:
    "A safe trainee-level conclusion would be that Candidate 2 is the strongest current candidate for further review because it is an apparent de novo missense variant at a recurrent activating hotspot in CHANX1, a gene where gain-of-function missense variation is the known disease mechanism, and the patient’s phenotype fits the reported epilepsy-movement disorder. Candidate 1 is technically convincing and appears de novo, but it is a stop-gained variant in a gene where loss-of-function is not the established mechanism. Candidate 3 is technically real but weakened by inheritance, population frequency, and domain location. Candidate 4 is mechanistically interesting but technically fragile. Candidate 5 is technically plausible but has weak non-canonical splice and gene-disease evidence. The safest next step is to prioritise Candidate 2, document why the severe-looking truncating variant is mechanistically weaker, and escalate through the appropriate review pathway.",
};