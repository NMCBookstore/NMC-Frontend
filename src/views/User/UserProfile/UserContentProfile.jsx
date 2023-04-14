import * as React from "react";

import { List, Stack, TextField } from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Button from "@mui/material/Button";

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
  // const [info, setInfo] = React.useState(data);
  return (
    <Stack spacing={2} sx={{ width: "80%", display: "flex", flexWrap: "wrap" }}>
      <TextField
        InputLabelProps={{ shrink: true }}
        label="User Name"
        value={data?.username}
        onChange={(event) => {
          setInfo(event.target.value);
        }}
      />
      <TextField
        InputLabelProps={{ shrink: true }}
        label="Full Name"
        value={data?.full_name}
        onChange={(event) => {
          setInfo(event.target.value);
        }}
      />
      <TextField
        InputLabelProps={{ shrink: true }}
        disabled
        label="Email"
        value={data?.email}
      />

      <TextField
        InputLabelProps={{ shrink: true }}
        label="Phone Number"
        value={data?.phone_number}
        onChange={(event) => {
          setInfo(event.target.value);
        }}
      />
      {/* <TextField
        label="Address"
        defaultValue={info.address}
        onChange={(event) => {
          setInfo(event.target.value);
        }}
      /> */}
      <Button variant="contained" component="label" sx={{ width: "50%" }}>
        Upload avatar
        <input hidden accept="image/*" multiple type="file" />
        <PhotoCamera />
      </Button>
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
    </Stack>
  );
}
