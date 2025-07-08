export interface Category {
  name: string;
  slug: string;
}

export interface Article {
  title: string;
  slug: string;
  description: string;
  image_url: string;
  categories: Category[];
}
