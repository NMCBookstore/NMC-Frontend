import {
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  Modal,
  TextField,
  Typography
} from '@mui/material';

import { Edit } from '@mui/icons-material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import React, { FC, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import {
  useCreateGenresMutation,
  useUpdateGenresMutation
} from 'src/services/genres/genresAPI';

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

interface EditGenre {
  genreId: number;
  genreName: string;
}

const EditGenres: FC<EditGenre> = ({ genreId, genreName }) => {
  const [openAdd, setOpenAdd] = React.useState(false);
  const handleOpenAdd = () => {
    setOpenAdd(true);
  };
  const handleCloseAdd = () => setOpenAdd(false);

  const [genreInfo, setGenreInfo] = useState(genreName);

  const [updateGenres, { isLoading }] = useUpdateGenresMutation();

  useEffect(() => {
    setGenreInfo(genreName);
  }, []);

  const handleCreateGenres = async (e: any) => {
    if (genreInfo !== '' && genreInfo.length > 5) {
      e.preventDefault();
      const v = await updateGenres({ id: genreId, name: genreInfo });
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
        <IconButton onClick={handleOpenAdd}>
          <Edit fontSize="small" />
        </IconButton>
      </Grid>
      <Modal
        open={openAdd}
        onClose={handleCloseAdd}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h3" component="h2">
            Edit Genres
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
                    defaultValue={genreName}
                    label="Genre name"
                    placeholder="Genres name"
                    fullWidth
                    onChange={(e) => setGenreInfo(e.target.value)}
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
                  disabled={isLoading}
                  type="submit"
                >
                  Update Genres
                </Button>
              </Box>
            </FormControl>
          </form>
        </Box>
      </Modal>
    </Grid>
  );
};

export default EditGenres;
