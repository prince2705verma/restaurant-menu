export interface MenuItem {
  name: string;
  half?: number;
  full: number;
  isVeg?: boolean;
  popular?: boolean;
}

export interface MenuSection {
  name: string;
  icon: string;
  items: MenuItem[];
}

export interface MenuData {
  restaurant: string;
  tagline: string;
  sections: MenuSection[];
}

export const MENU_DATA: MenuData = {
  restaurant: 'The Royal Kitchen',
  tagline: 'Authentic Flavours, Royal Experience',
  sections: [
    {
      name: 'STARTERS',
      icon: '🥗',
      items: [
        { name: 'Paneer Tikka',          half: 180, full: 320, isVeg: true,  popular: true  },
        { name: 'Veg Spring Rolls',       half: 120, full: 220, isVeg: true                  },
        { name: 'Chicken Malai Tikka',    half: 210, full: 380, isVeg: false, popular: true  },
        { name: 'Fish Finger',            half: 240, full: 420, isVeg: false                 },
        { name: 'Seekh Kebab',            half: 200, full: 360, isVeg: false, popular: true  },
        { name: 'Hara Bhara Kebab',       half: 150, full: 270, isVeg: true                  },
        { name: 'Chicken Lollipop',       half: 220, full: 400, isVeg: false, popular: true  },
        { name: 'Mushroom Tikka',         half: 160, full: 290, isVeg: true                  },
      ],
    },
    {
      name: 'SOUPS',
      icon: '🍲',
      items: [
        { name: 'Tomato Cream Soup',      full: 120, isVeg: true                             },
        { name: 'Sweet Corn Soup',        full: 130, isVeg: true,  popular: true             },
        { name: 'Hot & Sour Soup',        full: 130, isVeg: true                             },
        { name: 'Chicken Clear Soup',     full: 150, isVeg: false                            },
        { name: 'Chicken Sweet Corn',     full: 160, isVeg: false, popular: true             },
      ],
    },
    {
      name: 'MAIN COURSE',
      icon: '🍛',
      items: [
        { name: 'Butter Paneer Masala',   half: 220, full: 380, isVeg: true,  popular: true  },
        { name: 'Dal Makhani',            half: 180, full: 320, isVeg: true,  popular: true  },
        { name: 'Palak Paneer',           half: 200, full: 350, isVeg: true                  },
        { name: 'Chole Masala',           half: 170, full: 300, isVeg: true                  },
        { name: 'Chicken Butter Masala',  half: 250, full: 440, isVeg: false, popular: true  },
        { name: 'Mutton Rogan Josh',      half: 300, full: 520, isVeg: false, popular: true  },
        { name: 'Fish Curry',             half: 270, full: 460, isVeg: false                 },
        { name: 'Chicken Biryani',        half: 220, full: 400, isVeg: false, popular: true  },
        { name: 'Veg Biryani',            half: 180, full: 320, isVeg: true                  },
        { name: 'Egg Curry',              half: 180, full: 320, isVeg: false                 },
      ],
    },
    {
      name: 'BREADS',
      icon: '🫓',
      items: [
        { name: 'Tandoori Roti',          full:  40, isVeg: true                             },
        { name: 'Butter Naan',            full:  60, isVeg: true,  popular: true             },
        { name: 'Garlic Naan',            full:  80, isVeg: true,  popular: true             },
        { name: 'Peshwari Naan',          full:  90, isVeg: true                             },
        { name: 'Laccha Paratha',         full:  70, isVeg: true                             },
        { name: 'Kulcha',                 full:  75, isVeg: true                             },
      ],
    },
    {
      name: 'RICE & BIRYANI',
      icon: '🍚',
      items: [
        { name: 'Steamed Rice',           half:  80, full: 140, isVeg: true                  },
        { name: 'Jeera Rice',             half: 100, full: 180, isVeg: true,  popular: true  },
        { name: 'Veg Pulao',              half: 130, full: 230, isVeg: true                  },
        { name: 'Chicken Dum Biryani',    half: 230, full: 420, isVeg: false, popular: true  },
        { name: 'Mutton Dum Biryani',     half: 280, full: 500, isVeg: false, popular: true  },
      ],
    },
    {
      name: 'DRINKS',
      icon: '🥤',
      items: [
        { name: 'Mango Lassi',            full: 100, isVeg: true,  popular: true             },
        { name: 'Sweet Lassi',            full:  80, isVeg: true                             },
        { name: 'Masala Chaas',           full:  70, isVeg: true                             },
        { name: 'Fresh Lime Soda',        full:  90, isVeg: true                             },
        { name: 'Cold Coffee',            full: 120, isVeg: true,  popular: true             },
        { name: 'Rose Sharbat',           full:  80, isVeg: true                             },
        { name: 'Soft Drinks',            full:  60, isVeg: true                             },
        { name: 'Mineral Water',          full:  30, isVeg: true                             },
      ],
    },
    {
      name: 'DESSERTS',
      icon: '🍮',
      items: [
        { name: 'Gulab Jamun',            half: 100, full: 180, isVeg: true,  popular: true  },
        { name: 'Rasgulla',               half:  90, full: 160, isVeg: true                  },
        { name: 'Gajar Halwa',            half: 120, full: 210, isVeg: true                  },
        { name: 'Kulfi Falooda',          full: 180, isVeg: true,  popular: true             },
        { name: 'Ice Cream (2 Scoops)',   full: 120, isVeg: true                             },
        { name: 'Phirni',                 half: 100, full: 180, isVeg: true                  },
      ],
    },
  ],
};
