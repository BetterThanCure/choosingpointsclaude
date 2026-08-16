import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth } from "@/lib/auth/server";

// Next.js 16 renamed `middleware.ts` to `proxy.ts` (same file, same
// semantics — see the deprecation note in the framework's own docs).
// Scoped to the member area only; the public marketing site and admin
// shell aren't gated here.
const authProxy = auth?.middleware({ loginUrl: "/auth/sign-in" });

export default async function proxy(request: NextRequest) {
  if (!authProxy) return NextResponse.next();
  return authProxy(request);
}

export const config = {
  matcher: ["/dashboard/:path*", "/onboarding/:path*"],
};
