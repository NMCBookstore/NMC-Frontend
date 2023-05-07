import React from "react";
import MUIDataTable from "mui-datatables";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Typography } from "@mui/material";

export default function OrderManagement() {
  const columns = ["Name", "Company", "City", "State"];

  const data = [
    ["Joe James", "Test Corp", "Yonkers", "NY"],
    ["John Walsh", "Test Corp", "Hartford", "CT"],
    ["Bob Herm", "Test Corp", "Tampa", "FL"],
    ["James Houston", "Test Corp", "Dallas", "TX"],
  ];

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
            data={data}
            columns={columns}
            options={options}
          />
        </Grid>
      </Grid>
    </>
  );
}
