import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./slices/apiSlice";
import wishlistReducer from "./slices/wishlistSlice"
import userReducer from "./slices/userSlice.js"
import { useReducer } from "react";
const store=configureStore({
    reducer:{
        [apiSlice.reducerPath]: apiSlice.reducer,
        wishlist:wishlistReducer,
        user: userReducer,
        
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(apiSlice.middleware),
      devTools: true,
})
export default store