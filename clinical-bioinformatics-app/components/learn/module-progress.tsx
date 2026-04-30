"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Card } from "@/components/ui/card";
import { getProgress, type UserProgress } from "@/lib/progress";

type LessonItem = {
  slug: string;
  title: string;
  quiz?: {
    question: string;
    options: string[];
    answerIndex: number;
    explanation?: string;
  }[];
};

type ModuleProgressProps = {
  moduleSlug: string;
  lessons: LessonItem[];
};

const emptyProgress: UserProgress = {
  completedLessons: [],
  completedLessonQuizzes: [],
  completedModuleQuizzes: [],
  completedMiniCases: [],
};

function getLessonId(moduleSlug: string, lessonSlug: string) {
  return `${moduleSlug}-${lessonSlug}`;
}

function getLessonQuizId(moduleSlug: string, lessonSlug: string) {
  return `${moduleSlug}-${lessonSlug}-quiz`;
}

function getModuleQuizId(moduleSlug: string) {
  return `${moduleSlug}-quiz`;
}

function getMiniCaseId(moduleSlug: string) {
  return `${moduleSlug}-mini-case`;
}

function getProgressPercent(completed: number, total: number) {
  if (total === 0) return 0;
  return Math.round((completed / total) * 100);
}

function StatusBadge({
  complete,
  completeLabel,
  incompleteLabel,
}: {
  complete: boolean;
  completeLabel: string;
  incompleteLabel: string;
}) {
  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-semibold ${
        complete
          ? "bg-green-100 text-green-800"
          : "border border-slate-200 bg-slate-100 text-slate-600"
      }`}
    >
      {complete ? completeLabel : incompleteLabel}
    </span>
  );
}

export function ModuleProgress({ moduleSlug, lessons }: ModuleProgressProps) {
  const [progress, setProgress] = useState<UserProgress>(emptyProgress);

  useEffect(() => {
    setProgress(getProgress());
  }, []);

  const lessonQuizCount = useMemo(() => {
    return lessons.filter(
      (lesson) => Array.isArray(lesson.quiz) && lesson.quiz.length > 0
    ).length;
  }, [lessons]);

  const completedLessons = useMemo(() => {
    return lessons
      .filter((lesson) =>
        progress.completedLessons.includes(getLessonId(moduleSlug, lesson.slug))
      )
      .map((lesson) => lesson.slug);
  }, [progress, moduleSlug, lessons]);

  const completedLessonQuizzes = useMemo(() => {
    return lessons
      .filter((lesson) =>
        progress.completedLessonQuizzes.includes(
          getLessonQuizId(moduleSlug, lesson.slug)
        )
      )
      .map((lesson) => lesson.slug);
  }, [progress, moduleSlug, lessons]);

  const moduleQuizComplete = useMemo(() => {
    return progress.completedModuleQuizzes.includes(getModuleQuizId(moduleSlug));
  }, [progress, moduleSlug]);

  const miniCaseComplete = useMemo(() => {
    return progress.completedMiniCases.includes(getMiniCaseId(moduleSlug));
  }, [progress, moduleSlug]);

  const completedCount = useMemo(() => {
    return (
      completedLessons.length +
      completedLessonQuizzes.length +
      (moduleQuizComplete ? 1 : 0) +
      (miniCaseComplete ? 1 : 0)
    );
  }, [
    completedLessons,
    completedLessonQuizzes,
    moduleQuizComplete,
    miniCaseComplete,
  ]);

  const totalItems = useMemo(() => {
    return lessons.length + lessonQuizCount + 2;
  }, [lessons.length, lessonQuizCount]);

  const progressPercent = useMemo(() => {
    return getProgressPercent(completedCount, totalItems);
  }, [completedCount, totalItems]);

  return (
    <div className="mt-8 space-y-8">
      <Card className="border-slate-200 bg-white">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
              Module pathway
            </p>
            <h2 className="mt-2 text-2xl font-semibold">Your progress</h2>
            <p className="mt-3 max-w-2xl text-slate-600">
              Work through the lessons first, then complete the module quiz and
              mini case to finish the module.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-center">
            <p className="text-3xl font-bold text-slate-900">
              {progressPercent}%
            </p>
            <p className="mt-1 text-sm text-slate-500">complete</p>
          </div>
        </div>

        <div className="mt-6 h-3 w-full rounded-full bg-slate-200">
          <div
            className="h-3 rounded-full bg-slate-900 transition-all"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        <div className="mt-5 grid gap-3 text-sm md:grid-cols-4">
          <div className="rounded-xl border border-slate-200 bg-white p-3">
            <p className="font-semibold text-slate-900">Lessons</p>
            <p className="mt-1 text-slate-500">
              {completedLessons.length} / {lessons.length}
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-3">
            <p className="font-semibold text-slate-900">Lesson quizzes</p>
            <p className="mt-1 text-slate-500">
              {completedLessonQuizzes.length} / {lessonQuizCount}
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-3">
            <p className="font-semibold text-slate-900">Module quiz</p>
            <p className="mt-1 text-slate-500">
              {moduleQuizComplete ? "Complete" : "Not complete"}
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-3">
            <p className="font-semibold text-slate-900">Mini case</p>
            <p className="mt-1 text-slate-500">
              {miniCaseComplete ? "Complete" : "Not complete"}
            </p>
          </div>
        </div>
      </Card>

      <section>
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold">Lessons</h2>
            <p className="mt-2 text-slate-600">
              Complete the lesson content in order. Some lessons include a quick
              quiz to check understanding.
            </p>
          </div>
        </div>

        <div className="mt-5 space-y-4">
          {lessons.map((lesson, index) => {
            const lessonComplete = completedLessons.includes(lesson.slug);
            const hasQuiz = Array.isArray(lesson.quiz) && lesson.quiz.length > 0;
            const lessonQuizComplete = completedLessonQuizzes.includes(
              lesson.slug
            );

            return (
              <Card
                key={lesson.slug}
                className="border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
                      Lesson {index + 1}
                    </p>

                    <h3 className="mt-1 text-xl font-semibold">
                      {lesson.title}
                    </h3>

                    <div className="mt-3 flex flex-wrap gap-2">
                      <StatusBadge
                        complete={lessonComplete}
                        completeLabel="Lesson complete"
                        incompleteLabel="Lesson not complete"
                      />

                      {hasQuiz ? (
                        <StatusBadge
                          complete={lessonQuizComplete}
                          completeLabel="Quiz complete"
                          incompleteLabel="Quiz included"
                        />
                      ) : null}
                    </div>
                  </div>

                  <Link
                    href={`/learn/${moduleSlug}/${lesson.slug}`}
                    className="inline-block rounded-xl bg-slate-900 px-4 py-2 text-center text-white transition hover:bg-slate-800"
                  >
                    Open Lesson
                  </Link>
                </div>
              </Card>
            );
          })}
        </div>
      </section>

      <section>
        <div>
          <h2 className="text-2xl font-semibold">Module activities</h2>
          <p className="mt-2 text-slate-600">
            Finish the module by completing the wider assessment activity and the
            applied mini case.
          </p>
        </div>

        <div className="mt-5 grid gap-6 md:grid-cols-2">
          <Card className="border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-md">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
                  Assessment
                </p>
                <h3 className="mt-1 text-xl font-semibold">Module Quiz</h3>
                <p className="mt-3 leading-7 text-slate-600">
                  Check that you can bring together the main ideas from this
                  module.
                </p>
              </div>

              <StatusBadge
                complete={moduleQuizComplete}
                completeLabel="Complete"
                incompleteLabel="To do"
              />
            </div>

            <Link
              href={`/learn/${moduleSlug}/quiz`}
              className="mt-5 inline-block rounded-xl border border-slate-300 px-4 py-2 transition hover:bg-slate-100"
            >
              Open Module Quiz
            </Link>
          </Card>

          <Card className="border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-md">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
                  Applied practice
                </p>
                <h3 className="mt-1 text-xl font-semibold">Mini Case</h3>
                <p className="mt-3 leading-7 text-slate-600">
                  Apply the module content in a realistic service-style
                  situation.
                </p>
              </div>

              <StatusBadge
                complete={miniCaseComplete}
                completeLabel="Complete"
                incompleteLabel="To do"
              />
            </div>

            <Link
              href={`/learn/${moduleSlug}/case`}
              className="mt-5 inline-block rounded-xl border border-slate-300 px-4 py-2 transition hover:bg-slate-100"
            >
              Open Mini Case
            </Link>
          </Card>
        </div>
      </section>
    </div>
  );
}