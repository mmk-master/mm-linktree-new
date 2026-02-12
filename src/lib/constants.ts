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
  { id: 'koh-rong', name: 'Koh Rong', country: 'Cambodia', category: PropertyCategory.BEACH, handle: 'kohrong', slug: 'kohrongmother', whatsappUrl: 'https://chat.whatsapp.com/JeLfnmqOC5vEkU1JzOxerU' },
  { id: 'koh-sdach', name: 'Koh Sdach', country: 'Cambodia', category: PropertyCategory.BEACH, handle: 'kohsdach', slug: 'kohsdachmother', whatsappUrl: 'https://chat.whatsapp.com/KcCxhxFGWISBS8qL6ZQ3Gw' },
  { id: 'gili-t', name: 'Gili Trawangan', country: 'Indonesia', category: PropertyCategory.BEACH, handle: 'gilitrawangan', slug: 'gilitrawanganmother' },
  { id: 'kuta-lombok', name: 'Kuta Lombok', country: 'Indonesia', category: PropertyCategory.BEACH, handle: 'kutalombok', slug: 'kutalombokmother', whatsappUrl: 'https://chat.whatsapp.com/FuOjWvIRMwBFFyoB0mKYDk' },
  { id: 'uluwatu', name: 'Uluwatu', country: 'Indonesia', category: PropertyCategory.BEACH, handle: 'uluwatu', slug: 'uluwatumother', whatsappUrl: 'https://chat.whatsapp.com/Ke4ZrqDQGnFEXMNNlkuJsT' },
  { id: 'nusa-lembongan', name: 'Nusa Lembongan', country: 'Indonesia', category: PropertyCategory.BEACH, handle: 'nusalembongan', slug: 'nusalembonganmother' },
  { id: 'nacpan-beach', name: 'Nacpan Beach', country: 'Philippines', category: PropertyCategory.BEACH, handle: 'nacpanbeach', slug: 'nacpanbeachmother', whatsappUrl: 'https://chat.whatsapp.com/LcOhfBqA1VF1HxB6ldGHD1' },
  { id: 'siargao', name: 'Siargao', country: 'Philippines', category: PropertyCategory.BEACH, handle: 'siargao', slug: 'siargaomother', whatsappUrl: 'https://chat.whatsapp.com/BBLy7mC93WcBXD1pP6MYZU?mode=gi_t' },
  { id: 'panglao', name: 'Panglao', country: 'Philippines', category: PropertyCategory.BEACH, handle: 'panglao', slug: 'panglaomother', whatsappUrl: 'https://chat.whatsapp.com/BajoBLC3zsb0c7cfJj68Fl' },
  { id: 'phuket', name: 'Phuket', country: 'Thailand', category: PropertyCategory.BEACH, handle: 'phuket', slug: 'phuketmother', whatsappUrl: 'https://chat.whatsapp.com/KzqVcfLaDqF2NOoRcK4Rg2' },
  { id: 'chiang-mai', name: 'Chiang Mai', country: 'Thailand', category: PropertyCategory.ADVENTURE, handle: 'chiangmai', slug: 'chiangmaimother', whatsappUrl: 'https://chat.whatsapp.com/IeqDN7Ayk5XCunHVNydDmm?mode=ac_t' },
  { id: 'pai', name: 'Pai', country: 'Thailand', category: PropertyCategory.ADVENTURE, handle: 'pai', slug: 'paimother', whatsappUrl: 'https://chat.whatsapp.com/Fgt3kYmBGvkEAZYvE6FOAN' },
  { id: 'hoi-an', name: 'Hoi An', country: 'Vietnam', category: PropertyCategory.ADVENTURE, handle: 'hoian', slug: 'hoianmother', whatsappUrl: 'https://chat.whatsapp.com/LR00FjfBvZw9PWpA8v2N5L?mode=ac_t' },
  { id: 'luang-prabang', name: 'Luang Prabang', country: 'Laos', category: PropertyCategory.ADVENTURE, handle: 'luangprabang', slug: 'luangprabangmother', whatsappUrl: 'https://chat.whatsapp.com/J5cf5xgxZ3gIjucZ6nqCGE?mode=ac_t' },
  { id: 'vang-vieng', name: 'Vang Vieng', country: 'Laos', category: PropertyCategory.ADVENTURE, handle: 'vangvieng', slug: 'vangviengmother', whatsappUrl: 'https://chat.whatsapp.com/DZFiLDqP3zuJIxxnnhnF7l?mode=ac_t' },
  { id: 'siem-reap', name: 'Siem Reap', country: 'Cambodia', category: PropertyCategory.ADVENTURE, handle: 'siemreap', slug: 'siemreapmother', whatsappUrl: 'https://chat.whatsapp.com/BYBQOX249Ok3kCmtQEbLo4' },
  { id: 'siquijor', name: 'Siquijor', country: 'Philippines', category: PropertyCategory.ADVENTURE, handle: 'siquijor', slug: 'siquijormother' },
  { id: 'dumaguete', name: 'Dumaguete', country: 'Philippines', category: PropertyCategory.ADVENTURE, handle: 'dumaguete', slug: 'dumaguetemother' },
  { id: 'phnom-penh', name: 'Phnom Penh', country: 'Cambodia', category: PropertyCategory.CITY, handle: 'phnompenh', slug: 'phnompenhmother', whatsappUrl: 'https://chat.whatsapp.com/ISFzdY6OEfPEnfhG6N8Jsa' },
  { id: 'hanoi', name: 'Hanoi', country: 'Vietnam', category: PropertyCategory.HANOI, handle: 'hanoi', slug: 'hanoimother', whatsappUrl: 'https://chat.whatsapp.com/DpI7WUmVDizAfacDxXwzmw?mode=ac_t' },
  { id: 'bangkok', name: 'Bangkok', country: 'Thailand', category: PropertyCategory.BANGKOK, handle: 'bangkok', slug: 'bangkokmother', whatsappUrl: 'https://chat.whatsapp.com/Ep53YVu6knrDcdamdQuloD' },
  { id: 'manila', name: 'Manila', country: 'Philippines', category: PropertyCategory.MANILA, handle: 'manila', slug: 'manilamother', whatsappUrl: 'https://chat.whatsapp.com/Jk0b6DoNRhKFceolBZLj3h?mode=ac_t' }
];

export const CATEGORY_EMOJIS: Record<PropertyCategory, string> = {
  [PropertyCategory.BEACH]: '🏖️',
  [PropertyCategory.ADVENTURE]: '🌿',
  [PropertyCategory.CITY]: '🏙️',
  [PropertyCategory.HANOI]: '🇻🇳',
  [PropertyCategory.BANGKOK]: '🇹🇭',
  [PropertyCategory.MANILA]: '🇵🇭',
};
