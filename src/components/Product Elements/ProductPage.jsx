import bg from '../../assets/productPageBG.svg'
import prdType_ic from "../../assets/productPageIcon/prdTypeIc.svg"
import decor_ic from "../../assets/productPageIcon/lsicon_decorate-filled.svg"
import shade_ic from "../../assets/productPageIcon/tabler_wash-dry-shade.svg"
import brand_ic from "../../assets/productPageIcon/Vector.svg";
import heart1 from "../../assets/productPageIcon/heart1.svg";
import heart2 from "../../assets/productPageIcon/heart2.svg";


import {prd1} from '../../../Data/templateForProductPage/prds'


import React, { useRef } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import ProductItem from './ProductItem';

const ProductPage = () => {
  const img1Ref=useRef();

  
  function AddBreakSentence(text){
    return prd1.desc.replaceAll("." , ".\n");
  }



  return (
    <div className='w-screen'>
        {/* Background image: */}
        <section className='w-full sm:h-1/3 max-sm:h-[90px] relative '>
            <LazyLoadImage src={bg} alt=""  className='object-cover sm:size-full max-sm:size-full'/>
            <div className='2xl:h-[90px] lg:h-[76px] sm:h-16 h-9 bg-[#0E7E83] w-screen text-white flex items-center justify-evenly'>
              <div className='max-sm:absolute'></div>
              <h1 className='xl:Heading_Semi_Bold lg:Heading_Bold_04 md:Heading_Bold_05 sm:font-[Lato] sm:text-[20px] sm:font-[600]' >Product Code: {prd1.code}</h1>
            </div>
        </section>
        {/* prdct Main info + Pics*/}
      <article className='w-screen flex pt-10 justify-evenly max-sm:flex-col-reverse'>

        {/* Pics  */}
        <section id='pics' className='w-[35.5%] max-sm:w-screen'>
          <div className='size-full flex flex-col justify-between  max-sm:flex-col-reverse  '>
            {/* Main Pic */}
            <div className='h-2/5 w-full max-sm:h-fit'>
                <div className='size-full relative flex items-end justify-end z-10 '>
                  <button className='size-fit max-sm:absolute'>
                    <img src={heart1} alt="" className='z-10 relative xl:size-[85px] lg:size-[65px] md:size-[50px] sm:size-[45px] max-sm:size-[40px] max-sm:right-3 max-sm:bottom-2'/>
                  </button>
                  <img ref={img1Ref} src={prd1.img2} alt="" className='absolute z-0 size-full sm:h-[300%] object-cover duration-300 hover:scale-125 hover:object-fill sm:hover:translate-x-[20%] max-sm:relative max-sm:w-[100vw] ' />
                </div>
            </div>
            
            <div className='h-3/5 w-full flex max-sm:h-[120px]'>
              
              <button onClick={()=>img1Ref.current.src=prd1.img2} 
                className='size-full flex items-end duration-200 hover:scale-110 justify-start max-sm:items-center'>
                <LazyLoadImage src={prd1.img2} alt="" className='object-cover w-[95%] h-[83.5%] ' />
              </button>
              <button onClick={()=>img1Ref.current.src=prd1.img1} 
                className='size-full flex items-end duration-200 hover:scale-110 justify-center max-sm:items-center'>
                <LazyLoadImage src={prd1.img1} alt="" className='object-cover w-[95%] h-[83.5%]' />
              </button>
              <button onClick={()=>img1Ref.current.src=prd1.img2}
                className='size-full flex items-end duration-200 hover:scale-110 justify-end max-sm:items-center'>
                <LazyLoadImage src={prd1.img2} alt="" className='object-cover w-[95%] h-[83.5%]' />
              </button>
            </div>
          </div>
        </section>

        <section id='info' className='w-[55%] max-sm:w-[90%]  2xl:Body_01 lg:Body_03 md:Body_04 Body_05 '>
          
          <div id='title' className='2xl:Body_Bold_00  xl:Body_Bold_02 md:Body_Bold_03 Body_Bold_04 '>
            <h2 className='text-start max-sm:text-center'>{prd1.title}</h2>
          </div>
          
          {/* Type - Decor - Shade - Brand */}
          <section className='flex  py-[4%] pl-[10%] '>
            <div className='flex flex-col items-center whitespace-nowrap 2xl:gap-6 xl:gap-2 lg:gap-2 max-md:sm:gap-1  '>
           
              <div className='flex justify-start items-center gap-[5%] w-full' >
                <img className='lg:size-[33px] md:size-[24px] sm:size-[20px] max-sm:size-[26px]'    src={prdType_ic} alt="" />
                <p>Product Type:{prd1.type}</p>
              </div>
              <div className='flex justify-start items-center gap-[5%] w-full' >
                <img className='lg:w-[33px] lg:h-[40px] md:w-[24px] sm:w-[20px] max-sm:size-[26px]'    src={decor_ic} alt="" />
                <p> Decor:{prd1.decor}</p>
              </div>
              <div className='flex justify-start items-center gap-[5%] w-full' >
                <img className='lg:w-[34px] lg:h-[34px] md:w-[24px] sm:w-[20px] max-sm:size-[26px] '    src={shade_ic} alt="" />
                <p>Shade:{prd1.shade}</p>
              </div>
              <div className='flex justify-start items-center gap-[5%] w-full' >
                <img className='lg:w-[42px] lg:h-[33px] md:w-[24px] sm:w-[20px] max-sm:size-[26px]'    src={brand_ic} alt="" />
                <p>Brand: <span className='border-b-2 border-black'> {prd1.brand} </span>  </p>
              </div>

            </div>
          </section>

        </section>
      </article>
      {/* Disc & advg */}
      <section className='h-screen sm:max-w-[65%] 2xl:Body_01 xl:Body_02 lg:Body_03 sm:Body_04 Body_04 py-[5%] sm:pl-[8%] max-sm:px-[4%] '>
        <div id='prdDesc' className='flex flex-col items-start  '>
          <h2 className='2xl:Body_Bold_00 xl:Body_Bold_01 lg:Body_Bold_02  Body_Bold_03 pb-4 max-sm:pb-2'>Product Description:</h2>
          <p className='whitespace-pre-line'>{AddBreakSentence(prd1.desc)}</p>
        </div>
        <div id='prdAdv' className='pt-[5%] '>
          <h1 className='2xl:Body_Bold_01 xl:Body_Bold_02 lg:Body_Bold_03 Body_Bold_04'>Advantages:</h1>
          <ol className='list-disc pl-[3.5%]'>
            {prd1.advantages.map((adv,i)=><li key={i}>{adv}</li>)}
          </ol>
        </div>
      </section>


    </div>
  )
}

export default ProductPage