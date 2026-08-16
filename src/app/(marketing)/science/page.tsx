import { PageHero } from "@/components/layout/page-hero";

export default function SciencePage() {
  return (
    <>
      <PageHero
        eyebrow="Science"
        title="Evidence-informed, without pretending to be clinical."
        lede="Choosing Points draws on research in emotion regulation, narrative identity, and expressive writing — while staying honest about what it is and isn't."
      />
      <section>
        <div className="mx-auto max-w-3xl space-y-8 px-6 py-16 text-base leading-7 text-ink-soft">
          <div>
            <h2 className="font-serif text-xl text-ink">
              Naming a feeling changes it
            </h2>
            <p className="mt-2">
              Affect labelling research consistently shows that putting
              words to an emotion reduces its intensity and activity in the
              brain&apos;s threat-response circuitry. EmotionalCharting is built
              directly on this principle: naming first, understanding
              second.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-xl text-ink">
              Writing about turning points builds coherence
            </h2>
            <p className="mt-2">
              Narrative identity research links the ability to construct a
              coherent story from life&apos;s turning points to measurable gains
              in wellbeing and resilience. The ChoosingPoints journal exists
              to make that construction easier and more consistent.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-xl text-ink">
              What Choosing Points is not
            </h2>
            <p className="mt-2">
              Choosing Points is not a diagnostic tool, a replacement for
              therapy, or a crisis service. Kéya is designed to recognise
              when a situation calls for professional or emergency support
              and to route there directly — see{" "}
              <a href="/safety-support" className="underline underline-offset-2">
                Safety &amp; Support
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
