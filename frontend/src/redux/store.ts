import { configureStore } from '@reduxjs/toolkit';

import courses from './slices/coursesSlice';
import categories from './slices/categoriesSlice';

const store = configureStore({
  reducer: {
    courses,
    categories,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export default store;
