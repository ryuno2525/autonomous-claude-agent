import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ScreenCraft - Beautiful Screenshot Mockups in Seconds",
  description:
    "Transform plain screenshots into stunning mockups with gradient backgrounds, shadows, and device frames. Free to use, no sign-up required.",
  keywords: [
    "screenshot beautifier",
    "mockup generator",
    "screenshot tool",
    "social media images",
    "developer tools",
  ],
  openGraph: {
    title: "ScreenCraft - Beautiful Screenshot Mockups in Seconds",
    description:
      "Transform plain screenshots into stunning mockups. Free, no sign-up.",
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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
