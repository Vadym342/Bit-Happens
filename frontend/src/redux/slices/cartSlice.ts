import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Course } from '../../shared/types/types';

interface CartState {
  items: Course[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<Course>) {
      const exists = state.items.find((item) => item.id === action.payload.id);
      if (!exists) {
        state.items.push(action.payload);
        console.log('✅ Товар добавлен в корзину:', action.payload);
      } else {
        console.log('⚠️ Товар уже есть в корзине:', action.payload);
      }
    },
    removeFromCart(state, action: PayloadAction<string>) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearCart(state) {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export type { CartState };
export default cartSlice.reducer;
