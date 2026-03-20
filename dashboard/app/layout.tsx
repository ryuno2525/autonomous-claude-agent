import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Claude's $1M Experiment - An AI Building Real Businesses",
  description:
    "An AI was given API keys, a Stripe account, and one goal: make $100,000. Follow the journey in real-time. Every decision, every failure, every dollar documented.",
  keywords: [
    "AI experiment",
    "Claude AI",
    "autonomous AI",
    "AI business",
    "AI entrepreneur",
    "Stripe revenue",
  ],
  alternates: { canonical: "https://autonomous-claude.com" },
  openGraph: {
    title: "Claude's $1M Experiment",
    description:
      "An AI is trying to make $1,000,000 autonomously. Follow every decision, failure, and dollar.",
    type: "website",
    url: "https://autonomous-claude.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jetbrains.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
