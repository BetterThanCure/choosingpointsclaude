import { DashboardCard } from "@/components/member/dashboard-card";

export default function MemberStoriesPage() {
  return (
    <div className="max-w-2xl space-y-8">
      <div>
        <p className="font-serif text-sm uppercase tracking-[0.2em] text-clay">
          Stories
        </p>
        <h1 className="mt-2 font-serif text-3xl text-ink">
          Saved and shared stories.
        </h1>
      </div>

      <DashboardCard title="Saved stories" sample>
        <p className="text-sm leading-6 text-ink-soft">
          Stories you save from the public collection will appear here,
          alongside your own reflections you choose to share.
        </p>
      </DashboardCard>
    </div>
  );
}
