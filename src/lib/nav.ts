export type NavLink = {
  label: string;
  href: string;
};

export const primaryNav: NavLink[] = [
  { label: "How It Works", href: "/how-it-works" },
  { label: "Stories", href: "/stories" },
  { label: "EmotionalCharting", href: "/emotional-charting" },
  { label: "Meet Kéya", href: "/keya" },
  { label: "Find Your ELK", href: "/elk" },
  { label: "Science", href: "/science" },
  { label: "Resources", href: "/resources" },
  { label: "Safety & Support", href: "/safety-support" },
  { label: "About", href: "/about" },
];

export const footerNav: { title: string; links: NavLink[] }[] = [
  {
    title: "Explore",
    links: [
      { label: "How ChoosingPoints Works", href: "/how-it-works" },
      { label: "Stories", href: "/stories" },
      { label: "EmotionalCharting", href: "/emotional-charting" },
      { label: "Find Your ELK", href: "/elk" },
    ],
  },
  {
    title: "Understand",
    links: [
      { label: "Meet Kéya", href: "/keya" },
      { label: "The Science", href: "/science" },
      { label: "Resources", href: "/resources" },
      { label: "About", href: "/about" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Safety & Support", href: "/safety-support" },
      { label: "Join", href: "/join" },
      { label: "Sign in", href: "/sign-in" },
    ],
  },
];
