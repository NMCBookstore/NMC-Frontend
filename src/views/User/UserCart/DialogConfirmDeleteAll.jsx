import React from "react";
import { Button, IconButton, Tooltip } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import { Delete } from "@mui/icons-material";

export default function DialogConfirmDeleteAll({ handleDelete }) {
  const theme = useTheme();

  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseAfterDelete = () => {
    handleDelete();
    setOpen(false);
  };

  return (
    <>
      <Tooltip title="Delete All">
        <IconButton onClick={handleClickOpen}>
          <Delete />
        </IconButton>
      </Tooltip>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Are you sure you want to delete these product in your cart ?"}
        </DialogTitle>
        <DialogActions>
          <Button
            variant="outlined"
            sx={{
              color: "#db4444",
              "&:hover": {
                background: "#fff",
              },
            }}
            autoFocus
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#db4444",
              "&:hover": {
                background: "#ffa071",
              },
            }}
            onClick={handleCloseAfterDelete}
            autoFocus
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
