"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { modules } from "@/content/modules";
import { Card } from "@/components/ui/card";

type ModuleProgressItem = {
  slug: string;
  title: string;
  completed: number;
  total: number;
};

export function DashboardProgress() {
  const [completedItems, setCompletedItems] = useState(0);
  const [moduleProgress, setModuleProgress] = useState<ModuleProgressItem[]>([]);

  useEffect(() => {
    const progressByModule = modules.map((module) => {
      const completedLessons = module.lessons.filter((lesson) => {
        const key = `lesson-progress:${module.slug}:${lesson.slug}`;
        return window.localStorage.getItem(key) === "complete";
      }).length;

      const quizComplete =
        window.localStorage.getItem(`module-quiz-progress:${module.slug}`) ===
        "complete"
          ? 1
          : 0;

      const caseComplete =
        window.localStorage.getItem(`module-case-progress:${module.slug}`) ===
        "complete"
          ? 1
          : 0;

      const completed = completedLessons + quizComplete + caseComplete;
      const total = module.lessons.length + 2;

      return {
        slug: module.slug,
        title: module.title,
        completed,
        total
      };
    });

    const totalCompleted = progressByModule.reduce(
      (count, module) => count + module.completed,
      0
    );

    setModuleProgress(progressByModule);
    setCompletedItems(totalCompleted);
  }, []);

  const totalItems = useMemo(() => {
    return modules.reduce((count, module) => count + module.lessons.length + 2, 0);
  }, []);

  const progressPercent = useMemo(() => {
    if (totalItems === 0) return 0;
    return Math.round((completedItems / totalItems) * 100);
  }, [completedItems, totalItems]);

  return (
    <div className="mt-8 space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <h2 className="text-xl font-semibold">Overall Progress</h2>
          <p className="mt-2 text-slate-600">
            You have completed {completedItems} of {totalItems} learning items.
          </p>

          <div className="mt-4 h-3 w-full rounded-full bg-slate-200">
            <div
              className="h-3 rounded-full bg-slate-900 transition-all"
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          <p className="mt-3 text-sm text-slate-500">{progressPercent}% complete</p>
        </Card>

        <Card>
          <h2 className="text-xl font-semibold">Continue Learning</h2>
          <p className="mt-2 text-slate-600">
            Return to the Learn section to continue where you left off.
          </p>

          <div className="mt-5">
            <Link
              href="/learn"
              className="inline-block rounded-xl bg-slate-900 px-4 py-2 text-white"
            >
              Go to Learn
            </Link>
          </div>
        </Card>
      </div>

      <div>
        <h2 className="text-2xl font-semibold">Module Progress</h2>
        <p className="mt-2 text-slate-600">
          See how far you’ve progressed in each module.
        </p>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {moduleProgress.map((module) => {
            const percent =
              module.total === 0
                ? 0
                : Math.round((module.completed / module.total) * 100);

            return (
              <Card key={module.slug}>
                <h3 className="text-lg font-semibold">{module.title}</h3>

                <p className="mt-2 text-sm text-slate-500">
                  {module.completed} / {module.total} items complete
                </p>

                <div className="mt-4 h-3 w-full rounded-full bg-slate-200">
                  <div
                    className="h-3 rounded-full bg-slate-900 transition-all"
                    style={{ width: `${percent}%` }}
                  />
                </div>

                <div className="mt-5">
                  <Link
                    href={`/learn/${module.slug}`}
                    className="inline-block rounded-xl border border-slate-300 px-4 py-2"
                  >
                    Open Module
                  </Link>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}