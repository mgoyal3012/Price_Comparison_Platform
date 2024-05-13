import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import {products} from '../data/products'
import React,{ useEffect, useState } from 'react'
import axios from 'axios'
import Sort from '../components/Sort'
import Price from '../components/Price'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addToWishlist } from '../slices/wishlistSlice'
export default function ProductScreen() {
    const [product,setProduct]=useState({})
    
    const {id}=useParams();
    //const id="66368bd45165d00695d407db"
    const getInitialState=()=>{
      const value="Price(lowest)";
      return value;
    }
    const dispatch = useDispatch()
    const navigate = useNavigate()
//     const[content,setContent]=useState(`<th
//     class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
//     Rating
// </th>
// <th
//     class="px-3 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
//     Price              
// </th>

// <th
//     class="px-12 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
//     Link
// </th>`);
const addtoWishlistHandler=()=>{
  dispatch(addToWishlist({...product}))
  navigate('/wishlist')
}
    const [value,setValue]=useState(getInitialState);
    const [div,setDiv]=useState('div1')
    const [hehe,setHehe]=useState()
    let sortedarray;
    let abc=[{
      link:product.website_link1,
      price:product.price1,
      rating:product.rating1
    },
    {
      link:product.website_link2,
      price:product.price2,
      rating:product.rating2
    },
    {
      link:product.website_link3,
      price:product.price3,
      rating:product.rating3
    },
    {
      link:product.website_link4,
      price:product.price4,
      rating:product.rating4
    },
    {
      link:product.website_link5,
      price:product.price5,
      rating:product.rating5
    },
  ]
    const handleChange=(e)=>{
      setValue(e.target.value);
      // var sortedarray;
      switch (e.target.value){

        case 'Price(highest)':
          console.log("aaaaaaaaaaaaaaaaaa")
          sortedarray=abc.sort((a,b)=> b.price-a.price );
          console.log(sortedarray);
          
          break;
        case 'Price(lowest)':
          sortedarray=abc.sort((a,b)=> a.price-b.price );
          console.log(sortedarray);
          break;
        case 'Rating(lowest)':
          sortedarray=abc.sort((a,b)=> a.rating-b.rating );
          console.log(sortedarray);

          break;
        case 'Rating(highest)':
          sortedarray=abc.sort((a,b)=> b.rating-a.rating );
          console.log(sortedarray);
          break;
        default:
          console.log("bbbbbbb");
      }
          abc=sortedarray;
          console.log(abc);
          setDiv('div2')
          setHehe(abc)
    };
    useEffect(()=>{
      const fetchProduct=async()=>{
        const {data}=await axios.get(`/api/products/${id}`)
        setProduct(data)
      }
      fetchProduct()
    },[id])
    
  abc.sort((a,b)=> a.price-b.price );
  return (
    <div className='container mx-auto mt-8 p-4'>
      <Link to={`/`}>
        <button className='bg-pink-400 text-white px-4 py-2 rounded-md mb-4'>Go Back</button>
        </Link>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <div className='md:col-span-1'>
          <img src={product.image_link} alt={product.name} className='w-full h-auto'/>
          </div>
          <div className='md:col-span-1'>
            <h1 className='text-2xl font-semibold'>{product.name}</h1>
            <p className='text-gray-700 mt-2'>{product.description}</p>
            
            <div className='flex items-center mt-2'>
              {/* <span className='text-yellow-500 mr-1'>{product.rating}</span> */}
            </div>
          
            <button
            className='bg-pink-400 text-white px-4 py-2 rounded-md mt-4 hover:bg-yellow-600'
            onClick={addtoWishlistHandler}>
              Add to Wishlist
            </button>
            <br></br><br></br>

            <div className="sort-list" >
            <form action="#">
            <label htmlFor="sort" className="block mb-2 text-sm font-medium text-grey-900">Sort By :</label>
            <select 
            name="sort" 
            id="sort" 
            className="sort-selection--style bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-pink-500 block w-full p-2.5 hover:bg-gray-200" 
            value={value}
            onChange={handleChange}
            >
                <option value="Price(lowest)">Price - Low to High</option>
                <option value="Price(highest)">Price - High to Low</option>
                <option value="Rating(lowest)">Rating - Low to High</option>
                <option value="Rating(highest)">Rating - High to Low</option>
            </select>
        </form>
            </div>
            <br></br>
            {/* <div className="sort-filter"><Sort/></div> */}
            {/* <div dangerouslySetInnerHTML={{ __html:content}}> */}
            <div className='links'>
              <div class='flex mb-4'> 
            <th
                                    class="w-1/3 border-b-2 border-gray-200 bg-gray-100 text-center text-s font-semibold text-gray-600 uppercase tracking-wider">
                                    Rating
                                </th>
                                <th
                                    class="w-1/3 border-b-2 border-gray-200 bg-gray-100 text-center text-s font-semibold text-gray-600 uppercase tracking-wider">
                                    Price              
                                </th>
                                
                                <th
                                    class="w-1/3 border-b-2 border-gray-200 bg-gray-100 text-center text-s font-semibold text-gray-600 uppercase tracking-wider">
                                    Link
                                </th>
                                </div>
                                
            <div>
              {div==='div1'?<div>{
                abc.map((abcd,i)=>(
                  <Price key={i} abcd={abcd}/>
                ))
              }</div>:<div>{
                hehe.map((abcd,i)=>(
                  <Price key={i} abcd={abcd}/>
                ))
              }</div>}
              
              </div>
              
              </div>
            </div>
          </div>
          
        </div>
        
        
        
    
  )
}
