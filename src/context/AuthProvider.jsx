import { createContext , useEffect, useState } from "react";

const AuthContext= createContext({

})


export const AuthProvider= ({children})=>{
    const [auth , setAuth]= useState({});
    //First Page Load
    useEffect(()=>{
        let access_token=localStorage.getItem("access_token");
        if (access_token){
            setAuth({access_token});
        }
    },[])

    useEffect(()=>{
        if (auth.access_token){
            localStorage.setItem('access_token',auth.access_token);
        }else localStorage.clear();
    },[auth])
    return (
        <AuthContext.Provider value={{auth, setAuth}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext ;