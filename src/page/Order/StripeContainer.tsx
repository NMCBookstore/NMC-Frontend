import React, { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe, Stripe } from "@stripe/stripe-js";
import OrderPayment from "./payment";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

const PUBLIC_KEY =
  "pk_test_51N7HNyBcmskstRut4EHrGvSBLYSnj85qN35yh9o0SYcYHJ82Ss9KzQhPia0E9pOWrtohUBDmYP3S1f5JFUi7t3Y800JDi8zvej";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

const StripeContainer: React.FC = () => {
  const [stripe, setStripe] = useState<Stripe | null>(null);
  const [isStripeLoaded, setStripeLoaded] = useState(false);

  useEffect(() => {
    stripeTestPromise.then((stripe) => {
      setStripe(stripe);
      setStripeLoaded(true);
    });
  }, []);

  if (!isStripeLoaded) {
    return <div>Loading...</div>; // Or custom loading UI
  }

  return (
    <PayPalScriptProvider
      options={{
        clientId:
          "ASDDxYD5htew4e21BuNJG1_pDr1F3ugO-x8VjBITWF2mLCtIay6raQDnRYmHamPLjDs_GDEnbVahSGBA",
      }}
    >
      <Elements stripe={stripe}>
        <OrderPayment />
      </Elements>
    </PayPalScriptProvider>
  );
};

export default StripeContainer;
