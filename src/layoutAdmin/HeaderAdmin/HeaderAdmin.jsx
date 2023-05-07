import React from "react";
import { Tabs, Tab, Toolbar, AppBar, Box, Typography } from "@mui/material";
import { Link, matchPath, useLocation } from "react-router-dom";
import { UserMenu, Logout } from "react-admin";
import logo from "./logo.png";
import useStyles from "./styles";

const HeaderAdmin = () => {
  const location = useLocation();
  const classes = useStyles();

  let currentPath = "/admin/*";
  if (!!matchPath("/admin/manage-book", location.pathname)) {
    currentPath = "/admin/manage-book";
  } else if (!!matchPath("/admin/dashboard", location.pathname)) {
    currentPath = "/admin/dashboard";
  } else if (!!matchPath("/admin/manage-genres", location.pathname)) {
    currentPath = "/admin/manage-genres";
  } else if (!!matchPath("/admin/manage-order*", location.pathname)) {
    currentPath = "/admin/manage-order";
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
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default HeaderAdmin;
