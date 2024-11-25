import React, { useState } from 'react'
import {Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const ForgotPassword = () => {

    const [email,setEmail]=useState('')
    const navigate=useNavigate()
    axios.defaults.withCredentials=true;


    const forgotpasswordSuccess=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:3000/forgotpassword',{email:email})
        alert("check your mail")
        navigate('/login')
    }

  return ( 
    <div className='bg-[#47474A] pb-10 pl-10 pr-10 pt-5 rounded-lg text-center absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]'>
        <h1 className='text-4xl mb-5 '>Get your Reset password link</h1>
        <form onSubmit={forgotpasswordSuccess} className='flex flex-col justify-center items-center'>
          <input className='mb-2 outline-none p-5 text-xl text-black rounded-lg' autoComplete='off' type='email' placeholder='e-mail' onChange={(e)=>{setEmail(e.target.value)}} />
          <button type='submit' className='px-3 py-2 ml-5 bg-red-500 hover:bg-red-600 rounded-lg'>Get Link</button>
          <p className='text-nowrap text-blue-200'><Link to={'/'}>Back to Login</Link></p>
          {/* <p className='text-nowrap'>Already have an account?<Link to={'/login'} className='text-blue-200 ml-2'>Login</Link></p> */}
        </form>
    </div>
  )
}

export default ForgotPassword