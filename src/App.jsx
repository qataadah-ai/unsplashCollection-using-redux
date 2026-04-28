import React from 'react'
import  {fetchPhotos, fetchVideos } from './api/mediApi'
import Tabs from './components/Tabs'
import SearchBar from './components/SearchBar'
import ResultGrid from './components/ResultGrid'

function App() {
  return (
    <div className='bg-gray-700 h-screen w-full text-white gap-3 '>
  <SearchBar/>
  <Tabs/>
  <ResultGrid/>
    </div>
  )
}

export default App
