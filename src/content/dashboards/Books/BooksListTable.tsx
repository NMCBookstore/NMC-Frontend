import { Box, Grid, Stack, Tooltip } from '@mui/material';
import { useState } from 'react';
import './styleUpload.css';

import MUIDataTable from 'mui-datatables';

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetAllProductsQuery } from 'src/services/product/productAPI';
import EditBooks from './EditBooks';
import DeleteBooks from './DeleteBooks';

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
      name: 'rating',
      label: 'Rating',
      options: {
        filter: true,
        sort: true
      }
    },
    {
      name: 'Action',
      label: 'Action',
      options: {
        customBodyRender: (value, tableData) => {
          return (
            <Stack direction="row" spacing={0}>
              <Tooltip title="Edit Book">
                <EditBooks bookId={tableData.rowData[0]} />
              </Tooltip>
              <Tooltip title="Delete book">
                <DeleteBooks bookId={tableData.rowData[0]}/>
              </Tooltip>
            </Stack>
          );
        },
        filter: false,
        sort: false
      }
    }
  ];
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(24);
  const { data: allProduct, isLoading } = useGetAllProductsQuery({
    page_id: page,
    page_size: rowsPerPage
  });

  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 24));
    setPage(0);
  };

  const totalProductCount = allProduct?.total_page
    ? allProduct.total_page * rowsPerPage
    : 0;

  const options = {
    selectableRows: 'multiple',
    filterType: 'dropdown',
    responsive: 'vertical',
    count: totalProductCount,
    serverSide: true,
    search: true,
    page: page,
    rowsPerPage: rowsPerPage,
    onChangePage: handleChangePage,
    onChangeRowsPerPage: handleChangeRowsPerPage
  };

  return (
    <Box>
      <Grid item xs={12}>
        {allProduct && !isLoading && (
          <MUIDataTable
            data={allProduct?.books}
            columns={columns}
            options={options}
          />
        )}
      </Grid>
    </Box>
  );
};

export default BookListTable;
