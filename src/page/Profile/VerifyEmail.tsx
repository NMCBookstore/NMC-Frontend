import React from "react";
import Marquee from "../../component/Marquee";
import { useSearchParams } from "react-router-dom";
import { useVerifiedEmailQuery } from "../../services/user/userAPI";

const VerifyEmail = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { data } = useVerifiedEmailQuery({
    email_id: searchParams.get("email_id"),
    secret_code: searchParams.get("secret_code"),
  });
  return (
    <div className="profile bg-[#fbf4ea] mt-[76px]">
      <Marquee></Marquee>
      <div className="mx-auto px-3 container-nmc">
        <div className="profile__user">
          <div>
            <div className="row">
              <div className="w-[66.66%] profile__user__right">
                {data ? (
                  <div className="profile__user__right__adress">
                    Your email has been verified
                  </div>
                ) : (
                  <div className="profile__user__right__adress">
                    Oops, looks like we have failed to verify your email
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
