import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "ProposalForge - Professional Business Proposal Generator | PDF",
  description:
    "Create winning business proposals in minutes. Professional templates, pricing tables, and PDF export. Free to start, no sign-up required.",
  keywords: [
    "proposal generator",
    "business proposal",
    "proposal template",
    "free proposal maker",
    "project proposal",
    "client proposal",
    "freelance proposal",
    "proposal pdf",
  ],
  openGraph: {
    title: "ProposalForge - Win More Clients with Professional Proposals",
    description:
      "Create beautiful business proposals and download as PDF. Free to start.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased font-[family-name:var(--font-inter)]`}
      >
        {children}
      </body>
    </html>
  );
}
