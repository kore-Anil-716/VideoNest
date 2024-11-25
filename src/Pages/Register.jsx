import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

const Register = ({auth,setAuth}) => {
 const [name,setName]=useState('')
 const [password,setPassword]=useState('')
 const [email,setEmail]=useState('')
 const navigate=useNavigate();
 axios.defaults.withCredentials=true;


 const Registrationsuccess=(e)=>{
  e.preventDefault();
  axios.post('http://localhost:3000/',{name,password,email})
  .then(alert('user created successfully'))
  .then(navigate('/login'))

 }

//  axios.defaults.withCredentials=true;
//  useEffect(() => {
  //  axios.get("http://localhost:5173/")
  //  .then(result=>{
  //    if (result.status=="200"){
  //      setAuth(true)
  //    }
  //    else{setAuth(false)}


  //  })
//  }, [auth])

  return (
    <div className='bg-[#47474A] pb-2 pl-10 pr-10 pt-2 rounded-lg text-center absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[60%]'>
        <h1 className='text-4xl mb-5 '>Create Your account on VideoNest</h1>
        <form onSubmit={Registrationsuccess} className='flex flex-col justify-center items-center'>
          <input className='mb-2 outline-none p-5 text-xl text-black rounded-lg' autoComplete='off' type='text' placeholder='Name' onChange={(e)=>{setName(e.target.value)}} />
          <input className='mb-2 outline-none p-5 text-xl text-black rounded-lg' autoComplete='off' type='email' placeholder='e-mail' onChange={(e)=>{setEmail(e.target.value)}} />
          <input className='mb-2 outline-none p-5 text-xl text-black rounded-lg' autoComplete='off' type='password' placeholder='Password' onChange={(e)=>{setPassword(e.target.value)}} />
          <button type='submit' className='px-3 py-2 ml-5 bg-sky-500 hover:bg-sky-600 rounded-lg'>Sign Up</button>
          <p className='text-nowrap'>Already have an account?<Link to={'/login'} className='text-blue-200 ml-2'>Login</Link></p>
        </form>
    </div>
  )
}

export default Register
