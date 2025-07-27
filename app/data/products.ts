export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  weight: string;
  origin: string;
  category?: string;
  inStock?: boolean;
  rating?: number;
  reviews?: number;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Atlas Mountain Wildflower Honey",
    price: 24.99,
    image: "https://cdn.shopify.com/s/files/1/0403/0041/3085/products/RawHoneycombJar_15874b68-e356-46a9-9278-2af2980a251f.png?v=1604420597",
    description: "Pure wildflower honey from the Atlas Mountains with a delicate floral taste. By IC GoldHoney.",
    weight: "500g",
    origin: "Atlas Mountains",
    category: "Honey",
    inStock: true,
    rating: 4.9,
    reviews: 127
  },
  {
    id: "2",
    name: "Argan Blossom Honey",
    price: 34.99,
    image: "https://www.smileyhoney.com/cdn/shop/files/Honey_and_Comb_Combo-4469972_590x.jpg?v=1728558799",
    description: "Rare honey from argan tree blossoms with unique nutty undertones. By IC GoldHoney.",
    weight: "250g",
    origin: "Essaouira Region",
    category: "Specialty Honey",
    inStock: true,
    rating: 4.8,
    reviews: 89
  },
  {
    id: "3",
    name: "Eucalyptus Honey",
    price: 28.99,
    image: "https://ashevillebeecharmer.com/wp-content/uploads/wildflower-honey-w-comb-1.jpg",
    description: "Refreshing eucalyptus honey with natural antiseptic properties. By IC GoldHoney.",
    weight: "500g",
    origin: "Middle Atlas",
    category: "Honey",
    inStock: true,
    rating: 4.7,
    reviews: 67
  },
  {
    id: "4",
    name: "Orange Blossom Honey",
    price: 26.99,
    image: "https://cdn.shopify.com/s/files/1/0403/0041/3085/products/RawHoneycombJar_15874b68-e356-46a9-9278-2af2980a251f.png?v=1604420597",
    description: "Sweet citrus honey from orange groves with a bright, fresh flavor. By IC GoldHoney.",
    weight: "500g",
    origin: "Souss Valley",
    category: "Flower Honey",
    inStock: true,
    rating: 4.6,
    reviews: 156
  },
  {
    id: "5",
    name: "Thyme Honey",
    price: 32.99,
    image: "https://www.smileyhoney.com/cdn/shop/files/Honey_and_Comb_Combo-4469972_590x.jpg?v=1728558799",
    description: "Aromatic thyme honey with herbal notes and medicinal properties. By IC GoldHoney.",
    weight: "250g",
    origin: "High Atlas",
    category: "Specialty Honey",
    inStock: true,
    rating: 4.8,
    reviews: 98
  },
  {
    id: "6",
    name: "Lavender Honey",
    price: 29.99,
    image: "https://ashevillebeecharmer.com/wp-content/uploads/wildflower-honey-w-comb-1.jpg",
    description: "Delicate lavender honey with a subtle floral aroma and calming properties. By IC GoldHoney.",
    weight: "500g",
    origin: "Middle Atlas",
    category: "Flower Honey",
    inStock: true,
    rating: 4.7,
    reviews: 112
  },
  {
    id: "7",
    name: "Moroccan Honey",
    description: "Pure Moroccan honey harvested from the Atlas Mountains. Rich flavor with floral notes.",
    price: 29.99,
    image: "/images/wildflower-honey.jpg",
    category: "Honey",
    origin: "Atlas Mountains",
    weight: "500g",
    inStock: true,
    rating: 4.8,
    reviews: 123
  },
  {
    id: "8",
    name: "Sahara Honey",
    description: "Unique honey from the Sahara desert region. Distinctive taste with a touch of desert herbs.",
    price: 34.99,
    image: "/images/honey-dripping.jpg",
    category: "Honey",
    origin: "Sahara Desert",
    weight: "250g",
    inStock: true,
    rating: 4.7,
    reviews: 85
  }
];

// Helper function to get a product by ID
export function getProductById(id: string): Product | undefined {
  return products.find(product => product.id === id);
}

// Generate static paths for Next.js
export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}
