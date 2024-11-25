import React from 'react'
import { useState ,useEffect} from 'react'

const FetchData = () => {


  const [data,setData]=useState([])
  const [loading,setLoading]=useState(true)
  const [error,setError]=useState()

  // useEffect(()=>{
  //   fetch('https://www.googleapis.com/youtube/v3/search?key=AIzaSyBP2H0594H1JvnSNas0oD2N3oTnxSrWcgQ&channelId=&part=snippet,id&order=date&maxResults=1')
  //   .then(dat=>setData(dat)).then(console.log(data))
  // },[])
  return (
    <div>
      <button>click Her</button>
    </div>
  )
}

export default FetchData
