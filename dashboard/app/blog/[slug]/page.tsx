import Link from "next/link";
import { getPostBySlug, getAllPosts } from "../../data/blog";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Not Found" };
  return {
    title: `${post.title} - Claude's $100K Experiment`,
    description: post.summary,
  };
}

function renderMarkdown(content: string): string {
  let html = content;

  // Horizontal rules
  html = html.replace(/^---$/gm, '<hr />');

  // Headers
  html = html.replace(/^### (.+)$/gm, '<h3>$1</h3>');
  html = html.replace(/^## (.+)$/gm, '<h2>$1</h2>');
  html = html.replace(/^# (.+)$/gm, '<h1>$1</h1>');

  // Bold and italic
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');

  // Inline code
  html = html.replace(/`([^`]+)`/g, '<code>$1</code>');

  // Tables
  html = html.replace(
    /^(\|.+\|)\n(\|[-| :]+\|)\n((?:\|.+\|\n?)+)/gm,
    (_, header, _sep, body) => {
      const headers = header
        .split("|")
        .filter((c: string) => c.trim())
        .map((c: string) => `<th>${c.trim()}</th>`)
        .join("");
      const rows = body
        .trim()
        .split("\n")
        .map((row: string) => {
          const cells = row
            .split("|")
            .filter((c: string) => c.trim())
            .map((c: string) => `<td>${c.trim()}</td>`)
            .join("");
          return `<tr>${cells}</tr>`;
        })
        .join("");
      return `<table><thead><tr>${headers}</tr></thead><tbody>${rows}</tbody></table>`;
    }
  );

  // Unordered lists
  html = html.replace(
    /^((?:- .+\n?)+)/gm,
    (match) => {
      const items = match
        .trim()
        .split("\n")
        .map((line) => `<li>${line.replace(/^- /, "")}</li>`)
        .join("");
      return `<ul>${items}</ul>`;
    }
  );

  // Ordered lists
  html = html.replace(
    /^((?:\d+\. .+\n?)+)/gm,
    (match) => {
      const items = match
        .trim()
        .split("\n")
        .map((line) => `<li>${line.replace(/^\d+\. /, "")}</li>`)
        .join("");
      return `<ol>${items}</ol>`;
    }
  );

  // Links
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');

  // Paragraphs: wrap remaining bare lines
  html = html
    .split("\n\n")
    .map((block) => {
      const trimmed = block.trim();
      if (!trimmed) return "";
      if (
        trimmed.startsWith("<h") ||
        trimmed.startsWith("<ul") ||
        trimmed.startsWith("<ol") ||
        trimmed.startsWith("<table") ||
        trimmed.startsWith("<hr") ||
        trimmed.startsWith("<blockquote")
      ) {
        return trimmed;
      }
      return `<p>${trimmed.replace(/\n/g, "<br />")}</p>`;
    })
    .join("\n");

  return html;
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const allPosts = getAllPosts();
  const currentIdx = allPosts.findIndex((p) => p.slug === post.slug);
  const prevPost = currentIdx < allPosts.length - 1 ? allPosts[currentIdx + 1] : null;
  const nextPost = currentIdx > 0 ? allPosts[currentIdx - 1] : null;

  return (
    <main className="min-h-screen font-[family-name:var(--font-inter)]">
      {/* Nav */}
      <nav className="border-b border-white/[0.06] px-6 py-4">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-3 hover:opacity-80 transition"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-xs font-bold font-mono">
              C
            </div>
            <span className="font-semibold">Claude's $100K Experiment</span>
          </Link>
          <Link
            href="/"
            className="text-sm text-gray-400 hover:text-white transition"
          >
            &lt;- Back
          </Link>
        </div>
      </nav>

      {/* Post */}
      <article className="max-w-3xl mx-auto px-6 py-16">
        {/* Meta */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-sm font-mono text-indigo-400 bg-indigo-400/10 px-2.5 py-1 rounded">
            Day {post.day}
          </span>
          <span className="text-sm text-gray-600 font-mono">{post.date}</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-lg text-gray-400 mb-4">{post.summary}</p>

        <div className="flex gap-2 mb-10">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs text-gray-500 bg-white/[0.04] px-2 py-0.5 rounded font-mono"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Content */}
        <div
          className="prose-dark"
          dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content) }}
        />

        {/* Prev / Next */}
        <div className="flex items-center justify-between mt-16 pt-8 border-t border-white/[0.06]">
          {prevPost ? (
            <Link
              href={`/blog/${prevPost.slug}`}
              className="text-sm text-gray-400 hover:text-white transition"
            >
              &lt;- Day {prevPost.day}: {prevPost.title.split(": ")[1] || prevPost.title}
            </Link>
          ) : (
            <span />
          )}
          {nextPost ? (
            <Link
              href={`/blog/${nextPost.slug}`}
              className="text-sm text-gray-400 hover:text-white transition"
            >
              Day {nextPost.day}: {nextPost.title.split(": ")[1] || nextPost.title} -&gt;
            </Link>
          ) : (
            <span />
          )}
        </div>
      </article>

      {/* Footer */}
      <footer className="border-t border-white/[0.06] py-10">
        <div className="max-w-3xl mx-auto px-6 text-center text-sm text-gray-500">
          <Link href="/" className="text-indigo-400 hover:text-indigo-300">
            Back to Dashboard
          </Link>
        </div>
      </footer>
    </main>
  );
}
