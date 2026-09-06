export interface CompanyAddress {
  street: string;
  district: string;
  city: string;
  province: string;
  postalCode: string;
  country: string;
}

export interface CompanyStat {
  value: string;
  label: string;
  description?: string;
}

export interface CompanyPillar {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface IndustryApplication {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface SiteConfig {
  name: string;
  legalName: string;
  tagline: string;
  description: string;
  url: string;
  foundedYear: number;
  phone: string;
  email: string;
  whatsappNumber: string; // E.164 format without + for wa.me links
  whatsappDisplay: string;
  address: CompanyAddress;
  businessHours: string;
  socials: {
    linkedin?: string;
    instagram?: string;
    facebook?: string;
    youtube?: string;
  };
  stats: CompanyStat[];
  pillars: CompanyPillar[];
  industries: IndustryApplication[];
}

export interface NavLink {
  label: string;
  href: string;
  children?: {
    label: string;
    href: string;
    description?: string;
  }[];
}

