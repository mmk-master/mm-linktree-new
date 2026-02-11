import { Property, PropertyCategory, ThemeConfig } from './types';

export const THEMES: Record<PropertyCategory, ThemeConfig> = {
  [PropertyCategory.BEACH]: { primary: '#00d2d3', gradientFrom: '#00d2d3', gradientTo: '#1dd1a1' },
  [PropertyCategory.ADVENTURE]: { primary: '#10ac84', gradientFrom: '#10ac84', gradientTo: '#badb75' },
  [PropertyCategory.CITY]: { primary: '#ff9f43', gradientFrom: '#ff9f43', gradientTo: '#ffc107' },
  [PropertyCategory.HANOI]: { primary: '#ee5253', gradientFrom: '#ee5253', gradientTo: '#ff726d' },
  [PropertyCategory.BANGKOK]: { primary: '#5f27cd', gradientFrom: '#5f27cd', gradientTo: '#9d7cdb' },
  [PropertyCategory.MANILA]: { primary: '#cd9eff', gradientFrom: '#cd9eff', gradientTo: '#f3e5f5' }
};

export const PROPERTIES: Property[] = [
  { id: 'koh-rong', name: 'Koh Rong', country: 'Cambodia', category: PropertyCategory.BEACH, handle: 'kohrong' },
  { id: 'koh-sdach', name: 'Koh Sdach', country: 'Cambodia', category: PropertyCategory.BEACH, handle: 'kohsdach' },
  { id: 'gili-t', name: 'Gili Trawangan', country: 'Indonesia', category: PropertyCategory.BEACH, handle: 'gilitrawangan' },
  { id: 'kuta-lombok', name: 'Kuta Lombok', country: 'Indonesia', category: PropertyCategory.BEACH, handle: 'kutalombok' },
  { id: 'uluwatu', name: 'Uluwatu', country: 'Indonesia', category: PropertyCategory.BEACH, handle: 'uluwatu' },
  { id: 'nusa-lembongan', name: 'Nusa Lembongan', country: 'Indonesia', category: PropertyCategory.BEACH, handle: 'nusalembongan' },
  { id: 'nacpan-beach', name: 'Nacpan Beach', country: 'Philippines', category: PropertyCategory.BEACH, handle: 'nacpanbeach' },
  { id: 'siargao', name: 'Siargao', country: 'Philippines', category: PropertyCategory.BEACH, handle: 'siargao' },
  { id: 'panglao', name: 'Panglao', country: 'Philippines', category: PropertyCategory.BEACH, handle: 'panglao' },
  { id: 'phuket', name: 'Phuket', country: 'Thailand', category: PropertyCategory.BEACH, handle: 'phuket' },
  { id: 'chiang-mai', name: 'Chiang Mai', country: 'Thailand', category: PropertyCategory.ADVENTURE, handle: 'chiangmai' },
  { id: 'pai', name: 'Pai', country: 'Thailand', category: PropertyCategory.ADVENTURE, handle: 'pai' },
  { id: 'hoi-an', name: 'Hoi An', country: 'Vietnam', category: PropertyCategory.ADVENTURE, handle: 'hoian' },
  { id: 'luang-prabang', name: 'Luang Prabang', country: 'Laos', category: PropertyCategory.ADVENTURE, handle: 'luangprabang' },
  { id: 'vang-vieng', name: 'Vang Vieng', country: 'Laos', category: PropertyCategory.ADVENTURE, handle: 'vangvieng' },
  { id: 'siem-reap', name: 'Siem Reap', country: 'Cambodia', category: PropertyCategory.ADVENTURE, handle: 'siemreap' },
  { id: 'siquijor', name: 'Siquijor', country: 'Philippines', category: PropertyCategory.ADVENTURE, handle: 'siquijor' },
  { id: 'dumaguete', name: 'Dumaguete', country: 'Philippines', category: PropertyCategory.ADVENTURE, handle: 'dumaguete' },
  { id: 'phnom-penh', name: 'Phnom Penh', country: 'Cambodia', category: PropertyCategory.CITY, handle: 'phnompenh' },
  { id: 'hanoi', name: 'Hanoi', country: 'Vietnam', category: PropertyCategory.HANOI, handle: 'hanoi' },
  { id: 'bangkok', name: 'Bangkok', country: 'Thailand', category: PropertyCategory.BANGKOK, handle: 'bangkok' },
  { id: 'manila', name: 'Manila', country: 'Philippines', category: PropertyCategory.MANILA, handle: 'manila' }
];

export const CATEGORY_EMOJIS: Record<PropertyCategory, string> = {
  [PropertyCategory.BEACH]: '🏖️',
  [PropertyCategory.ADVENTURE]: '🌿',
  [PropertyCategory.CITY]: '🏙️',
  [PropertyCategory.HANOI]: '🇻🇳',
  [PropertyCategory.BANGKOK]: '🇹🇭',
  [PropertyCategory.MANILA]: '🇵🇭',
};
