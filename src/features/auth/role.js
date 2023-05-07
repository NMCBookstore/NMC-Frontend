import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Route } from "react-router-dom";
import { selectCurrentUserRole } from "./authSlice";

const role = () => {
  const userRole = useSelector(selectCurrentUserRole);

  if (userRole === "admin" && location.pathname.startsWith("/user")) {
    return <Navigate to="/admin/dashboard" replace />;
  }
  if (role === "user" && location.pathname.startsWith("/admin")) {
    return <Navigate to="/" replace />;
  }

  return null;
};
export default role;
