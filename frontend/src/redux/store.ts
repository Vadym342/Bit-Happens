import { configureStore } from '@reduxjs/toolkit';

import courses from './slices/coursesSlice';

const store = configureStore({
  reducer: {
    courses,
  },
});

export default store;
