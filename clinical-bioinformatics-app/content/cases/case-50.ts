export const case50 = {
  id: "case-50",
  slug: "full-service-readiness-capstone-case",
  title: "Case 50: Full service readiness capstone",
  level: "Advanced",
  summary:
    "A capstone case focused on end-to-end prioritisation, uncertainty, limitations, escalation, and safe clinical bioinformatics handover.",

  visualisationExampleId: null,

  assessmentFocus: [
    "Full service-readiness reasoning",
    "End-to-end candidate prioritisation",
    "Strong candidate handover",
    "VUS-level candidate communication",
    "Coverage limitation documentation",
    "Incomplete recessive evidence",
    "Inherited CNV deprioritisation",
    "Population and inheritance filtering",
    "Transcript and consequence review",
    "Clinical laboratory escalation boundaries",
  ],

  guidedTutorMode: {
    type: "static-rule-based",
    description:
      "Uses built-in hints, checkpoint feedback, model answers, and self-check criteria to support safe end-to-end clinical bioinformatics reasoning without requiring a live AI tutor.",
  },

  phase5Assessment: {
    candidateRanking: {
      prompt:
        "Rank the candidates by current review priority, separating the strongest candidate, plausible uncertain findings, limitations, and weaker alternatives.",
      correctOrder: [
        "candidate-4-strongest-main-candidate",
        "candidate-2-plausible-vus-level-candidate",
        "candidate-6-coverage-limitation-not-positive-finding",
        "candidate-3-single-allele-recessive-finding",
        "candidate-5-inherited-duplication-uncertain-gain-mechanism",
        "candidate-1-inherited-frequency-weakened-finding",
      ],
      explanation:
        "Candidate 4 is the strongest main candidate because the phenotype, apparent de novo inheritance, canonical splice donor consequence, MANE/clinically preferred transcript, loss-of-function mechanism, population absence, constraint, and technical evidence all align. Candidate 2 is plausible but remains VUS-level because the exact variant is novel in the local summary and functional evidence is absent. Candidate 6 is not a positive candidate but is an important coverage limitation in a phenotype-compatible gene. Candidate 3 is technically convincing but incomplete as a recessive explanation because only one allele is identified. Candidate 5 is likely a real duplication but weak because it is inherited and copy-number gain is not established as a mechanism. Candidate 1 is technically real but weakened by inheritance, population frequency, limited gene-disease validity, and weak phenotype specificity.",
    },

    governanceDecision: {
      prompt:
        "Choose the safest service-style handover for this capstone case.",
      options: [
        {
          id: "prioritise-main-candidate-with-caveats",
          label: "A",
          decision:
            "Prioritise Candidate 4 for formal review, describe Candidate 2 as VUS-level, document Candidate 6 as a limitation, and briefly explain why the remaining candidates are weaker.",
          isBest: true,
          feedback:
            "Best decision. This gives a clear recommendation while preserving uncertainty, limitations, and review boundaries.",
        },
        {
          id: "report-main-candidate-without-caveats",
          label: "B",
          decision:
            "Report Candidate 4 as a final diagnosis and omit the uncertain candidate, coverage limitation, and weaker alternatives.",
          isBest: false,
          feedback:
            "Review this choice. Candidate 4 is strongest, but formal review, uncertainty, and limitations still need to remain visible.",
        },
        {
          id: "avoid-prioritisation",
          label: "C",
          decision:
            "Avoid prioritising any candidate because the case contains multiple possible findings.",
          isBest: false,
          feedback:
            "Review this choice. Multiple findings do not prevent prioritisation. They require structured and proportionate reasoning.",
        },
      ],
    },

    writtenSummary: {
      prompt:
        "Write a final service-ready handover for this case, including the strongest candidate, uncertain candidate, limitation, and weaker alternatives.",
      checklist: [
        "Identifies Candidate 4 as the strongest current candidate.",
        "Mentions apparent de novo inheritance for Candidate 4.",
        "Mentions canonical splice donor consequence.",
        "Mentions clinically preferred transcript/MANE relevance.",
        "Mentions loss-of-function mechanism.",
        "Mentions phenotype fit.",
        "Mentions population absence and strong technical evidence.",
        "States that formal clinical laboratory review and sign-off are still required.",
        "Describes Candidate 2 as plausible but VUS-level.",
        "Explains that Candidate 2 should not be communicated as diagnostic.",
        "Documents Candidate 6 as a coverage limitation, not a positive finding.",
        "Explains why Candidate 1 is weak.",
        "Explains why Candidate 3 is incomplete as a recessive explanation.",
        "Explains why Candidate 5 is weak despite being technically plausible.",
        "Avoids final diagnostic sign-out wording.",
      ],
      modelAnswer:
        "Candidate 4 is the strongest current candidate for formal clinical laboratory review. It is an apparent de novo canonical splice donor variant in SYNCAP4 affecting the clinically preferred transcript. The patient’s developmental delay, severe speech delay, epilepsy, hypotonia, feeding difficulties, dysmorphic features, and illness-associated regression overlap the reported disease spectrum, and the gene has a supported loss-of-function mechanism. The variant is absent from population data, technically well supported, and supported by good parental coverage. Candidate 2 is also relevant but should be communicated only as a plausible VUS-level candidate because the exact variant has not been reported in the local summary and functional evidence is absent. Candidate 6 is not a positive finding but should be documented as a limitation because a phenotype-compatible gene has a poorly covered exon where sensitivity is reduced. Candidate 1 is weak because it is inherited, relatively frequent, and in a limited-evidence gene. Candidate 3 is a technically convincing single allele in a recessive gene but incomplete without a second allele. Candidate 5 is likely a real inherited duplication but has uncertain copy-number gain mechanism. The safest next step is to prioritise Candidate 4 for review, document the uncertain candidate and limitation clearly, and escalate through the appropriate clinical laboratory review and sign-off pathway.",
    },
  },

  reasoningScorecard: [
    {
      category: "Main candidate prioritisation",
      maxScore: 2,
      expectation:
        "Correctly identifies Candidate 4 as the strongest current candidate and explains the convergence of evidence.",
    },
    {
      category: "Uncertainty handling",
      maxScore: 2,
      expectation:
        "Keeps Candidate 2 visible as a plausible VUS-level candidate without communicating it as diagnostic.",
    },
    {
      category: "Limitation documentation",
      maxScore: 2,
      expectation:
        "Correctly describes Candidate 6 as an analytical limitation rather than a positive finding.",
    },
    {
      category: "Alternative candidate reasoning",
      maxScore: 2,
      expectation:
        "Explains why Candidates 1, 3, and 5 are weaker using inheritance, population, mechanism, and disease-model reasoning.",
    },
    {
      category: "Service-ready handover",
      maxScore: 2,
      expectation:
        "Provides a balanced, reviewable conclusion that supports escalation while respecting formal review and sign-off boundaries.",
    },
  ],

  patient: {
    age: 8,
    sex: "Male",
  },

  referralReason:
    "An 8-year-old boy has been referred for rare disease genome analysis because of developmental delay, severe speech delay, epilepsy, hypotonia, feeding difficulties, mild dysmorphic features, and intermittent episodes of regression during illness. The case has several possible findings, but only one is currently strong enough to prioritise as the main candidate.",

  testType:
    "Rare disease trio genome sequencing with SNV/indel, CNV, inheritance, phenotype, technical confidence, limitation, and service-handover review",

  familyStructure:
    "The proband and both biological parents have been tested. Both parents are reportedly unaffected. No known consanguinity is reported.",

  history: [
    "Global developmental delay noted in infancy",
    "Severe expressive speech delay",
    "Epilepsy beginning at age 3",
    "Hypotonia from early childhood",
    "Feeding difficulties in early childhood",
    "Mild dysmorphic features noted by clinical genetics",
    "Episodes of regression during significant viral illnesses",
    "No known previous molecular diagnosis",
    "The clinical team has requested a clear final candidate-prioritisation summary",
  ],

  phenotype: [
    "Global developmental delay",
    "Severe speech delay",
    "Epilepsy",
    "Hypotonia",
    "Feeding difficulties",
    "Mild dysmorphic features",
    "Illness-associated regression",
  ],

  familyHistory:
    "Both parents are reportedly unaffected. No known family history of developmental delay, epilepsy, hypotonia, feeding difficulties, regression, dysmorphic features, or a similar neurodevelopmental presentation.",

  serviceContext: [
    "This is a full service-readiness capstone case.",
    "The key issue is integrating everything: phenotype, inheritance, mechanism, population evidence, transcript/consequence, technical confidence, uncertain findings, limitations, and escalation.",
    "The safest answer is not just naming a candidate; it is producing a reviewable handover that explains what is strong, what is uncertain, what is weak, and what remains limited.",
    "One finding is currently the strongest main candidate.",
    "One finding is plausible but uncertain and should be described at VUS-level rather than diagnostic level.",
    "One finding is not a positive candidate but represents an important analytical limitation.",
    "Your task is to make a safe, balanced, service-style conclusion.",
  ],

  candidateFindings: [
    {
      id: "candidate-1",
      label: "Candidate 1",
      gene: "BROADCAP1",
      variant: "chr4:77190442 C>T",
      zygosity: "Heterozygous",
      consequence: "missense_variant",
      inheritanceSignal: "Inherited from unaffected father",
      clinicalFit:
        "BROADCAP1 has a broad neurodevelopmental association in limited reports, but the variant is inherited from an unaffected father, relatively frequent, and does not explain the illness-associated regression well.",
      rawEvidence: `GENE: BROADCAP1
  Known disease association: broad neurodevelopmental association in limited reports
  Reported inheritance: autosomal dominant proposed
  Known mechanism: uncertain
  Gene-disease validity in local summary: limited
  
  Variant:
  chr4:77190442 C>T
  Transcript: NM_500001.2
  HGVS: c.899C>T p.(Pro300Leu)
  Consequence: missense_variant
  Protein domain: outside known recurrent functional region in local summary
  
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
  No concerning soft-clipping
  
  Population:
  gnomAD AF = 0.0014
  gnomAD allele count = 370
  Homozygotes observed in population summary = 1
  
  Constraint:
  LOEUF = 0.82
  pLI = 0.08
  
  ClinVar-style summary:
  No exact matching pathogenic record found in local summary
  Several submitted variants in BROADCAP1 remain VUS or likely benign
  
  Interpretation limitation:
  Technically real, but inheritance, frequency, broad gene evidence, and weak phenotype specificity make it a low-priority finding.`,
      concern:
        "This is technically real but weak. It should be documented as reviewed and deprioritised, not treated as the main candidate.",
    },
    {
      id: "candidate-2",
      label: "Candidate 2",
      gene: "NEUROCAP2",
      variant: "chr12:66190442 G>A",
      zygosity: "Heterozygous",
      consequence: "missense_variant",
      inheritanceSignal: "Apparent de novo with good parental coverage",
      clinicalFit:
        "NEUROCAP2 is associated with an autosomal dominant neurodevelopmental-epilepsy disorder. The variant is de novo, absent from population data, technically strong, and located in a relevant functional domain, but the exact variant has not been reported and functional evidence is limited.",
      rawEvidence: `GENE: NEUROCAP2
  Known disease association: autosomal dominant neurodevelopmental-epilepsy disorder
  Reported inheritance: usually de novo
  Known mechanism: damaging missense variants in a recurrent functional domain
  Gene-disease validity in local summary: moderate / established
  
  Variant:
  chr12:66190442 G>A
  Transcript: NM_500002.5
  HGVS: c.1286G>A p.(Arg429His)
  Consequence: missense_variant
  Protein domain: recurrent neurodevelopmental functional domain
  Domain note: disease-associated missense variants cluster in this domain, but this exact variant is not a known recurrent hotspot
  
  VCF-style fields:
  QUAL=940
  FILTER=PASS
  INFO: DP=54;MQ=60;QD=17.4;SOR=0.72
  FORMAT: GT:AD:DP:GQ
  
  Proband: 0/1:27,27:54:99
  Mother: 0/0:44,0:44:99
  Father: 0/0:43,0:43:99
  
  Read-level notes:
  ALT reads seen on both forward and reverse strands
  ALT reads distributed across read positions
  High mapping quality for ALT-supporting reads
  High base quality at variant position
  No local low-complexity warning
  No pseudogene or segmental duplication warning
  No concerning soft-clipping around the variant
  Second caller: detected
  
  Parental coverage:
  Mother has good coverage at the site with no ALT support
  Father has good coverage at the site with no ALT support
  Trio data support apparent de novo inheritance
  Sample identity checks in local summary are consistent
  
  Population:
  gnomAD AF = not observed
  gnomAD allele count = 0
  
  Constraint:
  LOEUF = 0.50
  pLI = 0.55
  Missense/domain note: local summary highlights missense constraint in the affected functional domain
  
  Functional / literature-style evidence:
  No functional assay available for this exact variant
  No patient RNA evidence available
  No exact same-residue pathogenic variant in local summary
  Other missense variants in the same domain have been submitted as pathogenic/likely pathogenic in affected individuals
  Some nearby missense variants remain VUS
  
  Phenotype fit:
  Developmental delay: strong overlap
  Speech delay: strong overlap
  Epilepsy: strong overlap
  Hypotonia: compatible
  Feeding difficulties: compatible
  Illness-associated regression: not a core feature in local summary
  
  Interpretation limitation:
  This is a plausible VUS-level candidate.
  It is relevant and should be reviewed, but it should not be communicated as diagnostic from the current evidence.`,
      concern:
        "This is the main uncertain candidate. It is plausible and review-worthy, but the evidence is not strong enough for a confident diagnostic conclusion.",
    },
    {
      id: "candidate-3",
      label: "Candidate 3",
      gene: "RECCAP3",
      variant: "chr9:118809331 C>T",
      zygosity: "Heterozygous",
      consequence: "splice_acceptor_variant",
      inheritanceSignal: "Inherited from unaffected mother",
      clinicalFit:
        "RECCAP3 is associated with an autosomal recessive neurodevelopmental-metabolic disorder. The variant is a canonical splice acceptor, but only one inherited heterozygous allele is identified.",
      rawEvidence: `GENE: RECCAP3
  Known disease association: autosomal recessive neurodevelopmental-metabolic disorder
  Reported inheritance: autosomal recessive
  Known mechanism: biallelic loss-of-function
  
  Variant:
  chr9:118809331 C>T
  Transcript: NM_500003.4
  HGVS: c.744-2C>T
  Consequence: splice_acceptor_variant
  Splice position: canonical -2 acceptor site
  Predicted effect: likely acceptor splice-site disruption
  
  VCF-style fields:
  QUAL=790
  FILTER=PASS
  INFO: DP=48;MQ=60;QD=16.5;SOR=0.74
  FORMAT: GT:AD:DP:GQ
  
  Proband: 0/1:24,24:48:99
  Mother: 0/1:22,21:43:99
  Father: 0/0:41,0:41:99
  
  Read-level notes:
  ALT reads seen on both forward and reverse strands
  ALT reads distributed across read positions
  No local mapping warning
  No soft-clipping concern
  Second caller: detected
  
  Second-allele review:
  No second coding SNV/indel identified in current candidate list
  No confident exon-level deletion/duplication detected
  No strong deep intronic splice candidate identified in current summary
  No ROH or UPD clue involving RECCAP3
  
  Population:
  gnomAD AF = 0.000004
  gnomAD allele count = 1
  No homozygotes observed in local summary
  
  Constraint:
  LOEUF = 0.34
  pLI = 0.76
  
  ClinVar-style summary:
  No exact matching variant record found in local summary
  Other biallelic splice and truncating variants in RECCAP3 have been submitted in affected individuals
  
  Interpretation limitation:
  This is technically convincing as a single allele, but the current evidence does not complete the recessive model.`,
      concern:
        "This is technically convincing but incomplete as a recessive explanation. It should not be used as the main diagnosis without a second relevant allele.",
    },
    {
      id: "candidate-4",
      label: "Candidate 4",
      gene: "SYNCAP4",
      variant: "chr7:118902440 G>A",
      zygosity: "Heterozygous",
      consequence: "splice_donor_variant",
      inheritanceSignal: "Apparent de novo with good parental coverage",
      clinicalFit:
        "SYNCAP4 is associated with an autosomal dominant syndromic neurodevelopmental disorder including developmental delay, severe speech delay, epilepsy, hypotonia, feeding difficulties, dysmorphic features, and regression in some individuals. Loss-of-function is a reported mechanism.",
      rawEvidence: `GENE: SYNCAP4
  Known disease association: autosomal dominant syndromic neurodevelopmental disorder
  Reported inheritance: autosomal dominant, usually de novo
  Known mechanism: haploinsufficiency / loss-of-function
  Gene-disease validity in local summary: established
  
  Variant:
  chr7:118902440 G>A
  Transcript: NM_500004.5
  HGVS: c.744+1G>A
  Consequence: splice_donor_variant
  Splice position: canonical +1 donor site
  Predicted effect: likely donor splice-site disruption
  
  VCF-style fields:
  QUAL=958
  FILTER=PASS
  INFO: DP=56;MQ=60;QD=17.1;SOR=0.70
  FORMAT: GT:AD:DP:GQ
  
  Proband: 0/1:28,28:56:99
  Mother: 0/0:46,0:46:99
  Father: 0/0:44,0:44:99
  
  Read-level notes:
  ALT reads seen on both forward and reverse strands
  ALT reads distributed across read positions
  High mapping quality for ALT-supporting reads
  High base quality at variant position
  No local low-complexity warning
  No pseudogene or segmental duplication warning
  No concerning soft-clipping around the variant
  Second caller: detected
  
  Parental coverage:
  Mother has good coverage at site with no ALT support
  Father has good coverage at site with no ALT support
  Trio data support an apparent de novo signal
  Sample identity checks in local summary are consistent
  
  Transcript / consequence review:
  Variant affects MANE Select / clinically preferred transcript
  Canonical +1 donor variant
  Predicted to disrupt normal splicing
  Loss-of-function mechanism is supported for the gene
  
  Population:
  gnomAD AF = not observed
  gnomAD allele count = 0
  
  Constraint:
  LOEUF = 0.15
  pLI = 0.99
  
  ClinVar-style summary:
  No exact matching variant record found in local summary
  Other canonical splice-site and truncating variants in SYNCAP4 have been submitted as pathogenic/likely pathogenic in affected individuals
  Reported phenotypes overlap with developmental delay, severe speech delay, epilepsy, hypotonia, feeding difficulties, dysmorphic features, and regression in some individuals
  
  Phenotype fit:
  Developmental delay: strong match
  Severe speech delay: strong match
  Epilepsy: strong match
  Hypotonia: strong match
  Feeding difficulties: compatible
  Mild dysmorphic features: compatible
  Illness-associated regression: reported in some individuals but should still be documented as a phenotype detail rather than over-relied upon
  
  Interpretation note:
  This is the strongest current candidate because the phenotype, inheritance, consequence, transcript, mechanism, population evidence, and technical confidence all align.
  Formal clinical laboratory interpretation and sign-off are still required.`,
      concern:
        "This is the strongest current candidate. It should be prioritised for formal review while keeping role boundaries clear.",
    },
    {
      id: "candidate-5",
      label: "Candidate 5",
      gene: "CNVCAP5 region",
      variant: "chr16:29120000-29205000 duplication",
      zygosity: "Heterozygous duplication",
      consequence: "copy_number_gain",
      inheritanceSignal: "Inherited from unaffected father",
      clinicalFit:
        "The duplicated interval contains a possible neurodevelopmental candidate gene, but the duplication is inherited, overlaps population CNVs, and copy-number gain is not an established mechanism.",
      rawEvidence: `CNV REGION: chr16:29120000-29205000
  CNV type: duplication
  Estimated size: 85 kb
  Copy-number state: three-copy gain / heterozygous duplication
  
  Gene:
  CNVCAP5
  Known disease association: possible neurodevelopmental association in limited reports
  Known mechanism: uncertain
  Triplosensitivity evidence: not established
  
  Affected region:
  Partial duplication involving exons 2–4 of 11
  Orientation unknown
  Predicted transcript effect uncertain
  
  Inheritance:
  Proband: duplication present
  Mother: duplication not detected
  Father: duplication present
  Inheritance signal: paternally inherited
  
  CNV caller summary:
  Caller 1: duplication PASS
  Caller 2: duplication supported
  Quality score: 108
  Number of affected targets/windows: 25
  
  Read-depth evidence:
  Expected normalised depth in diploid regions: ~1.00
  Proband normalised depth across interval: ~1.46
  Father normalised depth across interval: ~1.48
  Mother normalised depth across interval: ~1.01
  Flanking regions: mostly normal
  
  Breakpoint evidence:
  Split reads: absent
  Paired-end support: imprecise
  Breakpoint not resolved
  
  B-allele / SNP pattern:
  B-allele pattern compatible with duplication in proband and father
  
  Population:
  Overlapping duplications observed in local population CNV summary
  Partial benign overlap reported
  
  Technical notes:
  Technically plausible duplication
  Clinical relevance uncertain because inherited and no established gain mechanism
  
  Interpretation limitation:
  Likely a real CNV, but not a strong explanation for the affected child.`,
      concern:
        "This is likely technically real, but it is weak because the gain mechanism is uncertain and the duplication is inherited from an unaffected parent.",
    },
    {
      id: "candidate-6",
      label: "Candidate 6",
      gene: "COVCAP6",
      variant: "No confident variant identified across poorly covered exon 8",
      zygosity: "Not assessable in one key region",
      consequence: "coverage_limitation",
      inheritanceSignal: "Cannot be assessed for the poorly covered region",
      clinicalFit:
        "COVCAP6 is a phenotype-compatible neurodevelopmental-metabolic gene. No confident variant is identified, but one clinically relevant exon has poor coverage, so the gene is not fully excluded by the current data.",
      rawEvidence: `GENE: COVCAP6
  Known disease association: autosomal recessive neurodevelopmental-metabolic disorder
  Reported inheritance: autosomal recessive
  Known mechanism: biallelic loss-of-function or damaging missense variants
  Gene-disease validity in local summary: established/moderate
  
  Reason this gene was reviewed:
  Phenotype overlap includes developmental delay, seizures, hypotonia, feeding difficulties, and regression during illness.
  
  Variant result:
  No confident SNV/indel identified in COVCAP6 in the current callset
  No exon-level deletion/duplication detected by CNV caller
  
  Coverage limitation:
  Transcript: NM_500006.5
  Clinically relevant exon: exon 8 of 14
  Exon 8 coding length: 142 bp
  Mean depth across most COVCAP6 coding exons: 38–62x
  Mean depth across exon 8: 7x
  Percentage of exon 8 bases below 10x: 64%
  Percentage of exon 8 bases below 20x: 92%
  
  Read / mapping context:
  Local GC-rich segment across exon 8
  Reduced mapping quality in part of exon 8
  Variant caller has reduced sensitivity in this region
  No confident alternate allele passes local thresholds
  No manual evidence of a clear candidate variant in the visible reads, but sensitivity is limited
  
  CNV review:
  No exon-level deletion/duplication detected across COVCAP6
  Normalised depth across most exons: ~0.96–1.04
  Exon 8 depth is noisy and not reliable enough to exclude all events confidently
  No second CNV caller support for a deletion
  
  Population / database context:
  No specific variant identified, so population evidence cannot be applied
  Known pathogenic variants in COVCAP6 include coding variants in multiple exons, including exon 8 in local summary
  
  Interpretation limitation:
  This is not a candidate variant.
  It is a limitation: a phenotype-compatible gene has one region where sensitivity is reduced.
  This should be documented if providing a complete handover.`,
      concern:
        "This is not a positive finding. It is an important limitation that should be documented, especially because the gene has some phenotype overlap.",
    },
  ],

  decisionCheckpoints: [
    {
      id: "checkpoint-1",
      title: "Checkpoint 1 — Identify the main strong candidate",
      context:
        "Candidate 4 is an apparent de novo canonical splice donor variant in SYNCAP4. The gene, phenotype, transcript, consequence, mechanism, population evidence, and technical evidence are all supportive.",
      question: "Why is Candidate 4 the strongest current candidate?",
      options: [
        {
          label: "A",
          text: "Because it has the best convergence across phenotype fit, inheritance, transcript consequence, loss-of-function mechanism, rarity, and technical confidence.",
          isCorrect: true,
          feedback:
            "Correct. Candidate 4 is strongest because multiple independent evidence types align.",
        },
        {
          label: "B",
          text: "Because every splice donor variant is diagnostic regardless of gene or phenotype.",
          isCorrect: false,
          feedback:
            "Not quite. Candidate 4 is strong because the splice consequence fits this specific gene, mechanism, and patient phenotype.",
        },
        {
          label: "C",
          text: "Because it is the only finding in the case.",
          isCorrect: false,
          feedback:
            "Not quite. There are several findings, but Candidate 4 has the strongest evidence pattern.",
        },
      ],
      teachingPoint:
        "Strong prioritisation depends on convergence across evidence types, not one isolated feature.",
    },
    {
      id: "checkpoint-2",
      title: "Checkpoint 2 — Keep the VUS-level candidate proportionate",
      context:
        "Candidate 2 is plausible: de novo, rare, technically strong, and in a relevant domain. But the exact variant has not been reported and functional evidence is absent.",
      question: "How should Candidate 2 be handled?",
      options: [
        {
          label: "A",
          text: "Describe it as a plausible VUS-level candidate for review, but not as a diagnostic finding.",
          isCorrect: true,
          feedback:
            "Correct. Candidate 2 is worth review but should not be overstated.",
        },
        {
          label: "B",
          text: "Report it as equally strong as Candidate 4 because it is also de novo.",
          isCorrect: false,
          feedback:
            "Not quite. Candidate 4 has stronger consequence, mechanism, and diagnostic-level support.",
        },
        {
          label: "C",
          text: "Ignore it completely because uncertain findings can never matter.",
          isCorrect: false,
          feedback:
            "Not quite. Uncertain findings can be relevant to review, follow-up, or reanalysis.",
        },
      ],
      teachingPoint:
        "A capstone handover should distinguish strong candidates from plausible but uncertain candidates.",
    },
    {
      id: "checkpoint-3",
      title: "Checkpoint 3 — Document the limitation without turning it into a candidate",
      context:
        "Candidate 6 is not a variant. It is a poor-coverage limitation in a phenotype-compatible gene.",
      question: "What is the safest way to describe Candidate 6?",
      options: [
        {
          label: "A",
          text: "Document that no confident variant was identified, but the poorly covered exon limits how completely the gene is excluded.",
          isCorrect: true,
          feedback:
            "Correct. That describes the limitation without over-interpreting it.",
        },
        {
          label: "B",
          text: "Treat the poorly covered exon as a diagnosis.",
          isCorrect: false,
          feedback:
            "Not quite. A limitation is not a positive finding.",
        },
        {
          label: "C",
          text: "Ignore the limitation because no variant was called.",
          isCorrect: false,
          feedback:
            "Not quite. Poor coverage can affect how confidently a relevant gene has been assessed.",
        },
      ],
      teachingPoint:
        "Limitations are part of safe handover, but they are not the same as candidate variants.",
    },
    {
      id: "checkpoint-4",
      title: "Checkpoint 4 — Deprioritise weaker findings clearly",
      context:
        "Candidate 1 is inherited and relatively frequent. Candidate 3 is incomplete recessive evidence. Candidate 5 is an inherited duplication with uncertain gain mechanism.",
      question: "How should these weaker findings be handled in the final summary?",
      options: [
        {
          label: "A",
          text: "Briefly document why each is weaker, so the prioritisation is traceable and reviewable.",
          isCorrect: true,
          feedback:
            "Correct. A safe handover explains both the top candidate and why alternatives were deprioritised.",
        },
        {
          label: "B",
          text: "Present all findings as equally likely to avoid making a judgement.",
          isCorrect: false,
          feedback:
            "Not quite. Service-ready reasoning requires proportionate prioritisation.",
        },
        {
          label: "C",
          text: "Delete weaker findings from the reasoning completely.",
          isCorrect: false,
          feedback:
            "Not quite. The full review may need to show that alternatives were considered and why they are weaker.",
        },
      ],
      teachingPoint:
        "A good service handover is concise but traceable.",
    },
    {
      id: "checkpoint-5",
      title: "Checkpoint 5 — Full service-readiness handover",
      context:
        "You need to prepare the final trainee-level handover for clinical laboratory review.",
      question: "Which conclusion is safest?",
      options: [
        {
          label: "A",
          text: "Prioritise Candidate 4 as the strongest current candidate; describe Candidate 2 as VUS-level; document Candidate 6 as a limitation; and briefly explain why Candidates 1, 3, and 5 are weaker.",
          isCorrect: true,
          feedback:
            "Correct. This is the most complete and balanced service-style conclusion.",
        },
        {
          label: "B",
          text: "Report Candidate 4 as final diagnosis and omit all caveats, uncertain findings, and limitations.",
          isCorrect: false,
          feedback:
            "Not quite. Candidate 4 is strongest, but formal review and limitations still need to be visible.",
        },
        {
          label: "C",
          text: "Avoid prioritising anything because there is more than one finding.",
          isCorrect: false,
          feedback:
            "Not quite. Multiple findings do not prevent prioritisation; they require structured reasoning.",
        },
      ],
      teachingPoint:
        "Service readiness means giving a clear recommendation while preserving uncertainty, limitations, and review boundaries.",
    },
  ],

  finalReflection:
    "A safe trainee-level conclusion would be that Candidate 4 is the strongest current candidate for formal clinical laboratory review. It is an apparent de novo canonical splice donor variant in SYNCAP4 affecting the clinically preferred transcript, and the phenotype, inheritance, loss-of-function mechanism, population absence, gene constraint, and technical evidence all align. Candidate 2 is a plausible VUS-level de novo missense candidate in a phenotype-compatible gene and constrained domain, but the exact variant has not been reported and there is no functional evidence, so it should not be communicated as diagnostic. Candidate 6 is not a positive finding, but it is an important limitation because a phenotype-compatible gene has a poorly covered exon where sensitivity is reduced. Candidate 1 is weaker because it is inherited, relatively frequent, and in a limited-evidence gene. Candidate 3 is a technically convincing single allele in a recessive gene but incomplete without a second allele. Candidate 5 is a likely real inherited duplication with uncertain copy-number gain mechanism. The safest next step is to prioritise Candidate 4, document Candidate 2 and Candidate 6 appropriately, explain why the remaining findings were deprioritised, and escalate through the appropriate clinical laboratory review and sign-off pathway.",
};