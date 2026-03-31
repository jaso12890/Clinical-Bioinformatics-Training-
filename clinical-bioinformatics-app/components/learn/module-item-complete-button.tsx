"use client";

import { useEffect, useState } from "react";

type ModuleItemCompleteButtonProps = {
  storageKey: string;
  completeLabel: string;
  incompleteLabel: string;
};

export function ModuleItemCompleteButton({
  storageKey,
  completeLabel,
  incompleteLabel
}: ModuleItemCompleteButtonProps) {
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem(storageKey);
    setIsComplete(saved === "complete");
  }, [storageKey]);

  function toggleComplete() {
    const nextValue = !isComplete;
    setIsComplete(nextValue);

    if (nextValue) {
      window.localStorage.setItem(storageKey, "complete");
    } else {
      window.localStorage.removeItem(storageKey);
    }
  }

  return (
    <button
      type="button"
      onClick={toggleComplete}
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