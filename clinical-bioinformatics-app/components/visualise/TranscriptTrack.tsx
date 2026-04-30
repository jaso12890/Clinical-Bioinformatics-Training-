import type { VisualisationExample } from "@/components/visualise/visualisation-data";
import { VariantMarker } from "@/components/visualise/VariantMarker";

type TranscriptTrackProps = {
  example: VisualisationExample;
};

function getPercent(position: number, start: number, end: number) {
  const range = end - start;

  if (range <= 0) {
    return 0;
  }

  return ((position - start) / range) * 100;
}

export function TranscriptTrack({ example }: TranscriptTrackProps) {
  const { transcript, variant } = example;

  const variantPercent = getPercent(
    variant.position,
    transcript.start,
    transcript.end
  );

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div>
        <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
          Transcript view
        </p>

        <h2 className="mt-2 text-xl font-semibold text-slate-900">
          Transcript and exon structure
        </h2>

        <p className="mt-2 leading-7 text-slate-600">
          This track shows a simplified transcript model. Exons are shown as
          boxes, and the variant marker helps the learner connect a coordinate to
          transcript structure.
        </p>
      </div>

      <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold text-slate-900">
              {transcript.id}
            </p>

            <p className="mt-1 text-sm text-slate-600">
              {transcript.consequenceContext}
            </p>
          </div>

          <div className="rounded-xl border border-violet-200 bg-violet-50 px-3 py-2 text-sm font-medium text-violet-700">
            {transcript.exons.length} displayed exons
          </div>
        </div>

        <div className="mt-8 flex justify-between text-xs font-medium text-slate-500">
          <span>{transcript.start.toLocaleString()}</span>
          <span>{transcript.end.toLocaleString()}</span>
        </div>

        <div className="relative mt-4 h-36">
          <div className="absolute left-0 right-0 top-20 h-1 rounded-full bg-slate-300" />

          {transcript.exons.map((exon) => {
            const exonStartPercent = getPercent(
              exon.start,
              transcript.start,
              transcript.end
            );
            const exonEndPercent = getPercent(
              exon.end,
              transcript.start,
              transcript.end
            );

            const exonLeft = Math.min(exonStartPercent, exonEndPercent);
            const exonWidth = Math.max(
              Math.abs(exonEndPercent - exonStartPercent),
              1.5
            );

            return (
              <div
                key={exon.id}
                className="absolute top-14 flex h-14 items-center justify-center rounded-lg border border-violet-300 bg-violet-100 text-xs font-semibold text-violet-900 shadow-sm"
                style={{
                  left: `${exonLeft}%`,
                  width: `${exonWidth}%`,
                }}
                title={`Exon ${exon.label}: ${exon.start.toLocaleString()}-${exon.end.toLocaleString()}`}
              >
                {exon.label}
              </div>
            );
          })}

          <VariantMarker
            positionPercent={variantPercent}
            label={variant.label}
            coordinate={variant.coordinate}
          />
        </div>
      </div>
    </div>
  );
}