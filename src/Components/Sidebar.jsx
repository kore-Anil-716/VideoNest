import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import { SiYoutubeshorts } from "react-icons/si"; 
import { TiHome } from "react-icons/ti";
import { MdSubscriptions } from "react-icons/md";
import { PiYoutubeLogoLight } from "react-icons/pi";

const Sidebar = () => {
  return (
    <div className='bg-black h-full flex flex-col  p-1 gap-1'>
      <Link to={"/home"} className='hover:bg-[#47474A] gap-1 rounded-lg flex flex-col items-center text-sm py-3 '>
        <TiHome  className='text-2xl'/>
        <p className='text-[10px]'>Home</p>
      </Link >
      <Link to={"/shorts"} className='hover:bg-[#47474A] gap-1 rounded-lg flex flex-col items-center text-sm py-3 '>
        <SiYoutubeshorts className='text-xl' />
        <p className='text-[10px]'>Shorts</p>
      </Link >
      <Link to={"/subscriptions"} className='hover:bg-[#47474A] gap-1 rounded-lg flex flex-col items-center text-sm py-3 '>
        <MdSubscriptions className='text-xl' />
        <p className='text-[10px]'>Subscriptions</p>
      </Link >
      <Link to={"/feed"} className='hover:bg-[#47474A] gap-1 rounded-lg flex flex-col items-center text-sm py-3 '>
        <PiYoutubeLogoLight className='text-xl' />
        <p className='text-[10px]'>You</p>
      </Link >
    </div>
  )
}

export default Sidebar
