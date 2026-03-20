import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Privacy Policy for Game Apps | Mobile Game Privacy Policy Generator - PolicyForge",
  description:
    "Generate a privacy policy for your mobile game app. Covers Unity Analytics, Firebase, AdMob, GameAnalytics, in-app purchases, social features, children's games (COPPA), and Google Play / App Store requirements.",
  keywords:
    "privacy policy for game app, mobile game privacy policy, unity game privacy policy, game app privacy policy template, privacy policy for mobile game, game privacy policy generator, COPPA game app, children's game privacy policy, in-app purchase privacy policy, AdMob privacy policy game",
  openGraph: {
    title: "Privacy Policy for Game Apps — Free Generator",
    description:
      "Create a compliant privacy policy for your mobile game. Covers ad SDKs, analytics, in-app purchases, social features, COPPA for children's games, and both Google Play and Apple App Store requirements.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy for Game Apps — Free Generator | PolicyForge",
    description:
      "Generate a game-specific privacy policy covering AdMob, Unity Analytics, GameAnalytics, in-app purchases, COPPA, and app store compliance.",
  },
};

const GAME_COMMON_SDKS = [
  {
    name: "Unity Analytics",
    integration: "Built into Unity Engine (Unity Services)",
    dataCollected: [
      "Device identifiers (IDFV, Android ID)",
      "Session duration and frequency",
      "In-game events and custom metrics",
      "Device model, OS version, screen resolution",
      "Country and language settings",
      "App version and Unity version",
    ],
    policyNote:
      "Unity Analytics is often enabled by default in Unity projects. Disclose analytics collection even if you haven't explicitly added tracking code. Unity processes data on their servers.",
  },
  {
    name: "Unity Ads / ironSource",
    integration: "Unity Ads SDK / LevelPlay Mediation",
    dataCollected: [
      "Advertising ID (GAID/IDFA)",
      "IP address and approximate location",
      "Device info (model, OS, screen size)",
      "Ad interaction data (views, clicks, completions)",
      "App usage patterns for ad targeting",
      "Install attribution data",
    ],
    policyNote:
      "Triggers ATT prompt on iOS. Must declare Third-Party Advertising purpose. Disclose personalized vs. non-personalized ads. Unity Ads shares data with demand partners.",
  },
  {
    name: "Google AdMob",
    integration: "google_mobile_ads / com.google.android.gms:play-services-ads",
    dataCollected: [
      "Advertising ID (GAID/IDFA)",
      "Device info and IP address",
      "Ad interaction data (clicks, impressions, video completions)",
      "Approximate location (IP-based)",
      "App usage for ad personalization",
    ],
    policyNote:
      "Triggers ATT on iOS. Must declare Third-Party Advertising purpose in Data Safety. Disclose whether ads are personalized or non-personalized. AdMob shares data with Google's ad network partners.",
  },
  {
    name: "Firebase Analytics",
    integration: "Firebase SDK (com.google.firebase:firebase-analytics)",
    dataCollected: [
      "Device identifiers",
      "App usage events and screen views",
      "Session duration and frequency",
      "OS version and device model",
      "Crash-free user metrics",
    ],
    policyNote:
      "Disclose analytics collection in both Data Safety and Nutrition Labels. Firebase sends data to Google servers. Often bundled with other Firebase services.",
  },
  {
    name: "GameAnalytics",
    integration: "GameAnalytics SDK (gameanalytics.com)",
    dataCollected: [
      "Session events (start, end, duration)",
      "Business events (in-app purchases, virtual currency)",
      "Progression events (level starts, completions, fails)",
      "Error events (crashes, custom errors)",
      "Design events (custom game metrics)",
      "Device identifiers and platform info",
    ],
    policyNote:
      "Purpose-built for games. Collects detailed gameplay telemetry. Disclose game progression tracking and purchase event logging. GameAnalytics processes data on their servers.",
  },
  {
    name: "AppLovin MAX (Mediation)",
    integration: "AppLovin MAX SDK",
    dataCollected: [
      "Advertising ID (GAID/IDFA)",
      "IP address and location data",
      "Device hardware and software info",
      "Ad interaction and engagement data",
      "Install and attribution data",
      "Bidding and auction data",
    ],
    policyNote:
      "Ad mediation platform that connects to multiple ad networks. Each mediated network may collect additional data. Disclose all ad partners in your privacy policy.",
  },
  {
    name: "Firebase Crashlytics",
    integration: "Firebase Crashlytics SDK",
    dataCollected: [
      "Crash logs and stack traces",
      "Device state at time of crash",
      "Device identifiers (installation UUID)",
      "OS version and app version",
    ],
    policyNote:
      "Classified as Diagnostics data. Disclose crash data collection and that it is sent to Google for processing. Essential for game stability monitoring.",
  },
  {
    name: "PlayFab / Azure PlayFab",
    integration: "PlayFab SDK (Microsoft)",
    dataCollected: [
      "Player account data (display name, email if provided)",
      "Player statistics and leaderboard data",
      "Virtual currency and inventory data",
      "Login history and device identifiers",
      "Custom player data and game state",
    ],
    policyNote:
      "Backend-as-a-service for games. Stores player data on Microsoft Azure servers. Disclose all player data stored remotely and data retention practices.",
  },
  {
    name: "Facebook SDK / Meta SDK",
    integration: "Facebook SDK for Unity / Native",
    dataCollected: [
      "Facebook user ID and profile info",
      "Device identifiers and advertising ID",
      "App events for install attribution",
      "In-app purchase events for ad optimization",
      "Friends list (if social features enabled)",
    ],
    policyNote:
      "Triggers ATT on iOS. Shares data with Meta for advertising. Must disclose Third-Party Advertising and Tracking purposes. Required for Facebook Instant Games.",
  },
  {
    name: "Google Play Games Services",
    integration: "com.google.android.gms:play-services-games-v2",
    dataCollected: [
      "Google account info (player ID, display name)",
      "Achievement and leaderboard data",
      "Saved game data (cloud saves)",
      "Play time and game statistics",
    ],
    policyNote:
      "Google manages player identity. Disclose that Google account data is accessed for achievements, leaderboards, and cloud saves. Data is stored on Google servers.",
  },
];

