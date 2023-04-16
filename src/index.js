import React, {Suspense} from 'react';
import { createRoot } from 'react-dom/client';
import App from "./App";
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/styles';
import { theme } from './theme';
import { CssBaseline } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { Provider } from 'react-redux'
import { Toaster } from 'react-hot-toast';
import { persistor} from './app/store'
import store from './app/store';
import { PersistGate } from 'redux-persist/lib/integration/react';



const container = document.getElementById('root');
const root = createRoot(container);


root.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
    <Suspense fallback={<div><CircularProgress /></div>}>
    <ThemeProvider theme = {theme}>
      <CssBaseline />
      <Toaster />
      <PersistGate loading = {null} persistor={persistor}>
        <App />
      </PersistGate>
    </ThemeProvider>
    </Suspense>
  </BrowserRouter>
  </Provider>
  </React.StrictMode>
);
