export const case25 = {
  id: "case-25",
  slug: "clinvar-conflicting-interpretations-case",
  title: "Case 25: ClinVar conflicting interpretations",
  level: "Intermediate",
  summary:
    "An interpretation-aware rare disease case focused on handling conflicting ClinVar-style evidence, review status, phenotype fit, mechanism, population data, and avoiding over-reliance on a single database label.",

  visualisationExampleId: null,

  assessmentFocus: [
    "ClinVar-style evidence interpretation",
    "Conflicting database submissions",
    "Review status and assertion strength",
    "Case-level evidence integration",
    "Inheritance and population context",
    "Technical confidence and safe escalation",
  ],

  guidedTutorMode: {
    type: "static-rule-based",
    description:
      "Uses built-in hints, checkpoint feedback, model answers, and self-check criteria to support safe case reasoning.",
  },

  phase5Assessment: {
    candidateRanking: {
      prompt:
        "Rank the findings from strongest to weakest based on phenotype fit, inheritance, mechanism, population evidence, technical confidence, ClinVar-style review status, and whether the database evidence supports or conflicts with the case-level reasoning.",
      correctOrder: [
        "candidate-1",
        "candidate-3",
        "candidate-2",
        "candidate-4",
      ],
      explanation:
        "Candidate 1 is strongest because the case-level evidence is highly supportive: apparent de novo inheritance, phenotype fit, relevant functional domain, population absence, strong technical evidence, and a higher-review likely pathogenic submission despite conflicting interpretations. Candidate 3 has strong variant-level database support for a recessive disorder and is technically convincing, but only one inherited heterozygous allele is identified, so it is incomplete as an explanation. Candidate 2 is technically real but weakened by inheritance from an unaffected mother, population frequency, observed homozygotes, limited gene-disease evidence, and conflicting low-review submissions. Candidate 4 is weakest because the raw technical evidence is fragile, and a single low-review pathogenic label without assertion criteria should not override poor read-level confidence.",
    },

    escalationDecision: {
      prompt:
        "Choose the safest next action for this candidate set.",
      options: [
        {
          id: "prioritise-candidate-1",
          label: "A",
          decision:
            "Prioritise Candidate 1 for formal review, documenting the conflicting database evidence and the supportive case-level evidence.",
          isBest: true,
          feedback:
            "Best decision. Candidate 1 has the strongest convergence across phenotype, inheritance, mechanism, population absence, technical confidence, and higher-review database support, while the conflict still needs to remain visible.",
        },
        {
          id: "prioritise-all-pathogenic-labels",
          label: "B",
          decision:
            "Prioritise every candidate with a pathogenic or likely pathogenic database label, because database labels should drive the case conclusion.",
          isBest: false,
          feedback:
            "Review this choice. Database labels are useful evidence, but they must be interpreted alongside review status, inheritance, population frequency, technical confidence, gene-disease validity, and phenotype fit.",
        },
        {
          id: "exclude-all-conflicts",
          label: "C",
          decision:
            "Exclude Candidate 1 because any conflicting ClinVar-style interpretation means the variant cannot be considered further.",
          isBest: false,
          feedback:
            "Review this choice. Conflicting interpretations require careful review, not automatic exclusion. Candidate 1 has strong case-level evidence and a higher-review supportive submission.",
        },
      ],
    },

    writtenSummary: {
      prompt:
        "Write a short trainee-level handover summary explaining the strongest candidate, how the conflicting database evidence should be handled, why the other findings are weaker, and the safest next step.",
      checklist: [
        "Names Candidate 1 as the strongest current finding.",
        "Explains that Candidate 1 has conflicting ClinVar-style interpretations.",
        "Mentions that the higher-review submission supports likely pathogenicity.",
        "Uses case-level evidence for Candidate 1, including de novo inheritance, phenotype fit, functional-domain relevance, population absence, and technical support.",
        "Avoids accepting Candidate 1 solely because of a database label.",
        "Explains why Candidate 2 is weaker despite one pathogenic submission.",
        "Mentions Candidate 2 inheritance, population frequency, observed homozygotes, and limited gene-disease evidence.",
        "Explains why Candidate 3 may be a real pathogenic carrier-level finding but is incomplete for a recessive diagnosis.",
        "Explains why Candidate 4 should not be prioritised despite a pathogenic label because technical evidence is weak.",
        "Avoids treating ClinVar-style evidence as the whole interpretation.",
        "Avoids calling Candidate 1 a final diagnosis without formal review and sign-off.",
      ],
      modelAnswer:
        "Candidate 1 is the strongest current finding for formal review. Although the ClinVar-style summary shows conflicting interpretations, the higher-review submission supports likely pathogenicity, and the case-level evidence is also supportive: the variant is apparently de novo with good parental coverage, absent from population data, located in a recurrent functional domain, technically well supported, and fits the developmental delay, intellectual disability, seizures, autistic features, and dysmorphic features. The conflict should be documented rather than ignored, and the variant should not be accepted solely because of a database label. Candidate 2 is weaker because the pathogenic label is older and single-submitter, while the variant is inherited from an unaffected mother, present in population data, has observed homozygotes, and the gene-disease evidence is limited. Candidate 3 may represent a genuine likely pathogenic carrier-level finding in a recessive gene, but only one inherited heterozygous allele is identified, so it does not currently explain the case alone. Candidate 4 has a pathogenic label, but the raw technical evidence is fragile and the submission quality is limited. The safest next step is to prioritise Candidate 1 for formal review while documenting the database-evidence, inheritance, population, and technical limitations across the candidate set.",
    },
  },

  reasoningScorecard: [
    {
      category: "Database evidence interpretation",
      maxScore: 2,
      expectation:
        "Uses ClinVar-style evidence as one evidence source while considering conflicts, review status, assertion criteria, and submission strength.",
    },
    {
      category: "Case-level evidence integration",
      maxScore: 2,
      expectation:
        "Combines database evidence with phenotype fit, inheritance, gene mechanism, population data, and technical confidence.",
    },
    {
      category: "Conflict handling",
      maxScore: 2,
      expectation:
        "Recognises that conflicting interpretations require careful review rather than automatic acceptance or automatic exclusion.",
    },
    {
      category: "Inheritance and mechanism reasoning",
      maxScore: 2,
      expectation:
        "Distinguishes a strong de novo dominant candidate from a single-allele recessive carrier finding and inherited population-weakened variants.",
    },
    {
      category: "Safe escalation",
      maxScore: 2,
      expectation:
        "Prioritises the strongest candidate for formal review while documenting database conflicts, technical caveats, and incomplete inheritance evidence.",
    },
  ],

  patient: {
    age: 10,
    sex: "Male",
  },

  referralReason:
    "A 10-year-old boy has been referred for rare disease genome analysis because of developmental delay, moderate intellectual disability, seizures, autistic features, and mild dysmorphic features.",

  testType: "Rare disease trio genome sequencing",

  familyStructure:
    "The proband and both biological parents have been tested. Both parents are reportedly unaffected.",

  history: [
    "Developmental delay noted from early childhood",
    "Moderate intellectual disability",
    "Seizures beginning at age 5",
    "Autistic features reported by the clinical team",
    "Mild dysmorphic features noted by clinical genetics",
    "No known previous molecular diagnosis",
  ],

  phenotype: [
    "Developmental delay",
    "Moderate intellectual disability",
    "Seizures",
    "Autistic features",
    "Mild dysmorphic features",
  ],

  familyHistory:
    "Both parents are reportedly unaffected. No known family history of seizures, intellectual disability, autism, or a similar neurodevelopmental presentation.",

  serviceContext: [
    "The analysis is being performed in a rare disease service context.",
    "The key issue is how to handle database evidence when submitted interpretations conflict.",
    "ClinVar-style summaries can be useful, but they are not a substitute for case-level reasoning.",
    "Your task is to weigh review status, number of submissions, phenotype match, inheritance, mechanism, population evidence, and technical confidence.",
  ],

  candidateFindings: [
    {
      id: "candidate-1",
      label: "Candidate 1",
      gene: "NEUROCL1",
      variant: "chr6:44190220 G>A",
      zygosity: "Heterozygous",
      consequence: "missense_variant",
      inheritanceSignal: "Apparent de novo with good parental coverage",
      clinicalFit:
        "NEUROCL1 is associated with an autosomal dominant neurodevelopmental disorder including developmental delay, intellectual disability, seizures, autistic features, and dysmorphic features. The variant lies in a recurrent functional domain.",
      rawEvidence: `GENE: NEUROCL1
Known disease association: autosomal dominant neurodevelopmental disorder
Reported inheritance: autosomal dominant
Known mechanism: de novo damaging missense variants in a recurrent functional domain

Variant:
chr6:44190220 G>A
Transcript: NM_250001.4
HGVS: c.1280G>A p.(Arg427His)
Consequence: missense_variant
Protein domain: recurrent functional domain

VCF-style fields:
QUAL=902
FILTER=PASS
INFO: DP=52;MQ=60;QD=17.3;SOR=0.76
FORMAT: GT:AD:DP:GQ

Proband: 0/1:26,26:52:99
Mother: 0/0:43,0:43:99
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
LOEUF = 0.34
pLI = 0.88
Missense/domain note: local summary highlights missense constraint in the recurrent functional domain

ClinVar-style summary:
Exact variant present with conflicting interpretations:
- Submitter 1: Likely pathogenic, single submitter
- Submitter 2: Uncertain significance, single submitter
- Submitter 3: Likely pathogenic, expert panel-style review in local summary
Overall local display: conflicting interpretations, but higher-review submission supports likely pathogenic
Nearby same-domain de novo missense variants have been submitted as pathogenic/likely pathogenic in affected individuals`,
      concern:
        "This is the strongest current candidate, but the conflict must be handled carefully. The variant should not be accepted blindly from a database label; the case-level evidence and higher-review submission both support prioritisation for review.",
    },
    {
      id: "candidate-2",
      label: "Candidate 2",
      gene: "BROADCL4",
      variant: "chr11:77219044 C>T",
      zygosity: "Heterozygous",
      consequence: "missense_variant",
      inheritanceSignal: "Inherited from unaffected mother",
      clinicalFit:
        "BROADCL4 has a broad neurodevelopmental association in limited reports. ClinVar-style evidence includes a pathogenic submission, but the variant is inherited from an unaffected parent and appears in population data.",
      rawEvidence: `GENE: BROADCL4
Known disease association: broad neurodevelopmental association in limited reports
Reported inheritance: autosomal dominant proposed
Known mechanism: uncertain

Variant:
chr11:77219044 C>T
Transcript: NM_250002.2
HGVS: c.782C>T p.(Pro261Leu)
Consequence: missense_variant
Protein domain: outside known recurrent functional region in local summary

VCF-style fields:
QUAL=688
FILTER=PASS
INFO: DP=46;MQ=60;QD=15.0;SOR=0.82
FORMAT: GT:AD:DP:GQ

Proband: 0/1:23,23:46:99
Mother: 0/1:22,21:43:99
Father: 0/0:39,0:39:99

Read-level notes:
ALT reads seen on both forward and reverse strands
ALT reads distributed across read positions
No local mapping warning
No soft-clipping concern

Population:
gnomAD AF = 0.0011
gnomAD allele count = 295
Homozygotes observed in population summary = 1

Constraint:
LOEUF = 0.79
pLI = 0.10

ClinVar-style summary:
Exact variant present with conflicting interpretations:
- Submitter 1: Pathogenic, single submitter, older submission
- Submitter 2: Benign, single submitter
- Submitter 3: Uncertain significance, single submitter
Overall local display: conflicting interpretations
No expert panel-style review in local summary
Gene-disease relationship remains limited`,
      concern:
        "This is technically real, but it should not be prioritised just because one older submission says pathogenic. Inheritance, population frequency, limited gene-disease evidence, and conflicting low-review submissions weaken it.",
    },
    {
      id: "candidate-3",
      label: "Candidate 3",
      gene: "RECESSCL2",
      variant: "chr2:118809331 A>G",
      zygosity: "Heterozygous",
      consequence: "splice_acceptor_variant",
      inheritanceSignal: "Inherited from unaffected father",
      clinicalFit:
        "RECESSCL2 is associated with an autosomal recessive neurodevelopmental disorder with seizures. The variant is a canonical splice acceptor, but only one inherited heterozygous allele is identified.",
      rawEvidence: `GENE: RECESSCL2
Known disease association: autosomal recessive neurodevelopmental disorder with seizures
Reported inheritance: autosomal recessive
Known mechanism: biallelic loss-of-function

Variant:
chr2:118809331 A>G
Transcript: NM_250003.5
HGVS: c.744-2A>G
Consequence: splice_acceptor_variant
Splice position: canonical -2 acceptor site
Predicted effect: likely acceptor splice-site disruption

VCF-style fields:
QUAL=744
FILTER=PASS
INFO: DP=48;MQ=60;QD=15.5;SOR=0.78
FORMAT: GT:AD:DP:GQ

Proband: 0/1:24,24:48:99
Mother: 0/0:42,0:42:99
Father: 0/1:21,22:43:99

Read-level notes:
ALT reads seen on both forward and reverse strands
ALT reads distributed across read positions
No local mapping warning
No soft-clipping concern

Second-allele review:
No second coding SNV/indel identified in current candidate list
No confident exon-level deletion/duplication detected
Deep intronic/regulatory variants not assessed in this summary

Population:
gnomAD AF = 0.000003
gnomAD allele count = 1
No homozygotes observed in local summary

Constraint:
LOEUF = 0.31
pLI = 0.82

ClinVar-style summary:
Exact variant present:
- Likely pathogenic for recessive RECESSCL2-related disorder, multiple submitters, no conflict
Other biallelic splice/truncating variants in RECESSCL2 have been submitted in affected individuals`,
      concern:
        "This variant has stronger database support than some others, but it is only one inherited heterozygous allele in a recessive gene. It does not currently explain the case alone.",
    },
    {
      id: "candidate-4",
      label: "Candidate 4",
      gene: "ARTICL9",
      variant: "chr15:88190422 T>C",
      zygosity: "Heterozygous",
      consequence: "missense_variant",
      inheritanceSignal: "Apparent de novo, but technically weak",
      clinicalFit:
        "ARTICL9 has a possible neurodevelopmental association and a ClinVar-style pathogenic label, but the raw read evidence is weak and the gene-disease relationship is limited.",
      rawEvidence: `GENE: ARTICL9
Known disease association: possible neurodevelopmental disorder
Reported inheritance: autosomal dominant proposed in limited reports
Known mechanism: uncertain

Variant:
chr15:88190422 T>C
Transcript: NM_250004.1
HGVS: c.944T>C p.(Leu315Pro)
Consequence: missense_variant
Protein domain: no established recurrent hotspot in local summary

VCF-style fields:
QUAL=45
FILTER=PASS
INFO: DP=31;MQ=41;QD=1.5;SOR=5.9
FORMAT: GT:AD:DP:GQ

Proband: 0/1:25,6:31:44
Mother: 0/0:36,0:36:99
Father: 0/0:34,0:34:99

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
LOEUF = 0.68
pLI = 0.20

ClinVar-style summary:
Exact variant present:
- Pathogenic, single submitter
- No assertion criteria provided in local summary
No expert panel-style review
Gene-disease relationship remains limited in available summary`,
      concern:
        "This should not be prioritised just because a database label says pathogenic. The technical evidence is weak, and the submission quality/gene-disease evidence are limited.",
    },
  ],

  decisionCheckpoints: [
    {
      id: "checkpoint-1",
      title: "Checkpoint 1 — Conflicting ClinVar-style evidence",
      context:
        "Candidate 1 has conflicting interpretations, but the higher-review submission supports likely pathogenic. The case-level evidence also supports it: apparent de novo, absent from population data, phenotype match, relevant domain, and strong technical evidence.",
      question:
        "What is the safest interpretation of Candidate 1?",
      options: [
        {
          label: "A",
          text: "Exclude it completely because any conflict means the variant cannot be considered further.",
          isCorrect: false,
          feedback:
            "Not quite. Conflicting evidence requires careful review, not automatic exclusion.",
        },
        {
          label: "B",
          text: "Accept it as diagnostic solely because one submission says likely pathogenic.",
          isCorrect: false,
          feedback:
            "Not quite. Database labels should not replace case-level reasoning and formal review.",
        },
        {
          label: "C",
          text: "Prioritise it for review because the case-level evidence and higher-review submission support it, while documenting the conflict.",
          isCorrect: true,
          feedback:
            "Correct. Candidate 1 is strong, but the conflict should remain visible and be reviewed appropriately.",
        },
      ],
      teachingPoint:
        "Conflicting database interpretations should be weighed with review status and case-level evidence, not treated as automatic yes/no answers.",
    },
    {
      id: "checkpoint-2",
      title: "Checkpoint 2 — Do not over-trust a single pathogenic label",
      context:
        "Candidate 2 has one older single-submitter pathogenic label, but it is inherited from an unaffected mother, has gnomAD AF 0.0011, has observed homozygotes, and the gene-disease evidence is limited.",
      question:
        "Why is Candidate 2 weak despite one pathogenic submission?",
      options: [
        {
          label: "A",
          text: "Because a single database label should be weighed against inheritance, population frequency, gene-disease validity, and review status.",
          isCorrect: true,
          feedback:
            "Correct. Candidate 2 shows why database labels need context.",
        },
        {
          label: "B",
          text: "Because inherited variants are always sequencing artefacts and should not be reviewed.",
          isCorrect: false,
          feedback:
            "Not quite. The variant may be technically real. The issue is clinical plausibility.",
        },
        {
          label: "C",
          text: "Because all ClinVar-style submissions should be ignored in rare disease case analysis.",
          isCorrect: false,
          feedback:
            "Not quite. Database submissions can be useful, but they need review and context.",
        },
      ],
      teachingPoint:
        "A low-review pathogenic label can be outweighed by strong case-level evidence against relevance.",
    },
    {
      id: "checkpoint-3",
      title: "Checkpoint 3 — Strong database support but incomplete inheritance model",
      context:
        "Candidate 3 has a likely pathogenic no-conflict ClinVar-style summary for a recessive disorder, but only one inherited heterozygous allele is identified.",
      question:
        "What is the safest interpretation of Candidate 3?",
      options: [
        {
          label: "A",
          text: "Treat it as diagnostic because the database summary says likely pathogenic.",
          isCorrect: false,
          feedback:
            "Not quite. For a recessive condition, one heterozygous allele does not usually explain the affected child by itself.",
        },
        {
          label: "B",
          text: "Treat it as a possible pathogenic carrier-level finding, but incomplete as an explanation without a second relevant allele.",
          isCorrect: true,
          feedback:
            "Correct. The database support may be real, but the inheritance model is incomplete.",
        },
        {
          label: "C",
          text: "Ignore it because recessive genes cannot be relevant in trio analysis.",
          isCorrect: false,
          feedback:
            "Not quite. Recessive genes can be highly relevant, but the evidence must support biallelic disease.",
        },
      ],
      teachingPoint:
        "Variant-level database evidence still has to fit the patient’s inheritance model.",
    },
    {
      id: "checkpoint-4",
      title: "Checkpoint 4 — Database label does not override poor technical evidence",
      context:
        "Candidate 4 has a pathogenic single-submitter label, but the raw evidence includes low allele support, strand bias, read-end clustering, soft-clipping, and no second-caller support.",
      question:
        "How should Candidate 4 be handled?",
      options: [
        {
          label: "A",
          text: "Prioritise it because a pathogenic database label overrides read-level concerns.",
          isCorrect: false,
          feedback:
            "Not quite. A database label does not rescue a technically fragile call.",
        },
        {
          label: "B",
          text: "Treat it cautiously and avoid prioritising it without read-level review, despite the database label.",
          isCorrect: true,
          feedback:
            "Correct. Technical confidence still matters.",
        },
        {
          label: "C",
          text: "Report it immediately because it is absent from gnomAD and has a database entry.",
          isCorrect: false,
          feedback:
            "Not quite. Population absence is not enough, especially when technical evidence is weak.",
        },
      ],
      teachingPoint:
        "Technical evidence is foundational. A variant must be real before its clinical label can be useful.",
    },
    {
      id: "checkpoint-5",
      title: "Checkpoint 5 — Safe service-style next step",
      context:
        "Candidate 1 is the strongest current candidate, but it has conflicting ClinVar-style interpretations. Candidate 2 has weak conflicting/low-review support. Candidate 3 is incomplete recessive evidence. Candidate 4 has weak technical evidence.",
      question:
        "What is the safest next step?",
      options: [
        {
          label: "A",
          text: "Prioritise Candidate 1 for review, document the conflicting database evidence, and explain why the other candidates are weaker.",
          isCorrect: true,
          feedback:
            "Correct. This is safe and reviewable because it prioritises the best-supported candidate while keeping the conflict visible.",
        },
        {
          label: "B",
          text: "Choose whichever candidate has the word pathogenic in the database summary and ignore the rest.",
          isCorrect: false,
          feedback:
            "Not quite. Database labels must be interpreted alongside the case evidence.",
        },
        {
          label: "C",
          text: "Ignore all candidates with any database conflict, regardless of review status or case-level evidence.",
          isCorrect: false,
          feedback:
            "Not quite. Conflicts require careful interpretation, not automatic exclusion.",
        },
      ],
      teachingPoint:
        "Safe use of ClinVar-style evidence means using it as one evidence source, not as the whole interpretation.",
    },
  ],

  finalReflection:
    "A safe trainee-level conclusion would be that Candidate 1 is the strongest current candidate for further review because the phenotype, apparent de novo inheritance, functional-domain relevance, population absence, and technical evidence all support prioritisation, and the higher-review ClinVar-style submission is supportive despite conflicting interpretations. The conflict should be clearly documented and reviewed rather than ignored. Candidate 2 should not be prioritised just because one older single-submitter label says pathogenic; inheritance, frequency, observed homozygotes, limited gene-disease evidence, and conflicting submissions weaken it. Candidate 3 may represent a real pathogenic carrier-level finding in a recessive gene, but it is incomplete without a second allele. Candidate 4 should be treated cautiously because the technical evidence is weak despite a pathogenic label. The safest next step is to prioritise Candidate 1 for appropriate review while documenting the database-evidence limitations for all candidates.",
};