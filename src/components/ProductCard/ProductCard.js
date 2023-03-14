import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import CardOverflow from "@mui/joy/CardOverflow";
import book1 from './book1.jpg';

const ProductCard = () => {
  return (
    <Card variant="outlined" sx={{ width: "250px", height: "320px", borderRadius: 5}}>
      <CardOverflow>
        <AspectRatio
          minHeight="100%"
          maxHeight="100%"
          sx={{ my: 0.2, borderRadius: 2 }}
        >
          <img
            src={book1}
            alt="the Influence"
          />
        </AspectRatio>
        <Typography level="h2" fontSize="md" sx={{ mb: 0.1 }}>
          Influence the book
        </Typography>
        <Box sx={{ display: "flex" }}>
          <div>
            <Typography level="body3">Total price:</Typography>
            <Typography fontSize="lg" fontWeight="lg">
              $2,900
            </Typography>
          </div>
          <IconButton
            sx={{
              position: "absolute",
              bot: "0.5rem",
              right: "0.6rem",
              background: "none",
            }}
          >
            <ShoppingCartOutlinedIcon />
          </IconButton>
        </Box>
      </CardOverflow>
    </Card>
  );
};

export default ProductCard;
