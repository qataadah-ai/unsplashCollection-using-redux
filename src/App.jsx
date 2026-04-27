import React from 'react'
import fetchPhotos, { fetchVideos } from './api/mediApi'
import { fetchGif } from './api/mediApi'
function App() {
  return (
    <div className='bg-gray-700 h-screen w-full text-white flex gap-3 '>

      <div className='flex h-20 gap-3'>
      <button className='bg-green-300 p-3'
      onClick={async ()=>{
        const data = await fetchPhotos("cat")
        console.log(data.results);
      }}
      >get photos</button>

      <button  className='bg-green-300 p-3'
      onClick={async ()=>{
        const data = await fetchVideos("cat")
        
        console.log(data.videos)
      } }>Get videos</button>

    </div>
    </div>
  )
}

export default App
