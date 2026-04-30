"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Card } from "@/components/ui/card";
import { Phase5AssessmentPanel } from "@/components/cases/Phase5AssessmentPanel";

type CandidateFinding = {
  id: string;
  label?: string;
  gene: string;
  variant: string;
  zygosity: string;
  consequence?: string;
  inheritanceSignal: string;
  clinicalFit: string;
  technicalClues?: string[];
  rawEvidence?: string;
  concern: string;
};

type DecisionOption = {
  label: string;
  text: string;
  isCorrect: boolean;
  feedback: string;
};

type DecisionCheckpoint = {
  id: string;
  title: string;
  context: string;
  question: string;
  options: DecisionOption[];
  teachingPoint: string;
};

type ReasoningScorecardItem = {
  category: string;
  maxScore: number;
  expectation: string;
};

type GuidedTutorMode = {
  type: string;
  description: string;
};

type CandidateRankingTask = {
  prompt: string;
  correctOrder: string[];
  explanation: string;
};

type EscalationDecisionOption = {
  id: string;
  label: string;
  decision: string;
  isBest: boolean;
  feedback: string;
};

type EscalationDecisionTask = {
  prompt: string;
  options: EscalationDecisionOption[];
};

type WrittenSummaryTask = {
  prompt: string;
  checklist: string[];
  modelAnswer: string;
};

type Phase5Assessment = {
  candidateRanking?: CandidateRankingTask;
  escalationDecision?: EscalationDecisionTask;
  writtenSummary?: WrittenSummaryTask;
};

type ClinicalCase = {
  title: string;
  level: string;
  summary: string;
  visualisationExampleId?: string | null;
  assessmentFocus?: string[];
  guidedTutorMode?: GuidedTutorMode;
  phase5Assessment?: Phase5Assessment;
  reasoningScorecard?: ReasoningScorecardItem[];
  patient: {
    age: number;
    sex: string;
  };
  referralReason: string;
  testType: string;
  familyStructure: string;
  history: string[];
  phenotype: string[];
  familyHistory: string;
  serviceContext: string[];
  candidateFindings: CandidateFinding[];
  decisionCheckpoints: DecisionCheckpoint[];
  finalReflection: string;
};

type ClinicalCaseSimulatorProps = {
  caseData: ClinicalCase;
};

