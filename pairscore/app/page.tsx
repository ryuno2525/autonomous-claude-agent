"use client";

import { useState, useRef, useCallback, useEffect } from "react";

interface Question {
  id: string;
  category: string;
  text: string;
  options: string[];
}

const QUESTIONS: Question[] = [
  { id: "q1", category: "Communication", text: "When something bothers you, you usually:", options: ["Talk about it immediately", "Wait for the right moment", "Drop hints", "Keep it to yourself"] },
  { id: "q2", category: "Communication", text: "In a disagreement, you tend to:", options: ["Stay calm and logical", "Get emotional but recover fast", "Need space before talking", "Avoid conflict entirely"] },
  { id: "q3", category: "Social Energy", text: "Your ideal weekend is:", options: ["Big group hangout", "Dinner with close friends", "Solo recharge at home", "Adventure with one person"] },
  { id: "q4", category: "Social Energy", text: "At a party, you're most likely to:", options: ["Talk to everyone", "Find one deep conversation", "Stick with people you know", "Leave early"] },
  { id: "q5", category: "Values", text: "What matters most in a relationship?", options: ["Trust and honesty", "Fun and spontaneity", "Stability and reliability", "Growth and ambition"] },
  { id: "q6", category: "Values", text: "Money is best used for:", options: ["Experiences and travel", "Saving for the future", "Comfort and quality of life", "Helping others"] },
  { id: "q7", category: "Lifestyle", text: "Your morning routine is:", options: ["Up early, productive", "Slow start, ease into it", "Snooze 5 times minimum", "Depends on the day"] },
  { id: "q8", category: "Lifestyle", text: "When it comes to planning:", options: ["Plan everything in advance", "Rough plan, flexible", "Go with the flow", "What's planning?"] },
  { id: "q9", category: "Emotional Style", text: "When a friend is upset, you:", options: ["Listen and empathize", "Try to solve the problem", "Give them space", "Crack jokes to lighten mood"] },
  { id: "q10", category: "Emotional Style", text: "You show affection by:", options: ["Words and compliments", "Quality time together", "Acts of service", "Physical touch / gifts"] },
  { id: "q11", category: "Growth", text: "When you fail at something:", options: ["Analyze what went wrong", "Feel bad but try again", "Move on to something new", "Rarely think about it"] },
  { id: "q12", category: "Growth", text: "In 5 years, you hope to be:", options: ["In a totally new place", "Leveled up in current path", "Happy and comfortable", "Don't think that far ahead"] },
];

const CATEGORIES = ["Communication", "Social Energy", "Values", "Lifestyle", "Emotional Style", "Growth"];

const CARD_THEMES = [
  { id: "love", name: "Love", bg: ["#ff6b6b", "#ee5a24"], accent: "#ffeaa7" },
  { id: "ocean", name: "Ocean", bg: ["#0984e3", "#6c5ce7"], accent: "#dfe6e9" },
  { id: "sunset", name: "Sunset", bg: ["#f39c12", "#e74c3c"], accent: "#ffeaa7" },
  { id: "forest", name: "Forest", bg: ["#00b894", "#00cec9"], accent: "#dfe6e9" },
  { id: "galaxy", name: "Galaxy", bg: ["#2d3436", "#6c5ce7"], accent: "#a29bfe" },
];

function computeScore(a1: Record<string, number>, a2: Record<string, number>): { total: number; categories: Record<string, number> } {
  const cats: Record<string, number[]> = {};
  for (const q of QUESTIONS) {
    if (!cats[q.category]) cats[q.category] = [];
    const v1 = a1[q.id] ?? 0;
    const v2 = a2[q.id] ?? 0;
    // Score: same answer = 100, adjacent = 70, two apart = 40, opposite = 20
    const diff = Math.abs(v1 - v2);
    const score = diff === 0 ? 100 : diff === 1 ? 70 : diff === 2 ? 40 : 20;
    cats[q.category].push(score);
  }
  const categoryScores: Record<string, number> = {};
  let totalSum = 0;
  let totalCount = 0;
  for (const [cat, scores] of Object.entries(cats)) {
    const avg = Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
    categoryScores[cat] = avg;
    totalSum += avg;
    totalCount++;
  }
  return { total: Math.round(totalSum / totalCount), categories: categoryScores };
}

function getVerdict(score: number): string {
  if (score >= 90) return "Soul Connection";
  if (score >= 75) return "Power Pair";
  if (score >= 60) return "Great Match";
  if (score >= 45) return "Interesting Duo";
  if (score >= 30) return "Opposites Attract";
  return "Wild Card Pair";
}

