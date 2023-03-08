import React from 'react';
import { createRoot } from 'react-dom/client';
import App from "./App";
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/styles';
import { theme } from './theme';
import { CssBaseline } from '@mui/material';


const container = document.getElementById('root');
const root = createRoot(container);


root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ThemeProvider theme = {theme}>
      <CssBaseline />
        <App />
    </ThemeProvider>
  </BrowserRouter>
  </React.StrictMode>
);
