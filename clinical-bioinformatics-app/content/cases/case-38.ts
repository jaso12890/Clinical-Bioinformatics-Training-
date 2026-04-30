export const case38 = {
  id: "case-38",
  slug: "numt-mapping-confusion-case",
  title: "Case 38: NUMT and mitochondrial mapping confusion",
  level: "Advanced",
  summary:
    "A mitochondrial pitfall case focused on recognising when an apparent mtDNA variant may actually be caused by nuclear mitochondrial sequence mapping confusion.",

  visualisationExampleId: null,

  assessmentFocus: [
    "NUMT-related mitochondrial mapping confusion",
    "mtDNA variant calling pitfalls",
    "Caller disagreement in mitochondrial analysis",
    "Low-level heteroplasmy caution",
    "Nuclear versus mitochondrial variant distinction",
    "Non-canonical splice evidence",
    "Incomplete recessive nuclear mitochondrial evidence",
    "Safe escalation when no clean candidate exists",
  ],

  guidedTutorMode: {
    type: "static-rule-based",
    description:
      "Uses built-in hints, checkpoint feedback, model answers, and self-check criteria to support safe case reasoning.",
  },

  phase5Assessment: {
    candidateRanking: {
      prompt:
        "Rank the findings from highest to lowest review priority in this case, remembering that the highest priority is not necessarily a reportable diagnosis.",
      correctOrder: ["candidate-1", "candidate-4", "candidate-2", "candidate-3"],
      explanation:
        "Candidate 1 is the highest review priority because it is the main safety pitfall: it appears to be a mitochondrial heteroplasmic variant by one caller, but NUMT-aware filtering and read-origin evidence undermine the signal. Candidate 4 is a technically convincing canonical splice variant in a recessive nuclear mitochondrial gene, but only one allele is identified. Candidate 2 is a very low-level mtDNA heteroplasmy finding without supportive tissue or strong variant-level evidence. Candidate 3 is technically convincing and de novo, but the gene-disease relationship and non-canonical splice evidence are weak.",
    },

    escalationDecision: {
      prompt:
        "Choose the safest next action for this case.",
      options: [
        {
          id: "document-numt-no-clean-candidate",
          label: "A",
          decision:
            "Document that there is no clean candidate from the current evidence, explain the NUMT concern for Candidate 1, and escalate for specialist mitochondrial or orthogonal review if clinical suspicion remains.",
          isBest: true,
          feedback:
            "Best decision. Candidate 1 should not be treated as a confirmed mtDNA variant because the NUMT evidence undermines the call. The safest conclusion is technical caution and appropriate escalation.",
        },
        {
          id: "report-unfiltered-mtnd4",
          label: "B",
          decision:
            "Report Candidate 1 as a true MT-ND4 mitochondrial variant because one caller estimated 29% heteroplasmy.",
          isBest: false,
          feedback:
            "Review this choice. The unfiltered heteroplasmy estimate is not reliable when NUMT-aware filtering and read-origin evidence suggest misalignment from a nuclear mitochondrial sequence.",
        },
        {
          id: "prioritise-de-novo-nuclear-splice",
          label: "C",
          decision:
            "Prioritise Candidate 3 because it is de novo and technically clean.",
          isBest: false,
          feedback:
            "Review this choice. Candidate 3 is technically convincing, but weak gene-disease validity and weak non-canonical splice evidence make it insufficient as a strong candidate.",
        },
      ],
    },

    writtenSummary: {
      prompt:
        "Write a short trainee-level handover summary explaining why there is no clean candidate, why Candidate 1 is a NUMT-related pitfall, and what should be escalated.",
      checklist: [
        "States that there is no clean candidate from the current evidence.",
        "Identifies Candidate 1 as the main technical pitfall.",
        "Explains that Candidate 1 is undermined by NUMT-aware filtering.",
        "Mentions that ALT-supporting reads may align to a nuclear NUMT region.",
        "Avoids reporting Candidate 1 as a confirmed mtDNA variant.",
        "Explains that Candidate 2 is low-level mtDNA heteroplasmy without supportive tissue or strong variant evidence.",
        "Explains that Candidate 3 is de novo but weak because gene-disease validity and splice evidence are limited.",
        "Explains that Candidate 4 is a single allele in a recessive nuclear mitochondrial gene and is incomplete without a second allele.",
        "Mentions that paternal mtDNA comparison should not be treated like autosomal inheritance.",
        "Recommends specialist mitochondrial review or orthogonal mtDNA testing if clinical suspicion remains.",
      ],
      modelAnswer:
        "There is no clean candidate from the current evidence. Candidate 1 is the main technical concern because it appears to be an MT-ND4 heteroplasmic signal by one caller, but NUMT-aware filtering reduces the apparent heteroplasmy markedly and many ALT-supporting reads also align to a nuclear NUMT region. This means Candidate 1 should not be reported as a confirmed mtDNA variant from the current evidence. Candidate 2 is a very low-level mtDNA finding detected in blood only, with no supportive second tissue or strong variant-level evidence. Candidate 3 is technically convincing and appears de novo, but it is a non-canonical splice-region variant in a weakly supported nuclear mitochondrial candidate gene. Candidate 4 is a technically convincing canonical splice variant in a recessive nuclear mitochondrial gene, but only one allele is identified. The safest next step is to document the NUMT concern clearly and escalate for specialist mitochondrial review or orthogonal testing if clinical suspicion remains.",
    },
  },

  reasoningScorecard: [
    {
      category: "NUMT recognition",
      maxScore: 2,
      expectation:
        "Recognises that Candidate 1 may be caused by nuclear mitochondrial sequence mapping rather than true mtDNA heteroplasmy.",
    },
    {
      category: "Mitochondrial technical caution",
      maxScore: 2,
      expectation:
        "Uses caller disagreement, NUMT-aware filtering, read-origin evidence, and lack of independent tissue confirmation to limit confidence.",
    },
    {
      category: "Low-level heteroplasmy interpretation",
      maxScore: 2,
      expectation:
        "Explains why Candidate 2 is weak because it is low-level, blood-only, and lacks strong variant-level or tissue support.",
    },
    {
      category: "Nuclear candidate comparison",
      maxScore: 2,
      expectation:
        "Explains why Candidate 3 is weak despite de novo status and why Candidate 4 is incomplete despite a strong splice consequence.",
    },
    {
      category: "Safe escalation",
      maxScore: 2,
      expectation:
        "Concludes that there is no clean candidate and recommends specialist mitochondrial review or orthogonal testing if clinical suspicion remains.",
    },
  ],

  patient: {
    age: 5,
    sex: "Male",
  },

  referralReason:
    "A 5-year-old boy has been referred for genomic investigation because of developmental delay, hypotonia, mild seizures, exercise intolerance, and possible mitochondrial disease.",

  testType:
    "Rare disease genome sequencing with mitochondrial variant review and nuclear genome SNV/indel/CNV analysis",

  familyStructure:
    "The proband and both biological parents have been tested. Both parents are reportedly unaffected.",

  history: [
    "Global developmental delay noted in early childhood",
    "Hypotonia from infancy",
    "Mild seizures beginning at age 4",
    "Exercise intolerance reported by parents",
    "No confirmed lactic acidosis in the current evidence packet",
    "Clinical team queries possible mitochondrial disease",
    "No known previous molecular diagnosis",
  ],

  phenotype: [
    "Global developmental delay",
    "Hypotonia",
    "Mild seizures",
    "Exercise intolerance",
    "Possible mitochondrial disease",
  ],

  familyHistory:
    "Both parents are reportedly unaffected. No known family history of mitochondrial disease, developmental delay, seizures, hypotonia, or exercise intolerance is documented.",

  serviceContext: [
    "This is a mitochondrial mapping pitfall case.",
    "The key issue is NUMT confusion.",
    "NUMTs are nuclear mitochondrial DNA-like sequences that can interfere with mtDNA variant calling if reads are misassigned.",
    "An apparent mtDNA variant can look interesting but still be unreliable if the reads map equally well to nuclear NUMT sequence.",
    "Your task is to decide whether any candidate is strong enough to prioritise, or whether the safest output is technical caution and escalation for specialist review.",
  ],

  candidateFindings: [
    {
      id: "candidate-1",
      label: "Candidate 1",
      gene: "MT-ND4",
      variant: "m.11778G>A-like signal",
      zygosity: "Apparent mtDNA heteroplasmy",
      consequence: "missense_variant",
      inheritanceSignal:
        "Detected in proband blood by one caller, but affected by NUMT mapping warning",
      clinicalFit:
        "MT-ND4 is a mitochondrial gene, and the patient has some mitochondrial-like features. However, the signal is in a region with a known nuclear mitochondrial sequence alignment warning, and the phenotype is not a strong match for the classic disease association in the local summary.",
      rawEvidence: `MITOCHONDRIAL VARIANT SIGNAL:
Gene: MT-ND4
Genome: mitochondrial DNA
Variant-like signal: m.11778G>A-like
Consequence: missense_variant
Mitochondrial complex: complex I-associated gene

Sample / assay context:
Blood-derived DNA tested by genome sequencing
Mitochondrial heteroplasmy caller A used in local pipeline
Mitochondrial-aware caller B also available
No urine, muscle, or independent mtDNA assay result available in current evidence packet

Caller A result:
Total apparent mtDNA depth at site: 3,860
Reference reads: 2,740
Alternate reads: 1,120
Estimated heteroplasmy: 29.0%
Caller A status: flagged as possible heteroplasmy

Caller B result:
Variant not called above reporting threshold
Caller B warning: reads overlap known NUMT-homologous region
Caller B estimated heteroplasmy after NUMT-aware filtering: 1.2%

Read-level notes:
Many ALT-supporting reads have equally good or better secondary alignments to a nuclear NUMT region on chr5
ALT-supporting reads are enriched for reads with nuclear-specific mismatches outside the mtDNA variant site
Mapping quality before NUMT-aware filtering: mixed
Mapping quality after NUMT-aware filtering: ALT support falls markedly
ALT reads cluster in read segments overlapping the NUMT-homologous interval
No independent tissue confirmation available

Nuclear NUMT context:
Known NUMT-homologous segment: chr5:88210000-88214500
The nuclear NUMT segment contains an A base at the homologous position
Several ALT-supporting reads carry flanking bases matching the nuclear NUMT rather than the mitochondrial genome

Mother:
Caller A apparent heteroplasmy: 7.8%
Caller B NUMT-aware estimate: below threshold

Father:
Caller A apparent heteroplasmy: 6.9%
Caller B NUMT-aware estimate: below threshold

Population / database-style summary:
MT-ND4 pathogenic variants exist, but this exact apparent signal is affected by local NUMT warning
Classic phenotype in local summary does not strongly match the child’s presentation
No strong disease-specific evidence for this exact call in this technical context

Technical limitation:
The current evidence is not sufficient to treat this as a true mtDNA heteroplasmic variant
Specialist mitochondrial review or orthogonal mtDNA testing would be needed if clinically pursued`,
      concern:
        "This should not be prioritised as a true mtDNA finding from the current evidence. The apparent heteroplasmy is undermined by NUMT mapping evidence and inconsistent mitochondrial-aware caller support.",
    },
    {
      id: "candidate-2",
      label: "Candidate 2",
      gene: "MT-ATP6",
      variant: "m.8993T>C",
      zygosity: "Very low-level mtDNA heteroplasmy",
      consequence: "missense_variant",
      inheritanceSignal: "Detected at very low level in blood only",
      clinicalFit:
        "MT-ATP6 is relevant to mitochondrial disease, but the apparent heteroplasmy is very low, not confirmed in another tissue, and the phenotype is not specific enough to support prioritisation from this evidence alone.",
      rawEvidence: `MITOCHONDRIAL VARIANT:
Gene: MT-ATP6
Genome: mitochondrial DNA
Variant: m.8993T>C
Consequence: missense_variant
Mitochondrial complex: complex V-associated gene

Sample / assay context:
Blood-derived DNA tested by genome sequencing
No urine, muscle, buccal, or independent mtDNA assay available in current evidence packet
Mitochondrial heteroplasmy caller used in local pipeline
Assay sensitivity threshold in current summary: approximately 2% heteroplasmy

Blood heteroplasmy:
Total mtDNA depth at site: 4,950
Reference reads: 4,790
Alternate reads: 160
Estimated heteroplasmy: 3.2%
Mean base quality: acceptable
Mean mapping quality: high

Mother:
Blood heteroplasmy: below threshold

Father:
Blood heteroplasmy: below threshold
Note: paternal mtDNA comparison is not interpreted like nuclear inheritance

Read-level notes:
ALT reads seen on both strands
No major NUMT warning at this site
No strong read-end clustering
However, heteroplasmy is close to the lower reporting range
No independent tissue confirmation

Population / database-style summary:
The exact variant has limited/uncertain evidence in local summary
Other MT-ATP6 variants can cause mitochondrial disease, but this specific signal is weak
Low-level blood-only detection may not be sufficient for interpretation

Phenotype fit:
Exercise intolerance and hypotonia could fit mitochondrial disease broadly
No strong biochemical or tissue-specific support in the current evidence
No confirmed lactic acidosis in the current packet`,
      concern:
        "This is not a strong candidate from the current evidence. The heteroplasmy is low, the variant evidence is limited, and there is no supportive second tissue or functional evidence.",
    },
    {
      id: "candidate-3",
      label: "Candidate 3",
      gene: "NUCMIT8",
      variant: "chr12:66190442 G>A",
      zygosity: "Heterozygous nuclear variant",
      consequence: "splice_region_variant",
      inheritanceSignal: "Apparent de novo with good parental coverage",
      clinicalFit:
        "NUCMIT8 has a possible nuclear mitochondrial-function association, but the gene-disease relationship is limited and the variant is a non-canonical splice-region change with weak predicted splice impact.",
      rawEvidence: `GENE: NUCMIT8
Genome location: nuclear genome
Known disease association: possible mitochondrial-function disorder
Reported inheritance: autosomal dominant proposed in limited reports
Known mechanism: uncertain
Gene-disease validity in local summary: limited / emerging

Variant:
chr12:66190442 G>A
Transcript: NM_380003.2
HGVS: c.701+6G>A
Consequence: splice_region_variant
Splice position: +6 donor region, outside canonical +1/+2 site
Splice prediction summary: weak predicted splice effect in local summary

VCF-style fields:
QUAL=740
FILTER=PASS
INFO: DP=48;MQ=60;QD=15.4;SOR=0.76
FORMAT: GT:AD:DP:GQ

Proband: 0/1:24,24:48:99
Mother: 0/0:42,0:42:99
Father: 0/0:41,0:41:99

Read-level notes:
ALT reads seen on both forward and reverse strands
ALT reads distributed across read positions
High mapping quality for ALT-supporting reads
No local low-complexity warning
No pseudogene or segmental duplication warning
No concerning soft-clipping around the variant

Population:
gnomAD AF = not observed
gnomAD allele count = 0

Constraint:
LOEUF = 0.69
pLI = 0.19

ClinVar-style summary:
No exact matching variant record found in local summary
Gene-disease relationship remains limited
No local RNA evidence or previous splice-disrupting evidence for this variant`,
      concern:
        "This is technically convincing and appears de novo, but weak gene-disease validity and weak non-canonical splice evidence make it insufficient as a strong candidate.",
    },
    {
      id: "candidate-4",
      label: "Candidate 4",
      gene: "RECMIT5",
      variant: "chr2:118809331 C>T",
      zygosity: "Heterozygous nuclear variant",
      consequence: "splice_acceptor_variant",
      inheritanceSignal: "Inherited from unaffected mother",
      clinicalFit:
        "RECMIT5 is a nuclear gene associated with autosomal recessive mitochondrial disease. The variant is a canonical splice acceptor, but only one inherited heterozygous allele is identified.",
      rawEvidence: `GENE: RECMIT5
Genome location: nuclear genome
Known disease association: autosomal recessive mitochondrial disorder
Reported inheritance: autosomal recessive
Known mechanism: biallelic loss-of-function

Variant:
chr2:118809331 C>T
Transcript: NM_380004.4
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
Deep intronic/regulatory variants not fully assessed in this summary

Population:
gnomAD AF = 0.000003
gnomAD allele count = 1
No homozygotes observed in local summary

Constraint:
LOEUF = 0.31
pLI = 0.82

ClinVar-style summary:
No exact matching variant record found in local summary
Other biallelic splice and truncating variants in RECMIT5 have been submitted in affected individuals with mitochondrial disease`,
      concern:
        "This is technically convincing as a single inherited nuclear splice variant, but it is incomplete as a recessive mitochondrial explanation without a second relevant allele.",
    },
  ],

  decisionCheckpoints: [
    {
      id: "checkpoint-1",
      title: "Checkpoint 1 — Recognise NUMT confusion",
      context:
        "Candidate 1 appears to be an MT-ND4 heteroplasmic variant by one caller, but NUMT-aware filtering removes most ALT support and many ALT reads align to a nuclear NUMT region.",
      question: "What is the safest interpretation of Candidate 1?",
      options: [
        {
          label: "A",
          text: "It should be treated as a confirmed mtDNA variant because one caller estimated 29% heteroplasmy.",
          isCorrect: false,
          feedback:
            "Not quite. A single caller estimate is not enough when NUMT-aware review undermines the signal.",
        },
        {
          label: "B",
          text: "It should be treated cautiously because the apparent mtDNA signal may come from nuclear NUMT mapping rather than true mitochondrial heteroplasmy.",
          isCorrect: true,
          feedback:
            "Correct. Candidate 1 is the main pitfall in this case.",
        },
        {
          label: "C",
          text: "It is automatically benign because all MT-ND4 variants are artefacts.",
          isCorrect: false,
          feedback:
            "Not quite. Real MT-ND4 variants can be important, but this signal is technically unreliable.",
        },
      ],
      teachingPoint:
        "NUMT mapping can create false or misleading apparent mitochondrial variant signals.",
    },
    {
      id: "checkpoint-2",
      title: "Checkpoint 2 — Low-level heteroplasmy needs context",
      context:
        "Candidate 2 is detected at about 3.2% heteroplasmy in blood only, close to the lower reporting range, with no second tissue confirmation and limited variant-level evidence.",
      question: "What is the safest interpretation of Candidate 2?",
      options: [
        {
          label: "A",
          text: "It is diagnostic because any detectable mtDNA heteroplasmy is clinically significant.",
          isCorrect: false,
          feedback:
            "Not quite. Low-level heteroplasmy needs tissue, phenotype, assay, and variant-level support.",
        },
        {
          label: "B",
          text: "It is not a strong candidate from the current evidence because heteroplasmy is low and not supported by another tissue or strong disease evidence.",
          isCorrect: true,
          feedback:
            "Correct. Candidate 2 may be real, but it is not strong enough to explain the case from this evidence alone.",
        },
        {
          label: "C",
          text: "It must be inherited from the father because the father is negative.",
          isCorrect: false,
          feedback:
            "Not quite. Paternal comparison is not interpreted like autosomal inheritance for mtDNA variants.",
        },
      ],
      teachingPoint:
        "Low-level mtDNA findings require cautious interpretation, especially without supportive tissue or variant evidence.",
    },
    {
      id: "checkpoint-3",
      title: "Checkpoint 3 — Nuclear mitochondrial candidate with weak splice evidence",
      context:
        "Candidate 3 is an apparent de novo nuclear splice-region variant in a possible mitochondrial-function gene, but the gene-disease relationship is limited and the splice prediction is weak.",
      question: "Why is Candidate 3 not a strong answer?",
      options: [
        {
          label: "A",
          text: "Because nuclear genes can never cause mitochondrial disease.",
          isCorrect: false,
          feedback:
            "Not quite. Nuclear genes can cause mitochondrial disease, but the evidence must fit.",
        },
        {
          label: "B",
          text: "Because weak gene-disease validity and weak non-canonical splice evidence make it insufficient despite de novo status.",
          isCorrect: true,
          feedback:
            "Correct. Candidate 3 is technically real but not clinically strong enough.",
        },
        {
          label: "C",
          text: "Because de novo variants are never relevant in mitochondrial presentations.",
          isCorrect: false,
          feedback:
            "Not quite. De novo nuclear variants can be relevant if the gene and mechanism are well supported.",
        },
      ],
      teachingPoint:
        "A nuclear mitochondrial-looking candidate still needs strong gene, mechanism, and consequence evidence.",
    },
    {
      id: "checkpoint-4",
      title: "Checkpoint 4 — Single allele in a recessive nuclear mitochondrial gene",
      context:
        "Candidate 4 is a canonical splice acceptor variant in a recessive nuclear mitochondrial gene, inherited from the mother. No second allele is identified.",
      question: "What is the safest interpretation of Candidate 4?",
      options: [
        {
          label: "A",
          text: "It is a technically convincing carrier-level finding, but it does not currently explain a recessive condition without a second allele.",
          isCorrect: true,
          feedback:
            "Correct. Candidate 4 may be real and relevant as a single allele, but it is incomplete as a diagnosis.",
        },
        {
          label: "B",
          text: "It is diagnostic because canonical splice variants are always sufficient.",
          isCorrect: false,
          feedback:
            "Not quite. The inheritance model still matters.",
        },
        {
          label: "C",
          text: "It proves that Candidate 1 must be a true mtDNA variant.",
          isCorrect: false,
          feedback:
            "Not quite. These are separate evidence questions.",
        },
      ],
      teachingPoint:
        "Nuclear mitochondrial disease genes still follow their own inheritance model.",
    },
    {
      id: "checkpoint-5",
      title: "Checkpoint 5 — Safe service-style next step",
      context:
        "Candidate 1 is undermined by NUMT mapping. Candidate 2 is low-level and weakly supported. Candidate 3 has weak gene/splice evidence. Candidate 4 is incomplete recessive evidence.",
      question: "What is the safest overall conclusion?",
      options: [
        {
          label: "A",
          text: "There is no clean candidate from the current evidence; document the NUMT concern and escalate for specialist mitochondrial/variant review if clinical suspicion remains.",
          isCorrect: true,
          feedback:
            "Correct. This is the safest conclusion because none of the current candidates is strong enough.",
        },
        {
          label: "B",
          text: "Report Candidate 1 because it has the highest apparent heteroplasmy estimate before filtering.",
          isCorrect: false,
          feedback:
            "Not quite. The unfiltered heteroplasmy estimate is misleading in the presence of NUMT mapping evidence.",
        },
        {
          label: "C",
          text: "Ignore all mitochondrial limitations and report Candidate 3 because it is de novo.",
          isCorrect: false,
          feedback:
            "Not quite. Candidate 3 lacks strong gene and splice support.",
        },
      ],
      teachingPoint:
        "Safe mitochondrial review includes knowing when mapping uncertainty prevents a confident candidate conclusion.",
    },
  ],

  finalReflection:
    "A safe trainee-level conclusion would be that there is no clean candidate from the current evidence. Candidate 1 is the main pitfall: it appears to be an MT-ND4 heteroplasmic variant by one caller, but NUMT-aware review shows that much of the ALT support may come from nuclear mitochondrial sequence mapping rather than true mtDNA heteroplasmy. Candidate 2 is a very low-level mtDNA finding without supportive tissue or variant-level evidence. Candidate 3 is technically convincing as a nuclear variant but has weak gene-disease and splice evidence. Candidate 4 is a technically convincing single splice variant in a recessive nuclear mitochondrial gene, but no second allele is identified. The safest next step is to document the NUMT concern, avoid reporting Candidate 1 as a true mtDNA variant from the current evidence, and escalate for specialist mitochondrial review or orthogonal testing if clinical suspicion remains.",
};