// Static data for the application - build time constants
export const STATIC_CONTENT = {
  meta: {
    title: "Broadway Kebab Restaurant - Authentic Anatolian Cuisine",
    description: "Experience authentic Anatolian flavours at Broadway Restaurant. Fresh mezze, grilled kebabs, and traditional desserts in a warm, welcoming atmosphere.",
    keywords: "Anatolian restaurant, authentic Anatolian food, kebabs, mezze, baklava, halal food",
    ogImage: "/images/restaurant-hero.webp"
  },
  menu: {
    meta: {
      title: "Menu - Broadway Kebab Restaurant",
      description: "Explore our authentic Anatolian menu featuring fresh mezze, grilled kebabs, and traditional desserts."
    },
    hero: {
      title: "Our Menu",
      subtitle: "Authentic Anatolian flavours crafted with passion"
    }
  },
  navbar: {
    brand: "Broadway",
    logo: "/logo.avif",
    links: [
      {
        name: "Home",
        href: "/"
      },
      {
        name: "Menu",
        href: "/menu/"
      },
      {
        name: "About",
        href: "/#about"
      },
      {
        name: "Contact",
        href: "/#contact"
      }
    ],
    callButton: {
      text: "Book a Table",
      phone: "+44 20 4537 3824",
      href: "/booking/"
    }
  },
  footer: {
    title: "Broadway Kebab Restaurant",
    description: "Authentic Anatolian cuisine in the heart of London",
    links: [
      {
        name: "Call Us",
        href: "tel:+442045373824"
      },
      {
        name: "Email Us",
        href: "mailto:info@broadwaykebab.co.uk"
      }
    ],
    copyright: "Broadway Kebab Restaurant. All rights reserved."
  },
  hero: {
    title: "Authentic Anatolian Flavours",
    subtitle: "Enjoy authentic Anatolian cuisine in a cosy atmosphere.",
    description: "Available for dine-in or takeaway.",
    ctaText: "Book a Table",
    ctaLink: "/booking/",
    backgroundImage: "/images/restaurant-hero.webp"
  },
  about: {
    title: "A Taste of Anatolia",
    subtitle: "Bringing authentic flavours from Anatolia to London",
    description: "For over 15 years, Broadway has been serving traditional Anatolian cuisine in London, made with the finest ingredients and time-honoured recipes passed down through generations.",
    features: [
      {
        title: "Fresh Daily",
        description: "All dishes prepared fresh daily with premium ingredients",
        icon: "utensils"
      },
      {
        title: "Halal Certified",
        description: "All our meat is halal certified for your peace of mind",
        icon: "check"
      },
      {
        title: "Family Recipes",
        description: "Traditional recipes passed down through generations",
        icon: "star"
      }
    ]
  },
  contact: {
    title: "Visit Us Today",
    address: {
      street: "Longmead Road Entrance, 29 Tooting High St Broadway Market Tooting",
      city: "London",
      state: "ENG",
      zip: "SW17 0RJ",
      country: "UK"
    },
    phone: "+44 20 4537 3824",
    whatsapp: "+447494070750",
    whatsappMessage: "Hello! I would like to make a booking at Broadway Kebab Restaurant. Could you please help me with availability and table reservation? Thank you! 🍽️",
    email: "info@broadwaykebab.co.uk",
    hours: {
      monday: "closed",
      tuesday: "11:30 AM - 10:30 PM", 
      wednesday: "11:30 AM - 10:30 PM",
      thursday: "11:30 AM - 11:00 PM",
      friday: "11:30 AM - 11:30 PM",
      saturday: "11:30 AM - 11:30 PM",
      sunday: "11:30 AM - 9:30 PM"
    },
    mapUrl: "https://maps.app.goo.gl/n4njdF3ToSxJZX4n9"
  }
};

