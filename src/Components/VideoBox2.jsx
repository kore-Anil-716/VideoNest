import React from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";

const VideoBox2 = ({url,title,channelName,time}) => {
  return (
    <div className=' w-[100%] h-[220px] grid grid-cols-2 lg:grid-cols-3'>
      <img src={url} className='h-[220px] w-full object-cover rounded overflow-hidden'/>

       <div className='flex h-[220px] gap-2 p-2 items-start lg:col-span-2 pt-3 '>
            <span>
                <img  src={url} alt='profile_photo' className='w-[50px] h-[50px] rounded-full object-fit-cover '/>
            </span>
            <span className='flex-1'>
                <p className='text-md lg:text-xl text-[#FFFFFF] font-semibold leading- text-wrap'>{title}</p>
                <p className='text-sm lg:text-md text-[#E6E7E1] font-regular leading-5  pt-3'>{channelName}</p>
                <p className='text-xs lg:text-sm text-[#C4C0BF] font-regular pt-1'>viewCount.{time}</p>
            </span>
            <span className='text-2xl '><BsThreeDotsVertical /></span>
       </div>
    </div>
  )
}

export default VideoBox2
