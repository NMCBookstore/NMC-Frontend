import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  Card,
  Tooltip,
  Avatar,
  CardMedia,
  Button,
  IconButton,
  Grid,
  Divider,
  CardContent,
  FormControl,
  TextField,
  Autocomplete,
  Modal
} from '@mui/material';
import { styled } from '@mui/material/styles';

import ArrowBackTwoToneIcon from '@mui/icons-material/ArrowBackTwoTone';
import Text from 'src/components/Text';
import Label from 'src/components/Label';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import UploadTwoToneIcon from '@mui/icons-material/UploadTwoTone';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCurrentAccessToken,
  selectCurrentRefreshToken,
  selectCurrentUser,
  setCredentials
} from 'src/features/auth/authSlice';
import { IsValidImage } from 'src/utils/helper';
import toast from 'react-hot-toast';
import { useUpdateUserMutation } from 'src/services/user/userAPI';

const genderOptions = [
  { label: 'Male', value: 1 },
  { label: 'Female', value: 0 }
];

const style = {
  overflow: 'auto',
  position: 'absolute' as 'absolute',
  borderRadius: '8px',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100vw',
  maxWidth: '800px',
  maxHeight: '90vh',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4
};

const Input = styled('input')({
  display: 'none'
});

const AvatarWrapper = styled(Card)(
  ({ theme }) => `

    position: relative;
    overflow: visible;
    display: inline-block;

    .MuiAvatar-root {
      width: ${theme.spacing(16)};
      height: ${theme.spacing(16)};
    }
`
);

const ButtonUploadWrapper = styled(Box)(
  ({ theme }) => `
    position: absolute;
    width: ${theme.spacing(4)};
    height: ${theme.spacing(4)};
    bottom: -${theme.spacing(1)};
    right: -${theme.spacing(1)};

    .MuiIconButton-root {
      border-radius: 100%;
      background: ${theme.colors.primary.main};
      color: ${theme.palette.primary.contrastText};
      box-shadow: ${theme.colors.shadows.primary};
      width: ${theme.spacing(4)};
      height: ${theme.spacing(4)};
      padding: 0;
  
      &:hover {
        background: ${theme.colors.primary.dark};
      }
    }
`
);

const CardCover = styled(Card)(
  ({ theme }) => `
    position: relative;

    .MuiCardMedia-root {
      height: ${theme.spacing(26)};
    }
`
);

const CardCoverAction = styled(Box)(
  ({ theme }) => `
    position: absolute;
    right: ${theme.spacing(2)};
    bottom: ${theme.spacing(2)};
`
);
interface Person {
  id: number;
  name: string;
}
const people: Person[] = [
  { id: 1, name: 'Male' },
  { id: 0, name: 'Female' },
  { id: 2, name: 'Other' }
];

