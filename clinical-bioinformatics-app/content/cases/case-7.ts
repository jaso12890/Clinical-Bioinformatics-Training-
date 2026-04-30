export const case7 = {
  id: "case-7",
  slug: "population-frequency-problem-case",
  title: "Case 7: Population frequency problem",
  level: "Beginner",
  summary:
    "A rare disease case focused on using population frequency, allele count, homozygote observations, inheritance, and disease prevalence to avoid over-prioritising variants that are too common.",

  visualisationExampleId: null,

  assessmentFocus: [
    "Population frequency interpretation",
    "Allele count and homozygote review",
    "Disease prevalence reasoning",
    "Inheritance and mechanism fit",
    "Technical confidence versus clinical plausibility",
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
        "Rank the findings from strongest to weakest based on population frequency, inheritance pattern, phenotype fit, gene-disease mechanism, technical confidence, and whether each finding should drive the case conclusion.",
      correctOrder: [
        "candidate-4",
        "candidate-3",
        "candidate-2",
        "candidate-1",
      ],
      explanation:
        "Candidate 4 is strongest because the phenotype, apparent de novo inheritance, domain-relevant missense consequence, population absence, constraint, and technical evidence all align. Candidate 3 is weaker but still worth noting because it is rare and apparently de novo, although the splice consequence and gene-disease evidence are uncertain. Candidate 2 has a recessive-looking genotype and technical support, but the allele frequency, high allele count, and observed homozygotes make it much less plausible for a severe early-onset recessive condition. Candidate 1 is weakest because it is inherited from an unaffected parent, relatively common for a severe dominant childhood disorder, has observed homozygotes, and has broad rather than specific gene-disease support.",
    },

    escalationDecision: {
      prompt:
        "Choose the safest next action for the strongest finding in this case.",
      options: [
        {
          id: "escalate-candidate-4",
          label: "A",
          decision:
            "Escalate Candidate 4 for formal review, documenting the population evidence and the reasons the other candidates are weaker.",
          isBest: true,
          feedback:
            "Best decision. Candidate 4 has the strongest overall convergence, and the population-frequency concerns for Candidates 1 and 2 should be clearly documented rather than ignored.",
        },
        {
          id: "report-candidate-4-now",
          label: "B",
          decision:
            "Treat Candidate 4 as diagnostic immediately because it is absent from population data and appears de novo.",
          isBest: false,
          feedback:
            "Review this choice. Population absence and apparent de novo status support prioritisation, but they do not remove the need for formal variant interpretation, review, and sign-off.",
        },
        {
          id: "escalate-candidate-2",
          label: "C",
          decision:
            "Escalate Candidate 2 first because the homozygous genotype and parental carrier pattern are more important than population frequency.",
          isBest: false,
          feedback:
            "Review this choice. A recessive-looking genotype can be important, but the high allele frequency and observed homozygotes strongly weaken Candidate 2 for a severe rare disorder.",
        },
      ],
    },

    writtenSummary: {
      prompt:
        "Write a short trainee-level handover summary explaining the strongest candidate, how population frequency affects the case, why the other findings are weaker, and the safest next step.",
      checklist: [
        "Names Candidate 4 as the strongest current finding.",
        "Mentions the apparent de novo inheritance pattern for Candidate 4.",
        "Uses phenotype fit with severe early-onset developmental delay, seizures, microcephaly, and feeding difficulties.",
        "Mentions the domain-relevant missense consequence and autosomal dominant disease mechanism.",
        "Mentions that Candidate 4 is absent from population data and has reassuring technical evidence.",
        "Explains why Candidate 1 is weakened by inheritance from an unaffected parent and high population frequency.",
        "Explains why Candidate 2 is weakened by high allele frequency and observed homozygotes despite the recessive-looking genotype.",
        "Explains why Candidate 3 is interesting but uncertain because of splice and gene-disease limitations.",
        "Avoids calling Candidate 4 a final diagnosis without formal review and sign-off.",
      ],
      modelAnswer:
        "Candidate 4 is the strongest current finding for formal review. It is an apparent de novo heterozygous missense variant in SEIZ1, a gene associated with autosomal dominant developmental and epileptic encephalopathy, and it lies in a reported functional domain. The proband’s severe developmental delay, early-onset seizures, microcephaly, and feeding difficulties are compatible with the disease context, and the variant is absent from population data with reassuring technical evidence. Candidate 1 is technically convincing but weak because it is inherited from an unaffected parent, has a high allele count, observed homozygotes, and broad rather than specific gene-disease support. Candidate 2 has a recessive-looking genotype with both parents as carriers, but the allele frequency, high allele count, and observed homozygotes make it much less plausible for a severe early-onset recessive condition. Candidate 3 is rare and apparently de novo, but the splice-region effect and gene-disease relationship remain uncertain. The safest next step is to document the population-frequency reasoning and escalate Candidate 4 through the appropriate clinical laboratory review pathway rather than treating it as a final diagnosis.",
    },
  },

  reasoningScorecard: [
    {
      category: "Population frequency reasoning",
      maxScore: 2,
      expectation:
        "Uses allele frequency, allele count, and observed homozygotes to judge whether a variant is plausible for a severe rare disease model.",
    },
    {
      category: "Inheritance interpretation",
      maxScore: 2,
      expectation:
        "Distinguishes a plausible de novo dominant candidate from inherited or common findings that do not fit the expected disease model well.",
    },
    {
      category: "Clinical plausibility",
      maxScore: 2,
      expectation:
        "Recognises that a technically clean call can still be clinically weak if the frequency is too high for the phenotype severity and inheritance model.",
    },
    {
      category: "Candidate prioritisation",
      maxScore: 2,
      expectation:
        "Prioritises the candidate with the best convergence across phenotype, inheritance, mechanism, domain relevance, population absence, and technical confidence.",
    },
    {
      category: "Safe escalation",
      maxScore: 2,
      expectation:
        "Escalates the strongest candidate for formal review while documenting why high-frequency or uncertain alternatives were deprioritised.",
    },
  ],

  patient: {
    age: 3,
    sex: "Female",
  },

  referralReason:
    "A 3-year-old girl has been referred for rare disease genome analysis because of severe developmental delay, early-onset seizures, microcephaly, and feeding difficulties.",

  testType: "Rare disease trio genome sequencing",

  familyStructure:
    "The proband and both biological parents have been tested. Both parents are reportedly unaffected. There is no known consanguinity.",

  history: [
    "Severe global developmental delay noted in infancy",
    "Early-onset seizures beginning before age 1",
    "Microcephaly documented on growth monitoring",
    "Feeding difficulties requiring specialist input",
    "No known previous molecular diagnosis",
  ],

  phenotype: [
    "Severe global developmental delay",
    "Early-onset seizures",
    "Microcephaly",
    "Feeding difficulties",
  ],

  familyHistory:
    "Both parents are unaffected. No known family history of severe developmental delay, seizures, microcephaly, or infantile neurological disease.",

  serviceContext: [
    "The analysis is being performed in a rare disease service context.",
    "The phenotype is severe and early-onset, so population frequency should be interpreted carefully.",
    "A variant can look technically clean and still be clinically implausible if it is too common for the disease model.",
    "Your task is to decide which candidate is plausible after considering technical confidence, inheritance, population frequency, and gene-disease mechanism.",
  ],

  candidateFindings: [
    {
      id: "candidate-1",
      label: "Candidate 1",
      gene: "NDEV2",
      variant: "chr13:55321990 C>T",
      zygosity: "Heterozygous",
      consequence: "missense_variant",
      inheritanceSignal: "Inherited from unaffected mother",
      clinicalFit:
        "NDEV2 has a broad neurodevelopmental association, but the variant is inherited from an unaffected parent and is seen at a frequency that is difficult to reconcile with a severe early-onset dominant disorder.",
      rawEvidence: `GENE: NDEV2
Known disease association: broad neurodevelopmental disorder
Reported inheritance: autosomal dominant
Known mechanism: damaging de novo variants reported in affected individuals

Variant:
chr13:55321990 C>T
Transcript: NM_600002.2
HGVS: c.776C>T p.(Pro259Leu)
Consequence: missense_variant
Protein domain: outside recognised recurrent pathogenic region in local summary

VCF-style fields:
QUAL=688
FILTER=PASS
INFO: DP=44;MQ=60;QD=15.6;SOR=0.76
FORMAT: GT:AD:DP:GQ

Proband: 0/1:23,21:44:99
Mother: 0/1:20,22:42:99
Father: 0/0:37,0:37:99

Read-level notes:
ALT reads seen on both forward and reverse strands
ALT reads distributed across read positions
No obvious local mapping warning
No soft-clipping concern

Population:
gnomAD AF = 0.004
gnomAD allele count = 1080
Homozygotes observed in population summary = 2

Constraint:
LOEUF = 0.74
pLI = 0.14

ClinVar-style summary:
No exact matching pathogenic record found in local summary
Gene-disease relationship is broad and not specific in available summary`,
      concern:
        "This is technically convincing as a variant call, but the population frequency, observed homozygotes, inheritance from an unaffected parent, and weak specificity make it a poor candidate for a severe dominant childhood-onset disorder.",
    },
    {
      id: "candidate-2",
      label: "Candidate 2",
      gene: "MICRO5",
      variant: "chr2:88910441 A>C",
      zygosity: "Homozygous",
      consequence: "missense_variant",
      inheritanceSignal: "Both parents heterozygous carriers",
      clinicalFit:
        "MICRO5 is associated with an autosomal recessive microcephaly-developmental delay condition, but this specific variant is relatively frequent and homozygotes are observed in population data.",
      rawEvidence: `GENE: MICRO5
Known disease association: autosomal recessive microcephaly-developmental delay syndrome
Reported inheritance: autosomal recessive
Known mechanism: biallelic loss-of-function or damaging missense variants in constrained regions

Variant:
chr2:88910441 A>C
Transcript: NM_600003.1
HGVS: c.1189A>C p.(Thr397Pro)
Consequence: missense_variant
Protein domain: outside known constrained functional region in local summary

VCF-style fields:
QUAL=936
FILTER=PASS
INFO: DP=53;MQ=60;QD=17.7;SOR=0.81
FORMAT: GT:AD:DP:GQ

Proband: 1/1:0,53:53:99
Mother: 0/1:24,22:46:99
Father: 0/1:23,24:47:99

Read-level notes:
ALT reads in proband seen on both forward and reverse strands
Parental heterozygous calls have balanced allele support
ALT reads distributed across read positions
No obvious local mapping warning
No soft-clipping concern

Population:
gnomAD AF = 0.012
gnomAD allele count = 3200
Homozygotes observed in population summary = 18

Constraint:
LOEUF = 0.66
pLI = 0.19

ClinVar-style summary:
No exact matching pathogenic record found in local summary
Pathogenic variants in this gene are usually very rare biallelic loss-of-function or damaging variants in a specific functional region`,
      concern:
        "This has a technically clean recessive-looking inheritance pattern, but the population frequency and observed homozygotes make it much less plausible for a severe early-onset recessive condition.",
    },
    {
      id: "candidate-3",
      label: "Candidate 3",
      gene: "BRAINX7",
      variant: "chr18:22190377 T>G",
      zygosity: "Heterozygous",
      consequence: "splice_region_variant",
      inheritanceSignal: "Apparent de novo",
      clinicalFit:
        "BRAINX7 has a possible neurodevelopmental association, but the splice-region consequence is uncertain and the technical data are only moderate.",
      rawEvidence: `GENE: BRAINX7
Known disease association: possible autosomal dominant neurodevelopmental disorder
Reported inheritance: autosomal dominant proposed in limited reports
Known mechanism: uncertain; splice-disrupting variants reported in limited evidence

Variant:
chr18:22190377 T>G
Transcript: NM_600004.3
HGVS: c.650+5T>G
Consequence: splice_region_variant
Splice prediction summary: moderate predicted splice impact in local summary

VCF-style fields:
QUAL=94
FILTER=PASS
INFO: DP=28;MQ=52;QD=3.4;SOR=1.9
FORMAT: GT:AD:DP:GQ

Proband: 0/1:16,12:28:72
Mother: 0/0:31,0:31:99
Father: 0/0:30,0:30:99

Read-level notes:
ALT reads seen on both strands
ALT reads mostly distributed across read positions
No obvious low-complexity sequence flag
No pseudogene warning
Moderate mapping quality compared with strongest calls

Population:
gnomAD AF = 0.000006
gnomAD allele count = 2
No homozygotes observed in local summary

Constraint:
LOEUF = 0.52
pLI = 0.48

ClinVar-style summary:
No exact matching variant record found in local summary
Gene-disease relationship and splice mechanism remain limited in available summary`,
      concern:
        "This is rare and potentially interesting, but the gene-disease evidence and splice consequence are uncertain. It may be worth noting but is not the strongest current candidate.",
    },
    {
      id: "candidate-4",
      label: "Candidate 4",
      gene: "SEIZ1",
      variant: "chr4:124889201 G>A",
      zygosity: "Heterozygous",
      consequence: "missense_variant",
      inheritanceSignal: "Apparent de novo",
      clinicalFit:
        "SEIZ1 is associated with an autosomal dominant developmental and epileptic encephalopathy. The phenotype overlap is plausible, and the variant lies in a reported functional domain.",
      rawEvidence: `GENE: SEIZ1
Known disease association: autosomal dominant developmental and epileptic encephalopathy
Reported inheritance: autosomal dominant
Known mechanism: de novo damaging missense variants in a recurrent functional domain

Variant:
chr4:124889201 G>A
Transcript: NM_600001.4
HGVS: c.1015G>A p.(Gly339Arg)
Consequence: missense_variant
Protein domain: recurrent functional domain

VCF-style fields:
QUAL=721
FILTER=PASS
INFO: DP=45;MQ=60;QD=16.0;SOR=0.84
FORMAT: GT:AD:DP:GQ

Proband: 0/1:22,23:45:99
Mother: 0/0:39,0:39:99
Father: 0/0:41,0:41:99

Read-level notes:
ALT reads seen on both forward and reverse strands
ALT reads distributed across read positions
No obvious local mapping warning
No soft-clipping concern
No low-complexity sequence flag

Population:
gnomAD AF = not observed
gnomAD allele count = 0
No homozygotes observed in local summary

Constraint:
LOEUF = 0.27
pLI = 0.96

ClinVar-style summary:
No exact matching variant record found in local summary
Nearby missense variants in the same functional domain have been submitted as pathogenic/likely pathogenic in affected individuals`,
      concern:
        "This is the strongest current candidate because the phenotype, apparent de novo inheritance, domain-relevant missense consequence, population absence, constraint, and technical evidence are broadly aligned.",
    },
  ],

  decisionCheckpoints: [
    {
      id: "checkpoint-1",
      title: "Checkpoint 1 — Use frequency before getting attached",
      context:
        "Candidate 1 is technically clean and in a broadly relevant neurodevelopmental gene. However, gnomAD AF is 0.004, allele count is 1080, and homozygotes are observed in the population summary.",
      question:
        "What is the safest interpretation of Candidate 1?",
      options: [
        {
          label: "A",
          text: "Prioritise it because the call is technically clean and the gene has a neurodevelopmental association.",
          isCorrect: false,
          feedback:
            "Not quite. Technical confidence means the call may be real, but the frequency is difficult to reconcile with a severe rare dominant childhood disorder.",
        },
        {
          label: "B",
          text: "Treat it as technically plausible but clinically weak because it appears too common for the proposed severe rare disease model.",
          isCorrect: true,
          feedback:
            "Correct. This is a population-frequency problem. A clean call can still be a poor disease candidate if it is too common.",
        },
        {
          label: "C",
          text: "Dismiss it as a sequencing artefact because common variants are usually caused by poor variant calling.",
          isCorrect: false,
          feedback:
            "Not quite. The variant may be technically real. The problem is clinical plausibility, not necessarily technical validity.",
        },
      ],
      teachingPoint:
        "Population frequency helps protect against over-prioritising technically real but clinically implausible variants.",
    },
    {
      id: "checkpoint-2",
      title: "Checkpoint 2 — Homozygotes in population data",
      context:
        "Candidate 2 is homozygous in the proband and both parents are carriers. However, gnomAD AF is 0.012, allele count is 3200, and 18 homozygotes are observed in the population summary.",
      question:
        "Why is Candidate 2 weak for a severe early-onset recessive disorder?",
      options: [
        {
          label: "A",
          text: "Because a high population frequency and observed homozygotes make it less plausible as the cause of a severe rare recessive condition.",
          isCorrect: true,
          feedback:
            "Correct. The inheritance pattern looks recessive, but the population evidence strongly weakens the candidate.",
        },
        {
          label: "B",
          text: "Because homozygous variants are less compatible with recessive disease than heterozygous variants.",
          isCorrect: false,
          feedback:
            "Not quite. Homozygous variants can cause recessive disease, but the variant must still be rare enough and mechanism-compatible.",
        },
        {
          label: "C",
          text: "Because technically clean missense variants should be ignored before inheritance and frequency are reviewed.",
          isCorrect: false,
          feedback:
            "Not quite. Missense variants can matter, but here the population frequency and homozygote count are major concerns.",
        },
      ],
      teachingPoint:
        "For severe rare disease, population homozygotes can be a major warning sign, especially when the phenotype would be expected to be highly penetrant.",
    },
    {
      id: "checkpoint-3",
      title: "Checkpoint 3 — Rare but uncertain candidate",
      context:
        "Candidate 3 is rare and appears de novo, but the splice-region consequence is uncertain and the gene-disease evidence is limited.",
      question:
        "What is the best interpretation of Candidate 3?",
      options: [
        {
          label: "A",
          text: "Treat it as diagnostic because it is rare, apparently de novo, and has a possible splice effect.",
          isCorrect: false,
          feedback:
            "Not quite. Rarity and apparent de novo inheritance support plausibility, but they do not prove clinical relevance.",
        },
        {
          label: "B",
          text: "Note it as interesting, but do not rank it above a candidate with clearer phenotype, mechanism, domain, population, and technical support.",
          isCorrect: true,
          feedback:
            "Correct. Candidate 3 is not impossible, but the splice effect and gene-disease relationship are too uncertain to outrank the stronger candidate.",
        },
        {
          label: "C",
          text: "Remove it permanently because splice-region variants are not useful unless they are canonical splice-site changes.",
          isCorrect: false,
          feedback:
            "Not quite. Splice-region variants can matter, but they need stronger supporting evidence than is shown here.",
        },
      ],
      teachingPoint:
        "Rarity and de novo inheritance are helpful, but uncertain splice evidence and limited gene-disease validity should reduce priority.",
    },
    {
      id: "checkpoint-4",
      title: "Checkpoint 4 — Identify the strongest candidate",
      context:
        "Candidate 4 is rare/absent from population data, apparently de novo, technically strong, phenotype-compatible, and in a constrained gene with relevant domain evidence.",
      question:
        "Which candidate should be prioritised first?",
      options: [
        {
          label: "A",
          text: "Candidate 1, because a high allele count provides stronger evidence that the variant is real.",
          isCorrect: false,
          feedback:
            "Not quite. A high allele count in population data usually weakens a rare disease candidate.",
        },
        {
          label: "B",
          text: "Candidate 2, because a homozygous genotype should outweigh the population-frequency warning.",
          isCorrect: false,
          feedback:
            "Not quite. Inheritance model matters, but population frequency and disease mechanism must also fit.",
        },
        {
          label: "C",
          text: "Candidate 4, because population absence, de novo inheritance, phenotype fit, domain relevance, and technical evidence align best.",
          isCorrect: true,
          feedback:
            "Correct. Candidate 4 has the strongest convergence of evidence in this case.",
        },
      ],
      teachingPoint:
        "The strongest candidate is the one where the evidence converges, not simply the one with the cleanest call or most interesting inheritance pattern.",
    },
    {
      id: "checkpoint-5",
      title: "Checkpoint 5 — Safe service-style next step",
      context:
        "Candidate 4 is the strongest current candidate. Candidate 1 and Candidate 2 are technically plausible but too common for the proposed disease models. Candidate 3 is rare but uncertain.",
      question:
        "What is the safest next step?",
      options: [
        {
          label: "A",
          text: "Prioritise Candidate 2 because a homozygous genotype is more important than population frequency in recessive analysis.",
          isCorrect: false,
          feedback:
            "Not quite. A homozygous genotype can be important, but high population frequency and observed homozygotes can strongly weaken the candidate.",
        },
        {
          label: "B",
          text: "Report Candidate 4 immediately because absence from gnomAD is sufficient evidence for a severe rare disease.",
          isCorrect: false,
          feedback:
            "Not quite. Population absence supports plausibility but is not enough for a final interpretation. The candidate still needs appropriate review.",
        },
        {
          label: "C",
          text: "Prioritise Candidate 4 for review, document the frequency concerns for Candidates 1 and 2, and note the uncertainty around Candidate 3.",
          isCorrect: true,
          feedback:
            "Correct. This is safe and reviewable. It prioritises the best-supported candidate and explains why the alternatives are weaker.",
        },
      ],
      teachingPoint:
        "Safe prioritisation includes documenting why high-frequency or uncertain candidates were deprioritised rather than simply ignoring them.",
    },
  ],

  finalReflection:
    "A safe trainee-level conclusion would be that Candidate 4 is the strongest current candidate for further review because it is apparently de novo, technically convincing, absent from population data, in a constrained gene, located in a relevant functional domain, and fits the severe early-onset neurodevelopmental phenotype. Candidate 1 and Candidate 2 are technically plausible calls, but their population frequencies and allele counts are too high for the proposed severe rare disease models, with Candidate 2 further weakened by observed homozygotes in population data. Candidate 3 is rare and may be worth noting, but the splice consequence and gene-disease evidence are uncertain. The safest next step is to document the population-frequency reasoning and escalate Candidate 4 through the appropriate review pathway.",
};