import React from "react";
import Box from "@mui/material/Box";
import Carousel from "react-multi-carousel";
import { Button, Card, Container, TextField} from "@mui/material";
import { Stack } from "@mui/system";
import ProductCard from "../../components/ProductCard/ProductCard";
import { Typography } from "@mui/joy";

export default function Recommend() {
  return (
    <Stack direction="column" sx={{ width: "100%" }}>
      <Box sx={{ display: "flex", justifyContent: "start" }}>
        <Typography
          lineHeight="lg"
          variant="solid"
          level="h5"
          sx={{
            background:
              "-webkit-linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
            fontSize: 20,
          }}
        >
          Recommend for you
        </Typography>
      </Box>
      <Box sx={{ width: "100%" }}>
        <Carousel
          style={{ width: "100%", backgroundColor: "black" }}
          responsive={{
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 4,
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
  );
}
