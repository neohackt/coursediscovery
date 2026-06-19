import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";
import { fetchPostBySlug } from "@/lib/blog/blog.functions";
import type { BlogPost } from "@/lib/blog/types";

interface BlogPostLoaderData {
  post: BlogPost | null;
  error: string | null;
}

export const Route = createFileRoute("/blog/$slug")({
  head: ({ loaderData }) => {
    const data = loaderData as unknown as BlogPostLoaderData | undefined;
    const post = data?.post;
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

  html = html.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    '<a href="$2" class="text-primary hover:underline">$1</a>',
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
    /^(?!<[hluo]|<li|<hr|<pre|<blockquote|<a |<strong|<em)(.+)$/gm,
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

  const renderedContent = useMemo(
    () => (post ? renderMarkdown(post.content) : ""),
    [post],
  );

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
