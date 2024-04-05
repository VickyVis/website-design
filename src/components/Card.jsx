import React from 'react'
import apple from '../assets/apple.png'
import health from '../assets/health.png'
import plan from '../assets/plan.png'
import guidance from '../assets/guidance.png'
import tracking from '../assets/tracking.png'
import follow_ups from '../assets/follow_ups.png'


const card = () => {
  return (
    <div className='w-full py-[8rem] px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto md:grid grid-cols-3 gap-8'>
        <div>
          <img className='w-20 mx-auto bg-white pt-4' src={apple} alt="/" />
          <h2 className='text-2xl font-bold text-center pt-4 py-4'>Tailor Made Diets</h2>
          <p className='text-center font-medium py-2 mx-8'>Every Diet is designed keeping your food preferences in mind</p>

        </div>
        <div>
          <img className='w-20 mx-auto bg-white pt-4' src={health} alt="/" />
          <h2 className='text-2xl font-bold text-center pt-6 py-4'>Healthy Food Options</h2>
          <p className='text-center font-medium py-2 mx-8'>Foods your body will love - High on Nutrition and Right on Calories</p>

        </div>
        <div>
          <img className='w-20 mx-auto bg-white pt-4' src={plan} alt="/" />
          <h2 className='text-2xl font-bold text-center pt-4 py-4'>Diet Complemented with Lifestyle Plans</h2>
          <p className='text-center font-medium py-2 mx-8'>Optional exercise tips such as using stairs insted of elevator etc.,to help you burn those extra fats</p>

        </div>
      </div>

      <div className='max-w-[1240px] mx-auto md:grid grid-cols-3 gap-8'>
        <div className='mt-10'>
          <img className='w-20 mx-auto bg-white pt-4' src={guidance} alt="/" />
          <h2 className='text-2xl font-bold text-center pt-6 py-4'>Personalized Guidance</h2>
          <p className='text-center font-medium py-2 mx-8'>Nutritionist personally available on Phone or WhatsApp</p>

        </div>
        <div className='mt-10'>
          <img className='w-20 mx-auto bg-white pt-4' src={tracking} alt="/" />
          <h2 className='text-2xl font-bold text-center pt-6 py-4'>Personal Tracking</h2>
          <p className='text-center font-medium py-2 mx-8'>Regular weight, meal and goal tracking personally done by the nutritionist</p>

        </div>
        <div className='mt-10'>
          <img className='w-20 mx-auto bg-white pt-4' src={follow_ups} alt="/" />
          <h2 className='text-2xl font-bold text-center pt-4 py-4'>Constant Follow-Ups</h2>
          <p className='text-center font-medium py-2 mx-8'>Constant Follow-Ups and food-diary reviews by the expert</p>

        </div>
      </div>
    </div>

    
  );
};

export default card;
