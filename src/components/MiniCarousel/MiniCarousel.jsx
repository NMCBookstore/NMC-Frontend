import React, { Component } from "react";
import Box from "@mui/material/Box";
// import Carousel from "react-multi-carousel";
import Carousel from "react-grid-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCard from "../ProductCard/ProductCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MiniCarousel = ({ value }) => {
  return (
    <Box sx={{ width: "100%" }}>
      <Carousel
        cols={4}
        rows={1}
        gap={10}
        loop
        autoplay={5000}
        showDots
        responsiveLayout={[
          {
            breakpoint: 3000,
            cols: 4,
          },
          {
            breakpoint: 1024,
            cols: 3,
          },
          {
            breakpoint: 464,
            cols: 2,
          },
        ]}
        mobileBreakpoint={464}
      >
        {value?.map((productItem) => (
          <Carousel.Item key={productItem?.id}>
            <ProductCard key={productItem?.id} productItem={productItem} />
          </Carousel.Item>
        ))}
      </Carousel>
    </Box>
  );
};

export default MiniCarousel;
