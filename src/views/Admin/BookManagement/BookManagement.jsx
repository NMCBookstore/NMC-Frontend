import React from "react";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import MUIDataTable from "mui-datatables";
import makeStyles from "@mui/styles/makeStyles";
import { useGetAllProductQuery } from "../../../services/productAPIs";

import { Typography } from "@mui/material";

const imgURL =
  "https://cdn0.fahasa.com/media/catalog/product/i/m/image_208370.jpg";

const datatableData = [
  [
    <img
      src={imgURL}
      style={{
        width: "25%",
        height: "40%",
      }}
    />,
    "Joe James",
    "Example Inc.",
    "Yonkers",
    "100.000VND",
  ],
  [
    <img
      src={imgURL}
      style={{
        width: "25%",
        height: "40%",
      }}
    />,
    "Joe James",
    "Example Inc.",
    "Yonkers",
    "100.000VND",
  ],
  [
    <img
      src={imgURL}
      style={{
        width: "25%",
        height: "40%",
      }}
    />,
    "Joe James",
    "Example Inc.",
    "Yonkers",
    "100.000VND",
  ],
  [
    <img
      src={imgURL}
      style={{
        width: "25%",
        height: "40%",
      }}
    />,
    "Joe James",
    "Example Inc.",
    "Yonkers",
    "100.000VND",
  ],
  [
    <img
      src={imgURL}
      style={{
        width: "25%",
        height: "40%",
      }}
    />,
    "Joe James",
    "Example Inc.",
    "Yonkers",
    "100.000VND",
  ],
  [
    <img
      src={imgURL}
      style={{
        width: "25%",
        height: "40%",
      }}
    />,
    "Joe James",
    "Example Inc.",
    "Yonkers",
    "100.000VND",
  ],
  [
    <img
      src={imgURL}
      style={{
        width: "25%",
        height: "40%",
      }}
    />,
    "Joe YYY",
    "Example Inc.",
    "Yonkers",
    "100.000VND",
  ],
];

const useStyles = makeStyles((theme) => ({
  tableOverflow: {
    overflow: "auto",
  },
}));

export default function BookManagement() {
  const classes = useStyles();
  const { data: allProduct } = useGetAllProductQuery({
    page_id: 1,
    page_size: 24,
  });

  const columns = [
    {
      name: "id",
      label: " ID",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "name",
      label: " Book name",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "price",
      label: "Price",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "author",
      label: "Author",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "publisher",
      label: "Publisher",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "quantity",
      label: "Quantity",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "rating",
      label: "Rating",
      options: {
        filter: true,
        sort: false,
      },
    },
  ];

  const options = {
    selectableRows: "none",
    onRowClick: (rowData) => {
      console.log("Row clicked:", rowData);
    },
    serverSide: true
  };

  return (
    <>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography variant="h4" my={3}>
            List of book
          </Typography>
          <MUIDataTable
            title="Book Data List"
            data={allProduct}
            onRowClick={() => console.log("this clicked")}
            columns={columns}
            options={
              //   filterType: "checkbox",
              options
            }
          />
        </Grid>
      </Grid>
    </>
  );
}
