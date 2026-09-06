import React from "react";
import Link from "next/link";
import { Article } from "@/types/article";
import { formatDate } from "@/lib/utils";
import { GraphicPlaceholder } from "@/components/common/GraphicPlaceholder";
import { Calendar, Clock, ArrowRight } from "lucide-react";

interface ArticleCardProps {
  article: Article;
}

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <article className="flex flex-col bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 group">
      {/* Cover Header */}
      <Link href={`/articles/${article.slug}`} className="block relative overflow-hidden">
        <GraphicPlaceholder
          type="article"
          title={article.title}
          className="group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3 z-20">
          <span className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded bg-blue-600/90 text-white backdrop-blur-sm">
            {article.category}
          </span>
        </div>
      </Link>

      {/* Article Meta & Content */}
      <div className="flex flex-col flex-1 p-5">
        <div className="flex items-center gap-3 text-xs text-slate-400 mb-2">
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            {formatDate(article.publishedAt)}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {article.readTime}
          </span>
        </div>

        <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
          <Link href={`/articles/${article.slug}`}>{article.title}</Link>
        </h3>

        <p className="text-xs sm:text-sm text-slate-600 mt-2.5 line-clamp-3 leading-relaxed">
          {article.excerpt}
        </p>

        {/* Footer: Author & Read More */}
        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-slate-900 text-white font-mono text-[10px] flex items-center justify-center font-bold">
              {article.author.avatarInitials}
            </div>
            <div>
              <div className="text-xs font-semibold text-slate-800">{article.author.name}</div>
              <div className="text-[10px] text-slate-400">{article.author.role}</div>
            </div>
          </div>

          <Link
            href={`/articles/${article.slug}`}
            className="text-xs font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1"
          >
            <span>Read Guide</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}

