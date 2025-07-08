import { promises as fs } from 'fs';
import path from 'path';

export interface ContentData {
  meta: {
    title: string;
    description: string;
    keywords: string;
    ogImage: string;
  };
  menu: {
    meta: {
      title: string;
      description: string;
    };
    hero: {
      title: string;
      subtitle: string;
    };
  };
  hero: {
    title: string;
    subtitle: string;
    description: string;
    ctaText: string;
    ctaLink: string;
    backgroundImage: string;
  };
  about: {
    title: string;
    subtitle: string;
    description: string;
    features: Array<{
      title: string;
      description: string;
      icon: string;
    }>;
  };
  contact: {
    title: string;
    address: {
      street: string;
      city: string;
      state: string;
      zip: string;
      country: string;
    };
    phone: string;
    whatsapp: string;
    whatsappMessage?: string;
    email: string;
    hours: {
      [key: string]: string;
    };
    mapUrl: string;
  };
}

export interface TestimonialData {
  testimonials: Array<{
    id: number;
    name: string;
    rating: number;
    text: string;
    location: string;
  }>;
}

export interface MenuData {
  categories: Array<{
    id: string;
    name: string;
    description: string;
    items: Array<{
      id: string;
      name: string;
      description: string;
      price: number;
      tags: string[];
      featured?: boolean;
      image?: string;
    }>;
  }>;
}

export async function getContentData(): Promise<ContentData> {
  const filePath = path.join(process.cwd(), 'public', 'data', 'content.json');
  const jsonData = await fs.readFile(filePath, 'utf8');
  return JSON.parse(jsonData);
}

export async function getMenuData(): Promise<MenuData> {
  const filePath = path.join(process.cwd(), 'public', 'data', 'menu.json');
  const jsonData = await fs.readFile(filePath, 'utf8');
  return JSON.parse(jsonData);
}

export async function getTestimonialsData(): Promise<TestimonialData> {
  const filePath = path.join(process.cwd(), 'public', 'data', 'testimonials.json');
  const jsonData = await fs.readFile(filePath, 'utf8');
  return JSON.parse(jsonData);
}
