"use client";

import { useState } from "react";
import type {
  NcbiLinkedResourceSummary,
  NcbiLinkedResourcesResult,
} from "../../types/genomics";
import { Card } from "@/components/ui/card";

type NcbiResourcesResultCardProps = {
  result: NcbiLinkedResourcesResult;
};

function getOpenUrl(resource: NcbiLinkedResourceSummary) {
  if (resource.opensDirectRecord && resource.directUrl) {
    return resource.directUrl;
  }

  return resource.searchUrl;
}

function getRecordText(resource: NcbiLinkedResourceSummary) {
  if (typeof resource.totalFound !== "number") {
    return "Search available";
  }

  return `${resource.totalFound.toLocaleString()} record${
    resource.totalFound === 1 ? "" : "s"
  } found`;
}

function getOpenDescription(resource: NcbiLinkedResourceSummary) {
  if (resource.opensDirectRecord) {
    return "Opens the top returned human gene record directly.";
  }

  return "Opens the database search results page.";
}

function buildNcbiResourcesSummary(result: NcbiLinkedResourcesResult) {
  const resources = result.resources
    .map((resource) => {
      const countText =
        typeof resource.totalFound === "number"
          ? `${resource.totalFound} records found`
          : "search available";

      const topIds =
        resource.topIds.length > 0
          ? resource.topIds.join(", ")
          : "No top IDs shown";

      return `- ${resource.database}: ${countText}; top IDs: ${topIds}`;
    })
    .join("\n");

  return `NCBI linked resources summary

Source: ${result.source}
Query: ${result.query}

Resource overview:
${resources || "No linked resources returned."}

Use note:
NCBI linked resources help identify where supporting records may exist across selected databases. These links support evidence gathering, but they do not decide which source is strongest, whether evidence applies to the patient phenotype, or whether a finding should be reported clinically.`;
}

export function NcbiResourcesResultCard({
  result,
}: NcbiResourcesResultCardProps) {
  const [copyStatus, setCopyStatus] = useState("");

  async function handleCopySummary() {
    try {
      await navigator.clipboard.writeText(buildNcbiResourcesSummary(result));
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
              NCBI linked resources
            </p>

            <h2 className="mt-2 text-2xl font-semibold text-slate-900">
              Resource search for {result.query}
            </h2>
          </div>

          <button
            type="button"
            onClick={handleCopySummary}
            className="w-fit rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
          >
            {copyStatus || "Copy summary"}
          </button>
        </div>

        <p className="mt-3 leading-7 text-slate-600">
          This shows where related records may exist across selected NCBI
          databases. Use these links as starting points for evidence review, not
          as automatic interpretation.
        </p>
      </Card>

      <Card className="border-slate-200 bg-white">
        <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
          Resource overview
        </p>

        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {result.resources.map((resource: NcbiLinkedResourceSummary) => {
            const openUrl = getOpenUrl(resource);

            return (
              <div
                key={resource.dbName}
                className="rounded-xl border border-slate-200 bg-slate-50 p-4"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">
                      {resource.database}
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                      {getRecordText(resource)}
                    </p>
                  </div>

                  <a
                    href={openUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
                  >
                    Open
                  </a>
                </div>

                <p className="mt-3 text-xs text-slate-500">
                  {getOpenDescription(resource)}
                </p>

                {resource.topIds.length > 0 && (
                  <div className="mt-4">
                    <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                      Top returned IDs
                    </p>

                    <p className="mt-1 break-words text-sm leading-6 text-slate-700">
                      {resource.topIds.join(", ")}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Card>

      <Card className="border-slate-200 bg-white">
        <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
          How to use this result
        </p>

        <h3 className="mt-2 text-xl font-semibold text-slate-900">
          Linked resources help you find evidence sources
        </h3>

        <p className="mt-3 leading-7 text-slate-600">
          Use NCBI linked resources to identify where supporting records may
          exist, such as publications, gene records, ClinVar entries, or
          nucleotide records. These links help evidence gathering, but they still
          require careful review, source checking, and clinical context.
        </p>
      </Card>
    </div>
  );
}