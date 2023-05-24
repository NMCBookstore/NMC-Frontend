import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Box, Button, Stack } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import SubgenresTable from "./SubgenresTable";
import { useGetOneGenresQuery, useUpdateGenresMutation } from "../../../services/genresAPIs";
import CreateNewSubgenre from "./CreateNewSubgenre";

export default function DetailsGenresManagement() {
  const { id } = useParams();
  const { data: genres, isFetching } = useGetOneGenresQuery(id, { skip: !id });
  const [genreInfo, setGenreInfo] = useState()
  const [updateGenre] = useUpdateGenresMutation()

  const navigate = useNavigate();

  useEffect(() => {
    setGenreInfo(genres)
  }, [isFetching])

  const handldeSubmit = async () => {
    const v = await updateGenre({ id, name: genreInfo?.name })
  }

  return (
    <React.Fragment>
      <Typography variant="h5" gutterBottom sx={{ my: 3 }}>
        Detail of genres
      </Typography>

      <Grid container spacing={1}>
        <Grid item xs={12} sm={12}>
          <Stack direction="row" display="flex" justifyContent="space-between">
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
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                <CreateNewSubgenre id={id} />
              </Box>
            </Grid>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Button
            variant="outlined"
            onClick={() => navigate("/admin/manage-genres")}
          >
            Cancel
          </Button>
          &nbsp;
          <Button onClick={handldeSubmit}>
            Submit
          </Button>
        </Grid>
        <Grid item xs={12} sm={12}>
          <SubgenresTable id={id} />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
