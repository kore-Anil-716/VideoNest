import React, { useState } from 'react'
import { useNavigate,useParams } from 'react-router-dom'
import axios from 'axios'

const Resetpassword = () => {
    const [email,setEmail]=useState('')
    const [newpassword,setNewPassword]=useState('')
    const [Confirmpassword,setConfirmPassword]=useState('')
    const navigate=useNavigate();
    const token=useParams();
    axios.defaults.withCredentials=true;

    const ResetPasswordSuccess=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:3000/resetpassword'+token,{email:email,newpassword:newpassword})
        .then(res=>{
          console.log(res)
        })
        alert("New password set successfully");
        navigate('/login')
    }

  return (
    <div className='bg-[#47474A] pb-10 pl-10 pr-10 pt-5 rounded-lg text-center absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]'>
        <h1 className='text-4xl mb-5 '>Reset your Password</h1>
        <form onSubmit={ResetPasswordSuccess} className='flex flex-col justify-center items-center'>
          <input className='mb-2 outline-none p-5 text-xl text-black rounded-lg' autoComplete='off' type='e-mail' placeholder='E-mail' onChange={(e)=>{setEmail(e.target.value)}} />
          <input className='mb-2 outline-none p-5 text-xl text-black rounded-lg' autoComplete='off' type='password' placeholder='New password' onChange={(e)=>{setNewPassword(e.target.value)}} />
          <input className='mb-2 outline-none p-5 text-xl text-black rounded-lg' autoComplete='off' type='password' placeholder='confirm password' onChange={(e)=>{setConfirmPassword(e.target.value)}} />
          <button type='submit' className='px-3 py-2 ml-5 bg-red-500 hover:bg-red-600 rounded-lg'>Reset Password</button>
          {/* <p className='text-nowrap'>Already have an account?<Link to={'/login'} className='text-blue-200 ml-2'>Login</Link></p> */}
        </form>
    </div>
  )
}

export default Resetpassword
