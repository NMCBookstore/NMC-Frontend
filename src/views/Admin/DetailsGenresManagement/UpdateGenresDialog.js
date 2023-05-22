import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Box, Card, Typography } from "@mui/joy";
import { IconButton, Stack, TextField, Tooltip } from "@mui/material";
import { Edit } from "@mui/icons-material";
import { toast } from "react-hot-toast";

export default function UpdateGenresDialog() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleUpdateGenres = () => {
    console.log("this clicked");
  };

  const [genresInfo, setGenresInfo] = useState(1);

  return (
    <>
      <Tooltip title="Edit subgenre name">
        <IconButton onClick={handleClickOpen}>
          <Edit />
        </IconButton>
      </Tooltip>
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
          Update sub-genres name
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
                defaultValue={"DICTIONARIES & LANGUAGES"}
                // onChange={(e) =>
                //   setGenresInfo({ ...genresInfo, name: e.target.value })
                // }
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
              // disabled={isLoading}
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
              onClick={handleUpdateGenres}
              // disabled={isLoading}
            >
              Update
            </Button>
          </Stack>
        </DialogActions>
      </Dialog>
    </>
  );
}
