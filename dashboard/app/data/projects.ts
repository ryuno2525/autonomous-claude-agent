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
  {
    id: "memecraft",
    name: "MemeCraft",
    tagline: "Create memes instantly, no sign-up",
    description:
      "A meme generator with canvas-based text overlay. Upload any image, add top/bottom text with customizable fonts, colors, and stroke. Free tier includes watermark and 3 downloads/day. Pro removes watermark and unlocks unlimited downloads.",
    status: "live",
    url: "https://memecraft-gamma.vercel.app",
    repoUrl: "https://github.com/ryuno2525/autonomous-claude-agent",
    pricing: "Free (3/day + watermark) / Pro $6.99 one-time",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Canvas API"],
    launchDate: "2026-03-06",
    revenue: 0,
    metrics: [
      { label: "Status", value: "LIVE - Stripe Checkout active" },
      { label: "Cost to run", value: "$0 (Vercel free tier)" },
      { label: "Time to build", value: "~20 minutes" },
    ],
    decisions: [
      "Memes have viral potential -- every meme shared with watermark is free advertising.",
      "Lowest price point ($6.99) to maximize impulse purchases from the broadest possible audience.",
      "Canvas-based rendering means zero server cost and instant preview.",
      "Watermark is the key conversion driver -- users who share memes professionally will pay to remove it.",
    ],
  },
  {
    id: "proposalforge",
    name: "ProposalForge",
    tagline: "Win more clients with professional proposals",
    description:
      "A business proposal generator for freelancers and agencies. Cover page, executive summary, scope, timeline, pricing table, terms, and signature blocks. PDF export with professional formatting. Highest-ticket product at $29.99.",
    status: "live",
    url: "https://proposalforge-zeta.vercel.app",
    repoUrl: "https://github.com/ryuno2525/autonomous-claude-agent",
    pricing: "Free (1/day + watermark) / Pro $29.99 one-time",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "html2canvas", "jsPDF"],
    launchDate: "2026-03-06",
    revenue: 0,
    metrics: [
      { label: "Status", value: "LIVE - Stripe Checkout active" },
      { label: "Cost to run", value: "$0 (Vercel free tier)" },
      { label: "Time to build", value: "~30 minutes" },
    ],
    decisions: [
      "Highest price point ($29.99) targets business users who see clear ROI -- a $30 tool to win $10K+ contracts.",
      "Free tier limited to 1 export/day with watermark to maximize conversion pressure.",
      "Includes signature blocks to make proposals legally actionable -- a feature users can't skip.",
      "Cross-sells perfectly with Invoicely -- same freelancer audience, different stage of the client lifecycle.",
    ],
  },
  {
    id: "freelancekit",
    name: "FreelanceKit",
    tagline: "The complete freelancer toolkit — resume, invoices & proposals",
    description:
      "A bundle product combining SpeedCV, Invoicely, and ProposalForge into one discounted package. One payment of $49.99 gives lifetime Pro access to all three tools ($57.97 value). Targets freelancers who need the full workflow: land gigs, do the work, get paid.",
    status: "live",
    url: "https://freelancekit.vercel.app",
    repoUrl: "https://github.com/ryuno2525/autonomous-claude-agent",
    pricing: "Bundle $49.99 one-time (save 14%)",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe Checkout"],
    launchDate: "2026-03-07",
    revenue: 0,
    metrics: [
      { label: "Status", value: "LIVE - Stripe Checkout active" },
      { label: "Cost to run", value: "$0 (Vercel free tier)" },
      { label: "Bundle value", value: "$57.97 -> $49.99 (14% off)" },
    ],
    decisions: [
      "Bundle strategy: combine 3 complementary freelancer tools at a discount to increase average order value.",
      "Priced at $49.99 vs $57.97 separate -- enough discount to feel like a deal, high enough to be the highest-revenue product per sale.",
      "Success page links directly to each tool's /success page to unlock Pro access across all three.",
      "Compelling landing page with comparison table, testimonials, FAQ, and multiple CTAs.",
    ],
  },
  {
    id: "cardcraft",
    name: "CardCraft",
    tagline: "Beautiful testimonial cards for social media",
    description:
      "A testimonial card generator that turns client reviews into stunning shareable images. 6 gradient themes, star ratings, Canvas-based rendering. Free tier: 3 downloads/day with watermark. Pro: unlimited, no watermark. Built-in viral distribution: every card shared on social media = free advertising.",
    status: "live",
    url: "https://cardcraft-beige.vercel.app",
    repoUrl: "https://github.com/ryuno2525/autonomous-claude-agent",
    pricing: "Free (3/day + watermark) / Pro $9.99 one-time",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Canvas API"],
    launchDate: "2026-03-07",
    revenue: 0,
    metrics: [
      { label: "Status", value: "LIVE - Stripe Checkout active" },
      { label: "Cost to run", value: "$0 (Vercel free tier)" },
      { label: "Time to build", value: "~30 minutes" },
    ],
    decisions: [
      "Built for viral distribution: every card shared on social media displays 'Made with CardCraft' watermark.",
      "Targets freelancers who need to share client testimonials as professional images.",
      "Cross-sells with FreelanceKit, ProposalForge, and Invoicely — same audience.",
      "Canvas-based rendering means zero server cost and instant preview.",
    ],
  },
  {
    id: "policyforge",
    name: "PolicyForge",
    tagline: "Free privacy policy generator, GDPR & CCPA compliant",
    description:
      "A privacy policy generator targeting the massive search volume for 'privacy policy generator'. Users fill in their business details, select what data they collect, and get a professional privacy policy. Free tier is basic; Pro adds GDPR/CCPA rights sections, data retention, security clauses, and removes branding.",
    status: "live",
    url: "https://policyforge-one.vercel.app",
    repoUrl: "https://github.com/ryuno2525/autonomous-claude-agent",
    pricing: "Free (2/day) / Pro $12.99 one-time",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    launchDate: "2026-03-07",
    revenue: 0,
    metrics: [
      { label: "Status", value: "LIVE - Stripe Checkout active" },
      { label: "Cost to run", value: "$0 (Vercel free tier)" },
      { label: "Time to build", value: "~25 minutes" },
    ],
    decisions: [
      "Targets 'privacy policy generator' — massive search volume, high intent (people NEED this for legal compliance).",
      "GDPR/CCPA requirements mean every website needs a privacy policy — it's a need, not a want.",
      "Pro adds real legal value: GDPR rights sections, CCPA disclosures, data retention, security clauses.",
      "Free tier includes 'Generated by PolicyForge' branding — every published policy = free SEO backlink.",
    ],
  },
  {
    id: "pairscore",
    name: "PairScore",
    tagline: "Couple & friend compatibility quiz with shareable cards",
    description:
      "A viral compatibility quiz where two people answer 12 questions across 6 dimensions (Communication, Social Energy, Values, Lifestyle, Emotional Style, Growth). Generates a beautiful 1080x1080 shareable score card with Canvas rendering. Built for viral distribution — every shared card has a 'Made with PairScore' watermark.",
    status: "live",
    url: "https://pairscore.vercel.app",
    repoUrl: "https://github.com/ryuno2525/autonomous-claude-agent",
    pricing: "Free (watermark) / Pro $4.99 one-time",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Canvas API"],
    launchDate: "2026-03-07",
    revenue: 0,
    metrics: [
      { label: "Status", value: "LIVE - Stripe Checkout active" },
      { label: "Cost to run", value: "$0 (Vercel free tier)" },
      { label: "Time to build", value: "~30 minutes" },
    ],
    decisions: [
      "Built for viral distribution: every shared compatibility card = free advertising via watermark.",
      "Inspired by Spotify Wrapped virality — people love sharing personality/compatibility results.",
      "Lowest price point ($4.99) to maximize impulse purchases — removing watermark is the only Pro feature.",
      "12 questions across 6 dimensions gives enough depth to feel meaningful without quiz fatigue.",
      "Canvas-based 1080x1080 cards optimized for Instagram/TikTok sharing.",
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
