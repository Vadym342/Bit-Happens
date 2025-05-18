export interface Category {
  id: string;
  name: string;
  description: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  content: string;
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

export interface Lesson {
  id: string;
  title: string;
  content: string;
  description: string;
  createdAt: string;
  updatedAt: string | null;
  deletedAt: string | null;
  courseId: string;
}
