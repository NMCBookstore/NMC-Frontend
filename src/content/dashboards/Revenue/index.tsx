import { Helmet } from 'react-helmet-async';
import PageHeader from './PageHeader';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { Container, Grid } from '@mui/material';
import WatchList from './WatchList';
import UserList from '../../../content/applications/Transactions/UserList';
import OrderList from '../../../content/applications/Transactions/OrderList';


function DashBoard() {
  return (
    <>
      <Helmet>
        <title>NMC Bookstore Management</title>
      </Helmet>
      <PageTitleWrapper>
        <PageHeader />
      </PageTitleWrapper>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={4}
        >
          <Grid item xs={12}>
            <WatchList />
          </Grid>
          <Grid item xs={12}>
            <OrderList />
          </Grid>
          <Grid item xs={12}>
            <UserList />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default DashBoard;
