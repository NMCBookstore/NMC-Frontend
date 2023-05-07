import React from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentUserRole } from "./authSlice";
import AdminLayout from "../../layoutAdmin/AdminLayout";

const role = () => {
  const userRole = useSelector(selectCurrentUserRole);
  const location = useLocation();

  return userRole ==="admin" ?(
    <AdminLayout />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
}

export default role;
