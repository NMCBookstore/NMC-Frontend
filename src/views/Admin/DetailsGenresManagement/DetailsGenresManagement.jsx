import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Button } from "@mui/material";
import { useGetSubGenresQuery } from "../../../services/subGenresAPIs";
import { useGetGenresQuery } from "../../../services/genresAPIs";
import { useNavigate, useParams } from "react-router-dom";

export default function DetailsGenresManagement() {

  const { id } = useParams();
  const { data: subGenres } = useGetSubGenresQuery(id, { skip: !id });
  const { data: genres } = useGetGenresQuery(id, { skip: !id });
  // console.log(genres)

  const navigate = useNavigate();

  return (
    <React.Fragment>
      <Typography variant="h5" gutterBottom sx={{ my: 3 }}>
        Detail of genres
      </Typography>

      <Grid container spacing={1}>
        <Grid item xs={12} sm={3}>
          <TextField
            required
            id="name"
            name="genresName"
            label="Genres"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            value={genres?.name}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Autocomplete
            disablePortal
            id="filter-demo2"
            options={subGenres ? subGenres : []}
            getOptionLabel={(option) => option?.name}
            sx={{ width: "100%" }}
            renderInput={(params) => (
              <TextField {...params} label="SubGenres" />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={2}>
          <Button onClick={()=> navigate(`/admin/details-subgenres/:id`)}>Edit subgenres</Button>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Button variant="outlined">Cancel</Button>
          &nbsp; <Button>Submit</Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
