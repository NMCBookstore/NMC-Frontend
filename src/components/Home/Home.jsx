import React, { useEffect, useState } from "react";
import { Box, Button, Divider, Stack } from "@mui/material";
import HompageCarousel from "../HomepageCarousel/HomepageCarousel";
import HeadCategory from "../HeadCategory/HeadCategory";
import FirstTab from "../FirstTab/FirstTab";
import Typography from "@mui/joy/Typography";
import { Link } from "react-router-dom";
import QuiltedImageList from "../QuiltedImageList/QuiltedImageList";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import useStyles from "./styles";
import BookList from "../../views/User/SearchFilter/BookList";
import { useGetAllProductQuery } from "../../services/productAPIs";
import Grid from "@mui/material/Grid";

const Home = () => {
  const classes = useStyles();
  const { data } = useGetAllProductQuery({
    page_id: 1,
    page_size: 24,
  });

  return (
    <>
      <HompageCarousel />
      <Box marginTop={10}>
        <Divider sx={{ backgroundColor: "black", marginBottom: "-20px" }} />
        <Box className={classes.box}>
          <Typography
            lineHeight="lg"
            variant="solid"
            level="h5"
            className={classes.colorTypo}
          >
            The most noticeable genres
          </Typography>
        </Box>
        <HeadCategory />
      </Box>
      <Box marginTop={10}>
        <FirstTab />
      </Box>
      <Box marginTop={20} height="auto" maxWidth="100%" className={classes.box}>
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
        <Box className={classes.box}>
          <Typography
            lineHeight="lg"
            variant="solid"
            level="h5"
            className={classes.colorTypo}
          >
            Explore Our Products
          </Typography>
        </Box>
        <Box
          marginTop={2}
          flexDirection="column"
          alignItems="center"
          sx={{ display: "flex", justifyContent: "center", width: "100%" }}
        >
          <Grid
            container
            item
            xs={12}
            sm={12}
            sx={{
              flexDirection: { xs: "column", sm: "row" },
              marginRight: "-40px",
            }}
          >
            <BookList data={data} />
          </Grid>

          <Link
            to="/search-filter?page_id=1&page_size=24&min_price=0&max_price=10000000"
            style={{ textDecoration: "none", marginTop: 8 }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#db4444",
                "&:hover": {
                  background: "#ffa071",
                },
              }}
            >
              View All Products
            </Button>
          </Link>
        </Box>
      </Box>
      <Box marginTop={20}>
        <Divider sx={{ backgroundColor: "black", marginBottom: "-20px" }} />
        <Box marginBottom={2} className={classes.box}>
          <Typography
            lineHeight="lg"
            variant="solid"
            level="h5"
            className={classes.colorTypo}
          >
            New Arrival
          </Typography>
        </Box>
        <QuiltedImageList />
      </Box>
      <Box marginTop={20}>
        <Stack
          direction="row"
          sx={{ justifyContent: "space-around", fontWeight: "bold" }}
        >
          <Stack direction="column" sx={{ alignItems: "center" }}>
            <LocalShippingOutlinedIcon sx={{ fontSize: 60 }} />
            <Typography>FREE AND FAST DELIVERY</Typography>
            <Typography>
              Free delivery for all orders over 500.000 VND
            </Typography>
          </Stack>
          <Stack direction="column" sx={{ alignItems: "center" }}>
            <SupportAgentOutlinedIcon sx={{ fontSize: 60 }} />
            <Typography>24/7 CUSTOMER SERVICE</Typography>
            <Typography>Friendly 24/7 customer support</Typography>
          </Stack>
          <Stack direction="column" sx={{ alignItems: "center" }}>
            <VerifiedUserOutlinedIcon sx={{ fontSize: 60 }} />
            <Typography>MONEY BACK GUARANTEE</Typography>
            <Typography>We return money within 30 days</Typography>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export default Home;
