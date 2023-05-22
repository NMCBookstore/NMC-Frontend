import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useCreatePaymentMutation } from "../../../services/orderAPIs";
import { Box, Button, FormControl } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import paymenticon from "./paymenticon.png";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../../features/auth/authSlice";
import {
  selectCurrentProductArr,
  selectCurrentShipping,
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

export default function PaymentForm() {
  const [success, setSuccess] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const user = useSelector(selectCurrentUser);

  const totalItemArr = useSelector(selectCurrentProductArr);

  const shipping = useSelector(selectCurrentShipping);

  //set total price of selected product
  let total = 0;
  for (let i = 0; i < totalItemArr?.length; i++) {
    total += parseInt(totalItemArr[i]?.amount * totalItemArr[i]?.price);
  }

  const [values, setValues] = useState({
    from_address: "aaa",
    to_address: "222",
    total_shipping: 20000,
    sub_total: 520000,
    status: "success",
  });

  const [createPayment] = useCreatePaymentMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
      billing_details: {
        address: {
          line1: "113/8/8, Le Van chi",
        },
        email: user.email,
        name: user.full_name,
        phone: user.phone_number,
      },
    });

    console.log("day la chi tiet hoa don", paymentMethod.billing_details);

    // if (!error) {
    //   try {
    //     const { id } = paymentMethod;
    //     const { response } = await createPayment({
    //       amount: total,
    //       id,
    //     });

    //     if (response.data.success) {
    //       console.log("Success payment");
    //     }
    //   } catch (error) {
    //     console.log("Erroe", error);
    //   }
    // } else {
    //   toast.error(error.message);
    // }
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
    // <Typography variant="h6" gutterBottom>
    //   Payment method
    // </Typography>
    // <Grid container spacing={3}>
    //   <Grid item xs={12} md={6}>
    //     <TextField
    //       required
    //       id="cardName"
    //       label="Name on card"
    //       fullWidth
    //       autoComplete="cc-name"
    //       variant="standard"
    //     />
    //   </Grid>
    //   <Grid item xs={12} md={6}>
    //     <TextField
    //       required
    //       id="cardNumber"
    //       label="Card number"
    //       fullWidth
    //       autoComplete="cc-number"
    //       variant="standard"
    //     />
    //   </Grid>
    //   <Grid item xs={12} md={6}>
    //     <TextField
    //       required
    //       id="expDate"
    //       label="Expiry date"
    //       fullWidth
    //       autoComplete="cc-exp"
    //       variant="standard"
    //     />
    //   </Grid>
    //   <Grid item xs={12} md={6}>
    //     <TextField
    //       required
    //       id="cvv"
    //       label="CVV"
    //       helperText="Last three digits on signature strip"
    //       fullWidth
    //       autoComplete="cc-csc"
    //       variant="standard"
    //     />
    //   </Grid>
    //   {/* <Grid item xs={12}>
    //     <FormControlLabel
    //       control={<Checkbox color="secondary" name="saveCard" value="yes" />}
    //       label="Remember credit card details for next time"
    //     />
    //   </Grid> */}
    // </Grid>
  );
}
