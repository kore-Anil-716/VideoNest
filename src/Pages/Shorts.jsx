import React from 'react'
import { BiSolidLike } from "react-icons/bi";
import { AiFillDislike } from "react-icons/ai";
import { MdOutlineChat } from "react-icons/md";
import { FaShare } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import channelImage from '../../public/Assets/channelImage.jpg'

const Shorts = () => {
   {/* here the short videos are mapped from the api results */}
  return (
    <div className='mb-2 flex flex-col md:items-center'>
      <div className='flex gap-2 p-1'>
        <div className='h-[90vh] w-auto'>
          <video controls className='h-full w-[360px] rounded-lg'>
              <source src=''/>
          </video>
        </div>
        <div className='h-[90vh] flex flex-col gap-y-2 justify-end pb-5' >
          <span className='flex flex-col justify-center items-center'>
            <span className='w-[50px] h-[50px] rounded-full text-2xl bg-zinc-600 flex flex-col justify-center items-center '>
              <BiSolidLike />
            </span>
              <p className='text-[12px] '>Like</p>
          </span>
          <span className='flex flex-col justify-center items-center'>
            <span className='w-[50px] h-[50px] rounded-full text-2xl bg-zinc-600 flex flex-col justify-center items-center p-2'>
              <AiFillDislike />
            </span>
              <p className='text-[12px] '>Dislike</p>
          </span>
          <span className='flex flex-col justify-center items-center'>
            <span className='w-[50px] h-[50px] rounded-full text-2xl bg-zinc-600 flex flex-col justify-center items-center p-2'>
              <MdOutlineChat />
            </span>
              <p className='text-[12px] '>Comment</p>
          </span>
          <span className='flex flex-col justify-center items-center'>
            <span className='w-[50px] h-[50px] rounded-full text-2xl bg-zinc-600 flex flex-col justify-center items-center p-2'>
              <FaShare />
            </span>
              <p className='text-[12px] '>Share</p>
          </span>
          <span className='flex flex-col justify-center items-center'>
            <span className='w-[50px] h-[50px] rounded-full text-2xl bg-zinc-600 flex flex-col justify-center items-center p-2'>
              <BsThreeDotsVertical />
            </span>
          </span>
          <span className='flex flex-col justify-center items-center'>
            <img className='w-[50px] h-[50px] rounded-lg hover:rounded-full object-cover'  src={channelImage} alt='error' />
          </span>
          {/* bg:transparent hover:bg-[#8A8787] */}
        </div>
      </div>
    </div>
  )
}

export default Shorts
