import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CardCraft - Beautiful Testimonial Cards for Social Media",
  description:
    "Turn client testimonials into stunning shareable cards. Perfect for freelancers, agencies, and creators. Free to use, Pro removes watermark.",
  keywords:
    "testimonial card generator, social proof cards, client review images, testimonial design, freelancer tools, review card maker",
  openGraph: {
    title: "CardCraft - Beautiful Testimonial Cards",
    description:
      "Turn client testimonials into stunning shareable cards for social media.",
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
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
