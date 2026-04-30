"use client";

import { useState } from "react";
import type {
  VariantLookupResult,
  VariantTranscriptConsequenceSummary,
} from "../../types/genomics";
import { Card } from "@/components/ui/card";

type VariantResultCardProps = {
  result: VariantLookupResult;
};

function formatCoordinate(value?: number) {
  if (typeof value !== "number") {
    return "Unknown";
  }

  return value.toLocaleString();
}

function formatStrand(strand?: number) {
  if (strand === 1) {
    return "Forward strand";
  }

  if (strand === -1) {
    return "Reverse strand";
  }

  return "Unknown strand";
}

function formatConsequenceTerms(terms: string[]) {
  if (terms.length === 0) {
    return "No consequence terms returned";
  }

  return terms.join(", ").replaceAll("_", " ");
}

function buildVariantSummary(result: VariantLookupResult) {
  const topConsequences = result.transcriptConsequences
    .slice(0, 5)
    .map(
      (consequence) =>
        `- ${consequence.geneSymbol ?? consequence.geneId ?? "Unknown gene"} / ${
          consequence.transcriptId ?? "Unknown transcript"
        }: ${formatConsequenceTerms(consequence.consequenceTerms)}${
          consequence.hgvsc ? `; ${consequence.hgvsc}` : ""
        }${consequence.hgvsp ? `; ${consequence.hgvsp}` : ""}`
    )
    .join("\n");

  return `Variant lookup summary

Source: ${result.source}
Input: ${result.input}
Most severe consequence: ${
    result.mostSevereConsequence?.replaceAll("_", " ") ?? "Unknown"
  }
Assembly/build: ${result.assemblyName ?? "Unknown"}
Location: Chromosome ${result.chromosome ?? "Unknown"}:${formatCoordinate(
    result.start
  )}-${formatCoordinate(result.end)}
Strand: ${formatStrand(result.strand)}
Allele string: ${result.alleleString ?? "Unknown"}
Transcript consequences returned: ${result.transcriptConsequences.length}

Top transcript consequences:
${topConsequences || "No transcript consequences returned."}

Use note:
This variant lookup supports consequence review by showing predicted gene and transcript effects. It does not classify the variant, confirm technical reliability, or determine whether the finding should be reported clinically.`;
}

export function VariantResultCard({ result }: VariantResultCardProps) {
  const [copyStatus, setCopyStatus] = useState("");
  const consequencePreview: VariantTranscriptConsequenceSummary[] =
    result.transcriptConsequences.slice(0, 10);

  const ensemblRegionUrl =
    result.chromosome && result.start && result.end
      ? `https://www.ensembl.org/Homo_sapiens/Location/View?r=${encodeURIComponent(
          `${result.chromosome}:${result.start}-${result.end}`
        )}`
      : "https://www.ensembl.org/Tools/VEP";

  async function handleCopySummary() {
    try {
      await navigator.clipboard.writeText(buildVariantSummary(result));
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
              Variant result
            </p>

            <h2 className="mt-2 break-words text-2xl font-semibold text-slate-900">
              {result.input}
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
              href={ensemblRegionUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
            >
              Open in Ensembl
            </a>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-sm font-medium text-slate-500">
              Most severe consequence
            </p>
            <p className="mt-1 font-semibold text-slate-900">
              {result.mostSevereConsequence?.replaceAll("_", " ") ??
                "Unknown"}
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-sm font-medium text-slate-500">
              Assembly/build
            </p>
            <p className="mt-1 font-semibold text-slate-900">
              {result.assemblyName ?? "Unknown"}
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-sm font-medium text-slate-500">Location</p>
            <p className="mt-1 font-semibold text-slate-900">
              Chromosome {result.chromosome ?? "Unknown"}:{" "}
              {formatCoordinate(result.start)}-{formatCoordinate(result.end)}
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-sm font-medium text-slate-500">Allele string</p>
            <p className="mt-1 break-words font-semibold text-slate-900">
              {result.alleleString ?? "Unknown"}
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-sm font-medium text-slate-500">Strand</p>
            <p className="mt-1 font-semibold text-slate-900">
              {formatStrand(result.strand)}
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-sm font-medium text-slate-500">Source</p>
            <p className="mt-1 font-semibold text-slate-900">
              {result.source}
            </p>
          </div>
        </div>
      </Card>

      <Card className="border-slate-200 bg-white">
        <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
          Transcript consequences
        </p>

        <h3 className="mt-2 text-xl font-semibold text-slate-900">
          {result.transcriptConsequences.length} transcript consequence
          {result.transcriptConsequences.length === 1 ? "" : "s"} returned
        </h3>

        <p className="mt-3 leading-7 text-slate-600">
          Variant consequence is transcript-dependent. Review whether the
          affected transcript, consequence, protein effect, and gene context are
          relevant before using the result in case reasoning.
        </p>

        {consequencePreview.length > 0 ? (
          <div className="mt-5 space-y-3">
            {consequencePreview.map(
              (
                consequence: VariantTranscriptConsequenceSummary,
                index: number
              ) => (
                <div
                  key={`${consequence.transcriptId ?? "transcript"}-${index}`}
                  className="rounded-xl border border-slate-200 bg-slate-50 p-4"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="break-words font-semibold text-slate-900">
                      {consequence.geneSymbol ??
                        consequence.geneId ??
                        "Unknown gene"}
                    </p>

                    {consequence.canonical && (
                      <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                        Canonical
                      </span>
                    )}

                    {consequence.impact && (
                      <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600">
                        {consequence.impact}
                      </span>
                    )}
                  </div>

                  <p className="mt-2 break-words text-sm text-slate-600">
                    Transcript: {consequence.transcriptId ?? "Unknown"}
                  </p>

                  <p className="mt-2 text-sm text-slate-600">
                    Consequence:{" "}
                    {formatConsequenceTerms(consequence.consequenceTerms)}
                  </p>

                  {consequence.hgvsc && (
                    <p className="mt-2 break-words text-sm text-slate-600">
                      HGVS cDNA: {consequence.hgvsc}
                    </p>
                  )}

                  {consequence.hgvsp && (
                    <p className="mt-2 break-words text-sm text-slate-600">
                      HGVS protein: {consequence.hgvsp}
                    </p>
                  )}

                  {(consequence.aminoAcids || consequence.codons) && (
                    <p className="mt-2 text-sm text-slate-600">
                      Amino acids: {consequence.aminoAcids ?? "Unknown"} ·
                      Codons: {consequence.codons ?? "Unknown"}
                    </p>
                  )}
                </div>
              )
            )}
          </div>
        ) : (
          <p className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-4 text-slate-600">
            No transcript consequences were returned for this variant.
          </p>
        )}

        {result.transcriptConsequences.length > consequencePreview.length && (
          <p className="mt-4 text-sm text-slate-500">
            Showing the first {consequencePreview.length} transcript
            consequences only.
          </p>
        )}
      </Card>

      <Card className="border-slate-200 bg-white">
        <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
          How to use this result
        </p>

        <h3 className="mt-2 text-xl font-semibold text-slate-900">
          Variant consequence is evidence, not classification
        </h3>

        <p className="mt-3 leading-7 text-slate-600">
          Use this result to understand which gene and transcript may be
          affected, what consequence is predicted, and whether there is a coding
          or protein-level effect. This does not classify the variant or make a
          diagnosis. Clinical reasoning still needs phenotype fit, inheritance,
          mechanism, population evidence, technical confidence, and appropriate
          review.
        </p>
      </Card>
    </div>
  );
}