import { fetchPhotos, fetchVideos } from "../api/mediApi";
import Tabs from "../components/Tabs";
import SearchBar from "../components/SearchBar";
import ResultGrid from "../components/ResultGrid";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function HomePage() {
  const { query } = useSelector((store) => store.search);
  return (
    <div>
        <div className='flex justify-between items-center py-6 px-10 bg-gray-800 text-white'>
        <Link to='/' className='font-medium text-2xl'>MediaSearch</Link>
        <div className='flex gap-5 items-center'>
          <Link className='text-base font-medium active:scale-95 bg-gray-600 text-white rounded px-4 py-2' to='/'>Search</Link>
          <Link className='text-base font-medium active:scale-95 bg-gray-600 text-white rounded px-4 py-2' to='/collection'>Collection</Link>
        </div>
      </div>
      <SearchBar />
      {query != "" ? (
        <div>
          <Tabs />
          <ResultGrid />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default HomePage;
