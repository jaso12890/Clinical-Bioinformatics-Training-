export const case14 = {
  id: "case-14",
  slug: "mosaicism-low-vaf-case",
  title: "Case 14: Mosaicism and low-VAF review",
  level: "Intermediate",
  summary:
    "A technical confidence case focused on recognising when low alternate allele fraction may represent mosaicism, artefact, or an ordinary heterozygous call.",

  visualisationExampleId: null,

  assessmentFocus: [
    "Mosaicism and low-VAF interpretation",
    "Artefact recognition in low-level calls",
    "Ordinary heterozygosity versus mosaicism",
    "Phenotype-led mosaic reasoning",
    "Tissue distribution limitations",
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
        "Rank the findings from strongest to weakest based on phenotype fit, allele fraction pattern, mosaicism plausibility, read-level confidence, inheritance, gene mechanism, and whether each finding should drive the case conclusion.",
      correctOrder: [
        "candidate-4",
        "candidate-3",
        "candidate-2",
        "candidate-1",
      ],
      explanation:
        "Candidate 4 is strongest because it best explains the combined seizures, developmental delay, asymmetric overgrowth, and pigmentary findings, has a plausible mosaic-level VAF, is absent from both parents with good coverage, lies in a relevant hotspot gene, and has technically convincing read-level support. Candidate 3 is technically convincing and apparently de novo, but it mainly fits the seizure component and does not explain the full segmental overgrowth and pigmentation phenotype. Candidate 2 is technically real as an ordinary inherited heterozygous variant, but it is clinically weak because it is inherited, relatively frequent, and poorly matched to the segmental phenotype. Candidate 1 is weakest because although it is low VAF and superficially relevant, the read-level evidence is artefact-like with strand imbalance, read-end clustering, soft-clipping, low-complexity context, and no second-caller support.",
    },

    escalationDecision: {
      prompt:
        "Choose the safest next action for the strongest finding in this case.",
      options: [
        {
          id: "prioritise-candidate-1",
          label: "A",
          decision:
            "Prioritise Candidate 1 because the lowest VAF finding is the most likely to represent true mosaicism.",
          isBest: false,
          feedback:
            "Review this choice. Low VAF alone does not prove mosaicism. Candidate 1 has multiple artefact warning signs and should not lead the case without stronger technical support.",
        },
        {
          id: "prioritise-candidate-4",
          label: "B",
          decision:
            "Prioritise Candidate 4 for formal review, documenting the mosaic evidence, technical support, phenotype fit, and tissue limitations.",
          isBest: true,
          feedback:
            "Best decision. Candidate 4 has the strongest convergence across phenotype pattern, low-VAF mosaic plausibility, hotspot mechanism, parental absence, and read-level quality.",
        },
        {
          id: "prioritise-candidate-3",
          label: "C",
          decision:
            "Prioritise Candidate 3 because an ordinary de novo heterozygous call is more reliable than any low-VAF mosaic candidate.",
          isBest: false,
          feedback:
            "Review this choice. Candidate 3 is technically reliable, but it does not explain the full segmental overgrowth and pigmentation phenotype as well as Candidate 4.",
        },
      ],
    },

    writtenSummary: {
      prompt:
        "Write a short trainee-level handover summary explaining the strongest mosaic candidate, the key evidence supporting it, why the other findings are weaker, and what limitation should still be documented.",
      checklist: [
        "Names Candidate 4 as the strongest current finding.",
        "Explains that Candidate 4 has a low allele fraction in blood consistent with possible mosaicism.",
        "Links Candidate 4 to the combined seizure, developmental delay, overgrowth, and pigmentary phenotype.",
        "Mentions that Candidate 4 is absent from both parents with good coverage.",
        "Uses read-level evidence such as strand support, read position, mapping quality, base quality, and second-caller support.",
        "Explains why Candidate 1 is weaker despite low VAF because of artefact-like read evidence.",
        "Explains why Candidate 2 is an ordinary inherited heterozygous variant rather than a mosaic finding.",
        "Explains why Candidate 3 is technically clean but does not explain the full phenotype.",
        "Mentions tissue distribution or affected-tissue confirmation as an important limitation.",
        "Avoids calling Candidate 4 a final diagnosis without formal review and sign-off.",
      ],
      modelAnswer:
        "Candidate 4 is the strongest current finding for formal review. It is a low-level activating missense variant in MOSAIC1, a gene associated with post-zygotic mosaic overgrowth-neurodevelopmental syndrome, and it lies in a recurrent hotspot domain. The proband’s focal seizures, developmental delay, asymmetric limb overgrowth, and patchy pigmentation fit a mosaic phenotype, and the blood VAF of around 16% is compatible with possible mosaicism rather than ordinary heterozygosity. The variant is absent from both parents with good coverage and has reassuring technical support, including ALT reads on both strands, distributed read positions, high base and mapping quality, no local mapping warning, no concerning soft-clipping, and second-caller detection. Candidate 1 is also low VAF but is much weaker because the ALT reads show strand imbalance, read-end clustering, soft-clipping, low-complexity context, and no second-caller support. Candidate 2 is a technically clean inherited heterozygous variant with near-50% allele balance in both proband and mother, so it is not a mosaic finding and does not fit the phenotype well. Candidate 3 is technically convincing and apparently de novo, but it mainly explains seizures and does not account for the overgrowth and pigmentation. The safest next step is to prioritise Candidate 4 for formal mosaicism review while documenting tissue distribution limitations and the possible need for affected-tissue confirmation.",
    },
  },

  reasoningScorecard: [
    {
      category: "Mosaicism reasoning",
      maxScore: 2,
      expectation:
        "Recognises when low allele fraction may support mosaicism if phenotype, mechanism, tissue context, inheritance, and technical evidence align.",
    },
    {
      category: "Artefact awareness",
      maxScore: 2,
      expectation:
        "Distinguishes credible low-VAF evidence from artefact-like patterns such as strand imbalance, read-end clustering, soft-clipping, low-complexity context, and lack of second-caller support.",
    },
    {
      category: "Allele fraction interpretation",
      maxScore: 2,
      expectation:
        "Separates ordinary near-50% heterozygous allele balance from lower VAF patterns that may require mosaicism review.",
    },
    {
      category: "Candidate prioritisation",
      maxScore: 2,
      expectation:
        "Prioritises the finding with the best convergence across full phenotype, gene mechanism, hotspot relevance, inheritance, VAF pattern, and technical confidence.",
    },
    {
      category: "Safe escalation",
      maxScore: 2,
      expectation:
        "Escalates the strongest mosaic candidate for formal review while documenting tissue limitations and avoiding overinterpretation of weak low-VAF calls.",
    },
  ],

  patient: {
    age: 8,
    sex: "Female",
  },

  referralReason:
    "An 8-year-old girl has been referred for rare disease genome analysis because of focal seizures, developmental delay, asymmetric overgrowth of one limb, and patchy skin pigmentation.",

  testType: "Rare disease trio genome sequencing",

  familyStructure:
    "The proband and both biological parents have been tested. Both parents are reportedly unaffected. The sample tested is blood-derived DNA.",

  history: [
    "Focal seizures beginning at age 3",
    "Mild-to-moderate developmental delay",
    "Asymmetric overgrowth affecting the right leg",
    "Patchy skin pigmentation noted by the clinical team",
    "No known previous molecular diagnosis",
    "No similarly affected relatives reported",
  ],

  phenotype: [
    "Focal seizures",
    "Developmental delay",
    "Segmental/asymmetric overgrowth",
    "Patchy skin pigmentation",
  ],

  familyHistory:
    "Both parents are unaffected. No known family history of seizures, overgrowth, pigmentary change, or a similar neurodevelopmental presentation.",

  serviceContext: [
    "The analysis is being performed in a rare disease service context.",
    "The phenotype raises the possibility of post-zygotic mosaicism.",
    "Low alternate allele fraction can represent true mosaicism, but it can also represent artefact.",
    "Your task is to decide which low-VAF finding is technically convincing enough to prioritise and what caveats still matter.",
  ],

  candidateFindings: [
    {
      id: "candidate-1",
      label: "Candidate 1",
      gene: "OVERG2",
      variant: "chr10:44190220 G>A",
      zygosity: "Low-level heterozygous / possible mosaic",
      consequence: "missense_variant",
      inheritanceSignal: "Absent from both parents, but technically weak",
      clinicalFit:
        "OVERG2 has a possible overgrowth association, but the exact variant is not in a known hotspot and the technical evidence is weak.",
      rawEvidence: `GENE: OVERG2
Known disease association: possible segmental overgrowth disorder
Reported inheritance: post-zygotic mosaic variants reported in some cases
Known mechanism: activating missense variants in recurrent hotspot regions

Variant:
chr10:44190220 G>A
Transcript: NM_140001.2
HGVS: c.701G>A p.(Gly234Asp)
Consequence: missense_variant
Protein domain: outside known recurrent hotspot region

VCF-style fields:
QUAL=39
FILTER=PASS
INFO: DP=84;MQ=41;QD=0.9;SOR=5.7
FORMAT: GT:AD:DP:GQ

Proband: 0/1:78,6:84:37
Mother: 0/0:76,0:76:99
Father: 0/0:80,0:80:99

Estimated ALT fraction:
Proband ALT fraction = 6 / 84 = 7.1%

Read-level notes:
ALT reads mostly on one strand
5 of 6 ALT reads occur near read ends
Soft-clipping present around several supporting reads
Local low-complexity sequence flag present
Second caller: not detected
Manual read-level review recommended before prioritisation

Population:
gnomAD AF = not observed
gnomAD allele count = 0

Constraint:
LOEUF = 0.58
pLI = 0.35

ClinVar-style summary:
No exact matching variant record found in local summary
Reported pathogenic variants in OVERG2 cluster in different hotspot residues`,
      concern:
        "This should be treated cautiously. Although the phenotype raises mosaicism as a possibility, the low ALT support, strand imbalance, read-end clustering, soft-clipping, and lack of second-caller support make this weak.",
    },
    {
      id: "candidate-2",
      label: "Candidate 2",
      gene: "NDEV14",
      variant: "chr2:77119002 C>T",
      zygosity: "Heterozygous",
      consequence: "missense_variant",
      inheritanceSignal: "Inherited from unaffected mother",
      clinicalFit:
        "NDEV14 has a broad neurodevelopmental association, but it does not explain the segmental overgrowth features well and the variant is inherited from an unaffected parent.",
      rawEvidence: `GENE: NDEV14
Known disease association: broad neurodevelopmental disorder
Reported inheritance: autosomal dominant proposed in limited reports
Known mechanism: uncertain

Variant:
chr2:77119002 C>T
Transcript: NM_140002.1
HGVS: c.1102C>T p.(Pro368Ser)
Consequence: missense_variant

VCF-style fields:
QUAL=702
FILTER=PASS
INFO: DP=48;MQ=60;QD=14.6;SOR=0.76
FORMAT: GT:AD:DP:GQ

Proband: 0/1:25,23:48:99
Mother: 0/1:24,22:46:99
Father: 0/0:41,0:41:99

Estimated ALT fraction:
Proband ALT fraction = 23 / 48 = 47.9%
Mother ALT fraction = 22 / 46 = 47.8%

Read-level notes:
ALT reads seen on both forward and reverse strands
ALT reads distributed across read positions
No obvious mapping warning
No soft-clipping concern

Population:
gnomAD AF = 0.0009
gnomAD allele count = 240
No homozygotes observed in local summary

Constraint:
LOEUF = 0.77
pLI = 0.11

ClinVar-style summary:
No exact matching pathogenic record found in local summary
Gene-disease relationship remains limited in available summary`,
      concern:
        "This is technically convincing as an ordinary heterozygous inherited variant, but it is not a strong explanation for the patient’s phenotype.",
    },
    {
      id: "candidate-3",
      label: "Candidate 3",
      gene: "SEIZM5",
      variant: "chr7:119900441 A>G",
      zygosity: "Heterozygous",
      consequence: "missense_variant",
      inheritanceSignal: "Apparent de novo",
      clinicalFit:
        "SEIZM5 is associated with autosomal dominant developmental epilepsy, but the phenotype overlap is incomplete and it does not explain the segmental overgrowth or pigmentary features.",
      rawEvidence: `GENE: SEIZM5
Known disease association: autosomal dominant developmental epilepsy
Reported inheritance: autosomal dominant
Known mechanism: de novo missense variants in constrained regions

Variant:
chr7:119900441 A>G
Transcript: NM_140003.3
HGVS: c.944A>G p.(Tyr315Cys)
Consequence: missense_variant
Protein domain: outside recurrent hotspot region in local summary

VCF-style fields:
QUAL=740
FILTER=PASS
INFO: DP=50;MQ=60;QD=14.8;SOR=0.81
FORMAT: GT:AD:DP:GQ

Proband: 0/1:26,24:50:99
Mother: 0/0:43,0:43:99
Father: 0/0:39,0:39:99

Estimated ALT fraction:
Proband ALT fraction = 24 / 50 = 48.0%

Read-level notes:
ALT reads seen on both forward and reverse strands
ALT reads distributed across read positions
No local low-complexity warning
No pseudogene or segmental duplication warning

Population:
gnomAD AF = 0.00004
gnomAD allele count = 11

Constraint:
LOEUF = 0.42
pLI = 0.71

ClinVar-style summary:
No exact matching variant record found in local summary
Gene is mainly associated with epilepsy without overgrowth features`,
      concern:
        "This is technically convincing, but the clinical fit is incomplete. It may explain seizures better than the full syndromic presentation, so it is not the strongest overall candidate.",
    },
    {
      id: "candidate-4",
      label: "Candidate 4",
      gene: "MOSAIC1",
      variant: "chr1:155220991 T>C",
      zygosity: "Low-level heterozygous / mosaic candidate",
      consequence: "activating_missense_variant",
      inheritanceSignal: "Absent from both parents with good coverage",
      clinicalFit:
        "MOSAIC1 is associated with a post-zygotic mosaic overgrowth-neurodevelopmental syndrome. Reported features include focal seizures, developmental delay, asymmetric overgrowth, and pigmentary skin changes. Activating missense variants in this hotspot are the known mechanism.",
      rawEvidence: `GENE: MOSAIC1
Known disease association: mosaic overgrowth-neurodevelopmental syndrome
Reported inheritance: usually post-zygotic mosaic
Known mechanism: activating missense variants in recurrent hotspot domain

Variant:
chr1:155220991 T>C
Transcript: NM_140004.5
HGVS: c.3140T>C p.(Leu1047Pro)
Consequence: activating_missense_variant
Protein domain: recurrent activating hotspot domain

VCF-style fields:
QUAL=620
FILTER=PASS
INFO: DP=112;MQ=60;QD=5.5;SOR=0.92
FORMAT: GT:AD:DP:GQ

Proband: 0/1:94,18:112:99
Mother: 0/0:96,0:96:99
Father: 0/0:91,0:91:99

Estimated ALT fraction:
Proband ALT fraction = 18 / 112 = 16.1%
Mother ALT fraction = 0 / 96 = 0%
Father ALT fraction = 0 / 91 = 0%

Read-level notes:
ALT reads seen on both forward and reverse strands
ALT reads distributed across read positions
High base quality for ALT-supporting reads
High mapping quality for ALT-supporting reads
No local low-complexity warning
No pseudogene or segmental duplication warning
No concerning soft-clipping around the variant
Second caller: low-level variant also detected
Variant visible on manual read-level review

Population:
gnomAD AF = not observed
gnomAD allele count = 0

Constraint:
LOEUF = 0.49
pLI = 0.63

ClinVar-style summary:
Exact variant not found in local summary
Nearby activating hotspot variants in MOSAIC1 have been submitted as pathogenic/likely pathogenic in mosaic overgrowth-neurodevelopmental phenotypes`,
      concern:
        "This is the strongest current candidate. The VAF is lower than expected for ordinary heterozygosity, but the phenotype specifically supports mosaicism and the raw evidence is technically convincing. Tissue distribution and confirmation strategy would still need appropriate review.",
    },
  ],

  decisionCheckpoints: [
    {
      id: "checkpoint-1",
      title: "Checkpoint 1 — Low VAF is not automatically mosaicism",
      context:
        "Candidate 1 has low-level ALT support: 6 ALT reads out of 84 total reads. The ALT reads are mostly one-strand, near read ends, and affected by soft-clipping and low-complexity context.",
      question:
        "What is the safest interpretation of Candidate 1?",
      options: [
        {
          label: "A",
          text: "Treat it as confirmed mosaicism because any ALT fraction below ordinary heterozygous balance is clinically meaningful.",
          isCorrect: false,
          feedback:
            "Not quite. Low VAF can suggest mosaicism, but it can also reflect artefact. The read-level pattern here is weak.",
        },
        {
          label: "B",
          text: "Treat it cautiously because the low-level signal has multiple artefact warning signs.",
          isCorrect: true,
          feedback:
            "Correct. Candidate 1 should not be prioritised as mosaic without stronger technical support.",
        },
        {
          label: "C",
          text: "Dismiss it as benign because mosaic variants cannot be detected from blood-derived DNA.",
          isCorrect: false,
          feedback:
            "Not quite. Mosaic variants can sometimes be detected in blood, depending on tissue distribution, but the evidence must be technically convincing.",
        },
      ],
      teachingPoint:
        "Low VAF is a clue, not a conclusion. Mosaicism requires technically credible evidence and phenotype support.",
    },
    {
      id: "checkpoint-2",
      title: "Checkpoint 2 — Ordinary heterozygosity versus mosaicism",
      context:
        "Candidate 2 has an ALT fraction around 48% in both the proband and mother. It is technically clean and inherited from the mother.",
      question:
        "What does Candidate 2 most likely represent?",
      options: [
        {
          label: "A",
          text: "An ordinary inherited heterozygous variant rather than a mosaic finding.",
          isCorrect: true,
          feedback:
            "Correct. The allele balance is close to 50% in both proband and mother, which fits an ordinary heterozygous inherited call.",
        },
        {
          label: "B",
          text: "A likely mosaic variant because heterozygous calls should have exactly 50% ALT reads in every sample.",
          isCorrect: false,
          feedback:
            "Not quite. Heterozygous calls often vary around 50%. A 48% ALT fraction is consistent with ordinary heterozygosity.",
        },
        {
          label: "C",
          text: "A confirmed diagnosis because inherited variants with clean allele balance are technically reliable.",
          isCorrect: false,
          feedback:
            "Not quite. Technical reality does not prove clinical relevance.",
        },
      ],
      teachingPoint:
        "A near-50% allele fraction usually fits ordinary heterozygosity, especially when the same pattern is present in a parent.",
    },
    {
      id: "checkpoint-3",
      title: "Checkpoint 3 — Compare Candidate 3 and Candidate 4",
      context:
        "Candidate 3 is a technically convincing apparent de novo heterozygous epilepsy-gene variant. Candidate 4 is a technically convincing low-VAF variant in a mosaic overgrowth gene that fits seizures, developmental delay, asymmetric overgrowth, and pigmentation.",
      question:
        "Why is Candidate 4 stronger overall?",
      options: [
        {
          label: "A",
          text: "Because low-VAF variants should always outrank ordinary heterozygous variants in rare disease analysis.",
          isCorrect: false,
          feedback:
            "Not quite. Low VAF is not automatically stronger. Candidate 4 is stronger because the phenotype, mechanism, hotspot context, and technical evidence align.",
        },
        {
          label: "B",
          text: "Because Candidate 3 is technically unreliable despite having balanced allele support and good parental data.",
          isCorrect: false,
          feedback:
            "Not quite. Candidate 3 is technically convincing, but it does not explain the full phenotype as well as Candidate 4.",
        },
        {
          label: "C",
          text: "Because Candidate 4 better explains the combined seizure, developmental, overgrowth, and pigmentation phenotype and has credible mosaic-level technical evidence.",
          isCorrect: true,
          feedback:
            "Correct. Candidate 4 has the best overall fit to the full case, not just one part of the phenotype.",
        },
      ],
      teachingPoint:
        "The best candidate is not always the cleanest ordinary heterozygous call. It is the one that best fits the full biological and technical context.",
    },
    {
      id: "checkpoint-4",
      title: "Checkpoint 4 — Mosaicism and tissue limitations",
      context:
        "Candidate 4 has 16.1% ALT fraction in blood-derived DNA. The phenotype is segmental, and the suspected disease mechanism is post-zygotic mosaicism.",
      question:
        "What limitation should be documented for Candidate 4?",
      options: [
        {
          label: "A",
          text: "Tissue distribution matters, and blood VAF may not represent the affected tissue level.",
          isCorrect: true,
          feedback:
            "Correct. In suspected mosaicism, the detected VAF may vary between tissues. Confirmation strategy and tissue relevance need review.",
        },
        {
          label: "B",
          text: "The variant should be ignored because mosaic variants cannot cause a clinically recognisable phenotype.",
          isCorrect: false,
          feedback:
            "Not quite. Mosaic variants can cause segmental or patchy clinical features.",
        },
        {
          label: "C",
          text: "The variant can be treated as final because second-caller support removes the need for clinical review.",
          isCorrect: false,
          feedback:
            "Not quite. Second-caller support helps, but clinical interpretation and confirmation/escalation still require review.",
        },
      ],
      teachingPoint:
        "Mosaic findings need careful tissue, assay, and review-context interpretation.",
    },
    {
      id: "checkpoint-5",
      title: "Checkpoint 5 — Safe service-style next step",
      context:
        "Candidate 4 is the strongest candidate. Candidate 1 is low-level but artefact-like. Candidate 2 is inherited and clinically weak. Candidate 3 is technically clean but does not explain the full phenotype.",
      question:
        "What is the safest next step?",
      options: [
        {
          label: "A",
          text: "Prioritise Candidate 1 because the lowest VAF finding is usually the best mosaic candidate.",
          isCorrect: false,
          feedback:
            "Not quite. Lowest VAF does not mean strongest mosaic candidate. Candidate 1 has artefact warning signs.",
        },
        {
          label: "B",
          text: "Prioritise Candidate 4 for review, document the mosaic evidence and tissue limitations, and explain why the other candidates are weaker.",
          isCorrect: true,
          feedback:
            "Correct. This gives a safe and reviewable conclusion without over-claiming.",
        },
        {
          label: "C",
          text: "Ignore Candidate 4 because clinically relevant variants should have an allele fraction near ordinary heterozygous balance.",
          isCorrect: false,
          feedback:
            "Not quite. This case is specifically about possible post-zygotic mosaicism, where lower VAF can be meaningful if evidence is strong.",
        },
      ],
      teachingPoint:
        "Safe mosaicism review means combining VAF, read-level confidence, phenotype pattern, mechanism, and tissue limitations.",
    },
  ],

  finalReflection:
    "A safe trainee-level conclusion would be that Candidate 4 is the strongest current candidate for further review because the phenotype suggests a mosaic overgrowth-neurodevelopmental syndrome, the variant is a low-level activating missense candidate in a relevant hotspot gene, it is absent from both parents with good coverage, and the raw read evidence is technically convincing. Candidate 1 also has low-level ALT support, but it is much weaker because the reads show strand imbalance, read-end clustering, soft-clipping, low-complexity context, and lack of second-caller support. Candidate 2 is an ordinary inherited heterozygous variant and is not a strong explanation. Candidate 3 is technically clean and may explain seizures, but it does not explain the full segmental overgrowth and pigmentary phenotype as well. The safest next step is to prioritise Candidate 4 for appropriate review, document mosaicism and tissue limitations, and avoid over-interpreting low-VAF artefact-like calls.",
};