import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  courses: [],
  status: null,
  errors: null,
};

export const fetchCourses = createAsyncThunk('course/fetchCourses', async () => {
  try {
    const response = await fetch('http://localhost:3000/courses', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch courses');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
});

const coursesSlice = createSlice({
  name: 'course',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourses.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        console.log(action.payload);
        state.courses = action.payload;
        state.status = 'fulfilled';
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        state.status = 'error';
        state.errors = action.error.message;
        console.error(action.error.message);
      });
  },
});

export default coursesSlice.reducer;
// export const {  } = coursesSlice.actions;
