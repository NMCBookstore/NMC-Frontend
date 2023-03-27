import React, { Component } from "react";
import Box from "@mui/material/Box";
// import Carousel from "react-multi-carousel";
import Carousel from "react-grid-carousel";
import { Typography, Button, IconButton } from "@mui/material";
import "react-multi-carousel/lib/styles.css";
import ProductCard from "../ProductCard/ProductCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default class MiniCarousel extends Component {
  render() {
    return (
      <Box sx={{ width: "100%" }}>
        {/* <Carousel
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
        dots={true}
        swipeable={false}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        slidesToSlide={true}
        arrows={false}
      >
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Carousel> */}

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
          <Carousel.Item>
            <ProductCard />
          </Carousel.Item>
          <Carousel.Item>
            <ProductCard />
          </Carousel.Item>
          <Carousel.Item>
            <ProductCard />
          </Carousel.Item>
          <Carousel.Item>
            <ProductCard />
          </Carousel.Item>
          <Carousel.Item>
            <ProductCard />
          </Carousel.Item>
          <Carousel.Item>
            <ProductCard />
          </Carousel.Item>
          <Carousel.Item>
            <ProductCard />
          </Carousel.Item>
        </Carousel>
      </Box>
    );
  }
}
