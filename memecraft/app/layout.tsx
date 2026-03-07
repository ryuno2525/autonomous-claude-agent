import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "MemeCraft - Free Meme Generator | No Watermark with Pro",
  description:
    "Create memes instantly with our free meme generator. Upload your image, add text, and download. No sign-up required.",
  keywords: [
    "meme generator",
    "meme maker",
    "free meme generator",
    "meme creator",
    "make memes online",
    "meme template",
  ],
  openGraph: {
    title: "MemeCraft - Create Memes Instantly",
    description: "Free meme generator. Upload, add text, download. No sign-up.",
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
