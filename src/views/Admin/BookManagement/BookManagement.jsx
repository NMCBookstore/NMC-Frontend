import React, { useState } from "react";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import MUIDataTable from "mui-datatables";
import useStyles from "./styles";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useGetAllBookQuery } from "../../../services/productAdminAPI";

export default function BookManagement() {
  const classes = useStyles();

  const navigate = useNavigate();

  const { data: allProduct } = useGetAllBookQuery();

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
        sort: true,
      },
    },
    {
      name: "price",
      label: "Price",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "author",
      label: "Author",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "publisher",
      label: "Publisher",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "quantity",
      label: "Quantity",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "rating",
      label: "Rating",
      options: {
        filter: true,
        sort: true,
      },
    },
  ];

  const options = {
    selectableRows: "none",
    onRowClick: (rowData) => {
      console.log("Row clicked:", rowData);
      navigate(`/admin/details-book/${rowData[0]}`);
    },
    selectableRows: "multiple",
    filterType: "dropdown",
    responsive: "vertical",
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
