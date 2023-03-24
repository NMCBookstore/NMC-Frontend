import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Button } from "@mui/joy";

const profileSidebar = [
  {
    title: "Profile",
    route: "/profile",
  },
  {
    title: "Change Password",
    route: "/change_password",
  },
  {
    title: "My order",
    route: "/order",
  },
];

export default function UserProfileSideBar() {
  return (
    <Box sx={{ width: "100%", display: "flex", flexWrap: "wrap" }}>
      <Stack sx={{ width: "100%" }}>
        <Typography variant="h5" fontWeight="500">
          Profile
        </Typography>
        {profileSidebar.map((profile) => (
          <List component="nav">
            <ListItem>
              <Button variant="outlined" fontWeight="500">
                {profile.title}
              </Button>
            </ListItem>
          </List>
        ))}
      </Stack>
    </Box>
  );
}
