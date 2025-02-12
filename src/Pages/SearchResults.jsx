import React, { useState, useEffect } from 'react';
import axios from 'axios';
import VideoBox2 from '../Components/VideoBox2';
import { Link, useParams } from 'react-router-dom';

const SearchResults = () => {
  const { query } = useParams(); // Extract query string from route params
  const [api_data, setApiData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const API_KEY = 'AIzaSyCNiovmM17gISPTkgZWSctrTW99Gb4yMKY';
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(
            query
          )}&type=video&maxResults=15&regionCode=IN&relevanceLanguage=te&key=${API_KEY}`
        );
        const data = await response.json();
        setApiData(data.items || []); // Handle case where items might be undefined
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (query) fetchData(); // Only fetch if query exists
  }, [query]); // Run effect whenever query changes

  return (
    <div className='pb-20'>
      <div className='flex flex-col gap-5'>
        {api_data.length > 0 ? (
          api_data.map((video, index) => (
            <Link
              to={{
                pathname: `/watch/${video.id.videoId}`,
              }}
              key={index}
            >
              <VideoBox2
                url={video.snippet.thumbnails.high.url}
                title={video.snippet.title}
                channelName={video.snippet.channelTitle}
                time={video.snippet.publishedAt}
              />
            </Link>
          ))
        ) : (
          <p>No videos found for "{query}".</p>
        )}
      </div>
    </div>
  );
};

export default SearchResults;















// import React from 'react'
// import { useState,useEffect } from 'react';
// import axios from 'axios';
// import VideoBox2 from '../Components/VideoBox2';
// import { Link } from 'react-router-dom';
// import { useParams } from 'react-router-dom';

// const SearchResults = () => {
//   const query=useParams();
//   axios.defaults.withCredentials=true;
//   const [api_data,setapi_data]=useState([])
//   useEffect(()=>{
//     const fetchdata=async ()=>{
//       // https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&type=video&maxResults=3&regionCode=IN&relevanceLanguage=te&key=AIzaSyCNiovmM17gISPTkgZWSctrTW99Gb4yMKY&q

//      await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&type=video&maxResults=3&regionCode=IN&relevanceLanguage=te&key=AIzaSyCNiovmM17gISPTkgZWSctrTW99Gb4yMKY&q`)
//       .then(res=>res.json().then(data=>setapi_data(data.items)))
    
//     }
//     fetchdata()
//   },[])
//   console.log(api_data)

  
//   return (
//     <div className='pb-20'>
//       {/* <Dragger /> */}
//       {/* Mapping can be done here */}
//       <div className='flex flex-col gap-5'>
//         {
//           api_data.map((video,index) => ( 
//              <Link to={{
//               pathname: `/watch/${video.id.videoId}`
      
//             }}  key={index} onClick={() => setVideoDetails(video)}><VideoBox2  url={video.snippet.thumbnails.high.url} title={video.snippet.title} channelName={video.snippet.channelTitle} time={video.snippet.publishAt}/></Link>
//           )
//         )
//         }
//         </div>
//     </div>
//   )
// }

// export default SearchResults
