import React from "react";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import MUIDataTable from "mui-datatables";
import makeStyles from "@mui/styles/makeStyles";

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
  const options = {
    selectableRows: "none",
    onRowClick: (rowData) => {
      console.log("Row clicked:", rowData);
    },
  };
  return (
    <>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography variant="h4" my={3}>List of book</Typography>
          <MUIDataTable
            title="Book Data List"
            data={datatableData}
            onRowClick={() => console.log("this clicked")}
            columns={["Img", "Name", "Publisher", "Author", "Price"]}
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
