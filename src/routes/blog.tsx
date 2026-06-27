import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/blog")({
  head: ({ match }) => ({
    meta: [
      { title: "Blog | Course Discovery" },
      {
        name: "description",
        content:
          "Read the latest articles on AI learning, course recommendations, and skill development tips from CourseDiscovery.",
      },
      { property: "og:title", content: "Blog | Course Discovery" },
      {
        property: "og:description",
        content:
          "Read the latest articles on AI learning, course recommendations, and skill development tips from CourseDiscovery.",
      },
      {
        property: "og:url",
        content: `https://coursediscovery.net${match.pathname}`,
      },
    ],
    links: [
      {
        rel: "canonical",
        href: `https://coursediscovery.net${match.pathname}`,
      },
    ],
  }),
  component: BlogLayout,
});

function BlogLayout() {
  return <Outlet />;
}
