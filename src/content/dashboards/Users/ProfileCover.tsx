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

const genderOptions = [
  { label: 'Male', value: 'male' },
  { label: 'Female', value: 'female' }
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

const ProfileCover = ({ user }) => {
  const [openProfile, setOpenProfile] = React.useState(false);
  const handleOpenProfile = () => setOpenProfile(true);
  const handleCloseAdd = () => setOpenProfile(false);

  const [openPassword, setOpenPassword] = React.useState(false);
  const handleOpenPassword = () => setOpenPassword(true);
  const handleClosePassword = () => setOpenPassword(false);

  const [selectedGender, setSelectedGender] = useState(null);

  const handleGenderChange = (event, newValue) => {
    setSelectedGender(newValue);
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
            Profile for {user.name}
          </Typography>
          <Typography variant="subtitle2">
            This is a profile page. Welcome back {user.name}!
          </Typography>
        </Box>
      </Box>
      <Box display="flex" mb={2} sx={{ justifyContent: 'center' }}>
        <AvatarWrapper>
          <Avatar variant="rounded" alt={user.name} src={user.avatar} />
        </AvatarWrapper>
      </Box>
      <Box display="flex" mb={3} sx={{ justifyContent: 'center' }}>
        <Typography variant="h3" component="h3" gutterBottom>
          {user.name}
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
            <Button variant="text" startIcon={<EditTwoToneIcon />} onClick={handleOpenPassword}>
              Change Password
            </Button>
          </Box>
          <Divider />
          <CardContent sx={{ p: 4, display: "flex", flexDirection:"column", alignItems:"center" }}>
            <Typography variant="subtitle2">
              <Grid container spacing={0}>
                <Grid item xs={4} md={3} textAlign={{ sm: 'right' }}>
                  <Box pr={3} pb={2}
                  >
                    Name:
                  </Box>
                </Grid>
                <Grid item xs={8} md={3}>
                  <Text color="black">
                    <b>Bùi Đình Xuân</b>
                  </Text>
                </Grid>
                <Grid item xs={4} md={3} textAlign={{ sm: 'right' }}>
                  <Box pr={3} pb={2}>
                    Email ID:
                  </Box>
                </Grid>
                <Grid item xs={8} md={3}>
                  <Text color="black">
                    <b>demo@example.com</b>
                  </Text>
                </Grid>
                <Grid item xs={4} md={3} textAlign={{ sm: 'right' }}>
                  <Box pr={3} pb={2}>
                    Phone Number:
                  </Box>
                </Grid>
                <Grid item xs={8} md={3}>
                  <Text color="black">
                    <b>0123456789</b>
                  </Text>
                </Grid>
                <Grid item xs={4} md={3} textAlign={{ sm: 'right' }}>
                  <Box pr={3} pb={2}>
                    Age:
                  </Box>
                </Grid>
                <Grid item xs={8} md={3}>
                  <Text color="black">
                    <b>22</b>
                  </Text>
                </Grid>
                <Grid item xs={12} sm={4} md={3} textAlign={{ sm: 'right' }}>
                  <Box pr={3} pb={2}>
                    Gender:
                  </Box>
                </Grid>
                <Grid item xs={12} sm={8} md={3}>
                  <Text color="black">
                    <b>Male</b>
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
            <Button sx={{ width: 'fit-content' }} variant="contained" startIcon={<EditTwoToneIcon />} onClick={handleOpenProfile}>
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
                <Avatar variant="rounded" alt={user.name} src={user.avatar} />
                <ButtonUploadWrapper>
                  <Input
                    accept="image/*"
                    id="icon-button-file"
                    name="icon-button-file"
                    type="file"
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
                    placeholder="Your Name"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Email"
                    placeholder="abc@gmail.com"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Phone Number"
                    placeholder="0123456789"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Age"
                    type="number"
                    placeholder="Your Age"
                    fullWidth
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <Autocomplete
                    value={selectedGender}
                    onChange={handleGenderChange}
                    options={genderOptions}
                    getOptionLabel={(option) => option.label}
                    renderInput={(params) => (
                      <TextField {...params} label="Gender" variant="outlined" />
                    )}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Role"
                    disabled
                    fullWidth
                    defaultValue={"Admin"}
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
                >
                  Save
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
                    label="Old Password"
                    placeholder="*********"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="New Password"
                    placeholder="*********"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Confirm New Password"
                    placeholder="*********"
                    fullWidth
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
                >
                  Save Password
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
