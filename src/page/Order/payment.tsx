import React, { useState } from "react";
import { Link } from "react-router-dom";
import OrderBill from "../../component/OrderBill";
import Breadcrumb from "../../component/Breadcrumb";
import { visa, jcb, mastercard } from "../../assets/img";

import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";

const CARD_OPTIONS = {
  style: {
    base: {
      color: "#000",
      fontWeight: 400,
      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "16px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": { color: "#fce883" },
      "::placeholder": { color: "#2f3542" },
    },
    invalid: {
      iconColor: "#eb2f06",
      color: "#000",
    },
  },
};

const OrderPayment = () => {
  const stripe = useStripe();
  const elements = useElements();

  if (!stripe || !elements) {
    console.error("Stripe is not initialized");
    return null;
  }

  const handlePayment = async (e:any) => {
    e.preventDefault();
    console.log("Paymentttt");
    const cardElement = elements.getElement(CardElement);

    if (!cardElement) {
      console.error("CardElement is not available");
      return;
    }

    try {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: cardElement,
      });

      if (error) {
        console.error("Payment failed:", error.message);
      } else if (paymentMethod) {
        console.log("Payment successful. PaymentMethod:", paymentMethod);
      } else {
        console.error("Unexpected result: No paymentMethod returned.");
      }
    } catch (error) {
      console.error("Unexpected error:", error);
    }
  };

  return (
    <div className="order-info order-payment mt-[76px]">
      <div className="container-nmc mx-auto">
        <Breadcrumb></Breadcrumb>
        <div className="flex flex-wrap lg:mx-0 mx-[-12px]">
          <div className="md:w-full w-[50%] px-3 md:mb-6">
            <div className="mb-10">
              <h1>Billing Information</h1>
              <div className="order-payment__list mb-6">
                <h2 className="text-center mb-6 text-orange-orange-6">
                  Payment Method
                </h2>
                <div className="flex justify-center gap-3 mb-3">
                  <img className="w-[40px]" src={visa} alt="visa" />
                  <img className="w-[40px]" src={jcb} alt="jcb" />
                  <img className="w-[40px]" src={mastercard} alt="mastercard" />
                </div>
                {/* this is the checkout part */}
                <form onSubmit={handlePayment} className="order-payment__list__item">
                  {/* <div className="w-full">
                    <div className="">
                      <p className="order-payment__list__item__label">
                        Card Number:
                      </p>
                      <input
                        type="text"
                        className="order-payment__list__item__input"
                        placeholder="Card Number"
                      ></input>
                    </div>
                  </div>
                  <div className="sm:w-full w-[49%]">
                    <div className="">
                      <p className="order-payment__list__item__label">
                        Expiry Date:
                      </p>
                      <input
                        type="text"
                        className="order-payment__list__item__input"
                        placeholder="Expiry Date"
                      ></input>
                    </div>
                  </div>
                  <div className="sm:w-full w-[49%]">
                    <div className="">
                      <p className="order-payment__list__item__label">CVV:</p>
                      <input
                        type="text"
                        className="order-payment__list__item__input"
                        placeholder="CVV"
                      ></input>
                    </div>
                  </div> */}
                  <h4>Nothing here ?</h4>
                  <CardElement options={CARD_OPTIONS} />
                  <h4>Nothing there ?</h4>
                  <button >
                    Accept
                    <i className="bdx-cart"></i>
                  </button>
                </form>
              </div>
              <div className="order-info__form__btn flex justify-between items-center">
                <a href="javascript:history.back()">Return</a>
                {/* <Link to="/order/return"> */}
                <button onSubmit={handlePayment}>
                  Accept
                  <i className="bdx-cart"></i>
                </button>
                {/* </Link> */}
              </div>
            </div>
            <div>
              <h2 className="text-second-color">Shipment Details</h2>
              <div className="order-info__form">
                <div className="flex flex-wrap justify-between gap-y-3 p-5 rounded-[24px] mb-6">
                  <div className="sm:w-full w-[49%]">
                    <div className="input-group">
                      <span className="input-group-text align-items-start">
                        <i className="bdx-user inline-flex items-center"></i>
                      </span>
                      <p className="form-control">Full Name</p>
                    </div>
                  </div>
                  <div className="sm:w-full w-[49%]">
                    <div className="input-group">
                      <span className="input-group-text align-items-start">
                        <i className="bdx-phone inline-flex items-center"></i>
                      </span>
                      <p className="form-control">Phone Number</p>
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="input-group">
                      <span className="input-group-text align-items-start">
                        <i className="bdx-email inline-flex items-center"></i>
                      </span>
                      <p className="form-control">Email</p>
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="input-group">
                      <span className="input-group-text align-items-start">
                        <i className="bdx-location inline-flex items-center"></i>
                      </span>
                      <p className="form-control">Address</p>
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="input-group input-group__textarea">
                      <span className="input-group-text align-items-start">
                        <i className="bdx-note inline-flex items-center"></i>
                      </span>
                      <p className="form-control">
                        Your note content Your note content Your note content
                        Your note content Your note content Your note content
                      </p>
                    </div>
                  </div>
                </div>
              </div>
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
