import Link from "next/link";
import { notFound } from "next/navigation";
import { PageContainer } from "@/components/layout/page-container";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { module1Lesson1Glossary } from "@/content/glossary/module-1-lesson-1";
import { module1Lesson2Glossary } from "@/content/glossary/module-1-lesson-2";
import { module1Lesson3Glossary } from "@/content/glossary/module-1-lesson-3";
import { module1Lesson4Glossary } from "@/content/glossary/module-1-lesson-4";
import { module1Lesson5Glossary } from "@/content/glossary/module-1-lesson-5";
import { module1Lesson6Glossary } from "@/content/glossary/module-1-lesson-6";
import { module2Lesson1Glossary } from "@/content/glossary/module-2-lesson-1";
import { module2Lesson2Glossary } from "@/content/glossary/module-2-lesson-2";
import { module2Lesson3Glossary } from "@/content/glossary/module-2-lesson-3";
import { module2Lesson4Glossary } from "@/content/glossary/module-2-lesson-4";
import { module2Lesson5Glossary } from "@/content/glossary/module-2-lesson-5";
import { module2Lesson6Glossary } from "@/content/glossary/module-2-lesson-6";

type GlossaryItem = {
  term: string;
  definition: string;
};

type PageProps = {
  params: Promise<{
    moduleSlug: string;
    lessonSlug: string;
  }>;
  searchParams?: Promise<{
    returnTo?: string;
  }>;
};

function getLessonGlossary(
  moduleSlug: string,
  lessonSlug: string
): { title: string; items: GlossaryItem[] } | null {
  if (moduleSlug === "module-1") {
    switch (lessonSlug) {
      case "lesson-1":
        return { title: "Lesson 1 Glossary", items: module1Lesson1Glossary };
      case "lesson-2":
        return { title: "Lesson 2 Glossary", items: module1Lesson2Glossary };
      case "lesson-3":
        return { title: "Lesson 3 Glossary", items: module1Lesson3Glossary };
      case "lesson-4":
        return { title: "Lesson 4 Glossary", items: module1Lesson4Glossary };
      case "lesson-5":
        return { title: "Lesson 5 Glossary", items: module1Lesson5Glossary };
      case "lesson-6":
        return { title: "Lesson 6 Glossary", items: module1Lesson6Glossary };
      default:
        return null;
    }
  }

  if (moduleSlug === "module-2") {
    switch (lessonSlug) {
      case "lesson-1":
        return { title: "Lesson 1 Glossary", items: module2Lesson1Glossary };
      case "lesson-2":
        return { title: "Lesson 2 Glossary", items: module2Lesson2Glossary };
      case "lesson-3":
        return { title: "Lesson 3 Glossary", items: module2Lesson3Glossary };
      case "lesson-4":
        return { title: "Lesson 4 Glossary", items: module2Lesson4Glossary };
      case "lesson-5":
        return { title: "Lesson 5 Glossary", items: module2Lesson5Glossary };
      case "lesson-6":
        return { title: "Lesson 6 Glossary", items: module2Lesson6Glossary };
      default:
        return null;
    }
  }

  return null;
}

export default async function LessonGlossaryPage({
  params,
  searchParams
}: PageProps) {
  const { moduleSlug, lessonSlug } = await params;
  const resolvedSearchParams = searchParams ? await searchParams : {};
  const returnTo = resolvedSearchParams.returnTo;

  const glossary = getLessonGlossary(moduleSlug, lessonSlug);
  if (!glossary) {
    notFound();
  }

  const backHref = returnTo || `/learn/${moduleSlug}/${lessonSlug}`;

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <PageContainer className="max-w-4xl">
        <Link href={backHref} className="text-sm text-slate-500">
          ← Back
        </Link>

        <div className="mt-6">
          <SectionHeading
            eyebrow="Glossary"
            title={glossary.title}
            description="Key terms from this lesson explained in simple language."
          />
        </div>

        <div className="mt-8 space-y-4">
          {glossary.items.map((item) => (
            <Card key={item.term}>
              <h2 className="text-xl font-semibold">{item.term}</h2>
              <p className="mt-3 leading-7 text-slate-700">{item.definition}</p>
            </Card>
          ))}
        </div>
      </PageContainer>
    </main>
  );
}