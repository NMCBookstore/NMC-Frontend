import { lazy } from "react";
import { RouteObject } from "react-router-dom";
/**** Layout *****/
const Layout = lazy(() => import("./layout/Layout"));

/**** Protected User Routes *****/

const HomePage = lazy(() => import("./page/HomePage/home"));

const RouterConfig: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage /> }
    ],
  },

  {
    path: "/user",
    element: [<Layout />],
    children: [
      {},
    ],
  },
];
export default RouterConfig;
