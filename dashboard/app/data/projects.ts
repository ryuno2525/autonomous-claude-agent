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
  {
    id: "speedcv",
    name: "SpeedCV",
    tagline: "Professional resume builder with instant PDF export",
    description:
      "A resume builder targeting the mass market, not just developers. Fill in your info, pick a template, download a professional PDF. Free tier with 1 export/day and watermark. Pro unlocks 5 templates, unlimited exports, and no watermark.",
    status: "live",
    url: "https://speedcv-six.vercel.app",
    repoUrl: "https://github.com/ryuno2525/autonomous-claude-agent",
    pricing: "Free (1 export/day) / Pro $14.99 one-time",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "html2canvas", "jsPDF"],
    launchDate: "2026-03-06",
    revenue: 0,
    metrics: [
      { label: "Status", value: "LIVE - Stripe Checkout active" },
      { label: "Cost to run", value: "$0 (Vercel free tier)" },
      { label: "Time to build", value: "~45 minutes" },
    ],
    decisions: [
      "Diversified away from developer-only tools. Resume builders target a much wider audience with higher willingness to pay.",
      "Priced at $14.99 (highest yet) because job seekers have emotional urgency and clear ROI from a good resume.",
      "Free tier limited to 1 export/day (tighter than other products) to drive conversion - people need their resume NOW.",
      "Auto-saves resume data to localStorage so users don't lose work.",
    ],
  },
  {
    id: "invoicely",
    name: "Invoicely",
    tagline: "Professional invoice generator with PDF export",
    description:
      "An invoice generator targeting freelancers and small businesses. Add line items, tax, discounts, and download a professional PDF. Free tier with 2 exports/day and watermark. Pro unlocks unlimited exports and no watermark.",
    status: "live",
    url: "https://invoicely-eight.vercel.app",
    repoUrl: "https://github.com/ryuno2525/autonomous-claude-agent",
    pricing: "Free (2/day) / Pro $12.99 one-time",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "html2canvas", "jsPDF"],
    launchDate: "2026-03-06",
    revenue: 0,
    metrics: [
      { label: "Status", value: "LIVE - Stripe Checkout active" },
      { label: "Cost to run", value: "$0 (Vercel free tier)" },
      { label: "Time to build", value: "~30 minutes" },
    ],
    decisions: [
      "Targeted freelancers/contractors -- different market from dev tools, high willingness to pay (business expense).",
      "Priced at $12.99 -- business users see clear ROI from professional invoices.",
      "Free tier limited to 2/day with watermark. Freelancers sending real invoices will upgrade to remove the watermark.",
      "Multi-currency support (USD, EUR, GBP, JPY, CAD, AUD) to capture international users.",
      "Auto-saves invoice data to localStorage so users don't lose work between sessions.",
    ],
  },
  {
    id: "qrcraft",
    name: "QRCraft",
    tagline: "Beautiful QR codes in seconds",
    description:
      "A QR code generator supporting URLs, text, WiFi, email, and phone numbers. Custom foreground/background colors, error correction levels. Free tier with 5 downloads/day. Pro unlocks unlimited downloads and SVG export.",
    status: "live",
    url: "https://qrcraft-sigma.vercel.app",
    repoUrl: "https://github.com/ryuno2525/autonomous-claude-agent",
    pricing: "Free (5/day) / Pro $8.99 one-time",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "qrcode"],
    launchDate: "2026-03-06",
    revenue: 0,
    metrics: [
      { label: "Status", value: "LIVE - Stripe Checkout active" },
      { label: "Cost to run", value: "$0 (Vercel free tier)" },
      { label: "Time to build", value: "~25 minutes" },
    ],
    decisions: [
      "QR code generator has massive search volume -- one of the most searched-for free tools online.",
      "Priced at $8.99 -- low friction, impulse purchase for anyone who needs QR codes regularly.",
      "SVG export gated behind Pro -- businesses and designers need vector format for print.",
      "Multiple QR types (URL, WiFi, email, phone) increase utility and stickiness.",
      "Custom colors available to all users (drives engagement), download limits drive Pro conversion.",
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
