import { SiteConfig, NavLink } from "@/types/site";

export const siteConfig: SiteConfig = {
  name: "Aegis PolyPack",
  legalName: "PT Aegis PolyPack Solusindo",
  tagline: "Industrial Packaging & High-Tensile Strapping Systems",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Premium strapping bands, automated arch machines, and ergonomic packaging tools since 1998.",
  url: "https://dhoyan-industrial.example.com",
  foundedYear: 1998,
  phone: "+62 21 5550 1988",
  email: "inquiry@aegis-polypack.example",
  whatsappNumber: "6281298765432",
  whatsappDisplay: "+62 812-9876-5432",
  address: {
    street: "Jl. Industri Raya Blok D No. 42",
    district: "Kawasan Industri Delta Silicon",
    city: "Bekasi",
    province: "Jawa Barat",
    postalCode: "17550",
    country: "Indonesia",
  },
  businessHours: "Monday – Friday: 08:00 – 17:00 WIB",
  socials: {
    linkedin: "https://linkedin.com/company/aegis-polypack",
    instagram: "https://instagram.com/aegispolypack",
    facebook: "https://facebook.com/aegispolypack",
    youtube: "https://youtube.com/@aegispolypack",
  },
  stats: [
    {
      value: "25+",
      label: "Years of Excellence",
      description: "Serving manufacturing lines across the archipelago since 1998",
    },
    {
      value: "1,200+",
      label: "Industrial Clients",
      description: "Trusted by pulp, paper, ceramic, metal, and logistics leaders",
    },
    {
      value: "45,000+",
      label: "Tons Supplied Annually",
      description: "Consistent virgin grade polymers with rigorous QA testing",
    },
    {
      value: "99.8%",
      label: "On-Time Dispatch SLA",
      description: "Strategic warehouse network ensuring continuous line uptime",
    },
  ],
  pillars: [
    {
      id: "quality",
      title: "Virgin Polymer Purity",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Strict tolerance control prevents machine jamming and ensures optimal weld strength.",
      icon: "ShieldCheck",
    },
    {
      id: "customization",
      title: "Custom Slitting & Embossing",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore. Tailored gauge thickness, tensile ratings, and custom brand printing.",
      icon: "Sliders",
    },
    {
      id: "support",
      title: "Technical Field Audits",
      description:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia. On-site calibration, machine tuning, and tension optimization audits.",
      icon: "Wrench",
    },
    {
      id: "delivery",
      title: "Zero-Downtime Logistics",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi. Buffer stock management and scheduled route deliveries.",
      icon: "Truck",
    },
  ],
  industries: [
    {
      id: "corrugated",
      name: "Corrugated Carton & Packaging",
      description: "Lorem ipsum dolor sit amet, high-speed bundling without edge deformation.",
      icon: "Box",
    },
    {
      id: "pulp-paper",
      name: "Pulp & Paper Mills",
      description: "Consectetur adipiscing elit, heavy-duty roll securement under humid conditions.",
      icon: "Layers",
    },
    {
      id: "construction",
      name: "Building Materials & Timber",
      description: "Sed do eiusmod tempor, high shock resistance for bricks, lumber, and drywall.",
      icon: "Building2",
    },
    {
      id: "ceramics",
      name: "Ceramics & Tiles",
      description: "Laboris nisi ut aliquip, constant tension retention preventing carton shifts.",
      icon: "Grid3X3",
    },
    {
      id: "metal-heavy",
      name: "Metal Stamping & Steel Coils",
      description: "Duis aute irure dolor, PET alternative to steel strapping with high elongation.",
      icon: "Cog",
    },
    {
      id: "logistics",
      name: "3PL & Cross-Dock Warehouses",
      description: "Excepteur sint occaecat, rapid palletizing for multi-modal domestic freight.",
      icon: "Forklift",
    },
  ],
};

export const mainNavLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Products",
    href: "/products",
    children: [
      {
        label: "Polypropylene (PP) Strapping",
        href: "/products?category=pp-strapping",
        description: "High-speed bundling for automatic and semi-automatic machines",
      },
      {
        label: "Polyester (PET) High-Tensile Band",
        href: "/products?category=pet-strapping",
        description: "Heavy-duty steel strap alternative with superior shock absorption",
      },
      {
        label: "Strapping Machines",
        href: "/products?category=strapping-machines",
        description: "High-speed arch systems and semi-automatic workshop units",
      },
      {
        label: "Hand Tools & Accessories",
        href: "/products?category=tools-accessories",
        description: "Battery friction-weld tools, pneumatic sealers, and strap dispensers",
      },
    ],
  },
  { label: "Technical Articles", href: "/articles" },
  { label: "Contact", href: "/contact" },
];

