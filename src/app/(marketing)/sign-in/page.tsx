import Link from "next/link";
import { SignInForm } from "@/components/marketing/sign-in-form";
import { PageHero } from "@/components/layout/page-hero";

export default function SignInPage() {
  return (
    <>
      <PageHero
        eyebrow="Sign in"
        title="Welcome back."
        lede="Sign in to pick up your EmotionalCharting streak, your journal, and your conversations with Kéya exactly where you left them."
      />
      <section>
        <div className="mx-auto max-w-md px-6 py-16">
          <SignInForm />
          <p className="mt-6 text-center text-sm text-ink-soft">
            New here?{" "}
            <Link href="/join" className="font-medium text-clay">
              Join Choosing Points
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
