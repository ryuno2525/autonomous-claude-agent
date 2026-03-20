"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

interface TosFormData {
  companyName: string;
  websiteUrl: string;
  contactEmail: string;
  country: string;
  businessType: string;
  hasUserAccounts: boolean;
  acceptsPayments: boolean;
  hasSubscriptions: boolean;
  allowsUserContent: boolean;
  hasRefundPolicy: boolean;
  effectiveDate: string;
}

const DEFAULT: TosFormData = {
  companyName: "",
  websiteUrl: "",
  contactEmail: "",
  country: "US",
  businessType: "saas",
  hasUserAccounts: true,
  acceptsPayments: true,
  hasSubscriptions: false,
  allowsUserContent: false,
  hasRefundPolicy: true,
  effectiveDate: new Date().toISOString().slice(0, 10),
};

function isPro(): boolean {
  if (typeof window === "undefined") return false;
  return localStorage.getItem("policyforge_pro") === "true";
}

function getGenerationsToday(): number {
  if (typeof window === "undefined") return 0;
  const key = `policyforge_tos_gen_${new Date().toISOString().slice(0, 10)}`;
  return parseInt(localStorage.getItem(key) || "0", 10);
}

function incrementGenerations(): void {
  const key = `policyforge_tos_gen_${new Date().toISOString().slice(0, 10)}`;
  const current = parseInt(localStorage.getItem(key) || "0", 10);
  localStorage.setItem(key, String(current + 1));
}

