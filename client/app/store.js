// for state management of cart data
// cart data can be accessed from the store
// any where in the application

import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cart/cartSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
