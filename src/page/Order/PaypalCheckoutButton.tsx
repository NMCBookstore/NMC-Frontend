import { PayPalButtons } from "@paypal/react-paypal-js";
import React from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { User } from "../../interface/User";
import { useCreateOrderMutation } from "../../services/order/orderAPI";
import { clearNoteAndAddressInfo } from "../../features/cart/cartSlice";

interface PaypalCheckout {
  userInfo: User;
  totalCartIdArr: number[];
  totalPrice: number;
  userNote: string;
  userAddress: string;
  shipping: number;
}

const PaypalCheckoutButton: React.FunctionComponent<PaypalCheckout> = ({
  userInfo,
  totalCartIdArr,
  totalPrice,
  userNote,
  userAddress,
  shipping,
}) => {
  const [createOrder] = useCreateOrderMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClearInfo = () => {
    dispatch(clearNoteAndAddressInfo());
  };
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
                value: String((totalPrice + shipping).toFixed(2)),
              },
            },
          ],
          application_context: {
            shipping_preference: "NO_SHIPPING",
          },
        });
      }}
      onApprove={async (data, actions) => {
        const order = await actions.order?.capture();
        const id = order?.id;
        const response = await createOrder({
          payment_id: id,
          cart_ids: totalCartIdArr,
          to_address: userAddress.split(",").slice(2).join(",").trim(),
          total_shipping: Number(shipping.toFixed(2)),
          email: userInfo?.email,
          note: userNote,
          status: "success",
        });
        if ("data" in response) {
          handleClearInfo();
          navigate("/user/order/return", { state: { data: response.data } });
        }
      }}
      onError={() => toast.error("You have cancelled your payment")}
    />
  );
};

export default PaypalCheckoutButton;
