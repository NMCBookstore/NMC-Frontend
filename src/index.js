import React, {Suspense} from 'react';
import { createRoot } from 'react-dom/client';
import App from "./App";
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/styles';
import { theme } from './theme';
import { CssBaseline } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import  store  from './app/store'
import { Provider } from 'react-redux'



const container = document.getElementById('root');
const root = createRoot(container);


root.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
    <Suspense fallback={<div><CircularProgress /></div>}>
    <ThemeProvider theme = {theme}>
      <CssBaseline />
        <App />
    </ThemeProvider>
    </Suspense>
  </BrowserRouter>
  </Provider>
  </React.StrictMode>
);
