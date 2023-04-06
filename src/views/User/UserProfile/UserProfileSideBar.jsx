import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import { Button } from "@mui/joy";
import { useNavigate } from "react-router-dom";
import UserContentProfile from "./UserContentProfile";
import UserContentChangePassword from "./UserContentChangePassword";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


const profileSidebar = [
  {
    title: "Profile",
    route: "/user-profile",
  },
  {
    title: "Change Password",
    route: "/user-profile/change_password",
  },
  {
    title: "My order",
    route: "/user-profile/order",
  },
];

const [tab, setTab] = useState("")

export default function UserProfileSideBar() {
  const navigate = useNavigate();

  return (
    <Box sx={{ width: "100%" }}>
      <Stack>
        <Typography variant="h5" fontWeight="500">
          Profile
        </Typography>
        {profileSidebar.map((profile, index) => (
          <List disablePadding key={index}>
            <ListItemButton to ={profile.route}>
              <ListItemText primary={profile.title} />
            </ListItemButton>
          </List>
        ))}

        {/* <List disablePadding>
          <ListItemButton to="/user-profile">
            
            <ListItemText primary="Profile" />
          </ListItemButton>

          <ListItemButton to="/user-profile/change_password">
            <ListItemText primary="Change password" />
          </ListItemButton>

          <ListItemButton to="/user-profile/order">
            <ListItemText primary="My order" />
          </ListItemButton>
        </List> */}
      </Stack>


    </Box>
  );
}
