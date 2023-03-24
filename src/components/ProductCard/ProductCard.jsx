import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import CardOverflow from "@mui/joy/CardOverflow";
import book1 from "./book1.jpg";
import { CardContent, CardMedia } from "@mui/material";
import Paper from '@mui/material/Paper';

const ProductCard = () => {
  return (
    <Box width="200px">
      <Card variant="outlined" sx={{ borderRadius: 5 }}>
          <CardMedia
            component="img"
            height="180"
            image= "https://bizweb.dktcdn.net/100/370/339/products/hai-so-phan.jpg?v=1611676664730"
            alt="the book art"
          />
          <CardContent>
            <Typography level="h2" fontSize="md" sx={{ mb: 0.1 }}>
              Influence the book
            </Typography>
            <div >
              <Typography level="body2">Total price:</Typography>
              <Typography fontSize="lg" fontWeight="lg">
                $2,900
              </Typography>
            </div>
            {/* <IconButton
              sx={{
                position: "absolute",
                bot: "0.5rem",
                right: "0.9rem",
                background: "none",
              }}
            >
              <ShoppingCartOutlinedIcon />
            </IconButton> */}
          </CardContent>
      </Card>
    </Box>
  );
};

export default ProductCard;
