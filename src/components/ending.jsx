import React from 'react'
import mine from '../assets/mine.jpg'

const ending = () => {
  return (
    <div  className='py-10 px-4 max-w-[1240px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
       <img className='w-[200px] mx-auto rounded-full' src={mine} alt="/" />
       <p className="my-12"><span className='font-bold'>Vaniraj</span> is a Hyderabad-based diet & active lifestyle expert and an independent food consultant who strives to take the confusion out of healthy eating. ​Having closely worked as a dietitian / nutritionist with top hospitals like Fortis and Max healthcare, she believes in a philosophy that diets, just like clothes, should be tailor-made because every individual is different and there is no one-size-fits-all here.</p>
    
       <p className='mt-12 border-b-4 border-#D8D8D8' />

       <p className='text-black text-opacity-75 text-lg font-light underline my-8'>Privacy Policy | Tearms of Use</p>
    
    </div>
  )
}

export default ending
