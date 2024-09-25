import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cartItems: [],
  };
  
  const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
      addToCart: (state, action) => {
        const item = action.payload;
        const existingItem = state.cartItems.find((i) => i._id === item._id);

        if (existingItem) {
            existingItem.quantity += 1; // Increment quantity 
        } else {
            state.cartItems.push({ ...item, quantity: 1 }); // Add new item to cart
        }
    },
    removeFromCart: (state, action) => {
        state.cartItems = state.cartItems.filter((item) => item._id !== action.payload); // Remove item by id
    },
    },
  });
  export const {addToCart,removeFromCart}=cartSlice.actions
  export default cartSlice.reducer



