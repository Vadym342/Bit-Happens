import { Lesson } from '../shared/types/types';

export const fetchCategoryName = async (categoryId: string) => {
  try {
    const res = await fetch(`${process.env.APP_URL}/categories/${categoryId}`);
    if (!res.ok) {
      throw new Error('Failed to fetch category name');
    }
    const data = await res.json();
    return data.name;
  } catch (error) {
    console.error(error);
    return 'Loading...';
  }
};

export const fetchTeacherName = async (teacherId: string) => {
  try {
    const res = await fetch(`${process.env.APP_URL}/users/${teacherId}`);
    if (!res.ok) {
      throw new Error('Failed to fetch teacher name');
    }
    const data = await res.json();
    return `${data.firstName} ${data.lastName}`;
  } catch (error) {
    console.error(error);
    return 'Loading...';
  }
};

export const fetchLessonsByCourseId = async (id: string): Promise<Lesson[]> => {
  const res = await fetch(`${process.env.APP_URL}/lessons/course/${id}`);

  if (!res.ok) {
    const errorText = await res.text();
    console.error(`Error fetching lessons: ${res.status}`, errorText);
    throw new Error('Failed to fetch lessons');
  }

  const data = await res.json();
  if (!Array.isArray(data)) {
    console.error('Expected array but got:', data);
    throw new Error('Invalid data format');
  }

  return data.map((lesson: any) => ({
    id: lesson.id,
    title: lesson.title,
    content: lesson.content,
    description: lesson.description,
    createdAt: lesson.createdAt,
    updatedAt: lesson.updatedAt,
    deletedAt: lesson.deletedAt,
    courseId: lesson.courseId,
  }));
};
