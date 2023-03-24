import React, { useRef, useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { Button, Card, Container, TextField, Typography } from "@mui/material";
import { Stack, width } from "@mui/system";
import Rating from "@mui/material/Rating";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import ProductCard from "../../components/ProductCard/ProductCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import ImageGrid from "./ImageGrid";
import MainImage from "./MainImage";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const images = [
  "https://bizweb.dktcdn.net/100/370/339/products/hai-so-phan.jpg?v=1611676664730",
  "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81MI6+TpYkL._AC_UF1000,1000_QL80_.jpg",
  "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71uUx073fcL.jpg",
  "https://salt.tikicdn.com/media/catalog/product/b/i/bia-1_sat-nhan-mang.u2487.d20170206.t083645.532084.jpg",
];

const product = {
  id: 1,
  name: "Hai So Phan",
  price: 1000,
  rating: 4,
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
}

const ProductDetails = () => {
  const [selectedImage, setSelectedImage] = useState(0);
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

  return (
    <Box sx={{ width: "100%", display: "flex", flexWrap: "wrap" }}>
      <Grid container my={2} spacing={2}>
        {/* Image and price  */}
        <Grid item container spacing={2} xs={12} sm={12}>
          {/* Image and price  */}
          <Grid item container xs={12} sm={5} columns={12} mt={2}>
            {/* Side image  */}
            <Grid item container sm={3} xs={0}>
              <ImageGrid
                images={images}
                onSelect={setSelectedImage}
                selectedImage={selectedImage}
              />
            </Grid>
            {/* Main image  */}
            <Grid item sm={9}>
              <div style={{}}>
                <MainImage src={images[selectedImage]} />
              </div>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={7} mt={2} padding={5}>
            <Grid>
              {/* Basic info  */}
              <Stack>
                <Typography variant="h5">Bhe book nearly one</Typography>
                <Typography variant="subtitle2" mt={2}>
                  Publisher:
                </Typography>
                <Typography variant="subtitle2" mb={2}>
                  Author:
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
                  685.000 đ
                </Typography>
              </Stack>

              {/* Amount  */}
              <Stack direction="row" alignItems="center" mt={5} spacing={2}>
                <Typography variant="h6">Amount: </Typography>
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
                <Button variant="contained">
                  <Typography variant="body1">Add to cart</Typography>
                  <ShoppingCartOutlinedIcon />
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    background: "#C92127",
                    "&:hover": { background: "#C92127" },
                  }}
                >
                  <Typography variant="body1">Buy now</Typography>
                  <LocalMallOutlinedIcon />
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Grid>

        {/* Details product */}
        <Grid item container spacing={2} xs={12} sm={12}>
          <Stack direction="column">
            <Typography variant="h5" mt={8} mb={2} fontWeight={800}>
              Details information
            </Typography>
            <div style={{ marginLeft: "8px" }}>
              <Typography variant="body1">Author:</Typography>
              <Typography variant="body1">Publisher:</Typography>
              <Typography variant="body1">Descriptions: {""}</Typography>
              <Typography>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </Typography>
            </div>
          </Stack>
        </Grid>

        {/* Recommend for you  **have fixed grid*/}
        <Grid item container spacing={2} xs={12} sm={12}>
          <Stack direction="column" sx={{ width: "100%" }}>
            <Typography variant="h5" mt={8} mb={2} fontWeight={800}>
              Recommend for you
            </Typography>
            <Box sx={{ width: "100%" }}>
              <Carousel
                style={{ width: "100%", backgroundColor: "black" }}
                responsive={{
                  desktop: {
                    breakpoint: { max: 3000, min: 1024 },
                    items: 5,
                  },
                  tablet: {
                    breakpoint: { max: 1024, min: 464 },
                    items: 3,
                  },
                  mobile: {
                    breakpoint: { max: 464, min: 0 },
                    items: 2,
                  },
                }}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={5000}
                slidesToSlide={true}
                arrows={true}
              >
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
              </Carousel>
            </Box>
          </Stack>
        </Grid>

        {/* Comment  */}
        <Grid item container spacing={2} xs={12} sm={12}>
          <Typography>this is the big image</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductDetails;
