import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "FreelanceKit - Everything a Freelancer Needs | Resume, Invoice & Proposal Tools",
  description:
    "The ultimate freelancer toolkit. Build professional resumes, generate invoices, and create winning proposals. One payment, lifetime access. Save 14% vs buying separately.",
  keywords: [
    "freelancer tools",
    "freelance toolkit",
    "invoice generator freelancers",
    "freelance resume builder",
    "freelance proposal generator",
    "freelance business tools",
    "self-employed tools",
    "freelancer starter kit",
    "independent contractor tools",
    "freelance productivity",
  ],
  openGraph: {
    title: "FreelanceKit - Everything a Freelancer Needs",
    description:
      "Professional resume builder + invoice generator + proposal creator. One payment. Forever. Save 14% with the bundle.",
    type: "website",
    url: "https://freelancekit.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "FreelanceKit - The Complete Freelancer Toolkit",
    description:
      "Build resumes, generate invoices, create proposals. One payment. Lifetime access.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://freelancekit.vercel.app" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
