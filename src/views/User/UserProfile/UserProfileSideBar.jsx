import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import UserContentChangePassword from "./UserContentChangePassword";
import UserContentProfile from "./UserContentProfile";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
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
        <Box sx={{ p: 3, width:800, height: 500}}>
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

export default function UserProfileSideBar() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();
  const [tab, setTab] = useState(false);
  const [activeTab, setActiveTab] =  React.useState(0);

   

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const profileSidebar = [
    {
      title: "Profile",
      component: <UserContentProfile />,
    },
    {
      title: "Change Password",
      component: <UserContentChangePassword />,
    },
    {
      title: "My order",
      // route: "/user-profile/order",
    },
  ];

  return (
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
  );
}
