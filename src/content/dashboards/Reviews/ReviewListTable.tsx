import { Box, Grid } from '@mui/material';
import './styleUpload.css';

import MUIDataTable from 'mui-datatables';

import { useNavigate } from 'react-router-dom';
import Label from 'src/components/Label';
import { useGetAllReviewQuery } from 'src/services/reviews/reviews';

const ReviewListTable = () => {
  const navigate = useNavigate();

  const { data: reviews, isLoading } = useGetAllReviewQuery();

  const columns = [
    {
      name: 'books_id',
      label: 'Book ID',
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
        filter: true,
        sort: true,
        customBodyRender: (value) => <Label color="black">{value}</Label>
      }
    },
    {
      name: 'reported',
      label: 'Report',
      options: {
        filter: true,
        sort: true
        // customBodyRender: (value) => <Label color="black">{value}</Label>
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
