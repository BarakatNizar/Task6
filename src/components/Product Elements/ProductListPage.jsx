import React from 'react'
import ProductItemList from './ProductItemList'

const ProductListPage = ({section , data}) => {
  return (
    <div className='w-full'>
        <div className="flex items-center w-full xl:h-[106px] lg:h-[160px] md:h-[120px] sm:h-[100px] max-sm:h-[60px] xl:Heading_03 md:Heading_03 sm:Heading_04 Heading_04 bg-[#0E7E83] bg-opacity-30  ">
            <p className='lg:pl-20 pl-[8%]'>{section}</p>
        </div>
        <div className='grid space-y-[5%] xl:grid-cols-5 sm:grid-cols-4 p-4 max-sm:grid-cols-2'>
        <div className="absolute"></div>
        {
          data.map((prd,i)=>{
                  return <ProductItemList id={i+1} key={i+1} img={prd.img} type={prd.type} shade={prd.shade} imgSizeClass={
                    '2xl:w-[286px] 2xl:h-[260px] xl:w-[220px] xl:h-[195px] lg:min-w-[230px] w-auto lg:h-[210px] md:w-[170px] md:h-[160px] sm:w-[100px] sm:h-[80px] w-[40vw] h-[20vh]'} additionalClass={'m-[2%]'} textClass={'lg:Body_Bold_02 md:Body_Bold_04 sm:Body_Bold_04 Body_Bold_05'}/>})
        }
        </div>
    </div>
  )
}

export default ProductListPage