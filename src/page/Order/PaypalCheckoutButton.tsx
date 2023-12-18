import React from "react";
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";
import { useCreateOrderMutation } from "../../services/order/orderAPI";
import { useSelector } from "react-redux";
import { selectCurrentCardID } from "../../features/cart/cartSlice";
import { useNavigate } from "react-router-dom";
import { User } from "../../interface/User";

interface PaypalCheckout {
  userInfo: User
  totalCartIdArr: number[]
}

const PaypalCheckoutButton: React.FunctionComponent<PaypalCheckout> = ({
  userInfo, 
  totalCartIdArr
}) => {
  const [createOrder] = useCreateOrderMutation();
  const navigate = useNavigate()
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
          email: userInfo?.email,
          note: "test note",
          status: "success",
        });
        if("data" in response) {
          console.log("have data in paypal")
          navigate("/user/order/return", { state: { data: response.data } });
        }
      }}
    />
  );
};

export default PaypalCheckoutButton;
