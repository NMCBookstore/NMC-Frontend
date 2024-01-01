import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { close, setCredentials } from "../../features/auth/authSlice";

const GoogleRedirect = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const paramValue = urlParams.get("code");
  console.log(paramValue);
  const dispatch = useDispatch();

  const homeUrl = "/";

  const sendToken = async () => {
    try {
      const v = await axios.get(
        `https://nmc-bookstore-api.onrender.com/login/oauth/google?code=${paramValue}`
      );
      dispatch(setCredentials(v.data));
      dispatch(close())
    } catch (err) {
      window.location.href = homeUrl;
    } finally {
      window.location.href = homeUrl;
    }
  };
  sendToken();

  return <div>GoogleRedirect</div>;
};

export default GoogleRedirect;
