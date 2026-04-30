import Link from "next/link";
import { notFound } from "next/navigation";
import { modules } from "@/content/modules";
import { PageContainer } from "@/components/layout/page-container";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";

type PageProps = {
  params: Promise<{
    moduleSlug: string;
  }>;
};

export default async function ModuleCompletePage({ params }: PageProps) {
  const { moduleSlug } = await params;

  const moduleData = modules.find((module) => module.slug === moduleSlug);
  if (!moduleData) {
    notFound();
  }

  const currentModuleIndex = modules.findIndex(
    (module) => module.slug === moduleSlug
  );
  const nextModule = modules[currentModuleIndex + 1];

  let understandingText = "";

  if (moduleSlug === "module-1") {
    understandingText =
      "You should now be able to explain the role of Clinical Bioinformatics (Genomics), where it sits in the NHS, how it can affect patient care, how it differs from research bioinformatics, why role boundaries matter, and why multidisciplinary teamwork and escalation are essential.";
  } else if (moduleSlug === "module-2") {
    understandingText =
      "You should now understand why patient safety still matters in a data-facing role, why genomic data is sensitive, why confidentiality is a professional duty, why documentation and traceability matter, why NHS work is governed and controlled, what scope of practice means, and why escalation is part of safe professional behaviour.";
  } else {
    understandingText =
      "You have finished this module and should now be able to explain its main learning points in your own words.";
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <PageContainer className="max-w-4xl">
        <div className="mt-6">
          <SectionHeading
            eyebrow="Module Complete"
            title={`${moduleData.title} complete`}
            description="You’ve finished the learning flow for this module."
          />
        </div>

        <Card className="mt-8">
          <h2 className="text-xl font-semibold">What you’ve now completed</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-700">
            <li>All lesson content in this module</li>
            <li>The module quiz</li>
            <li>The mini case</li>
          </ul>
        </Card>

        <Card className="mt-6">
          <h2 className="text-xl font-semibold">What you should now understand</h2>
          <p className="mt-4 leading-8 text-slate-700">{understandingText}</p>
        </Card>

        <Card className="mt-6">
          <h2 className="text-xl font-semibold">Review this module</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href={`/learn/${moduleSlug}/quiz`}
              className="rounded-xl border border-slate-300 px-4 py-2"
            >
              Module Quiz
            </Link>

            <Link
              href={`/learn/${moduleSlug}/case`}
              className="rounded-xl border border-slate-300 px-4 py-2"
            >
              Mini Case
            </Link>
          </div>
        </Card>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href={`/learn/${moduleSlug}`}
            className="rounded-xl border border-slate-300 px-4 py-2"
          >
            Back to Module
          </Link>

          <Link
            href="/learn"
            className="rounded-xl border border-slate-300 px-4 py-2"
          >
            Back to Learn
          </Link>

          {nextModule ? (
            <Link
              href={`/learn/${nextModule.slug}`}
              className="rounded-xl bg-slate-900 px-4 py-2 text-white"
            >
              Start Next Module
            </Link>
          ) : null}
        </div>
      </PageContainer>
    </main>
  );
}