import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { toast } from "react-hot-toast";
import { useCreateOrderMutation } from "../../../services/orderAPIs";
import { Box, Button, FormControl } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import paymenticon from "./paymenticon.png";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "../../../features/auth/authSlice";
import {
  selectCurrentProductArr,
  selectCurrentShipping,
  selectCurrentCartOrder,
  clearCheckOutInfoArr,
  clearCartIdArr,
} from "../../../features/cart/cartSlice";

const CARD_OPTIONS = {
  iconStyle: "solid",
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

export default function PaymentForm({ handleNext, userAddress }) {
  const [success, setSuccess] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const dispatch = useDispatch();

  const user = useSelector(selectCurrentUser);

  const totalItemArr = useSelector(selectCurrentProductArr);
  const totalCartIdArr = useSelector(selectCurrentCartOrder);

  //set total price of selected product
  let total = 0;
  for (let i = 0; i < totalItemArr?.length; i++) {
    total += parseInt(totalItemArr[i]?.amount * totalItemArr[i]?.price);
  }

  const [createPayment, { isLoading }] = useCreateOrderMutation();

  const shipping = useSelector(selectCurrentShipping);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      try {
        const { id } = paymentMethod;
        const response = await createPayment({
          payment_id: id,
          cart_ids: totalCartIdArr,
          to_address: userAddress,
          total_shipping: shipping,
          status: "success",
        });

        if (response) {
          toast.success("Payment success");
          handleNext();
        }
      } catch (error) {
        toast.error("Failed to create ");
        console.log("Error", error);
      }
    } else {
      toast.error(error.message);
    }
  };

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Typography fontWeight={450} variant="subtitle" sx={{ mr: 2 }}>
              We accept
            </Typography>
            <img style={{ width: "30%", height: "6%" }} src={paymenticon} />
          </Box>
        </Grid>
        <Grid item xs={12} sm={12}>
          {!success ? (
            <form onSubmit={handleSubmit}>
              <Grid container>
                <Grid item xs={12} sm={12}>
                  <div style={{ my: 10 }}>
                    <CardElement options={CARD_OPTIONS} />
                  </div>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                    <Button
                      variant="contained"
                      sx={{
                        // width: "40%",
                        height: "30%",
                        mt: 10,
                        backgroundColor: "#e55039",
                        "&:hover": {
                          background: "#db4444",
                        },
                      }}
                      disabled={isLoading}
                      onClick={handleSubmit}
                    >
                      Pay Order
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </form>
          ) : (
            <div>
              <h2>You just bought this</h2>
            </div>
          )}
        </Grid>
      </Grid>
    </>
  );
}
