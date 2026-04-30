export const case13 = {
  id: "case-13",
  slug: "low-coverage-false-reassurance-case",
  title: "Case 13: Low coverage false reassurance",
  level: "Intermediate",
  summary:
    "A technical confidence case focused on recognising when low coverage makes inheritance, absence, or exclusion claims unsafe.",

  visualisationExampleId: null,

  assessmentFocus: [
    "Low-coverage interpretation",
    "False reassurance from reference calls",
    "De novo confidence assessment",
    "Incomplete recessive exclusion",
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
        "Rank the findings from strongest to weakest based on phenotype fit, inheritance confidence, coverage quality, variant consequence, gene mechanism, technical confidence, and whether each finding should drive the current case conclusion.",
      correctOrder: [
        "candidate-2",
        "candidate-1",
        "candidate-3",
        "candidate-4",
      ],
      explanation:
        "Candidate 2 is strongest because the phenotype, apparent de novo inheritance, functional-domain missense consequence, population absence, technical evidence, and parental coverage all align. Candidate 1 is biologically tempting because it is a rare stop-gained variant in a plausible loss-of-function neurodevelopmental gene, but the maternal coverage is too low to confidently support de novo status. Candidate 3 is technically convincing as a single inherited splice acceptor variant in a recessive gene, but it does not currently provide a complete biallelic explanation; low coverage means a second allele has not been fully excluded. Candidate 4 is weakest because it is technically real but inherited from an unaffected parent, relatively frequent, and in a gene with limited disease evidence.",
    },

    escalationDecision: {
      prompt:
        "Choose the safest next action for this candidate set.",
      options: [
        {
          id: "report-candidate-1-denovo",
          label: "A",
          decision:
            "Report Candidate 1 as a de novo diagnostic finding because the proband call is strong and the variant is stop-gained.",
          isBest: false,
          feedback:
            "Review this choice. The proband call is strong, but the maternal site has very low depth and low genotype quality, so de novo status is not secure.",
        },
        {
          id: "escalate-candidate-2",
          label: "B",
          decision:
            "Prioritise Candidate 2 for formal review, documenting the low-coverage limitation for Candidate 1 and incomplete recessive assessment for Candidate 3.",
          isBest: true,
          feedback:
            "Best decision. Candidate 2 has the strongest overall evidence, and the key safety issue is making the low-coverage limitations visible rather than overclaiming absence or de novo status.",
        },
        {
          id: "hold-case-for-coverage",
          label: "C",
          decision:
            "Hold all findings because any low-coverage warning in the case makes the full analysis uninterpretable.",
          isBest: false,
          feedback:
            "Review this choice. Low coverage affects specific claims, especially Candidate 1 inheritance and Candidate 3 second-allele exclusion. Candidate 2 still has strong evidence and can be escalated with caveats.",
        },
      ],
    },

    writtenSummary: {
      prompt:
        "Write a short trainee-level handover summary explaining the strongest candidate, how low coverage affects the interpretation, why the other findings are weaker, and the safest next step.",
      checklist: [
        "Names Candidate 2 as the strongest current finding.",
        "Explains that Candidate 2 has good proband and parental coverage supporting apparent de novo status.",
        "Links Candidate 2 to the phenotype and functional-domain disease mechanism.",
        "Mentions that Candidate 1 is biologically plausible but cannot be confidently called de novo because maternal coverage is very low.",
        "Explains that Candidate 3 is a single inherited recessive-gene variant and does not currently provide a complete biallelic explanation.",
        "Mentions that low coverage in RECESS7 exons means a second allele has not been fully excluded.",
        "Explains why Candidate 4 is weak despite being technically real.",
        "Avoids using low-depth reference calls as strong evidence of absence.",
        "Avoids calling any finding a final diagnosis without formal review and sign-off.",
      ],
      modelAnswer:
        "Candidate 2 is the strongest current finding for formal review. It is an apparent de novo missense variant in EPIREL2, a gene associated with autosomal dominant developmental and epileptic encephalopathy, and it lies in a recurrent functional domain where damaging missense variants have been reported. The proband’s developmental delay, early-onset seizures, hypotonia, and speech delay fit the disease context, and the raw evidence is strong, with balanced allele support in the proband and good parental coverage supporting the apparent de novo interpretation. Candidate 1 is biologically tempting because it is a rare stop-gained variant in NDEV10, a plausible loss-of-function neurodevelopmental gene, but it should not be confidently called de novo because the mother has only 3 reads and low genotype quality at the site. Candidate 3 is technically convincing as a single inherited splice acceptor variant in a recessive gene, but it does not currently provide a full biallelic explanation, and low coverage in exons 2 and 3 means a second allele has not been fully excluded. Candidate 4 is technically real but weak because it is inherited from an unaffected parent, relatively frequent, and in a gene with limited disease evidence. The safest next step is to prioritise Candidate 2 for formal review, document the low-coverage limitations, and avoid overclaiming absence, inheritance, or exclusion from poorly covered data.",
    },
  },

  reasoningScorecard: [
    {
      category: "Coverage-aware interpretation",
      maxScore: 2,
      expectation:
        "Recognises that low depth and low genotype quality can make absence, reference genotype, or inheritance claims unreliable.",
    },
    {
      category: "De novo confidence",
      maxScore: 2,
      expectation:
        "Uses coverage and genotype quality in both parents before treating a proband variant as confidently de novo.",
    },
    {
      category: "Recessive exclusion limits",
      maxScore: 2,
      expectation:
        "Recognises that low coverage can prevent confident exclusion of a second allele in a recessive gene.",
    },
    {
      category: "Candidate prioritisation",
      maxScore: 2,
      expectation:
        "Prioritises the candidate with the best convergence across phenotype, inheritance confidence, mechanism, consequence, rarity, and technical evidence.",
    },
    {
      category: "Safe escalation",
      maxScore: 2,
      expectation:
        "Escalates the strongest candidate for formal review while clearly documenting where low coverage limits interpretation.",
    },
  ],

  patient: {
    age: 5,
    sex: "Male",
  },

  referralReason:
    "A 5-year-old boy has been referred for rare disease genome analysis because of developmental delay, early-onset seizures, hypotonia, and poor speech development.",

  testType: "Rare disease trio genome sequencing",

  familyStructure:
    "The proband and both biological parents have been tested. Both parents are reportedly unaffected.",

  history: [
    "Global developmental delay noted in infancy",
    "Seizures beginning before age 2",
    "Hypotonia from early childhood",
    "Poor expressive speech development",
    "No known previous molecular diagnosis",
    "No similarly affected relatives reported",
  ],

  phenotype: [
    "Global developmental delay",
    "Early-onset seizures",
    "Hypotonia",
    "Speech delay",
  ],

  familyHistory:
    "Both parents are unaffected. No known family history of seizures, developmental delay, hypotonia, or a similar neurodevelopmental presentation.",

  serviceContext: [
    "The analysis is being performed in a rare disease service context.",
    "The key technical issue in this case is low coverage.",
    "A genotype that appears reference is not always reliable if depth and genotype quality are poor.",
    "Your task is to avoid over-calling de novo status, inheritance, or absence when the relevant sample is poorly covered.",
  ],

  candidateFindings: [
    {
      id: "candidate-1",
      label: "Candidate 1",
      gene: "NDEV10",
      variant: "chr6:77290014 C>T",
      zygosity: "Heterozygous",
      consequence: "stop_gained",
      inheritanceSignal: "Appears absent from mother, but maternal coverage is very low",
      clinicalFit:
        "NDEV10 is associated with an autosomal dominant neurodevelopmental disorder including developmental delay, seizures, hypotonia, and speech delay. Loss-of-function is a reported mechanism.",
      rawEvidence: `GENE: NDEV10
Known disease association: autosomal dominant neurodevelopmental disorder
Reported inheritance: autosomal dominant
Known mechanism: haploinsufficiency / loss-of-function

Variant:
chr6:77290014 C>T
Transcript: NM_130001.3
HGVS: c.1006C>T p.(Arg336*)
Consequence: stop_gained
Predicted effect: premature termination codon

VCF-style fields:
QUAL=702
FILTER=PASS
INFO: DP=46;MQ=60;QD=15.3;SOR=0.86
FORMAT: GT:AD:DP:GQ

Proband: 0/1:24,22:46:99
Mother: 0/0:3,0:3:12
Father: 0/0:39,0:39:99

Read-level notes:
Proband ALT reads seen on both forward and reverse strands
Proband ALT reads distributed across read positions
No obvious low-complexity sequence flag
No pseudogene or segmental duplication warning

Parental coverage note:
Mother has only 3 reads at this site
Maternal genotype quality is low
The maternal 0/0 call is not strong enough to confidently prove absence
Father has good depth and no ALT reads

Population:
gnomAD AF = not observed
gnomAD allele count = 0

Constraint:
LOEUF = 0.22
pLI = 0.97

ClinVar-style summary:
No exact matching variant record found in local summary
Other truncating variants in NDEV10 have been submitted as pathogenic/likely pathogenic in affected individuals`,
      concern:
        "This is biologically tempting and technically strong in the proband, but the inheritance conclusion is unsafe because the mother has very low coverage. It should not be called confidently de novo without additional review or confirmation.",
    },
    {
      id: "candidate-2",
      label: "Candidate 2",
      gene: "EPIREL2",
      variant: "chr11:44190288 G>A",
      zygosity: "Heterozygous",
      consequence: "missense_variant",
      inheritanceSignal: "Apparent de novo with good parental coverage",
      clinicalFit:
        "EPIREL2 is associated with an autosomal dominant developmental and epileptic encephalopathy. The variant lies in a recurrent functional domain where de novo missense variants have been reported.",
      rawEvidence: `GENE: EPIREL2
Known disease association: autosomal dominant developmental and epileptic encephalopathy
Reported inheritance: autosomal dominant
Known mechanism: de novo damaging missense variants in a recurrent functional domain

Variant:
chr11:44190288 G>A
Transcript: NM_130002.4
HGVS: c.1255G>A p.(Gly419Arg)
Consequence: missense_variant
Protein domain: recurrent functional domain

VCF-style fields:
QUAL=812
FILTER=PASS
INFO: DP=49;MQ=60;QD=16.6;SOR=0.74
FORMAT: GT:AD:DP:GQ

Proband: 0/1:24,25:49:99
Mother: 0/0:41,0:41:99
Father: 0/0:38,0:38:99

Read-level notes:
ALT reads seen on both forward and reverse strands
ALT reads distributed across read positions
No local low-complexity sequence flag
No pseudogene or segmental duplication warning
No concerning soft-clipping around the variant

Population:
gnomAD AF = not observed
gnomAD allele count = 0

Constraint:
LOEUF = 0.31
pLI = 0.93

ClinVar-style summary:
No exact matching variant record found in local summary
Nearby missense variants in the same functional domain have been submitted as pathogenic/likely pathogenic in affected individuals`,
      concern:
        "This is the strongest current candidate because the phenotype, apparent de novo inheritance, parental coverage, functional-domain relevance, population absence, and technical evidence are all supportive.",
    },
    {
      id: "candidate-3",
      label: "Candidate 3",
      gene: "RECESS7",
      variant: "chr2:118809331 A>G",
      zygosity: "Heterozygous",
      consequence: "splice_acceptor_variant",
      inheritanceSignal: "Inherited from father; second allele not identified, but some exons have poor coverage",
      clinicalFit:
        "RECESS7 is associated with an autosomal recessive neurodevelopmental disorder with seizures. A splice acceptor variant could be relevant, but only one heterozygous allele is identified in the current evidence.",
      rawEvidence: `GENE: RECESS7
Known disease association: autosomal recessive neurodevelopmental disorder with seizures
Reported inheritance: autosomal recessive
Known mechanism: biallelic loss-of-function

Variant:
chr2:118809331 A>G
Transcript: NM_130003.2
HGVS: c.744-2A>G
Consequence: splice_acceptor_variant
Splice position: canonical -2 acceptor site
Predicted effect: likely acceptor splice-site disruption

VCF-style fields:
QUAL=733
FILTER=PASS
INFO: DP=44;MQ=60;QD=16.7;SOR=0.80
FORMAT: GT:AD:DP:GQ

Proband: 0/1:22,22:44:99
Mother: 0/0:40,0:40:99
Father: 0/1:20,21:41:99

Read-level notes:
ALT reads seen on both forward and reverse strands
ALT reads distributed across read positions
No local mapping warning
No soft-clipping concern

Second-allele review:
No second coding SNV/indel identified in current candidate list
No confident exon-level deletion/duplication detected
Coverage warning: exons 2 and 3 have mean depth below 8x in proband
Low-coverage exons reduce confidence that a second allele has been fully excluded
Deep intronic/regulatory variants not assessed in this summary

Population:
gnomAD AF = 0.000004
gnomAD allele count = 1
No homozygotes observed in local summary

Constraint:
LOEUF = 0.36
pLI = 0.70

ClinVar-style summary:
No exact matching variant record found in local summary
Biallelic splice-site or truncating variants in RECESS7 have been submitted in affected individuals`,
      concern:
        "This is technically convincing as a single inherited splice variant, but it does not currently provide a full recessive explanation. Low coverage in some exons means a second allele is not fully excluded, so the limitation should be documented.",
    },
    {
      id: "candidate-4",
      label: "Candidate 4",
      gene: "BROAD4",
      variant: "chr15:22901488 T>C",
      zygosity: "Heterozygous",
      consequence: "missense_variant",
      inheritanceSignal: "Inherited from unaffected mother",
      clinicalFit:
        "BROAD4 has a broad neurodevelopmental association, but the variant is inherited from an unaffected parent and is relatively frequent in population data.",
      rawEvidence: `GENE: BROAD4
Known disease association: broad neurodevelopmental association in limited reports
Reported inheritance: autosomal dominant proposed
Known mechanism: uncertain

Variant:
chr15:22901488 T>C
Transcript: NM_130004.1
HGVS: c.611T>C p.(Leu204Pro)
Consequence: missense_variant

VCF-style fields:
QUAL=544
FILTER=PASS
INFO: DP=43;MQ=60;QD=12.7;SOR=0.91
FORMAT: GT:AD:DP:GQ

Proband: 0/1:21,22:43:99
Mother: 0/1:20,21:41:99
Father: 0/0:37,0:37:99

Read-level notes:
ALT reads seen on both forward and reverse strands
ALT reads distributed across read positions
No obvious local mapping warning

Population:
gnomAD AF = 0.0018
gnomAD allele count = 460
Homozygotes observed in population summary = 1

Constraint:
LOEUF = 0.81
pLI = 0.09

ClinVar-style summary:
No exact matching pathogenic record found in local summary
Gene-disease relationship remains limited in available summary`,
      concern:
        "This appears technically real, but it is weak as a rare disease candidate because it is inherited from an unaffected parent, relatively frequent, and has limited mechanism/gene-disease support.",
    },
  ],

  decisionCheckpoints: [
    {
      id: "checkpoint-1",
      title: "Checkpoint 1 — Low parental coverage and de novo confidence",
      context:
        "Candidate 1 looks like a possible de novo stop-gained variant, but the mother has only DP=3 and GQ=12 at this site.",
      question:
        "What is the safest interpretation of Candidate 1’s inheritance?",
      options: [
        {
          label: "A",
          text: "Call it de novo because the mother is labelled 0/0 and the proband call itself has strong evidence.",
          isCorrect: false,
          feedback:
            "Not quite. A 0/0 label is not reliable if the sample has very low depth and low genotype quality at the site.",
        },
        {
          label: "B",
          text: "Treat the proband call as plausible, but avoid a secure de novo claim because maternal coverage is too low.",
          isCorrect: true,
          feedback:
            "Correct. The variant may still be important, but the inheritance claim needs caution and further review.",
        },
        {
          label: "C",
          text: "Dismiss the proband variant because low coverage in one parent means the proband call is unreliable.",
          isCorrect: false,
          feedback:
            "Not quite. Low parental coverage does not make the proband call false; it weakens the inheritance conclusion.",
        },
      ],
      teachingPoint:
        "A parent labelled 0/0 is not strong evidence of absence if depth and genotype quality are poor.",
    },
    {
      id: "checkpoint-2",
      title: "Checkpoint 2 — Identify the strongest candidate",
      context:
        "Candidate 2 is an apparent de novo missense variant in EPIREL2 with good proband depth, balanced allele support, high GQ, good MQ, and both parents well covered as reference.",
      question:
        "Why is Candidate 2 stronger than Candidate 1 at this stage?",
      options: [
        {
          label: "A",
          text: "Because missense variants are more useful than truncating variants when the phenotype includes seizures.",
          isCorrect: false,
          feedback:
            "Not quite. Variant consequence must be interpreted in gene-mechanism context. The key difference here is confidence in the inheritance and overall evidence pattern.",
        },
        {
          label: "B",
          text: "Because Candidate 1 is automatically false whenever a parent has low coverage at the same locus.",
          isCorrect: false,
          feedback:
            "Not quite. Candidate 1 is not automatically false. Its de novo status is uncertain.",
        },
        {
          label: "C",
          text: "Because Candidate 2 has strong proband evidence and enough parental coverage to support the apparent de novo interpretation.",
          isCorrect: true,
          feedback:
            "Correct. Candidate 2 has better-supported inheritance and a strong overall evidence pattern.",
        },
      ],
      teachingPoint:
        "Inheritance confidence depends on the quality of all relevant samples, not just the proband call.",
    },
    {
      id: "checkpoint-3",
      title: "Checkpoint 3 — Low coverage can also limit exclusion",
      context:
        "Candidate 3 is a single inherited heterozygous splice acceptor variant in a recessive gene. No second allele is found, but exons 2 and 3 have mean depth below 8x in the proband.",
      question:
        "What does the low coverage mean for Candidate 3?",
      options: [
        {
          label: "A",
          text: "A second allele has not been confidently excluded in the poorly covered regions.",
          isCorrect: true,
          feedback:
            "Correct. Low coverage can limit the ability to exclude a second variant in a recessive gene.",
        },
        {
          label: "B",
          text: "The known splice variant should be ignored because other exons have low coverage.",
          isCorrect: false,
          feedback:
            "Not quite. The splice variant is technically real, but the recessive explanation is incomplete.",
        },
        {
          label: "C",
          text: "The low coverage proves that a hidden second variant is present in the poorly covered exons.",
          isCorrect: false,
          feedback:
            "Not quite. Low coverage creates uncertainty; it does not prove a hidden variant exists.",
        },
      ],
      teachingPoint:
        "Low coverage can create false reassurance by making it seem that nothing else is present when the region was not adequately assessed.",
    },
    {
      id: "checkpoint-4",
      title: "Checkpoint 4 — Technical reality is not clinical priority",
      context:
        "Candidate 4 is technically clean, but it is inherited from an unaffected mother, relatively frequent, and in a gene with limited disease evidence.",
      question:
        "What is the best interpretation of Candidate 4?",
      options: [
        {
          label: "A",
          text: "Prioritise it because technical quality should outweigh inheritance and population concerns at the first review stage.",
          isCorrect: false,
          feedback:
            "Not quite. Technical confidence tells you the call is likely real; it does not prove clinical relevance.",
        },
        {
          label: "B",
          text: "Treat it as technically plausible but clinically weak because inheritance, frequency, and gene-disease evidence do not fit well.",
          isCorrect: true,
          feedback:
            "Correct. Candidate 4 is a good example of a real variant that is not a strong candidate.",
        },
        {
          label: "C",
          text: "Treat it as an artefact because inherited variants from unaffected parents are not reliable calls.",
          isCorrect: false,
          feedback:
            "Not quite. Inherited variants can be real. The issue is whether they fit the disease model.",
        },
      ],
      teachingPoint:
        "A technically reliable call can still be deprioritised for clinical, inheritance, or population reasons.",
    },
    {
      id: "checkpoint-5",
      title: "Checkpoint 5 — Safe service-style next step",
      context:
        "Candidate 2 is the strongest current candidate. Candidate 1 is biologically plausible but de novo status is uncertain because of poor maternal coverage. Candidate 3 is incomplete recessive evidence with low-coverage limitations. Candidate 4 is clinically weak.",
      question:
        "What is the safest next step?",
      options: [
        {
          label: "A",
          text: "Report Candidate 1 as de novo because the proband evidence is strong and the variant consequence is high-impact.",
          isCorrect: false,
          feedback:
            "Not quite. The maternal low coverage means the de novo claim is not secure.",
        },
        {
          label: "B",
          text: "Prioritise Candidate 2 for review, document the low-coverage limitation for Candidate 1, and note the incomplete recessive assessment for Candidate 3.",
          isCorrect: true,
          feedback:
            "Correct. This is safe and reviewable because it prioritises the best-supported candidate while making coverage limitations visible.",
        },
        {
          label: "C",
          text: "Ignore coverage details because FILTER=PASS and a genotype label are enough to support candidate interpretation.",
          isCorrect: false,
          feedback:
            "Not quite. FILTER=PASS does not replace sample-level coverage and genotype-quality review.",
        },
      ],
      teachingPoint:
        "Safe clinical bioinformatics reasoning includes documenting where low coverage limits confidence in inheritance or exclusion.",
    },
  ],

  finalReflection:
    "A safe trainee-level conclusion would be that Candidate 2 is the strongest current candidate for review because the phenotype, apparent de novo inheritance, functional-domain relevance, population absence, and technical evidence are well aligned, with good coverage in both parents supporting the inheritance pattern. Candidate 1 remains biologically tempting because it is a stop-gained variant in a plausible gene, but it should not be called confidently de novo because the mother has very low coverage and low genotype quality at the site. Candidate 3 is a technically convincing single splice acceptor variant in a recessive gene, but it does not currently provide a full biallelic explanation, and low coverage in some exons means a second allele has not been fully excluded. Candidate 4 is technically real but clinically weak because of inheritance, population frequency, and limited gene-disease evidence. The safest next step is to prioritise Candidate 2, document the coverage limitations, and escalate through the appropriate review pathway.",
};