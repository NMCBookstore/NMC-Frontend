import {
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  Modal,
  Stack,
  Typography,
  useTheme
} from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';
import React, { FC, useState } from 'react';
import toast from 'react-hot-toast';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import { useSoftDeleteGenresMutation } from 'src/services/genres/genresAPI';

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

interface DeleteReview {
    reviewId: number;
}

const DeleteReviews: FC<DeleteReview> = ({ reviewId }) => {
  const [openAdd, setOpenAdd] = React.useState(false);
  const handleOpenAdd = () => {
    console.log('genreId', reviewId);
    setOpenAdd(true);
  };
  const theme = useTheme();
  const handleCloseAdd = () => setOpenAdd(false);

  const [name, setName] = useState('');

  const [deleteGenre, { isLoading }] = useSoftDeleteGenresMutation();

  const handleDeleteGenres = async (e: any) => {
    e.preventDefault();
    // const v = await deleteGenre(genreId);
    // if ('data' in v) {
    //   toast.success('Genres deleted !');
    //   handleCloseAdd();
    // }
  };

  return (
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid item>
        <IconButton
          sx={{
            '&:hover': { background: theme.colors.error.lighter },
            color: theme.palette.error.main
          }}
          color="inherit"
          size="small"
          onClick={handleOpenAdd}
        >
          <DeleteTwoToneIcon fontSize="small" />
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
            Delete Genres
          </Typography>
          <form onSubmit={(e) => handleDeleteGenres(e)}>
            <FormControl fullWidth>
              <Box
                mt={2}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Stack
                  direction="row"
                  spacing={20}
                  sx={{ marginBottom: 2, marginRight: 2 }}
                >
                  <Button
                    variant="contained"
                    size="large"
                    disabled={isLoading}
                    onClick={handleCloseAdd}
                  >
                    Cancel
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: '#e74c3c',
                      '&:hover': {
                        backgroundColor: '#DB4444'
                      }
                    }}
                    size="large"
                    disabled={isLoading}
                    type="submit"
                  >
                    Delete Genres
                  </Button>
                </Stack>
              </Box>
            </FormControl>
          </form>
        </Box>
      </Modal>
    </Grid>
  );
};

export default DeleteReviews;
