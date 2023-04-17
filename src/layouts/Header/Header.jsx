import { Box } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
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
  selectCurrentRefreshToken,
  selectCurrentExpiredAccessToken,
  selectCurrentAccessToken,
} from "../../features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import toast, { Toast } from "react-hot-toast";

const Header = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector(selectCurrentUserName);
  const accessToken = useSelector(selectCurrentAccessToken);
  const refreshToken = useSelector(selectCurrentRefreshToken);
  const expired = useSelector(selectCurrentExpiredAccessToken);
  console.log(expired)
  const hello = user ? `Hello ${user}!` : `Hello ! Sign in to explore`;

  const naviWishlist = () => navigate("/user/wishlist");
  const naviCart = () => navigate("/user/cart");

  const naviProfile = () => navigate("/user/profile");

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

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

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
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
      onClose={handleClose}
      TransitionComponent={Fade}
      sx={{ mt: "5px" }}
    >
      {user ? (
        <MenuItem> {hello}</MenuItem>
      ) : (
        <Link className={classes.link} to="/login">
          <MenuItem onClick={handleMenuClose}>
            <LoginIcon />
            &nbsp; Login
          </MenuItem>
        </Link>
      )}

      <Link className={classes.link} to="/user/profile">
        <MenuItem onClick={handleMenuClose}>
          <PersonIcon />
          &nbsp; Profile
        </MenuItem>
      </Link>
      <Link className={classes.link}>
        <MenuItem onClick={handleMenuClose}>
          <LocalMallIcon />
          &nbsp; My Order
        </MenuItem>
      </Link>
      <Link className={classes.link}>
        <MenuItem onClick={handleMenuClose}>
          <CancelIcon />
          &nbsp; My Cancellations
        </MenuItem>
      </Link>

      <Link className={classes.link}>
        <MenuItem onClick={handleMenuClose}>
          <ReviewsIcon />
          &nbsp; My Reviews
        </MenuItem>
      </Link>

      {user ? (
        <Link className={classes.link}>
          {/* <MenuItem onClick={() => dispatch(logout()) }> */}
          <MenuItem>
            <LogoutOutlinedIcon />
            &nbsp; Logout
          </MenuItem>
        </Link>
      ) : (
        <Link className={classes.link} to="/">
          <MenuItem onClick={handleMenuClose}></MenuItem>
        </Link>
      )}
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    ></Menu>
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
              <Badge>
                <FavoriteIcon fontSize="100%" onClick={naviWishlist} />
              </Badge>
            </IconButton>
            <IconButton size="large" sx={{ color: "white" }}>
              <Badge badgeContent="5" color="error">
                <ShoppingCartIcon fontSize="100%" onClick={naviCart} />
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
              <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
            </IconButton>
            {/* <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              sx={{
                color: "white",
              }}
            >
              <AccountCircle fontSize="100%" />
            </IconButton> */}
          </Box>
        </Stack>
      </Stack>

      {renderMobileMenu}
      {renderMenu}
    </>
  );
};

export default Header;
