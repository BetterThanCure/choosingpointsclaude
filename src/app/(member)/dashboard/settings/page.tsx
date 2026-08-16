import { DashboardCard } from "@/components/member/dashboard-card";

const privacyItems = [
  { title: "Data export", description: "Download everything you've written, at any time." },
  { title: "Delete account", description: "Permanently remove your data. This cannot be undone." },
  { title: "Protector permissions", description: "Manage who can be notified, and under what circumstances." },
  { title: "Kéya's memory", description: "Review or clear what Kéya remembers about you." },
];

export default function MemberSettingsPage() {
  return (
    <div className="max-w-2xl space-y-8">
      <div>
        <p className="font-serif text-sm uppercase tracking-[0.2em] text-clay">
          Settings & Privacy
        </p>
        <h1 className="mt-2 font-serif text-3xl text-ink">
          You control your data, fully.
        </h1>
      </div>

      <DashboardCard title="Privacy controls">
        <div className="space-y-4">
          {privacyItems.map((item) => (
            <div key={item.title} className="flex items-center justify-between gap-4 border-b border-line pb-4 last:border-0 last:pb-0">
              <div>
                <p className="text-sm font-medium text-ink">{item.title}</p>
                <p className="mt-0.5 text-sm text-ink-soft">{item.description}</p>
              </div>
              <span className="whitespace-nowrap rounded-full border border-line px-3 py-1.5 text-xs text-ink-faint">
                Coming soon
              </span>
            </div>
          ))}
        </div>
      </DashboardCard>
    </div>
  );
}
