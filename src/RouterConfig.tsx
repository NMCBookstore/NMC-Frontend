import { lazy } from "react";
import { RouteObject } from "react-router-dom";
/**** Layout *****/
const Layout = lazy(() => import("./layout/Layout"));

/**** Routes *****/

const OrderInfo = lazy(() => import("./page/Order/info"));
const OrderPayment = lazy(() => import("./page/Order/payment"));
const OrderReturn = lazy(() => import("./page/Order/return"));
const Cart = lazy(() => import("./page/Cart"));

/**** Protected User Routes *****/
const RequireAuth = lazy(() => import("./features/auth/RequireAuth"));

/**** 404 page *****/
const NotFound = lazy(() => import("./page/error"));

const HomePage = lazy(() => import("./page/HomePage/home"));

const RouterConfig: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/order/info", element: <OrderInfo /> },
      { path: "/order/payment", element: <OrderPayment /> },
      { path: "/order/return", element: <OrderReturn /> },
      { path: "*", element: <NotFound /> },
    ],
  },

  {
    path: "/user",
    element: [<Layout />],
    children: [
      {
        element: <RequireAuth />,
        children: [{ path: "cart", element: <Cart /> }],
      },
    ],
  },
];
export default RouterConfig;
