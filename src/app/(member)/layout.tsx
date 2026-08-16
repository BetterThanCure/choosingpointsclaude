import { redirect } from "next/navigation";
import { MemberShell } from "@/components/layout/member-shell";
import { auth } from "@/lib/auth/server";

// Server components that call `auth` methods must render dynamically.
export const dynamic = "force-dynamic";

export default async function MemberLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // The proxy (src/proxy.ts) already redirects signed-out visitors away
  // from this route group at the edge once Neon Auth is configured; this
  // check is defense in depth, per Next.js's own guidance not to rely on
  // Proxy alone. Until Neon Auth is configured, the member area stays
  // visible as a preview.
  let authenticated = false;
  if (auth) {
    const { data: session } = await auth.getSession();
    if (!session?.user) redirect("/auth/sign-in");
    authenticated = true;
  }

  return <MemberShell authenticated={authenticated}>{children}</MemberShell>;
}
