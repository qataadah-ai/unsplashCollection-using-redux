import React from 'react'
import { addCollection } from '../redux/features/collectionSlice';
import { useDispatch } from 'react-redux';

function ResultCard({ item }) {
let dispatch = useDispatch();
const addTocollection = (item) => {
    dispatch(addCollection(item))
    }
    return (
           <div className='w-[18vw] relative h-80 bg-white rounded-xl overflow-hidden'>
            <a target='_blank' className='h-full' href={item.url}>
                {item.type == 'photo' ? <img className='h-full w-full object-cover object-center' src={item.src} alt="" /> : ''}
                {item.type == 'video' ? <video className='h-full w-full object-cover object-center' autoPlay loop muted src={item.src}></video> : ''}

            </a>
            <div id='bottom' className='flex justify-between gap-3 items-center w-full px-4 py-6 absolute bottom-0 text-white'>
                <h2 className='text-lg font-semibold capitalize h-14 overflow-hidden'>{item.title}</h2>
                <button
                  onClick={() => addTocollection(item)}
                    className='bg-red-600 hover:bg-red-700 active:scale-95 text-white rounded px-3 py-1 cursor-pointer font-medium'
                >
                    Save
                </button>
            </div>
        </div>
    )
}

export default ResultCard
