"use client";

import { useState, useRef, useCallback, useEffect } from "react";

const THEMES = [
  {
    id: "gradient-purple",
    name: "Purple Haze",
    bg: ["#667eea", "#764ba2"],
    text: "#ffffff",
    accent: "#e0d4f7",
    cardBg: "rgba(255,255,255,0.15)",
  },
  {
    id: "gradient-sunset",
    name: "Sunset",
    bg: ["#f093fb", "#f5576c"],
    text: "#ffffff",
    accent: "#fde2e4",
    cardBg: "rgba(255,255,255,0.15)",
  },
  {
    id: "gradient-ocean",
    name: "Ocean",
    bg: ["#4facfe", "#00f2fe"],
    text: "#ffffff",
    accent: "#d4f1ff",
    cardBg: "rgba(255,255,255,0.15)",
  },
  {
    id: "dark",
    name: "Dark",
    bg: ["#1a1a2e", "#16213e"],
    text: "#ffffff",
    accent: "#a0a0b0",
    cardBg: "rgba(255,255,255,0.08)",
  },
  {
    id: "light",
    name: "Clean White",
    bg: ["#f8f9fa", "#e9ecef"],
    text: "#1a1a1a",
    accent: "#6c757d",
    cardBg: "rgba(0,0,0,0.04)",
  },
  {
    id: "gradient-green",
    name: "Emerald",
    bg: ["#11998e", "#38ef7d"],
    text: "#ffffff",
    accent: "#d4f7e6",
    cardBg: "rgba(255,255,255,0.15)",
  },
];

const STARS_OPTIONS = [3, 4, 5];

function isPro(): boolean {
  if (typeof window === "undefined") return false;
  return localStorage.getItem("cardcraft_pro") === "true";
}

function getDownloadsToday(): number {
  if (typeof window === "undefined") return 0;
  const key = `cardcraft_downloads_${new Date().toISOString().slice(0, 10)}`;
  return parseInt(localStorage.getItem(key) || "0", 10);
}

