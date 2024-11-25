import React,{useState,useEffect} from 'react';
import { Link,Navigate, useNavigate } from 'react-router-dom';
import { AiFillAudio } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import Logo2 from '/Assets/Logo2.png'
import Searchbar from './Searchbar';
import { RiVideoAddLine } from "react-icons/ri";
import { FaRegBell } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
// const navItems=[<GiHamburgerMenu />,Logo,<AiFillAudio />];
import axios from 'axios';

const Navbar = ({auth,setAuth}) => {
  const navigate=useNavigate()
  // const [auth,setAuth]=useState(true)
  const [enableSidebar,setEnableSidebar]=useState(false);
  axios.defaults.withCredentials=true;
  const handleclick=()=>{
    setEnableSidebar(!enableSidebar)
    alert(enableSidebar)
  }

  const handleUser=()=>{
    axios.get("http://localhost:5173/logout")
    .then(res=>{
      navigate("/login")
      setAuth(false)
    }).catch(err=>console.log(err))
  }
  const handlefileUpload=(e)=>{
    navigate("/uploadfile")
  }
  const handleUserInfo=(e)=>{
    navigate("/feed")
  }
  return (
    <nav className=' bg-black px-5 flex items-center justify-between'>
      <span className='flex items-center gap-1'>
        <span className='hover:bg-[#47474A] p-2 rounded-full' onClick={handleclick}><RxHamburgerMenu className='text-[22px]' /></span>
        <img className='w-[120px] h-[50px] object-cover' src={Logo2} alt='error' />
      </span>
      <>
        <Searchbar />
        <span className='p-2 rounded-full bg-[#47474A] hover:bg-[#8A8787] text-2xl ml-[5px] md:ml-[-10vw]'><AiFillAudio /></span>
      </>
      <>
        <span className='px-4 py-2 ml-2 rounded-lg bg-sky-500 hover:bg-sky-600' onClick={handleUser}>
          {
            auth?"Logout":"Login"
          }
        </span>
      </>
      <span className='flex text-2xl gap-2'>
        <span className='p-2 rounded-full bg:transparent hover:bg-[#8A8787]' onClick={handlefileUpload}><RiVideoAddLine /></span>
        <span className='p-2 rounded-full bg:transparent hover:bg-[#8A8787]'><FaRegBell /></span>
        <span className='p-2 rounded-full bg:transparent hover:bg-[#8A8787]' onClick={handleUserInfo}><FaRegUserCircle /></span>
      </span>
    </nav>
  )
}

export default Navbar
