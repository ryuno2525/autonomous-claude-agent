"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import QRCode from "qrcode";

type QRType = "url" | "text" | "wifi" | "email" | "phone";

interface QRConfig {
  type: QRType;
  content: string;
  // wifi specific
  wifiSsid: string;
  wifiPassword: string;
  wifiEncryption: "WPA" | "WEP" | "nopass";
  // email specific
  emailAddress: string;
  emailSubject: string;
  emailBody: string;
  // colors
  fgColor: string;
  bgColor: string;
  // options
  errorCorrection: "L" | "M" | "Q" | "H";
}

const DEFAULT_CONFIG: QRConfig = {
  type: "url",
  content: "",
  wifiSsid: "",
  wifiPassword: "",
  wifiEncryption: "WPA",
  emailAddress: "",
  emailSubject: "",
  emailBody: "",
  fgColor: "#000000",
  bgColor: "#ffffff",
  errorCorrection: "M",
};

const FREE_DAILY_LIMIT = 5;

function getDownloadsToday(): number {
  if (typeof window === "undefined") return 0;
  const key = `qrcraft_downloads_${new Date().toISOString().split("T")[0]}`;
  return parseInt(localStorage.getItem(key) || "0", 10);
}

function incrementDownloads(): void {
  const key = `qrcraft_downloads_${new Date().toISOString().split("T")[0]}`;
  localStorage.setItem(key, String(getDownloadsToday() + 1));
}

function isPro(): boolean {
  if (typeof window === "undefined") return false;
  return localStorage.getItem("qrcraft_pro") === "true";
}