function generateTos(data: TosFormData, pro: boolean): string {
  const lines: string[] = [];
  const cn = data.companyName || "[Your Company]";
  const url = data.websiteUrl || "[your-website.com]";
  const email = data.contactEmail || "[your-email@example.com]";

  lines.push(`TERMS OF SERVICE`);
  lines.push(`Effective Date: ${data.effectiveDate}`);
  lines.push(``);
  lines.push(`Please read these Terms of Service ("Terms") carefully before using ${url} (the "Service") operated by ${cn} ("we", "us", or "our").`);
  lines.push(``);
  lines.push(`By accessing or using the Service, you agree to be bound by these Terms. If you do not agree to these Terms, do not use the Service.`);
  lines.push(``);

  let section = 1;

  lines.push(`${section}. ELIGIBILITY`);
  lines.push(``);
  lines.push(`You must be at least 18 years old (or the age of majority in your jurisdiction) to use this Service. By using the Service, you represent and warrant that you meet this eligibility requirement.`);
  lines.push(``);
  section++;

  if (data.hasUserAccounts) {
    lines.push(`${section}. USER ACCOUNTS`);
    lines.push(``);
    lines.push(`When you create an account with us, you must provide accurate, complete, and current information. You are responsible for safeguarding your password and for all activities that occur under your account.`);
    lines.push(``);
    lines.push(`You agree to:`);
    lines.push(`- Maintain the security of your account credentials`);
    lines.push(`- Notify us immediately of any unauthorized access`);
    lines.push(`- Not share your account with others`);
    lines.push(``);
    lines.push(`We reserve the right to suspend or terminate your account at any time for violation of these Terms.`);
    lines.push(``);
    section++;
  }

  lines.push(`${section}. ACCEPTABLE USE`);
  lines.push(``);
  lines.push(`You agree not to use the Service to:`);
  lines.push(`- Violate any applicable law or regulation`);
  lines.push(`- Infringe upon the rights of others`);
  lines.push(`- Transmit malware, viruses, or other harmful code`);
  lines.push(`- Attempt to gain unauthorized access to our systems`);
  lines.push(`- Interfere with or disrupt the Service`);
  lines.push(`- Send unsolicited communications (spam)`);
  lines.push(`- Use the Service for any illegal or unauthorized purpose`);
  lines.push(``);
  section++;

  if (data.acceptsPayments) {
    lines.push(`${section}. PAYMENTS AND BILLING`);
    lines.push(``);
    if (data.hasSubscriptions) {
      lines.push(`The Service offers subscription-based pricing. By subscribing, you authorize us to charge your payment method on a recurring basis until you cancel.`);
      lines.push(``);
      lines.push(`- Subscription fees are billed in advance on a recurring basis`);
      lines.push(`- You may cancel your subscription at any time through your account settings`);
      lines.push(`- Cancellation takes effect at the end of the current billing period`);
    } else {
      lines.push(`Certain features of the Service require payment. All fees are stated in US dollars unless otherwise specified. Payment is processed through our third-party payment processor.`);
    }
    lines.push(``);
    lines.push(`All fees are non-refundable unless otherwise stated in our refund policy or required by applicable law.`);
    lines.push(``);
    section++;
  }

  if (data.hasRefundPolicy && data.acceptsPayments) {
    lines.push(`${section}. REFUND POLICY`);
    lines.push(``);
    if (data.businessType === "ecommerce") {
      lines.push(`We offer refunds within 30 days of purchase for physical products returned in their original condition. Digital products are non-refundable once delivered, except where required by law.`);
    } else {
      lines.push(`We offer a 14-day refund policy. If you are not satisfied with the Service, contact us at ${email} within 14 days of purchase for a full refund. After 14 days, refunds are provided at our discretion.`);
    }
    lines.push(``);
    section++;
  }

  lines.push(`${section}. INTELLECTUAL PROPERTY`);
  lines.push(``);
  lines.push(`The Service and its original content, features, and functionality are owned by ${cn} and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.`);
  lines.push(``);
  lines.push(`You may not copy, modify, distribute, sell, or lease any part of the Service without our prior written consent.`);
  lines.push(``);
  section++;

  if (data.allowsUserContent) {
    lines.push(`${section}. USER-GENERATED CONTENT`);
    lines.push(``);
    lines.push(`You may submit, upload, or otherwise make available content through the Service ("User Content"). You retain ownership of your User Content, but by submitting it, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and display your User Content in connection with operating the Service.`);
    lines.push(``);
    lines.push(`You represent that you own or have the necessary rights to submit your User Content, and that it does not violate any third party's rights.`);
    lines.push(``);
    lines.push(`We reserve the right to remove any User Content that violates these Terms or is otherwise objectionable.`);
    lines.push(``);
    section++;
  }

  lines.push(`${section}. LIMITATION OF LIABILITY`);
  lines.push(``);
  lines.push(`TO THE MAXIMUM EXTENT PERMITTED BY LAW, ${cn.toUpperCase()} SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, USE, OR GOODWILL, ARISING OUT OF OR RELATED TO YOUR USE OF THE SERVICE.`);
  lines.push(``);
  lines.push(`OUR TOTAL LIABILITY FOR ALL CLAIMS RELATED TO THE SERVICE SHALL NOT EXCEED THE AMOUNT YOU HAVE PAID US IN THE TWELVE (12) MONTHS PRIOR TO THE CLAIM.`);
  lines.push(``);
  section++;

  lines.push(`${section}. DISCLAIMER OF WARRANTIES`);
  lines.push(``);
  lines.push(`THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.`);
  lines.push(``);
  lines.push(`We do not warrant that the Service will be uninterrupted, secure, or error-free, or that any defects will be corrected.`);
  lines.push(``);
  section++;

  if (pro) {
    lines.push(`${section}. INDEMNIFICATION`);
    lines.push(``);
    lines.push(`You agree to indemnify, defend, and hold harmless ${cn}, its officers, directors, employees, and agents from and against any claims, damages, losses, liabilities, costs, and expenses (including reasonable attorneys' fees) arising from your use of the Service, your violation of these Terms, or your violation of any rights of another party.`);
    lines.push(``);
    section++;

    if (data.businessType === "saas") {
      lines.push(`${section}. SERVICE LEVEL AND AVAILABILITY`);
      lines.push(``);
      lines.push(`We strive to maintain high availability of the Service but do not guarantee any specific uptime. Scheduled maintenance will be communicated in advance when possible. We are not liable for any downtime, data loss, or service interruption.`);
      lines.push(``);
      section++;
    }

    lines.push(`${section}. PRIVACY`);
    lines.push(``);
    lines.push(`Your use of the Service is also governed by our Privacy Policy, which is incorporated into these Terms by reference. Please review our Privacy Policy at ${url}/privacy-policy.`);
    lines.push(``);
    section++;
  }

  lines.push(`${section}. GOVERNING LAW`);
  lines.push(``);
  if (data.country === "EU") {
    lines.push(`These Terms shall be governed by and construed in accordance with the laws of the European Union and the applicable member state. Any disputes shall be resolved in the courts of the applicable jurisdiction.`);
  } else {
    lines.push(`These Terms shall be governed by and construed in accordance with the laws of the United States and the State of Delaware, without regard to its conflict of law provisions. Any disputes shall be resolved in the state or federal courts located in Delaware.`);
  }
  lines.push(``);
  section++;

  lines.push(`${section}. TERMINATION`);
  lines.push(``);
  lines.push(`We may terminate or suspend your access to the Service immediately, without prior notice, for any reason, including breach of these Terms. Upon termination, your right to use the Service will cease immediately.`);
  lines.push(``);
  section++;

  lines.push(`${section}. CHANGES TO TERMS`);
  lines.push(``);
  lines.push(`We reserve the right to modify these Terms at any time. We will provide notice of material changes by posting the updated Terms on the Service and updating the "Effective Date." Your continued use of the Service after changes are posted constitutes acceptance of the modified Terms.`);
  lines.push(``);
  section++;

  lines.push(`${section}. CONTACT US`);
  lines.push(``);
  lines.push(`If you have questions about these Terms, please contact us at:`);
  lines.push(`${cn}`);
  lines.push(`Email: ${email}`);
  lines.push(`Website: ${url}`);

  if (!pro) {
    lines.push(``);
    lines.push(`---`);
    lines.push(`Generated by PolicyForge (policyforge.autonomous-claude.com)`);
  }

  return lines.join("\n");
}

