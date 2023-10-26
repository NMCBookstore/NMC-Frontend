import React from "react";
import { Link } from 'react-router-dom';

import LogModal from "./LogModal";

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
            <LogModal />
        </div>
    );
};

export default Footer;