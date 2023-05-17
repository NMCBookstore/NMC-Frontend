import React, { useEffect } from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import { useGetMyOrderQuery } from "../../../services/orderAPIs";
import { useEditContext } from "react-admin";

// const products = [
//   {
//     name: "Product 1",
//     desc: "A nice thing",
//     price: "$9.99",
//   },
//   {
//     name: "Product 2",
//     desc: "Another thing",
//     price: "$3.45",
//   },
//   {
//     name: "Product 3",
//     desc: "Something else",
//     price: "$6.51",
//   },
//   {
//     name: "Product 4",
//     desc: "Best thing of all",
//     price: "$14.11",
//   },
//   { name: "Shipping", desc: "", price: "Free" },
// ];

const addresses = ["1 MUI Drive", "Reactville", "Anytown", "99999", "USA"];
const payments = [
  { name: "Card type", detail: "Visa" },
  { name: "Card holder", detail: "Mr John Smith" },
  { name: "Card number", detail: "xxxx-xxxx-xxxx-1234" },
  { name: "Expiry date", detail: "04/2024" },
];

export default function ReviewOrder() {
  const { data } = useGetMyOrderQuery({
    page_id: 1,
    page_size: 5,
  });

  // console.log(data)
  console.log(data?.length > 0 ? data[0].books : []);

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {data?.length > 0 &&
          data[0].books.map((item, index) => (
            <ListItem key={index} sx={{ py: 1, px: 0 }}>
              <ListItemText primary={item?.name} secondary={item?.author} />
              <Typography variant="body2">{item?.price}</Typography>
            </ListItem>
          ))}

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700, marginRight: 1 }}>
            $34.06
          </Typography>
          or
          <Typography variant="subtitle1" sx={{ fontWeight: 700, marginLeft: 1  }}>
            1.000.000d
          </Typography>
        </ListItem>
      </List>
    </React.Fragment>
  );
}
