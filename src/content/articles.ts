import { Article } from "@/types/article";

export const articles: Article[] = [
  {
    id: "art-1",
    slug: "determining-strap-width-gauge-guide",
    title: "How to Determine the Optimal Strapping Width & Gauge for Packaging Lines",
    excerpt:
      "Lorem ipsum dolor sit amet, selecting incorrect strap dimensions leads to package ruptures or unnecessary material expenditures. Here is the operational engineering framework for sizing strap gauge and break strength.",
    publishedAt: "2026-07-20",
    author: {
      name: "Ir. Hendra Pratama",
      role: "Chief Packaging Engineer",
      avatarInitials: "HP",
    },
    category: "Technical Guide",
    readTime: "6 min read",
    tags: ["Engineering", "Sizing Guide", "Cost Optimization", "Quality Control"],
    isFeatured: true,
    blocks: [
      {
        type: "paragraph",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sizing strapping material for automated production is a balance between safety margin and cost-per-meter economics. Selecting an excessively thin strap risks failure under load shifting, while an over-specified band causes unnecessary overhead across hundreds of thousands of cycles.",
      },
      {
        type: "heading2",
        content: "1. Calculating the Required Minimum Break Strength (MBS)",
      },
      {
        type: "paragraph",
        content:
          "Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. The universal industrial guideline for cargo unitization calculates strapping requirements using the static weight of the pallet multiplied by an acceleration factor (typically 1.5G to 2.0G) divided by the number of straps applied.",
      },
      {
        type: "callout",
        title: "Standard Safety Equation",
        content:
          "Minimum Break Strength per Strap = (Total Pallet Weight × G-Force Dynamic Safety Factor) / (Number of Straps × Joint Efficiency Factor). For standard road transport, assume a minimum 1.5x dynamic shock factor.",
      },
      {
        type: "heading2",
        content: "2. Rule of Thumb for Strap Width Selection",
      },
      {
        type: "list",
        items: [
          "5mm – 6mm PP Strapping: Lightweight publications, pharmaceutical boxes, and garment bundles under 20 kg.",
          "9mm – 12mm PP Strapping: Standard corrugated shipping cartons, logistics e-commerce parcels, and appliance crates up to 60 kg.",
          "12mm – 15.5mm PET Band: Medium-duty palletizing, tile boxes, beverage case bundles, and automotive spare part crates up to 450 kg.",
          "16mm – 19mm PET Band: Heavy timber, concrete masonry, steel coil unitization, and export seafreight containers exceeding 1,000 kg.",
        ],
      },
      {
        type: "heading2",
        content: "3. Camber and Thickness Tolerances in Automatic Machinery",
      },
      {
        type: "paragraph",
        content:
          "Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra. In high-speed arch machines cycling at 60 straps per minute, thickness tolerance (within ±0.03mm) and camber straightness are paramount. A band with excessive camber will arc inside the guide track, colliding with the sealing head and halting the entire conveyor line.",
      },
      {
        type: "table",
        headers: ["Pallet Weight", "Recommended Material", "Width (mm)", "Thickness (mm)", "Minimum Straps"],
        rows: [
          ["Under 100 kg", "Polypropylene (PP)", "9 mm – 12 mm", "0.55 mm", "2 Cross Straps"],
          ["100 kg – 400 kg", "High-Grade PP / Light PET", "12 mm – 15 mm", "0.65 mm", "2 to 3 Straps"],
          ["400 kg – 900 kg", "Polyester (PET)", "15.5 mm", "0.80 mm", "3 to 4 Straps + Edge Protectors"],
          ["Over 900 kg", "Extreme PET Heavy Duty", "19 mm – 25 mm", "1.00 mm – 1.25 mm", "4 Straps with Interlocking Seals"],
        ],
      },
      {
        type: "heading3",
        content: "Summary & Technical Consultation",
      },
      {
        type: "paragraph",
        content:
          "Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. If your facility is experiencing frequent strap misfeeds or transit shifting, our engineering team provides free on-site line audits to inspect tension calibration, joint integrity, and coil quality.",
      },
    ],
  },
  {
    id: "art-2",
    slug: "pp-vs-pet-strapping-selection",
    title: "PP vs. PET Strapping: Which Material Best Fits Your Operating Conditions?",
    excerpt:
      "Duis aute irure dolor in reprehenderit in voluptate. Understanding the mechanical differences between Polypropylene and Polyester straps before investing in tooling and bulk consumables.",
    publishedAt: "2026-07-08",
    author: {
      name: "Budi Santoso",
      role: "Materials Application Specialist",
      avatarInitials: "BS",
    },
    category: "Material Science",
    readTime: "5 min read",
    tags: ["PP Strapping", "PET Strapping", "Material Science", "Warehouse Efficiency"],
    isFeatured: true,
    blocks: [
      {
        type: "paragraph",
        content:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident. Two primary polymer materials dominate modern industrial packaging: Polypropylene (PP) and Polyester (PET). While they look somewhat similar to the untrained eye, their tensile modulus, tension retention, and thermal behaviors are fundamentally distinct.",
      },
      {
        type: "heading2",
        content: "Elongation Recovery: The Deciding Variable",
      },
      {
        type: "paragraph",
        content:
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Polypropylene has high elongation (up to 25%) but lower elastic recovery. Once stretched beyond its yield point, it experiences plastic deformation. Polyester (PET), on the other hand, exhibits 'elastic memory.'",
      },
      {
        type: "callout",
        title: "The Settling Pallet Phenomenon",
        content:
          "When corrugated boxes are stacked on a pallet and transported over bumpy roads, the bottom cartons compress and settle, slightly reducing the overall stack height. PP strap will become slack. PET strap contracts with the settling stack, retaining up to 90% of its initial clamping force.",
      },
      {
        type: "heading2",
        content: "Cost & Machine Speed Trade-Offs",
      },
      {
        type: "paragraph",
        content:
          "For high-speed secondary carton packaging (e.g., bundling 10 book packs together every 5 seconds), PP remains uncontested because of its low cost and rapid thermal melting properties. However, for unitizing heavy brick pallets or metal pipes, replacing dangerous steel strapping with PET provides superior shock absorption, zero worker lacerations, and up to 50% savings.",
      },
    ],
  },
  {
    id: "art-3",
    slug: "manual-vs-semi-auto-vs-automatic-systems",
    title: "Manual, Semi-Automatic, or Full-Arch? Matching Strapping Systems to Line Volume",
    excerpt:
      "Excepteur sint occaecat cupidatat non proident. Upgrading equipment isn't always about buying the most expensive machine. Here is how to calculate cycle ROI across production tiers.",
    publishedAt: "2026-06-25",
    author: {
      name: "Ratna Sari",
      role: "Automation Systems Advisor",
      avatarInitials: "RS",
    },
    category: "Automation & Machinery",
    readTime: "7 min read",
    tags: ["Machinery", "Automation", "Plant Efficiency", "ROI Analysis"],
    isFeatured: false,
    blocks: [
      {
        type: "paragraph",
        content:
          "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Manufacturing plant managers often face the dilemma of whether to continue with manual hand-tensioners, deploy semi-automatic strapping tables, or integrate fully automatic inline arch machines.",
      },
      {
        type: "heading2",
        content: "Tier 1: Manual Strapping (0 – 50 Packages / Day)",
      },
      {
        type: "paragraph",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. If your dispatch department handles fewer than 50 irregular pallets or crates per day, manual ratchets or battery-powered handheld tools offer maximal flexibility without taking up dedicated conveyor footprint.",
      },
      {
        type: "heading2",
        content: "Tier 2: Semi-Automatic Tables (50 – 500 Packages / Day)",
      },
      {
        type: "paragraph",
        content:
          "Morbi pellentesque euismod venenatis. A semi-automatic table like the Aegis-Table Semi 740 is the sweet spot for packing rooms. The operator simply places the parcel on the tabletop, loops the band, and the machine completes tensioning, welding, and cutting in 1.5 seconds. Average speed increases 4x over manual tensioners.",
      },
      {
        type: "heading2",
        content: "Tier 3: Automatic Arch Systems (500+ Packages / Day)",
      },
      {
        type: "paragraph",
        content:
          "Nulla facilisi. Proin id libero id nisi pretium consequat. When volumes exceed hundreds of cartons per hour, an automatic arch machine integrated directly with roller conveyors eliminates operator intervention entirely. Photoelectric eyes detect carton arrival, trigger automated strapping, and convey the package onwards in under 1 second.",
      },
    ],
  },
  {
    id: "art-4",
    slug: "preventative-maintenance-for-strapping-machines",
    title: "Essential Preventative Maintenance Checklist for Strapping Machines",
    excerpt:
      "Praesent libero sed cursus ante dapibus. 85% of strapping machine malfunctions stem from polymer dust buildup and incorrect heater blade calibration. Keep your line running without downtime.",
    publishedAt: "2026-06-10",
    author: {
      name: "Ir. Hendra Pratama",
      role: "Chief Packaging Engineer",
      avatarInitials: "HP",
    },
    category: "Maintenance & Care",
    readTime: "4 min read",
    tags: ["Maintenance", "Operational Reliability", "Best Practices"],
    isFeatured: false,
    blocks: [
      {
        type: "paragraph",
        content:
          "Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. An automated strapping machine is a precision electromechanical device subjected to rapid friction, high acceleration, and thermal cycling thousands of times per shift.",
      },
      {
        type: "heading2",
        content: "Weekly Maintenance Checklist",
      },
      {
        type: "list",
        items: [
          "Blow out polymer dust and debris from the feed rollers using dry compressed air (max 4 bar).",
          "Clean the heater blade with a fine brass wire brush to remove caramelized polymer residues.",
          "Inspect the strap track guide switches and microswitches for smooth mechanical spring return.",
          "Check drive belt tension and inspect roller bearing surfaces for uneven wear.",
        ],
      },
      {
        type: "heading2",
        content: "Optimal Heater Temperature Calibration",
      },
      {
        type: "paragraph",
        content:
          "Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. If the heater blade is set too cool, the weld joint will be brittle and peel apart easily under light pull. If set too hot, the strap will burn, emitting white smoke and creating weak charred joint edges.",
      },
    ],
  },
];

