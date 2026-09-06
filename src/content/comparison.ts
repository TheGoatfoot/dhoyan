export interface ComparisonRow {
  parameter: string;
  ppValue: string;
  petValue: string;
  winnerNote: string;
}

export const materialComparisonData: {
  title: string;
  subtitle: string;
  rows: ComparisonRow[];
} = {
  title: "PP vs. PET Strapping: Engineering Datasheet Comparison",
  subtitle:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Compare the physical, tensile, and environmental characteristics of Polypropylene and Polyester strapping to select the ideal medium for your packing lines.",
  rows: [
    {
      parameter: "Base Polymer Resin",
      ppValue: "Virgin Polypropylene Homopolymer",
      petValue: "Oriented Polyethylene Terephthalate",
      winnerNote: "PET delivers higher molecular density and dimensional stability",
    },
    {
      parameter: "Tensile Break Strength",
      ppValue: "110 – 320 kgf (Moderate)",
      petValue: "450 – 1,550 kgf (Heavy Duty)",
      winnerNote: "PET is engineered to match steel strap tensile loads",
    },
    {
      parameter: "Elongation at Break",
      ppValue: "15% – 25% (High stretch)",
      petValue: "10% – 16% (Controlled stretch)",
      winnerNote: "PP absorbs initial carton flex; PET maintains rigid tension",
    },
    {
      parameter: "Elastic Memory & Tension Retention",
      ppValue: "Moderate (relaxes over 48h)",
      petValue: "Superior (retains >90% initial clamp force)",
      winnerNote: "PET recovers when settling loads shrink during long transit",
    },
    {
      parameter: "Primary Machine Compatibility",
      ppValue: "High-speed auto arch & semi-auto tables",
      petValue: "Heavy arch machines & battery friction tools",
      winnerNote: "PP is best for high cycle speeds (60+ straps/min)",
    },
    {
      parameter: "UV & Outdoor Weather Resistance",
      ppValue: "Fair (degrades with prolonged direct sun)",
      petValue: "Excellent (unaffected by rain, heat, and UV)",
      winnerNote: "PET is ideal for outdoor lumber and export container yards",
    },
    {
      parameter: "Joint Efficiency Method",
      ppValue: "Heat-blade melting or ultrasonic weld",
      petValue: "Friction-vibration weld or serrated metal seal",
      winnerNote: "Friction weld on PET yields joint efficiency >80%",
    },
    {
      parameter: "Cost per Meter",
      ppValue: "Lowest economical cost",
      petValue: "Cost-effective compared to steel (40-50% savings)",
      winnerNote: "PP is most cost-efficient for light-to-medium cartons",
    },
    {
      parameter: "Typical Industrial Applications",
      ppValue: "Corrugated boxes, newspapers, textiles, light pallets",
      petValue: "Pulp bales, timber packs, ceramics, brick pallets, metal coils",
      winnerNote: "Choose PP for carton bundling, PET for heavy unitizing",
    },
  ],
};

