export const case20 = {
  id: "case-20",
  slug: "sex-chromosome-pseudoautosomal-pitfall-case",
  title: "Case 20: Sex chromosome and pseudoautosomal pitfall",
  level: "Intermediate",
  summary:
    "A technical confidence case focused on interpreting X-linked, Y-linked, and pseudoautosomal-region findings safely without making sex-aware inheritance mistakes.",

  visualisationExampleId: null,

  assessmentFocus: [
    "Sex chromosome interpretation",
    "Pseudoautosomal-region reasoning",
    "X-linked inheritance pitfalls",
    "Y-linked finding caution",
    "Ploidy and mapping annotation review",
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
        "Rank the findings from strongest to weakest based on phenotype fit, sex chromosome context, pseudoautosomal status, inheritance logic, consequence, dosage mechanism, population evidence, technical confidence, and whether each finding should drive the case conclusion.",
      correctOrder: [
        "candidate-1",
        "candidate-2",
        "candidate-4",
        "candidate-3",
      ],
      explanation:
        "Candidate 1 is strongest because the phenotype, stop-gained consequence, dosage-sensitive pseudoautosomal gene mechanism, population absence, technical quality, and paternal PAR transmission all align. Candidate 2 is technically convincing as a maternally inherited non-PAR X-linked hemizygous variant, but it is weakened by population frequency, observed male hemizygotes, broad phenotype fit, and uncertain mechanism. Candidate 4 is weaker because it has a non-canonical splice-region consequence, weak splice prediction, mapping/ploidy annotation warnings near a sex chromosome boundary, and lower read-level confidence. Candidate 3 is lowest priority because although it may be a real paternally shared Y-linked variant, paternal sharing is expected, the gene-disease evidence is weak, and the phenotype fit is poor.",
    },

    escalationDecision: {
      prompt:
        "Choose the safest next action for the strongest finding in this case.",
      options: [
        {
          id: "dismiss-candidate-1-x-linked",
          label: "A",
          decision:
            "Dismiss Candidate 1 because it is displayed on chrX and a male proband cannot inherit an X-region variant from his father.",
          isBest: false,
          feedback:
            "Review this choice. That reasoning applies to ordinary non-PAR X-linked regions, but Candidate 1 lies in PAR1, where father-to-son transmission can be biologically valid.",
        },
        {
          id: "prioritise-candidate-1-par",
          label: "B",
          decision:
            "Prioritise Candidate 1 for formal review, documenting the pseudoautosomal inheritance logic, dosage mechanism, and phenotype fit.",
          isBest: true,
          feedback:
            "Best decision. Candidate 1 is the strongest finding because the PAR1 location explains the paternal transmission pattern and the phenotype, mechanism, rarity, and technical evidence align.",
        },
        {
          id: "prioritise-candidate-3-y",
          label: "C",
          decision:
            "Prioritise Candidate 3 because a father-to-son Y-linked variant provides the clearest inheritance pattern in a male proband.",
          isBest: false,
          feedback:
            "Review this choice. Father-to-son Y transmission can be expected for many true Y variants, but expected inheritance alone does not establish disease relevance.",
        },
      ],
    },

    writtenSummary: {
      prompt:
        "Write a short trainee-level handover summary explaining the strongest candidate, the pseudoautosomal inheritance logic, why the other sex chromosome findings are weaker, and the safest next step.",
      checklist: [
        "Names Candidate 1 as the strongest current finding.",
        "Explains that Candidate 1 lies in PAR1 rather than an ordinary non-PAR X-linked region.",
        "Mentions that pseudoautosomal variants can be transmitted from father to son.",
        "Links Candidate 1 to the short stature, skeletal disproportion, developmental delay, and learning difficulty phenotype.",
        "Mentions the stop-gained consequence and dosage-sensitive loss-of-function mechanism.",
        "Uses technical evidence such as balanced allele support, high mapping quality, and lack of mapping warning.",
        "Explains why Candidate 2 is weaker despite being a technically clean non-PAR X-linked call.",
        "Explains why Candidate 3 is weak because Y-linked paternal sharing is expected and gene-disease evidence is poor.",
        "Explains why Candidate 4 is weak because of non-canonical splice evidence and mapping/ploidy caveats.",
        "Avoids mislabelling Candidate 1 as ordinary X-linked maternal inheritance.",
        "Avoids calling Candidate 1 a final diagnosis without formal review and sign-off.",
      ],
      modelAnswer:
        "Candidate 1 is the strongest current finding for formal review. Although it is displayed on chrX, it lies in the pseudoautosomal region PAR1, so it should not be interpreted using ordinary non-PAR X-linked inheritance rules. In a male proband, a PAR variant can be diploid and can be transmitted from father to son through the Y chromosome pseudoautosomal region. The finding fits the phenotype because PARDEV1 is described as a dosage-sensitive pseudoautosomal gene associated with short stature, skeletal disproportion, and variable developmental features, and this variant is a rare stop-gained loss-of-function candidate with strong technical support. Candidate 2 is technically convincing as a non-PAR X-linked maternally inherited hemizygous variant, but it is weakened by population frequency, observed male hemizygotes, broad phenotype fit, and uncertain mechanism. Candidate 3 may be a real paternally shared Y-linked variant, but father-to-son transmission is expected and the gene-disease evidence does not fit the child’s presentation. Candidate 4 should be treated cautiously because it is a non-canonical splice-region variant with weak splice prediction, mapping/ploidy annotation warnings, and lower technical confidence. The safest next step is to prioritise Candidate 1 for formal review while clearly documenting the pseudoautosomal reasoning and avoiding ordinary X-linked assumptions.",
    },
  },

  reasoningScorecard: [
    {
      category: "Pseudoautosomal reasoning",
      maxScore: 2,
      expectation:
        "Recognises that pseudoautosomal variants can be present on shared X/Y homologous regions and may be transmitted from father to son.",
    },
    {
      category: "Sex-aware inheritance",
      maxScore: 2,
      expectation:
        "Distinguishes non-PAR X-linked, Y-linked, and PAR inheritance rather than applying one simple sex chromosome rule to every finding.",
    },
    {
      category: "Ploidy and mapping interpretation",
      maxScore: 2,
      expectation:
        "Uses ploidy, PAR boundary, mapping, and annotation warnings to avoid unsafe sex chromosome conclusions.",
    },
    {
      category: "Candidate prioritisation",
      maxScore: 2,
      expectation:
        "Prioritises the finding with the best convergence across phenotype, dosage mechanism, consequence, inheritance logic, rarity, and technical confidence.",
    },
    {
      category: "Safe escalation",
      maxScore: 2,
      expectation:
        "Escalates the strongest candidate for formal review while clearly documenting sex chromosome logic and avoiding overinterpretation of weaker X/Y findings.",
    },
  ],

  patient: {
    age: 7,
    sex: "Male",
  },

  referralReason:
    "A 7-year-old boy has been referred for rare disease genome analysis because of short stature, developmental delay, mild skeletal disproportion, and learning difficulties.",

  testType: "Rare disease trio genome sequencing",

  familyStructure:
    "The proband and both biological parents have been tested. The proband is male. Both parents are reportedly unaffected.",

  history: [
    "Short stature noted from early childhood",
    "Mild skeletal disproportion",
    "Global developmental delay",
    "Learning difficulties requiring school support",
    "No known previous molecular diagnosis",
    "No clear family history of similar skeletal or developmental features",
  ],

  phenotype: [
    "Short stature",
    "Mild skeletal disproportion",
    "Developmental delay",
    "Learning difficulties",
  ],

  familyHistory:
    "Both parents are reportedly unaffected. No known family history of short stature with developmental delay or a similar syndromic presentation is documented.",

  serviceContext: [
    "The analysis is being performed in a rare disease service context.",
    "The key issue is sex chromosome interpretation.",
    "Variants in pseudoautosomal regions can be present on both X and Y chromosomes and do not behave like ordinary X-linked variants.",
    "Your task is to avoid assuming that every chromosome X finding in a male is automatically hemizygous X-linked disease.",
  ],

  candidateFindings: [
    {
      id: "candidate-1",
      label: "Candidate 1",
      gene: "PARDEV1",
      variant: "chrX:620884 G>A / PAR1 region",
      zygosity: "Heterozygous pseudoautosomal-region variant",
      consequence: "stop_gained",
      inheritanceSignal:
        "Paternally inherited through the pseudoautosomal region",
      clinicalFit:
        "PARDEV1 is a dosage-sensitive pseudoautosomal gene associated with short stature, skeletal disproportion, and variable developmental features. Loss-of-function is a reported mechanism.",
      rawEvidence: `GENE: PARDEV1
Genomic location: pseudoautosomal region 1 (PAR1)
Sex chromosome context: present on both X and Y chromosome homologous regions
Known disease association: short stature-skeletal developmental syndrome
Reported inheritance: pseudoautosomal dominant / dosage-sensitive
Known mechanism: loss-of-function / haploinsufficiency

Variant:
chrX:620884 G>A
Equivalent PAR representation may also be seen on chrY homologous coordinates depending on pipeline
Transcript: NM_200001.3
HGVS: c.742G>A p.(Trp248*)
Consequence: stop_gained
Predicted effect: premature termination codon

VCF-style fields:
QUAL=884
FILTER=PASS
INFO: DP=50;MQ=60;QD=17.7;SOR=0.71
FORMAT: GT:AD:DP:GQ

Proband: 0/1:25,25:50:99
Mother: 0/0:44,0:44:99
Father: 0/1:22,21:43:99

Read-level notes:
ALT reads seen on both forward and reverse strands
ALT reads distributed across read positions
Reads map confidently within the pseudoautosomal region
No local low-complexity warning
No pseudogene or segmental duplication warning
No concerning soft-clipping around the variant

Sex chromosome / PAR notes:
Although displayed on chrX, this site lies in PAR1
In a male, PAR variants may be diploid because the region is shared between X and Y
Paternal transmission to a male child can occur through the Y chromosome pseudoautosomal region
This should not be interpreted as ordinary X-linked maternal inheritance

Population:
gnomAD AF = not observed
gnomAD allele count = 0

Constraint / dosage:
LOEUF = 0.26
pLI = 0.94
Dosage sensitivity: haploinsufficiency reported in local summary

ClinVar-style summary:
No exact matching variant record found in local summary
Other truncating variants and deletions involving PARDEV1 have been submitted as pathogenic/likely pathogenic in affected individuals`,
      concern:
        "This is the strongest current candidate because the phenotype, pseudoautosomal inheritance, loss-of-function consequence, dosage-sensitive mechanism, population absence, and technical evidence align. The key pitfall is that it must not be misinterpreted as an ordinary X-linked variant.",
    },
    {
      id: "candidate-2",
      label: "Candidate 2",
      gene: "XLINK9",
      variant: "chrX:103441902 C>T",
      zygosity: "Hemizygous",
      consequence: "missense_variant",
      inheritanceSignal: "Maternally inherited",
      clinicalFit:
        "XLINK9 has a possible X-linked neurodevelopmental association, but the phenotype match is broad and the variant is present in male hemizygotes in population data.",
      rawEvidence: `GENE: XLINK9
Genomic location: non-pseudoautosomal chromosome X region
Known disease association: possible X-linked neurodevelopmental disorder
Reported inheritance: X-linked
Known mechanism: uncertain; recurrent missense variants reported in limited evidence

Variant:
chrX:103441902 C>T
Transcript: NM_200002.2
HGVS: c.1190C>T p.(Pro397Leu)
Consequence: missense_variant
Protein domain: outside reported recurrent functional region

VCF-style fields:
QUAL=720
FILTER=PASS
INFO: DP=42;MQ=60;QD=17.1;SOR=0.84
FORMAT: GT:AD:DP:GQ

Proband: 1:0,42:42:99
Mother: 0/1:21,20:41:99
Father: 0:39,0:39:99

Read-level notes:
ALT reads in proband seen on both forward and reverse strands
ALT reads distributed across read positions
Mother has balanced heterozygous allele support
No local mapping warning
No soft-clipping concern

Sex chromosome notes:
This is a non-PAR X-linked site
In a male proband, the call is hemizygous
Maternal inheritance is plausible for X-linked transmission

Population:
gnomAD AF = 0.0018
gnomAD allele count = 470
Male hemizygotes observed in local summary = 38

Constraint:
LOEUF = 0.79
pLI = 0.09

ClinVar-style summary:
No exact matching pathogenic record found in local summary
Gene-disease relationship remains limited/moderate in available summary`,
      concern:
        "This is technically convincing as an inherited hemizygous X-linked call, but population frequency, observed male hemizygotes, weaker mechanism, and broad phenotype fit make it a lower-priority candidate.",
    },
    {
      id: "candidate-3",
      label: "Candidate 3",
      gene: "YREG2",
      variant: "chrY:2219041 T>C",
      zygosity: "Hemizygous Y-linked call",
      consequence: "missense_variant",
      inheritanceSignal: "Appears paternally inherited",
      clinicalFit:
        "YREG2 is located on chromosome Y. The gene has no strong established link to the child’s developmental and skeletal presentation in the local summary.",
      rawEvidence: `GENE: YREG2
Genomic location: chromosome Y, non-pseudoautosomal region
Known disease association: limited evidence; no established fit to short stature-developmental syndrome in local summary
Reported inheritance: Y-linked transmission possible for true Y variants
Known mechanism: uncertain

Variant:
chrY:2219041 T>C
Transcript: NM_200003.1
HGVS: c.410T>C p.(Leu137Pro)
Consequence: missense_variant

VCF-style fields:
QUAL=388
FILTER=PASS
INFO: DP=36;MQ=52;QD=10.8;SOR=1.2
FORMAT: GT:AD:DP:GQ

Proband: 1:0,36:36:88
Mother: .:.:.:.
Father: 1:0,34:34:86

Read-level notes:
ALT reads present in father and proband
ALT reads seen on both strands
Some reads have moderate mapping quality
No clear low-complexity warning
No strong disease-specific evidence in local summary

Sex chromosome notes:
This is a Y-linked call and is expected to be absent from the mother
Paternal transmission to a male child is expected for many true Y variants
Presence in father and proband alone does not imply disease causation

Population:
Population frequency summary for Y-linked region limited in local view
Variant observed in unrelated male population records in local summary

Constraint:
Constraint metrics not directly comparable to autosomal/X genes in this local summary

ClinVar-style summary:
No exact matching pathogenic record found in local summary
No strong established disease association for this phenotype`,
      concern:
        "This is likely a real paternally shared Y-linked variant, but it is not a strong candidate because gene-disease evidence and phenotype fit are weak. Paternal transmission alone is expected and should not be over-interpreted.",
    },
    {
      id: "candidate-4",
      label: "Candidate 4",
      gene: "XPARCONF3",
      variant: "chrX:155210221 A>G",
      zygosity: "Hemizygous-looking call",
      consequence: "splice_region_variant",
      inheritanceSignal: "Reported as absent from mother, but sex chromosome mapping uncertain",
      clinicalFit:
        "XPARCONF3 has a limited neurodevelopmental association. The variant is non-canonical splice-region and lies near a boundary region with mapping and ploidy annotation warnings.",
      rawEvidence: `GENE: XPARCONF3
Genomic location: chromosome X boundary-proximal region near PAR annotation transition
Known disease association: limited neurodevelopmental association
Reported inheritance: unclear from current evidence
Known mechanism: uncertain; splice mechanism not established

Variant:
chrX:155210221 A>G
Transcript: NM_200004.2
HGVS: c.601+6A>G
Consequence: splice_region_variant
Splice position: +6 donor region, outside canonical +1/+2 site
Splice prediction summary: weak predicted splice effect in local summary

VCF-style fields:
QUAL=63
FILTER=PASS
INFO: DP=29;MQ=38;QD=2.2;SOR=4.4
FORMAT: GT:AD:DP:GQ

Proband: 1:22,7:29:46
Mother: 0/0:31,0:31:88
Father: 0:27,0:27:74

Read-level notes:
ALT reads mostly on one strand
5 of 7 ALT reads occur close to read ends
Mixed mapping quality for ALT-supporting reads
Boundary-proximal region has mapping/ploidy annotation warning
Local alignment review recommended before prioritisation

Sex chromosome / annotation notes:
Pipeline flags possible ambiguity around PAR boundary / sex chromosome ploidy model
The displayed hemizygous-looking genotype may not be sufficient to infer inheritance
Non-canonical splice-region annotation is weak without additional evidence

Population:
gnomAD AF = not observed in local summary
Allele count = 0 in displayed dataset

Constraint:
LOEUF = 0.68
pLI = 0.22

ClinVar-style summary:
No exact matching variant record found in local summary
Gene-disease relationship remains limited in available summary`,
      concern:
        "This should be treated cautiously because of weak splice evidence, mapping/ploidy annotation warnings, lower technical confidence, and limited gene-disease support.",
    },
  ],

  decisionCheckpoints: [
    {
      id: "checkpoint-1",
      title: "Checkpoint 1 — Pseudoautosomal regions are not ordinary X-linked regions",
      context:
        "Candidate 1 is displayed on chrX but lies in PAR1. The male proband and father are both heterozygous at this site, and the mother is reference.",
      question:
        "What is the safest interpretation of Candidate 1’s inheritance?",
      options: [
        {
          label: "A",
          text: "Treat it as impossible because males cannot inherit ordinary non-PAR X-linked variants from their father.",
          isCorrect: false,
          feedback:
            "Not quite. That rule applies to ordinary non-PAR X-linked regions. Pseudoautosomal regions are shared between X and Y and can be transmitted from father to son.",
        },
        {
          label: "B",
          text: "Treat it as possible paternal pseudoautosomal transmission rather than ordinary X-linked maternal inheritance.",
          isCorrect: true,
          feedback:
            "Correct. PAR variants need sex-aware interpretation because they can behave differently from standard X-linked variants.",
        },
        {
          label: "C",
          text: "Treat the father sample as incorrect because all paternal chrX-displayed calls in sons are artefacts.",
          isCorrect: false,
          feedback:
            "Not quite. In PAR regions, paternal transmission to a male child can be biologically valid.",
        },
      ],
      teachingPoint:
        "Pseudoautosomal regions are shared between X and Y, so they do not follow simple non-PAR X-linked inheritance rules.",
    },
    {
      id: "checkpoint-2",
      title: "Checkpoint 2 — Identify the strongest candidate",
      context:
        "Candidate 1 is a rare stop-gained variant in a dosage-sensitive pseudoautosomal gene. The phenotype fits, the technical evidence is strong, and paternal transmission is plausible because the site is in PAR1.",
      question:
        "Why is Candidate 1 the strongest current candidate?",
      options: [
        {
          label: "A",
          text: "Because all variants displayed on chrX should be treated as diagnostic when the proband is male.",
          isCorrect: false,
          feedback:
            "Not quite. The strength comes from phenotype, mechanism, dosage sensitivity, technical evidence, and correct PAR interpretation, not simply chrX location.",
        },
        {
          label: "B",
          text: "Because pseudoautosomal variants are usually benign and therefore easy to interpret.",
          isCorrect: false,
          feedback:
            "Not quite. PAR variants can be clinically relevant, especially in dosage-sensitive genes.",
        },
        {
          label: "C",
          text: "Because phenotype fit, loss-of-function mechanism, dosage sensitivity, rarity, technical confidence, and pseudoautosomal inheritance all align.",
          isCorrect: true,
          feedback:
            "Correct. Candidate 1 has the strongest overall evidence pattern in this case.",
        },
      ],
      teachingPoint:
        "Correct sex chromosome interpretation can reveal a strong candidate that might otherwise be dismissed incorrectly.",
    },
    {
      id: "checkpoint-3",
      title: "Checkpoint 3 — X-linked population evidence",
      context:
        "Candidate 2 is a technically clean non-PAR X-linked missense variant inherited from the mother. However, it has gnomAD AF 0.0018 and 38 male hemizygotes in the local population summary.",
      question:
        "Why is Candidate 2 weaker?",
      options: [
        {
          label: "A",
          text: "Because maternally inherited X-linked variants cannot contribute to disease in male probands.",
          isCorrect: false,
          feedback:
            "Not quite. Maternally inherited X-linked variants can be relevant in males. This specific variant is weakened by population and mechanism evidence.",
        },
        {
          label: "B",
          text: "Because population frequency and observed male hemizygotes weaken its plausibility for a rare severe X-linked developmental disorder.",
          isCorrect: true,
          feedback:
            "Correct. Observed male hemizygotes can be an important caution sign for severe X-linked disease claims.",
        },
        {
          label: "C",
          text: "Because technically clean variants should be deprioritised when a sex chromosome candidate is present.",
          isCorrect: false,
          feedback:
            "Not quite. Candidate 2 is technically real, but clinical plausibility is weak.",
        },
      ],
      teachingPoint:
        "For X-linked disease, observed male hemizygotes in population data can strongly weaken a candidate depending on severity and penetrance.",
    },
    {
      id: "checkpoint-4",
      title: "Checkpoint 4 — Y-linked findings need phenotype and gene evidence",
      context:
        "Candidate 3 is a paternally shared Y-linked variant. It is present in the father and male proband, but the gene has no strong established fit to the child’s developmental and skeletal presentation.",
      question:
        "What does Candidate 3 illustrate?",
      options: [
        {
          label: "A",
          text: "Paternal sharing of a Y-linked variant is expected and does not by itself prove disease causation.",
          isCorrect: true,
          feedback:
            "Correct. A Y-linked variant can be real and paternally transmitted, but it still needs gene-disease and phenotype support.",
        },
        {
          label: "B",
          text: "Any Y-linked variant in a male proband should be treated as the likely explanation.",
          isCorrect: false,
          feedback:
            "Not quite. Chromosome Y location alone is not enough for clinical relevance.",
        },
        {
          label: "C",
          text: "Y-linked calls should be dismissed because they are expected to be absent from maternal data.",
          isCorrect: false,
          feedback:
            "Not quite. True Y-linked variants are expected to be absent from the mother.",
        },
      ],
      teachingPoint:
        "Expected inheritance does not equal disease relevance. Y-linked findings still need mechanism and phenotype fit.",
    },
    {
      id: "checkpoint-5",
      title: "Checkpoint 5 — Safe service-style next step",
      context:
        "Candidate 1 is the strongest current candidate. Candidate 2 is technically real but too common and mechanism-limited. Candidate 3 is paternally shared but clinically weak. Candidate 4 has mapping/ploidy and splice-evidence limitations.",
      question:
        "What is the safest next step?",
      options: [
        {
          label: "A",
          text: "Dismiss Candidate 1 because the proband is male and the variant is displayed on chrX.",
          isCorrect: false,
          feedback:
            "Not quite. Candidate 1 lies in PAR1, so ordinary non-PAR X-linked assumptions would be misleading.",
        },
        {
          label: "B",
          text: "Prioritise Candidate 1 for review, document the pseudoautosomal inheritance logic, and explain why the other sex chromosome candidates are weaker.",
          isCorrect: true,
          feedback:
            "Correct. This is safe and reviewable because it prioritises the best candidate while making the sex chromosome reasoning explicit.",
        },
        {
          label: "C",
          text: "Prioritise Candidate 3 because father-to-son transmission provides the clearest inheritance evidence.",
          isCorrect: false,
          feedback:
            "Not quite. Father-to-son Y transmission can be expected and does not prove relevance.",
        },
      ],
      teachingPoint:
        "Safe sex chromosome interpretation means making the ploidy, PAR status, inheritance model, and technical limitations explicit.",
    },
  ],

  finalReflection:
    "A safe trainee-level conclusion would be that Candidate 1 is the strongest current candidate for further review because it is a rare stop-gained variant in a dosage-sensitive pseudoautosomal gene with strong phenotype fit, good technical support, and plausible paternal transmission through the pseudoautosomal region. The key pitfall is that it should not be dismissed or mislabelled using ordinary non-PAR X-linked inheritance rules. Candidate 2 is technically convincing as a maternally inherited non-PAR X-linked variant, but it is weakened by population frequency, observed male hemizygotes, and weaker mechanism fit. Candidate 3 is a real-looking Y-linked paternally shared variant, but paternal sharing is expected and the gene-disease evidence is weak. Candidate 4 has weak splice evidence and mapping/ploidy caveats. The safest next step is to prioritise Candidate 1, document the pseudoautosomal reasoning clearly, and escalate through the appropriate review pathway.",
};