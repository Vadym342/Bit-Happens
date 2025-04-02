import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export interface CourseState {
  courses: [];
  status: 'loading' | 'fulfilled' | null;
  errors: string | null | undefined;
}

const initialState: CourseState = {
  courses: [],
  status: null,
  errors: null,
};

export const fetchCourses = createAsyncThunk('course/fetchCourses', () => {
  return axios
    .get('http://localhost:3000/courses')
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      let errorMessage = '';
      switch (error.status) {
        case 500:
          errorMessage = 'Unknown error occurred';
          break;
        case 401:
          errorMessage = 'Unauthorized';
          break;
        case 404:
          errorMessage = 'Not found';
          break;
        case 403:
          errorMessage = 'Forbidden';
          break;
        case 400:
          errorMessage = 'Bad request';
          break;
        case 503:
          errorMessage = 'Service unavailable';
          break;
        case 504:
          errorMessage = 'Gateway timeout';
          break;
        case 429:
          errorMessage = 'Too many requests';
          break;
        default:
          break;
      }
      console.error(error);
      throw new Error(errorMessage);
    });
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
        state.status = 'loading';
        state.errors = action.error.message;
        console.log(action);
        console.error(action.error.message);
      });
  },
});

export default coursesSlice.reducer;
