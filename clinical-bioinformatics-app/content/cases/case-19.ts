export const case19 = {
  id: "case-19",
  slug: "sample-swap-pedigree-inconsistency-case",
  title: "Case 19: Sample swap and pedigree inconsistency",
  level: "Intermediate",
  summary:
    "A service safety case focused on recognising when family relationship or sample identity concerns must be resolved before variant prioritisation is trusted.",

  visualisationExampleId: null,

  assessmentFocus: [
    "Sample identity and pedigree QC",
    "Relationship-check interpretation",
    "De novo confidence limitations",
    "Compound heterozygous phase uncertainty",
    "Service safety escalation",
    "Safe trainee-level uncertainty handover",
  ],

  guidedTutorMode: {
    type: "static-rule-based",
    description:
      "Uses built-in hints, checkpoint feedback, model answers, and self-check criteria to support safe case reasoning.",
  },

  phase5Assessment: {
    candidateRanking: {
      prompt:
        "Rank the findings from most important to least important for the current case discussion, based on biological plausibility, technical confidence, dependence on trio relationship validity, and whether the finding can safely drive the case conclusion before the QC issue is resolved.",
      correctOrder: ["candidate-1", "candidate-2", "candidate-3"],
      explanation:
        "Candidate 1 is the most biologically and technically tempting finding because it is a rare stop-gained variant in a plausible dominant neurodevelopmental gene with strong proband read evidence, but it cannot be confidently called de novo while the recorded father relationship check is abnormal. Candidate 2 is also potentially relevant because two technically plausible variants are present in a recessive gene, but compound heterozygous interpretation and phase cannot be trusted until the pedigree or sample issue is resolved. Candidate 3 is technically real but clinically weak because it is inherited from the recorded mother, relatively frequent, and in a gene with limited broad disease evidence. Overall, the key case conclusion is not that Candidate 1 or Candidate 2 should be finalised, but that the sample or relationship QC issue must be escalated before inheritance-based interpretation is trusted.",
    },

    escalationDecision: {
      prompt:
        "Choose the safest next action for this case when the candidate findings depend on a trio with abnormal relationship QC.",
      options: [
        {
          id: "report-candidate-1-denovo",
          label: "A",
          decision:
            "Report Candidate 1 as a de novo loss-of-function diagnosis because the proband call is technically strong and both recorded parents are labelled reference.",
          isBest: false,
          feedback:
            "Review this choice. Candidate 1 may be biologically important, but de novo status depends on reliable parent-child relationships and correct sample identity. The abnormal recorded-father relationship check must be resolved first.",
        },
        {
          id: "escalate-qc-issue",
          label: "B",
          decision:
            "Document the relationship/sample QC concern, avoid firm de novo or phase conclusions, and escalate through the appropriate laboratory process.",
          isBest: true,
          feedback:
            "Best decision. This protects patient safety by preventing inheritance-based conclusions from being made using a potentially incorrect trio structure or sample identity.",
        },
        {
          id: "use-as-duo-silently",
          label: "C",
          decision:
            "Remove the recorded father from interpretation and continue silently as a proband-mother duo without further escalation.",
          isBest: false,
          feedback:
            "Review this choice. Changing the assumed family structure or interpretation basis must be handled through appropriate documentation and service process, not silently worked around.",
        },
      ],
    },

    writtenSummary: {
      prompt:
        "Write a short trainee-level handover summary explaining the sample or relationship QC concern, why it affects Candidate 1 and Candidate 2, why Candidate 3 does not resolve the case, and what should happen next.",
      checklist: [
        "States that no candidate should be finalised until the relationship/sample issue is resolved.",
        "Explains that the recorded father does not show the expected parent-child relationship to the proband.",
        "Mentions possible causes such as sample swap, metadata error, non-paternity, or another relationship/sample issue without overclaiming which is true.",
        "Explains why Candidate 1 cannot be confidently called de novo yet.",
        "Explains why Candidate 2 cannot be confidently interpreted as compound heterozygous yet.",
        "Mentions that Candidate 3 is technically real but clinically weak.",
        "Avoids making firm inheritance-based conclusions from the current trio.",
        "Recommends escalation through the appropriate laboratory or service process.",
        "Keeps the tone safe, factual, and reviewable.",
      ],
      modelAnswer:
        "No candidate should be finalised until the trio relationship or sample identity concern is resolved. The internal QC indicates that the recorded father does not show the expected parent-child relationship to the proband, which could reflect a sample swap, metadata error, non-paternity, or another relationship/sample issue that needs handling through the appropriate laboratory process. Candidate 1 is biologically and technically tempting because it is a rare stop-gained variant in NDDREL1 with strong proband read evidence and a plausible loss-of-function neurodevelopmental mechanism, but it cannot currently be called confidently de novo because the recorded-father relationship is abnormal. Candidate 2 may also be relevant because two technically plausible variants are present in RECESSID4, but compound heterozygous phase and paternal inheritance cannot be trusted while the pedigree or sample issue is unresolved. Candidate 3 appears technically real but is clinically weak because it is inherited from the recorded mother, relatively frequent, and in a gene with limited broad evidence. The safest next step is to document the relationship QC concern, avoid firm de novo or phase conclusions, and escalate through the appropriate laboratory/service pathway before proceeding with variant interpretation.",
    },
  },

  reasoningScorecard: [
    {
      category: "Sample and relationship QC",
      maxScore: 2,
      expectation:
        "Recognises that abnormal trio relationship checks are service safety issues that must be resolved before confident inheritance interpretation.",
    },
    {
      category: "De novo interpretation",
      maxScore: 2,
      expectation:
        "Avoids calling a variant de novo when the recorded parental relationship or sample identity is uncertain.",
    },
    {
      category: "Compound heterozygous reasoning",
      maxScore: 2,
      expectation:
        "Recognises that phase and inheritance for a recessive candidate cannot be trusted if the trio structure is not reliable.",
    },
    {
      category: "Candidate prioritisation under QC uncertainty",
      maxScore: 2,
      expectation:
        "Identifies biologically tempting candidates while making clear that they cannot drive final interpretation until QC issues are resolved.",
    },
    {
      category: "Safe escalation",
      maxScore: 2,
      expectation:
        "Documents the sample/pedigree concern clearly and escalates through the appropriate service process rather than working around it silently.",
    },
  ],

  patient: {
    age: 6,
    sex: "Male",
  },

  referralReason:
    "A 6-year-old boy has been referred for rare disease genome analysis because of developmental delay, seizures, hypotonia, and dysmorphic features.",

  testType: "Rare disease trio genome sequencing",

  familyStructure:
    "The proband and both biological parents are recorded as having been tested, but the internal relationship checks show unexpected results that may indicate sample swap, non-paternity, sample contamination, or metadata error.",

  history: [
    "Global developmental delay noted from infancy",
    "Seizures beginning at age 3",
    "Hypotonia in early childhood",
    "Mild dysmorphic features",
    "No known previous molecular diagnosis",
    "No clearly affected relatives reported",
  ],

  phenotype: [
    "Global developmental delay",
    "Seizures",
    "Hypotonia",
    "Dysmorphic features",
  ],

  familyHistory:
    "Both recorded parents are reportedly unaffected. No known family history of a similar neurodevelopmental condition is documented.",

  serviceContext: [
    "The analysis is being performed in a rare disease service context.",
    "Before candidate variants can be trusted, sample identity and family relationships must be coherent.",
    "The case has multiple candidate findings, but the trio-level QC raises a serious concern.",
    "Your task is to recognise that relationship/sample issues are service safety issues and must be escalated before making strong inheritance-based conclusions.",
  ],

  candidateFindings: [
    {
      id: "candidate-1",
      label: "Candidate 1",
      gene: "NDDREL1",
      variant: "chr2:44190218 C>T",
      zygosity: "Heterozygous",
      consequence: "stop_gained",
      inheritanceSignal: "Appears de novo, but trio relationship QC is abnormal",
      clinicalFit:
        "NDDREL1 is associated with an autosomal dominant neurodevelopmental disorder including developmental delay, seizures, hypotonia, and dysmorphic features. Loss-of-function is a reported mechanism.",
      rawEvidence: `GENE: NDDREL1
Known disease association: autosomal dominant neurodevelopmental disorder
Reported inheritance: autosomal dominant
Known mechanism: haploinsufficiency / loss-of-function

Variant:
chr2:44190218 C>T
Transcript: NM_190001.4
HGVS: c.982C>T p.(Arg328*)
Consequence: stop_gained
Predicted effect: premature termination codon

VCF-style fields:
QUAL=801
FILTER=PASS
INFO: DP=48;MQ=60;QD=16.7;SOR=0.77
FORMAT: GT:AD:DP:GQ

Proband: 0/1:24,24:48:99
Recorded mother: 0/0:42,0:42:99
Recorded father: 0/0:39,0:39:99

Read-level notes:
ALT reads in proband seen on both forward and reverse strands
ALT reads distributed across read positions
No local low-complexity warning
No pseudogene or segmental duplication warning
No concerning soft-clipping around the variant

Population:
gnomAD AF = not observed
gnomAD allele count = 0

Constraint:
LOEUF = 0.20
pLI = 0.98

ClinVar-style summary:
No exact matching variant record found in local summary
Other truncating variants in NDDREL1 have been submitted as pathogenic/likely pathogenic in affected individuals

Trio relationship / sample QC:
Reported relationship: proband + mother + father trio
Mendelian inconsistency rate: elevated
Estimated relatedness proband-recorded mother: consistent with parent-child
Estimated relatedness proband-recorded father: not consistent with expected parent-child relationship
Sex check: proband XY, recorded father XY, recorded mother XX
Sample contamination estimates: low in all three samples
Fingerprint / SNP identity check: recorded father sample may not match expected biological father or metadata may be incorrect

Service note:
Do not treat de novo status as secure until the relationship/sample issue is resolved.`,
      concern:
        "This variant is biologically and technically tempting, but the de novo interpretation is unsafe because the recorded father relationship check is abnormal.",
    },
    {
      id: "candidate-2",
      label: "Candidate 2",
      gene: "RECESSID4",
      variant: "Two variants in RECESSID4",
      zygosity: "Possible compound heterozygous candidate",
      consequence: "splice_donor_variant + missense_variant",
      inheritanceSignal:
        "One variant appears maternally inherited; the other appears absent from recorded father, but paternal relationship is uncertain",
      clinicalFit:
        "RECESSID4 is associated with an autosomal recessive neurodevelopmental disorder with seizures and hypotonia. The phenotype fit is plausible, but phase and paternal inheritance cannot be trusted while the pedigree/sample issue is unresolved.",
      rawEvidence: `GENE: RECESSID4
Known disease association: autosomal recessive neurodevelopmental disorder with seizures
Reported inheritance: autosomal recessive
Known mechanism: biallelic loss-of-function or damaging compound heterozygous variants

Variant A:
chr8:77190114 G>A
Transcript: NM_190002.2
HGVS: c.601+1G>A
Consequence: splice_donor_variant
Splice position: canonical +1 donor site

VCF-style fields:
QUAL=730
FILTER=PASS
INFO: DP=46;MQ=60;QD=15.9;SOR=0.70
FORMAT: GT:AD:DP:GQ

Proband: 0/1:23,23:46:99
Recorded mother: 0/1:22,20:42:99
Recorded father: 0/0:40,0:40:99

Variant B:
chr8:77244190 T>C
Transcript: NM_190002.2
HGVS: c.1042T>C p.(Leu348Pro)
Consequence: missense_variant
Protein domain: conserved functional domain

VCF-style fields:
QUAL=622
FILTER=PASS
INFO: DP=44;MQ=60;QD=14.1;SOR=0.83
FORMAT: GT:AD:DP:GQ

Proband: 0/1:21,23:44:99
Recorded mother: 0/0:38,0:38:99
Recorded father: 0/0:41,0:41:99

Read-level notes:
Both variants have balanced allele support in the proband
No obvious mapping warning at either site
No soft-clipping concern
Both variants are technically plausible as proband calls

Population:
Variant A gnomAD AF = not observed; allele count = 0
Variant B gnomAD AF = 0.000006; allele count = 2
No homozygotes observed in local summary

Constraint:
LOEUF = 0.34
pLI = 0.73

ClinVar-style summary:
No exact matching variant records found in local summary
Biallelic splice/truncating variants in RECESSID4 have been submitted in affected individuals

Trio relationship / sample QC:
Mendelian inconsistency rate is elevated across the trio
Recorded father does not show expected parent-child relatedness to the proband
Inheritance and phase cannot be interpreted confidently until the family/sample issue is resolved

Service note:
Do not conclude compound heterozygosity from this trio until sample identity and biological relationship are clarified.`,
      concern:
        "This could become relevant, but the apparent inheritance pattern cannot be trusted because the trio relationship check is abnormal.",
    },
    {
      id: "candidate-3",
      label: "Candidate 3",
      gene: "BROADN19",
      variant: "chr12:22901881 A>G",
      zygosity: "Heterozygous",
      consequence: "missense_variant",
      inheritanceSignal: "Inherited from recorded mother",
      clinicalFit:
        "BROADN19 has a broad and weak neurodevelopmental association. The variant is inherited from an unaffected recorded mother and is relatively frequent for a severe childhood-onset rare disease model.",
      rawEvidence: `GENE: BROADN19
Known disease association: broad neurodevelopmental association in limited reports
Reported inheritance: autosomal dominant proposed with limited evidence
Known mechanism: uncertain

Variant:
chr12:22901881 A>G
Transcript: NM_190003.1
HGVS: c.701A>G p.(Tyr234Cys)
Consequence: missense_variant

VCF-style fields:
QUAL=588
FILTER=PASS
INFO: DP=45;MQ=60;QD=13.1;SOR=0.88
FORMAT: GT:AD:DP:GQ

Proband: 0/1:22,23:45:99
Recorded mother: 0/1:21,22:43:99
Recorded father: 0/0:39,0:39:99

Read-level notes:
ALT reads seen on both forward and reverse strands
ALT reads distributed across read positions
No local mapping warning
No soft-clipping concern

Population:
gnomAD AF = 0.0014
gnomAD allele count = 390
Homozygotes observed in population summary = 1

Constraint:
LOEUF = 0.82
pLI = 0.08

ClinVar-style summary:
No exact matching pathogenic record found in local summary
Gene-disease relationship remains limited and broad in available summary

Trio relationship / sample QC:
Recorded mother relationship appears consistent with parent-child
Recorded father relationship does not appear consistent with expected parent-child relationship

Service note:
This variant is technically real but clinically weak. It does not resolve the case.`,
      concern:
        "This appears technically real, but it is weak as a disease candidate because of inheritance, population frequency, and limited gene-disease evidence.",
    },
  ],

  decisionCheckpoints: [
    {
      id: "checkpoint-1",
      title: "Checkpoint 1 — Relationship QC comes before interpretation",
      context:
        "The trio relationship check shows that the recorded father does not appear to have the expected parent-child relationship to the proband. Candidate 1 otherwise looks like a strong apparent de novo loss-of-function variant.",
      question:
        "What is the safest first response to this situation?",
      options: [
        {
          label: "A",
          text: "Ignore the relationship issue and report Candidate 1 as de novo because the variant evidence itself looks strong.",
          isCorrect: false,
          feedback:
            "Not quite. De novo status depends on correct family relationships and sample identity. A relationship issue must be resolved before that inheritance conclusion is trusted.",
        },
        {
          label: "B",
          text: "Treat the relationship or sample issue as a service safety concern and escalate before making strong inheritance-based conclusions.",
          isCorrect: true,
          feedback:
            "Correct. Relationship QC is not a minor detail. It affects the reliability of de novo, inherited, and compound heterozygous interpretations.",
        },
        {
          label: "C",
          text: "Assume the proband variant is false because any relationship issue invalidates every variant call.",
          isCorrect: false,
          feedback:
            "Not quite. The proband variant call may still be technically real. The issue is that inheritance interpretation is unsafe until the relationship/sample concern is resolved.",
        },
      ],
      teachingPoint:
        "Sample identity and family relationship checks are part of patient safety. They must be resolved before confident inheritance interpretation.",
    },
    {
      id: "checkpoint-2",
      title: "Checkpoint 2 — De novo status is not just a variant property",
      context:
        "Candidate 1 has strong proband read evidence and both recorded parents are labelled 0/0. However, the recorded father relationship check is abnormal.",
      question:
        "Why can Candidate 1 not yet be called confidently de novo?",
      options: [
        {
          label: "A",
          text: "Because de novo status depends on reliable parent-child relationships and correct sample identity, not just parental 0/0 genotypes.",
          isCorrect: true,
          feedback:
            "Correct. If the recorded father may not be the biological father or the sample metadata is wrong, the de novo conclusion is not secure.",
        },
        {
          label: "B",
          text: "Because stop-gained variants cannot be interpreted as de novo in rare disease trio analysis.",
          isCorrect: false,
          feedback:
            "Not quite. Stop-gained variants can be de novo. The problem here is trio relationship reliability.",
        },
        {
          label: "C",
          text: "Because absence from population data makes the inheritance pattern impossible to assess.",
          isCorrect: false,
          feedback:
            "Not quite. Population absence can support rarity, but it does not resolve a sample relationship concern.",
        },
      ],
      teachingPoint:
        "De novo is an inheritance conclusion. It requires reliable family structure and sample identity.",
    },
    {
      id: "checkpoint-3",
      title: "Checkpoint 3 — Compound heterozygous interpretation also depends on pedigree trust",
      context:
        "Candidate 2 has two technically plausible variants in a recessive gene. One appears maternally inherited and the other appears absent from the recorded father, but the father-proband relationship is abnormal.",
      question:
        "What is the safest interpretation of Candidate 2?",
      options: [
        {
          label: "A",
          text: "Treat it as confirmed compound heterozygous because two variants are present in the same recessive gene.",
          isCorrect: false,
          feedback:
            "Not quite. Two variants in the same gene are not enough. Phase and inheritance need to be reliable.",
        },
        {
          label: "B",
          text: "Dismiss it permanently because the pedigree issue means recessive disease cannot be assessed.",
          isCorrect: false,
          feedback:
            "Not quite. The candidate may still be relevant later, but the inheritance pattern cannot be interpreted confidently yet.",
        },
        {
          label: "C",
          text: "Treat it as potentially relevant, but avoid compound heterozygous interpretation until sample identity and relationships are clarified.",
          isCorrect: true,
          feedback:
            "Correct. The variant calls may be real, but the inheritance and phase interpretation is not safe while the trio QC is unresolved.",
        },
      ],
      teachingPoint:
        "Compound heterozygous reasoning depends on accurate parent-child relationships and reliable phasing/inheritance evidence.",
    },
    {
      id: "checkpoint-4",
      title: "Checkpoint 4 — Technical call quality versus service safety",
      context:
        "Candidate 3 is technically clean but clinically weak. Candidate 1 and Candidate 2 are more biologically interesting, but inheritance interpretation is compromised by the trio QC issue.",
      question:
        "What is the best overall conclusion from the current evidence?",
      options: [
        {
          label: "A",
          text: "Candidate 3 should be reported because it avoids the recorded-father relationship issue.",
          isCorrect: false,
          feedback:
            "Not quite. Candidate 3 is technically real but clinically weak. Avoiding one issue does not make it a strong diagnosis.",
        },
        {
          label: "B",
          text: "No candidate should be finalised until the sample relationship issue is investigated and resolved.",
          isCorrect: true,
          feedback:
            "Correct. The safest output is to escalate the trio QC issue before making final inheritance-based candidate conclusions.",
        },
        {
          label: "C",
          text: "Candidate 1 should be reported immediately because it remains the most biologically tempting finding.",
          isCorrect: false,
          feedback:
            "Not quite. The strongest-looking biological candidate still depends on a valid trio interpretation.",
        },
      ],
      teachingPoint:
        "Sometimes the correct action is not variant ranking but stopping to resolve a service safety issue.",
    },
    {
      id: "checkpoint-5",
      title: "Checkpoint 5 — Safe service-style next step",
      context:
        "The relationship QC suggests that the recorded father may not have the expected parent-child relationship with the proband, or there may be a sample/metadata issue.",
      question:
        "What is the safest next step?",
      options: [
        {
          label: "A",
          text: "Document the relationship/sample QC concern, avoid firm de novo or phase conclusions, and escalate through the appropriate laboratory process.",
          isCorrect: true,
          feedback:
            "Correct. This is the safest service-style response. It protects against misinterpretation and ensures the issue is handled through the correct process.",
        },
        {
          label: "B",
          text: "Remove the father from the analysis without formal documentation and interpret the case as a duo.",
          isCorrect: false,
          feedback:
            "Not quite. Any change to family structure or sample interpretation needs appropriate documentation and laboratory process.",
        },
        {
          label: "C",
          text: "Ignore all candidate variants and issue a normal result because the trio structure is unreliable.",
          isCorrect: false,
          feedback:
            "Not quite. The variants and the relationship issue need review. A QC problem does not justify pretending there is no evidence.",
        },
      ],
      teachingPoint:
        "Safe practice means escalating sample and pedigree concerns clearly rather than working around them silently.",
    },
  ],

  finalReflection:
    "A safe trainee-level conclusion would be that no candidate should be finalised until the trio relationship/sample identity concern is resolved. Candidate 1 is biologically and technically tempting as a possible loss-of-function neurodevelopmental candidate, but it cannot be confidently called de novo while the recorded father relationship check is abnormal. Candidate 2 may be relevant as a possible recessive candidate, but phase and inheritance cannot be trusted until the pedigree/sample issue is clarified. Candidate 3 appears technically real but is clinically weak and does not resolve the case. The safest next step is to document the relationship QC concern, avoid firm inheritance-based conclusions, and escalate through the appropriate laboratory/service process before proceeding.",
};