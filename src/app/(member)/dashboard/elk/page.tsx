import { DashboardCard } from "@/components/member/dashboard-card";

export default function MemberElkPage() {
  return (
    <div className="max-w-2xl space-y-8">
      <div>
        <p className="font-serif text-sm uppercase tracking-[0.2em] text-clay">
          Find Your ELK
        </p>
        <h1 className="mt-2 font-serif text-3xl text-ink">
          Suggested for you.
        </h1>
      </div>

      <DashboardCard title="Based on your recent entries" sample>
        <p className="text-sm leading-6 text-ink-soft">
          Once you have a few EmotionalCharting entries and journal notes,
          Kéya will suggest an Emotional Learning Kit here — matched to what
          you&apos;re actually navigating, not a generic quiz result.
        </p>
      </DashboardCard>
    </div>
  );
}
