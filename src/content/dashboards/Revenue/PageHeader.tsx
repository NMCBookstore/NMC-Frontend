import { Typography, Avatar, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from 'src/features/auth/authSlice';

function PageHeader() {
  const theme = useTheme();
  const user = useSelector(selectCurrentUser)

  return (
    <Grid container alignItems="center">
      <Grid item>
        <Avatar
          sx={{
            mr: 2,
            width: theme.spacing(8),
            height: theme.spacing(8)
          }}
          variant="rounded"
          alt={user.username}
          src={user.image}
        />
      </Grid>
      <Grid item>
        <Typography variant="h3" component="h3" gutterBottom>
          Welcome, {user.username}!
        </Typography>
      </Grid>
    </Grid>
  );
}

export default PageHeader;
