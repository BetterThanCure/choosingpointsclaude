import Link from "next/link";
import { DashboardCard } from "@/components/member/dashboard-card";

export default function TodayPage() {
  return (
    <div className="space-y-8">
      <div>
        <p className="font-serif text-sm uppercase tracking-[0.2em] text-clay">
          Today
        </p>
        <h1 className="mt-2 font-serif text-3xl text-ink">
          Good to see you.
        </h1>
        <p className="mt-2 max-w-lg text-sm leading-6 text-ink-soft">
          Here&apos;s a preview of what your Today view will bring together
          once you&apos;re signed in.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <DashboardCard title="Check in" sample>
          <p className="text-sm leading-6 text-ink-soft">
            You haven&apos;t checked in today.
          </p>
          <Link
            href="/dashboard/emotional-charting"
            className="mt-4 inline-block rounded-full bg-ink px-5 py-2 text-sm font-medium text-paper hover:bg-clay"
          >
            Start EmotionalCharting
          </Link>
        </DashboardCard>

        <DashboardCard title="This week's shape" sample>
          <div className="flex h-24 items-end gap-2">
            {[40, 65, 35, 80, 55, 70, 45].map((height, index) => (
              <div
                key={index}
                className="flex-1 rounded-t bg-sage/70"
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
        </DashboardCard>

        <DashboardCard title="Kéya" sample>
          <p className="text-sm leading-6 text-ink-soft italic font-serif">
            &ldquo;Whenever you&apos;re ready, I&apos;m here to talk through
            today.&rdquo;
          </p>
          <Link
            href="/dashboard/keya"
            className="mt-4 inline-block text-sm font-medium text-clay"
          >
            Open Kéya →
          </Link>
        </DashboardCard>

        <DashboardCard title="Recent journal entry" sample>
          <p className="text-sm leading-6 text-ink-soft">
            &ldquo;Noticed I said yes without thinking again today. Want to
            come back to that.&rdquo;
          </p>
          <Link
            href="/dashboard/journal"
            className="mt-4 inline-block text-sm font-medium text-clay"
          >
            Open journal →
          </Link>
        </DashboardCard>
      </div>
    </div>
  );
}
