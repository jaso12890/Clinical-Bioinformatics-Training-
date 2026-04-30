export const case42 = {
  id: "case-42",
  slug: "new-phenotype-information-changes-priority-case",
  title: "Case 42: New phenotype information changes priority",
  level: "Advanced",
  summary:
    "A reanalysis-style case focused on recognising when updated clinical information changes which candidate is most plausible.",

  visualisationExampleId: null,

  assessmentFocus: [
    "Phenotype-led reanalysis",
    "Updated clinical information",
    "Candidate re-ranking",
    "Metabolic and mitochondrial phenotype clues",
    "Compound heterozygous reasoning",
    "Incomplete recessive evidence",
    "De novo candidate reassessment",
    "Safe documentation of changed priority",
  ],

  guidedTutorMode: {
    type: "static-rule-based",
    description:
      "Uses built-in hints, checkpoint feedback, model answers, and self-check criteria to support safe case reasoning.",
  },

  phase5Assessment: {
    candidateRanking: {
      prompt:
        "Rank the candidates from highest to lowest review priority after considering the updated phenotype.",
      correctOrder: [
        "candidate-4",
        "candidate-2",
        "candidate-1",
        "candidate-3",
      ],
      explanation:
        "Candidate 4 is the strongest because the updated phenotype now includes illness-triggered deterioration, intermittent lactic acidosis, exercise intolerance, and regression after infection, which strongly fits a recessive mitochondrial/metabolic disorder. It also has two rare variants apparently in trans with good technical support. Candidate 2 fits the updated metabolic phenotype better than before, but it remains incomplete because only one allele has been identified in a recessive gene. Candidate 1 remains technically convincing and apparent de novo, but it no longer fits the updated phenotype as well because the metabolic and regression features are not typical for that gene. Candidate 3 is weakest because it is inherited, relatively frequent, in a weakly supported gene, and does not explain the updated metabolic features.",
    },

    escalationDecision: {
      prompt: "Choose the safest next action for this updated-phenotype case.",
      options: [
        {
          id: "prioritise-candidate-4",
          label: "A",
          decision:
            "Prioritise Candidate 4 for review, document how the updated phenotype changed the ranking, and explain why the previous stronger-looking candidate is now lower priority.",
          isBest: true,
          feedback:
            "Best decision. Candidate 4 is now the best phenotype-mechanism match because the updated clinical information strongly supports a mitochondrial/metabolic disease pattern.",
        },
        {
          id: "keep-original-ranking",
          label: "B",
          decision:
            "Keep Candidate 1 as the top candidate because it was the most obvious under the original broad neurodevelopmental referral.",
          isBest: false,
          feedback:
            "Review this choice. Updated clinical information should guide updated interpretation. A technically clean de novo variant can become lower priority if the phenotype now points elsewhere.",
        },
        {
          id: "ignore-previous-candidates",
          label: "C",
          decision:
            "Ignore all previous candidates and only review genes that obviously sound mitochondrial or metabolic.",
          isBest: false,
          feedback:
            "Review this choice. The updated phenotype should guide careful re-prioritisation, not create an overly narrow or biased search.",
        },
      ],
    },

    writtenSummary: {
      prompt:
        "Write a short trainee-level summary explaining why Candidate 4 is now the strongest candidate, how the updated phenotype changed the ranking, and why the other candidates are lower priority.",
      checklist: [
        "States that Candidate 4 is now the strongest candidate for review.",
        "Explains that the updated phenotype changed the interpretation.",
        "Mentions illness-triggered deterioration.",
        "Mentions intermittent lactic acidosis.",
        "Mentions exercise intolerance and regression after infection.",
        "Explains that Candidate 4 has two rare MITPHEN4 variants apparently in trans.",
        "Links MITPHEN4 to a recessive mitochondrial/metabolic mechanism.",
        "Explains why Candidate 1 is now lower priority despite being technically clean and de novo.",
        "Explains why Candidate 2 remains incomplete as a recessive explanation.",
        "Explains why Candidate 3 is weak.",
        "Recommends review/escalation with documentation of the changed ranking.",
      ],
      modelAnswer:
        "Candidate 4 is now the strongest current candidate for review because the updated clinical information changes the case from a broad neurodevelopmental presentation to one with strong metabolic and mitochondrial features. The newly documented illness-triggered deterioration, intermittent lactic acidosis, exercise intolerance, and regression after infections fit MITPHEN4-related mitochondrial energy metabolism disease. Candidate 4 also has two rare variants apparently in trans, with a plausible recessive mechanism and good technical support. Candidate 1 remains technically convincing and apparent de novo, but it does not explain the updated metabolic/regression features well and is now lower priority. Candidate 2 is a technically convincing splice variant in a recessive neurodevelopmental-metabolic gene, but only one allele has been identified. Candidate 3 is technically real but weak because it is inherited, relatively frequent, and in a limited-evidence gene. The safest next step is to prioritise Candidate 4, document how the phenotype update changed the ranking, and escalate through the appropriate clinical laboratory review pathway.",
    },
  },

  reasoningScorecard: [
    {
      category: "Updated phenotype reasoning",
      maxScore: 2,
      expectation:
        "Recognises that new clinical information can change candidate priority even when the underlying variant calls have not changed.",
    },
    {
      category: "Candidate 4 interpretation",
      maxScore: 2,
      expectation:
        "Explains why Candidate 4 is strongest because the updated metabolic/mitochondrial phenotype, recessive inheritance, trans evidence, mechanism, rarity, and technical evidence align.",
    },
    {
      category: "Candidate 1 reassessment",
      maxScore: 2,
      expectation:
        "Explains why Candidate 1 remains possible but is now lower priority because the updated metabolic and regression features are not typical for that gene.",
    },
    {
      category: "Incomplete recessive evidence",
      maxScore: 2,
      expectation:
        "Recognises that Candidate 2 remains incomplete because no second relevant allele has been identified.",
    },
    {
      category: "Safe documentation",
      maxScore: 2,
      expectation:
        "Documents how the ranking changed and recommends review through the appropriate pathway without over-claiming.",
    },
  ],

  patient: {
    age: 8,
    sex: "Male",
  },

  referralReason:
    "An 8-year-old boy has been referred for updated rare disease genome review. The original referral described developmental delay, seizures, hypotonia, and learning difficulties, but new clinical information now includes episodic illness-triggered deterioration, intermittent lactic acidosis, exercise intolerance, and regression after infections.",

  testType:
    "Rare disease trio genome sequencing review using updated clinical phenotype, SNV/indel evidence, CNV evidence, and current gene-disease knowledge",

  familyStructure:
    "The proband and both biological parents have been tested. Both parents are reportedly unaffected.",

  history: [
    "Global developmental delay noted in early childhood",
    "Seizures beginning at age 4",
    "Hypotonia from infancy",
    "Learning difficulties requiring school support",
    "New clinical update: episodes of deterioration during viral illnesses",
    "New clinical update: intermittent lactic acidosis",
    "New clinical update: exercise intolerance and fatigue",
    "New clinical update: partial developmental regression after severe infections",
  ],

  phenotype: [
    "Global developmental delay",
    "Seizures",
    "Hypotonia",
    "Learning difficulties",
    "Illness-triggered deterioration",
    "Intermittent lactic acidosis",
    "Exercise intolerance",
    "Developmental regression",
  ],

  familyHistory:
    "Both parents are reportedly unaffected. No known family history of seizures, developmental delay, mitochondrial disease, metabolic decompensation, exercise intolerance, or a similar presentation.",

  serviceContext: [
    "This is a phenotype-update case.",
    "The key issue is that variant priority can change when the clinical picture changes.",
    "A candidate that looked strongest under the original broad neurodevelopmental referral may become less convincing once new metabolic or mitochondrial features are added.",
    "Your task is to compare how the candidates fit the original phenotype and the updated phenotype.",
    "Do not keep the old ranking just because it was the original ranking; re-rank using the new clinical information.",
  ],

  candidateFindings: [
    {
      id: "candidate-1",
      label: "Candidate 1",
      gene: "NDDPHEN1",
      variant: "chr2:77219011 G>A",
      zygosity: "Heterozygous",
      consequence: "missense_variant",
      inheritanceSignal: "Apparent de novo with good parental coverage",
      clinicalFit:
        "NDDPHEN1 has a possible autosomal dominant neurodevelopmental association. This candidate fitted the original broad developmental delay and seizure phenotype reasonably well, but it does not explain the new illness-triggered deterioration, lactic acidosis, exercise intolerance, or regression pattern.",
      rawEvidence: `GENE: NDDPHEN1
  Known disease association: possible autosomal dominant neurodevelopmental disorder
  Reported inheritance: autosomal dominant proposed in limited/moderate reports
  Known mechanism: de novo missense variants in a broad neurodevelopmental spectrum
  Gene-disease validity in local summary: moderate but broad
  
  Variant:
  chr2:77219011 G>A
  Transcript: NM_420101.2
  HGVS: c.1042G>A p.(Gly348Ser)
  Consequence: missense_variant
  Protein domain: outside the most recurrent functional region in local summary
  
  Original phenotype fit:
  Developmental delay: plausible
  Seizures: plausible
  Hypotonia: possible
  Learning difficulties: plausible
  
  Updated phenotype fit:
  Illness-triggered deterioration: not typical in local summary
  Intermittent lactic acidosis: not typical in local summary
  Exercise intolerance: not typical in local summary
  Developmental regression after infections: not typical in local summary
  
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
  LOEUF = 0.48
  pLI = 0.62
  Missense/domain note: no strong same-residue evidence in current local summary
  
  ClinVar-style summary:
  No exact matching pathogenic record found in local summary
  Some nearby missense variants in NDDPHEN1 have been submitted in broad neurodevelopmental phenotypes`,
      concern:
        "This remains technically convincing and possibly relevant to the original neurodevelopmental presentation, but the updated metabolic/mitochondrial features weaken it as the best overall explanation.",
    },
    {
      id: "candidate-2",
      label: "Candidate 2",
      gene: "RECPHEN2",
      variant: "chr9:118809331 C>T",
      zygosity: "Heterozygous",
      consequence: "splice_acceptor_variant",
      inheritanceSignal: "Inherited from unaffected father",
      clinicalFit:
        "RECPHEN2 is associated with an autosomal recessive neurodevelopmental-metabolic disorder. The variant is a canonical splice acceptor, but only one inherited heterozygous allele is identified.",
      rawEvidence: `GENE: RECPHEN2
  Known disease association: autosomal recessive neurodevelopmental-metabolic disorder
  Reported inheritance: autosomal recessive
  Known mechanism: biallelic loss-of-function
  
  Variant:
  chr9:118809331 C>T
  Transcript: NM_420102.4
  HGVS: c.744-2C>T
  Consequence: splice_acceptor_variant
  Splice position: canonical -2 acceptor site
  Predicted effect: likely acceptor splice-site disruption
  
  Original phenotype fit:
  Developmental delay: plausible
  Seizures: plausible
  Hypotonia: plausible
  
  Updated phenotype fit:
  Illness-triggered deterioration: possible
  Intermittent lactic acidosis: possible
  Exercise intolerance: possible
  Developmental regression: possible
  
  VCF-style fields:
  QUAL=790
  FILTER=PASS
  INFO: DP=48;MQ=60;QD=16.5;SOR=0.74
  FORMAT: GT:AD:DP:GQ
  
  Proband: 0/1:24,24:48:99
  Mother: 0/0:41,0:41:99
  Father: 0/1:22,21:43:99
  
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
  LOEUF = 0.33
  pLI = 0.78
  
  ClinVar-style summary:
  No exact matching variant record found in local summary
  Other biallelic splice and truncating variants in RECPHEN2 have been submitted in affected individuals`,
      concern:
        "This fits the updated phenotype better than before, but it remains incomplete as a recessive explanation because no second allele has been identified.",
    },
    {
      id: "candidate-3",
      label: "Candidate 3",
      gene: "BROADPHEN3",
      variant: "chr11:44022991 A>G",
      zygosity: "Heterozygous",
      consequence: "missense_variant",
      inheritanceSignal: "Inherited from unaffected mother",
      clinicalFit:
        "BROADPHEN3 has a broad neurodevelopmental association in limited reports. The variant is inherited from an unaffected mother and is relatively frequent for a severe rare disease model.",
      rawEvidence: `GENE: BROADPHEN3
  Known disease association: broad neurodevelopmental association in limited reports
  Reported inheritance: autosomal dominant proposed
  Known mechanism: uncertain
  Gene-disease validity in local summary: limited
  
  Variant:
  chr11:44022991 A>G
  Transcript: NM_420103.1
  HGVS: c.701A>G p.(Tyr234Cys)
  Consequence: missense_variant
  Protein domain: outside known recurrent functional region in local summary
  
  Original phenotype fit:
  Developmental delay: broad possible overlap
  Seizures: broad possible overlap
  Hypotonia: nonspecific
  
  Updated phenotype fit:
  Illness-triggered deterioration: not explained
  Intermittent lactic acidosis: not explained
  Exercise intolerance: not explained
  Regression after infection: not explained
  
  VCF-style fields:
  QUAL=620
  FILTER=PASS
  INFO: DP=45;MQ=60;QD=13.8;SOR=0.86
  FORMAT: GT:AD:DP:GQ
  
  Proband: 0/1:22,23:45:99
  Mother: 0/1:21,22:43:99
  Father: 0/0:39,0:39:99
  
  Read-level notes:
  ALT reads seen on both forward and reverse strands in proband and mother
  ALT reads distributed across read positions
  No local mapping warning
  No soft-clipping concern
  
  Population:
  gnomAD AF = 0.0015
  gnomAD allele count = 410
  Homozygotes observed in population summary = 1
  
  Constraint:
  LOEUF = 0.84
  pLI = 0.06
  
  ClinVar-style summary:
  No exact matching pathogenic record found in local summary
  Gene-disease relationship remains limited and broad
  Several submitted variants in this gene are VUS or likely benign`,
      concern:
        "This is technically real but weak. The updated phenotype makes it even less convincing because it does not explain the metabolic or regression features.",
    },
    {
      id: "candidate-4",
      label: "Candidate 4",
      gene: "MITPHEN4",
      variant: "Two variants in MITPHEN4",
      zygosity: "Compound heterozygous candidate",
      consequence: "frameshift_variant + missense_variant",
      inheritanceSignal:
        "One variant inherited from each parent; variants appear in trans",
      clinicalFit:
        "MITPHEN4 is associated with an autosomal recessive mitochondrial energy metabolism disorder. Reported features include developmental delay, seizures, hypotonia, exercise intolerance, lactic acidosis, illness-triggered deterioration, and developmental regression.",
      rawEvidence: `GENE: MITPHEN4
  Known disease association: autosomal recessive mitochondrial energy metabolism disorder
  Reported inheritance: autosomal recessive
  Known mechanism: biallelic loss-of-function or damaging missense variants affecting mitochondrial enzyme function
  Gene-disease validity in local summary: established/moderate
  
  Original referral context:
  The first referral mainly emphasised developmental delay, seizures, hypotonia, and learning difficulties.
  Under that limited phenotype, MITPHEN4 was considered possible but not the top candidate because the metabolic features were not yet documented.
  
  Updated phenotype context:
  New information now includes illness-triggered deterioration, intermittent lactic acidosis, exercise intolerance, and regression after infections.
  These features strongly increase the fit for MITPHEN4-related disease.
  
  Variant A:
  chr16:77290144 G>A
  Transcript: NM_420104.4
  HGVS: c.744del p.(Gly249Valfs*10)
  Consequence: frameshift_variant
  Predicted effect: premature termination codon
  Predicted NMD: likely
  
  VCF-style fields for Variant A:
  QUAL=824
  FILTER=PASS
  INFO: DP=50;MQ=60;QD=16.5;SOR=0.74
  FORMAT: GT:AD:DP:GQ
  
  Proband: 0/1:25,25:50:99
  Mother: 0/1:23,22:45:99
  Father: 0/0:43,0:43:99
  
  Variant B:
  chr16:77310411 C>T
  Transcript: NM_420104.4
  HGVS: c.1211C>T p.(Pro404Leu)
  Consequence: missense_variant
  Protein domain: conserved mitochondrial enzyme catalytic domain
  Mechanism note: variant affects a residue near reported damaging missense variants in affected individuals
  
  VCF-style fields for Variant B:
  QUAL=760
  FILTER=PASS
  INFO: DP=48;MQ=60;QD=15.8;SOR=0.78
  FORMAT: GT:AD:DP:GQ
  
  Proband: 0/1:24,24:48:99
  Mother: 0/0:42,0:42:99
  Father: 0/1:22,21:43:99
  
  Read-level notes:
  Both variants have balanced allele support in the proband
  Both variants seen on forward and reverse strands
  No local mapping warning at either site
  No concerning soft-clipping around either variant
  Second caller: detected for both variants
  
  Phase / inheritance note:
  Variant A appears maternally inherited
  Variant B appears paternally inherited
  Trio data are consistent with the two variants being in trans
  
  Population:
  Variant A gnomAD AF = 0.000003; allele count = 1
  Variant B gnomAD AF = 0.000006; allele count = 2
  No homozygotes observed for either variant in local summary
  
  Constraint:
  LOEUF = 0.28
  pLI = 0.84
  
  ClinVar-style / disease summary:
  No exact matching variant pair found in local summary
  Other biallelic truncating and damaging missense variants in MITPHEN4 have been submitted as pathogenic/likely pathogenic in affected individuals
  Reported disease features include developmental delay, seizures, hypotonia, exercise intolerance, lactic acidosis, illness-triggered deterioration, and regression
  
  Biochemistry / phenotype update:
  Intermittent lactate elevation documented during illness episodes
  Exercise intolerance noted by metabolic team
  Regression after infection now documented in updated referral information`,
      concern:
        "This is now the strongest candidate because the updated phenotype gives strong support to a recessive mitochondrial/metabolic disorder, and the two rare variants appear to be in trans with a plausible disease mechanism.",
    },
  ],

  decisionCheckpoints: [
    {
      id: "checkpoint-1",
      title: "Checkpoint 1 — Updated phenotype can change the ranking",
      context:
        "The original referral was broad and neurodevelopmental. The updated referral now includes illness-triggered deterioration, intermittent lactic acidosis, exercise intolerance, and regression after infection.",
      question:
        "What is the safest analysis response to the new clinical information?",
      options: [
        {
          label: "A",
          text: "Keep the original candidate ranking unchanged because genomic data have not changed.",
          isCorrect: false,
          feedback:
            "Not quite. The variants may be the same, but the phenotype context has changed, and that can change candidate priority.",
        },
        {
          label: "B",
          text: "Reassess candidate priority using the updated phenotype, especially features that suggest a metabolic or mitochondrial mechanism.",
          isCorrect: true,
          feedback:
            "Correct. Updated clinical information can substantially change interpretation.",
        },
        {
          label: "C",
          text: "Ignore the new metabolic features because only the original referral wording matters.",
          isCorrect: false,
          feedback:
            "Not quite. Current clinical information should guide current interpretation.",
        },
      ],
      teachingPoint:
        "Phenotype is not static. Updated clinical features can change which variant best explains the patient.",
    },
    {
      id: "checkpoint-2",
      title: "Checkpoint 2 — Candidate 1 was plausible before, but weaker now",
      context:
        "Candidate 1 is technically clean and apparent de novo in a broad neurodevelopmental gene. It fitted the original developmental delay and seizure phenotype better than it fits the updated metabolic/regression picture.",
      question: "What is the safest interpretation of Candidate 1 now?",
      options: [
        {
          label: "A",
          text: "It remains possible but is no longer the best overall fit because the new metabolic features are not typical for this gene.",
          isCorrect: true,
          feedback:
            "Correct. Candidate 1 is not technically weak, but the updated phenotype reduces its priority.",
        },
        {
          label: "B",
          text: "It should be reported immediately because de novo status always overrides phenotype mismatch.",
          isCorrect: false,
          feedback:
            "Not quite. De novo status is important, but it does not override a better phenotype-mechanism fit elsewhere.",
        },
        {
          label: "C",
          text: "It must be false because the phenotype changed.",
          isCorrect: false,
          feedback:
            "Not quite. The variant may be real and potentially relevant, but it is less convincing as the main explanation.",
        },
      ],
      teachingPoint:
        "A candidate can be technically strong but become lower priority when new phenotype information points to a different mechanism.",
    },
    {
      id: "checkpoint-3",
      title: "Checkpoint 3 — Incomplete recessive evidence remains incomplete",
      context:
        "Candidate 2 is a strong single splice variant in a recessive neurodevelopmental-metabolic gene, but no second allele is identified.",
      question: "Why is Candidate 2 not the strongest candidate?",
      options: [
        {
          label: "A",
          text: "Because one heterozygous variant does not currently provide a complete biallelic explanation for a recessive condition.",
          isCorrect: true,
          feedback:
            "Correct. Candidate 2 may be relevant at carrier level, but it does not explain the case alone.",
        },
        {
          label: "B",
          text: "Because splice acceptor variants can never be clinically relevant.",
          isCorrect: false,
          feedback:
            "Not quite. Splice acceptor variants can be very important when the inheritance model fits.",
        },
        {
          label: "C",
          text: "Because inherited variants are always artefacts.",
          isCorrect: false,
          feedback:
            "Not quite. Candidate 2 appears technically real. The issue is incomplete recessive evidence.",
        },
      ],
      teachingPoint:
        "A better phenotype fit does not remove the need for a complete inheritance model.",
    },
    {
      id: "checkpoint-4",
      title: "Checkpoint 4 — Candidate 4 now best fits the updated clinical picture",
      context:
        "Candidate 4 has two rare variants in MITPHEN4, one inherited from each parent. The updated phenotype includes lactic acidosis, exercise intolerance, illness-triggered deterioration, and regression.",
      question: "Why is Candidate 4 now the strongest candidate?",
      options: [
        {
          label: "A",
          text: "Because the updated phenotype, recessive inheritance, trans variant evidence, mitochondrial mechanism, rarity, and technical confidence all align.",
          isCorrect: true,
          feedback:
            "Correct. Candidate 4 becomes strongest once the updated metabolic/mitochondrial features are considered.",
        },
        {
          label: "B",
          text: "Because any two variants in the same gene are automatically diagnostic.",
          isCorrect: false,
          feedback:
            "Not quite. The strength comes from phase, consequence, mechanism, phenotype fit, rarity, and technical evidence.",
        },
        {
          label: "C",
          text: "Because mitochondrial genes should always outrank neurodevelopmental genes.",
          isCorrect: false,
          feedback:
            "Not quite. Candidate 4 is strongest because it fits this specific updated case, not because of a broad rule.",
        },
      ],
      teachingPoint:
        "When new phenotype information points to a specific disease mechanism, candidates matching that mechanism may move up in priority.",
    },
    {
      id: "checkpoint-5",
      title: "Checkpoint 5 — Safe service-style next step",
      context:
        "Candidate 4 is now the strongest current candidate. Candidate 1 remains technically clean but less phenotype-matched. Candidate 2 is incomplete recessive evidence. Candidate 3 is weak.",
      question: "What is the safest next step?",
      options: [
        {
          label: "A",
          text: "Prioritise Candidate 4 for review, document how the updated phenotype changed the ranking, and explain why the previous stronger-looking candidate is now lower priority.",
          isCorrect: true,
          feedback:
            "Correct. This gives a reviewable explanation of why the ranking changed.",
        },
        {
          label: "B",
          text: "Keep Candidate 1 as top priority because it was the most obvious under the original referral.",
          isCorrect: false,
          feedback:
            "Not quite. The updated phenotype should guide the updated analysis.",
        },
        {
          label: "C",
          text: "Ignore all previous candidates and only analyse genes with the word mitochondrial in the name.",
          isCorrect: false,
          feedback:
            "Not quite. Updated phenotype should guide re-prioritisation, not create a narrow or biased search.",
        },
      ],
      teachingPoint:
        "Safe updated-phenotype reasoning explains why the conclusion changed rather than pretending the ranking was always obvious.",
    },
  ],

  finalReflection:
    "A safe trainee-level conclusion would be that Candidate 4 is now the strongest current candidate for review because the updated clinical information changes the case from a broad neurodevelopmental presentation to one with strong metabolic/mitochondrial features, including illness-triggered deterioration, intermittent lactic acidosis, exercise intolerance, and regression after infection. Candidate 4 has two rare MITPHEN4 variants apparently in trans, with a plausible recessive mitochondrial energy metabolism mechanism and strong technical support. Candidate 1 remains technically convincing and apparent de novo, but it does not explain the updated metabolic features well and is now lower priority. Candidate 2 is a technically convincing single splice variant in a recessive gene but incomplete without a second allele. Candidate 3 is technically real but weak because of inheritance, population frequency, and limited gene-disease support. The safest next step is to prioritise Candidate 4, document how the new phenotype information changed the ranking, and escalate through the appropriate clinical laboratory review pathway.",
};