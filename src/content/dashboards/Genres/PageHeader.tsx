import {
  Typography,
  Button,
  Grid,
  TextField,
  Autocomplete,
  FormControl,
  Box,
  Modal
} from '@mui/material';

import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import React, { useState } from 'react';
import shortid from 'shortid';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from 'src/features/auth/authSlice';
import { useCreateGenresMutation } from 'src/services/genres/genresAPI';
import toast from 'react-hot-toast';

const style = {
  overflow: 'auto',
  position: 'absolute' as 'absolute',
  borderRadius: '8px',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100vw',
  maxWidth: '800px',
  maxHeight: '90vh',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4
};
function PageHeader() {
  const user = useSelector(selectCurrentUser);
  const [openAdd, setOpenAdd] = React.useState(false);
  const handleOpenAdd = () => setOpenAdd(true);
  const handleCloseAdd = () => setOpenAdd(false);

  const [name, setName] = useState('');

  const [createGenres, { isLoading }] = useCreateGenresMutation();

  const handleCreateGenres = async (e: any) => {
    if (name !== '' && name.length > 5) {
      e.preventDefault();
      const v = await createGenres(name);
      if ('data' in v) {
        toast.success('Create new genres success !');
        handleCloseAdd();
      }
    } else {
      toast.error("Genre name can't be that short");
    }
  };

  return (
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid item>
        <Typography variant="h3" component="h3" gutterBottom>
          Genres List
        </Typography>
        <Typography variant="subtitle2">
          {user.username}, these are your Genres
        </Typography>
      </Grid>
      <Grid item>
        <Button
          sx={{ mt: { xs: 2, md: 0 } }}
          variant="contained"
          startIcon={<AddTwoToneIcon fontSize="small" />}
          onClick={handleOpenAdd}
        >
          Create genres
        </Button>
      </Grid>
      <Modal
        open={openAdd}
        onClose={handleCloseAdd}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h3" component="h2">
            Add Genres
          </Typography>
          <form onSubmit={(e) => handleCreateGenres(e)}>
            <FormControl fullWidth>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="stretch"
                spacing={2}
              >
                <Grid item xs={12} md={12} my={3}>
                  <TextField
                    label="Genre name"
                    placeholder="Genres name"
                    fullWidth
                    onChange={(e) => setName(e.target.value)}
                  />
                </Grid>
              </Grid>
              <Box
                mt={2}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Button
                  variant="contained"
                  size="large"
                  endIcon={<AddCircleOutlineIcon />}
                  disabled={isLoading}
                  type="submit"
                >
                  Create Genres
                </Button>
              </Box>
            </FormControl>
          </form>
        </Box>
      </Modal>
    </Grid>
  );
}

export default PageHeader;
