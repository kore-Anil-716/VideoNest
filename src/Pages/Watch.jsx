import React from 'react'
import YouTube from 'react-youtube';
import VideoBox from '../Components/VideoBox'
import { FaRegBell } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6";
import {  BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { FaShare } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { LuBadgeDollarSign } from "react-icons/lu";
import { RxScissors } from "react-icons/rx";
import { HiOutlineSquaresPlus } from "react-icons/hi2";
import { MdOutlineFileDownload } from "react-icons/md";
import { MdOutlineSort } from "react-icons/md";
import { RiExpandUpDownLine } from "react-icons/ri";
import { BsEmojiSmile } from "react-icons/bs";
import channelImage from '/Assets/channelImage.jpg';
import { useParams,useLocation } from 'react-router-dom';
import { useVideo } from '../Components/VideoContext';


// import { useParams } from 'react-router-dom';

// const Watch = () => {
//   const { id } = useParams(); // Extracts "2pRZyz_Mi1rM6cJn" from the URL

//   return (
//     <iframe width="100%" height="100%" src="https://www.youtube.com/embed/l3ZQJipGBis?si=wbghX3RT4ZAnI5L8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
//   );
// };

// export default Watch;






const Watch = () => {
  const {videoDetails}=useVideo()
  const {videoId}=useParams();
  const {snippet,id}=videoDetails;
  const {thumbnails,title,channelTitle}=snippet;
  // console.log(snippet,id)
  const url='https://www.youtube.com/embed/'+videoId;
  return (
    <div className='h-auto flex flex-col lg:flex-wrap'>
      <div className='w-full flex flex-col lg:flex-row mt-10'>
        {/* video template goes here */}
        <div className='w-full h-auto lg:w-7/12 flex flex-col'>

<iframe
      width="100%"
      height="315"
      src={url}
      rel="0"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>

          {/* <div className='grid grid-cols-2  md:inline  gap-2 p-3 place-items-center'>
            <VideoBox />
            <VideoBox />
            <VideoBox />
            <VideoBox />
            <VideoBox />
          </div> */}

        </div>
        {/* video description goes here */}
        <div className='w-full h-[360px] md:h-auto  lg:w-5/12  p-2 mt-5'>
          <div className='p-1'>
            <p className='text-lg text-wrap '>{title}</p>
          </div>
          <div className='p-2'>
              <div className='flex flex-wrap'>
                  <span className='flex gap-x-2'>
                    <img className='w-[50px] h-[50px] object-cover rounded-full' src={thumbnails.high.url} alt='error' />
                    <span>
                        <p className='text-[18px] text-nowrap leading-tight'>{channelTitle}</p>
                        <p className='text-[13px] text-nowrap leading-none text-slate-300'>subscribers count</p>
                    </span>
                    <span className='p-2 flex items-center ml-2  justify-center gap-x-5 bg-[#47474A] hover:bg-[#8A8787] text-white text-xl px-3 rounded-full'>
                        <FaRegBell />
                        <FaChevronDown />
                    </span>
                  </span>
                  <span className='p-2 flex  gap-x-4 items-center ml-2 bg-[#47474A] hover:bg-[#8A8787] text-white  px-3 rounded-full text-xl'>
                    <p className='text-sm border-r-2 px-1 text-nowrap'><BiLike className='text-xl inline'/>&nbsp;724</p>
                    <BiDislike className='text-xl inline' />
                  </span>
                  <div className='w-full flex justify-evenly mt-5  -ml-[30px]'>
                    <span className='flex items-center p-2 hover:bg-[#8A8787] justify-center bg-[#47474A] text-white  px-[10px] rounded-full'>
                      <FaShare className='text-xl' />
                    </span>
                    <span className='flex items-center p-2 hover:bg-[#8A8787] justify-center bg-[#47474A] text-white  px-[10px] rounded-full'>
                      <MdOutlineFileDownload className='text-xl' />
                    </span>
                    <span className='flex items-center p-2 hover:bg-[#8A8787]  justify-center bg-[#47474A] text-white  md:inline-flex px-[10px] rounded-full'>
                      <RxScissors className='text-xl' />
                    </span>
                    <span className='flex items-center p-2 hover:bg-[#8A8787] justify-center bg-[#47474A] text-white  px-[10px] rounded-full'>
                      <LuBadgeDollarSign className='text-xl' />
                    </span>
                    <span className='flex items-center p-2 hover:bg-[#8A8787] md:inline-flex  justify-center bg-[#47474A] text-white  px-[10px] rounded-full'>
                      <HiOutlineSquaresPlus className='text-xl' />
                    </span>
                    <span className='flex items-center p-2 hover:bg-[#8A8787] justify-center bg-[#47474A] text-white  px-[10px] rounded-full'>
                      <BsThreeDotsVertical className='text-xl' />
                    </span>
                  </div>
              </div>
              {/* COMMENTs */}
              {/* <div className='mt-3'> */}
                {/* <span className='flex justify-between '> */}
                  {/* <p className='px-3 py-1 hover:bg-[#47474A] rounded-lg'>57 Comments</p> */}
                  {/* <span className='flex gap-x-2'> */}
                    {/* <p className='px-3 py-1 hover:bg-[#47474A] rounded-lg'><MdOutlineSort  className='inline text-xl'/>&nbsp;Sort by</p> */}
                    {/* <p className='px-3 py-1 hover:bg-[#47474A] rounded-lg'><RiExpandUpDownLine className='inline text-xl' />&nbsp;Expand</p> */}
                  {/* </span> */}
                {/* </span> */}
                {/* <div className='mt-3 flex'> */}
                  {/* <img src={channelImage} className='w-[50px] h-[50px] mr-3 rounded-full' alt='error' /> */}
                  {/* <form className='w-full '> */}
                    {/* <input type='text' placeholder='Add a comment...' className='w-full px-2 text-sm focus:border-b-2 outline-none h-9 mb-2'/> */}
                    {/* <div className='flex items-center justify-between'> */}
                      {/* <span className='p-2 hover:bg-[#47474A] rounded-full'><BsEmojiSmile className='text-xl '/></span> */}
                      {/* <span className='flex gap-x-1'> */}
                        {/* <p className='px-3 py-1 bg-[#47474A] rounded-lg'>Cancel</p> */}
                        {/* <p className='px-3 py-1 bg-[#47474A] rounded-lg'>Comment</p> */}
                      {/* </span> */}
                    {/* </div> */}
                  {/* </form> */}
                {/* </div> */}
                {/* HERE GOES THE MAPPPING OF COMMENTS */}
                {/* <div className='flex gap-x-2 mt-3'> */}
                  {/* <span> */}
                    {/* <img src={channelImage} className='h-[30px] w-[30px] rounded-full' alt='error' /> */}
                  {/* </span> */}
                  {/* <span> */}
                    {/* <p className='text-sm'><span>@usernname</span><br /> */}
                      {/* Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, repellendus.</p> */}
                    {/* <span className='flex items-center gap-x-2'> */}
                      {/* <p className='bg-[#47474A] p-2 rounded-full'><BiDislike /></p> */}
                      {/* <p className='bg-[#47474A] p-2 rounded-full'><BiLike /></p> */}
                      {/* <p className='bg-[#47474A] px-2 py-1 rounded-full text-sm'>Reply</p> */}
                    {/* </span> */}
                  {/* </span> */}
                  {/* <span><BsThreeDotsVertical /></span> */}
                {/* </div> */}
                {/* <div className='flex gap-x-2 mt-3'> */}
                  {/* <span> */}
                    {/* <img src={channelImage} className='h-[30px] w-[30px] rounded-full' alt='error' /> */}
                  {/* </span> */}
                  {/* <span> */}
                    {/* <p className='text-sm'><span>@usernname</span><br /> */}
                      {/* Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, repellendus.</p> */}
                    {/* <span className='flex items-center gap-x-2'> */}
                      {/* <p className='bg-[#47474A] p-2 rounded-full'><BiDislike /></p> */}
                      {/* <p className='bg-[#47474A] p-2 rounded-full'><BiLike /></p> */}
                      {/* <p className='bg-[#47474A] px-2 py-1 rounded-full text-sm'>Reply</p> */}
                    {/* </span> */}
                  {/* </span> */}
                  {/* <span><BsThreeDotsVertical /></span> */}
                {/* </div> */}
              {/* </div> */}
          </div>
        </div>
      </div>




      <div className='mt-8'>
        <h2 className='text-xl ml-2'>Related to your search</h2>
        <div className='grid grid-cols-2 lg:grid-cols-4  gap-4  md:gap-4 p-3 place-items-center'>
          <VideoBox />
          <VideoBox />
          <VideoBox />
          <VideoBox />
          <VideoBox />
        </div>
      </div>
    </div>
  )
}

export default Watch
