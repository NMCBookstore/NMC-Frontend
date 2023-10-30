import React, { Fragment } from "react";
import { Dialog, Transition } from '@headlessui/react';
import { productItem } from "../../assets/img";
import { Link } from 'react-router-dom';


interface ChildProps {
    showCart: boolean;
    setshowCart: React.Dispatch<React.SetStateAction<boolean>>;
}

const CartSidebar: React.FunctionComponent<ChildProps> = ({ showCart, setshowCart }) => {
    const handleClick = () => {
        setshowCart(!showCart); // Cập nhật state bằng cách đảo ngược giá trị hiện tại
    };
    return (
        <Transition.Root show={showCart} as={Fragment}>
            <Dialog as="div" className="relative z-[1010]" onClose={() => handleClick()}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-backdrop bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full">
                            <Transition.Child
                                as={Fragment}
                                enter="transform transition ease-in-out duration-500 sm:duration-700"
                                enterFrom="translate-x-full"
                                enterTo="translate-x-0"
                                leave="transform transition ease-in-out duration-500 sm:duration-700"
                                leaveFrom="translate-x-0"
                                leaveTo="translate-x-full"
                            >
                                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                                    <div className="flex h-full flex-col overflow-y-scroll bg-[#FBF4EA] shadow-xl">
                                        <div className="px-4 sm:px-6 h-[76px] flex items-center border-b border-[#BFBFBF] border-solid">
                                            <Dialog.Title className="text-primary flex items-center">
                                                Your Cart <i className="ml-3 bdx-cart-fill inline-flex items-center"></i>
                                            </Dialog.Title>
                                        </div>
                                        <div className="mt-6 flex-1 px-4">
                                            <div className="sidebar-cart__item">
                                                <div className="sidebar-cart__item--action">
                                                    <button className="sidebar-cart__item--action--btn btn-delete">
                                                        <i className="bdx-close"></i>
                                                    </button>
                                                </div>
                                                <div className="sidebar-cart__item--img flex-shrink-0">
                                                    <img className="" src={productItem} alt="san phẩm" />
                                                </div>
                                                <div className="sidebar-cart__item--desc flex-grow-1">
                                                    <div className="sidebar-cart__item--desc--title">Build the life you want 2</div>
                                                    <div className="sidebar-cart__item--desc--attribute">Arthur c. brooks oprah winfrey</div>
                                                    <div className="sidebar-cart__item--desc--quantity">Quantity: 01</div>
                                                </div>
                                                <div className="sidebar-cart__item--price flex-shrink-0">
                                                    <div className="sidebar-cart__item--price--new">$250</div>
                                                    <div className="sidebar-cart__item--price--old">$300</div>
                                                    <div className="sidebar-cart__item--price--percent">-16.6%</div>
                                                </div>
                                            </div>
                                            <div className="sidebar-cart__item">
                                                <div className="sidebar-cart__item--action">
                                                    <button className="sidebar-cart__item--action--btn btn-delete">
                                                        <i className="bdx-close"></i>
                                                    </button>
                                                </div>
                                                <div className="sidebar-cart__item--img flex-shrink-0">
                                                    <img className="" src={productItem} alt="san phẩm" />
                                                </div>
                                                <div className="sidebar-cart__item--desc flex-grow-1">
                                                    <div className="sidebar-cart__item--desc--title">Build the life you want 2</div>
                                                    <div className="sidebar-cart__item--desc--attribute">Arthur c. brooks oprah winfrey</div>
                                                    <div className="sidebar-cart__item--desc--quantity">Quantity: 01</div>
                                                </div>
                                                <div className="sidebar-cart__item--price flex-shrink-0">
                                                    <div className="sidebar-cart__item--price--new">$250</div>
                                                    <div className="sidebar-cart__item--price--old">$300</div>
                                                    <div className="sidebar-cart__item--price--percent">-16.6%</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="sidebar-cart__footer">
                                            <div className="sidebar-cart__footer--bill">
                                                <div>Total:</div>
                                                <p>500$</p>
                                            </div>
                                            <div className="sidebar-cart__footer--button flex">
                                                <button type="button" className="sidebar-cart__footer--button--shopping" aria-label="Close"
                                                    onClick={() => handleClick()}
                                                >
                                                    Back To Shopping
                                                </button>
                                                <Link to="/user/cart" className="btn sidebar-cart__footer--button--order"
                                                    onClick={() => handleClick()}
                                                >
                                                    <span><i className="bdx-cart-fill"></i></span>
                                                    <span className="text-uppercase">Show Now</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    );
};

export default CartSidebar;