import * as React from "react";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import { CardContent, CardMedia } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Rating from "@mui/material/Rating";

const ProductCard = ({ productItem }) => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${productItem?.id}`);
  };

  return (
    <Box width="260px" onClick={handleClick}>
      <Card variant="outlined" sx={{ borderRadius: 5 }}>
        <CardMedia
          component="img"
          height="250"
          image={productItem?.image[0]}
          alt={productItem?.name}
        />
        <CardContent>
          <Typography
            level="h2"
            fontSize="md"
            sx={{
              mb: 0.1,
              textOverflow: "ellipsis",
              overflow: "hidden",
              whiteSpace: "nowrap",
            }}
          >
            {productItem?.name}
          </Typography>
          <div>
            <Typography level="body2">Price:</Typography>
            <Typography fontSize="lg" fontWeight="lg">
              {parseFloat(productItem?.price).toLocaleString("vi-VN", {
                style: "currency",
                currency: "VND",
              })}
            </Typography>
          </div>

            <Rating
              readOnly
              
              value={productItem?.rating}
            />

        </CardContent>
      </Card>
    </Box>
  );
};

export default ProductCard;
