import { lazy } from "react";
import { Navigate } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./layouts/Header/Header";

/****Layouts*****/
const Layout = lazy(() => import("./layouts/FullLayout/Layout"));
const SideBar = lazy(() => import("./layouts/SideBar/SideBar"));
/****Routes*****/

const About = lazy(() => import("./pages/About"));
const UserLogin = lazy(() => import("./views/UserLogin"));
const UserRegister = lazy(() => import("./views/UserRegister"));
const ProductDetails = lazy(() => import("./views/ProductDetails"));
const SearchFilter = lazy(() => import("./views/SearchFilter"));
const UserProfile = lazy(() => import("./views/UserProfile"));
const UserCart = lazy(() => import("./views/UserCart"));

/****Routes*****/

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
      { path: "user-profile", element: <UserProfile /> },
      {path:"cart", element: <UserCart />}
    ],
  },

  {
    path: "/user",
    element: <Layout />,
    children: [
      { path: "home", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "about", element: <About /> },
    ],
  },
];

export default RouterCfg;
