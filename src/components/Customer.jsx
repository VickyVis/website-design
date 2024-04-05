import React from 'react'
import mine from '../assets/mine.jpg'

const Customer = () => {
  return (
    <div className='w-full py-[8rem] px-4 bg-white'>
      <h1 className='text-black md:text-4xl sm:text-3xl text-2xl font-bold py-8 my-4 text-center flex flex-col justify-center mb-8'>What our customer say</h1>
         <div className='max-w-[1240px] mx-auto md:grid grid-cols-3 gap-8'>
           <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 hover:bg-white duration-400 bg-neutral-200'>
              <img className='w-20 mx-auto mt-4 bg-white rounded-lg' src={mine} alt="/" />
              <h1 className='text-2xl font-bold text-center pt-4 py-4'>Kunal Sikchi</h1>
              <p className='text-center font-medium py-2 mx-8'>5 months ago</p>
              <p className='text-center font-medium py-2 mx-8'>Quite honestly I have done several diet plans earlier but working with Vasundhara has</p>
              <p className='text-center font-medium py-2 mx-8'>Read more</p>

        </div>
        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 hover:bg-white duration-400 bg-neutral-200'>
        <img className='w-20 mx-auto mt-4 bg-white rounded-lg' src={mine} alt="/" />
              <h1 className='text-2xl font-bold text-center pt-4 py-4'>Bharath</h1>
              <p className='text-center font-medium py-2 mx-8'>9 months ago</p>
              <p className='text-center font-medium py-2 mx-8'>Vasundhra has been very helpful and supporting in order to copy with my</p>
              <p className='text-center font-medium py-2 mx-8'>Read more</p>
        </div>
        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 hover:bg-white duration-400 bg-neutral-200'>
        <img className='w-20 mx-auto mt-4 bg-white rounded-lg' src={mine} alt="/" />
              <h1 className='text-2xl font-bold text-center pt-4 py-4'>Muzafer</h1>
              <p className='text-center font-medium py-2 mx-8'>5 months ago</p>
              <p className='text-center font-medium py-2 mx-8'>I'm very happy with my daughter's results when consulting Dr. Vasundhara.</p>
              <p className='text-center font-medium py-2 mx-8'>Read more</p>
        </div>
      </div>

      <div className='my-20 max-w-[1240px] mx-auto grid md:grid-cols-2 justify-center'>
        <button className='bg-neutral-200 hover:bg-[#FDD22E] text-black w-[400px] h-[50px] rounded-md font-semibold my-6 mx-auto py-auto'>VIEW ALL REVIEWS ON GOOGLE</button>
        <button className=' bg-neutral-200 hover:bg-[#FDD22E] text-black w-[400px] h-[50px] rounded-md font-semibold my-6 mx-auto py-auto'>VIEW ALL REVIEWS ON PRACTO</button>
      </div>

      <p className=' border-b-4 border-#D8D8D8' />
    </div>
  );
}

export default Customer
