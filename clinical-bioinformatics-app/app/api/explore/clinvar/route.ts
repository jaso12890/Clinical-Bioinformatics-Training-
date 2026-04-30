import { NextResponse } from "next/server";
import { lookupClinVar } from "@/lib/genomics/ncbi";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const query = typeof body.query === "string" ? body.query : "";

    const result = await lookupClinVar(query);

    return NextResponse.json({
      result,
    });
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Unable to search ClinVar.";

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