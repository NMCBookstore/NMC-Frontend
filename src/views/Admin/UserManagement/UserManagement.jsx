import React, { useState } from "react";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import MUIDataTable from "mui-datatables";
import { Box, Button, FormControlLabel, Stack, TextField, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useListUserQuery } from "../../../services/userAPI";
import CheckIcon from '@mui/icons-material/Check';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';

export default function UserManagement() {

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
              <CheckIcon
                fontSize="small"
                color="success" />
            ) : (
              <PriorityHighIcon
                fontSize="small"
                color="warning" />
            )}
          </Stack>
        )
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
            data={allUser}
            columns={columns}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
