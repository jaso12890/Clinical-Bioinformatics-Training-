"use client";

import { useEffect, useState } from "react";
import type { VisualisationExample } from "@/components/visualise/visualisation-data";

type VisualiseCheckpointCardProps = {
  example: VisualisationExample;
};

export function VisualiseCheckpointCard({
  example,
}: VisualiseCheckpointCardProps) {
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);

  useEffect(() => {
    setSelectedOptionId(null);
  }, [example.id]);

  const selectedOption = example.checkpoint.options.find(
    (option) => option.id === selectedOptionId
  );

  const isCorrect = selectedOptionId === example.checkpoint.correctOptionId;

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
        Scenario checkpoint
      </p>

      <h2 className="mt-2 text-xl font-semibold text-slate-900">
        Check your visual reasoning
      </h2>

      <p className="mt-2 leading-7 text-slate-600">
        Use the visualisation, transcript context, and evidence reminder before
        choosing the best next reasoning step.
      </p>

      <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4">
        <p className="font-semibold leading-7 text-slate-900">
          {example.checkpoint.question}
        </p>
      </div>

      <div className="mt-5 space-y-3">
        {example.checkpoint.options.map((option) => {
          const isSelected = option.id === selectedOptionId;

          return (
            <button
              key={option.id}
              type="button"
              onClick={() => setSelectedOptionId(option.id)}
              className={`w-full rounded-2xl border p-4 text-left leading-7 transition ${
                isSelected
                  ? "border-slate-900 bg-slate-900 text-white shadow-md"
                  : "border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50"
              }`}
            >
              {option.text}
            </button>
          );
        })}
      </div>

      {selectedOption && (
        <div
          className={`mt-5 rounded-2xl border p-4 ${
            isCorrect
              ? "border-emerald-200 bg-emerald-50"
              : "border-amber-200 bg-amber-50"
          }`}
        >
          <p
            className={`text-sm font-semibold ${
              isCorrect ? "text-emerald-800" : "text-amber-800"
            }`}
          >
            {isCorrect ? "Best answer" : "Review this reasoning"}
          </p>

          <p
            className={`mt-2 leading-7 ${
              isCorrect ? "text-emerald-900" : "text-amber-900"
            }`}
          >
            {selectedOption.feedback}
          </p>
        </div>
      )}
    </div>
  );
}