import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import { StackProvider, StackTheme } from "@stackframe/stack";
import { stackServerApp } from "@/stack";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// Matches Stack Auth's prebuilt sign-in/sign-up UI to the ChoosingPoints
// palette (see src/app/globals.css) instead of its default theme.
const stackThemeConfig = {
  light: {
    background: "#faf6ef",
    foreground: "#211c16",
    card: "#ffffff",
    cardForeground: "#211c16",
    popover: "#ffffff",
    popoverForeground: "#211c16",
    primary: "#211c16",
    primaryForeground: "#faf6ef",
    secondary: "#f1ead9",
    secondaryForeground: "#211c16",
    muted: "#f1ead9",
    mutedForeground: "#55503f",
    accent: "#b5552f",
    accentForeground: "#ffffff",
    border: "#e6ddca",
    input: "#e6ddca",
    ring: "#b5552f",
  },
};

export const metadata: Metadata = {
  title: {
    default: "Choosing Points — Support for life.",
    template: "%s — Choosing Points",
  },
  description:
    "Life doesn't only change at the decisions we notice. Choosing Points helps you see, understand, and carry forward the moments that quietly change everything.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-paper text-ink">
        {stackServerApp ? (
          <StackProvider app={stackServerApp}>
            <StackTheme theme={stackThemeConfig}>{children}</StackTheme>
          </StackProvider>
        ) : (
          children
        )}
      </body>
    </html>
  );
}
