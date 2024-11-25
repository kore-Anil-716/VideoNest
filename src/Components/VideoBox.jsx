import React from 'react'
import channelImage from '/Assets/channelImage.jpg';
import { BsThreeDotsVertical } from "react-icons/bs";

const VideoBox = ({url,title,channelName,time}) => {
  
  return (
    <div className='rounded-lg w-[100%] '>
      <img src={url} className='w-full h-full object-cover'/>

       <div className='flex gap-2 p-2'>
        <span>
            <img  src={url} alt='profile_photo' className='w-[50px] h-[50px] rounded-full object-fit-cover '/>
        </span>
        <span className='flex-1'>
            <p className='text-md text-[#FFFFFF] font-semibold leading-5 text-wrap'>{title}</p>
            <p className='text-sm text-[#E6E7E1] font-regular leading-5'>{channelName}</p>
            <p className='text-xs text-[#C4C0BF] font-regular'>viewCount.{time}</p>
        </span>
        <span className='text-2xl '><BsThreeDotsVertical /></span>
       </div>
    </div>
  )
}

export default VideoBox




       {/* <iframe
          width="100%"
          height="100%"
          src={url}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe> */}