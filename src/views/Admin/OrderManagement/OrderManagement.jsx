import React, { useState, useEffect } from "react";
import MUIDataTable from "mui-datatables";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Typography } from "@mui/material";
import { useGetAdminAllOrderQuery } from "../../../services/orderAPIs";

const currencyExchange = (num) => {
  return parseFloat(num).toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  });
};

export default function OrderManagement() {
  const { data, isFetching } = useGetAdminAllOrderQuery()
  const [allOrder, setAllOrder] = useState([])

  const columns = [
    {
      name: "id",
      label: "ID",
      options: {
        filter: false,
        sort: true,
      }
    },
    {
      name: "username",
      label: "User",
      options: {
        filter: false,
        sort: true,
      }
    },
    {
      name: "books",
      label: "Books",
      options: {
        filter: false,
        sort: false,
        customBodyRender: (value) => (
          value?.map((book, index) => (
            <Typography mt={1}
              key={book?.id}
            >
              {book?.name}
            </Typography>
          ))
        )
      }
    },
    {
      name: "transactions",
      label: "Each Amount",
      options: {
        filter: false,
        sort: true,
        customBodyRender: (value) => (
          value?.map((transaction, index) => (
            <Typography mt={1}
              key={transaction?.id}
            >
              x{transaction?.amount}
            </Typography>
          ))
        )
      }
    },
    {
      name: "transactions",
      label: "Book Price",
      options: {
        filter: false,
        sort: false,
        customBodyRender: (value) => (
          value?.map((transaction, index) => (
            <Typography mt={1}
              key={transaction?.id}
            >
              {currencyExchange(transaction?.total)}
            </Typography>
          ))
        )
      }
    },
    {
      name: "sub_amount",
      label: "Total Amount",
      options: {
        filter: false,
        sort: true,
      }
    },
    {
      name: "sub_total",
      label: "Total",
      options: {
        filter: false,
        sort: true,
        customBodyRenderLite: (dataIndex) => {
          let val = currencyExchange(data[dataIndex].sub_total);
          return val;
        }
      }
    },
    {
      name: "status",
      label: "Status",
      options: {
        filter: true,
        sort: true,
      }
    },
  ];

  useEffect(() => {
    setAllOrder(data)
  }, [isFetching])


  const options = {
    filterType: "checkbox",
  };
  return (
    <>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography variant="h4" my={3}>
            List of Orders
          </Typography>
          <MUIDataTable
            title={"Customer's order"}
            data={allOrder}
            columns={columns}
            options={options}
            
          />
        </Grid>
      </Grid>
    </>
  );
}
