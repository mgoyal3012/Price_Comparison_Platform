import React, { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { FiHeart, FiUser, FiLogOut, FiLogIn } from 'react-icons/fi'
import { useSelector, useDispatch } from 'react-redux'
import {FaCaretDown,FaCaretUp} from 'react-icons/fa'
import { toast } from "react-toastify"
import { logout } from '../slices/userSlice'
import { useLogoutMutation } from '../slices/userApiSlice'
const Header=()=>{
    const navigate=useNavigate()
    const dispatch = useDispatch()
    const {keyword: urlKeyword}=useParams()
    const [logoutApi] = useLogoutMutation()
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false)
    const [isAdminMenuOpen, setIsAdminMenuOpen] = useState(false)
    const [keyword,setKeyword] = useState(urlKeyword||"")
    const {wishlistItems}=useSelector(state=>state.wishlist)
    const { userInfo } = useSelector(state => state.user)
    
    const handleSearch = (e) =>{
        e.preventDefault()
        if(keyword){
            navigate(`/search/${keyword.trim()}`)
            setKeyword("")
        }
        else{
            navigate("/")
        }
    }
    const handleLogout = async () => {
        try {
            
            await logoutApi()
            console.log("abc")
            dispatch(logout())
            
            navigate("/login")
            toast.success("Logged Out Successfully")
        } catch (error) {
            toast.error(error?.data?.message || error?.error)
        }
    }
    const renderProfileButton = () => {
        return (
            <>
                <button
                    onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                    className="text-white flex items-center"
                >
                    <FiUser className="mr-1" />
                    {userInfo?.name}
                    {isProfileMenuOpen?<FaCaretUp/>:<FaCaretDown/>}
                </button>
                <ul
                    className={`absolute ${isProfileMenuOpen ? 'block' : 'hidden'
                        } bg-gray-800 p-2 mt-2 space-y-2 text-white border rounded-md`}
                >
                    <li>
                        <Link to="/profile">
                            <FiUser className="mr-1" />
                            Profile
                        </Link>
                    </li>
                    <li>
                        <Link to="/logout" onClick={handleLogout}>
                            <FiLogOut className="mr-1" />
                            Logout
                        </Link>
                    </li>
                </ul>
            </>
        )
    }
    const renderAdminButton = () => {
        return (
            <>
                <button
                    onClick={() => setIsAdminMenuOpen(!isAdminMenuOpen)}
                    className="text-white flex items-center"
                >
                    <FiUser className="mr-1" />
                    Admin
                    {isAdminMenuOpen ? <FaCaretUp /> : <FaCaretDown />}
                </button>
                <ul
                    className={`absolute ${isAdminMenuOpen ? 'block' : 'hidden'
                        } bg-gray-800 p-2 mt-2 space-y-2 text-white border rounded-md`}
                >
                    <li>
                        <Link to="/admin/users">
                            Users
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/products">
                            Products
                        </Link>
                    </li>
                </ul>
            </>
        )
    }
    const renderSearch=()=>{
        return(
            <>
            <input
                type='text'
                placeholder='Search New Product'
                className='ml-8 p-2 rounded-md bg-gray-200 text-gray-500 hidden sm:block'
                value={keyword}
                onChange={e=>setKeyword(e.target.value)}
                />
                <button className='bg-pink-200 text-gray-600 py-2 px-4 rounded-md hidden sm:block ml-2'
                onClick={handleSearch}
                >
                    Search
                </button>
            </>
        )
        
    }
    const renderMobileSearch=()=>{
        return(
            <>
            <input
                type='text'
                placeholder='Search New Products'
                className='p-2 rounded-md bg-gray-200 text-gray-500 w-full mb-2'
                value={keyword}
                onChange={e=>setKeyword(e.target.value)}
                />
                <button className='bg-pink-200 text-gray-600 py-2 px-4 rounded-md w-full mb-2'
                onClick={handleSearch}>
                    Search
                </button>
            </>
        )
    }
    const renderSignInButton = () => (
        <Link className='flex items-center' to="/login">
            <FiLogIn className="mr-1 text-white" />
            <button className="text-white">Sign In</button>
        </Link>
    )
    const renderWishlist=()=>{
        return(
            <>
            <Link to="/wishlist" className='text-white flex items-center'>
                    <FiHeart className="mr-1"/>
                    Wishlist
                    <span className='bg-white text-pink-500 rounded-full px-2 py-1 ml-2'>{wishlistItems.length}</span>
                </Link>
            </>
        )
    }
    return (
        <nav className="bg-pink-500 p-4 sticky top-0 z-50">
        <div className="flex items-center justify-between ">
            <div className="flex items-center">
                <Link to="/" className="text-white text-3xl font-extrabold" >
                    <a href='#section2'>
                    Iris
                    </a>
                </Link>
                {userInfo && renderSearch()}
            </div>
            <div className='hidden sm:flex items-center space-x-4'>
                {userInfo && renderWishlist()}
                {userInfo && <div className='relative group'>
                    {renderProfileButton()}
                </div>}
                {userInfo?.isAdmin && <div className='relative group'>
                    {renderAdminButton()}
                </div>}
                {!userInfo && renderSignInButton()}
            </div>
            <div className='sm:hidden'>
                <button onClick={()=>setIsMobileMenuOpen(!isMobileMenuOpen)} className='text-white text-x1 focus:outline-none'>
                    ☰
                </button>
            </div>
        </div>
        {isMobileMenuOpen && (
            <div className='mt-4 sm:hidden'>
                {userInfo && renderMobileSearch()}
                <div className='space-y-2'>
                    {userInfo && renderWishlist()}
                    {userInfo && <div className='relative group'>
                        {renderProfileButton()}
                    </div>}
                    {userInfo?.isAdmin && <div className='relative group'>
                    {renderAdminButton()}
                </div>}
                    {!userInfo && renderSignInButton()}
                </div>

            </div>

        )}
    </nav>
      )
}
export default Header