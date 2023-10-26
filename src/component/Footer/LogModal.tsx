import React, { Fragment, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { RootState } from "../../app/store";
import { Dialog, Transition } from "@headlessui/react";
import { useSelector, useDispatch } from "react-redux";
import {
  login,
  close,
  signup,
  loginStart,
  setCredentials,
} from "../../features/auth/authSlice";
import { useLoginMutation } from "../../services/authentication/authAPI";
const BdxLogModal: React.FunctionComponent = () => {
  const showLog = useSelector((state: RootState) => state.auth.status);
  const cancelButtonRef = useRef(null);
  const dispatch = useDispatch();

  const [login] = useLoginMutation();

  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const handleLogin = async () => {
    dispatch(loginStart());
    try {
      const data = await login(values).unwrap();
      const { user, access_token, refresh_token } = data;
      dispatch(setCredentials({ user, access_token, refresh_token }));
      console.log(data);
    } catch (err) {
      console.log(err);
      // dispatch(loginFailed());
    }
    return false;
  };
  const handleSignUp = () => {
    console.log("my signup");
  };
  const handleSubmitPassword = () => {
    console.log("my forgotpassword");
  };
  return (
    <Transition.Root show={showLog == "none" ? false : true} as={Fragment}>
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
          <div className="flex min-h-full items-end justify-center p-4 text-center items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-[48px] bg-[#fff] text-left shadow-xl transition-all sm:my-8 w-full max-w-[440px] px-5 py-10 sm:px-10">
                <div className="mb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="text-center w-full">
                      <Dialog.Title
                        as="h3"
                        className="mb-4 font-semibold leading-normal capitalize text-[40px] text-[#0F3BB0]"
                      >
                        {showLog == "login" && "Login"}
                        {showLog == "signup" && "Sign Up"}
                        {showLog == "forgotpassword" && "Forgot Password"}
                      </Dialog.Title>
                      <p className="text-[#595959] text-[20px] leading-normal mb-6">
                        Welcome to NMC Bookstore!
                      </p>
                      <div className="mt-2">
                        <div className="text-left mb-4">
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
                            onChange={(e) =>
                              setValues({ ...values, username: e.target.value })
                            }
                          />
                        </div>
                        {showLog == "signup" && (
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
                            />
                          </div>
                        )}
                        <div className="text-left">
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
                            onChange={(e) =>
                              setValues({ ...values, password: e.target.value })
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mb-4">
                  <button
                    // type="submit"
                    className="w-full py-3 px-6 block uppercase bg-[#F7C937] rounded-full mb-4"
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
                    {showLog == "login" && "Login"}
                    {showLog == "signup" && "Sign Up"}
                    {showLog == "forgotpassword" && "Submit"}
                  </button>
                  <button
                    type="button"
                    className="w-full py-3 px-6 block border-[1px] border-[#262626] border-solid rounded-[12px]"
                  >
                    Log in with Google
                  </button>
                </div>
                <div className="flex flex-col items-center">
                  <button className="w-fit leading-normal mb-4 underline-offset-2 underline">
                    Forgot your password?
                  </button>
                  <div>
                    <span className="mr-2">Don't have an account?</span>
                    <button
                      className="underline-offset-2 underline"
                      onClick={() => dispatch(signup())}
                    >
                      sign up
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
