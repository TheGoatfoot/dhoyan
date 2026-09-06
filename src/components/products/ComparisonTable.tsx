import React from "react";
import { materialComparisonData } from "@/content/comparison";
import { CheckCircle2, ShieldCheck } from "lucide-react";

export function ComparisonTable() {
  const { title, subtitle, rows } = materialComparisonData;

  return (
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
      <div className="p-6 sm:p-8 bg-gradient-to-r from-slate-900 to-blue-950 text-white">
        <div className="inline-flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-blue-400 bg-blue-950/60 px-3 py-1 rounded-full border border-blue-800/60 mb-3">
          <ShieldCheck className="w-3.5 h-3.5" />
          Technical Selection Matrix
        </div>
        <h3 className="text-xl sm:text-2xl font-bold tracking-tight">{title}</h3>
        <p className="text-slate-300 text-xs sm:text-sm mt-2 max-w-3xl leading-relaxed">
          {subtitle}
        </p>
      </div>

      {/* Desktop / Tablet Table View */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200 text-xs font-bold text-slate-700 uppercase tracking-wider">
              <th className="py-4 px-6 w-1/4">Specification Parameter</th>
              <th className="py-4 px-6 w-1/3 bg-blue-50/50 text-blue-950 border-x border-slate-200">
                Polypropylene (PP) Strapping
              </th>
              <th className="py-4 px-6 w-1/3 bg-emerald-50/50 text-emerald-950">
                Polyester (PET) Band
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
            {rows.map((row, idx) => (
              <tr key={idx} className="hover:bg-slate-50/70 transition-colors">
                <td className="py-4 px-6 font-medium text-slate-900">
                  {row.parameter}
                </td>
                <td className="py-4 px-6 text-slate-700 bg-blue-50/20 border-x border-slate-100">
                  <div className="font-semibold text-slate-800">{row.ppValue}</div>
                </td>
                <td className="py-4 px-6 text-slate-700 bg-emerald-50/20">
                  <div className="font-semibold text-slate-800">{row.petValue}</div>
                  <div className="text-[11px] text-emerald-700 flex items-center gap-1 mt-1 font-medium">
                    <CheckCircle2 className="w-3 h-3 shrink-0" />
                    <span>{row.winnerNote}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="p-4 bg-slate-50 border-t border-slate-200 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-3">
        <span>Need assistance running tension tests with your automated arch equipment?</span>
        <a
          href="/contact"
          className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center gap-1"
        >
          Request Free Engineering Audit →
        </a>
      </div>
    </div>
  );
}

