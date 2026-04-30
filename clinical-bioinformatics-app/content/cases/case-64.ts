export const case64 = {
    id: "case-64",
    slug: "hla-complex-region-limitation-case",
    title: "Case 64: HLA / complex-region limitation",
    level: "Advanced",
    summary:
      "A guided case focused on a candidate in a complex genomic region where mapping, paralogy, structural variation, and interpretation uncertainty limit confidence.",
  
    visualisationExampleId: null,
  
    assessmentFocus: [
      "Complex-region limitation",
      "HLA-style mapping difficulty",
      "Low mapping confidence",
      "Paralogy and structural variation",
      "Technical confirmation",
      "Safe escalation and communication",
    ],
  
    guidedTutorMode: {
      type: "static-rule-based",
      description:
        "Uses built-in hints, checkpoint feedback, model answers, and self-check criteria to support safe case reasoning.",
    },
  
    phase5Assessment: {
      candidateRanking: {
        prompt:
          "Rank the findings from strongest to weakest based on phenotype fit, technical confidence, complex-region reliability, and whether each finding should drive the final handover.",
        correctOrder: [
          "candidate-3",
          "candidate-5",
          "candidate-2",
          "candidate-4",
          "candidate-1",
        ],
        explanation:
          "Candidate 3 is the most clinically relevant finding because the gene and phenotype fit are strong, but it sits in a complex HLA-like region where mapping and variant representation are uncertain. Candidate 5 is central because it explains why the candidate cannot be treated as a straightforward high-confidence call. Candidate 2 is plausible but weaker because the gene and variant evidence are less complete. Candidate 4 is likely a real CNV but has weak dosage and phenotype support. Candidate 1 is technically real but broad, inherited, relatively frequent, and poorly specific.",
      },
  
      escalationDecision: {
        prompt:
          "Choose the safest next action for the complex-region candidate.",
        options: [
          {
            id: "report-as-diagnostic",
            label: "A",
            decision:
              "Report Candidate 3 as diagnostic because the phenotype match is strong and the variant appears rare.",
            isBest: false,
            feedback:
              "Review this choice. Phenotype fit and rarity are not enough when the region has mapping, paralogy, and representation concerns.",
          },
          {
            id: "ignore-region-candidate",
            label: "B",
            decision:
              "Ignore Candidate 3 completely because variants in complex regions can never be used clinically.",
            isBest: false,
            feedback:
              "Review this choice. Complex-region findings can be important, but they need appropriate technical review and confirmation.",
          },
          {
            id: "escalate-complex-review",
            label: "C",
            decision:
              "Escalate Candidate 3 for specialist complex-region review and confirmation before using it diagnostically.",
            isBest: true,
            feedback:
              "Best decision. The candidate is relevant, but the complex-region limitation means confirmation and specialist review are essential.",
          },
        ],
      },
  
      writtenSummary: {
        prompt:
          "Write a short trainee-level handover summary explaining the leading complex-region candidate, why it is clinically relevant, and why technical confidence is limited.",
        checklist: [
          "Names Candidate 3 as the main review-worthy finding.",
          "Explains the phenotype and gene-level support.",
          "States that the variant lies in a complex HLA-like region.",
          "Mentions mapping, paralogy, structural variation, or variant-representation limitations.",
          "Avoids reporting the finding as diagnostic without confirmation.",
          "Recommends specialist review, orthogonal confirmation, or complex-region-aware analysis.",
        ],
        modelAnswer:
          "Candidate 3 is the main review-worthy finding because the gene is relevant to the patient’s immune dysregulation and infection phenotype, and the apparent variant could fit the suspected disease mechanism. However, the locus sits in a complex HLA-like region with high homology, structural variation, difficult mapping, and possible representation issues. The read evidence is not clean enough to treat the call as a straightforward high-confidence SNV, and the apparent rarity may be unreliable if the region is poorly captured in population datasets. Candidate 5 is the central limitation because it explains why this finding needs complex-region-aware review. Candidate 2 is plausible but less strong, Candidate 4 is a likely real CNV with weak dosage support, and Candidate 1 is broad, inherited, relatively frequent, and poorly specific. The safest next step is to escalate Candidate 3 for specialist review and appropriate confirmation before diagnostic wording.",
      },
    },
  
    reasoningScorecard: [
      {
        category: "Complex-region awareness",
        maxScore: 2,
        expectation:
          "Recognises that HLA-like or highly homologous regions can make mapping, variant calling, and interpretation less reliable.",
      },
      {
        category: "Technical confidence",
        maxScore: 2,
        expectation:
          "Uses mapping quality, read placement, paralogy warnings, caller support, and local sequence context before trusting the call.",
      },
      {
        category: "Candidate prioritisation",
        maxScore: 2,
        expectation:
          "Prioritises the clinically relevant finding while clearly preserving the technical limitation.",
      },
      {
        category: "Evidence interpretation",
        maxScore: 2,
        expectation:
          "Avoids treating rarity, predicted consequence, or phenotype fit as sufficient when the locus itself is technically difficult.",
      },
      {
        category: "Safe communication",
        maxScore: 2,
        expectation:
          "Communicates the finding as requiring specialist review or confirmation rather than as a final diagnostic result.",
      },
    ],
  
    patient: {
      age: 10,
      sex: "Female",
    },
  
    referralReason:
      "A 10-year-old girl has been referred for rare disease genome analysis because of recurrent severe respiratory infections, immune dysregulation, autoimmune cytopenias, chronic fatigue, poor growth, and mild developmental delay. One candidate variant lies within a complex HLA-like genomic region. The phenotype appears relevant, but the region is known to be difficult for short-read mapping and variant interpretation.",
  
    testType:
      "Rare disease trio genome sequencing with SNV/indel, CNV, immune phenotype, HLA-like complex-region, mapping-confidence, and technical-limitation review",
  
    familyStructure:
      "The proband and both biological parents have been tested. Both parents are reportedly unaffected. No known consanguinity is reported. The leading complex-region candidate appears absent from both parents on the standard callset, but parental interpretation is limited by the same regional mapping concerns.",
  
    history: [
      "Recurrent severe respiratory infections from early childhood",
      "Two hospital admissions for pneumonia",
      "Autoimmune cytopenias reported by immunology",
      "Chronic fatigue and poor exercise tolerance",
      "Poor growth compared with siblings",
      "Mild developmental delay",
      "No previous molecular diagnosis",
      "Both parents reportedly unaffected",
      "Immune work-up suggests possible monogenic immune dysregulation",
      "Clinical team asked whether the HLA-region candidate can be trusted",
    ],
  
    phenotype: [
      "Recurrent severe respiratory infections",
      "Immune dysregulation",
      "Autoimmune cytopenias",
      "Poor growth",
      "Chronic fatigue",
      "Mild developmental delay",
      "Complex-region candidate",
    ],
  
    familyHistory:
      "Both parents are reportedly unaffected. There is no known family history of severe recurrent infections, autoimmune cytopenias, immune dysregulation, poor growth, or a similar childhood immune presentation. No known consanguinity is reported.",
  
    serviceContext: [
      "This guided case focuses on HLA-like and complex-region limitations.",
      "The key issue is that a candidate may be clinically relevant but technically difficult to trust because of mapping, homology, paralogy, and structural variation.",
      "The learner should not dismiss every complex-region finding automatically.",
      "The learner should also not report a complex-region candidate as diagnostic just because the phenotype fit appears strong.",
      "The safest conclusion should prioritise the relevant candidate for specialist review while clearly documenting the technical limitation.",
      "The final handover should separate clinical relevance from technical confidence.",
    ],
  
    candidateFindings: [
      {
        id: "candidate-1",
        label: "Candidate 1",
        gene: "BROADIMM1",
        variant: "chr2:77190442 C>T",
        zygosity: "Heterozygous",
        consequence: "missense_variant",
        inheritanceSignal: "Inherited from unaffected mother",
        clinicalFit:
          "BROADIMM1 has a broad immune association in limited reports, but the variant is inherited from the unaffected mother, relatively frequent, and does not explain the autoimmune cytopenia and severe infection pattern well.",
        rawEvidence: `GENE: BROADIMM1
  Known disease association: broad immune association in limited reports
  Reported inheritance: autosomal dominant proposed
  Known mechanism: uncertain
  Gene-disease validity in local summary: limited
  
  Variant:
  chr2:77190442 C>T
  Transcript: NM_640001.2
  HGVS: c.899C>T p.(Pro300Leu)
  Consequence: missense_variant
  Protein domain: outside proposed recurrent functional region
  
  VCF-style fields:
  QUAL=684
  FILTER=PASS
  INFO: DP=46;MQ=60;QD=14.9;SOR=0.84
  FORMAT: GT:AD:DP:GQ
  
  Proband blood: 0/1:23,23:46:99
  Mother blood: 0/1:22,22:44:99
  Father blood: 0/0:42,0:42:99
  
  Read-level notes:
  ALT reads seen on both forward and reverse strands
  ALT reads distributed across read positions
  No local mapping warning
  No concerning soft-clipping
  Second caller: detected
  
  Population:
  gnomAD AF = 0.0011
  gnomAD allele count = 310
  One homozygote observed in local population summary
  
  Phenotype fit:
  Recurrent infections: broad possible overlap
  Autoimmune cytopenias: limited overlap
  Poor growth: weak overlap
  Mild developmental delay: broad possible overlap
  Immune dysregulation: not a specific match
  
  Review question:
  Assess whether this inherited, relatively frequent, broad-match immune finding should drive the case conclusion.`,
        concern:
          "This is technically real but weak. It should be reviewed and deprioritised rather than treated as the immune disorder explanation.",
      },
      {
        id: "candidate-2",
        label: "Candidate 2",
        gene: "IMMUNEMISS2",
        variant: "chr10:55218401 G>A",
        zygosity: "Heterozygous",
        consequence: "missense_variant",
        inheritanceSignal: "Absent from both parents on standard genotype calls",
        clinicalFit:
          "IMMUNEMISS2 has a possible immune dysregulation association. The variant is rare and technically plausible, but the gene evidence is less established and the exact variant has limited supporting evidence.",
        rawEvidence: `GENE: IMMUNEMISS2
  Known disease association: possible autosomal dominant immune dysregulation disorder
  Reported inheritance: usually de novo or dominant in limited reports
  Known mechanism: damaging missense variants in a functional domain
  Gene-disease validity in local summary: moderate / emerging
  
  Variant:
  chr10:55218401 G>A
  Transcript: NM_640002.4
  HGVS: c.1286G>A p.(Arg429His)
  Consequence: missense_variant
  Protein domain: possible immune-regulatory functional domain
  
  VCF-style fields:
  QUAL=810
  FILTER=PASS
  INFO: DP=52;MQ=60;QD=15.6;SOR=0.78
  FORMAT: GT:AD:DP:GQ
  
  Proband blood: 0/1:26,26:52:99
  Mother blood: 0/0:44,0:44:99
  Father blood: 0/0:45,0:45:99
  
  Read-level notes:
  ALT reads seen on both forward and reverse strands
  ALT reads distributed across read positions
  High mapping quality
  No local low-complexity warning
  Second caller: detected
  
  Population:
  gnomAD AF = not observed
  gnomAD allele count = 0
  
  ClinVar-style summary:
  No exact matching pathogenic record found in local summary
  Nearby variants include VUS and likely pathogenic submissions in limited numbers
  
  Phenotype fit:
  Recurrent infections: compatible
  Autoimmune cytopenias: compatible
  Immune dysregulation: compatible
  Poor growth: variable
  Mild developmental delay: not a core feature
  
  Review question:
  Assess whether this rare missense candidate should outrank a more phenotype-specific candidate that has complex-region technical limitations.`,
        concern:
          "This is plausible but less strong than the complex-region candidate because the gene and variant evidence are less complete.",
      },
      {
        id: "candidate-3",
        label: "Candidate 3",
        gene: "COMPLEXHLA3",
        variant: "chr6:32544120 G>A",
        zygosity: "Possible heterozygous variant",
        consequence: "splice_region_variant",
        inheritanceSignal:
          "Appears parent-negative in standard callset, but inheritance confidence is limited by regional mapping",
        clinicalFit:
          "COMPLEXHLA3 is associated with immune dysregulation, recurrent infection, and autoimmune cytopenias. The gene and phenotype fit are strong, but the variant lies in a complex HLA-like region where mapping and representation are difficult.",
        rawEvidence: `GENE: COMPLEXHLA3
  Known disease association: immune dysregulation with recurrent infection and autoimmune cytopenias
  Reported inheritance: autosomal dominant or recessive depending on variant class in local summary
  Known mechanism: altered immune signalling / splice disruption reported for some variants
  Gene-disease validity in local summary: established / moderate
  
  Variant:
  chr6:32544120 G>A
  Transcript: NM_640003.5
  HGVS: c.512+5G>A
  Consequence: splice_region_variant
  Region note: HLA-like complex region with high homology and structural variation
  
  VCF-style fields:
  QUAL=156
  FILTER=ComplexRegionReview
  INFO: DP=68;MQ=34;QD=2.3;SOR=2.9
  FORMAT: GT:AD:DP:GQ
  
  Proband blood: 0/1:43,25:68:58
  Mother blood: 0/0:54,2:56:62
  Father blood: 0/0:51,1:52:64
  
  Read-level notes:
  ALT reads are present on both strands in the proband
  Some ALT-supporting reads have reduced mapping quality
  Several supporting reads have multiple possible alignments in the region
  Local homology warning present
  Segmental duplication / paralogous sequence warning present
  Soft-clipping is present in a subset of supporting reads
  Second caller: complex-region low-confidence flag only
  
  Regional context:
  The locus lies within a highly polymorphic immune region
  Short-read mapping may not distinguish the target locus from paralogous sequence confidently
  Local structural variation may affect read placement
  Population frequency estimates may be less reliable in this region
  Reference representation may not capture all haplotypes equally well
  
  Population:
  gnomAD AF = not observed in standard summary
  Population absence should be interpreted cautiously because region coverage and representation may be limited
  
  Phenotype fit:
  Recurrent severe respiratory infections: strong match
  Autoimmune cytopenias: strong match
  Immune dysregulation: strong match
  Poor growth: compatible
  Chronic fatigue: compatible
  Mild developmental delay: variable / indirect
  
  Interpretation limitation:
  The gene and phenotype fit are compelling.
  The technical confidence is limited by mapping and regional complexity.
  Specialist review or orthogonal confirmation is needed before diagnostic use.
  
  Review question:
  Assess whether this finding is clinically relevant but technically limited, rather than simply diagnostic or simply dismissible.`,
        concern:
          "This is the main review-worthy candidate, but it cannot be used diagnostically without specialist complex-region review and confirmation.",
      },
      {
        id: "candidate-4",
        label: "Candidate 4",
        gene: "CNVIMM4 region",
        variant: "chr16:29120000-29205000 duplication",
        zygosity: "Heterozygous duplication",
        consequence: "copy_number_gain",
        inheritanceSignal: "Inherited from unaffected father",
        clinicalFit:
          "The duplication is likely real but inherited from the unaffected father, overlaps population CNVs, and has no established triplosensitivity mechanism for the immune phenotype.",
        rawEvidence: `CNV REGION: chr16:29120000-29205000
  CNV type: duplication
  Estimated size: 85 kb
  Copy-number state: heterozygous duplication
  
  Gene:
  CNVIMM4
  Known disease association: possible immune or developmental association in limited reports
  Known mechanism: uncertain
  Triplosensitivity evidence: not established
  
  Inheritance:
  Proband: duplication present
  Mother: duplication not detected
  Father: duplication present
  
  CNV caller summary:
  Caller 1: duplication PASS
  Caller 2: duplication supported
  Quality score: 104
  Number of affected targets/windows: 25
  
  Read-depth evidence:
  Expected normalised depth in diploid regions: ~1.00
  Proband normalised depth across interval: ~1.47
  Father normalised depth across interval: ~1.48
  Mother normalised depth across interval: ~1.00
  Flanking regions: mostly normal
  
  Breakpoint evidence:
  Split reads: absent
  Paired-end support: imprecise
  Breakpoint not resolved
  
  Population:
  Overlapping duplications observed in local population CNV summary
  Partial benign overlap reported
  
  Phenotype fit:
  Recurrent infections: weak overlap
  Autoimmune cytopenias: not a core feature
  Poor growth: broad possible overlap
  Mild developmental delay: broad possible overlap
  
  Review question:
  Assess whether this inherited copy-number gain has enough dosage, phenotype, and population support to be prioritised.`,
        concern:
          "This is likely technically real but weak because the gain mechanism is uncertain, population overlap is present, and it is inherited from an unaffected father.",
      },
      {
        id: "candidate-5",
        label: "Candidate 5",
        gene: "Complex-region review",
        variant: "HLA-like mapping and representation limitation",
        zygosity: "Case-level technical limitation",
        consequence: "complex_region_limitation",
        inheritanceSignal: "Affects interpretation of Candidate 3",
        clinicalFit:
          "This is not a disease candidate. It is the central technical issue because Candidate 3 lies in a complex region where standard short-read interpretation may be unreliable.",
        rawEvidence: `CASE CONTEXT REVIEW: HLA-like complex-region limitation
  Reason for review:
  Candidate 3 lies in a highly polymorphic immune region with local homology, paralogous sequence, and possible structural variation.
  
  Technical concerns:
  Reduced mapping quality for some supporting reads
  Multiple possible alignments for some ALT-supporting reads
  Segmental duplication / paralogy warning
  Subset of reads show soft-clipping
  Population frequency may be unreliable because of region representation
  Standard reference may not represent all haplotypes equally
  Parent genotypes may also be affected by regional mapping limitations
  
  Why the finding is still relevant:
  The gene is clinically relevant to the immune phenotype
  The variant has a plausible splice-region consequence
  The proband has more ALT support than either parent in the standard callset
  The phenotype match is strong enough to justify review
  
  Why the finding cannot be overcalled:
  Standard short-read call confidence is limited
  Inheritance cannot be treated as cleanly de novo
  Rarity cannot be interpreted as strongly as in well-mapped regions
  Diagnostic wording requires confirmation or specialist complex-region assessment
  
  Useful review steps:
  Specialist mapping review
  Complex-region-aware caller or local pipeline review
  Orthogonal confirmation if available
  Haplotype-aware or long-read review if clinically appropriate
  Careful transcript and variant representation check
  Formal clinical laboratory sign-off
  
  Review question:
  Assess how complex-region uncertainty should shape prioritisation, escalation, and final wording.`,
        concern:
          "This is the central limitation. Candidate 3 is important but must be handled as a technically limited complex-region candidate.",
      },
    ],
  
    decisionCheckpoints: [
      {
        id: "checkpoint-1",
        title: "Checkpoint 1 — Identify the main review-worthy finding",
        context:
          "Candidate 3 has the strongest phenotype and gene fit, but its region has mapping and representation concerns.",
        question:
          "Which finding should be prioritised for formal review?",
        options: [
          {
            label: "A",
            text: "Candidate 2, because a cleaner rare missense call should outrank a technically limited complex-region finding.",
            isCorrect: false,
            feedback:
              "Not quite. Candidate 2 is cleaner technically, but Candidate 3 has stronger gene and phenotype relevance.",
          },
          {
            label: "B",
            text: "Candidate 3, because it is clinically relevant, but it must be escalated with the complex-region limitation clearly stated.",
            isCorrect: true,
            feedback:
              "Correct. Candidate 3 is review-worthy, but not ready for diagnostic wording without further review.",
          },
          {
            label: "C",
            text: "Candidate 4, because CNV calls are more stable than SNV calls in HLA-like regions.",
            isCorrect: false,
            feedback:
              "Not quite. Candidate 4 is likely real, but its dosage, inheritance, and phenotype support are weak.",
          },
        ],
        teachingPoint:
          "A finding can be clinically important while still being technically limited.",
      },
      {
        id: "checkpoint-2",
        title: "Checkpoint 2 — Interpret complex-region evidence",
        context:
          "Candidate 3 has reduced mapping quality, local homology warnings, and multiple possible read placements.",
        question:
          "What is the safest interpretation of the technical evidence?",
        options: [
          {
            label: "A",
            text: "The variant is technically limited and needs specialist review before it can support diagnostic wording.",
            isCorrect: true,
            feedback:
              "Correct. The technical limitation directly affects how confidently the finding can be used.",
          },
          {
            label: "B",
            text: "The variant is confirmed because ALT reads are present on both strands in the proband.",
            isCorrect: false,
            feedback:
              "Not quite. Strand support helps, but it does not resolve mapping ambiguity in a complex region.",
          },
          {
            label: "C",
            text: "The variant is irrelevant because all calls in HLA-like regions should be treated as artefacts.",
            isCorrect: false,
            feedback:
              "Not quite. Complex-region calls can be relevant, but they need additional scrutiny.",
          },
        ],
        teachingPoint:
          "Local read support is useful, but complex-region mapping can still limit confidence.",
      },
      {
        id: "checkpoint-3",
        title: "Checkpoint 3 — Handle apparent parent-negative status",
        context:
          "Candidate 3 appears parent-negative in the standard callset, but both parental genotypes are in the same difficult region.",
        question:
          "How should inheritance be described?",
        options: [
          {
            label: "A",
            text: "Confirmed de novo, because both parents are called reference in the standard genotype output.",
            isCorrect: false,
            feedback:
              "Not quite. Parent-negative status is less reliable when the region itself is difficult to map.",
          },
          {
            label: "B",
            text: "Apparently parent-negative in standard data, but inheritance confidence is limited by complex-region mapping.",
            isCorrect: true,
            feedback:
              "Correct. This wording preserves the observation without overclaiming clean de novo status.",
          },
          {
            label: "C",
            text: "Inherited from both parents, because low-level parental ALT reads always represent true inheritance.",
            isCorrect: false,
            feedback:
              "Not quite. Low-level parental reads in a difficult region may reflect mapping noise or representation issues.",
          },
        ],
        teachingPoint:
          "Inheritance interpretation can be weakened by the same technical limitations affecting the proband call.",
      },
      {
        id: "checkpoint-4",
        title: "Checkpoint 4 — Decide what follow-up is needed",
        context:
          "The phenotype match is strong, but the locus is technically difficult for standard short-read analysis.",
        question:
          "Which next step is most appropriate?",
        options: [
          {
            label: "A",
            text: "Report the finding now because a strong phenotype match compensates for mapping uncertainty.",
            isCorrect: false,
            feedback:
              "Not quite. Phenotype fit cannot remove the need to resolve a technical limitation.",
          },
          {
            label: "B",
            text: "Ignore the finding because complex-region variants are outside the scope of rare disease analysis.",
            isCorrect: false,
            feedback:
              "Not quite. The finding can be in scope, but it needs the right technical pathway.",
          },
          {
            label: "C",
            text: "Request specialist complex-region review, confirmation, or complex-region-aware analysis if available.",
            isCorrect: true,
            feedback:
              "Correct. The follow-up should directly address the mapping and representation limitation.",
          },
        ],
        teachingPoint:
          "The best follow-up matches the actual limitation: here, the limitation is region complexity.",
      },
      {
        id: "checkpoint-5",
        title: "Checkpoint 5 — Final complex-region conclusion",
        context:
          "You need to prepare a safe trainee-level conclusion for formal clinical laboratory review.",
        question:
          "Which conclusion is safest?",
        options: [
          {
            label: "A",
            text: "Prioritise Candidate 3 for specialist review, document the complex-region limitation, and avoid diagnostic wording until confirmed.",
            isCorrect: true,
            feedback:
              "Correct. This conclusion is clinically useful and technically safe.",
          },
          {
            label: "B",
            text: "Report Candidate 3 as diagnostic because the immune phenotype and gene association are highly compatible.",
            isCorrect: false,
            feedback:
              "Not quite. Strong clinical fit does not override the need for technical confirmation.",
          },
          {
            label: "C",
            text: "Prioritise Candidate 2 instead because standard SNV calls are easier to interpret than complex-region calls.",
            isCorrect: false,
            feedback:
              "Not quite. Candidate 2 is technically cleaner but weaker overall for this phenotype.",
          },
        ],
        teachingPoint:
          "Safe handover can prioritise a complex-region candidate while clearly stating why it needs specialist confirmation.",
      },
    ],
  
    finalReflection:
      "A safe trainee-level conclusion would be that Candidate 3 is the main review-worthy finding, but it should not be used diagnostically without specialist complex-region review and confirmation. COMPLEXHLA3 is relevant to the patient’s recurrent severe infections, immune dysregulation, and autoimmune cytopenias, and the apparent splice-region variant could fit the suspected disease mechanism. However, the variant lies in a complex HLA-like region with local homology, paralogous sequence, possible structural variation, reduced mapping quality, and multiple possible read placements. This means the standard short-read call, apparent rarity, and apparent parent-negative inheritance should all be interpreted cautiously. Candidate 5 is not a disease candidate but is the central technical limitation controlling the case. Candidate 2 is plausible but less strong because the gene and variant evidence are less complete. Candidate 4 is likely a real inherited duplication but has weak dosage and phenotype support. Candidate 1 is inherited, relatively frequent, and poorly specific. The safest next step is to prioritise Candidate 3 for specialist complex-region review, orthogonal confirmation or complex-region-aware analysis if available, and formal clinical laboratory sign-off before diagnostic wording.",
  };