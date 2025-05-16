import { configureStore } from '@reduxjs/toolkit';

import courses from './slices/coursesSlice';
import categories from './slices/categoriesSlice';
import cartReducer from './slices/cartSlice';

const store = configureStore({
  reducer: {
    courses,
    categories,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export default store;
