import { readFile } from 'fs/promises';
import { join } from 'path';

export interface ContentData {
  meta: {
    title: string;
    description: string;
    keywords: string;
    ogImage: string;
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
    email: string;
    hours: {
      [key: string]: string;
    };
    mapUrl: string;
  };
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

export interface TestimonialData {
  testimonials: Array<{
    id: number;
    name: string;
    rating: number;
    text: string;
    location: string;
  }>;
}

// Server-side data fetching with caching
export async function getContentData(): Promise<ContentData | null> {
  try {
    const filePath = join(process.cwd(), 'public', 'data', 'content.json');
    const fileContents = await readFile(filePath, 'utf8');
    return JSON.parse(fileContents);
  } catch (error) {
    console.error('Failed to load content data:', error);
    return null;
  }
}

export async function getMenuData(): Promise<MenuData | null> {
  try {
    const filePath = join(process.cwd(), 'public', 'data', 'menu.json');
    const fileContents = await readFile(filePath, 'utf8');
    return JSON.parse(fileContents);
  } catch (error) {
    console.error('Failed to load menu data:', error);
    return null;
  }
}

export async function getTestimonials(): Promise<TestimonialData | null> {
  try {
    const filePath = join(process.cwd(), 'public', 'data', 'testimonials.json');
    const fileContents = await readFile(filePath, 'utf8');
    return JSON.parse(fileContents);
  } catch (error) {
    console.error('Failed to load testimonials data:', error);
    return null;
  }
}
