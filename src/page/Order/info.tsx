import React from 'react';
import { Link } from 'react-router-dom';
import OrderBill from "../../component/OrderBill";
import Breadcrumb from "../../component/Breadcrumb";

const OrderInfo = () => {
    const pathAfterDomain = window.location.pathname;

    return (
        <div className="order-info mt-[76px]">
            <div className="container-nmc mx-auto">
                <Breadcrumb></Breadcrumb>
                <div className="flex flex-wrap lg:mx-0 mx-[-12px]">
                    <div className="md:w-full w-[50%] px-3 md:mb-6">
                        <h1>Shipment Details</h1>
                        <form className="order-info__form">
                            <div className="flex flex-wrap justify-between gap-y-3 p-5 rounded-[24px] mb-6">
                                <div className="sm:w-full w-[49%]">
                                    <div className="input-group">
                                        <span className="input-group-text align-items-start"><i className="bdx-user inline-flex items-center"></i></span>
                                        <input type="text" className="form-control" placeholder="Full Name"></input>
                                    </div>
                                </div>
                                <div className="sm:w-full w-[49%]">
                                    <div className="input-group">
                                        <span className="input-group-text align-items-start"><i className="bdx-phone inline-flex items-center"></i></span>
                                        <input type="text" className="form-control" placeholder="Phone Number"></input>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <div className="input-group">
                                        <span className="input-group-text align-items-start"><i className="bdx-email inline-flex items-center"></i></span>
                                        <input type="text" className="form-control" placeholder="Email"></input>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <div className="input-group">
                                        <span className="input-group-text align-items-start"><i className="bdx-location inline-flex items-center"></i></span>
                                        <input type="text" className="form-control" placeholder="Address"></input>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <div className="input-group input-group__textarea">
                                        <span className="input-group-text align-items-start"><i className="bdx-note inline-flex items-center"></i></span>
                                        <textarea className="form-control" placeholder="Note..."></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="order-info__form__btn flex justify-between items-center">
                                <a href="javascript:history.back()">
                                    Return
                                </a>
                                <Link to="/order/payment">
                                    Accept
                                    <i className="bdx-cart"></i>
                                </Link>
                            </div>
                        </form>
                    </div>
                    <div className="md:w-full w-[50%] px-3">
                        <OrderBill></OrderBill>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderInfo;