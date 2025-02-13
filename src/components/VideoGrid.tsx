import React from 'react'
import VideoCard from './VideoCard'

const Videos = [{
    title:"Clone youtube by #Tailwind CSS in next.js | Code with me",
      image:"photo.png",
      thumbImage:"photo.png",
      author:"Dhruv Verma",
      views:"1.2M",
      timestamp:"12 days ago"    
},{
    title:"Clone X by #Tailwind CSS in next.js | Code with me",
      image:"photo.png",
      thumbImage:"photo.png",
      author:"Dhruv Verma",
      views:"1.2M",
      timestamp:"12 days ago"    
},{
    title:"Clone Instagram by #Tailwind CSS in next.js | Code with me",
      image:"photo.png",
      thumbImage:"photo.png",
      author:"Dhruv Verma",
      views:"1.2M",
      timestamp:"12 days ago"    
},{
    title:"Clone Facebook by #Tailwind CSS in next.js | Code with me",
      image:"photo.png",
      thumbImage:"photo.png",
      author:"Dhruv Verma",
      views:"1.2M",
      timestamp:"12 days ago"    
},{
    title:"Clone Facebook by #Tailwind CSS in next.js | Code with me",
      image:"photo.png",
      thumbImage:"photo.png",
      author:"Dhruv Verma",
      views:"1.2M",
      timestamp:"12 days ago"    
},{
    title:"Clone Facebook by #Tailwind CSS in next.js | Code with me",
      image:"photo.png",
      thumbImage:"photo.png",
      author:"Dhruv Verma",
      views:"1.2M",
      timestamp:"12 days ago"    
},{
    title:"Clone Facebook by #Tailwind CSS in next.js | Code with me",
      image:"photo.png",
      thumbImage:"photo.png",
      author:"Dhruv Verma",
      views:"1.2M",
      timestamp:"12 days ago"    
},{
    title:"Clone Facebook by #Tailwind CSS in next.js | Code with me",
      image:"photo.png",
      thumbImage:"photo.png",
      author:"Dhruv Verma",
      views:"1.2M",
      timestamp:"12 days ago"    
},{
    title:"Clone Facebook by #Tailwind CSS in next.js | Code with me",
      image:"photo.png",
      thumbImage:"photo.png",
      author:"Dhruv Verma",
      views:"1.2M",
      timestamp:"12 days ago"    
},{
    title:"Clone Facebook by #Tailwind CSS in next.js | Code with me",
      image:"photo.png",
      thumbImage:"photo.png",
      author:"Dhruv Verma",
      views:"1.2M",
      timestamp:"12 days ago"    
},{
    title:"Clone Facebook by #Tailwind CSS in next.js | Code with me",
      image:"photo.png",
      thumbImage:"photo.png",
      author:"Dhruv Verma",
      views:"1.2M",
      timestamp:"12 days ago"    
},{
    title:"Clone Facebook by #Tailwind CSS in next.js | Code with me",
      image:"photo.png",
      thumbImage:"photo.png",
      author:"Dhruv Verma",
      views:"1.2M",
      timestamp:"12 days ago"    
}]
const VideoGrid = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'> 
        {Videos.map(video => <div>
            <VideoCard 
                title={video.title}
                image={video.image}
                thumbImage={video.thumbImage}
                author={video.author}
                views={video.views}
                timestamp={video.timestamp}>
            </VideoCard>
        </div>)}
    </div>
  )
}

export default VideoGrid