import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Privacy Policy for Discord Bot | Free Generator - PolicyForge",
  description:
    "Generate a free privacy policy for your Discord bot. Required by Discord's Developer Terms of Service and for bot verification (75+ servers). Covers user IDs, message content, server data, and voice data collection.",
  keywords:
    "privacy policy for discord bot, discord bot privacy policy template, discord bot data collection policy, discord bot verification privacy policy, discord developer terms of service, discord bot GDPR compliance, discord bot privacy policy generator, discord bot user data policy, discord bot message logging policy, discord bot intents privacy",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does my Discord bot need a privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Discord's Developer Terms of Service require all applications that access user data to have a privacy policy. This applies to every bot that uses privileged or non-privileged gateway intents. Additionally, if your bot is in 75 or more servers, Discord requires a privacy policy URL during the verification process. Without one, your bot cannot be verified and will be blocked from joining additional servers.",
      },
    },
    {
      "@type": "Question",
      name: "What data does my Discord bot collect that needs to be disclosed?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Common data types collected by Discord bots include: user IDs and usernames, message content (if using the Message Content privileged intent), server (guild) IDs and metadata, voice channel participation data, user roles and permissions, reactions and interaction data, and any data stored in your bot's database. Your privacy policy must disclose every type of data your bot accesses, processes, or stores.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if my Discord bot doesn't have a privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Without a privacy policy, your bot cannot pass Discord's verification process (required at 75+ servers). Unverified bots are capped and cannot join new servers beyond the limit. Discord can also remove your bot entirely for violating the Developer Terms of Service. Additionally, if your bot serves users in the EU, you are violating GDPR, which carries fines up to 20 million euros or 4% of annual global turnover.",
      },
    },
    {
      "@type": "Question",
      name: "How do I add a privacy policy URL to my Discord bot?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Go to the Discord Developer Portal (discord.com/developers/applications), select your application, navigate to the 'General Information' tab, and paste your privacy policy URL in the 'Privacy Policy URL' field. This URL will be visible to users when they authorize your bot. For verification, this field must be filled in before you submit your verification application.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a privacy policy if my bot only uses slash commands and doesn't store data?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Even if your bot only responds to slash commands and doesn't persist any data, it still processes user IDs, channel IDs, and interaction payloads temporarily. Discord's Developer Terms of Service require a privacy policy for any application that accesses the API. A minimal policy stating that no data is stored permanently and explaining what is processed transiently is sufficient, but you still need one.",
      },
    },
  ],
};

