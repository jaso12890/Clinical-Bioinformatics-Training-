import { NextResponse } from "next/server";
import { lookupRegion } from "@/lib/genomics/ensembl";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const region = typeof body.region === "string" ? body.region : "";

    const result = await lookupRegion(region);

    return NextResponse.json({
      result,
    });
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Unable to look up this region.";

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