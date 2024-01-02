import { Box, Grid, Stack, Tooltip } from '@mui/material';
import { useState } from 'react';
import './styleUpload.css';

import MUIDataTable from 'mui-datatables';

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetAllProductsQuery } from 'src/services/product/productAPI';
import EditBooks from './EditBooks';
import DeleteBooks from './DeleteBooks';
import Label from 'src/components/Label';
import { format, parseISO } from 'date-fns';

const imgStyle = {
  width: '140px',
  height: '208px',
  objectFit: 'cover',
  borderRadius: '20px'
} as React.CSSProperties;

const BookListTable = () => {
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
      name: 'image',
      label: 'Image',
      options: {
        filter: false,
        sort: true,
        customBodyRender: (value) => (
          <img style={imgStyle} src={value[0]} alt="Image" />
        )
      }
    },
    {
      name: 'name',
      label: ' Book name',
      options: {
        filter: false,
        sort: true
      }
    },
    {
      name: 'price',
      label: 'Price',
      options: {
        filter: false,
        sort: true
      }
    },
    {
      name: 'author',
      label: 'Author',
      options: {
        filter: false,
        sort: true
      }
    },
    {
      name: 'quantity',
      label: 'Quantity',
      options: {
        filter: false,
        sort: true
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
      name: 'rating',
      label: 'Rating',
      options: {
        filter: true,
        sort: true
      }
    },
    {
      name: 'created_at',
      label: 'Create at',
      options: {
        filter: true,
        sort: true,
        customBodyRender: (value) => {
          const formattedDate = format(parseISO(value), 'dd/MM/yyyy HH:mm:ss');
          return (formattedDate);
        }
      }
    },
    {
      name: 'Action',
      label: 'Action',
      options: {
        customBodyRender: (value, tableData) => {
          if (tableData.rowData[6]) {
            return null;
          }
          return (
            <Stack direction="row" spacing={0}>
              <Tooltip title="Edit Book">
                <EditBooks bookId={tableData.rowData[0]} />
              </Tooltip>
              <Tooltip title="Delete book">
                <DeleteBooks bookId={tableData.rowData[0]} />
              </Tooltip>
            </Stack>
          );
        },
        filter: false,
        sort: false
      }
    }
  ];

  const { data: allProduct, isLoading } = useGetAllProductsQuery();

  const options = {
    selectableRows: 'multiple',
    filterType: 'dropdown',
    responsive: 'vertical',
    search: true
  };

  return (
    <Box>
      <Grid item xs={12}>
        {allProduct && !isLoading && (
          <MUIDataTable data={allProduct} columns={columns} options={options} />
        )}
      </Grid>
    </Box>
  );
};

export default BookListTable;
