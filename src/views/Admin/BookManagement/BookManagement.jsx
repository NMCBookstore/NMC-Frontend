import React, { useState } from "react";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import MUIDataTable from "mui-datatables";
import useStyles from "./styles";
import { Box, Button, Stack, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
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
      <Box sx={{ my: 5 }}>
        <Stack direction="row" spacing={100}>
          <Typography variant="h4">List of book</Typography>
          <Link to="/admin/create-book" style={{ textDecoration: "none" }}>
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Button
                variant="contained"
                sx={{
                  my: 1,
                  backgroundColor: "#db4444",
                  "&:hover": {
                    backgroundColor: "#db4444",
                  },
                }}
              >
                Create new book
              </Button>
            </Box>
          </Link>
        </Stack>
        <Grid container spacing={4}>
          <Grid item xs={12}>
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
      </Box>
    </>
  );
}
