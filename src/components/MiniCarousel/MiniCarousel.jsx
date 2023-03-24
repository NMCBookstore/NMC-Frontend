import React, { Component } from "react";
import Box from "@mui/material/Box";
import Carousel from "react-multi-carousel";
import { Typography, Button, IconButton } from '@mui/material';
import "react-multi-carousel/lib/styles.css";
import ProductCard from "../ProductCard/ProductCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default class MiniCarousel extends Component {
  render() {
    const settings = {
      arrows: false,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 3,
      rtl: true,
    };

    return (
      <Box sx={{ width: "100%" }}>
        {/* <Carousel
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
        arrows={false}
      >
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Carousel> */}
        <IconButton
          color="white"
          onClick={() => slider?.current.slickPrev()}
        >
          <ArrowBackIosNewIcon />
        </IconButton>
        <IconButton
          color="white"
          onClick={() => slider?.current.slickNext()}
        >
          <ArrowForwardIosIcon />
        </IconButton>
        <Slider {...settings}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </Slider>
      </Box>
    );
  }
}
