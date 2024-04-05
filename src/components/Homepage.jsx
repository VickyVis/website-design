import React from 'react'



const Homepage = () => {
  return (
    <div>
    <div className='w-full h-full object-cover bg-[url(E:\Eddyease\react-tailwind\src\assets\bg.png)]'>
         
    <div className='max-w-[1140px] m-auto'>
      <div className=' top-[20%] w-full md:-[50%] max-w-[700px] mx-auto h-full flex flex-col p-4'>
    <h1 className='md:text-5xl sm:text-6xl text-4xl font-bold md:py-4 text-white '>Nutrition Plans for Individuals & Corporates</h1>
           <p className='text-[#000000] md:text-3xl sm:text-4xl text-xl font-bold my-2'>AFFORDABLE & EFFECTVE/ ONLINE-ONLY</p>
           <p className='md:text-2xl text-xl font-bold my-2 text-white'>Nutritionist Vaniraj has assisted 3000+ people in their journey to #livehealthy</p>
           <p className='md:text-2xl text-xl font-bold text-[#A118D1] my-2'>100% consultantions are directly with the founder</p>
           <p className='md:text-lg text-lg font-medium my-2'>Get Guidance for Weight Loss/ Weight Gain Diets, Sports & Workout Nutrition Diets for PCOD, Diabetes, Hypertension, Pre/ Post Pregnancy & Kids</p>
           <button className='border-solid border-[3px] border-white-500bg-[#FFFFFF] hover:bg-[#FFFFFF] hover:text-black text-white w-[400px] h-[50px] rounded-md font-bold my-8 mx-8 p-auto'>BOOK YOUR APPOINTMENT</button>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Homepage
