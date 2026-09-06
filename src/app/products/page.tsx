import React from "react";
import { Metadata } from "next";
import { getAllProducts, getAllCategories } from "@/lib/products";
import { ProductCatalog } from "@/components/products/ProductCatalog";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { Package, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Industrial Strapping Products Catalog — PP, PET & Machinery",
  description:
    "Browse our complete catalog of virgin PP strapping, high-tensile PET bands, automated arch machines, and cordless friction weld tools.",
};

interface ProductsPageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const resolvedParams = await searchParams;
  const initialCategory = typeof resolvedParams.category === "string" ? resolvedParams.category : "all";

  const allProducts = getAllProducts();
  const allCategories = getAllCategories();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <Breadcrumbs items={[{ label: "Products Catalog" }]} />

      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-semibold uppercase">
          <Package className="w-3.5 h-3.5" />
          <span>Complete Industrial Packaging Lineup</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Strapping Bands, Machinery & Packaging Tools
        </h1>
        <p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
          Select from our catalog of virgin-grade polypropylene (PP) strapping, heavy-duty polyester (PET) bands, automated arch equipment, and ergonomic battery hand tools. All models are available with custom gauge slitting and on-site machine tuning.
        </p>
      </div>

      {/* Product Catalog Browser (Client Component with live filtering) */}
      <ProductCatalog
        initialProducts={allProducts}
        categories={allCategories}
        defaultCategory={initialCategory}
      />
    </div>
  );
}

