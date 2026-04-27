import axios from 'axios';

const unsplashKey = import.meta.env.VITE_UNSPLASH_KEY;
const pexelsKey = import.meta.env.VITE_PEXELS_KEY;
const tenorKey = import.meta.env.VITE_TENOR_KEY;

export default async function fetchPhotos(query ,  page = 1 ,  per_page= 20){
    try{
    const res = await  axios.get('https://api.unsplash.com/search/photos',{
        params:{
            query,
            page,
            per_page
        },
        headers:{
            Authorization:`Client-ID ${unsplashKey}`
        }
    });

return res.data
} catch (error) {
   console.error('Error fetching photos:', error);
}

}


export async function fetchVideos(query ,  per_page= 20){
    try{
    const res = await  axios.get('https://api.pexels.com/videos/search',{
        params:{
            query,
            per_page
        },
        headers:{
            Authorization:`Client-ID ${pexelsKey}`
        }
    });

return res.data

} catch (error) {
   console.error('Error fetching videos:', error);
}

}   
