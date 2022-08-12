import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  total: 0,
  itemsInCart: [],
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increment: (state, action) => {
      state.itemsInCart.push(action.payload);
      state.total += 1;
      state.totalPrice += action.payload.price;
    },
  },
});

export const { increment } = cartSlice.actions;

export default cartSlice.reducer;

// export const cartSlice = createSlice({
//   name: 'cart',
//   initialState,
//   reducers: {
//     addToCart: (state, action) => {
//       const { product } = action.payload;
//       const cartItem = state.cartItems.find(
//         (item) => item.product.id === product.id
//       );
//       if (cartItem) {
//         cartItem.quantity += 1;
//       } else {
//         state.cartItems.push({ product, quantity: 1 });
//       }
//       state.total += product.price;
//     },
//   },
// });
