"use client";

import { useState, useEffect, useRef, useCallback } from "react";

/* ─── types ─── */
interface LineItem {
  id: string;
  description: string;
  quantity: number;
  rate: number;
}

interface InvoiceData {
  // Business
  businessName: string;
  businessEmail: string;
  businessAddress: string;
  businessPhone: string;
  // Client
  clientName: string;
  clientEmail: string;
  clientAddress: string;
  // Invoice details
  invoiceNumber: string;
  invoiceDate: string;
  dueDate: string;
  // Items
  items: LineItem[];
  // Extras
  taxRate: number;
  discountPercent: number;
  notes: string;
  currency: string;
}

const CURRENCIES: Record<string, string> = {
  USD: "$",
  EUR: "€",
  GBP: "£",
  JPY: "¥",
  CAD: "C$",
  AUD: "A$",
};

const DEFAULT_DATA: InvoiceData = {
  businessName: "",
  businessEmail: "",
  businessAddress: "",
  businessPhone: "",
  clientName: "",
  clientEmail: "",
  clientAddress: "",
  invoiceNumber: "INV-001",
  invoiceDate: new Date().toISOString().split("T")[0],
  dueDate: new Date(Date.now() + 30 * 86400000).toISOString().split("T")[0],
  items: [{ id: crypto.randomUUID(), description: "", quantity: 1, rate: 0 }],
  taxRate: 0,
  discountPercent: 0,
  notes: "",
  currency: "USD",
};

const FREE_DAILY_LIMIT = 2;

function getExportsToday(): number {
  const key = `invoicely_exports_${new Date().toISOString().split("T")[0]}`;
  return parseInt(localStorage.getItem(key) || "0", 10);
}

function incrementExports(): void {
  const key = `invoicely_exports_${new Date().toISOString().split("T")[0]}`;
  localStorage.setItem(key, String(getExportsToday() + 1));
}

function isPro(): boolean {
  return localStorage.getItem("invoicely_pro") === "true";
}

