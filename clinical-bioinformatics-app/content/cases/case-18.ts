export const case18 = {
  id: "case-18",
  slug: "poor-parental-coverage-inheritance-case",
  title: "Case 18: Poor parental coverage and inheritance confidence",
  level: "Intermediate",
  summary:
    "A technical confidence case focused on not over-calling de novo or inherited status when parental coverage or genotype quality is weak.",

  visualisationExampleId: null,

  assessmentFocus: [
    "Parental coverage and genotype-quality review",
    "De novo confidence assessment",
    "Incomplete recessive evidence",
    "Second-allele exclusion limitations",
    "Technical confidence versus clinical relevance",
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
        "Rank the findings from strongest to weakest based on phenotype fit, inheritance confidence, parental coverage, variant consequence, gene mechanism, technical confidence, and whether each finding should drive the current case conclusion.",
      correctOrder: [
        "candidate-3",
        "candidate-1",
        "candidate-2",
        "candidate-4",
      ],
      explanation:
        "Candidate 3 is strongest because the phenotype, apparent de novo inheritance, canonical splice consequence, loss-of-function mechanism, population absence, proband evidence, and parental coverage all align. Candidate 1 is biologically plausible because it is a missense variant in a relevant epilepsy gene and is technically clean in the proband, but the father has very poor coverage, so de novo status is not secure. Candidate 2 is technically convincing as one inherited loss-of-function variant in a recessive gene, but it is incomplete as a single heterozygous allele and the second-allele exclusion is limited by coverage and variant-class gaps. Candidate 4 is weakest because it is technically real but inherited from an unaffected parent, relatively frequent, and supported by broad/limited gene-disease evidence.",
    },

    escalationDecision: {
      prompt:
        "Choose the safest next action for this candidate set.",
      options: [
        {
          id: "report-candidate-1-denovo",
          label: "A",
          decision:
            "Report Candidate 1 as de novo because the proband call is technically clean and the mother has good reference coverage.",
          isBest: false,
          feedback:
            "Review this choice. A de novo claim requires reliable absence in both parents. The father has very poor coverage and low genotype quality, so Candidate 1 should not be called confidently de novo.",
        },
        {
          id: "prioritise-candidate-3",
          label: "B",
          decision:
            "Prioritise Candidate 3 for formal review, while documenting the poor paternal coverage limitation for Candidate 1 and incomplete recessive evidence for Candidate 2.",
          isBest: true,
          feedback:
            "Best decision. Candidate 3 has the strongest and most secure inheritance evidence. The coverage limitations in Candidate 1 and Candidate 2 should be made visible rather than ignored.",
        },
        {
          id: "hold-case-for-inheritance",
          label: "C",
          decision:
            "Hold all findings because one candidate has poor parental coverage and another has incomplete second-allele assessment.",
          isBest: false,
          feedback:
            "Review this choice. Coverage limitations affect specific interpretations, but Candidate 3 has good proband and parental evidence and can be escalated with appropriate review.",
        },
      ],
    },

    writtenSummary: {
      prompt:
        "Write a short trainee-level handover summary explaining the strongest candidate, how parental coverage affects inheritance confidence, why the other findings are weaker, and the safest next step.",
      checklist: [
        "Names Candidate 3 as the strongest current finding.",
        "Explains that Candidate 3 has good proband evidence and good parental coverage supporting apparent de novo status.",
        "Links Candidate 3 to the phenotype, canonical splice consequence, and loss-of-function mechanism.",
        "Mentions that Candidate 1 is plausible in the proband but cannot be confidently called de novo because paternal coverage is poor.",
        "Explains that Candidate 2 is a single inherited heterozygous variant in a recessive gene.",
        "Mentions that low coverage or incomplete variant-class assessment limits confidence that a second allele is absent for Candidate 2.",
        "Explains why Candidate 4 is weak despite being technically real.",
        "Avoids using low-depth parental reference calls as strong evidence of absence.",
        "Avoids calling any finding a final diagnosis without formal review and sign-off.",
      ],
      modelAnswer:
        "Candidate 3 is the strongest current finding for formal review. It is an apparent de novo canonical splice donor variant in NDDCOV8, a gene associated with autosomal dominant neurodevelopmental disorder where loss-of-function is a reported mechanism. The proband’s developmental delay, early-onset seizures, hypotonia, and feeding difficulties fit the disease context, and the raw evidence is strong, with balanced allele support, high mapping quality, second-caller detection, population absence, and good parental coverage supporting absence in both parents. Candidate 1 remains biologically plausible because it is technically clean in the proband and lies in a relevant epilepsy gene, but it should not be confidently called de novo because the father has only 4 reads and low genotype quality at the site. Candidate 2 is technically convincing as one maternally inherited stop-gained variant in a recessive gene, but it is incomplete evidence for a biallelic condition, and coverage or variant-class limitations mean a second allele has not been fully excluded. Candidate 4 is technically real but clinically weak because it is inherited from an unaffected father, relatively frequent, and has limited broad gene-disease support. The safest next step is to prioritise Candidate 3 for formal review while documenting the inheritance and coverage limitations for the other findings.",
    },
  },

  reasoningScorecard: [
    {
      category: "Parental coverage review",
      maxScore: 2,
      expectation:
        "Checks depth and genotype quality in both parents before accepting a de novo or inherited interpretation.",
    },
    {
      category: "De novo confidence",
      maxScore: 2,
      expectation:
        "Recognises that a low-depth parental 0/0 call is not strong evidence of true absence.",
    },
    {
      category: "Incomplete recessive evidence",
      maxScore: 2,
      expectation:
        "Recognises that one heterozygous loss-of-function variant is incomplete for a recessive biallelic diagnosis unless a second allele or mechanism is identified.",
    },
    {
      category: "Candidate prioritisation",
      maxScore: 2,
      expectation:
        "Prioritises the finding with the best convergence across phenotype, inheritance confidence, variant consequence, mechanism, population evidence, and technical quality.",
    },
    {
      category: "Safe escalation",
      maxScore: 2,
      expectation:
        "Escalates the strongest candidate for formal review while documenting where parental coverage and second-allele limitations affect interpretation.",
    },
  ],

  patient: {
    age: 4,
    sex: "Female",
  },

  referralReason:
    "A 4-year-old girl has been referred for rare disease genome analysis because of global developmental delay, early-onset seizures, hypotonia, and feeding difficulties.",

  testType: "Rare disease trio genome sequencing",

  familyStructure:
    "The proband and both biological parents have been tested. Both parents are reportedly unaffected.",

  history: [
    "Global developmental delay noted in infancy",
    "Seizures beginning before age 2",
    "Hypotonia from early childhood",
    "Feeding difficulties requiring specialist input",
    "No known previous molecular diagnosis",
    "No similarly affected relatives reported",
  ],

  phenotype: [
    "Global developmental delay",
    "Early-onset seizures",
    "Hypotonia",
    "Feeding difficulties",
  ],

  familyHistory:
    "Both parents are reportedly unaffected. No known family history of early-onset seizures, developmental delay, hypotonia, or a similar presentation.",

  serviceContext: [
    "The analysis is being performed in a rare disease service context.",
    "The main issue is inheritance confidence.",
    "A candidate may look de novo only because one parent has poor coverage or a weak genotype at the site.",
    "Your task is to decide which candidate has a secure enough inheritance pattern to prioritise, and which candidates need caveats because parental evidence is incomplete.",
  ],

  candidateFindings: [
    {
      id: "candidate-1",
      label: "Candidate 1",
      gene: "SEIZLOW1",
      variant: "chr3:119004221 G>A",
      zygosity: "Heterozygous",
      consequence: "missense_variant",
      inheritanceSignal: "Appears de novo, but paternal coverage is poor",
      clinicalFit:
        "SEIZLOW1 is associated with an autosomal dominant developmental epilepsy disorder. The phenotype overlap is plausible, but paternal coverage is too weak to confidently support a de novo interpretation.",
      rawEvidence: `GENE: SEIZLOW1
Known disease association: autosomal dominant developmental epilepsy disorder
Reported inheritance: autosomal dominant
Known mechanism: de novo missense variants in a recurrent functional domain

Variant:
chr3:119004221 G>A
Transcript: NM_180001.2
HGVS: c.1012G>A p.(Gly338Arg)
Consequence: missense_variant
Protein domain: recurrent functional domain

VCF-style fields:
QUAL=604
FILTER=PASS
INFO: DP=42;MQ=60;QD=14.4;SOR=0.88
FORMAT: GT:AD:DP:GQ

Proband: 0/1:21,21:42:99
Mother: 0/0:38,0:38:99
Father: 0/0:4,0:4:15

Read-level notes:
Proband ALT reads seen on both forward and reverse strands
Proband ALT reads distributed across read positions
No local mapping warning
No soft-clipping concern

Parental coverage note:
Mother has good depth and no ALT reads
Father has only 4 reads at the site
Father genotype quality is low
The paternal 0/0 call is not strong enough to confidently prove absence

Population:
gnomAD AF = not observed
gnomAD allele count = 0

Constraint:
LOEUF = 0.36
pLI = 0.81

ClinVar-style summary:
No exact matching variant record found in local summary
Nearby missense variants in the same functional domain have been submitted in affected individuals`,
      concern:
        "This is biologically plausible and technically clean in the proband, but the inheritance conclusion is unsafe because the father has very poor coverage. It should not be called confidently de novo without review or confirmation.",
    },
    {
      id: "candidate-2",
      label: "Candidate 2",
      gene: "RECESSLOW4",
      variant: "chr9:77188290 C>T",
      zygosity: "Heterozygous",
      consequence: "stop_gained",
      inheritanceSignal: "Inherited from mother; paternal second-allele exclusion limited by low coverage",
      clinicalFit:
        "RECESSLOW4 is associated with an autosomal recessive neurodevelopmental disorder with seizures and feeding difficulties. A single inherited loss-of-function variant is not enough to explain the condition.",
      rawEvidence: `GENE: RECESSLOW4
Known disease association: autosomal recessive neurodevelopmental disorder
Reported inheritance: autosomal recessive
Known mechanism: biallelic loss-of-function

Variant:
chr9:77188290 C>T
Transcript: NM_180002.4
HGVS: c.889C>T p.(Arg297*)
Consequence: stop_gained
Predicted effect: premature termination codon

VCF-style fields:
QUAL=754
FILTER=PASS
INFO: DP=48;MQ=60;QD=15.7;SOR=0.74
FORMAT: GT:AD:DP:GQ

Proband: 0/1:25,23:48:99
Mother: 0/1:22,21:43:99
Father: 0/0:40,0:40:99

Read-level notes:
ALT reads seen on both forward and reverse strands
ALT reads distributed across read positions
No local mapping warning
No soft-clipping concern

Second-allele review:
No second coding SNV/indel identified in current candidate list
No confident exon-level deletion/duplication detected
Coverage warning: several paternal-informative intragenic regions have low coverage in the proband
Deep intronic and regulatory variants not assessed in this summary

Population:
gnomAD AF = 0.000003
gnomAD allele count = 1
No homozygotes observed in local summary

Constraint:
LOEUF = 0.33
pLI = 0.79

ClinVar-style summary:
No exact matching variant record found in local summary
Other biallelic loss-of-function variants in RECESSLOW4 have been submitted in affected individuals`,
      concern:
        "This is technically convincing as one inherited heterozygous loss-of-function variant, but it does not currently provide a full recessive explanation. The coverage limitations should be documented rather than treated as proof that no second allele exists.",
    },
    {
      id: "candidate-3",
      label: "Candidate 3",
      gene: "NDDCOV8",
      variant: "chr12:44219011 T>G",
      zygosity: "Heterozygous",
      consequence: "splice_donor_variant",
      inheritanceSignal: "Apparent de novo with good parental coverage",
      clinicalFit:
        "NDDCOV8 is associated with an autosomal dominant neurodevelopmental disorder including developmental delay, seizures, hypotonia, and feeding difficulties. Loss-of-function is a reported mechanism.",
      rawEvidence: `GENE: NDDCOV8
Known disease association: autosomal dominant neurodevelopmental disorder
Reported inheritance: autosomal dominant
Known mechanism: haploinsufficiency / loss-of-function

Variant:
chr12:44219011 T>G
Transcript: NM_180003.5
HGVS: c.601+1T>G
Consequence: splice_donor_variant
Splice position: canonical +1 donor site
Predicted effect: likely donor splice-site disruption

VCF-style fields:
QUAL=910
FILTER=PASS
INFO: DP=51;MQ=60;QD=17.8;SOR=0.69
FORMAT: GT:AD:DP:GQ

Proband: 0/1:26,25:51:99
Mother: 0/0:43,0:43:99
Father: 0/0:45,0:45:99

Read-level notes:
ALT reads seen on both forward and reverse strands
ALT reads distributed across read positions
High mapping quality for supporting reads
No low-complexity sequence flag
No pseudogene or segmental duplication warning
No concerning soft-clipping around the variant
Second caller: detected

Population:
gnomAD AF = not observed
gnomAD allele count = 0

Constraint:
LOEUF = 0.18
pLI = 0.99

ClinVar-style summary:
No exact matching variant record found in local summary
Other canonical splice-site and truncating variants in NDDCOV8 have been submitted as pathogenic/likely pathogenic in affected individuals`,
      concern:
        "This is the strongest current candidate because the proband call is technically convincing, both parents have good coverage as reference, and the phenotype, inheritance, consequence, mechanism, and population evidence align.",
    },
    {
      id: "candidate-4",
      label: "Candidate 4",
      gene: "BROADINF3",
      variant: "chr6:22190444 A>C",
      zygosity: "Heterozygous",
      consequence: "missense_variant",
      inheritanceSignal: "Inherited from unaffected father",
      clinicalFit:
        "BROADINF3 has a broad neurodevelopmental association in limited reports, but the variant is inherited from an unaffected parent and is relatively frequent for a severe rare disease model.",
      rawEvidence: `GENE: BROADINF3
Known disease association: broad neurodevelopmental association in limited reports
Reported inheritance: autosomal dominant proposed
Known mechanism: uncertain

Variant:
chr6:22190444 A>C
Transcript: NM_180004.1
HGVS: c.722A>C p.(Lys241Thr)
Consequence: missense_variant

VCF-style fields:
QUAL=588
FILTER=PASS
INFO: DP=44;MQ=60;QD=13.4;SOR=0.90
FORMAT: GT:AD:DP:GQ

Proband: 0/1:22,22:44:99
Mother: 0/0:39,0:39:99
Father: 0/1:20,21:41:99

Read-level notes:
ALT reads seen on both forward and reverse strands
ALT reads distributed across read positions
No local mapping warning
No soft-clipping concern

Population:
gnomAD AF = 0.0011
gnomAD allele count = 310
Homozygotes observed in population summary = 1

Constraint:
LOEUF = 0.84
pLI = 0.06

ClinVar-style summary:
No exact matching pathogenic record found in local summary
Gene-disease relationship remains limited and broad in available summary`,
      concern:
        "This is technically convincing as a real inherited variant, but it is clinically weak because inheritance, frequency, gene-disease strength, and mechanism do not fit well.",
    },
  ],

  decisionCheckpoints: [
    {
      id: "checkpoint-1",
      title: "Checkpoint 1 — Do not over-call de novo status",
      context:
        "Candidate 1 looks de novo at first glance, but the father has DP=4 and GQ=15 at the site.",
      question:
        "What is the safest interpretation of Candidate 1’s inheritance?",
      options: [
        {
          label: "A",
          text: "Call it definitely de novo because the father is labelled 0/0 and the proband call is technically clean.",
          isCorrect: false,
          feedback:
            "Not quite. A 0/0 label with very low depth and low genotype quality is not strong evidence of true absence.",
        },
        {
          label: "B",
          text: "Call it inherited from the father because low coverage means the parent probably carries the variant.",
          isCorrect: false,
          feedback:
            "Not quite. Low coverage creates uncertainty. It does not prove inheritance.",
        },
        {
          label: "C",
          text: "Treat the proband call as plausible, but avoid a secure de novo claim because paternal coverage is poor.",
          isCorrect: true,
          feedback:
            "Correct. The variant may still be relevant, but the inheritance conclusion needs caution and review.",
        },
      ],
      teachingPoint:
        "De novo confidence depends on adequate genotype quality and coverage in both parents.",
    },
    {
      id: "checkpoint-2",
      title: "Checkpoint 2 — Incomplete recessive evidence",
      context:
        "Candidate 2 is a single inherited heterozygous stop-gained variant in a recessive gene. No second allele is identified, but some regions are poorly covered or not fully assessed.",
      question:
        "What is the best interpretation of Candidate 2?",
      options: [
        {
          label: "A",
          text: "Treat it as diagnostic because one loss-of-function variant is enough evidence for a recessive condition.",
          isCorrect: false,
          feedback:
            "Not quite. A recessive biallelic condition usually requires evidence affecting both alleles.",
        },
        {
          label: "B",
          text: "Treat it as potentially relevant but incomplete, because absence of a second allele is not fully reassuring with coverage or variant-class limitations.",
          isCorrect: true,
          feedback:
            "Correct. Candidate 2 should be documented as incomplete recessive evidence with limitations.",
        },
        {
          label: "C",
          text: "Dismiss it entirely because inherited variants should not be reviewed in rare disease analysis.",
          isCorrect: false,
          feedback:
            "Not quite. Inherited variants can be highly relevant in recessive disease, but the evidence shown is incomplete.",
        },
      ],
      teachingPoint:
        "Poor coverage or incomplete variant-class assessment can limit confidence that a second allele is truly absent.",
    },
    {
      id: "checkpoint-3",
      title: "Checkpoint 3 — Identify the best-supported inheritance pattern",
      context:
        "Candidate 3 is an apparent de novo canonical splice donor variant. The proband has balanced allele support and both parents have good coverage and high genotype quality as reference.",
      question:
        "Why is Candidate 3 the strongest candidate?",
      options: [
        {
          label: "A",
          text: "Because canonical splice variants should be treated as reportable before phenotype or inheritance review.",
          isCorrect: false,
          feedback:
            "Not quite. Canonical splice variants can be strong, but they still need phenotype, mechanism, inheritance, population, and technical review.",
        },
        {
          label: "B",
          text: "Because the inheritance evidence is secure and the phenotype, consequence, mechanism, population, and technical evidence all align.",
          isCorrect: true,
          feedback:
            "Correct. Candidate 3 has the most secure and convergent evidence pattern in this case.",
        },
        {
          label: "C",
          text: "Because the gene name is the most relevant regardless of the technical and inheritance evidence.",
          isCorrect: false,
          feedback:
            "Not quite. Gene relevance alone is not enough. The strength comes from the whole evidence pattern.",
        },
      ],
      teachingPoint:
        "A well-supported de novo candidate requires strong evidence in the proband and reliable absence in both parents.",
    },
    {
      id: "checkpoint-4",
      title: "Checkpoint 4 — Technical reality versus priority",
      context:
        "Candidate 4 is technically clean, but it is inherited from an unaffected father, relatively frequent, and in a gene with limited disease evidence.",
      question:
        "What does Candidate 4 illustrate?",
      options: [
        {
          label: "A",
          text: "A technically real variant can still be clinically weak if inheritance, frequency, mechanism, and gene-disease evidence do not fit.",
          isCorrect: true,
          feedback:
            "Correct. Candidate 4 is likely real, but not a strong explanation for this case.",
        },
        {
          label: "B",
          text: "An inherited variant from an unaffected parent should be treated as a likely technical artefact.",
          isCorrect: false,
          feedback:
            "Not quite. Inherited variants can be real. The issue is clinical relevance.",
        },
        {
          label: "C",
          text: "Any technically clean variant should outrank a de novo candidate with a high-impact consequence.",
          isCorrect: false,
          feedback:
            "Not quite. Technical confidence is necessary, but clinical and genetic plausibility also matter.",
        },
      ],
      teachingPoint:
        "Technical confidence answers whether the call is likely real. It does not automatically make the variant clinically relevant.",
    },
    {
      id: "checkpoint-5",
      title: "Checkpoint 5 — Safe service-style next step",
      context:
        "Candidate 3 is the strongest current candidate. Candidate 1 has uncertain de novo status because of poor paternal coverage. Candidate 2 is incomplete recessive evidence. Candidate 4 is technically real but clinically weak.",
      question:
        "What is the safest next step?",
      options: [
        {
          label: "A",
          text: "Prioritise Candidate 3 for review, document why Candidate 1’s inheritance is uncertain, and document the incomplete recessive limitation for Candidate 2.",
          isCorrect: true,
          feedback:
            "Correct. This gives a safe, reviewable conclusion and makes the coverage limitations visible.",
        },
        {
          label: "B",
          text: "Report Candidate 1 as de novo because the proband evidence is good and one parent is clearly reference.",
          isCorrect: false,
          feedback:
            "Not quite. The proband evidence is only part of a de novo claim. Reliable evidence from both parents is also required.",
        },
        {
          label: "C",
          text: "Remove Candidate 2 from the summary because only one allele was found in a recessive gene.",
          isCorrect: false,
          feedback:
            "Not quite. Candidate 2 may be incomplete, but the coverage and second-allele limitations should still be documented.",
        },
      ],
      teachingPoint:
        "Safe service reasoning includes documenting why inheritance confidence is strong or weak for each candidate.",
    },
  ],

  finalReflection:
    "A safe trainee-level conclusion would be that Candidate 3 is the strongest current candidate for review because it is a technically convincing apparent de novo canonical splice donor variant in a phenotype-compatible gene with a loss-of-function mechanism, and both parents have good coverage and high genotype quality supporting absence. Candidate 1 remains plausible in the proband, but it should not be called confidently de novo because paternal coverage is very poor. Candidate 2 is technically convincing as a single inherited heterozygous loss-of-function variant in a recessive gene, but it is incomplete evidence and coverage limitations mean a second allele has not been fully excluded. Candidate 4 is technically real but clinically weak because of inheritance, population frequency, and limited gene-disease support. The safest next step is to prioritise Candidate 3, document the inheritance and coverage limitations, and escalate through the appropriate review pathway.",
};