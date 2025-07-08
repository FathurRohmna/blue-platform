import { Article } from './article';

export interface Category {
  name: string;
  slug: string;
  articles: Article[];
}

export interface CategoryPageData {
  name: string;
  slug: string;
  articles: Article[];
}
