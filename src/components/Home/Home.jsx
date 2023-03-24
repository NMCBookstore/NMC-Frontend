import React, { useEffect, useState } from "react";
import { Box, Stack } from "@mui/material";
import HompageCarousel from "../HomepageCarousel/HomepageCarousel";
import FiveHeadCategory from "../FiveHeadCategory/FiveHeadCategory";
import FirstTab from "../FirstTab/FirstTab";
import Typography from "@mui/joy/Typography";

const Home = () => {
  return (
    <>
      <HompageCarousel />
      <Box
        sx={{
          color: "#c92127",
          display: "flex",
          // justifyContent: "center",
        }}
      >
        <Typography
          lineHeight="lg"
          variant="solid"
          level="h5"
          sx={{
            background:
              "-webkit-linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
              fontSize: 25,
          }}
        >
          The most five categories chosen by user
        </Typography>
      </Box>
      <FiveHeadCategory />
      <FirstTab />
    </>
  );
};

export default Home;
