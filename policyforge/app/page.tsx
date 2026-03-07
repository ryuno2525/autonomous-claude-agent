"use client";

import { useState, useEffect, useRef } from "react";

interface FormData {
  companyName: string;
  websiteUrl: string;
  contactEmail: string;
  country: string;
  collectsPersonalData: boolean;
  collectsAnalytics: boolean;
  usesCookies: boolean;
  hasUserAccounts: boolean;
  collectsPayment: boolean;
  sellsData: boolean;
  childrenUnder13: boolean;
  effectiveDate: string;
}

const DEFAULT: FormData = {
  companyName: "",
  websiteUrl: "",
  contactEmail: "",
  country: "US",
  collectsPersonalData: true,
  collectsAnalytics: true,
  usesCookies: true,
  hasUserAccounts: false,
  collectsPayment: false,
  sellsData: false,
  childrenUnder13: false,
  effectiveDate: new Date().toISOString().slice(0, 10),
};

function isPro(): boolean {
  if (typeof window === "undefined") return false;
  return localStorage.getItem("policyforge_pro") === "true";
}

function getGenerationsToday(): number {
  if (typeof window === "undefined") return 0;
  const key = `policyforge_gen_${new Date().toISOString().slice(0, 10)}`;
  return parseInt(localStorage.getItem(key) || "0", 10);
}

function incrementGenerations(): void {
  const key = `policyforge_gen_${new Date().toISOString().slice(0, 10)}`;
  const current = parseInt(localStorage.getItem(key) || "0", 10);
  localStorage.setItem(key, String(current + 1));
}

