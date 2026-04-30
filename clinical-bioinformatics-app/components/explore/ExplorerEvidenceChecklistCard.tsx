import { Card } from "@/components/ui/card";

const checklistItems = [
  {
    title: "Gene context",
    description:
      "Is the gene identity correct, and does the gene have a plausible relationship to the phenotype or disease area being reviewed?",
  },
  {
    title: "Transcript awareness",
    description:
      "Is the consequence being considered on a relevant transcript, and could transcript choice change the interpretation?",
  },
  {
    title: "Coordinate and build context",
    description:
      "Are the coordinates being interpreted in the correct genome build and genomic context?",
  },
  {
    title: "Variant consequence",
    description:
      "Does the predicted consequence fit the suspected disease mechanism, such as loss-of-function, missense, splice, or copy-number mechanism?",
  },
  {
    title: "ClinVar evidence",
    description:
      "Is there previous clinical submission evidence, and what is the review status, condition match, and clinical significance?",
  },
  {
    title: "Linked evidence sources",
    description:
      "Are there supporting records or publications that need review, rather than relying only on one database summary?",
  },
  {
    title: "Patient and family context",
    description:
      "Does the evidence fit the phenotype, inheritance pattern, family structure, and testing indication?",
  },
  {
    title: "Technical confidence",
    description:
      "Would the original data need read-level review, QC checks, orthogonal confirmation, or escalation before using the finding?",
  },
];

export function ExplorerEvidenceChecklistCard() {
  return (
    <Card className="border-slate-200 bg-white">
      <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
        Evidence checklist
      </p>

      <h2 className="mt-2 text-2xl font-semibold text-slate-900">
        Before using an Explorer result in case reasoning
      </h2>

      <p className="mt-4 leading-7 text-slate-600">
        Use this checklist to avoid treating a database result as an automatic
        answer. A safe clinical bioinformatics workflow brings together source
        evidence, patient context, technical confidence, and appropriate review.
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {checklistItems.map((item) => (
          <div
            key={item.title}
            className="rounded-xl border border-slate-200 bg-slate-50 p-4"
          >
            <div className="flex items-start gap-3">
              <div className="mt-1 h-4 w-4 shrink-0 rounded border border-slate-300 bg-white" />

              <div>
                <h3 className="font-semibold text-slate-900">{item.title}</h3>

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