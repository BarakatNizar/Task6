import React from 'react'
import useAuth from '../hooks/useAuth'
import { Outlet ,Navigate } from 'react-router-dom'
const RequireAuth = () => {
    const {auth} =useAuth();
    console.log(auth);
  return (
    <>{  auth.access_token ? <Outlet/> : <Navigate to="/login" /> }</>
  )
}

export default RequireAuth