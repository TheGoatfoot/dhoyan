import React from "react";
import { Metadata } from "next";
import { getAllArticles, getAllArticleCategories } from "@/lib/articles";
import { ArticleCard } from "@/components/articles/ArticleCard";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { BookOpen, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Technical Articles, Packaging Insights & Maintenance Guides",
  description:
    "Engineering guides on strap width sizing, PP vs PET tensile comparisons, automated arch maintenance, and packaging ROI.",
};

export default function ArticlesPage() {
  const allArticles = getAllArticles();
  const categories = getAllArticleCategories();
  const featuredArticle = allArticles.find((a) => a.isFeatured) || allArticles[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <Breadcrumbs items={[{ label: "Technical Articles" }]} />

      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-semibold uppercase">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Packaging Engineering & Knowledge Base</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Articles, Equipment Guides & Technical News
        </h1>
        <p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
          Deep-dive technical articles written by our engineering team to help factory managers reduce packaging consumable waste, prevent pallet collapse, and optimize machine cycle speeds.
        </p>
      </div>

      {/* Featured Article Banner */}
      {featuredArticle && (
        <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-950 rounded-3xl p-6 sm:p-10 text-white shadow-md border border-slate-800">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-blue-400">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Featured Technical Guide</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight leading-snug">
              {featuredArticle.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed line-clamp-3">
              {featuredArticle.excerpt}
            </p>
            <div className="pt-2 flex items-center gap-4 text-xs text-slate-400">
              <span>By {featuredArticle.author.name}</span>
              <span>•</span>
              <span>{featuredArticle.readTime}</span>
            </div>
            <div className="pt-2">
              <a
                href={`/articles/${featuredArticle.slug}`}
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold px-5 py-3 rounded-lg transition-colors shadow-sm"
              >
                <span>Read Full Article</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Articles Grid */}
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-slate-900 tracking-tight">
          All Guides & Technical Updates ({allArticles.length})
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </div>
  );
}

