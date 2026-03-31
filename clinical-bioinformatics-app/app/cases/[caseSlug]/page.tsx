import Link from "next/link";
import { cases } from "@/content/cases";
import { notFound } from "next/navigation";
import { PageContainer } from "@/components/layout/page-container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";

type PageProps = {
  params: Promise<{
    caseSlug: string;
  }>;
};

export default async function CaseDetailPage({ params }: PageProps) {
  const { caseSlug } = await params;

  const caseData = cases.find((caseItem) => caseItem.slug === caseSlug);
  if (!caseData) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <PageContainer className="max-w-4xl">
        <Link href="/cases" className="text-sm text-slate-500">
          ← Back to Cases
        </Link>

        <div className="mt-6">
          <SectionHeading
            eyebrow={caseData.level}
            title={caseData.title}
            description={caseData.summary}
          />
        </div>

        <div className="mt-8 grid gap-6">
          <Card>
            <h2 className="text-xl font-semibold">Patient overview</h2>
            <p className="mt-3 text-slate-600">
              Age: {caseData.patient.age}
            </p>
            <p className="mt-1 text-slate-600">
              Sex: {caseData.patient.sex}
            </p>
          </Card>

          <Card>
            <h2 className="text-xl font-semibold">Referral reason</h2>
            <p className="mt-3 text-slate-700">{caseData.referralReason}</p>
          </Card>

          <Card>
            <h2 className="text-xl font-semibold">History</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
              {caseData.history.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </Card>

          <Card>
            <h2 className="text-xl font-semibold">Phenotype</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
              {caseData.phenotype.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </Card>

          <Card>
            <h2 className="text-xl font-semibold">Family history</h2>
            <p className="mt-3 text-slate-700">{caseData.familyHistory}</p>
          </Card>
        </div>
      </PageContainer>
    </main>
  );
}