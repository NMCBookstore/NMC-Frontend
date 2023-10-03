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
import { useSelector } from "react-redux";
import {
  selectCurrentProductArr,
  selectCurrentShipping,
} from "../../../features/cart/cartSlice";
import { useListAddressQuery } from "../../../services/addressAPIs";

const currencyExchange = (num) => {
  return parseFloat(num).toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  });
};

// change to USD

// const currencyExchange = (num) => {
//   const formatter = new Intl.NumberFormat("en-US", {
//     style: "currency",
//     currency: "USD",
//   });

//   return formatter.format(parseFloat(num * 0.000043));
// };

export default function ProductCheckoutCard() {
  const navigate = useNavigate();

  const totalItemArr = useSelector(selectCurrentProductArr);

  const shipping = useSelector(selectCurrentShipping);

  const { data, isFetching } = useListAddressQuery("listAddress");

  const totalAddress = data?.length;
  console.log(totalAddress);

  const handleNaviCheckout = (e) => {
    e.preventDefault();
    navigate("/user/checkout");
  };

  //set total price of selected product
  let total = 0;
  for (let i = 0; i < totalItemArr?.length; i++) {
    total += parseInt(totalItemArr[i]?.amount * totalItemArr[i]?.price);
  }

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
        {totalItemArr.length && totalAddress ? (
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
            onClick={handleNaviCheckout}
          >
            Proceed to checkout
          </Button>
        ) : totalAddress ? (
          <Button
            variant="contained"
            onClick={() => toast.error("Please set your order")}
            sx={{
              width: "100%",
              mt: 2,
              backgroundColor: "#DB4444",
              "&:hover": {
                backgroundColor: "#DB4444",
              },
            }}
          >
            Set my order
          </Button>
        ) : (
          <Button
            variant="contained"
            onClick={() =>
              toast.error("Please create an address in your profile")
            }
            sx={{
              width: "100%",
              mt: 2,
              backgroundColor: "#DB4444",
              "&:hover": {
                backgroundColor: "#DB4444",
              },
            }}
          >
            Set my order
          </Button>
        )}
      </CardActions>
    </Card>
  );
}
