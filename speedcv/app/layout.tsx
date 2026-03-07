import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "SpeedCV - Professional Resume Builder | Free PDF Download",
  description:
    "Build a professional resume in minutes. Choose from beautiful templates, fill in your details, and download a polished PDF. Free to start, no sign-up required.",
  keywords: [
    "resume builder",
    "cv maker",
    "free resume",
    "professional resume",
    "resume template",
    "pdf resume",
    "resume generator",
  ],
  openGraph: {
    title: "SpeedCV - Professional Resume in Minutes",
    description:
      "Build a beautiful, professional resume and download as PDF. Free to start.",
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
      <body className={`${inter.variable} antialiased font-[family-name:var(--font-inter)]`}>
        {children}
      </body>
    </html>
  );
}
