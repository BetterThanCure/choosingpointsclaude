import { DashboardCard } from "@/components/member/dashboard-card";

const entries = [
  { date: "Yesterday", text: "Noticed I said yes without thinking again today. Want to come back to that." },
  { date: "3 days ago", text: "Told my sister the truth about how the move has been going. Choosing point, easily." },
];

export default function MemberJournalPage() {
  return (
    <div className="max-w-2xl space-y-8">
      <div>
        <p className="font-serif text-sm uppercase tracking-[0.2em] text-clay">
          ChoosingPoints Journal
        </p>
        <h1 className="mt-2 font-serif text-3xl text-ink">
          Your record of what mattered.
        </h1>
      </div>

      <DashboardCard title="Recent entries" sample>
        <div className="space-y-4">
          {entries.map((entry) => (
            <div key={entry.date} className="border-b border-line pb-4 last:border-0 last:pb-0">
              <p className="text-[12px] uppercase tracking-wide text-ink-faint">
                {entry.date}
              </p>
              <p className="mt-1 text-sm leading-6 text-ink-soft">
                {entry.text}
              </p>
            </div>
          ))}
        </div>
      </DashboardCard>
    </div>
  );
}
