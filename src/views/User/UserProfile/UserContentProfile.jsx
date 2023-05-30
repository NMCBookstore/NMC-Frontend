import React, { useState, useEffect } from "react";
import { Avatar, Container, Stack, TextField, Tooltip } from "@mui/material";
import Button from "@mui/material/Button";
import {
  useGetUserQuery,
  useUpdateUserMutation,
} from "../../../services/userAPI";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { setCredentials } from "../../../features/auth/authSlice";
import {
  isValidImage,
  validAge,
  validPhoneNumber,
  validFullName,
  validateRegisterUsername,
  validateUsername,
} from "../../../utils/helper";
import { PhotoCamera } from "@mui/icons-material";
import CheckIcon from "@mui/icons-material/Check";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import { useSendVerifiedEmailMutation } from "../../../services/verifiedEmailAPIs";

export default function UserContentProfile({ data }) {
  const user = useSelector((state) => state.auth.login.user);
  const { data: getUser } = useGetUserQuery("userInfo", {
    refetchOnMountOrArgChange: true,
  });

  const [userInfo, setUserInfo] = useState(user);
  const [errors, setErrors] = useState(user);

  const dispatch = useDispatch();

  const [sendVerifiedEmail] = useSendVerifiedEmailMutation();

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
  const [updateUser, { isLoading }] = useUpdateUserMutation();

  const handleUpdateInfo = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    if (validateUsername(userInfo.full_name)) {
      formData.append("full_name", userInfo.full_name);
    } else {
      toast.error("Your name is not legit");
    }
    if (validPhoneNumber(userInfo.phone_number)) {
      formData.append("phone_number", userInfo.phone_number);
    } else {
    }
    if (validAge(userInfo.age)) {
      formData.append("age", userInfo.age);
    } else {
      toast.error("Your age must be between 10 to 90");
    }
    if (avatar) {
      formData.append("image", avatar);
    }

    const field = formData.keys();
    const count = Array.from(field).length;

    console.log("this is key length", count);

    // if (!validPhoneNumber(userInfo.phone_number) && !validAge(userInfo.age)) {
    const v = await updateUser(formData);
    if (v.error && v.error.status === 500) {
      toast.error("Username existed");
    } else if (count == 3 || count == 4) {
      toast.success("Updated your profile");
    }
    dispatch(setCredentials({ user: v.data }));
    // }
  };

  //Get user info
  const [info, setInfo] = useState(null);
  useEffect(() => {
    setInfo(data);
  }, [data]);

  const handleVerify = () => {
    sendVerifiedEmail();
  };

  return (
    info && (
      <Container>
        <Stack
          spacing={2}
          sx={{
            width: "65%",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <TextField
            sx={{ width: "85%" }}
            InputLabelProps={{ shrink: true }}
            disabled
            label="User Name"
            name="username"
            value={user?.username}
          />

          <TextField
            sx={{ width: "85%" }}
            InputLabelProps={{ shrink: true }}
            label="Full Name"
            name="full_name"
            defaultValue={user?.full_name}
            onChange={(e) =>
              setUserInfo({ ...userInfo, full_name: e.target.value })
            }
          />
          <Stack direction="row" sx={{ alignItems: "center" }}>
            <TextField
              sx={{ width: "85%" }}
              InputLabelProps={{ shrink: true }}
              label="Email"
              name="email"
              disabled
              defaultValue={user?.email}
            />
            {getUser?.is_email_verified ? (
              <Tooltip title="email verified">
                <CheckIcon fontSize="small" color="success" />
              </Tooltip>
            ) : (
              <Stack direction="row" sx={{ alignItems: "center" }}>
                <Tooltip
                  title="email not verify (click here to verify)"
                  onClick={handleVerify}
                >
                  <PriorityHighIcon fontSize="small" color="warning" />
                </Tooltip>
              </Stack>
            )}
          </Stack>

          <TextField
            sx={{ width: "85%" }}
            InputLabelProps={{ shrink: true }}
            label="Phone Number"
            name="phone_number"
            defaultValue={user?.phone_number}
            onChange={(e) =>
              setUserInfo({ ...userInfo, phone_number: e.target.value })
            }
          />

          <TextField
            sx={{ width: "85%" }}
            InputLabelProps={{ shrink: true }}
            label="Age"
            name="age"
            type="number"
            defaultValue={user?.age}
            onChange={(e) => setUserInfo({ ...userInfo, age: e.target.value })}
          />

          <Avatar
            sx={{ width: "200px", height: "200px" }}
            src={avatar?.preview ? avatar.preview : user?.image}
          />
          <Button
            variant="contained"
            component="label"
            sx={{
              width: "15%",
              height: "5%",
              backgroundColor: "#3498db",
              "&:hover": {
                backgroundColor: "#27b7b7",
              },
            }}
          >
            <input hidden type="file" onChange={handlePreviewAvatar} />
            <PhotoCamera />
          </Button>

          <Stack direction="row">
            <Button
              variant="outlined"
              disabled={isLoading}
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
              disabled={isLoading}
              sx={{
                mt: 2,
                width: "50%",
                height: "50%",
                marginLeft: "25%",
                backgroundColor: "#DB4444",
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
