import { Card } from "@/components/ui/card";

const workflowSteps = [
  {
    step: "1",
    title: "Start with the gene",
    description:
      "Check gene identity, genomic location, biotype, and transcript context before jumping into variant interpretation.",
  },
  {
    step: "2",
    title: "Check the transcript",
    description:
      "Review transcript structure, exon context, and whether a protein translation is returned.",
  },
  {
    step: "3",
    title: "Connect coordinates to context",
    description:
      "Use region lookup to see which genes overlap a genomic coordinate range.",
  },
  {
    step: "4",
    title: "Review variant consequence",
    description:
      "Use VEP-style consequence output to understand affected genes, transcripts, consequence terms, and predicted protein-level effects.",
  },
  {
    step: "5",
    title: "Check ClinVar evidence",
    description:
      "Review submitted clinical significance, review status, condition names, and whether evidence appears limited, conflicting, or stronger.",
  },
  {
    step: "6",
    title: "Find linked resources",
    description:
      "Use NCBI resources to find supporting Gene, ClinVar, Nucleotide, and PubMed evidence sources.",
  },
  {
    step: "7",
    title: "Write a cautious summary",
    description:
      "Bring the evidence together carefully. Do not overclaim. A database result supports review; it does not make a diagnosis by itself.",
  },
];

export function ExplorerWorkflowCard() {
  return (
    <Card className="border-slate-200 bg-white">
      <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
        Suggested evidence workflow
      </p>

      <h2 className="mt-2 text-2xl font-semibold text-slate-900">
        How to use the Genomic Explorer like a clinical bioinformatics workflow
      </h2>

      <p className="mt-4 leading-7 text-slate-600">
        The Explorer is not just a set of lookup boxes. Use it to practise
        moving through evidence in a structured, source-aware, and cautious way.
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {workflowSteps.map((item) => (
          <div
            key={item.step}
            className="rounded-xl border border-slate-200 bg-slate-50 p-4"
          >
            <div className="flex items-start gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">
                {item.step}
              </span>

              <div>
                <h3 className="font-semibold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}