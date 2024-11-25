import React from 'react';
import { useState } from 'react';
import { IoIosSearch } from "react-icons/io";
import { Link } from 'react-router-dom';


const Searchbar = () => {
  const [query,setQuery]=useState("");
  return (
    <span className='flex w-6/12 relative border-1 md:border border-[#47474A] rounded-full'>
      <input id='search' type='search' placeholder='Search' className='w-full py-2 px-5 outline-none text-white bg-transparent rounded-l-full hidden md:inline-block placeholder:px-2' onChange={(e)=>setQuery(e.target.value)}/>
      <Link to={`/searchresults/${query}`} onClick={(e)=>setQuery(e.target.value)}><label htmlFor='search' className='bg-[#47474A] hover:bg-[#8A8787] w-[45px]  md:w-[60px] h-[45px] flex text-2xl items-center justify-center rounded-full md:rounded-l-none  md:rounded-r-full absolute md:relative right-0 top-[-22px] md:top-0 '><IoIosSearch /></label></Link>
    </span>
  )
}

export default Searchbar
