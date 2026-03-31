import Link from "next/link";
import { cases } from "@/content/cases";
import { PageContainer } from "@/components/layout/page-container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";

export default function CasesPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <PageContainer>
        <SectionHeading
          title="Cases"
          description="Practice clinical bioinformatics reasoning with guided cases."
        />

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {cases.map((caseItem) => (
            <Card key={caseItem.id}>
              <p className="text-sm font-medium text-slate-500">
                {caseItem.level}
              </p>
              <h2 className="mt-2 text-xl font-semibold">{caseItem.title}</h2>
              <p className="mt-3 text-slate-600">{caseItem.summary}</p>

              <div className="mt-4 text-sm text-slate-500">
                Patient: {caseItem.patient.age} years old, {caseItem.patient.sex}
              </div>

              <Link
                href={`/cases/${caseItem.slug}`}
                className="mt-5 inline-block rounded-xl bg-slate-900 px-4 py-2 text-white"
              >
                Open Case
              </Link>
            </Card>
          ))}
        </div>
      </PageContainer>
    </main>
  );
}