import * as React from "react";
import { useState } from "react";
import {
  Container,
  List,
  Stack,
  TextField,
  IconButton,
  InputAdornment,
} from "@mui/material";
import Button from "@mui/material/Button";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useUpdateUserMutation } from "../../../services/userAPI";
import { toast } from "react-hot-toast";
import { validateRegisterPassword } from "../../../utils/helper";
import { useNavigate } from "react-router-dom";

export default function UserContentChangePassword() {
  const [pass, setPassword] = useState({
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

  const navigate = useNavigate();

  const naviProfile = () => {
    navigate("/user/profile/");
  };

  const [updatePassword, { isLoading }] = useUpdateUserMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    if (
      pass.newPassword === pass.confirmPassword &&
      validateRegisterPassword(pass.newPassword)
    ) {
      formData.append("password", pass.newPassword);
      const v = await updatePassword(formData);
      if (v.data) {
        toast.success("Your password updated");
      } else {
        toast.error("Can't update your password");
      }
    } else {
      toast.error("Your password doesn't match or too short");
    }
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
        {/* <TextField
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
        /> */}

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
                  {pass.showPass ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          onChange={(e) =>
            setPassword({ ...pass, newPassword: e.target.value })
          }
        />

        <TextField
          margin="normal"
          required
          name="confirmPassword"
          label="Confirm New Password"
          type="password"
          placeholder="Confirm your new password"
          onChange={(e) =>
            setPassword({ ...pass, confirmPassword: e.target.value })
          }
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
            disabled={isLoading}
            onClick={naviProfile}
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
            disabled={isLoading}
            onClick={handleSubmit}
          >
            Save changes
          </Button>
        </Stack>
        {/* </Box> */}
      </Stack>
    </Container>
  );
}