export const STATIC_TESTIMONIALS = [
  {
    id: 1,
    name: "Dawan Dlshad",
    rating: 5,
    text: "Absolutely fantastic! The food at Broadway BBQ in Tooting was amazing — full of flavour and cooked to perfection. I had the mixed kebab, and it was simply outstanding. Tender, juicy, and packed with taste. The service was friendly and efficient, adding to an already great experience. Highly recommend if you're in the area and craving some delicious BBQ! 💯",
    location: "Local Guide • 13 reviews • 36 photos",
    date: "a week ago",
    verified: true,
    badges: ["NEW"]
  },
  {
    id: 2,
    name: "Asif Zaman",
    rating: 4,
    text: "First time visiting Broadway BBQ and nice to visit at Turkish restaurant in Tooting. We went on a Wednesday when there was a 50% offer on mains. We got a mixed cold starters came with warm breads, lamb chops and a plate of lamb shawarma. Overall the food was good, the lamb was slightly dry and lacked some flavour, but the chops were good. The staff were friendly and attentive.",
    location: "Local Guide • 179 reviews • 811 photos",
    date: "2 months ago",
    verified: true
  },
  {
    id: 3,
    name: "Zahraa H. Ali",
    rating: 5,
    text: "The sandwiches were AMAZING!!!!!! This restaurant uses very fresh vege and chicken. The spices are also very rich and delicious. I recommend having the chicken doner. They also serve side dips.",
    location: "Local Guide • 82 reviews • 190 photos",
    date: "2 weeks ago",
    verified: true,
    badges: ["NEW"]
  },
  {
    id: 4,
    name: "F B",
    rating: 5,
    text: "If you're looking for an affordable place with authentic flavours and warm hospitality, this is the place for you! They have dishes either to share or large mains to have on your own. The BBQ was amazing and are very generous portions. Every dish came out hot and when it was ready. We had the pleasure of meeting the owner Zozy, who made sure all our needs were catered to.",
    location: "Local Guide • 80 reviews • 174 photos",
    date: "3 months ago",
    verified: true
  },
  {
    id: 5,
    name: "Samapth Sripathum",
    rating: 5,
    text: "I recently stopped by this restaurant while passing through Broadway Market. As soon as I checked the menu, a lovely lady named Zozy warmly welcomed me, which made a great first impression. The food was fresh, well-prepared, and tasted great. Plus, it was quite affordable for the quality and portion size. The restaurant itself has a lovely atmosphere with beautiful decorations and nice music.",
    location: "Local Guide • 33 reviews • 85 photos",
    date: "4 months ago",
    verified: true
  },
  {
    id: 6,
    name: "Szabolcs Török",
    rating: 5,
    text: "What a place! It was my first time on this area and decided to have dinner at Broadway BBQ based on reviews, but this place was far beyond expectations! Friendly and welcoming staff, great atmosphere, fantastic food and it was 50% off on all mains due to midweek discount! I will definitely become a regular here, such a shame I can't give them 6 stars.",
    location: "Local Guide • 6 reviews • 4 photos",
    date: "a week ago",
    verified: true,
    badges: ["NEW"]
  },
  {
    id: 7,
    name: "Vasena (Vasi)",
    rating: 5,
    text: "We came on a Sunday afternoon and ordered the kebab platter. Zozy the owner immediately made us feel welcome. The food was laid on quickly and we were treated like VIPs. Amazing service and the food was exceptional. Tastiest chips ever! Delicious freshly grilled meats, the wraps were soft and tasty, the bulgar wheat and dips all outstanding.",
    location: "3 reviews • 1 photo",
    date: "3 months ago",
    verified: true
  }
];

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  tags: string[];
  allergens: string[];
  image: string;
  featured?: boolean;
  subcategory?: { name: string; price: number }[];
}

export interface MenuCategory {
  id: string;
  name: string;
  description: string;
  items: MenuItem[];
}

