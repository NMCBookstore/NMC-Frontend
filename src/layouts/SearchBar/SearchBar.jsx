import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Paper, IconButton, InputBase } from '@mui/material';
import { Search } from '@mui/icons-material';

const SearchBar = () => {
  return (
<div style={{ display: 'flex', justifyContent: 'center' }}>
  <Paper
      sx={{
        borderRadius: 10,
        border: '1px solid #e3e3e3',
        pl: 1,
        boxShadow: 'none',
        mr: { sm: 10 },
      }}
    component='form'
    onSubmit={() => {}}
  >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search..."
        inputProps={{ 'aria-label': 'search google maps' }}
        onChange={() => {}}
      />
    <IconButton type='submit' sx={{ p: '5px', color: 'black' }}>
      <Search />
    </IconButton>
  </Paper>
</div>
  );
};

export default SearchBar;