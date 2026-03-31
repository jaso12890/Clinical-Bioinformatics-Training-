import Link from "next/link";
import { PageContainer } from "@/components/layout/page-container";
import { Card } from "@/components/ui/card";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <PageContainer className="flex flex-col gap-6">
        <Card>
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Clinical Bioinformatics Genomics
          </p>
          <h1 className="mt-2 text-4xl font-bold">
            Beginner learning app for STP Clinical Bioinformatics
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">
            Learn the role, NHS context, patient safety, and genomics foundations
            step by step.
          </p>

          <div className="mt-6 flex gap-4">
            <Link
              href="/dashboard"
              className="rounded-xl bg-slate-900 px-5 py-3 text-white"
            >
              Go to Dashboard
            </Link>
            <Link
              href="/learn"
              className="rounded-xl border border-slate-300 px-5 py-3"
            >
              Start Learning
            </Link>
          </div>
        </Card>
      </PageContainer>
    </main>
  );
}