const workflowSteps = [
    {
      title: "Start with the region",
      description:
        "Check the chromosome and coordinate interval so you know what part of the genome is being displayed.",
    },
    {
      title: "Locate the gene",
      description:
        "Find where the gene sits within the region and note the strand and basic gene context.",
    },
    {
      title: "Review transcript structure",
      description:
        "Look at the transcript model and exon boxes before assuming where a variant falls biologically.",
    },
    {
      title: "Find the variant marker",
      description:
        "Use the marker to connect an abstract coordinate to a visible position on the gene or transcript.",
    },
    {
      title: "Connect back to evidence",
      description:
        "Use the summary card to link the visual position back to transcript, HGVS, predicted consequence, and evidence review.",
    },
  ];
  
  export function VisualiseWorkflowCard() {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
          How to read this view
        </p>
  
        <h2 className="mt-2 text-xl font-semibold text-slate-900">
          Visual reasoning workflow
        </h2>
  
        <p className="mt-2 leading-7 text-slate-600">
          The visualisation is designed to help learners slow down and connect
          coordinates, transcripts, exons, and variant evidence in a structured
          way.
        </p>
  
        <div className="mt-6 grid gap-4 md:grid-cols-5">
          {workflowSteps.map((step, index) => (
            <div
              key={step.title}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white">
                {index + 1}
              </div>
  
              <h3 className="mt-4 font-semibold text-slate-900">{step.title}</h3>
  
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }