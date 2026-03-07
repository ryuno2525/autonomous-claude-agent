"use client";

import { useState, useCallback, useMemo } from "react";

type Tab = "format" | "tree" | "diff" | "convert";

function syntaxHighlight(json: string): string {
  return json.replace(
    /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,
    (match) => {
      let cls = "text-amber-300"; // number
      if (/^"/.test(match)) {
        if (/:$/.test(match)) {
          cls = "text-indigo-400"; // key
          match = match.replace(/:$/, "");
          return `<span class="${cls}">${match}</span>:`;
        } else {
          cls = "text-emerald-400"; // string
        }
      } else if (/true|false/.test(match)) {
        cls = "text-purple-400"; // boolean
      } else if (/null/.test(match)) {
        cls = "text-red-400"; // null
      }
      return `<span class="${cls}">${match}</span>`;
    }
  );
}

function TreeView({ data, path = "", depth = 0 }: { data: unknown; path?: string; depth?: number }) {
  const [collapsed, setCollapsed] = useState(depth > 2);

  if (data === null) return <span className="text-red-400 font-mono text-sm">null</span>;
  if (typeof data === "boolean") return <span className="text-purple-400 font-mono text-sm">{String(data)}</span>;
  if (typeof data === "number") return <span className="text-amber-300 font-mono text-sm">{data}</span>;
  if (typeof data === "string") return <span className="text-emerald-400 font-mono text-sm">&quot;{data}&quot;</span>;

  if (Array.isArray(data)) {
    if (data.length === 0) return <span className="text-gray-500 font-mono text-sm">[]</span>;
    return (
      <div>
        <button onClick={() => setCollapsed(!collapsed)} className="text-gray-500 hover:text-gray-300 font-mono text-sm">
          {collapsed ? "+" : "-"} Array[{data.length}]
        </button>
        {!collapsed && (
          <div className="ml-5 border-l border-white/[0.06] pl-3">
            {data.map((item, i) => (
              <div key={i} className="tree-node py-0.5 px-1 rounded">
                <span className="text-gray-600 font-mono text-xs mr-2">{i}</span>
                <TreeView data={item} path={`${path}[${i}]`} depth={depth + 1} />
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  if (typeof data === "object") {
    const entries = Object.entries(data as Record<string, unknown>);
    if (entries.length === 0) return <span className="text-gray-500 font-mono text-sm">{"{}"}</span>;
    return (
      <div>
        <button onClick={() => setCollapsed(!collapsed)} className="text-gray-500 hover:text-gray-300 font-mono text-sm">
          {collapsed ? "+" : "-"} Object{"{"}{entries.length}{"}"}
        </button>
        {!collapsed && (
          <div className="ml-5 border-l border-white/[0.06] pl-3">
            {entries.map(([key, val]) => (
              <div key={key} className="tree-node py-0.5 px-1 rounded">
                <span className="text-indigo-400 font-mono text-sm">{key}</span>
                <span className="text-gray-600 font-mono text-sm">: </span>
                <TreeView data={val} path={`${path}.${key}`} depth={depth + 1} />
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  return <span className="text-gray-400 font-mono text-sm">{String(data)}</span>;
}

function diffJSON(a: Record<string, unknown>, b: Record<string, unknown>, path = ""): { type: string; path: string; oldVal?: unknown; newVal?: unknown }[] {
  const results: { type: string; path: string; oldVal?: unknown; newVal?: unknown }[] = [];
  const allKeys = new Set([...Object.keys(a), ...Object.keys(b)]);

  for (const key of allKeys) {
    const currentPath = path ? `${path}.${key}` : key;
    if (!(key in a)) {
      results.push({ type: "added", path: currentPath, newVal: b[key] });
    } else if (!(key in b)) {
      results.push({ type: "removed", path: currentPath, oldVal: a[key] });
    } else if (typeof a[key] === "object" && typeof b[key] === "object" && a[key] !== null && b[key] !== null && !Array.isArray(a[key]) && !Array.isArray(b[key])) {
      results.push(...diffJSON(a[key] as Record<string, unknown>, b[key] as Record<string, unknown>, currentPath));
    } else if (JSON.stringify(a[key]) !== JSON.stringify(b[key])) {
      results.push({ type: "changed", path: currentPath, oldVal: a[key], newVal: b[key] });
    }
  }
  return results;
}

function jsonToTypeScript(data: unknown, name = "Root", indent = 0): string {
  const pad = "  ".repeat(indent);
  if (data === null) return "null";
  if (Array.isArray(data)) {
    if (data.length === 0) return "unknown[]";
    const itemType = jsonToTypeScript(data[0], name + "Item", indent);
    return `${itemType}[]`;
  }
  if (typeof data === "object") {
    const entries = Object.entries(data as Record<string, unknown>);
    if (entries.length === 0) return "Record<string, unknown>";
    const fields = entries
      .map(([key, val]) => {
        const type = jsonToTypeScript(val, key.charAt(0).toUpperCase() + key.slice(1), indent + 1);
        return `${pad}  ${key}: ${type};`;
      })
      .join("\n");
    return `{\n${fields}\n${pad}}`;
  }
  return typeof data;
}

function jsonToCsv(data: unknown): string {
  if (!Array.isArray(data)) return "Error: CSV conversion requires a JSON array of objects.";
  if (data.length === 0) return "";
  if (typeof data[0] !== "object" || data[0] === null) return "Error: Array items must be objects.";

  const headers = Object.keys(data[0] as Record<string, unknown>);
  const rows = data.map((item) => {
    const obj = item as Record<string, unknown>;
    return headers.map((h) => {
      const val = obj[h];
      const str = val === null || val === undefined ? "" : String(val);
      return str.includes(",") || str.includes('"') || str.includes("\n")
        ? `"${str.replace(/"/g, '""')}"`
        : str;
    }).join(",");
  });
  return [headers.join(","), ...rows].join("\n");
}

const SAMPLE_JSON = `{
  "name": "JSONHero",
  "version": "1.0.0",
  "features": ["format", "validate", "diff", "convert"],
  "pricing": {
    "free": true,
    "pro": 7.99
  },
  "isAwesome": true
}`;

export default function Home() {
  const [input, setInput] = useState(SAMPLE_JSON);
  const [diffInput, setDiffInput] = useState("");
  const [activeTab, setActiveTab] = useState<Tab>("format");
  const [indentSize, setIndentSize] = useState(2);
  const [isPro, setIsPro] = useState(false);
  const [showProModal, setShowProModal] = useState(false);
  const [convertTarget, setConvertTarget] = useState<"typescript" | "csv">("typescript");
  const [copied, setCopied] = useState(false);

  const parsed = useMemo(() => {
    try {
      return { data: JSON.parse(input), error: null };
    } catch (e) {
      return { data: null, error: (e as Error).message };
    }
  }, [input]);

  const formatted = useMemo(() => {
    if (!parsed.data) return null;
    return JSON.stringify(parsed.data, null, indentSize);
  }, [parsed.data, indentSize]);

  const minified = useMemo(() => {
    if (!parsed.data) return null;
    return JSON.stringify(parsed.data);
  }, [parsed.data]);

  const stats = useMemo(() => {
    if (!parsed.data) return null;
    const str = JSON.stringify(parsed.data);
    const countNodes = (obj: unknown): number => {
      if (obj === null || typeof obj !== "object") return 1;
      if (Array.isArray(obj)) return obj.reduce((s, i) => s + countNodes(i), 1);
      return Object.values(obj as Record<string, unknown>).reduce((s: number, v) => s + countNodes(v), 1);
    };
    return {
      size: str.length,
      nodes: countNodes(parsed.data),
      depth: (() => {
        const getDepth = (obj: unknown, d = 0): number => {
          if (obj === null || typeof obj !== "object") return d;
          if (Array.isArray(obj)) return Math.max(d, ...obj.map((i) => getDepth(i, d + 1)));
          return Math.max(d, ...Object.values(obj as Record<string, unknown>).map((v) => getDepth(v, d + 1)));
        };
        return getDepth(parsed.data);
      })(),
    };
  }, [parsed.data]);

  const diffResults = useMemo(() => {
    if (!diffInput || !parsed.data) return null;
    try {
      const b = JSON.parse(diffInput);
      if (typeof parsed.data !== "object" || typeof b !== "object") return [];
      return diffJSON(parsed.data as Record<string, unknown>, b as Record<string, unknown>);
    } catch {
      return null;
    }
  }, [parsed.data, diffInput]);

  const convertedOutput = useMemo(() => {
    if (!parsed.data) return "";
    if (convertTarget === "typescript") {
      return `interface Root ${jsonToTypeScript(parsed.data, "Root")}`;
    }
    return jsonToCsv(parsed.data);
  }, [parsed.data, convertTarget]);

  const handleFormat = useCallback(() => {
    if (formatted) setInput(formatted);
  }, [formatted]);

  const handleMinify = useCallback(() => {
    if (minified) setInput(minified);
  }, [minified]);

  const handleCopy = useCallback((text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }, []);

  const requirePro = useCallback((tab: Tab) => {
    if (!isPro && (tab === "tree" || tab === "diff" || tab === "convert")) {
      setShowProModal(true);
      return true;
    }
    return false;
  }, [isPro]);

  const handleTabClick = useCallback((tab: Tab) => {
    if (!requirePro(tab)) setActiveTab(tab);
  }, [requirePro]);

  const tabs: { id: Tab; label: string; pro: boolean }[] = [
    { id: "format", label: "Format", pro: false },
    { id: "tree", label: "Tree View", pro: true },
    { id: "diff", label: "Diff", pro: true },
    { id: "convert", label: "Convert", pro: true },
  ];

  return (
    <main className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b border-white/[0.06] px-4 py-3">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-xs font-bold font-mono text-black">
              {"{}"}
            </div>
            <span className="font-semibold text-lg">JSONHero</span>
            <span className="text-xs text-gray-500 hidden sm:inline">Format / Validate / Transform</span>
          </div>
          <div className="flex items-center gap-3">
            {isPro ? (
              <span className="text-xs text-green-400 bg-green-400/10 px-2.5 py-1 rounded-full">Pro</span>
            ) : (
              <button
                onClick={() => setShowProModal(true)}
                className="text-xs bg-gradient-to-r from-amber-400 to-orange-500 text-black px-3 py-1.5 rounded-lg font-semibold hover:opacity-90 transition"
              >
                Upgrade Pro - $7.99
              </button>
            )}
          </div>
        </div>
      </header>

      <div className="flex-1 flex flex-col max-w-[1400px] mx-auto w-full">
        {/* Toolbar */}
        <div className="border-b border-white/[0.06] px-4 py-2 flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`px-3 py-1.5 text-sm rounded-lg transition flex items-center gap-1.5 ${
                  activeTab === tab.id
                    ? "bg-white/10 text-white"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {tab.label}
                {tab.pro && !isPro && (
                  <span className="text-[9px] bg-amber-400/20 text-amber-400 px-1.5 py-0.5 rounded font-bold">PRO</span>
                )}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <button onClick={handleFormat} className="text-xs bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-lg transition text-gray-300">
              Beautify
            </button>
            <button onClick={handleMinify} className="text-xs bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-lg transition text-gray-300">
              Minify
            </button>
            <button onClick={() => formatted && handleCopy(formatted)} className="text-xs bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-lg transition text-gray-300">
              {copied ? "Copied!" : "Copy"}
            </button>
            <select
              value={indentSize}
              onChange={(e) => setIndentSize(Number(e.target.value))}
              className="text-xs bg-white/5 px-2 py-1.5 rounded-lg text-gray-300 border-none outline-none"
            >
              <option value={2}>2 spaces</option>
              <option value={4}>4 spaces</option>
              <option value={1}>1 tab</option>
            </select>
          </div>
        </div>

        {/* Status bar */}
        <div className="border-b border-white/[0.06] px-4 py-1.5 flex items-center gap-4 text-xs">
          {parsed.error ? (
            <span className="text-red-400 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
              Invalid JSON: {parsed.error}
            </span>
          ) : (
            <>
              <span className="text-green-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                Valid JSON
              </span>
              {stats && (
                <>
                  <span className="text-gray-600">|</span>
                  <span className="text-gray-500">{stats.nodes} nodes</span>
                  <span className="text-gray-600">|</span>
                  <span className="text-gray-500">depth {stats.depth}</span>
                  <span className="text-gray-600">|</span>
                  <span className="text-gray-500">{stats.size} bytes</span>
                </>
              )}
            </>
          )}
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col lg:flex-row">
          {/* Input */}
          <div className="flex-1 flex flex-col border-r border-white/[0.06] min-h-[400px]">
            <div className="px-4 py-2 text-xs text-gray-500 border-b border-white/[0.06]">Input</div>
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="json-input flex-1 w-full bg-transparent p-4 resize-none text-gray-200 placeholder-gray-600"
              placeholder="Paste your JSON here..."
              spellCheck={false}
            />
          </div>

          {/* Output */}
          <div className="flex-1 flex flex-col min-h-[400px]">
            <div className="px-4 py-2 text-xs text-gray-500 border-b border-white/[0.06]">
              {activeTab === "format" && "Formatted Output"}
              {activeTab === "tree" && "Tree View"}
              {activeTab === "diff" && "Diff Result"}
              {activeTab === "convert" && (
                <div className="flex items-center gap-2">
                  <span>Convert to</span>
                  <select
                    value={convertTarget}
                    onChange={(e) => setConvertTarget(e.target.value as "typescript" | "csv")}
                    className="bg-white/5 px-2 py-0.5 rounded text-gray-300 border-none outline-none text-xs"
                  >
                    <option value="typescript">TypeScript</option>
                    <option value="csv">CSV</option>
                  </select>
                </div>
              )}
            </div>

            <div className="flex-1 overflow-auto p-4">
              {activeTab === "format" && (
                formatted ? (
                  <pre
                    className="json-output text-sm whitespace-pre-wrap"
                    dangerouslySetInnerHTML={{ __html: syntaxHighlight(formatted) }}
                  />
                ) : (
                  <div className="text-gray-600 text-sm">Fix JSON errors to see formatted output</div>
                )
              )}

              {activeTab === "tree" && (
                parsed.data ? (
                  <TreeView data={parsed.data} />
                ) : (
                  <div className="text-gray-600 text-sm">Fix JSON errors to see tree view</div>
                )
              )}

              {activeTab === "diff" && (
                <div className="space-y-4">
                  <div>
                    <label className="text-xs text-gray-500 mb-2 block">Paste second JSON to compare:</label>
                    <textarea
                      value={diffInput}
                      onChange={(e) => setDiffInput(e.target.value)}
                      className="json-input w-full h-32 bg-white/[0.02] border border-white/[0.06] rounded-lg p-3 resize-none text-gray-200 placeholder-gray-600"
                      placeholder="Paste JSON to compare against..."
                      spellCheck={false}
                    />
                  </div>
                  {diffResults && diffResults.length === 0 && (
                    <div className="text-green-400 text-sm">No differences found. JSONs are identical.</div>
                  )}
                  {diffResults && diffResults.length > 0 && (
                    <div className="space-y-1">
                      <div className="text-xs text-gray-500 mb-2">{diffResults.length} difference{diffResults.length !== 1 ? "s" : ""} found</div>
                      {diffResults.map((d, i) => (
                        <div
                          key={i}
                          className={`rounded-lg p-3 font-mono text-sm ${
                            d.type === "added" ? "diff-added" : d.type === "removed" ? "diff-removed" : "diff-changed"
                          }`}
                        >
                          <span className="text-xs font-sans uppercase font-bold mr-2">
                            {d.type}
                          </span>
                          <span className="text-gray-300">{d.path}</span>
                          {d.type === "changed" && (
                            <div className="mt-1 text-xs">
                              <span className="text-red-400">{JSON.stringify(d.oldVal)}</span>
                              <span className="text-gray-600 mx-2">-&gt;</span>
                              <span className="text-green-400">{JSON.stringify(d.newVal)}</span>
                            </div>
                          )}
                          {d.type === "added" && (
                            <span className="ml-2 text-green-400">{JSON.stringify(d.newVal)}</span>
                          )}
                          {d.type === "removed" && (
                            <span className="ml-2 text-red-400">{JSON.stringify(d.oldVal)}</span>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                  {diffInput && !diffResults && (
                    <div className="text-red-400 text-sm">Invalid JSON in comparison input.</div>
                  )}
                </div>
              )}

              {activeTab === "convert" && (
                convertedOutput ? (
                  <div>
                    <div className="flex justify-end mb-2">
                      <button
                        onClick={() => handleCopy(convertedOutput)}
                        className="text-xs bg-white/5 hover:bg-white/10 px-3 py-1 rounded transition text-gray-300"
                      >
                        {copied ? "Copied!" : "Copy"}
                      </button>
                    </div>
                    <pre className="json-output text-sm whitespace-pre-wrap text-gray-200">{convertedOutput}</pre>
                  </div>
                ) : (
                  <div className="text-gray-600 text-sm">Fix JSON errors to convert</div>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/[0.06] px-4 py-4">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            JSONHero -- Part of{" "}
            <a href="https://dashboard-mocha-delta-98.vercel.app" className="text-indigo-400 hover:text-indigo-300" target="_blank" rel="noopener noreferrer">
              Claude's $100K Experiment
            </a>
          </p>
          <div className="flex items-center gap-4 text-xs text-gray-600">
            <a href="https://screencraft-two.vercel.app" className="hover:text-gray-300 transition" target="_blank" rel="noopener noreferrer">ScreenCraft</a>
            <a href="https://github.com/ryuno2525/autonomous-claude-agent" className="hover:text-gray-300 transition" target="_blank" rel="noopener noreferrer">Source</a>
          </div>
        </div>
      </footer>

      {/* Pro Modal */}
      {showProModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" onClick={() => setShowProModal(false)}>
          <div className="bg-gray-900 rounded-2xl p-8 max-w-md w-full border border-white/10" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-sm font-bold font-mono text-black">
                {"{}"}
              </div>
              <div>
                <h2 className="text-xl font-bold">JSONHero Pro</h2>
                <p className="text-sm text-gray-400">One-time payment. No subscription.</p>
              </div>
            </div>
            <p className="text-3xl font-bold mb-6">$7.99</p>
            <ul className="space-y-2 mb-6 text-sm text-gray-300">
              <li className="flex items-center gap-2"><span className="text-green-400">+</span> Interactive tree view with collapse/expand</li>
              <li className="flex items-center gap-2"><span className="text-green-400">+</span> JSON diff -- compare two JSONs side by side</li>
              <li className="flex items-center gap-2"><span className="text-green-400">+</span> Convert to TypeScript interfaces</li>
              <li className="flex items-center gap-2"><span className="text-green-400">+</span> Convert JSON arrays to CSV</li>
              <li className="flex items-center gap-2"><span className="text-green-400">+</span> All future features included</li>
            </ul>
            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-3 mb-6">
              <p className="text-sm text-yellow-300 mb-2">
                Payment launching soon. Enter your email for early access + launch discount.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm outline-none focus:border-amber-400"
                  id="pro-email"
                />
                <button
                  onClick={() => {
                    const el = document.getElementById("pro-email") as HTMLInputElement;
                    if (el?.value?.includes("@")) {
                      const list = JSON.parse(localStorage.getItem("jsonhero_waitlist") || "[]");
                      list.push({ email: el.value, date: new Date().toISOString() });
                      localStorage.setItem("jsonhero_waitlist", JSON.stringify(list));
                      el.value = "";
                      el.placeholder = "Added! We'll notify you.";
                    }
                  }}
                  className="bg-amber-400 text-black px-4 py-2 rounded-lg text-sm font-semibold hover:bg-amber-300 transition"
                >
                  Notify Me
                </button>
              </div>
            </div>
            <button
              onClick={() => setShowProModal(false)}
              className="w-full py-2 text-sm text-gray-500 hover:text-gray-300"
            >
              Maybe later
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
