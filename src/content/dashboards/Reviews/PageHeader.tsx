import { Grid, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from 'src/features/auth/authSlice';

function PageHeader() {
  const user = useSelector(selectCurrentUser);

  return (
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid item>
        <Typography variant="h3" component="h3" gutterBottom>
          Review List
        </Typography>
        <Typography variant="subtitle2">
          {user?.username}, these are reviews on your bookstore
        </Typography>
      </Grid>
    </Grid>
  );
}

export default PageHeader;
