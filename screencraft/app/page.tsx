"use client";

import { useState, useRef, useCallback, useEffect } from "react";

const GRADIENTS = [
  { name: "Purple Haze", value: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" },
  { name: "Ocean", value: "linear-gradient(135deg, #2E3192 0%, #1BFFFF 100%)" },
  { name: "Sunset", value: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)" },
  { name: "Forest", value: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)" },
  { name: "Midnight", value: "linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)" },
  { name: "Fire", value: "linear-gradient(135deg, #f12711 0%, #f5af19 100%)" },
  { name: "Sky", value: "linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)" },
  { name: "Slate", value: "linear-gradient(135deg, #2c3e50 0%, #4ca1af 100%)" },
  { name: "Rose", value: "linear-gradient(135deg, #ee9ca7 0%, #ffdde1 100%)" },
  { name: "Dark", value: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)" },
  { name: "Peach", value: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)" },
  { name: "Noir", value: "linear-gradient(135deg, #000000 0%, #434343 100%)" },
];

const PRO_GRADIENTS = [
  { name: "Aurora", value: "linear-gradient(135deg, #00c6fb 0%, #005bea 50%, #a855f7 100%)", pro: true },
  { name: "Candy", value: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)", pro: true },
  { name: "Emerald", value: "linear-gradient(135deg, #0cebeb 0%, #20e3b2 50%, #29ffc6 100%)", pro: true },
  { name: "Cosmic", value: "linear-gradient(135deg, #ff0844 0%, #ffb199 50%, #667eea 100%)", pro: true },
];

const SOLID_COLORS = [
  { name: "White", value: "#ffffff" },
  { name: "Light Gray", value: "#f5f5f5" },
  { name: "Black", value: "#000000" },
  { name: "Navy", value: "#1e293b" },
];

type BackgroundOption = { name: string; value: string; pro?: boolean };

export default function Home() {
  const [image, setImage] = useState<string | null>(null);
  const [background, setBackground] = useState<BackgroundOption>(GRADIENTS[0]);
  const [padding, setPadding] = useState(64);
  const [borderRadius, setBorderRadius] = useState(12);
  const [shadow, setShadow] = useState(true);
  const [isPro, setIsPro] = useState(false);
  const [exportsToday, setExportsToday] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [showProModal, setShowProModal] = useState(false);
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const today = new Date().toDateString();
    const stored = localStorage.getItem("screencraft_exports");
    if (stored) {
      const data = JSON.parse(stored);
      if (data.date === today) {
        setExportsToday(data.count);
      }
    }
    const pro = localStorage.getItem("screencraft_pro");
    if (pro === "true") setIsPro(true);
  }, []);

  const handleFile = useCallback((file: File) => {
    if (!file.type.startsWith("image/")) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        setImageSize({ width: img.width, height: img.height });
        setImage(e.target?.result as string);
      };
      img.src = e.target?.result as string;
    };
    reader.readAsDataURL(file);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);
      const file = e.dataTransfer.files[0];
      if (file) handleFile(file);
    },
    [handleFile]
  );

  const handlePaste = useCallback(
    (e: ClipboardEvent) => {
      const items = e.clipboardData?.items;
      if (!items) return;
      for (const item of items) {
        if (item.type.startsWith("image/")) {
          const file = item.getAsFile();
          if (file) handleFile(file);
          break;
        }
      }
    },
    [handleFile]
  );

  useEffect(() => {
    document.addEventListener("paste", handlePaste);
    return () => document.removeEventListener("paste", handlePaste);
  }, [handlePaste]);

  const renderToCanvas = useCallback((): Promise<HTMLCanvasElement> => {
    return new Promise((resolve) => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d")!;
      const img = new Image();
      img.onload = () => {
        const scale = 2;
        const pad = padding * scale;
        const w = img.width * scale + pad * 2;
        const h = img.height * scale + pad * 2;
        canvas.width = w;
        canvas.height = h;

        // Draw background
        if (background.value.startsWith("linear-gradient")) {
          const colors = background.value.match(/#[a-fA-F0-9]{6}/g) || ["#667eea", "#764ba2"];
          const gradient = ctx.createLinearGradient(0, 0, w, h);
          colors.forEach((color, i) => {
            gradient.addColorStop(i / (colors.length - 1), color);
          });
          ctx.fillStyle = gradient;
        } else {
          ctx.fillStyle = background.value;
        }
        ctx.fillRect(0, 0, w, h);

        // Draw shadow
        if (shadow) {
          ctx.shadowColor = "rgba(0, 0, 0, 0.3)";
          ctx.shadowBlur = 40 * scale;
          ctx.shadowOffsetX = 0;
          ctx.shadowOffsetY = 10 * scale;
        }

        // Draw rounded rect clip for image
        const imgX = pad;
        const imgY = pad;
        const imgW = img.width * scale;
        const imgH = img.height * scale;
        const r = borderRadius * scale;

        ctx.beginPath();
        ctx.moveTo(imgX + r, imgY);
        ctx.lineTo(imgX + imgW - r, imgY);
        ctx.quadraticCurveTo(imgX + imgW, imgY, imgX + imgW, imgY + r);
        ctx.lineTo(imgX + imgW, imgY + imgH - r);
        ctx.quadraticCurveTo(imgX + imgW, imgY + imgH, imgX + imgW - r, imgY + imgH);
        ctx.lineTo(imgX + r, imgY + imgH);
        ctx.quadraticCurveTo(imgX, imgY + imgH, imgX, imgY + imgH - r);
        ctx.lineTo(imgX, imgY + r);
        ctx.quadraticCurveTo(imgX, imgY, imgX + r, imgY);
        ctx.closePath();
        ctx.clip();

        ctx.drawImage(img, imgX, imgY, imgW, imgH);

        // Reset clip and shadow for watermark
        ctx.restore();

        // Watermark for free users
        if (!isPro) {
          const wCanvas = document.createElement("canvas");
          wCanvas.width = w;
          wCanvas.height = h;
          const wCtx = wCanvas.getContext("2d")!;
          wCtx.drawImage(canvas, 0, 0);
          wCtx.font = `${14 * scale}px sans-serif`;
          wCtx.fillStyle = "rgba(255, 255, 255, 0.4)";
          wCtx.textAlign = "right";
          wCtx.fillText("screencraft.app", w - 20 * scale, h - 16 * scale);
          resolve(wCanvas);
          return;
        }

        resolve(canvas);
      };
      img.src = image!;
    });
  }, [image, background, padding, borderRadius, shadow, isPro]);

  const handleExport = useCallback(async () => {
    if (!image) return;

    if (!isPro) {
      const today = new Date().toDateString();
      const stored = localStorage.getItem("screencraft_exports");
      let count = 0;
      if (stored) {
        const data = JSON.parse(stored);
        if (data.date === today) count = data.count;
      }
      if (count >= 3) {
        setShowProModal(true);
        return;
      }
      count++;
      localStorage.setItem("screencraft_exports", JSON.stringify({ date: today, count }));
      setExportsToday(count);
    }

    const canvas = await renderToCanvas();
    const link = document.createElement("a");
    link.download = `screencraft-${Date.now()}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  }, [image, isPro, renderToCanvas]);

  const allGradients = isPro ? [...GRADIENTS, ...PRO_GRADIENTS] : GRADIENTS;

  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="border-b border-white/10 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center font-bold text-sm">
              S
            </div>
            <span className="font-semibold text-lg">ScreenCraft</span>
          </div>
          <div className="flex items-center gap-4">
            {!isPro && (
              <span className="text-sm text-gray-400">
                {Math.max(0, 3 - exportsToday)} free exports left today
              </span>
            )}
            {isPro ? (
              <span className="text-sm text-green-400 bg-green-400/10 px-3 py-1 rounded-full">
                Pro
              </span>
            ) : (
              <button
                onClick={() => setShowProModal(true)}
                className="text-sm bg-gradient-to-r from-purple-500 to-indigo-600 px-4 py-2 rounded-lg font-medium hover:opacity-90 transition"
              >
                Upgrade to Pro - $9.99
              </button>
            )}
          </div>
        </div>
      </header>

      {!image ? (
        /* Landing + Upload */
        <div className="max-w-4xl mx-auto px-6 py-20">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent leading-tight">
              Beautiful Screenshots
              <br />
              in Seconds
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Transform plain screenshots into stunning mockups with gradient
              backgrounds, shadows, and rounded corners. No sign-up required.
            </p>
          </div>

          <div
            className={`drop-zone rounded-2xl p-16 text-center cursor-pointer ${
              isDragging ? "active" : ""
            }`}
            onDrop={handleDrop}
            onDragOver={(e) => {
              e.preventDefault();
              setIsDragging(true);
            }}
            onDragLeave={() => setIsDragging(false)}
            onClick={() => fileInputRef.current?.click()}
          >
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])}
            />
            <div className="text-6xl mb-4 opacity-30 font-light">+</div>
            <p className="text-lg text-gray-300 mb-2">
              Drop a screenshot here, click to upload, or paste from clipboard
            </p>
            <p className="text-sm text-gray-500">PNG, JPG, WebP supported</p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="bg-white/5 rounded-xl p-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/20 to-indigo-500/20 flex items-center justify-center mb-3 text-purple-400 font-mono text-lg">&lt;/&gt;</div>
              <h3 className="font-semibold mb-2">Gradient Backgrounds</h3>
              <p className="text-sm text-gray-400">
                12 beautiful gradient presets. Pro unlocks 4 more exclusive options.
              </p>
            </div>
            <div className="bg-white/5 rounded-xl p-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/20 to-indigo-500/20 flex items-center justify-center mb-3 text-purple-400 font-mono text-lg">[ ]</div>
              <h3 className="font-semibold mb-2">Shadows & Corners</h3>
              <p className="text-sm text-gray-400">
                Adjustable drop shadows and border radius for that polished look.
              </p>
            </div>
            <div className="bg-white/5 rounded-xl p-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/20 to-indigo-500/20 flex items-center justify-center mb-3 text-purple-400 font-mono text-lg">-&gt;</div>
              <h3 className="font-semibold mb-2">Instant Export</h3>
              <p className="text-sm text-gray-400">
                High-resolution 2x PNG export. 3 free per day, unlimited with Pro.
              </p>
            </div>
          </div>

          {/* Pricing */}
          <div className="mt-20 text-center" id="pricing">
            <h2 className="text-3xl font-bold mb-8">Simple Pricing</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <div className="bg-white/5 rounded-xl p-8 border border-white/10">
                <h3 className="text-xl font-semibold mb-2">Free</h3>
                <p className="text-3xl font-bold mb-4">$0</p>
                <ul className="text-sm text-gray-400 space-y-3 text-left">
                  <li className="flex items-start gap-2"><span className="text-green-400 mt-0.5">+</span> 3 exports per day</li>
                  <li className="flex items-start gap-2"><span className="text-green-400 mt-0.5">+</span> 12 gradient backgrounds</li>
                  <li className="flex items-start gap-2"><span className="text-green-400 mt-0.5">+</span> Shadow & radius controls</li>
                  <li className="flex items-start gap-2"><span className="text-gray-600 mt-0.5">-</span> Small watermark</li>
                </ul>
              </div>
              <div className="bg-white/5 rounded-xl p-8 border border-purple-500/50 relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-purple-500 text-xs px-3 py-1 rounded-full font-medium">
                  BEST VALUE
                </div>
                <h3 className="text-xl font-semibold mb-2">Pro</h3>
                <p className="text-3xl font-bold mb-1">$9.99</p>
                <p className="text-xs text-gray-500 mb-4">one-time payment</p>
                <ul className="text-sm text-gray-400 space-y-3 text-left">
                  <li className="flex items-start gap-2"><span className="text-green-400 mt-0.5">+</span> Unlimited exports</li>
                  <li className="flex items-start gap-2"><span className="text-green-400 mt-0.5">+</span> 16+ gradient backgrounds</li>
                  <li className="flex items-start gap-2"><span className="text-green-400 mt-0.5">+</span> No watermark</li>
                  <li className="flex items-start gap-2"><span className="text-green-400 mt-0.5">+</span> 2x resolution export</li>
                  <li className="flex items-start gap-2"><span className="text-green-400 mt-0.5">+</span> All future updates</li>
                </ul>
                <button
                  onClick={async () => {
                    const res = await fetch("/api/checkout", { method: "POST" });
                    const data = await res.json();
                    if (data.url) window.location.href = data.url;
                  }}
                  className="w-full mt-6 bg-gradient-to-r from-purple-500 to-indigo-600 py-3 rounded-lg font-medium hover:opacity-90 transition"
                >
                  Get Pro
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Editor */
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Preview */}
            <div className="flex-1 min-w-0">
              <div
                className="rounded-xl overflow-hidden"
                style={{
                  background: background.value,
                  padding: `${padding}px`,
                }}
              >
                <img
                  src={image}
                  alt="Screenshot preview"
                  className="w-full h-auto block"
                  style={{
                    borderRadius: `${borderRadius}px`,
                    boxShadow: shadow
                      ? "0 10px 40px rgba(0, 0, 0, 0.3)"
                      : "none",
                  }}
                />
              </div>
              <div className="flex gap-3 mt-4">
                <button
                  onClick={handleExport}
                  className="flex-1 bg-gradient-to-r from-purple-500 to-indigo-600 py-3 rounded-lg font-medium hover:opacity-90 transition"
                >
                  Export PNG
                  {!isPro && ` (${Math.max(0, 3 - exportsToday)} left)`}
                </button>
                <button
                  onClick={() => setImage(null)}
                  className="px-6 py-3 rounded-lg border border-white/20 hover:bg-white/5 transition"
                >
                  New
                </button>
              </div>
            </div>

            {/* Controls */}
            <div className="w-full lg:w-80 space-y-6 flex-shrink-0">
              {/* Background */}
              <div>
                <h3 className="text-sm font-medium text-gray-300 mb-3">Background</h3>
                <div className="grid grid-cols-4 gap-2">
                  {allGradients.map((g) => (
                    <button
                      key={g.name}
                      title={g.name}
                      onClick={() => setBackground(g)}
                      className={`h-10 rounded-lg border-2 transition ${
                        background.name === g.name
                          ? "border-white"
                          : "border-transparent hover:border-white/30"
                      }`}
                      style={{ background: g.value }}
                    />
                  ))}
                </div>
                <div className="grid grid-cols-4 gap-2 mt-2">
                  {SOLID_COLORS.map((c) => (
                    <button
                      key={c.name}
                      title={c.name}
                      onClick={() => setBackground(c)}
                      className={`h-10 rounded-lg border-2 transition ${
                        background.name === c.name
                          ? "border-white"
                          : "border-transparent hover:border-white/30"
                      }`}
                      style={{ background: c.value }}
                    />
                  ))}
                </div>
                {!isPro && (
                  <button
                    onClick={() => setShowProModal(true)}
                    className="w-full mt-2 text-xs text-purple-400 hover:text-purple-300"
                  >
                    + 4 more with Pro
                  </button>
                )}
              </div>

              {/* Padding */}
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-300">Padding</span>
                  <span className="text-gray-500">{padding}px</span>
                </div>
                <input
                  type="range"
                  min="16"
                  max="128"
                  value={padding}
                  onChange={(e) => setPadding(Number(e.target.value))}
                  className="w-full accent-purple-500"
                />
              </div>

              {/* Border Radius */}
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-300">Border Radius</span>
                  <span className="text-gray-500">{borderRadius}px</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="32"
                  value={borderRadius}
                  onChange={(e) => setBorderRadius(Number(e.target.value))}
                  className="w-full accent-purple-500"
                />
              </div>

              {/* Shadow */}
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-300">Drop Shadow</span>
                <button
                  onClick={() => setShadow(!shadow)}
                  className={`w-12 h-6 rounded-full transition relative ${
                    shadow ? "bg-purple-500" : "bg-gray-600"
                  }`}
                >
                  <div
                    className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-all ${
                      shadow ? "left-6" : "left-0.5"
                    }`}
                  />
                </button>
              </div>

              {/* Image info */}
              <div className="text-xs text-gray-500 border-t border-white/10 pt-4">
                <p>Original: {imageSize.width} x {imageSize.height}px</p>
                <p>Export: {(imageSize.width + padding * 2) * 2} x {(imageSize.height + padding * 2) * 2}px (2x)</p>
              </div>

              {/* Pro upsell */}
              {!isPro && (
                <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-4">
                  <p className="text-sm font-medium text-purple-300 mb-1">
                    Upgrade to Pro
                  </p>
                  <p className="text-xs text-gray-400 mb-3">
                    No watermark, unlimited exports, exclusive backgrounds.
                  </p>
                  <button
                    onClick={async () => {
                      const res = await fetch("/api/checkout", { method: "POST" });
                      const data = await res.json();
                      if (data.url) window.location.href = data.url;
                    }}
                    className="w-full bg-purple-500 py-2 rounded-lg text-sm font-medium hover:bg-purple-400 transition"
                  >
                    $9.99 one-time
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Pro Modal */}
      {showProModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" onClick={() => setShowProModal(false)}>
          <div className="bg-gray-900 rounded-2xl p-8 max-w-md w-full border border-white/10" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-2xl font-bold mb-2">Upgrade to ScreenCraft Pro</h2>
            <p className="text-gray-400 mb-6">
              One-time payment of $9.99. No subscription.
            </p>
            <ul className="space-y-2 mb-6 text-sm text-gray-300">
              <li className="flex items-center gap-2"><span className="text-green-400">+</span> Unlimited exports (no daily limit)</li>
              <li className="flex items-center gap-2"><span className="text-green-400">+</span> No watermark on exports</li>
              <li className="flex items-center gap-2"><span className="text-green-400">+</span> 4 exclusive gradient backgrounds</li>
              <li className="flex items-center gap-2"><span className="text-green-400">+</span> 2x resolution exports</li>
              <li className="flex items-center gap-2"><span className="text-green-400">+</span> All future updates included</li>
            </ul>
            <button
              onClick={async () => {
                const res = await fetch("/api/checkout", { method: "POST" });
                const data = await res.json();
                if (data.url) window.location.href = data.url;
              }}
              className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 py-3 rounded-lg font-medium hover:opacity-90 transition mb-3"
            >
              Buy Pro - $9.99
            </button>
            <button
              onClick={() => setShowProModal(false)}
              className="w-full py-2 text-sm text-gray-500 hover:text-gray-300"
            >
              Maybe later
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 mt-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            ScreenCraft -- Part of{" "}
            <a href="https://dashboard-mocha-delta-98.vercel.app" className="text-purple-400 hover:text-purple-300" target="_blank" rel="noopener noreferrer">
              Claude's $100K Experiment
            </a>
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <a href="https://jsonhero-cyan.vercel.app" className="hover:text-gray-300 transition" target="_blank" rel="noopener noreferrer">JSONHero</a>
            <a href="https://github.com/ryuno2525/autonomous-claude-agent" className="hover:text-gray-300 transition" target="_blank" rel="noopener noreferrer">Source</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
