import { ProductCategory } from "@/types/product";

export const categories: ProductCategory[] = [
  {
    id: "cat-1",
    slug: "pp-strapping",
    name: "Polypropylene (PP) Strapping",
    badge: "01 / PP Series",
    tagline: "Virgin-grade polypropylene bands engineered for frictionless feeding in high-speed automatic arch machines.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Our PP strapping provides superior camber consistency, smooth surface embossing, and robust heat-seal efficiency.",
    icon: "PackageCheck",
  },
  {
    id: "cat-2",
    slug: "pet-strapping",
    name: "Polyester (PET) Strapping Band",
    badge: "02 / PET Series",
    tagline: "Ultra-tensile polyester bands delivering heavy-load retention, weather resistance, and dynamic shock recovery.",
    description:
      "Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Designed as the modern replacement for hazardous steel strapping with zero rust and superior elasticity.",
    icon: "ShieldAlert",
  },
  {
    id: "cat-3",
    slug: "strapping-machines",
    name: "Industrial Strapping Machinery",
    badge: "03 / Machinery",
    tagline: "Heavy-duty automated arch machines and semi-automatic strapping units for uninterrupted factory throughput.",
    description:
      "Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra. Reliable heater-blade mechanisms, brushless DC motors, and intuitive tension adjustments for packaging operations.",
    icon: "Cpu",
  },
  {
    id: "cat-4",
    slug: "tools-accessories",
    name: "Hand Tools & Dispensers",
    badge: "04 / Field Tools",
    tagline: "Battery-powered friction weld tensioners, manual ratchets, heavy-duty sealers, and mobile coil dispensers.",
    description:
      "Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Ergonomic portable solutions allowing operators to secure pallets and irregular crates anywhere in the warehouse or yard.",
    icon: "Wrench",
  },
];

