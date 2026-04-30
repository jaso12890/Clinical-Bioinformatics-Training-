export const case34 = {
  id: "case-34",
  slug: "deep-intronic-splice-candidate-case",
  title: "Case 34: Deep intronic splice candidate",
  level: "Advanced",
  summary:
    "A non-coding variant case focused on recognising when a deep intronic variant has enough splice evidence to matter, and when intronic findings remain too uncertain.",

  visualisationExampleId: null,

  assessmentFocus: [
    "Deep intronic variant interpretation",
    "Splice-prediction evidence",
    "Pseudoexon inclusion",
    "RNA evidence review",
    "Coding versus non-coding candidate comparison",
    "Incomplete recessive evidence",
    "Gene-disease validity",
    "Safe non-coding variant escalation",
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
      correctOrder: ["candidate-4", "candidate-2", "candidate-1", "candidate-3"],
      explanation:
        "Candidate 4 is strongest because it is an apparently de novo deep intronic variant in a phenotype-compatible haploinsufficient gene with strong splice prediction and RNA evidence supporting pseudoexon inclusion. Candidate 2 is a credible canonical splice variant in an established recessive gene, but only one allele is identified, so it is incomplete as an explanation. Candidate 1 is rare and de novo, but the splice evidence and gene-disease validity are weak. Candidate 3 is technically real but weakest because it is inherited from an unaffected parent, relatively frequent, and in a weakly supported broad gene context.",
    },

    escalationDecision: {
      prompt:
        "Choose the safest next action for this deep intronic splice candidate case.",
      options: [
        {
          id: "prioritise-splice-rna-review",
          label: "A",
          decision:
            "Prioritise Candidate 4 for formal splice/RNA review, document the pseudoexon evidence, and escalate through the appropriate clinical laboratory pathway.",
          isBest: true,
          feedback:
            "Best decision. Candidate 4 has the strongest combined evidence: phenotype fit, established gene mechanism, de novo inheritance, rarity, strong splice prediction, RNA support, and technical confidence.",
        },
        {
          id: "report-intronic-by-rarity",
          label: "B",
          decision:
            "Report Candidate 1 because it is rare, de novo, and intronic.",
          isBest: false,
          feedback:
            "Review this choice. Rarity and de novo status are not enough for a deep intronic candidate. Candidate 1 has weak splice prediction and weak gene-disease validity.",
        },
        {
          id: "ignore-noncoding",
          label: "C",
          decision:
            "Ignore Candidate 4 because it is not in a coding exon.",
          isBest: false,
          feedback:
            "Review this choice. Non-coding variants can be clinically important when there is strong functional evidence, especially splice prediction plus RNA evidence showing an aberrant transcript.",
        },
      ],
    },

    writtenSummary: {
      prompt:
        "Write a short trainee-level handover summary explaining why Candidate 4 should be prioritised, why the other candidates are weaker, and what should happen next.",
      checklist: [
        "Identifies Candidate 4 as the strongest current candidate.",
        "States that Candidate 4 is a deep intronic variant in SPLNDD4.",
        "Mentions that SPLNDD4 is phenotype-compatible and has a haploinsufficiency/loss-of-function mechanism.",
        "Mentions apparent de novo inheritance with good parental coverage.",
        "Mentions population absence and strong technical evidence.",
        "Mentions strong splice-prediction evidence, including donor/acceptor gain and predicted pseudoexon inclusion.",
        "Mentions RNA evidence showing aberrant pseudoexon inclusion in the proband.",
        "Explains that Candidate 1 is weaker because splice prediction and gene-disease validity are weak.",
        "Explains that Candidate 2 is incomplete because only one allele is identified in a recessive gene.",
        "Explains that Candidate 3 is weak because it is inherited, relatively frequent, and in a weak gene-disease context.",
        "Avoids overclaiming and recommends formal splice/RNA review and laboratory escalation.",
      ],
      modelAnswer:
        "Candidate 4 is the strongest current candidate for review because it is an apparently de novo deep intronic variant in SPLNDD4, a phenotype-compatible gene where haploinsufficiency or loss-of-function is a reported disease mechanism. The variant is absent from population data, technically well supported, and has strong splice-prediction evidence suggesting pseudoexon inclusion with a predicted premature stop codon. The follow-up RNA evidence is supportive because an aberrant pseudoexon-containing transcript is detected in the proband and absent from local controls. Candidate 1 is weaker because it is also intronic and de novo, but the splice prediction is weak and the gene-disease validity is limited. Candidate 2 is a technically convincing canonical splice variant in a recessive gene, but only one allele is currently identified. Candidate 3 is technically real but clinically weak because it is inherited, relatively frequent, and in a weakly supported gene. The safest next step is to prioritise Candidate 4 for formal splice/RNA review, careful documentation, and escalation through the appropriate clinical laboratory pathway.",
    },
  },

  reasoningScorecard: [
    {
      category: "Deep intronic evidence",
      maxScore: 2,
      expectation:
        "Recognises that deep intronic variants require functional splice evidence and should not be prioritised from rarity alone.",
    },
    {
      category: "Splice and RNA reasoning",
      maxScore: 2,
      expectation:
        "Explains why strong donor/acceptor gain predictions plus RNA evidence of pseudoexon inclusion make Candidate 4 more convincing.",
    },
    {
      category: "Gene mechanism and phenotype fit",
      maxScore: 2,
      expectation:
        "Connects Candidate 4 to a phenotype-compatible haploinsufficient gene and predicted loss-of-function mechanism.",
    },
    {
      category: "Candidate comparison",
      maxScore: 2,
      expectation:
        "Correctly deprioritises Candidate 1 for weak splice/gene evidence, Candidate 2 for incomplete recessive evidence, and Candidate 3 for inheritance/frequency/gene-validity concerns.",
    },
    {
      category: "Safe escalation",
      maxScore: 2,
      expectation:
        "Recommends formal splice/RNA review and laboratory escalation without treating the finding as automatically final.",
    },
  ],

  patient: {
    age: 6,
    sex: "Female",
  },

  referralReason:
    "A 6-year-old girl has been referred for rare disease genome analysis because of developmental delay, severe speech delay, seizures, hypotonia, and feeding difficulties.",

  testType:
    "Rare disease genome sequencing with SNV/indel, CNV, and splice-focused review",

  familyStructure:
    "The proband and both biological parents have been tested. Both parents are reportedly unaffected.",

  history: [
    "Global developmental delay noted in infancy",
    "Severe expressive speech delay",
    "Seizures beginning before age 3",
    "Hypotonia from early childhood",
    "Feeding difficulties requiring specialist input",
    "No known previous molecular diagnosis",
    "No confident coding SNV/indel or CNV diagnosis identified in the first-pass review",
  ],

  phenotype: [
    "Global developmental delay",
    "Severe speech delay",
    "Seizures",
    "Hypotonia",
    "Feeding difficulties",
  ],

  familyHistory:
    "Both parents are reportedly unaffected. No known family history of developmental delay, seizures, hypotonia, feeding difficulties, or a similar neurodevelopmental presentation.",

  serviceContext: [
    "This is a deep intronic splice candidate case.",
    "Most intronic variants are not clinically relevant by default.",
    "A deep intronic variant becomes more plausible when it has strong splice-prediction evidence, affects a disease-relevant gene, fits the inheritance model, is rare, and ideally has RNA or functional evidence.",
    "Your task is to distinguish a convincing deep intronic splice candidate from non-coding noise, incomplete recessive evidence, and technically real but clinically weak alternatives.",
  ],

  candidateFindings: [
    {
      id: "candidate-1",
      label: "Candidate 1",
      gene: "INTRONX1",
      variant: "chr3:44190220 A>G",
      zygosity: "Heterozygous",
      consequence: "deep_intronic_variant",
      inheritanceSignal: "Apparent de novo with good parental coverage",
      clinicalFit:
        "INTRONX1 has a possible neurodevelopmental association, but the gene-disease relationship is limited and the splice evidence for this deep intronic variant is weak.",
      rawEvidence: `GENE: INTRONX1
Known disease association: possible autosomal dominant neurodevelopmental disorder
Reported inheritance: autosomal dominant proposed in limited reports
Known mechanism: uncertain
Gene-disease validity in local summary: limited / emerging

Variant:
chr3:44190220 A>G
Transcript: NM_340001.2
HGVS: c.712+284A>G
Consequence: deep_intronic_variant
Distance from nearest exon: +284 bp from exon 6 donor site

VCF-style fields:
QUAL=802
FILTER=PASS
INFO: DP=48;MQ=60;QD=16.7;SOR=0.76
FORMAT: GT:AD:DP:GQ

Proband: 0/1:24,24:48:99
Mother: 0/0:42,0:42:99
Father: 0/0:41,0:41:99

Read-level notes:
ALT reads seen on both forward and reverse strands
ALT reads distributed across read positions
High mapping quality for ALT-supporting reads
No local low-complexity warning
No pseudogene or segmental duplication warning

Splice prediction summary:
SpliceAI delta score: 0.16
Predicted effect: weak possible donor gain
No strong acceptor gain predicted
No strong donor loss or acceptor loss predicted
No local evidence of pseudoexon inclusion

RNA / functional evidence:
No patient RNA available in current evidence packet
No published functional evidence in local summary
No previous exact variant reported as splice-disrupting

Population:
gnomAD AF = not observed
gnomAD allele count = 0

Constraint:
LOEUF = 0.68
pLI = 0.20

ClinVar-style summary:
No exact matching variant record found in local summary
Gene-disease relationship remains limited
No local evidence that this intronic variant disrupts splicing`,
      concern:
        "This is technically convincing and appears de novo, but the splice evidence and gene-disease validity are weak. It should not be prioritised as a strong candidate just because it is rare and intronic.",
    },
    {
      id: "candidate-2",
      label: "Candidate 2",
      gene: "RECSPL2",
      variant: "chr9:118809331 C>T",
      zygosity: "Heterozygous",
      consequence: "splice_acceptor_variant",
      inheritanceSignal: "Inherited from unaffected father",
      clinicalFit:
        "RECSPL2 is associated with an autosomal recessive neurodevelopmental disorder with seizures and hypotonia. The variant is a canonical splice acceptor, but only one inherited heterozygous allele is identified.",
      rawEvidence: `GENE: RECSPL2
Known disease association: autosomal recessive neurodevelopmental disorder with seizures
Reported inheritance: autosomal recessive
Known mechanism: biallelic loss-of-function

Variant:
chr9:118809331 C>T
Transcript: NM_340002.4
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
Mother: 0/0:41,0:41:99
Father: 0/1:22,21:43:99

Read-level notes:
ALT reads seen on both forward and reverse strands
ALT reads distributed across read positions
No local mapping warning
No soft-clipping concern
Second caller: detected

Second-allele review:
No second coding SNV/indel identified in current candidate list
No confident exon-level deletion/duplication detected
No strong deep intronic splice candidate identified in RECSPL2 in current summary
Deep regulatory variants not fully assessed

Population:
gnomAD AF = 0.000004
gnomAD allele count = 1
No homozygotes observed in local summary

Constraint:
LOEUF = 0.33
pLI = 0.78

ClinVar-style summary:
No exact matching variant record found in local summary
Other biallelic splice and truncating variants in RECSPL2 have been submitted in affected individuals`,
      concern:
        "This is technically convincing as a single inherited splice variant, but it is incomplete as a recessive explanation without a second relevant allele.",
    },
    {
      id: "candidate-3",
      label: "Candidate 3",
      gene: "BROADINT7",
      variant: "chr12:77219044 T>C",
      zygosity: "Heterozygous",
      consequence: "missense_variant",
      inheritanceSignal: "Inherited from unaffected mother",
      clinicalFit:
        "BROADINT7 has a broad neurodevelopmental association in limited reports, but the variant is inherited from an unaffected parent and is relatively frequent for a severe rare disease model.",
      rawEvidence: `GENE: BROADINT7
Known disease association: broad neurodevelopmental association in limited reports
Reported inheritance: autosomal dominant proposed
Known mechanism: uncertain
Gene-disease validity in local summary: limited

Variant:
chr12:77219044 T>C
Transcript: NM_340003.1
HGVS: c.701T>C p.(Leu234Pro)
Consequence: missense_variant
Protein domain: outside known recurrent functional region in local summary

VCF-style fields:
QUAL=650
FILTER=PASS
INFO: DP=46;MQ=60;QD=14.1;SOR=0.82
FORMAT: GT:AD:DP:GQ

Proband: 0/1:23,23:46:99
Mother: 0/1:22,22:44:99
Father: 0/0:40,0:40:99

Read-level notes:
ALT reads seen on both forward and reverse strands in proband and mother
ALT reads distributed across read positions
No local mapping warning
No soft-clipping concern

Population:
gnomAD AF = 0.0014
gnomAD allele count = 370
Homozygotes observed in population summary = 1

Constraint:
LOEUF = 0.84
pLI = 0.06

ClinVar-style summary:
No exact matching pathogenic record found in local summary
Gene-disease relationship remains limited and broad
Several submitted variants in this gene are classified as uncertain significance or likely benign`,
      concern:
        "This is technically real, but it is weak because inheritance, population frequency, gene-disease validity, and mechanism evidence do not support a severe rare neurodevelopmental explanation.",
    },
    {
      id: "candidate-4",
      label: "Candidate 4",
      gene: "SPLNDD4",
      variant: "chr6:66190442 G>A",
      zygosity: "Heterozygous",
      consequence: "deep_intronic_splice_altering_variant",
      inheritanceSignal: "Apparent de novo with good parental coverage",
      clinicalFit:
        "SPLNDD4 is associated with an autosomal dominant neurodevelopmental disorder including developmental delay, severe speech delay, seizures, hypotonia, and feeding difficulties. Loss-of-function is a reported mechanism, and the deep intronic variant has strong splice evidence suggesting pseudoexon inclusion with a premature stop codon.",
      rawEvidence: `GENE: SPLNDD4
Known disease association: autosomal dominant syndromic neurodevelopmental disorder
Reported inheritance: autosomal dominant
Known mechanism: haploinsufficiency / loss-of-function
Gene-disease validity in local summary: established

Variant:
chr6:66190442 G>A
Transcript: NM_340004.5
HGVS: c.1204+487G>A
Consequence: deep_intronic_variant
Distance from nearest exon: +487 bp from exon 9 donor site

Predicted splice effect:
Creates strong cryptic splice donor motif within intron 9
Predicted pseudoexon inclusion: 96 bp pseudoexon
Predicted transcript effect: frameshift after pseudoexon inclusion
Predicted protein effect: premature termination codon
Predicted NMD: likely if pseudoexon transcript is produced

VCF-style fields:
QUAL=940
FILTER=PASS
INFO: DP=54;MQ=60;QD=17.4;SOR=0.70
FORMAT: GT:AD:DP:GQ

Proband: 0/1:27,27:54:99
Mother: 0/0:45,0:45:99
Father: 0/0:43,0:43:99

Read-level notes:
ALT reads seen on both forward and reverse strands
ALT reads distributed across read positions
High mapping quality for ALT-supporting reads
No local low-complexity warning
No pseudogene or segmental duplication warning
No concerning soft-clipping around the variant
Second caller: detected

Splice prediction summary:
SpliceAI donor gain delta score: 0.91
SpliceAI acceptor gain delta score: 0.78
Predicted pseudoexon gain: strong
Predicted effect consistent across local splice-prediction tools
Conservation around created splice motif: high in local summary

RNA / functional evidence:
Patient RNA summary available from follow-up review
Aberrant transcript detected: pseudoexon inclusion between exons 9 and 10
Aberrant junction reads: present in proband
Aberrant junction reads: absent in control samples in local summary
Predicted premature termination codon introduced by pseudoexon
RNA evidence quality: supportive, but still requires formal laboratory review

Population:
gnomAD AF = not observed
gnomAD allele count = 0

Constraint:
LOEUF = 0.16
pLI = 0.99

ClinVar-style / literature-style summary:
No exact matching variant record found in local summary
Other loss-of-function variants in SPLNDD4 have been submitted as pathogenic/likely pathogenic in affected individuals
Local disease summary supports haploinsufficiency
Previous deep intronic pseudoexon-activating variants in the same gene mechanism have been reported in affected individuals`,
      concern:
        "This is the strongest current candidate because it is rare, apparently de novo, technically robust, in a phenotype-compatible haploinsufficient gene, and has strong splice-prediction plus RNA evidence supporting a loss-of-function mechanism. It still needs formal review and appropriate sign-off.",
    },
  ],

  decisionCheckpoints: [
    {
      id: "checkpoint-1",
      title: "Checkpoint 1 — Deep intronic does not automatically mean causal",
      context:
        "Candidate 1 is a rare apparent de novo deep intronic variant, but splice prediction is weak and the gene-disease relationship is limited.",
      question: "What is the safest interpretation of Candidate 1?",
      options: [
        {
          label: "A",
          text: "It should be prioritised because any rare de novo intronic variant is likely causal.",
          isCorrect: false,
          feedback:
            "Not quite. Most intronic variants are not interpretable as causal without stronger splice, gene, and phenotype evidence.",
        },
        {
          label: "B",
          text: "It is technically real and may be noted, but weak splice evidence and weak gene-disease validity make it insufficient as a strong candidate.",
          isCorrect: true,
          feedback:
            "Correct. Candidate 1 should not be over-prioritised from rarity and de novo status alone.",
        },
        {
          label: "C",
          text: "It is definitely benign because intronic variants can never affect disease.",
          isCorrect: false,
          feedback:
            "Not quite. Intronic variants can matter when they disrupt splicing or regulation, but evidence is needed.",
        },
      ],
      teachingPoint:
        "Deep intronic variants need evidence. Rarity and de novo status are not enough by themselves.",
    },
    {
      id: "checkpoint-2",
      title: "Checkpoint 2 — Strong splice consequence but incomplete recessive model",
      context:
        "Candidate 2 is a canonical splice acceptor variant in a recessive gene, inherited from the father. No second allele is currently identified.",
      question: "Why is Candidate 2 not the strongest explanation?",
      options: [
        {
          label: "A",
          text: "Because one heterozygous splice variant does not provide a complete biallelic explanation for a recessive disorder.",
          isCorrect: true,
          feedback:
            "Correct. The variant may be real and relevant at carrier level, but it does not currently explain the case alone.",
        },
        {
          label: "B",
          text: "Because splice acceptor variants can never be pathogenic.",
          isCorrect: false,
          feedback:
            "Not quite. Canonical splice acceptor variants can be very important when the inheritance model fits.",
        },
        {
          label: "C",
          text: "Because inherited variants are always sequencing artefacts.",
          isCorrect: false,
          feedback:
            "Not quite. Candidate 2 appears technically real. The issue is incomplete recessive evidence.",
        },
      ],
      teachingPoint:
        "A strong variant consequence still needs the correct inheritance model.",
    },
    {
      id: "checkpoint-3",
      title: "Checkpoint 3 — Recognise strong deep intronic splice evidence",
      context:
        "Candidate 4 is a deep intronic variant in SPLNDD4. It has strong donor/acceptor gain predictions, predicted pseudoexon inclusion, patient RNA support, apparent de novo inheritance, and phenotype fit.",
      question: "Why is Candidate 4 the strongest current candidate?",
      options: [
        {
          label: "A",
          text: "Because all deep intronic variants should be prioritised over coding variants.",
          isCorrect: false,
          feedback:
            "Not quite. Deep intronic variants are only strong when the evidence supports a functional effect.",
        },
        {
          label: "B",
          text: "Because splice prediction, RNA evidence, inheritance, gene mechanism, population absence, technical confidence, and phenotype fit all align.",
          isCorrect: true,
          feedback:
            "Correct. Candidate 4 has strong evidence across multiple independent areas.",
        },
        {
          label: "C",
          text: "Because RNA evidence alone is enough to skip clinical review.",
          isCorrect: false,
          feedback:
            "Not quite. RNA evidence can be very supportive, but the finding still needs formal review and sign-off.",
        },
      ],
      teachingPoint:
        "A deep intronic candidate becomes convincing when molecular evidence links it to a disease-relevant mechanism.",
    },
    {
      id: "checkpoint-4",
      title: "Checkpoint 4 — Technically real but clinically weak",
      context:
        "Candidate 3 is technically clean but inherited from an unaffected mother, relatively frequent, and in a weakly supported gene.",
      question: "What does Candidate 3 illustrate?",
      options: [
        {
          label: "A",
          text: "A technically real variant can still be clinically weak when inheritance, frequency, gene validity, and mechanism do not fit.",
          isCorrect: true,
          feedback:
            "Correct. Candidate 3 is likely real but not a strong explanation.",
        },
        {
          label: "B",
          text: "Technically clean variants should always be prioritised above non-coding variants.",
          isCorrect: false,
          feedback:
            "Not quite. Candidate 4 is non-coding but has much stronger functional and clinical evidence.",
        },
        {
          label: "C",
          text: "Population frequency is irrelevant if a gene has any neurodevelopmental association.",
          isCorrect: false,
          feedback:
            "Not quite. Frequency still matters, especially for severe rare disease.",
        },
      ],
      teachingPoint:
        "Coding status does not automatically determine priority. Evidence quality does.",
    },
    {
      id: "checkpoint-5",
      title: "Checkpoint 5 — Safe service-style next step",
      context:
        "Candidate 4 is the strongest current candidate. Candidate 1 is intronic but weakly supported. Candidate 2 is incomplete recessive evidence. Candidate 3 is technically real but clinically weak.",
      question: "What is the safest next step?",
      options: [
        {
          label: "A",
          text: "Prioritise Candidate 4 for review, document the splice/RNA evidence, and explain why the other candidates are weaker.",
          isCorrect: true,
          feedback:
            "Correct. This gives a safe, reviewable rationale while keeping formal review boundaries clear.",
        },
        {
          label: "B",
          text: "Ignore Candidate 4 because it is not in a coding exon.",
          isCorrect: false,
          feedback:
            "Not quite. Non-coding variants can be clinically important when they have strong functional evidence.",
        },
        {
          label: "C",
          text: "Report Candidate 1 because it is also de novo and intronic.",
          isCorrect: false,
          feedback:
            "Not quite. Candidate 1 lacks strong splice and gene-disease evidence.",
        },
      ],
      teachingPoint:
        "Safe non-coding variant interpretation means explaining the functional evidence, not simply labelling the variant as intronic.",
    },
  ],

  finalReflection:
    "A safe trainee-level conclusion would be that Candidate 4 is the strongest current candidate for further review because it is an apparently de novo deep intronic variant in SPLNDD4, a phenotype-compatible haploinsufficient gene, and it has strong splice-prediction evidence plus RNA evidence supporting pseudoexon inclusion and predicted loss-of-function. Candidate 1 is also a rare apparent de novo intronic variant, but splice prediction and gene-disease validity are weak. Candidate 2 is a technically convincing canonical splice variant in a recessive gene, but only one allele is identified. Candidate 3 is technically real but clinically weak because of inheritance, population frequency, and limited gene-disease evidence. The safest next step is to prioritise Candidate 4 for formal splice/RNA review, documentation, and escalation through the appropriate clinical laboratory pathway.",
};