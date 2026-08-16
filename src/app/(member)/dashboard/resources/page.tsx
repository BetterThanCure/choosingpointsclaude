import { DashboardCard } from "@/components/member/dashboard-card";

export default function MemberResourcesPage() {
  return (
    <div className="max-w-2xl space-y-8">
      <div>
        <p className="font-serif text-sm uppercase tracking-[0.2em] text-clay">
          Resources
        </p>
        <h1 className="mt-2 font-serif text-3xl text-ink">
          Saved for later.
        </h1>
      </div>

      <DashboardCard title="Your library" sample>
        <p className="text-sm leading-6 text-ink-soft">
          Resources you bookmark from the public library will be organised
          here by the ELK or theme they relate to.
        </p>
      </DashboardCard>
    </div>
  );
}
