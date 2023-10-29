import React from 'react';
import { Link } from 'react-router-dom';
import OrderBill from "../../component/OrderBill";
import Breadcrumb from "../../component/Breadcrumb";
import { visa, jcb, mastercard } from "../../assets/img";
const OrderPayment = () => {
    return (
        <div className="order-info order-payment mt-[76px]">
            <div className="container-nmc mx-auto">
                <Breadcrumb></Breadcrumb>
                <div className="flex flex-wrap lg:mx-0 mx-[-12px]">
                    <div className="md:w-full w-[50%] px-3 md:mb-6">
                        <div className="mb-10">
                            <h1>Billing Information</h1>
                            <div className="order-payment__list mb-6">
                                <h2 className="text-center mb-6 text-orange-orange-6">Payment Method</h2>
                                <div className="flex justify-center gap-3 mb-3">
                                    <img className="w-[40px]" src={visa} alt="visa" />
                                    <img className="w-[40px]" src={jcb} alt="jcb" />
                                    <img className="w-[40px]" src={mastercard} alt="mastercard" />
                                </div>
                                <form className="order-payment__list__item">
                                    <div className="w-full">
                                        <div className="">
                                            <p className="order-payment__list__item__label">Card Number:</p>
                                            <input type="text" className="order-payment__list__item__input" placeholder="Card Number"></input>
                                        </div>
                                    </div>
                                    <div className="sm:w-full w-[49%]">
                                        <div className="">
                                            <p className="order-payment__list__item__label">Expiry Date:</p>
                                            <input type="text" className="order-payment__list__item__input" placeholder="Expiry Date"></input>
                                        </div>
                                    </div>
                                    <div className="sm:w-full w-[49%]">
                                        <div className="">
                                            <p className="order-payment__list__item__label">CVV:</p>
                                            <input type="text" className="order-payment__list__item__input" placeholder="CVV"></input>
                                        </div>
                                    </div>
                                </form>
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

                        </div>
                        <div>
                            <h2 className="text-second-color" >Shipment Details</h2>
                            <form className="order-info__form">
                                <div className="flex flex-wrap justify-between gap-y-3 p-5 rounded-[24px] mb-6">
                                    <div className="sm:w-full w-[49%]">
                                        <div className="input-group">
                                            <span className="input-group-text align-items-start"><i className="bdx-user inline-flex items-center"></i></span>
                                            <p className="form-control">Full Name</p>
                                        </div>
                                    </div>
                                    <div className="sm:w-full w-[49%]">
                                        <div className="input-group">
                                            <span className="input-group-text align-items-start"><i className="bdx-phone inline-flex items-center"></i></span>
                                            <p className="form-control">Phone Number</p>
                                        </div>
                                    </div>
                                    <div className="w-full">
                                        <div className="input-group">
                                            <span className="input-group-text align-items-start"><i className="bdx-email inline-flex items-center"></i></span>
                                            <p className="form-control">Email</p>
                                        </div>
                                    </div>
                                    <div className="w-full">
                                        <div className="input-group">
                                            <span className="input-group-text align-items-start"><i className="bdx-location inline-flex items-center"></i></span>
                                            <p className="form-control">Address</p>
                                        </div>
                                    </div>
                                    <div className="w-full">
                                        <div className="input-group input-group__textarea">
                                            <span className="input-group-text align-items-start"><i className="bdx-note inline-flex items-center"></i></span>
                                            <p className="form-control">Your note content Your note content Your note content Your note content Your note content Your note content</p>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="md:w-full w-[50%] px-3">
                        <OrderBill></OrderBill>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderPayment;