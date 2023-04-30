import React, { useState, useEffect } from "react";

import { Container, FormControl, List, Stack, TextField } from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import { useUpdateUserMutation } from "../../../services/userAPI";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";

export default function UserContentProfile({ data }) {
  const user = useSelector((state) => state.auth.login.user);

  const [userInfo, setUserInfo] = useState(user);

  // console.log(userInfo)

  // const [values, setValues] = useState({
  //   username: "",
  //   full_name: "",
  //   email: "",
  //   image: "",
  //   age: "",
  //   sex: "",
  //   phone_number: "",
  // },user);

  const dispatch = useDispatch();

  //Update user API
  const [updateUser] = useUpdateUserMutation();

  const handleUpdateInfo = () => {
    if (userInfo.age > 90) {
      toast.error("Your age must be less than 90")
    } else {
      const newUp = { ...userInfo, age: parseInt(userInfo.age) };
      dispatch(updateUser(newUp));
      console.log(newUp)
      toast.success("Profile updated")
    }
  };

  // Set avatar
  const [avatar, setAvatar] = useState();
  useEffect(() => {
    return () => {
      avatar && URL.revokeObjectURL(avatar.preview);
    };
  }, [avatar]);
  const handlePreviewAvatar = (e) => {
    const file = e.target.files[0];
    file.preview = URL.createObjectURL(file);
    setAvatar(file);
    // console.log(URL.createObjectURL(file));
  };

  //Get user info
  const [info, setInfo] = useState(null);
  useEffect(() => {
    // console.log(data)
    setInfo(data);
  }, [data]);

  return (
    info && (
      <Container>
        <Stack
          spacing={2}
          sx={{
            width: "60%",
            display: "flex",
            flexWrap: "wrap",
            justifyItems: "center",
          }}
        >
          <TextField
            InputLabelProps={{ shrink: true }}
            disabled
            label="User Name"
            name="username"
            value={user?.username}
          />

          <TextField
            InputLabelProps={{ shrink: true }}
            label="Full Name"
            name="full_name"
            defaultValue={user?.full_name}
            onChange={(e) =>
              setUserInfo({ ...userInfo, full_name: e.target.value })
            }
          />

          <TextField
            InputLabelProps={{ shrink: true }}
            label="Email"
            name="email"
            defaultValue={user?.email}
            onChange={(e) =>
              setUserInfo({ ...userInfo, email: e.target.value })
            }
          />

          <TextField
            InputLabelProps={{ shrink: true }}
            label="Phone Number"
            name="phone_number"
            defaultValue={user?.phone_number}
            onChange={(e) =>
              setUserInfo({ ...userInfo, phone_number: e.target.value })
            }
          />

          <TextField
            InputLabelProps={{ shrink: true }}
            label="Age"
            name="age"
            type="number"
            defaultValue={user?.age}
            onChange={(e) => setUserInfo({ ...userInfo, age: e.target.value })}
          />

          <ImageListItem>
            <img style={{ width: "30%", height: "30%" }} src={user?.image} />
            <input
              // hidden
              // accept="image/*"
              type="file"
              onChange={handlePreviewAvatar}
            />
            {avatar && <img src={avatar.preview} alt="" width="40%" />}
          </ImageListItem>

          {/* <input
            // hidden
            // accept="image/*"
            type="file"
            onChange={handlePreviewAvatar}
          />
          {avatar && <img src={avatar.preview} alt="" width="40%" />} */}

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
              onClick={handleUpdateInfo}
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
      </Container>
    )
  );
}
