"use client";

import React, { useState, useMemo } from "react";
import { Product, ProductCategory } from "@/types/product";
import { ProductCard } from "@/components/products/ProductCard";
import { Search, SlidersHorizontal, X } from "lucide-react";

interface ProductCatalogProps {
  initialProducts: Product[];
  categories: ProductCategory[];
  defaultCategory?: string;
}

export function ProductCatalog({
  initialProducts,
  categories,
  defaultCategory = "all",
}: ProductCatalogProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(defaultCategory);
  const [selectedType, setSelectedType] = useState<string>("all");

  const machineTypes = useMemo(() => {
    const types = new Set<string>();
    initialProducts.forEach((p) => types.add(p.machineType));
    return Array.from(types);
  }, [initialProducts]);

  const filteredProducts = useMemo(() => {
    return initialProducts.filter((product) => {
      // Category filter
      if (selectedCategory !== "all" && product.categorySlug !== selectedCategory) {
        return false;
      }

      // Machine type filter
      if (selectedType !== "all" && product.machineType !== selectedType) {
        return false;
      }

      // Search query
      if (searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(query);
        const matchesSummary = product.summary.toLowerCase().includes(query);
        const matchesBrand = product.brand.toLowerCase().includes(query);
        const matchesCategory = product.categoryName.toLowerCase().includes(query);
        const matchesSpecs = product.specifications.some(
          (s) => s.label.toLowerCase().includes(query) || s.value.toLowerCase().includes(query)
        );
        return matchesName || matchesSummary || matchesBrand || matchesCategory || matchesSpecs;
      }

      return true;
    });
  }, [initialProducts, selectedCategory, selectedType, searchQuery]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("all");
    setSelectedType("all");
  };

  const hasActiveFilters =
    searchQuery !== "" || selectedCategory !== "all" || selectedType !== "all";

  return (
    <div className="space-y-8">
      {/* Filter and Search Bar Controls */}
      <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm space-y-5">
        {/* Search input */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search products by model, tensile rating, width, or keyword..."
            className="w-full pl-12 pr-10 py-3 bg-slate-50 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Category Pills */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs font-semibold text-slate-500 uppercase tracking-wider">
            <span className="flex items-center gap-1.5">
              <SlidersHorizontal className="w-3.5 h-3.5" />
              Filter by Product Category
            </span>
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="text-blue-600 hover:underline capitalize"
              >
                Reset all filters
              </button>
            )}
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-all ${
                selectedCategory === "all"
                  ? "bg-slate-900 text-white shadow-sm"
                  : "bg-slate-100 hover:bg-slate-200 text-slate-700"
              }`}
            >
              All Categories ({initialProducts.length})
            </button>
            {categories.map((cat) => {
              const count = initialProducts.filter((p) => p.categorySlug === cat.slug).length;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.slug)}
                  className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-all ${
                    selectedCategory === cat.slug
                      ? "bg-blue-600 text-white shadow-sm"
                      : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                  }`}
                >
                  {cat.name} ({count})
                </button>
              );
            })}
          </div>
        </div>

        {/* Machine / Operation Type Pills */}
        <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center gap-2 text-xs">
          <span className="text-slate-500 font-medium">Operation Tier:</span>
          <button
            onClick={() => setSelectedType("all")}
            className={`px-2.5 py-1 rounded text-xs transition-colors ${
              selectedType === "all"
                ? "bg-slate-800 text-white font-medium"
                : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            All Types
          </button>
          {machineTypes.map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`px-2.5 py-1 rounded text-xs transition-colors ${
                selectedType === type
                  ? "bg-blue-600 text-white font-medium"
                  : "text-slate-600 hover:bg-slate-100"
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between text-xs sm:text-sm text-slate-500 px-1">
        <span>
          Showing <strong className="text-slate-900">{filteredProducts.length}</strong> products
        </span>
        {selectedCategory !== "all" && (
          <span className="bg-blue-50 text-blue-700 font-mono text-xs px-2.5 py-0.5 rounded-full">
            {categories.find((c) => c.slug === selectedCategory)?.name}
          </span>
        )}
      </div>

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-slate-200 p-8">
          <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 mx-auto flex items-center justify-center mb-4">
            <Search className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-slate-900">No matching products found</h3>
          <p className="text-sm text-slate-500 mt-1 max-w-md mx-auto">
            Try adjusting your search keywords, clear the category filters, or contact our engineers directly for custom specifications.
          </p>
          <button
            onClick={clearFilters}
            className="mt-5 inline-flex items-center gap-1.5 bg-blue-600 text-white text-xs font-semibold px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Clear All Filters
          </button>
        </div>
      )}
    </div>
  );
}

