import React from 'react'
import vidPic from "../assets/VID.svg"
const About = () => {
  return (
    <div className='w-screen min-h-screen lg:pb-20 md:pb-14 sm:pb-10' id='aboutSection'>
        <section className="flex items-center w-full xl:h-[180px] lg:h-[160px] md:h-[120px] sm:h-[100px] h-14 xl:Heading_02  md:Heading_03 sm:Heading_04 Heading_05 bg-[#0E7E83] bg-opacity-30  ">
            <p className='pl-[5%]'>about us and our services</p>
        </section>
        <section className='flex flex-col items-center lg:Body_02 md:Body_03 sm:Body_04 Body_05'>
            <div className='flex justify-evenly items-center px-[3%] py-[2%] gap-[2%]'>
                <div className='w-1/2 '>
                    <h1 className='Heading_Bold_04 max-md:Heading_Bold_05'>Welcome</h1>
                    <p>to Z and N Construction and Landscaping, where quality meets creativity.</p>
                    <p> Founded with a passion for transforming outdoor spaces and building lasting structures, we are dedicated to providing exceptional services that enhance both the beauty and functionality of your property.</p>
                    <br />
                    <strong>Our Mission</strong>
                    <p>At Z and N, our mission is to deliver high-quality construction and landscaping solutions tailored to meet the unique needs of our clients.</p>
                    <p> We believe in creating spaces that reflect your vision while ensuring durability and sustainability </p>
                    <br />
                    <strong>Our Team</strong>
                    <p>our experienced team of professionals brings a wealth of knowledge and expertise to every project. </p>
                    <p>From skilled landscapers to expert builders, we work collaboratively to ensure that each job is completed to the highest standards. We pride ourselves on our attention to detail, commitment to excellence, and passion for our craft</p>
                </div>
                <div className='w-1/2 '>
                    <strong>What we offer</strong>
                    <p>Construction Services: From residential projects to commercial builds, we handle everything from design to execution, ensuring a seamless construction process.</p>
                    <p>Landscaping Services: Our landscaping team specializes in creating beautiful gardens, patios, and outdoor living spaces that enhance your property’s appeal</p>
                    <br />
                    <strong>Why Choose Us?</strong>
                    <p>Quality Craftsmanship: We use only the best materials and techniques to ensure lasting results.</p>
                    <p>Customer-Centric Approach: Your satisfaction is our priority.</p>
                    <p>We listen to your needs and work closely with you throughout the project.</p>
                    <p>Sustainable Practices: We are committed to environmentally friendly practices that benefit both our clients and the planet.</p>
                    <p>Join us in creating beautiful, functional spaces that you can cherish for years to come.</p>
                    <p>At Z and N Construction and Landscaping, we turn your dreams into reality.</p>

                </div>
            </div>
            <div id='IntroVideo' className='xl:h-[640px] flex justify-center'>
                <img src={vidPic} alt="" className='w-[80%]'/>
            </div>
        </section>
    </div>

  )
}

export default About
