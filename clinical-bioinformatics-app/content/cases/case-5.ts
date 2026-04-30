export const case5 = {
  id: "case-5",
  slug: "x-linked-inheritance-case",
  title: "Case 5: X-linked inheritance case",
  level: "Beginner",
  summary:
    "An X-linked rare disease case focused on hemizygous variant interpretation, carrier-parent logic, sex-aware inheritance, population evidence, and safe escalation.",

  visualisationExampleId: null,

  assessmentFocus: [
    "X-linked inheritance reasoning",
    "Hemizygous variant interpretation",
    "Carrier-parent logic",
    "Population evidence in male hemizygotes",
    "Technical confidence",
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
        "Rank the findings from strongest to weakest based on X-linked inheritance fit, sex-aware transmission, phenotype overlap, variant consequence, gene mechanism, population evidence, technical confidence, and whether each finding should drive the case conclusion.",
      correctOrder: ["candidate-2", "candidate-1", "candidate-3"],
      explanation:
        "Candidate 2 is strongest because the male proband is hemizygous for a rare stop-gained variant in an X-linked neurodevelopmental gene, the mother is a heterozygous carrier, the phenotype fits, loss-of-function is a reported mechanism, and the technical evidence is strong. Candidate 1 is weaker because although the hemizygous call is technically convincing and maternally inherited, the variant is too common, observed in male hemizygotes, outside the known functional region, and less mechanism-compatible. Candidate 3 is weakest because although it appears de novo and absent from population data, the autosomal missense call is technically fragile and the gene-disease relationship is limited.",
    },

    escalationDecision: {
      prompt:
        "Choose the safest next action for the strongest finding in this case.",
      options: [
        {
          id: "report-candidate-2-now",
          label: "A",
          decision:
            "Treat Candidate 2 as diagnostic immediately because the proband is male and hemizygous for an X-linked stop-gained variant.",
          isBest: false,
          feedback:
            "Review this choice. Candidate 2 is the strongest finding, but a hemizygous X-linked loss-of-function variant still needs formal transcript review, gene-disease review, variant interpretation, family context review, and sign-off.",
        },
        {
          id: "escalate-candidate-2",
          label: "B",
          decision:
            "Escalate Candidate 2 for formal review, documenting the X-linked inheritance logic and why the other findings are weaker.",
          isBest: true,
          feedback:
            "Best decision. This preserves the correct trainee-level boundary: Candidate 2 is prioritised because the sex-aware inheritance, phenotype, mechanism, rarity, and technical evidence align, but final interpretation still requires review.",
        },
        {
          id: "escalate-candidate-3",
          label: "C",
          decision:
            "Escalate Candidate 3 first because an apparent de novo autosomal finding should outrank inherited X-linked findings.",
          isBest: false,
          feedback:
            "Review this choice. De novo status can be important, but Candidate 3 is technically fragile and has limited gene-disease support. It should not outrank the better-supported X-linked candidate.",
        },
      ],
    },

    writtenSummary: {
      prompt:
        "Write a short trainee-level handover summary explaining the strongest X-linked candidate, the inheritance logic, why the other findings are weaker, and the safest next step.",
      checklist: [
        "Names Candidate 2 as the strongest current finding.",
        "Explains that the proband is male and hemizygous for the XLN1 variant.",
        "Mentions that the mother is a heterozygous carrier and the father is reference.",
        "Links the phenotype to the X-linked neurodevelopmental disorder described for XLN1.",
        "Uses the stop-gained consequence and loss-of-function mechanism as supporting evidence.",
        "Mentions that the variant is absent from population data and has strong technical support.",
        "Explains why Candidate 1 is weaker because of frequency, observed male hemizygotes, and weaker mechanism fit.",
        "Explains why Candidate 3 is weaker because of technical fragility and limited gene-disease evidence.",
        "Avoids calling Candidate 2 a final diagnosis without formal review and sign-off.",
      ],
      modelAnswer:
        "Candidate 2 is the strongest current finding for formal review. The proband is male and hemizygous for a rare stop-gained variant in XLN1, an X-linked neurodevelopmental gene where loss-of-function is a reported disease mechanism in affected males. The mother is a heterozygous carrier and the father is reference, which fits a maternally inherited X-linked pattern for a male proband. The child’s developmental delay, hypotonia, seizures, and mild intellectual disability are compatible with the reported phenotype, and the raw evidence is technically reassuring, with good depth, high quality, no major mapping concerns, and balanced carrier support in the mother. Candidate 1 is technically convincing but weaker because it is too common, has observed male hemizygotes in population data, and is outside the recognised functional region. Candidate 3 appears de novo, but the call is technically fragile and the gene-disease relationship is limited. The safest next step is to document the X-linked inheritance reasoning and escalate Candidate 2 through the appropriate clinical laboratory review pathway rather than treating it as a final diagnosis.",
    },
  },

  reasoningScorecard: [
    {
      category: "X-linked inheritance reasoning",
      maxScore: 2,
      expectation:
        "Recognises that a maternally inherited hemizygous X-linked variant can be relevant in an affected male proband.",
    },
    {
      category: "Sex-aware transmission",
      maxScore: 2,
      expectation:
        "Uses the proband’s sex and parental genotypes correctly, including recognising that a father does not transmit his X chromosome to a son.",
    },
    {
      category: "Population evidence",
      maxScore: 2,
      expectation:
        "Uses allele frequency and observed male hemizygotes to judge whether an X-linked variant is plausible for a severe rare childhood disorder.",
    },
    {
      category: "Candidate prioritisation",
      maxScore: 2,
      expectation:
        "Prioritises the finding with the best convergence across inheritance, phenotype, consequence, mechanism, rarity, and technical confidence.",
    },
    {
      category: "Safe escalation",
      maxScore: 2,
      expectation:
        "Escalates the strongest X-linked candidate for formal review while documenting why other technically clean or apparently de novo findings were deprioritised.",
    },
  ],

  patient: {
    age: 7,
    sex: "Male",
  },

  referralReason:
    "A 7-year-old boy has been referred for rare disease genome analysis because of developmental delay, hypotonia, mild intellectual disability, and recurrent seizures.",

  testType: "Rare disease trio genome sequencing",

  familyStructure:
    "The proband and both biological parents have been tested. The proband is male. Both parents are reportedly unaffected. The mother reports a maternal uncle with childhood learning difficulties, but no confirmed diagnosis.",

  history: [
    "Global developmental delay noted in early childhood",
    "Hypotonia reported from infancy",
    "Recurrent seizures beginning at age 4",
    "Mild intellectual disability",
    "No known previous molecular diagnosis",
    "Possible maternal family history of learning difficulties",
  ],

  phenotype: [
    "Global developmental delay",
    "Hypotonia",
    "Seizures",
    "Mild intellectual disability",
  ],

  familyHistory:
    "Both parents are unaffected. A maternal uncle is reported to have had childhood learning difficulties, but no genomic diagnosis is known. No similarly affected siblings are reported.",

  serviceContext: [
    "The analysis is being performed in a rare disease service context.",
    "Because the proband is male, X-linked inheritance should be considered alongside autosomal models.",
    "Your task is to decide whether a hemizygous X-linked candidate fits the phenotype, inheritance, technical evidence, and disease mechanism.",
    "A maternally inherited X-linked variant can still be relevant in an affected male if the mother is an unaffected carrier.",
  ],

  candidateFindings: [
    {
      id: "candidate-1",
      label: "Candidate 1",
      gene: "XDEV4",
      variant: "chrX:119004421 G>A",
      zygosity: "Hemizygous",
      consequence: "missense_variant",
      inheritanceSignal: "Maternally inherited; mother heterozygous carrier",
      clinicalFit:
        "XDEV4 has a reported X-linked association, but the specific variant is a missense change outside the known functional region and is present in population data including male hemizygotes.",
      rawEvidence: `GENE: XDEV4
Known disease association: possible X-linked developmental disorder
Reported inheritance: X-linked
Known mechanism: recurrent missense variants in a specific functional domain

Variant:
chrX:119004421 G>A
Transcript: NM_400002.1
HGVS: c.1403G>A p.(Val468Met)
Consequence: missense_variant
Protein domain: outside reported recurrent functional domain

VCF-style fields:
QUAL=742
FILTER=PASS
INFO: DP=43;MQ=60;QD=17.3;SOR=0.81
FORMAT: GT:AD:DP:GQ

Proband: 1:0,43:43:99
Mother: 0/1:22,20:42:99
Father: 0:34,0:34:99

Read-level notes:
ALT reads in proband seen on both forward and reverse strands
ALT reads distributed across read positions
Mother has balanced heterozygous allele support
No obvious local mapping warning
No soft-clipping concern

Population:
gnomAD AF = 0.002
gnomAD allele count = 520
Male hemizygotes observed in local summary = 41

Constraint:
LOEUF = 0.83
pLI = 0.08

ClinVar-style summary:
No exact matching pathogenic record found in local summary
Variant region is not a recognised recurrent pathogenic region in local summary`,
      concern:
        "This is technically convincing as a hemizygous variant call, but population frequency, observed male hemizygotes, weaker constraint, and weaker mechanism fit make it a lower-priority candidate.",
    },
    {
      id: "candidate-2",
      label: "Candidate 2",
      gene: "XLN1",
      variant: "chrX:71388211 C>T",
      zygosity: "Hemizygous",
      consequence: "stop_gained",
      inheritanceSignal: "Maternally inherited; mother heterozygous carrier",
      clinicalFit:
        "XLN1 is associated with an X-linked neurodevelopmental disorder in males. Reported features include developmental delay, hypotonia, seizures, and intellectual disability. Loss-of-function is a reported disease mechanism.",
      rawEvidence: `GENE: XLN1
Known disease association: X-linked neurodevelopmental disorder
Reported inheritance: X-linked
Known mechanism: loss-of-function in affected males

Variant:
chrX:71388211 C>T
Transcript: NM_400001.3
HGVS: c.982C>T p.(Arg328*)
Consequence: stop_gained
Predicted effect: premature termination codon

VCF-style fields:
QUAL=906
FILTER=PASS
INFO: DP=39;MQ=60;QD=23.2;SOR=0.72
FORMAT: GT:AD:DP:GQ

Proband: 1:0,39:39:99
Mother: 0/1:21,19:40:99
Father: 0:36,0:36:99

Read-level notes:
ALT reads in proband seen on both forward and reverse strands
ALT reads distributed across read positions
Mother has balanced heterozygous allele support
Father has good depth with no ALT reads
No obvious low-complexity sequence flag
No pseudogene or segmental duplication warning
No concerning soft-clipping around the variant

Population:
gnomAD AF = not observed
gnomAD allele count = 0
Male hemizygotes observed in local summary = 0

Constraint:
LOEUF = 0.21
pLI = 0.97

ClinVar-style summary:
No exact matching variant record found in local summary
Other truncating variants in XLN1 have been submitted as pathogenic/likely pathogenic in affected males`,
      concern:
        "This is the strongest current candidate because the proband is male and hemizygous for a rare loss-of-function variant in an X-linked neurodevelopmental gene, with the mother appearing to be a carrier. It still needs formal review of gene-disease validity, transcript, variant consequence, and family segregation context.",
    },
    {
      id: "candidate-3",
      label: "Candidate 3",
      gene: "NDDY3",
      variant: "chr4:158220991 A>G",
      zygosity: "Heterozygous",
      consequence: "missense_variant",
      inheritanceSignal: "Apparent de novo, but technically uncertain",
      clinicalFit:
        "NDDY3 has a possible autosomal dominant neurodevelopmental association, but the gene-disease evidence is limited and the raw technical evidence is weaker.",
      rawEvidence: `GENE: NDDY3
Known disease association: possible autosomal dominant neurodevelopmental disorder
Reported inheritance: autosomal dominant proposed in limited reports
Known mechanism: uncertain; missense mechanism not well established

Variant:
chr4:158220991 A>G
Transcript: NM_400003.2
HGVS: c.604A>G p.(Thr202Ala)
Consequence: missense_variant

VCF-style fields:
QUAL=42
FILTER=PASS
INFO: DP=22;MQ=37;QD=1.9;SOR=5.4
FORMAT: GT:AD:DP:GQ

Proband: 0/1:18,4:22:41
Mother: 0/0:30,0:30:99
Father: 0/0:28,0:28:99

Read-level notes:
ALT reads mostly on one strand
3 of 4 ALT reads occur near read ends
Soft-clipping present around supporting reads
Local low-complexity sequence flag present
Manual read-level review recommended before prioritisation

Population:
gnomAD AF = not observed
gnomAD allele count = 0

Constraint:
LOEUF = 0.69
pLI = 0.16

ClinVar-style summary:
No exact matching variant record found in local summary
Gene-disease relationship remains limited in available summary`,
      concern:
        "This looks interesting because it appears de novo and absent from population data, but the technical evidence is fragile and the gene-disease relationship is weaker.",
    },
  ],

  decisionCheckpoints: [
    {
      id: "checkpoint-1",
      title: "Checkpoint 1 — Recognise X-linked logic",
      context:
        "The proband is male. Candidate 2 is on chromosome X. The proband is hemizygous for the alternate allele, the mother is heterozygous, and the father is reference.",
      question:
        "What does this inheritance pattern support?",
      options: [
        {
          label: "A",
          text: "A possible autosomal recessive candidate, because the father is unaffected and the mother is a carrier.",
          isCorrect: false,
          feedback:
            "Not quite. The variant is on chromosome X and the proband is male/hemizygous, not autosomal homozygous.",
        },
        {
          label: "B",
          text: "A possible X-linked maternally inherited candidate in an affected male proband.",
          isCorrect: true,
          feedback:
            "Correct. In a male proband, a hemizygous X-linked variant inherited from a carrier mother can be highly relevant if the gene and mechanism fit the phenotype.",
        },
        {
          label: "C",
          text: "A paternal X-linked finding, because the father is reference and the proband is affected.",
          isCorrect: false,
          feedback:
            "Not quite. A father transmits his Y chromosome to a son, not his X chromosome. The mother is the relevant transmitting parent for a male proband’s X chromosome.",
        },
      ],
      teachingPoint:
        "For a male proband, X-linked inheritance requires sex-aware reasoning. A maternally inherited hemizygous variant can be relevant even if the mother is unaffected.",
    },
    {
      id: "checkpoint-2",
      title: "Checkpoint 2 — Population evidence in X-linked disease",
      context:
        "Candidate 1 is technically clean and hemizygous in the proband, but it has gnomAD AF 0.002, allele count 520, and 41 male hemizygotes observed in the local population summary.",
      question:
        "Why is Candidate 1 weaker?",
      options: [
        {
          label: "A",
          text: "Because technically clean X-linked variants should be treated as artefacts when the mother is unaffected.",
          isCorrect: false,
          feedback:
            "Not quite. Candidate 1 looks technically clean. The issue is clinical plausibility, population frequency, and mechanism fit.",
        },
        {
          label: "B",
          text: "Because maternally inherited X-linked variants are not relevant to disease in male probands.",
          isCorrect: false,
          feedback:
            "Not quite. Maternally inherited X-linked variants can cause disease in males. The problem here is that this specific variant is too common and less mechanism-compatible.",
        },
        {
          label: "C",
          text: "Because population frequency and observed male hemizygotes weaken its plausibility for a severe rare X-linked childhood disorder.",
          isCorrect: true,
          feedback:
            "Correct. A technically real variant can be clinically weak if it is too common or seen in many male hemizygotes for the proposed severe disease.",
        },
      ],
      teachingPoint:
        "Population evidence matters in X-linked interpretation. Observed male hemizygotes can weaken a severe childhood-onset disease claim.",
    },
    {
      id: "checkpoint-3",
      title: "Checkpoint 3 — Interpret Candidate 2",
      context:
        "Candidate 2 is a hemizygous stop-gained variant in XLN1. The gene is associated with an X-linked neurodevelopmental disorder in males, and loss-of-function is a reported mechanism. The mother is heterozygous and the father is reference.",
      question:
        "Why is Candidate 2 the strongest current candidate?",
      options: [
        {
          label: "A",
          text: "Because any rare chromosome X variant in a male should be treated as diagnostic.",
          isCorrect: false,
          feedback:
            "Not quite. X-linked location is not enough. The variant must still fit the gene, disease mechanism, phenotype, population evidence, and technical confidence.",
        },
        {
          label: "B",
          text: "Because the father is reference, which proves the finding is a de novo event.",
          isCorrect: false,
          feedback:
            "Not quite. The mother is heterozygous, so this is maternally inherited rather than de novo.",
        },
        {
          label: "C",
          text: "Because the sex-aware inheritance, phenotype, consequence, mechanism, population absence, and technical evidence broadly align.",
          isCorrect: true,
          feedback:
            "Correct. Candidate 2 has strong convergence across X-linked inheritance, phenotype fit, loss-of-function mechanism, rarity, and raw technical quality.",
        },
      ],
      teachingPoint:
        "A strong X-linked candidate is supported by convergence, not just chromosome location.",
    },
    {
      id: "checkpoint-4",
      title: "Checkpoint 4 — Do not over-prioritise a fragile de novo",
      context:
        "Candidate 3 is autosomal and appears de novo, but the evidence includes AD 18,4, GQ 41, MQ 37, QD 1.9, SOR 5.4, read-end clustering, soft-clipping, and low-complexity sequence context.",
      question:
        "How should Candidate 3 be handled?",
      options: [
        {
          label: "A",
          text: "Treat it cautiously, document the technical concerns, and avoid over-prioritising without read-level review.",
          isCorrect: true,
          feedback:
            "Correct. Apparent de novo status is not enough when the raw technical evidence is weak.",
        },
        {
          label: "B",
          text: "Prioritise it above Candidate 2 because de novo autosomal variants should outrank inherited X-linked variants.",
          isCorrect: false,
          feedback:
            "Not quite. A fragile apparent de novo call should not outrank a well-supported X-linked candidate with strong phenotype and mechanism fit.",
        },
        {
          label: "C",
          text: "Ignore the read-level concerns because FILTER=PASS means the call is suitable for clinical prioritisation.",
          isCorrect: false,
          feedback:
            "Not quite. FILTER=PASS does not mean the variant is clinically or technically unquestionable. The detailed evidence still matters.",
        },
      ],
      teachingPoint:
        "A technically fragile autosomal de novo candidate should not automatically outrank a stronger X-linked candidate.",
    },
    {
      id: "checkpoint-5",
      title: "Checkpoint 5 — Safe service-style next step",
      context:
        "Candidate 2 is the strongest X-linked candidate. Candidate 1 is technically real but too common and mechanism-limited. Candidate 3 is technically fragile.",
      question:
        "What is the safest next step?",
      options: [
        {
          label: "A",
          text: "Report Candidate 2 immediately as diagnostic because the proband is male and hemizygous.",
          isCorrect: false,
          feedback:
            "Not quite. A strong candidate still needs formal interpretation, appropriate review, and sign-off before reporting.",
        },
        {
          label: "B",
          text: "Prioritise Candidate 1 because it is technically clean, maternally inherited, and located on chromosome X.",
          isCorrect: false,
          feedback:
            "Not quite. Candidate 1 is technically clean, but the population frequency, observed hemizygotes, and weaker mechanism fit make it lower priority.",
        },
        {
          label: "C",
          text: "Prioritise Candidate 2 for review, document the X-linked inheritance logic, and note why Candidates 1 and 3 are weaker.",
          isCorrect: true,
          feedback:
            "Correct. This gives a clear, reviewable rationale and avoids over-claiming. Candidate 2 should be escalated for appropriate review.",
        },
      ],
      teachingPoint:
        "Safe clinical bioinformatics practice means explaining why the top candidate is strongest and why other candidates were deprioritised.",
    },
  ],

  finalReflection:
    "A safe trainee-level conclusion would be that Candidate 2 is the strongest current candidate for review because the proband is male and hemizygous for a rare stop-gained variant in an X-linked neurodevelopmental gene, the mother appears to be a heterozygous carrier, the phenotype fits, loss-of-function is a plausible mechanism, and the raw technical evidence is strong. Candidate 1 is technically convincing but clinically weaker because it is too common, has observed male hemizygotes in population data, and has weaker mechanism fit. Candidate 3 is interesting because it appears de novo, but it is technically fragile and should not be over-prioritised without read-level review. The safest next step is to document the X-linked inheritance reasoning and escalate Candidate 2 through the appropriate review pathway.",
};