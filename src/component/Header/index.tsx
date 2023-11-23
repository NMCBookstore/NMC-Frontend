import React, { Fragment, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Dialog, Transition } from "@headlessui/react";

import NoteNotify from "../NoteNotify";
import { useDispatch, useSelector } from "react-redux";
import { login, selectCurrentAccessToken, selectCurrentUser } from "../../features/auth/authSlice";
import { logo } from "../../assets/img";
import CartSidebar from "./CartSidebar";
import { useGetWishlistQuery } from "../../services/wishlist/wishlistAPI";

const Header: React.FunctionComponent = () => {
  const [showSearch, setshowSearch] = useState<boolean>(false);
  const [showCart, setshowCart] = useState<boolean>(false);
  const dispatch = useDispatch();

  const token = useSelector(selectCurrentAccessToken);
  const user = useSelector(selectCurrentUser);
  const {data: wishlistBadge} = useGetWishlistQuery()

  const handleOpenCart = () => {
    const pathAfterDomain = window.location.pathname;
    const pathArray = pathAfterDomain.split("/").filter(Boolean);
    const page = pathArray[0];
    if (page !== "cart" && page !== "order") {
      setshowCart(!showCart);
    }
  };

  const handleOpenCartSide = () => {
    if (token) {
        handleOpenCart()
    } else {
        dispatch(login())
    }
  }

  const cancelButtonRef = useRef(null);
  const numberWishlist = Number(wishlistBadge?.length);
  const numberCount3: number = 6;
  const numberCount2: number = 2;

  return (
    <header className="bg-primary header fixed w-full top-0 z-[1000]">
      <div className="container-nmc mx-auto py-[12px] flex flex-row">
        <Link
          to="/"
          className="w-[80px] flex justify-center px-[12px] shrink-0"
        >
          <img className="" src={logo} alt="logo" />
        </Link>
        <div className="xl:w-3/4 w-2/3 flex md:hidden items-center px-[12px] relative">
          <input
            className="w-full px-[24px] h-4/5 rounded-full"
            type="text"
            placeholder="Search by Title, Author, ISBN or Keywords"
          />
          <i className="bdx-search flex items-center absolute text-[20px] text-[#595959] right-[24px] cursor-pointer"></i>
        </div>
        <div className="header__content flex flex-row justify-end px-[12px] sm:px-[24px] gap-[24px] grow">
          <div className="hidden sm:flex">
            <i
              className="bdx-search-2 text-[20px] text-[#fff] flex items-center"
              onClick={() => setshowSearch(!showSearch)}
            ></i>
            <Transition.Root show={showSearch} as={Fragment}>
              <Dialog
                as="div"
                className="relative z-10"
                initialFocus={cancelButtonRef}
                onClose={setshowSearch}
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
                  <div className="flex min-h-full items-end justify-center text-center sm:items-start p-0">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0 translate-y-0 scale-95"
                      enterTo="opacity-100 translate-y-0 scale-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100 translate-y-0 scale-100"
                      leaveTo="opacity-0 translate-y-0 scale-95"
                    >
                      <Dialog.Panel className="relative transform overflow-hidden rounded-lg text-left transition-all my-[64px] sm:w-full sm:max-w-lg">
                        <div className="flex items-start w-full">
                          <div className="p-3 text-left w-full">
                            <form className="flex items-end justify-center items-start relative">
                              <input
                                className="relative w-full rounded-[16px] py-[16px] px-[24px] z-0"
                                type="text"
                              />
                              <button className="absolute top-[6px] right-[8px] bg-primary z-1 w-[44px] h-[44px] rounded-[12px] right-[18px]">
                                <i className="bdx-search-2 text-[20px] h-full flex items-center justify-center text-[#fff]"></i>
                              </button>
                            </form>
                          </div>
                        </div>
                      </Dialog.Panel>
                    </Transition.Child>
                  </div>
                </div>
              </Dialog>
            </Transition.Root>
          </div>
          <div className="flex">
            <Link
              to="/user/wishlist"
              className="flex flex-col items-center justify-center cursor-pointer hover-text-orange-orange-4-header"
            >
              <div className="relative">
                <i className="bdx-heart text-[20px] text-[#fff] flex items-center"></i>
                {numberWishlist > 0 ? <NoteNotify numberCount={numberWishlist} /> : null}
              </div>
              <p className="text-[#fff] text-[14px] uppercase block sm:hidden">
                Wishlist
              </p>
            </Link>
          </div>
          <div className="flex">
            <div
              className="flex flex-col items-center justify-center cursor-pointer hover-text-orange-orange-4-header"
              onClick={handleOpenCartSide}
            >
              <div className="relative">
                <i className="bdx-cart-fill text-[20px] text-[#fff] flex items-center"></i>
                <NoteNotify numberCount={numberCount3} />
              </div>
              <p className="text-[#fff] text-[14px] uppercase block sm:hidden">
                Cart
              </p>
            </div>
          </div>
          <div className="flex relative subMenu-btn">
            <Link
              to="/user/account"
              className="flex flex-col items-center justify-center cursor-pointer hover-text-orange-orange-4-header"
            >
              <div className="relative">

                {/* cần phải chỉnh lại kích cỡ ảnh */}
                {token ? <img style={{ width: '22px', height: '22px', borderRadius: '50%' }} src={user?.image}></img> : <i className="bdx-user text-[20px] text-[#fff] flex items-center"></i> }
                
                {/* <NoteNotify numberCount={numberCount2} /> */}
              </div>
              <p className="text-[#fff] text-[14px] uppercase block sm:hidden">
                Account
              </p>
            </Link>
            <div className="absolute top-full subMenu z-[100]">
              <ul>
                <li>
                  <Link to="/profile">
                    <span>Profile</span>
                  </Link>
                </li>
                <li>
                  <Link to="/profile">
                    <span>Edit Profile</span>
                  </Link>
                </li>
                <li onClick={() => dispatch(login())}>
                  <button>
                    <span>Login</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <CartSidebar showCart={showCart} setshowCart={setshowCart}></CartSidebar>
    </header>
  );
};

export default React.memo(Header);
