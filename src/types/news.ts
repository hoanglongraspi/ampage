/**
 * News Article Type Definitions
 */

export interface NewsArticle {
  id?: string;
  title: string;
  excerpt: string;
  content?: string;
  date: string;
  author: string;
  category: NewsCategory;
  image: string;
  readTime: string;
  featured?: boolean;
  published?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export type NewsCategory = 
  | 'Research'
  | 'Regulatory'
  | 'Partnership'
  | 'Product Launch'
  | 'Awards'
  | 'Clinical Trial'
  | 'Technology'
  | 'Company News';

export interface NewsCategoryInfo {
  label: NewsCategory;
  color: string;
  icon: string;
}

