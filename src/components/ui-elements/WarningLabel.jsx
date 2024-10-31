import React from 'react'
import ic_error from "../../assets/ErrorTriangle.svg";

const WarningLabel = ({title}) => {
    
    
    return<div className='flex justify-center'>
            <div className="flex  border-4 lg:border-[#D8814F]  shadow-sm lg:shadow-[#f3a375] items-center
            xl:gap-[29px] xl:p-4  xl:mt-4 xl:mr-6 lg:bg-opacity-0 lg:rounded-md
            md:gap-[18px] sm:p-2 sm:mt-2 md:bg-[#a0613d] md:bg-opacity-40 md:rounded-xl
            max-sm:gap-[18px] max-sm:p-2 max-sm:mt-2 max-sm:bg-[#a0613d] max-sm:bg-opacity-40 max-sm:rounded-xl max-sm:pr-5 ">
                <img src={ic_error} alt="" width={33} height={26} className='2xl:w-[33px] 2xl:h-[26px] lg:w-[33px] lg:h-[20px] md:w-[26px] md:h-[19px] sm:w-[30px] sm:h-[25px] '  />
                <p className="2xl:Body_02 xl:Body_03 md:Body_04 lg:text-[#D8814F] "> {title}</p>
            </div>
    </div>
}

export default WarningLabel