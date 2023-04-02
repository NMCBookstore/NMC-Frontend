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
import FavoriteIcon from "@mui/icons-material/Favorite";
import ImageGrid from "./ImageGrid";
import MainImage from "./MainImage";
import DetailProductInfo from "./DetailProductInfo";
import Recommend from "./Recommend";
import Comment from "./CommentSection";

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
};

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

  
  const [infos, setInfo] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/books/1500")
      .then((res) => res.json())
      .then((infos) => {
        setInfo(infos);
        setSelectedImage(infos.image[0]);
      });
  }, []);

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
                images={infos.image}
                onSelect={setSelectedImage}
                selectedImage={selectedImage}
              />
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
          <DetailProductInfo />
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
