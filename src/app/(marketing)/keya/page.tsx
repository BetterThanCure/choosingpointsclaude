import { PageHero } from "@/components/layout/page-hero";

const principles = [
  {
    title: "Built for reflection, not chit-chat",
    description:
      "Kéya is designed around a single job: helping you understand a moment. She won't fill space with small talk or pretend to be a friend replacing your real ones.",
  },
  {
    title: "You control the memory",
    description:
      "Kéya only remembers what you choose to let her carry forward. You can review, edit, or clear what she knows about you at any time.",
  },
  {
    title: "Knows her limits",
    description:
      "Kéya recognises when a conversation needs a person, not an AI — and routes toward real support, resources, or your Protector network without hesitation.",
  },
  {
    title: "Grounded in your data, not generic advice",
    description:
      "Where relevant, Kéya draws on your own EmotionalCharting history and journal — with your permission — instead of guessing.",
  },
];

export default function KeyaPage() {
  return (
    <>
      <PageHero
        eyebrow="Meet Kéya"
        title="A companion who knows when to listen, and when to step aside."
        lede="Kéya is the reflective companion inside Choosing Points — built specifically to help you notice and understand choosing points, and nothing beyond that."
      />
      <section>
        <div className="mx-auto max-w-4xl px-6 py-16">
          <div className="rounded-2xl border border-line bg-cream-dark/60 p-8">
            <p className="font-serif text-xl italic leading-relaxed text-ink">
              &ldquo;I&apos;m not here to have an opinion about your life.
              I&apos;m here to help you see it clearly enough to have your
              own.&rdquo;
            </p>
            <p className="mt-4 text-sm text-ink-faint">— Kéya</p>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2">
            {principles.map((principle) => (
              <div key={principle.title}>
                <h2 className="font-serif text-lg text-ink">
                  {principle.title}
                </h2>
                <p className="mt-2 text-sm leading-6 text-ink-soft">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-14 max-w-xl text-sm leading-6 text-ink-faint">
            Kéya is being built progressively, in the open. The full
            conversational experience, memory controls, and safety routing
            are arriving across upcoming milestones — this build already
            reflects the architecture and boundaries she operates under.
          </p>
        </div>
      </section>
    </>
  );
}
