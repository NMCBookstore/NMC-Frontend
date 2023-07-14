import React, { useState } from "react";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import MUIDataTable from "mui-datatables";
import {
  Box,
  Button,
  FormControlLabel,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useListUserQuery } from "../../../services/userAPI";
import CheckIcon from "@mui/icons-material/Check";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export default function UserManagement() {
  const theme = createTheme({
    typography: {
      fontSize: 16,
    },
  });

  const navigate = useNavigate();

  const { data: allUser } = useListUserQuery();

  const columns = [
    {
      name: "username",
      label: "Username",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "full_name",
      label: "Full Name",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "email",
      label: "Email",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "phone_number",
      label: "Phone Number",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "age",
      label: "Age",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "sex",
      label: "Gender",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "is_email_verified",
      label: "Email Verified",
      options: {
        filter: true,
        sort: true,
        customBodyRender: (value) => (
          <Stack display="flex" alignItems="center">
            {value ? (
              <CheckIcon fontSize="small" color="success" />
            ) : (
              <PriorityHighIcon fontSize="small" color="warning" />
            )}
          </Stack>
        ),
      },
    },
    {
      name: "created_at",
      label: "Created At",
      options: {
        filter: true,
        sort: true,
      },
    },
  ];

  return (
    <Box sx={{ my: 5 }}>
      <Stack direction="row" spacing={100}>
        <Typography variant="h4">List of User</Typography>
      </Stack>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <ThemeProvider theme={theme}>
            <MUIDataTable
              title="User Data List"
              data={allUser}
              columns={columns}
            />
          </ThemeProvider>
        </Grid>
      </Grid>
    </Box>
  );
}
