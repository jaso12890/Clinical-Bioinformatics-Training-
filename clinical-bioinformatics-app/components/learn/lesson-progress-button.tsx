"use client";

import { useEffect, useState } from "react";

type LessonProgressButtonProps = {
  lessonKey: string;
};

export function LessonProgressButton({
  lessonKey
}: LessonProgressButtonProps) {
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem(`lesson-progress:${lessonKey}`);
    setIsComplete(saved === "complete");
  }, [lessonKey]);

  function toggleComplete() {
    const nextValue = !isComplete;
    setIsComplete(nextValue);

    if (nextValue) {
      window.localStorage.setItem(`lesson-progress:${lessonKey}`, "complete");
    } else {
      window.localStorage.removeItem(`lesson-progress:${lessonKey}`);
    }
  }

  return (
    <button
      type="button"
      onClick={toggleComplete}
      className={`rounded-xl px-4 py-2 text-sm font-medium transition ${
        isComplete
          ? "bg-green-100 text-green-800 border border-green-300"
          : "bg-slate-900 text-white"
      }`}
    >
      {isComplete ? "Lesson Complete" : "Mark Lesson Complete"}
    </button>
  );
}