import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const username = process.env.BASIC_AUTH_USER;
  const password = process.env.BASIC_AUTH_PASSWORD;

  if (!username || !password) {
    return new NextResponse("Password protection is not configured.", {
      status: 500,
    });
  }

  const authHeader = request.headers.get("authorization");

  if (authHeader?.startsWith("Basic ")) {
    const encodedCredentials = authHeader.split(" ")[1];
    const decodedCredentials = atob(encodedCredentials);

    const [submittedUsername, ...submittedPasswordParts] =
      decodedCredentials.split(":");

    const submittedPassword = submittedPasswordParts.join(":");

    if (submittedUsername === username && submittedPassword === password) {
      return NextResponse.next();
    }
  }

  return new NextResponse("Authentication required", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Clinical Bioinformatics Training"',
    },
  });
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\.(?:png|jpg|jpeg|gif|webp|svg|ico)$).*)",
  ],
};