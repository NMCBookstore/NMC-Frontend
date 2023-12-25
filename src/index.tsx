import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';

import 'nprogress/nprogress.css';
import App from 'src/App';
import { Provider } from 'react-redux';
import store from './app/store';
import { persistor } from './app/store';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { SidebarProvider } from 'src/contexts/SidebarContext';
import * as serviceWorker from 'src/serviceWorker';
import { Toaster } from 'react-hot-toast';
import { Suspense } from 'react';
import SuspenseLoader from './components/SuspenseLoader';

ReactDOM.createRoot(document.getElementById('root')).render(
  <HelmetProvider>
    <Provider store={store}>
      <SidebarProvider>
        <BrowserRouter>
        <Suspense fallback={<SuspenseLoader />}>
          <Toaster />
          <PersistGate loading={null} persistor={persistor}>
            <App />
          </PersistGate>
          </Suspense>
        </BrowserRouter>
      </SidebarProvider>
    </Provider>
  </HelmetProvider>
);

serviceWorker.unregister();
