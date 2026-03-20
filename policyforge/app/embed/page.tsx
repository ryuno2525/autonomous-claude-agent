import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Embeddable Privacy Compliance Widget | PolicyForge",
  description:
    "Add a free privacy compliance score badge to your website. Show visitors you take privacy seriously. One line of code, auto-updates.",
  alternates: { canonical: "https://policyforge.autonomous-claude.com/embed" },
};

export default function EmbedPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <header className="border-b border-gray-800 bg-gray-950/80 backdrop-blur sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-indigo-400">
            PolicyForge
          </Link>
          <nav className="flex gap-4 text-sm">
            <Link href="/check" className="text-gray-400 hover:text-white">
              Compliance Checker
            </Link>
            <Link href="/" className="text-gray-400 hover:text-white">
              Generator
            </Link>
          </nav>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Privacy Compliance Widget
        </h1>
        <p className="text-xl text-gray-400 mb-12 max-w-2xl">
          Show your visitors you take privacy seriously. Add a live compliance
          score badge to your website with a single line of code.
        </p>

        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            {
              title: "One Line of Code",
              desc: "Copy-paste a single script tag. No build tools, no dependencies.",
            },
            {
              title: "Auto-Updates",
              desc: "Your score updates automatically as you improve your privacy policy.",
            },
            {
              title: "Builds Trust",
              desc: "Visitors see you care about privacy — increasing confidence and conversions.",
            },
          ].map((b) => (
            <div
              key={b.title}
              className="bg-gray-900 border border-gray-800 rounded-xl p-6"
            >
              <h3 className="text-lg font-semibold mb-2">{b.title}</h3>
              <p className="text-gray-400 text-sm">{b.desc}</p>
            </div>
          ))}
        </div>

        {/* Quick Start */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Quick Start</h2>
          <p className="text-gray-400 mb-4">
            Add this snippet anywhere on your page. Replace{" "}
            <code className="bg-gray-800 px-2 py-0.5 rounded text-indigo-300">
              example.com
            </code>{" "}
            with your domain:
          </p>
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 font-mono text-sm overflow-x-auto">
            <code className="text-green-400">
              {'<script src="https://policyforge.autonomous-claude.com/widget.js" data-domain="example.com"></script>'}
            </code>
          </div>
          <p className="text-gray-500 text-sm mt-3">
            The widget will automatically scan your site and display your
            privacy compliance score.
          </p>
        </section>

        {/* Configuration */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Configuration Options</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-800 text-left">
                  <th className="pb-3 pr-4 text-gray-400 font-medium">
                    Attribute
                  </th>
                  <th className="pb-3 pr-4 text-gray-400 font-medium">
                    Values
                  </th>
                  <th className="pb-3 pr-4 text-gray-400 font-medium">
                    Default
                  </th>
                  <th className="pb-3 text-gray-400 font-medium">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800/50">
                <tr>
                  <td className="py-3 pr-4 font-mono text-indigo-300">
                    data-domain
                  </td>
                  <td className="py-3 pr-4 text-gray-400">Any domain</td>
                  <td className="py-3 pr-4 text-gray-500">Current hostname</td>
                  <td className="py-3 text-gray-400">
                    The domain to scan
                  </td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-mono text-indigo-300">
                    data-theme
                  </td>
                  <td className="py-3 pr-4 text-gray-400">dark | light</td>
                  <td className="py-3 pr-4 text-gray-500">dark</td>
                  <td className="py-3 text-gray-400">
                    Widget color theme
                  </td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-mono text-indigo-300">
                    data-size
                  </td>
                  <td className="py-3 pr-4 text-gray-400">
                    default | compact
                  </td>
                  <td className="py-3 pr-4 text-gray-500">default</td>
                  <td className="py-3 text-gray-400">
                    Badge size variant
                  </td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-mono text-indigo-300">
                    data-container
                  </td>
                  <td className="py-3 pr-4 text-gray-400">Element ID</td>
                  <td className="py-3 pr-4 text-gray-500">Auto-inserted</td>
                  <td className="py-3 text-gray-400">
                    Target element for the widget
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Examples */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Examples</h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-gray-300">
                Default (Dark Theme)
              </h3>
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 font-mono text-sm overflow-x-auto">
                <code className="text-green-400">
                  {'<script src="https://policyforge.autonomous-claude.com/widget.js" data-domain="stripe.com"></script>'}
                </code>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3 text-gray-300">
                Light Theme
              </h3>
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 font-mono text-sm overflow-x-auto">
                <code className="text-green-400">
                  {'<script src="https://policyforge.autonomous-claude.com/widget.js" data-domain="stripe.com" data-theme="light"></script>'}
                </code>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3 text-gray-300">
                Compact Badge
              </h3>
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 font-mono text-sm overflow-x-auto">
                <code className="text-green-400">
                  {'<script src="https://policyforge.autonomous-claude.com/widget.js" data-domain="stripe.com" data-size="compact"></script>'}
                </code>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3 text-gray-300">
                Custom Container
              </h3>
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 font-mono text-sm overflow-x-auto">
                <code className="text-green-400 whitespace-pre">
                  {'<div id="privacy-badge"></div>\n<script src="https://policyforge.autonomous-claude.com/widget.js" data-domain="stripe.com" data-container="privacy-badge"></script>'}
                </code>
              </div>
            </div>
          </div>
        </section>

        {/* SVG Badge Alternative */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">SVG Badge Alternative</h2>
          <p className="text-gray-400 mb-4">
            Prefer a static image? Use our SVG badge API. Works in README files,
            emails, and anywhere images are supported:
          </p>
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 font-mono text-sm overflow-x-auto mb-4">
            <code className="text-green-400">
              {'<a href="https://policyforge.autonomous-claude.com/check">\n  <img src="https://policyforge.autonomous-claude.com/api/badge?score=92&grade=A" alt="Privacy Score" />\n</a>'}
            </code>
          </div>
          <p className="text-gray-400 mb-4">
            For auto-scanning badges that update automatically:
          </p>
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 font-mono text-sm overflow-x-auto">
            <code className="text-green-400">
              {'<img src="https://policyforge.autonomous-claude.com/api/badge/scan?domain=example.com" alt="Privacy Score" />'}
            </code>
          </div>
        </section>

        {/* Free API */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Free Score API</h2>
          <p className="text-gray-400 mb-4">
            Build your own integrations with our free JSON API:
          </p>
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 font-mono text-sm overflow-x-auto mb-4">
            <code className="text-green-400">
              {"GET https://policyforge.autonomous-claude.com/api/score?url=example.com"}
            </code>
          </div>
          <p className="text-gray-400 text-sm">
            Returns JSON with score, grade, and detailed check results. CORS
            enabled — works from any domain.
          </p>
        </section>

        {/* Bookmarklet */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Privacy Checker Bookmarklet</h2>
          <p className="text-gray-400 mb-4">
            Drag this button to your bookmarks bar. Click it on any website to
            instantly check their privacy compliance:
          </p>
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 text-center">
            <p className="text-gray-500 text-sm mb-4">
              Drag this to your bookmarks bar:
            </p>
            {/* eslint-disable-next-line @next/next/no-sync-scripts */}
            <a
              href={`javascript:void(fetch('https://policyforge.autonomous-claude.com/bookmarklet.js').then(r=>r.text()).then(t=>eval(t)))`}
              className="inline-block bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-lg font-medium cursor-grab"
            >
              Check Privacy Score
            </a>
            <p className="text-gray-500 text-xs mt-4">
              Works on any website. No installation required.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-indigo-900/40 to-purple-900/40 border border-indigo-500/20 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Don&apos;t Have a Privacy Policy Yet?
          </h2>
          <p className="text-gray-400 mb-6 max-w-lg mx-auto">
            Generate a GDPR and CCPA compliant privacy policy in under 2
            minutes. Free, no signup required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-lg font-medium"
            >
              Generate Privacy Policy
            </Link>
            <Link
              href="/check"
              className="border border-gray-600 hover:border-gray-400 text-gray-300 px-6 py-3 rounded-lg font-medium"
            >
              Check Your Compliance
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-800 mt-20 py-8 text-center text-gray-500 text-sm">
        <p>PolicyForge &mdash; Free Privacy Policy Generator & Compliance Tools</p>
      </footer>
    </div>
  );
}
