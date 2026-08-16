import Link from "next/link";

const adminNav = [
  { label: "Overview", href: "/admin" },
  { label: "Members", href: "/admin/members" },
  { label: "Stories", href: "/admin/stories" },
  { label: "ELK content", href: "/admin/elk" },
  { label: "Feedback", href: "/admin/feedback" },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-full flex-1 flex-col bg-ink text-paper">
      <header className="border-b border-paper/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/admin" className="font-serif text-lg">
            Choosing Points — Admin
          </Link>
          <span className="rounded-full border border-paper/20 px-3 py-1 text-[11px] uppercase tracking-wide text-paper/70">
            Restricted
          </span>
        </div>
      </header>
      <div className="mx-auto flex w-full max-w-6xl flex-1 gap-10 px-6 py-10">
        <nav className="hidden w-48 shrink-0 flex-col gap-1 sm:flex">
          {adminNav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm text-paper/70 transition-colors hover:bg-paper/10 hover:text-paper"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/"
            className="mt-6 rounded-lg px-3 py-2 text-sm text-paper/40 transition-colors hover:text-paper/70"
          >
            ← Back to site
          </Link>
        </nav>
        <main className="min-w-0 flex-1">{children}</main>
      </div>
    </div>
  );
}
