"use client";

import { useEffect, useState } from "react";
import {
  getProgress,
  markMiniCaseComplete,
  markModuleQuizComplete,
} from "@/lib/progress";

type ModuleItemCompleteButtonProps = {
  moduleSlug: string;
  itemType: "moduleQuiz" | "miniCase";
  completeLabel: string;
  incompleteLabel: string;
};

export function ModuleItemCompleteButton({
  moduleSlug,
  itemType,
  completeLabel,
  incompleteLabel,
}: ModuleItemCompleteButtonProps) {
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const progress = getProgress();

    if (itemType === "moduleQuiz") {
      setIsComplete(progress.completedModuleQuizzes.includes(`${moduleSlug}-quiz`));
      return;
    }

    setIsComplete(progress.completedMiniCases.includes(`${moduleSlug}-mini-case`));
  }, [moduleSlug, itemType]);

  function handleComplete() {
    if (isComplete) return;

    if (itemType === "moduleQuiz") {
      markModuleQuizComplete(moduleSlug);
    } else {
      markMiniCaseComplete(moduleSlug);
    }

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
      {isComplete ? completeLabel : incompleteLabel}
    </button>
  );
}