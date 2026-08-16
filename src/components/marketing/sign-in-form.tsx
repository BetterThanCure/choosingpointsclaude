"use client";

import { useState, type FormEvent } from "react";

export function SignInForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitted">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitted");
  }

  if (status === "submitted") {
    return (
      <div className="rounded-2xl border border-line bg-sage-soft/60 p-8 text-center">
        <p className="font-serif text-lg text-ink">Almost there.</p>
        <p className="mt-2 text-sm leading-6 text-ink-soft">
          Sign-in for {email} is being connected as part of the next
          milestone. This preview confirms the flow works end to end.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-2xl border border-line bg-paper-raised p-8"
    >
      <div>
        <label
          htmlFor="email"
          className="text-[13px] font-medium text-ink-soft"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@example.com"
          className="mt-1.5 w-full rounded-lg border border-line bg-paper px-4 py-2.5 text-sm text-ink outline-none focus:border-clay"
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-clay"
      >
        Continue
      </button>
    </form>
  );
}
