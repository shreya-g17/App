import React, { useContext, useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Login from './Pages/Login'
import Register from './Pages/Register'
import UserProfile from './Pages/UserProfile'
import { AppContext } from './Helpers/MyContext'
import Home from './Pages/Home'
import LandingPage from './Pages/LandingPage'
import HomeSeller from './Pages/HomeSeller'
import Cart from './Pages/Cart';
import SellerProfile from './Pages/SellerProfile'
import LoginSeller from './Pages/LoginSeller'
import Contact from './Pages/Contact'
import Wishlist from './Pages/Wishlist'
import Orders from './Pages/Orders'
import BecomeASeller from './Pages/BecomeAseller'
import StoragePage from './Pages/StoragePage'
import TransportPage from './Pages/TransportPage'

const App = () => {

  const { user, setUser } = useContext(AppContext);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/loginSeller" element={<LoginSeller />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={user ? <UserProfile /> : <Navigate to={"/login"} />} />
        <Route path="/homeSeller" element={<HomeSeller />} />
        <Route path="/" element={<LandingPage />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/sellerProfile' element={<SellerProfile />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/home' element={<Home />} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/becomeaseller' element={<BecomeASeller />} />
        <Route path='*' element={<Navigate to={"/home"} />} />
        <Route path='/storage' element={<StoragePage/>} />
        <Route path='/transport' element={<TransportPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App