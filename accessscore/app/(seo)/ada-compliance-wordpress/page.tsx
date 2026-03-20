import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ADA Compliance for WordPress: Complete Guide 2026 | AccessScore",
  description:
    "Make your WordPress website ADA compliant. Step-by-step guide covering themes, plugins, content, and testing. Free WordPress accessibility scan included.",
  alternates: { canonical: "https://accessscore.autonomous-claude.com/ada-compliance-wordpress" },
};

export default function ADAComplianceWordPressPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "ADA Compliance for WordPress: Complete Guide 2026",
    description:
      "Make your WordPress website ADA compliant. Step-by-step guide covering themes, plugins, content, and testing.",
    datePublished: "2026-03-19",
    dateModified: "2026-03-19",
    author: { "@type": "Organization", name: "AccessScore" },
    publisher: {
      "@type": "Organization",
      name: "AccessScore",
      url: "https://accessscore.autonomous-claude.com",
    },
    mainEntityOfPage: "https://accessscore.autonomous-claude.com/ada-compliance-wordpress",
  };

  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <h1 className="text-4xl font-bold text-white mb-6">
        ADA Compliance for WordPress: The Complete 2026 Guide
      </h1>

      <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6 mb-8">
        <p className="text-red-300 font-medium text-lg">
          WordPress powers <strong>43% of all websites</strong> on the internet. That dominance
          makes WordPress sites highly visible targets for ADA lawsuits. In 2025, over 4,600
          web accessibility lawsuits were filed in the United States alone, and a disproportionate
          number targeted WordPress-powered sites because of their prevalence and the accessibility
          shortcomings built into many popular themes and plugins.
        </p>
      </div>

      <p className="text-gray-300 leading-relaxed mb-6">
        If you run a WordPress website, ADA compliance is not optional. Title III of the Americans
        with Disabilities Act requires businesses that serve the public to make their websites
        accessible to people with disabilities. Federal courts have repeatedly ruled that websites
        qualify as places of public accommodation. WordPress accessibility failures — broken heading
        structures, missing alt text, inaccessible contact forms — are among the most commonly cited
        violations in demand letters. This guide walks you through every step of making your
        WordPress site ADA compliant, from choosing the right theme to testing with automated tools
        and maintaining compliance over time.
      </p>

      {/* Section 1: Why WordPress Sites Are ADA Lawsuit Targets */}
      <h2 className="text-2xl font-bold text-white mt-12 mb-4">
        Why WordPress Sites Are ADA Lawsuit Targets
      </h2>
      <p className="text-gray-300 leading-relaxed mb-4">
        The connection between WordPress and ADA lawsuits is straightforward: popularity breeds
        visibility. With WordPress powering nearly half the web, plaintiffs and their attorneys
        have an enormous pool of targets. Many WordPress sites share the same underlying
        accessibility problems because they use the same handful of popular themes and page
        builders. When one theme has an accessibility flaw, thousands of sites inherit that flaw
        automatically.
      </p>
      <p className="text-gray-300 leading-relaxed mb-4">
        ADA compliance for WordPress is further complicated by the plugin ecosystem. A typical
        WordPress site runs 20 to 30 plugins, each injecting its own HTML, CSS, and JavaScript.
        Even if your theme is accessible, a single poorly coded plugin can break keyboard
        navigation, introduce unlabeled form fields, or create modal dialogs that trap focus. The
        result is a patchwork of code from dozens of different developers, none of whom coordinated
        on accessibility.
      </p>
      <p className="text-gray-300 leading-relaxed mb-6">
        Serial ADA plaintiffs specifically seek out WordPress sites for several reasons. First,
        WordPress sites are easy to identify through technology detection tools. Second, many
        WordPress site owners are small businesses without dedicated development teams, making them
        more likely to settle quickly. Third, the same violations appear across thousands of sites
        using the same themes, allowing law firms to file nearly identical complaints at scale. If
        your WordPress site has accessibility issues, the question is not whether you will be
        targeted, but when.
      </p>

      <div className="bg-[#141414] border border-[#262626] rounded-xl p-6 mb-8">
        <h3 className="text-white font-semibold mb-3">WordPress ADA Lawsuit Risk Factors</h3>
        <ul className="space-y-3">
          {[
            "WordPress sites are trivially identified via meta tags, wp-content paths, and HTTP headers",
            "Popular themes like Avada, Divi, and Elementor templates have documented accessibility gaps",
            "Contact Form 7, WooCommerce, and other major plugins ship with unlabeled inputs by default",
            "Page builders generate deeply nested, non-semantic HTML that screen readers struggle to parse",
            "Small business owners rarely audit accessibility, creating easy targets for serial plaintiffs",
            "One accessibility pattern flaw in a theme repeats across every page of the site",
          ].map((item) => (
            <li key={item} className="text-gray-400 text-sm flex items-start gap-2">
              <span className="text-red-400 mt-1">&#x2022;</span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Section 2: Common WordPress Accessibility Issues */}
      <h2 className="text-2xl font-bold text-white mt-12 mb-4">
        Common WordPress Accessibility Issues
      </h2>
      <p className="text-gray-300 leading-relaxed mb-4">
        Most WordPress themes fail basic WCAG 2.1 Level AA requirements out of the box. The
        WordPress core itself has made significant accessibility improvements over the years, but
        the theme and plugin ecosystem has not kept pace. Here are the most prevalent WordPress
        accessibility issues that put your site at legal risk.
      </p>

      <div className="space-y-4 mb-8">
        {[
          {
            title: "Missing or Decorative Alt Text on Images",
            risk: "CRITICAL",
            desc: "WordPress makes it easy to upload images but does not require alt text. The media library allows empty alt attributes, and many site owners skip them entirely. Featured images, hero banners, and product photos without descriptive alt text are the single most common WCAG violation on WordPress sites. Screen reader users encounter blank gaps where visual content should be described.",
          },
          {
            title: "Broken Heading Hierarchy",
            risk: "HIGH",
            desc: "Page builders and theme customizers let users choose heading levels (H1-H6) based on visual size rather than document structure. The result is pages that jump from H1 to H4, skip H2 entirely, or use multiple H1 tags. Screen reader users rely on heading hierarchy to navigate pages — broken structure makes content unusable for them.",
          },
          {
            title: "Insufficient Color Contrast",
            risk: "HIGH",
            desc: "Trendy theme designs prioritize aesthetics over readability. Light gray text on white backgrounds, thin fonts at small sizes, and low-contrast placeholder text in forms all fail WCAG 2.1 contrast ratio requirements (4.5:1 for normal text, 3:1 for large text). This affects users with low vision, color blindness, and anyone reading in bright conditions.",
          },
          {
            title: "Inaccessible Forms and Contact Pages",
            risk: "CRITICAL",
            desc: "Contact Form 7, Gravity Forms, WPForms, and Elementor forms often generate inputs without proper label associations. Placeholder text is used as a substitute for visible labels, but placeholders disappear when users begin typing and are not reliably announced by all screen readers. Required field indicators, error messages, and success confirmations frequently lack programmatic association with their inputs.",
          },
          {
            title: "Keyboard Navigation Failures",
            risk: "HIGH",
            desc: "Dropdown menus, hamburger navigation, accordion sections, tabs, and modal popups in WordPress themes commonly work only with mouse interaction. Focus indicators are removed via CSS (outline: none) for aesthetic reasons. Custom JavaScript widgets lack keyboard event handlers. Users who navigate by keyboard or assistive device cannot reach or operate these interactive elements.",
          },
          {
            title: "Missing Skip Navigation Links",
            risk: "MEDIUM",
            desc: "WordPress themes with large headers, sticky navigation bars, and sidebar widgets force keyboard users to tab through dozens of links on every page load before reaching the main content. A skip navigation link at the top of the page is a basic WCAG requirement that the majority of WordPress themes omit.",
          },
          {
            title: "Auto-Playing Media and Sliders",
            risk: "MEDIUM",
            desc: "Hero sliders, background videos, and auto-rotating testimonial carousels are staples of WordPress theme design. These create barriers for users with vestibular disorders, cognitive disabilities, and screen reader users. WCAG requires a mechanism to pause, stop, or hide any moving content that starts automatically.",
          },
        ].map((item) => (
          <div key={item.title} className="bg-[#141414] border border-[#262626] rounded-xl p-5">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-white font-semibold">{item.title}</h3>
              <span
                className={`text-xs font-medium px-2 py-1 rounded whitespace-nowrap ${
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
            <p className="text-gray-400 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Section 3: Choosing an Accessible WordPress Theme */}
      <h2 className="text-2xl font-bold text-white mt-12 mb-4">
        Choosing an Accessible WordPress Theme
      </h2>
      <p className="text-gray-300 leading-relaxed mb-4">
        Your WordPress theme is the foundation of your site&#39;s accessibility. Choosing the wrong
        theme means fighting accessibility issues on every page. Choosing the right one gives you a
        compliant baseline before you write a single word of content. Here is what to look for when
        evaluating themes for WordPress accessibility.
      </p>

      <div className="bg-[#141414] border border-[#262626] rounded-xl p-6 mb-8">
        <h3 className="text-white font-semibold mb-4">
          WordPress Accessible Theme Checklist
        </h3>
        <div className="space-y-3">
          {[
            {
              check: "accessibility-ready tag in WordPress.org theme directory",
              why: "WordPress reviews themes with this tag against specific accessibility guidelines. It is the minimum bar, not a guarantee, but it filters out the worst offenders.",
            },
            {
              check: "Semantic HTML5 structure (header, nav, main, aside, footer)",
              why: "Screen readers use landmark elements to let users jump between page sections. Themes that wrap everything in div elements provide no navigation structure.",
            },
            {
              check: "Visible focus indicators on all interactive elements",
              why: "Keyboard users need to see where they are on the page. Themes that remove focus outlines for aesthetics fail WCAG 2.4.7.",
            },
            {
              check: "Skip navigation link included",
              why: "A hidden-until-focused link that lets keyboard users bypass repetitive navigation and jump to main content. Required by WCAG 2.4.1.",
            },
            {
              check: "Color contrast ratios meet 4.5:1 for text, 3:1 for large text",
              why: "Test the theme demo with a contrast checker. Pay attention to body text, link text, button text, and form placeholder text.",
            },
            {
              check: "Responsive navigation works with keyboard alone",
              why: "Open the theme demo, unplug your mouse, and try navigating the menu with Tab, Enter, Escape, and arrow keys. If the mobile hamburger menu does not open via keyboard, the theme fails.",
            },
            {
              check: "Proper heading hierarchy in default templates",
              why: "Inspect the theme demo. There should be exactly one H1, followed by H2 sections, with H3 subsections. No skipped levels.",
            },
          ].map((item) => (
            <div key={item.check} className="border-b border-[#262626] pb-3 last:border-0 last:pb-0">
              <p className="text-green-400 text-sm font-medium">{item.check}</p>
              <p className="text-gray-500 text-xs mt-1">{item.why}</p>
            </div>
          ))}
        </div>
      </div>

      <p className="text-gray-300 leading-relaxed mb-6">
        Themes that pass these checks include the default Twenty Twenty-Five theme, Flavor theme
        from WordPress.org, and Flavor theme. The GeneratePress and Flavor themes have strong
        accessibility track records. For page builders, GeneratePress Blocks and Flavor
        Starter Sites offer better semantic output than Elementor or Divi, though no page builder
        is fully accessible by default. Always test the specific theme configuration you plan to
        use — a theme that passes accessibility checks in its default state may fail once you
        customize colors, fonts, and layout.
      </p>

      {/* Section 4: Essential Accessibility Plugins */}
      <h2 className="text-2xl font-bold text-white mt-12 mb-4">
        Essential WordPress Accessibility Plugins
      </h2>
      <p className="text-gray-300 leading-relaxed mb-4">
        No plugin can make an inaccessible WordPress site fully ADA compliant. However, the right
        plugins can fix common issues, add missing functionality, and help you maintain WordPress
        accessibility over time. Here are the most effective free and freemium plugins for WordPress
        ADA compliance.
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-8">
        {[
          {
            name: "WP Accessibility",
            price: "Free",
            features: [
              "Adds skip navigation links automatically",
              "Forces focus outline visibility",
              "Removes tabindex from elements that should not have it",
              "Adds language attribute to HTML if missing",
              "Removes redundant title attributes",
              "Fixes WordPress admin bar accessibility",
            ],
            note: "Developed by Joe Dolson, a WordPress core accessibility contributor. This is the most trusted accessibility plugin in the ecosystem.",
          },
          {
            name: "One Click Accessibility",
            price: "Free",
            features: [
              "Adds accessibility toolbar for end users",
              "High contrast mode toggle",
              "Font size adjustment",
              "Link highlighting",
              "Readable font toggle",
              "Focus indicator enhancement",
            ],
            note: "Adds a visible accessibility toolbar to your site. Useful as a supplement but does not fix underlying code issues. Do not rely on this alone for ADA compliance.",
          },
          {
            name: "Sa11y (Accessibility Quality Assurance)",
            price: "Free",
            features: [
              "In-page accessibility checker for content editors",
              "Flags missing alt text, heading issues, link problems",
              "Shows warnings directly on the page in the WordPress editor",
              "Helps non-technical content editors create accessible content",
              "Does not modify front-end output",
              "Catches issues before they go live",
            ],
            note: "A quality assurance tool, not a fix. Integrates into the editing workflow so content creators see accessibility warnings before publishing.",
          },
          {
            name: "Flavor (Accessibility Toolbar)",
            price: "Free / Premium",
            features: [
              "Front-end accessibility adjustments for visitors",
              "Contrast, font size, cursor size, and line height options",
              "Reading guide and dyslexia-friendly font",
              "Keyboard navigation enhancements",
              "Animation pause controls",
              "GDPR compliant (no data collection)",
            ],
            note: "User-facing toolbar that lets visitors customize their experience. Demonstrates good faith effort toward accessibility but does not replace actual code fixes.",
          },
        ].map((plugin) => (
          <div
            key={plugin.name}
            className="bg-[#141414] border border-[#262626] rounded-xl p-5"
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-white font-semibold">{plugin.name}</h3>
              <span className="text-xs font-medium px-2 py-1 rounded text-green-400 bg-green-500/10">
                {plugin.price}
              </span>
            </div>
            <ul className="space-y-1 mb-3">
              {plugin.features.map((f) => (
                <li key={f} className="text-gray-400 text-xs flex items-start gap-1.5">
                  <span className="text-green-400 mt-0.5">&#x2022;</span>
                  {f}
                </li>
              ))}
            </ul>
            <p className="text-gray-500 text-xs italic">{plugin.note}</p>
          </div>
        ))}
      </div>

      <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-5 mb-8">
        <h3 className="text-yellow-300 font-semibold mb-2">
          Warning About Accessibility Overlay Plugins
        </h3>
        <p className="text-gray-400 text-sm">
          Avoid WordPress plugins that promise to make your site ADA compliant by adding a
          JavaScript overlay widget. These overlay solutions (accessiBe, AudioEye, UserWay, and
          similar) have been widely criticized by the disability community, rejected by courts as
          insufficient compliance measures, and in some cases have been specifically named in ADA
          lawsuits. An overlay does not fix the underlying HTML issues. It adds a layer on top that
          often conflicts with existing assistive technology. The{" "}
          <a href="/accessibe-alternative" className="text-blue-400 hover:underline">
            AccessScore overlay comparison
          </a>{" "}
          explains why in detail.
        </p>
      </div>

      {/* Section 5: Content Accessibility Checklist */}
      <h2 className="text-2xl font-bold text-white mt-12 mb-4">
        Content Accessibility Checklist for WordPress Editors
      </h2>
      <p className="text-gray-300 leading-relaxed mb-4">
        Even with an accessible theme and the right plugins, the content you publish determines
        whether your WordPress site is truly ADA compliant. Every blog post, page, and media upload
        must follow these WordPress WCAG guidelines. Print this checklist and share it with everyone
        who creates content on your site.
      </p>

      <div className="bg-[#141414] border border-[#262626] rounded-xl p-6 mb-8">
        <div className="space-y-4">
          {[
            {
              category: "Images and Media",
              items: [
                "Every informative image has descriptive alt text (not just the filename)",
                "Decorative images have empty alt attributes (alt=\"\") so screen readers skip them",
                "Complex images (charts, infographics) have long descriptions in surrounding text",
                "Videos have captions and transcripts available",
                "Audio content has text transcripts",
                "No auto-playing media without user-accessible pause controls",
              ],
            },
            {
              category: "Text and Headings",
              items: [
                "One H1 per page (usually the post title, handled by theme)",
                "Headings follow a logical hierarchy: H2 for sections, H3 for subsections",
                "No heading levels are skipped (H2 never followed directly by H4)",
                "Headings are used for structure, not for visual styling (use CSS instead)",
                "Body text is at least 16px and uses readable line spacing (1.5 or higher)",
                "No blocks of text are justified (text-align: justify causes uneven word spacing)",
              ],
            },
            {
              category: "Links and Buttons",
              items: [
                "Link text describes the destination (not \"click here\" or \"read more\")",
                "Links are visually distinguishable from surrounding text (underline or strong contrast)",
                "Links that open in new tabs are labeled (e.g., \"opens in new window\")",
                "Buttons use the button element, links use the a element (no div onclick handlers)",
                "Download links specify the file type and size",
              ],
            },
            {
              category: "Tables and Lists",
              items: [
                "Data tables use th elements for header cells with scope attributes",
                "Complex tables have caption elements describing the table content",
                "Lists use proper ul, ol, or dl markup (not manual line breaks with dashes)",
                "Tables are not used for layout purposes",
              ],
            },
            {
              category: "Color and Visual Design",
              items: [
                "Information is never conveyed by color alone (add icons, text labels, or patterns)",
                "Text meets 4.5:1 contrast ratio against its background",
                "Large text (18px+ bold or 24px+ normal) meets 3:1 contrast ratio",
                "Form error states use more than just red color (icons, text messages)",
              ],
            },
          ].map((section) => (
            <div key={section.category}>
              <h3 className="text-white font-semibold mb-2">{section.category}</h3>
              <ul className="space-y-1.5">
                {section.items.map((item) => (
                  <li key={item} className="text-gray-400 text-sm flex items-start gap-2">
                    <span className="text-gray-600 mt-0.5">&#9744;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <p className="text-gray-300 leading-relaxed mb-6">
        For the complete technical checklist covering all WCAG 2.1 Level AA requirements, see our{" "}
        <a href="/accessibility-checklist" className="text-blue-400 hover:underline">
          full accessibility checklist for 2026
        </a>
        . The checklist above focuses specifically on what WordPress content editors control day to
        day.
      </p>

      {/* Section 6: Testing Your WordPress Site */}
      <h2 className="text-2xl font-bold text-white mt-12 mb-4">
        Testing Your WordPress Site for ADA Compliance
      </h2>
      <p className="text-gray-300 leading-relaxed mb-4">
        You cannot know whether your WordPress site is ADA compliant without testing it.
        Accessibility testing for WordPress should combine automated scanning with manual keyboard
        and screen reader testing. Automated tools catch approximately 30-40% of WCAG violations —
        the easily detectable, pattern-based issues. Manual testing catches the rest: logical
        heading structure, meaningful link text, and whether interactive elements actually work with
        assistive technology.
      </p>

      <div className="bg-[#141414] border border-[#262626] rounded-xl p-6 mb-8">
        <h3 className="text-white font-semibold mb-4">WordPress Accessibility Testing Approach</h3>
        <div className="space-y-4">
          <div>
            <h4 className="text-blue-400 font-medium mb-2">Step 1: Automated Scan</h4>
            <p className="text-gray-400 text-sm mb-2">
              Run your WordPress site through an automated accessibility scanner. AccessScore&#39;s
              free scan works on any WordPress site — enter your URL and get an instant ADA compliance
              score with specific violations identified and prioritized by legal risk. The scanner
              checks 16 WCAG criteria including image alt text, heading hierarchy, form labels,
              keyboard navigation, and color contrast.
            </p>
            <p className="text-gray-400 text-sm">
              Scan multiple pages: your homepage, a blog post, a contact page, and any page with
              forms or interactive elements. WordPress accessibility issues often vary by page
              template, so a single-page scan gives an incomplete picture.
            </p>
          </div>
          <div>
            <h4 className="text-blue-400 font-medium mb-2">Step 2: Keyboard-Only Navigation</h4>
            <p className="text-gray-400 text-sm">
              Unplug your mouse and navigate your entire WordPress site using only the keyboard. Tab
              through every link, menu item, form field, and button. Press Enter to activate links
              and buttons. Press Escape to close modals and dropdowns. Use arrow keys inside menus
              and radio button groups. If you cannot reach any element, see where it is, or activate
              it, that is a WCAG 2.1 failure that must be fixed.
            </p>
          </div>
          <div>
            <h4 className="text-blue-400 font-medium mb-2">Step 3: Screen Reader Testing</h4>
            <p className="text-gray-400 text-sm">
              Test with NVDA (free, Windows) or VoiceOver (built into macOS and iOS). Navigate your
              WordPress site by headings (H key in NVDA), landmarks (D key), and form elements (F
              key). Listen to how images, links, and forms are announced. If an image is announced as
              &quot;image&quot; without a description, or a form field is announced as &quot;edit&quot;
              without a label, those are violations.
            </p>
          </div>
          <div>
            <h4 className="text-blue-400 font-medium mb-2">Step 4: Professional Audit Report</h4>
            <p className="text-gray-400 text-sm">
              For a comprehensive, documented assessment of your WordPress site&#39;s ADA compliance
              status, the{" "}
              <a href="/" className="text-blue-400 hover:underline">
                AccessScore Professional Audit Report
              </a>{" "}
              ($29.99) provides an executive summary, full violation inventory with severity ratings,
              prioritized remediation timeline, and compliance status documentation. This report is
              designed for business owners who need to demonstrate good-faith compliance efforts or
              respond to a demand letter.
            </p>
          </div>
        </div>
      </div>

      <p className="text-gray-300 leading-relaxed mb-6">
        For a deeper dive into automated versus manual testing methodologies, see our{" "}
        <a
          href="/website-accessibility-audit-guide"
          className="text-blue-400 hover:underline"
        >
          website accessibility audit guide
        </a>
        . That guide covers testing protocols, documentation standards, and how to prioritize fixes
        when your WordPress site has dozens or hundreds of violations.
      </p>

      {/* Section 7: Ongoing Maintenance */}
      <h2 className="text-2xl font-bold text-white mt-12 mb-4">
        Ongoing Maintenance: WordPress Updates Can Break Accessibility
      </h2>
      <p className="text-gray-300 leading-relaxed mb-4">
        Making your WordPress site ADA compliant is not a one-time project. WordPress core updates,
        theme updates, and plugin updates can introduce new accessibility issues at any time. A
        theme update that changes the navigation markup can break keyboard accessibility overnight.
        A plugin update that modifies form rendering can remove label associations. A WordPress
        major version that changes the block editor can alter heading output structure.
      </p>
      <p className="text-gray-300 leading-relaxed mb-4">
        ADA compliance for WordPress requires ongoing vigilance. Build these practices into your
        site maintenance workflow:
      </p>

      <ul className="space-y-3 mb-6">
        {[
          "Run an automated accessibility scan after every WordPress core update (major versions change front-end output)",
          "Test keyboard navigation after every theme update (even minor versions can change HTML structure)",
          "Review form accessibility after plugin updates (Contact Form 7, WooCommerce, and other form-generating plugins frequently change markup between versions)",
          "Re-scan after adding any new plugin that generates front-end output (sliders, galleries, popups, chat widgets)",
          "Audit new content before publishing — use the Sa11y plugin or the WordPress content checklist above",
          "Schedule quarterly comprehensive accessibility scans covering all major page templates",
          "Maintain a staging environment and test updates there before deploying to production",
          "Document your accessibility testing process so it survives team member turnover",
        ].map((item) => (
          <li key={item} className="text-gray-400 text-sm flex items-start gap-2">
            <span className="text-blue-400 mt-1">&#x2022;</span>
            {item}
          </li>
        ))}
      </ul>

      <p className="text-gray-300 leading-relaxed mb-6">
        The AccessScore free scan takes seconds and works on any WordPress URL. Bookmark it and run
        it after every significant change to your site. Catching a regression the day it is
        introduced costs minutes to fix. Catching it in a demand letter costs thousands.
      </p>

      {/* Section 8: WordPress-Specific WCAG Fixes */}
      <h2 className="text-2xl font-bold text-white mt-12 mb-4">
        WordPress-Specific Fixes for Common WCAG Failures
      </h2>
      <p className="text-gray-300 leading-relaxed mb-4">
        Here are the most common WordPress WCAG failures with specific, actionable fixes. These
        address the issues most frequently cited in ADA demand letters targeting WordPress sites.
      </p>

      <div className="space-y-6 mb-8">
        {[
          {
            issue: "Missing Alt Text on Images",
            wcag: "WCAG 1.1.1 Non-text Content",
            fix: "Open the WordPress Media Library. Click each image and fill in the Alt Text field. For informative images, describe the content and purpose. For decorative images, leave the alt text field empty (WordPress will output alt=\"\"). For bulk fixes, use the \"Enable Media Replace\" plugin or write a SQL query to identify all attachment posts with empty _wp_attachment_image_alt meta values.",
            code: "/* Find images missing alt text in your database */\nSELECT p.ID, p.post_title, p.guid\nFROM wp_posts p\nLEFT JOIN wp_postmeta pm ON p.ID = pm.post_id\n  AND pm.meta_key = '_wp_attachment_image_alt'\nWHERE p.post_type = 'attachment'\n  AND p.post_mime_type LIKE 'image/%'\n  AND (pm.meta_value IS NULL OR pm.meta_value = '');",
          },
          {
            issue: "Unlabeled Contact Form Fields",
            wcag: "WCAG 1.3.1 Info and Relationships / 4.1.2 Name, Role, Value",
            fix: "In Contact Form 7, add explicit labels around each input. Do not rely on placeholder attributes as the sole label. In the form editor, wrap each field like this:",
            code: '<label>Your Name (required)\n  [text* your-name]\n</label>\n\n<label>Your Email (required)\n  [email* your-email]\n</label>\n\n<label>Your Message\n  [textarea your-message]\n</label>',
          },
          {
            issue: "Missing Skip Navigation",
            wcag: "WCAG 2.4.1 Bypass Blocks",
            fix: "Install the WP Accessibility plugin and enable the skip link feature. Alternatively, add the following to your theme's header.php immediately after the opening body tag. Use CSS to hide it visually until focused:",
            code: '<a class="skip-link screen-reader-text" href="#main-content">\n  Skip to content\n</a>\n\n/* CSS */\n.skip-link {\n  position: absolute;\n  left: -9999px;\n  top: auto;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n}\n.skip-link:focus {\n  position: fixed;\n  top: 10px;\n  left: 10px;\n  width: auto;\n  height: auto;\n  padding: 12px 20px;\n  background: #000;\n  color: #fff;\n  font-size: 16px;\n  z-index: 100000;\n}',
          },
          {
            issue: "Focus Indicators Removed by Theme CSS",
            wcag: "WCAG 2.4.7 Focus Visible",
            fix: "Many WordPress themes add outline: none to interactive elements. Override this in your child theme's stylesheet or via the WordPress Customizer > Additional CSS:",
            code: "/* Restore visible focus indicators */\na:focus,\nbutton:focus,\ninput:focus,\ntextarea:focus,\nselect:focus,\n[tabindex]:focus {\n  outline: 2px solid #4A90D9;\n  outline-offset: 2px;\n  box-shadow: 0 0 0 4px rgba(74, 144, 217, 0.3);\n}",
          },
          {
            issue: "Non-Semantic Page Builder Output",
            wcag: "WCAG 1.3.1 Info and Relationships",
            fix: "If your page builder generates deeply nested div elements without semantic structure, add ARIA landmarks manually. In your page builder's advanced settings or via custom HTML blocks, add role attributes to major sections. Better yet, switch to the WordPress block editor (Gutenberg), which generates cleaner semantic HTML by default.",
            code: '<!-- Add ARIA landmarks to key sections -->\n<div role="banner"><!-- site header --></div>\n<div role="navigation" aria-label="Main menu"><!-- nav --></div>\n<div role="main"><!-- page content --></div>\n<div role="complementary"><!-- sidebar --></div>\n<div role="contentinfo"><!-- footer --></div>',
          },
          {
            issue: "Auto-Playing Sliders and Carousels",
            wcag: "WCAG 2.2.2 Pause, Stop, Hide",
            fix: "If your WordPress slider plugin auto-rotates, add pause on hover AND a visible pause/play button. In most slider plugins (Revolution Slider, MetaSlider, Smart Slider), look for a setting like \"Pause on hover\" and \"Show navigation controls.\" If the plugin does not support accessible controls, replace it with a static hero section. Auto-playing sliders rarely improve conversions and always hurt accessibility.",
            code: "",
          },
        ].map((item) => (
          <div key={item.issue} className="bg-[#141414] border border-[#262626] rounded-xl p-5">
            <h3 className="text-white font-semibold mb-1">{item.issue}</h3>
            <p className="text-xs text-blue-400 mb-3">{item.wcag}</p>
            <p className="text-gray-400 text-sm mb-3">{item.fix}</p>
            {item.code && (
              <pre className="bg-[#0a0a0a] border border-[#333] rounded-lg p-4 overflow-x-auto text-xs text-gray-300">
                <code>{item.code}</code>
              </pre>
            )}
          </div>
        ))}
      </div>

      <p className="text-gray-300 leading-relaxed mb-6">
        For a comprehensive guide on fixing accessibility issues beyond WordPress-specific problems,
        see our{" "}
        <a href="/fix-website-accessibility" className="text-blue-400 hover:underline">
          complete guide to fixing website accessibility issues
        </a>
        . That resource covers all WCAG 2.1 Level AA success criteria with code examples and
        testing procedures.
      </p>

      {/* Cost Comparison */}
      <h2 className="text-2xl font-bold text-white mt-12 mb-4">
        The Cost of WordPress ADA Compliance vs. Non-Compliance
      </h2>
      <div className="bg-[#141414] border border-[#262626] rounded-xl p-6 mb-8">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-red-400 font-semibold mb-3">If You Ignore It</h3>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>&#x2022; ADA demand letter settlement: $5,000-$25,000</li>
              <li>&#x2022; Attorney fees (your lawyer): $10,000-$30,000</li>
              <li>&#x2022; Rush WordPress remediation: $3,000-$15,000</li>
              <li>&#x2022; Ongoing monitoring requirement: $3,000/year</li>
              <li>&#x2022; Reputational damage and lost customers</li>
              <li className="text-white font-semibold pt-2">
                Total exposure: $21,000-$73,000+
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-green-400 font-semibold mb-3">Proactive Compliance</h3>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>&#x2022; AccessScore scan: Free</li>
              <li>&#x2022; Professional Audit Report: $29.99</li>
              <li>&#x2022; WP Accessibility plugin: Free</li>
              <li>&#x2022; Accessible theme: $0-$79</li>
              <li>&#x2022; Fix common issues (DIY): $0-$500</li>
              <li>&#x2022; Quarterly re-scan: Free</li>
              <li className="text-white font-semibold pt-2">
                Total: $29.99-$609
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* CTA */}
      <h2 className="text-2xl font-bold text-white mt-12 mb-4">
        Start Your WordPress ADA Compliance Audit Now
      </h2>
      <p className="text-gray-300 leading-relaxed mb-6">
        ADA compliance for WordPress starts with understanding where you stand. Enter your WordPress
        site URL into AccessScore&#39;s free scanner and get an instant ADA compliance score with
        specific violations identified, prioritized by legal risk, and accompanied by fix code you
        can implement today. The scan takes seconds, requires no signup, and works on any WordPress
        site regardless of theme or hosting provider.
      </p>
      <p className="text-gray-300 leading-relaxed mb-6">
        For WordPress site owners who need documented proof of compliance efforts, the Professional
        Audit Report ($29.99) provides everything you need: executive summary, complete violation
        inventory, prioritized remediation timeline, and compliance status documentation suitable
        for legal review.
      </p>

      <div className="text-center mt-10">
        <a
          href="/"
          className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold text-lg transition-colors"
        >
          Scan Your WordPress Site for Free
        </a>
        <p className="text-gray-500 text-sm mt-3">
          Instant ADA compliance score. No signup required. Works on any WordPress site.
        </p>
      </div>

      {/* Internal Links */}
      <div className="mt-12 pt-8 border-t border-[#262626]">
        <p className="text-gray-500 text-sm">
          Related:{" "}
          <a href="/ada-compliance-checker" className="text-blue-400 hover:underline">
            ADA Compliance Checker
          </a>{" "}
          &middot;{" "}
          <a href="/accessibility-checklist" className="text-blue-400 hover:underline">
            Accessibility Checklist 2026
          </a>{" "}
          &middot;{" "}
          <a href="/fix-website-accessibility" className="text-blue-400 hover:underline">
            Fix Website Accessibility Issues
          </a>{" "}
          &middot;{" "}
          <a href="/website-accessibility-audit-guide" className="text-blue-400 hover:underline">
            Website Accessibility Audit Guide
          </a>
        </p>
      </div>
    </main>
  );
}
