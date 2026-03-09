import type { Metadata } from "next";
import CheckClient from "./check-client";

function getGradeLabel(score: number): string {
  if (score >= 90) return "Excellent";
  if (score >= 70) return "Good";
  if (score >= 50) return "Fair";
  if (score >= 30) return "Poor";
  return "Critical";
}

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}): Promise<Metadata> {
  const params = await searchParams;
  const score = params.s ? parseInt(String(params.s)) : null;
  const domain = params.d ? decodeURIComponent(String(params.d)) : null;

  if (score !== null && !isNaN(score)) {
    const grade = getGradeLabel(score);
    const title = domain
      ? `${domain} Privacy Score: ${score}/100 (${grade}) | PolicyForge`
      : `Privacy Score: ${score}/100 (${grade}) | PolicyForge`;
    const description = domain
      ? `${domain} scored ${score}/100 on our privacy policy compliance check. See the full breakdown and check your own site free.`
      : `This privacy policy scored ${score}/100 on our compliance check. See the full breakdown and check your own policy free.`;

    const ogImageUrl = `https://policyforge-one.vercel.app/api/og?score=${score}&domain=${encodeURIComponent(domain || "Website")}`;

    return {
      title,
      description,
      openGraph: {
        title,
        description,
        type: "website",
        images: [
          {
            url: ogImageUrl,
            width: 1200,
            height: 630,
            alt: `Privacy Compliance Score: ${score}/100`,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [ogImageUrl],
      },
    };
  }

  return {
    title: "Privacy Policy Compliance Checker | PolicyForge",
    description:
      "Free privacy policy compliance checker. Scan any website or paste your policy text to check for GDPR, CCPA, and other essential sections. Instant results.",
    openGraph: {
      title: "Free Privacy Policy Compliance Checker | PolicyForge",
      description:
        "Scan any website to check privacy policy compliance. Free, unlimited, no signup.",
      type: "website",
    },
  };
}

export default function CheckPage() {
  return <CheckClient />;
}
