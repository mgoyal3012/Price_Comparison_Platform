export const updateWishlist=state=>{
    localStorage.setItem("wishlist",JSON.stringify(state))
    return state;
}