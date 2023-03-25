import React, { useEffect, useState } from "react";
import { Box, Button, Divider, Stack } from "@mui/material";
import HompageCarousel from "../HomepageCarousel/HomepageCarousel";
import FiveHeadCategory from "../FiveHeadCategory/FiveHeadCategory";
import FirstTab from "../FirstTab/FirstTab";
import Typography from "@mui/joy/Typography";
import BookList from "../../views/SearchFilter/BookList";
import { Link } from "react-router-dom";
import QuiltedImageList from "../QuiltedImageList/QuiltedImageList";
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';

const Home = () => {
  return (
    <>
      <HompageCarousel />
      <Box marginTop={10}>
        <Divider sx={{ backgroundColor: "black", marginBottom: "-20px" }} />
        <Box sx={{ display: "flex", justifyContent: "center" }}>
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
            The most five categories chosen by user
          </Typography>
        </Box>
        <FiveHeadCategory />
      </Box>
      <Box marginTop={10}>
        <FirstTab />
      </Box>
      <Box marginTop={20} height="auto" maxWidth="100%" sx={{ display: "flex", justifyContent: "center" }}>
        <Link>
          <img
            src="https://trustexplatform.com/wp-content/uploads/2022/06/Banner-Design-1024-New-Arrival-2.jpg"
            alt="banner"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </Link>
      </Box>
      {/* Products  */}
      <Box marginTop={20}>
        <Divider sx={{ backgroundColor: "black", marginBottom: "-20px" }} />
        <Box sx={{ display: "flex", justifyContent: "center" }}>
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
            Explore Our Products
          </Typography>
        </Box>
        <Box marginTop={2} sx={{ display: "flex", flexWrap: "wrap", flexDirection: { xs: "column", sm: "row" }, justifyContent: "center", width: "100%" }}>
          <BookList />
        </Box>
        <Box marginTop={2} sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
          <Link style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#db4444",
                '&:hover': {
                  background: "#ffa071",
                },
              }}>
              View All Products
            </Button>
          </Link>
        </Box>
      </Box>
      <Box marginTop={20}>
        <Divider sx={{ backgroundColor: "black", marginBottom: "-20px" }} />
        <Box marginBottom={2} sx={{ display: "flex", justifyContent: "center" }}>
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
            New Arrival
          </Typography>
        </Box>
        <QuiltedImageList />
      </Box>
      <Box marginTop={20}>
        <Stack direction="row" sx={{ justifyContent: "space-around", fontWeight: "bold" }}>
          <Stack direction="column" sx={{ alignItems: "center" }}>
            <LocalShippingOutlinedIcon sx={{fontSize:60}}/>
            <Typography>FREE AND FAST DELIVERY</Typography>
            <Typography>Free delivery for all orders over 500.000 VND</Typography>
          </Stack>
          <Stack direction="column" sx={{ alignItems: "center" }}>
            <SupportAgentOutlinedIcon sx={{fontSize:60}}/>
            <Typography>24/7 CUSTOMER SERVICE</Typography>
            <Typography>Friendly 24/7 customer support</Typography>
          </Stack>
          <Stack direction="column" sx={{ alignItems: "center" }}>
            <VerifiedUserOutlinedIcon sx={{fontSize:60}}/>
            <Typography>MONEY BACK GUARANTEE</Typography>
            <Typography>We reurn money within 30 days</Typography>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export default Home;
