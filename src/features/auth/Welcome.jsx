import React from "react";
import { useSelector } from "react-redux";
import {
  selectCurrentAccessToken,
  selectCurrentRefreshToken,
  selectCurrentSession,
  selectCurrentUser,
} from "./authSlice";
import { Link } from "react-router-dom";

export default function Welcome() {
  const user = useSelector(selectCurrentUser);
  const token = useSelector(selectCurrentAccessToken);
  const rftoken = useSelector(selectCurrentRefreshToken);
  const session = useSelector(selectCurrentSession);

  const welcome = user ? `Welcome ${user}!` : `Welcome !`
  const tokenAbbr = `${token.slice(0,9)}...`

  const content = (
    <section className="welcome">
        <h1>{welcome}</h1>
        <p>Token: {tokenAbbr}</p>
        
    </section>
  )

  return <div>Welcome</div>;
}
