import React from 'react'
import fetchPhotos, { fetchVideos } from './api/mediApi'

import SearchBar from './components/SearchBar'
function App() {
  return (
    <div className='bg-gray-700 h-screen w-full text-white flex gap-3 '>

  <SearchBar/>
    </div>
  )
}

export default App
