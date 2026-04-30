import Link from "next/link";
import { notFound } from "next/navigation";
import { PageContainer } from "@/components/layout/page-container";
import { SectionHeading } from "@/components/ui/section-heading";
import { MiniCaseFlow } from "@/components/cases/mini-case-flow";
import { module1MiniCase } from "@/content/cases/module-1-mini-case";
import { module2MiniCase } from "@/content/cases/module-2-mini-case";
import { module3MiniCase } from "@/content/cases/module-3-mini-case";
import { module4MiniCase } from "@/content/cases/module-4-mini-case";
import { module5MiniCase } from "@/content/cases/module-5-mini-case";
import { module6MiniCase } from "@/content/cases/module-6-mini-case";
import { module7MiniCase } from "@/content/cases/module-7-mini-case";
import { module8MiniCase } from "@/content/cases/module-8-mini-case";
import { module9MiniCase } from "@/content/cases/module-9-mini-case";
import { module10MiniCase } from "@/content/cases/module-10-mini-case";
import { module11MiniCase } from "@/content/cases/module-11-mini-case";
import { module12MiniCase } from "@/content/cases/module-12-mini-case";
import { module13MiniCase } from "@/content/cases/module-13-mini-case";
import { module14MiniCase } from "@/content/cases/module-14-mini-case";
import { module15MiniCase } from "@/content/cases/module-15-mini-case";
import { module16MiniCase } from "@/content/cases/module-16-mini-case";
import { module17MiniCase } from "@/content/cases/module-17-mini-case";
import { module18MiniCase } from "@/content/cases/module-18-mini-case";
import { module19MiniCase } from "@/content/cases/module-19-mini-case";
import { module20MiniCase } from "@/content/cases/module-20-mini-case";
import { module21MiniCase } from "@/content/cases/module-21-mini-case";
import { module22MiniCase } from "@/content/cases/module-22-mini-case";
import { module23MiniCase } from "@/content/cases/module-23-mini-case";
import { module24MiniCase } from "@/content/cases/module-24-mini-case";
import { module25MiniCase } from "@/content/cases/module-25-mini-case";
import { ModuleItemCompleteButton } from "@/components/learn/module-item-complete-button";

type TextSection = {
  title: string;
  body: string;
};

type CaseData = {
  title: string;
  description: string;
  introSections?: TextSection[];
  caseScenario?: TextSection;
  learnerTask?: TextSection;
  steps: {
    title: string;
    content: string[];
    question: string;
    options: string[];
    answerIndex: number;
    explanation: string;
  }[];
  shortWrittenResponseTask?: TextSection;
  strongAnswer?: TextSection;
  whatThisMiniCaseIsTesting?: TextSection;
  goodPerformanceLooksLike?: TextSection;
  conclusion?: string[];
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
  } else if (moduleSlug === "module-3") {
    caseData = module3MiniCase;
  } else if (moduleSlug === "module-4") {
    caseData = module4MiniCase;
  } else if (moduleSlug === "module-5") {
    caseData = module5MiniCase;
  } else if (moduleSlug === "module-6") {
    caseData = module6MiniCase;
  } else if (moduleSlug === "module-7") {
    caseData = module7MiniCase;
  } else if (moduleSlug === "module-8") {
    caseData = module8MiniCase;
  } else if (moduleSlug === "module-9") {
    caseData = module9MiniCase;
  } else if (moduleSlug === "module-10") {
    caseData = module10MiniCase;
  } else if (moduleSlug === "module-11") {
    caseData = module11MiniCase;
  } else if (moduleSlug === "module-12") {
    caseData = module12MiniCase;
  } else if (moduleSlug === "module-13") {
    caseData = module13MiniCase;
  } else if (moduleSlug === "module-14") {
    caseData = module14MiniCase;
  } else if (moduleSlug === "module-15") {
    caseData = module15MiniCase;
  } else if (moduleSlug === "module-16") {
    caseData = module16MiniCase;
  } else if (moduleSlug === "module-17") {
    caseData = module17MiniCase;
  } else if (moduleSlug === "module-18") {
    caseData = module18MiniCase;
  } else if (moduleSlug === "module-19") {
    caseData = module19MiniCase;
  } else if (moduleSlug === "module-20") {
    caseData = module20MiniCase;
  } else if (moduleSlug === "module-21") {
    caseData = module21MiniCase;
  } else if (moduleSlug === "module-22") {
    caseData = module22MiniCase;
  } else if (moduleSlug === "module-23") {
    caseData = module23MiniCase;
  } else if (moduleSlug === "module-24") {
    caseData = module24MiniCase;
  } else if (moduleSlug === "module-25") {
    caseData = module25MiniCase;
  } else {
    notFound();
  }

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
            introSections={caseData.introSections}
            caseScenario={caseData.caseScenario}
            learnerTask={caseData.learnerTask}
            steps={caseData.steps}
            shortWrittenResponseTask={caseData.shortWrittenResponseTask}
            strongAnswer={caseData.strongAnswer}
            whatThisMiniCaseIsTesting={caseData.whatThisMiniCaseIsTesting}
            goodPerformanceLooksLike={caseData.goodPerformanceLooksLike}
            conclusion={caseData.conclusion ?? []}
          />
        </div>

        <div className="mt-8">
          <ModuleItemCompleteButton
            moduleSlug={moduleSlug}
            itemType="miniCase"
            incompleteLabel="Mark Mini Case Complete"
            completeLabel="Mini Case Complete"
          />
        </div>
      </PageContainer>
    </main>
  );
}