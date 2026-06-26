import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useRef } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";
import { fetchPostBySlug } from "@/lib/blog/blog.functions";
import { AFFILIATE_URL } from "@/lib/constants";
import { buildAffiliateUrl } from "@/lib/gclid";
import type { BlogPost } from "@/lib/blog/types";

interface BlogPostLoaderData {
  post: BlogPost | null;
  error: string | null;
}

export const Route = createFileRoute("/blog/$slug")({
  head: ({ loaderData, match }) => {
    const data = loaderData as unknown as BlogPostLoaderData | undefined;
    const post = data?.post;
    const ogImage = post?.image
      ? post.image.startsWith("http")
        ? post.image
        : `https://coursediscovery.net${post.image}`
      : undefined;
    return {
      meta: [
        {
          title: post
            ? `${post.title} | Course Discovery`
            : "Blog | Course Discovery",
        },
        {
          name: "description",
          content: post?.excerpt ?? "Read this article on CourseDiscovery.",
        },
        {
          property: "og:title",
          content: post?.title ?? "Blog Post",
        },
        {
          property: "og:description",
          content: post?.excerpt ?? "",
        },
        {
          property: "og:url",
          content: `https://coursediscovery.net${match.pathname}`,
        },
        ...(ogImage ? [{ property: "og:image", content: ogImage }] : []),
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [
        {
          rel: "canonical",
          href: `https://coursediscovery.net${match.pathname}`,
        },
      ],
    };
  },
  loader: async ({ params }) => {
    const result = await fetchPostBySlug({ data: { slug: params.slug } });
    return { post: result.post, error: result.error };
  },
  component: BlogPostPage,
});

function renderMarkdown(md: string): string {
  let html = md
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  // Tables — process before other block elements
  html = html.replace(
    /(?:^|\n)((?:\|.+\|\n)+)/g,
    (_match, tableBlock: string) => {
      const rows = tableBlock.trim().split("\n");
      if (rows.length < 2) return tableBlock;

      const parseCells = (row: string) =>
        row
          .split("|")
          .slice(1, -1)
          .map((c) => c.trim());

      const headerCells = parseCells(rows[0]);
      const header = headerCells
        .map(
          (c) =>
            `<th class="border border-border bg-muted px-4 py-2 text-left text-sm font-semibold text-foreground">${c}</th>`,
        )
        .join("");

      const dataRows = rows.slice(2); // skip header + separator
      const body = dataRows
        .map((row) => {
          const cells = parseCells(row);
          return `<tr>${cells
            .map(
              (c) =>
                `<td class="border border-border px-4 py-2 text-sm text-muted-foreground">${c}</td>`,
            )
            .join("")}</tr>`;
        })
        .join("");

      return `\n<table class="w-full border-collapse my-6 text-sm"><thead><tr>${header}</tr></thead><tbody>${body}</tbody></table>\n`;
    },
  );

  html = html.replace(
    /^### (.+)$/gm,
    '<h3 class="text-xl font-semibold text-foreground mt-8 mb-3">$1</h3>',
  );
  html = html.replace(
    /^## (.+)$/gm,
    '<h2 class="text-2xl font-bold text-foreground mt-10 mb-4">$1</h2>',
  );
  html = html.replace(
    /^# (.+)$/gm,
    '<h1 class="text-3xl font-bold text-foreground mt-12 mb-4">$1</h1>',
  );

  html = html.replace(
    /\*\*(.+?)\*\*/g,
    '<strong class="font-semibold text-foreground">$1</strong>',
  );
  html = html.replace(/\*(.+?)\*/g, "<em>$1</em>");

  // Links — detect affiliate URLs and add rel attributes
  html = html.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    (_match, text: string, href: string) => {
      const isAffiliate = href.includes("click.dealsncodes.com");
      if (isAffiliate) {
        return `<a href="${href}" target="_blank" rel="nofollow sponsored noopener" class="text-primary hover:underline">${text}</a>`;
      }
      return `<a href="${href}" class="text-primary hover:underline">${text}</a>`;
    },
  );

  html = html.replace(/^---$/gm, '<hr class="my-8 border-border" />');

  html = html.replace(
    /^- (.+)$/gm,
    '<li class="flex items-start gap-2"><span class="text-primary flex-shrink-0">•</span><span>$1</span></li>',
  );
  html = html.replace(
    /(<li[^>]*>.*<\/li>\n?)+/g,
    (match) => `<ul class="space-y-2 my-4 pl-2">${match}</ul>`,
  );

  html = html.replace(
    /^\d+\. (.+)$/gm,
    '<li class="flex items-start gap-2"><span class="text-primary flex-shrink-0 font-semibold">$1</span></li>',
  );

  html = html.replace(/^```[\s\S]*?```/gm, (match) => {
    const code = match.replace(/^```\w*\n?/, "").replace(/\n?```$/, "");
    return `<pre class="bg-muted rounded-lg p-4 my-4 overflow-x-auto text-sm"><code>${code}</code></pre>`;
  });

  html = html.replace(
    /`([^`]+)`/g,
    '<code class="bg-muted px-1.5 py-0.5 rounded text-sm">$1</code>',
  );

  html = html.replace(
    /^> (.+)$/gm,
    '<blockquote class="border-l-4 border-primary pl-4 italic text-muted-foreground my-4">$1</blockquote>',
  );

  html = html.replace(
    /^(?!<[hluo]|<li|<hr|<pre|<blockquote|<a |<strong|<em|<table|<thead|<tbody|<tr|<th|<td)(.+)$/gm,
    (match) => {
      if (match.trim() === "") return "";
      return `<p class="my-4 leading-relaxed">${match}</p>`;
    },
  );

  return html;
}

function BlogPostPage() {
  const loaderData = Route.useLoaderData() as unknown as BlogPostLoaderData;
  const { post, error } = loaderData;
  const contentRef = useRef<HTMLDivElement>(null);

  const renderedContent = useMemo(
    () => (post ? renderMarkdown(post.content) : ""),
    [post],
  );

  // Client-side: enrich affiliate links with GCLID/keyword tracking params
  useEffect(() => {
    if (!contentRef.current) return;
    const links = contentRef.current.querySelectorAll<HTMLAnchorElement>(
      'a[href*="click.dealsncodes.com"]',
    );
    links.forEach((link) => {
      if (link.href.includes("?o=") && !link.href.includes("aff_sub1=")) {
        link.href = buildAffiliateUrl(AFFILIATE_URL);
      }
    });
  }, [renderedContent]);

  if (error || !post) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main>
          <Section className="pt-32 pb-20 md:pt-40 md:pb-28">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold">Post Not Found</h1>
              <p className="mt-4 text-muted-foreground">
                The blog post you&apos;re looking for doesn&apos;t exist.
              </p>
              <Link
                to="/blog"
                className="mt-6 inline-flex items-center gap-2 text-primary hover:underline"
              >
                ← Back to Blog
              </Link>
            </div>
          </Section>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Section className="pt-32 pb-20 md:pt-40 md:pb-28">
          <article className="max-w-3xl mx-auto">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              ← Back to Blog
            </Link>

            <header className="space-y-4 mb-10">
              {post.category && (
                <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  {post.category}
                </span>
              )}
              <h1 className="text-4xl font-bold leading-tight md:text-5xl">
                {post.title}
              </h1>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                {post.author && <span>{post.author}</span>}
                <span>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
              {post.excerpt && (
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {post.excerpt}
                </p>
              )}
            </header>

            {post.image && (
              <div className="mb-10 overflow-hidden rounded-2xl">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover"
                />
              </div>
            )}

            <div
              ref={contentRef}
              className="prose prose-lg max-w-none text-muted-foreground"
              dangerouslySetInnerHTML={{ __html: renderedContent }}
            />
          </article>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