export const STATIC_MENU: { categories: MenuCategory[] } = {
  categories: [
    {
      id: "cold-starters",
      name: "Cold Starters",
      description: "Fresh mezze and traditional cold appetizers",
      items: [
        {
          id: "hummus",
          name: "Humus",
          description: "Crushed chickpeas, tahini, garlic, lemon juice with bread",
          price: 4.90,
          tags: ["vegan", "vegetarian"],
          allergens: [],
          image: "/images/menu/UK220737_broadway%20bbq_Food_humus.webp"
        },
        {
          id: "baba-ghanoush",
          name: "Baba Ghanoush (Yogurtlu Patlican)",
          description: "Smoked aubergine mixed with natural yoghurt and garlic with bread",
          price: 4.90,
          tags: ["vegetarian"],
          allergens: ["dairy"],
          image: "/images/menu/UK220737_broadway%20bbq_Food_youghurt.webp"
        },
        {
          id: "cacik",
          name: "Cacik",
          description: "Chopped cucumber and a hint of garlic in a creamy yoghurt sauce with bread",
          price: 4.90,
          tags: ["vegetarian", "gluten-free"],
          allergens: ["dairy"],
          image: "/images/menu/UK220737_broadway%20bbq_Food_cacik.webp"
        },
        {
          id: "yaprak-sarma",
          name: "Yaprak Sarma",
          description: "Vine leaves filled with rice",
          price: 4.90,
          tags: ["vegan", "vegetarian"],
          allergens: [],
          image: "/images/menu/UK220737_broadway%20bbq_Food_vine_leaves.webp"
        },
        {
          id: "shakshuka",
          name: "Shakshuka",
          description: "Turkish aubergine in a rich tomato green pepper, garlic",
          price: 4.90,
          tags: ["vegetarian"],
          allergens: ["dairy"],
          image: "/images/menu/UK220737_broadway%20bbq_Food_shakshuka.webp"
        },
        {
          id: "olives-and-bread",
          name: "Olives and Bread",
          description: "Freshly baked flatbread served with marinated olives",
          price: 4.90,
          tags: ["vegetarian"],
          allergens: ["gluten"],
          image: "/images/menu/UK220737_broadway%20bbq_Food_olive.webp"
        },
        {
          id: "sharing-cold-starters",
          name: "Sharing Cold Starters",
          description: "Humus, cacik, baba ghanoush, yaprak sarma and bread sharing cold starter for 4 to 6 people",
          price: 19.00,
          tags: ["vegetarian"],
          allergens: [],
          image: "/images/menu/UK220737_broadway%20bbq_Food_sharing_cold_starter.webp"
        }
      ]
    },
    {
      id: "hot-starters",
      name: "Hot Starters",
      description: "Warm appetizers and traditional Anatolian bites",
      items: [
        {
          id: "sucuk",
          name: "Sucuk",
          description: "Spicy Turkish sausage cooked over charcoal",
          price: 6.50,
          tags: ["halal"],
          allergens: [],
          image: "/images/menu/UK220737_broadway%20bbq_Food_sujuk.webp"
        },
        {
          id: "halloumi",
          name: "Halloumi",
          description: "Traditional deep fried Cypriot cheese",
          price: 6.50,
          tags: ["vegetarian"],
          allergens: ["dairy"],
          image: "/images/menu/UK220737_broadway%20bbq_Food_halloumi.webp"
        },
        {
          id: "falafel",
          name: "Falafel",
          description: "Served on bed of hummus & salad garnish",
          price: 6.90,
          tags: ["vegan", "vegetarian"],
          allergens: [],
          image: ""
        },
        {
          id: "calamari",
          name: "Calamari",
          description: "Squid coated in bread crumbs and butter, deep fried",
          price: 7.50,
          tags: ["seafood"],
          allergens: ["gluten", "dairy"],
          image: ""
        },
        {
          id: "borek",
          name: "Börek",
          description: "Cheese, parsley & seasoning rolled in filo pastry deep fried",
          price: 6.50,
          tags: ["vegetarian"],
          allergens: ["gluten", "dairy"],
          image: "/images/menu/UK220737_broadway%20bbq_Food_borek.webp"
        },
        {
          id: "sharing-hot-starters",
          name: "Sharing Hot Starters",
          description: "Selection of hot starters perfect for sharing",
          price: 24.90,
          tags: ["sharing"],
          allergens: ["gluten", "dairy"],
          image: "/images/menu/UK220737_broadway%20bbq_Food_sharing_hot_starter.webp"
        }
      ]
    },
    {
      id: "kebabs",
      name: "Kebabs",
      description: "All kebabs served with rice or fries and salad",
      items: [
        {
          id: "lamb-doner",
          name: "Lamb Doner",
          description: "Specially prepared marinated lamb cooked spit roast with bulgur pilaf & salad. Made daily on-site (no artificial flavoring, coloring, additives, and preservatives)",
          price: 15.95,
          tags: ["halal", "signature"],
          allergens: [],
          featured: true,
          image: "/images/menu/UK220737_broadway%20bbq_Food_lamb_doner.webp"
        },
        {
          id: "lamb-skewers",
          name: "Lamb Skewers",
          description: "Marinated cubes of lamb grilled on skewers with bulgur pilaf & salad",
          price: 17.90,
          tags: ["halal", "signature"],
          allergens: [],
          featured: true,
          image: "/images/menu/UK220737_broadway%20bbq_Food_lamb_shish_kebab.webp"
        },
        {
          id: "adana-kebab",
          name: "Adana Kebab",
          description: "Minced lamb meat grilled on skewers with bulgur pilaf & salad",
          price: 16.90,
          tags: ["halal", "spicy"],
          allergens: [],
          image: "/images/menu/UK220737_broadway%20bbq_Food_adana_kofta_kebab.webp"
        },
        {
          id: "lamb-chops",
          name: "Lamb Chops",
          description: "4 pieces. Seasoned tender lamb chops grilled with bulgur pilaf & salad",
          price: 19.95,
          tags: ["halal", "premium"],
          allergens: [],
          image: ""
        },
        {
          id: "chicken-doner",
          name: "Chicken Doner",
          description: "Specially prepared marinated chicken cooked spit roast with bulgur pilaf & salad. Made daily on-site (no artificial flavoring, coloring, additives, and preservatives)",
          price: 13.95,
          tags: ["halal", "signature"],
          allergens: [],
          image: "/images/menu/UK220737_broadway%20bbq_Food_chicken_doner.webp"
        },
        {
          id: "chicken-skewers",
          name: "Chicken Skewers",
          description: "Chicken seasoned and grilled on skewers with bulgur pilaf & salad",
          price: 15.95,
          tags: ["halal", "popular"],
          allergens: [],
          image: "/images/menu/UK220737_broadway%20bbq_Food_chicken_shish_kebab.webp"
        },
        {
          id: "chicken-wings",
          name: "Chicken Wings",
          description: "8 pieces. Grilled chicken wings with bulgur pilaf & salad",
          price: 13.95,
          tags: ["halal", "popular"],
          allergens: [],
          featured: true,
          image: "/images/menu/UK220737_broadway%20bbq_Food_chicken_wings.webp"
        },
        {
          id: "beyti-kebab",
          name: "Beyti Kebab",
          description: "Seasoned minced lamb wrapped in lavash bread, grilled and served with tomato sauce and yoghurt",
          price: 18.90,
          tags: ["halal", "signature"],
          allergens: [],
          image: "/images/menu/UK220737_broadway%20bbq_Food_lamb_beyti.webp"
        },
        {
          id: "mixed-doner",
          name: "Mixed Döner",
          description: "A delicious mix of marinated chicken and lamb cooked spit roast with bulgur pilaf & salad",
          price: 14.95,
          tags: ["halal", "signature"],
          allergens: [],
          image: "/images/menu/UK220737_broadway%20bbq_Food_mix_doner.webp"
        },
        {
          id: "chicken-and-lamb-mix",
          name: "Chicken and Lamb Mix",
          description: "A delightful combination of marinated chicken and lamb cooked on skewers with bulgur pilaf & salad",
          price: 17.90,
          tags: ["halal", "signature"],
          allergens: [],
          image: "/images/menu/UK220737_broadway%20bbq_Food_mix_shish.webp"
        },
        {
          id: "mixed-kebab",
          name: "Mixed Kebab",
          description: "Chicken Skewers, Adana Kebab Skewers (Lamb Mince), Chicken Wings",
          price: 21.90,
          tags: ["halal", "signature"],
          allergens: [],
          featured: true,
          image: "/images/menu/UK220737_broadway%20bbq_Food_mix_kebab.webp"
        }
      ]
    },
     {
      id: "seafood",
      name: "Seafood",
      description: "Fresh and delicious seafood dishes",
      items: [
       
        {
          id: "prawns-starter",
          name: "Prawns Starter",
          description: "6 pieces of grilled prawns served with salad",
          price: 8.50,
          tags: ["seafood"],
          allergens: ["shellfish"],
          image: ""
        },
        {
          id: "calamari-starter",
          name: "Calamari Starter",
          description: "4 pieces of crispy calamari served with salad",
          price: 7.50,
          tags: ["seafood"],
          allergens: ["gluten", "dairy"],
          image: "/images/menu/UK220737_broadway%20bbq_Food_calamari.webp"
        },
        {
          id: "octopus-starter",
          name: "Octopus Starter",
          description: "1 piece of grilled octopus served with salad",
          price: 8.50,
          tags: ["seafood"],
          allergens: ["fish", "shellfish"],
          image: ""
        },
        {
          id: "seafood-sharing-starters",
          name: "Seafood Sharing Starters",
          description: "A selection of our finest seafood starters",
          price: 22.50,
          tags: ["seafood"],
          allergens: ["shellfish", "gluten"],
          image: ""
        },
        {
          id: "mackerel",
          name: "Mackerel",
          description: "Grilled mackerel served with chips and salad",
          price: 13.90,
          tags: ["seafood"],
          allergens: ["fish"],
          image: ""
        },
        {
          id: "large-sea-bass",
          name: "Large Sea Bass",
          description: "Grilled large sea bass served with chips and salad",
          price: 17.90,
          tags: ["seafood"],
          allergens: ["fish"],
          image: "/images/menu/UK220737_broadway%20bbq_Food_seabass.webp"
        },
        {
          id: "salmon",
          name: "Salmon",
          description: "Grilled salmon served with chips and salad",
          price: 15.90,
          tags: ["seafood"],
          allergens: ["fish"],
          image: "/images/menu/UK220737_broadway%20bbq_Food_salmon.webp"
        },
        {
          id: "calamari-main",
          name: "Calamari Main",
          description: "Crispy calamari served with chips and salad",
          price: 13.90,
          tags: ["seafood"],
          allergens: ["gluten", "dairy"],
          image: ""
        }
      ]
    },
    {
      id: "vegetarian-dishes",
      name: "Vegetarian Dishes",
      description: "Delicious vegetarian main dishes served with bulgur pilaf and salad",
      items: [
        {
          id: "halloumi-dish",
          name: "Halloumi",
          description: "Grilled halloumi cheese with bulgur pilaf and salad",
          price: 13.90,
          tags: ["vegetarian"],
          allergens: ["dairy"],
          image: ""
        },
        {
          id: "falafel-dish",
          name: "Falafel",
          description: "Fresh falafel with bulgur pilaf and salad",
          price: 13.90,
          tags: ["vegan", "vegetarian"],
          allergens: [],
          image: ""
        },
        {
          id: "halloumi-and-falafel-dish",
          name: "Halloumi and Falafel",
          description: "Grilled halloumi and falafel with bulgur pilaf and salad",
          price: 14.90,
          tags: ["vegetarian", "premium"],
          allergens: ["dairy"],
          image: "/images/menu/UK220737_broadway%20bbq_Food_halloumi_and_falafel.webp"
        }

      ]
    },
    {
      id: "wraps",
      name: "Wraps",
      description: "Delicious wraps filled with your favorite proteins and fresh ingredients",
      items: [
        {
          id: "lamb-doner-wrap",
          name: "Lamb Doner Wrap",
          description: "Specially prepared marinated lamb cooked spit roast with rice and salad",
          price: 9.95,
          tags: ["halal"],
          allergens: [],
          image: ""
        },
        {
          id: "chicken-doner-wrap",
          name: "Chicken Doner Wrap",
          description: "Specially prepared marinated chicken cooked spit roast with rice and salad",
          price: 8.95,
          tags: ["halal"],
          allergens: [],
          image: ""
        },
        {
          id: "halloumi-wrap",
          name: "Halloumi Wrap",
          description: "Grilled halloumi with vegetables",
          price: 9.50,
          tags: ["vegetarian"],
          allergens: ["dairy"],
          image: ""
        },
      {
          id: "mixed-doner-wrap",
          name: "Mixed Doner Wrap",
          description: "A delicious mix of marinated chicken and lamb cooked spit roast with rice and salad",
          price: 9.90,
          tags: ["halal"],
          allergens: [],
          image: ""
        },
        {
          id: "chicken-skewers-wrap",
          name: "Chicken Skewers Wrap",
          description: "Grilled chicken skewers with vegetables",
          price: 9.90,
          tags: ["halal"],
          allergens: [],
          image: ""
        },
        {
          id: "falafel-wrap",
          name: "Falafel Wrap",
          description: "Fresh falafel with vegetables",
          price: 8.50,
          tags: ["vegan", "vegetarian"],
          allergens: [],
          image: ""
        },
        {
          id: "adana-kebab-skewers-wrap",
          name: "Adana Kebab Skewers Wrap",
          description: "Grilled Adana kebab skewers with vegetables",
          price: 9.90,
          tags: ["halal"],
          allergens: [],
          image: ""
        },
        {
          id: "halloumi-and-falafel-wrap",
          name: "Halloumi and Falafel Wrap",
          description: "Grilled halloumi and falafel with vegetables",
          price: 9.90,
          tags: ["halal", "premium"],
          allergens: [],
          image: ""
        }
      ]
    },
    {
      id: "sides",
      name: "Sides",
      description: "Delicious sides to complement your meal",
      items: [
        {
          id: "chicken-wings",
          name: "Chicken Wings",
          description: "marinated chicken wings grilled to perfection",
          price: 7.50,
          tags: ["halal", "popular"],
          allergens: [],
          image: "/images/menu/UK220737_broadway%20bbq_Food_side_wings.webp"
        },
        {
          id: "chips",
          name: "Chips",
          description: "Crispy golden fries",
          price: 3.40,
          tags: ["vegetarian"],
          allergens: [],
          image: ""
        },
        {
          id: "chips-loaded-with-cheese",
          name: "Chips Loaded with Cheese",
          description: "Fries topped with melted cheese",
          price: 4.40,
          tags: ["vegetarian"],
          allergens: ["dairy"],
          image: ""
        }
      ]
    },
    {
      id: "salads",
      name: "Salads",
      description: "Fresh and healthy salads",
      items: [
        {
          id: "acili-ezme-salata",
          name: "Acılı Ezme Salata",
          description: "Finely diced tomato, onion, pepper salad with spices and lemon juice",
          price: 6.90,
          tags: ["vegan", "vegetarian"],
          allergens: [],
          image: "/images/menu/UK220737_broadway%20bbq_Food_ezme_salad.webp"
        },
        {
          id: "coban-salata",
          name: "Çoban Salata",
          description: "Finely diced tomato, green pepper, cucumber, onion, parsley, olive oil and lemon juice",
          price: 7.90,
          tags: ["vegan", "vegetarian"],
          allergens: [],
          image: "/images/menu/UK220737_broadway%20bbq_Food_coban_salad.webp"
        }
      ]
    },
    {
      id: "desserts",
      name: "Desserts",
      description: "Traditional Anatolian sweets to end your meal perfectly",
      items: [
        {
          id: "baklava",
          name: "Baklava",
          description: "Traditional pastry with nuts and honey syrup - 4 pieces",
          price: 7.50,
          tags: ["vegetarian", "traditional"],
          allergens: ["gluten", "dairy", "nuts"],
          image: "/images/menu/UK220737_broadway%20bbq_Food_baklawa.webp"
        }
      ]
    },
    {
      id: "specials",
      name: "Specials",
      description: "Special large sharing platters and signature dishes",
      items: [
      {
          id: "kebab-platter",
          name: "Kebab Platter",
          description: "Minimum Two Persons. Per Person | 24.80. Lamb Skewers, Chicken Wings, Lamb Döner, Chicken Döner, Adana Kebab Skewers, Chicken Skewers, Lamb Chop. Served with salad, bulgur pilaf and bread",
          price: 24.80,
          tags: ["halal", "signature"],
          allergens: ["gluten"],
          image: "/images/menu/UK220737_broadway%20bbq_Food_platter.webp"
        },
        {
          id: "seafood-platter",
          name: "Seafood Platter",
          description: "Prawns (6 pcs), Calamari (4 pcs), Octopus (1 pc), One Large Sea Bass, Chips and Salad",
          price: 39.90,
          tags: ["seafood", "signature"],
          allergens: ["fish", "shellfish", "gluten"],
          image: ""
        }
      ]
    },
    {
      id: "drinks",
      name: "Drinks",
      description: "Refreshing beverages and traditional drinks",
      items: [
        {
          id: "soft-drinks",
          name: "Soft Drinks",
          description: "",
          price: 0,
          tags: ["category"],
          allergens: [],
          image: "",
          subcategory: [
            { name: "Ayran (Yoghurt Drink)", price: 2.50 },
            { name: "Şalgam (Fermented Turnip Juice)", price: 2.50 },
            { name: "Red Bull", price: 3.50 },
            { name: "Still Water", price: 2.50 },
            { name: "Sparkling Water", price: 2.50 },
            { name: "Coca Cola Original/Zero", price: 2.50 },
            { name: "Coca Cola Diet", price: 2.80 },
            { name: "Sprite/Fanta/Rio/Rubicon", price: 2.80 },
            { name: "Apple/Orange Juice", price: 2.80 },
            { name: "Lemonade", price: 2.80 }
          ]
        },
        {
          id: "whiskey",
          name: "Whiskey",
          description: "",
          price: 0,
          tags: ["category", "alcoholic"],
          allergens: [],
          image: "",
          subcategory: [
            { name: "Jack Daniel's", price: 7.90 },
            { name: "Jack Daniel's Honey", price: 7.90 },
            { name: "Jameson", price: 7.90 },
            { name: "Chivas Regal", price: 7.90 },
            { name: "Highland Single Malt", price: 7.90 }
          ]
        },
        {
          id: "cognac-brandy",
          name: "Cognac/Brandy",
          description: "",
          price: 0,
          tags: ["category", "alcoholic"],
          allergens: [],
          image: "",
          subcategory: [
            { name: "JP. Chenet", price: 7.90 },
            { name: "Three Barrels", price: 7.90 },
            { name: "E&J", price: 7.90 },
            { name: "Bardinet", price: 7.90 },
            { name: "Hennessy", price: 7.90 },
            { name: "Kirkland XO Cognac", price: 7.90 }
          ]
        },
        {
          id: "rum",
          name: "Rum",
          description: "",
          price: 0,
          tags: ["category", "alcoholic"],
          allergens: [],
          image: "",
          subcategory: [
            { name: "Havana Club Cuban Spiced", price: 7.90 },
            { name: "Havana Club", price: 7.90 },
            { name: "Ron Santiago De Cuba", price: 7.90 },
            { name: "Sailor Jerry", price: 7.90 }
          ]
        },
        {
          id: "wine",
          name: "Wine",
          description: "",
          price: 0,
          tags: ["category", "alcoholic"],
          allergens: [],
          image: "",
          subcategory: [
            { name: "Turkish White Wine (175ml)", price: 5.90 },
            { name: "Turkish Red Wine (175ml)", price: 5.90 },
            { name: "Turkish Rose (175ml)", price: 5.90 },
            { name: "Any Wine Bottles (750ml)", price: 23.00 },
            { name: "Prosecco (175ml)", price: 6.90 },
            { name: "Prosecco Bottle", price: 25.00 },
            { name: "Aperol Spritz", price: 7.90 }
          ]
        },
        {
          id: "beers",
          name: "Beers",
          description: "",
          price: 0,
          tags: ["category", "alcoholic"],
          allergens: [],
          image: "",
          subcategory: [
            { name: "Tuborg (Turkish Beer 500ml)", price: 5.90 },
            { name: "Efes 500ml (Turkish Beer 500ml)", price: 5.90 },
            { name: "Corona Beer (330ml)", price: 3.50 },
            { name: "Cobra Draft Beer", price: 5.90 }
          ]
        },
        {
          id: "gin",
          name: "Gin",
          description: "",
          price: 0,
          tags: ["category", "alcoholic"],
          allergens: [],
          image: "",
          subcategory: [
            { name: "Bombay Sapphire", price: 7.90 },
            { name: "Gordon's", price: 7.90 },
            { name: "Malfy Blood Orange", price: 7.90 },
            { name: "Whitley Neill Apple", price: 7.90 }
          ]
        },
        {
          id: "vodka",
          name: "Vodka",
          description: "",
          price: 0,
          tags: ["category", "alcoholic"],
          allergens: [],
          image: "",
          subcategory: [
            { name: "Smirnoff", price: 7.90 },
            { name: "Absolute", price: 7.90 },
            { name: "Belvedere", price: 7.90 },
            { name: "Absolute Mandarin", price: 7.90 },
            { name: "Smirnoff Cherry Drop", price: 7.90 }
          ]
        },
        {
          id: "tequila-shots",
          name: "Tequila Shots",
          description: "",
          price: 0,
          tags: ["category", "alcoholic"],
          allergens: [],
          image: "",
          subcategory: [
            { name: "Any 4 Shots", price: 10.00 },
            { name: "Jose Cuervo Silver", price: 3.90 },
            { name: "Tequila Rose Strawberry", price: 3.50 }
          ]
        },
        {
          id: "raki",
          name: "Rakı",
          description: "",
          price: 0,
          tags: ["category", "alcoholic", "traditional"],
          allergens: [],
          image: "",
          subcategory: [
            { name: "Yeni Rakı (50ml)", price: 6.90 },
            { name: "Yeni Rakı (35cl)", price: 34.00 },
            { name: "Yeni Rakı (70cl)", price: 58.00 }
          ]
        },
        {
          id: "liqueur-shots",
          name: "Liqueur Shots",
          description: "",
          price: 0,
          tags: ["category", "alcoholic"],
          allergens: [],
          image: "",
          subcategory: [
            { name: "Any 4 Shots", price: 10.00 },
            { name: "Sourz Apple", price: 3.90 },
            { name: "Disaronno", price: 3.90 },
            { name: "Baileys Original", price: 3.90 },
            { name: "Baileys Light", price: 3.90 },
            { name: "Baileys Chocolat", price: 3.90 },
            { name: "Baileys Espresso Crème", price: 3.90 },
            { name: "Antica Sambuca Classic", price: 3.90 },
            { name: "Antica Sambuca Liquorice flavour", price: 3.90 },
            { name: "Jagermeister", price: 3.90 }
          ]
        }
      ]
    }
    
  ]
};
