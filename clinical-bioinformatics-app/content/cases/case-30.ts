export const case30 = {
  id: "case-30",
  slug: "candidate-comparison-capstone-case",
  title: "Case 30: Candidate comparison capstone",
  level: "Intermediate",
  summary:
    "An integrated rare disease case focused on comparing multiple plausible candidates across phenotype, inheritance, mechanism, population evidence, transcript/consequence, and technical confidence.",

  visualisationExampleId: null,

  assessmentFocus: [
    "Integrated candidate comparison",
    "Phenotype and inheritance fit",
    "Transcript and consequence interpretation",
    "Compound heterozygous evidence review",
    "Technical artefact recognition",
    "CNV confidence review",
    "Safe service-style prioritisation",
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
        "candidate-4",
        "candidate-2",
        "candidate-1",
        "candidate-5",
        "candidate-3",
      ],
      explanation:
        "Candidate 4 is strongest because phenotype, apparent de novo inheritance, canonical splice donor consequence, loss-of-function mechanism, population absence, gene constraint, and technical evidence all align. Candidate 2 is a plausible secondary recessive candidate because the variants appear rare and in trans, but the second allele is a missense variant with weaker mechanism support. Candidate 1 is technically convincing and appears de novo, but its severe stop-gained annotation is only on a minor transcript; on the clinically preferred transcript it is intronic without strong splice evidence. Candidate 5 is a possible CNV, but it is low-confidence, small, unsupported by a second caller, and has limited gene-disease support. Candidate 3 is phenotypically possible but technically fragile, with low alternate support, strand/read-position concerns, soft-clipping, and no second-caller support.",
    },

    escalationDecision: {
      prompt:
        "Choose the safest next action for this integrated comparison case.",
      options: [
        {
          id: "prioritise-candidate-4",
          label: "A",
          decision:
            "Prioritise Candidate 4 for review, document the specific limitation for each other candidate, and escalate through the appropriate clinical laboratory review pathway.",
          isBest: true,
          feedback:
            "Best decision. Candidate 4 has the strongest convergent evidence, and the limitations of the other candidates should remain visible for review.",
        },
        {
          id: "prioritise-candidate-1",
          label: "B",
          decision:
            "Prioritise Candidate 1 because a stop-gained annotation is more severe-looking than a splice donor annotation.",
          isBest: false,
          feedback:
            "Review this choice. Candidate 1’s severe annotation is transcript-dependent and is not supported on the clinically preferred transcript.",
        },
        {
          id: "prioritise-cnv",
          label: "C",
          decision:
            "Prioritise Candidate 5 because CNVs should always outrank SNVs and indels.",
          isBest: false,
          feedback:
            "Review this choice. CNVs can be important, but Candidate 5 is low-confidence and should not outrank a stronger, technically robust sequence candidate.",
        },
      ],
    },

    writtenSummary: {
      prompt:
        "Write a short trainee-level handover summary explaining which candidate is strongest, why the other candidates are weaker, and what should happen next.",
      checklist: [
        "Names Candidate 4 as the strongest current candidate.",
        "Mentions Candidate 4 evidence: phenotype fit, apparent de novo inheritance, canonical splice donor consequence, loss-of-function mechanism, population absence, constraint, and technical support.",
        "Explains Candidate 1’s transcript limitation.",
        "Explains Candidate 2 as plausible but limited by a weaker missense second allele.",
        "Explains Candidate 3 as technically fragile despite possible phenotype relevance.",
        "Explains Candidate 5 as a low-confidence CNV with limited support.",
        "Avoids choosing the most dramatic annotation without considering the full evidence pattern.",
        "Recommends appropriate review/escalation rather than treating the finding as an automatic final diagnosis.",
      ],
      modelAnswer:
        "Candidate 4 is the strongest current candidate for further review because it is an apparent de novo canonical splice donor variant in SYNDCAP2, a phenotype-compatible autosomal dominant neurodevelopmental gene where loss-of-function is a reported mechanism. The variant is absent from population data, the gene shows strong loss-of-function constraint, and the raw technical evidence is strong. Candidate 1 is technically real and appears de novo, but the severe stop-gained consequence is only present on a minor transcript; on the clinically preferred transcript it is intronic without strong splice evidence. Candidate 2 is a plausible secondary recessive candidate because the variants appear rare and in trans, but the second allele is a missense variant with weaker mechanism support. Candidate 3 is phenotypically possible but technically fragile because of low alternate support, strand/read-position concerns, soft-clipping, and no second-caller support. Candidate 5 is a possible CNV, but the evidence is low-confidence and not supported by a second caller. The safest next step is to prioritise Candidate 4 for appropriate review, document the limitations of the other candidates, and escalate through the clinical laboratory review pathway.",
    },
  },

  reasoningScorecard: [
    {
      category: "Integrated evidence comparison",
      maxScore: 2,
      expectation:
        "Compares candidates across phenotype, inheritance, mechanism, population evidence, transcript consequence, and technical confidence rather than relying on one field.",
    },
    {
      category: "Transcript/consequence reasoning",
      maxScore: 2,
      expectation:
        "Recognises that Candidate 1’s severe annotation is weakened because it is only on a minor transcript and not supported on the clinically preferred transcript.",
    },
    {
      category: "Recessive candidate reasoning",
      maxScore: 2,
      expectation:
        "Recognises Candidate 2 as plausible but limited because the second allele is a missense variant with weaker mechanism support.",
    },
    {
      category: "Technical confidence",
      maxScore: 2,
      expectation:
        "Uses read-level and caller evidence to deprioritise technically fragile sequence and CNV candidates.",
    },
    {
      category: "Safe service-style conclusion",
      maxScore: 2,
      expectation:
        "Prioritises Candidate 4 for review while documenting limitations of the alternatives and avoiding over-claiming.",
    },
  ],

  patient: {
    age: 8,
    sex: "Female",
  },

  referralReason:
    "An 8-year-old girl has been referred for rare disease genome analysis because of developmental delay, severe speech delay, epilepsy, hypotonia, mild dysmorphic features, and feeding difficulties in early childhood.",

  testType: "Rare disease trio genome sequencing with SNV/indel and CNV analysis",

  familyStructure:
    "The proband and both biological parents have been tested. Both parents are reportedly unaffected. No known consanguinity is reported.",

  history: [
    "Global developmental delay noted from infancy",
    "Severe expressive speech delay",
    "Epilepsy beginning at age 3",
    "Hypotonia from early childhood",
    "Feeding difficulties in early childhood",
    "Mild dysmorphic features noted by clinical genetics",
    "No known previous molecular diagnosis",
  ],

  phenotype: [
    "Global developmental delay",
    "Severe speech delay",
    "Epilepsy",
    "Hypotonia",
    "Feeding difficulties",
    "Mild dysmorphic features",
  ],

  familyHistory:
    "Both parents are reportedly unaffected. No known family history of developmental delay, epilepsy, hypotonia, feeding difficulties, dysmorphic features, or a similar neurodevelopmental presentation.",

  serviceContext: [
    "This is an integrated rare disease comparison case.",
    "Several candidates have at least one interesting feature, but only one has the strongest overall evidence pattern.",
    "Your task is to compare the candidates across phenotype fit, inheritance, gene-disease mechanism, transcript/consequence, population evidence, technical confidence, and service-level caution.",
    "The goal is not to select the most dramatic-looking annotation. The goal is to identify the most reviewable and proportionate candidate.",
  ],

  candidateFindings: [
    {
      id: "candidate-1",
      label: "Candidate 1",
      gene: "NDDCAP1",
      variant: "chr2:77219011 C>T",
      zygosity: "Heterozygous",
      consequence: "stop_gained on minor transcript; intronic on MANE transcript",
      inheritanceSignal: "Apparent de novo with good parental coverage",
      clinicalFit:
        "NDDCAP1 has a possible neurodevelopmental association, and the initial annotation looks severe. However, the stop-gained consequence is only on a minor transcript. On the clinically preferred transcript, the variant is intronic with no strong splice evidence.",
      rawEvidence: `GENE: NDDCAP1
Known disease association: possible autosomal dominant neurodevelopmental disorder
Reported inheritance: autosomal dominant proposed in limited reports
Known mechanism: uncertain
Gene-disease validity in local summary: limited/moderate

Variant:
chr2:77219011 C>T

Transcript annotation summary:
Transcript 1: NM_300001.1
Transcript status: short minor transcript
HGVS: c.301C>T p.(Arg101*)
Consequence: stop_gained

Transcript 2: NM_300001.5
Transcript status: MANE Select / clinically preferred transcript
HGVS: c.410+116C>T
Consequence: intron_variant
Splice prediction summary: no strong splice-altering signal in local summary

VCF-style fields:
QUAL=804
FILTER=PASS
INFO: DP=48;MQ=60;QD=16.8;SOR=0.78
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
No concerning soft-clipping around the variant

Population:
gnomAD AF = not observed
gnomAD allele count = 0

Constraint:
LOEUF = 0.62
pLI = 0.31

ClinVar-style summary:
No exact matching variant record found in local summary
Limited reports link NDDCAP1 to neurodevelopmental phenotypes
No strong local evidence that this intronic MANE consequence disrupts splicing`,
      concern:
        "This is technically convincing and appears de novo, but the severe-looking consequence is transcript-dependent and not supported on the clinically preferred transcript. It should not be over-prioritised purely because one annotation says stop_gained.",
    },
    {
      id: "candidate-2",
      label: "Candidate 2",
      gene: "RECCAP4",
      variant: "Two variants in RECCAP4",
      zygosity: "Possible compound heterozygous candidate",
      consequence: "splice_acceptor_variant + missense_variant",
      inheritanceSignal:
        "One variant inherited from each parent, but the missense variant has weak mechanism support",
      clinicalFit:
        "RECCAP4 is associated with an autosomal recessive neurodevelopmental disorder with seizures and hypotonia. The inheritance pattern is interesting, but one allele is a missense variant with limited evidence and the phenotype overlap is only partial.",
      rawEvidence: `GENE: RECCAP4
Known disease association: autosomal recessive neurodevelopmental disorder with seizures
Reported inheritance: autosomal recessive
Known mechanism: biallelic loss-of-function most strongly supported
Missense mechanism: limited evidence outside specific functional residues

Variant A:
chr7:118809331 A>G
Transcript: NM_300002.4
HGVS: c.744-2A>G
Consequence: splice_acceptor_variant
Splice position: canonical -2 acceptor site

VCF-style fields:
QUAL=790
FILTER=PASS
INFO: DP=48;MQ=60;QD=16.5;SOR=0.74
FORMAT: GT:AD:DP:GQ

Proband: 0/1:24,24:48:99
Mother: 0/1:22,22:44:99
Father: 0/0:41,0:41:99

Variant B:
chr7:119004221 C>T
Transcript: NM_300002.4
HGVS: c.1220C>T p.(Pro407Leu)
Consequence: missense_variant
Protein domain: outside known functional residues in local summary

VCF-style fields:
QUAL=620
FILTER=PASS
INFO: DP=44;MQ=60;QD=14.1;SOR=0.82
FORMAT: GT:AD:DP:GQ

Proband: 0/1:22,22:44:99
Mother: 0/0:39,0:39:99
Father: 0/1:20,21:41:99

Read-level notes:
Both variants have balanced allele support
Both variants seen on both forward and reverse strands
No local mapping warning at either site
No concerning soft-clipping around either variant

Phase / inheritance note:
Variant A appears maternally inherited
Variant B appears paternally inherited
Variants are compatible with trans inheritance in trio data

Population:
Variant A gnomAD AF = 0.000003; allele count = 1
Variant B gnomAD AF = 0.00008; allele count = 24
No homozygotes observed for either variant in local summary

Constraint:
LOEUF = 0.37
pLI = 0.69

ClinVar-style summary:
Variant A: no exact matching record, but canonical splice variants in RECCAP4 reported in affected individuals
Variant B: no exact matching pathogenic record
Local summary states biallelic loss-of-function has stronger evidence than missense variation`,
      concern:
        "This is a plausible secondary candidate because the variants are rare and appear in trans, but the second allele is a missense variant with weaker mechanism support. It is not stronger than a clear de novo loss-of-function candidate in a better-fitting dominant gene.",
    },
    {
      id: "candidate-3",
      label: "Candidate 3",
      gene: "SEIZCAP7",
      variant: "chr11:44190220 T>C",
      zygosity: "Heterozygous",
      consequence: "missense_variant",
      inheritanceSignal: "Apparent de novo, but technically fragile",
      clinicalFit:
        "SEIZCAP7 has a developmental epilepsy association and could explain part of the phenotype. However, the raw technical evidence has multiple artefact warning signs.",
      rawEvidence: `GENE: SEIZCAP7
Known disease association: autosomal dominant developmental epilepsy
Reported inheritance: autosomal dominant
Known mechanism: de novo missense variants in constrained regions

Variant:
chr11:44190220 T>C
Transcript: NM_300003.2
HGVS: c.944T>C p.(Leu315Pro)
Consequence: missense_variant
Protein domain: near possible functional region, but not a known recurrent hotspot

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
LOEUF = 0.41
pLI = 0.78

ClinVar-style summary:
No exact matching variant record found in local summary
Nearby missense variants in SEIZCAP7 have been submitted in epilepsy phenotypes, but evidence remains limited`,
      concern:
        "This is phenotypically possible but technically fragile. Apparent de novo status should not override weak allele support, strand/read-position concerns, soft-clipping, and lack of second-caller support.",
    },
    {
      id: "candidate-4",
      label: "Candidate 4",
      gene: "SYNDCAP2",
      variant: "chr12:66190442 G>A",
      zygosity: "Heterozygous",
      consequence: "splice_donor_variant",
      inheritanceSignal: "Apparent de novo with good parental coverage",
      clinicalFit:
        "SYNDCAP2 is associated with an autosomal dominant neurodevelopmental disorder including developmental delay, severe speech delay, epilepsy, hypotonia, feeding difficulties, and dysmorphic features. Loss-of-function is a reported disease mechanism.",
      rawEvidence: `GENE: SYNDCAP2
Known disease association: autosomal dominant syndromic neurodevelopmental disorder
Reported inheritance: autosomal dominant
Known mechanism: haploinsufficiency / loss-of-function

Variant:
chr12:66190442 G>A
Transcript: NM_300004.5
HGVS: c.744+1G>A
Consequence: splice_donor_variant
Splice position: canonical +1 donor site
Predicted effect: likely donor splice-site disruption

VCF-style fields:
QUAL=952
FILTER=PASS
INFO: DP=56;MQ=60;QD=17.0;SOR=0.70
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
LOEUF = 0.15
pLI = 0.99

ClinVar-style summary:
No exact matching variant record found in local summary
Other canonical splice-site and truncating variants in SYNDCAP2 have been submitted as pathogenic/likely pathogenic in affected individuals
Reported phenotypes overlap with developmental delay, severe speech delay, epilepsy, hypotonia, feeding difficulties, and dysmorphic features`,
      concern:
        "This is the strongest current candidate because the phenotype, apparent de novo inheritance, canonical splice consequence, loss-of-function mechanism, population absence, constraint, and technical evidence all align.",
    },
    {
      id: "candidate-5",
      label: "Candidate 5",
      gene: "CNVCAP5 region",
      variant: "chr16:29120000-29205000 deletion",
      zygosity: "Possible heterozygous deletion",
      consequence: "copy_number_loss",
      inheritanceSignal: "Possible de novo, but CNV evidence is borderline",
      clinicalFit:
        "The region contains a candidate neurodevelopmental gene, but the deletion is small, borderline, and not consistently supported by CNV callers.",
      rawEvidence: `CNV REGION: chr16:29120000-29205000
CNV type: possible deletion
Estimated size: 85 kb
Copy-number state: possible one-copy loss

Key genes in interval:
CNVCAP5 — possible neurodevelopmental candidate gene
Partial exon overlap only

Known disease association:
No established recurrent syndrome in local summary
Gene-disease evidence limited/moderate

Inheritance:
Proband: possible deletion called
Mother: no deletion detected
Father: no deletion detected
Inheritance signal: possible de novo, but technical confidence limited

CNV caller summary:
Caller 1: deletion LOW_CONFIDENCE
Caller 2: not called
Quality score: 34
Number of targets/windows affected: 6

Read-depth evidence:
Expected normalised depth in diploid regions: ~1.00
Proband normalised depth across interval: ~0.71
Mother normalised depth across interval: ~0.98
Father normalised depth across interval: ~1.01

Breakpoint evidence:
Split reads: none
Paired-end evidence: not convincing
Breakpoint not resolved

B-allele / SNP pattern:
Too few informative SNPs across interval
No clear one-copy-loss SNP pattern

Population:
Overlapping small deletions observed in population CNV summary
Partial benign overlap reported in local summary

Technical notes:
Low number of affected windows
No second-caller support
Coverage variability warning present
Manual CNV plot review recommended before any prioritisation`,
      concern:
        "This should be treated cautiously. It is a possible CNV, but the evidence is borderline, low-confidence, not supported by a second caller, and the gene-disease evidence is not strong enough to outrank Candidate 4.",
    },
  ],

  decisionCheckpoints: [
    {
      id: "checkpoint-1",
      title: "Checkpoint 1 — Do not be fooled by a severe annotation on the wrong transcript",
      context:
        "Candidate 1 is technically convincing and appears de novo, but its stop-gained consequence is only on a minor transcript. On the clinically preferred transcript, it is intronic without strong splice evidence.",
      question:
        "What is the safest interpretation of Candidate 1?",
      options: [
        {
          label: "A",
          text: "It should be prioritised because any stop-gained annotation is enough.",
          isCorrect: false,
          feedback:
            "Not quite. The transcript carrying the severe consequence matters.",
        },
        {
          label: "B",
          text: "It is technically real and interesting, but weaker because the severe consequence is not supported on the clinically preferred transcript.",
          isCorrect: true,
          feedback:
            "Correct. Candidate 1 should not be over-prioritised based on a misleading transcript annotation.",
        },
        {
          label: "C",
          text: "It is definitely benign because intronic variants can never matter.",
          isCorrect: false,
          feedback:
            "Not quite. Intronic variants can matter if there is splice or regulatory evidence, but that evidence is not shown here.",
        },
      ],
      teachingPoint:
        "Transcript choice can substantially change candidate strength.",
    },
    {
      id: "checkpoint-2",
      title: "Checkpoint 2 — Compound heterozygous candidate with a weak second allele",
      context:
        "Candidate 2 has two rare variants in a recessive gene, apparently one from each parent. One is a canonical splice acceptor, but the second is a missense variant outside known functional residues.",
      question:
        "What is the best interpretation of Candidate 2?",
      options: [
        {
          label: "A",
          text: "It is a plausible secondary candidate, but the missense second allele has weaker mechanism support, so it is not the strongest current explanation.",
          isCorrect: true,
          feedback:
            "Correct. Candidate 2 is not impossible, but the second allele limits confidence.",
        },
        {
          label: "B",
          text: "It is automatically diagnostic because two variants are present in the same gene.",
          isCorrect: false,
          feedback:
            "Not quite. Two variants in a gene are not enough. Phase, mechanism, consequence, and phenotype fit matter.",
        },
        {
          label: "C",
          text: "It should be ignored because recessive candidates are never relevant in trio genome analysis.",
          isCorrect: false,
          feedback:
            "Not quite. Recessive candidates can be very relevant, but the evidence must support a biallelic disease mechanism.",
        },
      ],
      teachingPoint:
        "Compound heterozygous reasoning requires more than two variants in one gene. Each allele must be credible for the disease mechanism.",
    },
    {
      id: "checkpoint-3",
      title: "Checkpoint 3 — Apparent de novo but technically fragile",
      context:
        "Candidate 3 appears de novo in a possible epilepsy gene, but the raw data show AD 25,6, GQ 45, MQ 42, QD 1.5, SOR 5.8, read-end clustering, soft-clipping, and no second-caller support.",
      question:
        "How should Candidate 3 be handled?",
      options: [
        {
          label: "A",
          text: "Prioritise it because any apparent de novo epilepsy-gene variant is automatically strong.",
          isCorrect: false,
          feedback:
            "Not quite. The technical evidence is too weak for confident prioritisation.",
        },
        {
          label: "B",
          text: "Treat it cautiously and avoid over-prioritising without read-level review.",
          isCorrect: true,
          feedback:
            "Correct. Apparent de novo status does not override technical fragility.",
        },
        {
          label: "C",
          text: "Report it because absence from population data proves the call is real.",
          isCorrect: false,
          feedback:
            "Not quite. Population absence does not prove technical reliability.",
        },
      ],
      teachingPoint:
        "Technical confidence is a foundation for interpretation. A weak call should not become a strong candidate because the gene sounds relevant.",
    },
    {
      id: "checkpoint-4",
      title: "Checkpoint 4 — Identify the strongest integrated candidate",
      context:
        "Candidate 4 is an apparent de novo canonical splice donor variant in SYNDCAP2. The gene, phenotype, loss-of-function mechanism, population absence, constraint, and raw technical evidence are all supportive.",
      question:
        "Why is Candidate 4 the strongest current candidate?",
      options: [
        {
          label: "A",
          text: "Because canonical splice variants are always diagnostic regardless of gene or phenotype.",
          isCorrect: false,
          feedback:
            "Not quite. Candidate 4 is strong because the splice consequence fits the gene, phenotype, inheritance, mechanism, population, and technical evidence.",
        },
        {
          label: "B",
          text: "Because it has the best convergence across phenotype fit, inheritance, consequence, mechanism, rarity, constraint, and technical confidence.",
          isCorrect: true,
          feedback:
            "Correct. Candidate 4 has the strongest overall evidence pattern.",
        },
        {
          label: "C",
          text: "Because it is the only candidate with a rare variant.",
          isCorrect: false,
          feedback:
            "Not quite. Several candidates are rare. Candidate 4 is strongest because the full evidence pattern aligns.",
        },
      ],
      teachingPoint:
        "Strong candidate prioritisation depends on convergence across evidence types.",
    },
    {
      id: "checkpoint-5",
      title: "Checkpoint 5 — Safe service-style next step",
      context:
        "Candidate 4 is the strongest current candidate. Candidate 1 has a transcript limitation. Candidate 2 has a weaker second allele. Candidate 3 is technically fragile. Candidate 5 is a low-confidence CNV.",
      question:
        "What is the safest next step?",
      options: [
        {
          label: "A",
          text: "Prioritise Candidate 4 for review, document the specific limitation for each other candidate, and escalate through the appropriate review pathway.",
          isCorrect: true,
          feedback:
            "Correct. This is safe, proportionate, and reviewable.",
        },
        {
          label: "B",
          text: "Report Candidate 1 because stop-gained sounds more severe than splice_donor.",
          isCorrect: false,
          feedback:
            "Not quite. Candidate 1’s severe annotation is not supported on the clinically preferred transcript.",
        },
        {
          label: "C",
          text: "Report Candidate 5 because CNVs should always outrank sequence variants.",
          isCorrect: false,
          feedback:
            "Not quite. Candidate 5 is a low-confidence CNV and should not outrank a strong sequence candidate.",
        },
      ],
      teachingPoint:
        "A safe capstone-style conclusion explains why the top candidate is strongest and why each alternative was deprioritised.",
    },
  ],

  finalReflection:
    "A safe trainee-level conclusion would be that Candidate 4 is the strongest current candidate for further review because the phenotype, apparent de novo inheritance, canonical splice donor consequence, loss-of-function mechanism, population absence, gene constraint, and technical evidence all align. Candidate 1 is technically real and appears de novo, but the severe stop-gained consequence is only on a minor transcript; on the clinically preferred transcript it is intronic without strong splice evidence. Candidate 2 is a plausible secondary recessive candidate, but the second allele is a missense variant with weaker mechanism support. Candidate 3 is phenotypically possible but technically fragile. Candidate 5 is a possible CNV but has low-confidence evidence and limited gene-disease support. The safest next step is to prioritise Candidate 4 for appropriate review, document the limitations of the other candidates, and escalate through the clinical laboratory review pathway rather than over-claiming.",
};