const GAME_DATA_CATEGORIES = [
  {
    category: "Player Identity",
    types: [
      "Username / display name",
      "Email address (if account required)",
      "Social login IDs (Google, Facebook, Apple)",
      "Player unique identifiers",
      "Age or date of birth",
    ],
    gameContext:
      "Many games allow guest play, but social features, cloud saves, and leaderboards require identity data.",
  },
  {
    category: "Gameplay Data",
    types: [
      "Level progression and completion",
      "High scores and achievements",
      "Play session duration and frequency",
      "In-game actions and decisions",
      "Tutorial completion status",
    ],
    gameContext:
      "Analytics SDKs track gameplay data to improve game design, balance difficulty, and reduce churn.",
  },
  {
    category: "Purchase Data",
    types: [
      "In-app purchase history",
      "Virtual currency transactions",
      "Subscription status",
      "Transaction receipts",
      "Payment method type (but not card numbers)",
    ],
    gameContext:
      "In-app purchases go through Apple/Google, but your game tracks what was purchased. Disclose purchase tracking.",
  },
  {
    category: "Advertising Data",
    types: [
      "Advertising ID (GAID / IDFA)",
      "Ad interaction events",
      "Rewarded video completions",
      "Ad revenue attribution",
      "Install source and campaign data",
    ],
    gameContext:
      "Ad-supported games collect extensive advertising data. Each ad network SDK in your mediation stack must be disclosed.",
  },
  {
    category: "Social & Multiplayer",
    types: [
      "Friends lists and social connections",
      "Chat messages and voice chat",
      "Guild / clan membership",
      "Player-generated content (names, images)",
      "Match history and opponent data",
    ],
    gameContext:
      "Social features significantly increase privacy obligations. Chat and voice data may contain personal info.",
  },
  {
    category: "Device & Technical",
    types: [
      "Device model and OS version",
      "Screen resolution and GPU info",
      "IP address and country",
      "Network type (WiFi / cellular)",
      "Storage and memory availability",
    ],
    gameContext:
      "Used for crash reporting, performance optimization, and ensuring game compatibility across devices.",
  },
];

const PLATFORM_REQUIREMENTS = [
  {
    requirement: "Privacy policy required?",
    googlePlay: "Yes — mandatory for all apps",
    appStore: "Yes — mandatory for all apps",
  },
  {
    requirement: "Where to add URL?",
    googlePlay: "Play Console > Store Listing > Privacy Policy",
    appStore: "App Store Connect > App Information > Privacy Policy URL",
  },
  {
    requirement: "Data disclosure format",
    googlePlay: "Data Safety section (structured form)",
    appStore: "Privacy Nutrition Labels (structured form)",
  },
  {
    requirement: "Ad tracking consent?",
    googlePlay: "No OS-level prompt (but GDPR may require consent)",
    appStore: "Yes — ATT prompt required for IDFA access",
  },
  {
    requirement: "Children's apps rules?",
    googlePlay: "Families Policy + Designed for Families program",
    appStore: "Kids Category + COPPA compliance required",
  },
  {
    requirement: "In-app purchase disclosure?",
    googlePlay: "Must declare Financial Info > Purchase history in Data Safety",
    appStore: "Must declare Purchases in Nutrition Labels",
  },
  {
    requirement: "Ad network disclosure?",
    googlePlay: "Must list all ad SDK data in Data Safety",
    appStore: "Must list all ad SDK data in Nutrition Labels + Privacy Manifests",
  },
  {
    requirement: "Data deletion mechanism?",
    googlePlay: "Yes — required since December 2023",
    appStore: "Yes — required since June 2022",
  },
  {
    requirement: "Non-compliance penalty",
    googlePlay: "App removal, developer account suspension",
    appStore: "App rejection, removal from store",
  },
];

const COMPETITOR_PRICING = [
  {
    name: "Termly",
    price: "$120/year",
    note: "Annual subscription, per-website",
  },
  {
    name: "iubenda",
    price: "$90/year",
    note: "Pro plan required for mobile apps",
  },
  {
    name: "TermsFeed",
    price: "$89+",
    note: "One-time, but limited updates",
  },
  {
    name: "Enzuzo",
    price: "$49/month",
    note: "Monthly subscription",
  },
  {
    name: "A lawyer",
    price: "$500-2,000+",
    note: "Per document, no template reuse",
  },
  {
    name: "PolicyForge",
    price: "$4.99",
    note: "One-time payment, unlimited updates, game-specific",
    highlight: true,
  },
];

