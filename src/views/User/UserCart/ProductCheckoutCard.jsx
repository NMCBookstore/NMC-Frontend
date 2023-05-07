import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Divider, Stack } from "@mui/material";
import { useCreateOrderMutation } from "../../../services/orderAPIs";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const currencyExchange = (num) => {
  return parseFloat(num).toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  });
};

export default function ProductCheckoutCard({ data }) {

  const navigate = useNavigate();

  let arrID = [];

  const [createCart] = useCreateOrderMutation(arrID)

  const hanldeCreateOrder = (e) => {
    e.preventDefault();
    for (let i = 0; i < data?.length; i++) {
      arrID.push(data[i]?.cart_id)
    }
    // createCart(arrID);
    // navigate('/user/checkout')
  };

  let shipping = 21000;
  let total = 0;
  for (let i = 0; i < data?.length; i++) {
    total += parseInt(data[i]?.amount * data[i]?.price);
  }
  //   console.log(total);
  return (
    <Card sx={{ minWidth: 400, border: "1px black solid" }}>
      <CardContent>
        <Typography variant="h6" component="div" fontWeight="bold">
          Cart Total
        </Typography>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          marginTop={2}
          marginBottom={1}
        >
          <Typography>Subtotal:</Typography>
          <Typography>{currencyExchange(total)}</Typography>
        </Stack>
        <Divider sx={{ backgroundColor: "black" }} />
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          marginTop={2}
          marginBottom={1}
        >
          <Typography>Shipping::</Typography>
          <Typography>{currencyExchange(shipping)}</Typography>
        </Stack>
        <Divider sx={{ backgroundColor: "black" }} />
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          marginTop={2}
          marginBottom={1}
        >
          <Typography>Total:</Typography>
          <Typography>{currencyExchange(total + shipping)}</Typography>
        </Stack>
      </CardContent>
      <CardActions>
        <Button
          type="submit"
          variant="contained"
          sx={{
            width: "100%",
            mt: 2,
            backgroundColor: "#DB4444",
            "&:hover": {
              backgroundColor: "#DB4444",
            },
          }}
          onClick={hanldeCreateOrder}
        >
          Proceed to checkout
        </Button>
      </CardActions>
    </Card>
  );
}
