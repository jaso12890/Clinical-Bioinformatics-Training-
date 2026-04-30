export const case22 = {
  id: "case-22",
  slug: "nmd-last-exon-lof-problem-case",
  title: "Case 22: NMD and last-exon loss-of-function problem",
  level: "Intermediate",
  summary:
    "An interpretation-aware rare disease case focused on recognising that not every stop-gained or frameshift variant behaves like straightforward loss-of-function.",

  visualisationExampleId: null,

  assessmentFocus: [
    "Predicted loss-of-function interpretation",
    "Nonsense-mediated decay reasoning",
    "Final-exon truncation caution",
    "Gene mechanism fit",
    "Single-allele recessive limitation",
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
        "Rank the findings from strongest to weakest based on phenotype fit, inheritance, variant consequence, likely NMD, gene mechanism, population evidence, technical confidence, and whether each finding should drive the current case conclusion.",
      correctOrder: [
        "candidate-2",
        "candidate-3",
        "candidate-1",
        "candidate-4",
      ],
      explanation:
        "Candidate 2 is strongest because it is an apparent de novo frameshift in a phenotype-compatible gene where haploinsufficiency is a known mechanism, and the variant position is compatible with likely nonsense-mediated decay. Candidate 3 is technically convincing and mechanism-plausible because the gene is associated with gain-of-function missense epilepsy, but the exact variant is not a known recurrent hotspot and the phenotype fit is less complete than Candidate 2. Candidate 1 is technically convincing and apparently de novo, but the stop-gained variant is in the final exon, predicted to escape NMD, and the gene-disease/LoF mechanism is uncertain. Candidate 4 is technically convincing as one inherited loss-of-function allele in a recessive gene, but it does not currently provide a complete biallelic explanation.",
    },

    escalationDecision: {
      prompt:
        "Choose the safest next action for this candidate set.",
      options: [
        {
          id: "prioritise-candidate-1",
          label: "A",
          decision:
            "Prioritise Candidate 1 because a de novo stop-gained annotation should be treated as straightforward loss-of-function.",
          isBest: false,
          feedback:
            "Review this choice. Candidate 1 is technically real and interesting, but the final-exon position and predicted NMD escape mean the mechanism is not straightforward haploinsufficiency.",
        },
        {
          id: "prioritise-candidate-2",
          label: "B",
          decision:
            "Prioritise Candidate 2 for formal review, documenting why its predicted LoF effect fits the gene mechanism and NMD context.",
          isBest: true,
          feedback:
            "Best decision. Candidate 2 has the strongest convergence across phenotype, de novo inheritance, frameshift consequence, likely NMD, haploinsufficiency mechanism, population absence, and technical evidence.",
        },
        {
          id: "prioritise-candidate-4",
          label: "C",
          decision:
            "Prioritise Candidate 4 because an inherited stop-gained variant in a recessive gene is sufficient to explain the case.",
          isBest: false,
          feedback:
            "Review this choice. Candidate 4 is a real loss-of-function allele, but one heterozygous inherited variant is incomplete evidence for a recessive biallelic condition.",
        },
      ],
    },

    writtenSummary: {
      prompt:
        "Write a short trainee-level handover summary explaining the strongest candidate, the NMD/last-exon issue, why the other findings are weaker, and the safest next step.",
      checklist: [
        "Names Candidate 2 as the strongest current finding.",
        "Explains that Candidate 2 is an apparent de novo frameshift in a phenotype-compatible gene.",
        "Mentions that Candidate 2 is in an exon position compatible with likely NMD.",
        "Links Candidate 2 to haploinsufficiency/loss-of-function as a reported disease mechanism.",
        "Explains why Candidate 1 should not be treated as straightforward LoF.",
        "Mentions Candidate 1 is in the final exon and predicted to escape NMD.",
        "Explains why Candidate 3 is plausible but less complete than Candidate 2.",
        "Explains why Candidate 4 is incomplete as a single inherited allele in a recessive gene.",
        "Avoids assuming every stop-gained or frameshift annotation has the same molecular effect.",
        "Avoids calling Candidate 2 a final diagnosis without formal review and sign-off.",
      ],
      modelAnswer:
        "Candidate 2 is the strongest current finding for formal review. It is an apparent de novo frameshift variant in NMDX4, a phenotype-compatible autosomal dominant neurodevelopmental gene where haploinsufficiency is a reported mechanism. The variant is in exon 7 of 15, is predicted to create a premature termination codon in a position compatible with nonsense-mediated decay, is absent from population data, and has strong technical support including balanced allele evidence and second-caller detection. Candidate 1 is technically convincing and appears de novo, but it is a stop-gained variant in the final exon and is predicted to escape NMD, so it should not be treated automatically as straightforward transcript loss or haploinsufficiency. Candidate 3 is technically convincing and mechanism-plausible for a gain-of-function epilepsy gene, but the phenotype fit is more epilepsy-focused and the exact residue is not a known recurrent hotspot. Candidate 4 is a technically convincing inherited stop-gained variant in a recessive gene, but only one heterozygous allele is shown, so it does not currently provide a full biallelic explanation. The safest next step is to prioritise Candidate 2 for formal review while documenting the NMD, mechanism, and inheritance limitations for the other findings.",
    },
  },

  reasoningScorecard: [
    {
      category: "Predicted LoF interpretation",
      maxScore: 2,
      expectation:
        "Recognises that stop-gained and frameshift annotations require transcript, exon-position, NMD, and gene-mechanism review before being treated as clinically relevant loss-of-function.",
    },
    {
      category: "NMD and last-exon reasoning",
      maxScore: 2,
      expectation:
        "Distinguishes a truncating variant likely to trigger NMD from a final-exon truncating variant predicted to escape NMD.",
    },
    {
      category: "Mechanism fit",
      maxScore: 2,
      expectation:
        "Matches variant consequence to disease mechanism, including haploinsufficiency, gain-of-function missense, and recessive biallelic loss-of-function models.",
    },
    {
      category: "Candidate prioritisation",
      maxScore: 2,
      expectation:
        "Prioritises the candidate with the best convergence across phenotype, inheritance, likely molecular effect, mechanism, rarity, and technical evidence.",
    },
    {
      category: "Safe escalation",
      maxScore: 2,
      expectation:
        "Escalates the strongest candidate for formal review while documenting NMD, final-exon, missense-mechanism, and single-allele recessive caveats.",
    },
  ],

  patient: {
    age: 5,
    sex: "Male",
  },

  referralReason:
    "A 5-year-old boy has been referred for rare disease genome analysis because of global developmental delay, severe speech delay, seizures, hypotonia, and feeding difficulties.",

  testType: "Rare disease trio genome sequencing",

  familyStructure:
    "The proband and both biological parents have been tested. Both parents are reportedly unaffected.",

  history: [
    "Global developmental delay noted in infancy",
    "Severe expressive speech delay",
    "Seizures beginning before age 3",
    "Hypotonia from early childhood",
    "Feeding difficulties requiring specialist input",
    "No known previous molecular diagnosis",
  ],

  phenotype: [
    "Global developmental delay",
    "Severe speech delay",
    "Seizures",
    "Hypotonia",
    "Feeding difficulties",
  ],

  familyHistory:
    "Both parents are reportedly unaffected. No known family history of developmental delay, seizures, hypotonia, feeding difficulties, or a similar neurodevelopmental presentation.",

  serviceContext: [
    "The analysis is being performed in a rare disease service context.",
    "The key issue is predicted loss-of-function interpretation.",
    "A stop-gained or frameshift annotation is not automatically equivalent to clinically relevant loss-of-function.",
    "Your task is to consider exon position, likely nonsense-mediated decay, gene mechanism, inheritance, population evidence, technical confidence, and phenotype fit.",
  ],

  candidateFindings: [
    {
      id: "candidate-1",
      label: "Candidate 1",
      gene: "TAILN1",
      variant: "chr4:118902441 C>T",
      zygosity: "Heterozygous",
      consequence: "stop_gained in final exon",
      inheritanceSignal: "Apparent de novo",
      clinicalFit:
        "TAILN1 has a possible autosomal dominant neurodevelopmental association. The variant looks severe because it is stop-gained, but it is in the final exon and is predicted to escape nonsense-mediated decay.",
      rawEvidence: `GENE: TAILN1
Known disease association: possible autosomal dominant neurodevelopmental disorder
Reported inheritance: autosomal dominant proposed in limited reports
Known mechanism: uncertain; haploinsufficiency not firmly established

Variant:
chr4:118902441 C>T
Transcript: NM_220001.3
HGVS: c.2890C>T p.(Arg964*)
Consequence: stop_gained

Transcript / exon context:
Total coding exons: 18
Variant location: exon 18 of 18
Position: final coding exon
Predicted NMD: unlikely / predicted to escape NMD
Protein effect: possible C-terminal truncation rather than clear transcript loss

VCF-style fields:
QUAL=744
FILTER=PASS
INFO: DP=47;MQ=60;QD=15.8;SOR=0.78
FORMAT: GT:AD:DP:GQ

Proband: 0/1:24,23:47:99
Mother: 0/0:41,0:41:99
Father: 0/0:40,0:40:99

Read-level notes:
ALT reads seen on both forward and reverse strands
ALT reads distributed across read positions
No local mapping warning
No soft-clipping concern

Population:
gnomAD AF = not observed
gnomAD allele count = 0

Constraint:
LOEUF = 0.71
pLI = 0.19

ClinVar-style summary:
No exact matching variant record found in local summary
Gene-disease relationship remains limited
No strong local evidence that terminal truncating variants in this gene cause disease`,
      concern:
        "This is technically convincing and appears de novo, but it should not be treated as straightforward haploinsufficiency. Final-exon position and predicted NMD escape make the mechanism less clear.",
    },
    {
      id: "candidate-2",
      label: "Candidate 2",
      gene: "NMDX4",
      variant: "chr9:77211840 G>A",
      zygosity: "Heterozygous",
      consequence: "frameshift_variant",
      inheritanceSignal: "Apparent de novo with good parental coverage",
      clinicalFit:
        "NMDX4 is associated with an autosomal dominant neurodevelopmental disorder including developmental delay, severe speech delay, seizures, hypotonia, and feeding difficulties. Haploinsufficiency is a reported disease mechanism.",
      rawEvidence: `GENE: NMDX4
Known disease association: autosomal dominant neurodevelopmental disorder
Reported inheritance: autosomal dominant
Known mechanism: haploinsufficiency / loss-of-function

Variant:
chr9:77211840 G>A
Transcript: NM_220002.5
HGVS: c.988del p.(Asn330Thrfs*12)
Consequence: frameshift_variant
Predicted effect: premature termination codon

Transcript / exon context:
Total coding exons: 15
Variant location: exon 7 of 15
Predicted NMD: likely
Interpretation note: variant is expected to create a premature termination codon in a position compatible with nonsense-mediated decay

VCF-style fields:
QUAL=912
FILTER=PASS
INFO: DP=54;MQ=60;QD=16.9;SOR=0.72
FORMAT: GT:AD:DP:GQ

Proband: 0/1:28,26:54:99
Mother: 0/0:45,0:45:99
Father: 0/0:43,0:43:99

Read-level notes:
ALT reads seen on both forward and reverse strands
ALT reads distributed across read positions
High mapping quality for supporting reads
Indel represented consistently across local reads
No local low-complexity warning
No pseudogene or segmental duplication warning
Second caller: detected

Population:
gnomAD AF = not observed
gnomAD allele count = 0

Constraint:
LOEUF = 0.17
pLI = 0.99

ClinVar-style summary:
No exact matching variant record found in local summary
Other truncating and canonical splice variants in NMDX4 have been submitted as pathogenic/likely pathogenic in affected individuals`,
      concern:
        "This is the strongest current candidate because the phenotype, apparent de novo inheritance, predicted loss-of-function mechanism, likely NMD, population absence, constraint, and technical evidence all align.",
    },
    {
      id: "candidate-3",
      label: "Candidate 3",
      gene: "HOTSPOT7",
      variant: "chr12:44190220 T>C",
      zygosity: "Heterozygous",
      consequence: "missense_variant",
      inheritanceSignal: "Apparent de novo",
      clinicalFit:
        "HOTSPOT7 is associated with an autosomal dominant epilepsy condition caused by recurrent gain-of-function missense variants. The patient has seizures, but the full phenotype fit is less strong than Candidate 2.",
      rawEvidence: `GENE: HOTSPOT7
Known disease association: autosomal dominant epilepsy syndrome
Reported inheritance: autosomal dominant
Known mechanism: gain-of-function missense variants in recurrent hotspot domain

Variant:
chr12:44190220 T>C
Transcript: NM_220003.2
HGVS: c.1457T>C p.(Leu486Pro)
Consequence: missense_variant
Protein domain: near recurrent functional hotspot, but not a previously summarised exact hotspot residue

VCF-style fields:
QUAL=770
FILTER=PASS
INFO: DP=46;MQ=60;QD=16.7;SOR=0.84
FORMAT: GT:AD:DP:GQ

Proband: 0/1:23,23:46:99
Mother: 0/0:40,0:40:99
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
LOEUF = 0.88
pLI = 0.05

ClinVar-style summary:
No exact matching variant record found in local summary
Nearby recurrent missense hotspot variants have been submitted in epilepsy phenotypes`,
      concern:
        "This is technically convincing and may be worth noting, but it is less strong overall because the phenotype fit is more epilepsy-focused and the exact variant is not a known recurrent hotspot.",
    },
    {
      id: "candidate-4",
      label: "Candidate 4",
      gene: "RECNMD2",
      variant: "chr2:118809331 A>G",
      zygosity: "Heterozygous",
      consequence: "stop_gained",
      inheritanceSignal: "Inherited from unaffected father",
      clinicalFit:
        "RECNMD2 is associated with an autosomal recessive neurodevelopmental disorder. The variant is a technically convincing stop-gained call, but only one inherited heterozygous allele is shown.",
      rawEvidence: `GENE: RECNMD2
Known disease association: autosomal recessive neurodevelopmental disorder
Reported inheritance: autosomal recessive
Known mechanism: biallelic loss-of-function

Variant:
chr2:118809331 A>G
Transcript: NM_220004.4
HGVS: c.744C>T p.(Arg248*)
Consequence: stop_gained
Predicted effect: premature termination codon

Transcript / exon context:
Total coding exons: 11
Variant location: exon 4 of 11
Predicted NMD: likely

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
Deep intronic/regulatory variants not assessed in this summary

Population:
gnomAD AF = 0.000004
gnomAD allele count = 1
No homozygotes observed in local summary

Constraint:
LOEUF = 0.35
pLI = 0.71

ClinVar-style summary:
No exact matching variant record found in local summary
Other biallelic loss-of-function variants in RECNMD2 have been submitted in affected individuals`,
      concern:
        "This is technically convincing as a single inherited loss-of-function allele, but it does not currently explain a recessive disorder without a second relevant allele.",
    },
  ],

  decisionCheckpoints: [
    {
      id: "checkpoint-1",
      title: "Checkpoint 1 — Final-exon stop-gained does not always mean simple LoF",
      context:
        "Candidate 1 is a de novo stop-gained variant, but it lies in exon 18 of 18 and is predicted to escape nonsense-mediated decay.",
      question:
        "What is the safest interpretation of Candidate 1?",
      options: [
        {
          label: "A",
          text: "Treat it as straightforward haploinsufficient loss-of-function because the annotation is stop-gained.",
          isCorrect: false,
          feedback:
            "Not quite. A stop-gained variant in the final exon may escape NMD and may act differently from straightforward transcript loss.",
        },
        {
          label: "B",
          text: "Treat it as technically real and potentially interesting, but weakened for simple LoF because of final-exon position and predicted NMD escape.",
          isCorrect: true,
          feedback:
            "Correct. Candidate 1 needs careful mechanism review rather than automatic LoF prioritisation.",
        },
        {
          label: "C",
          text: "Dismiss it as benign because final-exon truncating variants cannot have clinical relevance.",
          isCorrect: false,
          feedback:
            "Not quite. Final-exon truncating variants can matter, but the mechanism needs evidence.",
        },
      ],
      teachingPoint:
        "Predicted loss-of-function should be interpreted with exon position, NMD likelihood, transcript relevance, and gene mechanism in mind.",
    },
    {
      id: "checkpoint-2",
      title: "Checkpoint 2 — Identify the strongest LoF candidate",
      context:
        "Candidate 2 is a de novo frameshift in exon 7 of 15 in NMDX4. It is predicted to trigger NMD, and haploinsufficiency is a known disease mechanism.",
      question:
        "Why is Candidate 2 stronger than Candidate 1?",
      options: [
        {
          label: "A",
          text: "Because small insertions and deletions should always be considered more clinically important than SNVs.",
          isCorrect: false,
          feedback:
            "Not quite. The key issue is not indel versus SNV. The key is whether the consequence fits the gene mechanism and NMD context.",
        },
        {
          label: "B",
          text: "Because Candidate 2 better aligns phenotype, inheritance, likely NMD, LoF mechanism, population absence, and technical evidence.",
          isCorrect: true,
          feedback:
            "Correct. Candidate 2 has stronger convergence across the evidence types.",
        },
        {
          label: "C",
          text: "Because Candidate 1 has poor read evidence and should be considered a likely sequencing artefact.",
          isCorrect: false,
          feedback:
            "Not quite. Candidate 1 is technically convincing. Its limitation is interpretation and mechanism, not call quality.",
        },
      ],
      teachingPoint:
        "The strongest loss-of-function candidate is the one where predicted molecular effect and disease mechanism align.",
    },
    {
      id: "checkpoint-3",
      title: "Checkpoint 3 — Mechanism can make a missense candidate relevant",
      context:
        "Candidate 3 is a de novo missense variant in a gene where gain-of-function missense variants cause epilepsy. The patient has seizures, but the overall phenotype fit is less complete.",
      question:
        "What is the best interpretation of Candidate 3?",
      options: [
        {
          label: "A",
          text: "Dismiss it because missense variants are always weaker than truncating variants in rare disease analysis.",
          isCorrect: false,
          feedback:
            "Not quite. In gain-of-function genes, missense variants can be highly relevant.",
        },
        {
          label: "B",
          text: "Treat it as technically convincing and mechanism-plausible, but weaker than Candidate 2 because full phenotype and hotspot evidence are less complete.",
          isCorrect: true,
          feedback:
            "Correct. Candidate 3 may be worth noting, but Candidate 2 has stronger overall evidence for this patient.",
        },
        {
          label: "C",
          text: "Treat it as diagnostic because it is de novo and the gene has an epilepsy association.",
          isCorrect: false,
          feedback:
            "Not quite. De novo status and partial phenotype fit are not enough for a final conclusion.",
        },
      ],
      teachingPoint:
        "Missense variants can be important when they match the known mechanism, but they still need phenotype, domain, population, and technical support.",
    },
    {
      id: "checkpoint-4",
      title: "Checkpoint 4 — Single LoF allele in a recessive gene",
      context:
        "Candidate 4 is an inherited stop-gained variant in a recessive gene. It is predicted to trigger NMD, but no second allele is identified in the current evidence.",
      question:
        "Why is Candidate 4 not the strongest current explanation?",
      options: [
        {
          label: "A",
          text: "Because inherited variants should be treated as technical artefacts in rare disease trio analysis.",
          isCorrect: false,
          feedback:
            "Not quite. Inherited variants can be real and relevant, especially in recessive disease.",
        },
        {
          label: "B",
          text: "Because one heterozygous LoF variant does not currently provide a full biallelic explanation for a recessive disorder.",
          isCorrect: true,
          feedback:
            "Correct. Candidate 4 is a real and potentially relevant carrier-level finding, but it does not currently explain the case alone.",
        },
        {
          label: "C",
          text: "Because NMD-predicted variants should usually be interpreted as benign unless they are de novo.",
          isCorrect: false,
          feedback:
            "Not quite. NMD-predicted variants can be pathogenic when they fit the disease mechanism and inheritance model.",
        },
      ],
      teachingPoint:
        "Variant effect and inheritance model must both fit. A strong LoF consequence is not enough if the disease requires biallelic variation.",
    },
    {
      id: "checkpoint-5",
      title: "Checkpoint 5 — Safe service-style next step",
      context:
        "Candidate 2 is the strongest current candidate. Candidate 1 is final-exon/NMD-escape and mechanistically uncertain. Candidate 3 is plausible but less complete. Candidate 4 is a single allele in a recessive gene.",
      question:
        "What is the safest next step?",
      options: [
        {
          label: "A",
          text: "Prioritise Candidate 1 because stop-gained annotations should be ranked above frameshift and missense findings.",
          isCorrect: false,
          feedback:
            "Not quite. Candidate 1 has an important NMD/mechanism caveat.",
        },
        {
          label: "B",
          text: "Prioritise Candidate 2 for review, document the NMD/last-exon limitation for Candidate 1, and explain why Candidates 3 and 4 are lower priority.",
          isCorrect: true,
          feedback:
            "Correct. This is safe and reviewable because it prioritises the best-supported candidate while documenting the interpretation caveats.",
        },
        {
          label: "C",
          text: "Ignore NMD context because all truncating variants can be interpreted as the same molecular consequence.",
          isCorrect: false,
          feedback:
            "Not quite. NMD likelihood and transcript context can substantially change interpretation.",
        },
      ],
      teachingPoint:
        "Safe predicted-LoF review means documenting why a variant is expected to cause true loss-of-function, rather than assuming from the annotation alone.",
    },
  ],

  finalReflection:
    "A safe trainee-level conclusion would be that Candidate 2 is the strongest current candidate for further review because it is an apparent de novo frameshift in a phenotype-compatible gene where haploinsufficiency is a known disease mechanism, and the variant position is compatible with likely nonsense-mediated decay. Candidate 1 is technically convincing and appears de novo, but it is a final-exon stop-gained variant predicted to escape NMD, so it should not be treated automatically as straightforward loss-of-function without mechanism review. Candidate 3 is technically convincing and mechanism-plausible for an epilepsy gene, but it does not explain the full phenotype as well as Candidate 2. Candidate 4 is a technically convincing single inherited loss-of-function allele in a recessive gene, but it does not currently provide a complete biallelic explanation. The safest next step is to prioritise Candidate 2, document the NMD and mechanism caveats for the other candidates, and escalate through the appropriate review pathway.",
};