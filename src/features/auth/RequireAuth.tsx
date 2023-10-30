import React, { useEffect } from "react";
import { useLocation, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentAccessToken } from "./authSlice";
import { login } from "./authSlice";

const RequireAuth = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectCurrentAccessToken);
  const location = useLocation();

  useEffect(() => {
    if (!token) {
      dispatch(login()); // dispatch login action when token does not exist
    }
  }, [dispatch, token]);

  return token ? (
    <Outlet />
  ) : null;
}

export default RequireAuth;