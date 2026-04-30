import { NextResponse } from "next/server";
import { lookupGeneBySymbol } from "@/lib/genomics/ensembl";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const symbol = typeof body.symbol === "string" ? body.symbol : "";

    const result = await lookupGeneBySymbol(symbol);

    return NextResponse.json({
      result,
    });
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Unable to look up this gene.";

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