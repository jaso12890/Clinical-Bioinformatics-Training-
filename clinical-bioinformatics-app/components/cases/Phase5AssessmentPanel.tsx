"use client";

import { useMemo, useState } from "react";
import { Card } from "@/components/ui/card";

type CandidateFinding = {
  id: string;
  label?: string;
  gene: string;
  variant: string;
  concern: string;
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

type Phase5CaseData = {
  assessmentFocus?: string[];
  guidedTutorMode?: GuidedTutorMode;
  reasoningScorecard?: ReasoningScorecardItem[];
  candidateFindings: CandidateFinding[];
  phase5Assessment?: Phase5Assessment;
};

type Phase5AssessmentPanelProps = {
  caseData: Phase5CaseData;
};

function getCandidateLabel(
  candidateFindings: CandidateFinding[],
  candidateId: string
) {
  const candidate = candidateFindings.find((item) => item.id === candidateId);

  if (!candidate) {
    return candidateId;
  }

  return `${candidate.label ?? candidate.id}: ${candidate.gene}`;
}

export function Phase5AssessmentPanel({
  caseData,
}: Phase5AssessmentPanelProps) {
  const [rankingSelections, setRankingSelections] = useState<
    Record<number, string>
  >({});
  const [hasCheckedRanking, setHasCheckedRanking] = useState(false);
  const [selectedEscalationId, setSelectedEscalationId] = useState<
    string | null
  >(null);
  const [writtenSummary, setWrittenSummary] = useState("");
  const [showModelAnswer, setShowModelAnswer] = useState(false);
  const [scorecardScores, setScorecardScores] = useState<Record<string, number>>(
    {}
  );

  const candidateRanking = caseData.phase5Assessment?.candidateRanking;
  const escalationDecision = caseData.phase5Assessment?.escalationDecision;
  const writtenSummaryTask = caseData.phase5Assessment?.writtenSummary;

  const selectedCandidateIds = useMemo(() => {
    return Object.values(rankingSelections).filter(Boolean);
  }, [rankingSelections]);

  const rankingHasDuplicate = useMemo(() => {
    return selectedCandidateIds.length !== new Set(selectedCandidateIds).size;
  }, [selectedCandidateIds]);

  const rankingIsComplete = useMemo(() => {
    if (!candidateRanking) return false;

    return (
      candidateRanking.correctOrder.every(
        (_, index) => rankingSelections[index]
      ) && !rankingHasDuplicate
    );
  }, [candidateRanking, rankingSelections, rankingHasDuplicate]);

  const rankingIsCorrect = useMemo(() => {
    if (!candidateRanking || !rankingIsComplete) return false;

    return candidateRanking.correctOrder.every(
      (candidateId, index) => rankingSelections[index] === candidateId
    );
  }, [candidateRanking, rankingIsComplete, rankingSelections]);

  const selectedEscalation = escalationDecision?.options.find(
    (option) => option.id === selectedEscalationId
  );

  const totalScore = useMemo(() => {
    return Object.values(scorecardScores).reduce((total, score) => {
      return total + score;
    }, 0);
  }, [scorecardScores]);

  const maxTotalScore = useMemo(() => {
    return (
      caseData.reasoningScorecard?.reduce((total, item) => {
        return total + item.maxScore;
      }, 0) ?? 0
    );
  }, [caseData.reasoningScorecard]);

  const completedScorecardItems = useMemo(() => {
    return caseData.reasoningScorecard?.filter(
      (item) => scorecardScores[item.category] !== undefined
    ).length;
  }, [caseData.reasoningScorecard, scorecardScores]);

  const hasAssessmentContent =
    caseData.assessmentFocus?.length ||
    caseData.guidedTutorMode ||
    caseData.reasoningScorecard?.length ||
    caseData.phase5Assessment;

  if (!hasAssessmentContent) {
    return null;
  }

  return (
    <section className="space-y-8">
      <Card className="border-slate-200 bg-white">
        <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
          Guided case assessment
        </p>

        <h2 className="mt-2 text-2xl font-semibold text-slate-900">
          Reasoning assessment
        </h2>

        <p className="mt-3 leading-7 text-slate-600">
          Use this section to practise ranking findings, making escalation
          decisions, writing a safe handover summary, and checking which
          reasoning skills the case is testing.
        </p>

        {caseData.assessmentFocus?.length ? (
          <div className="mt-6">
            <h3 className="font-semibold text-slate-900">Assessment focus</h3>

            <div className="mt-3 flex flex-wrap gap-2">
              {caseData.assessmentFocus.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm font-medium text-slate-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ) : null}

        {caseData.guidedTutorMode ? (
          <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
            <h3 className="font-semibold text-emerald-900">
              Guided reasoning support
            </h3>

            <p className="mt-2 leading-7 text-emerald-900">
              {caseData.guidedTutorMode.description}
            </p>
          </div>
        ) : null}
      </Card>

      {candidateRanking ? (
        <Card className="border-slate-200 bg-white">
          <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
            Candidate ranking task
          </p>

          <h2 className="mt-2 text-xl font-semibold text-slate-900">
            Rank the candidates
          </h2>

          <p className="mt-3 leading-7 text-slate-600">
            {candidateRanking.prompt}
          </p>

          <div className="mt-6 space-y-3">
            {candidateRanking.correctOrder.map((_, index) => {
              const currentValue = rankingSelections[index] ?? "";

              return (
                <div
                  key={index}
                  className="grid gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 md:grid-cols-[140px_1fr]"
                >
                  <label
                    htmlFor={`ranking-${index}`}
                    className="font-semibold text-slate-900"
                  >
                    Rank {index + 1}
                  </label>

                  <select
                    id={`ranking-${index}`}
                    value={currentValue}
                    onChange={(event) => {
                      setHasCheckedRanking(false);
                      setRankingSelections((current) => ({
                        ...current,
                        [index]: event.target.value,
                      }));
                    }}
                    className="rounded-xl border border-slate-300 bg-white px-3 py-2 text-slate-900"
                  >
                    <option value="">Choose a candidate</option>

                    {caseData.candidateFindings.map((candidate) => {
                      const isAlreadySelected =
                        selectedCandidateIds.includes(candidate.id) &&
                        currentValue !== candidate.id;

                      return (
                        <option
                          key={candidate.id}
                          value={candidate.id}
                          disabled={isAlreadySelected}
                        >
                          {candidate.label ?? candidate.id}: {candidate.gene}
                          {isAlreadySelected ? " — already selected" : ""}
                        </option>
                      );
                    })}
                  </select>
                </div>
              );
            })}
          </div>

          {rankingHasDuplicate ? (
            <p className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900">
              Each candidate should only be used once in the ranking.
            </p>
          ) : null}

          <button
            type="button"
            disabled={!rankingIsComplete}
            onClick={() => setHasCheckedRanking(true)}
            className="mt-5 rounded-xl bg-slate-900 px-4 py-2 text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-slate-300"
          >
            Check ranking
          </button>

          {hasCheckedRanking ? (
            <div
              className={`mt-5 rounded-2xl border p-4 ${
                rankingIsCorrect
                  ? "border-emerald-200 bg-emerald-50"
                  : "border-amber-200 bg-amber-50"
              }`}
            >
              <p
                className={`font-semibold ${
                  rankingIsCorrect ? "text-emerald-900" : "text-amber-900"
                }`}
              >
                {rankingIsCorrect
                  ? "Strong ranking."
                  : "Review the candidate order."}
              </p>

              <p
                className={`mt-2 leading-7 ${
                  rankingIsCorrect ? "text-emerald-900" : "text-amber-900"
                }`}
              >
                {candidateRanking.explanation}
              </p>

              <div className="mt-4 rounded-xl bg-white/70 p-3 text-sm leading-6">
                <p className="font-semibold">Suggested order:</p>

                <ol className="mt-2 list-decimal space-y-1 pl-5">
                  {candidateRanking.correctOrder.map((candidateId) => (
                    <li key={candidateId}>
                      {getCandidateLabel(
                        caseData.candidateFindings,
                        candidateId
                      )}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          ) : null}
        </Card>
      ) : null}

      {escalationDecision ? (
        <Card className="border-slate-200 bg-white">
          <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
            Escalation decision task
          </p>

          <h2 className="mt-2 text-xl font-semibold text-slate-900">
            Decide the safest next action
          </h2>

          <p className="mt-3 leading-7 text-slate-600">
            {escalationDecision.prompt}
          </p>

          <div className="mt-5 space-y-3">
            {escalationDecision.options.map((option) => {
              const isSelected = selectedEscalationId === option.id;

              return (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => setSelectedEscalationId(option.id)}
                  className={`w-full rounded-2xl border p-4 text-left transition ${
                    isSelected
                      ? "border-slate-900 bg-slate-900 text-white"
                      : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  <p className="font-semibold">
                    {option.label}: {option.decision}
                  </p>
                </button>
              );
            })}
          </div>

          {selectedEscalation ? (
            <div
              className={`mt-5 rounded-2xl border p-4 ${
                selectedEscalation.isBest
                  ? "border-emerald-200 bg-emerald-50"
                  : "border-amber-200 bg-amber-50"
              }`}
            >
              <p
                className={`font-semibold ${
                  selectedEscalation.isBest
                    ? "text-emerald-900"
                    : "text-amber-900"
                }`}
              >
                {selectedEscalation.isBest
                  ? "Best escalation decision."
                  : "Review this escalation choice."}
              </p>

              <p
                className={`mt-2 leading-7 ${
                  selectedEscalation.isBest
                    ? "text-emerald-900"
                    : "text-amber-900"
                }`}
              >
                {selectedEscalation.feedback}
              </p>
            </div>
          ) : null}
        </Card>
      ) : null}

      {writtenSummaryTask ? (
        <Card className="border-slate-200 bg-white">
          <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
            Written reasoning task
          </p>

          <h2 className="mt-2 text-xl font-semibold text-slate-900">
            Write a trainee-level handover summary
          </h2>

          <p className="mt-3 leading-7 text-slate-600">
            {writtenSummaryTask.prompt}
          </p>

          <textarea
            value={writtenSummary}
            onChange={(event) => setWrittenSummary(event.target.value)}
            rows={7}
            placeholder="Write your reasoning summary here..."
            className="mt-5 w-full rounded-2xl border border-slate-300 bg-white p-4 leading-7 text-slate-900"
          />

          <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <h3 className="font-semibold text-slate-900">
              Self-check checklist
            </h3>

            <ul className="mt-3 list-disc space-y-2 pl-5 leading-7 text-slate-700">
              {writtenSummaryTask.checklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <button
            type="button"
            onClick={() => setShowModelAnswer((current) => !current)}
            className="mt-5 rounded-xl bg-slate-900 px-4 py-2 text-white transition hover:bg-slate-800"
          >
            {showModelAnswer ? "Hide model answer" : "Show model answer"}
          </button>

          {showModelAnswer ? (
            <div className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
              <h3 className="font-semibold text-emerald-900">Model answer</h3>

              <p className="mt-2 leading-7 text-emerald-900">
                {writtenSummaryTask.modelAnswer}
              </p>
            </div>
          ) : null}
        </Card>
      ) : null}

      {caseData.reasoningScorecard?.length ? (
        <Card className="border-slate-200 bg-white">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
                Reasoning scorecard
              </p>

              <h2 className="mt-2 text-xl font-semibold text-slate-900">
                Self-score your case reasoning
              </h2>

              <p className="mt-3 leading-7 text-slate-600">
                Score each reasoning skill after you have worked through the
                case. This is a self-check tool to help you identify strengths
                and weak areas.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-center">
              <p className="text-3xl font-bold text-slate-900">
                {totalScore}/{maxTotalScore}
              </p>

              <p className="mt-1 text-sm text-slate-500">
                {completedScorecardItems ?? 0}/
                {caseData.reasoningScorecard.length} scored
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-sm font-semibold text-slate-900">
              Scoring guide
            </p>

            <div className="mt-3 grid gap-3 text-sm text-slate-700 md:grid-cols-3">
              <p>
                <span className="font-semibold text-slate-900">0</span> =
                missed, unsafe, or unsupported reasoning
              </p>

              <p>
                <span className="font-semibold text-slate-900">1</span> =
                partly addressed, but important context was missing
              </p>

              <p>
                <span className="font-semibold text-slate-900">2</span> = safe,
                proportionate, and well-supported reasoning
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {caseData.reasoningScorecard.map((item) => {
              const selectedScore = scorecardScores[item.category];

              return (
                <div
                  key={item.category}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                >
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-semibold text-slate-900">
                      {item.category}
                    </h3>

                    <span className="shrink-0 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-600">
                      {selectedScore ?? "-"}/{item.maxScore}
                    </span>
                  </div>

                  <p className="mt-2 leading-7 text-slate-600">
                    {item.expectation}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {Array.from({ length: item.maxScore + 1 }).map(
                      (_, score) => {
                        const isSelected = selectedScore === score;

                        return (
                          <button
                            key={score}
                            type="button"
                            onClick={() =>
                              setScorecardScores((current) => ({
                                ...current,
                                [item.category]: score,
                              }))
                            }
                            className={`rounded-xl border px-4 py-2 text-sm font-semibold transition ${
                              isSelected
                                ? "border-slate-900 bg-slate-900 text-white"
                                : "border-slate-200 bg-white text-slate-700 hover:bg-slate-100"
                            }`}
                          >
                            {score}
                          </button>
                        );
                      }
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <button
            type="button"
            onClick={() => setScorecardScores({})}
            className="mt-5 rounded-xl border border-slate-300 px-4 py-2 text-slate-700 transition hover:bg-slate-100"
          >
            Reset scorecard
          </button>
        </Card>
      ) : null}
    </section>
  );
}