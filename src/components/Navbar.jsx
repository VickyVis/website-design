import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () =>{
        setNav(!nav)
    }

  return (
    <div className='bg-[#FDD22E]'>
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-black font-semibold text-sm'>
        <h1 className='w-full text-3xl font-bold text-[#000000]'>VANIRAJ</h1>
        <ul className='hidden md:flex'>
            <li className='p-4'>ABOUT</li>
            <li className='p-4'>CORPORATE WELLNESS</li>
            <li className='p-4'>PLANS</li>
            <li className='p-4'>TESTIMONIALS</li>
            <li className='p-4'>HEALTH READS</li>
            <li className='p-4'>WEDDINGS</li>
            <li className='p-4'>FAQS</li>
            <li className='p-4'>CONTACT</li>

        </ul>
        <div onClick={handleNav} className='block md:hidden'>

            {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <div className={nav ? ' fixed left-0 top-0 w-[60%] h-full border-r border-r-#e5c854 bg-[#FDD22E] ease-in-out duration-500': 'fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#FFFFFF] m-4'>VANIRAJ</h1>
            <ul className= 'uppercase p-4'>
            <li className='p-4 border-b border-#FDD22E'>ABOUT</li>
            <li className='p-4 border-b border-#FDD22E'>CORPORATE WELLNESS</li>
            <li className='p-4 border-b border-#FDD22E'>PLANS</li>
            <li className='p-4 border-b border-#FDD22E'>TESTIMONIALS</li>
            <li className='p-4 border-b border-#FDD22E'>HEALTH READS</li>
            <li className='p-4 border-b border-#FDD22E'>WEDDINGS</li>
            <li className='p-4 border-b border-#FDD22E'>FAQS</li>
            <li className='p-4'>CONTACT</li>
            </ul>
        </div>
    </div>
    </div>
  )
}

export default Navbar
