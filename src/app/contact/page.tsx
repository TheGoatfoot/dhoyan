import React from "react";
import { Metadata } from "next";
import { siteConfig } from "@/content/site-config";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { ContactForm } from "@/components/common/ContactForm";
import { buildWhatsAppUrl } from "@/lib/utils";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Building2,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Sales & Packaging Consultation — Aegis PolyPack",
  description:
    "Get in touch with Aegis PolyPack for strapping band quotations, technical line audits, and machinery servicing.",
};

interface ContactPageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const resolvedParams = await searchParams;
  const initialProduct =
    typeof resolvedParams.product === "string" ? resolvedParams.product : undefined;

  const waUrl = buildWhatsAppUrl(
    siteConfig.whatsappNumber,
    initialProduct
      ? `Inquiry regarding ${initialProduct}`
      : "Hello Aegis PolyPack, I would like to inquire about industrial strapping systems."
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <Breadcrumbs items={[{ label: "Contact & Inquiries" }]} />

      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-semibold uppercase">
          <Building2 className="w-3.5 h-3.5" />
          <span>Industrial Inquiries & Factory Audits</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Get in Touch With Our Packaging Specialists
        </h1>
        <p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
          Whether you need urgent buffer stock replenishment, custom tensile gauge slitting, or an on-site arch machine calibration audit, our team is standing by.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Contact Info Cards (Left Col) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm border border-slate-800">
            <div>
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-blue-400">
                Direct Contact
              </span>
              <h2 className="text-xl font-bold mt-1">Corporate Headquarters & Plant</h2>
            </div>

            <div className="space-y-5 text-sm">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-blue-600/30 text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <strong className="block text-white">Factory & Head Office</strong>
                  <span className="text-slate-300 text-xs sm:text-sm leading-relaxed block mt-0.5">
                    {siteConfig.address.street}
                    <br />
                    {siteConfig.address.district}
                    <br />
                    {siteConfig.address.city}, {siteConfig.address.province}{" "}
                    {siteConfig.address.postalCode}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-emerald-600/30 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <strong className="block text-white">WhatsApp Direct Line</strong>
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 hover:underline text-xs sm:text-sm block mt-0.5"
                  >
                    {siteConfig.whatsappDisplay} (Fast Response)
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-blue-600/30 text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <strong className="block text-white">Telephone Switchboard</strong>
                  <a
                    href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, "")}`}
                    className="text-slate-300 hover:text-white text-xs sm:text-sm block mt-0.5"
                  >
                    {siteConfig.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-blue-600/30 text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <strong className="block text-white">Inquiry Email</strong>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-slate-300 hover:text-white text-xs sm:text-sm block mt-0.5"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-blue-600/30 text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <strong className="block text-white">Operating Schedule</strong>
                  <span className="text-slate-300 text-xs sm:text-sm block mt-0.5">
                    {siteConfig.businessHours}
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 text-xs text-slate-400 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Response SLA: Within 4 hours on business days</span>
            </div>
          </div>
        </div>

        {/* Interactive RFQ Form (Right Col) */}
        <div className="lg:col-span-7">
          <ContactForm defaultProduct={initialProduct} />
        </div>
      </div>
    </div>
  );
}

