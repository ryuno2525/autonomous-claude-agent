import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PairScore - Couple & Friend Compatibility Quiz",
  description:
    "Take the compatibility quiz with your partner or best friend. Get a beautiful shareable score card. Free, fun, and surprisingly accurate.",
  keywords:
    "compatibility quiz, couple compatibility test, friend compatibility, relationship quiz, love compatibility, partner quiz",
  openGraph: {
    title: "PairScore - How Compatible Are You?",
    description:
      "Take the compatibility quiz and get a shareable score card. Free and fun!",
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
      <body className={`${inter.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
