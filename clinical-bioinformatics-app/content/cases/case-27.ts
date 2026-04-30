export const case27 = {
  id: "case-27",
  slug: "reduced-penetrance-inherited-dominant-case",
  title: "Case 27: Reduced penetrance inherited dominant case",
  level: "Intermediate",
  summary:
    "An interpretation-aware rare disease case focused on recognising when an inherited dominant variant from an apparently unaffected parent may still be relevant because of reduced penetrance or variable expressivity.",

  visualisationExampleId: null,

  assessmentFocus: [
    "Reduced penetrance reasoning",
    "Variable expressivity",
    "Inherited dominant variant interpretation",
    "Gene-disease validity",
    "Mechanism and domain fit",
    "Safe family-context caveats",
  ],

  guidedTutorMode: {
    type: "static-rule-based",
    description:
      "Uses built-in hints, checkpoint feedback, model answers, and self-check criteria to support safe case reasoning.",
  },

  phase5Assessment: {
    candidateRanking: {
      prompt:
        "Rank the findings from strongest to weakest based on phenotype fit, gene-disease validity, inheritance, reduced penetrance, mechanism, domain position, population evidence, technical confidence, and whether each finding should drive the case conclusion.",
      correctOrder: [
        "candidate-3",
        "candidate-1",
        "candidate-4",
        "candidate-2",
      ],
      explanation:
        "Candidate 3 is strongest because the phenotype, established reduced-penetrance disorder, missense mechanism, relevant domain, population absence, and technical evidence all align. Its inheritance from a reportedly unaffected mother is an important caveat, but it does not exclude the finding because reduced penetrance and variable expressivity are known for the disorder. Candidate 1 is technically convincing and apparently de novo, but the gene-disease relationship is limited/emerging, so it should not automatically outrank Candidate 3. Candidate 4 is a technically convincing canonical splice variant in a recessive ataxia gene, but only one inherited heterozygous allele is identified, so it is incomplete as an explanation. Candidate 2 is weakest because it is inherited, relatively frequent, and the stop-gained consequence does not fit the reported recurrent missense disease mechanism well.",
    },

    escalationDecision: {
      prompt:
        "Choose the safest next action for the strongest finding in this case.",
      options: [
        {
          id: "dismiss-inherited-dominant",
          label: "A",
          decision:
            "Dismiss Candidate 3 because any dominant variant inherited from an apparently unaffected parent is not relevant.",
          isBest: false,
          feedback:
            "Review this choice. Inherited dominant variants are often weaker than de novo variants, but they should not be automatically dismissed when the disorder has known reduced penetrance or variable expressivity.",
        },
        {
          id: "prioritise-candidate-3",
          label: "B",
          decision:
            "Prioritise Candidate 3 for formal review, documenting the reduced-penetrance context and the reportedly unaffected carrier parent as a caveat.",
          isBest: true,
          feedback:
            "Best decision. Candidate 3 has the strongest overall evidence pattern, but the inherited status and parental phenotype context must be documented clearly.",
        },
        {
          id: "force-de-novo-candidate",
          label: "C",
          decision:
            "Prioritise Candidate 1 instead because a de novo variant should always outrank an inherited variant.",
          isBest: false,
          feedback:
            "Review this choice. De novo status is important, but it should not override weak gene-disease validity when another candidate fits an established reduced-penetrance disorder better.",
        },
      ],
    },

    writtenSummary: {
      prompt:
        "Write a short trainee-level handover summary explaining the strongest candidate, why inheritance from an apparently unaffected parent does not automatically exclude it, why the other candidates are weaker, and what caveats should be documented.",
      checklist: [
        "Names Candidate 3 as the strongest current finding.",
        "Explains that RPEN1 is associated with reduced penetrance and variable expressivity.",
        "Mentions that the variant is inherited from the mother, who is described as unaffected.",
        "Explains that the parental phenotype information is limited and should be reviewed carefully.",
        "Uses supportive evidence for Candidate 3, including phenotype fit, domain location, missense mechanism, population absence, and technical confidence.",
        "Avoids dismissing Candidate 3 solely because it is inherited.",
        "Explains why Candidate 1 is weaker despite de novo status because ATAXNEW1 has limited gene-disease validity.",
        "Explains why Candidate 2 is weaker because of mechanism mismatch, inheritance, and population evidence.",
        "Explains why Candidate 4 is incomplete because only one allele is identified in a recessive gene.",
        "Recommends formal review/escalation rather than treating Candidate 3 as an automatic final diagnosis.",
      ],
      modelAnswer:
        "Candidate 3 is the strongest current finding for formal review. Although it is inherited from the mother, who is described as unaffected on the referral form, RPEN1-related disease is described as having reduced penetrance and variable expressivity, so inherited status should be treated as an important caveat rather than an automatic exclusion. The finding is supported by the patient’s episodic ataxia, intermittent abnormal movements and migraine-like episodes, the relevant ion-channel regulatory domain, the known missense mechanism, absence from population data, and strong technical evidence in both the proband and mother. The mother’s phenotype has not been assessed in detail in the referral information, so family/parental phenotype context should be reviewed carefully. Candidate 1 is technically convincing and apparently de novo, but ATAXNEW1 has limited/emerging gene-disease validity. Candidate 2 is technically real but weakened by mechanism mismatch, inheritance and population evidence. Candidate 4 is a credible single splice allele in a recessive gene, but it does not currently provide a full biallelic explanation. The safest next step is to prioritise Candidate 3 for formal review while documenting the reduced-penetrance inheritance caveat and the reasons the other candidates were deprioritised.",
    },
  },

  reasoningScorecard: [
    {
      category: "Reduced penetrance reasoning",
      maxScore: 2,
      expectation:
        "Recognises that an inherited dominant variant from an apparently unaffected parent can remain relevant when reduced penetrance or variable expressivity is known.",
    },
    {
      category: "Candidate prioritisation",
      maxScore: 2,
      expectation:
        "Prioritises the finding with the strongest convergence across phenotype, established gene-disease relationship, mechanism, domain, rarity, and technical evidence.",
    },
    {
      category: "Inheritance caveats",
      maxScore: 2,
      expectation:
        "Documents the inherited status and limited parental phenotype information as important caveats rather than using them as automatic exclusion criteria.",
    },
    {
      category: "Gene-disease and mechanism reasoning",
      maxScore: 2,
      expectation:
        "Distinguishes an established reduced-penetrance gene from a de novo variant in a weakly supported gene, a mechanism-mismatched variant, and an incomplete recessive finding.",
    },
    {
      category: "Safe escalation",
      maxScore: 2,
      expectation:
        "Recommends formal review and possible family phenotype/segregation context review without overcalling the inherited dominant finding as a final diagnosis.",
    },
  ],

  patient: {
    age: 12,
    sex: "Male",
  },

  referralReason:
    "A 12-year-old boy has been referred for rare disease genome analysis because of episodic ataxia, intermittent abnormal movements, mild developmental delay, migraine-like episodes, and learning difficulties.",

  testType: "Rare disease trio genome sequencing",

  familyStructure:
    "The proband and both biological parents have been tested. Both parents are described as unaffected on the referral form, although detailed neurological assessment of the parents is not provided.",

  history: [
    "Episodic unsteady gait beginning in childhood",
    "Intermittent abnormal movements, especially during illness or tiredness",
    "Mild developmental delay",
    "Learning difficulties requiring school support",
    "Migraine-like episodes reported by the clinical team",
    "No known previous molecular diagnosis",
  ],

  phenotype: [
    "Episodic ataxia",
    "Intermittent abnormal movements",
    "Mild developmental delay",
    "Migraine-like episodes",
    "Learning difficulties",
  ],

  familyHistory:
    "Both parents are reportedly unaffected. The referral form does not include a detailed neurological history for either parent. No confirmed family history of episodic ataxia or movement disorder is documented.",

  serviceContext: [
    "The analysis is being performed in a rare disease service context.",
    "The key issue is reduced penetrance and variable expressivity.",
    "An inherited dominant variant from an apparently unaffected parent is often weaker than a de novo variant, but it is not automatically irrelevant.",
    "Some dominant neurological conditions have reduced penetrance, mild adult presentations, or variable expression in relatives.",
    "Your task is to decide whether an inherited variant remains plausible after considering phenotype, inheritance, mechanism, population evidence, technical confidence, and known penetrance pattern.",
  ],

  candidateFindings: [
    {
      id: "candidate-1",
      label: "Candidate 1",
      gene: "ATAXNEW1",
      variant: "chr4:77190442 C>T",
      zygosity: "Heterozygous",
      consequence: "missense_variant",
      inheritanceSignal: "Apparent de novo with good parental coverage",
      clinicalFit:
        "ATAXNEW1 has a proposed association with episodic ataxia, but the gene-disease relationship is limited and the variant is outside any known recurrent functional region.",
      rawEvidence: `GENE: ATAXNEW1
Known disease association: possible episodic ataxia-neurodevelopmental disorder
Reported inheritance: autosomal dominant proposed in limited reports
Known mechanism: uncertain
Gene-disease validity in local summary: limited / emerging

Variant:
chr4:77190442 C>T
Transcript: NM_270001.2
HGVS: c.899C>T p.(Pro300Leu)
Consequence: missense_variant
Protein domain: outside known recurrent functional region in local summary

VCF-style fields:
QUAL=812
FILTER=PASS
INFO: DP=49;MQ=60;QD=16.6;SOR=0.82
FORMAT: GT:AD:DP:GQ

Proband: 0/1:24,25:49:99
Mother: 0/0:41,0:41:99
Father: 0/0:42,0:42:99

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
LOEUF = 0.63
pLI = 0.26
Missense/domain note: no strong local missense constraint signal in the affected region

ClinVar-style summary:
No exact matching variant record found in local summary
Only limited reports link ATAXNEW1 to episodic neurological phenotypes
No expert-curated definitive gene-disease relationship in local summary`,
      concern:
        "This is technically convincing and appears de novo, but the gene-disease evidence is weak. It should not automatically outrank a stronger inherited candidate in an established reduced-penetrance gene.",
    },
    {
      id: "candidate-2",
      label: "Candidate 2",
      gene: "MOVREL4",
      variant: "chr9:118772044 G>A",
      zygosity: "Heterozygous",
      consequence: "stop_gained",
      inheritanceSignal: "Inherited from unaffected father",
      clinicalFit:
        "MOVREL4 has a possible movement disorder association, but the known disease mechanism is recurrent missense variation rather than loss-of-function, and the inherited truncating variant is seen in population data.",
      rawEvidence: `GENE: MOVREL4
Known disease association: possible autosomal dominant movement disorder
Reported inheritance: autosomal dominant proposed
Known mechanism: recurrent missense variants in a motor regulatory domain
Loss-of-function evidence: not established in local summary

Variant:
chr9:118772044 G>A
Transcript: NM_270002.4
HGVS: c.1006G>A p.(Trp336*)
Consequence: stop_gained
Predicted effect: premature termination codon

VCF-style fields:
QUAL=690
FILTER=PASS
INFO: DP=45;MQ=60;QD=15.3;SOR=0.76
FORMAT: GT:AD:DP:GQ

Proband: 0/1:23,22:45:99
Mother: 0/0:39,0:39:99
Father: 0/1:20,21:41:99

Read-level notes:
ALT reads seen on both forward and reverse strands
ALT reads distributed across read positions
No local mapping warning
No soft-clipping concern

Population:
gnomAD AF = 0.0008
gnomAD allele count = 210
Homozygotes observed in population summary = 0

Constraint:
LOEUF = 0.89
pLI = 0.04

ClinVar-style summary:
No exact matching pathogenic record found in local summary
Pathogenic reports in MOVREL4 mainly involve recurrent missense variants, not truncating variants`,
      concern:
        "This is technically real, but it is weak because the variant consequence does not fit the reported mechanism, it is inherited from an unaffected parent, and the population evidence is not strong for a rare severe dominant explanation.",
    },
    {
      id: "candidate-3",
      label: "Candidate 3",
      gene: "RPEN1",
      variant: "chr12:55249071 T>C",
      zygosity: "Heterozygous",
      consequence: "missense_variant",
      inheritanceSignal:
        "Inherited from mother; parent reported unaffected, reduced penetrance described for this disorder",
      clinicalFit:
        "RPEN1 is associated with an autosomal dominant episodic ataxia and paroxysmal movement disorder with variable expressivity and reduced penetrance. The reported phenotype includes episodic ataxia, abnormal movements, migraine-like episodes, and variable developmental features.",
      rawEvidence: `GENE: RPEN1
Known disease association: autosomal dominant episodic ataxia / paroxysmal movement disorder
Reported inheritance: autosomal dominant with reduced penetrance and variable expressivity
Known mechanism: recurrent damaging missense variants in ion-channel regulatory domain

Variant:
chr12:55249071 T>C
Transcript: NM_270003.5
HGVS: c.2573T>C p.(Leu858Pro)
Consequence: missense_variant
Protein domain: recurrent ion-channel regulatory domain
Mechanism note: variant lies in the domain where disease-associated missense variants cluster

VCF-style fields:
QUAL=940
FILTER=PASS
INFO: DP=54;MQ=60;QD=17.4;SOR=0.70
FORMAT: GT:AD:DP:GQ

Proband: 0/1:27,27:54:99
Mother: 0/1:24,23:47:99
Father: 0/0:43,0:43:99

Read-level notes:
ALT reads seen on both forward and reverse strands in proband and mother
ALT reads distributed across read positions
High mapping quality for ALT-supporting reads
No local low-complexity warning
No pseudogene or segmental duplication warning
No concerning soft-clipping around the variant
Second caller: detected

Family / penetrance note:
Mother is described as unaffected on the referral form
No detailed parental neurological assessment is included
Local disease summary notes reduced penetrance and variable expressivity, including mildly affected or apparently unaffected carrier relatives

Population:
gnomAD AF = not observed
gnomAD allele count = 0

Constraint:
LOEUF = 0.52
pLI = 0.46
Missense/domain note: local summary highlights missense constraint in the regulatory domain

ClinVar-style summary:
Exact variant not found in local summary
Nearby and same-domain missense variants in RPEN1 have been submitted as pathogenic/likely pathogenic in episodic ataxia and paroxysmal movement disorder phenotypes
Disease summary notes reduced penetrance and variable expressivity`,
      concern:
        "This is the strongest current candidate despite being inherited, because the disorder has reduced penetrance/variable expressivity and the variant fits the phenotype, domain, mechanism, population evidence, and technical evidence. The inherited status should be documented as a caveat, not used as an automatic exclusion.",
    },
    {
      id: "candidate-4",
      label: "Candidate 4",
      gene: "RECESSAT2",
      variant: "chr2:118809331 A>G",
      zygosity: "Heterozygous",
      consequence: "splice_acceptor_variant",
      inheritanceSignal: "Inherited from unaffected father",
      clinicalFit:
        "RECESSAT2 is associated with an autosomal recessive childhood ataxia syndrome. A canonical splice acceptor variant could be relevant, but only one inherited heterozygous allele is shown.",
      rawEvidence: `GENE: RECESSAT2
Known disease association: autosomal recessive childhood ataxia syndrome
Reported inheritance: autosomal recessive
Known mechanism: biallelic loss-of-function

Variant:
chr2:118809331 A>G
Transcript: NM_270004.4
HGVS: c.744-2A>G
Consequence: splice_acceptor_variant
Splice position: canonical -2 acceptor site
Predicted effect: likely acceptor splice-site disruption

VCF-style fields:
QUAL=788
FILTER=PASS
INFO: DP=47;MQ=60;QD=16.8;SOR=0.74
FORMAT: GT:AD:DP:GQ

Proband: 0/1:24,23:47:99
Mother: 0/0:40,0:40:99
Father: 0/1:21,22:43:99

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
LOEUF = 0.35
pLI = 0.74

ClinVar-style summary:
No exact matching variant record found in local summary
Other biallelic splice/truncating variants in RECESSAT2 have been submitted in affected individuals`,
      concern:
        "This is technically convincing as a single inherited splice variant, but it is incomplete as a recessive explanation without a second relevant allele.",
    },
  ],

  decisionCheckpoints: [
    {
      id: "checkpoint-1",
      title: "Checkpoint 1 — Inherited does not always mean irrelevant",
      context:
        "Candidate 3 is inherited from a parent described as unaffected. However, RPEN1-related disease is described as having reduced penetrance and variable expressivity.",
      question:
        "What is the safest interpretation of Candidate 3’s inheritance?",
      options: [
        {
          label: "A",
          text: "Dismiss it automatically because inherited dominant variants can never cause disease.",
          isCorrect: false,
          feedback:
            "Not quite. Inherited dominant variants can still be relevant when reduced penetrance or variable expressivity is known.",
        },
        {
          label: "B",
          text: "Assume the mother must be severely affected because she carries the same variant.",
          isCorrect: false,
          feedback:
            "Not quite. Reduced penetrance and variable expressivity mean carriers can be mildly affected or apparently unaffected.",
        },
        {
          label: "C",
          text: "Treat it as plausible, while documenting the inherited status and reduced-penetrance context clearly.",
          isCorrect: true,
          feedback:
            "Correct. Inherited status is a caveat, not an automatic exclusion, when the disease mechanism supports reduced penetrance.",
        },
      ],
      teachingPoint:
        "Reduced penetrance means an apparently unaffected carrier parent does not automatically rule out a dominant candidate.",
    },
    {
      id: "checkpoint-2",
      title: "Checkpoint 2 — Identify the strongest candidate",
      context:
        "Candidate 3 fits the episodic ataxia, abnormal movement, and migraine-like phenotype; the variant is absent from population data, lies in a relevant functional domain, and is technically convincing.",
      question:
        "Why is Candidate 3 the strongest current candidate?",
      options: [
        {
          label: "A",
          text: "Because the phenotype, mechanism, domain position, rarity, technical evidence, and known reduced penetrance all support it despite inheritance from the mother.",
          isCorrect: true,
          feedback:
            "Correct. Candidate 3 has the best overall evidence pattern when reduced penetrance is considered.",
        },
        {
          label: "B",
          text: "Because inherited variants should always be prioritised over de novo variants.",
          isCorrect: false,
          feedback:
            "Not quite. Inherited variants are not automatically stronger. This one is stronger because it fits this specific disease context.",
        },
        {
          label: "C",
          text: "Because any gene linked to ataxia is enough for diagnosis.",
          isCorrect: false,
          feedback:
            "Not quite. The strength comes from multiple aligned evidence types, not just the gene name.",
        },
      ],
      teachingPoint:
        "The best candidate is the one whose full evidence pattern fits the case, not simply the one that is de novo.",
    },
    {
      id: "checkpoint-3",
      title: "Checkpoint 3 — De novo in a weak gene",
      context:
        "Candidate 1 is technically strong and appears de novo, but the gene-disease validity for ATAXNEW1 is limited/emerging and the mechanism is uncertain.",
      question:
        "Why should Candidate 1 not automatically outrank Candidate 3?",
      options: [
        {
          label: "A",
          text: "Because de novo variants are never relevant in neurological disease.",
          isCorrect: false,
          feedback:
            "Not quite. De novo variants can be very important, but they still need gene-disease and mechanism support.",
        },
        {
          label: "B",
          text: "Because a clean de novo variant in a weakly supported gene may be less convincing than an inherited variant in an established reduced-penetrance gene.",
          isCorrect: true,
          feedback:
            "Correct. Inheritance is only one part of prioritisation. Gene validity and mechanism matter.",
        },
        {
          label: "C",
          text: "Because the technical evidence is poor for Candidate 1.",
          isCorrect: false,
          feedback:
            "Not quite. Candidate 1 is technically strong. Its limitation is gene-disease validity.",
        },
      ],
      teachingPoint:
        "A de novo signal is powerful only when the gene, mechanism, and phenotype evidence also support relevance.",
    },
    {
      id: "checkpoint-4",
      title: "Checkpoint 4 — Mechanism mismatch in an inherited variant",
      context:
        "Candidate 2 is inherited and technically convincing, but the gene is mainly associated with missense variants in a motor regulatory domain, while this variant is a stop-gained change with weak loss-of-function support.",
      question:
        "What is the main limitation of Candidate 2?",
      options: [
        {
          label: "A",
          text: "It must be false because inherited variants are sequencing artefacts.",
          isCorrect: false,
          feedback:
            "Not quite. The variant appears technically real.",
        },
        {
          label: "B",
          text: "It should be prioritised because stop-gained variants always override mechanism concerns.",
          isCorrect: false,
          feedback:
            "Not quite. A high-impact consequence does not automatically fit the known disease mechanism.",
        },
        {
          label: "C",
          text: "Its consequence, population evidence, and inheritance do not fit the proposed dominant disease model well.",
          isCorrect: true,
          feedback:
            "Correct. Candidate 2 is not weak simply because it is inherited; it is weak because several evidence types do not fit.",
        },
      ],
      teachingPoint:
        "Inherited status is only one part of the reasoning. Mechanism and population evidence can also weaken a candidate.",
    },
    {
      id: "checkpoint-5",
      title: "Checkpoint 5 — Safe service-style next step",
      context:
        "Candidate 3 is the strongest current candidate, but it is inherited from a reportedly unaffected parent. Candidate 1 is de novo but in a weak gene. Candidate 2 has mechanism and population concerns. Candidate 4 is incomplete recessive evidence.",
      question:
        "What is the safest next step?",
      options: [
        {
          label: "A",
          text: "Dismiss Candidate 3 because inherited variants from unaffected parents are never relevant.",
          isCorrect: false,
          feedback:
            "Not quite. That would be unsafe in a reduced-penetrance disorder.",
        },
        {
          label: "B",
          text: "Prioritise Candidate 3 for review, document the reduced-penetrance inheritance caveat, and explain why the other candidates are weaker.",
          isCorrect: true,
          feedback:
            "Correct. This is safe and reviewable because it explains both why Candidate 3 is strong and why inheritance still needs careful discussion.",
        },
        {
          label: "C",
          text: "Report Candidate 1 instead because de novo status always outweighs all other evidence.",
          isCorrect: false,
          feedback:
            "Not quite. De novo status should not override weak gene-disease validity.",
        },
      ],
      teachingPoint:
        "Safe reduced-penetrance reasoning means neither dismissing inherited variants too quickly nor over-claiming them without documenting the caveat.",
    },
  ],

  finalReflection:
    "A safe trainee-level conclusion would be that Candidate 3 is the strongest current candidate for further review because the phenotype, gene-disease relationship, domain location, missense mechanism, population absence, and technical evidence are supportive, and the known disorder has reduced penetrance and variable expressivity. The inherited status from a reportedly unaffected mother should be documented as an important caveat, not used as an automatic exclusion. Candidate 1 is technically convincing and appears de novo, but the gene-disease evidence is limited. Candidate 2 is technically real but weakened by mechanism mismatch, population evidence, and inheritance. Candidate 4 is a technically convincing single allele in a recessive gene but incomplete as an explanation. The safest next step is to prioritise Candidate 3 for appropriate review, request careful review of family/parental phenotype context if relevant, and document the reduced-penetrance reasoning clearly.",
};