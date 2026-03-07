import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Invoicely - Free Professional Invoice Generator | PDF Download",
  description:
    "Create professional invoices in minutes. Add line items, tax, discounts, and download as PDF. Free to start, no sign-up required.",
  keywords: [
    "invoice generator",
    "free invoice",
    "invoice maker",
    "invoice template",
    "pdf invoice",
    "freelance invoice",
    "business invoice",
    "invoice creator",
  ],
  openGraph: {
    title: "Invoicely - Professional Invoices in Minutes",
    description:
      "Create beautiful, professional invoices and download as PDF. Free to start.",
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
