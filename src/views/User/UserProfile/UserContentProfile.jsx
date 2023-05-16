import React, { useState, useEffect } from "react";
import { Box, Container, Stack, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { useUpdateUserMutation } from "../../../services/userAPI";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { setCredentials } from "../../../features/auth/authSlice";
import { isValidImage } from "../../../utils/helper";
import {
  validateRegisterUsername,
  validatePasswordLogin,
  validAge,
  validPhoneNumber,
  validateRegisterEmail,
  validFullName,
} from "../../../utils/helper";

export default function UserContentProfile({ data }) {
  const user = useSelector((state) => state.auth.login.user);

  const [userInfo, setUserInfo] = useState(user);

  const [errors, setErrors] = useState(user);

  // console.log("this is user info", userInfo);

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
    if (!file) {
      return;
    }
    if (isValidImage(file)) {
      file.preview = URL.createObjectURL(file);
      setAvatar(file);
    } else {
      toast.error("Only  png, jpeg, jpg files accepted");
    }
  };

  //Update user API
  const [updateUser] = useUpdateUserMutation();

  const handleUpdateInfo = async (e) => {
    e.preventDefault();
    const { full_Name, age, phone_number } = user;

    const full_NameError = validFullName(full_Name);
    setErrors((prevErrors) => ({ ...prevErrors, full_NameError }));

    const ageError = validAge(age);
    setErrors((prevErrors) => ({ ...prevErrors, ageError }));

    const phone_numberError = validPhoneNumber(phone_number);
    setErrors((prevErrors) => ({ ...prevErrors, phone_numberError }));

    if (!full_NameError && !ageError && !phone_numberError) {
      try {
        const newUp = await updateUser({
          ...userInfo,
          age: parseInt(userInfo.age),
        });
        dispatch(setCredentials({ user: newUp.data }));
        toast.success("Profile updated");
      } catch {
        toast.error("Can't update your profile");
      }
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
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
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
              onChange={(e) =>
                setUserInfo({ ...userInfo, age: e.target.value })
              }
            />

            <img
              style={{ width: "200px", height: "200px" }}
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
        </Box>
      </Container>
    )
  );
}
