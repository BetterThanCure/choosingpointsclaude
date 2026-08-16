import Link from "next/link";

const steps = [
  { title: "Tell us a little about right now", description: "A couple of questions about what season of life you're in — nothing that requires a diagnosis or a label." },
  { title: "Try your first check-in", description: "One EmotionalCharting entry, so you can feel how quick and low-pressure it is." },
  { title: "Say hello to Kéya", description: "A short, guided first conversation to set expectations and boundaries." },
];

export default function OnboardingPage() {
  return (
    <div className="max-w-2xl">
      <p className="font-serif text-sm uppercase tracking-[0.2em] text-clay">
        Welcome
      </p>
      <h1 className="mt-3 font-serif text-3xl text-ink">
        Let&apos;s set up your Choosing Points space.
      </h1>
      <p className="mt-4 text-base leading-7 text-ink-soft">
        This takes about three minutes. Nothing here is permanent — you can
        change any of it later in Settings &amp; Privacy.
      </p>

      <ol className="mt-10 space-y-6">
        {steps.map((step, index) => (
          <li key={step.title} className="flex gap-4 rounded-2xl border border-line bg-paper-raised p-5">
            <span className="font-serif text-xl text-clay">{index + 1}</span>
            <div>
              <h2 className="font-serif text-lg text-ink">{step.title}</h2>
              <p className="mt-1 text-sm leading-6 text-ink-soft">
                {step.description}
              </p>
            </div>
          </li>
        ))}
      </ol>

      <Link
        href="/dashboard"
        className="mt-10 inline-block rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-clay"
      >
        Go to my dashboard
      </Link>
    </div>
  );
}
