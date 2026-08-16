import { DashboardCard } from "@/components/member/dashboard-card";

export default function MemberKeyaPage() {
  return (
    <div className="max-w-2xl space-y-8">
      <div>
        <p className="font-serif text-sm uppercase tracking-[0.2em] text-clay">
          Kéya
        </p>
        <h1 className="mt-2 font-serif text-3xl text-ink">
          A conversation, when you&apos;re ready.
        </h1>
      </div>

      <DashboardCard title="Conversation" sample>
        <div className="space-y-3">
          <div className="max-w-sm rounded-2xl rounded-tl-sm bg-cream-dark px-4 py-3 text-sm text-ink">
            What&apos;s on your mind today?
          </div>
          <div className="ml-auto max-w-sm rounded-2xl rounded-tr-sm bg-sage-soft px-4 py-3 text-sm text-ink">
            I keep replaying a conversation from this morning.
          </div>
          <div className="max-w-sm rounded-2xl rounded-tl-sm bg-cream-dark px-4 py-3 text-sm text-ink">
            That sounds like it mattered. Want to tell me what was said, or
            just how it left you feeling?
          </div>
        </div>
        <p className="mt-5 text-xs leading-5 text-ink-faint">
          Live conversations, memory controls, and safety routing are
          arriving in the Kéya milestone. This preview reflects the intended
          tone and pacing.
        </p>
      </DashboardCard>
    </div>
  );
}
