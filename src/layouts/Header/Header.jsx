import { Box, Tooltip, Typography } from "@mui/material";
import React, { useState, Fragment } from "react";
import { useNavigate, Link } from "react-router-dom";
import logo from "./images/logo.png";
import "../../theme.js";
import { Stack } from "@mui/system";
import SearchBar from "../SearchBar";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import LoginIcon from "@mui/icons-material/Login";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import CancelIcon from "@mui/icons-material/Cancel";
import ReviewsIcon from "@mui/icons-material/Reviews";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HowToRegIcon from '@mui/icons-material/HowToReg';
import SideBar from "../SideBar/SideBar";
import useStyles from "./styles";
import {
  selectCurrentUserName,
  logout,
  selectCurrentUserImage,
  selectCurrentUser,
  selectCurrentAccessToken,
} from "../../features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { deepOrange } from "@mui/material/colors";
import { useGetCartQuery } from "../../services/cartAPI";
import { useGetWishListQuery } from "../../services/wishlistAPI";
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

const Header = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector(selectCurrentUser);
  const token = useSelector(selectCurrentAccessToken);
  const userName = user ? useSelector(selectCurrentUserName) : "";
  const userImage = user ? useSelector(selectCurrentUserImage) : "";
  const hello = user ? `Hello ${userName}!` : `Hello ! Sign in to explore`;

  const { data: cartBadge } = useGetCartQuery("userCart", {
    refetchOnMountOrArgChange: true,
  });

  const { data: wishlistBadge } = useGetWishListQuery("userWishlist", {
    refetchOnMountOrArgChange: true,
  });

  const naviWishlist = () => navigate("/user/wishlist");
  const naviCart = () => navigate("/user/cart");

  const handleLogout = () => {
    dispatch(logout());
    window.location.reload();
  };

  return (
    <>
      <Stack paddingTop={2} className={classes.mainStack} zIndex={10}>
        <Stack
          direction="row"
          alignItems="center"
          p={1.05}
          paddingBottom={2}
          sx={{
            justifyContent: "space-between",
          }}
        >
          <SideBar />
          <div
            style={{ cursor: "pointer" }}
            className={classes.mainLogo}
            onClick={() => window.location.replace("/")}
          >
            <img src={logo} alt="logo" height={40} />
          </div>
          <SearchBar />
          <Box
            marginRight={3}
            sx={{
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
          >
            <IconButton size="large" sx={{ color: "white" }}>
              <Badge badgeContent={wishlistBadge?.length} color="error">
                <Tooltip title="My Wishlist">
                  <FavoriteIcon fontSize="100%" onClick={naviWishlist} />
                </Tooltip>
              </Badge>
            </IconButton>
            <IconButton size="large" sx={{ color: "white" }}>
              <Badge badgeContent={cartBadge?.length} color="error">
                <Tooltip title="My cart">
                  <ShoppingCartIcon fontSize="100%" onClick={naviCart} />
                </Tooltip>
              </Badge>
            </IconButton>

            <PopupState key={1} variant="popover" popupId="demo-popup-menu">
              {(popupState) => (
                <Fragment>
                  <IconButton
                    sx={{
                      p: 0,
                      width: "80px",
                      height: "50px",
                    }}
                    {...bindTrigger(popupState)}
                  >
                    {token ? (
                      <Tooltip title="Profile">
                        <Avatar src={user ? userImage : bgcolor} />
                      </Tooltip>
                    ) : (
                      <Avatar sx={{ bgcolor: deepOrange[300] }} />
                    )}
                  </IconButton>
                  <Menu {...bindMenu(popupState)}>
                    {token
                      ?
                      <div>
                        <div key={0} className={classes.profileMenuUser}>
                          <Typography variant="h6" weight="medium">
                            {hello}
                          </Typography>
                        </div>
                        <MenuItem
                          onClick={() => {
                            popupState.close()
                            navigate("/user/profile")
                          }}>
                          <PersonIcon />
                          My profile
                        </MenuItem>

                        <MenuItem
                          onClick={() => {
                            popupState.close()
                            navigate("/user/profile/my-order")
                          }}>
                          <LocalMallIcon />
                          &nbsp; My Order
                        </MenuItem>

                        {/* <MenuItem
                          onClick={() => {
                            popupState.close()
                            navigate("/user/profile/my-order/cancellations")
                          }}>
                          <CancelIcon />
                          &nbsp; My Cancellations
                        </MenuItem> */}

                        <MenuItem onClick={handleLogout}>
                          <LogoutOutlinedIcon />
                          &nbsp; Logout
                        </MenuItem>
                      </div>
                      :
                      <div>
                        <Link className={classes.link} to="/login">
                          <MenuItem onClick={popupState.close}>
                            <LoginIcon />
                            &nbsp; Login
                          </MenuItem>
                        </Link>
                        <Link className={classes.link} to="/register">
                          <MenuItem onClick={popupState.close}>
                            <HowToRegIcon />
                            &nbsp; Register
                          </MenuItem>
                        </Link>
                      </div>
                    }
                  </Menu>
                </Fragment>
              )}
            </PopupState>
          </Box>
        </Stack>
      </Stack>
    </>
  );
};

export default Header;
