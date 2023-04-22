import * as React from "react";

import { List, Stack, TextField } from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

const profileContent = {
  firstName: "John",
  lastName: "Doe",
  email: "upchh@example.com",
  password: "password1234",
  phone: "123-456-7890",
  address: "123 Main Street",
  avatarUrl: "",
};

export default function UserContentProfile({ data }) {
  const [info, setInfo] = React.useState(data);

  console.log(data);
  return (
    <Stack spacing={2} sx={{ width: "80%", display: "flex", flexWrap: "wrap" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            InputLabelProps={{ shrink: true }}
            label="User Name"
            value={data?.username}
            onChange={(event) => {
              setInfo(event.target.value);
            }}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            InputLabelProps={{ shrink: true }}
            label="Full Name"
            value={data?.full_name}
            onChange={(event) => {
              setInfo(event.target.value);
            }}
          />
        </Grid>

        <Grid item xs={12} sm={12}>
          <TextField
            InputLabelProps={{ shrink: true }}
            disabled
            label="Email"
            value={data?.email}
          />
        </Grid>

        <Grid item xs={12} sm={12}>
          <TextField
            InputLabelProps={{ shrink: true }}
            label="Phone Number"
            value={data?.phone_number}
            onChange={(event) => {
              setInfo(event.target.value);
            }}
          />
        </Grid>
        {/* <TextField
        label="Address"
        defaultValue={info.address}
        onChange={(event) => {
          setInfo(event.target.value);
        }}
      /> */}

        <Grid item xs={12} sm={12}>
          <ImageList>
            <ImageListItem>
              <img style={{ width: 100, height: 100 }} src={data?.image} />
            </ImageListItem>
          </ImageList>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Button variant="contained" component="label" sx={{ width: "50%" }}>
            Upload avatar
            <input hidden accept="image/*" multiple type="file" />
            <PhotoCamera />
          </Button>
        </Grid>

        <Stack direction="row">
          <Button
            variant="outlined"
            sx={{
              mt: 2,
              width: "50%",
              height: "50%",
              marginLeft: "25%",
            }}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            variant="contained"
            sx={{
              mt: 2,
              width: "50%",
              height: "50%",
              marginLeft: "25%",
              backgroundColor: "#DB4444",
              "&:hover": {
                backgroundColor: "#DB4444",
              },
            }}
          >
            Save changes
          </Button>
        </Stack>
      </Grid>
    </Stack>
  );
}
