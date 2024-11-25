import React from 'react'
import { BsGrid3X2Gap } from "react-icons/bs";
import { FaList } from "react-icons/fa";
import VideoBox from '../Components/VideoBox'
import FetchData from '../Components/FetchData';

const Subscriptions = () => {
  return (
    <div className='p-3 pb-20'>
      <div className='flex justify-between'>
        <span><h1 className='text-2xl'>Latest</h1></span>
        <span className='flex justify-center items-center'>
          <h1 className='text-md text-blue-700 font-semibold p-2 hover:bg-[#8A8787] rounded-lg'>Manage</h1>
          <span className='hover:bg-[#8A8787] rounded-full text-xl p-3' ><BsGrid3X2Gap /></span>
          <span className='hover:bg-[#8A8787] rounded-full text-xl p-3' ><FaList /></span>
        </span>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl-grid-cols-4  gap-4 p-1'>
        {/* Mapping Goes here... */}
        <VideoBox />
        {/* <VideoBox />
        <VideoBox />
        <VideoBox /> */}
        <FetchData />
      </div>
      </div>
  )
}

export default Subscriptions
