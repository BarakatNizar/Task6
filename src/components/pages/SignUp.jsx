import Logo from "../../assets/logo.png"
import singupIcons from "../../assets/SignUp/singupIcon";

import PopUpNotification from "../ui-elements/PopUpNotification";
import WarningLabel from "../ui-elements/WarningLabel";
import ProfileImage from "../ui-elements/ProfileImage";

import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios, { AuthURL } from "../../api/axios";

/*
2xl: 1536px
xl:  1260px
lg:  1024px
md:   768px
sm:   640px
*/

const SignUp = () => {
    const nav=useNavigate();

    const [email , setUserEmail] = useState("");
    const [phone , setPhone] = useState("");
    const [full_name, setFull_name] = useState("");
    const [governorate, setGovernorate] = useState("");
    const [city, setCity] = useState("");
    const [password , setPassword] = useState("");
    const [finalUserPass , setFinalUserPass] = useState("");
    const [photo, setPhoto] =useState('');

    const [matched , setMatched]= useState(null); //true-> for matched password, null->user is not done inserting yet
    const [popUp, setPopUp]= useState(false);

    const [invalidField, setInvalidField]=useState(false);
    const [warntitle, setWarnTitle]= useState(null);
    
    const data=new FormData();
    
    
    
    const countries=(text,value)=>{
        return <option value={value}>{text}</option>
    }
    const cities=(text,value)=>{
        return <option value={value}>{text}</option>
    }

    useEffect(()=>{
        setMatched(null);
    },[password , finalUserPass])
    useEffect(()=>{
        console.log(photo);
    },[photo])

    function passwordMatch(){
        if (password==finalUserPass){
            setMatched(true);
            return true
        }else{
            setMatched(false);
            return false;
        } 
    }

    const handleSubmit=async(e)=>{
        e.preventDefault();
        if (!passwordMatch()){ //Just to avoid unwanted request that we already know it has an invalid field !
            setMatched(false);
            return;
        }
        data.append("full_name",full_name);
        data.append("phone",phone);
        data.append('address','PreferNotSay');
        data.append('governorate',governorate);
        data.append('city',city);
        data.append('email',email);
        data.append('password',password);
        data.append('photo',photo);
        try {
            const res=await axios.post(AuthURL.RegisterPost, data ).then((res)=>{
                if (res.status===200){
                    setPopUp('Success');
                    localStorage.setItem("email",email);
                }}
            );
        } catch (err) {
            const {phone, email ,password , photo }=err.response.data;
                console.log(err.response)
                if (phone)
                    setWarnTitle(phone[0]);
                else if (email)
                    setWarnTitle(email[0]);
                else if (password)
                    setWarnTitle(password[0]);
                else if (photo)
                    setWarnTitle(photo[0]);
                setInvalidField(true);
            
        }

    }
    
    return (
    <div className="w-screen h-screen ">
        <div className=" top-0 w-full
        2xl:h-20 
        lg:lg_linearHeadBack lg:h-14 lg:z-0 lg:relative  
        md:h-12 md:z-20 
        sm:relative sm:h-9 sm:md_linearHeadBack sm:visible
        invisible
        "></div>
        <div className="flex flex-col flex-grow max-lg:md:items-center
        2xl:xxl_fixedHeightSignUp
        xl:xl_fixedHeightSignUp xl:flex-row
        lg:lg_fixedHeightSignUp
        sm:sm_fixedHeightSignUp 
        mobile_fixedHeightSignUp
        ">
            
            <section className={`flex justify-center items-center 
            xl:w-[52%] xl:rounded-none 
            lg:relative lg:size-auto lg:bg-opacity-0 lg:visible
            md:absolute md:md_fixedHeightSignUp md:-z-10 md:bg-[#2a6e45] md:w-screen md:h-[94.6vh]
            sm:relative sm:size-auto 
            
            `}> 
                    <img src={singupIcons.bg} className="drop-shadow-xl object-cover
                        2xl:rounded-none
                        xl:rounded-bl-none  xl:rounded-r-[36px] 
                        lg:visible lg:blur-none lg:opacity-100 lg:size-full

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
                            sm:h-[90px] sm:w-auto sm:p-1 sm:opacity-90 sm:rounded-s-[1.5rem] sm:rounded-e-[0.4rem]
                            h-[90px] w-auto p-1 opacity-90 rounded-s-[1.5rem] rounded-e-[0.4rem]
                            
                            "/>
                            <p className="xl:Body_01 lg:Body_01 sm:Body_03 text-center max-w-[395px]">The Construction and landscaping company</p>
                    </div>
            </section>

            <section className="flex-grow md:overflow-auto  max-sm:p-0 sm:py-4 max-lg:md:h-[90vh] max-lg:md:w-fit">
                <article className="
                flex items-center flex-grow flex-col z-10 
            xl:w-full xl:h-full
            lg:h-auto lg:w-full lg:justify-start lg:gap-1 lg:mx-1 lg:p-1 lg:bg-none lg:border-none lg:rounded-none lg:bg-opacity-0
            md:h-auto md:w-full md:justify-evenly   md:bg-[#22830e] md:bg-opacity-50  md:border-x-8 md:border-[#24880bad] md:drop-shadow-2xl md:rounded-b-[90px] py-2
            sm:h-auto sm:justify-center

            " >

                    {/* Provile Pic: */}
                    <div className="md:drop-shadow-2xl max-md:drop-shadow-none text-center max-lg:md:text-white">
                        <h1 className=" 
                        xl:pt-[42px] pt-1
                        lg:pt-[32px] lg:pb-0
                        md:pt-[20px] md:pb-2
                        lg:Heading_Bold_03  
                        Heading_Bold_04   ">sign up</h1>
                        <p className="
                        text-center py-1 
                        xl:pt-[30px] xl:pb-7 
                        md:Body_02 md:pb-4 md:pt-0
                        sm:Body_03 sm:pt-2
                        ">profile picture</p>
                        <ProfileImage buttonIcon={singupIcons.GreenButton} setImg={setPhoto} />
                    </div>
                    {/*User Info:  */}
                    <form className="flex flex-col justify-center font-[Lato]
                    xl:pl-12 xl:gap-1 
                    lg:gap-1 lg:text-[#000000] lg:p-0 lg:bg-opacity-0 lg:rounded-none
                    md:text-[#10240a] md:bg-[#22830e] md:bg-opacity-50 md:px-[20px] md:rounded-[70px] 
                    ">
                        {/*Email  */}
                        <h2 className="max-lg:md:text-white lg:Body_02 md:Body_02 sm:Body_Bold_03 lg:pt-12 lg:pb-4 md:pt-8 md:pb-2 ">
                            Email Address</h2>
                        <div id="email"  className="bg-[#D9D9D9] rounded-xl border border-black flex
                        lg:px-4 lg:gap-6 lg:xl_Input_Size
                        md:px-3 md:gap-4 md:md_Input_Size
                        px-4 py-[2px] gap-3  max-sm:m-1 max-sm:mb-2 max-sm:border-2 max-sm:border-opacity-60
                        max-sm:mobile_Input_Size 
                        
                        ">
                            <img src={singupIcons.ic_email} alt="" width={26} height={26} />
                            <input onChange={(e)=>{setUserEmail(e.target.value);}} value={email}  required
                                type="email" name="email" placeholder="example@gmail.com" className="Body_03 bg-inherit border-inherit flex-grow outline-none my-1 focus-within:border-t focus-within:border-b  text-[#000]" />
                        </div>
                        {/* Phone */}
                        <h2 className="max-lg:md:text-white lg:Body_02 md:Body_02 sm:Body_Bold_03 lg:py-4 md:py-2">
                            Phone Number</h2>
                        <div id="phone"  className="bg-[#D9D9D9] rounded-xl border border-black flex  
                        lg:px-4 lg:gap-6 lg:xl_Input_Size
                        md:px-3 md:gap-4 md:md_Input_Size
                        px-4 py-[2px] gap-3  max-sm:m-1 max-sm:mb-2 max-sm:border-2 max-sm:border-opacity-60
                        max-sm:mobile_Input_Size
                        ">
                            <img src={singupIcons.ic_phone} alt="" width={26} height={26} />
                            <input onChange={(e)=>{setPhone(e.target.value);}} value={phone}  required 
                                type="tel" name="phone" placeholder="0993465002" className="Body_03 bg-inherit border-inherit flex-grow outline-none my-1 focus-within:border-t focus-within:border-b text-[#000]" />
                        </div>
                        {/* Username */}
                        <h2 className="max-lg:md:text-white lg:Body_02 md:Body_02 sm:Body_Bold_03 lg:py-4 md:py-2">
                            Username</h2>
                        <div id="full_name" className="bg-[#D9D9D9] rounded-xl border border-black flex   
                        lg:px-4 lg:gap-6 lg:xl_Input_Size 
                        md:px-3 md:gap-4 md:md_Input_Size
                        px-4 py-[2px] gap-3  max-sm:m-1 max-sm:mb-2 max-sm:border-2 max-sm:border-opacity-60
                        max-sm:mobile_Input_Size
                        ">
                            <img src={singupIcons.ic_user} alt="" width={26} height={26} />
                            <input onChange={(e)=>{setFull_name(e.target.value);}} value={full_name} required
                                type="text" name="username" placeholder="@USER_NAME" className="Body_03 bg-inherit border-inherit flex-grow outline-none my-1 focus-within:border-t focus-within:border-b text-[#000]" />
                        </div>
                        {/* Password */}
                        <h2 className="max-lg:md:text-white lg:Body_02 md:Body_02 sm:Body_Bold_03 lg:py-4 md:py-2">
                            Password</h2>
                        <div id="password" className="bg-[#D9D9D9] rounded-xl border border-black flex  
                        lg:px-4 lg:gap-6 lg:xl_Input_Size
                        md:px-3 md:gap-4 md:md_Input_Size
                        px-4 py-[2px] gap-3  max-sm:m-1 max-sm:mb-2 max-sm:border-2 max-sm:border-opacity-60
                        max-sm:mobile_Input_Size
                        ">
                            <img src={singupIcons.ic_pass} alt="" width={26} height={26} />
                            <input onChange={(e)=>{setPassword(e.target.value);}} value={password} required minLength={8}
                                type="password" name="password2" placeholder="**********************" className="Body_03 bg-inherit border-inherit flex-grow outline-none my-1 focus-within:border-t focus-within:border-b text-[#000]" />
                        </div>
                        {/* Password2 */}
                        <h2 className="max-lg:md:text-white lg:Body_02 md:Body_02 sm:Body_Bold_03 lg:py-4 md:py-2">
                            Re-Enter Password</h2>
                        <div id="email"  className="bg-[#D9D9D9] rounded-xl border border-black flex  
                        lg:px-4 lg:gap-6 lg:xl_Input_Size
                        md:px-3 md:gap-4 md:md_Input_Size
                        px-4 py-[2px] gap-3  max-sm:m-1 max-sm:mb-2 max-sm:border-2 max-sm:border-opacity-60
                        max-sm:mobile_Input_Size
                        ">
                            <img src={singupIcons.ic_pass} alt="" width={26} height={26} />
                            <input onChange={(e)=>{setFinalUserPass(e.target.value);}} value={finalUserPass} required minLength={8}
                                type="password" name="password"  className="Body_03 bg-inherit border-inherit flex-grow outline-none my-1 focus-within:border-t focus-within:border-b text-[#000]" />
                        </div>
                        {matched===false && <WarningLabel title={"Password is not matched !"}/>}
                        {/* Selections: */}
                        <div className="flex justify-between items-center
                        lg:Body_02 md:Body_02 lg:py-4 lg:w-[480px]
                        md:py-2 md:w-[370px] 
                        max-sm:py-1 max-sm:w-[300px]
                        ">
                            {/* Country Section */}
                            <div> 
                                <h2>Country</h2>
                                <select name="country" id="country" value={governorate} onChange={(e)=>{setGovernorate(e.target.selectedOptions[0].value)}} 
                                className="border border-black text-center rounded-xl cursor-pointer  
                                lg:w-[220px] md:h-12 
                                md:w-[140px] md:text-black md:p-2 md:my-2 md:mx-0
                                sm:w-[100px] sm:p-1 sm:m-1
                                w-[100px] p-1 m-0" >
                                    {countries("PreferNotSay","PreferNotSay")}
                                    {countries("SYR" ,"SYR")}
                                    {countries("UAE" ,"UAE")}
                                    {countries("KSA" ,"KSA")}
                                </select>
                            </div>
                            <div>
                                <h2>City</h2>
                                <select name="city" id="city" value={city} onChange={(e)=>{setCity(e.target.selectedOptions[0].value)}} 
                                className="border border-black text-center rounded-xl cursor-pointer  
                                lg:w-[220px] 
                                md:w-[140px] md:h-12 md:text-black md:p-2 md:my-2 md:mx-0
                                sm:w-[100px] sm:p-1 sm:m-1
                                w-[100px] p-1 m-0"  >
                                    {cities("PreferNotSay","PreferNotSay")}
                                    {cities("Damascus" ,"Damascus")}
                                    {cities("Dubai" ,"Dubai" )}
                                    {cities("Jeda" ,"Jeda" )}
                                </select>
                            </div>
                     
                        </div>
                     
                        {invalidField && <WarningLabel title={warntitle}/>}
                        <div className="flex flex-col items-center justify-center lg:gap-5 lg:pb-14 sm:gap-1  ">
                            <button onClick={(e)=>{
                                handleSubmit(e);
                                // e.preventDefault();
                                // nav('/verification');
                            }} 
                            className=" border border-black rounded-lg shadow-md shadow-[rgba(0,0,0,0.25)] hover:bg-opacity-80 outline-none bg-[#2BE784]
                            lg:w-3/5 lg:h-12 lg:Body_02  lg:my-3 lg:rounded-none
                            md:w-fit md:h-14 md:Body_02 md:my-1 md:rounded-b-2xl
                            sm:w-full sm:h-8 sm:Body_03 sm:my-3
                            w-4/5 h-10 Body_03 my-2 mt-4">
                                create account</button>
                            <p className="lg:Body_03 md:pb-4 lg:pb-0 max-sm:Body_Bold_03 md:Body_Bold_03">
                                hava an account ? <span className="max-lg:md:text-[#00FFFF] text-[#0E7E83] hover:opacity-75"><Link to={"/login"}>  Login</Link></span>  </p>
                        </div>
                    </form>
                    {/* This Buttons only for Testing */}
                    {/* <button className="bg-red-600 text-white" onClick={()=>{setPopUp(true); console.log(popUp)}}>Try Error PopUp</button>
                    <button className="bg-red-600 text-white" onClick={()=>{setMatched(!matched); console.log(matched)}}>Show unmatched Password</button> */}
                </article>
            </section>

        </div>
        {popUp==="Error" && <PopUpNotification title={"Error"} desc={"please wait a few minutes before you try again"} buttonText={"Dismiss"} buttonClassName={" text-[#E55B5B]"} setClosePop={setPopUp}/> }
        {popUp==='Success' && <PopUpNotification title={"Success"} desc={"Verification Code Sent to your email"} buttonText={"Done"} buttonClassName={" text-[#59ED9F]"} setClosePop={setPopUp} navigation={()=>{nav("/verification")}} /> }
    </div>
    )
}

export default SignUp