export const case46 = {
  id: "case-46",
  slug: "secondary-incidental-finding-boundary-case",
  title: "Case 46: Secondary/incidental finding boundary",
  level: "Advanced",
  summary:
    "A service-readiness case focused on recognising when a finding may be clinically important but does not explain the original referral phenotype.",

  visualisationExampleId: null,

  assessmentFocus: [
    "Secondary/incidental finding boundary",
    "Referral phenotype versus unrelated finding",
    "Scope and consent awareness",
    "Clinical governance escalation",
    "Avoiding phenotype forcing",
    "No clean primary diagnostic candidate",
    "Weak referral-relevant candidate review",
    "Safe service-ready communication",
  ],

  guidedTutorMode: {
    type: "static-rule-based",
    description:
      "Uses built-in hints, checkpoint feedback, model answers, and self-check criteria to support safe reasoning around secondary/incidental findings and referral-scope boundaries.",
  },

  phase5Assessment: {
    candidateRanking: {
      prompt:
        "Decide which finding is most important to escalate, while separating that from the diagnostic answer to the original neurodevelopmental referral question.",
      correctOrder: [
        "candidate-1-secondary-incidental-escalation-issue",
        "no-clean-neurodevelopmental-diagnostic-candidate",
        "candidate-2",
        "candidate-3",
        "candidate-4",
      ],
      explanation:
        "Candidate 1 is the most important finding to escalate because it is technically strong and may be clinically important, but it does not explain the child’s neurodevelopmental referral phenotype. Therefore, the safest diagnostic conclusion for the original referral is that no clean neurodevelopmental diagnostic candidate is currently identified. Candidate 2 is the most referral-relevant sequence candidate, but weak gene-disease validity and uncertain mechanism limit confidence. Candidate 3 is a single allele in a recessive gene and incomplete as an explanation. Candidate 4 is technically fragile and should not be prioritised without stronger read-level support.",
    },

    boundaryDecision: {
      prompt:
        "Choose the safest handling of the technically strong CARDSEC1 finding.",
      options: [
        {
          id: "secondary-escalation-not-primary-diagnosis",
          label: "A",
          decision:
            "Flag Candidate 1 as a possible secondary/incidental finding requiring appropriate consent/governance review, while clearly stating that it does not explain the neurodevelopmental referral phenotype.",
          isBest: true,
          feedback:
            "Best decision. This keeps the finding visible and clinically safe without misusing it as the explanation for the child’s developmental presentation.",
        },
        {
          id: "use-as-primary-diagnosis",
          label: "B",
          decision:
            "Treat Candidate 1 as the child’s developmental diagnosis because it is technically strong and high-impact.",
          isBest: false,
          feedback:
            "Review this choice. Technical strength and high predicted impact do not make a variant relevant to an unrelated referral phenotype.",
        },
        {
          id: "ignore-out-of-scope",
          label: "C",
          decision:
            "Ignore Candidate 1 completely because it is outside the original referral question.",
          isBest: false,
          feedback:
            "Review this choice. A possible secondary/incidental finding may still require escalation through the appropriate pathway, depending on local policy.",
        },
      ],
    },

    writtenSummary: {
      prompt:
        "Write a safe service-ready summary that separates the possible secondary/incidental finding from the diagnostic conclusion for the original referral.",
      checklist: [
        "States that Candidate 1 is technically strong and may require escalation.",
        "States that Candidate 1 does not explain the child’s neurodevelopmental referral phenotype.",
        "Mentions that CARDSEC1 is associated with cardiac rhythm/cardiomyopathy disease, not the referred developmental/seizure presentation.",
        "Avoids presenting Candidate 1 as the developmental diagnosis.",
        "States that handling Candidate 1 depends on local consent, reporting, and governance policy.",
        "States that no clean diagnostic candidate currently explains the neurodevelopmental referral.",
        "Explains why Candidate 2 is weak despite being referral-relevant and de novo.",
        "Explains why Candidate 3 is incomplete as a recessive finding.",
        "Explains why Candidate 4 is technically fragile.",
        "Uses proportionate wording and avoids final sign-out language.",
      ],
      modelAnswer:
        "Candidate 1 is the most important finding to escalate, but it should not be treated as the diagnosis for the child’s neurodevelopmental presentation. It is a technically robust apparent de novo stop-gained variant in CARDSEC1, a gene associated with cardiac rhythm/cardiomyopathy disease, where loss-of-function is a reported mechanism. However, the referred phenotype is developmental delay, severe speech delay, epilepsy, hypotonia, and dysmorphic features, which are not typical CARDSEC1 features in the local summary. This finding may therefore represent a possible secondary/incidental issue requiring appropriate consent and governance review, rather than the explanation for the referral. No clean diagnostic candidate currently explains the neurodevelopmental phenotype. Candidate 2 is more relevant to the referral but remains weak because gene-disease validity and mechanism evidence are limited. Candidate 3 is a single heterozygous allele in a recessive gene and incomplete as an explanation. Candidate 4 is technically fragile. The safest next step is to document the primary diagnostic conclusion separately from the possible secondary/incidental escalation issue.",
    },
  },

  reasoningScorecard: [
    {
      category: "Scope-boundary reasoning",
      maxScore: 2,
      expectation:
        "Clearly separates the original neurodevelopmental referral question from the unrelated cardiac finding.",
    },
    {
      category: "Secondary/incidental finding handling",
      maxScore: 2,
      expectation:
        "Recognises that Candidate 1 may require escalation through local consent and governance pathways without treating it as the primary diagnosis.",
    },
    {
      category: "Primary diagnostic conclusion",
      maxScore: 2,
      expectation:
        "States that no clean diagnostic candidate currently explains the neurodevelopmental referral phenotype.",
    },
    {
      category: "Alternative candidate review",
      maxScore: 2,
      expectation:
        "Explains why Candidates 2, 3, and 4 are not convincing diagnostic explanations.",
    },
    {
      category: "Service-ready communication",
      maxScore: 2,
      expectation:
        "Uses proportionate, review-ready wording that avoids overstatement and makes escalation needs clear.",
    },
  ],

  patient: {
    age: 9,
    sex: "Male",
  },

  referralReason:
    "A 9-year-old boy has been referred for rare disease genome analysis because of developmental delay, severe speech delay, epilepsy, hypotonia, and mild dysmorphic features. During review, a technically strong finding is identified in a gene associated with an unrelated adult-onset cardiac condition.",

  testType:
    "Rare disease trio genome sequencing with SNV/indel, CNV, phenotype, inheritance, and scope-boundary review",

  familyStructure:
    "The proband and both biological parents have been tested. Both parents are reportedly unaffected. The referral question is focused on the child’s neurodevelopmental phenotype.",

  history: [
    "Global developmental delay noted in infancy",
    "Severe expressive speech delay",
    "Epilepsy beginning at age 4",
    "Hypotonia from early childhood",
    "Mild dysmorphic features noted by clinical genetics",
    "No known previous molecular diagnosis",
    "No cardiac phenotype is described in the referral information",
    "No known family history of sudden cardiac death or cardiomyopathy is documented in the information shown",
  ],

  phenotype: [
    "Global developmental delay",
    "Severe speech delay",
    "Epilepsy",
    "Hypotonia",
    "Mild dysmorphic features",
  ],

  familyHistory:
    "Both parents are reportedly unaffected. No known family history of developmental delay, epilepsy, hypotonia, dysmorphic features, cardiomyopathy, arrhythmia, sudden cardiac death, or a similar presentation is documented.",

  serviceContext: [
    "This is a secondary/incidental finding boundary case.",
    "The key issue is that a finding can be technically real and potentially important but still not explain the original referral phenotype.",
    "The rare disease analysis question is focused on the child’s developmental and seizure presentation.",
    "A finding in an unrelated actionable or adult-onset disease gene may require escalation according to local consent, reporting, and clinical governance policy.",
    "Your task is to separate diagnostic relevance from possible secondary/incidental significance.",
    "Do not use an out-of-scope finding as the explanation for the child’s phenotype, but do not ignore it if it may require appropriate escalation.",
  ],

  candidateFindings: [
    {
      id: "candidate-1",
      label: "Candidate 1",
      gene: "CARDSEC1",
      variant: "chr14:22901881 C>T",
      zygosity: "Heterozygous",
      consequence: "stop_gained",
      inheritanceSignal: "Apparent de novo with good parental coverage",
      clinicalFit:
        "CARDSEC1 is associated with an autosomal dominant cardiac rhythm/cardiomyopathy condition. The variant is technically convincing and loss-of-function is a reported mechanism, but the gene does not explain the child’s developmental delay, epilepsy, hypotonia, or dysmorphic features.",
      rawEvidence: `GENE: CARDSEC1
  Known disease association: autosomal dominant cardiac rhythm / cardiomyopathy condition
  Reported inheritance: autosomal dominant
  Known mechanism: loss-of-function / haploinsufficiency
  Gene-disease validity in local summary: established for cardiac disease
  
  Variant:
  chr14:22901881 C>T
  Transcript: NM_460001.4
  HGVS: c.1006C>T p.(Arg336*)
  Consequence: stop_gained
  Predicted effect: premature termination codon
  Predicted NMD: likely
  
  VCF-style fields:
  QUAL=940
  FILTER=PASS
  INFO: DP=54;MQ=60;QD=17.4;SOR=0.72
  FORMAT: GT:AD:DP:GQ
  
  Proband: 0/1:27,27:54:99
  Mother: 0/0:45,0:45:99
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
  
  Population:
  gnomAD AF = not observed
  gnomAD allele count = 0
  
  Constraint:
  LOEUF = 0.18
  pLI = 0.98
  
  ClinVar-style summary:
  No exact matching variant record found in local summary
  Other truncating variants in CARDSEC1 have been submitted as pathogenic/likely pathogenic in cardiac rhythm/cardiomyopathy cases
  Local disease summary supports loss-of-function as a cardiac disease mechanism
  
  Phenotype comparison:
  Developmental delay: not a typical feature in local summary
  Severe speech delay: not a typical feature in local summary
  Epilepsy: not a typical feature in local summary
  Hypotonia: not a typical feature in local summary
  Mild dysmorphic features: not a typical feature in local summary
  Cardiac phenotype: not described in the referral information
  
  Scope / governance note:
  This finding may be clinically important but appears unrelated to the original rare disease neurodevelopmental referral question.
  Whether and how it is handled depends on local consent, secondary/incidental finding policy, and clinical governance pathway.
  It should not be presented as the explanation for the child’s developmental phenotype.`,
      concern:
        "This is the key boundary finding. It is technically strong and may require escalation, but it is not the main diagnostic explanation for the referred neurodevelopmental phenotype.",
    },
    {
      id: "candidate-2",
      label: "Candidate 2",
      gene: "NDDSEC2",
      variant: "chr2:77219011 G>A",
      zygosity: "Heterozygous",
      consequence: "missense_variant",
      inheritanceSignal: "Apparent de novo with good parental coverage",
      clinicalFit:
        "NDDSEC2 has a possible autosomal dominant neurodevelopmental association. The variant is absent from population data and technically clean, but the gene-disease relationship remains limited and the variant is outside any known recurrent functional domain.",
      rawEvidence: `GENE: NDDSEC2
  Known disease association: possible autosomal dominant neurodevelopmental disorder
  Reported inheritance: autosomal dominant proposed in limited reports
  Known mechanism: uncertain
  Gene-disease validity in local summary: limited / emerging
  
  Variant:
  chr2:77219011 G>A
  Transcript: NM_460002.2
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
  LOEUF = 0.69
  pLI = 0.20
  Missense/domain note: no strong same-residue or same-domain evidence in current local summary
  
  ClinVar-style summary:
  No exact matching pathogenic record found in local summary
  Only limited reports link NDDSEC2 to broad neurodevelopmental phenotypes
  Several submitted variants in NDDSEC2 remain uncertain significance
  
  Interpretation limitation:
  Technically convincing and apparently de novo, but gene-disease validity and mechanism evidence are weak.`,
      concern:
        "This is more relevant to the referral phenotype than Candidate 1, but it is still not convincing enough because gene-disease evidence is limited.",
    },
    {
      id: "candidate-3",
      label: "Candidate 3",
      gene: "RECSEC3",
      variant: "chr9:118809331 C>T",
      zygosity: "Heterozygous",
      consequence: "splice_acceptor_variant",
      inheritanceSignal: "Inherited from unaffected mother",
      clinicalFit:
        "RECSEC3 is associated with an autosomal recessive neurodevelopmental disorder with seizures and hypotonia. The variant is a canonical splice acceptor, but only one inherited heterozygous allele is identified.",
      rawEvidence: `GENE: RECSEC3
  Known disease association: autosomal recessive neurodevelopmental disorder with seizures and hypotonia
  Reported inheritance: autosomal recessive
  Known mechanism: biallelic loss-of-function
  
  Variant:
  chr9:118809331 C>T
  Transcript: NM_460003.4
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
  No strong deep intronic candidate identified in current summary
  Deep regulatory variants not fully assessed in this evidence packet
  
  Population:
  gnomAD AF = 0.000004
  gnomAD allele count = 1
  No homozygotes observed in local summary
  
  Constraint:
  LOEUF = 0.34
  pLI = 0.76
  
  ClinVar-style summary:
  No exact matching variant record found in local summary
  Other biallelic splice and truncating variants in RECSEC3 have been submitted in affected individuals
  
  Interpretation limitation:
  This may represent a real carrier-level finding, but the current evidence does not show a second allele.`,
      concern:
        "This is technically convincing, but it is incomplete as a recessive explanation without a second relevant allele.",
    },
    {
      id: "candidate-4",
      label: "Candidate 4",
      gene: "SEIZSEC4",
      variant: "chr11:44190220 T>C",
      zygosity: "Heterozygous",
      consequence: "missense_variant",
      inheritanceSignal: "Apparent de novo, but technically fragile",
      clinicalFit:
        "SEIZSEC4 has a possible developmental epilepsy association and could partly fit the seizure phenotype, but the raw evidence has multiple artefact warning signs.",
      rawEvidence: `GENE: SEIZSEC4
  Known disease association: possible autosomal dominant developmental epilepsy
  Reported inheritance: autosomal dominant proposed in limited reports
  Known mechanism: uncertain; missense variants proposed in limited evidence
  Gene-disease validity in local summary: limited/moderate
  
  Variant:
  chr11:44190220 T>C
  Transcript: NM_460004.2
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
  Nearby missense variants in SEIZSEC4 have been submitted in epilepsy phenotypes, but evidence remains limited
  
  Interpretation limitation:
  The phenotype overlap is partial and the technical evidence is too fragile for confident prioritisation.`,
      concern:
        "This should not be prioritised from the current evidence. Apparent de novo status is undermined by technical fragility.",
    },
  ],

  decisionCheckpoints: [
    {
      id: "checkpoint-1",
      title: "Checkpoint 1 — Clinically important does not mean phenotype-explaining",
      context:
        "Candidate 1 is a technically strong stop-gained variant in CARDSEC1, a gene associated with cardiac rhythm/cardiomyopathy disease. The child was referred for developmental delay, epilepsy, hypotonia, and dysmorphic features.",
      question: "What is the safest interpretation of Candidate 1?",
      options: [
        {
          label: "A",
          text: "It should be treated as the explanation for the child’s neurodevelopmental phenotype because it is high-impact.",
          isCorrect: false,
          feedback:
            "Not quite. A high-impact variant in an unrelated disease gene should not be forced to explain the referral phenotype.",
        },
        {
          label: "B",
          text: "It may be clinically important and require escalation, but it should not be treated as the main diagnostic explanation for the neurodevelopmental referral.",
          isCorrect: true,
          feedback:
            "Correct. Candidate 1 is important, but it is a scope-boundary finding rather than the main phenotype explanation.",
        },
        {
          label: "C",
          text: "It should be ignored completely because it is unrelated to the referral question.",
          isCorrect: false,
          feedback:
            "Not quite. Out-of-scope or secondary-looking findings may still need handling according to local policy.",
        },
      ],
      teachingPoint:
        "Diagnostic relevance and possible secondary/incidental significance are different questions.",
    },
    {
      id: "checkpoint-2",
      title: "Checkpoint 2 — Respect analysis scope and consent pathway",
      context:
        "Candidate 1 may fall outside the original rare disease neurodevelopmental referral question. Whether it should be reported or followed up depends on local consent and governance policy.",
      question: "What should the bioinformatics handover do?",
      options: [
        {
          label: "A",
          text: "Make a final decision alone about whether the family should receive the result.",
          isCorrect: false,
          feedback:
            "Not quite. This kind of scope and consent issue needs the appropriate clinical laboratory and governance pathway.",
        },
        {
          label: "B",
          text: "Flag Candidate 1 as a possible secondary/incidental escalation issue and clearly state that it does not explain the referred phenotype.",
          isCorrect: true,
          feedback:
            "Correct. This keeps the finding visible without overstepping the review pathway.",
        },
        {
          label: "C",
          text: "Rename the referral phenotype as cardiac disease so the finding fits.",
          isCorrect: false,
          feedback:
            "Not quite. The phenotype should not be changed to fit a variant.",
        },
      ],
      teachingPoint:
        "Scope-boundary findings should be escalated, not quietly converted into the main diagnosis.",
    },
    {
      id: "checkpoint-3",
      title: "Checkpoint 3 — Referral-relevant candidates remain weak",
      context:
        "Candidate 2 is more relevant to the neurodevelopmental phenotype than Candidate 1, but gene-disease validity and mechanism evidence are limited.",
      question: "Why should Candidate 2 not be forced as the main diagnosis?",
      options: [
        {
          label: "A",
          text: "Because de novo variants are never relevant.",
          isCorrect: false,
          feedback:
            "Not quite. De novo variants can be relevant, but only when gene, mechanism, and phenotype evidence support them.",
        },
        {
          label: "B",
          text: "Because limited gene-disease validity and uncertain mechanism make it insufficient despite technical quality and de novo status.",
          isCorrect: true,
          feedback:
            "Correct. Candidate 2 remains uncertain and should not be over-promoted.",
        },
        {
          label: "C",
          text: "Because all missense variants are benign.",
          isCorrect: false,
          feedback:
            "Not quite. Missense variants can be important, but this one lacks enough supporting evidence.",
        },
      ],
      teachingPoint:
        "A candidate that fits the referral phenotype better still needs enough evidence to be prioritised confidently.",
    },
    {
      id: "checkpoint-4",
      title: "Checkpoint 4 — Do not lose the diagnostic conclusion",
      context:
        "Candidate 1 is important but phenotype-mismatched. Candidate 2 is uncertain. Candidate 3 is incomplete recessive evidence. Candidate 4 is technically fragile.",
      question:
        "What is the safest diagnostic conclusion for the original referral question?",
      options: [
        {
          label: "A",
          text: "The child has a confirmed neurodevelopmental diagnosis from Candidate 1.",
          isCorrect: false,
          feedback:
            "Not quite. Candidate 1 does not explain the neurodevelopmental phenotype.",
        },
        {
          label: "B",
          text: "No clean diagnostic candidate currently explains the neurodevelopmental referral phenotype, but Candidate 1 may require separate escalation.",
          isCorrect: true,
          feedback:
            "Correct. This separates the diagnostic conclusion from the secondary/incidental finding issue.",
        },
        {
          label: "C",
          text: "Candidate 4 should be used as the diagnosis because it mentions epilepsy.",
          isCorrect: false,
          feedback:
            "Not quite. Candidate 4 is technically fragile and not safe to prioritise.",
        },
      ],
      teachingPoint:
        "A case can have no diagnostic answer for the referral question but still contain a separate finding requiring action.",
    },
    {
      id: "checkpoint-5",
      title: "Checkpoint 5 — Safe service-style next step",
      context:
        "Candidate 1 is the most important finding to escalate, but it is not the main diagnosis. The other candidates do not convincingly explain the referred phenotype.",
      question: "What is the safest next step?",
      options: [
        {
          label: "A",
          text: "Document that no clean neurodevelopmental diagnostic candidate is identified, flag Candidate 1 as a possible secondary/incidental finding for appropriate escalation, and explain why the other candidates are weaker.",
          isCorrect: true,
          feedback:
            "Correct. This is the safest and most reviewable conclusion.",
        },
        {
          label: "B",
          text: "Report Candidate 1 as the child’s developmental diagnosis because it is technically strong.",
          isCorrect: false,
          feedback:
            "Not quite. Technical strength does not make it phenotype-relevant.",
        },
        {
          label: "C",
          text: "Ignore Candidate 1 and say there are no findings of any kind.",
          isCorrect: false,
          feedback:
            "Not quite. Candidate 1 may require appropriate escalation even though it is not diagnostic for the referral phenotype.",
        },
      ],
      teachingPoint:
        "Safe service practice separates primary diagnostic findings, secondary/incidental issues, and unresolved referral questions.",
    },
  ],

  finalReflection:
    "A safe trainee-level conclusion would be that Candidate 1 is the most important finding to escalate, but it should not be treated as the diagnosis for the child’s neurodevelopmental presentation. It is a technically robust apparent de novo stop-gained variant in CARDSEC1, a gene associated with cardiac rhythm/cardiomyopathy disease, and loss-of-function is a reported mechanism. However, the child’s referral phenotype is developmental delay, severe speech delay, epilepsy, hypotonia, and dysmorphic features, which are not typical CARDSEC1 features in the local summary. Candidate 2 is more relevant to the referral phenotype but remains weak because gene-disease validity and mechanism evidence are limited. Candidate 3 is a single allele in a recessive gene and incomplete as an explanation. Candidate 4 is technically fragile. The safest next step is to document that no clean diagnostic candidate currently explains the neurodevelopmental referral, flag Candidate 1 as a possible secondary/incidental finding requiring appropriate consent/governance review, and escalate through the correct clinical laboratory pathway.",
};