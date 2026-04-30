export const case35 = {
  id: "case-35",
  slug: "repeat-expansion-confirmed-assay-case",
  title: "Case 35: Repeat expansion confirmed by separate assay",
  level: "Advanced",
  summary:
    "A repeat-expansion case focused on recognising when the main diagnosis comes from an appropriate repeat-expansion assay rather than ordinary SNV, indel, or CNV review.",

  visualisationExampleId: null,

  assessmentFocus: [
    "Repeat-expansion interpretation",
    "Correct assay selection",
    "VCF limitation awareness",
    "Pathogenic repeat-size thresholds",
    "Assay quality review",
    "Phenotype-mechanism fit",
    "Incomplete recessive evidence",
    "Safe escalation of repeat-expansion findings",
  ],

  guidedTutorMode: {
    type: "static-rule-based",
    description:
      "Uses built-in hints, checkpoint feedback, model answers, and self-check criteria to support safe case reasoning.",
  },

  phase5Assessment: {
    candidateRanking: {
      prompt:
        "Rank the candidates from strongest to weakest as explanations for the patient’s referred progressive ataxia presentation.",
      correctOrder: ["candidate-2", "candidate-3", "candidate-1"],
      explanation:
        "Candidate 2 is strongest because a repeat-specific assay identified a pathogenic-range REPATX1 CAG expansion and the phenotype strongly matches the known repeat-expansion disorder. Candidate 3 is a technically convincing canonical splice variant in a recessive ataxia gene, but only one allele is identified, so it is incomplete as an explanation. Candidate 1 is technically convincing and appears de novo, but the gene-disease validity is weak and the phenotype is better explained by the confirmed repeat expansion.",
    },

    escalationDecision: {
      prompt:
        "Choose the safest next action for this repeat-expansion case.",
      options: [
        {
          id: "prioritise-repeat-expansion",
          label: "A",
          decision:
            "Prioritise Candidate 2 for formal review, document that the main evidence comes from repeat-expansion testing, and explain why the ordinary VCF candidates are weaker.",
          isBest: true,
          feedback:
            "Best decision. Candidate 2 is supported by the correct assay, pathogenic-range repeat sizing, assay quality metrics, and strong phenotype fit.",
        },
        {
          id: "prioritise-denovo-snv",
          label: "B",
          decision:
            "Prioritise Candidate 1 because de novo SNVs should always outrank repeat-expansion results.",
          isBest: false,
          feedback:
            "Review this choice. De novo SNVs can be important, but Candidate 1 has weak gene-disease evidence and should not distract from a confirmed mechanism-matched repeat expansion.",
        },
        {
          id: "ignore-repeat-assay",
          label: "C",
          decision:
            "Ignore Candidate 2 because it is not represented as an ordinary SNV or indel in the VCF.",
          isBest: false,
          feedback:
            "Review this choice. The fact that repeat expansions may not be represented well in ordinary VCF output is exactly why repeat-specific testing matters.",
        },
      ],
    },

    writtenSummary: {
      prompt:
        "Write a short trainee-level handover summary explaining why Candidate 2 should be prioritised, why the other candidates are weaker, and what should happen next.",
      checklist: [
        "Identifies Candidate 2 as the strongest current finding.",
        "States that Candidate 2 is a REPATX1 CAG repeat expansion.",
        "Mentions that the repeat expansion was detected by a separate repeat-expansion assay rather than ordinary VCF review.",
        "Mentions the proband has one allele in the pathogenic range.",
        "Mentions the local pathogenic threshold and the observed repeat size.",
        "Connects the finding to progressive ataxia, tremor, dysarthria, seizures, and learning difficulties.",
        "Mentions that ordinary SNV/indel and CNV review did not identify a convincing diagnosis.",
        "Explains that Candidate 1 is weaker because gene-disease validity is limited and phenotype fit is less convincing.",
        "Explains that Candidate 3 is incomplete because only one allele is identified in a recessive gene.",
        "Mentions assay limitations such as sizing uncertainty, mosaicism, interruption structure, or need for formal review.",
        "Recommends formal review and escalation through the appropriate clinical laboratory pathway.",
      ],
      modelAnswer:
        "Candidate 2 is the strongest current finding because a separate repeat-expansion assay identified a pathogenic-range REPATX1 CAG expansion, with one allele sized at 78 repeats where the local pathogenic threshold is greater than 55 repeats. This fits the patient’s progressive gait ataxia, tremor, dysarthria, intermittent seizures, and mild learning difficulties. The ordinary SNV/indel and CNV review did not identify a convincing diagnosis, which is not surprising because standard VCF-based review may not reliably size this repeat. Candidate 1 is technically convincing and appears de novo, but the gene-disease validity is limited and the phenotype is better explained by the repeat expansion. Candidate 3 is a technically convincing canonical splice variant in a recessive ataxia gene, but only one allele is identified. The safest next step is to prioritise the REPATX1 expansion for formal review, document the repeat-specific assay evidence and limitations, and escalate through the appropriate clinical laboratory pathway.",
    },
  },

  reasoningScorecard: [
    {
      category: "Test-type awareness",
      maxScore: 2,
      expectation:
        "Recognises that ordinary SNV/indel and CNV review may not reliably detect or size repeat expansions.",
    },
    {
      category: "Repeat-expansion evidence",
      maxScore: 2,
      expectation:
        "Uses repeat size, pathogenic threshold, assay type, assay quality, and phenotype fit to support Candidate 2.",
    },
    {
      category: "Candidate comparison",
      maxScore: 2,
      expectation:
        "Explains why Candidate 1 is weaker despite de novo status and why Candidate 3 is incomplete despite a strong splice consequence.",
    },
    {
      category: "Phenotype-mechanism fit",
      maxScore: 2,
      expectation:
        "Connects REPATX1 repeat-expansion disease to progressive ataxia, tremor, dysarthria, seizures, and learning difficulties.",
    },
    {
      category: "Safe escalation",
      maxScore: 2,
      expectation:
        "Recommends formal repeat-expansion review and laboratory escalation without overclaiming beyond the assay evidence.",
    },
  ],

  patient: {
    age: 13,
    sex: "Male",
  },

  referralReason:
    "A 13-year-old boy has been referred for genomic investigation because of progressive gait ataxia, tremor, dysarthria, mild learning difficulties, and intermittent seizures.",

  testType:
    "Rare disease genome sequencing with follow-up repeat-expansion testing",

  familyStructure:
    "The proband and both biological parents have been tested by genome sequencing. A separate repeat-expansion assay has also been performed for a clinically suspected repeat disorder.",

  history: [
    "Progressive gait unsteadiness beginning around age 9",
    "Tremor and coordination difficulties",
    "Dysarthria noted by neurology",
    "Mild learning difficulties",
    "Intermittent seizures",
    "Clinical team specifically queried a repeat-expansion disorder",
    "No confident SNV/indel or CNV diagnosis identified in first-pass genome review",
  ],

  phenotype: [
    "Progressive gait ataxia",
    "Tremor",
    "Dysarthria",
    "Mild learning difficulties",
    "Intermittent seizures",
  ],

  familyHistory:
    "Both parents are reportedly unaffected. No confirmed family history of progressive ataxia or repeat-expansion disease is documented, although the family history is limited.",

  serviceContext: [
    "This is a repeat-expansion case.",
    "The key issue is test type and evidence source.",
    "Standard SNV/indel calling may not reliably size repeat expansions.",
    "A repeat expansion can be the main finding even when the ordinary VCF candidate list does not show a convincing diagnosis.",
    "Your task is to recognise that the confirmed repeat-expansion assay result should be prioritised over weaker ordinary variant candidates.",
  ],

  candidateFindings: [
    {
      id: "candidate-1",
      label: "Candidate 1",
      gene: "ATAXMISS2",
      variant: "chr4:77190442 C>T",
      zygosity: "Heterozygous",
      consequence: "missense_variant",
      inheritanceSignal: "Apparent de novo with good parental coverage",
      clinicalFit:
        "ATAXMISS2 has a possible association with episodic ataxia, but the gene-disease relationship is limited and the patient has a progressive phenotype more suggestive of a repeat-expansion disorder.",
      rawEvidence: `GENE: ATAXMISS2
Known disease association: possible episodic ataxia-neurodevelopmental disorder
Reported inheritance: autosomal dominant proposed in limited reports
Known mechanism: uncertain
Gene-disease validity in local summary: limited / emerging

Variant:
chr4:77190442 C>T
Transcript: NM_350001.2
HGVS: c.899C>T p.(Pro300Leu)
Consequence: missense_variant
Protein domain: outside known recurrent functional region in local summary

VCF-style fields:
QUAL=812
FILTER=PASS
INFO: DP=49;MQ=60;QD=16.6;SOR=0.82
FORMAT: GT:AD:DP:GQ

Proband: 0/1:24,25:49:99
Mother: 0/0:42,0:42:99
Father: 0/0:41,0:41:99

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
LOEUF = 0.64
pLI = 0.27
Missense/domain note: no strong local missense constraint signal in the affected region

ClinVar-style summary:
No exact matching variant record found in local summary
Only limited reports link ATAXMISS2 to episodic ataxia phenotypes
No expert-curated definitive gene-disease relationship in local summary`,
      concern:
        "This is technically convincing and appears de novo, but the gene-disease evidence is weak and the phenotype is more consistent with the confirmed repeat-expansion result.",
    },
    {
      id: "candidate-2",
      label: "Candidate 2",
      gene: "REPATX1",
      variant: "Pathogenic-range CAG repeat expansion",
      zygosity: "Expanded allele detected",
      consequence: "repeat_expansion",
      inheritanceSignal:
        "Repeat expansion detected in proband; parental repeat sizes are below pathogenic range in the assay summary",
      clinicalFit:
        "REPATX1 repeat expansion disease is associated with progressive ataxia, tremor, dysarthria, seizures in some patients, and learning difficulties. The phenotype and test result are strongly aligned.",
      rawEvidence: `REPEAT EXPANSION LOCUS:
Gene/locus: REPATX1
Repeat motif: CAG
Disease mechanism: pathogenic repeat expansion
Known disease association: progressive ataxia-neurological syndrome
Reported features: progressive gait ataxia, tremor, dysarthria, seizures in some patients, learning difficulties

Standard genome sequencing summary:
SNV/indel pipeline: no reportable coding SNV/indel identified in REPATX1
CNV pipeline: no deletion/duplication detected across REPATX1
Short-read repeat estimate from genome data: flagged as possible expanded allele but repeat size not confidently resolved
Interpretation note: standard VCF calls do not reliably size this repeat

Separate repeat-expansion assay:
Assay type: repeat-primed PCR plus fragment sizing
Proband allele 1: 18 repeats
Proband allele 2: 78 repeats
Local pathogenic threshold: greater than 55 repeats
Result summary: one allele in pathogenic expansion range

Parental repeat assay:
Mother allele sizes: 17 and 20 repeats
Father allele sizes: 18 and 21 repeats
Parental results: no pathogenic-range expansion detected in the tested samples
Inheritance interpretation: apparent de novo or unstable expansion event possible, but requires formal laboratory review

Assay quality:
Repeat-primed PCR ladder pattern: present for expanded allele
Fragment sizing quality: acceptable
Positive control: passed
Negative control: passed
Sample identity check: consistent with proband sample
Contamination estimate: low

Technical limitations:
Repeat sizing can have uncertainty depending on assay and repeat length
Mosaicism or tissue-specific repeat size differences may not be fully captured
Exact repeat interruption structure not assessed in this summary
Long-read sequencing not performed in current evidence packet

Population / disease context:
Pathogenic-range expansions not expected in unaffected population summary
Normal-range alleles common
Intermediate alleles may require separate interpretation depending on local policy

Clinical fit:
Progressive gait ataxia: strong match
Tremor and dysarthria: strong match
Seizures: reported in subset of cases
Mild learning difficulties: compatible with reported spectrum`,
      concern:
        "This is the strongest current finding because the repeat-expansion assay directly identifies a pathogenic-range REPATX1 expansion and the phenotype strongly fits the known repeat-expansion disorder. The key point is that the evidence comes from the correct assay, not from ordinary SNV/indel calling.",
    },
    {
      id: "candidate-3",
      label: "Candidate 3",
      gene: "RECESSAT9",
      variant: "chr9:118809331 A>G",
      zygosity: "Heterozygous",
      consequence: "splice_acceptor_variant",
      inheritanceSignal: "Inherited from unaffected father",
      clinicalFit:
        "RECESSAT9 is associated with an autosomal recessive childhood ataxia syndrome. The variant is a canonical splice acceptor, but only one inherited heterozygous allele is identified.",
      rawEvidence: `GENE: RECESSAT9
Known disease association: autosomal recessive childhood ataxia syndrome
Reported inheritance: autosomal recessive
Known mechanism: biallelic loss-of-function

Variant:
chr9:118809331 A>G
Transcript: NM_350003.4
HGVS: c.744-2A>G
Consequence: splice_acceptor_variant
Splice position: canonical -2 acceptor site
Predicted effect: likely acceptor splice-site disruption

VCF-style fields:
QUAL=788
FILTER=PASS
INFO: DP=47;MQ=60;QD=16.8;SOR=0.74
FORMAT: GT:AD:DP:GQ

Proband: 0/1:24,23:47:99
Mother: 0/0:40,0:40:99
Father: 0/1:21,22:43:99

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
gnomAD AF = 0.000004
gnomAD allele count = 1
No homozygotes observed in local summary

Constraint:
LOEUF = 0.35
pLI = 0.74

ClinVar-style summary:
No exact matching variant record found in local summary
Other biallelic splice/truncating variants in RECESSAT9 have been submitted in affected individuals`,
      concern:
        "This is technically convincing as a single inherited splice variant, but it is incomplete as a recessive explanation and is weaker than the confirmed repeat expansion.",
    },
  ],

  decisionCheckpoints: [
    {
      id: "checkpoint-1",
      title: "Checkpoint 1 — Standard VCF review may miss the main mechanism",
      context:
        "The ordinary SNV/indel and CNV review did not identify a convincing diagnosis, but the clinical team suspected a repeat-expansion disorder and a separate repeat-expansion assay was performed.",
      question: "What is the key lesson from this evidence pattern?",
      options: [
        {
          label: "A",
          text: "A negative SNV/indel candidate list does not exclude a repeat-expansion disorder if the repeat was not reliably sized by the standard pipeline.",
          isCorrect: true,
          feedback:
            "Correct. Repeat expansions often require appropriate repeat-specific testing or specialist analysis.",
        },
        {
          label: "B",
          text: "Repeat expansions can always be fully interpreted from ordinary VCF SNV calls.",
          isCorrect: false,
          feedback:
            "Not quite. Standard VCF calls may not capture or size repeat expansions reliably.",
        },
        {
          label: "C",
          text: "Repeat-expansion testing should be ignored if genome sequencing has already been done.",
          isCorrect: false,
          feedback:
            "Not quite. Genome sequencing and repeat-specific testing may provide different evidence depending on the locus and pipeline.",
        },
      ],
      teachingPoint:
        "The correct test type matters. Some variant mechanisms are not safely excluded by ordinary SNV/indel review.",
    },
    {
      id: "checkpoint-2",
      title: "Checkpoint 2 — Recognise the strongest finding",
      context:
        "Candidate 2 shows a REPATX1 CAG repeat expansion with one allele sized at 78 repeats. The local pathogenic threshold is greater than 55 repeats, and the phenotype strongly matches REPATX1 repeat-expansion disease.",
      question: "Why is Candidate 2 the strongest current finding?",
      options: [
        {
          label: "A",
          text: "Because the repeat-expansion assay shows a pathogenic-range expansion and the phenotype matches the known disease mechanism.",
          isCorrect: true,
          feedback:
            "Correct. Candidate 2 is strongest because the correct assay detected the relevant disease mechanism.",
        },
        {
          label: "B",
          text: "Because repeat expansions should always be prioritised regardless of phenotype.",
          isCorrect: false,
          feedback:
            "Not quite. The repeat expansion is strong here because the assay, threshold, and phenotype all support it.",
        },
        {
          label: "C",
          text: "Because the VCF contains a clear stop-gained variant in REPATX1.",
          isCorrect: false,
          feedback:
            "Not quite. The key evidence is not a coding SNV. It is the repeat-expansion assay result.",
        },
      ],
      teachingPoint:
        "A confirmed repeat expansion should be interpreted using repeat-specific evidence, thresholds, assay quality, and phenotype fit.",
    },
    {
      id: "checkpoint-3",
      title: "Checkpoint 3 — Do not over-prioritise a weaker de novo SNV",
      context:
        "Candidate 1 is a technically convincing apparent de novo missense variant, but the gene-disease validity is limited and the phenotype is more consistent with the confirmed repeat expansion.",
      question: "Why should Candidate 1 not outrank Candidate 2?",
      options: [
        {
          label: "A",
          text: "Because de novo SNVs are never relevant.",
          isCorrect: false,
          feedback:
            "Not quite. De novo SNVs can be very important, but they still need gene-disease and phenotype support.",
        },
        {
          label: "B",
          text: "Because a confirmed mechanism-matched repeat expansion is stronger than a de novo missense variant in a weakly supported gene.",
          isCorrect: true,
          feedback:
            "Correct. Candidate 2 has stronger disease-mechanism and phenotype support.",
        },
        {
          label: "C",
          text: "Because Candidate 1 has poor read evidence.",
          isCorrect: false,
          feedback:
            "Not quite. Candidate 1 is technically strong. Its limitation is clinical and gene-disease support.",
        },
      ],
      teachingPoint:
        "A technically clean de novo variant should not distract from a confirmed diagnosis-level finding from the correct assay.",
    },
    {
      id: "checkpoint-4",
      title: "Checkpoint 4 — Incomplete recessive evidence",
      context:
        "Candidate 3 is a canonical splice acceptor variant in a recessive ataxia gene, inherited from the father. No second allele is identified.",
      question: "What is the safest interpretation of Candidate 3?",
      options: [
        {
          label: "A",
          text: "It may be a real carrier-level finding, but it does not currently explain the case without a second relevant allele.",
          isCorrect: true,
          feedback:
            "Correct. Candidate 3 is not the main explanation because the recessive model is incomplete.",
        },
        {
          label: "B",
          text: "It is diagnostic because splice acceptor variants are always sufficient.",
          isCorrect: false,
          feedback:
            "Not quite. Variant consequence must fit the inheritance model.",
        },
        {
          label: "C",
          text: "It should be prioritised above Candidate 2 because ordinary VCF variants are easier to analyse than repeat expansions.",
          isCorrect: false,
          feedback:
            "Not quite. Ease of analysis does not determine clinical relevance.",
        },
      ],
      teachingPoint:
        "A strong-looking coding or splice variant still needs the right inheritance model and overall evidence context.",
    },
    {
      id: "checkpoint-5",
      title: "Checkpoint 5 — Safe service-style next step",
      context:
        "Candidate 2 is the strongest current finding. Candidate 1 is a weaker de novo SNV in a limited-evidence gene. Candidate 3 is incomplete recessive evidence.",
      question: "What is the safest next step?",
      options: [
        {
          label: "A",
          text: "Prioritise Candidate 2 for formal review, document that the diagnosis-level evidence comes from repeat-expansion testing, and explain why the ordinary VCF candidates are weaker.",
          isCorrect: true,
          feedback:
            "Correct. This is safe, reviewable, and makes the assay source of the evidence clear.",
        },
        {
          label: "B",
          text: "Ignore Candidate 2 because repeat expansions are not represented as ordinary SNVs.",
          isCorrect: false,
          feedback:
            "Not quite. That is exactly why the separate assay matters.",
        },
        {
          label: "C",
          text: "Report Candidate 1 because de novo variants should always outrank repeat-expansion findings.",
          isCorrect: false,
          feedback:
            "Not quite. Candidate 2 is mechanism-matched and confirmed by the appropriate assay.",
        },
      ],
      teachingPoint:
        "Safe repeat-expansion interpretation means clearly stating which assay detected the expansion and why standard VCF review was not sufficient.",
    },
  ],

  finalReflection:
    "A safe trainee-level conclusion would be that Candidate 2 is the strongest current finding because a separate repeat-expansion assay identified a pathogenic-range REPATX1 CAG expansion, and the patient’s progressive ataxia, tremor, dysarthria, seizures, and learning difficulties fit the known repeat-expansion disease spectrum. Candidate 1 is technically convincing and appears de novo, but the gene-disease evidence is weak and it should not distract from the confirmed repeat-expansion result. Candidate 3 is a technically convincing single splice acceptor variant in a recessive ataxia gene, but it is incomplete without a second allele. The safest next step is to prioritise the confirmed REPATX1 expansion for formal review, document the repeat-specific assay evidence and limitations, and escalate through the appropriate clinical laboratory pathway.",
};