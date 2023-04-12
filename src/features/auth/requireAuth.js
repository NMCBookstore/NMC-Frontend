import React from 'react'
import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentAccessToken, selectCurrentRefreshToken,selectCurrentSession,selectCurrentUser } from "./authSlice";



export default function requireAuth() {

    const token = useSelector(selectCurrentAccessToken)
    console.log(token)
    const location = useLocation()

  return (
    token
        ? <Outlet />
        : <Navigate to ='/login' state={{from: location}} replace />

  )
}
