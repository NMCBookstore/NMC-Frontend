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

const ProductCard = () => {
  return (
    // <Card variant="outlined" sx={{ width: "200px", height: "300px", borderRadius: 5}}>
    //   <CardOverflow>
    //     <AspectRatio
    //       minHeight="100%"
    //       maxHeight="100%"
    //       sx={{ my: 0.2, borderRadius: 2 }}
    //     >
    //       <img
    //         src={book1}
    //         alt="the Influence"
    //       />
    //     </AspectRatio>
    //     <Typography level="h2" fontSize="md" sx={{ mb: 0.1 }}>
    //       Influence the book
    //     </Typography>
    //     <Box sx={{ display: "flex" }}>
    //       <div>
    //         <Typography level="body3">Total price:</Typography>
    //         <Typography fontSize="lg" fontWeight="lg">
    //           $2,900
    //         </Typography>
    //       </div>
    //       <IconButton
    //         sx={{
    //           position: "absolute",
    //           bot: "0.5rem",
    //           right: "0.6rem",
    //           background: "none",
    //         }}
    //       >
    //         <ShoppingCartOutlinedIcon />
    //       </IconButton>
    //     </Box>
    //   </CardOverflow>
    // </Card>
    <Box width="200px">
      <Card variant="outlined" sx={{ borderRadius: 5 }}>
          <CardMedia
            component="img"
            height="200"
            image="https://cdn0.fahasa.com/media/catalog/product/i/m/image_239651.jpg"
            alt="the book art"
          />
          <CardContent>
            <Typography level="h2" fontSize="md" sx={{ mb: 0.1 }}>
              Influence the book
            </Typography>
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
                right: "0.9rem",
                background: "none",
              }}
            >
              <ShoppingCartOutlinedIcon />
            </IconButton>
          </CardContent>
      </Card>
    </Box>
  );
};

export default ProductCard;
