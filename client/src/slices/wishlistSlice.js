import { createSlice } from "@reduxjs/toolkit"
import {updateWishlist} from "../utils/wishlistUtils"

const initialState = localStorage.getItem("wishlist")
? JSON.parse(localStorage.getItem("wishlist"))
: { wishlistItems: []}

  const wishlistSlice = createSlice({
    name: "wishlist",
    initialState,
    reducers:{
        addToWishlist: (state, action) => {
            const item = action.payload
            const existItem = state.wishlistItems.find(i => i._id === item._id)
      
            if (existItem) {
              state.wishlistItems = state.wishlistItems.map(i =>
                i._id === existItem._id ? item : i
              )
            } else {
              state.wishlistItems = [...state.wishlistItems, item]    
            }
            return updateWishlist(state)
    },
    removeFromWishlist: (state, action) => {
        const id = action.payload
        state.wishlistItems = state.wishlistItems.filter(item => item._id !== id)
        return updateWishlist(state)
      },
  },
})
export const {addToWishlist,removeFromWishlist}=wishlistSlice.actions
export default wishlistSlice.reducer