import type { VisualisationExample } from "@/components/visualise/visualisation-data";
import { VariantMarker } from "@/components/visualise/VariantMarker";

type GenomeTrackProps = {
  example: VisualisationExample;
};

function getPercent(position: number, start: number, end: number) {
  const range = end - start;

  if (range <= 0) {
    return 0;
  }

  return ((position - start) / range) * 100;
}

export function GenomeTrack({ example }: GenomeTrackProps) {
  const { region, gene, variant } = example;

  const geneStartPercent = getPercent(gene.start, region.start, region.end);
  const geneEndPercent = getPercent(gene.end, region.start, region.end);
  const variantPercent = getPercent(variant.position, region.start, region.end);

  const geneLeft = Math.min(geneStartPercent, geneEndPercent);
  const geneWidth = Math.max(Math.abs(geneEndPercent - geneStartPercent), 4);

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div>
        <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
          Region view
        </p>

        <h2 className="mt-2 text-xl font-semibold text-slate-900">
          Genomic region and gene position
        </h2>

        <p className="mt-2 leading-7 text-slate-600">
          This track shows the selected genomic interval, the gene location
          within that interval, and the approximate position of the example
          variant.
        </p>
      </div>

      <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold text-slate-900">
              {region.label}
            </p>

            <p className="mt-1 text-sm text-slate-600">
              Chromosome {region.chromosome}
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700">
            {gene.symbol} · {gene.biotype} · {gene.strand} strand
          </div>
        </div>

        <div className="mt-8 flex justify-between text-xs font-medium text-slate-500">
          <span>{region.start.toLocaleString()}</span>
          <span>{region.end.toLocaleString()}</span>
        </div>

        <div className="relative mt-4 h-32">
          <div className="absolute left-0 right-0 top-20 h-2 rounded-full bg-slate-200" />

          <div
            className="absolute top-14 flex h-14 items-center justify-center rounded-xl border border-sky-300 bg-sky-100 px-3 text-sm font-semibold text-sky-900 shadow-sm"
            style={{
              left: `${geneLeft}%`,
              width: `${geneWidth}%`,
            }}
          >
            {gene.symbol}
          </div>

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