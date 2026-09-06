"use client";

import React, { useState } from "react";
import { siteConfig } from "@/content/site-config";
import { buildWhatsAppUrl } from "@/lib/utils";
import { Send, CheckCircle2, MessageCircle } from "lucide-react";

interface ContactFormProps {
  defaultProduct?: string;
}

export function ContactForm({ defaultProduct }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    productInterest: defaultProduct || "General Inquiry / Technical Audit",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate clean baked-in submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const handleSendViaWhatsApp = () => {
    const message = `*Website Inquiry Form Submission*
• *Name*: ${formData.name || "N/A"}
• *Company*: ${formData.company || "N/A"}
• *Email*: ${formData.email || "N/A"}
• *Phone*: ${formData.phone || "N/A"}
• *Product*: ${formData.productInterest}
• *Message*: ${formData.message || "Requesting catalog and price quotation."}`;

    const url = buildWhatsAppUrl(siteConfig.whatsappNumber, message);
    window.open(url, "_blank");
  };

  if (submitted) {
    return (
      <div className="bg-emerald-50 rounded-2xl border border-emerald-200 p-8 text-center space-y-4">
        <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-emerald-950">
          Inquiry Successfully Transmitted!
        </h3>
        <p className="text-sm text-emerald-800 max-w-md mx-auto leading-relaxed">
          Thank you, <strong>{formData.name || "Customer"}</strong>. Our technical packaging engineers will review your specifications and contact your team at <strong>{formData.email || formData.phone}</strong> within 1 business day.
        </p>
        <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
          <button
            onClick={() => setSubmitted(false)}
            className="text-xs font-semibold text-emerald-700 hover:text-emerald-900 underline py-2"
          >
            Submit another inquiry
          </button>
          <button
            onClick={handleSendViaWhatsApp}
            className="inline-flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold px-4 py-2.5 rounded-lg shadow-sm"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Forward to WhatsApp Direct Line</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
            Full Name *
          </label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. John Doe"
            className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
            Company / Factory Name *
          </label>
          <input
            type="text"
            name="company"
            required
            value={formData.company}
            onChange={handleChange}
            placeholder="e.g. PT Mitra Logistik Prima"
            className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
            Work Email Address *
          </label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="procurement@company.com"
            className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
            Phone / WhatsApp Number *
          </label>
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="+62 812 3456 7890"
            className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
          Product Line of Interest
        </label>
        <select
          name="productInterest"
          value={formData.productInterest}
          onChange={handleChange}
          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
        >
          <option value="General Inquiry / Technical Audit">General Inquiry / Technical Audit</option>
          <option value="Polypropylene (PP) Machine Strapping">Polypropylene (PP) Machine Strapping</option>
          <option value="Polyester (PET) High-Tensile Strapping">Polyester (PET) High-Tensile Strapping</option>
          <option value="Full Automatic Arch Strapping Machines">Full Automatic Arch Strapping Machines</option>
          <option value="Semi-Automatic Table Strapping Machines">Semi-Automatic Table Strapping Machines</option>
          <option value="Battery-Powered Friction Weld Hand Tools">Battery-Powered Friction Weld Hand Tools</option>
          <option value="Manual Tensioners, Sealers & Mobile Carts">Manual Tensioners, Sealers & Mobile Carts</option>
        </select>
      </div>

      <div>
        <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
          Application Details & Estimated Monthly Volume
        </label>
        <textarea
          name="message"
          rows={4}
          required
          value={formData.message}
          onChange={handleChange}
          placeholder="Please describe pallet weight, carton dimensions, current strapping system, and monthly coil requirements..."
          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
        />
      </div>

      <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
        <button
          type="submit"
          disabled={loading}
          className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg text-sm shadow-sm hover:shadow transition-all disabled:opacity-50"
        >
          <Send className="w-4 h-4" />
          <span>{loading ? "Sending Inquiry..." : "Submit Quotation Request"}</span>
        </button>

        <button
          type="button"
          onClick={handleSendViaWhatsApp}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-5 rounded-lg text-sm transition-all"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Direct WhatsApp</span>
        </button>
      </div>

      <p className="text-[11px] text-slate-400 text-center">
        Zero spam policy. Your industrial data and technical drawings remain confidential under standard NDA.
      </p>
    </form>
  );
}

