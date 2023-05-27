import React from "react";
import { Stack } from "@mui/system";
import { Link, useNavigate } from "react-router-dom";
import logo from "./images/logo.png";
import QRCode from "./images/Qrcode.png";
import appStore from "./images/appstore.png";
import playStore from "./images/google-play-store.png";
import { Box, Typography } from "@mui/material";
import InputSubscription from "./InputSubscription";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CopyrightIcon from "@mui/icons-material/Copyright";

const Footer = () => {
  const navigate = useNavigate()

  return (
    <Stack
      marginTop={20}
      direction="column"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        background: "#0F1730",
        bot: 0,
        justifyContent: "space-around",
        zIndex: 100,
        color: "white",
      }}
    >
      <Stack direction="row" width="100%" marginLeft={2}>
        <Stack direction="column" alignItems="left" p={2} sx={{ width: "25%" }}>
          <Link to="/" style={{ display: "flex", alignItems: "center" }}>
            <img src={logo} alt="logo" height={40} />
          </Link>
          <Box marginTop={2}>
            <Link style={{ textDecoration: "none", color: "white" }}>
              <Typography variant="h6">Subscribe</Typography>
            </Link>
          </Box>
          <Box marginTop={2}>
            <div style={{ width: "80%" }}>
              <InputSubscription />
            </div>
          </Box>
        </Stack>
        <Stack direction="column" alignItems="left" p={2} sx={{ width: "25%" }}>
          <Typography variant="h5" sx={{ fontWeight: "medium" }}>
            Support
          </Typography>
          <Box marginTop={2}>
            <Typography marginBottom={1}>
              01 Đ. Võ Văn Ngân, Linh Chiểu, Thủ Đức, Thành phố Hồ Chí Minh
            </Typography>
            <Typography marginBottom={1}>nmcbookstore@gmail.com</Typography>
            <Typography marginBottom={1}>+8428-3722-1223</Typography>
          </Box>
        </Stack>
        <Stack direction="column" alignItems="left" p={2} sx={{ width: "15%" }}>
          <Typography variant="h5" sx={{ fontWeight: "medium" }}>
            Account
          </Typography>
          <Box marginTop={2}>
            <Link
              to="/user/profile"
              style={{ textDecoration: "none", color: "white" }}
            >
              <Typography marginBottom={1}>
                My Profile
              </Typography>
            </Link>
            <Link
              to="/login"
              style={{ textDecoration: "none", color: "white" }}>
              <Typography marginBottom={1}>
                Login/Register
              </Typography>
            </Link>
            <Link
              to="/user/cart"
              style={{ textDecoration: "none", color: "white" }}
            >
              <Typography marginBottom={1}>
                Cart
              </Typography>
            </Link>
            <Link
              to="user/wishlist"
              style={{ textDecoration: "none", color: "white" }}
            >
              <Typography marginBottom={1}>
                Wishlist
              </Typography>
            </Link>
            <Link
              to="/search-filter?page_id=1&page_size=24&min_price=0&max_price=10000000"
              style={{ textDecoration: "none", color: "white" }}>
              <Typography marginBottom={1}>
                Books
              </Typography>
            </Link>
          </Box>
        </Stack>
        <Stack direction="column" alignItems="left" p={2} sx={{ width: "15%" }}>
          <Typography variant="h5" sx={{ fontWeight: "medium" }}>
            Information
          </Typography>
          <Box marginTop={2}>
            <Link
              style={{ textDecoration: "none", color: "white" }}
            >
              <Typography marginBottom={1}>
                Privacy Policy
              </Typography>
            </Link>
            <Link
              style={{ textDecoration: "none", color: "white" }}
            >
              <Typography marginBottom={1}>
                Terms Of Use
              </Typography>
            </Link>
            <Link
              style={{ textDecoration: "none", color: "white" }}
            >
              <Typography marginBottom={1}>
                FAQ
              </Typography>
            </Link>
            <Link style={{ textDecoration: "none", color: "white" }}>
              <Typography marginBottom={1}>
                Contact
              </Typography>
            </Link>
            <Link
              to="/about"
              style={{ textDecoration: "none", color: "white" }}
            >
              <Typography marginBottom={1}>
                About
              </Typography>
            </Link>
          </Box>
        </Stack>
        <Stack direction="column" p={2} sx={{ width: "20%" }}>
          <Typography variant="h5" sx={{ fontWeight: "medium" }}>
            Download App
          </Typography>
          <Box marginTop={2}>
            <Stack direction="row" sx={{ justifyContent: "flex-start" }}>
              <div alignItems="center">
                <img src={QRCode} alt="qr-code" />
              </div>
              <Stack direction="column" marginLeft={1} justifyContent="center">
                <Link>
                  <img src={appStore} alt="app-store" width="100%" />
                </Link>
                <Link>
                  <img src={playStore} alt="play-store" width="100%" />
                </Link>
              </Stack>
            </Stack>
            <div style={{ width: "60%", paddingTop: "10px" }}>
              <Stack direction="row" sx={{ justifyContent: "space-between" }}>
                <Link style={{ textDecoration: "none", color: "white" }}>
                  <FacebookIcon />
                </Link>
                <Link style={{ textDecoration: "none", color: "white" }}>
                  <TwitterIcon />
                </Link>
                <Link style={{ textDecoration: "none", color: "white" }}>
                  <InstagramIcon />
                </Link>
                <Link style={{ textDecoration: "none", color: "white" }}>
                  <LinkedInIcon />
                </Link>
              </Stack>
            </div>
          </Box>
        </Stack>
      </Stack>
      <Stack
        direction="row"
        sx={{
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          color: "#3d3d3d",
        }}
      >
        <CopyrightIcon />
        <Typography>Copyright Rimel 2022. All right reserved</Typography>
      </Stack>
    </Stack>
  );
};

export default Footer;
