export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  discountPercent?: number;
  badge?: "new" | "discount";
  image: string;
};

export type ProductDetail = {
  id: number;
  name: string;
  price: number;
  rating: number;
  reviewCount: number;
  description: string;
  sizes: string[];
  colors: string[];
  images: string[];
  sku: string;
  category: string;
  tags: string[];
};
