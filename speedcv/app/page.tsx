"use client";

import { useState, useCallback, useEffect, useRef } from "react";

interface Experience {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  bullets: string[];
}

interface Education {
  degree: string;
  school: string;
  year: string;
}

interface ResumeData {
  name: string;
  email: string;
  phone: string;
  location: string;
  summary: string;
  experience: Experience[];
  education: Education[];
  skills: string;
}

const TEMPLATES = [
  { id: "classic", name: "Classic", pro: false },
  { id: "modern", name: "Modern", pro: true },
  { id: "elegant", name: "Elegant", pro: true },
  { id: "bold", name: "Bold", pro: true },
  { id: "minimal", name: "Minimal", pro: true },
];

const DEFAULT_DATA: ResumeData = {
  name: "",
  email: "",
  phone: "",
  location: "",
  summary: "",
  experience: [
    { title: "", company: "", location: "", startDate: "", endDate: "", bullets: [""] },
  ],
  education: [{ degree: "", school: "", year: "" }],
  skills: "",
};

function ResumePreview({
  data,
  template,
  isPro,
}: {
  data: ResumeData;
  template: string;
  isPro: boolean;
}) {
  const hasContent = data.name || data.experience.some(e => e.title) || data.education.some(e => e.degree);

  return (
    <div className={`template-${template}`}>
      <div className="resume-preview p-8 min-h-[700px]" id="resume-content">
        {!hasContent ? (
          <div className="flex items-center justify-center h-[600px] text-gray-400 text-center">
            <div>
              <p className="text-lg mb-2">Your resume preview will appear here</p>
              <p className="text-sm">Start filling in the form on the left</p>
            </div>
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="mb-4">
              <h1>{data.name || "Your Name"}</h1>
              <p className="text-sm text-gray-600 mt-1">
                {[data.email, data.phone, data.location].filter(Boolean).join("  |  ")}
              </p>
            </div>

            {/* Summary */}
            {data.summary && (
              <>
                <h2>Summary</h2>
                <p>{data.summary}</p>
              </>
            )}

            {/* Experience */}
            {data.experience.some((e) => e.title || e.company) && (
              <>
                <h2>Experience</h2>
                {data.experience.map(
                  (exp, i) =>
                    (exp.title || exp.company) && (
                      <div key={i} className="mb-3">
                        <div className="flex justify-between items-baseline">
                          <h3>{exp.title}</h3>
                          <span className="text-xs text-gray-500">
                            {[exp.startDate, exp.endDate].filter(Boolean).join(" - ")}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 italic">
                          {[exp.company, exp.location].filter(Boolean).join(", ")}
                        </p>
                        {exp.bullets.some(Boolean) && (
                          <ul className="list-disc ml-5 mt-1">
                            {exp.bullets.map(
                              (b, j) => b && <li key={j}>{b}</li>
                            )}
                          </ul>
                        )}
                      </div>
                    )
                )}
              </>
            )}

            {/* Education */}
            {data.education.some((e) => e.degree || e.school) && (
              <>
                <h2>Education</h2>
                {data.education.map(
                  (edu, i) =>
                    (edu.degree || edu.school) && (
                      <div key={i} className="mb-2">
                        <div className="flex justify-between items-baseline">
                          <h3>{edu.degree}</h3>
                          <span className="text-xs text-gray-500">{edu.year}</span>
                        </div>
                        <p className="text-sm text-gray-600">{edu.school}</p>
                      </div>
                    )
                )}
              </>
            )}

            {/* Skills */}
            {data.skills && (
              <>
                <h2>Skills</h2>
                <p>{data.skills}</p>
              </>
            )}

            {/* Watermark */}
            {!isPro && hasContent && (
              <p className="text-[10px] text-gray-300 text-right mt-8">
                Built with SpeedCV
              </p>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default function Home() {
  const [data, setData] = useState<ResumeData>(DEFAULT_DATA);
  const [template, setTemplate] = useState("classic");
  const [isPro, setIsPro] = useState(false);
  const [showProModal, setShowProModal] = useState(false);
  const [checkingOut, setCheckingOut] = useState(false);
  const [checkoutError, setCheckoutError] = useState<string | null>(null);
  const [exportsToday, setExportsToday] = useState(0);
  const [activeSection, setActiveSection] = useState<"personal" | "experience" | "education" | "skills">("personal");
  const resumeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (localStorage.getItem("speedcv_pro") === "true") setIsPro(true);
    const saved = localStorage.getItem("speedcv_data");
    if (saved) setData(JSON.parse(saved));
    const today = new Date().toDateString();
    const exp = localStorage.getItem("speedcv_exports");
    if (exp) {
      const d = JSON.parse(exp);
      if (d.date === today) setExportsToday(d.count);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("speedcv_data", JSON.stringify(data));
  }, [data]);

  const updateField = useCallback(
    (field: keyof ResumeData, value: string) => {
      setData((prev) => ({ ...prev, [field]: value }));
    },
    []
  );

  const updateExperience = useCallback(
    (index: number, field: keyof Experience, value: string | string[]) => {
      setData((prev) => {
        const exp = [...prev.experience];
        exp[index] = { ...exp[index], [field]: value };
        return { ...prev, experience: exp };
      });
    },
    []
  );

  const addExperience = useCallback(() => {
    setData((prev) => ({
      ...prev,
      experience: [
        ...prev.experience,
        { title: "", company: "", location: "", startDate: "", endDate: "", bullets: [""] },
      ],
    }));
  }, []);

  const updateEducation = useCallback(
    (index: number, field: keyof Education, value: string) => {
      setData((prev) => {
        const edu = [...prev.education];
        edu[index] = { ...edu[index], [field]: value };
        return { ...prev, education: edu };
      });
    },
    []
  );

  const addEducation = useCallback(() => {
    setData((prev) => ({
      ...prev,
      education: [...prev.education, { degree: "", school: "", year: "" }],
    }));
  }, []);

  const handleExport = useCallback(async () => {
    const el = document.getElementById("resume-content");
    if (!el) return;

    if (!isPro) {
      const today = new Date().toDateString();
      const stored = localStorage.getItem("speedcv_exports");
      let count = 0;
      if (stored) {
        const d = JSON.parse(stored);
        if (d.date === today) count = d.count;
      }
      if (count >= 1) {
        setShowProModal(true);
        return;
      }
      count++;
      localStorage.setItem("speedcv_exports", JSON.stringify({ date: today, count }));
      setExportsToday(count);
    }

    const html2canvas = (await import("html2canvas-pro")).default;
    const { jsPDF } = await import("jspdf");

    const canvas = await html2canvas(el, { scale: 2, useCORS: true });
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
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }

    pdf.save(`${data.name || "resume"}.pdf`);
  }, [data.name, isPro]);

  const handleCheckout = useCallback(async () => {
    setCheckingOut(true);
    setCheckoutError(null);
    try {
      const res = await fetch("/api/checkout", { method: "POST" });
      const d = await res.json();
      if (d.url) {
        window.location.href = d.url;
      } else {
        setCheckoutError(d.error || "Something went wrong. Please try again.");
      }
    } catch {
      setCheckoutError("Connection error. Please try again.");
    } finally {
      setCheckingOut(false);
    }
  }, []);

  const inputClass =
    "w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm outline-none focus:border-green-400 transition placeholder-gray-600";

  const sections = [
    { id: "personal" as const, label: "Personal" },
    { id: "experience" as const, label: "Experience" },
    { id: "education" as const, label: "Education" },
    { id: "skills" as const, label: "Skills" },
  ];

  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="border-b border-white/[0.06] px-4 py-3">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center text-xs font-bold text-black">
              CV
            </div>
            <span className="font-semibold text-lg">SpeedCV</span>
          </div>
          <div className="flex items-center gap-3">
            {!isPro && (
              <span className="text-xs text-gray-500">
                {Math.max(0, 1 - exportsToday)} free export left
              </span>
            )}
            {isPro ? (
              <span className="text-xs text-green-400 bg-green-400/10 px-2.5 py-1 rounded-full">
                Pro
              </span>
            ) : (
              <button
                onClick={() => setShowProModal(true)}
                className="text-xs bg-gradient-to-r from-green-400 to-emerald-600 text-black px-3 py-1.5 rounded-lg font-semibold hover:opacity-90 transition"
              >
                Upgrade Pro - $14.99
              </button>
            )}
          </div>
        </div>
      </header>

      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row min-h-[calc(100vh-57px)]">
        {/* Form Panel */}
        <div className="w-full lg:w-[420px] border-r border-white/[0.06] flex flex-col flex-shrink-0">
          {/* Section tabs */}
          <div className="flex border-b border-white/[0.06]">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => setActiveSection(s.id)}
                className={`flex-1 py-3 text-xs font-medium transition ${
                  activeSection === s.id
                    ? "text-green-400 border-b-2 border-green-400"
                    : "text-gray-500 hover:text-gray-300"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {activeSection === "personal" && (
              <>
                <input className={inputClass} placeholder="Full Name" value={data.name} onChange={(e) => updateField("name", e.target.value)} />
                <input className={inputClass} placeholder="Email" value={data.email} onChange={(e) => updateField("email", e.target.value)} />
                <div className="grid grid-cols-2 gap-3">
                  <input className={inputClass} placeholder="Phone" value={data.phone} onChange={(e) => updateField("phone", e.target.value)} />
                  <input className={inputClass} placeholder="City, State" value={data.location} onChange={(e) => updateField("location", e.target.value)} />
                </div>
                <textarea className={`${inputClass} h-24 resize-none`} placeholder="Professional summary (2-3 sentences)" value={data.summary} onChange={(e) => updateField("summary", e.target.value)} />
              </>
            )}

            {activeSection === "experience" && (
              <>
                {data.experience.map((exp, i) => (
                  <div key={i} className="bg-white/[0.02] border border-white/[0.06] rounded-lg p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">Position {i + 1}</span>
                      {data.experience.length > 1 && (
                        <button
                          onClick={() => setData((prev) => ({ ...prev, experience: prev.experience.filter((_, j) => j !== i) }))}
                          className="text-xs text-red-400 hover:text-red-300"
                        >
                          Remove
                        </button>
                      )}
                    </div>
                    <input className={inputClass} placeholder="Job Title" value={exp.title} onChange={(e) => updateExperience(i, "title", e.target.value)} />
                    <input className={inputClass} placeholder="Company" value={exp.company} onChange={(e) => updateExperience(i, "company", e.target.value)} />
                    <input className={inputClass} placeholder="Location" value={exp.location} onChange={(e) => updateExperience(i, "location", e.target.value)} />
                    <div className="grid grid-cols-2 gap-3">
                      <input className={inputClass} placeholder="Start (e.g. Jan 2022)" value={exp.startDate} onChange={(e) => updateExperience(i, "startDate", e.target.value)} />
                      <input className={inputClass} placeholder="End (or Present)" value={exp.endDate} onChange={(e) => updateExperience(i, "endDate", e.target.value)} />
                    </div>
                    <div className="space-y-2">
                      <span className="text-xs text-gray-500">Key achievements</span>
                      {exp.bullets.map((b, j) => (
                        <div key={j} className="flex gap-2">
                          <input
                            className={`${inputClass} flex-1`}
                            placeholder={`Achievement ${j + 1}`}
                            value={b}
                            onChange={(e) => {
                              const newBullets = [...exp.bullets];
                              newBullets[j] = e.target.value;
                              updateExperience(i, "bullets", newBullets);
                            }}
                          />
                          {exp.bullets.length > 1 && (
                            <button
                              onClick={() => {
                                const newBullets = exp.bullets.filter((_, k) => k !== j);
                                updateExperience(i, "bullets", newBullets);
                              }}
                              className="text-xs text-gray-600 hover:text-red-400 px-1"
                            >
                              x
                            </button>
                          )}
                        </div>
                      ))}
                      <button
                        onClick={() => updateExperience(i, "bullets", [...exp.bullets, ""])}
                        className="text-xs text-green-400 hover:text-green-300"
                      >
                        + Add bullet
                      </button>
                    </div>
                  </div>
                ))}
                <button onClick={addExperience} className="w-full py-2 border border-dashed border-white/10 rounded-lg text-sm text-gray-400 hover:text-white hover:border-white/20 transition">
                  + Add Position
                </button>
              </>
            )}

            {activeSection === "education" && (
              <>
                {data.education.map((edu, i) => (
                  <div key={i} className="bg-white/[0.02] border border-white/[0.06] rounded-lg p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">Education {i + 1}</span>
                      {data.education.length > 1 && (
                        <button
                          onClick={() => setData((prev) => ({ ...prev, education: prev.education.filter((_, j) => j !== i) }))}
                          className="text-xs text-red-400 hover:text-red-300"
                        >
                          Remove
                        </button>
                      )}
                    </div>
                    <input className={inputClass} placeholder="Degree (e.g. B.S. Computer Science)" value={edu.degree} onChange={(e) => updateEducation(i, "degree", e.target.value)} />
                    <input className={inputClass} placeholder="School / University" value={edu.school} onChange={(e) => updateEducation(i, "school", e.target.value)} />
                    <input className={inputClass} placeholder="Year (e.g. 2020)" value={edu.year} onChange={(e) => updateEducation(i, "year", e.target.value)} />
                  </div>
                ))}
                <button onClick={addEducation} className="w-full py-2 border border-dashed border-white/10 rounded-lg text-sm text-gray-400 hover:text-white hover:border-white/20 transition">
                  + Add Education
                </button>
              </>
            )}

            {activeSection === "skills" && (
              <textarea
                className={`${inputClass} h-32 resize-none`}
                placeholder="List your skills separated by commas (e.g. JavaScript, React, Project Management, Data Analysis)"
                value={data.skills}
                onChange={(e) => updateField("skills", e.target.value)}
              />
            )}
          </div>

          {/* Bottom actions */}
          <div className="border-t border-white/[0.06] p-4 space-y-2">
            <button
              onClick={handleExport}
              className="w-full bg-gradient-to-r from-green-400 to-emerald-600 text-black py-3 rounded-lg font-semibold hover:opacity-90 transition"
            >
              Download PDF {!isPro && `(${Math.max(0, 1 - exportsToday)} free)`}
            </button>
            {!isPro && (
              <button
                onClick={() => setShowProModal(true)}
                className="w-full py-2 text-xs text-green-400 hover:text-green-300 transition"
              >
                Unlock all templates + unlimited exports
              </button>
            )}
          </div>
        </div>

        {/* Preview Panel */}
        <div className="flex-1 bg-gray-950 p-6 overflow-y-auto">
          {/* Template picker */}
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs text-gray-500 mr-2">Template:</span>
            {TEMPLATES.map((t) => (
              <button
                key={t.id}
                onClick={() => {
                  if (t.pro && !isPro) {
                    setShowProModal(true);
                  } else {
                    setTemplate(t.id);
                  }
                }}
                className={`text-xs px-3 py-1.5 rounded-lg transition flex items-center gap-1 ${
                  template === t.id
                    ? "bg-green-400/20 text-green-400"
                    : "text-gray-400 hover:text-white bg-white/5"
                }`}
              >
                {t.name}
                {t.pro && !isPro && (
                  <span className="text-[8px] bg-green-400/20 text-green-400 px-1 py-0.5 rounded font-bold">PRO</span>
                )}
              </button>
            ))}
          </div>

          {/* A4 preview */}
          <div
            ref={resumeRef}
            className="bg-white rounded-lg shadow-2xl mx-auto max-w-[210mm] aspect-[210/297] overflow-hidden"
          >
            <ResumePreview data={data} template={template} isPro={isPro} />
          </div>
        </div>
      </div>

      {/* Pro Modal */}
      {showProModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" onClick={() => setShowProModal(false)}>
          <div className="bg-gray-900 rounded-2xl p-8 max-w-md w-full border border-white/10" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center text-sm font-bold text-black">
                CV
              </div>
              <div>
                <h2 className="text-xl font-bold">SpeedCV Pro</h2>
                <p className="text-sm text-gray-400">One-time payment. No subscription.</p>
              </div>
            </div>
            <p className="text-3xl font-bold mb-6">$14.99</p>
            <ul className="space-y-2 mb-6 text-sm text-gray-300">
              <li className="flex items-center gap-2"><span className="text-green-400">+</span> 5 professional resume templates</li>
              <li className="flex items-center gap-2"><span className="text-green-400">+</span> No watermark on PDF exports</li>
              <li className="flex items-center gap-2"><span className="text-green-400">+</span> Unlimited PDF downloads</li>
              <li className="flex items-center gap-2"><span className="text-green-400">+</span> Cover letter template</li>
              <li className="flex items-center gap-2"><span className="text-green-400">+</span> All future templates included</li>
            </ul>
            {checkoutError && (
              <p className="text-sm text-red-400 bg-red-400/10 rounded-lg p-3 mb-3">{checkoutError}</p>
            )}
            <button
              onClick={handleCheckout}
              disabled={checkingOut}
              className="w-full bg-gradient-to-r from-green-400 to-emerald-600 text-black py-3 rounded-lg font-semibold hover:opacity-90 transition mb-3 disabled:opacity-50"
            >
              {checkingOut ? "Redirecting to Stripe..." : "Buy Pro - $14.99"}
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
      <footer className="border-t border-white/[0.06] py-4 px-4">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-xs text-gray-600">
            SpeedCV -- Part of{" "}
            <a href="https://dashboard-mocha-delta-98.vercel.app" className="text-green-400 hover:text-green-300" target="_blank" rel="noopener noreferrer">
              Claude's $100K Experiment
            </a>
          </p>
          <div className="flex items-center gap-4 text-xs text-gray-600">
            <a href="https://screencraft-two.vercel.app" className="hover:text-gray-300 transition" target="_blank" rel="noopener noreferrer">ScreenCraft</a>
            <a href="https://jsonhero-cyan.vercel.app" className="hover:text-gray-300 transition" target="_blank" rel="noopener noreferrer">JSONHero</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
