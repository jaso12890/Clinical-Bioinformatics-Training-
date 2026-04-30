"use client";

import type { VisualisationExample } from "@/components/visualise/visualisation-data";

type VisualisationExampleSelectorProps = {
  examples: VisualisationExample[];
  selectedExampleId: string;
  onSelectExample: (exampleId: string) => void;
};

export function VisualisationExampleSelector({
  examples,
  selectedExampleId,
  onSelectExample,
}: VisualisationExampleSelectorProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
        Case-ready examples
      </p>

      <h2 className="mt-2 text-xl font-semibold text-slate-900">
        Choose a visualisation scenario
      </h2>

      <p className="mt-2 leading-7 text-slate-600">
        These examples are designed to become reusable visual context for later
        case simulator workflows.
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {examples.map((example) => {
          const isSelected = example.id === selectedExampleId;

          return (
            <button
              key={example.id}
              type="button"
              onClick={() => onSelectExample(example.id)}
              className={`rounded-2xl border p-4 text-left transition ${
                isSelected
                  ? "border-slate-900 bg-slate-900 text-white shadow-md"
                  : "border-slate-200 bg-slate-50 text-slate-900 hover:border-slate-300 hover:bg-white"
              }`}
            >
              <p
                className={`text-xs font-bold uppercase tracking-wide ${
                  isSelected ? "text-slate-200" : "text-slate-500"
                }`}
              >
                {example.gene.symbol}
              </p>

              <h3 className="mt-2 font-semibold">{example.title}</h3>

              <p
                className={`mt-3 text-sm leading-6 ${
                  isSelected ? "text-slate-200" : "text-slate-600"
                }`}
              >
                {example.caseTheme}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
}