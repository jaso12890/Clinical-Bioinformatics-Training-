export type ProgressItemType =
  | "lesson"
  | "lessonQuiz"
  | "moduleQuiz"
  | "miniCase";

export type LastVisitedItem = {
  moduleSlug: string;
  itemType: ProgressItemType;
  itemSlug?: string;
};

export type UserProgress = {
  completedLessons: string[];
  completedLessonQuizzes: string[];
  completedModuleQuizzes: string[];
  completedMiniCases: string[];
  lastVisitedItem?: LastVisitedItem;
};

const STORAGE_KEY = "clinical-bioinformatics-progress";

export const defaultProgress: UserProgress = {
  completedLessons: [],
  completedLessonQuizzes: [],
  completedModuleQuizzes: [],
  completedMiniCases: [],
};

export function getProgress(): UserProgress {
  if (typeof window === "undefined") return defaultProgress;

  const saved = window.localStorage.getItem(STORAGE_KEY);

  if (!saved) return defaultProgress;

  try {
    return {
      ...defaultProgress,
      ...JSON.parse(saved),
    };
  } catch {
    return defaultProgress;
  }
}

export function saveProgress(progress: UserProgress) {
  if (typeof window === "undefined") return;

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

function addUniqueItem(items: string[], item: string) {
  return items.includes(item) ? items : [...items, item];
}

export function markLessonComplete(moduleSlug: string, lessonSlug: string) {
  const progress = getProgress();

  const updatedProgress: UserProgress = {
    ...progress,
    completedLessons: addUniqueItem(
      progress.completedLessons,
      `${moduleSlug}-${lessonSlug}`
    ),
    lastVisitedItem: {
      moduleSlug,
      itemType: "lesson",
      itemSlug: lessonSlug,
    },
  };

  saveProgress(updatedProgress);
  return updatedProgress;
}

export function markLessonQuizComplete(moduleSlug: string, lessonSlug: string) {
  const progress = getProgress();

  const updatedProgress: UserProgress = {
    ...progress,
    completedLessonQuizzes: addUniqueItem(
      progress.completedLessonQuizzes,
      `${moduleSlug}-${lessonSlug}-quiz`
    ),
    lastVisitedItem: {
      moduleSlug,
      itemType: "lessonQuiz",
      itemSlug: lessonSlug,
    },
  };

  saveProgress(updatedProgress);
  return updatedProgress;
}

export function markModuleQuizComplete(moduleSlug: string) {
  const progress = getProgress();

  const updatedProgress: UserProgress = {
    ...progress,
    completedModuleQuizzes: addUniqueItem(
      progress.completedModuleQuizzes,
      `${moduleSlug}-quiz`
    ),
    lastVisitedItem: {
      moduleSlug,
      itemType: "moduleQuiz",
    },
  };

  saveProgress(updatedProgress);
  return updatedProgress;
}

export function markMiniCaseComplete(moduleSlug: string) {
  const progress = getProgress();

  const updatedProgress: UserProgress = {
    ...progress,
    completedMiniCases: addUniqueItem(
      progress.completedMiniCases,
      `${moduleSlug}-mini-case`
    ),
    lastVisitedItem: {
      moduleSlug,
      itemType: "miniCase",
    },
  };

  saveProgress(updatedProgress);
  return updatedProgress;
}

export function getCompletedItemCount(progress: UserProgress) {
  return (
    progress.completedLessons.length +
    progress.completedLessonQuizzes.length +
    progress.completedModuleQuizzes.length +
    progress.completedMiniCases.length
  );
}

export function getProgressPercentage(progress: UserProgress, totalItems: number) {
  if (totalItems === 0) return 0;

  return Math.round((getCompletedItemCount(progress) / totalItems) * 100);
}