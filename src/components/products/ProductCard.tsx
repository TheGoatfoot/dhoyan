import React from "react";
import Link from "next/link";
import { Product } from "@/types/product";
import { GraphicPlaceholder } from "@/components/common/GraphicPlaceholder";
import { buildWhatsAppUrl } from "@/lib/utils";
import { siteConfig } from "@/content/site-config";
import { ArrowRight, PhoneCall } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const waUrl = buildWhatsAppUrl(
    siteConfig.whatsappNumber,
    product.inquiryPreset || `Inquiry regarding ${product.name}`
  );

  // Take first 3 specifications for preview
  const previewSpecs = product.specifications.slice(0, 3);

  return (
    <div className="flex flex-col bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 group">
      {/* Product Image / Visual Placeholder */}
      <Link href={`/products/${product.slug}`} className="block relative overflow-hidden">
        <GraphicPlaceholder
          type={product.imageType}
          title={product.name}
          className="group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-20">
          <span className="text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded bg-slate-900/80 backdrop-blur-sm text-white">
            {product.brand}
          </span>
          <span className="text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded bg-blue-600/90 backdrop-blur-sm text-white">
            {product.machineType}
          </span>
        </div>
      </Link>

      {/* Content Body */}
      <div className="flex flex-col flex-1 p-5">
        <div className="text-[11px] font-medium text-slate-500 uppercase tracking-wider mb-1">
          {product.categoryName}
        </div>

        <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-1">
          <Link href={`/products/${product.slug}`}>{product.name}</Link>
        </h3>

        <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
          {product.summary}
        </p>

        {/* Mini Technical Specs Matrix */}
        <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5 text-xs">
          {previewSpecs.map((spec, i) => (
            <div key={i} className="flex justify-between items-center text-slate-600">
              <span className="text-slate-400 font-mono text-[11px]">{spec.label}</span>
              <span className="font-semibold text-slate-800 text-right truncate max-w-[150px]">
                {spec.value}
              </span>
            </div>
          ))}
        </div>

        {/* Action Buttons (Strictly No Checkout, Instant Inquiry & Detail Link) */}
        <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-2">
          <Link
            href={`/products/${product.slug}`}
            className="flex-1 inline-flex items-center justify-center gap-1 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold py-2.5 px-3 rounded-lg transition-colors"
          >
            <span>Details</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold py-2.5 px-3.5 rounded-lg shadow-sm transition-colors"
            title="Inquire via WhatsApp"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Inquire</span>
          </a>
        </div>
      </div>
    </div>
  );
}

