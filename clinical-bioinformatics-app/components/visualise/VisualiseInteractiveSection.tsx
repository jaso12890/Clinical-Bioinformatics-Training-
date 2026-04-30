"use client";

import { useMemo, useState } from "react";
import { GenomeVisualisationPanel } from "@/components/visualise/GenomeVisualisationPanel";
import { VisualisationExampleSelector } from "@/components/visualise/VisualisationExampleSelector";
import { VisualiseCaseReadinessCard } from "@/components/visualise/VisualiseCaseReadinessCard";
import { VisualiseCheckpointCard } from "@/components/visualise/VisualiseCheckpointCard";
import {
  visualisationExamples,
  type VisualisationExample,
} from "@/components/visualise/visualisation-data";

function getSelectedExample(
  examples: VisualisationExample[],
  selectedExampleId: string
) {
  return (
    examples.find((example) => example.id === selectedExampleId) ?? examples[0]
  );
}

export function VisualiseInteractiveSection() {
  const [selectedExampleId, setSelectedExampleId] = useState(
    visualisationExamples[0].id
  );

  const selectedExample = useMemo(
    () => getSelectedExample(visualisationExamples, selectedExampleId),
    [selectedExampleId]
  );

  return (
    <div className="space-y-8">
      <VisualisationExampleSelector
        examples={visualisationExamples}
        selectedExampleId={selectedExample.id}
        onSelectExample={setSelectedExampleId}
      />

      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
          Selected scenario
        </p>

        <h2 className="mt-2 text-xl font-semibold text-slate-900">
          {selectedExample.title}
        </h2>

        <p className="mt-2 leading-7 text-slate-600">
          {selectedExample.learningFocus}
        </p>

        <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <p className="text-sm font-semibold text-slate-900">
            Later case workflow use
          </p>

          <p className="mt-2 leading-7 text-slate-600">
            {selectedExample.workflowUse}
          </p>
        </div>
      </div>

      <VisualiseCaseReadinessCard example={selectedExample} />

      <GenomeVisualisationPanel example={selectedExample} />

      <VisualiseCheckpointCard example={selectedExample} />
    </div>
  );
}