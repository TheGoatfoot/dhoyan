export interface Author {
  name: string;
  role: string;
  avatarInitials: string;
}

export type ArticleBlock =
  | { type: 'paragraph'; content: string }
  | { type: 'heading2'; content: string }
  | { type: 'heading3'; content: string }
  | { type: 'list'; items: string[] }
  | { type: 'callout'; title: string; content: string }
  | { type: 'table'; headers: string[]; rows: string[][] };

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  author: Author;
  category: string;
  readTime: string;
  tags: string[];
  blocks: ArticleBlock[];
  isFeatured?: boolean;
}

