"use client";

import { useState, useEffect, useRef, useCallback } from "react";

interface PricingItem {
  id: string;
  description: string;
  amount: number;
}

interface TimelineItem {
  id: string;
  phase: string;
  duration: string;
  description: string;
}

interface ProposalData {
  // Your business
  companyName: string;
  companyEmail: string;
  companyPhone: string;
  companyAddress: string;
  // Client
  clientName: string;
  clientCompany: string;
  clientEmail: string;
  // Proposal
  proposalTitle: string;
  proposalDate: string;
  validUntil: string;
  // Sections
  executiveSummary: string;
  scopeOfWork: string;
  timeline: TimelineItem[];
  pricing: PricingItem[];
  terms: string;
  currency: string;
}

const CURRENCIES: Record<string, string> = {
  USD: "$",
  EUR: "€",
  GBP: "£",
  CAD: "C$",
  AUD: "A$",
};

const DEFAULT_DATA: ProposalData = {
  companyName: "",
  companyEmail: "",
  companyPhone: "",
  companyAddress: "",
  clientName: "",
  clientCompany: "",
  clientEmail: "",
  proposalTitle: "Project Proposal",
  proposalDate: new Date().toISOString().split("T")[0],
  validUntil: new Date(Date.now() + 30 * 86400000).toISOString().split("T")[0],
  executiveSummary: "",
  scopeOfWork: "",
  timeline: [
    {
      id: crypto.randomUUID(),
      phase: "Phase 1",
      duration: "2 weeks",
      description: "",
    },
  ],
  pricing: [
    { id: crypto.randomUUID(), description: "", amount: 0 },
  ],
  terms:
    "Payment is due within 30 days of invoice. A 50% deposit is required to begin work.",
  currency: "USD",
};

const FREE_DAILY_LIMIT = 1;

function getExportsToday(): number {
  if (typeof window === "undefined") return 0;
  const key = `proposalforge_exports_${new Date().toISOString().split("T")[0]}`;
  return parseInt(localStorage.getItem(key) || "0", 10);
}

function incrementExports(): void {
  const key = `proposalforge_exports_${new Date().toISOString().split("T")[0]}`;
  localStorage.setItem(key, String(getExportsToday() + 1));
}

function isPro(): boolean {
  if (typeof window === "undefined") return false;
  return localStorage.getItem("proposalforge_pro") === "true";
}

