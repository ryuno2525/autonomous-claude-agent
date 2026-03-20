import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ADA Compliance for Shopify: Complete Store Guide 2026 | AccessScore",
  description:
    "Make your Shopify store ADA compliant. Covers themes, apps, product pages, checkout, and WCAG testing. Free Shopify accessibility scan.",
  alternates: { canonical: "https://accessscore.autonomous-claude.com/ada-compliance-shopify" },
};

export default function ADAComplianceShopifyPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "ADA Compliance for Shopify: Complete Store Guide 2026",
    description:
      "Make your Shopify store ADA compliant. Covers themes, apps, product pages, checkout, and WCAG testing.",
    datePublished: "2026-03-19",
    dateModified: "2026-03-19",
    author: { "@type": "Organization", name: "AccessScore" },
    publisher: {
      "@type": "Organization",
      name: "AccessScore",
      url: "https://accessscore.autonomous-claude.com",
    },
    mainEntityOfPage: "https://accessscore.autonomous-claude.com/ada-compliance-shopify",
  };

  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <h1 className="text-4xl font-bold text-white mb-6">
        ADA Compliance for Shopify: The Complete Store Owner Guide (2026)
      </h1>

      <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6 mb-8">
        <p className="text-red-300 font-medium text-lg">
          E-commerce websites account for <strong>77% of all ADA web accessibility lawsuits</strong>.
          Shopify powers over 4.6 million online stores, making it one of the most frequently targeted
          platforms. If you run a Shopify store, ADA compliance is not optional — it is a legal
          requirement with real financial consequences.
        </p>
      </div>

      <p className="text-gray-300 leading-relaxed mb-6">
        Running a Shopify store means you are operating a place of public accommodation under Title III
        of the Americans with Disabilities Act. Federal courts have consistently ruled that commercial
        websites fall under ADA jurisdiction, and Shopify stores are no exception. The good news: Shopify
        gives you a solid foundation. The bad news: the foundation alone is not enough. Your theme
        choices, app installations, product content, and customizations all introduce accessibility gaps
        that create legal exposure. This guide walks you through every aspect of Shopify ADA compliance
        — what Shopify handles, what it does not, and exactly how to close the gaps before a demand
        letter arrives.
      </p>

      {/* Section 1: Why Shopify Stores Face ADA Lawsuits */}
      <h2 className="text-2xl font-bold text-white mt-12 mb-4">
        Why Shopify Stores Face ADA Lawsuits
      </h2>
      <p className="text-gray-300 leading-relaxed mb-4">
        ADA web accessibility lawsuits have grown every year since 2018, and e-commerce is the single
        most targeted industry. Plaintiff law firms specifically seek out online stores because the legal
        argument is straightforward: a commercial website that sells goods to the public is a place of
        public accommodation, and if a person with a disability cannot use it, that is discrimination
        under Title III.
      </p>
      <p className="text-gray-300 leading-relaxed mb-4">
        Shopify stores are particularly attractive targets for several reasons. First, Shopify stores
        are clearly commercial — there is no ambiguity about whether the site sells goods. Second, many
        Shopify merchants use third-party themes and apps that introduce accessibility violations the
        store owner never audited. Third, product catalogs with hundreds or thousands of items multiply
        every single accessibility issue across the entire inventory. A missing alt text pattern on one
        product template becomes 500 violations across 500 product pages.
      </p>
      <div className="bg-[#141414] border border-[#262626] rounded-xl p-6 mb-8">
        <h3 className="text-white font-semibold mb-3">Shopify ADA Lawsuit Risk Factors</h3>
        <ul className="space-y-3">
          {[
            "E-commerce represents 77% of all ADA web lawsuits filed in the United States",
            "Average ADA web lawsuit settlement ranges from $10,000 to $75,000",
            "Serial plaintiffs file hundreds of near-identical suits targeting online stores",
            "Shopify themes from the Theme Store are NOT guaranteed to be ADA compliant",
            "Third-party Shopify apps frequently inject inaccessible widgets into your storefront",
            "Product images without alt text are the single most cited violation in e-commerce lawsuits",
            "Demand letters typically give 15-30 days to respond — remediation takes longer than that",
          ].map((item) => (
            <li key={item} className="text-gray-400 text-sm flex items-start gap-2">
              <span className="text-red-400 mt-1">*</span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Section 2: Shopify's Built-in Accessibility Features */}
      <h2 className="text-2xl font-bold text-white mt-12 mb-4">
        Shopify Accessibility Features: What the Platform Provides
      </h2>
      <p className="text-gray-300 leading-relaxed mb-4">
        Shopify has made meaningful investments in platform-level accessibility. Understanding what
        Shopify handles out of the box helps you focus your efforts on the gaps. The Shopify checkout,
        in particular, is largely managed by Shopify itself and receives regular accessibility
        improvements. But the storefront — your theme, your content, your apps — is your responsibility.
      </p>
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <div className="bg-[#141414] border border-green-500/20 rounded-xl p-5">
          <h3 className="text-green-400 font-semibold mb-3">What Shopify Handles</h3>
          <ul className="text-sm text-gray-400 space-y-2">
            <li>* Checkout flow accessibility (Shopify-managed)</li>
            <li>* Admin panel accessibility for store owners</li>
            <li>* Payment processing form labels and structure</li>
            <li>* Cart functionality in Shopify-maintained themes</li>
            <li>* Semantic HTML in Dawn and other official themes</li>
            <li>* Focus management in Shopify-controlled components</li>
            <li>* ARIA attributes in platform-generated markup</li>
          </ul>
        </div>
        <div className="bg-[#141414] border border-red-500/20 rounded-xl p-5">
          <h3 className="text-red-400 font-semibold mb-3">What Shopify Does NOT Handle</h3>
          <ul className="text-sm text-gray-400 space-y-2">
            <li>* Product image alt text (you must write this)</li>
            <li>* Third-party theme accessibility issues</li>
            <li>* Third-party app widget accessibility</li>
            <li>* Custom Liquid code accessibility</li>
            <li>* Color contrast in your chosen theme/brand colors</li>
            <li>* Video and media captions on product pages</li>
            <li>* Content structure and heading hierarchy</li>
          </ul>
        </div>
      </div>
      <p className="text-gray-300 leading-relaxed mb-6">
        The critical takeaway: Shopify gives you accessible infrastructure, but your content decisions,
        theme choices, and app installations determine whether your store is actually ADA compliant.
        Shopify accessibility is a shared responsibility between the platform and the merchant. Most
        Shopify ADA compliance failures come from the merchant side, not the platform side.
      </p>

      {/* Section 3: Common Shopify Accessibility Issues */}
      <h2 className="text-2xl font-bold text-white mt-12 mb-4">
        Common Shopify Accessibility Issues
      </h2>
      <p className="text-gray-300 leading-relaxed mb-4">
        After scanning hundreds of Shopify stores, these are the accessibility violations we see most
        frequently. Each one creates legal exposure under the ADA and fails specific WCAG 2.1 AA
        success criteria. Making your Shopify store ADA compliant means addressing every one of these
        issues.
      </p>
      <div className="space-y-4 mb-8">
        {[
          {
            title: "Product Images Without Alt Text",
            wcag: "WCAG 1.1.1",
            risk: "CRITICAL",
            desc: "This is the number one accessibility violation on Shopify stores. Every product image needs descriptive alt text that communicates what the image shows. 'Blue denim jacket, front view, button closure' is useful. 'product-img-4827.jpg' or an empty alt attribute is a violation. With a catalog of 200 products and 4 images each, that is 800 potential violations from a single missing pattern.",
          },
          {
            title: "Inaccessible Filter and Sort Menus",
            wcag: "WCAG 2.1.1",
            risk: "HIGH",
            desc: "Collection pages with price range sliders, color swatches, size filters, and sort dropdowns are often completely unusable with a keyboard. Custom filter implementations in third-party themes frequently lack focus indicators, ARIA attributes, and keyboard event handlers. A screen reader user who cannot filter your product catalog is effectively locked out of your store.",
          },
          {
            title: "Missing Form Labels on Newsletter Signups",
            wcag: "WCAG 1.3.1",
            risk: "HIGH",
            desc: "Nearly every Shopify store has an email signup form in the footer. Many themes use placeholder text instead of a visible label element. Placeholder text disappears when the user starts typing and is not reliably announced by screen readers. Every input field needs a programmatically associated label element.",
          },
          {
            title: "Low Color Contrast on Sale Prices and Badges",
            wcag: "WCAG 1.4.3",
            risk: "HIGH",
            desc: "Sale badges, compare-at prices, and promotional banners frequently use light text on colored backgrounds that fail the 4.5:1 contrast ratio requirement. Red text on a dark background for 'SALE' badges is a common offender. Gray strikethrough text for original prices often falls below the required ratio.",
          },
          {
            title: "Carousel and Slideshow Issues",
            wcag: "WCAG 2.2.2",
            risk: "MEDIUM",
            desc: "Homepage hero slideshows and product image carousels often auto-rotate without a pause button, lack keyboard controls for navigation, and do not announce slide changes to screen readers. Every auto-playing carousel needs a visible pause control and keyboard-accessible navigation.",
          },
          {
            title: "Quick View Modal Traps",
            wcag: "WCAG 2.1.2",
            risk: "HIGH",
            desc: "Quick view popups that show product details without leaving the collection page frequently trap keyboard focus. When a modal opens, focus should move into it. When it closes, focus should return to the trigger element. Many Shopify themes get this wrong, leaving keyboard users stranded inside a modal or losing their place on the page.",
          },
          {
            title: "Missing Skip Navigation Link",
            wcag: "WCAG 2.4.1",
            risk: "MEDIUM",
            desc: "Shopify stores typically have extensive header navigation with categories, subcategories, search, cart, and account links. Without a skip navigation link, keyboard users must tab through 30-50+ links on every single page load before reaching the main content. Dawn theme includes skip navigation, but many third-party themes omit it.",
          },
        ].map((item) => (
          <div key={item.title} className="bg-[#141414] border border-[#262626] rounded-xl p-5">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-white font-semibold">{item.title}</h3>
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-500">{item.wcag}</span>
                <span
                  className={`text-xs font-medium px-2 py-1 rounded ${
                    item.risk === "CRITICAL"
                      ? "text-red-400 bg-red-500/10"
                      : item.risk === "HIGH"
                        ? "text-orange-400 bg-orange-500/10"
                        : "text-yellow-400 bg-yellow-500/10"
                  }`}
                >
                  {item.risk}
                </span>
              </div>
            </div>
            <p className="text-gray-400 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Section 4: Choosing an Accessible Shopify Theme */}
      <h2 className="text-2xl font-bold text-white mt-12 mb-4">
        Choosing an Accessible Shopify Theme
      </h2>
      <p className="text-gray-300 leading-relaxed mb-4">
        Your Shopify theme is the single biggest factor in your store's baseline accessibility. A
        well-built theme with semantic HTML, proper ARIA attributes, and keyboard support gives you a
        strong foundation. A poorly built theme means fighting accessibility issues on every page. Here
        is what to look for when evaluating Shopify themes for ADA compliance.
      </p>
      <div className="bg-[#141414] border border-[#262626] rounded-xl p-6 mb-6">
        <h3 className="text-white font-semibold mb-4">Shopify Theme Accessibility Checklist</h3>
        <div className="space-y-3">
          {[
            {
              check: "Semantic HTML structure",
              detail:
                "The theme uses proper heading hierarchy (h1, h2, h3), landmark elements (header, nav, main, footer), and list markup for navigation. Inspect the source — if everything is divs and spans, move on.",
            },
            {
              check: "Skip navigation link",
              detail:
                "Press Tab on the homepage. The first focusable element should be a 'Skip to content' link. Shopify's Dawn theme includes this. Many third-party themes do not.",
            },
            {
              check: "Keyboard navigation throughout",
              detail:
                "Navigate the entire store using only Tab, Enter, Escape, and arrow keys. Can you open menus, select product variants, add to cart, and reach the checkout? If any action requires a mouse, the theme fails.",
            },
            {
              check: "Visible focus indicators",
              detail:
                "As you tab through elements, each one should have a clearly visible outline or highlight. If focused elements look identical to unfocused ones, keyboard users cannot tell where they are on the page.",
            },
            {
              check: "Color contrast compliance",
              detail:
                "Check body text, headings, buttons, links, and form labels against their backgrounds. WCAG AA requires 4.5:1 for normal text, 3:1 for large text. Many minimalist themes use light gray text that fails.",
            },
            {
              check: "Responsive without information loss",
              detail:
                "Zoom the browser to 200%. All content should remain visible and usable. No horizontal scrolling should be required. Product grids should reflow to single column.",
            },
            {
              check: "Accessible mobile menu",
              detail:
                "The hamburger menu must be a button (not a div), announce its state (expanded/collapsed), and trap focus when open. Test with a screen reader on mobile.",
            },
          ].map((item) => (
            <div key={item.check} className="border-b border-[#262626] pb-3 last:border-0 last:pb-0">
              <p className="text-white text-sm font-medium">{item.check}</p>
              <p className="text-gray-500 text-xs mt-1">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
      <p className="text-gray-300 leading-relaxed mb-6">
        Shopify's own <strong>Dawn</strong> theme is currently the most accessible free option. It was
        built with accessibility in mind, includes skip navigation, semantic markup, and keyboard
        support. If you are starting a new store or considering a theme change, Dawn is the safest
        baseline for Shopify ADA compliance. Other Shopify official themes (Craft, Sense, Ride) also
        receive accessibility attention, but third-party themes from the Theme Store vary wildly in
        quality.
      </p>

      {/* Section 5: Shopify Accessibility Apps */}
      <h2 className="text-2xl font-bold text-white mt-12 mb-4">
        Shopify Accessibility Apps: What Works and What Does Not
      </h2>
      <p className="text-gray-300 leading-relaxed mb-4">
        The Shopify App Store lists dozens of accessibility apps. Some are genuinely useful. Many are
        not. And one entire category — accessibility overlays — is actively harmful to your compliance
        posture. Understanding the difference is critical for making your Shopify store ADA compliant
        without wasting money or creating a false sense of security.
      </p>
      <div className="space-y-4 mb-8">
        <div className="bg-[#141414] border border-red-500/20 rounded-xl p-5">
          <h3 className="text-red-400 font-semibold mb-2">
            Avoid: Accessibility Overlay Widgets
          </h3>
          <p className="text-gray-400 text-sm mb-3">
            Apps that add a floating accessibility icon to your store and claim to make it ADA
            compliant with a single install are overlay products. Names like accessiBe, UserWay,
            AudioEye, and EqualWeb fall into this category. These overlays attempt to fix accessibility
            issues with JavaScript after the page loads, but they do not work reliably.
          </p>
          <p className="text-gray-400 text-sm mb-3">
            The National Federation of the Blind has publicly opposed overlays. Over 700 accessibility
            professionals signed an open letter at overlayfactsheet.com condemning them. Courts have
            ruled that the presence of an overlay does not constitute ADA compliance. Multiple companies
            have been sued despite having overlay products installed. AccessiBe customers have been
            specifically targeted by plaintiff firms because the overlay's presence signals awareness of
            accessibility obligations without actual compliance.
          </p>
          <p className="text-gray-400 text-sm">
            If you have an overlay installed on your Shopify store, remove it. It is not protecting
            you, and it may be making you a more attractive target. Read our detailed analysis in the{" "}
            <a href="/accessibe-alternative" className="text-blue-400 hover:underline">
              accessiBe alternative guide
            </a>.
          </p>
        </div>
        <div className="bg-[#141414] border border-green-500/20 rounded-xl p-5">
          <h3 className="text-green-400 font-semibold mb-2">
            Useful: Alt Text Generation Apps
          </h3>
          <p className="text-gray-400 text-sm">
            Apps that help you bulk-generate or bulk-edit product image alt text address the single
            most common Shopify accessibility violation. Look for apps that let you review and edit
            generated alt text before publishing — fully automated alt text without human review often
            produces low-quality descriptions. The best approach is using AI-generated alt text as a
            starting point, then manually refining descriptions for your top-selling products.
          </p>
        </div>
        <div className="bg-[#141414] border border-green-500/20 rounded-xl p-5">
          <h3 className="text-green-400 font-semibold mb-2">
            Useful: Accessibility Audit and Monitoring Apps
          </h3>
          <p className="text-gray-400 text-sm">
            Apps that scan your store and report specific violations with actionable fix instructions
            are genuinely useful. They help you identify issues, prioritize fixes, and track progress
            over time. The key distinction: audit tools tell you what is broken so you can fix it.
            Overlays claim to fix it automatically without you doing anything. The former is honest
            engineering. The latter is marketing.
          </p>
        </div>
      </div>

      {/* Section 6: Product Page Accessibility Checklist */}
      <h2 className="text-2xl font-bold text-white mt-12 mb-4">
        Product Page Accessibility Checklist for Shopify
      </h2>
      <p className="text-gray-300 leading-relaxed mb-4">
        Product pages are where Shopify accessibility matters most. They are the pages customers
        interact with most deeply — viewing images, selecting variants, reading descriptions, and
        adding to cart. A single inaccessible pattern on your product template affects every product in
        your catalog. Use this checklist to audit your Shopify product pages for WCAG compliance.
      </p>
      <div className="bg-[#141414] border border-[#262626] rounded-xl p-6 mb-8">
        <div className="space-y-4">
          {[
            {
              category: "Images",
              items: [
                "Every product image has descriptive alt text (not filename, not empty)",
                "Alt text describes the product: color, material, style, view angle",
                "Decorative images (lifestyle shots) use empty alt (alt='') with role='presentation'",
                "Zoom functionality works with keyboard and announces state changes",
                "Image gallery navigation is keyboard accessible with arrow keys",
              ],
            },
            {
              category: "Variant Selection",
              items: [
                "Size, color, and material selectors have visible labels",
                "Color swatches include text labels (not just color squares)",
                "Selected variant state is announced to screen readers",
                "Out-of-stock variants are announced as unavailable, not just visually grayed out",
                "Custom option fields (engraving, monogram) have associated labels",
              ],
            },
            {
              category: "Product Information",
              items: [
                "Price is in a semantic element and announced by screen readers",
                "Sale price and compare-at price are both labeled ('Was $50, now $35')",
                "Product description uses proper heading hierarchy (not just bold text)",
                "Size charts are in accessible tables with proper headers",
                "Tabs or accordion for details/shipping/reviews are keyboard navigable",
              ],
            },
            {
              category: "Add to Cart",
              items: [
                "Add to Cart button is a real button element",
                "Button text is descriptive ('Add Blue Denim Jacket to Cart')",
                "Loading/success state is announced to screen readers",
                "Quantity input has a visible label and accepts keyboard input",
                "Cart confirmation message is announced via an ARIA live region",
              ],
            },
          ].map((section) => (
            <div key={section.category}>
              <h3 className="text-white font-semibold mb-2">{section.category}</h3>
              <ul className="space-y-1.5">
                {section.items.map((item) => (
                  <li key={item} className="text-gray-400 text-sm flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5 shrink-0">[ ]</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Section 7: Checkout Accessibility */}
      <h2 className="text-2xl font-bold text-white mt-12 mb-4">
        Shopify Checkout Accessibility: What You Can and Cannot Control
      </h2>
      <p className="text-gray-300 leading-relaxed mb-4">
        Shopify's checkout is largely controlled by the platform. On Shopify Basic, Standard, and
        Advanced plans, you have limited ability to modify checkout markup. This is actually good news
        for Shopify ADA compliance: Shopify's checkout team actively maintains accessibility in the
        checkout flow, including proper form labels, keyboard navigation, error messaging, and screen
        reader support.
      </p>
      <p className="text-gray-300 leading-relaxed mb-4">
        However, there are elements within the checkout experience that you do control and that can
        introduce accessibility issues:
      </p>
      <div className="bg-[#141414] border border-[#262626] rounded-xl p-6 mb-8">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-white font-semibold mb-3">You Control</h3>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>* Checkout branding colors (ensure contrast compliance)</li>
              <li>* Custom checkout scripts (Shopify Plus only)</li>
              <li>* Order confirmation email accessibility</li>
              <li>* Post-purchase page content</li>
              <li>* Cart page before entering checkout</li>
              <li>* Shipping and return policy page content</li>
              <li>* Trust badges and security seal images (need alt text)</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3">Shopify Controls</h3>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>* Checkout form field structure and labels</li>
              <li>* Payment method input accessibility</li>
              <li>* Address autocomplete implementation</li>
              <li>* Error message display and announcement</li>
              <li>* Step navigation between checkout phases</li>
              <li>* Order summary layout and semantics</li>
              <li>* Express checkout button implementations</li>
            </ul>
          </div>
        </div>
      </div>
      <p className="text-gray-300 leading-relaxed mb-6">
        For Shopify Plus merchants with checkout extensibility access: any custom checkout UI extensions
        you build must meet WCAG 2.1 AA independently. Shopify's platform compliance does not extend to
        your custom extensions. Test every checkout customization with keyboard navigation and a screen
        reader before deploying to production.
      </p>

      {/* Section 8: Testing Your Shopify Store */}
      <h2 className="text-2xl font-bold text-white mt-12 mb-4">
        Testing Your Shopify Store for ADA Compliance with AccessScore
      </h2>
      <p className="text-gray-300 leading-relaxed mb-4">
        Automated testing is the fastest way to identify the most common Shopify accessibility
        violations. AccessScore scans your Shopify store and returns a prioritized list of WCAG
        violations with specific fix instructions. The scan covers image alt text, form labels, heading
        structure, keyboard accessibility, ARIA usage, color references, and more — every check mapped
        to a specific WCAG 2.1 success criterion.
      </p>
      <p className="text-gray-300 leading-relaxed mb-4">
        For a complete Shopify accessibility audit, scan these pages at minimum:
      </p>
      <div className="bg-[#141414] border border-[#262626] rounded-xl p-6 mb-6">
        <ul className="space-y-3">
          {[
            {
              page: "Homepage",
              why: "Tests navigation, hero slideshow, featured products, newsletter signup, and footer",
            },
            {
              page: "Collection page",
              why: "Tests filter menus, sort controls, product grid, pagination, and breadcrumbs",
            },
            {
              page: "Product page",
              why: "Tests image alt text, variant selectors, add to cart, reviews, and product tabs",
            },
            {
              page: "Cart page",
              why: "Tests quantity controls, remove buttons, discount code input, and checkout link",
            },
            {
              page: "Contact/support page",
              why: "Tests form accessibility, required field indicators, and error handling",
            },
            {
              page: "Blog post (if applicable)",
              why: "Tests content structure, heading hierarchy, image alt text, and comment forms",
            },
          ].map((item) => (
            <li key={item.page} className="flex items-start gap-3">
              <span className="text-blue-400 font-semibold text-sm whitespace-nowrap min-w-[140px]">
                {item.page}
              </span>
              <span className="text-gray-400 text-sm">{item.why}</span>
            </li>
          ))}
        </ul>
      </div>
      <p className="text-gray-300 leading-relaxed mb-6">
        Automated scans catch approximately 30-40% of WCAG violations. The remaining issues require
        manual testing — keyboard navigation testing, screen reader testing, and cognitive accessibility
        review. For Shopify store owners who need a comprehensive assessment, our{" "}
        <strong className="text-white">Professional Audit Report ($29.99)</strong> provides an executive
        summary, prioritized remediation plan with estimated fix times, and a compliance roadmap you can
        share with your development team or Shopify expert.
      </p>

      <div className="text-center my-10">
        <a
          href="/"
          className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold text-lg transition-colors"
        >
          Scan Your Shopify Store — Free
        </a>
        <p className="text-gray-500 text-sm mt-3">
          Instant results. No signup required. Enter your Shopify store URL and see your accessibility
          score in seconds.
        </p>
      </div>

      {/* Section 9: Ecommerce-Specific WCAG Requirements */}
      <h2 className="text-2xl font-bold text-white mt-12 mb-4">
        Ecommerce-Specific WCAG Requirements for Shopify Stores
      </h2>
      <p className="text-gray-300 leading-relaxed mb-4">
        While all WCAG 2.1 AA criteria apply to Shopify stores, certain requirements have
        disproportionate impact on e-commerce sites. These are the WCAG success criteria that matter
        most for Shopify ADA compliance, organized by the frequency with which they appear in
        e-commerce ADA lawsuits.
      </p>
      <div className="space-y-3 mb-8">
        {[
          {
            criterion: "1.1.1 Non-text Content",
            frequency: "Present in 95% of e-commerce lawsuits",
            shopify:
              "Every product image, banner, icon, and decorative graphic needs appropriate alt text. In Shopify, set alt text in the product image editor or via the Shopify Admin API. This is the single most important WCAG criterion for Shopify stores.",
          },
          {
            criterion: "1.4.3 Contrast (Minimum)",
            frequency: "Present in 85% of e-commerce lawsuits",
            shopify:
              "Check your theme's text colors against backgrounds. Pay special attention to sale badges, promotional banners, placeholder text in search bars, and footer text. Many Shopify themes use gray text on white backgrounds that fails the 4.5:1 ratio.",
          },
          {
            criterion: "2.1.1 Keyboard",
            frequency: "Present in 70% of e-commerce lawsuits",
            shopify:
              "Every interactive element must work with keyboard alone. Test mega menus, product filters, variant selectors, add-to-cart buttons, quantity controls, and modal dialogs. Shopify apps are the most common source of keyboard-inaccessible widgets.",
          },
          {
            criterion: "1.3.1 Info and Relationships",
            frequency: "Present in 65% of e-commerce lawsuits",
            shopify:
              "Form fields need associated labels. Data tables need header cells. Lists need list markup. In Shopify, this often means editing theme Liquid templates to add label elements to newsletter signups, search inputs, and contact forms.",
          },
          {
            criterion: "4.1.2 Name, Role, Value",
            frequency: "Present in 60% of e-commerce lawsuits",
            shopify:
              "Custom UI components (accordions, tabs, dropdowns) need ARIA roles and states. Shopify apps that inject custom widgets frequently violate this criterion because they use div and span elements without ARIA attributes.",
          },
          {
            criterion: "2.4.4 Link Purpose",
            frequency: "Present in 50% of e-commerce lawsuits",
            shopify:
              "Every link must have descriptive text. 'Read more' and 'Click here' without context are violations. Product cards with images wrapped in links need the product name in the link's accessible name. 'Shop now' buttons need to indicate what they link to.",
          },
        ].map((item) => (
          <div key={item.criterion} className="bg-[#141414] border border-[#262626] rounded-xl p-5">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-white font-semibold text-sm">{item.criterion}</h3>
              <span className="text-xs text-orange-400">{item.frequency}</span>
            </div>
            <p className="text-gray-400 text-sm">{item.shopify}</p>
          </div>
        ))}
      </div>

      <p className="text-gray-300 leading-relaxed mb-4">
        For the complete list of ecommerce WCAG requirements, see our{" "}
        <a href="/ecommerce-accessibility-requirements" className="text-blue-400 hover:underline">
          ecommerce accessibility requirements guide
        </a>. For a broader ADA compliance overview for online stores, read our{" "}
        <a href="/ada-compliance-for-ecommerce" className="text-blue-400 hover:underline">
          ADA compliance for e-commerce
        </a>{" "}
        page.
      </p>

      {/* Cost Comparison */}
      <h2 className="text-2xl font-bold text-white mt-12 mb-4">
        The Cost of Shopify ADA Compliance vs. Non-Compliance
      </h2>
      <div className="bg-[#141414] border border-[#262626] rounded-xl p-6 mb-8">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-red-400 font-semibold mb-3">If You Get a Demand Letter</h3>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>* Legal consultation: $2,000-$5,000</li>
              <li>* Settlement: $10,000-$75,000</li>
              <li>* Plaintiff attorney fees: $15,000-$50,000</li>
              <li>* Emergency remediation: $5,000-$25,000</li>
              <li>* Ongoing monitoring (court-ordered): $5,000/year</li>
              <li>* Lost revenue during remediation</li>
              <li className="text-white font-semibold pt-2">Total: $37,000-$160,000+</li>
            </ul>
          </div>
          <div>
            <h3 className="text-green-400 font-semibold mb-3">Proactive Compliance</h3>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>* AccessScore Professional Report: $29.99</li>
              <li>* Switch to Dawn theme: $0</li>
              <li>* Add product image alt text: $0-$500 (DIY)</li>
              <li>* Fix form labels and ARIA: $0-$1,000</li>
              <li>* Hire Shopify accessibility expert: $500-$3,000</li>
              <li>* Annual re-audit: $29.99</li>
              <li className="text-white font-semibold pt-2">Total: $30-$4,560</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Quick Start Steps */}
      <h2 className="text-2xl font-bold text-white mt-12 mb-4">
        Quick Start: 5 Steps to Shopify ADA Compliance Today
      </h2>
      <div className="space-y-4 mb-8">
        {[
          {
            step: "1",
            title: "Scan your store with AccessScore",
            desc: "Enter your Shopify store URL at accessscore.autonomous-claude.com. You will get an instant accessibility score, risk tier, and prioritized list of violations. This takes 10 seconds and costs nothing.",
          },
          {
            step: "2",
            title: "Fix product image alt text",
            desc: "Go to Products in your Shopify admin. Click each product, click each image, and add descriptive alt text. For large catalogs, use a bulk alt text app from the Shopify App Store. This single step addresses the most common violation in e-commerce ADA lawsuits.",
          },
          {
            step: "3",
            title: "Audit your theme's keyboard navigation",
            desc: "Put your mouse away. Navigate your entire store using only Tab, Enter, and Escape. Can you access every menu, select every variant, and add items to cart? Note every point where keyboard navigation breaks.",
          },
          {
            step: "4",
            title: "Remove any overlay widgets",
            desc: "If you have accessiBe, UserWay, or any similar accessibility overlay installed, remove it. It does not protect you from lawsuits and may make you a target. Replace it with actual fixes to your theme's underlying code.",
          },
          {
            step: "5",
            title: "Get a Professional Audit Report",
            desc: "For a complete compliance roadmap with prioritized fixes, estimated remediation times, and an executive summary you can share with your team, order an AccessScore Professional Audit Report for $29.99. It covers WCAG 2.1 AA and ADA compliance in a format designed for non-technical store owners.",
          },
        ].map((item) => (
          <div key={item.step} className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm">
              {item.step}
            </div>
            <div>
              <h3 className="text-white font-semibold mb-1">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Final CTA */}
      <div className="bg-blue-600/10 border border-blue-500/20 rounded-xl p-8 text-center my-10">
        <h2 className="text-2xl font-bold text-white mb-3">
          Is Your Shopify Store ADA Compliant?
        </h2>
        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
          Find out in seconds. AccessScore scans your Shopify store for WCAG 2.1 violations, shows you
          exactly what to fix, and tells you your legal risk level. Free scan, no account required.
        </p>
        <a
          href="/"
          className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold text-lg transition-colors"
        >
          Scan Your Shopify Store Now
        </a>
        <p className="text-gray-500 text-sm mt-4">
          Need a comprehensive report?{" "}
          <a href="/ada-compliance-checker" className="text-blue-400 hover:underline">
            Learn about the Professional Audit Report
          </a>{" "}
          ($29.99)
        </p>
      </div>

      {/* Internal Links Footer */}
      <div className="mt-12 pt-8 border-t border-[#262626]">
        <p className="text-gray-500 text-sm">
          Related:{" "}
          <a href="/ada-compliance-for-ecommerce" className="text-blue-400 hover:underline">
            ADA Compliance for E-Commerce
          </a>{" "}
          &middot;{" "}
          <a href="/ecommerce-accessibility-requirements" className="text-blue-400 hover:underline">
            Ecommerce Accessibility Requirements
          </a>{" "}
          &middot;{" "}
          <a href="/ada-compliance-checker" className="text-blue-400 hover:underline">
            ADA Compliance Checker
          </a>{" "}
          &middot;{" "}
          <a href="/accessibe-alternative" className="text-blue-400 hover:underline">
            accessiBe Alternative
          </a>
        </p>
      </div>
    </main>
  );
}
