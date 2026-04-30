import { PageContainer } from "@/components/layout/page-container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { VisualiseWorkflowCard } from "@/components/visualise/VisualiseWorkflowCard";
import { VisualiseInterpretationGuide } from "@/components/visualise/VisualiseInterpretationGuide";
import { VisualiseLegendCard } from "@/components/visualise/VisualiseLegendCard";
import { VisualiseNextStepsCard } from "@/components/visualise/VisualiseNextStepsCard";
import { VisualiseInteractiveSection } from "@/components/visualise/VisualiseInteractiveSection";

export default function VisualisePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <PageContainer className="max-w-[1400px]">
        <SectionHeading
          title="Genomic Visualisation"
          description="Turn abstract genomic coordinates into a simple visual model. This section helps learners connect genes, transcripts, exons, and variant positions before making evidence-based reasoning decisions."
        />

        <section className="mt-8">
          <VisualiseWorkflowCard />
        </section>

        <section className="mt-8 grid gap-6 xl:grid-cols-2">
          <VisualiseLegendCard />
          <VisualiseInterpretationGuide />
        </section>

        <section className="mt-8">
          <VisualiseInteractiveSection />
        </section>

        <section className="mt-8">
          <VisualiseNextStepsCard />
        </section>

        <section className="mt-10">
          <Card className="border-slate-200 bg-white">
            <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
              Phase 4 focus
            </p>

            <h2 className="mt-2 text-2xl font-semibold text-slate-900">
              From coordinates to visual context
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Genomic coordinates can feel abstract when they are viewed only as
              numbers. This visualisation helps learners see how a selected
              region, gene, transcript, exon structure, and variant position
              relate to each other. The aim is to support careful reasoning, not
              to replace transcript selection, quality review, or clinical
              interpretation guidance.
            </p>
          </Card>
        </section>

        <section className="mt-10">
          <Card className="border-slate-200 bg-white">
            <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
              Safe use reminder
            </p>

            <h2 className="mt-2 text-xl font-semibold text-slate-900">
              Visual support, not final interpretation
            </h2>

            <p className="mt-3 leading-7 text-slate-600">
              A visual marker can help explain where a variant sits, but it does
              not determine clinical significance by itself. Variant reasoning
              still needs phenotype fit, inheritance context, transcript
              awareness, technical confidence, evidence review, and appropriate
              clinical laboratory oversight.
            </p>
          </Card>
        </section>
      </PageContainer>
    </main>
  );
}