/* ─── main component ─── */
export default function Invoicely() {
  const [data, setData] = useState<InvoiceData>(DEFAULT_DATA);
  const [activeTab, setActiveTab] = useState<"edit" | "preview">("edit");
  const [showProModal, setShowProModal] = useState(false);
  const [checkingOut, setCheckingOut] = useState(false);
  const [checkoutError, setCheckoutError] = useState("");
  const [pro, setPro] = useState(false);
  const [exportsLeft, setExportsLeft] = useState(FREE_DAILY_LIMIT);
  const previewRef = useRef<HTMLDivElement>(null);

  // Load saved data & pro status
  useEffect(() => {
    setPro(isPro());
    setExportsLeft(FREE_DAILY_LIMIT - getExportsToday());
    const saved = localStorage.getItem("invoicely_data");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setData({ ...DEFAULT_DATA, ...parsed });
      } catch {
        /* ignore */
      }
    }
  }, []);

  // Auto-save
  useEffect(() => {
    localStorage.setItem("invoicely_data", JSON.stringify(data));
  }, [data]);

  const currencySymbol = CURRENCIES[data.currency] || "$";

  const subtotal = data.items.reduce(
    (sum, item) => sum + item.quantity * item.rate,
    0
  );
  const discount = subtotal * (data.discountPercent / 100);
  const taxable = subtotal - discount;
  const tax = taxable * (data.taxRate / 100);
  const total = taxable + tax;

  const updateField = useCallback(
    (field: keyof InvoiceData, value: string | number) => {
      setData((prev) => ({ ...prev, [field]: value }));
    },
    []
  );

  const updateItem = useCallback(
    (id: string, field: keyof LineItem, value: string | number) => {
      setData((prev) => ({
        ...prev,
        items: prev.items.map((item) =>
          item.id === id ? { ...item, [field]: value } : item
        ),
      }));
    },
    []
  );

  const addItem = useCallback(() => {
    setData((prev) => ({
      ...prev,
      items: [
        ...prev.items,
        { id: crypto.randomUUID(), description: "", quantity: 1, rate: 0 },
      ],
    }));
  }, []);

  const removeItem = useCallback(
    (id: string) => {
      if (data.items.length <= 1) return;
      setData((prev) => ({
        ...prev,
        items: prev.items.filter((item) => item.id !== id),
      }));
    },
    [data.items.length]
  );

  const handleExportPDF = async () => {
    if (!pro && getExportsToday() >= FREE_DAILY_LIMIT) {
      setShowProModal(true);
      return;
    }

    const el = previewRef.current;
    if (!el) return;

    setActiveTab("preview");

    // Small delay to let the preview render
    await new Promise((r) => setTimeout(r, 100));

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

    // Watermark for free users
    if (!pro) {
      const pages = pdf.getNumberOfPages();
      for (let i = 1; i <= pages; i++) {
        pdf.setPage(i);
        pdf.setFontSize(40);
        pdf.setTextColor(200, 200, 200);
        pdf.text("Invoicely Free", pageWidth / 2, pageHeight / 2, {
          align: "center",
          angle: 45,
        });
      }
    }

    pdf.save(`${data.invoiceNumber || "invoice"}.pdf`);
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
      if (json.url) {
        window.location.href = json.url;
      } else {
        setCheckoutError(json.error || "Failed to create checkout session");
      }
    } catch {
      setCheckoutError("Network error. Please try again.");
    } finally {
      setCheckingOut(false);
    }
  };

  const fmt = (n: number) =>
    `${currencySymbol}${n.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      {/* Header */}
      <header className="border-b border-white/10 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center font-bold text-sm">
              I
            </div>
            <h1 className="text-xl font-bold">Invoicely</h1>
            {pro && (
              <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded-full">
                PRO
              </span>
            )}
          </div>
          <div className="flex items-center gap-3">
            {!pro && (
              <button
                onClick={() => setShowProModal(true)}
                className="text-sm bg-gradient-to-r from-blue-500 to-cyan-500 px-4 py-2 rounded-lg font-medium hover:opacity-90 transition"
              >
                Upgrade to Pro — $12.99
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

      {/* Mobile tab switch */}
      <div className="md:hidden flex border-b border-white/10">
        <button
          onClick={() => setActiveTab("edit")}
          className={`flex-1 py-3 text-sm font-medium ${activeTab === "edit" ? "text-blue-400 border-b-2 border-blue-400" : "text-gray-500"}`}
        >
          Edit
        </button>
        <button
          onClick={() => setActiveTab("preview")}
          className={`flex-1 py-3 text-sm font-medium ${activeTab === "preview" ? "text-blue-400 border-b-2 border-blue-400" : "text-gray-500"}`}
        >
          Preview
        </button>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-0 md:gap-6 p-4 md:p-6">
        {/* LEFT: Form */}
        <div
          className={`space-y-6 ${activeTab === "preview" ? "hidden md:block" : ""}`}
        >
          {/* Business Info */}
          <Section title="Your Business">
            <div className="grid grid-cols-2 gap-3">
              <Input
                label="Business Name"
                value={data.businessName}
                onChange={(v) => updateField("businessName", v)}
                className="col-span-2"
              />
              <Input
                label="Email"
                value={data.businessEmail}
                onChange={(v) => updateField("businessEmail", v)}
              />
              <Input
                label="Phone"
                value={data.businessPhone}
                onChange={(v) => updateField("businessPhone", v)}
              />
              <Input
                label="Address"
                value={data.businessAddress}
                onChange={(v) => updateField("businessAddress", v)}
                className="col-span-2"
              />
            </div>
          </Section>

          {/* Client Info */}
          <Section title="Bill To">
            <div className="grid grid-cols-2 gap-3">
              <Input
                label="Client Name"
                value={data.clientName}
                onChange={(v) => updateField("clientName", v)}
                className="col-span-2"
              />
              <Input
                label="Client Email"
                value={data.clientEmail}
                onChange={(v) => updateField("clientEmail", v)}
              />
              <Input
                label="Client Address"
                value={data.clientAddress}
                onChange={(v) => updateField("clientAddress", v)}
              />
            </div>
          </Section>

          {/* Invoice Details */}
          <Section title="Invoice Details">
            <div className="grid grid-cols-3 gap-3">
              <Input
                label="Invoice #"
                value={data.invoiceNumber}
                onChange={(v) => updateField("invoiceNumber", v)}
              />
              <Input
                label="Date"
                type="date"
                value={data.invoiceDate}
                onChange={(v) => updateField("invoiceDate", v)}
              />
              <Input
                label="Due Date"
                type="date"
                value={data.dueDate}
                onChange={(v) => updateField("dueDate", v)}
              />
              <div>
                <label className="text-xs text-gray-400 mb-1 block">
                  Currency
                </label>
                <select
                  value={data.currency}
                  onChange={(e) => updateField("currency", e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
                >
                  {Object.keys(CURRENCIES).map((c) => (
                    <option key={c} value={c} className="bg-gray-900">
                      {c} ({CURRENCIES[c]})
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </Section>

          {/* Line Items */}
          <Section title="Line Items">
            <div className="space-y-3">
              {data.items.map((item, i) => (
                <div
                  key={item.id}
                  className="grid grid-cols-[1fr_80px_100px_32px] gap-2 items-end"
                >
                  <Input
                    label={i === 0 ? "Description" : undefined}
                    value={item.description}
                    onChange={(v) => updateItem(item.id, "description", v)}
                  />
                  <Input
                    label={i === 0 ? "Qty" : undefined}
                    type="number"
                    value={String(item.quantity)}
                    onChange={(v) =>
                      updateItem(item.id, "quantity", parseFloat(v) || 0)
                    }
                  />
                  <Input
                    label={i === 0 ? "Rate" : undefined}
                    type="number"
                    value={String(item.rate)}
                    onChange={(v) =>
                      updateItem(item.id, "rate", parseFloat(v) || 0)
                    }
                  />
                  <button
                    onClick={() => removeItem(item.id)}
                    className="w-8 h-9 flex items-center justify-center text-gray-500 hover:text-red-400 transition"
                    title="Remove"
                  >
                    x
                  </button>
                </div>
              ))}
              <button
                onClick={addItem}
                className="text-sm text-blue-400 hover:text-blue-300 transition"
              >
                + Add line item
              </button>
            </div>
          </Section>

          {/* Tax & Discount */}
          <Section title="Tax & Discount">
            <div className="grid grid-cols-2 gap-3">
              <Input
                label="Tax Rate (%)"
                type="number"
                value={String(data.taxRate)}
                onChange={(v) =>
                  updateField("taxRate", parseFloat(v) || 0)
                }
              />
              <Input
                label="Discount (%)"
                type="number"
                value={String(data.discountPercent)}
                onChange={(v) =>
                  updateField("discountPercent", parseFloat(v) || 0)
                }
              />
            </div>
          </Section>

          {/* Notes */}
          <Section title="Notes">
            <textarea
              value={data.notes}
              onChange={(e) => updateField("notes", e.target.value)}
              placeholder="Payment terms, thank you message, etc."
              rows={3}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-500 resize-none"
            />
          </Section>

          {!pro && (
            <p className="text-xs text-gray-500 text-center">
              {exportsLeft} free exports remaining today
            </p>
          )}
        </div>

        {/* RIGHT: Preview */}
        <div
          className={`${activeTab === "edit" ? "hidden md:block" : ""}`}
        >
          <div className="sticky top-6">
            <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
              <div ref={previewRef} className="p-8 text-black text-sm">
                {/* Invoice Header */}
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      {data.businessName || "Your Business"}
                    </h2>
                    {data.businessEmail && (
                      <p className="text-gray-500 text-xs mt-1">
                        {data.businessEmail}
                      </p>
                    )}
                    {data.businessPhone && (
                      <p className="text-gray-500 text-xs">
                        {data.businessPhone}
                      </p>
                    )}
                    {data.businessAddress && (
                      <p className="text-gray-500 text-xs">
                        {data.businessAddress}
                      </p>
                    )}
                  </div>
                  <div className="text-right">
                    <h3 className="text-3xl font-bold text-blue-600">
                      INVOICE
                    </h3>
                    <p className="text-gray-500 mt-1">
                      {data.invoiceNumber}
                    </p>
                  </div>
                </div>

                {/* Dates & Client */}
                <div className="grid grid-cols-2 gap-8 mb-8">
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
                      Bill To
                    </p>
                    <p className="font-semibold text-gray-900">
                      {data.clientName || "Client Name"}
                    </p>
                    {data.clientEmail && (
                      <p className="text-gray-500 text-xs">
                        {data.clientEmail}
                      </p>
                    )}
                    {data.clientAddress && (
                      <p className="text-gray-500 text-xs">
                        {data.clientAddress}
                      </p>
                    )}
                  </div>
                  <div className="text-right">
                    <div className="mb-2">
                      <p className="text-xs text-gray-400">Invoice Date</p>
                      <p className="font-medium text-gray-900">
                        {data.invoiceDate}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Due Date</p>
                      <p className="font-medium text-gray-900">
                        {data.dueDate}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Line Items Table */}
                <table className="w-full mb-6">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-2 text-xs font-semibold text-gray-400 uppercase">
                        Description
                      </th>
                      <th className="text-right py-2 text-xs font-semibold text-gray-400 uppercase w-16">
                        Qty
                      </th>
                      <th className="text-right py-2 text-xs font-semibold text-gray-400 uppercase w-24">
                        Rate
                      </th>
                      <th className="text-right py-2 text-xs font-semibold text-gray-400 uppercase w-24">
                        Amount
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.items.map((item) => (
                      <tr key={item.id} className="border-b border-gray-100">
                        <td className="py-3 text-gray-900">
                          {item.description || "—"}
                        </td>
                        <td className="py-3 text-right text-gray-600">
                          {item.quantity}
                        </td>
                        <td className="py-3 text-right text-gray-600">
                          {fmt(item.rate)}
                        </td>
                        <td className="py-3 text-right font-medium text-gray-900">
                          {fmt(item.quantity * item.rate)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                {/* Totals */}
                <div className="flex justify-end">
                  <div className="w-64">
                    <div className="flex justify-between py-1">
                      <span className="text-gray-500">Subtotal</span>
                      <span className="text-gray-900">{fmt(subtotal)}</span>
                    </div>
                    {data.discountPercent > 0 && (
                      <div className="flex justify-between py-1">
                        <span className="text-gray-500">
                          Discount ({data.discountPercent}%)
                        </span>
                        <span className="text-red-500">-{fmt(discount)}</span>
                      </div>
                    )}
                    {data.taxRate > 0 && (
                      <div className="flex justify-between py-1">
                        <span className="text-gray-500">
                          Tax ({data.taxRate}%)
                        </span>
                        <span className="text-gray-900">{fmt(tax)}</span>
                      </div>
                    )}
                    <div className="flex justify-between py-2 border-t-2 border-gray-900 mt-2">
                      <span className="font-bold text-gray-900">Total</span>
                      <span className="font-bold text-xl text-blue-600">
                        {fmt(total)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Notes */}
                {data.notes && (
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <p className="text-xs font-semibold text-gray-400 uppercase mb-1">
                      Notes
                    </p>
                    <p className="text-gray-600 text-xs whitespace-pre-wrap">
                      {data.notes}
                    </p>
                  </div>
                )}
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
            className="text-blue-400 hover:underline"
            target="_blank"
          >
            Follow the journey
          </a>
        </p>
        <div className="mt-2 flex justify-center gap-4 text-xs">
          <a
            href="https://screencraft-two.vercel.app"
            className="hover:text-white transition"
          >
            ScreenCraft
          </a>
          <a
            href="https://jsonhero-cyan.vercel.app"
            className="hover:text-white transition"
          >
            JSONHero
          </a>
          <a
            href="https://speedcv-six.vercel.app"
            className="hover:text-white transition"
          >
            SpeedCV
          </a>
        </div>
      </footer>

      {/* Pro Modal */}
      {showProModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-[#111] border border-white/10 rounded-2xl p-8 max-w-md w-full">
            <h2 className="text-2xl font-bold mb-2">Unlock Invoicely Pro</h2>
            <p className="text-gray-400 text-sm mb-6">
              One-time payment. Yours forever.
            </p>
            <ul className="space-y-3 mb-6">
              {[
                "Unlimited invoice exports",
                "No watermark on PDFs",
                "Save invoice templates",
                "Multiple currency support",
                "Priority support",
              ].map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm">
                  <span className="text-blue-400">+</span> {f}
                </li>
              ))}
            </ul>
            <button
              onClick={handleCheckout}
              disabled={checkingOut}
              className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 py-3 rounded-lg font-semibold hover:opacity-90 transition disabled:opacity-50"
            >
              {checkingOut ? "Redirecting..." : "Get Pro — $12.99"}
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
  className = "",
}: {
  label?: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      {label && (
        <label className="text-xs text-gray-400 mb-1 block">{label}</label>
      )}
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-500 transition"
      />
    </div>
  );
}
