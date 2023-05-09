import React, { useState, useEffect } from "react";
import { Box, Container, FormControl, List, Stack, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import ImageListItem from "@mui/material/ImageListItem";
import { useUpdateUserMutation } from "../../../services/userAPI";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { setCredentials } from "../../../features/auth/authSlice";

export default function UserContentProfile({ data }) {
  const user = useSelector((state) => state.auth.login.user);

  const [userInfo, setUserInfo] = useState(user);

  console.log("this is user info", userInfo);

  useEffect(() => {
    userInfo;
  }, []);
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
    console.log(URL.createObjectURL(file));
  };

  //Update user API
  const [updateUser] = useUpdateUserMutation();

  const handleUpdateInfo = async (e) => {
    e.preventDefault();
    if (userInfo.age > 90) {
      toast.error("Your age must be less than 90");
    } else {
      const newUp = await updateUser({
        ...userInfo,
        age: parseInt(userInfo.age),
      });
      dispatch(setCredentials({ user: newUp.data }));
      toast.success("Profile updated");
    }
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
            justifyContent: "center",
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


            <img
              style={{ width: "50%", height: "30%" }}
              src={avatar?.preview ? avatar.preview : user?.image}
            />
            <input
              // hidden
              // accept="image/*"
              type="file"
              onChange={handlePreviewAvatar}
            />
            {/* {avatar && <img src={avatar.preview} alt="" width="40%" />} */}


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
