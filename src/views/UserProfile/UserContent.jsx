import * as React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import { List, Stack, TextField } from "@mui/material";
import {Typography } from "@mui/joy";
import Button from '@mui/material/Button';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

const profileContent = {
  firstName: "John",
  lastName: "Doe",
  email: "upchh@example.com",
  password: "password1234",
  phone: "123-456-7890",
  address: "123 Main Street",
  avatarUrl: "",
};

export default function UserContent() {
  const [info, setInfo] = React.useState(profileContent);

  return (
    <Box sx={{ width: "100%", justifyContent:"center",display: "flex", flexWrap: "wrap" }}>
      {/* Header Title  */}
      <Stack spacing={2} sx={{ width: "100%", display: "flex", flexWrap: "wrap" }}>
        <TextField
          label="First Name"
          value={info.firstName}
          onChange={(event) => {
            setInfo(event.target.value);
          }}
        />
        <TextField
          label="Last Name"
          value={info.lastName}
          onChange={(event) => {
            setInfo(event.target.value);
          }}
        />
        <TextField disabled label="Email" value={info.email} />

        <TextField
          label="Phone Number"
          value={info.phone}
          onChange={(event) => {
            setInfo(event.target.value);
          }}
        />
        <TextField
          label="Address"
          value={info.address}
          onChange={(event) => {
            setInfo(event.target.value);
          }}
        />
        <Button variant="contained" component="label">
          Upload image
          <input hidden accept="image/*" multiple type="file" />
          <PhotoCamera />
        </Button>
      </Stack>
      {/* Content  */}
      <Grid item container spacing={2} xs={12}></Grid>
    </Box>
  );
}
