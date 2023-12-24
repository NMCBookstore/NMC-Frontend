import React, { useState } from "react";
import Marquee from "../../component/Marquee";
import { useSearchParams } from "react-router-dom";
import {
  useResetPasswordMutation,
  useVerifiedEmailQuery,
} from "../../services/user/userAPI";
import toast from "react-hot-toast";

const VerifyForgotPassword = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [resetPassword, { isLoading }] = useResetPasswordMutation();
  const [pass, setPass] = useState({
    newpass: "",
    confirmpass: "",
  });

  const handleSubmit = async () => {
    if (pass.newpass !== pass.confirmpass) {
      toast.error("Passwords do not match");
      return;
    }
    const v = await resetPassword({
      id: searchParams.get("id"),
      reset_code: searchParams.get("reset_code"),
      password: pass.newpass,
    });
    if ("data" in v) {
      toast.success("Update your password !");
    }
  };

  return (
    <div className="profile bg-[#fbf4ea] mt-[76px]">
      <Marquee></Marquee>
      <div className="mx-auto px-3 container-nmc">
        <div className="profile__user">
          <div>
            <div className="row">
              <div className="w-[66.66%] profile__user__right">
                <div className="profile__user__right__adress">
                  Your email has been verified
                </div>
                <div className="profile__user__right__adress">
                  Please change your password below
                </div>
              </div>
              <div className="w-[66.66%] profile__user__right">
                <input
                  className="rounded-full border-[1px] border-[#BFBFBF] border-solid px-4 py-3 w-full shadow-md"
                  type="password"
                  placeholder="Your new password"
                  onChange={(e) =>
                    setPass({ ...pass, newpass: e.target.value })
                  }
                />
              </div>
              <div className="w-[66.66%] profile__user__right">
                <input
                  className="rounded-full border-[1px] border-[#BFBFBF] border-solid px-4 py-3 w-full shadow-md"
                  type="password"
                  placeholder="Confirm your new password"
                  onChange={(e) =>
                    setPass({ ...pass, confirmpass: e.target.value })
                  }
                />
              </div>
              <div className="w-[66.66%] profile__user__right">
                <button
                  type="button"
                  className="w-full py-3 px-6 block rounded-[12px] bg-orange-orange-4 hover:bg-orange-orange-6 focus:outline-none"
                  onClick={handleSubmit}
                  disabled={isLoading}
                >
                  {isLoading ? "Updating..." : "Update your password"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyForgotPassword;