function formatVisualisationLabel(exampleId: string) {
  return exampleId
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function LinkedVisualisationCard({ exampleId }: { exampleId: string }) {
  return (
    <Card className="border-slate-200 bg-white">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
            Linked visualisation
          </p>

          <h2 className="mt-2 text-xl font-semibold text-slate-900">
            Review the related visual example
          </h2>

          <p className="mt-3 leading-7 text-slate-600">
            This case has a linked visualisation example for the relevant
            genomic concept. Open the Visualise section and review:
          </p>

          <p className="mt-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 font-mono text-sm text-slate-800">
            {formatVisualisationLabel(exampleId)}
          </p>
        </div>

        <Link
          href="/visualise"
          className="inline-flex rounded-xl bg-slate-900 px-4 py-2 text-center font-medium text-white transition hover:bg-slate-800"
        >
          Open Visualise
        </Link>
      </div>
    </Card>
  );
}

function TechnicalCheatSheet({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!isOpen) return null;

  return (
    <aside className="fixed bottom-4 right-4 top-24 z-50 w-[min(92vw,500px)] overflow-y-auto rounded-2xl border border-slate-300 bg-white p-5 shadow-2xl">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
            Technical confidence guide
          </p>

          <h2 className="mt-1 text-xl font-semibold text-slate-900">
            How to interpret the values
          </h2>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="rounded-lg border border-slate-300 px-3 py-1 text-sm text-slate-600 hover:bg-slate-100"
        >
          Close
        </button>
      </div>

      <div className="mt-5 space-y-5 text-sm leading-6 text-slate-700">
        <div className="rounded-2xl border border-green-200 bg-green-50 p-4">
          <h3 className="font-semibold text-green-900">
            Stronger technical confidence usually looks like:
          </h3>

          <ul className="mt-3 list-disc space-y-2 pl-5 text-green-800">
            <li>enough total depth to support the genotype</li>
            <li>allele depth that fits the expected genotype</li>
            <li>high genotype quality</li>
            <li>good mapping quality</li>
            <li>ALT reads on both strands</li>
            <li>ALT reads spread across the read, not only near the ends</li>
            <li>no strong repetitive, pseudogene, or soft-clipping warning</li>
            <li>inheritance pattern that fits the family structure</li>
            <li>variant consequence that fits the known disease mechanism</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-red-200 bg-red-50 p-4">
          <h3 className="font-semibold text-red-900">
            Weaker technical confidence may look like:
          </h3>

          <ul className="mt-3 list-disc space-y-2 pl-5 text-red-800">
            <li>low depth</li>
            <li>very low alternate allele support</li>
            <li>low genotype quality</li>
            <li>low mapping quality</li>
            <li>ALT reads mostly on one strand</li>
            <li>ALT reads clustered at read ends</li>
            <li>soft-clipping around supporting reads</li>
            <li>local repetitive sequence or pseudogene concern</li>
            <li>inheritance or mechanism mismatch</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <h3 className="font-semibold text-slate-900">GT — genotype</h3>

          <div className="mt-3 space-y-2">
            <p>
              <span className="font-semibold">What it tells you:</span> the
              called genotype for each sample.
            </p>

            <p>
              <span className="font-mono">0/0</span> = reference,{" "}
              <span className="font-mono">0/1</span> = heterozygous,{" "}
              <span className="font-mono">1/1</span> = homozygous alternate.
            </p>

            <p>
              <span className="font-semibold text-green-800">
                More reassuring:
              </span>{" "}
              the genotype pattern fits the disease model and is supported by
              strong DP, AD, GQ, and MQ.
            </p>

            <p>
              <span className="font-semibold text-red-800">Caution:</span> do
              not trust GT alone. A <span className="font-mono">0/1</span> call
              with poor AD, low GQ, or low MQ may be fragile.
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <h3 className="font-semibold text-slate-900">DP — total depth</h3>

          <div className="mt-3 space-y-2">
            <p>
              <span className="font-semibold">What it tells you:</span> how many
              reads cover the site.
            </p>

            <p>
              <span className="font-semibold text-green-800">
                More reassuring:
              </span>{" "}
              enough total depth to support the expected genotype, assuming the
              other read-level metrics also look good.
            </p>

            <p>
              <span className="font-semibold text-amber-800">Caution:</span>{" "}
              moderate depth can still be unreliable if the ALT reads are
              biased, poorly mapped, or clustered at read ends.
            </p>

            <p>
              <span className="font-semibold text-red-800">
                Less reassuring:
              </span>{" "}
              very low DP. A variant supported by only a few reads is easier to
              over-interpret.
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <h3 className="font-semibold text-slate-900">
            AD — allele depth and allele balance
          </h3>

          <div className="mt-3 space-y-2">
            <p>
              <span className="font-semibold">What it tells you:</span> how many
              reads support the reference allele and how many support the
              alternate allele.
            </p>

            <p>
              <span className="font-semibold text-green-800">
                More reassuring:
              </span>{" "}
              for a germline heterozygous SNV, ALT allele balance is often
              roughly near half, depending on assay and local thresholds.
            </p>

            <p>
              <span className="font-semibold text-red-800">Caution:</span>{" "}
              very low ALT support may suggest mosaicism, contamination,
              artefact, or calling uncertainty depending on the wider context.
            </p>

            <p>
              <span className="font-semibold">In trio analysis:</span> if a
              parent is called <span className="font-mono">0/0</span> but has a
              few ALT reads, think about low-level mosaicism, contamination, or
              calling uncertainty before calling a variant confidently de novo.
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <h3 className="font-semibold text-slate-900">GQ — genotype quality</h3>

          <div className="mt-3 space-y-2">
            <p>
              <span className="font-semibold">What it tells you:</span> how
              confident the caller is in the sample genotype.
            </p>

            <p>
              <span className="font-semibold text-green-800">
                More reassuring:
              </span>{" "}
              high GQ alongside good depth, allele balance, mapping quality, and
              clean read-level evidence.
            </p>

            <p>
              <span className="font-semibold text-red-800">
                Less reassuring:
              </span>{" "}
              low GQ, especially when AD, DP, MQ, or read-level context also look
              weak.
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <h3 className="font-semibold text-slate-900">QUAL</h3>

          <div className="mt-3 space-y-2">
            <p>
              <span className="font-semibold">What it tells you:</span> a
              variant-level confidence score from the caller.
            </p>

            <p>
              <span className="font-semibold text-green-800">
                More reassuring:
              </span>{" "}
              high QUAL with supportive sample-level metrics.
            </p>

            <p>
              <span className="font-semibold text-red-800">Caution:</span> high
              QUAL does not mean clinically important. It only supports that the
              variant call may be technically plausible.
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <h3 className="font-semibold text-slate-900">FILTER</h3>

          <div className="mt-3 space-y-2">
            <p>
              <span className="font-semibold">What it tells you:</span> whether
              the caller’s built-in filters failed the variant.
            </p>

            <p>
              <span className="font-semibold text-green-800">
                More reassuring:
              </span>{" "}
              <span className="font-mono">FILTER=PASS</span> means the variant
              did not fail the caller’s filter rules.
            </p>

            <p>
              <span className="font-semibold text-red-800">Caution:</span>{" "}
              <span className="font-mono">PASS</span> does not mean clinically
              important, pathogenic, or safe to report.
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <h3 className="font-semibold text-slate-900">MQ — mapping quality</h3>

          <div className="mt-3 space-y-2">
            <p>
              <span className="font-semibold">What it tells you:</span> whether
              reads align confidently to this genomic position.
            </p>

            <p>
              <span className="font-semibold text-green-800">
                More reassuring:
              </span>{" "}
              high MQ and no local mapping warning.
            </p>

            <p>
              <span className="font-semibold text-red-800">Caution:</span> low
              MQ plus repetitive sequence, soft-clipping, or pseudogene context
              can make the call technically fragile.
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <h3 className="font-semibold text-slate-900">
            QD — quality by depth
          </h3>

          <div className="mt-3 space-y-2">
            <p>
              <span className="font-semibold">What it tells you:</span> variant
              confidence adjusted for read depth.
            </p>

            <p>
              <span className="font-semibold text-green-800">
                More reassuring:
              </span>{" "}
              stronger QD with otherwise clean technical metrics.
            </p>

            <p>
              <span className="font-semibold text-red-800">Caution:</span> low
              QD, especially with weak AD, MQ, strand balance, or read-position
              evidence.
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <h3 className="font-semibold text-slate-900">
            SOR — strand odds ratio
          </h3>

          <div className="mt-3 space-y-2">
            <p>
              <span className="font-semibold">What it tells you:</span> whether
              ALT evidence is uneven between forward and reverse reads.
            </p>

            <p>
              <span className="font-semibold text-green-800">
                More reassuring:
              </span>{" "}
              ALT reads seen on both strands without strong imbalance.
            </p>

            <p>
              <span className="font-semibold text-red-800">Caution:</span> high
              SOR plus ALT reads mostly on one strand.
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <h3 className="font-semibold text-slate-900">
            Read-level warning signs
          </h3>

          <div className="mt-3 space-y-2">
            <p>
              <span className="font-semibold text-green-800">
                More reassuring:
              </span>{" "}
              ALT reads are on both strands and spread across different read
              positions.
            </p>

            <p>
              <span className="font-semibold text-red-800">Caution:</span> ALT
              reads only near read ends, soft-clipping, low-complexity sequence,
              segmental duplications, or pseudogene regions.
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <h3 className="font-semibold text-slate-900">gnomAD AF / AC</h3>

          <div className="mt-3 space-y-2">
            <p>
              <span className="font-semibold">What it tells you:</span> how
              common the variant is in a population dataset.
            </p>

            <p>
              <span className="font-semibold text-green-800">
                More supportive for severe rare disease:
              </span>{" "}
              absent or extremely rare, depending on disease model and ancestry.
            </p>

            <p>
              <span className="font-semibold text-red-800">Caution:</span>{" "}
              variants that are too common for the disease, especially with
              healthy homozygotes for severe fully penetrant conditions.
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <h3 className="font-semibold text-slate-900">LOEUF / pLI</h3>

          <div className="mt-3 space-y-2">
            <p>
              <span className="font-semibold">What it tells you:</span> whether
              a gene appears tolerant or intolerant of loss-of-function
              variation in population data.
            </p>

            <p>
              <span className="font-semibold text-green-800">
                More supportive:
              </span>{" "}
              strong loss-of-function constraint when the disease mechanism is
              haploinsufficiency or loss of function.
            </p>

            <p>
              <span className="font-semibold text-red-800">Caution:</span>{" "}
              constraint is gene-level supportive evidence. It does not classify
              a specific variant by itself.
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <h3 className="font-semibold text-slate-900">
            Consequence and mechanism fit
          </h3>

          <div className="mt-3 space-y-2">
            <p>
              <span className="font-semibold text-green-800">
                Stronger when aligned:
              </span>{" "}
              a stop-gained, frameshift, or canonical splice variant may fit a
              haploinsufficiency or loss-of-function disease mechanism.
            </p>

            <p>
              <span className="font-semibold text-red-800">Caution:</span> a
              predicted consequence is weaker if it does not fit the known
              gene-disease mechanism.
            </p>

            <p>
              <span className="font-semibold">Key rule:</span> variant effect
              must match the gene-disease mechanism.
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <h3 className="font-semibold text-slate-900">
            Trio inheritance confidence
          </h3>

          <div className="mt-3 space-y-2">
            <p>
              <span className="font-semibold text-green-800">
                Cleaner de novo evidence:
              </span>{" "}
              proband is heterozygous with good AD, DP, GQ, and MQ; both parents
              are reference with good depth and no ALT reads.
            </p>

            <p>
              <span className="font-semibold text-red-800">Caution:</span> do
              not over-trust a de novo pattern if a parent has low DP, poor GQ,
              missing genotype, or a few ALT reads.
            </p>

            <p>
              <span className="font-semibold text-red-800">Caution:</span> an
              inherited variant from an unaffected parent may be weaker for a
              dominant fully penetrant condition, unless reduced penetrance,
              variable expressivity, or another explanation is plausible.
            </p>
          </div>
        </div>

        <p className="rounded-2xl border border-slate-200 bg-white p-4 text-xs leading-5 text-slate-500">
          These are learning guides, not fixed clinical thresholds. Real
          interpretation depends on the validated assay, local SOPs, review
          standards, sample type, pipeline behaviour, read-level review, and
          clinical laboratory sign-off.
        </p>
      </div>
    </aside>
  );
}

function EvidencePacket({
  evidence,
  onOpenCheatSheet,
}: {
  evidence: string;
  onOpenCheatSheet: () => void;
}) {
  return (
    <div className="mt-5 overflow-hidden rounded-2xl border border-slate-800 bg-slate-950">
      <div className="flex flex-col gap-3 border-b border-slate-800 bg-slate-900 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm font-semibold text-slate-200">
          Raw evidence packet
        </p>

        <button
          type="button"
          onClick={onOpenCheatSheet}
          className="rounded-lg border border-slate-600 px-3 py-1 text-sm text-slate-200 hover:bg-slate-800"
        >
          Open confidence guide
        </button>
      </div>

      <pre className="overflow-x-auto whitespace-pre-wrap px-4 py-4 text-sm leading-7 text-slate-100">
        <code>{evidence}</code>
      </pre>
    </div>
  );
}

export function ClinicalCaseSimulator({
  caseData,
}: ClinicalCaseSimulatorProps) {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>(
    {}
  );
  const [isCheatSheetOpen, setIsCheatSheetOpen] = useState(false);
  const [showFinalSummary, setShowFinalSummary] = useState(false);

  const completedCheckpoints = useMemo(() => {
    return Object.keys(selectedAnswers).length;
  }, [selectedAnswers]);

  const totalCheckpoints = caseData.decisionCheckpoints.length;

  const correctCheckpoints = useMemo(() => {
    return caseData.decisionCheckpoints.reduce((count, checkpoint) => {
      const selectedIndex = selectedAnswers[checkpoint.id];

      if (selectedIndex === undefined) return count;

      return checkpoint.options[selectedIndex]?.isCorrect ? count + 1 : count;
    }, 0);
  }, [caseData.decisionCheckpoints, selectedAnswers]);

  const allCheckpointsComplete = completedCheckpoints === totalCheckpoints;

  return (
    <div className="mt-8 space-y-8">
      <TechnicalCheatSheet
        isOpen={isCheatSheetOpen}
        onClose={() => setIsCheatSheetOpen(false)}
      />

      <Card className="border-slate-200 bg-white">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
              Case briefing
            </p>

            <h2 className="mt-2 text-2xl font-semibold">Patient overview</h2>

            <p className="mt-4 leading-7 text-slate-700">
              {caseData.referralReason}
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600 lg:min-w-64">
            <p>
              <span className="font-semibold text-slate-900">Age:</span>{" "}
              {caseData.patient.age}
            </p>

            <p className="mt-2">
              <span className="font-semibold text-slate-900">Sex:</span>{" "}
              {caseData.patient.sex}
            </p>

            <p className="mt-2">
              <span className="font-semibold text-slate-900">Test:</span>{" "}
              {caseData.testType}
            </p>
          </div>
        </div>
      </Card>

      {caseData.visualisationExampleId ? (
        <LinkedVisualisationCard exampleId={caseData.visualisationExampleId} />
      ) : null}

      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="border-slate-200 bg-white">
          <h2 className="text-xl font-semibold">History</h2>

          <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 text-slate-700">
            {caseData.history.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </Card>

        <Card className="border-slate-200 bg-white">
          <h2 className="text-xl font-semibold">Phenotype</h2>

          <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 text-slate-700">
            {caseData.phenotype.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="border-slate-200 bg-white">
          <h2 className="text-xl font-semibold">Family structure</h2>

          <p className="mt-4 leading-7 text-slate-700">
            {caseData.familyStructure}
          </p>

          <p className="mt-4 leading-7 text-slate-700">
            {caseData.familyHistory}
          </p>
        </Card>

        <Card className="border-slate-200 bg-white">
          <h2 className="text-xl font-semibold">Service context</h2>

          <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 text-slate-700">
            {caseData.serviceContext.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </Card>
      </div>

      <section>
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="text-2xl font-semibold">Candidate findings</h2>

            <p className="mt-2 text-slate-600">
              Review the evidence packets before answering the decision
              checkpoints. Use the confidence guide to judge whether the values
              look technically convincing or need caution.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setIsCheatSheetOpen(true)}
            className="rounded-xl border border-slate-300 px-4 py-2 text-slate-700 transition hover:bg-slate-100"
          >
            Open confidence guide
          </button>
        </div>

        <div className="mt-5 grid gap-6">
          {caseData.candidateFindings.map((candidate) => (
            <Card key={candidate.id} className="border-slate-200 bg-white p-5">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
                    {candidate.label ?? candidate.id}
                  </p>

                  <h3 className="mt-1 text-xl font-semibold">
                    {candidate.gene} — {candidate.variant}
                  </h3>

                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                      {candidate.zygosity}
                    </span>

                    <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600">
                      {candidate.inheritanceSignal}
                    </span>

                    {candidate.consequence ? (
                      <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600">
                        {candidate.consequence}
                      </span>
                    ) : null}
                  </div>
                </div>
              </div>

              {candidate.rawEvidence ? (
                <EvidencePacket
                  evidence={candidate.rawEvidence}
                  onOpenCheatSheet={() => setIsCheatSheetOpen(true)}
                />
              ) : null}

              <div className="mt-5 grid gap-4 lg:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <h4 className="font-semibold">
                    Clinical context to consider
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {candidate.clinicalFit}
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <h4 className="font-semibold">
                    {allCheckpointsComplete
                      ? "Review note"
                      : "Review note locked"}
                  </h4>

                  {allCheckpointsComplete ? (
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {candidate.concern}
                    </p>
                  ) : (
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Complete the decision checkpoints before revealing this
                      review note.
                    </p>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <Card className="border-slate-200 bg-white">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
              Decision checkpoints
            </p>

            <h2 className="mt-2 text-2xl font-semibold">Make your decisions</h2>

            <p className="mt-3 leading-7 text-slate-600">
              Work through each checkpoint using the case context and raw
              evidence packets. The goal is to practise safe service-style
              reasoning, not just recall facts.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-center">
            <p className="text-3xl font-bold text-slate-900">
              {completedCheckpoints}/{totalCheckpoints}
            </p>

            <p className="mt-1 text-sm text-slate-500">completed</p>
          </div>
        </div>
      </Card>

      <div className="space-y-6">
        {caseData.decisionCheckpoints.map((checkpoint) => {
          const selectedIndex = selectedAnswers[checkpoint.id];
          const selectedOption =
            selectedIndex !== undefined
              ? checkpoint.options[selectedIndex]
              : undefined;

          return (
            <Card key={checkpoint.id} className="border-slate-200 bg-white p-5">
              <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
                {checkpoint.title}
              </p>

              <p className="mt-3 leading-7 text-slate-700">
                {checkpoint.context}
              </p>

              <h3 className="mt-5 text-xl font-semibold">
                {checkpoint.question}
              </h3>

              <div className="mt-4 space-y-3">
                {checkpoint.options.map((option, optionIndex) => {
                  const isSelected = selectedIndex === optionIndex;

                  let className =
                    "w-full rounded-2xl border px-4 py-3 text-left transition ";

                  if (selectedOption) {
                    if (option.isCorrect) {
                      className += "border-green-500 bg-green-50";
                    } else if (isSelected && !option.isCorrect) {
                      className += "border-red-500 bg-red-50";
                    } else {
                      className += "border-slate-200 bg-white";
                    }
                  } else {
                    className += isSelected
                      ? "border-slate-900 bg-slate-100"
                      : "border-slate-200 bg-white hover:bg-slate-50";
                  }

                  return (
                    <button
                      key={option.label}
                      type="button"
                      onClick={() =>
                        setSelectedAnswers((prev) => ({
                          ...prev,
                          [checkpoint.id]: optionIndex,
                        }))
                      }
                      className={className}
                    >
                      <span className="font-semibold">{option.label}.</span>{" "}
                      {option.text}
                    </button>
                  );
                })}
              </div>

              {selectedOption ? (
                <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p
                    className={`font-semibold ${
                      selectedOption.isCorrect
                        ? "text-green-800"
                        : "text-red-800"
                    }`}
                  >
                    {selectedOption.isCorrect
                      ? "Good decision."
                      : "Review this."}
                  </p>

                  <p className="mt-2 leading-7 text-slate-700">
                    {selectedOption.feedback}
                  </p>

                  <p className="mt-3 text-sm font-semibold text-slate-900">
                    Teaching point
                  </p>

                  <p className="mt-1 leading-7 text-slate-700">
                    {checkpoint.teachingPoint}
                  </p>
                </div>
              ) : null}
            </Card>
          );
        })}
      </div>

      {allCheckpointsComplete ? (
        <Phase5AssessmentPanel caseData={caseData} />
      ) : (
        <Card className="border-slate-200 bg-white">
          <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
            Guided case assessment locked
          </p>

          <h2 className="mt-2 text-xl font-semibold text-slate-900">
            Complete the checkpoints to unlock the extended assessment
          </h2>

          <p className="mt-3 leading-7 text-slate-600">
            Candidate ranking, escalation decisions, written handover practice,
            model-answer comparison, and the reasoning scorecard are unlocked
            after the decision checkpoints are complete.
          </p>
        </Card>
      )}

      {allCheckpointsComplete ? (
        <Card className="border-slate-200 bg-white">
          <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
            Case summary
          </p>

          <h2 className="mt-2 text-2xl font-semibold">
            Final reasoning summary
          </h2>

          <p className="mt-3 leading-7 text-slate-600">
            Reveal the full model reasoning summary after you have attempted the
            extended assessment tasks.
          </p>

          <button
            type="button"
            onClick={() => setShowFinalSummary((current) => !current)}
            className="mt-5 rounded-xl bg-slate-900 px-4 py-2 text-white transition hover:bg-slate-800"
          >
            {showFinalSummary
              ? "Hide final reasoning summary"
              : "Show final reasoning summary"}
          </button>

          {showFinalSummary ? (
            <>
              <p className="mt-5 leading-8 text-slate-700">
                {caseData.finalReflection}
              </p>

              <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm text-slate-600">
                  Checkpoints answered correctly:{" "}
                  <span className="font-semibold text-slate-900">
                    {correctCheckpoints} / {totalCheckpoints}
                  </span>
                </p>
              </div>
            </>
          ) : null}
        </Card>
      ) : null}
    </div>
  );
}