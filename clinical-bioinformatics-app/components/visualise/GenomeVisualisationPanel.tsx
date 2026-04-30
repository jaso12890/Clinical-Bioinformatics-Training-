import type { VisualisationExample } from "@/components/visualise/visualisation-data";
import { GenomeTrack } from "@/components/visualise/GenomeTrack";
import { TranscriptTrack } from "@/components/visualise/TranscriptTrack";
import { VariantSummaryCard } from "@/components/visualise/VariantSummaryCard";

type GenomeVisualisationPanelProps = {
  example: VisualisationExample;
};

export function GenomeVisualisationPanel({
  example,
}: GenomeVisualisationPanelProps) {
  return (
    <section className="grid gap-6 xl:grid-cols-[minmax(0,2fr)_minmax(320px,1fr)]">
      <div className="space-y-6">
        <GenomeTrack example={example} />
        <TranscriptTrack example={example} />
      </div>

      <div>
        <VariantSummaryCard example={example} />
      </div>
    </section>
  );
}