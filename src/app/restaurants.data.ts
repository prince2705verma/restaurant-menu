import { MenuSection } from './menu.data';

export interface ThemeConfig {
  gold: string;
  goldLight: string;
  dark: string;
  darkCard: string;
  surface: string;
  border: string;
  textMain: string;
  textMuted: string;
  festivalClass?: string;
}

export interface Restaurant {
  id: string;
  name: string;
  tagline: string;
  logo: string;
  discount?: number;
  theme: ThemeConfig;
  credentials: { username: string; password: string };
  sections: MenuSection[];
}

export const THEME_PRESETS: Record<string, ThemeConfig> = {

  // ── Classic ──────────────────────────────────────────
  'Royal Gold': {
    gold: '#c9962b', goldLight: '#f0c96a',
    dark: '#1a1209', darkCard: '#231a08', surface: '#2c2010', border: '#3d2e10',
    textMain: '#f5e8c8', textMuted: '#a08850',
  },
  'Crimson Red': {
    gold: '#c0392b', goldLight: '#e74c3c',
    dark: '#120808', darkCard: '#1e0d0d', surface: '#2a1010', border: '#3d1515',
    textMain: '#fde8e8', textMuted: '#a06060',
  },
  'Ocean Blue': {
    gold: '#2980b9', goldLight: '#5dade2',
    dark: '#080f18', darkCard: '#0d1a27', surface: '#102233', border: '#153047',
    textMain: '#e0f0ff', textMuted: '#5a88aa',
  },
  'Forest Green': {
    gold: '#27ae60', goldLight: '#58d68d',
    dark: '#081209', darkCard: '#0d1e0f', surface: '#102814', border: '#15391a',
    textMain: '#e0f5e8', textMuted: '#5a9a6a',
  },
  'Midnight Purple': {
    gold: '#8e44ad', goldLight: '#bb8fce',
    dark: '#0d0812', darkCard: '#160f1e', surface: '#1e1428', border: '#2c1c3d',
    textMain: '#f0e8ff', textMuted: '#8060a0',
  },

  // ── Classy ───────────────────────────────────────────
  'Velvet Noir': {
    gold: '#c9a0b4', goldLight: '#e8c8d8',
    dark: '#0d080c', darkCard: '#1a1020', surface: '#251530', border: '#352040',
    textMain: '#f5eef2', textMuted: '#9a7888',
  },
  'Onyx': {
    gold: '#d4af37', goldLight: '#ffd700',
    dark: '#060606', darkCard: '#111111', surface: '#1a1a1a', border: '#282828',
    textMain: '#f5f0e0', textMuted: '#888060',
  },
  'Jade': {
    gold: '#00b894', goldLight: '#55efc4',
    dark: '#020e0a', darkCard: '#051a14', surface: '#082820', border: '#0d3828',
    textMain: '#e0fff5', textMuted: '#3a8870',
  },
  'Bronze': {
    gold: '#cd7f32', goldLight: '#e8a060',
    dark: '#080604', darkCard: '#121008', surface: '#1e180c', border: '#2c2410',
    textMain: '#f5ece0', textMuted: '#8a6840',
  },
  'Arctic': {
    gold: '#5599cc', goldLight: '#88ccff',
    dark: '#040810', darkCard: '#080f1e', surface: '#0c152c', border: '#121c3a',
    textMain: '#e8f4ff', textMuted: '#5070a0',
  },

  // ── Festival ─────────────────────────────────────────
  'Diwali': {
    gold: '#ff9500', goldLight: '#ffcc00',
    dark: '#0a0500', darkCard: '#150900', surface: '#201200', border: '#301c00',
    textMain: '#fff8e8', textMuted: '#cc8800',
    festivalClass: 'theme-diwali',
  },
  'Holi': {
    gold: '#ff0099', goldLight: '#ff66cc',
    dark: '#08000f', darkCard: '#10001e', surface: '#18002e', border: '#250040',
    textMain: '#fff0ff', textMuted: '#cc3399',
    festivalClass: 'theme-holi',
  },
  'Navratri': {
    gold: '#ff6a00', goldLight: '#ffa040',
    dark: '#120400', darkCard: '#1f0800', surface: '#2e0e00', border: '#401800',
    textMain: '#fff5e8', textMuted: '#cc5500',
    festivalClass: 'theme-navratri',
  },
  'Independence Day': {
    gold: '#ff9933', goldLight: '#ffbb66',
    dark: '#030510', darkCard: '#07091e', surface: '#0c0f2e', border: '#131642',
    textMain: '#f0f4ff', textMuted: '#5066aa',
    festivalClass: 'theme-independence',
  },
  'Eid': {
    gold: '#00b865', goldLight: '#00e880',
    dark: '#010d06', darkCard: '#041810', surface: '#072518', border: '#0c3525',
    textMain: '#e0fff0', textMuted: '#309060',
    festivalClass: 'theme-eid',
  },
  'Christmas': {
    gold: '#cc0000', goldLight: '#ff4040',
    dark: '#010a03', darkCard: '#051508', surface: '#0a2010', border: '#102e18',
    textMain: '#f0fff2', textMuted: '#307040',
    festivalClass: 'theme-christmas',
  },
};

