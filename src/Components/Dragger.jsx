import React from 'react';
import { FaChevronCircleLeft } from "react-icons/fa";
import { FaChevronCircleRight } from "react-icons/fa";
import '../index.css'
const RecentMostSearched=[<FaChevronCircleLeft className='text-xl'/>,"All","Music",'Javascript','Computer Science','TFI',"Prabhas",'Kollywood','Jabardasth',"local",'Science and Fiction','Animations',"Earning","Money",'Entertainment',"Prabhas",'Kollywood','Jabardasth',"local",'Science and Fiction','Animations',"Earning","Money",'Entertainment',"Prabhas",'Kollywood','Jabardasth',"local",'Science and Fiction','Animations',"Earning","Money",'Entertainment',"Prabhas",'Kollywood','Jabardasth',"local",'Science and Fiction','Animations',"Earning","Money",'Entertainment',<FaChevronCircleRight className='text-xl'/>]

const Dragger = () => {

  const handleMouseMove=(e)=>{
    console.log(e.target.offsetWidth)
    console.log(e.clientX)
  }
  return (
    <div onClick={handleMouseMove} className='Dragger w-full overflow-x-hidden'>
      <ul className='flex gap-1 items-center text-nowrap p-1 text-sm font-light'>
          {
            RecentMostSearched.map((item,index)=>(<li key={index} className={`${index===0 || index===(RecentMostSearched.length-1)? "bg-transparent" : "bg-[#5C5858]"} py-1 px-2 rounded-lg hover:bg-[#8A8787]`}>{item}</li>))
          }
      </ul>
    </div>
  )
}

export default Dragger
