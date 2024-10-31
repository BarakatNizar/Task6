
import React from 'react'

const UserProfileImage = ({img , username }) => {

  return (       
    <div className="flex flex-col justify-center items-center size-full">
      <img src={img} alt="Avatar" className="w-[150px] h-[150px] sm:size-[160px] md:size-[165px] lg:size-[200px] xl:size-[260px]  2xl:size-[289px] rounded-[50%] lg:border-[8px]  md:border-[6px] border-[2px] border-[#14B05D] object-cover" />

      <div className=' absolute bottom-0 xl:Body_02 md:Body_03 Body_Bold_03 text-[#121C17] bg-[#EEF9F3] border border-[#121C17] rounded-[10px] p-1 w-fit text-center max-sm:p-[5px] ' >
        <p >@{username}</p>
      </div>
    </div>

  )
}

export default UserProfileImage
