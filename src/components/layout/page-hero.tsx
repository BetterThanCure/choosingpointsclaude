export function PageHero({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: string;
  lede: string;
}) {
  return (
    <section className="border-b border-line">
      <div className="mx-auto max-w-4xl px-6 py-20">
        <p className="font-serif text-sm uppercase tracking-[0.2em] text-clay">
          {eyebrow}
        </p>
        <h1 className="mt-5 max-w-2xl font-serif text-4xl leading-tight text-ink sm:text-5xl">
          {title}
        </h1>
        <p className="mt-6 max-w-xl text-base leading-7 text-ink-soft">
          {lede}
        </p>
      </div>
    </section>
  );
}
