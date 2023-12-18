import { GoogleLogin } from "@react-oauth/google";
import { lazy } from "react";
import { RouteObject } from "react-router-dom";
/**** Layout *****/
const Layout = lazy(() => import("./layout/Layout"));

/**** Routes *****/

const OrderInfo = lazy(() => import("./page/Order/info"));
const OrderPayment = lazy(() => import("./page/Order/payment"));
const PaymentContainer = lazy(() => import("./page/Order/PaymentContainer"));
const OrderReturn = lazy(() => import("./page/Order/return"));

const Cart = lazy(() => import("./page/Cart"));
const CartDemo = lazy(() => import("./page/Cart"));
const ProductDetails = lazy(() => import("./page/Product/detail"));
const ArticleDetail = lazy(() => import("./page/Article/detail"));
const ProductList = lazy(() => import("./page/Product"));
const Profile = lazy(() => import("./page/Profile"));
const Wishlist = lazy(() => import("./page/WishList"));

/**** Protected User Routes *****/
const RequireAuth = lazy(() => import("./features/auth/RequireAuth"));

/**** Protected Checkout *****/
const RequireCartItem = lazy(() => import("./features/cart/RequireCart"));

/**** 404 page *****/
const NotFound = lazy(() => import("./page/error"));

const HomePage = lazy(() => import("./page/HomePage/home"));

const LoginGoogle = lazy(() => import("./page/HomePage/GoogleRedirect"));

const RouterConfig: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/product/all", element: <ProductList /> },
      { path: "/article/detail", element: <ArticleDetail /> },
      { path: "/cartdemo", element: <CartDemo /> },
      { path: "*", element: <NotFound /> },
      { path: "/product/:id", element: <ProductDetails /> },
      { path: "/login/oauth/google", element: <LoginGoogle /> },
    ],
  },

  {
    path: "/user",
    element: [<Layout />],
    children: [
      {
        element: <RequireAuth />,
        children: [
          { path: "cart", element: <Cart /> },
          { path: "order/return", element: <OrderReturn /> },

          {
            element: <RequireCartItem />,
            children: [
              { path: "order/info", element: <OrderInfo /> },
              {
                path: "order",
                element: <PaymentContainer />,
                children: [{ path: "payment", element: <OrderPayment /> }],
              },
            ],
          },
          { path: "profile", element: <Profile /> },
          { path: "wishlist", element: <Wishlist /> },
        ],
      },
    ],
  },
];
export default RouterConfig;
