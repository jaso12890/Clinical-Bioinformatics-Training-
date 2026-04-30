import { NextResponse } from "next/server";
import { lookupNcbiLinkedResources } from "@/lib/genomics/ncbi";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const query = typeof body.query === "string" ? body.query : "";

    const result = await lookupNcbiLinkedResources(query);

    return NextResponse.json({
      result,
    });
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Unable to search NCBI linked resources.";

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