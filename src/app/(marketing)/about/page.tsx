import { PageHero } from "@/components/layout/page-hero";

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Built on the belief that most change is quiet."
        lede="Choosing Points started from a simple observation: the moments that reshape a life rarely announce themselves. We wanted to build a place that notices them anyway."
      />
      <section>
        <div className="mx-auto max-w-3xl space-y-6 px-6 py-16 text-base leading-7 text-ink-soft">
          <p>
            We&apos;re a small team building Choosing Points as a long-term,
            careful product — not a quick app. That means we&apos;d rather
            ship something small and honest than something impressive and
            hollow, and we&apos;d rather grow slowly with the people using
            it than move fast and break the trust this kind of tool depends
            on.
          </p>
          <p>
            Choosing Points is currently in early development and open beta
            planning. If you&apos;re using it during this period, thank you
            — your feedback is shaping the product directly, not going into
            a backlog no one reads.
          </p>
        </div>
      </section>
    </>
  );
}
