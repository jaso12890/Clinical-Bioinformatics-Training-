"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Card } from "@/components/ui/card";

type LessonItem = {
  slug: string;
};

type ModuleCardProps = {
  moduleSlug: string;
  title: string;
  description: string;
  lessons: LessonItem[];
};

export function ModuleCard({
  moduleSlug,
  title,
  description,
  lessons
}: ModuleCardProps) {
  const [completedCount, setCompletedCount] = useState(0);

  useEffect(() => {
    const completedLessons = lessons.filter((lesson) => {
      const key = `lesson-progress:${moduleSlug}:${lesson.slug}`;
      return window.localStorage.getItem(key) === "complete";
    }).length;

    const quizComplete =
      window.localStorage.getItem(`module-quiz-progress:${moduleSlug}`) ===
      "complete"
        ? 1
        : 0;

    const caseComplete =
      window.localStorage.getItem(`module-case-progress:${moduleSlug}`) ===
      "complete"
        ? 1
        : 0;

    setCompletedCount(completedLessons + quizComplete + caseComplete);
  }, [moduleSlug, lessons]);

  const totalItems = useMemo(() => lessons.length + 2, [lessons.length]);

  const progressPercent = useMemo(() => {
    if (totalItems === 0) return 0;
    return Math.round((completedCount / totalItems) * 100);
  }, [completedCount, totalItems]);

  return (
    <Card>
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="mt-3 text-slate-600">{description}</p>

      <p className="mt-3 text-sm text-slate-500">
        {completedCount} / {totalItems} items complete
      </p>

      <div className="mt-3 h-3 w-full rounded-full bg-slate-200">
        <div
          className="h-3 rounded-full bg-slate-900 transition-all"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      <Link
        href={`/learn/${moduleSlug}`}
        className="mt-5 inline-block rounded-xl bg-slate-900 px-4 py-2 text-white"
      >
        Open Module
      </Link>
    </Card>
  );
}