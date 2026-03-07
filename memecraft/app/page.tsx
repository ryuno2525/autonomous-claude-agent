"use client";

import { useState, useEffect, useRef, useCallback } from "react";

interface MemeConfig {
  topText: string;
  bottomText: string;
  fontSize: number;
  fontFamily: string;
  textColor: string;
  strokeColor: string;
  strokeWidth: number;
}

const DEFAULT_CONFIG: MemeConfig = {
  topText: "",
  bottomText: "",
  fontSize: 48,
  fontFamily: "Impact",
  textColor: "#ffffff",
  strokeColor: "#000000",
  strokeWidth: 3,
};

const FONTS = ["Impact", "Arial Black", "Comic Sans MS", "Helvetica", "Georgia"];

const FREE_DAILY_LIMIT = 3;

function getDownloadsToday(): number {
  if (typeof window === "undefined") return 0;
  const key = `memecraft_downloads_${new Date().toISOString().split("T")[0]}`;
  return parseInt(localStorage.getItem(key) || "0", 10);
}

function incrementDownloads(): void {
  const key = `memecraft_downloads_${new Date().toISOString().split("T")[0]}`;
  localStorage.setItem(key, String(getDownloadsToday() + 1));
}

function isPro(): boolean {
  if (typeof window === "undefined") return false;
  return localStorage.getItem("memecraft_pro") === "true";
}

