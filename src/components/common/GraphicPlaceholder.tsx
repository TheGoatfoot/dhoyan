import React from "react";
import { cn } from "@/lib/utils";

interface GraphicPlaceholderProps {
  type:
    | "coil-pp"
    | "coil-pet"
    | "machine-auto"
    | "machine-semi"
    | "tool-battery"
    | "tool-pneumatic"
    | "tool-manual"
    | "dispenser"
    | "seal"
    | "article"
    | "hero";
  className?: string;
  title?: string;
}

export function GraphicPlaceholder({ type, className, title }: GraphicPlaceholderProps) {
  const getTheme = () => {
    switch (type) {
      case "coil-pp":
        return {
          bg: "from-blue-900 via-slate-900 to-blue-950",
          accent: "#38bdf8",
          secondary: "#0284c7",
          label: "PP STRAPPING COIL",
          badge: "VIRGIN PP HOMOPOLYMER",
        };
      case "coil-pet":
        return {
          bg: "from-emerald-950 via-zinc-900 to-teal-950",
          accent: "#34d399",
          secondary: "#059669",
          label: "PET HIGH-TENSILE BAND",
          badge: "HEAVY DUTY STEEL ALTERNATIVE",
        };
      case "machine-auto":
        return {
          bg: "from-amber-950 via-zinc-900 to-stone-900",
          accent: "#fbbf24",
          secondary: "#d97706",
          label: "AUTOMATIC ARCH SYSTEM",
          badge: "65 STRAPS/MIN SERVO DRIVE",
        };
      case "machine-semi":
        return {
          bg: "from-indigo-950 via-slate-900 to-zinc-900",
          accent: "#818cf8",
          secondary: "#4f46e5",
          label: "SEMI-AUTOMATIC TABLE",
          badge: "1.5S RAPID HEAT SEAL",
        };
      case "tool-battery":
        return {
          bg: "from-cyan-950 via-zinc-900 to-slate-900",
          accent: "#22d3ee",
          secondary: "#0891b2",
          label: "BATTERY FRICTION TOOL",
          badge: "4,000N FRICTION WELD",
        };
      case "tool-pneumatic":
        return {
          bg: "from-rose-950 via-zinc-900 to-slate-900",
          accent: "#fb7185",
          secondary: "#e11d48",
          label: "PNEUMATIC INDUSTRIAL TOOL",
          badge: "6,000N HIGH CLAMP FORCE",
        };
      case "tool-manual":
        return {
          bg: "from-slate-900 via-neutral-900 to-stone-950",
          accent: "#94a3b8",
          secondary: "#475569",
          label: "FORGED MANUAL TENSIONER",
          badge: "HEAVY-DUTY FIELD KIT",
        };
      case "dispenser":
        return {
          bg: "from-stone-900 via-zinc-900 to-neutral-950",
          accent: "#e2e8f0",
          secondary: "#64748b",
          label: "MOBILE STRAP DISPENSER",
          badge: "DISC BRAKE UTILITY CART",
        };
      case "seal":
        return {
          bg: "from-zinc-900 via-slate-900 to-zinc-950",
          accent: "#cbd5e1",
          secondary: "#94a3b8",
          label: "SERRATED STEEL CLAMPS",
          badge: "GALVANIZED LOCK GRIP",
        };
      case "article":
        return {
          bg: "from-slate-950 via-blue-950 to-zinc-950",
          accent: "#38bdf8",
          secondary: "#60a5fa",
          label: "TECHNICAL KNOWLEDGE",
          badge: "PACKAGING ENGINEERING",
        };
      case "hero":
      default:
        return {
          bg: "from-blue-950 via-slate-900 to-zinc-950",
          accent: "#38bdf8",
          secondary: "#2563eb",
          label: "INDUSTRIAL PACKAGING SYSTEMS",
          badge: "SINCE 1998",
        };
    }
  };

  const theme = getTheme();

  return (
    <div
      className={cn(
        "relative w-full aspect-[16/10] overflow-hidden rounded-xl bg-gradient-to-br flex flex-col items-center justify-center p-6 text-center select-none shadow-inner border border-white/10 group",
        theme.bg,
        className
      )}
    >
      {/* Background industrial grid pattern */}
      <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />

      {/* Decorative technical corner marks */}
      <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-white/30" />
      <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-white/30" />
      <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-white/30" />
      <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-white/30" />

      {/* Graphic center composition */}
      <div className="relative z-10 flex flex-col items-center justify-center space-y-3">
        {/* Animated circle pulse / tech ring */}
        <div className="relative flex items-center justify-center w-20 h-20 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm group-hover:scale-105 transition-transform duration-300">
          <div
            className="w-12 h-12 rounded-full border-2 border-dashed animate-spin-slow opacity-80"
            style={{ borderColor: theme.accent }}
          />
          <div
            className="absolute w-6 h-6 rounded-full"
            style={{ backgroundColor: theme.accent, opacity: 0.8 }}
          />
        </div>

        {/* Badge */}
        <span
          className="text-[10px] font-mono tracking-widest uppercase px-2.5 py-0.5 rounded-full border border-white/10 bg-white/10 text-white/90"
        >
          {theme.badge}
        </span>

        {/* Product / Category Title */}
        <h4 className="text-sm font-semibold tracking-wide text-white uppercase max-w-[85%] truncate">
          {title || theme.label}
        </h4>

        {/* Engineering watermark */}
        <div className="text-[9px] font-mono text-white/40 tracking-wider">
          SPEC-GRADE • 100% QA TESTED • IND-PACK
        </div>
      </div>
    </div>
  );
}

