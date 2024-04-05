import React from 'react'
import one from '../assets/one.png'
import two from '../assets/two.png'
import three from '../assets/three.png'
import four from '../assets/four.png'
import five from '../assets/five.png'

const Corporate = () => {
  return (
    <div className='w-full py-[8rem] px-4'>
    <h1 className='text-black md:text-4xl sm:text-3xl text-2xl font-bold py-8 my-4 text-center flex flex-col justify-center'>Corporate Wellness</h1>
    <div className='max-w-[1240px] mx-auto md:grid grid-cols-5 gap-4'>
       <img className='w-187 h-20 rounded-[10px] mx-auto bg-white my-4' src={one} alt="/" />
       <img className='w-187 h-20 rounded-[10px] mx-auto bg-white my-4' src={two} alt="/" />
       <img className='w-187 h-20 rounded-[10px] mx-auto bg-white my-4' src={three} alt="/" />
       <img className='w-187 h-20 rounded-[10px] mx-auto bg-white my-4' src={four} alt="/" />
       <img className='w-187 h-20 rounded-[10px] mx-auto bg-white my-4' src={five} alt="/" />
    </div>
    <div className='flex flex-col justify-center py-[50px]'>
      <button className='border-solid border-[3px] border-yellow-400 hover:bg-[#FDD22E] text-black w-[300px] h-[50px] rounded-md font-semibold my-6 mx-auto py-auto'>VIEW CORPORATE ENGAGEMENTS</button>
    </div> 
    </div>
  );
}

export default Corporate;