function getEmoji(score: number): string {
  if (score >= 90) return "\u{1F496}";
  if (score >= 75) return "\u{1F525}";
  if (score >= 60) return "\u2728";
  if (score >= 45) return "\u{1F914}";
  return "\u{1F30A}";
}

function isPro(): boolean {
  if (typeof window === "undefined") return false;
  return localStorage.getItem("pairscore_pro") === "true";
}

export default function Home() {
  const [step, setStep] = useState<"landing" | "names" | "p1quiz" | "p2quiz" | "result">("landing");
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [answers1, setAnswers1] = useState<Record<string, number>>({});
  const [answers2, setAnswers2] = useState<Record<string, number>>({});
  const [currentQ, setCurrentQ] = useState(0);
  const [themeId, setThemeId] = useState("love");
  const [pro, setPro] = useState(false);
  const [buying, setBuying] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const theme = CARD_THEMES.find((t) => t.id === themeId) || CARD_THEMES[0];

  useEffect(() => { setPro(isPro()); }, []);

  const score = step === "result" ? computeScore(answers1, answers2) : null;

  const handleAnswer = (questionId: string, optionIndex: number) => {
    if (step === "p1quiz") {
      setAnswers1((prev) => ({ ...prev, [questionId]: optionIndex }));
    } else {
      setAnswers2((prev) => ({ ...prev, [questionId]: optionIndex }));
    }
    if (currentQ < QUESTIONS.length - 1) {
      setCurrentQ(currentQ + 1);
    } else if (step === "p1quiz") {
      setStep("p2quiz");
      setCurrentQ(0);
    } else {
      setStep("result");
    }
  };

  const drawCard = useCallback(
    (forExport = false) => {
      if (!score) return;
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const W = 1080;
      const H = 1080;
      canvas.width = W;
      canvas.height = H;

      const grad = ctx.createLinearGradient(0, 0, W, H);
      grad.addColorStop(0, theme.bg[0]);
      grad.addColorStop(1, theme.bg[1]);
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, W, H);

      // Decorative circles
      ctx.globalAlpha = 0.1;
      ctx.beginPath();
      ctx.arc(W * 0.8, H * 0.15, 200, 0, Math.PI * 2);
      ctx.fillStyle = "#fff";
      ctx.fill();
      ctx.beginPath();
      ctx.arc(W * 0.2, H * 0.85, 150, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = 1;

      // Title
      ctx.font = "bold 36px Arial, sans-serif";
      ctx.fillStyle = "#fff";
      ctx.textAlign = "center";
      ctx.fillText("PAIRSCORE", W / 2, 70);

      // Names
      ctx.font = "28px Arial, sans-serif";
      ctx.fillStyle = theme.accent;
      ctx.fillText(`${name1 || "Person 1"} & ${name2 || "Person 2"}`, W / 2, 120);

      // Big score circle
      const cx = W / 2;
      const cy = 300;
      const r = 120;

      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(255,255,255,0.15)";
      ctx.fill();

      ctx.beginPath();
      ctx.arc(cx, cy, r - 8, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(255,255,255,0.1)";
      ctx.fill();

      ctx.font = "bold 80px Arial, sans-serif";
      ctx.fillStyle = "#fff";
      ctx.fillText(`${score.total}%`, cx, cy + 28);

      ctx.font = "22px Arial, sans-serif";
      ctx.fillStyle = theme.accent;
      ctx.fillText(getVerdict(score.total), cx, cy + 60);

      // Category bars
      const barX = 100;
      const barW = W - 200;
      let barY = 470;
      const barH = 24;
      const gap = 65;

      ctx.textAlign = "left";
      for (const cat of CATEGORIES) {
        const catScore = score.categories[cat] || 0;

        ctx.font = "18px Arial, sans-serif";
        ctx.fillStyle = theme.accent;
        ctx.fillText(cat, barX, barY - 8);

        ctx.font = "bold 18px Arial, sans-serif";
        ctx.textAlign = "right";
        ctx.fillText(`${catScore}%`, barX + barW, barY - 8);
        ctx.textAlign = "left";

        // Bar background
        ctx.beginPath();
        ctx.roundRect(barX, barY, barW, barH, 12);
        ctx.fillStyle = "rgba(255,255,255,0.15)";
        ctx.fill();

        // Bar fill
        const fillW = (catScore / 100) * barW;
        if (fillW > 0) {
          ctx.beginPath();
          ctx.roundRect(barX, barY, Math.max(fillW, 24), barH, 12);
          ctx.fillStyle = "rgba(255,255,255,0.6)";
          ctx.fill();
        }

        barY += gap;
      }

      // Fun insight
      ctx.textAlign = "center";
      ctx.font = "italic 20px Arial, sans-serif";
      ctx.fillStyle = "rgba(255,255,255,0.8)";
      const bestCat = Object.entries(score.categories).sort((a, b) => b[1] - a[1])[0];
      const worstCat = Object.entries(score.categories).sort((a, b) => a[1] - b[1])[0];
      ctx.fillText(`Strongest: ${bestCat[0]} (${bestCat[1]}%)  •  Growth area: ${worstCat[0]} (${worstCat[1]}%)`, W / 2, barY + 10);

      // Watermark
      if (!pro || !forExport) {
        ctx.font = "16px Arial, sans-serif";
        ctx.fillStyle = "rgba(255,255,255,0.5)";
        ctx.fillText("Made with PairScore", W / 2, H - 25);
      }
      if (forExport && !pro) {
        ctx.font = "16px Arial, sans-serif";
        ctx.fillStyle = "rgba(255,255,255,0.5)";
        ctx.fillText("Made with PairScore  •  pairscore.vercel.app", W / 2, H - 25);
      }
    },
    [score, name1, name2, theme, pro]
  );

  useEffect(() => {
    if (step === "result") drawCard(false);
  }, [step, drawCard]);

  const handleDownload = () => {
    drawCard(true);
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement("a");
    link.download = `pairscore-${name1}-${name2}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
    setTimeout(() => drawCard(false), 100);
  };

  const handleBuyPro = async () => {
    setBuying(true);
    try {
      const res = await fetch("/api/checkout", { method: "POST" });
      const data = await res.json();
      if (data.url) window.location.href = data.url;
      else alert("Checkout error: " + (data.error || "Unknown"));
    } catch { alert("Failed to start checkout."); }
    finally { setBuying(false); }
  };

  const restart = () => {
    setStep("landing");
    setAnswers1({});
    setAnswers2({});
    setCurrentQ(0);
    setName1("");
    setName2("");
  };

  // LANDING
  if (step === "landing") {
    return (
      <div className="min-h-screen bg-[#0f0f0f] flex flex-col items-center justify-center px-4">
        <div className="max-w-lg w-full text-center space-y-6">
          <div className="text-6xl">{"\u{1F496}"}</div>
          <h1 className="text-4xl md:text-5xl font-bold text-white">PairScore</h1>
          <p className="text-xl text-gray-400">How compatible are you really?</p>
          <p className="text-gray-500">Take the quiz with your partner, friend, or crush. Each person answers 12 questions. Get your compatibility score and a shareable card.</p>
          <button onClick={() => setStep("names")} className="px-8 py-4 bg-gradient-to-r from-pink-500 to-red-500 text-white text-lg font-semibold rounded-xl hover:opacity-90 transition-opacity">
            Start the Quiz
          </button>
          <p className="text-sm text-gray-600">Free. No signup. Takes 3 minutes.</p>
        </div>
        {/* SEO */}
        <div className="max-w-2xl mx-auto mt-20 text-center space-y-4 px-4">
          <h2 className="text-2xl font-bold text-white">The Compatibility Quiz Everyone&apos;s Sharing</h2>
          <p className="text-gray-400">PairScore measures compatibility across 6 dimensions: Communication, Social Energy, Values, Lifestyle, Emotional Style, and Growth. Each person takes the quiz independently, then your answers are compared to generate a compatibility score from 0-100%.</p>
          <p className="text-gray-400">Share your beautiful score card on Instagram, Twitter, TikTok, or WhatsApp. Challenge your friends to beat your score!</p>
        </div>
        <footer className="mt-16 pb-8 text-center text-sm text-gray-600">
          <a href="https://dashboard-mocha-delta-98.vercel.app" className="text-pink-400 hover:text-pink-300">Autonomous Claude Experiment</a>
        </footer>
      </div>
    );
  }

  // NAMES
  if (step === "names") {
    return (
      <div className="min-h-screen bg-[#0f0f0f] flex items-center justify-center px-4">
        <div className="max-w-md w-full space-y-6">
          <h2 className="text-2xl font-bold text-white text-center">Who&apos;s taking the quiz?</h2>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Person 1</label>
            <input type="text" value={name1} onChange={(e) => setName1(e.target.value)} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500" placeholder="Your name" />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Person 2</label>
            <input type="text" value={name2} onChange={(e) => setName2(e.target.value)} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500" placeholder="Their name" />
          </div>
          <button onClick={() => { setStep("p1quiz"); setCurrentQ(0); }} disabled={!name1.trim() || !name2.trim()} className="w-full px-6 py-3 bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity disabled:opacity-40">
            Start &mdash; {name1 || "Person 1"} goes first
          </button>
        </div>
      </div>
    );
  }

  // QUIZ (P1 or P2)
  if (step === "p1quiz" || step === "p2quiz") {
    const q = QUESTIONS[currentQ];
    const currentPerson = step === "p1quiz" ? name1 : name2;
    const progress = ((currentQ + 1) / QUESTIONS.length) * 100;
    const currentAnswers = step === "p1quiz" ? answers1 : answers2;

    return (
      <div className="min-h-screen bg-[#0f0f0f] flex items-center justify-center px-4">
        <div className="max-w-lg w-full space-y-6">
          <div className="flex items-center justify-between text-sm text-gray-500">
            <span>{currentPerson}&apos;s turn</span>
            <span>{currentQ + 1} / {QUESTIONS.length}</span>
          </div>
          <div className="w-full bg-white/10 rounded-full h-2">
            <div className="bg-gradient-to-r from-pink-500 to-red-500 h-2 rounded-full transition-all" style={{ width: `${progress}%` }} />
          </div>
          <div className="text-xs text-gray-600 uppercase tracking-wider">{q.category}</div>
          <h2 className="text-2xl font-bold text-white">{q.text}</h2>
          <div className="space-y-3">
            {q.options.map((opt, i) => (
              <button key={i} onClick={() => handleAnswer(q.id, i)}
                className={`w-full text-left px-5 py-4 rounded-xl border transition-all ${currentAnswers[q.id] === i ? "border-pink-500 bg-pink-500/10 text-white" : "border-white/10 bg-white/5 text-gray-300 hover:bg-white/10 hover:border-white/20"}`}>
                {opt}
              </button>
            ))}
          </div>
          {step === "p1quiz" && currentQ === QUESTIONS.length - 1 && Object.keys(answers1).length === QUESTIONS.length && (
            <p className="text-center text-sm text-gray-500">Now hand the device to {name2}!</p>
          )}
        </div>
      </div>
    );
  }

  // RESULT
  if (step === "result" && score) {
    return (
      <div className="min-h-screen bg-[#0f0f0f] py-8 px-4">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="text-center">
            <div className="text-5xl mb-2">{getEmoji(score.total)}</div>
            <h1 className="text-4xl font-bold text-white">{score.total}% Compatible</h1>
            <p className="text-xl text-gray-400 mt-1">{getVerdict(score.total)}</p>
            <p className="text-gray-500 mt-2">{name1} & {name2}</p>
          </div>

          {/* Category breakdown */}
          <div className="space-y-4">
            {CATEGORIES.map((cat) => {
              const s = score.categories[cat] || 0;
              return (
                <div key={cat}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-400">{cat}</span>
                    <span className="text-white font-medium">{s}%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-3">
                    <div className="bg-gradient-to-r from-pink-500 to-red-500 h-3 rounded-full transition-all" style={{ width: `${s}%` }} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Card preview + download */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-400">Your shareable card</span>
              <div className="flex gap-2">
                {CARD_THEMES.map((t) => (
                  <button key={t.id} onClick={() => { setThemeId(t.id); setTimeout(() => drawCard(false), 50); }}
                    className={`w-6 h-6 rounded-full ${themeId === t.id ? "ring-2 ring-white ring-offset-2 ring-offset-[#0f0f0f]" : ""}`}
                    style={{ background: `linear-gradient(135deg, ${t.bg[0]}, ${t.bg[1]})` }} />
                ))}
              </div>
            </div>
            <div className="rounded-xl overflow-hidden border border-white/10">
              <canvas ref={canvasRef} className="w-full" style={{ aspectRatio: "1/1" }} />
            </div>
          </div>

          <div className="flex gap-4">
            <button onClick={handleDownload} className="flex-1 px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              Download Card
            </button>
            <button onClick={restart} className="px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors">
              Retake
            </button>
          </div>

          {!pro && (
            <div className="p-4 bg-gradient-to-r from-pink-500/10 to-red-500/10 border border-pink-500/20 rounded-lg text-center">
              <p className="text-sm text-gray-300">
                <strong className="text-white">Pro ($4.99):</strong> Remove watermark, premium card themes, detailed PDF report.
              </p>
              <button onClick={handleBuyPro} disabled={buying} className="mt-2 text-sm text-pink-400 hover:text-pink-300 font-medium">
                {buying ? "Loading..." : "Upgrade now \u2192"}
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

  return null;
}
