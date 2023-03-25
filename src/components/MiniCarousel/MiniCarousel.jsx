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
      slidesToShow: 4,
      slidesToScroll: 3,
      rtl: true,
    };

    return (
      <Box sx={{ width: "100%" }}>
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
