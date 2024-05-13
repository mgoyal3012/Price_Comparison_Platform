import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromWishlist } from '../slices/wishlistSlice'
export default function WishlistScreen() {
    const {wishlistItems} = useSelector(state => state.wishlist)
    const dispatch=useDispatch()
    const handleDeleteItem = id => {
        dispatch(removeFromWishlist(id))
    }
    return (
    <div className="flex flex-col md:flex-row justify-center items-start">
        <div className="md:w-2/3 p-4">
            <h2 className="text-2xl font-semibold mb-4">Wishlist</h2>
            {wishlistItems.length !== 0 ?
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {wishlistItems.map(item => (
                        <div className='border border-gray-300 p-4 flex items-center' key={item._id}
                        >
                            <div>
                                <img src={item.image_link} alt={item.name} className='w-16 h-16 object-contain mr-4' />
                                <h3 className='text-lg font-semibold'>{item.name}</h3>
                                <p className='text-gray-600'>Rs. {item.price_lowest}-{item.price_highest}</p>
                                <button className='text-red-500 hover:text-red-700' onClick={() => handleDeleteItem(item._id)}>Remove</button>
                            </div>
                        </div>
                    ))}  
            </div>:(<p className='text-gray-400 text-xl'>Your Wishlist is empty.</p>)}
        </div>
        {wishlistItems.length !== 0 &&
        <div className="md:w-1/3 bg-gray-100 p-4">
            <p className="text-gray-600">Total Items : {wishlistItems.length}</p>
        </div>}
    </div>
    )
}
