import React, { useEffect } from 'react'
import VideoBox from '../Components/VideoBox';
import { FcGoogle } from "react-icons/fc";
import Logo from '/Assets/channelImage.jpg';
import axios from 'axios';

const Feed = () => {
  
    axios.defaults.withCredentials=true

    useEffect(()=>{
      axios.get('/feed',(req,res)=>{
        console.log(res)
      })
    },[])



  return (
    <div className='flex flex-col px-3 w-full'>
      {/* USER DETAILS */}
      <div className='w-full bg-sky-500 p-5 rounded-lg'>
        <div className=' flex items-center gap-x-5'>
          <img className='h-[150px] w-[150px] rounded-full object-cover' src={Logo} alt="error" />
          <span>
            <p className='text-5xl '>Full Name</p>
            <p className='text-sm text-white leading-10'>@channelId .view channel</p>
          </span>
        </div>
        <span className='flex gap-5 py-3'>
          <button className='flex items-center gap-1 px-5  py-1 bg-[#47474A] hover:bg-[#8A8787] rounded-lg'>Switch account</button>
          <button className='flex items-center gap-1  px-5  py-1 bg-[#47474A] hover:bg-[#8A8787] rounded-lg'><FcGoogle />Google Account</button>
        </span>
      </div>
      {/* HISTORY */}
      <div className='py-3'> 
        <span className='flex justify-between px-3'>
          <p className='text-2xl '>History</p>
          <button className='flex items-center gap-1  px-5  py-1 bg-[#47474A] hover:bg-[#8A8787] rounded-lg'>View all</button>
        </span>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-x-1 text-md py-2'>
          {/* implement a scrollbar */}
          <VideoBox />
          {/* <VideoBox />
          <VideoBox />
          <VideoBox />
          <VideoBox /> */}
        </div>
      </div>
      {/* PLAYLIST */}
      <div className='py-3'> 
        <span className='flex justify-between px-3'>
          <p className='text-2xl '>Playlists</p>
          <button className='flex items-center gap-1  px-5  py-1 bg-[#47474A] hover:bg-[#8A8787] rounded-lg'>View all</button>
        </span>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-x-1 text-md py-2'>
          {/* implement a scrollbar */}
          <VideoBox />
          {/* <VideoBox />
          <VideoBox />
          <VideoBox />
          <VideoBox /> */}
        </div>
      </div>
      {/* WATCH LATER */}
      <div className='py-3'> 
        <span className='flex justify-between px-3'>
          <p className='text-2xl '>Watch Later</p>
          <button className='flex items-center gap-1  px-5  py-1 bg-[#47474A] hover:bg-[#8A8787] rounded-lg'>View all</button>
        </span>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-x-1 text-md py-2'>
          {/* implement a scrollbar */}
          <VideoBox />
          {/* <VideoBox />
          <VideoBox />
          <VideoBox />
          <VideoBox /> */}
        </div>
      </div>
      {/* LIKED VIDEOS */}
      <div className='py-3'> 
        <span className='flex justify-between px-3'>
          <p className='text-2xl '>Liked Videos</p>
          <button className='flex items-center gap-1  px-5  py-1 bg-[#47474A] hover:bg-[#8A8787] rounded-lg'>View all</button>
        </span>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-x-1 text-md py-2'>
          {/* implement a scrollbar */}
          <VideoBox />
          {/* <VideoBox />
          <VideoBox />
          <VideoBox />
          <VideoBox /> */}
        </div>
      </div>
    </div>
  )
}

export default Feed
