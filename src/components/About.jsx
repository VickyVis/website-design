import React from 'react'
import mine from '../assets/mine.jpg'

const About = () => {
  return (
    <div className='flex flex-col justify-center w-full py-[8rem] px-4'>
      <div className="max-w-[1240px] mx-auto flex justify-between items-center ">
  <div>
      <img className='float-left w-20 h=20 rounded-full mx-4' src={mine} alt="/" />
      <p className='max-w-[1240px] mx-auto'><span className='font-bold'>Vaniraj</span> is a Hyderabad-based diet & active lifestyle expert and an independent food consultant who strives to take the confusion out of healthy eating. ​Having closely worked as a dietitian / nutritionist with top hospitals like Fortis and Max healthcare, she believes in a philosophy that diets, just like clothes, should be tailor-made because every individual is different and there is no one-size-fits-all here.</p>
      <p className='max-w-[1240px] mx-auto'>As a life member of Indian Dietetic Association, a UGC-NET qualified lecturer, a freelance corporate trainer and an active contributor
         to various publications, Vasundharas mission is to inculcate healthy lifestyle habits among people to enable them be the best version of
          themselves. She works with diverse groups and individuals around the World, catering to their special needs, goals or health conditions
           and helping them lead a healthy life free of worry and illness. With her there is always something for everyone. Therefore, it doesn’t
            matter who you are, where you live, or what you do, she can pave way for a healthier and happier you.
        </p>
      </div>
  
</div>

      
    </div>
  )
}

export default About
