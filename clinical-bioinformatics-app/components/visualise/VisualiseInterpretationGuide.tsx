const guidancePoints = [
    {
      title: "Position is not interpretation",
      description:
        "A variant marker shows where the variant sits. It does not tell you whether the variant is clinically significant by itself.",
    },
    {
      title: "Transcript choice matters",
      description:
        "The same genomic position can be described differently depending on transcript selection. Always check which transcript is being used.",
    },
    {
      title: "Exon context helps, but is not enough",
      description:
        "Seeing a variant inside or near an exon can support reasoning, but it still needs consequence prediction, quality review, and clinical evidence.",
    },
    {
      title: "Evidence must stay connected to the case",
      description:
        "Visual context should be interpreted alongside phenotype, inheritance, test indication, technical confidence, and appropriate laboratory review.",
    },
  ];
  
  export function VisualiseInterpretationGuide() {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
          Interpretation guide
        </p>
  
        <h2 className="mt-2 text-xl font-semibold text-slate-900">
          How to use the visualisation safely
        </h2>
  
        <p className="mt-2 leading-7 text-slate-600">
          The visualisation helps you understand genomic context. It should slow
          down your reasoning, not replace evidence review or clinical judgement.
        </p>
  
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {guidancePoints.map((point) => (
            <div
              key={point.title}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
            >
              <h3 className="font-semibold text-slate-900">{point.title}</h3>
  
              <p className="mt-2 leading-7 text-slate-600">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }