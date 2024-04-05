import React from 'react'
import { Carousel } from 'react-responsive-3d-carousel'

const youtube = () => {
  return (
    <div className='w-full py-[8rem] px-4'>
    <h1 className='text-black md:text-4xl sm:text-3xl text-2xl font-bold py-8 my-4 text-center flex flex-col justify-center'>Real People. Real Reviews</h1>

    <div>
       <Carousel>
      <iframe src="https://www.youtube.com/embed/LXrh2AJa8nU?si=49JD4kZkpv5TlP_c" title="YouTube video" frameborder="0"/>
      <iframe src="https://www.youtube.com/embed/qZWUvewh1JY?si=nDSTuy7KTeBbtzUm" title="YouTube video" frameborder="0"/>
      <iframe src="https://www.youtube.com/embed/O4ks1kI8qNU?si=p6bEayyQuDbPcBRd" title="YouTube video" frameborder="0"/>
      <iframe src="https://www.youtube.com/embed/heQNK7vTeP0?si=5pHR3S-bP0bfQvhm" title="YouTube video" frameborder="0"/>
      <iframe src="https://www.youtube.com/embed/Gv5VNb5RULM?si=HXG5HoUrwNc7-8br" title="YouTube video" frameborder="0"/>
      <iframe src="https://www.youtube.com/embed/wHNnd73qF1E?si=K8zHhQXkO1gZHUMw" title="YouTube video" frameborder="0"/>
      
    </Carousel>
      
    </div>
    <div className='flex flex-col justify-center py-[50px]'>
      <button className='border-solid border-[3px] border-neutral-400 hover:bg-[#FDD22E] text-black w-[300px] h-[50px] rounded-md font-semibold my-6 mx-auto py-auto'>VIEW MORE ON YOUTUBE</button>
    </div>
    </div>
  )
}

export default youtube
