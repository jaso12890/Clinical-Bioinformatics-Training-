import Link from "next/link";
import { notFound } from "next/navigation";
import { PageContainer } from "@/components/layout/page-container";
import { SectionHeading } from "@/components/ui/section-heading";
import { MiniCaseFlow } from "@/components/cases/mini-case-flow";
import { module1MiniCase } from "@/content/cases/module-1-mini-case";
import { module2MiniCase } from "@/content/cases/module-2-mini-case";
import { ModuleItemCompleteButton } from "@/components/learn/module-item-complete-button";

type CaseData = {
  title: string;
  description: string;
  steps: {
    title: string;
    content: string[];
    question: string;
    options: string[];
    answerIndex: number;
    explanation: string;
  }[];
  conclusion: string[];
};

type PageProps = {
  params: Promise<{
    moduleSlug: string;
  }>;
};

export default async function ModuleCasePage({ params }: PageProps) {
  const { moduleSlug } = await params;

  let caseData: CaseData;

  if (moduleSlug === "module-1") {
    caseData = module1MiniCase;
  } else if (moduleSlug === "module-2") {
    caseData = module2MiniCase;
  } else {
    notFound();
  }

  const storageKey = `module-case-progress:${moduleSlug}`;

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <PageContainer className="max-w-4xl">
        <Link href={`/learn/${moduleSlug}`} className="text-sm text-slate-500">
          ← Back to Module
        </Link>

        <div className="mt-6">
          <SectionHeading
            eyebrow="Mini Case"
            title={caseData.title}
            description={caseData.description}
          />
        </div>

        <div className="mt-8">
          <MiniCaseFlow
            steps={caseData.steps}
            conclusion={caseData.conclusion}
          />
        </div>

        <div className="mt-8">
          <ModuleItemCompleteButton
            storageKey={storageKey}
            incompleteLabel="Mark Mini Case Complete"
            completeLabel="Mini Case Complete"
          />
        </div>
      </PageContainer>
    </main>
  );
}