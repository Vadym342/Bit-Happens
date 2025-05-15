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
