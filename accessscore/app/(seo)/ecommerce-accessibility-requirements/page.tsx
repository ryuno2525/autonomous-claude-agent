import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "E-Commerce Website Accessibility Requirements 2026 — Shopify, WooCommerce & More | AccessScore",
  description:
    "Complete guide to accessibility requirements for ecommerce websites. Covers product pages, checkout flows, shopping carts, Shopify, WooCommerce, and ADA compliance for online stores.",
  keywords: ["ecommerce website accessibility requirements", "Shopify accessibility", "WooCommerce accessibility", "online store ADA compliance", "accessible checkout"],
  alternates: { canonical: "https://accessscore.autonomous-claude.com/ecommerce-accessibility-requirements" },
};

export default function EcommerceAccessibilityRequirementsPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "E-Commerce Website Accessibility Requirements 2026",
    description: "Complete guide to accessibility requirements for ecommerce websites including product pages, checkout flows, and platform-specific guidance.",
    datePublished: "2026-03-15",
    dateModified: "2026-03-15",
    author: { "@type": "Organization", name: "AccessScore" },
    publisher: { "@type": "Organization", name: "AccessScore", url: "https://accessscore.autonomous-claude.com" },
    mainEntityOfPage: "https://accessscore.autonomous-claude.com/ecommerce-accessibility-requirements",
  };

  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />

      <h1 className="text-4xl font-bold text-white mb-6">E-Commerce Website Accessibility Requirements: The Complete 2026 Guide</h1>

      <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6 mb-8">
        <p className="text-red-300 font-medium text-lg">
          Online retail accounts for <strong>37% of all ADA website lawsuits</strong> &mdash; more than any other industry. If you sell products online, accessibility is not optional. It&apos;s a legal requirement and a $13 billion market opportunity.
        </p>
      </div>

      <p className="text-gray-300 leading-relaxed mb-6">
        An estimated 1.3 billion people worldwide live with some form of disability. In the US alone, 61 million adults have a disability, and they control over $490 billion in disposable income. An inaccessible ecommerce site doesn&apos;t just create legal risk &mdash; it actively turns away customers who want to buy from you.
      </p>
      <p className="text-gray-300 leading-relaxed mb-8">
        This guide covers the specific accessibility requirements for every part of an ecommerce website: product listings, product detail pages, shopping carts, checkout flows, search and filtering, and customer account areas. We also include platform-specific guidance for Shopify, WooCommerce, Magento, and custom builds.
      </p>

      {/* Product Listing Pages */}
      <h2 className="text-2xl font-bold text-white mt-12 mb-4">Product Listing Pages</h2>
      <p className="text-gray-300 leading-relaxed mb-6">
        Category and search results pages are where customers browse your catalog. These pages tend to be image-heavy and interaction-heavy, making them particularly vulnerable to accessibility failures.
      </p>

      <div className="space-y-4 mb-8">
        {[
          {
            req: "Product images must have descriptive alt text",
            detail: "Every product thumbnail needs alt text that describes the product: \"Women's blue denim jacket, front view\" &mdash; not \"product-img-001\" or empty. If you have 500 products, that's 500+ alt texts to write. Batch this with your product data entry process.",
            wcag: "SC 1.1.1",
            risk: "CRITICAL",
          },
          {
            req: "Product names must be real text, not images of text",
            detail: "Product titles in images can't be read by screen readers or resized by users with low vision. Always use HTML text for product names.",
            wcag: "SC 1.4.5",
            risk: "HIGH",
          },
          {
            req: "Price information must be in accessible text",
            detail: "Screen reader users need to know prices. If prices are rendered as images, within canvas elements, or via CSS content, they're invisible to assistive technology. Ensure prices are in the DOM as text.",
            wcag: "SC 1.3.1",
            risk: "HIGH",
          },
          {
            req: "Sale/discount indicators need more than color",
            detail: "Red strikethrough prices are invisible to colorblind users. Add text labels: \"Was $49.99, now $29.99\" or \"Sale\" badges with text, not just color changes.",
            wcag: "SC 1.4.1",
            risk: "MEDIUM",
          },
          {
            req: "Grid/list view toggles must be keyboard accessible",
            detail: "If you offer different view modes, both the toggle controls and the resulting layouts must be navigable via keyboard.",
            wcag: "SC 2.1.1",
            risk: "MEDIUM",
          },
          {
            req: "Quick-view modals must trap and manage focus",
            detail: "When a quick-view popup opens, focus must move to the modal. Users must be able to close it with Escape. Focus must return to the trigger element when closed.",
            wcag: "SC 2.4.3",
            risk: "HIGH",
          },
        ].map((item) => (
          <div key={item.req} className="bg-[#141414] border border-[#262626] rounded-xl p-5">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-white font-semibold text-sm">{item.req}</h3>
              <div className="flex items-center gap-2 shrink-0">
                <span className="text-gray-500 text-xs">{item.wcag}</span>
                <span className={`text-xs font-medium px-2 py-1 rounded ${
                  item.risk === "CRITICAL" ? "text-red-400 bg-red-500/10" :
                  item.risk === "HIGH" ? "text-orange-400 bg-orange-500/10" :
                  "text-yellow-400 bg-yellow-500/10"
                }`}>{item.risk}</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm">{item.detail}</p>
          </div>
        ))}
      </div>

      {/* Product Detail Pages */}
      <h2 className="text-2xl font-bold text-white mt-12 mb-4">Product Detail Pages</h2>
      <p className="text-gray-300 leading-relaxed mb-6">
        Product detail pages are the most interaction-dense pages on an ecommerce site. Size selectors, color pickers, image galleries, reviews, and add-to-cart functionality all need to work for every user.
      </p>

      <div className="space-y-4 mb-8">
        {[
          {
            req: "Image galleries and zoom must be keyboard accessible",
            detail: "Users must be able to navigate between product images, trigger zoom, and close zoom using only a keyboard. Touch-only gestures (swipe, pinch-zoom) need button alternatives.",
            wcag: "SC 2.1.1 / 2.5.1",
            risk: "HIGH",
          },
          {
            req: "Size, color, and variant selectors need proper labels",
            detail: "Dropdowns, radio buttons, and swatch selectors all need visible labels or aria-labels. Color swatches that are only visual (no text label like \"Navy Blue\") are inaccessible to screen reader users and colorblind users.",
            wcag: "SC 1.3.1 / 4.1.2",
            risk: "CRITICAL",
          },
          {
            req: "Quantity inputs must be labeled and operable",
            detail: "The quantity stepper (+ / - buttons and input field) needs a label (\"Quantity\"), and the +/- buttons need accessible names. Custom steppers that only respond to mouse clicks fail keyboard users.",
            wcag: "SC 1.3.1 / 2.1.1",
            risk: "HIGH",
          },
          {
            req: "Add to Cart button must have a clear, accessible name",
            detail: "The button text should be descriptive. \"Add to Cart\" is clear. An icon-only cart button needs aria-label=\"Add to Cart\". After clicking, provide feedback (\"Item added to cart\") via aria-live region.",
            wcag: "SC 4.1.2 / 4.1.3",
            risk: "CRITICAL",
          },
          {
            req: "Customer reviews must be in accessible markup",
            detail: "Star ratings need text equivalents (\"4 out of 5 stars\"). Review text must be real text, not images. Sort and filter controls for reviews need labels.",
            wcag: "SC 1.1.1 / 1.3.1",
            risk: "MEDIUM",
          },
          {
            req: "Tabs for description, specs, reviews need ARIA tab pattern",
            detail: "Product detail tabs should use role=\"tablist\", role=\"tab\", role=\"tabpanel\", and proper aria-selected, aria-controls, and keyboard arrow navigation.",
            wcag: "SC 4.1.2",
            risk: "MEDIUM",
          },
        ].map((item) => (
          <div key={item.req} className="bg-[#141414] border border-[#262626] rounded-xl p-5">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-white font-semibold text-sm">{item.req}</h3>
              <div className="flex items-center gap-2 shrink-0">
                <span className="text-gray-500 text-xs">{item.wcag}</span>
                <span className={`text-xs font-medium px-2 py-1 rounded ${
                  item.risk === "CRITICAL" ? "text-red-400 bg-red-500/10" :
                  item.risk === "HIGH" ? "text-orange-400 bg-orange-500/10" :
                  "text-yellow-400 bg-yellow-500/10"
                }`}>{item.risk}</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm">{item.detail}</p>
          </div>
        ))}
      </div>

      {/* Shopping Cart */}
      <h2 className="text-2xl font-bold text-white mt-12 mb-4">Shopping Cart</h2>
      <div className="space-y-4 mb-8">
        {[
          {
            req: "Cart contents must be accessible to screen readers",
            detail: "Each item in the cart needs its name, price, quantity, and subtotal available as text. Data tables or structured lists work well. Avoid relying on visual layout alone.",
          },
          {
            req: "Remove and quantity controls need labels",
            detail: "A generic \"X\" button needs aria-label=\"Remove Blue Denim Jacket from cart\". Quantity inputs need to be associated with their product.",
          },
          {
            req: "Cart updates must announce changes",
            detail: "When quantity changes or items are removed, use aria-live regions to announce the change: \"Blue Denim Jacket removed from cart. Cart total: $129.99.\"",
          },
          {
            req: "Promo code input needs a label",
            detail: "The coupon/promo code field needs a visible or aria label. \"Enter promo code\" as placeholder text alone is not sufficient.",
          },
        ].map((item) => (
          <div key={item.req} className="bg-[#141414] border border-[#262626] rounded-xl p-5">
            <h3 className="text-white font-semibold text-sm mb-2">{item.req}</h3>
            <p className="text-gray-400 text-sm">{item.detail}</p>
          </div>
        ))}
      </div>

      {/* Checkout Flow */}
      <h2 className="text-2xl font-bold text-white mt-12 mb-4">Checkout Flow</h2>
      <p className="text-gray-300 leading-relaxed mb-6">
        Checkout is the most legally sensitive part of an ecommerce site. An inaccessible checkout directly prevents disabled users from completing purchases &mdash; the clearest possible demonstration of a barrier in court. This is where most ADA ecommerce lawsuits focus.
      </p>

      <div className="space-y-4 mb-8">
        {[
          {
            req: "Every form field must have a visible, associated label",
            detail: "Name, address, city, state, zip, email, phone, card number, expiration, CVV &mdash; every field needs a <label> element or aria-label. Placeholder text is NOT a label. This is the #1 most cited ecommerce violation.",
            risk: "CRITICAL",
          },
          {
            req: "Error messages must be specific and associated with fields",
            detail: "\"Please fix the errors below\" is not helpful. Each error must identify the field and the problem: \"Email address: Please enter a valid email (e.g., name@example.com).\" Errors should be programmatically associated via aria-describedby.",
            risk: "CRITICAL",
          },
          {
            req: "Address autocomplete must be keyboard accessible",
            detail: "Google Places autocomplete and similar widgets must work with keyboard navigation. Users must be able to arrow through suggestions and select with Enter.",
            risk: "HIGH",
          },
          {
            req: "Payment iframes must have titles",
            detail: "Third-party payment processors (Stripe Elements, PayPal, Square) embed iframes. Each iframe needs a title attribute: \"Credit card payment form.\" The content inside the iframe should also be accessible.",
            risk: "HIGH",
          },
          {
            req: "Step indicators must be accessible",
            detail: "Multi-step checkouts (Shipping > Payment > Review) need accessible step indicators. Use aria-current=\"step\" on the active step and ensure the step count is available to screen readers.",
            risk: "MEDIUM",
          },
          {
            req: "Order summary must be accessible before submission",
            detail: "Before the final \"Place Order\" button, users must be able to review everything &mdash; items, quantities, shipping, taxes, total &mdash; via screen reader. This also satisfies WCAG SC 3.3.4 (error prevention for financial transactions).",
            risk: "HIGH",
          },
          {
            req: "Session timeouts must warn users",
            detail: "If your checkout times out, warn users at least 20 seconds before expiration and give them the option to extend. Timed sessions that expire without warning violate SC 2.2.1.",
            risk: "HIGH",
          },
        ].map((item) => (
          <div key={item.req} className="bg-[#141414] border border-[#262626] rounded-xl p-5">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-white font-semibold text-sm">{item.req}</h3>
              <span className={`text-xs font-medium px-2 py-1 rounded shrink-0 ${
                item.risk === "CRITICAL" ? "text-red-400 bg-red-500/10" :
                item.risk === "HIGH" ? "text-orange-400 bg-orange-500/10" :
                "text-yellow-400 bg-yellow-500/10"
              }`}>{item.risk}</span>
            </div>
            <p className="text-gray-400 text-sm">{item.detail}</p>
          </div>
        ))}
      </div>

      {/* Search and Filtering */}
      <h2 className="text-2xl font-bold text-white mt-12 mb-4">Search and Filtering</h2>
      <div className="space-y-4 mb-8">
        {[
          {
            req: "Search input must be labeled",
            detail: "The search field needs a visible label or aria-label (\"Search products\"). The search button needs an accessible name. Autocomplete suggestions must be keyboard navigable.",
          },
          {
            req: "Filter controls need labels and state announcements",
            detail: "Checkbox filters (\"Size: S, M, L, XL\") need group labels and individual labels. When a filter is applied, announce the result count: \"24 products found for Size: Medium.\"",
          },
          {
            req: "Price range sliders need keyboard alternatives",
            detail: "Custom slider controls for price filtering must be operable via keyboard (arrow keys) and have proper ARIA attributes (role=\"slider\", aria-valuemin, aria-valuemax, aria-valuenow). Or provide text inputs as an alternative.",
          },
          {
            req: "Sort controls must be properly labeled",
            detail: "\"Sort by\" dropdowns need a label. The selected option should be announced to screen readers when changed.",
          },
          {
            req: "Dynamic result updates need live region announcements",
            detail: "When filtering changes the displayed products without a page reload, use aria-live to announce the new result count. Otherwise, screen reader users won't know anything changed.",
          },
        ].map((item) => (
          <div key={item.req} className="bg-[#141414] border border-[#262626] rounded-xl p-5">
            <h3 className="text-white font-semibold text-sm mb-2">{item.req}</h3>
            <p className="text-gray-400 text-sm">{item.detail}</p>
          </div>
        ))}
      </div>

      {/* Platform-specific */}
      <h2 className="text-2xl font-bold text-white mt-12 mb-4">Platform-Specific Guidance</h2>

      <div className="space-y-6 mb-8">
        <div className="bg-[#141414] border border-[#262626] rounded-xl p-6">
          <h3 className="text-white font-bold text-lg mb-3">Shopify</h3>
          <p className="text-gray-300 text-sm mb-3">
            Shopify&apos;s Dawn theme (default since 2.0) has significantly better accessibility than older themes, but it&apos;s not perfect out of the box. Key considerations:
          </p>
          <ul className="text-gray-400 text-sm space-y-2">
            <li>&#8226; <strong className="text-white">Theme choice matters enormously.</strong> Free themes vary widely in accessibility. Dawn is the safest starting point. Third-party themes often have poor contrast, missing form labels, and non-semantic HTML.</li>
            <li>&#8226; <strong className="text-white">Alt text must be added manually.</strong> Shopify provides an alt text field for product images, but it&apos;s empty by default. Train your team to fill this in for every product image upload.</li>
            <li>&#8226; <strong className="text-white">Apps can break accessibility.</strong> Third-party Shopify apps inject their own HTML/CSS/JS. Review, popup, and upsell apps are frequent offenders. Test after installing any new app.</li>
            <li>&#8226; <strong className="text-white">Checkout is semi-locked.</strong> Shopify&apos;s checkout is standardized, so core accessibility is handled. But custom checkout fields, scripts, or Checkout Extensibility apps need manual testing.</li>
          </ul>
        </div>

        <div className="bg-[#141414] border border-[#262626] rounded-xl p-6">
          <h3 className="text-white font-bold text-lg mb-3">WooCommerce (WordPress)</h3>
          <p className="text-gray-300 text-sm mb-3">
            WooCommerce inherits WordPress&apos;s accessibility, which means it depends heavily on your theme choice and plugin configuration.
          </p>
          <ul className="text-gray-400 text-sm space-y-2">
            <li>&#8226; <strong className="text-white">Use an accessibility-ready theme.</strong> WordPress.org tags themes as &ldquo;accessibility-ready&rdquo; after review. Start with one of these. Storefront (WooCommerce&apos;s own theme) is a reasonable baseline.</li>
            <li>&#8226; <strong className="text-white">Plugin conflicts are common.</strong> Page builders (Elementor, Divi) can override semantic HTML. Caching plugins can break ARIA live regions. Test thoroughly with each plugin combination.</li>
            <li>&#8226; <strong className="text-white">Payment gateways vary.</strong> Stripe for WooCommerce has decent accessibility. Some other gateways inject inaccessible iframes without titles. Test your specific payment flow with a screen reader.</li>
            <li>&#8226; <strong className="text-white">Image alt text is a WordPress feature.</strong> The media library supports alt text, but it requires manual entry. Bulk-editing alt text for existing products is possible via plugins or direct database update.</li>
          </ul>
        </div>

        <div className="bg-[#141414] border border-[#262626] rounded-xl p-6">
          <h3 className="text-white font-bold text-lg mb-3">Magento / Adobe Commerce</h3>
          <ul className="text-gray-400 text-sm space-y-2">
            <li>&#8226; <strong className="text-white">Luma theme has baseline accessibility</strong>, but it&apos;s outdated. Adobe Commerce customers should invest in custom accessible frontend (e.g., Hyvae/PWA Studio with accessibility auditing).</li>
            <li>&#8226; <strong className="text-white">Category layered navigation is a known issue.</strong> Filter controls in the sidebar often lack proper ARIA labels and keyboard handling. Custom work is usually needed.</li>
            <li>&#8226; <strong className="text-white">Configurable products (size/color dropdowns)</strong> generally work, but custom attribute swatches may lack accessible names.</li>
          </ul>
        </div>

        <div className="bg-[#141414] border border-[#262626] rounded-xl p-6">
          <h3 className="text-white font-bold text-lg mb-3">Custom / Headless (React, Vue, Next.js)</h3>
          <ul className="text-gray-400 text-sm space-y-2">
            <li>&#8226; <strong className="text-white">You have full control and full responsibility.</strong> No platform defaults will save you. Every component must be built accessibly from the ground up.</li>
            <li>&#8226; <strong className="text-white">SPA routing needs focus management.</strong> After client-side navigation, set focus to the main content area or new page heading. Otherwise, screen reader users lose their place.</li>
            <li>&#8226; <strong className="text-white">Dynamic content needs live regions.</strong> Cart updates, filter results, and form validation happening without page reload must use aria-live to announce changes.</li>
            <li>&#8226; <strong className="text-white">Use established component libraries.</strong> Radix UI, Headless UI, and React Aria provide pre-built accessible components for dialogs, dropdowns, tabs, and more. Don&apos;t reinvent the wheel.</li>
          </ul>
        </div>
      </div>

      {/* Cost comparison */}
      <h2 className="text-2xl font-bold text-white mt-12 mb-4">The Business Case: Cost of Compliance vs. Cost of Lawsuit</h2>
      <div className="bg-[#141414] border border-[#262626] rounded-xl p-6 mb-8">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-red-400 font-semibold mb-3">Cost of an ADA Lawsuit</h3>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>&#8226; Settlement: $10,000 &ndash; $75,000</li>
              <li>&#8226; Attorney fees (both sides): $20,000 &ndash; $80,000</li>
              <li>&#8226; Rush remediation: $10,000 &ndash; $50,000+</li>
              <li>&#8226; Monitoring requirement: $5,000/year</li>
              <li>&#8226; Lost sales during remediation</li>
              <li className="text-white font-semibold pt-2">Total: $45,000 &ndash; $205,000+</li>
            </ul>
          </div>
          <div>
            <h3 className="text-green-400 font-semibold mb-3">Cost of Proactive Compliance</h3>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>&#8226; AccessScore Pro Report: $14.99</li>
              <li>&#8226; Product image alt text: $0 &ndash; $1,000 (intern/VA)</li>
              <li>&#8226; Form label fixes: $0 &ndash; $500 (developer)</li>
              <li>&#8226; Theme/template updates: $0 &ndash; $2,000</li>
              <li>&#8226; Annual re-audit: $14.99</li>
              <li className="text-white font-semibold pt-2">Total: $15 &ndash; $3,530</li>
            </ul>
          </div>
        </div>
      </div>

      <p className="text-gray-300 leading-relaxed mb-4">
        Beyond legal risk, accessible ecommerce sites see measurable business benefits. Studies consistently show that accessible sites have lower bounce rates, higher conversion rates, and better SEO performance (accessibility and SEO share many technical requirements like alt text, semantic HTML, and page titles).
      </p>
      <p className="text-gray-300 leading-relaxed mb-8">
        The UK&apos;s Click-Away Pound Survey found that 69% of disabled customers click away from websites with barriers, resulting in an estimated &pound;17.1 billion in lost revenue per year in the UK alone. The US market opportunity is even larger.
      </p>

      {/* CTA */}
      <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-8 text-center mb-10">
        <h2 className="text-2xl font-bold text-white mb-3">Scan Your Online Store for Free</h2>
        <p className="text-gray-300 mb-6">AccessScore checks your ecommerce site for the most commonly cited ADA violations and tells you your legal risk tier in seconds. No signup, no install.</p>
        <a
          href="/"
          className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold text-lg transition-colors"
        >
          Check Your Store Now &mdash; Free
        </a>
        <p className="text-gray-500 text-sm mt-3">Scan your homepage and a product page for full coverage.</p>
      </div>

      <div className="mt-12 pt-8 border-t border-[#262626]">
        <p className="text-gray-500 text-sm">
          Related: <a href="/ada-compliance-for-ecommerce" className="text-blue-400 hover:underline">ADA Compliance for E-Commerce</a> &middot;{" "}
          <a href="/ada-website-compliance-checklist" className="text-blue-400 hover:underline">ADA Compliance Checklist 2026</a> &middot;{" "}
          <a href="/ada-lawsuit-statistics" className="text-blue-400 hover:underline">ADA Lawsuit Statistics</a> &middot;{" "}
          <a href="/wcag-accessibility-testing-tools" className="text-blue-400 hover:underline">Free Accessibility Testing Tools</a> &middot;{" "}
          <a href="/website-accessibility-audit-guide" className="text-blue-400 hover:underline">Accessibility Audit Guide</a>
        </p>
      </div>
    </main>
  );
}
