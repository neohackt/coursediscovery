export interface BlogPostFrontmatter {
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  image?: string;
  author?: string;
  category?: string;
  draft?: boolean;
}

export interface BlogPost {
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  image?: string;
  author?: string;
  category?: string;
  content: string;
}
