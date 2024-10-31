import React from 'react'
import { Link } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'


const ProductItemList = ({ immediateLoad ,id ,img, shade, type , additionalClass  , imgSizeClass , textClass}) => {

  {/* It Should heads to ProductPage{:id} */}


  return (
    <Link>
      <div className={`relative size-auto inline-block cursor-pointer ${additionalClass} hover:scale-110 ease-in-out duration-300`}>
        {immediateLoad===true ? <img src={img} alt="" className={`${imgSizeClass} object-cover`} /> : <LazyLoadImage src={img} alt="" className={`${imgSizeClass} object-cover`} />}
        <div className={`flex flex-col absolute bottom-[8%] left-[15%] ${textClass} ${shade.toLowerCase().includes('light') ? "text-black" : "text-white"}`}>
          <h2>{shade}</h2>
          <h2>{type}</h2>
        </div>
      </div>
    </Link>
  )
}

export default ProductItemList
