import { Helmet } from 'react-helmet-async';
import PageHeader from './PageHeader'; 
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { Grid, Container } from '@mui/material';
import Footer from 'src/components/Footer';

import OrderList from './OrderList';

function Order() {
  return (
    <>
      <Helmet>
        <title>Orders List</title>
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
          spacing={3}
        >
          <Grid item xs={12}>
            <OrderList />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default Order;
