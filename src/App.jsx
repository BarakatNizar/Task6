import NavBar from "./components/ui-elements/NavBar";
import Login from "./components/pages/Login"
import SignUp from "./components/pages/SignUp";
import PasswordChange from "./components/pages/PasswordChange";
import Verfication from "./components/pages/Verfication";
import VerficationPassword from "./components/pages/VerficationPassword";

import Profile from "./components/pages/Profile";
import LandingPage from "./components/pages/LandingPage";
// this data is just for productListPage
import floors from "../Data/InteriorCladding/Floor/floors";
// 
import {Routes, Route} from "react-router-dom";
import ProductListPage from "./components/Product Elements/ProductListPage";
import ProductPage from "./components/Product Elements/ProductPage";
import RequireAuth from "./components/RequireAuth";
import RequireLogout from "./components/RequireLogout";
function App() {

  return (
    <>
    <Routes>
      {/* Authentication */}
      <Route element={<RequireLogout/>} >
        <Route path="/login" element={<Login/> } />  
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/verification" element={<Verfication/>}/>
        <Route path="/passwordChange" element={<PasswordChange/>} />
        <Route path="/verificationPassword" element={<VerficationPassword/>}/>
      </Route>
      <Route element={<RequireAuth/>}>
        <Route path="/" element={<NavBar/>}>
          <Route index element={<LandingPage/>}/>
          <Route path="profile" element={<Profile/>}/>
          <Route path="productListPage" element={<ProductListPage data={floors} section={"floors"}/>}/>
          <Route path="productId" element={<ProductPage data={floors} section={"floors"}/>}/>

        </Route>
      </Route>


    </Routes>            
    </>
  )
}

export default App
