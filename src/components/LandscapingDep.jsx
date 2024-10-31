import React from 'react'

import pavements from '../../Data/LandscapingDep/Pavements/pavements'
import shrubs from '../../Data/LandscapingDep/Shrubs/shrubs'

import ProductList from './Product Elements/ProductList'
const LandscapingDep = () => {
    


  return (
    <div className='w-screen pb-10'>
        <div className="flex items-center w-full xl:h-[180px] lg:h-[160px] md:h-[120px] sm:h-[100px] h-14 xl:Heading_02  md:Heading_03 sm:Heading_04 Heading_05 bg-[#59ED9F] bg-opacity-50  ">
            <p className='pl-[5%]'>landscaping Department</p>
        </div>
        <div>
              <ProductList data={shrubs} section={"shrubs"} tagColor={"#14B05D"} tagClass={"px-0"} imgOnly={true}/>
              <ProductList data={pavements} section={"pavements"} tagColor={"#2BE784"} tagClass={"px-0 "} imgOnly={true} />
             
        </div>
    </div>
  )
}

export default LandscapingDep