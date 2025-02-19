import React, { useState ,useEffect} from 'react'
import { Link,useNavigate} from 'react-router-dom';
import axios from 'axios';


const Login = () => {
  const navigate=useNavigate();
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  axios.defaults.withCredentials=true;

  // console.log(params)
   const loginsuccess=async (e)=>{
    e.preventDefault();
    axios.post('https://video-nest-backend.vercel.app/login',{email,password})
    .then(resp=>{
      if(resp.status===200){
        navigate('/home')
      }
      else{
        console.log(resp.data)
      }
    })
  }

  useEffect(() => {
      axios.get("http://localhost:5173/login")
      .then(result=>{
        if (result.status=="200"){
          setAuth(true)
        }
        else{setAuth(false)}

      })
    }, [auth])

  return (
    <div className='bg-[#47474A] pb-10 pl-10 pr-10 pt-5 rounded-lg text-center absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[60%]'>
        <h1 className='text-4xl mb-5 '>Login to access Youtube</h1>
        <form onSubmit={loginsuccess} className='flex flex-col justify-center items-center'>
          <input className='mb-2 outline-none p-5 text-xl text-black rounded-lg' autoComplete='off' type='email' placeholder='e-mail' onChange={(e)=>{setEmail(e.target.value)}} />
          <input className='mb-2 outline-none p-5 text-xl text-black rounded-lg' autoComplete='off' type='password' placeholder='Password' onChange={(e)=>{setPassword(e.target.value)}} />
          <button type='submit' className='px-3 py-2 mr-5 bg-sky-500 hover:bg-sky-600 rounded-lg'>Login</button>
          <p className='text-nowrap text-start text-blue-200'><Link to={'/forgotpassword'}>Forgot password?</Link></p>
          <p className='text-nowrap text-start text-blue-200'><Link to={'/uploadfile'}>Upload file</Link></p>
          <p className='text-nowrap'>Don't have an account?<Link to={"/"} className='text-blue-200 ml-2'>Register</Link></p>
        </form>
    </div>
  )
}

export default Login
