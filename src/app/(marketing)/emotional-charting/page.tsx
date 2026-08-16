import { PageHero } from "@/components/layout/page-hero";

const facets = [
  {
    title: "A daily check-in, not a chore",
    description:
      "Thirty seconds to name what you're feeling and what's underneath it. No streaks to protect, no guilt for missing a day.",
  },
  {
    title: "Your own language",
    description:
      "EmotionalCharting builds around the words you use, not a fixed list of moods. Precision matters more than simplicity.",
  },
  {
    title: "Patterns, not judgments",
    description:
      "Charts show you the shape of your weeks and seasons — never a score, never a verdict on how you're doing.",
  },
  {
    title: "Private by default",
    description:
      "Every entry is yours. Nothing is shared, analysed for marketing, or shown to anyone else without your explicit choice.",
  },
];

export default function EmotionalChartingPage() {
  return (
    <>
      <PageHero
        eyebrow="EmotionalCharting"
        title="Feelings are data, if you give them somewhere to go."
        lede="EmotionalCharting is the practice at the centre of Choosing Points: a short, honest check-in that turns scattered feelings into a picture you can actually see."
      />
      <section>
        <div className="mx-auto max-w-4xl px-6 py-16">
          <div className="grid gap-8 sm:grid-cols-2">
            {facets.map((facet) => (
              <div key={facet.title}>
                <h2 className="font-serif text-lg text-ink">{facet.title}</h2>
                <p className="mt-2 text-sm leading-6 text-ink-soft">
                  {facet.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
