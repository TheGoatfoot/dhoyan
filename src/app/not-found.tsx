import React from "react";
import Link from "next/link";
import { ArrowLeft, Search, Package } from "lucide-react";

export default function NotFound() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-24 text-center space-y-6">
      <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto">
        <Package className="w-8 h-8" />
      </div>

      <div className="space-y-2">
        <span className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400">
          404 Error
        </span>
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
          Page or Product Not Found
        </h1>
        <p className="text-sm text-slate-500 max-w-md mx-auto">
          The requested page, product model, or technical article could not be located in our catalog directory.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-3 pt-2">
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-5 py-2.5 rounded-lg transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Homepage</span>
        </Link>
        <Link
          href="/products"
          className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold px-5 py-2.5 rounded-lg transition-colors"
        >
          <Search className="w-4 h-4" />
          <span>Search Product Catalog</span>
        </Link>
      </div>
    </div>
  );
}

