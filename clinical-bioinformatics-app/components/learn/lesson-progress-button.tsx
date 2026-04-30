"use client";

import { useEffect, useState } from "react";
import { getProgress, markLessonComplete } from "@/lib/progress";

type LessonProgressButtonProps = {
  lessonKey: string;
};

export function LessonProgressButton({
  lessonKey,
}: LessonProgressButtonProps) {
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const [moduleSlug, lessonSlug] = lessonKey.split(":");

    if (!moduleSlug || !lessonSlug) {
      setIsComplete(false);
      return;
    }

    const progress = getProgress();
    const lessonId = `${moduleSlug}-${lessonSlug}`;

    setIsComplete(progress.completedLessons.includes(lessonId));
  }, [lessonKey]);

  function handleComplete() {
    const [moduleSlug, lessonSlug] = lessonKey.split(":");

    if (!moduleSlug || !lessonSlug) return;

    markLessonComplete(moduleSlug, lessonSlug);
    setIsComplete(true);
  }

  return (
    <button
      type="button"
      onClick={handleComplete}
      className={`rounded-xl px-4 py-2 text-sm font-medium transition ${
        isComplete
          ? "border border-green-300 bg-green-100 text-green-800"
          : "bg-slate-900 text-white"
      }`}
    >
      {isComplete ? "Lesson Complete" : "Mark Lesson Complete"}
    </button>
  );
}