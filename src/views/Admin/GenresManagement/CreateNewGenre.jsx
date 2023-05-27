import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Stack, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useCreateGenresMutation } from '../../../services/genresAPIs';

export default function CreateNewGenre() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState();
  const [createGenre] = useCreateGenresMutation()

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCreateGenres = async () => {
    const v = await createGenre(name)
    handleClose();
  };
  return (
    <>
      <Button
        variant="contained"
        onClick={handleClickOpen}
        sx={{
          my: 1,
          backgroundColor: "#db4444",
          "&:hover": {
            backgroundColor: "#db4444",
          },
        }}
      >
        Create new genre
      </Button>
      <Dialog
        PaperProps={{
          style: {
            backgroundColor: "#282828",
            boxShadow: "none",
            minWidth: 480,
            maxWidth: 480,
            minHeight: 220,
            maxHeight: 220,
          },
        }}
        color="#282828"
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        style={{ minWidth: "100%", minHeight: "100%" }}
      >
        <DialogTitle sx={{ color: "#fff" }} id="alert-dialog-title">
          Create genre
        </DialogTitle>
        <DialogContent>
          <Grid container>
            <Grid item xs={3} sm={12}>
              <TextField
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  backgroundColor: "#fff",
                  borderRadius: 5,
                }}
                placeholder="Name of the genre"
                fullWidth
                name="name"
                onChange={(e) => setName(e.target.value)}
              ></TextField>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Stack
            direction="row"
            spacing={2}
            sx={{ marginBottom: 2, marginRight: 2 }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#95a5a6",
                "&:hover": {
                  backgroundColor: "#95a5a6",
                },
              }}
              onClick={handleClose}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#e74c3c",
                "&:hover": {
                  backgroundColor: "#DB4444",
                },
              }}
              onClick={handleCreateGenres}
            >
              Create
            </Button>
          </Stack>
        </DialogActions>
      </Dialog>
    </>

  )
}