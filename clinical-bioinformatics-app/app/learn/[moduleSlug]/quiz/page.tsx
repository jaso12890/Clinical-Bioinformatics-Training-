import Link from "next/link";
import { notFound } from "next/navigation";
import { PageContainer } from "@/components/layout/page-container";
import { SectionHeading } from "@/components/ui/section-heading";
import { LessonQuiz } from "@/components/quiz/lesson-quiz";
import { module1Quiz } from "@/content/quizzes/module-1";
import { module2Quiz } from "@/content/quizzes/module-2";
import { ModuleItemCompleteButton } from "@/components/learn/module-item-complete-button";

type PageProps = {
  params: Promise<{
    moduleSlug: string;
  }>;
};

export default async function ModuleQuizPage({ params }: PageProps) {
  const { moduleSlug } = await params;

  let title = "";
  let description = "";
  let questions: {
    question: string;
    options: string[];
    answerIndex: number;
    explanation?: string;
  }[] = [];

  if (moduleSlug === "module-1") {
    title = "Module 1 Quiz";
    description = "Test your understanding of the key ideas across Module 1.";
    questions = module1Quiz;
  } else if (moduleSlug === "module-2") {
    title = "Module 2 Quiz";
    description = "Test your understanding of the key ideas across Module 2.";
    questions = module2Quiz;
  } else {
    notFound();
  }

  const storageKey = `module-quiz-progress:${moduleSlug}`;

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <PageContainer className="max-w-4xl">
        <Link href={`/learn/${moduleSlug}`} className="text-sm text-slate-500">
          ← Back to Module
        </Link>

        <div className="mt-6">
          <SectionHeading
            eyebrow="Module Quiz"
            title={title}
            description={description}
          />
        </div>

        <div className="mt-8">
          <LessonQuiz questions={questions} />
        </div>

        <div className="mt-8">
          <ModuleItemCompleteButton
            storageKey={storageKey}
            incompleteLabel="Mark Module Quiz Complete"
            completeLabel="Module Quiz Complete"
          />
        </div>
      </PageContainer>
    </main>
  );
}