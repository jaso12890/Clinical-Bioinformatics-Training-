export const case36 = {
  id: "case-36",
  slug: "repeat-expansion-suspected-not-assessed-case",
  title: "Case 36: Repeat expansion suspected but not assessed",
  level: "Advanced",
  summary:
    "A repeat-expansion limitation case focused on recognising when the current analysis does not exclude a clinically suspected repeat disorder.",

  visualisationExampleId: null,

  assessmentFocus: [
    "Repeat-expansion test limitations",
    "Assay-appropriate interpretation",
    "Avoiding false reassurance",
    "SNV/indel and CNV limitation awareness",
    "Progressive ataxia phenotype reasoning",
    "Incomplete recessive evidence",
    "Weak gene-disease validity",
    "Safe escalation when the correct mechanism has not been assessed",
  ],

  guidedTutorMode: {
    type: "static-rule-based",
    description:
      "Uses built-in hints, checkpoint feedback, model answers, and self-check criteria to support safe case reasoning.",
  },

  phase5Assessment: {
    candidateRanking: {
      prompt:
        "Rank the findings from highest to lowest review priority in this case.",
      correctOrder: ["candidate-2", "candidate-3", "candidate-1", "candidate-4"],
      explanation:
        "Candidate 2 is the highest-priority issue because it represents a clinically important limitation: the phenotype remains compatible with a repeat-expansion disorder, but repeat sizing has not been performed or reported. Candidate 3 is a technically convincing splice variant in a recessive ataxia gene, but it is only one allele and is incomplete as an explanation. Candidate 1 is technically convincing and appears de novo, but weak gene-disease validity and uncertain mechanism mean it should not be forced as the diagnosis. Candidate 4 is likely a real duplication, but it is inherited, overlaps population CNVs, and lacks established triplosensitivity.",
    },

    escalationDecision: {
      prompt:
        "Choose the safest next action for this case.",
      options: [
        {
          id: "document-repeat-limitation",
          label: "A",
          decision:
            "Document that no convincing SNV/CNV candidate has been identified, state that repeat expansion has not been assessed, and escalate for the appropriate repeat-expansion pathway if clinically indicated.",
          isBest: true,
          feedback:
            "Best decision. This keeps the unresolved repeat-expansion limitation visible and avoids false reassurance from a negative SNV/CNV review.",
        },
        {
          id: "force-denovo-snv",
          label: "B",
          decision:
            "Report Candidate 1 as the diagnosis because it is technically clean and appears de novo.",
          isBest: false,
          feedback:
            "Review this choice. Candidate 1 is technically clean, but the gene-disease validity is weak and it should not replace the unresolved repeat-expansion question.",
        },
        {
          id: "exclude-repeat-expansion",
          label: "C",
          decision:
            "State that genome analysis has excluded repeat-expansion disease because no coding SNV/indel or CNV was found.",
          isBest: false,
          feedback:
            "Review this choice. Standard SNV/indel and CNV review may not reliably assess repeat expansions.",
        },
      ],
    },

    writtenSummary: {
      prompt:
        "Write a short trainee-level handover summary explaining why this case should not be closed as a negative SNV/CNV result, what the repeat-expansion limitation is, and how the other candidates should be handled.",
      checklist: [
        "States that there is no convincing SNV, indel, or CNV diagnosis from the current evidence.",
        "Identifies Candidate 2 as a repeat-expansion differential/limitation rather than a confirmed variant.",
        "Explains that repeat sizing has not been performed or reported.",
        "Mentions that standard SNV/indel and CNV review may not exclude repeat-expansion disease.",
        "Connects the phenotype to a possible repeat-expansion disorder, including progressive ataxia, tremor, dysarthria, and worsening coordination.",
        "Explains that Candidate 1 is technically convincing but weakened by limited gene-disease validity and uncertain mechanism.",
        "Explains that Candidate 3 is a single heterozygous allele in a recessive gene and is incomplete.",
        "Explains that Candidate 4 is a technically plausible inherited duplication with weak triplosensitivity/population support.",
        "Avoids claiming that repeat-expansion disease is confirmed.",
        "Avoids claiming that repeat-expansion disease is excluded.",
        "Recommends escalation for the appropriate repeat-expansion test or specialist pathway if clinically indicated.",
      ],
      modelAnswer:
        "There is no convincing SNV, indel, or CNV diagnosis from the current evidence. Candidate 2 is not a confirmed variant result; it is a key limitation because the patient’s progressive gait ataxia, tremor, dysarthria, mild learning difficulties, and worsening coordination remain compatible with a repeat-expansion disorder, but no validated repeat sizing, repeat-primed PCR, fragment sizing, long-read repeat sizing, or validated repeat-expansion caller output is included in the current evidence packet. Candidate 1 is technically convincing and appears de novo, but the gene-disease validity is limited and the mechanism is uncertain, so it should not be forced as the diagnosis. Candidate 3 is a technically convincing canonical splice variant in a recessive ataxia gene, but only one allele is identified. Candidate 4 is a technically plausible inherited duplication, but population overlap and lack of established triplosensitivity make it weak. The safest next step is to document that repeat-expansion disease has not been excluded and escalate for the appropriate repeat-expansion test or specialist pathway if clinically indicated.",
    },
  },

  reasoningScorecard: [
    {
      category: "Test limitation recognition",
      maxScore: 2,
      expectation:
        "Recognises that the current evidence packet does not include validated repeat-expansion assessment.",
    },
    {
      category: "Avoiding false reassurance",
      maxScore: 2,
      expectation:
        "Does not claim that a negative SNV/indel and CNV review excludes repeat-expansion disease.",
    },
    {
      category: "Phenotype-mechanism fit",
      maxScore: 2,
      expectation:
        "Links progressive ataxia, tremor, dysarthria, and worsening coordination to the repeat-expansion differential.",
    },
    {
      category: "Candidate comparison",
      maxScore: 2,
      expectation:
        "Explains why Candidate 1, Candidate 3, and Candidate 4 are not sufficient explanations.",
    },
    {
      category: "Safe escalation",
      maxScore: 2,
      expectation:
        "Recommends documentation of the limitation and escalation for an appropriate repeat-expansion test or specialist pathway.",
    },
  ],

  patient: {
    age: 15,
    sex: "Female",
  },

  referralReason:
    "A 15-year-old girl has been referred for rare disease genome analysis because of progressive gait ataxia, tremor, dysarthria, mild learning difficulties, and worsening coordination.",

  testType:
    "Rare disease genome sequencing with SNV/indel and CNV analysis; no validated repeat-expansion assay included in the current evidence packet",

  familyStructure:
    "The proband and both biological parents have been tested by genome sequencing. Both parents are reportedly unaffected.",

  history: [
    "Progressive gait unsteadiness beginning around age 11",
    "Tremor and worsening coordination difficulties",
    "Dysarthria noted by neurology",
    "Mild learning difficulties",
    "No confirmed seizures",
    "Clinical team notes that a repeat-expansion disorder remains in the differential diagnosis",
    "No known previous molecular diagnosis",
  ],

  phenotype: [
    "Progressive gait ataxia",
    "Tremor",
    "Dysarthria",
    "Mild learning difficulties",
    "Worsening coordination",
  ],

  familyHistory:
    "Both parents are reportedly unaffected. No confirmed family history of progressive ataxia, tremor, dysarthria, or known repeat-expansion disease is documented, although the family history is limited.",

  serviceContext: [
    "This is a repeat-expansion limitation case.",
    "The key issue is that the currently available evidence does not include a validated repeat-expansion result.",
    "Standard SNV/indel and CNV review may not reliably exclude repeat-expansion disorders.",
    "Your task is to avoid forcing an ordinary variant diagnosis when the phenotype still suggests a mechanism that has not been properly assessed.",
    "The safest conclusion may be documented uncertainty and escalation for the correct test or pathway.",
  ],

  candidateFindings: [
    {
      id: "candidate-1",
      label: "Candidate 1",
      gene: "ATAXNEW6",
      variant: "chr4:77190442 C>T",
      zygosity: "Heterozygous",
      consequence: "missense_variant",
      inheritanceSignal: "Apparent de novo with good parental coverage",
      clinicalFit:
        "ATAXNEW6 has a possible association with ataxia, but the gene-disease relationship is limited and the phenotype is progressive, which keeps a repeat-expansion disorder in the differential.",
      rawEvidence: `GENE: ATAXNEW6
Known disease association: possible episodic/progressive ataxia-neurodevelopmental disorder
Reported inheritance: autosomal dominant proposed in limited reports
Known mechanism: uncertain
Gene-disease validity in local summary: limited / emerging

Variant:
chr4:77190442 C>T
Transcript: NM_360001.2
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
LOEUF = 0.66
pLI = 0.23
Missense/domain note: no strong local missense constraint signal in affected region

ClinVar-style summary:
No exact matching variant record found in local summary
Only limited reports link ATAXNEW6 to ataxia phenotypes
No expert-curated definitive gene-disease relationship in local summary`,
      concern:
        "This is technically convincing and appears de novo, but weak gene-disease validity and limited mechanism evidence mean it should not be forced as the diagnosis when a repeat-expansion disorder remains clinically suspected.",
    },
    {
      id: "candidate-2",
      label: "Candidate 2",
      gene: "REPEATX2 locus",
      variant: "Repeat expansion differential not assessed",
      zygosity: "No validated repeat size available",
      consequence: "repeat_expansion_not_assessed",
      inheritanceSignal: "Cannot be assessed from the current evidence",
      clinicalFit:
        "The phenotype of progressive ataxia, tremor, dysarthria, and worsening coordination is compatible with a repeat-expansion disorder, but the current evidence packet does not include a validated repeat-expansion assay or reliable repeat sizing.",
      rawEvidence: `REPEAT EXPANSION LOCUS:
Gene/locus: REPEATX2
Disease mechanism: pathogenic repeat expansion
Known disease association: progressive ataxia-neurological syndrome
Reported features: progressive gait ataxia, tremor, dysarthria, coordination difficulties, learning issues in some individuals

Current genome sequencing evidence:
SNV/indel pipeline: no reportable coding SNV/indel identified at REPEATX2
CNV pipeline: no deletion/duplication detected across REPEATX2
Standard VCF: no small variant explaining repeat-expansion mechanism
Short-read repeat estimate: not reported
Repeat length: not available
Expansion status: not assessed in current evidence packet

Assay limitation:
No repeat-primed PCR result available
No fragment sizing result available
No validated repeat-expansion caller output included
No long-read repeat sizing available
Repeat interruption status: not assessed
Methylation status: not assessed

Short-read context:
Locus contains repetitive sequence
Alignment around repeat is not reliable for repeat sizing in the current summary
Absence of a coding SNV/indel at this locus does not exclude repeat expansion disease

Family evidence:
No parental repeat sizes available
No segregation information for repeat length available

Service note:
If the clinical team still suspects a repeat-expansion disorder, the correct action is to consider the appropriate repeat-expansion test or specialist pathway rather than treating the current genome SNV/CNV review as exclusionary.`,
      concern:
        "This is not a called diagnostic variant. It is a critical limitation: the current analysis does not exclude a repeat-expansion disorder because repeat sizing has not been performed or reported.",
    },
    {
      id: "candidate-3",
      label: "Candidate 3",
      gene: "RECESSAT6",
      variant: "chr9:118809331 G>A",
      zygosity: "Heterozygous",
      consequence: "splice_acceptor_variant",
      inheritanceSignal: "Inherited from unaffected father",
      clinicalFit:
        "RECESSAT6 is associated with an autosomal recessive childhood ataxia syndrome. A canonical splice acceptor variant could be relevant, but only one inherited heterozygous allele is identified.",
      rawEvidence: `GENE: RECESSAT6
Known disease association: autosomal recessive childhood ataxia syndrome
Reported inheritance: autosomal recessive
Known mechanism: biallelic loss-of-function

Variant:
chr9:118809331 G>A
Transcript: NM_360003.4
HGVS: c.744-2G>A
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
Other biallelic splice/truncating variants in RECESSAT6 have been submitted in affected individuals`,
      concern:
        "This is technically convincing as a single inherited splice variant, but it is incomplete as a recessive explanation without a second relevant allele.",
    },
    {
      id: "candidate-4",
      label: "Candidate 4",
      gene: "CNVATX3 region",
      variant: "chr12:55210000-55256000 duplication",
      zygosity: "Heterozygous duplication",
      consequence: "copy_number_gain",
      inheritanceSignal: "Inherited from unaffected mother",
      clinicalFit:
        "The duplicated interval contains a possible neurological candidate gene, but the duplication is inherited, overlaps population CNVs, and copy-number gain is not an established disease mechanism.",
      rawEvidence: `CNV REGION: chr12:55210000-55256000
CNV type: duplication
Estimated size: 46 kb
Copy-number state: possible three-copy gain

Gene:
CNVATX3
Known disease association: possible neurological association in limited reports
Known mechanism: uncertain
Triplosensitivity evidence: not established

Affected region:
Partial duplication of exons 2–3 of 9
Orientation unknown
Predicted transcript effect uncertain

Inheritance:
Proband: duplication present
Mother: duplication present
Father: duplication not detected
Inheritance signal: maternally inherited

CNV caller summary:
Caller 1: duplication PASS
Caller 2: duplication supported
Quality score: 104
Number of affected targets/windows: 24

Read-depth evidence:
Expected normalised depth in diploid regions: ~1.00
Proband normalised depth across interval: ~1.45
Mother normalised depth across interval: ~1.47
Father normalised depth across interval: ~1.02
Flanking regions: mostly normal

Breakpoint evidence:
Split reads: absent
Paired-end support: imprecise
Breakpoint not resolved

B-allele / SNP pattern:
B-allele pattern compatible with duplication in proband and mother

Population:
Overlapping duplications observed in local population CNV summary
Partial benign overlap reported

Technical notes:
Technically plausible duplication
Clinical relevance uncertain because inherited and no established gain mechanism`,
      concern:
        "This is likely a real duplication, but it is weak as an explanation because it is inherited from an unaffected mother, overlaps population CNVs, and lacks a known triplosensitivity mechanism.",
    },
  ],

  decisionCheckpoints: [
    {
      id: "checkpoint-1",
      title: "Checkpoint 1 — Repeat expansion not assessed is a real limitation",
      context:
        "The phenotype suggests a possible repeat-expansion disorder, but the current evidence packet has no validated repeat size, no repeat-primed PCR result, no fragment sizing result, and no validated repeat-expansion caller output.",
      question: "What is the safest interpretation of Candidate 2?",
      options: [
        {
          label: "A",
          text: "The repeat-expansion disorder is excluded because no coding SNV/indel was found.",
          isCorrect: false,
          feedback:
            "Not quite. Ordinary SNV/indel review does not reliably exclude repeat expansions.",
        },
        {
          label: "B",
          text: "The repeat-expansion diagnosis is confirmed because the phenotype fits.",
          isCorrect: false,
          feedback:
            "Not quite. Phenotype suspicion is not confirmation. The correct repeat-specific evidence is needed.",
        },
        {
          label: "C",
          text: "The current analysis does not assess or exclude the repeat expansion, so this limitation should be documented and escalated if clinically suspected.",
          isCorrect: true,
          feedback:
            "Correct. Candidate 2 is a limitation/differential point, not a confirmed variant result.",
        },
      ],
      teachingPoint:
        "A test limitation can be just as important as a candidate variant when it affects whether the referral question has been answered.",
    },
    {
      id: "checkpoint-2",
      title: "Checkpoint 2 — Do not force a weak de novo SNV diagnosis",
      context:
        "Candidate 1 is technically convincing and appears de novo, but ATAXNEW6 has limited gene-disease validity and uncertain mechanism.",
      question: "Why should Candidate 1 not be forced as the diagnosis?",
      options: [
        {
          label: "A",
          text: "Because de novo variants are never relevant.",
          isCorrect: false,
          feedback:
            "Not quite. De novo variants can be highly relevant, but only when the gene, mechanism, and phenotype evidence support them.",
        },
        {
          label: "B",
          text: "Because weak gene-disease validity and the unassessed repeat-expansion differential make it unsafe to over-interpret the SNV.",
          isCorrect: true,
          feedback:
            "Correct. Candidate 1 may be noted, but it should not replace the unresolved repeat-expansion question.",
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
        "A technically clean variant in a weakly supported gene should not be used to close a case when a major disease mechanism remains untested.",
    },
    {
      id: "checkpoint-3",
      title: "Checkpoint 3 — Incomplete recessive evidence",
      context:
        "Candidate 3 is a canonical splice acceptor variant in a recessive ataxia gene, inherited from the father. No second allele is identified.",
      question: "What is the safest interpretation of Candidate 3?",
      options: [
        {
          label: "A",
          text: "It is diagnostic because splice acceptor variants are always sufficient.",
          isCorrect: false,
          feedback:
            "Not quite. For a recessive condition, one heterozygous allele is not usually enough.",
        },
        {
          label: "B",
          text: "It may be a real carrier-level finding, but it does not currently explain the case without a second relevant allele.",
          isCorrect: true,
          feedback:
            "Correct. Candidate 3 is technically convincing but incomplete as an explanation.",
        },
        {
          label: "C",
          text: "It proves that the repeat-expansion differential is impossible.",
          isCorrect: false,
          feedback:
            "Not quite. A single recessive allele does not exclude a separate repeat-expansion mechanism.",
        },
      ],
      teachingPoint:
        "A plausible variant in one gene does not automatically resolve a case if the inheritance model is incomplete.",
    },
    {
      id: "checkpoint-4",
      title: "Checkpoint 4 — Technically real CNV but weak clinical relevance",
      context:
        "Candidate 4 is a technically plausible duplication inherited from the mother, with population overlap and no established copy-number gain mechanism.",
      question: "Why is Candidate 4 weak?",
      options: [
        {
          label: "A",
          text: "Because inherited CNVs are always artefacts.",
          isCorrect: false,
          feedback:
            "Not quite. Candidate 4 may be real. The issue is clinical relevance.",
        },
        {
          label: "B",
          text: "Because inheritance from an unaffected parent, population overlap, and lack of triplosensitivity reduce plausibility.",
          isCorrect: true,
          feedback:
            "Correct. Candidate 4 is a real-looking CNV but not a strong disease explanation.",
        },
        {
          label: "C",
          text: "Because duplications can never be pathogenic.",
          isCorrect: false,
          feedback:
            "Not quite. Duplications can be pathogenic when the gene, dosage mechanism, inheritance, and phenotype evidence fit.",
        },
      ],
      teachingPoint:
        "A technically plausible CNV still needs dosage mechanism and clinical fit.",
    },
    {
      id: "checkpoint-5",
      title: "Checkpoint 5 — Safe service-style next step",
      context:
        "There is no convincing SNV, indel, or CNV explanation. The phenotype still raises a repeat-expansion differential, but repeat sizing has not been performed or reported.",
      question: "What is the safest next step?",
      options: [
        {
          label: "A",
          text: "Document no convincing current SNV/CNV candidate, state that repeat expansion has not been assessed, and escalate for the appropriate repeat-expansion pathway if clinically indicated.",
          isCorrect: true,
          feedback:
            "Correct. This is the safest service-style conclusion because it keeps the unresolved limitation visible.",
        },
        {
          label: "B",
          text: "Report Candidate 1 because it is the cleanest available variant.",
          isCorrect: false,
          feedback:
            "Not quite. The cleanest available variant is not necessarily a valid explanation.",
        },
        {
          label: "C",
          text: "State that genome analysis fully excludes repeat-expansion disease.",
          isCorrect: false,
          feedback:
            "Not quite. The current evidence does not support that exclusion.",
        },
      ],
      teachingPoint:
        "Safe practice means recognising when the current test has not answered the clinical question.",
    },
  ],

  finalReflection:
    "A safe trainee-level conclusion would be that there is no convincing SNV, indel, or CNV candidate from the current evidence. Candidate 1 is technically convincing and appears de novo, but the gene-disease relationship is weak and it should not be forced as a diagnosis. Candidate 3 is a technically convincing single splice acceptor variant in a recessive ataxia gene, but it is incomplete without a second allele. Candidate 4 is a technically plausible inherited duplication but has weak dosage and population support. The key point is Candidate 2: the clinical presentation remains compatible with a repeat-expansion disorder, but repeat sizing has not been performed or reported in the current evidence packet. The safest next step is to document that repeat-expansion disease has not been excluded and escalate for the appropriate repeat-expansion test or specialist pathway if clinically indicated.",
};