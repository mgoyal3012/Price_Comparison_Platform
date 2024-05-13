// import { products } from '../data/products'
import Header from '../components/Header.jsx'
import { useParams } from 'react-router-dom'
import Product from '../components/Product'
import { useGetProductsQuery } from '../slices/productsApiSlice.js'
import image from '../assets/images/IMAGE1.jpeg'
import Spinner from '../components/Spinner'
import { toast } from 'react-toastify'
export default function HomeScreen() {
  const {keyword}=useParams()
  const {data:products,isLoading,error}=useGetProductsQuery(keyword)
  if(isLoading){
    return <Spinner/>
  }
  if(error){
    toast.error(error?.data?.message || error?.error)
  }
  return (

      <>
    <div id='section2'>
    
    </div>
    <div className="z-0 relative font-[sans-serif] before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-45 before:z-10" >
      <img src={image} alt="Banner Image" className="absolute inset-0 w-full h-full object-cover" />
      <div className="min-h-[450px] relative z-50 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6">
        <h2 className="sm:text-4xl text-2xl font-bold mb-6">Explore the World of Beauty</h2>
        <p className="text-lg text-center text-gray-200">Elegance is the only beauty that never fades!</p>
        <a href="#section1"
          className="mt-8 bg-transparent text-white text-base font-semibold py-2.5 px-6 border-2 border-white rounded hover:bg-white hover:text-black transition duration-300 ease-in-out">
          Begin Now
        </a>
      </div>
    </div>
    <div id="section1">
        <br>
        </br>
    </div>
      <div className='mt-10 grid grid-cols-1 items-stretch sm:grid-cols-3 md:grid-cols-4 gap-4 scroll-smooth'>
      {
        products?.map((product,i)=>(
            <Product key={i} product={product}/>
        ))
      }
    </div>
    </>
  )
}
