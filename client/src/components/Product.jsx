import React from 'react'
import { Link } from 'react-router-dom'
export default function Product({product}) {
  return (
    <Link to={`/product/${product._id}`}>
    <div className='bg-white p-4 h-full shadow-md rounded-md cursor-pointer transition ease-in-out delay-2 hover:-translate-y-1 hover:scale-105'>
      <img src={product.image_link} alt={product.name} className='w-full h-48 object-contain mb-2'/>
      <h2 className='text-lg font-semibold overflow-ellipsis'>{product.name}</h2>
      <p className='mt-2 text-gray-700'>Rs {product.price_lowest}-{product.price_highest}</p>
    </div>
    </Link>
  )
}