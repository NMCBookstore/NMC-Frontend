import { lazy } from "react";
import Home from "./components/Home/Home";
import { Navigate } from "react-router-dom";


/**** User Layouts*****/
const Layout = lazy(() => import("./layouts/FullLayout/Layout"));

/**** Admin Layouts*****/
const AdminLayout = lazy(() => import ("./layoutAdmin/AdminLayout"));

/**** User Routes*****/

const About = lazy(() => import("./pages/About"));
const UserLogin = lazy(() => import("./views/UserLogin"));
const UserRegister = lazy(() => import("./views/UserRegister"));
const ProductDetails = lazy(() => import("./views/ProductDetails"));
const SearchFilter = lazy(() => import("./views/SearchFilter"));
const UserProfile = lazy(() => import("./views/UserProfile"));
const UserCart = lazy(() => import("./views/UserCart"));
const UserCheckout = lazy(() => import("./views/UserCheckout"));
const UserWishlist = lazy(() => import("./views/UserWishlist"));

/**** Admin Routes*****/

const AdminDashboard = lazy(() => import("./views/AdminDashboard"));

const RouterCfg = [
  { path: "login", element: <UserLogin /> },
  { path: "register", element: <UserRegister /> },

  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "product/:id", element: <ProductDetails /> },
      { path: "search-filter", element: <SearchFilter /> },
    ],
  },

  {
    path: "/user",
    element: <Layout />,
    children: [
      { path: "home", element: <Home /> },
      { path: "profile", element: <UserProfile /> },
      { path: "cart", element: <UserCart /> },
      { path: "wishlist", element: <UserWishlist /> },
      { path: "checkout", element: <UserCheckout /> },

    ],
  },

  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      { path: "dashboard", element: <AdminDashboard /> },
    ],
  },
];

export default RouterCfg;
