import React from 'react';
import ChartDashboard from './ChartDashboard';
import Grid from '@mui/material/Unstable_Grid2';

export default function AdminDashboard() {
  return (
    <Grid container my={2} spacing={2}>
         <Grid item container spacing={2} xs={12} sm={9}>
            <ChartDashboard />

         </Grid>
         <Grid item container spacing={2} xs={12} sm={3}>

         </Grid>

    </Grid>
  )
}
