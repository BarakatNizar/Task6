import Logo from "../../assets/logo.png"
import singupIcons from "../../assets/SignUp/singupIcon";
import { imgs } from "../../assets/loginPNG/imagesObjects";

import PopUpNotification from "../ui-elements/PopUpNotification";
import WarningLabel from "../ui-elements/WarningLabel";
import ImageAnimator from "../ui-elements/ImageAnimator";

import { useEffect , useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios,{AuthURL} from "../../api/axios";
import useAuth from "../../hooks/useAuth";

/*
2xl: 1536px
xl:  1260px
lg:  1024px
md:   768px
sm:   640px

xl:pt-[42px]
                        lg:pt-[32px] lg:pb-0
                        md:pt-[20px] md:pb-2
                        
*/

const Login = () => {
    const {setAuth } =useAuth();

    const nav=useNavigate();

    const [email , setUserEmail] = useState("");
    const [password , setUserPass] = useState("");
    const [invalidAuth , setInvaliedAuth]= useState(false);
    const [popUp, setPopUp]= useState(false);
    const [popUpDesc , setPopDesc]=useState('');

    

    const handleResponseData_PopUp=(status , resData)=>{
            if(status===200){
                setPopDesc("Welcome Back Mr/Miss !");
                setPopUp("Success");
                return;
            }else if (status===500){
                setInvaliedAuth(true);
                return;
            }else if(status===422){
                setPopDesc(resData.errors?.email[0] || resData.errors?.password[0]);
                setPopUp("Error");
            }
    }


    const handleLogin=async(e)=>{
        e.preventDefault();
        e.currentTarget.disabled=true;

        try {
            const res= await axios.post(AuthURL.LoginPost , {email , password}).then(res=>{
                setAuth({ access_token : res.data.access_token });
                console.log("res 2xx : ",res);
                handleResponseData_PopUp(res.status , res.data);
                e.currentTarget.disabled=false;

            })
        } catch (err) {
            handleResponseData_PopUp(err.response.status , err.response.data);
            e.currentTarget.disabled=false;
        }
    }






    return (
    <div className="w-screen h-screen  ">
        <div className=" top-0 w-full
        2xl:h-20 
        lg:lg_linearHeadBack lg:h-14 lg:z-0 lg:relative  
        md:h-12 md:z-20 
        relative h-9 md_linearHeadBack sm:visible
        max-sm:mb-20
        "></div>
        <div className="flex flex-col flex-grow 
        2xl:xxl_fixedHeightSignUp
        xl:xl_fixedHeightSignUp xl:flex-row
        lg:lg_fixedHeightSignUp
        md:md_fixedHeightSignUp
        sm:sm_fixedHeightSignUp
        
        ">

            <section className="flex-grow lg:overflow-auto max-sm:p-0 max-lg:md:pt-[1%] pt-[2%]  ">
                <article className=" 
            flex items-center flex-grow flex-col overflow z-10 
            2xl:size-full
            lg:size-auto lg:justify-start lg:gap-1 lg:mx-1 lg:p-1 lg:bg-none lg:border-none lg:rounded-none lg:bg-opacity-0
            md:h-full md:justify-center max-lg:md:items-center md:mx-[150px] md:greenToBlue md:border-x-8 md:drop-shadow-xl md:rounded-b-[90px] md:py-2 md:border-opacity-10 md:border-t-2 md:border-transparent md:rounded-t-2xl
            sm:h-auto sm:justify-center
            max-sm:h-fit

                
            " >

                    {/* Welcome Section: */}
                    <div className="md:drop-shadow-xl max-md:drop-shadow-none text-center">
                        <h1 className="
                        2xl:Heading_Bold_01
                        xl:Heading_Bold_02
                        lg:Heading_Bold_02
                        md:Heading_Bold_03  
                        Heading_Bold_04 
                        dark:HeadingColor">Welcome</h1>
                        <p className="py-1
                        2xl:Heading_Bold_03 2xl:p-0
                        xl:Heading_Bold_04 
                        lg:Heading_Bold_05
                        Heading_Bold_05
                        md:pb-4 md:pt-0
                        sm:pt-2
                        ">REINVENT YOUR SPACE WITH US</p>
                    </div>
                    {/* Logo */}
                    <img src={Logo} alt="" className="2xl:w-[143px] 2xl:h-[118px] xl:w-[120px] xl:h-[95px] md:w-[80px] md:h-[70px] sm:w-[65px] w-20 max-sm:absolute max-sm:top-12"/>

                    {/*User Info:  */}
                    <form className="flex flex-col justify-center font-[Lato]
                    xl:gap-0 xl:-my-4 
                    lg:gap-1 lg:text-[#000000] lg:p-0 lg:bg-opacity-0 lg:rounded-none
                    md:text-[#10240a] md:bg-[#22830e] md:bg-opacity-10 md:px-[20px] md:rounded-[70px] 
                    max-sm:items-center max-sm:my-10 max-sm:gap-2
                    ">
                        {/*Email  */}
                        <h2 className="lg:Body_02 md:Body_02 lg:pt-12 lg:pb-4 md:pt-8 max-sm:Body_03">
                            Email Address</h2>
                        <div id="email"  className="bg-[#D9D9D9] rounded-xl border border-black flex
                        2xl:pl-3
                        lg:px-4 lg:gap-6 lg:xl_Input_Size
                        md:px-3 md:gap-4 md:md_Input_Size
                        px-4 py-[2px] gap-3  max-sm:m-1 max-sm:mb-2 max-sm:border-2 max-sm:border-opacity-60
                        max-sm:mobile_Input_Size md:drop-shadow-lg max-md:drop-shadow-none
                        
                        ">
                            <img src={singupIcons.ic_email} alt="" width={26} height={26} />
                            <input onChange={(e)=>{setUserEmail(e.target.value);}} value={email}  required
                                type="email" name="email" placeholder="example@gmail.com" className="Body_03 bg-inherit border-inherit flex-grow outline-none my-1 focus-within:border-t focus-within:border-b  text-[#000]" />
                        </div>
                        
                        {/* Password */}
                        <h2 className="lg:Body_02 md:Body_02 lg:py-4 md:py-2 max-sm:Body_03">
                            Password</h2>
                        <div id="password" className="bg-[#D9D9D9] rounded-xl border border-black flex
                        2xl:pl-3
                        lg:px-4 lg:gap-6 lg:xl_Input_Size
                        md:px-3 md:gap-4 md:md_Input_Size
                        px-4 py-[2px] gap-3  max-sm:m-1 max-sm:mb-2 max-sm:border-2 max-sm:border-opacity-60
                        max-sm:mobile_Input_Size md:drop-shadow-xl max-md:drop-shadow-none
                        ">
                            <img src={singupIcons.ic_pass} alt="" width={26} height={26} />
                            <input onChange={(e)=>{setUserPass(e.target.value);}} value={password} required
                                type="password" name="password2" placeholder="**********************" className="Body_03 bg-inherit border-inherit flex-grow outline-none my-1 focus-within:border-t focus-within:border-b text-[#000]" />
                        </div>
                     
                        {invalidAuth && <WarningLabel title={"your email/password are invalid"}/>}
                        <div className="flex flex-col items-center justify-center gap-2 pt-5 max-sm:flex-col-reverse ">
                            <div className="text-start max-sm:text-center flex flex-col gap-8 max-sm:py-10 ">
                                <p className="lg:Body_03 md:pb-3 lg:pb-0 max-sm:Body_Bold_03 md:Body_Bold_03">don’t have an account?<span className="text-[#0E7E83] max-lg:md:text-[#ffffff] max-lg:md:hover:text-[#00a000ff]"> <Link to={"/signup"}>SIGN UP</Link>  </span> </p>
                                <p className="lg:Body_03 md:pb-3 lg:pb-0 max-sm:Body_Bold_03 md:Body_Bold_03">Forgot Password <span className="text-[#0E7E83] max-lg:md:text-[#ffffff] max-lg:md:hover:text-[#00a000ff]"> <Link to={"/passwordChange"}> Change Password</Link></span> </p>
                            </div>
                            <button onClick={e=>{
                                handleLogin(e);
                                
                            }}
                            className=" border border-black rounded-lg shadow-md shadow-[rgba(0,0,0,0.25)] hover:bg-opacity-80 outline-none bg-[#2BE784]
                            xl:w-[204px] xl:h-[49px]
                            lg:w-3/5 lg:h-12 lg:Body_02 lg:my-3 lg:rounded-none
                            md:w-3/5 md:h-14 md:Body_02 md:mb-4 md:rounded-b-[28px]
                            sm:w-full sm:h-8 sm:Body_03 sm:my-3
                            w-4/5 h-10 Body_03 my-2">
                            Login</button>
                        </div>
    
                        
                    </form>
                    {/* This Buttons only for Testing */}
                    {/* <button className="bg-red-600 text-white" onClick={()=>{setPopUp(true); console.log(popUp)}}>Try Error PopUp</button>
                    <button className="bg-red-600 text-white" onClick={()=>{setMatched(!matched); console.log(matched)}}>Show unmatched Password</button> */}
                </article>
            </section>
            
            {/* Image Section */}
            <section className={`flex justify-center items-center 
            xl:w-[52%] xl:rounded-none xl:size-auto
            lg:relative lg:size-auto lg:bg-opacity-0 lg:visible lg:lg_fixedHeightSignUp
            md:absolute md:h-screen md:w-screen md:-z-10 md:bg-[#2a6e45] 
            sm:relative sm:size-auto 
            `}> 
                    <ImageAnimator imgs={imgs} className="object-cover
                        xl:rounded-none 
                        lg:visible lg:blur-none lg:opacity-100 lg:size-full
                        md:size-full
                        sm:visible sm:blur-[1px] sm:absolute sm:size-full
                        invisible size-0" />
                    
            </section>

        </div>
        {popUp==="Success" ?  <PopUpNotification title={popUp} desc={popUpDesc} buttonText={"Continue"} buttonClassName={"text-[#2BE784]"} setClosePop={()=>{setPopUp(false);nav("/");}} /> : popUp ?
         <PopUpNotification title={popUp} desc={popUpDesc} buttonText={"Dismiss"} buttonClassName={"text-[#E55B5B]"} setClosePop={()=>{setPopUp(false)}} /> :"" }
    </div>
    )
}

export default Login