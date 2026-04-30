import type { VisualisationExample } from "@/components/visualise/visualisation-data";

type VariantSummaryCardProps = {
  example: VisualisationExample;
};

export function VariantSummaryCard({ example }: VariantSummaryCardProps) {
  const { region, gene, transcript, variant } = example;

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
        Linked summary
      </p>

      <h2 className="mt-2 text-xl font-semibold text-slate-900">
        Variant context card
      </h2>

      <p className="mt-2 leading-7 text-slate-600">
        Use this card to connect the visual marker back to the evidence details a
        learner would need to review.
      </p>

      <dl className="mt-6 space-y-4">
        <div>
          <dt className="text-sm font-semibold text-slate-500">Gene</dt>
          <dd className="mt-1 text-slate-900">
            {gene.symbol} — {gene.name}
          </dd>
        </div>

        <div>
          <dt className="text-sm font-semibold text-slate-500">Transcript</dt>
          <dd className="mt-1 text-slate-900">{transcript.id}</dd>
        </div>

        <div>
          <dt className="text-sm font-semibold text-slate-500">Coordinate</dt>
          <dd className="mt-1 text-slate-900">{variant.coordinate}</dd>
        </div>

        <div>
          <dt className="text-sm font-semibold text-slate-500">HGVS</dt>
          <dd className="mt-1 text-slate-900">{variant.hgvs}</dd>
        </div>

        <div>
          <dt className="text-sm font-semibold text-slate-500">
            Predicted consequence
          </dt>
          <dd className="mt-1 text-slate-900">
            {variant.predictedConsequence}
          </dd>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <dt className="text-sm font-semibold text-slate-900">
            Coordinate safety context
          </dt>

          <dd className="mt-3 space-y-3 text-sm text-slate-700">
            <div>
              <span className="font-semibold text-slate-900">
                Assembly / build:
              </span>{" "}
              {region.assembly}
            </div>

            <div>
              <span className="font-semibold text-slate-900">
                Region displayed:
              </span>{" "}
              {region.label}
            </div>

            <div>
              <span className="font-semibold text-slate-900">Gene strand:</span>{" "}
              {gene.strand}
            </div>

            <div>
              <span className="font-semibold text-slate-900">
                Transcript used:
              </span>{" "}
              {transcript.id}
            </div>
          </dd>
        </div>

        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4">
          <dt className="text-sm font-semibold text-amber-800">
            Evidence reminder
          </dt>
          <dd className="mt-2 leading-7 text-amber-900">
            {variant.clinvarSummary}
          </dd>
        </div>
      </dl>
    </div>
  );
}