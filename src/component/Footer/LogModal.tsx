import { Dialog, Transition } from "@headlessui/react";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import React, { Fragment, useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { redirect, useNavigate } from "react-router-dom";
import { RootState } from "../../app/store";
import {
  close,
  forgotpassword,
  login,
  loginStart,
  signup,
} from "../../features/auth/authSlice";
import {
  useLoginMutation,
  useLoginWithGoogleQuery,
  useSignUpMutation,
} from "../../services/authentication/authAPI";
import { useGetCartQuery } from "../../services/cart/cartAPI";
import { useGetWishlistQuery } from "../../services/wishlist/wishlistAPI";
import { avatarProfile } from "../../assets/img";
import { useSendForgotPasswordEmailMutation } from "../../services/user/userAPI";

const BdxLogModal: React.FunctionComponent = () => {
  const showLog = useSelector((state: RootState) => state.auth.status);
  const cancelButtonRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { refetch: wishlistRefetch } = useGetWishlistQuery();
  const { refetch: cartRefetch } = useGetCartQuery();

  const [executeLogin, { isLoading }] = useLoginMutation();

  const [executeSignup, { isLoading: signUpLoading }] = useSignUpMutation();

  const [executeForgotPassword] = useSendForgotPasswordEmailMutation();

  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const [emailForgot, setEmailForgot] = useState({
    forgotEmail: "",
  });

  const [signUpValue, setSignUpValue] = useState({
    username: "",
    password: "",
    email: "",
  });

  useEffect(() => {
    if (showLog === "signup") {
      setSignUpValue({
        ...signUpValue,
        username: "",
      });
    }
  }, [showLog]);

  const googleLogin = async () => {
    try {
      const response = await axios.get(
        "https://nmc-bookstore-api.onrender.com/login/oauth/google_url"
      );
      const url = response?.data?.url;
      console.log(url);
      if (url) {
        window.location.href = url; // Redirect to the specified URL
        console.log(url);
      } else {
        console.log("Invalid URL");
      }
    } catch (error) {
      console.log("API request failed:", error);
    }
  };

  const handleLogin = async () => {
    dispatch(loginStart());
    try {
      const data = await executeLogin(values).unwrap();
      toast.success("Login success !");
      navigate("/");
      dispatch(close());
      wishlistRefetch();
      cartRefetch();
    } catch (err) {
      toast.error("Login failed!");
      console.log(err, "the data is not set");
    }
    return false;
  };
  const handleSignUp = () => {
    const formData = new FormData();
    formData.append("username", signUpValue.username);
    formData.append("email", signUpValue.email);
    formData.append("password", signUpValue.password);
    formData.forEach((value, key) => {
      console.log(key, value);
    });

    const v = executeSignup(formData);
    if ("data" in v) {
      toast.success("Signup successful");
      dispatch(login());
    } else {
      toast.error("Signup failed !");
    }
  };
  const handleSubmitPassword = async () => {
    const v = await executeForgotPassword({ email: emailForgot.forgotEmail });
    if ("data" in v) {
      toast("Please check your email", {
        icon: "📬",
        style: {
          borderRadius: "10px",
          background: "#fff",
          color: "#333",
        },
      });
    }
  };
  return (
    <Transition.Root show={showLog === "none" ? false : true} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={() => dispatch(close())}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-backdrop bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex height-modal items-end justify-center p-4 text-center items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-2xl bg-[#fff] text-left shadow-xl transition-all sm:my-8 w-full max-w-[440px] px-5 py-10 sm:px-10">
                <div className="mb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="text-center w-full">
                      <Dialog.Title
                        as="h3"
                        className="mb-4 font-semibold leading-normal capitalize text-[40px] text-[#0F3BB0]"
                      >
                        {showLog === "login" && "Login"}
                        {showLog === "signup" && "Sign Up"}
                        {showLog === "forgotpassword" && "Forgot Password"}
                      </Dialog.Title>
                      <p className="text-[#595959] text-[20px] leading-normal mb-6">
                        Welcome to NMC Bookstore!
                      </p>
                      <div className="mt-2">
                        <div
                          style={{
                            display:
                              showLog !== "forgotpassword" ? "block" : "none",
                          }}
                          className="text-left mb-4"
                        >
                          <label
                            className="block text-[16px] leading-normal mb-2"
                            htmlFor="name"
                          >
                            Name<span>*</span>
                          </label>
                          <input
                            className="rounded-full border-[1px] border-[#BFBFBF] border-solid px-4 py-3 w-full"
                            type="text"
                            name="name"
                            placeholder="Username"
                            onChange={(e) => {
                              if (showLog === "login") {
                                setValues({
                                  ...values,
                                  username: e.target.value,
                                });
                              } else if (showLog === "signup") {
                                setSignUpValue({
                                  ...signUpValue,
                                  username: e.target.value,
                                });
                              }
                            }}
                          />
                        </div>
                        {showLog === "signup" && (
                          <div className="text-left mb-4">
                            <label
                              className="block text-[16px] leading-normal mb-2"
                              htmlFor="name"
                            >
                              Email<span>*</span>
                            </label>
                            <input
                              className="rounded-full border-[1px] border-[#BFBFBF] border-solid px-4 py-3 w-full"
                              type="text"
                              name="email"
                              placeholder="example@gmail.com"
                              onChange={(e) =>
                                setSignUpValue({
                                  ...signUpValue,
                                  email: e.target.value,
                                })
                              }
                            />
                          </div>
                        )}
                        {showLog === "forgotpassword" && (
                          <div className="text-left mb-4">
                            <label
                              className="block text-[16px] leading-normal mb-2"
                              htmlFor="name"
                            >
                              Email<span>*</span>
                            </label>
                            <input
                              className="rounded-full border-[1px] border-[#BFBFBF] border-solid px-4 py-3 w-full"
                              type="text"
                              name="email"
                              placeholder="example@gmail.com"
                              onChange={(e) =>
                                setEmailForgot({
                                  ...emailForgot,
                                  forgotEmail: e.target.value,
                                })
                              }
                            />
                          </div>
                        )}
                        <div
                          style={{
                            display:
                              showLog !== "forgotpassword" ? "block" : "none",
                          }}
                          className="text-left"
                        >
                          <label
                            className="block text-[16px] leading-normal mb-2"
                            htmlFor="password"
                          >
                            Password<span>*</span>
                          </label>
                          <input
                            className="rounded-full border-[1px] border-[#BFBFBF] border-solid px-4 py-3 w-full"
                            type="password"
                            name="password"
                            placeholder="*****"
                            onChange={(e) => {
                              if (showLog === "login") {
                                setValues({
                                  ...values,
                                  password: e.target.value,
                                });
                              } else if (showLog === "signup") {
                                setSignUpValue({
                                  ...signUpValue,
                                  password: e.target.value,
                                });
                              }
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mb-4">
                  <button
                    className="w-full py-3 px-6 block uppercase bg-orange-orange-4 hover:bg-orange-orange-6 rounded-full mb-4"
                    disabled={isLoading}
                    onClick={() => {
                      if (showLog === "login") {
                        handleLogin();
                      } else if (showLog === "signup") {
                        handleSignUp();
                      } else if (showLog === "forgotpassword") {
                        handleSubmitPassword();
                      }
                    }}
                  >
                    {showLog === "login" && "Login"}
                    {showLog === "signup" && "Sign Up"}
                    {showLog === "forgotpassword" && "Send email"}
                  </button>
                  <button
                    type="button"
                    className="w-full py-3 px-6 justify-center items-center border-[1px] border-[#262626] border-solid rounded-[12px]"
                    onClick={() => {
                      googleLogin();
                    }}
                    style={{
                      display: showLog !== "forgotpassword" ? "flex" : "none",
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M18 8.79C18 12.94 15.79 18 9.13 18C4.12461 18.0332 0.03852 14.0053 0 9C0.03852 3.99461 4.12461 -0.0332996 9.13 -3.96349e-05C11.2007 0.00764036 13.2085 0.71213 14.83 1.99996C14.942 2.09149 15.0109 2.22557 15.02 2.36996C15.0206 2.51605 14.963 2.65637 14.86 2.75996C14.209 3.35516 13.5882 3.98261 13 4.63996C12.8289 4.82826 12.5422 4.85432 12.34 4.69996C11.4161 4.01624 10.2888 3.66394 9.14 3.69996C6.18528 3.69996 3.79 6.09524 3.79 9.05C3.79 12.0047 6.18528 14.4 9.14 14.4C12.14 14.4 13.41 13.12 14.07 10.85H9.5C9.2239 10.85 9 10.6261 9 10.35V7.7C9 7.4238 9.2239 7.2 9.5 7.2H17.5C17.7302 7.1985 17.9244 7.3711 17.95 7.6C17.9871 7.9955 18.0038 8.3927 18 8.79Z" fill="#262626"/>
                    </svg>
                    <span className="ml-4">
                      {showLog === "login" && "Log in with Google"}
                      {showLog === "signup" && "Sign up with Google"}
                    </span>
                  </button>
                </div>

                <div className="flex flex-col items-center">
                  <button
                    onClick={() => dispatch(forgotpassword())}
                    className="w-fit leading-normal mb-4 underline-offset-2 underline"
                  >
                    Forgot your password?
                  </button>
                  <div>
                    <span className="mr-2">
                      {showLog === "login" && "Don't have an account?"}
                      {showLog === "signup" && "Already have an account?"}
                      {showLog === "forgotpassword" && "Or"}
                    </span>
                    <button
                      className="underline-offset-2 underline"
                      onClick={() => {
                        if (showLog === "login") {
                          dispatch(signup());
                        } else if (showLog === "signup") {
                          dispatch(login());
                        } else if (showLog === "forgotpassword") {
                          dispatch(login());
                        }
                      }}
                    >
                      {showLog === "login" && "Sign up"}
                      {showLog === "signup" && "Log in"}
                      {showLog === "forgotpassword" && "Log in"}
                    </button>
                  </div>
                </div>
                <button
                  className="btn-close absolute top-10 right-10 z-11 focus-visible:outline-0"
                  onClick={() => dispatch(close())}
                  ref={cancelButtonRef}
                >
                  <i className="bdx-close"></i>
                </button>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default BdxLogModal;
