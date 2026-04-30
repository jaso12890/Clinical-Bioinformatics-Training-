"use client";

import Link from "next/link";
import { type ChangeEvent, useEffect, useMemo, useState } from "react";
import { modules } from "@/content/modules";
import { Card } from "@/components/ui/card";
import { getProgress, saveProgress, type UserProgress } from "@/lib/progress";

type ContinueItem = {
  href: string;
  eyebrow: string;
  title: string;
  description: string;
  label: string;
};

type PhaseProgressItem = {
  name: string;
  moduleSlugs: string[];
  completed: number;
  total: number;
};

const emptyProgress: UserProgress = {
  completedLessons: [],
  completedLessonQuizzes: [],
  completedModuleQuizzes: [],
  completedMiniCases: [],
};

const PHASES = [
  {
    name: "Phase 1 — Orientation & professional foundations",
    moduleNumbers: [1, 2, 3],
  },
  {
    name: "Phase 2 — Core genomics for beginners",
    moduleNumbers: [4, 5, 6],
  },
  {
    name: "Phase 3 — From sample to data",
    moduleNumbers: [7, 8, 9],
  },
  {
    name: "Phase 4 — Technical quality & confidence",
    moduleNumbers: [10, 11, 12],
  },
  {
    name: "Phase 5 — Clinical bioinformatics analysis",
    moduleNumbers: [13, 14, 15, 16, 17],
  },
  {
    name: "Phase 6 — Python & pipelines",
    moduleNumbers: [18, 19, 20, 21],
  },
  {
    name: "Phase 7 — NHS practice & increasing autonomy",
    moduleNumbers: [22, 23, 24, 25],
  },
];

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
  return match ? `Module ${match[1]}` : "Module";
}

function getTotalLessonCount() {
  return modules.reduce((count, module) => count + module.lessons.length, 0);
}

function getTotalLessonQuizCount() {
  return modules.reduce((count, module) => {
    const lessonQuizCount = module.lessons.filter((lesson) => {
      const lessonWithQuiz = lesson as { quiz?: unknown[] };
      return Array.isArray(lessonWithQuiz.quiz) && lessonWithQuiz.quiz.length > 0;
    }).length;

    return count + lessonQuizCount;
  }, 0);
}

function getTotalModuleQuizCount() {
  return modules.length;
}

function getTotalMiniCaseCount() {
  return modules.length;
}

function getTotalItemCount() {
  return (
    getTotalLessonCount() +
    getTotalLessonQuizCount() +
    getTotalModuleQuizCount() +
    getTotalMiniCaseCount()
  );
}

function getCompletedItemCount(progress: UserProgress) {
  return (
    progress.completedLessons.length +
    progress.completedLessonQuizzes.length +
    progress.completedModuleQuizzes.length +
    progress.completedMiniCases.length
  );
}

function getProgressPercent(completed: number, total: number) {
  if (total === 0) return 0;
  return Math.round((completed / total) * 100);
}

