"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Card } from "@/components/ui/card";
import { getProgress, type UserProgress } from "@/lib/progress";
import { modules } from "@/content/modules";

type LessonItem = {
  slug: string;
  quiz?: {
    question: string;
    options: string[];
    answerIndex: number;
    explanation?: string;
  }[];
};

type ModuleCardProps = {
  moduleSlug: string;
  title: string;
  description: string;
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

function getModuleShortLabel(moduleSlug: string) {
  const match = moduleSlug.match(/^module-(\d+)$/);
  return match ? `Module ${match[1]}` : "the previous module";
}

function isModuleFullyComplete(progress: UserProgress, moduleSlug: string) {
  const moduleData = modules.find((module) => module.slug === moduleSlug);
  if (!moduleData) return false;

  let totalItems = 0;
  let completedItems = 0;

  for (const lesson of moduleData.lessons) {
    totalItems += 1;

    if (progress.completedLessons.includes(getLessonId(moduleSlug, lesson.slug))) {
      completedItems += 1;
    }

    const lessonWithQuiz = lesson as { quiz?: unknown[] };
    const hasQuiz =
      Array.isArray(lessonWithQuiz.quiz) && lessonWithQuiz.quiz.length > 0;

    if (hasQuiz) {
      totalItems += 1;

      if (
        progress.completedLessonQuizzes.includes(
          getLessonQuizId(moduleSlug, lesson.slug)
        )
      ) {
        completedItems += 1;
      }
    }
  }

  totalItems += 1;
  if (progress.completedModuleQuizzes.includes(getModuleQuizId(moduleSlug))) {
    completedItems += 1;
  }

  totalItems += 1;
  if (progress.completedMiniCases.includes(getMiniCaseId(moduleSlug))) {
    completedItems += 1;
  }

  return totalItems > 0 && completedItems === totalItems;
}

export function ModuleCard({
  moduleSlug,
  title,
  description,
  lessons,
}: ModuleCardProps) {
  const [hasMounted, setHasMounted] = useState(false);
  const [progress, setProgress] = useState<UserProgress>(emptyProgress);

  useEffect(() => {
    setHasMounted(true);
    setProgress(getProgress());
  }, []);

  const lessonQuizCount = useMemo(() => {
    return lessons.filter(
      (lesson) => Array.isArray(lesson.quiz) && lesson.quiz.length > 0
    ).length;
  }, [lessons]);

  const totalItems = useMemo(() => {
    return lessons.length + lessonQuizCount + 2;
  }, [lessons.length, lessonQuizCount]);

  const completedCount = useMemo(() => {
    if (!hasMounted) return 0;

    let count = 0;

    for (const lesson of lessons) {
      const lessonId = getLessonId(moduleSlug, lesson.slug);
      if (progress.completedLessons.includes(lessonId)) {
        count += 1;
      }

      const hasQuiz = Array.isArray(lesson.quiz) && lesson.quiz.length > 0;
      if (hasQuiz) {
        const lessonQuizId = getLessonQuizId(moduleSlug, lesson.slug);
        if (progress.completedLessonQuizzes.includes(lessonQuizId)) {
          count += 1;
        }
      }
    }

    if (progress.completedModuleQuizzes.includes(getModuleQuizId(moduleSlug))) {
      count += 1;
    }

    if (progress.completedMiniCases.includes(getMiniCaseId(moduleSlug))) {
      count += 1;
    }

    return count;
  }, [hasMounted, progress, moduleSlug, lessons]);

  const progressPercent = useMemo(() => {
    if (totalItems === 0) return 0;
    return Math.round((completedCount / totalItems) * 100);
  }, [completedCount, totalItems]);

  const previousModule = useMemo(() => {
    const currentIndex = modules.findIndex((module) => module.slug === moduleSlug);
    if (currentIndex <= 0) return null;
    return modules[currentIndex - 1] ?? null;
  }, [moduleSlug]);

  const previousModuleLabel = previousModule
    ? getModuleShortLabel(previousModule.slug)
    : "the previous module";

  const isLocked = useMemo(() => {
    if (!hasMounted) return false;
    if (!previousModule) return false;
    return !isModuleFullyComplete(progress, previousModule.slug);
  }, [hasMounted, progress, previousModule]);

  return (
    <Card
      className={`transition-all ${
        hasMounted && isLocked
          ? "border-slate-200 bg-slate-50/70"
          : "border-slate-200 bg-white hover:-translate-y-0.5 hover:shadow-md"
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2
            className={`text-xl font-semibold ${
              hasMounted && isLocked ? "text-slate-700" : "text-slate-900"
            }`}
          >
            {title}
          </h2>

          <div className="mt-3 flex flex-wrap items-center gap-2">
            {!hasMounted ? (
              <span className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs font-semibold tracking-wide text-slate-600">
                Checking availability
              </span>
            ) : isLocked ? (
              <span className="rounded-full border border-amber-300 bg-amber-50 px-3 py-1 text-xs font-semibold tracking-wide text-amber-800">
                🔒 Locked
              </span>
            ) : (
              <span className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs font-semibold tracking-wide text-slate-700">
                Available
              </span>
            )}

            <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600">
              {completedCount} / {totalItems} complete
            </span>
          </div>
        </div>
      </div>

      <p
        className={`mt-4 ${
          hasMounted && isLocked ? "text-slate-500" : "text-slate-600"
        }`}
      >
        {description}
      </p>

      <div className="mt-5">
        <div className="mb-2 flex items-center justify-between text-sm">
          <span
            className={hasMounted && isLocked ? "text-slate-500" : "text-slate-600"}
          >
            Progress
          </span>
          <span
            className={hasMounted && isLocked ? "text-slate-500" : "text-slate-600"}
          >
            {progressPercent}%
          </span>
        </div>

        <div className="h-3 w-full rounded-full bg-slate-200">
          <div
            className={`h-3 rounded-full transition-all ${
              hasMounted && isLocked ? "bg-slate-400" : "bg-slate-900"
            }`}
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {hasMounted && isLocked ? (
        <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3">
          <p className="text-sm leading-6 text-amber-800">
            Complete <span className="font-medium">{previousModuleLabel}</span> to
            unlock this next stage.
          </p>
        </div>
      ) : null}

      <div className="mt-5">
        {!hasMounted ? (
          <button
            type="button"
            disabled
            className="inline-block cursor-not-allowed rounded-xl border border-slate-300 bg-slate-100 px-4 py-2 text-slate-400"
          >
            Loading Module
          </button>
        ) : isLocked ? (
          <button
            type="button"
            disabled
            className="inline-block cursor-not-allowed rounded-xl border border-slate-300 bg-slate-100 px-4 py-2 text-slate-400"
          >
            Module Locked
          </button>
        ) : (
          <Link
            href={`/learn/${moduleSlug}`}
            className="inline-block rounded-xl bg-slate-900 px-4 py-2 text-white transition hover:bg-slate-800"
          >
            Open Module
          </Link>
        )}
      </div>
    </Card>
  );
}