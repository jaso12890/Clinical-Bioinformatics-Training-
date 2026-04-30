"use client";

import { useState } from "react";
import type {
  ClinVarLookupResult,
  ClinVarRecordSummary,
} from "../../types/genomics";
import { Card } from "@/components/ui/card";

type ClinVarResultCardProps = {
  result: ClinVarLookupResult;
};

function formatList(items: string[]) {
  if (items.length === 0) {
    return "Not returned";
  }

  return items.slice(0, 4).join(", ");
}

function buildClinVarSummary(result: ClinVarLookupResult) {
  const topRecords = result.records
    .slice(0, 5)
    .map(
      (record) =>
        `- ${
          record.title ?? "Untitled ClinVar record"
        }; significance: ${record.clinicalSignificance ?? "not returned"}; review status: ${
          record.reviewStatus ?? "not returned"
        }; accession: ${
          record.accessionVersion ?? record.accession ?? "not returned"
        }`
    )
    .join("\n");

  return `ClinVar lookup summary

Source: ${result.source}
Query: ${result.query}
Total records found: ${result.totalFound}
Records shown: ${result.records.length}

Top ClinVar summaries:
${topRecords || "No ClinVar summaries returned."}

Use note:
ClinVar lookup supports evidence review by showing previous submissions, clinical significance terms, review status, condition names, and accessions. It does not prove that a record matches the patient finding or that a variant should be reported without further assessment.`;
}

export function ClinVarResultCard({ result }: ClinVarResultCardProps) {
  const [copyStatus, setCopyStatus] = useState("");

  const clinVarSearchUrl = `https://www.ncbi.nlm.nih.gov/clinvar/?term=${encodeURIComponent(
    result.query
  )}`;

  async function handleCopySummary() {
    try {
      await navigator.clipboard.writeText(buildClinVarSummary(result));
      setCopyStatus("Copied");
      window.setTimeout(() => setCopyStatus(""), 2000);
    } catch {
      setCopyStatus("Copy failed");
      window.setTimeout(() => setCopyStatus(""), 2000);
    }
  }

  return (
    <div className="space-y-6">
      <Card className="border-slate-200 bg-white">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
              ClinVar search result
            </p>

            <h2 className="mt-2 text-2xl font-semibold text-slate-900">
              {result.totalFound} record{result.totalFound === 1 ? "" : "s"} found
            </h2>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={handleCopySummary}
              className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
            >
              {copyStatus || "Copy summary"}
            </button>

            <a
              href={clinVarSearchUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
            >
              Open in ClinVar
            </a>
          </div>
        </div>

        <p className="mt-3 leading-7 text-slate-600">
          Showing up to 5 ClinVar summaries for:{" "}
          <span className="font-semibold text-slate-900">{result.query}</span>
        </p>
      </Card>

      <Card className="border-slate-200 bg-white">
        <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
          ClinVar summaries
        </p>

        {result.records.length > 0 ? (
          <div className="mt-5 space-y-4">
            {result.records.map((record: ClinVarRecordSummary) => {
              const recordUrl = record.variationId
                ? `https://www.ncbi.nlm.nih.gov/clinvar/variation/${encodeURIComponent(
                    record.variationId
                  )}/`
                : clinVarSearchUrl;

              return (
                <div
                  key={record.uid}
                  className="rounded-xl border border-slate-200 bg-slate-50 p-4"
                >
                  <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="break-words font-semibold text-slate-900">
                        {record.title ?? "Untitled ClinVar record"}
                      </p>

                      {record.clinicalSignificance && (
                        <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700">
                          {record.clinicalSignificance}
                        </span>
                      )}
                    </div>

                    <a
                      href={recordUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="w-fit rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-700 transition hover:bg-slate-100"
                    >
                      Open record
                    </a>
                  </div>

                  <div className="mt-4 grid gap-3 md:grid-cols-2">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                        Accession
                      </p>
                      <p className="mt-1 break-words text-sm font-semibold text-slate-800">
                        {record.accessionVersion ??
                          record.accession ??
                          "Not returned"}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                        Variation ID
                      </p>
                      <p className="mt-1 text-sm font-semibold text-slate-800">
                        {record.variationId ?? "Not returned"}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                        Gene
                      </p>
                      <p className="mt-1 text-sm font-semibold text-slate-800">
                        {record.geneSymbol ?? "Not returned"}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                        Review status
                      </p>
                      <p className="mt-1 text-sm font-semibold text-slate-800">
                        {record.reviewStatus ?? "Not returned"}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                        Last evaluated
                      </p>
                      <p className="mt-1 text-sm font-semibold text-slate-800">
                        {record.lastEvaluated ?? "Not returned"}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                        Variant type
                      </p>
                      <p className="mt-1 text-sm font-semibold text-slate-800">
                        {record.variantType ?? "Not returned"}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 space-y-3">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                        Conditions
                      </p>
                      <p className="mt-1 text-sm leading-6 text-slate-700">
                        {formatList(record.conditionNames)}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                        Molecular consequences
                      </p>
                      <p className="mt-1 text-sm leading-6 text-slate-700">
                        {formatList(record.molecularConsequences)}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <p className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-4 text-slate-600">
            No ClinVar summaries were returned for this search.
          </p>
        )}
      </Card>

      <Card className="border-slate-200 bg-white">
        <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
          How to use this result
        </p>

        <h3 className="mt-2 text-xl font-semibold text-slate-900">
          ClinVar is evidence to review, not an automatic answer
        </h3>

        <p className="mt-3 leading-7 text-slate-600">
          Use ClinVar summaries to understand whether a variant has previous
          clinical submissions, what clinical significance has been submitted,
          and how strongly the submission has been reviewed. ClinVar evidence
          still needs careful checking against phenotype, inheritance, disease
          mechanism, transcript choice, technical confidence, and local service
          review.
        </p>
      </Card>
    </div>
  );
}