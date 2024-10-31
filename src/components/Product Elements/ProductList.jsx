import React from 'react'
import ProductItemList from './ProductItemList'
import viewIcon from "../../assets/viewAll.svg"
import { LazyLoadImage } from 'react-lazy-load-image-component'
const ProductList = ({ section ,data , tagColor, additionalClass}) => {
  console.log(data);


  return (
    <div className='w-full flex flex-col py-[4%]'>
            {/* section + ViewAll Button */}
            <div className='flex w-full justify-between pr-3' >
              <div className='flex justify-center items-center gap-2 pb-[3%]'>
                      <div className={`bg-[${tagColor}] ${additionalClass}
                          xl:w-[55px] xl:h-[37px]
                          lg:w-[48px] lg:h-[30px]
                          md:w-[40px] md:h-[27px]
                          sm:w-[30px] sm:h-[20px]
                          w-[26px] h-[16px]`}></div>
                       <p className='lg:Heading_03 sm:Heading_04 Heading_05'>{section}</p>
              </div>
              <button className='bg-[#074143] text-[#EEF9F3] rounded-[10px] flex justify-evenly items-center 
              lg:w-[260px] lg:h-[72px] sm:w-[200px] sm:h-[50px] w-[140px] h-[40px]
              lg:Body_01 sm:Body_02 Body_Bold_04 '>View All <LazyLoadImage src={viewIcon} alt="" className='lg:size-[32px] md:size-[28px] sm:size-[24px] size-[20px]' /> </button>
            </div>   
        {/* Data */}
            <div className='relative flex items-center'>
            <div className='bg-[#031C1D] bg-opacity-80 
                          xl:w-[55px] xl:h-[33px]
                          lg:w-[48px] lg:h-[30px]
                          md:w-[40px] md:h-[27px]
                          sm:w-[30px] sm:h-[20px]
                          w-[26px] h-[16px] invisible'></div>
              <div id='slider' className='h-full overflow-x-scroll overflow-scroll overflow-y-hidden scroll-smooth whitespace-nowrap '>
                {
                data.map((prd,i)=>{
                  return <ProductItemList id={i} key={i} img={prd.img} type={prd.type} shade={prd.shade} imgSizeClass={'xl:w-[472px] xl:h-[427px] lg:w-[300px] lg:h-[250px] md:w-[280px] md:h-[240px]  sm:w-[230px] sm:h-[200px] max-sm:w-[170px] max-sm:h-[150px]'} additionalClass={'px-[2%]'} textClass={"lg:Body_Bold_01 md:Body_Bold_02 sm:Body_Bold_03 Body_Bold_03 "}/>})
                }
              </div>
            </div>

    </div>
  )
}

export default ProductList