function incrementDownloads(): void {
  const key = `cardcraft_downloads_${new Date().toISOString().slice(0, 10)}`;
  const current = parseInt(localStorage.getItem(key) || "0", 10);
  localStorage.setItem(key, String(current + 1));
}

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [testimonial, setTestimonial] = useState(
    "Working with this freelancer was an absolute game-changer for our business. Delivered ahead of schedule with exceptional quality."
  );
  const [author, setAuthor] = useState("Sarah Mitchell");
  const [role, setRole] = useState("CEO, TechStart Inc.");
  const [stars, setStars] = useState(5);
  const [themeId, setThemeId] = useState("gradient-purple");
  const [pro, setPro] = useState(false);
  const [downloadsToday, setDownloadsToday] = useState(0);
  const [buying, setBuying] = useState(false);

  const theme = THEMES.find((t) => t.id === themeId) || THEMES[0];
  const FREE_LIMIT = 3;

  useEffect(() => {
    setPro(isPro());
    setDownloadsToday(getDownloadsToday());
  }, []);

  const drawCard = useCallback(
    (forExport = false) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const W = 1200;
      const H = 675;
      canvas.width = W;
      canvas.height = H;

      // Background gradient
      const grad = ctx.createLinearGradient(0, 0, W, H);
      grad.addColorStop(0, theme.bg[0]);
      grad.addColorStop(1, theme.bg[1]);
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, W, H);

      // Card background
      const cardX = 60;
      const cardY = 50;
      const cardW = W - 120;
      const cardH = H - 100;
      const radius = 24;

      ctx.beginPath();
      ctx.roundRect(cardX, cardY, cardW, cardH, radius);
      ctx.fillStyle = theme.cardBg;
      ctx.fill();

      // Quote mark
      ctx.font = "bold 120px Georgia, serif";
      ctx.fillStyle = theme.accent;
      ctx.globalAlpha = 0.4;
      ctx.fillText("\u201C", cardX + 40, cardY + 120);
      ctx.globalAlpha = 1;

      // Stars
      const starY = cardY + 60;
      const starSize = 28;
      ctx.font = `${starSize}px Arial`;
      ctx.fillStyle = "#fbbf24";
      for (let i = 0; i < stars; i++) {
        ctx.fillText("\u2605", cardX + 50 + i * (starSize + 8), starY);
      }
      for (let i = stars; i < 5; i++) {
        ctx.fillStyle = theme.accent;
        ctx.globalAlpha = 0.3;
        ctx.fillText("\u2605", cardX + 50 + i * (starSize + 8), starY);
        ctx.globalAlpha = 1;
        ctx.fillStyle = "#fbbf24";
      }

      // Testimonial text with word wrap
      ctx.font = "italic 32px Georgia, serif";
      ctx.fillStyle = theme.text;
      const maxWidth = cardW - 120;
      const lineHeight = 46;
      const words = testimonial.split(" ");
      let line = "";
      let y = cardY + 160;
      const lines: string[] = [];

      for (const word of words) {
        const testLine = line + (line ? " " : "") + word;
        const metrics = ctx.measureText(testLine);
        if (metrics.width > maxWidth && line) {
          lines.push(line);
          line = word;
        } else {
          line = testLine;
        }
      }
      lines.push(line);

      // Limit to 6 lines
      const displayLines = lines.slice(0, 6);
      if (lines.length > 6) {
        displayLines[5] = displayLines[5].slice(0, -3) + "...";
      }

      for (const l of displayLines) {
        ctx.fillText(l, cardX + 60, y);
        y += lineHeight;
      }

      // Divider
      const divY = Math.max(y + 20, cardY + cardH - 130);
      ctx.beginPath();
      ctx.moveTo(cardX + 60, divY);
      ctx.lineTo(cardX + 200, divY);
      ctx.strokeStyle = theme.accent;
      ctx.globalAlpha = 0.5;
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.globalAlpha = 1;

      // Author
      ctx.font = "bold 28px Arial, sans-serif";
      ctx.fillStyle = theme.text;
      ctx.fillText(author, cardX + 60, divY + 45);

      // Role
      ctx.font = "20px Arial, sans-serif";
      ctx.fillStyle = theme.accent;
      ctx.fillText(role, cardX + 60, divY + 78);

      // Watermark (free tier only)
      if (!pro && forExport) {
        ctx.font = "16px Arial, sans-serif";
        ctx.fillStyle = theme.text;
        ctx.globalAlpha = 0.6;
        const wmText = "Made with CardCraft";
        const wmWidth = ctx.measureText(wmText).width;
        ctx.fillText(wmText, W - wmWidth - 30, H - 20);
        ctx.globalAlpha = 1;
      }
    },
    [testimonial, author, role, stars, theme, pro]
  );

  useEffect(() => {
    drawCard(false);
  }, [drawCard]);

  const handleDownload = () => {
    if (!pro && downloadsToday >= FREE_LIMIT) {
      alert(
        `Free tier: ${FREE_LIMIT} downloads per day. Upgrade to Pro for unlimited downloads and no watermark!`
      );
      return;
    }

    drawCard(true);
    const canvas = canvasRef.current;
    if (!canvas) return;

    const link = document.createElement("a");
    link.download = `testimonial-card-${Date.now()}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();

    if (!pro) {
      incrementDownloads();
      setDownloadsToday(getDownloadsToday());
    }

    // Redraw without watermark for preview
    setTimeout(() => drawCard(false), 100);
  };

  const handleBuyPro = async () => {
    setBuying(true);
    try {
      const res = await fetch("/api/checkout", { method: "POST" });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert("Checkout error: " + (data.error || "Unknown error"));
      }
    } catch {
      alert("Failed to start checkout. Please try again.");
    } finally {
      setBuying(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0f0f0f]">
      {/* Header */}
      <header className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-sm">
              C
            </div>
            <span className="text-white font-semibold text-lg">CardCraft</span>
            {pro && (
              <span className="ml-2 px-2 py-0.5 bg-amber-500/20 text-amber-400 text-xs font-medium rounded-full">
                PRO
              </span>
            )}
          </div>
          <div className="flex items-center gap-4">
            {!pro && (
              <button
                onClick={handleBuyPro}
                disabled={buying}
                className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-medium rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {buying ? "Loading..." : "Upgrade to Pro - $9.99"}
              </button>
            )}
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Hero */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Turn Testimonials Into Shareable Cards
          </h1>
          <p className="text-gray-400 text-lg">
            Create stunning social proof cards in seconds. Share on Twitter,
            LinkedIn, Instagram.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Controls */}
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Testimonial
              </label>
              <textarea
                value={testimonial}
                onChange={(e) => setTestimonial(e.target.value)}
                rows={4}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                placeholder="Enter client testimonial..."
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Author Name
                </label>
                <input
                  type="text"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Client name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Role / Company
                </label>
                <input
                  type="text"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="CEO, Company"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Rating
              </label>
              <div className="flex gap-2">
                {STARS_OPTIONS.map((s) => (
                  <button
                    key={s}
                    onClick={() => setStars(s)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      stars === s
                        ? "bg-amber-500 text-white"
                        : "bg-white/5 text-gray-400 hover:bg-white/10"
                    }`}
                  >
                    {s} Stars
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Theme
              </label>
              <div className="grid grid-cols-3 gap-2">
                {THEMES.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setThemeId(t.id)}
                    className={`relative px-3 py-3 rounded-lg text-sm font-medium transition-all ${
                      themeId === t.id
                        ? "ring-2 ring-purple-500 ring-offset-2 ring-offset-[#0f0f0f]"
                        : "hover:opacity-80"
                    }`}
                    style={{
                      background: `linear-gradient(135deg, ${t.bg[0]}, ${t.bg[1]})`,
                      color: t.text,
                    }}
                  >
                    {t.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Download */}
            <div className="flex items-center gap-4">
              <button
                onClick={handleDownload}
                className="flex-1 px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Download PNG
              </button>
              {!pro && (
                <span className="text-sm text-gray-500">
                  {FREE_LIMIT - downloadsToday} / {FREE_LIMIT} free today
                </span>
              )}
            </div>

            {!pro && (
              <div className="p-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-lg">
                <p className="text-sm text-gray-300">
                  <strong className="text-white">Pro ($9.99 one-time):</strong>{" "}
                  No watermark, unlimited downloads, priority support.
                </p>
                <button
                  onClick={handleBuyPro}
                  disabled={buying}
                  className="mt-2 text-sm text-purple-400 hover:text-purple-300 font-medium"
                >
                  Upgrade now &rarr;
                </button>
              </div>
            )}
          </div>

          {/* Preview */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Preview
            </label>
            <div className="rounded-xl overflow-hidden border border-white/10">
              <canvas
                ref={canvasRef}
                className="w-full"
                style={{ aspectRatio: "1200/675" }}
              />
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              1200x675px &mdash; optimized for Twitter, LinkedIn, and Instagram
            </p>
          </div>
        </div>

        {/* SEO content */}
        <div className="mt-16 border-t border-white/10 pt-12">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-2xl font-bold text-white">
              Why Testimonial Cards?
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Social proof is the most powerful marketing tool for freelancers
              and agencies. A beautiful testimonial card shared on Twitter or
              LinkedIn builds trust instantly. CardCraft makes it easy: paste a
              testimonial, pick a theme, download a stunning image. No design
              skills needed.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 text-left">
              <div className="p-4 bg-white/5 rounded-lg">
                <h3 className="font-semibold text-white mb-1">
                  Instant Cards
                </h3>
                <p className="text-sm text-gray-400">
                  Generate professional testimonial images in under 30 seconds.
                  No signup required.
                </p>
              </div>
              <div className="p-4 bg-white/5 rounded-lg">
                <h3 className="font-semibold text-white mb-1">
                  6 Premium Themes
                </h3>
                <p className="text-sm text-gray-400">
                  Choose from gradient, dark, and clean themes. Perfect for any
                  brand.
                </p>
              </div>
              <div className="p-4 bg-white/5 rounded-lg">
                <h3 className="font-semibold text-white mb-1">
                  Share Everywhere
                </h3>
                <p className="text-sm text-gray-400">
                  1200x675px images optimized for Twitter, LinkedIn, Instagram,
                  and Facebook.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 border-t border-white/10 pt-8 pb-8 text-center text-sm text-gray-500">
          <p>
            CardCraft &mdash; Part of the{" "}
            <a
              href="https://dashboard-mocha-delta-98.vercel.app"
              className="text-purple-400 hover:text-purple-300"
            >
              Autonomous Claude Experiment
            </a>
          </p>
          <p className="mt-1">
            Also check out:{" "}
            <a
              href="https://freelancekit.vercel.app"
              className="text-purple-400 hover:text-purple-300"
            >
              FreelanceKit
            </a>{" "}
            |{" "}
            <a
              href="https://proposalforge-zeta.vercel.app"
              className="text-purple-400 hover:text-purple-300"
            >
              ProposalForge
            </a>{" "}
            |{" "}
            <a
              href="https://invoicely-eight.vercel.app"
              className="text-purple-400 hover:text-purple-300"
            >
              Invoicely
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
