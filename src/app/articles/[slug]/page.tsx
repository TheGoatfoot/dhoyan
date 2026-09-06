import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllArticles, getArticleBySlug, getRelatedArticles } from "@/lib/articles";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { ArticleCard } from "@/components/articles/ArticleCard";
import { formatDate } from "@/lib/utils";
import { siteConfig } from "@/content/site-config";
import {
  Calendar,
  Clock,
  User,
  Share2,
  ArrowLeft,
  ArrowRight,
  Info,
  CheckCircle2,
  PhoneCall,
} from "lucide-react";

interface ArticleDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const articles = getAllArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: ArticleDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: `${article.title} | ${siteConfig.name}`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.publishedAt,
      authors: [article.author.name],
    },
  };
}

export default async function ArticleDetailPage({ params }: ArticleDetailPageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = getRelatedArticles(article, 2);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <Breadcrumbs
        items={[
          { label: "Articles", href: "/articles" },
          { label: article.category, href: "/articles" },
          { label: article.title },
        ]}
      />

      {/* Article Header */}
      <header className="space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded bg-blue-600 text-white">
            {article.category}
          </span>
          {article.tags.map((tag, i) => (
            <span
              key={i}
              className="text-xs font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-600"
            >
              #{tag}
            </span>
          ))}
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
          {article.title}
        </h1>

        <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-slate-200 text-xs sm:text-sm text-slate-500">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-slate-900 text-white font-mono text-xs flex items-center justify-center font-bold">
              {article.author.avatarInitials}
            </div>
            <div>
              <div className="font-semibold text-slate-900">{article.author.name}</div>
              <div className="text-xs text-slate-500">{article.author.role}</div>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-slate-400" />
              {formatDate(article.publishedAt)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-slate-400" />
              {article.readTime}
            </span>
          </div>
        </div>
      </header>

      {/* Structured Article Body */}
      <article className="prose prose-slate max-w-none space-y-6 text-slate-700 leading-relaxed text-sm sm:text-base">
        {article.blocks.map((block, idx) => {
          switch (block.type) {
            case "paragraph":
              return <p key={idx}>{block.content}</p>;

            case "heading2":
              return (
                <h2
                  key={idx}
                  className="text-xl sm:text-2xl font-bold text-slate-900 pt-4 border-t border-slate-100"
                >
                  {block.content}
                </h2>
              );

            case "heading3":
              return (
                <h3 key={idx} className="text-lg font-bold text-slate-900 pt-2">
                  {block.content}
                </h3>
              );

            case "callout":
              return (
                <div
                  key={idx}
                  className="bg-blue-50/80 border-l-4 border-blue-600 rounded-r-xl p-4 sm:p-5 text-blue-950 space-y-1 my-4"
                >
                  <div className="flex items-center gap-2 font-bold text-xs uppercase tracking-wider text-blue-700">
                    <Info className="w-4 h-4" />
                    <span>{block.title}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-blue-900 leading-relaxed pt-1">
                    {block.content}
                  </p>
                </div>
              );

            case "list":
              return (
                <ul key={idx} className="space-y-2 my-4 pl-1">
                  {block.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs sm:text-sm">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              );

            case "table":
              return (
                <div
                  key={idx}
                  className="overflow-x-auto my-6 rounded-xl border border-slate-200 shadow-sm"
                >
                  <table className="w-full text-left text-xs border-collapse">
                    <thead className="bg-slate-100 text-slate-700 uppercase font-semibold">
                      <tr>
                        {block.headers.map((h, i) => (
                          <th key={i} className="p-3 border-b border-slate-200">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {block.rows.map((row, rIdx) => (
                        <tr key={rIdx} className="hover:bg-slate-50">
                          {row.map((cell, cIdx) => (
                            <td key={cIdx} className="p-3 text-slate-700">
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              );

            default:
              return null;
          }
        })}
      </article>

      {/* Bottom Consultation Banner */}
      <div className="bg-gradient-to-r from-slate-900 to-blue-950 rounded-2xl p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center sm:text-left">
          <h3 className="text-lg font-bold">Have Questions About Your Packaging Setup?</h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-md">
            Our engineering specialists provide on-site technical audits to calculate exact break requirements and line speeds.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold px-4 py-2.5 rounded-lg transition-colors"
          >
            <span>Request Line Audit</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Back to Articles & Related */}
      <div className="pt-6 border-t border-slate-200 space-y-6">
        <div className="flex items-center justify-between">
          <Link
            href="/articles"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-blue-600 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Technical Articles</span>
          </Link>
        </div>

        {relatedArticles.length > 0 && (
          <div className="space-y-4 pt-4">
            <h3 className="text-lg font-bold text-slate-900">Related Technical Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedArticles.map((rel) => (
                <ArticleCard key={rel.id} article={rel} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

