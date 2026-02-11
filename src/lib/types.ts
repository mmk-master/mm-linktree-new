export enum PropertyCategory {
  BEACH = 'Beach',
  ADVENTURE = 'Adventure',
  CITY = 'City',
  HANOI = 'Hanoi',
  BANGKOK = 'Bangkok',
  MANILA = 'Manila'
}

export interface ThemeConfig {
  primary: string;
  gradientFrom: string;
  gradientTo: string;
}

export interface Property {
  id: string;
  name: string;
  country: string;
  category: PropertyCategory;
  handle: string;
  slug: string;
}
