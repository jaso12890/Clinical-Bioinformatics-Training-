import { NextResponse } from "next/server";
import { lookupTranscriptById } from "@/lib/genomics/ensembl";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const transcriptId =
      typeof body.transcriptId === "string" ? body.transcriptId : "";

    const result = await lookupTranscriptById(transcriptId);

    return NextResponse.json({
      result,
    });
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Unable to look up this transcript.";

    return NextResponse.json(
      {
        error: message,
      },
      {
        status: 400,
      }
    );
  }
}