const ProfileCover = () => {
  const user = useSelector(selectCurrentUser);
  const token = useSelector(selectCurrentAccessToken);
  const refresh_token = useSelector(selectCurrentRefreshToken);
  const userGender = user?.sex;
  const dispatch = useDispatch();

  const [openProfile, setOpenProfile] = React.useState(false);
  const handleOpenProfile = () => setOpenProfile(true);
  const handleCloseAdd = () => setOpenProfile(false);

  const [openPassword, setOpenPassword] = React.useState(false);
  const handleOpenPassword = () => setOpenPassword(true);
  const handleClosePassword = () => setOpenPassword(false);

  const [pass, setPassword] = useState({
    newPassword: '',
    confirmPassword: '',
    showPass: false
  });

  const [selectedGender, setSelectedGender] = useState(null);
  const [userInfo, setUserInfo] = useState(user);

  const handleGenderChange = (event, newValue) => {
    setSelectedGender(newValue);
  };

  const [avatar, setAvatar] = useState<any | undefined>();
  useEffect(() => {
    return () => {
      if (avatar) {
        URL.revokeObjectURL(avatar.preview);
      }
    };
  }, [avatar]);

  const handlePreviewAvatar = (e: any) => {
    const file = e.target.files[0];
    if (!file) {
      return;
    }
    if (IsValidImage(file)) {
      file.preview = URL.createObjectURL(file);
      setAvatar(file);
    } else {
      toast.error('Only  png, jpeg, jpg files accepted');
    }
    console.log(file);
  };

  const renderGenderText = (userGender: string) => {
    if (userGender === '1') {
      return 'Male';
    } else if (userGender === '0') {
      return 'Female';
    } else return 'Other';
  };

  const [updateProfile, { isLoading }] = useUpdateUserMutation();
  const [updatePassword, { isLoading: isPasswordLoading }] =
    useUpdateUserMutation();

  const handleUpdateInfo = async (e: any) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('full_name', userInfo.full_name);
    formData.append('phone_number', userInfo.phone_number);
    formData.append('age', userInfo.age.toString());
    formData.append('sex', userInfo.sex);
    if (avatar) {
      formData.append('image', avatar);
    }

    formData.forEach((value, key) => {
      console.log(key, value);
    });

    const v = await updateProfile(formData);
    if ('data' in v) {
      const { ...user } = v.data;
      dispatch(
        setCredentials({
          user,
          access_token: token,
          refresh_token: refresh_token
        })
      );
      toast.success('Profile updated');
      handleCloseAdd();
    } else {
      toast.error('Update failed');
    }
  };

  const handleChangePassword = async (e: any) => {
    e.preventDefault();
    const formData = new FormData();

    if (pass.newPassword === pass.confirmPassword) {
      formData.append('password', pass.newPassword);
      const v = await updatePassword(formData);
      if ('data' in v) {
        handleClosePassword();
        toast.success('Your password updated');
      } else {
        toast.error("Can't update your password");
      }
    } else {
      toast.error("Your password doesn't match or too short");
    }
  };

  return (
    <>
      <Box display="flex" mb={3}>
        <Tooltip arrow placement="top" title="Go back">
          <IconButton color="primary" sx={{ p: 2, mr: 2 }}>
            <ArrowBackTwoToneIcon />
          </IconButton>
        </Tooltip>
        <Box>
          <Typography variant="h3" component="h3" gutterBottom>
            Profile for {user?.username}
          </Typography>
          <Typography variant="subtitle2">
            This is a profile page. Welcome back {user?.username}!
          </Typography>
        </Box>
      </Box>
      <Box display="flex" mb={2} sx={{ justifyContent: 'center' }}>
        <AvatarWrapper>
          <Avatar variant="rounded" alt={user?.username} src={user?.image} />
        </AvatarWrapper>
      </Box>
      <Box display="flex" mb={3} sx={{ justifyContent: 'center' }}>
        <Typography variant="h3" component="h3" gutterBottom>
          {user?.username}
        </Typography>
      </Box>
      <Grid item xs={12}>
        <Card>
          <Box
            p={3}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box>
              <Typography variant="h4" gutterBottom>
                Your Profile
              </Typography>
              <Typography variant="subtitle2">
                Manage details your information!
              </Typography>
            </Box>
            <Button
              variant="text"
              startIcon={<EditTwoToneIcon />}
              onClick={handleOpenPassword}
            >
              Change Password
            </Button>
          </Box>
          <Divider />
          <CardContent
            sx={{
              p: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <Typography variant="subtitle2">
              <Grid container spacing={0}>
                <Grid item xs={4} md={3} textAlign={{ sm: 'right' }}>
                  <Box pr={3} pb={2}>
                    Name:
                  </Box>
                </Grid>
                <Grid item xs={8} md={3}>
                  <Text color="black">
                    <b>{user?.username}</b>
                  </Text>
                </Grid>
                <Grid item xs={4} md={3} textAlign={{ sm: 'right' }}>
                  <Box pr={3} pb={2}>
                    Email ID:
                  </Box>
                </Grid>
                <Grid item xs={8} md={3}>
                  <Text color="black">
                    <b>{user?.email}</b>
                  </Text>
                </Grid>
                <Grid item xs={4} md={3} textAlign={{ sm: 'right' }}>
                  <Box pr={3} pb={2}>
                    Phone Number:
                  </Box>
                </Grid>
                <Grid item xs={8} md={3}>
                  <Text color="black">
                    <b>{user?.phone_number}</b>
                  </Text>
                </Grid>
                <Grid item xs={4} md={3} textAlign={{ sm: 'right' }}>
                  <Box pr={3} pb={2}>
                    Age:
                  </Box>
                </Grid>
                <Grid item xs={8} md={3}>
                  <Text color="black">
                    <b>{user?.age}</b>
                  </Text>
                </Grid>
                <Grid item xs={12} sm={4} md={3} textAlign={{ sm: 'right' }}>
                  <Box pr={3} pb={2}>
                    Gender:
                  </Box>
                </Grid>
                <Grid item xs={12} sm={8} md={3}>
                  <Text color="black">
                    <b>
                      {String(user?.sex) !== '' &&
                      renderGenderText(String(user?.sex))
                        ? renderGenderText(String(user?.sex))
                        : "You haven't set your gender"}
                    </b>
                  </Text>
                </Grid>
                <Grid item xs={12} sm={4} md={3} textAlign={{ sm: 'right' }}>
                  <Box pr={3} pb={2}>
                    Role:
                  </Box>
                </Grid>
                <Grid item xs={12} sm={8} md={3}>
                  <Text color="black">
                    <b>Admin</b>
                  </Text>
                </Grid>
              </Grid>
            </Typography>
            <Button
              sx={{ width: 'fit-content' }}
              variant="contained"
              startIcon={<EditTwoToneIcon />}
              onClick={handleOpenProfile}
            >
              Edit
            </Button>
          </CardContent>
        </Card>
      </Grid>
      <Modal
        open={openProfile}
        onClose={handleCloseAdd}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h3" component="h2" mb={4}>
            Edit Info
          </Typography>
          <form>
            <Box display="flex" mb={4} sx={{ justifyContent: 'center' }}>
              <AvatarWrapper>
                <Avatar
                  variant="rounded"
                  // alt={user?.username}
                  src={avatar?.preview ? avatar.preview : user?.image}
                />
                <ButtonUploadWrapper>
                  <Input
                    accept="image/*"
                    id="icon-button-file"
                    name="icon-button-file"
                    type="file"
                    onChange={handlePreviewAvatar}
                  />
                  <label htmlFor="icon-button-file">
                    <IconButton component="span" color="primary">
                      <UploadTwoToneIcon />
                    </IconButton>
                  </label>
                </ButtonUploadWrapper>
              </AvatarWrapper>
            </Box>
            <FormControl fullWidth>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="stretch"
                spacing={2}
              >
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Name"
                    defaultValue={userInfo?.full_name}
                    placeholder="Your Name"
                    fullWidth
                    onChange={(e) =>
                      setUserInfo({
                        ...userInfo,
                        full_name: e.target.value
                      })
                    }
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Email"
                    placeholder="abc@gmail.com"
                    fullWidth
                    value={userInfo?.email}
                    disabled
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Phone Number"
                    placeholder="0123456789"
                    fullWidth
                    defaultValue={userInfo?.phone_number}
                    onChange={(e) =>
                      setUserInfo({
                        ...userInfo,
                        phone_number: e.target.value
                      })
                    }
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Age"
                    type="number"
                    placeholder="Your Age"
                    fullWidth
                    defaultValue={userInfo?.age}
                    onChange={(e) =>
                      setUserInfo({
                        ...userInfo,
                        age: Number(e.target.value)
                      })
                    }
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <Autocomplete
                    value={selectedGender}
                    onChange={handleGenderChange}
                    options={genderOptions}
                    getOptionLabel={(option) => option.label}
                    defaultValue={
                      String(userInfo?.sex) !== '' &&
                      renderGenderText(String(userInfo?.sex))
                        ? renderGenderText(String(userInfo?.sex))
                        : "You haven't set your gender"
                    }
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Gender"
                        variant="outlined"
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Role"
                    disabled
                    fullWidth
                    defaultValue={'Admin'}
                  />
                </Grid>
              </Grid>
              <Box
                mt={2}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Button
                  variant="contained"
                  size="large"
                  endIcon={<EditTwoToneIcon />}
                  type="submit"
                  disabled={isLoading}
                  onClick={handleUpdateInfo}
                >
                  {isLoading ? 'Updating...' : 'Save Changes'}
                </Button>
              </Box>
            </FormControl>
          </form>
        </Box>
      </Modal>
      <Modal
        open={openPassword}
        onClose={handleClosePassword}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h3" component="h2" mb={4}>
            Change Password
          </Typography>
          <form>
            <FormControl fullWidth>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="stretch"
                spacing={2}
              >
                <Grid item xs={12}>
                  <TextField
                    label="New Password"
                    placeholder="*********"
                    fullWidth
                    type="password"
                    onChange={(e) =>
                      setPassword({ ...pass, newPassword: e.target.value })
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Confirm New Password"
                    placeholder="*********"
                    fullWidth
                    type='password'
                    onChange={(e) =>
                      setPassword({
                        ...pass,
                        confirmPassword: e.target.value
                      })
                    }
                  />
                </Grid>
              </Grid>
              <Box
                mt={2}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Button
                  variant="contained"
                  size="large"
                  endIcon={<EditTwoToneIcon />}
                  type="submit"
                  disabled={isPasswordLoading}
                  onClick={handleChangePassword}
                >
                  {isPasswordLoading ? 'Updating...' : 'Change password'}
                </Button>
              </Box>
            </FormControl>
          </form>
        </Box>
      </Modal>
    </>
  );
};

ProfileCover.propTypes = {
  user: PropTypes.object.isRequired
};

export default ProfileCover;
