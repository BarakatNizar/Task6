import ProductItemList from './Product Elements/ProductItemList'
import exterior from '../../Data/Exterior/exterior'
import interior from '../../Data/Interior/interior'
import viewIcon from "../assets/viewAll.svg"
import addressMarker from "../assets/mdi_address-marker-outline.svg"
import whatsupMarker from "../assets/ic_outline-whatsapp.svg"
import emailIcon from "../assets/ic_outline-email.svg"

import { LazyLoadImage } from 'react-lazy-load-image-component'
import React from 'react'


const BusinessExhibition = () => {
   
  return (
    <div className='w-full pb-10 bg-[#0E7E83] bg-opacity-50 h-fit '>
        <div className="flex items-center w-full xl:h-[180px] lg:h-[160px] md:h-[120px] sm:h-[100px] h-14  lg:Heading_02 md:Heading_03 sm:Heading_04 Heading_05">
            <p className='pl-[5%]'>Business Exhibition</p>
        </div>
        <div className='whitespace-nowrap'>
            {/* Data  */}
            <div className='relative flex items-center justify-around max-sm:flex-col max-sm:gap-3 '>
                {/* Interior */}
                <div id='interior' className='sm:max-w-[48%] max-sm:w-[95%] flex flex-col lg:gap-10 md:gap-6 gap-3 bg-white px-2 sm:py-8 max-sm:py-3'>
                        <div className='flex w-full justify-around items-center lg:-my-4 max-md:pb-2 ' >
                            
                            <p className='xl:Body_Bold_00 lg:Body_Bold_01 md:Body_Bold_02 Body_Bold_03'>interior</p>
                            <div className='w-1/3 '></div>
                            <button className='lg:h-[72px] md:h-[40px] sm:h-[28px] w-[35%] h-[30px] pl-[3%] flex justify-end items-center bg-[#074143] text-[#EEF9F3] rounded-[10px] xl:Body_01 lg:Body_02 md:Body_03 Body_04 '>View All <LazyLoadImage src={viewIcon} alt="" className=' size-[50%] -mr-[10%] ' /> </button>
                        </div>   
                        
                        <div className='flex w-full   '> 
                                <ProductItemList immediateLoad={true} id={0} key={0} img={interior[0].img} type={''} shade={''} imgSizeClass={'xl:w-[478px] xl:h-[300px] lg:w-[400px] lg:h-[223px] md:w-[350px] md:h-[240px] sm:w-[200px] sm:h-[123px]'} />
                                <div className='w-[4%]'></div>
                                <ProductItemList immediateLoad={true} id={1} key={1} img={interior[1].img} type={''} shade={''} imgSizeClass={'xl:w-[478px] xl:h-[300px] lg:w-[400px] lg:h-[223px] md:w-[350px] md:h-[240px] sm:w-[200px] sm:h-[123px]'} />
                        </div>
                        <div className='flex w-full'> 
                                <ProductItemList immediateLoad={true} id={2} key={2} img={interior[2].img} type={''} shade={''} imgSizeClass={'xl:w-[478px] xl:h-[300px] lg:w-[400px] lg:h-[223px] md:w-[350px] md:h-[240px] sm:w-[200px] sm:h-[123px]'} />
                                <div className='w-[4%]'></div>
                                <ProductItemList immediateLoad={true} id={3} key={3} img={interior[3].img} type={''} shade={''} imgSizeClass={'xl:w-[478px] xl:h-[300px] lg:w-[400px] lg:h-[223px] md:w-[350px] md:h-[240px] sm:w-[200px] sm:h-[123px]'} />
                        </div>
                        <div className='flex w-full'> 
                                <ProductItemList immediateLoad={true} id={4} key={4} img={interior[4].img} type={''} shade={''} imgSizeClass={'xl:w-[478px] xl:h-[300px] lg:w-[400px] lg:h-[223px] md:w-[350px] md:h-[240px] sm:w-[200px] sm:h-[123px]'} />
                                <div className='w-[4%]'></div>
                                <ProductItemList immediateLoad={true} id={5} key={5} img={interior[5].img} type={''} shade={''} imgSizeClass={'xl:w-[478px] xl:h-[300px] lg:w-[400px] lg:h-[223px] md:w-[350px] md:h-[240px] sm:w-[200px] sm:h-[123px]'} />
                
                        </div>
               </div>
                {/* Exterior */}
                <div id='exterior' className='sm:max-w-[48%] max-sm:w-[95%] flex flex-col lg:gap-10 md:gap-6 gap-3 bg-white px-2 sm:py-8 max-sm:py-3'>
                        <div className='flex w-full justify-around items-center lg:-my-4 max-md:pb-2 ' >
                            
                            <p className='xl:Body_Bold_00 lg:Body_Bold_01 md:Body_Bold_02 Body_Bold_03'>exterior</p>
                            <div className='w-1/3'></div>
                            <button className='lg:h-[72px] md:h-[40px] sm:h-[28px] w-[35%] h-[30px] pl-[3%] flex justify-end items-center bg-[#074143] text-[#EEF9F3] rounded-[10px] xl:Body_01 lg:Body_02 md:Body_03 Body_04 '>View All <LazyLoadImage src={viewIcon} alt="" className=' size-[50%] -mr-[10%] ' /> </button>
                        </div>   
                        <div className='flex w-full'> 
                                <ProductItemList immediateLoad={true} id={0} key={0} img={exterior[0].img} type={''} shade={''} imgSizeClass={'xl:w-[478px] xl:h-[300px] lg:w-[400px] lg:h-[223px] md:w-[350px] md:h-[240px] sm:w-[200px] sm:h-[123px]'}/>
                                <div className='w-[4%]'></div>
                                <ProductItemList immediateLoad={true} id={1} key={1} img={exterior[1].img} type={''} shade={''} imgSizeClass={'xl:w-[478px] xl:h-[300px] lg:w-[400px] lg:h-[223px] md:w-[350px] md:h-[240px] sm:w-[200px] sm:h-[123px]'}/>
                        </div>
                        <div className='flex w-full'> 
                                <ProductItemList immediateLoad={true} id={2} key={2} img={exterior[2].img} type={''} shade={''} imgSizeClass={'xl:w-[478px] xl:h-[300px] lg:w-[400px] lg:h-[223px] md:w-[350px] md:h-[240px] sm:w-[200px] sm:h-[123px]'}/>
                                <div className='w-[4%]'></div>
                                <ProductItemList immediateLoad={true} id={3} key={3} img={exterior[3].img} type={''} shade={''} imgSizeClass={'xl:w-[478px] xl:h-[300px] lg:w-[400px] lg:h-[223px] md:w-[350px] md:h-[240px] sm:w-[200px] sm:h-[123px]'}/>
                        </div>
                        <div className='flex w-full'> 
                                <ProductItemList immediateLoad={true} id={4} key={4} img={exterior[4].img} type={''} shade={''} imgSizeClass={'xl:w-[478px] xl:h-[300px] lg:w-[400px] lg:h-[223px] md:w-[350px] md:h-[240px] sm:w-[200px] sm:h-[123px]'}/>
                                <div className='w-[4%]'></div>
                                <ProductItemList immediateLoad={true} id={5} key={5} img={exterior[5].img} type={''} shade={''} imgSizeClass={'xl:w-[478px] xl:h-[300px] lg:w-[400px] lg:h-[223px] md:w-[350px] md:h-[240px] sm:w-[200px] sm:h-[123px]'}/>
                        </div>
                </div>
                
            </div>
            {/* End of Data */}


            {/* Contact us Section */}
            <div className='flex justify-evenly items-center w-screen pt-9 max-sm:gap-2'>
                <div className='flex justify-evenly items-start gap-2 max-sm:flex-col'>
                    <h3 className='2xl:Heading_03 xl:Heading_04 Heading_05 max-sm:pb-4'>contact us</h3>
                    <address className='flex justify-between items-center w-auto 2xl:Body_01 xl:Body_02 lg:Body_03 md:Body_04 Body_05  '>
                        <img src={addressMarker}alt="" className='lg:w-[40px] lg:h-[36px] md:w-[36px] md:h-[28px] sm:w-[30px] sm:h-[22px] bg-red-400 rounded-full bg-opacity-0 hover:bg-opacity-100 hover:scale-x-90 duration-200 hover:scale-y-110 ' />
                        <div>
                            <p className='md:pl-2'>1234 Greenway Drive</p> 
                            <p> Springfield, IL 62701</p>
                        </div>
                    </address>
                </div>
                <div className='flex justify-evenly items-start gap-2 max-sm:flex-col max-sm:pt-6'>
                    <div className='flex justify-between items-center w-auto '>
                        <img src={whatsupMarker}alt="" className='lg:w-[40px] lg:h-[36px] md:w-[36px] md:h-[28px] sm:w-[30px] sm:h-[22px] bg-green-400 rounded-full bg-opacity-0  hover:bg-opacity-100 duration-200 hover:scale-110' />
                        <p className='2xl:Body_01 xl:Body_02 lg:Body_03 md:Body_04 Body_05 md:pl-2'>(555) 123-4567</p>
                    </div>
                    <div className='flex justify-between items-center w-auto '>
                        <img src={emailIcon} alt="" className='lg:w-[40px] lg:h-[36px] md:w-[36px] md:h-[28px] sm:w-[30px] sm:h-[22px]  bg-white rounded-2xl bg-opacity-0 hover:bg-opacity-100 hover:scale-y-95 duration-200 hover:scale-x-110 ' />
                        <p className='2xl:Body_01 xl:Body_02 lg:Body_03 md:Body_04 Body_05 md:pl-2 break-words'>info@z-nconstruction.com</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default BusinessExhibition;
