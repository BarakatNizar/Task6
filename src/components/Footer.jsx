import React from 'react'
import logo from "../assets/logo.png"
import faceIc from "../assets/facebook_ic.png"
import instaIc from "../assets/instagram_ic.png"
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <footer className='w-screen footerLinearGradient flex flex-col justify-between gap-5 text-white pt-[3.5%] '>
            <div className='flex justify-around w-screen max-sm:flex-col max-sm:items-center max-sm:gap-2'>
                <div className='sm:w-[25%] max-sm:w-1/2 flex items-center justify-center max-md:flex-col max-md:justify-start whitespace-nowrap'>
                    <img src={logo}alt="" className='w-1/3' />
                    <p className='2xl:Body_02 xl:Body_03 lg:Body_04 Body_05 pl-2 text-start'>The Construction and <br /> landscaping company</p>
                </div>
                
                <section className='flex sm:justify-between sm:w-[70%] sm:gap-2 max-sm:justify max-sm:mx-2 '>
                    <div className='flex flex-col items-start w-auto 2xl:Body_02 xl:Body_03 lg:Body_Bold_04 Body_05 '>
                        <p className='lg:pb-4 sm:pb-2 2xl:Body_Bold_02 xl:Body_Bold_03 lg:Body_Bold_04 Body_Bold_05 '>business hours:</p>
                        <div>
                            <p>
                            Monday - Friday: 8 am - 6 pm 
                            </p>
                            <p>
                            saterday:9 am - 4 pm 
                            </p>
                            <p>
                            sunday:closed 
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-col w-auto items-center 2xl:Body_02 xl:Body_03 lg:Body_04 Body_05 max-sm:w-1/3'>
                        <p className='lg:pb-4 sm:pb-2 2xl:Body_Bold_02 xl:Body_Bold_03 lg:Body_Bold_04 Body_Bold_05'>Quick Links:</p>
                        <div>
                          <ol className='list-disc'>
                            <li >
                                <Link>home</Link>
                            </li>
                            <li>
                                <Link>about us</Link>
                            </li>
                            <li>
                                <Link>services</Link>
                            </li>
                            <li>
                                <Link>projects</Link>
                            </li>
                            <li>
                                <Link>contact</Link>
                            </li>
                          </ol>
                        </div>
                    </div>
                    <div className='flex flex-col lg:w-[360px] md:w-[200px] w-[160px] justify-between items-start 2xl:Body_02 xl:Body_03 lg:Body_Bold_04 Body_05 h-full '>
                        <p className='lg:pb-4 sm:pb-2  2xl:Body_Bold_02 xl:Body_Bold_03 lg:Body_Bold_04 Body_Bold_05'>Awards and Certifications:</p>
                        <ol className='list-disc flex flex-col justify-between h-full items-start break-words'>
                            <li ><p>“Proud member of the National Association of Landscape Professionals” </p></li>
                            <li> <p>“Certified Green Builder” </p></li>
                        </ol>
                    </div>
                </section>
            </div>
            <div className='flex justify-between items-end w-screen py-[1%]'>
                    <div className='flex gap-3 pl-[2%]'>
                        <a href="www.facebook.com">
                            <img src={faceIc}alt="" className='xl:w-[47px] lg:w-[40px] md:w-[36px] sm:w-[30px] h-auto hover:scale-90 duration-200 ' />
                        </a>
                        <a href="www.instagram.com">
                            <img src={instaIc}alt="" className='xl:w-[47px] lg:w-[40px] md:w-[36px] sm:w-[30px] h-auto hover:scale-90 duration-200 ' />
                        </a>
                    </div>
                    <div className='xl:Body_02 lg:Body_03 md:Body_Bold_04 Body_05 '>
                        &copy; 2024 Z and N Construction and Landscaping. All rights reserved.
                    </div>
                    <div></div>
            </div>
           
    </footer>
  )
}

export default Footer