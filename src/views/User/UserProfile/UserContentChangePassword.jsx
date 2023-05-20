import * as React from "react";
import { useState } from "react";
import { Container, List, Stack, TextField, IconButton, InputAdornment } from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Button from "@mui/material/Button";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Box from "@mui/material/Box";

export default function UserContentChangePassword() {
  const [pass, setPassword] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
    showPass: false,
  });

  const handlePassVisibilty = () => {
    setPassword({
      ...pass,
      showPass: !pass.showPass,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      currentPassword: data.get("currentPassword"),
      newPassword: data.get("newPassword"),
      confirmPassword: data.get("confirmPassword"),
    });
  };

  return (
    <Container>
          <Stack
      component="form"
      onSubmit={handleSubmit}
      spacing={2}
      sx={{ width: "60%", display: "flex", flexWrap: "wrap" }}
    >
      {/* <Box  sx={{ mt: 1 }}> */}
      <TextField
        margin="normal"
        required
        name="currentPassword"
        label="Current Password"
        placeholder="Enter your current password"
        type={pass.showPass ? "text" : "password"}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={handlePassVisibilty}
                aria-label="toggle password"
                edge="end"
              >
                {pass.showPass ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      <TextField
        margin="normal"
        required
        name="newPassword"
        label="New Password"
        placeholder="Enter your new password"
        type={pass.showPass ? "text" : "password"}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={handlePassVisibilty}
                aria-label="toggle password"
                edge="end"
              >
                {pass.showPass}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      <TextField
        margin="normal"
        required
        name="confirmPassword"
        label="Confirm New Password"
        placeholder="Confirm your new password"
        type={pass.showPass ? "text" : "password"}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={handlePassVisibilty}
                aria-label="toggle password"
                edge="end"
              >
                {pass.showPass}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
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
      {/* </Box> */}
    </Stack>
    </Container>

  );
}
