import * as React from 'react';
import { styled } from '@mui/material/styles';
import UserContent from "./UserContent";
import UserProfileSideBar from "./UserProfileSideBar";
import Paper from '@mui/material/Paper';
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";



export default function UserProfile() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container my={2} spacing={3}>
          {/* User Side bar  */}
          <Grid item container spacing={2} xs={12} sm={3}>
          <UserProfileSideBar />

          {/* <Box width="100%" border="1px solid"
          >xs=8</Box> */}

          </Grid>

          {/* User Content  */}
          <Grid item container spacing={2} xs={12} sm={9}>
          <UserContent />

          {/* <Box width="100%" border="1px solid"
          >xs=8</Box> */}

          </Grid>

        </Grid>
      </Box>
    </>
  );
}
