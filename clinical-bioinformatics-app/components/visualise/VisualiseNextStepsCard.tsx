const nextSteps = [
    "Confirm the genome build or assembly used for the coordinate.",
    "Check the transcript ID before interpreting the HGVS description.",
    "Ask whether the variant falls inside an exon, near a splice boundary, or outside the main coding sequence.",
    "Review the predicted consequence and whether it fits the known disease mechanism.",
    "Check whether the call is technically reliable enough to use in case reasoning.",
    "Connect the visual context back to phenotype, inheritance, test indication, and evidence review.",
  ];
  
  export function VisualiseNextStepsCard() {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
          What to check next
        </p>
  
        <h2 className="mt-2 text-xl font-semibold text-slate-900">
          After you locate the variant marker
        </h2>
  
        <p className="mt-2 leading-7 text-slate-600">
          The marker is a starting point. A learner should then move from visual
          position to structured evidence review.
        </p>
  
        <ul className="mt-6 space-y-3">
          {nextSteps.map((step) => (
            <li
              key={step}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-4 leading-7 text-slate-700"
            >
              {step}
            </li>
          ))}
        </ul>
      </div>
    );
  }