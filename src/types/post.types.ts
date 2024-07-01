export interface Media {
  id: number;
  url: string;
  alternativeText: string;
  caption: string;
}

export type Category = "Product Reviews" | "Opinions" | "Travel Guides";

export interface IPost {
  id: number;
  title: string;
  category: Category;
  summary: string;
  isFeatured: boolean;
  thumbnail: Media;
  featuredImage: Media;
  content: any; // Учитывая, что тип блока не был определен, оставляем его как `any`
  slug: string;
}

export interface PostsResponse {
  data: IPost[];
}
