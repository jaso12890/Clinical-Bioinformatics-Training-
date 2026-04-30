"use client";

import { useState } from "react";
import type { GeneLookupResult, GeneTranscriptSummary } from "../../types/genomics";
import { Card } from "@/components/ui/card";

type GeneResultCardProps = {
  result: GeneLookupResult;
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

function buildGeneSummary(result: GeneLookupResult) {
  return `${result.symbol} gene lookup summary

Source: ${result.source}
Gene ID: ${result.geneId}
Biotype: ${result.biotype ?? "Unknown"}
Location: Chromosome ${result.chromosome ?? "Unknown"}:${formatCoordinate(
    result.start
  )}-${formatCoordinate(result.end)}
Strand: ${formatStrand(result.strand)}
Assembly/build: ${result.assemblyName ?? "Unknown"}
Canonical transcript: ${result.canonicalTranscript ?? "Unknown"}
Transcripts returned: ${result.transcripts.length}

Use note:
This gene lookup supports evidence review by providing gene identity, genomic location, biotype, and transcript context. It does not diagnose a patient or determine whether a variant is clinically significant.`;
}

export function GeneResultCard({ result }: GeneResultCardProps) {
  const [copyStatus, setCopyStatus] = useState("");
  const transcriptPreview: GeneTranscriptSummary[] = result.transcripts.slice(
    0,
    8
  );

  const ensemblGeneUrl = `https://www.ensembl.org/Homo_sapiens/Gene/Summary?g=${encodeURIComponent(
    result.geneId
  )}`;

  async function handleCopySummary() {
    try {
      await navigator.clipboard.writeText(buildGeneSummary(result));
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
              Gene result
            </p>

            <h2 className="mt-2 text-2xl font-semibold text-slate-900">
              {result.symbol}
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
              href={ensemblGeneUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
            >
              Open in Ensembl
            </a>
          </div>
        </div>

        {result.description && (
          <p className="mt-3 leading-7 text-slate-600">
            {result.description}
          </p>
        )}

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-sm font-medium text-slate-500">
              Ensembl gene ID
            </p>
            <p className="mt-1 break-words font-semibold text-slate-900">
              {result.geneId}
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
              Canonical transcript
            </p>
            <p className="mt-1 break-words font-semibold text-slate-900">
              {result.canonicalTranscript ?? "Unknown"}
            </p>
          </div>
        </div>
      </Card>

      <Card className="border-slate-200 bg-white">
        <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
          Transcript preview
        </p>

        <h3 className="mt-2 text-xl font-semibold text-slate-900">
          {result.transcripts.length} transcript
          {result.transcripts.length === 1 ? "" : "s"} returned
        </h3>

        <p className="mt-3 leading-7 text-slate-600">
          Transcript choice matters because the same variant can have different
          predicted consequences depending on which transcript is used.
        </p>

        {transcriptPreview.length > 0 ? (
          <div className="mt-5 space-y-3">
            {transcriptPreview.map((transcript: GeneTranscriptSummary) => (
              <div
                key={transcript.id}
                className="rounded-xl border border-slate-200 bg-slate-50 p-4"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <p className="break-words font-semibold text-slate-900">
                    {transcript.id}
                  </p>

                  {transcript.isCanonical && (
                    <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                      Canonical
                    </span>
                  )}
                </div>

                <p className="mt-2 text-sm text-slate-600">
                  {transcript.biotype ?? "Unknown biotype"} ·{" "}
                  {formatCoordinate(transcript.start)}-
                  {formatCoordinate(transcript.end)}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-4 text-slate-600">
            No transcript data was returned for this lookup.
          </p>
        )}

        {result.transcripts.length > transcriptPreview.length && (
          <p className="mt-4 text-sm text-slate-500">
            Showing the first {transcriptPreview.length} transcripts only.
          </p>
        )}
      </Card>

      <Card className="border-slate-200 bg-white">
        <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
          How to use this result
        </p>

        <h3 className="mt-2 text-xl font-semibold text-slate-900">
          Gene context supports reasoning, but does not replace interpretation
        </h3>

        <p className="mt-3 leading-7 text-slate-600">
          Use this result to understand where the gene sits in the genome, which
          transcript may be relevant, and whether the gene is protein-coding. A
          gene lookup does not tell you whether a patient has a diagnosis. It is
          one supporting step in a wider review that also needs phenotype,
          inheritance, mechanism, variant consequence, technical confidence, and
          appropriate clinical escalation.
        </p>
      </Card>
    </div>
  );
}