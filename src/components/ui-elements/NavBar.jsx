import logo from "../../assets/logo.png"
import searchIcon from "../../assets/searchIcon.svg"
import MenuDropDown from "./MenuDropDown"
import React, { useState } from 'react'
import { Outlet, Link } from 'react-router-dom'
const NavBar = () => {
    const [search, setSearch]= useState('');
    const [openMenu,setOpenMenu]=useState(false);

    /*
    2xl: 1536px 
    xl: 1280px
    lg: 1024px ~h:720px
    md: 768px ~h:600px
    sm: 640px ~h:480px
    
    
    */
  return (
    <div className='w-screen h-screen '>
        <header className='2xl:h-[80px] lg:h-16 sm:h-12 h-20 bg-[#0E7E83] w-screen text-white flex items-center justify-around  '>
            {/* Logo Section */}
            <div id="introCaption" className="flex items-center border-r-2 border-white  
            md:w-fit md:pr-3
            sm:w-[250px]
            w-f
            " >
                <img src={logo} alt="logo" className="
                xl:h-[58px] xl:w-[70px] xl:ml-[10px] xl:mr-[6px]
                lg:h-[50px] lg:w-[60px] lg:ml-[6px] lg:mr-[2px]
                sm:h-[40px] sm:w-[50px] sm:ml-[2px] sm:mr-[1px]
                h-16 w-20
                " />
                <div className="2xl:Body_02 lg:Body_03 sm:Body_04 max-sm:hidden whitespace-nowrap ">
                <p >The Construction and </p><p>landscaping company</p>
                </div>
            </div>
            {/* Navigation HOME ABOUT PROJECTS */}
            <nav className="flex justify-evenly items-center flex-auto
            2xl:Body_Bold_01  
            xl:Body_Bold_02
            md:w-auto lg:Body_Bold_03  
            md:Body_Bold_05 max-lg:md:gap-2 md:max-lg:justify-around
            max-md:hidden whitespace-nowrap    
            ">
                <p>
                    <Link to={"/"}>Home</Link>
                </p>
                <p>
                    <a href={"#aboutSection"} >About us</a>
                </p>
                <p>
                    <Link>Projects</Link>
                </p>
            </nav>
            {/* Search Input */}
            <div className="bg-[#D9D9D9] rounded-xl border border-black flex flex-auto drop-shadow-xl 
            2xl:pl-3  2xl:h-[46px]
            xl:min-w-[300px] xl:h-[40px]
            lg:px-2 lg:gap-3 lg:min-w-[200px] lg:h-[36px] 
            md:px-2 md:gap-2 md:w-[160px] md:h-[30px]
            sm:px-2 sm:gap-1 sm:w-1/3 sm:h-[30px] sm:mx-2 
            px-4 py-[2px] gap-3  max-sm:m-1 max-sm:mb-2 max-sm:border-2 max-sm:border-opacity-50
            h-12 w-1/3
            ">
                <img src={searchIcon} alt="" width={26} height={26} className="sm:max-lg:size-[18px] max-sm:size-8 max-sm:opacity-80 self-center" />
                <input onChange={(e)=>{setSearch(e.target.value);}} value={search} 
                    type="text" name="search" placeholder="search" className=" bg-inherit border-inherit flex-grow outline-none my-1 focus-within:border-t focus-within:border-b text-[#000] w-0
                    xl:Body_02 
                    lg:Body_03 
                    Body_04
                    " />
            </div>
            {/* Menu BTN */}
            <div id="menu" className="w-[10%] h-full" >
                <button onClick={()=>{setOpenMenu(!openMenu)}}
                className={`size-full relative flex justify-between items-center ${openMenu ? "toggle-btn" : ""}`}>
                    <div></div>
                    <div id="iconic"
                         className="z-10  
                         w-[25%] 
                            max-md:ml-2 
                            max-md:w-1/2
                         absolute top-1/2 lg:left-[4%] h-1  rounded bg-white  duration-500 
                         before:absolute before:h-1 before:w-[130%] before:-translate-x-[37%] before:-translate-y-3 before:rounded before:bg-white before:transition-all before:duration-400
                         after:absolute after:h-1 after:w-[130%] after:-translate-x-[37%] after:translate-y-3 after:rounded after:bg-white after:transition-all after:duration-400">
                         </div>
                         <p className="2xl:Body_01 xl:Body_02 lg:Body_03 md:Body_04 md:max-lg:ml-1 max-md:hidden">Menu</p>
                         <MenuDropDown open={openMenu} />
                </button>
            </div>

            
            <button className="bg-[#59ED9F] text-black border-[3px] border-white rounded-[10px] h-[38px] Body_04 px-1 
             
            2xl:w-[152px] 2xl:h-[64px] 2xl:Body_02 
            lg:h-[50px] lg:Body_03  
            md:Body_04 
            sm:whitespace-nowrap sm:mx-[16px]
            " >Book Now</button>
        </header>
        <main onClick={()=>{setOpenMenu(false)}} className="2xl:xxl_fixedHeightNav xl:xl_fixedHeightNav lg:lg_fixedHeightNav md:md_fixedHeightNav sm:sm_fixedHeightNav mobile_fixedHeightNav ">
            <Outlet></Outlet>
        </main>
    </div>

    )
}

export default NavBar;
