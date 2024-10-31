import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Link } from 'react-router-dom'

const ProductItem = ({img, shade, type , id}) => {
  return (
    //The Height must be specified by its parent element.
    <div className='h-full xl:w-[470px] lg:w-[400px] md:w-[300] sm:w-[260px] max-sm:w-[300px]'>
        {/* It Should heads to ProductPage{:id} */}
        <div className='relative size-full z-0 flex justify-end items-start'>
            <Link>
                <LazyLoadImage src={img} alt="" className='-z-10 object-cover absolute' />
            </Link>
            <h2 className='xl:Body_Bold_01 lg:Body_Bold_02 sm:Body_Bold_03 Body_Bold_04 w-1/2'>{shade}</h2>
            <h2 className='xl:Body_Bold_01 lg:Body_Bold_02 sm:Body_Bold_03 Body_Bold_04 w-1/2'>{type}</h2>
        
        </div>
    </div>
  )
}

export default ProductItem