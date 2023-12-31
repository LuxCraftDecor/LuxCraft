//store.js
import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
export const store = configureStore({
    reducer :{
        cart : cartSlice
    },
    devTools : true,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable the serializable value check
    }),
})

// store.js

