import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';
import SidebarLayout from 'src/layouts/SidebarLayout';

// Pages

const Overview = lazy(() => import('src/content/overview'));
const LoginPage = lazy(() => import('src/content/pages/LoginPage/LoginPage'));
// Dashboards

const Crypto = lazy(() => import('src/content/dashboards/Revenue'));
// const RequireAuth = lazy(() => import('./features/auth/RequireAuth'));

// Status

const Status404 = lazy(() => import('src/content/pages/Status/Status404'));

const routes: RouteObject[] = [
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '',
    element: <SidebarLayout />,
    children: [
      {
        // element: <RequireAuth />,
        children: [
          {
            path: '/',
            element: <Crypto />
          },

          {
            path: '*',
            element: <Status404 />
          }
        ]
      }
    ]
  }
];

export default routes;
