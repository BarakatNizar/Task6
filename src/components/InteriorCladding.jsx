import React from 'react'

import floors from '../../Data/InteriorCladding/Floor/floors'
import walls from '../../Data/InteriorCladding/Walls/walls'
import sinks from '../../Data/InteriorCladding/Sinks/sinks'
import faucets from '../../Data/InteriorCladding/Faucets/faucets'
import kitchens from '../../Data/InteriorCladding/Kitchens/kitchens'
import ProductList from './Product Elements/ProductList'
const InteriorCladding = () => {
    
  return (
    <div className='w-screen pb-10'>

        <div className="flex items-center w-full xl:h-[180px] lg:h-[160px] md:h-[120px] sm:h-[100px] h-14  xl:Heading_02  md:Heading_03 sm:Heading_04 Heading_05 bg-[#0E7E83] bg-opacity-30  ">
            <p className='pl-[5%]'>Interior Cladding</p>
        </div>
        <div>
              <ProductList data={floors} section={"Floors"} tagColor={'#031C1D'} additionalClass={"bg-opacity-80"}  />
              <ProductList data={walls} section={"Walls"} tagColor={'#074143'} />
              <ProductList data={sinks} section={"sinks"} tagColor={'#074143'} additionalClass={"bg-opacity-80"} />
              <ProductList data={faucets} section={"faucets"} tagColor={'#0E7E83'}/>
              <ProductList data={kitchens} section={"kitchens"} tagColor={'#0E7E83'} additionalClass={"bg-opacity-70"}/>
        </div>
    </div>
  )
}

export default InteriorCladding