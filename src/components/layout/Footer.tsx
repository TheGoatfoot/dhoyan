import React from "react";
import Link from "next/link";
import { siteConfig } from "@/content/site-config";
import { categories } from "@/content/categories";
import { MapPin, Phone, Mail, Clock, ShieldCheck, ArrowRight } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/utils";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const waUrl = buildWhatsAppUrl(
    siteConfig.whatsappNumber,
    "Hello Aegis PolyPack, I have an inquiry from your website."
  );

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800">
      {/* Pre-footer consultation bar */}
      <div className="bg-blue-900/40 border-b border-blue-900/50 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Need a Custom Tensile or Machine Sizing Audit?
            </h3>
            <p className="text-blue-200 text-sm sm:text-base mt-1 max-w-2xl">
              Consult your pallet payload and arch machine specifications with our packaging engineering team. Zero obligation, instant recommendations.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-medium px-5 py-3 rounded-lg text-sm shadow-md transition-all"
            >
              <span>Chat via WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium px-5 py-3 rounded-lg text-sm transition-all border border-white/20"
            >
              <span>Submit RFQ Form</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1: Company Profile */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-lg">
                A
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                {siteConfig.name}
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              {siteConfig.tagline}. Manufacturing high-reliability polypropylene and polyester strapping solutions for industrial packaging lines since {siteConfig.foundedYear}.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-300 font-mono">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>ISO 9001:2015 Registered • Certified Quality Control</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Our Company
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white transition-colors">
                  Product Catalog
                </Link>
              </li>
              <li>
                <Link href="/articles" className="hover:text-white transition-colors">
                  Technical Guides & News
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact & Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Product Categories */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Product Series
            </h4>
            <ul className="space-y-2 text-sm">
              {categories.map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`/products?category=${cat.slug}`}
                    className="hover:text-white transition-colors"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Facilities */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Head Office & Plant
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>
                  {siteConfig.address.street}, {siteConfig.address.district},{" "}
                  {siteConfig.address.city}, {siteConfig.address.province}{" "}
                  {siteConfig.address.postalCode}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <a
                  href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, "")}`}
                  className="hover:text-white"
                >
                  {siteConfig.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white">
                  {siteConfig.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-blue-400 shrink-0" />
                <span>{siteConfig.businessHours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {currentYear} {siteConfig.legalName}. All rights reserved. (Baked-in Next.js Catalog)
          </p>
          <div className="flex items-center gap-6">
            <Link href="/products" className="hover:text-slate-400">
              Products
            </Link>
            <Link href="/articles" className="hover:text-slate-400">
              Articles
            </Link>
            <Link href="/contact" className="hover:text-slate-400">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

