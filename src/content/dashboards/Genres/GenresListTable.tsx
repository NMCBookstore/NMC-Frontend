import { Box, Grid, Stack, Tooltip } from '@mui/material';
import './styleUpload.css';
import MUIDataTable from 'mui-datatables';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useGetGenresQuery } from 'src/services/genres/genresAPI';
import Label from 'src/components/Label';
import { Edit } from '@mui/icons-material';
import EditGenres from './EditGenres';
import DeleteGenres from './DeleteGenres';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { format, parseISO } from 'date-fns';

const imgStyle = {
  width: '140px',
  height: '208px',
  objectFit: 'cover',
  borderRadius: '20px'
} as React.CSSProperties;

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

const GenresListTable = () => {
  const navigate = useNavigate();

  const columns = [
    {
      name: 'id',
      label: ' ID',
      options: {
        filter: false,
        sort: true
      }
    },
    {
      name: 'name',
      label: ' Name',
      options: {
        filter: false,
        sort: false
      }
    },
    {
      name: 'is_deleted',
      label: 'Status',
      options: {
        filter: true,
        sort: true,
        filterOptions: {
          names: ['Unactive', 'Active'],
          logic(value, filters) {
            if (filters.length) {
              const activeFilter = filters.find(
                (filter) => filter === 'Unactive'
              );
              const unactiveFilter = filters.find(
                (filter) => filter === 'Active'
              );
              if (activeFilter && unactiveFilter) {
                return value === false || value === true;
              }
              if (activeFilter) {
                return value === false;
              }
              if (unactiveFilter) {
                return value === true;
              }
            }
            return true;
          }
        },
        customBodyRender: (value) =>
          value ? (
            <Label color="error">Unactive</Label>
          ) : (
            <Label color="success">Active</Label>
          )
      }
    },
    {
      name: 'created_at',
      label: 'Create at',
      options: {
        filter: false,
        sort: true,
        customBodyRender: (value) => {
          const formattedDate = format(parseISO(value), 'dd/MM/yyyy HH:mm:ss');
          return formattedDate;
        }
      }
    },
    {
      name: 'Action',
      label: 'Action',
      options: {
        customBodyRender: (value, tableGenres) => {
          if (tableGenres.rowData[2]) {
            // Kiểm tra nếu là trạng thái "Unactive"
            return null; // Trả về null để bỏ qua hiển thị hai thành phần
          }

          return (
            <Stack direction="row" spacing={0}>
              <Tooltip title="Edit genre">
                <EditGenres
                  genreId={tableGenres.rowData[0]}
                  genreName={tableGenres.rowData[1]}
                />
              </Tooltip>
              <Tooltip title="Delete genre">
                <DeleteGenres genreId={tableGenres.rowData[0]} />
              </Tooltip>
            </Stack>
          );
        },
        filter: false,
        sort: false
      }
    }
  ];

  const { data: genres } = useGetGenresQuery();

  const options = {
    selectableRows: 'none',
    filterType: 'dropdown',
    responsive: 'vertical'
  };

  return (
    <Box>
      <Grid item xs={12}>
        {genres && (
          <MUIDataTable data={genres} columns={columns} options={options} />
        )}
      </Grid>
    </Box>
  );
};

export default GenresListTable;
