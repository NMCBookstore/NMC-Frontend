import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import OrderPayment from "./payment";

const PUBLIC_KEY =
  "pk_test_51N7HNyBcmskstRut4EHrGvSBLYSnj85qN35yh9o0SYcYHJ82Ss9KzQhPia0E9pOWrtohUBDmYP3S1f5JFUi7t3Y800JDi8zvej"


const StripeContainer: React.FC = () => {
  const stripeTestPromise = loadStripe(PUBLIC_KEY);
  console.log('Stripe Promise:', stripeTestPromise);
  return (
    <Elements stripe={stripeTestPromise}>
      <OrderPayment />
    </Elements>
  );
};

export default StripeContainer;
