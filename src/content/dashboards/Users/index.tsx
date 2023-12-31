import { Helmet } from 'react-helmet-async';
import Footer from 'src/components/Footer';

import { Container, Grid } from '@mui/material';

import ProfileCover from './ProfileCover';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from 'src/features/auth/authSlice';

function ManagementUserProfile() {
  const user = useSelector(selectCurrentUser);

  return (
    <>
      <Container sx={{ mt: 3 }} maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12}>
            <ProfileCover user={user} />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default ManagementUserProfile;
