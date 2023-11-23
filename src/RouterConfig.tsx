import { lazy } from "react";
import { RouteObject } from "react-router-dom";
/**** Layout *****/
const Layout = lazy(() => import("./layout/Layout"));

/**** Routes *****/

const OrderInfo = lazy(() => import("./page/Order/info"));
const OrderPayment = lazy(() => import("./page/Order/payment"));
const OrderReturn = lazy(() => import("./page/Order/return"));

const Cart = lazy(() => import("./page/Cart"));
const CartDemo = lazy(() => import("./page/Cart"));
const ProductDetails = lazy(() => import("./page/Product/detail"));
const ArticleDetail = lazy(() => import("./page/Article/detail"));
const ProductList = lazy(() => import("./page/Product"));


/**** Protected User Routes *****/
const RequireAuth = lazy(() => import("./features/auth/RequireAuth"));
const Cart = lazy(() => import("./page/Cart"));
// const Wishlist = lazy(() => import("./page/

/**** 404 page *****/
const NotFound = lazy(() => import("./page/Error"));

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
      { path: "/product/list", element: <ProductList /> },
      { path: "/article/detail", element: <ArticleDetail /> },
      { path: "/cartdemo", element: <CartDemo /> },
      { path: "*", element: <NotFound /> },
      { path: "/product/:id", element: <ProductDetails /> },
    ],
  },

  {
    path: "/user",
    element: [<Layout />],
    children: [
      {
        element: <RequireAuth />,
        children: [{ path: "cart", element: <Cart /> },]
      },
    ],
  },
];
export default RouterConfig;
