"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig, mainNavLinks } from "@/content/site-config";
import { buildWhatsAppUrl } from "@/lib/utils";
import { Menu, X, ChevronDown, PhoneCall, ShieldCheck, ArrowUpRight } from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when pathname changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setProductsDropdownOpen(false);
  }, [pathname]);

  const waUrl = buildWhatsAppUrl(
    siteConfig.whatsappNumber,
    "Hello Aegis PolyPack, I would like to inquire about industrial strapping and packaging systems."
  );

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80"
          : "bg-white border-b border-slate-100"
      }`}
    >
      {/* Top Bar for industrial credentials */}
      <div className="bg-slate-900 text-slate-300 text-xs py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-slate-300 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
              Trusted Industrial Packaging Manufacturer Since {siteConfig.foundedYear}
            </span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-400">ISO 9001 & ASTM Tensile Certified</span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, "")}`}
              className="hover:text-white transition-colors"
            >
              Direct Line: <strong className="text-slate-200">{siteConfig.phone}</strong>
            </a>
            <span className="text-slate-500">•</span>
            <span>{siteConfig.businessHours}</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-xl shadow-md group-hover:bg-blue-700 transition-colors">
              A
            </div>
            <div>
              <span className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
                {siteConfig.name}
              </span>
              <span className="block text-[10px] uppercase font-mono tracking-wider text-slate-500 -mt-0.5">
                Industrial Packaging
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {mainNavLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              if (link.children) {
                return (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setProductsDropdownOpen(true)}
                    onMouseLeave={() => setProductsDropdownOpen(false)}
                  >
                    <Link
                      href={link.href}
                      className={`inline-flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        isActive
                          ? "text-blue-600 bg-blue-50/50"
                          : "text-slate-700 hover:text-blue-600 hover:bg-slate-50"
                      }`}
                    >
                      {link.label}
                      <ChevronDown className="w-4 h-4 text-slate-400" />
                    </Link>

                    {/* Dropdown Menu */}
                    {productsDropdownOpen && (
                      <div className="absolute left-0 mt-1 w-80 bg-white rounded-xl shadow-xl border border-slate-100 py-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                        <div className="px-4 py-2 border-b border-slate-100 bg-slate-50/70">
                          <Link
                            href="/products"
                            className="text-xs font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1"
                          >
                            Browse All Products Catalog
                            <ArrowUpRight className="w-3 h-3" />
                          </Link>
                        </div>
                        {link.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="block px-4 py-2.5 hover:bg-slate-50 text-left transition-colors"
                          >
                            <div className="text-sm font-medium text-slate-900">
                              {child.label}
                            </div>
                            {child.description && (
                              <div className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                                {child.description}
                              </div>
                            )}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? "text-blue-600 bg-blue-50/50"
                      : "text-slate-700 hover:text-blue-600 hover:bg-slate-50"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Action Button & WhatsApp CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium px-4 py-2.5 rounded-lg shadow-sm hover:shadow transition-all"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Order via WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 rounded-md text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-2 shadow-lg">
          <div className="space-y-1">
            {mainNavLinks.map((link) => (
              <div key={link.label}>
                <Link
                  href={link.href}
                  className={`block px-3 py-2.5 rounded-md text-base font-medium ${
                    pathname === link.href
                      ? "text-blue-600 bg-blue-50"
                      : "text-slate-800 hover:bg-slate-50"
                  }`}
                >
                  {link.label}
                </Link>
                {link.children && (
                  <div className="pl-4 space-y-1 border-l-2 border-slate-100 ml-3 mt-1">
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block px-3 py-1.5 text-sm text-slate-600 hover:text-blue-600"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-100 space-y-2">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 text-white text-sm font-medium py-3 rounded-lg shadow-sm"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Order via WhatsApp</span>
            </a>
            <div className="text-center text-xs text-slate-500 pt-1">
              Tel: {siteConfig.phone} • {siteConfig.businessHours}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

