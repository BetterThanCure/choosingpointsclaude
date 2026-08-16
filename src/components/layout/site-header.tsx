import Link from "next/link";
import { primaryNav } from "@/lib/nav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
        <Link
          href="/"
          className="font-serif text-lg tracking-tight text-ink whitespace-nowrap"
        >
          Choosing Points
        </Link>

        <nav className="hidden min-w-0 flex-1 items-center justify-center gap-x-4 gap-y-1 whitespace-nowrap text-[12.5px] text-ink-soft xl:flex xl:flex-wrap">
          {primaryNav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="whitespace-nowrap transition-colors hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-3 text-sm">
          <Link
            href="/sign-in"
            className="hidden text-ink-soft transition-colors hover:text-ink sm:inline"
          >
            Sign in
          </Link>
          <Link
            href="/join"
            className="rounded-full bg-ink px-4 py-2 text-[13px] font-medium text-paper transition-colors hover:bg-clay"
          >
            Join
          </Link>
        </div>
      </div>
      <nav className="flex gap-4 overflow-x-auto border-t border-line/60 px-6 py-2 text-[12px] text-ink-soft xl:hidden">
        {primaryNav.map((link) => (
          <Link key={link.href} href={link.href} className="whitespace-nowrap">
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