function getContinueLearningItem(progress: UserProgress): ContinueItem {
  for (const module of modules) {
    const moduleLabel = getModuleShortLabel(module.slug);

    for (const lesson of module.lessons) {
      const lessonId = getLessonId(module.slug, lesson.slug);

      if (!progress.completedLessons.includes(lessonId)) {
        return {
          href: `/learn/${module.slug}/${lesson.slug}`,
          eyebrow: `${moduleLabel} lesson`,
          title: lesson.title,
          description: "Continue with the next unfinished lesson.",
          label: "Open Lesson",
        };
      }

      const lessonWithQuiz = lesson as {
        quiz?: {
          question: string;
          options: string[];
          answerIndex: number;
          explanation?: string;
        }[];
      };

      const hasLessonQuiz =
        Array.isArray(lessonWithQuiz.quiz) && lessonWithQuiz.quiz.length > 0;

      if (hasLessonQuiz) {
        const lessonQuizId = getLessonQuizId(module.slug, lesson.slug);

        if (!progress.completedLessonQuizzes.includes(lessonQuizId)) {
          return {
            href: `/learn/${module.slug}/${lesson.slug}`,
            eyebrow: `${moduleLabel} quick quiz`,
            title: lesson.title,
            description: "Complete the lesson quiz before moving on.",
            label: "Open Quiz",
          };
        }
      }
    }

    const moduleQuizId = getModuleQuizId(module.slug);

    if (!progress.completedModuleQuizzes.includes(moduleQuizId)) {
      return {
        href: `/learn/${module.slug}/quiz`,
        eyebrow: `${moduleLabel} assessment`,
        title: "Module Quiz",
        description: "Test your understanding across the full module.",
        label: "Open Module Quiz",
      };
    }

    const miniCaseId = getMiniCaseId(module.slug);

    if (!progress.completedMiniCases.includes(miniCaseId)) {
      return {
        href: `/learn/${module.slug}/case`,
        eyebrow: `${moduleLabel} applied practice`,
        title: "Mini Case",
        description: "Apply the module in a realistic case-style scenario.",
        label: "Open Mini Case",
      };
    }
  }

  return {
    href: "/learn",
    eyebrow: "Curriculum complete",
    title: "All current learning items completed",
    description: "You’ve completed everything currently in the curriculum.",
    label: "View Learn",
  };
}

