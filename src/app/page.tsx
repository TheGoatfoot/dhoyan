import React from "react";
import Link from "next/link";
import { siteConfig } from "@/content/site-config";
import { categories } from "@/content/categories";
import { getFeaturedProducts } from "@/lib/products";
import { getLatestArticles } from "@/lib/articles";
import { buildWhatsAppUrl } from "@/lib/utils";
import { ProductCard } from "@/components/products/ProductCard";
import { ArticleCard } from "@/components/articles/ArticleCard";
import { ComparisonTable } from "@/components/products/ComparisonTable";
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  PhoneCall,
  Sliders,
  Wrench,
  Truck,
  Box,
  Layers,
  Building2,
  Grid3X3,
  Cog,
  Forklift,
  Package,
} from "lucide-react";

export default function HomePage() {
  const featuredProducts = getFeaturedProducts();
  const latestArticles = getLatestArticles(3);

  const heroWaUrl = buildWhatsAppUrl(
    siteConfig.whatsappNumber,
    "Hello Aegis PolyPack, I would like to consult on strapping band specifications and request a quotation."
  );

  return (
    <div className="space-y-20 pb-16">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white pt-16 pb-20 lg:pt-24 lg:pb-32 border-b border-slate-800">
        {/* Subtle engineering grid background */}
        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6 text-center sm:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono tracking-wider uppercase">
              <ShieldCheck className="w-4 h-4" />
              <span>Leading Strapping Band Supplier Since {siteConfig.foundedYear}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              High-Tensile Strapping & Automated Packaging Systems
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Virgin-grade PP & PET strapping bands, high-speed automated arch machinery, and friction-weld hand tools for zero-downtime production lines.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <Link
                href="/products"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-7 py-3.5 rounded-xl text-sm shadow-lg shadow-blue-600/30 transition-all group"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>

              <a
                href={heroWaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-7 py-3.5 rounded-xl text-sm shadow-lg shadow-emerald-600/20 transition-all"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Order via WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Key Metrics / Credibility Bar */}
          <div className="mt-16 pt-10 border-t border-slate-800/80 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center sm:text-left">
            {siteConfig.stats.map((stat, i) => (
              <div key={i} className="space-y-1">
                <div className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-mono text-blue-400">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-slate-200">{stat.label}</div>
                {stat.description && (
                  <div className="text-xs text-slate-400 line-clamp-1">{stat.description}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Company Story Teaser */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-200 p-8 lg:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 font-mono">
              About {siteConfig.legalName}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Two Decades of Polymer Precision & Line Reliability
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Founded in 1998, {siteConfig.legalName} has grown into an industrial packaging powerhouse. From small carton bundling to heavy steel coil unitizing, we engineer virgin-grade strapping bands that guarantee high weld efficiency, uniform gauge consistency, and zero machine feeding jams.
            </p>
            <div className="flex flex-wrap gap-4 pt-2 text-xs font-semibold text-slate-700">
              <span className="flex items-center gap-1.5 bg-slate-100 px-3 py-1.5 rounded-lg">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                100% Virgin Grade Resins
              </span>
              <span className="flex items-center gap-1.5 bg-slate-100 px-3 py-1.5 rounded-lg">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                ASTM D3950 Tensile Compliance
              </span>
              <span className="flex items-center gap-1.5 bg-slate-100 px-3 py-1.5 rounded-lg">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Ready Stock Nationwide Dispatch
              </span>
            </div>
          </div>
          <div className="lg:col-span-4 flex flex-col justify-center items-start lg:items-end">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold px-6 py-3.5 rounded-xl transition-colors shadow-sm"
            >
              <span>Read Full Company Profile</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Product Categories Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 font-mono">
              Product Categories
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              Engineered Packaging Consumables & Equipment
            </h2>
          </div>
          <Link
            href="/products"
            className="text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1"
          >
            <span>View All Categories</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/products?category=${category.slug}`}
              className="flex flex-col justify-between bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-200 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-slate-400">
                    {category.badge}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Package className="w-4 h-4" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {category.name}
                </h3>
                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                  {category.tagline}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-semibold text-blue-600 group-hover:text-blue-700 flex items-center justify-between">
                <span>Browse Series</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 4. Featured Products Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 font-mono">
              Industrial Catalog
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              Featured High-Performance Models
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Top-selling strapping bands and packaging tools configured for automated high-volume operations.
            </p>
          </div>
          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold px-4 py-2.5 rounded-lg transition-colors shadow-sm"
          >
            <span>Complete Catalog ({getFeaturedProducts().length}+)</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* 5. Technical Comparison Table (PP vs PET) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ComparisonTable />
      </section>

      {/* 6. Target Industry Applications */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 font-mono">
            Industry Applications
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Trusted Across Diverse Manufacturing Sectors
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            From flexible corrugated packaging to heavy structural metals, our strapping solutions keep lines running uninterrupted.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.industries.map((ind) => {
            const getIcon = () => {
              switch (ind.icon) {
                case "Box":
                  return <Box className="w-5 h-5" />;
                case "Layers":
                  return <Layers className="w-5 h-5" />;
                case "Building2":
                  return <Building2 className="w-5 h-5" />;
                case "Grid3X3":
                  return <Grid3X3 className="w-5 h-5" />;
                case "Cog":
                  return <Cog className="w-5 h-5" />;
                case "Forklift":
                default:
                  return <Forklift className="w-5 h-5" />;
              }
            };

            return (
              <div
                key={ind.id}
                className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm flex items-start gap-4 hover:border-slate-300 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  {getIcon()}
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-slate-900">{ind.name}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{ind.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 7. Core Value Pillars */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-400 font-mono">
              Why Partner With Us
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              The Aegis Quality & Reliability Commitment
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Built around the strict demands of high-speed industrial lines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteConfig.pillars.map((pillar) => {
              const getPillarIcon = () => {
                switch (pillar.icon) {
                  case "ShieldCheck":
                    return <ShieldCheck className="w-6 h-6 text-blue-400" />;
                  case "Sliders":
                    return <Sliders className="w-6 h-6 text-emerald-400" />;
                  case "Wrench":
                    return <Wrench className="w-6 h-6 text-amber-400" />;
                  case "Truck":
                  default:
                    return <Truck className="w-6 h-6 text-purple-400" />;
                }
              };

              return (
                <div
                  key={pillar.id}
                  className="bg-slate-800/60 rounded-xl p-6 border border-slate-700 space-y-3"
                >
                  <div className="w-12 h-12 rounded-lg bg-slate-950 flex items-center justify-center">
                    {getPillarIcon()}
                  </div>
                  <h3 className="text-base font-bold text-white">{pillar.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. Latest Technical Articles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 font-mono">
              Knowledge & Insights
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              Technical Packaging Guides
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Practical guides written by packaging engineers to optimize strap tension, maintenance, and joint yield.
            </p>
          </div>
          <Link
            href="/articles"
            className="text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1"
          >
            <span>View All Articles</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {latestArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </section>
    </div>
  );
}
