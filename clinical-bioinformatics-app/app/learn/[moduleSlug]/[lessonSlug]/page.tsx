import Link from "next/link";
import { modules } from "@/content/modules";
import { notFound } from "next/navigation";
import { PageContainer } from "@/components/layout/page-container";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { LessonQuiz } from "@/components/quiz/lesson-quiz";
import { LessonProgressButton } from "@/components/learn/lesson-progress-button";
import { LessonScreens } from "@/components/learn/lesson-screens";

type PageProps = {
  params: Promise<{
    moduleSlug: string;
    lessonSlug: string;
  }>;
  searchParams: Promise<{
    screen?: string;
  }>;
};

export default async function LessonPage({ params, searchParams }: PageProps) {
  const { moduleSlug, lessonSlug } = await params;
  const { screen } = await searchParams;

  const moduleData = modules.find((module) => module.slug === moduleSlug);
  if (!moduleData) {
    notFound();
  }

  const lessonIndex = moduleData.lessons.findIndex(
    (lesson) => lesson.slug === lessonSlug
  );
  if (lessonIndex === -1) {
    notFound();
  }

  const lesson = moduleData.lessons[lessonIndex] as {
    slug: string;
    title: string;
    goal: string;
    sections?: { heading: string; body: string }[];
    screens?: { title: string; body: string }[];
    quiz?: {
      question: string;
      options: string[];
      answerIndex: number;
      explanation?: string;
    }[];
  };

  const nextLesson = moduleData.lessons[lessonIndex + 1];
  const isFinalLesson = lessonIndex === moduleData.lessons.length - 1;
  const lessonKey = `${moduleSlug}:${lessonSlug}`;
  const hasScreens = Array.isArray(lesson.screens) && lesson.screens.length > 0;
  const hasSections =
    Array.isArray(lesson.sections) && lesson.sections.length > 0;
  const hasQuiz = Array.isArray(lesson.quiz) && lesson.quiz.length > 0;

  const parsedScreen = Number(screen);
  const currentScreen =
    !Number.isNaN(parsedScreen) && parsedScreen >= 1 ? parsedScreen : 1;

  const returnTo = encodeURIComponent(
    `/learn/${moduleSlug}/${lessonSlug}${hasScreens ? `?screen=${currentScreen}` : ""}`
  );

  const glossaryHref =
    moduleSlug === "module-1" || moduleSlug === "module-2"
      ? `/learn/${moduleSlug}/${lessonSlug}/glossary?returnTo=${returnTo}`
      : `/learn/${moduleSlug}/glossary?returnTo=${returnTo}`;

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <PageContainer className="max-w-3xl">
        <Link href={`/learn/${moduleSlug}`} className="text-sm text-slate-500">
          ← Back to Module
        </Link>

        <div className="mt-6">
          <SectionHeading
            eyebrow={`Lesson ${lessonIndex + 1} of ${moduleData.lessons.length}`}
            title={lesson.title}
          />
        </div>

        <Card className="mt-4 p-4">
          <p className="text-slate-700">
            <span className="font-semibold">Lesson goal:</span> {lesson.goal}
          </p>
        </Card>

        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            href={glossaryHref}
            className="rounded-xl border border-slate-300 px-4 py-2"
          >
            Glossary
          </Link>
        </div>

        {hasScreens ? (
          <LessonScreens
            screens={lesson.screens!}
            quizQuestions={hasQuiz ? lesson.quiz! : undefined}
            initialScreen={currentScreen}
          />
        ) : hasSections ? (
          <div className="mt-8 space-y-6">
            {lesson.sections!.map((section, index) => (
              <Card key={index}>
                <h2 className="text-xl font-semibold">{section.heading}</h2>
                <p className="mt-3 leading-7 text-slate-700">{section.body}</p>
              </Card>
            ))}
          </div>
        ) : null}

        {!hasScreens && hasQuiz ? (
          <div className="mt-8">
            <LessonQuiz questions={lesson.quiz!} />
          </div>
        ) : null}

        <div className="mt-8 flex items-center justify-between gap-4">
          <Link
            href={`/learn/${moduleSlug}`}
            className="rounded-xl border border-slate-300 px-4 py-2"
          >
            Back to Module
          </Link>

          <LessonProgressButton lessonKey={lessonKey} />

          {nextLesson ? (
            <Link
              href={`/learn/${moduleSlug}/${nextLesson.slug}`}
              className="rounded-xl bg-slate-900 px-4 py-2 text-white"
            >
              Next Lesson
            </Link>
          ) : isFinalLesson ? (
            <Link
              href={`/learn/${moduleSlug}/complete`}
              className="rounded-xl bg-slate-900 px-4 py-2 text-white"
            >
              Finish Module
            </Link>
          ) : null}
        </div>
      </PageContainer>
    </main>
  );
}