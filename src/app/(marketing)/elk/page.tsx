import { PageHero } from "@/components/layout/page-hero";

const kits = [
  { name: "Grief & loss", description: "For when something or someone is gone, and life keeps asking you to move anyway." },
  { name: "Big change", description: "New city, new job, new chapter — support for the disorientation that comes before it feels like home." },
  { name: "Endings, quiet and loud", description: "Relationships, roles, and routines that are ending, whether or not anyone else has noticed yet." },
  { name: "New beginnings", description: "For the strange vulnerability of starting something you actually want." },
  { name: "Boundaries", description: "Learning to notice, hold, and recover from the choosing points where you say no." },
  { name: "Health & body", description: "Diagnoses, recoveries, and the choosing points that happen in waiting rooms and quiet mornings after." },
];

export default function ElkPage() {
  return (
    <>
      <PageHero
        eyebrow="Find Your ELK"
        title="Emotional Learning Kits, matched to what you're actually facing."
        lede="An ELK is a focused bundle of guidance, reflection prompts, and stories built around one real situation — not a generic self-help category."
      />
      <section>
        <div className="mx-auto max-w-5xl px-6 py-16">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {kits.map((kit) => (
              <div
                key={kit.name}
                className="rounded-2xl border border-line bg-paper-raised p-6"
              >
                <h2 className="font-serif text-lg text-ink">{kit.name}</h2>
                <p className="mt-2 text-sm leading-6 text-ink-soft">
                  {kit.description}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-12 max-w-xl text-sm leading-6 text-ink-faint">
            Sign in and Kéya will help surface the ELK most relevant to your
            recent EmotionalCharting and journal entries — no need to
            self-diagnose which one fits.
          </p>
        </div>
      </section>
    </>
  );
}
