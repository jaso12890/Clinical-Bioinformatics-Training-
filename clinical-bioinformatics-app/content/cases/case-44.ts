export const case44 = {
  id: "case-44",
  slug: "negative-case-with-limitations",
  title: "Case 44: Negative case with limitations",
  level: "Advanced",
  summary:
    "A service-readiness case focused on writing a safe no-candidate-identified reasoning summary without forcing a weak finding into a diagnosis.",

  visualisationExampleId: null,

  assessmentFocus: [
    "Negative case reasoning",
    "No-candidate-identified summary",
    "Avoiding forced diagnoses",
    "Technical and analytical limitations",
    "Coverage limitation documentation",
    "Incomplete recessive evidence",
    "Weak gene-disease validity",
    "Technically fragile variants",
    "Safe service-ready communication",
  ],

  guidedTutorMode: {
    type: "static-rule-based",
    description:
      "Uses built-in hints, checkpoint feedback, model answers, and self-check criteria to support safe negative-case reasoning.",
  },

  phase5Assessment: {
    candidateRanking: {
      prompt:
        "Decide whether any finding should be prioritised as a convincing main candidate.",
      correctOrder: [
        "no-clean-candidate",
        "candidate-4-limitation",
        "candidate-2",
        "candidate-1",
        "candidate-3",
      ],
      explanation:
        "There is no clean convincing candidate from the current evidence. Candidate 4 is not a positive finding but is an important limitation because a phenotype-compatible gene has poor coverage in a clinically relevant exon. Candidate 2 is a technically convincing single allele in a recessive gene, but it is incomplete without a second allele. Candidate 1 is technically convincing and apparent de novo, but weak gene-disease validity and uncertain mechanism mean it should not be forced as the answer. Candidate 3 is phenotypically possible but technically fragile and should not be prioritised without stronger read-level support.",
    },

    escalationDecision: {
      prompt:
        "Choose the safest service-style conclusion for this negative case.",
      options: [
        {
          id: "no-clean-candidate-with-limitations",
          label: "A",
          decision:
            "State that no clean candidate has been identified, document why each reviewed finding is insufficient, and clearly describe the relevant coverage limitation.",
          isBest: true,
          feedback:
            "Best decision. This avoids forcing a weak candidate while also avoiding false reassurance by documenting the coverage limitation.",
        },
        {
          id: "force-de-novo-candidate",
          label: "B",
          decision:
            "Promote Candidate 1 as the answer because it is rare, technically convincing, and apparent de novo.",
          isBest: false,
          feedback:
            "Review this choice. Candidate 1 is interesting, but weak gene-disease validity and uncertain mechanism mean it should not be forced as a diagnosis.",
        },
        {
          id: "fully-exclude-genetic-cause",
          label: "C",
          decision:
            "State that genome analysis excludes all possible genetic causes because no reportable candidate was found.",
          isBest: false,
          feedback:
            "Review this choice. That would overstate the result and ignore the stated coverage and analytical limitations.",
        },
      ],
    },

    writtenSummary: {
      prompt:
        "Write a safe no-candidate-identified summary that explains the reviewed findings, why none is convincing, and what limitations remain.",
      checklist: [
        "States that no clean convincing candidate has been identified from the current evidence.",
        "Does not force Candidate 1 as diagnostic just because it is apparent de novo.",
        "Explains that Candidate 1 is limited by weak gene-disease validity and uncertain mechanism.",
        "Explains that Candidate 2 is a single allele in a recessive gene and is incomplete without a second allele.",
        "Explains that Candidate 3 is technically fragile and should not be prioritised without stronger read-level support.",
        "Explains that Candidate 4 is not a positive finding.",
        "Documents the poor coverage of exon 8 in COVNEG4 as a meaningful limitation.",
        "Avoids saying that all genetic causes are excluded.",
        "Uses proportionate service wording.",
        "Recommends appropriate review/escalation rather than forced diagnosis.",
      ],
      modelAnswer:
        "No clean convincing candidate is identified from the current evidence. Candidate 1 is technically convincing, rare, and apparent de novo, but NEGGENE1 has limited gene-disease validity and an uncertain mechanism, so this should not be forced as the diagnosis. Candidate 2 is a technically convincing canonical splice acceptor variant in a recessive gene, but only one inherited heterozygous allele has been identified, so it is incomplete as an explanation. Candidate 3 is phenotypically possible but technically fragile because of low ALT support, strand/read-position concerns, soft-clipping, nearby mismatches, and lack of second-caller support. Candidate 4 is not a positive finding, but it is an important limitation because exon 8 of the phenotype-compatible gene COVNEG4 is poorly covered, reducing sensitivity in that region. The safest conclusion is that no convincing candidate has been identified, with the reviewed findings and coverage limitation documented clearly for appropriate clinical laboratory review.",
    },
  },

  reasoningScorecard: [
    {
      category: "Negative-case judgement",
      maxScore: 2,
      expectation:
        "Recognises that no reviewed finding is strong enough to prioritise as a convincing main candidate.",
    },
    {
      category: "Avoiding forced diagnosis",
      maxScore: 2,
      expectation:
        "Does not over-promote the rare apparent de novo finding, the single recessive allele, or the technically fragile variant.",
    },
    {
      category: "Limitation documentation",
      maxScore: 2,
      expectation:
        "Clearly explains that Candidate 4 is a coverage limitation, not a positive variant finding.",
    },
    {
      category: "Balanced communication",
      maxScore: 2,
      expectation:
        "Avoids both overstatement and false reassurance by describing what was reviewed and what remains limited.",
    },
    {
      category: "Service-ready next step",
      maxScore: 2,
      expectation:
        "Recommends documentation and appropriate review/escalation rather than forcing a diagnosis.",
    },
  ],

  patient: {
    age: 6,
    sex: "Male",
  },

  referralReason:
    "A 6-year-old boy has been referred for rare disease genome analysis because of developmental delay, severe speech delay, epilepsy, hypotonia, feeding difficulties, and mild dysmorphic features. The current review has not identified a clearly convincing candidate.",

  testType:
    "Rare disease trio genome sequencing with SNV/indel, CNV, inheritance, phenotype, and technical confidence review",

  familyStructure:
    "The proband and both biological parents have been tested. Both parents are reportedly unaffected.",

  history: [
    "Global developmental delay noted in infancy",
    "Severe expressive speech delay",
    "Epilepsy beginning at age 3",
    "Hypotonia from early childhood",
    "Feeding difficulties in early childhood",
    "Mild dysmorphic features noted by clinical genetics",
    "No known previous molecular diagnosis",
    "No single candidate currently explains the phenotype safely",
  ],

  phenotype: [
    "Global developmental delay",
    "Severe speech delay",
    "Epilepsy",
    "Hypotonia",
    "Feeding difficulties",
    "Mild dysmorphic features",
  ],

  familyHistory:
    "Both parents are reportedly unaffected. No known family history of developmental delay, epilepsy, hypotonia, feeding difficulties, dysmorphic features, or a similar neurodevelopmental presentation.",

  serviceContext: [
    "This is a negative case with limitations.",
    "The key issue is recognising when no candidate is strong enough to prioritise confidently.",
    "A safe no-candidate summary should explain what was reviewed, why the available findings are not convincing, and what limitations remain.",
    "Do not force a weak de novo, inherited, technically fragile, or incomplete recessive finding into a diagnosis just to produce an answer.",
    "Your task is to write a safe, reviewable conclusion that avoids both overstatement and false reassurance.",
  ],

  candidateFindings: [
    {
      id: "candidate-1",
      label: "Candidate 1",
      gene: "NEGGENE1",
      variant: "chr2:77219011 G>A",
      zygosity: "Heterozygous",
      consequence: "missense_variant",
      inheritanceSignal: "Apparent de novo with good parental coverage",
      clinicalFit:
        "NEGGENE1 has a possible neurodevelopmental association, but the gene-disease relationship is limited, the mechanism is uncertain, and the variant is outside any known recurrent functional region.",
      rawEvidence: `GENE: NEGGENE1
  Known disease association: possible autosomal dominant neurodevelopmental disorder
  Reported inheritance: autosomal dominant proposed in limited reports
  Known mechanism: uncertain
  Gene-disease validity in local summary: limited / emerging
  
  Variant:
  chr2:77219011 G>A
  Transcript: NM_440001.2
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
  LOEUF = 0.67
  pLI = 0.22
  Missense/domain note: no strong same-residue or same-domain evidence in current local summary
  
  ClinVar-style summary:
  No exact matching pathogenic record found in local summary
  Only limited reports link NEGGENE1 to broad neurodevelopmental phenotypes
  Several submitted variants in NEGGENE1 remain uncertain significance
  
  Interpretation limitation:
  The variant is technically convincing and de novo, but gene-disease validity and mechanism evidence are not strong enough to treat this as a convincing explanation.`,
      concern:
        "This should not be forced as the answer. De novo status and rarity are important, but the gene-disease evidence and mechanism support are too weak for confident prioritisation.",
    },
    {
      id: "candidate-2",
      label: "Candidate 2",
      gene: "RECNEG2",
      variant: "chr9:118809331 C>T",
      zygosity: "Heterozygous",
      consequence: "splice_acceptor_variant",
      inheritanceSignal: "Inherited from unaffected mother",
      clinicalFit:
        "RECNEG2 is associated with an autosomal recessive neurodevelopmental disorder with seizures and hypotonia. The variant is a canonical splice acceptor, but only one inherited heterozygous allele is identified.",
      rawEvidence: `GENE: RECNEG2
  Known disease association: autosomal recessive neurodevelopmental disorder with seizures and hypotonia
  Reported inheritance: autosomal recessive
  Known mechanism: biallelic loss-of-function
  
  Variant:
  chr9:118809331 C>T
  Transcript: NM_440002.4
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
  Other biallelic splice and truncating variants in RECNEG2 have been submitted in affected individuals
  
  Interpretation limitation:
  This may represent a real carrier-level finding, but the current evidence does not show a second allele.`,
      concern:
        "This is technically convincing, but it is incomplete as a recessive explanation. It should be documented as reviewed, not promoted as diagnostic.",
    },
    {
      id: "candidate-3",
      label: "Candidate 3",
      gene: "SEIZNEG3",
      variant: "chr11:44190220 T>C",
      zygosity: "Heterozygous",
      consequence: "missense_variant",
      inheritanceSignal: "Apparent de novo, but technically fragile",
      clinicalFit:
        "SEIZNEG3 has a possible developmental epilepsy association and could partly fit the seizure phenotype, but the raw evidence has multiple artefact warning signs and the gene-disease relationship is limited.",
      rawEvidence: `GENE: SEIZNEG3
  Known disease association: possible autosomal dominant developmental epilepsy
  Reported inheritance: autosomal dominant proposed in limited reports
  Known mechanism: uncertain; missense variants proposed in limited evidence
  Gene-disease validity in local summary: limited/moderate
  
  Variant:
  chr11:44190220 T>C
  Transcript: NM_440003.2
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
  Nearby missense variants in SEIZNEG3 have been submitted in epilepsy phenotypes, but evidence remains limited
  
  Interpretation limitation:
  The phenotype overlap is partial and the technical evidence is not strong enough to treat this as a reliable candidate.`,
      concern:
        "This should not be prioritised from the current evidence. Apparent de novo status is weakened by poor allele balance, read-position bias, strand concerns, soft-clipping, and lack of second-caller support.",
    },
    {
      id: "candidate-4",
      label: "Candidate 4",
      gene: "COVNEG4",
      variant: "No confident variant identified across poorly covered exon 8",
      zygosity: "Not assessable in one key region",
      consequence: "coverage_limitation",
      inheritanceSignal: "Cannot be assessed for the poorly covered region",
      clinicalFit:
        "COVNEG4 is a phenotype-compatible neurodevelopmental gene, but one clinically relevant exon has poor coverage in the current dataset. No confident variant has been identified, but the region is not fully excluded.",
      rawEvidence: `GENE: COVNEG4
  Known disease association: autosomal dominant neurodevelopmental disorder
  Reported inheritance: autosomal dominant
  Known mechanism: loss-of-function and some damaging missense variants reported
  Gene-disease validity in local summary: established/moderate
  
  Reason this gene was reviewed:
  Phenotype overlap includes developmental delay, severe speech delay, seizures, hypotonia, feeding difficulties, and dysmorphic features.
  
  Variant result:
  No confident SNV/indel identified in COVNEG4 in the current callset
  No exon-level deletion/duplication detected by CNV caller
  
  Coverage limitation:
  Transcript: NM_440004.5
  Clinically relevant exon: exon 8 of 14
  Exon 8 coding length: 142 bp
  Mean depth across most COVNEG4 coding exons: 38–62x
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
  No exon-level deletion/duplication detected across COVNEG4
  Normalised depth across most exons: ~0.96–1.04
  Exon 8 depth is noisy and not reliable enough to exclude all events confidently
  No second CNV caller support for a deletion
  
  Population / database context:
  No specific variant identified, so population evidence cannot be applied
  Known pathogenic variants in COVNEG4 include coding variants in multiple exons, including exon 8 in local summary
  
  Interpretation limitation:
  This is not a candidate variant.
  It is a limitation: a phenotype-compatible gene has one region where sensitivity is reduced.
  This should be documented if no clear candidate is identified.`,
      concern:
        "This is not a positive finding. It is an important limitation because a phenotype-compatible gene is not fully excluded by the current data.",
    },
  ],

  decisionCheckpoints: [
    {
      id: "checkpoint-1",
      title: "Checkpoint 1 — Do not force a weak de novo candidate",
      context:
        "Candidate 1 is technically clean, apparent de novo, and absent from population data, but the gene-disease validity is limited and the mechanism is uncertain.",
      question: "What is the safest interpretation of Candidate 1?",
      options: [
        {
          label: "A",
          text: "It should be treated as diagnostic because any de novo rare variant is enough.",
          isCorrect: false,
          feedback:
            "Not quite. De novo status is important, but weak gene-disease validity limits how confidently the finding can be used.",
        },
        {
          label: "B",
          text: "It may be noted, but it should not be forced as the answer because gene-disease and mechanism evidence are weak.",
          isCorrect: true,
          feedback:
            "Correct. Candidate 1 is not technically weak, but the interpretation evidence is insufficient.",
        },
        {
          label: "C",
          text: "It is definitely benign because emerging genes can never be relevant.",
          isCorrect: false,
          feedback:
            "Not quite. Emerging genes can become relevant, but current evidence should limit interpretation confidence.",
        },
      ],
      teachingPoint:
        "A negative case can include interesting variants that are not strong enough to explain the presentation.",
    },
    {
      id: "checkpoint-2",
      title: "Checkpoint 2 — Single recessive allele is not a diagnosis",
      context:
        "Candidate 2 is a canonical splice acceptor variant in a recessive gene, but no second allele has been identified.",
      question: "What is the safest interpretation of Candidate 2?",
      options: [
        {
          label: "A",
          text: "It is diagnostic because canonical splice variants are always sufficient.",
          isCorrect: false,
          feedback:
            "Not quite. In a recessive condition, a second relevant allele is usually needed.",
        },
        {
          label: "B",
          text: "It may represent a real carrier-level finding, but it does not currently explain the case alone.",
          isCorrect: true,
          feedback:
            "Correct. Candidate 2 is technically real but incomplete as a recessive diagnosis.",
        },
        {
          label: "C",
          text: "It proves the case is solved because the gene fits the phenotype.",
          isCorrect: false,
          feedback:
            "Not quite. Phenotype fit does not complete the inheritance model.",
        },
      ],
      teachingPoint:
        "A strong-looking variant still needs the right inheritance model.",
    },
    {
      id: "checkpoint-3",
      title: "Checkpoint 3 — Technical fragility matters",
      context:
        "Candidate 3 appears de novo in a possible seizure gene, but has low ALT support, strand/read-position concerns, soft-clipping, nearby mismatches, and no second-caller support.",
      question: "How should Candidate 3 be handled?",
      options: [
        {
          label: "A",
          text: "Prioritise it because any de novo epilepsy-gene variant is strong.",
          isCorrect: false,
          feedback:
            "Not quite. Technical fragility prevents confident prioritisation.",
        },
        {
          label: "B",
          text: "Treat it cautiously and avoid using it as the main explanation without stronger read-level support.",
          isCorrect: true,
          feedback:
            "Correct. Candidate 3 should not be forced into the conclusion.",
        },
        {
          label: "C",
          text: "Report it because absence from gnomAD proves it is real.",
          isCorrect: false,
          feedback:
            "Not quite. Population absence does not prove technical reliability.",
        },
      ],
      teachingPoint:
        "A no-candidate conclusion may be safer than prioritising a technically weak finding.",
    },
    {
      id: "checkpoint-4",
      title: "Checkpoint 4 — Limitations are part of the conclusion",
      context:
        "Candidate 4 is not a variant. It is a coverage limitation in a phenotype-compatible gene, where exon 8 has poor sensitivity in the current dataset.",
      question: "How should this limitation be handled?",
      options: [
        {
          label: "A",
          text: "Ignore it because no variant was called.",
          isCorrect: false,
          feedback:
            "Not quite. Poor coverage in a relevant gene affects how confidently the analysis can exclude that region.",
        },
        {
          label: "B",
          text: "Document it as a limitation, making clear that no confident variant was identified but the region is not fully excluded.",
          isCorrect: true,
          feedback:
            "Correct. This is the safest way to describe a coverage limitation.",
        },
        {
          label: "C",
          text: "Treat the poorly covered exon as diagnostic by itself.",
          isCorrect: false,
          feedback:
            "Not quite. A limitation is not a positive finding.",
        },
      ],
      teachingPoint:
        "A negative result should include meaningful technical limitations when they affect the referral question.",
    },
    {
      id: "checkpoint-5",
      title: "Checkpoint 5 — Safe no-candidate summary",
      context:
        "None of the current findings is strong enough to prioritise confidently. There is also a coverage limitation in a phenotype-compatible gene.",
      question: "What is the safest final conclusion?",
      options: [
        {
          label: "A",
          text: "No clean candidate is identified from the current evidence; document why each reviewed finding is insufficient and state the relevant coverage limitation.",
          isCorrect: true,
          feedback:
            "Correct. This is a safe and reviewable negative-case conclusion.",
        },
        {
          label: "B",
          text: "Choose Candidate 1 as diagnostic because a negative case feels unsatisfactory.",
          isCorrect: false,
          feedback:
            "Not quite. A weak candidate should not be promoted just to avoid a negative result.",
        },
        {
          label: "C",
          text: "Say the genome result excludes all genetic causes completely.",
          isCorrect: false,
          feedback:
            "Not quite. That would overstate the result and ignore technical and analytical limitations.",
        },
      ],
      teachingPoint:
        "Safe negative reporting preparation avoids both forced diagnoses and false reassurance.",
    },
  ],

  finalReflection:
    "A safe trainee-level conclusion would be that no clean candidate is identified from the current evidence. Candidate 1 is technically convincing and apparent de novo, but gene-disease validity and mechanism evidence are too weak to treat it as a convincing explanation. Candidate 2 is a technically convincing canonical splice acceptor variant in a recessive gene, but it is incomplete without a second relevant allele. Candidate 3 is phenotypically possible but technically fragile and should not be prioritised without stronger read-level support. Candidate 4 is not a positive finding, but it is an important limitation because a phenotype-compatible gene has a poorly covered exon where sensitivity is reduced. The safest next step is to document that no convincing candidate has been identified, explain the limitations of each reviewed finding, state the coverage limitation clearly, and escalate through the appropriate review pathway rather than forcing a diagnosis.",
};