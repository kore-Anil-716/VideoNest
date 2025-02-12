import React, {createContext,useState ,useEffect} from 'react'
import {Link} from 'react-router-dom'
import Dragger from '../Components/Dragger'
import VideoBox from '../Components/VideoBox'
import Sidebar2 from '../Components/Sidebar2'
import axios from 'axios'
import { useVideo } from '../Components/VideoContext'

const key1='AIzaSyBP2H0594H1JvnSNas0oD2N3oTnxSrWcgQ'
const key2='AIzaSyCNiovmM17gISPTkgZWSctrTW99Gb4yMKY'
const key3='AIzaSyBbb29faIoYSiPUpmcqd58tlvOgh6JrrZM'
const key4='AIzaSyBcrCyi2vMWkaWnPzlPEIUfb4CWZrxpd-g'

const Home = ({auth,setAuth}) => {
  const [api_data,setapi_data]=useState([])
  const videoContext=createContext();
  const { setVideoDetails } = useVideo();
  axios.defaults.withCredentials=true;


  useEffect(() => {
    axios.get("http://localhost:5173/home")
    .then(result=>{
      if (result.status=="200"){
        setAuth(true)
      }
      else{setAuth(false)}

    })
  }, [auth])
  useEffect(()=>{
    const fetchdata=async ()=>{
     await fetch('https://www.googleapis.com/youtube/v3/search?key=AIzaSyBP2H0594H1JvnSNas0oD2N3oTnxSrWcgQ&relevanceLanguage=en&channelId=&part=snippet&order=date&maxResults=15')
      .then(res=>res.json().then(data=>setapi_data(data.items)))
    
    }
    fetchdata()
  },[])
  console.log(api_data)


  return (
    <div className='h-full w-auto bg-transparent'>
      <div className=' w-full p-1'><Dragger /></div>
        {/* <h1>welcome to the home page</h1> */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4  md:gap-4 p-3 place-items-center pb-20'>
        {/* Here videos fetched from api are mapped using Mapping function */}
        {
          api_data.map((video,index) => ( 
             <Link to={{
              pathname: `/watch/${video.id.videoId}`
      
            }}  key={index} onClick={() => setVideoDetails(video)}><VideoBox  url={video.snippet.thumbnails.high.url} title={video.snippet.title} channelName={video.snippet.channelTitle} time={video.snippet.publishAt}/></Link>
          )
        )
        }
      </div>
    </div>
  )
}

export default Home
