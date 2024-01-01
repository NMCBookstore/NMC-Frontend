import { StripeCardElementOptions } from "@stripe/stripe-js";
import { useState } from "react";
import { jcb, mastercard, visa } from "../../assets/img";
import OrderBill from "../../component/OrderBill";

import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectCurrentUser } from "../../features/auth/authSlice";
import {
  clearNoteAndAddressInfo,
  selectCurrentCardID,
  selectCurrentShipping,
  selectCurrentTotalCartValue,
  selectCurrentUserAddress,
  selectCurrentUserNote,
} from "../../features/cart/cartSlice";
import { User } from "../../interface/User";
import { useCreateOrderMutation } from "../../services/order/orderAPI";
import PaypalCheckoutButton from "./PaypalCheckoutButton";
import uuid from "react-uuid";

const CARD_ELEMENT_OPTIONS: StripeCardElementOptions = {
  iconStyle: "solid",
  style: {
    base: {
      color: "#374259",
      fontWeight: 800,
      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "20px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": { color: "#fce883" },
      "::placeholder": { color: "#2f3542" },
    },
    invalid: {
      iconColor: "#FF8080",
      color: "#FF8080",
    },
  },
};

const OrderPayment: React.FunctionComponent = () => {
  const [isPaymentInfoComplete, setIsPaymentInfoComplete] = useState(false);
  const dispatch = useDispatch();

  const totalCartIdArr = useSelector(selectCurrentCardID);
  const userNote = useSelector(selectCurrentUserNote);
  const userAddress = useSelector(selectCurrentUserAddress);
  const totalPrice = useSelector(selectCurrentTotalCartValue);
  const shipping = useSelector(selectCurrentShipping);

  const [createOrder] = useCreateOrderMutation();

  const handleCardElementChange = (event: any) => {
    setIsPaymentInfoComplete(event.complete);
  };
  const userInfo = useSelector(selectCurrentUser) as User;

  const handleClearInfo = () => {
    dispatch(clearNoteAndAddressInfo());
  };

  const navigate = useNavigate();

  const stripe = useStripe();
  const elements = useElements();

  if (!stripe || !elements) {
    console.error("Stripe is not initialized");
    return null;
  }

  const handlePayment = async (e: any) => {
    e.preventDefault();
    console.log("Paymentttt");
    const cardElement = elements.getElement(CardElement);

    if (!cardElement) {
      console.error("CardElement is not available");
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (!error) {
      try {
        const { id } = paymentMethod;
        const response = await createOrder({
          payment_id: id,
          cart_ids: totalCartIdArr,
          to_address: userAddress,
          total_shipping: Number(shipping.toFixed(2)),
          email: userInfo?.email,
          note: userNote,
          status: "success",
        });
        if ("data" in response) {
          handleClearInfo();
          navigate("/user/order/return", { state: { data: response.data } });
        }
      } catch (error) {
        toast.error("Failed to create ");
        console.log("Error", error);
      }
    } else {
      toast.error("Payment not initialized");
    }
  };

  const handleOrderWithoutPayment = async () => {
    const response = await createOrder({
      payment_id: String(uuid()),
      cart_ids: totalCartIdArr,
      to_address: userAddress,
      total_shipping: Number(shipping.toFixed(2)),
      email: userInfo?.email,
      note: userNote,
      status: "success",
    });
    if ("data" in response) {
      handleClearInfo();
      navigate("/user/order/return", { state: { data: response.data } });
    }
  };

  return (
    <div className="order-info order-payment mt-[76px]">
      <div className="container-nmc mx-auto">
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
                <h3>Fill in your card info to purchase order: </h3>
                <form
                  onSubmit={handlePayment}
                  className="order-payment__list__cart"
                >
                  <CardElement
                    options={CARD_ELEMENT_OPTIONS}
                    onChange={handleCardElementChange}
                  />
                  {isPaymentInfoComplete && (
                    <div className="order-payment__list__handle">
                      <button>
                        <span>Accept</span>
                        <i className="bdx-cart-fill"></i>
                      </button>
                    </div>
                  )}
                </form>
                <h3 className="mb-3">Or use</h3>
                <PaypalCheckoutButton
                  userInfo={userInfo}
                  totalCartIdArr={totalCartIdArr}
                  totalPrice={totalPrice}
                  userNote={userNote}
                  userAddress={userAddress}
                  shipping={shipping}
                />
                <h3 className="mb-3">Or use</h3>
                <div className="order-info__form__btn flex items-center">
                  <button onClick={handleOrderWithoutPayment}>
                    <span>Cash on Delivery</span>
                    <i className="bdx-cart"></i>
                  </button>
                </div>
              </div>
              <div className="order-info__form__btn flex justify-between items-center">
                <a href="javascript:history.back()">Return</a>
              </div>
            </div>
            <div>
              <h2 className="text-second-color">Shipping Details</h2>
              <div className="order-info__form">
                <div className="flex flex-wrap justify-between gap-y-3 p-5 rounded-[24px] mb-6">
                  <div className="sm:w-full w-[49%]">
                    <div className="input-group">
                      <span className="input-group-text align-items-start">
                        <i className="bdx-user inline-flex items-center"></i>
                      </span>
                      <p className="form-control">{userInfo?.full_name}</p>
                    </div>
                  </div>
                  <div className="sm:w-full w-[49%]">
                    <div className="input-group">
                      <span className="input-group-text align-items-start">
                        <i className="bdx-phone inline-flex items-center"></i>
                      </span>
                      <p className="form-control">{userInfo?.phone_number}</p>
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="input-group">
                      <span className="input-group-text align-items-start">
                        <i className="bdx-email inline-flex items-center"></i>
                      </span>
                      <p className="form-control">{userInfo?.email}</p>
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="input-group">
                      <span className="input-group-text align-items-start">
                        <i className="bdx-location inline-flex items-center"></i>
                      </span>
                      <p className="form-control">{userAddress}</p>
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="input-group input-group__textarea">
                      <span className="input-group-text align-items-start">
                        <i className="bdx-note inline-flex items-center"></i>
                      </span>
                      <p className="form-control">
                        {userNote ? userNote : "'You have no note'"}
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
