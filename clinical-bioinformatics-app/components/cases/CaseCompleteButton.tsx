"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { isCaseCompleted, markCaseAsCompleted } from "@/lib/caseProgress";

type CaseCompleteButtonProps = {
  caseSlug: string;
};

export function CaseCompleteButton({ caseSlug }: CaseCompleteButtonProps) {
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    setIsCompleted(isCaseCompleted(caseSlug));
  }, [caseSlug]);

  function handleCompleteCase() {
    markCaseAsCompleted(caseSlug);
    setIsCompleted(true);
  }

  return (
    <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
        Case completion
      </p>

      <h2 className="mt-2 text-xl font-semibold text-slate-900">
        Mark this case as complete
      </h2>

      <p className="mt-3 leading-7 text-slate-600">
        Once you have worked through the case reasoning, reviewed the feedback,
        and understood the final reflection, mark this case as complete.
      </p>

      <div className="mt-5 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={handleCompleteCase}
          disabled={isCompleted}
          className={`rounded-xl px-4 py-2 font-medium transition ${
            isCompleted
              ? "cursor-default bg-emerald-100 text-emerald-800"
              : "bg-slate-900 text-white hover:bg-slate-800"
          }`}
        >
          {isCompleted ? "Case completed" : "Complete case"}
        </button>

        {isCompleted && (
          <Link
            href="/cases"
            className="rounded-xl border border-slate-200 bg-white px-4 py-2 font-medium text-slate-700 transition hover:bg-slate-50"
          >
            Back to case simulator
          </Link>
        )}
      </div>
    </section>
  );
}