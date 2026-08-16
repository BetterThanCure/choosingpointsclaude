import { PageHero } from "@/components/layout/page-hero";

const categories = [
  { name: "Guided reflections", description: "Short prompts for processing a specific choosing point as it happens." },
  { name: "Reading & research", description: "Accessible summaries of the research behind EmotionalCharting and narrative reflection." },
  { name: "Professional support", description: "How to find a therapist, counsellor, or support group suited to what you're facing." },
  { name: "For Protectors", description: "Guidance for the people supporting someone through a hard season — partners, friends, family." },
];

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Support beyond the app, whenever you need it."
        lede="Resources are curated to complement Choosing Points, not replace the people and professionals who can help most."
      />
      <section>
        <div className="mx-auto max-w-4xl px-6 py-16">
          <div className="grid gap-8 sm:grid-cols-2">
            {categories.map((category) => (
              <div key={category.name}>
                <h2 className="font-serif text-lg text-ink">{category.name}</h2>
                <p className="mt-2 text-sm leading-6 text-ink-soft">
                  {category.description}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-12 max-w-xl text-sm leading-6 text-ink-faint">
            If you or someone you know is in crisis, please go to{" "}
            <a href="/safety-support" className="underline underline-offset-2">
              Safety &amp; Support
            </a>{" "}
            for immediate resources.
          </p>
        </div>
      </section>
    </>
  );
}
