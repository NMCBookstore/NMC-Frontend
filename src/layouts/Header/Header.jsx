import { Box, Tooltip, Typography } from "@mui/material";
import React from "react";
import { useNavigate, Link } from "react-router-dom";
import logo from "./images/logo.png";
import "../../theme.js";
import { Stack } from "@mui/system";
import SearchBar from "../SearchBar";
import Fade from "@mui/material/Fade";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import LoginIcon from "@mui/icons-material/Login";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import CancelIcon from "@mui/icons-material/Cancel";
import ReviewsIcon from "@mui/icons-material/Reviews";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
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

const Header = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector(selectCurrentUser);
  const token = useSelector(selectCurrentAccessToken);
  const userName = user ? useSelector(selectCurrentUserName) : "";
  const userImage = user ? useSelector(selectCurrentUserImage) : "";
  const hello = user ? `Hello ${userName}!` : `Hello ! Sign in to explore`;

  const {data: cartBadge} = useGetCartQuery();
  const {data: wishlistBadge} = useGetWishListQuery()

  const naviWishlist = () => navigate("/user/wishlist");
  const naviCart = () => navigate("/user/cart");

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  // const badge = useSelector((state) => state.bookApi.queries.userCart);
  // console.log(badge);

  const handleLogout = () => {
    dispatch(logout());
    location.reload();
  };

  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleNaviprofile = () => {
    navigate("/user/profile");
    setAnchorEl(null);
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      id="fade-menu"
      MenuListProps={{
        "aria-labelledby": "fade-button",
      }}
      anchorEl={anchorEl}
      open={open}
      onClick={handleClose}
      TransitionComponent={Fade}
      sx={{ mt: "5px" }}
    >
      {token ? (
        [
          <div className={classes.profileMenuUser}>
            <Typography variant="h6" weight="medium">
              {hello}
            </Typography>
          </div>,
          <div>
            {/* <Link className={classes.link} to="/user/profile"> */}
            <MenuItem onClick={handleNaviprofile}>
              <PersonIcon />
              &nbsp; My profile
            </MenuItem>
            {/* </Link> */}
            {/* <Link className={classes.link}> */}
            <MenuItem onClick={handleMenuClose}>
              <LocalMallIcon />
              &nbsp; My Order
            </MenuItem>
            {/* </Link> */}
            {/* <Link className={classes.link}> */}
            <MenuItem onClick={handleMenuClose}>
              <CancelIcon />
              &nbsp; My Cancellations
            </MenuItem>
            {/* </Link> */}

            {/* <Link className={classes.link}> */}
            <MenuItem onClick={handleMenuClose}>
              <ReviewsIcon />
              &nbsp; My Reviews
            </MenuItem>
            {/* </Link> */}

            {/* <Link className={classes.link}> */}
            <MenuItem onClick={handleLogout}>
              <LogoutOutlinedIcon />
              &nbsp; Logout
            </MenuItem>
            {/* </Link> */}
          </div>,
        ]
      ) : (
        <Link className={classes.link} to="/login">
          <MenuItem onClick={handleMenuClose}>
            <LoginIcon />
            &nbsp; Login
          </MenuItem>
        </Link>
      )}
    </Menu>
  );

  return (
    <>
      <Stack paddingTop={2} className={classes.mainStack}>
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
          <Link to="/" className={classes.mainLogo}>
            <img src={logo} alt="logo" height={40} />
          </Link>
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
            <IconButton
              onClick={handleProfileMenuOpen}
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              sx={{
                p: 0,
                width: "80px",
                height: "50px",
              }}
            >
              {token ? (
                <Tooltip title="Profile">
                  <Avatar src={user ? userImage : bgcolor} />
                </Tooltip>
              ) : (
                <Avatar sx={{ bgcolor: deepOrange[300] }} />
              )}
            </IconButton>
          </Box>
        </Stack>
      </Stack>

      {renderMenu}
    </>
  );
};

export default Header;
