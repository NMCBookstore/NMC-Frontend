import { Box, Grid } from '@mui/material';
import './styleUpload.css';

import MUIDataTable from 'mui-datatables';

import React from 'react';
import { useNavigate } from 'react-router-dom';
import Label from 'src/components/Label';
import {
  useGetAllOrderQuery
} from 'src/services/order/orderAPI';

const imgStyle = {
  width: '140px',
  height: '208px',
  objectFit: 'cover',
  borderRadius: '20px'
} as React.CSSProperties;

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

const OrderListTable = () => {
  const navigate = useNavigate();

  const { data: orders, isLoading } = useGetAllOrderQuery();

  const columns = [
    {
      name: 'id',
      label: 'ID',
      options: {
        filter: false,
        sort: true
      }
    },
    {
      name: 'username',
      label: 'User',
      options: {
        filter: false,
        sort: true
      }
    },
    {
      name: 'books',
      label: 'Book name',
      options: {
        filter: false,
        sort: false,
        customBodyRender: (value) =>
          value?.map((book, index) => (
            <Box mt={1} key={book?.id}>
              <Label color="primary">{book?.name}</Label>
            </Box>
          ))
      }
    },
    // {
    //   name: 'transactions',
    //   label: 'Each Amount',
    //   options: {
    //     filter: false,
    //     sort: false,
    //     customBodyRender: (value) =>
    //       value?.map((transaction, index) => (
    //         <Typography mt={1} key={transaction?.id}>
    //           x{transaction?.amount}
    //         </Typography>
    //       ))
    //   }
    // },
    {
      name: 'transactions',
      label: 'Book Price',
      options: {
        filter: false,
        sort: false,
        customBodyRender: (value) =>
          value?.map((transaction, index) => (
            <Box mt={1} key={transaction?.id}>
              <Label color="black">{transaction?.total.toFixed(2)}$</Label>
            </Box>
          ))
      }
    },
    {
      name: 'sub_amount',
      label: 'Total Amount',
      options: {
        filter: false,
        sort: true
      }
    },
    {
      name: 'sub_total',
      label: 'Total',
      options: {
        filter: false,
        sort: true,
        customBodyRenderLite: (dataIndex) => {
          let val = orders[dataIndex].sub_total.toFixed(2);
          return <Label color="black">{val}$</Label>;
        }
      }
    },
    {
      name: 'status',
      label: 'Status',
      options: {
        filter: true,
        sort: true,
        customBodyRenderLite: (dataIndex) => {
          const status = orders[dataIndex].status;
          if (status === 'unpaid') {
            return <Label color="error">{status}</Label>;
          }
          return <Label color="success">{status}</Label>;
        }
      }
    }
  ];

  const options = {
    selectableRows: 'none',
    filterType: 'dropdown',
    responsive: 'vertical',
    search: true
  };

  return (
    <Box>
      <Grid item xs={12}>
        {orders && !isLoading && (
          <MUIDataTable data={orders} columns={columns} options={options} />
        )}
      </Grid>
    </Box>
  );
};

export default OrderListTable;
