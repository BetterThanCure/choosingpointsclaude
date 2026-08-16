import { StackHandler } from "@stackframe/stack";
import { stackServerApp } from "@/stack";

export default function Handler() {
  if (!stackServerApp) {
    return (
      <div className="mx-auto max-w-md px-6 py-24 text-center">
        <p className="font-serif text-sm uppercase tracking-[0.2em] text-clay">
          Sign in
        </p>
        <h1 className="mt-3 font-serif text-2xl text-ink">
          Almost there.
        </h1>
        <p className="mt-3 text-sm leading-6 text-ink-soft">
          Sign-in is being connected. Check back shortly.
        </p>
      </div>
    );
  }

  return <StackHandler fullPage app={stackServerApp} />;
}
