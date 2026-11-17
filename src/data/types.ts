export interface NavLink {
  label: string;
  href: string;
  hasMegaMenu?: boolean;
}

export interface ServiceCategory {
  id: string;
  label: string;
  icon: string;
  href: string;
}

export interface StarDestination {
  id: string;
  name: string;
  image: string;
}

export interface Trip {
  id: string;
  title: string;
  location: string;
  image: string;
  imagePosition?: string;
  duration: string;
  rating: number;
  reviews: number;
  tags: string[];
  priceFrom: string;
  price: string;
  priceNote: string;
}

export interface Pillar {
  number: number;
  title: string;
  description: string;
}

export interface MonthDestination {
  id: string;
  title: string;
  badge: string;
  subtitle: string;
  description?: string;
  image: string;
}

export interface Partner {
  id: string;
  name: string;
  logo: string;
}

export interface Cruise {
  id: string;
  title: string;
  departures: string;
  priceFrom: string;
  image: string;
}

export interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

export interface MegaMenuCollection {
  id: string;
  title: string;
  description: string;
}

export interface MegaMenuDestination {
  id: string;
  name: string;
  season: string;
  caption?: string;
  image?: string;
}
