import Link from "next/link";

const pillars = [
  {
    name: "EmotionalCharting",
    href: "/emotional-charting",
    description:
      "A quiet daily practice for noticing what you feel, and how it moves — so patterns become visible instead of invisible.",
  },
  {
    name: "Meet Kéya",
    href: "/keya",
    description:
      "A companion for reflection, not a chatbot for small talk. Kéya listens for the moments that matter and helps you carry them forward.",
  },
  {
    name: "Find Your ELK",
    href: "/elk",
    description:
      "Emotional Learning Kits built around what you're actually facing right now — grief, change, new beginnings, quiet endings.",
  },
];

const stories = [
  {
    quote:
      "I didn't notice the choosing point until three weeks after it happened. Writing it down was the first time it felt real.",
    context: "A ChoosingPoints member, on a quiet decision that changed everything",
  },
  {
    quote:
      "Nobody tells you that leaving is a hundred small decisions, not one big one. This is the first place that made that visible.",
    context: "A ChoosingPoints member, on a long season of change",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
          <p className="font-serif text-sm uppercase tracking-[0.2em] text-clay">
            Choosing Points
          </p>
          <h1 className="mt-6 max-w-3xl font-serif text-5xl leading-[1.08] tracking-tight text-ink sm:text-6xl">
            Support for life.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-8 text-ink-soft italic font-serif">
            Life doesn&apos;t only change at the decisions we notice.
          </p>
          <p className="mt-6 max-w-xl text-base leading-7 text-ink-soft">
            Choosing Points is a place to see the quiet turning points in
            your life as they happen — not just the loud ones. To feel what
            you feel, understand where it comes from, and choose what to do
            with it, with company along the way.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/join"
              className="rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-clay"
            >
              Join Choosing Points
            </Link>
            <Link
              href="/how-it-works"
              className="rounded-full border border-line px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-ink"
            >
              See how it works
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-paper-raised">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <h2 className="font-serif text-3xl leading-tight text-ink">
              What is a choosing point?
            </h2>
            <div className="space-y-5 text-base leading-7 text-ink-soft">
              <p>
                A choosing point is any moment where something shifts — a
                conversation you almost didn&apos;t have, a boundary you
                finally held, a morning you decided to stay instead of
                leave. Most of them pass without ceremony. Few of them get
                written down.
              </p>
              <p>
                Choosing Points gives those moments a place to live: a way
                to notice them as they happen, understand the feeling
                underneath them, and see, over time, the shape of a life
                being chosen rather than simply lived through.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="font-serif text-3xl text-ink">
            Three ways to begin
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {pillars.map((pillar) => (
              <Link
                key={pillar.href}
                href={pillar.href}
                className="group flex flex-col rounded-2xl border border-line bg-paper-raised p-7 transition-colors hover:border-clay"
              >
                <h3 className="font-serif text-xl text-ink">{pillar.name}</h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-ink-soft">
                  {pillar.description}
                </p>
                <span className="mt-6 text-sm font-medium text-clay">
                  Explore
                  <span className="transition-transform group-hover:translate-x-0.5">
                    {" "}
                    →
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-sage-soft/60">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="flex items-baseline justify-between gap-6">
            <h2 className="font-serif text-3xl text-ink">In their words</h2>
            <Link
              href="/stories"
              className="whitespace-nowrap text-sm font-medium text-sage transition-colors hover:text-ink"
            >
              Read more stories →
            </Link>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {stories.map((story) => (
              <figure
                key={story.context}
                className="rounded-2xl border border-line/70 bg-paper-raised p-8"
              >
                <blockquote className="font-serif text-xl italic leading-snug text-ink">
                  &ldquo;{story.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-5 text-sm text-ink-faint">
                  {story.context}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="font-serif text-sm uppercase tracking-[0.2em] text-clay">
              Meet Kéya
            </p>
            <h2 className="mt-4 font-serif text-3xl leading-tight text-ink">
              A companion built for reflection, not conversation for its
              own sake.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-ink-soft">
              Kéya isn&apos;t here to keep you talking. Kéya is here to help
              you notice, name, and understand what a moment meant — and to
              know, always, when the right next step is a person, a
              resource, or simply quiet.
            </p>
            <Link
              href="/keya"
              className="mt-8 inline-block rounded-full border border-line px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-ink"
            >
              Meet Kéya
            </Link>
          </div>
          <div className="rounded-2xl border border-line bg-cream-dark/70 p-8">
            <p className="font-serif text-lg italic leading-relaxed text-ink-soft">
              &ldquo;Tell me about the moment, not the whole story. We can
              find the rest together.&rdquo;
            </p>
            <p className="mt-4 text-sm text-ink-faint">— Kéya</p>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="rounded-3xl border border-line bg-clay-soft/50 px-8 py-14 text-center sm:px-16">
            <h2 className="font-serif text-3xl text-ink sm:text-4xl">
              Your choosing points are already happening.
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base leading-7 text-ink-soft">
              You don&apos;t need to have it figured out to begin. You just
              need a place to notice.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/join"
                className="rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-clay"
              >
                Join Choosing Points
              </Link>
              <Link
                href="/safety-support"
                className="rounded-full border border-line px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-ink"
              >
                Safety &amp; Support
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
