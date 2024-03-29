import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useRef, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { logo } from "../../assets/img";
import {
  login,
  logout,
  selectCurrentAccessToken,
  selectCurrentUser,
} from "../../features/auth/authSlice";
import { selectCurrentCartProduct } from "../../features/cart/cartSlice";
import { useGetWishlistQuery } from "../../services/wishlist/wishlistAPI";
import NoteNotify from "../NoteNotify";
import CartSidebar from "./CartSidebar";

const Header: React.FunctionComponent = () => {
  const [showSearch, setshowSearch] = useState<boolean>(false);
  const [showCart, setshowCart] = useState<boolean>(false);
  const [text, setText] = useState("")

  const [searchParams, setSearchParams] = useSearchParams();
  const page_id = 1
  const page_size = 24

  const dispatch = useDispatch();

  const token = useSelector(selectCurrentAccessToken);
  const user = useSelector(selectCurrentUser);
  const { data: wishlistBadge } = useGetWishlistQuery();
  // const { data: cartBadge = [] } = useGetCartQuery();
  const cartBadge = useSelector(selectCurrentCartProduct);

  const navigate = useNavigate()

  const handleOpenCart = () => {
    const pathAfterDomain = window.location.pathname;
    const pathArray = pathAfterDomain.split("/").filter(Boolean);
    const page = pathArray[0];
    if (page !== "cart" && page !== "order") {
      setshowCart(!showCart);
    }
  };
  const handleToLoginPage = () => {
    if (token) {
      navigate("/user/profile")
    }
    else {
      dispatch(login())
    }
  }

  const handleToWishlistPage = () => {
    if (token) {
      navigate("/user/wishlist")
    }
    else {
      dispatch(login())
    }
  }

  const handleOpenCartSide = () => {
    if (token) {
      handleOpenCart();
    } else {
      dispatch(login());
    }
  };


  const cancelButtonRef = useRef(null);
  const numberWishlist = Number(wishlistBadge?.length);
  const numberCart = Number(cartBadge?.length);
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
          {/* Search input */}
          <input
            className="w-full px-[24px] h-4/5 rounded-full"
            type="text"
            placeholder="Search by Title, Author, ISBN or Keywords"
            defaultValue={searchParams.get("text") ?? "" ? searchParams.get("text") ?? "" : text}
            onChange={(e) => { setText(e.target.value) }}
          />
          <i
            onClick={() => window.location.replace(`/product/all?page_id=${page_id}&page_size=${page_size}${text ? "&text=" + text : ""}`)}
            className="bdx-search flex items-center absolute text-[20px] text-[#595959] right-[24px] cursor-pointer"
          ></i>
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
            <div
              onClick={handleToWishlistPage}
              className="flex flex-col items-center justify-center cursor-pointer hover-text-orange-orange-4-header"
            >
              <div className="relative">
                <i className="bdx-heart text-[20px] text-[#fff] flex items-center"></i>
                {numberWishlist > 0 ? (
                  <NoteNotify numberCount={numberWishlist} />
                ) : null}
              </div>
              <p className="text-[#fff] text-[14px] uppercase block sm:hidden">
                Wishlist
              </p>
            </div>
          </div>
          <div className="flex">
            <div
              className="flex flex-col items-center justify-center cursor-pointer hover-text-orange-orange-4-header"
              onClick={handleOpenCartSide}
            >
              <div className="relative">
                <i className="bdx-cart-fill text-[20px] text-[#fff] flex items-center"></i>
                {numberCart > 0 ? (
                  <NoteNotify numberCount={numberCart} />
                ) : null}
              </div>
              <p className="text-[#fff] text-[14px] uppercase block sm:hidden">
                Cart
              </p>
            </div>
          </div>
          <div className="flex relative subMenu-btn">
            <div
              onClick={() => handleToLoginPage()}
              className="flex flex-col items-center justify-center cursor-pointer hover-text-orange-orange-4-header"
            >
              <div className="relative">
                {/* cần phải chỉnh lại kích cỡ ảnh */}
                {token ? (
                  <img
                    style={{
                      width: "22px",
                      height: "22px",
                      borderRadius: "50%",
                      objectFit:"cover"
                    }}
                    src={user?.image}
                  ></img>
                ) : (
                  <i className="bdx-user text-[20px] text-[#fff] flex items-center"></i>
                )}

                {/* <NoteNotify numberCount={numberCount2} /> */}
              </div>
              <p className="text-[#fff] text-[14px] uppercase block sm:hidden">
                Account
              </p>
            </div>
            <div className="absolute top-full subMenu z-[100]">
              <ul>
                <li>
                  <p onClick={handleToLoginPage}>
                    <span>Profile</span>
                  </p>
                </li>

                {token ? (
                  <li onClick={() => dispatch(logout())}>
                    <button>
                      <span>Logout</span>
                    </button>
                  </li>
                ) : (
                  <li onClick={() => dispatch(login())}>
                    <button>
                      <span>Login</span>
                    </button>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <CartSidebar
        showCart={showCart}
        setshowCart={setshowCart}
        cartItem={cartBadge}
      ></CartSidebar>
    </header>
  );
};

export default React.memo(Header);