export default function QRCraft() {
  const [config, setConfig] = useState<QRConfig>(DEFAULT_CONFIG);
  const [qrDataUrl, setQrDataUrl] = useState<string>("");
  const [pro, setPro] = useState(false);
  const [downloadsLeft, setDownloadsLeft] = useState(FREE_DAILY_LIMIT);
  const [showProModal, setShowProModal] = useState(false);
  const [checkingOut, setCheckingOut] = useState(false);
  const [checkoutError, setCheckoutError] = useState("");
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    setPro(isPro());
    setDownloadsLeft(FREE_DAILY_LIMIT - getDownloadsToday());
  }, []);

  const getQRContent = useCallback((): string => {
    switch (config.type) {
      case "url":
      case "text":
      case "phone":
        return config.content;
      case "wifi":
        return `WIFI:T:${config.wifiEncryption};S:${config.wifiSsid};P:${config.wifiPassword};;`;
      case "email":
        return `mailto:${config.emailAddress}?subject=${encodeURIComponent(config.emailSubject)}&body=${encodeURIComponent(config.emailBody)}`;
      default:
        return config.content;
    }
  }, [config]);

  // Generate QR code whenever config changes
  useEffect(() => {
    const content = getQRContent();
    if (!content) {
      setQrDataUrl("");
      return;
    }

    QRCode.toDataURL(content, {
      width: 400,
      margin: 2,
      color: {
        dark: config.fgColor,
        light: config.bgColor,
      },
      errorCorrectionLevel: config.errorCorrection,
    })
      .then(setQrDataUrl)
      .catch(() => setQrDataUrl(""));
  }, [config, getQRContent]);

  const updateConfig = useCallback(
    (field: keyof QRConfig, value: string) => {
      setConfig((prev) => ({ ...prev, [field]: value }));
    },
    []
  );

  const handleDownload = (format: "png" | "svg") => {
    const content = getQRContent();
    if (!content) return;

    if (format === "svg" && !pro) {
      setShowProModal(true);
      return;
    }

    if (!pro && getDownloadsToday() >= FREE_DAILY_LIMIT) {
      setShowProModal(true);
      return;
    }

    if (format === "svg") {
      QRCode.toString(content, {
        type: "svg",
        width: 400,
        margin: 2,
        color: {
          dark: config.fgColor,
          light: config.bgColor,
        },
        errorCorrectionLevel: config.errorCorrection,
      }).then((svg) => {
        const blob = new Blob([svg], { type: "image/svg+xml" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "qrcode.svg";
        a.click();
        URL.revokeObjectURL(url);
      });
    } else {
      QRCode.toDataURL(content, {
        width: 1024,
        margin: 2,
        color: {
          dark: config.fgColor,
          light: config.bgColor,
        },
        errorCorrectionLevel: config.errorCorrection,
      }).then((dataUrl) => {
        const a = document.createElement("a");
        a.href = dataUrl;
        a.download = "qrcode.png";
        a.click();
      });
    }

    if (!pro) {
      incrementDownloads();
      setDownloadsLeft(FREE_DAILY_LIMIT - getDownloadsToday());
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

  const TYPES: { key: QRType; label: string; icon: string }[] = [
    { key: "url", label: "URL", icon: "🔗" },
    { key: "text", label: "Text", icon: "📝" },
    { key: "wifi", label: "WiFi", icon: "📶" },
    { key: "email", label: "Email", icon: "📧" },
    { key: "phone", label: "Phone", icon: "📞" },
  ];

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      {/* Header */}
      <header className="border-b border-white/10 px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center font-bold text-sm">
              Q
            </div>
            <h1 className="text-xl font-bold">QRCraft</h1>
            {pro && (
              <span className="text-xs bg-purple-500/20 text-purple-400 px-2 py-0.5 rounded-full">
                PRO
              </span>
            )}
          </div>
          {!pro && (
            <button
              onClick={() => setShowProModal(true)}
              className="text-sm bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 rounded-lg font-medium hover:opacity-90 transition"
            >
              Upgrade to Pro — $8.99
            </button>
          )}
        </div>
      </header>

      {/* Hero */}
      <div className="text-center py-10 px-6">
        <h2 className="text-4xl font-bold mb-3">
          Beautiful QR Codes in Seconds
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          Generate QR codes for URLs, text, WiFi networks, emails, and phone
          numbers. Custom colors. Instant download. No sign-up.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_360px] gap-8 px-6 pb-16">
        {/* Left: Controls */}
        <div className="space-y-6">
          {/* Type selector */}
          <div className="flex gap-2 flex-wrap">
            {TYPES.map((t) => (
              <button
                key={t.key}
                onClick={() => updateConfig("type", t.key)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                  config.type === t.key
                    ? "bg-purple-500/20 text-purple-300 border border-purple-500/50"
                    : "bg-white/5 text-gray-400 border border-white/10 hover:border-white/20"
                }`}
              >
                {t.icon} {t.label}
              </button>
            ))}
          </div>

          {/* Input fields based on type */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-4">
            {config.type === "url" && (
              <div>
                <label className="text-xs text-gray-400 mb-1 block">
                  Website URL
                </label>
                <input
                  type="url"
                  value={config.content}
                  onChange={(e) => updateConfig("content", e.target.value)}
                  placeholder="https://example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-purple-500 transition"
                />
              </div>
            )}

            {config.type === "text" && (
              <div>
                <label className="text-xs text-gray-400 mb-1 block">
                  Text Content
                </label>
                <textarea
                  value={config.content}
                  onChange={(e) => updateConfig("content", e.target.value)}
                  placeholder="Enter any text..."
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-purple-500 transition resize-none"
                />
              </div>
            )}

            {config.type === "wifi" && (
              <>
                <div>
                  <label className="text-xs text-gray-400 mb-1 block">
                    Network Name (SSID)
                  </label>
                  <input
                    type="text"
                    value={config.wifiSsid}
                    onChange={(e) => updateConfig("wifiSsid", e.target.value)}
                    placeholder="MyWiFiNetwork"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-purple-500 transition"
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-400 mb-1 block">
                    Password
                  </label>
                  <input
                    type="text"
                    value={config.wifiPassword}
                    onChange={(e) =>
                      updateConfig("wifiPassword", e.target.value)
                    }
                    placeholder="password123"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-purple-500 transition"
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-400 mb-1 block">
                    Encryption
                  </label>
                  <select
                    value={config.wifiEncryption}
                    onChange={(e) =>
                      updateConfig("wifiEncryption", e.target.value)
                    }
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-purple-500 transition"
                  >
                    <option value="WPA" className="bg-gray-900">
                      WPA/WPA2
                    </option>
                    <option value="WEP" className="bg-gray-900">
                      WEP
                    </option>
                    <option value="nopass" className="bg-gray-900">
                      None
                    </option>
                  </select>
                </div>
              </>
            )}

            {config.type === "email" && (
              <>
                <div>
                  <label className="text-xs text-gray-400 mb-1 block">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={config.emailAddress}
                    onChange={(e) =>
                      updateConfig("emailAddress", e.target.value)
                    }
                    placeholder="hello@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-purple-500 transition"
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-400 mb-1 block">
                    Subject (optional)
                  </label>
                  <input
                    type="text"
                    value={config.emailSubject}
                    onChange={(e) =>
                      updateConfig("emailSubject", e.target.value)
                    }
                    placeholder="Hello!"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-purple-500 transition"
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-400 mb-1 block">
                    Body (optional)
                  </label>
                  <textarea
                    value={config.emailBody}
                    onChange={(e) => updateConfig("emailBody", e.target.value)}
                    placeholder="Your message..."
                    rows={3}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-purple-500 transition resize-none"
                  />
                </div>
              </>
            )}

            {config.type === "phone" && (
              <div>
                <label className="text-xs text-gray-400 mb-1 block">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={config.content}
                  onChange={(e) => updateConfig("content", e.target.value)}
                  placeholder="+1 234 567 8900"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-purple-500 transition"
                />
              </div>
            )}
          </div>

          {/* Customization */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-5">
            <h3 className="text-sm font-semibold text-gray-300 mb-4">
              Customize
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-gray-400 mb-1 block">
                  Foreground Color
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="color"
                    value={config.fgColor}
                    onChange={(e) => updateConfig("fgColor", e.target.value)}
                    className="w-10 h-10 rounded cursor-pointer border-0"
                  />
                  <input
                    type="text"
                    value={config.fgColor}
                    onChange={(e) => updateConfig("fgColor", e.target.value)}
                    className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm font-mono focus:outline-none focus:border-purple-500"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs text-gray-400 mb-1 block">
                  Background Color
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="color"
                    value={config.bgColor}
                    onChange={(e) => updateConfig("bgColor", e.target.value)}
                    className="w-10 h-10 rounded cursor-pointer border-0"
                  />
                  <input
                    type="text"
                    value={config.bgColor}
                    onChange={(e) => updateConfig("bgColor", e.target.value)}
                    className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm font-mono focus:outline-none focus:border-purple-500"
                  />
                </div>
              </div>
            </div>
            <div className="mt-4">
              <label className="text-xs text-gray-400 mb-1 block">
                Error Correction Level
              </label>
              <div className="flex gap-2">
                {(["L", "M", "Q", "H"] as const).map((level) => (
                  <button
                    key={level}
                    onClick={() => updateConfig("errorCorrection", level)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                      config.errorCorrection === level
                        ? "bg-purple-500/20 text-purple-300 border border-purple-500/50"
                        : "bg-white/5 text-gray-400 border border-white/10"
                    }`}
                  >
                    {level}
                    <span className="text-xs text-gray-500 ml-1">
                      {level === "L"
                        ? "7%"
                        : level === "M"
                          ? "15%"
                          : level === "Q"
                            ? "25%"
                            : "30%"}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right: Preview & Download */}
        <div className="space-y-4">
          <div className="sticky top-6">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col items-center">
              {qrDataUrl ? (
                <img
                  src={qrDataUrl}
                  alt="Generated QR Code"
                  className="w-full max-w-[280px] rounded-lg"
                />
              ) : (
                <div className="w-[280px] h-[280px] bg-white/5 rounded-lg flex items-center justify-center text-gray-500 text-sm">
                  Enter content to generate
                </div>
              )}

              <canvas ref={canvasRef} className="hidden" />

              <div className="w-full mt-6 space-y-2">
                <button
                  onClick={() => handleDownload("png")}
                  disabled={!qrDataUrl}
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 py-3 rounded-lg font-semibold hover:opacity-90 transition disabled:opacity-30"
                >
                  Download PNG
                </button>
                <button
                  onClick={() => handleDownload("svg")}
                  disabled={!qrDataUrl}
                  className="w-full bg-white/10 py-3 rounded-lg font-medium hover:bg-white/15 transition disabled:opacity-30 flex items-center justify-center gap-2"
                >
                  Download SVG
                  {!pro && (
                    <span className="text-xs bg-purple-500/30 text-purple-300 px-2 py-0.5 rounded-full">
                      PRO
                    </span>
                  )}
                </button>
              </div>

              {!pro && (
                <p className="text-xs text-gray-500 mt-3">
                  {downloadsLeft} free downloads remaining today
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-6 text-center text-sm text-gray-500">
        <p>
          Built by an AI trying to reach $100K in revenue.{" "}
          <a
            href="https://dashboard-mocha-delta-98.vercel.app"
            className="text-purple-400 hover:underline"
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
          <a
            href="https://invoicely-eight.vercel.app"
            className="hover:text-white transition"
          >
            Invoicely
          </a>
        </div>
      </footer>

      {/* Pro Modal */}
      {showProModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-[#111] border border-white/10 rounded-2xl p-8 max-w-md w-full">
            <h2 className="text-2xl font-bold mb-2">Unlock QRCraft Pro</h2>
            <p className="text-gray-400 text-sm mb-6">
              One-time payment. Yours forever.
            </p>
            <ul className="space-y-3 mb-6">
              {[
                "Unlimited QR code downloads",
                "SVG export (vector, scalable)",
                "Custom colors and styles",
                "High-resolution exports",
                "Priority support",
              ].map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm">
                  <span className="text-purple-400">+</span> {f}
                </li>
              ))}
            </ul>
            <button
              onClick={handleCheckout}
              disabled={checkingOut}
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 py-3 rounded-lg font-semibold hover:opacity-90 transition disabled:opacity-50"
            >
              {checkingOut ? "Redirecting..." : "Get Pro — $8.99"}
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
