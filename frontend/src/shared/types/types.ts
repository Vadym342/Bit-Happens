export interface Category {
  id: string;
  name: string;
  description: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  price: number;
  logoImage?: string;
  categoryId: string;
  teacherId: string;
}

export interface CartItem {
  id: string;
  title: string;
  price: number;
  logoImage?: string;
}
