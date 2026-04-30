import Link from "next/link";
import { PageContainer } from "@/components/layout/page-container";
import { SectionHeading } from "@/components/ui/section-heading";
import { DashboardProgress } from "@/components/learn/dashboard-progress";
import { Card } from "@/components/ui/card";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <PageContainer>
        <SectionHeading
          title="Dashboard"
          description="Track your progress and continue your learning journey."
        />

        <DashboardProgress />

        <section className="mt-10">
          <div>
            <h2 className="text-2xl font-semibold">Training areas</h2>
            <p className="mt-2 text-slate-600">
              Move between structured learning, case reasoning, genomic evidence
              exploration, and visual genomic context.
            </p>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            <Card className="border-slate-200 bg-white">
              <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
                Phase 2
              </p>

              <h3 className="mt-2 text-xl font-semibold">
                Clinical Case Simulator
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Practise NHS-style clinical bioinformatics reasoning using
                static handcrafted cases.
              </p>

              <div className="mt-5">
                <Link
                  href="/cases"
                  className="inline-block rounded-xl bg-slate-900 px-4 py-2 text-white transition hover:bg-slate-800"
                >
                  Open cases
                </Link>
              </div>
            </Card>

            <Card className="border-slate-200 bg-white">
              <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
                Phase 3
              </p>

              <h3 className="mt-2 text-xl font-semibold">Genomic Explorer</h3>

              <p className="mt-3 leading-7 text-slate-600">
                Explore real genomic information in a simplified,
                learner-friendly format.
              </p>

              <div className="mt-5">
                <Link
                  href="/explore"
                  className="inline-block rounded-xl bg-slate-900 px-4 py-2 text-white transition hover:bg-slate-800"
                >
                  Open explorer
                </Link>
              </div>
            </Card>

            <Card className="border-slate-200 bg-white">
              <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
                Phase 4
              </p>

              <h3 className="mt-2 text-xl font-semibold">
                Genomic Visualisation
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Turn genomic coordinates, genes, transcripts, exons, and variant
                positions into a simple visual model.
              </p>

              <div className="mt-5">
                <Link
                  href="/visualise"
                  className="inline-block rounded-xl bg-slate-900 px-4 py-2 text-white transition hover:bg-slate-800"
                >
                  Open visualise
                </Link>
              </div>
            </Card>
          </div>
        </section>

        <p className="mt-12 border-t border-slate-200 pt-4 text-xs leading-relaxed text-slate-500">
          This learning material was made with the support of AI. It is intended
          for education and training only and should not be used for clinical
          decision-making. Always follow local NHS guidance, validated service
          processes, and professional supervision.
        </p>
      </PageContainer>
    </main>
  );
}