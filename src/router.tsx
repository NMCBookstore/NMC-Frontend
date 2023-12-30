import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';
import SidebarLayout from 'src/layouts/SidebarLayout';

// Pages

const LoginPage = lazy(() => import('src/content/pages/LoginPage/LoginPage'));
// Dashboards

const Revenue = lazy(() => import('src/content/dashboards/Revenue'));
const Books = lazy(() => import('src/content/dashboards/Books'));
const Genres = lazy(() => import('src/content/dashboards/Genres'));
const RequireAuth = lazy(() => import('src/features/auth/RequireAuth'));
const Order = lazy(() => import('src/content/dashboards/Order'));
const Reviews = lazy(() => import('src/content/dashboards/Reviews'));
const Profile = lazy(() => import('src/content/dashboards/Users'));

// Status

const Status404 = lazy(() => import('src/content/pages/Status/Status404'));

const routes: RouteObject[] = [
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '/',
    element: <SidebarLayout />,
    children: [
      {
        element: <RequireAuth />,
        children: [
          {
            path: '/',
            element: <Revenue />
          },
          {
            path: '/books',
            element: <Books />
          },
          {
            path: '/genres',
            element: <Genres />
          },
          {
            path: '/orders',
            element: <Order />
          },
          { path: '/reviews', element: <Reviews /> },
          {
            path: '*',
            element: <Status404 />
          },
          { path: '/profile', element: <Profile /> },
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
