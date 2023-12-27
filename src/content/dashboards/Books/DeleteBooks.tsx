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

import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import React, { FC, useState } from 'react';
import { useSoftDeleteProductMutation } from 'src/services/product/productAPI';
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

interface DeleteBook {
  bookId: number;
}

const DeleteBooks: FC<DeleteBook> = ({ bookId }) => {
  const [openAdd, setOpenAdd] = React.useState(false);
  const handleOpenAdd = () => {
    setOpenAdd(true);
  };
  const theme = useTheme();
  const handleCloseAdd = () => setOpenAdd(false);

  const [deleteBook, { isLoading }] = useSoftDeleteProductMutation();

  const handleDeleteBook = async (e: any) => {
    e.preventDefault();
    const v = await deleteBook(bookId);
    if ('data' in v) {
      toast.success('Book deleted !');
      handleCloseAdd();
    }
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
            Delete Book
          </Typography>
          <form onSubmit={(e) => handleDeleteBook(e)}>
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
                    Delete Book
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

export default DeleteBooks;
