export const case41 = {
  id: "case-41",
  slug: "reanalysis-new-gene-evidence-case",
  title: "Case 41: Reanalysis with new gene evidence",
  level: "Advanced",
  summary:
    "A reanalysis case focused on recognising when a previously uncertain candidate becomes stronger because gene-disease evidence has changed.",

  visualisationExampleId: null,

  assessmentFocus: [
    "Reanalysis reasoning",
    "Changed gene-disease evidence",
    "Updated disease mechanism",
    "Previous VUS-level candidate review",
    "De novo missense interpretation",
    "Unchanged weak findings",
    "Incomplete recessive evidence",
    "Safe documentation of what changed",
  ],

  guidedTutorMode: {
    type: "static-rule-based",
    description:
      "Uses built-in hints, checkpoint feedback, model answers, and self-check criteria to support safe case reasoning.",
  },

  phase5Assessment: {
    candidateRanking: {
      prompt:
        "Rank the candidates from highest to lowest review priority in the reanalysis context.",
      correctOrder: [
        "candidate-3",
        "candidate-2",
        "candidate-4",
        "candidate-1",
      ],
      explanation:
        "Candidate 3 is the strongest because the variant was already technically convincing, apparently de novo, and absent from population data, and the updated reanalysis evidence now supports REANGENE3 as a relevant autosomal dominant neurodevelopmental gene with a missense-domain disease mechanism. Candidate 2 remains a technically convincing splice variant, but it is only one allele in a recessive gene and no second allele has been identified. Candidate 4 is likely a real inherited duplication, but copy-number gain remains mechanistically unsupported. Candidate 1 is weakest because it remains inherited, relatively frequent, outside a known functional domain, and in a gene with limited evidence.",
    },

    escalationDecision: {
      prompt: "Choose the safest next action for this reanalysis case.",
      options: [
        {
          id: "prioritise-candidate-3",
          label: "A",
          decision:
            "Prioritise Candidate 3 for review, clearly document what evidence has changed since the original analysis, and explain why the other candidates remain weaker.",
          isBest: true,
          feedback:
            "Best decision. Candidate 3 is strong because the interpretation context has changed: updated gene-disease validity, mechanism, same-domain evidence, and phenotype fit now support review.",
        },
        {
          id: "repeat-original-negative",
          label: "B",
          decision:
            "Keep the original negative conclusion because changing interpretation would be inconsistent.",
          isBest: false,
          feedback:
            "Review this choice. Reanalysis exists because interpretation can legitimately change when new evidence becomes available.",
        },
        {
          id: "prioritise-all-old-findings",
          label: "C",
          decision:
            "Prioritise all variants that were present in the original analysis because they have now been seen twice.",
          isBest: false,
          feedback:
            "Review this choice. Being present in the old analysis does not make a candidate stronger unless new supporting evidence has changed the interpretation.",
        },
      ],
    },

    writtenSummary: {
      prompt:
        "Write a short trainee-level reanalysis summary explaining why Candidate 3 is now stronger, what changed since the original analysis, and why the other candidates remain lower priority.",
      checklist: [
        "States that Candidate 3 is now the strongest candidate for review.",
        "Explains that the variant itself was already present in the original analysis.",
        "Mentions that Candidate 3 was technically clean, apparently de novo, and absent from population data.",
        "Explains that the key change is updated REANGENE3 gene-disease evidence.",
        "Mentions the updated autosomal dominant neurodevelopmental disease association.",
        "Mentions the updated missense/domain mechanism.",
        "Links the updated disease spectrum to the patient’s phenotype.",
        "Explains why Candidate 1 remains weak.",
        "Explains why Candidate 2 remains incomplete as a recessive explanation.",
        "Explains why Candidate 4 remains weak because triplosensitivity is not established.",
        "Recommends review/escalation with clear documentation of what changed.",
      ],
      modelAnswer:
        "Candidate 3 is now the strongest current candidate for review. The variant was present in the original analysis and was already technically convincing, apparently de novo, and absent from population data, but REANGENE3 had insufficient gene-disease evidence at that time. On reanalysis, updated evidence now supports REANGENE3 as an autosomal dominant neurodevelopmental disorder gene with disease-associated de novo missense variants in the same functional domain, and the patient’s developmental delay, severe speech delay, seizures, hypotonia, and dysmorphic features fit the updated disease spectrum. Candidate 1 remains weak because inheritance, population frequency, and gene-disease evidence have not meaningfully changed. Candidate 2 remains incomplete because it is only one allele in a recessive gene. Candidate 4 remains a technically plausible inherited duplication, but copy-number gain is not an established mechanism. The safest next step is to prioritise Candidate 3 and document exactly what changed since the original analysis.",
    },
  },

  reasoningScorecard: [
    {
      category: "Reanalysis mindset",
      maxScore: 2,
      expectation:
        "Recognises that reanalysis is about identifying changed evidence, not simply repeating the original conclusion.",
    },
    {
      category: "Candidate 3 interpretation",
      maxScore: 2,
      expectation:
        "Explains why Candidate 3 is now stronger because updated gene-disease, mechanism, same-domain, and phenotype evidence support the original de novo variant.",
    },
    {
      category: "Unchanged weak findings",
      maxScore: 2,
      expectation:
        "Explains why Candidate 1 and Candidate 4 should not be upgraded without meaningful new supporting evidence.",
    },
    {
      category: "Incomplete recessive evidence",
      maxScore: 2,
      expectation:
        "Recognises that Candidate 2 remains incomplete because no second relevant allele has been found.",
    },
    {
      category: "Safe reanalysis documentation",
      maxScore: 2,
      expectation:
        "Documents what changed since the original analysis and recommends review through the appropriate pathway without over-claiming.",
    },
  ],

  patient: {
    age: 9,
    sex: "Female",
  },

  referralReason:
    "A 9-year-old girl has been referred for rare disease genome reanalysis because of developmental delay, severe speech delay, seizures, hypotonia, and mild dysmorphic features. A previous genome analysis two years ago did not identify a diagnostic result.",

  testType:
    "Rare disease trio genome sequencing reanalysis using updated gene-disease evidence, updated variant databases, and current transcript annotation",

  familyStructure:
    "The proband and both biological parents were tested in the original trio analysis. Both parents are reportedly unaffected.",

  history: [
    "Global developmental delay noted in infancy",
    "Severe expressive speech delay",
    "Seizures beginning at age 4",
    "Hypotonia from early childhood",
    "Mild dysmorphic features noted by clinical genetics",
    "Original genome analysis two years ago did not identify a diagnostic result",
    "Reanalysis has been requested because the clinical phenotype remains unexplained",
  ],

  phenotype: [
    "Global developmental delay",
    "Severe speech delay",
    "Seizures",
    "Hypotonia",
    "Mild dysmorphic features",
  ],

  familyHistory:
    "Both parents are reportedly unaffected. No known family history of developmental delay, seizures, hypotonia, dysmorphic features, or a similar neurodevelopmental presentation.",

  serviceContext: [
    "This is a reanalysis case.",
    "The key issue is that interpretation can change over time as gene-disease evidence, variant evidence, transcript annotation, and clinical knowledge improve.",
    "A variant that was previously treated as uncertain should not automatically remain low priority if new evidence now supports the gene-disease relationship and mechanism.",
    "Your task is to compare the original evidence with the updated evidence and decide which candidate now deserves review.",
    "Do not treat reanalysis as simply repeating the original result; the value comes from checking what has changed.",
  ],

  candidateFindings: [
    {
      id: "candidate-1",
      label: "Candidate 1",
      gene: "OLDNDD1",
      variant: "chr4:77190442 C>T",
      zygosity: "Heterozygous",
      consequence: "missense_variant",
      inheritanceSignal: "Inherited from unaffected father",
      clinicalFit:
        "OLDNDD1 has a broad neurodevelopmental association in limited reports. The variant was previously noted but deprioritised because it was inherited, relatively frequent, and outside a known functional domain.",
      rawEvidence: `GENE: OLDNDD1
Known disease association at original analysis: broad neurodevelopmental association in limited reports
Known disease association at reanalysis: still limited / no major change
Reported inheritance: autosomal dominant proposed
Known mechanism: uncertain

Variant:
chr4:77190442 C>T
Transcript: NM_410101.2
HGVS: c.899C>T p.(Pro300Leu)
Consequence: missense_variant
Protein domain: outside known recurrent functional region in current local summary

Original analysis status:
Variant noted as low-priority VUS-level finding
Not escalated because inheritance and population evidence were weak

Updated reanalysis evidence:
No meaningful new gene-disease validity update
No new disease mechanism established
No new same-residue or same-domain evidence in local summary

VCF-style fields:
QUAL=654
FILTER=PASS
INFO: DP=46;MQ=60;QD=14.2;SOR=0.82
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
gnomAD AF = 0.0012
gnomAD allele count = 320
Homozygotes observed in population summary = 1

Constraint:
LOEUF = 0.82
pLI = 0.08

ClinVar-style summary:
No exact matching pathogenic record found in local summary
Several submitted variants in OLDNDD1 remain VUS or likely benign`,
      concern:
        "This remains weak on reanalysis because the evidence has not meaningfully changed. Inheritance, frequency, weak gene validity, and broad phenotype fit still argue against prioritising it.",
    },
    {
      id: "candidate-2",
      label: "Candidate 2",
      gene: "REANREC2",
      variant: "chr9:118809331 G>A",
      zygosity: "Heterozygous",
      consequence: "splice_acceptor_variant",
      inheritanceSignal: "Inherited from unaffected mother",
      clinicalFit:
        "REANREC2 is associated with an autosomal recessive neurodevelopmental disorder with seizures and hypotonia. The variant is a canonical splice acceptor, but only one inherited heterozygous allele is identified.",
      rawEvidence: `GENE: REANREC2
Known disease association at original analysis: autosomal recessive neurodevelopmental disorder
Known disease association at reanalysis: still supports recessive biallelic loss-of-function disease
Reported inheritance: autosomal recessive
Known mechanism: biallelic loss-of-function

Variant:
chr9:118809331 G>A
Transcript: NM_410102.4
HGVS: c.744-2G>A
Consequence: splice_acceptor_variant
Splice position: canonical -2 acceptor site
Predicted effect: likely acceptor splice-site disruption

Original analysis status:
Recognised as a plausible carrier-level finding
No second allele identified
Not considered sufficient to explain the phenotype

Updated reanalysis evidence:
No second coding SNV/indel identified
No confident exon-level deletion/duplication detected
No strong deep intronic candidate identified in current reanalysis summary
No new evidence changing inheritance model

VCF-style fields:
QUAL=792
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

Population:
gnomAD AF = 0.000004
gnomAD allele count = 1
No homozygotes observed in local summary

Constraint:
LOEUF = 0.34
pLI = 0.76

ClinVar-style summary:
No exact matching variant record found in local summary
Other biallelic splice and truncating variants in REANREC2 have been submitted in affected individuals`,
      concern:
        "This remains incomplete as a recessive explanation. The variant itself is strong, but reanalysis has not identified a second allele or changed the inheritance model.",
    },
    {
      id: "candidate-3",
      label: "Candidate 3",
      gene: "REANGENE3",
      variant: "chr12:66190442 C>T",
      zygosity: "Heterozygous",
      consequence: "missense_variant",
      inheritanceSignal: "Apparent de novo with good parental coverage",
      clinicalFit:
        "REANGENE3 was previously a candidate gene with insufficient evidence. Since the original analysis, new gene-disease evidence supports an autosomal dominant neurodevelopmental disorder with developmental delay, severe speech delay, seizures, hypotonia, and dysmorphic features caused by de novo missense variants in a recurrent functional domain.",
      rawEvidence: `GENE: REANGENE3
Known disease association at original analysis:
Candidate neurodevelopmental gene only
Gene-disease validity: limited / emerging
Mechanism uncertain
Variant originally considered VUS-level and not prioritised as diagnostic

Known disease association at reanalysis:
Autosomal dominant syndromic neurodevelopmental disorder
Reported features: developmental delay, severe speech delay, seizures, hypotonia, dysmorphic features
Reported inheritance: usually de novo
Known mechanism: damaging missense variants in recurrent functional domain
Gene-disease validity in updated local summary: moderate / established enough for clinical review

Variant:
chr12:66190442 C>T
Transcript: NM_410103.5
HGVS: c.1286C>T p.(Thr429Met)
Consequence: missense_variant
Protein domain: recurrent neurodevelopmental functional domain
Updated mechanism note: variant lies in the domain where newly reported disease-associated missense variants cluster

Original analysis status:
Variant seen as apparent de novo
Technically clean
Absent from population data
Not prioritised strongly because REANGENE3 had insufficient gene-disease evidence at the time

Updated reanalysis evidence:
New affected individuals reported with overlapping phenotype and de novo missense variants in same domain
Updated local gene curation now supports REANGENE3 as a relevant neurodevelopmental disease gene
Same-domain variants now submitted as pathogenic/likely pathogenic in affected individuals
Disease mechanism now supports missense disruption rather than loss-of-function
Phenotype match is stronger than in original analysis

VCF-style fields:
QUAL=946
FILTER=PASS
INFO: DP=54;MQ=60;QD=17.5;SOR=0.71
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

Population:
gnomAD AF = not observed
gnomAD allele count = 0

Constraint:
LOEUF = 0.52
pLI = 0.46
Missense/domain note: updated local summary highlights missense constraint in the affected functional domain

ClinVar-style summary:
No exact matching variant record found in local summary
New same-domain missense variants in REANGENE3 have been submitted as pathogenic/likely pathogenic in affected individuals
Several affected individuals have overlapping developmental delay, severe speech delay, seizures, hypotonia, and dysmorphic features`,
      concern:
        "This is now the strongest current candidate. The variant itself has not changed, but the gene-disease evidence and mechanism have changed, making the original uncertain de novo candidate much more compelling for review.",
    },
    {
      id: "candidate-4",
      label: "Candidate 4",
      gene: "CNVREAN4 region",
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
CNVREAN4
Known disease association at original analysis: possible neurodevelopmental association
Known disease association at reanalysis: still limited
Known mechanism: uncertain
Triplosensitivity evidence: not established

Affected region:
Partial duplication involving exons 2–4 of 11
Orientation unknown
Predicted transcript effect uncertain

Original analysis status:
CNV noted but considered low priority because inherited and mechanism uncertain

Updated reanalysis evidence:
No new triplosensitivity evidence
No new recurrent pathogenic duplication evidence in local summary
Still overlaps population duplication intervals

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
Clinical relevance uncertain because inherited and no established gain mechanism`,
      concern:
        "This is likely a real CNV, but reanalysis has not added evidence that copy-number gain of this region explains the phenotype.",
    },
  ],

  decisionCheckpoints: [
    {
      id: "checkpoint-1",
      title: "Checkpoint 1 — Reanalysis means asking what changed",
      context:
        "The proband had genome analysis two years ago. Candidate 3 was present then, technically clean, de novo, and absent from population data, but REANGENE3 did not yet have enough gene-disease evidence.",
      question: "What is the safest reanalysis mindset?",
      options: [
        {
          label: "A",
          text: "Repeat the original conclusion without checking whether gene-disease evidence has changed.",
          isCorrect: false,
          feedback:
            "Not quite. Reanalysis is valuable because clinical knowledge, databases, gene curation, and interpretation frameworks can change.",
        },
        {
          label: "B",
          text: "Check whether any previous uncertain finding now has stronger gene-disease, mechanism, phenotype, or database support.",
          isCorrect: true,
          feedback:
            "Correct. Reanalysis should focus on what has changed since the original interpretation.",
        },
        {
          label: "C",
          text: "Ignore all variants seen in the original analysis and only review brand-new calls.",
          isCorrect: false,
          feedback:
            "Not quite. Many reanalysis findings are not new variants; they are old variants with new evidence.",
        },
      ],
      teachingPoint:
        "A reanalysis result may come from changed knowledge rather than a newly detected variant.",
    },
    {
      id: "checkpoint-2",
      title: "Checkpoint 2 — Candidate 3 has changed because the gene evidence changed",
      context:
        "Candidate 3 was previously uncertain because REANGENE3 had limited evidence. The updated summary now supports an autosomal dominant neurodevelopmental disorder caused by de novo missense variants in the same functional domain.",
      question: "Why is Candidate 3 now stronger?",
      options: [
        {
          label: "A",
          text: "Because the sequencing read data changed dramatically since the original analysis.",
          isCorrect: false,
          feedback:
            "Not quite. The variant call was already technically strong. The main change is the gene-disease and mechanism evidence.",
        },
        {
          label: "B",
          text: "Because new gene-disease evidence, same-domain variant evidence, phenotype overlap, and mechanism support now align with the existing de novo variant.",
          isCorrect: true,
          feedback:
            "Correct. Candidate 3 becomes stronger because the interpretation context has changed.",
        },
        {
          label: "C",
          text: "Because every de novo missense variant becomes pathogenic after enough time passes.",
          isCorrect: false,
          feedback:
            "Not quite. Time alone does not change interpretation; new evidence does.",
        },
      ],
      teachingPoint:
        "Reanalysis can upgrade the priority of a candidate when the gene-disease relationship becomes better established.",
    },
    {
      id: "checkpoint-3",
      title: "Checkpoint 3 — Do not over-prioritise unchanged weak findings",
      context:
        "Candidate 1 and Candidate 4 were present in the original analysis. On reanalysis, neither has gained meaningful new support.",
      question:
        "What is the safest interpretation of these unchanged weak findings?",
      options: [
        {
          label: "A",
          text: "They should become stronger automatically because they have been seen before.",
          isCorrect: false,
          feedback:
            "Not quite. Being present in the old analysis does not make a finding stronger.",
        },
        {
          label: "B",
          text: "They remain lower priority because the evidence against them has not meaningfully changed.",
          isCorrect: true,
          feedback:
            "Correct. Reanalysis should not upgrade weak candidates without new supporting evidence.",
        },
        {
          label: "C",
          text: "They should be deleted from the record because they were not diagnostic before.",
          isCorrect: false,
          feedback:
            "Not quite. They may remain documented, but they should not be over-prioritised.",
        },
      ],
      teachingPoint:
        "Reanalysis should be evidence-led, not novelty-led or history-led.",
    },
    {
      id: "checkpoint-4",
      title: "Checkpoint 4 — Incomplete recessive evidence remains incomplete",
      context:
        "Candidate 2 is a canonical splice acceptor variant in a recessive gene, but no second allele has been identified in the original analysis or reanalysis.",
      question: "What is the safest interpretation of Candidate 2?",
      options: [
        {
          label: "A",
          text: "It is now diagnostic because reanalysis has happened.",
          isCorrect: false,
          feedback:
            "Not quite. Reanalysis itself does not complete an incomplete inheritance model.",
        },
        {
          label: "B",
          text: "It remains a technically convincing single allele, but it does not currently explain a recessive disorder without a second relevant allele.",
          isCorrect: true,
          feedback:
            "Correct. Candidate 2 remains incomplete as a disease explanation.",
        },
        {
          label: "C",
          text: "It should be prioritised above Candidate 3 because splice variants are always stronger than missense variants.",
          isCorrect: false,
          feedback:
            "Not quite. Variant consequence must fit inheritance, gene mechanism, and the whole case.",
        },
      ],
      teachingPoint:
        "A strong consequence still needs a complete disease model.",
    },
    {
      id: "checkpoint-5",
      title: "Checkpoint 5 — Safe service-style next step",
      context:
        "Candidate 3 is now the strongest current candidate because updated gene-disease evidence supports the gene, mechanism, phenotype fit, and same-domain missense pattern.",
      question: "What is the safest next step?",
      options: [
        {
          label: "A",
          text: "Prioritise Candidate 3 for review, clearly document what evidence has changed since the original analysis, and explain why the other candidates remain weaker.",
          isCorrect: true,
          feedback:
            "Correct. This is the safest reanalysis conclusion because it shows why the interpretation has changed.",
        },
        {
          label: "B",
          text: "Report Candidate 3 immediately without documenting the original uncertainty or updated evidence.",
          isCorrect: false,
          feedback:
            "Not quite. A reanalysis finding should be reviewable, especially when the key change is evidence strength over time.",
        },
        {
          label: "C",
          text: "Keep the original negative conclusion because changing interpretation would be inconsistent.",
          isCorrect: false,
          feedback:
            "Not quite. Reanalysis exists because interpretation can legitimately change when evidence changes.",
        },
      ],
      teachingPoint:
        "Safe reanalysis output explains not only the current candidate, but why the conclusion is different from before.",
    },
  ],

  finalReflection:
    "A safe trainee-level conclusion would be that Candidate 3 is now the strongest current candidate for review. The variant itself was present in the original analysis and was technically convincing, apparently de novo, and absent from population data, but REANGENE3 had insufficient gene-disease evidence at that time. On reanalysis, updated evidence now supports REANGENE3 as an autosomal dominant neurodevelopmental disorder gene with disease-associated de novo missense variants in the same functional domain, and the patient’s phenotype matches the updated disease spectrum. Candidate 1 remains weak because inheritance, frequency, and gene-disease evidence are unchanged. Candidate 2 remains incomplete as a single allele in a recessive gene. Candidate 4 remains a technically plausible but clinically weak inherited duplication with no established triplosensitivity. The safest next step is to prioritise Candidate 3, document exactly what changed since the original analysis, and escalate through the appropriate clinical laboratory review pathway.",
};