import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Section, SectionHeader } from "@/components/Section";
import { fetchAllPosts } from "@/lib/blog/blog.functions";
import type { BlogPost } from "@/lib/blog/types";

interface BlogIndexLoaderData {
  posts: BlogPost[];
  error: string | null;
}

export const Route = createFileRoute("/blog/")({
  loader: async () => {
    const result = await fetchAllPosts();
    return { posts: result.posts, error: result.error };
  },
  component: BlogIndexPage,
});

function BlogIndexPage() {
  const { posts, error } = Route.useLoaderData() as BlogIndexLoaderData;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Section className="pt-32 pb-20 md:pt-40 md:pb-28">
          <SectionHeader
            eyebrow="Blog"
            title="Latest Articles"
            subtitle="Insights on AI learning, course recommendations, and skill development."
          />

          {posts.length > 0 ? (
            <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  to="/blog/$slug"
                  params={{ slug: post.slug }}
                  className="group overflow-hidden rounded-2xl border border-border bg-card transition hover:border-primary/60"
                >
                  {post.image && (
                    <div className="h-48 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                    </div>
                  )}
                  <div className="p-5">
                    {post.category && (
                      <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                        {post.category}
                      </span>
                    )}
                    <h3 className="mt-3 text-lg font-semibold leading-snug group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                      {post.excerpt}
                    </p>
                    <div className="mt-4 flex items-center gap-3 text-xs text-muted-foreground">
                      {post.author && <span>{post.author}</span>}
                      <span>
                        {new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="mt-14 text-center">
              <p className="text-lg text-muted-foreground">
                No blog posts yet. Check back soon!
              </p>
            </div>
          )}
        </Section>
      </main>
      <Footer />
    </div>
  );
}
