export const case40 = {
  id: "case-40",
  slug: "complex-blended-phenotype-dual-diagnosis-case",
  title: "Case 40: Complex blended phenotype",
  level: "Advanced",
  summary:
    "An advanced case focused on recognising when one candidate does not explain the full presentation and a possible blended or dual diagnosis should be considered.",

  visualisationExampleId: null,

  assessmentFocus: [
    "Blended phenotype recognition",
    "Dual diagnosis reasoning",
    "Partial phenotype explanation",
    "Dominant de novo candidate interpretation",
    "Recessive compound heterozygous interpretation",
    "Phenotype-component mapping",
    "Candidate comparison across mechanisms",
    "Safe escalation when more than one finding may be relevant",
  ],

  guidedTutorMode: {
    type: "static-rule-based",
    description:
      "Uses built-in hints, checkpoint feedback, model answers, and self-check criteria to support safe case reasoning.",
  },

  phase5Assessment: {
    candidateRanking: {
      prompt:
        "Rank the findings from highest to lowest review priority, remembering that this case may require more than one candidate to explain the full phenotype.",
      correctOrder: [
        "candidate-2",
        "candidate-5",
        "candidate-4",
        "candidate-3",
        "candidate-1",
      ],
      explanation:
        "Candidate 2 and Candidate 5 should both be prioritised for review because they explain different major components of the phenotype. Candidate 2 is strongest for the neurodevelopmental, epilepsy, hypotonia, and poor-growth component. Candidate 5 is strongest for the retinal-renal-poor-growth component and may represent a second diagnosis. Candidate 4 is phenotypically possible for epilepsy but technically fragile. Candidate 3 is a technically plausible inherited duplication, but copy-number gain is not an established mechanism and it does not explain the blended phenotype. Candidate 1 is technically real but weak because it is inherited, relatively frequent, in a limited-evidence gene, and does not explain the renal or visual features.",
    },

    escalationDecision: {
      prompt: "Choose the safest next action for this case.",
      options: [
        {
          id: "prioritise-both-candidates",
          label: "A",
          decision:
            "Prioritise both Candidate 2 and Candidate 5 for review, document which phenotype components each explains, and raise the possibility of a blended or dual diagnosis.",
          isBest: true,
          feedback:
            "Best decision. Candidate 2 and Candidate 5 have strong but different phenotype fits, so the safest conclusion is to review both rather than forcing one to explain everything.",
        },
        {
          id: "force-candidate-2-only",
          label: "B",
          decision:
            "Prioritise only Candidate 2 because it is de novo and treat it as the full explanation for all clinical features.",
          isBest: false,
          feedback:
            "Review this choice. Candidate 2 is strong for the neurodevelopmental component, but it does not clearly explain the renal cysts or progressive visual problems.",
        },
        {
          id: "force-candidate-5-only",
          label: "C",
          decision:
            "Prioritise only Candidate 5 because it has two variants and treat it as the full explanation for all clinical features.",
          isBest: false,
          feedback:
            "Review this choice. Candidate 5 is strong for the retinal-renal component, but epilepsy is not a core feature in the local summary.",
        },
      ],
    },

    writtenSummary: {
      prompt:
        "Write a short trainee-level handover summary explaining why this case may represent a blended or dual diagnosis, what Candidate 2 explains, what Candidate 5 explains, and why the other candidates are weaker.",
      checklist: [
        "States that a blended or dual diagnosis should be considered.",
        "Identifies Candidate 2 as a strong candidate for the neurodevelopmental and epilepsy component.",
        "Mentions Candidate 2 is an apparent de novo canonical splice donor variant.",
        "Links SYNBLEND2 to developmental delay, epilepsy, hypotonia, and poor growth.",
        "States that Candidate 2 does not clearly explain renal cysts or progressive visual problems.",
        "Identifies Candidate 5 as a strong recessive retinal-renal candidate.",
        "Mentions Candidate 5 has two rare loss-of-function-type variants apparently in trans.",
        "Links CILBLEND5 to renal cysts, progressive visual problems, and poor growth.",
        "States that Candidate 5 does not fully explain the epilepsy-heavy neurodevelopmental picture.",
        "Explains why Candidates 1, 3, and 4 are weaker.",
        "Recommends review of both Candidate 2 and Candidate 5 rather than forcing a single diagnosis.",
      ],
      modelAnswer:
        "This case may represent a blended or dual diagnosis. Candidate 2 is a strong apparent de novo canonical splice donor variant in SYNBLEND2 and provides a convincing explanation for the developmental delay, epilepsy, hypotonia, and poor growth, but it does not clearly explain the renal cysts or progressive visual problems. Candidate 5 is a strong compound heterozygous CILBLEND5 candidate, with a maternally inherited frameshift and a paternally inherited canonical splice acceptor variant apparently in trans. This finding provides a convincing explanation for the retinal-renal-poor-growth component, but it does not fully explain the epilepsy-heavy neurodevelopmental presentation. Candidates 1, 3, and 4 are weaker because of limited gene-disease evidence, inheritance, population frequency, uncertain dosage mechanism, technical fragility, or incomplete phenotype fit. The safest next step is to prioritise both Candidate 2 and Candidate 5 for review, document which clinical features each may explain, and escalate the possibility of a blended or dual diagnosis through the appropriate laboratory review pathway.",
    },
  },

  reasoningScorecard: [
    {
      category: "Blended phenotype recognition",
      maxScore: 2,
      expectation:
        "Recognises that the phenotype may not be fully explained by one candidate and that Candidate 2 and Candidate 5 explain different major clinical components.",
    },
    {
      category: "Candidate 2 interpretation",
      maxScore: 2,
      expectation:
        "Explains why the apparent de novo SYNBLEND2 canonical splice donor variant is strong for the neurodevelopmental, epilepsy, hypotonia, and poor-growth component.",
    },
    {
      category: "Candidate 5 interpretation",
      maxScore: 2,
      expectation:
        "Explains why the compound heterozygous CILBLEND5 finding is strong for the retinal-renal-poor-growth component and fits a recessive loss-of-function model.",
    },
    {
      category: "Avoiding overextension",
      maxScore: 2,
      expectation:
        "Avoids forcing Candidate 2 to explain renal/visual features or Candidate 5 to explain the epilepsy-heavy neurodevelopmental presentation.",
    },
    {
      category: "Safe escalation",
      maxScore: 2,
      expectation:
        "Recommends review of both strong candidates and clear documentation of a possible blended or dual diagnosis.",
    },
  ],

  patient: {
    age: 10,
    sex: "Male",
  },

  referralReason:
    "A 10-year-old boy has been referred for rare disease genome analysis because of developmental delay, epilepsy, hypotonia, progressive visual problems, renal cysts, and poor growth.",

  testType:
    "Rare disease genome sequencing with SNV/indel, CNV, inheritance, and phenotype-led candidate review",

  familyStructure:
    "The proband and both biological parents have been tested. Both parents are reportedly unaffected. No known consanguinity is reported.",

  history: [
    "Global developmental delay noted in early childhood",
    "Epilepsy beginning at age 4",
    "Hypotonia from infancy",
    "Progressive visual difficulties reported from age 8",
    "Renal cysts identified on ultrasound",
    "Poor growth",
    "No known previous molecular diagnosis",
  ],

  phenotype: [
    "Global developmental delay",
    "Epilepsy",
    "Hypotonia",
    "Progressive visual problems",
    "Renal cysts",
    "Poor growth",
  ],

  familyHistory:
    "Both parents are reportedly unaffected. No known family history of developmental delay, epilepsy, renal cysts, retinal disease, poor growth, or a similar blended presentation is documented.",

  serviceContext: [
    "This is a complex blended-phenotype case.",
    "The key issue is that one candidate may not explain all major clinical features.",
    "A safe analysis should consider whether the case has one unifying diagnosis, two partially explanatory findings, or no convincing candidate.",
    "Your task is to compare phenotype fit, inheritance, mechanism, population evidence, technical confidence, and whether each candidate explains the full presentation or only part of it.",
    "Do not force one variant to explain unrelated features if the evidence supports a possible dual diagnosis or a main finding plus an unresolved second component.",
  ],

  candidateFindings: [
    {
      id: "candidate-1",
      label: "Candidate 1",
      gene: "BROADBLEND1",
      variant: "chr4:77190442 C>T",
      zygosity: "Heterozygous",
      consequence: "missense_variant",
      inheritanceSignal: "Inherited from unaffected father",
      clinicalFit:
        "BROADBLEND1 has a broad neurodevelopmental association in limited reports, but it does not explain the renal cysts or progressive visual problems well.",
      rawEvidence: `GENE: BROADBLEND1
Known disease association: broad neurodevelopmental association in limited reports
Reported inheritance: autosomal dominant proposed
Known mechanism: uncertain
Gene-disease validity in local summary: limited

Variant:
chr4:77190442 C>T
Transcript: NM_400001.2
HGVS: c.899C>T p.(Pro300Leu)
Consequence: missense_variant

VCF-style fields:
QUAL=650
FILTER=PASS
INFO: DP=46;MQ=60;QD=14.1;SOR=0.82
FORMAT: GT:AD:DP:GQ

Proband: 0/1:23,23:46:99
Mother: 0/0:40,0:40:99
Father: 0/1:21,22:43:99

Read-level notes:
ALT reads seen on both forward and reverse strands
ALT reads distributed across read positions
No local mapping warning
No soft-clipping concern

Population:
gnomAD AF = 0.0016
gnomAD allele count = 410
Homozygotes observed in population summary = 1

Constraint:
LOEUF = 0.81
pLI = 0.08

ClinVar-style summary:
No exact matching pathogenic record found in local summary
Gene-disease relationship remains limited and broad

Phenotype limitation:
Could weakly overlap developmental delay
Does not explain renal cysts
Does not explain progressive visual problems
Does not explain poor growth well`,
      concern:
        "This is technically real, but it is weak because of inheritance, frequency, limited gene-disease evidence, and poor fit to the full blended phenotype.",
    },
    {
      id: "candidate-2",
      label: "Candidate 2",
      gene: "SYNBLEND2",
      variant: "chr7:118902440 G>A",
      zygosity: "Heterozygous",
      consequence: "splice_donor_variant",
      inheritanceSignal: "Apparent de novo with good parental coverage",
      clinicalFit:
        "SYNBLEND2 is associated with an autosomal dominant neurodevelopmental disorder including developmental delay, epilepsy, hypotonia, and poor growth. Loss-of-function is a reported mechanism.",
      rawEvidence: `GENE: SYNBLEND2
Known disease association: autosomal dominant syndromic neurodevelopmental disorder
Reported inheritance: autosomal dominant
Known mechanism: haploinsufficiency / loss-of-function
Gene-disease validity in local summary: established/moderate

Variant:
chr7:118902440 G>A
Transcript: NM_400002.5
HGVS: c.744+1G>A
Consequence: splice_donor_variant
Splice position: canonical +1 donor site
Predicted effect: likely donor splice-site disruption

VCF-style fields:
QUAL=950
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
Other canonical splice-site and truncating variants in SYNBLEND2 have been submitted as pathogenic/likely pathogenic in affected individuals

Phenotype fit:
Developmental delay: strong match
Epilepsy: strong match
Hypotonia: strong match
Poor growth: compatible
Renal cysts: not a typical feature in local summary
Progressive visual problems: not a typical feature in local summary`,
      concern:
        "This is a strong candidate for the neurodevelopmental part of the phenotype, but it does not fully explain the renal and visual features. It should be prioritised, but not forced as the whole explanation.",
    },
    {
      id: "candidate-3",
      label: "Candidate 3",
      gene: "CNVBLEND3 region",
      variant: "chr12:55210000-55256000 duplication",
      zygosity: "Heterozygous duplication",
      consequence: "copy_number_gain",
      inheritanceSignal: "Inherited from unaffected mother",
      clinicalFit:
        "The region contains a possible neurodevelopmental candidate gene, but the duplication is inherited, overlaps population CNVs, and copy-number gain is not an established mechanism.",
      rawEvidence: `CNV REGION: chr12:55210000-55256000
CNV type: duplication
Estimated size: 46 kb
Copy-number state: possible three-copy gain

Gene:
CNVBLEND3
Known disease association: possible neurodevelopmental association in limited reports
Known mechanism: uncertain
Triplosensitivity evidence: not established

Affected region:
Partial duplication of exons 2–3 of 9
Orientation unknown
Predicted transcript effect uncertain

Inheritance:
Proband: duplication present
Mother: duplication present
Father: duplication not detected
Inheritance signal: maternally inherited

CNV caller summary:
Caller 1: duplication PASS
Caller 2: duplication supported
Quality score: 104
Number of affected targets/windows: 24

Read-depth evidence:
Expected normalised depth in diploid regions: ~1.00
Proband normalised depth across interval: ~1.45
Mother normalised depth across interval: ~1.47
Father normalised depth across interval: ~1.02
Flanking regions: mostly normal

Breakpoint evidence:
Split reads: absent
Paired-end support: imprecise
Breakpoint not resolved

B-allele / SNP pattern:
B-allele pattern compatible with duplication in proband and mother

Population:
Overlapping duplications observed in local population CNV summary
Partial benign overlap reported

Technical notes:
Technically plausible duplication
Clinical relevance uncertain because inherited and no established gain mechanism

Phenotype limitation:
Does not explain renal cysts
Does not explain progressive visual problems
Weak fit to developmental features only`,
      concern:
        "This is likely a real CNV, but it is weak as a disease explanation because it is inherited, has population overlap, lacks a clear gain mechanism, and does not explain the blended phenotype.",
    },
    {
      id: "candidate-4",
      label: "Candidate 4",
      gene: "SEIZBLEND4",
      variant: "chr11:44190220 T>C",
      zygosity: "Heterozygous",
      consequence: "missense_variant",
      inheritanceSignal: "Apparent de novo, but technically fragile",
      clinicalFit:
        "SEIZBLEND4 has a possible developmental epilepsy association, but the variant has weak raw technical evidence and would not explain the renal or progressive visual features.",
      rawEvidence: `GENE: SEIZBLEND4
Known disease association: possible autosomal dominant developmental epilepsy
Reported inheritance: autosomal dominant proposed in limited reports
Known mechanism: uncertain; missense variants proposed in limited evidence

Variant:
chr11:44190220 T>C
Transcript: NM_400004.2
HGVS: c.944T>C p.(Leu315Pro)
Consequence: missense_variant

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
LOEUF = 0.42
pLI = 0.76

ClinVar-style summary:
No exact matching variant record found in local summary
Nearby missense variants in SEIZBLEND4 have been submitted in epilepsy phenotypes, but evidence remains limited

Phenotype limitation:
Could fit epilepsy
Does not explain renal cysts
Does not explain progressive visual problems
Does not explain poor growth well`,
      concern:
        "This is a weak candidate because apparent de novo status is undermined by technical fragility and because the phenotype fit is incomplete.",
    },
    {
      id: "candidate-5",
      label: "Candidate 5",
      gene: "CILBLEND5",
      variant: "Two variants in CILBLEND5",
      zygosity: "Compound heterozygous candidate",
      consequence: "frameshift_variant + splice_acceptor_variant",
      inheritanceSignal:
        "One variant inherited from each parent; variants appear in trans",
      clinicalFit:
        "CILBLEND5 is associated with an autosomal recessive ciliopathy-retinal-renal disorder. Reported features include retinal dystrophy or progressive visual loss, renal cysts, poor growth, and variable developmental delay.",
      rawEvidence: `GENE: CILBLEND5
Known disease association: autosomal recessive ciliopathy-retinal-renal disorder
Reported inheritance: autosomal recessive
Known mechanism: biallelic loss-of-function
Gene-disease validity in local summary: established/moderate

Variant A:
chr16:77290144 G>A
Transcript: NM_400005.4
HGVS: c.744del p.(Gly249Valfs*10)
Consequence: frameshift_variant
Predicted effect: premature termination codon
Predicted NMD: likely

VCF-style fields for Variant A:
QUAL=820
FILTER=PASS
INFO: DP=50;MQ=60;QD=16.4;SOR=0.74
FORMAT: GT:AD:DP:GQ

Proband: 0/1:25,25:50:99
Mother: 0/1:23,22:45:99
Father: 0/0:43,0:43:99

Variant B:
chr16:77310411 C>T
Transcript: NM_400005.4
HGVS: c.1201-2C>T
Consequence: splice_acceptor_variant
Splice position: canonical -2 acceptor site
Predicted effect: likely acceptor splice-site disruption

VCF-style fields for Variant B:
QUAL=860
FILTER=PASS
INFO: DP=52;MQ=60;QD=16.5;SOR=0.71
FORMAT: GT:AD:DP:GQ

Proband: 0/1:26,26:52:99
Mother: 0/0:44,0:44:99
Father: 0/1:24,23:47:99

Read-level notes:
Both variants have balanced allele support in the proband
Both variants seen on forward and reverse strands
No local mapping warning at either site
No concerning soft-clipping around either variant
Second caller: detected for both variants

Phase / inheritance note:
Variant A appears maternally inherited
Variant B appears paternally inherited
Trio data are consistent with the two variants being in trans

Population:
Variant A gnomAD AF = 0.000003; allele count = 1
Variant B gnomAD AF = not observed; allele count = 0
No homozygotes observed for either variant in local summary

Constraint:
LOEUF = 0.25
pLI = 0.91

ClinVar-style summary:
No exact matching variant pair found in local summary
Other biallelic truncating/splice variants in CILBLEND5 have been submitted as pathogenic/likely pathogenic in affected individuals

Phenotype fit:
Renal cysts: strong match
Progressive visual problems: strong match
Poor growth: compatible
Developmental delay: reported in some affected individuals but variable
Epilepsy: not a core feature in local summary
Hypotonia: possible but not specific`,
      concern:
        "This is a strong candidate for the retinal-renal-poor-growth part of the phenotype, but it does not fully explain the epilepsy-heavy neurodevelopmental presentation. It may represent a second diagnosis or a partial explanation alongside Candidate 2.",
    },
  ],

  decisionCheckpoints: [
    {
      id: "checkpoint-1",
      title: "Checkpoint 1 — Do not force one candidate to explain everything",
      context:
        "Candidate 2 explains developmental delay, epilepsy, hypotonia, and poor growth well, but not renal cysts or progressive visual problems. Candidate 5 explains renal cysts, visual problems, and poor growth well, but not epilepsy as a core feature.",
      question: "What is the safest interpretation of this pattern?",
      options: [
        {
          label: "A",
          text: "Candidate 2 should be forced to explain all features because it is de novo.",
          isCorrect: false,
          feedback:
            "Not quite. A strong de novo neurodevelopmental candidate should not be forced to explain renal and visual features if those are not part of the gene’s known spectrum.",
        },
        {
          label: "B",
          text: "Candidate 5 should be forced to explain all features because it has two variants.",
          isCorrect: false,
          feedback:
            "Not quite. A compound heterozygous ciliopathy candidate may explain part of the presentation, but epilepsy is not a core feature in the local summary.",
        },
        {
          label: "C",
          text: "A possible blended or dual diagnosis should be considered because two candidates explain different major parts of the phenotype.",
          isCorrect: true,
          feedback:
            "Correct. The evidence supports considering whether the child has more than one molecular explanation or a primary diagnosis plus an unresolved second component.",
        },
      ],
      teachingPoint:
        "A complex phenotype may not always have a single unifying molecular explanation.",
    },
    {
      id: "checkpoint-2",
      title: "Checkpoint 2 — Candidate 2 as a neurodevelopmental explanation",
      context:
        "Candidate 2 is an apparent de novo canonical splice donor variant in SYNBLEND2, a gene associated with developmental delay, epilepsy, hypotonia, and poor growth.",
      question: "What is the strongest role for Candidate 2 in this case?",
      options: [
        {
          label: "A",
          text: "It is a strong explanation for the neurodevelopmental and epilepsy features, but it does not fully explain the renal and visual features.",
          isCorrect: true,
          feedback:
            "Correct. Candidate 2 should be prioritised for the neurodevelopmental component without over-extending its phenotype fit.",
        },
        {
          label: "B",
          text: "It is weak because de novo splice variants are never clinically useful.",
          isCorrect: false,
          feedback:
            "Not quite. Candidate 2 has strong evidence for part of the presentation.",
        },
        {
          label: "C",
          text: "It explains the renal cysts better than the epilepsy.",
          isCorrect: false,
          feedback:
            "Not quite. The gene’s reported spectrum fits the neurodevelopmental features much better.",
        },
      ],
      teachingPoint:
        "A strong candidate may still be a partial explanation if the phenotype has features outside the gene’s known spectrum.",
    },
    {
      id: "checkpoint-3",
      title: "Checkpoint 3 — Candidate 5 as a retinal-renal explanation",
      context:
        "Candidate 5 has two rare loss-of-function-type variants in trans in CILBLEND5, a recessive ciliopathy-retinal-renal gene.",
      question: "What is the strongest role for Candidate 5 in this case?",
      options: [
        {
          label: "A",
          text: "It is a strong explanation for the renal cysts, progressive visual problems, and poor growth, but it does not fully explain the epilepsy-heavy neurodevelopmental picture.",
          isCorrect: true,
          feedback:
            "Correct. Candidate 5 fits a major part of the phenotype and may represent a second diagnosis or partial explanation.",
        },
        {
          label: "B",
          text: "It should be dismissed because recessive candidates are not relevant in trio analysis.",
          isCorrect: false,
          feedback:
            "Not quite. Candidate 5 has strong recessive evidence with variants apparently in trans.",
        },
        {
          label: "C",
          text: "It proves that Candidate 2 must be false.",
          isCorrect: false,
          feedback:
            "Not quite. Both candidates may be relevant if they explain different parts of the phenotype.",
        },
      ],
      teachingPoint:
        "A strong recessive candidate can coexist with a strong dominant candidate when the phenotype is blended.",
    },
    {
      id: "checkpoint-4",
      title: "Checkpoint 4 — Deprioritise weaker distractions",
      context:
        "Candidate 1 is inherited and relatively frequent. Candidate 3 is an inherited duplication with uncertain gain mechanism. Candidate 4 is a technically fragile de novo-looking SNV.",
      question: "Why are Candidates 1, 3, and 4 weaker?",
      options: [
        {
          label: "A",
          text: "Because they lack the same convergence of phenotype fit, inheritance, mechanism, population evidence, and technical confidence seen for Candidates 2 and 5.",
          isCorrect: true,
          feedback:
            "Correct. Candidates 2 and 5 have much stronger evidence for different parts of the phenotype.",
        },
        {
          label: "B",
          text: "Because only de novo variants can ever be relevant.",
          isCorrect: false,
          feedback:
            "Not quite. Candidate 5 is inherited recessive and still highly relevant.",
        },
        {
          label: "C",
          text: "Because CNVs and missense variants should always be ignored.",
          isCorrect: false,
          feedback:
            "Not quite. Variant class alone is not the issue. Evidence strength is the issue.",
        },
      ],
      teachingPoint:
        "In a complex case, weak distractions should be deprioritised clearly so the review focuses on the best-supported explanations.",
    },
    {
      id: "checkpoint-5",
      title: "Checkpoint 5 — Safe service-style next step",
      context:
        "Candidate 2 and Candidate 5 are both strong but explain different components of the phenotype. Neither alone fully explains all major features.",
      question: "What is the safest next step?",
      options: [
        {
          label: "A",
          text: "Prioritise both Candidate 2 and Candidate 5 for review, document which phenotype components each explains, and raise the possibility of a blended or dual diagnosis.",
          isCorrect: true,
          feedback:
            "Correct. This is the safest and most reviewable conclusion for a blended phenotype case.",
        },
        {
          label: "B",
          text: "Choose only Candidate 2 and ignore Candidate 5 because one diagnosis is always preferred.",
          isCorrect: false,
          feedback:
            "Not quite. Parsimony is useful, but it should not override evidence for a second plausible diagnosis.",
        },
        {
          label: "C",
          text: "Choose only Candidate 5 because recessive findings always override de novo findings.",
          isCorrect: false,
          feedback:
            "Not quite. Candidate 5 is strong for part of the phenotype, but Candidate 2 better explains the epilepsy-neurodevelopmental component.",
        },
      ],
      teachingPoint:
        "Safe blended-phenotype reasoning means documenting partial explanations and avoiding unsupported single-diagnosis assumptions.",
    },
  ],

  finalReflection:
    "A safe trainee-level conclusion would be that this case may represent a blended or dual diagnosis. Candidate 2 is a strong apparent de novo canonical splice donor variant in SYNBLEND2 and provides a convincing explanation for the developmental delay, epilepsy, hypotonia, and poor growth. However, it does not clearly explain the renal cysts or progressive visual problems. Candidate 5 is a strong compound heterozygous CILBLEND5 candidate with variants apparently in trans and provides a convincing explanation for the retinal-renal-poor-growth component, but it does not fully explain the epilepsy-heavy neurodevelopmental presentation. Candidates 1, 3, and 4 are weaker because of inheritance, population, mechanism, technical, or phenotype-fit limitations. The safest next step is to prioritise both Candidate 2 and Candidate 5 for review, document which phenotype components each may explain, and escalate the possibility of a blended or dual diagnosis through the appropriate clinical laboratory review pathway.",
};