function generatePolicy(data: FormData, pro: boolean): string {
  const lines: string[] = [];
  const cn = data.companyName || "[Your Company]";
  const url = data.websiteUrl || "[your-website.com]";
  const email = data.contactEmail || "[your-email@example.com]";

  lines.push(`PRIVACY POLICY`);
  lines.push(`Effective Date: ${data.effectiveDate}`);
  lines.push(``);
  lines.push(`${cn} ("we", "us", or "our") operates ${url} (the "Website"). This Privacy Policy explains how we collect, use, disclose, and protect your information when you visit our Website.`);
  lines.push(``);
  lines.push(`1. INFORMATION WE COLLECT`);
  lines.push(``);

  if (data.collectsPersonalData) {
    lines.push(`Personal Information: We may collect personally identifiable information that you voluntarily provide, including but not limited to your name, email address, and contact details.`);
    lines.push(``);
  }

  if (data.hasUserAccounts) {
    lines.push(`Account Information: When you create an account, we collect your username, email address, and password (stored in encrypted form).`);
    lines.push(``);
  }

  if (data.collectsPayment) {
    lines.push(`Payment Information: When you make a purchase, payment information is processed by our third-party payment processor (e.g., Stripe). We do not store your full credit card number on our servers.`);
    lines.push(``);
  }

  if (data.collectsAnalytics) {
    lines.push(`Usage Data: We automatically collect certain information when you visit our Website, including your IP address, browser type, operating system, referring URLs, pages viewed, and the dates/times of your visits.`);
    lines.push(``);
  }

  lines.push(`2. HOW WE USE YOUR INFORMATION`);
  lines.push(``);
  lines.push(`We use the information we collect to:`);
  lines.push(`- Provide, maintain, and improve our Website and services`);
  lines.push(`- Respond to your inquiries and provide customer support`);
  if (data.collectsAnalytics) lines.push(`- Analyze usage patterns to improve user experience`);
  if (data.hasUserAccounts) lines.push(`- Manage your account and provide account-related services`);
  if (data.collectsPayment) lines.push(`- Process transactions and send related information`);
  lines.push(`- Comply with legal obligations`);
  lines.push(``);

  if (data.usesCookies) {
    lines.push(`3. COOKIES AND TRACKING TECHNOLOGIES`);
    lines.push(``);
    lines.push(`We use cookies and similar tracking technologies to track activity on our Website. Cookies are small data files placed on your device. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, some portions of our Website may not function properly.`);
    lines.push(``);
    if (pro) {
      lines.push(`Types of cookies we use:`);
      lines.push(`- Essential cookies: Required for the Website to function properly`);
      lines.push(`- Analytics cookies: Help us understand how visitors interact with our Website`);
      lines.push(`- Preference cookies: Remember your settings and preferences`);
      lines.push(``);
    }
  }

  const sectionNum = data.usesCookies ? 4 : 3;

  lines.push(`${sectionNum}. DATA SHARING AND DISCLOSURE`);
  lines.push(``);
  lines.push(`We do not sell your personal information${data.sellsData ? ", except as described below" : ""}. We may share your information with:`);
  lines.push(`- Service providers who assist in operating our Website`);
  lines.push(`- Law enforcement or government agencies when required by law`);
  lines.push(`- Other parties in connection with a merger, acquisition, or sale of assets`);
  lines.push(``);

  if (pro) {
    lines.push(`${sectionNum + 1}. DATA RETENTION`);
    lines.push(``);
    lines.push(`We retain your personal information only for as long as necessary to fulfill the purposes described in this Privacy Policy, unless a longer retention period is required or permitted by law.`);
    lines.push(``);

    lines.push(`${sectionNum + 2}. DATA SECURITY`);
    lines.push(``);
    lines.push(`We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.`);
    lines.push(``);

    if (data.country === "US" || data.country === "EU") {
      lines.push(`${sectionNum + 3}. YOUR RIGHTS`);
      lines.push(``);

      if (data.country === "EU") {
        lines.push(`Under the General Data Protection Regulation (GDPR), you have the following rights:`);
        lines.push(`- Right of access: You can request a copy of your personal data`);
        lines.push(`- Right to rectification: You can request correction of inaccurate data`);
        lines.push(`- Right to erasure: You can request deletion of your personal data`);
        lines.push(`- Right to restrict processing: You can request limitation of processing`);
        lines.push(`- Right to data portability: You can request transfer of your data`);
        lines.push(`- Right to object: You can object to processing of your data`);
        lines.push(``);
        lines.push(`To exercise these rights, contact us at ${email}.`);
      } else {
        lines.push(`Depending on your jurisdiction, you may have the following rights:`);
        lines.push(`- Right to know what personal information we collect about you`);
        lines.push(`- Right to request deletion of your personal information`);
        lines.push(`- Right to opt-out of the sale of your personal information`);
        lines.push(`- Right to non-discrimination for exercising your privacy rights`);
        lines.push(``);
        lines.push(`California residents: Under the California Consumer Privacy Act (CCPA), you have additional rights regarding your personal information. To exercise these rights, contact us at ${email}.`);
      }
      lines.push(``);
    }

    if (data.childrenUnder13) {
      lines.push(`CHILDREN'S PRIVACY`);
      lines.push(``);
      lines.push(`Our Website is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If we learn we have collected personal information from a child under 13, we will promptly delete that information.`);
      lines.push(``);
    }
  }

  const lastSection = pro ? sectionNum + 4 : sectionNum + 1;

  lines.push(`${lastSection}. CHANGES TO THIS PRIVACY POLICY`);
  lines.push(``);
  lines.push(`We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Effective Date" at the top.`);
  lines.push(``);

  lines.push(`${lastSection + 1}. CONTACT US`);
  lines.push(``);
  lines.push(`If you have questions about this Privacy Policy, please contact us at:`);
  lines.push(`${cn}`);
  lines.push(`Email: ${email}`);
  lines.push(`Website: ${url}`);

  if (!pro) {
    lines.push(``);
    lines.push(`---`);
    lines.push(`Generated by PolicyForge (policyforge.vercel.app)`);
  }

  return lines.join("\n");
}

