import React from "react";
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";

const PaypalCheckoutButton = () => {
  return <PayPalButtons 
  style={{
    color: "white",
    height: 48,
    tagline: false,
    shape: "pill"
  }}
  fundingSource="paypal"
  />;
};

export default PaypalCheckoutButton;
