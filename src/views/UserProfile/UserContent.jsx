import * as React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import { List, Stack, TextField } from "@mui/material";
import { Typography } from "@mui/joy";
import Button from "@mui/material/Button";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import UserContentProfile from "./UserContentProfile";
import UserContentChangePassword from "./UserContentChangePassword";

export default function UserContent() {


  return (
    <Box
      sx={{
        width: "100%",
        justifyContent: "center",
        display: "flex",
        flexWrap: "wrap",
      }}
    >
       {/* <UserContentProfile /> */}
      <UserContentChangePassword /> 

      {/* Content  */}
      {/* <Grid item container spacing={2} xs={12}></Grid> */}
    </Box>
  );
}
