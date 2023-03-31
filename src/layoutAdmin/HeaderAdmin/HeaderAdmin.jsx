import React from "react";
import { Tabs, Tab, Toolbar, AppBar, Box, Typography } from "@mui/material";
import { Link, matchPath, useLocation } from "react-router-dom";
import { UserMenu, Logout } from "react-admin";

const HeaderAdmin = () => {
  const location = useLocation();



  return (
    <Box component="nav" sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary">
        <Toolbar variant="dense">
          <Box flex={1} display="flex" justifyContent="space-between">
            <Box display="flex" alignItems="center">
              <Box
                component="img"
                sx={{ marginRight: "1em", height: 30 }}
                src={
                  "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                }
                alt="Bosch Logo"
              />
              <Typography component="span" variant="h5">
                Atomic CRM
              </Typography>
            </Box>
            <Box>
              <Tabs
                // value={currentPath}
                aria-label="Navigation Tabs"
                // indicatorColor="secondary"
                textColor="inherit"
              >
                <Tab label={"Dashboard"}  to="/" />
                <Tab
                  label={"Contacts"}
                //   component={Link}
                  to="/contacts"
                //   value="/contacts"
                />
                <Tab
                  label={"Companies"}

                  to="/companies"

                />
                <Tab
                  label={"Deals"}

                  to="/deals"

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
