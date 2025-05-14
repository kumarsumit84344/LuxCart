import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
      cartItems: [],
    },
    reducers: {
      addToCart: (state, action) => {
        const existingItem = state.cartItems.find(item => item.id === action.payload.id);
        if (existingItem) {
          existingItem.quantity += 1;
        } else {
            // ✅ Only store safe properties
            const { id, title, price, images } = action.payload;
            state.cartItems.push({
              id,
              title,
              price,
              images,
              quantity: 1,
            });
          }
      },
      removeFromCart: (state, action) => {
        const index = state.cartItems.findIndex(item => item.id === action.payload.id);
        if (index !== -1) {
          if (state.cartItems[index].quantity > 1) {
            state.cartItems[index].quantity -= 1;
          } else {
            state.cartItems.splice(index, 1);
          }
        }
      },
    },
  });
  
  export const { addToCart, removeFromCart } = cartSlice.actions;
  export default cartSlice.reducer;
  