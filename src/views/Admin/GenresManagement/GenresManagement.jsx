import React from "react";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import MUIDataTable from "mui-datatables";
import makeStyles from "@mui/styles/makeStyles";
import { useGetGenresQuery } from "../../../services/genresAPIs";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

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

  const {data} = useGetGenresQuery();
  const navigate = useNavigate();

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
      label: " Name",
      options: {
        filter: true,
        sort: true,
      },
    },
  ]

  const classes = useStyles();
  const options = {
    selectableRows: "none",
    onRowClick: (rowData) => {
      navigate(`/admin/details-genres/${rowData[0]}`);
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
            data={data}
            columns={columns}
            options={ options }
          />
        </Grid>
      </Grid>
    </>
  );
}
