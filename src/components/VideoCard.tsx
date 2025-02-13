import React from 'react'

const VideoCard = (props:any) => {
  return (
    <div className='p-2'>
        <img className='rounded-xl cursor-pointer' src={props.image}></img>
        <div className='grid grid-cols-12 pt-2'>

            <div className='col-span-1 ml-2 '>
                <img className='rounded-full w-10 h-10 cursor-pointer' src={props.thumbImage}></img>
            </div>

            <div className='col-span-11 pl-0 ml-3 text-base'>
                <div className='cursor-pointer'>
                {props.title}
                </div>
                <div className='col-span-11 text-gray-400 text-sm cursor-pointer'>
                {props.author}
                </div>
            <div className='col-span-11 text-gray-400 text-sm'>
                {props.views} | {props.timestamp}
            </div>
            </div>

        </div>
    </div>
  )
}

export default VideoCard