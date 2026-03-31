"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Card } from "@/components/ui/card";

type LessonItem = {
  slug: string;
  title: string;
};

type ModuleProgressProps = {
  moduleSlug: string;
  lessons: LessonItem[];
};

export function ModuleProgress({
  moduleSlug,
  lessons
}: ModuleProgressProps) {
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);
  const [quizComplete, setQuizComplete] = useState(false);
  const [caseComplete, setCaseComplete] = useState(false);

  useEffect(() => {
    const completed = lessons
      .filter((lesson) => {
        const key = `lesson-progress:${moduleSlug}:${lesson.slug}`;
        return window.localStorage.getItem(key) === "complete";
      })
      .map((lesson) => lesson.slug);

    setCompletedLessons(completed);
    setQuizComplete(
      window.localStorage.getItem(`module-quiz-progress:${moduleSlug}`) ===
        "complete"
    );
    setCaseComplete(
      window.localStorage.getItem(`module-case-progress:${moduleSlug}`) ===
        "complete"
    );
  }, [moduleSlug, lessons]);

  const completedCount =
    completedLessons.length + (quizComplete ? 1 : 0) + (caseComplete ? 1 : 0);

  const totalItems = useMemo(() => lessons.length + 2, [lessons.length]);

  const progressPercent = useMemo(() => {
    if (totalItems === 0) return 0;
    return Math.round((completedCount / totalItems) * 100);
  }, [completedCount, totalItems]);

  return (
    <>
      <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-4">
        <div className="flex items-center justify-between text-sm text-slate-600">
          <span>Module progress</span>
          <span>
            {completedCount} / {totalItems} items complete
          </span>
        </div>

        <div className="mt-3 h-3 w-full rounded-full bg-slate-200">
          <div
            className="h-3 rounded-full bg-slate-900 transition-all"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      <div className="mt-8 space-y-4">
        {lessons.map((lesson, index) => {
          const isComplete = completedLessons.includes(lesson.slug);

          return (
            <Card key={lesson.slug} className="p-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm text-slate-500">Lesson {index + 1}</p>
                  <h2 className="mt-1 text-xl font-semibold">{lesson.title}</h2>
                </div>

                {isComplete ? (
                  <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">
                    Complete
                  </span>
                ) : null}
              </div>

              <Link
                href={`/learn/${moduleSlug}/${lesson.slug}`}
                className="mt-4 inline-block rounded-xl bg-slate-900 px-4 py-2 text-white"
              >
                Open Lesson
              </Link>
            </Card>
          );
        })}

        <Card className="p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm text-slate-500">Module Activity</p>
              <h2 className="mt-1 text-xl font-semibold">Module Quiz</h2>
            </div>

            {quizComplete ? (
              <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">
                Complete
              </span>
            ) : null}
          </div>

          <Link
            href={`/learn/${moduleSlug}/quiz`}
            className="mt-4 inline-block rounded-xl border border-slate-300 px-4 py-2"
          >
            Open Module Quiz
          </Link>
        </Card>

        <Card className="p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm text-slate-500">Module Activity</p>
              <h2 className="mt-1 text-xl font-semibold">Mini Case</h2>
            </div>

            {caseComplete ? (
              <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">
                Complete
              </span>
            ) : null}
          </div>

          <Link
            href={`/learn/${moduleSlug}/case`}
            className="mt-4 inline-block rounded-xl border border-slate-300 px-4 py-2"
          >
            Open Mini Case
          </Link>
        </Card>
      </div>
    </>
  );
}