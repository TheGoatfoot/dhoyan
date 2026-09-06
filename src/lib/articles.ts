import { articles } from "@/content/articles";
import { Article } from "@/types/article";

export function getAllArticles(): Article[] {
  return articles;
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getLatestArticles(limit: number = 3): Article[] {
  return [...articles]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, limit);
}

export function getArticlesByCategory(category: string): Article[] {
  return articles.filter((a) => a.category.toLowerCase() === category.toLowerCase());
}

export function getAllArticleCategories(): string[] {
  const cats = new Set<string>();
  articles.forEach((a) => cats.add(a.category));
  return Array.from(cats);
}

export function getRelatedArticles(article: Article, limit: number = 2): Article[] {
  return articles
    .filter((a) => a.id !== article.id && a.category === article.category)
    .slice(0, limit);
}

