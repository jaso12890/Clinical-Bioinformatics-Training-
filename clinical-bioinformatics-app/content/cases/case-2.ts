export const case2 = {
  id: "case-2",
  slug: "technical-artefact-review",
  title: "Case 2: Technical artefact review",
  level: "Beginner",
  summary:
    "A technical confidence case focused on deciding whether an apparently interesting variant is reliable enough to prioritise.",

  visualisationExampleId: null,

  assessmentFocus: [
    "Technical artefact recognition",
    "Raw variant evidence review",
    "Phenotype and gene fit",
    "Inheritance and mechanism matching",
    "Candidate prioritisation",
    "Safe escalation and documentation",
  ],

  guidedTutorMode: {
    type: "static-rule-based",
    description:
      "Uses built-in hints, checkpoint feedback, model answers, and self-check criteria to support safe case reasoning.",
  },

  phase5Assessment: {
    candidateRanking: {
      prompt:
        "Rank the findings from strongest to weakest based on technical reliability, phenotype fit, inheritance pattern, gene mechanism, variant consequence, and whether each finding should drive the case conclusion.",
      correctOrder: ["candidate-3", "candidate-2", "candidate-1"],
      explanation:
        "Candidate 3 is strongest because the phenotype, apparent de novo inheritance, frameshift consequence, loss-of-function mechanism, population absence, and clean read-level evidence all align. Candidate 2 is technically convincing as a real heterozygous call, but it is weaker clinically because it is a single inherited variant in a gene where the reported disease mechanism is recessive biallelic loss-of-function. Candidate 1 is weakest because although it is rare, apparently de novo, and in a plausible epilepsy-related gene, the raw evidence is technically fragile with low alternate allele support, strand bias, read-end clustering, soft-clipping, lower mapping quality, and low genotype quality.",
    },

    escalationDecision: {
      prompt:
        "Choose the safest next action for this candidate set.",
      options: [
        {
          id: "escalate-candidate-1",
          label: "A",
          decision:
            "Escalate Candidate 1 as the lead finding because it is rare, apparently de novo, and located in a plausible epilepsy-related gene.",
          isBest: false,
          feedback:
            "Review this choice. Candidate 1 is clinically tempting, but the raw evidence is too technically fragile to prioritise as the lead finding without further read-level or confirmatory review.",
        },
        {
          id: "escalate-candidate-3",
          label: "B",
          decision:
            "Escalate Candidate 3 for formal review, documenting Candidate 1 as technically fragile and Candidate 2 as mechanism-limited.",
          isBest: true,
          feedback:
            "Best decision. Candidate 3 has the strongest convergence across phenotype, inheritance, consequence, mechanism, rarity, and technical quality. The other candidates should still be documented with clear reasons for deprioritisation.",
        },
        {
          id: "hold-all-candidates",
          label: "C",
          decision:
            "Hold all findings because one candidate has technical concerns and another does not match the expected recessive mechanism.",
          isBest: false,
          feedback:
            "Review this choice. Some candidates are weak, but Candidate 3 has enough coherent evidence to justify formal review rather than holding the whole case.",
        },
      ],
    },

    writtenSummary: {
      prompt:
        "Write a short trainee-level handover summary explaining the strongest candidate, the main technical artefact concern, why the other findings are weaker, and the safest next step.",
      checklist: [
        "Names Candidate 3 as the strongest current finding.",
        "Mentions the apparent de novo inheritance pattern for Candidate 3.",
        "Uses the frameshift consequence and loss-of-function mechanism as supporting evidence.",
        "Mentions the clean technical evidence for Candidate 3, including balanced allele support and good quality metrics.",
        "Explains why Candidate 1 is clinically tempting but technically fragile.",
        "Explains why Candidate 2 is technically real but not currently mechanism-compatible as a single inherited heterozygous finding.",
        "Avoids treating Candidate 3 as a final diagnosis without formal review and sign-off.",
      ],
      modelAnswer:
        "Candidate 3 is the strongest current finding for formal review. It is an apparent de novo heterozygous frameshift variant in SYNAPT7, a gene associated with an autosomal dominant neurodevelopmental disorder with seizures where loss-of-function is a compatible mechanism. The phenotype is a reasonable fit, the variant is absent from population data, and the raw evidence is technically strong, with good depth, balanced allele support, high genotype and mapping quality, and no major read-level warning signs. Candidate 1 is clinically tempting because it is rare, apparently de novo, and in a plausible epilepsy-related gene, but it is technically fragile because of low alternate allele support, strand bias, read-end clustering, soft-clipping, and weaker quality metrics. Candidate 2 appears technically real, but it is a single inherited heterozygous stop-gained variant in a gene where the reported disease mechanism is recessive biallelic loss-of-function. The safest next step is to document this reasoning and escalate Candidate 3 through the appropriate clinical laboratory review pathway rather than treating it as a final diagnosis.",
    },
  },

  reasoningScorecard: [
    {
      category: "Technical confidence",
      maxScore: 2,
      expectation:
        "Uses allele depth, genotype quality, mapping quality, strand bias, read position, soft-clipping, and local sequence context to judge whether a call is reliable.",
    },
    {
      category: "Artefact awareness",
      maxScore: 2,
      expectation:
        "Recognises that a rare or apparently de novo variant can still be weakened by poor read-level evidence.",
    },
    {
      category: "Clinical fit and mechanism",
      maxScore: 2,
      expectation:
        "Separates technical call quality from clinical relevance, including whether the inheritance pattern and disease mechanism fit the case.",
    },
    {
      category: "Candidate prioritisation",
      maxScore: 2,
      expectation:
        "Prioritises the candidate with the best overall convergence across phenotype, inheritance, consequence, mechanism, rarity, and raw evidence.",
    },
    {
      category: "Safe escalation",
      maxScore: 2,
      expectation:
        "Escalates the strongest candidate for review while documenting why technically fragile or mechanism-limited alternatives were deprioritised.",
    },
  ],

  patient: {
    age: 6,
    sex: "Female",
  },

  referralReason:
    "A 6-year-old girl has been referred for rare disease genome analysis because of developmental delay, seizures, and mild hypotonia.",

  testType: "Rare disease trio genome sequencing",

  familyStructure:
    "The proband and both biological parents have been tested. Both parents are reportedly unaffected.",

  history: [
    "Global developmental delay noted before age 2",
    "Seizures beginning in early childhood",
    "Mild hypotonia",
    "No known previous molecular diagnosis",
    "No reported family history of a similar presentation",
  ],

  phenotype: [
    "Global developmental delay",
    "Seizures",
    "Hypotonia",
    "Learning difficulties",
  ],

  familyHistory:
    "Both parents are unaffected. There is no known family history of seizures, developmental delay, or a similar neurodevelopmental condition.",

  serviceContext: [
    "The analysis is being performed in a rare disease service context.",
    "Several candidate variants have been returned by an initial filtering workflow.",
    "Your task is to decide which candidate findings are technically convincing enough to prioritise for further review.",
    "Do not treat a rare or apparently de novo variant as reliable until the raw technical evidence supports that conclusion.",
  ],

  candidateFindings: [
    {
      id: "candidate-1",
      label: "Candidate 1",
      gene: "EPILEP1",
      variant: "chr2:178442193 G>A",
      zygosity: "Heterozygous",
      consequence: "missense_variant",
      inheritanceSignal: "Apparent de novo",
      clinicalFit:
        "The gene has a reported autosomal dominant neurodevelopmental epilepsy association. The phenotype overlap is plausible, but the variant is missense and the technical evidence needs careful review.",
      rawEvidence: `GENE: EPILEP1
Known disease association: autosomal dominant developmental and epileptic encephalopathy
Reported inheritance: autosomal dominant
Known mechanism: missense gain-of-function reported in recurrent functional domains

Variant:
chr2:178442193 G>A
Transcript: NM_100001.2
HGVS: c.1558G>A p.(Gly520Arg)
Consequence: missense_variant
Protein domain: ion-channel-like functional domain

VCF-style fields:
QUAL=31
FILTER=PASS
INFO: DP=24;MQ=34;QD=1.3;SOR=6.1
FORMAT: GT:AD:DP:GQ

Proband: 0/1:20,4:24:38
Mother: 0/0:31,0:31:99
Father: 0/0:29,0:29:99

Read-level notes:
ALT reads mostly on reverse strand
3 of 4 ALT reads occur within the final 10 bases of the read
Soft-clipping present in several reads around the variant position
Local region has low-complexity sequence flag
Manual IGV/read-level review recommended before prioritisation

Population:
gnomAD AF = not observed
gnomAD allele count = 0

Constraint:
LOEUF = 0.22
pLI = 0.98

ClinVar-style summary:
No exact matching variant record found in local summary
Gene has pathogenic missense variants reported in nearby functional regions`,
      concern:
        "This looks clinically tempting because it is rare, apparently de novo, and in a plausible gene, but the raw technical evidence is weak. It should not be prioritised without read-level review.",
    },
    {
      id: "candidate-2",
      label: "Candidate 2",
      gene: "NEUROQ4",
      variant: "chr9:33411902 C>T",
      zygosity: "Heterozygous",
      consequence: "stop_gained",
      inheritanceSignal: "Inherited from unaffected father",
      clinicalFit:
        "The gene is associated with a neurodevelopmental disorder, but reported disease is usually autosomal recessive with biallelic loss-of-function.",
      rawEvidence: `GENE: NEUROQ4
Known disease association: childhood-onset neurodevelopmental disorder
Reported inheritance: autosomal recessive
Known mechanism: biallelic loss-of-function

Variant:
chr9:33411902 C>T
Transcript: NM_100002.1
HGVS: c.901C>T p.(Arg301*)
Consequence: stop_gained

VCF-style fields:
QUAL=612
FILTER=PASS
INFO: DP=47;MQ=60;QD=13.0;SOR=0.64
FORMAT: GT:AD:DP:GQ

Proband: 0/1:25,22:47:99
Mother: 0/0:38,0:38:99
Father: 0/1:21,19:40:99

Read-level notes:
ALT reads seen on both forward and reverse strands
ALT reads distributed across read positions
No obvious local mapping warning
No soft-clipping concern

Population:
gnomAD AF = 0.00002
gnomAD allele count = 5
No homozygotes observed in local summary

Constraint:
LOEUF = 0.41
pLI = 0.74

ClinVar-style summary:
No exact matching variant record found in local summary
Other biallelic loss-of-function variants in this gene have been submitted in affected individuals`,
      concern:
        "This is technically convincing as a heterozygous inherited variant, but the current evidence does not fit a recessive biallelic loss-of-function diagnosis unless a second relevant allele is found.",
    },
    {
      id: "candidate-3",
      label: "Candidate 3",
      gene: "SYNAPT7",
      variant: "chr14:77211840 A>T",
      zygosity: "Heterozygous",
      consequence: "frameshift_variant",
      inheritanceSignal: "Apparent de novo",
      clinicalFit:
        "The gene is associated with an autosomal dominant neurodevelopmental disorder including developmental delay and seizures. Loss-of-function is a reported mechanism.",
      rawEvidence: `GENE: SYNAPT7
Known disease association: autosomal dominant neurodevelopmental disorder with seizures
Reported inheritance: autosomal dominant
Known mechanism: haploinsufficiency / loss-of-function

Variant:
chr14:77211840 A>T
Transcript: NM_100003.5
HGVS: c.988del p.(Asn330Thrfs*12)
Consequence: frameshift_variant
Predicted effect: premature termination codon

VCF-style fields:
QUAL=824
FILTER=PASS
INFO: DP=52;MQ=60;QD=15.8;SOR=0.83
FORMAT: GT:AD:DP:GQ

Proband: 0/1:27,25:52:99
Mother: 0/0:42,0:42:99
Father: 0/0:39,0:39:99

Read-level notes:
ALT-supporting reads seen on both forward and reverse strands
ALT reads distributed across read positions
No obvious low-complexity flag
No pseudogene or segmental duplication warning in local annotation
No concerning soft-clipping around the variant

Population:
gnomAD AF = not observed
gnomAD allele count = 0

Constraint:
LOEUF = 0.19
pLI = 0.99

ClinVar-style summary:
No exact matching variant record found in local summary
Nearby truncating variants in this gene have been submitted as pathogenic/likely pathogenic in affected individuals`,
      concern:
        "This is the most technically convincing candidate in the current set and has better alignment between phenotype, inheritance, consequence, mechanism, and raw evidence.",
    },
  ],

  decisionCheckpoints: [
    {
      id: "checkpoint-1",
      title: "Checkpoint 1 — Do not trust the label too quickly",
      context:
        "Candidate 1 is rare, apparently de novo, and in a plausible epilepsy-related gene. However, the proband evidence is AD 20,4, DP 24, GQ 38, MQ 34, QD 1.3, and SOR 6.1.",
      question:
        "What is the safest interpretation of Candidate 1 at this stage?",
      options: [
        {
          label: "A",
          text: "Prioritise it as the lead finding because rarity, apparent de novo status, and gene relevance are strong clinical signals.",
          isCorrect: false,
          feedback:
            "Not quite. Rare and apparently de novo can be important, but the technical evidence is weak here. Low alternate support, low GQ, lower MQ, high SOR, read-end clustering, and soft-clipping all reduce confidence.",
        },
        {
          label: "B",
          text: "Treat it as clinically tempting but technically fragile, requiring read-level review before any serious prioritisation.",
          isCorrect: true,
          feedback:
            "Correct. This is the safest interpretation. The gene and phenotype may be tempting, but the technical data make the variant call uncertain.",
        },
        {
          label: "C",
          text: "Remove it from consideration permanently because low-quality read evidence means the call cannot ever be relevant.",
          isCorrect: false,
          feedback:
            "Not quite. A weak call should be handled cautiously and documented. It may need manual review, confirmation, or deprioritisation, but it should not be dismissed without reasoning.",
        },
      ],
      teachingPoint:
        "A clinically tempting variant can still be technically weak. In clinical bioinformatics, raw evidence quality must shape prioritisation.",
    },
    {
      id: "checkpoint-2",
      title: "Checkpoint 2 — Separate technical confidence from clinical fit",
      context:
        "Candidate 2 has strong technical evidence: DP 47, balanced AD, GQ 99, MQ 60, QD 13.0, SOR 0.64. However, it is inherited from an unaffected father and the gene is linked to autosomal recessive biallelic loss-of-function disease.",
      question:
        "What does Candidate 2 show?",
      options: [
        {
          label: "A",
          text: "A technically convincing call that is still not a strong clinical candidate based on the current inheritance and mechanism evidence.",
          isCorrect: true,
          feedback:
            "Correct. The variant call itself looks reliable, but the clinical interpretation is weaker because only one inherited heterozygous allele is shown for a recessive biallelic loss-of-function condition.",
        },
        {
          label: "B",
          text: "A technically weak call because an unaffected parent carries it and inherited findings usually represent sequencing artefact.",
          isCorrect: false,
          feedback:
            "Not quite. The technical evidence looks good. The issue is not call quality; it is clinical fit, inheritance, and mechanism.",
        },
        {
          label: "C",
          text: "A diagnostic finding because stop-gained variants are high-impact and should be prioritised whenever the call is clean.",
          isCorrect: false,
          feedback:
            "Not quite. A stop-gained consequence can be important, but it must fit the disease mechanism and inheritance pattern.",
        },
      ],
      teachingPoint:
        "Technical confidence and clinical relevance are different questions. A call can be technically real but clinically deprioritised.",
    },
    {
      id: "checkpoint-3",
      title: "Checkpoint 3 — Identify the strongest candidate",
      context:
        "Candidate 3 is an apparent de novo frameshift in a gene where autosomal dominant loss-of-function disease is reported. The raw evidence is DP 52, balanced AD 27,25, GQ 99, MQ 60, QD 15.8, SOR 0.83, and no major read-level warning signs.",
      question:
        "Which candidate is strongest for further review?",
      options: [
        {
          label: "A",
          text: "Candidate 1, because the gene is plausible and the variant is absent from population data.",
          isCorrect: false,
          feedback:
            "Not quite. Candidate 1 is clinically tempting but technically fragile. Population absence does not rescue weak raw evidence.",
        },
        {
          label: "B",
          text: "Candidate 2, because the variant call is technically clean and the consequence is predicted loss-of-function.",
          isCorrect: false,
          feedback:
            "Not quite. Candidate 2 is technically clean, but the current inheritance and mechanism evidence do not fit well enough.",
        },
        {
          label: "C",
          text: "Candidate 3, because phenotype, inheritance, consequence, mechanism, population absence, and technical evidence align best.",
          isCorrect: true,
          feedback:
            "Correct. Candidate 3 shows convergence across multiple evidence types, making it the strongest current candidate for further review.",
        },
      ],
      teachingPoint:
        "Prioritisation depends on convergence. The strongest candidate is rarely chosen from one field alone.",
    },
    {
      id: "checkpoint-4",
      title: "Checkpoint 4 — What should be escalated?",
      context:
        "You need to decide what to take forward from this candidate set in a trainee clinical bioinformatics workflow.",
      question:
        "What is the safest next action?",
      options: [
        {
          label: "A",
          text: "Escalate Candidate 3 for review, document Candidate 1 as technically fragile, and document why Candidate 2 is not currently mechanism-compatible.",
          isCorrect: true,
          feedback:
            "Correct. This preserves the reasoning for all three candidates and avoids over-claiming. Candidate 3 is strongest, Candidate 1 needs technical caution, and Candidate 2 is limited by mechanism/inheritance.",
        },
        {
          label: "B",
          text: "Escalate Candidate 1 first because a suspicious-looking read pattern makes it the most urgent finding to resolve.",
          isCorrect: false,
          feedback:
            "Not quite. Candidate 1 is suspicious-looking in a technical sense, not necessarily clinically convincing. It needs caution rather than top prioritisation.",
        },
        {
          label: "C",
          text: "Only record Candidate 3 because documenting weaker candidates can distract from the strongest finding.",
          isCorrect: false,
          feedback:
            "Not quite. A safe workflow should leave reviewable reasoning for why other candidates were deprioritised, especially when they are tempting or technically informative.",
        },
      ],
      teachingPoint:
        "Safe service work requires documentation of both prioritised and deprioritised candidates, especially when technical or mechanism caveats are important.",
    },
  ],

  finalReflection:
    "A safe trainee-level conclusion would be that Candidate 3 is the strongest candidate for further review because the phenotype, apparent de novo inheritance, frameshift consequence, loss-of-function mechanism, population absence, and raw technical evidence are well aligned. Candidate 1 is clinically tempting but technically fragile because the alternate allele support is low, genotype quality and mapping quality are weaker, strand bias is high, and read-level warning signs are present. Candidate 2 appears technically real, but the current evidence is limited by inheritance and mechanism because it is a single inherited heterozygous variant in a gene associated with recessive biallelic loss-of-function disease. The safest next step is to document this reasoning and escalate Candidate 3 through the appropriate review pathway.",
};