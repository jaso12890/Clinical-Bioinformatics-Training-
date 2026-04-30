const legendItems = [
    {
      label: "Grey line",
      meaning:
        "The genomic or transcript span being displayed. It gives the coordinate range that the other features sit on.",
      swatchClass: "bg-slate-300",
    },
    {
      label: "Blue block",
      meaning:
        "The selected gene within the genomic region. This helps show where the gene sits relative to the displayed interval.",
      swatchClass: "bg-sky-100 border-sky-300",
    },
    {
      label: "Purple boxes",
      meaning:
        "Displayed exons within the selected transcript. These help learners connect coordinates to transcript structure.",
      swatchClass: "bg-violet-100 border-violet-300",
    },
    {
      label: "Amber marker",
      meaning:
        "The example variant position. This shows location only, not clinical significance.",
      swatchClass: "bg-amber-500 border-amber-500",
    },
  ];
  
  export function VisualiseLegendCard() {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
          Visual legend
        </p>
  
        <h2 className="mt-2 text-xl font-semibold text-slate-900">
          What each visual element means
        </h2>
  
        <p className="mt-2 leading-7 text-slate-600">
          Use this legend to understand the simplified genome-style display before
          drawing any reasoning conclusions from it.
        </p>
  
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {legendItems.map((item) => (
            <div
              key={item.label}
              className="flex gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4"
            >
              <div
                className={`mt-1 h-5 w-10 shrink-0 rounded-full border ${item.swatchClass}`}
                aria-hidden="true"
              />
  
              <div>
                <h3 className="font-semibold text-slate-900">{item.label}</h3>
  
                <p className="mt-2 leading-7 text-slate-600">{item.meaning}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }