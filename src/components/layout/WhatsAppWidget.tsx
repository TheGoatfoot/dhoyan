"use client";

import React, { useState } from "react";
import { siteConfig } from "@/content/site-config";
import { buildWhatsAppUrl } from "@/lib/utils";
import { MessageCircle, X } from "lucide-react";

export function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);

  const defaultUrl = buildWhatsAppUrl(
    siteConfig.whatsappNumber,
    "Hello Aegis PolyPack, I would like to consult on strapping band specifications."
  );

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Pop-over prompt dialog */}
      {isOpen && (
        <div className="mb-3 w-72 sm:w-80 rounded-2xl bg-white p-4 shadow-2xl border border-slate-200 animate-in fade-in slide-in-from-bottom-2 duration-200 text-slate-800">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center text-white">
                <MessageCircle className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-slate-900">Technical Sales Team</h4>
                <p className="text-[11px] text-emerald-600 font-medium">Online • Mon-Fri 08:00-17:00</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-slate-600 p-1"
              aria-label="Close message"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <p className="text-xs text-slate-600 mt-3 leading-relaxed">
            Need urgent coil stock, machine recommendations, or custom width quotations? Chat directly with our application engineers.
          </p>
          <a
            href={defaultUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold py-2.5 px-4 rounded-xl shadow-sm transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Open WhatsApp Chat</span>
          </a>
        </div>
      )}

      {/* Floating Action Badge */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 group"
        aria-label="Contact via WhatsApp"
      >
        <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
        <span className="text-xs font-semibold hidden sm:inline">Inquire via WhatsApp</span>
      </button>
    </div>
  );
}

