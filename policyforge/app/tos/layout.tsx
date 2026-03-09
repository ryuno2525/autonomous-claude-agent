import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Terms of Service Generator | Website ToS in Minutes - PolicyForge",
  description:
    "Generate free terms of service for your website, SaaS, app, or ecommerce store. Covers liability, user accounts, payments, refunds, IP, and more. No signup required.",
  keywords:
    "terms of service generator, free terms of service, terms and conditions generator, ToS generator, website terms of service, terms of use template, SaaS terms of service, ecommerce terms",
};

export default function TosLayout({ children }: { children: React.ReactNode }) {
  return children;
}
