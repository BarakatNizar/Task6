import React, { useState } from 'react'
import bg from "../../assets/profileBG.svg";
import pale from "../../assets/pale1.svg"
import demoProfilePic from "../../assets/demoUserProfileImage.jpeg"
import lgOutIcon from "../../assets/logoutBtnIcon.svg"

import UserProfileImage from '../ui-elements/UserProfileImage';
import axios, { AuthURL } from '../../api/axios';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';


const Profile = () => {

//ProfilePic Section w-647 next section w-1273
    const [userName, setUserName]= useState("James Williams");
    const [country, setCountry]= useState("USA");
    const [city, setCity]= useState("Washington,DC");
    const [userEmail, setUserEmail]= useState("James96@gmail.com");
    const [phone, setPhone]= useState("+1 202 555 1234");

    const {auth , setAuth}=useAuth();
    const nav=useNavigate();

    const handleLogout=async()=>{
        try {
            const res=await axios.get(AuthURL.LogoutGet ,{
                headers:{
                    'Authorization':`Bearer ${auth.access_token}`
                }
            }).then(()=>{
                setAuth({});
                nav("/login");
            })
        } catch (error) {
            console.log(auth)
            console.error("Logout Error: ",error);
        }
    }

  return (
    <div className='flex flex-col h-full w-full relative '>
        {/* Background image: */}
        <section className='w-full sm:h-1/3 relative  bg-red-300 flex-grow'>
            <img src={bg} alt=""  className='object-cover sm:size-full max-sm:size-full'/>
            <div className='absolute size-full linearWhiteDownUp  z-[1] top-0'></div>
        </section>

        <section className='w-full max-sm:h-2/3 flex-grow grid sm:grid-cols-3 grid-cols-2'>

            <section className=' size-full bg-[#EEF9F3] flex'>
                <div id='picPale' className='sm:w-1/2 max-sm:w-2/3 '>
                    <div className='relative inset-y-full'>
                        <img src={pale} alt="" className='absolute bottom-0 ' />
                    </div>
                    <div className='w-[150%]'>
                        <div className='relative h-16'>
                            <div className='absolute z-20 sm:bottom-0 sm:left-[5%] max-sm:bottom-20 max-sm:left-[10%] '>
                                <UserProfileImage img={demoProfilePic} username={"Nizar"}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col w-1/2 h-full justify-evenly items-start text-[#14B05D]
                xl:Body_Bold_01 lg:Body_Bold_02 sm:Body_Bold_03 Body_Bold_03 
                2xl:pl-[15%] xl:pl-[10%] lg:pl-[9%] md:pl-[9%] sm:pl-[5%] max-sm:pr-[2%]
                '>
                    <p>Name</p>
                    <p>Country</p>
                    <p>Email</p>
                    <p>Phone</p>
                </div>
            </section>

        <section id='userInfo' className='bg-[#031C1D] size-full sm:col-span-2'>
            <div className='flex flex-col w-1/2 h-full justify-evenly items-start text-[#EEF9F3]
            xl:Body_Bold_01 lg:Body_Bold_02 sm:Body_Bold_03 Body_Bold_04 
            xl:pl-[8%] lg:pl-[10%] sm:pl-[8%] max-sm:pl-[2%] whitespace-nowrap 
            '>
                    <p>{userName}</p>
                    <p>{country}-{city}</p>
                    <p>{userEmail}</p>
                    <p>{phone}</p>
                </div>
            </section>
            <button onClick={handleLogout}
            className='fixed flex flex-row-reverse bottom-3 right-3 p-3 bg-green-600 border-[1px] rounded-full hover:bg-slate-700 hover:text-white hover:duration-300  '>
                <img src={lgOutIcon} alt=""  className=' pl-2'/> Logout
            </button>
        </section>

    </div>
  )
}

export default Profile;