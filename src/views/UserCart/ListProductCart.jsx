import * as React from 'react';
import { Stack, Typography } from "@mui/joy";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from '@mui/material/Checkbox';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemAvatar from "@mui/material/ListItemAvatar";
import { DataGrid } from "@mui/x-data-grid";


const cart = [
  {
    url: "https://bizweb.dktcdn.net/100/370/339/products/hai-so-phan.jpg?v=1611676664730",
    title: "Book 1",
    price: "100.000 VND",
  },
  {
    url: "https://bizweb.dktcdn.net/100/370/339/products/hai-so-phan.jpg?v=1611676664730",
    title: "Book 2",
    price: "200.000 VND",
  },
  {
    url: "https://bizweb.dktcdn.net/100/370/339/products/hai-so-phan.jpg?v=1611676664730",
    title: "Book 3",
    price: "300.000 VND",
  },
  {
    url: "https://bizweb.dktcdn.net/100/370/339/products/hai-so-phan.jpg?v=1611676664730",
    title: "Book 4",
    price: "400.000 VND",
  },
];

export default function ListProductCart() {
  // const [checked, setChecked] = React.useState([0]);

  // const handleToggle = (value) => () => {
  //   const currentIndex = checked.indexOf(value);
  //   const newChecked = [...checked];

  //   if (currentIndex === -1) {
  //     newChecked.push(value);
  //   } else {
  //     newChecked.splice(currentIndex, 1);
  //   }

  //   setChecked(newChecked);
  // };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Stack direction="row" spacing={2}>
        <Box>
          <Stack width="100%" direction="row" spacing={20}>
            <Typography>Product</Typography>
            <Typography>Price</Typography>
            <Typography>Quantity</Typography>
            <Typography>Subtotal</Typography>
          </Stack>
          <Stack width="100%" direction="row" spacing="20">
            <List sx={{ width: "100%" }} spacing="20">
              {cart.map((item) => (
                <ListItem key={item.title}>
                  <Box >
                    <img src={item.url} style={{width:"100px" ,height:"120px"}} />
                  </Box>
                  <ListItemText primary={item.title} />
                  <ListItemText primary={item.price} />

                </ListItem>
              ))}
            </List>
          </Stack>

        </Box>
      </Stack>
    </Box>
  );
}
