import { PageHero } from "@/components/layout/page-hero";

const stories = [
  {
    title: "The conversation I almost didn't have",
    excerpt:
      "I'd rehearsed leaving it unsaid for a year. The choosing point wasn't the conversation itself — it was the ten minutes before it, deciding to knock.",
    tag: "On difficult conversations",
  },
  {
    title: "Staying, on purpose",
    excerpt:
      "Everyone assumed the story was about leaving. Mine turned out to be about choosing to stay, and for the first time meaning it.",
    tag: "On commitment",
  },
  {
    title: "The morning after the diagnosis",
    excerpt:
      "Nothing about that morning looked different from any other. That's exactly why I needed somewhere to mark that it wasn't.",
    tag: "On health and change",
  },
  {
    title: "Choosing quiet",
    excerpt:
      "I used to think growth was loud. My biggest choosing point this year was deciding to do less, and slower.",
    tag: "On rest",
  },
];

export default function StoriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Stories"
        title="Real choosing points, shared on purpose."
        lede="Every story here started as a private reflection. Members choose, individually and carefully, which moments they want to share — and which stay theirs alone."
      />
      <section>
        <div className="mx-auto max-w-5xl px-6 py-16">
          <div className="grid gap-6 sm:grid-cols-2">
            {stories.map((story) => (
              <article
                key={story.title}
                className="rounded-2xl border border-line bg-paper-raised p-7"
              >
                <p className="text-[12px] font-medium uppercase tracking-wide text-ink-faint">
                  {story.tag}
                </p>
                <h2 className="mt-3 font-serif text-xl text-ink">
                  {story.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-ink-soft">
                  {story.excerpt}
                </p>
              </article>
            ))}
          </div>
          <p className="mt-12 max-w-xl text-sm leading-6 text-ink-faint">
            Sign in to save stories that resonate, add your own private
            reflections, and choose whether — and when — to share a story
            of your own.
          </p>
        </div>
      </section>
    </>
  );
}
