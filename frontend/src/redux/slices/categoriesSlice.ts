import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { Category } from '../../shared/types/types';

export interface CategoryState {
  categories: Category[];
  status: 'loading' | 'fulfilled' | null;
  errors: string | null | undefined;
}

const initialState: CategoryState = {
  categories: [],
  status: null,
  errors: null,
};

export const fetchCategories = createAsyncThunk<Category[], void, { rejectValue: string }>(
  'category/fetchCategories',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get<Category[]>(`${process.env.APP_URL}/categories`);
      return response.data;
    } catch (error: any) {
      const status = error?.response?.status;
      let errorMessage = 'Unknown error';

      switch (status) {
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
        case 500:
        default:
          errorMessage = 'Server error';
          break;
      }

      return rejectWithValue(errorMessage);
    }
  },
);

const categoriesSlice = createSlice({
  name: 'category',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.status = 'loading';
        state.errors = null;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.status = 'fulfilled';
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.status = 'loading';
        state.errors = action.payload || action.error.message;
        console.error('Category error:', action.payload || action.error.message);
      });
  },
});

export default categoriesSlice.reducer;
