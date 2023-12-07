import React from "react";
import { StripeCardElementOptions } from "@stripe/stripe-js";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";

const CARD_ELEMENT_OPTIONS: StripeCardElementOptions = {
  iconStyle: "default",
  style: {
    base: {
      color: "#82A0D8",
      fontWeight: 800,
      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "20px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": { color: "#fce883" },
      "::placeholder": { color: "#2f3542" },
    },
    invalid: {
      iconColor: "#eb2f06",
      color: "#82A0D8",
    },
  },
};

const StripeCheckoutButton = () => {
  return (
    <div>
      <CardElement options={CARD_ELEMENT_OPTIONS} />
    </div>
  );
};

export default StripeCheckoutButton;
