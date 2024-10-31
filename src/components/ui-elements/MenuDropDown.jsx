import xIcon from "../../assets/xIcon.svg"
import { Link } from "react-router-dom"
import React from 'react'
const MenuDropDown = ({open , setOpen}) => {

    return (
    <div className={`absolute z-[23] sm:right-0 scale-y-0  origin-top duration-300 cursor-default
    ${open ? "scale-y-[100%]" : "scale-y-0"}
    max-sm:w-screen w-[55vw]  xl:w-[37vw]
    max-sm:h-[80vh] h-[75vh]
    top-[100%]  
    max-sm:-right-[190%]
     `}>
        <section className='relative'>
            <div className='absolute right-0 top-2 z-[1] cursor-pointer'>
                <img src={xIcon} className='xl:size-16 max-lg:sm:size-8' />
            </div>

        </section>
        <section className='flex flex-col  bg-white justify-evenly font-[Inter] text-center text-black z-[22] drop-shadow-2xl rounded-b-[40px] 
        2xl:gap-1  2xl:text-[36px] 
        xl:gap-[2px] xl:py-[2%] xl:text-[24px] 
        lg:gap-[1px] lg:py-1  
        md:gap-5 md:py-3  
        sm:gap-[1px] sm:py-[2%] sm:text-[20px] sm:h-full
        gap-1 py-1 text-[24px] max-sm:justify-evenly
        max-sm:size-full
        
        '>
            <p>
                <Link to="/">Landscaping</Link>
            </p>
            <p>
                <Link to="/">Decking</Link>
            </p>
            <p>
                <Link to="/">Gardening</Link>
            </p>
            <p>
                <Link to="/">Interlocking</Link>
            </p>
            <p>
                <Link to="/">Floral Design</Link>
            </p>
            <p>
                <Link to="/">Pools</Link>
            </p>
            <p>
                <Link to="/">Railing</Link>
            </p>
            <p>
                <Link to="/">WoodWoorking</Link>
            </p>
            <p>
                <Link to="/">Showroom</Link>
            </p>
            <p>
                <Link to={'/profile'}>Profile</Link>
            </p>
            <p>
                <Link>Contact Us</Link>
            </p>
        </section>
        
    </div>
  )
}

export default MenuDropDown