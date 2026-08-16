import { PageHero } from "@/components/layout/page-hero";

const steps = [
  {
    step: "01",
    title: "Notice",
    description:
      "Short, daily EmotionalCharting check-ins surface what you're feeling before it fades into the background of a busy day.",
  },
  {
    step: "02",
    title: "Reflect",
    description:
      "Talk it through with Kéya, or write directly into your ChoosingPoints journal. Either way, the moment gets a place to land.",
  },
  {
    step: "03",
    title: "Understand",
    description:
      "Over weeks and months, patterns become visible — the seasons, the triggers, the choosing points that quietly shaped everything after them.",
  },
  {
    step: "04",
    title: "Carry forward",
    description:
      "Find Your ELK connects what you're facing to the right Emotional Learning Kit, stories from others, and resources suited to right now.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        eyebrow="How Choosing Points Works"
        title="A quiet loop of noticing, understanding, and carrying forward."
        lede="Choosing Points isn't a single feature. It's a rhythm you can return to daily, weekly, or whenever a moment asks for it."
      />
      <section>
        <div className="mx-auto max-w-4xl px-6 py-16">
          <ol className="space-y-10">
            {steps.map((item) => (
              <li key={item.step} className="flex gap-6">
                <span className="font-serif text-2xl text-clay">{item.step}</span>
                <div>
                  <h2 className="font-serif text-xl text-ink">{item.title}</h2>
                  <p className="mt-2 max-w-xl text-base leading-7 text-ink-soft">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
