import Link from "next/link";
import { footerNav } from "@/lib/nav";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-cream-dark/60">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <p className="font-serif text-xl text-ink">Choosing Points</p>
          <p className="mt-3 max-w-xs text-sm leading-6 text-ink-soft">
            Support for life. A quiet place to notice the moments that
            change everything, even the ones you almost missed.
          </p>
        </div>

        {footerNav.map((group) => (
          <div key={group.title}>
            <p className="text-[12px] font-medium uppercase tracking-wide text-ink-faint">
              {group.title}
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-ink-soft">
              {group.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition-colors hover:text-ink">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-6 text-[12px] text-ink-faint sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Choosing Points. All rights reserved.</p>
          <p>
            If you are in crisis, please visit{" "}
            <Link href="/safety-support" className="underline underline-offset-2 hover:text-ink-soft">
              Safety &amp; Support
            </Link>{" "}
            for immediate resources.
          </p>
        </div>
      </div>
    </footer>
  );
}
