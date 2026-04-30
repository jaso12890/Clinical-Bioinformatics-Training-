export const case45 = {
  id: "case-45",
  slug: "carrier-reproductive-implication-boundary-case",
  title: "Case 45: Carrier and reproductive implication boundary",
  level: "Advanced",
  summary:
    "A service-readiness case focused on distinguishing a real carrier finding from a diagnosis for the affected patient.",

  visualisationExampleId: null,

  assessmentFocus: [
    "Carrier-status boundary",
    "Reproductive implication awareness",
    "Incomplete recessive evidence",
    "Avoiding overdiagnosis",
    "Affected-patient diagnosis versus carrier finding",
    "Second-allele review",
    "Weak alternative candidate review",
    "Safe service-ready communication",
  ],

  guidedTutorMode: {
    type: "static-rule-based",
    description:
      "Uses built-in hints, checkpoint feedback, model answers, and self-check criteria to support safe reasoning around carrier findings and diagnostic boundaries.",
  },

  phase5Assessment: {
    candidateRanking: {
      prompt:
        "Decide whether any finding explains the affected child’s phenotype, and distinguish diagnostic findings from carrier-level findings.",
      correctOrder: [
        "candidate-1-carrier-level-finding",
        "no-diagnostic-candidate",
        "candidate-2",
        "candidate-4",
        "candidate-3",
      ],
      explanation:
        "Candidate 1 is the most important finding, but it is a carrier-level finding rather than a complete diagnosis for the child. It is a strong pathogenic-type variant in a recessive gene, but only one allele is identified. Therefore, the safest diagnostic conclusion is that no diagnostic candidate is currently identified for the affected child. Candidate 2 is technically clean and apparent de novo, but weak gene-disease validity limits confidence. Candidate 4 is likely a real inherited duplication, but copy-number gain mechanism and population overlap weaken it. Candidate 3 is technically fragile and should not be prioritised without stronger read-level support.",
    },

    boundaryDecision: {
      prompt:
        "Choose the safest interpretation of the strong single-allele recessive finding.",
      options: [
        {
          id: "carrier-not-diagnostic",
          label: "A",
          decision:
            "Treat Candidate 1 as a strong carrier-level finding with possible reproductive or familial implications, but not as a diagnosis for the affected child from the current evidence.",
          isBest: true,
          feedback:
            "Best decision. This recognises that the variant is real and important while keeping the diagnostic boundary clear.",
        },
        {
          id: "single-allele-diagnostic",
          label: "B",
          decision:
            "Treat Candidate 1 as diagnostic because the variant has strong pathogenic evidence in a recessive disease gene.",
          isBest: false,
          feedback:
            "Review this choice. Strong pathogenic evidence for one allele does not complete an autosomal recessive diagnosis without a second relevant allele or another supporting mechanism.",
        },
        {
          id: "ignore-carrier-finding",
          label: "C",
          decision:
            "Ignore Candidate 1 because it does not explain the child’s phenotype.",
          isBest: false,
          feedback:
            "Review this choice. A carrier-level finding may still have reproductive or familial implications and should be handled through the correct service pathway.",
        },
      ],
    },

    writtenSummary: {
      prompt:
        "Write a safe service-ready summary that distinguishes the carrier finding from a diagnosis for the affected child.",
      checklist: [
        "States that Candidate 1 is the most important finding but is not diagnostic for the affected child from the current evidence.",
        "Explains that CARRREC1 is an autosomal recessive disease gene.",
        "Explains that only one heterozygous allele has been identified.",
        "Does not assume an unseen second allele.",
        "Mentions that no second coding SNV/indel, CNV, strong deep intronic candidate, ROH, or UPD clue is shown.",
        "States that Candidate 1 may have carrier/reproductive or familial implications according to local policy.",
        "Explains why Candidate 2 is not a confident diagnosis despite de novo status.",
        "Explains why Candidate 3 is not reliable because of technical fragility.",
        "Explains why Candidate 4 is weak despite being a likely real CNV.",
        "Uses proportionate wording and avoids final sign-out language.",
      ],
      modelAnswer:
        "Candidate 1 is the most important finding, but it is not currently diagnostic for the affected child. It is a technically robust canonical splice acceptor variant in CARRREC1, a well-established autosomal recessive disease gene, and the variant has strong pathogenic evidence for the recessive condition. However, only one heterozygous allele has been identified, with no second coding variant, CNV, strong deep intronic candidate, ROH, or UPD clue to complete the recessive model. This should therefore be treated as a strong carrier-level finding with possible reproductive or familial implications according to local policy, rather than as the explanation for the child’s phenotype. No convincing diagnostic candidate is currently identified. Candidate 2 is technically clean and apparent de novo but limited by weak gene-disease evidence. Candidate 3 is technically fragile. Candidate 4 is likely a real inherited duplication, but it has uncertain copy-number gain mechanism and population overlap. The safest next step is to document the carrier-status boundary clearly and escalate through the appropriate review pathway.",
    },
  },

  reasoningScorecard: [
    {
      category: "Carrier-status boundary",
      maxScore: 2,
      expectation:
        "Clearly distinguishes a real carrier-level finding from a diagnosis for the affected child.",
    },
    {
      category: "Recessive inheritance reasoning",
      maxScore: 2,
      expectation:
        "Recognises that a single heterozygous pathogenic variant is incomplete for an autosomal recessive diagnosis without a second relevant allele or mechanism.",
    },
    {
      category: "Second-allele review",
      maxScore: 2,
      expectation:
        "Uses the absence of a second SNV/indel, CNV, deep intronic candidate, ROH, or UPD clue to limit diagnostic confidence.",
    },
    {
      category: "Alternative candidate review",
      maxScore: 2,
      expectation:
        "Explains why the other candidates are weaker without forcing them into a diagnosis.",
    },
    {
      category: "Service-ready communication",
      maxScore: 2,
      expectation:
        "Communicates possible reproductive or familial implications while avoiding overstatement for the affected patient.",
    },
  ],

  patient: {
    age: 4,
    sex: "Female",
  },

  referralReason:
    "A 4-year-old girl has been referred for rare disease genome analysis because of developmental delay, severe speech delay, seizures, hypotonia, feeding difficulties, and mild dysmorphic features. The review identifies one strong carrier-level finding, but no convincing diagnostic explanation for the child’s presentation.",

  testType:
    "Rare disease trio genome sequencing with SNV/indel, CNV, inheritance, phenotype, and carrier-status boundary review",

  familyStructure:
    "The proband and both biological parents have been tested. Both parents are reportedly unaffected.",

  history: [
    "Global developmental delay noted in infancy",
    "Severe expressive speech delay",
    "Seizures beginning before age 3",
    "Hypotonia from early childhood",
    "Feeding difficulties in early childhood",
    "Mild dysmorphic features noted by clinical genetics",
    "No known previous molecular diagnosis",
    "One strong carrier-level finding is present, but no second allele is identified",
  ],

  phenotype: [
    "Global developmental delay",
    "Severe speech delay",
    "Seizures",
    "Hypotonia",
    "Feeding difficulties",
    "Mild dysmorphic features",
  ],

  familyHistory:
    "Both parents are reportedly unaffected. No known family history of developmental delay, seizures, hypotonia, feeding difficulties, dysmorphic features, or the recessive condition linked to the carrier finding is documented.",

  serviceContext: [
    "This is a carrier and reproductive implication boundary case.",
    "The key issue is that a finding can be real, clinically important, and still not explain the affected child’s phenotype.",
    "A single pathogenic or likely pathogenic variant in a recessive gene may indicate carrier status, but it usually does not diagnose a recessive disorder without a second relevant allele.",
    "Your task is to decide what the finding does and does not mean.",
    "Do not overstate a carrier finding as diagnostic for the child, but also do not ignore it if it may have reproductive or familial implications within the correct service pathway.",
  ],

  candidateFindings: [
    {
      id: "candidate-1",
      label: "Candidate 1",
      gene: "CARRREC1",
      variant: "chr9:118809331 C>T",
      zygosity: "Heterozygous",
      consequence: "splice_acceptor_variant",
      inheritanceSignal: "Inherited from unaffected mother",
      clinicalFit:
        "CARRREC1 is associated with an autosomal recessive metabolic-neurodevelopmental disorder. The variant is a canonical splice acceptor with strong evidence for pathogenicity in the recessive condition, but only one inherited heterozygous allele is identified in the child.",
      rawEvidence: `GENE: CARRREC1
  Known disease association: autosomal recessive metabolic-neurodevelopmental disorder
  Reported inheritance: autosomal recessive
  Known mechanism: biallelic loss-of-function
  Gene-disease validity in local summary: established
  
  Variant:
  chr9:118809331 C>T
  Transcript: NM_450001.4
  HGVS: c.744-2C>T
  Consequence: splice_acceptor_variant
  Splice position: canonical -2 acceptor site
  Predicted effect: likely acceptor splice-site disruption
  
  VCF-style fields:
  QUAL=890
  FILTER=PASS
  INFO: DP=52;MQ=60;QD=17.1;SOR=0.72
  FORMAT: GT:AD:DP:GQ
  
  Proband: 0/1:26,26:52:99
  Mother: 0/1:24,23:47:99
  Father: 0/0:45,0:45:99
  
  Read-level notes:
  ALT reads seen on both forward and reverse strands
  ALT reads distributed across read positions
  High mapping quality for ALT-supporting reads
  High base quality at variant position
  No local low-complexity warning
  No pseudogene or segmental duplication warning
  No concerning soft-clipping around the variant
  Second caller: detected
  
  Second-allele review:
  No second coding SNV/indel identified in current candidate list
  No confident exon-level deletion/duplication detected across CARRREC1
  No strong deep intronic splice candidate identified in current summary
  No promoter/regulatory variant assessed in this evidence packet
  No evidence of uniparental isodisomy or large ROH involving CARRREC1
  
  Population:
  gnomAD AF = 0.000003
  gnomAD allele count = 1
  No homozygotes observed in local summary
  
  Constraint:
  LOEUF = 0.29
  pLI = 0.84
  
  ClinVar-style summary:
  Exact variant present in local summary:
  - Likely pathogenic/pathogenic for autosomal recessive CARRREC1-related disorder
  - Multiple submitters, no conflict in local summary
  Other biallelic canonical splice and truncating variants in CARRREC1 have been submitted as pathogenic/likely pathogenic in affected individuals
  
  Phenotype comparison:
  CARRREC1-related disease can include seizures, hypotonia, and developmental delay
  However, affected individuals usually have biallelic pathogenic variants
  Current evidence shows only one heterozygous allele
  
  Service boundary:
  This is a strong carrier-level finding.
  It is not currently a diagnostic explanation for the affected child.
  It may require handling according to local policy for carrier/reproductive implications.`,
      concern:
        "This is the key finding, but the key point is boundary control: it is a strong carrier-level finding in a recessive gene, not a complete diagnosis for the affected child from the current evidence.",
    },
    {
      id: "candidate-2",
      label: "Candidate 2",
      gene: "NDDCAR2",
      variant: "chr2:77219011 G>A",
      zygosity: "Heterozygous",
      consequence: "missense_variant",
      inheritanceSignal: "Apparent de novo with good parental coverage",
      clinicalFit:
        "NDDCAR2 has a possible autosomal dominant neurodevelopmental association. The variant is absent from population data and technically clean, but the gene-disease relationship remains limited and the variant is outside any known recurrent functional domain.",
      rawEvidence: `GENE: NDDCAR2
  Known disease association: possible autosomal dominant neurodevelopmental disorder
  Reported inheritance: autosomal dominant proposed in limited reports
  Known mechanism: uncertain
  Gene-disease validity in local summary: limited / emerging
  
  Variant:
  chr2:77219011 G>A
  Transcript: NM_450002.2
  HGVS: c.1042G>A p.(Gly348Ser)
  Consequence: missense_variant
  Protein domain: outside known recurrent functional region in local summary
  
  VCF-style fields:
  QUAL=812
  FILTER=PASS
  INFO: DP=50;MQ=60;QD=16.2;SOR=0.80
  FORMAT: GT:AD:DP:GQ
  
  Proband: 0/1:25,25:50:99
  Mother: 0/0:43,0:43:99
  Father: 0/0:42,0:42:99
  
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
  LOEUF = 0.68
  pLI = 0.21
  Missense/domain note: no strong same-residue or same-domain evidence in current local summary
  
  ClinVar-style summary:
  No exact matching pathogenic record found in local summary
  Only limited reports link NDDCAR2 to broad neurodevelopmental phenotypes
  Several submitted variants in NDDCAR2 remain uncertain significance
  
  Interpretation limitation:
  Technically convincing and apparently de novo, but gene-disease validity and mechanism evidence are weak.`,
      concern:
        "This may be noted as reviewed, but it should not be forced as a diagnosis because the gene-disease evidence is weak.",
    },
    {
      id: "candidate-3",
      label: "Candidate 3",
      gene: "SEIZCAR3",
      variant: "chr11:44190220 T>C",
      zygosity: "Heterozygous",
      consequence: "missense_variant",
      inheritanceSignal: "Apparent de novo, but technically fragile",
      clinicalFit:
        "SEIZCAR3 has a possible developmental epilepsy association and could partly fit the seizure phenotype, but the call has multiple read-level artefact warnings.",
      rawEvidence: `GENE: SEIZCAR3
  Known disease association: possible autosomal dominant developmental epilepsy
  Reported inheritance: autosomal dominant proposed in limited reports
  Known mechanism: uncertain; missense variants proposed in limited evidence
  Gene-disease validity in local summary: limited/moderate
  
  Variant:
  chr11:44190220 T>C
  Transcript: NM_450003.2
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
  Several ALT-supporting reads have nearby mismatches
  Second caller: not detected
  Manual read-level review recommended before prioritisation
  
  Population:
  gnomAD AF = not observed
  gnomAD allele count = 0
  
  Constraint:
  LOEUF = 0.43
  pLI = 0.74
  
  ClinVar-style summary:
  No exact matching variant record found in local summary
  Nearby missense variants in SEIZCAR3 have been submitted in epilepsy phenotypes, but evidence remains limited
  
  Interpretation limitation:
  The phenotype overlap is partial and the technical evidence is too fragile for confident prioritisation.`,
      concern:
        "This should not be prioritised from the current evidence. Apparent de novo status is undermined by technical fragility.",
    },
    {
      id: "candidate-4",
      label: "Candidate 4",
      gene: "CNVCAR4 region",
      variant: "chr16:29120000-29205000 duplication",
      zygosity: "Heterozygous duplication",
      consequence: "copy_number_gain",
      inheritanceSignal: "Inherited from unaffected father",
      clinicalFit:
        "The duplicated interval contains a possible neurodevelopmental candidate gene, but the duplication is inherited, overlaps population CNVs, and copy-number gain is not an established disease mechanism.",
      rawEvidence: `CNV REGION: chr16:29120000-29205000
  CNV type: duplication
  Estimated size: 85 kb
  Copy-number state: three-copy gain / heterozygous duplication
  
  Gene:
  CNVCAR4
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
        "This is likely technically real, but it is weak as a diagnostic candidate because of inheritance, population overlap, and uncertain copy-number gain mechanism.",
    },
  ],

  decisionCheckpoints: [
    {
      id: "checkpoint-1",
      title: "Checkpoint 1 — Real does not always mean diagnostic",
      context:
        "Candidate 1 is a technically convincing canonical splice acceptor variant in a well-established recessive gene. It is inherited from the mother and only one allele is identified.",
      question:
        "What is the safest interpretation of Candidate 1 for the affected child?",
      options: [
        {
          label: "A",
          text: "It is diagnostic because a pathogenic carrier variant is present.",
          isCorrect: false,
          feedback:
            "Not quite. A single heterozygous pathogenic variant in a recessive gene usually indicates carrier status, not an affected diagnosis.",
        },
        {
          label: "B",
          text: "It is a strong carrier-level finding, but it does not currently explain the child’s phenotype without a second relevant allele.",
          isCorrect: true,
          feedback:
            "Correct. Candidate 1 is real and important, but not diagnostic for the child from the current evidence.",
        },
        {
          label: "C",
          text: "It should be ignored because carrier findings can never matter.",
          isCorrect: false,
          feedback:
            "Not quite. Carrier findings may have reproductive or familial implications depending on local policy.",
        },
      ],
      teachingPoint:
        "A carrier-level finding can be clinically important without being the diagnosis for the affected patient.",
    },
    {
      id: "checkpoint-2",
      title: "Checkpoint 2 — Do not complete a recessive model without evidence",
      context:
        "Candidate 1 has strong pathogenic evidence as a single allele, but no second coding variant, CNV, deep intronic candidate, ROH, or UPD clue is identified.",
      question: "What should you avoid doing?",
      options: [
        {
          label: "A",
          text: "Avoid assuming an unseen second allele is present just to make the finding diagnostic.",
          isCorrect: true,
          feedback:
            "Correct. You can document limitations, but you should not invent a second allele.",
        },
        {
          label: "B",
          text: "Avoid documenting the carrier finding at all.",
          isCorrect: false,
          feedback:
            "Not quite. The finding may still need appropriate handling, even if it is not diagnostic.",
        },
        {
          label: "C",
          text: "Avoid checking whether CNV or deep intronic evidence could provide a second allele.",
          isCorrect: false,
          feedback:
            "Not quite. Reviewing possible second-allele mechanisms is appropriate; assuming one without evidence is not.",
        },
      ],
      teachingPoint:
        "A recessive diagnosis requires evidence for the disease model, not just a strong first allele.",
    },
    {
      id: "checkpoint-3",
      title: "Checkpoint 3 — Weak alternatives should not be promoted",
      context:
        "Candidate 2 is de novo and technically clean, but the gene-disease evidence is limited. Candidate 3 is de novo-looking but technically fragile. Candidate 4 is an inherited duplication with uncertain gain mechanism.",
      question:
        "Why are Candidates 2, 3, and 4 not better diagnostic explanations?",
      options: [
        {
          label: "A",
          text: "Because each has a major limitation in gene validity, technical confidence, inheritance, population support, or mechanism.",
          isCorrect: true,
          feedback:
            "Correct. None of these alternatives has enough evidence to explain the child confidently.",
        },
        {
          label: "B",
          text: "Because only carrier variants should ever be discussed.",
          isCorrect: false,
          feedback:
            "Not quite. All candidates should be reviewed, but their limitations should be documented.",
        },
        {
          label: "C",
          text: "Because CNVs and missense variants can never be relevant.",
          isCorrect: false,
          feedback:
            "Not quite. They can be relevant when evidence supports them. These specific candidates are weak.",
        },
      ],
      teachingPoint:
        "A carrier finding should not distract from reviewing other candidates, but weak alternatives should not be forced either.",
    },
    {
      id: "checkpoint-4",
      title: "Checkpoint 4 — Reproductive implication boundary",
      context:
        "Candidate 1 may have reproductive or familial implications, but the child’s affected phenotype is not explained by a single heterozygous allele.",
      question: "How should this boundary be communicated?",
      options: [
        {
          label: "A",
          text: "State that the child has the recessive disorder caused by CARRREC1.",
          isCorrect: false,
          feedback:
            "Not quite. That would overstate the evidence.",
        },
        {
          label: "B",
          text: "State that Candidate 1 is a carrier-level finding that may need appropriate handling according to local policy, but is not currently diagnostic for the child.",
          isCorrect: true,
          feedback:
            "Correct. This keeps the diagnostic and reproductive implications separate.",
        },
        {
          label: "C",
          text: "State that carrier findings are irrelevant and should never be escalated.",
          isCorrect: false,
          feedback:
            "Not quite. Carrier findings can matter, but they need the correct pathway and wording.",
        },
      ],
      teachingPoint:
        "Safe practice separates affected-patient diagnosis from carrier or reproductive-risk implications.",
    },
    {
      id: "checkpoint-5",
      title: "Checkpoint 5 — Safe service-style next step",
      context:
        "Candidate 1 is the most important finding, but it is not diagnostic for the affected child. The remaining candidates are not convincing diagnostic explanations.",
      question: "What is the safest final conclusion?",
      options: [
        {
          label: "A",
          text: "Document Candidate 1 as a strong carrier-level finding, state that no diagnostic candidate is currently identified for the child, and escalate carrier/reproductive implications through the appropriate pathway.",
          isCorrect: true,
          feedback:
            "Correct. This is safe because it recognises the finding without misusing it as the diagnosis.",
        },
        {
          label: "B",
          text: "Report Candidate 1 as the explanation for the child’s phenotype because it has strong pathogenic evidence.",
          isCorrect: false,
          feedback:
            "Not quite. Strong pathogenic evidence for a single recessive allele does not make it a complete diagnosis.",
        },
        {
          label: "C",
          text: "Ignore Candidate 1 and say there are no findings of any relevance.",
          isCorrect: false,
          feedback:
            "Not quite. Candidate 1 may be relevant for carrier or reproductive implications, even though it is not diagnostic.",
        },
      ],
      teachingPoint:
        "The safest conclusion can be: important finding present, but no diagnostic explanation identified.",
    },
  ],

  finalReflection:
    "A safe trainee-level conclusion would be that Candidate 1 is the most important finding, but it is not diagnostic for the affected child from the current evidence. It is a technically robust canonical splice acceptor variant in CARRREC1, a well-established autosomal recessive disease gene, and the variant has strong pathogenic evidence in the recessive condition. However, the child has only one heterozygous allele identified, with no second coding variant, CNV, deep intronic candidate, ROH, or UPD clue to complete the recessive model. Therefore, this should be treated as a strong carrier-level finding with possible reproductive or familial implications according to local policy, not as the explanation for the child’s phenotype. Candidate 2 is technically clean and de novo but weak because gene-disease evidence is limited. Candidate 3 is technically fragile. Candidate 4 is a likely real inherited duplication with uncertain gain mechanism. The safest next step is to document that no diagnostic candidate is currently identified for the affected child, while escalating Candidate 1 through the appropriate carrier/reproductive implication pathway.",
};