export default function TosPage() {
  const [form, setForm] = useState<TosFormData>(DEFAULT);
  const [tos, setTos] = useState("");
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

  const update = (key: keyof TosFormData, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleGenerate = () => {
    if (!pro && gensToday >= FREE_LIMIT) {
      setBuying(true);
      return;
    }
    const result = generateTos(form, pro);
    setTos(result);
    if (!pro) {
      incrementGenerations();
      setGensToday(getGenerationsToday());
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(tos);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([tos], { type: "text/plain" });
    const u = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = u;
    a.download = "terms-of-service.txt";
    a.click();
    URL.revokeObjectURL(u);
  };

  const handleBuyPro = async () => {
    setBuying(true);
    try {
      const res = await fetch("/api/checkout", { method: "POST" });
      const data = await res.json();
      if (data.url) window.location.href = data.url;
    } catch {
      setBuying(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0f0f0f]">
      <header className="border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-sm">
              P
            </div>
            <span className="text-white font-semibold text-lg">PolicyForge</span>
            {pro && (
              <span className="ml-2 px-2 py-0.5 bg-amber-500/20 text-amber-400 text-xs font-medium rounded-full">
                PRO
              </span>
            )}
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/" className="text-sm text-gray-400 hover:text-white transition">
              Privacy Policy
            </Link>
            <Link href="/check" className="text-sm text-gray-400 hover:text-white transition">
              Compliance Checker
            </Link>
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
            Free Terms of Service Generator
          </h1>
          <p className="text-gray-400 text-lg">
            Generate professional terms of service for your website, app, or SaaS in minutes. No signup required.
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
                  placeholder="legal@example.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Business Type
                </label>
                <select
                  value={form.businessType}
                  onChange={(e) => update("businessType", e.target.value)}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="saas" className="bg-gray-800">SaaS / Web App</option>
                  <option value="ecommerce" className="bg-gray-800">Ecommerce Store</option>
                  <option value="marketplace" className="bg-gray-800">Marketplace</option>
                  <option value="blog" className="bg-gray-800">Blog / Content Site</option>
                  <option value="mobile" className="bg-gray-800">Mobile App</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Jurisdiction
                </label>
                <select
                  value={form.country}
                  onChange={(e) => update("country", e.target.value)}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="US" className="bg-gray-800">United States</option>
                  <option value="EU" className="bg-gray-800">European Union</option>
                  <option value="OTHER" className="bg-gray-800">Other</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
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
                What applies to your service?
              </label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { key: "hasUserAccounts" as const, label: "User accounts / registration" },
                  { key: "acceptsPayments" as const, label: "Accepts payments" },
                  { key: "hasSubscriptions" as const, label: "Subscription billing" },
                  { key: "allowsUserContent" as const, label: "User-generated content" },
                  { key: "hasRefundPolicy" as const, label: "Refund policy" },
                ].map(({ key, label }) => (
                  <label key={key} className="flex items-center gap-2 text-sm text-gray-300 cursor-pointer">
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
              Generate Terms of Service
            </button>

            {!pro && (
              <p className="text-sm text-gray-500 text-center">
                {FREE_LIMIT - gensToday} / {FREE_LIMIT} free generations today
              </p>
            )}

            {!pro && (
              <div className="p-4 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-lg">
                <p className="text-sm text-gray-300">
                  <strong className="text-white">Pro ($12.99 one-time):</strong>{" "}
                  Indemnification clause, SaaS SLA terms, privacy policy cross-reference, no branding, unlimited generations.
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
                Your Terms of Service
              </label>
              {tos && (
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
              value={tos}
              readOnly
              rows={30}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-gray-300 text-sm font-mono resize-none focus:outline-none"
              placeholder="Fill in the form and click Generate to create your terms of service..."
            />
          </div>
        </div>

        {/* SEO Content */}
        <div className="mt-16 border-t border-white/10 pt-12">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-2xl font-bold text-white">Why Every Website Needs Terms of Service</h2>
            <p className="text-gray-400 leading-relaxed">
              Terms of service protect your business from legal liability, define the rules for using your platform,
              and establish your intellectual property rights. Without them, you have limited legal recourse if users
              misuse your service, dispute charges, or copy your content.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="p-4 bg-white/5 rounded-lg">
                <h3 className="font-semibold text-white mb-1">Limit Liability</h3>
                <p className="text-sm text-gray-400">
                  Cap your financial exposure and disclaim warranties to protect against lawsuits.
                </p>
              </div>
              <div className="p-4 bg-white/5 rounded-lg">
                <h3 className="font-semibold text-white mb-1">Protect IP</h3>
                <p className="text-sm text-gray-400">
                  Assert ownership of your content, code, and brand with clear intellectual property terms.
                </p>
              </div>
              <div className="p-4 bg-white/5 rounded-lg">
                <h3 className="font-semibold text-white mb-1">Set Rules</h3>
                <p className="text-sm text-gray-400">
                  Define acceptable use, payment terms, and account policies so users know what to expect.
                </p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl">
              <h3 className="text-lg font-bold text-white mb-2">Need a privacy policy too?</h3>
              <p className="text-gray-400 text-sm mb-3">
                Most websites need both terms of service and a privacy policy. Generate both with PolicyForge.
              </p>
              <Link href="/" className="inline-block px-6 py-2 bg-white/10 text-white text-sm font-medium rounded-lg hover:bg-white/20 transition-colors">
                Generate Privacy Policy &rarr;
              </Link>
            </div>
          </div>
        </div>

        <footer className="mt-16 border-t border-white/10 pt-8 pb-8 text-center text-sm text-gray-500">
          <p>
            PolicyForge &mdash; Part of the{" "}
            <a href="https://dashboard-mocha-delta-98.vercel.app" className="text-blue-400 hover:text-blue-300">
              Autonomous Claude Experiment
            </a>
          </p>
          <p className="mt-2 text-xs text-gray-600">
            Disclaimer: This generator provides template terms of service for informational purposes.
            Consult a qualified attorney for jurisdiction-specific legal advice.
          </p>
        </footer>
      </div>
    </div>
  );
}
