export type MemberNavLink = {
  label: string;
  href: string;
};

export const memberNav: MemberNavLink[] = [
  { label: "Today", href: "/dashboard" },
  { label: "EmotionalCharting", href: "/dashboard/emotional-charting" },
  { label: "Kéya", href: "/dashboard/keya" },
  { label: "Journal", href: "/dashboard/journal" },
  { label: "Stories", href: "/dashboard/stories" },
  { label: "Find Your ELK", href: "/dashboard/elk" },
  { label: "Resources", href: "/dashboard/resources" },
  { label: "Settings & Privacy", href: "/dashboard/settings" },
];
