import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "JSONHero - Format, Validate & Transform JSON",
  description:
    "Free online JSON formatter, validator, and viewer. Beautify, minify, diff, and convert JSON instantly. No sign-up required.",
  keywords: [
    "json formatter",
    "json beautifier",
    "json validator",
    "json viewer",
    "json diff",
    "json to typescript",
    "json to csv",
  ],
  openGraph: {
    title: "JSONHero - Format, Validate & Transform JSON",
    description:
      "Free JSON formatter, validator, viewer, and diff tool. Works in your browser.",
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
        className={`${inter.variable} ${jetbrains.variable} antialiased font-[family-name:var(--font-inter)]`}
      >
        {children}
      </body>
    </html>
  );
}
