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
  const [showUpgrade, setShowUpgrade] = useState(false);
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
      setShowUpgrade(true);
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

  const handleBuy = async (tier: "pro" | "starter" = "pro") => {
    setBuying(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tier }),
      });
      const data = await res.json();
      if (data.url) window.location.href = data.url;
      else alert("Checkout error: " + (data.error || "Unknown error"));
    } catch {
      alert("Failed to start checkout.");
    } finally {
      setBuying(false);
    }
  };
  const handleBuyPro = () => handleBuy("pro");

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
          <div className="flex items-center gap-4">
            <a href="/tos" className="text-sm text-gray-400 hover:text-white transition">
              Terms of Service
            </a>
            <a href="/check" className="text-sm text-gray-400 hover:text-white transition">
              Compliance Checker
            </a>
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

        {/* Compliance Checker CTA */}
        <div className="mt-16 border-t border-white/10 pt-12">
          <div className="max-w-3xl mx-auto">
            <div className="mb-12 p-6 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl text-center">
              <h3 className="text-lg font-bold text-white mb-2">Already have a privacy policy?</h3>
              <p className="text-gray-400 text-sm mb-3">Scan any website to check GDPR, CCPA, and other compliance requirements — free, unlimited.</p>
              <a href="/check" className="inline-block px-6 py-2 bg-white/10 text-white text-sm font-medium rounded-lg hover:bg-white/20 transition-colors">
                Check Your Policy &rarr;
              </a>
            </div>
          </div>
        </div>

        {/* Why You Need This — Urgency */}
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Privacy Policies Aren&apos;t Optional
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Non-compliance carries real financial risk. Every website collecting user data is legally required to have a privacy policy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="p-6 bg-red-500/5 border border-red-500/20 rounded-xl text-center">
              <p className="text-3xl font-bold text-red-400 mb-1">&euro;20M+</p>
              <p className="text-sm text-gray-400">Maximum GDPR fine or 4% of global annual revenue</p>
            </div>
            <div className="p-6 bg-orange-500/5 border border-orange-500/20 rounded-xl text-center">
              <p className="text-3xl font-bold text-orange-400 mb-1">$7,500</p>
              <p className="text-sm text-gray-400">Per-violation CCPA penalty for California residents</p>
            </div>
            <div className="p-6 bg-yellow-500/5 border border-yellow-500/20 rounded-xl text-center">
              <p className="text-3xl font-bold text-yellow-400 mb-1">Required</p>
              <p className="text-sm text-gray-400">By Google AdSense, App Store, Play Store, and Stripe</p>
            </div>
          </div>

          {/* How It Works */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white text-center mb-8">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-3">
                  <span className="text-blue-400 font-bold text-lg">1</span>
                </div>
                <h3 className="font-semibold text-white mb-1">Fill In Your Details</h3>
                <p className="text-sm text-gray-400">Enter your company name, website, and what data you collect. Takes 30 seconds.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center mx-auto mb-3">
                  <span className="text-cyan-400 font-bold text-lg">2</span>
                </div>
                <h3 className="font-semibold text-white mb-1">Generate Instantly</h3>
                <p className="text-sm text-gray-400">Get a professional, legally-structured privacy policy customized to your needs.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-3">
                  <span className="text-green-400 font-bold text-lg">3</span>
                </div>
                <h3 className="font-semibold text-white mb-1">Copy & Publish</h3>
                <p className="text-sm text-gray-400">Copy or download your policy. Paste it on your website. You&apos;re compliant.</p>
              </div>
            </div>
          </div>

          {/* Price Comparison */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white text-center mb-3">Save Hundreds vs. Alternatives</h2>
            <p className="text-gray-400 text-center mb-8 max-w-xl mx-auto">Other privacy policy services charge monthly or annual fees. PolicyForge is a one-time payment.</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left text-gray-400 font-medium py-3 px-4">Service</th>
                    <th className="text-center text-gray-400 font-medium py-3 px-4">Price</th>
                    <th className="text-center text-gray-400 font-medium py-3 px-4">GDPR</th>
                    <th className="text-center text-gray-400 font-medium py-3 px-4">CCPA</th>
                    <th className="text-center text-gray-400 font-medium py-3 px-4">Signup</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4 text-gray-400">Termly</td>
                    <td className="py-3 px-4 text-center text-gray-400">$120/year</td>
                    <td className="py-3 px-4 text-center text-green-400">&#10003;</td>
                    <td className="py-3 px-4 text-center text-green-400">&#10003;</td>
                    <td className="py-3 px-4 text-center text-red-400">Required</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4 text-gray-400">iubenda</td>
                    <td className="py-3 px-4 text-center text-gray-400">$108/year</td>
                    <td className="py-3 px-4 text-center text-green-400">&#10003;</td>
                    <td className="py-3 px-4 text-center text-green-400">&#10003;</td>
                    <td className="py-3 px-4 text-center text-red-400">Required</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4 text-gray-400">Lawyer</td>
                    <td className="py-3 px-4 text-center text-gray-400">$500–2,000+</td>
                    <td className="py-3 px-4 text-center text-green-400">&#10003;</td>
                    <td className="py-3 px-4 text-center text-green-400">&#10003;</td>
                    <td className="py-3 px-4 text-center text-gray-400">Consultation</td>
                  </tr>
                  <tr className="bg-cyan-500/5 border border-cyan-500/20 rounded-lg">
                    <td className="py-3 px-4 text-white font-semibold">PolicyForge Pro</td>
                    <td className="py-3 px-4 text-center text-cyan-400 font-bold">$12.99 once</td>
                    <td className="py-3 px-4 text-center text-green-400">&#10003;</td>
                    <td className="py-3 px-4 text-center text-green-400">&#10003;</td>
                    <td className="py-3 px-4 text-center text-green-400">None</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Pricing Cards */}
          {!pro && (
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-white text-center mb-8">Simple, One-Time Pricing</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
                  <h3 className="text-lg font-bold text-white mb-1">Free</h3>
                  <p className="text-3xl font-bold text-white mb-1">$0</p>
                  <p className="text-xs text-gray-500 mb-4">2 generations/day</p>
                  <ul className="space-y-2 text-sm text-gray-400 mb-6">
                    <li>&#10003; Basic privacy policy</li>
                    <li>&#10003; Cookie & data sections</li>
                    <li>&#10003; Copy & download</li>
                    <li className="text-gray-600">&#10007; GDPR rights sections</li>
                    <li className="text-gray-600">&#10007; CCPA compliance</li>
                    <li className="text-gray-600">&#10007; Data retention clause</li>
                  </ul>
                  <p className="text-center text-xs text-gray-500">Current plan</p>
                </div>
                <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
                  <h3 className="text-lg font-bold text-white mb-1">Starter</h3>
                  <p className="text-3xl font-bold text-white mb-1">$4.99</p>
                  <p className="text-xs text-gray-500 mb-4">One-time payment</p>
                  <ul className="space-y-2 text-sm text-gray-400 mb-6">
                    <li>&#10003; 10 policy generations</li>
                    <li>&#10003; GDPR &amp; CCPA sections</li>
                    <li>&#10003; Data retention clause</li>
                    <li>&#10003; Security measures</li>
                    <li>&#10003; Export as text</li>
                    <li className="text-gray-600">&#10007; Unlimited generations</li>
                  </ul>
                  <button
                    onClick={() => handleBuy("starter")}
                    disabled={buying}
                    className="w-full px-4 py-2.5 bg-white/10 text-white text-sm font-medium rounded-lg hover:bg-white/20 transition-colors disabled:opacity-50"
                  >
                    {buying ? "Loading..." : "Get Starter"}
                  </button>
                </div>
                <div className="p-6 border-2 border-cyan-500/50 rounded-xl bg-cyan-500/5 relative">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-cyan-500 text-xs text-white font-bold rounded-full">BEST VALUE</div>
                  <h3 className="text-lg font-bold text-white mb-1">Pro</h3>
                  <p className="text-3xl font-bold text-white mb-1">$12.99</p>
                  <p className="text-xs text-gray-500 mb-4">One-time payment</p>
                  <ul className="space-y-2 text-sm text-gray-300 mb-6">
                    <li>&#10003; Unlimited generations</li>
                    <li>&#10003; All compliance sections</li>
                    <li>&#10003; ToS generator included</li>
                    <li>&#10003; No PolicyForge branding</li>
                    <li>&#10003; Children&apos;s privacy (COPPA)</li>
                    <li>&#10003; Indemnification clauses</li>
                  </ul>
                  <button
                    onClick={handleBuyPro}
                    disabled={buying}
                    className="w-full px-4 py-2.5 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-medium rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
                  >
                    {buying ? "Loading..." : "Get Pro"}
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Features */}
          <div className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-5 bg-white/5 rounded-xl">
                <h3 className="font-semibold text-white mb-2">GDPR Compliant</h3>
                <p className="text-sm text-gray-400">Full EU data protection rights: access, rectification, erasure, portability, and objection.</p>
              </div>
              <div className="p-5 bg-white/5 rounded-xl">
                <h3 className="font-semibold text-white mb-2">CCPA Ready</h3>
                <p className="text-sm text-gray-400">California Consumer Privacy Act compliant with disclosure rights and opt-out provisions.</p>
              </div>
              <div className="p-5 bg-white/5 rounded-xl">
                <h3 className="font-semibold text-white mb-2">Instant Generation</h3>
                <p className="text-sm text-gray-400">No signup, no waiting. Fill in details, generate, copy to your website. Under 2 minutes.</p>
              </div>
            </div>
          </div>

          {/* Tools */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white text-center mb-8">Complete Legal Compliance Suite</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <a href="/" className="p-5 bg-blue-500/5 border border-blue-500/20 rounded-xl hover:bg-blue-500/10 transition-colors">
                <h3 className="font-semibold text-white mb-1">Privacy Policy Generator</h3>
                <p className="text-sm text-gray-400">Generate GDPR &amp; CCPA compliant privacy policies customized to your business.</p>
              </a>
              <a href="/tos" className="p-5 bg-purple-500/5 border border-purple-500/20 rounded-xl hover:bg-purple-500/10 transition-colors">
                <h3 className="font-semibold text-white mb-1">Terms of Service Generator</h3>
                <p className="text-sm text-gray-400">Create professional ToS covering liability, payments, refunds, and user content.</p>
              </a>
              <a href="/check" className="p-5 bg-green-500/5 border border-green-500/20 rounded-xl hover:bg-green-500/10 transition-colors">
                <h3 className="font-semibold text-white mb-1">Compliance Checker</h3>
                <p className="text-sm text-gray-400">Scan any website to check privacy policy compliance. Free and unlimited.</p>
              </a>
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-16 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="p-4 bg-white/5 rounded-lg">
                <h3 className="font-semibold text-white">Do I really need a privacy policy?</h3>
                <p className="text-sm text-gray-400 mt-1">Yes. If your website collects any data — including analytics, cookies, or email addresses — you&apos;re legally required to have one. GDPR (EU), CCPA (California), PIPEDA (Canada), and LGPD (Brazil) all mandate it. Google AdSense, Apple App Store, and Stripe also require one.</p>
              </div>
              <div className="p-4 bg-white/5 rounded-lg">
                <h3 className="font-semibold text-white">Is this a legally valid privacy policy?</h3>
                <p className="text-sm text-gray-400 mt-1">PolicyForge generates professionally structured policies based on current privacy law frameworks. While we cover all major compliance areas, we recommend consulting an attorney for complex or high-risk situations. For most small businesses and startups, our policies provide solid coverage.</p>
              </div>
              <div className="p-4 bg-white/5 rounded-lg">
                <h3 className="font-semibold text-white">Why PolicyForge instead of a free template?</h3>
                <p className="text-sm text-gray-400 mt-1">Free templates are generic and often outdated. PolicyForge customizes your policy based on your specific data practices — whether you use cookies, process payments, have user accounts, or handle children&apos;s data. Pro policies include GDPR/CCPA-specific rights sections that most templates miss entirely.</p>
              </div>
              <div className="p-4 bg-white/5 rounded-lg">
                <h3 className="font-semibold text-white">What&apos;s the difference between Free and Pro?</h3>
                <p className="text-sm text-gray-400 mt-1">Free gives you 2 basic privacy policies per day. Pro ($12.99 one-time) adds unlimited generations, full GDPR/CCPA rights sections, data retention clauses, security measures, children&apos;s privacy, Terms of Service generator, and removes PolicyForge branding.</p>
              </div>
              <div className="p-4 bg-white/5 rounded-lg">
                <h3 className="font-semibold text-white">Is this a subscription?</h3>
                <p className="text-sm text-gray-400 mt-1">No. All plans are one-time payments. Pay once, use forever. No recurring charges.</p>
              </div>
            </div>
          </div>
        </div>

        <footer className="border-t border-white/10 pt-8 pb-8 text-center text-sm text-gray-500">
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
            Also:{" "}
            <a href="https://freelancekit.vercel.app" className="text-blue-400 hover:text-blue-300">FreelanceKit</a>{" "}
            | <a href="https://speedcv-six.vercel.app" className="text-blue-400 hover:text-blue-300">SpeedCV</a>{" "}
            | <a href="https://proposalforge-zeta.vercel.app" className="text-blue-400 hover:text-blue-300">ProposalForge</a>
          </p>
          <p className="mt-2 text-xs text-gray-600">
            Disclaimer: This generator provides template privacy policies for
            informational purposes. Consult a qualified attorney for
            jurisdiction-specific legal advice.
          </p>
        </footer>
      </div>

      {/* Upgrade Modal */}
      {showUpgrade && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
          <div className="bg-[#1a1a1a] border border-white/10 rounded-2xl max-w-md w-full p-8 relative">
            <button
              onClick={() => setShowUpgrade(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-white text-xl"
            >
              &times;
            </button>
            <div className="text-center mb-6">
              <div className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white">You&apos;ve used your free generations</h3>
              <p className="text-gray-400 text-sm mt-2">Upgrade to Pro for unlimited access</p>
            </div>
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="p-4 border border-white/10 rounded-xl bg-white/5">
                <p className="text-lg font-bold text-white">$4.99</p>
                <p className="text-xs text-gray-400 mb-3">Starter</p>
                <ul className="space-y-1.5 mb-4 text-xs text-gray-300">
                  <li>&#10003; 10 policy generations</li>
                  <li>&#10003; GDPR &amp; CCPA sections</li>
                  <li>&#10003; Export as text</li>
                </ul>
                <button
                  onClick={() => handleBuy("starter")}
                  disabled={buying}
                  className="w-full px-3 py-2 bg-white/10 text-white text-sm font-medium rounded-lg hover:bg-white/20 transition-colors disabled:opacity-50"
                >
                  {buying ? "..." : "Get Starter"}
                </button>
              </div>
              <div className="p-4 border-2 border-cyan-500/50 rounded-xl bg-cyan-500/5 relative">
                <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-cyan-500 text-[10px] text-white font-bold rounded-full">BEST VALUE</div>
                <p className="text-lg font-bold text-white">$12.99</p>
                <p className="text-xs text-gray-400 mb-3">Pro</p>
                <ul className="space-y-1.5 mb-4 text-xs text-gray-300">
                  <li>&#10003; Unlimited generations</li>
                  <li>&#10003; All compliance sections</li>
                  <li>&#10003; ToS generator included</li>
                  <li>&#10003; No branding</li>
                </ul>
                <button
                  onClick={() => handleBuy("pro")}
                  disabled={buying}
                  className="w-full px-3 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-medium rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                  {buying ? "..." : "Get Pro"}
                </button>
              </div>
            </div>
            <p className="text-center text-xs text-gray-500">One-time payment. No subscription. Instant access.</p>
          </div>
        </div>
      )}

      {/* SEO Internal Links Footer */}
      <div className="mt-20 border-t border-white/10 pt-12 pb-8">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-lg font-bold text-white mb-6">Privacy Policy Resources</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-2 text-sm">
            <a href="/check" className="text-gray-400 hover:text-blue-400 transition">Free Compliance Scanner</a>
            <a href="/tos" className="text-gray-400 hover:text-blue-400 transition">Terms of Service Generator</a>
            <a href="/leaderboard" className="text-gray-400 hover:text-blue-400 transition">Compliance Leaderboard</a>
            <a href="/best-free-privacy-policy-generator" className="text-gray-400 hover:text-blue-400 transition">Best Free Generators (2026)</a>
            <a href="/termly-alternative" className="text-gray-400 hover:text-blue-400 transition">Termly Alternative</a>
            <a href="/free-gdpr-compliance-tool" className="text-gray-400 hover:text-blue-400 transition">Free GDPR Compliance Tool</a>
            <a href="/privacy-policy-for-ecommerce" className="text-gray-400 hover:text-blue-400 transition">Privacy Policy for E-commerce</a>
            <a href="/privacy-policy-for-saas" className="text-gray-400 hover:text-blue-400 transition">Privacy Policy for SaaS</a>
            <a href="/privacy-policy-for-mobile-app" className="text-gray-400 hover:text-blue-400 transition">Privacy Policy for Mobile Apps</a>
            <a href="/privacy-policy-for-shopify" className="text-gray-400 hover:text-blue-400 transition">Privacy Policy for Shopify</a>
            <a href="/privacy-policy-for-wordpress" className="text-gray-400 hover:text-blue-400 transition">Privacy Policy for WordPress</a>
            <a href="/privacy-policy-for-startup" className="text-gray-400 hover:text-blue-400 transition">Privacy Policy for Startups</a>
            <a href="/privacy-policy-for-ai-tool" className="text-gray-400 hover:text-blue-400 transition">Privacy Policy for AI Tools</a>
            <a href="/privacy-policy-for-healthcare" className="text-gray-400 hover:text-blue-400 transition">Privacy Policy for Healthcare</a>
            <a href="/privacy-policy-for-chrome-extension" className="text-gray-400 hover:text-blue-400 transition">Privacy Policy for Extensions</a>
            <a href="/gdpr-privacy-policy-generator" className="text-gray-400 hover:text-blue-400 transition">GDPR Policy Generator</a>
            <a href="/ccpa-privacy-policy-generator" className="text-gray-400 hover:text-blue-400 transition">CCPA Policy Generator</a>
            <a href="/gdpr-compliance-checklist" className="text-gray-400 hover:text-blue-400 transition">GDPR Compliance Checklist</a>
            <a href="/cookie-policy-generator" className="text-gray-400 hover:text-blue-400 transition">Cookie Policy Generator</a>
            <a href="/privacy-policy-for-small-business" className="text-gray-400 hover:text-blue-400 transition">Privacy Policy for Small Business</a>
            <a href="/privacy-policy-for-app-store" className="text-gray-400 hover:text-blue-400 transition">Privacy Policy for App Store</a>
          </div>
          <p className="text-xs text-gray-600 mt-6">PolicyForge generates legally-compliant privacy policies for GDPR, CCPA, and more. One-time payment, no subscription.</p>
        </div>
      </div>
    </div>
  );
}
