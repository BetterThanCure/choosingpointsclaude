import Link from "next/link";
import { UserButton } from "@stackframe/stack";
import { memberNav } from "@/lib/member-nav";

export function MemberShell({
  children,
  authenticated,
}: {
  children: React.ReactNode;
  authenticated: boolean;
}) {
  return (
    <div className="flex min-h-full flex-1 flex-col">
      <header className="border-b border-line bg-paper-raised">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/dashboard" className="font-serif text-lg text-ink">
            Choosing Points
          </Link>
          {authenticated ? (
            <UserButton />
          ) : (
            <span className="rounded-full border border-clay/40 bg-clay-soft/60 px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-clay">
              Member preview
            </span>
          )}
        </div>
      </header>

      <div className="mx-auto flex w-full max-w-6xl flex-1 gap-10 px-6 py-10">
        <nav className="hidden w-56 shrink-0 flex-col gap-1 sm:flex">
          {memberNav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm text-ink-soft transition-colors hover:bg-cream-dark hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/"
            className="mt-6 rounded-lg px-3 py-2 text-sm text-ink-faint transition-colors hover:text-ink"
          >
            ← Back to site
          </Link>
        </nav>
        <main className="min-w-0 flex-1">{children}</main>
      </div>
    </div>
  );
}
