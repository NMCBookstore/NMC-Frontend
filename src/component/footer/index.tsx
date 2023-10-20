import React from "react";
import { Link } from 'react-router-dom';

const Footer: React.FunctionComponent = () => {
    return (
        <div>
            <div className="footer bg-[#fcfcfc]">
                <div className="container-nmc mx-auto pt-10 pb-14">
                    <div className="flex flex-row lg:gap-y-8 lg:flex-wrap flex-nowrap">
                        <div className="px-3 w-1/3 lg:w-1/2 sm:w-full">
                            <h3 className="text-[20px] text-primary font-semibold leading-normal mb-6" >NMC Bookstore</h3>
                            <ul className="flex flex-col gap-4 text-[#595959]">
                                <li className="flex items-center"  >
                                    <i className=" mr-2 text-primary text-[26px] inline-flex items-center bdx-location"></i> <p className="inline text-[16px] leading-[24px]">1 Vo Van Ngan, TP. Thu Duc</p>
                                </li>
                                <li className="flex items-center"  >
                                    <i className=" mr-2 text-primary text-[22px] inline-flex items-center bdx-phone"></i> <p className="inline text-[16px] leading-[24px]">033 555 8814</p>
                                </li>
                                <li className="flex items-center"  >
                                    <i className=" mr-2 text-primary text-[22px] inline-flex items-center bdx-phone"></i> <p className="inline text-[16px] leading-[24px]">012 345 6789</p>
                                </li>
                            </ul>
                            <div className="mt-8">
                                <h3 className="text-[20px] text-primary font-semibold leading-normal mb-4">Follow us</h3>
                                <ul className="flex gap-3">
                                    <li className="w-[48px] h-[48px] bg-[#1877F2] rounded-full flex items-center justify-center"><i className="bdx-facebook text-[white] text-[22px] inline-flex items-center"></i></li>
                                    <li className="w-[48px] h-[48px] bg-[#1DA1F2] rounded-full flex items-center justify-center" ><i className="text-[white] text-[22px] inline-flex items-center bdx-twitter"></i></li>
                                    <li className="w-[48px] h-[48px] bg-[#FF0000] rounded-full flex items-center justify-center" ><i className="text-[white] text-[22px] inline-flex items-center bdx-youtube"></i></li>
                                    <li className="w-[48px] h-[48px] bg-[#F00073] rounded-full flex items-center justify-center" ><i className="text-[white] text-[22px] inline-flex items-center bdx-instagram"></i></li>
                                    <li className="w-[48px] h-[48px] bg-[#E60023] rounded-full flex items-center justify-center" ><i className="text-[white] text-[22px] inline-flex items-center bdx-pinterest"></i></li>
                                </ul>
                            </div>
                        </div>
                        <div className="px-3 w-1/4 lg:w-1/2 sm:w-full">
                            <h3 className="text-[20px] text-primary font-semibold leading-normal mb-6" >Popular categories</h3>
                            <ul className="flex flex-col gap-4 text-[#595959]">
                                <li>
                                    <Link to="Fiction">Fiction</Link>
                                </li>
                                <li>
                                    <Link to="Non-Fiction">Non-Fiction</Link>
                                </li>
                                <li>
                                    <Link to="Children’s">Children’s</Link>
                                </li>
                                <li>
                                    <Link to="Stationery and gifts">Stationery and gifts</Link>

                                </li>
                                <li>
                                    <Link to="Gift cards and vouchers">Gift cards and vouchers</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="px-3 w-1/6 lg:w-1/2 sm:w-full">
                            <h3 className="text-[20px] text-primary font-semibold leading-normal mb-6" >About us</h3>
                            <ul className="flex flex-col gap-4 text-[#595959]">
                                <li>
                                    <Link to="Our-story">Our story</Link>
                                </li>
                                <li>
                                    <Link to="Blog">Blog</Link>
                                </li>
                                <li>
                                    <Link to="Events">Events</Link>
                                </li>
                                <li>
                                    <Link to="Contact">Contact</Link>
                                </li>
                                <li>
                                    <Link to="Careers">Careers</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="px-3 w-1/4 lg:w-1/2 sm:w-full">
                            <h3 className="text-[20px] text-primary font-semibold leading-normal mb-6" >Support</h3>
                            <ul className="flex flex-col gap-4 text-[#595959]">
                                <li>
                                    <Link to="track-order">Track order</Link>
                                </li>
                                <li>
                                    <Link to="delivery-methods">Delivery methods</Link>
                                </li>
                                <li>
                                    <Link to="guarantee-and-returns">Guarantee and returns</Link>
                                </li>
                                <li>
                                    <Link to="FAQs">FAQs</Link>
                                </li>
                                <li>
                                    <Link to="terms-and-Privacy">Terms and Privacy</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#F0F0F0] border-t border-[#BFBFBF] border-solid">
                <p className="lg:container mx-auto text-center py-4">© 2023 NMC All Rights Reserved</p>
            </div>
{/* 
            <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                <div className="fixed inset-0 bg-backdrop bg-opacity-75 transition-opacity"></div>
                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center items-center sm:px-3 p-0">
                        <form className="relative transform overflow-hidden rounded-[48px] bg-[#fff] text-left shadow-xl transition-all sm:my-0 my-8 w-full max-w-[440px] sm:px-5 py-10 px-10">
                            <div className=" mb-4">
                                <div>
                                    <div className="text-center w-full">
                                        <h3 className="mb-4 font-semibold leading-normal capitalize text-[40px] text-[#0F3BB0]" id="modal-title">Login</h3>
                                        <p className="text-[#595959] text-[20px] leading-normal mb-6" >Welcome to NMC Bookstore!</p>
                                        <div >
                                            <div className="text-left mb-4">
                                                <label className="block text-[16px] leading-normal mb-2" htmlFor="name">Name<span>*</span></label>
                                                <input className="rounded-full border-[1px] border-[#BFBFBF] border-solid px-4 py-3 w-full" type="text" name="name" placeholder="Username" />
                                            </div>
                                            <div className="text-left mb-4">
                                                <label className="block text-[16px] leading-normal mb-2" htmlFor="name">Email<span>*</span></label>
                                                <input className="rounded-full border-[1px] border-[#BFBFBF] border-solid px-4 py-3 w-full" type="text" name="email" placeholder="example@gmail.com" />
                                            </div>
                                            <div className="text-left">
                                                <label className="block text-[16px] leading-normal mb-2" htmlFor="password">Password<span>*</span></label>
                                                <input className="rounded-full border-[1px] border-[#BFBFBF] border-solid px-4 py-3 w-full" type="text" name="password" placeholder="*****" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-4">
                                <button type="submit" className="w-full py-3 px-6 block uppercase bg-[#F7C937] rounded-full mb-4">Login</button>
                                <button type="button" className="w-full py-3 px-6 block border-[1px] border-[#262626] border-solid rounded-[12px]">Log in with Google</button>
                            </div>
                            <div className="flex flex-col items-center">
                                <button className="w-fit leading-normal mb-4 underline-offset-2 underline">Forgot your password?</button>
                                <div>
                                    <span className="mr-2">Don't have an account?</span><button className="underline-offset-2 underline">sign up</button>
                                </div>
                            </div>
                            <button className="btn-close absolute top-10 right-10 z-11">
                                <i className="bdx-close"></i>
                            </button>
                        </form>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default Footer;
