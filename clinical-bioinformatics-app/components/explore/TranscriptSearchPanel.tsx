"use client";

import { useState } from "react";
import type { TranscriptLookupResult } from "../../types/genomics";
import { Card } from "@/components/ui/card";
import { TranscriptResultCard } from "@/components/explore/TranscriptResultCard";
import { ExplorerLimitationsCard } from "@/components/explore/ExplorerLimitationsCard";

export function TranscriptSearchPanel() {
  const [transcriptId, setTranscriptId] = useState("");
  const [result, setResult] = useState<TranscriptLookupResult | null>(null);
  const [cachedResults, setCachedResults] = useState<
    Record<string, TranscriptLookupResult>
  >({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function runTranscriptSearch(id: string) {
    const cleanedTranscriptId = id.trim();

    if (!cleanedTranscriptId) {
      setError(
        "Enter an Ensembl transcript ID to search, for example ENST00000357654."
      );
      setResult(null);
      return;
    }

    const cacheKey = cleanedTranscriptId.toUpperCase();

    if (cachedResults[cacheKey]) {
      setResult(cachedResults[cacheKey]);
      setError("");
      return;
    }

    setIsLoading(true);
    setError("");
    setResult(null);

    try {
      const response = await fetch("/api/explore/transcript", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          transcriptId: cleanedTranscriptId,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error ?? "Unable to look up this transcript.");
      }

      const transcriptResult = data.result as TranscriptLookupResult;

      setResult(transcriptResult);
      setCachedResults((currentCache) => ({
        ...currentCache,
        [cacheKey]: transcriptResult,
      }));
    } catch (caughtError) {
      const message =
        caughtError instanceof Error
          ? caughtError.message
          : "Unable to look up this transcript.";

      setError(
        `${message} Check that the ID is a valid Ensembl transcript identifier and try again.`
      );
    } finally {
      setIsLoading(false);
    }
  }

  async function handleSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    await runTranscriptSearch(transcriptId);
  }

  function handleClear() {
    setTranscriptId("");
    setResult(null);
    setError("");
  }

  const hasSomethingToClear = Boolean(transcriptId || result || error);

  return (
    <div className="space-y-6">
      <Card className="border-slate-200 bg-white">
        <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
          Transcript lookup
        </p>

        <h2 className="mt-2 text-2xl font-semibold text-slate-900">
          Search by transcript ID
        </h2>

        <p className="mt-3 leading-7 text-slate-600">
          Enter an Ensembl transcript ID to review transcript location, parent
          gene context, translation status, and exon structure.
        </p>

        <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-4">
          <p className="text-sm font-semibold text-slate-900">
            Accepted format
          </p>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            Use an Ensembl transcript identifier. Human transcript IDs usually
            begin with ENST.
          </p>

          <div className="mt-3 rounded-lg bg-white px-3 py-2 font-mono text-sm text-slate-800">
            ENST00000357654
          </div>

          <p className="mt-3 text-sm leading-6 text-slate-600">
            Transcript lookup is useful when you need to check exon structure,
            translation status, or whether a variant consequence is tied to a
            specific transcript model.
          </p>
        </div>

        <form
          onSubmit={handleSearch}
          className="mt-6 flex flex-col gap-3 sm:flex-row"
        >
          <input
            type="text"
            value={transcriptId}
            onChange={(event) => setTranscriptId(event.target.value)}
            placeholder="Enter transcript ID, for example ENST00000357654"
            className="min-h-11 flex-1 rounded-xl border border-slate-200 bg-white px-4 py-2 text-slate-900 outline-none transition focus:border-slate-400"
          />

          <div className="flex flex-wrap gap-3">
            <button
              type="submit"
              disabled={isLoading}
              className="rounded-xl bg-slate-900 px-5 py-2 font-medium text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-slate-400"
            >
              {isLoading ? "Searching Ensembl..." : "Search transcript"}
            </button>

            {hasSomethingToClear && (
              <button
                type="button"
                onClick={handleClear}
                disabled={isLoading}
                className="rounded-xl border border-slate-200 bg-white px-5 py-2 font-medium text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-60"
              >
                Clear
              </button>
            )}
          </div>
        </form>

        {error && (
          <div className="mt-4 rounded-xl border border-red-200 bg-red-50 p-4">
            <p className="text-sm font-semibold text-red-800">
              Transcript lookup problem
            </p>

            <p className="mt-1 text-sm leading-6 text-red-700">{error}</p>
          </div>
        )}
      </Card>

      <ExplorerLimitationsCard
        title="What transcript lookup can and cannot tell you"
        canHelpWith={[
          "Checking transcript identity and parent gene context",
          "Reviewing exon structure and transcript coordinates",
          "Seeing whether a protein translation is returned",
          "Understanding why transcript choice affects consequence",
        ]}
        cannotTellYou={[
          "Whether this is the clinically preferred transcript",
          "Whether a variant should be classified as pathogenic",
          "Whether the transcript consequence fits the patient phenotype",
          "Whether a result is technically reliable in patient data",
        ]}
      />

      {result && <TranscriptResultCard result={result} />}
    </div>
  );
}