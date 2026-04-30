type CaseProgressCardProps = {
    completedCases: number;
    totalCases: number;
    percentage: number;
  };
  
  export function CaseProgressCard({
    completedCases,
    totalCases,
    percentage,
  }: CaseProgressCardProps) {
    return (
      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-3">
          <div>
            <p className="text-sm font-medium text-slate-500">
              Case simulator progress
            </p>
  
            <h2 className="mt-1 text-2xl font-bold text-slate-900">
              {completedCases} / {totalCases} cases completed
            </h2>
          </div>
  
          <div className="h-3 w-full overflow-hidden rounded-full bg-slate-100">
            <div
              className="h-full rounded-full bg-slate-900 transition-all duration-300"
              style={{ width: `${percentage}%` }}
            />
          </div>
  
          <p className="text-sm text-slate-600">
            {percentage}% complete
          </p>
  
          <p className="text-sm leading-6 text-slate-600">
            Keep building safe case reasoning across phenotype fit, inheritance,
            QC confidence, candidate prioritisation, uncertainty, and escalation.
          </p>
        </div>
      </section>
    );
  }