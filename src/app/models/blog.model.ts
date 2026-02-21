// models/blog.model.ts
export interface Post {
  id: number;
  title: string;
  subtitle?: string;
  excerpt: string;
  content?: string;
  image: string;
  category: string;
  author: string;
  authorAvatar: string;
  date: string;
  readTime: string;
  tags?: string[];
}

export interface Category {
  name: string;
  description: string;
  image: string;
}
