import React from "react";
import {
  Tabs,
  Tab,
  Toolbar,
  AppBar,
  Box,
  Typography,
  Tooltip,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import { Link, matchPath, useLocation } from "react-router-dom";
import logo from "./logo.png";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCurrentUserName,
  logout,
  selectCurrentUserImage,
  selectCurrentUser,
} from "../../features/auth/authSlice";
import { LogoutOutlined } from "@mui/icons-material";
import useStyles from "./styles";

const HeaderAdmin = () => {
  const user = useSelector(selectCurrentUser);
  const userName = user ? useSelector(selectCurrentUserName) : null;
  const hello = user ? `Hello ${userName}!` : `Hello ! Sign in to explore`;

  const location = useLocation();
  const classes = useStyles();

  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const dispatch = useDispatch();

  const handleLogout = () => {
    console.log("log out clicked");
    dispatch(logout());
    window.location.reload();
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  let currentPath = "/admin/dashboard";
  if (matchPath("/admin/manage-book", location.pathname)) {
    currentPath = "/admin/manage-book";
  } else if (matchPath("/admin/dashboard", location.pathname)) {
    currentPath = "/admin/dashboard";
  } else if (matchPath("/admin/manage-genres", location.pathname)) {
    currentPath = "/admin/manage-genres";
  } else if (matchPath("/admin/manage-order", location.pathname)) {
    currentPath = "/admin/manage-order";
  } else if (matchPath("/admin/manage-user", location.pathname)) {
    currentPath = "/admin/manage-user";
  }

  return (
    <Box component="nav" sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary">
        <Toolbar variant="dense">
          <Box flex={1} display="flex" justifyContent="space-between">
            <Box display="flex" alignItems="center">
              <Box
                component="img"
                sx={{ marginRight: "1em", height: 30 }}
                src={logo}
                alt="NMC Logo"
              />
              <Typography component="span" variant="h5">
                NMC Management
              </Typography>
            </Box>
            <Box>
              <Tabs
                value={currentPath}
                aria-label="Navigation Tabs"
                indicatorColor="white"
                textColor="inherit"
              >
                <Tab
                  label={"Dashboard"}
                  component={Link}
                  to="/admin/dashboard"
                  value="/admin/dashboard"
                />
                <Tab
                  label={"User"}
                  component={Link}
                  to="/admin/manage-user"
                  value="/admin/manage-user"
                />
                <Tab
                  label={"Book"}
                  component={Link}
                  to="/admin/manage-book"
                  value="/admin/manage-book"
                />
                <Tab
                  label={"Genres"}
                  component={Link}
                  to="/admin/manage-genres"
                  value="/admin/manage-genres"
                />
                <Tab
                  label={"Order"}
                  component={Link}
                  to="/admin/manage-order"
                  value="/admin/manage-order"
                />
              </Tabs>
            </Box>
            <Box display="flex">
              {/* <LoadingIndicator
                sx={{
                  "& .RaLoadingIndicator-loader": {
                    marginTop: 2,
                  },
                }}
              /> */}
              {/* <UserMenu>
                <Logout />
              </UserMenu> */}
            </Box>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar src="" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {user ? (
                <div className={classes.profileMenuUser}>
                  <Typography variant="h6" weight="medium">
                    {hello}
                  </Typography>
                </div>
              ) : (
                <Link className={classes.link} to="/login">
                  <MenuItem onClick={handleMenuClose}>
                    <LoginIcon />
                    &nbsp; Login
                  </MenuItem>
                </Link>
              )}
              <Link className={classes.link}>
                <MenuItem onClick={handleLogout}>
                  <LogoutOutlined />
                  &nbsp; Logout
                </MenuItem>
              </Link>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default HeaderAdmin;
