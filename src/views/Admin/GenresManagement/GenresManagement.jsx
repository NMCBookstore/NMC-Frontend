import React from "react";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import MUIDataTable from "mui-datatables";
import makeStyles from "@mui/styles/makeStyles";

import { Typography } from "@mui/material";

const datatableData = [
  ["Sach loai 1", "3"],
  ["Sach loai 2", "4"],
  ["Sach loai 3", "5"],
];

const useStyles = makeStyles((theme) => ({
  tableOverflow: {
    overflow: "auto",
  },
}));

export default function GenresManagement() {
  const classes = useStyles();
  const options = {
    selectableRows: "none",
    onRowClick: (rowData, rowMeta) => {
      console.log("Row clicked:", rowData);
    },
  };
  return (
    <>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography variant="h4" my={3}>
            List of Genres
          </Typography>
          <MUIDataTable
            title="Genres Data List"
            data={datatableData}
            onRowClick={() => console.log("this clicked")}
            columns={["Genres", "Total Subgenres"]}
            options={{ filterType: "checkbox", options }}
          />
        </Grid>
      </Grid>
    </>
  );
}
