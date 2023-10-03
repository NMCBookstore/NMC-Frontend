import React, { useEffect } from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import { useEditContext } from "react-admin";
import { useSelector } from "react-redux";
import {
  selectCurrentProductArr,
  selectCurrentShipping,
} from "../../../features/cart/cartSlice";
import { ImageListItem } from "@mui/material";

const addresses = ["1 MUI Drive", "Reactville", "Anytown", "99999", "USA"];
const payments = [
  { name: "Card type", detail: "Visa" },
  { name: "Card holder", detail: "Mr John Smith" },
  { name: "Card number", detail: "xxxx-xxxx-xxxx-1234" },
  { name: "Expiry date", detail: "04/2024" },
];

export default function ReviewOrder() {
  const totalItem = useSelector(selectCurrentProductArr);

  // console.log(data)
  console.log(totalItem?.length > 0 ? totalItem : []);

  const currencyExchange = (num) => {
    return parseFloat(num).toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    });
  };

  // change to USD

  const currencyExchangeUSD = (num) => {
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });

    return formatter.format(parseFloat(num * 0.000043));
  };

  //currency
  const shipping = useSelector(selectCurrentShipping);
  let total = 0;
  for (let i = 0; i < totalItem?.length; i++) {
    total += parseInt(totalItem[i]?.amount * totalItem[i]?.price + shipping);
  }

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {totalItem?.length > 0 &&
          totalItem?.map((item, index) => (
            <ListItem key={index} sx={{ py: 1, px: 0 }}>
              <ListItemText
                primary={item?.book_name}
                secondary={item?.amount}
              />
              {/* <ImageListItem>
                <img
                  src={item?.image}
                  alt={item?.book_name}
                  loading="lazy"
                />
              </ImageListItem> */}
              <Typography variant="body2">
                {currencyExchange(item?.price)}
              </Typography>
            </ListItem>
          ))}
        <Typography
          variant="subtitle1"
          sx={{ fontWeight: 450, marginRight: 1 }}
        >
          Shipping: {currencyExchange(shipping)}
        </Typography>

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: 550, marginRight: 1 }}
            >
              Total
            </Typography>{" "}
          </ListItemText>
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: 700, marginRight: 1 }}
          >
            {currencyExchangeUSD(total)}
          </Typography>
          or
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: 700, marginLeft: 1 }}
          >
            {currencyExchange(total)}
          </Typography>
        </ListItem>
      </List>
    </React.Fragment>
  );
}
