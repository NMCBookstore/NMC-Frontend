import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';
import SidebarLayout from 'src/layouts/SidebarLayout';

// Pages

const LoginPage = lazy(() => import('src/content/pages/LoginPage/LoginPage'));
// Dashboards

const Crypto = lazy(() => import('src/content/dashboards/Crypto'));
const Books = lazy(() => import('src/content/dashboards/Books'));
const RequireAuth = lazy(() => import('src/features/auth/RequireAuth'));

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
        element: <RequireAuth />,
        children: [
          {
            path: '/',
            element: <Crypto />
          },
          {
            path: 'books',
            element: <Books />
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