const FAQ_ITEMS = [
  {
    q: "Do I need a privacy policy for my mobile game?",
    a: "Yes, absolutely. Both Google Play and the Apple App Store require a privacy policy for every published app, including games. Even if your game doesn't collect explicit user data like names or emails, it almost certainly uses analytics SDKs, ad networks, or crash reporting that collect device identifiers and usage data. Both stores will reject your game during review if you don't have a valid, publicly accessible privacy policy URL. Additionally, laws like GDPR and CCPA apply to any app accessible by users in those jurisdictions — which includes virtually all games on public app stores.",
  },
  {
    q: "What data do most mobile games collect?",
    a: "Most mobile games collect more data than developers realize. At minimum, games typically collect: device identifiers (Advertising ID, device model, OS version), gameplay analytics (session length, level progression, retention metrics), crash and error reports, and network information (IP address, which reveals approximate location). Games with ads add: ad interaction data, impression tracking, and install attribution. Games with in-app purchases track: transaction history, virtual currency balances, and purchase patterns. Social games add: user accounts, friends lists, chat logs, and player-generated content. Your privacy policy must disclose all of this.",
  },
  {
    q: "Does my Unity game need a separate privacy policy?",
    a: "Yes. Unity's built-in services (Unity Analytics, Unity Ads, Unity Cloud Diagnostics) collect data by default when enabled in your project. Even if you haven't written any data collection code yourself, Unity's runtime may send telemetry data to Unity servers. Your privacy policy must disclose this Unity-specific data collection in addition to any other SDKs you've integrated. The policy should mention Unity by name as a third-party service provider and describe what data their services collect.",
  },
  {
    q: "How do I handle privacy for a children's game?",
    a: "Children's games face the strictest privacy requirements. In the US, COPPA (Children's Online Privacy Protection Act) applies to games directed at children under 13 and requires: verifiable parental consent before collecting any personal data, strict limits on data collection (only what's necessary), no behavioral advertising, and special data deletion procedures. On Google Play, you must comply with the Families Policy and potentially join the Designed for Families program. On Apple, you must follow Kids Category restrictions which prohibit third-party analytics and advertising. The EU's GDPR sets the age at 16 (with member states allowed to lower it to 13). Violations carry severe penalties — the FTC has fined game companies millions for COPPA violations.",
  },
  {
    q: "Do I need to disclose ad network data collection in my game's privacy policy?",
    a: "Yes, and this is one of the most important disclosures for game developers. Each ad network SDK in your mediation stack (AdMob, Unity Ads, AppLovin, ironSource, Vungle, Meta Audience Network, etc.) collects its own data including advertising IDs, device information, IP addresses, and ad interaction data. You must disclose every ad network by name, explain what data each collects, and state whether ads are personalized or non-personalized. If you use ad mediation (like MAX or ironSource), you need to list not just the mediator but all demand-side networks it connects to. Google Play's Data Safety and Apple's Nutrition Labels both require this level of detail.",
  },
  {
    q: "What about in-app purchases — do they affect my privacy policy?",
    a: "Yes. While Apple and Google handle the actual payment processing (so you don't handle credit card numbers), your game still tracks purchase-related data. You need to disclose: what purchase data your game stores (item names, prices, transaction IDs), how virtual currency and inventory are tracked, whether purchase history is shared with analytics services (most analytics SDKs track purchase events), and whether purchase data is used for personalization or advertising. If you use a backend service like PlayFab or your own server, disclose that purchase data is stored remotely.",
  },
  {
    q: "How do I handle chat and social features in my game's privacy policy?",
    a: "Social features significantly increase your privacy obligations. For in-game chat, you must disclose: that chat messages are collected and may be stored, whether messages are monitored for safety (especially important for children's games), how long chat data is retained, and who can access it. For friends lists and social connections, disclose how social graph data is used and whether it's shared with third parties. For voice chat, disclose that audio data is processed and whether it's recorded. If your game allows user-generated content (custom names, avatars, images), explain how that content is moderated and stored. GDPR requires explicit consent for processing chat data.",
  },
  {
    q: "Is a free privacy policy template enough for my game?",
    a: "Generic free templates typically don't cover game-specific requirements. They miss critical disclosures like: ad network and mediation SDK data collection, in-app purchase tracking, gameplay analytics and progression data, children's games COPPA requirements, virtual currency and inventory management, social features and chat data, and platform-specific requirements (Data Safety, Nutrition Labels). PolicyForge's generator specifically addresses game app requirements, letting you select which SDKs you use, whether your game targets children, and what features you've implemented — then generates a policy that covers all of it. The free tier handles basic games; the Pro tier ($4.99) adds full SDK disclosures and international compliance.",
  },
  {
    q: "My game uses rewarded video ads. Does that need special disclosure?",
    a: "Yes. Rewarded video ads (watch an ad to earn in-game currency or items) create a specific data flow that should be disclosed: the ad network collects viewing data (including whether the user watched the full video), your game receives a callback confirming the reward, and this reward event is typically logged in your analytics. You should explain in your privacy policy that users can optionally view advertisements in exchange for in-game rewards, that this involves sharing data with advertising partners, and name the specific ad networks providing rewarded videos. On iOS, rewarded video SDKs that access the IDFA still require the ATT prompt.",
  },
  {
    q: "How quickly can I generate a game-specific privacy policy with PolicyForge?",
    a: "Under 2 minutes. PolicyForge asks targeted questions about your game's data collection, SDKs, ad networks, social features, and target audience (including whether it's a children's game). It then generates a privacy policy that covers both Google Play Data Safety and Apple Nutrition Label requirements, all your SDK disclosures, COPPA compliance if applicable, and GDPR/CCPA provisions. The free tier lets you generate a basic policy. The Pro tier ($4.99 one-time) adds full SDK-specific disclosures, international compliance sections, and unlimited policy regeneration as your game evolves.",
  },
];

const COPPA_REQUIREMENTS = [
  {
    title: "Verifiable Parental Consent",
    description:
      "Before collecting any personal information from a child under 13, you must obtain verifiable parental consent. Methods include: signed consent form, credit card verification, government ID check, video conference, or knowledge-based questions.",
  },
  {
    title: "Minimal Data Collection",
    description:
      "Only collect data that is strictly necessary for the game to function. No profiling, no behavioral tracking, no building user profiles of children. Analytics must be aggregate-only, not tied to individual children.",
  },
  {
    title: "No Behavioral Advertising",
    description:
      "You cannot serve behaviorally targeted ads to children under 13. Only contextual ads (based on game content, not user behavior) are permitted. This means no AdMob personalized ads, no Facebook SDK, and no retargeting.",
  },
  {
    title: "Data Retention Limits",
    description:
      "Keep children's data only as long as necessary to fulfill the purpose for which it was collected. Implement automatic deletion policies. Do not retain data indefinitely for analytics.",
  },
  {
    title: "Parental Access and Deletion",
    description:
      "Parents must be able to review personal information collected from their child, request deletion, and refuse further collection. You must have a clear process for handling these requests.",
  },
  {
    title: "Safe Harbor Programs",
    description:
      "Consider joining an FTC-approved COPPA Safe Harbor program (like kidSAFE or ESRB Privacy Certified). These provide guidelines and can offer some protection from FTC enforcement actions.",
  },
];

