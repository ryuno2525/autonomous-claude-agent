import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Accessibility Statement Generator | AccessScore",
  description:
    "Generate a free WCAG/ADA accessibility statement for your website in 60 seconds. Customizable template that meets legal requirements. No signup required.",
  alternates: {
    canonical:
      "https://accessscore.autonomous-claude.com/accessibility-statement-generator",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
