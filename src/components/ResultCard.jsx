import React from 'react'

function ResultCard({ item }) {
    return (
        <div className='w-[18vw] h-80 bg-white rounded-lg shadow-md overflow-hidden'>
         <a target='_blank' className='h-full' href={item.url}>
                {item.type == 'photo' ? <img className='h-full w-full object-cover object-center' src={item.src} alt="" /> : ''}
                {item.type == 'video' ? <video className='h-full w-full object-cover object-center' autoPlay loop muted src={item.src}></video> : ''}
            </a>
            <h1>{item.title}</h1>
        </div>
    )
}

export default ResultCard