export default function PrivacyPolicyForGameApp() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-[#ededed]">
      <header className="border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-sm">
              P
            </div>
            <span className="text-white font-semibold text-lg">
              PolicyForge
            </span>
          </Link>
          <div className="flex items-center gap-3">
            <Link
              href="/check"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Compliance Checker
            </Link>
            <Link
              href="/"
              className="px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-medium rounded-lg hover:opacity-90 transition-opacity"
            >
              Generate Policy
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-4 flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-purple-500/10 text-purple-400 text-xs font-medium rounded-full border border-purple-500/20">
            Game Apps
          </span>
          <span className="px-3 py-1 bg-green-500/10 text-green-400 text-xs font-medium rounded-full border border-green-500/20">
            Unity &amp; Unreal
          </span>
          <span className="px-3 py-1 bg-orange-500/10 text-orange-400 text-xs font-medium rounded-full border border-orange-500/20">
            COPPA Compliant
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Privacy Policy for Game Apps
        </h1>
        <p className="text-xl text-gray-400 mb-8">
          Mobile games collect more user data than almost any other app category
          — ad networks, analytics SDKs, in-app purchases, social features, and
          gameplay telemetry all require disclosure. Generate a privacy policy
          built specifically for game developers, covering Unity, AdMob,
          GameAnalytics, COPPA, and both app store requirements.
        </p>

        <div className="flex flex-wrap gap-3 mb-12">
          <Link
            href="https://policyforge.autonomous-claude.com/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg text-lg hover:opacity-90 transition-opacity"
          >
            Generate Your Game Privacy Policy
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
          <Link
            href="/check"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-semibold rounded-lg text-lg hover:bg-white/20 transition-colors"
          >
            Check Existing Policy
          </Link>
        </div>

        <div className="space-y-12 text-gray-300 leading-relaxed">
          {/* Why Game Apps Need a Privacy Policy */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              Why Every Mobile Game Needs a Privacy Policy
            </h2>
            <p className="mb-4">
              Mobile games are among the most data-intensive applications on any
              app store. Between ad monetization SDKs, gameplay analytics,
              crash reporting, social features, and in-app purchase tracking,
              the average mobile game integrates 5 to 15 third-party SDKs —
              each collecting its own set of user data. Both Google Play and
              the Apple App Store mandate a privacy policy for every published
              app, and games face additional scrutiny because of their data
              collection complexity and the fact that many games are played by
              children.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div className="p-4 bg-red-500/5 border border-red-500/20 rounded-lg">
                <h3 className="font-semibold text-red-400 mb-2">
                  App Store Rejection
                </h3>
                <p className="text-sm text-gray-400">
                  Both Google Play and Apple reject games without a valid
                  privacy policy URL. Your game will not pass review without
                  one. Existing games can be removed if their privacy policy
                  becomes inaccessible or non-compliant.
                </p>
              </div>
              <div className="p-4 bg-red-500/5 border border-red-500/20 rounded-lg">
                <h3 className="font-semibold text-red-400 mb-2">
                  Legal Fines
                </h3>
                <p className="text-sm text-gray-400">
                  GDPR fines can reach 4% of annual revenue or EUR 20 million.
                  COPPA violations for children&apos;s games carry FTC fines up
                  to $50,120 per violation. Game studios have been fined
                  millions for non-compliance.
                </p>
              </div>
              <div className="p-4 bg-red-500/5 border border-red-500/20 rounded-lg">
                <h3 className="font-semibold text-red-400 mb-2">
                  Ad Network Requirements
                </h3>
                <p className="text-sm text-gray-400">
                  Ad networks like AdMob, Unity Ads, and AppLovin require
                  publishers to have a privacy policy that discloses ad data
                  collection. Without one, your ad accounts may be suspended
                  and revenue withheld.
                </p>
              </div>
            </div>
            <div className="p-4 bg-yellow-500/5 border border-yellow-500/20 rounded-lg">
              <p className="text-sm text-yellow-300">
                <strong>Game-specific risk:</strong> Games are disproportionately
                targeted by privacy regulators because they are widely played by
                minors, heavily monetized through ads and IAPs, and integrate
                numerous third-party SDKs. In 2023 alone, the FTC brought
                multiple enforcement actions against game companies for COPPA
                violations, resulting in fines exceeding $500 million combined.
              </p>
            </div>
          </section>

          {/* What Data Do Games Collect */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              What Data Do Mobile Games Actually Collect?
            </h2>
            <p className="mb-6">
              Understanding exactly what data your game collects is the first
              step to writing a compliant privacy policy. Most game developers
              underestimate how much data flows through their game. Here are the
              key categories:
            </p>
            <div className="space-y-4">
              {GAME_DATA_CATEGORIES.map((cat) => (
                <div
                  key={cat.category}
                  className="p-4 bg-white/5 border border-white/10 rounded-lg"
                >
                  <h3 className="font-semibold text-white mb-2">
                    {cat.category}
                  </h3>
                  <div className="grid md:grid-cols-2 gap-x-4 gap-y-1 mb-2">
                    {cat.types.map((t) => (
                      <span
                        key={t}
                        className="text-sm text-gray-400 flex items-start gap-1.5"
                      >
                        <span className="text-purple-400 mt-0.5">&#8226;</span>
                        {t}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-purple-300 mt-2 p-2 bg-purple-500/5 border border-purple-500/10 rounded">
                    {cat.gameContext}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-gray-400">
              Your privacy policy must disclose every category of data your game
              collects — even data collected automatically by third-party SDKs
              you didn&apos;t write. PolicyForge helps you{" "}
              <Link
                href="https://policyforge.autonomous-claude.com/"
                className="text-blue-400 hover:text-blue-300"
              >
                identify and disclose all data categories automatically &rarr;
              </Link>
            </p>
          </section>

          {/* Platform Requirements Comparison */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              Google Play vs. Apple App Store: Game Privacy Requirements
            </h2>
            <p className="mb-4">
              Since most mobile games launch on both iOS and Android, your
              privacy policy must satisfy both platforms simultaneously. Here is
              a side-by-side comparison of every privacy requirement relevant to
              game developers:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-3 px-3 text-gray-400 font-medium">
                      Requirement
                    </th>
                    <th className="text-left py-3 px-3 text-green-400 font-medium">
                      Google Play
                    </th>
                    <th className="text-left py-3 px-3 text-blue-400 font-medium">
                      Apple App Store
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {PLATFORM_REQUIREMENTS.map((row) => (
                    <tr
                      key={row.requirement}
                      className="border-b border-white/5"
                    >
                      <td className="py-3 px-3 text-white font-medium">
                        {row.requirement}
                      </td>
                      <td className="py-3 px-3 text-gray-400">
                        {row.googlePlay}
                      </td>
                      <td className="py-3 px-3 text-gray-400">
                        {row.appStore}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Common Game SDKs */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              Common Game SDKs and Their Privacy Impact
            </h2>
            <p className="mb-6">
              Every SDK in your game potentially collects user data that must
              be disclosed in your privacy policy, Data Safety form, and
              Nutrition Labels. Here are the most widely used game SDKs and
              exactly what data they collect:
            </p>
            <div className="space-y-4">
              {GAME_COMMON_SDKS.map((sdk) => (
                <div
                  key={sdk.name}
                  className="p-4 bg-white/5 border border-white/10 rounded-lg"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                    <h3 className="font-semibold text-white">{sdk.name}</h3>
                    <code className="text-xs text-gray-500 bg-white/5 px-2 py-1 rounded">
                      {sdk.integration}
                    </code>
                  </div>
                  <div className="mb-2">
                    <p className="text-xs text-gray-500 mb-1 font-medium">
                      Data collected:
                    </p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-1">
                      {sdk.dataCollected.map((d) => (
                        <li
                          key={d}
                          className="text-sm text-gray-400 flex items-start gap-1.5"
                        >
                          <span className="text-purple-400 mt-0.5">
                            &#8226;
                          </span>
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-2 bg-blue-500/5 border border-blue-500/10 rounded">
                    <p className="text-xs text-blue-300">{sdk.policyNote}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-gray-400">
              This is not an exhaustive list. Always audit every SDK and plugin
              in your project. For Unity games, check your{" "}
              <code className="px-1.5 py-0.5 bg-white/10 rounded text-sm text-blue-300">
                Packages/manifest.json
              </code>{" "}
              and{" "}
              <code className="px-1.5 py-0.5 bg-white/10 rounded text-sm text-blue-300">
                Assets/Plugins/
              </code>
              . For native Android/iOS games, review your Gradle dependencies
              and CocoaPods/SPM packages.
            </p>
          </section>

          {/* Children's Games and COPPA */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              Children&apos;s Games and COPPA Compliance
            </h2>
            <p className="mb-4">
              If your game is directed at children under 13 — or if you have
              actual knowledge that children under 13 are playing it — you must
              comply with COPPA (Children&apos;s Online Privacy Protection Act)
              in the United States, and equivalent regulations in other
              jurisdictions. This is the single most consequential privacy
              requirement for game developers, and violations result in the
              harshest penalties.
            </p>
            <div className="p-4 bg-red-500/5 border border-red-500/20 rounded-lg mb-6">
              <h3 className="font-semibold text-red-400 mb-2">
                Is Your Game &quot;Directed at Children&quot;?
              </h3>
              <p className="text-sm text-gray-400 mb-3">
                The FTC considers these factors when determining if a game is
                child-directed:
              </p>
              <ul className="space-y-1.5 text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5">&#8226;</span>
                  Subject matter — cartoon characters, animals, bright colors,
                  simple mechanics
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5">&#8226;</span>
                  Visual content — animated characters, child-friendly art
                  style
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5">&#8226;</span>
                  Music and audio — playful, child-oriented sounds
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5">&#8226;</span>
                  Age of models/characters — child characters or anthropomorphic
                  animals
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5">&#8226;</span>
                  Advertising — where the game is marketed, what audience is
                  targeted
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5">&#8226;</span>
                  Empirical evidence — actual audience demographics showing
                  child users
                </li>
              </ul>
            </div>

            <h3 className="text-lg font-semibold text-white mb-3">
              COPPA Requirements for Game Developers
            </h3>
            <div className="space-y-3 mb-6">
              {COPPA_REQUIREMENTS.map((req) => (
                <div
                  key={req.title}
                  className="flex items-start gap-3 p-3 bg-white/5 rounded-lg"
                >
                  <span className="text-red-400 mt-0.5 font-bold text-sm">
                    &gt;
                  </span>
                  <div>
                    <p className="font-medium text-white text-sm">
                      {req.title}
                    </p>
                    <p className="text-xs text-gray-400 mt-0.5">
                      {req.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
                <h3 className="font-semibold text-white mb-2">
                  Google Play Families Policy
                </h3>
                <ul className="space-y-1.5 text-sm text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-0.5">&#8226;</span>
                    Must comply if your game targets children or is in the
                    &quot;Family&quot; category
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-0.5">&#8226;</span>
                    Only certified ad SDKs can be used (Google&apos;s approved
                    list)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-0.5">&#8226;</span>
                    No personal or sensitive data collection from children
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-0.5">&#8226;</span>
                    Ads must be appropriate for all ages
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-0.5">&#8226;</span>
                    API level targeting requirements apply
                  </li>
                </ul>
              </div>
              <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
                <h3 className="font-semibold text-white mb-2">
                  Apple Kids Category
                </h3>
                <ul className="space-y-1.5 text-sm text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">&#8226;</span>
                    No third-party analytics or advertising SDKs allowed
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">&#8226;</span>
                    No links that leave the app without a parental gate
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">&#8226;</span>
                    Login must not be required (optional login allowed with
                    parental gate)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">&#8226;</span>
                    Must select one of three age bands: 5 and Under, 6-8, or
                    9-11
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">&#8226;</span>
                    Cannot be in Kids Category and use ATT
                  </li>
                </ul>
              </div>
            </div>
            <div className="p-4 bg-yellow-500/5 border border-yellow-500/20 rounded-lg">
              <p className="text-sm text-yellow-300">
                <strong>Mixed-audience games:</strong> If your game appeals to
                both children and adults (a &quot;mixed-audience&quot; game),
                you should implement an age gate at first launch. If a user
                identifies as under 13, apply COPPA protections for that user
                (disable behavioral ads, limit data collection). Google Play
                requires this approach for mixed-audience apps in the Families
                program. Your privacy policy must explain how you handle data
                differently for child users vs. adult users.
              </p>
            </div>
          </section>

          {/* Ad Monetization and Privacy */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              Ad Monetization: Privacy Implications for Game Developers
            </h2>
            <p className="mb-4">
              Ad-supported games face the most complex privacy requirements of
              any app category. A typical game using ad mediation may integrate
              10 or more ad network SDKs, each collecting its own data. Here is
              what game developers need to know about ad privacy:
            </p>
            <div className="space-y-3 mb-4">
              {[
                {
                  title: "Mediation platforms multiply SDK requirements",
                  detail:
                    "If you use a mediation platform like AppLovin MAX, ironSource LevelPlay, or Google AdMob Mediation, you're not just using one ad SDK — you're using every demand partner SDK in the waterfall. Each one collects data independently and must be disclosed in your privacy policy. A typical mediation setup with 8 ad networks means 8 separate privacy disclosures.",
                },
                {
                  title: "Rewarded video ads create specific data flows",
                  detail:
                    "Rewarded ads (watch a video for in-game currency) generate completion callbacks that connect ad viewing behavior to gameplay rewards. This creates a trackable link between ad engagement and in-game economics that must be disclosed. The ad network knows the user watched, and your analytics knows they earned currency.",
                },
                {
                  title: "ATT on iOS dramatically affects game revenue",
                  detail:
                    "App Tracking Transparency (iOS 14.5+) requires an opt-in prompt before accessing the IDFA. Most game users deny tracking, reducing ad revenue by 15-40%. Your privacy policy must explain your tracking practices and how the game functions with or without tracking consent.",
                },
                {
                  title: "GDPR consent for ad personalization",
                  detail:
                    "For EU users, you need GDPR-compliant consent before serving personalized ads. This typically means implementing a Consent Management Platform (CMP) that meets the IAB Transparency and Consent Framework (TCF v2.2). Your privacy policy must reference your CMP and explain how consent affects ad serving.",
                },
                {
                  title: "Non-personalized ads still collect data",
                  detail:
                    "Even if you serve only non-personalized (contextual) ads, ad SDKs still collect device information, IP addresses, and ad interaction data. Your privacy policy must disclose this data collection even when ads are not personalized. The difference is in how the data is used, not whether it's collected.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-3 p-3 bg-white/5 rounded-lg"
                >
                  <span className="text-orange-400 mt-0.5 font-bold text-sm">
                    &gt;
                  </span>
                  <div>
                    <p className="font-medium text-white text-sm">
                      {item.title}
                    </p>
                    <p className="text-xs text-gray-400 mt-0.5">
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* In-App Purchases Privacy */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              In-App Purchase Data and Privacy Disclosure
            </h2>
            <p className="mb-4">
              In-app purchases (IAPs) are a primary revenue model for mobile
              games, and they create specific privacy obligations. While Apple
              and Google handle payment processing, your game still collects
              and stores significant purchase-related data.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
                <h3 className="font-semibold text-white mb-2">
                  What Your Game Tracks
                </h3>
                <ul className="space-y-1.5 text-sm text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-0.5">&#8226;</span>
                    Purchase receipts and transaction IDs
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-0.5">&#8226;</span>
                    Virtual currency balances and spending history
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-0.5">&#8226;</span>
                    Inventory items and power-ups owned
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-0.5">&#8226;</span>
                    Subscription status and renewal dates
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-0.5">&#8226;</span>
                    Revenue analytics per user segment
                  </li>
                </ul>
              </div>
              <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
                <h3 className="font-semibold text-white mb-2">
                  What Analytics SDKs Log
                </h3>
                <ul className="space-y-1.5 text-sm text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-0.5">&#8226;</span>
                    Purchase events with item name and price
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-0.5">&#8226;</span>
                    Conversion funnel (view store &rarr; purchase)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-0.5">&#8226;</span>
                    Revenue per user and ARPDAU metrics
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-0.5">&#8226;</span>
                    A/B test group assignments for pricing
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-0.5">&#8226;</span>
                    Subscription lifecycle events (trial, renewal, churn)
                  </li>
                </ul>
              </div>
            </div>
            <p className="text-sm text-gray-400">
              Both Google Play&apos;s Data Safety and Apple&apos;s Nutrition
              Labels require you to declare purchase-related data collection.
              In Data Safety, declare under &quot;Financial Info &gt; Purchase
              History&quot;. In Nutrition Labels, declare under
              &quot;Purchases&quot;. Your privacy policy must explain what
              purchase data you collect, why, and whether it&apos;s shared with
              analytics or ad networks.
            </p>
          </section>

          {/* Unity-Specific Section */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              Unity Game Privacy Policy: Engine-Specific Considerations
            </h2>
            <p className="mb-4">
              Unity is the most popular game engine for mobile, powering over
              50% of mobile games. Unity&apos;s ecosystem introduces specific
              privacy considerations that your policy must address:
            </p>
            <div className="space-y-3 mb-4">
              {[
                {
                  title: "Unity Runtime Data Collection",
                  detail:
                    "Unity's runtime can send diagnostic and usage telemetry to Unity Technologies, even without Unity Analytics explicitly enabled. This is governed by Unity's own privacy policy and data processing terms. Your privacy policy should disclose that the game is built with Unity and link to Unity's privacy policy.",
                },
                {
                  title: "Unity Analytics (Legacy & Unity Gaming Services)",
                  detail:
                    "If you use Unity Analytics (now part of Unity Gaming Services), it automatically collects session data, device info, custom events you define, and player engagement metrics. All data is sent to Unity's cloud. Disclose analytics tracking and Unity as a data processor.",
                },
                {
                  title: "Unity Ads / ironSource LevelPlay",
                  detail:
                    "Unity's ad monetization (merged with ironSource) includes its own mediation and demand. The SDK collects advertising IDs, device info, and behavioral data for ad targeting. If you use LevelPlay mediation, each connected ad network adds its own data collection. List all active ad networks in your privacy policy.",
                },
                {
                  title: "Unity Cloud Save and Player Accounts",
                  detail:
                    "Unity Gaming Services includes Cloud Save, which stores player data on Unity's servers. If you use Unity Authentication, player account data (anonymous or linked) is stored remotely. Disclose cloud storage of game progress and player identifiers.",
                },
                {
                  title: "Unity Remote Config and A/B Testing",
                  detail:
                    "Unity Remote Config sends device and player data to Unity's servers to determine which configuration to serve. If used for A/B testing, this means player behavior influences which game experience they receive — a form of profiling that should be disclosed.",
                },
                {
                  title: "Asset Store plugins",
                  detail:
                    "Third-party plugins from the Unity Asset Store may include their own analytics, ad SDKs, or data collection. Always audit the source code of Asset Store plugins, especially those with native (iOS/Android) components. Your privacy policy must cover data collected by all plugins.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-3 p-3 bg-white/5 rounded-lg"
                >
                  <span className="text-blue-400 mt-0.5 font-bold text-sm">
                    &gt;
                  </span>
                  <div>
                    <p className="font-medium text-white text-sm">
                      {item.title}
                    </p>
                    <p className="text-xs text-gray-400 mt-0.5">
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-400">
              For cross-platform framework considerations, see our{" "}
              <Link
                href="/privacy-policy-for-flutter-app"
                className="text-blue-400 hover:text-blue-300"
              >
                Privacy Policy for Flutter &amp; React Native Apps
              </Link>{" "}
              guide.
            </p>
          </section>

          {/* Social Features */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              Social Features, Multiplayer, and Chat: Privacy Obligations
            </h2>
            <p className="mb-4">
              Social and multiplayer features dramatically increase your game&apos;s
              privacy obligations. Any feature that enables player-to-player
              interaction creates data that must be disclosed and protected.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
                <h3 className="font-semibold text-white mb-2">
                  In-Game Chat
                </h3>
                <p className="text-sm text-gray-400 mb-2">
                  Chat messages may contain personal information shared by
                  players (real names, locations, contact info). You must:
                </p>
                <ul className="space-y-1 text-xs text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-0.5">&#8226;</span>
                    Disclose that chat data is collected and stored
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-0.5">&#8226;</span>
                    Explain moderation and safety measures
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-0.5">&#8226;</span>
                    State data retention periods for chat logs
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-0.5">&#8226;</span>
                    For children&apos;s games: use pre-set phrases only
                  </li>
                </ul>
              </div>
              <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
                <h3 className="font-semibold text-white mb-2">
                  Leaderboards &amp; Achievements
                </h3>
                <p className="text-sm text-gray-400 mb-2">
                  Public leaderboards display player data to other users. You
                  must disclose:
                </p>
                <ul className="space-y-1 text-xs text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-0.5">&#8226;</span>
                    What player data is publicly visible (name, score, rank)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-0.5">&#8226;</span>
                    Whether gameplay statistics are shared publicly
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-0.5">&#8226;</span>
                    How players can opt out or hide their data
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-0.5">&#8226;</span>
                    Third-party services used (Play Games, Game Center)
                  </li>
                </ul>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
                <h3 className="font-semibold text-white mb-2">
                  Friends &amp; Social Graph
                </h3>
                <p className="text-sm text-gray-400 mb-2">
                  Social connections between players create relationship data:
                </p>
                <ul className="space-y-1 text-xs text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-0.5">&#8226;</span>
                    Disclose if you access device contacts for friend finding
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-0.5">&#8226;</span>
                    Explain how social connections are stored and used
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-0.5">&#8226;</span>
                    State whether social graph data is shared with third parties
                  </li>
                </ul>
              </div>
              <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
                <h3 className="font-semibold text-white mb-2">
                  User-Generated Content
                </h3>
                <p className="text-sm text-gray-400 mb-2">
                  Custom content created by players (names, avatars, levels):
                </p>
                <ul className="space-y-1 text-xs text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-0.5">&#8226;</span>
                    Explain content moderation practices
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-0.5">&#8226;</span>
                    Disclose if UGC is stored on your servers or third-party
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-0.5">&#8226;</span>
                    State your rights to use or remove player content
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* GDPR and CCPA for Games */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              GDPR, CCPA, and International Compliance for Mobile Games
            </h2>
            <p className="mb-4">
              App store requirements are the minimum. If your game is available
              globally (which most mobile games are), you must also comply with
              international privacy regulations. Games face particular scrutiny
              because of their widespread use by minors and extensive data
              collection through ad networks.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
                <h3 className="font-semibold text-white mb-2">
                  GDPR (EU Users)
                </h3>
                <ul className="space-y-1.5 text-sm text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">&#8226;</span>
                    Legal basis for each type of data processing
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">&#8226;</span>
                    Consent before analytics and ad tracking (not just
                    legitimate interest)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">&#8226;</span>
                    Right to access, rectify, delete, and port player data
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">&#8226;</span>
                    CMP (Consent Management Platform) with TCF v2.2 for ads
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">&#8226;</span>
                    Fines up to 4% of annual revenue or EUR 20M
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">&#8226;</span>
                    Age of consent for data processing: 16 (or 13-16 depending
                    on member state)
                  </li>
                </ul>
              </div>
              <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
                <h3 className="font-semibold text-white mb-2">
                  CCPA (California Users)
                </h3>
                <ul className="space-y-1.5 text-sm text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">&#8226;</span>
                    Right to know what personal info is collected
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">&#8226;</span>
                    Right to delete personal information
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">&#8226;</span>
                    Right to opt out of sale/sharing of personal info
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">&#8226;</span>
                    &quot;Do Not Sell My Personal Information&quot; link
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">&#8226;</span>
                    Ad data sharing is considered &quot;selling&quot; under CCPA
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">&#8226;</span>
                    Special protections for minors under 16
                  </li>
                </ul>
              </div>
            </div>
            <p className="text-sm text-gray-400">
              PolicyForge Pro generates policies with full GDPR and CCPA
              provisions included. For detailed guidance, see our{" "}
              <Link
                href="/gdpr-privacy-policy-generator"
                className="text-blue-400 hover:text-blue-300"
              >
                GDPR Privacy Policy Generator
              </Link>{" "}
              and{" "}
              <Link
                href="/ccpa-privacy-policy-generator"
                className="text-blue-400 hover:text-blue-300"
              >
                CCPA Privacy Policy Generator
              </Link>
              .
            </p>
          </section>

          {/* Privacy Policy Checklist for Game Developers */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              Game App Privacy Policy Checklist
            </h2>
            <p className="mb-4">
              Use this checklist to ensure your game&apos;s privacy policy covers
              everything it needs to. Every item marked below should be addressed
              in your policy:
            </p>
            <div className="space-y-2">
              {[
                "Identity of the data controller (your company or name)",
                "Contact information for privacy inquiries",
                "Every type of personal data collected, including by SDKs",
                "Purpose for each type of data collection",
                "Legal basis for processing (GDPR requirement)",
                "All third-party SDKs by name (analytics, ads, crash reporting)",
                "Ad network partners and mediation platforms used",
                "In-app purchase data tracking and storage",
                "Gameplay and analytics data collection",
                "Social features data (chat, friends, leaderboards)",
                "Device and technical data collected",
                "Whether data is shared with third parties and for what purpose",
                "Data retention periods for each data category",
                "User rights (access, deletion, portability, opt-out)",
                "How users can exercise their rights (contact method, process)",
                "Children's privacy section (COPPA compliance if applicable)",
                "Age gate or verification mechanism (if targeting mixed audience)",
                "Cookie and local storage usage (for web-based games)",
                "Cross-border data transfers and safeguards",
                "Data security measures implemented",
                "How users are notified of privacy policy changes",
                "Effective date and last updated date",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 p-2 bg-white/5 rounded"
                >
                  <span className="w-5 h-5 border border-white/20 rounded flex-shrink-0 flex items-center justify-center text-xs text-gray-600 mt-0.5">
                    &#10003;
                  </span>
                  <span className="text-sm text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Price Comparison */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              Game Privacy Policy: Cost Comparison
            </h2>
            <p className="mb-4">
              Most privacy policy generators charge subscription fees and
              don&apos;t address game-specific requirements (ad SDKs, gameplay
              data, COPPA, in-app purchases). Here is how PolicyForge compares:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-3 px-3 text-gray-400 font-medium">
                      Provider
                    </th>
                    <th className="text-left py-3 px-3 text-gray-400 font-medium">
                      Price
                    </th>
                    <th className="text-left py-3 px-3 text-gray-400 font-medium">
                      Notes
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {COMPETITOR_PRICING.map((comp) => (
                    <tr
                      key={comp.name}
                      className={`border-b border-white/5 ${
                        comp.highlight
                          ? "bg-blue-500/5 border-blue-500/20"
                          : ""
                      }`}
                    >
                      <td
                        className={`py-3 px-3 font-medium ${
                          comp.highlight ? "text-blue-400" : "text-white"
                        }`}
                      >
                        {comp.name}
                        {comp.highlight && (
                          <span className="ml-2 text-xs bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded-full">
                            Best Value
                          </span>
                        )}
                      </td>
                      <td
                        className={`py-3 px-3 ${
                          comp.highlight
                            ? "text-green-400 font-bold"
                            : "text-gray-400"
                        }`}
                      >
                        {comp.price}
                      </td>
                      <td className="py-3 px-3 text-gray-400">{comp.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-gray-400">
              PolicyForge offers one-time pricing (not a subscription), includes
              game-specific SDK disclosures, and covers both app store
              requirements in a single policy. The free tier generates a basic
              policy; Pro ($4.99) adds full SDK disclosures, COPPA section,
              international compliance, and unlimited regeneration.
            </p>
          </section>

          {/* Main CTA */}
          <section className="p-8 bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-2xl">
            <h2 className="text-2xl font-bold text-white mb-3">
              Generate Your Game App Privacy Policy Now
            </h2>
            <p className="text-gray-300 mb-2">
              PolicyForge generates privacy policies built for game developers.
              Select your ad networks, analytics SDKs, and game features — get
              a policy that covers both app store requirements, COPPA, GDPR,
              and CCPA in under 2 minutes.
            </p>
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <div className="text-sm text-gray-400">
                <span className="text-green-400">&#10003;</span> Unity, Unreal
                &amp; native games
              </div>
              <div className="text-sm text-gray-400">
                <span className="text-green-400">&#10003;</span> Ad SDK
                disclosures
              </div>
              <div className="text-sm text-gray-400">
                <span className="text-green-400">&#10003;</span> COPPA
                children&apos;s section
              </div>
              <div className="text-sm text-gray-400">
                <span className="text-green-400">&#10003;</span> In-app
                purchase coverage
              </div>
              <div className="text-sm text-gray-400">
                <span className="text-green-400">&#10003;</span> GDPR &amp;
                CCPA ready
              </div>
              <div className="text-sm text-gray-400">
                <span className="text-green-400">&#10003;</span> Both app
                stores covered
              </div>
            </div>
            <div className="flex flex-wrap gap-3 items-center">
              <Link
                href="https://policyforge.autonomous-claude.com/"
                className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
              >
                Generate Now — Free
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
              <span className="text-sm text-gray-500">
                Free tier available &middot; Pro from $4.99
              </span>
            </div>
          </section>

          {/* Scan CTA */}
          <section className="p-6 bg-white/5 border border-white/10 rounded-xl text-center">
            <h2 className="text-xl font-bold text-white mb-2">
              Already Have a Privacy Policy for Your Game?
            </h2>
            <p className="text-gray-400 text-sm mb-4">
              Scan your game&apos;s privacy policy URL to check compliance
              across 10 categories — including app store requirements, ad SDK
              disclosures, COPPA compliance, GDPR, and CCPA.
            </p>
            <Link
              href="/check"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors"
            >
              Free Compliance Scan
            </Link>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6">
              Frequently Asked Questions: Game App Privacy Policies
            </h2>
            <div className="space-y-4">
              {FAQ_ITEMS.map((faq) => (
                <div key={faq.q} className="p-4 bg-white/5 rounded-lg">
                  <h3 className="font-semibold text-white mb-2">{faq.q}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Related Resources */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              Related Resources
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Link
                href="/privacy-policy-for-mobile-app"
                className="p-4 bg-white/5 border border-white/10 rounded-lg hover:border-blue-500/30 transition-colors group"
              >
                <h3 className="font-semibold text-white text-sm group-hover:text-blue-400">
                  Privacy Policy for Mobile Apps
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  General mobile app privacy requirements for iOS and Android
                </p>
              </Link>
              <Link
                href="/privacy-policy-for-flutter-app"
                className="p-4 bg-white/5 border border-white/10 rounded-lg hover:border-blue-500/30 transition-colors group"
              >
                <h3 className="font-semibold text-white text-sm group-hover:text-blue-400">
                  Privacy Policy for Flutter &amp; React Native
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  Cross-platform framework privacy requirements and SDK
                  disclosures
                </p>
              </Link>
              <Link
                href="/ccpa-privacy-policy-generator"
                className="p-4 bg-white/5 border border-white/10 rounded-lg hover:border-blue-500/30 transition-colors group"
              >
                <h3 className="font-semibold text-white text-sm group-hover:text-blue-400">
                  CCPA Privacy Policy Generator
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  California Consumer Privacy Act compliance for your app
                </p>
              </Link>
              <Link
                href="/gdpr-privacy-policy-generator"
                className="p-4 bg-white/5 border border-white/10 rounded-lg hover:border-blue-500/30 transition-colors group"
              >
                <h3 className="font-semibold text-white text-sm group-hover:text-blue-400">
                  GDPR Privacy Policy Generator
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  EU General Data Protection Regulation compliance guide
                </p>
              </Link>
              <Link
                href="/check"
                className="p-4 bg-white/5 border border-white/10 rounded-lg hover:border-blue-500/30 transition-colors group"
              >
                <h3 className="font-semibold text-white text-sm group-hover:text-blue-400">
                  Free Compliance Checker
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  Scan any privacy policy URL for compliance gaps
                </p>
              </Link>
              <Link
                href="/tos"
                className="p-4 bg-white/5 border border-white/10 rounded-lg hover:border-blue-500/30 transition-colors group"
              >
                <h3 className="font-semibold text-white text-sm group-hover:text-blue-400">
                  Terms of Service Generator
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  Generate Terms of Service for your game alongside your privacy
                  policy
                </p>
              </Link>
            </div>
          </section>
        </div>
      </main>

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQ_ITEMS.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.a,
              },
            })),
          }),
        }}
      />

      <footer className="border-t border-white/10 mt-16 py-8 text-center text-sm text-gray-500">
        <p>
          PolicyForge &mdash; Part of the{" "}
          <a
            href="https://dashboard-mocha-delta-98.vercel.app"
            className="text-blue-400 hover:text-blue-300"
          >
            Autonomous Claude Experiment
          </a>
        </p>
        <p className="mt-2 text-xs text-gray-600">
          Disclaimer: This generator provides template privacy policies for
          informational purposes. Consult a qualified attorney for
          jurisdiction-specific legal advice.
        </p>
      </footer>
    </div>
  );
}
