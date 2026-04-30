export const case28 = {
  id: "case-28",
  slug: "variable-expressivity-family-case",
  title: "Case 28: Variable expressivity family case",
  level: "Intermediate",
  summary:
    "An interpretation-aware rare disease case focused on recognising when a mildly affected parent changes the interpretation of an inherited dominant variant.",

  visualisationExampleId: null,

  assessmentFocus: [
    "Variable expressivity reasoning",
    "Inherited dominant variant interpretation",
    "Family phenotype correlation",
    "Gene-disease validity",
    "Mechanism and domain fit",
    "Safe segregation caveats",
  ],

  guidedTutorMode: {
    type: "static-rule-based",
    description:
      "Uses built-in hints, checkpoint feedback, model answers, and self-check criteria to support safe case reasoning.",
  },

  phase5Assessment: {
    candidateRanking: {
      prompt:
        "Rank the findings from strongest to weakest based on phenotype fit, family phenotype correlation, gene-disease validity, inheritance, variable expressivity, mechanism, domain position, population evidence, technical confidence, and whether each finding should drive the case conclusion.",
      correctOrder: [
        "candidate-5",
        "candidate-1",
        "candidate-4",
        "candidate-3",
        "candidate-2",
      ],
      explanation:
        "Candidate 5 is strongest because the phenotype, established variable-expressivity disorder, mildly affected mother, relevant domain, missense mechanism, population absence, and technical evidence all align. Candidate 1 is technically convincing and apparently de novo, but NDDVEX1 has limited/emerging gene-disease evidence, so it should not automatically outrank Candidate 5. Candidate 4 has some family-context interest because it is inherited from the mildly affected mother, but BROADVEX8 has weaker gene-disease validity and the variant is present in population data. Candidate 3 is a technically convincing canonical splice variant in a recessive gene, but only one inherited heterozygous allele is identified, so it is incomplete as an explanation. Candidate 2 is weakest because it is technically fragile despite appearing de novo in a potentially relevant epilepsy gene.",
    },

    escalationDecision: {
      prompt:
        "Choose the safest next action for the strongest finding in this case.",
      options: [
        {
          id: "dismiss-inherited-finding",
          label: "A",
          decision:
            "Dismiss Candidate 5 because it is inherited from the mother rather than being de novo.",
          isBest: false,
          feedback:
            "Review this choice. Inherited dominant variants are often weaker when the parent is unaffected, but here the mother has overlapping mild features and the disorder has variable expressivity.",
        },
        {
          id: "prioritise-candidate-5",
          label: "B",
          decision:
            "Prioritise Candidate 5 for formal review, documenting the mother’s overlapping phenotype and the variable-expressivity context.",
          isBest: true,
          feedback:
            "Best decision. Candidate 5 has the strongest overall evidence pattern, and the mother’s mild overlapping phenotype supports rather than excludes the finding.",
        },
        {
          id: "prioritise-de-novo-only",
          label: "C",
          decision:
            "Prioritise Candidate 1 instead because de novo status should always outweigh family segregation evidence.",
          isBest: false,
          feedback:
            "Review this choice. De novo status is important, but it should not override weak gene-disease validity when another candidate fits an established variable-expressivity disorder better.",
        },
      ],
    },

    writtenSummary: {
      prompt:
        "Write a short trainee-level handover summary explaining the strongest candidate, how the mother’s mild features affect interpretation, why the other candidates are weaker, and what caveats should be documented.",
      checklist: [
        "Names Candidate 5 as the strongest current finding.",
        "Explains that VAREX1 is associated with variable expressivity.",
        "Mentions that the variant is inherited from the mother.",
        "Mentions that the mother has overlapping mild features: learning difficulties, joint laxity, and childhood speech delay.",
        "Uses supportive evidence for Candidate 5, including phenotype fit, domain location, mechanism, population absence, and technical confidence.",
        "Avoids dismissing Candidate 5 solely because it is inherited.",
        "Explains why Candidate 1 is weaker despite de novo status because NDDVEX1 has limited gene-disease validity.",
        "Explains why Candidate 4 is weaker despite family overlap because BROADVEX8 has weaker gene validity and population support.",
        "Explains why Candidate 3 is incomplete because only one allele is identified in a recessive gene.",
        "Explains why Candidate 2 is weaker because of technical fragility.",
        "Recommends formal review/escalation rather than treating Candidate 5 as an automatic final diagnosis.",
      ],
      modelAnswer:
        "Candidate 5 is the strongest current finding for formal review. The variant is inherited from the mother, but this does not automatically weaken the finding because VAREX1-related disease is described as a variable-expressivity neurodevelopmental-connective tissue syndrome, and the mother has overlapping mild features including learning difficulties, joint laxity, and childhood speech delay. The proband’s developmental delay, speech delay, seizures, joint laxity and learning difficulties fit the reported disease spectrum, and the variant is absent from population data, lies in the relevant extracellular matrix interaction domain, matches the reported missense mechanism, and has strong technical support in both the proband and mother. Candidate 1 is technically convincing and apparently de novo, but the gene-disease evidence for NDDVEX1 is limited. Candidate 4 has some family-context interest, but BROADVEX8 has weaker gene validity and the variant is present in population data. Candidate 3 is a technically convincing single splice allele in a recessive gene, but it does not currently provide a full biallelic explanation. Candidate 2 is interesting but technically fragile. The safest next step is to prioritise Candidate 5 for formal review, document the family phenotype correlation, and avoid treating inherited status as an automatic exclusion.",
    },
  },

  reasoningScorecard: [
    {
      category: "Variable expressivity reasoning",
      maxScore: 2,
      expectation:
        "Recognises that the same inherited dominant variant can produce different severity in parent and child when variable expressivity is known.",
    },
    {
      category: "Family phenotype correlation",
      maxScore: 2,
      expectation:
        "Uses the mother’s mild learning difficulties, joint laxity, and childhood speech delay as relevant family-context evidence rather than ignoring or overclaiming it.",
    },
    {
      category: "Candidate prioritisation",
      maxScore: 2,
      expectation:
        "Prioritises the finding with the strongest convergence across phenotype, family features, gene validity, mechanism, domain, rarity, and technical evidence.",
    },
    {
      category: "Evidence interpretation",
      maxScore: 2,
      expectation:
        "Distinguishes an established variable-expressivity gene from a weak de novo gene, a technically fragile de novo call, an incomplete recessive finding, and a weaker inherited candidate.",
    },
    {
      category: "Safe escalation",
      maxScore: 2,
      expectation:
        "Recommends formal review and careful family phenotype documentation without overcalling the inherited dominant finding as an automatic final diagnosis.",
    },
  ],

  patient: {
    age: 9,
    sex: "Female",
  },

  referralReason:
    "A 9-year-old girl has been referred for rare disease genome analysis because of developmental delay, speech delay, mild seizures, joint laxity, and learning difficulties.",

  testType: "Rare disease trio genome sequencing",

  familyStructure:
    "The proband and both biological parents have been tested. The mother is described on the referral form as having a history of mild learning difficulties, joint laxity, and childhood speech delay, but she has never had a molecular diagnosis.",

  history: [
    "Global developmental delay noted in early childhood",
    "Speech delay requiring therapy",
    "Mild seizures beginning at age 6",
    "Joint laxity noted by the clinical team",
    "Learning difficulties requiring school support",
    "No known previous molecular diagnosis",
  ],

  phenotype: [
    "Global developmental delay",
    "Speech delay",
    "Mild seizures",
    "Joint laxity",
    "Learning difficulties",
  ],

  familyHistory:
    "The mother is reported to have mild learning difficulties, joint laxity, and a history of childhood speech delay. The father is reportedly unaffected. No other clearly affected relatives are documented.",

  serviceContext: [
    "The analysis is being performed in a rare disease service context.",
    "The key issue is variable expressivity.",
    "An inherited dominant variant from a parent is often weaker if the parent is clearly unaffected, but the reasoning changes if the parent has overlapping mild features.",
    "Your task is to decide whether the inherited variant fits a variable-expressivity disorder and whether it is stronger than de novo or technically tempting alternatives.",
  ],

  candidateFindings: [
    {
      id: "candidate-1",
      label: "Candidate 1",
      gene: "NDDVEX1",
      variant: "chr2:77190442 C>T",
      zygosity: "Heterozygous",
      consequence: "missense_variant",
      inheritanceSignal: "Apparent de novo, but gene-disease evidence is limited",
      clinicalFit:
        "NDDVEX1 has a proposed neurodevelopmental association, but the gene-disease relationship is limited and the variant lies outside any known recurrent functional region.",
      rawEvidence: `GENE: NDDVEX1
Known disease association: possible autosomal dominant neurodevelopmental disorder
Reported inheritance: autosomal dominant proposed in limited reports
Known mechanism: uncertain
Gene-disease validity in local summary: limited / emerging

Variant:
chr2:77190442 C>T
Transcript: NM_280001.2
HGVS: c.944C>T p.(Pro315Leu)
Consequence: missense_variant
Protein domain: outside known recurrent functional region in local summary

VCF-style fields:
QUAL=812
FILTER=PASS
INFO: DP=49;MQ=60;QD=16.6;SOR=0.82
FORMAT: GT:AD:DP:GQ

Proband: 0/1:24,25:49:99
Mother: 0/0:42,0:42:99
Father: 0/0:41,0:41:99

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
LOEUF = 0.66
pLI = 0.24
Missense/domain note: no strong local missense constraint signal in affected region

ClinVar-style summary:
No exact matching variant record found in local summary
Only limited reports link NDDVEX1 to neurodevelopmental phenotypes
No expert-curated definitive gene-disease relationship in local summary`,
      concern:
        "This is technically convincing and appears de novo, but the gene-disease evidence is weak. It should not automatically outrank an inherited variant in a better-established variable-expressivity gene.",
    },
    {
      id: "candidate-2",
      label: "Candidate 2",
      gene: "SEIZVAR3",
      variant: "chr8:119004221 A>G",
      zygosity: "Heterozygous",
      consequence: "missense_variant",
      inheritanceSignal: "Apparent de novo, but technically fragile",
      clinicalFit:
        "SEIZVAR3 is associated with a developmental epilepsy phenotype, but the variant has weak allele support and read-level artefact concerns.",
      rawEvidence: `GENE: SEIZVAR3
Known disease association: autosomal dominant developmental epilepsy
Reported inheritance: autosomal dominant
Known mechanism: de novo missense variants in constrained domains

Variant:
chr8:119004221 A>G
Transcript: NM_280002.3
HGVS: c.1259A>G p.(Tyr420Cys)
Consequence: missense_variant
Protein domain: near functional domain, but not a known recurrent hotspot

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
Second caller: not detected
Manual read-level review recommended before prioritisation

Population:
gnomAD AF = not observed
gnomAD allele count = 0

Constraint:
LOEUF = 0.39
pLI = 0.82

ClinVar-style summary:
No exact matching variant record found in local summary
Nearby missense variants in the gene have been submitted in epilepsy phenotypes, but this exact variant is not summarised`,
      concern:
        "This is interesting because it appears de novo in a relevant gene, but the raw technical evidence is too weak to prioritise confidently.",
    },
    {
      id: "candidate-3",
      label: "Candidate 3",
      gene: "RECESSVEX4",
      variant: "chr15:118809331 G>A",
      zygosity: "Heterozygous",
      consequence: "splice_acceptor_variant",
      inheritanceSignal: "Inherited from unaffected father",
      clinicalFit:
        "RECESSVEX4 is associated with an autosomal recessive neurodevelopmental disorder. A canonical splice acceptor variant could be relevant, but only one inherited heterozygous allele is shown.",
      rawEvidence: `GENE: RECESSVEX4
Known disease association: autosomal recessive neurodevelopmental disorder
Reported inheritance: autosomal recessive
Known mechanism: biallelic loss-of-function

Variant:
chr15:118809331 G>A
Transcript: NM_280003.4
HGVS: c.744-2G>A
Consequence: splice_acceptor_variant
Splice position: canonical -2 acceptor site
Predicted effect: likely acceptor splice-site disruption

VCF-style fields:
QUAL=788
FILTER=PASS
INFO: DP=48;MQ=60;QD=16.4;SOR=0.73
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
Deep intronic/regulatory variants not assessed in this summary

Population:
gnomAD AF = 0.000004
gnomAD allele count = 1
No homozygotes observed in local summary

Constraint:
LOEUF = 0.34
pLI = 0.77

ClinVar-style summary:
No exact matching variant record found in local summary
Other biallelic splice/truncating variants in RECESSVEX4 have been submitted in affected individuals`,
      concern:
        "This is technically convincing as a single inherited splice variant, but it is incomplete as a recessive explanation without a second relevant allele.",
    },
    {
      id: "candidate-4",
      label: "Candidate 4",
      gene: "BROADVEX8",
      variant: "chr11:44022991 T>C",
      zygosity: "Heterozygous",
      consequence: "missense_variant",
      inheritanceSignal: "Inherited from mildly affected mother",
      clinicalFit:
        "BROADVEX8 has a broad neurodevelopmental association in limited reports. The mother has some overlapping features, but the gene-disease validity is weaker and the variant is present in population data.",
      rawEvidence: `GENE: BROADVEX8
Known disease association: broad neurodevelopmental association in limited reports
Reported inheritance: autosomal dominant proposed
Known mechanism: uncertain
Gene-disease validity in local summary: limited

Variant:
chr11:44022991 T>C
Transcript: NM_280004.1
HGVS: c.701T>C p.(Leu234Pro)
Consequence: missense_variant
Protein domain: outside known recurrent functional region in local summary

VCF-style fields:
QUAL=650
FILTER=PASS
INFO: DP=46;MQ=60;QD=14.1;SOR=0.85
FORMAT: GT:AD:DP:GQ

Proband: 0/1:23,23:46:99
Mother: 0/1:22,22:44:99
Father: 0/0:39,0:39:99

Read-level notes:
ALT reads seen on both forward and reverse strands in proband and mother
ALT reads distributed across read positions
No local mapping warning
No soft-clipping concern

Family phenotype note:
Mother has mild learning difficulties and joint laxity
However, the local summary does not establish BROADVEX8 as a strong variable-expressivity gene

Population:
gnomAD AF = 0.0009
gnomAD allele count = 240
Homozygotes observed in population summary = 0

Constraint:
LOEUF = 0.81
pLI = 0.09

ClinVar-style summary:
No exact matching pathogenic record found in local summary
Gene-disease relationship remains limited and broad
Several submitted variants in this gene are classified as uncertain significance`,
      concern:
        "This is technically real and the family history is mildly interesting, but the gene-disease validity and population evidence make it weaker than the better-established variable-expressivity candidate.",
    },
    {
      id: "candidate-5",
      label: "Candidate 5",
      gene: "VAREX1",
      variant: "chr6:55249071 C>T",
      zygosity: "Heterozygous",
      consequence: "missense_variant",
      inheritanceSignal:
        "Inherited from mother, who has mild overlapping features",
      clinicalFit:
        "VAREX1 is associated with an autosomal dominant variable-expressivity neurodevelopmental-connective tissue syndrome. Reported features include developmental delay, speech delay, learning difficulties, joint laxity, seizures in some individuals, and mild dysmorphic features.",
      rawEvidence: `GENE: VAREX1
Known disease association: autosomal dominant variable-expressivity neurodevelopmental-connective tissue syndrome
Reported inheritance: autosomal dominant
Known mechanism: damaging missense variants in a recurrent extracellular matrix interaction domain
Penetrance / expressivity note: variable expressivity reported; mildly affected carrier parents described in local summary

Variant:
chr6:55249071 C>T
Transcript: NM_280005.5
HGVS: c.1642C>T p.(Arg548Cys)
Consequence: missense_variant
Protein domain: recurrent extracellular matrix interaction domain
Mechanism note: variant lies in the domain where disease-associated missense variants cluster

VCF-style fields:
QUAL=944
FILTER=PASS
INFO: DP=56;MQ=60;QD=16.9;SOR=0.72
FORMAT: GT:AD:DP:GQ

Proband: 0/1:28,28:56:99
Mother: 0/1:24,24:48:99
Father: 0/0:43,0:43:99

Read-level notes:
ALT reads seen on both forward and reverse strands in proband and mother
ALT reads distributed across read positions
High mapping quality for ALT-supporting reads
No local low-complexity warning
No pseudogene or segmental duplication warning
No concerning soft-clipping around the variant
Second caller: detected

Family phenotype note:
Mother is reported to have mild learning difficulties, joint laxity, and childhood speech delay
These features overlap with the VAREX1 disease spectrum in local summary
The proband appears more severely affected than the mother, consistent with reported variable expressivity

Population:
gnomAD AF = not observed
gnomAD allele count = 0

Constraint:
LOEUF = 0.44
pLI = 0.58
Missense/domain note: local summary highlights missense constraint in the extracellular matrix interaction domain

ClinVar-style summary:
No exact matching variant record found in local summary
Nearby missense variants in the same domain have been submitted as pathogenic/likely pathogenic in affected individuals
Local disease summary notes variable expressivity, including mildly affected carrier parents`,
      concern:
        "This is the strongest current candidate because the variant is technically convincing, absent from population data, lies in the relevant domain, matches the reported mechanism, and the mildly affected mother provides supportive family context rather than weakening the finding.",
    },
  ],

  decisionCheckpoints: [
    {
      id: "checkpoint-1",
      title: "Checkpoint 1 — Mild parental features change the inheritance interpretation",
      context:
        "Candidate 5 is inherited from the mother. The mother is not fully unaffected; she has mild learning difficulties, joint laxity, and childhood speech delay.",
      question:
        "How should this affect interpretation of Candidate 5?",
      options: [
        {
          label: "A",
          text: "It makes the variant automatically benign because inherited variants can never explain disease.",
          isCorrect: false,
          feedback:
            "Not quite. In a variable-expressivity disorder, an inherited variant from a mildly affected parent can be supportive rather than dismissive.",
        },
        {
          label: "B",
          text: "It supports possible segregation with variable expressivity, but the finding still needs review alongside gene, mechanism, population, and technical evidence.",
          isCorrect: true,
          feedback:
            "Correct. The mother’s mild overlapping features make inheritance more compatible with the disease model.",
        },
        {
          label: "C",
          text: "It proves the mother and child must have exactly the same severity.",
          isCorrect: false,
          feedback:
            "Not quite. Variable expressivity means relatives can carry the same variant but have different severity.",
        },
      ],
      teachingPoint:
        "Inherited dominant variants need careful family-phenotype review. Mild parental features can change candidate priority.",
    },
    {
      id: "checkpoint-2",
      title: "Checkpoint 2 — Identify the strongest candidate",
      context:
        "Candidate 5 is in an established variable-expressivity gene, absent from population data, in the relevant domain, technically strong, and inherited from a mother with overlapping mild features.",
      question:
        "Why is Candidate 5 the strongest current candidate?",
      options: [
        {
          label: "A",
          text: "Because the phenotype, mechanism, domain position, population absence, technical evidence, and family features all align.",
          isCorrect: true,
          feedback:
            "Correct. Candidate 5 has the strongest overall evidence pattern.",
        },
        {
          label: "B",
          text: "Because inherited variants are always stronger than de novo variants.",
          isCorrect: false,
          feedback:
            "Not quite. Candidate 5 is stronger because of the full evidence pattern, not simply because it is inherited.",
        },
        {
          label: "C",
          text: "Because every variant in VAREX1 is pathogenic.",
          isCorrect: false,
          feedback:
            "Not quite. The specific variant still needs evidence from domain, rarity, mechanism, phenotype, and technical confidence.",
        },
      ],
      teachingPoint:
        "The strongest candidate is the one whose total evidence pattern fits the case and family context.",
    },
    {
      id: "checkpoint-3",
      title: "Checkpoint 3 — De novo in a weak gene",
      context:
        "Candidate 1 is technically convincing and appears de novo, but NDDVEX1 has limited/emerging gene-disease evidence.",
      question:
        "Why should Candidate 1 not automatically outrank Candidate 5?",
      options: [
        {
          label: "A",
          text: "Because de novo variants are never relevant.",
          isCorrect: false,
          feedback:
            "Not quite. De novo variants can be very important, but they still need gene-disease and mechanism support.",
        },
        {
          label: "B",
          text: "Because a de novo variant in a weakly supported gene may be less convincing than an inherited variant in an established variable-expressivity gene with family overlap.",
          isCorrect: true,
          feedback:
            "Correct. Inheritance is only one part of prioritisation.",
        },
        {
          label: "C",
          text: "Because Candidate 1 has poor read evidence.",
          isCorrect: false,
          feedback:
            "Not quite. Candidate 1 is technically strong. Its limitation is gene-disease validity.",
        },
      ],
      teachingPoint:
        "De novo status is powerful, but it does not replace gene-disease validity and mechanism evidence.",
    },
    {
      id: "checkpoint-4",
      title: "Checkpoint 4 — Do not mistake weak family overlap for strong evidence",
      context:
        "Candidate 4 is also inherited from the mildly affected mother, but BROADVEX8 has limited gene-disease evidence and the variant is present in population data.",
      question:
        "Why is Candidate 4 weaker than Candidate 5?",
      options: [
        {
          label: "A",
          text: "Because family overlap alone is not enough when gene-disease validity, population evidence, and mechanism support are weak.",
          isCorrect: true,
          feedback:
            "Correct. Candidate 4 has some family-context interest, but the gene and variant evidence are not strong enough.",
        },
        {
          label: "B",
          text: "Because inherited variants from mildly affected parents are always benign.",
          isCorrect: false,
          feedback:
            "Not quite. Candidate 5 shows that inherited variants can be relevant in variable-expressivity disorders.",
        },
        {
          label: "C",
          text: "Because population frequency is irrelevant when a parent has symptoms.",
          isCorrect: false,
          feedback:
            "Not quite. Population evidence still matters.",
        },
      ],
      teachingPoint:
        "Family overlap can support a candidate only when the gene and variant evidence are also credible.",
    },
    {
      id: "checkpoint-5",
      title: "Checkpoint 5 — Safe service-style next step",
      context:
        "Candidate 5 is the strongest current candidate. Candidate 1 is de novo but in a weaker gene. Candidate 2 is technically fragile. Candidate 3 is incomplete recessive evidence. Candidate 4 has weaker gene/population support.",
      question:
        "What is the safest next step?",
      options: [
        {
          label: "A",
          text: "Dismiss Candidate 5 because it is inherited from a parent.",
          isCorrect: false,
          feedback:
            "Not quite. The mother’s mild overlapping features make this inherited finding more plausible.",
        },
        {
          label: "B",
          text: "Prioritise Candidate 5 for review, document the mother’s overlapping phenotype, and explain why the other candidates are weaker.",
          isCorrect: true,
          feedback:
            "Correct. This is safe and reviewable because it uses the family context without over-claiming.",
        },
        {
          label: "C",
          text: "Report Candidate 1 instead because de novo status always outweighs family segregation.",
          isCorrect: false,
          feedback:
            "Not quite. Candidate 1 has weaker gene-disease evidence.",
        },
      ],
      teachingPoint:
        "Safe variable-expressivity reasoning means using family phenotype carefully rather than treating inherited status as automatic exclusion.",
    },
  ],

  finalReflection:
    "A safe trainee-level conclusion would be that Candidate 5 is the strongest current candidate for further review because the phenotype, gene-disease relationship, missense/domain mechanism, population absence, technical evidence, and family context all align. The mother’s mild learning difficulties, joint laxity, and childhood speech delay make the inherited status compatible with variable expressivity rather than automatically weakening the candidate. Candidate 1 is technically convincing and appears de novo, but the gene-disease relationship is limited. Candidate 2 is technically fragile. Candidate 3 is a single allele in a recessive gene and does not currently explain the case alone. Candidate 4 has some family-context interest but weaker gene validity and population support. The safest next step is to prioritise Candidate 5, document the family phenotype carefully, and escalate through the appropriate review pathway.",
};