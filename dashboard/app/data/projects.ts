export type ProjectStatus = "building" | "live" | "paused" | "killed" | "idea";

export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  status: ProjectStatus;
  url: string | null;
  repoUrl: string | null;
  pricing: string;
  techStack: string[];
  launchDate: string | null;
  revenue: number;
  metrics: { label: string; value: string }[];
  decisions: string[];
}

export const projects: Project[] = [
  {
    id: "screencraft",
    name: "ScreenCraft",
    tagline: "Beautiful screenshot mockups in seconds",
    description:
      "A web tool that transforms plain screenshots into professional mockups with gradient backgrounds, shadows, and rounded corners. 100% client-side, zero server cost. Free tier with 3 exports/day and watermark, Pro tier at $9.99 one-time for unlimited exports and no watermark.",
    status: "live",
    url: "https://screencraft-two.vercel.app",
    repoUrl: "https://github.com/ryuno2525/autonomous-claude-agent",
    pricing: "Free (3/day) / Pro $9.99 one-time",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Canvas API"],
    launchDate: "2026-03-06",
    revenue: 0,
    metrics: [
      { label: "Status", value: "LIVE - Stripe Checkout active" },
      { label: "Cost to run", value: "$0 (Vercel free tier)" },
      { label: "Time to build", value: "~1 hour" },
    ],
    decisions: [
      "Chose screenshot beautifier because it's 100% client-side (zero operating cost), has proven demand, and can ship in one session.",
      "Priced Pro at $9.99 one-time instead of subscription to minimize friction for first purchases.",
      "Stripe Checkout integrated - clicking Buy Pro redirects to real Stripe payment page.",
    ],
  },
  {
    id: "jsonhero",
    name: "JSONHero",
    tagline: "Format, validate & transform JSON",
    description:
      "A premium JSON formatter, validator, and editor. Free formatting, beautifying, and validation. Pro tier unlocks interactive tree view, JSON diff, and TypeScript/CSV conversion. 100% client-side, zero server cost.",
    status: "live",
    url: "https://jsonhero-cyan.vercel.app",
    repoUrl: "https://github.com/ryuno2525/autonomous-claude-agent",
    pricing: "Free (format/validate) / Pro $7.99 one-time",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    launchDate: "2026-03-06",
    revenue: 0,
    metrics: [
      { label: "Status", value: "LIVE - Stripe Checkout active" },
      { label: "Cost to run", value: "$0 (Vercel free tier)" },
      { label: "Time to build", value: "~30 minutes" },
    ],
    decisions: [
      "Chose JSON formatter because it targets the same developer audience as ScreenCraft, has massive search volume, and is 100% client-side.",
      "Priced Pro at $7.99 (lower than ScreenCraft) because formatting tools have more commodity competition.",
      "Gated tree view, diff, and conversions behind Pro -- these are the features power users actually want.",
      "Stripe Checkout integrated - clicking Buy Pro redirects to real Stripe payment page.",
    ],
  },
];

export const REVENUE_GOAL = 100_000;

export function getTotalRevenue(): number {
  return projects.reduce((sum, p) => sum + p.revenue, 0);
}

export function getProjectsByStatus(status: ProjectStatus): Project[] {
  return projects.filter((p) => p.status === status);
}
