import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/content/site-config";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import {
  ShieldCheck,
  Award,
  Factory,
  CheckCircle2,
  Users,
  Calendar,
  ArrowRight,
  TrendingUp,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us — Industrial Strapping Manufacturing Since 1998",
  description:
    "Learn about Aegis PolyPack's history, manufacturing facilities, quality standards, and dedicated industrial packaging engineering team.",
};

const milestones = [
  {
    year: "1998",
    title: "Founding & Semi-Automatic PP Production",
    description:
      "Established initial extrusion facility in West Java dedicated to producing semi-automatic grade polypropylene strapping for domestic factories.",
  },
  {
    year: "2008",
    title: "Corporate Restructuring to PT Aegis PolyPack",
    description:
      "Modernized extrusion infrastructure with automated European die lines to launch high-speed zero-camber PP bands for automated arch machinery.",
  },
  {
    year: "2015",
    title: "High-Tensile PET Band Extrusion Line",
    description:
      "Commissioned dedicated Polyester (PET) high-viscosity extrusion plants, introducing steel-strap alternatives to heavy metals and brick manufacturers.",
  },
  {
    year: "2021",
    title: "ISO 9001:2015 & ASTM Tensile Certification",
    description:
      "Upgraded laboratory testing suites with in-line laser gauge sensors, digital pull dynamometers, and climate-controlled sample chambers.",
  },
  {
    year: "2026",
    title: "National Distribution & Automated Tooling Division",
    description:
      "Expanded buffer warehousing to 5 major industrial corridors, integrating battery friction weld hand tools and custom machinery service audits.",
  },
];

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
      <Breadcrumbs items={[{ label: "About Us" }]} />

      {/* Hero Header */}
      <section className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-semibold uppercase">
          <Award className="w-3.5 h-3.5" />
          <span>Over 25 Years of Industrial Excellence</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight max-w-4xl">
          Engineered Reliability for the Backbone of Indonesian Manufacturing
        </h1>
        <p className="text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed">
          {siteConfig.description}
        </p>
      </section>

      {/* Vision & Mission */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm space-y-4">
          <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
            <TrendingUp className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">Our Corporate Vision</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            To become the premier and most trusted industrial strapping partner across Southeast Asia, recognized for uncompromising polymer purity, sustainable lightweighting, and absolute line continuity.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm space-y-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">Our Operational Mission</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            To deliver precision-manufactured strapping consumables, high-throughput automated machinery, and prompt on-site engineering audits that protect cargo and maximize factory efficiency.
          </p>
        </div>
      </section>

      {/* Quality Control & Lab Standards */}
      <section className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 lg:p-16 space-y-8">
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-mono font-bold tracking-widest text-blue-400 uppercase">
            Quality Assurance & Testing
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Strict Multi-Stage Testing Protocol
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Every production batch undergoes destructive and non-destructive laboratory tests in compliance with ASTM D3950 guidelines to prevent unexpected strap rupture in transit.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
          <div className="bg-slate-800/80 rounded-xl p-6 border border-slate-700 space-y-2">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Laser Camber Verification
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Curvature is strictly controlled to less than 15mm per 2-meter span, ensuring jam-free feeding in automatic arches cycling up to 65 straps per minute.
            </p>
          </div>

          <div className="bg-slate-800/80 rounded-xl p-6 border border-slate-700 space-y-2">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Dynamic Tensile Testing
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Calibrated universal testing machines record peak break strength and elongation curves, guaranteeing rated safety factors on heavy pallets.
            </p>
          </div>

          <div className="bg-slate-800/80 rounded-xl p-6 border border-slate-700 space-y-2">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Thermal Weld Efficiency Test
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Heater-blade and friction-welded joints are pulled to failure to ensure joint retention exceeds 80% of native strap break load.
            </p>
          </div>
        </div>
      </section>

      {/* Historical Milestones */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 font-mono">
            Company History
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Key Milestones in Our Growth Journey
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            From humble workshop beginnings to supplying heavy industry and multinational manufacturing leaders.
          </p>
        </div>

        <div className="relative border-l-2 border-slate-200 ml-4 sm:ml-32 space-y-10 py-4">
          {milestones.map((m, idx) => (
            <div key={idx} className="relative pl-8 sm:pl-10 group">
              {/* Year Marker */}
              <div className="absolute -left-3 sm:-left-[120px] top-0 sm:text-right sm:w-24">
                <span className="inline-flex sm:block text-xs font-mono font-bold bg-blue-600 text-white px-2 py-0.5 rounded sm:bg-transparent sm:text-slate-900 sm:text-lg sm:p-0">
                  {m.year}
                </span>
              </div>
              {/* Bullet Node */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-blue-600" />

              <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
                <h3 className="text-base font-bold text-slate-900">{m.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  {m.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-blue-50 rounded-2xl border border-blue-200 p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center sm:text-left">
          <h3 className="text-xl font-bold text-blue-950">
            Explore Our Comprehensive Product Catalog
          </h3>
          <p className="text-xs sm:text-sm text-blue-700">
            Find the exact strap width, thickness, and tooling suited for your manufacturing facility.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-5 py-3 rounded-lg shadow-sm transition-colors"
          >
            <span>Browse Products</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 bg-white hover:bg-slate-50 text-slate-800 text-xs font-semibold px-5 py-3 rounded-lg border border-slate-200 transition-colors"
          >
            <span>Contact Sales</span>
          </Link>
        </div>
      </section>
    </div>
  );
}

