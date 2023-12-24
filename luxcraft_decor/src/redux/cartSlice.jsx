// cartSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { doc, setDoc } from 'firebase/firestore';
const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const { product, quantity, price,imageUrl, } = action.payload;

      // Convert Firestore Timestamp to JavaScript Date
      const timeAsDate = product && product.time ? product.time.toDate() : null;

      // Serialize the time directly in the reducer
      const serializedProduct = {
        ...product,
        time: timeAsDate,
        price:price,
        imageUrl:imageUrl
      };

      const existingProductIndex = state.items.findIndex(item => item.id === serializedProduct.id);

      if (existingProductIndex !== -1) {
        // If the product is already in the cart, update the quantity
        state.items[existingProductIndex].quantity += quantity;
      } else {
        // If the product is not in the cart, add it with the specified quantity
        state.items.push({ ...serializedProduct, quantity });
      }
    },

    deleteFromCart: (state, action) => {
      const productIdToDelete = action.payload;
      state.items = state.items.filter(item => item.id !== productIdToDelete);
    },

  },
});

export const { addToCart, deleteFromCart } = cartSlice.actions;
export default cartSlice.reducer;
