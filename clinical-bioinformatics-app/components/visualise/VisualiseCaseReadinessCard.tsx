import type { VisualisationExample } from "@/components/visualise/visualisation-data";

type VisualiseCaseReadinessCardProps = {
  example: VisualisationExample;
};

export function VisualiseCaseReadinessCard({
  example,
}: VisualiseCaseReadinessCardProps) {
  const { caseReadiness } = example;

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
        Case-link readiness
      </p>

      <h2 className="mt-2 text-xl font-semibold text-slate-900">
        How this scenario can support future cases
      </h2>

      <p className="mt-2 leading-7 text-slate-600">
        This visualisation is structured so it can later be reused inside the
        case simulator as supporting visual context.
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <p className="text-sm font-semibold text-slate-500">
            Scenario type
          </p>

          <p className="mt-2 leading-7 text-slate-900">
            {caseReadiness.scenarioType}
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <p className="text-sm font-semibold text-slate-500">
            Phase 5 reuse ID
          </p>

          <p className="mt-2 break-words font-mono text-sm leading-7 text-slate-900">
            {caseReadiness.phase5ReuseId}
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 md:col-span-2">
          <p className="text-sm font-semibold text-slate-500">
            Future case use
          </p>

          <p className="mt-2 leading-7 text-slate-900">
            {caseReadiness.futureCaseUse}
          </p>
        </div>

        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 md:col-span-2">
          <p className="text-sm font-semibold text-amber-800">
            Learner decision focus
          </p>

          <p className="mt-2 leading-7 text-amber-900">
            {caseReadiness.learnerDecisionFocus}
          </p>
        </div>
      </div>
    </div>
  );
}