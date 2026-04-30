"use client";

import { useState } from "react";

export function ResetCaseProgressButton() {
  const [isConfirming, setIsConfirming] = useState(false);

  function resetCaseProgress() {
    if (typeof window === "undefined") return;

    const keysToRemove: string[] = [];

    for (let index = 0; index < window.localStorage.length; index += 1) {
      const key = window.localStorage.key(index);

      if (!key) continue;

      const normalisedKey = key.toLowerCase();

      if (
        normalisedKey.includes("case") ||
        normalisedKey.includes("clinical-case")
      ) {
        keysToRemove.push(key);
      }
    }

    keysToRemove.forEach((key) => {
      window.localStorage.removeItem(key);
    });

    window.location.reload();
  }

  if (isConfirming) {
    return (
      <div className="rounded-2xl border border-red-200 bg-red-50 p-4">
        <p className="font-semibold text-red-900">Reset case progress?</p>

        <p className="mt-2 text-sm leading-6 text-red-800">
          This will clear saved progress for the case simulator and module mini
          cases on this browser.
        </p>

        <div className="mt-4 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={resetCaseProgress}
            className="rounded-xl bg-red-700 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-800"
          >
            Yes, reset case progress
          </button>

          <button
            type="button"
            onClick={() => setIsConfirming(false)}
            className="rounded-xl border border-red-300 bg-white px-4 py-2 text-sm font-medium text-red-700 transition hover:bg-red-100"
          >
            Cancel
          </button>
        </div>
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setIsConfirming(true)}
      className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
    >
      Reset case progress
    </button>
  );
}