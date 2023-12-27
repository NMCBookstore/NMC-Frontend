import React from "react";
import Marquee from "../../component/Marquee";
import { Link, useSearchParams } from "react-router-dom";
import { useVerifiedEmailQuery } from "../../services/user/userAPI";
import { errorImg, successImg } from "../../assets/img";

const VerifyEmail = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { data } = useVerifiedEmailQuery({
    email_id: searchParams.get("email_id"),
    secret_code: searchParams.get("secret_code"),
  });
  return (
    <div className=" bg-[#fbf4ea] mt-[76px]">
      <Marquee></Marquee>
      <div className="mx-auto px-3 container-nmc page__verify-email">
        <div>
          <div className="row">
            <div className="profile__user w-full">
              {data ? (
                <div className="page__verify-email__content success">
                  <img src={successImg} alt="successImg" />
                  <h1>Success</h1>
                  <p>Your email has been verified</p>
                  <Link to="/">Back To Home</Link>
                </div>
              ) : (
                <div className="page__verify-email__content">
                  <img src={errorImg} alt="errorImg" />
                  <h1>Error</h1>
                  <p>
                    Oops, looks like we have failed to verify your email
                  </p>
                  <Link to="/">Back To Home</Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
