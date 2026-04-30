export const case11 = {
  id: "case-11",
  slug: "cancer-panel-style-case",
  title: "Case 11: Cancer panel-style case",
  level: "Beginner",
  summary:
    "A cancer panel-style case focused on tumour-only evidence, somatic/germline boundaries, technical confidence, actionability, and safe reporting scope.",

  visualisationExampleId: null,

  assessmentFocus: [
    "Tumour-only interpretation boundaries",
    "Somatic driver prioritisation",
    "Possible germline implication escalation",
    "Low-level artefact recognition",
    "Copy-number evidence review",
    "Safe oncology handover and reporting scope",
  ],

  guidedTutorMode: {
    type: "static-rule-based",
    description:
      "Uses built-in hints, checkpoint feedback, model answers, and self-check criteria to support safe case reasoning.",
  },

  phase5Assessment: {
    candidateRanking: {
      prompt:
        "Rank the findings from strongest to weakest based on tumour-panel relevance, technical confidence, tumour-type/actionability context, VAF interpretation, germline-boundary implications, artefact risk, and whether each finding should drive the case conclusion.",
      correctOrder: [
        "candidate-4",
        "candidate-5",
        "candidate-1",
        "candidate-3",
        "candidate-2",
      ],
      explanation:
        "Candidate 4 is strongest for oncology molecular review because it is a technically robust recurrent activating hotspot in a tumour-type relevant driver gene, with VAF compatible with the tumour purity estimate. Candidate 5 is highly important but should drive germline-consideration escalation rather than be labelled germline from tumour-only data. Candidate 1 is technically convincing and may be relevant, but tumour-only data cannot resolve whether the finding is somatic or constitutional. Candidate 3 is a borderline copy-number gain with noisy coverage and does not clearly meet high-level focal amplification evidence. Candidate 2 is weakest because it is low VAF with strand imbalance, read-end clustering, lower mapping quality, and an FFPE-style artefact warning.",
    },

    escalationDecision: {
      prompt:
        "Choose the safest next action for this tumour-only candidate set.",
      options: [
        {
          id: "report-candidate-5-germline",
          label: "A",
          decision:
            "Report Candidate 5 as confirmed germline because the tumour VAF is near 50% and the gene has cancer predisposition relevance.",
          isBest: false,
          feedback:
            "Review this choice. Tumour-only sequencing cannot confirm constitutional origin. A near-50% VAF can raise possible germline significance, but it must be escalated through the appropriate pathway rather than reported as confirmed germline.",
        },
        {
          id: "prioritise-candidate-4-and-flag-candidate-5",
          label: "B",
          decision:
            "Prioritise Candidate 4 for oncology molecular review, flag Candidate 5 for germline-consideration escalation, and document tumour-only limitations.",
          isBest: true,
          feedback:
            "Best decision. This separates the strongest tumour driver candidate from a possible constitutional-risk finding, while keeping the tumour-only scope clear and documenting technical limitations.",
        },
        {
          id: "ignore-tumour-only-findings",
          label: "C",
          decision:
            "Hold all findings because tumour-only data cannot distinguish somatic from germline origin without a matched normal sample.",
          isBest: false,
          feedback:
            "Review this choice. Tumour-only data has limitations, but it can still identify findings for oncology review. The key is to document scope and avoid overclaiming germline or somatic origin where unsupported.",
        },
      ],
    },

    writtenSummary: {
      prompt:
        "Write a short trainee-level handover summary explaining the strongest tumour-panel finding, the tumour-only interpretation boundary, the possible germline implication, and why the other findings are weaker.",
      checklist: [
        "Names Candidate 4 as the strongest tumour-panel finding for oncology molecular review.",
        "Explains that Candidate 4 is a recurrent activating hotspot in a tumour-type relevant driver gene.",
        "Mentions that Candidate 4 has strong technical evidence and VAF compatible with tumour purity.",
        "Flags Candidate 5 as technically convincing with possible constitutional significance.",
        "Clearly states that tumour-only data cannot confirm germline status.",
        "Mentions Candidate 1 as technically convincing but unresolved for somatic versus germline origin.",
        "Explains why Candidate 2 is weak because of low VAF and FFPE-style artefact features.",
        "Explains why Candidate 3 should not be overcalled as a high-level amplification.",
        "Keeps oncology review and germline-consideration escalation separate.",
      ],
      modelAnswer:
        "Candidate 4 is the strongest tumour-panel finding for oncology molecular review. It is a technically robust recurrent activating hotspot in DRIV1, a tumour-type relevant driver gene in the local lung adenocarcinoma pathway summary. The call has high depth, strong mapping quality, balanced strand support, no local artefact flag, and a VAF of 34%, which is compatible with the tumour purity estimate. Candidate 5 is also technically convincing and important because it is a canonical splice acceptor variant in a cancer predisposition gene with VAF close to 50%, but tumour-only data cannot confirm whether it is germline, somatic, or influenced by tumour copy-number context. It should therefore be flagged through the appropriate germline-consideration pathway rather than labelled as confirmed germline. Candidate 1 is technically convincing but also has unresolved tumour-only origin. Candidate 2 is weak because it is low-level and artefact-like, with strand imbalance, read-end clustering, lower mapping quality, and an FFPE-style warning. Candidate 3 is a borderline noisy copy-number gain and should not be overcalled as a high-level focal amplification. The safest next step is to document tumour-only limitations, prioritise Candidate 4 for oncology review, and escalate Candidate 5 appropriately according to local policy.",
    },
  },

  reasoningScorecard: [
    {
      category: "Tumour-only scope",
      maxScore: 2,
      expectation:
        "Recognises that tumour-only sequencing can support oncology review but cannot confirm somatic or germline origin without appropriate follow-up.",
    },
    {
      category: "Somatic driver prioritisation",
      maxScore: 2,
      expectation:
        "Prioritises the recurrent hotspot driver with strong tumour-type relevance, technical support, and VAF compatibility with tumour purity.",
    },
    {
      category: "Germline-boundary awareness",
      maxScore: 2,
      expectation:
        "Flags possible constitutional significance through the correct escalation pathway without calling a tumour-only finding confirmed germline.",
    },
    {
      category: "Technical artefact recognition",
      maxScore: 2,
      expectation:
        "Uses low VAF, strand imbalance, read-end clustering, lower mapping quality, FFPE artefact warning, and noisy copy-number evidence to deprioritise weak findings.",
    },
    {
      category: "Safe oncology handover",
      maxScore: 2,
      expectation:
        "Separates oncology molecular review, germline-consideration escalation, and technical caveats in a clear, reviewable trainee-level summary.",
    },
  ],

  patient: {
    age: 62,
    sex: "Female",
  },

  referralReason:
    "A 62-year-old woman with metastatic lung adenocarcinoma has had tumour-only panel sequencing requested to identify potentially relevant somatic findings for oncology review.",

  testType: "Tumour-only targeted cancer panel sequencing",

  familyStructure:
    "No matched normal sample has been tested in this workflow. The test is performed on tumour DNA only, so somatic versus germline origin cannot be confirmed from this result alone.",

  history: [
    "Metastatic lung adenocarcinoma confirmed by histology",
    "Tumour block available for targeted sequencing",
    "Estimated tumour purity from pathology review: approximately 35%",
    "No matched blood or constitutional sample included in the test",
    "No known previous molecular result available in the record shown",
  ],

  phenotype: [
    "Metastatic lung adenocarcinoma",
    "Tumour-only sequencing context",
    "Potential treatment-relevant somatic analysis requested",
    "Need to avoid over-calling germline status from tumour-only data",
  ],

  familyHistory:
    "Family history is not fully available in the sequencing request. No confirmed hereditary cancer syndrome is documented in the information shown.",

  serviceContext: [
    "This is a tumour-only cancer panel case, not a rare disease trio case.",
    "Your role is to prioritise technically reliable and clinically relevant tumour findings for appropriate oncology review.",
    "Tumour-only data cannot by itself prove whether a variant is somatic or germline.",
    "Variants in genes with possible inherited cancer implications may need escalation through a separate pathway rather than being labelled as germline from the tumour result.",
    "Low-level artefact-like calls, especially in FFPE-style samples, should not be over-prioritised without review.",
  ],

  candidateFindings: [
    {
      id: "candidate-1",
      label: "Candidate 1",
      gene: "SUPP2",
      variant: "chr13:32914438 A>AT",
      zygosity: "Tumour VAF 48%",
      consequence: "frameshift_variant",
      inheritanceSignal: "Tumour-only finding; germline/somatic origin not confirmed",
      clinicalFit:
        "SUPP2 is a tumour suppressor gene included on the panel. The frameshift consequence may be relevant, but the tumour-only VAF is close to 50%, so germline possibility cannot be excluded without a matched normal or appropriate follow-up.",
      rawEvidence: `GENE: SUPP2
Panel context: tumour suppressor gene on targeted oncology panel
Known cancer role in local summary: DNA repair / tumour suppressor pathway
Potential inherited cancer relevance: yes, if constitutional

Variant:
chr13:32914438 A>AT
Transcript: NM_900001.4
HGVS: c.771dup p.(Glu258Argfs*17)
Consequence: frameshift_variant

Sample context:
Sample type: FFPE tumour
Tumour purity estimate: ~35%
Matched normal sample: not tested
Assay type: targeted tumour-only panel

Panel-style fields:
Total depth at site: 812
Ref reads: 421
Alt reads: 391
VAF: 48.2%
Mean mapping quality: 60
Base quality summary: high
Strand support: ALT reads on both forward and reverse strands
Read position: ALT reads distributed across reads

Caller summary:
QUAL=1840
FILTER=PASS
Local artefact flag: no

Population / germline context:
Population AF in local summary: very rare
Tumour-only VAF near 50%: possible somatic or possible germline
Matched normal required to distinguish origin

Knowledgebase-style summary:
Loss-of-function variants in SUPP2 can be clinically relevant depending on tumour type and pathway context
Constitutional implications cannot be assessed from tumour-only data alone`,
      concern:
        "This is technically convincing, but the key boundary is interpretation scope. It may be important, but tumour-only data should not be used to label the variant as germline or somatic with certainty.",
    },
    {
      id: "candidate-2",
      label: "Candidate 2",
      gene: "ARTF2",
      variant: "chr8:55201991 C>T",
      zygosity: "Tumour VAF 3.1%",
      consequence: "missense_variant",
      inheritanceSignal: "Low-level tumour-only call",
      clinicalFit:
        "ARTF2 has a possible cancer association, but the specific call is low-level and has a pattern that could fit FFPE or sequencing artefact.",
      rawEvidence: `GENE: ARTF2
Panel context: cancer panel gene with limited tumour-type relevance
Known cancer role in local summary: possible pathway association, not a strong driver in this tumour type

Variant:
chr8:55201991 C>T
Transcript: NM_900002.2
HGVS: c.101C>T p.(Pro34Leu)
Consequence: missense_variant

Sample context:
Sample type: FFPE tumour
Tumour purity estimate: ~35%
Matched normal sample: not tested
Assay type: targeted tumour-only panel

Panel-style fields:
Total depth at site: 516
Ref reads: 500
Alt reads: 16
VAF: 3.1%
Mean mapping quality: 42
Base quality summary: mixed
Strand support: 14 of 16 ALT reads on one strand
Read position: 12 of 16 ALT reads near read ends

Caller summary:
QUAL=38
FILTER=PASS
Local artefact flag: C>T artefact warning
Context: cytosine deamination-style pattern possible in FFPE sample

Population / germline context:
Population AF in local summary: not observed
Low VAF makes constitutional origin less likely, but technical artefact is a concern

Knowledgebase-style summary:
No exact clinically actionable local record
Gene/tumour-type relevance is limited in local summary`,
      concern:
        "This should be treated cautiously. Low VAF, strand imbalance, read-end clustering, lower mapping quality, and an FFPE-style artefact warning make it weak for prioritisation.",
    },
    {
      id: "candidate-3",
      label: "Candidate 3",
      gene: "AMPD4",
      variant: "chr7:55010000-55290000 amplification",
      zygosity: "Copy-number gain",
      consequence: "copy_number_gain",
      inheritanceSignal: "Tumour-only copy-number finding",
      clinicalFit:
        "AMPD4 is a cancer pathway gene, but the copy-number gain is borderline and occurs in a region with noisy coverage. The evidence does not clearly support a high-level focal amplification.",
      rawEvidence: `CNV / COPY-NUMBER FINDING:
Region: chr7:55010000-55290000
Gene: AMPD4
CNV type: copy-number gain
Estimated size: 280 kb

Sample context:
Sample type: FFPE tumour
Tumour purity estimate: ~35%
Matched normal sample: not tested
Assay type: targeted tumour-only panel

Copy-number caller summary:
Caller status: borderline gain
Estimated tumour copy number: 3.1
Panel baseline normalised depth: 1.18
Expected high-level amplification depth: usually much higher in this assay context
Number of targeted amplicons/exons affected: 5
Quality score: 41

Read-depth evidence:
Depth increase is uneven across targeted regions
Two exons show normal depth
Three exons show mild elevation
GC-content warning present
Local coverage variability warning present

B-allele / SNP pattern:
Too few informative SNPs to support copy-number state

Population / technical context:
Known recurrent high-level amplification region: nearby but not clearly matched
Benign or technical coverage variability reported in local panel summary

Knowledgebase-style summary:
High-level focal amplification of AMPD4 may be relevant in some tumours
This call does not clearly meet high-level focal amplification evidence in the local summary`,
      concern:
        "This should not be overcalled as a clinically strong amplification. The copy-number evidence is borderline and technically noisy.",
    },
    {
      id: "candidate-4",
      label: "Candidate 4",
      gene: "DRIV1",
      variant: "chr7:55249071 T>G",
      zygosity: "Tumour VAF 34%",
      consequence: "activating_missense_variant",
      inheritanceSignal: "Tumour-only finding; likely somatic driver candidate but not proven without matched normal",
      clinicalFit:
        "DRIV1 is a recognised driver gene in this tumour-type pathway summary. The variant is a recurrent activating hotspot in the local knowledgebase, technically well supported, and at a VAF compatible with the tumour purity estimate.",
      rawEvidence: `GENE: DRIV1
Panel context: recurrent driver gene on targeted oncology panel
Known cancer role in local summary: activating kinase-pathway driver
Tumour-type relevance: relevant in lung adenocarcinoma pathway summary

Variant:
chr7:55249071 T>G
Transcript: NM_900004.5
HGVS: c.2573T>G p.(Leu858Arg)
Consequence: activating_missense_variant
Functional region: recurrent activating hotspot domain

Sample context:
Sample type: FFPE tumour
Tumour purity estimate: ~35%
Matched normal sample: not tested
Assay type: targeted tumour-only panel

Panel-style fields:
Total depth at site: 920
Ref reads: 607
Alt reads: 313
VAF: 34.0%
Mean mapping quality: 60
Base quality summary: high
Strand support: ALT reads on both forward and reverse strands
Read position: ALT reads distributed across reads

Caller summary:
QUAL=2210
FILTER=PASS
Local artefact flag: no

Population / germline context:
Population AF in local summary: not observed
VAF is compatible with a clonal tumour finding given tumour purity estimate
Tumour-only data cannot absolutely prove somatic origin, but pattern is highly compatible with tumour driver context

Knowledgebase-style summary:
Exact variant is listed as a recurrent activating hotspot in local oncology knowledgebase
Tumour-type/actionability summary: relevant for oncology molecular review according to local pathway`,
      concern:
        "This is the strongest current tumour-panel candidate because the variant is technically robust, fits the tumour type and pathway context, is a recurrent activating hotspot, and has a VAF compatible with tumour purity.",
    },
    {
      id: "candidate-5",
      label: "Candidate 5",
      gene: "PREDISP3",
      variant: "chr17:43071077 G>A",
      zygosity: "Tumour VAF 51%",
      consequence: "splice_acceptor_variant",
      inheritanceSignal: "Tumour-only finding; possible constitutional implication cannot be excluded",
      clinicalFit:
        "PREDISP3 is a cancer predisposition gene. The variant has a high tumour VAF and a strong splice consequence, but tumour-only testing cannot determine whether this is somatic, germline, or affected by tumour copy-number context.",
      rawEvidence: `GENE: PREDISP3
Panel context: cancer predisposition gene included on tumour panel
Known cancer role in local summary: DNA repair / cancer predisposition pathway
Potential inherited cancer relevance: yes, if constitutional

Variant:
chr17:43071077 G>A
Transcript: NM_900005.3
HGVS: c.515-2G>A
Consequence: splice_acceptor_variant
Splice position: canonical -2 acceptor site
Predicted effect: likely splice disruption

Sample context:
Sample type: FFPE tumour
Tumour purity estimate: ~35%
Matched normal sample: not tested
Assay type: targeted tumour-only panel

Panel-style fields:
Total depth at site: 788
Ref reads: 386
Alt reads: 402
VAF: 51.0%
Mean mapping quality: 60
Base quality summary: high
Strand support: ALT reads on both forward and reverse strands
Read position: ALT reads distributed across reads

Caller summary:
QUAL=1982
FILTER=PASS
Local artefact flag: no

Population / germline context:
Population AF in local summary: not observed
VAF near 50% raises possibility of constitutional origin, but tumour-only data cannot confirm this
Tumour copy-number and purity could also affect VAF

Knowledgebase-style summary:
Canonical splice variants in PREDISP3 may have inherited cancer relevance
Local pathway recommends referral/escalation for germline consideration when tumour-only findings suggest possible constitutional significance`,
      concern:
        "This is technically convincing and important to flag, but the key safe action is escalation through the appropriate germline-consideration pathway rather than calling it germline from tumour-only data.",
    },
  ],

  decisionCheckpoints: [
    {
      id: "checkpoint-1",
      title: "Checkpoint 1 — Understand tumour-only scope",
      context:
        "This is tumour-only sequencing. No matched normal sample has been tested. Candidate 5 is a canonical splice variant in a cancer predisposition gene with tumour VAF close to 50%.",
      question:
        "What is the safest interpretation boundary for Candidate 5?",
      options: [
        {
          label: "A",
          text: "Call it germline immediately because the VAF is close to 50% and the gene has inherited cancer relevance.",
          isCorrect: false,
          feedback:
            "Not quite. A VAF near 50% can raise suspicion, but tumour-only sequencing cannot confirm constitutional origin by itself.",
        },
        {
          label: "B",
          text: "Treat it as unusable because tumour-only sequencing can never identify findings that need follow-up.",
          isCorrect: false,
          feedback:
            "Not quite. Tumour-only data can be useful, but its scope and limitations must be clear.",
        },
        {
          label: "C",
          text: "Flag it for appropriate review or escalation because possible constitutional significance cannot be excluded from tumour-only data.",
          isCorrect: true,
          feedback:
            "Correct. The safe approach is to recognise the possible germline implication and escalate through the appropriate pathway rather than over-claiming.",
        },
      ],
      teachingPoint:
        "Tumour-only sequencing can suggest possible constitutional significance, but it cannot confirm germline status without appropriate follow-up.",
    },
    {
      id: "checkpoint-2",
      title: "Checkpoint 2 — Low-level artefact risk",
      context:
        "Candidate 2 has VAF 3.1%, QUAL 38, MQ 42, most ALT reads on one strand, many ALT reads near read ends, and a local C>T FFPE artefact warning.",
      question:
        "How should Candidate 2 be handled?",
      options: [
        {
          label: "A",
          text: "Prioritise it because population absence is enough to support a low-level tumour finding.",
          isCorrect: false,
          feedback:
            "Not quite. Population absence does not rescue a technically weak low-level tumour call.",
        },
        {
          label: "B",
          text: "Treat it cautiously as a low-confidence call and avoid over-prioritising without review.",
          isCorrect: true,
          feedback:
            "Correct. The low VAF and artefact-like evidence make this weak for prioritisation.",
        },
        {
          label: "C",
          text: "Call it germline because low VAF tumour variants usually represent inherited background findings.",
          isCorrect: false,
          feedback:
            "Not quite. Low VAF in tumour data does not imply germline origin. In this case, the concern is technical artefact.",
        },
      ],
      teachingPoint:
        "Low-level tumour calls need careful technical review, especially in FFPE samples where artefact patterns can occur.",
    },
    {
      id: "checkpoint-3",
      title: "Checkpoint 3 — Identify the strongest tumour-panel candidate",
      context:
        "Candidate 4 is a recurrent activating hotspot in a tumour-type relevant driver gene. It has high depth, strong mapping, balanced strand support, no artefact flag, and VAF 34%, which is compatible with the tumour purity estimate.",
      question:
        "Which candidate is strongest for somatic oncology review within this tumour-panel context?",
      options: [
        {
          label: "A",
          text: "Candidate 2, because low-level variants may represent emerging tumour subclones and should outrank common hotspots.",
          isCorrect: false,
          feedback:
            "Not quite. Candidate 2 has multiple low-confidence artefact-like features.",
        },
        {
          label: "B",
          text: "Candidate 3, because any copy-number gain in a cancer pathway gene should be considered actionable.",
          isCorrect: false,
          feedback:
            "Not quite. Candidate 3 is a borderline noisy copy-number gain and does not clearly meet strong amplification evidence.",
        },
        {
          label: "C",
          text: "Candidate 4, because technical evidence, tumour-type relevance, hotspot status, and VAF pattern align best.",
          isCorrect: true,
          feedback:
            "Correct. Candidate 4 is the strongest tumour-panel candidate for oncology molecular review.",
        },
      ],
      teachingPoint:
        "In tumour-panel review, the strongest candidate is supported by technical confidence, tumour-type relevance, known driver context, and appropriate VAF interpretation.",
    },
    {
      id: "checkpoint-4",
      title: "Checkpoint 4 — Borderline copy-number evidence",
      context:
        "Candidate 3 is a possible AMPD4 gain. The copy-number estimate is borderline, only a few targeted regions show mild elevation, GC/coverage warnings are present, and the evidence does not clearly support high-level focal amplification.",
      question:
        "What is the safest interpretation of Candidate 3?",
      options: [
        {
          label: "A",
          text: "Call it as a strong high-level amplification because any gain in a pathway gene can be relevant.",
          isCorrect: false,
          feedback:
            "Not quite. The evidence is borderline and technically noisy, so it should not be overcalled.",
        },
        {
          label: "B",
          text: "Treat it as a borderline copy-number finding needing cautious review, not as stronger than the hotspot variant.",
          isCorrect: true,
          feedback:
            "Correct. The copy-number evidence may be worth reviewing, but it is not the strongest finding in this case.",
        },
        {
          label: "C",
          text: "Treat it as germline because copy-number gains cannot arise as part of tumour evolution.",
          isCorrect: false,
          feedback:
            "Not quite. Copy-number changes are common in tumours, but this specific finding needs technical and clinical review.",
        },
      ],
      teachingPoint:
        "Cancer-panel copy-number calls require careful review of depth pattern, number of targets, quality, tumour purity, and whether the gain reaches the relevant threshold.",
    },
    {
      id: "checkpoint-5",
      title: "Checkpoint 5 — Safe service-style next step",
      context:
        "Candidate 4 is the strongest tumour driver candidate. Candidate 5 is technically convincing but may have constitutional implications. Candidate 2 is technically weak. Candidate 3 is borderline. Candidate 1 is technically convincing but tumour-only origin is unresolved.",
      question:
        "What is the safest next step?",
      options: [
        {
          label: "A",
          text: "Prioritise Candidate 4 for oncology molecular review, flag Candidate 5 through the appropriate germline-consideration pathway, and document tumour-only limitations.",
          isCorrect: true,
          feedback:
            "Correct. This keeps the somatic review and possible germline boundary clear while documenting technical caveats.",
        },
        {
          label: "B",
          text: "Report Candidate 5 as confirmed germline and treat Candidate 4 as secondary because germline findings are higher priority.",
          isCorrect: false,
          feedback:
            "Not quite. Tumour-only data cannot confirm germline status, and Candidate 4 remains the strongest tumour-panel driver candidate.",
        },
        {
          label: "C",
          text: "Ignore all tumour-only findings because no matched normal sample was included in the workflow.",
          isCorrect: false,
          feedback:
            "Not quite. Tumour-only findings can still be clinically useful, but their limitations and boundaries must be documented.",
        },
      ],
      teachingPoint:
        "Safe tumour-panel practice means separating somatic driver prioritisation from germline-risk escalation and being explicit about tumour-only limitations.",
    },
  ],

  finalReflection:
    "A safe trainee-level conclusion would be that Candidate 4 is the strongest tumour-panel candidate for oncology molecular review because it is a technically robust recurrent activating hotspot in a tumour-type relevant driver gene, with VAF compatible with the tumour purity estimate. Candidate 5 is technically convincing and important, but because it lies in a cancer predisposition gene with possible constitutional significance, it should be flagged through the appropriate germline-consideration pathway rather than labelled as germline from tumour-only data. Candidate 1 is technically convincing but tumour-only origin remains unresolved. Candidate 2 is low-level and artefact-like, and Candidate 3 is a borderline copy-number gain that should not be overcalled. The safest next step is to document the tumour-only limitations, prioritise Candidate 4 for oncology review, and escalate Candidate 5 appropriately according to local policy.",
};