export default function ProposalForge() {
  const [data, setData] = useState<ProposalData>(DEFAULT_DATA);
  const [activeTab, setActiveTab] = useState<"edit" | "preview">("edit");
  const [pro, setPro] = useState(false);
  const [exportsLeft, setExportsLeft] = useState(FREE_DAILY_LIMIT);
  const [showProModal, setShowProModal] = useState(false);
  const [checkingOut, setCheckingOut] = useState(false);
  const [checkoutError, setCheckoutError] = useState("");
  const previewRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setPro(isPro());
    setExportsLeft(FREE_DAILY_LIMIT - getExportsToday());
    const saved = localStorage.getItem("proposalforge_data");
    if (saved) {
      try {
        setData({ ...DEFAULT_DATA, ...JSON.parse(saved) });
      } catch {
        /* ignore */
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("proposalforge_data", JSON.stringify(data));
  }, [data]);

  const sym = CURRENCIES[data.currency] || "$";
  const totalPrice = data.pricing.reduce((s, i) => s + i.amount, 0);

  const updateField = useCallback(
    (field: keyof ProposalData, value: string) => {
      setData((prev) => ({ ...prev, [field]: value }));
    },
    []
  );

  const addPricingItem = () => {
    setData((p) => ({
      ...p,
      pricing: [
        ...p.pricing,
        { id: crypto.randomUUID(), description: "", amount: 0 },
      ],
    }));
  };

  const removePricingItem = (id: string) => {
    if (data.pricing.length <= 1) return;
    setData((p) => ({
      ...p,
      pricing: p.pricing.filter((i) => i.id !== id),
    }));
  };

  const updatePricing = (
    id: string,
    field: "description" | "amount",
    value: string | number
  ) => {
    setData((p) => ({
      ...p,
      pricing: p.pricing.map((i) =>
        i.id === id ? { ...i, [field]: value } : i
      ),
    }));
  };

  const addTimelineItem = () => {
    setData((p) => ({
      ...p,
      timeline: [
        ...p.timeline,
        {
          id: crypto.randomUUID(),
          phase: `Phase ${p.timeline.length + 1}`,
          duration: "",
          description: "",
        },
      ],
    }));
  };

  const removeTimelineItem = (id: string) => {
    if (data.timeline.length <= 1) return;
    setData((p) => ({
      ...p,
      timeline: p.timeline.filter((i) => i.id !== id),
    }));
  };

  const updateTimeline = (
    id: string,
    field: "phase" | "duration" | "description",
    value: string
  ) => {
    setData((p) => ({
      ...p,
      timeline: p.timeline.map((i) =>
        i.id === id ? { ...i, [field]: value } : i
      ),
    }));
  };

  const handleExportPDF = async () => {
    if (!pro && getExportsToday() >= FREE_DAILY_LIMIT) {
      setShowProModal(true);
      return;
    }

    setActiveTab("preview");
    await new Promise((r) => setTimeout(r, 200));

    const el = previewRef.current;
    if (!el) return;

    const html2canvas = (await import("html2canvas-pro")).default;
    const { jsPDF } = await import("jspdf");

    const canvas = await html2canvas(el, {
      scale: 2,
      backgroundColor: "#ffffff",
      useCORS: true,
    });

    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const imgWidth = pageWidth;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    let heightLeft = imgHeight;
    let position = 0;

    pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    while (heightLeft > 0) {
      position -= pageHeight;
      pdf.addPage();
      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }

    if (!pro) {
      const pages = pdf.getNumberOfPages();
      for (let i = 1; i <= pages; i++) {
        pdf.setPage(i);
        pdf.setFontSize(32);
        pdf.setTextColor(220, 220, 220);
        pdf.text("ProposalForge", pageWidth / 2, pageHeight / 2, {
          align: "center",
          angle: 45,
        });
      }
    }

    pdf.save(`${data.proposalTitle.replace(/\s+/g, "-") || "proposal"}.pdf`);

    if (!pro) {
      incrementExports();
      setExportsLeft(FREE_DAILY_LIMIT - getExportsToday());
    }
  };

  const handleCheckout = async () => {
    setCheckingOut(true);
    setCheckoutError("");
    try {
      const res = await fetch("/api/checkout", { method: "POST" });
      const json = await res.json();
      if (json.url) window.location.href = json.url;
      else setCheckoutError(json.error || "Failed to create checkout");
    } catch {
      setCheckoutError("Network error. Please try again.");
    } finally {
      setCheckingOut(false);
    }
  };

  const fmt = (n: number) =>
    `${sym}${n.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      {/* Header */}
      <header className="border-b border-white/10 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center font-bold text-sm">
              P
            </div>
            <h1 className="text-xl font-bold">ProposalForge</h1>
            {pro && (
              <span className="text-xs bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full">
                PRO
              </span>
            )}
          </div>
          <div className="flex items-center gap-3">
            {!pro && (
              <button
                onClick={() => setShowProModal(true)}
                className="text-sm bg-gradient-to-r from-emerald-500 to-teal-600 px-4 py-2 rounded-lg font-medium hover:opacity-90 transition"
              >
                Upgrade to Pro — $29.99
              </button>
            )}
            <button
              onClick={handleExportPDF}
              className="text-sm bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-gray-200 transition"
            >
              Download PDF
            </button>
          </div>
        </div>
      </header>

      {/* Mobile tabs */}
      <div className="md:hidden flex border-b border-white/10">
        <button
          onClick={() => setActiveTab("edit")}
          className={`flex-1 py-3 text-sm font-medium ${activeTab === "edit" ? "text-emerald-400 border-b-2 border-emerald-400" : "text-gray-500"}`}
        >
          Edit
        </button>
        <button
          onClick={() => setActiveTab("preview")}
          className={`flex-1 py-3 text-sm font-medium ${activeTab === "preview" ? "text-emerald-400 border-b-2 border-emerald-400" : "text-gray-500"}`}
        >
          Preview
        </button>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6 p-4 md:p-6">
        {/* LEFT: Form */}
        <div
          className={`space-y-5 ${activeTab === "preview" ? "hidden md:block" : ""}`}
        >
          <Section title="Your Business">
            <div className="grid grid-cols-2 gap-3">
              <Input
                label="Company Name"
                value={data.companyName}
                onChange={(v) => updateField("companyName", v)}
                cls="col-span-2"
              />
              <Input
                label="Email"
                value={data.companyEmail}
                onChange={(v) => updateField("companyEmail", v)}
              />
              <Input
                label="Phone"
                value={data.companyPhone}
                onChange={(v) => updateField("companyPhone", v)}
              />
              <Input
                label="Address"
                value={data.companyAddress}
                onChange={(v) => updateField("companyAddress", v)}
                cls="col-span-2"
              />
            </div>
          </Section>

          <Section title="Client">
            <div className="grid grid-cols-2 gap-3">
              <Input
                label="Contact Name"
                value={data.clientName}
                onChange={(v) => updateField("clientName", v)}
              />
              <Input
                label="Company"
                value={data.clientCompany}
                onChange={(v) => updateField("clientCompany", v)}
              />
              <Input
                label="Email"
                value={data.clientEmail}
                onChange={(v) => updateField("clientEmail", v)}
                cls="col-span-2"
              />
            </div>
          </Section>

          <Section title="Proposal Details">
            <div className="grid grid-cols-3 gap-3">
              <Input
                label="Title"
                value={data.proposalTitle}
                onChange={(v) => updateField("proposalTitle", v)}
                cls="col-span-3"
              />
              <Input
                label="Date"
                type="date"
                value={data.proposalDate}
                onChange={(v) => updateField("proposalDate", v)}
              />
              <Input
                label="Valid Until"
                type="date"
                value={data.validUntil}
                onChange={(v) => updateField("validUntil", v)}
              />
              <div>
                <label className="text-xs text-gray-400 mb-1 block">
                  Currency
                </label>
                <select
                  value={data.currency}
                  onChange={(e) => updateField("currency", e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-emerald-500"
                >
                  {Object.keys(CURRENCIES).map((c) => (
                    <option key={c} value={c} className="bg-gray-900">
                      {c}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </Section>

          <Section title="Executive Summary">
            <textarea
              value={data.executiveSummary}
              onChange={(e) => updateField("executiveSummary", e.target.value)}
              placeholder="Brief overview of the project and why your company is the right fit..."
              rows={4}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-emerald-500 resize-none"
            />
          </Section>

          <Section title="Scope of Work">
            <textarea
              value={data.scopeOfWork}
              onChange={(e) => updateField("scopeOfWork", e.target.value)}
              placeholder="Detailed description of deliverables, milestones, and expectations..."
              rows={5}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-emerald-500 resize-none"
            />
          </Section>

          <Section title="Timeline">
            <div className="space-y-3">
              {data.timeline.map((item, i) => (
                <div
                  key={item.id}
                  className="grid grid-cols-[100px_100px_1fr_32px] gap-2 items-end"
                >
                  <Input
                    label={i === 0 ? "Phase" : undefined}
                    value={item.phase}
                    onChange={(v) => updateTimeline(item.id, "phase", v)}
                  />
                  <Input
                    label={i === 0 ? "Duration" : undefined}
                    value={item.duration}
                    onChange={(v) => updateTimeline(item.id, "duration", v)}
                  />
                  <Input
                    label={i === 0 ? "Description" : undefined}
                    value={item.description}
                    onChange={(v) => updateTimeline(item.id, "description", v)}
                  />
                  <button
                    onClick={() => removeTimelineItem(item.id)}
                    className="w-8 h-9 flex items-center justify-center text-gray-500 hover:text-red-400"
                  >
                    x
                  </button>
                </div>
              ))}
              <button
                onClick={addTimelineItem}
                className="text-sm text-emerald-400 hover:text-emerald-300"
              >
                + Add phase
              </button>
            </div>
          </Section>

          <Section title="Pricing">
            <div className="space-y-3">
              {data.pricing.map((item, i) => (
                <div
                  key={item.id}
                  className="grid grid-cols-[1fr_120px_32px] gap-2 items-end"
                >
                  <Input
                    label={i === 0 ? "Description" : undefined}
                    value={item.description}
                    onChange={(v) =>
                      updatePricing(item.id, "description", v)
                    }
                  />
                  <Input
                    label={i === 0 ? "Amount" : undefined}
                    type="number"
                    value={String(item.amount)}
                    onChange={(v) =>
                      updatePricing(item.id, "amount", parseFloat(v) || 0)
                    }
                  />
                  <button
                    onClick={() => removePricingItem(item.id)}
                    className="w-8 h-9 flex items-center justify-center text-gray-500 hover:text-red-400"
                  >
                    x
                  </button>
                </div>
              ))}
              <button
                onClick={addPricingItem}
                className="text-sm text-emerald-400 hover:text-emerald-300"
              >
                + Add line item
              </button>
            </div>
          </Section>

          <Section title="Terms & Conditions">
            <textarea
              value={data.terms}
              onChange={(e) => updateField("terms", e.target.value)}
              rows={3}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-emerald-500 resize-none"
            />
          </Section>

          {!pro && (
            <p className="text-xs text-gray-500 text-center">
              {exportsLeft} free export remaining today
            </p>
          )}
        </div>

        {/* RIGHT: Preview */}
        <div className={`${activeTab === "edit" ? "hidden md:block" : ""}`}>
          <div className="sticky top-6">
            <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
              <div ref={previewRef} className="p-10 text-black text-sm">
                {/* Cover section */}
                <div className="border-b-4 border-emerald-600 pb-8 mb-8">
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">
                    {data.proposalTitle || "Project Proposal"}
                  </h1>
                  <p className="text-gray-500 text-sm">
                    Prepared for{" "}
                    <span className="font-semibold text-gray-800">
                      {data.clientCompany || data.clientName || "Client"}
                    </span>
                  </p>
                  <div className="flex justify-between mt-4 text-xs text-gray-400">
                    <span>Date: {data.proposalDate}</span>
                    <span>Valid until: {data.validUntil}</span>
                  </div>
                </div>

                {/* From / To */}
                <div className="grid grid-cols-2 gap-8 mb-8">
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                      From
                    </p>
                    <p className="font-semibold text-gray-900">
                      {data.companyName || "Your Company"}
                    </p>
                    {data.companyEmail && (
                      <p className="text-xs text-gray-500">
                        {data.companyEmail}
                      </p>
                    )}
                    {data.companyPhone && (
                      <p className="text-xs text-gray-500">
                        {data.companyPhone}
                      </p>
                    )}
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                      To
                    </p>
                    <p className="font-semibold text-gray-900">
                      {data.clientName || "Client Name"}
                    </p>
                    {data.clientCompany && (
                      <p className="text-xs text-gray-500">
                        {data.clientCompany}
                      </p>
                    )}
                    {data.clientEmail && (
                      <p className="text-xs text-gray-500">
                        {data.clientEmail}
                      </p>
                    )}
                  </div>
                </div>

                {/* Executive Summary */}
                {data.executiveSummary && (
                  <div className="mb-8">
                    <h2 className="text-lg font-bold text-emerald-700 mb-2">
                      Executive Summary
                    </h2>
                    <p className="text-gray-700 text-sm whitespace-pre-wrap leading-relaxed">
                      {data.executiveSummary}
                    </p>
                  </div>
                )}

                {/* Scope */}
                {data.scopeOfWork && (
                  <div className="mb-8">
                    <h2 className="text-lg font-bold text-emerald-700 mb-2">
                      Scope of Work
                    </h2>
                    <p className="text-gray-700 text-sm whitespace-pre-wrap leading-relaxed">
                      {data.scopeOfWork}
                    </p>
                  </div>
                )}

                {/* Timeline */}
                {data.timeline.some((t) => t.description) && (
                  <div className="mb-8">
                    <h2 className="text-lg font-bold text-emerald-700 mb-3">
                      Timeline
                    </h2>
                    <table className="w-full">
                      <thead>
                        <tr className="border-b-2 border-gray-200">
                          <th className="text-left py-2 text-xs font-semibold text-gray-400 uppercase w-24">
                            Phase
                          </th>
                          <th className="text-left py-2 text-xs font-semibold text-gray-400 uppercase w-24">
                            Duration
                          </th>
                          <th className="text-left py-2 text-xs font-semibold text-gray-400 uppercase">
                            Description
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.timeline.map((item) => (
                          <tr
                            key={item.id}
                            className="border-b border-gray-100"
                          >
                            <td className="py-2 font-medium text-gray-900">
                              {item.phase}
                            </td>
                            <td className="py-2 text-gray-600">
                              {item.duration}
                            </td>
                            <td className="py-2 text-gray-600">
                              {item.description}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* Pricing */}
                <div className="mb-8">
                  <h2 className="text-lg font-bold text-emerald-700 mb-3">
                    Investment
                  </h2>
                  <table className="w-full">
                    <thead>
                      <tr className="border-b-2 border-gray-200">
                        <th className="text-left py-2 text-xs font-semibold text-gray-400 uppercase">
                          Description
                        </th>
                        <th className="text-right py-2 text-xs font-semibold text-gray-400 uppercase w-32">
                          Amount
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.pricing.map((item) => (
                        <tr
                          key={item.id}
                          className="border-b border-gray-100"
                        >
                          <td className="py-2 text-gray-900">
                            {item.description || "—"}
                          </td>
                          <td className="py-2 text-right font-medium text-gray-900">
                            {fmt(item.amount)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className="flex justify-end mt-3 pt-3 border-t-2 border-gray-900">
                    <div className="text-right">
                      <span className="text-sm text-gray-500 mr-4">
                        Total
                      </span>
                      <span className="text-2xl font-bold text-emerald-600">
                        {fmt(totalPrice)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Terms */}
                {data.terms && (
                  <div className="mb-8 pt-6 border-t border-gray-200">
                    <h2 className="text-lg font-bold text-emerald-700 mb-2">
                      Terms & Conditions
                    </h2>
                    <p className="text-gray-600 text-xs whitespace-pre-wrap leading-relaxed">
                      {data.terms}
                    </p>
                  </div>
                )}

                {/* Signature line */}
                <div className="grid grid-cols-2 gap-12 mt-12 pt-6 border-t border-gray-200">
                  <div>
                    <div className="border-b border-gray-300 mb-2 h-12" />
                    <p className="text-xs text-gray-500">
                      {data.companyName || "Provider"} — Signature & Date
                    </p>
                  </div>
                  <div>
                    <div className="border-b border-gray-300 mb-2 h-12" />
                    <p className="text-xs text-gray-500">
                      {data.clientName || "Client"} — Signature & Date
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 mt-12 py-8 px-6 text-center text-sm text-gray-500">
        <p>
          Built by an AI trying to reach $100K in revenue.{" "}
          <a
            href="https://dashboard-mocha-delta-98.vercel.app"
            className="text-emerald-400 hover:underline"
            target="_blank"
          >
            Follow the journey
          </a>
        </p>
        <div className="mt-2 flex justify-center gap-4 text-xs flex-wrap">
          <a href="https://screencraft-two.vercel.app" className="hover:text-white transition">ScreenCraft</a>
          <a href="https://jsonhero-cyan.vercel.app" className="hover:text-white transition">JSONHero</a>
          <a href="https://speedcv-six.vercel.app" className="hover:text-white transition">SpeedCV</a>
          <a href="https://invoicely-eight.vercel.app" className="hover:text-white transition">Invoicely</a>
          <a href="https://qrcraft-sigma.vercel.app" className="hover:text-white transition">QRCraft</a>
          <a href="https://memecraft-gamma.vercel.app" className="hover:text-white transition">MemeCraft</a>
        </div>
      </footer>

      {/* Pro Modal */}
      {showProModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-[#111] border border-white/10 rounded-2xl p-8 max-w-md w-full">
            <h2 className="text-2xl font-bold mb-2">Unlock ProposalForge Pro</h2>
            <p className="text-gray-400 text-sm mb-6">
              One-time payment. Win more clients.
            </p>
            <ul className="space-y-3 mb-6">
              {[
                "Unlimited proposal exports",
                "No watermark on PDFs",
                "Save proposal templates",
                "Multiple currency support",
                "Professional signature blocks",
              ].map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm">
                  <span className="text-emerald-400">+</span> {f}
                </li>
              ))}
            </ul>
            <button
              onClick={handleCheckout}
              disabled={checkingOut}
              className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 py-3 rounded-lg font-semibold hover:opacity-90 transition disabled:opacity-50"
            >
              {checkingOut ? "Redirecting..." : "Get Pro — $29.99"}
            </button>
            {checkoutError && (
              <p className="text-red-400 text-xs mt-2 text-center">
                {checkoutError}
              </p>
            )}
            <button
              onClick={() => setShowProModal(false)}
              className="w-full mt-3 text-sm text-gray-500 hover:text-white transition"
            >
              Maybe later
            </button>
          </div>
        </div>
      )}
    </main>
  );
}

/* ─── reusable components ─── */
function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-4">
      <h3 className="text-sm font-semibold text-gray-300 mb-3">{title}</h3>
      {children}
    </div>
  );
}

function Input({
  label,
  value,
  onChange,
  type = "text",
  cls = "",
}: {
  label?: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  cls?: string;
}) {
  return (
    <div className={cls}>
      {label && (
        <label className="text-xs text-gray-400 mb-1 block">{label}</label>
      )}
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-emerald-500 transition"
      />
    </div>
  );
}
