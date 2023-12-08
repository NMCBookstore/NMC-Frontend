import React from "react";
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";
import { useCreateOrderMutation } from "../../services/order/orderAPI";
import { useSelector } from "react-redux";
import { selectCurrentCardID } from "../../features/cart/cartSlice";

const PaypalCheckoutButton = () => {
  const [createOrder] = useCreateOrderMutation();
  const totalCartIdArr = useSelector(selectCurrentCardID);

  return (
    <PayPalButtons
      style={{
        color: "white",
        height: 48,
        tagline: false,
        shape: "pill",
      }}
      fundingSource="paypal"
      createOrder={(data, actions) => {
        return actions.order.create({
          purchase_units: [
            {
              amount: {
                value: "100",
              },
            },
          ],
        });
      }}
      onApprove={async (data, actions) => {
        const order = await actions.order?.capture();
        const id = order?.id;
        const response = await createOrder({
          payment_id: id,
          cart_ids: totalCartIdArr,
          to_address: "test address hihi",
          total_shipping: 30000,
          status: "success",
        });
        if(response) {
          
        }
      }}
    />
  );
};

export default PaypalCheckoutButton;
