import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import { Button, TextField, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import Rating from "@mui/material/Rating";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import "react-multi-carousel/lib/styles.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ImageGrid from "./ImageGrid";
import MainImage from "./MainImage";
import DetailProductInfo from "./DetailProductInfo";
import Recommend from "./Recommend";
import Comment from "./CommentSection";
import LightGallery from "lightgallery/react/Lightgallery.es5";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-autoplay.css";
import "lightgallery/css/lg-share.css";
import "lightgallery/css/lg-rotate.css";
import { useGetProductQuery } from "../../services/productAPIs";

const ProductDetails = () => {
  const [selectedImage, setSelectedImage] = useState("");
  const [value, setValue] = React.useState(2);
  let [count, setCount] = useState(1);

  function incrementCount() {
    count = count + 1;
    setCount(count);
  }
  function decrementCount() {
    if (count > 1) {
      count = count - 1;
      setCount(count);
    }
  }

  const {id} = useParams()
  const { data } = useGetProductQuery(id);



  return (
    <Box sx={{ width: "100%", display: "flex", flexWrap: "wrap" }}>
      <Grid container my={2} spacing={2}>
        {/* Image and price  */}
        <Grid item container spacing={2} xs={12} sm={12}>
          {/* Image and price  */}
          <Grid item container xs={12} sm={5} columns={12} mt={2}>
            {/* Side image  */}
            <Grid item container sm={3} xs={0}>
              <LightGallery speed={500} plugins={[]}>
                <ImageGrid
                  images={data?.image}
                  onSelect={setSelectedImage}
                  selectedImage={selectedImage}
                />
              </LightGallery>
            </Grid>
            {/* Main image  */}
            <Grid item sm={9}>
              <div style={{}}>
                <MainImage src={selectedImage} />
              </div>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={7} mt={2} padding={5}>
            <Grid>
              {/* Basic info  */}

              <Stack>
                <Typography variant="h5"> {data?.name} </Typography>
                <Typography variant="subtitle2" mt={2}>
                  Publisher: {data?.publisher}
                </Typography>
                <Typography variant="subtitle2" mb={2}>
                  Author: {data?.author}
                </Typography>
                <Rating
                  name="size-small"
                  readOnly
                  defaultValue={2}
                  size="small"
                  precision={0.1}
                />
                <Typography
                  variant="h5"
                  mt={5}
                  sx={{ fontWeight: "800", color: "#C92127" }}
                >
                  {parseFloat(data?.price).toLocaleString("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  })}
                </Typography>
              </Stack>

              {/* Amount  */}
              <Stack direction="row" alignItems="center" mt={5} spacing={2}>
                <Typography variant="h6">Amount: {data?.quantity}</Typography>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    marginTop: "6px",
                  }}
                >
                  <Button onClick={decrementCount}>
                    <RemoveIcon />
                  </Button>
                  <TextField
                    value={count}
                    disabled={true}
                    inputProps={{ min: 0, style: { textAlign: "center" } }}
                    sx={{ width: "60px" }}
                  />
                  <Button onClick={incrementCount}>
                    <AddIcon />
                  </Button>
                </div>
              </Stack>

              {/* Add to cart  */}
              <Stack direction="row" alignItems="center" mt={5} spacing={2}>
                <Button
                  variant="contained"
                  sx={{
                    background: "#1f1f1f",
                    "&:hover": { background: "#1f1f1f" },
                  }}
                >
                  <Typography variant="body1">Add to wishlist</Typography>
                  <FavoriteIcon />
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    background: "#DB4444",
                    "&:hover": { background: "#ffa071" },
                  }}
                >
                  <Typography variant="body1">Add to cart</Typography>
                  <ShoppingCartOutlinedIcon />
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Grid>

        {/* Details product */}
        <Grid item container spacing={2} xs={12} sm={12}>
          <DetailProductInfo data={data} />
        </Grid>

        {/* Recommend for you  */}
        <Grid item container spacing={2} xs={12} sm={12}>
          <Recommend />
        </Grid>

        {/* Comment  */}
        <Grid item container spacing={2} xs={12} sm={12}>
          <Comment />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductDetails;
