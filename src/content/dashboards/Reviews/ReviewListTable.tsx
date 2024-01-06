import { Box, Grid, Stack, Tooltip } from '@mui/material';
import './styleUpload.css';

import MUIDataTable from 'mui-datatables';

import { useNavigate } from 'react-router-dom';
import Label from 'src/components/Label';
import { useGetAllReviewQuery } from 'src/services/reviews/reviews';
import DeleteGenres from '../Genres/DeleteGenres';
import DeleteReviews from './DeleteReviews';

const ReviewListTable = () => {
  const navigate = useNavigate();

  const { data: reviews, isLoading } = useGetAllReviewQuery();

  const columns = [
    {
      name: 'id',
      label: 'Number',
      options: {
        filter: false,
        sort: true
      }
    },
    {
      name: 'books_id',
      label: 'Book number',
      options: {
        filter: false,
        sort: true
      }
    },
    {
      name: 'comments',
      label: 'Comment',
      options: {
        filter: false,
        sort: false,
        customBodyRender: (value) => <Label color="primary">{value}</Label>
      }
    },
    {
      name: 'username',
      label: 'Username',
      options: {
        filter: false,
        sort: false,
        customBodyRender: (value) => <Label color="warning">{value}</Label>
      }
    },
    {
      name: 'disliked',
      label: 'Dislike',
      options: {
        filter: false,
        sort: true,
        customBodyRender: (value) => <Label color="black">{value}</Label>
      }
    },
    {
      name: 'liked',
      label: 'Like',
      options: {
        filter: false,
        sort: true,
        customBodyRender: (value) => <Label color="black">{value}</Label>
      }
    },
    {
      name: 'reported',
      label: 'Is Report',
      options: {
        filter: true,
        sort: true,
        filterOptions: {
          names: ['Yes', 'No'],
          logic(value, filters) {
            if (filters.length) {
              const activeFilter = filters.find((filter) => filter === 'Yes');
              const unactiveFilter = filters.find((filter) => filter === 'No');
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
            <Label color="error">Yes</Label>
          ) : (
            <Label color="success">No</Label>
          )
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
            <Label color="error">Deleted</Label>
          ) : (
            <Label color="success">Active</Label>
          )
      }
    },
    {
      name: 'Action',
      label: 'Action',
      options: {
        customBodyRender: (value, tableGenres) => {
          if (tableGenres.rowData[7]) {
            // Kiểm tra nếu là trạng thái "Unactive"
            return null; // Trả về null để bỏ qua hiển thị hai thành phần
          }
          return (
            <Stack direction="row" spacing={0}>
              <Tooltip title="Delete genre">
                <DeleteReviews reviewId={tableGenres.rowData[0]} />
              </Tooltip>
            </Stack>
          );
        },
        filter: false,
        sort: false
      }
    }
  ];

  const options = {
    selectableRows: 'none',
    filterType: 'dropdown',
    responsive: 'vertical',
    search: true
  };

  return (
    <Box>
      <Grid item xs={12}>
        {reviews && !isLoading && (
          <MUIDataTable data={reviews} columns={columns} options={options} />
        )}
      </Grid>
    </Box>
  );
};

export default ReviewListTable;
