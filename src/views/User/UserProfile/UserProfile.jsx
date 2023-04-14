import * as React from "react";
import { styled } from "@mui/material/styles";
import UserProfileSideBar from "./UserProfileSideBar";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import UserContentChangePassword from "./UserContentChangePassword";
import UserContentProfile from "./UserContentProfile";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetUserQuery } from "../../../services/userAPI";
import PropTypes from "prop-types";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3, width: 800, height: 500 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function UserProfile() {
  const { data} = useGetUserQuery();
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();
  const [tab, setTab] = useState(false);
  const [activeTab, setActiveTab] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  console.log(data);

  const profileSidebar = [
    {
      title: "Profile",
      component: <UserContentProfile data = {data}/>,
    },
    {
      title: "Change Password",
      component: <UserContentChangePassword data = {data}/>,
    },
    {
      title: "My order",
      // route: "/user-profile/order",
    },
  ];

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container my={2} spacing={3}>
          {/* User Side bar  */}
          <Grid item container spacing={2} xs={12} sm={12}>
            <Box
              sx={{
                flexGrow: 1,
                bgcolor: "background.paper",
                display: "flex",
                height: 224,
              }}
            >
              <Tabs
                orientation="vertical"
                variant="fullWidth"
                value={activeTab}
                onChange={handleTabChange}
                aria-label="Vertical tabs example"
                sx={{ borderRight: 1, borderColor: "divider" }}
              >
                {profileSidebar.map((item, index) => (
                  <Tab label={item.title} key={index} />
                ))}
              </Tabs>
              {/* <TabPanel value={value} index={0}> */}
              {profileSidebar[activeTab].component}
              {/* </TabPanel> */}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
