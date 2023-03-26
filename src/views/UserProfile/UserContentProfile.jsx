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

export default function UserContentProfile() {
  const [info, setInfo] = React.useState(profileContent);
  return (
    <Stack spacing={2} sx={{ width: "80%", display: "flex", flexWrap: "wrap" }}>
      <TextField
        label="First Name"
        defaultValue={info.firstName}
        onChange={(event) => {
          setInfo(event.target.value);
        }}
      />
      <TextField
        label="Last Name"
        defaultValue={info.lastName}
        onChange={(event) => {
          setInfo(event.target.value);
        }}
      />
      <TextField disabled label="Email" defaultValue={info.email} />

      <TextField
        label="Phone Number"
        defaultValue={info.phone}
        onChange={(event) => {
          setInfo(event.target.value);
        }}
      />
      <TextField
        label="Address"
        defaultValue={info.address}
        onChange={(event) => {
          setInfo(event.target.value);
        }}
      />
      <Button variant="contained" component="label" sx={{ width: "50%" }}>
        Upload avatar
        <input hidden accept="image/*" multiple type="file" />
        <PhotoCamera />
      </Button>
      <Stack direction="row">
        <Button
          variant="outlined"
          sx={{ mt: 2, width: "50%", marginLeft: "25%" }}
        >
          Cancel
        </Button>
        <Button
          type="submit"
          variant="contained"
          sx={{ mt: 2, width: "50%", marginLeft: "25%" }}
        >
          Save changes
        </Button>
      </Stack>
    </Stack>
  );
}
