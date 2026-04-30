import { NextResponse } from "next/server";
import { lookupVariant } from "@/lib/genomics/ensembl";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const variant = typeof body.variant === "string" ? body.variant : "";

    const result = await lookupVariant(variant);

    return NextResponse.json({
      result,
    });
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Unable to look up this variant.";

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