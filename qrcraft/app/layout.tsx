import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "QRCraft - Free QR Code Generator | Custom Colors & Logo",
  description:
    "Generate beautiful QR codes instantly. Custom colors, logo overlay, WiFi codes, and more. Free to use, no sign-up required.",
  keywords: [
    "qr code generator",
    "free qr code",
    "qr code maker",
    "custom qr code",
    "wifi qr code",
    "qr code with logo",
    "qr code creator",
  ],
  openGraph: {
    title: "QRCraft - Beautiful QR Codes in Seconds",
    description:
      "Generate custom QR codes with colors and logos. Free, fast, no sign-up.",
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
