import React from 'react';
import { Stack } from '@mui/system';
import { NavLink, Link } from 'react-router-dom';
import logo from './logo.png';

const Footer = () => {
  return (
    <Stack direction="row" alignItems="center" p={2} 
    sx={{ position:  "sticky", 
    background: '#0F1730', 
    bot: 0, 
    justifyContent: "space-between",
    zIndex: 100 }}>
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={40} />
    </Link>
  </Stack>
  )
}

export default Footer