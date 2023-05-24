import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Box, Button, Stack } from "@mui/material";
import { Link, useNavigate, useParams } from "react-router-dom";
import SubgenresTable from "./SubgenresTable";
import { useGetOneGenresQuery } from "../../../services/genresAPIs";

export default function DetailsGenresManagement() {
  const { id } = useParams();
  const { data: genres, isFetching } = useGetOneGenresQuery(id, { skip: !id });
  const [genreInfo, setGenreInfo] = useState()

  const navigate = useNavigate();

  useEffect(() => {
    setGenreInfo(genres)
  }, [isFetching])


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
            fullWidth
            autoComplete="given-name"
            label="Genres"
            variant="standard"
            value={genreInfo?.name}
            focused
            onChange={(e) =>
              setGenreInfo({ ...genreInfo, name: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
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
        </Grid>
        <Grid item xs={12} sm={12}>
          <Button variant="outlined">Cancel</Button>
          &nbsp; <Button>Submit</Button>
        </Grid>
        <Grid item xs={12} sm={12}>
          <SubgenresTable id={id} />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
