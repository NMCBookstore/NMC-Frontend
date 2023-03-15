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
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const ProductDetails = () => {
  const [value, setValue] = React.useState(2);
  let [count, setCount] = useState(0);

  function incrementCount() {
    count = count + 1;
    setCount(count);
  }
  function decrementCount() {
    if (count > 0) {
      count = count - 1;
      setCount(count);
    }
  }

  const ref = useRef(null);



  return (
    <Box sx={{ width: "100%", display: "flex", flexWrap: "wrap" }}>
      <Grid container spacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item container spacing={2} xs={12}>
          <Grid item container xs={5} columns={12}>
            <Grid item xs={3}>
              <Stack spacing={1}>
                <div>
                  <img
                    src="https://cdn0.fahasa.com/media/catalog/product/n/x/nxbtre_full_02082023_020850_1.jpg"
                    alt="the Influence"
                    style={{ width: "75%" }}
                  />
                </div>

                <div>
                  <img
                    src="https://cdn0.fahasa.com/media/catalog/product/n/x/nxbtre_full_02082023_020850_1.jpg"
                    alt="the Influence"
                    style={{ width: "75%" }}
                  />
                </div>
                <div>
                  <img
                    src="https://cdn0.fahasa.com/media/catalog/product/n/x/nxbtre_full_02082023_020850_1.jpg"
                    alt="the Influence"
                    style={{ width: "75%" }}
                  />
                </div>

                <div>
                  <img
                    src="https://cdn0.fahasa.com/media/catalog/product/n/x/nxbtre_full_02082023_020850_1.jpg"
                    alt="the Influence"
                    style={{ width: "75%" }}
                  />
                </div>
              </Stack>
            </Grid>
            <Grid item xs={9}>
              <div style={{}}>
                <img
                  src="https://cdn0.fahasa.com/media/catalog/product/n/x/nxbtre_full_02082023_020850_1.jpg"
                  alt="the Influence"
                  style={{ width: "100%" }}
                />
              </div>
            </Grid>
          </Grid>
          <Grid item xs={7}>
            <Grid>
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
              </Stack>

              <Stack>
                <Typography
                  variant="h5"
                  mt={5}
                  sx={{ fontWeight: "800", color: "#C92127" }}
                >
                  685.000 đ
                </Typography>
              </Stack>
            </Grid>
            <Stack direction="row" alignItems="center" mt={5} spacing={2}>
              <Typography variant="h6">Amount: </Typography>
              <div
                style={{ display: "flex", flexWrap: "wrap", marginTop: "6px" }}
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

        {/* Details product */}
        <Grid item container spacing={2} xs={12} columns={12}>
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
        <Grid
          item
          spacing={2}
          xs={12}
        >
          <Stack direction="column" sx={{ width: "100%" }}>
            <Typography variant="h5" mt={8} mb={2} fontWeight={800}>
              Recommend for you
            </Typography>
            <Box sx={{width:"100%"}}
            >
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
                swipeable={false}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={5000}
                slidesToSlide={true}
                arrows={true}
                rtl={true}
                customLeftArrow={<KeyboardArrowLeftIcon/>}
                customRightArrow={<KeyboardArrowRightIcon/>}
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

        <Grid item container spacing={2} xs={12}>
          <Typography>this is the big image</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductDetails;
