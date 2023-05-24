import React from "react";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import MUIDataTable from "mui-datatables";
import makeStyles from "@mui/styles/makeStyles";
import { useGetGenresQuery } from "../../../services/genresAPIs";
import { Box, Button, Stack, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

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

  const { data } = useGetGenresQuery();
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
    <Box sx={{ my: 5 }}>
      <Stack direction="row" display="flex" justifyContent="space-between">
        <Typography variant="h4">
        List of Genres
          </Typography>
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
            title="Genres Data List"
            data={data}
            columns={columns}
            options={options}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
