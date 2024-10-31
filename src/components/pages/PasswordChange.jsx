import Logo from "../../assets/logo.png"
import singupIcons from "../../assets/SignUp/singupIcon";
import bg from "../../assets/PasswordChangeBg.png"; 

import PopUpNotification from "../ui-elements/PopUpNotification";
import WarningLabel from "../ui-elements/WarningLabel";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios, { PasswordReset } from "../../api/axios";

/*
2xl: 1536px
xl:  1260px
lg:  1024px
md:   768px
sm:   640px
*/

const PasswordChange = () => {
    const nav =useNavigate();

    const [email , setUserEmail] = useState("");
    const [password , setUserPass] = useState("");
    const [finalUserPass , setFinalUserPass] = useState("");
    
    const [matched , setMatched]= useState(false); //true-> for matched password, null->user is not done inserting yet
    const [invalidFields , setInvalidFields]= useState(false); //true for invalid fields
    const [popUp, setPopUp]= useState(false);
    
    
    function passwordMatch(){
        if (password==finalUserPass){
            return true
        }else{
            setMatched("Passwords are not the same !");
            return false;
        } 
    }
    useEffect(()=>{
        setMatched(null);
    },[password , finalUserPass])

    

    const handleResetPSDSumbit=async(e)=>{
        e.preventDefault();
        if (!passwordMatch()){
            return;
        }
        try {
            setMatched("Please Wait...")
            const res=await axios.post(PasswordReset.ForgottenPost ,{email}).then(res=>{
                if (res.status===200){
                    localStorage.setItem("password",password); //To be removed later after verifying
                    localStorage.setItem("email",email); //To be removed later after verifying
                    nav("/verificationPassword");
                }
            })
        } catch (error) {
            setPopUp(error.response.statusText);
            console.error(error);
        }
    }

    return (
    <div className="w-screen h-screen max-lg:md:h-fit max-lg:md:BG2 ">
        <div className=" top-0 w-full
        2xl:h-20 
        lg:lg_linearHeadBack lg:h-14 lg:z-0 lg:relative  
        md:h-12 md:z-20 
        sm:relative sm:h-9 sm:md_linearHeadBack sm:visible
        invisible
        "></div>
        <div className="flex flex-col flex-grow max-lg:md:justify-center max-lg:md:items-center
        2xl:xxl_fixedHeightSignUp
        xl:xl_fixedHeightSignUp xl:flex-row
        lg:lg_fixedHeightSignUp
        sm:sm_fixedHeightSignUp
        mobile_fixedHeightSignUp
        ">
            
            <section className={`flex justify-center items-center 
            xl:w-[52%] xl:rounded-none xl:xl_fixedHeightSignUp
            lg:relative lg:size-auto lg:bg-opacity-0 lg:visible
            md:absolute md:md_fixedHeightSignUp md:z-10 md:bg-[#2a6e45] md:w-screen md:invisible 
            sm:relative sm:size-auto 
            
            `}> 
                    <img src={bg} className="drop-shadow-xl object-cover
                        xl:rounded-bl-none  xl:rounded-r-[36px] 
                        lg:visible lg:blur-none lg:opacity-100 lg:size-full
                        md:invisible
                        sm:visible sm:blur-[1px] sm:absolute sm:size-full
                        invisible size-0
                    " />

                    <div className=" bg-[#EEF9F3] flex  items-center z-20  
                    xl:flex-col xl:w-[570px] xl:h-[570px] xl:bg-opacity-50 xl:rounded-full xl:m-0 xl:p-0
                    lg:visible lg:w-[600px] lg:h-[350px] lg:bg-opacity-60 lg:rounded-bl-[25%] lg:rounded-tr-[25%] lg:mr-20 lg:my-14
                    md:invisible md:w-auto md:h-auto md:rounded-none md:m-0 md:p-0 
                    sm:w-3/5 sm:h-2/3 sm:bg-opacity-65 sm:rounded-br-[50%] sm:rounded-t-[8%] sm:mr-12 sm:my-14 sm:pl-6 sm:bg-none sm:justify-evenly sm:gap-0
                    justify-center gap-3 w-full max-sm:lg_linearHeadBack rounded-b-lg p-2
                    ">
                            <img src={Logo} alt=""  className="
                            xl:h-[208px] xl:w-[252px] 
                            lg:h-[140px] lg:w-[180px] lg:bg-none
                            md:h-[120px] md:w-[160px] md:m-0 md:p-0 md:bg-opacity-0 md:rounded-none   
                            sm:h-[90px] sm:w-auto sm:p-1 sm:lg_linearHeadBack sm:opacity-90 sm:rounded-s-[1.5rem] sm:rounded-e-[0.4rem]
                            h-[90px] w-auto p-1 opacity-90 rounded-s-[1.5rem] rounded-e-[0.4rem]
                            
                            "/>
                            <p className="xl:Body_01 lg:Body_01 sm:Body_03 text-center max-w-[395px]  ">The Construction and Landscaping Company</p>
                    </div>
            </section>

            <section className="flex-grow overflow-auto  max-sm:p-0 sm:py-4 max-lg:md:h-[879px] ">
                <article className="
                flex items-center flex-grow flex-col overflow-auto z-10
            2xl:h-full
            xl:w-full xl:h-fit xl:justify-center
            lg:h-auto lg:w-full lg:justify-start lg:gap-1 lg:mx-1 lg:p-1 lg:bg-none lg:border-none lg:rounded-none lg:bg-opacity-0
            md:h-2/3 md:w-full md:justify-evenly max-lg:md:blueToGreen md:bg-opacity-50  md:border-x-8 md:border-transparent md:drop-shadow-2xl md:rounded-b-[90px] md:py-2 
            sm:h-auto sm:w-full sm:justify-center

            " >

                    <div className="md:drop-shadow-2xl max-md:drop-shadow-none">
                        <h1 className=" 
                        xl:pt-[42px] pt-1
                        lg:pt-[32px] lg:pb-0
                        md:pt-[20px] md:pb-2
                        md:Heading_Bold_03  
                        Heading_Bold_04  max-md:py-3 max-sm:py-10">Change Password</h1>
                       
                    </div>
                    {/*User Info:  */}
                    <form className="flex flex-col justify-center font-[Lato]
                    xl:pl-12 xl:gap-1 
                    lg:gap-1 lg:text-[#000000] lg:p-0 lg:bg-opacity-0 lg:rounded-none
                    md:text-[#10240a] max-lg:md:greenToBlue md:bg-opacity-50 md:px-[20px] md:rounded-[70px] 
                    max-lg:md:justify-start
                    sm:justify-center sm:items-center
                    max-sm:items-center 
                    ">
                        {/*Email  */}
                        <h2 className="lg:Body_02 sm:Body_02 lg:pt-12 lg:pb-4 md:pt-8 md:pb-2 ">
                            Email Address</h2>
                        <div id="email"  className="bg-[#D9D9D9] rounded-xl border border-black flex
                        lg:px-4 lg:gap-6 sm:xl_Input_Size 
                        md:px-3 md:gap-4 
                        px-4 py-[2px] gap-3  max-sm:m-1 max-sm:mb-2 max-sm:border-2 max-sm:border-opacity-60
                        max-sm:mobile_Input_Size 
                     sm:h-12 max-md:sm:my-1   
                        ">
                            <img src={singupIcons.ic_email} alt="" width={26} height={26} />
                            <input onChange={(e)=>{setUserEmail(e.target.value);}} value={email}  required
                                type="email" name="email" placeholder="example@gmail.com" className="Body_03 bg-inherit border-inherit flex-grow outline-none my-1 focus-within:border-t focus-within:border-b  text-[#000]" />
                        </div>
                        {/* Password */}
                        <h2 className="lg:Body_02 sm:Body_02 lg:py-4 md:py-2">
                            Password</h2>
                        <div id="password" className="bg-[#D9D9D9] rounded-xl border border-black flex  
                        lg:px-4 lg:gap-6 sm:xl_Input_Size 
                        md:px-3 md:gap-4 
                        px-4 py-[2px] gap-3  max-sm:m-1 max-sm:mb-2 max-sm:border-2 max-sm:border-opacity-60
                        max-sm:mobile_Input_Size
                       sm:h-12 max-md:sm:my-1 ">
                            <img src={singupIcons.ic_pass} alt="" width={26} height={26} />
                            <input onChange={(e)=>{setUserPass(e.target.value);}} value={password} 
                                type="password" name="password2" placeholder="Ab@,S2(23p@#qzL@gnS" className="Body_03 bg-inherit border-inherit flex-grow outline-none my-1 focus-within:border-t focus-within:border-b text-[#000]" />
                        </div>
                        {/* Password2 */}
                        <h2 className="lg:Body_02 sm:Body_02 lg:py-4 md:py-2">
                            Re-Enter Password</h2>
                        <div id="email"  className="bg-[#D9D9D9] rounded-xl border border-black flex  
                        lg:px-4 lg:gap-6 sm:xl_Input_Size 
                        md:px-3 md:gap-4 
                        px-4 py-[2px] gap-3  max-sm:m-1 max-sm:mb-2 max-sm:border-2 max-sm:border-opacity-60
                        max-sm:mobile_Input_Size
                       sm:h-12 max-md:sm:my-1 ">
                            <img src={singupIcons.ic_pass} alt="" width={26} height={26} />
                            <input onChange={(e)=>{setFinalUserPass(e.target.value);}} value={finalUserPass} 
                                type="password" name="password" placeholder="Ab@,S2(23p@#qzL@gnS" className="Body_03 bg-inherit border-inherit flex-grow outline-none my-1 focus-within:border-t focus-within:border-b text-[#000]" />
                        </div>
                        {matched && <WarningLabel title={matched}/>}
                        <div className="flex flex-col items-center justify-center lg:gap-5 lg:pb-14 sm:gap-1 lg:py-10 text-center pt-4  ">
                            
                            <p className="lg:Body_03 lg:text-balance md:pb-4 lg:pb-0 max-sm:Body_Bold_03 md:Body_Bold_03">
                                We Will Send You a 6 Digit Code to Verify your Account  </p>
                            <button onClick={(e)=>{
                               handleResetPSDSumbit(e);
                            }}  
                            className=" border border-black rounded-lg shadow-md shadow-[rgba(0,0,0,0.25)] hover:bg-opacity-80 outline-none bg-[#2BE784]
                            xl:w-[247px] xl:h-[49px]
                            lg:w-3/5 lg:h-12 lg:Body_02  lg:my-3 lg:rounded-none
                            md:w-fit md:h-14 md:Body_02 md:my-1 md:rounded-b-2xl
                            sm:w-full sm:h-8 sm:Body_03 sm:my-3
                            w-4/5 h-10 Body_03 my-2 mt-4">
                                Send Code</button>
                        </div>
                    </form>
                    {/* This Buttons only for Testing */}
                    {/* <button className="bg-red-600 text-white" onClick={()=>{setPopUp(true); console.log(popUp)}}>Try Error PopUp</button>
                    <button className="bg-red-600 text-white" onClick={()=>{setMatched(!matched); console.log(matched)}}>Show unmatched Password</button> */}
                </article>
            </section>

        </div>
        {popUp && <PopUpNotification title={"Error"} desc={popUp} buttonText={"Dismiss"} buttonClassName={"text-[#E55B5B]"} setClosePop={setPopUp}/> }
    </div>
    )
}

export default PasswordChange