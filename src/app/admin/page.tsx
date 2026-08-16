const stats = [
  { label: "Members", value: "—" },
  { label: "Check-ins this week", value: "—" },
  { label: "Stories submitted", value: "—" },
  { label: "Open feedback", value: "—" },
];

export default function AdminOverviewPage() {
  return (
    <div className="space-y-8">
      <div>
        <p className="font-serif text-sm uppercase tracking-[0.2em] text-paper/50">
          Overview
        </p>
        <h1 className="mt-2 font-serif text-3xl">Admin</h1>
        <p className="mt-2 max-w-lg text-sm leading-6 text-paper/60">
          Role-gated access and live metrics are being wired up in the
          Admin/CMS milestone. This is the architecture the rest of the
          console will be built into.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-paper/10 bg-paper/5 p-5"
          >
            <p className="text-[12px] uppercase tracking-wide text-paper/50">
              {stat.label}
            </p>
            <p className="mt-2 font-serif text-2xl">{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
