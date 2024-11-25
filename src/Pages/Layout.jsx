import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { Routes,Route } from 'react-router-dom'
import { Outlet,Link } from 'react-router-dom';
import '../index.css'
import Home from './Home';
import Nopagefound from './Nopagefound'
import Shorts from './Shorts';
import Subscriptions from './Subscriptions';
import Feed from './Feed';
import Watch from './Watch';
import SearchResults from './SearchResults';
import Login from './Login';
import Register from './Register';
import ForgotPassword from './ForgotPassword';
import Uploadfile from './Uploadfile';
import Resetpassword from './Resetpassword';
import Dashboard from './Dashboard';

import Sidebar from '../Components/Sidebar'
import Navbar from '../Components/Navbar'


const Layout = () => {
  const [auth,setAuth]=useState(false)

  return (
    <div className='w-full contentBox overflow-y-hidden'>
     <>
        <div className='fixed z-5 w-full bg-black'><Navbar auth={auth} setAuth={setAuth} /></div>
      <div className='fixed  items-center justify-center md:justify-start   w-screen h-screen flex mt-[60px]  bg-black'>
        <div className='h-screen fixed hidden md:block w-[13%] md:w-[7%] lg:w-[6%]  '><Sidebar /></div>
        <div className='h-screen w-[94%]  md:ml-[7%] lg:ml-[6%] fixed overflow-y-scroll'>
          <Routes>
            <Route path='/' indexed  element={<Register />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/home'   element={<Home auth={auth} setAuth={setAuth} />}></Route>
            <Route path='/shorts'  element={<Shorts />}></Route>
            <Route path='/Subscriptions'  element={<Subscriptions />}></Route>
            <Route path='/feed'  element={<Feed />}></Route>
            <Route path='/watch/:videoId'  element={<Watch />}></Route>
            <Route path='/searchresults/:query' element={<SearchResults />}></Route>
            <Route path='/forgotpassword' element={<ForgotPassword />}></Route>
            <Route path='/resetpassword/:token' element={<Resetpassword />}></Route>
            <Route path='/nopagefound' element={<Nopagefound />}></Route>
            <Route path='/uploadfile' element={<Uploadfile />}></Route>
            <Route path='/dashboard' element={<Dashboard />}></Route>
          </Routes>
        </div>
      </div></>
    </div>
  )
}

export default Layout
