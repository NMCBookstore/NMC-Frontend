import { AppBar, Grid, Toolbar, Typography,Box, Container } from '@mui/material';
import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from './logo.png';


const Header = () => {
  return (
    <> 
    <AppBar position="static" style={{ backgroundColor: '#1A2138' }}>
      <Toolbar>
        {/* <Grid mt={-3} item xs={6} container spacing={0} columns={2}>
          <Typography variant="subtitle2" sx={{ mr: 90 }}>
            Free shipping
          </Typography>
          <Typography gutterBottom variant="subtitle2" sx={{ ml: 10 }}>
            Contact number: <Link href="/" color="white">Link Text</Link>
          </Typography>
        </Grid> */}

      <Container maxWidth="sm">
        <Typography variant="overline" marginLeft={10}>
          Free shipping
        </Typography>
        <Typography variant="overline" marginLeft={10}> 
        Contact info: +(84) 865 020 238
        </Typography>
      </Container>
      </Toolbar>
    </AppBar>
    </>
  )
}

export default Header