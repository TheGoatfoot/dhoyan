export interface ProductSpecification {
  label: string;
  value: string;
}

export interface ProductCategory {
  id: string;
  slug: string;
  name: string;
  badge: string;
  tagline: string;
  description: string;
  icon: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  brand: string;
  categorySlug: string;
  categoryName: string;
  machineType: 'Full Automatic' | 'Semi Automatic' | 'Manual / Hand Tools' | 'Industrial Machine' | 'Accessory';
  tagline: string;
  summary: string;
  description: string[];
  features: string[];
  specifications: ProductSpecification[];
  packagingDetails?: {
    coilsPerPallet?: string;
    coreDiameter?: string;
    palletWeight?: string;
  };
  imageType: 'coil-pp' | 'coil-pet' | 'machine-auto' | 'machine-semi' | 'tool-battery' | 'tool-pneumatic' | 'tool-manual' | 'dispenser' | 'seal';
  isFeatured?: boolean;
  relatedSlugs?: string[];
  inquiryPreset?: string;
}