function buildPhaseProgress(progress: UserProgress): PhaseProgressItem[] {
  return PHASES.map((phase) => {
    const moduleSlugs = phase.moduleNumbers.map((number) => `module-${number}`);

    let completed = 0;
    let total = 0;

    for (const module of modules) {
      if (!moduleSlugs.includes(module.slug)) continue;

      for (const lesson of module.lessons) {
        total += 1;

        const lessonId = getLessonId(module.slug, lesson.slug);

        if (progress.completedLessons.includes(lessonId)) {
          completed += 1;
        }

        const lessonWithQuiz = lesson as { quiz?: unknown[] };
        const hasLessonQuiz =
          Array.isArray(lessonWithQuiz.quiz) && lessonWithQuiz.quiz.length > 0;

        if (hasLessonQuiz) {
          total += 1;

          const lessonQuizId = getLessonQuizId(module.slug, lesson.slug);

          if (progress.completedLessonQuizzes.includes(lessonQuizId)) {
            completed += 1;
          }
        }
      }

      total += 1;

      if (progress.completedModuleQuizzes.includes(getModuleQuizId(module.slug))) {
        completed += 1;
      }

      total += 1;

      if (progress.completedMiniCases.includes(getMiniCaseId(module.slug))) {
        completed += 1;
      }
    }

    return {
      name: phase.name,
      moduleSlugs,
      completed,
      total,
    };
  });
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function toStringArray(value: unknown) {
  if (!Array.isArray(value)) return [];
  return value.filter((item): item is string => typeof item === "string");
}

function normalizeImportedProgress(value: unknown): UserProgress | null {
  const rawValue =
    isRecord(value) && isRecord(value.progress) ? value.progress : value;

  if (!isRecord(rawValue)) return null;

  const importedProgress: UserProgress = {
    completedLessons: toStringArray(rawValue.completedLessons),
    completedLessonQuizzes: toStringArray(rawValue.completedLessonQuizzes),
    completedModuleQuizzes: toStringArray(rawValue.completedModuleQuizzes),
    completedMiniCases: toStringArray(rawValue.completedMiniCases),
  };

  if (isRecord(rawValue.lastVisitedItem)) {
    const item = rawValue.lastVisitedItem;
    const allowedTypes = ["lesson", "lessonQuiz", "moduleQuiz", "miniCase"];

    if (
      typeof item.moduleSlug === "string" &&
      typeof item.itemType === "string" &&
      allowedTypes.includes(item.itemType)
    ) {
      importedProgress.lastVisitedItem = {
        moduleSlug: item.moduleSlug,
        itemType: item.itemType as UserProgress["lastVisitedItem"] extends infer T
          ? T extends { itemType: infer U }
            ? U
            : never
          : never,
        itemSlug: typeof item.itemSlug === "string" ? item.itemSlug : undefined,
      };
    }
  }

  return importedProgress;
}

function AssessmentCard({
  title,
  completed,
  total,
}: {
  title: string;
  completed: number;
  total: number;
}) {
  const percent = getProgressPercent(completed, total);

  return (
    <Card className="border-slate-200 bg-white">
      <h3 className="text-lg font-semibold">{title}</h3>

      <p className="mt-2 text-sm text-slate-500">
        {completed} / {total} complete
      </p>

      <div className="mt-4 h-2.5 w-full rounded-full bg-slate-200">
        <div
          className="h-2.5 rounded-full bg-slate-900 transition-all"
          style={{ width: `${percent}%` }}
        />
      </div>

      <p className="mt-2 text-xs text-slate-500">{percent}% complete</p>
    </Card>
  );
}

export function DashboardProgress() {
  const [hasMounted, setHasMounted] = useState(false);
  const [progress, setProgress] = useState<UserProgress>(emptyProgress);
  const [backupMessage, setBackupMessage] = useState("");

  useEffect(() => {
    setHasMounted(true);
    setProgress(getProgress());
  }, []);

  function handleExportProgress() {
    const currentProgress = getProgress();

    const backupData = {
      app: "clinical-bioinformatics-training",
      version: 1,
      exportedAt: new Date().toISOString(),
      progress: currentProgress,
    };

    const json = JSON.stringify(backupData, null, 2);
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const today = new Date().toISOString().slice(0, 10);
    const link = document.createElement("a");

    link.href = url;
    link.download = `clinical-bioinformatics-progress-${today}.json`;
    link.click();

    URL.revokeObjectURL(url);
    setBackupMessage("Progress backup downloaded.");
  }

  function handleImportProgress(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = () => {
      try {
        const parsed = JSON.parse(String(reader.result));
        const importedProgress = normalizeImportedProgress(parsed);

        if (!importedProgress) {
          setBackupMessage("Import failed. The selected file is not a valid progress backup.");
          event.target.value = "";
          return;
        }

        saveProgress(importedProgress);
        setProgress(importedProgress);
        setBackupMessage("Progress imported successfully.");
        event.target.value = "";
      } catch {
        setBackupMessage("Import failed. The selected file could not be read.");
        event.target.value = "";
      }
    };

    reader.readAsText(file);
  }

  const totalItems = useMemo(() => getTotalItemCount(), []);

  const completedItems = useMemo(() => {
    if (!hasMounted) return 0;
    return getCompletedItemCount(progress);
  }, [hasMounted, progress]);

  const overallPercent = useMemo(() => {
    return getProgressPercent(completedItems, totalItems);
  }, [completedItems, totalItems]);

  const continueItem = useMemo(() => {
    return getContinueLearningItem(progress);
  }, [progress]);

  const phaseProgress = useMemo(() => {
    return buildPhaseProgress(progress);
  }, [progress]);

  const lessonTotal = useMemo(() => getTotalLessonCount(), []);
  const lessonQuizTotal = useMemo(() => getTotalLessonQuizCount(), []);
  const moduleQuizTotal = useMemo(() => getTotalModuleQuizCount(), []);
  const miniCaseTotal = useMemo(() => getTotalMiniCaseCount(), []);

  return (
    <div className="mt-8 space-y-10">
      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="border-slate-200 bg-white">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
                Curriculum progress
              </p>
              <h2 className="mt-2 text-2xl font-semibold">Overall Progress</h2>
            </div>

            <span className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-700">
              {overallPercent}%
            </span>
          </div>

          <p className="mt-4 text-slate-600">
            You have completed {completedItems} of {totalItems} learning items.
          </p>

          <div className="mt-5 h-3 w-full rounded-full bg-slate-200">
            <div
              className="h-3 rounded-full bg-slate-900 transition-all"
              style={{ width: `${overallPercent}%` }}
            />
          </div>
        </Card>

        <Card className="border-slate-200 bg-white">
          <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
            Continue learning
          </p>

          {!hasMounted ? (
            <>
              <h2 className="mt-2 text-2xl font-semibold">Loading progress</h2>
              <p className="mt-4 text-slate-600">
                Checking your saved learning progress.
              </p>

              <button
                type="button"
                disabled
                className="mt-5 cursor-not-allowed rounded-xl border border-slate-300 bg-slate-100 px-4 py-2 text-slate-400"
              >
                Loading
              </button>
            </>
          ) : (
            <>
              <h2 className="mt-2 text-2xl font-semibold">{continueItem.title}</h2>

              <div className="mt-3 inline-flex rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs font-semibold tracking-wide text-slate-700">
                {continueItem.eyebrow}
              </div>

              <p className="mt-4 leading-7 text-slate-600">
                {continueItem.description}
              </p>

              <div className="mt-5">
                <Link
                  href={continueItem.href}
                  className="inline-block rounded-xl bg-slate-900 px-4 py-2 text-white transition hover:bg-slate-800"
                >
                  {continueItem.label}
                </Link>
              </div>
            </>
          )}
        </Card>
      </div>

      <Card className="border-slate-200 bg-white">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
              Progress backup
            </p>
            <h2 className="mt-2 text-2xl font-semibold">Export / Import Progress</h2>
            <p className="mt-3 max-w-2xl leading-7 text-slate-600">
              Download a backup of your progress or import a saved backup if you
              change browser, device, or clear your browsing data.
            </p>

            {backupMessage ? (
              <p className="mt-3 text-sm font-medium text-slate-700">
                {backupMessage}
              </p>
            ) : null}
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={handleExportProgress}
              className="rounded-xl bg-slate-900 px-4 py-2 text-white transition hover:bg-slate-800"
            >
              Export Progress
            </button>

            <label className="cursor-pointer rounded-xl border border-slate-300 px-4 py-2 transition hover:bg-slate-100">
              Import Progress
              <input
                type="file"
                accept="application/json,.json"
                onChange={handleImportProgress}
                className="hidden"
              />
            </label>
          </div>
        </div>
      </Card>

      <div>
        <div>
          <h2 className="text-2xl font-semibold">Phase Progress</h2>
          <p className="mt-2 text-slate-600">
            A summary of progress across the main training phases.
          </p>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          {phaseProgress.map((phase) => {
            const percent = getProgressPercent(phase.completed, phase.total);
            const firstModuleSlug = phase.moduleSlugs[0] ?? "module-1";

            return (
              <Card
                key={phase.name}
                className="border-slate-200 bg-white transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold">{phase.name}</h3>

                  <span className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                    {percent}%
                  </span>
                </div>

                <p className="mt-3 text-sm text-slate-500">
                  {phase.completed} / {phase.total} items complete
                </p>

                <div className="mt-4 h-3 w-full rounded-full bg-slate-200">
                  <div
                    className="h-3 rounded-full bg-slate-900 transition-all"
                    style={{ width: `${percent}%` }}
                  />
                </div>

                <div className="mt-5">
                  <Link
                    href={`/learn/${firstModuleSlug}`}
                    className="inline-block rounded-xl border border-slate-300 px-4 py-2 transition hover:bg-slate-100"
                  >
                    Open in Learn
                  </Link>
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      <div>
        <div>
          <h2 className="text-2xl font-semibold">Assessment Progress</h2>
          <p className="mt-2 text-slate-600">
            See how much of each learning activity type has been completed.
          </p>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <AssessmentCard
            title="Lessons"
            completed={hasMounted ? progress.completedLessons.length : 0}
            total={lessonTotal}
          />

          <AssessmentCard
            title="Lesson Quizzes"
            completed={hasMounted ? progress.completedLessonQuizzes.length : 0}
            total={lessonQuizTotal}
          />

          <AssessmentCard
            title="Module Quizzes"
            completed={hasMounted ? progress.completedModuleQuizzes.length : 0}
            total={moduleQuizTotal}
          />

          <AssessmentCard
            title="Mini Cases"
            completed={hasMounted ? progress.completedMiniCases.length : 0}
            total={miniCaseTotal}
          />
        </div>
      </div>
    </div>
  );
}