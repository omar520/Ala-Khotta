import { LucideIcon } from 'lucide-react';

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface ProductVariant {
  id: string;
  name: string;
  size: string;
  price: number; // Changed to number for calculations
  priceDisplay: string;
  description: string;
  isCustom: boolean;
  features: string[];
  image: string; // Added image URL
}

export interface CartItem {
  cartId: string;
  variantId: string;
  name: string;
  price: number;
  size: string;
  image: string;
  quantity: number;
  customConfig?: string[]; // Selected sections for custom planner
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface OrderData {
  customerName: string;
  phone: string;
  address: string;
  governorate: string;
  items: CartItem[];
  total: number;
  date: string;
}