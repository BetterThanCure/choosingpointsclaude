import Link from "next/link";
import { PageHero } from "@/components/layout/page-hero";

const included = [
  "Daily EmotionalCharting, private by default",
  "A running ChoosingPoints journal you control",
  "Kéya, your reflective companion",
  "Find Your ELK, matched to what you're facing",
  "Stories from other members, shared on their terms",
];

export default function JoinPage() {
  return (
    <>
      <PageHero
        eyebrow="Join"
        title="Start noticing your choosing points."
        lede="Joining Choosing Points takes a minute. Everything you write stays private by default, and you decide later what — if anything — you ever want to share."
      />
      <section>
        <div className="mx-auto max-w-3xl px-6 py-16">
          <div className="rounded-2xl border border-line bg-paper-raised p-8">
            <h2 className="font-serif text-lg text-ink">
              What&apos;s included
            </h2>
            <ul className="mt-4 space-y-2 text-sm leading-6 text-ink-soft">
              {included.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-clay">—</span>
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/auth/sign-up"
              className="mt-8 inline-block rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-clay"
            >
              Create your account
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