export default function MemeCraft() {
  const [config, setConfig] = useState<MemeConfig>(DEFAULT_CONFIG);
  const [image, setImage] = useState<HTMLImageElement | null>(null);
  const [pro, setPro] = useState(false);
  const [downloadsLeft, setDownloadsLeft] = useState(FREE_DAILY_LIMIT);
  const [showProModal, setShowProModal] = useState(false);
  const [checkingOut, setCheckingOut] = useState(false);
  const [checkoutError, setCheckoutError] = useState("");
  const [dragOver, setDragOver] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setPro(isPro());
    setDownloadsLeft(FREE_DAILY_LIMIT - getDownloadsToday());
  }, []);

  const drawMeme = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas || !image) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas to image dimensions (max 800px wide)
    const maxW = 800;
    const scale = image.width > maxW ? maxW / image.width : 1;
    canvas.width = image.width * scale;
    canvas.height = image.height * scale;

    // Draw image
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

    // Text settings
    const fontSize = config.fontSize * scale;
    ctx.font = `bold ${fontSize}px ${config.fontFamily}`;
    ctx.textAlign = "center";
    ctx.fillStyle = config.textColor;
    ctx.strokeStyle = config.strokeColor;
    ctx.lineWidth = config.strokeWidth * scale;
    ctx.lineJoin = "round";

    // Draw top text
    if (config.topText) {
      const y = fontSize + 10 * scale;
      ctx.strokeText(config.topText.toUpperCase(), canvas.width / 2, y);
      ctx.fillText(config.topText.toUpperCase(), canvas.width / 2, y);
    }

    // Draw bottom text
    if (config.bottomText) {
      const y = canvas.height - 15 * scale;
      ctx.strokeText(config.bottomText.toUpperCase(), canvas.width / 2, y);
      ctx.fillText(config.bottomText.toUpperCase(), canvas.width / 2, y);
    }

    // Watermark for free users
    if (!isPro()) {
      ctx.font = `${14 * scale}px Arial`;
      ctx.fillStyle = "rgba(255,255,255,0.6)";
      ctx.strokeStyle = "rgba(0,0,0,0.4)";
      ctx.lineWidth = 2 * scale;
      ctx.textAlign = "right";
      const wmText = "memecraft.app";
      ctx.strokeText(wmText, canvas.width - 10 * scale, canvas.height - 10 * scale);
      ctx.fillText(wmText, canvas.width - 10 * scale, canvas.height - 10 * scale);
    }
  }, [image, config]);

  useEffect(() => {
    drawMeme();
  }, [drawMeme]);

  const handleImageUpload = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => setImage(img);
      img.src = e.target?.result as string;
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      handleImageUpload(file);
    }
  };

  const handleDownload = () => {
    if (!pro && getDownloadsToday() >= FREE_DAILY_LIMIT) {
      setShowProModal(true);
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;

    const link = document.createElement("a");
    link.download = "meme.png";
    link.href = canvas.toDataURL("image/png");
    link.click();

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

  const updateConfig = (field: keyof MemeConfig, value: string | number) => {
    setConfig((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      {/* Header */}
      <header className="border-b border-white/10 px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center font-bold text-sm">
              M
            </div>
            <h1 className="text-xl font-bold">MemeCraft</h1>
            {pro && (
              <span className="text-xs bg-yellow-500/20 text-yellow-400 px-2 py-0.5 rounded-full">
                PRO
              </span>
            )}
          </div>
          <div className="flex items-center gap-3">
            {!pro && (
              <button
                onClick={() => setShowProModal(true)}
                className="text-sm bg-gradient-to-r from-yellow-500 to-orange-500 px-4 py-2 rounded-lg font-medium hover:opacity-90 transition text-black"
              >
                Go Pro — $6.99
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Hero */}
      <div className="text-center py-8 px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          Create Memes in Seconds
        </h2>
        <p className="text-gray-400 max-w-lg mx-auto">
          Upload an image, add your text, and download. No sign-up. No ads.
          Just memes.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-[340px_1fr] gap-6 px-6 pb-16">
        {/* Left: Controls */}
        <div className="space-y-4">
          {/* Upload */}
          <div
            onDragOver={(e) => {
              e.preventDefault();
              setDragOver(true);
            }}
            onDragLeave={() => setDragOver(false)}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
            className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition ${
              dragOver
                ? "border-yellow-400 bg-yellow-500/10"
                : "border-white/20 hover:border-white/40"
            }`}
          >
            <p className="text-gray-400 text-sm">
              {image ? "Click or drop to change image" : "Drop an image here or click to upload"}
            </p>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) handleImageUpload(file);
              }}
            />
          </div>

          {/* Text inputs */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-3">
            <div>
              <label className="text-xs text-gray-400 mb-1 block">
                Top Text
              </label>
              <input
                type="text"
                value={config.topText}
                onChange={(e) => updateConfig("topText", e.target.value)}
                placeholder="TOP TEXT"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-yellow-500 transition"
              />
            </div>
            <div>
              <label className="text-xs text-gray-400 mb-1 block">
                Bottom Text
              </label>
              <input
                type="text"
                value={config.bottomText}
                onChange={(e) => updateConfig("bottomText", e.target.value)}
                placeholder="BOTTOM TEXT"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-yellow-500 transition"
              />
            </div>
          </div>

          {/* Style */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-3">
            <h3 className="text-sm font-semibold text-gray-300">Style</h3>
            <div>
              <label className="text-xs text-gray-400 mb-1 block">
                Font Size: {config.fontSize}px
              </label>
              <input
                type="range"
                min="20"
                max="100"
                value={config.fontSize}
                onChange={(e) =>
                  updateConfig("fontSize", parseInt(e.target.value))
                }
                className="w-full accent-yellow-500"
              />
            </div>
            <div>
              <label className="text-xs text-gray-400 mb-1 block">Font</label>
              <select
                value={config.fontFamily}
                onChange={(e) => updateConfig("fontFamily", e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-yellow-500"
              >
                {FONTS.map((f) => (
                  <option key={f} value={f} className="bg-gray-900">
                    {f}
                  </option>
                ))}
              </select>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs text-gray-400 mb-1 block">
                  Text Color
                </label>
                <input
                  type="color"
                  value={config.textColor}
                  onChange={(e) => updateConfig("textColor", e.target.value)}
                  className="w-full h-10 rounded cursor-pointer border-0"
                />
              </div>
              <div>
                <label className="text-xs text-gray-400 mb-1 block">
                  Outline Color
                </label>
                <input
                  type="color"
                  value={config.strokeColor}
                  onChange={(e) => updateConfig("strokeColor", e.target.value)}
                  className="w-full h-10 rounded cursor-pointer border-0"
                />
              </div>
            </div>
          </div>

          {/* Download */}
          <button
            onClick={handleDownload}
            disabled={!image}
            className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-black py-3 rounded-xl font-semibold hover:opacity-90 transition disabled:opacity-30"
          >
            Download Meme
          </button>
          {!pro && (
            <p className="text-xs text-gray-500 text-center">
              {downloadsLeft} free downloads remaining today
              {!pro && " (with watermark)"}
            </p>
          )}
        </div>

        {/* Right: Preview */}
        <div className="flex items-start justify-center">
          {image ? (
            <canvas
              ref={canvasRef}
              className="max-w-full rounded-xl shadow-2xl border border-white/10"
            />
          ) : (
            <div className="w-full aspect-video bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-gray-500">
              Upload an image to get started
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-6 text-center text-sm text-gray-500">
        <p>
          Built by an AI trying to reach $100K in revenue.{" "}
          <a
            href="https://dashboard-mocha-delta-98.vercel.app"
            className="text-yellow-400 hover:underline"
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
        </div>
      </footer>

      {/* Pro Modal */}
      {showProModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-[#111] border border-white/10 rounded-2xl p-8 max-w-md w-full">
            <h2 className="text-2xl font-bold mb-2">Unlock MemeCraft Pro</h2>
            <p className="text-gray-400 text-sm mb-6">
              One-time payment. Yours forever.
            </p>
            <ul className="space-y-3 mb-6">
              {[
                "No watermark on downloads",
                "Unlimited meme downloads",
                "All fonts and customization",
                "High-resolution exports",
              ].map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm">
                  <span className="text-yellow-400">+</span> {f}
                </li>
              ))}
            </ul>
            <button
              onClick={handleCheckout}
              disabled={checkingOut}
              className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-black py-3 rounded-lg font-semibold hover:opacity-90 transition disabled:opacity-50"
            >
              {checkingOut ? "Redirecting..." : "Get Pro — $6.99"}
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
