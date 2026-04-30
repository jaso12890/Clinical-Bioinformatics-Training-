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

  const moduleIndex = modules.findIndex((module) => module.slug === moduleSlug);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <PageContainer className="max-w-5xl">
        <Link href="/learn" className="text-sm text-slate-500">
          ← Back to Learn
        </Link>

        <div className="mt-6">
          <SectionHeading
            eyebrow={`Module ${moduleIndex + 1}`}
            title={moduleData.title}
            description={moduleData.description}
          />
        </div>

        <ModuleProgress
          moduleSlug={moduleSlug}
          lessons={moduleData.lessons.map((lesson) => ({
            slug: lesson.slug,
            title: lesson.title,
            quiz: "quiz" in lesson ? lesson.quiz : undefined,
          }))}
        />
      </PageContainer>
    </main>
  );
}