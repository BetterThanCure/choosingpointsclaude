"use client";

import { useState } from "react";
import { DashboardCard } from "@/components/member/dashboard-card";

const feelings = ["Calm", "Uneasy", "Hopeful", "Tender", "Frustrated", "Steady"];

export default function MemberEmotionalChartingPage() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="max-w-2xl space-y-8">
      <div>
        <p className="font-serif text-sm uppercase tracking-[0.2em] text-clay">
          EmotionalCharting
        </p>
        <h1 className="mt-2 font-serif text-3xl text-ink">
          How are you, right now?
        </h1>
      </div>

      <DashboardCard title="Today's check-in">
        <div className="flex flex-wrap gap-2">
          {feelings.map((feeling) => (
            <button
              key={feeling}
              onClick={() => setSelected(feeling)}
              className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                selected === feeling
                  ? "border-clay bg-clay-soft text-ink"
                  : "border-line text-ink-soft hover:border-ink"
              }`}
            >
              {feeling}
            </button>
          ))}
        </div>
        {selected ? (
          <p className="mt-5 text-sm leading-6 text-ink-soft">
            Noted — <span className="font-medium text-ink">{selected}</span>.
            Full check-ins with intensity, notes, and history land with
            member accounts in the next milestone.
          </p>
        ) : null}
      </DashboardCard>

      <DashboardCard title="History" sample>
        <div className="flex h-32 items-end gap-2">
          {[30, 55, 40, 75, 60, 45, 65, 50, 80, 35, 60, 70].map((height, index) => (
            <div
              key={index}
              className="flex-1 rounded-t bg-sage/60"
              style={{ height: `${height}%` }}
            />
          ))}
        </div>
      </DashboardCard>
    </div>
  );
}
