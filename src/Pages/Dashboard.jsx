import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Dashboard =() => {
    // const [msg,setMsg]=useState("");
    axios.defaults.withCredentials=true;
    axios.post('http://localhost:3000/dashboard')
    .then(res=>{
      if (res.status){
        console.log(res.msg)
      }else{
        console.log("no response found")
      }
    })

  return (
    <div>
      <p>hi from the dashboard,and the message is:</p>
    </div>
  )
}

export default Dashboard