export default function PrivacyPolicyForDiscordBot() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-[#ededed]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <header className="border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-sm">
              P
            </div>
            <span className="text-white font-semibold text-lg">
              PolicyForge
            </span>
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Privacy Policy for Discord Bots: The Complete Guide
        </h1>

        <p className="text-gray-400 text-lg mb-8">
          Discord requires every bot that accesses user data to have a
          privacy policy. At 75+ servers, verification is mandatory &mdash;
          and a privacy policy URL is required to pass. This guide covers
          Discord&apos;s requirements, common data bots collect, and how
          to generate and add a compliant policy.
        </p>

        <div className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 border border-blue-800/40 rounded-xl p-6 mb-10">
          <h3 className="text-lg font-semibold text-white mb-2">
            Generate Your Discord Bot Privacy Policy in 2 Minutes
          </h3>
          <p className="text-gray-300 text-sm mb-4">
            Don&apos;t let a missing privacy policy block your bot&apos;s
            verification. PolicyForge generates a compliant privacy policy
            covering user IDs, message content, server data, and all
            Discord-specific data types.
          </p>
          <div className="flex gap-3 flex-wrap">
            <Link
              href="/"
              className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2.5 px-6 rounded-lg transition text-sm"
            >
              Generate Free Policy
            </Link>
            <Link
              href="/check"
              className="bg-white/10 hover:bg-white/20 text-white font-semibold py-2.5 px-6 rounded-lg transition text-sm"
            >
              Scan Your Site
            </Link>
          </div>
        </div>

        <div className="space-y-10 text-gray-300 leading-relaxed text-[17px]">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Why Discord Bots Must Have a Privacy Policy
            </h2>
            <p className="mb-4">
              Discord&apos;s Developer Terms of Service and Developer Policy
              explicitly require bot developers to provide a privacy policy
              whenever their application accesses user data through the
              Discord API. This is not optional &mdash; it is a condition of
              using the platform. Here&apos;s why it matters:
            </p>
            <div className="space-y-4">
              <div className="bg-gray-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-1">
                  Discord Developer Terms of Service (Mandatory)
                </h4>
                <p className="text-sm text-gray-400">
                  Section 7 of Discord&apos;s Developer Terms requires you to
                  &ldquo;provide and make available to end users a privacy
                  policy that clearly and accurately describes to users what
                  data you collect and how you use and share it.&rdquo; Any
                  bot that accesses the Discord API &mdash; which is every
                  bot &mdash; must comply. Violating these terms can result
                  in your bot being removed and your developer account
                  suspended.
                </p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-1">
                  Bot Verification Requirement (75+ Servers)
                </h4>
                <p className="text-sm text-gray-400">
                  When your bot reaches 75 servers, Discord requires you to
                  submit a verification application. One of the mandatory
                  fields in the verification form is a privacy policy URL.
                  Without it, your application is automatically rejected.
                  Unverified bots that hit the 75-server cap are blocked
                  from joining any additional servers, effectively freezing
                  your bot&apos;s growth.
                </p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-1">
                  Privileged Gateway Intents Approval
                </h4>
                <p className="text-sm text-gray-400">
                  If your bot needs privileged intents (Message Content,
                  Server Members, Presence), Discord reviews your privacy
                  policy as part of the approval process. Bots that access
                  message content without disclosing it are routinely denied.
                </p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-1">
                  Legal Compliance (GDPR, CCPA)
                </h4>
                <p className="text-sm text-gray-400">
                  Discord bots serve users globally. Under GDPR, processing
                  personal data (user IDs, usernames, message content)
                  requires a privacy policy. Fines reach &euro;20M or 4%
                  of global revenue. Even free hobby bots must comply if
                  they process EU user data.
                </p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-1">
                  User Trust and Server Adoption
                </h4>
                <p className="text-sm text-gray-400">
                  Server admins increasingly review privacy practices before
                  adding bots. The &ldquo;verified&rdquo; checkmark signals
                  Discord has reviewed your bot. Without a privacy policy,
                  you cannot earn this badge. On listing sites like top.gg,
                  a privacy policy is a differentiator.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              What Data Do Discord Bots Commonly Collect?
            </h2>
            <p className="mb-4">
              Most bot developers underestimate how much data their bot
              accesses. Even a &ldquo;simple&rdquo; bot that responds to
              commands processes personal data. Here is a breakdown of the
              data categories your privacy policy must address based on the
              Discord API data your bot receives:
            </p>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">
              User Identifiers
            </h3>
            <p className="mb-4">
              Every interaction with the Discord API exposes user IDs,
              usernames, discriminators (if applicable), and avatar hashes.
              These are considered personal data under GDPR because they
              can identify an individual. Your privacy policy must disclose
              that you receive this data, whether you store it in a database,
              and how long you retain it. If your bot maintains a user
              profile, leaderboard, or moderation log, you are storing
              personal identifiers.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">
              Message Content
            </h3>
            <p className="mb-4">
              If your bot uses the{" "}
              <code className="bg-gray-800 px-1.5 py-0.5 rounded text-sm text-blue-300">
                MESSAGE_CONTENT
              </code>{" "}
              privileged intent, it receives the full text of every message
              in channels it can access &mdash; not just messages directed
              at the bot. This is the most privacy-sensitive data your bot
              can collect. Your policy must explain why your bot needs
              message content access, whether messages are logged or stored,
              how long message data is retained, and whether message content
              is sent to any third-party services (such as AI APIs, moderation
              services, or analytics platforms).
            </p>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">
              Server (Guild) Data
            </h3>
            <p className="mb-4">
              Your bot receives server IDs, names, channel lists, role
              hierarchies, and member counts. If your bot stores server
              configurations (prefixes, welcome messages, moderation
              settings), disclose this and clarify what happens to that
              data when the bot is removed from a server.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">
              Voice, Presence, and Interaction Data
            </h3>
            <p className="mb-4">
              Bots in voice channels receive voice state data. Music and
              recording bots must disclose whether audio is recorded or
              processed. The{" "}
              <code className="bg-gray-800 px-1.5 py-0.5 rounded text-sm text-blue-300">
                GUILD_PRESENCES
              </code>{" "}
              and{" "}
              <code className="bg-gray-800 px-1.5 py-0.5 rounded text-sm text-blue-300">
                GUILD_MEMBERS
              </code>{" "}
              intents expose online status, activity data, and member
              lists. Even slash-command-only bots collect interaction data:
              the invoking user, channel, server, and arguments. If your
              bot logs commands for debugging, this must be disclosed.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Data Collection Checklist
            </h2>
            <p className="mb-4">
              If your bot accesses a data type below, your policy must
              include the corresponding disclosure:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-3 px-4 text-gray-400">
                      Data Type
                    </th>
                    <th className="text-left py-3 px-4 text-gray-400">
                      API Source / Intent
                    </th>
                    <th className="text-left py-3 px-4 text-gray-400">
                      Required Disclosure
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4">User IDs &amp; usernames</td>
                    <td className="py-3 px-4">
                      <code className="text-blue-300 text-xs">
                        All interactions
                      </code>
                    </td>
                    <td className="py-3 px-4">
                      Storage, retention period, deletion process
                    </td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4">Message content</td>
                    <td className="py-3 px-4">
                      <code className="text-blue-300 text-xs">
                        MESSAGE_CONTENT intent
                      </code>
                    </td>
                    <td className="py-3 px-4">
                      Why needed; logging; third-party sharing; retention
                    </td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4">Server metadata</td>
                    <td className="py-3 px-4">
                      <code className="text-blue-300 text-xs">
                        GUILDS intent
                      </code>
                    </td>
                    <td className="py-3 px-4">
                      What is stored; data handling on bot removal
                    </td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4">Member lists &amp; roles</td>
                    <td className="py-3 px-4">
                      <code className="text-blue-300 text-xs">
                        GUILD_MEMBERS intent
                      </code>
                    </td>
                    <td className="py-3 px-4">
                      Purpose; whether full list is cached; retention
                    </td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4">Presence &amp; activity</td>
                    <td className="py-3 px-4">
                      <code className="text-blue-300 text-xs">
                        GUILD_PRESENCES intent
                      </code>
                    </td>
                    <td className="py-3 px-4">
                      What activity data is tracked; user opt-out method
                    </td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4">Voice state</td>
                    <td className="py-3 px-4">
                      <code className="text-blue-300 text-xs">
                        GUILD_VOICE_STATES intent
                      </code>
                    </td>
                    <td className="py-3 px-4">
                      Whether audio is recorded; voice data processing
                    </td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4">Reactions &amp; interactions</td>
                    <td className="py-3 px-4">
                      <code className="text-blue-300 text-xs">
                        MESSAGE_REACTIONS / interactions
                      </code>
                    </td>
                    <td className="py-3 px-4">
                      Logging; analytics use; what is stored
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Command arguments</td>
                    <td className="py-3 px-4">
                      <code className="text-blue-300 text-xs">
                        Slash commands / interactions
                      </code>
                    </td>
                    <td className="py-3 px-4">
                      Whether inputs are logged; personal data in arguments
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              What Your Discord Bot Privacy Policy Must Include
            </h2>
            <p className="mb-4">
              Discord&apos;s Developer Policy specifies that your privacy
              policy must &ldquo;clearly and accurately&rdquo; describe your
              data practices. Based on Discord&apos;s requirements and GDPR
              compliance, your privacy policy should contain these sections:
            </p>

            <div className="space-y-4">
              <div className="bg-gray-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-2">
                  1. What Data Is Collected and How It Is Used
                </h4>
                <p className="text-sm text-gray-400">
                  List every data type your bot accesses or stores. Be
                  specific: &ldquo;user IDs, usernames, and message content
                  in channels where the bot has read access&rdquo; is
                  correct. &ldquo;Some user data&rdquo; is not. For each
                  data type, explain the purpose. Vague statements like
                  &ldquo;to improve the service&rdquo; are insufficient
                  under GDPR.
                </p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-2">
                  2. Data Storage, Retention, and Third Parties
                </h4>
                <p className="text-sm text-gray-400">
                  State where data is stored, how long it is retained, and
                  your deletion schedule. If your bot sends data to external
                  services &mdash; AI APIs, analytics, databases (MongoDB,
                  Supabase), or moderation services &mdash; each must be
                  named with what data is shared. This is the most commonly
                  missing section in Discord bot privacy policies.
                </p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-2">
                  3. User Rights, Data Deletion, and Contact Info
                </h4>
                <p className="text-sm text-gray-400">
                  Under GDPR, users can request access, correction, and
                  deletion of their data. Explain how &mdash; common
                  approaches include a{" "}
                  <code className="bg-gray-800 px-1 py-0.5 rounded text-xs text-blue-300">
                    /deletedata
                  </code>{" "}
                  slash command, a support server invite, or an email.
                  Provide contact information for privacy inquiries.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              How to Add a Privacy Policy to Your Discord Bot
            </h2>
            <div className="bg-gray-900/50 rounded-xl p-6">
              <div className="space-y-4 text-sm">
                <div className="flex gap-4">
                  <span className="text-green-400 w-6 flex-shrink-0">
                    1.
                  </span>
                  <div>
                    <span className="font-semibold text-white">
                      Audit your bot&apos;s data access
                    </span>
                    <p className="text-gray-400 mt-1">
                      Review your bot&apos;s code and list every Discord API
                      endpoint it calls, every gateway intent it uses, and
                      every piece of data it stores in a database or cache.
                      Check your bot&apos;s intent configuration in the
                      Developer Portal under the &ldquo;Bot&rdquo; tab.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-green-400 w-6 flex-shrink-0">
                    2.
                  </span>
                  <div>
                    <span className="font-semibold text-white">
                      Identify third-party data sharing
                    </span>
                    <p className="text-gray-400 mt-1">
                      List every external service your bot sends data to.
                      This includes your database host (MongoDB, PostgreSQL,
                      Redis), any AI APIs for chat responses, image
                      generation services, moderation APIs, and analytics
                      platforms. Each one needs a disclosure.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-green-400 w-6 flex-shrink-0">
                    3.
                  </span>
                  <div>
                    <span className="font-semibold text-white">
                      Generate your privacy policy with PolicyForge
                    </span>
                    <p className="text-gray-400 mt-1">
                      Use{" "}
                      <Link
                        href="/"
                        className="text-blue-400 hover:text-blue-300 underline"
                      >
                        PolicyForge&apos;s free generator
                      </Link>{" "}
                      to create a privacy policy that covers Discord-specific
                      data types. Customize it with your bot&apos;s name,
                      the data it collects, and your contact information.
                      The generated policy is legally reviewed and covers
                      GDPR, CCPA, and Discord&apos;s Developer Terms.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-green-400 w-6 flex-shrink-0">
                    4.
                  </span>
                  <div>
                    <span className="font-semibold text-white">
                      Host at a public URL and add to Developer Portal
                    </span>
                    <p className="text-gray-400 mt-1">
                      Host your policy on GitHub Pages, your website, or
                      a static site (Vercel, Netlify). Then go to{" "}
                      <code className="bg-gray-800 px-1.5 py-0.5 rounded text-xs text-blue-300">
                        discord.com/developers/applications
                      </code>
                      , select your app, and paste the URL in the
                      &ldquo;Privacy Policy URL&rdquo; field under General
                      Information. This URL is visible during bot
                      authorization.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-green-400 w-6 flex-shrink-0">
                    5.
                  </span>
                  <div>
                    <span className="font-semibold text-white">
                      Add a Terms of Service URL and a /privacy command
                    </span>
                    <p className="text-gray-400 mt-1">
                      Discord&apos;s Developer Portal also has a &ldquo;Terms
                      of Service URL&rdquo; field, required for verification.
                      Use{" "}
                      <Link
                        href="/tos"
                        className="text-blue-400 hover:text-blue-300 underline"
                      >
                        PolicyForge&apos;s ToS generator
                      </Link>{" "}
                      to create one. Also consider adding a{" "}
                      <code className="bg-gray-800 px-1.5 py-0.5 rounded text-xs text-blue-300">
                        /privacy
                      </code>{" "}
                      slash command that links to your policy and explains
                      how users can request data deletion.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Discord Bot Verification: Privacy Requirements
            </h2>
            <p className="mb-4">
              Bot verification is mandatory at 75 servers. Discord
              specifically reviews your privacy policy. Here is what they
              check:
            </p>
            <div className="space-y-4">
              <div className="bg-gray-900/50 rounded-lg p-5">
                <h4 className="font-semibold text-white mb-2">
                  The 75-Server Threshold
                </h4>
                <p className="text-sm text-gray-400">
                  At 75+ guilds, Discord blocks your bot from joining new
                  servers until verified. The application requires a live
                  privacy policy URL, a terms of service URL, and a
                  description of your bot&apos;s functionality. Placeholder
                  pages are rejected.
                </p>
              </div>
              <div className="bg-gray-900/50 rounded-lg p-5">
                <h4 className="font-semibold text-white mb-2">
                  Intent Justification and Consistency
                </h4>
                <p className="text-sm text-gray-400">
                  If your bot requests privileged intents, Discord checks
                  that your privacy policy matches your justifications. If
                  you claim you need Message Content for moderation but your
                  policy does not mention message access, the application is
                  flagged. Common rejection reasons: 404 URLs, generic
                  templates, missing data deletion info, and policy/intent
                  contradictions.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Common Mistakes to Avoid
            </h2>
            <div className="space-y-3">
              <div className="bg-gray-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-red-400 mb-1">
                  Using a generic website privacy policy
                </h4>
                <p className="text-sm text-gray-400">
                  Generic policies do not mention Discord data types,
                  intents, or bot-specific data collection. Discord
                  verification reviewers will reject these. Generate a
                  Discord-specific policy with PolicyForge instead.
                </p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-red-400 mb-1">
                  Not disclosing third-party AI API usage
                </h4>
                <p className="text-sm text-gray-400">
                  If your bot sends message content to OpenAI, Anthropic,
                  or any other external API, you must name the provider
                  and describe what data is shared. This is the most
                  commonly missing disclosure in AI-powered Discord bots.
                </p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-red-400 mb-1">
                  Claiming &ldquo;we don&apos;t collect data&rdquo;
                </h4>
                <p className="text-sm text-gray-400">
                  Your bot processes user IDs in every single interaction.
                  Even if you don&apos;t store data in a database, you must
                  distinguish between data &ldquo;processed&rdquo; in memory
                  and data &ldquo;stored&rdquo; persistently. Both require
                  disclosure.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              FAQ: Discord Bot Privacy Policies
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Does my Discord bot need a privacy policy?
                </h3>
                <p>
                  Yes. Discord&apos;s Developer Terms of Service require all
                  applications that access user data to have a privacy
                  policy. If your bot is in 75+ servers, a privacy policy
                  URL is mandatory for verification. Without one, your bot
                  is blocked from joining additional servers.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  What happens if my bot doesn&apos;t have a privacy policy?
                </h3>
                <p>
                  Your bot cannot pass verification (required at 75+
                  servers) and will be capped. Discord can also remove
                  your bot for violating Developer Terms. If your bot
                  serves EU users without a privacy policy, you are
                  violating GDPR, which carries fines up to &euro;20M.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  How do I add a privacy policy URL to my Discord bot?
                </h3>
                <p>
                  Go to the Discord Developer Portal, select your
                  application, navigate to &ldquo;General Information,&rdquo;
                  and paste your URL in the &ldquo;Privacy Policy URL&rdquo;
                  field. This URL is visible to users during bot
                  authorization and must be live before submitting for
                  verification.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Do I need a policy if my bot only uses slash commands?
                </h3>
                <p>
                  Yes. Even slash-command-only bots process user IDs,
                  channel IDs, and interaction payloads. Discord requires a
                  privacy policy for any application that accesses the API.
                  A minimal policy stating no data is stored permanently is
                  sufficient, but you still need one.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  What data do I need to disclose?
                </h3>
                <p>
                  User IDs, usernames, message content (if using the Message
                  Content intent), server metadata, voice data, roles,
                  reactions, and anything stored in your database. Your
                  policy must cover every data type your bot accesses,
                  processes, or stores.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Related Resources
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link
                href="/privacy-policy-for-api"
                className="bg-gray-800/50 hover:bg-gray-800 rounded-lg p-4 transition block"
              >
                <h4 className="font-semibold text-white mb-1">
                  Privacy Policy for APIs
                </h4>
                <p className="text-sm text-gray-400">
                  If your Discord bot also exposes an API or uses external
                  APIs, learn what your API privacy policy must cover.
                </p>
              </Link>
              <Link
                href="/check"
                className="bg-gray-800/50 hover:bg-gray-800 rounded-lg p-4 transition block"
              >
                <h4 className="font-semibold text-white mb-1">
                  Compliance Checker
                </h4>
                <p className="text-sm text-gray-400">
                  Already have a privacy policy? Scan it for GDPR and CCPA
                  compliance gaps before submitting for Discord verification.
                </p>
              </Link>
              <Link
                href="/tos"
                className="bg-gray-800/50 hover:bg-gray-800 rounded-lg p-4 transition block"
              >
                <h4 className="font-semibold text-white mb-1">
                  Terms of Service Generator
                </h4>
                <p className="text-sm text-gray-400">
                  Discord verification also requires a Terms of Service URL.
                  Generate one alongside your privacy policy.
                </p>
              </Link>
              <Link
                href="/"
                className="bg-gray-800/50 hover:bg-gray-800 rounded-lg p-4 transition block"
              >
                <h4 className="font-semibold text-white mb-1">
                  Privacy Policy Generator
                </h4>
                <p className="text-sm text-gray-400">
                  Generate a free, customizable privacy policy covering
                  Discord data types, GDPR, and CCPA in under 2 minutes.
                </p>
              </Link>
            </div>
          </section>

          <section className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-800/30 rounded-xl p-8">
            <h2 className="text-2xl font-semibold text-white mb-3 text-center">
              Get Your Bot Verified. Generate a Policy Now.
            </h2>
            <p className="text-gray-300 text-center mb-5">
              Don&apos;t let a missing privacy policy block your Discord
              bot at 75 servers. Generate a compliant policy in under 2
              minutes.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/" className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-8 rounded-lg transition">
                Generate Free Policy &mdash; $0
              </Link>
              <Link href="/check" className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-8 rounded-lg transition">
                Check Your Compliance
              </Link>
            </div>
            <p className="text-center text-sm text-gray-500 mt-3">
              Free: 2/day. Pro: $12.99 one-time for unlimited.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