export default function Home() {
  const [form, setForm] = useState<FormData>(DEFAULT);
  const [policy, setPolicy] = useState("");
  const [pro, setPro] = useState(false);
  const [gensToday, setGensToday] = useState(0);
  const [buying, setBuying] = useState(false);
  const [copied, setCopied] = useState(false);
  const textRef = useRef<HTMLTextAreaElement>(null);

  const FREE_LIMIT = 2;

  useEffect(() => {
    setPro(isPro());
    setGensToday(getGenerationsToday());
  }, []);

  const update = (key: keyof FormData, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleGenerate = () => {
    if (!pro && gensToday >= FREE_LIMIT) {
      alert(
        `Free tier: ${FREE_LIMIT} generations per day. Upgrade to Pro for unlimited generations, GDPR/CCPA sections, data retention, security, and more!`
      );
      return;
    }
    const result = generatePolicy(form, pro);
    setPolicy(result);
    if (!pro) {
      incrementGenerations();
      setGensToday(getGenerationsToday());
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(policy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([policy], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "privacy-policy.txt";
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleBuyPro = async () => {
    setBuying(true);
    try {
      const res = await fetch("/api/checkout", { method: "POST" });
      const data = await res.json();
      if (data.url) window.location.href = data.url;
      else alert("Checkout error: " + (data.error || "Unknown error"));
    } catch {
      alert("Failed to start checkout.");
    } finally {
      setBuying(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0f0f0f]">
      <header className="border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-sm">
              P
            </div>
            <span className="text-white font-semibold text-lg">
              PolicyForge
            </span>
            {pro && (
              <span className="ml-2 px-2 py-0.5 bg-amber-500/20 text-amber-400 text-xs font-medium rounded-full">
                PRO
              </span>
            )}
          </div>
          {!pro && (
            <button
              onClick={handleBuyPro}
              disabled={buying}
              className="px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-medium rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {buying ? "Loading..." : "Upgrade to Pro - $12.99"}
            </button>
          )}
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Free Privacy Policy Generator
          </h1>
          <p className="text-gray-400 text-lg">
            Generate a professional, GDPR/CCPA-ready privacy policy in minutes.
            No signup required.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form */}
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Company / Website Name *
              </label>
              <input
                type="text"
                value={form.companyName}
                onChange={(e) => update("companyName", e.target.value)}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Acme Inc."
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Website URL *
                </label>
                <input
                  type="text"
                  value={form.websiteUrl}
                  onChange={(e) => update("websiteUrl", e.target.value)}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="https://example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Contact Email *
                </label>
                <input
                  type="email"
                  value={form.contactEmail}
                  onChange={(e) => update("contactEmail", e.target.value)}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="privacy@example.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Primary Jurisdiction
                </label>
                <select
                  value={form.country}
                  onChange={(e) => update("country", e.target.value)}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="US" className="bg-gray-800">
                    United States (CCPA)
                  </option>
                  <option value="EU" className="bg-gray-800">
                    European Union (GDPR)
                  </option>
                  <option value="OTHER" className="bg-gray-800">
                    Other
                  </option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Effective Date
                </label>
                <input
                  type="date"
                  value={form.effectiveDate}
                  onChange={(e) => update("effectiveDate", e.target.value)}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                What does your website do?
              </label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  {
                    key: "collectsPersonalData" as const,
                    label: "Collects personal data",
                  },
                  {
                    key: "collectsAnalytics" as const,
                    label: "Uses analytics",
                  },
                  { key: "usesCookies" as const, label: "Uses cookies" },
                  {
                    key: "hasUserAccounts" as const,
                    label: "Has user accounts",
                  },
                  {
                    key: "collectsPayment" as const,
                    label: "Processes payments",
                  },
                  {
                    key: "childrenUnder13" as const,
                    label: "May have users under 13",
                  },
                ].map(({ key, label }) => (
                  <label
                    key={key}
                    className="flex items-center gap-2 text-sm text-gray-300 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={form[key] as boolean}
                      onChange={(e) => update(key, e.target.checked)}
                      className="rounded border-white/20 bg-white/5 text-blue-500 focus:ring-blue-500"
                    />
                    {label}
                  </label>
                ))}
              </div>
            </div>

            <button
              onClick={handleGenerate}
              className="w-full px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Generate Privacy Policy
            </button>

            {!pro && (
              <p className="text-sm text-gray-500 text-center">
                {FREE_LIMIT - gensToday} / {FREE_LIMIT} free generations today
              </p>
            )}

            {!pro && (
              <div className="p-4 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-lg">
                <p className="text-sm text-gray-300">
                  <strong className="text-white">
                    Pro ($12.99 one-time):
                  </strong>{" "}
                  GDPR/CCPA rights sections, data retention, security clauses,
                  cookie details, no branding, unlimited generations.
                </p>
                <button
                  onClick={handleBuyPro}
                  disabled={buying}
                  className="mt-2 text-sm text-blue-400 hover:text-blue-300 font-medium"
                >
                  Upgrade now &rarr;
                </button>
              </div>
            )}
          </div>

          {/* Output */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-medium text-gray-300">
                Your Privacy Policy
              </label>
              {policy && (
                <div className="flex gap-2">
                  <button
                    onClick={handleCopy}
                    className="px-3 py-1 text-xs bg-white/10 text-gray-300 rounded hover:bg-white/20 transition-colors"
                  >
                    {copied ? "Copied!" : "Copy"}
                  </button>
                  <button
                    onClick={handleDownload}
                    className="px-3 py-1 text-xs bg-white/10 text-gray-300 rounded hover:bg-white/20 transition-colors"
                  >
                    Download .txt
                  </button>
                </div>
              )}
            </div>
            <textarea
              ref={textRef}
              value={policy}
              readOnly
              rows={30}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-gray-300 text-sm font-mono resize-none focus:outline-none"
              placeholder="Fill in the form and click Generate to create your privacy policy..."
            />
          </div>
        </div>

        {/* SEO */}
        <div className="mt-16 border-t border-white/10 pt-12">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-2xl font-bold text-white">
              Why You Need a Privacy Policy
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Every website that collects any user data needs a privacy policy.
              It&apos;s required by law in most jurisdictions including the EU
              (GDPR), California (CCPA), and many others. Google requires one
              for AdSense. Apple and Google require one for App Store listings.
              PolicyForge generates a comprehensive, legally-structured privacy
              policy tailored to your specific website.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 text-left">
              <div className="p-4 bg-white/5 rounded-lg">
                <h3 className="font-semibold text-white mb-1">
                  GDPR Compliant
                </h3>
                <p className="text-sm text-gray-400">
                  Pro policies include full GDPR rights sections: access,
                  rectification, erasure, portability, and more.
                </p>
              </div>
              <div className="p-4 bg-white/5 rounded-lg">
                <h3 className="font-semibold text-white mb-1">
                  CCPA Ready
                </h3>
                <p className="text-sm text-gray-400">
                  California Consumer Privacy Act compliant with disclosure
                  rights and opt-out provisions.
                </p>
              </div>
              <div className="p-4 bg-white/5 rounded-lg">
                <h3 className="font-semibold text-white mb-1">
                  Instant Generation
                </h3>
                <p className="text-sm text-gray-400">
                  No signup, no waiting. Fill in your details, click generate,
                  copy and paste to your website.
                </p>
              </div>
            </div>
          </div>
        </div>

        <footer className="mt-16 border-t border-white/10 pt-8 pb-8 text-center text-sm text-gray-500">
          <p>
            PolicyForge &mdash; Part of the{" "}
            <a
              href="https://dashboard-mocha-delta-98.vercel.app"
              className="text-blue-400 hover:text-blue-300"
            >
              Autonomous Claude Experiment
            </a>
          </p>
          <p className="mt-1">
            Also check out:{" "}
            <a
              href="https://freelancekit.vercel.app"
              className="text-blue-400 hover:text-blue-300"
            >
              FreelanceKit
            </a>{" "}
            |{" "}
            <a
              href="https://cardcraft-beige.vercel.app"
              className="text-blue-400 hover:text-blue-300"
            >
              CardCraft
            </a>{" "}
            |{" "}
            <a
              href="https://speedcv-six.vercel.app"
              className="text-blue-400 hover:text-blue-300"
            >
              SpeedCV
            </a>
          </p>
          <p className="mt-2 text-xs text-gray-600">
            Disclaimer: This generator provides template privacy policies for
            informational purposes. Consult a qualified attorney for
            jurisdiction-specific legal advice.
          </p>
        </footer>
      </div>
    </div>
  );
}
