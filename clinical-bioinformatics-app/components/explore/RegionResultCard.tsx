"use client";

import { useState } from "react";
import type {
  RegionFeatureSummary,
  RegionLookupResult,
} from "../../types/genomics";
import { Card } from "@/components/ui/card";

type RegionResultCardProps = {
  result: RegionLookupResult;
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

function buildRegionSummary(result: RegionLookupResult) {
  const topFeatures = result.features
    .slice(0, 5)
    .map(
      (feature) =>
        `- ${feature.externalName ?? feature.id ?? "Unnamed feature"} (${
          feature.biotype ?? "unknown biotype"
        })`
    )
    .join("\n");

  return `Region lookup summary

Source: ${result.source}
Query: ${result.query}
Region: Chromosome ${result.chromosome}:${formatCoordinate(
    result.start
  )}-${formatCoordinate(result.end)}
Features returned: ${result.features.length}

Top overlapping features:
${topFeatures || "No overlapping gene features returned."}

Use note:
This region lookup supports evidence review by connecting genomic coordinates to overlapping gene features. It does not determine whether a variant in the region is clinically important or whether the coordinate is from the correct genome build.`;
}

export function RegionResultCard({ result }: RegionResultCardProps) {
  const [copyStatus, setCopyStatus] = useState("");
  const featurePreview: RegionFeatureSummary[] = result.features.slice(0, 12);

  const ensemblRegionUrl = `https://www.ensembl.org/Homo_sapiens/Location/View?r=${encodeURIComponent(
    `${result.chromosome}:${result.start}-${result.end}`
  )}`;

  async function handleCopySummary() {
    try {
      await navigator.clipboard.writeText(buildRegionSummary(result));
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
              Region result
            </p>

            <h2 className="mt-2 text-2xl font-semibold text-slate-900">
              Chromosome {result.chromosome}: {formatCoordinate(result.start)}-
              {formatCoordinate(result.end)}
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

        <p className="mt-3 leading-7 text-slate-600">
          This lookup shows gene features overlapping the submitted genomic
          coordinate range.
        </p>
      </Card>

      <Card className="border-slate-200 bg-white">
        <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
          Overlapping gene features
        </p>

        <h3 className="mt-2 text-xl font-semibold text-slate-900">
          {result.features.length} feature
          {result.features.length === 1 ? "" : "s"} returned
        </h3>

        {featurePreview.length > 0 ? (
          <div className="mt-5 space-y-3">
            {featurePreview.map(
              (feature: RegionFeatureSummary, index: number) => (
                <div
                  key={`${feature.id ?? "feature"}-${index}`}
                  className="rounded-xl border border-slate-200 bg-slate-50 p-4"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="break-words font-semibold text-slate-900">
                      {feature.externalName ?? feature.id ?? "Unnamed feature"}
                    </p>

                    <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600">
                      {feature.biotype ?? "Unknown biotype"}
                    </span>
                  </div>

                  <p className="mt-2 text-sm text-slate-600">
                    {feature.id ?? "Unknown ID"}
                  </p>

                  <p className="mt-2 text-sm text-slate-600">
                    Chromosome {feature.chromosome ?? result.chromosome}:{" "}
                    {formatCoordinate(feature.start)}-
                    {formatCoordinate(feature.end)} ·{" "}
                    {formatStrand(feature.strand)}
                  </p>

                  {feature.description && (
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {feature.description}
                    </p>
                  )}
                </div>
              )
            )}
          </div>
        ) : (
          <p className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-4 text-slate-600">
            No overlapping gene features were returned for this region.
          </p>
        )}

        {result.features.length > featurePreview.length && (
          <p className="mt-4 text-sm text-slate-500">
            Showing the first {featurePreview.length} features only.
          </p>
        )}
      </Card>

      <Card className="border-slate-200 bg-white">
        <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
          How to use this result
        </p>

        <h3 className="mt-2 text-xl font-semibold text-slate-900">
          Region lookup connects coordinates to gene context
        </h3>

        <p className="mt-3 leading-7 text-slate-600">
          Use this result to understand which genes overlap a genomic coordinate
          range. This helps turn abstract positions into biological context. A
          region lookup does not tell you whether a variant is clinically
          important; it only helps identify what features may need further
          review.
        </p>
      </Card>
    </div>
  );
}