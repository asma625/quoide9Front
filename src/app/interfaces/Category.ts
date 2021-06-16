export interface Category {
  id?: number;
  categoryTitle?: string;
  categoryDescription?: string;
  subCategory?: Category[];
  parentCategory?: Category[];
  imageUrl?: string;
  showOnNavbar?: boolean;


}
