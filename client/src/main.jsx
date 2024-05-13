import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import ProductScreen from './screens/ProductScreen.jsx'
import HomeScreen from './screens/HomeScreen.jsx'
import {createBrowserRouter , createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import store from './store.js'
import WishlistScreen from './screens/WishlistScreen.jsx'
import LoginScreen from './screens/LoginScreen.jsx'
import ResetPassword from './screens/ResetPassword.jsx'
import RegisterScreen from './screens/RegisterScreen.jsx'
import PrivateRoute from './components/PrivateRoutes.jsx'
import ProfileScreen from './screens/ProfileScreen.jsx'
import AdminRoute from './components/AdminRoute.jsx'
import UserListScreen from './screens/admin/UserListScreen.jsx'
import ProductListScreen from './screens/admin/ProductListScreen.jsx'
import UserEditScreen from './screens/admin/UserEditScreen.jsx'
// import OrderListScreen from './screens/admin/OrderListScreen.jsx'
// import ProductEditScreen from './screens/admin/ProductEditScreen.jsx'
// import UserEditScreen from './screens/admin/UserListScreen.jsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={< App />}>
      
      
      <Route path='/login' element={<LoginScreen />} />
      <Route path ='/reset-password/:resetToken' element={<ResetPassword />}/>
      <Route path='/register' element={<RegisterScreen/>}/>
      {/* private route */}
      <Route path='' element={<PrivateRoute/>}>
      <Route index={true} path='/' element={<HomeScreen />} />
      <Route path='/search/:keyword' element={<HomeScreen />} />
      <Route path='/product/:id' element ={<ProductScreen />} />
      <Route path='/wishlist' element={<WishlistScreen/>}/>
      <Route path='/profile' element={<ProfileScreen/>} />
      <Route path ='/' element={<AdminRoute/>}>
        <Route path='/admin/users' element={<UserListScreen />} />
        <Route path='/admin/users/:id/edit' element={<UserEditScreen />} />
        <Route path='/admin/products' element={<ProductListScreen />} />
        {/* <Route path='/admin/products/:id' element={<ProductListScreen />} /> */}
        {/* <Route path='/admin/orders' element={<OrderListScreen />} />  */}
        
      </Route>
      </Route>

      
     </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <RouterProvider router={router} />
  </Provider>
)
