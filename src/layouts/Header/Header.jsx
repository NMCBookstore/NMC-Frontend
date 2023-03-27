import { Box } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from './images/logo.png';
import "../../theme.js"
import { Stack } from '@mui/system';
import SearchBar from '../SearchBar';
import Fade from '@mui/material/Fade';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Menu from '@mui/material/Menu';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import CancelIcon from '@mui/icons-material/Cancel';
import ReviewsIcon from '@mui/icons-material/Reviews';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SideBar from '../SideBar/SideBar';


const Header = () => {
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

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      id="fade-menu"
      MenuListProps={{
        'aria-labelledby': 'fade-button',
      }}
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      TransitionComponent={Fade}
    >
      <Link style={{ textDecoration: "none", color: "black" }}>
        <MenuItem onClick={handleMenuClose}>
          <PersonIcon />
          &nbsp;
          Profile
        </MenuItem>
      </Link>
      <Link style={{ textDecoration: "none", color: "black" }}>
        <MenuItem onClick={handleMenuClose}>
          <LocalMallIcon />
          &nbsp;
          My Order
        </MenuItem>
      </Link>
      <Link style={{ textDecoration: "none", color: "black" }}>
        <MenuItem onClick={handleMenuClose}>
          <CancelIcon />
          &nbsp;
          My Cancellations
        </MenuItem>
      </Link>
      <Link style={{ textDecoration: "none", color: "black" }}>
        <MenuItem onClick={handleMenuClose}>
          <ReviewsIcon />
          &nbsp;
          My Reviews
        </MenuItem>
      </Link>
      <Link style={{ textDecoration: "none", color: "black" }}>
        <MenuItem onClick={handleMenuClose}>
          <LogoutOutlinedIcon />
          &nbsp;
          Logout
        </MenuItem>
      </Link>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton>
          <Badge>
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton>
          <Badge>
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <>
      <Stack paddingTop={2}
        sx={{
          zIndex: 2,
          position: "sticky",
          background: '#0F1730',
          top: 0,
        }}>
        <Stack direction="row" alignItems="center" p={1.05} paddingBottom={2}
          sx={{
            justifyContent: "space-between"
          }}>
          <SideBar /> 
          <Link to="/" style={{ display: "flex", alignItems: "center", marginLeft: "-22%" }}>
            <img src={logo} alt="logo" height={40} />
          </Link>
          <SearchBar />
          <Box marginRight={3} sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: "center" }}>
            <IconButton
              size='large'
              sx={{ color: "white" }}>
              <Badge>
                <FavoriteIcon fontSize="100%" />
              </Badge>
            </IconButton>
            <IconButton
              size='large'
              sx={{ color: "white" }}>
              <Badge badgeContent="5" color='error'>
                <ShoppingCartIcon fontSize="100%" />
              </Badge>
            </IconButton>
            <IconButton
              size='large'
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
            </IconButton>
          </Box>
        </Stack>
      </Stack>

      {renderMobileMenu}
      {renderMenu}

    </>
  )
}

export default Header