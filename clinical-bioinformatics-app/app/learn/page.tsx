import { modules } from "@/content/modules";
import { PageContainer } from "@/components/layout/page-container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ModuleCard } from "@/components/learn/module-card";

export default function LearnPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <PageContainer>
        <SectionHeading
          title="Learn"
          description="Start with the core modules below."
        />

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {modules.map((module) => (
            <ModuleCard
              key={module.slug}
              moduleSlug={module.slug}
              title={module.title}
              description={module.description}
              lessons={module.lessons.map((lesson) => ({
                slug: lesson.slug
              }))}
            />
          ))}
        </div>
      </PageContainer>
    </main>
  );
}