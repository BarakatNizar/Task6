import bg from "../../assets/landingBG.svg";
import searchIcon from "../../assets/searchIcon.svg"
import Logo from "../../assets/logo.png"


import InteriorCladding from "../InteriorCladding";
import LandscapingDep from "../LandscapingDep";
import BusinessExhibition from "../BusinessExhibition";
import Footer from "../Footer";
import About from "../About";

import { LazyLoadImage } from "react-lazy-load-image-component";
import addNotification from "react-push-notification"; //Conflict with react18 .

import React, { useEffect, useState } from 'react'


const LandingPage = () => {
  const [search, setSearch]=useState('');
  useEffect(()=>{
  	
  function makeNotification(title){
     addNotification({
       title:title,
       icon:Logo,
       native:true
     });
    //const notification= new Notification(title, {body:"Welcome Back Dear!" ,icon:Logo ,vibrate:true });
  }
  useEffect(()=>{
      Notification.requestPermission().then(()=>{  
        setTimeout(()=>{makeNotification(`Ya Halla`)} , 2000);
      })
    },[]);

  return (
    <div className="h-full w-screen">
{/* Welcome + SearchBar */}
      <div className="h-full bg-[#121C17] relative bg-opacity-50 flex justify-center items-center">
        <LazyLoadImage src={bg} alt="" className="size-full object-cover absolute -z-10" />
        <div className="xl:w-2/3 lg:w-3/4 md:w-4/5 sm:4/5 max-sm:w-10/12 text-white flex flex-col items-center">
          <h1 className="text-wrap whitespace-pre-wrap text-center 
          xl:Heading_Bold_03 md:Heading_Bold_04 max-md:Heading_Bold_05 ">transform your vision into reality with our expert construction and landscaping services where quality meets creativity.</h1>
          <div className="bg-[#D9D9D9] rounded-xl border border-black flex flex-auto drop-shadow-xl 
            2xl:pl-3 2xl:w-[358px] 2xl:h-[46px] 2xl:mt-[20px]
            xl:min-w-[280px] xl:h-[40px] xl:mt-[16px]
            lg:px-2 lg:gap-3 lg:min-w-[250px] lg:h-[38px] lg:mt-[14px]
            md:px-2 md:gap-2 md:min-w-[200px] md:h-[30px] md:mt-[10px]
            sm:px-2 sm:gap-1 sm:w-1/3 sm:h-[30px] max-md:sm:mx-2 
            px-4 py-[2px] gap-3  max-sm:m-1 max-sm:mb-2 max-sm:border-2 max-sm:border-opacity-50
            h-10 w-3/5
            ">
                <img src={searchIcon} alt="" width={26} height={26} className="sm:max-lg:size-[18px] max-sm:size-8 max-sm:opacity-80 self-center" />
                <input onChange={(e)=>{setSearch(e.target.value);}} value={search} 
                    type="text" name="search" placeholder="search" className=" bg-inherit border-inherit flex-grow outline-none my-1 focus-within:border-t focus-within:border-b text-[#000] w-0
                    xl:Body_02 
                    lg:Body_03 bg-opacity-0
                    Body_04
                    " />
          </div>
        </div>
      </div>
      
{/* Content added Below */}
        <InteriorCladding/>
        <LandscapingDep/>
        <About/>
        <BusinessExhibition/>
        <Footer/>
    </div>
  )
}

export default LandingPage
