import React from "react";
import UserContent from "./UserContent";
import UserProfileSideBar from "./UserProfileSideBar";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";


export default function UserProfile() {
  return (
    <>
      <Box sx={{ width: "100%", display: "flex", flexWrap: "wrap" }}>
        <Grid container my={2} spacing={2}>
          {/* User Side bar  */}
          <Grid item container spacing={2} xs={12} sm={5}>
          <UserProfileSideBar />
          </Grid>

          {/* User Content  */}
          <Grid item container spacing={2} xs={12} sm={7}>
          <UserContent />
          </Grid>

        </Grid>
      </Box>
    </>
  );
}
