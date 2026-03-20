import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ADA Compliance for E-Commerce Websites | AccessScore",
  description:
    "E-commerce sites are the #1 target for ADA lawsuits (37% of all cases). Check your online store for accessibility violations before you get a demand letter.",
  alternates: { canonical: "https://accessscore.autonomous-claude.com/ada-compliance-for-ecommerce" },
};

export default function ADAEcommercePage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "ADA Compliance for E-Commerce Websites",
    description: "E-commerce sites are the #1 target for ADA lawsuits. Learn how to protect your online store.",
    datePublished: "2026-03-14",
    dateModified: "2026-03-14",
    author: { "@type": "Organization", name: "AccessScore" },
    publisher: { "@type": "Organization", name: "AccessScore", url: "https://accessscore.autonomous-claude.com" },
    mainEntityOfPage: "https://accessscore.autonomous-claude.com/ada-compliance-for-ecommerce",
  };

  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <h1 className="text-4xl font-bold text-white mb-6">ADA Compliance for E-Commerce Websites</h1>

      <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6 mb-8">
        <p className="text-red-300 font-medium text-lg">
          E-commerce and retail websites account for <strong>37% of all ADA website lawsuits</strong> — more than any other industry. If you sell products online, you are a prime target.
        </p>
      </div>

      <p className="text-gray-300 leading-relaxed mb-6">
        Online stores face unique accessibility challenges. Product images need descriptive alt text. Checkout forms need proper labels. Filters and sorting controls need keyboard accessibility. Price information must be available to screen readers. And with thousands of product pages, even a single accessibility pattern repeated across the site creates massive legal exposure.
      </p>

      <h2 className="text-2xl font-bold text-white mt-10 mb-4">Why E-Commerce Is the #1 Target</h2>
      <p className="text-gray-300 leading-relaxed mb-4">
        Serial ADA plaintiffs and their law firms specifically target e-commerce sites for several reasons:
      </p>
      <ul className="space-y-3 mb-6">
        {[
          "Clear commercial purpose makes Title III applicability straightforward in court",
          "Product images without alt text are easy to demonstrate as barriers",
          "Checkout flows with unlabeled inputs prevent screen reader users from completing purchases",
          "High transaction volume means each accessibility barrier affects many potential customers",
          "E-commerce sites have revenue — meaning they can pay settlements",
          "Violations are often systematic (same template issue across thousands of product pages)",
        ].map((item) => (
          <li key={item} className="text-gray-400 text-sm flex items-start gap-2">
            <span className="text-red-400 mt-1">•</span>
            {item}
          </li>
        ))}
      </ul>

      <h2 className="text-2xl font-bold text-white mt-10 mb-4">Most Common E-Commerce Accessibility Violations</h2>
      <div className="space-y-4 mb-8">
        {[
          {
            title: "Product Images Without Alt Text",
            risk: "CRITICAL",
            desc: "Every product image needs descriptive alt text. \"Blue wool sweater, crew neck, size medium\" — not \"IMG_4827.jpg\" or empty alt. With hundreds or thousands of products, this is often the biggest single violation count.",
          },
          {
            title: "Unlabeled Checkout Form Fields",
            risk: "CRITICAL",
            desc: "Shipping address, payment card, email — every form field needs a visible label or aria-label. Placeholder text disappears when users start typing and is not reliably read by screen readers.",
          },
          {
            title: "Non-Keyboard-Accessible Filters and Navigation",
            risk: "HIGH",
            desc: "Category filters, price range sliders, color selectors, and mega menus often work only with a mouse. If a keyboard-only user can't navigate your product catalog, that's a barrier.",
          },
          {
            title: "Missing Skip Navigation",
            risk: "MEDIUM",
            desc: "E-commerce sites often have large headers with categories, promotions, and search bars. Without a skip link, keyboard users must tab through dozens of links on every page load.",
          },
          {
            title: "Inaccessible Modal Dialogs",
            risk: "HIGH",
            desc: "Size selection popups, quick-view overlays, and newsletter popups that trap focus or can't be closed with keyboard are common e-commerce accessibility failures.",
          },
        ].map((item) => (
          <div key={item.title} className="bg-[#141414] border border-[#262626] rounded-xl p-5">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-white font-semibold">{item.title}</h3>
              <span className={`text-xs font-medium px-2 py-1 rounded ${
                item.risk === "CRITICAL" ? "text-red-400 bg-red-500/10" :
                item.risk === "HIGH" ? "text-orange-400 bg-orange-500/10" :
                "text-yellow-400 bg-yellow-500/10"
              }`}>{item.risk}</span>
            </div>
            <p className="text-gray-400 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-white mt-10 mb-4">E-Commerce Platform-Specific Issues</h2>
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        {[
          { platform: "Shopify", issues: "Theme-dependent accessibility. Many free themes have poor contrast, missing form labels, and non-semantic HTML. Custom themes need manual auditing." },
          { platform: "WooCommerce", issues: "WordPress theme accessibility varies wildly. Plugin conflicts can break keyboard navigation. Payment gateway iframes often lack titles." },
          { platform: "Magento / Adobe Commerce", issues: "Complex category navigation often inaccessible. Product configuration (size, color) selectors frequently lack ARIA labels." },
          { platform: "Custom / Headless", issues: "Most control but most responsibility. React/Vue SPAs often have focus management issues after navigation. Dynamic content updates need ARIA live regions." },
        ].map((p) => (
          <div key={p.platform} className="bg-[#141414] border border-[#262626] rounded-xl p-5">
            <h3 className="text-white font-semibold mb-2">{p.platform}</h3>
            <p className="text-gray-400 text-sm">{p.issues}</p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-white mt-10 mb-4">The Cost of Non-Compliance for Online Stores</h2>
      <div className="bg-[#141414] border border-[#262626] rounded-xl p-6 mb-8">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-red-400 font-semibold mb-3">If You Get Sued</h3>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Settlement: $10,000–$75,000</li>
              <li>• Attorney fees: $15,000–$50,000</li>
              <li>• Rush remediation: $5,000–$50,000+</li>
              <li>• Ongoing monitoring requirement: $5,000/year</li>
              <li>• Lost sales during remediation period</li>
              <li className="text-white font-semibold pt-2">Total: $35,000–$175,000+</li>
            </ul>
          </div>
          <div>
            <h3 className="text-green-400 font-semibold mb-3">Proactive Compliance</h3>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• AccessScore Pro Report: $14.99</li>
              <li>• Fix product image alt text: $0–$500 (DIY/intern)</li>
              <li>• Fix form labels + checkout: $0–$2,000</li>
              <li>• Accessible theme upgrade: $0–$300</li>
              <li>• Annual re-audit: $14.99</li>
              <li className="text-white font-semibold pt-2">Total: $15–$2,815</li>
            </ul>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-white mt-10 mb-4">How to Get Started</h2>
      <p className="text-gray-300 leading-relaxed mb-6">
        The first step is understanding where you stand. Use AccessScore to scan your homepage and a product page. This gives you an immediate picture of your legal risk and the most critical issues to fix. Most e-commerce accessibility fixes are straightforward — adding alt text, labeling forms, ensuring keyboard navigation. The hard part is knowing what to fix first, which is exactly what our prioritized fix plan does.
      </p>

      <div className="text-center mt-10">
        <a href="/" className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold text-lg transition-colors">
          Scan Your Online Store — Free
        </a>
        <p className="text-gray-500 text-sm mt-3">Find out your legal exposure in seconds. No signup required.</p>
      </div>

      <div className="mt-12 pt-8 border-t border-[#262626]">
        <p className="text-gray-500 text-sm">
          Related: <a href="/ada-compliance-checker" className="text-blue-400 hover:underline">ADA Compliance Checker</a> &middot;{" "}
          <a href="/ada-lawsuit-risk" className="text-blue-400 hover:underline">ADA Lawsuit Risk Assessment</a> &middot;{" "}
          <a href="/accessibility-checklist" className="text-blue-400 hover:underline">Accessibility Checklist 2026</a> &middot;{" "}
          <a href="/wcag-checker" className="text-blue-400 hover:underline">WCAG Checker</a>
        </p>
      </div>
    </main>
  );
}