export const RESTAURANTS_DATA: Restaurant[] = [
  {
    id: 'royal-kitchen',
    name: 'The Royal Kitchen',
    tagline: 'Authentic Flavours, Royal Experience',
    logo: '🍽️',
    theme: THEME_PRESETS['Royal Gold'],
    credentials: { username: 'admin', password: 'royal123' },
    sections: [
      {
        name: 'STARTERS', icon: '🥗',
        items: [
          { name: 'Paneer Tikka',        half: 180, full: 320, isVeg: true,  popular: true  },
          { name: 'Veg Spring Rolls',    half: 120, full: 220, isVeg: true                  },
          { name: 'Chicken Malai Tikka', half: 210, full: 380, isVeg: false, popular: true  },
          { name: 'Fish Finger',         half: 240, full: 420, isVeg: false                 },
          { name: 'Seekh Kebab',         half: 200, full: 360, isVeg: false, popular: true  },
          { name: 'Hara Bhara Kebab',    half: 150, full: 270, isVeg: true                  },
          { name: 'Chicken Lollipop',    half: 220, full: 400, isVeg: false, popular: true  },
          { name: 'Mushroom Tikka',      half: 160, full: 290, isVeg: true                  },
        ],
      },
      {
        name: 'SOUPS', icon: '🍲',
        items: [
          { name: 'Tomato Cream Soup',   full: 120, isVeg: true                             },
          { name: 'Sweet Corn Soup',     full: 130, isVeg: true,  popular: true             },
          { name: 'Hot & Sour Soup',     full: 130, isVeg: true                             },
          { name: 'Chicken Clear Soup',  full: 150, isVeg: false                            },
          { name: 'Chicken Sweet Corn',  full: 160, isVeg: false, popular: true             },
        ],
      },
      {
        name: 'MAIN COURSE', icon: '🍛',
        items: [
          { name: 'Butter Paneer Masala',  half: 220, full: 380, isVeg: true,  popular: true  },
          { name: 'Dal Makhani',           half: 180, full: 320, isVeg: true,  popular: true  },
          { name: 'Palak Paneer',          half: 200, full: 350, isVeg: true                  },
          { name: 'Chole Masala',          half: 170, full: 300, isVeg: true                  },
          { name: 'Chicken Butter Masala', half: 250, full: 440, isVeg: false, popular: true  },
          { name: 'Mutton Rogan Josh',     half: 300, full: 520, isVeg: false, popular: true  },
          { name: 'Fish Curry',            half: 270, full: 460, isVeg: false                 },
          { name: 'Chicken Biryani',       half: 220, full: 400, isVeg: false, popular: true  },
          { name: 'Veg Biryani',           half: 180, full: 320, isVeg: true                  },
          { name: 'Egg Curry',             half: 180, full: 320, isVeg: false                 },
        ],
      },
      {
        name: 'BREADS', icon: '🫓',
        items: [
          { name: 'Tandoori Roti',  full:  40, isVeg: true                  },
          { name: 'Butter Naan',    full:  60, isVeg: true,  popular: true  },
          { name: 'Garlic Naan',    full:  80, isVeg: true,  popular: true  },
          { name: 'Peshwari Naan',  full:  90, isVeg: true                  },
          { name: 'Laccha Paratha', full:  70, isVeg: true                  },
          { name: 'Kulcha',         full:  75, isVeg: true                  },
        ],
      },
      {
        name: 'RICE & BIRYANI', icon: '🍚',
        items: [
          { name: 'Steamed Rice',        half:  80, full: 140, isVeg: true                  },
          { name: 'Jeera Rice',          half: 100, full: 180, isVeg: true,  popular: true  },
          { name: 'Veg Pulao',           half: 130, full: 230, isVeg: true                  },
          { name: 'Chicken Dum Biryani', half: 230, full: 420, isVeg: false, popular: true  },
          { name: 'Mutton Dum Biryani',  half: 280, full: 500, isVeg: false, popular: true  },
        ],
      },
      {
        name: 'DRINKS', icon: '🥤',
        items: [
          { name: 'Mango Lassi',     full: 100, isVeg: true,  popular: true },
          { name: 'Sweet Lassi',     full:  80, isVeg: true                 },
          { name: 'Masala Chaas',    full:  70, isVeg: true                 },
          { name: 'Fresh Lime Soda', full:  90, isVeg: true                 },
          { name: 'Cold Coffee',     full: 120, isVeg: true,  popular: true },
          { name: 'Soft Drinks',     full:  60, isVeg: true                 },
          { name: 'Mineral Water',   full:  30, isVeg: true                 },
        ],
      },
      {
        name: 'DESSERTS', icon: '🍮',
        items: [
          { name: 'Gulab Jamun',        half: 100, full: 180, isVeg: true,  popular: true },
          { name: 'Rasgulla',           half:  90, full: 160, isVeg: true                 },
          { name: 'Gajar Halwa',        half: 120, full: 210, isVeg: true                 },
          { name: 'Kulfi Falooda',      full: 180, isVeg: true,  popular: true            },
          { name: 'Ice Cream (2 Scoops)', full: 120, isVeg: true                          },
          { name: 'Phirni',             half: 100, full: 180, isVeg: true                 },
        ],
      },
    ],
  },

  {
    id: 'pizza-palace',
    name: 'Pizza Palace',
    tagline: 'Wood-Fired Perfection, Every Slice',
    logo: '🍕',
    theme: THEME_PRESETS['Crimson Red'],
    credentials: { username: 'owner', password: 'pizza123' },
    sections: [
      {
        name: 'STARTERS', icon: '🥗',
        items: [
          { name: 'Garlic Bread',         full:  99, isVeg: true,  popular: true },
          { name: 'Bruschetta',           full: 149, isVeg: true                 },
          { name: 'Chicken Wings',        full: 249, isVeg: false, popular: true },
          { name: 'Mozzarella Sticks',    full: 189, isVeg: true                 },
          { name: 'Stuffed Mushrooms',    full: 169, isVeg: true                 },
        ],
      },
      {
        name: 'VEG PIZZAS', icon: '🍕',
        items: [
          { name: 'Margherita',           half: 199, full: 349, isVeg: true,  popular: true },
          { name: 'Farmhouse',            half: 219, full: 379, isVeg: true,  popular: true },
          { name: 'Paneer Tikka Pizza',   half: 249, full: 429, isVeg: true,  popular: true },
          { name: 'Mexican Green Wave',   half: 229, full: 399, isVeg: true                 },
          { name: 'Four Cheese',          half: 259, full: 449, isVeg: true                 },
        ],
      },
      {
        name: 'NON-VEG PIZZAS', icon: '🍖',
        items: [
          { name: 'Chicken Dominator',    half: 269, full: 469, isVeg: false, popular: true },
          { name: 'Pepperoni',            half: 259, full: 449, isVeg: false, popular: true },
          { name: 'Chicken BBQ',          half: 249, full: 429, isVeg: false                },
          { name: 'Meat Lovers',          half: 289, full: 499, isVeg: false, popular: true },
        ],
      },
      {
        name: 'PASTA', icon: '🍝',
        items: [
          { name: 'Penne Arrabbiata',     full: 199, isVeg: true                 },
          { name: 'Pasta in White Sauce', full: 219, isVeg: true,  popular: true },
          { name: 'Chicken Alfredo',      full: 279, isVeg: false, popular: true },
          { name: 'Mac & Cheese',         full: 229, isVeg: true                 },
        ],
      },
      {
        name: 'DRINKS', icon: '🥤',
        items: [
          { name: 'Lemonade',        full:  79, isVeg: true,  popular: true },
          { name: 'Iced Tea',        full:  89, isVeg: true                 },
          { name: 'Cold Coffee',     full: 119, isVeg: true,  popular: true },
          { name: 'Soft Drinks',     full:  59, isVeg: true                 },
          { name: 'Mineral Water',   full:  30, isVeg: true                 },
        ],
      },
    ],
  },

  {
    id: 'green-bowl',
    name: 'Green Bowl',
    tagline: 'Fresh, Healthy & Delicious',
    logo: '🥗',
    theme: THEME_PRESETS['Forest Green'],
    credentials: { username: 'manager', password: 'green123' },
    sections: [
      {
        name: 'SALADS', icon: '🥗',
        items: [
          { name: 'Caesar Salad',        full: 229, isVeg: true,  popular: true },
          { name: 'Greek Salad',         full: 199, isVeg: true                 },
          { name: 'Quinoa Bowl',         full: 279, isVeg: true,  popular: true },
          { name: 'Avocado Salad',       full: 299, isVeg: true                 },
          { name: 'Garden Fresh Salad',  full: 169, isVeg: true                 },
        ],
      },
      {
        name: 'BOWLS', icon: '🥙',
        items: [
          { name: 'Buddha Bowl',         full: 299, isVeg: true,  popular: true },
          { name: 'Grain Bowl',          full: 269, isVeg: true                 },
          { name: 'Protein Bowl',        full: 329, isVeg: false, popular: true },
          { name: 'Smoothie Bowl',       full: 249, isVeg: true,  popular: true },
          { name: 'Acai Bowl',           full: 279, isVeg: true                 },
        ],
      },
      {
        name: 'WRAPS', icon: '🌯',
        items: [
          { name: 'Hummus Veggie Wrap',  full: 199, isVeg: true,  popular: true },
          { name: 'Falafel Wrap',        full: 179, isVeg: true                 },
          { name: 'Grilled Chicken Wrap',full: 229, isVeg: false, popular: true },
          { name: 'Paneer Tikka Wrap',   full: 199, isVeg: true                 },
        ],
      },
      {
        name: 'SOUPS', icon: '🍲',
        items: [
          { name: 'Tomato Basil Soup',   full: 149, isVeg: true,  popular: true },
          { name: 'Minestrone',          full: 159, isVeg: true                 },
          { name: 'Lentil Soup',         full: 139, isVeg: true                 },
          { name: 'Broccoli Cheddar',    full: 169, isVeg: true                 },
        ],
      },
      {
        name: 'SMOOTHIES', icon: '🥤',
        items: [
          { name: 'Green Detox',         full: 179, isVeg: true,  popular: true },
          { name: 'Mango Blast',         full: 169, isVeg: true,  popular: true },
          { name: 'Berry Mix',           full: 179, isVeg: true                 },
          { name: 'Banana Peanut Butter',full: 189, isVeg: true                 },
          { name: 'Coconut Cooler',      full: 159, isVeg: true                 },
        ],
      },
    ],
  },
];
