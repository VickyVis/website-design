import React from 'react'
import corona from '../assets/corona.png'

const Body = () => {
  return (
    <div className='w-full py-[8rem] px-4 bg-white'>
       <div className='max-w-[1240px] mx-auto md:grid grid-cols-2 gap-8'>
           <div className='w-full shadow-md flex flex-col p-4 rounded-lg h-[170px] mb-4 bg-stone-200'>
              <h1 className='text-3xl font-medium text-center'>instahealth</h1>
              <p className='text-center mt-[-12px]'> <span className='text-[8px] font-medium h-[5px] text-center text-red-500'>corporate wellness solution </span><span className='text-[8px] font-medium h-[5px] text-center text-black'> www.instahealth.in</span></p>
              <p className='px-4 mt-4 font-medium text-lg'>If you're looking for corporate wellness solutions, head over to our Corporate Offering Page</p>
           </div>

           <div className='w-full shadow-md flex flex-col p-4 m-auto rounded-lg h-[170px] mb-4 bg-red-200'>
           <div className='m-auto'>
             <img className='float-left w-10 h=10 rounded-lg mx-3 ' src={corona} alt="/" />
             <p className='m-auto'><span className='text-xl text-red-600 font-bold'>Stay Safe. Keep Safe:</span><span> Read how are we handling #Coronavirus situation as a company. We've also put together verified info and</span><span className='underline font-semibold'> Immunity-building Diet Plans & recipes</span><span> for you to prepare yourself during these times.</span></p>
            </div>
           </div>
        
        </div>

        <div className='flex flex-col justify-center max-w-[1240px] mx-auto py-[8rem]'>
            <h1 className='text-black md:text-4xl sm:text-3xl text-2xl text-center font-bold py-8'>Methodology</h1>
            <p>A detailed and exact   -   timed diet   -   consisting of your favourite foods   -   planned as per your daily routine / schedule
               -   works even while you're travelling   -   and helps you to achieve your health & fitness goals efficiently in a faster way
                  -   keeping your mind free from worries of food planning, eating right and staying fit. Therefore, achieve weight management
                   goals and experience multifold increase in energy levels with diets which are healthy & nutritious and do not deprive you of
                    any essential macro/micro nutrient. Research has shown that regular monitoring by a qualified dietician increases compliance
                     with the diet and help people achieve their fitness goals faster.
            </p>

          </div>
      
    </div>
  )
}

export default Body;
