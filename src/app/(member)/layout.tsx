import { MemberShell } from "@/components/layout/member-shell";
import { stackServerApp } from "@/stack";

export default async function MemberLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Once Neon Auth is configured, this redirects signed-out visitors to
  // sign-in. Until then, the member area stays visible as a preview.
  if (stackServerApp) {
    await stackServerApp.getUser({ or: "redirect" });
  }

  return (
    <MemberShell authenticated={Boolean(stackServerApp)}>
      {children}
    </MemberShell>
  );
}
