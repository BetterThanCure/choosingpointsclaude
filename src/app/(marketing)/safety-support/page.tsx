import { PageHero } from "@/components/layout/page-hero";

const resources = [
  {
    region: "United States",
    lines: [
      "988 Suicide & Crisis Lifeline — call or text 988",
      "Crisis Text Line — text HOME to 741741",
    ],
  },
  {
    region: "United Kingdom & Ireland",
    lines: ["Samaritans — call 116 123 (free, 24/7)"],
  },
  {
    region: "International",
    lines: [
      "findahelpline.com lists crisis lines by country",
      "If you are in immediate danger, contact your local emergency number",
    ],
  },
];

export default function SafetySupportPage() {
  return (
    <>
      <PageHero
        eyebrow="Safety & Support"
        title="If you're struggling right now, you don't need to wait for the app."
        lede="Choosing Points is a reflection tool, not a crisis service. If you or someone you know is in danger or crisis, please reach out to one of the resources below immediately."
      />
      <section>
        <div className="mx-auto max-w-3xl px-6 py-16">
          <div className="space-y-8">
            {resources.map((group) => (
              <div
                key={group.region}
                className="rounded-2xl border border-line bg-paper-raised p-7"
              >
                <h2 className="font-serif text-lg text-ink">{group.region}</h2>
                <ul className="mt-3 space-y-1.5 text-sm leading-6 text-ink-soft">
                  {group.lines.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 space-y-4 text-sm leading-6 text-ink-soft">
            <h2 className="font-serif text-lg text-ink">
              How Kéya handles safety
            </h2>
            <p>
              Kéya is designed to recognise language that suggests crisis or
              risk of harm, and to respond by directing you to real human
              support rather than attempting to handle it alone. This
              routing is a first-class part of the architecture, built and
              tested before any conversational feature ships.
            </p>
            <h2 className="font-serif text-lg text-ink">
              Protector network
            </h2>
            <p>
              Members can optionally connect trusted people — a Protector —
              who can be notified in specific, consented circumstances.
              Protector relationships are opt-in, permissioned, and fully
              visible to the member at every stage.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
