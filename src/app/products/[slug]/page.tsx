import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllProducts, getProductBySlug, getRelatedProducts } from "@/lib/products";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { GraphicPlaceholder } from "@/components/common/GraphicPlaceholder";
import { ProductCard } from "@/components/products/ProductCard";
import { buildWhatsAppUrl } from "@/lib/utils";
import { siteConfig } from "@/content/site-config";
import {
  PhoneCall,
  CheckCircle2,
  FileSpreadsheet,
  ShieldCheck,
  Package,
  Layers,
  ArrowRight,
  Send,
} from "lucide-react";

interface ProductDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const products = getAllProducts();
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProductDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: `${product.name} — Technical Specifications`,
    description: product.summary,
    openGraph: {
      title: `${product.name} | ${siteConfig.name}`,
      description: product.summary,
    },
  };
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(product, 3);
  const waUrl = buildWhatsAppUrl(
    siteConfig.whatsappNumber,
    product.inquiryPreset || `Inquiry regarding ${product.name} specs and quotation`
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <Breadcrumbs
        items={[
          { label: "Products", href: "/products" },
          {
            label: product.categoryName,
            href: `/products?category=${product.categorySlug}`,
          },
          { label: product.name },
        ]}
      />

      {/* Main Product Showcase Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm">
        {/* Left Col: Visual Showcase */}
        <div className="lg:col-span-5 space-y-4">
          <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
            <GraphicPlaceholder
              type={product.imageType}
              title={product.name}
              className="aspect-[4/3]"
            />
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-2">
            <div className="flex items-center gap-2 font-semibold text-slate-800">
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              <span>Standard Factory Guarantee</span>
            </div>
            <p className="leading-relaxed">
              Every coil and equipment unit is inspected under calibrated dynamometer testing. Free sample coils available for machine tension calibration.
            </p>
          </div>
        </div>

        {/* Right Col: Details & Inquiries */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono font-bold tracking-wider uppercase px-2.5 py-1 rounded bg-slate-900 text-white">
                {product.brand}
              </span>
              <span className="text-xs font-semibold px-2.5 py-1 rounded bg-blue-100 text-blue-800">
                {product.machineType}
              </span>
              <span className="text-xs font-medium text-slate-500">
                {product.categoryName}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {product.name}
            </h1>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed pt-1">
              {product.tagline}
            </p>
          </div>

          {/* Detailed Paragraphs */}
          <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
            {product.description.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Feature Highlights */}
          <div className="space-y-2 border-t border-slate-100 pt-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700">
              Operational Advantages
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
              {product.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action CTAs (Strictly Inquiry Only, No E-Commerce Checkout) */}
          <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-3">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3.5 px-6 rounded-xl text-sm shadow-md transition-all"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Order / Inquire via WhatsApp</span>
            </a>

            <Link
              href={`/contact?product=${encodeURIComponent(product.name)}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold py-3.5 px-6 rounded-xl text-sm transition-all"
            >
              <Send className="w-4 h-4" />
              <span>Request Formal Quote</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Technical Specifications Table */}
      <section className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
        <div className="p-6 bg-slate-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
              <FileSpreadsheet className="w-4 h-4 text-white" />
            </div>
            <div>
              <h2 className="text-lg font-bold">Engineering Datasheet Specifications</h2>
              <p className="text-xs text-slate-400">
                Verified laboratory metrics and dimensional tolerances
              </p>
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 text-xs sm:text-sm">
            {product.specifications.map((spec, i) => (
              <div
                key={i}
                className="flex items-center justify-between py-2.5 border-b border-slate-100"
              >
                <span className="font-mono text-slate-500">{spec.label}</span>
                <span className="font-semibold text-slate-900 text-right">{spec.value}</span>
              </div>
            ))}
          </div>

          {/* Packaging Details if present */}
          {product.packagingDetails && (
            <div className="mt-8 pt-6 border-t border-slate-100">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3 flex items-center gap-2">
                <Package className="w-4 h-4 text-blue-600" />
                Standard Palletization & Logistics Packing
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                  <span className="text-slate-400 block font-mono">Coils Per Pallet</span>
                  <strong className="text-slate-800 text-sm">
                    {product.packagingDetails.coilsPerPallet}
                  </strong>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                  <span className="text-slate-400 block font-mono">Core Diameter</span>
                  <strong className="text-slate-800 text-sm">
                    {product.packagingDetails.coreDiameter}
                  </strong>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                  <span className="text-slate-400 block font-mono">Gross Pallet Weight</span>
                  <strong className="text-slate-800 text-sm">
                    {product.packagingDetails.palletWeight}
                  </strong>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <section className="space-y-6 pt-6">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600 font-mono">
                Complementary Solutions
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                Related Machinery & Bands
              </h2>
            </div>
            <Link
              href="/products"
              className="text-xs font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1"
            >
              <span>Back to Catalog</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((rel) => (
              <ProductCard key={rel.id} product={rel} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

