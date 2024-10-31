import { useState, useRef, useEffect } from "react";
import ic_user from "../../assets/SignUp/clarity_user.svg"
import React from 'react'

const ProfileImage = ({buttonIcon ,setImg}) => {
    const fileUploadRef = useRef();

  return (
    
    <div className="relative rounded-full bg-[#d9d9d9]
    lg:size-[180px] lg:m-0
    md:size-[140px] md:ml-5
    sm:size-[100px] sm:ml-4 
    size-[80px] ml-5">
      
      <img src={ic_user} alt="Profile Pic" className=" absolute size-[70%] left-[14.7%] top-[11.6%]" />

      <div>
        <button
          type="submit"
          onClick={(e)=>{ e.preventDefault(); fileUploadRef.current.click();}}
          className="absolute max-sm:border border-dashed border-[#121C17] rounded-[5px] max-sm:border-opacity-100
          sm:size-[22.2%] sm:bottom-[6.6%] sm:right-[3.3%] sm:p-[2.2%] sm:-m-[0.5%] sm:border-2 sm:border-opacity-65
          size-7 bottom-1 right-[2px] p-[1px] -m-[3.6px] border-2 border-opacity-100"
        >
        <img src={buttonIcon} className="max-sm:bg-opacity-0 sm:bg-green-500"/>
        </button>
        <input 
            type="file" 
            id="img" 
            ref={fileUploadRef} 
            onChange={(e)=>{
              setImg(e.target.files[0])
            }}
            hidden />
      </div>
    </div>
  );
};

export default ProfileImage