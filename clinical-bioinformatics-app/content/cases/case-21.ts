export const case21 = {
  id: "case-21",
  slug: "transcript-choice-problem-case",
  title: "Case 21: Transcript choice problem",
  level: "Intermediate",
  summary:
    "An interpretation-aware rare disease case focused on transcript choice, clinically relevant transcripts, consequence differences, and avoiding over-prioritisation from misleading transcript annotations.",

  visualisationExampleId: null,

  assessmentFocus: [
    "Transcript choice reasoning",
    "MANE/preferred transcript interpretation",
    "Consequence differences across transcripts",
    "High-impact annotation caution",
    "Transcript relevance versus rarity",
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
        "Rank the findings from strongest to weakest based on clinically relevant transcript consequence, phenotype fit, inheritance, gene mechanism, technical confidence, population evidence, and whether each finding should drive the current case conclusion.",
      correctOrder: [
        "candidate-3",
        "candidate-1",
        "candidate-4",
        "candidate-2",
      ],
      explanation:
        "Candidate 3 is strongest because the clinically preferred transcript supports a canonical splice acceptor consequence, and the phenotype, apparent de novo inheritance, loss-of-function mechanism, population absence, and technical evidence all align. Candidate 1 is technically convincing and apparently de novo, but its severe stop-gained consequence is on a short minor transcript; on the MANE/preferred transcript it is intronic without strong splice evidence, so it is much weaker than Candidate 3. Candidate 4 is also technically real and apparently de novo, but the severe frameshift annotation affects a low-support isoform while the preferred transcript consequence is synonymous without strong splice evidence. Candidate 2 is weakest because it is technically real but inherited from an unaffected father, relatively frequent, and supported by limited broad gene-disease evidence.",
    },

    escalationDecision: {
      prompt:
        "Choose the safest next action for this candidate set.",
      options: [
        {
          id: "prioritise-candidate-1",
          label: "A",
          decision:
            "Prioritise Candidate 1 because a stop-gained annotation should outweigh transcript uncertainty when the variant is de novo.",
          isBest: false,
          feedback:
            "Review this choice. Candidate 1 appears severe only on a short minor transcript. On the clinically preferred transcript, it is intronic without strong splice evidence, so it should not lead the case.",
        },
        {
          id: "prioritise-candidate-3",
          label: "B",
          decision:
            "Prioritise Candidate 3 for formal review and document the transcript-choice limitations affecting Candidates 1 and 4.",
          isBest: true,
          feedback:
            "Best decision. Candidate 3 has the strongest transcript-supported consequence on the clinically preferred transcript, while Candidates 1 and 4 are misleading if judged only by their most severe annotation.",
        },
        {
          id: "prioritise-candidate-4",
          label: "C",
          decision:
            "Prioritise Candidate 4 because a frameshift annotation is stronger than a splice annotation even if it is on a low-support isoform.",
          isBest: false,
          feedback:
            "Review this choice. A frameshift annotation is only useful if the affected transcript is clinically relevant. Candidate 4 is synonymous on the preferred transcript with no strong splice evidence.",
        },
      ],
    },

    writtenSummary: {
      prompt:
        "Write a short trainee-level handover summary explaining the strongest candidate, why transcript choice changes the interpretation, why the other findings are weaker, and the safest next step.",
      checklist: [
        "Names Candidate 3 as the strongest current finding.",
        "Explains that Candidate 3 has a canonical splice acceptor consequence on the clinically preferred/MANE transcript.",
        "Links Candidate 3 to the phenotype, apparent de novo inheritance, loss-of-function mechanism, and technical support.",
        "Explains why Candidate 1 is weaker because the stop-gained annotation is on a minor transcript.",
        "Mentions that Candidate 1 is intronic on the clinically preferred transcript without strong splice evidence.",
        "Explains why Candidate 4 is weaker because the frameshift annotation is on a low-support isoform.",
        "Mentions that Candidate 4 is synonymous on the preferred transcript without strong splice evidence.",
        "Explains why Candidate 2 is technically real but clinically weak.",
        "Avoids ranking candidates by the most severe-looking annotation alone.",
        "Avoids calling Candidate 3 a final diagnosis without formal review and sign-off.",
      ],
      modelAnswer:
        "Candidate 3 is the strongest current finding for formal review. It is an apparent de novo canonical splice acceptor variant on the clinically preferred SYNTR8 transcript, in a gene where loss-of-function is a reported mechanism for an autosomal dominant neurodevelopmental disorder. The patient’s developmental delay, severe speech delay, seizures, hypotonia, and dysmorphic features fit the disease context, and the variant has strong technical support, population absence, good parental coverage, and second-caller detection. Candidate 1 is technically convincing and appears de novo, but the stop-gained consequence is only on a short minor transcript; on the MANE/preferred transcript the variant is intronic and has no strong splice-altering evidence. Candidate 4 has a similar transcript-choice problem because the frameshift annotation is on a low-support isoform, while the preferred transcript consequence is synonymous without strong splice evidence. Candidate 2 is technically real but clinically weak because it is inherited from an unaffected father, relatively frequent, and supported by limited broad gene-disease evidence. The safest next step is to prioritise Candidate 3 for formal review and clearly document the transcript-choice reasoning for the weaker severe-looking alternatives.",
    },
  },

  reasoningScorecard: [
    {
      category: "Transcript choice reasoning",
      maxScore: 2,
      expectation:
        "Checks whether the consequence is on the clinically relevant, MANE/preferred, or disease-relevant transcript rather than relying on the most severe-looking annotation.",
    },
    {
      category: "Consequence interpretation",
      maxScore: 2,
      expectation:
        "Recognises that the same genomic variant may appear high-impact on one transcript but much weaker on another transcript.",
    },
    {
      category: "Candidate prioritisation",
      maxScore: 2,
      expectation:
        "Prioritises the finding with the best convergence across preferred transcript consequence, phenotype, inheritance, mechanism, rarity, and technical quality.",
    },
    {
      category: "Avoiding annotation traps",
      maxScore: 2,
      expectation:
        "Avoids over-prioritising stop-gained or frameshift annotations when they are restricted to minor or low-support transcripts.",
    },
    {
      category: "Safe escalation",
      maxScore: 2,
      expectation:
        "Escalates the strongest transcript-supported candidate while documenting transcript-choice caveats for misleading alternatives.",
    },
  ],

  patient: {
    age: 6,
    sex: "Female",
  },

  referralReason:
    "A 6-year-old girl has been referred for rare disease genome analysis because of developmental delay, severe speech delay, seizures, hypotonia, and mild dysmorphic features.",

  testType: "Rare disease trio genome sequencing",

  familyStructure:
    "The proband and both biological parents have been tested. Both parents are reportedly unaffected.",

  history: [
    "Global developmental delay noted from infancy",
    "Severe expressive speech delay",
    "Seizures beginning at age 3",
    "Hypotonia in early childhood",
    "Mild dysmorphic features noted by clinical genetics",
    "No known previous molecular diagnosis",
  ],

  phenotype: [
    "Global developmental delay",
    "Severe speech delay",
    "Seizures",
    "Hypotonia",
    "Mild dysmorphic features",
  ],

  familyHistory:
    "Both parents are reportedly unaffected. No known family history of developmental delay, seizures, hypotonia, or a similar syndromic presentation.",

  serviceContext: [
    "The analysis is being performed in a rare disease service context.",
    "The key issue is transcript choice.",
    "The same genomic variant can look more or less severe depending on which transcript is used.",
    "Your task is to decide which candidate remains convincing after checking the clinically relevant transcript, gene mechanism, inheritance, technical confidence, and phenotype fit.",
  ],

  candidateFindings: [
    {
      id: "candidate-1",
      label: "Candidate 1",
      gene: "NDDTR1",
      variant: "chr2:77219011 G>A",
      zygosity: "Heterozygous",
      consequence: "stop_gained on minor transcript; intronic on MANE transcript",
      inheritanceSignal: "Apparent de novo",
      clinicalFit:
        "NDDTR1 has a possible neurodevelopmental association, and the initial annotation looks severe on one transcript. However, the stop-gained consequence is only on a short minor transcript that is not the clinically preferred transcript in the local summary.",
      rawEvidence: `GENE: NDDTR1
Known disease association: possible autosomal dominant neurodevelopmental disorder
Reported inheritance: autosomal dominant proposed in limited reports
Known mechanism: uncertain; loss-of-function not clearly established

Variant:
chr2:77219011 G>A

Transcript annotation summary:
Transcript 1: NM_210001.1
Transcript status: short minor transcript
HGVS: c.301G>A p.(Trp101*)
Consequence: stop_gained

Transcript 2: NM_210001.5
Transcript status: MANE Select / clinically preferred transcript in local summary
HGVS: c.410+124G>A
Consequence: intron_variant
Splice prediction summary: no strong splice-altering signal in local summary

VCF-style fields:
QUAL=711
FILTER=PASS
INFO: DP=46;MQ=60;QD=15.5;SOR=0.82
FORMAT: GT:AD:DP:GQ

Proband: 0/1:23,23:46:99
Mother: 0/0:41,0:41:99
Father: 0/0:39,0:39:99

Read-level notes:
ALT reads seen on both forward and reverse strands
ALT reads distributed across read positions
No local mapping warning
No soft-clipping concern

Population:
gnomAD AF = not observed
gnomAD allele count = 0

Constraint:
LOEUF = 0.69
pLI = 0.18

ClinVar-style summary:
No exact matching variant record found in local summary
Gene-disease relationship remains limited
No local evidence that this intronic MANE consequence disrupts splicing`,
      concern:
        "This is technically convincing and appears de novo, but the severe stop-gained consequence is attached to a minor transcript. On the clinically preferred transcript, the variant is intronic without strong splice evidence, making it weaker.",
    },
    {
      id: "candidate-2",
      label: "Candidate 2",
      gene: "BROADTR5",
      variant: "chr11:44022991 C>T",
      zygosity: "Heterozygous",
      consequence: "missense_variant",
      inheritanceSignal: "Inherited from unaffected father",
      clinicalFit:
        "BROADTR5 has a broad neurodevelopmental association in limited reports, but the variant is inherited from an unaffected parent, relatively frequent, and outside a known functional region.",
      rawEvidence: `GENE: BROADTR5
Known disease association: broad neurodevelopmental association in limited reports
Reported inheritance: autosomal dominant proposed
Known mechanism: uncertain

Variant:
chr11:44022991 C>T
Transcript: NM_210002.2
Transcript status: MANE Select
HGVS: c.881C>T p.(Pro294Leu)
Consequence: missense_variant
Protein domain: outside known recurrent functional region in local summary

VCF-style fields:
QUAL=602
FILTER=PASS
INFO: DP=44;MQ=60;QD=13.7;SOR=0.91
FORMAT: GT:AD:DP:GQ

Proband: 0/1:22,22:44:99
Mother: 0/0:39,0:39:99
Father: 0/1:20,21:41:99

Read-level notes:
ALT reads seen on both forward and reverse strands
ALT reads distributed across read positions
No local low-complexity warning
No pseudogene or segmental duplication warning

Population:
gnomAD AF = 0.0013
gnomAD allele count = 340
Homozygotes observed in population summary = 1

Constraint:
LOEUF = 0.82
pLI = 0.07

ClinVar-style summary:
No exact matching pathogenic record found in local summary
Gene-disease relationship remains limited and broad in available summary`,
      concern:
        "This appears technically real, but it is weak as a rare disease candidate because inheritance, population frequency, phenotype specificity, and mechanism evidence do not fit well.",
    },
    {
      id: "candidate-3",
      label: "Candidate 3",
      gene: "SYNTR8",
      variant: "chr7:118902440 T>A",
      zygosity: "Heterozygous",
      consequence: "canonical splice_acceptor_variant on MANE transcript",
      inheritanceSignal: "Apparent de novo with good parental coverage",
      clinicalFit:
        "SYNTR8 is associated with an autosomal dominant neurodevelopmental disorder including developmental delay, severe speech delay, seizures, hypotonia, and dysmorphic features. Loss-of-function is a reported mechanism.",
      rawEvidence: `GENE: SYNTR8
Known disease association: autosomal dominant neurodevelopmental disorder
Reported inheritance: autosomal dominant
Known mechanism: haploinsufficiency / loss-of-function

Variant:
chr7:118902440 T>A

Transcript annotation summary:
Transcript 1: NM_210003.4
Transcript status: MANE Select / clinically preferred transcript in local summary
HGVS: c.744-2T>A
Consequence: splice_acceptor_variant
Splice position: canonical -2 acceptor site
Predicted effect: likely acceptor splice-site disruption

Transcript 2: NM_210003.2
Transcript status: older alternative transcript
HGVS: c.701T>A p.(Leu234Gln)
Consequence: missense_variant

Interpretation note:
The clinically preferred transcript supports a stronger canonical splice consequence.
The older alternative transcript gives a less severe-looking consequence, but it is not the preferred transcript for this disease/gene in the local summary.

VCF-style fields:
QUAL=940
FILTER=PASS
INFO: DP=52;MQ=60;QD=18.1;SOR=0.70
FORMAT: GT:AD:DP:GQ

Proband: 0/1:27,25:52:99
Mother: 0/0:44,0:44:99
Father: 0/0:43,0:43:99

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
LOEUF = 0.18
pLI = 0.99

ClinVar-style summary:
No exact matching variant record found in local summary
Other canonical splice-site and truncating variants in SYNTR8 have been submitted as pathogenic/likely pathogenic in affected individuals`,
      concern:
        "This is the strongest current candidate because the clinically preferred transcript supports a canonical splice acceptor consequence, and the phenotype, inheritance, mechanism, rarity, and technical evidence all align.",
    },
    {
      id: "candidate-4",
      label: "Candidate 4",
      gene: "ALTISO2",
      variant: "chr15:77281190 A>G",
      zygosity: "Heterozygous",
      consequence: "frameshift on non-expressed isoform; synonymous on relevant transcript",
      inheritanceSignal: "Apparent de novo",
      clinicalFit:
        "ALTISO2 has a possible neurodevelopmental association, but the high-impact frameshift annotation only affects an isoform with little expression/support in the local summary. The relevant transcript consequence is synonymous without strong splice evidence.",
      rawEvidence: `GENE: ALTISO2
Known disease association: possible neurodevelopmental disorder
Reported inheritance: autosomal dominant proposed in limited reports
Known mechanism: uncertain

Variant:
chr15:77281190 A>G

Transcript annotation summary:
Transcript 1: NM_210004.1
Transcript status: low-support alternative isoform
HGVS: c.199del-equivalent p.(Gly67Valfs*6)
Consequence: frameshift_variant

Transcript 2: NM_210004.5
Transcript status: MANE Select / clinically preferred transcript
HGVS: c.612A>G p.(Gly204=)
Consequence: synonymous_variant
Splice prediction summary: no strong splice-altering signal in local summary

Expression / transcript note:
Local summary marks Transcript 1 as low support for this tissue/disease context.
Clinically preferred transcript does not support the frameshift consequence.

VCF-style fields:
QUAL=688
FILTER=PASS
INFO: DP=47;MQ=60;QD=14.6;SOR=0.79
FORMAT: GT:AD:DP:GQ

Proband: 0/1:24,23:47:99
Mother: 0/0:40,0:40:99
Father: 0/0:42,0:42:99

Read-level notes:
ALT reads seen on both forward and reverse strands
ALT reads distributed across read positions
No obvious local mapping warning

Population:
gnomAD AF = not observed
gnomAD allele count = 0

Constraint:
LOEUF = 0.74
pLI = 0.15

ClinVar-style summary:
No exact matching variant record found in local summary
Gene-disease relationship remains limited
No local evidence that this synonymous MANE consequence disrupts splicing`,
      concern:
        "This is technically real and appears de novo, but the severe frameshift annotation is not on the clinically preferred transcript. Without evidence that the relevant transcript is disrupted, this is weaker.",
    },
  ],

  decisionCheckpoints: [
    {
      id: "checkpoint-1",
      title: "Checkpoint 1 — Transcript choice can change consequence",
      context:
        "Candidate 1 looks like a stop-gained variant on a short minor transcript, but on the MANE Select transcript it is intronic with no strong splice prediction.",
      question:
        "What is the safest interpretation of Candidate 1?",
      options: [
        {
          label: "A",
          text: "Prioritise it because a stop-gained annotation is sufficient when the variant is rare and apparently de novo.",
          isCorrect: false,
          feedback:
            "Not quite. The transcript carrying the severe consequence matters. A stop-gained annotation on a minor transcript may not be clinically relevant.",
        },
        {
          label: "B",
          text: "Treat it as technically real and apparently de novo, but weakened because the severe consequence is not on the clinically preferred transcript.",
          isCorrect: true,
          feedback:
            "Correct. Candidate 1 should be treated cautiously because the MANE/preferred transcript does not support the severe consequence.",
        },
        {
          label: "C",
          text: "Dismiss it as benign because minor transcripts are never relevant in clinical interpretation.",
          isCorrect: false,
          feedback:
            "Not quite. Minor transcripts can sometimes matter, but they need evidence. The key is not to over-prioritise a misleading annotation.",
        },
      ],
      teachingPoint:
        "Transcript choice can turn a variant from apparently high-impact to much less convincing, or vice versa.",
    },
    {
      id: "checkpoint-2",
      title: "Checkpoint 2 — Identify the strongest candidate",
      context:
        "Candidate 3 has a canonical splice acceptor consequence on the clinically preferred transcript, apparent de novo inheritance with good parental coverage, population absence, phenotype fit, and strong technical evidence.",
      question:
        "Which candidate should be prioritised first?",
      options: [
        {
          label: "A",
          text: "Candidate 1, because its stop-gained label should outrank splice annotations even when transcript context differs.",
          isCorrect: false,
          feedback:
            "Not quite. Candidate 1’s stop-gained annotation is on a minor transcript, while Candidate 3 has a strong consequence on the preferred transcript.",
        },
        {
          label: "B",
          text: "Candidate 4, because a frameshift label on any isoform is enough to make it the strongest de novo finding.",
          isCorrect: false,
          feedback:
            "Not quite. A frameshift on a low-support isoform should not automatically outrank a canonical splice variant on the clinically preferred transcript.",
        },
        {
          label: "C",
          text: "Candidate 3, because the clinically relevant transcript, mechanism, phenotype, inheritance, population evidence, and technical evidence align best.",
          isCorrect: true,
          feedback:
            "Correct. Candidate 3 has the strongest overall evidence pattern.",
        },
      ],
      teachingPoint:
        "The best candidate is not necessarily the one with the most severe-looking annotation in isolation. The transcript context matters.",
    },
    {
      id: "checkpoint-3",
      title: "Checkpoint 3 — Do not ignore a strong consequence on the preferred transcript",
      context:
        "Candidate 3 looks like a missense variant on an older alternative transcript, but on the clinically preferred transcript it is a canonical splice acceptor variant.",
      question:
        "What does Candidate 3 illustrate?",
      options: [
        {
          label: "A",
          text: "A variant should be interpreted using the least severe transcript annotation to avoid overcalling impact.",
          isCorrect: false,
          feedback:
            "Not quite. The relevant transcript is not chosen by severity alone. It should be based on clinical transcript relevance, gene model, evidence, and local reporting practice.",
        },
        {
          label: "B",
          text: "A less severe-looking annotation on one transcript does not remove a strong consequence on the clinically preferred transcript.",
          isCorrect: true,
          feedback:
            "Correct. Candidate 3 remains strong because the preferred transcript supports a canonical splice-site consequence.",
        },
        {
          label: "C",
          text: "Transcript choice can be ignored when a variant is absent from population databases.",
          isCorrect: false,
          feedback:
            "Not quite. Population absence supports rarity, but transcript consequence still matters.",
        },
      ],
      teachingPoint:
        "Transcript selection should be deliberate and evidence-based, not driven by whichever annotation looks most convenient.",
    },
    {
      id: "checkpoint-4",
      title: "Checkpoint 4 — Frameshift on a low-support isoform",
      context:
        "Candidate 4 has a frameshift annotation on a low-support alternative isoform, but the MANE/preferred transcript consequence is synonymous with no strong splice prediction.",
      question:
        "What is the main limitation of Candidate 4?",
      options: [
        {
          label: "A",
          text: "The severe frameshift annotation may not be clinically relevant if it only affects a low-support isoform and not the preferred transcript.",
          isCorrect: true,
          feedback:
            "Correct. Candidate 4 should not be over-prioritised unless there is evidence that the affected isoform is clinically relevant or that the preferred transcript is disrupted.",
        },
        {
          label: "B",
          text: "The frameshift label should be reported immediately because consequence severity does not depend on transcript relevance.",
          isCorrect: false,
          feedback:
            "Not quite. Consequence severity depends on transcript relevance and gene mechanism.",
        },
        {
          label: "C",
          text: "The finding must be false because synonymous consequences can never affect disease-relevant mechanisms.",
          isCorrect: false,
          feedback:
            "Not quite. Synonymous variants can sometimes affect splicing, but there is no strong splice evidence shown here.",
        },
      ],
      teachingPoint:
        "A high-impact annotation on the wrong transcript can be misleading.",
    },
    {
      id: "checkpoint-5",
      title: "Checkpoint 5 — Safe service-style next step",
      context:
        "Candidate 3 is the strongest current candidate. Candidate 1 and Candidate 4 are technically real and appear de novo, but their severe annotations are not supported on the clinically preferred transcript. Candidate 2 is technically real but clinically weak.",
      question:
        "What is the safest next step?",
      options: [
        {
          label: "A",
          text: "Prioritise Candidate 3 for review and document the transcript-choice limitations for Candidates 1 and 4.",
          isCorrect: true,
          feedback:
            "Correct. This is safe and reviewable because it prioritises the strongest transcript-supported candidate while documenting why severe-looking alternatives are weaker.",
        },
        {
          label: "B",
          text: "Report Candidate 1 because the annotation includes the word stop-gained and the variant appears de novo.",
          isCorrect: false,
          feedback:
            "Not quite. The stop-gained consequence is not on the preferred transcript.",
        },
        {
          label: "C",
          text: "Ignore transcript choice and rank all variants by rarity and apparent de novo status only.",
          isCorrect: false,
          feedback:
            "Not quite. Rarity is only one part of prioritisation. Transcript consequence and gene mechanism are essential.",
        },
      ],
      teachingPoint:
        "Safe clinical bioinformatics reasoning includes explaining which transcript was used and why that changes candidate confidence.",
    },
  ],

  finalReflection:
    "A safe trainee-level conclusion would be that Candidate 3 is the strongest current candidate for review because the clinically preferred transcript supports a canonical splice acceptor consequence, and the phenotype, apparent de novo inheritance, loss-of-function mechanism, population absence, and technical evidence all align. Candidate 1 and Candidate 4 are technically convincing and appear de novo, but their severe-looking annotations are attached to minor or low-support transcripts; on the clinically preferred transcripts, their consequences are much weaker and lack strong splice evidence. Candidate 2 appears technically real but is clinically weak because of inheritance, population frequency, and limited gene-disease evidence. The safest next step is to prioritise Candidate 3, document the transcript-choice reasoning, and escalate through the appropriate review pathway.",
};