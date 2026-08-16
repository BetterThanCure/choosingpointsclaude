export function DashboardCard({
  title,
  children,
  sample,
}: {
  title: string;
  children: React.ReactNode;
  sample?: boolean;
}) {
  return (
    <div className="rounded-2xl border border-line bg-paper-raised p-6">
      <div className="flex items-center justify-between">
        <h2 className="font-serif text-lg text-ink">{title}</h2>
        {sample ? (
          <span className="text-[11px] uppercase tracking-wide text-ink-faint">
            Sample data
          </span>
        ) : null}
      </div>
      <div className="mt-4">{children}</div>
    </div>
  );
}
