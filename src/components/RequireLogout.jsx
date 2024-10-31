import React from 'react'
import useAuth from '../hooks/useAuth'
import { Outlet, Navigate } from 'react-router-dom';
const RequireLogout = () => {
    const {auth} =useAuth();


  return (
    <>{  !auth.access_token ? <Outlet/> : <Navigate to="/" /> }</>
  )
}

export default RequireLogout