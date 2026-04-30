import Link from "next/link";
import { cases } from "@/content/cases";
import { notFound } from "next/navigation";
import { PageContainer } from "@/components/layout/page-container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ClinicalCaseSimulator } from "@/components/cases/clinical-case-simulator";
import { CaseCompleteButton } from "@/components/cases/CaseCompleteButton";

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
      <PageContainer className="max-w-5xl">
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

        <ClinicalCaseSimulator caseData={caseData} />

        <CaseCompleteButton caseSlug={caseData.slug} />
      </PageContainer>
    </main>
  );
}