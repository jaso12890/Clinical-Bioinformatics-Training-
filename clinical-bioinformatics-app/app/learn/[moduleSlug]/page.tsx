import Link from "next/link";
import { modules } from "@/content/modules";
import { notFound } from "next/navigation";
import { PageContainer } from "@/components/layout/page-container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ModuleProgress } from "@/components/learn/module-progress";

type PageProps = {
  params: Promise<{
    moduleSlug: string;
  }>;
};

export default async function ModulePage({ params }: PageProps) {
  const { moduleSlug } = await params;
  const moduleData = modules.find((module) => module.slug === moduleSlug);

  if (!moduleData) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <PageContainer className="max-w-4xl">
        <Link href="/learn" className="text-sm text-slate-500">
          ← Back to Learn
        </Link>

        <div className="mt-6">
          <SectionHeading
            eyebrow="Module"
            title={moduleData.title}
            description={moduleData.description}
          />
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href={`/learn/${moduleSlug}/glossary`}
            className="rounded-xl border border-slate-300 px-4 py-2"
          >
            Glossary
          </Link>

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

        <ModuleProgress
          moduleSlug={moduleSlug}
          lessons={moduleData.lessons.map((lesson) => ({
            slug: lesson.slug,
            title: lesson.title
          }))}
        />
      </PageContainer>
    </main>
  );
}