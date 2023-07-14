import React from "react";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import MUIDataTable from "mui-datatables";
import makeStyles from "@mui/styles/makeStyles";
import { useGetGenresQuery } from "../../../services/genresAPIs";
import {
  Box,
  Button,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import CreateNewGenre from "./CreateNewGenre";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export default function GenresManagement() {
  const theme = createTheme({
    typography: {
      fontSize: 16,
    },
  });

  const { data } = useGetGenresQuery();
  const navigate = useNavigate();

  const columns = [
    {
      name: "id",
      label: " ID",
      options: {
        filter: false,
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
    {
      name: "",
      label: " ",
      options: {
        customBodyRender: () => (
          <Stack alignItems="end" sx={{ pr: 2 }}>
            <Tooltip title="Edit genre and subgenres of it">
              <ArrowForwardIosIcon />
            </Tooltip>
          </Stack>
        ),
        filter: false,
        sort: false,
      },
    },
  ];
  const options = {
    selectableRows: "none",
    onRowClick: (rowData) => {
      navigate(`/admin/details-genres/${rowData[0]}`);
    },
  };
  return (
    <Box sx={{ my: 5 }}>
      <Stack direction="row" display="flex" justifyContent="space-between">
        <Typography variant="h4">List of Genres</Typography>
        <CreateNewGenre />
      </Stack>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <ThemeProvider theme={theme}>
            <MUIDataTable
              title="Genres Data List"
              data={data}
              columns={columns}
              options={options}
            />
          </ThemeProvider>
        </Grid>
      </Grid>
    </Box>
  );
}
