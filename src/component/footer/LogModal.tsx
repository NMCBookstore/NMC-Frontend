import React, { useState, useMemo } from "react";
import { useLoginMutation } from "../../services/authentication/authAPI";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginStart, setCredentials } from "../../features/auth/authSlice";

const LogModal = () => {

  const [modalType, setModalType] = useState("");

  const openModal = (type: string) => {
    setModalType(type);
  };

  const closeModal = () => {
    setModalType("");
  };

  const ModalContent = useMemo(() => {
    switch (modalType) {
      case "login":
        return <LoginForm onClose={closeModal} />;
      case "signup":
        return <SignupForm onClose={closeModal} />;
      case "forgotPassword":
        return <ForgotPasswordForm onClose={closeModal} />;
      default:
        return null;
    }
  }, [modalType]);

  return (
    <div>
      <button onClick={() => openModal("login")}>Login</button>
      <button onClick={() => openModal("signup")}>Sign up</button>
      <button onClick={() => openModal("forgotPassword")}>
        Forgot Password
      </button>

      {modalType && <Modal onClose={closeModal}>{ModalContent}</Modal>}
    </div>
  );
};

type ModalProps = {
    children: React.ReactNode;
    onClose: () => void;
  };

const Modal = ({ children, onClose }: ModalProps) => {
  return (
    <div className="modal">
      <div className="modal-content">
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};


const LoginForm = ({ onClose }: { onClose: () => void }) => {
  const [login] = useLoginMutation();

  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const handleLogin = async (e: any) => {
    e.preventDefault();
    dispatch(loginStart());
    
    try {
      const  data  = await login(values).unwrap();
      const { user, access_token } = data;
      dispatch(setCredentials({ user, access_token }));
      console.log(data)
    }
    catch (err) {
      console.log(err)
      // dispatch(loginFailed());
    }
  }

  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-backdrop bg-opacity-75 transition-opacity"></div>
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center items-center sm:p-0">
          <form className="relative transform overflow-hidden rounded-[48px] bg-[#fff] text-left shadow-xl transition-all sm:my-8 w-full max-w-[440px] px-5 py-10 sm:px-10">
            <div className=" mb-4">
              <div className="sm:flex sm:items-start">
                <div className="text-center w-full">
                  <h3
                    className="mb-4 font-semibold leading-normal capitalize text-[40px] text-[#0F3BB0]"
                    id="modal-title"
                  >
                    Login
                  </h3>
                  <p className="text-[#595959] text-[20px] leading-normal mb-6">
                    Welcome to NMC Bookstore!
                  </p>
                  <div>
                    <div className="text-left mb-4">
                      <label
                        className="block text-[16px] leading-normal mb-2"
                        htmlFor="name"
                      >
                        Username<span>*</span>
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
                onClick={handleLogin}
              >
                Login
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
                <button className="underline-offset-2 underline">
                  Sign up
                </button>
              </div>
            </div>
            <button className="btn-close absolute top-10 right-10 z-11">
              <i className="bdx-close"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const SignupForm = ({ onClose }: { onClose: () => void }) => {
  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-backdrop bg-opacity-75 transition-opacity"></div>
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center items-center sm:p-0">
          <form className="relative transform overflow-hidden rounded-[48px] bg-[#fff] text-left shadow-xl transition-all sm:my-8 w-full max-w-[440px] px-5 py-10 sm:px-10">
            <div className=" mb-4">
              <div className="sm:flex sm:items-start">
                <div className="text-center w-full">
                  <h3
                    className="mb-4 font-semibold leading-normal capitalize text-[40px] text-[#0F3BB0]"
                    id="modal-title"
                  >
                    Sign up
                  </h3>
                  <p className="text-[#595959] text-[20px] leading-normal mb-6">
                    Welcome to NMC Bookstore!
                  </p>
                  <div>
                    <div className="text-left mb-4">
                      <label
                        className="block text-[16px] leading-normal mb-2"
                        htmlFor="name"
                      >
                        Username<span>*</span>
                      </label>
                      <input
                        className="rounded-full border-[1px] border-[#BFBFBF] border-solid px-4 py-3 w-full"
                        type="text"
                        name="name"
                        placeholder="Username"
                      />
                    </div>
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
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <button
                type="submit"
                className="w-full py-3 px-6 block uppercase bg-[#F7C937] rounded-full mb-4"
              >
                Sign up
              </button>
              <button
                type="button"
                className="w-full py-3 px-6 block border-[1px] border-[#262626] border-solid rounded-[12px]"
              >
                Sign up with Google
              </button>
            </div>
            <button className="btn-close absolute top-10 right-10 z-11">
              <i className="bdx-close"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const ForgotPasswordForm = ({ onClose }: { onClose: () => void }) => {
  return <div>Forgot Password Form</div>;
};

export default LogModal;
