"use client";

import { useState } from "react";
import type {
  TranscriptExonSummary,
  TranscriptLookupResult,
} from "../../types/genomics";
import { Card } from "@/components/ui/card";

type TranscriptResultCardProps = {
  result: TranscriptLookupResult;
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

function buildTranscriptSummary(result: TranscriptLookupResult) {
  return `${result.transcriptId} transcript lookup summary

Source: ${result.source}
Parent gene ID: ${result.parentGeneId ?? "Unknown"}
Biotype: ${result.biotype ?? "Unknown"}
Location: Chromosome ${result.chromosome ?? "Unknown"}:${formatCoordinate(
    result.start
  )}-${formatCoordinate(result.end)}
Strand: ${formatStrand(result.strand)}
Assembly/build: ${result.assemblyName ?? "Unknown"}
Translation ID: ${result.translationId ?? "No protein translation returned"}
Exons returned: ${result.exons.length}

Use note:
This transcript lookup supports evidence review by showing transcript identity, exon structure, genomic coordinates, and whether a protein translation is returned. It does not determine whether this transcript is clinically preferred or whether a variant should be classified.`;
}

export function TranscriptResultCard({ result }: TranscriptResultCardProps) {
  const [copyStatus, setCopyStatus] = useState("");
  const exonPreview: TranscriptExonSummary[] = result.exons.slice(0, 10);

  const ensemblTranscriptUrl = `https://www.ensembl.org/Homo_sapiens/Transcript/Summary?t=${encodeURIComponent(
    result.transcriptId
  )}`;

  async function handleCopySummary() {
    try {
      await navigator.clipboard.writeText(buildTranscriptSummary(result));
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
              Transcript result
            </p>

            <h2 className="mt-2 break-words text-2xl font-semibold text-slate-900">
              {result.transcriptId}
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
              href={ensemblTranscriptUrl}
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
              Parent gene ID
            </p>
            <p className="mt-1 break-words font-semibold text-slate-900">
              {result.parentGeneId ?? "Unknown"}
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-sm font-medium text-slate-500">Biotype</p>
            <p className="mt-1 font-semibold text-slate-900">
              {result.biotype ?? "Unknown"}
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
            <p className="text-sm font-medium text-slate-500">Strand</p>
            <p className="mt-1 font-semibold text-slate-900">
              {formatStrand(result.strand)}
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
            <p className="text-sm font-medium text-slate-500">
              Translation ID
            </p>
            <p className="mt-1 break-words font-semibold text-slate-900">
              {result.translationId ?? "No protein translation returned"}
            </p>
          </div>
        </div>
      </Card>

      <Card className="border-slate-200 bg-white">
        <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
          Exon preview
        </p>

        <h3 className="mt-2 text-xl font-semibold text-slate-900">
          {result.exons.length} exon{result.exons.length === 1 ? "" : "s"}{" "}
          returned
        </h3>

        <p className="mt-3 leading-7 text-slate-600">
          Exon structure helps you understand where transcript features sit
          across the genomic region. This becomes important when judging whether
          a variant may affect coding sequence, splice context, or transcript
          structure.
        </p>

        {exonPreview.length > 0 ? (
          <div className="mt-5 space-y-3">
            {exonPreview.map((exon: TranscriptExonSummary, index: number) => (
              <div
                key={`${exon.id ?? "exon"}-${index}`}
                className="rounded-xl border border-slate-200 bg-slate-50 p-4"
              >
                <p className="font-semibold text-slate-900">
                  Exon {index + 1}
                </p>

                <p className="mt-2 text-sm text-slate-600">
                  {formatCoordinate(exon.start)}-{formatCoordinate(exon.end)}
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  Phase:{" "}
                  {typeof exon.phase === "number" ? exon.phase : "Unknown"} ·
                  End phase:{" "}
                  {typeof exon.endPhase === "number"
                    ? exon.endPhase
                    : "Unknown"}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-4 text-slate-600">
            No exon data was returned for this transcript lookup.
          </p>
        )}

        {result.exons.length > exonPreview.length && (
          <p className="mt-4 text-sm text-slate-500">
            Showing the first {exonPreview.length} exons only.
          </p>
        )}
      </Card>

      <Card className="border-slate-200 bg-white">
        <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
          How to use this result
        </p>

        <h3 className="mt-2 text-xl font-semibold text-slate-900">
          Transcript context affects variant consequence
        </h3>

        <p className="mt-3 leading-7 text-slate-600">
          Use this result to understand which transcript is being reviewed,
          whether it has a protein translation, where its exons sit, and how
          transcript structure may affect variant consequence. Transcript lookup
          supports interpretation, but it does not classify a variant by itself.
        </p>
      </Card>
    </div>
  );
}